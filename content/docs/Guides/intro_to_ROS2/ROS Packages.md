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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HNBQZJT%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDiMKytz%2FbNNtlYaDCvQbUbSt44owfroj97XE2%2FLVsPTwIhAKQSALQp7oUi2VkI%2BYuQTLorQFmANttJad8aqlZeKIBeKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1eZ7fd5a405mNIDsq3AORxrubIj8uAaZjjBmmgBwKaqgHOCokE1o50C4qPO5jEh5qPWFAyCN7QPJLZpZ1Sex8iQLcGS%2FVgjmH%2BxNvhqp1J15wejhREKC6POLLUmgzb49Rk4PuucAKTJlxEWx3ZUhL7TNPJZVP2FPjSP6X0aLz0elHuS%2FHf6DxuZHogaKwLYjBj76mh%2B4xni69ZfMVWK7h%2FdTKsS1sqcAakFYuSG1kA77av5QzouqNuKKbEj5ZBYIyB1s4Vdyq%2B0OozlH9T41Ni72H0dNA8FuxehpbZLxVTqhgAeqG6JTdcopB1Ccilt2%2F8Ekm2BSsTkSO4hMdm9DhQVqWjNRfOWQWnI2vobtnXPPk3aCesFy6umoDNKQWPhpqOSJnkDJqZ0%2FD%2FO1j5AYpM39yuv%2BlhBqY3MstebbxUn9dS%2B4tRbkOR6eS6wTUfLHPAfkCOswKawvJMzCa6QalR64tREE5v0D0Ol1RAa9xst7fjhHnfQ3XcgFhWr6dUeC5smBJQbVQxmWswdU0OiV2AhybzPvIkEZQM04H%2FrnmPp9VZnPRCAvIAKIbBN6rLVIHGG2sh2txYIiNgLqwYCQLaf1pIHMF25w1kXz19mzaYY%2Bw%2FuxI2DU%2FWiFuwpCoyyfxPotWDuun3Qz9wTCP8eW%2FBjqkAVDwq4xAZyFXr08d4kYwxLUDZJN5b%2Ftungan3VxAaAJeSaAHpHeLjU%2BSD%2BhY3A80B18EN84J1DgoHLr1Zoxkx0zuq%2BeDv5VKOdHfOo7r2JLmcUM4JSHBEs9W4kP7QZ2pBM640ydWkuYx60gBe8iHR5E9%2BBTLil5gaS8J0ef%2B3QoPAbBhyUDARLGO4KI4YUPIvdM2Utj8voyEmwz%2F4Czl6H8wkbAk&X-Amz-Signature=769b193e7ee931860e380997635c43c3558ebae8952ae03d49632180b34a9474&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HNBQZJT%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDiMKytz%2FbNNtlYaDCvQbUbSt44owfroj97XE2%2FLVsPTwIhAKQSALQp7oUi2VkI%2BYuQTLorQFmANttJad8aqlZeKIBeKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1eZ7fd5a405mNIDsq3AORxrubIj8uAaZjjBmmgBwKaqgHOCokE1o50C4qPO5jEh5qPWFAyCN7QPJLZpZ1Sex8iQLcGS%2FVgjmH%2BxNvhqp1J15wejhREKC6POLLUmgzb49Rk4PuucAKTJlxEWx3ZUhL7TNPJZVP2FPjSP6X0aLz0elHuS%2FHf6DxuZHogaKwLYjBj76mh%2B4xni69ZfMVWK7h%2FdTKsS1sqcAakFYuSG1kA77av5QzouqNuKKbEj5ZBYIyB1s4Vdyq%2B0OozlH9T41Ni72H0dNA8FuxehpbZLxVTqhgAeqG6JTdcopB1Ccilt2%2F8Ekm2BSsTkSO4hMdm9DhQVqWjNRfOWQWnI2vobtnXPPk3aCesFy6umoDNKQWPhpqOSJnkDJqZ0%2FD%2FO1j5AYpM39yuv%2BlhBqY3MstebbxUn9dS%2B4tRbkOR6eS6wTUfLHPAfkCOswKawvJMzCa6QalR64tREE5v0D0Ol1RAa9xst7fjhHnfQ3XcgFhWr6dUeC5smBJQbVQxmWswdU0OiV2AhybzPvIkEZQM04H%2FrnmPp9VZnPRCAvIAKIbBN6rLVIHGG2sh2txYIiNgLqwYCQLaf1pIHMF25w1kXz19mzaYY%2Bw%2FuxI2DU%2FWiFuwpCoyyfxPotWDuun3Qz9wTCP8eW%2FBjqkAVDwq4xAZyFXr08d4kYwxLUDZJN5b%2Ftungan3VxAaAJeSaAHpHeLjU%2BSD%2BhY3A80B18EN84J1DgoHLr1Zoxkx0zuq%2BeDv5VKOdHfOo7r2JLmcUM4JSHBEs9W4kP7QZ2pBM640ydWkuYx60gBe8iHR5E9%2BBTLil5gaS8J0ef%2B3QoPAbBhyUDARLGO4KI4YUPIvdM2Utj8voyEmwz%2F4Czl6H8wkbAk&X-Amz-Signature=40f472a56a3ec943f6f271ca138304543953114d428993ff67f1e3ee0bf1a4fa&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HNBQZJT%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDiMKytz%2FbNNtlYaDCvQbUbSt44owfroj97XE2%2FLVsPTwIhAKQSALQp7oUi2VkI%2BYuQTLorQFmANttJad8aqlZeKIBeKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1eZ7fd5a405mNIDsq3AORxrubIj8uAaZjjBmmgBwKaqgHOCokE1o50C4qPO5jEh5qPWFAyCN7QPJLZpZ1Sex8iQLcGS%2FVgjmH%2BxNvhqp1J15wejhREKC6POLLUmgzb49Rk4PuucAKTJlxEWx3ZUhL7TNPJZVP2FPjSP6X0aLz0elHuS%2FHf6DxuZHogaKwLYjBj76mh%2B4xni69ZfMVWK7h%2FdTKsS1sqcAakFYuSG1kA77av5QzouqNuKKbEj5ZBYIyB1s4Vdyq%2B0OozlH9T41Ni72H0dNA8FuxehpbZLxVTqhgAeqG6JTdcopB1Ccilt2%2F8Ekm2BSsTkSO4hMdm9DhQVqWjNRfOWQWnI2vobtnXPPk3aCesFy6umoDNKQWPhpqOSJnkDJqZ0%2FD%2FO1j5AYpM39yuv%2BlhBqY3MstebbxUn9dS%2B4tRbkOR6eS6wTUfLHPAfkCOswKawvJMzCa6QalR64tREE5v0D0Ol1RAa9xst7fjhHnfQ3XcgFhWr6dUeC5smBJQbVQxmWswdU0OiV2AhybzPvIkEZQM04H%2FrnmPp9VZnPRCAvIAKIbBN6rLVIHGG2sh2txYIiNgLqwYCQLaf1pIHMF25w1kXz19mzaYY%2Bw%2FuxI2DU%2FWiFuwpCoyyfxPotWDuun3Qz9wTCP8eW%2FBjqkAVDwq4xAZyFXr08d4kYwxLUDZJN5b%2Ftungan3VxAaAJeSaAHpHeLjU%2BSD%2BhY3A80B18EN84J1DgoHLr1Zoxkx0zuq%2BeDv5VKOdHfOo7r2JLmcUM4JSHBEs9W4kP7QZ2pBM640ydWkuYx60gBe8iHR5E9%2BBTLil5gaS8J0ef%2B3QoPAbBhyUDARLGO4KI4YUPIvdM2Utj8voyEmwz%2F4Czl6H8wkbAk&X-Amz-Signature=dd9c9c25241f27f66a6ea5b9670de9df43b6c68b712a5e6d1fcfb30a47e08586&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HNBQZJT%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDiMKytz%2FbNNtlYaDCvQbUbSt44owfroj97XE2%2FLVsPTwIhAKQSALQp7oUi2VkI%2BYuQTLorQFmANttJad8aqlZeKIBeKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1eZ7fd5a405mNIDsq3AORxrubIj8uAaZjjBmmgBwKaqgHOCokE1o50C4qPO5jEh5qPWFAyCN7QPJLZpZ1Sex8iQLcGS%2FVgjmH%2BxNvhqp1J15wejhREKC6POLLUmgzb49Rk4PuucAKTJlxEWx3ZUhL7TNPJZVP2FPjSP6X0aLz0elHuS%2FHf6DxuZHogaKwLYjBj76mh%2B4xni69ZfMVWK7h%2FdTKsS1sqcAakFYuSG1kA77av5QzouqNuKKbEj5ZBYIyB1s4Vdyq%2B0OozlH9T41Ni72H0dNA8FuxehpbZLxVTqhgAeqG6JTdcopB1Ccilt2%2F8Ekm2BSsTkSO4hMdm9DhQVqWjNRfOWQWnI2vobtnXPPk3aCesFy6umoDNKQWPhpqOSJnkDJqZ0%2FD%2FO1j5AYpM39yuv%2BlhBqY3MstebbxUn9dS%2B4tRbkOR6eS6wTUfLHPAfkCOswKawvJMzCa6QalR64tREE5v0D0Ol1RAa9xst7fjhHnfQ3XcgFhWr6dUeC5smBJQbVQxmWswdU0OiV2AhybzPvIkEZQM04H%2FrnmPp9VZnPRCAvIAKIbBN6rLVIHGG2sh2txYIiNgLqwYCQLaf1pIHMF25w1kXz19mzaYY%2Bw%2FuxI2DU%2FWiFuwpCoyyfxPotWDuun3Qz9wTCP8eW%2FBjqkAVDwq4xAZyFXr08d4kYwxLUDZJN5b%2Ftungan3VxAaAJeSaAHpHeLjU%2BSD%2BhY3A80B18EN84J1DgoHLr1Zoxkx0zuq%2BeDv5VKOdHfOo7r2JLmcUM4JSHBEs9W4kP7QZ2pBM640ydWkuYx60gBe8iHR5E9%2BBTLil5gaS8J0ef%2B3QoPAbBhyUDARLGO4KI4YUPIvdM2Utj8voyEmwz%2F4Czl6H8wkbAk&X-Amz-Signature=79bf5a10984ad81790dda7200d5f60f95b87b8b75a0507ec010d59826ffe94bc&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HNBQZJT%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDiMKytz%2FbNNtlYaDCvQbUbSt44owfroj97XE2%2FLVsPTwIhAKQSALQp7oUi2VkI%2BYuQTLorQFmANttJad8aqlZeKIBeKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1eZ7fd5a405mNIDsq3AORxrubIj8uAaZjjBmmgBwKaqgHOCokE1o50C4qPO5jEh5qPWFAyCN7QPJLZpZ1Sex8iQLcGS%2FVgjmH%2BxNvhqp1J15wejhREKC6POLLUmgzb49Rk4PuucAKTJlxEWx3ZUhL7TNPJZVP2FPjSP6X0aLz0elHuS%2FHf6DxuZHogaKwLYjBj76mh%2B4xni69ZfMVWK7h%2FdTKsS1sqcAakFYuSG1kA77av5QzouqNuKKbEj5ZBYIyB1s4Vdyq%2B0OozlH9T41Ni72H0dNA8FuxehpbZLxVTqhgAeqG6JTdcopB1Ccilt2%2F8Ekm2BSsTkSO4hMdm9DhQVqWjNRfOWQWnI2vobtnXPPk3aCesFy6umoDNKQWPhpqOSJnkDJqZ0%2FD%2FO1j5AYpM39yuv%2BlhBqY3MstebbxUn9dS%2B4tRbkOR6eS6wTUfLHPAfkCOswKawvJMzCa6QalR64tREE5v0D0Ol1RAa9xst7fjhHnfQ3XcgFhWr6dUeC5smBJQbVQxmWswdU0OiV2AhybzPvIkEZQM04H%2FrnmPp9VZnPRCAvIAKIbBN6rLVIHGG2sh2txYIiNgLqwYCQLaf1pIHMF25w1kXz19mzaYY%2Bw%2FuxI2DU%2FWiFuwpCoyyfxPotWDuun3Qz9wTCP8eW%2FBjqkAVDwq4xAZyFXr08d4kYwxLUDZJN5b%2Ftungan3VxAaAJeSaAHpHeLjU%2BSD%2BhY3A80B18EN84J1DgoHLr1Zoxkx0zuq%2BeDv5VKOdHfOo7r2JLmcUM4JSHBEs9W4kP7QZ2pBM640ydWkuYx60gBe8iHR5E9%2BBTLil5gaS8J0ef%2B3QoPAbBhyUDARLGO4KI4YUPIvdM2Utj8voyEmwz%2F4Czl6H8wkbAk&X-Amz-Signature=a7e9db4dd10e08f59b782cd4b532fcb49d238e43bd6a0b5e60627b0e112827c4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HNBQZJT%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDiMKytz%2FbNNtlYaDCvQbUbSt44owfroj97XE2%2FLVsPTwIhAKQSALQp7oUi2VkI%2BYuQTLorQFmANttJad8aqlZeKIBeKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1eZ7fd5a405mNIDsq3AORxrubIj8uAaZjjBmmgBwKaqgHOCokE1o50C4qPO5jEh5qPWFAyCN7QPJLZpZ1Sex8iQLcGS%2FVgjmH%2BxNvhqp1J15wejhREKC6POLLUmgzb49Rk4PuucAKTJlxEWx3ZUhL7TNPJZVP2FPjSP6X0aLz0elHuS%2FHf6DxuZHogaKwLYjBj76mh%2B4xni69ZfMVWK7h%2FdTKsS1sqcAakFYuSG1kA77av5QzouqNuKKbEj5ZBYIyB1s4Vdyq%2B0OozlH9T41Ni72H0dNA8FuxehpbZLxVTqhgAeqG6JTdcopB1Ccilt2%2F8Ekm2BSsTkSO4hMdm9DhQVqWjNRfOWQWnI2vobtnXPPk3aCesFy6umoDNKQWPhpqOSJnkDJqZ0%2FD%2FO1j5AYpM39yuv%2BlhBqY3MstebbxUn9dS%2B4tRbkOR6eS6wTUfLHPAfkCOswKawvJMzCa6QalR64tREE5v0D0Ol1RAa9xst7fjhHnfQ3XcgFhWr6dUeC5smBJQbVQxmWswdU0OiV2AhybzPvIkEZQM04H%2FrnmPp9VZnPRCAvIAKIbBN6rLVIHGG2sh2txYIiNgLqwYCQLaf1pIHMF25w1kXz19mzaYY%2Bw%2FuxI2DU%2FWiFuwpCoyyfxPotWDuun3Qz9wTCP8eW%2FBjqkAVDwq4xAZyFXr08d4kYwxLUDZJN5b%2Ftungan3VxAaAJeSaAHpHeLjU%2BSD%2BhY3A80B18EN84J1DgoHLr1Zoxkx0zuq%2BeDv5VKOdHfOo7r2JLmcUM4JSHBEs9W4kP7QZ2pBM640ydWkuYx60gBe8iHR5E9%2BBTLil5gaS8J0ef%2B3QoPAbBhyUDARLGO4KI4YUPIvdM2Utj8voyEmwz%2F4Czl6H8wkbAk&X-Amz-Signature=cf2225936454620ba6bbfd3b651a64998d4ba9fedbbf36e50a732f5c3a3b1b9c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HNBQZJT%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDiMKytz%2FbNNtlYaDCvQbUbSt44owfroj97XE2%2FLVsPTwIhAKQSALQp7oUi2VkI%2BYuQTLorQFmANttJad8aqlZeKIBeKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1eZ7fd5a405mNIDsq3AORxrubIj8uAaZjjBmmgBwKaqgHOCokE1o50C4qPO5jEh5qPWFAyCN7QPJLZpZ1Sex8iQLcGS%2FVgjmH%2BxNvhqp1J15wejhREKC6POLLUmgzb49Rk4PuucAKTJlxEWx3ZUhL7TNPJZVP2FPjSP6X0aLz0elHuS%2FHf6DxuZHogaKwLYjBj76mh%2B4xni69ZfMVWK7h%2FdTKsS1sqcAakFYuSG1kA77av5QzouqNuKKbEj5ZBYIyB1s4Vdyq%2B0OozlH9T41Ni72H0dNA8FuxehpbZLxVTqhgAeqG6JTdcopB1Ccilt2%2F8Ekm2BSsTkSO4hMdm9DhQVqWjNRfOWQWnI2vobtnXPPk3aCesFy6umoDNKQWPhpqOSJnkDJqZ0%2FD%2FO1j5AYpM39yuv%2BlhBqY3MstebbxUn9dS%2B4tRbkOR6eS6wTUfLHPAfkCOswKawvJMzCa6QalR64tREE5v0D0Ol1RAa9xst7fjhHnfQ3XcgFhWr6dUeC5smBJQbVQxmWswdU0OiV2AhybzPvIkEZQM04H%2FrnmPp9VZnPRCAvIAKIbBN6rLVIHGG2sh2txYIiNgLqwYCQLaf1pIHMF25w1kXz19mzaYY%2Bw%2FuxI2DU%2FWiFuwpCoyyfxPotWDuun3Qz9wTCP8eW%2FBjqkAVDwq4xAZyFXr08d4kYwxLUDZJN5b%2Ftungan3VxAaAJeSaAHpHeLjU%2BSD%2BhY3A80B18EN84J1DgoHLr1Zoxkx0zuq%2BeDv5VKOdHfOo7r2JLmcUM4JSHBEs9W4kP7QZ2pBM640ydWkuYx60gBe8iHR5E9%2BBTLil5gaS8J0ef%2B3QoPAbBhyUDARLGO4KI4YUPIvdM2Utj8voyEmwz%2F4Czl6H8wkbAk&X-Amz-Signature=7a6b5f2ef01de2e104932baceefd1177620ca07e142b45d46dff7217f12824e5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
