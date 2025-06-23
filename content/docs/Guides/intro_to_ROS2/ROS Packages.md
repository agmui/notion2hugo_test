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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP7Q5BK5%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T210829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQD23FA8IhSBaviH5N%2BKb5XMHLNJfs43HgKzJgIWthKKkAIgd%2BGsuKT8uX%2B9Ug%2BE%2FudhXzcldywaZiFPc4enN%2FpYY5kq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDEqIjMncbssy8GoALyrcA%2BUokkLo%2Br9%2BCrktzWI83i29hpPK17Ft%2FjT%2FxCK%2F0RIhwzBiy4yOi68iaP4eXrHi28xrCf6o4WCLJ2VodnP%2F%2FaxjpVq77TwhZwgSN6G0akTyw3kbTshNzU9DouKWboygqNRC7rMf2B7oZCOQSVC8zpZtnJy%2FogG4lGTfdatWXo0O0ZWZtpwfjAR1iQuH2fgP3HY%2Biw9%2FRF03XIBeCHpb6MqpAlO2gByYVZhiqk3EwjdD2zPZgzzCeQEvG7U26bWaRVqkdrAsXu9yM19F4uLDN0XbqPp8r1ywuPg1zGxm4KI7lf%2FNlsICWTcXUIJVqUJVpc%2FEyzvsItA7rWmkbONPjE7%2Fj78mn%2FQqHcmvnr1mT3Ye%2BbyRZ9aJzOrFMcm4ozLkI4mSAy42Pq255td7VjQUwpBTDluac0LQ43UlgV7LT%2FzBUFPWc0fJ9QZSsu47mqeNguDYCq82iOigkoDC1q8IbWLf7ouVDGDZOwoZik7oY%2BDcutviJcJZKm5zT56BzotFFnDqfGEmc5PlWB%2FvwOlkkjTjD5UzWIJVY%2FCfPVmUjOf%2F9ECk%2ByTf8%2BOz6smSie01Agmw3GzeABV7MXGteeUUJ6CDzqbV6jHImgMKvBORgppGbG64dTiq5TojBcEdML7t5sIGOqUB7rQxhFSxSIoSqdIyBK8aidkbRKJsfX%2Br8YyTVUJVVOsj6gT0MRT2CuiyehM%2FfYIP0JeD2OSnYfb44V24qy9yl9JIgMEcQoSaoECDNA8oCVLrw%2FIrqnhJYqgjdh8h2k9fJEn0EZhcBqX8Aw1g3SZbwDssigXWVrHJImLVyFerGpb19L2Z5JtDOmstZAcFytRwarmsJ58mLQI36AeqMUpIX6wy5SGl&X-Amz-Signature=e9a8e48b7d81a97a0f3ca43b3bb146bc73df4c55d6913b6753567b505888fb46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP7Q5BK5%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T210829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQD23FA8IhSBaviH5N%2BKb5XMHLNJfs43HgKzJgIWthKKkAIgd%2BGsuKT8uX%2B9Ug%2BE%2FudhXzcldywaZiFPc4enN%2FpYY5kq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDEqIjMncbssy8GoALyrcA%2BUokkLo%2Br9%2BCrktzWI83i29hpPK17Ft%2FjT%2FxCK%2F0RIhwzBiy4yOi68iaP4eXrHi28xrCf6o4WCLJ2VodnP%2F%2FaxjpVq77TwhZwgSN6G0akTyw3kbTshNzU9DouKWboygqNRC7rMf2B7oZCOQSVC8zpZtnJy%2FogG4lGTfdatWXo0O0ZWZtpwfjAR1iQuH2fgP3HY%2Biw9%2FRF03XIBeCHpb6MqpAlO2gByYVZhiqk3EwjdD2zPZgzzCeQEvG7U26bWaRVqkdrAsXu9yM19F4uLDN0XbqPp8r1ywuPg1zGxm4KI7lf%2FNlsICWTcXUIJVqUJVpc%2FEyzvsItA7rWmkbONPjE7%2Fj78mn%2FQqHcmvnr1mT3Ye%2BbyRZ9aJzOrFMcm4ozLkI4mSAy42Pq255td7VjQUwpBTDluac0LQ43UlgV7LT%2FzBUFPWc0fJ9QZSsu47mqeNguDYCq82iOigkoDC1q8IbWLf7ouVDGDZOwoZik7oY%2BDcutviJcJZKm5zT56BzotFFnDqfGEmc5PlWB%2FvwOlkkjTjD5UzWIJVY%2FCfPVmUjOf%2F9ECk%2ByTf8%2BOz6smSie01Agmw3GzeABV7MXGteeUUJ6CDzqbV6jHImgMKvBORgppGbG64dTiq5TojBcEdML7t5sIGOqUB7rQxhFSxSIoSqdIyBK8aidkbRKJsfX%2Br8YyTVUJVVOsj6gT0MRT2CuiyehM%2FfYIP0JeD2OSnYfb44V24qy9yl9JIgMEcQoSaoECDNA8oCVLrw%2FIrqnhJYqgjdh8h2k9fJEn0EZhcBqX8Aw1g3SZbwDssigXWVrHJImLVyFerGpb19L2Z5JtDOmstZAcFytRwarmsJ58mLQI36AeqMUpIX6wy5SGl&X-Amz-Signature=c7ff8ecc4a2551382900d64a1d875352dd0cbb11d50e1b9501b303e237e97a66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP7Q5BK5%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T210829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQD23FA8IhSBaviH5N%2BKb5XMHLNJfs43HgKzJgIWthKKkAIgd%2BGsuKT8uX%2B9Ug%2BE%2FudhXzcldywaZiFPc4enN%2FpYY5kq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDEqIjMncbssy8GoALyrcA%2BUokkLo%2Br9%2BCrktzWI83i29hpPK17Ft%2FjT%2FxCK%2F0RIhwzBiy4yOi68iaP4eXrHi28xrCf6o4WCLJ2VodnP%2F%2FaxjpVq77TwhZwgSN6G0akTyw3kbTshNzU9DouKWboygqNRC7rMf2B7oZCOQSVC8zpZtnJy%2FogG4lGTfdatWXo0O0ZWZtpwfjAR1iQuH2fgP3HY%2Biw9%2FRF03XIBeCHpb6MqpAlO2gByYVZhiqk3EwjdD2zPZgzzCeQEvG7U26bWaRVqkdrAsXu9yM19F4uLDN0XbqPp8r1ywuPg1zGxm4KI7lf%2FNlsICWTcXUIJVqUJVpc%2FEyzvsItA7rWmkbONPjE7%2Fj78mn%2FQqHcmvnr1mT3Ye%2BbyRZ9aJzOrFMcm4ozLkI4mSAy42Pq255td7VjQUwpBTDluac0LQ43UlgV7LT%2FzBUFPWc0fJ9QZSsu47mqeNguDYCq82iOigkoDC1q8IbWLf7ouVDGDZOwoZik7oY%2BDcutviJcJZKm5zT56BzotFFnDqfGEmc5PlWB%2FvwOlkkjTjD5UzWIJVY%2FCfPVmUjOf%2F9ECk%2ByTf8%2BOz6smSie01Agmw3GzeABV7MXGteeUUJ6CDzqbV6jHImgMKvBORgppGbG64dTiq5TojBcEdML7t5sIGOqUB7rQxhFSxSIoSqdIyBK8aidkbRKJsfX%2Br8YyTVUJVVOsj6gT0MRT2CuiyehM%2FfYIP0JeD2OSnYfb44V24qy9yl9JIgMEcQoSaoECDNA8oCVLrw%2FIrqnhJYqgjdh8h2k9fJEn0EZhcBqX8Aw1g3SZbwDssigXWVrHJImLVyFerGpb19L2Z5JtDOmstZAcFytRwarmsJ58mLQI36AeqMUpIX6wy5SGl&X-Amz-Signature=9364aac83fe74598347f19156aa8e63983f30231f241a67d03df8c0434809354&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP7Q5BK5%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T210829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQD23FA8IhSBaviH5N%2BKb5XMHLNJfs43HgKzJgIWthKKkAIgd%2BGsuKT8uX%2B9Ug%2BE%2FudhXzcldywaZiFPc4enN%2FpYY5kq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDEqIjMncbssy8GoALyrcA%2BUokkLo%2Br9%2BCrktzWI83i29hpPK17Ft%2FjT%2FxCK%2F0RIhwzBiy4yOi68iaP4eXrHi28xrCf6o4WCLJ2VodnP%2F%2FaxjpVq77TwhZwgSN6G0akTyw3kbTshNzU9DouKWboygqNRC7rMf2B7oZCOQSVC8zpZtnJy%2FogG4lGTfdatWXo0O0ZWZtpwfjAR1iQuH2fgP3HY%2Biw9%2FRF03XIBeCHpb6MqpAlO2gByYVZhiqk3EwjdD2zPZgzzCeQEvG7U26bWaRVqkdrAsXu9yM19F4uLDN0XbqPp8r1ywuPg1zGxm4KI7lf%2FNlsICWTcXUIJVqUJVpc%2FEyzvsItA7rWmkbONPjE7%2Fj78mn%2FQqHcmvnr1mT3Ye%2BbyRZ9aJzOrFMcm4ozLkI4mSAy42Pq255td7VjQUwpBTDluac0LQ43UlgV7LT%2FzBUFPWc0fJ9QZSsu47mqeNguDYCq82iOigkoDC1q8IbWLf7ouVDGDZOwoZik7oY%2BDcutviJcJZKm5zT56BzotFFnDqfGEmc5PlWB%2FvwOlkkjTjD5UzWIJVY%2FCfPVmUjOf%2F9ECk%2ByTf8%2BOz6smSie01Agmw3GzeABV7MXGteeUUJ6CDzqbV6jHImgMKvBORgppGbG64dTiq5TojBcEdML7t5sIGOqUB7rQxhFSxSIoSqdIyBK8aidkbRKJsfX%2Br8YyTVUJVVOsj6gT0MRT2CuiyehM%2FfYIP0JeD2OSnYfb44V24qy9yl9JIgMEcQoSaoECDNA8oCVLrw%2FIrqnhJYqgjdh8h2k9fJEn0EZhcBqX8Aw1g3SZbwDssigXWVrHJImLVyFerGpb19L2Z5JtDOmstZAcFytRwarmsJ58mLQI36AeqMUpIX6wy5SGl&X-Amz-Signature=9e9f9dad9188193e4665a09c3bacda5cc4625d04b7ad1734e4f1c7ba5345eb63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP7Q5BK5%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T210829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQD23FA8IhSBaviH5N%2BKb5XMHLNJfs43HgKzJgIWthKKkAIgd%2BGsuKT8uX%2B9Ug%2BE%2FudhXzcldywaZiFPc4enN%2FpYY5kq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDEqIjMncbssy8GoALyrcA%2BUokkLo%2Br9%2BCrktzWI83i29hpPK17Ft%2FjT%2FxCK%2F0RIhwzBiy4yOi68iaP4eXrHi28xrCf6o4WCLJ2VodnP%2F%2FaxjpVq77TwhZwgSN6G0akTyw3kbTshNzU9DouKWboygqNRC7rMf2B7oZCOQSVC8zpZtnJy%2FogG4lGTfdatWXo0O0ZWZtpwfjAR1iQuH2fgP3HY%2Biw9%2FRF03XIBeCHpb6MqpAlO2gByYVZhiqk3EwjdD2zPZgzzCeQEvG7U26bWaRVqkdrAsXu9yM19F4uLDN0XbqPp8r1ywuPg1zGxm4KI7lf%2FNlsICWTcXUIJVqUJVpc%2FEyzvsItA7rWmkbONPjE7%2Fj78mn%2FQqHcmvnr1mT3Ye%2BbyRZ9aJzOrFMcm4ozLkI4mSAy42Pq255td7VjQUwpBTDluac0LQ43UlgV7LT%2FzBUFPWc0fJ9QZSsu47mqeNguDYCq82iOigkoDC1q8IbWLf7ouVDGDZOwoZik7oY%2BDcutviJcJZKm5zT56BzotFFnDqfGEmc5PlWB%2FvwOlkkjTjD5UzWIJVY%2FCfPVmUjOf%2F9ECk%2ByTf8%2BOz6smSie01Agmw3GzeABV7MXGteeUUJ6CDzqbV6jHImgMKvBORgppGbG64dTiq5TojBcEdML7t5sIGOqUB7rQxhFSxSIoSqdIyBK8aidkbRKJsfX%2Br8YyTVUJVVOsj6gT0MRT2CuiyehM%2FfYIP0JeD2OSnYfb44V24qy9yl9JIgMEcQoSaoECDNA8oCVLrw%2FIrqnhJYqgjdh8h2k9fJEn0EZhcBqX8Aw1g3SZbwDssigXWVrHJImLVyFerGpb19L2Z5JtDOmstZAcFytRwarmsJ58mLQI36AeqMUpIX6wy5SGl&X-Amz-Signature=3246e2f781b111d1cb99d5d770d168efeccef6801e25d73ad51a0bf4ee3960e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP7Q5BK5%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T210829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQD23FA8IhSBaviH5N%2BKb5XMHLNJfs43HgKzJgIWthKKkAIgd%2BGsuKT8uX%2B9Ug%2BE%2FudhXzcldywaZiFPc4enN%2FpYY5kq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDEqIjMncbssy8GoALyrcA%2BUokkLo%2Br9%2BCrktzWI83i29hpPK17Ft%2FjT%2FxCK%2F0RIhwzBiy4yOi68iaP4eXrHi28xrCf6o4WCLJ2VodnP%2F%2FaxjpVq77TwhZwgSN6G0akTyw3kbTshNzU9DouKWboygqNRC7rMf2B7oZCOQSVC8zpZtnJy%2FogG4lGTfdatWXo0O0ZWZtpwfjAR1iQuH2fgP3HY%2Biw9%2FRF03XIBeCHpb6MqpAlO2gByYVZhiqk3EwjdD2zPZgzzCeQEvG7U26bWaRVqkdrAsXu9yM19F4uLDN0XbqPp8r1ywuPg1zGxm4KI7lf%2FNlsICWTcXUIJVqUJVpc%2FEyzvsItA7rWmkbONPjE7%2Fj78mn%2FQqHcmvnr1mT3Ye%2BbyRZ9aJzOrFMcm4ozLkI4mSAy42Pq255td7VjQUwpBTDluac0LQ43UlgV7LT%2FzBUFPWc0fJ9QZSsu47mqeNguDYCq82iOigkoDC1q8IbWLf7ouVDGDZOwoZik7oY%2BDcutviJcJZKm5zT56BzotFFnDqfGEmc5PlWB%2FvwOlkkjTjD5UzWIJVY%2FCfPVmUjOf%2F9ECk%2ByTf8%2BOz6smSie01Agmw3GzeABV7MXGteeUUJ6CDzqbV6jHImgMKvBORgppGbG64dTiq5TojBcEdML7t5sIGOqUB7rQxhFSxSIoSqdIyBK8aidkbRKJsfX%2Br8YyTVUJVVOsj6gT0MRT2CuiyehM%2FfYIP0JeD2OSnYfb44V24qy9yl9JIgMEcQoSaoECDNA8oCVLrw%2FIrqnhJYqgjdh8h2k9fJEn0EZhcBqX8Aw1g3SZbwDssigXWVrHJImLVyFerGpb19L2Z5JtDOmstZAcFytRwarmsJ58mLQI36AeqMUpIX6wy5SGl&X-Amz-Signature=b681e20a1285005d6df862561b66a55b75bf8c5e166c00a183d057e179edae5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP7Q5BK5%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T210829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQD23FA8IhSBaviH5N%2BKb5XMHLNJfs43HgKzJgIWthKKkAIgd%2BGsuKT8uX%2B9Ug%2BE%2FudhXzcldywaZiFPc4enN%2FpYY5kq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDEqIjMncbssy8GoALyrcA%2BUokkLo%2Br9%2BCrktzWI83i29hpPK17Ft%2FjT%2FxCK%2F0RIhwzBiy4yOi68iaP4eXrHi28xrCf6o4WCLJ2VodnP%2F%2FaxjpVq77TwhZwgSN6G0akTyw3kbTshNzU9DouKWboygqNRC7rMf2B7oZCOQSVC8zpZtnJy%2FogG4lGTfdatWXo0O0ZWZtpwfjAR1iQuH2fgP3HY%2Biw9%2FRF03XIBeCHpb6MqpAlO2gByYVZhiqk3EwjdD2zPZgzzCeQEvG7U26bWaRVqkdrAsXu9yM19F4uLDN0XbqPp8r1ywuPg1zGxm4KI7lf%2FNlsICWTcXUIJVqUJVpc%2FEyzvsItA7rWmkbONPjE7%2Fj78mn%2FQqHcmvnr1mT3Ye%2BbyRZ9aJzOrFMcm4ozLkI4mSAy42Pq255td7VjQUwpBTDluac0LQ43UlgV7LT%2FzBUFPWc0fJ9QZSsu47mqeNguDYCq82iOigkoDC1q8IbWLf7ouVDGDZOwoZik7oY%2BDcutviJcJZKm5zT56BzotFFnDqfGEmc5PlWB%2FvwOlkkjTjD5UzWIJVY%2FCfPVmUjOf%2F9ECk%2ByTf8%2BOz6smSie01Agmw3GzeABV7MXGteeUUJ6CDzqbV6jHImgMKvBORgppGbG64dTiq5TojBcEdML7t5sIGOqUB7rQxhFSxSIoSqdIyBK8aidkbRKJsfX%2Br8YyTVUJVVOsj6gT0MRT2CuiyehM%2FfYIP0JeD2OSnYfb44V24qy9yl9JIgMEcQoSaoECDNA8oCVLrw%2FIrqnhJYqgjdh8h2k9fJEn0EZhcBqX8Aw1g3SZbwDssigXWVrHJImLVyFerGpb19L2Z5JtDOmstZAcFytRwarmsJ58mLQI36AeqMUpIX6wy5SGl&X-Amz-Signature=e0b707797fa6a1fab123bcd44f8381911501f6fb509e734af2c1979e5d4de836&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
