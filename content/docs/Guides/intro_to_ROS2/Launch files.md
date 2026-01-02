---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JKFPIK2%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIEzbEKuVGkKKhmgCSEp%2BJzW%2B004ajS%2F4jUcO0HbMt359AiEAoX6mYM9TZl6DLZU7%2BmeVbo%2BGjnzEGps2Ji%2B5PW46I6kqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMEdQZAJXa45VYCyLircAzETDV0BlVdNDEZLrS7uJ8lay71SdACuIj3sfM6c9ORPFQwBiTQjAE21FUq9dtrNimCpyLi8zHIHigeFFcvsrN6Gp6nVm28joxW7TEd0Hmr9lF%2Fk%2FMBc3jfupKc9u4n5EcJ9nTA36V3R8gpQGLK2eqxxxe2tf4EwJcv%2FlUTCT8fhO5Khe6EP2C9DKBjtMN2Ol%2FPwsaTAfkM3Xmtgt2PUfuGytwWo%2BJlclMUsqhn2Ql%2BoeQTkbyl8qeFoGPCAdp5PHMomYGXAf2YYRwYwgqtZYaP5%2Bat6jC1qXQTVe9Vk7FdhXGr3cemHnxhYLvjuNmQJvH3IY84U9bCTsziDtD7D9Lq%2BW%2FNOVoGqMnDw4DS%2FfLmoMOls%2FDoRjkUgB%2Byfk5l6gJ6H0ipfF8jaBn0pa4LsnIvjYjXBmq%2FwuL6L9PxXq7j0xbpIVJLzl9qB8g05GsLBXNg5j0ymTWgO8M1PRsFKsvA4seEL1wjz%2BMzAMG%2BzzzKxFxKCfa8jVAAMpPJALg%2BMhTn5dOSiPqrRMzf2XdhkbeHAoRPCty7fz7%2FapNZM1qtX8tknNz0jZ44b1TVd08X05Ij1FbU1FfjDdqBV%2Fxsc0ElDNc7XeL37IPrl%2FTsp1rceZTbUQngnEgBeXiIAMMy%2B3MoGOqUBPChCcQnQQMvy081x%2F55T%2BF9snRZ1O59sb3C5l0ZQy2Ul5JTmgWD7Uapn5V9T8BFTjx4sCDzSSCPXS2yIPXlmEt5DPUsaYdUqrlMNdoSaeJGdCvgZgaoRJb1Vd8XpCJer4QB8WAScLQekEqfd%2Bon8uTUIUXS6UgiolZ2hS%2FZ8JmO4q0zCNGSj0n23WRNypt4rw2JvUYp2AMB8FYkaMUrn659eBTGU&X-Amz-Signature=15aefc9fa72b3beb1887ebe21b39a61bd8acffc7c4ba7ca2f83d9ca25ddde0ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JKFPIK2%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIEzbEKuVGkKKhmgCSEp%2BJzW%2B004ajS%2F4jUcO0HbMt359AiEAoX6mYM9TZl6DLZU7%2BmeVbo%2BGjnzEGps2Ji%2B5PW46I6kqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMEdQZAJXa45VYCyLircAzETDV0BlVdNDEZLrS7uJ8lay71SdACuIj3sfM6c9ORPFQwBiTQjAE21FUq9dtrNimCpyLi8zHIHigeFFcvsrN6Gp6nVm28joxW7TEd0Hmr9lF%2Fk%2FMBc3jfupKc9u4n5EcJ9nTA36V3R8gpQGLK2eqxxxe2tf4EwJcv%2FlUTCT8fhO5Khe6EP2C9DKBjtMN2Ol%2FPwsaTAfkM3Xmtgt2PUfuGytwWo%2BJlclMUsqhn2Ql%2BoeQTkbyl8qeFoGPCAdp5PHMomYGXAf2YYRwYwgqtZYaP5%2Bat6jC1qXQTVe9Vk7FdhXGr3cemHnxhYLvjuNmQJvH3IY84U9bCTsziDtD7D9Lq%2BW%2FNOVoGqMnDw4DS%2FfLmoMOls%2FDoRjkUgB%2Byfk5l6gJ6H0ipfF8jaBn0pa4LsnIvjYjXBmq%2FwuL6L9PxXq7j0xbpIVJLzl9qB8g05GsLBXNg5j0ymTWgO8M1PRsFKsvA4seEL1wjz%2BMzAMG%2BzzzKxFxKCfa8jVAAMpPJALg%2BMhTn5dOSiPqrRMzf2XdhkbeHAoRPCty7fz7%2FapNZM1qtX8tknNz0jZ44b1TVd08X05Ij1FbU1FfjDdqBV%2Fxsc0ElDNc7XeL37IPrl%2FTsp1rceZTbUQngnEgBeXiIAMMy%2B3MoGOqUBPChCcQnQQMvy081x%2F55T%2BF9snRZ1O59sb3C5l0ZQy2Ul5JTmgWD7Uapn5V9T8BFTjx4sCDzSSCPXS2yIPXlmEt5DPUsaYdUqrlMNdoSaeJGdCvgZgaoRJb1Vd8XpCJer4QB8WAScLQekEqfd%2Bon8uTUIUXS6UgiolZ2hS%2FZ8JmO4q0zCNGSj0n23WRNypt4rw2JvUYp2AMB8FYkaMUrn659eBTGU&X-Amz-Signature=d5b8938577c21fcf126f5f76d8cc00de9bf894ac440b82b27ba713117d4fd853&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JKFPIK2%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIEzbEKuVGkKKhmgCSEp%2BJzW%2B004ajS%2F4jUcO0HbMt359AiEAoX6mYM9TZl6DLZU7%2BmeVbo%2BGjnzEGps2Ji%2B5PW46I6kqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMEdQZAJXa45VYCyLircAzETDV0BlVdNDEZLrS7uJ8lay71SdACuIj3sfM6c9ORPFQwBiTQjAE21FUq9dtrNimCpyLi8zHIHigeFFcvsrN6Gp6nVm28joxW7TEd0Hmr9lF%2Fk%2FMBc3jfupKc9u4n5EcJ9nTA36V3R8gpQGLK2eqxxxe2tf4EwJcv%2FlUTCT8fhO5Khe6EP2C9DKBjtMN2Ol%2FPwsaTAfkM3Xmtgt2PUfuGytwWo%2BJlclMUsqhn2Ql%2BoeQTkbyl8qeFoGPCAdp5PHMomYGXAf2YYRwYwgqtZYaP5%2Bat6jC1qXQTVe9Vk7FdhXGr3cemHnxhYLvjuNmQJvH3IY84U9bCTsziDtD7D9Lq%2BW%2FNOVoGqMnDw4DS%2FfLmoMOls%2FDoRjkUgB%2Byfk5l6gJ6H0ipfF8jaBn0pa4LsnIvjYjXBmq%2FwuL6L9PxXq7j0xbpIVJLzl9qB8g05GsLBXNg5j0ymTWgO8M1PRsFKsvA4seEL1wjz%2BMzAMG%2BzzzKxFxKCfa8jVAAMpPJALg%2BMhTn5dOSiPqrRMzf2XdhkbeHAoRPCty7fz7%2FapNZM1qtX8tknNz0jZ44b1TVd08X05Ij1FbU1FfjDdqBV%2Fxsc0ElDNc7XeL37IPrl%2FTsp1rceZTbUQngnEgBeXiIAMMy%2B3MoGOqUBPChCcQnQQMvy081x%2F55T%2BF9snRZ1O59sb3C5l0ZQy2Ul5JTmgWD7Uapn5V9T8BFTjx4sCDzSSCPXS2yIPXlmEt5DPUsaYdUqrlMNdoSaeJGdCvgZgaoRJb1Vd8XpCJer4QB8WAScLQekEqfd%2Bon8uTUIUXS6UgiolZ2hS%2FZ8JmO4q0zCNGSj0n23WRNypt4rw2JvUYp2AMB8FYkaMUrn659eBTGU&X-Amz-Signature=1d9c920b2bf42e9d69f48d9a51070972d8f1389ad174ec0b4b859d2c928e43a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
