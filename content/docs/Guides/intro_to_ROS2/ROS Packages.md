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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WITI5VBS%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T100740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDj9Jzm9YzGPhYNGNHrJ8OS57eteuSPtiTbeDeVvKV%2BIwIgFL0MZ4eeYk5GT%2F4M2Ut%2FBvtRDVEgdX3s1WJseNTKhfUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqg8W1l6Z7GvdkLCyrcA5M9pkGtsH3gWJWA3r%2BTGNIGIlq5BZlKn36z1AI5GY3k0ooSG05qnMwjzraX8JoB6eKiOtuHK72GZqamvsj1cTRQQ4aHIra0MnMhqOKz7%2B0BZi1v6Bga2CQG%2BrFwYYX08jvEZn3nXpHyIUJlZbE11WyKHBbv7LXqlIsTRcJBd%2BCWjMbl%2BZdgVl8MRT1fD%2BVZjl5mUAVEV5aGFspMvFbNGDH8BZNn9haq5D5dP4TqMF77Ph6KpWQIsYFtdscuc95r43hlnnrUI5a34IzDQlGbTJkr7WLxQ82WQ2MHACvd6jQZ20EcbEKybC7SO46zECEzTetnDHkblIDz%2Fh1baboU9MMaAmqdkcGDOOapq79J2MJK18oVBChVnPGAKXHTOhwMpeQF%2FaEXWFeARHWTmn2eDoN7J6eRk4FGnc2kIj4d3uk06EOzFVjKdHzkd6f%2B7AMmRdhcGjTeYkUidMYX%2FKnX8WV6uceBFQA7SC8wPleAGA%2FlXXm0EJ6cSzUepdRxRVUhfSRZe%2Bk02t3Xy3LCnRXTPqD8VUWt8w2viEXF0nx340W9eJofVKel6%2BAOnMQaf5YV%2F8h3nW%2BdTw8LifwUlWhi5glGZ%2BVhh42cboEOPoAod6K8P6EC%2FUxvxAc%2F0yOSMN6n6L8GOqUBO7JYidY%2Fxg7boLCjfZQh8JkimgHfD70X187Rl4GK0cOoayb9wN7TOsT%2BzVySBw7Z%2F7e%2FgvtlHTF5NH%2F%2FyZrGEt62R4fLG1gFkXkF3NUy%2FS5n%2FrWydm2Lv5GoPZem55jzTLBQwxGSCZwwsdUUFRjQY6bt61lFtHb7lTzb8HTMTWxupHBCTLAtANHn4xgMlLTtHWPzgaXCSq8IPP3IimzITyjTBdZS&X-Amz-Signature=2ceae2e8a722261463e07ea802b85219853998691b70e66b95ef15d2213b695e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WITI5VBS%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T100740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDj9Jzm9YzGPhYNGNHrJ8OS57eteuSPtiTbeDeVvKV%2BIwIgFL0MZ4eeYk5GT%2F4M2Ut%2FBvtRDVEgdX3s1WJseNTKhfUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqg8W1l6Z7GvdkLCyrcA5M9pkGtsH3gWJWA3r%2BTGNIGIlq5BZlKn36z1AI5GY3k0ooSG05qnMwjzraX8JoB6eKiOtuHK72GZqamvsj1cTRQQ4aHIra0MnMhqOKz7%2B0BZi1v6Bga2CQG%2BrFwYYX08jvEZn3nXpHyIUJlZbE11WyKHBbv7LXqlIsTRcJBd%2BCWjMbl%2BZdgVl8MRT1fD%2BVZjl5mUAVEV5aGFspMvFbNGDH8BZNn9haq5D5dP4TqMF77Ph6KpWQIsYFtdscuc95r43hlnnrUI5a34IzDQlGbTJkr7WLxQ82WQ2MHACvd6jQZ20EcbEKybC7SO46zECEzTetnDHkblIDz%2Fh1baboU9MMaAmqdkcGDOOapq79J2MJK18oVBChVnPGAKXHTOhwMpeQF%2FaEXWFeARHWTmn2eDoN7J6eRk4FGnc2kIj4d3uk06EOzFVjKdHzkd6f%2B7AMmRdhcGjTeYkUidMYX%2FKnX8WV6uceBFQA7SC8wPleAGA%2FlXXm0EJ6cSzUepdRxRVUhfSRZe%2Bk02t3Xy3LCnRXTPqD8VUWt8w2viEXF0nx340W9eJofVKel6%2BAOnMQaf5YV%2F8h3nW%2BdTw8LifwUlWhi5glGZ%2BVhh42cboEOPoAod6K8P6EC%2FUxvxAc%2F0yOSMN6n6L8GOqUBO7JYidY%2Fxg7boLCjfZQh8JkimgHfD70X187Rl4GK0cOoayb9wN7TOsT%2BzVySBw7Z%2F7e%2FgvtlHTF5NH%2F%2FyZrGEt62R4fLG1gFkXkF3NUy%2FS5n%2FrWydm2Lv5GoPZem55jzTLBQwxGSCZwwsdUUFRjQY6bt61lFtHb7lTzb8HTMTWxupHBCTLAtANHn4xgMlLTtHWPzgaXCSq8IPP3IimzITyjTBdZS&X-Amz-Signature=211328a0a1082af588d327dd3145f48d40874e5668ebbb6d7d3e04d88dc8868a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WITI5VBS%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T100740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDj9Jzm9YzGPhYNGNHrJ8OS57eteuSPtiTbeDeVvKV%2BIwIgFL0MZ4eeYk5GT%2F4M2Ut%2FBvtRDVEgdX3s1WJseNTKhfUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqg8W1l6Z7GvdkLCyrcA5M9pkGtsH3gWJWA3r%2BTGNIGIlq5BZlKn36z1AI5GY3k0ooSG05qnMwjzraX8JoB6eKiOtuHK72GZqamvsj1cTRQQ4aHIra0MnMhqOKz7%2B0BZi1v6Bga2CQG%2BrFwYYX08jvEZn3nXpHyIUJlZbE11WyKHBbv7LXqlIsTRcJBd%2BCWjMbl%2BZdgVl8MRT1fD%2BVZjl5mUAVEV5aGFspMvFbNGDH8BZNn9haq5D5dP4TqMF77Ph6KpWQIsYFtdscuc95r43hlnnrUI5a34IzDQlGbTJkr7WLxQ82WQ2MHACvd6jQZ20EcbEKybC7SO46zECEzTetnDHkblIDz%2Fh1baboU9MMaAmqdkcGDOOapq79J2MJK18oVBChVnPGAKXHTOhwMpeQF%2FaEXWFeARHWTmn2eDoN7J6eRk4FGnc2kIj4d3uk06EOzFVjKdHzkd6f%2B7AMmRdhcGjTeYkUidMYX%2FKnX8WV6uceBFQA7SC8wPleAGA%2FlXXm0EJ6cSzUepdRxRVUhfSRZe%2Bk02t3Xy3LCnRXTPqD8VUWt8w2viEXF0nx340W9eJofVKel6%2BAOnMQaf5YV%2F8h3nW%2BdTw8LifwUlWhi5glGZ%2BVhh42cboEOPoAod6K8P6EC%2FUxvxAc%2F0yOSMN6n6L8GOqUBO7JYidY%2Fxg7boLCjfZQh8JkimgHfD70X187Rl4GK0cOoayb9wN7TOsT%2BzVySBw7Z%2F7e%2FgvtlHTF5NH%2F%2FyZrGEt62R4fLG1gFkXkF3NUy%2FS5n%2FrWydm2Lv5GoPZem55jzTLBQwxGSCZwwsdUUFRjQY6bt61lFtHb7lTzb8HTMTWxupHBCTLAtANHn4xgMlLTtHWPzgaXCSq8IPP3IimzITyjTBdZS&X-Amz-Signature=1e0d929d30d2e2853f0fbbc1cb192073fc9493f2ffeab27f2be7f1fdb971601c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WITI5VBS%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T100740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDj9Jzm9YzGPhYNGNHrJ8OS57eteuSPtiTbeDeVvKV%2BIwIgFL0MZ4eeYk5GT%2F4M2Ut%2FBvtRDVEgdX3s1WJseNTKhfUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqg8W1l6Z7GvdkLCyrcA5M9pkGtsH3gWJWA3r%2BTGNIGIlq5BZlKn36z1AI5GY3k0ooSG05qnMwjzraX8JoB6eKiOtuHK72GZqamvsj1cTRQQ4aHIra0MnMhqOKz7%2B0BZi1v6Bga2CQG%2BrFwYYX08jvEZn3nXpHyIUJlZbE11WyKHBbv7LXqlIsTRcJBd%2BCWjMbl%2BZdgVl8MRT1fD%2BVZjl5mUAVEV5aGFspMvFbNGDH8BZNn9haq5D5dP4TqMF77Ph6KpWQIsYFtdscuc95r43hlnnrUI5a34IzDQlGbTJkr7WLxQ82WQ2MHACvd6jQZ20EcbEKybC7SO46zECEzTetnDHkblIDz%2Fh1baboU9MMaAmqdkcGDOOapq79J2MJK18oVBChVnPGAKXHTOhwMpeQF%2FaEXWFeARHWTmn2eDoN7J6eRk4FGnc2kIj4d3uk06EOzFVjKdHzkd6f%2B7AMmRdhcGjTeYkUidMYX%2FKnX8WV6uceBFQA7SC8wPleAGA%2FlXXm0EJ6cSzUepdRxRVUhfSRZe%2Bk02t3Xy3LCnRXTPqD8VUWt8w2viEXF0nx340W9eJofVKel6%2BAOnMQaf5YV%2F8h3nW%2BdTw8LifwUlWhi5glGZ%2BVhh42cboEOPoAod6K8P6EC%2FUxvxAc%2F0yOSMN6n6L8GOqUBO7JYidY%2Fxg7boLCjfZQh8JkimgHfD70X187Rl4GK0cOoayb9wN7TOsT%2BzVySBw7Z%2F7e%2FgvtlHTF5NH%2F%2FyZrGEt62R4fLG1gFkXkF3NUy%2FS5n%2FrWydm2Lv5GoPZem55jzTLBQwxGSCZwwsdUUFRjQY6bt61lFtHb7lTzb8HTMTWxupHBCTLAtANHn4xgMlLTtHWPzgaXCSq8IPP3IimzITyjTBdZS&X-Amz-Signature=e67edbde4fb83e2d33463f4cae6740d1a5d14b55b8dee1a5e269a169fd38ad0f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WITI5VBS%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T100740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDj9Jzm9YzGPhYNGNHrJ8OS57eteuSPtiTbeDeVvKV%2BIwIgFL0MZ4eeYk5GT%2F4M2Ut%2FBvtRDVEgdX3s1WJseNTKhfUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqg8W1l6Z7GvdkLCyrcA5M9pkGtsH3gWJWA3r%2BTGNIGIlq5BZlKn36z1AI5GY3k0ooSG05qnMwjzraX8JoB6eKiOtuHK72GZqamvsj1cTRQQ4aHIra0MnMhqOKz7%2B0BZi1v6Bga2CQG%2BrFwYYX08jvEZn3nXpHyIUJlZbE11WyKHBbv7LXqlIsTRcJBd%2BCWjMbl%2BZdgVl8MRT1fD%2BVZjl5mUAVEV5aGFspMvFbNGDH8BZNn9haq5D5dP4TqMF77Ph6KpWQIsYFtdscuc95r43hlnnrUI5a34IzDQlGbTJkr7WLxQ82WQ2MHACvd6jQZ20EcbEKybC7SO46zECEzTetnDHkblIDz%2Fh1baboU9MMaAmqdkcGDOOapq79J2MJK18oVBChVnPGAKXHTOhwMpeQF%2FaEXWFeARHWTmn2eDoN7J6eRk4FGnc2kIj4d3uk06EOzFVjKdHzkd6f%2B7AMmRdhcGjTeYkUidMYX%2FKnX8WV6uceBFQA7SC8wPleAGA%2FlXXm0EJ6cSzUepdRxRVUhfSRZe%2Bk02t3Xy3LCnRXTPqD8VUWt8w2viEXF0nx340W9eJofVKel6%2BAOnMQaf5YV%2F8h3nW%2BdTw8LifwUlWhi5glGZ%2BVhh42cboEOPoAod6K8P6EC%2FUxvxAc%2F0yOSMN6n6L8GOqUBO7JYidY%2Fxg7boLCjfZQh8JkimgHfD70X187Rl4GK0cOoayb9wN7TOsT%2BzVySBw7Z%2F7e%2FgvtlHTF5NH%2F%2FyZrGEt62R4fLG1gFkXkF3NUy%2FS5n%2FrWydm2Lv5GoPZem55jzTLBQwxGSCZwwsdUUFRjQY6bt61lFtHb7lTzb8HTMTWxupHBCTLAtANHn4xgMlLTtHWPzgaXCSq8IPP3IimzITyjTBdZS&X-Amz-Signature=026d61f7312300e2985f64305d7f9b0914d527a9e7343bae852c194122b58f3e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WITI5VBS%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T100740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDj9Jzm9YzGPhYNGNHrJ8OS57eteuSPtiTbeDeVvKV%2BIwIgFL0MZ4eeYk5GT%2F4M2Ut%2FBvtRDVEgdX3s1WJseNTKhfUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqg8W1l6Z7GvdkLCyrcA5M9pkGtsH3gWJWA3r%2BTGNIGIlq5BZlKn36z1AI5GY3k0ooSG05qnMwjzraX8JoB6eKiOtuHK72GZqamvsj1cTRQQ4aHIra0MnMhqOKz7%2B0BZi1v6Bga2CQG%2BrFwYYX08jvEZn3nXpHyIUJlZbE11WyKHBbv7LXqlIsTRcJBd%2BCWjMbl%2BZdgVl8MRT1fD%2BVZjl5mUAVEV5aGFspMvFbNGDH8BZNn9haq5D5dP4TqMF77Ph6KpWQIsYFtdscuc95r43hlnnrUI5a34IzDQlGbTJkr7WLxQ82WQ2MHACvd6jQZ20EcbEKybC7SO46zECEzTetnDHkblIDz%2Fh1baboU9MMaAmqdkcGDOOapq79J2MJK18oVBChVnPGAKXHTOhwMpeQF%2FaEXWFeARHWTmn2eDoN7J6eRk4FGnc2kIj4d3uk06EOzFVjKdHzkd6f%2B7AMmRdhcGjTeYkUidMYX%2FKnX8WV6uceBFQA7SC8wPleAGA%2FlXXm0EJ6cSzUepdRxRVUhfSRZe%2Bk02t3Xy3LCnRXTPqD8VUWt8w2viEXF0nx340W9eJofVKel6%2BAOnMQaf5YV%2F8h3nW%2BdTw8LifwUlWhi5glGZ%2BVhh42cboEOPoAod6K8P6EC%2FUxvxAc%2F0yOSMN6n6L8GOqUBO7JYidY%2Fxg7boLCjfZQh8JkimgHfD70X187Rl4GK0cOoayb9wN7TOsT%2BzVySBw7Z%2F7e%2FgvtlHTF5NH%2F%2FyZrGEt62R4fLG1gFkXkF3NUy%2FS5n%2FrWydm2Lv5GoPZem55jzTLBQwxGSCZwwsdUUFRjQY6bt61lFtHb7lTzb8HTMTWxupHBCTLAtANHn4xgMlLTtHWPzgaXCSq8IPP3IimzITyjTBdZS&X-Amz-Signature=50d814ba9c68841466924ef6c87e0e641180901e0f662a0e3fdd4e6b6fda11e4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WITI5VBS%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T100740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDj9Jzm9YzGPhYNGNHrJ8OS57eteuSPtiTbeDeVvKV%2BIwIgFL0MZ4eeYk5GT%2F4M2Ut%2FBvtRDVEgdX3s1WJseNTKhfUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqg8W1l6Z7GvdkLCyrcA5M9pkGtsH3gWJWA3r%2BTGNIGIlq5BZlKn36z1AI5GY3k0ooSG05qnMwjzraX8JoB6eKiOtuHK72GZqamvsj1cTRQQ4aHIra0MnMhqOKz7%2B0BZi1v6Bga2CQG%2BrFwYYX08jvEZn3nXpHyIUJlZbE11WyKHBbv7LXqlIsTRcJBd%2BCWjMbl%2BZdgVl8MRT1fD%2BVZjl5mUAVEV5aGFspMvFbNGDH8BZNn9haq5D5dP4TqMF77Ph6KpWQIsYFtdscuc95r43hlnnrUI5a34IzDQlGbTJkr7WLxQ82WQ2MHACvd6jQZ20EcbEKybC7SO46zECEzTetnDHkblIDz%2Fh1baboU9MMaAmqdkcGDOOapq79J2MJK18oVBChVnPGAKXHTOhwMpeQF%2FaEXWFeARHWTmn2eDoN7J6eRk4FGnc2kIj4d3uk06EOzFVjKdHzkd6f%2B7AMmRdhcGjTeYkUidMYX%2FKnX8WV6uceBFQA7SC8wPleAGA%2FlXXm0EJ6cSzUepdRxRVUhfSRZe%2Bk02t3Xy3LCnRXTPqD8VUWt8w2viEXF0nx340W9eJofVKel6%2BAOnMQaf5YV%2F8h3nW%2BdTw8LifwUlWhi5glGZ%2BVhh42cboEOPoAod6K8P6EC%2FUxvxAc%2F0yOSMN6n6L8GOqUBO7JYidY%2Fxg7boLCjfZQh8JkimgHfD70X187Rl4GK0cOoayb9wN7TOsT%2BzVySBw7Z%2F7e%2FgvtlHTF5NH%2F%2FyZrGEt62R4fLG1gFkXkF3NUy%2FS5n%2FrWydm2Lv5GoPZem55jzTLBQwxGSCZwwsdUUFRjQY6bt61lFtHb7lTzb8HTMTWxupHBCTLAtANHn4xgMlLTtHWPzgaXCSq8IPP3IimzITyjTBdZS&X-Amz-Signature=149113e2dbcdbf02296377a4a34d8782e18b93f63383cf48ad942a6ee5b2ad53&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
