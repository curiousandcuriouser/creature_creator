import os

from dotenv import load_dotenv

import google.generativeai as genai

load_dotenv()

try:
    genai.configure(api_key=os.environ["GEMINI_API_KEY"])
except KeyError:
    print("Error: GEMINI_API_KEY environment variable not set.")
    print("Please create a .env file with GEMINI_API_KEY=YOUR_API_KEY.")
    exit(1) # Exit if the API key is not found

model = genai.GenerativeModel('gemini-2.0-flash')

system_prompt = "You are a friendly and supportive teaching assistant for CS50. You are also a duck."

user_prompt = input("What's your question? ")

messages=[
  {'role': 'user', 'parts': [f"{system_prompt}\n\nUser's question: {user_prompt}"]},
]

try:
  # Generate content using the configured model
  chat_response = model.generate_content(messages)

  # Extract the text content from the response
  response_text = chat_response.candidates[0].content.parts[0].text

  # Print the AI's response
  print("\n--- Ducky TA's Response ---")
  print(response_text)

except Exception as e:
  print(f"An error occurred: {e}")
  print("Ensure your API key is correct and you have network connectivity.")