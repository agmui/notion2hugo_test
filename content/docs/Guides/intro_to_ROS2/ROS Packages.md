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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI3LFR3B%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T132511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcBLQn7kQPdnPoYX56A%2F8wJzmSxlaNpFZi1pT44c9X4AIgA3PkXWBECIhKnOoGUuE9Rd069eRCmGeozocqIzQ2bZ8q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLwBTwo%2BaCkBP1pIKyrcA0HcDmCQQy2qxd1oNQUWxzrLO0fOwiydWdizUR82VHomWD4uFEaya51GaCi7roRRm5RFzsd6Sd3u4moNKV%2BFdX8AfXi3zbFynbAH5lT4ZjfocyYgrG9D3eKy77oThso0tYaiZzKqi2VJShpHDpfqhn0PXRJihSH8cBv%2BGtG29ffG2slAXjiDNvDb8UXOkUZ4ga%2F%2FtA4SbaPSTQd2aauFUOy00VfyDOrKpmprfxt8jMmjThWbcunJmyqAyy%2BfWMpoSOO2IYIyoPLv1LnvPvnoStHgRSABq7N8XVHuP76BXIqRxRz%2F6bY4ne5MNFKQH9mfsvw2LnqBABrkc1Fuggra%2B%2F8YRoTqKn2B5FjrPJr8BU4U87dkQX19vCiZ8UL7mZ9z%2F4otU%2Fzn43lXbpmwDGWf%2B7XW0HVGcAw4voB1OY%2FpA%2BEUI45ff9tnzQ9AWQVeweEuaDWTYrgrUAi74v84T075EOlSjG2dx93TVgpQStNJ8QHHLZ7FK0y3092vqvopVpbD6OgX0EjJjsKBuKARWc4UVWrM%2Fxx335JydyQiRaJm0tMfnAVxwlamL%2BIZt8JO3ddyg6bS8MXtlXF0Gy3fyAWhJVl%2BbzbPltT1Pm%2FePFBrgm0Sv1azzWEoVo%2BZ0B0ZMM%2BT3MEGOqUBb3vK1ujRaccLV50k5aS8F8wPWCF3QeJCDehtMKuSDPl5Q5WSehJ9isjeFdYwFXrOzwFaeyMJ7uapTk5WIKci0s7mkL9JgHIyoUZuW%2BQzQeG1hG9O5t%2FSigAJgkQktOzFWcrB1jpOVtvQL7ghYzCbtnbZeFZHNzdfeSfHLgHxNw4QSAd5CgMEQo5bB%2Bx4ldrcyvwuHXr8KKK9Jt9JGjBubEzK5Olk&X-Amz-Signature=2124a8ffbc3f0aede43caaea549e013fe806368822761e86e1457ba215ef903a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI3LFR3B%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T132511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcBLQn7kQPdnPoYX56A%2F8wJzmSxlaNpFZi1pT44c9X4AIgA3PkXWBECIhKnOoGUuE9Rd069eRCmGeozocqIzQ2bZ8q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLwBTwo%2BaCkBP1pIKyrcA0HcDmCQQy2qxd1oNQUWxzrLO0fOwiydWdizUR82VHomWD4uFEaya51GaCi7roRRm5RFzsd6Sd3u4moNKV%2BFdX8AfXi3zbFynbAH5lT4ZjfocyYgrG9D3eKy77oThso0tYaiZzKqi2VJShpHDpfqhn0PXRJihSH8cBv%2BGtG29ffG2slAXjiDNvDb8UXOkUZ4ga%2F%2FtA4SbaPSTQd2aauFUOy00VfyDOrKpmprfxt8jMmjThWbcunJmyqAyy%2BfWMpoSOO2IYIyoPLv1LnvPvnoStHgRSABq7N8XVHuP76BXIqRxRz%2F6bY4ne5MNFKQH9mfsvw2LnqBABrkc1Fuggra%2B%2F8YRoTqKn2B5FjrPJr8BU4U87dkQX19vCiZ8UL7mZ9z%2F4otU%2Fzn43lXbpmwDGWf%2B7XW0HVGcAw4voB1OY%2FpA%2BEUI45ff9tnzQ9AWQVeweEuaDWTYrgrUAi74v84T075EOlSjG2dx93TVgpQStNJ8QHHLZ7FK0y3092vqvopVpbD6OgX0EjJjsKBuKARWc4UVWrM%2Fxx335JydyQiRaJm0tMfnAVxwlamL%2BIZt8JO3ddyg6bS8MXtlXF0Gy3fyAWhJVl%2BbzbPltT1Pm%2FePFBrgm0Sv1azzWEoVo%2BZ0B0ZMM%2BT3MEGOqUBb3vK1ujRaccLV50k5aS8F8wPWCF3QeJCDehtMKuSDPl5Q5WSehJ9isjeFdYwFXrOzwFaeyMJ7uapTk5WIKci0s7mkL9JgHIyoUZuW%2BQzQeG1hG9O5t%2FSigAJgkQktOzFWcrB1jpOVtvQL7ghYzCbtnbZeFZHNzdfeSfHLgHxNw4QSAd5CgMEQo5bB%2Bx4ldrcyvwuHXr8KKK9Jt9JGjBubEzK5Olk&X-Amz-Signature=804601dbb056cc8ba3f26eee0738d3084d86848a940ee0c98703d3697b536abe&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI3LFR3B%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T132511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcBLQn7kQPdnPoYX56A%2F8wJzmSxlaNpFZi1pT44c9X4AIgA3PkXWBECIhKnOoGUuE9Rd069eRCmGeozocqIzQ2bZ8q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLwBTwo%2BaCkBP1pIKyrcA0HcDmCQQy2qxd1oNQUWxzrLO0fOwiydWdizUR82VHomWD4uFEaya51GaCi7roRRm5RFzsd6Sd3u4moNKV%2BFdX8AfXi3zbFynbAH5lT4ZjfocyYgrG9D3eKy77oThso0tYaiZzKqi2VJShpHDpfqhn0PXRJihSH8cBv%2BGtG29ffG2slAXjiDNvDb8UXOkUZ4ga%2F%2FtA4SbaPSTQd2aauFUOy00VfyDOrKpmprfxt8jMmjThWbcunJmyqAyy%2BfWMpoSOO2IYIyoPLv1LnvPvnoStHgRSABq7N8XVHuP76BXIqRxRz%2F6bY4ne5MNFKQH9mfsvw2LnqBABrkc1Fuggra%2B%2F8YRoTqKn2B5FjrPJr8BU4U87dkQX19vCiZ8UL7mZ9z%2F4otU%2Fzn43lXbpmwDGWf%2B7XW0HVGcAw4voB1OY%2FpA%2BEUI45ff9tnzQ9AWQVeweEuaDWTYrgrUAi74v84T075EOlSjG2dx93TVgpQStNJ8QHHLZ7FK0y3092vqvopVpbD6OgX0EjJjsKBuKARWc4UVWrM%2Fxx335JydyQiRaJm0tMfnAVxwlamL%2BIZt8JO3ddyg6bS8MXtlXF0Gy3fyAWhJVl%2BbzbPltT1Pm%2FePFBrgm0Sv1azzWEoVo%2BZ0B0ZMM%2BT3MEGOqUBb3vK1ujRaccLV50k5aS8F8wPWCF3QeJCDehtMKuSDPl5Q5WSehJ9isjeFdYwFXrOzwFaeyMJ7uapTk5WIKci0s7mkL9JgHIyoUZuW%2BQzQeG1hG9O5t%2FSigAJgkQktOzFWcrB1jpOVtvQL7ghYzCbtnbZeFZHNzdfeSfHLgHxNw4QSAd5CgMEQo5bB%2Bx4ldrcyvwuHXr8KKK9Jt9JGjBubEzK5Olk&X-Amz-Signature=61ad56c08402d5dd0c9dbfea67af5a2cd26ad2a779affb953f84826a175998f5&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI3LFR3B%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T132511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcBLQn7kQPdnPoYX56A%2F8wJzmSxlaNpFZi1pT44c9X4AIgA3PkXWBECIhKnOoGUuE9Rd069eRCmGeozocqIzQ2bZ8q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLwBTwo%2BaCkBP1pIKyrcA0HcDmCQQy2qxd1oNQUWxzrLO0fOwiydWdizUR82VHomWD4uFEaya51GaCi7roRRm5RFzsd6Sd3u4moNKV%2BFdX8AfXi3zbFynbAH5lT4ZjfocyYgrG9D3eKy77oThso0tYaiZzKqi2VJShpHDpfqhn0PXRJihSH8cBv%2BGtG29ffG2slAXjiDNvDb8UXOkUZ4ga%2F%2FtA4SbaPSTQd2aauFUOy00VfyDOrKpmprfxt8jMmjThWbcunJmyqAyy%2BfWMpoSOO2IYIyoPLv1LnvPvnoStHgRSABq7N8XVHuP76BXIqRxRz%2F6bY4ne5MNFKQH9mfsvw2LnqBABrkc1Fuggra%2B%2F8YRoTqKn2B5FjrPJr8BU4U87dkQX19vCiZ8UL7mZ9z%2F4otU%2Fzn43lXbpmwDGWf%2B7XW0HVGcAw4voB1OY%2FpA%2BEUI45ff9tnzQ9AWQVeweEuaDWTYrgrUAi74v84T075EOlSjG2dx93TVgpQStNJ8QHHLZ7FK0y3092vqvopVpbD6OgX0EjJjsKBuKARWc4UVWrM%2Fxx335JydyQiRaJm0tMfnAVxwlamL%2BIZt8JO3ddyg6bS8MXtlXF0Gy3fyAWhJVl%2BbzbPltT1Pm%2FePFBrgm0Sv1azzWEoVo%2BZ0B0ZMM%2BT3MEGOqUBb3vK1ujRaccLV50k5aS8F8wPWCF3QeJCDehtMKuSDPl5Q5WSehJ9isjeFdYwFXrOzwFaeyMJ7uapTk5WIKci0s7mkL9JgHIyoUZuW%2BQzQeG1hG9O5t%2FSigAJgkQktOzFWcrB1jpOVtvQL7ghYzCbtnbZeFZHNzdfeSfHLgHxNw4QSAd5CgMEQo5bB%2Bx4ldrcyvwuHXr8KKK9Jt9JGjBubEzK5Olk&X-Amz-Signature=13ad3dd50b83afbcd82782b06a680b2c87a13a1ec002a2bf6de61bc4f2791134&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI3LFR3B%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T132511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcBLQn7kQPdnPoYX56A%2F8wJzmSxlaNpFZi1pT44c9X4AIgA3PkXWBECIhKnOoGUuE9Rd069eRCmGeozocqIzQ2bZ8q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLwBTwo%2BaCkBP1pIKyrcA0HcDmCQQy2qxd1oNQUWxzrLO0fOwiydWdizUR82VHomWD4uFEaya51GaCi7roRRm5RFzsd6Sd3u4moNKV%2BFdX8AfXi3zbFynbAH5lT4ZjfocyYgrG9D3eKy77oThso0tYaiZzKqi2VJShpHDpfqhn0PXRJihSH8cBv%2BGtG29ffG2slAXjiDNvDb8UXOkUZ4ga%2F%2FtA4SbaPSTQd2aauFUOy00VfyDOrKpmprfxt8jMmjThWbcunJmyqAyy%2BfWMpoSOO2IYIyoPLv1LnvPvnoStHgRSABq7N8XVHuP76BXIqRxRz%2F6bY4ne5MNFKQH9mfsvw2LnqBABrkc1Fuggra%2B%2F8YRoTqKn2B5FjrPJr8BU4U87dkQX19vCiZ8UL7mZ9z%2F4otU%2Fzn43lXbpmwDGWf%2B7XW0HVGcAw4voB1OY%2FpA%2BEUI45ff9tnzQ9AWQVeweEuaDWTYrgrUAi74v84T075EOlSjG2dx93TVgpQStNJ8QHHLZ7FK0y3092vqvopVpbD6OgX0EjJjsKBuKARWc4UVWrM%2Fxx335JydyQiRaJm0tMfnAVxwlamL%2BIZt8JO3ddyg6bS8MXtlXF0Gy3fyAWhJVl%2BbzbPltT1Pm%2FePFBrgm0Sv1azzWEoVo%2BZ0B0ZMM%2BT3MEGOqUBb3vK1ujRaccLV50k5aS8F8wPWCF3QeJCDehtMKuSDPl5Q5WSehJ9isjeFdYwFXrOzwFaeyMJ7uapTk5WIKci0s7mkL9JgHIyoUZuW%2BQzQeG1hG9O5t%2FSigAJgkQktOzFWcrB1jpOVtvQL7ghYzCbtnbZeFZHNzdfeSfHLgHxNw4QSAd5CgMEQo5bB%2Bx4ldrcyvwuHXr8KKK9Jt9JGjBubEzK5Olk&X-Amz-Signature=274ea05f68d88e282abbaddbf0a517f4693167699bc20de09c2bd61d3c698af7&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI3LFR3B%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T132511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcBLQn7kQPdnPoYX56A%2F8wJzmSxlaNpFZi1pT44c9X4AIgA3PkXWBECIhKnOoGUuE9Rd069eRCmGeozocqIzQ2bZ8q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLwBTwo%2BaCkBP1pIKyrcA0HcDmCQQy2qxd1oNQUWxzrLO0fOwiydWdizUR82VHomWD4uFEaya51GaCi7roRRm5RFzsd6Sd3u4moNKV%2BFdX8AfXi3zbFynbAH5lT4ZjfocyYgrG9D3eKy77oThso0tYaiZzKqi2VJShpHDpfqhn0PXRJihSH8cBv%2BGtG29ffG2slAXjiDNvDb8UXOkUZ4ga%2F%2FtA4SbaPSTQd2aauFUOy00VfyDOrKpmprfxt8jMmjThWbcunJmyqAyy%2BfWMpoSOO2IYIyoPLv1LnvPvnoStHgRSABq7N8XVHuP76BXIqRxRz%2F6bY4ne5MNFKQH9mfsvw2LnqBABrkc1Fuggra%2B%2F8YRoTqKn2B5FjrPJr8BU4U87dkQX19vCiZ8UL7mZ9z%2F4otU%2Fzn43lXbpmwDGWf%2B7XW0HVGcAw4voB1OY%2FpA%2BEUI45ff9tnzQ9AWQVeweEuaDWTYrgrUAi74v84T075EOlSjG2dx93TVgpQStNJ8QHHLZ7FK0y3092vqvopVpbD6OgX0EjJjsKBuKARWc4UVWrM%2Fxx335JydyQiRaJm0tMfnAVxwlamL%2BIZt8JO3ddyg6bS8MXtlXF0Gy3fyAWhJVl%2BbzbPltT1Pm%2FePFBrgm0Sv1azzWEoVo%2BZ0B0ZMM%2BT3MEGOqUBb3vK1ujRaccLV50k5aS8F8wPWCF3QeJCDehtMKuSDPl5Q5WSehJ9isjeFdYwFXrOzwFaeyMJ7uapTk5WIKci0s7mkL9JgHIyoUZuW%2BQzQeG1hG9O5t%2FSigAJgkQktOzFWcrB1jpOVtvQL7ghYzCbtnbZeFZHNzdfeSfHLgHxNw4QSAd5CgMEQo5bB%2Bx4ldrcyvwuHXr8KKK9Jt9JGjBubEzK5Olk&X-Amz-Signature=2e574ad54c61a7fd8f3cfab536ad3a2857e9bc945ac025431efda18300878335&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI3LFR3B%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T132511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcBLQn7kQPdnPoYX56A%2F8wJzmSxlaNpFZi1pT44c9X4AIgA3PkXWBECIhKnOoGUuE9Rd069eRCmGeozocqIzQ2bZ8q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLwBTwo%2BaCkBP1pIKyrcA0HcDmCQQy2qxd1oNQUWxzrLO0fOwiydWdizUR82VHomWD4uFEaya51GaCi7roRRm5RFzsd6Sd3u4moNKV%2BFdX8AfXi3zbFynbAH5lT4ZjfocyYgrG9D3eKy77oThso0tYaiZzKqi2VJShpHDpfqhn0PXRJihSH8cBv%2BGtG29ffG2slAXjiDNvDb8UXOkUZ4ga%2F%2FtA4SbaPSTQd2aauFUOy00VfyDOrKpmprfxt8jMmjThWbcunJmyqAyy%2BfWMpoSOO2IYIyoPLv1LnvPvnoStHgRSABq7N8XVHuP76BXIqRxRz%2F6bY4ne5MNFKQH9mfsvw2LnqBABrkc1Fuggra%2B%2F8YRoTqKn2B5FjrPJr8BU4U87dkQX19vCiZ8UL7mZ9z%2F4otU%2Fzn43lXbpmwDGWf%2B7XW0HVGcAw4voB1OY%2FpA%2BEUI45ff9tnzQ9AWQVeweEuaDWTYrgrUAi74v84T075EOlSjG2dx93TVgpQStNJ8QHHLZ7FK0y3092vqvopVpbD6OgX0EjJjsKBuKARWc4UVWrM%2Fxx335JydyQiRaJm0tMfnAVxwlamL%2BIZt8JO3ddyg6bS8MXtlXF0Gy3fyAWhJVl%2BbzbPltT1Pm%2FePFBrgm0Sv1azzWEoVo%2BZ0B0ZMM%2BT3MEGOqUBb3vK1ujRaccLV50k5aS8F8wPWCF3QeJCDehtMKuSDPl5Q5WSehJ9isjeFdYwFXrOzwFaeyMJ7uapTk5WIKci0s7mkL9JgHIyoUZuW%2BQzQeG1hG9O5t%2FSigAJgkQktOzFWcrB1jpOVtvQL7ghYzCbtnbZeFZHNzdfeSfHLgHxNw4QSAd5CgMEQo5bB%2Bx4ldrcyvwuHXr8KKK9Jt9JGjBubEzK5Olk&X-Amz-Signature=65a44afd9d9f602b591c60fba87dce244b3b8282a435655de575162aa31e9ffd&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
