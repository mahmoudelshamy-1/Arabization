   Arabization 
Arabization is a FastAPI-based web application that translates Word documents (.docx) into Modern Standard Arabic using OpenAI models.
The system allows users to upload a Word file, processes each paragraph individually, translates the content while preserving formatting as much as possible, and generates a new translated Word document ready for download.
   How It Works
The user uploads a .docx file.
The application reads the document paragraphs using python-docx.
Each paragraph is sent to the OpenAI model (gpt-4o-mini) for translation.
A new Word document is generated with the translated Arabic content.
The translated file becomes available for download.
  Technologies & Libraries
Python – Core programming language
FastAPI – Backend web framework
OpenAI (gpt-4o-mini) – AI translation model
pydantic_ai – AI agent handling
python-docx – Reading & writing Word documents
Uvicorn – ASGI server
python-dotenv – Environment variable management
