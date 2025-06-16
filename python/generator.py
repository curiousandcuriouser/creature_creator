import os
from dotenv import load_dotenv
import google.generativeai as genai
from PIL import Image
import io
import base64
from google.cloud import aiplatform

load_dotenv()

try:
    genai.configure(api_key=os.environ["GEMINI_API_KEY"])
except KeyError:
    print("Error: GEMINI_API_KEY environment variable not set.")
    exit(1) # Exit if the API key is not found

image_model_name = 'imagen-3.0-generate-002'

system_prompt = "Generate a single, high-quality, detailed image based on the user's specific visual description of a creature."

user_prompt = input("Describe the creature you want to generate an image of: ")

image_generation_config = {
    "number_of_images":1 ,
    "aspect_ratio": "1:1",
}

full_image_prompt = f"{system_prompt}\n\nImage prompt: {user_prompt}"
try:
    print("Generating image... (This might take a moment)")

    image_response = genai.ImageGenerationModel('imagen-3.0-generate-002').generate_images(
        prompt=full_image_prompt,
        config=image_generation_config
    )

    image_counter = 0

    # Iterate through the generated_images list in the response
    for generated_image_part in image_response.generated_images:
        raw_image_bytes = generated_image_part.image.image_bytes

        try:
            # Use io.BytesIO to treat the bytes like a file, then open with PIL
            img = Image.open(io.BytesIO(raw_image_bytes))
            image_filename = f"generated_creature_image_{image_counter}.png" # Standard PNG output
            img.save(image_filename)
            print(f"Image saved successfully as: {image_filename}")
            image_counter += 1
        except Exception as img_e:
            print(f"Error saving image: {img_e}")

    # Final confirmation or error message
    if image_counter > 0:
        print(f"\nSuccessfully generated {image_counter} image(s).")
    else:
        print("\nNo images were generated. This might be due to safety filters, an invalid prompt, or a temporary API issue.")
        print("Please review the prompt and consider trying again with a different description.")

except Exception as e:
    print(f"An error occurred: {e}")
    print("Possible reasons:")
    print("- API key might be incorrect or have insufficient permissions for the Imagen model.")
    print("- Network connectivity issues.")
    print("- The prompt might have triggered safety filters and no image was generated.")
    print("  Try a different prompt or check Google AI Studio for specific model usage details.")