const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#181818] text-white flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center mb-3 md:mb-4 lg:mb-5 text-white tracking-tight leading-tight">
          Privacy Policy
        </h1>
        <p className="text-center text-gray-400 text-xs md:text-sm lg:text-base mb-1 md:mb-2 lg:mb-3">
          Last updated: July 24, 2025
        </p>
        <p className="text-xs md:text-sm lg:text-base text-gray-300 leading-relaxed text-center mb-6 md:mb-8 lg:mb-10 max-w-2xl mx-auto">
          TecxSpend, developed by <strong>Tecxzo</strong>, is committed to
          protecting your privacy. This Privacy Policy outlines how your
          information is handled when using the TecxSpend mobile application.
        </p>
        <div className="space-y-12 md:space-y-14">
          <section>
            <h2 className="text-lg font-semibold mb-2 text-white">
              1. Information We Collect
            </h2>
            <ul className="list-disc list-inside text-gray-300 mb-6 space-y-1">
              <li>
                We do <strong>not collect any personal information</strong>{" "}
                (such as name, email, phone number).
              </li>
              <li>
                All user data (e.g., expenses, notes) is stored{" "}
                <strong>locally on the device</strong>.
              </li>
              <li>
                We may use <strong>Google Drive backup</strong> only if the user
                explicitly enables it.
              </li>
              <li>No unique device identifiers are collected or stored.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-semibold mb-2 text-white">
              2. How We Use Information
            </h2>
            <p className="text-base text-gray-300 leading-relaxed mb-6">
              All local data is used only to support the functionality of the
              app such as expense tracking, analysis, and personal budget
              management. We do not analyze or transmit any user data
              externally.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold mb-2 text-white">
              3. Data Storage and Security
            </h2>
            <p className="text-base text-gray-300 leading-relaxed mb-6">
              Your data is stored locally on your device. If you choose to back
              up your data to Google Drive, it is saved in a secure, private
              folder accessible only to TecxSpend. No data is shared with third
              parties.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold mb-2 text-white">
              4. Google Drive Integration
            </h2>
            <p className="text-base text-gray-300 leading-relaxed mb-6">
              We use Google Sign-In and Google Drive APIs to offer optional
              backup and restore. This integration is used solely for personal
              data management and requires your explicit authorization.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold mb-2 text-white">
              5. Data Retention & Deletion
            </h2>
            <p className="text-base text-gray-300 leading-relaxed mb-6">
              All user data is retained on your local device. You may delete
              your data at any time by:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-6 space-y-1">
              <li>Manually deleting entries within the app</li>
              <li>Clearing app data from system settings</li>
              <li>Removing any backups from your Google Drive</li>
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-semibold mb-2 text-white">
              6. User Control
            </h2>
            <p className="text-base text-gray-300 leading-relaxed mb-6">
              TecxSpend gives users full control over their data. No data is
              ever transmitted without consent, and backups are strictly
              user-controlled.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold mb-2 text-white">
              7. Children's Privacy
            </h2>
            <p className="text-base text-gray-300 leading-relaxed mb-6">
              Our app is not intended for children under the age of 13. We do
              not knowingly collect or store data from children.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold mb-2 text-white">
              8. Policy Changes
            </h2>
            <p className="text-base text-gray-300 leading-relaxed mb-6">
              We may update this policy periodically. Any changes will be
              reflected on this page with an updated date.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold mb-2 text-white">
              9. Contact
            </h2>
            <p className="text-base text-gray-300 leading-relaxed">
              If you have any questions or concerns regarding this privacy
              policy, feel free to contact us at:
            </p>
            <p className="mt-2">
              <a
                href="mailto:tecxzo.dev@gmail.com"
                className="text-white underline hover:text-white"
              >
                tecxzo.dev@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
