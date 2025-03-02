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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNLB77FG%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCZS98LYl%2FU9EdlsiCEj1%2FNsAO8uB9%2BR2Sk5dm6x47%2BsQIhANPn89X0qt4VzVtVJBA5AoGOjcILqJq3l4Wtd73EScVTKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzZE%2BTQmbxlztOgvAq3APF3kEmRUhbmhc5E%2B3WPBUb9LXBNwZ1x5qmO%2B8X2ERxZ7fd5WfXHpcT7GUxJ5O8bgvlFOEwFlERE9mC8Q2jDVMPyQ8GJTLwwSG1baiENr%2FDEMj0P%2FcVlbfa3KNdhKyRZ2qrajVSgpEnxXWicLJhXqERpXnnTZKERNjDw2Z%2Bb07R%2FqxYFprf%2BkZ%2BLktdpn6Sm45zquHFoJQMv8K3h%2FHP3jG5OBQ3pjkWZoUXa46WXjxFKXSb4yZ6WRCrrgM0dqoIY8K9oSC4zFvsJVyrISZHZqBD4wv30FPRlz69qRf2ONDog35MgdQiUDnR%2BYmiMmxG%2FtxB7MwYEqZm%2B7v8W0hMNJpAnO658xBOuK8Y6pzxZA3fuE0TUdihanBPKbuhDwJ8u7SA4fF1OO9fAXKop4Kg%2FxclCD8wgjN%2F4bpoNhGU6DHnlm41HSp8gqr2p7%2B6k6WETKzAn9b92pSHEahPAwTHr1%2BOMIzqZCff2eN%2F%2FjOEJe8NKQDCodB8CBZXevn0eefyqRcqrGUZUAZbol%2Fr%2Bu9x52Z%2BCUthCifjGDHCBWlqz5jufyKPM1b9X8XHKb74fBRbe6iWT7oYGcpUFj5TgEdmVmBWMpmD%2BVeeltwnOu97i1JtnBOOTrdd23uH7RBh4DCft4%2B%2BBjqkAZfptDpQs0DpFfy14r6DeQjUPdcD863sjs6p73sF7HDPOXAL%2FFUjgnJHPObaHhL0l195thoL5Pr4EYYV3DKpNzNczUvX1ZvQKqk221pgc%2BbX8BfkiTzOW7pUM%2BVKQPocC2KZQmM9B5ia9RRIbCHKKsgtl%2FIninR7pz7W%2FZzJw02FUCzuFOx8g85pidXshG%2BQ%2BzLsKh7Q6HuqMb2zb188jzw6pn49&X-Amz-Signature=aea82a226e9b939c47a138a8f5c70f0debaa5ec7e18eabbb58d9cbfde932c08d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNLB77FG%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCZS98LYl%2FU9EdlsiCEj1%2FNsAO8uB9%2BR2Sk5dm6x47%2BsQIhANPn89X0qt4VzVtVJBA5AoGOjcILqJq3l4Wtd73EScVTKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzZE%2BTQmbxlztOgvAq3APF3kEmRUhbmhc5E%2B3WPBUb9LXBNwZ1x5qmO%2B8X2ERxZ7fd5WfXHpcT7GUxJ5O8bgvlFOEwFlERE9mC8Q2jDVMPyQ8GJTLwwSG1baiENr%2FDEMj0P%2FcVlbfa3KNdhKyRZ2qrajVSgpEnxXWicLJhXqERpXnnTZKERNjDw2Z%2Bb07R%2FqxYFprf%2BkZ%2BLktdpn6Sm45zquHFoJQMv8K3h%2FHP3jG5OBQ3pjkWZoUXa46WXjxFKXSb4yZ6WRCrrgM0dqoIY8K9oSC4zFvsJVyrISZHZqBD4wv30FPRlz69qRf2ONDog35MgdQiUDnR%2BYmiMmxG%2FtxB7MwYEqZm%2B7v8W0hMNJpAnO658xBOuK8Y6pzxZA3fuE0TUdihanBPKbuhDwJ8u7SA4fF1OO9fAXKop4Kg%2FxclCD8wgjN%2F4bpoNhGU6DHnlm41HSp8gqr2p7%2B6k6WETKzAn9b92pSHEahPAwTHr1%2BOMIzqZCff2eN%2F%2FjOEJe8NKQDCodB8CBZXevn0eefyqRcqrGUZUAZbol%2Fr%2Bu9x52Z%2BCUthCifjGDHCBWlqz5jufyKPM1b9X8XHKb74fBRbe6iWT7oYGcpUFj5TgEdmVmBWMpmD%2BVeeltwnOu97i1JtnBOOTrdd23uH7RBh4DCft4%2B%2BBjqkAZfptDpQs0DpFfy14r6DeQjUPdcD863sjs6p73sF7HDPOXAL%2FFUjgnJHPObaHhL0l195thoL5Pr4EYYV3DKpNzNczUvX1ZvQKqk221pgc%2BbX8BfkiTzOW7pUM%2BVKQPocC2KZQmM9B5ia9RRIbCHKKsgtl%2FIninR7pz7W%2FZzJw02FUCzuFOx8g85pidXshG%2BQ%2BzLsKh7Q6HuqMb2zb188jzw6pn49&X-Amz-Signature=195bb72af17289f19fea148fdd66c9db4865e55e4f08c43d8b92b566ad343781&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNLB77FG%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCZS98LYl%2FU9EdlsiCEj1%2FNsAO8uB9%2BR2Sk5dm6x47%2BsQIhANPn89X0qt4VzVtVJBA5AoGOjcILqJq3l4Wtd73EScVTKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzZE%2BTQmbxlztOgvAq3APF3kEmRUhbmhc5E%2B3WPBUb9LXBNwZ1x5qmO%2B8X2ERxZ7fd5WfXHpcT7GUxJ5O8bgvlFOEwFlERE9mC8Q2jDVMPyQ8GJTLwwSG1baiENr%2FDEMj0P%2FcVlbfa3KNdhKyRZ2qrajVSgpEnxXWicLJhXqERpXnnTZKERNjDw2Z%2Bb07R%2FqxYFprf%2BkZ%2BLktdpn6Sm45zquHFoJQMv8K3h%2FHP3jG5OBQ3pjkWZoUXa46WXjxFKXSb4yZ6WRCrrgM0dqoIY8K9oSC4zFvsJVyrISZHZqBD4wv30FPRlz69qRf2ONDog35MgdQiUDnR%2BYmiMmxG%2FtxB7MwYEqZm%2B7v8W0hMNJpAnO658xBOuK8Y6pzxZA3fuE0TUdihanBPKbuhDwJ8u7SA4fF1OO9fAXKop4Kg%2FxclCD8wgjN%2F4bpoNhGU6DHnlm41HSp8gqr2p7%2B6k6WETKzAn9b92pSHEahPAwTHr1%2BOMIzqZCff2eN%2F%2FjOEJe8NKQDCodB8CBZXevn0eefyqRcqrGUZUAZbol%2Fr%2Bu9x52Z%2BCUthCifjGDHCBWlqz5jufyKPM1b9X8XHKb74fBRbe6iWT7oYGcpUFj5TgEdmVmBWMpmD%2BVeeltwnOu97i1JtnBOOTrdd23uH7RBh4DCft4%2B%2BBjqkAZfptDpQs0DpFfy14r6DeQjUPdcD863sjs6p73sF7HDPOXAL%2FFUjgnJHPObaHhL0l195thoL5Pr4EYYV3DKpNzNczUvX1ZvQKqk221pgc%2BbX8BfkiTzOW7pUM%2BVKQPocC2KZQmM9B5ia9RRIbCHKKsgtl%2FIninR7pz7W%2FZzJw02FUCzuFOx8g85pidXshG%2BQ%2BzLsKh7Q6HuqMb2zb188jzw6pn49&X-Amz-Signature=e2d1c02fbc86c279550ec8275322cb517f776a803baad57d4c28639482ac805c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNLB77FG%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCZS98LYl%2FU9EdlsiCEj1%2FNsAO8uB9%2BR2Sk5dm6x47%2BsQIhANPn89X0qt4VzVtVJBA5AoGOjcILqJq3l4Wtd73EScVTKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzZE%2BTQmbxlztOgvAq3APF3kEmRUhbmhc5E%2B3WPBUb9LXBNwZ1x5qmO%2B8X2ERxZ7fd5WfXHpcT7GUxJ5O8bgvlFOEwFlERE9mC8Q2jDVMPyQ8GJTLwwSG1baiENr%2FDEMj0P%2FcVlbfa3KNdhKyRZ2qrajVSgpEnxXWicLJhXqERpXnnTZKERNjDw2Z%2Bb07R%2FqxYFprf%2BkZ%2BLktdpn6Sm45zquHFoJQMv8K3h%2FHP3jG5OBQ3pjkWZoUXa46WXjxFKXSb4yZ6WRCrrgM0dqoIY8K9oSC4zFvsJVyrISZHZqBD4wv30FPRlz69qRf2ONDog35MgdQiUDnR%2BYmiMmxG%2FtxB7MwYEqZm%2B7v8W0hMNJpAnO658xBOuK8Y6pzxZA3fuE0TUdihanBPKbuhDwJ8u7SA4fF1OO9fAXKop4Kg%2FxclCD8wgjN%2F4bpoNhGU6DHnlm41HSp8gqr2p7%2B6k6WETKzAn9b92pSHEahPAwTHr1%2BOMIzqZCff2eN%2F%2FjOEJe8NKQDCodB8CBZXevn0eefyqRcqrGUZUAZbol%2Fr%2Bu9x52Z%2BCUthCifjGDHCBWlqz5jufyKPM1b9X8XHKb74fBRbe6iWT7oYGcpUFj5TgEdmVmBWMpmD%2BVeeltwnOu97i1JtnBOOTrdd23uH7RBh4DCft4%2B%2BBjqkAZfptDpQs0DpFfy14r6DeQjUPdcD863sjs6p73sF7HDPOXAL%2FFUjgnJHPObaHhL0l195thoL5Pr4EYYV3DKpNzNczUvX1ZvQKqk221pgc%2BbX8BfkiTzOW7pUM%2BVKQPocC2KZQmM9B5ia9RRIbCHKKsgtl%2FIninR7pz7W%2FZzJw02FUCzuFOx8g85pidXshG%2BQ%2BzLsKh7Q6HuqMb2zb188jzw6pn49&X-Amz-Signature=01e39ccddb63cf78b3de3c6c981db56f21f987b74b6a89c249dd8d91daf7b3bb&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNLB77FG%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCZS98LYl%2FU9EdlsiCEj1%2FNsAO8uB9%2BR2Sk5dm6x47%2BsQIhANPn89X0qt4VzVtVJBA5AoGOjcILqJq3l4Wtd73EScVTKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzZE%2BTQmbxlztOgvAq3APF3kEmRUhbmhc5E%2B3WPBUb9LXBNwZ1x5qmO%2B8X2ERxZ7fd5WfXHpcT7GUxJ5O8bgvlFOEwFlERE9mC8Q2jDVMPyQ8GJTLwwSG1baiENr%2FDEMj0P%2FcVlbfa3KNdhKyRZ2qrajVSgpEnxXWicLJhXqERpXnnTZKERNjDw2Z%2Bb07R%2FqxYFprf%2BkZ%2BLktdpn6Sm45zquHFoJQMv8K3h%2FHP3jG5OBQ3pjkWZoUXa46WXjxFKXSb4yZ6WRCrrgM0dqoIY8K9oSC4zFvsJVyrISZHZqBD4wv30FPRlz69qRf2ONDog35MgdQiUDnR%2BYmiMmxG%2FtxB7MwYEqZm%2B7v8W0hMNJpAnO658xBOuK8Y6pzxZA3fuE0TUdihanBPKbuhDwJ8u7SA4fF1OO9fAXKop4Kg%2FxclCD8wgjN%2F4bpoNhGU6DHnlm41HSp8gqr2p7%2B6k6WETKzAn9b92pSHEahPAwTHr1%2BOMIzqZCff2eN%2F%2FjOEJe8NKQDCodB8CBZXevn0eefyqRcqrGUZUAZbol%2Fr%2Bu9x52Z%2BCUthCifjGDHCBWlqz5jufyKPM1b9X8XHKb74fBRbe6iWT7oYGcpUFj5TgEdmVmBWMpmD%2BVeeltwnOu97i1JtnBOOTrdd23uH7RBh4DCft4%2B%2BBjqkAZfptDpQs0DpFfy14r6DeQjUPdcD863sjs6p73sF7HDPOXAL%2FFUjgnJHPObaHhL0l195thoL5Pr4EYYV3DKpNzNczUvX1ZvQKqk221pgc%2BbX8BfkiTzOW7pUM%2BVKQPocC2KZQmM9B5ia9RRIbCHKKsgtl%2FIninR7pz7W%2FZzJw02FUCzuFOx8g85pidXshG%2BQ%2BzLsKh7Q6HuqMb2zb188jzw6pn49&X-Amz-Signature=9467fd6c098e92e97bbbe7bdfa523854f4ced936af5129fa1341391714996ceb&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNLB77FG%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCZS98LYl%2FU9EdlsiCEj1%2FNsAO8uB9%2BR2Sk5dm6x47%2BsQIhANPn89X0qt4VzVtVJBA5AoGOjcILqJq3l4Wtd73EScVTKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzZE%2BTQmbxlztOgvAq3APF3kEmRUhbmhc5E%2B3WPBUb9LXBNwZ1x5qmO%2B8X2ERxZ7fd5WfXHpcT7GUxJ5O8bgvlFOEwFlERE9mC8Q2jDVMPyQ8GJTLwwSG1baiENr%2FDEMj0P%2FcVlbfa3KNdhKyRZ2qrajVSgpEnxXWicLJhXqERpXnnTZKERNjDw2Z%2Bb07R%2FqxYFprf%2BkZ%2BLktdpn6Sm45zquHFoJQMv8K3h%2FHP3jG5OBQ3pjkWZoUXa46WXjxFKXSb4yZ6WRCrrgM0dqoIY8K9oSC4zFvsJVyrISZHZqBD4wv30FPRlz69qRf2ONDog35MgdQiUDnR%2BYmiMmxG%2FtxB7MwYEqZm%2B7v8W0hMNJpAnO658xBOuK8Y6pzxZA3fuE0TUdihanBPKbuhDwJ8u7SA4fF1OO9fAXKop4Kg%2FxclCD8wgjN%2F4bpoNhGU6DHnlm41HSp8gqr2p7%2B6k6WETKzAn9b92pSHEahPAwTHr1%2BOMIzqZCff2eN%2F%2FjOEJe8NKQDCodB8CBZXevn0eefyqRcqrGUZUAZbol%2Fr%2Bu9x52Z%2BCUthCifjGDHCBWlqz5jufyKPM1b9X8XHKb74fBRbe6iWT7oYGcpUFj5TgEdmVmBWMpmD%2BVeeltwnOu97i1JtnBOOTrdd23uH7RBh4DCft4%2B%2BBjqkAZfptDpQs0DpFfy14r6DeQjUPdcD863sjs6p73sF7HDPOXAL%2FFUjgnJHPObaHhL0l195thoL5Pr4EYYV3DKpNzNczUvX1ZvQKqk221pgc%2BbX8BfkiTzOW7pUM%2BVKQPocC2KZQmM9B5ia9RRIbCHKKsgtl%2FIninR7pz7W%2FZzJw02FUCzuFOx8g85pidXshG%2BQ%2BzLsKh7Q6HuqMb2zb188jzw6pn49&X-Amz-Signature=0f7df2f59307f6b4f484961259f5994e34b54454dd2e6fc58ed866924f8a604a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNLB77FG%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCZS98LYl%2FU9EdlsiCEj1%2FNsAO8uB9%2BR2Sk5dm6x47%2BsQIhANPn89X0qt4VzVtVJBA5AoGOjcILqJq3l4Wtd73EScVTKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzZE%2BTQmbxlztOgvAq3APF3kEmRUhbmhc5E%2B3WPBUb9LXBNwZ1x5qmO%2B8X2ERxZ7fd5WfXHpcT7GUxJ5O8bgvlFOEwFlERE9mC8Q2jDVMPyQ8GJTLwwSG1baiENr%2FDEMj0P%2FcVlbfa3KNdhKyRZ2qrajVSgpEnxXWicLJhXqERpXnnTZKERNjDw2Z%2Bb07R%2FqxYFprf%2BkZ%2BLktdpn6Sm45zquHFoJQMv8K3h%2FHP3jG5OBQ3pjkWZoUXa46WXjxFKXSb4yZ6WRCrrgM0dqoIY8K9oSC4zFvsJVyrISZHZqBD4wv30FPRlz69qRf2ONDog35MgdQiUDnR%2BYmiMmxG%2FtxB7MwYEqZm%2B7v8W0hMNJpAnO658xBOuK8Y6pzxZA3fuE0TUdihanBPKbuhDwJ8u7SA4fF1OO9fAXKop4Kg%2FxclCD8wgjN%2F4bpoNhGU6DHnlm41HSp8gqr2p7%2B6k6WETKzAn9b92pSHEahPAwTHr1%2BOMIzqZCff2eN%2F%2FjOEJe8NKQDCodB8CBZXevn0eefyqRcqrGUZUAZbol%2Fr%2Bu9x52Z%2BCUthCifjGDHCBWlqz5jufyKPM1b9X8XHKb74fBRbe6iWT7oYGcpUFj5TgEdmVmBWMpmD%2BVeeltwnOu97i1JtnBOOTrdd23uH7RBh4DCft4%2B%2BBjqkAZfptDpQs0DpFfy14r6DeQjUPdcD863sjs6p73sF7HDPOXAL%2FFUjgnJHPObaHhL0l195thoL5Pr4EYYV3DKpNzNczUvX1ZvQKqk221pgc%2BbX8BfkiTzOW7pUM%2BVKQPocC2KZQmM9B5ia9RRIbCHKKsgtl%2FIninR7pz7W%2FZzJw02FUCzuFOx8g85pidXshG%2BQ%2BzLsKh7Q6HuqMb2zb188jzw6pn49&X-Amz-Signature=c2987bae500d76b5cd90f91d3dfb9b65c0425cf88139530a58d5660345e19e77&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
