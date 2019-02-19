<?php
/**
 * Created by PhpStorm.
 * User: etiennemousse
 * Date: 2019-02-12
 * Time: 11:56
 */

namespace App\Controller;


use App\Entity\Article;
use App\Repository\ArticleRepository;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;


class EmousseBlogController extends AbstractController
{
    /**
     * @Route("/")
     */
    public function home(ArticleRepository $repo, Request $request, PaginatorInterface $paginator)
    {
        $pagination = $paginator->paginate(
            $repo->getArticleByDate(),
            $request->query->getInt('page', 1),
            3
        );
        return $this->render('article/archive.html.twig',[
            'pagination' => $pagination
        ]);
    }
    /**
     * @Route("/article/{slug}")
     */
    public function singleArticle(Article $article)
    {
        return $this->render('article/single.html.twig',[
            'article' => $article,
        ]);
    }

    /**
     * @Route("/entity")
     */
    public function entity()
    {
        $form = $this->createForm('App\Form\ArticleType');

        return $this->render('article/form.html.twig',[
            'form'=> $form->createView(),
        ]);
    }
}