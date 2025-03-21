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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH3QCDIO%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T150831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIH%2FdzxzuZQBhy3mwXAifItQawxBKGEmCcC7yG3fylBQsAiB7I6w0xLe%2BEIY3NkFBbnBzi2PAiPVukN4jQh9MACjDXCqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuHIJXK0aWsrJYNkmKtwDoU6xID%2FGQcf7EJalyGKMA4No3X1MQcv8go1vxonE8BMR3cKCosqMzCOQQc9fovfp8gghI6cw8Z2bp%2FCXHgYyEfdyOMz1t6DFbDdSiqMRH5XFITxpgpwr2sOvDKze4KALSIyD%2FTbnCwqE1XH%2BSP534cNTzxOeStnxZeoanANdRbttGntJvxg8wDwtTTLrJ%2FG6z8XUR9rE1E%2FP%2B0NGejwTK1jsUMlDvqXZdCjLXvZY0HMeGxVe5RBiq8ebi7VveKUUOBsMBpwyu075HWGzaMVVY4hIOjMf0myhdKsV49hjogI%2BOpJ61HQUoJdt%2BtwfpIjLLHyUnUsVw%2FYtsG9SSRiDywWX2EtEJ6gMLZdzfI7lTFAJm86YE3g3O5ug2DaDAWxYQZf19X%2F7Tze6o%2BoZ5iWPSY%2BWVVLvYzhpYgEIw7CQrRYcfnkJXBeYzFVT%2FjTfG1TXtjH8m4pBpz2BcnSoAaXbXvsZedHs1VRvEFQdmy2CjbrZWKfyQV3Amyg5yctKy9yvTMLAbPzt1ma9dHZryaX8ojLEMJkYC%2B1OylOAEQKH0HqBsCoHsBDZ5lp7%2Bk5GPW8d1oyRExBKbfkTQhWlx4gQHY4NJ2PDhmeyyvoXzjkOLFlLzojhXaigbTWGKMYw9vv1vgY6pgF%2F6UnTgqJcYWPQZhDeh%2BuCOQrIbNTFnhx2k1AslYgQFfJHwV%2BmtfGOgdm8Ud%2BSEh8RXLZgyFlNSskfnT30W0RGiRsinoC2%2BDjNM9C2DSdq9LvB1duKMQpSLP3SgAYTdlSRaOR2oFhewQoPWkgVOJ1Yn2Q7Q%2FkdFhOVY4tWhLbK2ghE94fQ5A6LaPbd0xOTIGMC80ZoPIw2F1HM3pMLtgfHJCpoK7zz&X-Amz-Signature=db3645a9896e587ff2c871854c5971a4310cd43faef11905361a0bea62ef0ffd&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH3QCDIO%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T150831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIH%2FdzxzuZQBhy3mwXAifItQawxBKGEmCcC7yG3fylBQsAiB7I6w0xLe%2BEIY3NkFBbnBzi2PAiPVukN4jQh9MACjDXCqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuHIJXK0aWsrJYNkmKtwDoU6xID%2FGQcf7EJalyGKMA4No3X1MQcv8go1vxonE8BMR3cKCosqMzCOQQc9fovfp8gghI6cw8Z2bp%2FCXHgYyEfdyOMz1t6DFbDdSiqMRH5XFITxpgpwr2sOvDKze4KALSIyD%2FTbnCwqE1XH%2BSP534cNTzxOeStnxZeoanANdRbttGntJvxg8wDwtTTLrJ%2FG6z8XUR9rE1E%2FP%2B0NGejwTK1jsUMlDvqXZdCjLXvZY0HMeGxVe5RBiq8ebi7VveKUUOBsMBpwyu075HWGzaMVVY4hIOjMf0myhdKsV49hjogI%2BOpJ61HQUoJdt%2BtwfpIjLLHyUnUsVw%2FYtsG9SSRiDywWX2EtEJ6gMLZdzfI7lTFAJm86YE3g3O5ug2DaDAWxYQZf19X%2F7Tze6o%2BoZ5iWPSY%2BWVVLvYzhpYgEIw7CQrRYcfnkJXBeYzFVT%2FjTfG1TXtjH8m4pBpz2BcnSoAaXbXvsZedHs1VRvEFQdmy2CjbrZWKfyQV3Amyg5yctKy9yvTMLAbPzt1ma9dHZryaX8ojLEMJkYC%2B1OylOAEQKH0HqBsCoHsBDZ5lp7%2Bk5GPW8d1oyRExBKbfkTQhWlx4gQHY4NJ2PDhmeyyvoXzjkOLFlLzojhXaigbTWGKMYw9vv1vgY6pgF%2F6UnTgqJcYWPQZhDeh%2BuCOQrIbNTFnhx2k1AslYgQFfJHwV%2BmtfGOgdm8Ud%2BSEh8RXLZgyFlNSskfnT30W0RGiRsinoC2%2BDjNM9C2DSdq9LvB1duKMQpSLP3SgAYTdlSRaOR2oFhewQoPWkgVOJ1Yn2Q7Q%2FkdFhOVY4tWhLbK2ghE94fQ5A6LaPbd0xOTIGMC80ZoPIw2F1HM3pMLtgfHJCpoK7zz&X-Amz-Signature=6ed8c0e1a8fb74b1aea50793e22dce3a6ab843079fd0d241c866ef2a5157ffb1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH3QCDIO%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T150831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIH%2FdzxzuZQBhy3mwXAifItQawxBKGEmCcC7yG3fylBQsAiB7I6w0xLe%2BEIY3NkFBbnBzi2PAiPVukN4jQh9MACjDXCqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuHIJXK0aWsrJYNkmKtwDoU6xID%2FGQcf7EJalyGKMA4No3X1MQcv8go1vxonE8BMR3cKCosqMzCOQQc9fovfp8gghI6cw8Z2bp%2FCXHgYyEfdyOMz1t6DFbDdSiqMRH5XFITxpgpwr2sOvDKze4KALSIyD%2FTbnCwqE1XH%2BSP534cNTzxOeStnxZeoanANdRbttGntJvxg8wDwtTTLrJ%2FG6z8XUR9rE1E%2FP%2B0NGejwTK1jsUMlDvqXZdCjLXvZY0HMeGxVe5RBiq8ebi7VveKUUOBsMBpwyu075HWGzaMVVY4hIOjMf0myhdKsV49hjogI%2BOpJ61HQUoJdt%2BtwfpIjLLHyUnUsVw%2FYtsG9SSRiDywWX2EtEJ6gMLZdzfI7lTFAJm86YE3g3O5ug2DaDAWxYQZf19X%2F7Tze6o%2BoZ5iWPSY%2BWVVLvYzhpYgEIw7CQrRYcfnkJXBeYzFVT%2FjTfG1TXtjH8m4pBpz2BcnSoAaXbXvsZedHs1VRvEFQdmy2CjbrZWKfyQV3Amyg5yctKy9yvTMLAbPzt1ma9dHZryaX8ojLEMJkYC%2B1OylOAEQKH0HqBsCoHsBDZ5lp7%2Bk5GPW8d1oyRExBKbfkTQhWlx4gQHY4NJ2PDhmeyyvoXzjkOLFlLzojhXaigbTWGKMYw9vv1vgY6pgF%2F6UnTgqJcYWPQZhDeh%2BuCOQrIbNTFnhx2k1AslYgQFfJHwV%2BmtfGOgdm8Ud%2BSEh8RXLZgyFlNSskfnT30W0RGiRsinoC2%2BDjNM9C2DSdq9LvB1duKMQpSLP3SgAYTdlSRaOR2oFhewQoPWkgVOJ1Yn2Q7Q%2FkdFhOVY4tWhLbK2ghE94fQ5A6LaPbd0xOTIGMC80ZoPIw2F1HM3pMLtgfHJCpoK7zz&X-Amz-Signature=fa8c1d4dd4d06a9f24344a0eccab544c3a667c3cace9b76f56213a09c2fe6292&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
