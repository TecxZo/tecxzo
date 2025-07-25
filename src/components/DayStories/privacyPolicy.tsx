const PrivacyPolicyDayStories = () => {
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
          <strong>DayStories</strong>, developed by <strong>Tecxzo</strong>, is
          committed to protecting your privacy. This Privacy Policy explains how
          we handle your personal data when you use our mobile application.
        </p>
        <div className="space-y-12 md:space-y-14">
          <section>
            <h2 className="text-lg font-semibold mb-2 text-white">
              1. Information We Collect
            </h2>
            <ul className="list-disc list-inside text-gray-300 mb-6 space-y-1">
              <li>
                We do not collect personal identifiers such as name, email, or
                phone number.
              </li>
              <li>
                Your entries, images, and emotions are stored locally on your
                device.
              </li>
              <li>
                Optionally, users may back up their data via Google Drive, with
                consent.
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-semibold mb-2 text-white">
              2. How Your Data is Used
            </h2>
            <p className="text-base text-gray-300 leading-relaxed mb-6">
              All your content stays on your device. If you opt for backup, your
              journal data is encrypted and stored securely in your Google
              Drive. No data is sold or used for advertising purposes.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold mb-2 text-white">
              3. Data Security
            </h2>
            <p className="text-base text-gray-300 leading-relaxed mb-6">
              We ensure your data is encrypted during backup and storage. Local
              data is stored using secure mechanisms provided by your device’s
              operating system.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold mb-2 text-white">
              4. Emotion Detection
            </h2>
            <p className="text-base text-gray-300 leading-relaxed mb-6">
              DayStories may use offline emotion classification models to
              analyze entries. No data is sent to external servers — everything
              runs on-device.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold mb-2 text-white">
              5. Google Services
            </h2>
            <p className="text-base text-gray-300 leading-relaxed mb-6">
              Google Drive access is only used if you explicitly choose to back
              up your data. This is managed via the Google Sign-In process and
              is never accessed without your permission.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold mb-2 text-white">
              6. Children’s Privacy
            </h2>
            <p className="text-base text-gray-300 leading-relaxed mb-6">
              Our app is not directed toward children under 13. We do not
              knowingly collect any personal data from children.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold mb-2 text-white">
              7. Consent
            </h2>
            <p className="text-base text-gray-300 leading-relaxed mb-6">
              By using DayStories, you agree to this Privacy Policy and grant us
              permission to store and process your data as described.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold mb-2 text-white">
              8. Changes to this Policy
            </h2>
            <p className="text-base text-gray-300 leading-relaxed mb-6">
              We may update this Privacy Policy occasionally. All changes will
              be posted on this page, and you are advised to review it
              regularly.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold mb-2 text-white">
              9. Contact
            </h2>
            <p className="text-base text-gray-300 leading-relaxed">
              If you have any questions, please contact us at:
            </p>
            <p className="mt-2">
              <a
                href="mailto:tecxzo.dev@gmail.com"
                className="text-white-400 underline hover:text-white-500"
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

export default PrivacyPolicyDayStories;
