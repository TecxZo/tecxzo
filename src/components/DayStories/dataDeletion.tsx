const DataDeletionPolicyDayStories = () => {
  return (
    <div className="min-h-screen bg-[#181818] text-white flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center mb-3 md:mb-4 lg:mb-5 text-white tracking-tight leading-tight">
          Data Deletion Policy
        </h1>
        <p className="text-center text-gray-400 text-xs md:text-sm lg:text-base mb-1 md:mb-2 lg:mb-3">
          Last updated: July 24, 2025
        </p>
        <p className="text-xs md:text-sm lg:text-base text-gray-300 leading-relaxed text-center mb-6 md:mb-8 lg:mb-10 max-w-2xl mx-auto">
          At DayStories, your privacy and data control are our priorities. This
          Data Deletion Policy explains how you can delete your personal data
          stored within the app or backed up to Google Drive.
        </p>
        <div className="space-y-12 md:space-y-14">
          <section>
            <h2 className="text-lg font-semibold mb-2 text-white">
              1. Local Data Deletion
            </h2>
            <p className="text-base text-gray-300 leading-relaxed">
              All your journal entries, images, and emotion records are stored
              locally on your device. To delete your local data:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-6 space-y-1">
              <li>Open the DayStories app</li>
              <li>Navigate to the "Settings" section</li>
              <li>
                Select "Delete All Data" (this will permanently remove all your
                entries and images from your device)
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-semibold mb-2 text-white">
              2. Google Drive Backup Deletion
            </h2>
            <p className="text-base text-gray-300 leading-relaxed">
              If you opted to back up your data to Google Drive:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-6 space-y-1">
              <li>
                Go to{" "}
                <a
                  className="text-white underline"
                  href="https://drive.google.com/drive/u/0/settings"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Drive Settings
                </a>
              </li>
              <li>
                Find "Manage Apps" and locate <strong>DayStories</strong>
              </li>
              <li>Click "Options" and choose “Delete hidden app data”</li>
              <li>
                This will remove your backup file stored in your Drive's private
                appDataFolder
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-semibold mb-2 text-white">
              3. Uninstalling the App
            </h2>
            <p className="text-base text-gray-300 leading-relaxed">
              Uninstalling DayStories will remove all local app data from your
              device. However, this will not delete any backups stored in Google
              Drive. Follow the steps above to delete cloud backups separately.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold mb-2 text-white">
              4. Requesting Data Deletion
            </h2>
            <p className="text-base text-gray-300 leading-relaxed">
              If you need help deleting your data, or if you believe any data is
              still stored after following the steps above, please contact us.
              We will assist you within 7 business days.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold mb-2 text-white">
              5. Contact Us
            </h2>
            <p className="text-base text-gray-300 leading-relaxed">
              For any data-related concerns, contact us at:
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

export default DataDeletionPolicyDayStories;
