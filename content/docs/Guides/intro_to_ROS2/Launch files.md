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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MEL7D3F%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIH2Vn%2FFs7WHUd5cT%2FfLM9IUH475QQcuWeQaxpOYqyqywAiBgt2YxlseV51FkIJIieEjXnWhSGkBMUNAuJvYT7OeAcCr%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIMkFQh05zk%2BPQsrLrOKtwDECip%2BlCGS%2FjALX%2FHx8SvTiTkVRvOCXLHUA735%2Bi8pf4sR48hTtrkdriQvgbikCtVTPoW89MQBt4g37NI8tND4Rceu1IBp0sWqd3okrJ5%2FHXXzn4vWgnn0c0Ex0c0vBqXZ9J1THklXsc41kmwQTke%2FL1jP1Jag%2B1GfUtAf6GBbUutZez9JN67GXTc6SAwq0YKiOrdQZANnH0esOrz%2B3zF9DN080uTdZax1iw3ultSNTakooMSCPO2YPtr5AL7d4s4QqtjGEbbQ3WeMfsOG05%2BO7gwEJYYreMGIGIUtOxYahhIvZedgbClIgRrUrOoFS%2FKSWfZygy%2FArp7466cTDBAuDaURy%2B4fUlzFx8SWZiG4u3ZYkqQ3BbRS1eX97egn6TcmSw3xj83F0med%2Fs3z6E3gQr3HZmZiUMoxeT4rjvZhF8q24zpptjGZIdy41QL2j5Wlo4Ama66pW6ecSXuuGkQNLVG8xMGshSjuIRdEvO5dtACZVnxZe24JFCs0cuGHXJzmGIuGRAnTU8yhVXJCN3vgXtwMel199KtPwi5mlM%2BN2hRsWBBbLmNYAhv5Tsm2yAW8LMwaMHRIBl3hrr%2BSBU28kYG6hl8jiZUQA5yIouyQ5n%2FJVPXP5LzmKn%2FDJkw5oOF0AY6pgGUjzV%2FSwjSHG0oyGI8jigegQxJNSqk2qF6oo7NRSG6%2FetWCo9vmQyAaqkEEGC%2FKwh%2BGp8GJE8lxB%2BWdn7aqg0DI1t0VkRIraRutlB4YPvj2hc7W6dd0cNbmLpwgq20bQx6x8MDQ6drPROtsHAB3O8HThAVgOQgEyB5eqqyZeXLqPiGa53CLZRtY6185OwdPqbcH%2FULcFbiUVyZd%2FEhafRc62HKvWSx&X-Amz-Signature=a4d39e323aedc39c40b0bf8dad6b23e013888bae45b10276b152d9d869fd26d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MEL7D3F%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIH2Vn%2FFs7WHUd5cT%2FfLM9IUH475QQcuWeQaxpOYqyqywAiBgt2YxlseV51FkIJIieEjXnWhSGkBMUNAuJvYT7OeAcCr%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIMkFQh05zk%2BPQsrLrOKtwDECip%2BlCGS%2FjALX%2FHx8SvTiTkVRvOCXLHUA735%2Bi8pf4sR48hTtrkdriQvgbikCtVTPoW89MQBt4g37NI8tND4Rceu1IBp0sWqd3okrJ5%2FHXXzn4vWgnn0c0Ex0c0vBqXZ9J1THklXsc41kmwQTke%2FL1jP1Jag%2B1GfUtAf6GBbUutZez9JN67GXTc6SAwq0YKiOrdQZANnH0esOrz%2B3zF9DN080uTdZax1iw3ultSNTakooMSCPO2YPtr5AL7d4s4QqtjGEbbQ3WeMfsOG05%2BO7gwEJYYreMGIGIUtOxYahhIvZedgbClIgRrUrOoFS%2FKSWfZygy%2FArp7466cTDBAuDaURy%2B4fUlzFx8SWZiG4u3ZYkqQ3BbRS1eX97egn6TcmSw3xj83F0med%2Fs3z6E3gQr3HZmZiUMoxeT4rjvZhF8q24zpptjGZIdy41QL2j5Wlo4Ama66pW6ecSXuuGkQNLVG8xMGshSjuIRdEvO5dtACZVnxZe24JFCs0cuGHXJzmGIuGRAnTU8yhVXJCN3vgXtwMel199KtPwi5mlM%2BN2hRsWBBbLmNYAhv5Tsm2yAW8LMwaMHRIBl3hrr%2BSBU28kYG6hl8jiZUQA5yIouyQ5n%2FJVPXP5LzmKn%2FDJkw5oOF0AY6pgGUjzV%2FSwjSHG0oyGI8jigegQxJNSqk2qF6oo7NRSG6%2FetWCo9vmQyAaqkEEGC%2FKwh%2BGp8GJE8lxB%2BWdn7aqg0DI1t0VkRIraRutlB4YPvj2hc7W6dd0cNbmLpwgq20bQx6x8MDQ6drPROtsHAB3O8HThAVgOQgEyB5eqqyZeXLqPiGa53CLZRtY6185OwdPqbcH%2FULcFbiUVyZd%2FEhafRc62HKvWSx&X-Amz-Signature=a3f0c655db06e9d5a3af5948f4ab4322e91bab224bb74b3d8ddba67421f0e7d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MEL7D3F%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIH2Vn%2FFs7WHUd5cT%2FfLM9IUH475QQcuWeQaxpOYqyqywAiBgt2YxlseV51FkIJIieEjXnWhSGkBMUNAuJvYT7OeAcCr%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIMkFQh05zk%2BPQsrLrOKtwDECip%2BlCGS%2FjALX%2FHx8SvTiTkVRvOCXLHUA735%2Bi8pf4sR48hTtrkdriQvgbikCtVTPoW89MQBt4g37NI8tND4Rceu1IBp0sWqd3okrJ5%2FHXXzn4vWgnn0c0Ex0c0vBqXZ9J1THklXsc41kmwQTke%2FL1jP1Jag%2B1GfUtAf6GBbUutZez9JN67GXTc6SAwq0YKiOrdQZANnH0esOrz%2B3zF9DN080uTdZax1iw3ultSNTakooMSCPO2YPtr5AL7d4s4QqtjGEbbQ3WeMfsOG05%2BO7gwEJYYreMGIGIUtOxYahhIvZedgbClIgRrUrOoFS%2FKSWfZygy%2FArp7466cTDBAuDaURy%2B4fUlzFx8SWZiG4u3ZYkqQ3BbRS1eX97egn6TcmSw3xj83F0med%2Fs3z6E3gQr3HZmZiUMoxeT4rjvZhF8q24zpptjGZIdy41QL2j5Wlo4Ama66pW6ecSXuuGkQNLVG8xMGshSjuIRdEvO5dtACZVnxZe24JFCs0cuGHXJzmGIuGRAnTU8yhVXJCN3vgXtwMel199KtPwi5mlM%2BN2hRsWBBbLmNYAhv5Tsm2yAW8LMwaMHRIBl3hrr%2BSBU28kYG6hl8jiZUQA5yIouyQ5n%2FJVPXP5LzmKn%2FDJkw5oOF0AY6pgGUjzV%2FSwjSHG0oyGI8jigegQxJNSqk2qF6oo7NRSG6%2FetWCo9vmQyAaqkEEGC%2FKwh%2BGp8GJE8lxB%2BWdn7aqg0DI1t0VkRIraRutlB4YPvj2hc7W6dd0cNbmLpwgq20bQx6x8MDQ6drPROtsHAB3O8HThAVgOQgEyB5eqqyZeXLqPiGa53CLZRtY6185OwdPqbcH%2FULcFbiUVyZd%2FEhafRc62HKvWSx&X-Amz-Signature=afdf78d1f6ccc75564645b88e3fc49efd290978a0e98f9aea91714cf3038cb31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
