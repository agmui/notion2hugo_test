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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662374YH3S%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T121600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJHLq8IQQd8WhiyQP%2F5dWk9mUsw%2FblGd1Fhwzy1jNU6AiEAhHa5NWz%2FZ2HGJS2FgbvZd8XtOqN9avKSHBcqv8WdLk0q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDOhY7W8Fv6Yi7Nqn4SrcA%2Fd7VCe0omdQOlxBbqDpP7GtATd7kLypwJKXqgQzFhJvi6wvjjm3lq6Eqy6DFQOKR%2FiFYroTCJi1w7o8%2FeZujMFMhe5UxPeX5cP9hrFzmSpbN2VnsOxvA6d6M8wd8%2Bl267HSfQWfN4TqsUKb%2BZtGT1Y61jL3k5M1GLR7JnIunATbL8dgBH0KXpjiwoVShP1tSOtOUNROhKcqDpOsyyxZXWsAnA9MGdeS8ty6f1220fHqCY9VA1GvcuN2kppIENPJAy47CLIVhzQ3XRtUhd9dv2WYAWR3M27zdTGpjhTtR6Kbeb233wMkYW60VlZKffEwHuZ7nsIvbtix4zWR1PsqJ1V9vlIccL%2Fu8gzqAjo3MH%2B4kQbYBQlhCofSTLCAFXW5CyCrJLibxLtuHc1ihITz%2FXLnIWCWr8VuspcxFUK43n23xDxY1DOKXf7TSjP1c7fWtzf3Yohv2tecRtxFjt5fwDmBKB5oDmHTnB6%2FrZPXgJ%2Frlf2ZQPPSsoG2VZ0ew6FM5PbbcPU4wH4hHrOlXg2nPj9ohlwHkUUHlvcVTrKt37fIgfUY5DB1Si9%2BeOE0PiRFAH7Rd8seaz886rBmg3CF9inyejCkdz7tzumDnRi5H8U9PVayOAzWgf0EnGXcMKXk28EGOqUBNBrOgzQg3w7KOwXRzVVtfagoUxrJkLLhanq68M4Hz55pQiDMCRx6oloPU3RQf1kJoXcYKEHZF4ZGQfeZVEqsIzxudzwLWCjR03gEkUFsJY0FuBD1xc%2FOm%2BX3m7ZFgYQwRbY5GrR%2BUS%2Fll0lpAr91EW2dl1JNK5P08UdH54fsyiMu7jgbNV7laYGIZK1Sfc%2FaSt9dj5wGhSErZpwSJwb6t%2FxwDwFB&X-Amz-Signature=32007ea4deb2643196c7c23524d7958992aad8bee3d437c796f8cd0bfdcb618f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662374YH3S%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T121600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJHLq8IQQd8WhiyQP%2F5dWk9mUsw%2FblGd1Fhwzy1jNU6AiEAhHa5NWz%2FZ2HGJS2FgbvZd8XtOqN9avKSHBcqv8WdLk0q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDOhY7W8Fv6Yi7Nqn4SrcA%2Fd7VCe0omdQOlxBbqDpP7GtATd7kLypwJKXqgQzFhJvi6wvjjm3lq6Eqy6DFQOKR%2FiFYroTCJi1w7o8%2FeZujMFMhe5UxPeX5cP9hrFzmSpbN2VnsOxvA6d6M8wd8%2Bl267HSfQWfN4TqsUKb%2BZtGT1Y61jL3k5M1GLR7JnIunATbL8dgBH0KXpjiwoVShP1tSOtOUNROhKcqDpOsyyxZXWsAnA9MGdeS8ty6f1220fHqCY9VA1GvcuN2kppIENPJAy47CLIVhzQ3XRtUhd9dv2WYAWR3M27zdTGpjhTtR6Kbeb233wMkYW60VlZKffEwHuZ7nsIvbtix4zWR1PsqJ1V9vlIccL%2Fu8gzqAjo3MH%2B4kQbYBQlhCofSTLCAFXW5CyCrJLibxLtuHc1ihITz%2FXLnIWCWr8VuspcxFUK43n23xDxY1DOKXf7TSjP1c7fWtzf3Yohv2tecRtxFjt5fwDmBKB5oDmHTnB6%2FrZPXgJ%2Frlf2ZQPPSsoG2VZ0ew6FM5PbbcPU4wH4hHrOlXg2nPj9ohlwHkUUHlvcVTrKt37fIgfUY5DB1Si9%2BeOE0PiRFAH7Rd8seaz886rBmg3CF9inyejCkdz7tzumDnRi5H8U9PVayOAzWgf0EnGXcMKXk28EGOqUBNBrOgzQg3w7KOwXRzVVtfagoUxrJkLLhanq68M4Hz55pQiDMCRx6oloPU3RQf1kJoXcYKEHZF4ZGQfeZVEqsIzxudzwLWCjR03gEkUFsJY0FuBD1xc%2FOm%2BX3m7ZFgYQwRbY5GrR%2BUS%2Fll0lpAr91EW2dl1JNK5P08UdH54fsyiMu7jgbNV7laYGIZK1Sfc%2FaSt9dj5wGhSErZpwSJwb6t%2FxwDwFB&X-Amz-Signature=823d9d906572331f6cc404263d67b2fdbd1013d15cf7f902def263ff87f46903&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662374YH3S%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T121600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJHLq8IQQd8WhiyQP%2F5dWk9mUsw%2FblGd1Fhwzy1jNU6AiEAhHa5NWz%2FZ2HGJS2FgbvZd8XtOqN9avKSHBcqv8WdLk0q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDOhY7W8Fv6Yi7Nqn4SrcA%2Fd7VCe0omdQOlxBbqDpP7GtATd7kLypwJKXqgQzFhJvi6wvjjm3lq6Eqy6DFQOKR%2FiFYroTCJi1w7o8%2FeZujMFMhe5UxPeX5cP9hrFzmSpbN2VnsOxvA6d6M8wd8%2Bl267HSfQWfN4TqsUKb%2BZtGT1Y61jL3k5M1GLR7JnIunATbL8dgBH0KXpjiwoVShP1tSOtOUNROhKcqDpOsyyxZXWsAnA9MGdeS8ty6f1220fHqCY9VA1GvcuN2kppIENPJAy47CLIVhzQ3XRtUhd9dv2WYAWR3M27zdTGpjhTtR6Kbeb233wMkYW60VlZKffEwHuZ7nsIvbtix4zWR1PsqJ1V9vlIccL%2Fu8gzqAjo3MH%2B4kQbYBQlhCofSTLCAFXW5CyCrJLibxLtuHc1ihITz%2FXLnIWCWr8VuspcxFUK43n23xDxY1DOKXf7TSjP1c7fWtzf3Yohv2tecRtxFjt5fwDmBKB5oDmHTnB6%2FrZPXgJ%2Frlf2ZQPPSsoG2VZ0ew6FM5PbbcPU4wH4hHrOlXg2nPj9ohlwHkUUHlvcVTrKt37fIgfUY5DB1Si9%2BeOE0PiRFAH7Rd8seaz886rBmg3CF9inyejCkdz7tzumDnRi5H8U9PVayOAzWgf0EnGXcMKXk28EGOqUBNBrOgzQg3w7KOwXRzVVtfagoUxrJkLLhanq68M4Hz55pQiDMCRx6oloPU3RQf1kJoXcYKEHZF4ZGQfeZVEqsIzxudzwLWCjR03gEkUFsJY0FuBD1xc%2FOm%2BX3m7ZFgYQwRbY5GrR%2BUS%2Fll0lpAr91EW2dl1JNK5P08UdH54fsyiMu7jgbNV7laYGIZK1Sfc%2FaSt9dj5wGhSErZpwSJwb6t%2FxwDwFB&X-Amz-Signature=4eecff2fb5e5c9859b12b7862f9b1e78c2cbbd3923422a03421ebe7532c5f347&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662374YH3S%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T121600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJHLq8IQQd8WhiyQP%2F5dWk9mUsw%2FblGd1Fhwzy1jNU6AiEAhHa5NWz%2FZ2HGJS2FgbvZd8XtOqN9avKSHBcqv8WdLk0q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDOhY7W8Fv6Yi7Nqn4SrcA%2Fd7VCe0omdQOlxBbqDpP7GtATd7kLypwJKXqgQzFhJvi6wvjjm3lq6Eqy6DFQOKR%2FiFYroTCJi1w7o8%2FeZujMFMhe5UxPeX5cP9hrFzmSpbN2VnsOxvA6d6M8wd8%2Bl267HSfQWfN4TqsUKb%2BZtGT1Y61jL3k5M1GLR7JnIunATbL8dgBH0KXpjiwoVShP1tSOtOUNROhKcqDpOsyyxZXWsAnA9MGdeS8ty6f1220fHqCY9VA1GvcuN2kppIENPJAy47CLIVhzQ3XRtUhd9dv2WYAWR3M27zdTGpjhTtR6Kbeb233wMkYW60VlZKffEwHuZ7nsIvbtix4zWR1PsqJ1V9vlIccL%2Fu8gzqAjo3MH%2B4kQbYBQlhCofSTLCAFXW5CyCrJLibxLtuHc1ihITz%2FXLnIWCWr8VuspcxFUK43n23xDxY1DOKXf7TSjP1c7fWtzf3Yohv2tecRtxFjt5fwDmBKB5oDmHTnB6%2FrZPXgJ%2Frlf2ZQPPSsoG2VZ0ew6FM5PbbcPU4wH4hHrOlXg2nPj9ohlwHkUUHlvcVTrKt37fIgfUY5DB1Si9%2BeOE0PiRFAH7Rd8seaz886rBmg3CF9inyejCkdz7tzumDnRi5H8U9PVayOAzWgf0EnGXcMKXk28EGOqUBNBrOgzQg3w7KOwXRzVVtfagoUxrJkLLhanq68M4Hz55pQiDMCRx6oloPU3RQf1kJoXcYKEHZF4ZGQfeZVEqsIzxudzwLWCjR03gEkUFsJY0FuBD1xc%2FOm%2BX3m7ZFgYQwRbY5GrR%2BUS%2Fll0lpAr91EW2dl1JNK5P08UdH54fsyiMu7jgbNV7laYGIZK1Sfc%2FaSt9dj5wGhSErZpwSJwb6t%2FxwDwFB&X-Amz-Signature=c9539affcc9637cd0ec35e3086ec98d9a85c21ffd98a58978124c02cc597cdbe&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662374YH3S%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T121600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJHLq8IQQd8WhiyQP%2F5dWk9mUsw%2FblGd1Fhwzy1jNU6AiEAhHa5NWz%2FZ2HGJS2FgbvZd8XtOqN9avKSHBcqv8WdLk0q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDOhY7W8Fv6Yi7Nqn4SrcA%2Fd7VCe0omdQOlxBbqDpP7GtATd7kLypwJKXqgQzFhJvi6wvjjm3lq6Eqy6DFQOKR%2FiFYroTCJi1w7o8%2FeZujMFMhe5UxPeX5cP9hrFzmSpbN2VnsOxvA6d6M8wd8%2Bl267HSfQWfN4TqsUKb%2BZtGT1Y61jL3k5M1GLR7JnIunATbL8dgBH0KXpjiwoVShP1tSOtOUNROhKcqDpOsyyxZXWsAnA9MGdeS8ty6f1220fHqCY9VA1GvcuN2kppIENPJAy47CLIVhzQ3XRtUhd9dv2WYAWR3M27zdTGpjhTtR6Kbeb233wMkYW60VlZKffEwHuZ7nsIvbtix4zWR1PsqJ1V9vlIccL%2Fu8gzqAjo3MH%2B4kQbYBQlhCofSTLCAFXW5CyCrJLibxLtuHc1ihITz%2FXLnIWCWr8VuspcxFUK43n23xDxY1DOKXf7TSjP1c7fWtzf3Yohv2tecRtxFjt5fwDmBKB5oDmHTnB6%2FrZPXgJ%2Frlf2ZQPPSsoG2VZ0ew6FM5PbbcPU4wH4hHrOlXg2nPj9ohlwHkUUHlvcVTrKt37fIgfUY5DB1Si9%2BeOE0PiRFAH7Rd8seaz886rBmg3CF9inyejCkdz7tzumDnRi5H8U9PVayOAzWgf0EnGXcMKXk28EGOqUBNBrOgzQg3w7KOwXRzVVtfagoUxrJkLLhanq68M4Hz55pQiDMCRx6oloPU3RQf1kJoXcYKEHZF4ZGQfeZVEqsIzxudzwLWCjR03gEkUFsJY0FuBD1xc%2FOm%2BX3m7ZFgYQwRbY5GrR%2BUS%2Fll0lpAr91EW2dl1JNK5P08UdH54fsyiMu7jgbNV7laYGIZK1Sfc%2FaSt9dj5wGhSErZpwSJwb6t%2FxwDwFB&X-Amz-Signature=b02794c54bf8cc801f9f976969d99183c94bc8b55a99f328894e9bb7851c7b12&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662374YH3S%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T121600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJHLq8IQQd8WhiyQP%2F5dWk9mUsw%2FblGd1Fhwzy1jNU6AiEAhHa5NWz%2FZ2HGJS2FgbvZd8XtOqN9avKSHBcqv8WdLk0q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDOhY7W8Fv6Yi7Nqn4SrcA%2Fd7VCe0omdQOlxBbqDpP7GtATd7kLypwJKXqgQzFhJvi6wvjjm3lq6Eqy6DFQOKR%2FiFYroTCJi1w7o8%2FeZujMFMhe5UxPeX5cP9hrFzmSpbN2VnsOxvA6d6M8wd8%2Bl267HSfQWfN4TqsUKb%2BZtGT1Y61jL3k5M1GLR7JnIunATbL8dgBH0KXpjiwoVShP1tSOtOUNROhKcqDpOsyyxZXWsAnA9MGdeS8ty6f1220fHqCY9VA1GvcuN2kppIENPJAy47CLIVhzQ3XRtUhd9dv2WYAWR3M27zdTGpjhTtR6Kbeb233wMkYW60VlZKffEwHuZ7nsIvbtix4zWR1PsqJ1V9vlIccL%2Fu8gzqAjo3MH%2B4kQbYBQlhCofSTLCAFXW5CyCrJLibxLtuHc1ihITz%2FXLnIWCWr8VuspcxFUK43n23xDxY1DOKXf7TSjP1c7fWtzf3Yohv2tecRtxFjt5fwDmBKB5oDmHTnB6%2FrZPXgJ%2Frlf2ZQPPSsoG2VZ0ew6FM5PbbcPU4wH4hHrOlXg2nPj9ohlwHkUUHlvcVTrKt37fIgfUY5DB1Si9%2BeOE0PiRFAH7Rd8seaz886rBmg3CF9inyejCkdz7tzumDnRi5H8U9PVayOAzWgf0EnGXcMKXk28EGOqUBNBrOgzQg3w7KOwXRzVVtfagoUxrJkLLhanq68M4Hz55pQiDMCRx6oloPU3RQf1kJoXcYKEHZF4ZGQfeZVEqsIzxudzwLWCjR03gEkUFsJY0FuBD1xc%2FOm%2BX3m7ZFgYQwRbY5GrR%2BUS%2Fll0lpAr91EW2dl1JNK5P08UdH54fsyiMu7jgbNV7laYGIZK1Sfc%2FaSt9dj5wGhSErZpwSJwb6t%2FxwDwFB&X-Amz-Signature=e954dacccd38630656739c7dc7434a0f19130397079ef59c3784e4a9de898ec3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662374YH3S%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T121600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJHLq8IQQd8WhiyQP%2F5dWk9mUsw%2FblGd1Fhwzy1jNU6AiEAhHa5NWz%2FZ2HGJS2FgbvZd8XtOqN9avKSHBcqv8WdLk0q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDOhY7W8Fv6Yi7Nqn4SrcA%2Fd7VCe0omdQOlxBbqDpP7GtATd7kLypwJKXqgQzFhJvi6wvjjm3lq6Eqy6DFQOKR%2FiFYroTCJi1w7o8%2FeZujMFMhe5UxPeX5cP9hrFzmSpbN2VnsOxvA6d6M8wd8%2Bl267HSfQWfN4TqsUKb%2BZtGT1Y61jL3k5M1GLR7JnIunATbL8dgBH0KXpjiwoVShP1tSOtOUNROhKcqDpOsyyxZXWsAnA9MGdeS8ty6f1220fHqCY9VA1GvcuN2kppIENPJAy47CLIVhzQ3XRtUhd9dv2WYAWR3M27zdTGpjhTtR6Kbeb233wMkYW60VlZKffEwHuZ7nsIvbtix4zWR1PsqJ1V9vlIccL%2Fu8gzqAjo3MH%2B4kQbYBQlhCofSTLCAFXW5CyCrJLibxLtuHc1ihITz%2FXLnIWCWr8VuspcxFUK43n23xDxY1DOKXf7TSjP1c7fWtzf3Yohv2tecRtxFjt5fwDmBKB5oDmHTnB6%2FrZPXgJ%2Frlf2ZQPPSsoG2VZ0ew6FM5PbbcPU4wH4hHrOlXg2nPj9ohlwHkUUHlvcVTrKt37fIgfUY5DB1Si9%2BeOE0PiRFAH7Rd8seaz886rBmg3CF9inyejCkdz7tzumDnRi5H8U9PVayOAzWgf0EnGXcMKXk28EGOqUBNBrOgzQg3w7KOwXRzVVtfagoUxrJkLLhanq68M4Hz55pQiDMCRx6oloPU3RQf1kJoXcYKEHZF4ZGQfeZVEqsIzxudzwLWCjR03gEkUFsJY0FuBD1xc%2FOm%2BX3m7ZFgYQwRbY5GrR%2BUS%2Fll0lpAr91EW2dl1JNK5P08UdH54fsyiMu7jgbNV7laYGIZK1Sfc%2FaSt9dj5wGhSErZpwSJwb6t%2FxwDwFB&X-Amz-Signature=41fd1971b5d9d18433c25f60bc5651b2468d196a09613b33b9532e29982ac53e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
