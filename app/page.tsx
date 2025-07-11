/* eslint-disable @typescript-eslint/no-unused-vars */
// // import Navbar from "@/components/navbar";
// // import HeroSection from "@/components/hero-section";
// // import FeaturesSection from "@/components/features-section";
// // import DocsPreview from "@/components/docs-preview";
// // import CodeExamples from "@/components/code-examples";
// // import GettingStarted from "@/components/getting-started";
// // import StatsSection from "@/components/stats-section";
// // import Footer from "@/components/footer";

// import CodeExamples from "./_components/CodeExamples";
// import DocsPreview from "./_components/DocsPreview";
// import FeaturesSection from "./_components/FeaturesSection";
// import Footer from "./_components/Footer";
// import GettingStarted from "./_components/GettingStarted";
// import HeroSection from "./_components/HeroSection";
// import Navbar from "./_components/Navbar";
// import StatsSection from "./_components/StatsSection";

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-white">
//       <Navbar />
//       <HeroSection />
//       <FeaturesSection />
//       <DocsPreview />
//       <CodeExamples />
//       <GettingStarted />
//       <StatsSection />
//       <Footer />
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  ShoppingCart,
  BarChart3,
  MessageCircle,
  // Image,
  Settings,
  Copy,
  Check,
  Menu,
  X,
  ExternalLink,
  FileImage,
} from "lucide-react";
import { FaDiscord, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { useRouter } from "next/navigation";
import GradientText from "../components/GradientText/GradientText";
import Image from "next/image";

const features = [
  {
    icon: Users,
    title: "User Management",
    description:
      "Complete user data APIs with authentication, profiles, and social features for testing user-based applications.",
    tags: ["Authentication", "Profiles", "Social"],
    color: "bg-blue-100 text-blue-800",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "Product catalogs, shopping carts, and order management APIs perfect for building e-commerce prototypes.",
    tags: ["Products", "Orders", "Payments"],
    color: "bg-emerald-100 text-emerald-800",
  },
  {
    icon: BarChart3,
    title: "Analytics & Data",
    description:
      "Rich datasets and analytics APIs for dashboards, reporting, and data visualization projects.",
    tags: ["Metrics", "Reports", "Charts"],
    color: "bg-amber-100 text-amber-800",
  },
  {
    icon: MessageCircle,
    title: "Social Media",
    description:
      "Posts, comments, likes, and social interaction APIs for building social platforms and features.",
    tags: ["Posts", "Comments", "Feeds"],
    color: "bg-indigo-100 text-indigo-800",
  },
  {
    icon: FileImage,
    title: "Media & Files",
    description:
      "Image galleries, file uploads, and media management APIs for content-rich applications.",
    tags: ["Images", "Videos", "Files"],
    color: "bg-purple-100 text-purple-800",
  },
  {
    icon: Settings,
    title: "Utilities",
    description:
      "Random data generators, mock APIs, and utility endpoints for testing and development workflows.",
    tags: ["Generators", "Mocks", "Tools"],
    color: "bg-slate-200 text-slate-800",
  },
];

const endpoints = [
  {
    method: "GET",
    path: "/api/v1/users",
    description: "Get paginated list of users with optional filtering",
    methodColor: "bg-emerald-100 text-emerald-800",
  },
  {
    method: "POST",
    path: "/api/v1/auth/register",
    description: "Register a new user account with email validation",
    methodColor: "bg-blue-100 text-blue-800",
  },
  {
    method: "GET",
    path: "/api/v1/products",
    description: "Browse product catalog with categories and search",
    methodColor: "bg-emerald-100 text-emerald-800",
  },
  {
    method: "PUT",
    path: "/api/v1/users/{id}",
    description: "Update user profile information and preferences",
    methodColor: "bg-amber-100 text-amber-800",
  },
  {
    method: "DELETE",
    path: "/api/v1/posts/{id}",
    description: "Delete a social media post and associated media",
    methodColor: "bg-red-100 text-red-800",
  },
];

// const codeExamples = {
//   javascript:
//     'const BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n        async function fetchGetAllQuotes() {\n          try {\n            const response = await fetch(BASE_URL);\n             if (!response.ok) {\n              throw new Error(`HTTP error! status: ${response.status}`);\n            }\n            const data = await response.json();\n            console.log(data);\n          } catch (error) {\n            console.error("There was a problem with the fetch operation:", error);\n          }\n        }\n      ',
//   python:
//     'BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote"\n      def get_all_quotes():\n        response = requests.get(BASE_URL)\n        print(response.json())\n    ',
//   Ruby: '      BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote"\n      def get_all_quotes\n        uri = URI(BASE_URL)\n        response = Net::HTTP.get(uri)\n        puts JSON.parse(response)\n      end\n    ',
//   PHP: '$BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n      function getAllQuotes() {\n        global $BASE_URL;\n        return sendRequest($BASE_URL, "GET");\n      }\n    ',
//   Java: 'public static final String BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n        public static void getAllQuotes() throws Exception {\n          HttpResponse<JsonNode> response = Unirest.get(BASE_URL).asJson();\n          System.out.println(response.getBody());\n        }\n      ',

//   CSharp:
//     'public static readonly string BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n        public static void GetAllQuotesRestSharp() {\n          var client = new RestClient(BASE_URL);\n          var request = new RestRequest("", Method.Get); // Use empty resource or appropriate base path\n          var response = client.Execute(request);\n          Console.WriteLine(response.Content);\n        }\n      ',
// };

const codeExamples = {
  javascript:
    'const BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\nasync function fetchGetAllQuotes() {\n  try {\n    const response = await fetch(BASE_URL);\n    if (!response.ok) {\n      throw new Error(`HTTP error! status: ${response.status}`);\n    }\n    const data = await response.json();\n    console.log(data);\n  } catch (error) {\n    console.error("There was a problem with the fetch operation:", error);\n  }\n}',
  python:
    'BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote"\ndef get_all_quotes():\n  response = requests.get(BASE_URL)\n  print(response.json())',
  Ruby: 'BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote"\ndef get_all_quotes\n  uri = URI(BASE_URL)\n  response = Net::HTTP.get(uri)\n  puts JSON.parse(response)\nend',
  PHP: '$BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\nfunction getAllQuotes() {\n  global $BASE_URL;\n  return sendRequest($BASE_URL, "GET");\n}',
  Java: 'public static final String BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\npublic static void getAllQuotes() throws Exception {\n  HttpResponse<JsonNode> response = Unirest.get(BASE_URL).asJson();\n  System.out.println(response.getBody());\n}',
  CSharp:
    'public static readonly string BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\npublic static void GetAllQuotesRestSharp() {\n  var client = new RestClient(BASE_URL);\n  var request = new RestRequest("", Method.Get);\n  var response = client.Execute(request);\n  Console.WriteLine(response.Content);\n}',
};

// const supportOptions = [
//   {
//     icon: FaDiscord,
//     title: "Discord Community",
//     description:
//       "Join our active Discord server for real-time help and discussions.",
//     action: "Join Discord",
//   },
//   {
//     icon: FaGithub,
//     title: "GitHub Issues",
//     description: "Report bugs, request features, or contribute to the project.",
//     action: "View GitHub",
//   },
//   {
//     icon: ExternalLink,
//     title: "Documentation",
//     description: "Comprehensive guides and API reference documentation.",
//     action: "Read Docs",
//   },
//   {
//     icon: ExternalLink,
//     title: "Email Support",
//     description: "Get direct support for technical questions and issues.",
//     action: "Contact Us",
//   },
// ];

export default function Home() {
  const [activeTab, setActiveTab] = useState("javascript");
  const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const router = useRouter();

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedStates((prev) => ({ ...prev, [id]: true }));
      setTimeout(() => {
        setCopiedStates((prev) => ({ ...prev, [id]: false }));
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center justify-center gap-2">
              <Image
                src="/api.png"
                alt="logo"
                width={30}
                height={30}
                className="object-contain"
              />
              <h1 className="text-2xl font-bold text-blue-800">FreeAPI</h1>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-slate-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection("docs")}
                  className="text-slate-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Documentation
                </button>
                <button
                  onClick={() => scrollToSection("examples")}
                  className="text-slate-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Examples
                </button>
                {/* <button
                  onClick={() => scrollToSection("support")}
                  className="text-slate-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Support
                </button> */}
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => router.push("/api-guide/getAll/Todos")}
                >
                  Get Started
                </Button>
              </div>
            </div>

            <div className="md:hidden">
              {/* <Button
                // variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button> */}
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => router.push("/api-guide/getAll/todos")}
              >
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile menu */}
          {/* {mobileMenuOpen && (
            <div className="md:hidden border-t border-slate-200 py-4">
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-slate-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors text-left"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection("docs")}
                  className="text-slate-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors text-left"
                >
                  Documentation
                </button>
                <button
                  onClick={() => scrollToSection("examples")}
                  className="text-slate-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors text-left"
                >
                  Examples
                </button>
                <button
                  onClick={() => scrollToSection("support")}
                  className="text-slate-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors text-left"
                >
                  Support
                </button>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white mx-3 mt-2">
                  Get Started
                </Button>
              </div>
            </div>
          )} */}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="lg:col-span-6">
              {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Free APIs for{" "}
                <span className="text-blue-600">Modern Developers</span>
              </h1> */}

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                <span className="ml-40 md:ml-8">Free APIs for</span>

                <GradientText
                  colors={[
                    "#40ffaa",
                    "#4079ff",
                    "#40ffaa",
                    "#4079ff",
                    "#40ffaa",
                  ]}
                  animationSpeed={3}
                  showBorder={false}
                  className="custom-class"
                >
                  Modern Developers
                </GradientText>
                {/* <span className="text-blue-600"></span> */}
              </h1>
              <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                Access a comprehensive collection of free, reliable APIs for
                testing, prototyping, and building amazing applications. No
                registration required.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl"
                  onClick={() => scrollToSection("features")}
                >
                  Browse APIs
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-slate-300 hover:border-blue-600 text-slate-700 hover:text-blue-600 px-8 py-3 text-lg"
                  onClick={() => scrollToSection("docs")}
                >
                  View Documentation
                </Button>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-slate-500">
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-emerald-500 mr-2" />
                  No API Keys Required
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-emerald-500 mr-2" />
                  Always Free
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-emerald-500 mr-2" />
                  Well Documented
                </div>
              </div>
            </div>

            <div className="mt-12 lg:mt-0 lg:col-span-6">
              <Card className="shadow-2xl border border-slate-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-slate-500">
                      GET Request Example
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        copyToClipboard(
                          `fetch('https://freeapi.app/api/v1/users')
  .then(response => response.json())
  .then(data => console.log(data));`,
                          "hero-code"
                        )
                      }
                    >
                      {copiedStates["hero-code"] ? (
                        <Check className="w-4 h-4 text-emerald-500" />
                      ) : (
                        <Copy className="w-4 h-4 text-slate-400" />
                      )}
                    </Button>
                  </div>
                  <pre className="bg-slate-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{`fetch('https://freeapi.app/api/v1/users')
  .then(response => response.json())
  .then(data => console.log(data));`}</code>
                  </pre>
                  <div className="mt-4 p-3 bg-slate-50 rounded-lg">
                    <div className="text-xs text-slate-500 mb-2">Response:</div>
                    <pre className="text-xs text-slate-700">
                      <code>{`{
  "success": true,
  "data": {
    "users": [...],
    "totalPages": 10,
    "currentPage": 1
  }
}`}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Everything You Need for API Development
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our comprehensive API collection covers all your development needs
              with reliable, well-documented endpoints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-slate-50 hover:shadow-lg transition-shadow border border-slate-200 hover:border-blue-200"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{feature.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {feature.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className={feature.color}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* API Documentation Section */}
      <section id="docs" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Comprehensive API Documentation
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Well-documented endpoints with clear examples, response schemas,
              and interactive testing capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                Popular Endpoints
              </h3>
              <div className="space-y-4">
                {endpoints.map((endpoint, index) => (
                  <Card
                    key={index}
                    className="bg-white border border-slate-200 hover:border-blue-200 transition-colors"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <Badge className={endpoint.methodColor}>
                            {endpoint.method}
                          </Badge>
                          <span className="font-mono text-sm text-slate-700">
                            {endpoint.path}
                          </span>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() =>
                            copyToClipboard(endpoint.path, `endpoint-${index}`)
                          }
                        >
                          {copiedStates[`endpoint-${index}`] ? (
                            <Check className="w-4 h-4 text-emerald-500" />
                          ) : (
                            <Copy className="w-4 h-4 text-slate-400" />
                          )}
                        </Button>
                      </div>
                      <p className="text-slate-600 text-sm">
                        {endpoint.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                Interactive Example
              </h3>
              <Card className="border border-slate-200 overflow-hidden">
                <div className="bg-slate-900 px-4 py-3 flex items-center justify-between">
                  <span className="text-slate-500 font-mono text-sm">
                    Request
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      copyToClipboard(
                        `curl -X GET "https://freeapi.app/api/v1/users?page=1&limit=10" \\
  -H "Content-Type: application/json"`,
                        "interactive-code"
                      )
                    }
                  >
                    {copiedStates["interactive-code"] ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4 text-slate-200" />
                    )}
                  </Button>
                </div>
                <div className="p-4">
                  <pre className="text-sm text-green-400 overflow-x-auto">
                    <code>{`curl -X GET "https://freeapi.app/api/v1/users?page=1&limit=10" \\
  -H "Content-Type: application/json"`}</code>
                  </pre>
                </div>
                <div className="border-t border-slate-200 bg-slate-50 px-4 py-3">
                  <span className="text-slate-600 font-mono text-sm">
                    Response (200 OK)
                  </span>
                </div>
                <div className="p-4 max-h-64 overflow-y-auto">
                  <pre className="text-sm text-gray-300">
                    <code>{`{
  "success": true,
  "statusCode": 200,
  "data": {
    "users": [
      {
        "id": "64c8f5e91234567890abcdef",
        "username": "johndoe",
        "email": "john@example.com",
        "firstName": "John",
        "lastName": "Doe",
        "avatar": "https://randomuser.me/api/portraits/men/1.jpg",
        "createdAt": "2023-08-01T10:30:00.000Z"
      },
      {
        "id": "64c8f5e91234567890abcdeg",
        "username": "janedoe",
        "email": "jane@example.com",
        "firstName": "Jane",
        "lastName": "Doe", 
        "avatar": "https://randomuser.me/api/portraits/women/2.jpg",
        "createdAt": "2023-08-01T11:15:00.000Z"
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 5,
      "totalUsers": 50,
      "limit": 10,
      "hasNext": true,
      "hasPrev": false
    }
  }
}`}</code>
                  </pre>
                </div>
                <div className="border-t border-slate-200 bg-slate-50 px-4 py-3">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Try in Playground
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Code Examples Section */}
      <section id="examples" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Ready-to-Use Code Examples
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Copy and paste these examples to get started quickly with your
              favorite programming language.
            </p>
          </div>

          <div className="bg-slate-900 rounded-xl overflow-hidden">
            <div className="flex border-b border-slate-700 overflow-x-auto">
              {Object.keys(codeExamples).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setActiveTab(lang)}
                  className={`px-6 py-3 font-medium text-sm whitespace-nowrap ${
                    activeTab === lang
                      ? "text-green-400 bg-slate-800"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {lang === "javascript"
                    ? "JavaScript"
                    : lang === "python"
                    ? "Python"
                    : lang === "Ruby"
                    ? "Ruby"
                    : lang === "PHP"
                    ? "PHP"
                    : lang === "Java"
                    ? "Java"
                    : "C#"}
                </button>
              ))}
            </div>
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 z-10 text-slate-400 hover:text-slate-200"
                onClick={() =>
                  copyToClipboard(
                    codeExamples[activeTab as keyof typeof codeExamples],
                    "code-example"
                  )
                }
              >
                {copiedStates["code-example"] ? (
                  <Check className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </Button>
              <div className="p-6">
                <pre className="text-green-400 text-sm overflow-x-auto">
                  <code>
                    {codeExamples[activeTab as keyof typeof codeExamples]}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Get Started in Minutes
            </h2>
            <p className="text-xl text-slate-600">
              No registration, no API keys, no complexity. Just start building.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Choose Your API
              </h3>
              <p className="text-slate-600">
                Browse our comprehensive collection of APIs and find the perfect
                endpoints for your project needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Copy the Code
              </h3>
              <p className="text-slate-600">
                Use our ready-made code examples in your preferred programming
                language to get started instantly.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Start Building
              </h3>
              <p className="text-slate-600">
                Integrate the APIs into your application and start building
                amazing features right away.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl"
              onClick={() => scrollToSection("features")}
            >
              Start Building Now
            </Button>
          </div>
        </div>
      </section>

      {/* Support Section */}
      {/* <section id="support" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Need Help? We're Here for You
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Join our community of developers and get the support you need to
              build amazing applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportOptions.map((option, index) => (
              <Card
                key={index}
                className="text-center border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <option.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {option.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    {option.description}
                  </p>
                  <Button
                    variant="link"
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm p-0"
                  >
                    {option.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">FreeAPI</h3>
              <p className="text-slate-300 mb-6 max-w-md">
                Free, reliable APIs for developers to build, test, and prototype
                amazing applications without barriers.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <FaDiscord className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">APIs</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    User Management
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    E-commerce
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    Social Media
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    Analytics
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    Media & Files
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    Code Examples
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    Tutorials
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    Status Page
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    Changelog
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-12 pt-8 text-center">
            <p className="text-slate-400">
              &copy; 2024 FreeAPI. All rights reserved. Built with ❤️ for
              developers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
