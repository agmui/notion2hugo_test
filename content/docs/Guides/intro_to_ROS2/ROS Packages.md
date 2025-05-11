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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYJU4RPT%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T131640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCELFKvMP5RTIDdJqK7gWDDb4THtSTHxNCO5BXtJwWG%2BQIhAPmZgh0tC2HskYHNeAj5xRFcEdtIY%2Bim04il9LyKxHwfKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5GD3pXpiGZvYqnSgq3AMkzOUWVcwZ0725JTwZVMqaQ1C8vgp%2FZeeVl5X0E6AXlA4%2FZkytwIK6D%2B6Ln2UPa8%2Bc7Vtx7bSlDBgtKG4AHPtGkMA4eN4yuXZrTYMDVRcy3oimBAMy0wdJTGrbCo0YSgJy%2FHGu5IK%2BbLNSIEOh0ar%2F%2FOQn2JbcCuILABlSFchB9bo%2FStQRgLJjKYXBKgz%2BYa7IH8AYgf6Bxkcei7syFgKwt6IDqHm%2Fw46vhXsKJ9oXtKOK3iG1sY%2Fiz6LN8N2migRoP6%2FXeX%2FigO1fGNZeLiXEwfF7mEdm9nAOsb%2FU2m%2F3Tcs3uYsuzASkrcFjQDnBWl9fUivio%2B9ZcpkUcS7U1YZzMUb1Z%2FOkFUQxrwBxyV85TjQVtmGFn5%2BSmCCziNTQsMOOsgBYT8NEiU%2FoG2VJlyX31DHYLOauL3whTakBQHLeGm0O%2B%2By7wgTD%2FeNUWUKkJUUpq7qQJgluvYnfCxwMLLUO2RbRoPH5aBs3z8UQ4Gz3tw0YwKUbzUEaglC8FaLH%2Flyq%2Bz0ifUCKw22j5yZ7Zvos0ATWtKDYjfWddnz8QK0jrMxWZnjmg%2BX7P14d73HjhL%2BWG2HnZgAFd2cXD7IOkX0jpAamTWsI4Oe7jUsV164TY66IMBgM3eKRhfJyuDCXuYHBBjqkAf%2F6UCrRjEDVD9t%2BCf5wChE4GfdkwCOxZstN6sGtbWOkLKcja23luATh00ULpW4K%2B%2BZsy51XxL8lgnVD15HGyxDY%2BRlfbP4qiQghRvB4Z10y8hM8jjqfIF4nrPHz%2BrXbLjxGbhCQ%2Ffn4rRzBnOyfzTfyZo5%2BeFR08gcFO3yFmefzxoufBRO1ZGpYrJ3xniCY%2FgbmObPqn4cSMzCZAqEDcmb0RTFZ&X-Amz-Signature=fb39549a1d80b4d186f849d7b42178b5415e718853905817db973dcc577208b1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYJU4RPT%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T131640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCELFKvMP5RTIDdJqK7gWDDb4THtSTHxNCO5BXtJwWG%2BQIhAPmZgh0tC2HskYHNeAj5xRFcEdtIY%2Bim04il9LyKxHwfKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5GD3pXpiGZvYqnSgq3AMkzOUWVcwZ0725JTwZVMqaQ1C8vgp%2FZeeVl5X0E6AXlA4%2FZkytwIK6D%2B6Ln2UPa8%2Bc7Vtx7bSlDBgtKG4AHPtGkMA4eN4yuXZrTYMDVRcy3oimBAMy0wdJTGrbCo0YSgJy%2FHGu5IK%2BbLNSIEOh0ar%2F%2FOQn2JbcCuILABlSFchB9bo%2FStQRgLJjKYXBKgz%2BYa7IH8AYgf6Bxkcei7syFgKwt6IDqHm%2Fw46vhXsKJ9oXtKOK3iG1sY%2Fiz6LN8N2migRoP6%2FXeX%2FigO1fGNZeLiXEwfF7mEdm9nAOsb%2FU2m%2F3Tcs3uYsuzASkrcFjQDnBWl9fUivio%2B9ZcpkUcS7U1YZzMUb1Z%2FOkFUQxrwBxyV85TjQVtmGFn5%2BSmCCziNTQsMOOsgBYT8NEiU%2FoG2VJlyX31DHYLOauL3whTakBQHLeGm0O%2B%2By7wgTD%2FeNUWUKkJUUpq7qQJgluvYnfCxwMLLUO2RbRoPH5aBs3z8UQ4Gz3tw0YwKUbzUEaglC8FaLH%2Flyq%2Bz0ifUCKw22j5yZ7Zvos0ATWtKDYjfWddnz8QK0jrMxWZnjmg%2BX7P14d73HjhL%2BWG2HnZgAFd2cXD7IOkX0jpAamTWsI4Oe7jUsV164TY66IMBgM3eKRhfJyuDCXuYHBBjqkAf%2F6UCrRjEDVD9t%2BCf5wChE4GfdkwCOxZstN6sGtbWOkLKcja23luATh00ULpW4K%2B%2BZsy51XxL8lgnVD15HGyxDY%2BRlfbP4qiQghRvB4Z10y8hM8jjqfIF4nrPHz%2BrXbLjxGbhCQ%2Ffn4rRzBnOyfzTfyZo5%2BeFR08gcFO3yFmefzxoufBRO1ZGpYrJ3xniCY%2FgbmObPqn4cSMzCZAqEDcmb0RTFZ&X-Amz-Signature=f23437c4c04804b81ef450d435dce83ffb9091c017eb309cc36454bc99c36cad&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYJU4RPT%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T131640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCELFKvMP5RTIDdJqK7gWDDb4THtSTHxNCO5BXtJwWG%2BQIhAPmZgh0tC2HskYHNeAj5xRFcEdtIY%2Bim04il9LyKxHwfKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5GD3pXpiGZvYqnSgq3AMkzOUWVcwZ0725JTwZVMqaQ1C8vgp%2FZeeVl5X0E6AXlA4%2FZkytwIK6D%2B6Ln2UPa8%2Bc7Vtx7bSlDBgtKG4AHPtGkMA4eN4yuXZrTYMDVRcy3oimBAMy0wdJTGrbCo0YSgJy%2FHGu5IK%2BbLNSIEOh0ar%2F%2FOQn2JbcCuILABlSFchB9bo%2FStQRgLJjKYXBKgz%2BYa7IH8AYgf6Bxkcei7syFgKwt6IDqHm%2Fw46vhXsKJ9oXtKOK3iG1sY%2Fiz6LN8N2migRoP6%2FXeX%2FigO1fGNZeLiXEwfF7mEdm9nAOsb%2FU2m%2F3Tcs3uYsuzASkrcFjQDnBWl9fUivio%2B9ZcpkUcS7U1YZzMUb1Z%2FOkFUQxrwBxyV85TjQVtmGFn5%2BSmCCziNTQsMOOsgBYT8NEiU%2FoG2VJlyX31DHYLOauL3whTakBQHLeGm0O%2B%2By7wgTD%2FeNUWUKkJUUpq7qQJgluvYnfCxwMLLUO2RbRoPH5aBs3z8UQ4Gz3tw0YwKUbzUEaglC8FaLH%2Flyq%2Bz0ifUCKw22j5yZ7Zvos0ATWtKDYjfWddnz8QK0jrMxWZnjmg%2BX7P14d73HjhL%2BWG2HnZgAFd2cXD7IOkX0jpAamTWsI4Oe7jUsV164TY66IMBgM3eKRhfJyuDCXuYHBBjqkAf%2F6UCrRjEDVD9t%2BCf5wChE4GfdkwCOxZstN6sGtbWOkLKcja23luATh00ULpW4K%2B%2BZsy51XxL8lgnVD15HGyxDY%2BRlfbP4qiQghRvB4Z10y8hM8jjqfIF4nrPHz%2BrXbLjxGbhCQ%2Ffn4rRzBnOyfzTfyZo5%2BeFR08gcFO3yFmefzxoufBRO1ZGpYrJ3xniCY%2FgbmObPqn4cSMzCZAqEDcmb0RTFZ&X-Amz-Signature=9fa12ece71ae3bd88e55893f7f656093670bcb551eed4bff40ceaa94738adb8a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYJU4RPT%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T131640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCELFKvMP5RTIDdJqK7gWDDb4THtSTHxNCO5BXtJwWG%2BQIhAPmZgh0tC2HskYHNeAj5xRFcEdtIY%2Bim04il9LyKxHwfKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5GD3pXpiGZvYqnSgq3AMkzOUWVcwZ0725JTwZVMqaQ1C8vgp%2FZeeVl5X0E6AXlA4%2FZkytwIK6D%2B6Ln2UPa8%2Bc7Vtx7bSlDBgtKG4AHPtGkMA4eN4yuXZrTYMDVRcy3oimBAMy0wdJTGrbCo0YSgJy%2FHGu5IK%2BbLNSIEOh0ar%2F%2FOQn2JbcCuILABlSFchB9bo%2FStQRgLJjKYXBKgz%2BYa7IH8AYgf6Bxkcei7syFgKwt6IDqHm%2Fw46vhXsKJ9oXtKOK3iG1sY%2Fiz6LN8N2migRoP6%2FXeX%2FigO1fGNZeLiXEwfF7mEdm9nAOsb%2FU2m%2F3Tcs3uYsuzASkrcFjQDnBWl9fUivio%2B9ZcpkUcS7U1YZzMUb1Z%2FOkFUQxrwBxyV85TjQVtmGFn5%2BSmCCziNTQsMOOsgBYT8NEiU%2FoG2VJlyX31DHYLOauL3whTakBQHLeGm0O%2B%2By7wgTD%2FeNUWUKkJUUpq7qQJgluvYnfCxwMLLUO2RbRoPH5aBs3z8UQ4Gz3tw0YwKUbzUEaglC8FaLH%2Flyq%2Bz0ifUCKw22j5yZ7Zvos0ATWtKDYjfWddnz8QK0jrMxWZnjmg%2BX7P14d73HjhL%2BWG2HnZgAFd2cXD7IOkX0jpAamTWsI4Oe7jUsV164TY66IMBgM3eKRhfJyuDCXuYHBBjqkAf%2F6UCrRjEDVD9t%2BCf5wChE4GfdkwCOxZstN6sGtbWOkLKcja23luATh00ULpW4K%2B%2BZsy51XxL8lgnVD15HGyxDY%2BRlfbP4qiQghRvB4Z10y8hM8jjqfIF4nrPHz%2BrXbLjxGbhCQ%2Ffn4rRzBnOyfzTfyZo5%2BeFR08gcFO3yFmefzxoufBRO1ZGpYrJ3xniCY%2FgbmObPqn4cSMzCZAqEDcmb0RTFZ&X-Amz-Signature=5ddd1aa22e44bbe7a18aaaa61072f4cf9c6e88305e1c1f9a2b8a52016e91e6f9&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYJU4RPT%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T131640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCELFKvMP5RTIDdJqK7gWDDb4THtSTHxNCO5BXtJwWG%2BQIhAPmZgh0tC2HskYHNeAj5xRFcEdtIY%2Bim04il9LyKxHwfKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5GD3pXpiGZvYqnSgq3AMkzOUWVcwZ0725JTwZVMqaQ1C8vgp%2FZeeVl5X0E6AXlA4%2FZkytwIK6D%2B6Ln2UPa8%2Bc7Vtx7bSlDBgtKG4AHPtGkMA4eN4yuXZrTYMDVRcy3oimBAMy0wdJTGrbCo0YSgJy%2FHGu5IK%2BbLNSIEOh0ar%2F%2FOQn2JbcCuILABlSFchB9bo%2FStQRgLJjKYXBKgz%2BYa7IH8AYgf6Bxkcei7syFgKwt6IDqHm%2Fw46vhXsKJ9oXtKOK3iG1sY%2Fiz6LN8N2migRoP6%2FXeX%2FigO1fGNZeLiXEwfF7mEdm9nAOsb%2FU2m%2F3Tcs3uYsuzASkrcFjQDnBWl9fUivio%2B9ZcpkUcS7U1YZzMUb1Z%2FOkFUQxrwBxyV85TjQVtmGFn5%2BSmCCziNTQsMOOsgBYT8NEiU%2FoG2VJlyX31DHYLOauL3whTakBQHLeGm0O%2B%2By7wgTD%2FeNUWUKkJUUpq7qQJgluvYnfCxwMLLUO2RbRoPH5aBs3z8UQ4Gz3tw0YwKUbzUEaglC8FaLH%2Flyq%2Bz0ifUCKw22j5yZ7Zvos0ATWtKDYjfWddnz8QK0jrMxWZnjmg%2BX7P14d73HjhL%2BWG2HnZgAFd2cXD7IOkX0jpAamTWsI4Oe7jUsV164TY66IMBgM3eKRhfJyuDCXuYHBBjqkAf%2F6UCrRjEDVD9t%2BCf5wChE4GfdkwCOxZstN6sGtbWOkLKcja23luATh00ULpW4K%2B%2BZsy51XxL8lgnVD15HGyxDY%2BRlfbP4qiQghRvB4Z10y8hM8jjqfIF4nrPHz%2BrXbLjxGbhCQ%2Ffn4rRzBnOyfzTfyZo5%2BeFR08gcFO3yFmefzxoufBRO1ZGpYrJ3xniCY%2FgbmObPqn4cSMzCZAqEDcmb0RTFZ&X-Amz-Signature=562b1769929344177eae4ea7fd740ecfd1300ae1515d6a9dd587d01ba968e33c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYJU4RPT%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T131640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCELFKvMP5RTIDdJqK7gWDDb4THtSTHxNCO5BXtJwWG%2BQIhAPmZgh0tC2HskYHNeAj5xRFcEdtIY%2Bim04il9LyKxHwfKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5GD3pXpiGZvYqnSgq3AMkzOUWVcwZ0725JTwZVMqaQ1C8vgp%2FZeeVl5X0E6AXlA4%2FZkytwIK6D%2B6Ln2UPa8%2Bc7Vtx7bSlDBgtKG4AHPtGkMA4eN4yuXZrTYMDVRcy3oimBAMy0wdJTGrbCo0YSgJy%2FHGu5IK%2BbLNSIEOh0ar%2F%2FOQn2JbcCuILABlSFchB9bo%2FStQRgLJjKYXBKgz%2BYa7IH8AYgf6Bxkcei7syFgKwt6IDqHm%2Fw46vhXsKJ9oXtKOK3iG1sY%2Fiz6LN8N2migRoP6%2FXeX%2FigO1fGNZeLiXEwfF7mEdm9nAOsb%2FU2m%2F3Tcs3uYsuzASkrcFjQDnBWl9fUivio%2B9ZcpkUcS7U1YZzMUb1Z%2FOkFUQxrwBxyV85TjQVtmGFn5%2BSmCCziNTQsMOOsgBYT8NEiU%2FoG2VJlyX31DHYLOauL3whTakBQHLeGm0O%2B%2By7wgTD%2FeNUWUKkJUUpq7qQJgluvYnfCxwMLLUO2RbRoPH5aBs3z8UQ4Gz3tw0YwKUbzUEaglC8FaLH%2Flyq%2Bz0ifUCKw22j5yZ7Zvos0ATWtKDYjfWddnz8QK0jrMxWZnjmg%2BX7P14d73HjhL%2BWG2HnZgAFd2cXD7IOkX0jpAamTWsI4Oe7jUsV164TY66IMBgM3eKRhfJyuDCXuYHBBjqkAf%2F6UCrRjEDVD9t%2BCf5wChE4GfdkwCOxZstN6sGtbWOkLKcja23luATh00ULpW4K%2B%2BZsy51XxL8lgnVD15HGyxDY%2BRlfbP4qiQghRvB4Z10y8hM8jjqfIF4nrPHz%2BrXbLjxGbhCQ%2Ffn4rRzBnOyfzTfyZo5%2BeFR08gcFO3yFmefzxoufBRO1ZGpYrJ3xniCY%2FgbmObPqn4cSMzCZAqEDcmb0RTFZ&X-Amz-Signature=1bb9f3a14125914a5a2e2ba9d9a7cfe17c8b3ef90c6f7124a41a397f8a225d8b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYJU4RPT%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T131640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCELFKvMP5RTIDdJqK7gWDDb4THtSTHxNCO5BXtJwWG%2BQIhAPmZgh0tC2HskYHNeAj5xRFcEdtIY%2Bim04il9LyKxHwfKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5GD3pXpiGZvYqnSgq3AMkzOUWVcwZ0725JTwZVMqaQ1C8vgp%2FZeeVl5X0E6AXlA4%2FZkytwIK6D%2B6Ln2UPa8%2Bc7Vtx7bSlDBgtKG4AHPtGkMA4eN4yuXZrTYMDVRcy3oimBAMy0wdJTGrbCo0YSgJy%2FHGu5IK%2BbLNSIEOh0ar%2F%2FOQn2JbcCuILABlSFchB9bo%2FStQRgLJjKYXBKgz%2BYa7IH8AYgf6Bxkcei7syFgKwt6IDqHm%2Fw46vhXsKJ9oXtKOK3iG1sY%2Fiz6LN8N2migRoP6%2FXeX%2FigO1fGNZeLiXEwfF7mEdm9nAOsb%2FU2m%2F3Tcs3uYsuzASkrcFjQDnBWl9fUivio%2B9ZcpkUcS7U1YZzMUb1Z%2FOkFUQxrwBxyV85TjQVtmGFn5%2BSmCCziNTQsMOOsgBYT8NEiU%2FoG2VJlyX31DHYLOauL3whTakBQHLeGm0O%2B%2By7wgTD%2FeNUWUKkJUUpq7qQJgluvYnfCxwMLLUO2RbRoPH5aBs3z8UQ4Gz3tw0YwKUbzUEaglC8FaLH%2Flyq%2Bz0ifUCKw22j5yZ7Zvos0ATWtKDYjfWddnz8QK0jrMxWZnjmg%2BX7P14d73HjhL%2BWG2HnZgAFd2cXD7IOkX0jpAamTWsI4Oe7jUsV164TY66IMBgM3eKRhfJyuDCXuYHBBjqkAf%2F6UCrRjEDVD9t%2BCf5wChE4GfdkwCOxZstN6sGtbWOkLKcja23luATh00ULpW4K%2B%2BZsy51XxL8lgnVD15HGyxDY%2BRlfbP4qiQghRvB4Z10y8hM8jjqfIF4nrPHz%2BrXbLjxGbhCQ%2Ffn4rRzBnOyfzTfyZo5%2BeFR08gcFO3yFmefzxoufBRO1ZGpYrJ3xniCY%2FgbmObPqn4cSMzCZAqEDcmb0RTFZ&X-Amz-Signature=0cfc0856176acdbe1311a2215d94385e56b18abb5f116199e814255b9d80151d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
