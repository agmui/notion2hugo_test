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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCBUO2QL%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T070823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIBl2ucu8ZhQ%2FPnmrvnDWfQ43EhbAKBbM%2BskIbWuO%2BCWIAiAUISG8c3VNgDZeziI035KlbYuiXL2ASF5161EtdmypQyqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIih4ugvAXgB3gKBhKtwDaX%2FbuS9oKzGL0ayM9PTzCtEMn0NYOt76cZPr1cM2kzkQgLdzUx5Actj5F8Nd5PvinLNbdDFKdMjGKWpYPIsk3rY1Kylv8JK4DYoGU%2BmflI9ZMQHE%2F%2FBX9961dj%2B%2FXZk%2F8Bszwy7I5vgzJK4NrbBHMngWIKSgT%2BNysfFRl41cS14grE7DdwNdfNBEopMYk1Qf9W2Vc5v5ztzkjacXHlIBRmqwqThoG8UN5vx9NlnBU61H9h4kMl4WZz2QNoqWp23pkk0OQyLWmIBC%2Bri51HqrranUjnUEdsdWPdhzY6g4pbNCpxoZ7EbnlWJhnDzsng0qiOVxlZZ3oQK%2BqgI%2F2Rmqs1ZvjlXuH1U9sgzQG5CCVlfRHgC8LiSNJC5lGrVvR8dLalu56AUYYMhvpNXyiwPU9v7gTwPotRlCnzpgAiObKqYwFxwO0OYgzSdkJP2uydlHeHDyQ2mZxzlt3%2BLBey21a3dJuFI7LFJQ52FRGzdaYu8HvCSpgvXshhWg4PYkdF%2B6%2Fuil5NIr%2FejIaH0T96dWsGoW836nQH%2B7OBDFIQIyGOa8nh91LUktmu5BsNateiLEMvb2PDtOEWCsDSHp%2FFu%2F87H8kYFZFiPJrsB6NZpdA%2FjKhwDSp3wFEk%2BTIgUwqNvEvgY6pgGaZFTgbLB3ITP8tAWj%2BVcpQyBNPc7AfhWdkSbkNd5ePW%2Bg4j2q%2F8zqgRj4vOiLO%2FxLRnuP0fzG%2B4qsyjU21sDYC8tbb8ZFI79Vc0HGsw%2F1jvfqjd6eNJK8Y2xUFqjgPAv5OYq5sxTG2jPkwTSx4oJACVFFUlKQ2oP%2BfS76a0o%2BOHBi6G9agjSa%2F3jo3BOA%2FM6NuE8fu%2B5OBo7iQHx4V621HWRvOOh%2B&X-Amz-Signature=5acdb3b84b76c637276022644f5ab6d308f2485e167a99e9daded8b059fe56f3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCBUO2QL%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T070824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIBl2ucu8ZhQ%2FPnmrvnDWfQ43EhbAKBbM%2BskIbWuO%2BCWIAiAUISG8c3VNgDZeziI035KlbYuiXL2ASF5161EtdmypQyqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIih4ugvAXgB3gKBhKtwDaX%2FbuS9oKzGL0ayM9PTzCtEMn0NYOt76cZPr1cM2kzkQgLdzUx5Actj5F8Nd5PvinLNbdDFKdMjGKWpYPIsk3rY1Kylv8JK4DYoGU%2BmflI9ZMQHE%2F%2FBX9961dj%2B%2FXZk%2F8Bszwy7I5vgzJK4NrbBHMngWIKSgT%2BNysfFRl41cS14grE7DdwNdfNBEopMYk1Qf9W2Vc5v5ztzkjacXHlIBRmqwqThoG8UN5vx9NlnBU61H9h4kMl4WZz2QNoqWp23pkk0OQyLWmIBC%2Bri51HqrranUjnUEdsdWPdhzY6g4pbNCpxoZ7EbnlWJhnDzsng0qiOVxlZZ3oQK%2BqgI%2F2Rmqs1ZvjlXuH1U9sgzQG5CCVlfRHgC8LiSNJC5lGrVvR8dLalu56AUYYMhvpNXyiwPU9v7gTwPotRlCnzpgAiObKqYwFxwO0OYgzSdkJP2uydlHeHDyQ2mZxzlt3%2BLBey21a3dJuFI7LFJQ52FRGzdaYu8HvCSpgvXshhWg4PYkdF%2B6%2Fuil5NIr%2FejIaH0T96dWsGoW836nQH%2B7OBDFIQIyGOa8nh91LUktmu5BsNateiLEMvb2PDtOEWCsDSHp%2FFu%2F87H8kYFZFiPJrsB6NZpdA%2FjKhwDSp3wFEk%2BTIgUwqNvEvgY6pgGaZFTgbLB3ITP8tAWj%2BVcpQyBNPc7AfhWdkSbkNd5ePW%2Bg4j2q%2F8zqgRj4vOiLO%2FxLRnuP0fzG%2B4qsyjU21sDYC8tbb8ZFI79Vc0HGsw%2F1jvfqjd6eNJK8Y2xUFqjgPAv5OYq5sxTG2jPkwTSx4oJACVFFUlKQ2oP%2BfS76a0o%2BOHBi6G9agjSa%2F3jo3BOA%2FM6NuE8fu%2B5OBo7iQHx4V621HWRvOOh%2B&X-Amz-Signature=6de18a8426d8f7dbda484a3a38947afc60f7b35e37a31ff5fc231a9b913bba11&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCBUO2QL%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T070824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIBl2ucu8ZhQ%2FPnmrvnDWfQ43EhbAKBbM%2BskIbWuO%2BCWIAiAUISG8c3VNgDZeziI035KlbYuiXL2ASF5161EtdmypQyqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIih4ugvAXgB3gKBhKtwDaX%2FbuS9oKzGL0ayM9PTzCtEMn0NYOt76cZPr1cM2kzkQgLdzUx5Actj5F8Nd5PvinLNbdDFKdMjGKWpYPIsk3rY1Kylv8JK4DYoGU%2BmflI9ZMQHE%2F%2FBX9961dj%2B%2FXZk%2F8Bszwy7I5vgzJK4NrbBHMngWIKSgT%2BNysfFRl41cS14grE7DdwNdfNBEopMYk1Qf9W2Vc5v5ztzkjacXHlIBRmqwqThoG8UN5vx9NlnBU61H9h4kMl4WZz2QNoqWp23pkk0OQyLWmIBC%2Bri51HqrranUjnUEdsdWPdhzY6g4pbNCpxoZ7EbnlWJhnDzsng0qiOVxlZZ3oQK%2BqgI%2F2Rmqs1ZvjlXuH1U9sgzQG5CCVlfRHgC8LiSNJC5lGrVvR8dLalu56AUYYMhvpNXyiwPU9v7gTwPotRlCnzpgAiObKqYwFxwO0OYgzSdkJP2uydlHeHDyQ2mZxzlt3%2BLBey21a3dJuFI7LFJQ52FRGzdaYu8HvCSpgvXshhWg4PYkdF%2B6%2Fuil5NIr%2FejIaH0T96dWsGoW836nQH%2B7OBDFIQIyGOa8nh91LUktmu5BsNateiLEMvb2PDtOEWCsDSHp%2FFu%2F87H8kYFZFiPJrsB6NZpdA%2FjKhwDSp3wFEk%2BTIgUwqNvEvgY6pgGaZFTgbLB3ITP8tAWj%2BVcpQyBNPc7AfhWdkSbkNd5ePW%2Bg4j2q%2F8zqgRj4vOiLO%2FxLRnuP0fzG%2B4qsyjU21sDYC8tbb8ZFI79Vc0HGsw%2F1jvfqjd6eNJK8Y2xUFqjgPAv5OYq5sxTG2jPkwTSx4oJACVFFUlKQ2oP%2BfS76a0o%2BOHBi6G9agjSa%2F3jo3BOA%2FM6NuE8fu%2B5OBo7iQHx4V621HWRvOOh%2B&X-Amz-Signature=526a14f57d7900b7d11bd1bcbea3e15ca2d147083453d663ef42f78f54a6bd75&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCBUO2QL%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T070824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIBl2ucu8ZhQ%2FPnmrvnDWfQ43EhbAKBbM%2BskIbWuO%2BCWIAiAUISG8c3VNgDZeziI035KlbYuiXL2ASF5161EtdmypQyqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIih4ugvAXgB3gKBhKtwDaX%2FbuS9oKzGL0ayM9PTzCtEMn0NYOt76cZPr1cM2kzkQgLdzUx5Actj5F8Nd5PvinLNbdDFKdMjGKWpYPIsk3rY1Kylv8JK4DYoGU%2BmflI9ZMQHE%2F%2FBX9961dj%2B%2FXZk%2F8Bszwy7I5vgzJK4NrbBHMngWIKSgT%2BNysfFRl41cS14grE7DdwNdfNBEopMYk1Qf9W2Vc5v5ztzkjacXHlIBRmqwqThoG8UN5vx9NlnBU61H9h4kMl4WZz2QNoqWp23pkk0OQyLWmIBC%2Bri51HqrranUjnUEdsdWPdhzY6g4pbNCpxoZ7EbnlWJhnDzsng0qiOVxlZZ3oQK%2BqgI%2F2Rmqs1ZvjlXuH1U9sgzQG5CCVlfRHgC8LiSNJC5lGrVvR8dLalu56AUYYMhvpNXyiwPU9v7gTwPotRlCnzpgAiObKqYwFxwO0OYgzSdkJP2uydlHeHDyQ2mZxzlt3%2BLBey21a3dJuFI7LFJQ52FRGzdaYu8HvCSpgvXshhWg4PYkdF%2B6%2Fuil5NIr%2FejIaH0T96dWsGoW836nQH%2B7OBDFIQIyGOa8nh91LUktmu5BsNateiLEMvb2PDtOEWCsDSHp%2FFu%2F87H8kYFZFiPJrsB6NZpdA%2FjKhwDSp3wFEk%2BTIgUwqNvEvgY6pgGaZFTgbLB3ITP8tAWj%2BVcpQyBNPc7AfhWdkSbkNd5ePW%2Bg4j2q%2F8zqgRj4vOiLO%2FxLRnuP0fzG%2B4qsyjU21sDYC8tbb8ZFI79Vc0HGsw%2F1jvfqjd6eNJK8Y2xUFqjgPAv5OYq5sxTG2jPkwTSx4oJACVFFUlKQ2oP%2BfS76a0o%2BOHBi6G9agjSa%2F3jo3BOA%2FM6NuE8fu%2B5OBo7iQHx4V621HWRvOOh%2B&X-Amz-Signature=4f70037e6fff7be3f750a48c2dfd37733012303f2e431a31c6765e9df49fa2ca&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCBUO2QL%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T070824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIBl2ucu8ZhQ%2FPnmrvnDWfQ43EhbAKBbM%2BskIbWuO%2BCWIAiAUISG8c3VNgDZeziI035KlbYuiXL2ASF5161EtdmypQyqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIih4ugvAXgB3gKBhKtwDaX%2FbuS9oKzGL0ayM9PTzCtEMn0NYOt76cZPr1cM2kzkQgLdzUx5Actj5F8Nd5PvinLNbdDFKdMjGKWpYPIsk3rY1Kylv8JK4DYoGU%2BmflI9ZMQHE%2F%2FBX9961dj%2B%2FXZk%2F8Bszwy7I5vgzJK4NrbBHMngWIKSgT%2BNysfFRl41cS14grE7DdwNdfNBEopMYk1Qf9W2Vc5v5ztzkjacXHlIBRmqwqThoG8UN5vx9NlnBU61H9h4kMl4WZz2QNoqWp23pkk0OQyLWmIBC%2Bri51HqrranUjnUEdsdWPdhzY6g4pbNCpxoZ7EbnlWJhnDzsng0qiOVxlZZ3oQK%2BqgI%2F2Rmqs1ZvjlXuH1U9sgzQG5CCVlfRHgC8LiSNJC5lGrVvR8dLalu56AUYYMhvpNXyiwPU9v7gTwPotRlCnzpgAiObKqYwFxwO0OYgzSdkJP2uydlHeHDyQ2mZxzlt3%2BLBey21a3dJuFI7LFJQ52FRGzdaYu8HvCSpgvXshhWg4PYkdF%2B6%2Fuil5NIr%2FejIaH0T96dWsGoW836nQH%2B7OBDFIQIyGOa8nh91LUktmu5BsNateiLEMvb2PDtOEWCsDSHp%2FFu%2F87H8kYFZFiPJrsB6NZpdA%2FjKhwDSp3wFEk%2BTIgUwqNvEvgY6pgGaZFTgbLB3ITP8tAWj%2BVcpQyBNPc7AfhWdkSbkNd5ePW%2Bg4j2q%2F8zqgRj4vOiLO%2FxLRnuP0fzG%2B4qsyjU21sDYC8tbb8ZFI79Vc0HGsw%2F1jvfqjd6eNJK8Y2xUFqjgPAv5OYq5sxTG2jPkwTSx4oJACVFFUlKQ2oP%2BfS76a0o%2BOHBi6G9agjSa%2F3jo3BOA%2FM6NuE8fu%2B5OBo7iQHx4V621HWRvOOh%2B&X-Amz-Signature=2861a5a8ce3fe1ee7f4b5864e034a42411f2575842a51155afd2ba487f324794&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCBUO2QL%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T070824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIBl2ucu8ZhQ%2FPnmrvnDWfQ43EhbAKBbM%2BskIbWuO%2BCWIAiAUISG8c3VNgDZeziI035KlbYuiXL2ASF5161EtdmypQyqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIih4ugvAXgB3gKBhKtwDaX%2FbuS9oKzGL0ayM9PTzCtEMn0NYOt76cZPr1cM2kzkQgLdzUx5Actj5F8Nd5PvinLNbdDFKdMjGKWpYPIsk3rY1Kylv8JK4DYoGU%2BmflI9ZMQHE%2F%2FBX9961dj%2B%2FXZk%2F8Bszwy7I5vgzJK4NrbBHMngWIKSgT%2BNysfFRl41cS14grE7DdwNdfNBEopMYk1Qf9W2Vc5v5ztzkjacXHlIBRmqwqThoG8UN5vx9NlnBU61H9h4kMl4WZz2QNoqWp23pkk0OQyLWmIBC%2Bri51HqrranUjnUEdsdWPdhzY6g4pbNCpxoZ7EbnlWJhnDzsng0qiOVxlZZ3oQK%2BqgI%2F2Rmqs1ZvjlXuH1U9sgzQG5CCVlfRHgC8LiSNJC5lGrVvR8dLalu56AUYYMhvpNXyiwPU9v7gTwPotRlCnzpgAiObKqYwFxwO0OYgzSdkJP2uydlHeHDyQ2mZxzlt3%2BLBey21a3dJuFI7LFJQ52FRGzdaYu8HvCSpgvXshhWg4PYkdF%2B6%2Fuil5NIr%2FejIaH0T96dWsGoW836nQH%2B7OBDFIQIyGOa8nh91LUktmu5BsNateiLEMvb2PDtOEWCsDSHp%2FFu%2F87H8kYFZFiPJrsB6NZpdA%2FjKhwDSp3wFEk%2BTIgUwqNvEvgY6pgGaZFTgbLB3ITP8tAWj%2BVcpQyBNPc7AfhWdkSbkNd5ePW%2Bg4j2q%2F8zqgRj4vOiLO%2FxLRnuP0fzG%2B4qsyjU21sDYC8tbb8ZFI79Vc0HGsw%2F1jvfqjd6eNJK8Y2xUFqjgPAv5OYq5sxTG2jPkwTSx4oJACVFFUlKQ2oP%2BfS76a0o%2BOHBi6G9agjSa%2F3jo3BOA%2FM6NuE8fu%2B5OBo7iQHx4V621HWRvOOh%2B&X-Amz-Signature=c4fc5fa0cea5fd31792768b16b56873ec0b109438d2031c21853a30d9f216084&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCBUO2QL%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T070824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIBl2ucu8ZhQ%2FPnmrvnDWfQ43EhbAKBbM%2BskIbWuO%2BCWIAiAUISG8c3VNgDZeziI035KlbYuiXL2ASF5161EtdmypQyqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIih4ugvAXgB3gKBhKtwDaX%2FbuS9oKzGL0ayM9PTzCtEMn0NYOt76cZPr1cM2kzkQgLdzUx5Actj5F8Nd5PvinLNbdDFKdMjGKWpYPIsk3rY1Kylv8JK4DYoGU%2BmflI9ZMQHE%2F%2FBX9961dj%2B%2FXZk%2F8Bszwy7I5vgzJK4NrbBHMngWIKSgT%2BNysfFRl41cS14grE7DdwNdfNBEopMYk1Qf9W2Vc5v5ztzkjacXHlIBRmqwqThoG8UN5vx9NlnBU61H9h4kMl4WZz2QNoqWp23pkk0OQyLWmIBC%2Bri51HqrranUjnUEdsdWPdhzY6g4pbNCpxoZ7EbnlWJhnDzsng0qiOVxlZZ3oQK%2BqgI%2F2Rmqs1ZvjlXuH1U9sgzQG5CCVlfRHgC8LiSNJC5lGrVvR8dLalu56AUYYMhvpNXyiwPU9v7gTwPotRlCnzpgAiObKqYwFxwO0OYgzSdkJP2uydlHeHDyQ2mZxzlt3%2BLBey21a3dJuFI7LFJQ52FRGzdaYu8HvCSpgvXshhWg4PYkdF%2B6%2Fuil5NIr%2FejIaH0T96dWsGoW836nQH%2B7OBDFIQIyGOa8nh91LUktmu5BsNateiLEMvb2PDtOEWCsDSHp%2FFu%2F87H8kYFZFiPJrsB6NZpdA%2FjKhwDSp3wFEk%2BTIgUwqNvEvgY6pgGaZFTgbLB3ITP8tAWj%2BVcpQyBNPc7AfhWdkSbkNd5ePW%2Bg4j2q%2F8zqgRj4vOiLO%2FxLRnuP0fzG%2B4qsyjU21sDYC8tbb8ZFI79Vc0HGsw%2F1jvfqjd6eNJK8Y2xUFqjgPAv5OYq5sxTG2jPkwTSx4oJACVFFUlKQ2oP%2BfS76a0o%2BOHBi6G9agjSa%2F3jo3BOA%2FM6NuE8fu%2B5OBo7iQHx4V621HWRvOOh%2B&X-Amz-Signature=040c4c71e5ca4e86b27c4f5ebdeafdd1c6bec2b8d0412f18cbcb7d1820e9e465&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
