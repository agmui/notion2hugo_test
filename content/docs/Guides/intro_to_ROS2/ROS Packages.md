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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAJRSDUC%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T110204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGe0fXICMOb2kwoFaklrb4UmuUyPTFjZvVH6MzsaRaJbAiBjsFHOWlD%2FEdrwkFSgrADw9NVem1%2BP%2Fci8XUc3JQQefCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8lJqdfAAk52lsWIfKtwDqLqof7xmL5EUtW8eH19P6v4jSVciBXl0Srvy%2BS%2FoirffMvm6QdPupWXAGu3n4v8ZKehIky9p9%2FiUw%2FVD3UnatwAs7TSKwDOt1xtIvJx%2Fl83FPgadGsYDw%2FNWvmteZnI7vNZ54xRP3HYEeIyDies8iFd0NAN4lL7kLUy17IkzSAS9iXamCdWagYRjsVbef0P6jx8AhyMbJWf0I7QBqHQE8XHGk5bnAmTifWEuYyOqyCtCDTl%2FG1LBHoSzpG7aji%2BGqC4w5pm3nV0B9mNEzWomLEXe0D%2F9p3XX3z7w9VkWA38gdqAvxiDiFwOC3OAJrRzCROufoDQW4rdBDTBrNtf%2BTrwvZ5CiLzGcDo%2BOIZUXkUNvAFlLeSI25UYSCGSd%2BY3vtFpw%2BFL0tQc9skwQUd9p3wWTFBH2turO7VuGXL%2FYw3zd7lPy4r%2FOaEf%2B%2F3VvvOnb%2F2TOwT5eU7paa2Tq9wylR7HBYBlUCcFoZlP1rOB68r0FZDXLspp710PiFu9GMvoPlI3DaEF262ceMBjh5z6ihUR2W33e4GaBUW8n1LOv6%2BJTLqyA%2FAhwZsZN1%2FOmB3xf9vm7kj0RjWyhgChyGsaEoGAo6Lo9WFXNeWZD2wq9DPH9dEk2OxR9zeNP2nYwp5DcvQY6pgGgLs%2FFUQKRr9flfno4tY%2FJNMc6Z2YSRfjtBQfXwDzdI1zweTbIrLGB7WsaIKt1fowHbk55m80UohG9SPBFFCBahWLwGFrt1V1nZ3FoeTtQUlqtgWRB6O9kGHrITQ6dR%2BICjoi7tflMkLlH3GFC7CKZNi9KASb6hh3IYOaWFaOhFcG4WgtGQVnlvVK2R5Kckeq1Z8gprfzVJQWBIog86DgRHC6CRyB4&X-Amz-Signature=90920900b8bb190273d4b4fdbae67a1bd205f396f1820600d0bbdd301af4057d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAJRSDUC%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T110204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGe0fXICMOb2kwoFaklrb4UmuUyPTFjZvVH6MzsaRaJbAiBjsFHOWlD%2FEdrwkFSgrADw9NVem1%2BP%2Fci8XUc3JQQefCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8lJqdfAAk52lsWIfKtwDqLqof7xmL5EUtW8eH19P6v4jSVciBXl0Srvy%2BS%2FoirffMvm6QdPupWXAGu3n4v8ZKehIky9p9%2FiUw%2FVD3UnatwAs7TSKwDOt1xtIvJx%2Fl83FPgadGsYDw%2FNWvmteZnI7vNZ54xRP3HYEeIyDies8iFd0NAN4lL7kLUy17IkzSAS9iXamCdWagYRjsVbef0P6jx8AhyMbJWf0I7QBqHQE8XHGk5bnAmTifWEuYyOqyCtCDTl%2FG1LBHoSzpG7aji%2BGqC4w5pm3nV0B9mNEzWomLEXe0D%2F9p3XX3z7w9VkWA38gdqAvxiDiFwOC3OAJrRzCROufoDQW4rdBDTBrNtf%2BTrwvZ5CiLzGcDo%2BOIZUXkUNvAFlLeSI25UYSCGSd%2BY3vtFpw%2BFL0tQc9skwQUd9p3wWTFBH2turO7VuGXL%2FYw3zd7lPy4r%2FOaEf%2B%2F3VvvOnb%2F2TOwT5eU7paa2Tq9wylR7HBYBlUCcFoZlP1rOB68r0FZDXLspp710PiFu9GMvoPlI3DaEF262ceMBjh5z6ihUR2W33e4GaBUW8n1LOv6%2BJTLqyA%2FAhwZsZN1%2FOmB3xf9vm7kj0RjWyhgChyGsaEoGAo6Lo9WFXNeWZD2wq9DPH9dEk2OxR9zeNP2nYwp5DcvQY6pgGgLs%2FFUQKRr9flfno4tY%2FJNMc6Z2YSRfjtBQfXwDzdI1zweTbIrLGB7WsaIKt1fowHbk55m80UohG9SPBFFCBahWLwGFrt1V1nZ3FoeTtQUlqtgWRB6O9kGHrITQ6dR%2BICjoi7tflMkLlH3GFC7CKZNi9KASb6hh3IYOaWFaOhFcG4WgtGQVnlvVK2R5Kckeq1Z8gprfzVJQWBIog86DgRHC6CRyB4&X-Amz-Signature=16aeda73513c8e639e8a993313ad029e3e3eebbbfc480984ceb5a0e292005741&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAJRSDUC%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T110204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGe0fXICMOb2kwoFaklrb4UmuUyPTFjZvVH6MzsaRaJbAiBjsFHOWlD%2FEdrwkFSgrADw9NVem1%2BP%2Fci8XUc3JQQefCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8lJqdfAAk52lsWIfKtwDqLqof7xmL5EUtW8eH19P6v4jSVciBXl0Srvy%2BS%2FoirffMvm6QdPupWXAGu3n4v8ZKehIky9p9%2FiUw%2FVD3UnatwAs7TSKwDOt1xtIvJx%2Fl83FPgadGsYDw%2FNWvmteZnI7vNZ54xRP3HYEeIyDies8iFd0NAN4lL7kLUy17IkzSAS9iXamCdWagYRjsVbef0P6jx8AhyMbJWf0I7QBqHQE8XHGk5bnAmTifWEuYyOqyCtCDTl%2FG1LBHoSzpG7aji%2BGqC4w5pm3nV0B9mNEzWomLEXe0D%2F9p3XX3z7w9VkWA38gdqAvxiDiFwOC3OAJrRzCROufoDQW4rdBDTBrNtf%2BTrwvZ5CiLzGcDo%2BOIZUXkUNvAFlLeSI25UYSCGSd%2BY3vtFpw%2BFL0tQc9skwQUd9p3wWTFBH2turO7VuGXL%2FYw3zd7lPy4r%2FOaEf%2B%2F3VvvOnb%2F2TOwT5eU7paa2Tq9wylR7HBYBlUCcFoZlP1rOB68r0FZDXLspp710PiFu9GMvoPlI3DaEF262ceMBjh5z6ihUR2W33e4GaBUW8n1LOv6%2BJTLqyA%2FAhwZsZN1%2FOmB3xf9vm7kj0RjWyhgChyGsaEoGAo6Lo9WFXNeWZD2wq9DPH9dEk2OxR9zeNP2nYwp5DcvQY6pgGgLs%2FFUQKRr9flfno4tY%2FJNMc6Z2YSRfjtBQfXwDzdI1zweTbIrLGB7WsaIKt1fowHbk55m80UohG9SPBFFCBahWLwGFrt1V1nZ3FoeTtQUlqtgWRB6O9kGHrITQ6dR%2BICjoi7tflMkLlH3GFC7CKZNi9KASb6hh3IYOaWFaOhFcG4WgtGQVnlvVK2R5Kckeq1Z8gprfzVJQWBIog86DgRHC6CRyB4&X-Amz-Signature=cc99d25749cbab32dbc1b945cf79ba5aad45b80c221355779f146294c4b20810&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAJRSDUC%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T110204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGe0fXICMOb2kwoFaklrb4UmuUyPTFjZvVH6MzsaRaJbAiBjsFHOWlD%2FEdrwkFSgrADw9NVem1%2BP%2Fci8XUc3JQQefCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8lJqdfAAk52lsWIfKtwDqLqof7xmL5EUtW8eH19P6v4jSVciBXl0Srvy%2BS%2FoirffMvm6QdPupWXAGu3n4v8ZKehIky9p9%2FiUw%2FVD3UnatwAs7TSKwDOt1xtIvJx%2Fl83FPgadGsYDw%2FNWvmteZnI7vNZ54xRP3HYEeIyDies8iFd0NAN4lL7kLUy17IkzSAS9iXamCdWagYRjsVbef0P6jx8AhyMbJWf0I7QBqHQE8XHGk5bnAmTifWEuYyOqyCtCDTl%2FG1LBHoSzpG7aji%2BGqC4w5pm3nV0B9mNEzWomLEXe0D%2F9p3XX3z7w9VkWA38gdqAvxiDiFwOC3OAJrRzCROufoDQW4rdBDTBrNtf%2BTrwvZ5CiLzGcDo%2BOIZUXkUNvAFlLeSI25UYSCGSd%2BY3vtFpw%2BFL0tQc9skwQUd9p3wWTFBH2turO7VuGXL%2FYw3zd7lPy4r%2FOaEf%2B%2F3VvvOnb%2F2TOwT5eU7paa2Tq9wylR7HBYBlUCcFoZlP1rOB68r0FZDXLspp710PiFu9GMvoPlI3DaEF262ceMBjh5z6ihUR2W33e4GaBUW8n1LOv6%2BJTLqyA%2FAhwZsZN1%2FOmB3xf9vm7kj0RjWyhgChyGsaEoGAo6Lo9WFXNeWZD2wq9DPH9dEk2OxR9zeNP2nYwp5DcvQY6pgGgLs%2FFUQKRr9flfno4tY%2FJNMc6Z2YSRfjtBQfXwDzdI1zweTbIrLGB7WsaIKt1fowHbk55m80UohG9SPBFFCBahWLwGFrt1V1nZ3FoeTtQUlqtgWRB6O9kGHrITQ6dR%2BICjoi7tflMkLlH3GFC7CKZNi9KASb6hh3IYOaWFaOhFcG4WgtGQVnlvVK2R5Kckeq1Z8gprfzVJQWBIog86DgRHC6CRyB4&X-Amz-Signature=c7fc0e98cdfb7bc9f0de8cebafb4db7a73eda8a16389ce48a990552197c0ab85&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAJRSDUC%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T110204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGe0fXICMOb2kwoFaklrb4UmuUyPTFjZvVH6MzsaRaJbAiBjsFHOWlD%2FEdrwkFSgrADw9NVem1%2BP%2Fci8XUc3JQQefCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8lJqdfAAk52lsWIfKtwDqLqof7xmL5EUtW8eH19P6v4jSVciBXl0Srvy%2BS%2FoirffMvm6QdPupWXAGu3n4v8ZKehIky9p9%2FiUw%2FVD3UnatwAs7TSKwDOt1xtIvJx%2Fl83FPgadGsYDw%2FNWvmteZnI7vNZ54xRP3HYEeIyDies8iFd0NAN4lL7kLUy17IkzSAS9iXamCdWagYRjsVbef0P6jx8AhyMbJWf0I7QBqHQE8XHGk5bnAmTifWEuYyOqyCtCDTl%2FG1LBHoSzpG7aji%2BGqC4w5pm3nV0B9mNEzWomLEXe0D%2F9p3XX3z7w9VkWA38gdqAvxiDiFwOC3OAJrRzCROufoDQW4rdBDTBrNtf%2BTrwvZ5CiLzGcDo%2BOIZUXkUNvAFlLeSI25UYSCGSd%2BY3vtFpw%2BFL0tQc9skwQUd9p3wWTFBH2turO7VuGXL%2FYw3zd7lPy4r%2FOaEf%2B%2F3VvvOnb%2F2TOwT5eU7paa2Tq9wylR7HBYBlUCcFoZlP1rOB68r0FZDXLspp710PiFu9GMvoPlI3DaEF262ceMBjh5z6ihUR2W33e4GaBUW8n1LOv6%2BJTLqyA%2FAhwZsZN1%2FOmB3xf9vm7kj0RjWyhgChyGsaEoGAo6Lo9WFXNeWZD2wq9DPH9dEk2OxR9zeNP2nYwp5DcvQY6pgGgLs%2FFUQKRr9flfno4tY%2FJNMc6Z2YSRfjtBQfXwDzdI1zweTbIrLGB7WsaIKt1fowHbk55m80UohG9SPBFFCBahWLwGFrt1V1nZ3FoeTtQUlqtgWRB6O9kGHrITQ6dR%2BICjoi7tflMkLlH3GFC7CKZNi9KASb6hh3IYOaWFaOhFcG4WgtGQVnlvVK2R5Kckeq1Z8gprfzVJQWBIog86DgRHC6CRyB4&X-Amz-Signature=9afd97d3a6e9789030e79bf5cdb69b191940796b66838d03c08ef5ab061ff86a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAJRSDUC%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T110204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGe0fXICMOb2kwoFaklrb4UmuUyPTFjZvVH6MzsaRaJbAiBjsFHOWlD%2FEdrwkFSgrADw9NVem1%2BP%2Fci8XUc3JQQefCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8lJqdfAAk52lsWIfKtwDqLqof7xmL5EUtW8eH19P6v4jSVciBXl0Srvy%2BS%2FoirffMvm6QdPupWXAGu3n4v8ZKehIky9p9%2FiUw%2FVD3UnatwAs7TSKwDOt1xtIvJx%2Fl83FPgadGsYDw%2FNWvmteZnI7vNZ54xRP3HYEeIyDies8iFd0NAN4lL7kLUy17IkzSAS9iXamCdWagYRjsVbef0P6jx8AhyMbJWf0I7QBqHQE8XHGk5bnAmTifWEuYyOqyCtCDTl%2FG1LBHoSzpG7aji%2BGqC4w5pm3nV0B9mNEzWomLEXe0D%2F9p3XX3z7w9VkWA38gdqAvxiDiFwOC3OAJrRzCROufoDQW4rdBDTBrNtf%2BTrwvZ5CiLzGcDo%2BOIZUXkUNvAFlLeSI25UYSCGSd%2BY3vtFpw%2BFL0tQc9skwQUd9p3wWTFBH2turO7VuGXL%2FYw3zd7lPy4r%2FOaEf%2B%2F3VvvOnb%2F2TOwT5eU7paa2Tq9wylR7HBYBlUCcFoZlP1rOB68r0FZDXLspp710PiFu9GMvoPlI3DaEF262ceMBjh5z6ihUR2W33e4GaBUW8n1LOv6%2BJTLqyA%2FAhwZsZN1%2FOmB3xf9vm7kj0RjWyhgChyGsaEoGAo6Lo9WFXNeWZD2wq9DPH9dEk2OxR9zeNP2nYwp5DcvQY6pgGgLs%2FFUQKRr9flfno4tY%2FJNMc6Z2YSRfjtBQfXwDzdI1zweTbIrLGB7WsaIKt1fowHbk55m80UohG9SPBFFCBahWLwGFrt1V1nZ3FoeTtQUlqtgWRB6O9kGHrITQ6dR%2BICjoi7tflMkLlH3GFC7CKZNi9KASb6hh3IYOaWFaOhFcG4WgtGQVnlvVK2R5Kckeq1Z8gprfzVJQWBIog86DgRHC6CRyB4&X-Amz-Signature=fc68a4cbe99bf395395a0f296a8d841cce939f77582f7c34c73f916b0d2a9ed7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAJRSDUC%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T110204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGe0fXICMOb2kwoFaklrb4UmuUyPTFjZvVH6MzsaRaJbAiBjsFHOWlD%2FEdrwkFSgrADw9NVem1%2BP%2Fci8XUc3JQQefCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8lJqdfAAk52lsWIfKtwDqLqof7xmL5EUtW8eH19P6v4jSVciBXl0Srvy%2BS%2FoirffMvm6QdPupWXAGu3n4v8ZKehIky9p9%2FiUw%2FVD3UnatwAs7TSKwDOt1xtIvJx%2Fl83FPgadGsYDw%2FNWvmteZnI7vNZ54xRP3HYEeIyDies8iFd0NAN4lL7kLUy17IkzSAS9iXamCdWagYRjsVbef0P6jx8AhyMbJWf0I7QBqHQE8XHGk5bnAmTifWEuYyOqyCtCDTl%2FG1LBHoSzpG7aji%2BGqC4w5pm3nV0B9mNEzWomLEXe0D%2F9p3XX3z7w9VkWA38gdqAvxiDiFwOC3OAJrRzCROufoDQW4rdBDTBrNtf%2BTrwvZ5CiLzGcDo%2BOIZUXkUNvAFlLeSI25UYSCGSd%2BY3vtFpw%2BFL0tQc9skwQUd9p3wWTFBH2turO7VuGXL%2FYw3zd7lPy4r%2FOaEf%2B%2F3VvvOnb%2F2TOwT5eU7paa2Tq9wylR7HBYBlUCcFoZlP1rOB68r0FZDXLspp710PiFu9GMvoPlI3DaEF262ceMBjh5z6ihUR2W33e4GaBUW8n1LOv6%2BJTLqyA%2FAhwZsZN1%2FOmB3xf9vm7kj0RjWyhgChyGsaEoGAo6Lo9WFXNeWZD2wq9DPH9dEk2OxR9zeNP2nYwp5DcvQY6pgGgLs%2FFUQKRr9flfno4tY%2FJNMc6Z2YSRfjtBQfXwDzdI1zweTbIrLGB7WsaIKt1fowHbk55m80UohG9SPBFFCBahWLwGFrt1V1nZ3FoeTtQUlqtgWRB6O9kGHrITQ6dR%2BICjoi7tflMkLlH3GFC7CKZNi9KASb6hh3IYOaWFaOhFcG4WgtGQVnlvVK2R5Kckeq1Z8gprfzVJQWBIog86DgRHC6CRyB4&X-Amz-Signature=8c80a2071f289c71a2e6de366db6abf679a42bf2269766bbd144d0a11bc714b9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
