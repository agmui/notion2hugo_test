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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOR2IZTY%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T190205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACQ06m0QE0APIlx7AsfcnzEL5WZ2Wg3xCgRZ0fwx%2FiMAiAt88G7i0wfLPkS7cVYjB27OaAxcdW2c1GHjesyV9X6jyr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMkWw6MVsXstQ8cmVOKtwDENhm1qSG0WwG%2FvQuXi%2FBa1qwoZx0wGYxVSqbp4WPzTdK4Uid8rbL84S1mzIKqJArzu93%2BsV3DkRGX4niKFJ8r68k36HIpaVoXHl0gJEOEjFDzXYtLeZQp6y9FJOUoR6%2FQ5R3fCr4LqT2B4ul2urdwLnWJY1UIh0QdYngVR3%2BrMGY95ll2odBE6kYpvESMfWXeqE8Gid7Z0voEf0JBIeRQrBevqs9qcUlfT%2BqbmKRP5Et%2FRduVHcAnZMt%2FcU%2FQkZLhAWJ25u0LLiQl7Tph%2FO5hwp0zkOhAK03hvpknqriw9%2BJliwDVXchw7Hiy%2BrrFl4PsjfhBgi5ClUfW%2BMbj0UttbYo5pKLUQPonUWRNcxwzT7cVSc9u71nZKIwRpp%2FlXcXGQU8vMWwQzywkEW0LRDGq%2Fw3rZCYdPyBu54aTlQHF8x90u55Ovgaeez4bNUsRnFs8kaLc9JcKhSNec1%2Bnk1x0Ohf0QANW1fTmBLoZnI%2FnhCZE0heirPyfAH37S6rhY4LGGcwF9enL27%2BQEfnGJC7QKZ941%2BKtr4lq%2FOVipDYo0EW2bQZRXooBZtfueO%2FnSItoVszKvLDywfCQvJ%2BGVYP9M2RacPZ%2Bgh2a7HFubEdHq7lX18rq6r%2BouyjKXUw3sfFvwY6pgEyM2J0OIxjZu%2BvQNzUuho7Qb2dg1KxL6gbru8u4wbCJZxiKNHzUuSvRKrcci06LkzqWt6cvqpxk9AsFG5c3h6cFfnyFjfLjeVUmWEnct0F9om%2BG2hjysQgj8LO59%2FHnoFYAZGy0Udisy6I7NY6Xulh2CI%2BrLWSi2KCdqPCMswlxyOSJCRvu1bWIgRgcfkWykNSS1RLLHdYlTYhaGPM3ELw5Xr2Rcr0&X-Amz-Signature=9b3cd11e628d09fc98f81df4ab3fe279777e21a4a06e4b408b4c9518a2304ea3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOR2IZTY%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T190205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACQ06m0QE0APIlx7AsfcnzEL5WZ2Wg3xCgRZ0fwx%2FiMAiAt88G7i0wfLPkS7cVYjB27OaAxcdW2c1GHjesyV9X6jyr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMkWw6MVsXstQ8cmVOKtwDENhm1qSG0WwG%2FvQuXi%2FBa1qwoZx0wGYxVSqbp4WPzTdK4Uid8rbL84S1mzIKqJArzu93%2BsV3DkRGX4niKFJ8r68k36HIpaVoXHl0gJEOEjFDzXYtLeZQp6y9FJOUoR6%2FQ5R3fCr4LqT2B4ul2urdwLnWJY1UIh0QdYngVR3%2BrMGY95ll2odBE6kYpvESMfWXeqE8Gid7Z0voEf0JBIeRQrBevqs9qcUlfT%2BqbmKRP5Et%2FRduVHcAnZMt%2FcU%2FQkZLhAWJ25u0LLiQl7Tph%2FO5hwp0zkOhAK03hvpknqriw9%2BJliwDVXchw7Hiy%2BrrFl4PsjfhBgi5ClUfW%2BMbj0UttbYo5pKLUQPonUWRNcxwzT7cVSc9u71nZKIwRpp%2FlXcXGQU8vMWwQzywkEW0LRDGq%2Fw3rZCYdPyBu54aTlQHF8x90u55Ovgaeez4bNUsRnFs8kaLc9JcKhSNec1%2Bnk1x0Ohf0QANW1fTmBLoZnI%2FnhCZE0heirPyfAH37S6rhY4LGGcwF9enL27%2BQEfnGJC7QKZ941%2BKtr4lq%2FOVipDYo0EW2bQZRXooBZtfueO%2FnSItoVszKvLDywfCQvJ%2BGVYP9M2RacPZ%2Bgh2a7HFubEdHq7lX18rq6r%2BouyjKXUw3sfFvwY6pgEyM2J0OIxjZu%2BvQNzUuho7Qb2dg1KxL6gbru8u4wbCJZxiKNHzUuSvRKrcci06LkzqWt6cvqpxk9AsFG5c3h6cFfnyFjfLjeVUmWEnct0F9om%2BG2hjysQgj8LO59%2FHnoFYAZGy0Udisy6I7NY6Xulh2CI%2BrLWSi2KCdqPCMswlxyOSJCRvu1bWIgRgcfkWykNSS1RLLHdYlTYhaGPM3ELw5Xr2Rcr0&X-Amz-Signature=111a7e485d5dac796c861e9c7f227eec23637888d190658d32b3b2d8b7117c6a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOR2IZTY%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T190205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACQ06m0QE0APIlx7AsfcnzEL5WZ2Wg3xCgRZ0fwx%2FiMAiAt88G7i0wfLPkS7cVYjB27OaAxcdW2c1GHjesyV9X6jyr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMkWw6MVsXstQ8cmVOKtwDENhm1qSG0WwG%2FvQuXi%2FBa1qwoZx0wGYxVSqbp4WPzTdK4Uid8rbL84S1mzIKqJArzu93%2BsV3DkRGX4niKFJ8r68k36HIpaVoXHl0gJEOEjFDzXYtLeZQp6y9FJOUoR6%2FQ5R3fCr4LqT2B4ul2urdwLnWJY1UIh0QdYngVR3%2BrMGY95ll2odBE6kYpvESMfWXeqE8Gid7Z0voEf0JBIeRQrBevqs9qcUlfT%2BqbmKRP5Et%2FRduVHcAnZMt%2FcU%2FQkZLhAWJ25u0LLiQl7Tph%2FO5hwp0zkOhAK03hvpknqriw9%2BJliwDVXchw7Hiy%2BrrFl4PsjfhBgi5ClUfW%2BMbj0UttbYo5pKLUQPonUWRNcxwzT7cVSc9u71nZKIwRpp%2FlXcXGQU8vMWwQzywkEW0LRDGq%2Fw3rZCYdPyBu54aTlQHF8x90u55Ovgaeez4bNUsRnFs8kaLc9JcKhSNec1%2Bnk1x0Ohf0QANW1fTmBLoZnI%2FnhCZE0heirPyfAH37S6rhY4LGGcwF9enL27%2BQEfnGJC7QKZ941%2BKtr4lq%2FOVipDYo0EW2bQZRXooBZtfueO%2FnSItoVszKvLDywfCQvJ%2BGVYP9M2RacPZ%2Bgh2a7HFubEdHq7lX18rq6r%2BouyjKXUw3sfFvwY6pgEyM2J0OIxjZu%2BvQNzUuho7Qb2dg1KxL6gbru8u4wbCJZxiKNHzUuSvRKrcci06LkzqWt6cvqpxk9AsFG5c3h6cFfnyFjfLjeVUmWEnct0F9om%2BG2hjysQgj8LO59%2FHnoFYAZGy0Udisy6I7NY6Xulh2CI%2BrLWSi2KCdqPCMswlxyOSJCRvu1bWIgRgcfkWykNSS1RLLHdYlTYhaGPM3ELw5Xr2Rcr0&X-Amz-Signature=fa5ab579443b54afe9a7dcb686065ba97effb2185011bef61c6fbe9b77567e41&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOR2IZTY%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T190205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACQ06m0QE0APIlx7AsfcnzEL5WZ2Wg3xCgRZ0fwx%2FiMAiAt88G7i0wfLPkS7cVYjB27OaAxcdW2c1GHjesyV9X6jyr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMkWw6MVsXstQ8cmVOKtwDENhm1qSG0WwG%2FvQuXi%2FBa1qwoZx0wGYxVSqbp4WPzTdK4Uid8rbL84S1mzIKqJArzu93%2BsV3DkRGX4niKFJ8r68k36HIpaVoXHl0gJEOEjFDzXYtLeZQp6y9FJOUoR6%2FQ5R3fCr4LqT2B4ul2urdwLnWJY1UIh0QdYngVR3%2BrMGY95ll2odBE6kYpvESMfWXeqE8Gid7Z0voEf0JBIeRQrBevqs9qcUlfT%2BqbmKRP5Et%2FRduVHcAnZMt%2FcU%2FQkZLhAWJ25u0LLiQl7Tph%2FO5hwp0zkOhAK03hvpknqriw9%2BJliwDVXchw7Hiy%2BrrFl4PsjfhBgi5ClUfW%2BMbj0UttbYo5pKLUQPonUWRNcxwzT7cVSc9u71nZKIwRpp%2FlXcXGQU8vMWwQzywkEW0LRDGq%2Fw3rZCYdPyBu54aTlQHF8x90u55Ovgaeez4bNUsRnFs8kaLc9JcKhSNec1%2Bnk1x0Ohf0QANW1fTmBLoZnI%2FnhCZE0heirPyfAH37S6rhY4LGGcwF9enL27%2BQEfnGJC7QKZ941%2BKtr4lq%2FOVipDYo0EW2bQZRXooBZtfueO%2FnSItoVszKvLDywfCQvJ%2BGVYP9M2RacPZ%2Bgh2a7HFubEdHq7lX18rq6r%2BouyjKXUw3sfFvwY6pgEyM2J0OIxjZu%2BvQNzUuho7Qb2dg1KxL6gbru8u4wbCJZxiKNHzUuSvRKrcci06LkzqWt6cvqpxk9AsFG5c3h6cFfnyFjfLjeVUmWEnct0F9om%2BG2hjysQgj8LO59%2FHnoFYAZGy0Udisy6I7NY6Xulh2CI%2BrLWSi2KCdqPCMswlxyOSJCRvu1bWIgRgcfkWykNSS1RLLHdYlTYhaGPM3ELw5Xr2Rcr0&X-Amz-Signature=82be207ab666462236762f9f7f754c34932539a76c11c0f944869505366dfa42&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOR2IZTY%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T190205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACQ06m0QE0APIlx7AsfcnzEL5WZ2Wg3xCgRZ0fwx%2FiMAiAt88G7i0wfLPkS7cVYjB27OaAxcdW2c1GHjesyV9X6jyr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMkWw6MVsXstQ8cmVOKtwDENhm1qSG0WwG%2FvQuXi%2FBa1qwoZx0wGYxVSqbp4WPzTdK4Uid8rbL84S1mzIKqJArzu93%2BsV3DkRGX4niKFJ8r68k36HIpaVoXHl0gJEOEjFDzXYtLeZQp6y9FJOUoR6%2FQ5R3fCr4LqT2B4ul2urdwLnWJY1UIh0QdYngVR3%2BrMGY95ll2odBE6kYpvESMfWXeqE8Gid7Z0voEf0JBIeRQrBevqs9qcUlfT%2BqbmKRP5Et%2FRduVHcAnZMt%2FcU%2FQkZLhAWJ25u0LLiQl7Tph%2FO5hwp0zkOhAK03hvpknqriw9%2BJliwDVXchw7Hiy%2BrrFl4PsjfhBgi5ClUfW%2BMbj0UttbYo5pKLUQPonUWRNcxwzT7cVSc9u71nZKIwRpp%2FlXcXGQU8vMWwQzywkEW0LRDGq%2Fw3rZCYdPyBu54aTlQHF8x90u55Ovgaeez4bNUsRnFs8kaLc9JcKhSNec1%2Bnk1x0Ohf0QANW1fTmBLoZnI%2FnhCZE0heirPyfAH37S6rhY4LGGcwF9enL27%2BQEfnGJC7QKZ941%2BKtr4lq%2FOVipDYo0EW2bQZRXooBZtfueO%2FnSItoVszKvLDywfCQvJ%2BGVYP9M2RacPZ%2Bgh2a7HFubEdHq7lX18rq6r%2BouyjKXUw3sfFvwY6pgEyM2J0OIxjZu%2BvQNzUuho7Qb2dg1KxL6gbru8u4wbCJZxiKNHzUuSvRKrcci06LkzqWt6cvqpxk9AsFG5c3h6cFfnyFjfLjeVUmWEnct0F9om%2BG2hjysQgj8LO59%2FHnoFYAZGy0Udisy6I7NY6Xulh2CI%2BrLWSi2KCdqPCMswlxyOSJCRvu1bWIgRgcfkWykNSS1RLLHdYlTYhaGPM3ELw5Xr2Rcr0&X-Amz-Signature=7a169aac8085fb11ed3915daab809463a9f8ef84edd910196df5a0a8462f576a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOR2IZTY%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T190205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACQ06m0QE0APIlx7AsfcnzEL5WZ2Wg3xCgRZ0fwx%2FiMAiAt88G7i0wfLPkS7cVYjB27OaAxcdW2c1GHjesyV9X6jyr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMkWw6MVsXstQ8cmVOKtwDENhm1qSG0WwG%2FvQuXi%2FBa1qwoZx0wGYxVSqbp4WPzTdK4Uid8rbL84S1mzIKqJArzu93%2BsV3DkRGX4niKFJ8r68k36HIpaVoXHl0gJEOEjFDzXYtLeZQp6y9FJOUoR6%2FQ5R3fCr4LqT2B4ul2urdwLnWJY1UIh0QdYngVR3%2BrMGY95ll2odBE6kYpvESMfWXeqE8Gid7Z0voEf0JBIeRQrBevqs9qcUlfT%2BqbmKRP5Et%2FRduVHcAnZMt%2FcU%2FQkZLhAWJ25u0LLiQl7Tph%2FO5hwp0zkOhAK03hvpknqriw9%2BJliwDVXchw7Hiy%2BrrFl4PsjfhBgi5ClUfW%2BMbj0UttbYo5pKLUQPonUWRNcxwzT7cVSc9u71nZKIwRpp%2FlXcXGQU8vMWwQzywkEW0LRDGq%2Fw3rZCYdPyBu54aTlQHF8x90u55Ovgaeez4bNUsRnFs8kaLc9JcKhSNec1%2Bnk1x0Ohf0QANW1fTmBLoZnI%2FnhCZE0heirPyfAH37S6rhY4LGGcwF9enL27%2BQEfnGJC7QKZ941%2BKtr4lq%2FOVipDYo0EW2bQZRXooBZtfueO%2FnSItoVszKvLDywfCQvJ%2BGVYP9M2RacPZ%2Bgh2a7HFubEdHq7lX18rq6r%2BouyjKXUw3sfFvwY6pgEyM2J0OIxjZu%2BvQNzUuho7Qb2dg1KxL6gbru8u4wbCJZxiKNHzUuSvRKrcci06LkzqWt6cvqpxk9AsFG5c3h6cFfnyFjfLjeVUmWEnct0F9om%2BG2hjysQgj8LO59%2FHnoFYAZGy0Udisy6I7NY6Xulh2CI%2BrLWSi2KCdqPCMswlxyOSJCRvu1bWIgRgcfkWykNSS1RLLHdYlTYhaGPM3ELw5Xr2Rcr0&X-Amz-Signature=9b6b9235618f91039ae2a34d8aad93408d93065be72d0822d0197a00546668fa&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOR2IZTY%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T190205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACQ06m0QE0APIlx7AsfcnzEL5WZ2Wg3xCgRZ0fwx%2FiMAiAt88G7i0wfLPkS7cVYjB27OaAxcdW2c1GHjesyV9X6jyr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMkWw6MVsXstQ8cmVOKtwDENhm1qSG0WwG%2FvQuXi%2FBa1qwoZx0wGYxVSqbp4WPzTdK4Uid8rbL84S1mzIKqJArzu93%2BsV3DkRGX4niKFJ8r68k36HIpaVoXHl0gJEOEjFDzXYtLeZQp6y9FJOUoR6%2FQ5R3fCr4LqT2B4ul2urdwLnWJY1UIh0QdYngVR3%2BrMGY95ll2odBE6kYpvESMfWXeqE8Gid7Z0voEf0JBIeRQrBevqs9qcUlfT%2BqbmKRP5Et%2FRduVHcAnZMt%2FcU%2FQkZLhAWJ25u0LLiQl7Tph%2FO5hwp0zkOhAK03hvpknqriw9%2BJliwDVXchw7Hiy%2BrrFl4PsjfhBgi5ClUfW%2BMbj0UttbYo5pKLUQPonUWRNcxwzT7cVSc9u71nZKIwRpp%2FlXcXGQU8vMWwQzywkEW0LRDGq%2Fw3rZCYdPyBu54aTlQHF8x90u55Ovgaeez4bNUsRnFs8kaLc9JcKhSNec1%2Bnk1x0Ohf0QANW1fTmBLoZnI%2FnhCZE0heirPyfAH37S6rhY4LGGcwF9enL27%2BQEfnGJC7QKZ941%2BKtr4lq%2FOVipDYo0EW2bQZRXooBZtfueO%2FnSItoVszKvLDywfCQvJ%2BGVYP9M2RacPZ%2Bgh2a7HFubEdHq7lX18rq6r%2BouyjKXUw3sfFvwY6pgEyM2J0OIxjZu%2BvQNzUuho7Qb2dg1KxL6gbru8u4wbCJZxiKNHzUuSvRKrcci06LkzqWt6cvqpxk9AsFG5c3h6cFfnyFjfLjeVUmWEnct0F9om%2BG2hjysQgj8LO59%2FHnoFYAZGy0Udisy6I7NY6Xulh2CI%2BrLWSi2KCdqPCMswlxyOSJCRvu1bWIgRgcfkWykNSS1RLLHdYlTYhaGPM3ELw5Xr2Rcr0&X-Amz-Signature=8a2cfa789b5f587488e3435e1f01e89d4f537123c22680e4f2f47ded4960d192&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
