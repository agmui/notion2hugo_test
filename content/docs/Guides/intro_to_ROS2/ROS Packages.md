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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKBK6MJZ%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T081052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIGIrla7HGG0U2lsRbvIg%2Bu6EuWX1gqrZYnmERJv31Vr6AiEAoLRuI1CAXlyruhgKucpqEKYazx9wU1bKXFt1YpuH9xkq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDEQqo8JZ90Fo%2B8u%2F4yrcA0JptEENJvxkK3mByNAlQ2ecsKVaK0OvQ5OZWntjDXPuWNNydmdsAqD%2BIk4rjPhdG%2BZgbsgdDaZGx8yLTrzqyEA8LRlbviXMmpzNHFJo16wmCt2VolKF79oFmbPQ3en2a2xLMF%2B2mZxfTQ7oMZw%2F6fYnDVWjkMx1HBl1Sri0srWzf2zz5SZ7%2B7Eym8icP6VaU%2Bj%2BuZvrgQ67B9xPzsVihw2UNXSFKJ5%2FVJj5axcm8wJfYKhq5pSNInoCRkhS8Re7cGmNmetC7bwOd0PkcBq1%2BYKxN0J%2F4bZjBS%2BjcqjmdJ3F2DvhItaE%2FTLmObI%2BqBk%2Bei8JnqLytFvqTfABiqKnc4EbHYa2NS%2B9i6cvwWQ04c4iw7E%2BGu4tZpoFhGrHaQMiFaM8D%2BtCHunYJqt06NXYf6bHdlWNfs5qLxb%2FiN2l%2FrjfW%2Fhk1LLVTKbankg8w73XN3BkjM9sEE%2FI2D%2F2Yb%2FeM6pQo32Gge%2FthuB%2Bu9IJsDSIDWtwxeZhkfAHmDxTF69fBawUwTzpdXJYOCa5w%2BIZYp4Z8mijElV4bA1NSAkoReS1ZwMsYL5ySGX5XxyOj4vv0yetfmpvlr8fUTG0eIEjXPeXKGftkmPZ80WhVMUE71GpjVKqbGiWWJRKITsAMLisucIGOqUBaUnWWUoC78YeOMmmD9PvVMWobgrV0mfHXevFWxQsqvz9hiNMQx%2BYvqmviSv8nYyKEy8u7nrkHaFuxBS399L3VMyDYDyiCJyh0rCzncnorociqlou80e1rBuYcXWqDO9vql%2Fyj3IrlTN559uMS9QKHyEhtsJRLufNzh4UIMVWxHsy0n8q7ser7G5RdbzggPgo4UeqUf5114Xf0xiCuIXlI%2BpRvwl8&X-Amz-Signature=5d72c5c8880cf74cf9fd8e1b6379e7f926df8e537cc9a15332de2dbd33b3b696&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKBK6MJZ%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T081052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIGIrla7HGG0U2lsRbvIg%2Bu6EuWX1gqrZYnmERJv31Vr6AiEAoLRuI1CAXlyruhgKucpqEKYazx9wU1bKXFt1YpuH9xkq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDEQqo8JZ90Fo%2B8u%2F4yrcA0JptEENJvxkK3mByNAlQ2ecsKVaK0OvQ5OZWntjDXPuWNNydmdsAqD%2BIk4rjPhdG%2BZgbsgdDaZGx8yLTrzqyEA8LRlbviXMmpzNHFJo16wmCt2VolKF79oFmbPQ3en2a2xLMF%2B2mZxfTQ7oMZw%2F6fYnDVWjkMx1HBl1Sri0srWzf2zz5SZ7%2B7Eym8icP6VaU%2Bj%2BuZvrgQ67B9xPzsVihw2UNXSFKJ5%2FVJj5axcm8wJfYKhq5pSNInoCRkhS8Re7cGmNmetC7bwOd0PkcBq1%2BYKxN0J%2F4bZjBS%2BjcqjmdJ3F2DvhItaE%2FTLmObI%2BqBk%2Bei8JnqLytFvqTfABiqKnc4EbHYa2NS%2B9i6cvwWQ04c4iw7E%2BGu4tZpoFhGrHaQMiFaM8D%2BtCHunYJqt06NXYf6bHdlWNfs5qLxb%2FiN2l%2FrjfW%2Fhk1LLVTKbankg8w73XN3BkjM9sEE%2FI2D%2F2Yb%2FeM6pQo32Gge%2FthuB%2Bu9IJsDSIDWtwxeZhkfAHmDxTF69fBawUwTzpdXJYOCa5w%2BIZYp4Z8mijElV4bA1NSAkoReS1ZwMsYL5ySGX5XxyOj4vv0yetfmpvlr8fUTG0eIEjXPeXKGftkmPZ80WhVMUE71GpjVKqbGiWWJRKITsAMLisucIGOqUBaUnWWUoC78YeOMmmD9PvVMWobgrV0mfHXevFWxQsqvz9hiNMQx%2BYvqmviSv8nYyKEy8u7nrkHaFuxBS399L3VMyDYDyiCJyh0rCzncnorociqlou80e1rBuYcXWqDO9vql%2Fyj3IrlTN559uMS9QKHyEhtsJRLufNzh4UIMVWxHsy0n8q7ser7G5RdbzggPgo4UeqUf5114Xf0xiCuIXlI%2BpRvwl8&X-Amz-Signature=e3fef524f5cf538a474e3fb67d9556a4cd137c1f13d6c6de806bfc22c71d4d3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKBK6MJZ%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T081052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIGIrla7HGG0U2lsRbvIg%2Bu6EuWX1gqrZYnmERJv31Vr6AiEAoLRuI1CAXlyruhgKucpqEKYazx9wU1bKXFt1YpuH9xkq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDEQqo8JZ90Fo%2B8u%2F4yrcA0JptEENJvxkK3mByNAlQ2ecsKVaK0OvQ5OZWntjDXPuWNNydmdsAqD%2BIk4rjPhdG%2BZgbsgdDaZGx8yLTrzqyEA8LRlbviXMmpzNHFJo16wmCt2VolKF79oFmbPQ3en2a2xLMF%2B2mZxfTQ7oMZw%2F6fYnDVWjkMx1HBl1Sri0srWzf2zz5SZ7%2B7Eym8icP6VaU%2Bj%2BuZvrgQ67B9xPzsVihw2UNXSFKJ5%2FVJj5axcm8wJfYKhq5pSNInoCRkhS8Re7cGmNmetC7bwOd0PkcBq1%2BYKxN0J%2F4bZjBS%2BjcqjmdJ3F2DvhItaE%2FTLmObI%2BqBk%2Bei8JnqLytFvqTfABiqKnc4EbHYa2NS%2B9i6cvwWQ04c4iw7E%2BGu4tZpoFhGrHaQMiFaM8D%2BtCHunYJqt06NXYf6bHdlWNfs5qLxb%2FiN2l%2FrjfW%2Fhk1LLVTKbankg8w73XN3BkjM9sEE%2FI2D%2F2Yb%2FeM6pQo32Gge%2FthuB%2Bu9IJsDSIDWtwxeZhkfAHmDxTF69fBawUwTzpdXJYOCa5w%2BIZYp4Z8mijElV4bA1NSAkoReS1ZwMsYL5ySGX5XxyOj4vv0yetfmpvlr8fUTG0eIEjXPeXKGftkmPZ80WhVMUE71GpjVKqbGiWWJRKITsAMLisucIGOqUBaUnWWUoC78YeOMmmD9PvVMWobgrV0mfHXevFWxQsqvz9hiNMQx%2BYvqmviSv8nYyKEy8u7nrkHaFuxBS399L3VMyDYDyiCJyh0rCzncnorociqlou80e1rBuYcXWqDO9vql%2Fyj3IrlTN559uMS9QKHyEhtsJRLufNzh4UIMVWxHsy0n8q7ser7G5RdbzggPgo4UeqUf5114Xf0xiCuIXlI%2BpRvwl8&X-Amz-Signature=698ba0f099d50096b2cf70a925e5765f61e6356c48fe550a18cd2db611fa53a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKBK6MJZ%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T081052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIGIrla7HGG0U2lsRbvIg%2Bu6EuWX1gqrZYnmERJv31Vr6AiEAoLRuI1CAXlyruhgKucpqEKYazx9wU1bKXFt1YpuH9xkq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDEQqo8JZ90Fo%2B8u%2F4yrcA0JptEENJvxkK3mByNAlQ2ecsKVaK0OvQ5OZWntjDXPuWNNydmdsAqD%2BIk4rjPhdG%2BZgbsgdDaZGx8yLTrzqyEA8LRlbviXMmpzNHFJo16wmCt2VolKF79oFmbPQ3en2a2xLMF%2B2mZxfTQ7oMZw%2F6fYnDVWjkMx1HBl1Sri0srWzf2zz5SZ7%2B7Eym8icP6VaU%2Bj%2BuZvrgQ67B9xPzsVihw2UNXSFKJ5%2FVJj5axcm8wJfYKhq5pSNInoCRkhS8Re7cGmNmetC7bwOd0PkcBq1%2BYKxN0J%2F4bZjBS%2BjcqjmdJ3F2DvhItaE%2FTLmObI%2BqBk%2Bei8JnqLytFvqTfABiqKnc4EbHYa2NS%2B9i6cvwWQ04c4iw7E%2BGu4tZpoFhGrHaQMiFaM8D%2BtCHunYJqt06NXYf6bHdlWNfs5qLxb%2FiN2l%2FrjfW%2Fhk1LLVTKbankg8w73XN3BkjM9sEE%2FI2D%2F2Yb%2FeM6pQo32Gge%2FthuB%2Bu9IJsDSIDWtwxeZhkfAHmDxTF69fBawUwTzpdXJYOCa5w%2BIZYp4Z8mijElV4bA1NSAkoReS1ZwMsYL5ySGX5XxyOj4vv0yetfmpvlr8fUTG0eIEjXPeXKGftkmPZ80WhVMUE71GpjVKqbGiWWJRKITsAMLisucIGOqUBaUnWWUoC78YeOMmmD9PvVMWobgrV0mfHXevFWxQsqvz9hiNMQx%2BYvqmviSv8nYyKEy8u7nrkHaFuxBS399L3VMyDYDyiCJyh0rCzncnorociqlou80e1rBuYcXWqDO9vql%2Fyj3IrlTN559uMS9QKHyEhtsJRLufNzh4UIMVWxHsy0n8q7ser7G5RdbzggPgo4UeqUf5114Xf0xiCuIXlI%2BpRvwl8&X-Amz-Signature=f0646f6c0fa8c2d34ac9fd314b4e62921ef828c57a767e99b1756e6899d59f02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKBK6MJZ%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T081052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIGIrla7HGG0U2lsRbvIg%2Bu6EuWX1gqrZYnmERJv31Vr6AiEAoLRuI1CAXlyruhgKucpqEKYazx9wU1bKXFt1YpuH9xkq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDEQqo8JZ90Fo%2B8u%2F4yrcA0JptEENJvxkK3mByNAlQ2ecsKVaK0OvQ5OZWntjDXPuWNNydmdsAqD%2BIk4rjPhdG%2BZgbsgdDaZGx8yLTrzqyEA8LRlbviXMmpzNHFJo16wmCt2VolKF79oFmbPQ3en2a2xLMF%2B2mZxfTQ7oMZw%2F6fYnDVWjkMx1HBl1Sri0srWzf2zz5SZ7%2B7Eym8icP6VaU%2Bj%2BuZvrgQ67B9xPzsVihw2UNXSFKJ5%2FVJj5axcm8wJfYKhq5pSNInoCRkhS8Re7cGmNmetC7bwOd0PkcBq1%2BYKxN0J%2F4bZjBS%2BjcqjmdJ3F2DvhItaE%2FTLmObI%2BqBk%2Bei8JnqLytFvqTfABiqKnc4EbHYa2NS%2B9i6cvwWQ04c4iw7E%2BGu4tZpoFhGrHaQMiFaM8D%2BtCHunYJqt06NXYf6bHdlWNfs5qLxb%2FiN2l%2FrjfW%2Fhk1LLVTKbankg8w73XN3BkjM9sEE%2FI2D%2F2Yb%2FeM6pQo32Gge%2FthuB%2Bu9IJsDSIDWtwxeZhkfAHmDxTF69fBawUwTzpdXJYOCa5w%2BIZYp4Z8mijElV4bA1NSAkoReS1ZwMsYL5ySGX5XxyOj4vv0yetfmpvlr8fUTG0eIEjXPeXKGftkmPZ80WhVMUE71GpjVKqbGiWWJRKITsAMLisucIGOqUBaUnWWUoC78YeOMmmD9PvVMWobgrV0mfHXevFWxQsqvz9hiNMQx%2BYvqmviSv8nYyKEy8u7nrkHaFuxBS399L3VMyDYDyiCJyh0rCzncnorociqlou80e1rBuYcXWqDO9vql%2Fyj3IrlTN559uMS9QKHyEhtsJRLufNzh4UIMVWxHsy0n8q7ser7G5RdbzggPgo4UeqUf5114Xf0xiCuIXlI%2BpRvwl8&X-Amz-Signature=04414d40f43bf62629f96585fe3564909cb4a846e0ba03944aaaaa75c2222b1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKBK6MJZ%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T081052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIGIrla7HGG0U2lsRbvIg%2Bu6EuWX1gqrZYnmERJv31Vr6AiEAoLRuI1CAXlyruhgKucpqEKYazx9wU1bKXFt1YpuH9xkq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDEQqo8JZ90Fo%2B8u%2F4yrcA0JptEENJvxkK3mByNAlQ2ecsKVaK0OvQ5OZWntjDXPuWNNydmdsAqD%2BIk4rjPhdG%2BZgbsgdDaZGx8yLTrzqyEA8LRlbviXMmpzNHFJo16wmCt2VolKF79oFmbPQ3en2a2xLMF%2B2mZxfTQ7oMZw%2F6fYnDVWjkMx1HBl1Sri0srWzf2zz5SZ7%2B7Eym8icP6VaU%2Bj%2BuZvrgQ67B9xPzsVihw2UNXSFKJ5%2FVJj5axcm8wJfYKhq5pSNInoCRkhS8Re7cGmNmetC7bwOd0PkcBq1%2BYKxN0J%2F4bZjBS%2BjcqjmdJ3F2DvhItaE%2FTLmObI%2BqBk%2Bei8JnqLytFvqTfABiqKnc4EbHYa2NS%2B9i6cvwWQ04c4iw7E%2BGu4tZpoFhGrHaQMiFaM8D%2BtCHunYJqt06NXYf6bHdlWNfs5qLxb%2FiN2l%2FrjfW%2Fhk1LLVTKbankg8w73XN3BkjM9sEE%2FI2D%2F2Yb%2FeM6pQo32Gge%2FthuB%2Bu9IJsDSIDWtwxeZhkfAHmDxTF69fBawUwTzpdXJYOCa5w%2BIZYp4Z8mijElV4bA1NSAkoReS1ZwMsYL5ySGX5XxyOj4vv0yetfmpvlr8fUTG0eIEjXPeXKGftkmPZ80WhVMUE71GpjVKqbGiWWJRKITsAMLisucIGOqUBaUnWWUoC78YeOMmmD9PvVMWobgrV0mfHXevFWxQsqvz9hiNMQx%2BYvqmviSv8nYyKEy8u7nrkHaFuxBS399L3VMyDYDyiCJyh0rCzncnorociqlou80e1rBuYcXWqDO9vql%2Fyj3IrlTN559uMS9QKHyEhtsJRLufNzh4UIMVWxHsy0n8q7ser7G5RdbzggPgo4UeqUf5114Xf0xiCuIXlI%2BpRvwl8&X-Amz-Signature=86cc41277a192891bf0ba83985409c669277f7961e23abb4e669792adfcaac53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKBK6MJZ%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T081052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIGIrla7HGG0U2lsRbvIg%2Bu6EuWX1gqrZYnmERJv31Vr6AiEAoLRuI1CAXlyruhgKucpqEKYazx9wU1bKXFt1YpuH9xkq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDEQqo8JZ90Fo%2B8u%2F4yrcA0JptEENJvxkK3mByNAlQ2ecsKVaK0OvQ5OZWntjDXPuWNNydmdsAqD%2BIk4rjPhdG%2BZgbsgdDaZGx8yLTrzqyEA8LRlbviXMmpzNHFJo16wmCt2VolKF79oFmbPQ3en2a2xLMF%2B2mZxfTQ7oMZw%2F6fYnDVWjkMx1HBl1Sri0srWzf2zz5SZ7%2B7Eym8icP6VaU%2Bj%2BuZvrgQ67B9xPzsVihw2UNXSFKJ5%2FVJj5axcm8wJfYKhq5pSNInoCRkhS8Re7cGmNmetC7bwOd0PkcBq1%2BYKxN0J%2F4bZjBS%2BjcqjmdJ3F2DvhItaE%2FTLmObI%2BqBk%2Bei8JnqLytFvqTfABiqKnc4EbHYa2NS%2B9i6cvwWQ04c4iw7E%2BGu4tZpoFhGrHaQMiFaM8D%2BtCHunYJqt06NXYf6bHdlWNfs5qLxb%2FiN2l%2FrjfW%2Fhk1LLVTKbankg8w73XN3BkjM9sEE%2FI2D%2F2Yb%2FeM6pQo32Gge%2FthuB%2Bu9IJsDSIDWtwxeZhkfAHmDxTF69fBawUwTzpdXJYOCa5w%2BIZYp4Z8mijElV4bA1NSAkoReS1ZwMsYL5ySGX5XxyOj4vv0yetfmpvlr8fUTG0eIEjXPeXKGftkmPZ80WhVMUE71GpjVKqbGiWWJRKITsAMLisucIGOqUBaUnWWUoC78YeOMmmD9PvVMWobgrV0mfHXevFWxQsqvz9hiNMQx%2BYvqmviSv8nYyKEy8u7nrkHaFuxBS399L3VMyDYDyiCJyh0rCzncnorociqlou80e1rBuYcXWqDO9vql%2Fyj3IrlTN559uMS9QKHyEhtsJRLufNzh4UIMVWxHsy0n8q7ser7G5RdbzggPgo4UeqUf5114Xf0xiCuIXlI%2BpRvwl8&X-Amz-Signature=064ef93ea8b167ded92c3c086c635f8d6f13f58a35ca96ba8ad9cbb89ee07f7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
