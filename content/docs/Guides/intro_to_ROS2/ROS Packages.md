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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHTXBMT7%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T190718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDv0Y2vbr4%2Bni9rodqMzyUAaID%2Fld9NaDxpJPCx08MXmQIhAP%2BgljQCokw68BZsz6tZoe5o%2F%2BMvbrxnIUYk1w%2BU2qPyKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzp0B0KV4UZjHsHruUq3AO8Mu%2BVwO6dlCdoQN2ZfeawK1K8Pg2oWVdSD5QxGIklPea946JfyIvjzYXlKLBkLXi2J0czmJw5wAkhzZ3zGLVSblzoPSOPzMUYsk5djzlduqAN3gUryeYnPj3h8UcHb7jHhsgJXxqg%2FWbvj61cN%2BqldKwADYYD7IvlIw%2F8x1fmS5naP1Az55VIShqrXiyyg0AeZykjpIXPmoAX%2FIJgrg1cYWRfQ0vxulsB8pIKrvVgMwVFRnGDa2js6tSh5klpRj8c3qVnIYBxyZeL7Ttv8loRMEmgsR4sNdPA4WbXmec1BrI16kxpCRRUOPXp%2Fijkrdo37KJdsLyNkErMqaTqwA7zEykQblOeU7nyUZjCXenp12%2BbmUSs8bcUwwiKG%2BbRU8Kz2l2L6GBdxFQVaR6D%2FzVfXWRuE%2FE7VJuJD6PPwJoCKOPDZehq706U81hILDxY%2FWWOq%2BQeoHHcCWpRhasw5PZ5VRonhsAGvvp7YVsyrmceOGxyHpyNa0LZwV5CN6N3KSEgGLZ75QyokMBYcDu42be8L3DLAR38Ni5Ff1RUdUgzZdwxC%2FSGu9zbH9lVN4FwY9FqUQ7FmzoZbu%2FusDIxejYzzZUvGZTCpkJwrPG6rr2flL4hg6tSQzrM5Rns9zDsstbCBjqkAZ%2B4R4zYkDWKAc66n2qTuX2%2B6rPrDDe5wOzYOIM3bA%2FRVAeYuNXV269adA%2BpoztYbRjMfyaO9SnesIqTXrmIJLJUPW7kM%2BeLtz0tlGahZiZnZK%2B%2Bv3ri1X3AivHpB3jB8oI3MCK4FbseINU5Z500tTCR83rqEiOZ0%2FKm28tEK0GOYPlMRyGpNiPpeqhnKEJW3DVIyHyvfuX4y8xsCm4eJOtMvvwW&X-Amz-Signature=2ed6dfc34c9165f9e64ad6c64fd7cfcb938d0318a715c6eceed45b65a53f2ba5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHTXBMT7%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T190718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDv0Y2vbr4%2Bni9rodqMzyUAaID%2Fld9NaDxpJPCx08MXmQIhAP%2BgljQCokw68BZsz6tZoe5o%2F%2BMvbrxnIUYk1w%2BU2qPyKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzp0B0KV4UZjHsHruUq3AO8Mu%2BVwO6dlCdoQN2ZfeawK1K8Pg2oWVdSD5QxGIklPea946JfyIvjzYXlKLBkLXi2J0czmJw5wAkhzZ3zGLVSblzoPSOPzMUYsk5djzlduqAN3gUryeYnPj3h8UcHb7jHhsgJXxqg%2FWbvj61cN%2BqldKwADYYD7IvlIw%2F8x1fmS5naP1Az55VIShqrXiyyg0AeZykjpIXPmoAX%2FIJgrg1cYWRfQ0vxulsB8pIKrvVgMwVFRnGDa2js6tSh5klpRj8c3qVnIYBxyZeL7Ttv8loRMEmgsR4sNdPA4WbXmec1BrI16kxpCRRUOPXp%2Fijkrdo37KJdsLyNkErMqaTqwA7zEykQblOeU7nyUZjCXenp12%2BbmUSs8bcUwwiKG%2BbRU8Kz2l2L6GBdxFQVaR6D%2FzVfXWRuE%2FE7VJuJD6PPwJoCKOPDZehq706U81hILDxY%2FWWOq%2BQeoHHcCWpRhasw5PZ5VRonhsAGvvp7YVsyrmceOGxyHpyNa0LZwV5CN6N3KSEgGLZ75QyokMBYcDu42be8L3DLAR38Ni5Ff1RUdUgzZdwxC%2FSGu9zbH9lVN4FwY9FqUQ7FmzoZbu%2FusDIxejYzzZUvGZTCpkJwrPG6rr2flL4hg6tSQzrM5Rns9zDsstbCBjqkAZ%2B4R4zYkDWKAc66n2qTuX2%2B6rPrDDe5wOzYOIM3bA%2FRVAeYuNXV269adA%2BpoztYbRjMfyaO9SnesIqTXrmIJLJUPW7kM%2BeLtz0tlGahZiZnZK%2B%2Bv3ri1X3AivHpB3jB8oI3MCK4FbseINU5Z500tTCR83rqEiOZ0%2FKm28tEK0GOYPlMRyGpNiPpeqhnKEJW3DVIyHyvfuX4y8xsCm4eJOtMvvwW&X-Amz-Signature=b0c6ec8553540f794d0af2de0214b63029d2816b2dfb53b94d12a32cba0f0b66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHTXBMT7%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T190718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDv0Y2vbr4%2Bni9rodqMzyUAaID%2Fld9NaDxpJPCx08MXmQIhAP%2BgljQCokw68BZsz6tZoe5o%2F%2BMvbrxnIUYk1w%2BU2qPyKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzp0B0KV4UZjHsHruUq3AO8Mu%2BVwO6dlCdoQN2ZfeawK1K8Pg2oWVdSD5QxGIklPea946JfyIvjzYXlKLBkLXi2J0czmJw5wAkhzZ3zGLVSblzoPSOPzMUYsk5djzlduqAN3gUryeYnPj3h8UcHb7jHhsgJXxqg%2FWbvj61cN%2BqldKwADYYD7IvlIw%2F8x1fmS5naP1Az55VIShqrXiyyg0AeZykjpIXPmoAX%2FIJgrg1cYWRfQ0vxulsB8pIKrvVgMwVFRnGDa2js6tSh5klpRj8c3qVnIYBxyZeL7Ttv8loRMEmgsR4sNdPA4WbXmec1BrI16kxpCRRUOPXp%2Fijkrdo37KJdsLyNkErMqaTqwA7zEykQblOeU7nyUZjCXenp12%2BbmUSs8bcUwwiKG%2BbRU8Kz2l2L6GBdxFQVaR6D%2FzVfXWRuE%2FE7VJuJD6PPwJoCKOPDZehq706U81hILDxY%2FWWOq%2BQeoHHcCWpRhasw5PZ5VRonhsAGvvp7YVsyrmceOGxyHpyNa0LZwV5CN6N3KSEgGLZ75QyokMBYcDu42be8L3DLAR38Ni5Ff1RUdUgzZdwxC%2FSGu9zbH9lVN4FwY9FqUQ7FmzoZbu%2FusDIxejYzzZUvGZTCpkJwrPG6rr2flL4hg6tSQzrM5Rns9zDsstbCBjqkAZ%2B4R4zYkDWKAc66n2qTuX2%2B6rPrDDe5wOzYOIM3bA%2FRVAeYuNXV269adA%2BpoztYbRjMfyaO9SnesIqTXrmIJLJUPW7kM%2BeLtz0tlGahZiZnZK%2B%2Bv3ri1X3AivHpB3jB8oI3MCK4FbseINU5Z500tTCR83rqEiOZ0%2FKm28tEK0GOYPlMRyGpNiPpeqhnKEJW3DVIyHyvfuX4y8xsCm4eJOtMvvwW&X-Amz-Signature=8061f0b8fd5223f84ac7ec47e13a5e92a9f014b4241a878f2d7e576f41a752b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHTXBMT7%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T190718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDv0Y2vbr4%2Bni9rodqMzyUAaID%2Fld9NaDxpJPCx08MXmQIhAP%2BgljQCokw68BZsz6tZoe5o%2F%2BMvbrxnIUYk1w%2BU2qPyKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzp0B0KV4UZjHsHruUq3AO8Mu%2BVwO6dlCdoQN2ZfeawK1K8Pg2oWVdSD5QxGIklPea946JfyIvjzYXlKLBkLXi2J0czmJw5wAkhzZ3zGLVSblzoPSOPzMUYsk5djzlduqAN3gUryeYnPj3h8UcHb7jHhsgJXxqg%2FWbvj61cN%2BqldKwADYYD7IvlIw%2F8x1fmS5naP1Az55VIShqrXiyyg0AeZykjpIXPmoAX%2FIJgrg1cYWRfQ0vxulsB8pIKrvVgMwVFRnGDa2js6tSh5klpRj8c3qVnIYBxyZeL7Ttv8loRMEmgsR4sNdPA4WbXmec1BrI16kxpCRRUOPXp%2Fijkrdo37KJdsLyNkErMqaTqwA7zEykQblOeU7nyUZjCXenp12%2BbmUSs8bcUwwiKG%2BbRU8Kz2l2L6GBdxFQVaR6D%2FzVfXWRuE%2FE7VJuJD6PPwJoCKOPDZehq706U81hILDxY%2FWWOq%2BQeoHHcCWpRhasw5PZ5VRonhsAGvvp7YVsyrmceOGxyHpyNa0LZwV5CN6N3KSEgGLZ75QyokMBYcDu42be8L3DLAR38Ni5Ff1RUdUgzZdwxC%2FSGu9zbH9lVN4FwY9FqUQ7FmzoZbu%2FusDIxejYzzZUvGZTCpkJwrPG6rr2flL4hg6tSQzrM5Rns9zDsstbCBjqkAZ%2B4R4zYkDWKAc66n2qTuX2%2B6rPrDDe5wOzYOIM3bA%2FRVAeYuNXV269adA%2BpoztYbRjMfyaO9SnesIqTXrmIJLJUPW7kM%2BeLtz0tlGahZiZnZK%2B%2Bv3ri1X3AivHpB3jB8oI3MCK4FbseINU5Z500tTCR83rqEiOZ0%2FKm28tEK0GOYPlMRyGpNiPpeqhnKEJW3DVIyHyvfuX4y8xsCm4eJOtMvvwW&X-Amz-Signature=81475942d2122925b6dfc630238bef8890547eebbd4486dba61785346b6f0f89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHTXBMT7%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T190718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDv0Y2vbr4%2Bni9rodqMzyUAaID%2Fld9NaDxpJPCx08MXmQIhAP%2BgljQCokw68BZsz6tZoe5o%2F%2BMvbrxnIUYk1w%2BU2qPyKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzp0B0KV4UZjHsHruUq3AO8Mu%2BVwO6dlCdoQN2ZfeawK1K8Pg2oWVdSD5QxGIklPea946JfyIvjzYXlKLBkLXi2J0czmJw5wAkhzZ3zGLVSblzoPSOPzMUYsk5djzlduqAN3gUryeYnPj3h8UcHb7jHhsgJXxqg%2FWbvj61cN%2BqldKwADYYD7IvlIw%2F8x1fmS5naP1Az55VIShqrXiyyg0AeZykjpIXPmoAX%2FIJgrg1cYWRfQ0vxulsB8pIKrvVgMwVFRnGDa2js6tSh5klpRj8c3qVnIYBxyZeL7Ttv8loRMEmgsR4sNdPA4WbXmec1BrI16kxpCRRUOPXp%2Fijkrdo37KJdsLyNkErMqaTqwA7zEykQblOeU7nyUZjCXenp12%2BbmUSs8bcUwwiKG%2BbRU8Kz2l2L6GBdxFQVaR6D%2FzVfXWRuE%2FE7VJuJD6PPwJoCKOPDZehq706U81hILDxY%2FWWOq%2BQeoHHcCWpRhasw5PZ5VRonhsAGvvp7YVsyrmceOGxyHpyNa0LZwV5CN6N3KSEgGLZ75QyokMBYcDu42be8L3DLAR38Ni5Ff1RUdUgzZdwxC%2FSGu9zbH9lVN4FwY9FqUQ7FmzoZbu%2FusDIxejYzzZUvGZTCpkJwrPG6rr2flL4hg6tSQzrM5Rns9zDsstbCBjqkAZ%2B4R4zYkDWKAc66n2qTuX2%2B6rPrDDe5wOzYOIM3bA%2FRVAeYuNXV269adA%2BpoztYbRjMfyaO9SnesIqTXrmIJLJUPW7kM%2BeLtz0tlGahZiZnZK%2B%2Bv3ri1X3AivHpB3jB8oI3MCK4FbseINU5Z500tTCR83rqEiOZ0%2FKm28tEK0GOYPlMRyGpNiPpeqhnKEJW3DVIyHyvfuX4y8xsCm4eJOtMvvwW&X-Amz-Signature=491d53b8b523023ba023f1e7de60eef6a79f9e39ddfb75c7bbfbcd29fb785280&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHTXBMT7%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T190719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDv0Y2vbr4%2Bni9rodqMzyUAaID%2Fld9NaDxpJPCx08MXmQIhAP%2BgljQCokw68BZsz6tZoe5o%2F%2BMvbrxnIUYk1w%2BU2qPyKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzp0B0KV4UZjHsHruUq3AO8Mu%2BVwO6dlCdoQN2ZfeawK1K8Pg2oWVdSD5QxGIklPea946JfyIvjzYXlKLBkLXi2J0czmJw5wAkhzZ3zGLVSblzoPSOPzMUYsk5djzlduqAN3gUryeYnPj3h8UcHb7jHhsgJXxqg%2FWbvj61cN%2BqldKwADYYD7IvlIw%2F8x1fmS5naP1Az55VIShqrXiyyg0AeZykjpIXPmoAX%2FIJgrg1cYWRfQ0vxulsB8pIKrvVgMwVFRnGDa2js6tSh5klpRj8c3qVnIYBxyZeL7Ttv8loRMEmgsR4sNdPA4WbXmec1BrI16kxpCRRUOPXp%2Fijkrdo37KJdsLyNkErMqaTqwA7zEykQblOeU7nyUZjCXenp12%2BbmUSs8bcUwwiKG%2BbRU8Kz2l2L6GBdxFQVaR6D%2FzVfXWRuE%2FE7VJuJD6PPwJoCKOPDZehq706U81hILDxY%2FWWOq%2BQeoHHcCWpRhasw5PZ5VRonhsAGvvp7YVsyrmceOGxyHpyNa0LZwV5CN6N3KSEgGLZ75QyokMBYcDu42be8L3DLAR38Ni5Ff1RUdUgzZdwxC%2FSGu9zbH9lVN4FwY9FqUQ7FmzoZbu%2FusDIxejYzzZUvGZTCpkJwrPG6rr2flL4hg6tSQzrM5Rns9zDsstbCBjqkAZ%2B4R4zYkDWKAc66n2qTuX2%2B6rPrDDe5wOzYOIM3bA%2FRVAeYuNXV269adA%2BpoztYbRjMfyaO9SnesIqTXrmIJLJUPW7kM%2BeLtz0tlGahZiZnZK%2B%2Bv3ri1X3AivHpB3jB8oI3MCK4FbseINU5Z500tTCR83rqEiOZ0%2FKm28tEK0GOYPlMRyGpNiPpeqhnKEJW3DVIyHyvfuX4y8xsCm4eJOtMvvwW&X-Amz-Signature=e09f5b5457aedfd73cb96db0bac628032dc019ea326664dcc253dfed4349e6fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHTXBMT7%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T190719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDv0Y2vbr4%2Bni9rodqMzyUAaID%2Fld9NaDxpJPCx08MXmQIhAP%2BgljQCokw68BZsz6tZoe5o%2F%2BMvbrxnIUYk1w%2BU2qPyKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzp0B0KV4UZjHsHruUq3AO8Mu%2BVwO6dlCdoQN2ZfeawK1K8Pg2oWVdSD5QxGIklPea946JfyIvjzYXlKLBkLXi2J0czmJw5wAkhzZ3zGLVSblzoPSOPzMUYsk5djzlduqAN3gUryeYnPj3h8UcHb7jHhsgJXxqg%2FWbvj61cN%2BqldKwADYYD7IvlIw%2F8x1fmS5naP1Az55VIShqrXiyyg0AeZykjpIXPmoAX%2FIJgrg1cYWRfQ0vxulsB8pIKrvVgMwVFRnGDa2js6tSh5klpRj8c3qVnIYBxyZeL7Ttv8loRMEmgsR4sNdPA4WbXmec1BrI16kxpCRRUOPXp%2Fijkrdo37KJdsLyNkErMqaTqwA7zEykQblOeU7nyUZjCXenp12%2BbmUSs8bcUwwiKG%2BbRU8Kz2l2L6GBdxFQVaR6D%2FzVfXWRuE%2FE7VJuJD6PPwJoCKOPDZehq706U81hILDxY%2FWWOq%2BQeoHHcCWpRhasw5PZ5VRonhsAGvvp7YVsyrmceOGxyHpyNa0LZwV5CN6N3KSEgGLZ75QyokMBYcDu42be8L3DLAR38Ni5Ff1RUdUgzZdwxC%2FSGu9zbH9lVN4FwY9FqUQ7FmzoZbu%2FusDIxejYzzZUvGZTCpkJwrPG6rr2flL4hg6tSQzrM5Rns9zDsstbCBjqkAZ%2B4R4zYkDWKAc66n2qTuX2%2B6rPrDDe5wOzYOIM3bA%2FRVAeYuNXV269adA%2BpoztYbRjMfyaO9SnesIqTXrmIJLJUPW7kM%2BeLtz0tlGahZiZnZK%2B%2Bv3ri1X3AivHpB3jB8oI3MCK4FbseINU5Z500tTCR83rqEiOZ0%2FKm28tEK0GOYPlMRyGpNiPpeqhnKEJW3DVIyHyvfuX4y8xsCm4eJOtMvvwW&X-Amz-Signature=c01147f7d7a70f560192da67f18dce42f81d9d140131565db335d0315bc7e6b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
