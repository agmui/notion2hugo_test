---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2024-09-22T21:34:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2024-09-22T21:34:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manual which may get tiring.

This is where `ROS` launch files come in.

`ROS` launch files are files where multiple nodes can be launched from all stored in one place.

First, create a folder called `launch` in the root folder of the package and inside launch create a file called `python_params_launch.py` 

inside we first import the `ROS` libraries

```docker
from launch import LaunchDescription
from launch.actions import DeclareLaunchArgument
from launch.substitutions import LaunchConfiguration
from launch_ros.actions import Node
```

Then we create a function called `generate_launch_description()`

in this function, we first define which nodes we want to run. In our case we want to replicate the command `ros2 run my_package param_test` and setting the parameter of that node to earth

```python
def generate_launch_description():
	  node = Node(
        package='my_package',
        executable='param_test',
        parameters=[
            {'my_parameter': 'earth'}
        ]
    )
```

 Then, we have to return a `LaunchDescription` object which takes a list of `ROS` nodes we want to run.

```python
def generate_launch_description():
    return LaunchDescription([
			node
    ])
```

**NOTE:** how this is basically the same as `ros2 run my_package param_test`

## Solution

```python
from launch import LaunchDescription
from launch.actions import DeclareLaunchArgument
from launch.substitutions import LaunchConfiguration
from launch_ros.actions import Node

def generate_launch_description():
    node = Node(
        package='my_package',
        executable='param_test',
        parameters=[
            {'my_parameter': 'earth'}
        ]
    )
    return LaunchDescription(
        [node]
        )
```

# Registering the launch file to the workspace

To register the launch file we have to go into `setup.py` and add in 3 different lines shown below:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOIBEJFZ%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T160719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDD%2Bk8pLuOTymg0xHp4VuTNSxZrjiU8Eznqzt0%2FWRiCuAIgPVkllWMuPYFVhFpUmfqX3fVeIL4GGFnWeXv80fpbH78qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIvoQI%2Fo1VSd0SsDqSrcA4cyWq0oLUrgAcF6Jun0IXEkBX1Ut9aY9yYUebHUvNAs1tgixLLMCXFNKJ0Dj86BF%2B7Yuxh7684iP5e0iEw40P21Pg8zYMVQ9Xc6eOFa6RXK1J7yXsrCL8cCcR70MEwfIBEhhgfFjkz20TCvZ7VKYa1hCImhsAarC%2FtCZ5Ym7X3l2EX3tRR9%2Bi7updWFOiKXfzZO0cqIMf2yoYm5SBtOu3%2FD4U1Ny5aXL0adPyZJFYATdBLYBt7MDEUsdjJy6SgPLURI2hsDE5GOF6TODBk6QeYR%2Fs0pUjOd2%2BKToANGHBD%2BFFq1a6azoqWyYimgygi7cvJMWuQmKft2U1HaX1IxrIRz8Gj%2BcPHF0QL%2F6lsSFgGSAA725%2Bzroqnr3W1UaC8Cmg9rYtosTitu3qMpl7i7oNRbnOzmLflb%2B3nL2oedFS8GeBQmWhx6jFV6lw5%2FwwNbmzx%2BbkeyxD%2FQLJbcXjEvTCzZUAbe5VGPHSeGCjkaFM6MdpQcsVDVowo1c9AkLC6Ziv9zu3Yj2KDwUZaWzOJnsH0hMHGhpE444Tx2uLKWkz%2BEdDYRh9LJAGCqPScuDab%2BK2Lym7w8YEsCCoISjUxr1sgwehCT9w%2B40BS2%2FRwqOeDMdPDBnyoVWmc%2BhNFFMKqHo70GOqUBgJZElx9WougU7R%2FXmPMDE%2FMTAzxewoWouyKzWWOeb6xu5aoSYy2Z%2Fx4MhlW8moM6UwIFcqLJCDTytszEVsDMebtMHGHy1AvIR39cfvpw90e01SDSn6m7dU%2BL%2BRb264pzuIjMsmPfjoc2lbW%2B5v9cw2FCyVdSc3%2Fm7uuJoh%2Fn3r2eraYDPiyqFscOU8zrGiTwIs6LBIm5%2Fu5hEnoRNZ4ncvbN9uBL&X-Amz-Signature=f6a3e06110fca91d519ccb2132835e71ec4119c156327e2ca6bcaae331f4c8aa&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOIBEJFZ%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T160719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDD%2Bk8pLuOTymg0xHp4VuTNSxZrjiU8Eznqzt0%2FWRiCuAIgPVkllWMuPYFVhFpUmfqX3fVeIL4GGFnWeXv80fpbH78qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIvoQI%2Fo1VSd0SsDqSrcA4cyWq0oLUrgAcF6Jun0IXEkBX1Ut9aY9yYUebHUvNAs1tgixLLMCXFNKJ0Dj86BF%2B7Yuxh7684iP5e0iEw40P21Pg8zYMVQ9Xc6eOFa6RXK1J7yXsrCL8cCcR70MEwfIBEhhgfFjkz20TCvZ7VKYa1hCImhsAarC%2FtCZ5Ym7X3l2EX3tRR9%2Bi7updWFOiKXfzZO0cqIMf2yoYm5SBtOu3%2FD4U1Ny5aXL0adPyZJFYATdBLYBt7MDEUsdjJy6SgPLURI2hsDE5GOF6TODBk6QeYR%2Fs0pUjOd2%2BKToANGHBD%2BFFq1a6azoqWyYimgygi7cvJMWuQmKft2U1HaX1IxrIRz8Gj%2BcPHF0QL%2F6lsSFgGSAA725%2Bzroqnr3W1UaC8Cmg9rYtosTitu3qMpl7i7oNRbnOzmLflb%2B3nL2oedFS8GeBQmWhx6jFV6lw5%2FwwNbmzx%2BbkeyxD%2FQLJbcXjEvTCzZUAbe5VGPHSeGCjkaFM6MdpQcsVDVowo1c9AkLC6Ziv9zu3Yj2KDwUZaWzOJnsH0hMHGhpE444Tx2uLKWkz%2BEdDYRh9LJAGCqPScuDab%2BK2Lym7w8YEsCCoISjUxr1sgwehCT9w%2B40BS2%2FRwqOeDMdPDBnyoVWmc%2BhNFFMKqHo70GOqUBgJZElx9WougU7R%2FXmPMDE%2FMTAzxewoWouyKzWWOeb6xu5aoSYy2Z%2Fx4MhlW8moM6UwIFcqLJCDTytszEVsDMebtMHGHy1AvIR39cfvpw90e01SDSn6m7dU%2BL%2BRb264pzuIjMsmPfjoc2lbW%2B5v9cw2FCyVdSc3%2Fm7uuJoh%2Fn3r2eraYDPiyqFscOU8zrGiTwIs6LBIm5%2Fu5hEnoRNZ4ncvbN9uBL&X-Amz-Signature=a8ff7eba654da972aaa84303c85eaf82f810e31d2205412073bd0c5212d153b7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Launch arguments

We can also specify arguments to go into launch files for convenience

For example, we don’t want to reopen the launch file to change what `param_test` prints out every time.

First, at the top of `generate_launch_description()` we would declare a `LaunchConfiguration` and `DeclareLaunchArgument` object. 

`LaunchConfiguration` takes the parameter's name and `DeclareLaunchArgument` takes the name of the same parameter and its default value.

```python
 def generate_launch_description():
    some_arg = LaunchConfiguration('some_arg')
    launch_arg = DeclareLaunchArgument( 'some_arg', default_value='test') 
```

we then can pass the `LaunchConfiguration` object into the Node object and put the `DeclarationLaunchArgument` object into the return array.

```python
def generate_launch_description():
    some_arg = LaunchConfiguration('some_arg')
    launch_arg = DeclareLaunchArgument( 'some_arg', default_value='test')

    node = Node(
        package='my_package',
        executable='param_test',
        parameters=[
            # {'my_parameter': 'earth'}
            {'my_parameter': some_arg}
        ]
    )
    return LaunchDescription(
        [launch_arg, node]
        )
```

now we can simply change the parameter in `python_params_launch.py` by running 

```bash
ros2 launch my_package python_params_launch.py some_arg:=hi
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOIBEJFZ%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T160719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDD%2Bk8pLuOTymg0xHp4VuTNSxZrjiU8Eznqzt0%2FWRiCuAIgPVkllWMuPYFVhFpUmfqX3fVeIL4GGFnWeXv80fpbH78qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIvoQI%2Fo1VSd0SsDqSrcA4cyWq0oLUrgAcF6Jun0IXEkBX1Ut9aY9yYUebHUvNAs1tgixLLMCXFNKJ0Dj86BF%2B7Yuxh7684iP5e0iEw40P21Pg8zYMVQ9Xc6eOFa6RXK1J7yXsrCL8cCcR70MEwfIBEhhgfFjkz20TCvZ7VKYa1hCImhsAarC%2FtCZ5Ym7X3l2EX3tRR9%2Bi7updWFOiKXfzZO0cqIMf2yoYm5SBtOu3%2FD4U1Ny5aXL0adPyZJFYATdBLYBt7MDEUsdjJy6SgPLURI2hsDE5GOF6TODBk6QeYR%2Fs0pUjOd2%2BKToANGHBD%2BFFq1a6azoqWyYimgygi7cvJMWuQmKft2U1HaX1IxrIRz8Gj%2BcPHF0QL%2F6lsSFgGSAA725%2Bzroqnr3W1UaC8Cmg9rYtosTitu3qMpl7i7oNRbnOzmLflb%2B3nL2oedFS8GeBQmWhx6jFV6lw5%2FwwNbmzx%2BbkeyxD%2FQLJbcXjEvTCzZUAbe5VGPHSeGCjkaFM6MdpQcsVDVowo1c9AkLC6Ziv9zu3Yj2KDwUZaWzOJnsH0hMHGhpE444Tx2uLKWkz%2BEdDYRh9LJAGCqPScuDab%2BK2Lym7w8YEsCCoISjUxr1sgwehCT9w%2B40BS2%2FRwqOeDMdPDBnyoVWmc%2BhNFFMKqHo70GOqUBgJZElx9WougU7R%2FXmPMDE%2FMTAzxewoWouyKzWWOeb6xu5aoSYy2Z%2Fx4MhlW8moM6UwIFcqLJCDTytszEVsDMebtMHGHy1AvIR39cfvpw90e01SDSn6m7dU%2BL%2BRb264pzuIjMsmPfjoc2lbW%2B5v9cw2FCyVdSc3%2Fm7uuJoh%2Fn3r2eraYDPiyqFscOU8zrGiTwIs6LBIm5%2Fu5hEnoRNZ4ncvbN9uBL&X-Amz-Signature=f792279d6d0efde58501fe5b710c4c10bd4bfbb66bfb6b480b7bf4dd840cb0de&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
