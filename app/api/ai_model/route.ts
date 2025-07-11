/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// import { GetgenerateContent } from "@/lib/GetgenerateContent";

// export async function GET(request: Request) {
//   try {
//     const prompt = `You are a helpful AI assistant that generates code in various programming languages. The user will provide a URL and request a GET request with a specific header.  You will provide code snippets in multiple programming languages to fulfill this request.  Your response should be a JSON object with the following structure:\n\n{\n  \"ai_prompt\": \"Write code in the following programming languages to send a GET request to 'https://api.freeapi.app/api/v1/public/quotes/quote/random' with the header 'accept: application/json'. Print the JSON response to the console. Include robust error handling to catch network issues, invalid server responses, and JSON parsing problems.  The target languages are: node, python, shell, ruby, php, java, javascript, kotlin, objective-c, ocaml, powershell, R, swift\",\n  \"instructions\": {\n    \"url\": \"The URL to send the GET request to. This is a constant value: 'https://api.freeapi.app/api/v1/public/quotes/quote/random'.\",\n    \"method\": \"The HTTP method to use. This is always 'GET'.\",\n    \"header\": \"The HTTP header to include in the request. This is a constant key-value pair: 'accept: application/json'.\",\n    \"output\": \"Print the parsed JSON response to the console or standard output. The output should be the data structure resulting from parsing the JSON, not the raw JSON string.\",\n    \"error_handling\": \"Implement comprehensive error handling. This includes:\n      -   Catching exceptions or errors related to network connectivity (e.g., connection refused, timeout).\n      -   Checking the HTTP status code of the response. If the status code indicates an error (e.g., 4xx or 5xx), handle it appropriately (e.g., print an error message, raise an exception).\n      -   Catching exceptions or errors that occur during JSON parsing.\",\n    \"languages\": \"Generate code for the following programming languages: node, python, shell, ruby, php, java, javascript, kotlin, objective-c, ocaml, powershell, R, swift.\",\n    "code_generation_style": "Generate clean, well-formatted, and idiomatic code for each specified language. Use appropriate libraries or built-in functions for making HTTP requests and parsing JSON.  Provide a 'explanation' for each code snippet.\"\n  },\n  \"example_response\": {\n    \"Python\": {\n      \"code\": \"import requests\\n\\nurl = 'https://api.freeapi.app/api/v1/public/quotes/quote/random'\\nheaders = {'accept': 'application/json'}\\n\\ntry:\\n    response = requests.get(url, headers=headers)\\n    response.raise_for_status()  # Raise an exception for bad status codes\\n    data = response.json()\\n    print(data)\\nexcept requests.exceptions.RequestException as e:\\n    print(f'Error: {e}')\",\n      \"explanation\": \"Uses the 'requests' library to send a GET request. Includes error handling for network errors and bad status codes, and parses the JSON response using response.json().\"\n    },\n    \"JavaScript\": {\n      \"code\": \"const url = 'https://api.freeapi.app/api/v1/public/quotes/quote/random';\\nconst options = {\\n  method: 'GET',\\n  headers: {\\n    accept: 'application/json'\\n  }\\n};\\n\\nfetch(url, options)\\n  .then(response => {\\n    if (!response.ok) {\\n      throw new Error(`HTTP error! status: ${response.status}`);\\n    }\\n    return response.json();\\n  })\\n  .then(data => {\\n    console.log(data);\\n  })\\n  .catch(error => {\\n    console.error('Error:', error);\\n  });\",\n      \"explanation\": \"Uses the fetch API. Checks for a successful response (response.ok), parses the JSON, and handles errors using .catch().\"\n    }\n  }\n}\n`;
//     // console.log("prompt", prompt);

//     // Generate the content
//     const completion = await GetgenerateContent(prompt);
//     // console.log("completion", completion);

//     if (!completion || typeof completion !== "string") {
//       throw new Error(
//         "Invalid response from GetgenerateContent. Expected a string."
//       );
//     }

//     // Clean the result to remove code block markers
//     const cleanedResult = completion
//       .replace(/```(?:json|python)?/g, "") // Handle multiple types of code blocks
//       .trim();

//     let parsed;
//     try {
//       // Attempt to parse the cleaned result as JSON
//       parsed = JSON.parse(cleanedResult);
//     } catch (parseError) {
//       // Log and throw parsing error
//       console.error("Error parsing cleanedResult as JSON:", cleanedResult);
//       throw new Error(
//         `Parsing error: ${parseError.message}. Cleaned Result: ${cleanedResult}`
//       );
//     }

//     console.log("parsed", parsed);

//     // Return the parsed JSON
//     return new Response(JSON.stringify(parsed), {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   } catch (error) {
//     // Log the error to the server console
//     console.error("Error in GET function:", error);

//     // Return a detailed error response
//     return new Response(
//       JSON.stringify({
//         message: "An error occurred while processing your request.",
//         details: error.message,
//       }),
//       {
//         status: 500,
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//   }
// }

// import { GetgenerateContent } from "@/lib/GetgenerateContent";

// export async function GET(request: Request) {
//   try {
//     const prompt = `You are a helpful AI assistant that generates code in various programming languages. The user will provide a URL and request a GET request with a specific header. You will provide code snippets in multiple programming languages to fulfill this request. Your response should be a JSON object with the following structure:

// {
//   "ai_prompt": "Write code in the following programming languages to send a GET request to 'https://api.freeapi.app/api/v1/public/quotes/quote/random' with the header 'accept: application/json'. Print the JSON response to the console. Include robust error handling to catch network issues, invalid server responses, and JSON parsing problems. The target languages are: node, python, shell, ruby, php, java, javascript, kotlin, objective-c, ocaml, powershell, R, swift",
//   "instructions": {
//     "url": "The URL to send the GET request to. This is a constant value: 'https://api.freeapi.app/api/v1/public/quotes/quote/random'.",
//     "method": "The HTTP method to use. This is always 'GET'.",
//     "header": "The HTTP header to include in the request. This is a constant key-value pair: 'accept: application/json'.",
//     "output": "Print the parsed JSON response to the console or standard output. The output should be the data structure resulting from parsing the JSON, not the raw JSON string.",
//     "error_handling": "Implement comprehensive error handling. This includes:
//       - Catching exceptions or errors related to network connectivity (e.g., connection refused, timeout).
//       - Checking the HTTP status code of the response. If the status code indicates an error (e.g., 4xx or 5xx), handle it appropriately (e.g., print an error message, raise an exception).
//       - Catching exceptions or errors that occur during JSON parsing.",
//     "languages": "Generate code for the following programming languages: node, python, shell, ruby, php, java, javascript, kotlin, objective-c, ocaml, powershell, R, swift.",
//     "code_generation_style": "Generate clean, well-formatted, and idiomatic code for each specified language. Use appropriate libraries or built-in functions for making HTTP requests and parsing JSON. Provide an 'explanation' for each code snippet."
//   }
// }`;

//     console.log("Generated prompt:", prompt);

//     // Call the content generation function
//     const completion = await GetgenerateContent(prompt);
//     console.log("Raw completion from GetgenerateContent:", completion);

//     if (!completion || typeof completion !== "string") {
//       throw new Error(
//         "Invalid response from GetgenerateContent. Expected a string."
//       );
//     }

//     // Remove code block markers and trim whitespace
//     const cleanedResult = completion.replace(/```(?:json|python)?/g, "").trim();
//     console.log("Cleaned result:", cleanedResult);

//     let parsed;
//     try {
//       // Parse the cleaned result as JSON
//       parsed = JSON.parse(cleanedResult);
//     } catch (parseError) {
//       console.error("Error parsing cleaned result as JSON:", cleanedResult);
//       throw new Error(
//         `Parsing error: ${parseError.message}. Cleaned Result: ${cleanedResult}`
//       );
//     }

//     console.log("Parsed response:", parsed);

//     // Return the parsed JSON response
//     return new Response(JSON.stringify(parsed), {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   } catch (error) {
//     console.error("Error in GET function:", error);

//     // Return a detailed error response
//     return new Response(
//       JSON.stringify({
//         message: "An error occurred while processing your request.",
//         details: error.message,
//       }),
//       {
//         status: 500,
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//   }
// }

// import { GetgenerateContent } from "@/lib/GetgenerateContent";

// export async function GET(request: Request) {
//   try {
//     const prompt = `{
//   "ai_prompt": "Write code in the following programming languages to perform multiple HTTP requests (GET all, GET by ID, POST, DELETE) to the API 'https://dummyjson.com/todos'. Each request should include appropriate headers and error handling. Parse and print the JSON response to the console. Target languages are: node, python, shell, ruby, php, java, javascript, kotlin, objective-c, ocaml, powershell, R, swift.",
//   "instructions": {
//     "base_url": "Use the base URL 'https://dummyjson.com/todos'.",
//     "headers": {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     "tasks": {
//       "get_all_todos": {
//         "method": "GET",
//         "endpoint": "/todos",
//         "description": "Fetch all todos. Print the parsed JSON response."
//       },
//       "get_todo_by_id": {
//         "method": "GET",
//         "endpoint": "/todos/1",
//         "description": "Fetch a single todo by ID. Print the parsed JSON response."
//       },
//       "create_todo": {
//         "method": "POST",
//         "endpoint": "/todos/add",
//         "description": "Create a new todo with a title and completed status. Use JSON in the request body. Print the parsed response.",
//         "body": {
//           "todo": "Learn API integration",
//           "completed": false,
//           "userId": 1
//         }
//       },
//       "delete_todo": {
//         "method": "DELETE",
//         "endpoint": "/todos/1",
//         "description": "Delete a todo by ID. Print the status or response JSON."
//       }
//     },
//     "output": "Print the parsed JSON object (not raw string) to the console.",
//     "error_handling": "Handle the following errors:\n- Network issues (timeouts, DNS errors)\n- Non-2xx HTTP status codes (client/server errors)\n- JSON parsing exceptions",
//     "languages": [
//       "node",
//       "python",
//       "shell",
//       "ruby",
//       "php",
//       "java",
//       "javascript",
//       "kotlin",
//       "objective-c",
//       "ocaml",
//       "powershell",
//       "R",
//       "swift"
//     ],
//     "code_generation_style": "Generate clean, idiomatic, and well-formatted code using each language's preferred HTTP libraries or built-in APIs. For each language, group all four tasks under one labeled section (e.g., 'Python', 'Node.js'), and separate each HTTP operation with clear subheadings. Provide a brief explanation before each code snippet."
//   }
// }

// `;

//     console.log("Generated prompt:", prompt);

//     // Call the content generation function
//     const completion = await GetgenerateContent(prompt);
//     console.log("Raw completion from GetgenerateContent:", completion);

//     // if (!completion || typeof completion !== "string") {
//     //   throw new Error(
//     //     "Invalid response from GetgenerateContent. Expected a string."
//     //   );
//     // }

//     // // Remove code block markers and sanitize the result
//     // const cleanedResult = completion
//     //   .replace(/```(?:json|python)?/g, "")
//     //   .replace(/\u0000/g, "") // Remove null characters
//     //   .replace(/[\b\f\r]/g, "") // Remove control characters
//     //   .trim();

//     // console.log("Cleaned result:", cleanedResult);
//     const cleanedResult = completion.replace(/```(?:json)?/g, "");

//     let parsed;
//     try {
//       // Parse the cleaned result as JSON
//       parsed = JSON.parse(cleanedResult);
//     } catch (parseError: any) {
//       console.error(
//         "Error parsing cleaned result as JSON:",
//         parseError.message
//       );
//     }

//     console.log("Parsed response:", parsed);

//     // Return the parsed JSON response
//     return new Response(JSON.stringify(parsed), {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   } catch (error) {
//     console.error("Error in GET function:", error);

//     // Return a detailed error response
//     return new Response(
//       JSON.stringify({
//         message: "An error occurred while processing your request.",
//         details: error.message,
//       }),
//       {
//         status: 500,
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//   }
// }

/*
{
  "ai_prompt": "Generate code snippets in the following programming languages to send a GET request to 'https://api.freeapi.app/api/v1/public/quotes/quote/random' with the header 'accept: application/json'. Print the parsed JSON response to the console. Include robust error handling.  Provide only the code snippets, without explanations or additional text. The target languages are: node, python, shell, ruby, php, java, javascript, kotlin, objective-c, ocaml, powershell, R, swift. Structure the output as a JSON object where the keys are the language names, and the values are the corresponding code snippets.",
  "instructions": {
    "url": "The URL to send the GET request to.  Use: 'https://api.freeapi.app/api/v1/public/quotes/quote/random'.",
    "method": "The HTTP method is 'GET'.",
    "header": "Include the header: 'accept: application/json'.",
    "output": "Print the *parsed* JSON to the console.",
    "error_handling": "Implement comprehensive error handling.",
    "languages": "Generate code for: node, python, shell, ruby, php, java, javascript, kotlin, objective-c, ocaml, powershell, R, swift.",
    "response_format": "Return a JSON object where keys are language names (e.g., 'python') and values are the code snippets.",
    "code_only": "Provide *only* the code snippets. Do not include any explanatory text, titles, or other surrounding text.  The code should be directly executable."
  }
}
*/

import { GetgenerateContent } from "@/lib/GetgenerateContent";

export async function GET(request: Request) {
  try {
    const prompt = `{
  "ai_prompt": "Write code in the following programming languages to perform CRUD operations (GET all, GET by ID, POST to create, DELETE) on the API 'https://dummyjson.com/todos'. Each operation should include appropriate headers and error handling. Parse the JSON response and print it to the console. The target languages are: node. Structure the output as a JSON object where the keys are the language names, and the values are objects containing the code for each operation.",
  "instructions": {
    "base_url": "Use the base URL 'https://dummyjson.com/todos'.",
    "headers": {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    "operations": {
      "getAll": {
        "method": "GET",
        "endpoint": "/todos",
        "description": "Fetch all todos."
      },
      "getById": {
        "method": "GET",
        "endpoint": "/todos/1",
        "description": "Fetch a single todo by ID (use ID 1)."
      },
      "create": {
        "method": "POST",
        "endpoint": "/todos/add",
        "description": "Create a new todo.",
        "body": {
          "todo": "Learn API integration",
          "completed": false,
          "userId": 1
        }
      },
      "delete": {
        "method": "DELETE",
        "endpoint": "/todos/1",
        "description": "Delete a todo by ID (use ID 1)."
      }
    },
    "output": "Print the parsed JSON object (not raw JSON string) to the console for each operation.",
    "error_handling": "Implement comprehensive error handling for:\n      - Network errors (e.g., no internet, timeout)\n      - HTTP errors (non-2xx status codes)\n      - JSON parsing errors",
    "languages": [
      "node",
      
    ],
    "code_generation_style": "Generate clean, idiomatic, and well-formatted code for each language. Use appropriate libraries or native features. Structure the output JSON as follows:\n\n{\n  \"[language_name]\": {\n    \"getAll\": {\n      \"code\": \"...\",\n      \"explanation\": \"...\"\n    },\n    \"getById\": {\n      \"code\": \"...\",\n      \"explanation\": \"...\"\n    },\n    \"create\": {\n      \"code\": \"...\",\n      \"explanation\": \"...\"\n    },\n    \"delete\": {\n      \"code\": \"...\",\n      \"explanation\": \"...\"\n    }\n  },\n  ...\n}\n\nInclude a brief 'explanation' of what the code does and how it handles errors for each operation in each language."
  }
}
`;

    // console.log("Generated prompt:", prompt);

    // Call the content generation function
    const completion = await GetgenerateContent(prompt);
    // console.log("Raw completion from GetgenerateContent:", completion);

    if (!completion || typeof completion !== "string") {
      throw new Error(
        "Invalid response from GetgenerateContent. Expected a string."
      );
    }

    // Attempt to clean the response.  This is crucial for robustness.
    let cleanedResult = completion.trim();
    cleanedResult = cleanedResult.replace(/```(?:json)?/g, ""); // Remove code block markers
    cleanedResult = cleanedResult.replace(/[\u0000-\u001F\u007F-\u009F]/g, ""); // Remove control characters
    cleanedResult = cleanedResult.replace(/\\"/g, '"'); // Replace escaped quotes

    // console.log("Cleaned result:", cleanedResult);

    let parsed;
    try {
      // Parse the cleaned result as JSON
      parsed = JSON.parse(cleanedResult);
    } catch (parseError: any) {
      console.error(
        "Error parsing cleaned result as JSON:",
        parseError.message
      );
      //  Consider whether to return the raw string in this case, or an error
      //  In this case, I will throw the error.
      throw new Error(
        "Failed to parse the response from GetgenerateContent as JSON.  The response was: " +
          cleanedResult
      );
    }

    // console.log("Parsed response:", parsed);

    // Return the parsed JSON response
    return new Response(JSON.stringify(parsed), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error: any) {
    console.error("Error in GET function:", error);

    // Return a detailed error response
    return new Response(
      JSON.stringify({
        message: "An error occurred while processing your request.",
        details: error.message,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}

/*
{
  "ai_prompt": "Write code in the following programming languages to perform CRUD operations (GET all, GET by ID, POST to create, DELETE) on the API 'https://dummyjson.com/todos'. Each operation should include appropriate headers and error handling. Parse the JSON response and print it to the console. The target languages are: node, python, shell, ruby, php, java, javascript, kotlin, objective-c, ocaml, powershell, R, swift. Structure the output as a JSON object where the keys are the language names, and the values are objects containing the code for each operation.",
  "instructions": {
    "base_url": "Use the base URL 'https://dummyjson.com/todos'.",
    "headers": {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    "operations": {
      "getAll": {
        "method": "GET",
        "endpoint": "/todos",
        "description": "Fetch all todos."
      },
      "getById": {
        "method": "GET",
        "endpoint": "/todos/1",
        "description": "Fetch a single todo by ID (use ID 1)."
      },
      "create": {
        "method": "POST",
        "endpoint": "/todos/add",
        "description": "Create a new todo.",
        "body": {
          "todo": "Learn API integration",
          "completed": false,
          "userId": 1
        }
      },
      "delete": {
        "method": "DELETE",
        "endpoint": "/todos/1",
        "description": "Delete a todo by ID (use ID 1)."
      }
    },
    "output": "Print the parsed JSON object (not raw JSON string) to the console for each operation.",
    "error_handling": "Implement comprehensive error handling for:\n      - Network errors (e.g., no internet, timeout)\n      - HTTP errors (non-2xx status codes)\n      - JSON parsing errors",
    "languages": [
      "node",
      "python",
      "shell",
      "ruby",
      "php",
      "java",
      "javascript",
      "kotlin",
      "objective-c",
      "ocaml",
      "powershell",
      "R",
      "swift"
    ],
    "code_generation_style": "Generate clean, idiomatic, and well-formatted code for each language. Use appropriate libraries or native features. Structure the output JSON as follows:\n\n{\n  \"[language_name]\": {\n    \"getAll\": {\n      \"code\": \"...\",\n      \"explanation\": \"...\"\n    },\n    \"getById\": {\n      \"code\": \"...\",\n      \"explanation\": \"...\"\n    },\n    \"create\": {\n      \"code\": \"...\",\n      \"explanation\": \"...\"\n    },\n    \"delete\": {\n      \"code\": \"...\",\n      \"explanation\": \"...\"\n    }\n  },\n  ...\n}\n\nInclude a brief 'explanation' of what the code does and how it handles errors for each operation in each language."
  }
}
*/
