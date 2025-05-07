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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZD7SQ3R%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T050930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI9Qm2UWCpkcsAXcU%2Bzh6ue7lrmv2p32EiOmYWgxNVHQIhAOZOR4KB0BZHIGwQLHSaxgRXjss3j5L1BWfzcmIaYm0nKv8DCFQQABoMNjM3NDIzMTgzODA1IgxtZY2um8WJ9McI5h8q3ANLLMB%2FpKQOU22kY0O7bUU28v4Rx3762cLR9aODXp0KP5iW7wP2v1dJ8dGtJJUFpMVen%2Bl1EAT6lDp088T2occUYXZNNTne9hceOtFXgu6BqQnaVhs9TmuHHA283PJObvTjCgBV8aAhzZI3LuUW%2FxzSPUhin1LLjIXHG80iQha4OFUq%2B4G2ydGCosfsTPe9rz5GQsyjX4er3VYmtFwl%2B5fvuBoLiwzi%2B5raA1cCnao%2FPrSnmTbpyqDhxGvCGbDR5Q7VfsZC1NdEqhFKkGyV3iD72eJTnvRIYgdgYlGhQoSIumfYCKrSS%2FwNiB8wacbhwgUMo9RYvO4hiBTfJTBAkiIfkFpCFUUELeHrfjOCafQOwCX9PY%2Bv9aDmW5Q4S9%2Bw%2Bzx0WwuLvrS%2FHRwOnXchdV4QDjDPehwAbAviF4n1iwPa2irKyvsux18ZwMpugN6%2BirSJLkxEFQRkjl9n7VLXk%2BmzCNaRA9EVX9af8f8Ud7yGcMifvME%2FBZ0jdnf2%2B6%2FWxzeluApB3CZG4TQLLRPKb8gA6dRAGwxIhTAowkFLJ9RWIOeEni3Hwain3D1c%2FZ9VUXDDcFUi1cSGcplEfXbOXKOXXQRpTbFq%2BWkVrSbaxTq%2FaRvhd%2BSIZc9MlUcf6zCGkuvABjqkAbNoFOIB0e4ovMjZiZQZla9d1tbv1tgYS%2F0QlaomoV0tPAOz%2F7JVkrPPb0QRIcOFtT4Dv4gTbRYEbd6jqSzV1mlBcVT6SY1%2FGxnJYMkdPnu2kYG0my5QpVKkQYzNwt%2FxXYQWOW48Tl0Q1A%2B0JajgIusmQNlcY8M0eRpnzUrpzu0CfrdtXOIvB7opfS2X%2FAh69WYXS0WNTJETx6DEAYIKgmvdKuTN&X-Amz-Signature=9ff0f316c8fc66129cdfb7ed21f83ec7d1a25f2246300d6e9cdc0fb6bfb82b6e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZD7SQ3R%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T050930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI9Qm2UWCpkcsAXcU%2Bzh6ue7lrmv2p32EiOmYWgxNVHQIhAOZOR4KB0BZHIGwQLHSaxgRXjss3j5L1BWfzcmIaYm0nKv8DCFQQABoMNjM3NDIzMTgzODA1IgxtZY2um8WJ9McI5h8q3ANLLMB%2FpKQOU22kY0O7bUU28v4Rx3762cLR9aODXp0KP5iW7wP2v1dJ8dGtJJUFpMVen%2Bl1EAT6lDp088T2occUYXZNNTne9hceOtFXgu6BqQnaVhs9TmuHHA283PJObvTjCgBV8aAhzZI3LuUW%2FxzSPUhin1LLjIXHG80iQha4OFUq%2B4G2ydGCosfsTPe9rz5GQsyjX4er3VYmtFwl%2B5fvuBoLiwzi%2B5raA1cCnao%2FPrSnmTbpyqDhxGvCGbDR5Q7VfsZC1NdEqhFKkGyV3iD72eJTnvRIYgdgYlGhQoSIumfYCKrSS%2FwNiB8wacbhwgUMo9RYvO4hiBTfJTBAkiIfkFpCFUUELeHrfjOCafQOwCX9PY%2Bv9aDmW5Q4S9%2Bw%2Bzx0WwuLvrS%2FHRwOnXchdV4QDjDPehwAbAviF4n1iwPa2irKyvsux18ZwMpugN6%2BirSJLkxEFQRkjl9n7VLXk%2BmzCNaRA9EVX9af8f8Ud7yGcMifvME%2FBZ0jdnf2%2B6%2FWxzeluApB3CZG4TQLLRPKb8gA6dRAGwxIhTAowkFLJ9RWIOeEni3Hwain3D1c%2FZ9VUXDDcFUi1cSGcplEfXbOXKOXXQRpTbFq%2BWkVrSbaxTq%2FaRvhd%2BSIZc9MlUcf6zCGkuvABjqkAbNoFOIB0e4ovMjZiZQZla9d1tbv1tgYS%2F0QlaomoV0tPAOz%2F7JVkrPPb0QRIcOFtT4Dv4gTbRYEbd6jqSzV1mlBcVT6SY1%2FGxnJYMkdPnu2kYG0my5QpVKkQYzNwt%2FxXYQWOW48Tl0Q1A%2B0JajgIusmQNlcY8M0eRpnzUrpzu0CfrdtXOIvB7opfS2X%2FAh69WYXS0WNTJETx6DEAYIKgmvdKuTN&X-Amz-Signature=530decc3de29a43e278ffa8435688e68ef6ea6f2ac74cfef874b7e6d5c39b969&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZD7SQ3R%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T050930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI9Qm2UWCpkcsAXcU%2Bzh6ue7lrmv2p32EiOmYWgxNVHQIhAOZOR4KB0BZHIGwQLHSaxgRXjss3j5L1BWfzcmIaYm0nKv8DCFQQABoMNjM3NDIzMTgzODA1IgxtZY2um8WJ9McI5h8q3ANLLMB%2FpKQOU22kY0O7bUU28v4Rx3762cLR9aODXp0KP5iW7wP2v1dJ8dGtJJUFpMVen%2Bl1EAT6lDp088T2occUYXZNNTne9hceOtFXgu6BqQnaVhs9TmuHHA283PJObvTjCgBV8aAhzZI3LuUW%2FxzSPUhin1LLjIXHG80iQha4OFUq%2B4G2ydGCosfsTPe9rz5GQsyjX4er3VYmtFwl%2B5fvuBoLiwzi%2B5raA1cCnao%2FPrSnmTbpyqDhxGvCGbDR5Q7VfsZC1NdEqhFKkGyV3iD72eJTnvRIYgdgYlGhQoSIumfYCKrSS%2FwNiB8wacbhwgUMo9RYvO4hiBTfJTBAkiIfkFpCFUUELeHrfjOCafQOwCX9PY%2Bv9aDmW5Q4S9%2Bw%2Bzx0WwuLvrS%2FHRwOnXchdV4QDjDPehwAbAviF4n1iwPa2irKyvsux18ZwMpugN6%2BirSJLkxEFQRkjl9n7VLXk%2BmzCNaRA9EVX9af8f8Ud7yGcMifvME%2FBZ0jdnf2%2B6%2FWxzeluApB3CZG4TQLLRPKb8gA6dRAGwxIhTAowkFLJ9RWIOeEni3Hwain3D1c%2FZ9VUXDDcFUi1cSGcplEfXbOXKOXXQRpTbFq%2BWkVrSbaxTq%2FaRvhd%2BSIZc9MlUcf6zCGkuvABjqkAbNoFOIB0e4ovMjZiZQZla9d1tbv1tgYS%2F0QlaomoV0tPAOz%2F7JVkrPPb0QRIcOFtT4Dv4gTbRYEbd6jqSzV1mlBcVT6SY1%2FGxnJYMkdPnu2kYG0my5QpVKkQYzNwt%2FxXYQWOW48Tl0Q1A%2B0JajgIusmQNlcY8M0eRpnzUrpzu0CfrdtXOIvB7opfS2X%2FAh69WYXS0WNTJETx6DEAYIKgmvdKuTN&X-Amz-Signature=c4b169f92409b8d0cbc13a6aeffde493a5efd3e353a459c9bb76ea42730d8910&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZD7SQ3R%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T050930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI9Qm2UWCpkcsAXcU%2Bzh6ue7lrmv2p32EiOmYWgxNVHQIhAOZOR4KB0BZHIGwQLHSaxgRXjss3j5L1BWfzcmIaYm0nKv8DCFQQABoMNjM3NDIzMTgzODA1IgxtZY2um8WJ9McI5h8q3ANLLMB%2FpKQOU22kY0O7bUU28v4Rx3762cLR9aODXp0KP5iW7wP2v1dJ8dGtJJUFpMVen%2Bl1EAT6lDp088T2occUYXZNNTne9hceOtFXgu6BqQnaVhs9TmuHHA283PJObvTjCgBV8aAhzZI3LuUW%2FxzSPUhin1LLjIXHG80iQha4OFUq%2B4G2ydGCosfsTPe9rz5GQsyjX4er3VYmtFwl%2B5fvuBoLiwzi%2B5raA1cCnao%2FPrSnmTbpyqDhxGvCGbDR5Q7VfsZC1NdEqhFKkGyV3iD72eJTnvRIYgdgYlGhQoSIumfYCKrSS%2FwNiB8wacbhwgUMo9RYvO4hiBTfJTBAkiIfkFpCFUUELeHrfjOCafQOwCX9PY%2Bv9aDmW5Q4S9%2Bw%2Bzx0WwuLvrS%2FHRwOnXchdV4QDjDPehwAbAviF4n1iwPa2irKyvsux18ZwMpugN6%2BirSJLkxEFQRkjl9n7VLXk%2BmzCNaRA9EVX9af8f8Ud7yGcMifvME%2FBZ0jdnf2%2B6%2FWxzeluApB3CZG4TQLLRPKb8gA6dRAGwxIhTAowkFLJ9RWIOeEni3Hwain3D1c%2FZ9VUXDDcFUi1cSGcplEfXbOXKOXXQRpTbFq%2BWkVrSbaxTq%2FaRvhd%2BSIZc9MlUcf6zCGkuvABjqkAbNoFOIB0e4ovMjZiZQZla9d1tbv1tgYS%2F0QlaomoV0tPAOz%2F7JVkrPPb0QRIcOFtT4Dv4gTbRYEbd6jqSzV1mlBcVT6SY1%2FGxnJYMkdPnu2kYG0my5QpVKkQYzNwt%2FxXYQWOW48Tl0Q1A%2B0JajgIusmQNlcY8M0eRpnzUrpzu0CfrdtXOIvB7opfS2X%2FAh69WYXS0WNTJETx6DEAYIKgmvdKuTN&X-Amz-Signature=a422ea9a4713c3dcd7886aadf540655ce9f4104baaf0244e7441b8d22c2be6dc&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZD7SQ3R%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T050930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI9Qm2UWCpkcsAXcU%2Bzh6ue7lrmv2p32EiOmYWgxNVHQIhAOZOR4KB0BZHIGwQLHSaxgRXjss3j5L1BWfzcmIaYm0nKv8DCFQQABoMNjM3NDIzMTgzODA1IgxtZY2um8WJ9McI5h8q3ANLLMB%2FpKQOU22kY0O7bUU28v4Rx3762cLR9aODXp0KP5iW7wP2v1dJ8dGtJJUFpMVen%2Bl1EAT6lDp088T2occUYXZNNTne9hceOtFXgu6BqQnaVhs9TmuHHA283PJObvTjCgBV8aAhzZI3LuUW%2FxzSPUhin1LLjIXHG80iQha4OFUq%2B4G2ydGCosfsTPe9rz5GQsyjX4er3VYmtFwl%2B5fvuBoLiwzi%2B5raA1cCnao%2FPrSnmTbpyqDhxGvCGbDR5Q7VfsZC1NdEqhFKkGyV3iD72eJTnvRIYgdgYlGhQoSIumfYCKrSS%2FwNiB8wacbhwgUMo9RYvO4hiBTfJTBAkiIfkFpCFUUELeHrfjOCafQOwCX9PY%2Bv9aDmW5Q4S9%2Bw%2Bzx0WwuLvrS%2FHRwOnXchdV4QDjDPehwAbAviF4n1iwPa2irKyvsux18ZwMpugN6%2BirSJLkxEFQRkjl9n7VLXk%2BmzCNaRA9EVX9af8f8Ud7yGcMifvME%2FBZ0jdnf2%2B6%2FWxzeluApB3CZG4TQLLRPKb8gA6dRAGwxIhTAowkFLJ9RWIOeEni3Hwain3D1c%2FZ9VUXDDcFUi1cSGcplEfXbOXKOXXQRpTbFq%2BWkVrSbaxTq%2FaRvhd%2BSIZc9MlUcf6zCGkuvABjqkAbNoFOIB0e4ovMjZiZQZla9d1tbv1tgYS%2F0QlaomoV0tPAOz%2F7JVkrPPb0QRIcOFtT4Dv4gTbRYEbd6jqSzV1mlBcVT6SY1%2FGxnJYMkdPnu2kYG0my5QpVKkQYzNwt%2FxXYQWOW48Tl0Q1A%2B0JajgIusmQNlcY8M0eRpnzUrpzu0CfrdtXOIvB7opfS2X%2FAh69WYXS0WNTJETx6DEAYIKgmvdKuTN&X-Amz-Signature=2d0a45c62e4f095b981c77a07ff64689f863ccd3c04b110fb53c2473e0ed1dae&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZD7SQ3R%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T050930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI9Qm2UWCpkcsAXcU%2Bzh6ue7lrmv2p32EiOmYWgxNVHQIhAOZOR4KB0BZHIGwQLHSaxgRXjss3j5L1BWfzcmIaYm0nKv8DCFQQABoMNjM3NDIzMTgzODA1IgxtZY2um8WJ9McI5h8q3ANLLMB%2FpKQOU22kY0O7bUU28v4Rx3762cLR9aODXp0KP5iW7wP2v1dJ8dGtJJUFpMVen%2Bl1EAT6lDp088T2occUYXZNNTne9hceOtFXgu6BqQnaVhs9TmuHHA283PJObvTjCgBV8aAhzZI3LuUW%2FxzSPUhin1LLjIXHG80iQha4OFUq%2B4G2ydGCosfsTPe9rz5GQsyjX4er3VYmtFwl%2B5fvuBoLiwzi%2B5raA1cCnao%2FPrSnmTbpyqDhxGvCGbDR5Q7VfsZC1NdEqhFKkGyV3iD72eJTnvRIYgdgYlGhQoSIumfYCKrSS%2FwNiB8wacbhwgUMo9RYvO4hiBTfJTBAkiIfkFpCFUUELeHrfjOCafQOwCX9PY%2Bv9aDmW5Q4S9%2Bw%2Bzx0WwuLvrS%2FHRwOnXchdV4QDjDPehwAbAviF4n1iwPa2irKyvsux18ZwMpugN6%2BirSJLkxEFQRkjl9n7VLXk%2BmzCNaRA9EVX9af8f8Ud7yGcMifvME%2FBZ0jdnf2%2B6%2FWxzeluApB3CZG4TQLLRPKb8gA6dRAGwxIhTAowkFLJ9RWIOeEni3Hwain3D1c%2FZ9VUXDDcFUi1cSGcplEfXbOXKOXXQRpTbFq%2BWkVrSbaxTq%2FaRvhd%2BSIZc9MlUcf6zCGkuvABjqkAbNoFOIB0e4ovMjZiZQZla9d1tbv1tgYS%2F0QlaomoV0tPAOz%2F7JVkrPPb0QRIcOFtT4Dv4gTbRYEbd6jqSzV1mlBcVT6SY1%2FGxnJYMkdPnu2kYG0my5QpVKkQYzNwt%2FxXYQWOW48Tl0Q1A%2B0JajgIusmQNlcY8M0eRpnzUrpzu0CfrdtXOIvB7opfS2X%2FAh69WYXS0WNTJETx6DEAYIKgmvdKuTN&X-Amz-Signature=e1aa54a34a09d8e05d320765e1a223aa563edff2cb8186a2558e7b70c44f1ea9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZD7SQ3R%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T050930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI9Qm2UWCpkcsAXcU%2Bzh6ue7lrmv2p32EiOmYWgxNVHQIhAOZOR4KB0BZHIGwQLHSaxgRXjss3j5L1BWfzcmIaYm0nKv8DCFQQABoMNjM3NDIzMTgzODA1IgxtZY2um8WJ9McI5h8q3ANLLMB%2FpKQOU22kY0O7bUU28v4Rx3762cLR9aODXp0KP5iW7wP2v1dJ8dGtJJUFpMVen%2Bl1EAT6lDp088T2occUYXZNNTne9hceOtFXgu6BqQnaVhs9TmuHHA283PJObvTjCgBV8aAhzZI3LuUW%2FxzSPUhin1LLjIXHG80iQha4OFUq%2B4G2ydGCosfsTPe9rz5GQsyjX4er3VYmtFwl%2B5fvuBoLiwzi%2B5raA1cCnao%2FPrSnmTbpyqDhxGvCGbDR5Q7VfsZC1NdEqhFKkGyV3iD72eJTnvRIYgdgYlGhQoSIumfYCKrSS%2FwNiB8wacbhwgUMo9RYvO4hiBTfJTBAkiIfkFpCFUUELeHrfjOCafQOwCX9PY%2Bv9aDmW5Q4S9%2Bw%2Bzx0WwuLvrS%2FHRwOnXchdV4QDjDPehwAbAviF4n1iwPa2irKyvsux18ZwMpugN6%2BirSJLkxEFQRkjl9n7VLXk%2BmzCNaRA9EVX9af8f8Ud7yGcMifvME%2FBZ0jdnf2%2B6%2FWxzeluApB3CZG4TQLLRPKb8gA6dRAGwxIhTAowkFLJ9RWIOeEni3Hwain3D1c%2FZ9VUXDDcFUi1cSGcplEfXbOXKOXXQRpTbFq%2BWkVrSbaxTq%2FaRvhd%2BSIZc9MlUcf6zCGkuvABjqkAbNoFOIB0e4ovMjZiZQZla9d1tbv1tgYS%2F0QlaomoV0tPAOz%2F7JVkrPPb0QRIcOFtT4Dv4gTbRYEbd6jqSzV1mlBcVT6SY1%2FGxnJYMkdPnu2kYG0my5QpVKkQYzNwt%2FxXYQWOW48Tl0Q1A%2B0JajgIusmQNlcY8M0eRpnzUrpzu0CfrdtXOIvB7opfS2X%2FAh69WYXS0WNTJETx6DEAYIKgmvdKuTN&X-Amz-Signature=c45f4d16500bbd6796a218293c8ee0403d5a0af25997e8ed1baa1c55ec9bff8f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
