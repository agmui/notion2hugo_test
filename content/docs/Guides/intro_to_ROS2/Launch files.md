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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAPE7EG4%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T150929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQC7%2BAtTKWQq9x9YaeTfxjQ1V3V001rXXCo0O84U2qbPNgIhAMoaKry1DlFQS17YlS7zDIWi0jk3J6Jri0uJpI0%2BUhEtKv8DCC8QABoMNjM3NDIzMTgzODA1IgwzAUq9FSI2yli3ue8q3AMdFVF18kWxZXOXMr3esJ4kvtrIgLJGaDRtU1cof2yWY4bGEYItNu871blNwN9TcZXNLL0GFFkOoVDF%2FbW8lRb5ISB8CWstyyOOs1KOVHa9LyL%2BSn%2FyqEd2hBg5DooZ7FcwKhR20T0w3dmn47aqJtnqYF69kwvXMu6iAbrN3ICE2LjJ9GM7fQLjpiQPNtg2vF6n581vwZUL06%2FC4PH9AhAqV5Gdsd0rcanANa59buWBozUdVYLJSYeziaWcN1cTkQO2LE0hByj0zF71qjSsV%2FYwJnClbCP3N%2FX02AMpHcmRwLFka4FPcUfnAGERnDxwfWnJC5CGRy63ZjTdoF7AkkTW8lzUvTLN0c0EqGvWeVGFslmPga%2Fz%2BMy6atFRQFRxPIHthLvpA5viDeUDwPd%2BdVIl5s5hgeSISjiGUKiGcR%2BAvgCKGHcM%2BmzWcxEsjuOKqvvWY1%2F8PvvkrnasXLu7MoY6n%2FFMvzaTlnvMVpJysTYtuvNHSDbu0agqggd0fExSyJDKv1EBJ6LI%2BeykaUnKTBMz8f2LbG9S9TkrkGIm8uwnNRK58dXVg5APe4q1tBIZATmVRe98o%2BO3wgKAdY7tS9IBKJQrxcSwTpFE5Z4hRBa54nJMeQb7NttI6dNidzDr8JfBBjqkAZ6xWcFPkdCZwJV%2BxUI7UnqjG4uKR0NsfRu%2FcCjnzJdBB7X5efFXO7j3AUy9mXbjnrndtAtgJsmNjbCz0nF5Qn6GwQ37VXTTQMdqSGsPx1xSlkDFvx0HqmHmkd%2BRzMOjscAu%2FjN6I0xS9cdGoqwwVOPAVoctIyyvtxUzgJ58lGWp75UDA%2By6%2BHb8Y7f76%2BZwmcB3TBTKU5oynj%2FOa3wlVx%2FpWzcI&X-Amz-Signature=d65df1e18c2f2a8cdc98e7772c5da5239a6dab4b27816ea9d89fa6063b23d72a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAPE7EG4%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T150929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQC7%2BAtTKWQq9x9YaeTfxjQ1V3V001rXXCo0O84U2qbPNgIhAMoaKry1DlFQS17YlS7zDIWi0jk3J6Jri0uJpI0%2BUhEtKv8DCC8QABoMNjM3NDIzMTgzODA1IgwzAUq9FSI2yli3ue8q3AMdFVF18kWxZXOXMr3esJ4kvtrIgLJGaDRtU1cof2yWY4bGEYItNu871blNwN9TcZXNLL0GFFkOoVDF%2FbW8lRb5ISB8CWstyyOOs1KOVHa9LyL%2BSn%2FyqEd2hBg5DooZ7FcwKhR20T0w3dmn47aqJtnqYF69kwvXMu6iAbrN3ICE2LjJ9GM7fQLjpiQPNtg2vF6n581vwZUL06%2FC4PH9AhAqV5Gdsd0rcanANa59buWBozUdVYLJSYeziaWcN1cTkQO2LE0hByj0zF71qjSsV%2FYwJnClbCP3N%2FX02AMpHcmRwLFka4FPcUfnAGERnDxwfWnJC5CGRy63ZjTdoF7AkkTW8lzUvTLN0c0EqGvWeVGFslmPga%2Fz%2BMy6atFRQFRxPIHthLvpA5viDeUDwPd%2BdVIl5s5hgeSISjiGUKiGcR%2BAvgCKGHcM%2BmzWcxEsjuOKqvvWY1%2F8PvvkrnasXLu7MoY6n%2FFMvzaTlnvMVpJysTYtuvNHSDbu0agqggd0fExSyJDKv1EBJ6LI%2BeykaUnKTBMz8f2LbG9S9TkrkGIm8uwnNRK58dXVg5APe4q1tBIZATmVRe98o%2BO3wgKAdY7tS9IBKJQrxcSwTpFE5Z4hRBa54nJMeQb7NttI6dNidzDr8JfBBjqkAZ6xWcFPkdCZwJV%2BxUI7UnqjG4uKR0NsfRu%2FcCjnzJdBB7X5efFXO7j3AUy9mXbjnrndtAtgJsmNjbCz0nF5Qn6GwQ37VXTTQMdqSGsPx1xSlkDFvx0HqmHmkd%2BRzMOjscAu%2FjN6I0xS9cdGoqwwVOPAVoctIyyvtxUzgJ58lGWp75UDA%2By6%2BHb8Y7f76%2BZwmcB3TBTKU5oynj%2FOa3wlVx%2FpWzcI&X-Amz-Signature=0c67173f3260daf50cfa2fdf1ca95e71fd3d9c476d39e290590a51760bfea201&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAPE7EG4%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T150929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQC7%2BAtTKWQq9x9YaeTfxjQ1V3V001rXXCo0O84U2qbPNgIhAMoaKry1DlFQS17YlS7zDIWi0jk3J6Jri0uJpI0%2BUhEtKv8DCC8QABoMNjM3NDIzMTgzODA1IgwzAUq9FSI2yli3ue8q3AMdFVF18kWxZXOXMr3esJ4kvtrIgLJGaDRtU1cof2yWY4bGEYItNu871blNwN9TcZXNLL0GFFkOoVDF%2FbW8lRb5ISB8CWstyyOOs1KOVHa9LyL%2BSn%2FyqEd2hBg5DooZ7FcwKhR20T0w3dmn47aqJtnqYF69kwvXMu6iAbrN3ICE2LjJ9GM7fQLjpiQPNtg2vF6n581vwZUL06%2FC4PH9AhAqV5Gdsd0rcanANa59buWBozUdVYLJSYeziaWcN1cTkQO2LE0hByj0zF71qjSsV%2FYwJnClbCP3N%2FX02AMpHcmRwLFka4FPcUfnAGERnDxwfWnJC5CGRy63ZjTdoF7AkkTW8lzUvTLN0c0EqGvWeVGFslmPga%2Fz%2BMy6atFRQFRxPIHthLvpA5viDeUDwPd%2BdVIl5s5hgeSISjiGUKiGcR%2BAvgCKGHcM%2BmzWcxEsjuOKqvvWY1%2F8PvvkrnasXLu7MoY6n%2FFMvzaTlnvMVpJysTYtuvNHSDbu0agqggd0fExSyJDKv1EBJ6LI%2BeykaUnKTBMz8f2LbG9S9TkrkGIm8uwnNRK58dXVg5APe4q1tBIZATmVRe98o%2BO3wgKAdY7tS9IBKJQrxcSwTpFE5Z4hRBa54nJMeQb7NttI6dNidzDr8JfBBjqkAZ6xWcFPkdCZwJV%2BxUI7UnqjG4uKR0NsfRu%2FcCjnzJdBB7X5efFXO7j3AUy9mXbjnrndtAtgJsmNjbCz0nF5Qn6GwQ37VXTTQMdqSGsPx1xSlkDFvx0HqmHmkd%2BRzMOjscAu%2FjN6I0xS9cdGoqwwVOPAVoctIyyvtxUzgJ58lGWp75UDA%2By6%2BHb8Y7f76%2BZwmcB3TBTKU5oynj%2FOa3wlVx%2FpWzcI&X-Amz-Signature=94f8ae2ccf0b858f6e750d58cdb9855254816f33abc6534567ba81bd2049c1fe&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
