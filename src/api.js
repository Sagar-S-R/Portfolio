import { Client, Databases, ID } from 'appwrite';

// Initialize Appwrite client
const client = new Client();

const ENDPOINT = import.meta.env.VITE_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1';
const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID || 'demo-project';
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID || 'demo-db';
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID || 'demo-collection';

// Only initialize if we have valid credentials
let isConfigured = false;
try {
    if (PROJECT_ID !== 'demo-project') {
        client
            .setEndpoint(ENDPOINT)
            .setProject(PROJECT_ID);
        isConfigured = true;
    }
} catch (error) {
    console.warn('Appwrite configuration incomplete:', error);
}

// Initialize database
const databases = isConfigured ? new Databases(client) : null;

// Function to create a new message document
export const createMessage = async (messageData) => {
    if (!isConfigured || !databases) {
        console.warn('Appwrite not configured. Message not sent:', messageData);
        return { 
            success: true, 
            message: 'Demo mode - message would be sent in production' 
        };
    }
    
    try {
        const { name, email, message } = messageData;
        
        const document = await databases.createDocument(
            DATABASE_ID,
            COLLECTION_ID,
            ID.unique(),
            {
                name,
                email,
                message,
                timestamp: new Date().toISOString()
            }
        );
        
        return { success: true, document };
    } catch (error) {
        console.error('Error creating message:', error);
        return { success: false, error: error.message };
    }
};

// Export the client and databases for other uses if needed
export { client, databases, DATABASE_ID, COLLECTION_ID };
