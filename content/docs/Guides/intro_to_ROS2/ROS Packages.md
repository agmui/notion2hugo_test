---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 145
toc: false
icon: ""
---

**official guide:** [https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html](https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html)

So far we have made multiple files and our folder is getting messy.

Let's structure our project by using ROS Packages.

<details>
      <summary>What are ROS Packages?</summary>
      ROS Packages are, as the name implies, packages of code that are highly sharable between ROS developers.
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL5UPZQI%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T190759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIB0Z7%2FIlJ1FaP2hLo23HAFCDU7hx%2FXNcuT8RmU6Nv8wjAiAYaBcbfmJITQk5b0slan9uOjQckGE6qX1C2NZGIUfYmyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMW0JbS9x4WZ4mOXNDKtwDPQNPubua0h%2B45kCC4fj%2BqokTuZkF%2BevcheDFGzSjWubrtc6Ncri6auOLfWjxc3hHlbxH66m%2FdAfyDP5pu73oa%2BDFStM7jvXSnfhJKh7UEjSg%2F%2BoZ6cp9AquRvnC6wzu5kvjva8Wo2%2FrUOmJWYp8Ji82O0dKrZnSFqv6lOGqaPWgqVTOX61URKa0Y66fbDho6Me6Qa49bnGeMyf%2FB5VoHV%2FugvciK%2Bt%2F%2FcDHUuJDavdR8gqwV0nTbY9RjoGweQUFs0Pd4UI2FWqkid5FMvGKY75DhgTtKE%2FR1Lk5V84sDr44kJLV6A8wIPIhKKPvRKlXWXnPdS0GZRQSUazsqWiAeKv0CO6cIJasAp9sEO1F6xMkjE0Km1mIZAcZKNA2IatF3Nsuwxz%2F5WiPuWFpAlG9dH%2FBi6vHIFCudM7cfABvZsMIcZw0zTwyfQBcVHhLNchg%2FhwtCuNmqh9o8f6%2Fpi%2BTIkrMpCh4X9oR94Lh3mYDUqaic3qqkfXIvWb9vnKokb9sxF2MAooU2vhBTqXMrANy554Trg1emzAozWDfOmM7sCwjzrm9riDHOXOD3oXvaBxp14obrPKjOoRgccH43W4aVilO4CKu7M8JjRLusgdgt4LOxwG6tcofmJkv%2BYVkw85WwwwY6pgH3Tonc20bzWqi6bX3qwa3fr0AITA5Fcse7v4QNzdyoerAP6xE99nL3T14jBAwH8T0red0EYV1kwg06RJ2RhLrYb%2BsEeYOQZ6PiSwkQ0LznmbYAhECoaSduWwibTvlz6j%2BNYHMg4V8OgRSvXuLATqZfFXLJGmH1tTmJOe0DltloY%2FbgdBUMpRuRTolSmq0RGx%2BBiYmzkldITCmnX4l8wYN91rgDfSbY&X-Amz-Signature=7b1157565fce16d1bea9f780600f33a97c294cc5c275fdd75a3418beea895ad3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Then inside this `src` folder is where we put all of our packages.

```python
ros_ws/
    src/
      cpp_package_1/
		      ...
          package.xml

      py_package_1/
		      ...
          package.xml

      ...
      cpp_package_n/
		      ...
          package.xml

```

<details>

<summary>package types</summary>

packages can be either `C++` or python.

the intern file structure is different for each but for this guide we will stick to creating python packages

</details>

# Creating a package

Let's go to the `src` folder to create the package

```bash
cd ros2_ws/src
```

to create a package we use this command:

```bash
ros2 pkg create --build-type ament_python --license Apache-2.0 --node-name my_node my_package
```

a bunch of text should have been printed out but the result should look something like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL5UPZQI%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T190759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIB0Z7%2FIlJ1FaP2hLo23HAFCDU7hx%2FXNcuT8RmU6Nv8wjAiAYaBcbfmJITQk5b0slan9uOjQckGE6qX1C2NZGIUfYmyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMW0JbS9x4WZ4mOXNDKtwDPQNPubua0h%2B45kCC4fj%2BqokTuZkF%2BevcheDFGzSjWubrtc6Ncri6auOLfWjxc3hHlbxH66m%2FdAfyDP5pu73oa%2BDFStM7jvXSnfhJKh7UEjSg%2F%2BoZ6cp9AquRvnC6wzu5kvjva8Wo2%2FrUOmJWYp8Ji82O0dKrZnSFqv6lOGqaPWgqVTOX61URKa0Y66fbDho6Me6Qa49bnGeMyf%2FB5VoHV%2FugvciK%2Bt%2F%2FcDHUuJDavdR8gqwV0nTbY9RjoGweQUFs0Pd4UI2FWqkid5FMvGKY75DhgTtKE%2FR1Lk5V84sDr44kJLV6A8wIPIhKKPvRKlXWXnPdS0GZRQSUazsqWiAeKv0CO6cIJasAp9sEO1F6xMkjE0Km1mIZAcZKNA2IatF3Nsuwxz%2F5WiPuWFpAlG9dH%2FBi6vHIFCudM7cfABvZsMIcZw0zTwyfQBcVHhLNchg%2FhwtCuNmqh9o8f6%2Fpi%2BTIkrMpCh4X9oR94Lh3mYDUqaic3qqkfXIvWb9vnKokb9sxF2MAooU2vhBTqXMrANy554Trg1emzAozWDfOmM7sCwjzrm9riDHOXOD3oXvaBxp14obrPKjOoRgccH43W4aVilO4CKu7M8JjRLusgdgt4LOxwG6tcofmJkv%2BYVkw85WwwwY6pgH3Tonc20bzWqi6bX3qwa3fr0AITA5Fcse7v4QNzdyoerAP6xE99nL3T14jBAwH8T0red0EYV1kwg06RJ2RhLrYb%2BsEeYOQZ6PiSwkQ0LznmbYAhECoaSduWwibTvlz6j%2BNYHMg4V8OgRSvXuLATqZfFXLJGmH1tTmJOe0DltloY%2FbgdBUMpRuRTolSmq0RGx%2BBiYmzkldITCmnX4l8wYN91rgDfSbY&X-Amz-Signature=bb86ba5c5ba65d42257c7b34138e61216c9c8a07a82b4ccf2b102c62fd90c1ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL5UPZQI%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T190759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIB0Z7%2FIlJ1FaP2hLo23HAFCDU7hx%2FXNcuT8RmU6Nv8wjAiAYaBcbfmJITQk5b0slan9uOjQckGE6qX1C2NZGIUfYmyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMW0JbS9x4WZ4mOXNDKtwDPQNPubua0h%2B45kCC4fj%2BqokTuZkF%2BevcheDFGzSjWubrtc6Ncri6auOLfWjxc3hHlbxH66m%2FdAfyDP5pu73oa%2BDFStM7jvXSnfhJKh7UEjSg%2F%2BoZ6cp9AquRvnC6wzu5kvjva8Wo2%2FrUOmJWYp8Ji82O0dKrZnSFqv6lOGqaPWgqVTOX61URKa0Y66fbDho6Me6Qa49bnGeMyf%2FB5VoHV%2FugvciK%2Bt%2F%2FcDHUuJDavdR8gqwV0nTbY9RjoGweQUFs0Pd4UI2FWqkid5FMvGKY75DhgTtKE%2FR1Lk5V84sDr44kJLV6A8wIPIhKKPvRKlXWXnPdS0GZRQSUazsqWiAeKv0CO6cIJasAp9sEO1F6xMkjE0Km1mIZAcZKNA2IatF3Nsuwxz%2F5WiPuWFpAlG9dH%2FBi6vHIFCudM7cfABvZsMIcZw0zTwyfQBcVHhLNchg%2FhwtCuNmqh9o8f6%2Fpi%2BTIkrMpCh4X9oR94Lh3mYDUqaic3qqkfXIvWb9vnKokb9sxF2MAooU2vhBTqXMrANy554Trg1emzAozWDfOmM7sCwjzrm9riDHOXOD3oXvaBxp14obrPKjOoRgccH43W4aVilO4CKu7M8JjRLusgdgt4LOxwG6tcofmJkv%2BYVkw85WwwwY6pgH3Tonc20bzWqi6bX3qwa3fr0AITA5Fcse7v4QNzdyoerAP6xE99nL3T14jBAwH8T0red0EYV1kwg06RJ2RhLrYb%2BsEeYOQZ6PiSwkQ0LznmbYAhECoaSduWwibTvlz6j%2BNYHMg4V8OgRSvXuLATqZfFXLJGmH1tTmJOe0DltloY%2FbgdBUMpRuRTolSmq0RGx%2BBiYmzkldITCmnX4l8wYN91rgDfSbY&X-Amz-Signature=00399b9056d71703e25bd0e26a40d62cead72551dd97a3d481edcdc29bc9253e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL5UPZQI%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T190759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIB0Z7%2FIlJ1FaP2hLo23HAFCDU7hx%2FXNcuT8RmU6Nv8wjAiAYaBcbfmJITQk5b0slan9uOjQckGE6qX1C2NZGIUfYmyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMW0JbS9x4WZ4mOXNDKtwDPQNPubua0h%2B45kCC4fj%2BqokTuZkF%2BevcheDFGzSjWubrtc6Ncri6auOLfWjxc3hHlbxH66m%2FdAfyDP5pu73oa%2BDFStM7jvXSnfhJKh7UEjSg%2F%2BoZ6cp9AquRvnC6wzu5kvjva8Wo2%2FrUOmJWYp8Ji82O0dKrZnSFqv6lOGqaPWgqVTOX61URKa0Y66fbDho6Me6Qa49bnGeMyf%2FB5VoHV%2FugvciK%2Bt%2F%2FcDHUuJDavdR8gqwV0nTbY9RjoGweQUFs0Pd4UI2FWqkid5FMvGKY75DhgTtKE%2FR1Lk5V84sDr44kJLV6A8wIPIhKKPvRKlXWXnPdS0GZRQSUazsqWiAeKv0CO6cIJasAp9sEO1F6xMkjE0Km1mIZAcZKNA2IatF3Nsuwxz%2F5WiPuWFpAlG9dH%2FBi6vHIFCudM7cfABvZsMIcZw0zTwyfQBcVHhLNchg%2FhwtCuNmqh9o8f6%2Fpi%2BTIkrMpCh4X9oR94Lh3mYDUqaic3qqkfXIvWb9vnKokb9sxF2MAooU2vhBTqXMrANy554Trg1emzAozWDfOmM7sCwjzrm9riDHOXOD3oXvaBxp14obrPKjOoRgccH43W4aVilO4CKu7M8JjRLusgdgt4LOxwG6tcofmJkv%2BYVkw85WwwwY6pgH3Tonc20bzWqi6bX3qwa3fr0AITA5Fcse7v4QNzdyoerAP6xE99nL3T14jBAwH8T0red0EYV1kwg06RJ2RhLrYb%2BsEeYOQZ6PiSwkQ0LznmbYAhECoaSduWwibTvlz6j%2BNYHMg4V8OgRSvXuLATqZfFXLJGmH1tTmJOe0DltloY%2FbgdBUMpRuRTolSmq0RGx%2BBiYmzkldITCmnX4l8wYN91rgDfSbY&X-Amz-Signature=23d2dbfa999c3a2f08d4ac11254b78f31320afcde4a24fc83d86b342edb1b85a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL5UPZQI%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T190759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIB0Z7%2FIlJ1FaP2hLo23HAFCDU7hx%2FXNcuT8RmU6Nv8wjAiAYaBcbfmJITQk5b0slan9uOjQckGE6qX1C2NZGIUfYmyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMW0JbS9x4WZ4mOXNDKtwDPQNPubua0h%2B45kCC4fj%2BqokTuZkF%2BevcheDFGzSjWubrtc6Ncri6auOLfWjxc3hHlbxH66m%2FdAfyDP5pu73oa%2BDFStM7jvXSnfhJKh7UEjSg%2F%2BoZ6cp9AquRvnC6wzu5kvjva8Wo2%2FrUOmJWYp8Ji82O0dKrZnSFqv6lOGqaPWgqVTOX61URKa0Y66fbDho6Me6Qa49bnGeMyf%2FB5VoHV%2FugvciK%2Bt%2F%2FcDHUuJDavdR8gqwV0nTbY9RjoGweQUFs0Pd4UI2FWqkid5FMvGKY75DhgTtKE%2FR1Lk5V84sDr44kJLV6A8wIPIhKKPvRKlXWXnPdS0GZRQSUazsqWiAeKv0CO6cIJasAp9sEO1F6xMkjE0Km1mIZAcZKNA2IatF3Nsuwxz%2F5WiPuWFpAlG9dH%2FBi6vHIFCudM7cfABvZsMIcZw0zTwyfQBcVHhLNchg%2FhwtCuNmqh9o8f6%2Fpi%2BTIkrMpCh4X9oR94Lh3mYDUqaic3qqkfXIvWb9vnKokb9sxF2MAooU2vhBTqXMrANy554Trg1emzAozWDfOmM7sCwjzrm9riDHOXOD3oXvaBxp14obrPKjOoRgccH43W4aVilO4CKu7M8JjRLusgdgt4LOxwG6tcofmJkv%2BYVkw85WwwwY6pgH3Tonc20bzWqi6bX3qwa3fr0AITA5Fcse7v4QNzdyoerAP6xE99nL3T14jBAwH8T0red0EYV1kwg06RJ2RhLrYb%2BsEeYOQZ6PiSwkQ0LznmbYAhECoaSduWwibTvlz6j%2BNYHMg4V8OgRSvXuLATqZfFXLJGmH1tTmJOe0DltloY%2FbgdBUMpRuRTolSmq0RGx%2BBiYmzkldITCmnX4l8wYN91rgDfSbY&X-Amz-Signature=7478d354bb7b84a158ceb92f5ddcb9de9fec2aa9d0a94d3dec6d0a658a4f9aaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL5UPZQI%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T190759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIB0Z7%2FIlJ1FaP2hLo23HAFCDU7hx%2FXNcuT8RmU6Nv8wjAiAYaBcbfmJITQk5b0slan9uOjQckGE6qX1C2NZGIUfYmyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMW0JbS9x4WZ4mOXNDKtwDPQNPubua0h%2B45kCC4fj%2BqokTuZkF%2BevcheDFGzSjWubrtc6Ncri6auOLfWjxc3hHlbxH66m%2FdAfyDP5pu73oa%2BDFStM7jvXSnfhJKh7UEjSg%2F%2BoZ6cp9AquRvnC6wzu5kvjva8Wo2%2FrUOmJWYp8Ji82O0dKrZnSFqv6lOGqaPWgqVTOX61URKa0Y66fbDho6Me6Qa49bnGeMyf%2FB5VoHV%2FugvciK%2Bt%2F%2FcDHUuJDavdR8gqwV0nTbY9RjoGweQUFs0Pd4UI2FWqkid5FMvGKY75DhgTtKE%2FR1Lk5V84sDr44kJLV6A8wIPIhKKPvRKlXWXnPdS0GZRQSUazsqWiAeKv0CO6cIJasAp9sEO1F6xMkjE0Km1mIZAcZKNA2IatF3Nsuwxz%2F5WiPuWFpAlG9dH%2FBi6vHIFCudM7cfABvZsMIcZw0zTwyfQBcVHhLNchg%2FhwtCuNmqh9o8f6%2Fpi%2BTIkrMpCh4X9oR94Lh3mYDUqaic3qqkfXIvWb9vnKokb9sxF2MAooU2vhBTqXMrANy554Trg1emzAozWDfOmM7sCwjzrm9riDHOXOD3oXvaBxp14obrPKjOoRgccH43W4aVilO4CKu7M8JjRLusgdgt4LOxwG6tcofmJkv%2BYVkw85WwwwY6pgH3Tonc20bzWqi6bX3qwa3fr0AITA5Fcse7v4QNzdyoerAP6xE99nL3T14jBAwH8T0red0EYV1kwg06RJ2RhLrYb%2BsEeYOQZ6PiSwkQ0LznmbYAhECoaSduWwibTvlz6j%2BNYHMg4V8OgRSvXuLATqZfFXLJGmH1tTmJOe0DltloY%2FbgdBUMpRuRTolSmq0RGx%2BBiYmzkldITCmnX4l8wYN91rgDfSbY&X-Amz-Signature=c53a57cae790d6d21a726ee0baf9de4d47d728b1848604d3b7dfe152a752c0b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL5UPZQI%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T190759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIB0Z7%2FIlJ1FaP2hLo23HAFCDU7hx%2FXNcuT8RmU6Nv8wjAiAYaBcbfmJITQk5b0slan9uOjQckGE6qX1C2NZGIUfYmyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMW0JbS9x4WZ4mOXNDKtwDPQNPubua0h%2B45kCC4fj%2BqokTuZkF%2BevcheDFGzSjWubrtc6Ncri6auOLfWjxc3hHlbxH66m%2FdAfyDP5pu73oa%2BDFStM7jvXSnfhJKh7UEjSg%2F%2BoZ6cp9AquRvnC6wzu5kvjva8Wo2%2FrUOmJWYp8Ji82O0dKrZnSFqv6lOGqaPWgqVTOX61URKa0Y66fbDho6Me6Qa49bnGeMyf%2FB5VoHV%2FugvciK%2Bt%2F%2FcDHUuJDavdR8gqwV0nTbY9RjoGweQUFs0Pd4UI2FWqkid5FMvGKY75DhgTtKE%2FR1Lk5V84sDr44kJLV6A8wIPIhKKPvRKlXWXnPdS0GZRQSUazsqWiAeKv0CO6cIJasAp9sEO1F6xMkjE0Km1mIZAcZKNA2IatF3Nsuwxz%2F5WiPuWFpAlG9dH%2FBi6vHIFCudM7cfABvZsMIcZw0zTwyfQBcVHhLNchg%2FhwtCuNmqh9o8f6%2Fpi%2BTIkrMpCh4X9oR94Lh3mYDUqaic3qqkfXIvWb9vnKokb9sxF2MAooU2vhBTqXMrANy554Trg1emzAozWDfOmM7sCwjzrm9riDHOXOD3oXvaBxp14obrPKjOoRgccH43W4aVilO4CKu7M8JjRLusgdgt4LOxwG6tcofmJkv%2BYVkw85WwwwY6pgH3Tonc20bzWqi6bX3qwa3fr0AITA5Fcse7v4QNzdyoerAP6xE99nL3T14jBAwH8T0red0EYV1kwg06RJ2RhLrYb%2BsEeYOQZ6PiSwkQ0LznmbYAhECoaSduWwibTvlz6j%2BNYHMg4V8OgRSvXuLATqZfFXLJGmH1tTmJOe0DltloY%2FbgdBUMpRuRTolSmq0RGx%2BBiYmzkldITCmnX4l8wYN91rgDfSbY&X-Amz-Signature=0d7b0496ed577b6a1f31dec43ea1c8f62dbd823101a26061c0ab1d1f32c9b407&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
