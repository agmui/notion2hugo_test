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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C5RWBPW%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T032246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdSTHbBj9fVc8E3tQKA50fV%2Bim6Ab%2FBYWwE%2BjJt8Dm6AiAqS432h%2Fz6WivlfgsNILwu3e1cQiITz%2Bu3Ym9Hzq7HOSr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMBt2xVEv9VLeRhCy7KtwD%2BG9u%2FpcTt7PEe47AnF93mT20CIRsfnCwr86aLStaiQJ8KR%2FI%2FNiTCMlW5oVBla3JWlzzB4xa8XaBo%2Fj9t2E9jMXdPFjBRVrghbx8dzQSu6UBbsAP01QPWgYE1Yn69jU9QglvmvRak%2B3Nt1bEWVbdJXKhtkM61p9ICXQX1dnCvjH0O2mTkuFjr%2BYq%2F2q0myYww07t1oJHvwT0HXEO0hgPQeKBuUofAVon8Wov7EMpXz047%2FhAc9xHnDUjGG4D2osrPv%2Bu7uvMMmIPgUlefsLbj4N8XVLB1kzQAB8j9yTJ09I3w%2Bj8EXQCLeZYV6w68PXYWTrNmZMcCEzGWiRV1jEfXh%2BQzB86IYyZ%2B4v%2BG1RCxAsxOHPqv9cR95mIT7ruTvZD1icdVmyfdLC20LTKVk8KPzrK6jqm69Wk7cc6xhpEJHSKQMTrZHxQSh%2BBjCwkniRUJ%2BwHyQWy6ii8ujsKR%2FSzDvijtSbZ2hih%2FOPJYdiFRo2prDy9y3QcAkN5g%2FCx%2FIOOGuj8YJX8QAIU0tK%2BboP9jcb1qHPuKefR3rQshFjdeRsJcbgGdYxJjI0zqX%2FU%2FMEsbnrT55qpWAM0GCQ2j%2Fic%2Ff2MyeR3C1HmKYcz9oZdTA3QDDAXOeiUdzLQxuUwurzCvwY6pgH8ey9Or%2B3g9bY281Ij%2F%2Fgd%2Bu91XUqcUReSPoixToYM2wNhxUYfjAvh44%2BDoWRzMNdLJOMGL4qRUmO9o1e47Fignt%2F%2FBO5ot9%2Fvv61TWu3sIElXqATR7nyUzCewoRqbGlzoNL%2BDeh%2B9zLuJc2N2C7udeXth0pVvPItTIZIcUTWt0MaN8Lw2UDzG%2BjPUeum%2BfNQ2xba4R4ku2D%2F20v%2BHThJ7MI36nRO1&X-Amz-Signature=fa844ba915921da7b66aba63b78280b15113c451cd65ff0236dd17f79ecb9546&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C5RWBPW%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T032246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdSTHbBj9fVc8E3tQKA50fV%2Bim6Ab%2FBYWwE%2BjJt8Dm6AiAqS432h%2Fz6WivlfgsNILwu3e1cQiITz%2Bu3Ym9Hzq7HOSr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMBt2xVEv9VLeRhCy7KtwD%2BG9u%2FpcTt7PEe47AnF93mT20CIRsfnCwr86aLStaiQJ8KR%2FI%2FNiTCMlW5oVBla3JWlzzB4xa8XaBo%2Fj9t2E9jMXdPFjBRVrghbx8dzQSu6UBbsAP01QPWgYE1Yn69jU9QglvmvRak%2B3Nt1bEWVbdJXKhtkM61p9ICXQX1dnCvjH0O2mTkuFjr%2BYq%2F2q0myYww07t1oJHvwT0HXEO0hgPQeKBuUofAVon8Wov7EMpXz047%2FhAc9xHnDUjGG4D2osrPv%2Bu7uvMMmIPgUlefsLbj4N8XVLB1kzQAB8j9yTJ09I3w%2Bj8EXQCLeZYV6w68PXYWTrNmZMcCEzGWiRV1jEfXh%2BQzB86IYyZ%2B4v%2BG1RCxAsxOHPqv9cR95mIT7ruTvZD1icdVmyfdLC20LTKVk8KPzrK6jqm69Wk7cc6xhpEJHSKQMTrZHxQSh%2BBjCwkniRUJ%2BwHyQWy6ii8ujsKR%2FSzDvijtSbZ2hih%2FOPJYdiFRo2prDy9y3QcAkN5g%2FCx%2FIOOGuj8YJX8QAIU0tK%2BboP9jcb1qHPuKefR3rQshFjdeRsJcbgGdYxJjI0zqX%2FU%2FMEsbnrT55qpWAM0GCQ2j%2Fic%2Ff2MyeR3C1HmKYcz9oZdTA3QDDAXOeiUdzLQxuUwurzCvwY6pgH8ey9Or%2B3g9bY281Ij%2F%2Fgd%2Bu91XUqcUReSPoixToYM2wNhxUYfjAvh44%2BDoWRzMNdLJOMGL4qRUmO9o1e47Fignt%2F%2FBO5ot9%2Fvv61TWu3sIElXqATR7nyUzCewoRqbGlzoNL%2BDeh%2B9zLuJc2N2C7udeXth0pVvPItTIZIcUTWt0MaN8Lw2UDzG%2BjPUeum%2BfNQ2xba4R4ku2D%2F20v%2BHThJ7MI36nRO1&X-Amz-Signature=6feb3d97ed874d3e6d4e2673c22da4466fcac147d5d4075057aaae0fa30088a4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C5RWBPW%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T032246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdSTHbBj9fVc8E3tQKA50fV%2Bim6Ab%2FBYWwE%2BjJt8Dm6AiAqS432h%2Fz6WivlfgsNILwu3e1cQiITz%2Bu3Ym9Hzq7HOSr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMBt2xVEv9VLeRhCy7KtwD%2BG9u%2FpcTt7PEe47AnF93mT20CIRsfnCwr86aLStaiQJ8KR%2FI%2FNiTCMlW5oVBla3JWlzzB4xa8XaBo%2Fj9t2E9jMXdPFjBRVrghbx8dzQSu6UBbsAP01QPWgYE1Yn69jU9QglvmvRak%2B3Nt1bEWVbdJXKhtkM61p9ICXQX1dnCvjH0O2mTkuFjr%2BYq%2F2q0myYww07t1oJHvwT0HXEO0hgPQeKBuUofAVon8Wov7EMpXz047%2FhAc9xHnDUjGG4D2osrPv%2Bu7uvMMmIPgUlefsLbj4N8XVLB1kzQAB8j9yTJ09I3w%2Bj8EXQCLeZYV6w68PXYWTrNmZMcCEzGWiRV1jEfXh%2BQzB86IYyZ%2B4v%2BG1RCxAsxOHPqv9cR95mIT7ruTvZD1icdVmyfdLC20LTKVk8KPzrK6jqm69Wk7cc6xhpEJHSKQMTrZHxQSh%2BBjCwkniRUJ%2BwHyQWy6ii8ujsKR%2FSzDvijtSbZ2hih%2FOPJYdiFRo2prDy9y3QcAkN5g%2FCx%2FIOOGuj8YJX8QAIU0tK%2BboP9jcb1qHPuKefR3rQshFjdeRsJcbgGdYxJjI0zqX%2FU%2FMEsbnrT55qpWAM0GCQ2j%2Fic%2Ff2MyeR3C1HmKYcz9oZdTA3QDDAXOeiUdzLQxuUwurzCvwY6pgH8ey9Or%2B3g9bY281Ij%2F%2Fgd%2Bu91XUqcUReSPoixToYM2wNhxUYfjAvh44%2BDoWRzMNdLJOMGL4qRUmO9o1e47Fignt%2F%2FBO5ot9%2Fvv61TWu3sIElXqATR7nyUzCewoRqbGlzoNL%2BDeh%2B9zLuJc2N2C7udeXth0pVvPItTIZIcUTWt0MaN8Lw2UDzG%2BjPUeum%2BfNQ2xba4R4ku2D%2F20v%2BHThJ7MI36nRO1&X-Amz-Signature=a2c558933a6c8bb711faf8a18a92a46f6c606344e9ab77ba339b1fee9b8d9abc&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C5RWBPW%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T032246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdSTHbBj9fVc8E3tQKA50fV%2Bim6Ab%2FBYWwE%2BjJt8Dm6AiAqS432h%2Fz6WivlfgsNILwu3e1cQiITz%2Bu3Ym9Hzq7HOSr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMBt2xVEv9VLeRhCy7KtwD%2BG9u%2FpcTt7PEe47AnF93mT20CIRsfnCwr86aLStaiQJ8KR%2FI%2FNiTCMlW5oVBla3JWlzzB4xa8XaBo%2Fj9t2E9jMXdPFjBRVrghbx8dzQSu6UBbsAP01QPWgYE1Yn69jU9QglvmvRak%2B3Nt1bEWVbdJXKhtkM61p9ICXQX1dnCvjH0O2mTkuFjr%2BYq%2F2q0myYww07t1oJHvwT0HXEO0hgPQeKBuUofAVon8Wov7EMpXz047%2FhAc9xHnDUjGG4D2osrPv%2Bu7uvMMmIPgUlefsLbj4N8XVLB1kzQAB8j9yTJ09I3w%2Bj8EXQCLeZYV6w68PXYWTrNmZMcCEzGWiRV1jEfXh%2BQzB86IYyZ%2B4v%2BG1RCxAsxOHPqv9cR95mIT7ruTvZD1icdVmyfdLC20LTKVk8KPzrK6jqm69Wk7cc6xhpEJHSKQMTrZHxQSh%2BBjCwkniRUJ%2BwHyQWy6ii8ujsKR%2FSzDvijtSbZ2hih%2FOPJYdiFRo2prDy9y3QcAkN5g%2FCx%2FIOOGuj8YJX8QAIU0tK%2BboP9jcb1qHPuKefR3rQshFjdeRsJcbgGdYxJjI0zqX%2FU%2FMEsbnrT55qpWAM0GCQ2j%2Fic%2Ff2MyeR3C1HmKYcz9oZdTA3QDDAXOeiUdzLQxuUwurzCvwY6pgH8ey9Or%2B3g9bY281Ij%2F%2Fgd%2Bu91XUqcUReSPoixToYM2wNhxUYfjAvh44%2BDoWRzMNdLJOMGL4qRUmO9o1e47Fignt%2F%2FBO5ot9%2Fvv61TWu3sIElXqATR7nyUzCewoRqbGlzoNL%2BDeh%2B9zLuJc2N2C7udeXth0pVvPItTIZIcUTWt0MaN8Lw2UDzG%2BjPUeum%2BfNQ2xba4R4ku2D%2F20v%2BHThJ7MI36nRO1&X-Amz-Signature=f5688a1be553aacfffb3a571a419e5bff23ab1b4189d2b92a8abd6895c0a4f78&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C5RWBPW%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T032246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdSTHbBj9fVc8E3tQKA50fV%2Bim6Ab%2FBYWwE%2BjJt8Dm6AiAqS432h%2Fz6WivlfgsNILwu3e1cQiITz%2Bu3Ym9Hzq7HOSr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMBt2xVEv9VLeRhCy7KtwD%2BG9u%2FpcTt7PEe47AnF93mT20CIRsfnCwr86aLStaiQJ8KR%2FI%2FNiTCMlW5oVBla3JWlzzB4xa8XaBo%2Fj9t2E9jMXdPFjBRVrghbx8dzQSu6UBbsAP01QPWgYE1Yn69jU9QglvmvRak%2B3Nt1bEWVbdJXKhtkM61p9ICXQX1dnCvjH0O2mTkuFjr%2BYq%2F2q0myYww07t1oJHvwT0HXEO0hgPQeKBuUofAVon8Wov7EMpXz047%2FhAc9xHnDUjGG4D2osrPv%2Bu7uvMMmIPgUlefsLbj4N8XVLB1kzQAB8j9yTJ09I3w%2Bj8EXQCLeZYV6w68PXYWTrNmZMcCEzGWiRV1jEfXh%2BQzB86IYyZ%2B4v%2BG1RCxAsxOHPqv9cR95mIT7ruTvZD1icdVmyfdLC20LTKVk8KPzrK6jqm69Wk7cc6xhpEJHSKQMTrZHxQSh%2BBjCwkniRUJ%2BwHyQWy6ii8ujsKR%2FSzDvijtSbZ2hih%2FOPJYdiFRo2prDy9y3QcAkN5g%2FCx%2FIOOGuj8YJX8QAIU0tK%2BboP9jcb1qHPuKefR3rQshFjdeRsJcbgGdYxJjI0zqX%2FU%2FMEsbnrT55qpWAM0GCQ2j%2Fic%2Ff2MyeR3C1HmKYcz9oZdTA3QDDAXOeiUdzLQxuUwurzCvwY6pgH8ey9Or%2B3g9bY281Ij%2F%2Fgd%2Bu91XUqcUReSPoixToYM2wNhxUYfjAvh44%2BDoWRzMNdLJOMGL4qRUmO9o1e47Fignt%2F%2FBO5ot9%2Fvv61TWu3sIElXqATR7nyUzCewoRqbGlzoNL%2BDeh%2B9zLuJc2N2C7udeXth0pVvPItTIZIcUTWt0MaN8Lw2UDzG%2BjPUeum%2BfNQ2xba4R4ku2D%2F20v%2BHThJ7MI36nRO1&X-Amz-Signature=193ada2b7759313919f43de665f07c94a2b62cea789376f228874f073faf8027&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C5RWBPW%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T032246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdSTHbBj9fVc8E3tQKA50fV%2Bim6Ab%2FBYWwE%2BjJt8Dm6AiAqS432h%2Fz6WivlfgsNILwu3e1cQiITz%2Bu3Ym9Hzq7HOSr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMBt2xVEv9VLeRhCy7KtwD%2BG9u%2FpcTt7PEe47AnF93mT20CIRsfnCwr86aLStaiQJ8KR%2FI%2FNiTCMlW5oVBla3JWlzzB4xa8XaBo%2Fj9t2E9jMXdPFjBRVrghbx8dzQSu6UBbsAP01QPWgYE1Yn69jU9QglvmvRak%2B3Nt1bEWVbdJXKhtkM61p9ICXQX1dnCvjH0O2mTkuFjr%2BYq%2F2q0myYww07t1oJHvwT0HXEO0hgPQeKBuUofAVon8Wov7EMpXz047%2FhAc9xHnDUjGG4D2osrPv%2Bu7uvMMmIPgUlefsLbj4N8XVLB1kzQAB8j9yTJ09I3w%2Bj8EXQCLeZYV6w68PXYWTrNmZMcCEzGWiRV1jEfXh%2BQzB86IYyZ%2B4v%2BG1RCxAsxOHPqv9cR95mIT7ruTvZD1icdVmyfdLC20LTKVk8KPzrK6jqm69Wk7cc6xhpEJHSKQMTrZHxQSh%2BBjCwkniRUJ%2BwHyQWy6ii8ujsKR%2FSzDvijtSbZ2hih%2FOPJYdiFRo2prDy9y3QcAkN5g%2FCx%2FIOOGuj8YJX8QAIU0tK%2BboP9jcb1qHPuKefR3rQshFjdeRsJcbgGdYxJjI0zqX%2FU%2FMEsbnrT55qpWAM0GCQ2j%2Fic%2Ff2MyeR3C1HmKYcz9oZdTA3QDDAXOeiUdzLQxuUwurzCvwY6pgH8ey9Or%2B3g9bY281Ij%2F%2Fgd%2Bu91XUqcUReSPoixToYM2wNhxUYfjAvh44%2BDoWRzMNdLJOMGL4qRUmO9o1e47Fignt%2F%2FBO5ot9%2Fvv61TWu3sIElXqATR7nyUzCewoRqbGlzoNL%2BDeh%2B9zLuJc2N2C7udeXth0pVvPItTIZIcUTWt0MaN8Lw2UDzG%2BjPUeum%2BfNQ2xba4R4ku2D%2F20v%2BHThJ7MI36nRO1&X-Amz-Signature=fdc777548c76466af0d716bea86cc51ab913c6a3f8a88ca2b01a70d2c1be2124&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C5RWBPW%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T032246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdSTHbBj9fVc8E3tQKA50fV%2Bim6Ab%2FBYWwE%2BjJt8Dm6AiAqS432h%2Fz6WivlfgsNILwu3e1cQiITz%2Bu3Ym9Hzq7HOSr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMBt2xVEv9VLeRhCy7KtwD%2BG9u%2FpcTt7PEe47AnF93mT20CIRsfnCwr86aLStaiQJ8KR%2FI%2FNiTCMlW5oVBla3JWlzzB4xa8XaBo%2Fj9t2E9jMXdPFjBRVrghbx8dzQSu6UBbsAP01QPWgYE1Yn69jU9QglvmvRak%2B3Nt1bEWVbdJXKhtkM61p9ICXQX1dnCvjH0O2mTkuFjr%2BYq%2F2q0myYww07t1oJHvwT0HXEO0hgPQeKBuUofAVon8Wov7EMpXz047%2FhAc9xHnDUjGG4D2osrPv%2Bu7uvMMmIPgUlefsLbj4N8XVLB1kzQAB8j9yTJ09I3w%2Bj8EXQCLeZYV6w68PXYWTrNmZMcCEzGWiRV1jEfXh%2BQzB86IYyZ%2B4v%2BG1RCxAsxOHPqv9cR95mIT7ruTvZD1icdVmyfdLC20LTKVk8KPzrK6jqm69Wk7cc6xhpEJHSKQMTrZHxQSh%2BBjCwkniRUJ%2BwHyQWy6ii8ujsKR%2FSzDvijtSbZ2hih%2FOPJYdiFRo2prDy9y3QcAkN5g%2FCx%2FIOOGuj8YJX8QAIU0tK%2BboP9jcb1qHPuKefR3rQshFjdeRsJcbgGdYxJjI0zqX%2FU%2FMEsbnrT55qpWAM0GCQ2j%2Fic%2Ff2MyeR3C1HmKYcz9oZdTA3QDDAXOeiUdzLQxuUwurzCvwY6pgH8ey9Or%2B3g9bY281Ij%2F%2Fgd%2Bu91XUqcUReSPoixToYM2wNhxUYfjAvh44%2BDoWRzMNdLJOMGL4qRUmO9o1e47Fignt%2F%2FBO5ot9%2Fvv61TWu3sIElXqATR7nyUzCewoRqbGlzoNL%2BDeh%2B9zLuJc2N2C7udeXth0pVvPItTIZIcUTWt0MaN8Lw2UDzG%2BjPUeum%2BfNQ2xba4R4ku2D%2F20v%2BHThJ7MI36nRO1&X-Amz-Signature=4183922913694a96368b7125fe6064946a7e03e6592dea71c1effbe1289def6e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
