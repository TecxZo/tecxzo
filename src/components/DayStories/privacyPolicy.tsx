
const PrivacyPolicyDayStories = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white py-16 px-6">
      <div className="max-w-4xl mx-auto bg-[#1f2937] p-10 rounded-xl shadow-xl">
        <h1 className="text-4xl font-bold mb-6 text-center text-pink-400">Privacy Policy</h1>
        <p className="mb-4 text-sm text-gray-400 text-center">Last updated: July 24, 2025</p>

        <p className="mb-6">
          <strong>DayStories</strong>, developed by <strong>Tecxzo</strong>, is committed to protecting your privacy. This Privacy Policy explains how we handle your personal data when you use our mobile application.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2 text-pink-300">1. Information We Collect</h2>
        <ul className="list-disc list-inside text-gray-300 mb-6 space-y-1">
          <li>We do not collect personal identifiers such as name, email, or phone number.</li>
          <li>Your entries, images, and emotions are stored locally on your device.</li>
          <li>Optionally, users may back up their data via Google Drive, with consent.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2 text-pink-300">2. How Your Data is Used</h2>
        <p className="mb-6 text-gray-300">
          All your content stays on your device. If you opt for backup, your journal data is encrypted and stored securely in your Google Drive. No data is sold or used for advertising purposes.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2 text-pink-300">3. Data Security</h2>
        <p className="mb-6 text-gray-300">
          We ensure your data is encrypted during backup and storage. Local data is stored using secure mechanisms provided by your device’s operating system.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2 text-pink-300">4. Emotion Detection</h2>
        <p className="mb-6 text-gray-300">
          DayStories may use offline emotion classification models to analyze entries. No data is sent to external servers — everything runs on-device.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2 text-pink-300">5. Google Services</h2>
        <p className="mb-6 text-gray-300">
          Google Drive access is only used if you explicitly choose to back up your data. This is managed via the Google Sign-In process and is never accessed without your permission.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2 text-pink-300">6. Children’s Privacy</h2>
        <p className="mb-6 text-gray-300">
          Our app is not directed toward children under 13. We do not knowingly collect any personal data from children.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2 text-pink-300">7. Consent</h2>
        <p className="mb-6 text-gray-300">
          By using DayStories, you agree to this Privacy Policy and grant us permission to store and process your data as described.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2 text-pink-300">8. Changes to this Policy</h2>
        <p className="mb-6 text-gray-300">
          We may update this Privacy Policy occasionally. All changes will be posted on this page, and you are advised to review it regularly.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2 text-pink-300">9. Contact</h2>
        <p className="text-gray-300">
          If you have any questions, please contact us at:
        </p>
        <p className="mt-2">
          <a href="mailto:tecxzo.dev@gmail.com" className="text-pink-400 underline hover:text-pink-500">
            tecxzo.dev@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyDayStories;
