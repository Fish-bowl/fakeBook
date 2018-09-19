class Api::PostsController < ApplicationController
  before_action :set_app, only: [:show, :update, :destroy]
  def index
    render json: Post.all.order(created_at: :desc)
  end

  def show
    render json: @post
  end

  def create
    post = Post.create(post_params)
    if post.save
      render json: post
    else 
      render json: { errors: app.errors.full_messages.join(',')}, status: 422
    end
  end

  def update
    if @post.update(post_params)
      render json: @post 
    else 
      render json: { errors: app.errors.full_messages.join(',')}, status: 422
    end
  end

  def destroy
    @post.destroy
  end

private 
  def set_post
    @post = Post.find(params[:id])
  end

  def app_params
    params.require(:post).permit(:title, :author, :body)
  end
end
