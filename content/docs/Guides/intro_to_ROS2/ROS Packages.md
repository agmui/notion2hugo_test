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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VSBFZDN%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T050941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIFd6aM%2FuYWjThndPCSsQTH2FiuYm8Ugfmdw5QHi1aAC9AiBEBE%2BGwUQ5VkM%2FJF8bVy2Ux%2F5WDlzQJAqz3obk757S6yqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjjyWxZW95xMOzW5jKtwD9czx%2B00iRbIkdMAq1sG2lxL8lrpPzXagoJYE6NSSC7Drfn7ambpQ9J%2FyJIxUCgrZcnARgduG9jyWuXyMPmpL1Yq5i1gx4cI%2F96GDzJfYRmvXW%2Fj1Wi8ww0bUyzMSlGcilqp9tAsMr%2BX2w30FNZ3T4572mXcmjoes3Re76Fuw2oXG6zAvwXjDsCsWPe3A8jNSRYVf1TUFbMLp3yuU%2B857hj1nDCP0PMaY97G%2FB1r72umWD1vLfNW8Gozo9cS14Wl4cIn9MzKWoTpF%2F3mZzgHeXnyZAzz303nEL0LB1UtD3uxc9fWSw98WuQX9RZQwQ9ppiVJuJ%2FW2BRCmKxyLFnMz%2Fom8trPAt4uZnHOc%2BRV1jf6IwFHX0RFJ5K0RFMh5448PkK%2F%2FEBug1L0H9XAEK%2F3iqi%2FHd5TFxFpMiuYjpw006tb%2BfZKSfgAFHSUYUUTnAgFLzOiFbgkGEWWV5baugPwjvxOJrXU7tltv23QjVMVEw2ohZhpmiSMHvJKOIZ%2Fp41YupsX938MxYOHWgU7LQQ975ZaNXnaWSQyGw7lQIFtyC7LMvCPt%2Bp5ro%2BrXKek9XWlszFKed9O19rAZf5RyRmHhvD2ZZNYANNGna15r7Q8nJM0FDTytvRnq9wXAi%2F4w7I6LwQY6pgGFYYHJ6kiaIorFJL5XszjQHMEKCmVizy67BTH3Qscjg%2Bnyjapt5vZQ2ZkSCyMvRHv8TNQL7G34SXoiDPpRxfKWwUaJBYwuwY3AZeogwP2fN%2B%2BOrEV37NA0119JOSEU50XHDzgK3VRM4fcDyb%2F3iB2xJIOKyV9N1E7o2bg%2FJSNfUo0MfF2MRlDaFLwPCKSNr%2FZhJQaAAPb0fdyukWBsopBd7c%2FDgf0f&X-Amz-Signature=c0977b0a24c6e7399e7e60f567e812f21a7a36abfce12045e2d877901eb05d14&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VSBFZDN%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T050941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIFd6aM%2FuYWjThndPCSsQTH2FiuYm8Ugfmdw5QHi1aAC9AiBEBE%2BGwUQ5VkM%2FJF8bVy2Ux%2F5WDlzQJAqz3obk757S6yqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjjyWxZW95xMOzW5jKtwD9czx%2B00iRbIkdMAq1sG2lxL8lrpPzXagoJYE6NSSC7Drfn7ambpQ9J%2FyJIxUCgrZcnARgduG9jyWuXyMPmpL1Yq5i1gx4cI%2F96GDzJfYRmvXW%2Fj1Wi8ww0bUyzMSlGcilqp9tAsMr%2BX2w30FNZ3T4572mXcmjoes3Re76Fuw2oXG6zAvwXjDsCsWPe3A8jNSRYVf1TUFbMLp3yuU%2B857hj1nDCP0PMaY97G%2FB1r72umWD1vLfNW8Gozo9cS14Wl4cIn9MzKWoTpF%2F3mZzgHeXnyZAzz303nEL0LB1UtD3uxc9fWSw98WuQX9RZQwQ9ppiVJuJ%2FW2BRCmKxyLFnMz%2Fom8trPAt4uZnHOc%2BRV1jf6IwFHX0RFJ5K0RFMh5448PkK%2F%2FEBug1L0H9XAEK%2F3iqi%2FHd5TFxFpMiuYjpw006tb%2BfZKSfgAFHSUYUUTnAgFLzOiFbgkGEWWV5baugPwjvxOJrXU7tltv23QjVMVEw2ohZhpmiSMHvJKOIZ%2Fp41YupsX938MxYOHWgU7LQQ975ZaNXnaWSQyGw7lQIFtyC7LMvCPt%2Bp5ro%2BrXKek9XWlszFKed9O19rAZf5RyRmHhvD2ZZNYANNGna15r7Q8nJM0FDTytvRnq9wXAi%2F4w7I6LwQY6pgGFYYHJ6kiaIorFJL5XszjQHMEKCmVizy67BTH3Qscjg%2Bnyjapt5vZQ2ZkSCyMvRHv8TNQL7G34SXoiDPpRxfKWwUaJBYwuwY3AZeogwP2fN%2B%2BOrEV37NA0119JOSEU50XHDzgK3VRM4fcDyb%2F3iB2xJIOKyV9N1E7o2bg%2FJSNfUo0MfF2MRlDaFLwPCKSNr%2FZhJQaAAPb0fdyukWBsopBd7c%2FDgf0f&X-Amz-Signature=39e452dfc1efbd5dc63960163696b7a2449da821224ec40bd1cdfe041eff8b32&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VSBFZDN%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T050941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIFd6aM%2FuYWjThndPCSsQTH2FiuYm8Ugfmdw5QHi1aAC9AiBEBE%2BGwUQ5VkM%2FJF8bVy2Ux%2F5WDlzQJAqz3obk757S6yqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjjyWxZW95xMOzW5jKtwD9czx%2B00iRbIkdMAq1sG2lxL8lrpPzXagoJYE6NSSC7Drfn7ambpQ9J%2FyJIxUCgrZcnARgduG9jyWuXyMPmpL1Yq5i1gx4cI%2F96GDzJfYRmvXW%2Fj1Wi8ww0bUyzMSlGcilqp9tAsMr%2BX2w30FNZ3T4572mXcmjoes3Re76Fuw2oXG6zAvwXjDsCsWPe3A8jNSRYVf1TUFbMLp3yuU%2B857hj1nDCP0PMaY97G%2FB1r72umWD1vLfNW8Gozo9cS14Wl4cIn9MzKWoTpF%2F3mZzgHeXnyZAzz303nEL0LB1UtD3uxc9fWSw98WuQX9RZQwQ9ppiVJuJ%2FW2BRCmKxyLFnMz%2Fom8trPAt4uZnHOc%2BRV1jf6IwFHX0RFJ5K0RFMh5448PkK%2F%2FEBug1L0H9XAEK%2F3iqi%2FHd5TFxFpMiuYjpw006tb%2BfZKSfgAFHSUYUUTnAgFLzOiFbgkGEWWV5baugPwjvxOJrXU7tltv23QjVMVEw2ohZhpmiSMHvJKOIZ%2Fp41YupsX938MxYOHWgU7LQQ975ZaNXnaWSQyGw7lQIFtyC7LMvCPt%2Bp5ro%2BrXKek9XWlszFKed9O19rAZf5RyRmHhvD2ZZNYANNGna15r7Q8nJM0FDTytvRnq9wXAi%2F4w7I6LwQY6pgGFYYHJ6kiaIorFJL5XszjQHMEKCmVizy67BTH3Qscjg%2Bnyjapt5vZQ2ZkSCyMvRHv8TNQL7G34SXoiDPpRxfKWwUaJBYwuwY3AZeogwP2fN%2B%2BOrEV37NA0119JOSEU50XHDzgK3VRM4fcDyb%2F3iB2xJIOKyV9N1E7o2bg%2FJSNfUo0MfF2MRlDaFLwPCKSNr%2FZhJQaAAPb0fdyukWBsopBd7c%2FDgf0f&X-Amz-Signature=17b4f37b4bc53f6cbf9849384dc6d4db8b8e8dab4bb268a97c74bd2dbffbdb50&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VSBFZDN%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T050941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIFd6aM%2FuYWjThndPCSsQTH2FiuYm8Ugfmdw5QHi1aAC9AiBEBE%2BGwUQ5VkM%2FJF8bVy2Ux%2F5WDlzQJAqz3obk757S6yqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjjyWxZW95xMOzW5jKtwD9czx%2B00iRbIkdMAq1sG2lxL8lrpPzXagoJYE6NSSC7Drfn7ambpQ9J%2FyJIxUCgrZcnARgduG9jyWuXyMPmpL1Yq5i1gx4cI%2F96GDzJfYRmvXW%2Fj1Wi8ww0bUyzMSlGcilqp9tAsMr%2BX2w30FNZ3T4572mXcmjoes3Re76Fuw2oXG6zAvwXjDsCsWPe3A8jNSRYVf1TUFbMLp3yuU%2B857hj1nDCP0PMaY97G%2FB1r72umWD1vLfNW8Gozo9cS14Wl4cIn9MzKWoTpF%2F3mZzgHeXnyZAzz303nEL0LB1UtD3uxc9fWSw98WuQX9RZQwQ9ppiVJuJ%2FW2BRCmKxyLFnMz%2Fom8trPAt4uZnHOc%2BRV1jf6IwFHX0RFJ5K0RFMh5448PkK%2F%2FEBug1L0H9XAEK%2F3iqi%2FHd5TFxFpMiuYjpw006tb%2BfZKSfgAFHSUYUUTnAgFLzOiFbgkGEWWV5baugPwjvxOJrXU7tltv23QjVMVEw2ohZhpmiSMHvJKOIZ%2Fp41YupsX938MxYOHWgU7LQQ975ZaNXnaWSQyGw7lQIFtyC7LMvCPt%2Bp5ro%2BrXKek9XWlszFKed9O19rAZf5RyRmHhvD2ZZNYANNGna15r7Q8nJM0FDTytvRnq9wXAi%2F4w7I6LwQY6pgGFYYHJ6kiaIorFJL5XszjQHMEKCmVizy67BTH3Qscjg%2Bnyjapt5vZQ2ZkSCyMvRHv8TNQL7G34SXoiDPpRxfKWwUaJBYwuwY3AZeogwP2fN%2B%2BOrEV37NA0119JOSEU50XHDzgK3VRM4fcDyb%2F3iB2xJIOKyV9N1E7o2bg%2FJSNfUo0MfF2MRlDaFLwPCKSNr%2FZhJQaAAPb0fdyukWBsopBd7c%2FDgf0f&X-Amz-Signature=172a6621448277518e48fc7c9331bb1ef48dfe67bda0f2bd5a35a09bbb9a893f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VSBFZDN%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T050941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIFd6aM%2FuYWjThndPCSsQTH2FiuYm8Ugfmdw5QHi1aAC9AiBEBE%2BGwUQ5VkM%2FJF8bVy2Ux%2F5WDlzQJAqz3obk757S6yqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjjyWxZW95xMOzW5jKtwD9czx%2B00iRbIkdMAq1sG2lxL8lrpPzXagoJYE6NSSC7Drfn7ambpQ9J%2FyJIxUCgrZcnARgduG9jyWuXyMPmpL1Yq5i1gx4cI%2F96GDzJfYRmvXW%2Fj1Wi8ww0bUyzMSlGcilqp9tAsMr%2BX2w30FNZ3T4572mXcmjoes3Re76Fuw2oXG6zAvwXjDsCsWPe3A8jNSRYVf1TUFbMLp3yuU%2B857hj1nDCP0PMaY97G%2FB1r72umWD1vLfNW8Gozo9cS14Wl4cIn9MzKWoTpF%2F3mZzgHeXnyZAzz303nEL0LB1UtD3uxc9fWSw98WuQX9RZQwQ9ppiVJuJ%2FW2BRCmKxyLFnMz%2Fom8trPAt4uZnHOc%2BRV1jf6IwFHX0RFJ5K0RFMh5448PkK%2F%2FEBug1L0H9XAEK%2F3iqi%2FHd5TFxFpMiuYjpw006tb%2BfZKSfgAFHSUYUUTnAgFLzOiFbgkGEWWV5baugPwjvxOJrXU7tltv23QjVMVEw2ohZhpmiSMHvJKOIZ%2Fp41YupsX938MxYOHWgU7LQQ975ZaNXnaWSQyGw7lQIFtyC7LMvCPt%2Bp5ro%2BrXKek9XWlszFKed9O19rAZf5RyRmHhvD2ZZNYANNGna15r7Q8nJM0FDTytvRnq9wXAi%2F4w7I6LwQY6pgGFYYHJ6kiaIorFJL5XszjQHMEKCmVizy67BTH3Qscjg%2Bnyjapt5vZQ2ZkSCyMvRHv8TNQL7G34SXoiDPpRxfKWwUaJBYwuwY3AZeogwP2fN%2B%2BOrEV37NA0119JOSEU50XHDzgK3VRM4fcDyb%2F3iB2xJIOKyV9N1E7o2bg%2FJSNfUo0MfF2MRlDaFLwPCKSNr%2FZhJQaAAPb0fdyukWBsopBd7c%2FDgf0f&X-Amz-Signature=f1a3b6d536da6955f447fcfa5c208089258adfc6833af5d487089d049eb04e95&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VSBFZDN%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T050941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIFd6aM%2FuYWjThndPCSsQTH2FiuYm8Ugfmdw5QHi1aAC9AiBEBE%2BGwUQ5VkM%2FJF8bVy2Ux%2F5WDlzQJAqz3obk757S6yqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjjyWxZW95xMOzW5jKtwD9czx%2B00iRbIkdMAq1sG2lxL8lrpPzXagoJYE6NSSC7Drfn7ambpQ9J%2FyJIxUCgrZcnARgduG9jyWuXyMPmpL1Yq5i1gx4cI%2F96GDzJfYRmvXW%2Fj1Wi8ww0bUyzMSlGcilqp9tAsMr%2BX2w30FNZ3T4572mXcmjoes3Re76Fuw2oXG6zAvwXjDsCsWPe3A8jNSRYVf1TUFbMLp3yuU%2B857hj1nDCP0PMaY97G%2FB1r72umWD1vLfNW8Gozo9cS14Wl4cIn9MzKWoTpF%2F3mZzgHeXnyZAzz303nEL0LB1UtD3uxc9fWSw98WuQX9RZQwQ9ppiVJuJ%2FW2BRCmKxyLFnMz%2Fom8trPAt4uZnHOc%2BRV1jf6IwFHX0RFJ5K0RFMh5448PkK%2F%2FEBug1L0H9XAEK%2F3iqi%2FHd5TFxFpMiuYjpw006tb%2BfZKSfgAFHSUYUUTnAgFLzOiFbgkGEWWV5baugPwjvxOJrXU7tltv23QjVMVEw2ohZhpmiSMHvJKOIZ%2Fp41YupsX938MxYOHWgU7LQQ975ZaNXnaWSQyGw7lQIFtyC7LMvCPt%2Bp5ro%2BrXKek9XWlszFKed9O19rAZf5RyRmHhvD2ZZNYANNGna15r7Q8nJM0FDTytvRnq9wXAi%2F4w7I6LwQY6pgGFYYHJ6kiaIorFJL5XszjQHMEKCmVizy67BTH3Qscjg%2Bnyjapt5vZQ2ZkSCyMvRHv8TNQL7G34SXoiDPpRxfKWwUaJBYwuwY3AZeogwP2fN%2B%2BOrEV37NA0119JOSEU50XHDzgK3VRM4fcDyb%2F3iB2xJIOKyV9N1E7o2bg%2FJSNfUo0MfF2MRlDaFLwPCKSNr%2FZhJQaAAPb0fdyukWBsopBd7c%2FDgf0f&X-Amz-Signature=e12c1a67a29b0849c3d1d8298afce502367e21e9956456df4772b0215c25103f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VSBFZDN%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T050941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIFd6aM%2FuYWjThndPCSsQTH2FiuYm8Ugfmdw5QHi1aAC9AiBEBE%2BGwUQ5VkM%2FJF8bVy2Ux%2F5WDlzQJAqz3obk757S6yqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjjyWxZW95xMOzW5jKtwD9czx%2B00iRbIkdMAq1sG2lxL8lrpPzXagoJYE6NSSC7Drfn7ambpQ9J%2FyJIxUCgrZcnARgduG9jyWuXyMPmpL1Yq5i1gx4cI%2F96GDzJfYRmvXW%2Fj1Wi8ww0bUyzMSlGcilqp9tAsMr%2BX2w30FNZ3T4572mXcmjoes3Re76Fuw2oXG6zAvwXjDsCsWPe3A8jNSRYVf1TUFbMLp3yuU%2B857hj1nDCP0PMaY97G%2FB1r72umWD1vLfNW8Gozo9cS14Wl4cIn9MzKWoTpF%2F3mZzgHeXnyZAzz303nEL0LB1UtD3uxc9fWSw98WuQX9RZQwQ9ppiVJuJ%2FW2BRCmKxyLFnMz%2Fom8trPAt4uZnHOc%2BRV1jf6IwFHX0RFJ5K0RFMh5448PkK%2F%2FEBug1L0H9XAEK%2F3iqi%2FHd5TFxFpMiuYjpw006tb%2BfZKSfgAFHSUYUUTnAgFLzOiFbgkGEWWV5baugPwjvxOJrXU7tltv23QjVMVEw2ohZhpmiSMHvJKOIZ%2Fp41YupsX938MxYOHWgU7LQQ975ZaNXnaWSQyGw7lQIFtyC7LMvCPt%2Bp5ro%2BrXKek9XWlszFKed9O19rAZf5RyRmHhvD2ZZNYANNGna15r7Q8nJM0FDTytvRnq9wXAi%2F4w7I6LwQY6pgGFYYHJ6kiaIorFJL5XszjQHMEKCmVizy67BTH3Qscjg%2Bnyjapt5vZQ2ZkSCyMvRHv8TNQL7G34SXoiDPpRxfKWwUaJBYwuwY3AZeogwP2fN%2B%2BOrEV37NA0119JOSEU50XHDzgK3VRM4fcDyb%2F3iB2xJIOKyV9N1E7o2bg%2FJSNfUo0MfF2MRlDaFLwPCKSNr%2FZhJQaAAPb0fdyukWBsopBd7c%2FDgf0f&X-Amz-Signature=cc05c45501ce5b9eb66b9bde7f3207b3199e141277e42a9e6de347df9ed63ad5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
