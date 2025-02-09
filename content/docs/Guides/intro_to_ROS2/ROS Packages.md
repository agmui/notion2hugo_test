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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCLWQLSB%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T060939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVzHNa14UaT31lORXE%2BDTrgQIVmTAnNkydtHzlN5PDyAiEAqB9gLe8nF%2FmjS297Y8HsA8CH7UWIynNLL8xdLipgV5oqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL7m0IpZkoDd8VNBjCrcA0J%2BBG9TEQRHXbBzFBJ8Y9MwIbkxp7Fiyjt%2FX%2BykPm7jN%2B3h27%2BhyyM6CWrc2unlj5Ci7%2FdcUvdE6WE5bLEKKX2JZpaAOnoFzwqLmR5CUPl5ZLXMmj6wAowA2doww3bu37DC1ukbH%2FXzcvQxnMWURemT4yxTwspqckuaqj4%2FNnk5LVkOc0worqEobQR3b7ccaCIUhoTtgQszAqJsZgecAIwOgtGF4IBO4%2B2tFEoOP3HHHhLIK%2F7beKJLoA7eyven%2BBJT5xYdrA6OyuxbeMM8iWu2bIjRyjcX9OqNRDwFX9n8Rc%2FFHc9RbsDpwZjwgfrnWKh7AqkMlAHFJPDhstjiohmsNShnBJhES0gQg9dNo4yDM%2BRBysAdjHx4oD8HXQIgbZAnSGjkJsIKV%2BdV%2B9dbRh6hnlv34%2BX14EGHTox8zYZHK7LpEE0xbbJZz%2BO%2FoSjzeVj43W6fQ%2BfMT2lNEa0b0FxVoBqEG05BTMxligz5OThvENl7Ng%2BJrUnmUy1QPzkHx%2FYIUxcKkNarhFA%2F6WtqXd1pCjqZQ4LeLHZ6DQj1G%2FaA%2BzzNirPamkea5GQ1bKW5GBCUWDzZ0Bjq3DdMqGQP2NdfOGvsqxYQCaiMB2U0wicDr9YZ%2BrIQImKHUS%2BVMN6%2BoL0GOqUBldSM4PcfJWpvsG06rJFDGeaJONRQ3VdCorh8cDaYVkrP1%2Fsaq4wEOOkb9d%2FA0IcQlsH%2FsoUqRzgnt0CyQF26%2FZkMCsQM352k2jErZGLbxJcgrgymbfCtZgPRQeV%2Fp%2ByIyMB98hCq2%2B%2FZRsJ%2BwDUWSUfrY7r9%2B6pDevji1226l%2FGbBPdEGPPJ1BEKFgt61IZweuwTmaS%2B0XKBFc6xk21%2BMBWBnRV6&X-Amz-Signature=693607aeb7426fcb3ead3243ee61a29029910dffad3bd238f0a81abc99c923ee&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCLWQLSB%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T060939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVzHNa14UaT31lORXE%2BDTrgQIVmTAnNkydtHzlN5PDyAiEAqB9gLe8nF%2FmjS297Y8HsA8CH7UWIynNLL8xdLipgV5oqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL7m0IpZkoDd8VNBjCrcA0J%2BBG9TEQRHXbBzFBJ8Y9MwIbkxp7Fiyjt%2FX%2BykPm7jN%2B3h27%2BhyyM6CWrc2unlj5Ci7%2FdcUvdE6WE5bLEKKX2JZpaAOnoFzwqLmR5CUPl5ZLXMmj6wAowA2doww3bu37DC1ukbH%2FXzcvQxnMWURemT4yxTwspqckuaqj4%2FNnk5LVkOc0worqEobQR3b7ccaCIUhoTtgQszAqJsZgecAIwOgtGF4IBO4%2B2tFEoOP3HHHhLIK%2F7beKJLoA7eyven%2BBJT5xYdrA6OyuxbeMM8iWu2bIjRyjcX9OqNRDwFX9n8Rc%2FFHc9RbsDpwZjwgfrnWKh7AqkMlAHFJPDhstjiohmsNShnBJhES0gQg9dNo4yDM%2BRBysAdjHx4oD8HXQIgbZAnSGjkJsIKV%2BdV%2B9dbRh6hnlv34%2BX14EGHTox8zYZHK7LpEE0xbbJZz%2BO%2FoSjzeVj43W6fQ%2BfMT2lNEa0b0FxVoBqEG05BTMxligz5OThvENl7Ng%2BJrUnmUy1QPzkHx%2FYIUxcKkNarhFA%2F6WtqXd1pCjqZQ4LeLHZ6DQj1G%2FaA%2BzzNirPamkea5GQ1bKW5GBCUWDzZ0Bjq3DdMqGQP2NdfOGvsqxYQCaiMB2U0wicDr9YZ%2BrIQImKHUS%2BVMN6%2BoL0GOqUBldSM4PcfJWpvsG06rJFDGeaJONRQ3VdCorh8cDaYVkrP1%2Fsaq4wEOOkb9d%2FA0IcQlsH%2FsoUqRzgnt0CyQF26%2FZkMCsQM352k2jErZGLbxJcgrgymbfCtZgPRQeV%2Fp%2ByIyMB98hCq2%2B%2FZRsJ%2BwDUWSUfrY7r9%2B6pDevji1226l%2FGbBPdEGPPJ1BEKFgt61IZweuwTmaS%2B0XKBFc6xk21%2BMBWBnRV6&X-Amz-Signature=979e962938b05c9bc6cf8afe64bde8ed13bb41da1b44f98e0a61761aebc0062e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCLWQLSB%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T060939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVzHNa14UaT31lORXE%2BDTrgQIVmTAnNkydtHzlN5PDyAiEAqB9gLe8nF%2FmjS297Y8HsA8CH7UWIynNLL8xdLipgV5oqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL7m0IpZkoDd8VNBjCrcA0J%2BBG9TEQRHXbBzFBJ8Y9MwIbkxp7Fiyjt%2FX%2BykPm7jN%2B3h27%2BhyyM6CWrc2unlj5Ci7%2FdcUvdE6WE5bLEKKX2JZpaAOnoFzwqLmR5CUPl5ZLXMmj6wAowA2doww3bu37DC1ukbH%2FXzcvQxnMWURemT4yxTwspqckuaqj4%2FNnk5LVkOc0worqEobQR3b7ccaCIUhoTtgQszAqJsZgecAIwOgtGF4IBO4%2B2tFEoOP3HHHhLIK%2F7beKJLoA7eyven%2BBJT5xYdrA6OyuxbeMM8iWu2bIjRyjcX9OqNRDwFX9n8Rc%2FFHc9RbsDpwZjwgfrnWKh7AqkMlAHFJPDhstjiohmsNShnBJhES0gQg9dNo4yDM%2BRBysAdjHx4oD8HXQIgbZAnSGjkJsIKV%2BdV%2B9dbRh6hnlv34%2BX14EGHTox8zYZHK7LpEE0xbbJZz%2BO%2FoSjzeVj43W6fQ%2BfMT2lNEa0b0FxVoBqEG05BTMxligz5OThvENl7Ng%2BJrUnmUy1QPzkHx%2FYIUxcKkNarhFA%2F6WtqXd1pCjqZQ4LeLHZ6DQj1G%2FaA%2BzzNirPamkea5GQ1bKW5GBCUWDzZ0Bjq3DdMqGQP2NdfOGvsqxYQCaiMB2U0wicDr9YZ%2BrIQImKHUS%2BVMN6%2BoL0GOqUBldSM4PcfJWpvsG06rJFDGeaJONRQ3VdCorh8cDaYVkrP1%2Fsaq4wEOOkb9d%2FA0IcQlsH%2FsoUqRzgnt0CyQF26%2FZkMCsQM352k2jErZGLbxJcgrgymbfCtZgPRQeV%2Fp%2ByIyMB98hCq2%2B%2FZRsJ%2BwDUWSUfrY7r9%2B6pDevji1226l%2FGbBPdEGPPJ1BEKFgt61IZweuwTmaS%2B0XKBFc6xk21%2BMBWBnRV6&X-Amz-Signature=8d91f121fdc1f240b410036f222a9c967bbc3d4586496359e92842382d3e85a0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCLWQLSB%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T060939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVzHNa14UaT31lORXE%2BDTrgQIVmTAnNkydtHzlN5PDyAiEAqB9gLe8nF%2FmjS297Y8HsA8CH7UWIynNLL8xdLipgV5oqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL7m0IpZkoDd8VNBjCrcA0J%2BBG9TEQRHXbBzFBJ8Y9MwIbkxp7Fiyjt%2FX%2BykPm7jN%2B3h27%2BhyyM6CWrc2unlj5Ci7%2FdcUvdE6WE5bLEKKX2JZpaAOnoFzwqLmR5CUPl5ZLXMmj6wAowA2doww3bu37DC1ukbH%2FXzcvQxnMWURemT4yxTwspqckuaqj4%2FNnk5LVkOc0worqEobQR3b7ccaCIUhoTtgQszAqJsZgecAIwOgtGF4IBO4%2B2tFEoOP3HHHhLIK%2F7beKJLoA7eyven%2BBJT5xYdrA6OyuxbeMM8iWu2bIjRyjcX9OqNRDwFX9n8Rc%2FFHc9RbsDpwZjwgfrnWKh7AqkMlAHFJPDhstjiohmsNShnBJhES0gQg9dNo4yDM%2BRBysAdjHx4oD8HXQIgbZAnSGjkJsIKV%2BdV%2B9dbRh6hnlv34%2BX14EGHTox8zYZHK7LpEE0xbbJZz%2BO%2FoSjzeVj43W6fQ%2BfMT2lNEa0b0FxVoBqEG05BTMxligz5OThvENl7Ng%2BJrUnmUy1QPzkHx%2FYIUxcKkNarhFA%2F6WtqXd1pCjqZQ4LeLHZ6DQj1G%2FaA%2BzzNirPamkea5GQ1bKW5GBCUWDzZ0Bjq3DdMqGQP2NdfOGvsqxYQCaiMB2U0wicDr9YZ%2BrIQImKHUS%2BVMN6%2BoL0GOqUBldSM4PcfJWpvsG06rJFDGeaJONRQ3VdCorh8cDaYVkrP1%2Fsaq4wEOOkb9d%2FA0IcQlsH%2FsoUqRzgnt0CyQF26%2FZkMCsQM352k2jErZGLbxJcgrgymbfCtZgPRQeV%2Fp%2ByIyMB98hCq2%2B%2FZRsJ%2BwDUWSUfrY7r9%2B6pDevji1226l%2FGbBPdEGPPJ1BEKFgt61IZweuwTmaS%2B0XKBFc6xk21%2BMBWBnRV6&X-Amz-Signature=6a4b5379d0799c480f3f980afcd787d824cac3b4078d2f10a5c3fabae2282687&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCLWQLSB%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T060939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVzHNa14UaT31lORXE%2BDTrgQIVmTAnNkydtHzlN5PDyAiEAqB9gLe8nF%2FmjS297Y8HsA8CH7UWIynNLL8xdLipgV5oqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL7m0IpZkoDd8VNBjCrcA0J%2BBG9TEQRHXbBzFBJ8Y9MwIbkxp7Fiyjt%2FX%2BykPm7jN%2B3h27%2BhyyM6CWrc2unlj5Ci7%2FdcUvdE6WE5bLEKKX2JZpaAOnoFzwqLmR5CUPl5ZLXMmj6wAowA2doww3bu37DC1ukbH%2FXzcvQxnMWURemT4yxTwspqckuaqj4%2FNnk5LVkOc0worqEobQR3b7ccaCIUhoTtgQszAqJsZgecAIwOgtGF4IBO4%2B2tFEoOP3HHHhLIK%2F7beKJLoA7eyven%2BBJT5xYdrA6OyuxbeMM8iWu2bIjRyjcX9OqNRDwFX9n8Rc%2FFHc9RbsDpwZjwgfrnWKh7AqkMlAHFJPDhstjiohmsNShnBJhES0gQg9dNo4yDM%2BRBysAdjHx4oD8HXQIgbZAnSGjkJsIKV%2BdV%2B9dbRh6hnlv34%2BX14EGHTox8zYZHK7LpEE0xbbJZz%2BO%2FoSjzeVj43W6fQ%2BfMT2lNEa0b0FxVoBqEG05BTMxligz5OThvENl7Ng%2BJrUnmUy1QPzkHx%2FYIUxcKkNarhFA%2F6WtqXd1pCjqZQ4LeLHZ6DQj1G%2FaA%2BzzNirPamkea5GQ1bKW5GBCUWDzZ0Bjq3DdMqGQP2NdfOGvsqxYQCaiMB2U0wicDr9YZ%2BrIQImKHUS%2BVMN6%2BoL0GOqUBldSM4PcfJWpvsG06rJFDGeaJONRQ3VdCorh8cDaYVkrP1%2Fsaq4wEOOkb9d%2FA0IcQlsH%2FsoUqRzgnt0CyQF26%2FZkMCsQM352k2jErZGLbxJcgrgymbfCtZgPRQeV%2Fp%2ByIyMB98hCq2%2B%2FZRsJ%2BwDUWSUfrY7r9%2B6pDevji1226l%2FGbBPdEGPPJ1BEKFgt61IZweuwTmaS%2B0XKBFc6xk21%2BMBWBnRV6&X-Amz-Signature=6ee7799eb258398218ccde5f76de945a9e1ddd349edf336de6e07aca941e4b36&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCLWQLSB%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T060939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVzHNa14UaT31lORXE%2BDTrgQIVmTAnNkydtHzlN5PDyAiEAqB9gLe8nF%2FmjS297Y8HsA8CH7UWIynNLL8xdLipgV5oqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL7m0IpZkoDd8VNBjCrcA0J%2BBG9TEQRHXbBzFBJ8Y9MwIbkxp7Fiyjt%2FX%2BykPm7jN%2B3h27%2BhyyM6CWrc2unlj5Ci7%2FdcUvdE6WE5bLEKKX2JZpaAOnoFzwqLmR5CUPl5ZLXMmj6wAowA2doww3bu37DC1ukbH%2FXzcvQxnMWURemT4yxTwspqckuaqj4%2FNnk5LVkOc0worqEobQR3b7ccaCIUhoTtgQszAqJsZgecAIwOgtGF4IBO4%2B2tFEoOP3HHHhLIK%2F7beKJLoA7eyven%2BBJT5xYdrA6OyuxbeMM8iWu2bIjRyjcX9OqNRDwFX9n8Rc%2FFHc9RbsDpwZjwgfrnWKh7AqkMlAHFJPDhstjiohmsNShnBJhES0gQg9dNo4yDM%2BRBysAdjHx4oD8HXQIgbZAnSGjkJsIKV%2BdV%2B9dbRh6hnlv34%2BX14EGHTox8zYZHK7LpEE0xbbJZz%2BO%2FoSjzeVj43W6fQ%2BfMT2lNEa0b0FxVoBqEG05BTMxligz5OThvENl7Ng%2BJrUnmUy1QPzkHx%2FYIUxcKkNarhFA%2F6WtqXd1pCjqZQ4LeLHZ6DQj1G%2FaA%2BzzNirPamkea5GQ1bKW5GBCUWDzZ0Bjq3DdMqGQP2NdfOGvsqxYQCaiMB2U0wicDr9YZ%2BrIQImKHUS%2BVMN6%2BoL0GOqUBldSM4PcfJWpvsG06rJFDGeaJONRQ3VdCorh8cDaYVkrP1%2Fsaq4wEOOkb9d%2FA0IcQlsH%2FsoUqRzgnt0CyQF26%2FZkMCsQM352k2jErZGLbxJcgrgymbfCtZgPRQeV%2Fp%2ByIyMB98hCq2%2B%2FZRsJ%2BwDUWSUfrY7r9%2B6pDevji1226l%2FGbBPdEGPPJ1BEKFgt61IZweuwTmaS%2B0XKBFc6xk21%2BMBWBnRV6&X-Amz-Signature=cf1c7ea79f9910b9a20c533671a74a6b64bc5e5e0031172d9f84be557db99416&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCLWQLSB%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T060939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVzHNa14UaT31lORXE%2BDTrgQIVmTAnNkydtHzlN5PDyAiEAqB9gLe8nF%2FmjS297Y8HsA8CH7UWIynNLL8xdLipgV5oqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL7m0IpZkoDd8VNBjCrcA0J%2BBG9TEQRHXbBzFBJ8Y9MwIbkxp7Fiyjt%2FX%2BykPm7jN%2B3h27%2BhyyM6CWrc2unlj5Ci7%2FdcUvdE6WE5bLEKKX2JZpaAOnoFzwqLmR5CUPl5ZLXMmj6wAowA2doww3bu37DC1ukbH%2FXzcvQxnMWURemT4yxTwspqckuaqj4%2FNnk5LVkOc0worqEobQR3b7ccaCIUhoTtgQszAqJsZgecAIwOgtGF4IBO4%2B2tFEoOP3HHHhLIK%2F7beKJLoA7eyven%2BBJT5xYdrA6OyuxbeMM8iWu2bIjRyjcX9OqNRDwFX9n8Rc%2FFHc9RbsDpwZjwgfrnWKh7AqkMlAHFJPDhstjiohmsNShnBJhES0gQg9dNo4yDM%2BRBysAdjHx4oD8HXQIgbZAnSGjkJsIKV%2BdV%2B9dbRh6hnlv34%2BX14EGHTox8zYZHK7LpEE0xbbJZz%2BO%2FoSjzeVj43W6fQ%2BfMT2lNEa0b0FxVoBqEG05BTMxligz5OThvENl7Ng%2BJrUnmUy1QPzkHx%2FYIUxcKkNarhFA%2F6WtqXd1pCjqZQ4LeLHZ6DQj1G%2FaA%2BzzNirPamkea5GQ1bKW5GBCUWDzZ0Bjq3DdMqGQP2NdfOGvsqxYQCaiMB2U0wicDr9YZ%2BrIQImKHUS%2BVMN6%2BoL0GOqUBldSM4PcfJWpvsG06rJFDGeaJONRQ3VdCorh8cDaYVkrP1%2Fsaq4wEOOkb9d%2FA0IcQlsH%2FsoUqRzgnt0CyQF26%2FZkMCsQM352k2jErZGLbxJcgrgymbfCtZgPRQeV%2Fp%2ByIyMB98hCq2%2B%2FZRsJ%2BwDUWSUfrY7r9%2B6pDevji1226l%2FGbBPdEGPPJ1BEKFgt61IZweuwTmaS%2B0XKBFc6xk21%2BMBWBnRV6&X-Amz-Signature=82c9d13b7d48fb0bea9c2f31ee4b098f45c891025f805b66718f6958eb43b4b0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
