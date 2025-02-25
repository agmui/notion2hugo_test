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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHSHFQYG%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T140801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDok2%2Faye04GyIZUT22nHtyhytreBUaiDWu3WxwqWYA2wIhAOKGEu%2BJhmHE97r0K3QmYaoyVnZwvyN6FYiIH4EUAU5qKv8DCEcQABoMNjM3NDIzMTgzODA1IgxnVgyVnA5IdWtsHGcq3AMyDDrAeGiuvRljF29Q2r2ccxTgFDKQYp1KIL2GXQ7P9u8CDs9%2Fq8oihZS7b6m%2Bhq2UdLf8VmT8XvnJkf4GY%2B9Iu25V3W%2BJmTpNWh5fWuhFsEoO8Ihs05XrMsKlzeA0uB4OUG7X41XWlqrumCfbGDmQSgRNdqg3q%2FzNqU0QJvC0BEL%2Bg974ooh8uIZGLnzQptfnocjEF9QhdfDon%2Fa%2Fn2rUTjgIT%2FlkAlWpGzrj3OPLxgErG8xzwUXZ%2BEJUQlcMeP%2B7mTGOwZDGdzEL5ISf0ktDPtXxwSIZytEA9LWRd43Ii8uMrNGA0po9chiowCJLd44LyCXGNH55ID1%2Bk1pGdR40%2B6BjBVH%2F9lrGNBRU4vOSgU0IMRmS5hidDULtrhqTXlrbXCuu5C6jNlzAuhZlcyWeGAWqKYZ5mvT%2FwUk7F40gQZ2oBzfGGVX6xy71dg5YURoOBlPoMSi1T%2F%2FYQodWsCJh%2B8AsEQwPsBG2nQcK586U8e5pZ0Y4j3gEa6IJYoXrD%2BbkVdKTm31RMzNzecMnzWhoWlhmLSAJNOiYjfpU8WMgIee0FCie%2F1CO3nNuBxVrZN%2BGE4VusMcFFfjbF4dhpwS1UwU2Lz6wuDlmkyPkSeyrYCbBgUrA8TjH6ksLnjDFl%2Fe9BjqkAWTdnW32qmW7s5w8xH78OnaSdtV2UM2xPJIUj08RDhchwVqS%2BX6qYbhhSMS7uamwpMmz8tjE7mKTUuECBm3Lr1THNgWSUvgzICPZ6WrhsGn63w5Z8sFppNTTLl6JsjgE7fIztUeBqrRmHzWml1jMeaOzgTuzezUTJLrvwVMKOAJD9zW1%2B17muqYLr2smH3t57aAJKjx%2BqDdW29P1D5AXKDXS6LLG&X-Amz-Signature=8e087ca353497a6a98990420ec88979f3bf2e516ea0f33a1c69e4746698393d2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHSHFQYG%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T140801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDok2%2Faye04GyIZUT22nHtyhytreBUaiDWu3WxwqWYA2wIhAOKGEu%2BJhmHE97r0K3QmYaoyVnZwvyN6FYiIH4EUAU5qKv8DCEcQABoMNjM3NDIzMTgzODA1IgxnVgyVnA5IdWtsHGcq3AMyDDrAeGiuvRljF29Q2r2ccxTgFDKQYp1KIL2GXQ7P9u8CDs9%2Fq8oihZS7b6m%2Bhq2UdLf8VmT8XvnJkf4GY%2B9Iu25V3W%2BJmTpNWh5fWuhFsEoO8Ihs05XrMsKlzeA0uB4OUG7X41XWlqrumCfbGDmQSgRNdqg3q%2FzNqU0QJvC0BEL%2Bg974ooh8uIZGLnzQptfnocjEF9QhdfDon%2Fa%2Fn2rUTjgIT%2FlkAlWpGzrj3OPLxgErG8xzwUXZ%2BEJUQlcMeP%2B7mTGOwZDGdzEL5ISf0ktDPtXxwSIZytEA9LWRd43Ii8uMrNGA0po9chiowCJLd44LyCXGNH55ID1%2Bk1pGdR40%2B6BjBVH%2F9lrGNBRU4vOSgU0IMRmS5hidDULtrhqTXlrbXCuu5C6jNlzAuhZlcyWeGAWqKYZ5mvT%2FwUk7F40gQZ2oBzfGGVX6xy71dg5YURoOBlPoMSi1T%2F%2FYQodWsCJh%2B8AsEQwPsBG2nQcK586U8e5pZ0Y4j3gEa6IJYoXrD%2BbkVdKTm31RMzNzecMnzWhoWlhmLSAJNOiYjfpU8WMgIee0FCie%2F1CO3nNuBxVrZN%2BGE4VusMcFFfjbF4dhpwS1UwU2Lz6wuDlmkyPkSeyrYCbBgUrA8TjH6ksLnjDFl%2Fe9BjqkAWTdnW32qmW7s5w8xH78OnaSdtV2UM2xPJIUj08RDhchwVqS%2BX6qYbhhSMS7uamwpMmz8tjE7mKTUuECBm3Lr1THNgWSUvgzICPZ6WrhsGn63w5Z8sFppNTTLl6JsjgE7fIztUeBqrRmHzWml1jMeaOzgTuzezUTJLrvwVMKOAJD9zW1%2B17muqYLr2smH3t57aAJKjx%2BqDdW29P1D5AXKDXS6LLG&X-Amz-Signature=454d05777f10df029fa353ce52cfe24bda17965e332e13644f94c9d5c2f74e59&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHSHFQYG%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T140801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDok2%2Faye04GyIZUT22nHtyhytreBUaiDWu3WxwqWYA2wIhAOKGEu%2BJhmHE97r0K3QmYaoyVnZwvyN6FYiIH4EUAU5qKv8DCEcQABoMNjM3NDIzMTgzODA1IgxnVgyVnA5IdWtsHGcq3AMyDDrAeGiuvRljF29Q2r2ccxTgFDKQYp1KIL2GXQ7P9u8CDs9%2Fq8oihZS7b6m%2Bhq2UdLf8VmT8XvnJkf4GY%2B9Iu25V3W%2BJmTpNWh5fWuhFsEoO8Ihs05XrMsKlzeA0uB4OUG7X41XWlqrumCfbGDmQSgRNdqg3q%2FzNqU0QJvC0BEL%2Bg974ooh8uIZGLnzQptfnocjEF9QhdfDon%2Fa%2Fn2rUTjgIT%2FlkAlWpGzrj3OPLxgErG8xzwUXZ%2BEJUQlcMeP%2B7mTGOwZDGdzEL5ISf0ktDPtXxwSIZytEA9LWRd43Ii8uMrNGA0po9chiowCJLd44LyCXGNH55ID1%2Bk1pGdR40%2B6BjBVH%2F9lrGNBRU4vOSgU0IMRmS5hidDULtrhqTXlrbXCuu5C6jNlzAuhZlcyWeGAWqKYZ5mvT%2FwUk7F40gQZ2oBzfGGVX6xy71dg5YURoOBlPoMSi1T%2F%2FYQodWsCJh%2B8AsEQwPsBG2nQcK586U8e5pZ0Y4j3gEa6IJYoXrD%2BbkVdKTm31RMzNzecMnzWhoWlhmLSAJNOiYjfpU8WMgIee0FCie%2F1CO3nNuBxVrZN%2BGE4VusMcFFfjbF4dhpwS1UwU2Lz6wuDlmkyPkSeyrYCbBgUrA8TjH6ksLnjDFl%2Fe9BjqkAWTdnW32qmW7s5w8xH78OnaSdtV2UM2xPJIUj08RDhchwVqS%2BX6qYbhhSMS7uamwpMmz8tjE7mKTUuECBm3Lr1THNgWSUvgzICPZ6WrhsGn63w5Z8sFppNTTLl6JsjgE7fIztUeBqrRmHzWml1jMeaOzgTuzezUTJLrvwVMKOAJD9zW1%2B17muqYLr2smH3t57aAJKjx%2BqDdW29P1D5AXKDXS6LLG&X-Amz-Signature=dc9ef21f9e7e78e0987786762310446ec39d356f1c47a9d0b6a56c6d2c3fb8ae&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHSHFQYG%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T140801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDok2%2Faye04GyIZUT22nHtyhytreBUaiDWu3WxwqWYA2wIhAOKGEu%2BJhmHE97r0K3QmYaoyVnZwvyN6FYiIH4EUAU5qKv8DCEcQABoMNjM3NDIzMTgzODA1IgxnVgyVnA5IdWtsHGcq3AMyDDrAeGiuvRljF29Q2r2ccxTgFDKQYp1KIL2GXQ7P9u8CDs9%2Fq8oihZS7b6m%2Bhq2UdLf8VmT8XvnJkf4GY%2B9Iu25V3W%2BJmTpNWh5fWuhFsEoO8Ihs05XrMsKlzeA0uB4OUG7X41XWlqrumCfbGDmQSgRNdqg3q%2FzNqU0QJvC0BEL%2Bg974ooh8uIZGLnzQptfnocjEF9QhdfDon%2Fa%2Fn2rUTjgIT%2FlkAlWpGzrj3OPLxgErG8xzwUXZ%2BEJUQlcMeP%2B7mTGOwZDGdzEL5ISf0ktDPtXxwSIZytEA9LWRd43Ii8uMrNGA0po9chiowCJLd44LyCXGNH55ID1%2Bk1pGdR40%2B6BjBVH%2F9lrGNBRU4vOSgU0IMRmS5hidDULtrhqTXlrbXCuu5C6jNlzAuhZlcyWeGAWqKYZ5mvT%2FwUk7F40gQZ2oBzfGGVX6xy71dg5YURoOBlPoMSi1T%2F%2FYQodWsCJh%2B8AsEQwPsBG2nQcK586U8e5pZ0Y4j3gEa6IJYoXrD%2BbkVdKTm31RMzNzecMnzWhoWlhmLSAJNOiYjfpU8WMgIee0FCie%2F1CO3nNuBxVrZN%2BGE4VusMcFFfjbF4dhpwS1UwU2Lz6wuDlmkyPkSeyrYCbBgUrA8TjH6ksLnjDFl%2Fe9BjqkAWTdnW32qmW7s5w8xH78OnaSdtV2UM2xPJIUj08RDhchwVqS%2BX6qYbhhSMS7uamwpMmz8tjE7mKTUuECBm3Lr1THNgWSUvgzICPZ6WrhsGn63w5Z8sFppNTTLl6JsjgE7fIztUeBqrRmHzWml1jMeaOzgTuzezUTJLrvwVMKOAJD9zW1%2B17muqYLr2smH3t57aAJKjx%2BqDdW29P1D5AXKDXS6LLG&X-Amz-Signature=60f2d763cd74b51cfb0dbde3b80591b60ed1bed24ac6e2d15c5622d78e6034a7&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHSHFQYG%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T140801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDok2%2Faye04GyIZUT22nHtyhytreBUaiDWu3WxwqWYA2wIhAOKGEu%2BJhmHE97r0K3QmYaoyVnZwvyN6FYiIH4EUAU5qKv8DCEcQABoMNjM3NDIzMTgzODA1IgxnVgyVnA5IdWtsHGcq3AMyDDrAeGiuvRljF29Q2r2ccxTgFDKQYp1KIL2GXQ7P9u8CDs9%2Fq8oihZS7b6m%2Bhq2UdLf8VmT8XvnJkf4GY%2B9Iu25V3W%2BJmTpNWh5fWuhFsEoO8Ihs05XrMsKlzeA0uB4OUG7X41XWlqrumCfbGDmQSgRNdqg3q%2FzNqU0QJvC0BEL%2Bg974ooh8uIZGLnzQptfnocjEF9QhdfDon%2Fa%2Fn2rUTjgIT%2FlkAlWpGzrj3OPLxgErG8xzwUXZ%2BEJUQlcMeP%2B7mTGOwZDGdzEL5ISf0ktDPtXxwSIZytEA9LWRd43Ii8uMrNGA0po9chiowCJLd44LyCXGNH55ID1%2Bk1pGdR40%2B6BjBVH%2F9lrGNBRU4vOSgU0IMRmS5hidDULtrhqTXlrbXCuu5C6jNlzAuhZlcyWeGAWqKYZ5mvT%2FwUk7F40gQZ2oBzfGGVX6xy71dg5YURoOBlPoMSi1T%2F%2FYQodWsCJh%2B8AsEQwPsBG2nQcK586U8e5pZ0Y4j3gEa6IJYoXrD%2BbkVdKTm31RMzNzecMnzWhoWlhmLSAJNOiYjfpU8WMgIee0FCie%2F1CO3nNuBxVrZN%2BGE4VusMcFFfjbF4dhpwS1UwU2Lz6wuDlmkyPkSeyrYCbBgUrA8TjH6ksLnjDFl%2Fe9BjqkAWTdnW32qmW7s5w8xH78OnaSdtV2UM2xPJIUj08RDhchwVqS%2BX6qYbhhSMS7uamwpMmz8tjE7mKTUuECBm3Lr1THNgWSUvgzICPZ6WrhsGn63w5Z8sFppNTTLl6JsjgE7fIztUeBqrRmHzWml1jMeaOzgTuzezUTJLrvwVMKOAJD9zW1%2B17muqYLr2smH3t57aAJKjx%2BqDdW29P1D5AXKDXS6LLG&X-Amz-Signature=9a7c27878d903ace7f39139863b82741a5cd8546bf6fa3a1ff8cd9a50918e0c0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHSHFQYG%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T140801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDok2%2Faye04GyIZUT22nHtyhytreBUaiDWu3WxwqWYA2wIhAOKGEu%2BJhmHE97r0K3QmYaoyVnZwvyN6FYiIH4EUAU5qKv8DCEcQABoMNjM3NDIzMTgzODA1IgxnVgyVnA5IdWtsHGcq3AMyDDrAeGiuvRljF29Q2r2ccxTgFDKQYp1KIL2GXQ7P9u8CDs9%2Fq8oihZS7b6m%2Bhq2UdLf8VmT8XvnJkf4GY%2B9Iu25V3W%2BJmTpNWh5fWuhFsEoO8Ihs05XrMsKlzeA0uB4OUG7X41XWlqrumCfbGDmQSgRNdqg3q%2FzNqU0QJvC0BEL%2Bg974ooh8uIZGLnzQptfnocjEF9QhdfDon%2Fa%2Fn2rUTjgIT%2FlkAlWpGzrj3OPLxgErG8xzwUXZ%2BEJUQlcMeP%2B7mTGOwZDGdzEL5ISf0ktDPtXxwSIZytEA9LWRd43Ii8uMrNGA0po9chiowCJLd44LyCXGNH55ID1%2Bk1pGdR40%2B6BjBVH%2F9lrGNBRU4vOSgU0IMRmS5hidDULtrhqTXlrbXCuu5C6jNlzAuhZlcyWeGAWqKYZ5mvT%2FwUk7F40gQZ2oBzfGGVX6xy71dg5YURoOBlPoMSi1T%2F%2FYQodWsCJh%2B8AsEQwPsBG2nQcK586U8e5pZ0Y4j3gEa6IJYoXrD%2BbkVdKTm31RMzNzecMnzWhoWlhmLSAJNOiYjfpU8WMgIee0FCie%2F1CO3nNuBxVrZN%2BGE4VusMcFFfjbF4dhpwS1UwU2Lz6wuDlmkyPkSeyrYCbBgUrA8TjH6ksLnjDFl%2Fe9BjqkAWTdnW32qmW7s5w8xH78OnaSdtV2UM2xPJIUj08RDhchwVqS%2BX6qYbhhSMS7uamwpMmz8tjE7mKTUuECBm3Lr1THNgWSUvgzICPZ6WrhsGn63w5Z8sFppNTTLl6JsjgE7fIztUeBqrRmHzWml1jMeaOzgTuzezUTJLrvwVMKOAJD9zW1%2B17muqYLr2smH3t57aAJKjx%2BqDdW29P1D5AXKDXS6LLG&X-Amz-Signature=cc972c1840c5eb9c77e0d46ad747deee8c47b935352f7614805a54f169a7db80&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHSHFQYG%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T140801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDok2%2Faye04GyIZUT22nHtyhytreBUaiDWu3WxwqWYA2wIhAOKGEu%2BJhmHE97r0K3QmYaoyVnZwvyN6FYiIH4EUAU5qKv8DCEcQABoMNjM3NDIzMTgzODA1IgxnVgyVnA5IdWtsHGcq3AMyDDrAeGiuvRljF29Q2r2ccxTgFDKQYp1KIL2GXQ7P9u8CDs9%2Fq8oihZS7b6m%2Bhq2UdLf8VmT8XvnJkf4GY%2B9Iu25V3W%2BJmTpNWh5fWuhFsEoO8Ihs05XrMsKlzeA0uB4OUG7X41XWlqrumCfbGDmQSgRNdqg3q%2FzNqU0QJvC0BEL%2Bg974ooh8uIZGLnzQptfnocjEF9QhdfDon%2Fa%2Fn2rUTjgIT%2FlkAlWpGzrj3OPLxgErG8xzwUXZ%2BEJUQlcMeP%2B7mTGOwZDGdzEL5ISf0ktDPtXxwSIZytEA9LWRd43Ii8uMrNGA0po9chiowCJLd44LyCXGNH55ID1%2Bk1pGdR40%2B6BjBVH%2F9lrGNBRU4vOSgU0IMRmS5hidDULtrhqTXlrbXCuu5C6jNlzAuhZlcyWeGAWqKYZ5mvT%2FwUk7F40gQZ2oBzfGGVX6xy71dg5YURoOBlPoMSi1T%2F%2FYQodWsCJh%2B8AsEQwPsBG2nQcK586U8e5pZ0Y4j3gEa6IJYoXrD%2BbkVdKTm31RMzNzecMnzWhoWlhmLSAJNOiYjfpU8WMgIee0FCie%2F1CO3nNuBxVrZN%2BGE4VusMcFFfjbF4dhpwS1UwU2Lz6wuDlmkyPkSeyrYCbBgUrA8TjH6ksLnjDFl%2Fe9BjqkAWTdnW32qmW7s5w8xH78OnaSdtV2UM2xPJIUj08RDhchwVqS%2BX6qYbhhSMS7uamwpMmz8tjE7mKTUuECBm3Lr1THNgWSUvgzICPZ6WrhsGn63w5Z8sFppNTTLl6JsjgE7fIztUeBqrRmHzWml1jMeaOzgTuzezUTJLrvwVMKOAJD9zW1%2B17muqYLr2smH3t57aAJKjx%2BqDdW29P1D5AXKDXS6LLG&X-Amz-Signature=6d4b77c5938958a63e08e982e2423680cbbb136b30de77bb66e2374789daf3c0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
