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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYKKX7TM%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T034000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCWeej2efTu%2F%2Fco0hCfa%2BQpM2ZCB1NdFGyz3aD7qwzJBwIgKzEUQLUSU%2FmhFWhVltePYqbdRuz5qSw3BeBuYBSRPGoqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbqgWeCtO0psPga2CrcA9Ffpc9Mo7G7tOQQOqt%2BTbCYKCb8Q5PeLgUOZ9k0351rreFhLgta83pkVQMu6q0hdMjscnOkNIUQoCCXcZU%2Fivxplv9vw3NL3SDlLLY5sKqlIxGk8xrbmeMgeTJUzYSn3OzdfmkNyPqJEWWaF9%2BQPIn0PG9l4DAN0ZpAixGRYAYGAghXF39T6yfNQXeouYKxsJ1N1RdA8NeIIGo46sAsyTJ0Cc81j%2BfPsW2BJkNYd4XDxoknYgZWjVvVQH9IM6wP2BEJBz%2BfsmaVBlxQDZKcYMB%2B6S85xgLytj2d4%2FfsBJAj5d0F4gCAz3PbwhsK%2FqOPhqBIRaMQiCcn%2FiL5pOLwJYl069PqOyVuYidJXoZBMEaBDHUrJstTp2yDfc4q5fUdTw6aeENWgnlh74hUEOl87BEsWyswmq3j7O%2FW798STky1889orBlb8aEZYT2Nkm1VFlum7hclbl2a10tKvaahybyDT697k9hSzHbSU%2F%2FtnqODuFkuTMXDxxy2fNAzHNSfgAdjTU2785zEkjAaTj7SvpQ2tTfxlmPVuTvQ81UIeIdGM6LcX%2BV%2FqfNqUIAemdvmLPl433SGJNmic5Us5qpFw8lJ752yly6472F6zBreY%2B8I7Mu%2Fq7yyEv36qN4TMJqUqcIGOqUBWtVNdxlt0ORCHlHtY9KUlT5U50RfXN%2B6TSIf0bd9fOFRrwQrtpjyFVRUZLnjoWsrdFUSjKggVajhhJvC3zHSn%2FNl0zW8nl1AtqNKgTL9Lq%2FMS9ZHnmprmI1tKALNxJY2kY7xUpRncpi%2BSNpmY2%2F0QK7HUQFHWj1cvb7h30VIYTa1foO8ErNOLRMFtLiaEbUQ3US85jS3lTNJ7RKd9xAUBCQh9DRJ&X-Amz-Signature=a0c9c81c2bd2dd44bc2f229b318ed297a727761cb1088f247b0725d95f8b1cf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYKKX7TM%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T034000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCWeej2efTu%2F%2Fco0hCfa%2BQpM2ZCB1NdFGyz3aD7qwzJBwIgKzEUQLUSU%2FmhFWhVltePYqbdRuz5qSw3BeBuYBSRPGoqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbqgWeCtO0psPga2CrcA9Ffpc9Mo7G7tOQQOqt%2BTbCYKCb8Q5PeLgUOZ9k0351rreFhLgta83pkVQMu6q0hdMjscnOkNIUQoCCXcZU%2Fivxplv9vw3NL3SDlLLY5sKqlIxGk8xrbmeMgeTJUzYSn3OzdfmkNyPqJEWWaF9%2BQPIn0PG9l4DAN0ZpAixGRYAYGAghXF39T6yfNQXeouYKxsJ1N1RdA8NeIIGo46sAsyTJ0Cc81j%2BfPsW2BJkNYd4XDxoknYgZWjVvVQH9IM6wP2BEJBz%2BfsmaVBlxQDZKcYMB%2B6S85xgLytj2d4%2FfsBJAj5d0F4gCAz3PbwhsK%2FqOPhqBIRaMQiCcn%2FiL5pOLwJYl069PqOyVuYidJXoZBMEaBDHUrJstTp2yDfc4q5fUdTw6aeENWgnlh74hUEOl87BEsWyswmq3j7O%2FW798STky1889orBlb8aEZYT2Nkm1VFlum7hclbl2a10tKvaahybyDT697k9hSzHbSU%2F%2FtnqODuFkuTMXDxxy2fNAzHNSfgAdjTU2785zEkjAaTj7SvpQ2tTfxlmPVuTvQ81UIeIdGM6LcX%2BV%2FqfNqUIAemdvmLPl433SGJNmic5Us5qpFw8lJ752yly6472F6zBreY%2B8I7Mu%2Fq7yyEv36qN4TMJqUqcIGOqUBWtVNdxlt0ORCHlHtY9KUlT5U50RfXN%2B6TSIf0bd9fOFRrwQrtpjyFVRUZLnjoWsrdFUSjKggVajhhJvC3zHSn%2FNl0zW8nl1AtqNKgTL9Lq%2FMS9ZHnmprmI1tKALNxJY2kY7xUpRncpi%2BSNpmY2%2F0QK7HUQFHWj1cvb7h30VIYTa1foO8ErNOLRMFtLiaEbUQ3US85jS3lTNJ7RKd9xAUBCQh9DRJ&X-Amz-Signature=03a10697643473ce795959171d2a58e3254defa965f454bc0bed64263854cf76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYKKX7TM%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T034000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCWeej2efTu%2F%2Fco0hCfa%2BQpM2ZCB1NdFGyz3aD7qwzJBwIgKzEUQLUSU%2FmhFWhVltePYqbdRuz5qSw3BeBuYBSRPGoqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbqgWeCtO0psPga2CrcA9Ffpc9Mo7G7tOQQOqt%2BTbCYKCb8Q5PeLgUOZ9k0351rreFhLgta83pkVQMu6q0hdMjscnOkNIUQoCCXcZU%2Fivxplv9vw3NL3SDlLLY5sKqlIxGk8xrbmeMgeTJUzYSn3OzdfmkNyPqJEWWaF9%2BQPIn0PG9l4DAN0ZpAixGRYAYGAghXF39T6yfNQXeouYKxsJ1N1RdA8NeIIGo46sAsyTJ0Cc81j%2BfPsW2BJkNYd4XDxoknYgZWjVvVQH9IM6wP2BEJBz%2BfsmaVBlxQDZKcYMB%2B6S85xgLytj2d4%2FfsBJAj5d0F4gCAz3PbwhsK%2FqOPhqBIRaMQiCcn%2FiL5pOLwJYl069PqOyVuYidJXoZBMEaBDHUrJstTp2yDfc4q5fUdTw6aeENWgnlh74hUEOl87BEsWyswmq3j7O%2FW798STky1889orBlb8aEZYT2Nkm1VFlum7hclbl2a10tKvaahybyDT697k9hSzHbSU%2F%2FtnqODuFkuTMXDxxy2fNAzHNSfgAdjTU2785zEkjAaTj7SvpQ2tTfxlmPVuTvQ81UIeIdGM6LcX%2BV%2FqfNqUIAemdvmLPl433SGJNmic5Us5qpFw8lJ752yly6472F6zBreY%2B8I7Mu%2Fq7yyEv36qN4TMJqUqcIGOqUBWtVNdxlt0ORCHlHtY9KUlT5U50RfXN%2B6TSIf0bd9fOFRrwQrtpjyFVRUZLnjoWsrdFUSjKggVajhhJvC3zHSn%2FNl0zW8nl1AtqNKgTL9Lq%2FMS9ZHnmprmI1tKALNxJY2kY7xUpRncpi%2BSNpmY2%2F0QK7HUQFHWj1cvb7h30VIYTa1foO8ErNOLRMFtLiaEbUQ3US85jS3lTNJ7RKd9xAUBCQh9DRJ&X-Amz-Signature=ab5a9677c1c652deff0866d5b58147d2baf51bffc59208ce3d1b182c4889fff7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYKKX7TM%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T034000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCWeej2efTu%2F%2Fco0hCfa%2BQpM2ZCB1NdFGyz3aD7qwzJBwIgKzEUQLUSU%2FmhFWhVltePYqbdRuz5qSw3BeBuYBSRPGoqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbqgWeCtO0psPga2CrcA9Ffpc9Mo7G7tOQQOqt%2BTbCYKCb8Q5PeLgUOZ9k0351rreFhLgta83pkVQMu6q0hdMjscnOkNIUQoCCXcZU%2Fivxplv9vw3NL3SDlLLY5sKqlIxGk8xrbmeMgeTJUzYSn3OzdfmkNyPqJEWWaF9%2BQPIn0PG9l4DAN0ZpAixGRYAYGAghXF39T6yfNQXeouYKxsJ1N1RdA8NeIIGo46sAsyTJ0Cc81j%2BfPsW2BJkNYd4XDxoknYgZWjVvVQH9IM6wP2BEJBz%2BfsmaVBlxQDZKcYMB%2B6S85xgLytj2d4%2FfsBJAj5d0F4gCAz3PbwhsK%2FqOPhqBIRaMQiCcn%2FiL5pOLwJYl069PqOyVuYidJXoZBMEaBDHUrJstTp2yDfc4q5fUdTw6aeENWgnlh74hUEOl87BEsWyswmq3j7O%2FW798STky1889orBlb8aEZYT2Nkm1VFlum7hclbl2a10tKvaahybyDT697k9hSzHbSU%2F%2FtnqODuFkuTMXDxxy2fNAzHNSfgAdjTU2785zEkjAaTj7SvpQ2tTfxlmPVuTvQ81UIeIdGM6LcX%2BV%2FqfNqUIAemdvmLPl433SGJNmic5Us5qpFw8lJ752yly6472F6zBreY%2B8I7Mu%2Fq7yyEv36qN4TMJqUqcIGOqUBWtVNdxlt0ORCHlHtY9KUlT5U50RfXN%2B6TSIf0bd9fOFRrwQrtpjyFVRUZLnjoWsrdFUSjKggVajhhJvC3zHSn%2FNl0zW8nl1AtqNKgTL9Lq%2FMS9ZHnmprmI1tKALNxJY2kY7xUpRncpi%2BSNpmY2%2F0QK7HUQFHWj1cvb7h30VIYTa1foO8ErNOLRMFtLiaEbUQ3US85jS3lTNJ7RKd9xAUBCQh9DRJ&X-Amz-Signature=e9820bb3d753d3f4f6006f238aca78583ab770b0e7d5a09839182b8b393b8895&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYKKX7TM%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T034000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCWeej2efTu%2F%2Fco0hCfa%2BQpM2ZCB1NdFGyz3aD7qwzJBwIgKzEUQLUSU%2FmhFWhVltePYqbdRuz5qSw3BeBuYBSRPGoqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbqgWeCtO0psPga2CrcA9Ffpc9Mo7G7tOQQOqt%2BTbCYKCb8Q5PeLgUOZ9k0351rreFhLgta83pkVQMu6q0hdMjscnOkNIUQoCCXcZU%2Fivxplv9vw3NL3SDlLLY5sKqlIxGk8xrbmeMgeTJUzYSn3OzdfmkNyPqJEWWaF9%2BQPIn0PG9l4DAN0ZpAixGRYAYGAghXF39T6yfNQXeouYKxsJ1N1RdA8NeIIGo46sAsyTJ0Cc81j%2BfPsW2BJkNYd4XDxoknYgZWjVvVQH9IM6wP2BEJBz%2BfsmaVBlxQDZKcYMB%2B6S85xgLytj2d4%2FfsBJAj5d0F4gCAz3PbwhsK%2FqOPhqBIRaMQiCcn%2FiL5pOLwJYl069PqOyVuYidJXoZBMEaBDHUrJstTp2yDfc4q5fUdTw6aeENWgnlh74hUEOl87BEsWyswmq3j7O%2FW798STky1889orBlb8aEZYT2Nkm1VFlum7hclbl2a10tKvaahybyDT697k9hSzHbSU%2F%2FtnqODuFkuTMXDxxy2fNAzHNSfgAdjTU2785zEkjAaTj7SvpQ2tTfxlmPVuTvQ81UIeIdGM6LcX%2BV%2FqfNqUIAemdvmLPl433SGJNmic5Us5qpFw8lJ752yly6472F6zBreY%2B8I7Mu%2Fq7yyEv36qN4TMJqUqcIGOqUBWtVNdxlt0ORCHlHtY9KUlT5U50RfXN%2B6TSIf0bd9fOFRrwQrtpjyFVRUZLnjoWsrdFUSjKggVajhhJvC3zHSn%2FNl0zW8nl1AtqNKgTL9Lq%2FMS9ZHnmprmI1tKALNxJY2kY7xUpRncpi%2BSNpmY2%2F0QK7HUQFHWj1cvb7h30VIYTa1foO8ErNOLRMFtLiaEbUQ3US85jS3lTNJ7RKd9xAUBCQh9DRJ&X-Amz-Signature=0e5bc0821b2d4c19991752e067197083e9edee9a5e57d9029ee31b862102a596&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYKKX7TM%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T034000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCWeej2efTu%2F%2Fco0hCfa%2BQpM2ZCB1NdFGyz3aD7qwzJBwIgKzEUQLUSU%2FmhFWhVltePYqbdRuz5qSw3BeBuYBSRPGoqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbqgWeCtO0psPga2CrcA9Ffpc9Mo7G7tOQQOqt%2BTbCYKCb8Q5PeLgUOZ9k0351rreFhLgta83pkVQMu6q0hdMjscnOkNIUQoCCXcZU%2Fivxplv9vw3NL3SDlLLY5sKqlIxGk8xrbmeMgeTJUzYSn3OzdfmkNyPqJEWWaF9%2BQPIn0PG9l4DAN0ZpAixGRYAYGAghXF39T6yfNQXeouYKxsJ1N1RdA8NeIIGo46sAsyTJ0Cc81j%2BfPsW2BJkNYd4XDxoknYgZWjVvVQH9IM6wP2BEJBz%2BfsmaVBlxQDZKcYMB%2B6S85xgLytj2d4%2FfsBJAj5d0F4gCAz3PbwhsK%2FqOPhqBIRaMQiCcn%2FiL5pOLwJYl069PqOyVuYidJXoZBMEaBDHUrJstTp2yDfc4q5fUdTw6aeENWgnlh74hUEOl87BEsWyswmq3j7O%2FW798STky1889orBlb8aEZYT2Nkm1VFlum7hclbl2a10tKvaahybyDT697k9hSzHbSU%2F%2FtnqODuFkuTMXDxxy2fNAzHNSfgAdjTU2785zEkjAaTj7SvpQ2tTfxlmPVuTvQ81UIeIdGM6LcX%2BV%2FqfNqUIAemdvmLPl433SGJNmic5Us5qpFw8lJ752yly6472F6zBreY%2B8I7Mu%2Fq7yyEv36qN4TMJqUqcIGOqUBWtVNdxlt0ORCHlHtY9KUlT5U50RfXN%2B6TSIf0bd9fOFRrwQrtpjyFVRUZLnjoWsrdFUSjKggVajhhJvC3zHSn%2FNl0zW8nl1AtqNKgTL9Lq%2FMS9ZHnmprmI1tKALNxJY2kY7xUpRncpi%2BSNpmY2%2F0QK7HUQFHWj1cvb7h30VIYTa1foO8ErNOLRMFtLiaEbUQ3US85jS3lTNJ7RKd9xAUBCQh9DRJ&X-Amz-Signature=bff7acca0c8848368ec8a0c0c8f849b03b8481a18fd1ac0515c5fab0a760ff17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYKKX7TM%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T034000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCWeej2efTu%2F%2Fco0hCfa%2BQpM2ZCB1NdFGyz3aD7qwzJBwIgKzEUQLUSU%2FmhFWhVltePYqbdRuz5qSw3BeBuYBSRPGoqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbqgWeCtO0psPga2CrcA9Ffpc9Mo7G7tOQQOqt%2BTbCYKCb8Q5PeLgUOZ9k0351rreFhLgta83pkVQMu6q0hdMjscnOkNIUQoCCXcZU%2Fivxplv9vw3NL3SDlLLY5sKqlIxGk8xrbmeMgeTJUzYSn3OzdfmkNyPqJEWWaF9%2BQPIn0PG9l4DAN0ZpAixGRYAYGAghXF39T6yfNQXeouYKxsJ1N1RdA8NeIIGo46sAsyTJ0Cc81j%2BfPsW2BJkNYd4XDxoknYgZWjVvVQH9IM6wP2BEJBz%2BfsmaVBlxQDZKcYMB%2B6S85xgLytj2d4%2FfsBJAj5d0F4gCAz3PbwhsK%2FqOPhqBIRaMQiCcn%2FiL5pOLwJYl069PqOyVuYidJXoZBMEaBDHUrJstTp2yDfc4q5fUdTw6aeENWgnlh74hUEOl87BEsWyswmq3j7O%2FW798STky1889orBlb8aEZYT2Nkm1VFlum7hclbl2a10tKvaahybyDT697k9hSzHbSU%2F%2FtnqODuFkuTMXDxxy2fNAzHNSfgAdjTU2785zEkjAaTj7SvpQ2tTfxlmPVuTvQ81UIeIdGM6LcX%2BV%2FqfNqUIAemdvmLPl433SGJNmic5Us5qpFw8lJ752yly6472F6zBreY%2B8I7Mu%2Fq7yyEv36qN4TMJqUqcIGOqUBWtVNdxlt0ORCHlHtY9KUlT5U50RfXN%2B6TSIf0bd9fOFRrwQrtpjyFVRUZLnjoWsrdFUSjKggVajhhJvC3zHSn%2FNl0zW8nl1AtqNKgTL9Lq%2FMS9ZHnmprmI1tKALNxJY2kY7xUpRncpi%2BSNpmY2%2F0QK7HUQFHWj1cvb7h30VIYTa1foO8ErNOLRMFtLiaEbUQ3US85jS3lTNJ7RKd9xAUBCQh9DRJ&X-Amz-Signature=ccd642d53af399b4dc9c3aed029cc168e168eb4b04115bd33de1bbabc5bbfce4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
