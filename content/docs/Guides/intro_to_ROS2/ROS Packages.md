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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNNQOAXT%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T071038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIAK0OIXotW4nuzQHEYK3gN0aM1bXzVXluEvaAzYQxPSeAiAKxHQmgD2IoC%2BwJ8D7og2u0fuEGx1uQBZvKRlodbrIzSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMKBjqegG5o2s5IdoGKtwDuIOjRYHl4P5yaK2TRpUu0KigzkmuOpVZOC9Q7IuZ%2B7CkapY1dgOtSCr90CDVoDbZql7qekcL31n3brVVsZyRnhsdDIV9e7kz1jXK5jkKTT72hlu8cfTlVfxXpMSqkNfk0HkPwZT%2Ft5njTpaqzO5pWKvtdvF9%2FDBSnn7vuJLNVhrokMNk9Iw%2B9nMugHhX8q%2BBCwVpddzgoP6dZrMEpLRqapUCim7DLdWjgAKsH2wzIIz8GwRaRe0gTwtc%2BeBHZHdSuu%2Fr3j7l9Reo4xnxooSc%2FzdonWObaNvHp0ywUhvWV1R8FIYl8vN8qmGhsQFAB4r3w060CzEiDICJ3MWydsIoaqQdlxlzLRqpYc2MqlBWcOmd5vzZ%2F%2F5HH3E1n%2FtdjO94qB%2FXEoXcv4mWZZsWafATX4bcUMVhOJHfNCdCkVG5avq7kMqtdVkFpZZQRZDURLqN8RLqGeq1ykIofFFwpd1kXm4Siz2E%2BGqVOahU4Yn7m%2FdtZ2JPjdhnVFiK%2FiKfWvjRN6uNcvWFl%2BFe3EOtKLC9um8UI6zJhue1ETc1kXUuf%2Fe4tjqfd2vJglNmYhjNrd69lHrF71osvhnz4XRUotLJhgDGCM%2FeKB2keKu5zgCW5AWdLPf3zRpahZvyvLown%2FjowgY6pgEZV%2B0kFEYs0j6jXDjeGMQebh19ifhhocB830USCE4iO9TqaMhFCr89Ov%2BsYVAiTfwYU8t4WHnLpMUpnEWDyoOjaHD0xPLJpmOfc4CtG1NCjXRpPsGS4ezc3vKa7WqgUqButstwyblaUd%2BpK8R2ZEoj5Kw6aioqPGVLN6p0LuHgm1jb3FsITDwqxgTZ1yJBzhzEnoqVNjq4cbS6arc8nKWV%2BY%2FP5KO2&X-Amz-Signature=fac10d59cb78f1e341c4c69a513a411d8485aefedcfa49dc6c0ea5f919cad7c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNNQOAXT%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T071038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIAK0OIXotW4nuzQHEYK3gN0aM1bXzVXluEvaAzYQxPSeAiAKxHQmgD2IoC%2BwJ8D7og2u0fuEGx1uQBZvKRlodbrIzSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMKBjqegG5o2s5IdoGKtwDuIOjRYHl4P5yaK2TRpUu0KigzkmuOpVZOC9Q7IuZ%2B7CkapY1dgOtSCr90CDVoDbZql7qekcL31n3brVVsZyRnhsdDIV9e7kz1jXK5jkKTT72hlu8cfTlVfxXpMSqkNfk0HkPwZT%2Ft5njTpaqzO5pWKvtdvF9%2FDBSnn7vuJLNVhrokMNk9Iw%2B9nMugHhX8q%2BBCwVpddzgoP6dZrMEpLRqapUCim7DLdWjgAKsH2wzIIz8GwRaRe0gTwtc%2BeBHZHdSuu%2Fr3j7l9Reo4xnxooSc%2FzdonWObaNvHp0ywUhvWV1R8FIYl8vN8qmGhsQFAB4r3w060CzEiDICJ3MWydsIoaqQdlxlzLRqpYc2MqlBWcOmd5vzZ%2F%2F5HH3E1n%2FtdjO94qB%2FXEoXcv4mWZZsWafATX4bcUMVhOJHfNCdCkVG5avq7kMqtdVkFpZZQRZDURLqN8RLqGeq1ykIofFFwpd1kXm4Siz2E%2BGqVOahU4Yn7m%2FdtZ2JPjdhnVFiK%2FiKfWvjRN6uNcvWFl%2BFe3EOtKLC9um8UI6zJhue1ETc1kXUuf%2Fe4tjqfd2vJglNmYhjNrd69lHrF71osvhnz4XRUotLJhgDGCM%2FeKB2keKu5zgCW5AWdLPf3zRpahZvyvLown%2FjowgY6pgEZV%2B0kFEYs0j6jXDjeGMQebh19ifhhocB830USCE4iO9TqaMhFCr89Ov%2BsYVAiTfwYU8t4WHnLpMUpnEWDyoOjaHD0xPLJpmOfc4CtG1NCjXRpPsGS4ezc3vKa7WqgUqButstwyblaUd%2BpK8R2ZEoj5Kw6aioqPGVLN6p0LuHgm1jb3FsITDwqxgTZ1yJBzhzEnoqVNjq4cbS6arc8nKWV%2BY%2FP5KO2&X-Amz-Signature=2908c5ad947ab989b53f15d5430af2571d2cc717f8710883a407a8540e9b2bff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNNQOAXT%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T071038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIAK0OIXotW4nuzQHEYK3gN0aM1bXzVXluEvaAzYQxPSeAiAKxHQmgD2IoC%2BwJ8D7og2u0fuEGx1uQBZvKRlodbrIzSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMKBjqegG5o2s5IdoGKtwDuIOjRYHl4P5yaK2TRpUu0KigzkmuOpVZOC9Q7IuZ%2B7CkapY1dgOtSCr90CDVoDbZql7qekcL31n3brVVsZyRnhsdDIV9e7kz1jXK5jkKTT72hlu8cfTlVfxXpMSqkNfk0HkPwZT%2Ft5njTpaqzO5pWKvtdvF9%2FDBSnn7vuJLNVhrokMNk9Iw%2B9nMugHhX8q%2BBCwVpddzgoP6dZrMEpLRqapUCim7DLdWjgAKsH2wzIIz8GwRaRe0gTwtc%2BeBHZHdSuu%2Fr3j7l9Reo4xnxooSc%2FzdonWObaNvHp0ywUhvWV1R8FIYl8vN8qmGhsQFAB4r3w060CzEiDICJ3MWydsIoaqQdlxlzLRqpYc2MqlBWcOmd5vzZ%2F%2F5HH3E1n%2FtdjO94qB%2FXEoXcv4mWZZsWafATX4bcUMVhOJHfNCdCkVG5avq7kMqtdVkFpZZQRZDURLqN8RLqGeq1ykIofFFwpd1kXm4Siz2E%2BGqVOahU4Yn7m%2FdtZ2JPjdhnVFiK%2FiKfWvjRN6uNcvWFl%2BFe3EOtKLC9um8UI6zJhue1ETc1kXUuf%2Fe4tjqfd2vJglNmYhjNrd69lHrF71osvhnz4XRUotLJhgDGCM%2FeKB2keKu5zgCW5AWdLPf3zRpahZvyvLown%2FjowgY6pgEZV%2B0kFEYs0j6jXDjeGMQebh19ifhhocB830USCE4iO9TqaMhFCr89Ov%2BsYVAiTfwYU8t4WHnLpMUpnEWDyoOjaHD0xPLJpmOfc4CtG1NCjXRpPsGS4ezc3vKa7WqgUqButstwyblaUd%2BpK8R2ZEoj5Kw6aioqPGVLN6p0LuHgm1jb3FsITDwqxgTZ1yJBzhzEnoqVNjq4cbS6arc8nKWV%2BY%2FP5KO2&X-Amz-Signature=a59364fdd9724657c41f92e96931b68220f6149a1a621b67cb57f993adcd825f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNNQOAXT%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T071038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIAK0OIXotW4nuzQHEYK3gN0aM1bXzVXluEvaAzYQxPSeAiAKxHQmgD2IoC%2BwJ8D7og2u0fuEGx1uQBZvKRlodbrIzSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMKBjqegG5o2s5IdoGKtwDuIOjRYHl4P5yaK2TRpUu0KigzkmuOpVZOC9Q7IuZ%2B7CkapY1dgOtSCr90CDVoDbZql7qekcL31n3brVVsZyRnhsdDIV9e7kz1jXK5jkKTT72hlu8cfTlVfxXpMSqkNfk0HkPwZT%2Ft5njTpaqzO5pWKvtdvF9%2FDBSnn7vuJLNVhrokMNk9Iw%2B9nMugHhX8q%2BBCwVpddzgoP6dZrMEpLRqapUCim7DLdWjgAKsH2wzIIz8GwRaRe0gTwtc%2BeBHZHdSuu%2Fr3j7l9Reo4xnxooSc%2FzdonWObaNvHp0ywUhvWV1R8FIYl8vN8qmGhsQFAB4r3w060CzEiDICJ3MWydsIoaqQdlxlzLRqpYc2MqlBWcOmd5vzZ%2F%2F5HH3E1n%2FtdjO94qB%2FXEoXcv4mWZZsWafATX4bcUMVhOJHfNCdCkVG5avq7kMqtdVkFpZZQRZDURLqN8RLqGeq1ykIofFFwpd1kXm4Siz2E%2BGqVOahU4Yn7m%2FdtZ2JPjdhnVFiK%2FiKfWvjRN6uNcvWFl%2BFe3EOtKLC9um8UI6zJhue1ETc1kXUuf%2Fe4tjqfd2vJglNmYhjNrd69lHrF71osvhnz4XRUotLJhgDGCM%2FeKB2keKu5zgCW5AWdLPf3zRpahZvyvLown%2FjowgY6pgEZV%2B0kFEYs0j6jXDjeGMQebh19ifhhocB830USCE4iO9TqaMhFCr89Ov%2BsYVAiTfwYU8t4WHnLpMUpnEWDyoOjaHD0xPLJpmOfc4CtG1NCjXRpPsGS4ezc3vKa7WqgUqButstwyblaUd%2BpK8R2ZEoj5Kw6aioqPGVLN6p0LuHgm1jb3FsITDwqxgTZ1yJBzhzEnoqVNjq4cbS6arc8nKWV%2BY%2FP5KO2&X-Amz-Signature=88b1bc87433a9785e883e0b736e5f75332f9a2631b179f79d9b01666f90a8053&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNNQOAXT%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T071038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIAK0OIXotW4nuzQHEYK3gN0aM1bXzVXluEvaAzYQxPSeAiAKxHQmgD2IoC%2BwJ8D7og2u0fuEGx1uQBZvKRlodbrIzSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMKBjqegG5o2s5IdoGKtwDuIOjRYHl4P5yaK2TRpUu0KigzkmuOpVZOC9Q7IuZ%2B7CkapY1dgOtSCr90CDVoDbZql7qekcL31n3brVVsZyRnhsdDIV9e7kz1jXK5jkKTT72hlu8cfTlVfxXpMSqkNfk0HkPwZT%2Ft5njTpaqzO5pWKvtdvF9%2FDBSnn7vuJLNVhrokMNk9Iw%2B9nMugHhX8q%2BBCwVpddzgoP6dZrMEpLRqapUCim7DLdWjgAKsH2wzIIz8GwRaRe0gTwtc%2BeBHZHdSuu%2Fr3j7l9Reo4xnxooSc%2FzdonWObaNvHp0ywUhvWV1R8FIYl8vN8qmGhsQFAB4r3w060CzEiDICJ3MWydsIoaqQdlxlzLRqpYc2MqlBWcOmd5vzZ%2F%2F5HH3E1n%2FtdjO94qB%2FXEoXcv4mWZZsWafATX4bcUMVhOJHfNCdCkVG5avq7kMqtdVkFpZZQRZDURLqN8RLqGeq1ykIofFFwpd1kXm4Siz2E%2BGqVOahU4Yn7m%2FdtZ2JPjdhnVFiK%2FiKfWvjRN6uNcvWFl%2BFe3EOtKLC9um8UI6zJhue1ETc1kXUuf%2Fe4tjqfd2vJglNmYhjNrd69lHrF71osvhnz4XRUotLJhgDGCM%2FeKB2keKu5zgCW5AWdLPf3zRpahZvyvLown%2FjowgY6pgEZV%2B0kFEYs0j6jXDjeGMQebh19ifhhocB830USCE4iO9TqaMhFCr89Ov%2BsYVAiTfwYU8t4WHnLpMUpnEWDyoOjaHD0xPLJpmOfc4CtG1NCjXRpPsGS4ezc3vKa7WqgUqButstwyblaUd%2BpK8R2ZEoj5Kw6aioqPGVLN6p0LuHgm1jb3FsITDwqxgTZ1yJBzhzEnoqVNjq4cbS6arc8nKWV%2BY%2FP5KO2&X-Amz-Signature=517653b2b1d3dc69e96c6009e8cfc6febed8472c3260285cbfbccaae76b9ad11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNNQOAXT%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T071038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIAK0OIXotW4nuzQHEYK3gN0aM1bXzVXluEvaAzYQxPSeAiAKxHQmgD2IoC%2BwJ8D7og2u0fuEGx1uQBZvKRlodbrIzSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMKBjqegG5o2s5IdoGKtwDuIOjRYHl4P5yaK2TRpUu0KigzkmuOpVZOC9Q7IuZ%2B7CkapY1dgOtSCr90CDVoDbZql7qekcL31n3brVVsZyRnhsdDIV9e7kz1jXK5jkKTT72hlu8cfTlVfxXpMSqkNfk0HkPwZT%2Ft5njTpaqzO5pWKvtdvF9%2FDBSnn7vuJLNVhrokMNk9Iw%2B9nMugHhX8q%2BBCwVpddzgoP6dZrMEpLRqapUCim7DLdWjgAKsH2wzIIz8GwRaRe0gTwtc%2BeBHZHdSuu%2Fr3j7l9Reo4xnxooSc%2FzdonWObaNvHp0ywUhvWV1R8FIYl8vN8qmGhsQFAB4r3w060CzEiDICJ3MWydsIoaqQdlxlzLRqpYc2MqlBWcOmd5vzZ%2F%2F5HH3E1n%2FtdjO94qB%2FXEoXcv4mWZZsWafATX4bcUMVhOJHfNCdCkVG5avq7kMqtdVkFpZZQRZDURLqN8RLqGeq1ykIofFFwpd1kXm4Siz2E%2BGqVOahU4Yn7m%2FdtZ2JPjdhnVFiK%2FiKfWvjRN6uNcvWFl%2BFe3EOtKLC9um8UI6zJhue1ETc1kXUuf%2Fe4tjqfd2vJglNmYhjNrd69lHrF71osvhnz4XRUotLJhgDGCM%2FeKB2keKu5zgCW5AWdLPf3zRpahZvyvLown%2FjowgY6pgEZV%2B0kFEYs0j6jXDjeGMQebh19ifhhocB830USCE4iO9TqaMhFCr89Ov%2BsYVAiTfwYU8t4WHnLpMUpnEWDyoOjaHD0xPLJpmOfc4CtG1NCjXRpPsGS4ezc3vKa7WqgUqButstwyblaUd%2BpK8R2ZEoj5Kw6aioqPGVLN6p0LuHgm1jb3FsITDwqxgTZ1yJBzhzEnoqVNjq4cbS6arc8nKWV%2BY%2FP5KO2&X-Amz-Signature=8b10685ecbc8df5019beacefa7c5b317b9bfaa4b662a3ff3590b08210434237c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNNQOAXT%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T071038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIAK0OIXotW4nuzQHEYK3gN0aM1bXzVXluEvaAzYQxPSeAiAKxHQmgD2IoC%2BwJ8D7og2u0fuEGx1uQBZvKRlodbrIzSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMKBjqegG5o2s5IdoGKtwDuIOjRYHl4P5yaK2TRpUu0KigzkmuOpVZOC9Q7IuZ%2B7CkapY1dgOtSCr90CDVoDbZql7qekcL31n3brVVsZyRnhsdDIV9e7kz1jXK5jkKTT72hlu8cfTlVfxXpMSqkNfk0HkPwZT%2Ft5njTpaqzO5pWKvtdvF9%2FDBSnn7vuJLNVhrokMNk9Iw%2B9nMugHhX8q%2BBCwVpddzgoP6dZrMEpLRqapUCim7DLdWjgAKsH2wzIIz8GwRaRe0gTwtc%2BeBHZHdSuu%2Fr3j7l9Reo4xnxooSc%2FzdonWObaNvHp0ywUhvWV1R8FIYl8vN8qmGhsQFAB4r3w060CzEiDICJ3MWydsIoaqQdlxlzLRqpYc2MqlBWcOmd5vzZ%2F%2F5HH3E1n%2FtdjO94qB%2FXEoXcv4mWZZsWafATX4bcUMVhOJHfNCdCkVG5avq7kMqtdVkFpZZQRZDURLqN8RLqGeq1ykIofFFwpd1kXm4Siz2E%2BGqVOahU4Yn7m%2FdtZ2JPjdhnVFiK%2FiKfWvjRN6uNcvWFl%2BFe3EOtKLC9um8UI6zJhue1ETc1kXUuf%2Fe4tjqfd2vJglNmYhjNrd69lHrF71osvhnz4XRUotLJhgDGCM%2FeKB2keKu5zgCW5AWdLPf3zRpahZvyvLown%2FjowgY6pgEZV%2B0kFEYs0j6jXDjeGMQebh19ifhhocB830USCE4iO9TqaMhFCr89Ov%2BsYVAiTfwYU8t4WHnLpMUpnEWDyoOjaHD0xPLJpmOfc4CtG1NCjXRpPsGS4ezc3vKa7WqgUqButstwyblaUd%2BpK8R2ZEoj5Kw6aioqPGVLN6p0LuHgm1jb3FsITDwqxgTZ1yJBzhzEnoqVNjq4cbS6arc8nKWV%2BY%2FP5KO2&X-Amz-Signature=004275aa60ee40ca54f5bddfb52985e3af53974b64c78eb8b4d2c017323c46bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
