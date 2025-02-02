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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYOHHJVS%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T210223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJZJ5LDEKALGLSM3JviTE%2FOLe%2FQ5GE%2BLqrfFbGoYYqDAIhANCjzBxPRN6tP9f8X47JvEgk%2Fah4F6aRFkiZdHCEWB4UKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7xiKL5zGEIFEqs%2Bcq3AMpaDSK6mDbTOqH6qrC4dK2aIZIiP%2FcUijhM1l0dZCK8dfA9%2Be16gFRfVg0zfUlfNVNx%2B9H3YynZ%2F3pLYLf5e1aRLkEILhQZrB1BbPibwI1D%2B%2FeJ8p21Vf2QVgxAbjUV%2FN1PVgy6Wp55eRM62curYL63f%2BfUvXNkOS75aOvmrTSGAS5Lu5VhAtLu9HzZyExUA1bPdoNXIyTYUt%2BS0C%2FVrV77NKIS7ipNo8hr7a83Iec3sTDlaIXD7oOFt%2BdL4%2BZuHS9rGJybvqelWtWDVQwp9MNhYKxVkK7nXQj2Fj2QCAAtDEOogYb3P9Q3TlVo%2FL%2BGmzfea8ERce2RMSHuUjdpvThQAgVTVS1JyvX0pIvQ6H7djLzv%2FXPAW2kNOeWXMgKX1VVBDjO53dULYyzIfpM60I%2FGv0uxrzLmu7wzMEz6UoRSK24HdTwigAv%2BeItVNXzkBTzBWy%2Fv7CEcQQygnbQ5SxKWZN8B74VzeXqhQBGQ57o6vax21zGSVIZLLpcNAn4ps0z6h7H4YNig2AYTDSPQiHey4sMXp%2FJk1U1BEMNhF%2F46thyWV4iEjlIKlt%2BTN1GkJ048ynpOP5EX2nR%2Fi04xZ7Yrxo0n66yB2d7ucVx3yApvfHMt1BX8Rnac0Zz0TDB2v68BjqkAS9XfoDvSActfKakChxNqL3A04ClxtaVIqsiVOw4Ld8mdZYFE%2F%2BYyR2COz8m%2BLMzXO%2FIwPdLTAfx1uQkel9RRV%2BGvMKZWg26agV8FrLZnHbjrWIgQVixiJtI3mDQTLqupBVrcCetbCgHGEJVGwTx42%2BJvTFnD5I%2FNIDY0LNi%2BXT3FjKY5ayjEKshuON6JMZk1Yg9CjX6nv%2BGir%2BExAdDamtFj8fh&X-Amz-Signature=a40fbcc9684faa29baf6c8d3daaa5f52b42ff1a8380ab8bf551cf4f6a2c12a74&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYOHHJVS%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T210223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJZJ5LDEKALGLSM3JviTE%2FOLe%2FQ5GE%2BLqrfFbGoYYqDAIhANCjzBxPRN6tP9f8X47JvEgk%2Fah4F6aRFkiZdHCEWB4UKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7xiKL5zGEIFEqs%2Bcq3AMpaDSK6mDbTOqH6qrC4dK2aIZIiP%2FcUijhM1l0dZCK8dfA9%2Be16gFRfVg0zfUlfNVNx%2B9H3YynZ%2F3pLYLf5e1aRLkEILhQZrB1BbPibwI1D%2B%2FeJ8p21Vf2QVgxAbjUV%2FN1PVgy6Wp55eRM62curYL63f%2BfUvXNkOS75aOvmrTSGAS5Lu5VhAtLu9HzZyExUA1bPdoNXIyTYUt%2BS0C%2FVrV77NKIS7ipNo8hr7a83Iec3sTDlaIXD7oOFt%2BdL4%2BZuHS9rGJybvqelWtWDVQwp9MNhYKxVkK7nXQj2Fj2QCAAtDEOogYb3P9Q3TlVo%2FL%2BGmzfea8ERce2RMSHuUjdpvThQAgVTVS1JyvX0pIvQ6H7djLzv%2FXPAW2kNOeWXMgKX1VVBDjO53dULYyzIfpM60I%2FGv0uxrzLmu7wzMEz6UoRSK24HdTwigAv%2BeItVNXzkBTzBWy%2Fv7CEcQQygnbQ5SxKWZN8B74VzeXqhQBGQ57o6vax21zGSVIZLLpcNAn4ps0z6h7H4YNig2AYTDSPQiHey4sMXp%2FJk1U1BEMNhF%2F46thyWV4iEjlIKlt%2BTN1GkJ048ynpOP5EX2nR%2Fi04xZ7Yrxo0n66yB2d7ucVx3yApvfHMt1BX8Rnac0Zz0TDB2v68BjqkAS9XfoDvSActfKakChxNqL3A04ClxtaVIqsiVOw4Ld8mdZYFE%2F%2BYyR2COz8m%2BLMzXO%2FIwPdLTAfx1uQkel9RRV%2BGvMKZWg26agV8FrLZnHbjrWIgQVixiJtI3mDQTLqupBVrcCetbCgHGEJVGwTx42%2BJvTFnD5I%2FNIDY0LNi%2BXT3FjKY5ayjEKshuON6JMZk1Yg9CjX6nv%2BGir%2BExAdDamtFj8fh&X-Amz-Signature=0aa1ecf43ac3a5c258963bb26780f45f63233a3a3ff0e2f60b09c3ae0a400ce7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYOHHJVS%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T210223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJZJ5LDEKALGLSM3JviTE%2FOLe%2FQ5GE%2BLqrfFbGoYYqDAIhANCjzBxPRN6tP9f8X47JvEgk%2Fah4F6aRFkiZdHCEWB4UKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7xiKL5zGEIFEqs%2Bcq3AMpaDSK6mDbTOqH6qrC4dK2aIZIiP%2FcUijhM1l0dZCK8dfA9%2Be16gFRfVg0zfUlfNVNx%2B9H3YynZ%2F3pLYLf5e1aRLkEILhQZrB1BbPibwI1D%2B%2FeJ8p21Vf2QVgxAbjUV%2FN1PVgy6Wp55eRM62curYL63f%2BfUvXNkOS75aOvmrTSGAS5Lu5VhAtLu9HzZyExUA1bPdoNXIyTYUt%2BS0C%2FVrV77NKIS7ipNo8hr7a83Iec3sTDlaIXD7oOFt%2BdL4%2BZuHS9rGJybvqelWtWDVQwp9MNhYKxVkK7nXQj2Fj2QCAAtDEOogYb3P9Q3TlVo%2FL%2BGmzfea8ERce2RMSHuUjdpvThQAgVTVS1JyvX0pIvQ6H7djLzv%2FXPAW2kNOeWXMgKX1VVBDjO53dULYyzIfpM60I%2FGv0uxrzLmu7wzMEz6UoRSK24HdTwigAv%2BeItVNXzkBTzBWy%2Fv7CEcQQygnbQ5SxKWZN8B74VzeXqhQBGQ57o6vax21zGSVIZLLpcNAn4ps0z6h7H4YNig2AYTDSPQiHey4sMXp%2FJk1U1BEMNhF%2F46thyWV4iEjlIKlt%2BTN1GkJ048ynpOP5EX2nR%2Fi04xZ7Yrxo0n66yB2d7ucVx3yApvfHMt1BX8Rnac0Zz0TDB2v68BjqkAS9XfoDvSActfKakChxNqL3A04ClxtaVIqsiVOw4Ld8mdZYFE%2F%2BYyR2COz8m%2BLMzXO%2FIwPdLTAfx1uQkel9RRV%2BGvMKZWg26agV8FrLZnHbjrWIgQVixiJtI3mDQTLqupBVrcCetbCgHGEJVGwTx42%2BJvTFnD5I%2FNIDY0LNi%2BXT3FjKY5ayjEKshuON6JMZk1Yg9CjX6nv%2BGir%2BExAdDamtFj8fh&X-Amz-Signature=febb0bf2dfab7225066920599d4ee457f7cead8568e36ecbe7dfacfb719b2439&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYOHHJVS%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T210223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJZJ5LDEKALGLSM3JviTE%2FOLe%2FQ5GE%2BLqrfFbGoYYqDAIhANCjzBxPRN6tP9f8X47JvEgk%2Fah4F6aRFkiZdHCEWB4UKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7xiKL5zGEIFEqs%2Bcq3AMpaDSK6mDbTOqH6qrC4dK2aIZIiP%2FcUijhM1l0dZCK8dfA9%2Be16gFRfVg0zfUlfNVNx%2B9H3YynZ%2F3pLYLf5e1aRLkEILhQZrB1BbPibwI1D%2B%2FeJ8p21Vf2QVgxAbjUV%2FN1PVgy6Wp55eRM62curYL63f%2BfUvXNkOS75aOvmrTSGAS5Lu5VhAtLu9HzZyExUA1bPdoNXIyTYUt%2BS0C%2FVrV77NKIS7ipNo8hr7a83Iec3sTDlaIXD7oOFt%2BdL4%2BZuHS9rGJybvqelWtWDVQwp9MNhYKxVkK7nXQj2Fj2QCAAtDEOogYb3P9Q3TlVo%2FL%2BGmzfea8ERce2RMSHuUjdpvThQAgVTVS1JyvX0pIvQ6H7djLzv%2FXPAW2kNOeWXMgKX1VVBDjO53dULYyzIfpM60I%2FGv0uxrzLmu7wzMEz6UoRSK24HdTwigAv%2BeItVNXzkBTzBWy%2Fv7CEcQQygnbQ5SxKWZN8B74VzeXqhQBGQ57o6vax21zGSVIZLLpcNAn4ps0z6h7H4YNig2AYTDSPQiHey4sMXp%2FJk1U1BEMNhF%2F46thyWV4iEjlIKlt%2BTN1GkJ048ynpOP5EX2nR%2Fi04xZ7Yrxo0n66yB2d7ucVx3yApvfHMt1BX8Rnac0Zz0TDB2v68BjqkAS9XfoDvSActfKakChxNqL3A04ClxtaVIqsiVOw4Ld8mdZYFE%2F%2BYyR2COz8m%2BLMzXO%2FIwPdLTAfx1uQkel9RRV%2BGvMKZWg26agV8FrLZnHbjrWIgQVixiJtI3mDQTLqupBVrcCetbCgHGEJVGwTx42%2BJvTFnD5I%2FNIDY0LNi%2BXT3FjKY5ayjEKshuON6JMZk1Yg9CjX6nv%2BGir%2BExAdDamtFj8fh&X-Amz-Signature=e808f7566edcffedaa311008a59e5c223c14ecacd06076b225773bc59bf1fc02&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYOHHJVS%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T210223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJZJ5LDEKALGLSM3JviTE%2FOLe%2FQ5GE%2BLqrfFbGoYYqDAIhANCjzBxPRN6tP9f8X47JvEgk%2Fah4F6aRFkiZdHCEWB4UKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7xiKL5zGEIFEqs%2Bcq3AMpaDSK6mDbTOqH6qrC4dK2aIZIiP%2FcUijhM1l0dZCK8dfA9%2Be16gFRfVg0zfUlfNVNx%2B9H3YynZ%2F3pLYLf5e1aRLkEILhQZrB1BbPibwI1D%2B%2FeJ8p21Vf2QVgxAbjUV%2FN1PVgy6Wp55eRM62curYL63f%2BfUvXNkOS75aOvmrTSGAS5Lu5VhAtLu9HzZyExUA1bPdoNXIyTYUt%2BS0C%2FVrV77NKIS7ipNo8hr7a83Iec3sTDlaIXD7oOFt%2BdL4%2BZuHS9rGJybvqelWtWDVQwp9MNhYKxVkK7nXQj2Fj2QCAAtDEOogYb3P9Q3TlVo%2FL%2BGmzfea8ERce2RMSHuUjdpvThQAgVTVS1JyvX0pIvQ6H7djLzv%2FXPAW2kNOeWXMgKX1VVBDjO53dULYyzIfpM60I%2FGv0uxrzLmu7wzMEz6UoRSK24HdTwigAv%2BeItVNXzkBTzBWy%2Fv7CEcQQygnbQ5SxKWZN8B74VzeXqhQBGQ57o6vax21zGSVIZLLpcNAn4ps0z6h7H4YNig2AYTDSPQiHey4sMXp%2FJk1U1BEMNhF%2F46thyWV4iEjlIKlt%2BTN1GkJ048ynpOP5EX2nR%2Fi04xZ7Yrxo0n66yB2d7ucVx3yApvfHMt1BX8Rnac0Zz0TDB2v68BjqkAS9XfoDvSActfKakChxNqL3A04ClxtaVIqsiVOw4Ld8mdZYFE%2F%2BYyR2COz8m%2BLMzXO%2FIwPdLTAfx1uQkel9RRV%2BGvMKZWg26agV8FrLZnHbjrWIgQVixiJtI3mDQTLqupBVrcCetbCgHGEJVGwTx42%2BJvTFnD5I%2FNIDY0LNi%2BXT3FjKY5ayjEKshuON6JMZk1Yg9CjX6nv%2BGir%2BExAdDamtFj8fh&X-Amz-Signature=58143c2d9d1156a737c4c3cc551e2a1bf80d860995a026eecd773122069d7fbb&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYOHHJVS%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T210223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJZJ5LDEKALGLSM3JviTE%2FOLe%2FQ5GE%2BLqrfFbGoYYqDAIhANCjzBxPRN6tP9f8X47JvEgk%2Fah4F6aRFkiZdHCEWB4UKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7xiKL5zGEIFEqs%2Bcq3AMpaDSK6mDbTOqH6qrC4dK2aIZIiP%2FcUijhM1l0dZCK8dfA9%2Be16gFRfVg0zfUlfNVNx%2B9H3YynZ%2F3pLYLf5e1aRLkEILhQZrB1BbPibwI1D%2B%2FeJ8p21Vf2QVgxAbjUV%2FN1PVgy6Wp55eRM62curYL63f%2BfUvXNkOS75aOvmrTSGAS5Lu5VhAtLu9HzZyExUA1bPdoNXIyTYUt%2BS0C%2FVrV77NKIS7ipNo8hr7a83Iec3sTDlaIXD7oOFt%2BdL4%2BZuHS9rGJybvqelWtWDVQwp9MNhYKxVkK7nXQj2Fj2QCAAtDEOogYb3P9Q3TlVo%2FL%2BGmzfea8ERce2RMSHuUjdpvThQAgVTVS1JyvX0pIvQ6H7djLzv%2FXPAW2kNOeWXMgKX1VVBDjO53dULYyzIfpM60I%2FGv0uxrzLmu7wzMEz6UoRSK24HdTwigAv%2BeItVNXzkBTzBWy%2Fv7CEcQQygnbQ5SxKWZN8B74VzeXqhQBGQ57o6vax21zGSVIZLLpcNAn4ps0z6h7H4YNig2AYTDSPQiHey4sMXp%2FJk1U1BEMNhF%2F46thyWV4iEjlIKlt%2BTN1GkJ048ynpOP5EX2nR%2Fi04xZ7Yrxo0n66yB2d7ucVx3yApvfHMt1BX8Rnac0Zz0TDB2v68BjqkAS9XfoDvSActfKakChxNqL3A04ClxtaVIqsiVOw4Ld8mdZYFE%2F%2BYyR2COz8m%2BLMzXO%2FIwPdLTAfx1uQkel9RRV%2BGvMKZWg26agV8FrLZnHbjrWIgQVixiJtI3mDQTLqupBVrcCetbCgHGEJVGwTx42%2BJvTFnD5I%2FNIDY0LNi%2BXT3FjKY5ayjEKshuON6JMZk1Yg9CjX6nv%2BGir%2BExAdDamtFj8fh&X-Amz-Signature=83ba50a1867889a61e3b7c1a142943d2f66997f05e1ad390a9347eb37360ce45&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYOHHJVS%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T210223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJZJ5LDEKALGLSM3JviTE%2FOLe%2FQ5GE%2BLqrfFbGoYYqDAIhANCjzBxPRN6tP9f8X47JvEgk%2Fah4F6aRFkiZdHCEWB4UKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7xiKL5zGEIFEqs%2Bcq3AMpaDSK6mDbTOqH6qrC4dK2aIZIiP%2FcUijhM1l0dZCK8dfA9%2Be16gFRfVg0zfUlfNVNx%2B9H3YynZ%2F3pLYLf5e1aRLkEILhQZrB1BbPibwI1D%2B%2FeJ8p21Vf2QVgxAbjUV%2FN1PVgy6Wp55eRM62curYL63f%2BfUvXNkOS75aOvmrTSGAS5Lu5VhAtLu9HzZyExUA1bPdoNXIyTYUt%2BS0C%2FVrV77NKIS7ipNo8hr7a83Iec3sTDlaIXD7oOFt%2BdL4%2BZuHS9rGJybvqelWtWDVQwp9MNhYKxVkK7nXQj2Fj2QCAAtDEOogYb3P9Q3TlVo%2FL%2BGmzfea8ERce2RMSHuUjdpvThQAgVTVS1JyvX0pIvQ6H7djLzv%2FXPAW2kNOeWXMgKX1VVBDjO53dULYyzIfpM60I%2FGv0uxrzLmu7wzMEz6UoRSK24HdTwigAv%2BeItVNXzkBTzBWy%2Fv7CEcQQygnbQ5SxKWZN8B74VzeXqhQBGQ57o6vax21zGSVIZLLpcNAn4ps0z6h7H4YNig2AYTDSPQiHey4sMXp%2FJk1U1BEMNhF%2F46thyWV4iEjlIKlt%2BTN1GkJ048ynpOP5EX2nR%2Fi04xZ7Yrxo0n66yB2d7ucVx3yApvfHMt1BX8Rnac0Zz0TDB2v68BjqkAS9XfoDvSActfKakChxNqL3A04ClxtaVIqsiVOw4Ld8mdZYFE%2F%2BYyR2COz8m%2BLMzXO%2FIwPdLTAfx1uQkel9RRV%2BGvMKZWg26agV8FrLZnHbjrWIgQVixiJtI3mDQTLqupBVrcCetbCgHGEJVGwTx42%2BJvTFnD5I%2FNIDY0LNi%2BXT3FjKY5ayjEKshuON6JMZk1Yg9CjX6nv%2BGir%2BExAdDamtFj8fh&X-Amz-Signature=5b3c210976646d0ef0e0bf6d6be99e7fbb68795b63b731eb8b2b45de27feac38&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
