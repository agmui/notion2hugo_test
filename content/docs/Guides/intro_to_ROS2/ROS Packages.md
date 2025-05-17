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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRHPJZCS%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHykXLwXSL%2BBTPiWarEwIwqceWseZSTn4GASp1dEoIBQAiEA9I6KBofZd5FmJMzSutYzqpmwH3kF7tmDf8R5bfpIyysq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDDSrezPVEW5OBCaq%2BSrcA%2B4QyZkHBsFYXXgkNG38GmEvMSe35k09FcD4UYrddXmZ8g4AyUoYwfK8Gqq37lgro%2BFdvnmxU8z9HkkuWFjDk1l37%2Fs9lVMPPU8oIzSFSdPuxzTX3HNV5wgXTNb9lk3Ig5shlvnJL0EWeF1hdufu1ijUQDW6J1bufEJ263B%2BBjSJhFXa5OINMsVx5RukrT7krikHykYk8vIP7P%2FNmDtB1D8rycSWQWNTj0GQlWTEHCJBLU1m5D6sSQPcf%2BvPWkturBtH3txuN%2B27bFIvo%2F4JsQXbG9XjBQggIcZxFra2v9wQUzw6mgS%2BnKnS4ZuUwF%2B6YrJ6tS00DoqAVDqzXdQvnp3rlbNqascrW24BQ5DrxJlaXfz%2FKLD%2FnmO3VKSJ3iXI5q9ytKb9vE8XorDlBZ1LlOf3eeXLwbMgTbeb79yJQwyDaa9y21icxViWEnZN22EAuUwwiKleUPbjHd%2FNW2Oya3Yd9r2O0FXBxzyj1eCm6kMnvoTq%2Bh6tx0YkMuh7gXWTNmPdiX2X2tr2G5F0k2yYcJ7qS2s49oRprALLXSFOPiKcIpFkbwjY0wGTRPRZSRpilW8Itk6DZeBVEBD4w3BT5ACqo8yTJW9zD2fygmevB4iKSG%2FyR9EqLIq3BfOhMLnLo8EGOqUB5PpyiT76nwW7D4hOFUthgXn%2Bd3NBD6mSnpswIK0Hwov%2Fj%2BIvXwYSidvMOS1weSHYXJ7P6qVl8bncPasO7RKEjrDf%2FKgKny6A3wkEBJnbnsOnfUuZVRKJkDM6laN7TqgCOBE4Q8QygTlwhgVFk6jIBLGbo8Sl5DolRrTvSgNgIU5JkDBO8hTJeb65HM8EgG0txS6EnHh%2FDyqj%2F9R%2FQQRu%2B8IZ3ReU&X-Amz-Signature=a48a9388e88ddbf8483be412a087491edb9b3701f1b07d7717b1444a63c7229d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRHPJZCS%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHykXLwXSL%2BBTPiWarEwIwqceWseZSTn4GASp1dEoIBQAiEA9I6KBofZd5FmJMzSutYzqpmwH3kF7tmDf8R5bfpIyysq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDDSrezPVEW5OBCaq%2BSrcA%2B4QyZkHBsFYXXgkNG38GmEvMSe35k09FcD4UYrddXmZ8g4AyUoYwfK8Gqq37lgro%2BFdvnmxU8z9HkkuWFjDk1l37%2Fs9lVMPPU8oIzSFSdPuxzTX3HNV5wgXTNb9lk3Ig5shlvnJL0EWeF1hdufu1ijUQDW6J1bufEJ263B%2BBjSJhFXa5OINMsVx5RukrT7krikHykYk8vIP7P%2FNmDtB1D8rycSWQWNTj0GQlWTEHCJBLU1m5D6sSQPcf%2BvPWkturBtH3txuN%2B27bFIvo%2F4JsQXbG9XjBQggIcZxFra2v9wQUzw6mgS%2BnKnS4ZuUwF%2B6YrJ6tS00DoqAVDqzXdQvnp3rlbNqascrW24BQ5DrxJlaXfz%2FKLD%2FnmO3VKSJ3iXI5q9ytKb9vE8XorDlBZ1LlOf3eeXLwbMgTbeb79yJQwyDaa9y21icxViWEnZN22EAuUwwiKleUPbjHd%2FNW2Oya3Yd9r2O0FXBxzyj1eCm6kMnvoTq%2Bh6tx0YkMuh7gXWTNmPdiX2X2tr2G5F0k2yYcJ7qS2s49oRprALLXSFOPiKcIpFkbwjY0wGTRPRZSRpilW8Itk6DZeBVEBD4w3BT5ACqo8yTJW9zD2fygmevB4iKSG%2FyR9EqLIq3BfOhMLnLo8EGOqUB5PpyiT76nwW7D4hOFUthgXn%2Bd3NBD6mSnpswIK0Hwov%2Fj%2BIvXwYSidvMOS1weSHYXJ7P6qVl8bncPasO7RKEjrDf%2FKgKny6A3wkEBJnbnsOnfUuZVRKJkDM6laN7TqgCOBE4Q8QygTlwhgVFk6jIBLGbo8Sl5DolRrTvSgNgIU5JkDBO8hTJeb65HM8EgG0txS6EnHh%2FDyqj%2F9R%2FQQRu%2B8IZ3ReU&X-Amz-Signature=642db8b54e6032bf28bddce028b0c86a976286e199ff9d0a763931d8e4042bca&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRHPJZCS%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHykXLwXSL%2BBTPiWarEwIwqceWseZSTn4GASp1dEoIBQAiEA9I6KBofZd5FmJMzSutYzqpmwH3kF7tmDf8R5bfpIyysq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDDSrezPVEW5OBCaq%2BSrcA%2B4QyZkHBsFYXXgkNG38GmEvMSe35k09FcD4UYrddXmZ8g4AyUoYwfK8Gqq37lgro%2BFdvnmxU8z9HkkuWFjDk1l37%2Fs9lVMPPU8oIzSFSdPuxzTX3HNV5wgXTNb9lk3Ig5shlvnJL0EWeF1hdufu1ijUQDW6J1bufEJ263B%2BBjSJhFXa5OINMsVx5RukrT7krikHykYk8vIP7P%2FNmDtB1D8rycSWQWNTj0GQlWTEHCJBLU1m5D6sSQPcf%2BvPWkturBtH3txuN%2B27bFIvo%2F4JsQXbG9XjBQggIcZxFra2v9wQUzw6mgS%2BnKnS4ZuUwF%2B6YrJ6tS00DoqAVDqzXdQvnp3rlbNqascrW24BQ5DrxJlaXfz%2FKLD%2FnmO3VKSJ3iXI5q9ytKb9vE8XorDlBZ1LlOf3eeXLwbMgTbeb79yJQwyDaa9y21icxViWEnZN22EAuUwwiKleUPbjHd%2FNW2Oya3Yd9r2O0FXBxzyj1eCm6kMnvoTq%2Bh6tx0YkMuh7gXWTNmPdiX2X2tr2G5F0k2yYcJ7qS2s49oRprALLXSFOPiKcIpFkbwjY0wGTRPRZSRpilW8Itk6DZeBVEBD4w3BT5ACqo8yTJW9zD2fygmevB4iKSG%2FyR9EqLIq3BfOhMLnLo8EGOqUB5PpyiT76nwW7D4hOFUthgXn%2Bd3NBD6mSnpswIK0Hwov%2Fj%2BIvXwYSidvMOS1weSHYXJ7P6qVl8bncPasO7RKEjrDf%2FKgKny6A3wkEBJnbnsOnfUuZVRKJkDM6laN7TqgCOBE4Q8QygTlwhgVFk6jIBLGbo8Sl5DolRrTvSgNgIU5JkDBO8hTJeb65HM8EgG0txS6EnHh%2FDyqj%2F9R%2FQQRu%2B8IZ3ReU&X-Amz-Signature=9ff0c4d1963ad9a36ec354f71d4b913f8f8de19ea2d5dd5311d66642abe77cc5&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRHPJZCS%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHykXLwXSL%2BBTPiWarEwIwqceWseZSTn4GASp1dEoIBQAiEA9I6KBofZd5FmJMzSutYzqpmwH3kF7tmDf8R5bfpIyysq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDDSrezPVEW5OBCaq%2BSrcA%2B4QyZkHBsFYXXgkNG38GmEvMSe35k09FcD4UYrddXmZ8g4AyUoYwfK8Gqq37lgro%2BFdvnmxU8z9HkkuWFjDk1l37%2Fs9lVMPPU8oIzSFSdPuxzTX3HNV5wgXTNb9lk3Ig5shlvnJL0EWeF1hdufu1ijUQDW6J1bufEJ263B%2BBjSJhFXa5OINMsVx5RukrT7krikHykYk8vIP7P%2FNmDtB1D8rycSWQWNTj0GQlWTEHCJBLU1m5D6sSQPcf%2BvPWkturBtH3txuN%2B27bFIvo%2F4JsQXbG9XjBQggIcZxFra2v9wQUzw6mgS%2BnKnS4ZuUwF%2B6YrJ6tS00DoqAVDqzXdQvnp3rlbNqascrW24BQ5DrxJlaXfz%2FKLD%2FnmO3VKSJ3iXI5q9ytKb9vE8XorDlBZ1LlOf3eeXLwbMgTbeb79yJQwyDaa9y21icxViWEnZN22EAuUwwiKleUPbjHd%2FNW2Oya3Yd9r2O0FXBxzyj1eCm6kMnvoTq%2Bh6tx0YkMuh7gXWTNmPdiX2X2tr2G5F0k2yYcJ7qS2s49oRprALLXSFOPiKcIpFkbwjY0wGTRPRZSRpilW8Itk6DZeBVEBD4w3BT5ACqo8yTJW9zD2fygmevB4iKSG%2FyR9EqLIq3BfOhMLnLo8EGOqUB5PpyiT76nwW7D4hOFUthgXn%2Bd3NBD6mSnpswIK0Hwov%2Fj%2BIvXwYSidvMOS1weSHYXJ7P6qVl8bncPasO7RKEjrDf%2FKgKny6A3wkEBJnbnsOnfUuZVRKJkDM6laN7TqgCOBE4Q8QygTlwhgVFk6jIBLGbo8Sl5DolRrTvSgNgIU5JkDBO8hTJeb65HM8EgG0txS6EnHh%2FDyqj%2F9R%2FQQRu%2B8IZ3ReU&X-Amz-Signature=8708867cf3bdfb99e27a54e8d7bba69271c5b88e7bd7ab39d9c87518cdb6938d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRHPJZCS%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHykXLwXSL%2BBTPiWarEwIwqceWseZSTn4GASp1dEoIBQAiEA9I6KBofZd5FmJMzSutYzqpmwH3kF7tmDf8R5bfpIyysq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDDSrezPVEW5OBCaq%2BSrcA%2B4QyZkHBsFYXXgkNG38GmEvMSe35k09FcD4UYrddXmZ8g4AyUoYwfK8Gqq37lgro%2BFdvnmxU8z9HkkuWFjDk1l37%2Fs9lVMPPU8oIzSFSdPuxzTX3HNV5wgXTNb9lk3Ig5shlvnJL0EWeF1hdufu1ijUQDW6J1bufEJ263B%2BBjSJhFXa5OINMsVx5RukrT7krikHykYk8vIP7P%2FNmDtB1D8rycSWQWNTj0GQlWTEHCJBLU1m5D6sSQPcf%2BvPWkturBtH3txuN%2B27bFIvo%2F4JsQXbG9XjBQggIcZxFra2v9wQUzw6mgS%2BnKnS4ZuUwF%2B6YrJ6tS00DoqAVDqzXdQvnp3rlbNqascrW24BQ5DrxJlaXfz%2FKLD%2FnmO3VKSJ3iXI5q9ytKb9vE8XorDlBZ1LlOf3eeXLwbMgTbeb79yJQwyDaa9y21icxViWEnZN22EAuUwwiKleUPbjHd%2FNW2Oya3Yd9r2O0FXBxzyj1eCm6kMnvoTq%2Bh6tx0YkMuh7gXWTNmPdiX2X2tr2G5F0k2yYcJ7qS2s49oRprALLXSFOPiKcIpFkbwjY0wGTRPRZSRpilW8Itk6DZeBVEBD4w3BT5ACqo8yTJW9zD2fygmevB4iKSG%2FyR9EqLIq3BfOhMLnLo8EGOqUB5PpyiT76nwW7D4hOFUthgXn%2Bd3NBD6mSnpswIK0Hwov%2Fj%2BIvXwYSidvMOS1weSHYXJ7P6qVl8bncPasO7RKEjrDf%2FKgKny6A3wkEBJnbnsOnfUuZVRKJkDM6laN7TqgCOBE4Q8QygTlwhgVFk6jIBLGbo8Sl5DolRrTvSgNgIU5JkDBO8hTJeb65HM8EgG0txS6EnHh%2FDyqj%2F9R%2FQQRu%2B8IZ3ReU&X-Amz-Signature=803b26aa4eaf319fafae05d3683873c69bb18abc8f7cf41b12ded96731fe8399&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRHPJZCS%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHykXLwXSL%2BBTPiWarEwIwqceWseZSTn4GASp1dEoIBQAiEA9I6KBofZd5FmJMzSutYzqpmwH3kF7tmDf8R5bfpIyysq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDDSrezPVEW5OBCaq%2BSrcA%2B4QyZkHBsFYXXgkNG38GmEvMSe35k09FcD4UYrddXmZ8g4AyUoYwfK8Gqq37lgro%2BFdvnmxU8z9HkkuWFjDk1l37%2Fs9lVMPPU8oIzSFSdPuxzTX3HNV5wgXTNb9lk3Ig5shlvnJL0EWeF1hdufu1ijUQDW6J1bufEJ263B%2BBjSJhFXa5OINMsVx5RukrT7krikHykYk8vIP7P%2FNmDtB1D8rycSWQWNTj0GQlWTEHCJBLU1m5D6sSQPcf%2BvPWkturBtH3txuN%2B27bFIvo%2F4JsQXbG9XjBQggIcZxFra2v9wQUzw6mgS%2BnKnS4ZuUwF%2B6YrJ6tS00DoqAVDqzXdQvnp3rlbNqascrW24BQ5DrxJlaXfz%2FKLD%2FnmO3VKSJ3iXI5q9ytKb9vE8XorDlBZ1LlOf3eeXLwbMgTbeb79yJQwyDaa9y21icxViWEnZN22EAuUwwiKleUPbjHd%2FNW2Oya3Yd9r2O0FXBxzyj1eCm6kMnvoTq%2Bh6tx0YkMuh7gXWTNmPdiX2X2tr2G5F0k2yYcJ7qS2s49oRprALLXSFOPiKcIpFkbwjY0wGTRPRZSRpilW8Itk6DZeBVEBD4w3BT5ACqo8yTJW9zD2fygmevB4iKSG%2FyR9EqLIq3BfOhMLnLo8EGOqUB5PpyiT76nwW7D4hOFUthgXn%2Bd3NBD6mSnpswIK0Hwov%2Fj%2BIvXwYSidvMOS1weSHYXJ7P6qVl8bncPasO7RKEjrDf%2FKgKny6A3wkEBJnbnsOnfUuZVRKJkDM6laN7TqgCOBE4Q8QygTlwhgVFk6jIBLGbo8Sl5DolRrTvSgNgIU5JkDBO8hTJeb65HM8EgG0txS6EnHh%2FDyqj%2F9R%2FQQRu%2B8IZ3ReU&X-Amz-Signature=cbab36739edd4c339ad1f5947f64051b3180bcc394cfd67d56d40cad2ca34587&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRHPJZCS%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHykXLwXSL%2BBTPiWarEwIwqceWseZSTn4GASp1dEoIBQAiEA9I6KBofZd5FmJMzSutYzqpmwH3kF7tmDf8R5bfpIyysq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDDSrezPVEW5OBCaq%2BSrcA%2B4QyZkHBsFYXXgkNG38GmEvMSe35k09FcD4UYrddXmZ8g4AyUoYwfK8Gqq37lgro%2BFdvnmxU8z9HkkuWFjDk1l37%2Fs9lVMPPU8oIzSFSdPuxzTX3HNV5wgXTNb9lk3Ig5shlvnJL0EWeF1hdufu1ijUQDW6J1bufEJ263B%2BBjSJhFXa5OINMsVx5RukrT7krikHykYk8vIP7P%2FNmDtB1D8rycSWQWNTj0GQlWTEHCJBLU1m5D6sSQPcf%2BvPWkturBtH3txuN%2B27bFIvo%2F4JsQXbG9XjBQggIcZxFra2v9wQUzw6mgS%2BnKnS4ZuUwF%2B6YrJ6tS00DoqAVDqzXdQvnp3rlbNqascrW24BQ5DrxJlaXfz%2FKLD%2FnmO3VKSJ3iXI5q9ytKb9vE8XorDlBZ1LlOf3eeXLwbMgTbeb79yJQwyDaa9y21icxViWEnZN22EAuUwwiKleUPbjHd%2FNW2Oya3Yd9r2O0FXBxzyj1eCm6kMnvoTq%2Bh6tx0YkMuh7gXWTNmPdiX2X2tr2G5F0k2yYcJ7qS2s49oRprALLXSFOPiKcIpFkbwjY0wGTRPRZSRpilW8Itk6DZeBVEBD4w3BT5ACqo8yTJW9zD2fygmevB4iKSG%2FyR9EqLIq3BfOhMLnLo8EGOqUB5PpyiT76nwW7D4hOFUthgXn%2Bd3NBD6mSnpswIK0Hwov%2Fj%2BIvXwYSidvMOS1weSHYXJ7P6qVl8bncPasO7RKEjrDf%2FKgKny6A3wkEBJnbnsOnfUuZVRKJkDM6laN7TqgCOBE4Q8QygTlwhgVFk6jIBLGbo8Sl5DolRrTvSgNgIU5JkDBO8hTJeb65HM8EgG0txS6EnHh%2FDyqj%2F9R%2FQQRu%2B8IZ3ReU&X-Amz-Signature=6608237c77b82964c67b43d7f0b0fd54b897996bb70aa8844aca1713bf3f9135&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
