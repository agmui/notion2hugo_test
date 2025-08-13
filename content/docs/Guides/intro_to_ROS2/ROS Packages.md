---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TTTF2EO%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRgYgbiPiBqdKdqSmCnMrx%2Fwhz4uO4J19b9zzK18spOQIgKNfxe1nWKkZ979jazcXPrqiLtZY71tEBdAr61CaIeDEq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDM8nVm462T8ZyJoOlyrcA6bpewjGLoBZxvu7%2BNDXToujAVhXk75g%2F%2FgJi0DEC7B%2F11VbSz%2B0fAekdVu%2FfFKDR41uSDVS456DYou3TzwIbpjuni2Wq0Ki%2B50YIk2APDdlE9rdhe1sncnB2IShVdM0InJKdD8hftYTElWqJjU9cfV2ii7vZBngbhwguiiDKZBCIhJnQSQJo5lqI6%2BjakksdQikVhk5tRyR25CO5wUS3%2F40X3CHuQYji4FV7EHTJ%2BJ58ohDUtTQ0yHUIkz%2BN8WKhBtAbUj1Y7DSJWgcI5FmLX7LhluiCB1v%2FWDqsCxi3rVtLyv6pKdN01emcqQJqwkjTsUBAp6OSnltJJJZYUL19rVLGr66qKv7dUEWayz9WClXFvgtTc4pF%2FUWQMSgYxoREQld8QpgloyyXTjLTOaa7rQ1s5LIbbupV7UNnA6Jg%2BZaeGgT7Ar0iqNj7xCGakpA2Zx%2F4NaGM2w57wjOQac14WRLaMF11ye4du5VQObzTnEK5vnoNVNGGIf3ZmujMnnGiS%2ByTDrHbHmiZfTwK%2FWGruYT47W71VBPaMFr2l8Eqsc%2FeYACaxrwsT4rKpWzhzHP5zvkhJoy2CO9THOYdN9AYk3aI7QtoV1VCyVrI8TwuZxZLIJf%2F%2FyRyBYjyBvJMOSP9MQGOqUBnM0IDzBQ1Wg1a2fQEe3kClL6pzZxMcF5zTZayDIqFaD42BIp5C3m5tF9s2ENowZgaSA2HIUhaFDbQB37YCVUG%2BNDOyV2%2FSR2f0fNgM6iv3Ywc3B9YrGJibXDllGNITeUb9357TqSbx6nK%2FlpCpOEBp%2BYgCUAvcIvd9zBQAcBIihcgXtbczWSDTIX1i33IhkBI22dZQ3i98%2FW%2BiUkbpfuPlD2qTFt&X-Amz-Signature=aad217fee543040c93579accd077b71a847a29f0ee9f786e97a00d097b649248&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TTTF2EO%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRgYgbiPiBqdKdqSmCnMrx%2Fwhz4uO4J19b9zzK18spOQIgKNfxe1nWKkZ979jazcXPrqiLtZY71tEBdAr61CaIeDEq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDM8nVm462T8ZyJoOlyrcA6bpewjGLoBZxvu7%2BNDXToujAVhXk75g%2F%2FgJi0DEC7B%2F11VbSz%2B0fAekdVu%2FfFKDR41uSDVS456DYou3TzwIbpjuni2Wq0Ki%2B50YIk2APDdlE9rdhe1sncnB2IShVdM0InJKdD8hftYTElWqJjU9cfV2ii7vZBngbhwguiiDKZBCIhJnQSQJo5lqI6%2BjakksdQikVhk5tRyR25CO5wUS3%2F40X3CHuQYji4FV7EHTJ%2BJ58ohDUtTQ0yHUIkz%2BN8WKhBtAbUj1Y7DSJWgcI5FmLX7LhluiCB1v%2FWDqsCxi3rVtLyv6pKdN01emcqQJqwkjTsUBAp6OSnltJJJZYUL19rVLGr66qKv7dUEWayz9WClXFvgtTc4pF%2FUWQMSgYxoREQld8QpgloyyXTjLTOaa7rQ1s5LIbbupV7UNnA6Jg%2BZaeGgT7Ar0iqNj7xCGakpA2Zx%2F4NaGM2w57wjOQac14WRLaMF11ye4du5VQObzTnEK5vnoNVNGGIf3ZmujMnnGiS%2ByTDrHbHmiZfTwK%2FWGruYT47W71VBPaMFr2l8Eqsc%2FeYACaxrwsT4rKpWzhzHP5zvkhJoy2CO9THOYdN9AYk3aI7QtoV1VCyVrI8TwuZxZLIJf%2F%2FyRyBYjyBvJMOSP9MQGOqUBnM0IDzBQ1Wg1a2fQEe3kClL6pzZxMcF5zTZayDIqFaD42BIp5C3m5tF9s2ENowZgaSA2HIUhaFDbQB37YCVUG%2BNDOyV2%2FSR2f0fNgM6iv3Ywc3B9YrGJibXDllGNITeUb9357TqSbx6nK%2FlpCpOEBp%2BYgCUAvcIvd9zBQAcBIihcgXtbczWSDTIX1i33IhkBI22dZQ3i98%2FW%2BiUkbpfuPlD2qTFt&X-Amz-Signature=0d35ddedb9f0f31334a497a0a42f7580be0cea570bc12e4c2468a54eacaa5e94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TTTF2EO%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRgYgbiPiBqdKdqSmCnMrx%2Fwhz4uO4J19b9zzK18spOQIgKNfxe1nWKkZ979jazcXPrqiLtZY71tEBdAr61CaIeDEq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDM8nVm462T8ZyJoOlyrcA6bpewjGLoBZxvu7%2BNDXToujAVhXk75g%2F%2FgJi0DEC7B%2F11VbSz%2B0fAekdVu%2FfFKDR41uSDVS456DYou3TzwIbpjuni2Wq0Ki%2B50YIk2APDdlE9rdhe1sncnB2IShVdM0InJKdD8hftYTElWqJjU9cfV2ii7vZBngbhwguiiDKZBCIhJnQSQJo5lqI6%2BjakksdQikVhk5tRyR25CO5wUS3%2F40X3CHuQYji4FV7EHTJ%2BJ58ohDUtTQ0yHUIkz%2BN8WKhBtAbUj1Y7DSJWgcI5FmLX7LhluiCB1v%2FWDqsCxi3rVtLyv6pKdN01emcqQJqwkjTsUBAp6OSnltJJJZYUL19rVLGr66qKv7dUEWayz9WClXFvgtTc4pF%2FUWQMSgYxoREQld8QpgloyyXTjLTOaa7rQ1s5LIbbupV7UNnA6Jg%2BZaeGgT7Ar0iqNj7xCGakpA2Zx%2F4NaGM2w57wjOQac14WRLaMF11ye4du5VQObzTnEK5vnoNVNGGIf3ZmujMnnGiS%2ByTDrHbHmiZfTwK%2FWGruYT47W71VBPaMFr2l8Eqsc%2FeYACaxrwsT4rKpWzhzHP5zvkhJoy2CO9THOYdN9AYk3aI7QtoV1VCyVrI8TwuZxZLIJf%2F%2FyRyBYjyBvJMOSP9MQGOqUBnM0IDzBQ1Wg1a2fQEe3kClL6pzZxMcF5zTZayDIqFaD42BIp5C3m5tF9s2ENowZgaSA2HIUhaFDbQB37YCVUG%2BNDOyV2%2FSR2f0fNgM6iv3Ywc3B9YrGJibXDllGNITeUb9357TqSbx6nK%2FlpCpOEBp%2BYgCUAvcIvd9zBQAcBIihcgXtbczWSDTIX1i33IhkBI22dZQ3i98%2FW%2BiUkbpfuPlD2qTFt&X-Amz-Signature=16ce8c9aa5b672edb5b3259f1e2e7138d0a02df7c5c6d5e5417891da717d5860&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TTTF2EO%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRgYgbiPiBqdKdqSmCnMrx%2Fwhz4uO4J19b9zzK18spOQIgKNfxe1nWKkZ979jazcXPrqiLtZY71tEBdAr61CaIeDEq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDM8nVm462T8ZyJoOlyrcA6bpewjGLoBZxvu7%2BNDXToujAVhXk75g%2F%2FgJi0DEC7B%2F11VbSz%2B0fAekdVu%2FfFKDR41uSDVS456DYou3TzwIbpjuni2Wq0Ki%2B50YIk2APDdlE9rdhe1sncnB2IShVdM0InJKdD8hftYTElWqJjU9cfV2ii7vZBngbhwguiiDKZBCIhJnQSQJo5lqI6%2BjakksdQikVhk5tRyR25CO5wUS3%2F40X3CHuQYji4FV7EHTJ%2BJ58ohDUtTQ0yHUIkz%2BN8WKhBtAbUj1Y7DSJWgcI5FmLX7LhluiCB1v%2FWDqsCxi3rVtLyv6pKdN01emcqQJqwkjTsUBAp6OSnltJJJZYUL19rVLGr66qKv7dUEWayz9WClXFvgtTc4pF%2FUWQMSgYxoREQld8QpgloyyXTjLTOaa7rQ1s5LIbbupV7UNnA6Jg%2BZaeGgT7Ar0iqNj7xCGakpA2Zx%2F4NaGM2w57wjOQac14WRLaMF11ye4du5VQObzTnEK5vnoNVNGGIf3ZmujMnnGiS%2ByTDrHbHmiZfTwK%2FWGruYT47W71VBPaMFr2l8Eqsc%2FeYACaxrwsT4rKpWzhzHP5zvkhJoy2CO9THOYdN9AYk3aI7QtoV1VCyVrI8TwuZxZLIJf%2F%2FyRyBYjyBvJMOSP9MQGOqUBnM0IDzBQ1Wg1a2fQEe3kClL6pzZxMcF5zTZayDIqFaD42BIp5C3m5tF9s2ENowZgaSA2HIUhaFDbQB37YCVUG%2BNDOyV2%2FSR2f0fNgM6iv3Ywc3B9YrGJibXDllGNITeUb9357TqSbx6nK%2FlpCpOEBp%2BYgCUAvcIvd9zBQAcBIihcgXtbczWSDTIX1i33IhkBI22dZQ3i98%2FW%2BiUkbpfuPlD2qTFt&X-Amz-Signature=8c87cb18a018a787bf5cb6289a9db1b957313388a1ad2989d332e7003d03c2b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TTTF2EO%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRgYgbiPiBqdKdqSmCnMrx%2Fwhz4uO4J19b9zzK18spOQIgKNfxe1nWKkZ979jazcXPrqiLtZY71tEBdAr61CaIeDEq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDM8nVm462T8ZyJoOlyrcA6bpewjGLoBZxvu7%2BNDXToujAVhXk75g%2F%2FgJi0DEC7B%2F11VbSz%2B0fAekdVu%2FfFKDR41uSDVS456DYou3TzwIbpjuni2Wq0Ki%2B50YIk2APDdlE9rdhe1sncnB2IShVdM0InJKdD8hftYTElWqJjU9cfV2ii7vZBngbhwguiiDKZBCIhJnQSQJo5lqI6%2BjakksdQikVhk5tRyR25CO5wUS3%2F40X3CHuQYji4FV7EHTJ%2BJ58ohDUtTQ0yHUIkz%2BN8WKhBtAbUj1Y7DSJWgcI5FmLX7LhluiCB1v%2FWDqsCxi3rVtLyv6pKdN01emcqQJqwkjTsUBAp6OSnltJJJZYUL19rVLGr66qKv7dUEWayz9WClXFvgtTc4pF%2FUWQMSgYxoREQld8QpgloyyXTjLTOaa7rQ1s5LIbbupV7UNnA6Jg%2BZaeGgT7Ar0iqNj7xCGakpA2Zx%2F4NaGM2w57wjOQac14WRLaMF11ye4du5VQObzTnEK5vnoNVNGGIf3ZmujMnnGiS%2ByTDrHbHmiZfTwK%2FWGruYT47W71VBPaMFr2l8Eqsc%2FeYACaxrwsT4rKpWzhzHP5zvkhJoy2CO9THOYdN9AYk3aI7QtoV1VCyVrI8TwuZxZLIJf%2F%2FyRyBYjyBvJMOSP9MQGOqUBnM0IDzBQ1Wg1a2fQEe3kClL6pzZxMcF5zTZayDIqFaD42BIp5C3m5tF9s2ENowZgaSA2HIUhaFDbQB37YCVUG%2BNDOyV2%2FSR2f0fNgM6iv3Ywc3B9YrGJibXDllGNITeUb9357TqSbx6nK%2FlpCpOEBp%2BYgCUAvcIvd9zBQAcBIihcgXtbczWSDTIX1i33IhkBI22dZQ3i98%2FW%2BiUkbpfuPlD2qTFt&X-Amz-Signature=468cb89a1618f411e86034c931c77c71a26c946c626792b3e0beae9255897fa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TTTF2EO%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRgYgbiPiBqdKdqSmCnMrx%2Fwhz4uO4J19b9zzK18spOQIgKNfxe1nWKkZ979jazcXPrqiLtZY71tEBdAr61CaIeDEq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDM8nVm462T8ZyJoOlyrcA6bpewjGLoBZxvu7%2BNDXToujAVhXk75g%2F%2FgJi0DEC7B%2F11VbSz%2B0fAekdVu%2FfFKDR41uSDVS456DYou3TzwIbpjuni2Wq0Ki%2B50YIk2APDdlE9rdhe1sncnB2IShVdM0InJKdD8hftYTElWqJjU9cfV2ii7vZBngbhwguiiDKZBCIhJnQSQJo5lqI6%2BjakksdQikVhk5tRyR25CO5wUS3%2F40X3CHuQYji4FV7EHTJ%2BJ58ohDUtTQ0yHUIkz%2BN8WKhBtAbUj1Y7DSJWgcI5FmLX7LhluiCB1v%2FWDqsCxi3rVtLyv6pKdN01emcqQJqwkjTsUBAp6OSnltJJJZYUL19rVLGr66qKv7dUEWayz9WClXFvgtTc4pF%2FUWQMSgYxoREQld8QpgloyyXTjLTOaa7rQ1s5LIbbupV7UNnA6Jg%2BZaeGgT7Ar0iqNj7xCGakpA2Zx%2F4NaGM2w57wjOQac14WRLaMF11ye4du5VQObzTnEK5vnoNVNGGIf3ZmujMnnGiS%2ByTDrHbHmiZfTwK%2FWGruYT47W71VBPaMFr2l8Eqsc%2FeYACaxrwsT4rKpWzhzHP5zvkhJoy2CO9THOYdN9AYk3aI7QtoV1VCyVrI8TwuZxZLIJf%2F%2FyRyBYjyBvJMOSP9MQGOqUBnM0IDzBQ1Wg1a2fQEe3kClL6pzZxMcF5zTZayDIqFaD42BIp5C3m5tF9s2ENowZgaSA2HIUhaFDbQB37YCVUG%2BNDOyV2%2FSR2f0fNgM6iv3Ywc3B9YrGJibXDllGNITeUb9357TqSbx6nK%2FlpCpOEBp%2BYgCUAvcIvd9zBQAcBIihcgXtbczWSDTIX1i33IhkBI22dZQ3i98%2FW%2BiUkbpfuPlD2qTFt&X-Amz-Signature=81f650f8e4c78ca8a2b015e312c412083ed7b62c1b56f527dd446efe1c5b6c9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TTTF2EO%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRgYgbiPiBqdKdqSmCnMrx%2Fwhz4uO4J19b9zzK18spOQIgKNfxe1nWKkZ979jazcXPrqiLtZY71tEBdAr61CaIeDEq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDM8nVm462T8ZyJoOlyrcA6bpewjGLoBZxvu7%2BNDXToujAVhXk75g%2F%2FgJi0DEC7B%2F11VbSz%2B0fAekdVu%2FfFKDR41uSDVS456DYou3TzwIbpjuni2Wq0Ki%2B50YIk2APDdlE9rdhe1sncnB2IShVdM0InJKdD8hftYTElWqJjU9cfV2ii7vZBngbhwguiiDKZBCIhJnQSQJo5lqI6%2BjakksdQikVhk5tRyR25CO5wUS3%2F40X3CHuQYji4FV7EHTJ%2BJ58ohDUtTQ0yHUIkz%2BN8WKhBtAbUj1Y7DSJWgcI5FmLX7LhluiCB1v%2FWDqsCxi3rVtLyv6pKdN01emcqQJqwkjTsUBAp6OSnltJJJZYUL19rVLGr66qKv7dUEWayz9WClXFvgtTc4pF%2FUWQMSgYxoREQld8QpgloyyXTjLTOaa7rQ1s5LIbbupV7UNnA6Jg%2BZaeGgT7Ar0iqNj7xCGakpA2Zx%2F4NaGM2w57wjOQac14WRLaMF11ye4du5VQObzTnEK5vnoNVNGGIf3ZmujMnnGiS%2ByTDrHbHmiZfTwK%2FWGruYT47W71VBPaMFr2l8Eqsc%2FeYACaxrwsT4rKpWzhzHP5zvkhJoy2CO9THOYdN9AYk3aI7QtoV1VCyVrI8TwuZxZLIJf%2F%2FyRyBYjyBvJMOSP9MQGOqUBnM0IDzBQ1Wg1a2fQEe3kClL6pzZxMcF5zTZayDIqFaD42BIp5C3m5tF9s2ENowZgaSA2HIUhaFDbQB37YCVUG%2BNDOyV2%2FSR2f0fNgM6iv3Ywc3B9YrGJibXDllGNITeUb9357TqSbx6nK%2FlpCpOEBp%2BYgCUAvcIvd9zBQAcBIihcgXtbczWSDTIX1i33IhkBI22dZQ3i98%2FW%2BiUkbpfuPlD2qTFt&X-Amz-Signature=8e05062fa0bf28044868a868e8335557d9c7c72c6c53ae9414bd2067d8ccd893&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
