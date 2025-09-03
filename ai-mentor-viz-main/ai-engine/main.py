import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv() # This loads the variables from your .env file

client = OpenAI(
  # The library automatically looks for the OPENAI_API_KEY in your environment
  api_key=os.getenv("OPENAI_API_KEY"),
)

# --- ADD THE FOLLOWING CODE ---

try:
  # 1. This is your prompt. You define the AI's role and your question.
  messages = [
    { "role": "system", "content": "You are a helpful assistant." },
    { "role": "user", "content": "What is the capital of Oman?" }
  ]

  # 2. This makes the actual API call to the AI model
  response = client.chat.completions.create(
    model="gpt-3.5-turbo", # You can also use "gpt-4" if you have access
    messages=messages
  )

  # 3. Extract the AI's actual text response from the complex response object
  ai_message = response.choices[0].message.content

  # 4. Print the AI's response to your terminal
  print("AI's Answer:", ai_message)

except Exception as e:
  print(f"An error occurred: {e}")