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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEEROBTZ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T170131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCICB1DzVdExUjYDC0wB8qjJfNb77zetw14We5iXeVKME6AiBBTgETvXpTEIYSlROF2uDQ2g94cEI0LP77nWZ73Dwg9SqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnNFvalo0VrcGT%2BjVKtwD2ojpR41D40Ibzw5ULftFU7rzvKmzdmvyArik0AvozJQaXfH3tY9UXHnEfTC29kugeqjumMXwqjt7IM9sy%2FN5e0pkADgUY5LsFlAJQQspowYLM84E1NYKljo30GA7rz3bunWNVp%2B%2F8irQpkzBtrxNqI9L0CYc6NmIzGPx2%2BupHx%2F4XM%2F6oz7BX389BUpUY0OX%2FeFEjhk7XMAj0Sx5WlyvzAZ29IG%2Fsxr%2FeLZLdfG%2B6TB6fLC%2FQv9cPm3I2qS3yBQ93mqqd1GkcW85nFF9s%2FkDQwAm%2FJYpz8za8AGoE1eYtG6Ho3bHmvCeBDgLu4D0LUsm%2F5YjCbHKjs5Qfn4Eo58SJxxjr7c9A1puif9MuPz74s2u7TWMhzR00fi5hsk6qPeiy5qY%2BCneBST71Zez1M0KyPRH5AQjTD3NEI5%2BRt9La25Mk88qKKUaMJhtTURpA3IRlb5ZPFwPT0%2B%2BAJjJUu2DjIicCXT7OuA%2Bz%2FF2RWHMXEMOk2Ny4pZRXCW%2BwChNZoLgrvA3VkfYfsGUHz0bm%2Bzc4KoXrUVpub7vNZQHnMJiDe4vFxpeZ2QXCxJNnJ4Zlf9Vr1RxzjTnOIE%2BpUeF88%2FXtTkHuKB89pa436pEXqvVkgEPuLoKLLZb7%2Fnd3gEw26CwvwY6pgGysIyfwKmAkXLyHHHEykROCP874fUnYmm2h8fBEopZQIQLIKx9V0LBTTZOiYeWcpvmpjfntD2kO%2BDm08zOckjRvCTpZK19uEVbuhW2veoxnwcOmRB9P4FSFxN18T%2FKmb0%2FhFu2S2BJrt5m1eRFkGQdZPP9d3cVoxWt9qCNhIAVyDriZY4KElRLYQUBTH9OvxeisyTzY8eji240%2Bfvb3repqfysRj6G&X-Amz-Signature=6cb210b8a5ad96b464644439988e1c6883d2c547801e9bcb7d6f72b1f537a20c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEEROBTZ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T170131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCICB1DzVdExUjYDC0wB8qjJfNb77zetw14We5iXeVKME6AiBBTgETvXpTEIYSlROF2uDQ2g94cEI0LP77nWZ73Dwg9SqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnNFvalo0VrcGT%2BjVKtwD2ojpR41D40Ibzw5ULftFU7rzvKmzdmvyArik0AvozJQaXfH3tY9UXHnEfTC29kugeqjumMXwqjt7IM9sy%2FN5e0pkADgUY5LsFlAJQQspowYLM84E1NYKljo30GA7rz3bunWNVp%2B%2F8irQpkzBtrxNqI9L0CYc6NmIzGPx2%2BupHx%2F4XM%2F6oz7BX389BUpUY0OX%2FeFEjhk7XMAj0Sx5WlyvzAZ29IG%2Fsxr%2FeLZLdfG%2B6TB6fLC%2FQv9cPm3I2qS3yBQ93mqqd1GkcW85nFF9s%2FkDQwAm%2FJYpz8za8AGoE1eYtG6Ho3bHmvCeBDgLu4D0LUsm%2F5YjCbHKjs5Qfn4Eo58SJxxjr7c9A1puif9MuPz74s2u7TWMhzR00fi5hsk6qPeiy5qY%2BCneBST71Zez1M0KyPRH5AQjTD3NEI5%2BRt9La25Mk88qKKUaMJhtTURpA3IRlb5ZPFwPT0%2B%2BAJjJUu2DjIicCXT7OuA%2Bz%2FF2RWHMXEMOk2Ny4pZRXCW%2BwChNZoLgrvA3VkfYfsGUHz0bm%2Bzc4KoXrUVpub7vNZQHnMJiDe4vFxpeZ2QXCxJNnJ4Zlf9Vr1RxzjTnOIE%2BpUeF88%2FXtTkHuKB89pa436pEXqvVkgEPuLoKLLZb7%2Fnd3gEw26CwvwY6pgGysIyfwKmAkXLyHHHEykROCP874fUnYmm2h8fBEopZQIQLIKx9V0LBTTZOiYeWcpvmpjfntD2kO%2BDm08zOckjRvCTpZK19uEVbuhW2veoxnwcOmRB9P4FSFxN18T%2FKmb0%2FhFu2S2BJrt5m1eRFkGQdZPP9d3cVoxWt9qCNhIAVyDriZY4KElRLYQUBTH9OvxeisyTzY8eji240%2Bfvb3repqfysRj6G&X-Amz-Signature=9c28cb4d29f3af938afba58ac15b0ebccf2aa3306fb1c401683923dde25880d9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEEROBTZ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T170131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCICB1DzVdExUjYDC0wB8qjJfNb77zetw14We5iXeVKME6AiBBTgETvXpTEIYSlROF2uDQ2g94cEI0LP77nWZ73Dwg9SqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnNFvalo0VrcGT%2BjVKtwD2ojpR41D40Ibzw5ULftFU7rzvKmzdmvyArik0AvozJQaXfH3tY9UXHnEfTC29kugeqjumMXwqjt7IM9sy%2FN5e0pkADgUY5LsFlAJQQspowYLM84E1NYKljo30GA7rz3bunWNVp%2B%2F8irQpkzBtrxNqI9L0CYc6NmIzGPx2%2BupHx%2F4XM%2F6oz7BX389BUpUY0OX%2FeFEjhk7XMAj0Sx5WlyvzAZ29IG%2Fsxr%2FeLZLdfG%2B6TB6fLC%2FQv9cPm3I2qS3yBQ93mqqd1GkcW85nFF9s%2FkDQwAm%2FJYpz8za8AGoE1eYtG6Ho3bHmvCeBDgLu4D0LUsm%2F5YjCbHKjs5Qfn4Eo58SJxxjr7c9A1puif9MuPz74s2u7TWMhzR00fi5hsk6qPeiy5qY%2BCneBST71Zez1M0KyPRH5AQjTD3NEI5%2BRt9La25Mk88qKKUaMJhtTURpA3IRlb5ZPFwPT0%2B%2BAJjJUu2DjIicCXT7OuA%2Bz%2FF2RWHMXEMOk2Ny4pZRXCW%2BwChNZoLgrvA3VkfYfsGUHz0bm%2Bzc4KoXrUVpub7vNZQHnMJiDe4vFxpeZ2QXCxJNnJ4Zlf9Vr1RxzjTnOIE%2BpUeF88%2FXtTkHuKB89pa436pEXqvVkgEPuLoKLLZb7%2Fnd3gEw26CwvwY6pgGysIyfwKmAkXLyHHHEykROCP874fUnYmm2h8fBEopZQIQLIKx9V0LBTTZOiYeWcpvmpjfntD2kO%2BDm08zOckjRvCTpZK19uEVbuhW2veoxnwcOmRB9P4FSFxN18T%2FKmb0%2FhFu2S2BJrt5m1eRFkGQdZPP9d3cVoxWt9qCNhIAVyDriZY4KElRLYQUBTH9OvxeisyTzY8eji240%2Bfvb3repqfysRj6G&X-Amz-Signature=5f339e1c3129914ce24dc4a287831036a673d8333fca93d324e69ff757a2fb78&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEEROBTZ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T170131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCICB1DzVdExUjYDC0wB8qjJfNb77zetw14We5iXeVKME6AiBBTgETvXpTEIYSlROF2uDQ2g94cEI0LP77nWZ73Dwg9SqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnNFvalo0VrcGT%2BjVKtwD2ojpR41D40Ibzw5ULftFU7rzvKmzdmvyArik0AvozJQaXfH3tY9UXHnEfTC29kugeqjumMXwqjt7IM9sy%2FN5e0pkADgUY5LsFlAJQQspowYLM84E1NYKljo30GA7rz3bunWNVp%2B%2F8irQpkzBtrxNqI9L0CYc6NmIzGPx2%2BupHx%2F4XM%2F6oz7BX389BUpUY0OX%2FeFEjhk7XMAj0Sx5WlyvzAZ29IG%2Fsxr%2FeLZLdfG%2B6TB6fLC%2FQv9cPm3I2qS3yBQ93mqqd1GkcW85nFF9s%2FkDQwAm%2FJYpz8za8AGoE1eYtG6Ho3bHmvCeBDgLu4D0LUsm%2F5YjCbHKjs5Qfn4Eo58SJxxjr7c9A1puif9MuPz74s2u7TWMhzR00fi5hsk6qPeiy5qY%2BCneBST71Zez1M0KyPRH5AQjTD3NEI5%2BRt9La25Mk88qKKUaMJhtTURpA3IRlb5ZPFwPT0%2B%2BAJjJUu2DjIicCXT7OuA%2Bz%2FF2RWHMXEMOk2Ny4pZRXCW%2BwChNZoLgrvA3VkfYfsGUHz0bm%2Bzc4KoXrUVpub7vNZQHnMJiDe4vFxpeZ2QXCxJNnJ4Zlf9Vr1RxzjTnOIE%2BpUeF88%2FXtTkHuKB89pa436pEXqvVkgEPuLoKLLZb7%2Fnd3gEw26CwvwY6pgGysIyfwKmAkXLyHHHEykROCP874fUnYmm2h8fBEopZQIQLIKx9V0LBTTZOiYeWcpvmpjfntD2kO%2BDm08zOckjRvCTpZK19uEVbuhW2veoxnwcOmRB9P4FSFxN18T%2FKmb0%2FhFu2S2BJrt5m1eRFkGQdZPP9d3cVoxWt9qCNhIAVyDriZY4KElRLYQUBTH9OvxeisyTzY8eji240%2Bfvb3repqfysRj6G&X-Amz-Signature=5df3469137d445896ef95f733656e84bb65d9f82b729bb0c282ce20bdedc0f4f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEEROBTZ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T170131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCICB1DzVdExUjYDC0wB8qjJfNb77zetw14We5iXeVKME6AiBBTgETvXpTEIYSlROF2uDQ2g94cEI0LP77nWZ73Dwg9SqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnNFvalo0VrcGT%2BjVKtwD2ojpR41D40Ibzw5ULftFU7rzvKmzdmvyArik0AvozJQaXfH3tY9UXHnEfTC29kugeqjumMXwqjt7IM9sy%2FN5e0pkADgUY5LsFlAJQQspowYLM84E1NYKljo30GA7rz3bunWNVp%2B%2F8irQpkzBtrxNqI9L0CYc6NmIzGPx2%2BupHx%2F4XM%2F6oz7BX389BUpUY0OX%2FeFEjhk7XMAj0Sx5WlyvzAZ29IG%2Fsxr%2FeLZLdfG%2B6TB6fLC%2FQv9cPm3I2qS3yBQ93mqqd1GkcW85nFF9s%2FkDQwAm%2FJYpz8za8AGoE1eYtG6Ho3bHmvCeBDgLu4D0LUsm%2F5YjCbHKjs5Qfn4Eo58SJxxjr7c9A1puif9MuPz74s2u7TWMhzR00fi5hsk6qPeiy5qY%2BCneBST71Zez1M0KyPRH5AQjTD3NEI5%2BRt9La25Mk88qKKUaMJhtTURpA3IRlb5ZPFwPT0%2B%2BAJjJUu2DjIicCXT7OuA%2Bz%2FF2RWHMXEMOk2Ny4pZRXCW%2BwChNZoLgrvA3VkfYfsGUHz0bm%2Bzc4KoXrUVpub7vNZQHnMJiDe4vFxpeZ2QXCxJNnJ4Zlf9Vr1RxzjTnOIE%2BpUeF88%2FXtTkHuKB89pa436pEXqvVkgEPuLoKLLZb7%2Fnd3gEw26CwvwY6pgGysIyfwKmAkXLyHHHEykROCP874fUnYmm2h8fBEopZQIQLIKx9V0LBTTZOiYeWcpvmpjfntD2kO%2BDm08zOckjRvCTpZK19uEVbuhW2veoxnwcOmRB9P4FSFxN18T%2FKmb0%2FhFu2S2BJrt5m1eRFkGQdZPP9d3cVoxWt9qCNhIAVyDriZY4KElRLYQUBTH9OvxeisyTzY8eji240%2Bfvb3repqfysRj6G&X-Amz-Signature=1cf9a006b52a51755b44c06c44f82b768b9d98129c07dc85dd6b3f67a5761c16&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEEROBTZ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T170131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCICB1DzVdExUjYDC0wB8qjJfNb77zetw14We5iXeVKME6AiBBTgETvXpTEIYSlROF2uDQ2g94cEI0LP77nWZ73Dwg9SqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnNFvalo0VrcGT%2BjVKtwD2ojpR41D40Ibzw5ULftFU7rzvKmzdmvyArik0AvozJQaXfH3tY9UXHnEfTC29kugeqjumMXwqjt7IM9sy%2FN5e0pkADgUY5LsFlAJQQspowYLM84E1NYKljo30GA7rz3bunWNVp%2B%2F8irQpkzBtrxNqI9L0CYc6NmIzGPx2%2BupHx%2F4XM%2F6oz7BX389BUpUY0OX%2FeFEjhk7XMAj0Sx5WlyvzAZ29IG%2Fsxr%2FeLZLdfG%2B6TB6fLC%2FQv9cPm3I2qS3yBQ93mqqd1GkcW85nFF9s%2FkDQwAm%2FJYpz8za8AGoE1eYtG6Ho3bHmvCeBDgLu4D0LUsm%2F5YjCbHKjs5Qfn4Eo58SJxxjr7c9A1puif9MuPz74s2u7TWMhzR00fi5hsk6qPeiy5qY%2BCneBST71Zez1M0KyPRH5AQjTD3NEI5%2BRt9La25Mk88qKKUaMJhtTURpA3IRlb5ZPFwPT0%2B%2BAJjJUu2DjIicCXT7OuA%2Bz%2FF2RWHMXEMOk2Ny4pZRXCW%2BwChNZoLgrvA3VkfYfsGUHz0bm%2Bzc4KoXrUVpub7vNZQHnMJiDe4vFxpeZ2QXCxJNnJ4Zlf9Vr1RxzjTnOIE%2BpUeF88%2FXtTkHuKB89pa436pEXqvVkgEPuLoKLLZb7%2Fnd3gEw26CwvwY6pgGysIyfwKmAkXLyHHHEykROCP874fUnYmm2h8fBEopZQIQLIKx9V0LBTTZOiYeWcpvmpjfntD2kO%2BDm08zOckjRvCTpZK19uEVbuhW2veoxnwcOmRB9P4FSFxN18T%2FKmb0%2FhFu2S2BJrt5m1eRFkGQdZPP9d3cVoxWt9qCNhIAVyDriZY4KElRLYQUBTH9OvxeisyTzY8eji240%2Bfvb3repqfysRj6G&X-Amz-Signature=acbc1e019c4a7d4d38d18edf1da9626007c1bec555f7d5da33fd16fe0b263616&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEEROBTZ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T170131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCICB1DzVdExUjYDC0wB8qjJfNb77zetw14We5iXeVKME6AiBBTgETvXpTEIYSlROF2uDQ2g94cEI0LP77nWZ73Dwg9SqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnNFvalo0VrcGT%2BjVKtwD2ojpR41D40Ibzw5ULftFU7rzvKmzdmvyArik0AvozJQaXfH3tY9UXHnEfTC29kugeqjumMXwqjt7IM9sy%2FN5e0pkADgUY5LsFlAJQQspowYLM84E1NYKljo30GA7rz3bunWNVp%2B%2F8irQpkzBtrxNqI9L0CYc6NmIzGPx2%2BupHx%2F4XM%2F6oz7BX389BUpUY0OX%2FeFEjhk7XMAj0Sx5WlyvzAZ29IG%2Fsxr%2FeLZLdfG%2B6TB6fLC%2FQv9cPm3I2qS3yBQ93mqqd1GkcW85nFF9s%2FkDQwAm%2FJYpz8za8AGoE1eYtG6Ho3bHmvCeBDgLu4D0LUsm%2F5YjCbHKjs5Qfn4Eo58SJxxjr7c9A1puif9MuPz74s2u7TWMhzR00fi5hsk6qPeiy5qY%2BCneBST71Zez1M0KyPRH5AQjTD3NEI5%2BRt9La25Mk88qKKUaMJhtTURpA3IRlb5ZPFwPT0%2B%2BAJjJUu2DjIicCXT7OuA%2Bz%2FF2RWHMXEMOk2Ny4pZRXCW%2BwChNZoLgrvA3VkfYfsGUHz0bm%2Bzc4KoXrUVpub7vNZQHnMJiDe4vFxpeZ2QXCxJNnJ4Zlf9Vr1RxzjTnOIE%2BpUeF88%2FXtTkHuKB89pa436pEXqvVkgEPuLoKLLZb7%2Fnd3gEw26CwvwY6pgGysIyfwKmAkXLyHHHEykROCP874fUnYmm2h8fBEopZQIQLIKx9V0LBTTZOiYeWcpvmpjfntD2kO%2BDm08zOckjRvCTpZK19uEVbuhW2veoxnwcOmRB9P4FSFxN18T%2FKmb0%2FhFu2S2BJrt5m1eRFkGQdZPP9d3cVoxWt9qCNhIAVyDriZY4KElRLYQUBTH9OvxeisyTzY8eji240%2Bfvb3repqfysRj6G&X-Amz-Signature=f60a79b79610504657f2e5525d94479da31657f6438ea6279594f2b206166bc7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
