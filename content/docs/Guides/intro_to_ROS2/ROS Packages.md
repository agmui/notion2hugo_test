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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466263ZCYPC%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtgeBP%2BxzS2YGF6%2Fe77g7ArjZ%2BMf0UuapxFZmdK%2BaBzAIgH29bCBmKXXG%2Bo8ftuM7Rz3QCpylJXdIPcFcOnVH9628q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDNHTThc%2FgjGVowtA%2BSrcA%2BYIeC6dHkoYRSu2jFEhkb1xTX43vFncWFCyuvREbzyxhUvhmG0tq0I1O6gdb%2BZk6s%2BFcsHEY71fe%2BoXAoh%2BMfL0EFVMeQ6VH5Dglwbaolh3QcQTAp%2FRmwWxqBQAuBnBkn1MockPCX4J6JSup1STynuuvLlCxPVEUSf3Uwx0AqspUocYpJx%2BFmZDrp8LRumz74cm%2BhbG9JyV1Bd2adWxsOSmPxv7k5NE6ZWRP5CRTkFQwrqld3U3xDslVUXq92diSWvyjig42DtK%2FMv3LukicXI8L5NIq9g8Pm2oIWXVHIPB%2F5%2FJXhx3a2hHQSRhAB56SlqEmd3PmjSLigaw7IgYX9mHQNxF1SfoRvLpw2EPbrGHXELva7Ztgjd9Yb7q65hdpHEpwiViOAdvtQoLTdfLKSbGUEno0sExhkl1W7WT21pJF9QYoU6D2%2FwLxPqmDQ87Wcp2DOZxyf0tlnwsDHQhhAesxettoItXdjV6T%2B79DVzVnMJUcfR0js85WY9jHnM9bJhbN0DS63B3FKAeNbKKsGD7v6IEjzqFrZhbtN8qPysEy53PVqOHvQsqZnNTnZDQt2EazMYcof7k7aTjTmBuen53NbGzyieUFZmju1aRZ6hYu%2B09qQRbkX5DyT5jMOOisMAGOqUBH%2BMnzs8sxuGZRc4MrP8b2wOjLPYVmzlSLL0mpPW1V1Lwc59MMwGGc0HS%2Be%2FbblCb8C7bQnXuqTRICW03tm%2BvxTyPUmIRuOgLMbX%2BHeRdfqaJelbHzwPwXDw21IUAtd2RM%2B4xw0AJ5P1%2FedZ1qTMUH2eyNa3wPbbT%2FwOvOk9pggdu4P7i54W%2FtYDea9JqOk4GZ1nSOctbpVwVvAWOOJQ2fb46xIqp&X-Amz-Signature=748a3e38eb5b16604967992e9255a66a9df54a64a3706ed113e9abb9bca6e15a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466263ZCYPC%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtgeBP%2BxzS2YGF6%2Fe77g7ArjZ%2BMf0UuapxFZmdK%2BaBzAIgH29bCBmKXXG%2Bo8ftuM7Rz3QCpylJXdIPcFcOnVH9628q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDNHTThc%2FgjGVowtA%2BSrcA%2BYIeC6dHkoYRSu2jFEhkb1xTX43vFncWFCyuvREbzyxhUvhmG0tq0I1O6gdb%2BZk6s%2BFcsHEY71fe%2BoXAoh%2BMfL0EFVMeQ6VH5Dglwbaolh3QcQTAp%2FRmwWxqBQAuBnBkn1MockPCX4J6JSup1STynuuvLlCxPVEUSf3Uwx0AqspUocYpJx%2BFmZDrp8LRumz74cm%2BhbG9JyV1Bd2adWxsOSmPxv7k5NE6ZWRP5CRTkFQwrqld3U3xDslVUXq92diSWvyjig42DtK%2FMv3LukicXI8L5NIq9g8Pm2oIWXVHIPB%2F5%2FJXhx3a2hHQSRhAB56SlqEmd3PmjSLigaw7IgYX9mHQNxF1SfoRvLpw2EPbrGHXELva7Ztgjd9Yb7q65hdpHEpwiViOAdvtQoLTdfLKSbGUEno0sExhkl1W7WT21pJF9QYoU6D2%2FwLxPqmDQ87Wcp2DOZxyf0tlnwsDHQhhAesxettoItXdjV6T%2B79DVzVnMJUcfR0js85WY9jHnM9bJhbN0DS63B3FKAeNbKKsGD7v6IEjzqFrZhbtN8qPysEy53PVqOHvQsqZnNTnZDQt2EazMYcof7k7aTjTmBuen53NbGzyieUFZmju1aRZ6hYu%2B09qQRbkX5DyT5jMOOisMAGOqUBH%2BMnzs8sxuGZRc4MrP8b2wOjLPYVmzlSLL0mpPW1V1Lwc59MMwGGc0HS%2Be%2FbblCb8C7bQnXuqTRICW03tm%2BvxTyPUmIRuOgLMbX%2BHeRdfqaJelbHzwPwXDw21IUAtd2RM%2B4xw0AJ5P1%2FedZ1qTMUH2eyNa3wPbbT%2FwOvOk9pggdu4P7i54W%2FtYDea9JqOk4GZ1nSOctbpVwVvAWOOJQ2fb46xIqp&X-Amz-Signature=a01ceb5acf05df4e1c6e4d822b9aa30096c0a46ebcc4516e1e3b91a0393b64e2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466263ZCYPC%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtgeBP%2BxzS2YGF6%2Fe77g7ArjZ%2BMf0UuapxFZmdK%2BaBzAIgH29bCBmKXXG%2Bo8ftuM7Rz3QCpylJXdIPcFcOnVH9628q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDNHTThc%2FgjGVowtA%2BSrcA%2BYIeC6dHkoYRSu2jFEhkb1xTX43vFncWFCyuvREbzyxhUvhmG0tq0I1O6gdb%2BZk6s%2BFcsHEY71fe%2BoXAoh%2BMfL0EFVMeQ6VH5Dglwbaolh3QcQTAp%2FRmwWxqBQAuBnBkn1MockPCX4J6JSup1STynuuvLlCxPVEUSf3Uwx0AqspUocYpJx%2BFmZDrp8LRumz74cm%2BhbG9JyV1Bd2adWxsOSmPxv7k5NE6ZWRP5CRTkFQwrqld3U3xDslVUXq92diSWvyjig42DtK%2FMv3LukicXI8L5NIq9g8Pm2oIWXVHIPB%2F5%2FJXhx3a2hHQSRhAB56SlqEmd3PmjSLigaw7IgYX9mHQNxF1SfoRvLpw2EPbrGHXELva7Ztgjd9Yb7q65hdpHEpwiViOAdvtQoLTdfLKSbGUEno0sExhkl1W7WT21pJF9QYoU6D2%2FwLxPqmDQ87Wcp2DOZxyf0tlnwsDHQhhAesxettoItXdjV6T%2B79DVzVnMJUcfR0js85WY9jHnM9bJhbN0DS63B3FKAeNbKKsGD7v6IEjzqFrZhbtN8qPysEy53PVqOHvQsqZnNTnZDQt2EazMYcof7k7aTjTmBuen53NbGzyieUFZmju1aRZ6hYu%2B09qQRbkX5DyT5jMOOisMAGOqUBH%2BMnzs8sxuGZRc4MrP8b2wOjLPYVmzlSLL0mpPW1V1Lwc59MMwGGc0HS%2Be%2FbblCb8C7bQnXuqTRICW03tm%2BvxTyPUmIRuOgLMbX%2BHeRdfqaJelbHzwPwXDw21IUAtd2RM%2B4xw0AJ5P1%2FedZ1qTMUH2eyNa3wPbbT%2FwOvOk9pggdu4P7i54W%2FtYDea9JqOk4GZ1nSOctbpVwVvAWOOJQ2fb46xIqp&X-Amz-Signature=a922969f35eeb886f103e751a2945b76eb5f7a912a1c40a3f05c3c9b948fdd69&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466263ZCYPC%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtgeBP%2BxzS2YGF6%2Fe77g7ArjZ%2BMf0UuapxFZmdK%2BaBzAIgH29bCBmKXXG%2Bo8ftuM7Rz3QCpylJXdIPcFcOnVH9628q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDNHTThc%2FgjGVowtA%2BSrcA%2BYIeC6dHkoYRSu2jFEhkb1xTX43vFncWFCyuvREbzyxhUvhmG0tq0I1O6gdb%2BZk6s%2BFcsHEY71fe%2BoXAoh%2BMfL0EFVMeQ6VH5Dglwbaolh3QcQTAp%2FRmwWxqBQAuBnBkn1MockPCX4J6JSup1STynuuvLlCxPVEUSf3Uwx0AqspUocYpJx%2BFmZDrp8LRumz74cm%2BhbG9JyV1Bd2adWxsOSmPxv7k5NE6ZWRP5CRTkFQwrqld3U3xDslVUXq92diSWvyjig42DtK%2FMv3LukicXI8L5NIq9g8Pm2oIWXVHIPB%2F5%2FJXhx3a2hHQSRhAB56SlqEmd3PmjSLigaw7IgYX9mHQNxF1SfoRvLpw2EPbrGHXELva7Ztgjd9Yb7q65hdpHEpwiViOAdvtQoLTdfLKSbGUEno0sExhkl1W7WT21pJF9QYoU6D2%2FwLxPqmDQ87Wcp2DOZxyf0tlnwsDHQhhAesxettoItXdjV6T%2B79DVzVnMJUcfR0js85WY9jHnM9bJhbN0DS63B3FKAeNbKKsGD7v6IEjzqFrZhbtN8qPysEy53PVqOHvQsqZnNTnZDQt2EazMYcof7k7aTjTmBuen53NbGzyieUFZmju1aRZ6hYu%2B09qQRbkX5DyT5jMOOisMAGOqUBH%2BMnzs8sxuGZRc4MrP8b2wOjLPYVmzlSLL0mpPW1V1Lwc59MMwGGc0HS%2Be%2FbblCb8C7bQnXuqTRICW03tm%2BvxTyPUmIRuOgLMbX%2BHeRdfqaJelbHzwPwXDw21IUAtd2RM%2B4xw0AJ5P1%2FedZ1qTMUH2eyNa3wPbbT%2FwOvOk9pggdu4P7i54W%2FtYDea9JqOk4GZ1nSOctbpVwVvAWOOJQ2fb46xIqp&X-Amz-Signature=d1ea09aeeccc845fb6770dda5f09cf59cd7f87c5577f1a5c82c34ac6daeeb68d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466263ZCYPC%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtgeBP%2BxzS2YGF6%2Fe77g7ArjZ%2BMf0UuapxFZmdK%2BaBzAIgH29bCBmKXXG%2Bo8ftuM7Rz3QCpylJXdIPcFcOnVH9628q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDNHTThc%2FgjGVowtA%2BSrcA%2BYIeC6dHkoYRSu2jFEhkb1xTX43vFncWFCyuvREbzyxhUvhmG0tq0I1O6gdb%2BZk6s%2BFcsHEY71fe%2BoXAoh%2BMfL0EFVMeQ6VH5Dglwbaolh3QcQTAp%2FRmwWxqBQAuBnBkn1MockPCX4J6JSup1STynuuvLlCxPVEUSf3Uwx0AqspUocYpJx%2BFmZDrp8LRumz74cm%2BhbG9JyV1Bd2adWxsOSmPxv7k5NE6ZWRP5CRTkFQwrqld3U3xDslVUXq92diSWvyjig42DtK%2FMv3LukicXI8L5NIq9g8Pm2oIWXVHIPB%2F5%2FJXhx3a2hHQSRhAB56SlqEmd3PmjSLigaw7IgYX9mHQNxF1SfoRvLpw2EPbrGHXELva7Ztgjd9Yb7q65hdpHEpwiViOAdvtQoLTdfLKSbGUEno0sExhkl1W7WT21pJF9QYoU6D2%2FwLxPqmDQ87Wcp2DOZxyf0tlnwsDHQhhAesxettoItXdjV6T%2B79DVzVnMJUcfR0js85WY9jHnM9bJhbN0DS63B3FKAeNbKKsGD7v6IEjzqFrZhbtN8qPysEy53PVqOHvQsqZnNTnZDQt2EazMYcof7k7aTjTmBuen53NbGzyieUFZmju1aRZ6hYu%2B09qQRbkX5DyT5jMOOisMAGOqUBH%2BMnzs8sxuGZRc4MrP8b2wOjLPYVmzlSLL0mpPW1V1Lwc59MMwGGc0HS%2Be%2FbblCb8C7bQnXuqTRICW03tm%2BvxTyPUmIRuOgLMbX%2BHeRdfqaJelbHzwPwXDw21IUAtd2RM%2B4xw0AJ5P1%2FedZ1qTMUH2eyNa3wPbbT%2FwOvOk9pggdu4P7i54W%2FtYDea9JqOk4GZ1nSOctbpVwVvAWOOJQ2fb46xIqp&X-Amz-Signature=65c89fbde8eae69214647ee7c56bb93c3f03eb54ec1499375f7ff86aa797e3c1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466263ZCYPC%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtgeBP%2BxzS2YGF6%2Fe77g7ArjZ%2BMf0UuapxFZmdK%2BaBzAIgH29bCBmKXXG%2Bo8ftuM7Rz3QCpylJXdIPcFcOnVH9628q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDNHTThc%2FgjGVowtA%2BSrcA%2BYIeC6dHkoYRSu2jFEhkb1xTX43vFncWFCyuvREbzyxhUvhmG0tq0I1O6gdb%2BZk6s%2BFcsHEY71fe%2BoXAoh%2BMfL0EFVMeQ6VH5Dglwbaolh3QcQTAp%2FRmwWxqBQAuBnBkn1MockPCX4J6JSup1STynuuvLlCxPVEUSf3Uwx0AqspUocYpJx%2BFmZDrp8LRumz74cm%2BhbG9JyV1Bd2adWxsOSmPxv7k5NE6ZWRP5CRTkFQwrqld3U3xDslVUXq92diSWvyjig42DtK%2FMv3LukicXI8L5NIq9g8Pm2oIWXVHIPB%2F5%2FJXhx3a2hHQSRhAB56SlqEmd3PmjSLigaw7IgYX9mHQNxF1SfoRvLpw2EPbrGHXELva7Ztgjd9Yb7q65hdpHEpwiViOAdvtQoLTdfLKSbGUEno0sExhkl1W7WT21pJF9QYoU6D2%2FwLxPqmDQ87Wcp2DOZxyf0tlnwsDHQhhAesxettoItXdjV6T%2B79DVzVnMJUcfR0js85WY9jHnM9bJhbN0DS63B3FKAeNbKKsGD7v6IEjzqFrZhbtN8qPysEy53PVqOHvQsqZnNTnZDQt2EazMYcof7k7aTjTmBuen53NbGzyieUFZmju1aRZ6hYu%2B09qQRbkX5DyT5jMOOisMAGOqUBH%2BMnzs8sxuGZRc4MrP8b2wOjLPYVmzlSLL0mpPW1V1Lwc59MMwGGc0HS%2Be%2FbblCb8C7bQnXuqTRICW03tm%2BvxTyPUmIRuOgLMbX%2BHeRdfqaJelbHzwPwXDw21IUAtd2RM%2B4xw0AJ5P1%2FedZ1qTMUH2eyNa3wPbbT%2FwOvOk9pggdu4P7i54W%2FtYDea9JqOk4GZ1nSOctbpVwVvAWOOJQ2fb46xIqp&X-Amz-Signature=68ff26233eea98a041d2086eef5763464aa6bd8b21955317892ff6d5181e5740&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466263ZCYPC%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtgeBP%2BxzS2YGF6%2Fe77g7ArjZ%2BMf0UuapxFZmdK%2BaBzAIgH29bCBmKXXG%2Bo8ftuM7Rz3QCpylJXdIPcFcOnVH9628q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDNHTThc%2FgjGVowtA%2BSrcA%2BYIeC6dHkoYRSu2jFEhkb1xTX43vFncWFCyuvREbzyxhUvhmG0tq0I1O6gdb%2BZk6s%2BFcsHEY71fe%2BoXAoh%2BMfL0EFVMeQ6VH5Dglwbaolh3QcQTAp%2FRmwWxqBQAuBnBkn1MockPCX4J6JSup1STynuuvLlCxPVEUSf3Uwx0AqspUocYpJx%2BFmZDrp8LRumz74cm%2BhbG9JyV1Bd2adWxsOSmPxv7k5NE6ZWRP5CRTkFQwrqld3U3xDslVUXq92diSWvyjig42DtK%2FMv3LukicXI8L5NIq9g8Pm2oIWXVHIPB%2F5%2FJXhx3a2hHQSRhAB56SlqEmd3PmjSLigaw7IgYX9mHQNxF1SfoRvLpw2EPbrGHXELva7Ztgjd9Yb7q65hdpHEpwiViOAdvtQoLTdfLKSbGUEno0sExhkl1W7WT21pJF9QYoU6D2%2FwLxPqmDQ87Wcp2DOZxyf0tlnwsDHQhhAesxettoItXdjV6T%2B79DVzVnMJUcfR0js85WY9jHnM9bJhbN0DS63B3FKAeNbKKsGD7v6IEjzqFrZhbtN8qPysEy53PVqOHvQsqZnNTnZDQt2EazMYcof7k7aTjTmBuen53NbGzyieUFZmju1aRZ6hYu%2B09qQRbkX5DyT5jMOOisMAGOqUBH%2BMnzs8sxuGZRc4MrP8b2wOjLPYVmzlSLL0mpPW1V1Lwc59MMwGGc0HS%2Be%2FbblCb8C7bQnXuqTRICW03tm%2BvxTyPUmIRuOgLMbX%2BHeRdfqaJelbHzwPwXDw21IUAtd2RM%2B4xw0AJ5P1%2FedZ1qTMUH2eyNa3wPbbT%2FwOvOk9pggdu4P7i54W%2FtYDea9JqOk4GZ1nSOctbpVwVvAWOOJQ2fb46xIqp&X-Amz-Signature=8def6ff54fca5331daad73a8da424ace84e553a4bb9b029985ccf06c86b2551f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
