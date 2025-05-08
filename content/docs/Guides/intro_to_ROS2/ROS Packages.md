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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPPNQFLN%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUQk10IWZMk%2BfAVzACEh7v2CS0nZrN2VJZN%2FKgR1kAxwIgLnH6xte4nQfRbODrd8%2Bu8Kg564IvEprpU2%2FXVycCX6Mq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDFTeM6i2CAyEGBz%2FkCrcA6dJWfhYVNs0dS6nfCgDT8NEpmDJURsWZi5PiqnDQML0Svm1CORZEFQj%2FShelB6Fnr%2BXLxZAqR2b%2FV68O500Uz7O7%2BOobDeGox64Rtn9vcG0Q2HwMqKizuqok%2BDI9W1avPSHg4%2BeQmgGn9iB6PqyOvkPqT9X84iVaeoreGRWjHzvqP8efZm%2BSctN%2FRQ%2BnX1ASk2m11D1vz7dcaR4aAhI3wLh9cFmLIEnJqnfcyh%2BkQWcUW2aEyCBG55h50xcS5Ejuctrwu%2BczCUWlPxb40Suq4TIGKn32LoDNfCdzqMf%2F1MAboSlbUlM%2BLJDgjTizrg%2BQJ2CkMkxJ6ZpXsxue2svntFNNEseL%2BiGGHYEwLDM9gWyW8%2BaXn4VpqKQytXzNTK9lqaAa9BX7mkIPITpktlG%2FEnAIq07pLjkx0OymMPfC1UGkNIM9caiRAWKaCWZLSRCwF6z9GxXJZQSdZhqezt3CZ7eBexwUxLINcQ7JSz0%2FO9zNSnjXGCGprSMGwi0Jxa0lnXjQzLICQwDsocq%2FCXfFD7gHFQwruJkQwpal3ki0pC6LpyJEC%2B0n2kxIACetezjQ6WKQjLWSQnLADABP2XljYi9dIS%2FTkkmjY0O7acyUwneOmzgvod8lQba3YMaMO6z88AGOqUBoPeVj7mqOgo8Wt4WGF5FRtxFhsIVT%2Bc8%2Fi9hWuAB8W0CiBaBzWymxYy%2Fg5oqzx3R5NY4IFN4tc6z1vLu0nbusRfGc0vEivzJf3gBsFpWwd6JOYQ7cZNtAB0k4ni9PTmP6XHapH12NdSAxAChKp5i7n5d4HrGs8Fm6e8V1Yhtg9sx8xWKHVJ5lW388Nq%2Fem3TYa0RXZxEwqSx8uVlXyDJHuEqC%2BFd&X-Amz-Signature=da49e1009310038b61e67f37de094befaad93ccacfe746533827dc773dd93869&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPPNQFLN%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUQk10IWZMk%2BfAVzACEh7v2CS0nZrN2VJZN%2FKgR1kAxwIgLnH6xte4nQfRbODrd8%2Bu8Kg564IvEprpU2%2FXVycCX6Mq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDFTeM6i2CAyEGBz%2FkCrcA6dJWfhYVNs0dS6nfCgDT8NEpmDJURsWZi5PiqnDQML0Svm1CORZEFQj%2FShelB6Fnr%2BXLxZAqR2b%2FV68O500Uz7O7%2BOobDeGox64Rtn9vcG0Q2HwMqKizuqok%2BDI9W1avPSHg4%2BeQmgGn9iB6PqyOvkPqT9X84iVaeoreGRWjHzvqP8efZm%2BSctN%2FRQ%2BnX1ASk2m11D1vz7dcaR4aAhI3wLh9cFmLIEnJqnfcyh%2BkQWcUW2aEyCBG55h50xcS5Ejuctrwu%2BczCUWlPxb40Suq4TIGKn32LoDNfCdzqMf%2F1MAboSlbUlM%2BLJDgjTizrg%2BQJ2CkMkxJ6ZpXsxue2svntFNNEseL%2BiGGHYEwLDM9gWyW8%2BaXn4VpqKQytXzNTK9lqaAa9BX7mkIPITpktlG%2FEnAIq07pLjkx0OymMPfC1UGkNIM9caiRAWKaCWZLSRCwF6z9GxXJZQSdZhqezt3CZ7eBexwUxLINcQ7JSz0%2FO9zNSnjXGCGprSMGwi0Jxa0lnXjQzLICQwDsocq%2FCXfFD7gHFQwruJkQwpal3ki0pC6LpyJEC%2B0n2kxIACetezjQ6WKQjLWSQnLADABP2XljYi9dIS%2FTkkmjY0O7acyUwneOmzgvod8lQba3YMaMO6z88AGOqUBoPeVj7mqOgo8Wt4WGF5FRtxFhsIVT%2Bc8%2Fi9hWuAB8W0CiBaBzWymxYy%2Fg5oqzx3R5NY4IFN4tc6z1vLu0nbusRfGc0vEivzJf3gBsFpWwd6JOYQ7cZNtAB0k4ni9PTmP6XHapH12NdSAxAChKp5i7n5d4HrGs8Fm6e8V1Yhtg9sx8xWKHVJ5lW388Nq%2Fem3TYa0RXZxEwqSx8uVlXyDJHuEqC%2BFd&X-Amz-Signature=62de4e67916195a27ad38e47564bdd1081b77281c31733a54353d235bc5ec8a7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPPNQFLN%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUQk10IWZMk%2BfAVzACEh7v2CS0nZrN2VJZN%2FKgR1kAxwIgLnH6xte4nQfRbODrd8%2Bu8Kg564IvEprpU2%2FXVycCX6Mq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDFTeM6i2CAyEGBz%2FkCrcA6dJWfhYVNs0dS6nfCgDT8NEpmDJURsWZi5PiqnDQML0Svm1CORZEFQj%2FShelB6Fnr%2BXLxZAqR2b%2FV68O500Uz7O7%2BOobDeGox64Rtn9vcG0Q2HwMqKizuqok%2BDI9W1avPSHg4%2BeQmgGn9iB6PqyOvkPqT9X84iVaeoreGRWjHzvqP8efZm%2BSctN%2FRQ%2BnX1ASk2m11D1vz7dcaR4aAhI3wLh9cFmLIEnJqnfcyh%2BkQWcUW2aEyCBG55h50xcS5Ejuctrwu%2BczCUWlPxb40Suq4TIGKn32LoDNfCdzqMf%2F1MAboSlbUlM%2BLJDgjTizrg%2BQJ2CkMkxJ6ZpXsxue2svntFNNEseL%2BiGGHYEwLDM9gWyW8%2BaXn4VpqKQytXzNTK9lqaAa9BX7mkIPITpktlG%2FEnAIq07pLjkx0OymMPfC1UGkNIM9caiRAWKaCWZLSRCwF6z9GxXJZQSdZhqezt3CZ7eBexwUxLINcQ7JSz0%2FO9zNSnjXGCGprSMGwi0Jxa0lnXjQzLICQwDsocq%2FCXfFD7gHFQwruJkQwpal3ki0pC6LpyJEC%2B0n2kxIACetezjQ6WKQjLWSQnLADABP2XljYi9dIS%2FTkkmjY0O7acyUwneOmzgvod8lQba3YMaMO6z88AGOqUBoPeVj7mqOgo8Wt4WGF5FRtxFhsIVT%2Bc8%2Fi9hWuAB8W0CiBaBzWymxYy%2Fg5oqzx3R5NY4IFN4tc6z1vLu0nbusRfGc0vEivzJf3gBsFpWwd6JOYQ7cZNtAB0k4ni9PTmP6XHapH12NdSAxAChKp5i7n5d4HrGs8Fm6e8V1Yhtg9sx8xWKHVJ5lW388Nq%2Fem3TYa0RXZxEwqSx8uVlXyDJHuEqC%2BFd&X-Amz-Signature=2aee03b363495611c80d107eefbc6b040f82de24aead07193c4f4af7818dab1b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPPNQFLN%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUQk10IWZMk%2BfAVzACEh7v2CS0nZrN2VJZN%2FKgR1kAxwIgLnH6xte4nQfRbODrd8%2Bu8Kg564IvEprpU2%2FXVycCX6Mq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDFTeM6i2CAyEGBz%2FkCrcA6dJWfhYVNs0dS6nfCgDT8NEpmDJURsWZi5PiqnDQML0Svm1CORZEFQj%2FShelB6Fnr%2BXLxZAqR2b%2FV68O500Uz7O7%2BOobDeGox64Rtn9vcG0Q2HwMqKizuqok%2BDI9W1avPSHg4%2BeQmgGn9iB6PqyOvkPqT9X84iVaeoreGRWjHzvqP8efZm%2BSctN%2FRQ%2BnX1ASk2m11D1vz7dcaR4aAhI3wLh9cFmLIEnJqnfcyh%2BkQWcUW2aEyCBG55h50xcS5Ejuctrwu%2BczCUWlPxb40Suq4TIGKn32LoDNfCdzqMf%2F1MAboSlbUlM%2BLJDgjTizrg%2BQJ2CkMkxJ6ZpXsxue2svntFNNEseL%2BiGGHYEwLDM9gWyW8%2BaXn4VpqKQytXzNTK9lqaAa9BX7mkIPITpktlG%2FEnAIq07pLjkx0OymMPfC1UGkNIM9caiRAWKaCWZLSRCwF6z9GxXJZQSdZhqezt3CZ7eBexwUxLINcQ7JSz0%2FO9zNSnjXGCGprSMGwi0Jxa0lnXjQzLICQwDsocq%2FCXfFD7gHFQwruJkQwpal3ki0pC6LpyJEC%2B0n2kxIACetezjQ6WKQjLWSQnLADABP2XljYi9dIS%2FTkkmjY0O7acyUwneOmzgvod8lQba3YMaMO6z88AGOqUBoPeVj7mqOgo8Wt4WGF5FRtxFhsIVT%2Bc8%2Fi9hWuAB8W0CiBaBzWymxYy%2Fg5oqzx3R5NY4IFN4tc6z1vLu0nbusRfGc0vEivzJf3gBsFpWwd6JOYQ7cZNtAB0k4ni9PTmP6XHapH12NdSAxAChKp5i7n5d4HrGs8Fm6e8V1Yhtg9sx8xWKHVJ5lW388Nq%2Fem3TYa0RXZxEwqSx8uVlXyDJHuEqC%2BFd&X-Amz-Signature=8d3cc1ff05d17fdefb124e319e301030bfe1d133a1a61a5a1007f1bd2054f6ee&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPPNQFLN%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUQk10IWZMk%2BfAVzACEh7v2CS0nZrN2VJZN%2FKgR1kAxwIgLnH6xte4nQfRbODrd8%2Bu8Kg564IvEprpU2%2FXVycCX6Mq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDFTeM6i2CAyEGBz%2FkCrcA6dJWfhYVNs0dS6nfCgDT8NEpmDJURsWZi5PiqnDQML0Svm1CORZEFQj%2FShelB6Fnr%2BXLxZAqR2b%2FV68O500Uz7O7%2BOobDeGox64Rtn9vcG0Q2HwMqKizuqok%2BDI9W1avPSHg4%2BeQmgGn9iB6PqyOvkPqT9X84iVaeoreGRWjHzvqP8efZm%2BSctN%2FRQ%2BnX1ASk2m11D1vz7dcaR4aAhI3wLh9cFmLIEnJqnfcyh%2BkQWcUW2aEyCBG55h50xcS5Ejuctrwu%2BczCUWlPxb40Suq4TIGKn32LoDNfCdzqMf%2F1MAboSlbUlM%2BLJDgjTizrg%2BQJ2CkMkxJ6ZpXsxue2svntFNNEseL%2BiGGHYEwLDM9gWyW8%2BaXn4VpqKQytXzNTK9lqaAa9BX7mkIPITpktlG%2FEnAIq07pLjkx0OymMPfC1UGkNIM9caiRAWKaCWZLSRCwF6z9GxXJZQSdZhqezt3CZ7eBexwUxLINcQ7JSz0%2FO9zNSnjXGCGprSMGwi0Jxa0lnXjQzLICQwDsocq%2FCXfFD7gHFQwruJkQwpal3ki0pC6LpyJEC%2B0n2kxIACetezjQ6WKQjLWSQnLADABP2XljYi9dIS%2FTkkmjY0O7acyUwneOmzgvod8lQba3YMaMO6z88AGOqUBoPeVj7mqOgo8Wt4WGF5FRtxFhsIVT%2Bc8%2Fi9hWuAB8W0CiBaBzWymxYy%2Fg5oqzx3R5NY4IFN4tc6z1vLu0nbusRfGc0vEivzJf3gBsFpWwd6JOYQ7cZNtAB0k4ni9PTmP6XHapH12NdSAxAChKp5i7n5d4HrGs8Fm6e8V1Yhtg9sx8xWKHVJ5lW388Nq%2Fem3TYa0RXZxEwqSx8uVlXyDJHuEqC%2BFd&X-Amz-Signature=17e545efb97d8d7d350dbd2aa9b2f9b15c785c51cf492111fa74447ebbda170d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPPNQFLN%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUQk10IWZMk%2BfAVzACEh7v2CS0nZrN2VJZN%2FKgR1kAxwIgLnH6xte4nQfRbODrd8%2Bu8Kg564IvEprpU2%2FXVycCX6Mq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDFTeM6i2CAyEGBz%2FkCrcA6dJWfhYVNs0dS6nfCgDT8NEpmDJURsWZi5PiqnDQML0Svm1CORZEFQj%2FShelB6Fnr%2BXLxZAqR2b%2FV68O500Uz7O7%2BOobDeGox64Rtn9vcG0Q2HwMqKizuqok%2BDI9W1avPSHg4%2BeQmgGn9iB6PqyOvkPqT9X84iVaeoreGRWjHzvqP8efZm%2BSctN%2FRQ%2BnX1ASk2m11D1vz7dcaR4aAhI3wLh9cFmLIEnJqnfcyh%2BkQWcUW2aEyCBG55h50xcS5Ejuctrwu%2BczCUWlPxb40Suq4TIGKn32LoDNfCdzqMf%2F1MAboSlbUlM%2BLJDgjTizrg%2BQJ2CkMkxJ6ZpXsxue2svntFNNEseL%2BiGGHYEwLDM9gWyW8%2BaXn4VpqKQytXzNTK9lqaAa9BX7mkIPITpktlG%2FEnAIq07pLjkx0OymMPfC1UGkNIM9caiRAWKaCWZLSRCwF6z9GxXJZQSdZhqezt3CZ7eBexwUxLINcQ7JSz0%2FO9zNSnjXGCGprSMGwi0Jxa0lnXjQzLICQwDsocq%2FCXfFD7gHFQwruJkQwpal3ki0pC6LpyJEC%2B0n2kxIACetezjQ6WKQjLWSQnLADABP2XljYi9dIS%2FTkkmjY0O7acyUwneOmzgvod8lQba3YMaMO6z88AGOqUBoPeVj7mqOgo8Wt4WGF5FRtxFhsIVT%2Bc8%2Fi9hWuAB8W0CiBaBzWymxYy%2Fg5oqzx3R5NY4IFN4tc6z1vLu0nbusRfGc0vEivzJf3gBsFpWwd6JOYQ7cZNtAB0k4ni9PTmP6XHapH12NdSAxAChKp5i7n5d4HrGs8Fm6e8V1Yhtg9sx8xWKHVJ5lW388Nq%2Fem3TYa0RXZxEwqSx8uVlXyDJHuEqC%2BFd&X-Amz-Signature=81ffc70f1676a0e90ef7b84b70ebf860576fb97df90502a775020e1429502ade&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPPNQFLN%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUQk10IWZMk%2BfAVzACEh7v2CS0nZrN2VJZN%2FKgR1kAxwIgLnH6xte4nQfRbODrd8%2Bu8Kg564IvEprpU2%2FXVycCX6Mq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDFTeM6i2CAyEGBz%2FkCrcA6dJWfhYVNs0dS6nfCgDT8NEpmDJURsWZi5PiqnDQML0Svm1CORZEFQj%2FShelB6Fnr%2BXLxZAqR2b%2FV68O500Uz7O7%2BOobDeGox64Rtn9vcG0Q2HwMqKizuqok%2BDI9W1avPSHg4%2BeQmgGn9iB6PqyOvkPqT9X84iVaeoreGRWjHzvqP8efZm%2BSctN%2FRQ%2BnX1ASk2m11D1vz7dcaR4aAhI3wLh9cFmLIEnJqnfcyh%2BkQWcUW2aEyCBG55h50xcS5Ejuctrwu%2BczCUWlPxb40Suq4TIGKn32LoDNfCdzqMf%2F1MAboSlbUlM%2BLJDgjTizrg%2BQJ2CkMkxJ6ZpXsxue2svntFNNEseL%2BiGGHYEwLDM9gWyW8%2BaXn4VpqKQytXzNTK9lqaAa9BX7mkIPITpktlG%2FEnAIq07pLjkx0OymMPfC1UGkNIM9caiRAWKaCWZLSRCwF6z9GxXJZQSdZhqezt3CZ7eBexwUxLINcQ7JSz0%2FO9zNSnjXGCGprSMGwi0Jxa0lnXjQzLICQwDsocq%2FCXfFD7gHFQwruJkQwpal3ki0pC6LpyJEC%2B0n2kxIACetezjQ6WKQjLWSQnLADABP2XljYi9dIS%2FTkkmjY0O7acyUwneOmzgvod8lQba3YMaMO6z88AGOqUBoPeVj7mqOgo8Wt4WGF5FRtxFhsIVT%2Bc8%2Fi9hWuAB8W0CiBaBzWymxYy%2Fg5oqzx3R5NY4IFN4tc6z1vLu0nbusRfGc0vEivzJf3gBsFpWwd6JOYQ7cZNtAB0k4ni9PTmP6XHapH12NdSAxAChKp5i7n5d4HrGs8Fm6e8V1Yhtg9sx8xWKHVJ5lW388Nq%2Fem3TYa0RXZxEwqSx8uVlXyDJHuEqC%2BFd&X-Amz-Signature=495ff70b82d019ffcd2105e67804eeda04d2a5536688ce18e33040bd7bdf5e48&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
