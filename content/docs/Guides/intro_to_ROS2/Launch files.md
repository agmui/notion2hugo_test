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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYF3V2P6%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T041437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyB89ZI8oBwyBttzbdIKwU5EQuP7EHOzVfbzyrstsOMwIgZnOtamZine7gEllHNUqhexeDD2rc0%2BxejEkFMTuWn48qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL9nRQewu%2FkKukDT0ircA2ja%2BuDYHppubs2rbJn%2F0mwrTq8uFkSb3LUrQL2pwlTNpmjoY7HcRvDgBcjkZ9b1v8%2BC%2BGDsS3G9j8wx2lDRM9IEBXpKf681ogNJ9bHOgVLqVQs8U%2BLcP%2BQ0NNzsww39VticFwkUh%2BIQnn2s99OpnZH8GoA%2BlMpTS707N9eBUDQZ42Ty4bOZrj2F8kfpI4p6uqZakBWNsRBNXNsVg6daPz5Vr6W%2BceX%2FTuU54pohJFmWT1xoVxR3f6Icwlmv3ufMQhVKCI6JzHEW8KEEogxbpJ1CIro5O7Tv5NoeNTCOVFrHMuVfvj2tj3yRAl%2BNCWQ9KvkrLTWtP%2B0jKPHuMkV%2Bn754G%2FFlQERq9GaWEuzMgZ1aA1ayqyxKEGFTbYJ9VPYMQoAmx2ZFAWkq13e1kk%2F3g%2FAD8YWXeplAxw5CKIy2XYwNQ%2BBpioMmxDGsQ9%2FJh9mx8RfgspsJDABso8R6%2BbUWSWelJSiQMFjbjhAapMn9G4uy0GnBcsJ3Z0s1%2FP8cjvo%2FNXflAizWLbsiIL0wvWtNTdmrB9K%2FqSkQZAHgx6rjdVCB7ycfLW%2BgLNJ7QcIwtxh2YyZ1mws0SLbTEsBfBN6%2FnRT0vo2pNBSOJFcagz309nNAXJOdNYR4qxaPyIKWMLav38EGOqUBdfOXxMuPX4kQx5fzqIM%2Fr8NV85gMdIB1kOPSDvVuqBd1s6x4MrRyywxuKMFMuFyEk4bjlfZtkLGFqewtnBF4SClDEOagvKsKzHA3jBVkJe36arXeHuh1pES3pjPmKoE92pWxidSZ0V1Tfod02%2FRbx1p%2FefHR37OTS86IPpQ8r%2B%2FgGXVGhsvVdsyST0NTHnqUfsI8l61aIRMnXgvRbCb3eZx9676r&X-Amz-Signature=421b0e734765266a3bb0048159fa1e758d1f749b4aad0f2e7f5f1a9d88c5a542&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYF3V2P6%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T041437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyB89ZI8oBwyBttzbdIKwU5EQuP7EHOzVfbzyrstsOMwIgZnOtamZine7gEllHNUqhexeDD2rc0%2BxejEkFMTuWn48qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL9nRQewu%2FkKukDT0ircA2ja%2BuDYHppubs2rbJn%2F0mwrTq8uFkSb3LUrQL2pwlTNpmjoY7HcRvDgBcjkZ9b1v8%2BC%2BGDsS3G9j8wx2lDRM9IEBXpKf681ogNJ9bHOgVLqVQs8U%2BLcP%2BQ0NNzsww39VticFwkUh%2BIQnn2s99OpnZH8GoA%2BlMpTS707N9eBUDQZ42Ty4bOZrj2F8kfpI4p6uqZakBWNsRBNXNsVg6daPz5Vr6W%2BceX%2FTuU54pohJFmWT1xoVxR3f6Icwlmv3ufMQhVKCI6JzHEW8KEEogxbpJ1CIro5O7Tv5NoeNTCOVFrHMuVfvj2tj3yRAl%2BNCWQ9KvkrLTWtP%2B0jKPHuMkV%2Bn754G%2FFlQERq9GaWEuzMgZ1aA1ayqyxKEGFTbYJ9VPYMQoAmx2ZFAWkq13e1kk%2F3g%2FAD8YWXeplAxw5CKIy2XYwNQ%2BBpioMmxDGsQ9%2FJh9mx8RfgspsJDABso8R6%2BbUWSWelJSiQMFjbjhAapMn9G4uy0GnBcsJ3Z0s1%2FP8cjvo%2FNXflAizWLbsiIL0wvWtNTdmrB9K%2FqSkQZAHgx6rjdVCB7ycfLW%2BgLNJ7QcIwtxh2YyZ1mws0SLbTEsBfBN6%2FnRT0vo2pNBSOJFcagz309nNAXJOdNYR4qxaPyIKWMLav38EGOqUBdfOXxMuPX4kQx5fzqIM%2Fr8NV85gMdIB1kOPSDvVuqBd1s6x4MrRyywxuKMFMuFyEk4bjlfZtkLGFqewtnBF4SClDEOagvKsKzHA3jBVkJe36arXeHuh1pES3pjPmKoE92pWxidSZ0V1Tfod02%2FRbx1p%2FefHR37OTS86IPpQ8r%2B%2FgGXVGhsvVdsyST0NTHnqUfsI8l61aIRMnXgvRbCb3eZx9676r&X-Amz-Signature=10f748ccc03917fcb5a8b3f930bb898e76c965bedfb297b481a83a0abb704009&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYF3V2P6%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T041437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyB89ZI8oBwyBttzbdIKwU5EQuP7EHOzVfbzyrstsOMwIgZnOtamZine7gEllHNUqhexeDD2rc0%2BxejEkFMTuWn48qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL9nRQewu%2FkKukDT0ircA2ja%2BuDYHppubs2rbJn%2F0mwrTq8uFkSb3LUrQL2pwlTNpmjoY7HcRvDgBcjkZ9b1v8%2BC%2BGDsS3G9j8wx2lDRM9IEBXpKf681ogNJ9bHOgVLqVQs8U%2BLcP%2BQ0NNzsww39VticFwkUh%2BIQnn2s99OpnZH8GoA%2BlMpTS707N9eBUDQZ42Ty4bOZrj2F8kfpI4p6uqZakBWNsRBNXNsVg6daPz5Vr6W%2BceX%2FTuU54pohJFmWT1xoVxR3f6Icwlmv3ufMQhVKCI6JzHEW8KEEogxbpJ1CIro5O7Tv5NoeNTCOVFrHMuVfvj2tj3yRAl%2BNCWQ9KvkrLTWtP%2B0jKPHuMkV%2Bn754G%2FFlQERq9GaWEuzMgZ1aA1ayqyxKEGFTbYJ9VPYMQoAmx2ZFAWkq13e1kk%2F3g%2FAD8YWXeplAxw5CKIy2XYwNQ%2BBpioMmxDGsQ9%2FJh9mx8RfgspsJDABso8R6%2BbUWSWelJSiQMFjbjhAapMn9G4uy0GnBcsJ3Z0s1%2FP8cjvo%2FNXflAizWLbsiIL0wvWtNTdmrB9K%2FqSkQZAHgx6rjdVCB7ycfLW%2BgLNJ7QcIwtxh2YyZ1mws0SLbTEsBfBN6%2FnRT0vo2pNBSOJFcagz309nNAXJOdNYR4qxaPyIKWMLav38EGOqUBdfOXxMuPX4kQx5fzqIM%2Fr8NV85gMdIB1kOPSDvVuqBd1s6x4MrRyywxuKMFMuFyEk4bjlfZtkLGFqewtnBF4SClDEOagvKsKzHA3jBVkJe36arXeHuh1pES3pjPmKoE92pWxidSZ0V1Tfod02%2FRbx1p%2FefHR37OTS86IPpQ8r%2B%2FgGXVGhsvVdsyST0NTHnqUfsI8l61aIRMnXgvRbCb3eZx9676r&X-Amz-Signature=416eeb240c1bd36ed4b101acafbe1ebc7c0f5e492de09d9a94f6893313ee5910&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
