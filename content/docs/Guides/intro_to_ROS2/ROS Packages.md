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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4Q2NANU%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUk4C2xusKEY1DJiX2Weiv4a3diBcOx9cFGgzwWvTHqAiAPzUvhkEnv9ERQvrlVAd5Wtz0p%2FZ%2B118bKbkFbtg2kqSr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMj0kaDzBCCrz3jB1tKtwDn%2FbLEoIjtaXZt75HT2xmYPzH%2BaCt87%2BrnSetsMZnkTFQvTLMlPQus66aWxS2Gpf2o4I3YK8kh3DOYohCXfFAGR0XZEyu71i0DsZl81mtt6c6YGlj2r1VAsBB86wCV%2F92VF6L88efLNqez8E6KwCnmMz3v1jBjXmRDfwpN5ErKpkVp5pf3t9uD8dmXaAjVU4K1C3b2nmwOFHg0%2F%2Fqudpv%2FFRcv72fu9vgqi5tFwQg8XyvMfPqMEiF9PPPbDZmcd3TKGp0pa3vFQhG8rT9MgWcK%2F4auSvWO76assy5oUOld14H7jCy3Pd%2B9jgKtRVh0EYQKEQIRaFKhfxOTrB2AVqej1nBipGR9Sq1pItIAorxdau%2FKdHeIEXVVgM8vNtfi3knXmDoJ8v7%2Fw6%2Fyh4Unp7696Zrae9ZzBzB8iI5%2BKnkLIgHGg6mGrTX2Z7QCjvMfKdAXoMlHOBBt1WRjLeOTAbAFMYafrHOEvakLT1LJ3xPFazezhvMErca34ugwWc4n2WdGqxd%2FHVbX8h6X8sgO1dCN67CTtoGiu38WLooFgzX1qF1zlc3bYtiIvVIi6JeoToyTlXRrptmSJvd3ykgLcv1HYEOlrlQM9q5vxzTmx3TVz5kM%2F6gOPasohbeeCcw6YjQvwY6pgGT2%2BjkEgY8Qnf%2Br0wjdZHpKK0SUpnwJ3lCDaFNiLyNcbW0jtOVshSV9lkKUSw9eREdD2o0QvMEhRz9FRHQqEXoKmQwwo4HvrZRSH6sUOwvwv2ZZJFtCrEkS2dTq1EtBWyWQ%2FNkC85CycEwNYvGfDtqhF4HUrLmLg83XoXOb6bSoAc8uxAODhPqkZDrVhAJCPk%2FyXBhAb4Tk4YZsJtRhFEHklrW%2F6yh&X-Amz-Signature=d9ca5389b2c1ee7b624c5a9c3bb24a435760137aad28021cc516d2ca74a105a6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4Q2NANU%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUk4C2xusKEY1DJiX2Weiv4a3diBcOx9cFGgzwWvTHqAiAPzUvhkEnv9ERQvrlVAd5Wtz0p%2FZ%2B118bKbkFbtg2kqSr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMj0kaDzBCCrz3jB1tKtwDn%2FbLEoIjtaXZt75HT2xmYPzH%2BaCt87%2BrnSetsMZnkTFQvTLMlPQus66aWxS2Gpf2o4I3YK8kh3DOYohCXfFAGR0XZEyu71i0DsZl81mtt6c6YGlj2r1VAsBB86wCV%2F92VF6L88efLNqez8E6KwCnmMz3v1jBjXmRDfwpN5ErKpkVp5pf3t9uD8dmXaAjVU4K1C3b2nmwOFHg0%2F%2Fqudpv%2FFRcv72fu9vgqi5tFwQg8XyvMfPqMEiF9PPPbDZmcd3TKGp0pa3vFQhG8rT9MgWcK%2F4auSvWO76assy5oUOld14H7jCy3Pd%2B9jgKtRVh0EYQKEQIRaFKhfxOTrB2AVqej1nBipGR9Sq1pItIAorxdau%2FKdHeIEXVVgM8vNtfi3knXmDoJ8v7%2Fw6%2Fyh4Unp7696Zrae9ZzBzB8iI5%2BKnkLIgHGg6mGrTX2Z7QCjvMfKdAXoMlHOBBt1WRjLeOTAbAFMYafrHOEvakLT1LJ3xPFazezhvMErca34ugwWc4n2WdGqxd%2FHVbX8h6X8sgO1dCN67CTtoGiu38WLooFgzX1qF1zlc3bYtiIvVIi6JeoToyTlXRrptmSJvd3ykgLcv1HYEOlrlQM9q5vxzTmx3TVz5kM%2F6gOPasohbeeCcw6YjQvwY6pgGT2%2BjkEgY8Qnf%2Br0wjdZHpKK0SUpnwJ3lCDaFNiLyNcbW0jtOVshSV9lkKUSw9eREdD2o0QvMEhRz9FRHQqEXoKmQwwo4HvrZRSH6sUOwvwv2ZZJFtCrEkS2dTq1EtBWyWQ%2FNkC85CycEwNYvGfDtqhF4HUrLmLg83XoXOb6bSoAc8uxAODhPqkZDrVhAJCPk%2FyXBhAb4Tk4YZsJtRhFEHklrW%2F6yh&X-Amz-Signature=e6c594dffa08d23e9dfadefb1eb5c7e78e8c75c57cb612e337637c8ba14b580a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4Q2NANU%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUk4C2xusKEY1DJiX2Weiv4a3diBcOx9cFGgzwWvTHqAiAPzUvhkEnv9ERQvrlVAd5Wtz0p%2FZ%2B118bKbkFbtg2kqSr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMj0kaDzBCCrz3jB1tKtwDn%2FbLEoIjtaXZt75HT2xmYPzH%2BaCt87%2BrnSetsMZnkTFQvTLMlPQus66aWxS2Gpf2o4I3YK8kh3DOYohCXfFAGR0XZEyu71i0DsZl81mtt6c6YGlj2r1VAsBB86wCV%2F92VF6L88efLNqez8E6KwCnmMz3v1jBjXmRDfwpN5ErKpkVp5pf3t9uD8dmXaAjVU4K1C3b2nmwOFHg0%2F%2Fqudpv%2FFRcv72fu9vgqi5tFwQg8XyvMfPqMEiF9PPPbDZmcd3TKGp0pa3vFQhG8rT9MgWcK%2F4auSvWO76assy5oUOld14H7jCy3Pd%2B9jgKtRVh0EYQKEQIRaFKhfxOTrB2AVqej1nBipGR9Sq1pItIAorxdau%2FKdHeIEXVVgM8vNtfi3knXmDoJ8v7%2Fw6%2Fyh4Unp7696Zrae9ZzBzB8iI5%2BKnkLIgHGg6mGrTX2Z7QCjvMfKdAXoMlHOBBt1WRjLeOTAbAFMYafrHOEvakLT1LJ3xPFazezhvMErca34ugwWc4n2WdGqxd%2FHVbX8h6X8sgO1dCN67CTtoGiu38WLooFgzX1qF1zlc3bYtiIvVIi6JeoToyTlXRrptmSJvd3ykgLcv1HYEOlrlQM9q5vxzTmx3TVz5kM%2F6gOPasohbeeCcw6YjQvwY6pgGT2%2BjkEgY8Qnf%2Br0wjdZHpKK0SUpnwJ3lCDaFNiLyNcbW0jtOVshSV9lkKUSw9eREdD2o0QvMEhRz9FRHQqEXoKmQwwo4HvrZRSH6sUOwvwv2ZZJFtCrEkS2dTq1EtBWyWQ%2FNkC85CycEwNYvGfDtqhF4HUrLmLg83XoXOb6bSoAc8uxAODhPqkZDrVhAJCPk%2FyXBhAb4Tk4YZsJtRhFEHklrW%2F6yh&X-Amz-Signature=46c576a9a23576ae6d5fe7fb770e164b440b05d5f017f8b837df528d0fb219c5&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4Q2NANU%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUk4C2xusKEY1DJiX2Weiv4a3diBcOx9cFGgzwWvTHqAiAPzUvhkEnv9ERQvrlVAd5Wtz0p%2FZ%2B118bKbkFbtg2kqSr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMj0kaDzBCCrz3jB1tKtwDn%2FbLEoIjtaXZt75HT2xmYPzH%2BaCt87%2BrnSetsMZnkTFQvTLMlPQus66aWxS2Gpf2o4I3YK8kh3DOYohCXfFAGR0XZEyu71i0DsZl81mtt6c6YGlj2r1VAsBB86wCV%2F92VF6L88efLNqez8E6KwCnmMz3v1jBjXmRDfwpN5ErKpkVp5pf3t9uD8dmXaAjVU4K1C3b2nmwOFHg0%2F%2Fqudpv%2FFRcv72fu9vgqi5tFwQg8XyvMfPqMEiF9PPPbDZmcd3TKGp0pa3vFQhG8rT9MgWcK%2F4auSvWO76assy5oUOld14H7jCy3Pd%2B9jgKtRVh0EYQKEQIRaFKhfxOTrB2AVqej1nBipGR9Sq1pItIAorxdau%2FKdHeIEXVVgM8vNtfi3knXmDoJ8v7%2Fw6%2Fyh4Unp7696Zrae9ZzBzB8iI5%2BKnkLIgHGg6mGrTX2Z7QCjvMfKdAXoMlHOBBt1WRjLeOTAbAFMYafrHOEvakLT1LJ3xPFazezhvMErca34ugwWc4n2WdGqxd%2FHVbX8h6X8sgO1dCN67CTtoGiu38WLooFgzX1qF1zlc3bYtiIvVIi6JeoToyTlXRrptmSJvd3ykgLcv1HYEOlrlQM9q5vxzTmx3TVz5kM%2F6gOPasohbeeCcw6YjQvwY6pgGT2%2BjkEgY8Qnf%2Br0wjdZHpKK0SUpnwJ3lCDaFNiLyNcbW0jtOVshSV9lkKUSw9eREdD2o0QvMEhRz9FRHQqEXoKmQwwo4HvrZRSH6sUOwvwv2ZZJFtCrEkS2dTq1EtBWyWQ%2FNkC85CycEwNYvGfDtqhF4HUrLmLg83XoXOb6bSoAc8uxAODhPqkZDrVhAJCPk%2FyXBhAb4Tk4YZsJtRhFEHklrW%2F6yh&X-Amz-Signature=64f6b8bd7d63aca90bbeaa23cf6e6868ba026b75f75b52d1b341c4886bad21a4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4Q2NANU%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUk4C2xusKEY1DJiX2Weiv4a3diBcOx9cFGgzwWvTHqAiAPzUvhkEnv9ERQvrlVAd5Wtz0p%2FZ%2B118bKbkFbtg2kqSr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMj0kaDzBCCrz3jB1tKtwDn%2FbLEoIjtaXZt75HT2xmYPzH%2BaCt87%2BrnSetsMZnkTFQvTLMlPQus66aWxS2Gpf2o4I3YK8kh3DOYohCXfFAGR0XZEyu71i0DsZl81mtt6c6YGlj2r1VAsBB86wCV%2F92VF6L88efLNqez8E6KwCnmMz3v1jBjXmRDfwpN5ErKpkVp5pf3t9uD8dmXaAjVU4K1C3b2nmwOFHg0%2F%2Fqudpv%2FFRcv72fu9vgqi5tFwQg8XyvMfPqMEiF9PPPbDZmcd3TKGp0pa3vFQhG8rT9MgWcK%2F4auSvWO76assy5oUOld14H7jCy3Pd%2B9jgKtRVh0EYQKEQIRaFKhfxOTrB2AVqej1nBipGR9Sq1pItIAorxdau%2FKdHeIEXVVgM8vNtfi3knXmDoJ8v7%2Fw6%2Fyh4Unp7696Zrae9ZzBzB8iI5%2BKnkLIgHGg6mGrTX2Z7QCjvMfKdAXoMlHOBBt1WRjLeOTAbAFMYafrHOEvakLT1LJ3xPFazezhvMErca34ugwWc4n2WdGqxd%2FHVbX8h6X8sgO1dCN67CTtoGiu38WLooFgzX1qF1zlc3bYtiIvVIi6JeoToyTlXRrptmSJvd3ykgLcv1HYEOlrlQM9q5vxzTmx3TVz5kM%2F6gOPasohbeeCcw6YjQvwY6pgGT2%2BjkEgY8Qnf%2Br0wjdZHpKK0SUpnwJ3lCDaFNiLyNcbW0jtOVshSV9lkKUSw9eREdD2o0QvMEhRz9FRHQqEXoKmQwwo4HvrZRSH6sUOwvwv2ZZJFtCrEkS2dTq1EtBWyWQ%2FNkC85CycEwNYvGfDtqhF4HUrLmLg83XoXOb6bSoAc8uxAODhPqkZDrVhAJCPk%2FyXBhAb4Tk4YZsJtRhFEHklrW%2F6yh&X-Amz-Signature=16aca36b737299f000801e785b190a611007f47d3a585cf114e329fd3f8288e0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4Q2NANU%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUk4C2xusKEY1DJiX2Weiv4a3diBcOx9cFGgzwWvTHqAiAPzUvhkEnv9ERQvrlVAd5Wtz0p%2FZ%2B118bKbkFbtg2kqSr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMj0kaDzBCCrz3jB1tKtwDn%2FbLEoIjtaXZt75HT2xmYPzH%2BaCt87%2BrnSetsMZnkTFQvTLMlPQus66aWxS2Gpf2o4I3YK8kh3DOYohCXfFAGR0XZEyu71i0DsZl81mtt6c6YGlj2r1VAsBB86wCV%2F92VF6L88efLNqez8E6KwCnmMz3v1jBjXmRDfwpN5ErKpkVp5pf3t9uD8dmXaAjVU4K1C3b2nmwOFHg0%2F%2Fqudpv%2FFRcv72fu9vgqi5tFwQg8XyvMfPqMEiF9PPPbDZmcd3TKGp0pa3vFQhG8rT9MgWcK%2F4auSvWO76assy5oUOld14H7jCy3Pd%2B9jgKtRVh0EYQKEQIRaFKhfxOTrB2AVqej1nBipGR9Sq1pItIAorxdau%2FKdHeIEXVVgM8vNtfi3knXmDoJ8v7%2Fw6%2Fyh4Unp7696Zrae9ZzBzB8iI5%2BKnkLIgHGg6mGrTX2Z7QCjvMfKdAXoMlHOBBt1WRjLeOTAbAFMYafrHOEvakLT1LJ3xPFazezhvMErca34ugwWc4n2WdGqxd%2FHVbX8h6X8sgO1dCN67CTtoGiu38WLooFgzX1qF1zlc3bYtiIvVIi6JeoToyTlXRrptmSJvd3ykgLcv1HYEOlrlQM9q5vxzTmx3TVz5kM%2F6gOPasohbeeCcw6YjQvwY6pgGT2%2BjkEgY8Qnf%2Br0wjdZHpKK0SUpnwJ3lCDaFNiLyNcbW0jtOVshSV9lkKUSw9eREdD2o0QvMEhRz9FRHQqEXoKmQwwo4HvrZRSH6sUOwvwv2ZZJFtCrEkS2dTq1EtBWyWQ%2FNkC85CycEwNYvGfDtqhF4HUrLmLg83XoXOb6bSoAc8uxAODhPqkZDrVhAJCPk%2FyXBhAb4Tk4YZsJtRhFEHklrW%2F6yh&X-Amz-Signature=0ed7529631aaa905734b3990f4789e2651668633a21644f654f1248e40da7242&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4Q2NANU%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T170802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUk4C2xusKEY1DJiX2Weiv4a3diBcOx9cFGgzwWvTHqAiAPzUvhkEnv9ERQvrlVAd5Wtz0p%2FZ%2B118bKbkFbtg2kqSr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMj0kaDzBCCrz3jB1tKtwDn%2FbLEoIjtaXZt75HT2xmYPzH%2BaCt87%2BrnSetsMZnkTFQvTLMlPQus66aWxS2Gpf2o4I3YK8kh3DOYohCXfFAGR0XZEyu71i0DsZl81mtt6c6YGlj2r1VAsBB86wCV%2F92VF6L88efLNqez8E6KwCnmMz3v1jBjXmRDfwpN5ErKpkVp5pf3t9uD8dmXaAjVU4K1C3b2nmwOFHg0%2F%2Fqudpv%2FFRcv72fu9vgqi5tFwQg8XyvMfPqMEiF9PPPbDZmcd3TKGp0pa3vFQhG8rT9MgWcK%2F4auSvWO76assy5oUOld14H7jCy3Pd%2B9jgKtRVh0EYQKEQIRaFKhfxOTrB2AVqej1nBipGR9Sq1pItIAorxdau%2FKdHeIEXVVgM8vNtfi3knXmDoJ8v7%2Fw6%2Fyh4Unp7696Zrae9ZzBzB8iI5%2BKnkLIgHGg6mGrTX2Z7QCjvMfKdAXoMlHOBBt1WRjLeOTAbAFMYafrHOEvakLT1LJ3xPFazezhvMErca34ugwWc4n2WdGqxd%2FHVbX8h6X8sgO1dCN67CTtoGiu38WLooFgzX1qF1zlc3bYtiIvVIi6JeoToyTlXRrptmSJvd3ykgLcv1HYEOlrlQM9q5vxzTmx3TVz5kM%2F6gOPasohbeeCcw6YjQvwY6pgGT2%2BjkEgY8Qnf%2Br0wjdZHpKK0SUpnwJ3lCDaFNiLyNcbW0jtOVshSV9lkKUSw9eREdD2o0QvMEhRz9FRHQqEXoKmQwwo4HvrZRSH6sUOwvwv2ZZJFtCrEkS2dTq1EtBWyWQ%2FNkC85CycEwNYvGfDtqhF4HUrLmLg83XoXOb6bSoAc8uxAODhPqkZDrVhAJCPk%2FyXBhAb4Tk4YZsJtRhFEHklrW%2F6yh&X-Amz-Signature=fa8a92807ee34ab1868bd18647e8dc4a6f02ed2f5bfeb17098159e9bd5679a9a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
