import { Router } from 'express';
import axios from 'axios';

const router = Router();
const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

router.get('/posts', async (req, res) => {
    console.log("accessToken: ", accessToken); // this is undefined
    console.log("Fetching Instagram posts");
    try {
        const response = await axios.get(`https://graph.instagram.com/me/media`, {
            params: {
                fields: 'id,caption,media_type,media_url,thumbnail_url,permalink,children{media_type,media_url,thumbnail_url}',
                access_token: accessToken,
            },
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching Instagram posts:', error);
        res.status(500).json({ error: 'Failed to fetch Instagram posts' });
    }
});

export default router;