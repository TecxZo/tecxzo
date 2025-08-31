const DataDeletionFixHome = () => {
  return (
    <div className="min-h-screen bg-[#181818] text-white flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center mb-3 md:mb-4 lg:mb-5 text-white tracking-tight leading-tight">
          Data Deletion Policy
        </h1>
        <p className="text-center text-gray-400 text-xs md:text-sm lg:text-base mb-1 md:mb-2 lg:mb-3">
          Last updated: August 31, 2025
        </p>
        <p className="text-xs md:text-sm lg:text-base text-gray-300 leading-relaxed text-center mb-6 md:mb-8 lg:mb-10 max-w-2xl mx-auto">
          <strong>FixHome Business</strong> values your privacy and provides full
          control over your data. This page explains how you can request the
          deletion of your personal information from our systems.
        </p>
        <div className="space-y-12 md:space-y-14">
          <section>
            <h2 className="text-lg font-semibold mb-2 text-white">
              1. What Data Can Be Deleted
            </h2>
            <ul className="list-disc list-inside text-gray-300 mb-6 space-y-1">
              <li>Account details (name, email, phone number)</li>
              <li>Service history and booking records</li>
              <li>Uploaded media such as images or documents</li>
              <li>Any optional personal information provided</li>
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-semibold mb-2 text-white">
              2. How to Request Data Deletion
            </h2>
            <p className="text-base text-gray-300 leading-relaxed mb-6">
              You can request deletion of your data by sending us an email at{" "}
              <a
                href="mailto:tecxzo.dev@gmail.com"
                className="text-white-400 underline hover:text-white-500"
              >
                tecxzo.dev@gmail.com
              </a>
              . Please include your registered phone number or email address to
              help us identify your account.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold mb-2 text-white">
              3. Processing Time
            </h2>
            <p className="text-base text-gray-300 leading-relaxed mb-6">
              Once we receive your deletion request, we will process it within
              <strong> 7 business days</strong>. After deletion, your data will
              be permanently removed from our systems and cannot be recovered.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold mb-2 text-white">
              4. Exceptions
            </h2>
            <p className="text-base text-gray-300 leading-relaxed mb-6">
              Certain data may be retained if required by law, regulatory
              obligations, or for resolving disputes and fraud prevention.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold mb-2 text-white">
              5. Contact Us
            </h2>
            <p className="text-base text-gray-300 leading-relaxed">
              If you have questions about data deletion, please reach out to us
              at:
            </p>
            <p className="mt-2">
              <a
                href="mailto:tecxzo.dev@gmail.com"
                className="text-white-400 underline hover:text-white-500"
              >
                fixhome.support@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DataDeletionFixHome;
