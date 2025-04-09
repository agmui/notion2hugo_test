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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLAPSP6D%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T190701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCm2nYxAdRNdTDTGhIlzMqozYFi%2FyJ46UpBT2xP1UfdlwIgIWTlPwo%2FK%2B0QccA4C3KCZRvD8P%2BRwXXFsYdplMyi1RkqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkROfVFo4w0ckebkyrcA5%2BIEIkT7AdTXpw6X1qhP6ggWOxnqTcH8y8WnIhaFGoVb0Zj7TW8H353jYWAA1yM8ZNaKXOydrjyPJ7lmVXaL1A%2BjSL23hSI8bjVpSU9xBRRxTlXlYSK%2FpMStIMQr6HJShgWzfqADqlFRDaON0tNVU2ZrruZlY%2BlksnoHqV5LFkWl%2B%2Fw7UVkD8UP4Cl1m81nbP87ew%2B2GUxdCmjGLP%2F7NsKzacoT00ysPLEJ1iHoYVCb9HquBW8ToSPRsenZac8B416jXSk8G6aNLAISQjAkF5ZRgkqXmn0fBXrTq6Nw14uqrMltimqzyaXWAtfsg9KB8wx48zg67qHK60%2BkppAdOvDhzkmBIU8nNuVfx7mMMpM2FuyRbVbCGtqdtq0UKdJ%2F%2B%2BrlzBufsB43ixEP%2FqGYbCCaQSci029yLkXfKKhrFtmnjxNLt5noks8x8MtVBzfH%2BuWQMCwrtNjEzHYhEXL69t1diQBeVP5Z7%2BM2UG0Qq2Le%2BrlPjSjrGrGLyB53S6EOUAF%2BijiSq3msS3UlL5y%2Bj1Afu6rfKzJJe1wRLxbXPUtejX1DMUdrZ0TN9SxE8ZW6GxCpKcKykgF3Kr4eDahUUyzxl%2Fg0E16rynt4sE90GacDQV1oVKGWBWdiXWI1MNT62r8GOqUBbTRL3V9PZeHxh7HMEC7ErsScNR3HXtNa28Os6F%2FrjMZPQ%2Bs4ML7yPIJEiSMhynuhqIU6XMjzxooPDhe8%2BpAZmUPcNx4T%2FO3MRpmOQ%2BzBgUU8jGs7u2t4DQO8G3zZsTE0SDOqO2SBYYTVRIABa0KHNdGhiuECQVhFdniGKJnXAdef8Tcy6tV2lRy09W%2BZegQFEY94WNlpWTaRvYtQ8axYg4IG0KQ5&X-Amz-Signature=dc5226c5a7a8d85cdbc59ac0327a0e8e895ad3c8674ae4b820bc1cb49f859c38&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLAPSP6D%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T190701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCm2nYxAdRNdTDTGhIlzMqozYFi%2FyJ46UpBT2xP1UfdlwIgIWTlPwo%2FK%2B0QccA4C3KCZRvD8P%2BRwXXFsYdplMyi1RkqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkROfVFo4w0ckebkyrcA5%2BIEIkT7AdTXpw6X1qhP6ggWOxnqTcH8y8WnIhaFGoVb0Zj7TW8H353jYWAA1yM8ZNaKXOydrjyPJ7lmVXaL1A%2BjSL23hSI8bjVpSU9xBRRxTlXlYSK%2FpMStIMQr6HJShgWzfqADqlFRDaON0tNVU2ZrruZlY%2BlksnoHqV5LFkWl%2B%2Fw7UVkD8UP4Cl1m81nbP87ew%2B2GUxdCmjGLP%2F7NsKzacoT00ysPLEJ1iHoYVCb9HquBW8ToSPRsenZac8B416jXSk8G6aNLAISQjAkF5ZRgkqXmn0fBXrTq6Nw14uqrMltimqzyaXWAtfsg9KB8wx48zg67qHK60%2BkppAdOvDhzkmBIU8nNuVfx7mMMpM2FuyRbVbCGtqdtq0UKdJ%2F%2B%2BrlzBufsB43ixEP%2FqGYbCCaQSci029yLkXfKKhrFtmnjxNLt5noks8x8MtVBzfH%2BuWQMCwrtNjEzHYhEXL69t1diQBeVP5Z7%2BM2UG0Qq2Le%2BrlPjSjrGrGLyB53S6EOUAF%2BijiSq3msS3UlL5y%2Bj1Afu6rfKzJJe1wRLxbXPUtejX1DMUdrZ0TN9SxE8ZW6GxCpKcKykgF3Kr4eDahUUyzxl%2Fg0E16rynt4sE90GacDQV1oVKGWBWdiXWI1MNT62r8GOqUBbTRL3V9PZeHxh7HMEC7ErsScNR3HXtNa28Os6F%2FrjMZPQ%2Bs4ML7yPIJEiSMhynuhqIU6XMjzxooPDhe8%2BpAZmUPcNx4T%2FO3MRpmOQ%2BzBgUU8jGs7u2t4DQO8G3zZsTE0SDOqO2SBYYTVRIABa0KHNdGhiuECQVhFdniGKJnXAdef8Tcy6tV2lRy09W%2BZegQFEY94WNlpWTaRvYtQ8axYg4IG0KQ5&X-Amz-Signature=57a9df9eede7523842ca8c61cb6cc06a68431f1f8058d42002bdbd923de7be0d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLAPSP6D%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T190702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCm2nYxAdRNdTDTGhIlzMqozYFi%2FyJ46UpBT2xP1UfdlwIgIWTlPwo%2FK%2B0QccA4C3KCZRvD8P%2BRwXXFsYdplMyi1RkqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkROfVFo4w0ckebkyrcA5%2BIEIkT7AdTXpw6X1qhP6ggWOxnqTcH8y8WnIhaFGoVb0Zj7TW8H353jYWAA1yM8ZNaKXOydrjyPJ7lmVXaL1A%2BjSL23hSI8bjVpSU9xBRRxTlXlYSK%2FpMStIMQr6HJShgWzfqADqlFRDaON0tNVU2ZrruZlY%2BlksnoHqV5LFkWl%2B%2Fw7UVkD8UP4Cl1m81nbP87ew%2B2GUxdCmjGLP%2F7NsKzacoT00ysPLEJ1iHoYVCb9HquBW8ToSPRsenZac8B416jXSk8G6aNLAISQjAkF5ZRgkqXmn0fBXrTq6Nw14uqrMltimqzyaXWAtfsg9KB8wx48zg67qHK60%2BkppAdOvDhzkmBIU8nNuVfx7mMMpM2FuyRbVbCGtqdtq0UKdJ%2F%2B%2BrlzBufsB43ixEP%2FqGYbCCaQSci029yLkXfKKhrFtmnjxNLt5noks8x8MtVBzfH%2BuWQMCwrtNjEzHYhEXL69t1diQBeVP5Z7%2BM2UG0Qq2Le%2BrlPjSjrGrGLyB53S6EOUAF%2BijiSq3msS3UlL5y%2Bj1Afu6rfKzJJe1wRLxbXPUtejX1DMUdrZ0TN9SxE8ZW6GxCpKcKykgF3Kr4eDahUUyzxl%2Fg0E16rynt4sE90GacDQV1oVKGWBWdiXWI1MNT62r8GOqUBbTRL3V9PZeHxh7HMEC7ErsScNR3HXtNa28Os6F%2FrjMZPQ%2Bs4ML7yPIJEiSMhynuhqIU6XMjzxooPDhe8%2BpAZmUPcNx4T%2FO3MRpmOQ%2BzBgUU8jGs7u2t4DQO8G3zZsTE0SDOqO2SBYYTVRIABa0KHNdGhiuECQVhFdniGKJnXAdef8Tcy6tV2lRy09W%2BZegQFEY94WNlpWTaRvYtQ8axYg4IG0KQ5&X-Amz-Signature=1cd402f5848566e25314fc49b5f1500171305f217b00adc1d895ea6c1e5a92f4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLAPSP6D%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T190701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCm2nYxAdRNdTDTGhIlzMqozYFi%2FyJ46UpBT2xP1UfdlwIgIWTlPwo%2FK%2B0QccA4C3KCZRvD8P%2BRwXXFsYdplMyi1RkqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkROfVFo4w0ckebkyrcA5%2BIEIkT7AdTXpw6X1qhP6ggWOxnqTcH8y8WnIhaFGoVb0Zj7TW8H353jYWAA1yM8ZNaKXOydrjyPJ7lmVXaL1A%2BjSL23hSI8bjVpSU9xBRRxTlXlYSK%2FpMStIMQr6HJShgWzfqADqlFRDaON0tNVU2ZrruZlY%2BlksnoHqV5LFkWl%2B%2Fw7UVkD8UP4Cl1m81nbP87ew%2B2GUxdCmjGLP%2F7NsKzacoT00ysPLEJ1iHoYVCb9HquBW8ToSPRsenZac8B416jXSk8G6aNLAISQjAkF5ZRgkqXmn0fBXrTq6Nw14uqrMltimqzyaXWAtfsg9KB8wx48zg67qHK60%2BkppAdOvDhzkmBIU8nNuVfx7mMMpM2FuyRbVbCGtqdtq0UKdJ%2F%2B%2BrlzBufsB43ixEP%2FqGYbCCaQSci029yLkXfKKhrFtmnjxNLt5noks8x8MtVBzfH%2BuWQMCwrtNjEzHYhEXL69t1diQBeVP5Z7%2BM2UG0Qq2Le%2BrlPjSjrGrGLyB53S6EOUAF%2BijiSq3msS3UlL5y%2Bj1Afu6rfKzJJe1wRLxbXPUtejX1DMUdrZ0TN9SxE8ZW6GxCpKcKykgF3Kr4eDahUUyzxl%2Fg0E16rynt4sE90GacDQV1oVKGWBWdiXWI1MNT62r8GOqUBbTRL3V9PZeHxh7HMEC7ErsScNR3HXtNa28Os6F%2FrjMZPQ%2Bs4ML7yPIJEiSMhynuhqIU6XMjzxooPDhe8%2BpAZmUPcNx4T%2FO3MRpmOQ%2BzBgUU8jGs7u2t4DQO8G3zZsTE0SDOqO2SBYYTVRIABa0KHNdGhiuECQVhFdniGKJnXAdef8Tcy6tV2lRy09W%2BZegQFEY94WNlpWTaRvYtQ8axYg4IG0KQ5&X-Amz-Signature=6f79c11169c706c0dbac5853bc972a4f6148ebd1ae596ba2b1c05a9662488fd8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLAPSP6D%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T190702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCm2nYxAdRNdTDTGhIlzMqozYFi%2FyJ46UpBT2xP1UfdlwIgIWTlPwo%2FK%2B0QccA4C3KCZRvD8P%2BRwXXFsYdplMyi1RkqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkROfVFo4w0ckebkyrcA5%2BIEIkT7AdTXpw6X1qhP6ggWOxnqTcH8y8WnIhaFGoVb0Zj7TW8H353jYWAA1yM8ZNaKXOydrjyPJ7lmVXaL1A%2BjSL23hSI8bjVpSU9xBRRxTlXlYSK%2FpMStIMQr6HJShgWzfqADqlFRDaON0tNVU2ZrruZlY%2BlksnoHqV5LFkWl%2B%2Fw7UVkD8UP4Cl1m81nbP87ew%2B2GUxdCmjGLP%2F7NsKzacoT00ysPLEJ1iHoYVCb9HquBW8ToSPRsenZac8B416jXSk8G6aNLAISQjAkF5ZRgkqXmn0fBXrTq6Nw14uqrMltimqzyaXWAtfsg9KB8wx48zg67qHK60%2BkppAdOvDhzkmBIU8nNuVfx7mMMpM2FuyRbVbCGtqdtq0UKdJ%2F%2B%2BrlzBufsB43ixEP%2FqGYbCCaQSci029yLkXfKKhrFtmnjxNLt5noks8x8MtVBzfH%2BuWQMCwrtNjEzHYhEXL69t1diQBeVP5Z7%2BM2UG0Qq2Le%2BrlPjSjrGrGLyB53S6EOUAF%2BijiSq3msS3UlL5y%2Bj1Afu6rfKzJJe1wRLxbXPUtejX1DMUdrZ0TN9SxE8ZW6GxCpKcKykgF3Kr4eDahUUyzxl%2Fg0E16rynt4sE90GacDQV1oVKGWBWdiXWI1MNT62r8GOqUBbTRL3V9PZeHxh7HMEC7ErsScNR3HXtNa28Os6F%2FrjMZPQ%2Bs4ML7yPIJEiSMhynuhqIU6XMjzxooPDhe8%2BpAZmUPcNx4T%2FO3MRpmOQ%2BzBgUU8jGs7u2t4DQO8G3zZsTE0SDOqO2SBYYTVRIABa0KHNdGhiuECQVhFdniGKJnXAdef8Tcy6tV2lRy09W%2BZegQFEY94WNlpWTaRvYtQ8axYg4IG0KQ5&X-Amz-Signature=c5fac92b369b21630e13e33f489fdeabbca67369a7eb0b6533163c89cee4f0d6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLAPSP6D%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T190702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCm2nYxAdRNdTDTGhIlzMqozYFi%2FyJ46UpBT2xP1UfdlwIgIWTlPwo%2FK%2B0QccA4C3KCZRvD8P%2BRwXXFsYdplMyi1RkqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkROfVFo4w0ckebkyrcA5%2BIEIkT7AdTXpw6X1qhP6ggWOxnqTcH8y8WnIhaFGoVb0Zj7TW8H353jYWAA1yM8ZNaKXOydrjyPJ7lmVXaL1A%2BjSL23hSI8bjVpSU9xBRRxTlXlYSK%2FpMStIMQr6HJShgWzfqADqlFRDaON0tNVU2ZrruZlY%2BlksnoHqV5LFkWl%2B%2Fw7UVkD8UP4Cl1m81nbP87ew%2B2GUxdCmjGLP%2F7NsKzacoT00ysPLEJ1iHoYVCb9HquBW8ToSPRsenZac8B416jXSk8G6aNLAISQjAkF5ZRgkqXmn0fBXrTq6Nw14uqrMltimqzyaXWAtfsg9KB8wx48zg67qHK60%2BkppAdOvDhzkmBIU8nNuVfx7mMMpM2FuyRbVbCGtqdtq0UKdJ%2F%2B%2BrlzBufsB43ixEP%2FqGYbCCaQSci029yLkXfKKhrFtmnjxNLt5noks8x8MtVBzfH%2BuWQMCwrtNjEzHYhEXL69t1diQBeVP5Z7%2BM2UG0Qq2Le%2BrlPjSjrGrGLyB53S6EOUAF%2BijiSq3msS3UlL5y%2Bj1Afu6rfKzJJe1wRLxbXPUtejX1DMUdrZ0TN9SxE8ZW6GxCpKcKykgF3Kr4eDahUUyzxl%2Fg0E16rynt4sE90GacDQV1oVKGWBWdiXWI1MNT62r8GOqUBbTRL3V9PZeHxh7HMEC7ErsScNR3HXtNa28Os6F%2FrjMZPQ%2Bs4ML7yPIJEiSMhynuhqIU6XMjzxooPDhe8%2BpAZmUPcNx4T%2FO3MRpmOQ%2BzBgUU8jGs7u2t4DQO8G3zZsTE0SDOqO2SBYYTVRIABa0KHNdGhiuECQVhFdniGKJnXAdef8Tcy6tV2lRy09W%2BZegQFEY94WNlpWTaRvYtQ8axYg4IG0KQ5&X-Amz-Signature=97439e752ad733b134c6944a8c43e461218359acf03b60cedde4cb5cafe2b641&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLAPSP6D%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T190702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCm2nYxAdRNdTDTGhIlzMqozYFi%2FyJ46UpBT2xP1UfdlwIgIWTlPwo%2FK%2B0QccA4C3KCZRvD8P%2BRwXXFsYdplMyi1RkqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkROfVFo4w0ckebkyrcA5%2BIEIkT7AdTXpw6X1qhP6ggWOxnqTcH8y8WnIhaFGoVb0Zj7TW8H353jYWAA1yM8ZNaKXOydrjyPJ7lmVXaL1A%2BjSL23hSI8bjVpSU9xBRRxTlXlYSK%2FpMStIMQr6HJShgWzfqADqlFRDaON0tNVU2ZrruZlY%2BlksnoHqV5LFkWl%2B%2Fw7UVkD8UP4Cl1m81nbP87ew%2B2GUxdCmjGLP%2F7NsKzacoT00ysPLEJ1iHoYVCb9HquBW8ToSPRsenZac8B416jXSk8G6aNLAISQjAkF5ZRgkqXmn0fBXrTq6Nw14uqrMltimqzyaXWAtfsg9KB8wx48zg67qHK60%2BkppAdOvDhzkmBIU8nNuVfx7mMMpM2FuyRbVbCGtqdtq0UKdJ%2F%2B%2BrlzBufsB43ixEP%2FqGYbCCaQSci029yLkXfKKhrFtmnjxNLt5noks8x8MtVBzfH%2BuWQMCwrtNjEzHYhEXL69t1diQBeVP5Z7%2BM2UG0Qq2Le%2BrlPjSjrGrGLyB53S6EOUAF%2BijiSq3msS3UlL5y%2Bj1Afu6rfKzJJe1wRLxbXPUtejX1DMUdrZ0TN9SxE8ZW6GxCpKcKykgF3Kr4eDahUUyzxl%2Fg0E16rynt4sE90GacDQV1oVKGWBWdiXWI1MNT62r8GOqUBbTRL3V9PZeHxh7HMEC7ErsScNR3HXtNa28Os6F%2FrjMZPQ%2Bs4ML7yPIJEiSMhynuhqIU6XMjzxooPDhe8%2BpAZmUPcNx4T%2FO3MRpmOQ%2BzBgUU8jGs7u2t4DQO8G3zZsTE0SDOqO2SBYYTVRIABa0KHNdGhiuECQVhFdniGKJnXAdef8Tcy6tV2lRy09W%2BZegQFEY94WNlpWTaRvYtQ8axYg4IG0KQ5&X-Amz-Signature=d1cc3ff45c05ce6dd5fb91374591d4c5d4814fa3d28210f0604a42f944889129&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
