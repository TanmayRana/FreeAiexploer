/* eslint-disable @typescript-eslint/no-explicit-any */
// export const commandMap = {
//   create: {
//     node: `async function createQuote(quoteData) {
//   const response = await fetch(BASE_URL, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(quoteData),
//   });
//   const data = await response.json();
//   console.log(data);
// }`,
//     Shell: `createQuote() {
//   curl -X POST "$BASE_URL" -H "Content-Type: application/json" -d '{"quote":"Life is beautiful", "author":"John Doe", "category":"Inspiration"}'
// }`,
//     Python: `def create_quote(quote_data):
//     response = requests.post(BASE_URL, json=quote_data, headers={"Content-Type": "application/json"})
//     print(response.json())`,
//     Ruby: `def create_quote(quote_data)
//   uri = URI(BASE_URL)
//   request = Net::HTTP::Post.new(uri, 'Content-Type' => 'application/json')
//   request.body = quote_data.to_json
//   response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) { |http| http.request(request) }
//   puts JSON.parse(response.body)
// end`,
//     PHP: `function createQuote($quoteData) {
//     global $BASE_URL;
//     return sendRequest($BASE_URL, "POST", $quoteData);
// }`,
//     Java: `  public static void createQuote(String quote, String author, String category) {
//         HttpResponse<JsonNode> response = Unirest.post(BASE_URL)
//             .header("Content-Type", "application/json")
//             .body("{\"quote\":\"" + quote + "\", \"author\":\"" + author + "\", \"category\":\"" + category + "\"}")
//             .asJson();
//         System.out.println(response.getBody());
//     }`,
//     // C#:`  public static void CreateQuote(string quote, string author, string category)
//     // {
//     //     var client = new RestClient(BASE_URL);
//     //     var request = new RestRequest("", Method.Post);
//     //     request.AddHeader("Content-Type", "application/json");
//     //     request.AddJsonBody(new { quote, author, category });

//     //     var response = client.Execute(request);
//     //     Console.WriteLine(response.Content);
//     // }`,
//     JavaScript: `function xhrRequest(method, endpoint, data = null) {
//   const xhr = new XMLHttpRequest();
//   xhr.open(method, endpoint);
//   xhr.setRequestHeader("Content-Type", "application/json");

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       console.log(JSON.parse(xhr.responseText));
//     }
//   };

//   xhr.send(data ? JSON.stringify(data) : null);
// }
//   function createQuote(quoteData) {
//   xhrRequest("POST", url, quoteData);
// }
// `,
//     Kotlin: `import okhttp3.*
// import org.json.JSONObject

// val BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote/random"
// val client = OkHttpClient()
// fun createQuote(quote: String, author: String, category: String) {
//     val json = JSONObject()
//         .put("quote", quote)
//         .put("author", author)
//         .put("category", category)
//         .toString()

//     val requestBody = RequestBody.create(MediaType.get("application/json"), json)

//     val request = Request.Builder()
//         .url(BASE_URL)
//         .post(requestBody)
//         .build()

//     client.newCall(request).execute().use { response ->
//         println(response.body?.string())
//     }
// }
// `,
//   },
// };

// export const commandMap = {
//   getAll: {
//     node: `async function getAllQuotes() {
//   const response = await fetch(BASE_URL, {
//     method: "GET",
//     headers: { "Accept": "application/json" },
//   });
//   const data = await response.json();
//   console.log(data);
// }`,
//     Shell: `getAllQuotes() {
//   curl -X GET "$BASE_URL" -H "Accept: application/json"
// }`,
//     Python: `def get_all_quotes():
//     response = requests.get(BASE_URL, headers={"Accept": "application/json"})
//     print(response.json())`,
//     Ruby: `def get_all_quotes
//   uri = URI(BASE_URL)
//   response = Net::HTTP.get(uri)
//   puts JSON.parse(response)
// end`,
//     PHP: `function getAllQuotes() {
//     global $BASE_URL;
//     return sendRequest($BASE_URL, "GET");
// }`,
//     Java: `  public static void getAllQuotes() {
//         HttpResponse<JsonNode> response = Unirest.get(BASE_URL)
//             .header("Accept", "application/json")
//             .asJson();
//         System.out.println(response.getBody());
//     }`,
//     JavaScript: `function getAllQuotes() {
//   xhrRequest("GET", url);
// }`,
//     Kotlin: `fun getAllQuotes() {
//     val request = Request.Builder()
//         .url(BASE_URL)
//         .get()
//         .build()

//     client.newCall(request).execute().use { response ->
//         println(response.body?.string())
//     }
// }`,
//   },
//   create: {
//     node: `async function createQuote(quoteData) {
//   const response = await fetch(BASE_URL, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(quoteData),
//   });
//   const data = await response.json();
//   console.log(data);
// }`,
//     Shell: `createQuote() {
//   curl -X POST "$BASE_URL" -H "Content-Type: application/json" -d '{"quote":"Life is beautiful", "author":"John Doe", "category":"Inspiration"}'
// }`,
//     Python: `def create_quote(quote_data):
//     response = requests.post(BASE_URL, json=quote_data, headers={"Content-Type": "application/json"})
//     print(response.json())`,
//     Ruby: `def create_quote(quote_data)
//   uri = URI(BASE_URL)
//   request = Net::HTTP::Post.new(uri, 'Content-Type' => 'application/json')
//   request.body = quote_data.to_json
//   response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) { |http| http.request(request) }
//   puts JSON.parse(response.body)
// end`,
//     PHP: `function createQuote($quoteData) {
//     global $BASE_URL;
//     return sendRequest($BASE_URL, "POST", $quoteData);
// }`,
//     Java: `  public static void createQuote(String quote, String author, String category) {
//         HttpResponse<JsonNode> response = Unirest.post(BASE_URL)
//             .header("Content-Type", "application/json")
//             .body("{\"quote\":\"" + quote + "\", \"author\":\"" + author + "\", \"category\":\"" + category + "\"}")
//             .asJson();
//         System.out.println(response.getBody());
//     }`,
//     JavaScript: `function createQuote(quoteData) {
//   xhrRequest("POST", url, quoteData);
// }`,
//     Kotlin: `fun createQuote(quote: String, author: String, category: String) {
//     val json = JSONObject()
//         .put("quote", quote)
//         .put("author", author)
//         .put("category", category)
//         .toString()

//     val requestBody = RequestBody.create(MediaType.get("application/json"), json)

//     val request = Request.Builder()
//         .url(BASE_URL)
//         .post(requestBody)
//         .build()

//     client.newCall(request).execute().use { response ->
//         println(response.body?.string())
//     }
// }`,
//   },
//   update: {
//     node: `async function updateQuote(id, updatedData) {
//   const response = await fetch(\`\${BASE_URL}/\${id}\`, {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(updatedData),
//   });
//   const data = await response.json();
//   console.log(data);
// }`,
//     Shell: `updateQuote() {
//   curl -X PUT "$BASE_URL/QUOTE_ID" -H "Content-Type: application/json" -d '{"quote":"Updated Quote"}'
// }`,
//     Python: `def update_quote(quote_id, updated_data):
//     response = requests.put(f"{BASE_URL}/{quote_id}", json=updated_data, headers={"Content-Type": "application/json"})
//     print(response.json())`,
//     Ruby: `def update_quote(quote_id, updated_data)
//   uri = URI("#{BASE_URL}/#{quote_id}")
//   request = Net::HTTP::Put.new(uri, 'Content-Type' => 'application/json')
//   request.body = updated_data.to_json
//   response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) { |http| http.request(request) }
//   puts JSON.parse(response.body)
// end`,
//     PHP: `function updateQuote($quoteId, $updatedData) {
//     global $BASE_URL;
//     return sendRequest("$BASE_URL/$quoteId", "PUT", $updatedData);
// }`,
//     Java: `public static void updateQuote(String id, String updatedQuote) {
//         HttpResponse<JsonNode> response = Unirest.put(BASE_URL + "/" + id)
//             .header("Content-Type", "application/json")
//             .body("{\"quote\":\"" + updatedQuote + "\"}")
//             .asJson();
//         System.out.println(response.getBody());
//     }`,
//   },
//   delete: {
//     node: `async function deleteQuote(id) {
//   await fetch(\`\${BASE_URL}/\${id}\`, { method: "DELETE" });
//   console.log(\`Deleted Quote ID: \${id}\`);
// }`,
//     Shell: `deleteQuote() {
//   curl -X DELETE "$BASE_URL/QUOTE_ID"
// }`,
//     Python: `def delete_quote(quote_id):
//     response = requests.delete(f"{BASE_URL}/{quote_id}")
//     print(f"Deleted Quote ID: {quote_id}")`,
//     Ruby: `def delete_quote(quote_id)
//   uri = URI("#{BASE_URL}/#{quote_id}")
//   request = Net::HTTP::Delete.new(uri)
//   response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) { |http| http.request(request) }
//   puts "Deleted Quote ID: #{quote_id}"
// end`,
//     PHP: `function deleteQuote($quoteId) {
//     global $BASE_URL;
//     return sendRequest("$BASE_URL/$quoteId", "DELETE");
// }`,
//     Java: `public static void deleteQuote(String id) {
//         Unirest.delete(BASE_URL + "/" + id).asEmpty();
//         System.out.println("Deleted Quote ID: " + id);
//     }`,
//   },
// };

// export const commandMap = {
//   create: {
//     node: `
//       async function createQuote(quoteData) {
//         const response = await fetch(BASE_URL, {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(quoteData),
//         });
//         const data = await response.json();
//         console.log(data);
//       }
//     `,

//     Shell: `
//       createQuote() {
//         curl -X POST "$BASE_URL" \
//         -H "Content-Type: application/json" \
//         -d '{"quote":"Life is beautiful", "author":"John Doe", "category":"Inspiration"}'
//       }
//     `,

//     Python: `
//       def create_quote(quote_data):
//           response = requests.post(BASE_URL, json=quote_data, headers={"Content-Type": "application/json"})
//           print(response.json())
//     `,

//     Ruby: `
//       def create_quote(quote_data)
//         uri = URI(BASE_URL)
//         request = Net::HTTP::Post.new(uri, 'Content-Type' => 'application/json')
//         request.body = quote_data.to_json
//         response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
//           http.request(request)
//         end
//         puts JSON.parse(response.body)
//       end
//     `,

//     PHP: `
//       function createQuote($quoteData) {
//           global $BASE_URL;
//           return sendRequest($BASE_URL, "POST", $quoteData);
//       }
//     `,

//     Java: `
//       public static void createQuote(String quote, String author, String category) {
//           HttpResponse<JsonNode> response = Unirest.post(BASE_URL)
//             .header("Content-Type", "application/json")
//             .body("{\"quote\":\"" + quote + "\", \"author\":\"" + author + "\", \"category\":\"" + category + "\"}")
//             .asJson();
//           System.out.println(response.getBody());
//       }
//     `,

//     CSharp: `
//       public static void CreateQuote(string quote, string author, string category) {
//           var client = new RestClient(BASE_URL);
//           var request = new RestRequest("", Method.Post);
//           request.AddHeader("Content-Type", "application/json");
//           request.AddJsonBody(new { quote, author, category });
//           var response = client.Execute(request);
//           Console.WriteLine(response.Content);
//       }
//     `,

//     JavaScript: `
//       function xhrRequest(method, endpoint, data = null) {
//           const xhr = new XMLHttpRequest();
//           xhr.open(method, endpoint);
//           xhr.setRequestHeader("Content-Type", "application/json");
//           xhr.onreadystatechange = function () {
//               if (xhr.readyState === 4 && xhr.status === 200) {
//                   console.log(JSON.parse(xhr.responseText));
//               }
//           };
//           xhr.send(data ? JSON.stringify(data) : null);
//       }

//       function createQuote(quoteData) {
//           xhrRequest("POST", url, quoteData);
//       }
//     `,

//     Kotlin: `
//       import okhttp3.*
//       import org.json.JSONObject

//       val BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote/random"
//       val client = OkHttpClient()

//       fun createQuote(quote: String, author: String, category: String) {
//           val json = JSONObject()
//               .put("quote", quote)
//               .put("author", author)
//               .put("category", category)
//               .toString()
//           val requestBody = RequestBody.create(MediaType.get("application/json"), json)
//           val request = Request.Builder()
//               .url(BASE_URL)
//               .post(requestBody)
//               .build()

//           client.newCall(request).execute().use { response ->
//               println(response.body?.string())
//           }
//       }
//     `,
//   },

//   getAll: {
//     node: `
//       async function getAllQuotes() {
//         const response = await fetch(BASE_URL, {
//           method: "GET",
//         });
//         const data = await response.json();
//         console.log(data);
//       }
//     `,

//     Shell: `
//       getAllQuotes() {
//         curl -X GET "$BASE_URL"
//       }
//     `,

//     Python: `
//       def get_all_quotes():
//           response = requests.get(BASE_URL)
//           print(response.json())
//     `,

//     Ruby: `
//       def get_all_quotes
//         uri = URI(BASE_URL)
//         response = Net::HTTP.get(uri)
//         puts JSON.parse(response)
//       end
//     `,

//     PHP: `
//       function getAllQuotes() {
//           global $BASE_URL;
//           return sendRequest($BASE_URL, "GET");
//       }
//     `,

//     Java: `
//       public static void getAllQuotes() {
//           HttpResponse<JsonNode> response = Unirest.get(BASE_URL).asJson();
//           System.out.println(response.getBody());
//       }
//     `,

//     CSharp: `
//       public static void GetAllQuotes() {
//           var client = new RestClient(BASE_URL);
//           var request = new RestRequest(Method.Get);
//           var response = client.Execute(request);
//           Console.WriteLine(response.Content);
//       }
//     `,

//     JavaScript: `
//       function getAllQuotes() {
//           xhrRequest("GET", url);
//       }
//     `,

//     Kotlin: `
//       fun getAllQuotes() {
//           val request = Request.Builder()
//               .url(BASE_URL)
//               .get()
//               .build()

//           client.newCall(request).execute().use { response ->
//               println(response.body?.string())
//           }
//       }
//     `,
//   },

//   getById: {
//     node: `
//       async function getQuoteById(id) {
//         const response = await fetch(`${BASE_URL}/${id}`, {
//           method: "GET",
//         });
//         const data = await response.json();
//         console.log(data);
//       }
//     `,

//     Shell: `
//       getQuoteById() {
//         curl -X GET "$BASE_URL/$1"
//       }
//     `,

//     Python: `
//       def get_quote_by_id(quote_id):
//           response = requests.get(f"{BASE_URL}/{quote_id}")
//           print(response.json())
//     `,

//     Ruby: `
//       def get_quote_by_id(quote_id)
//         uri = URI("#{BASE_URL}/#{quote_id}")
//         response = Net::HTTP.get(uri)
//         puts JSON.parse(response)
//       end
//     `,

//     PHP: `
//       function getQuoteById($id) {
//           global $BASE_URL;
//           return sendRequest("$BASE_URL/$id", "GET");
//       }
//     `,

//     Java: `
//       public static void getQuoteById(String id) {
//           HttpResponse<JsonNode> response = Unirest.get(BASE_URL + "/" + id).asJson();
//           System.out.println(response.getBody());
//       }
//     `,

//     CSharp: `
//       public static void GetQuoteById(string id) {
//           var client = new RestClient(BASE_URL + "/" + id);
//           var request = new RestRequest(Method.Get);
//           var response = client.Execute(request);
//           Console.WriteLine(response.Content);
//       }
//     `,

//     JavaScript: `
//       function getQuoteById(id) {
//           xhrRequest("GET", `${url}/${id}`);
//       }
//     `,

//     Kotlin: `
//       fun getQuoteById(id: String) {
//           val request = Request.Builder()
//               .url("$BASE_URL/$id")
//               .get()
//               .build()

//           client.newCall(request).execute().use { response ->
//               println(response.body?.string())
//           }
//       }
//     `,
//   },

//   update: {
//     node: `
//       async function updateQuote(id, quoteData) {
//         const response = await fetch(`${BASE_URL}/${id}`, {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(quoteData),
//         });
//         const data = await response.json();
//         console.log(data);
//       }
//     `,

//     Shell: `
//       updateQuote() {
//         curl -X PUT "$BASE_URL/$1" \
//         -H "Content-Type: application/json" \
//         -d '{"quote":"Updated quote", "author":"John Doe", "category":"Motivation"}'
//       }
//     `,

//     Python: `
//       def update_quote(quote_id, quote_data):
//           response = requests.put(f"{BASE_URL}/{quote_id}", json=quote_data, headers={"Content-Type": "application/json"})
//           print(response.json())
//     `,

//     Ruby: `
//       def update_quote(quote_id, quote_data)
//         uri = URI("#{BASE_URL}/#{quote_id}")
//         request = Net::HTTP::Put.new(uri, 'Content-Type' => 'application/json')
//         request.body = quote_data.to_json
//         response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
//           http.request(request)
//         end
//         puts JSON.parse(response.body)
//       end
//     `,

//     PHP: `
//       function updateQuote($id, $quoteData) {
//           global $BASE_URL;
//           return sendRequest("$BASE_URL/$id", "PUT", $quoteData);
//       }
//     `,

//     Java: `
//       public static void updateQuote(String id, String quote, String author, String category) {
//           HttpResponse<JsonNode> response = Unirest.put(BASE_URL + "/" + id)
//             .header("Content-Type", "application/json")
//             .body("{\"quote\":\"" + quote + "\", \"author\":\"" + author + "\", \"category\":\"" + category + "\"}")
//             .asJson();
//           System.out.println(response.getBody());
//       }
//     `,

//     CSharp: `
//       public static void UpdateQuote(string id, string quote, string author, string category) {
//           var client = new RestClient(BASE_URL + "/" + id);
//           var request = new RestRequest(Method.Put);
//           request.AddHeader("Content-Type", "application/json");
//           request.AddJsonBody(new { quote, author, category });
//           var response = client.Execute(request);
//           Console.WriteLine(response.Content);
//       }
//     `,

//     JavaScript: `
//       function updateQuote(id, quoteData) {
//           xhrRequest("PUT", `${url}/${id}`, quoteData);
//       }
//     `,

//     Kotlin: `
//       fun updateQuote(id: String, quote: String, author: String, category: String) {
//           val json = JSONObject()
//               .put("quote", quote)
//               .put("author", author)
//               .put("category", category)
//               .toString()
//           val requestBody = RequestBody.create(MediaType.get("application/json"), json)
//           val request = Request.Builder()
//               .url("$BASE_URL/$id")
//               .put(requestBody)
//               .build()

//           client.newCall(request).execute().use { response ->
//               println(response.body?.string())
//           }
//       }
//     `,
//   },
// };

// profect----
// export const commandMap = {
//   create: {
//     node: `
//       async function createQuote(quoteData) {
//         const response = await fetch(BASE_URL, {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(quoteData),
//         });
//         const data = await response.json();
//         console.log(data);
//       }
//     `,

//     Shell: `
//       createQuote() {
//         curl -X POST "$BASE_URL" \\
//         -H "Content-Type: application/json" \\
//         -d '{"quote":"Life is beautiful", "author":"John Doe", "category":"Inspiration"}'
//       }
//     `,

//     Python: `
//       def create_quote(quote_data):
//         response = requests.post(BASE_URL, json=quote_data, headers={"Content-Type": "application/json"})
//         print(response.json())
//     `,

//     Ruby: `
//       def create_quote(quote_data)
//         uri = URI(BASE_URL)
//         request = Net::HTTP::Post.new(uri, 'Content-Type' => 'application/json')
//         request.body = quote_data.to_json
//         response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
//           http.request(request)
//         end
//         puts JSON.parse(response.body)
//       end
//     `,

//     PHP: `
//       function createQuote($quoteData) {
//         global $BASE_URL;
//         return sendRequest($BASE_URL, "POST", $quoteData);
//       }
//     `,

//     Java: `
//       public static void createQuote(String quote, String author, String category) {
//         HttpResponse<JsonNode> response = Unirest.post(BASE_URL)
//           .header("Content-Type", "application/json")
//           .body("{\\"quote\\":\\"" + quote + "\\", \\"author\\":\\"" + author + "\\", \\"category\\":\\"" + category + "\\"}")
//           .asJson();
//         System.out.println(response.getBody());
//       }
//     `,

//     CSharp: `
//       public static void CreateQuote(string quote, string author, string category) {
//         var client = new RestClient(BASE_URL);
//         var request = new RestRequest("", Method.Post);
//         request.AddHeader("Content-Type", "application/json");
//         request.AddJsonBody(new { quote, author, category });
//         var response = client.Execute(request);
//         Console.WriteLine(response.Content);
//       }
//     `,

//     JavaScript: `
//       function xhrRequest(method, endpoint, data = null) {
//         const xhr = new XMLHttpRequest();
//         xhr.open(method, endpoint);
//         xhr.setRequestHeader("Content-Type", "application/json");
//         xhr.onreadystatechange = function () {
//           if (xhr.readyState === 4 && xhr.status === 200) {
//             console.log(JSON.parse(xhr.responseText));
//           }
//         };
//         xhr.send(data ? JSON.stringify(data) : null);
//       }

//       function createQuote(quoteData) {
//         xhrRequest("POST", url, quoteData);
//       }
//     `,

//     Kotlin: `
//       import okhttp3.*
//       import org.json.JSONObject

//       val BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote/random"
//       val client = OkHttpClient()

//       fun createQuote(quote: String, author: String, category: String) {
//         val json = JSONObject()
//           .put("quote", quote)
//           .put("author", author)
//           .put("category", category)
//           .toString()
//         val requestBody = RequestBody.create(MediaType.get("application/json"), json)
//         val request = Request.Builder()
//           .url(BASE_URL)
//           .post(requestBody)
//           .build()

//         client.newCall(request).execute().use { response ->
//           println(response.body?.string())
//         }
//       }
//     `,
//   },

//   getAll: {
//     node: `
//       async function getAllQuotes() {
//         const response = await fetch(BASE_URL, {
//           method: "GET",
//         });
//         const data = await response.json();
//         console.log(data);
//       }
//     `,

//     Shell: `
//       getAllQuotes() {
//         curl -X GET "$BASE_URL"
//       }
//     `,

//     Python: `
//       def get_all_quotes():
//         response = requests.get(BASE_URL)
//         print(response.json())
//     `,

//     Ruby: `
//       def get_all_quotes
//         uri = URI(BASE_URL)
//         response = Net::HTTP.get(uri)
//         puts JSON.parse(response)
//       end
//     `,

//     PHP: `
//       function getAllQuotes() {
//         global $BASE_URL;
//         return sendRequest($BASE_URL, "GET");
//       }
//     `,

//     Java: `
//       public static void getAllQuotes() {
//         HttpResponse<JsonNode> response = Unirest.get(BASE_URL).asJson();
//         System.out.println(response.getBody());
//       }
//     `,

//     CSharp: `
//       public static void GetAllQuotes() {
//         var client = new RestClient(BASE_URL);
//         var request = new RestRequest(Method.Get);
//         var response = client.Execute(request);
//         Console.WriteLine(response.Content);
//       }
//     `,

//     JavaScript: `
//       function getAllQuotes() {
//         xhrRequest("GET", url);
//       }
//     `,

//     Kotlin: `
//       fun getAllQuotes() {
//         val request = Request.Builder()
//           .url(BASE_URL)
//           .get()
//           .build()

//         client.newCall(request).execute().use { response ->
//           println(response.body?.string())
//         }
//       }
//     `,
//   },

//   getById: {
//     node: `
//       async function getQuoteById(id) {
//         const response = await fetch(\`\${BASE_URL}/\${id}\`, {
//           method: "GET",
//         });
//         const data = await response.json();
//         console.log(data);
//       }
//     `,

//     Shell: `
//       getQuoteById() {
//         curl -X GET "$BASE_URL/$1"
//       }
//     `,

//     Python: `
//       def get_quote_by_id(quote_id):
//         response = requests.get(f"{BASE_URL}/{quote_id}")
//         print(response.json())
//     `,

//     Ruby: `
//       def get_quote_by_id(quote_id)
//         uri = URI("#{BASE_URL}/#{quote_id}")
//         response = Net::HTTP.get(uri)
//         puts JSON.parse(response)
//       end
//     `,

//     PHP: `
//       function getQuoteById($id) {
//         global $BASE_URL;
//         return sendRequest("$BASE_URL/$id", "GET");
//       }
//     `,

//     Java: `
//       public static void getQuoteById(String id) {
//         HttpResponse<JsonNode> response = Unirest.get(BASE_URL + "/" + id).asJson();
//         System.out.println(response.getBody());
//       }
//     `,

//     CSharp: `
//       public static void GetQuoteById(string id) {
//         var client = new RestClient(BASE_URL + "/" + id);
//         var request = new RestRequest(Method.Get);
//         var response = client.Execute(request);
//         Console.WriteLine(response.Content);
//       }
//     `,

//     JavaScript: `
//       function getQuoteById(id) {
//         xhrRequest("GET", \`\${url}/\${id}\`);
//       }
//     `,

//     Kotlin: `
//       fun getQuoteById(id: String) {
//         val request = Request.Builder()
//           .url("$BASE_URL/$id")
//           .get()
//           .build()

//         client.newCall(request).execute().use { response ->
//           println(response.body?.string())
//         }
//       }
//     `,
//   },

//   update: {
//     node: `
//       async function updateQuote(id, quoteData) {
//         const response = await fetch(\`\${BASE_URL}/\${id}\`, {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(quoteData),
//         });
//         const data = await response.json();
//         console.log(data);
//       }
//     `,

//     Shell: `
//       updateQuote() {
//         curl -X PUT "$BASE_URL/$1" \\
//         -H "Content-Type: application/json" \\
//         -d '{"quote":"Updated quote", "author":"John Doe", "category":"Motivation"}'
//       }
//     `,

//     Python: `
//       def update_quote(quote_id, quote_data):
//         response = requests.put(f"{BASE_URL}/{quote_id}", json=quote_data, headers={"Content-Type": "application/json"})
//         print(response.json())
//     `,

//     Ruby: `
//       def update_quote(quote_id, quote_data)
//         uri = URI("#{BASE_URL}/#{quote_id}")
//         request = Net::HTTP::Put.new(uri, 'Content-Type' => 'application/json')
//         request.body = quote_data.to_json
//         response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
//           http.request(request)
//         end
//         puts JSON.parse(response.body)
//       end
//     `,

//     PHP: `
//       function updateQuote($id, $quoteData) {
//         global $BASE_URL;
//         return sendRequest("$BASE_URL/$id", "PUT", $quoteData);
//       }
//     `,

//     Java: `
//       public static void updateQuote(String id, String quote, String author, String category) {
//         HttpResponse<JsonNode> response = Unirest.put(BASE_URL + "/" + id)
//           .header("Content-Type", "application/json")
//           .body("{\\"quote\\":\\"" + quote + "\\", \\"author\\":\\"" + author + "\\", \\"category\\":\\"" + category + "\\"}")
//           .asJson();
//         System.out.println(response.getBody());
//       }
//     `,

//     CSharp: `
//       public static void UpdateQuote(string id, string quote, string author, string category) {
//         var client = new RestClient(BASE_URL + "/" + id);
//         var request = new RestRequest(Method.Put);
//         request.AddHeader("Content-Type", "application/json");
//         request.AddJsonBody(new { quote, author, category });
//         var response = client.Execute(request);
//         Console.WriteLine(response.Content);
//       }
//     `,

//     JavaScript: `
//       function updateQuote(id, quoteData) {
//         xhrRequest("PUT", \`\${url}/\${id}\`, quoteData);
//       }
//     `,

//     Kotlin: `
//       fun updateQuote(id: String, quote: String, author: String, category: String) {
//         val json = JSONObject()
//           .put("quote", quote)
//           .put("author", author)
//           .put("category", category)
//           .toString()
//         val requestBody = RequestBody.create(MediaType.get("application/json"), json)
//         val request = Request.Builder()
//           .url("$BASE_URL/$id")
//           .put(requestBody)
//           .build()

//         client.newCall(request).execute().use { response ->
//           println(response.body?.string())
//         }
//       }
//     `,
//   },
// };

// -----------

// export const commandMap = {
//   create: {
//     node: {
//       fetch: `async function createQuote(quoteData) {
//   const response = await fetch(BASE_URL, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(quoteData),
//   });
//   const data = await response.json();
//   console.log(data);
// }`,
//       axios: `async function createQuote(quoteData) {
//   const response = await axios.post(BASE_URL, quoteData);
//   console.log(response.data);
// }`,
//       request: `function createQuote(quoteData) {
//   request.post(BASE_URL, { json: quoteData }, (error, response, body) => {
//     console.log(body);
//   });
// }`,
//       unirest: `
// const unirest = require("unirest");
// function createQuote(quoteData) {
//   unirest.post(BASE_URL).send(quoteData).end((response) => console.log(response.body));
// }`,
//     },

//     Shell: {
//       curl: ``,
//       httpie: ``,
//     },

//     Python: `
//       def create_quote(quote_data):
//         response = requests.post(BASE_URL, json=quote_data, headers={"Content-Type": "application/json"})
//         print(response.json())
//     `,

//     Ruby: `
//       def create_quote(quote_data)
//         uri = URI(BASE_URL)
//         request = Net::HTTP::Post.new(uri, 'Content-Type' => 'application/json')
//         request.body = quote_data.to_json
//         response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
//           http.request(request)
//         end
//         puts JSON.parse(response.body)
//       end
//     `,

//     PHP: `
//       function createQuote($quoteData) {
//         global $BASE_URL;
//         return sendRequest($BASE_URL, "POST", $quoteData);
//       }
//     `,

//     Java: {
//       Unirest: ``,
//       AsyncHttp: ``,
//       HttpClient: ``,
//       OkHttp: ``,
//     },

//     CSharp: {
//       RestSharp: ``,
//       HttpClient: ``,
//     },

//     JavaScript: {
//       xhr: ``,
//       axios: ``,
//       fetch: ``,
//       jQuery: ``,
//     },

//     Kotlin: `
//       import okhttp3.*
//       import org.json.JSONObject

//       val BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote/random"
//       val client = OkHttpClient()

//       fun createQuote(quote: String, author: String, category: String) {
//         val json = JSONObject()
//           .put("quote", quote)
//           .put("author", author)
//           .put("category", category)
//           .toString()
//         val requestBody = RequestBody.create(MediaType.get("application/json"), json)
//         val request = Request.Builder()
//           .url(BASE_URL)
//           .post(requestBody)
//           .build()

//         client.newCall(request).execute().use { response ->
//           println(response.body?.string())
//         }
//       }
//     `,
//   },

//   getAll: {
//     node: `
//       async function getAllQuotes() {
//         const response = await fetch(BASE_URL, {
//           method: "GET",
//         });
//         const data = await response.json();
//         console.log(data);
//       }
//     `,

//     Shell: `
//       getAllQuotes() {
//         curl -X GET "$BASE_URL"
//       }
//     `,

//     Python: `
//       def get_all_quotes():
//         response = requests.get(BASE_URL)
//         print(response.json())
//     `,

//     Ruby: `
//       def get_all_quotes
//         uri = URI(BASE_URL)
//         response = Net::HTTP.get(uri)
//         puts JSON.parse(response)
//       end
//     `,

//     PHP: `
//       function getAllQuotes() {
//         global $BASE_URL;
//         return sendRequest($BASE_URL, "GET");
//       }
//     `,

//     Java: `
//       public static void getAllQuotes() {
//         HttpResponse<JsonNode> response = Unirest.get(BASE_URL).asJson();
//         System.out.println(response.getBody());
//       }
//     `,

//     CSharp: `
//       public static void GetAllQuotes() {
//         var client = new RestClient(BASE_URL);
//         var request = new RestRequest(Method.Get);
//         var response = client.Execute(request);
//         Console.WriteLine(response.Content);
//       }
//     `,

//     JavaScript: `
//       function getAllQuotes() {
//         xhrRequest("GET", url);
//       }
//     `,

//     Kotlin: `
//       fun getAllQuotes() {
//         val request = Request.Builder()
//           .url(BASE_URL)
//           .get()
//           .build()

//         client.newCall(request).execute().use { response ->
//           println(response.body?.string())
//         }
//       }
//     `,
//   },

//   getById: {
//     node: `
//       async function getQuoteById(id) {
//         const response = await fetch(\`\${BASE_URL}/\${id}\`, {
//           method: "GET",
//         });
//         const data = await response.json();
//         console.log(data);
//       }
//     `,

//     Shell: `
//       getQuoteById() {
//         curl -X GET "$BASE_URL/$1"
//       }
//     `,

//     Python: `
//       def get_quote_by_id(quote_id):
//         response = requests.get(f"{BASE_URL}/{quote_id}")
//         print(response.json())
//     `,

//     Ruby: `
//       def get_quote_by_id(quote_id)
//         uri = URI("#{BASE_URL}/#{quote_id}")
//         response = Net::HTTP.get(uri)
//         puts JSON.parse(response)
//       end
//     `,

//     PHP: `
//       function getQuoteById($id) {
//         global $BASE_URL;
//         return sendRequest("$BASE_URL/$id", "GET");
//       }
//     `,

//     Java: `
//       public static void getQuoteById(String id) {
//         HttpResponse<JsonNode> response = Unirest.get(BASE_URL + "/" + id).asJson();
//         System.out.println(response.getBody());
//       }
//     `,

//     CSharp: `
//       public static void GetQuoteById(string id) {
//         var client = new RestClient(BASE_URL + "/" + id);
//         var request = new RestRequest(Method.Get);
//         var response = client.Execute(request);
//         Console.WriteLine(response.Content);
//       }
//     `,

//     JavaScript: `
//       function getQuoteById(id) {
//         xhrRequest("GET", \`\${url}/\${id}\`);
//       }
//     `,

//     Kotlin: `
//       fun getQuoteById(id: String) {
//         val request = Request.Builder()
//           .url("$BASE_URL/$id")
//           .get()
//           .build()

//         client.newCall(request).execute().use { response ->
//           println(response.body?.string())
//         }
//       }
//     `,
//   },

//   update: {
//     node: `
//       async function updateQuote(id, quoteData) {
//         const response = await fetch(\`\${BASE_URL}/\${id}\`, {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(quoteData),
//         });
//         const data = await response.json();
//         console.log(data);
//       }
//     `,

//     Shell: `
//       updateQuote() {
//         curl -X PUT "$BASE_URL/$1" \\
//         -H "Content-Type: application/json" \\
//         -d '{"quote":"Updated quote", "author":"John Doe", "category":"Motivation"}'
//       }
//     `,

//     Python: `
//       def update_quote(quote_id, quote_data):
//         response = requests.put(f"{BASE_URL}/{quote_id}", json=quote_data, headers={"Content-Type": "application/json"})
//         print(response.json())
//     `,

//     Ruby: `
//       def update_quote(quote_id, quote_data)
//         uri = URI("#{BASE_URL}/#{quote_id}")
//         request = Net::HTTP::Put.new(uri, 'Content-Type' => 'application/json')
//         request.body = quote_data.to_json
//         response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
//           http.request(request)
//         end
//         puts JSON.parse(response.body)
//       end
//     `,

//     PHP: `
//       function updateQuote($id, $quoteData) {
//         global $BASE_URL;
//         return sendRequest("$BASE_URL/$id", "PUT", $quoteData);
//       }
//     `,

//     Java: `
//       public static void updateQuote(String id, String quote, String author, String category) {
//         HttpResponse<JsonNode> response = Unirest.put(BASE_URL + "/" + id)
//           .header("Content-Type", "application/json")
//           .body("{\\"quote\\":\\"" + quote + "\\", \\"author\\":\\"" + author + "\\", \\"category\\":\\"" + category + "\\"}")
//           .asJson();
//         System.out.println(response.getBody());
//       }
//     `,

//     CSharp: `
//       public static void UpdateQuote(string id, string quote, string author, string category) {
//         var client = new RestClient(BASE_URL + "/" + id);
//         var request = new RestRequest(Method.Put);
//         request.AddHeader("Content-Type", "application/json");
//         request.AddJsonBody(new { quote, author, category });
//         var response = client.Execute(request);
//         Console.WriteLine(response.Content);
//       }
//     `,

//     JavaScript: `
//       function updateQuote(id, quoteData) {
//         xhrRequest("PUT", \`\${url}/\${id}\`, quoteData);
//       }
//     `,

//     Kotlin: `
//       fun updateQuote(id: String, quote: String, author: String, category: String) {
//         val json = JSONObject()
//           .put("quote", quote)
//           .put("author", author)
//           .put("category", category)
//           .toString()
//         val requestBody = RequestBody.create(MediaType.get("application/json"), json)
//         val request = Request.Builder()
//           .url("$BASE_URL/$id")
//           .put(requestBody)
//           .build()

//         client.newCall(request).execute().use { response ->
//           println(response.body?.string())
//         }
//       }
//     `,
//   },
// };

// export const commandMap = {
//   create: {
//     node: {
//       fetch: `async function createQuote(quoteData) {
//         const response = await fetch(BASE_URL, {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(quoteData),
//         });
//         const data = await response.json();
//         console.log(data);
//       }`,
//       axios: `async function createQuote(quoteData) {
//         const response = await axios.post(BASE_URL, quoteData);
//         console.log(response.data);
//       }`,
//       request: `function createQuote(quoteData) {
//         request.post(BASE_URL, { json: quoteData }, (error, response, body) => {
//           console.log(body);
//         });
//       }`,
//       unirest: `function createQuote(quoteData) {
//         unirest.post(BASE_URL).send(quoteData).end((response) => console.log(response.body));
//       }`,
//     },
//     Shell: {
//       curl: `
//         createQuote() {
//           curl -X POST "$BASE_URL" \\
//           -H "Content-Type: application/json" \\
//           -d '{"quote":"Life is beautiful", "author":"John Doe", "category":"Inspiration"}'
//         }
//       `,
//       httpie: `
//         createQuote() {
//           http POST "$BASE_URL" quote="Life is beautiful" author="John Doe" category="Inspiration"
//         }
//       `,
//     },
//     Python: `
//       def create_quote(quote_data):
//         response = requests.post(BASE_URL, json=quote_data, headers={"Content-Type": "application/json"})
//         print(response.json())
//     `,
//     Ruby: `
//       def create_quote(quote_data)
//         uri = URI(BASE_URL)
//         request = Net::HTTP::Post.new(uri, 'Content-Type' => 'application/json')
//         request.body = quote_data.to_json
//         response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
//           http.request(request)
//         end
//         puts JSON.parse(response.body)
//       end
//     `,
//     PHP: `
//       function createQuote($quoteData) {
//         global $BASE_URL;
//         return sendRequest($BASE_URL, "POST", $quoteData);
//       }
//     `,
//     Java: {
//       Unirest: `
//         public static void createQuote(String quote, String author, String category) {
//           HttpResponse<JsonNode> response = Unirest.post(BASE_URL)
//             .header("Content-Type", "application/json")
//             .body("{\\"quote\\":\\"" + quote + "\\", \\"author\\":\\"" + author + "\\", \\"category\\":\\"" + category + "\\"}")
//             .asJson();
//           System.out.println(response.getBody());
//         }
//       `,
//       AsyncHttp: `
//         public static void createQuoteAsync(String quote, String author, String category) throws ExecutionException, InterruptedException {
//           HttpRequest request = HttpRequest.newBuilder()
//             .uri(URI.create(BASE_URL))
//             .header("Content-Type", "application/json")
//             .POST(HttpRequest.BodyPublishers.ofString("{\\"quote\\":\\"" + quote + "\\", \\"author\\":\\"" + author + "\\", \\"category\\":\\"" + category + "\\"}"))
//             .build();
//           HttpClient client = HttpClient.newHttpClient();
//           CompletableFuture<HttpResponse<String>> responseFuture = client.sendAsync(request, HttpResponse.BodyHandlers.ofString());
//           HttpResponse<String> response = responseFuture.get();
//           System.out.println(response.body());
//         }
//       `,
//       HttpClient: `
//         public static void createQuoteHttpClient(String quote, String author, String category) throws IOException {
//           HttpClient client = HttpClient.newHttpClient();
//           HttpRequest request = HttpRequest.newBuilder()
//             .uri(URI.create(BASE_URL))
//             .header("Content-Type", "application/json")
//             .POST(HttpRequest.BodyPublishers.ofString("{\\"quote\\":\\"" + quote + "\\", \\"author\\":\\"" + author + "\\", \\"category\\":\\"" + category + "\\"}"))
//             .build();
//           HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
//           System.out.println(response.body());
//         }
//       `,
//       OkHttp: `
//         import okhttp3.*;
//         import java.io.IOException;

//         public static void createQuoteOkHttp(String quote, String author, String category) throws IOException {
//           OkHttpClient client = new OkHttpClient();
//           MediaType mediaType = MediaType.parse("application/json");
//           RequestBody body = RequestBody.create(mediaType, "{\\"quote\\":\\"" + quote + "\\", \\"author\\":\\"" + author + "\\", \\"category\\":\\"" + category + "\\"}");
//           Request request = new Request.Builder()
//             .url(BASE_URL)
//             .post(body)
//             .build();
//           try (Response response = client.newCall(request).execute()) {
//             System.out.println(response.body().string());
//           }
//         }
//       `,
//     },
//     CSharp: {
//       RestSharp: `
//         public static void CreateQuoteRestSharp(string quote, string author, string category) {
//           var client = new RestClient(BASE_URL);
//           var request = new RestRequest("", Method.Post);
//           request.AddHeader("Content-Type", "application/json");
//           request.AddJsonBody(new { quote, author, category });
//           var response = client.Execute(request);
//           Console.WriteLine(response.Content);
//         }
//       `,
//       HttpClient: `
//         public static async Task CreateQuoteHttpClientAsync(string quote, string author, string category) {
//           using var client = new HttpClient();
//           client.DefaultRequestHeaders.Accept.Clear();
//           client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
//           var content = new StringContent(JsonConvert.SerializeObject(new { quote, author, category }), Encoding.UTF8, "application/json");
//           var response = await client.PostAsync(BASE_URL, content);
//           var responseString = await response.Content.ReadAsStringAsync();
//           Console.WriteLine(responseString);
//         }
//       `,
//     },
//     JavaScript: {
//       xhr: `
//         function xhrCreateQuote(quoteData) {
//           const xhr = new XMLHttpRequest();
//           xhr.open("POST", BASE_URL);
//           xhr.setRequestHeader("Content-Type", "application/json");
//           xhr.onload = function () {
//             if (xhr.status >= 200 && xhr.status < 300) {
//               console.log(JSON.parse(xhr.responseText));
//             } else {
//               console.error(\`Request failed. Returned status of \${xhr.status}\`);
//             }
//           };
//           xhr.onerror = function () {
//             console.error('There was a network error.');
//           };
//           xhr.send(JSON.stringify(quoteData));
//         }
//       `,
//       axios: `
//         async function axiosCreateQuote(quoteData) {
//           try {
//             const response = await axios.post(BASE_URL, quoteData);
//             console.log(response.data);
//           } catch (error) {
//             console.error(error);
//           }
//         }
//       `,
//       fetch: `
//         async function fetchCreateQuote(quoteData) {
//           try {
//             const response = await fetch(BASE_URL, {
//               method: "POST",
//               headers: { "Content-Type": "application/json" },
//               body: JSON.stringify(quoteData),
//             });
//             const data = await response.json();
//             console.log(data);
//           } catch (error) {
//             console.error("There was a problem with the fetch operation:", error);
//           }
//         }
//       `,
//       jQuery: `
//         function jqueryCreateQuote(quoteData) {
//           $.ajax({
//             url: BASE_URL,
//             method: "POST",
//             contentType: "application/json",
//             data: JSON.stringify(quoteData),
//             success: function (data) {
//               console.log(data);
//             },
//             error: function (error) {
//               console.error("Error:", error);
//             },
//           });
//         }
//       `,
//     },
//     Kotlin: `
//       import okhttp3.*
//       import org.json.JSONObject
//       import java.io.IOException

//       val BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote/random"
//       val client = OkHttpClient()

//       fun createQuote(quote: String, author: String, category: String) {
//         val json = JSONObject()
//           .put("quote", quote)
//           .put("author", author)
//           .put("category", category)
//           .toString()
//         val requestBody = RequestBody.create(MediaType.get("application/json"), json)
//         val request = Request.Builder()
//           .url(BASE_URL)
//           .post(requestBody)
//           .build()

//         client.newCall(request).execute().use { response ->
//           println(response.body?.string())
//         }
//       }
//     `,
//   },
//   getAll: {
//     node: {
//       fetch: `async function getAllQuotes() {
//         const response = await fetch(BASE_URL, {
//           method: "GET",
//         });
//         const data = await response.json();
//         console.log(data);
//       }`,
//       axios: `async function getAllQuotes() {
//         const response = await axios.get(BASE_URL);
//         console.log(response.data);
//       }`,
//       request: `function getAllQuotes() {
//         request.get(BASE_URL, (error, response, body) => {
//           console.log(body);
//         });
//       }`,
//       unirest: `function getAllQuotes() {
//         unirest.get(BASE_URL).end((response) => console.log(response.body));
//       }`,
//     },
//     Shell: {
//       curl: `
//         getAllQuotes() {
//           curl -X GET "$BASE_URL"
//         }
//       `,
//       httpie: `
//         getAllQuotes() {
//           http GET "$BASE_URL"
//         }
//       `,
//     },
//     Python: `
//       def get_all_quotes():
//         response = requests.get(BASE_URL)
//         print(response.json())
//     `,
//     Ruby: `
//       def get_all_quotes
//         uri = URI(BASE_URL)
//         response = Net::HTTP.get(uri)
//         puts JSON.parse(response)
//       end
//     `,
//     PHP: `
//       function getAllQuotes() {
//         global $BASE_URL;
//         return sendRequest($BASE_URL, "GET");
//       }
//     `,
//     Java: {
//       Unirest: `
//         public static void getAllQuotes() {
//           HttpResponse<JsonNode> response = Unirest.get(BASE_URL).asJson();
//           System.out.println(response.getBody());
//         }
//       `,
//       AsyncHttp: `
//         public static void getAllQuotesAsync() throws ExecutionException, InterruptedException {
//           HttpRequest request = HttpRequest.newBuilder()
//             .uri(URI.create(BASE_URL))
//             .GET()
//             .build();
//           HttpClient client = HttpClient.newHttpClient();
//           CompletableFuture<HttpResponse<String>> responseFuture = client.sendAsync(request, HttpResponse.BodyHandlers.ofString());
//           HttpResponse<String> response = responseFuture.get();
//           System.out.println(response.body());
//         }
//       `,
//       HttpClient: `
//         public static void getAllQuotesHttpClient() throws IOException {
//           HttpClient client = HttpClient.newHttpClient();
//           HttpRequest request = HttpRequest.newBuilder()
//             .uri(URI.create(BASE_URL))
//             .GET()
//             .build();
//           HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
//           System.out.println(response.body());
//         }
//       `,
//       OkHttp: `
//         import okhttp3.*;
//         import java.io.IOException;

//         public static void getAllQuotesOkHttp() throws IOException {
//           OkHttpClient client = new OkHttpClient();
//           Request request = new Request.Builder()
//             .url(BASE_URL)
//             .get()
//             .build();
//           try (Response response = client.newCall(request).execute()) {
//             System.out.println(response.body().string());
//           }
//         }
//       `,
//     },
//     CSharp: {
//       RestSharp: `
//         public static void GetAllQuotesRestSharp() {
//           var client = new RestClient(BASE_URL);
//           var request = new RestRequest(Method.Get);
//           var response = client.Execute(request);
//           Console.WriteLine(response.Content);
//         }
//       `,
//       HttpClient: `
//         public static async Task GetAllQuotesHttpClientAsync() {
//           using var client = new HttpClient();
//           var response = await client.GetAsync(BASE_URL);
//           var responseString = await response.Content.ReadAsStringAsync();
//           Console.WriteLine(responseString);
//         }
//       `,
//     },
//     JavaScript: {
//       xhr: `
//         function xhrGetAllQuotes() {
//           const xhr = new XMLHttpRequest();
//           xhr.open("GET", BASE_URL);
//           xhr.onload = function () {
//             if (xhr.status >= 200 && xhr.status < 300) {
//               console.log(JSON.parse(xhr.responseText));
//             } else {
//               console.error(\`Request failed. Returned status of \${xhr.status}\`);
//             }
//           };
//           xhr.onerror = function () {
//             console.error('There was a network error.');
//           };
//           xhr.send();
//         }
//       `,
//       axios: `
//         async function axiosGetAllQuotes() {
//           try {
//             const response = await axios.get(BASE_URL);
//             console.log(response.data);
//           } catch (error) {
//             console.error(error);
//           }
//         }
//       `,
//       fetch: `
//         async function fetchGetAllQuotes() {
//           try {
//             const response = await fetch(BASE_URL);
//             const data = await response.json();
//             console.log(data);
//           } catch (error) {
//             console.error("There was a problem with the fetch operation:", error);
//           }
//         }
//       `,
//       jQuery: `
//         function jqueryGetAllQuotes() {
//           $.ajax({
//             url: BASE_URL,
//             method: "GET",
//             success: function (data) {
//               console.log(data);
//             },
//             error: function (error) {
//               console.error("Error:", error);
//             },
//           });
//         }
//       `,
//     },
//     Kotlin: `
//       import okhttp3.*
//       import java.io.IOException

//       val BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote/random"
//       val client = OkHttpClient()

//       fun getAllQuotes() {
//         val request = Request.Builder()
//           .url(BASE_URL)
//           .get()
//           .build()

//         client.newCall(request).execute().use { response ->
//           println(response.body?.string())
//         }
//       }
//     `,
//   },
//   getById: {
//     node: {
//       fetch: async function getQuoteById(id) {
//         const response = await fetch(`${BASE_URL}/${id}`, {
//           method: "GET",
//         });
//         const data = await response.json();
//         console.log(data);
//       },
//       axios: async function getQuoteById(id) {
//         const response = await axios.get(`${BASE_URL}/${id}`);
//         console.log(response.data);
//       },
//       request: function getQuoteById(id) {
//         request.get(`${BASE_URL}/${id}`, (error, response, body) => {
//           console.log(body);
//         });
//       },
//       unirest: function getQuoteById(id) {
//         unirest.get(`${BASE_URL}/${id}`).end((response) => console.log(response.body));
//       },
//     },
//     Shell: {
//       curl: `
//         getQuoteById() {
//           curl -X GET "$BASE_URL/$1"
//         }
//       `,
//       httpie: `
//         getQuoteById() {
//           http GET "$BASE_URL/$1"
//         }
//       `,
//     },
//     Python: `
//       def get_quote_by_id(quote_id):
//         response = requests.get(f"{BASE_URL}/{quote_id}")
//         print(response.json())
//     `,
//     Ruby: `
//       def get_quote_by_id(quote_id)
//         uri = URI("#{BASE_URL}/#{quote_id}")
//         response = Net::HTTP.get(uri)
//         puts JSON.parse(response)
//       end
//     `,
//     PHP: `
//       function getQuoteById($id) {
//         global $BASE_URL;
//         return sendRequest("$BASE_URL/$id", "GET");
//         }
//     `,
//     Java: {
//       Unirest: `
//         public static void getQuoteById(String id) {
//           HttpResponse<JsonNode> response = Unirest.get(BASE_URL + "/" + id).asJson();
//           System.out.println(response.getBody());
//         }
//       `,
//       AsyncHttp: `
//         public static void getQuoteByIdAsync(String id) throws ExecutionException, InterruptedException {
//           HttpRequest request = HttpRequest.newBuilder()
//             .uri(URI.create(BASE_URL + "/" + id))
//             .GET()
//             .build();
//           HttpClient client = HttpClient.newHttpClient();
//           CompletableFuture<HttpResponse<String>> responseFuture = client.sendAsync(request, HttpResponse.BodyHandlers.ofString());
//           HttpResponse<String> response = responseFuture.get();
//           System.out.println(response.body());
//         }
//       `,
//       HttpClient: `
//         public static void getQuoteByIdHttpClient(String id) throws IOException {
//           HttpClient client = HttpClient.newHttpClient();
//           HttpRequest request = HttpRequest.newBuilder()
//             .uri(URI.create(BASE_URL + "/" + id))
//             .GET()
//             .build();
//           HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
//           System.out.println(response.body());
//         }
//       `,
//       OkHttp: `
//         import okhttp3.*;
//         import java.io.IOException;

//         public static void getQuoteByIdOkHttp(String id) throws IOException {
//           OkHttpClient client = new OkHttpClient();
//           Request request = new Request.Builder()
//             .url(BASE_URL + "/" + id)
//             .get()
//             .build();
//           try (Response response = client.newCall(request).execute()) {
//             System.out.println(response.body().string());
//           }
//         }
//       `,
//     },
//     CSharp: {
//       RestSharp: `
//         public static void GetQuoteByIdRestSharp(string id) {
//           var client = new RestClient(BASE_URL + "/" + id);
//           var request = new RestRequest(Method.Get);
//           var response = client.Execute(request);
//           Console.WriteLine(response.Content);
//         }
//       `,
//       HttpClient: `
//         public static async Task GetQuoteByIdHttpClientAsync(string id) {
//           using var client = new HttpClient();
//           var response = await client.GetAsync(BASE_URL + "/" + id);
//           var responseString = await response.Content.ReadAsStringAsync();
//           Console.WriteLine(responseString);
//         }
//       `,
//     },
//     JavaScript: {
//       xhr: `
//         function xhrGetQuoteById(id) {
//           const xhr = new XMLHttpRequest();
//           xhr.open("GET", \`\${BASE_URL}/\${id}\`);
//           xhr.onload = function () {
//             if (xhr.status >= 200 && xhr.status < 300) {
//               console.log(JSON.parse(xhr.responseText));
//             } else {
//               console.error(\`Request failed. Returned status of \${xhr.status}\`);
//             }
//           };
//           xhr.onerror = function () {
//             console.error('There was a network error.');
//           };
//           xhr.send();
//         }
//       `,
//       axios: `
//         async function axiosGetQuoteById(id) {
//           try {
//             const response = await axios.get(\`\${BASE_URL}/\${id}\`);
//             console.log(response.data);
//           } catch (error) {
//             console.error(error);
//           }
//         }
//       `,
//       fetch: `
//         async function fetchGetQuoteById(id) {
//           try {
//             const response = await fetch(\`\${BASE_URL}/\${id}\`);
//             const data = await response.json();
//             console.log(data);
//           } catch (error) {
//             console.error("There was a problem with the fetch operation:", error);
//           }
//         }
//       `,
//       jQuery: `
//         function jqueryGetQuoteById(id) {
//           $.ajax({
//             url: \`\${BASE_URL}/\${id}\`,
//             method: "GET",
//             success: function (data) {
//               console.log(data);
//             },
//             error: function (error) {
//               console.error("Error:", error);
//             },
//           });
//         }
//       `,
//     },
//     Kotlin: `
//       import okhttp3.*
//       import java.io.IOException

//       val BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote/random"
//       val client = OkHttpClient()

//       fun getQuoteById(id: String) {
//         val request = Request.Builder()
//           .url("$BASE_URL/$id")
//           .get()
//           .build()

//         client.newCall(request).execute().use { response ->
//           println(response.body?.string())
//         }
//       }
//     `,
//   },
//   update: {
//     node: {
//       fetch: `async function updateQuote(id, quoteData) {
//         const response = await fetch(`${BASE_URL}/${id}`, {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(quoteData),
//         });
//         const data = await response.json();
//         console.log(data);
//       }`,
//       axios: `async function updateQuote(id, quoteData) {
//         const response = await axios.put(`${BASE_URL}/${id}`, quoteData);
//         console.log(response.data);
//       }`,
//       request: function updateQuote(id, quoteData) {
//         request.put(`${BASE_URL}/${id}`, { json: quoteData }, (error, response, body) => {
//           console.log(body);
//         });
//       },
//       unirest: function updateQuote(id, quoteData) {
//         unirest.put(`${BASE_URL}/${id}`).send(quoteData).end((response) => console.log(response.body));
//       },
//     },
//     Shell: {
//       curl: `
//         updateQuote() {
//           curl -X PUT "$BASE_URL/$1" \\
//           -H "Content-Type: application/json" \\
//           -d '{"quote":"Updated quote", "author":"John Doe", "category":"Motivation"}'
//         }
//       `,
//       httpie: `
//         updateQuote() {
//           http PUT "$BASE_URL/$1" quote="Updated quote" author="John Doe" category="Motivation"
//         }
//       `,
//     },
//     Python: `
//       def update_quote(quote_id, quote_data):
//         response = requests.put(f"{BASE_URL}/{quote_id}", json=quote_data, headers={"Content-Type": "application/json"})
//         print(response.json())
//     `,
//     Ruby: `
//       def update_quote(quote_id, quote_data)
//         uri = URI("#{BASE_URL}/#{quote_id}")
//         request = Net::HTTP::Put.new(uri, 'Content-Type' => 'application/json')
//         request.body = quote_data.to_json
//         response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
//           http.request(request)
//         end
//         puts JSON.parse(response.body)
//       end
//     `,
//     PHP: `
//       function updateQuote($id, $quoteData) {
//         global $BASE_URL;
//         return sendRequest("$BASE_URL/$id", "PUT", $quoteData);
//       }
//     `,
//     Java: {
//       Unirest: `
//         public static void updateQuote(String id, String quote, String author, String category) {
//           HttpResponse<JsonNode> response = Unirest.put(BASE_URL + "/" + id)
//             .header("Content-Type", "application/json")
//             .body("{\\"quote\\":\\"" + quote + "\\", \\"author\\":\\"" + author + "\\", \\"category\\":\\"" + category + "\\"}")
//             .asJson();
//           System.out.println(response.getBody());
//         }
//       `,
//       AsyncHttp: `
//         public static void updateQuoteAsync(String id, String quote, String author, String category) throws ExecutionException, InterruptedException {
//           HttpRequest request = HttpRequest.newBuilder()
//             .uri(URI.create(BASE_URL + "/" + id))
//             .header("Content-Type", "application/json")
//             .PUT(HttpRequest.BodyPublishers.ofString("{\\"quote\\":\\"" + quote + "\\", \\"author\\":\\"" + author + "\\", \\"category\\":\\"" + category + "\\"}"))
//             .build();
//           HttpClient client = HttpClient.newHttpClient();
//           CompletableFuture<HttpResponse<String>> responseFuture = client.sendAsync(request, HttpResponse.BodyHandlers.ofString());
//           HttpResponse<String> response = responseFuture.get();
//           System.out.println(response.body());
//         }
//       `,
//       HttpClient: `
//         public static void updateQuoteHttpClient(String id, String quote, String author, String category) throws IOException {
//           HttpClient client = HttpClient.newHttpClient();
//           HttpRequest request = HttpRequest.newBuilder()
//             .uri(URI.create(BASE_URL + "/" + id))
//             .header("Content-Type", "application/json")
//             .PUT(HttpRequest.BodyPublishers.ofString("{\\"quote\\":\\"" + quote + "\\", \\"author\\":\\"" + author + "\\", \\"category\\":\\"" + category + "\\"}"))
//             .build();
//           HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
//           System.out.println(response.body());
//         }
//       `,
//       OkHttp: `
//         import okhttp3.*;
//         import java.io.IOException;

//         public static void updateQuoteOkHttp(String id, String quote, String author, String category) throws IOException {
//           OkHttpClient client = new OkHttpClient();
//           MediaType mediaType = MediaType.parse("application/json");
//           RequestBody body = RequestBody.create(mediaType, "{\\"quote\\":\\"" + quote + "\\", \\"author\\":\\"" + author + "\\", \\"category\\":\\"" + category + "\\"}");
//           Request request = new Request.Builder()
//             .url(BASE_URL + "/" + id)
//             .put(body)
//             .build();
//           try (Response response = client.newCall(request).execute()) {
//             System.out.println(response.body().string());
//           }
//         }
//       `,
//     },
//     CSharp: {
//       RestSharp: `
//         public static void UpdateQuoteRestSharp(string id, string quote, string author, string category) {
//           var client = new RestClient(BASE_URL + "/" + id);
//           var request = new RestRequest(Method.Put);
//           request.AddHeader("Content-Type", "application/json");
//           request.AddJsonBody(new { quote, author, category });
//           var response = client.Execute(request);
//           Console.WriteLine(response.Content);
//         }
//       `,
//       HttpClient: `
//         public static async Task UpdateQuoteHttpClientAsync(string id, string quote, string author, string category) {
//           using var client = new HttpClient();
//           client.DefaultRequestHeaders.Accept.Clear();
//           client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
//           var content = new StringContent(JsonConvert.SerializeObject(new { quote, author, category }), Encoding.UTF8, "application/json");
//           var response = await client.PutAsync(BASE_URL + "/" + id, content);
//           var responseString = await response.Content.ReadAsStringAsync();
//           Console.WriteLine(responseString);
//         }
//       `,
//     },
//     JavaScript: {
//       xhr: `
//         function xhrUpdateQuote(id, quoteData) {
//           const xhr = new XMLHttpRequest();
//           xhr.open("PUT", \`\${BASE_URL}/\${id}\`);
//           xhr.setRequestHeader("Content-Type", "application/json");
//           xhr.onload = function () {
//             if (xhr.status >= 200 && xhr.status < 300) {
//               console.log(JSON.parse(xhr.responseText));
//             } else {
//               console.error(\`Request failed. Returned status of \${xhr.status}\`);
//             }
//           };
//           xhr.onerror = function () {
//             console.error('There was a network error.');
//           };
//           xhr.send(JSON.stringify(quoteData));
//         }
//       `,
//       axios: `
//         async function axiosUpdateQuote(id, quoteData) {
//           try {
//             const response = await axios.put(\`\${BASE_URL}/\${id}\`, quoteData);
//             console.log(response.data);
//           } catch (error) {
//             console.error(error);
//           }
//         }
//       `,
//       fetch: `
//         async function fetchUpdateQuote(id, quoteData) {
//           try {
//             const response = await fetch(\`\${BASE_URL}/\${id}\`, {
//               method: "PUT",
//               headers: { "Content-Type": "application/json" },
//               body: JSON.stringify(quoteData),
//             });
//             const data = await response.json();
//             console.log(data);
//           } catch (error) {
//             console.error("There was a problem with the fetch operation:", error);
//           }
//         }
//       `,
//       jQuery: `
//         function jqueryUpdateQuote(id, quoteData) {
//           $.ajax({
//             url: \`\${BASE_URL}/\${id}\`,
//             method: "PUT",
//             contentType: "application/json",
//             data: JSON.stringify(quoteData),
//             success: function (data) {
//               console.log(data);
//             },
//             error: function (error) {
//               console.error("Error:", error);
//             },
//           });
//         }
//       `,
//     },
//     Kotlin: `
//       import okhttp3.*
//       import org.json.JSONObject
//       import java.io.IOException

//       val BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote/random"
//       val client = OkHttpClient()

//       fun updateQuote(id: String, quote: String, author: String, category: String) {
//         val json = JSONObject()
//           .put("quote", quote)
//           .put("author", author)
//           .put("category", category)
//           .toString()
//         val requestBody = RequestBody.create(MediaType.get("application/json"), json)
//         val request = Request.Builder()
//           .url("$BASE_URL/$id")
//           .put(requestBody)
//           .build()

//         client.newCall(request).execute().use { response ->
//           println(response.body?.string())
//         }
//       }
//     `,
//   },
//   delete: {
//     node: {
//       `fetch: async function deleteQuote(id) {
//         const response = await fetch(`${BASE_URL}/${id}`, {
//           method: "DELETE",
//         });
//         if (response.ok) {
//           console.log("Quote deleted successfully.");
//         } else {
//           console.error(`Failed to delete quote. Status: ${response.status}`);
//         }
//       }`,
//       axios:` async function deleteQuote(id) {
//         try {
//           await axios.delete(`${BASE_URL}/${id}`);
//           console.log("Quote deleted successfully.");
//         } catch (error) {
//           console.error(error);
//         }
//       }`,
//       request:` function deleteQuote(id) {
//         request.delete(`${BASE_URL}/${id}`, (error, response, body) => {
//           if (!error && response.statusCode === 200) {
//             console.log("Quote deleted successfully.");
//           } else {
//             console.error(`Failed to delete quote. Error: ${error || response.statusCode}`);
//           }
//         });
//       }`,
//       unirest: `function deleteQuote(id) {
//         unirest.delete(`${BASE_URL}/${id}`).end((response) => {
//           if (response.status === 200) {
//             console.log("Quote deleted successfully.");
//           } else {
//             console.error(`Failed to delete quote. Status: ${response.status}`);
//           }
//         });
//       }`,
//     },
//     Shell: {
//       curl: `
//         deleteQuote() {
//           curl -X DELETE "$BASE_URL/$1"
//         }
//       `,
//       httpie: `
//         deleteQuote() {
//           http DELETE "$BASE_URL/$1"
//         }
//       `,
//     },
//     Python: `
//       def delete_quote(quote_id):
//         response = requests.delete(f"{BASE_URL}/{quote_id}")
//         if response.status_code == 200:
//           print("Quote deleted successfully.")
//         else:
//           print(f"Failed to delete quote. Status code: {response.status_code}")
//     `,
//     Ruby: `
//       def delete_quote(quote_id)
//         uri = URI("#{BASE_URL}/#{quote_id}")
//         request = Net::HTTP::Delete.new(uri)
//         response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
//           http.request(request)
//         end

interface CommandMapValue {
  [key: string]: string | any; // Allows string keys with string or other values
}

// export const commandMapArray: Record<string, CommandMapValue | string> = {
//   create: {
//     node: {
//       fetch: `
//       const BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote/random";
//       async function createQuote(quoteData) {
//         const response = await fetch(BASE_URL, {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(quoteData),
//         });
//         const data = await response.json();
//         console.log(data);
//       }`,

//       axios: `async function createQuote(quoteData) {
//         const response = await axios.post(BASE_URL, quoteData);
//         console.log(response.data);
//       }`,

//       request: `function createQuote(quoteData) {
//         request.post(BASE_URL, { json: quoteData }, (error, response, body) => {
//           console.log(body);
//         });
//       }`,

//       unirest: `function createQuote(quoteData) {
//         unirest.post(BASE_URL).send(quoteData).end((response) => console.log(response.body));
//       }`,
//     },
//     Shell: {
//       curl: `
//         createQuote() {
//           curl -X POST "$BASE_URL" \\
//           -H "Content-Type: application/json" \\
//           -d '{"quote":"Life is beautiful", "author":"John Doe", "category":"Inspiration"}'
//         }
//       `,
//       httpie: `
//         createQuote() {
//           http POST "$BASE_URL" quote="Life is beautiful" author="John Doe" category="Inspiration"
//         }
//       `,
//     },
//     Python: `
//       def create_quote(quote_data):
//         response = requests.post(BASE_URL, json=quote_data, headers={"Content-Type": "application/json"})
//         print(response.json())
//     `,
//     Ruby: `
//       def create_quote(quote_data)
//         uri = URI(BASE_URL)
//         request = Net::HTTP::Post.new(uri, 'Content-Type' => 'application/json')
//         request.body = quote_data.to_json
//         response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
//           http.request(request)
//         end
//         puts JSON.parse(response.body)
//       end
//     `,
//     PHP: `
//       function createQuote($quoteData) {
//         global $BASE_URL;
//         // Assuming sendRequest handles method, url, and data serialization
//         return sendRequest($BASE_URL, "POST", $quoteData);
//       }
//     `,
//     Java: {
//       Unirest: `
//         import com.mashape.unirest.http.HttpResponse;
//         import com.mashape.unirest.http.JsonNode;
//         import com.mashape.unirest.http.Unirest;

//         public static void createQuote(String quote, String author, String category) throws Exception {
//           HttpResponse<JsonNode> response = Unirest.post(BASE_URL)
//             .header("Content-Type", "application/json")
//             .body("{\\"quote\\":\\"" + quote + "\\", \\"author\\":\\"" + author + "\\", \\"category\\":\\"" + category + "\\"}")
//             .asJson();
//           System.out.println(response.getBody());
//         }
//       `,
//       AsyncHttp: `
//         import java.net.URI;
//         import java.net.http.HttpClient;
//         import java.net.http.HttpRequest;
//         import java.net.http.HttpResponse;
//         import java.util.concurrent.CompletableFuture;
//         import java.util.concurrent.ExecutionException;

//         public static void createQuoteAsync(String quote, String author, String category) throws ExecutionException, InterruptedException {
//           HttpRequest request = HttpRequest.newBuilder()
//             .uri(URI.create(BASE_URL))
//             .header("Content-Type", "application/json")
//             .POST(HttpRequest.BodyPublishers.ofString("{\\"quote\\":\\"" + quote + "\\", \\"author\\":\\"" + author + "\\", \\"category\\":\\"" + category + "\\"}"))
//             .build();
//           HttpClient client = HttpClient.newHttpClient();
//           CompletableFuture<HttpResponse<String>> responseFuture = client.sendAsync(request, HttpResponse.BodyHandlers.ofString());
//           HttpResponse<String> response = responseFuture.get(); // Await the result
//           System.out.println(response.body());
//         }
//       `,
//       HttpClient: `
//         import java.io.IOException;
//         import java.net.URI;
//         import java.net.http.HttpClient;
//         import java.net.http.HttpRequest;
//         import java.net.http.HttpResponse;

//         public static void createQuoteHttpClient(String quote, String author, String category) throws IOException, InterruptedException {
//           HttpClient client = HttpClient.newHttpClient();
//           HttpRequest request = HttpRequest.newBuilder()
//             .uri(URI.create(BASE_URL))
//             .header("Content-Type", "application/json")
//             .POST(HttpRequest.BodyPublishers.ofString("{\\"quote\\":\\"" + quote + "\\", \\"author\\":\\"" + author + "\\", \\"category\\":\\"" + category + "\\"}"))
//             .build();
//           HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
//           System.out.println(response.body());
//         }
//       `,
//       OkHttp: `
//         import okhttp3.*;
//         import java.io.IOException;

//         public static void createQuoteOkHttp(String quote, String author, String category) throws IOException {
//           OkHttpClient client = new OkHttpClient();
//           MediaType mediaType = MediaType.parse("application/json");
//           String json = "{\\"quote\\":\\"" + quote + "\\", \\"author\\":\\"" + author + "\\", \\"category\\":\\"" + category + "\\"}";
//           RequestBody body = RequestBody.create(mediaType, json);
//           Request request = new Request.Builder()
//             .url(BASE_URL)
//             .post(body)
//             .build();
//           try (Response response = client.newCall(request).execute()) {
//             if (!response.isSuccessful()) throw new IOException("Unexpected code " + response);
//             System.out.println(response.body().string());
//           }
//         }
//       `,
//     },
//     CSharp: {
//       RestSharp: `
//         using RestSharp;

//         public static void CreateQuoteRestSharp(string quote, string author, string category) {
//           var client = new RestClient(BASE_URL);
//           var request = new RestRequest("", Method.Post); // Assuming BASE_URL is the collection endpoint
//           request.AddHeader("Content-Type", "application/json"); // Redundant with AddJsonBody but good practice
//           request.AddJsonBody(new { quote, author, category });
//           var response = client.Execute(request);
//           Console.WriteLine(response.Content);
//         }
//       `,
//       HttpClient: `
//         using System.Net.Http;
//         using System.Net.Http.Headers;
//         using System.Text;
//         using System.Threading.Tasks;
//         using Newtonsoft.Json; // Assuming Newtonsoft.Json is used for serialization

//         public static async Task CreateQuoteHttpClientAsync(string quote, string author, string category) {
//           using var client = new HttpClient();
//           client.DefaultRequestHeaders.Accept.Clear();
//           client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
//           var content = new StringContent(JsonConvert.SerializeObject(new { quote, author, category }), Encoding.UTF8, "application/json");
//           var response = await client.PostAsync(BASE_URL, content);
//           response.EnsureSuccessStatusCode(); // Throw on error status code
//           var responseString = await response.Content.ReadAsStringAsync();
//           Console.WriteLine(responseString);
//         }
//       `,
//     },
//     JavaScript: {
//       xhr: `
//         function xhrCreateQuote(quoteData) {
//           const xhr = new XMLHttpRequest();
//           xhr.open("POST", BASE_URL);
//           xhr.setRequestHeader("Content-Type", "application/json");
//           xhr.onload = function () {
//             if (xhr.status >= 200 && xhr.status < 300) {
//               console.log(JSON.parse(xhr.responseText));
//             } else {
//               console.error(\`Request failed. Returned status of \${xhr.status}\`);
//             }
//           };
//           xhr.onerror = function () {
//             console.error('There was a network error.');
//           };
//           xhr.send(JSON.stringify(quoteData));
//         }
//       `,
//       axios: `
//         async function axiosCreateQuote(quoteData) {
//           try {
//             const response = await axios.post(BASE_URL, quoteData);
//             console.log(response.data);
//           } catch (error) {
//             console.error(error);
//           }
//         }
//       `,
//       fetch: `
//         async function fetchCreateQuote(quoteData) {
//           try {
//             const response = await fetch(BASE_URL, {
//               method: "POST",
//               headers: { "Content-Type": "application/json" },
//               body: JSON.stringify(quoteData),
//             });
//             if (!response.ok) {
//               throw new Error(\`HTTP error! status: \${response.status}\`);
//             }
//             const data = await response.json();
//             console.log(data);
//           } catch (error) {
//             console.error("There was a problem with the fetch operation:", error);
//           }
//         }
//       `,
//       jQuery: `
//         function jqueryCreateQuote(quoteData) {
//           $.ajax({
//             url: BASE_URL,
//             method: "POST",
//             contentType: "application/json",
//             data: JSON.stringify(quoteData),
//             success: function (data) {
//               console.log(data);
//             },
//             error: function (xhr, status, error) {
//               console.error("Error:", status, error, xhr.responseText);
//             },
//           });
//         }
//       `,
//     },
//     Kotlin: `
//       import okhttp3.*
//       import org.json.JSONObject
//       import java.io.IOException

//       // val BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote/random" // Example placeholder, usually base URL is without random/id
//       // val client = OkHttpClient() // Client instance should be shared

//       fun createQuote(quote: String, author: String, category: String) {
//         val json = JSONObject()
//           .put("quote", quote)
//           .put("author", author)
//           .put("category", category)
//           .toString()
//         val requestBody = RequestBody.create(MediaType.get("application/json"), json)
//         val request = Request.Builder()
//           .url(BASE_URL) // Use the base URL for collection
//           .post(requestBody)
//           .build()

//         client.newCall(request).execute().use { response ->
//           if (!response.isSuccessful) throw IOException("Unexpected code " + response)
//           println(response.body?.string())
//         }
//       }
//     `,
//   },
//   getAll: {
//     node: {
//       fetch: `const BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote/random";
//       async function getAllQuotes() {
//         const response = await fetch(BASE_URL, {
//           method: "GET",
//         });
//         const data = await response.json();
//         console.log(data);
//       }`,
//       axios: `async function getAllQuotes() {
//         const response = await axios.get(BASE_URL);
//         console.log(response.data);
//       }`,
//       request: `function getAllQuotes() {
//         request.get(BASE_URL, (error, response, body) => {
//           console.log(body);
//         });
//       }`,
//       unirest: `function getAllQuotes() {
//         unirest.get(BASE_URL).end((response) => console.log(response.body));
//       }`,
//     },
//     Shell: {
//       curl: `
//         getAllQuotes() {
//           curl -X GET "$BASE_URL"
//         }
//       `,
//       httpie: `
//         getAllQuotes() {
//           http GET "$BASE_URL"
//         }
//       `,
//     },
//     Python: `
//       def get_all_quotes():
//         response = requests.get(BASE_URL)
//         print(response.json())
//     `,
//     Ruby: `
//       def get_all_quotes
//         uri = URI(BASE_URL)
//         response = Net::HTTP.get(uri)
//         puts JSON.parse(response)
//       end
//     `,
//     PHP: `
//       function getAllQuotes() {
//         global $BASE_URL;
//         return sendRequest($BASE_URL, "GET");
//       }
//     `,
//     Java: {
//       Unirest: `
//         public static void getAllQuotes() throws Exception {
//           HttpResponse<JsonNode> response = Unirest.get(BASE_URL).asJson();
//           System.out.println(response.getBody());
//         }
//       `,
//       AsyncHttp: `
//         public static void getAllQuotesAsync() throws ExecutionException, InterruptedException {
//           HttpRequest request = HttpRequest.newBuilder()
//             .uri(URI.create(BASE_URL))
//             .GET()
//             .build();
//           HttpClient client = HttpClient.newHttpClient();
//           CompletableFuture<HttpResponse<String>> responseFuture = client.sendAsync(request, HttpResponse.BodyHandlers.ofString());
//           HttpResponse<String> response = responseFuture.get();
//           System.out.println(response.body());
//         }
//       `,
//       HttpClient: `
//         public static void getAllQuotesHttpClient() throws IOException, InterruptedException {
//           HttpClient client = HttpClient.newHttpClient();
//           HttpRequest request = HttpRequest.newBuilder()
//             .uri(URI.create(BASE_URL))
//             .GET()
//             .build();
//           HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
//           System.out.println(response.body());
//         }
//       `,
//       OkHttp: `
//         import okhttp3.*;
//         import java.io.IOException;

//         public static void getAllQuotesOkHttp() throws IOException {
//           OkHttpClient client = new OkHttpClient();
//           Request request = new Request.Builder()
//             .url(BASE_URL)
//             .get()
//             .build();
//           try (Response response = client.newCall(request).execute()) {
//              if (!response.isSuccessful()) throw new IOException("Unexpected code " + response);
//             System.out.println(response.body().string());
//           }
//         }
//       `,
//     },
//     CSharp: {
//       RestSharp: `
//         public static void GetAllQuotesRestSharp() {
//           var client = new RestClient(BASE_URL);
//           var request = new RestRequest("", Method.Get); // Use empty resource or appropriate base path
//           var response = client.Execute(request);
//           Console.WriteLine(response.Content);
//         }
//       `,
//       HttpClient: `
//         public static async Task GetAllQuotesHttpClientAsync() {
//           using var client = new HttpClient();
//           var response = await client.GetAsync(BASE_URL);
//           response.EnsureSuccessStatusCode();
//           var responseString = await response.Content.ReadAsStringAsync();
//           Console.WriteLine(responseString);
//         }
//       `,
//     },
//     JavaScript: {
//       xhr: `
//         function xhrGetAllQuotes() {
//           const xhr = new XMLHttpRequest();
//           xhr.open("GET", BASE_URL);
//           xhr.onload = function () {
//             if (xhr.status >= 200 && xhr.status < 300) {
//               console.log(JSON.parse(xhr.responseText));
//             } else {
//               console.error(\`Request failed. Returned status of \${xhr.status}\`);
//             }
//           };
//           xhr.onerror = function () {
//             console.error('There was a network error.');
//           };
//           xhr.send();
//         }
//       `,
//       axios: `
//         async function axiosGetAllQuotes() {
//           try {
//             const response = await axios.get(BASE_URL);
//             console.log(response.data);
//           } catch (error) {
//             console.error(error);
//           }
//         }
//       `,
//       fetch: `
//         async function fetchGetAllQuotes() {
//           try {
//             const response = await fetch(BASE_URL);
//              if (!response.ok) {
//               throw new Error(\`HTTP error! status: \${response.status}\`);
//             }
//             const data = await response.json();
//             console.log(data);
//           } catch (error) {
//             console.error("There was a problem with the fetch operation:", error);
//           }
//         }
//       `,
//       jQuery: `
//         function jqueryGetAllQuotes() {
//           $.ajax({
//             url: BASE_URL,
//             method: "GET",
//             success: function (data) {
//               console.log(data);
//             },
//             error: function (xhr, status, error) {
//               console.error("Error:", status, error, xhr.responseText);
//             },
//           });
//         }
//       `,
//     },
//     Kotlin: `
//       import okhttp3.*
//       import java.io.IOException

//       fun getAllQuotes() {
//         val request = Request.Builder()
//           .url(BASE_URL)
//           .get()
//           .build()

//         client.newCall(request).execute().use { response ->
//            if (!response.isSuccessful) throw IOException("Unexpected code " + response)
//           println(response.body?.string())
//         }
//       }
//     `,
//   },
//   getById: {
//     node: {
//       fetch: `async function getQuoteById(id) {
//     try {
//       const response = await fetch(\`\${BASE_URL}/\${id}\`, {
//         method: "GET",
//       });
//       if (!response.ok) {
//         const errorText = await response.text();
//         throw new Error(\`HTTP error! status: \${response.status}, body: \${errorText}\`);
//       }
//       const data = await response.json();
//       console.log("Quote found:", data);
//       return data; // Best practice: Return the data
//     } catch (error) {
//       console.error("Error fetching quote:", error);
//       throw error; // Re-throw to allow caller to handle it
//     }
//   }`,
//       axios: `async function getQuoteById(id) {
//     try {
//       const response = await axios.get(\`\${BASE_URL}/\${id}\`);
//       console.log("Quote found:", response.data);
//       return response.data;
//     } catch (error) {
//       if (error.response) {
//         console.error("Error fetching quote:", error.response.status, error.response.data);
//       } else if (error.request) {
//         console.error("Error fetching quote: No response received", error.request);
//       } else {
//         console.error("Error fetching quote:", error.message);
//       }
//       throw error; // Re-throw to allow caller to handle it
//     }
//   }`,
//       request: `function getQuoteById(id) {
//     request.get(\`\${BASE_URL}/\${id}\`, (error, response, body) => {
//       if (error) {
//         console.error("Error fetching quote:", error);
//       } else if (response.statusCode >= 200 && response.statusCode < 300) {
//         console.log("Quote found:", body);
//       } else {
//         console.error(\`Error fetching quote: Status code \${response.statusCode}\`, body);
//       }
//     });
//   }`,
//       unirest: `function getQuoteById(id) {
//     unirest.get(\`\${BASE_URL}/\${id}\`).end((response) => {
//       if (response.error) {
//         console.error("Error fetching quote:", response.error);
//       } else if (response.status >= 200 && response.status < 300) {
//         console.log("Quote found:", response.body);
//       } else {
//         console.error(\`Error fetching quote: Status code \${response.status}\`, response.body);
//       }
//     });
//   }`,
//     },

//     Shell: {
//       curl: `
//         getQuoteById() {
//           curl -X GET "$BASE_URL/$1"
//         }
//       `,
//       httpie: `
//         getQuoteById() {
//           http GET "$BASE_URL/$1"
//         }
//       `,
//     },
//     Python: `
//       def get_quote_by_id(quote_id):
//         response = requests.get(f"{BASE_URL}/{quote_id}")
//         print(response.json())
//     `,
//     Ruby: `
//       def get_quote_by_id(quote_id)
//         uri = URI("#{BASE_URL}/#{quote_id}")
//         response = Net::HTTP.get(uri)
//         puts JSON.parse(response)
//       end
//     `,
//     PHP: `
//       function getQuoteById($id) {
//         global $BASE_URL;
//         return sendRequest("$BASE_URL/$id", "GET");
//         }
//     `,
//     Java: {
//       Unirest: `
//         public static void getQuoteById(String id) throws Exception {
//           HttpResponse<JsonNode> response = Unirest.get(BASE_URL + "/" + id).asJson();
//           System.out.println(response.getBody());
//         }
//       `,
//       AsyncHttp: `
//         public static void getQuoteByIdAsync(String id) throws ExecutionException, InterruptedException {
//           HttpRequest request = HttpRequest.newBuilder()
//             .uri(URI.create(BASE_URL + "/" + id))
//             .GET()
//             .build();
//           HttpClient client = HttpClient.newHttpClient();
//           CompletableFuture<HttpResponse<String>> responseFuture = client.sendAsync(request, HttpResponse.BodyHandlers.ofString());
//           HttpResponse<String> response = responseFuture.get();
//           System.out.println(response.body());
//         }
//       `,
//       HttpClient: `
//         public static void getQuoteByIdHttpClient(String id) throws IOException, InterruptedException {
//           HttpClient client = HttpClient.newHttpClient();
//           HttpRequest request = HttpRequest.newBuilder()
//             .uri(URI.create(BASE_URL + "/" + id))
//             .GET()
//             .build();
//           HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
//           System.out.println(response.body());
//         }
//       `,
//       OkHttp: `
//         import okhttp3.*;
//         import java.io.IOException;

//         public static void getQuoteByIdOkHttp(String id) throws IOException {
//           OkHttpClient client = new OkHttpClient();
//           Request request = new Request.Builder()
//             .url(BASE_URL + "/" + id)
//             .get()
//             .build();
//           try (Response response = client.newCall(request).execute()) {
//              if (!response.isSuccessful()) throw new IOException("Unexpected code " + response);
//             System.out.println(response.body().string());
//           }
//         }
//       `,
//     },
//     CSharp: {
//       RestSharp: `
//         public static void GetQuoteByIdRestSharp(string id) {
//           var client = new RestClient(BASE_URL); // Or BASE_URL + "/" + id
//           var request = new RestRequest("{id}", Method.Get);
//           request.AddUrlSegment("id", id); // If using {id} placeholder
//           var response = client.Execute(request);
//           Console.WriteLine(response.Content);
//         }
//       `,
//       HttpClient: `
//         public static async Task GetQuoteByIdHttpClientAsync(string id) {
//           using var client = new HttpClient();
//           var response = await client.GetAsync(BASE_URL + "/" + id);
//           response.EnsureSuccessStatusCode();
//           var responseString = await response.Content.ReadAsStringAsync();
//           Console.WriteLine(responseString);
//         }
//       `,
//     },
//     JavaScript: {
//       xhr: `
//         function xhrGetQuoteById(id) {
//           const xhr = new XMLHttpRequest();
//           xhr.open("GET", \`\${BASE_URL}/\${id}\`);
//           xhr.onload = function () {
//             if (xhr.status >= 200 && xhr.status < 300) {
//               console.log(JSON.parse(xhr.responseText));
//             } else {
//               console.error(\`Request failed. Returned status of \${xhr.status}\`);
//             }
//           };
//           xhr.onerror = function () {
//             console.error('There was a network error.');
//           };
//           xhr.send();
//         }
//       `,
//       axios: `
//         async function axiosGetQuoteById(id) {
//           try {
//             const response = await axios.get(\`\${BASE_URL}/\${id}\`);
//             console.log(response.data);
//           } catch (error) {
//             console.error(error);
//           }
//         }
//       `,
//       fetch: `
//         async function fetchGetQuoteById(id) {
//           try {
//             const response = await fetch(\`\${BASE_URL}/\${id}\`);
//              if (!response.ok) {
//               throw new Error(\`HTTP error! status: \${response.status}\`);
//             }
//             const data = await response.json();
//             console.log(data);
//           } catch (error) {
//             console.error("There was a problem with the fetch operation:", error);
//           }
//         }
//       `,
//       jQuery: `
//         function jqueryGetQuoteById(id) {
//           $.ajax({
//             url: \`\${BASE_URL}/\${id}\`,
//             method: "GET",
//             success: function (data) {
//               console.log(data);
//             },
//             error: function (xhr, status, error) {
//                console.error("Error:", status, error, xhr.responseText);
//             },
//           });
//         }
//       `,
//     },
//     Kotlin: `
//       import okhttp3.*
//       import java.io.IOException

//       fun getQuoteById(id: String) {
//         val request = Request.Builder()
//           .url("$BASE_URL/$id")
//           .get()
//           .build()

//         client.newCall(request).execute().use { response ->
//           if (!response.isSuccessful) throw IOException("Unexpected code " + response)
//           println(response.body?.string())
//         }
//       }
//     `,
//   },
//   update: {
//     node: {
//       fetch: `async function updateQuote(id, updatedQuoteData) {
//     try {
//       const response = await fetch(\`\${BASE_URL}/\${id}\`, {
//         method: "PUT", // Or PATCH if API supports partial updates
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(updatedQuoteData),
//       });
//       if (!response.ok) {
//         // Include response text in error for more details
//         const errorText = await response.text();
//         throw new Error(\`HTTP error! status: \${response.status}, body: \${errorText}\`);
//       }
//       const data = await response.json();
//       console.log("Quote updated successfully:", data); // API should return updated object
//     } catch (error) {
//       console.error("Error updating quote:", error);
//     }
//   }`,
//       axios: `async function updateQuote(id, updatedQuoteData) {
//     try {
//       const response = await axios.put(\`\${BASE_URL}/\${id}\`, updatedQuoteData); // Or axios.patch
//       console.log("Quote updated successfully:", response.data);
//     } catch (error) {
//       if (error.response) {
//         // The request was made and the server responded with a status code
//         // that falls out of the range of 2xx
//         console.error("Error updating quote:", error.response.status, error.response.data);
//       } else if (error.request) {
//         // The request was made but no response was received
//         console.error("Error updating quote: No response received", error.request);
//       } else {
//         // Something happened in setting up the request that triggered an Error
//         console.error("Error updating quote:", error.message);
//       }
//     }
//   }`,
//       request: `function updateQuote(id, updatedQuoteData) {
//     request.put(\`\${BASE_URL}/\${id}\`, { json: updatedQuoteData }, (error, response, body) => { // Or request.patch
//       if (error) {
//         console.error("Error updating quote:", error);
//       } else if (response.statusCode >= 200 && response.statusCode < 300) {
//         console.log("Quote updated successfully:", body);
//       } else {
//         console.error(\`Error updating quote: Status code \${response.statusCode}\`, body);
//       }
//     });
//   }`,
//       unirest: `function updateQuote(id, updatedQuoteData) {
//     unirest.put(\`\${BASE_URL}/\${id}\`).send(updatedQuoteData).end((response) => {
//       if (response.error) {
//         console.error("Error updating quote:", response.error);
//       } else if (response.status >= 200 && response.status < 300) {
//         console.log("Quote updated successfully:", response.body);
//       } else {
//         console.error(\`Error updating quote: Status code \${response.status}\`, response.body);
//       }
//     });
//   }`,
//     },

//     Shell: {
//       curl: `
//         updateQuote() {
//           # Usage: updateQuote <id> '{"quote":"new text", "author":"new author", "category":"new category"}'
//           curl -X PUT "$BASE_URL/$1" \\
//           -H "Content-Type: application/json" \\
//           -d "$2"
//         }
//       `,
//       httpie: `
//         updateQuote() {
//           # Usage: updateQuote <id> quote="new text" author="new author"
//           http PUT "$BASE_URL/$1" $@
//         }
//       `,
//     },
//     Python: `
//       def update_quote(quote_id, updated_data):
//         response = requests.put(f"{BASE_URL}/{quote_id}", json=updated_data, headers={"Content-Type": "application/json"}) # Or requests.patch
//         print(response.json()) # API might return the updated object
//     `,
//     Ruby: `
//       def update_quote(quote_id, updated_data)
//         uri = URI("#{BASE_URL}/#{quote_id}")
//         request = Net::HTTP::Put.new(uri, 'Content-Type' => 'application/json') # Or Net::HTTP::Patch
//         request.body = updated_data.to_json
//         response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: uri.scheme == 'https') do |http|
//           http.request(request)
//         end
//         puts JSON.parse(response.body) # API might return the updated object
//       end
//     `,
//     PHP: `
//       function updateQuote($id, $updatedData) {
//         global $BASE_URL;
//         // Assuming sendRequest handles method, url, and data serialization (e.g., to JSON)
//         return sendRequest("$BASE_URL/$id", "PUT", $updatedData); // Or "PATCH"
//       }
//     `,
//     Java: {
//       Unirest: `
//         public static void updateQuote(String id, String quote, String author, String category) throws Exception {
//           HttpResponse<JsonNode> response = Unirest.put(BASE_URL + "/" + id) // Or Unirest.patch
//             .header("Content-Type", "application/json")
//             .body("{\\"quote\\":\\"" + quote + "\\", \\"author\\":\\"" + author + "\\", \\"category\\":\\"" + category + "\\"}")
//             .asJson();
//           System.out.println(response.getBody()); // API might return the updated object
//         }
//       `,
//       AsyncHttp: `
//         public static void updateQuoteAsync(String id, String quote, String author, String category) throws ExecutionException, InterruptedException {
//           HttpRequest request = HttpRequest.newBuilder()
//             .uri(URI.create(BASE_URL + "/" + id))
//             .header("Content-Type", "application/json")
//             .PUT(HttpRequest.BodyPublishers.ofString("{\\"quote\\":\\"" + quote + "\\", \\"author\\":\\"" + author + "\\", \\"category\\":\\"" + category + "\\"}")) // Or PATCH
//             .build();
//           HttpClient client = HttpClient.newHttpClient();
//           CompletableFuture<HttpResponse<String>> responseFuture = client.sendAsync(request, HttpResponse.BodyHandlers.ofString());
//           HttpResponse<String> response = responseFuture.get();
//           System.out.println(response.body()); // API might return the updated object
//         }
//       `,
//       HttpClient: `
//         public static void updateQuoteHttpClient(String id, String quote, String author, String category) throws IOException, InterruptedException {
//           HttpClient client = HttpClient.newHttpClient();
//           HttpRequest request = HttpRequest.newBuilder()
//             .uri(URI.create(BASE_URL + "/" + id))
//             .header("Content-Type", "application/json")
//             .PUT(HttpRequest.BodyPublishers.ofString("{\\"quote\\":\\"" + quote + "\\", \\"author\\":\\"" + author + "\\", \\"category\\":\\"" + category + "\\"}")) // Or PATCH
//             .build();
//           HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
//           System.out.println(response.body()); // API might return the updated object
//         }
//       `,
//       OkHttp: `
//         import okhttp3.*;
//         import java.io.IOException;

//         public static void updateQuoteOkHttp(String id, String quote, String author, String category) throws IOException {
//           OkHttpClient client = new OkHttpClient();
//           MediaType mediaType = MediaType.parse("application/json");
//           String json = "{\\"quote\\":\\"" + quote + "\\", \\"author\\":\\"" + author + "\\", \\"category\\":\\"" + category + "\\"}";
//           RequestBody body = RequestBody.create(mediaType, json);
//           Request request = new Request.Builder()
//             .url(BASE_URL + "/" + id)
//             .put(body) // Or .patch(body)
//             .build();
//           try (Response response = client.newCall(request).execute()) {
//              if (!response.isSuccessful()) throw new IOException("Unexpected code " + response);
//             System.out.println(response.body().string()); // API might return the updated object
//           }
//         }
//       `,
//     },
//     CSharp: {
//       RestSharp: `
//         using RestSharp;

//         public static void UpdateQuoteRestSharp(string id, string quote, string author, string category) {
//           var client = new RestClient(BASE_URL);
//           var request = new RestRequest("{id}", Method.Put); // Or Method.Patch
//           request.AddUrlSegment("id", id);
//           request.AddHeader("Content-Type", "application/json");
//           request.AddJsonBody(new { quote, author, category });
//           var response = client.Execute(request);
//           Console.WriteLine(response.Content); // API might return the updated object
//         }
//       `,
//       HttpClient: `
//         using System.Net.Http;
//         using System.Net.Http.Headers;
//         using System.Text;
//         using System.Threading.Tasks;
//         using Newtonsoft.Json;

//         public static async Task UpdateQuoteHttpClientAsync(string id, string quote, string author, string category) {
//           using var client = new HttpClient();
//           client.DefaultRequestHeaders.Accept.Clear();
//           client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
//           var content = new StringContent(JsonConvert.SerializeObject(new { quote, author, category }), Encoding.UTF8, "application/json");
//           var response = await client.PutAsync(BASE_URL + "/" + id, content); // Or client.PatchAsync (requires extension or custom method for older versions)
//           response.EnsureSuccessStatusCode();
//           var responseString = await response.Content.ReadAsStringAsync();
//           Console.WriteLine(responseString); // API might return the updated object
//         }
//       `,
//     },
//     JavaScript: {
//       xhr: `
//         function xhrUpdateQuote(id, updatedQuoteData) {
//           const xhr = new XMLHttpRequest();
//           xhr.open("PUT", \`\${BASE_URL}/\${id}\`); // Or PATCH
//           xhr.setRequestHeader("Content-Type", "application/json");
//           xhr.onload = function () {
//             if (xhr.status >= 200 && xhr.status < 300) {
//               console.log(JSON.parse(xhr.responseText)); // API might return the updated object
//             } else {
//               console.error(\`Request failed. Returned status of \${xhr.status}\`);
//             }
//           };
//           xhr.onerror = function () {
//             console.error('There was a network error.');
//           };
//           xhr.send(JSON.stringify(updatedQuoteData));
//         }
//       `,
//       axios: `
//         async function axiosUpdateQuote(id, updatedQuoteData) {
//           try {
//             const response = await axios.put(\`\${BASE_URL}/\${id}\`, updatedQuoteData); // Or axios.patch
//             console.log("Quote updated successfully:", response.data); // API should return the updated object
//           } catch (error) {
//             if (error.response) {
//               // The request was made and the server responded with a status code
//               // that falls out of the range of 2xx
//               console.error("Error updating quote:", error.response.status, error.response.data);
//             } else if (error.request) {
//               // The request was made but no response was received
//               // \`error.request\` is an instance of XMLHttpRequest in the browser and an instance of
//               // http.ClientRequest in node.js
//               console.error("Error updating quote: No response received", error.request);
//             } else {
//               // Something happened in setting up the request that triggered an Error
//               console.error("Error updating quote:", error.message);
//             }
//           }
//         }
//       `,
//       fetch: `
//         async function fetchUpdateQuote(id, updatedQuoteData) {
//           try {
//             const response = await fetch(\`\${BASE_URL}/\${id}\`, {
//               method: "PUT", // Or PATCH
//               headers: { "Content-Type": "application/json" },
//               body: JSON.stringify(updatedQuoteData),
//             });
//             if (!response.ok) {
//               // Include response text in error message for more details
//               const errorText = await response.text();
//               throw new Error(\`HTTP error! status: \${response.status}, body: \${errorText}\`);
//             }
//             const data = await response.json();
//             console.log("Quote updated successfully:", data); // API should return the updated object
//           } catch (error) {
//             console.error("There was a problem with the fetch operation:", error);
//           }
//         }
//       `,
//       jQuery: `
//         function jqueryUpdateQuote(id, updatedQuoteData) {
//           $.ajax({
//             url: \`\${BASE_URL}/\${id}\`,
//             method: "PUT", // Or "PATCH"
//             contentType: "application/json",
//             data: JSON.stringify(updatedQuoteData),
//             success: function (data) {
//               console.log(data); // API might return the updated object
//             },
//             error: function (xhr, status, error) {
//                console.error("Error:", status, error, xhr.responseText);
//             },
//           });
//         }
//       `,
//     },
//     Kotlin: `
//       import okhttp3.*
//       import org.json.JSONObject
//       import java.io.IOException

//       fun updateQuote(id: String, quote: String, author: String, category: String) {
//         val json = JSONObject()
//           .put("quote", quote)
//           .put("author", author)
//           .put("category", category)
//           .toString()
//         val requestBody = RequestBody.create(MediaType.get("application/json"), json)
//         val request = Request.Builder()
//           .url("$BASE_URL/$id")
//           .put(requestBody) // Or .patch(requestBody)
//           .build()

//         client.newCall(request).execute().use { response ->
//           if (!response.isSuccessful) throw IOException("Unexpected code " + response)
//           println(response.body?.string()) // API might return the updated object
//         }
//       }
//     `,
//   },
//   delete: {
//     node: {
//       fetch: `async function deleteQuote(id) {
//     try {
//       const response = await fetch(\`\${BASE_URL}/\${id}\`, {
//         method: "DELETE",
//       });
//       if (!response.ok) {
//         throw new Error(\`HTTP error! status: \${response.status}\`);
//       }
//       // Handle potential empty response body for successful deletion (e.g., 204 No Content)
//       if (response.status !== 204) {
//         const data = await response.json();
//         console.log("Delete successful:", data); // API might return confirmation
//       } else {
//         console.log("Quote deleted successfully (no content returned).");
//       }
//     } catch (error) {
//       console.error("Error deleting quote:", error);
//     }
//   }`,
//       axios: `async function deleteQuote(id) {
//     try {
//       const response = await axios.delete(\`\${BASE_URL}/\${id}\`);
//       if (response.status === 200 || response.status === 204) {
//         console.log("Quote deleted successfully.");
//         if (response.data) {
//           console.log("Response:", response.data); // Log any data returned by the API
//         }
//       } else {
//         console.error(\`Failed to delete quote. Status: \${response.status}\`, response.data);
//       }
//     } catch (error) {
//       console.error("Error deleting quote:", error);
//     }
//   }`,
//       request: `function deleteQuote(id) {
//     request.delete(\`\${BASE_URL}/\${id}\`, (error, response, body) => {
//       if (!error && (response && (response.statusCode === 200 || response.statusCode === 204))) {
//         console.log("Quote deleted successfully.");
//         if (body) {
//           console.log("Response:", body); // Log any data returned by the API
//         }
//       } else {
//         console.error(\`Failed to delete quote. Error: \${error || (response && response.statusCode)}\`, body);
//       }
//     });
//   }`,
//       unirest: `function deleteQuote(id) {
//     unirest.delete(\`\${BASE_URL}/\${id}\`).end((response) => {
//       if (response.status === 200 || response.status === 204) {
//         console.log("Quote deleted successfully.");
//         if (response.body) {
//           console.log("Response:", response.body); // Log any data returned by the API
//         }
//       } else {
//         console.error(\`Failed to delete quote. Status: \${response.status}\`, response.body);
//       }
//     });
//   }`,
//     },
//     Shell: {
//       curl: `
//         deleteQuote() {
//           # Usage: deleteQuote <id>
//           curl -X DELETE "$BASE_URL/$1"
//         }
//       `,
//       httpie: `
//         deleteQuote() {
//           # Usage: deleteQuote <id>
//           http DELETE "$BASE_URL/$1"
//         }
//       `,
//     },
//     Python: `
//       def delete_quote(quote_id):
//         response = requests.delete(f"{BASE_URL}/{quote_id}")
//         # Check status code or response body for confirmation
//         print(f"Status Code: {response.status_code}")
//         try:
//           print(response.json())
//         except:
//           print("No JSON response body")
//     `,
//     Ruby: `
//       def delete_quote(quote_id)
//         uri = URI("#{BASE_URL}/#{quote_id}")
//         request = Net::HTTP::Delete.new(uri)
//         response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: uri.scheme == 'https') do |http|
//           http.request(request)
//         end
//         puts "Status Code: #{response.code}"
//         begin
//           puts JSON.parse(response.body)
//         rescue JSON::ParserError
//           puts "No JSON response body"
//         end
//       end
//     `,
//     PHP: `
//       function deleteQuote($id) {
//         global $BASE_URL;
//         return sendRequest("$BASE_URL/$id", "DELETE");
//       }
//     `,
//     Java: {
//       Unirest: `
//         public static void deleteQuote(String id) throws Exception {
//           HttpResponse<JsonNode> response = Unirest.delete(BASE_URL + "/" + id).asJson(); // API might return confirmation or empty body
//           System.out.println(response.getBody());
//         }
//       `,
//       AsyncHttp: `
//         public static void deleteQuoteAsync(String id) throws ExecutionException, InterruptedException {
//           HttpRequest request = HttpRequest.newBuilder()
//             .uri(URI.create(BASE_URL + "/" + id))
//             .DELETE()
//             .build();
//           HttpClient client = HttpClient.newHttpClient();
//           CompletableFuture<HttpResponse<String>> responseFuture = client.sendAsync(request, HttpResponse.BodyHandlers.ofString());
//           HttpResponse<String> response = responseFuture.get();
//           System.out.println("Status Code: " + response.statusCode()); // Check status code
//           System.out.println(response.body()); // API might return confirmation or empty body
//         }
//       `,
//       HttpClient: `
//         public static void deleteQuoteHttpClient(String id) throws IOException, InterruptedException {
//           HttpClient client = HttpClient.newHttpClient();
//           HttpRequest request = HttpRequest.newBuilder()
//             .uri(URI.create(BASE_URL + "/" + id))
//             .DELETE()
//             .build();
//           HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
//           System.out.println("Status Code: " + response.statusCode()); // Check status code
//           System.out.println(response.body()); // API might return confirmation or empty body
//         }
//       `,
//       OkHttp: `
//         import okhttp3.*;
//         import java.io.IOException;

//         public static void deleteQuoteOkHttp(String id) throws IOException {
//           OkHttpClient client = new OkHttpClient();
//           Request request = new Request.Builder()
//             .url(BASE_URL + "/" + id)
//             .delete()
//             .build();
//           try (Response response = client.newCall(request).execute()) {
//              if (!response.isSuccessful()) throw new IOException("Unexpected code " + response); // Or handle 204 No Content
//             System.out.println(response.body().string()); // API might return confirmation or empty body
//           }
//         }
//       `,
//     },
//     CSharp: {
//       RestSharp: `
//         using RestSharp;

//         public static void DeleteQuoteRestSharp(string id) {
//           var client = new RestClient(BASE_URL);
//           var request = new RestRequest("{id}", Method.Delete);
//           request.AddUrlSegment("id", id);
//           var response = client.Execute(request);
//           Console.WriteLine(response.Content); // API might return confirmation or empty body
//           Console.WriteLine($"Status: {response.StatusCode}"); // Check status code
//         }
//       `,
//       HttpClient: `
//         using System.Net.Http;
//         using System.Threading.Tasks;

//         public static async Task DeleteQuoteHttpClientAsync(string id) {
//           using var client = new HttpClient();
//           var response = await client.DeleteAsync(BASE_URL + "/" + id);
//           // response.EnsureSuccessStatusCode(); // Use if 2xx is expected, including 204 No Content
//           Console.WriteLine($"Status: {response.StatusCode}"); // Check status code
//           var responseString = await response.Content.ReadAsStringAsync();
//           Console.WriteLine(responseString); // API might return confirmation or empty body
//         }
//       `,
//     },
//     JavaScript: {
//       xhr: `
//         function xhrDeleteQuote(id) {
//           const xhr = new XMLHttpRequest();
//           xhr.open("DELETE", \`\${BASE_URL}/\${id}\`);
//           xhr.onload = function () {
//             if (xhr.status >= 200 && xhr.status < 300) {
//               // Success, might return empty body or confirmation
//               try {
//                 console.log(JSON.parse(xhr.responseText));
//               } catch {
//                 console.log("Delete successful");
//               }
//             } else {
//               console.error(\`Request failed. Returned status of \${xhr.status}\`);
//             }
//           };
//           xhr.onerror = function () {
//             console.error('There was a network error.');
//           };
//           xhr.send();
//         }
//       `,
//       axios: `
//         async function axiosDeleteQuote(id) {
//           try {
//             const response = await axios.delete(\`\${BASE_URL}/\${id}\`);
//             if (response.status === 200 || response.status === 204) {
//               console.log("Quote deleted successfully.");
//               if (response.data) {
//                 console.log("Response data:", response.data); // Log any data returned by the API
//               }
//             } else {
//               console.error(\`Failed to delete quote. Status: \${response.status}\`, response.data);
//             }
//           } catch (error) {
//             console.error("There was an error deleting the quote:", error);
//           }
//         }
//       `,
//       fetch: `
//         async function fetchDeleteQuote(id) {
//           try {
//             const response = await fetch(\`\${BASE_URL}/\${id}\`, {
//               method: "DELETE",
//             });
//             if (!response.ok) {
//               throw new Error(\`HTTP error! status: \${response.status}\`);
//             }
//             // Check if response body is expected before parsing JSON
//             const text = await response.text();
//             if (text) {
//               try {
//                 console.log(JSON.parse(text)); // API might return confirmation
//               } catch (e) {
//                 console.log("Delete successful (non-JSON response):", text);
//               }
//             } else {
//               console.log("Delete successful (no response body)"); // Likely 204 No Content
//             }
//           } catch (error) {
//             console.error("There was a problem with the fetch operation:", error);
//           }
//         }
//       `,
//       jQuery: `
//         function jqueryDeleteQuote(id) {
//           $.ajax({
//             url: \`\${BASE_URL}/\${id}\`,
//             method: "DELETE",
//             success: function (data) {
//               console.log(data); // API might return confirmation or empty body
//             },
//             error: function (xhr, status, error) {
//                console.error("Error:", status, error, xhr.responseText);
//             },
//           });
//         }
//       `,
//     },
//     Kotlin: `
//       import okhttp3.*
//       import java.io.IOException

//       fun deleteQuote(id: String) {
//         val request = Request.Builder()
//           .url("$BASE_URL/$id")
//           .delete()
//           .build()

//         client.newCall(request).execute().use { response ->
//           if (!response.isSuccessful) throw IOException("Unexpected code " + response) // Or handle 204 No Content
//           println(response.body?.string()) // API might return confirmation or empty body
//         }
//       }
//     `,
//   },
// };

export const commandMapArray: Record<string, CommandMapValue | string> = {
  create: {
    node: {
      fetch:
        'const BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n      async function createQuote(quoteData) {\n        const response = await fetch(BASE_URL, {\n          method: "POST",\n          headers: { "Content-Type": "application/json" },\n          body: JSON.stringify(quoteData),\n        });\n        const data = await response.json();\n        console.log(data);\n      }',
      axios:
        'const BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n      async function createQuote(quoteData) {\n        const response = await axios.post(BASE_URL, quoteData);\n        console.log(response.data);\n      }',
      request:
        'const BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n      function createQuote(quoteData) {\n        request.post(BASE_URL, { json: quoteData }, (error, response, body) => {\n          console.log(body);\n        });\n      }',
      unirest:
        'const BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n      function createQuote(quoteData) {\n        unirest.post(BASE_URL).send(quoteData).end((response) => console.log(response.body));\n      }',
    },
    Shell: {
      curl: 'export BASE_URL="https://api.freeapi.app/api/v1/public/quotes/quote"\n        createQuote() {\n          curl -X POST "$BASE_URL" \\\n          -H "Content-Type: application/json" \\\n          -d \'{"quote":"Life is beautiful", "author":"John Doe", "category":"Inspiration"}\'\n        }\n      ',
      httpie:
        'export BASE_URL="https://api.freeapi.app/api/v1/public/quotes/quote"\n        createQuote() {\n          http POST "$BASE_URL" quote="Life is beautiful" author="John Doe" category="Inspiration"\n        }\n      ',
    },
    Python:
      'BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote"\n      def create_quote(quote_data):\n        response = requests.post(BASE_URL, json=quote_data, headers={"Content-Type": "application/json"})\n        print(response.json())\n    ',
    Ruby: "BASE_URL = \"https://api.freeapi.app/api/v1/public/quotes/quote\"\n      def create_quote(quote_data)\n        uri = URI(BASE_URL)\n        request = Net::HTTP::Post.new(uri, 'Content-Type' => 'application/json')\n        request.body = quote_data.to_json\n        response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|\n          http.request(request)\n        end\n        puts JSON.parse(response.body)\n      end\n    ",
    PHP: ' $BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n      function createQuote($quoteData) {\n        global $BASE_URL;\n        // Assuming sendRequest handles method, url, and data serialization\n        return sendRequest($BASE_URL, "POST", $quoteData);\n      }\n    ',
    Java: {
      Unirest:
        '        import com.mashape.unirest.http.HttpResponse;\n        import com.mashape.unirest.http.JsonNode;\n        import com.mashape.unirest.http.Unirest;\n\n   public static final String BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n\n        public static void createQuote(String quote, String author, String category) throws Exception {\n          HttpResponse<JsonNode> response = Unirest.post(BASE_URL)\n            .header("Content-Type", "application/json")\n            .body("{\\"quote\\":\\"" + quote + "\\", \\"author\\":\\"" + author + "\\", \\"category\\":\\"" + category + "\\"}")\n            .asJson();\n          System.out.println(response.getBody());\n        }\n      ',
      AsyncHttp:
        '        import java.net.URI;\n        import java.net.http.HttpClient;\n        import java.net.http.HttpRequest;\n        import java.net.http.HttpResponse;\n        import java.util.concurrent.CompletableFuture;\n        import java.util.concurrent.ExecutionException;\n\n    public static final String BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n\n        public static void createQuoteAsync(String quote, String author, String category) throws ExecutionException, InterruptedException {\n          HttpRequest request = HttpRequest.newBuilder()\n            .uri(URI.create(BASE_URL))\n            .header("Content-Type", "application/json")\n            .POST(HttpRequest.BodyPublishers.ofString("{\\"quote\\":\\"" + quote + "\\", \\"author\\":\\"" + author + "\\", \\"category\\":\\"" + category + "\\"}"))\n            .build();\n          HttpClient client = HttpClient.newHttpClient();\n          CompletableFuture<HttpResponse<String>> responseFuture = client.sendAsync(request, HttpResponse.BodyHandlers.ofString());\n          HttpResponse<String> response = responseFuture.get(); // Await the result\n          System.out.println(response.body());\n        }\n      ',
      HttpClient:
        '        import java.io.IOException;\n        import java.net.URI;\n        import java.net.http.HttpClient;\n        import java.net.http.HttpRequest;\n        import java.net.http.HttpResponse;\n\n    public static final String BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n\n        public static void createQuoteHttpClient(String quote, String author, String category) throws IOException, InterruptedException {\n          HttpClient client = HttpClient.newHttpClient();\n          HttpRequest request = HttpRequest.newBuilder()\n            .uri(URI.create(BASE_URL))\n            .header("Content-Type", "application/json")\n            .POST(HttpRequest.BodyPublishers.ofString("{\\"quote\\":\\"" + quote + "\\", \\"author\\":\\"" + author + "\\", \\"category\\":\\"" + category + "\\"}"))\n            .build();\n          HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());\n          System.out.println(response.body());\n        }\n      ',
      OkHttp:
        '        import okhttp3.*;\n        import java.io.IOException;\n\n   public static final String BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n\n        public static void createQuoteOkHttp(String quote, String author, String category) throws IOException {\n          OkHttpClient client = new OkHttpClient();\n          MediaType mediaType = MediaType.parse("application/json");\n          String json = "{\\"quote\\":\\"" + quote + "\\", \\"author\\":\\"" + author + "\\", \\"category\\":\\"" + category + "\\"}";\n          RequestBody body = RequestBody.create(mediaType, json);\n          Request request = new Request.Builder()\n            .url(BASE_URL)\n            .post(body)\n            .build();\n          try (Response response = client.newCall(request).execute()) {\n            if (!response.isSuccessful()) throw new IOException("Unexpected code " + response);\n            System.out.println(response.body().string());\n          }\n        }\n      ',
    },
    CSharp: {
      RestSharp:
        '        using RestSharp;\n\n      public static readonly string BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n\n        public static void CreateQuoteRestSharp(string quote, string author, string category) {\n          var client = new RestClient(BASE_URL);\n          var request = new RestRequest("", Method.Post); // Assuming BASE_URL is the collection endpoint\n          request.AddHeader("Content-Type", "application/json"); // Redundant with AddJsonBody but good practice\n          request.AddJsonBody(new { quote, author, category });\n          var response = client.Execute(request);\n          Console.WriteLine(response.Content);\n        }\n      ',
      HttpClient:
        '        using System.Net.Http;\n        using System.Net.Http.Headers;\n        using System.Text;\n        using System.Threading.Tasks;\n        using Newtonsoft.Json; // Assuming Newtonsoft.Json is used for serialization\n\n       public static readonly string BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n\n        public static async Task CreateQuoteHttpClientAsync(string quote, string author, string category) {\n          using var client = new HttpClient();\n          client.DefaultRequestHeaders.Accept.Clear();\n          client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));\n          var content = new StringContent(JsonConvert.SerializeObject(new { quote, author, category }), Encoding.UTF8, "application/json");\n          var response = await client.PostAsync(BASE_URL, content);\n          response.EnsureSuccessStatusCode(); // Throw on error status code\n          var responseString = await response.Content.ReadAsStringAsync();\n          Console.WriteLine(responseString);\n        }\n      ',
    },
    JavaScript: {
      xhr: ' const BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n        function xhrCreateQuote(quoteData) {\n          const xhr = new XMLHttpRequest();\n          xhr.open("POST", BASE_URL);\n          xhr.setRequestHeader("Content-Type", "application/json");\n          xhr.onload = function () {\n            if (xhr.status >= 200 && xhr.status < 300) {\n              console.log(JSON.parse(xhr.responseText));\n            } else {\n              console.error(`Request failed. Returned status of ${xhr.status}`);\n            }\n          };\n          xhr.onerror = function () {\n            console.error(\'There was a network error.\');\n          };\n          xhr.send(JSON.stringify(quoteData));\n        }\n      ',
      axios:
        ' const BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n        async function axiosCreateQuote(quoteData) {\n          try {\n            const response = await axios.post(BASE_URL, quoteData);\n            console.log(response.data);\n          } catch (error) {\n            console.error(error);\n          }\n        }\n      ',
      fetch:
        ' const BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n        async function fetchCreateQuote(quoteData) {\n          try {\n            const response = await fetch(BASE_URL, {\n              method: "POST",\n              headers: { "Content-Type": "application/json" },\n              body: JSON.stringify(quoteData),\n            });\n            if (!response.ok) {\n              throw new Error(`HTTP error! status: ${response.status}`);\n            }\n            const data = await response.json();\n            console.log(data);\n          } catch (error) {\n            console.error("There was a problem with the fetch operation:", error);\n          }\n        }\n      ',
      jQuery:
        ' const BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n        function jqueryCreateQuote(quoteData) {\n          $.ajax({\n            url: BASE_URL,\n            method: "POST",\n            contentType: "application/json",\n            data: JSON.stringify(quoteData),\n            success: function (data) {\n              console.log(data);\n            },\n            error: function (xhr, status, error) {\n              console.error("Error:", status, error, xhr.responseText);\n            },\n          });\n        }\n      ',
    },
    Kotlin:
      '      import okhttp3.*\n      import org.json.JSONObject\n      import java.io.IOException\n\n val BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote"\n      // val client = OkHttpClient() // Client instance should be shared\n\n      fun createQuote(quote: String, author: String, category: String) {\n        val json = JSONObject()\n          .put("quote", quote)\n          .put("author", author)\n          .put("category", category)\n          .toString()\n        val requestBody = RequestBody.create(MediaType.get("application/json"), json)\n        val request = Request.Builder()\n          .url(BASE_URL) // Use the base URL for collection\n          .post(requestBody)\n          .build()\n\n        client.newCall(request).execute().use { response ->\n          if (!response.isSuccessful) throw IOException("Unexpected code " + response)\n          println(response.body?.string())\n        }\n      }\n    ',
  },
  getAll: {
    node: {
      fetch:
        'const BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n      async function getAllQuotes() {\n        const response = await fetch(BASE_URL, {\n          method: "GET",\n        });\n        const data = await response.json();\n        console.log(data);\n      }',
      axios:
        'const BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n      async function getAllQuotes() {\n        const response = await axios.get(BASE_URL);\n        console.log(response.data);\n      }',
      request:
        'const BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n      function getAllQuotes() {\n        request.get(BASE_URL, (error, response, body) => {\n          console.log(body);\n        });\n      }',
      unirest:
        'const BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n      function getAllQuotes() {\n        unirest.get(BASE_URL).end((response) => console.log(response.body));\n      }',
    },
    Shell: {
      curl: 'export BASE_URL="https://api.freeapi.app/api/v1/public/quotes/quote"\n        getAllQuotes() {\n          curl -X GET "$BASE_URL"\n        }\n      ',
      httpie:
        ' export BASE_URL="https://api.freeapi.app/api/v1/public/quotes/quote"\n        getAllQuotes() {\n          http GET "$BASE_URL"\n        }\n      ',
    },
    Python:
      'BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote"\n      def get_all_quotes():\n        response = requests.get(BASE_URL)\n        print(response.json())\n    ',
    Ruby: '      BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote"\n      def get_all_quotes\n        uri = URI(BASE_URL)\n        response = Net::HTTP.get(uri)\n        puts JSON.parse(response)\n      end\n    ',
    PHP: '$BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n      function getAllQuotes() {\n        global $BASE_URL;\n        return sendRequest($BASE_URL, "GET");\n      }\n    ',
    Java: {
      Unirest:
        'public static final String BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n        public static void getAllQuotes() throws Exception {\n          HttpResponse<JsonNode> response = Unirest.get(BASE_URL).asJson();\n          System.out.println(response.getBody());\n        }\n      ',
      AsyncHttp:
        'public static final String BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n        public static void getAllQuotesAsync() throws ExecutionException, InterruptedException {\n          HttpRequest request = HttpRequest.newBuilder()\n            .uri(URI.create(BASE_URL))\n            .GET()\n            .build();\n          HttpClient client = HttpClient.newHttpClient();\n          CompletableFuture<HttpResponse<String>> responseFuture = client.sendAsync(request, HttpResponse.BodyHandlers.ofString());\n          HttpResponse<String> response = responseFuture.get();\n          System.out.println(response.body());\n        }\n      ',
      HttpClient:
        'public static final String BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n        public static void getAllQuotesHttpClient() throws IOException, InterruptedException {\n          HttpClient client = HttpClient.newHttpClient();\n          HttpRequest request = HttpRequest.newBuilder()\n            .uri(URI.create(BASE_URL))\n            .GET()\n            .build();\n          HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());\n          System.out.println(response.body());\n        }\n      ',
      OkHttp:
        '        import okhttp3.*;\n        import java.io.IOException;\n\n                 public static final String BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n\n        public static void getAllQuotesOkHttp() throws IOException {\n          OkHttpClient client = new OkHttpClient();\n          Request request = new Request.Builder()\n            .url(BASE_URL)\n            .get()\n            .build();\n          try (Response response = client.newCall(request).execute()) {\n             if (!response.isSuccessful()) throw new IOException("Unexpected code " + response);\n            System.out.println(response.body().string());\n          }\n        }\n      ',
    },
    CSharp: {
      RestSharp:
        'public static readonly string BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n        public static void GetAllQuotesRestSharp() {\n          var client = new RestClient(BASE_URL);\n          var request = new RestRequest("", Method.Get); // Use empty resource or appropriate base path\n          var response = client.Execute(request);\n          Console.WriteLine(response.Content);\n        }\n      ',
      HttpClient:
        '        using System.Net.Http;\n        using System.Threading.Tasks;\n\n        public static readonly string BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n\n        public static async Task GetAllQuotesHttpClientAsync() {\n          using var client = new HttpClient();\n          var response = await client.GetAsync(BASE_URL);\n          response.EnsureSuccessStatusCode();\n          var responseString = await response.Content.ReadAsStringAsync();\n          Console.WriteLine(responseString);\n        }\n      ',
    },
    JavaScript: {
      xhr: 'const BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n        function xhrGetAllQuotes() {\n          const xhr = new XMLHttpRequest();\n          xhr.open("GET", BASE_URL);\n          xhr.onload = function () {\n            if (xhr.status >= 200 && xhr.status < 300) {\n              console.log(JSON.parse(xhr.responseText));\n            } else {\n              console.error(`Request failed. Returned status of ${xhr.status}`);\n            }\n          };\n          xhr.onerror = function () {\n            console.error(\'There was a network error.\');\n          };\n          xhr.send();\n        }\n      ',
      axios:
        'const BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n        async function axiosGetAllQuotes() {\n          try {\n            const response = await axios.get(BASE_URL);\n            console.log(response.data);\n          } catch (error) {\n            console.error(error);\n          }\n        }\n      ',
      fetch:
        'const BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n        async function fetchGetAllQuotes() {\n          try {\n            const response = await fetch(BASE_URL);\n             if (!response.ok) {\n              throw new Error(`HTTP error! status: ${response.status}`);\n            }\n            const data = await response.json();\n            console.log(data);\n          } catch (error) {\n            console.error("There was a problem with the fetch operation:", error);\n          }\n        }\n      ',
      jQuery:
        'const BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n        function jqueryGetAllQuotes() {\n          $.ajax({\n            url: BASE_URL,\n            method: "GET",\n            success: function (data) {\n              console.log(data);\n            },\n            error: function (xhr, status, error) {\n              console.error("Error:", status, error, xhr.responseText);\n            },\n          });\n        }\n      ',
    },
    Kotlin:
      '      import okhttp3.*\n      import java.io.IOException\n\n       val BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote"\n      // val client = OkHttpClient() // Client instance should be shared\n\n      fun getAllQuotes() {\n        val request = Request.Builder()\n          .url(BASE_URL)\n          .get()\n          .build()\n\n        client.newCall(request).execute().use { response ->\n           if (!response.isSuccessful) throw IOException("Unexpected code " + response)\n          println(response.body?.string())\n        }\n      }\n    ',
  },
  getById: {
    node: {
      fetch:
        '  const BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n      async function getQuoteById(id) {\n    try {\n      const response = await fetch(`${BASE_URL}/${id}`, {\n        method: "GET",\n      });\n      if (!response.ok) {\n        const errorText = await response.text();\n        throw new Error(`HTTP error! status: ${response.status}, body: ${errorText}`);\n      }\n      const data = await response.json();\n      console.log("Quote found:", data);\n      return data; // Best practice: Return the data\n    } catch (error) {\n      console.error("Error fetching quote:", error);\n      throw error; // Re-throw to allow caller to handle it\n    }\n  }',
      axios:
        'const BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n      async function getQuoteById(id) {\n    try {\n      const response = await axios.get(`${BASE_URL}/${id}`);\n      console.log("Quote found:", response.data);\n      return response.data;\n    } catch (error) {\n      if (error.response) {\n        console.error("Error fetching quote:", error.response.status, error.response.data);\n      } else if (error.request) {\n        console.error("Error fetching quote: No response received", error.request);\n      } else {\n        console.error("Error fetching quote:", error.message);\n      }\n      throw error; // Re-throw to allow caller to handle it\n    }\n  }',
      request:
        'const BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n      function getQuoteById(id) {\n    request.get(`${BASE_URL}/${id}`, (error, response, body) => {\n      if (error) {\n        console.error("Error fetching quote:", error);\n      } else if (response.statusCode >= 200 && response.statusCode < 300) {\n        console.log("Quote found:", body);\n      } else {\n        console.error(`Error fetching quote: Status code ${response.statusCode}`, body);\n      }\n    });\n  }',
      unirest:
        'const BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n      function getQuoteById(id) {\n    unirest.get(`${BASE_URL}/${id}`).end((response) => {\n      if (response.error) {\n        console.error("Error fetching quote:", response.error);\n      } else if (response.status >= 200 && response.status < 300) {\n        console.log("Quote found:", response.body);\n      } else {\n        console.error(`Error fetching quote: Status code ${response.status}`, response.body);\n      }\n    });\n  }',
    },
    Shell: {
      curl: ' export BASE_URL="https://api.freeapi.app/api/v1/public/quotes/quote"\n        getQuoteById() {\n          curl -X GET "$BASE_URL/$1"\n        }\n      ',
      httpie:
        ' export BASE_URL="https://api.freeapi.app/api/v1/public/quotes/quote"\n        getQuoteById() {\n          http GET "$BASE_URL/$1"\n        }\n      ',
    },
    Python:
      ' BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote"\n      def get_quote_by_id(quote_id):\n        response = requests.get(f"{BASE_URL}/{quote_id}")\n        print(response.json())\n    ',
    Ruby: ' BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote"\n      def get_quote_by_id(quote_id)\n        uri = URI("#{BASE_URL}/#{quote_id}")\n        response = Net::HTTP.get(uri)\n        puts JSON.parse(response)\n      end\n    ',
    PHP: ' $BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n      function getQuoteById($id) {\n        global $BASE_URL;\n        return sendRequest("$BASE_URL/$id", "GET");\n        }\n    ',
    Java: {
      Unirest:
        ' public static final String BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n        public static void getQuoteById(String id) throws Exception {\n          HttpResponse<JsonNode> response = Unirest.get(BASE_URL + "/" + id).asJson();\n          System.out.println(response.getBody());\n        }\n      ',
      AsyncHttp:
        ' public static final String BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n        public static void getQuoteByIdAsync(String id) throws ExecutionException, InterruptedException {\n          HttpRequest request = HttpRequest.newBuilder()\n            .uri(URI.create(BASE_URL + "/" + id))\n            .GET()\n            .build();\n          HttpClient client = HttpClient.newHttpClient();\n          CompletableFuture<HttpResponse<String>> responseFuture = client.sendAsync(request, HttpResponse.BodyHandlers.ofString());\n          HttpResponse<String> response = responseFuture.get();\n          System.out.println(response.body());\n        }\n      ',
      HttpClient:
        ' public static final String BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n        public static void getQuoteByIdHttpClient(String id) throws IOException, InterruptedException {\n          HttpClient client = HttpClient.newHttpClient();\n          HttpRequest request = HttpRequest.newBuilder()\n            .uri(URI.create(BASE_URL + "/" + id))\n            .GET()\n            .build();\n          HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());\n          System.out.println(response.body());\n        }\n      ',
      OkHttp:
        '        import okhttp3.*;\n        import java.io.IOException;\n\n         public static final String BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n\n        public static void getQuoteByIdOkHttp(String id) throws IOException {\n          OkHttpClient client = new OkHttpClient();\n          Request request = new Request.Builder()\n            .url(BASE_URL + "/" + id)\n            .get()\n            .build();\n          try (Response response = client.newCall(request).execute()) {\n             if (!response.isSuccessful()) throw new IOException("Unexpected code " + response);\n            System.out.println(response.body().string());\n          }\n        }\n      ',
    },
    CSharp: {
      RestSharp:
        '        using RestSharp;\n\n         public static readonly string BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n        public static void GetQuoteByIdRestSharp(string id) {\n          var client = new RestClient(BASE_URL); // Or RestClient(BASE_URL + "/" + id)\n          var request = new RestRequest("{id}", Method.Get);\n          request.AddUrlSegment("id", id); // If using {id} placeholder\n          var response = client.Execute(request);\n          Console.WriteLine(response.Content);\n        }\n      ',
      HttpClient:
        '        using System.Net.Http;\n        using System.Threading.Tasks;\n\n         public static readonly string BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n\n        public static async Task GetQuoteByIdHttpClientAsync(string id) {\n          using var client = new HttpClient();\n          var response = await client.GetAsync(BASE_URL + "/" + id);\n          response.EnsureSuccessStatusCode();\n          var responseString = await response.Content.ReadAsStringAsync();\n          Console.WriteLine(responseString);\n        }\n      ',
    },
    JavaScript: {
      xhr: ' const BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n        function xhrGetQuoteById(id) {\n          const xhr = new XMLHttpRequest();\n          xhr.open("GET", `${BASE_URL}/${id}`);\n          xhr.onload = function () {\n            if (xhr.status >= 200 && xhr.status < 300) {\n              console.log(JSON.parse(xhr.responseText));\n            } else {\n              console.error(`Request failed. Returned status of ${xhr.status}`);\n            }\n          };\n          xhr.onerror = function () {\n            console.error(\'There was a network error.\');\n          };\n          xhr.send();\n        }\n      ',
      axios:
        ' const BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n        async function axiosGetQuoteById(id) {\n          try {\n            const response = await axios.get(`${BASE_URL}/${id}`);\n            console.log(response.data);\n          } catch (error) {\n            console.error(error);\n          }\n        }\n      ',
      fetch:
        ' const BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n        async function fetchGetQuoteById(id) {\n          try {\n            const response = await fetch(`${BASE_URL}/${id}`);\n             if (!response.ok) {\n              throw new Error(`HTTP error! status: ${response.status}`);\n            }\n            const data = await response.json();\n            console.log(data);\n          } catch (error) {\n            console.error("There was a problem with the fetch operation:", error);\n          }\n        }\n      ',
      jQuery:
        ' const BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n        function jqueryGetQuoteById(id) {\n          $.ajax({\n            url: `${BASE_URL}/${id}`,\n            method: "GET",\n            success: function (data) {\n              console.log(data);\n            },\n            error: function (xhr, status, error) {\n               console.error("Error:", status, error, xhr.responseText);\n            },\n          });\n        }\n      ',
    },
    Kotlin:
      '      import okhttp3.*\n      import java.io.IOException\n\n      val BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote"\n      // val client = OkHttpClient() // Client instance should be shared\n\n      fun getQuoteById(id: String) {\n        val request = Request.Builder()\n          .url("$BASE_URL/$id")\n          .get()\n          .build()\n\n        client.newCall(request).execute().use { response ->\n          if (!response.isSuccessful) throw IOException("Unexpected code " + response)\n          println(response.body?.string())\n        }\n      }\n    ',
  },
  update: {
    node: {
      fetch:
        ' const BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n      async function updateQuote(id, updatedQuoteData) {\n    try {\n      const response = await fetch(`${BASE_URL}/${id}`, {\n        method: "PUT", // Or PATCH if API supports partial updates\n        headers: { "Content-Type": "application/json" },\n        body: JSON.stringify(updatedQuoteData),\n      });\n      if (!response.ok) {\n        // Include response text in error for more details\n        const errorText = await response.text();\n        throw new Error(`HTTP error! status: ${response.status}, body: ${errorText}`);\n      }\n      const data = await response.json();\n      console.log("Quote updated successfully:", data); // API should return updated object\n    } catch (error) {\n      console.error("Error updating quote:", error);\n    }\n  }',
      axios:
        ' const BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n      async function updateQuote(id, updatedQuoteData) {\n    try {\n      const response = await axios.put(`${BASE_URL}/${id}`, updatedQuoteData); // Or axios.patch\n      console.log("Quote updated successfully:", response.data);\n    } catch (error) {\n      if (error.response) {\n        // The request was made and the server responded with a status code\n        // that falls out of the range of 2xx\n        console.error("Error updating quote:", error.response.status, error.response.data);\n      } else if (error.request) {\n        // The request was made but no response was received\n        console.error("Error updating quote: No response received", error.request);\n      } else {\n        // Something happened in setting up the request that triggered an Error\n        console.error("Error updating quote:", error.message);\n      }\n    }\n  }',
      request:
        ' const BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n      function updateQuote(id, updatedQuoteData) {\n    request.put(`${BASE_URL}/${id}`, { json: updatedQuoteData }, (error, response, body) => { // Or request.patch\n      if (error) {\n        console.error("Error updating quote:", error);\n      } else if (response.statusCode >= 200 && response.statusCode < 300) {\n        console.log("Quote updated successfully:", body);\n      } else {\n        console.error(`Error updating quote: Status code ${response.statusCode}`, body);\n      }\n    });\n  }',
      unirest:
        ' const BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n      function updateQuote(id, updatedQuoteData) {\n    unirest.put(`${BASE_URL}/${id}`).send(updatedQuoteData).end((response) => {\n      if (response.error) {\n        console.error("Error updating quote:", response.error);\n      } else if (response.status >= 200 && response.status < 300) {\n        console.log("Quote updated successfully:", response.body);\n      } else {\n        console.error(`Error updating quote: Status code ${response.status}`, response.body);\n      }\n    });\n  }',
    },
    Shell: {
      curl: ' export BASE_URL="https://api.freeapi.app/api/v1/public/quotes/quote"\n        updateQuote() {\n          # Usage: updateQuote <id> \'{"quote":"new text", "author":"new author", "category":"new category"}\'\n          curl -X PUT "$BASE_URL/$1" \\\n          -H "Content-Type: application/json" \\\n          -d "$2"\n        }\n      ',
      httpie:
        ' export BASE_URL="https://api.freeapi.app/api/v1/public/quotes/quote"\n        updateQuote() {\n          # Usage: updateQuote <id> quote="new text" author="new author"\n          http PUT "$BASE_URL/$1" $@\n        }\n      ',
    },
    Python:
      ' BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote"\n      def update_quote(quote_id, updated_data):\n        response = requests.put(f"{BASE_URL}/{quote_id}", json=updated_data, headers={"Content-Type": "application/json"}) # Or requests.patch\n        print(response.json()) # API might return the updated object\n    ',
    Ruby: "BASE_URL = \"https://api.freeapi.app/api/v1/public/quotes/quote\"\n      def update_quote(quote_id, updated_data)\n        uri = URI(\"#{BASE_URL}/#{quote_id}\")\n        request = Net::HTTP::Put.new(uri, 'Content-Type' => 'application/json') # Or Net::HTTP::Patch\n        request.body = updated_data.to_json\n        response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: uri.scheme == 'https') do |http|\n          http.request(request)\n        end\n        puts JSON.parse(response.body) # API might return the updated object\n      end\n    ",
    PHP: ' $BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n      function updateQuote($id, $updatedData) {\n        global $BASE_URL;\n        // Assuming sendRequest handles method, url, and data serialization (e.g., to JSON)\n        return sendRequest("$BASE_URL/$id", "PUT", $updatedData); // Or "PATCH"\n      }\n    ',
    Java: {
      Unirest:
        ' public static final String BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n        public static void updateQuote(String id, String quote, String author, String category) throws Exception {\n          HttpResponse<JsonNode> response = Unirest.put(BASE_URL + "/" + id) // Or Unirest.patch\n            .header("Content-Type", "application/json")\n            .body("{\\"quote\\":\\"" + quote + "\\", \\"author\\":\\"" + author + "\\", \\"category\\":\\"" + category + "\\"}")\n            .asJson();\n          System.out.println(response.getBody()); // API might return the updated object\n        }\n      ',
      AsyncHttp:
        ' public static final String BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n        public static void updateQuoteAsync(String id, String quote, String author, String category) throws ExecutionException, InterruptedException {\n          HttpRequest request = HttpRequest.newBuilder()\n            .uri(URI.create(BASE_URL + "/" + id))\n            .header("Content-Type", "application/json")\n            .PUT(HttpRequest.BodyPublishers.ofString("{\\"quote\\":\\"" + quote + "\\", \\"author\\":\\"" + author + "\\", \\"category\\":\\"" + category + "\\"}")) // Or PATCH\n            .build();\n          HttpClient client = HttpClient.newHttpClient();\n          CompletableFuture<HttpResponse<String>> responseFuture = client.sendAsync(request, HttpResponse.BodyHandlers.ofString());\n          HttpResponse<String> response = responseFuture.get();\n          System.out.println(response.body()); // API might return the updated object\n        }\n      ',
      HttpClient:
        ' public static final String BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n        public static void updateQuoteHttpClient(String id, String quote, String author, String category) throws IOException, InterruptedException {\n          HttpClient client = HttpClient.newHttpClient();\n          HttpRequest request = HttpRequest.newBuilder()\n            .uri(URI.create(BASE_URL + "/" + id))\n            .header("Content-Type", "application/json")\n            .PUT(HttpRequest.BodyPublishers.ofString("{\\"quote\\":\\"" + quote + "\\", \\"author\\":\\"" + author + "\\", \\"category\\":\\"" + category + "\\"}")) // Or PATCH\n            .build();\n          HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());\n          System.out.println(response.body()); // API might return the updated object\n        }\n      ',
      OkHttp:
        '        import okhttp3.*;\n        import java.io.IOException;\n\n        public static final String BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n\n        public static void updateQuoteOkHttp(String id, String quote, String author, String category) throws IOException {\n          OkHttpClient client = new OkHttpClient();\n          MediaType mediaType = MediaType.parse("application/json");\n          String json = "{\\"quote\\":\\"" + quote + "\\", \\"author\\":\\"" + author + "\\", \\"category\\":\\"" + category + "\\"}";\n          RequestBody body = RequestBody.create(mediaType, json);\n          Request request = new Request.Builder()\n            .url(BASE_URL + "/" + id)\n            .put(body) // Or .patch(body)\n            .build();\n          try (Response response = client.newCall(request).execute()) {\n             if (!response.isSuccessful()) throw new IOException("Unexpected code " + response);\n            System.out.println(response.body().string()); // API might return the updated object\n          }\n        }\n      ',
    },
    CSharp: {
      RestSharp:
        '        using RestSharp;\n\n        public static readonly string BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n\n        public static void UpdateQuoteRestSharp(string id, string quote, string author, string category) {\n          var client = new RestClient(BASE_URL);\n          var request = new RestRequest("{id}", Method.Put); // Or Method.Patch\n          request.AddUrlSegment("id", id);\n          request.AddHeader("Content-Type", "application/json");\n          request.AddJsonBody(new { quote, author, category });\n          var response = client.Execute(request);\n          Console.WriteLine(response.Content); // API might return the updated object\n        }\n      ',
      HttpClient:
        '        using System.Net.Http;\n        using System.Net.Http.Headers;\n        using System.Text;\n        using System.Threading.Tasks;\n        using Newtonsoft.Json;\n\n         public static readonly string BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n\n        public static async Task UpdateQuoteHttpClientAsync(string id, string quote, string author, string category) {\n          using var client = new HttpClient();\n          client.DefaultRequestHeaders.Accept.Clear();\n          client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));\n          var content = new StringContent(JsonConvert.SerializeObject(new { quote, author, category }), Encoding.UTF8, "application/json");\n          var response = await client.PutAsync(BASE_URL + "/" + id, content); // Or client.PatchAsync (requires extension or custom method for older versions)\n          response.EnsureSuccessStatusCode();\n          var responseString = await response.Content.ReadAsStringAsync();\n          Console.WriteLine(responseString); // API might return the updated object\n        }\n      ',
    },
    JavaScript: {
      xhr: ' const BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n        function xhrUpdateQuote(id, updatedQuoteData) {\n          const xhr = new XMLHttpRequest();\n          xhr.open("PUT", `${BASE_URL}/${id}`); // Or PATCH\n          xhr.setRequestHeader("Content-Type", "application/json");\n          xhr.onload = function () {\n            if (xhr.status >= 200 && xhr.status < 300) {\n              console.log(JSON.parse(xhr.responseText)); // API might return the updated object\n            } else {\n              console.error(`Request failed. Returned status of ${xhr.status}`);\n            }\n          };\n          xhr.onerror = function () {\n            console.error(\'There was a network error.\');\n          };\n          xhr.send(JSON.stringify(updatedQuoteData));\n        }\n      ',
      axios:
        ' const BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n        async function axiosUpdateQuote(id, updatedQuoteData) {\n          try {\n            const response = await axios.put(`${BASE_URL}/${id}`, updatedQuoteData); // Or axios.patch\n            console.log("Quote updated successfully:", response.data); // API should return the updated object\n          } catch (error) {\n            if (error.response) {\n              // The request was made and the server responded with a status code\n              // that falls out of the range of 2xx\n              console.error("Error updating quote:", error.response.status, error.response.data);\n            } else if (error.request) {\n              // The request was made but no response was received\n              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of\n              // http.ClientRequest in node.js\n              console.error("Error updating quote: No response received", error.request);\n            } else {\n              // Something happened in setting up the request that triggered an Error\n              console.error("Error updating quote:", error.message);\n            }\n          }\n        }\n      ',
      fetch:
        ' const BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n        async function fetchUpdateQuote(id, updatedQuoteData) {\n          try {\n            const response = await fetch(`${BASE_URL}/${id}`, {\n              method: "PUT", // Or PATCH\n              headers: { "Content-Type": "application/json" },\n              body: JSON.stringify(updatedQuoteData),\n            });\n            if (!response.ok) {\n              // Include response text in error message for more details\n              const errorText = await response.text();\n              throw new Error(`HTTP error! status: ${response.status}, body: ${errorText}`);\n            }\n            const data = await response.json();\n            console.log("Quote updated successfully:", data); // API should return the updated object\n          } catch (error) {\n            console.error("There was a problem with the fetch operation:", error);\n          }\n        }\n      ',
      jQuery:
        ' const BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n        function jqueryUpdateQuote(id, updatedQuoteData) {\n          $.ajax({\n            url: `${BASE_URL}/${id}`,\n            method: "PUT", // Or "PATCH"\n            contentType: "application/json",\n            data: JSON.stringify(updatedQuoteData),\n            success: function (data) {\n              console.log(data); // API might return the updated object\n            },\n            error: function (xhr, status, error) {\n               console.error("Error:", status, error, xhr.responseText);\n            },\n          });\n        }\n      ',
    },
    Kotlin:
      '      import okhttp3.*\n      import org.json.JSONObject\n      import java.io.IOException\n\n     val BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote"\n      // val client = OkHttpClient() // Client instance should be shared\n\n      fun updateQuote(id: String, quote: String, author: String, category: String) {\n        val json = JSONObject()\n          .put("quote", quote)\n          .put("author", author)\n          .put("category", category)\n          .toString()\n        val requestBody = RequestBody.create(MediaType.get("application/json"), json)\n        val request = Request.Builder()\n          .url("$BASE_URL/$id")\n          .put(requestBody) // Or .patch(requestBody)\n          .build()\n\n        client.newCall(request).execute().use { response ->\n          if (!response.isSuccessful) throw IOException("Unexpected code " + response)\n          println(response.body?.string()) // API might return the updated object\n        }\n      }\n    ',
  },
  delete: {
    node: {
      fetch:
        ' const BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n      async function deleteQuote(id) {\n    try {\n      const response = await fetch(`${BASE_URL}/${id}`, {\n        method: "DELETE",\n      });\n      if (!response.ok) {\n        throw new Error(`HTTP error! status: ${response.status}`);\n      }\n      // Handle potential empty response body for successful deletion (e.g., 204 No Content)\n      if (response.status !== 204) {\n        const data = await response.json();\n        console.log("Delete successful:", data); // API might return confirmation\n      } else {\n        console.log("Quote deleted successfully (no content returned).");\n      }\n    } catch (error) {\n      console.error("Error deleting quote:", error);\n    }\n  }',
      axios:
        ' const BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n      async function deleteQuote(id) {\n    try {\n      const response = await axios.delete(`${BASE_URL}/${id}`);\n      if (response.status === 200 || response.status === 204) {\n        console.log("Quote deleted successfully.");\n        if (response.data) {\n          console.log("Response:", response.data); // Log any data returned by the API\n        }\n      } else {\n        console.error(`Failed to delete quote. Status: ${response.status}`, response.data);\n      }\n    } catch (error) {\n      console.error("Error deleting quote:", error);\n    }\n  }',
      request:
        ' const BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n      function deleteQuote(id) {\n    request.delete(`${BASE_URL}/${id}`, (error, response, body) => {\n      if (!error && (response && (response.statusCode === 200 || response.statusCode === 204))) {\n        console.log("Quote deleted successfully.");\n        if (body) {\n          console.log("Response:", body);\n        }\n      } else {\n        console.error(`Failed to delete quote. Error: ${error || (response && response.statusCode)}`, body);\n      }\n    });\n  }',
      unirest:
        ' const BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n      function deleteQuote(id) {\n    unirest.delete(`${BASE_URL}/${id}`).end((response) => {\n      if (response.status === 200 || response.status === 204) {\n        console.log("Quote deleted successfully.");\n        if (response.body) {\n          console.log("Response:", response.body);\n        }\n      } else {\n        console.error(`Failed to delete quote. Status: ${response.status}`, response.body);\n      }\n    });\n  }',
    },
    Shell: {
      curl: ' export BASE_URL="https://api.freeapi.app/api/v1/public/quotes/quote"\n        deleteQuote() {\n          # Usage: deleteQuote <id>\n          curl -X DELETE "$BASE_URL/$1"\n        }\n      ',
      httpie:
        ' export BASE_URL="https://api.freeapi.app/api/v1/public/quotes/quote"\n        deleteQuote() {\n          # Usage: deleteQuote <id>\n          http DELETE "$BASE_URL/$1"\n        }\n      ',
    },
    Python:
      ' BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote"\n      def delete_quote(quote_id):\n        response = requests.delete(f"{BASE_URL}/{quote_id}")\n        # Check status code or response body for confirmation\n        print(f"Status Code: {response.status_code}")\n        try:\n          print(response.json())\n        except:\n          print("No JSON response body")\n    ',
    Ruby: ' BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote"\n      def delete_quote(quote_id)\n        uri = URI("#{BASE_URL}/#{quote_id}")\n        request = Net::HTTP::Delete.new(uri)\n        response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: uri.scheme == \'https\') do |http|\n          http.request(request)\n        end\n        puts "Status Code: #{response.code}"\n        begin\n          puts JSON.parse(response.body)\n        rescue JSON::ParserError\n          puts "No JSON response body"\n        end\n      end\n    ',
    PHP: ' $BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n      function deleteQuote($id) {\n        global $BASE_URL;\n        return sendRequest("$BASE_URL/$id", "DELETE");\n      }\n    ',
    Java: {
      Unirest:
        ' public static final String BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n        public static void deleteQuote(String id) throws Exception {\n          HttpResponse<JsonNode> response = Unirest.delete(BASE_URL + "/" + id).asJson(); // API might return confirmation or empty body\n          System.out.println(response.getBody());\n        }\n      ',
      AsyncHttp:
        ' public static final String BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n        public static void deleteQuoteAsync(String id) throws ExecutionException, InterruptedException {\n          HttpRequest request = HttpRequest.newBuilder()\n            .uri(URI.create(BASE_URL + "/" + id))\n            .DELETE()\n            .build();\n          HttpClient client = HttpClient.newHttpClient();\n          CompletableFuture<HttpResponse<String>> responseFuture = client.sendAsync(request, HttpResponse.BodyHandlers.ofString());\n          HttpResponse<String> response = responseFuture.get();\n          System.out.println("Status Code: " + response.statusCode()); // Check status code\n          System.out.println(response.body()); // API might return confirmation or empty body\n        }\n      ',
      HttpClient:
        ' public static final String BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n        public static void deleteQuoteHttpClient(String id) throws IOException, InterruptedException {\n          HttpClient client = HttpClient.newHttpClient();\n          HttpRequest request = HttpRequest.newBuilder()\n            .uri(URI.create(BASE_URL + "/" + id))\n            .DELETE()\n            .build();\n          HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());\n          System.out.println("Status Code: " + response.statusCode()); // Check status code\n          System.out.println(response.body()); // API might return confirmation or empty body\n        }\n      ',
      OkHttp:
        '        import okhttp3.*;\n        import java.io.IOException;\n\n       public static final String BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n\n        public static void deleteQuoteOkHttp(String id) throws IOException {\n          OkHttpClient client = new OkHttpClient();\n          Request request = new Request.Builder()\n            .url(BASE_URL + "/" + id)\n            .delete()\n            .build();\n          try (Response response = client.newCall(request).execute()) {\n             if (!response.isSuccessful()) throw new IOException("Unexpected code " + response); // Or handle 204 No Content\n            System.out.println(response.body().string()); // API might return confirmation or empty body\n          }\n        }\n      ',
    },
    CSharp: {
      RestSharp:
        '        using RestSharp;\n\n     public static readonly string BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n\n        public static void DeleteQuoteRestSharp(string id) {\n          var client = new RestClient(BASE_URL);\n          var request = new RestRequest("{id}", Method.Delete);\n          request.AddUrlSegment("id", id);\n          var response = client.Execute(request);\n          Console.WriteLine(response.Content); // API might return confirmation or empty body\n          Console.WriteLine($"Status: {response.StatusCode}"); // Check status code\n        }\n      ',
      HttpClient:
        '        using System.Net.Http;\n        using System.Threading.Tasks;\n\n        public static readonly string BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n\n        public static async Task DeleteQuoteHttpClientAsync(string id) {\n          using var client = new HttpClient();\n          var response = await client.DeleteAsync(BASE_URL + "/" + id);\n          // response.EnsureSuccessStatusCode(); // Use if 2xx is expected, including 204 No Content\n          Console.WriteLine($"Status: {response.StatusCode}"); // Check status code\n          var responseString = await response.Content.ReadAsStringAsync();\n          Console.WriteLine(responseString); // API might return confirmation or empty body\n        }\n      ',
    },
    JavaScript: {
      xhr: ' const BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n        function xhrDeleteQuote(id) {\n          const xhr = new XMLHttpRequest();\n          xhr.open("DELETE", `${BASE_URL}/${id}`);\n          xhr.onload = function () {\n            if (xhr.status >= 200 && xhr.status < 300) {\n              // Success, might return empty body or confirmation\n              try {\n                console.log(JSON.parse(xhr.responseText));\n              } catch {\n                console.log("Delete successful");\n              }\n            } else {\n              console.error(`Request failed. Returned status of ${xhr.status}`);\n            }\n          };\n          xhr.onerror = function () {\n            console.error(\'There was a network error.\');\n          };\n          xhr.send();\n        }\n      ',
      axios:
        ' const BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n        async function axiosDeleteQuote(id) {\n          try {\n            const response = await axios.delete(`${BASE_URL}/${id}`);\n            if (response.status === 200 || response.status === 204) {\n              console.log("Quote deleted successfully.");\n              if (response.data) {\n                console.log("Response data:", response.data);\n              }\n            } else {\n              console.error(`Failed to delete quote. Status: ${response.status}`, response.data);\n            }\n          } catch (error) {\n            console.error("There was an error deleting the quote:", error);\n          }\n        }\n      ',
      fetch:
        ' const BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n        async function fetchDeleteQuote(id) {\n          try {\n            const response = await fetch(`${BASE_URL}/${id}`, {\n              method: "DELETE",\n            });\n            if (!response.ok) {\n              throw new Error(`HTTP error! status: ${response.status}`);\n            }\n            // Check if response body is expected before parsing JSON\n            const text = await response.text();\n            if (text) {\n              try {\n                console.log(JSON.parse(text)); // API might return confirmation\n              } catch (e) {\n                console.log("Delete successful (non-JSON response):", text);\n              }\n            } else {\n              console.log("Delete successful (no response body)"); // Likely 204 No Content\n            }\n          } catch (error) {\n            console.error("There was a problem with the fetch operation:", error);\n          }\n        }\n      ',
      jQuery:
        ' const BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote";\n        function jqueryDeleteQuote(id) {\n          $.ajax({\n            url: `${BASE_URL}/${id}`,\n            method: "DELETE",\n            success: function (data) {\n              console.log(data);\n            },\n            error: function (xhr, status, error) {\n               console.error("Error:", status, error, xhr.responseText);\n            },\n          });\n        }\n      ',
    },
    Kotlin:
      '      import okhttp3.*\n      import java.io.IOException\n\n     val BASE_URL = "https://api.freeapi.app/api/v1/public/quotes/quote"\n      // val client = OkHttpClient() // Client instance should be shared\n\n      fun deleteQuote(id: String) {\n        val request = Request.Builder()\n          .url("$BASE_URL/$id")\n          .delete()\n          .build()\n\n        client.newCall(request).execute().use { response ->\n          if (!response.isSuccessful) throw IOException("Unexpected code " + response) // Or handle 204 No Content\n          println(response.body?.string()) // API might return confirmation or empty body\n        }\n      }\n    ',
  },
};

export const commandMapName = {
  node: `node`,
  Shell: `shell`,
  Python: `python`,
  Ruby: `ruby`,
  PHP: `php`,
  Java: `java`,
  CSharp: `c#`,
  JavaScript: `javascript`,
  Kotlin: `kotlin`,
};

interface ApiItem {
  name: string;
  method: string;
  url: string;
  urlName?: string;
}

// API Lists
export const Todos: ApiItem[] = [
  {
    name: "Get all the Todos",
    method: "GET",
    url: "/api/todos",
    urlName: "getAll/Todos",
  },
  {
    name: "Get a single Todos",
    method: "GET",
    url: "/api/todos/:id",
    urlName: "getById/Todos",
  },
  {
    name: "Create a new Todos",
    method: "POST",
    url: "/api/todos",
    urlName: "create/Todos",
  },
  {
    name: "Update a Todos",
    method: "PUT",
    url: "/api/todos/:id",
    urlName: "update/Todos",
  },
  {
    name: "Delete a Todos",
    method: "DELETE",
    url: "/api/todos/:id",
    urlName: "delete/Todos",
  },
];

export const Posts: ApiItem[] = [
  {
    name: "Get all the Posts",
    method: "GET",
    url: "/api/posts",
    urlName: "getAll/Posts",
  },
  {
    name: "Get a single Posts",
    method: "GET",
    url: "/api/posts/:id",
    urlName: "getById/Posts",
  },
  {
    name: "Create a new Posts",
    method: "POST",
    url: "/api/posts",
    urlName: "create/Posts",
  },
  {
    name: "Update a Posts",
    method: "PUT",
    url: "/api/posts/:id",
    urlName: "update/Posts",
  },
  {
    name: "Delete a Posts",
    method: "DELETE",
    url: "/api/posts/:id",
    urlName: "delete/Posts",
  },
];

export const Comments: ApiItem[] = [
  {
    name: "Get all the Comments",
    method: "GET",
    url: "/api/comments",
    urlName: "getAll/Comments",
  },
  {
    name: "Get a single Comments",
    method: "GET",
    url: "/api/comments/:id",
    urlName: "getById/Comments",
  },
  {
    name: "Create a new Comments",
    method: "POST",
    url: "/api/comments",
    urlName: "create/Comments",
  },
  {
    name: "Update a Comments",
    method: "PUT",
    url: "/api/comments/:id",
    urlName: "update/Comments",
  },
  {
    name: "Delete a Comments",
    method: "DELETE",
    url: "/api/comments/:id",
    urlName: "delete/Comments",
  },
];

export const Products: ApiItem[] = [
  {
    name: "Get all the Products",
    method: "GET",
    url: "/api/products",
    urlName: "getAll/Products",
  },
  {
    name: "Get a single Products",
    method: "GET",
    url: "/api/products/:id",
    urlName: "getById/Products",
  },
  {
    name: "Create a new Products",
    method: "POST",
    url: "/api/products",
    urlName: "create/Products",
  },
  {
    name: "Update a Products",
    method: "PUT",
    url: "/api/products/:id",
    urlName: "update/Products",
  },
  {
    name: "Delete a Products",
    method: "DELETE",
    url: "/api/products/:id",
    urlName: "delete/Products",
  },
];
export const Movies: ApiItem[] = [
  {
    name: "Get all the Movies",
    method: "GET",
    url: "/api/movies",
    urlName: "getAll/Movies",
  },
  {
    name: "Get a single Movies",
    method: "GET",
    url: "/api/movies/:id",
    urlName: "getById/Movies",
  },
  {
    name: "Create a new Movies",
    method: "POST",
    url: "/api/movies",
    urlName: "create/Movies",
  },
  {
    name: "Update a Movies",
    method: "PUT",
    url: "/api/movies/:id",
    urlName: "update/Movies",
  },
  {
    name: "Delete a Movies",
    method: "DELETE",
    url: "/api/movies/:id",
    urlName: "delete/Movies",
  },
];
export const Books: ApiItem[] = [
  {
    name: "Get all the Books",
    method: "GET",
    url: "/api/books",
    urlName: "getAll/Books",
  },
  {
    name: "Get a single Books",
    method: "GET",
    url: "/api/books/:id",
    urlName: "getById/Books",
  },
  {
    name: "Create a new Books",
    method: "POST",
    url: "/api/books",
    urlName: "create/Books",
  },
  {
    name: "Update a Books",
    method: "PUT",
    url: "/api/books/:id",
    urlName: "update/Books",
  },
  {
    name: "Delete a  Books",
    method: "DELETE",
    url: "/api/books/:id",
    urlName: "delete/Books",
  },
];
export const Users: ApiItem[] = [
  {
    name: "Get all the Users",
    method: "GET",
    url: "/api/users",
    urlName: "getAll/Users",
  },
  {
    name: "Get a single Users",
    method: "GET",
    url: "/api/users/:id",
    urlName: "getById/Users",
  },
  {
    name: "Create a new Users",
    method: "POST",
    url: "/api/users",
    urlName: "create/Users",
  },
  {
    name: "Update a Users",
    method: "PUT",
    url: "/api/users/:id",
    urlName: "update/Users",
  },
  {
    name: "Delete a  Users",
    method: "DELETE",
    url: "/api/users/:id",
    urlName: "delete/Users",
  },
];
export const Recipes: ApiItem[] = [
  {
    name: "Get all the Recipes",
    method: "GET",
    url: "/api/recipes",
    urlName: "getAll/Recipes",
  },
  {
    name: "Get a single Recipes",
    method: "GET",
    url: "/api/recipes/:id",
    urlName: "getById/Recipes",
  },
  {
    name: "Create a new Recipes",
    method: "POST",
    url: "/api/recipes",
    urlName: "create/Recipes",
  },
  {
    name: "Update a Recipes",
    method: "PUT",
    url: "/api/recipes/:id",
    urlName: "update/Recipes",
  },
  {
    name: "Delete a  Recipes",
    method: "DELETE",
    url: "/api/recipes/:id",
    urlName: "delete/Recipes",
  },
];
export const Quotes: ApiItem[] = [
  {
    name: "Get all the Quotes",
    method: "GET",
    url: "/api/quotes",
    urlName: "getAll/Quotes",
  },
  {
    name: "Get a single Quotes",
    method: "GET",
    url: "/api/quotes/:id",
    urlName: "getById/Quotes",
  },
  {
    name: "Create a new Quotes",
    method: "POST",
    url: "/api/quotes",
    urlName: "create/Quotes",
  },
  {
    name: "Update a Quotes",
    method: "PUT",
    url: "/api/quotes/:id",
    urlName: "update/Quotes",
  },
  {
    name: "Delete a  Quotes",
    method: "DELETE",
    url: "/api/quotes/:id",
    urlName: "delete/Quotes",
  },
];
export const Pizzas: ApiItem[] = [
  {
    name: "Get all the Pizzas",
    method: "GET",
    url: "/api/pizzas",
    urlName: "getAll/Pizzas",
  },
  {
    name: "Get a single Pizzas",
    method: "GET",
    url: "/api/pizzas/:id",
    urlName: "getById/Pizzas",
  },
  {
    name: "Create a new Pizzas",
    method: "POST",
    url: "/api/pizzas",
    urlName: "create/Pizzas",
  },
  {
    name: "Update a Pizzas",
    method: "PUT",
    url: "/api/pizzas/:id",
    urlName: "update/Pizzas",
  },
  {
    name: "Delete a  Pizzas",
    method: "DELETE",
    url: "/api/pizzas/:id",
    urlName: "delete/Pizzas",
  },
];
export const Desserts: ApiItem[] = [
  {
    name: "Get all the Desserts",
    method: "GET",
    url: "/api/desserts",
    urlName: "getAll/Desserts",
  },
  {
    name: "Get a single Desserts",
    method: "GET",
    url: "/api/desserts/:id",
    urlName: "getById/Desserts",
  },
  {
    name: "Create a new Desserts",
    method: "POST",
    url: "/api/desserts",
    urlName: "create/Desserts",
  },
  {
    name: "Update a Desserts",
    method: "PUT",
    url: "/api/desserts/:id",
    urlName: "update/Desserts",
  },
  {
    name: "Delete a Desserts",
    method: "DELETE",
    url: "/api/desserts/:id",
    urlName: "delete/Desserts",
  },
];
