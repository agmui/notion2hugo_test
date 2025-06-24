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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLWYSXWZ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T132702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIA%2Bh4NarTBRPliigP9Y172P7UV66sfXyMTNWSB9P4sErAiAXxJPmAdHASZf0DyjgqKBU6mflQXAl%2FGQdqbCx4smh7yr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMenV1bo3SNFSz5drBKtwDHrkOXLwHY6rYA%2FsEzU6XnbNkt5r4snxb6KtfrpZee8J1tMnI8uf1iQ7gtDJlu%2BjpHEWIxK%2BzubuqrL6Ht%2ByD98oGAt8g6%2F777OZGorWv4mLck1CO0stHH7tcMTjH%2FW1apss%2FiDoAh7CRPGYRfWbaxGKphWn6IUImy5FUluFhuOQXOQE%2BMZeq%2BwzJpq2iQkywq7nztznF3xEEe9THmfjWFQXQ21jpYvfaSp9NketiGqAdeHqy6Yr%2FyIXdo7Qzp3Kgk4c7CNuz1P0e5UwRaWiMUr5Y7SAAGPxTVj1lhWUipa%2BvyDIoOCuZFDkRQydcn5AensWTALLU57hpJkdCytO%2BGzv%2FrNYb86k2dZFOHR6baMFwHMcY72UcLDav3yq%2B17xBknVNUFz0oSo5GA1P7%2BqpUWIuw0%2BRVD40jK90yDn67Dt7b5mKTxOO05383dKl1n2IZWzGJFmOAIwHhkZEkEJT4P913yWRFUgrF%2Bmkwjm%2FykIGhFKTq7QZvoxvGB5YMVBbtFS6Um6pw%2BEjZkI6thYmUiJG5gL9JmIv4PhGe5jyGFvwdyGyx9K2RqrZdux8aNuWY815N5S2yreOkHy%2FzvLAWnd3brAYica0rAT%2FFa625mxZzB94EaOeM%2FHUjiYwhqLqwgY6pgHOpRMlgm2LVhrk7HataaRhmr%2Bk4IUSg5ipBRUCNMcCxv9TszZRWbJ%2FUEwHg%2Fa6llVoMBlOM0iIIZ6f5A7awsQ79ICwTlSCkXNYjeL0VIyPQhJL%2BdbmCyQvMg%2FTZnAMZY2wzsfnnctCAS25ZNv%2FJhE%2BYZT0THsQyZrX%2FIlK9YK8Q%2FRDIIV6GgXtd8zbSG9DxoL93bxHJn2MWqtnyVWzd7aI8qWhYXZb&X-Amz-Signature=e9d2a4e014fb76a2717b0826064b058dc7fc409990aaa29a9ade1c35fcee5593&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLWYSXWZ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T132703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIA%2Bh4NarTBRPliigP9Y172P7UV66sfXyMTNWSB9P4sErAiAXxJPmAdHASZf0DyjgqKBU6mflQXAl%2FGQdqbCx4smh7yr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMenV1bo3SNFSz5drBKtwDHrkOXLwHY6rYA%2FsEzU6XnbNkt5r4snxb6KtfrpZee8J1tMnI8uf1iQ7gtDJlu%2BjpHEWIxK%2BzubuqrL6Ht%2ByD98oGAt8g6%2F777OZGorWv4mLck1CO0stHH7tcMTjH%2FW1apss%2FiDoAh7CRPGYRfWbaxGKphWn6IUImy5FUluFhuOQXOQE%2BMZeq%2BwzJpq2iQkywq7nztznF3xEEe9THmfjWFQXQ21jpYvfaSp9NketiGqAdeHqy6Yr%2FyIXdo7Qzp3Kgk4c7CNuz1P0e5UwRaWiMUr5Y7SAAGPxTVj1lhWUipa%2BvyDIoOCuZFDkRQydcn5AensWTALLU57hpJkdCytO%2BGzv%2FrNYb86k2dZFOHR6baMFwHMcY72UcLDav3yq%2B17xBknVNUFz0oSo5GA1P7%2BqpUWIuw0%2BRVD40jK90yDn67Dt7b5mKTxOO05383dKl1n2IZWzGJFmOAIwHhkZEkEJT4P913yWRFUgrF%2Bmkwjm%2FykIGhFKTq7QZvoxvGB5YMVBbtFS6Um6pw%2BEjZkI6thYmUiJG5gL9JmIv4PhGe5jyGFvwdyGyx9K2RqrZdux8aNuWY815N5S2yreOkHy%2FzvLAWnd3brAYica0rAT%2FFa625mxZzB94EaOeM%2FHUjiYwhqLqwgY6pgHOpRMlgm2LVhrk7HataaRhmr%2Bk4IUSg5ipBRUCNMcCxv9TszZRWbJ%2FUEwHg%2Fa6llVoMBlOM0iIIZ6f5A7awsQ79ICwTlSCkXNYjeL0VIyPQhJL%2BdbmCyQvMg%2FTZnAMZY2wzsfnnctCAS25ZNv%2FJhE%2BYZT0THsQyZrX%2FIlK9YK8Q%2FRDIIV6GgXtd8zbSG9DxoL93bxHJn2MWqtnyVWzd7aI8qWhYXZb&X-Amz-Signature=e57ad0b760063c1c63db218ea0c14241a9cdd599a9284a1963c23b847bc84f7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLWYSXWZ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T132703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIA%2Bh4NarTBRPliigP9Y172P7UV66sfXyMTNWSB9P4sErAiAXxJPmAdHASZf0DyjgqKBU6mflQXAl%2FGQdqbCx4smh7yr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMenV1bo3SNFSz5drBKtwDHrkOXLwHY6rYA%2FsEzU6XnbNkt5r4snxb6KtfrpZee8J1tMnI8uf1iQ7gtDJlu%2BjpHEWIxK%2BzubuqrL6Ht%2ByD98oGAt8g6%2F777OZGorWv4mLck1CO0stHH7tcMTjH%2FW1apss%2FiDoAh7CRPGYRfWbaxGKphWn6IUImy5FUluFhuOQXOQE%2BMZeq%2BwzJpq2iQkywq7nztznF3xEEe9THmfjWFQXQ21jpYvfaSp9NketiGqAdeHqy6Yr%2FyIXdo7Qzp3Kgk4c7CNuz1P0e5UwRaWiMUr5Y7SAAGPxTVj1lhWUipa%2BvyDIoOCuZFDkRQydcn5AensWTALLU57hpJkdCytO%2BGzv%2FrNYb86k2dZFOHR6baMFwHMcY72UcLDav3yq%2B17xBknVNUFz0oSo5GA1P7%2BqpUWIuw0%2BRVD40jK90yDn67Dt7b5mKTxOO05383dKl1n2IZWzGJFmOAIwHhkZEkEJT4P913yWRFUgrF%2Bmkwjm%2FykIGhFKTq7QZvoxvGB5YMVBbtFS6Um6pw%2BEjZkI6thYmUiJG5gL9JmIv4PhGe5jyGFvwdyGyx9K2RqrZdux8aNuWY815N5S2yreOkHy%2FzvLAWnd3brAYica0rAT%2FFa625mxZzB94EaOeM%2FHUjiYwhqLqwgY6pgHOpRMlgm2LVhrk7HataaRhmr%2Bk4IUSg5ipBRUCNMcCxv9TszZRWbJ%2FUEwHg%2Fa6llVoMBlOM0iIIZ6f5A7awsQ79ICwTlSCkXNYjeL0VIyPQhJL%2BdbmCyQvMg%2FTZnAMZY2wzsfnnctCAS25ZNv%2FJhE%2BYZT0THsQyZrX%2FIlK9YK8Q%2FRDIIV6GgXtd8zbSG9DxoL93bxHJn2MWqtnyVWzd7aI8qWhYXZb&X-Amz-Signature=6ddb1cfa768b9a110e1f7a701617348d10022462011e34624feea062fcc180ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLWYSXWZ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T132703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIA%2Bh4NarTBRPliigP9Y172P7UV66sfXyMTNWSB9P4sErAiAXxJPmAdHASZf0DyjgqKBU6mflQXAl%2FGQdqbCx4smh7yr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMenV1bo3SNFSz5drBKtwDHrkOXLwHY6rYA%2FsEzU6XnbNkt5r4snxb6KtfrpZee8J1tMnI8uf1iQ7gtDJlu%2BjpHEWIxK%2BzubuqrL6Ht%2ByD98oGAt8g6%2F777OZGorWv4mLck1CO0stHH7tcMTjH%2FW1apss%2FiDoAh7CRPGYRfWbaxGKphWn6IUImy5FUluFhuOQXOQE%2BMZeq%2BwzJpq2iQkywq7nztznF3xEEe9THmfjWFQXQ21jpYvfaSp9NketiGqAdeHqy6Yr%2FyIXdo7Qzp3Kgk4c7CNuz1P0e5UwRaWiMUr5Y7SAAGPxTVj1lhWUipa%2BvyDIoOCuZFDkRQydcn5AensWTALLU57hpJkdCytO%2BGzv%2FrNYb86k2dZFOHR6baMFwHMcY72UcLDav3yq%2B17xBknVNUFz0oSo5GA1P7%2BqpUWIuw0%2BRVD40jK90yDn67Dt7b5mKTxOO05383dKl1n2IZWzGJFmOAIwHhkZEkEJT4P913yWRFUgrF%2Bmkwjm%2FykIGhFKTq7QZvoxvGB5YMVBbtFS6Um6pw%2BEjZkI6thYmUiJG5gL9JmIv4PhGe5jyGFvwdyGyx9K2RqrZdux8aNuWY815N5S2yreOkHy%2FzvLAWnd3brAYica0rAT%2FFa625mxZzB94EaOeM%2FHUjiYwhqLqwgY6pgHOpRMlgm2LVhrk7HataaRhmr%2Bk4IUSg5ipBRUCNMcCxv9TszZRWbJ%2FUEwHg%2Fa6llVoMBlOM0iIIZ6f5A7awsQ79ICwTlSCkXNYjeL0VIyPQhJL%2BdbmCyQvMg%2FTZnAMZY2wzsfnnctCAS25ZNv%2FJhE%2BYZT0THsQyZrX%2FIlK9YK8Q%2FRDIIV6GgXtd8zbSG9DxoL93bxHJn2MWqtnyVWzd7aI8qWhYXZb&X-Amz-Signature=f9847ce524412208b59793a8df98474ec8eea97e4a638325c6e27895697e0336&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLWYSXWZ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T132702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIA%2Bh4NarTBRPliigP9Y172P7UV66sfXyMTNWSB9P4sErAiAXxJPmAdHASZf0DyjgqKBU6mflQXAl%2FGQdqbCx4smh7yr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMenV1bo3SNFSz5drBKtwDHrkOXLwHY6rYA%2FsEzU6XnbNkt5r4snxb6KtfrpZee8J1tMnI8uf1iQ7gtDJlu%2BjpHEWIxK%2BzubuqrL6Ht%2ByD98oGAt8g6%2F777OZGorWv4mLck1CO0stHH7tcMTjH%2FW1apss%2FiDoAh7CRPGYRfWbaxGKphWn6IUImy5FUluFhuOQXOQE%2BMZeq%2BwzJpq2iQkywq7nztznF3xEEe9THmfjWFQXQ21jpYvfaSp9NketiGqAdeHqy6Yr%2FyIXdo7Qzp3Kgk4c7CNuz1P0e5UwRaWiMUr5Y7SAAGPxTVj1lhWUipa%2BvyDIoOCuZFDkRQydcn5AensWTALLU57hpJkdCytO%2BGzv%2FrNYb86k2dZFOHR6baMFwHMcY72UcLDav3yq%2B17xBknVNUFz0oSo5GA1P7%2BqpUWIuw0%2BRVD40jK90yDn67Dt7b5mKTxOO05383dKl1n2IZWzGJFmOAIwHhkZEkEJT4P913yWRFUgrF%2Bmkwjm%2FykIGhFKTq7QZvoxvGB5YMVBbtFS6Um6pw%2BEjZkI6thYmUiJG5gL9JmIv4PhGe5jyGFvwdyGyx9K2RqrZdux8aNuWY815N5S2yreOkHy%2FzvLAWnd3brAYica0rAT%2FFa625mxZzB94EaOeM%2FHUjiYwhqLqwgY6pgHOpRMlgm2LVhrk7HataaRhmr%2Bk4IUSg5ipBRUCNMcCxv9TszZRWbJ%2FUEwHg%2Fa6llVoMBlOM0iIIZ6f5A7awsQ79ICwTlSCkXNYjeL0VIyPQhJL%2BdbmCyQvMg%2FTZnAMZY2wzsfnnctCAS25ZNv%2FJhE%2BYZT0THsQyZrX%2FIlK9YK8Q%2FRDIIV6GgXtd8zbSG9DxoL93bxHJn2MWqtnyVWzd7aI8qWhYXZb&X-Amz-Signature=329cab9045dfd6c84680d9c5ff47878f78cd4677b5ce0002cc784d54abeca016&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLWYSXWZ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T132703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIA%2Bh4NarTBRPliigP9Y172P7UV66sfXyMTNWSB9P4sErAiAXxJPmAdHASZf0DyjgqKBU6mflQXAl%2FGQdqbCx4smh7yr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMenV1bo3SNFSz5drBKtwDHrkOXLwHY6rYA%2FsEzU6XnbNkt5r4snxb6KtfrpZee8J1tMnI8uf1iQ7gtDJlu%2BjpHEWIxK%2BzubuqrL6Ht%2ByD98oGAt8g6%2F777OZGorWv4mLck1CO0stHH7tcMTjH%2FW1apss%2FiDoAh7CRPGYRfWbaxGKphWn6IUImy5FUluFhuOQXOQE%2BMZeq%2BwzJpq2iQkywq7nztznF3xEEe9THmfjWFQXQ21jpYvfaSp9NketiGqAdeHqy6Yr%2FyIXdo7Qzp3Kgk4c7CNuz1P0e5UwRaWiMUr5Y7SAAGPxTVj1lhWUipa%2BvyDIoOCuZFDkRQydcn5AensWTALLU57hpJkdCytO%2BGzv%2FrNYb86k2dZFOHR6baMFwHMcY72UcLDav3yq%2B17xBknVNUFz0oSo5GA1P7%2BqpUWIuw0%2BRVD40jK90yDn67Dt7b5mKTxOO05383dKl1n2IZWzGJFmOAIwHhkZEkEJT4P913yWRFUgrF%2Bmkwjm%2FykIGhFKTq7QZvoxvGB5YMVBbtFS6Um6pw%2BEjZkI6thYmUiJG5gL9JmIv4PhGe5jyGFvwdyGyx9K2RqrZdux8aNuWY815N5S2yreOkHy%2FzvLAWnd3brAYica0rAT%2FFa625mxZzB94EaOeM%2FHUjiYwhqLqwgY6pgHOpRMlgm2LVhrk7HataaRhmr%2Bk4IUSg5ipBRUCNMcCxv9TszZRWbJ%2FUEwHg%2Fa6llVoMBlOM0iIIZ6f5A7awsQ79ICwTlSCkXNYjeL0VIyPQhJL%2BdbmCyQvMg%2FTZnAMZY2wzsfnnctCAS25ZNv%2FJhE%2BYZT0THsQyZrX%2FIlK9YK8Q%2FRDIIV6GgXtd8zbSG9DxoL93bxHJn2MWqtnyVWzd7aI8qWhYXZb&X-Amz-Signature=3106aeaccd2e761c80fe4807f088ec2352efd8c22573ca63fc0c990cb1fbe9c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLWYSXWZ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T132703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIA%2Bh4NarTBRPliigP9Y172P7UV66sfXyMTNWSB9P4sErAiAXxJPmAdHASZf0DyjgqKBU6mflQXAl%2FGQdqbCx4smh7yr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMenV1bo3SNFSz5drBKtwDHrkOXLwHY6rYA%2FsEzU6XnbNkt5r4snxb6KtfrpZee8J1tMnI8uf1iQ7gtDJlu%2BjpHEWIxK%2BzubuqrL6Ht%2ByD98oGAt8g6%2F777OZGorWv4mLck1CO0stHH7tcMTjH%2FW1apss%2FiDoAh7CRPGYRfWbaxGKphWn6IUImy5FUluFhuOQXOQE%2BMZeq%2BwzJpq2iQkywq7nztznF3xEEe9THmfjWFQXQ21jpYvfaSp9NketiGqAdeHqy6Yr%2FyIXdo7Qzp3Kgk4c7CNuz1P0e5UwRaWiMUr5Y7SAAGPxTVj1lhWUipa%2BvyDIoOCuZFDkRQydcn5AensWTALLU57hpJkdCytO%2BGzv%2FrNYb86k2dZFOHR6baMFwHMcY72UcLDav3yq%2B17xBknVNUFz0oSo5GA1P7%2BqpUWIuw0%2BRVD40jK90yDn67Dt7b5mKTxOO05383dKl1n2IZWzGJFmOAIwHhkZEkEJT4P913yWRFUgrF%2Bmkwjm%2FykIGhFKTq7QZvoxvGB5YMVBbtFS6Um6pw%2BEjZkI6thYmUiJG5gL9JmIv4PhGe5jyGFvwdyGyx9K2RqrZdux8aNuWY815N5S2yreOkHy%2FzvLAWnd3brAYica0rAT%2FFa625mxZzB94EaOeM%2FHUjiYwhqLqwgY6pgHOpRMlgm2LVhrk7HataaRhmr%2Bk4IUSg5ipBRUCNMcCxv9TszZRWbJ%2FUEwHg%2Fa6llVoMBlOM0iIIZ6f5A7awsQ79ICwTlSCkXNYjeL0VIyPQhJL%2BdbmCyQvMg%2FTZnAMZY2wzsfnnctCAS25ZNv%2FJhE%2BYZT0THsQyZrX%2FIlK9YK8Q%2FRDIIV6GgXtd8zbSG9DxoL93bxHJn2MWqtnyVWzd7aI8qWhYXZb&X-Amz-Signature=b8cad2bebd07dba1f7a732f0c4c3d05f589f91660ccbde3f74abd05f99326e5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
