<?php
/**
 * Created by PhpStorm.
 * User: etiennemousse
 * Date: 2019-02-12
 * Time: 11:56
 */

namespace App\Controller;


use App\Entity\Article;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;


class EmousseBlogController extends AbstractController
{
    /**
     * @Route("/")
     */
    public function home()
    {
        return $this->render('base.html.twig');
    }
    /**
     * @Route("/article/{id}")
     */
    public function singleArticle(Article $article)
    {
        return $this->render('article/single.html.twig',[
            'article' => $article,
        ]);
    }
}