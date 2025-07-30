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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663774K66C%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICrmyB1YSPpI7gBaWD41wtbl4JSJjvekTXZfC7OwEAC9AiEAkSrLQhcwHhkH8HsX847WFfl65aIWaNJcF4MMkQ2B0F0qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPfxDVcJRSmA3ifZGCrcA55UEjjmdgd3zfuS%2BdDsgpP9EmgYNi43XX3snsdVdx3o0cXBGWS6pYfEOaOPwTsQXspAKTx6zDDn5hF2201uWDUkK4xkQQmOLpIcl4G%2BJeZorcZXMDKjN2JEjkQZEwWFb0rm3xm9k3%2F7ySiO0m3bu8bxW%2B0jPI5FzHKvBqbaHtWj%2FTJFipSQAkH8PkJVBKfIEgr8Cn9xz4OWOUdmhYhboIzbBmqNYjza3CPUHWOGhM18JUSydUGkk28h10EJP3rKN0LUC5tYH5IorqpJMtvrTYAiSIy3kuGbOtF0CbUWws2QqV45nbbyB8Tn7e3xt3WY7Bx6R4CTnhKjD7S%2FRXlLKIPiSQ6mfjB3YLJnSeYmxU2dsT%2BtAVYZrAyX07JNT5Zo%2BHIBhk%2BOfylJMsZ0886FNrFHcAtrCQtJdsJvIGzSFKJH8D1dEjQ8wiLiTa11Fbxb5GaMXVUCkJhd2AWJtqc93twhD%2BmVF%2F7SVYu4%2Bvr7gIw7OqRY9Y0UIcyJr1Vr9FGuGMzmbJab1AyGBQoSUVt9hrIEvwVoMdb50KxFFuQ6uVOUJYfMwqsfx6KlcadngL5%2BZRs1UqcC%2Fm4VSrsMLdaIdq98kdgQjFjHqAQbeHGnRY3upYp%2Bf0x40aAzpTOfMLboqcQGOqUBBOAIWyWkM79qUvysdsF4nFX1JdJEClcXf%2ByVPJ1yqdnLAlqQ9FXTSSX6B1THtYh1sBLy7sWcs1QZIlQKcrSxd3xtn9RSR2JsryEriidJ3bmN6cD4tatIOUUTXI11ZMnaBOCbt7DAtvm6Xb06P5WR6F8b9O7o3mgSjUaEvNihXwGsWd%2BnTh7ry01V%2BVjFA4iiBiS7b5jEgfIF%2B%2BA2cBH9jAOYh8OY&X-Amz-Signature=89a16388e572c9e14e4fbb699d1403713ad9686cdb3b31183bde722ae47d4e4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663774K66C%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICrmyB1YSPpI7gBaWD41wtbl4JSJjvekTXZfC7OwEAC9AiEAkSrLQhcwHhkH8HsX847WFfl65aIWaNJcF4MMkQ2B0F0qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPfxDVcJRSmA3ifZGCrcA55UEjjmdgd3zfuS%2BdDsgpP9EmgYNi43XX3snsdVdx3o0cXBGWS6pYfEOaOPwTsQXspAKTx6zDDn5hF2201uWDUkK4xkQQmOLpIcl4G%2BJeZorcZXMDKjN2JEjkQZEwWFb0rm3xm9k3%2F7ySiO0m3bu8bxW%2B0jPI5FzHKvBqbaHtWj%2FTJFipSQAkH8PkJVBKfIEgr8Cn9xz4OWOUdmhYhboIzbBmqNYjza3CPUHWOGhM18JUSydUGkk28h10EJP3rKN0LUC5tYH5IorqpJMtvrTYAiSIy3kuGbOtF0CbUWws2QqV45nbbyB8Tn7e3xt3WY7Bx6R4CTnhKjD7S%2FRXlLKIPiSQ6mfjB3YLJnSeYmxU2dsT%2BtAVYZrAyX07JNT5Zo%2BHIBhk%2BOfylJMsZ0886FNrFHcAtrCQtJdsJvIGzSFKJH8D1dEjQ8wiLiTa11Fbxb5GaMXVUCkJhd2AWJtqc93twhD%2BmVF%2F7SVYu4%2Bvr7gIw7OqRY9Y0UIcyJr1Vr9FGuGMzmbJab1AyGBQoSUVt9hrIEvwVoMdb50KxFFuQ6uVOUJYfMwqsfx6KlcadngL5%2BZRs1UqcC%2Fm4VSrsMLdaIdq98kdgQjFjHqAQbeHGnRY3upYp%2Bf0x40aAzpTOfMLboqcQGOqUBBOAIWyWkM79qUvysdsF4nFX1JdJEClcXf%2ByVPJ1yqdnLAlqQ9FXTSSX6B1THtYh1sBLy7sWcs1QZIlQKcrSxd3xtn9RSR2JsryEriidJ3bmN6cD4tatIOUUTXI11ZMnaBOCbt7DAtvm6Xb06P5WR6F8b9O7o3mgSjUaEvNihXwGsWd%2BnTh7ry01V%2BVjFA4iiBiS7b5jEgfIF%2B%2BA2cBH9jAOYh8OY&X-Amz-Signature=c308868a52ae206f139251fb03e943f0fcc297ee50302489b6ccc339c4fa5369&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663774K66C%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICrmyB1YSPpI7gBaWD41wtbl4JSJjvekTXZfC7OwEAC9AiEAkSrLQhcwHhkH8HsX847WFfl65aIWaNJcF4MMkQ2B0F0qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPfxDVcJRSmA3ifZGCrcA55UEjjmdgd3zfuS%2BdDsgpP9EmgYNi43XX3snsdVdx3o0cXBGWS6pYfEOaOPwTsQXspAKTx6zDDn5hF2201uWDUkK4xkQQmOLpIcl4G%2BJeZorcZXMDKjN2JEjkQZEwWFb0rm3xm9k3%2F7ySiO0m3bu8bxW%2B0jPI5FzHKvBqbaHtWj%2FTJFipSQAkH8PkJVBKfIEgr8Cn9xz4OWOUdmhYhboIzbBmqNYjza3CPUHWOGhM18JUSydUGkk28h10EJP3rKN0LUC5tYH5IorqpJMtvrTYAiSIy3kuGbOtF0CbUWws2QqV45nbbyB8Tn7e3xt3WY7Bx6R4CTnhKjD7S%2FRXlLKIPiSQ6mfjB3YLJnSeYmxU2dsT%2BtAVYZrAyX07JNT5Zo%2BHIBhk%2BOfylJMsZ0886FNrFHcAtrCQtJdsJvIGzSFKJH8D1dEjQ8wiLiTa11Fbxb5GaMXVUCkJhd2AWJtqc93twhD%2BmVF%2F7SVYu4%2Bvr7gIw7OqRY9Y0UIcyJr1Vr9FGuGMzmbJab1AyGBQoSUVt9hrIEvwVoMdb50KxFFuQ6uVOUJYfMwqsfx6KlcadngL5%2BZRs1UqcC%2Fm4VSrsMLdaIdq98kdgQjFjHqAQbeHGnRY3upYp%2Bf0x40aAzpTOfMLboqcQGOqUBBOAIWyWkM79qUvysdsF4nFX1JdJEClcXf%2ByVPJ1yqdnLAlqQ9FXTSSX6B1THtYh1sBLy7sWcs1QZIlQKcrSxd3xtn9RSR2JsryEriidJ3bmN6cD4tatIOUUTXI11ZMnaBOCbt7DAtvm6Xb06P5WR6F8b9O7o3mgSjUaEvNihXwGsWd%2BnTh7ry01V%2BVjFA4iiBiS7b5jEgfIF%2B%2BA2cBH9jAOYh8OY&X-Amz-Signature=46e486fda9fdf6f87e0cf5f98c38c2c645b51d2a077972541cee263692d048f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663774K66C%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICrmyB1YSPpI7gBaWD41wtbl4JSJjvekTXZfC7OwEAC9AiEAkSrLQhcwHhkH8HsX847WFfl65aIWaNJcF4MMkQ2B0F0qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPfxDVcJRSmA3ifZGCrcA55UEjjmdgd3zfuS%2BdDsgpP9EmgYNi43XX3snsdVdx3o0cXBGWS6pYfEOaOPwTsQXspAKTx6zDDn5hF2201uWDUkK4xkQQmOLpIcl4G%2BJeZorcZXMDKjN2JEjkQZEwWFb0rm3xm9k3%2F7ySiO0m3bu8bxW%2B0jPI5FzHKvBqbaHtWj%2FTJFipSQAkH8PkJVBKfIEgr8Cn9xz4OWOUdmhYhboIzbBmqNYjza3CPUHWOGhM18JUSydUGkk28h10EJP3rKN0LUC5tYH5IorqpJMtvrTYAiSIy3kuGbOtF0CbUWws2QqV45nbbyB8Tn7e3xt3WY7Bx6R4CTnhKjD7S%2FRXlLKIPiSQ6mfjB3YLJnSeYmxU2dsT%2BtAVYZrAyX07JNT5Zo%2BHIBhk%2BOfylJMsZ0886FNrFHcAtrCQtJdsJvIGzSFKJH8D1dEjQ8wiLiTa11Fbxb5GaMXVUCkJhd2AWJtqc93twhD%2BmVF%2F7SVYu4%2Bvr7gIw7OqRY9Y0UIcyJr1Vr9FGuGMzmbJab1AyGBQoSUVt9hrIEvwVoMdb50KxFFuQ6uVOUJYfMwqsfx6KlcadngL5%2BZRs1UqcC%2Fm4VSrsMLdaIdq98kdgQjFjHqAQbeHGnRY3upYp%2Bf0x40aAzpTOfMLboqcQGOqUBBOAIWyWkM79qUvysdsF4nFX1JdJEClcXf%2ByVPJ1yqdnLAlqQ9FXTSSX6B1THtYh1sBLy7sWcs1QZIlQKcrSxd3xtn9RSR2JsryEriidJ3bmN6cD4tatIOUUTXI11ZMnaBOCbt7DAtvm6Xb06P5WR6F8b9O7o3mgSjUaEvNihXwGsWd%2BnTh7ry01V%2BVjFA4iiBiS7b5jEgfIF%2B%2BA2cBH9jAOYh8OY&X-Amz-Signature=94c6e80545a65ffbc5edcaed624da86851966610e7021fd361954f0e2b3777c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663774K66C%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICrmyB1YSPpI7gBaWD41wtbl4JSJjvekTXZfC7OwEAC9AiEAkSrLQhcwHhkH8HsX847WFfl65aIWaNJcF4MMkQ2B0F0qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPfxDVcJRSmA3ifZGCrcA55UEjjmdgd3zfuS%2BdDsgpP9EmgYNi43XX3snsdVdx3o0cXBGWS6pYfEOaOPwTsQXspAKTx6zDDn5hF2201uWDUkK4xkQQmOLpIcl4G%2BJeZorcZXMDKjN2JEjkQZEwWFb0rm3xm9k3%2F7ySiO0m3bu8bxW%2B0jPI5FzHKvBqbaHtWj%2FTJFipSQAkH8PkJVBKfIEgr8Cn9xz4OWOUdmhYhboIzbBmqNYjza3CPUHWOGhM18JUSydUGkk28h10EJP3rKN0LUC5tYH5IorqpJMtvrTYAiSIy3kuGbOtF0CbUWws2QqV45nbbyB8Tn7e3xt3WY7Bx6R4CTnhKjD7S%2FRXlLKIPiSQ6mfjB3YLJnSeYmxU2dsT%2BtAVYZrAyX07JNT5Zo%2BHIBhk%2BOfylJMsZ0886FNrFHcAtrCQtJdsJvIGzSFKJH8D1dEjQ8wiLiTa11Fbxb5GaMXVUCkJhd2AWJtqc93twhD%2BmVF%2F7SVYu4%2Bvr7gIw7OqRY9Y0UIcyJr1Vr9FGuGMzmbJab1AyGBQoSUVt9hrIEvwVoMdb50KxFFuQ6uVOUJYfMwqsfx6KlcadngL5%2BZRs1UqcC%2Fm4VSrsMLdaIdq98kdgQjFjHqAQbeHGnRY3upYp%2Bf0x40aAzpTOfMLboqcQGOqUBBOAIWyWkM79qUvysdsF4nFX1JdJEClcXf%2ByVPJ1yqdnLAlqQ9FXTSSX6B1THtYh1sBLy7sWcs1QZIlQKcrSxd3xtn9RSR2JsryEriidJ3bmN6cD4tatIOUUTXI11ZMnaBOCbt7DAtvm6Xb06P5WR6F8b9O7o3mgSjUaEvNihXwGsWd%2BnTh7ry01V%2BVjFA4iiBiS7b5jEgfIF%2B%2BA2cBH9jAOYh8OY&X-Amz-Signature=dcaa446abd3c67f2e23e94b6144596b56ebe52ccb7230fca9b346f8a0e4412d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663774K66C%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICrmyB1YSPpI7gBaWD41wtbl4JSJjvekTXZfC7OwEAC9AiEAkSrLQhcwHhkH8HsX847WFfl65aIWaNJcF4MMkQ2B0F0qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPfxDVcJRSmA3ifZGCrcA55UEjjmdgd3zfuS%2BdDsgpP9EmgYNi43XX3snsdVdx3o0cXBGWS6pYfEOaOPwTsQXspAKTx6zDDn5hF2201uWDUkK4xkQQmOLpIcl4G%2BJeZorcZXMDKjN2JEjkQZEwWFb0rm3xm9k3%2F7ySiO0m3bu8bxW%2B0jPI5FzHKvBqbaHtWj%2FTJFipSQAkH8PkJVBKfIEgr8Cn9xz4OWOUdmhYhboIzbBmqNYjza3CPUHWOGhM18JUSydUGkk28h10EJP3rKN0LUC5tYH5IorqpJMtvrTYAiSIy3kuGbOtF0CbUWws2QqV45nbbyB8Tn7e3xt3WY7Bx6R4CTnhKjD7S%2FRXlLKIPiSQ6mfjB3YLJnSeYmxU2dsT%2BtAVYZrAyX07JNT5Zo%2BHIBhk%2BOfylJMsZ0886FNrFHcAtrCQtJdsJvIGzSFKJH8D1dEjQ8wiLiTa11Fbxb5GaMXVUCkJhd2AWJtqc93twhD%2BmVF%2F7SVYu4%2Bvr7gIw7OqRY9Y0UIcyJr1Vr9FGuGMzmbJab1AyGBQoSUVt9hrIEvwVoMdb50KxFFuQ6uVOUJYfMwqsfx6KlcadngL5%2BZRs1UqcC%2Fm4VSrsMLdaIdq98kdgQjFjHqAQbeHGnRY3upYp%2Bf0x40aAzpTOfMLboqcQGOqUBBOAIWyWkM79qUvysdsF4nFX1JdJEClcXf%2ByVPJ1yqdnLAlqQ9FXTSSX6B1THtYh1sBLy7sWcs1QZIlQKcrSxd3xtn9RSR2JsryEriidJ3bmN6cD4tatIOUUTXI11ZMnaBOCbt7DAtvm6Xb06P5WR6F8b9O7o3mgSjUaEvNihXwGsWd%2BnTh7ry01V%2BVjFA4iiBiS7b5jEgfIF%2B%2BA2cBH9jAOYh8OY&X-Amz-Signature=f609bef22d259ede7278ee9190cf575b488f1880e8400b2b1fb55e82db2513fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663774K66C%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICrmyB1YSPpI7gBaWD41wtbl4JSJjvekTXZfC7OwEAC9AiEAkSrLQhcwHhkH8HsX847WFfl65aIWaNJcF4MMkQ2B0F0qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPfxDVcJRSmA3ifZGCrcA55UEjjmdgd3zfuS%2BdDsgpP9EmgYNi43XX3snsdVdx3o0cXBGWS6pYfEOaOPwTsQXspAKTx6zDDn5hF2201uWDUkK4xkQQmOLpIcl4G%2BJeZorcZXMDKjN2JEjkQZEwWFb0rm3xm9k3%2F7ySiO0m3bu8bxW%2B0jPI5FzHKvBqbaHtWj%2FTJFipSQAkH8PkJVBKfIEgr8Cn9xz4OWOUdmhYhboIzbBmqNYjza3CPUHWOGhM18JUSydUGkk28h10EJP3rKN0LUC5tYH5IorqpJMtvrTYAiSIy3kuGbOtF0CbUWws2QqV45nbbyB8Tn7e3xt3WY7Bx6R4CTnhKjD7S%2FRXlLKIPiSQ6mfjB3YLJnSeYmxU2dsT%2BtAVYZrAyX07JNT5Zo%2BHIBhk%2BOfylJMsZ0886FNrFHcAtrCQtJdsJvIGzSFKJH8D1dEjQ8wiLiTa11Fbxb5GaMXVUCkJhd2AWJtqc93twhD%2BmVF%2F7SVYu4%2Bvr7gIw7OqRY9Y0UIcyJr1Vr9FGuGMzmbJab1AyGBQoSUVt9hrIEvwVoMdb50KxFFuQ6uVOUJYfMwqsfx6KlcadngL5%2BZRs1UqcC%2Fm4VSrsMLdaIdq98kdgQjFjHqAQbeHGnRY3upYp%2Bf0x40aAzpTOfMLboqcQGOqUBBOAIWyWkM79qUvysdsF4nFX1JdJEClcXf%2ByVPJ1yqdnLAlqQ9FXTSSX6B1THtYh1sBLy7sWcs1QZIlQKcrSxd3xtn9RSR2JsryEriidJ3bmN6cD4tatIOUUTXI11ZMnaBOCbt7DAtvm6Xb06P5WR6F8b9O7o3mgSjUaEvNihXwGsWd%2BnTh7ry01V%2BVjFA4iiBiS7b5jEgfIF%2B%2BA2cBH9jAOYh8OY&X-Amz-Signature=c8c4643c98b44518829af786e9dc0d33a68bd589007e3127f5f3fde3215ad2ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
