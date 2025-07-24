const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white py-16 px-6">
      <div className="max-w-4xl mx-auto bg-[#1f2937] p-10 rounded-xl shadow-xl">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-400">Privacy Policy</h1>
        <p className="mb-4 text-sm text-gray-400 text-center">Last updated: July 24, 2025</p>

        <p className="mb-6">
          TecxSpend, developed by <strong>Tecxzo</strong>, is committed to protecting your privacy. This Privacy Policy outlines how your information is handled when using the TecxSpend mobile application.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2 text-blue-300">1. Information We Collect</h2>
        <ul className="list-disc list-inside text-gray-300 mb-6 space-y-1">
          <li>We do <strong>not collect any personal information</strong> (such as name, email, phone number).</li>
          <li>All user data (e.g., expenses, notes) is stored <strong>locally on the device</strong>.</li>
          <li>We may use <strong>Google Drive backup</strong> only if the user explicitly enables it.</li>
          <li>No unique device identifiers are collected or stored.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2 text-blue-300">2. How We Use Information</h2>
        <p className="mb-6 text-gray-300">
          All local data is used only to support the functionality of the app such as expense tracking, analysis, and personal budget management. We do not analyze or transmit any user data externally.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2 text-blue-300">3. Data Storage and Security</h2>
        <p className="mb-6 text-gray-300">
          Your data is stored locally on your device. If you choose to back up your data to Google Drive, it is saved in a secure, private folder accessible only to TecxSpend. No data is shared with third parties.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2 text-blue-300">4. Google Drive Integration</h2>
        <p className="mb-6 text-gray-300">
          We use Google Sign-In and Google Drive APIs to offer optional backup and restore. This integration is used solely for personal data management and requires your explicit authorization.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2 text-blue-300">5. Data Retention & Deletion</h2>
        <p className="mb-6 text-gray-300">
          All user data is retained on your local device. You may delete your data at any time by:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-6 space-y-1">
          <li>Manually deleting entries within the app</li>
          <li>Clearing app data from system settings</li>
          <li>Removing any backups from your Google Drive</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2 text-blue-300">6. User Control</h2>
        <p className="mb-6 text-gray-300">
          TecxSpend gives users full control over their data. No data is ever transmitted without consent, and backups are strictly user-controlled.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2 text-blue-300">7. Children's Privacy</h2>
        <p className="mb-6 text-gray-300">
          Our app is not intended for children under the age of 13. We do not knowingly collect or store data from children.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2 text-blue-300">8. Policy Changes</h2>
        <p className="mb-6 text-gray-300">
          We may update this policy periodically. Any changes will be reflected on this page with an updated date.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2 text-blue-300">9. Contact</h2>
        <p className="text-gray-300">
          If you have any questions or concerns regarding this privacy policy, feel free to contact us at:
        </p>
        <p className="mt-2">
          <a href="mailto:tecxzo.dev@gmail.com" className="text-blue-400 underline hover:text-blue-500">
            tecxzo.dev@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
