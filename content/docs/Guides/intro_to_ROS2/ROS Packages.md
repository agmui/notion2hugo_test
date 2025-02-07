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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664DCKD6R%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T061112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIHskKkzCB1T9Bs4YyVIbiFggZELoHtyXWxFYbhELLxGeAiAK8c3%2B132Vms7Yz920%2BGXHcqX3zkqhH%2FsBezrvNBegBCr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMDW5bXYcHPWVoUKDaKtwDVjVumxNsaqr8B8ZncGq8zbhQFf0YSnludjhzns8RS3w%2BbdIR4yBETWS8llkzSL1g5k89BJjfNYo9z9QYVdGNgNtx4hqeyYD0UZAtHwTNvBPzQEuLQBZAwl9KW9bWJb0EY1m8JS2GyYrdSF7uw0uKIPjhE4FhjJ2haPCUb%2B17OChdifUmGSCQH%2B8lg2scUr%2FCkzpsf4UA55FMPJnFilkx7Hd0twOMFXJ20qc2LS%2Bou%2FbcsuzXzXYgwHbk1IsipKC9iWxFDc44UsJi%2FuTIyRCfoNpsukurDZvBhvCxv0GnysLBG8XNu0zvFE7TzaTVXNruBIUn13sVFgwu8crHd8XPSY%2F2r417Ilm7Z3xBSHLkcoNwRrhWghtxFnqD83t4rNzjuDIOARJAGKYtXAdvxNTDkwCHoq%2BaBSyh8Bq%2B4gadZHxi0iT8BzkPtntH4w6ifAIiTUfuUg9fVzpQgHgDuFE%2B1YyAYkHiYJjusIMIfy8nZDmi%2Fsd%2BnpO7urevWxGtkiyOlpRx3I9fX36lYTKQFAVih4SbXt938ObC8zxUWXVGl%2Fg%2FXoHZfoQ72umKCBONPeKBfGCakJDyWUIfyicLy%2BXS%2BXx4nq2VWyAmSXN7QWf0uHq6PEPuj%2B5wUn1DGggw8sCWvQY6pgEjb6GtL%2Fa7BvJKR716%2BdIwDilF921iV%2FX0yrS9irDxz8QuwwGtByZKF%2BONWK%2FzUjcSYxkVorx1XPElIt%2BWOS6LYhs1LBjFkwdk63SV8OzFDqyTl4ZhBhHuawfRe7VdEZufOyzpFpNy3Cq7ujaSM%2BJPbxxj63pO4NGmHHaASKiZsnJ0%2Fim6qveSo3WO9eZ7YKSepPVmD1R89eE1b6yyPluWgT7fCYX7&X-Amz-Signature=e7cb5b8afc10aa4efb37f4616e63a0da7b7351901114a44b9f52bd002c406bf6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664DCKD6R%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T061112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIHskKkzCB1T9Bs4YyVIbiFggZELoHtyXWxFYbhELLxGeAiAK8c3%2B132Vms7Yz920%2BGXHcqX3zkqhH%2FsBezrvNBegBCr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMDW5bXYcHPWVoUKDaKtwDVjVumxNsaqr8B8ZncGq8zbhQFf0YSnludjhzns8RS3w%2BbdIR4yBETWS8llkzSL1g5k89BJjfNYo9z9QYVdGNgNtx4hqeyYD0UZAtHwTNvBPzQEuLQBZAwl9KW9bWJb0EY1m8JS2GyYrdSF7uw0uKIPjhE4FhjJ2haPCUb%2B17OChdifUmGSCQH%2B8lg2scUr%2FCkzpsf4UA55FMPJnFilkx7Hd0twOMFXJ20qc2LS%2Bou%2FbcsuzXzXYgwHbk1IsipKC9iWxFDc44UsJi%2FuTIyRCfoNpsukurDZvBhvCxv0GnysLBG8XNu0zvFE7TzaTVXNruBIUn13sVFgwu8crHd8XPSY%2F2r417Ilm7Z3xBSHLkcoNwRrhWghtxFnqD83t4rNzjuDIOARJAGKYtXAdvxNTDkwCHoq%2BaBSyh8Bq%2B4gadZHxi0iT8BzkPtntH4w6ifAIiTUfuUg9fVzpQgHgDuFE%2B1YyAYkHiYJjusIMIfy8nZDmi%2Fsd%2BnpO7urevWxGtkiyOlpRx3I9fX36lYTKQFAVih4SbXt938ObC8zxUWXVGl%2Fg%2FXoHZfoQ72umKCBONPeKBfGCakJDyWUIfyicLy%2BXS%2BXx4nq2VWyAmSXN7QWf0uHq6PEPuj%2B5wUn1DGggw8sCWvQY6pgEjb6GtL%2Fa7BvJKR716%2BdIwDilF921iV%2FX0yrS9irDxz8QuwwGtByZKF%2BONWK%2FzUjcSYxkVorx1XPElIt%2BWOS6LYhs1LBjFkwdk63SV8OzFDqyTl4ZhBhHuawfRe7VdEZufOyzpFpNy3Cq7ujaSM%2BJPbxxj63pO4NGmHHaASKiZsnJ0%2Fim6qveSo3WO9eZ7YKSepPVmD1R89eE1b6yyPluWgT7fCYX7&X-Amz-Signature=a1f6271d6a0dd09ef5b73a0a7e2b9c0b043d677c9a33610a5cb8fa61ff44b56d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664DCKD6R%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T061112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIHskKkzCB1T9Bs4YyVIbiFggZELoHtyXWxFYbhELLxGeAiAK8c3%2B132Vms7Yz920%2BGXHcqX3zkqhH%2FsBezrvNBegBCr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMDW5bXYcHPWVoUKDaKtwDVjVumxNsaqr8B8ZncGq8zbhQFf0YSnludjhzns8RS3w%2BbdIR4yBETWS8llkzSL1g5k89BJjfNYo9z9QYVdGNgNtx4hqeyYD0UZAtHwTNvBPzQEuLQBZAwl9KW9bWJb0EY1m8JS2GyYrdSF7uw0uKIPjhE4FhjJ2haPCUb%2B17OChdifUmGSCQH%2B8lg2scUr%2FCkzpsf4UA55FMPJnFilkx7Hd0twOMFXJ20qc2LS%2Bou%2FbcsuzXzXYgwHbk1IsipKC9iWxFDc44UsJi%2FuTIyRCfoNpsukurDZvBhvCxv0GnysLBG8XNu0zvFE7TzaTVXNruBIUn13sVFgwu8crHd8XPSY%2F2r417Ilm7Z3xBSHLkcoNwRrhWghtxFnqD83t4rNzjuDIOARJAGKYtXAdvxNTDkwCHoq%2BaBSyh8Bq%2B4gadZHxi0iT8BzkPtntH4w6ifAIiTUfuUg9fVzpQgHgDuFE%2B1YyAYkHiYJjusIMIfy8nZDmi%2Fsd%2BnpO7urevWxGtkiyOlpRx3I9fX36lYTKQFAVih4SbXt938ObC8zxUWXVGl%2Fg%2FXoHZfoQ72umKCBONPeKBfGCakJDyWUIfyicLy%2BXS%2BXx4nq2VWyAmSXN7QWf0uHq6PEPuj%2B5wUn1DGggw8sCWvQY6pgEjb6GtL%2Fa7BvJKR716%2BdIwDilF921iV%2FX0yrS9irDxz8QuwwGtByZKF%2BONWK%2FzUjcSYxkVorx1XPElIt%2BWOS6LYhs1LBjFkwdk63SV8OzFDqyTl4ZhBhHuawfRe7VdEZufOyzpFpNy3Cq7ujaSM%2BJPbxxj63pO4NGmHHaASKiZsnJ0%2Fim6qveSo3WO9eZ7YKSepPVmD1R89eE1b6yyPluWgT7fCYX7&X-Amz-Signature=7b8811e8af81bd8ffd0987b65f9cc2f2a4c6294175e255fe82da8e02db8da94c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664DCKD6R%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T061112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIHskKkzCB1T9Bs4YyVIbiFggZELoHtyXWxFYbhELLxGeAiAK8c3%2B132Vms7Yz920%2BGXHcqX3zkqhH%2FsBezrvNBegBCr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMDW5bXYcHPWVoUKDaKtwDVjVumxNsaqr8B8ZncGq8zbhQFf0YSnludjhzns8RS3w%2BbdIR4yBETWS8llkzSL1g5k89BJjfNYo9z9QYVdGNgNtx4hqeyYD0UZAtHwTNvBPzQEuLQBZAwl9KW9bWJb0EY1m8JS2GyYrdSF7uw0uKIPjhE4FhjJ2haPCUb%2B17OChdifUmGSCQH%2B8lg2scUr%2FCkzpsf4UA55FMPJnFilkx7Hd0twOMFXJ20qc2LS%2Bou%2FbcsuzXzXYgwHbk1IsipKC9iWxFDc44UsJi%2FuTIyRCfoNpsukurDZvBhvCxv0GnysLBG8XNu0zvFE7TzaTVXNruBIUn13sVFgwu8crHd8XPSY%2F2r417Ilm7Z3xBSHLkcoNwRrhWghtxFnqD83t4rNzjuDIOARJAGKYtXAdvxNTDkwCHoq%2BaBSyh8Bq%2B4gadZHxi0iT8BzkPtntH4w6ifAIiTUfuUg9fVzpQgHgDuFE%2B1YyAYkHiYJjusIMIfy8nZDmi%2Fsd%2BnpO7urevWxGtkiyOlpRx3I9fX36lYTKQFAVih4SbXt938ObC8zxUWXVGl%2Fg%2FXoHZfoQ72umKCBONPeKBfGCakJDyWUIfyicLy%2BXS%2BXx4nq2VWyAmSXN7QWf0uHq6PEPuj%2B5wUn1DGggw8sCWvQY6pgEjb6GtL%2Fa7BvJKR716%2BdIwDilF921iV%2FX0yrS9irDxz8QuwwGtByZKF%2BONWK%2FzUjcSYxkVorx1XPElIt%2BWOS6LYhs1LBjFkwdk63SV8OzFDqyTl4ZhBhHuawfRe7VdEZufOyzpFpNy3Cq7ujaSM%2BJPbxxj63pO4NGmHHaASKiZsnJ0%2Fim6qveSo3WO9eZ7YKSepPVmD1R89eE1b6yyPluWgT7fCYX7&X-Amz-Signature=795ebfb69b8123b3bac407d8ea82f2d9ab27606272bdef3659b5f81673b8d202&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664DCKD6R%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T061112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIHskKkzCB1T9Bs4YyVIbiFggZELoHtyXWxFYbhELLxGeAiAK8c3%2B132Vms7Yz920%2BGXHcqX3zkqhH%2FsBezrvNBegBCr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMDW5bXYcHPWVoUKDaKtwDVjVumxNsaqr8B8ZncGq8zbhQFf0YSnludjhzns8RS3w%2BbdIR4yBETWS8llkzSL1g5k89BJjfNYo9z9QYVdGNgNtx4hqeyYD0UZAtHwTNvBPzQEuLQBZAwl9KW9bWJb0EY1m8JS2GyYrdSF7uw0uKIPjhE4FhjJ2haPCUb%2B17OChdifUmGSCQH%2B8lg2scUr%2FCkzpsf4UA55FMPJnFilkx7Hd0twOMFXJ20qc2LS%2Bou%2FbcsuzXzXYgwHbk1IsipKC9iWxFDc44UsJi%2FuTIyRCfoNpsukurDZvBhvCxv0GnysLBG8XNu0zvFE7TzaTVXNruBIUn13sVFgwu8crHd8XPSY%2F2r417Ilm7Z3xBSHLkcoNwRrhWghtxFnqD83t4rNzjuDIOARJAGKYtXAdvxNTDkwCHoq%2BaBSyh8Bq%2B4gadZHxi0iT8BzkPtntH4w6ifAIiTUfuUg9fVzpQgHgDuFE%2B1YyAYkHiYJjusIMIfy8nZDmi%2Fsd%2BnpO7urevWxGtkiyOlpRx3I9fX36lYTKQFAVih4SbXt938ObC8zxUWXVGl%2Fg%2FXoHZfoQ72umKCBONPeKBfGCakJDyWUIfyicLy%2BXS%2BXx4nq2VWyAmSXN7QWf0uHq6PEPuj%2B5wUn1DGggw8sCWvQY6pgEjb6GtL%2Fa7BvJKR716%2BdIwDilF921iV%2FX0yrS9irDxz8QuwwGtByZKF%2BONWK%2FzUjcSYxkVorx1XPElIt%2BWOS6LYhs1LBjFkwdk63SV8OzFDqyTl4ZhBhHuawfRe7VdEZufOyzpFpNy3Cq7ujaSM%2BJPbxxj63pO4NGmHHaASKiZsnJ0%2Fim6qveSo3WO9eZ7YKSepPVmD1R89eE1b6yyPluWgT7fCYX7&X-Amz-Signature=6be66dfe930f183ab462a3d5eec165f942be6d8187efef29c8d7f2da149a4146&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664DCKD6R%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T061112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIHskKkzCB1T9Bs4YyVIbiFggZELoHtyXWxFYbhELLxGeAiAK8c3%2B132Vms7Yz920%2BGXHcqX3zkqhH%2FsBezrvNBegBCr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMDW5bXYcHPWVoUKDaKtwDVjVumxNsaqr8B8ZncGq8zbhQFf0YSnludjhzns8RS3w%2BbdIR4yBETWS8llkzSL1g5k89BJjfNYo9z9QYVdGNgNtx4hqeyYD0UZAtHwTNvBPzQEuLQBZAwl9KW9bWJb0EY1m8JS2GyYrdSF7uw0uKIPjhE4FhjJ2haPCUb%2B17OChdifUmGSCQH%2B8lg2scUr%2FCkzpsf4UA55FMPJnFilkx7Hd0twOMFXJ20qc2LS%2Bou%2FbcsuzXzXYgwHbk1IsipKC9iWxFDc44UsJi%2FuTIyRCfoNpsukurDZvBhvCxv0GnysLBG8XNu0zvFE7TzaTVXNruBIUn13sVFgwu8crHd8XPSY%2F2r417Ilm7Z3xBSHLkcoNwRrhWghtxFnqD83t4rNzjuDIOARJAGKYtXAdvxNTDkwCHoq%2BaBSyh8Bq%2B4gadZHxi0iT8BzkPtntH4w6ifAIiTUfuUg9fVzpQgHgDuFE%2B1YyAYkHiYJjusIMIfy8nZDmi%2Fsd%2BnpO7urevWxGtkiyOlpRx3I9fX36lYTKQFAVih4SbXt938ObC8zxUWXVGl%2Fg%2FXoHZfoQ72umKCBONPeKBfGCakJDyWUIfyicLy%2BXS%2BXx4nq2VWyAmSXN7QWf0uHq6PEPuj%2B5wUn1DGggw8sCWvQY6pgEjb6GtL%2Fa7BvJKR716%2BdIwDilF921iV%2FX0yrS9irDxz8QuwwGtByZKF%2BONWK%2FzUjcSYxkVorx1XPElIt%2BWOS6LYhs1LBjFkwdk63SV8OzFDqyTl4ZhBhHuawfRe7VdEZufOyzpFpNy3Cq7ujaSM%2BJPbxxj63pO4NGmHHaASKiZsnJ0%2Fim6qveSo3WO9eZ7YKSepPVmD1R89eE1b6yyPluWgT7fCYX7&X-Amz-Signature=1c84bb47fdd86ba2bf8e7f5574d3a8dd40846d9d4a041146385085e314d7b65f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664DCKD6R%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T061112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIHskKkzCB1T9Bs4YyVIbiFggZELoHtyXWxFYbhELLxGeAiAK8c3%2B132Vms7Yz920%2BGXHcqX3zkqhH%2FsBezrvNBegBCr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMDW5bXYcHPWVoUKDaKtwDVjVumxNsaqr8B8ZncGq8zbhQFf0YSnludjhzns8RS3w%2BbdIR4yBETWS8llkzSL1g5k89BJjfNYo9z9QYVdGNgNtx4hqeyYD0UZAtHwTNvBPzQEuLQBZAwl9KW9bWJb0EY1m8JS2GyYrdSF7uw0uKIPjhE4FhjJ2haPCUb%2B17OChdifUmGSCQH%2B8lg2scUr%2FCkzpsf4UA55FMPJnFilkx7Hd0twOMFXJ20qc2LS%2Bou%2FbcsuzXzXYgwHbk1IsipKC9iWxFDc44UsJi%2FuTIyRCfoNpsukurDZvBhvCxv0GnysLBG8XNu0zvFE7TzaTVXNruBIUn13sVFgwu8crHd8XPSY%2F2r417Ilm7Z3xBSHLkcoNwRrhWghtxFnqD83t4rNzjuDIOARJAGKYtXAdvxNTDkwCHoq%2BaBSyh8Bq%2B4gadZHxi0iT8BzkPtntH4w6ifAIiTUfuUg9fVzpQgHgDuFE%2B1YyAYkHiYJjusIMIfy8nZDmi%2Fsd%2BnpO7urevWxGtkiyOlpRx3I9fX36lYTKQFAVih4SbXt938ObC8zxUWXVGl%2Fg%2FXoHZfoQ72umKCBONPeKBfGCakJDyWUIfyicLy%2BXS%2BXx4nq2VWyAmSXN7QWf0uHq6PEPuj%2B5wUn1DGggw8sCWvQY6pgEjb6GtL%2Fa7BvJKR716%2BdIwDilF921iV%2FX0yrS9irDxz8QuwwGtByZKF%2BONWK%2FzUjcSYxkVorx1XPElIt%2BWOS6LYhs1LBjFkwdk63SV8OzFDqyTl4ZhBhHuawfRe7VdEZufOyzpFpNy3Cq7ujaSM%2BJPbxxj63pO4NGmHHaASKiZsnJ0%2Fim6qveSo3WO9eZ7YKSepPVmD1R89eE1b6yyPluWgT7fCYX7&X-Amz-Signature=c796df2eff5a66c9ad81d4eedb5130dbe7baac3c7311d634961a126125e548fb&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
