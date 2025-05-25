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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2W3K62Y%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCMFD2tBTc1lzM5OZSckyAk5GEVdJnseqAyBuXBbL4QQQIhAMU3YEuqLErtUIwv2%2F3cMFj%2BY9F9k1o1mMCNKcj9aO1bKv8DCDcQABoMNjM3NDIzMTgzODA1IgzZH2lMdnvZ7LAxmR0q3ANVtLA0EBaHJs3YDBx03lmdWpi844q3ytlMFduCZ4gbMRzDsAxaqmI1QsA775qFqR2a0gt55KoebQoMopwEuQT62tj38KevAkh6cJmk%2F1KZd4LaovwGhWsRjwjWIyEqG8yEgOy5xvguUb7IhiBmQCGE5qcISInPFok24O7FvTvcLXVcJk5UBOLcHBSMqQefXdz5rCmzZM%2FY%2F4o5dK1f9yWEyv5aokamwBT%2FFwIluafvbrZ%2FHtWmlGfDUSFwz9WyyykuRy6seg6C3rGqgDZ01cZ792QSbW0Ket15hTr0F47%2BEhTe2NoVNUGsc6F%2FsNLfMZ5szu%2Fpga10vOoD5gTHkeYMq0gwLEA8BsQ4yx%2Fb0dT0cYAw5ETv%2BYohsOEbwozsOcW5JW9AACYNOjSEkJgiIaXnV36cuw9flL4dzuMmAoSx51U5qQncJMpM9%2FM4VcbmlFAAJD0sm4E9M0KiOr8eJzJxVLY2IwM8no%2BBkaRmobcUuZnWqA7u2oOFr0Frk0KC%2B%2BZgGcDVCxCP%2FazROHKdwDtyCVb4BCq3D%2Fh4tnxX9xlx%2BWlaTfwC7KpUFOHmyBJT7tzdQSxLY8fh%2FRvq8rO5sCrrLXm5LVznwi9zFnpXFZ3CUIZi9tQB%2BNw%2FEWN9tDD%2Fqs7BBjqkAdfOies%2FtaPRAIjt5GiMN9wXQQO9EJiKyG9eZ22lrRKm3THCkDL6x5%2FvlIfSmA79%2Bc%2BNkoh0FVsJiT0inr%2BqhlQ35%2FaSWXwcBGanJwGfDRT%2FqlQ8uZMEcPLgiw10xLRaBvtL2onfyuCBYT76A0vNzPkg7VtpmKlwB0LSC4vOx1FhBjk6SpxRVIP8jDPQznusAhrCWF1G3owX%2FEZeVnbQDGGYyklx&X-Amz-Signature=0aee886bdbf83acb68c1d6cc180e150a1fdec7ad2f9b59b1c7e20db298abbcfd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2W3K62Y%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCMFD2tBTc1lzM5OZSckyAk5GEVdJnseqAyBuXBbL4QQQIhAMU3YEuqLErtUIwv2%2F3cMFj%2BY9F9k1o1mMCNKcj9aO1bKv8DCDcQABoMNjM3NDIzMTgzODA1IgzZH2lMdnvZ7LAxmR0q3ANVtLA0EBaHJs3YDBx03lmdWpi844q3ytlMFduCZ4gbMRzDsAxaqmI1QsA775qFqR2a0gt55KoebQoMopwEuQT62tj38KevAkh6cJmk%2F1KZd4LaovwGhWsRjwjWIyEqG8yEgOy5xvguUb7IhiBmQCGE5qcISInPFok24O7FvTvcLXVcJk5UBOLcHBSMqQefXdz5rCmzZM%2FY%2F4o5dK1f9yWEyv5aokamwBT%2FFwIluafvbrZ%2FHtWmlGfDUSFwz9WyyykuRy6seg6C3rGqgDZ01cZ792QSbW0Ket15hTr0F47%2BEhTe2NoVNUGsc6F%2FsNLfMZ5szu%2Fpga10vOoD5gTHkeYMq0gwLEA8BsQ4yx%2Fb0dT0cYAw5ETv%2BYohsOEbwozsOcW5JW9AACYNOjSEkJgiIaXnV36cuw9flL4dzuMmAoSx51U5qQncJMpM9%2FM4VcbmlFAAJD0sm4E9M0KiOr8eJzJxVLY2IwM8no%2BBkaRmobcUuZnWqA7u2oOFr0Frk0KC%2B%2BZgGcDVCxCP%2FazROHKdwDtyCVb4BCq3D%2Fh4tnxX9xlx%2BWlaTfwC7KpUFOHmyBJT7tzdQSxLY8fh%2FRvq8rO5sCrrLXm5LVznwi9zFnpXFZ3CUIZi9tQB%2BNw%2FEWN9tDD%2Fqs7BBjqkAdfOies%2FtaPRAIjt5GiMN9wXQQO9EJiKyG9eZ22lrRKm3THCkDL6x5%2FvlIfSmA79%2Bc%2BNkoh0FVsJiT0inr%2BqhlQ35%2FaSWXwcBGanJwGfDRT%2FqlQ8uZMEcPLgiw10xLRaBvtL2onfyuCBYT76A0vNzPkg7VtpmKlwB0LSC4vOx1FhBjk6SpxRVIP8jDPQznusAhrCWF1G3owX%2FEZeVnbQDGGYyklx&X-Amz-Signature=83e2655ac98641333ee668c3f0f430c8b78b0b7dd4c2e1db48553ea6255ed0f7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2W3K62Y%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCMFD2tBTc1lzM5OZSckyAk5GEVdJnseqAyBuXBbL4QQQIhAMU3YEuqLErtUIwv2%2F3cMFj%2BY9F9k1o1mMCNKcj9aO1bKv8DCDcQABoMNjM3NDIzMTgzODA1IgzZH2lMdnvZ7LAxmR0q3ANVtLA0EBaHJs3YDBx03lmdWpi844q3ytlMFduCZ4gbMRzDsAxaqmI1QsA775qFqR2a0gt55KoebQoMopwEuQT62tj38KevAkh6cJmk%2F1KZd4LaovwGhWsRjwjWIyEqG8yEgOy5xvguUb7IhiBmQCGE5qcISInPFok24O7FvTvcLXVcJk5UBOLcHBSMqQefXdz5rCmzZM%2FY%2F4o5dK1f9yWEyv5aokamwBT%2FFwIluafvbrZ%2FHtWmlGfDUSFwz9WyyykuRy6seg6C3rGqgDZ01cZ792QSbW0Ket15hTr0F47%2BEhTe2NoVNUGsc6F%2FsNLfMZ5szu%2Fpga10vOoD5gTHkeYMq0gwLEA8BsQ4yx%2Fb0dT0cYAw5ETv%2BYohsOEbwozsOcW5JW9AACYNOjSEkJgiIaXnV36cuw9flL4dzuMmAoSx51U5qQncJMpM9%2FM4VcbmlFAAJD0sm4E9M0KiOr8eJzJxVLY2IwM8no%2BBkaRmobcUuZnWqA7u2oOFr0Frk0KC%2B%2BZgGcDVCxCP%2FazROHKdwDtyCVb4BCq3D%2Fh4tnxX9xlx%2BWlaTfwC7KpUFOHmyBJT7tzdQSxLY8fh%2FRvq8rO5sCrrLXm5LVznwi9zFnpXFZ3CUIZi9tQB%2BNw%2FEWN9tDD%2Fqs7BBjqkAdfOies%2FtaPRAIjt5GiMN9wXQQO9EJiKyG9eZ22lrRKm3THCkDL6x5%2FvlIfSmA79%2Bc%2BNkoh0FVsJiT0inr%2BqhlQ35%2FaSWXwcBGanJwGfDRT%2FqlQ8uZMEcPLgiw10xLRaBvtL2onfyuCBYT76A0vNzPkg7VtpmKlwB0LSC4vOx1FhBjk6SpxRVIP8jDPQznusAhrCWF1G3owX%2FEZeVnbQDGGYyklx&X-Amz-Signature=619afbb2a5a8dfcec5e8101eaaeb08b0577cbd014bfe75ad0357c955209a1851&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2W3K62Y%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCMFD2tBTc1lzM5OZSckyAk5GEVdJnseqAyBuXBbL4QQQIhAMU3YEuqLErtUIwv2%2F3cMFj%2BY9F9k1o1mMCNKcj9aO1bKv8DCDcQABoMNjM3NDIzMTgzODA1IgzZH2lMdnvZ7LAxmR0q3ANVtLA0EBaHJs3YDBx03lmdWpi844q3ytlMFduCZ4gbMRzDsAxaqmI1QsA775qFqR2a0gt55KoebQoMopwEuQT62tj38KevAkh6cJmk%2F1KZd4LaovwGhWsRjwjWIyEqG8yEgOy5xvguUb7IhiBmQCGE5qcISInPFok24O7FvTvcLXVcJk5UBOLcHBSMqQefXdz5rCmzZM%2FY%2F4o5dK1f9yWEyv5aokamwBT%2FFwIluafvbrZ%2FHtWmlGfDUSFwz9WyyykuRy6seg6C3rGqgDZ01cZ792QSbW0Ket15hTr0F47%2BEhTe2NoVNUGsc6F%2FsNLfMZ5szu%2Fpga10vOoD5gTHkeYMq0gwLEA8BsQ4yx%2Fb0dT0cYAw5ETv%2BYohsOEbwozsOcW5JW9AACYNOjSEkJgiIaXnV36cuw9flL4dzuMmAoSx51U5qQncJMpM9%2FM4VcbmlFAAJD0sm4E9M0KiOr8eJzJxVLY2IwM8no%2BBkaRmobcUuZnWqA7u2oOFr0Frk0KC%2B%2BZgGcDVCxCP%2FazROHKdwDtyCVb4BCq3D%2Fh4tnxX9xlx%2BWlaTfwC7KpUFOHmyBJT7tzdQSxLY8fh%2FRvq8rO5sCrrLXm5LVznwi9zFnpXFZ3CUIZi9tQB%2BNw%2FEWN9tDD%2Fqs7BBjqkAdfOies%2FtaPRAIjt5GiMN9wXQQO9EJiKyG9eZ22lrRKm3THCkDL6x5%2FvlIfSmA79%2Bc%2BNkoh0FVsJiT0inr%2BqhlQ35%2FaSWXwcBGanJwGfDRT%2FqlQ8uZMEcPLgiw10xLRaBvtL2onfyuCBYT76A0vNzPkg7VtpmKlwB0LSC4vOx1FhBjk6SpxRVIP8jDPQznusAhrCWF1G3owX%2FEZeVnbQDGGYyklx&X-Amz-Signature=7fc0cd5bcf43c443c0d6f0fd055c006edb1d5bdb27605a2df728bf92bec8014b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2W3K62Y%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCMFD2tBTc1lzM5OZSckyAk5GEVdJnseqAyBuXBbL4QQQIhAMU3YEuqLErtUIwv2%2F3cMFj%2BY9F9k1o1mMCNKcj9aO1bKv8DCDcQABoMNjM3NDIzMTgzODA1IgzZH2lMdnvZ7LAxmR0q3ANVtLA0EBaHJs3YDBx03lmdWpi844q3ytlMFduCZ4gbMRzDsAxaqmI1QsA775qFqR2a0gt55KoebQoMopwEuQT62tj38KevAkh6cJmk%2F1KZd4LaovwGhWsRjwjWIyEqG8yEgOy5xvguUb7IhiBmQCGE5qcISInPFok24O7FvTvcLXVcJk5UBOLcHBSMqQefXdz5rCmzZM%2FY%2F4o5dK1f9yWEyv5aokamwBT%2FFwIluafvbrZ%2FHtWmlGfDUSFwz9WyyykuRy6seg6C3rGqgDZ01cZ792QSbW0Ket15hTr0F47%2BEhTe2NoVNUGsc6F%2FsNLfMZ5szu%2Fpga10vOoD5gTHkeYMq0gwLEA8BsQ4yx%2Fb0dT0cYAw5ETv%2BYohsOEbwozsOcW5JW9AACYNOjSEkJgiIaXnV36cuw9flL4dzuMmAoSx51U5qQncJMpM9%2FM4VcbmlFAAJD0sm4E9M0KiOr8eJzJxVLY2IwM8no%2BBkaRmobcUuZnWqA7u2oOFr0Frk0KC%2B%2BZgGcDVCxCP%2FazROHKdwDtyCVb4BCq3D%2Fh4tnxX9xlx%2BWlaTfwC7KpUFOHmyBJT7tzdQSxLY8fh%2FRvq8rO5sCrrLXm5LVznwi9zFnpXFZ3CUIZi9tQB%2BNw%2FEWN9tDD%2Fqs7BBjqkAdfOies%2FtaPRAIjt5GiMN9wXQQO9EJiKyG9eZ22lrRKm3THCkDL6x5%2FvlIfSmA79%2Bc%2BNkoh0FVsJiT0inr%2BqhlQ35%2FaSWXwcBGanJwGfDRT%2FqlQ8uZMEcPLgiw10xLRaBvtL2onfyuCBYT76A0vNzPkg7VtpmKlwB0LSC4vOx1FhBjk6SpxRVIP8jDPQznusAhrCWF1G3owX%2FEZeVnbQDGGYyklx&X-Amz-Signature=da2823751c3344ec0543b01c3ec377473549893878ebbcba173a785c160e51ae&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2W3K62Y%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCMFD2tBTc1lzM5OZSckyAk5GEVdJnseqAyBuXBbL4QQQIhAMU3YEuqLErtUIwv2%2F3cMFj%2BY9F9k1o1mMCNKcj9aO1bKv8DCDcQABoMNjM3NDIzMTgzODA1IgzZH2lMdnvZ7LAxmR0q3ANVtLA0EBaHJs3YDBx03lmdWpi844q3ytlMFduCZ4gbMRzDsAxaqmI1QsA775qFqR2a0gt55KoebQoMopwEuQT62tj38KevAkh6cJmk%2F1KZd4LaovwGhWsRjwjWIyEqG8yEgOy5xvguUb7IhiBmQCGE5qcISInPFok24O7FvTvcLXVcJk5UBOLcHBSMqQefXdz5rCmzZM%2FY%2F4o5dK1f9yWEyv5aokamwBT%2FFwIluafvbrZ%2FHtWmlGfDUSFwz9WyyykuRy6seg6C3rGqgDZ01cZ792QSbW0Ket15hTr0F47%2BEhTe2NoVNUGsc6F%2FsNLfMZ5szu%2Fpga10vOoD5gTHkeYMq0gwLEA8BsQ4yx%2Fb0dT0cYAw5ETv%2BYohsOEbwozsOcW5JW9AACYNOjSEkJgiIaXnV36cuw9flL4dzuMmAoSx51U5qQncJMpM9%2FM4VcbmlFAAJD0sm4E9M0KiOr8eJzJxVLY2IwM8no%2BBkaRmobcUuZnWqA7u2oOFr0Frk0KC%2B%2BZgGcDVCxCP%2FazROHKdwDtyCVb4BCq3D%2Fh4tnxX9xlx%2BWlaTfwC7KpUFOHmyBJT7tzdQSxLY8fh%2FRvq8rO5sCrrLXm5LVznwi9zFnpXFZ3CUIZi9tQB%2BNw%2FEWN9tDD%2Fqs7BBjqkAdfOies%2FtaPRAIjt5GiMN9wXQQO9EJiKyG9eZ22lrRKm3THCkDL6x5%2FvlIfSmA79%2Bc%2BNkoh0FVsJiT0inr%2BqhlQ35%2FaSWXwcBGanJwGfDRT%2FqlQ8uZMEcPLgiw10xLRaBvtL2onfyuCBYT76A0vNzPkg7VtpmKlwB0LSC4vOx1FhBjk6SpxRVIP8jDPQznusAhrCWF1G3owX%2FEZeVnbQDGGYyklx&X-Amz-Signature=a99d6204e3cae841480d4941d85fc929a66d388cd788085a9ece2f9885befc43&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2W3K62Y%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCMFD2tBTc1lzM5OZSckyAk5GEVdJnseqAyBuXBbL4QQQIhAMU3YEuqLErtUIwv2%2F3cMFj%2BY9F9k1o1mMCNKcj9aO1bKv8DCDcQABoMNjM3NDIzMTgzODA1IgzZH2lMdnvZ7LAxmR0q3ANVtLA0EBaHJs3YDBx03lmdWpi844q3ytlMFduCZ4gbMRzDsAxaqmI1QsA775qFqR2a0gt55KoebQoMopwEuQT62tj38KevAkh6cJmk%2F1KZd4LaovwGhWsRjwjWIyEqG8yEgOy5xvguUb7IhiBmQCGE5qcISInPFok24O7FvTvcLXVcJk5UBOLcHBSMqQefXdz5rCmzZM%2FY%2F4o5dK1f9yWEyv5aokamwBT%2FFwIluafvbrZ%2FHtWmlGfDUSFwz9WyyykuRy6seg6C3rGqgDZ01cZ792QSbW0Ket15hTr0F47%2BEhTe2NoVNUGsc6F%2FsNLfMZ5szu%2Fpga10vOoD5gTHkeYMq0gwLEA8BsQ4yx%2Fb0dT0cYAw5ETv%2BYohsOEbwozsOcW5JW9AACYNOjSEkJgiIaXnV36cuw9flL4dzuMmAoSx51U5qQncJMpM9%2FM4VcbmlFAAJD0sm4E9M0KiOr8eJzJxVLY2IwM8no%2BBkaRmobcUuZnWqA7u2oOFr0Frk0KC%2B%2BZgGcDVCxCP%2FazROHKdwDtyCVb4BCq3D%2Fh4tnxX9xlx%2BWlaTfwC7KpUFOHmyBJT7tzdQSxLY8fh%2FRvq8rO5sCrrLXm5LVznwi9zFnpXFZ3CUIZi9tQB%2BNw%2FEWN9tDD%2Fqs7BBjqkAdfOies%2FtaPRAIjt5GiMN9wXQQO9EJiKyG9eZ22lrRKm3THCkDL6x5%2FvlIfSmA79%2Bc%2BNkoh0FVsJiT0inr%2BqhlQ35%2FaSWXwcBGanJwGfDRT%2FqlQ8uZMEcPLgiw10xLRaBvtL2onfyuCBYT76A0vNzPkg7VtpmKlwB0LSC4vOx1FhBjk6SpxRVIP8jDPQznusAhrCWF1G3owX%2FEZeVnbQDGGYyklx&X-Amz-Signature=cc100d731be5640f9e208d8dbc070742c2afff2406bccb6d768390305fd5e6b7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
