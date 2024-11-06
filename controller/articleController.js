const Article = require('../models/Article');

exports.getAllArticles = async (req, res) => {
    try {
        const articles = await Article.find();
        res.status(200).json(articles);
    } catch (err) {
        res.status(500).json({ message: "error while fetching articles", err })
    }
}

exports.getArticleById = async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);
        if (!article) {
            return res.status(400).json({ message: "article not found" })
        }
        res.status(200).json(article);
    } catch (err) {
        res.status(500).json({ message: "error while fetching articles", err })
    }
}

exports.createArticle = async (req, res) => {
    try {
        const newArticle = new Article(req.body);
        const savedArticle = await newArticle.save();
        res.status(201).json(savedArticle)
    } catch (err) {
        res.status(500).json({ message: "error while writing article", err })

    }
}

exports.updateArticle = async (req, res) => {
    try {
        const updatedArticle = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedArticle) {
            return res.status(400).json({ message: "Article not found" });
        }
        res.status(200).json({ message: "Article updated successfully", updatedArticle });
    } catch (err) {
        res.status(500).json({ message: "error while updating article", err })
    }
}

exports.deleteArticle = async (req, res) => {
    try {
        const deletedArticle = await Article.findByIdAndDelete(req.params.id);
        if (!deletedArticle) {
            return res.status(400).json({ message: "article not found" });
        }
        res.status(200).json({ message: "Article deleted succssfully" });
    } catch (err) {
        res.status(500).json({ message: "error while deleting article", err })
    }
}