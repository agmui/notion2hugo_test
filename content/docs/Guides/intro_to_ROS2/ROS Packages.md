---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LW57WLX%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T201022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAkVCbHvYPfJ67fMPG1EyUzzr1a3WWx4nBnt5gNyGKTQIgJq6TjQXTp3zQAhpBCk1q4zSepyn03jm8W4gyB3oPCJEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDx72w4tnSaCMCD1SyrcA8jSaGQOvMn%2BeXVCl9hp3D2J1eRRZf9IQ4ZdUniYb0QCGhVnuqi9M1pXH3n7A8Uv8fqC2x7RGOa6lcgPEqQlMqsAKjbIvits9ZRdUUo40f12k8uRXjMljTHi1AKa1CoTx%2BJaNIgfjdl6NIzbdz%2F6bVUXg0wJxvOQi%2FjXeN2wVMypUPA1YjVRBVvafkUGFvTDSXQ7bpvIys9xvfTW5a3H0TN1L%2BvmTkirVMUxj4Vl2jA23me%2FtxK6OzyvItuJN54KNa1yR5jTZVDHC2aBRg8MOKadydjjpNEUXpg8ZRsAZGjL3KpY%2Ff2wDtMei%2FXOZwOfb7HklisximapaNEISdkAUJ3Zc8PC3O25d06c4ydZeJPptJCbRzzc1i5eiKFE5PBhIELQrz0KVuAI%2FCYBGnSe%2B1YrczabFsyZIdrt5b%2B2mh4wFB0Xzcv7yVlnilikbbL%2B4L9pjSthynYjUi43GvJ%2F3MFGXwwA1tUh8XvbUAeYRYqB9jH4VXOaRTuBR31NnRg4CsRJ7wq%2FdpUc9GYu4hwfv%2Bnxw1hKXmMUcfVojXWViJWuTMZBzOu7CaDv%2B45fmcLx6%2FzYyLKgwJmCpVz%2FSLDYTEzigL1FX%2BplRbkNsDLpBBag2vwOfyiYZ3UWvABKMJKjwMMGOqUBsKOPuquWtyeyPPPlcXq5uYSXbmswspw4lRpUl%2B1kAJ3tdsUHKGwERyueeis71oX0L%2BesTFbTzTYIbw7GnsLNf3P8WkcXmXnvs%2FI6VAOgRytQ9LvlrQMWV7AOQBlNjZXSAmgwsT5Cvjk3gFwKqEqfWi%2FcWstV7g5Li%2B4yVJP8d6e7utu6PEy9bYSxmb1HTea0dTqJUmc%2B1THZAHow3ullrU5ZEu%2BT&X-Amz-Signature=91654a73f4601f4de054c129c00362b57a71927d50d22dd6527712d4ca79f119&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LW57WLX%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T201022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAkVCbHvYPfJ67fMPG1EyUzzr1a3WWx4nBnt5gNyGKTQIgJq6TjQXTp3zQAhpBCk1q4zSepyn03jm8W4gyB3oPCJEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDx72w4tnSaCMCD1SyrcA8jSaGQOvMn%2BeXVCl9hp3D2J1eRRZf9IQ4ZdUniYb0QCGhVnuqi9M1pXH3n7A8Uv8fqC2x7RGOa6lcgPEqQlMqsAKjbIvits9ZRdUUo40f12k8uRXjMljTHi1AKa1CoTx%2BJaNIgfjdl6NIzbdz%2F6bVUXg0wJxvOQi%2FjXeN2wVMypUPA1YjVRBVvafkUGFvTDSXQ7bpvIys9xvfTW5a3H0TN1L%2BvmTkirVMUxj4Vl2jA23me%2FtxK6OzyvItuJN54KNa1yR5jTZVDHC2aBRg8MOKadydjjpNEUXpg8ZRsAZGjL3KpY%2Ff2wDtMei%2FXOZwOfb7HklisximapaNEISdkAUJ3Zc8PC3O25d06c4ydZeJPptJCbRzzc1i5eiKFE5PBhIELQrz0KVuAI%2FCYBGnSe%2B1YrczabFsyZIdrt5b%2B2mh4wFB0Xzcv7yVlnilikbbL%2B4L9pjSthynYjUi43GvJ%2F3MFGXwwA1tUh8XvbUAeYRYqB9jH4VXOaRTuBR31NnRg4CsRJ7wq%2FdpUc9GYu4hwfv%2Bnxw1hKXmMUcfVojXWViJWuTMZBzOu7CaDv%2B45fmcLx6%2FzYyLKgwJmCpVz%2FSLDYTEzigL1FX%2BplRbkNsDLpBBag2vwOfyiYZ3UWvABKMJKjwMMGOqUBsKOPuquWtyeyPPPlcXq5uYSXbmswspw4lRpUl%2B1kAJ3tdsUHKGwERyueeis71oX0L%2BesTFbTzTYIbw7GnsLNf3P8WkcXmXnvs%2FI6VAOgRytQ9LvlrQMWV7AOQBlNjZXSAmgwsT5Cvjk3gFwKqEqfWi%2FcWstV7g5Li%2B4yVJP8d6e7utu6PEy9bYSxmb1HTea0dTqJUmc%2B1THZAHow3ullrU5ZEu%2BT&X-Amz-Signature=b45db2a8b1587044a262defb1315d808499be0ea0f67087fc558d0c429cd4b57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LW57WLX%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T201023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAkVCbHvYPfJ67fMPG1EyUzzr1a3WWx4nBnt5gNyGKTQIgJq6TjQXTp3zQAhpBCk1q4zSepyn03jm8W4gyB3oPCJEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDx72w4tnSaCMCD1SyrcA8jSaGQOvMn%2BeXVCl9hp3D2J1eRRZf9IQ4ZdUniYb0QCGhVnuqi9M1pXH3n7A8Uv8fqC2x7RGOa6lcgPEqQlMqsAKjbIvits9ZRdUUo40f12k8uRXjMljTHi1AKa1CoTx%2BJaNIgfjdl6NIzbdz%2F6bVUXg0wJxvOQi%2FjXeN2wVMypUPA1YjVRBVvafkUGFvTDSXQ7bpvIys9xvfTW5a3H0TN1L%2BvmTkirVMUxj4Vl2jA23me%2FtxK6OzyvItuJN54KNa1yR5jTZVDHC2aBRg8MOKadydjjpNEUXpg8ZRsAZGjL3KpY%2Ff2wDtMei%2FXOZwOfb7HklisximapaNEISdkAUJ3Zc8PC3O25d06c4ydZeJPptJCbRzzc1i5eiKFE5PBhIELQrz0KVuAI%2FCYBGnSe%2B1YrczabFsyZIdrt5b%2B2mh4wFB0Xzcv7yVlnilikbbL%2B4L9pjSthynYjUi43GvJ%2F3MFGXwwA1tUh8XvbUAeYRYqB9jH4VXOaRTuBR31NnRg4CsRJ7wq%2FdpUc9GYu4hwfv%2Bnxw1hKXmMUcfVojXWViJWuTMZBzOu7CaDv%2B45fmcLx6%2FzYyLKgwJmCpVz%2FSLDYTEzigL1FX%2BplRbkNsDLpBBag2vwOfyiYZ3UWvABKMJKjwMMGOqUBsKOPuquWtyeyPPPlcXq5uYSXbmswspw4lRpUl%2B1kAJ3tdsUHKGwERyueeis71oX0L%2BesTFbTzTYIbw7GnsLNf3P8WkcXmXnvs%2FI6VAOgRytQ9LvlrQMWV7AOQBlNjZXSAmgwsT5Cvjk3gFwKqEqfWi%2FcWstV7g5Li%2B4yVJP8d6e7utu6PEy9bYSxmb1HTea0dTqJUmc%2B1THZAHow3ullrU5ZEu%2BT&X-Amz-Signature=b914cf882ea5739df85dfc398cb74ecab799efa9f7ac617d001ae36569b7cbaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LW57WLX%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T201023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAkVCbHvYPfJ67fMPG1EyUzzr1a3WWx4nBnt5gNyGKTQIgJq6TjQXTp3zQAhpBCk1q4zSepyn03jm8W4gyB3oPCJEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDx72w4tnSaCMCD1SyrcA8jSaGQOvMn%2BeXVCl9hp3D2J1eRRZf9IQ4ZdUniYb0QCGhVnuqi9M1pXH3n7A8Uv8fqC2x7RGOa6lcgPEqQlMqsAKjbIvits9ZRdUUo40f12k8uRXjMljTHi1AKa1CoTx%2BJaNIgfjdl6NIzbdz%2F6bVUXg0wJxvOQi%2FjXeN2wVMypUPA1YjVRBVvafkUGFvTDSXQ7bpvIys9xvfTW5a3H0TN1L%2BvmTkirVMUxj4Vl2jA23me%2FtxK6OzyvItuJN54KNa1yR5jTZVDHC2aBRg8MOKadydjjpNEUXpg8ZRsAZGjL3KpY%2Ff2wDtMei%2FXOZwOfb7HklisximapaNEISdkAUJ3Zc8PC3O25d06c4ydZeJPptJCbRzzc1i5eiKFE5PBhIELQrz0KVuAI%2FCYBGnSe%2B1YrczabFsyZIdrt5b%2B2mh4wFB0Xzcv7yVlnilikbbL%2B4L9pjSthynYjUi43GvJ%2F3MFGXwwA1tUh8XvbUAeYRYqB9jH4VXOaRTuBR31NnRg4CsRJ7wq%2FdpUc9GYu4hwfv%2Bnxw1hKXmMUcfVojXWViJWuTMZBzOu7CaDv%2B45fmcLx6%2FzYyLKgwJmCpVz%2FSLDYTEzigL1FX%2BplRbkNsDLpBBag2vwOfyiYZ3UWvABKMJKjwMMGOqUBsKOPuquWtyeyPPPlcXq5uYSXbmswspw4lRpUl%2B1kAJ3tdsUHKGwERyueeis71oX0L%2BesTFbTzTYIbw7GnsLNf3P8WkcXmXnvs%2FI6VAOgRytQ9LvlrQMWV7AOQBlNjZXSAmgwsT5Cvjk3gFwKqEqfWi%2FcWstV7g5Li%2B4yVJP8d6e7utu6PEy9bYSxmb1HTea0dTqJUmc%2B1THZAHow3ullrU5ZEu%2BT&X-Amz-Signature=d0f3e95fc5e0643f157a9ce8b30123a7314b8e60c093db9c07a111e2991f55c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LW57WLX%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T201023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAkVCbHvYPfJ67fMPG1EyUzzr1a3WWx4nBnt5gNyGKTQIgJq6TjQXTp3zQAhpBCk1q4zSepyn03jm8W4gyB3oPCJEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDx72w4tnSaCMCD1SyrcA8jSaGQOvMn%2BeXVCl9hp3D2J1eRRZf9IQ4ZdUniYb0QCGhVnuqi9M1pXH3n7A8Uv8fqC2x7RGOa6lcgPEqQlMqsAKjbIvits9ZRdUUo40f12k8uRXjMljTHi1AKa1CoTx%2BJaNIgfjdl6NIzbdz%2F6bVUXg0wJxvOQi%2FjXeN2wVMypUPA1YjVRBVvafkUGFvTDSXQ7bpvIys9xvfTW5a3H0TN1L%2BvmTkirVMUxj4Vl2jA23me%2FtxK6OzyvItuJN54KNa1yR5jTZVDHC2aBRg8MOKadydjjpNEUXpg8ZRsAZGjL3KpY%2Ff2wDtMei%2FXOZwOfb7HklisximapaNEISdkAUJ3Zc8PC3O25d06c4ydZeJPptJCbRzzc1i5eiKFE5PBhIELQrz0KVuAI%2FCYBGnSe%2B1YrczabFsyZIdrt5b%2B2mh4wFB0Xzcv7yVlnilikbbL%2B4L9pjSthynYjUi43GvJ%2F3MFGXwwA1tUh8XvbUAeYRYqB9jH4VXOaRTuBR31NnRg4CsRJ7wq%2FdpUc9GYu4hwfv%2Bnxw1hKXmMUcfVojXWViJWuTMZBzOu7CaDv%2B45fmcLx6%2FzYyLKgwJmCpVz%2FSLDYTEzigL1FX%2BplRbkNsDLpBBag2vwOfyiYZ3UWvABKMJKjwMMGOqUBsKOPuquWtyeyPPPlcXq5uYSXbmswspw4lRpUl%2B1kAJ3tdsUHKGwERyueeis71oX0L%2BesTFbTzTYIbw7GnsLNf3P8WkcXmXnvs%2FI6VAOgRytQ9LvlrQMWV7AOQBlNjZXSAmgwsT5Cvjk3gFwKqEqfWi%2FcWstV7g5Li%2B4yVJP8d6e7utu6PEy9bYSxmb1HTea0dTqJUmc%2B1THZAHow3ullrU5ZEu%2BT&X-Amz-Signature=f8fe816695e61460fa2b3f7b2dbe21b07b685a9718f935db42efd36a9ede84a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LW57WLX%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T201023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAkVCbHvYPfJ67fMPG1EyUzzr1a3WWx4nBnt5gNyGKTQIgJq6TjQXTp3zQAhpBCk1q4zSepyn03jm8W4gyB3oPCJEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDx72w4tnSaCMCD1SyrcA8jSaGQOvMn%2BeXVCl9hp3D2J1eRRZf9IQ4ZdUniYb0QCGhVnuqi9M1pXH3n7A8Uv8fqC2x7RGOa6lcgPEqQlMqsAKjbIvits9ZRdUUo40f12k8uRXjMljTHi1AKa1CoTx%2BJaNIgfjdl6NIzbdz%2F6bVUXg0wJxvOQi%2FjXeN2wVMypUPA1YjVRBVvafkUGFvTDSXQ7bpvIys9xvfTW5a3H0TN1L%2BvmTkirVMUxj4Vl2jA23me%2FtxK6OzyvItuJN54KNa1yR5jTZVDHC2aBRg8MOKadydjjpNEUXpg8ZRsAZGjL3KpY%2Ff2wDtMei%2FXOZwOfb7HklisximapaNEISdkAUJ3Zc8PC3O25d06c4ydZeJPptJCbRzzc1i5eiKFE5PBhIELQrz0KVuAI%2FCYBGnSe%2B1YrczabFsyZIdrt5b%2B2mh4wFB0Xzcv7yVlnilikbbL%2B4L9pjSthynYjUi43GvJ%2F3MFGXwwA1tUh8XvbUAeYRYqB9jH4VXOaRTuBR31NnRg4CsRJ7wq%2FdpUc9GYu4hwfv%2Bnxw1hKXmMUcfVojXWViJWuTMZBzOu7CaDv%2B45fmcLx6%2FzYyLKgwJmCpVz%2FSLDYTEzigL1FX%2BplRbkNsDLpBBag2vwOfyiYZ3UWvABKMJKjwMMGOqUBsKOPuquWtyeyPPPlcXq5uYSXbmswspw4lRpUl%2B1kAJ3tdsUHKGwERyueeis71oX0L%2BesTFbTzTYIbw7GnsLNf3P8WkcXmXnvs%2FI6VAOgRytQ9LvlrQMWV7AOQBlNjZXSAmgwsT5Cvjk3gFwKqEqfWi%2FcWstV7g5Li%2B4yVJP8d6e7utu6PEy9bYSxmb1HTea0dTqJUmc%2B1THZAHow3ullrU5ZEu%2BT&X-Amz-Signature=79921302ca22e51dca2666cc3be73218198f011e49266fbaa6fb16a09ebfbff7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LW57WLX%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T201023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAkVCbHvYPfJ67fMPG1EyUzzr1a3WWx4nBnt5gNyGKTQIgJq6TjQXTp3zQAhpBCk1q4zSepyn03jm8W4gyB3oPCJEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDx72w4tnSaCMCD1SyrcA8jSaGQOvMn%2BeXVCl9hp3D2J1eRRZf9IQ4ZdUniYb0QCGhVnuqi9M1pXH3n7A8Uv8fqC2x7RGOa6lcgPEqQlMqsAKjbIvits9ZRdUUo40f12k8uRXjMljTHi1AKa1CoTx%2BJaNIgfjdl6NIzbdz%2F6bVUXg0wJxvOQi%2FjXeN2wVMypUPA1YjVRBVvafkUGFvTDSXQ7bpvIys9xvfTW5a3H0TN1L%2BvmTkirVMUxj4Vl2jA23me%2FtxK6OzyvItuJN54KNa1yR5jTZVDHC2aBRg8MOKadydjjpNEUXpg8ZRsAZGjL3KpY%2Ff2wDtMei%2FXOZwOfb7HklisximapaNEISdkAUJ3Zc8PC3O25d06c4ydZeJPptJCbRzzc1i5eiKFE5PBhIELQrz0KVuAI%2FCYBGnSe%2B1YrczabFsyZIdrt5b%2B2mh4wFB0Xzcv7yVlnilikbbL%2B4L9pjSthynYjUi43GvJ%2F3MFGXwwA1tUh8XvbUAeYRYqB9jH4VXOaRTuBR31NnRg4CsRJ7wq%2FdpUc9GYu4hwfv%2Bnxw1hKXmMUcfVojXWViJWuTMZBzOu7CaDv%2B45fmcLx6%2FzYyLKgwJmCpVz%2FSLDYTEzigL1FX%2BplRbkNsDLpBBag2vwOfyiYZ3UWvABKMJKjwMMGOqUBsKOPuquWtyeyPPPlcXq5uYSXbmswspw4lRpUl%2B1kAJ3tdsUHKGwERyueeis71oX0L%2BesTFbTzTYIbw7GnsLNf3P8WkcXmXnvs%2FI6VAOgRytQ9LvlrQMWV7AOQBlNjZXSAmgwsT5Cvjk3gFwKqEqfWi%2FcWstV7g5Li%2B4yVJP8d6e7utu6PEy9bYSxmb1HTea0dTqJUmc%2B1THZAHow3ullrU5ZEu%2BT&X-Amz-Signature=fd2b229f471d06d259dae7f45bcf292e766da7af2015b8bb96b87d8f5105f879&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
