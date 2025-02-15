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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAIF6ULB%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T140205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIHhuYgdJXS7Jvjbsk2SanCRf%2FLprmKSSGr74Gzmnqs2GAiASQP7kdOvKx4PadMr0eT16lAqpnibhbo322GDJcf7h6ir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMQXEGKaav2J8KpMJfKtwDlia5rWkLMBokTPqHfgbvxLJsHqkTuzjFzP6iguEGTwJ4cROnh6n2PDmxN%2BRvn8i8vmR14YdZco11eJW0Rlhe7wCwSkYpAQaw60Sf93AapoXajqfW9w8e%2FwXumJfr3PVcZ8xnqWd77BuoGBrsp6yo06p6KG5HEdeoz472ZtbnyHigqbov3jB9MmtKEFqXQmjp38Zr2FBWGvcIO7L9Y4hE%2BoEC7vn19JIJPsanlN%2FevMSp5LQj8Ef4wK%2B3VeCHXdcJXW0UVR9Cf%2B3XVEkEyPU9R1FrDiM6tZIDJ9ZNyNncP9hxFCzYbbvEHbptJK%2FhInRIFdtHrOqhcsWC7gXDM89gcOeJ3deLBV%2F6iELKwXohegKvIiU5OcFT8m5cgL3tc8cK5LsHLL5eU3u1RcQuhSYhgVkUSrf%2BgJ7S5xEO1qGGL6D8pG86pSq2UzlkwOmFQpgXE0F3jqR%2Fe3zPHW%2BC38M5ZIB3AEyz12grA0qMa65V1tIkmJcLPUrCyY5yf92yepuX0XgIpWNJMkLstGj2pgV6QXMzf%2FRK4op%2BpkO9w5MgdxJ1LA0jRApEqTCf1h1UTPoIT7uqpN1l7qd6hvs2hw978iVVoPYbZc1KoU8GAHhwUR1OR%2BEt5WD1S0gqXtUw4uzBvQY6pgGjvWg4hg8XEvym9BCA4ehrvlYrkLzMFTmmx0hxreQJGAOa%2Ba7uaUgTYDjnHrroJao609vsB3mc5ZNX7kB9DKc7wTjiysPtev086HW2UzDCptYPt7nFrd92wBcwoE3Bv4lSEjahdnnnYdg68HtKsbXE6ZFFMEiyWNCcSz4eKqZsPCKpExNQP9Ljg%2FUDqSgPeL3AVkQPyLgQjk70GWmE8WqrdXbZnqfJ&X-Amz-Signature=b3298c23c08bd07106931c5d94813f6e079bdad91f3b31f037d22620d056d4b9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAIF6ULB%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T140205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIHhuYgdJXS7Jvjbsk2SanCRf%2FLprmKSSGr74Gzmnqs2GAiASQP7kdOvKx4PadMr0eT16lAqpnibhbo322GDJcf7h6ir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMQXEGKaav2J8KpMJfKtwDlia5rWkLMBokTPqHfgbvxLJsHqkTuzjFzP6iguEGTwJ4cROnh6n2PDmxN%2BRvn8i8vmR14YdZco11eJW0Rlhe7wCwSkYpAQaw60Sf93AapoXajqfW9w8e%2FwXumJfr3PVcZ8xnqWd77BuoGBrsp6yo06p6KG5HEdeoz472ZtbnyHigqbov3jB9MmtKEFqXQmjp38Zr2FBWGvcIO7L9Y4hE%2BoEC7vn19JIJPsanlN%2FevMSp5LQj8Ef4wK%2B3VeCHXdcJXW0UVR9Cf%2B3XVEkEyPU9R1FrDiM6tZIDJ9ZNyNncP9hxFCzYbbvEHbptJK%2FhInRIFdtHrOqhcsWC7gXDM89gcOeJ3deLBV%2F6iELKwXohegKvIiU5OcFT8m5cgL3tc8cK5LsHLL5eU3u1RcQuhSYhgVkUSrf%2BgJ7S5xEO1qGGL6D8pG86pSq2UzlkwOmFQpgXE0F3jqR%2Fe3zPHW%2BC38M5ZIB3AEyz12grA0qMa65V1tIkmJcLPUrCyY5yf92yepuX0XgIpWNJMkLstGj2pgV6QXMzf%2FRK4op%2BpkO9w5MgdxJ1LA0jRApEqTCf1h1UTPoIT7uqpN1l7qd6hvs2hw978iVVoPYbZc1KoU8GAHhwUR1OR%2BEt5WD1S0gqXtUw4uzBvQY6pgGjvWg4hg8XEvym9BCA4ehrvlYrkLzMFTmmx0hxreQJGAOa%2Ba7uaUgTYDjnHrroJao609vsB3mc5ZNX7kB9DKc7wTjiysPtev086HW2UzDCptYPt7nFrd92wBcwoE3Bv4lSEjahdnnnYdg68HtKsbXE6ZFFMEiyWNCcSz4eKqZsPCKpExNQP9Ljg%2FUDqSgPeL3AVkQPyLgQjk70GWmE8WqrdXbZnqfJ&X-Amz-Signature=6774a7287c29c0f748a355a37c3b1565e24bf48a5ec68d48d3e793a4f705b3c5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAIF6ULB%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T140205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIHhuYgdJXS7Jvjbsk2SanCRf%2FLprmKSSGr74Gzmnqs2GAiASQP7kdOvKx4PadMr0eT16lAqpnibhbo322GDJcf7h6ir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMQXEGKaav2J8KpMJfKtwDlia5rWkLMBokTPqHfgbvxLJsHqkTuzjFzP6iguEGTwJ4cROnh6n2PDmxN%2BRvn8i8vmR14YdZco11eJW0Rlhe7wCwSkYpAQaw60Sf93AapoXajqfW9w8e%2FwXumJfr3PVcZ8xnqWd77BuoGBrsp6yo06p6KG5HEdeoz472ZtbnyHigqbov3jB9MmtKEFqXQmjp38Zr2FBWGvcIO7L9Y4hE%2BoEC7vn19JIJPsanlN%2FevMSp5LQj8Ef4wK%2B3VeCHXdcJXW0UVR9Cf%2B3XVEkEyPU9R1FrDiM6tZIDJ9ZNyNncP9hxFCzYbbvEHbptJK%2FhInRIFdtHrOqhcsWC7gXDM89gcOeJ3deLBV%2F6iELKwXohegKvIiU5OcFT8m5cgL3tc8cK5LsHLL5eU3u1RcQuhSYhgVkUSrf%2BgJ7S5xEO1qGGL6D8pG86pSq2UzlkwOmFQpgXE0F3jqR%2Fe3zPHW%2BC38M5ZIB3AEyz12grA0qMa65V1tIkmJcLPUrCyY5yf92yepuX0XgIpWNJMkLstGj2pgV6QXMzf%2FRK4op%2BpkO9w5MgdxJ1LA0jRApEqTCf1h1UTPoIT7uqpN1l7qd6hvs2hw978iVVoPYbZc1KoU8GAHhwUR1OR%2BEt5WD1S0gqXtUw4uzBvQY6pgGjvWg4hg8XEvym9BCA4ehrvlYrkLzMFTmmx0hxreQJGAOa%2Ba7uaUgTYDjnHrroJao609vsB3mc5ZNX7kB9DKc7wTjiysPtev086HW2UzDCptYPt7nFrd92wBcwoE3Bv4lSEjahdnnnYdg68HtKsbXE6ZFFMEiyWNCcSz4eKqZsPCKpExNQP9Ljg%2FUDqSgPeL3AVkQPyLgQjk70GWmE8WqrdXbZnqfJ&X-Amz-Signature=07b3485ef258ba4fe4c2b4b87da88720c9526879f5ba77bcbfc5e8aded52cd64&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAIF6ULB%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T140205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIHhuYgdJXS7Jvjbsk2SanCRf%2FLprmKSSGr74Gzmnqs2GAiASQP7kdOvKx4PadMr0eT16lAqpnibhbo322GDJcf7h6ir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMQXEGKaav2J8KpMJfKtwDlia5rWkLMBokTPqHfgbvxLJsHqkTuzjFzP6iguEGTwJ4cROnh6n2PDmxN%2BRvn8i8vmR14YdZco11eJW0Rlhe7wCwSkYpAQaw60Sf93AapoXajqfW9w8e%2FwXumJfr3PVcZ8xnqWd77BuoGBrsp6yo06p6KG5HEdeoz472ZtbnyHigqbov3jB9MmtKEFqXQmjp38Zr2FBWGvcIO7L9Y4hE%2BoEC7vn19JIJPsanlN%2FevMSp5LQj8Ef4wK%2B3VeCHXdcJXW0UVR9Cf%2B3XVEkEyPU9R1FrDiM6tZIDJ9ZNyNncP9hxFCzYbbvEHbptJK%2FhInRIFdtHrOqhcsWC7gXDM89gcOeJ3deLBV%2F6iELKwXohegKvIiU5OcFT8m5cgL3tc8cK5LsHLL5eU3u1RcQuhSYhgVkUSrf%2BgJ7S5xEO1qGGL6D8pG86pSq2UzlkwOmFQpgXE0F3jqR%2Fe3zPHW%2BC38M5ZIB3AEyz12grA0qMa65V1tIkmJcLPUrCyY5yf92yepuX0XgIpWNJMkLstGj2pgV6QXMzf%2FRK4op%2BpkO9w5MgdxJ1LA0jRApEqTCf1h1UTPoIT7uqpN1l7qd6hvs2hw978iVVoPYbZc1KoU8GAHhwUR1OR%2BEt5WD1S0gqXtUw4uzBvQY6pgGjvWg4hg8XEvym9BCA4ehrvlYrkLzMFTmmx0hxreQJGAOa%2Ba7uaUgTYDjnHrroJao609vsB3mc5ZNX7kB9DKc7wTjiysPtev086HW2UzDCptYPt7nFrd92wBcwoE3Bv4lSEjahdnnnYdg68HtKsbXE6ZFFMEiyWNCcSz4eKqZsPCKpExNQP9Ljg%2FUDqSgPeL3AVkQPyLgQjk70GWmE8WqrdXbZnqfJ&X-Amz-Signature=3f5aa1214dcfc58b4cd1ac94018240bb7dfb48dbf0273584a0963a45b5c2aa72&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAIF6ULB%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T140205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIHhuYgdJXS7Jvjbsk2SanCRf%2FLprmKSSGr74Gzmnqs2GAiASQP7kdOvKx4PadMr0eT16lAqpnibhbo322GDJcf7h6ir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMQXEGKaav2J8KpMJfKtwDlia5rWkLMBokTPqHfgbvxLJsHqkTuzjFzP6iguEGTwJ4cROnh6n2PDmxN%2BRvn8i8vmR14YdZco11eJW0Rlhe7wCwSkYpAQaw60Sf93AapoXajqfW9w8e%2FwXumJfr3PVcZ8xnqWd77BuoGBrsp6yo06p6KG5HEdeoz472ZtbnyHigqbov3jB9MmtKEFqXQmjp38Zr2FBWGvcIO7L9Y4hE%2BoEC7vn19JIJPsanlN%2FevMSp5LQj8Ef4wK%2B3VeCHXdcJXW0UVR9Cf%2B3XVEkEyPU9R1FrDiM6tZIDJ9ZNyNncP9hxFCzYbbvEHbptJK%2FhInRIFdtHrOqhcsWC7gXDM89gcOeJ3deLBV%2F6iELKwXohegKvIiU5OcFT8m5cgL3tc8cK5LsHLL5eU3u1RcQuhSYhgVkUSrf%2BgJ7S5xEO1qGGL6D8pG86pSq2UzlkwOmFQpgXE0F3jqR%2Fe3zPHW%2BC38M5ZIB3AEyz12grA0qMa65V1tIkmJcLPUrCyY5yf92yepuX0XgIpWNJMkLstGj2pgV6QXMzf%2FRK4op%2BpkO9w5MgdxJ1LA0jRApEqTCf1h1UTPoIT7uqpN1l7qd6hvs2hw978iVVoPYbZc1KoU8GAHhwUR1OR%2BEt5WD1S0gqXtUw4uzBvQY6pgGjvWg4hg8XEvym9BCA4ehrvlYrkLzMFTmmx0hxreQJGAOa%2Ba7uaUgTYDjnHrroJao609vsB3mc5ZNX7kB9DKc7wTjiysPtev086HW2UzDCptYPt7nFrd92wBcwoE3Bv4lSEjahdnnnYdg68HtKsbXE6ZFFMEiyWNCcSz4eKqZsPCKpExNQP9Ljg%2FUDqSgPeL3AVkQPyLgQjk70GWmE8WqrdXbZnqfJ&X-Amz-Signature=ec73280d45db2b57564c54c7a58622d8b03d1569d5c34727374a4e5ca4674ddc&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAIF6ULB%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T140205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIHhuYgdJXS7Jvjbsk2SanCRf%2FLprmKSSGr74Gzmnqs2GAiASQP7kdOvKx4PadMr0eT16lAqpnibhbo322GDJcf7h6ir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMQXEGKaav2J8KpMJfKtwDlia5rWkLMBokTPqHfgbvxLJsHqkTuzjFzP6iguEGTwJ4cROnh6n2PDmxN%2BRvn8i8vmR14YdZco11eJW0Rlhe7wCwSkYpAQaw60Sf93AapoXajqfW9w8e%2FwXumJfr3PVcZ8xnqWd77BuoGBrsp6yo06p6KG5HEdeoz472ZtbnyHigqbov3jB9MmtKEFqXQmjp38Zr2FBWGvcIO7L9Y4hE%2BoEC7vn19JIJPsanlN%2FevMSp5LQj8Ef4wK%2B3VeCHXdcJXW0UVR9Cf%2B3XVEkEyPU9R1FrDiM6tZIDJ9ZNyNncP9hxFCzYbbvEHbptJK%2FhInRIFdtHrOqhcsWC7gXDM89gcOeJ3deLBV%2F6iELKwXohegKvIiU5OcFT8m5cgL3tc8cK5LsHLL5eU3u1RcQuhSYhgVkUSrf%2BgJ7S5xEO1qGGL6D8pG86pSq2UzlkwOmFQpgXE0F3jqR%2Fe3zPHW%2BC38M5ZIB3AEyz12grA0qMa65V1tIkmJcLPUrCyY5yf92yepuX0XgIpWNJMkLstGj2pgV6QXMzf%2FRK4op%2BpkO9w5MgdxJ1LA0jRApEqTCf1h1UTPoIT7uqpN1l7qd6hvs2hw978iVVoPYbZc1KoU8GAHhwUR1OR%2BEt5WD1S0gqXtUw4uzBvQY6pgGjvWg4hg8XEvym9BCA4ehrvlYrkLzMFTmmx0hxreQJGAOa%2Ba7uaUgTYDjnHrroJao609vsB3mc5ZNX7kB9DKc7wTjiysPtev086HW2UzDCptYPt7nFrd92wBcwoE3Bv4lSEjahdnnnYdg68HtKsbXE6ZFFMEiyWNCcSz4eKqZsPCKpExNQP9Ljg%2FUDqSgPeL3AVkQPyLgQjk70GWmE8WqrdXbZnqfJ&X-Amz-Signature=66f3870b5fc192c4a76c79332c94bfda3cb8b0a16467ae042b0a1cdf2d17db0e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAIF6ULB%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T140205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIHhuYgdJXS7Jvjbsk2SanCRf%2FLprmKSSGr74Gzmnqs2GAiASQP7kdOvKx4PadMr0eT16lAqpnibhbo322GDJcf7h6ir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMQXEGKaav2J8KpMJfKtwDlia5rWkLMBokTPqHfgbvxLJsHqkTuzjFzP6iguEGTwJ4cROnh6n2PDmxN%2BRvn8i8vmR14YdZco11eJW0Rlhe7wCwSkYpAQaw60Sf93AapoXajqfW9w8e%2FwXumJfr3PVcZ8xnqWd77BuoGBrsp6yo06p6KG5HEdeoz472ZtbnyHigqbov3jB9MmtKEFqXQmjp38Zr2FBWGvcIO7L9Y4hE%2BoEC7vn19JIJPsanlN%2FevMSp5LQj8Ef4wK%2B3VeCHXdcJXW0UVR9Cf%2B3XVEkEyPU9R1FrDiM6tZIDJ9ZNyNncP9hxFCzYbbvEHbptJK%2FhInRIFdtHrOqhcsWC7gXDM89gcOeJ3deLBV%2F6iELKwXohegKvIiU5OcFT8m5cgL3tc8cK5LsHLL5eU3u1RcQuhSYhgVkUSrf%2BgJ7S5xEO1qGGL6D8pG86pSq2UzlkwOmFQpgXE0F3jqR%2Fe3zPHW%2BC38M5ZIB3AEyz12grA0qMa65V1tIkmJcLPUrCyY5yf92yepuX0XgIpWNJMkLstGj2pgV6QXMzf%2FRK4op%2BpkO9w5MgdxJ1LA0jRApEqTCf1h1UTPoIT7uqpN1l7qd6hvs2hw978iVVoPYbZc1KoU8GAHhwUR1OR%2BEt5WD1S0gqXtUw4uzBvQY6pgGjvWg4hg8XEvym9BCA4ehrvlYrkLzMFTmmx0hxreQJGAOa%2Ba7uaUgTYDjnHrroJao609vsB3mc5ZNX7kB9DKc7wTjiysPtev086HW2UzDCptYPt7nFrd92wBcwoE3Bv4lSEjahdnnnYdg68HtKsbXE6ZFFMEiyWNCcSz4eKqZsPCKpExNQP9Ljg%2FUDqSgPeL3AVkQPyLgQjk70GWmE8WqrdXbZnqfJ&X-Amz-Signature=a64b050e6131fe68d2cc48e60ec1ad0f34789aea00fbae10ccb5f53a65a5a794&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
