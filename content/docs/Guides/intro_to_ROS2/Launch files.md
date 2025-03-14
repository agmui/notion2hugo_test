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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFJ4OTEA%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEzjFMv%2FMP6N8Kk3FiAmgdqda1azmzYx9KcHJs5x4xzgIhANMWGjEYiXv2yw6O1xwCWHxL7u21uhWIbA5Mko%2B4uMRLKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwL%2FSWVB3dWvJLrEW8q3AOwASOMbBI9hAjufRgfx2OsrXVIJoYBBJNtd9uqqQ673pqUpCob8oPGxfpbOpPNPcY4iZbBSAwkxBSRtO91MfybUNFVhwxejOL9Rgjc%2FMZhOlYVmQ6%2FDCW7W9Bjk%2Fz%2BIU%2FyEG2A0K2yztMlf5X%2BMTIdeH2b1Eygs6uhd0loWvfZP%2B3A86T5CvZa3QKUZELKMJnZmA5%2FDZybP5rnLb7F4oxV%2By7c0m6N49FkU2j9dmiIJeLSlsipnB3Ay%2F%2F%2Bp66Yh%2BEoyq4gH6NPjaygaK%2Fe%2Fb9L5dwfQE0lrDwfYtCZ75xdjQaKQJUCS2BX3mZxAD3i98EQcUsSBEuBmTnaoBhDkRXx4%2Fp8JDP8G3S%2Bwx6ytemEeannEAfn88KXct7WUAcDFlhXICJ%2BR43i77KJhGZwtzCiCMbbv3pahSzq1zMalnq5PcNgbZnSUd9WaRC1KDC3EC%2FBeLpSsH4%2BiIhYD6gns1k5iZgb%2B1kmGbSlK7NIxDKmMcmHafnfub0DXT7nHj7YBv9nIkXXmWPvsC0GBqKg1xPDKMis99ATGPvPRpdCqSuSUQYXTEyLRXbMpjinGBj8T4SG9B9jV%2FJLt2qj5iPTnbtQwiFc7MgHqw0jG4WxpV9lel9BgWqkhVjb%2BjvJgTDS6M%2B%2BBjqkAb0FXdvQkrOEynf%2F5XmcTr8BaTHQ4e8AlgOT2ETcv4aMOIgwpZ9plLHbQgVaTRzMCYk3rts5Pu6u5yoP4NKt7SO9mtP5Z%2F5AicftbSr8wFpeBpYBy5s1rNM%2FoZwbNbVGdbkQ%2FuEIw0WAZhpR9vnh9Su%2FdOHNTg1RnXmfgEVYcs%2FDkRAW56MwWi0HZR9YqX0OzimQQy3JAyNV9p6SJMdfxMxDPHfv&X-Amz-Signature=a59a8a332428d4b71602c8e050d1a651c8453b5a5411f9d4fca432d8cd47aa85&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFJ4OTEA%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEzjFMv%2FMP6N8Kk3FiAmgdqda1azmzYx9KcHJs5x4xzgIhANMWGjEYiXv2yw6O1xwCWHxL7u21uhWIbA5Mko%2B4uMRLKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwL%2FSWVB3dWvJLrEW8q3AOwASOMbBI9hAjufRgfx2OsrXVIJoYBBJNtd9uqqQ673pqUpCob8oPGxfpbOpPNPcY4iZbBSAwkxBSRtO91MfybUNFVhwxejOL9Rgjc%2FMZhOlYVmQ6%2FDCW7W9Bjk%2Fz%2BIU%2FyEG2A0K2yztMlf5X%2BMTIdeH2b1Eygs6uhd0loWvfZP%2B3A86T5CvZa3QKUZELKMJnZmA5%2FDZybP5rnLb7F4oxV%2By7c0m6N49FkU2j9dmiIJeLSlsipnB3Ay%2F%2F%2Bp66Yh%2BEoyq4gH6NPjaygaK%2Fe%2Fb9L5dwfQE0lrDwfYtCZ75xdjQaKQJUCS2BX3mZxAD3i98EQcUsSBEuBmTnaoBhDkRXx4%2Fp8JDP8G3S%2Bwx6ytemEeannEAfn88KXct7WUAcDFlhXICJ%2BR43i77KJhGZwtzCiCMbbv3pahSzq1zMalnq5PcNgbZnSUd9WaRC1KDC3EC%2FBeLpSsH4%2BiIhYD6gns1k5iZgb%2B1kmGbSlK7NIxDKmMcmHafnfub0DXT7nHj7YBv9nIkXXmWPvsC0GBqKg1xPDKMis99ATGPvPRpdCqSuSUQYXTEyLRXbMpjinGBj8T4SG9B9jV%2FJLt2qj5iPTnbtQwiFc7MgHqw0jG4WxpV9lel9BgWqkhVjb%2BjvJgTDS6M%2B%2BBjqkAb0FXdvQkrOEynf%2F5XmcTr8BaTHQ4e8AlgOT2ETcv4aMOIgwpZ9plLHbQgVaTRzMCYk3rts5Pu6u5yoP4NKt7SO9mtP5Z%2F5AicftbSr8wFpeBpYBy5s1rNM%2FoZwbNbVGdbkQ%2FuEIw0WAZhpR9vnh9Su%2FdOHNTg1RnXmfgEVYcs%2FDkRAW56MwWi0HZR9YqX0OzimQQy3JAyNV9p6SJMdfxMxDPHfv&X-Amz-Signature=185e26a103391fd29b1ba2cbb85e6b257f5a5d013bf46213237fc6363f45e81c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFJ4OTEA%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEzjFMv%2FMP6N8Kk3FiAmgdqda1azmzYx9KcHJs5x4xzgIhANMWGjEYiXv2yw6O1xwCWHxL7u21uhWIbA5Mko%2B4uMRLKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwL%2FSWVB3dWvJLrEW8q3AOwASOMbBI9hAjufRgfx2OsrXVIJoYBBJNtd9uqqQ673pqUpCob8oPGxfpbOpPNPcY4iZbBSAwkxBSRtO91MfybUNFVhwxejOL9Rgjc%2FMZhOlYVmQ6%2FDCW7W9Bjk%2Fz%2BIU%2FyEG2A0K2yztMlf5X%2BMTIdeH2b1Eygs6uhd0loWvfZP%2B3A86T5CvZa3QKUZELKMJnZmA5%2FDZybP5rnLb7F4oxV%2By7c0m6N49FkU2j9dmiIJeLSlsipnB3Ay%2F%2F%2Bp66Yh%2BEoyq4gH6NPjaygaK%2Fe%2Fb9L5dwfQE0lrDwfYtCZ75xdjQaKQJUCS2BX3mZxAD3i98EQcUsSBEuBmTnaoBhDkRXx4%2Fp8JDP8G3S%2Bwx6ytemEeannEAfn88KXct7WUAcDFlhXICJ%2BR43i77KJhGZwtzCiCMbbv3pahSzq1zMalnq5PcNgbZnSUd9WaRC1KDC3EC%2FBeLpSsH4%2BiIhYD6gns1k5iZgb%2B1kmGbSlK7NIxDKmMcmHafnfub0DXT7nHj7YBv9nIkXXmWPvsC0GBqKg1xPDKMis99ATGPvPRpdCqSuSUQYXTEyLRXbMpjinGBj8T4SG9B9jV%2FJLt2qj5iPTnbtQwiFc7MgHqw0jG4WxpV9lel9BgWqkhVjb%2BjvJgTDS6M%2B%2BBjqkAb0FXdvQkrOEynf%2F5XmcTr8BaTHQ4e8AlgOT2ETcv4aMOIgwpZ9plLHbQgVaTRzMCYk3rts5Pu6u5yoP4NKt7SO9mtP5Z%2F5AicftbSr8wFpeBpYBy5s1rNM%2FoZwbNbVGdbkQ%2FuEIw0WAZhpR9vnh9Su%2FdOHNTg1RnXmfgEVYcs%2FDkRAW56MwWi0HZR9YqX0OzimQQy3JAyNV9p6SJMdfxMxDPHfv&X-Amz-Signature=4e96642a9e2061a0c25ecf52e9a787797023f947f8fcb4e1d8e4de286386a455&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
