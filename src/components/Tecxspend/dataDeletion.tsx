const DataDeletionPolicy = () => {
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
          At <strong>TecxSpend</strong>, your data privacy and control are our
          top priority. This Data Deletion Policy explains how you can remove
          your personal and app data from our systems.
        </p>
        <div className="space-y-12 md:space-y-14">
          <section>
            <h2 className="text-lg font-semibold mb-2 text-white">
              1. Local App Data
            </h2>
            <p className="text-base text-gray-300 leading-relaxed mb-6">
              All your data (including expense records and notes) is stored
              locally on your mobile device. We do not store any data on our
              servers.
            </p>
            <p className="text-base text-gray-300 leading-relaxed mb-6">
              To delete your data:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-6 space-y-1">
              <li>Open your device's settings</li>
              <li>Go to “Apps” TecxSpend</li>
              <li>Tap “Storage”</li>
              <li>Select “Clear Data” or “Clear Storage”</li>
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-semibold mb-2 text-white">
              2. Google Drive Backup
            </h2>
            <p className="text-base text-gray-300 leading-relaxed mb-6">
              If you’ve enabled cloud backup, a data file is stored in your
              Google Drive account under the "App Data" folder.
            </p>
            <p className="text-base text-gray-300 leading-relaxed mb-6">
              To delete the backup:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-6 space-y-1">
              <li>
                Go to{" "}
                <a
                  className="underline text-white hover:text-white"
                  href="https://drive.google.com/drive/u/0/quota"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://drive.google.com/drive/u/0/quota
                </a>
              </li>
              <li>Look for “TecxSpend” or associated backup file</li>
              <li>Right-click and select “Remove”</li>
              <li>Empty your Google Drive Trash to permanently delete</li>
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-semibold mb-2 text-white">
              3. Contact for Support
            </h2>
            <p className="text-base text-gray-300 leading-relaxed mb-6">
              If you need assistance deleting your data or have any
              privacy-related questions, please contact us at:
            </p>
            <p className="text-base text-gray-300 leading-relaxed">
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

export default DataDeletionPolicy;
