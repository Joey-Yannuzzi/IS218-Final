import Layout from '../components/layout';
import Footer from '../components/footer';

export default function PrivacyPolicyPage(){
    return (
        <div>
            <Layout></Layout>

            <header>
                <h1>Privacy Policy</h1>
                <p>Last Updated: 8/9/2023</p>
            </header>
            <main>
                <h2>1. Information We Collect:</h2>

                <h3 class = "policy">1.1 Personally Identifiable Information:</h3>
                <p>Contact Information: When you use our contact form or subscribe to our newsletter, we may collect your name, email address, and any additional information you provide.</p>
                <p>Usage Information: We may collect information about how you use our website, including pages visited, time spent on each page, and interactions with content.</p>

                <h3 class = "policy">1.2 Non-Personally Identifiable Information:</h3>
                <p>Cookies: Like many websites, we use cookies to enhance your browsing experience. Cookies are small data files that are stored on your device and help us understand your preferences and usage patterns.</p>
                <p>Log Files: Our web server automatically records certain information when you visit our website. This may include your IP address, browser type, referring/exit pages, and operating system.</p>

                <h2>2. How We Use Your Information:</h2>
                <p>We use the collected information for various purposes, including responding to your inquiries and providing the services you request, sending you updates and newsletters, analyzing website usage, and monitoring unauthorized activities.</p>

                <h2>3. Data Sharing and Disclosure:</h2>
                <p>We do not sell, trade, or otherwise transfer your personally identifiable information to third parties. However, we may share non-personally identifiable information with analytics and service providers.</p>

                <h2>4. Your Choices:</h2>
                <p>You have the right to opt out of receiving promotional emails, disable cookies, and access, correct, or delete your personally identifiable information.</p>

                <h2>5. Data Security:</h2>
                <p>We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.</p>

                <h2>6. External Links:</h2>
                <p>Our website may contain links to external sites. We are not responsible for their content and practices.</p>

                <h2>7. Children's Privacy:</h2>
                <p>Our website is not intended for children under 13. We do not knowingly collect personal information from children.</p>

                <h2>8. Changes to this Privacy Policy:</h2>
                <p>We may update our Privacy Policy. Any changes will be posted on this page.</p>

                <h2>9. Contact Us:</h2>
                <p>If you have questions or concerns, contact us at joey-yannuzzi@email.com.</p>
            </main>

            <Footer></Footer>
        </div>
    );
};