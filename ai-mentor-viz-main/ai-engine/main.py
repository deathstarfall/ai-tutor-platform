import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

# Configure the Gemini client with your API key
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

# Create an instance of the Gemini Pro model
model = genai.GenerativeModel('gemini-pro')

try:
  # This is your prompt
  prompt = "What is the capital of India?"

  # This makes the API call to Gemini
  response = model.generate_content(prompt)

  # Print the AI's response to your terminal
  print("AI's Answer:", response.text)

except Exception as e:
  print(f"An error occurred: {e}")