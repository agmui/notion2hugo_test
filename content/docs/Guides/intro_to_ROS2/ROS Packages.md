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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z7B5KIP%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T121613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW4R1C1zAdVr4TehIU95vFgTI3GTUC7HJ%2F%2BAWHk5QqzgIhAIqommG1c4UfU1St1VVRxPt30VW7qkFr4OBnt1Foh1EwKv8DCEUQABoMNjM3NDIzMTgzODA1IgzMYRUHORFcD39ohPQq3ANctAV800UXkKTf4aowfyKZcJ9eQmnhjx5RF2kY%2BPcStH1vefmGCZ4z1D%2F6ane5xv2n65ZKX86uL0zxuLIAuIA2w%2Fvze36uW1KsWSFSqwjxTGUM4X3%2B0JIgdRn5wJsVgHBK3En1qmivsu6ECnb5M80482It8Z61M78zuu7hc20v8yJyxK2yyZz8xXVwrmsa1EfShFMLjcMoqFKaInRvzBRqyolfSPPE3Wajb%2BI7E6KJ4WPHAbzgEKhv3iTv512sN3LnRBtsvaDB5XGP6FFqhY6tQmBfxb23U9LdFu8stY%2Fg7Qap4pSc5BiL3rdYxEEMwYvj7h%2BPiwEGXbN34lVtQP68igKZ%2B%2FA7AS%2FsbH3fSj8OkSalrMtsEsCllBDnkyCsVP67RoId%2BbPkd7LQDlNlHhEABZLMHNK2tcCg5EqY2cpelN4tp7pP29wMZGLO%2FcRakqTnLBQuGbfsOCewXFnhRCZAdRkYFcuz4C7X%2FztN9BatDGhEZyy39%2BqejKQesK8a1U0lK5JXL9Xd5aYDZgQeTYY%2F0llOthWdaLIvHulnek%2FGnL8zCdXDWqtJDjbJ1ZDHwsKUqehc7nFXtLfXm%2BKKfyBv5lwGovJQG0daGfwabEPB%2FTQEjfYhYQwQS3yjRjCFw5zBBjqkAb1gFq5RSm05yqR52UmWixTutnZ0yeUUGsJuQYrZFPE6ZIhoA4%2BAYATyYnqIB71N8nxETmY2i%2Bh1Qd60Hb46FCa%2BczowhkX9JQKjXJVj92qpV7enEFCsQL37klExtPgfC6NgC6jE9fVxHLtH8aU28aZPfSp3ak1%2Bcx1wZdg14fAmcmwrx6GpWDsGqKE8EFtB0YTyHFjK5Nrjd7%2F%2BaZtljr2lAaVH&X-Amz-Signature=23b35dff4aca43573b475cffb82b6b17410fecc627cdc52a356909ce6a565480&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z7B5KIP%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T121613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW4R1C1zAdVr4TehIU95vFgTI3GTUC7HJ%2F%2BAWHk5QqzgIhAIqommG1c4UfU1St1VVRxPt30VW7qkFr4OBnt1Foh1EwKv8DCEUQABoMNjM3NDIzMTgzODA1IgzMYRUHORFcD39ohPQq3ANctAV800UXkKTf4aowfyKZcJ9eQmnhjx5RF2kY%2BPcStH1vefmGCZ4z1D%2F6ane5xv2n65ZKX86uL0zxuLIAuIA2w%2Fvze36uW1KsWSFSqwjxTGUM4X3%2B0JIgdRn5wJsVgHBK3En1qmivsu6ECnb5M80482It8Z61M78zuu7hc20v8yJyxK2yyZz8xXVwrmsa1EfShFMLjcMoqFKaInRvzBRqyolfSPPE3Wajb%2BI7E6KJ4WPHAbzgEKhv3iTv512sN3LnRBtsvaDB5XGP6FFqhY6tQmBfxb23U9LdFu8stY%2Fg7Qap4pSc5BiL3rdYxEEMwYvj7h%2BPiwEGXbN34lVtQP68igKZ%2B%2FA7AS%2FsbH3fSj8OkSalrMtsEsCllBDnkyCsVP67RoId%2BbPkd7LQDlNlHhEABZLMHNK2tcCg5EqY2cpelN4tp7pP29wMZGLO%2FcRakqTnLBQuGbfsOCewXFnhRCZAdRkYFcuz4C7X%2FztN9BatDGhEZyy39%2BqejKQesK8a1U0lK5JXL9Xd5aYDZgQeTYY%2F0llOthWdaLIvHulnek%2FGnL8zCdXDWqtJDjbJ1ZDHwsKUqehc7nFXtLfXm%2BKKfyBv5lwGovJQG0daGfwabEPB%2FTQEjfYhYQwQS3yjRjCFw5zBBjqkAb1gFq5RSm05yqR52UmWixTutnZ0yeUUGsJuQYrZFPE6ZIhoA4%2BAYATyYnqIB71N8nxETmY2i%2Bh1Qd60Hb46FCa%2BczowhkX9JQKjXJVj92qpV7enEFCsQL37klExtPgfC6NgC6jE9fVxHLtH8aU28aZPfSp3ak1%2Bcx1wZdg14fAmcmwrx6GpWDsGqKE8EFtB0YTyHFjK5Nrjd7%2F%2BaZtljr2lAaVH&X-Amz-Signature=e81ae25c788018944aa6688df3908764012b123a9eac299fde6d49b91d693a76&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z7B5KIP%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T121613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW4R1C1zAdVr4TehIU95vFgTI3GTUC7HJ%2F%2BAWHk5QqzgIhAIqommG1c4UfU1St1VVRxPt30VW7qkFr4OBnt1Foh1EwKv8DCEUQABoMNjM3NDIzMTgzODA1IgzMYRUHORFcD39ohPQq3ANctAV800UXkKTf4aowfyKZcJ9eQmnhjx5RF2kY%2BPcStH1vefmGCZ4z1D%2F6ane5xv2n65ZKX86uL0zxuLIAuIA2w%2Fvze36uW1KsWSFSqwjxTGUM4X3%2B0JIgdRn5wJsVgHBK3En1qmivsu6ECnb5M80482It8Z61M78zuu7hc20v8yJyxK2yyZz8xXVwrmsa1EfShFMLjcMoqFKaInRvzBRqyolfSPPE3Wajb%2BI7E6KJ4WPHAbzgEKhv3iTv512sN3LnRBtsvaDB5XGP6FFqhY6tQmBfxb23U9LdFu8stY%2Fg7Qap4pSc5BiL3rdYxEEMwYvj7h%2BPiwEGXbN34lVtQP68igKZ%2B%2FA7AS%2FsbH3fSj8OkSalrMtsEsCllBDnkyCsVP67RoId%2BbPkd7LQDlNlHhEABZLMHNK2tcCg5EqY2cpelN4tp7pP29wMZGLO%2FcRakqTnLBQuGbfsOCewXFnhRCZAdRkYFcuz4C7X%2FztN9BatDGhEZyy39%2BqejKQesK8a1U0lK5JXL9Xd5aYDZgQeTYY%2F0llOthWdaLIvHulnek%2FGnL8zCdXDWqtJDjbJ1ZDHwsKUqehc7nFXtLfXm%2BKKfyBv5lwGovJQG0daGfwabEPB%2FTQEjfYhYQwQS3yjRjCFw5zBBjqkAb1gFq5RSm05yqR52UmWixTutnZ0yeUUGsJuQYrZFPE6ZIhoA4%2BAYATyYnqIB71N8nxETmY2i%2Bh1Qd60Hb46FCa%2BczowhkX9JQKjXJVj92qpV7enEFCsQL37klExtPgfC6NgC6jE9fVxHLtH8aU28aZPfSp3ak1%2Bcx1wZdg14fAmcmwrx6GpWDsGqKE8EFtB0YTyHFjK5Nrjd7%2F%2BaZtljr2lAaVH&X-Amz-Signature=08076320cf1a6a3da08c2d220b12e3e06277d34a2d4c75f56661fe7ffaf08747&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z7B5KIP%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T121613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW4R1C1zAdVr4TehIU95vFgTI3GTUC7HJ%2F%2BAWHk5QqzgIhAIqommG1c4UfU1St1VVRxPt30VW7qkFr4OBnt1Foh1EwKv8DCEUQABoMNjM3NDIzMTgzODA1IgzMYRUHORFcD39ohPQq3ANctAV800UXkKTf4aowfyKZcJ9eQmnhjx5RF2kY%2BPcStH1vefmGCZ4z1D%2F6ane5xv2n65ZKX86uL0zxuLIAuIA2w%2Fvze36uW1KsWSFSqwjxTGUM4X3%2B0JIgdRn5wJsVgHBK3En1qmivsu6ECnb5M80482It8Z61M78zuu7hc20v8yJyxK2yyZz8xXVwrmsa1EfShFMLjcMoqFKaInRvzBRqyolfSPPE3Wajb%2BI7E6KJ4WPHAbzgEKhv3iTv512sN3LnRBtsvaDB5XGP6FFqhY6tQmBfxb23U9LdFu8stY%2Fg7Qap4pSc5BiL3rdYxEEMwYvj7h%2BPiwEGXbN34lVtQP68igKZ%2B%2FA7AS%2FsbH3fSj8OkSalrMtsEsCllBDnkyCsVP67RoId%2BbPkd7LQDlNlHhEABZLMHNK2tcCg5EqY2cpelN4tp7pP29wMZGLO%2FcRakqTnLBQuGbfsOCewXFnhRCZAdRkYFcuz4C7X%2FztN9BatDGhEZyy39%2BqejKQesK8a1U0lK5JXL9Xd5aYDZgQeTYY%2F0llOthWdaLIvHulnek%2FGnL8zCdXDWqtJDjbJ1ZDHwsKUqehc7nFXtLfXm%2BKKfyBv5lwGovJQG0daGfwabEPB%2FTQEjfYhYQwQS3yjRjCFw5zBBjqkAb1gFq5RSm05yqR52UmWixTutnZ0yeUUGsJuQYrZFPE6ZIhoA4%2BAYATyYnqIB71N8nxETmY2i%2Bh1Qd60Hb46FCa%2BczowhkX9JQKjXJVj92qpV7enEFCsQL37klExtPgfC6NgC6jE9fVxHLtH8aU28aZPfSp3ak1%2Bcx1wZdg14fAmcmwrx6GpWDsGqKE8EFtB0YTyHFjK5Nrjd7%2F%2BaZtljr2lAaVH&X-Amz-Signature=33b3f6a6fc5cee9d178f0b0059052905693a900dd4362ec10207ab05b2402f0f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z7B5KIP%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T121613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW4R1C1zAdVr4TehIU95vFgTI3GTUC7HJ%2F%2BAWHk5QqzgIhAIqommG1c4UfU1St1VVRxPt30VW7qkFr4OBnt1Foh1EwKv8DCEUQABoMNjM3NDIzMTgzODA1IgzMYRUHORFcD39ohPQq3ANctAV800UXkKTf4aowfyKZcJ9eQmnhjx5RF2kY%2BPcStH1vefmGCZ4z1D%2F6ane5xv2n65ZKX86uL0zxuLIAuIA2w%2Fvze36uW1KsWSFSqwjxTGUM4X3%2B0JIgdRn5wJsVgHBK3En1qmivsu6ECnb5M80482It8Z61M78zuu7hc20v8yJyxK2yyZz8xXVwrmsa1EfShFMLjcMoqFKaInRvzBRqyolfSPPE3Wajb%2BI7E6KJ4WPHAbzgEKhv3iTv512sN3LnRBtsvaDB5XGP6FFqhY6tQmBfxb23U9LdFu8stY%2Fg7Qap4pSc5BiL3rdYxEEMwYvj7h%2BPiwEGXbN34lVtQP68igKZ%2B%2FA7AS%2FsbH3fSj8OkSalrMtsEsCllBDnkyCsVP67RoId%2BbPkd7LQDlNlHhEABZLMHNK2tcCg5EqY2cpelN4tp7pP29wMZGLO%2FcRakqTnLBQuGbfsOCewXFnhRCZAdRkYFcuz4C7X%2FztN9BatDGhEZyy39%2BqejKQesK8a1U0lK5JXL9Xd5aYDZgQeTYY%2F0llOthWdaLIvHulnek%2FGnL8zCdXDWqtJDjbJ1ZDHwsKUqehc7nFXtLfXm%2BKKfyBv5lwGovJQG0daGfwabEPB%2FTQEjfYhYQwQS3yjRjCFw5zBBjqkAb1gFq5RSm05yqR52UmWixTutnZ0yeUUGsJuQYrZFPE6ZIhoA4%2BAYATyYnqIB71N8nxETmY2i%2Bh1Qd60Hb46FCa%2BczowhkX9JQKjXJVj92qpV7enEFCsQL37klExtPgfC6NgC6jE9fVxHLtH8aU28aZPfSp3ak1%2Bcx1wZdg14fAmcmwrx6GpWDsGqKE8EFtB0YTyHFjK5Nrjd7%2F%2BaZtljr2lAaVH&X-Amz-Signature=40e993ddf1d72825ff5f40b5a653bd5ba9793ec924c08995adb3b39eaca3eb86&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z7B5KIP%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T121613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW4R1C1zAdVr4TehIU95vFgTI3GTUC7HJ%2F%2BAWHk5QqzgIhAIqommG1c4UfU1St1VVRxPt30VW7qkFr4OBnt1Foh1EwKv8DCEUQABoMNjM3NDIzMTgzODA1IgzMYRUHORFcD39ohPQq3ANctAV800UXkKTf4aowfyKZcJ9eQmnhjx5RF2kY%2BPcStH1vefmGCZ4z1D%2F6ane5xv2n65ZKX86uL0zxuLIAuIA2w%2Fvze36uW1KsWSFSqwjxTGUM4X3%2B0JIgdRn5wJsVgHBK3En1qmivsu6ECnb5M80482It8Z61M78zuu7hc20v8yJyxK2yyZz8xXVwrmsa1EfShFMLjcMoqFKaInRvzBRqyolfSPPE3Wajb%2BI7E6KJ4WPHAbzgEKhv3iTv512sN3LnRBtsvaDB5XGP6FFqhY6tQmBfxb23U9LdFu8stY%2Fg7Qap4pSc5BiL3rdYxEEMwYvj7h%2BPiwEGXbN34lVtQP68igKZ%2B%2FA7AS%2FsbH3fSj8OkSalrMtsEsCllBDnkyCsVP67RoId%2BbPkd7LQDlNlHhEABZLMHNK2tcCg5EqY2cpelN4tp7pP29wMZGLO%2FcRakqTnLBQuGbfsOCewXFnhRCZAdRkYFcuz4C7X%2FztN9BatDGhEZyy39%2BqejKQesK8a1U0lK5JXL9Xd5aYDZgQeTYY%2F0llOthWdaLIvHulnek%2FGnL8zCdXDWqtJDjbJ1ZDHwsKUqehc7nFXtLfXm%2BKKfyBv5lwGovJQG0daGfwabEPB%2FTQEjfYhYQwQS3yjRjCFw5zBBjqkAb1gFq5RSm05yqR52UmWixTutnZ0yeUUGsJuQYrZFPE6ZIhoA4%2BAYATyYnqIB71N8nxETmY2i%2Bh1Qd60Hb46FCa%2BczowhkX9JQKjXJVj92qpV7enEFCsQL37klExtPgfC6NgC6jE9fVxHLtH8aU28aZPfSp3ak1%2Bcx1wZdg14fAmcmwrx6GpWDsGqKE8EFtB0YTyHFjK5Nrjd7%2F%2BaZtljr2lAaVH&X-Amz-Signature=091a146455b512a94cad30c6d5e76547d3ec695560258defba118af13300b804&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z7B5KIP%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T121613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW4R1C1zAdVr4TehIU95vFgTI3GTUC7HJ%2F%2BAWHk5QqzgIhAIqommG1c4UfU1St1VVRxPt30VW7qkFr4OBnt1Foh1EwKv8DCEUQABoMNjM3NDIzMTgzODA1IgzMYRUHORFcD39ohPQq3ANctAV800UXkKTf4aowfyKZcJ9eQmnhjx5RF2kY%2BPcStH1vefmGCZ4z1D%2F6ane5xv2n65ZKX86uL0zxuLIAuIA2w%2Fvze36uW1KsWSFSqwjxTGUM4X3%2B0JIgdRn5wJsVgHBK3En1qmivsu6ECnb5M80482It8Z61M78zuu7hc20v8yJyxK2yyZz8xXVwrmsa1EfShFMLjcMoqFKaInRvzBRqyolfSPPE3Wajb%2BI7E6KJ4WPHAbzgEKhv3iTv512sN3LnRBtsvaDB5XGP6FFqhY6tQmBfxb23U9LdFu8stY%2Fg7Qap4pSc5BiL3rdYxEEMwYvj7h%2BPiwEGXbN34lVtQP68igKZ%2B%2FA7AS%2FsbH3fSj8OkSalrMtsEsCllBDnkyCsVP67RoId%2BbPkd7LQDlNlHhEABZLMHNK2tcCg5EqY2cpelN4tp7pP29wMZGLO%2FcRakqTnLBQuGbfsOCewXFnhRCZAdRkYFcuz4C7X%2FztN9BatDGhEZyy39%2BqejKQesK8a1U0lK5JXL9Xd5aYDZgQeTYY%2F0llOthWdaLIvHulnek%2FGnL8zCdXDWqtJDjbJ1ZDHwsKUqehc7nFXtLfXm%2BKKfyBv5lwGovJQG0daGfwabEPB%2FTQEjfYhYQwQS3yjRjCFw5zBBjqkAb1gFq5RSm05yqR52UmWixTutnZ0yeUUGsJuQYrZFPE6ZIhoA4%2BAYATyYnqIB71N8nxETmY2i%2Bh1Qd60Hb46FCa%2BczowhkX9JQKjXJVj92qpV7enEFCsQL37klExtPgfC6NgC6jE9fVxHLtH8aU28aZPfSp3ak1%2Bcx1wZdg14fAmcmwrx6GpWDsGqKE8EFtB0YTyHFjK5Nrjd7%2F%2BaZtljr2lAaVH&X-Amz-Signature=39dc7377a4e1965997a3793637f127003286ed1a88a0c29ca76108d25b92b527&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
