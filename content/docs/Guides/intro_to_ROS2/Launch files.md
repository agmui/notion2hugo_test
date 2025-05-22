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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5CKQT3B%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T004129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDUGPc4i915NtFg0QeoBQjNJHnN59eX%2Bgo7rXPANpws8QIhAOog%2BZjiqTbQeG%2BfAhwtL1fg9QR3HGR%2FlGq8ouPGEUzwKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuDdjRDnEMrrd7wIsq3AN5jwTpmb1gGd5sElA0wvisnRqKZYFrPHPUug4QAaTxGuZztbwPjKVBwcTsne1Q47xkm2uJk9%2Fr%2FekwDjZAZaVaF9JrO1HRmBHlDy68YD2pYZiWNPrQ091iSrS57LePym9qwDEtJWFeXsOLLfxlRN1stUtSf%2B%2FaVCbQgjwlVzDpbCrBqQmQYvbCVMIHfEb%2FeaqWp8fTCKW%2BT747lRxCEcX3oSb96hACGf8axTb2wrghZ6HfDN80ex8QEnZEzOqyrJ2Bxa65IcdG%2BjF%2FVENxRZgDQKEV6lnnuT00cCHXS4G3ICgM1WM6uH8KFshUklpkLiQgO5E9z1aAZ9QhlzYKrAz5%2BdlrYzvgMJk6jcKKvvpVkmhTpzH3ZynnBfTVE33WlylsIE%2B87QHMD5n1jWrRusHY%2FLPsZgvVV7kW4FjN3UYGP4gOAgvzJG9mm%2F%2BrjG44AwuLTP2B6r2i%2Fo02QurVyfqOKJJzbpbGgIhITju9OleX%2FrLCH1C0nZySPW4QLeYuTz%2FXAh%2BNuIsk4tccdcZuhJJBElR1ove2caHjFQ4h5VKeMgrLYdOeJsDacCSxPDYO0u3nQmHsbgKM%2B1fDoBQncjDU1Pk6AoWVId3%2F8cSMrukFnMoNvGAmxxQS2vG6ZzDUu7nBBjqkAfA9lALe%2FK17fQqlu8dLwKS8VHLm6kpQySyF86Mp9oRXhIL3sMaC2cRDRnTdck2%2BAXrTx%2BqXroMLWkhRotMA6Q1zS4wSTAcCulF2fis0c6ZpxPg4XEqL7bnY0AEvr0UoDAa6h%2BMNc4CUO5pTohM4%2B%2FgVopEh1ZyNkFwxJHVRsau0v2va%2B50S1qjVwIKWDH%2Fa4bVIU7X07UCsPWVCcdtwvvKcdz4F&X-Amz-Signature=3bc2c6b99b4f6163d29339f93c21e4b99581086ed1303d184c9b531eda54f0f3&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5CKQT3B%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T004129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDUGPc4i915NtFg0QeoBQjNJHnN59eX%2Bgo7rXPANpws8QIhAOog%2BZjiqTbQeG%2BfAhwtL1fg9QR3HGR%2FlGq8ouPGEUzwKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuDdjRDnEMrrd7wIsq3AN5jwTpmb1gGd5sElA0wvisnRqKZYFrPHPUug4QAaTxGuZztbwPjKVBwcTsne1Q47xkm2uJk9%2Fr%2FekwDjZAZaVaF9JrO1HRmBHlDy68YD2pYZiWNPrQ091iSrS57LePym9qwDEtJWFeXsOLLfxlRN1stUtSf%2B%2FaVCbQgjwlVzDpbCrBqQmQYvbCVMIHfEb%2FeaqWp8fTCKW%2BT747lRxCEcX3oSb96hACGf8axTb2wrghZ6HfDN80ex8QEnZEzOqyrJ2Bxa65IcdG%2BjF%2FVENxRZgDQKEV6lnnuT00cCHXS4G3ICgM1WM6uH8KFshUklpkLiQgO5E9z1aAZ9QhlzYKrAz5%2BdlrYzvgMJk6jcKKvvpVkmhTpzH3ZynnBfTVE33WlylsIE%2B87QHMD5n1jWrRusHY%2FLPsZgvVV7kW4FjN3UYGP4gOAgvzJG9mm%2F%2BrjG44AwuLTP2B6r2i%2Fo02QurVyfqOKJJzbpbGgIhITju9OleX%2FrLCH1C0nZySPW4QLeYuTz%2FXAh%2BNuIsk4tccdcZuhJJBElR1ove2caHjFQ4h5VKeMgrLYdOeJsDacCSxPDYO0u3nQmHsbgKM%2B1fDoBQncjDU1Pk6AoWVId3%2F8cSMrukFnMoNvGAmxxQS2vG6ZzDUu7nBBjqkAfA9lALe%2FK17fQqlu8dLwKS8VHLm6kpQySyF86Mp9oRXhIL3sMaC2cRDRnTdck2%2BAXrTx%2BqXroMLWkhRotMA6Q1zS4wSTAcCulF2fis0c6ZpxPg4XEqL7bnY0AEvr0UoDAa6h%2BMNc4CUO5pTohM4%2B%2FgVopEh1ZyNkFwxJHVRsau0v2va%2B50S1qjVwIKWDH%2Fa4bVIU7X07UCsPWVCcdtwvvKcdz4F&X-Amz-Signature=86bb2661426977782895effb6958d31fd7a17f450f66cd96e758c96c0529b37d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5CKQT3B%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T004129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDUGPc4i915NtFg0QeoBQjNJHnN59eX%2Bgo7rXPANpws8QIhAOog%2BZjiqTbQeG%2BfAhwtL1fg9QR3HGR%2FlGq8ouPGEUzwKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuDdjRDnEMrrd7wIsq3AN5jwTpmb1gGd5sElA0wvisnRqKZYFrPHPUug4QAaTxGuZztbwPjKVBwcTsne1Q47xkm2uJk9%2Fr%2FekwDjZAZaVaF9JrO1HRmBHlDy68YD2pYZiWNPrQ091iSrS57LePym9qwDEtJWFeXsOLLfxlRN1stUtSf%2B%2FaVCbQgjwlVzDpbCrBqQmQYvbCVMIHfEb%2FeaqWp8fTCKW%2BT747lRxCEcX3oSb96hACGf8axTb2wrghZ6HfDN80ex8QEnZEzOqyrJ2Bxa65IcdG%2BjF%2FVENxRZgDQKEV6lnnuT00cCHXS4G3ICgM1WM6uH8KFshUklpkLiQgO5E9z1aAZ9QhlzYKrAz5%2BdlrYzvgMJk6jcKKvvpVkmhTpzH3ZynnBfTVE33WlylsIE%2B87QHMD5n1jWrRusHY%2FLPsZgvVV7kW4FjN3UYGP4gOAgvzJG9mm%2F%2BrjG44AwuLTP2B6r2i%2Fo02QurVyfqOKJJzbpbGgIhITju9OleX%2FrLCH1C0nZySPW4QLeYuTz%2FXAh%2BNuIsk4tccdcZuhJJBElR1ove2caHjFQ4h5VKeMgrLYdOeJsDacCSxPDYO0u3nQmHsbgKM%2B1fDoBQncjDU1Pk6AoWVId3%2F8cSMrukFnMoNvGAmxxQS2vG6ZzDUu7nBBjqkAfA9lALe%2FK17fQqlu8dLwKS8VHLm6kpQySyF86Mp9oRXhIL3sMaC2cRDRnTdck2%2BAXrTx%2BqXroMLWkhRotMA6Q1zS4wSTAcCulF2fis0c6ZpxPg4XEqL7bnY0AEvr0UoDAa6h%2BMNc4CUO5pTohM4%2B%2FgVopEh1ZyNkFwxJHVRsau0v2va%2B50S1qjVwIKWDH%2Fa4bVIU7X07UCsPWVCcdtwvvKcdz4F&X-Amz-Signature=da861615c435a6889fc6cefbf5f386182fbb161be8bf8ab20b889bbb84ad1e93&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
