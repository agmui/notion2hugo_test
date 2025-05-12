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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRATM4EC%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T022937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIERCZ8iLylESJWj71ZnunTnoaesMz4ioRFqifHEdSO57AiAv7oQ58eJFS0BjbuilpHsS9yH%2BuAhecBoHzl7OsvWxgiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSILxGw%2FjtO6VaJTEKtwDmAlkvURa7nPinqeP%2BMbwKCTy6BDiIH9XXop1aRRIkuGk7aUE9Q58JQXZ3LFu6t41m2a1P%2BEuy4wu%2FmYGTjwQ%2FKL%2BLYB5fAI0oPVCZC6wQlsvXtHeTVDMDQWqEMiITAaKnmfOw4pQIBWblcJlTotrj8kFWQuOVM5rHR2m6gRa7w2QqAs1YM8J83lcHA%2B%2BedIdd2nSWIQXK0HDODE0yfZ5YwgCx%2B0%2F6itewpDhQGj4KvgSvs5QShO%2F9VbzH%2Fe4dgENJrdwz2hq6UP1QHRmEcJ7GwKWLzzp4xD3k5%2BAELtJrqMrl7Jw%2FtQawGslQu6jp5K9jAvjlFf4lYDPRX11Zu72Ca9PCnm9rDXuV2bnn6jzaYDO3YZxp6XMZOaUH1VN6gPV25RTrn8gjNO9joIvH5DSwh%2FhyE5nYBiC7bWm6lQidLOFEG6tnzxOVq5WEBU3sVshobPuf%2FDNrJMb0xP32weT0eJBn6CA1WtOvYEuTx%2FZY4LzHzYBBibIkrLsV7BUzPGvPqhRs0s02rZQ%2Fby1e8hYtsINmEluWIM35ooo16s7lL0BAPLpt0HSMRa%2FF7eZiU%2BTFJ4yZDLPCr8kdDYKUt%2FtQfM0%2FaqT1CMTYLTLtyjiUjiHUhCM1afte1HiUjowm4WFwQY6pgHb2WYNIdDkhG%2F%2BienCsLvMZu0%2BDeiUJ6CP2sIjdWPUS1zq75dXvnb%2BLz7b6jzCf1V0iDkzDkyoyL6aCuai9VbdgtcwwhNB7ZHIsU%2B8VoaNy%2BDbsfIhZkLy9WjpHsu5u1G9O1XYgr2ACrAco3bT3t7n3cnBGpwhpT26NBThRsqKp1qbPSwi5kBiVRJsj%2B3VTJgcCBEroAuwYnzystkePRsYqEw2tFVY&X-Amz-Signature=800ac28ccf1fd7bfa0bd7a8e2ea15db1f8421b2a0193375314c39a8fb40fd142&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRATM4EC%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T022937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIERCZ8iLylESJWj71ZnunTnoaesMz4ioRFqifHEdSO57AiAv7oQ58eJFS0BjbuilpHsS9yH%2BuAhecBoHzl7OsvWxgiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSILxGw%2FjtO6VaJTEKtwDmAlkvURa7nPinqeP%2BMbwKCTy6BDiIH9XXop1aRRIkuGk7aUE9Q58JQXZ3LFu6t41m2a1P%2BEuy4wu%2FmYGTjwQ%2FKL%2BLYB5fAI0oPVCZC6wQlsvXtHeTVDMDQWqEMiITAaKnmfOw4pQIBWblcJlTotrj8kFWQuOVM5rHR2m6gRa7w2QqAs1YM8J83lcHA%2B%2BedIdd2nSWIQXK0HDODE0yfZ5YwgCx%2B0%2F6itewpDhQGj4KvgSvs5QShO%2F9VbzH%2Fe4dgENJrdwz2hq6UP1QHRmEcJ7GwKWLzzp4xD3k5%2BAELtJrqMrl7Jw%2FtQawGslQu6jp5K9jAvjlFf4lYDPRX11Zu72Ca9PCnm9rDXuV2bnn6jzaYDO3YZxp6XMZOaUH1VN6gPV25RTrn8gjNO9joIvH5DSwh%2FhyE5nYBiC7bWm6lQidLOFEG6tnzxOVq5WEBU3sVshobPuf%2FDNrJMb0xP32weT0eJBn6CA1WtOvYEuTx%2FZY4LzHzYBBibIkrLsV7BUzPGvPqhRs0s02rZQ%2Fby1e8hYtsINmEluWIM35ooo16s7lL0BAPLpt0HSMRa%2FF7eZiU%2BTFJ4yZDLPCr8kdDYKUt%2FtQfM0%2FaqT1CMTYLTLtyjiUjiHUhCM1afte1HiUjowm4WFwQY6pgHb2WYNIdDkhG%2F%2BienCsLvMZu0%2BDeiUJ6CP2sIjdWPUS1zq75dXvnb%2BLz7b6jzCf1V0iDkzDkyoyL6aCuai9VbdgtcwwhNB7ZHIsU%2B8VoaNy%2BDbsfIhZkLy9WjpHsu5u1G9O1XYgr2ACrAco3bT3t7n3cnBGpwhpT26NBThRsqKp1qbPSwi5kBiVRJsj%2B3VTJgcCBEroAuwYnzystkePRsYqEw2tFVY&X-Amz-Signature=0b3af58a7392853b7a4f34cfbc726344ad3e860dde9df8c97125fefcd3584b8e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRATM4EC%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T022937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIERCZ8iLylESJWj71ZnunTnoaesMz4ioRFqifHEdSO57AiAv7oQ58eJFS0BjbuilpHsS9yH%2BuAhecBoHzl7OsvWxgiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSILxGw%2FjtO6VaJTEKtwDmAlkvURa7nPinqeP%2BMbwKCTy6BDiIH9XXop1aRRIkuGk7aUE9Q58JQXZ3LFu6t41m2a1P%2BEuy4wu%2FmYGTjwQ%2FKL%2BLYB5fAI0oPVCZC6wQlsvXtHeTVDMDQWqEMiITAaKnmfOw4pQIBWblcJlTotrj8kFWQuOVM5rHR2m6gRa7w2QqAs1YM8J83lcHA%2B%2BedIdd2nSWIQXK0HDODE0yfZ5YwgCx%2B0%2F6itewpDhQGj4KvgSvs5QShO%2F9VbzH%2Fe4dgENJrdwz2hq6UP1QHRmEcJ7GwKWLzzp4xD3k5%2BAELtJrqMrl7Jw%2FtQawGslQu6jp5K9jAvjlFf4lYDPRX11Zu72Ca9PCnm9rDXuV2bnn6jzaYDO3YZxp6XMZOaUH1VN6gPV25RTrn8gjNO9joIvH5DSwh%2FhyE5nYBiC7bWm6lQidLOFEG6tnzxOVq5WEBU3sVshobPuf%2FDNrJMb0xP32weT0eJBn6CA1WtOvYEuTx%2FZY4LzHzYBBibIkrLsV7BUzPGvPqhRs0s02rZQ%2Fby1e8hYtsINmEluWIM35ooo16s7lL0BAPLpt0HSMRa%2FF7eZiU%2BTFJ4yZDLPCr8kdDYKUt%2FtQfM0%2FaqT1CMTYLTLtyjiUjiHUhCM1afte1HiUjowm4WFwQY6pgHb2WYNIdDkhG%2F%2BienCsLvMZu0%2BDeiUJ6CP2sIjdWPUS1zq75dXvnb%2BLz7b6jzCf1V0iDkzDkyoyL6aCuai9VbdgtcwwhNB7ZHIsU%2B8VoaNy%2BDbsfIhZkLy9WjpHsu5u1G9O1XYgr2ACrAco3bT3t7n3cnBGpwhpT26NBThRsqKp1qbPSwi5kBiVRJsj%2B3VTJgcCBEroAuwYnzystkePRsYqEw2tFVY&X-Amz-Signature=5bd77d255f7725d7c85eafbbb7a1fc971c5823a7a1650aacc29249eae714a521&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
