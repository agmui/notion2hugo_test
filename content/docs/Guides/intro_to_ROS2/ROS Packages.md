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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5ECKENE%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCPKgrwArWMIyqP7rqMF8jlYkvxwi8NCfGQbAZG8BR%2FpAIhAMKxy59OGNS9RpRdJ6toh4M8D%2BeoNAcZyOnwWHVLRUaiKv8DCBgQABoMNjM3NDIzMTgzODA1IgxJoOxl68FezQ%2BO0Dwq3AO%2BJH%2F7Z0afy119oz4GTMIaY5fT16V5y3oMv9Xo7qSFV9kGr9LpIU7Ex%2BSFEdKDdS8M9PsfEov%2Buaq7UKNx7Bz4mfFh2ljNs5aSirG1aPQyUohihvdVv1yrUt%2FLztok5qHuYF0b%2Bf4LOtR1yJydlYaHMk30qvqP4zvF8vToREob7Kob4y9FJwMoOg0wdzOwxP%2F7qmIAJI9UNsMSpKAoIcONReaWGhwqI4wMXajb4LBoButUfTlaCDfk7adMnmL6WhEf0Hyyn%2BSSJdnd0C%2BEmgm0zlEhoE8ZYIakJTp3ihDreRaWLsIWiIpeHHJ1UHlR01%2BT4y5mBJX2Xi9puBrmTufoddMR%2B2PtBkM9%2BukcpJ4EZ547R3GomjeYxAcWGYIwRwi0B3mytJI14etKPzCiz4LN2FTtI3N9leWNUhr6rJwFZWaomTLhwE6iAp5ILwrahW7L0jySyh72n%2B4Ak4HWikIrUXLUYiQPsX0Hnnq2%2FRYGruPJYED7OkCfCSwCjWrfI8kdFNlBn8BC7GeIiOLT9NqLS7piB4ALn4NaNOlk0Munep%2FGjP%2FKpyO5x3u%2BNsvDJ4dfXjp1ABTQF431LlB%2FHDBjNX%2FIJv%2F4yQYiLP4hWCGTHJvkEiwae8M1yjvqizCv1pLBBjqkAeLqNgDhC5iJl7nAt7LELwMJdjIIAfliVexEVdeeyENtSxZQXQlwxESkwYYDVzaTIc83zAtx%2BI0KQq1YHT3OUp9QTZ%2FTBoaGI8i0tgo9G%2FeHYgSfgYpO8Aa9yjIyVPyB4lEVmANrYEto9P5%2FTX6cPfLSJcEV9Z03Vt1Zl%2FvInnvvuq1R0UwSFyiuRNEGxMV%2FXHx5lB4U%2FPuqN3c8ZR%2F8dZsqhXhE&X-Amz-Signature=6c5c59da1d6d4f5781b674979e3f07cd0a4dbf73ffc062cde93c33400d95e063&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5ECKENE%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCPKgrwArWMIyqP7rqMF8jlYkvxwi8NCfGQbAZG8BR%2FpAIhAMKxy59OGNS9RpRdJ6toh4M8D%2BeoNAcZyOnwWHVLRUaiKv8DCBgQABoMNjM3NDIzMTgzODA1IgxJoOxl68FezQ%2BO0Dwq3AO%2BJH%2F7Z0afy119oz4GTMIaY5fT16V5y3oMv9Xo7qSFV9kGr9LpIU7Ex%2BSFEdKDdS8M9PsfEov%2Buaq7UKNx7Bz4mfFh2ljNs5aSirG1aPQyUohihvdVv1yrUt%2FLztok5qHuYF0b%2Bf4LOtR1yJydlYaHMk30qvqP4zvF8vToREob7Kob4y9FJwMoOg0wdzOwxP%2F7qmIAJI9UNsMSpKAoIcONReaWGhwqI4wMXajb4LBoButUfTlaCDfk7adMnmL6WhEf0Hyyn%2BSSJdnd0C%2BEmgm0zlEhoE8ZYIakJTp3ihDreRaWLsIWiIpeHHJ1UHlR01%2BT4y5mBJX2Xi9puBrmTufoddMR%2B2PtBkM9%2BukcpJ4EZ547R3GomjeYxAcWGYIwRwi0B3mytJI14etKPzCiz4LN2FTtI3N9leWNUhr6rJwFZWaomTLhwE6iAp5ILwrahW7L0jySyh72n%2B4Ak4HWikIrUXLUYiQPsX0Hnnq2%2FRYGruPJYED7OkCfCSwCjWrfI8kdFNlBn8BC7GeIiOLT9NqLS7piB4ALn4NaNOlk0Munep%2FGjP%2FKpyO5x3u%2BNsvDJ4dfXjp1ABTQF431LlB%2FHDBjNX%2FIJv%2F4yQYiLP4hWCGTHJvkEiwae8M1yjvqizCv1pLBBjqkAeLqNgDhC5iJl7nAt7LELwMJdjIIAfliVexEVdeeyENtSxZQXQlwxESkwYYDVzaTIc83zAtx%2BI0KQq1YHT3OUp9QTZ%2FTBoaGI8i0tgo9G%2FeHYgSfgYpO8Aa9yjIyVPyB4lEVmANrYEto9P5%2FTX6cPfLSJcEV9Z03Vt1Zl%2FvInnvvuq1R0UwSFyiuRNEGxMV%2FXHx5lB4U%2FPuqN3c8ZR%2F8dZsqhXhE&X-Amz-Signature=7637eca2f55fe2ffeb8de3bfd5af24a84bdf5560659451bbd9dde4433cb1dd8a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5ECKENE%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCPKgrwArWMIyqP7rqMF8jlYkvxwi8NCfGQbAZG8BR%2FpAIhAMKxy59OGNS9RpRdJ6toh4M8D%2BeoNAcZyOnwWHVLRUaiKv8DCBgQABoMNjM3NDIzMTgzODA1IgxJoOxl68FezQ%2BO0Dwq3AO%2BJH%2F7Z0afy119oz4GTMIaY5fT16V5y3oMv9Xo7qSFV9kGr9LpIU7Ex%2BSFEdKDdS8M9PsfEov%2Buaq7UKNx7Bz4mfFh2ljNs5aSirG1aPQyUohihvdVv1yrUt%2FLztok5qHuYF0b%2Bf4LOtR1yJydlYaHMk30qvqP4zvF8vToREob7Kob4y9FJwMoOg0wdzOwxP%2F7qmIAJI9UNsMSpKAoIcONReaWGhwqI4wMXajb4LBoButUfTlaCDfk7adMnmL6WhEf0Hyyn%2BSSJdnd0C%2BEmgm0zlEhoE8ZYIakJTp3ihDreRaWLsIWiIpeHHJ1UHlR01%2BT4y5mBJX2Xi9puBrmTufoddMR%2B2PtBkM9%2BukcpJ4EZ547R3GomjeYxAcWGYIwRwi0B3mytJI14etKPzCiz4LN2FTtI3N9leWNUhr6rJwFZWaomTLhwE6iAp5ILwrahW7L0jySyh72n%2B4Ak4HWikIrUXLUYiQPsX0Hnnq2%2FRYGruPJYED7OkCfCSwCjWrfI8kdFNlBn8BC7GeIiOLT9NqLS7piB4ALn4NaNOlk0Munep%2FGjP%2FKpyO5x3u%2BNsvDJ4dfXjp1ABTQF431LlB%2FHDBjNX%2FIJv%2F4yQYiLP4hWCGTHJvkEiwae8M1yjvqizCv1pLBBjqkAeLqNgDhC5iJl7nAt7LELwMJdjIIAfliVexEVdeeyENtSxZQXQlwxESkwYYDVzaTIc83zAtx%2BI0KQq1YHT3OUp9QTZ%2FTBoaGI8i0tgo9G%2FeHYgSfgYpO8Aa9yjIyVPyB4lEVmANrYEto9P5%2FTX6cPfLSJcEV9Z03Vt1Zl%2FvInnvvuq1R0UwSFyiuRNEGxMV%2FXHx5lB4U%2FPuqN3c8ZR%2F8dZsqhXhE&X-Amz-Signature=7b58dd7559fd583d81a570fd362b3bc8306b2840ca3188bcd10cccf00f26d73c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5ECKENE%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCPKgrwArWMIyqP7rqMF8jlYkvxwi8NCfGQbAZG8BR%2FpAIhAMKxy59OGNS9RpRdJ6toh4M8D%2BeoNAcZyOnwWHVLRUaiKv8DCBgQABoMNjM3NDIzMTgzODA1IgxJoOxl68FezQ%2BO0Dwq3AO%2BJH%2F7Z0afy119oz4GTMIaY5fT16V5y3oMv9Xo7qSFV9kGr9LpIU7Ex%2BSFEdKDdS8M9PsfEov%2Buaq7UKNx7Bz4mfFh2ljNs5aSirG1aPQyUohihvdVv1yrUt%2FLztok5qHuYF0b%2Bf4LOtR1yJydlYaHMk30qvqP4zvF8vToREob7Kob4y9FJwMoOg0wdzOwxP%2F7qmIAJI9UNsMSpKAoIcONReaWGhwqI4wMXajb4LBoButUfTlaCDfk7adMnmL6WhEf0Hyyn%2BSSJdnd0C%2BEmgm0zlEhoE8ZYIakJTp3ihDreRaWLsIWiIpeHHJ1UHlR01%2BT4y5mBJX2Xi9puBrmTufoddMR%2B2PtBkM9%2BukcpJ4EZ547R3GomjeYxAcWGYIwRwi0B3mytJI14etKPzCiz4LN2FTtI3N9leWNUhr6rJwFZWaomTLhwE6iAp5ILwrahW7L0jySyh72n%2B4Ak4HWikIrUXLUYiQPsX0Hnnq2%2FRYGruPJYED7OkCfCSwCjWrfI8kdFNlBn8BC7GeIiOLT9NqLS7piB4ALn4NaNOlk0Munep%2FGjP%2FKpyO5x3u%2BNsvDJ4dfXjp1ABTQF431LlB%2FHDBjNX%2FIJv%2F4yQYiLP4hWCGTHJvkEiwae8M1yjvqizCv1pLBBjqkAeLqNgDhC5iJl7nAt7LELwMJdjIIAfliVexEVdeeyENtSxZQXQlwxESkwYYDVzaTIc83zAtx%2BI0KQq1YHT3OUp9QTZ%2FTBoaGI8i0tgo9G%2FeHYgSfgYpO8Aa9yjIyVPyB4lEVmANrYEto9P5%2FTX6cPfLSJcEV9Z03Vt1Zl%2FvInnvvuq1R0UwSFyiuRNEGxMV%2FXHx5lB4U%2FPuqN3c8ZR%2F8dZsqhXhE&X-Amz-Signature=73a283553af4719b8fa39144f0d407fbac1d7b3085b756317d2a094e5d1f2932&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5ECKENE%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCPKgrwArWMIyqP7rqMF8jlYkvxwi8NCfGQbAZG8BR%2FpAIhAMKxy59OGNS9RpRdJ6toh4M8D%2BeoNAcZyOnwWHVLRUaiKv8DCBgQABoMNjM3NDIzMTgzODA1IgxJoOxl68FezQ%2BO0Dwq3AO%2BJH%2F7Z0afy119oz4GTMIaY5fT16V5y3oMv9Xo7qSFV9kGr9LpIU7Ex%2BSFEdKDdS8M9PsfEov%2Buaq7UKNx7Bz4mfFh2ljNs5aSirG1aPQyUohihvdVv1yrUt%2FLztok5qHuYF0b%2Bf4LOtR1yJydlYaHMk30qvqP4zvF8vToREob7Kob4y9FJwMoOg0wdzOwxP%2F7qmIAJI9UNsMSpKAoIcONReaWGhwqI4wMXajb4LBoButUfTlaCDfk7adMnmL6WhEf0Hyyn%2BSSJdnd0C%2BEmgm0zlEhoE8ZYIakJTp3ihDreRaWLsIWiIpeHHJ1UHlR01%2BT4y5mBJX2Xi9puBrmTufoddMR%2B2PtBkM9%2BukcpJ4EZ547R3GomjeYxAcWGYIwRwi0B3mytJI14etKPzCiz4LN2FTtI3N9leWNUhr6rJwFZWaomTLhwE6iAp5ILwrahW7L0jySyh72n%2B4Ak4HWikIrUXLUYiQPsX0Hnnq2%2FRYGruPJYED7OkCfCSwCjWrfI8kdFNlBn8BC7GeIiOLT9NqLS7piB4ALn4NaNOlk0Munep%2FGjP%2FKpyO5x3u%2BNsvDJ4dfXjp1ABTQF431LlB%2FHDBjNX%2FIJv%2F4yQYiLP4hWCGTHJvkEiwae8M1yjvqizCv1pLBBjqkAeLqNgDhC5iJl7nAt7LELwMJdjIIAfliVexEVdeeyENtSxZQXQlwxESkwYYDVzaTIc83zAtx%2BI0KQq1YHT3OUp9QTZ%2FTBoaGI8i0tgo9G%2FeHYgSfgYpO8Aa9yjIyVPyB4lEVmANrYEto9P5%2FTX6cPfLSJcEV9Z03Vt1Zl%2FvInnvvuq1R0UwSFyiuRNEGxMV%2FXHx5lB4U%2FPuqN3c8ZR%2F8dZsqhXhE&X-Amz-Signature=8484fdc92fa67832212ac8fbb82bc81c8357c3b4e0aba5c5b0e898a6f099b94e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5ECKENE%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCPKgrwArWMIyqP7rqMF8jlYkvxwi8NCfGQbAZG8BR%2FpAIhAMKxy59OGNS9RpRdJ6toh4M8D%2BeoNAcZyOnwWHVLRUaiKv8DCBgQABoMNjM3NDIzMTgzODA1IgxJoOxl68FezQ%2BO0Dwq3AO%2BJH%2F7Z0afy119oz4GTMIaY5fT16V5y3oMv9Xo7qSFV9kGr9LpIU7Ex%2BSFEdKDdS8M9PsfEov%2Buaq7UKNx7Bz4mfFh2ljNs5aSirG1aPQyUohihvdVv1yrUt%2FLztok5qHuYF0b%2Bf4LOtR1yJydlYaHMk30qvqP4zvF8vToREob7Kob4y9FJwMoOg0wdzOwxP%2F7qmIAJI9UNsMSpKAoIcONReaWGhwqI4wMXajb4LBoButUfTlaCDfk7adMnmL6WhEf0Hyyn%2BSSJdnd0C%2BEmgm0zlEhoE8ZYIakJTp3ihDreRaWLsIWiIpeHHJ1UHlR01%2BT4y5mBJX2Xi9puBrmTufoddMR%2B2PtBkM9%2BukcpJ4EZ547R3GomjeYxAcWGYIwRwi0B3mytJI14etKPzCiz4LN2FTtI3N9leWNUhr6rJwFZWaomTLhwE6iAp5ILwrahW7L0jySyh72n%2B4Ak4HWikIrUXLUYiQPsX0Hnnq2%2FRYGruPJYED7OkCfCSwCjWrfI8kdFNlBn8BC7GeIiOLT9NqLS7piB4ALn4NaNOlk0Munep%2FGjP%2FKpyO5x3u%2BNsvDJ4dfXjp1ABTQF431LlB%2FHDBjNX%2FIJv%2F4yQYiLP4hWCGTHJvkEiwae8M1yjvqizCv1pLBBjqkAeLqNgDhC5iJl7nAt7LELwMJdjIIAfliVexEVdeeyENtSxZQXQlwxESkwYYDVzaTIc83zAtx%2BI0KQq1YHT3OUp9QTZ%2FTBoaGI8i0tgo9G%2FeHYgSfgYpO8Aa9yjIyVPyB4lEVmANrYEto9P5%2FTX6cPfLSJcEV9Z03Vt1Zl%2FvInnvvuq1R0UwSFyiuRNEGxMV%2FXHx5lB4U%2FPuqN3c8ZR%2F8dZsqhXhE&X-Amz-Signature=24dc2bdb0acaa6bbe539f58b4e8a90d9158f74eadbe9c4c8300a4cb15582a18c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5ECKENE%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCPKgrwArWMIyqP7rqMF8jlYkvxwi8NCfGQbAZG8BR%2FpAIhAMKxy59OGNS9RpRdJ6toh4M8D%2BeoNAcZyOnwWHVLRUaiKv8DCBgQABoMNjM3NDIzMTgzODA1IgxJoOxl68FezQ%2BO0Dwq3AO%2BJH%2F7Z0afy119oz4GTMIaY5fT16V5y3oMv9Xo7qSFV9kGr9LpIU7Ex%2BSFEdKDdS8M9PsfEov%2Buaq7UKNx7Bz4mfFh2ljNs5aSirG1aPQyUohihvdVv1yrUt%2FLztok5qHuYF0b%2Bf4LOtR1yJydlYaHMk30qvqP4zvF8vToREob7Kob4y9FJwMoOg0wdzOwxP%2F7qmIAJI9UNsMSpKAoIcONReaWGhwqI4wMXajb4LBoButUfTlaCDfk7adMnmL6WhEf0Hyyn%2BSSJdnd0C%2BEmgm0zlEhoE8ZYIakJTp3ihDreRaWLsIWiIpeHHJ1UHlR01%2BT4y5mBJX2Xi9puBrmTufoddMR%2B2PtBkM9%2BukcpJ4EZ547R3GomjeYxAcWGYIwRwi0B3mytJI14etKPzCiz4LN2FTtI3N9leWNUhr6rJwFZWaomTLhwE6iAp5ILwrahW7L0jySyh72n%2B4Ak4HWikIrUXLUYiQPsX0Hnnq2%2FRYGruPJYED7OkCfCSwCjWrfI8kdFNlBn8BC7GeIiOLT9NqLS7piB4ALn4NaNOlk0Munep%2FGjP%2FKpyO5x3u%2BNsvDJ4dfXjp1ABTQF431LlB%2FHDBjNX%2FIJv%2F4yQYiLP4hWCGTHJvkEiwae8M1yjvqizCv1pLBBjqkAeLqNgDhC5iJl7nAt7LELwMJdjIIAfliVexEVdeeyENtSxZQXQlwxESkwYYDVzaTIc83zAtx%2BI0KQq1YHT3OUp9QTZ%2FTBoaGI8i0tgo9G%2FeHYgSfgYpO8Aa9yjIyVPyB4lEVmANrYEto9P5%2FTX6cPfLSJcEV9Z03Vt1Zl%2FvInnvvuq1R0UwSFyiuRNEGxMV%2FXHx5lB4U%2FPuqN3c8ZR%2F8dZsqhXhE&X-Amz-Signature=ca9051830f3864813df8eb15350978e7130bda6bcd19d2d56418c57da667941c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
