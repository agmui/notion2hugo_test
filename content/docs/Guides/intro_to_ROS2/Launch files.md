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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XUYTODU%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsX66BYP8wLL4t536u16XY%2Fn%2BW7LMVsZFlE%2BWvJ5WT%2FAIgCzh%2BrpbtSgxhjvmAv%2B8CEenLCEOnl%2FkjXhpEZ6JGzFAqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIIvBAsJqcZ2VyDsCircAyHCLNfehKwDDqQAorZlVKDWdRvEv3YyvLuhzyl9ltmRkJlrxkkdlhsA5x0GhYUnAzVnoAfINDXEV2H7lm1mBgGsSCQFis6Er5XGK508ptYrR%2FyrhjRhX3wD5M0H0Nfd0%2F8svWwzvpmx6YE5%2BOz0jdszP5j74MW9cX27fVuIGEElulV26pVzvP1U9s1AsSbYT6vsnQNsUf3Y5InlJX1xdme4FATgwc9Pf70PwFThju6qiEGZlD5qnfJoOLJFNCK1WjMa0lN7cGxAEVVuo0f3s41cdBBc1AQxhbkvv5MwIJu0v%2BWVeHq4%2BjPcM9hpgZyFXP%2FuoFje99f0yP7QZwtuim7alzO2XfnwbJF57qgY7%2Bmr92wPGtoMrDoyelco%2FGsyUN01ISOFMPMxbELf%2FrkQLXN9NnkT%2BKlKjKUP%2Fs%2FozmMZKlmtO1jMpI8TylsQxPVN1OoGfgliSHPPUtrdnMPyrd6gO6W%2FsOuY4pYFDauwGpT3%2FE3dYl1N7hDeI8hD8tQaFcptSDNn4PndnIUmKJlmikuki%2F6LpSGuH23coOKwJb1vwWKOCl96u0CjkROHGcoTjpFA8brYuiNWaBuxNGzNwMjSTg65PpJnc91qWhdIKf2zc93Uad4wZXvfj2RNMNDy5sEGOqUBZRBjXdJkOk05c0sLW9LUxJiKaPFgTpKUdyrUBrh6CngvUG8fEgY0rUpUA1spSZfUCs4ImPLPkv%2B%2FpiFMevCbAC7aarX6gOGG88qK9aiuZpQpw%2F0W5PW9UVIJM8nG1b3AWE4uQidyUUogvjfCDsuPyELpSBo4HmhBBZ5TYQ5BanbeP4jbo8x3Kacvv13Gm5Aug9zkIfElQQRulnRK9ne7MTb3Lm2N&X-Amz-Signature=8e9f5cba159d6eeaffb3f804e6d0ded306d8a2e0741056031cff0b063e7c1cf7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XUYTODU%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsX66BYP8wLL4t536u16XY%2Fn%2BW7LMVsZFlE%2BWvJ5WT%2FAIgCzh%2BrpbtSgxhjvmAv%2B8CEenLCEOnl%2FkjXhpEZ6JGzFAqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIIvBAsJqcZ2VyDsCircAyHCLNfehKwDDqQAorZlVKDWdRvEv3YyvLuhzyl9ltmRkJlrxkkdlhsA5x0GhYUnAzVnoAfINDXEV2H7lm1mBgGsSCQFis6Er5XGK508ptYrR%2FyrhjRhX3wD5M0H0Nfd0%2F8svWwzvpmx6YE5%2BOz0jdszP5j74MW9cX27fVuIGEElulV26pVzvP1U9s1AsSbYT6vsnQNsUf3Y5InlJX1xdme4FATgwc9Pf70PwFThju6qiEGZlD5qnfJoOLJFNCK1WjMa0lN7cGxAEVVuo0f3s41cdBBc1AQxhbkvv5MwIJu0v%2BWVeHq4%2BjPcM9hpgZyFXP%2FuoFje99f0yP7QZwtuim7alzO2XfnwbJF57qgY7%2Bmr92wPGtoMrDoyelco%2FGsyUN01ISOFMPMxbELf%2FrkQLXN9NnkT%2BKlKjKUP%2Fs%2FozmMZKlmtO1jMpI8TylsQxPVN1OoGfgliSHPPUtrdnMPyrd6gO6W%2FsOuY4pYFDauwGpT3%2FE3dYl1N7hDeI8hD8tQaFcptSDNn4PndnIUmKJlmikuki%2F6LpSGuH23coOKwJb1vwWKOCl96u0CjkROHGcoTjpFA8brYuiNWaBuxNGzNwMjSTg65PpJnc91qWhdIKf2zc93Uad4wZXvfj2RNMNDy5sEGOqUBZRBjXdJkOk05c0sLW9LUxJiKaPFgTpKUdyrUBrh6CngvUG8fEgY0rUpUA1spSZfUCs4ImPLPkv%2B%2FpiFMevCbAC7aarX6gOGG88qK9aiuZpQpw%2F0W5PW9UVIJM8nG1b3AWE4uQidyUUogvjfCDsuPyELpSBo4HmhBBZ5TYQ5BanbeP4jbo8x3Kacvv13Gm5Aug9zkIfElQQRulnRK9ne7MTb3Lm2N&X-Amz-Signature=699a00fe27241d65ee593159db2f7b9545806b0ba07320230ef4ee73d786962a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XUYTODU%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsX66BYP8wLL4t536u16XY%2Fn%2BW7LMVsZFlE%2BWvJ5WT%2FAIgCzh%2BrpbtSgxhjvmAv%2B8CEenLCEOnl%2FkjXhpEZ6JGzFAqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIIvBAsJqcZ2VyDsCircAyHCLNfehKwDDqQAorZlVKDWdRvEv3YyvLuhzyl9ltmRkJlrxkkdlhsA5x0GhYUnAzVnoAfINDXEV2H7lm1mBgGsSCQFis6Er5XGK508ptYrR%2FyrhjRhX3wD5M0H0Nfd0%2F8svWwzvpmx6YE5%2BOz0jdszP5j74MW9cX27fVuIGEElulV26pVzvP1U9s1AsSbYT6vsnQNsUf3Y5InlJX1xdme4FATgwc9Pf70PwFThju6qiEGZlD5qnfJoOLJFNCK1WjMa0lN7cGxAEVVuo0f3s41cdBBc1AQxhbkvv5MwIJu0v%2BWVeHq4%2BjPcM9hpgZyFXP%2FuoFje99f0yP7QZwtuim7alzO2XfnwbJF57qgY7%2Bmr92wPGtoMrDoyelco%2FGsyUN01ISOFMPMxbELf%2FrkQLXN9NnkT%2BKlKjKUP%2Fs%2FozmMZKlmtO1jMpI8TylsQxPVN1OoGfgliSHPPUtrdnMPyrd6gO6W%2FsOuY4pYFDauwGpT3%2FE3dYl1N7hDeI8hD8tQaFcptSDNn4PndnIUmKJlmikuki%2F6LpSGuH23coOKwJb1vwWKOCl96u0CjkROHGcoTjpFA8brYuiNWaBuxNGzNwMjSTg65PpJnc91qWhdIKf2zc93Uad4wZXvfj2RNMNDy5sEGOqUBZRBjXdJkOk05c0sLW9LUxJiKaPFgTpKUdyrUBrh6CngvUG8fEgY0rUpUA1spSZfUCs4ImPLPkv%2B%2FpiFMevCbAC7aarX6gOGG88qK9aiuZpQpw%2F0W5PW9UVIJM8nG1b3AWE4uQidyUUogvjfCDsuPyELpSBo4HmhBBZ5TYQ5BanbeP4jbo8x3Kacvv13Gm5Aug9zkIfElQQRulnRK9ne7MTb3Lm2N&X-Amz-Signature=57da3d46f202bac61b85e83dd5c15c437c43dbbb2f76569375dc01adbf9cc3a9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
