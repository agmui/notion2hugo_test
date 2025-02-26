---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-01-12T15:12:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-01-12T15:12:00.000Z"
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

They consist of a folder, `package.xml` file, and source code

```python
      cpp_package_1/
		      ... imagine much code files here ..
          package.xml
```

</details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GCD7DRM%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T131700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDMKAWpeLInAbyg3mmRs%2F80hZ%2B0ljKLqd5kFaJlEdWxCwIhAL1atRhPunZfk3%2BYao%2FTKdcaCXrVkjaJlPlgAjFi8xrPKv8DCF0QABoMNjM3NDIzMTgzODA1IgzwItz2fu%2FasFBOq7Mq3APu4ZR5C9uANsRCxAW4NqAWm%2FauOH2PFCI2t1u0tl2tK1yWIPdaYNkaiBxhpHIHx4bZHHaKsUVTqKcGEHbc6BNOMm5LhDHhDZMQodneBLPQ4MykyJKAWZ%2B6PtQ5scn2hYwX9xxO9Af%2FGqPtRve83FnoXWP5qj%2B5LORPpVYcap7g13pec%2FyMqOcIZo3VfZF0AyJ0jaSCezD4xzAnjrhfgoZhrQ%2FyW5ucUWyBZoGxC%2B49SKv1OEVfBTDMgz5iFNaBOii252DlH%2ByEjZl2STWm9vJDldAVbc0ufPjFsVRpl5GQndtP7l4s03H1At4%2FkMLjusNGGLo0zW0EhAWQ4iBfWX261ozlxNz6DRRNem6rvmvjGJUxHtELOw2NtR7vqHAbO62BwHfiaNNdhTOUehWhJGeQ5GGEErgMSFf0%2BgxDy5WjHur90e62qq4hzXpvCPleucdJ3cklcul1VQ7Bx4M3ldCJI1%2FL49%2FPibfygRIJkRamUqSsZRV9cWEb5W5kePMpb4oP%2B%2FLnAUqUYnv4T2ZXU3iARQglEJhYLSpMrhscKOd8IRnxV7tT4ie3l42bNofe2czRGxu3C723XE2XX%2FKVRJV%2FVqPkZf%2Faew8Jgpr0cfGxSbtMIX15PNOZRjLbMTDeh%2Fy9BjqkAZxkt%2BoK5OpzJqn46ticLu4ewoXjDvCyOA75QKy7Sr%2BAcGz1f2nNKxqlht5ypbPfQbs7sCat%2Br9qsplklqvSfrf6v1Tn356Pa9Uxwf2s614t%2BoYZgVHd7D7jvU2W%2FA6TuP5xLyYPCBSrQCJ7bKU5Xx6kiLg%2BqN7hk61Q3xEtK24P8BtOv3RHb2uQHgZ3oOoRYz6woqFzWLQDIGY%2BLieclg60bYob&X-Amz-Signature=eec891aa269cbe2126990fa01c8d441ee7baacb631ac917432b60c0f573a8acf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GCD7DRM%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T131700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDMKAWpeLInAbyg3mmRs%2F80hZ%2B0ljKLqd5kFaJlEdWxCwIhAL1atRhPunZfk3%2BYao%2FTKdcaCXrVkjaJlPlgAjFi8xrPKv8DCF0QABoMNjM3NDIzMTgzODA1IgzwItz2fu%2FasFBOq7Mq3APu4ZR5C9uANsRCxAW4NqAWm%2FauOH2PFCI2t1u0tl2tK1yWIPdaYNkaiBxhpHIHx4bZHHaKsUVTqKcGEHbc6BNOMm5LhDHhDZMQodneBLPQ4MykyJKAWZ%2B6PtQ5scn2hYwX9xxO9Af%2FGqPtRve83FnoXWP5qj%2B5LORPpVYcap7g13pec%2FyMqOcIZo3VfZF0AyJ0jaSCezD4xzAnjrhfgoZhrQ%2FyW5ucUWyBZoGxC%2B49SKv1OEVfBTDMgz5iFNaBOii252DlH%2ByEjZl2STWm9vJDldAVbc0ufPjFsVRpl5GQndtP7l4s03H1At4%2FkMLjusNGGLo0zW0EhAWQ4iBfWX261ozlxNz6DRRNem6rvmvjGJUxHtELOw2NtR7vqHAbO62BwHfiaNNdhTOUehWhJGeQ5GGEErgMSFf0%2BgxDy5WjHur90e62qq4hzXpvCPleucdJ3cklcul1VQ7Bx4M3ldCJI1%2FL49%2FPibfygRIJkRamUqSsZRV9cWEb5W5kePMpb4oP%2B%2FLnAUqUYnv4T2ZXU3iARQglEJhYLSpMrhscKOd8IRnxV7tT4ie3l42bNofe2czRGxu3C723XE2XX%2FKVRJV%2FVqPkZf%2Faew8Jgpr0cfGxSbtMIX15PNOZRjLbMTDeh%2Fy9BjqkAZxkt%2BoK5OpzJqn46ticLu4ewoXjDvCyOA75QKy7Sr%2BAcGz1f2nNKxqlht5ypbPfQbs7sCat%2Br9qsplklqvSfrf6v1Tn356Pa9Uxwf2s614t%2BoYZgVHd7D7jvU2W%2FA6TuP5xLyYPCBSrQCJ7bKU5Xx6kiLg%2BqN7hk61Q3xEtK24P8BtOv3RHb2uQHgZ3oOoRYz6woqFzWLQDIGY%2BLieclg60bYob&X-Amz-Signature=976a2b69cdd508fa93ed18d18f17691df7a6cfe3dace93da28f20d603f8ad735&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GCD7DRM%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T131700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDMKAWpeLInAbyg3mmRs%2F80hZ%2B0ljKLqd5kFaJlEdWxCwIhAL1atRhPunZfk3%2BYao%2FTKdcaCXrVkjaJlPlgAjFi8xrPKv8DCF0QABoMNjM3NDIzMTgzODA1IgzwItz2fu%2FasFBOq7Mq3APu4ZR5C9uANsRCxAW4NqAWm%2FauOH2PFCI2t1u0tl2tK1yWIPdaYNkaiBxhpHIHx4bZHHaKsUVTqKcGEHbc6BNOMm5LhDHhDZMQodneBLPQ4MykyJKAWZ%2B6PtQ5scn2hYwX9xxO9Af%2FGqPtRve83FnoXWP5qj%2B5LORPpVYcap7g13pec%2FyMqOcIZo3VfZF0AyJ0jaSCezD4xzAnjrhfgoZhrQ%2FyW5ucUWyBZoGxC%2B49SKv1OEVfBTDMgz5iFNaBOii252DlH%2ByEjZl2STWm9vJDldAVbc0ufPjFsVRpl5GQndtP7l4s03H1At4%2FkMLjusNGGLo0zW0EhAWQ4iBfWX261ozlxNz6DRRNem6rvmvjGJUxHtELOw2NtR7vqHAbO62BwHfiaNNdhTOUehWhJGeQ5GGEErgMSFf0%2BgxDy5WjHur90e62qq4hzXpvCPleucdJ3cklcul1VQ7Bx4M3ldCJI1%2FL49%2FPibfygRIJkRamUqSsZRV9cWEb5W5kePMpb4oP%2B%2FLnAUqUYnv4T2ZXU3iARQglEJhYLSpMrhscKOd8IRnxV7tT4ie3l42bNofe2czRGxu3C723XE2XX%2FKVRJV%2FVqPkZf%2Faew8Jgpr0cfGxSbtMIX15PNOZRjLbMTDeh%2Fy9BjqkAZxkt%2BoK5OpzJqn46ticLu4ewoXjDvCyOA75QKy7Sr%2BAcGz1f2nNKxqlht5ypbPfQbs7sCat%2Br9qsplklqvSfrf6v1Tn356Pa9Uxwf2s614t%2BoYZgVHd7D7jvU2W%2FA6TuP5xLyYPCBSrQCJ7bKU5Xx6kiLg%2BqN7hk61Q3xEtK24P8BtOv3RHb2uQHgZ3oOoRYz6woqFzWLQDIGY%2BLieclg60bYob&X-Amz-Signature=537e019275c91b992b57fcfab777455d6f8fd26871aff96d28d1e9c5c7e31e72&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GCD7DRM%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T131700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDMKAWpeLInAbyg3mmRs%2F80hZ%2B0ljKLqd5kFaJlEdWxCwIhAL1atRhPunZfk3%2BYao%2FTKdcaCXrVkjaJlPlgAjFi8xrPKv8DCF0QABoMNjM3NDIzMTgzODA1IgzwItz2fu%2FasFBOq7Mq3APu4ZR5C9uANsRCxAW4NqAWm%2FauOH2PFCI2t1u0tl2tK1yWIPdaYNkaiBxhpHIHx4bZHHaKsUVTqKcGEHbc6BNOMm5LhDHhDZMQodneBLPQ4MykyJKAWZ%2B6PtQ5scn2hYwX9xxO9Af%2FGqPtRve83FnoXWP5qj%2B5LORPpVYcap7g13pec%2FyMqOcIZo3VfZF0AyJ0jaSCezD4xzAnjrhfgoZhrQ%2FyW5ucUWyBZoGxC%2B49SKv1OEVfBTDMgz5iFNaBOii252DlH%2ByEjZl2STWm9vJDldAVbc0ufPjFsVRpl5GQndtP7l4s03H1At4%2FkMLjusNGGLo0zW0EhAWQ4iBfWX261ozlxNz6DRRNem6rvmvjGJUxHtELOw2NtR7vqHAbO62BwHfiaNNdhTOUehWhJGeQ5GGEErgMSFf0%2BgxDy5WjHur90e62qq4hzXpvCPleucdJ3cklcul1VQ7Bx4M3ldCJI1%2FL49%2FPibfygRIJkRamUqSsZRV9cWEb5W5kePMpb4oP%2B%2FLnAUqUYnv4T2ZXU3iARQglEJhYLSpMrhscKOd8IRnxV7tT4ie3l42bNofe2czRGxu3C723XE2XX%2FKVRJV%2FVqPkZf%2Faew8Jgpr0cfGxSbtMIX15PNOZRjLbMTDeh%2Fy9BjqkAZxkt%2BoK5OpzJqn46ticLu4ewoXjDvCyOA75QKy7Sr%2BAcGz1f2nNKxqlht5ypbPfQbs7sCat%2Br9qsplklqvSfrf6v1Tn356Pa9Uxwf2s614t%2BoYZgVHd7D7jvU2W%2FA6TuP5xLyYPCBSrQCJ7bKU5Xx6kiLg%2BqN7hk61Q3xEtK24P8BtOv3RHb2uQHgZ3oOoRYz6woqFzWLQDIGY%2BLieclg60bYob&X-Amz-Signature=0834fb0e7d1f9d10eca82daa7dea1c5aff381f6d45fd40b92a59ad840a668df5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GCD7DRM%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T131700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDMKAWpeLInAbyg3mmRs%2F80hZ%2B0ljKLqd5kFaJlEdWxCwIhAL1atRhPunZfk3%2BYao%2FTKdcaCXrVkjaJlPlgAjFi8xrPKv8DCF0QABoMNjM3NDIzMTgzODA1IgzwItz2fu%2FasFBOq7Mq3APu4ZR5C9uANsRCxAW4NqAWm%2FauOH2PFCI2t1u0tl2tK1yWIPdaYNkaiBxhpHIHx4bZHHaKsUVTqKcGEHbc6BNOMm5LhDHhDZMQodneBLPQ4MykyJKAWZ%2B6PtQ5scn2hYwX9xxO9Af%2FGqPtRve83FnoXWP5qj%2B5LORPpVYcap7g13pec%2FyMqOcIZo3VfZF0AyJ0jaSCezD4xzAnjrhfgoZhrQ%2FyW5ucUWyBZoGxC%2B49SKv1OEVfBTDMgz5iFNaBOii252DlH%2ByEjZl2STWm9vJDldAVbc0ufPjFsVRpl5GQndtP7l4s03H1At4%2FkMLjusNGGLo0zW0EhAWQ4iBfWX261ozlxNz6DRRNem6rvmvjGJUxHtELOw2NtR7vqHAbO62BwHfiaNNdhTOUehWhJGeQ5GGEErgMSFf0%2BgxDy5WjHur90e62qq4hzXpvCPleucdJ3cklcul1VQ7Bx4M3ldCJI1%2FL49%2FPibfygRIJkRamUqSsZRV9cWEb5W5kePMpb4oP%2B%2FLnAUqUYnv4T2ZXU3iARQglEJhYLSpMrhscKOd8IRnxV7tT4ie3l42bNofe2czRGxu3C723XE2XX%2FKVRJV%2FVqPkZf%2Faew8Jgpr0cfGxSbtMIX15PNOZRjLbMTDeh%2Fy9BjqkAZxkt%2BoK5OpzJqn46ticLu4ewoXjDvCyOA75QKy7Sr%2BAcGz1f2nNKxqlht5ypbPfQbs7sCat%2Br9qsplklqvSfrf6v1Tn356Pa9Uxwf2s614t%2BoYZgVHd7D7jvU2W%2FA6TuP5xLyYPCBSrQCJ7bKU5Xx6kiLg%2BqN7hk61Q3xEtK24P8BtOv3RHb2uQHgZ3oOoRYz6woqFzWLQDIGY%2BLieclg60bYob&X-Amz-Signature=7f73232d7c553bcabeb3744c56385db8db6a63bf942bb20f2f2b4f0248d42127&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GCD7DRM%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T131700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDMKAWpeLInAbyg3mmRs%2F80hZ%2B0ljKLqd5kFaJlEdWxCwIhAL1atRhPunZfk3%2BYao%2FTKdcaCXrVkjaJlPlgAjFi8xrPKv8DCF0QABoMNjM3NDIzMTgzODA1IgzwItz2fu%2FasFBOq7Mq3APu4ZR5C9uANsRCxAW4NqAWm%2FauOH2PFCI2t1u0tl2tK1yWIPdaYNkaiBxhpHIHx4bZHHaKsUVTqKcGEHbc6BNOMm5LhDHhDZMQodneBLPQ4MykyJKAWZ%2B6PtQ5scn2hYwX9xxO9Af%2FGqPtRve83FnoXWP5qj%2B5LORPpVYcap7g13pec%2FyMqOcIZo3VfZF0AyJ0jaSCezD4xzAnjrhfgoZhrQ%2FyW5ucUWyBZoGxC%2B49SKv1OEVfBTDMgz5iFNaBOii252DlH%2ByEjZl2STWm9vJDldAVbc0ufPjFsVRpl5GQndtP7l4s03H1At4%2FkMLjusNGGLo0zW0EhAWQ4iBfWX261ozlxNz6DRRNem6rvmvjGJUxHtELOw2NtR7vqHAbO62BwHfiaNNdhTOUehWhJGeQ5GGEErgMSFf0%2BgxDy5WjHur90e62qq4hzXpvCPleucdJ3cklcul1VQ7Bx4M3ldCJI1%2FL49%2FPibfygRIJkRamUqSsZRV9cWEb5W5kePMpb4oP%2B%2FLnAUqUYnv4T2ZXU3iARQglEJhYLSpMrhscKOd8IRnxV7tT4ie3l42bNofe2czRGxu3C723XE2XX%2FKVRJV%2FVqPkZf%2Faew8Jgpr0cfGxSbtMIX15PNOZRjLbMTDeh%2Fy9BjqkAZxkt%2BoK5OpzJqn46ticLu4ewoXjDvCyOA75QKy7Sr%2BAcGz1f2nNKxqlht5ypbPfQbs7sCat%2Br9qsplklqvSfrf6v1Tn356Pa9Uxwf2s614t%2BoYZgVHd7D7jvU2W%2FA6TuP5xLyYPCBSrQCJ7bKU5Xx6kiLg%2BqN7hk61Q3xEtK24P8BtOv3RHb2uQHgZ3oOoRYz6woqFzWLQDIGY%2BLieclg60bYob&X-Amz-Signature=fe322fcc05733f9f46cd61d6cae039e0a78a8c61d88e8de8063c3d71dc20cf77&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GCD7DRM%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T131700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDMKAWpeLInAbyg3mmRs%2F80hZ%2B0ljKLqd5kFaJlEdWxCwIhAL1atRhPunZfk3%2BYao%2FTKdcaCXrVkjaJlPlgAjFi8xrPKv8DCF0QABoMNjM3NDIzMTgzODA1IgzwItz2fu%2FasFBOq7Mq3APu4ZR5C9uANsRCxAW4NqAWm%2FauOH2PFCI2t1u0tl2tK1yWIPdaYNkaiBxhpHIHx4bZHHaKsUVTqKcGEHbc6BNOMm5LhDHhDZMQodneBLPQ4MykyJKAWZ%2B6PtQ5scn2hYwX9xxO9Af%2FGqPtRve83FnoXWP5qj%2B5LORPpVYcap7g13pec%2FyMqOcIZo3VfZF0AyJ0jaSCezD4xzAnjrhfgoZhrQ%2FyW5ucUWyBZoGxC%2B49SKv1OEVfBTDMgz5iFNaBOii252DlH%2ByEjZl2STWm9vJDldAVbc0ufPjFsVRpl5GQndtP7l4s03H1At4%2FkMLjusNGGLo0zW0EhAWQ4iBfWX261ozlxNz6DRRNem6rvmvjGJUxHtELOw2NtR7vqHAbO62BwHfiaNNdhTOUehWhJGeQ5GGEErgMSFf0%2BgxDy5WjHur90e62qq4hzXpvCPleucdJ3cklcul1VQ7Bx4M3ldCJI1%2FL49%2FPibfygRIJkRamUqSsZRV9cWEb5W5kePMpb4oP%2B%2FLnAUqUYnv4T2ZXU3iARQglEJhYLSpMrhscKOd8IRnxV7tT4ie3l42bNofe2czRGxu3C723XE2XX%2FKVRJV%2FVqPkZf%2Faew8Jgpr0cfGxSbtMIX15PNOZRjLbMTDeh%2Fy9BjqkAZxkt%2BoK5OpzJqn46ticLu4ewoXjDvCyOA75QKy7Sr%2BAcGz1f2nNKxqlht5ypbPfQbs7sCat%2Br9qsplklqvSfrf6v1Tn356Pa9Uxwf2s614t%2BoYZgVHd7D7jvU2W%2FA6TuP5xLyYPCBSrQCJ7bKU5Xx6kiLg%2BqN7hk61Q3xEtK24P8BtOv3RHb2uQHgZ3oOoRYz6woqFzWLQDIGY%2BLieclg60bYob&X-Amz-Signature=33a0fd286be7a2eb94de067ef08b360845ce76da63ff04f6f1ab8bf1cce6aab6&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
