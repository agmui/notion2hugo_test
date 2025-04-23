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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEFG3N4N%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T032928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIBvhVv2vOqx61J6u%2BctCxOR%2Fm9Bfrw%2F85XGQM1tMfcBtAiAlHZRZ5YqyoZ%2BnC202CH3SP%2FR%2FR35FMn6%2FZHTJGvph2yqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2SpVuEcfERPNFlWaKtwDLa8qcskeoZtxMJMPm%2FmOOvry8R3jkithwSY2HJGdQo9FytfI%2BpAcifIoj1I7jI2pqZllje6IS4Sd8%2FtZP3ctALHvALnshyN3KpCnGhxqUrK07jynApoogk30yzmH100R12s8Yd%2FbgT7JkZeCUPqkLeCnSlKJ7rTo%2F%2Ffx%2FZxUKIp1jo09c4q%2BrTshwTFRlSEOHLw%2FgjIG7BaBw7pC4yUj7LsAcHJkYAgvHNvnXFkEOo8vmFfpDEM8pFB%2FA3WW5%2BcjqncNuW6gWahp50seP2zNBuYvQ6UjEQ%2FmHTT4Fh9AHBGVXQSyxrKlnMDLalozILhZRgnsMwSqq38prYQFB0Id5rf0%2FJOIfT5yucbZsq6NAsDV8flyE744PK9yVcehE5mabLCMmgbxLTwJUSyhQfb1%2BKEYIUl%2BjqXxgegMgzqIX2AVuWTkt2%2BgCOxsb%2BovIcc7bQs7lIywi9Fw%2B%2B%2BifXXwHVaKBQAbz%2F1vJIIlH%2FfZbmnJPAX2gVMPC2ZSkWTYkHmNxUx84UZmwQB10B2WsfU0lrixghVjNwFsUeefhmCMYIJK%2Fps1nvJTLMIMwJuLc%2FcfvxpcrUhJijIlvPbqjfGtZxvmN7NzFZ%2FRqoLBTTGEAqH9HcQoC9Ry%2BZjp3UwwjfOgwAY6pgERQpUMHB%2FPD6%2Fm29oRvgEp8x6Xxh16ijRHKrWEReP6LXV4oSf2nvzNOrG6MaLT%2BclcSwUlNNnMAVRt6GJbX6d%2FMaNq9jSj9VUzzORC5dUJl1FSOv8pZhU%2Bkv5KP8MWBaGPfGQHocONdzH4gfnqlSdTZ%2F7rfjrpwULNoCqBD8Dm%2BXfoeIj4D0AY41BJ8kmxR2f1w3i5fxCEGAtEoZFUSDkphagWq%2F9n&X-Amz-Signature=fc754a8ff1e0a09bbfdc4b3b9ce346f40e20c5608428a34ab4ae1db66f9063fb&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEFG3N4N%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T032928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIBvhVv2vOqx61J6u%2BctCxOR%2Fm9Bfrw%2F85XGQM1tMfcBtAiAlHZRZ5YqyoZ%2BnC202CH3SP%2FR%2FR35FMn6%2FZHTJGvph2yqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2SpVuEcfERPNFlWaKtwDLa8qcskeoZtxMJMPm%2FmOOvry8R3jkithwSY2HJGdQo9FytfI%2BpAcifIoj1I7jI2pqZllje6IS4Sd8%2FtZP3ctALHvALnshyN3KpCnGhxqUrK07jynApoogk30yzmH100R12s8Yd%2FbgT7JkZeCUPqkLeCnSlKJ7rTo%2F%2Ffx%2FZxUKIp1jo09c4q%2BrTshwTFRlSEOHLw%2FgjIG7BaBw7pC4yUj7LsAcHJkYAgvHNvnXFkEOo8vmFfpDEM8pFB%2FA3WW5%2BcjqncNuW6gWahp50seP2zNBuYvQ6UjEQ%2FmHTT4Fh9AHBGVXQSyxrKlnMDLalozILhZRgnsMwSqq38prYQFB0Id5rf0%2FJOIfT5yucbZsq6NAsDV8flyE744PK9yVcehE5mabLCMmgbxLTwJUSyhQfb1%2BKEYIUl%2BjqXxgegMgzqIX2AVuWTkt2%2BgCOxsb%2BovIcc7bQs7lIywi9Fw%2B%2B%2BifXXwHVaKBQAbz%2F1vJIIlH%2FfZbmnJPAX2gVMPC2ZSkWTYkHmNxUx84UZmwQB10B2WsfU0lrixghVjNwFsUeefhmCMYIJK%2Fps1nvJTLMIMwJuLc%2FcfvxpcrUhJijIlvPbqjfGtZxvmN7NzFZ%2FRqoLBTTGEAqH9HcQoC9Ry%2BZjp3UwwjfOgwAY6pgERQpUMHB%2FPD6%2Fm29oRvgEp8x6Xxh16ijRHKrWEReP6LXV4oSf2nvzNOrG6MaLT%2BclcSwUlNNnMAVRt6GJbX6d%2FMaNq9jSj9VUzzORC5dUJl1FSOv8pZhU%2Bkv5KP8MWBaGPfGQHocONdzH4gfnqlSdTZ%2F7rfjrpwULNoCqBD8Dm%2BXfoeIj4D0AY41BJ8kmxR2f1w3i5fxCEGAtEoZFUSDkphagWq%2F9n&X-Amz-Signature=32447a5a7844775fc2beab857a211a78b0170a118b1e9c7dd148d1f8c3f160e0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEFG3N4N%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T032928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIBvhVv2vOqx61J6u%2BctCxOR%2Fm9Bfrw%2F85XGQM1tMfcBtAiAlHZRZ5YqyoZ%2BnC202CH3SP%2FR%2FR35FMn6%2FZHTJGvph2yqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2SpVuEcfERPNFlWaKtwDLa8qcskeoZtxMJMPm%2FmOOvry8R3jkithwSY2HJGdQo9FytfI%2BpAcifIoj1I7jI2pqZllje6IS4Sd8%2FtZP3ctALHvALnshyN3KpCnGhxqUrK07jynApoogk30yzmH100R12s8Yd%2FbgT7JkZeCUPqkLeCnSlKJ7rTo%2F%2Ffx%2FZxUKIp1jo09c4q%2BrTshwTFRlSEOHLw%2FgjIG7BaBw7pC4yUj7LsAcHJkYAgvHNvnXFkEOo8vmFfpDEM8pFB%2FA3WW5%2BcjqncNuW6gWahp50seP2zNBuYvQ6UjEQ%2FmHTT4Fh9AHBGVXQSyxrKlnMDLalozILhZRgnsMwSqq38prYQFB0Id5rf0%2FJOIfT5yucbZsq6NAsDV8flyE744PK9yVcehE5mabLCMmgbxLTwJUSyhQfb1%2BKEYIUl%2BjqXxgegMgzqIX2AVuWTkt2%2BgCOxsb%2BovIcc7bQs7lIywi9Fw%2B%2B%2BifXXwHVaKBQAbz%2F1vJIIlH%2FfZbmnJPAX2gVMPC2ZSkWTYkHmNxUx84UZmwQB10B2WsfU0lrixghVjNwFsUeefhmCMYIJK%2Fps1nvJTLMIMwJuLc%2FcfvxpcrUhJijIlvPbqjfGtZxvmN7NzFZ%2FRqoLBTTGEAqH9HcQoC9Ry%2BZjp3UwwjfOgwAY6pgERQpUMHB%2FPD6%2Fm29oRvgEp8x6Xxh16ijRHKrWEReP6LXV4oSf2nvzNOrG6MaLT%2BclcSwUlNNnMAVRt6GJbX6d%2FMaNq9jSj9VUzzORC5dUJl1FSOv8pZhU%2Bkv5KP8MWBaGPfGQHocONdzH4gfnqlSdTZ%2F7rfjrpwULNoCqBD8Dm%2BXfoeIj4D0AY41BJ8kmxR2f1w3i5fxCEGAtEoZFUSDkphagWq%2F9n&X-Amz-Signature=e3f719b72cb48853de9222c00d874dac2d3a2a334579b49d28d327507998a8df&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
