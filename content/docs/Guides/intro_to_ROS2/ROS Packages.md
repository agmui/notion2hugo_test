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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPVVT4UC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCZEhQA9XPIrmBKD1BludbR3jFkLUQA1lTGkgK5n2xe%2FQIhAK4C2Qc4MS%2Fu%2FZQFYj%2FJ16WJtlKkfeIzjI1aPKv514RbKv8DCHEQABoMNjM3NDIzMTgzODA1IgymyJcIyL0XIrhF1Z4q3APql%2FZUiFGyV%2Fp3hytYdzMTfovi7cW%2FFHdfJ1qi2QnZofJjmY1oHfCtfAWAIfajxaL48cKF%2Fqj0zN2s70nw%2BIHN9P31k5VudoNQA4ERV6BW9o2oCmOWedEjQNc%2F%2Bsf1OItwzB%2FuT2uXaEAxTfS2ueCkd5lhJHumlGg26mPqNsE3LyYmdi54uuoRXRzFw%2FSrImPh%2FrTG1LCABkD0PByt24nBHnnuZUjrLPjI%2FDRiqg3RK3RDUpN9CASufTVVE4LNvWjmQbaNjlX1ggBCw67lFcO5ZtEWOv8Q78emfWcfSeue9LP%2FsuK8q%2FTXX68ScOKHzdLgXhrgjeDzFit7iEieLa8MDQLO2wl%2FeLaS1klNW4X%2B1XYy8D5%2FKfFyXHgUyC333WhvXmyOn9usPFUivxrjprvNRJNqmXya7LZgi2qutIMc1LP%2F%2BP8ZreBjhTTiQlMSM12iCC95q%2BcFQD1mO%2FI2uL5Y7nVylK758A3JC7Z8B3kiyrmvsb0CHxAAe7VQkSharpEzHwOJvD7yo5vn14LJRn0qFC%2FQCHAb%2BIYMib7D4nS649018mdl%2By64Y9z1sMTDOxSofn0JiiKySdkw3yELqs26XKCfvHu9axwWQ0SQec5xi4BT3JF9sC2%2FXVHGNTCTl8zEBjqkAVcx%2BR0g4ptllB4x2enjvqfUZxH3Oz2s2ZcXA95EU6KRcumVH8mQi%2BLRj0atr4DQ7qLm1fSnYAurpvDJTsyRXxAJSpaGELtB3lXTDYBEnwTniqxOdc2QkoLQRK6QOSH7XP4XsARfuhRH0qUP4ntBLjQ82ot1Sgl%2BCR54XZypyLNMRxckUyIi5loGvE40BLNKsOnXD5pZ4IEuVzQD0bKeA%2BB3Lhyg&X-Amz-Signature=55fe7e8c27ffcc1e03b98453dc68b0039cc0ce24eeced3ebda61a5f28277d012&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPVVT4UC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCZEhQA9XPIrmBKD1BludbR3jFkLUQA1lTGkgK5n2xe%2FQIhAK4C2Qc4MS%2Fu%2FZQFYj%2FJ16WJtlKkfeIzjI1aPKv514RbKv8DCHEQABoMNjM3NDIzMTgzODA1IgymyJcIyL0XIrhF1Z4q3APql%2FZUiFGyV%2Fp3hytYdzMTfovi7cW%2FFHdfJ1qi2QnZofJjmY1oHfCtfAWAIfajxaL48cKF%2Fqj0zN2s70nw%2BIHN9P31k5VudoNQA4ERV6BW9o2oCmOWedEjQNc%2F%2Bsf1OItwzB%2FuT2uXaEAxTfS2ueCkd5lhJHumlGg26mPqNsE3LyYmdi54uuoRXRzFw%2FSrImPh%2FrTG1LCABkD0PByt24nBHnnuZUjrLPjI%2FDRiqg3RK3RDUpN9CASufTVVE4LNvWjmQbaNjlX1ggBCw67lFcO5ZtEWOv8Q78emfWcfSeue9LP%2FsuK8q%2FTXX68ScOKHzdLgXhrgjeDzFit7iEieLa8MDQLO2wl%2FeLaS1klNW4X%2B1XYy8D5%2FKfFyXHgUyC333WhvXmyOn9usPFUivxrjprvNRJNqmXya7LZgi2qutIMc1LP%2F%2BP8ZreBjhTTiQlMSM12iCC95q%2BcFQD1mO%2FI2uL5Y7nVylK758A3JC7Z8B3kiyrmvsb0CHxAAe7VQkSharpEzHwOJvD7yo5vn14LJRn0qFC%2FQCHAb%2BIYMib7D4nS649018mdl%2By64Y9z1sMTDOxSofn0JiiKySdkw3yELqs26XKCfvHu9axwWQ0SQec5xi4BT3JF9sC2%2FXVHGNTCTl8zEBjqkAVcx%2BR0g4ptllB4x2enjvqfUZxH3Oz2s2ZcXA95EU6KRcumVH8mQi%2BLRj0atr4DQ7qLm1fSnYAurpvDJTsyRXxAJSpaGELtB3lXTDYBEnwTniqxOdc2QkoLQRK6QOSH7XP4XsARfuhRH0qUP4ntBLjQ82ot1Sgl%2BCR54XZypyLNMRxckUyIi5loGvE40BLNKsOnXD5pZ4IEuVzQD0bKeA%2BB3Lhyg&X-Amz-Signature=cbc5d628f86c5a06e99dc9b1f27547edc5abdd416407f44392ea2fe54093037f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPVVT4UC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCZEhQA9XPIrmBKD1BludbR3jFkLUQA1lTGkgK5n2xe%2FQIhAK4C2Qc4MS%2Fu%2FZQFYj%2FJ16WJtlKkfeIzjI1aPKv514RbKv8DCHEQABoMNjM3NDIzMTgzODA1IgymyJcIyL0XIrhF1Z4q3APql%2FZUiFGyV%2Fp3hytYdzMTfovi7cW%2FFHdfJ1qi2QnZofJjmY1oHfCtfAWAIfajxaL48cKF%2Fqj0zN2s70nw%2BIHN9P31k5VudoNQA4ERV6BW9o2oCmOWedEjQNc%2F%2Bsf1OItwzB%2FuT2uXaEAxTfS2ueCkd5lhJHumlGg26mPqNsE3LyYmdi54uuoRXRzFw%2FSrImPh%2FrTG1LCABkD0PByt24nBHnnuZUjrLPjI%2FDRiqg3RK3RDUpN9CASufTVVE4LNvWjmQbaNjlX1ggBCw67lFcO5ZtEWOv8Q78emfWcfSeue9LP%2FsuK8q%2FTXX68ScOKHzdLgXhrgjeDzFit7iEieLa8MDQLO2wl%2FeLaS1klNW4X%2B1XYy8D5%2FKfFyXHgUyC333WhvXmyOn9usPFUivxrjprvNRJNqmXya7LZgi2qutIMc1LP%2F%2BP8ZreBjhTTiQlMSM12iCC95q%2BcFQD1mO%2FI2uL5Y7nVylK758A3JC7Z8B3kiyrmvsb0CHxAAe7VQkSharpEzHwOJvD7yo5vn14LJRn0qFC%2FQCHAb%2BIYMib7D4nS649018mdl%2By64Y9z1sMTDOxSofn0JiiKySdkw3yELqs26XKCfvHu9axwWQ0SQec5xi4BT3JF9sC2%2FXVHGNTCTl8zEBjqkAVcx%2BR0g4ptllB4x2enjvqfUZxH3Oz2s2ZcXA95EU6KRcumVH8mQi%2BLRj0atr4DQ7qLm1fSnYAurpvDJTsyRXxAJSpaGELtB3lXTDYBEnwTniqxOdc2QkoLQRK6QOSH7XP4XsARfuhRH0qUP4ntBLjQ82ot1Sgl%2BCR54XZypyLNMRxckUyIi5loGvE40BLNKsOnXD5pZ4IEuVzQD0bKeA%2BB3Lhyg&X-Amz-Signature=b2f61b44746a5cd1604ab0b765091e85d452c0da093e9c92c939eae5a27c8d4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPVVT4UC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCZEhQA9XPIrmBKD1BludbR3jFkLUQA1lTGkgK5n2xe%2FQIhAK4C2Qc4MS%2Fu%2FZQFYj%2FJ16WJtlKkfeIzjI1aPKv514RbKv8DCHEQABoMNjM3NDIzMTgzODA1IgymyJcIyL0XIrhF1Z4q3APql%2FZUiFGyV%2Fp3hytYdzMTfovi7cW%2FFHdfJ1qi2QnZofJjmY1oHfCtfAWAIfajxaL48cKF%2Fqj0zN2s70nw%2BIHN9P31k5VudoNQA4ERV6BW9o2oCmOWedEjQNc%2F%2Bsf1OItwzB%2FuT2uXaEAxTfS2ueCkd5lhJHumlGg26mPqNsE3LyYmdi54uuoRXRzFw%2FSrImPh%2FrTG1LCABkD0PByt24nBHnnuZUjrLPjI%2FDRiqg3RK3RDUpN9CASufTVVE4LNvWjmQbaNjlX1ggBCw67lFcO5ZtEWOv8Q78emfWcfSeue9LP%2FsuK8q%2FTXX68ScOKHzdLgXhrgjeDzFit7iEieLa8MDQLO2wl%2FeLaS1klNW4X%2B1XYy8D5%2FKfFyXHgUyC333WhvXmyOn9usPFUivxrjprvNRJNqmXya7LZgi2qutIMc1LP%2F%2BP8ZreBjhTTiQlMSM12iCC95q%2BcFQD1mO%2FI2uL5Y7nVylK758A3JC7Z8B3kiyrmvsb0CHxAAe7VQkSharpEzHwOJvD7yo5vn14LJRn0qFC%2FQCHAb%2BIYMib7D4nS649018mdl%2By64Y9z1sMTDOxSofn0JiiKySdkw3yELqs26XKCfvHu9axwWQ0SQec5xi4BT3JF9sC2%2FXVHGNTCTl8zEBjqkAVcx%2BR0g4ptllB4x2enjvqfUZxH3Oz2s2ZcXA95EU6KRcumVH8mQi%2BLRj0atr4DQ7qLm1fSnYAurpvDJTsyRXxAJSpaGELtB3lXTDYBEnwTniqxOdc2QkoLQRK6QOSH7XP4XsARfuhRH0qUP4ntBLjQ82ot1Sgl%2BCR54XZypyLNMRxckUyIi5loGvE40BLNKsOnXD5pZ4IEuVzQD0bKeA%2BB3Lhyg&X-Amz-Signature=009a95a3eecad9b1b1be76cf67e78dee5f9169a36016732f55530807094a2851&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPVVT4UC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCZEhQA9XPIrmBKD1BludbR3jFkLUQA1lTGkgK5n2xe%2FQIhAK4C2Qc4MS%2Fu%2FZQFYj%2FJ16WJtlKkfeIzjI1aPKv514RbKv8DCHEQABoMNjM3NDIzMTgzODA1IgymyJcIyL0XIrhF1Z4q3APql%2FZUiFGyV%2Fp3hytYdzMTfovi7cW%2FFHdfJ1qi2QnZofJjmY1oHfCtfAWAIfajxaL48cKF%2Fqj0zN2s70nw%2BIHN9P31k5VudoNQA4ERV6BW9o2oCmOWedEjQNc%2F%2Bsf1OItwzB%2FuT2uXaEAxTfS2ueCkd5lhJHumlGg26mPqNsE3LyYmdi54uuoRXRzFw%2FSrImPh%2FrTG1LCABkD0PByt24nBHnnuZUjrLPjI%2FDRiqg3RK3RDUpN9CASufTVVE4LNvWjmQbaNjlX1ggBCw67lFcO5ZtEWOv8Q78emfWcfSeue9LP%2FsuK8q%2FTXX68ScOKHzdLgXhrgjeDzFit7iEieLa8MDQLO2wl%2FeLaS1klNW4X%2B1XYy8D5%2FKfFyXHgUyC333WhvXmyOn9usPFUivxrjprvNRJNqmXya7LZgi2qutIMc1LP%2F%2BP8ZreBjhTTiQlMSM12iCC95q%2BcFQD1mO%2FI2uL5Y7nVylK758A3JC7Z8B3kiyrmvsb0CHxAAe7VQkSharpEzHwOJvD7yo5vn14LJRn0qFC%2FQCHAb%2BIYMib7D4nS649018mdl%2By64Y9z1sMTDOxSofn0JiiKySdkw3yELqs26XKCfvHu9axwWQ0SQec5xi4BT3JF9sC2%2FXVHGNTCTl8zEBjqkAVcx%2BR0g4ptllB4x2enjvqfUZxH3Oz2s2ZcXA95EU6KRcumVH8mQi%2BLRj0atr4DQ7qLm1fSnYAurpvDJTsyRXxAJSpaGELtB3lXTDYBEnwTniqxOdc2QkoLQRK6QOSH7XP4XsARfuhRH0qUP4ntBLjQ82ot1Sgl%2BCR54XZypyLNMRxckUyIi5loGvE40BLNKsOnXD5pZ4IEuVzQD0bKeA%2BB3Lhyg&X-Amz-Signature=3fd183ef00d4a16920fea915f65880ff0e3033fe544bc2c6c9003fd6b3efe5eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPVVT4UC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCZEhQA9XPIrmBKD1BludbR3jFkLUQA1lTGkgK5n2xe%2FQIhAK4C2Qc4MS%2Fu%2FZQFYj%2FJ16WJtlKkfeIzjI1aPKv514RbKv8DCHEQABoMNjM3NDIzMTgzODA1IgymyJcIyL0XIrhF1Z4q3APql%2FZUiFGyV%2Fp3hytYdzMTfovi7cW%2FFHdfJ1qi2QnZofJjmY1oHfCtfAWAIfajxaL48cKF%2Fqj0zN2s70nw%2BIHN9P31k5VudoNQA4ERV6BW9o2oCmOWedEjQNc%2F%2Bsf1OItwzB%2FuT2uXaEAxTfS2ueCkd5lhJHumlGg26mPqNsE3LyYmdi54uuoRXRzFw%2FSrImPh%2FrTG1LCABkD0PByt24nBHnnuZUjrLPjI%2FDRiqg3RK3RDUpN9CASufTVVE4LNvWjmQbaNjlX1ggBCw67lFcO5ZtEWOv8Q78emfWcfSeue9LP%2FsuK8q%2FTXX68ScOKHzdLgXhrgjeDzFit7iEieLa8MDQLO2wl%2FeLaS1klNW4X%2B1XYy8D5%2FKfFyXHgUyC333WhvXmyOn9usPFUivxrjprvNRJNqmXya7LZgi2qutIMc1LP%2F%2BP8ZreBjhTTiQlMSM12iCC95q%2BcFQD1mO%2FI2uL5Y7nVylK758A3JC7Z8B3kiyrmvsb0CHxAAe7VQkSharpEzHwOJvD7yo5vn14LJRn0qFC%2FQCHAb%2BIYMib7D4nS649018mdl%2By64Y9z1sMTDOxSofn0JiiKySdkw3yELqs26XKCfvHu9axwWQ0SQec5xi4BT3JF9sC2%2FXVHGNTCTl8zEBjqkAVcx%2BR0g4ptllB4x2enjvqfUZxH3Oz2s2ZcXA95EU6KRcumVH8mQi%2BLRj0atr4DQ7qLm1fSnYAurpvDJTsyRXxAJSpaGELtB3lXTDYBEnwTniqxOdc2QkoLQRK6QOSH7XP4XsARfuhRH0qUP4ntBLjQ82ot1Sgl%2BCR54XZypyLNMRxckUyIi5loGvE40BLNKsOnXD5pZ4IEuVzQD0bKeA%2BB3Lhyg&X-Amz-Signature=b969909f89d78e08b3135e06d7721155dc07945ffd1c03ad9542e74a14e8c7ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPVVT4UC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCZEhQA9XPIrmBKD1BludbR3jFkLUQA1lTGkgK5n2xe%2FQIhAK4C2Qc4MS%2Fu%2FZQFYj%2FJ16WJtlKkfeIzjI1aPKv514RbKv8DCHEQABoMNjM3NDIzMTgzODA1IgymyJcIyL0XIrhF1Z4q3APql%2FZUiFGyV%2Fp3hytYdzMTfovi7cW%2FFHdfJ1qi2QnZofJjmY1oHfCtfAWAIfajxaL48cKF%2Fqj0zN2s70nw%2BIHN9P31k5VudoNQA4ERV6BW9o2oCmOWedEjQNc%2F%2Bsf1OItwzB%2FuT2uXaEAxTfS2ueCkd5lhJHumlGg26mPqNsE3LyYmdi54uuoRXRzFw%2FSrImPh%2FrTG1LCABkD0PByt24nBHnnuZUjrLPjI%2FDRiqg3RK3RDUpN9CASufTVVE4LNvWjmQbaNjlX1ggBCw67lFcO5ZtEWOv8Q78emfWcfSeue9LP%2FsuK8q%2FTXX68ScOKHzdLgXhrgjeDzFit7iEieLa8MDQLO2wl%2FeLaS1klNW4X%2B1XYy8D5%2FKfFyXHgUyC333WhvXmyOn9usPFUivxrjprvNRJNqmXya7LZgi2qutIMc1LP%2F%2BP8ZreBjhTTiQlMSM12iCC95q%2BcFQD1mO%2FI2uL5Y7nVylK758A3JC7Z8B3kiyrmvsb0CHxAAe7VQkSharpEzHwOJvD7yo5vn14LJRn0qFC%2FQCHAb%2BIYMib7D4nS649018mdl%2By64Y9z1sMTDOxSofn0JiiKySdkw3yELqs26XKCfvHu9axwWQ0SQec5xi4BT3JF9sC2%2FXVHGNTCTl8zEBjqkAVcx%2BR0g4ptllB4x2enjvqfUZxH3Oz2s2ZcXA95EU6KRcumVH8mQi%2BLRj0atr4DQ7qLm1fSnYAurpvDJTsyRXxAJSpaGELtB3lXTDYBEnwTniqxOdc2QkoLQRK6QOSH7XP4XsARfuhRH0qUP4ntBLjQ82ot1Sgl%2BCR54XZypyLNMRxckUyIi5loGvE40BLNKsOnXD5pZ4IEuVzQD0bKeA%2BB3Lhyg&X-Amz-Signature=97d16a8fc5aad1c0ab368f9442c21602b34064c7f4a655c1333f22d02d460958&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
