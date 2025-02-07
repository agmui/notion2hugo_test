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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W73UR4H3%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T170116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDAApTnAFi6AUvkDtifmmixU3CsFYAvYy%2BIp2%2B6xioubQIgD%2F06vIJ%2BUc3wWnLSATtLy2lSmET9g7X5fCyJomO3jRMq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDAuIKUYl%2F2fFyRg8TircA4N%2BVBXU2SqJZZnV2K4M1Xi5jrUaqHE%2F9f34akRuaROR4ZbBxbnnJ7ZaeukpLEFCbSOqngE1RvazVsqtssUmH4kzayNO3jwg0FhCT4qUASQnXVShG2paw3oEkvUd7paqPuqeWNfgeHy47JEhfO9djvuMWu8Yzt1VmJde%2BR%2BEMSGx1YYwMqXNF89zCNOneo3Aa%2FbTMZhaI0F5nqhdYsCi5R4GzjbNMHS3bapH6bLqO3vp5l3Y%2Fyf%2FDeHP%2BE4TjKlp2WvkloxuZmB8MeQulljqHls0SST6d%2B6ajjqKBmU8mattg7xsYXCdZuKPTLO5QuGpc9xcbz705CNhFWWgSIvhEMY3JMh3QvRcGrASqQgOAbA1NJGTnKxZ7XIq0v7cGSCS0NR9XerXL304K8O%2FZfWZt58pVg%2FIQVrTUl%2FXMWv3W8vsJzFIMC5HFeZ2ejSHp5OqDx9l5Is9s1frDVge32xEORoaVELBBrh9jLnZ08XFTOViCGHY1dSmxmZ872EGZWSyY%2BTMTmLTmZIfYSzQrSQKOcUjjWK3OmmJMFg6ygIwpH4LwuaMu%2BtZy7iXh3yYbWJK%2F1zl9Pz5tVHe4BG5aOYxN7Se%2FnlyIsaFvIlRq023kmAr%2FA9nMI%2BocT0HmkfyMJjhmL0GOqUBuDXI3CQUKyGW9%2B%2BTVJFTrKFF7x4fenC5rgSdG%2FHrrF3M4Iktn5Sw7w5cZD1k3V9fnfNhk3%2FvLn7fnnAXTWEzZ4f70KvMeWR%2F0lBfd9DkDvByfzGicNL%2BX%2BExkerlGtco%2FsMvsYXOa0vsqW2L6iuv1s2TIP890CdBfbDX4h2EmMc00qRRFGajWGNPzqdAAowZPvAFWuXerKHZySYN8VxTMWN9JNMK&X-Amz-Signature=c991d54e99c79a885505b23b7440acea23bb2ec11549788f958e2991ee24a724&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W73UR4H3%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T170116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDAApTnAFi6AUvkDtifmmixU3CsFYAvYy%2BIp2%2B6xioubQIgD%2F06vIJ%2BUc3wWnLSATtLy2lSmET9g7X5fCyJomO3jRMq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDAuIKUYl%2F2fFyRg8TircA4N%2BVBXU2SqJZZnV2K4M1Xi5jrUaqHE%2F9f34akRuaROR4ZbBxbnnJ7ZaeukpLEFCbSOqngE1RvazVsqtssUmH4kzayNO3jwg0FhCT4qUASQnXVShG2paw3oEkvUd7paqPuqeWNfgeHy47JEhfO9djvuMWu8Yzt1VmJde%2BR%2BEMSGx1YYwMqXNF89zCNOneo3Aa%2FbTMZhaI0F5nqhdYsCi5R4GzjbNMHS3bapH6bLqO3vp5l3Y%2Fyf%2FDeHP%2BE4TjKlp2WvkloxuZmB8MeQulljqHls0SST6d%2B6ajjqKBmU8mattg7xsYXCdZuKPTLO5QuGpc9xcbz705CNhFWWgSIvhEMY3JMh3QvRcGrASqQgOAbA1NJGTnKxZ7XIq0v7cGSCS0NR9XerXL304K8O%2FZfWZt58pVg%2FIQVrTUl%2FXMWv3W8vsJzFIMC5HFeZ2ejSHp5OqDx9l5Is9s1frDVge32xEORoaVELBBrh9jLnZ08XFTOViCGHY1dSmxmZ872EGZWSyY%2BTMTmLTmZIfYSzQrSQKOcUjjWK3OmmJMFg6ygIwpH4LwuaMu%2BtZy7iXh3yYbWJK%2F1zl9Pz5tVHe4BG5aOYxN7Se%2FnlyIsaFvIlRq023kmAr%2FA9nMI%2BocT0HmkfyMJjhmL0GOqUBuDXI3CQUKyGW9%2B%2BTVJFTrKFF7x4fenC5rgSdG%2FHrrF3M4Iktn5Sw7w5cZD1k3V9fnfNhk3%2FvLn7fnnAXTWEzZ4f70KvMeWR%2F0lBfd9DkDvByfzGicNL%2BX%2BExkerlGtco%2FsMvsYXOa0vsqW2L6iuv1s2TIP890CdBfbDX4h2EmMc00qRRFGajWGNPzqdAAowZPvAFWuXerKHZySYN8VxTMWN9JNMK&X-Amz-Signature=7afb06f0b3ca441f8baeb91cd194fdb556b8343fbbc5ec963b2ce8cb743bb3e8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W73UR4H3%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T170116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDAApTnAFi6AUvkDtifmmixU3CsFYAvYy%2BIp2%2B6xioubQIgD%2F06vIJ%2BUc3wWnLSATtLy2lSmET9g7X5fCyJomO3jRMq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDAuIKUYl%2F2fFyRg8TircA4N%2BVBXU2SqJZZnV2K4M1Xi5jrUaqHE%2F9f34akRuaROR4ZbBxbnnJ7ZaeukpLEFCbSOqngE1RvazVsqtssUmH4kzayNO3jwg0FhCT4qUASQnXVShG2paw3oEkvUd7paqPuqeWNfgeHy47JEhfO9djvuMWu8Yzt1VmJde%2BR%2BEMSGx1YYwMqXNF89zCNOneo3Aa%2FbTMZhaI0F5nqhdYsCi5R4GzjbNMHS3bapH6bLqO3vp5l3Y%2Fyf%2FDeHP%2BE4TjKlp2WvkloxuZmB8MeQulljqHls0SST6d%2B6ajjqKBmU8mattg7xsYXCdZuKPTLO5QuGpc9xcbz705CNhFWWgSIvhEMY3JMh3QvRcGrASqQgOAbA1NJGTnKxZ7XIq0v7cGSCS0NR9XerXL304K8O%2FZfWZt58pVg%2FIQVrTUl%2FXMWv3W8vsJzFIMC5HFeZ2ejSHp5OqDx9l5Is9s1frDVge32xEORoaVELBBrh9jLnZ08XFTOViCGHY1dSmxmZ872EGZWSyY%2BTMTmLTmZIfYSzQrSQKOcUjjWK3OmmJMFg6ygIwpH4LwuaMu%2BtZy7iXh3yYbWJK%2F1zl9Pz5tVHe4BG5aOYxN7Se%2FnlyIsaFvIlRq023kmAr%2FA9nMI%2BocT0HmkfyMJjhmL0GOqUBuDXI3CQUKyGW9%2B%2BTVJFTrKFF7x4fenC5rgSdG%2FHrrF3M4Iktn5Sw7w5cZD1k3V9fnfNhk3%2FvLn7fnnAXTWEzZ4f70KvMeWR%2F0lBfd9DkDvByfzGicNL%2BX%2BExkerlGtco%2FsMvsYXOa0vsqW2L6iuv1s2TIP890CdBfbDX4h2EmMc00qRRFGajWGNPzqdAAowZPvAFWuXerKHZySYN8VxTMWN9JNMK&X-Amz-Signature=663075e8b9972e145289813257ca601f6fdd24e52562a1e8c074ba7b7a51a733&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W73UR4H3%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T170116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDAApTnAFi6AUvkDtifmmixU3CsFYAvYy%2BIp2%2B6xioubQIgD%2F06vIJ%2BUc3wWnLSATtLy2lSmET9g7X5fCyJomO3jRMq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDAuIKUYl%2F2fFyRg8TircA4N%2BVBXU2SqJZZnV2K4M1Xi5jrUaqHE%2F9f34akRuaROR4ZbBxbnnJ7ZaeukpLEFCbSOqngE1RvazVsqtssUmH4kzayNO3jwg0FhCT4qUASQnXVShG2paw3oEkvUd7paqPuqeWNfgeHy47JEhfO9djvuMWu8Yzt1VmJde%2BR%2BEMSGx1YYwMqXNF89zCNOneo3Aa%2FbTMZhaI0F5nqhdYsCi5R4GzjbNMHS3bapH6bLqO3vp5l3Y%2Fyf%2FDeHP%2BE4TjKlp2WvkloxuZmB8MeQulljqHls0SST6d%2B6ajjqKBmU8mattg7xsYXCdZuKPTLO5QuGpc9xcbz705CNhFWWgSIvhEMY3JMh3QvRcGrASqQgOAbA1NJGTnKxZ7XIq0v7cGSCS0NR9XerXL304K8O%2FZfWZt58pVg%2FIQVrTUl%2FXMWv3W8vsJzFIMC5HFeZ2ejSHp5OqDx9l5Is9s1frDVge32xEORoaVELBBrh9jLnZ08XFTOViCGHY1dSmxmZ872EGZWSyY%2BTMTmLTmZIfYSzQrSQKOcUjjWK3OmmJMFg6ygIwpH4LwuaMu%2BtZy7iXh3yYbWJK%2F1zl9Pz5tVHe4BG5aOYxN7Se%2FnlyIsaFvIlRq023kmAr%2FA9nMI%2BocT0HmkfyMJjhmL0GOqUBuDXI3CQUKyGW9%2B%2BTVJFTrKFF7x4fenC5rgSdG%2FHrrF3M4Iktn5Sw7w5cZD1k3V9fnfNhk3%2FvLn7fnnAXTWEzZ4f70KvMeWR%2F0lBfd9DkDvByfzGicNL%2BX%2BExkerlGtco%2FsMvsYXOa0vsqW2L6iuv1s2TIP890CdBfbDX4h2EmMc00qRRFGajWGNPzqdAAowZPvAFWuXerKHZySYN8VxTMWN9JNMK&X-Amz-Signature=03984ca4cd205bd570c7200a5b696c88167b28e05fcd559518756d9203b61419&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W73UR4H3%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T170116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDAApTnAFi6AUvkDtifmmixU3CsFYAvYy%2BIp2%2B6xioubQIgD%2F06vIJ%2BUc3wWnLSATtLy2lSmET9g7X5fCyJomO3jRMq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDAuIKUYl%2F2fFyRg8TircA4N%2BVBXU2SqJZZnV2K4M1Xi5jrUaqHE%2F9f34akRuaROR4ZbBxbnnJ7ZaeukpLEFCbSOqngE1RvazVsqtssUmH4kzayNO3jwg0FhCT4qUASQnXVShG2paw3oEkvUd7paqPuqeWNfgeHy47JEhfO9djvuMWu8Yzt1VmJde%2BR%2BEMSGx1YYwMqXNF89zCNOneo3Aa%2FbTMZhaI0F5nqhdYsCi5R4GzjbNMHS3bapH6bLqO3vp5l3Y%2Fyf%2FDeHP%2BE4TjKlp2WvkloxuZmB8MeQulljqHls0SST6d%2B6ajjqKBmU8mattg7xsYXCdZuKPTLO5QuGpc9xcbz705CNhFWWgSIvhEMY3JMh3QvRcGrASqQgOAbA1NJGTnKxZ7XIq0v7cGSCS0NR9XerXL304K8O%2FZfWZt58pVg%2FIQVrTUl%2FXMWv3W8vsJzFIMC5HFeZ2ejSHp5OqDx9l5Is9s1frDVge32xEORoaVELBBrh9jLnZ08XFTOViCGHY1dSmxmZ872EGZWSyY%2BTMTmLTmZIfYSzQrSQKOcUjjWK3OmmJMFg6ygIwpH4LwuaMu%2BtZy7iXh3yYbWJK%2F1zl9Pz5tVHe4BG5aOYxN7Se%2FnlyIsaFvIlRq023kmAr%2FA9nMI%2BocT0HmkfyMJjhmL0GOqUBuDXI3CQUKyGW9%2B%2BTVJFTrKFF7x4fenC5rgSdG%2FHrrF3M4Iktn5Sw7w5cZD1k3V9fnfNhk3%2FvLn7fnnAXTWEzZ4f70KvMeWR%2F0lBfd9DkDvByfzGicNL%2BX%2BExkerlGtco%2FsMvsYXOa0vsqW2L6iuv1s2TIP890CdBfbDX4h2EmMc00qRRFGajWGNPzqdAAowZPvAFWuXerKHZySYN8VxTMWN9JNMK&X-Amz-Signature=5db83ba5ccbefe4bf5aed746bec58648873c99f76a0cd2f75e5eb402a9c7513b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W73UR4H3%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T170116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDAApTnAFi6AUvkDtifmmixU3CsFYAvYy%2BIp2%2B6xioubQIgD%2F06vIJ%2BUc3wWnLSATtLy2lSmET9g7X5fCyJomO3jRMq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDAuIKUYl%2F2fFyRg8TircA4N%2BVBXU2SqJZZnV2K4M1Xi5jrUaqHE%2F9f34akRuaROR4ZbBxbnnJ7ZaeukpLEFCbSOqngE1RvazVsqtssUmH4kzayNO3jwg0FhCT4qUASQnXVShG2paw3oEkvUd7paqPuqeWNfgeHy47JEhfO9djvuMWu8Yzt1VmJde%2BR%2BEMSGx1YYwMqXNF89zCNOneo3Aa%2FbTMZhaI0F5nqhdYsCi5R4GzjbNMHS3bapH6bLqO3vp5l3Y%2Fyf%2FDeHP%2BE4TjKlp2WvkloxuZmB8MeQulljqHls0SST6d%2B6ajjqKBmU8mattg7xsYXCdZuKPTLO5QuGpc9xcbz705CNhFWWgSIvhEMY3JMh3QvRcGrASqQgOAbA1NJGTnKxZ7XIq0v7cGSCS0NR9XerXL304K8O%2FZfWZt58pVg%2FIQVrTUl%2FXMWv3W8vsJzFIMC5HFeZ2ejSHp5OqDx9l5Is9s1frDVge32xEORoaVELBBrh9jLnZ08XFTOViCGHY1dSmxmZ872EGZWSyY%2BTMTmLTmZIfYSzQrSQKOcUjjWK3OmmJMFg6ygIwpH4LwuaMu%2BtZy7iXh3yYbWJK%2F1zl9Pz5tVHe4BG5aOYxN7Se%2FnlyIsaFvIlRq023kmAr%2FA9nMI%2BocT0HmkfyMJjhmL0GOqUBuDXI3CQUKyGW9%2B%2BTVJFTrKFF7x4fenC5rgSdG%2FHrrF3M4Iktn5Sw7w5cZD1k3V9fnfNhk3%2FvLn7fnnAXTWEzZ4f70KvMeWR%2F0lBfd9DkDvByfzGicNL%2BX%2BExkerlGtco%2FsMvsYXOa0vsqW2L6iuv1s2TIP890CdBfbDX4h2EmMc00qRRFGajWGNPzqdAAowZPvAFWuXerKHZySYN8VxTMWN9JNMK&X-Amz-Signature=43288d6644a2b6935c61b3d77450b05f8c861ee38d71a8f7ae85b1f222ed670c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W73UR4H3%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T170116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDAApTnAFi6AUvkDtifmmixU3CsFYAvYy%2BIp2%2B6xioubQIgD%2F06vIJ%2BUc3wWnLSATtLy2lSmET9g7X5fCyJomO3jRMq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDAuIKUYl%2F2fFyRg8TircA4N%2BVBXU2SqJZZnV2K4M1Xi5jrUaqHE%2F9f34akRuaROR4ZbBxbnnJ7ZaeukpLEFCbSOqngE1RvazVsqtssUmH4kzayNO3jwg0FhCT4qUASQnXVShG2paw3oEkvUd7paqPuqeWNfgeHy47JEhfO9djvuMWu8Yzt1VmJde%2BR%2BEMSGx1YYwMqXNF89zCNOneo3Aa%2FbTMZhaI0F5nqhdYsCi5R4GzjbNMHS3bapH6bLqO3vp5l3Y%2Fyf%2FDeHP%2BE4TjKlp2WvkloxuZmB8MeQulljqHls0SST6d%2B6ajjqKBmU8mattg7xsYXCdZuKPTLO5QuGpc9xcbz705CNhFWWgSIvhEMY3JMh3QvRcGrASqQgOAbA1NJGTnKxZ7XIq0v7cGSCS0NR9XerXL304K8O%2FZfWZt58pVg%2FIQVrTUl%2FXMWv3W8vsJzFIMC5HFeZ2ejSHp5OqDx9l5Is9s1frDVge32xEORoaVELBBrh9jLnZ08XFTOViCGHY1dSmxmZ872EGZWSyY%2BTMTmLTmZIfYSzQrSQKOcUjjWK3OmmJMFg6ygIwpH4LwuaMu%2BtZy7iXh3yYbWJK%2F1zl9Pz5tVHe4BG5aOYxN7Se%2FnlyIsaFvIlRq023kmAr%2FA9nMI%2BocT0HmkfyMJjhmL0GOqUBuDXI3CQUKyGW9%2B%2BTVJFTrKFF7x4fenC5rgSdG%2FHrrF3M4Iktn5Sw7w5cZD1k3V9fnfNhk3%2FvLn7fnnAXTWEzZ4f70KvMeWR%2F0lBfd9DkDvByfzGicNL%2BX%2BExkerlGtco%2FsMvsYXOa0vsqW2L6iuv1s2TIP890CdBfbDX4h2EmMc00qRRFGajWGNPzqdAAowZPvAFWuXerKHZySYN8VxTMWN9JNMK&X-Amz-Signature=8daf94f39c535c9c7545b1e6d049a4be908cf5ec5ee7e4f5703fb1cc488ec323&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
