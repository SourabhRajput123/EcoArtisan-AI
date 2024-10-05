from flask import Blueprint, request, jsonify
from flask_cors import CORS
import openai
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Create a Flask Blueprint
main = Blueprint('main', __name__)
CORS(main)

# Set the OpenAI API key from the environment variables
openai.api_key = os.getenv('OPENAI_API_KEY')

@main.route('/generate', methods=['POST'])
def generate_idea():
    # Get the user input (prompt) from the frontend
    data = request.get_json()
    user_prompt = data.get('prompt')
    
    # Debug print to check received prompt
    print(f"Received prompt: {user_prompt}")

    if not user_prompt:
        return jsonify({"error": "No prompt provided"}), 400

    try:
        # Call OpenAI API to generate a response based on the prompt
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",  # Use GPT-3.5 or similar model
            messages=[{"role": "user", "content": user_prompt}],
            max_tokens=100
        )

        # Extract the generated text from the API response
        generated_text = response.choices[0].message['content'].strip()

        # Return the generated idea to the frontend
        return jsonify({"idea": generated_text})

    except Exception as e:
        print(f"Error occurred: {str(e)}")  # Debug print for error
        return jsonify({"error": str(e)}), 500
