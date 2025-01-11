"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient.js";

export default function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    setError(null);

    // Check for validation errors
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!formData.agreeToTerms) {
      setError("Please agree to the Terms of Use and Privacy Policy");
      return;
    }

    try {
      // Sign up the user
      const { data: signupData, error: signupError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      if (signupError) {
        setError(signupError.message);
        return;
      }

      const userId = signupData.user?.id;

      // Insert user profile into the "profiles" table
      /* const { error: profileError } = await supabase
        .from("profiles")
        .insert({
          id: userId, // Link to the user's ID
          full_name: formData.fullName,
        });

      if (profileError) {
        setError(profileError.message);
        return;
      } */

      // Redirect to dashboard
      router.push("/dashboard");
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-purple-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-purple-700 text-center mb-8">
          Register
        </h2>

        <form onSubmit={handleSignup} className="space-y-4">
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div className="space-y-2">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="space-y-2">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="space-y-2">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="space-y-2">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Re-enter Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="h-4 w-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
            />
            <label className="ml-2 text-sm text-gray-600">
              I agree to the{" "}
              <a href="/terms" className="text-purple-600 hover:underline">
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="/privacy" className="text-purple-600 hover:underline">
                Privacy Policy
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full p-3 text-white font-medium rounded-md bg-purple-600 hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            REGISTER
          </button>

          <div className="text-center pt-4">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <a href="/login" className="text-purple-600 hover:underline">
                Login here
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}