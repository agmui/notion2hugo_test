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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT3ZPDXH%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T100919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDhz0K1K6bYP4XFJ6Vuho4qcqEqVoZHp8Ew5U5dxlv%2FtgIgOrGxqX9FnVR3ntd5uLmV7vOxmd9MQ8PsGw5qnPTLouMqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKDvLp3wCpOYSGlbircA7Ev85HhphSEOwjiBFblAF3zfjhriiCzLH3j2%2BivFFzA8MGwgsNj9mknE1WbO4gbliySF7fSEPd%2B0Y4WlZ5NkFrUIxuUuF6w27xPX7PJf%2FjXdwjjN1wlR2F1GVH475mRdt9zXlkWbEkRObPEa85csBC7llqGZeE%2BQ8WwIxw6sQxn3e120KsOIxtKbt4BL%2BMUagB4zLqV5hmSstiSHzizrLFPYdnubi5yU1kDB7Mdy1yD58kjUS6rWG2bzZNbFkIArIBh6%2FbXdlGd%2Bqlf%2FcNqM4pI0FEKHeOjX%2FwGVUF22SOyOdm8ZVLG30w2jUTGiybFKrs6fEYOOp7HH4I21bo8pcl8hyjlh6XO3iFYTlqopIoKeiczhfF%2F0HZfKgCzk9x9IEallRYpgWRxj6B5xSut7FI8qNLafGxRywP94o032u5e9K1hrbyATvGehaziv7k4NRrCnWnB0GaYqPLtwv%2F%2FKQQMWRKHJjxtCi206pH4IR7wIVYGavOy4fvQ35ydagq33O1DP4%2BlqsgNciEHvfJS8pI7jStC5leicaxPanQDmf9tABOZMk%2BASgbAe9McaF%2BpZYE1diJfIhwcR6Ce3M%2BfbZxaFbs2NAAzk6GT3s5QVFLEdgz5SGSv8cb5qqe3MMXOqb8GOqUB%2FSmUevh%2B%2BeDUfkE8jQI93Xfh2rLsd9dcfxJGXIBJQU6738eNnD5w9VUdytr3F5W8YR%2FK8odZmfQ26qwyYZC0QxHx9B86j8eMS1zN4GEnGSCECoVQnItHtYK%2FGIvL6Wo6udn9FGS8rSFx4S7pee0qo%2Fz8mIbu%2BUsdBnzLYSEFOW6GbNdgWC893h70DoqtynbQ3%2B6mQtJjyKSu7CjIkLLszjhafo%2BX&X-Amz-Signature=ee85aaa910bbd0de12bedc18f394889c0103d95b5c4a19faeffd01626a30742f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT3ZPDXH%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T100919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDhz0K1K6bYP4XFJ6Vuho4qcqEqVoZHp8Ew5U5dxlv%2FtgIgOrGxqX9FnVR3ntd5uLmV7vOxmd9MQ8PsGw5qnPTLouMqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKDvLp3wCpOYSGlbircA7Ev85HhphSEOwjiBFblAF3zfjhriiCzLH3j2%2BivFFzA8MGwgsNj9mknE1WbO4gbliySF7fSEPd%2B0Y4WlZ5NkFrUIxuUuF6w27xPX7PJf%2FjXdwjjN1wlR2F1GVH475mRdt9zXlkWbEkRObPEa85csBC7llqGZeE%2BQ8WwIxw6sQxn3e120KsOIxtKbt4BL%2BMUagB4zLqV5hmSstiSHzizrLFPYdnubi5yU1kDB7Mdy1yD58kjUS6rWG2bzZNbFkIArIBh6%2FbXdlGd%2Bqlf%2FcNqM4pI0FEKHeOjX%2FwGVUF22SOyOdm8ZVLG30w2jUTGiybFKrs6fEYOOp7HH4I21bo8pcl8hyjlh6XO3iFYTlqopIoKeiczhfF%2F0HZfKgCzk9x9IEallRYpgWRxj6B5xSut7FI8qNLafGxRywP94o032u5e9K1hrbyATvGehaziv7k4NRrCnWnB0GaYqPLtwv%2F%2FKQQMWRKHJjxtCi206pH4IR7wIVYGavOy4fvQ35ydagq33O1DP4%2BlqsgNciEHvfJS8pI7jStC5leicaxPanQDmf9tABOZMk%2BASgbAe9McaF%2BpZYE1diJfIhwcR6Ce3M%2BfbZxaFbs2NAAzk6GT3s5QVFLEdgz5SGSv8cb5qqe3MMXOqb8GOqUB%2FSmUevh%2B%2BeDUfkE8jQI93Xfh2rLsd9dcfxJGXIBJQU6738eNnD5w9VUdytr3F5W8YR%2FK8odZmfQ26qwyYZC0QxHx9B86j8eMS1zN4GEnGSCECoVQnItHtYK%2FGIvL6Wo6udn9FGS8rSFx4S7pee0qo%2Fz8mIbu%2BUsdBnzLYSEFOW6GbNdgWC893h70DoqtynbQ3%2B6mQtJjyKSu7CjIkLLszjhafo%2BX&X-Amz-Signature=8fdc201fb1b7a4674dbbe414714ef13a164941b17c6203625b1cad022702b6b9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT3ZPDXH%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T100919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDhz0K1K6bYP4XFJ6Vuho4qcqEqVoZHp8Ew5U5dxlv%2FtgIgOrGxqX9FnVR3ntd5uLmV7vOxmd9MQ8PsGw5qnPTLouMqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKDvLp3wCpOYSGlbircA7Ev85HhphSEOwjiBFblAF3zfjhriiCzLH3j2%2BivFFzA8MGwgsNj9mknE1WbO4gbliySF7fSEPd%2B0Y4WlZ5NkFrUIxuUuF6w27xPX7PJf%2FjXdwjjN1wlR2F1GVH475mRdt9zXlkWbEkRObPEa85csBC7llqGZeE%2BQ8WwIxw6sQxn3e120KsOIxtKbt4BL%2BMUagB4zLqV5hmSstiSHzizrLFPYdnubi5yU1kDB7Mdy1yD58kjUS6rWG2bzZNbFkIArIBh6%2FbXdlGd%2Bqlf%2FcNqM4pI0FEKHeOjX%2FwGVUF22SOyOdm8ZVLG30w2jUTGiybFKrs6fEYOOp7HH4I21bo8pcl8hyjlh6XO3iFYTlqopIoKeiczhfF%2F0HZfKgCzk9x9IEallRYpgWRxj6B5xSut7FI8qNLafGxRywP94o032u5e9K1hrbyATvGehaziv7k4NRrCnWnB0GaYqPLtwv%2F%2FKQQMWRKHJjxtCi206pH4IR7wIVYGavOy4fvQ35ydagq33O1DP4%2BlqsgNciEHvfJS8pI7jStC5leicaxPanQDmf9tABOZMk%2BASgbAe9McaF%2BpZYE1diJfIhwcR6Ce3M%2BfbZxaFbs2NAAzk6GT3s5QVFLEdgz5SGSv8cb5qqe3MMXOqb8GOqUB%2FSmUevh%2B%2BeDUfkE8jQI93Xfh2rLsd9dcfxJGXIBJQU6738eNnD5w9VUdytr3F5W8YR%2FK8odZmfQ26qwyYZC0QxHx9B86j8eMS1zN4GEnGSCECoVQnItHtYK%2FGIvL6Wo6udn9FGS8rSFx4S7pee0qo%2Fz8mIbu%2BUsdBnzLYSEFOW6GbNdgWC893h70DoqtynbQ3%2B6mQtJjyKSu7CjIkLLszjhafo%2BX&X-Amz-Signature=b1ad0d06aec740edbd2cac0015cb408691d1d076fd053d48fe00008242ddea99&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT3ZPDXH%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T100919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDhz0K1K6bYP4XFJ6Vuho4qcqEqVoZHp8Ew5U5dxlv%2FtgIgOrGxqX9FnVR3ntd5uLmV7vOxmd9MQ8PsGw5qnPTLouMqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKDvLp3wCpOYSGlbircA7Ev85HhphSEOwjiBFblAF3zfjhriiCzLH3j2%2BivFFzA8MGwgsNj9mknE1WbO4gbliySF7fSEPd%2B0Y4WlZ5NkFrUIxuUuF6w27xPX7PJf%2FjXdwjjN1wlR2F1GVH475mRdt9zXlkWbEkRObPEa85csBC7llqGZeE%2BQ8WwIxw6sQxn3e120KsOIxtKbt4BL%2BMUagB4zLqV5hmSstiSHzizrLFPYdnubi5yU1kDB7Mdy1yD58kjUS6rWG2bzZNbFkIArIBh6%2FbXdlGd%2Bqlf%2FcNqM4pI0FEKHeOjX%2FwGVUF22SOyOdm8ZVLG30w2jUTGiybFKrs6fEYOOp7HH4I21bo8pcl8hyjlh6XO3iFYTlqopIoKeiczhfF%2F0HZfKgCzk9x9IEallRYpgWRxj6B5xSut7FI8qNLafGxRywP94o032u5e9K1hrbyATvGehaziv7k4NRrCnWnB0GaYqPLtwv%2F%2FKQQMWRKHJjxtCi206pH4IR7wIVYGavOy4fvQ35ydagq33O1DP4%2BlqsgNciEHvfJS8pI7jStC5leicaxPanQDmf9tABOZMk%2BASgbAe9McaF%2BpZYE1diJfIhwcR6Ce3M%2BfbZxaFbs2NAAzk6GT3s5QVFLEdgz5SGSv8cb5qqe3MMXOqb8GOqUB%2FSmUevh%2B%2BeDUfkE8jQI93Xfh2rLsd9dcfxJGXIBJQU6738eNnD5w9VUdytr3F5W8YR%2FK8odZmfQ26qwyYZC0QxHx9B86j8eMS1zN4GEnGSCECoVQnItHtYK%2FGIvL6Wo6udn9FGS8rSFx4S7pee0qo%2Fz8mIbu%2BUsdBnzLYSEFOW6GbNdgWC893h70DoqtynbQ3%2B6mQtJjyKSu7CjIkLLszjhafo%2BX&X-Amz-Signature=83312bb7e4669b8be4521f657661537471535da21d4f462c3992cf69df324318&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT3ZPDXH%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T100919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDhz0K1K6bYP4XFJ6Vuho4qcqEqVoZHp8Ew5U5dxlv%2FtgIgOrGxqX9FnVR3ntd5uLmV7vOxmd9MQ8PsGw5qnPTLouMqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKDvLp3wCpOYSGlbircA7Ev85HhphSEOwjiBFblAF3zfjhriiCzLH3j2%2BivFFzA8MGwgsNj9mknE1WbO4gbliySF7fSEPd%2B0Y4WlZ5NkFrUIxuUuF6w27xPX7PJf%2FjXdwjjN1wlR2F1GVH475mRdt9zXlkWbEkRObPEa85csBC7llqGZeE%2BQ8WwIxw6sQxn3e120KsOIxtKbt4BL%2BMUagB4zLqV5hmSstiSHzizrLFPYdnubi5yU1kDB7Mdy1yD58kjUS6rWG2bzZNbFkIArIBh6%2FbXdlGd%2Bqlf%2FcNqM4pI0FEKHeOjX%2FwGVUF22SOyOdm8ZVLG30w2jUTGiybFKrs6fEYOOp7HH4I21bo8pcl8hyjlh6XO3iFYTlqopIoKeiczhfF%2F0HZfKgCzk9x9IEallRYpgWRxj6B5xSut7FI8qNLafGxRywP94o032u5e9K1hrbyATvGehaziv7k4NRrCnWnB0GaYqPLtwv%2F%2FKQQMWRKHJjxtCi206pH4IR7wIVYGavOy4fvQ35ydagq33O1DP4%2BlqsgNciEHvfJS8pI7jStC5leicaxPanQDmf9tABOZMk%2BASgbAe9McaF%2BpZYE1diJfIhwcR6Ce3M%2BfbZxaFbs2NAAzk6GT3s5QVFLEdgz5SGSv8cb5qqe3MMXOqb8GOqUB%2FSmUevh%2B%2BeDUfkE8jQI93Xfh2rLsd9dcfxJGXIBJQU6738eNnD5w9VUdytr3F5W8YR%2FK8odZmfQ26qwyYZC0QxHx9B86j8eMS1zN4GEnGSCECoVQnItHtYK%2FGIvL6Wo6udn9FGS8rSFx4S7pee0qo%2Fz8mIbu%2BUsdBnzLYSEFOW6GbNdgWC893h70DoqtynbQ3%2B6mQtJjyKSu7CjIkLLszjhafo%2BX&X-Amz-Signature=a7de1e38efb89288063f96da4de0d3e01564e985c405999a9585e2ad1a8d17f5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT3ZPDXH%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T100919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDhz0K1K6bYP4XFJ6Vuho4qcqEqVoZHp8Ew5U5dxlv%2FtgIgOrGxqX9FnVR3ntd5uLmV7vOxmd9MQ8PsGw5qnPTLouMqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKDvLp3wCpOYSGlbircA7Ev85HhphSEOwjiBFblAF3zfjhriiCzLH3j2%2BivFFzA8MGwgsNj9mknE1WbO4gbliySF7fSEPd%2B0Y4WlZ5NkFrUIxuUuF6w27xPX7PJf%2FjXdwjjN1wlR2F1GVH475mRdt9zXlkWbEkRObPEa85csBC7llqGZeE%2BQ8WwIxw6sQxn3e120KsOIxtKbt4BL%2BMUagB4zLqV5hmSstiSHzizrLFPYdnubi5yU1kDB7Mdy1yD58kjUS6rWG2bzZNbFkIArIBh6%2FbXdlGd%2Bqlf%2FcNqM4pI0FEKHeOjX%2FwGVUF22SOyOdm8ZVLG30w2jUTGiybFKrs6fEYOOp7HH4I21bo8pcl8hyjlh6XO3iFYTlqopIoKeiczhfF%2F0HZfKgCzk9x9IEallRYpgWRxj6B5xSut7FI8qNLafGxRywP94o032u5e9K1hrbyATvGehaziv7k4NRrCnWnB0GaYqPLtwv%2F%2FKQQMWRKHJjxtCi206pH4IR7wIVYGavOy4fvQ35ydagq33O1DP4%2BlqsgNciEHvfJS8pI7jStC5leicaxPanQDmf9tABOZMk%2BASgbAe9McaF%2BpZYE1diJfIhwcR6Ce3M%2BfbZxaFbs2NAAzk6GT3s5QVFLEdgz5SGSv8cb5qqe3MMXOqb8GOqUB%2FSmUevh%2B%2BeDUfkE8jQI93Xfh2rLsd9dcfxJGXIBJQU6738eNnD5w9VUdytr3F5W8YR%2FK8odZmfQ26qwyYZC0QxHx9B86j8eMS1zN4GEnGSCECoVQnItHtYK%2FGIvL6Wo6udn9FGS8rSFx4S7pee0qo%2Fz8mIbu%2BUsdBnzLYSEFOW6GbNdgWC893h70DoqtynbQ3%2B6mQtJjyKSu7CjIkLLszjhafo%2BX&X-Amz-Signature=ccf57e7cafd996918091db791f7890f743f988b727f9c902bc2e575268e24a53&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT3ZPDXH%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T100919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDhz0K1K6bYP4XFJ6Vuho4qcqEqVoZHp8Ew5U5dxlv%2FtgIgOrGxqX9FnVR3ntd5uLmV7vOxmd9MQ8PsGw5qnPTLouMqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKDvLp3wCpOYSGlbircA7Ev85HhphSEOwjiBFblAF3zfjhriiCzLH3j2%2BivFFzA8MGwgsNj9mknE1WbO4gbliySF7fSEPd%2B0Y4WlZ5NkFrUIxuUuF6w27xPX7PJf%2FjXdwjjN1wlR2F1GVH475mRdt9zXlkWbEkRObPEa85csBC7llqGZeE%2BQ8WwIxw6sQxn3e120KsOIxtKbt4BL%2BMUagB4zLqV5hmSstiSHzizrLFPYdnubi5yU1kDB7Mdy1yD58kjUS6rWG2bzZNbFkIArIBh6%2FbXdlGd%2Bqlf%2FcNqM4pI0FEKHeOjX%2FwGVUF22SOyOdm8ZVLG30w2jUTGiybFKrs6fEYOOp7HH4I21bo8pcl8hyjlh6XO3iFYTlqopIoKeiczhfF%2F0HZfKgCzk9x9IEallRYpgWRxj6B5xSut7FI8qNLafGxRywP94o032u5e9K1hrbyATvGehaziv7k4NRrCnWnB0GaYqPLtwv%2F%2FKQQMWRKHJjxtCi206pH4IR7wIVYGavOy4fvQ35ydagq33O1DP4%2BlqsgNciEHvfJS8pI7jStC5leicaxPanQDmf9tABOZMk%2BASgbAe9McaF%2BpZYE1diJfIhwcR6Ce3M%2BfbZxaFbs2NAAzk6GT3s5QVFLEdgz5SGSv8cb5qqe3MMXOqb8GOqUB%2FSmUevh%2B%2BeDUfkE8jQI93Xfh2rLsd9dcfxJGXIBJQU6738eNnD5w9VUdytr3F5W8YR%2FK8odZmfQ26qwyYZC0QxHx9B86j8eMS1zN4GEnGSCECoVQnItHtYK%2FGIvL6Wo6udn9FGS8rSFx4S7pee0qo%2Fz8mIbu%2BUsdBnzLYSEFOW6GbNdgWC893h70DoqtynbQ3%2B6mQtJjyKSu7CjIkLLszjhafo%2BX&X-Amz-Signature=d97fe1699356247901d2391539793f0a6099f87eff341c2d2d0765bdf57ee619&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
