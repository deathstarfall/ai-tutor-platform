import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

# Configure the Gemini client with your API key
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

# --- ADD THE FOLLOWING CODE ---

try:
  # 1. This is your prompt. You define the AI's role and your question.
  messages = [
    { "role": "system", "content": "You are a helpful assistant." },
    { "role": "user", "content": "What is the capital of Oman?" }
  ]

  # This makes the API call to Gemini
  response = model.generate_content(prompt)

  # Print the AI's response to your terminal
  print("AI's Answer:", response.text)

except Exception as e:
  print(f"An error occurred: {e}")