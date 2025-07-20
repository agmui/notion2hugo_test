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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFKXSLR6%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICsUOf9VSw0wvbwGG8iZYhAOYBv2Yc9G1R2AfVZKiC0yAiEAr%2BN1oaKQZYHontKDMpXGi3M5OfZkf4fm6HoWB1fs3jcqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPWPV3lDTfVHGbX%2BBSrcAxi6CkcEFjLRPcoP1LaGlacGhiuL6ODdLwQD%2FMYjfWNJx661N5PZRglSRB3%2FgXqxadzhjY20fdjNvWREWJ85d9DnTBcI3%2BYZJ8wiAP4AKAKr8o9n%2FTbJzSFeaLcguJbuZJv5GK83xpT1gFSKhYKqsw4dCONWxbzoClgbFNKPCyMpRRiylYv98ylKT8%2FpOoxCujtb0WXBpzmT77T9qGq1z3xPXv5KRGCoWxJ4o1RgEcwwHI%2BcJ2hCv837Gtac10GwPtCmqLirTtoEbcKv9dAdoFWjt5FThcatbHyUxokFyys%2BEtHtJVpHAKIoE8o%2BhZYt%2FtQjkMkveUYw57gbbe2JFvetumOO3E3Jad7rlJhc%2BqRr4pMd747uSdgTiiFH34ALug667OsT7nPicuf3ELz1kLky8PkNeofY0tduhIIWLlwbEql0DnBrzAo9qHTqBQH9ylceeO08dhETcBD1WqRBG8Emhe%2BH0y9DcYmr8JDNM9tYNN7ZYO2yNVjvwOINuzUgy3KDiLLc8Iig4oGQxG03ysnAgt9YlUy6DFytYnYp9pcZCZ9f3ffymd7hJ6zCHob5QMfZw9W27iFOLgqYO1xpk82KfFfkS5nXbgPT%2BgKojsqmLNdnVpxozC1dXMceMPnt9MMGOqUBT%2FgPG4bSCZJW6AmKEaaG6d3QXr8FMdj%2BlzoO0ERPemMnhDkOhYGiuSytn3XQzfmnzi0SZPA7Bkvl6aq1sX1S5nA7mVlwsZMOC%2FiIuIAxTo5dTyfN8iRE3A8YoZJwnWTqX7w0ett0Qdp9Qrarn3r46Pi17curAnkOQ8BvABO5J0bRemckH8MU0dPryM9OaeKt3rF%2BpsOOr%2BXQAIj%2B1hGLPkJO5OmZ&X-Amz-Signature=b8b382b832f8d5ecfed2e6e8becc2ef94183f30a6b26e1968d231afe3f9554f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFKXSLR6%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICsUOf9VSw0wvbwGG8iZYhAOYBv2Yc9G1R2AfVZKiC0yAiEAr%2BN1oaKQZYHontKDMpXGi3M5OfZkf4fm6HoWB1fs3jcqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPWPV3lDTfVHGbX%2BBSrcAxi6CkcEFjLRPcoP1LaGlacGhiuL6ODdLwQD%2FMYjfWNJx661N5PZRglSRB3%2FgXqxadzhjY20fdjNvWREWJ85d9DnTBcI3%2BYZJ8wiAP4AKAKr8o9n%2FTbJzSFeaLcguJbuZJv5GK83xpT1gFSKhYKqsw4dCONWxbzoClgbFNKPCyMpRRiylYv98ylKT8%2FpOoxCujtb0WXBpzmT77T9qGq1z3xPXv5KRGCoWxJ4o1RgEcwwHI%2BcJ2hCv837Gtac10GwPtCmqLirTtoEbcKv9dAdoFWjt5FThcatbHyUxokFyys%2BEtHtJVpHAKIoE8o%2BhZYt%2FtQjkMkveUYw57gbbe2JFvetumOO3E3Jad7rlJhc%2BqRr4pMd747uSdgTiiFH34ALug667OsT7nPicuf3ELz1kLky8PkNeofY0tduhIIWLlwbEql0DnBrzAo9qHTqBQH9ylceeO08dhETcBD1WqRBG8Emhe%2BH0y9DcYmr8JDNM9tYNN7ZYO2yNVjvwOINuzUgy3KDiLLc8Iig4oGQxG03ysnAgt9YlUy6DFytYnYp9pcZCZ9f3ffymd7hJ6zCHob5QMfZw9W27iFOLgqYO1xpk82KfFfkS5nXbgPT%2BgKojsqmLNdnVpxozC1dXMceMPnt9MMGOqUBT%2FgPG4bSCZJW6AmKEaaG6d3QXr8FMdj%2BlzoO0ERPemMnhDkOhYGiuSytn3XQzfmnzi0SZPA7Bkvl6aq1sX1S5nA7mVlwsZMOC%2FiIuIAxTo5dTyfN8iRE3A8YoZJwnWTqX7w0ett0Qdp9Qrarn3r46Pi17curAnkOQ8BvABO5J0bRemckH8MU0dPryM9OaeKt3rF%2BpsOOr%2BXQAIj%2B1hGLPkJO5OmZ&X-Amz-Signature=d2d35d13cfa3e1ce9c4d5dfa49a35b73163d88af6d2b3b69de47666bd2bc6f44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFKXSLR6%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICsUOf9VSw0wvbwGG8iZYhAOYBv2Yc9G1R2AfVZKiC0yAiEAr%2BN1oaKQZYHontKDMpXGi3M5OfZkf4fm6HoWB1fs3jcqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPWPV3lDTfVHGbX%2BBSrcAxi6CkcEFjLRPcoP1LaGlacGhiuL6ODdLwQD%2FMYjfWNJx661N5PZRglSRB3%2FgXqxadzhjY20fdjNvWREWJ85d9DnTBcI3%2BYZJ8wiAP4AKAKr8o9n%2FTbJzSFeaLcguJbuZJv5GK83xpT1gFSKhYKqsw4dCONWxbzoClgbFNKPCyMpRRiylYv98ylKT8%2FpOoxCujtb0WXBpzmT77T9qGq1z3xPXv5KRGCoWxJ4o1RgEcwwHI%2BcJ2hCv837Gtac10GwPtCmqLirTtoEbcKv9dAdoFWjt5FThcatbHyUxokFyys%2BEtHtJVpHAKIoE8o%2BhZYt%2FtQjkMkveUYw57gbbe2JFvetumOO3E3Jad7rlJhc%2BqRr4pMd747uSdgTiiFH34ALug667OsT7nPicuf3ELz1kLky8PkNeofY0tduhIIWLlwbEql0DnBrzAo9qHTqBQH9ylceeO08dhETcBD1WqRBG8Emhe%2BH0y9DcYmr8JDNM9tYNN7ZYO2yNVjvwOINuzUgy3KDiLLc8Iig4oGQxG03ysnAgt9YlUy6DFytYnYp9pcZCZ9f3ffymd7hJ6zCHob5QMfZw9W27iFOLgqYO1xpk82KfFfkS5nXbgPT%2BgKojsqmLNdnVpxozC1dXMceMPnt9MMGOqUBT%2FgPG4bSCZJW6AmKEaaG6d3QXr8FMdj%2BlzoO0ERPemMnhDkOhYGiuSytn3XQzfmnzi0SZPA7Bkvl6aq1sX1S5nA7mVlwsZMOC%2FiIuIAxTo5dTyfN8iRE3A8YoZJwnWTqX7w0ett0Qdp9Qrarn3r46Pi17curAnkOQ8BvABO5J0bRemckH8MU0dPryM9OaeKt3rF%2BpsOOr%2BXQAIj%2B1hGLPkJO5OmZ&X-Amz-Signature=69ae4e2a838c353d1103b1bc7136a94948daa23dd751fc8ccdd6c00c9d5cd758&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
