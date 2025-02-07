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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TEDU6JO%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T090810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCFj1%2BlpA9w9PkJsl0YXcyHTcbNl4O%2F8P%2BlYQArbyIhWAIgFgY8IvUWzNMqdkQ%2Fa8uCL1343DKQq0GhHkGox%2FX4JDMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEcBn1GWZLltoEscRircAxtESN%2BmaQ0z8pB%2Ffnxm7MDNZw81rpuvUST7Xl7WVbHJkeT2w7HcdwiZfiV8cKGb2raGrMuydnHAWqgmHAPRuT955Z6rYKluOCsAW2FxOY%2FZ%2FNiHpMWFotM3u2rLO8MsapjsUBr9sPWjh%2Ffol4ulnL1osLQhJ1%2Fo3aE%2BsqhIFWemA8BA4Bq3ScbzqQn0Civl%2FKcAHxtj1H9WVmvJvMnzrzkYsNrk%2F3yyokxW0ylWCAG9MzHShzZv6vYs%2BrMHxPfIUp4arTp6GFu7oO2HhvkE4%2FLG4nB3AL0bhbjj8dO9B8JZ5U9rliwWr9YrIGLyMgFEloK3YlmFvbaL%2Bft6QqwsI7QupzYYeNc8hWEJ7gJceAo9Ae0C6Q73lp2FtVQeOfeSYUzCnclGGFljuXdwaGM8mlJcpZ7zInmQnT2g%2FASx3yFHIGjlcWHoKGjOS5jEK6NvEu7C1yGlMq%2BaPEG3uv%2FoewuMSiXyLjILQ9fG9TpGV%2B16Yn0seADF9O%2BB96E8Erlb7Qd0QJVtsDYqVVewF1h1WcdUYp7XmIk8K%2BJ0Jrtr4lKAwqU29FfleF4zLvlV9W9TichHGGlZaTns1K%2BCiyfunR%2BAgZLOZYyHt%2F5xnd6QX8ou6gNIbD7dRpdcgBgKMIX8lr0GOqUBoYJw67BeuPIBXhKRuvfnGxonBSdtSkd6KsFbHYtIenId3otA9jAJPCN%2BAqJZZxqEsCW%2BCbDjo1hhdqCTQMfU39uo%2BvEzPfVMB2GZi4FU1anlkxqTrBCM0OposI6Y5feKn%2FGj4LOVpF8g9Yw2mumX3t57Ckp1ohJY2IIMtVZOtSk9Fc7m5lkt9iP8a7MbmOmnXLxoAvjyvj3NUwgvVLOCzFzeBFOV&X-Amz-Signature=9818bf22511eb958374bd2f810d5dc87c13335cc9765f6795b72f9e1102804e6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TEDU6JO%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T090810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCFj1%2BlpA9w9PkJsl0YXcyHTcbNl4O%2F8P%2BlYQArbyIhWAIgFgY8IvUWzNMqdkQ%2Fa8uCL1343DKQq0GhHkGox%2FX4JDMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEcBn1GWZLltoEscRircAxtESN%2BmaQ0z8pB%2Ffnxm7MDNZw81rpuvUST7Xl7WVbHJkeT2w7HcdwiZfiV8cKGb2raGrMuydnHAWqgmHAPRuT955Z6rYKluOCsAW2FxOY%2FZ%2FNiHpMWFotM3u2rLO8MsapjsUBr9sPWjh%2Ffol4ulnL1osLQhJ1%2Fo3aE%2BsqhIFWemA8BA4Bq3ScbzqQn0Civl%2FKcAHxtj1H9WVmvJvMnzrzkYsNrk%2F3yyokxW0ylWCAG9MzHShzZv6vYs%2BrMHxPfIUp4arTp6GFu7oO2HhvkE4%2FLG4nB3AL0bhbjj8dO9B8JZ5U9rliwWr9YrIGLyMgFEloK3YlmFvbaL%2Bft6QqwsI7QupzYYeNc8hWEJ7gJceAo9Ae0C6Q73lp2FtVQeOfeSYUzCnclGGFljuXdwaGM8mlJcpZ7zInmQnT2g%2FASx3yFHIGjlcWHoKGjOS5jEK6NvEu7C1yGlMq%2BaPEG3uv%2FoewuMSiXyLjILQ9fG9TpGV%2B16Yn0seADF9O%2BB96E8Erlb7Qd0QJVtsDYqVVewF1h1WcdUYp7XmIk8K%2BJ0Jrtr4lKAwqU29FfleF4zLvlV9W9TichHGGlZaTns1K%2BCiyfunR%2BAgZLOZYyHt%2F5xnd6QX8ou6gNIbD7dRpdcgBgKMIX8lr0GOqUBoYJw67BeuPIBXhKRuvfnGxonBSdtSkd6KsFbHYtIenId3otA9jAJPCN%2BAqJZZxqEsCW%2BCbDjo1hhdqCTQMfU39uo%2BvEzPfVMB2GZi4FU1anlkxqTrBCM0OposI6Y5feKn%2FGj4LOVpF8g9Yw2mumX3t57Ckp1ohJY2IIMtVZOtSk9Fc7m5lkt9iP8a7MbmOmnXLxoAvjyvj3NUwgvVLOCzFzeBFOV&X-Amz-Signature=773fd0dd82b8a9d1d1870fafa18b696474c51fbef81467239e00488195233b17&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TEDU6JO%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T090810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCFj1%2BlpA9w9PkJsl0YXcyHTcbNl4O%2F8P%2BlYQArbyIhWAIgFgY8IvUWzNMqdkQ%2Fa8uCL1343DKQq0GhHkGox%2FX4JDMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEcBn1GWZLltoEscRircAxtESN%2BmaQ0z8pB%2Ffnxm7MDNZw81rpuvUST7Xl7WVbHJkeT2w7HcdwiZfiV8cKGb2raGrMuydnHAWqgmHAPRuT955Z6rYKluOCsAW2FxOY%2FZ%2FNiHpMWFotM3u2rLO8MsapjsUBr9sPWjh%2Ffol4ulnL1osLQhJ1%2Fo3aE%2BsqhIFWemA8BA4Bq3ScbzqQn0Civl%2FKcAHxtj1H9WVmvJvMnzrzkYsNrk%2F3yyokxW0ylWCAG9MzHShzZv6vYs%2BrMHxPfIUp4arTp6GFu7oO2HhvkE4%2FLG4nB3AL0bhbjj8dO9B8JZ5U9rliwWr9YrIGLyMgFEloK3YlmFvbaL%2Bft6QqwsI7QupzYYeNc8hWEJ7gJceAo9Ae0C6Q73lp2FtVQeOfeSYUzCnclGGFljuXdwaGM8mlJcpZ7zInmQnT2g%2FASx3yFHIGjlcWHoKGjOS5jEK6NvEu7C1yGlMq%2BaPEG3uv%2FoewuMSiXyLjILQ9fG9TpGV%2B16Yn0seADF9O%2BB96E8Erlb7Qd0QJVtsDYqVVewF1h1WcdUYp7XmIk8K%2BJ0Jrtr4lKAwqU29FfleF4zLvlV9W9TichHGGlZaTns1K%2BCiyfunR%2BAgZLOZYyHt%2F5xnd6QX8ou6gNIbD7dRpdcgBgKMIX8lr0GOqUBoYJw67BeuPIBXhKRuvfnGxonBSdtSkd6KsFbHYtIenId3otA9jAJPCN%2BAqJZZxqEsCW%2BCbDjo1hhdqCTQMfU39uo%2BvEzPfVMB2GZi4FU1anlkxqTrBCM0OposI6Y5feKn%2FGj4LOVpF8g9Yw2mumX3t57Ckp1ohJY2IIMtVZOtSk9Fc7m5lkt9iP8a7MbmOmnXLxoAvjyvj3NUwgvVLOCzFzeBFOV&X-Amz-Signature=a56c5ebac2cc7ebb90830b93b12a419186ecb6bc18a469293c0666c206d9e8e4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TEDU6JO%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T090810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCFj1%2BlpA9w9PkJsl0YXcyHTcbNl4O%2F8P%2BlYQArbyIhWAIgFgY8IvUWzNMqdkQ%2Fa8uCL1343DKQq0GhHkGox%2FX4JDMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEcBn1GWZLltoEscRircAxtESN%2BmaQ0z8pB%2Ffnxm7MDNZw81rpuvUST7Xl7WVbHJkeT2w7HcdwiZfiV8cKGb2raGrMuydnHAWqgmHAPRuT955Z6rYKluOCsAW2FxOY%2FZ%2FNiHpMWFotM3u2rLO8MsapjsUBr9sPWjh%2Ffol4ulnL1osLQhJ1%2Fo3aE%2BsqhIFWemA8BA4Bq3ScbzqQn0Civl%2FKcAHxtj1H9WVmvJvMnzrzkYsNrk%2F3yyokxW0ylWCAG9MzHShzZv6vYs%2BrMHxPfIUp4arTp6GFu7oO2HhvkE4%2FLG4nB3AL0bhbjj8dO9B8JZ5U9rliwWr9YrIGLyMgFEloK3YlmFvbaL%2Bft6QqwsI7QupzYYeNc8hWEJ7gJceAo9Ae0C6Q73lp2FtVQeOfeSYUzCnclGGFljuXdwaGM8mlJcpZ7zInmQnT2g%2FASx3yFHIGjlcWHoKGjOS5jEK6NvEu7C1yGlMq%2BaPEG3uv%2FoewuMSiXyLjILQ9fG9TpGV%2B16Yn0seADF9O%2BB96E8Erlb7Qd0QJVtsDYqVVewF1h1WcdUYp7XmIk8K%2BJ0Jrtr4lKAwqU29FfleF4zLvlV9W9TichHGGlZaTns1K%2BCiyfunR%2BAgZLOZYyHt%2F5xnd6QX8ou6gNIbD7dRpdcgBgKMIX8lr0GOqUBoYJw67BeuPIBXhKRuvfnGxonBSdtSkd6KsFbHYtIenId3otA9jAJPCN%2BAqJZZxqEsCW%2BCbDjo1hhdqCTQMfU39uo%2BvEzPfVMB2GZi4FU1anlkxqTrBCM0OposI6Y5feKn%2FGj4LOVpF8g9Yw2mumX3t57Ckp1ohJY2IIMtVZOtSk9Fc7m5lkt9iP8a7MbmOmnXLxoAvjyvj3NUwgvVLOCzFzeBFOV&X-Amz-Signature=ad01654c96a91296ae502eec0d38dfa08df3bcf2b1f9c85ecbf1f2c76372db7c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TEDU6JO%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T090810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCFj1%2BlpA9w9PkJsl0YXcyHTcbNl4O%2F8P%2BlYQArbyIhWAIgFgY8IvUWzNMqdkQ%2Fa8uCL1343DKQq0GhHkGox%2FX4JDMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEcBn1GWZLltoEscRircAxtESN%2BmaQ0z8pB%2Ffnxm7MDNZw81rpuvUST7Xl7WVbHJkeT2w7HcdwiZfiV8cKGb2raGrMuydnHAWqgmHAPRuT955Z6rYKluOCsAW2FxOY%2FZ%2FNiHpMWFotM3u2rLO8MsapjsUBr9sPWjh%2Ffol4ulnL1osLQhJ1%2Fo3aE%2BsqhIFWemA8BA4Bq3ScbzqQn0Civl%2FKcAHxtj1H9WVmvJvMnzrzkYsNrk%2F3yyokxW0ylWCAG9MzHShzZv6vYs%2BrMHxPfIUp4arTp6GFu7oO2HhvkE4%2FLG4nB3AL0bhbjj8dO9B8JZ5U9rliwWr9YrIGLyMgFEloK3YlmFvbaL%2Bft6QqwsI7QupzYYeNc8hWEJ7gJceAo9Ae0C6Q73lp2FtVQeOfeSYUzCnclGGFljuXdwaGM8mlJcpZ7zInmQnT2g%2FASx3yFHIGjlcWHoKGjOS5jEK6NvEu7C1yGlMq%2BaPEG3uv%2FoewuMSiXyLjILQ9fG9TpGV%2B16Yn0seADF9O%2BB96E8Erlb7Qd0QJVtsDYqVVewF1h1WcdUYp7XmIk8K%2BJ0Jrtr4lKAwqU29FfleF4zLvlV9W9TichHGGlZaTns1K%2BCiyfunR%2BAgZLOZYyHt%2F5xnd6QX8ou6gNIbD7dRpdcgBgKMIX8lr0GOqUBoYJw67BeuPIBXhKRuvfnGxonBSdtSkd6KsFbHYtIenId3otA9jAJPCN%2BAqJZZxqEsCW%2BCbDjo1hhdqCTQMfU39uo%2BvEzPfVMB2GZi4FU1anlkxqTrBCM0OposI6Y5feKn%2FGj4LOVpF8g9Yw2mumX3t57Ckp1ohJY2IIMtVZOtSk9Fc7m5lkt9iP8a7MbmOmnXLxoAvjyvj3NUwgvVLOCzFzeBFOV&X-Amz-Signature=7a782aa6d466647642bde80207dff3bf41f1f2c5ee243784d82896b24eb40588&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TEDU6JO%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T090810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCFj1%2BlpA9w9PkJsl0YXcyHTcbNl4O%2F8P%2BlYQArbyIhWAIgFgY8IvUWzNMqdkQ%2Fa8uCL1343DKQq0GhHkGox%2FX4JDMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEcBn1GWZLltoEscRircAxtESN%2BmaQ0z8pB%2Ffnxm7MDNZw81rpuvUST7Xl7WVbHJkeT2w7HcdwiZfiV8cKGb2raGrMuydnHAWqgmHAPRuT955Z6rYKluOCsAW2FxOY%2FZ%2FNiHpMWFotM3u2rLO8MsapjsUBr9sPWjh%2Ffol4ulnL1osLQhJ1%2Fo3aE%2BsqhIFWemA8BA4Bq3ScbzqQn0Civl%2FKcAHxtj1H9WVmvJvMnzrzkYsNrk%2F3yyokxW0ylWCAG9MzHShzZv6vYs%2BrMHxPfIUp4arTp6GFu7oO2HhvkE4%2FLG4nB3AL0bhbjj8dO9B8JZ5U9rliwWr9YrIGLyMgFEloK3YlmFvbaL%2Bft6QqwsI7QupzYYeNc8hWEJ7gJceAo9Ae0C6Q73lp2FtVQeOfeSYUzCnclGGFljuXdwaGM8mlJcpZ7zInmQnT2g%2FASx3yFHIGjlcWHoKGjOS5jEK6NvEu7C1yGlMq%2BaPEG3uv%2FoewuMSiXyLjILQ9fG9TpGV%2B16Yn0seADF9O%2BB96E8Erlb7Qd0QJVtsDYqVVewF1h1WcdUYp7XmIk8K%2BJ0Jrtr4lKAwqU29FfleF4zLvlV9W9TichHGGlZaTns1K%2BCiyfunR%2BAgZLOZYyHt%2F5xnd6QX8ou6gNIbD7dRpdcgBgKMIX8lr0GOqUBoYJw67BeuPIBXhKRuvfnGxonBSdtSkd6KsFbHYtIenId3otA9jAJPCN%2BAqJZZxqEsCW%2BCbDjo1hhdqCTQMfU39uo%2BvEzPfVMB2GZi4FU1anlkxqTrBCM0OposI6Y5feKn%2FGj4LOVpF8g9Yw2mumX3t57Ckp1ohJY2IIMtVZOtSk9Fc7m5lkt9iP8a7MbmOmnXLxoAvjyvj3NUwgvVLOCzFzeBFOV&X-Amz-Signature=ec2256be31c176bda73a0a1fa287ebdd5a5f1b54a9f952a2ffd6ce1e8036d78e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TEDU6JO%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T090810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCFj1%2BlpA9w9PkJsl0YXcyHTcbNl4O%2F8P%2BlYQArbyIhWAIgFgY8IvUWzNMqdkQ%2Fa8uCL1343DKQq0GhHkGox%2FX4JDMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEcBn1GWZLltoEscRircAxtESN%2BmaQ0z8pB%2Ffnxm7MDNZw81rpuvUST7Xl7WVbHJkeT2w7HcdwiZfiV8cKGb2raGrMuydnHAWqgmHAPRuT955Z6rYKluOCsAW2FxOY%2FZ%2FNiHpMWFotM3u2rLO8MsapjsUBr9sPWjh%2Ffol4ulnL1osLQhJ1%2Fo3aE%2BsqhIFWemA8BA4Bq3ScbzqQn0Civl%2FKcAHxtj1H9WVmvJvMnzrzkYsNrk%2F3yyokxW0ylWCAG9MzHShzZv6vYs%2BrMHxPfIUp4arTp6GFu7oO2HhvkE4%2FLG4nB3AL0bhbjj8dO9B8JZ5U9rliwWr9YrIGLyMgFEloK3YlmFvbaL%2Bft6QqwsI7QupzYYeNc8hWEJ7gJceAo9Ae0C6Q73lp2FtVQeOfeSYUzCnclGGFljuXdwaGM8mlJcpZ7zInmQnT2g%2FASx3yFHIGjlcWHoKGjOS5jEK6NvEu7C1yGlMq%2BaPEG3uv%2FoewuMSiXyLjILQ9fG9TpGV%2B16Yn0seADF9O%2BB96E8Erlb7Qd0QJVtsDYqVVewF1h1WcdUYp7XmIk8K%2BJ0Jrtr4lKAwqU29FfleF4zLvlV9W9TichHGGlZaTns1K%2BCiyfunR%2BAgZLOZYyHt%2F5xnd6QX8ou6gNIbD7dRpdcgBgKMIX8lr0GOqUBoYJw67BeuPIBXhKRuvfnGxonBSdtSkd6KsFbHYtIenId3otA9jAJPCN%2BAqJZZxqEsCW%2BCbDjo1hhdqCTQMfU39uo%2BvEzPfVMB2GZi4FU1anlkxqTrBCM0OposI6Y5feKn%2FGj4LOVpF8g9Yw2mumX3t57Ckp1ohJY2IIMtVZOtSk9Fc7m5lkt9iP8a7MbmOmnXLxoAvjyvj3NUwgvVLOCzFzeBFOV&X-Amz-Signature=400d05ab7a8e6ffe13a42038c6371524d988deda7136abc178745c7bddf60a07&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
