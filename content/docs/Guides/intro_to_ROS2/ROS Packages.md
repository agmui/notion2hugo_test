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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJMYLF4R%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T181047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvuIXrNGqKNUEbh3QgBBj61AGe%2FfDtlGvaYJwSnXFgawIhAIh9%2Bimc4B7T%2BvBjof%2BqjaO8Cg89N1julOatmbk3UAaFKv8DCHcQABoMNjM3NDIzMTgzODA1Igyfq2yYJx9r6ZkrWzEq3AN3cfnxDDHhgBy0Sfa3k%2Fh0iScsv75o%2Fiz%2BxPyad9t5eBJEE5FpV0lpX3erPGrA53QVR5U1KVYdcK2WlybGj2Vs3eay%2F1cER2s4I0w6H5OoKNGX200YSYhsvnOjaJ93%2BRQc954ToefiixEd3wjmeBXCkgrG3B36euvwUKUWGMtkZIzWOORFG7a%2B%2BqpwOkNj%2BRgkAKHzGxx9YCiDMAqkzl0AVT16zRYgjCEgF9PPHkhRe0wkzsyrr%2FoPi6QehK5sdOGW9ZXXM8Oj2NM%2BMXo0j2D5sRrCtqDGj1nHtMUPg%2F5fZO7rH9LaZlqls4xlp84OT3bHUBJmZQAnsp6NCSQ%2B84bknGm0gLyIT8DN1ahH6F19bFMxBKgLlgjYbWLrRb%2B8i%2B20SFwII4LVmo9zWLc5%2BwamsXIsuAs3UM0%2FjUcSt66E4sFV4m31Oz%2BMmWyAyeFEyDZdNN0K8JKctpTFrotpCSoRr1JrgzckTROWtbetgT0AqYr%2Be66hUODOe73PPaX1QiT58Em%2FNS%2FrerfsrqwXoWDdAGL2gH54YGS2Q0MzBWV7L%2FAofo1yJJjTrx7nbsvN58lw7l4mz1RGFEVasgzz%2BCiNZZ2aIWAbeBnWSnQb%2FJ3112uURAUeG9hGLMZVYTC9gZHCBjqkATWCzCWcOpjkZPNR3pOdqdFHhnH2ElK3TcwJXD0qG9jiV9yRo3nYrsMzQNAfWM7GsI9WZD6Vhz9pczuHlxYija5reKGQnrEXpykPb025yetikRADDLDpxW8AxzD1CYuW5Ubpk5zSon8BtNYWEV8bleYGGRiaDe2pn51TFNQwrl2hq8a3mRvL8WlJjUdAE67xwwQ1ObFcc2gfJELwlzkXcfJN4v%2BA&X-Amz-Signature=e47d580b9c27f1753a366a3942501aee971276ffae386fa7792920cc8a1cee34&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJMYLF4R%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T181047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvuIXrNGqKNUEbh3QgBBj61AGe%2FfDtlGvaYJwSnXFgawIhAIh9%2Bimc4B7T%2BvBjof%2BqjaO8Cg89N1julOatmbk3UAaFKv8DCHcQABoMNjM3NDIzMTgzODA1Igyfq2yYJx9r6ZkrWzEq3AN3cfnxDDHhgBy0Sfa3k%2Fh0iScsv75o%2Fiz%2BxPyad9t5eBJEE5FpV0lpX3erPGrA53QVR5U1KVYdcK2WlybGj2Vs3eay%2F1cER2s4I0w6H5OoKNGX200YSYhsvnOjaJ93%2BRQc954ToefiixEd3wjmeBXCkgrG3B36euvwUKUWGMtkZIzWOORFG7a%2B%2BqpwOkNj%2BRgkAKHzGxx9YCiDMAqkzl0AVT16zRYgjCEgF9PPHkhRe0wkzsyrr%2FoPi6QehK5sdOGW9ZXXM8Oj2NM%2BMXo0j2D5sRrCtqDGj1nHtMUPg%2F5fZO7rH9LaZlqls4xlp84OT3bHUBJmZQAnsp6NCSQ%2B84bknGm0gLyIT8DN1ahH6F19bFMxBKgLlgjYbWLrRb%2B8i%2B20SFwII4LVmo9zWLc5%2BwamsXIsuAs3UM0%2FjUcSt66E4sFV4m31Oz%2BMmWyAyeFEyDZdNN0K8JKctpTFrotpCSoRr1JrgzckTROWtbetgT0AqYr%2Be66hUODOe73PPaX1QiT58Em%2FNS%2FrerfsrqwXoWDdAGL2gH54YGS2Q0MzBWV7L%2FAofo1yJJjTrx7nbsvN58lw7l4mz1RGFEVasgzz%2BCiNZZ2aIWAbeBnWSnQb%2FJ3112uURAUeG9hGLMZVYTC9gZHCBjqkATWCzCWcOpjkZPNR3pOdqdFHhnH2ElK3TcwJXD0qG9jiV9yRo3nYrsMzQNAfWM7GsI9WZD6Vhz9pczuHlxYija5reKGQnrEXpykPb025yetikRADDLDpxW8AxzD1CYuW5Ubpk5zSon8BtNYWEV8bleYGGRiaDe2pn51TFNQwrl2hq8a3mRvL8WlJjUdAE67xwwQ1ObFcc2gfJELwlzkXcfJN4v%2BA&X-Amz-Signature=871aa2ece487328ecdc8e404c31afd55e5cf6f643bb1043d966408893622ada4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJMYLF4R%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T181047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvuIXrNGqKNUEbh3QgBBj61AGe%2FfDtlGvaYJwSnXFgawIhAIh9%2Bimc4B7T%2BvBjof%2BqjaO8Cg89N1julOatmbk3UAaFKv8DCHcQABoMNjM3NDIzMTgzODA1Igyfq2yYJx9r6ZkrWzEq3AN3cfnxDDHhgBy0Sfa3k%2Fh0iScsv75o%2Fiz%2BxPyad9t5eBJEE5FpV0lpX3erPGrA53QVR5U1KVYdcK2WlybGj2Vs3eay%2F1cER2s4I0w6H5OoKNGX200YSYhsvnOjaJ93%2BRQc954ToefiixEd3wjmeBXCkgrG3B36euvwUKUWGMtkZIzWOORFG7a%2B%2BqpwOkNj%2BRgkAKHzGxx9YCiDMAqkzl0AVT16zRYgjCEgF9PPHkhRe0wkzsyrr%2FoPi6QehK5sdOGW9ZXXM8Oj2NM%2BMXo0j2D5sRrCtqDGj1nHtMUPg%2F5fZO7rH9LaZlqls4xlp84OT3bHUBJmZQAnsp6NCSQ%2B84bknGm0gLyIT8DN1ahH6F19bFMxBKgLlgjYbWLrRb%2B8i%2B20SFwII4LVmo9zWLc5%2BwamsXIsuAs3UM0%2FjUcSt66E4sFV4m31Oz%2BMmWyAyeFEyDZdNN0K8JKctpTFrotpCSoRr1JrgzckTROWtbetgT0AqYr%2Be66hUODOe73PPaX1QiT58Em%2FNS%2FrerfsrqwXoWDdAGL2gH54YGS2Q0MzBWV7L%2FAofo1yJJjTrx7nbsvN58lw7l4mz1RGFEVasgzz%2BCiNZZ2aIWAbeBnWSnQb%2FJ3112uURAUeG9hGLMZVYTC9gZHCBjqkATWCzCWcOpjkZPNR3pOdqdFHhnH2ElK3TcwJXD0qG9jiV9yRo3nYrsMzQNAfWM7GsI9WZD6Vhz9pczuHlxYija5reKGQnrEXpykPb025yetikRADDLDpxW8AxzD1CYuW5Ubpk5zSon8BtNYWEV8bleYGGRiaDe2pn51TFNQwrl2hq8a3mRvL8WlJjUdAE67xwwQ1ObFcc2gfJELwlzkXcfJN4v%2BA&X-Amz-Signature=9bfec02ada9b45e99a90a31ea6cb7df3c2c18e570f5c1ab11b23847c46f376ca&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJMYLF4R%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T181047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvuIXrNGqKNUEbh3QgBBj61AGe%2FfDtlGvaYJwSnXFgawIhAIh9%2Bimc4B7T%2BvBjof%2BqjaO8Cg89N1julOatmbk3UAaFKv8DCHcQABoMNjM3NDIzMTgzODA1Igyfq2yYJx9r6ZkrWzEq3AN3cfnxDDHhgBy0Sfa3k%2Fh0iScsv75o%2Fiz%2BxPyad9t5eBJEE5FpV0lpX3erPGrA53QVR5U1KVYdcK2WlybGj2Vs3eay%2F1cER2s4I0w6H5OoKNGX200YSYhsvnOjaJ93%2BRQc954ToefiixEd3wjmeBXCkgrG3B36euvwUKUWGMtkZIzWOORFG7a%2B%2BqpwOkNj%2BRgkAKHzGxx9YCiDMAqkzl0AVT16zRYgjCEgF9PPHkhRe0wkzsyrr%2FoPi6QehK5sdOGW9ZXXM8Oj2NM%2BMXo0j2D5sRrCtqDGj1nHtMUPg%2F5fZO7rH9LaZlqls4xlp84OT3bHUBJmZQAnsp6NCSQ%2B84bknGm0gLyIT8DN1ahH6F19bFMxBKgLlgjYbWLrRb%2B8i%2B20SFwII4LVmo9zWLc5%2BwamsXIsuAs3UM0%2FjUcSt66E4sFV4m31Oz%2BMmWyAyeFEyDZdNN0K8JKctpTFrotpCSoRr1JrgzckTROWtbetgT0AqYr%2Be66hUODOe73PPaX1QiT58Em%2FNS%2FrerfsrqwXoWDdAGL2gH54YGS2Q0MzBWV7L%2FAofo1yJJjTrx7nbsvN58lw7l4mz1RGFEVasgzz%2BCiNZZ2aIWAbeBnWSnQb%2FJ3112uURAUeG9hGLMZVYTC9gZHCBjqkATWCzCWcOpjkZPNR3pOdqdFHhnH2ElK3TcwJXD0qG9jiV9yRo3nYrsMzQNAfWM7GsI9WZD6Vhz9pczuHlxYija5reKGQnrEXpykPb025yetikRADDLDpxW8AxzD1CYuW5Ubpk5zSon8BtNYWEV8bleYGGRiaDe2pn51TFNQwrl2hq8a3mRvL8WlJjUdAE67xwwQ1ObFcc2gfJELwlzkXcfJN4v%2BA&X-Amz-Signature=80040fa704e5990920a69ece0c84ffdd5cf15086aa6fc6bdf0de17e7b21073e5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJMYLF4R%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T181047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvuIXrNGqKNUEbh3QgBBj61AGe%2FfDtlGvaYJwSnXFgawIhAIh9%2Bimc4B7T%2BvBjof%2BqjaO8Cg89N1julOatmbk3UAaFKv8DCHcQABoMNjM3NDIzMTgzODA1Igyfq2yYJx9r6ZkrWzEq3AN3cfnxDDHhgBy0Sfa3k%2Fh0iScsv75o%2Fiz%2BxPyad9t5eBJEE5FpV0lpX3erPGrA53QVR5U1KVYdcK2WlybGj2Vs3eay%2F1cER2s4I0w6H5OoKNGX200YSYhsvnOjaJ93%2BRQc954ToefiixEd3wjmeBXCkgrG3B36euvwUKUWGMtkZIzWOORFG7a%2B%2BqpwOkNj%2BRgkAKHzGxx9YCiDMAqkzl0AVT16zRYgjCEgF9PPHkhRe0wkzsyrr%2FoPi6QehK5sdOGW9ZXXM8Oj2NM%2BMXo0j2D5sRrCtqDGj1nHtMUPg%2F5fZO7rH9LaZlqls4xlp84OT3bHUBJmZQAnsp6NCSQ%2B84bknGm0gLyIT8DN1ahH6F19bFMxBKgLlgjYbWLrRb%2B8i%2B20SFwII4LVmo9zWLc5%2BwamsXIsuAs3UM0%2FjUcSt66E4sFV4m31Oz%2BMmWyAyeFEyDZdNN0K8JKctpTFrotpCSoRr1JrgzckTROWtbetgT0AqYr%2Be66hUODOe73PPaX1QiT58Em%2FNS%2FrerfsrqwXoWDdAGL2gH54YGS2Q0MzBWV7L%2FAofo1yJJjTrx7nbsvN58lw7l4mz1RGFEVasgzz%2BCiNZZ2aIWAbeBnWSnQb%2FJ3112uURAUeG9hGLMZVYTC9gZHCBjqkATWCzCWcOpjkZPNR3pOdqdFHhnH2ElK3TcwJXD0qG9jiV9yRo3nYrsMzQNAfWM7GsI9WZD6Vhz9pczuHlxYija5reKGQnrEXpykPb025yetikRADDLDpxW8AxzD1CYuW5Ubpk5zSon8BtNYWEV8bleYGGRiaDe2pn51TFNQwrl2hq8a3mRvL8WlJjUdAE67xwwQ1ObFcc2gfJELwlzkXcfJN4v%2BA&X-Amz-Signature=83b0f080f3df491a0eacd2cffa374477c84d145d9804d8b23f7b6af1df6de072&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJMYLF4R%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T181047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvuIXrNGqKNUEbh3QgBBj61AGe%2FfDtlGvaYJwSnXFgawIhAIh9%2Bimc4B7T%2BvBjof%2BqjaO8Cg89N1julOatmbk3UAaFKv8DCHcQABoMNjM3NDIzMTgzODA1Igyfq2yYJx9r6ZkrWzEq3AN3cfnxDDHhgBy0Sfa3k%2Fh0iScsv75o%2Fiz%2BxPyad9t5eBJEE5FpV0lpX3erPGrA53QVR5U1KVYdcK2WlybGj2Vs3eay%2F1cER2s4I0w6H5OoKNGX200YSYhsvnOjaJ93%2BRQc954ToefiixEd3wjmeBXCkgrG3B36euvwUKUWGMtkZIzWOORFG7a%2B%2BqpwOkNj%2BRgkAKHzGxx9YCiDMAqkzl0AVT16zRYgjCEgF9PPHkhRe0wkzsyrr%2FoPi6QehK5sdOGW9ZXXM8Oj2NM%2BMXo0j2D5sRrCtqDGj1nHtMUPg%2F5fZO7rH9LaZlqls4xlp84OT3bHUBJmZQAnsp6NCSQ%2B84bknGm0gLyIT8DN1ahH6F19bFMxBKgLlgjYbWLrRb%2B8i%2B20SFwII4LVmo9zWLc5%2BwamsXIsuAs3UM0%2FjUcSt66E4sFV4m31Oz%2BMmWyAyeFEyDZdNN0K8JKctpTFrotpCSoRr1JrgzckTROWtbetgT0AqYr%2Be66hUODOe73PPaX1QiT58Em%2FNS%2FrerfsrqwXoWDdAGL2gH54YGS2Q0MzBWV7L%2FAofo1yJJjTrx7nbsvN58lw7l4mz1RGFEVasgzz%2BCiNZZ2aIWAbeBnWSnQb%2FJ3112uURAUeG9hGLMZVYTC9gZHCBjqkATWCzCWcOpjkZPNR3pOdqdFHhnH2ElK3TcwJXD0qG9jiV9yRo3nYrsMzQNAfWM7GsI9WZD6Vhz9pczuHlxYija5reKGQnrEXpykPb025yetikRADDLDpxW8AxzD1CYuW5Ubpk5zSon8BtNYWEV8bleYGGRiaDe2pn51TFNQwrl2hq8a3mRvL8WlJjUdAE67xwwQ1ObFcc2gfJELwlzkXcfJN4v%2BA&X-Amz-Signature=ffc6a01e876ff13b60739f7e3fc28fcc403f2015fc20d88aed4f8e784d16d7d4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJMYLF4R%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T181047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvuIXrNGqKNUEbh3QgBBj61AGe%2FfDtlGvaYJwSnXFgawIhAIh9%2Bimc4B7T%2BvBjof%2BqjaO8Cg89N1julOatmbk3UAaFKv8DCHcQABoMNjM3NDIzMTgzODA1Igyfq2yYJx9r6ZkrWzEq3AN3cfnxDDHhgBy0Sfa3k%2Fh0iScsv75o%2Fiz%2BxPyad9t5eBJEE5FpV0lpX3erPGrA53QVR5U1KVYdcK2WlybGj2Vs3eay%2F1cER2s4I0w6H5OoKNGX200YSYhsvnOjaJ93%2BRQc954ToefiixEd3wjmeBXCkgrG3B36euvwUKUWGMtkZIzWOORFG7a%2B%2BqpwOkNj%2BRgkAKHzGxx9YCiDMAqkzl0AVT16zRYgjCEgF9PPHkhRe0wkzsyrr%2FoPi6QehK5sdOGW9ZXXM8Oj2NM%2BMXo0j2D5sRrCtqDGj1nHtMUPg%2F5fZO7rH9LaZlqls4xlp84OT3bHUBJmZQAnsp6NCSQ%2B84bknGm0gLyIT8DN1ahH6F19bFMxBKgLlgjYbWLrRb%2B8i%2B20SFwII4LVmo9zWLc5%2BwamsXIsuAs3UM0%2FjUcSt66E4sFV4m31Oz%2BMmWyAyeFEyDZdNN0K8JKctpTFrotpCSoRr1JrgzckTROWtbetgT0AqYr%2Be66hUODOe73PPaX1QiT58Em%2FNS%2FrerfsrqwXoWDdAGL2gH54YGS2Q0MzBWV7L%2FAofo1yJJjTrx7nbsvN58lw7l4mz1RGFEVasgzz%2BCiNZZ2aIWAbeBnWSnQb%2FJ3112uURAUeG9hGLMZVYTC9gZHCBjqkATWCzCWcOpjkZPNR3pOdqdFHhnH2ElK3TcwJXD0qG9jiV9yRo3nYrsMzQNAfWM7GsI9WZD6Vhz9pczuHlxYija5reKGQnrEXpykPb025yetikRADDLDpxW8AxzD1CYuW5Ubpk5zSon8BtNYWEV8bleYGGRiaDe2pn51TFNQwrl2hq8a3mRvL8WlJjUdAE67xwwQ1ObFcc2gfJELwlzkXcfJN4v%2BA&X-Amz-Signature=cb74e005c909f96761922d1306df6cd42f5a4f3ed874e08f9d7158441b9f03b8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
