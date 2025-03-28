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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBOVVDHL%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8ew14E7s3W%2BzdSsYtIjL%2FoLfnEJfSlJfkrIKUY2eMCAiAToVJ%2BTUqfxUmuWKI0qjupXBrkwj1MgOzn9Ff4he%2Fmdir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMm21RCiLzy7N1kYpcKtwDzj6WECvVlybX0KQBV7HkvVpO8ag5ToBxVK%2F2ac0xKNXgmtOCwm4E5NX8Yb8R9ooIbHGmPCxBypnQ1TxyxK62C%2FtRJ0eIns8XLUt5dJdZxyQk%2F3AT%2FPdkSCsZbLgPUV7QCCgDUdLmCkH38wFtPdZhyh1GUL0sBOqXs1ETrDd9HJmh10jPG0%2BfM13rFd2DdbeJfjWhZeaQ2KZaw%2BxD00Frg4eooa27j%2FaCQTwPfB1YEg8yM52z6vHckRkmF2dcx7mXcbcyc5FbrKwWnAGM%2FGMJp7VjQTvrk2PDMb%2BBJ6ZaZSuMwq0bUVdklkAmoA5A12BmBR7rxNIRFYmuiIF8l%2B83%2Ba6uhaHSVQrP8W0dm3Ju%2Bp7vyonrSQcNqfGBTxlUZJdfMjH5bgMNVi%2FctUhTo7tvk8hT1Vm1Req8J%2BoglBzMmbbmSFJy%2Fs7j4Opt2%2BqfibP8h%2BrtvhQmUEnJ4CETVkk38gun1stXfvqlkQ9XLWrbGHDJRuEW%2Br%2BeoFmU1f6EoqwPudoa1jy6q4KhJnUPPYK8OSiP2QFJQ6nflR%2FJPFKJ5Jq%2Brji%2Bcgbu5x6LC1Krj0f1%2FNkpQ6WWfCM5NrYvDLkelG9gUqm2yb7SvsWnlbJHPTDLYBRDM%2BRaO4r8bmgw57%2BbvwY6pgEFTKaUVyrIw9CyI9X6Bs1jNrAbpvJqZZgwrknzFfRfDKcQ9n5CYpL7bHqcpReNb9hihz35GKRsR9XOBSk5kpHTPRuaWSLdtwI8%2F1RBc7nOsj%2BJjiJty5zjnumYIGr7ik6GpKs4BeedoP5iiz0px82ORiQVzbwRantchzyNNHKCvKuVzD6RJ2hJ47mMKsf61PGpT73f2dqZnlYrq0rqMEne8u2EaffY&X-Amz-Signature=8d843eea3e77c4afa7452fc191fd37ac8cb9a3d110e3d8211e9d5ebdde44c3c9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBOVVDHL%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T181149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8ew14E7s3W%2BzdSsYtIjL%2FoLfnEJfSlJfkrIKUY2eMCAiAToVJ%2BTUqfxUmuWKI0qjupXBrkwj1MgOzn9Ff4he%2Fmdir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMm21RCiLzy7N1kYpcKtwDzj6WECvVlybX0KQBV7HkvVpO8ag5ToBxVK%2F2ac0xKNXgmtOCwm4E5NX8Yb8R9ooIbHGmPCxBypnQ1TxyxK62C%2FtRJ0eIns8XLUt5dJdZxyQk%2F3AT%2FPdkSCsZbLgPUV7QCCgDUdLmCkH38wFtPdZhyh1GUL0sBOqXs1ETrDd9HJmh10jPG0%2BfM13rFd2DdbeJfjWhZeaQ2KZaw%2BxD00Frg4eooa27j%2FaCQTwPfB1YEg8yM52z6vHckRkmF2dcx7mXcbcyc5FbrKwWnAGM%2FGMJp7VjQTvrk2PDMb%2BBJ6ZaZSuMwq0bUVdklkAmoA5A12BmBR7rxNIRFYmuiIF8l%2B83%2Ba6uhaHSVQrP8W0dm3Ju%2Bp7vyonrSQcNqfGBTxlUZJdfMjH5bgMNVi%2FctUhTo7tvk8hT1Vm1Req8J%2BoglBzMmbbmSFJy%2Fs7j4Opt2%2BqfibP8h%2BrtvhQmUEnJ4CETVkk38gun1stXfvqlkQ9XLWrbGHDJRuEW%2Br%2BeoFmU1f6EoqwPudoa1jy6q4KhJnUPPYK8OSiP2QFJQ6nflR%2FJPFKJ5Jq%2Brji%2Bcgbu5x6LC1Krj0f1%2FNkpQ6WWfCM5NrYvDLkelG9gUqm2yb7SvsWnlbJHPTDLYBRDM%2BRaO4r8bmgw57%2BbvwY6pgEFTKaUVyrIw9CyI9X6Bs1jNrAbpvJqZZgwrknzFfRfDKcQ9n5CYpL7bHqcpReNb9hihz35GKRsR9XOBSk5kpHTPRuaWSLdtwI8%2F1RBc7nOsj%2BJjiJty5zjnumYIGr7ik6GpKs4BeedoP5iiz0px82ORiQVzbwRantchzyNNHKCvKuVzD6RJ2hJ47mMKsf61PGpT73f2dqZnlYrq0rqMEne8u2EaffY&X-Amz-Signature=54765b5abb15ab61a79868c024401a76c5a0624ceef04d4e77691cfac1757f32&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBOVVDHL%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T181149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8ew14E7s3W%2BzdSsYtIjL%2FoLfnEJfSlJfkrIKUY2eMCAiAToVJ%2BTUqfxUmuWKI0qjupXBrkwj1MgOzn9Ff4he%2Fmdir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMm21RCiLzy7N1kYpcKtwDzj6WECvVlybX0KQBV7HkvVpO8ag5ToBxVK%2F2ac0xKNXgmtOCwm4E5NX8Yb8R9ooIbHGmPCxBypnQ1TxyxK62C%2FtRJ0eIns8XLUt5dJdZxyQk%2F3AT%2FPdkSCsZbLgPUV7QCCgDUdLmCkH38wFtPdZhyh1GUL0sBOqXs1ETrDd9HJmh10jPG0%2BfM13rFd2DdbeJfjWhZeaQ2KZaw%2BxD00Frg4eooa27j%2FaCQTwPfB1YEg8yM52z6vHckRkmF2dcx7mXcbcyc5FbrKwWnAGM%2FGMJp7VjQTvrk2PDMb%2BBJ6ZaZSuMwq0bUVdklkAmoA5A12BmBR7rxNIRFYmuiIF8l%2B83%2Ba6uhaHSVQrP8W0dm3Ju%2Bp7vyonrSQcNqfGBTxlUZJdfMjH5bgMNVi%2FctUhTo7tvk8hT1Vm1Req8J%2BoglBzMmbbmSFJy%2Fs7j4Opt2%2BqfibP8h%2BrtvhQmUEnJ4CETVkk38gun1stXfvqlkQ9XLWrbGHDJRuEW%2Br%2BeoFmU1f6EoqwPudoa1jy6q4KhJnUPPYK8OSiP2QFJQ6nflR%2FJPFKJ5Jq%2Brji%2Bcgbu5x6LC1Krj0f1%2FNkpQ6WWfCM5NrYvDLkelG9gUqm2yb7SvsWnlbJHPTDLYBRDM%2BRaO4r8bmgw57%2BbvwY6pgEFTKaUVyrIw9CyI9X6Bs1jNrAbpvJqZZgwrknzFfRfDKcQ9n5CYpL7bHqcpReNb9hihz35GKRsR9XOBSk5kpHTPRuaWSLdtwI8%2F1RBc7nOsj%2BJjiJty5zjnumYIGr7ik6GpKs4BeedoP5iiz0px82ORiQVzbwRantchzyNNHKCvKuVzD6RJ2hJ47mMKsf61PGpT73f2dqZnlYrq0rqMEne8u2EaffY&X-Amz-Signature=73de9bb5ea0edc4cf418b4e035903ea39a7f60dc1e50bc53ee58046036af03ac&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
