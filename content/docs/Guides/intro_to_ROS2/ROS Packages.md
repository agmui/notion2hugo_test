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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZADWLWKX%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T061156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDsyA5E2o1U1NazwI0CPhs1kIY0F3HT%2BMSO4TO1yvaiPwIhAKi0TB5wI80%2FDgdIKDGoIQNQ8rFYg0bHE2RUTrurZV4RKv8DCD4QABoMNjM3NDIzMTgzODA1IgzAkSmRG2M8riJ1s%2Boq3AN74f1WBpABSWoZMiPt0y39q%2BrQrP2xyohrCIwbaK5JIuFiWzHTmRe1BNOLvgfw5YszeSS2vKSiZg5Q1N5f1hugyjJPBW5b8sOwvm63FBxwJshY4Gy6gl424JjIVvX1Z7yRoa8MiOSMaL%2B9ZqGw4y89CjfhgIKIoUU8Pz48P7ab5H42bhaeXHEnFipX3Qzs3I5u3GSbnFoeUxDYGeoj0mxrepZwMG6P6cw3uoORSdf6VkT4Yns0GkRfB9YJ6%2F1B3xltnfQ3nzoLlBbKXzXu2CwE1vmZGkZvUbScguHBNRgIcsXnDhYanm5jlmaHjNXlXPlwRfDx6NQIq74oDgB4DsPYOu2WAZFeK2RNrgH2ort7%2FESlJfoh9PqMdYML%2BIF9jscly6L1mHgOG%2BA3A%2By7u2BMJ7%2BKfljxyAtMqDhWOyQYHoJ7G19bhrq9Xljio58uxqmb0UUwF2re2fRdwqLNop9Iu96RfUzmH5eZMzztzMouIoqiISl%2F5G%2BR6SZ5MfAqgzTT6JVZC3QFEO5GCy65RticyBcQ1GjIdts%2F21hdGOonNhfNs5Ov1kKLSFEYJHbn73QS9tkvmFd8liZ38Po45mxkQJl%2BT%2Fu1cUFCe5jejI3Hm8mBqVQn8%2FtLAKkhwTCFrbnCBjqkAaHJgHtJUG%2BWeNy2XsffbQUVGtBHPOC2XREFt%2FtujP6f0t9yp31i9tbvZd6%2F8WzJ6HM1bQNES332fIYBzfoRRnhSegBZUIoQ8j64U%2B3OrlW6uKkXR2tGrGlqDf0o%2B5Q3JO67tsVT54MDELDyf5LCJjLQX%2FWyJbUC5%2FFfEloN9SiAmOHHv6hILmphLVQWCATGV5kLj8bKxVMX0egWcSnHWAAvnU66&X-Amz-Signature=33845ca98374dc0566b23fc7b3bd3b7bc53adcd05fde87e78f2de445498ebf8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZADWLWKX%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T061156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDsyA5E2o1U1NazwI0CPhs1kIY0F3HT%2BMSO4TO1yvaiPwIhAKi0TB5wI80%2FDgdIKDGoIQNQ8rFYg0bHE2RUTrurZV4RKv8DCD4QABoMNjM3NDIzMTgzODA1IgzAkSmRG2M8riJ1s%2Boq3AN74f1WBpABSWoZMiPt0y39q%2BrQrP2xyohrCIwbaK5JIuFiWzHTmRe1BNOLvgfw5YszeSS2vKSiZg5Q1N5f1hugyjJPBW5b8sOwvm63FBxwJshY4Gy6gl424JjIVvX1Z7yRoa8MiOSMaL%2B9ZqGw4y89CjfhgIKIoUU8Pz48P7ab5H42bhaeXHEnFipX3Qzs3I5u3GSbnFoeUxDYGeoj0mxrepZwMG6P6cw3uoORSdf6VkT4Yns0GkRfB9YJ6%2F1B3xltnfQ3nzoLlBbKXzXu2CwE1vmZGkZvUbScguHBNRgIcsXnDhYanm5jlmaHjNXlXPlwRfDx6NQIq74oDgB4DsPYOu2WAZFeK2RNrgH2ort7%2FESlJfoh9PqMdYML%2BIF9jscly6L1mHgOG%2BA3A%2By7u2BMJ7%2BKfljxyAtMqDhWOyQYHoJ7G19bhrq9Xljio58uxqmb0UUwF2re2fRdwqLNop9Iu96RfUzmH5eZMzztzMouIoqiISl%2F5G%2BR6SZ5MfAqgzTT6JVZC3QFEO5GCy65RticyBcQ1GjIdts%2F21hdGOonNhfNs5Ov1kKLSFEYJHbn73QS9tkvmFd8liZ38Po45mxkQJl%2BT%2Fu1cUFCe5jejI3Hm8mBqVQn8%2FtLAKkhwTCFrbnCBjqkAaHJgHtJUG%2BWeNy2XsffbQUVGtBHPOC2XREFt%2FtujP6f0t9yp31i9tbvZd6%2F8WzJ6HM1bQNES332fIYBzfoRRnhSegBZUIoQ8j64U%2B3OrlW6uKkXR2tGrGlqDf0o%2B5Q3JO67tsVT54MDELDyf5LCJjLQX%2FWyJbUC5%2FFfEloN9SiAmOHHv6hILmphLVQWCATGV5kLj8bKxVMX0egWcSnHWAAvnU66&X-Amz-Signature=41be635b43833a83005c2205ad47ab1d0094dd062469cbaefc11e6d18956d62e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZADWLWKX%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T061156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDsyA5E2o1U1NazwI0CPhs1kIY0F3HT%2BMSO4TO1yvaiPwIhAKi0TB5wI80%2FDgdIKDGoIQNQ8rFYg0bHE2RUTrurZV4RKv8DCD4QABoMNjM3NDIzMTgzODA1IgzAkSmRG2M8riJ1s%2Boq3AN74f1WBpABSWoZMiPt0y39q%2BrQrP2xyohrCIwbaK5JIuFiWzHTmRe1BNOLvgfw5YszeSS2vKSiZg5Q1N5f1hugyjJPBW5b8sOwvm63FBxwJshY4Gy6gl424JjIVvX1Z7yRoa8MiOSMaL%2B9ZqGw4y89CjfhgIKIoUU8Pz48P7ab5H42bhaeXHEnFipX3Qzs3I5u3GSbnFoeUxDYGeoj0mxrepZwMG6P6cw3uoORSdf6VkT4Yns0GkRfB9YJ6%2F1B3xltnfQ3nzoLlBbKXzXu2CwE1vmZGkZvUbScguHBNRgIcsXnDhYanm5jlmaHjNXlXPlwRfDx6NQIq74oDgB4DsPYOu2WAZFeK2RNrgH2ort7%2FESlJfoh9PqMdYML%2BIF9jscly6L1mHgOG%2BA3A%2By7u2BMJ7%2BKfljxyAtMqDhWOyQYHoJ7G19bhrq9Xljio58uxqmb0UUwF2re2fRdwqLNop9Iu96RfUzmH5eZMzztzMouIoqiISl%2F5G%2BR6SZ5MfAqgzTT6JVZC3QFEO5GCy65RticyBcQ1GjIdts%2F21hdGOonNhfNs5Ov1kKLSFEYJHbn73QS9tkvmFd8liZ38Po45mxkQJl%2BT%2Fu1cUFCe5jejI3Hm8mBqVQn8%2FtLAKkhwTCFrbnCBjqkAaHJgHtJUG%2BWeNy2XsffbQUVGtBHPOC2XREFt%2FtujP6f0t9yp31i9tbvZd6%2F8WzJ6HM1bQNES332fIYBzfoRRnhSegBZUIoQ8j64U%2B3OrlW6uKkXR2tGrGlqDf0o%2B5Q3JO67tsVT54MDELDyf5LCJjLQX%2FWyJbUC5%2FFfEloN9SiAmOHHv6hILmphLVQWCATGV5kLj8bKxVMX0egWcSnHWAAvnU66&X-Amz-Signature=28fece79cd415472e6b9b097d3a1cf0031ce4083312ec4b8cf675b4a05fa5771&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZADWLWKX%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T061156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDsyA5E2o1U1NazwI0CPhs1kIY0F3HT%2BMSO4TO1yvaiPwIhAKi0TB5wI80%2FDgdIKDGoIQNQ8rFYg0bHE2RUTrurZV4RKv8DCD4QABoMNjM3NDIzMTgzODA1IgzAkSmRG2M8riJ1s%2Boq3AN74f1WBpABSWoZMiPt0y39q%2BrQrP2xyohrCIwbaK5JIuFiWzHTmRe1BNOLvgfw5YszeSS2vKSiZg5Q1N5f1hugyjJPBW5b8sOwvm63FBxwJshY4Gy6gl424JjIVvX1Z7yRoa8MiOSMaL%2B9ZqGw4y89CjfhgIKIoUU8Pz48P7ab5H42bhaeXHEnFipX3Qzs3I5u3GSbnFoeUxDYGeoj0mxrepZwMG6P6cw3uoORSdf6VkT4Yns0GkRfB9YJ6%2F1B3xltnfQ3nzoLlBbKXzXu2CwE1vmZGkZvUbScguHBNRgIcsXnDhYanm5jlmaHjNXlXPlwRfDx6NQIq74oDgB4DsPYOu2WAZFeK2RNrgH2ort7%2FESlJfoh9PqMdYML%2BIF9jscly6L1mHgOG%2BA3A%2By7u2BMJ7%2BKfljxyAtMqDhWOyQYHoJ7G19bhrq9Xljio58uxqmb0UUwF2re2fRdwqLNop9Iu96RfUzmH5eZMzztzMouIoqiISl%2F5G%2BR6SZ5MfAqgzTT6JVZC3QFEO5GCy65RticyBcQ1GjIdts%2F21hdGOonNhfNs5Ov1kKLSFEYJHbn73QS9tkvmFd8liZ38Po45mxkQJl%2BT%2Fu1cUFCe5jejI3Hm8mBqVQn8%2FtLAKkhwTCFrbnCBjqkAaHJgHtJUG%2BWeNy2XsffbQUVGtBHPOC2XREFt%2FtujP6f0t9yp31i9tbvZd6%2F8WzJ6HM1bQNES332fIYBzfoRRnhSegBZUIoQ8j64U%2B3OrlW6uKkXR2tGrGlqDf0o%2B5Q3JO67tsVT54MDELDyf5LCJjLQX%2FWyJbUC5%2FFfEloN9SiAmOHHv6hILmphLVQWCATGV5kLj8bKxVMX0egWcSnHWAAvnU66&X-Amz-Signature=e3f9b5210dce065890ea68cf0c1925bb990ca4178b6126be63495cf6adbf6ac4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZADWLWKX%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T061156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDsyA5E2o1U1NazwI0CPhs1kIY0F3HT%2BMSO4TO1yvaiPwIhAKi0TB5wI80%2FDgdIKDGoIQNQ8rFYg0bHE2RUTrurZV4RKv8DCD4QABoMNjM3NDIzMTgzODA1IgzAkSmRG2M8riJ1s%2Boq3AN74f1WBpABSWoZMiPt0y39q%2BrQrP2xyohrCIwbaK5JIuFiWzHTmRe1BNOLvgfw5YszeSS2vKSiZg5Q1N5f1hugyjJPBW5b8sOwvm63FBxwJshY4Gy6gl424JjIVvX1Z7yRoa8MiOSMaL%2B9ZqGw4y89CjfhgIKIoUU8Pz48P7ab5H42bhaeXHEnFipX3Qzs3I5u3GSbnFoeUxDYGeoj0mxrepZwMG6P6cw3uoORSdf6VkT4Yns0GkRfB9YJ6%2F1B3xltnfQ3nzoLlBbKXzXu2CwE1vmZGkZvUbScguHBNRgIcsXnDhYanm5jlmaHjNXlXPlwRfDx6NQIq74oDgB4DsPYOu2WAZFeK2RNrgH2ort7%2FESlJfoh9PqMdYML%2BIF9jscly6L1mHgOG%2BA3A%2By7u2BMJ7%2BKfljxyAtMqDhWOyQYHoJ7G19bhrq9Xljio58uxqmb0UUwF2re2fRdwqLNop9Iu96RfUzmH5eZMzztzMouIoqiISl%2F5G%2BR6SZ5MfAqgzTT6JVZC3QFEO5GCy65RticyBcQ1GjIdts%2F21hdGOonNhfNs5Ov1kKLSFEYJHbn73QS9tkvmFd8liZ38Po45mxkQJl%2BT%2Fu1cUFCe5jejI3Hm8mBqVQn8%2FtLAKkhwTCFrbnCBjqkAaHJgHtJUG%2BWeNy2XsffbQUVGtBHPOC2XREFt%2FtujP6f0t9yp31i9tbvZd6%2F8WzJ6HM1bQNES332fIYBzfoRRnhSegBZUIoQ8j64U%2B3OrlW6uKkXR2tGrGlqDf0o%2B5Q3JO67tsVT54MDELDyf5LCJjLQX%2FWyJbUC5%2FFfEloN9SiAmOHHv6hILmphLVQWCATGV5kLj8bKxVMX0egWcSnHWAAvnU66&X-Amz-Signature=e6cb2670fe0b601e448a20a617ebf1f824ff789c4f9fddba2cc08af6bf2e1a21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZADWLWKX%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T061156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDsyA5E2o1U1NazwI0CPhs1kIY0F3HT%2BMSO4TO1yvaiPwIhAKi0TB5wI80%2FDgdIKDGoIQNQ8rFYg0bHE2RUTrurZV4RKv8DCD4QABoMNjM3NDIzMTgzODA1IgzAkSmRG2M8riJ1s%2Boq3AN74f1WBpABSWoZMiPt0y39q%2BrQrP2xyohrCIwbaK5JIuFiWzHTmRe1BNOLvgfw5YszeSS2vKSiZg5Q1N5f1hugyjJPBW5b8sOwvm63FBxwJshY4Gy6gl424JjIVvX1Z7yRoa8MiOSMaL%2B9ZqGw4y89CjfhgIKIoUU8Pz48P7ab5H42bhaeXHEnFipX3Qzs3I5u3GSbnFoeUxDYGeoj0mxrepZwMG6P6cw3uoORSdf6VkT4Yns0GkRfB9YJ6%2F1B3xltnfQ3nzoLlBbKXzXu2CwE1vmZGkZvUbScguHBNRgIcsXnDhYanm5jlmaHjNXlXPlwRfDx6NQIq74oDgB4DsPYOu2WAZFeK2RNrgH2ort7%2FESlJfoh9PqMdYML%2BIF9jscly6L1mHgOG%2BA3A%2By7u2BMJ7%2BKfljxyAtMqDhWOyQYHoJ7G19bhrq9Xljio58uxqmb0UUwF2re2fRdwqLNop9Iu96RfUzmH5eZMzztzMouIoqiISl%2F5G%2BR6SZ5MfAqgzTT6JVZC3QFEO5GCy65RticyBcQ1GjIdts%2F21hdGOonNhfNs5Ov1kKLSFEYJHbn73QS9tkvmFd8liZ38Po45mxkQJl%2BT%2Fu1cUFCe5jejI3Hm8mBqVQn8%2FtLAKkhwTCFrbnCBjqkAaHJgHtJUG%2BWeNy2XsffbQUVGtBHPOC2XREFt%2FtujP6f0t9yp31i9tbvZd6%2F8WzJ6HM1bQNES332fIYBzfoRRnhSegBZUIoQ8j64U%2B3OrlW6uKkXR2tGrGlqDf0o%2B5Q3JO67tsVT54MDELDyf5LCJjLQX%2FWyJbUC5%2FFfEloN9SiAmOHHv6hILmphLVQWCATGV5kLj8bKxVMX0egWcSnHWAAvnU66&X-Amz-Signature=a2d17c7df7bbb55feb3a1d9e48a3c7f1d4c9eb0d75a65ccd2d7608c9902c5731&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZADWLWKX%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T061156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDsyA5E2o1U1NazwI0CPhs1kIY0F3HT%2BMSO4TO1yvaiPwIhAKi0TB5wI80%2FDgdIKDGoIQNQ8rFYg0bHE2RUTrurZV4RKv8DCD4QABoMNjM3NDIzMTgzODA1IgzAkSmRG2M8riJ1s%2Boq3AN74f1WBpABSWoZMiPt0y39q%2BrQrP2xyohrCIwbaK5JIuFiWzHTmRe1BNOLvgfw5YszeSS2vKSiZg5Q1N5f1hugyjJPBW5b8sOwvm63FBxwJshY4Gy6gl424JjIVvX1Z7yRoa8MiOSMaL%2B9ZqGw4y89CjfhgIKIoUU8Pz48P7ab5H42bhaeXHEnFipX3Qzs3I5u3GSbnFoeUxDYGeoj0mxrepZwMG6P6cw3uoORSdf6VkT4Yns0GkRfB9YJ6%2F1B3xltnfQ3nzoLlBbKXzXu2CwE1vmZGkZvUbScguHBNRgIcsXnDhYanm5jlmaHjNXlXPlwRfDx6NQIq74oDgB4DsPYOu2WAZFeK2RNrgH2ort7%2FESlJfoh9PqMdYML%2BIF9jscly6L1mHgOG%2BA3A%2By7u2BMJ7%2BKfljxyAtMqDhWOyQYHoJ7G19bhrq9Xljio58uxqmb0UUwF2re2fRdwqLNop9Iu96RfUzmH5eZMzztzMouIoqiISl%2F5G%2BR6SZ5MfAqgzTT6JVZC3QFEO5GCy65RticyBcQ1GjIdts%2F21hdGOonNhfNs5Ov1kKLSFEYJHbn73QS9tkvmFd8liZ38Po45mxkQJl%2BT%2Fu1cUFCe5jejI3Hm8mBqVQn8%2FtLAKkhwTCFrbnCBjqkAaHJgHtJUG%2BWeNy2XsffbQUVGtBHPOC2XREFt%2FtujP6f0t9yp31i9tbvZd6%2F8WzJ6HM1bQNES332fIYBzfoRRnhSegBZUIoQ8j64U%2B3OrlW6uKkXR2tGrGlqDf0o%2B5Q3JO67tsVT54MDELDyf5LCJjLQX%2FWyJbUC5%2FFfEloN9SiAmOHHv6hILmphLVQWCATGV5kLj8bKxVMX0egWcSnHWAAvnU66&X-Amz-Signature=2610a5f15c9957abd3a210f415d953746abc179b7846a0f1ea51c27437c0ad61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
