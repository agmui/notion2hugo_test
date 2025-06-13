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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IN4CX24%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T041742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQD61eoqFTHXLy5u4aB2ocUmRgOQjbxWJ1dH2m1o6LUX3QIgA8DOTogRvUVhG5phAujSrKd4QsZK3QcfHS%2BxG1ZEJ9kqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQVPYRyk%2F1iG%2BfKSircA5Rfa8njm9cRt4jyKIdfn0jH7mFzcWaI%2F5GDi9MxPs9WQenFnapWP%2BsTwP2Z3ZjkyxOZItYrn30XOIE%2BeXxvbRg2QDX2eOi8XKM6bPxv7zSJ0MrZ212sKurMJgkZQjj0wvBA3kvgXrDkwlUXS3zeEKYOszaVFvuVGFAGrj9SUqE2xrS2Cw8umrxcSMhyNvI6x2zZ90mDvW%2F4GmuxQmG264GMpnXJaBHAOgaz2uiI9GbU9WT3mO4ExVcXLEMQAe%2FmE%2BurH5A5myPoDsGCoaTwME%2F1ytbZ%2BkoDXRnfij%2FaKmlakg%2FqR%2B3WMKgN9TAfiDu6vY6gG3adhZszgXR8aBDAqlLyFnNy8wf%2F8OfTxeAH27USXmIJn4YWfGzVr52LcvyppbcwkTzll9PVWRUPK%2B%2BltcG6SG4%2F8aSDtNRiqmemRwbMS5vRLXJq1NG1KgntA5aF7DxK2wjuYHyPPNswmCOVZZ3AXwMn5YZTiq80E8eA16hbR0MgDfhgyNnc1gFu3xA%2BlCJ5F0p5271gucI6wlprvzVekJqImR%2BekoJuXftGU5%2BxEo5P%2FpqeeKYXGnfZMnzoAr%2BkXKB3GK07mCVg%2FCUnLlfGOrWKDA6UOx1rhD%2BP%2BURDGyqfcBb0BPQoQ6zUMOCIrsIGOqUBqURWo9uaBOFMgslqEy%2FkgbjeOwlW6qVUfXpLouVYR20%2BpX%2FYmc2KC7GJHDOaBbXGZ%2Fz8kIhaLPnBg3YhaXJFSB6R%2BdRBafcvrwb0V3IayE%2BcEoDuPUUhRCCm2gR8oKUE4d4awoqFeEKSlOupKlNtN%2FDr8wUqjfF7NTgU6irjpVklYX0gQoIzZc8WhHCvRlkZUsE%2FYbO5nlu3pRPEjqG5JhqHHWjW&X-Amz-Signature=a907df56eedf7bdd1d1fef8525f24e95dbcf8dc793557b58842b80f85efe02f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IN4CX24%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T041742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQD61eoqFTHXLy5u4aB2ocUmRgOQjbxWJ1dH2m1o6LUX3QIgA8DOTogRvUVhG5phAujSrKd4QsZK3QcfHS%2BxG1ZEJ9kqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQVPYRyk%2F1iG%2BfKSircA5Rfa8njm9cRt4jyKIdfn0jH7mFzcWaI%2F5GDi9MxPs9WQenFnapWP%2BsTwP2Z3ZjkyxOZItYrn30XOIE%2BeXxvbRg2QDX2eOi8XKM6bPxv7zSJ0MrZ212sKurMJgkZQjj0wvBA3kvgXrDkwlUXS3zeEKYOszaVFvuVGFAGrj9SUqE2xrS2Cw8umrxcSMhyNvI6x2zZ90mDvW%2F4GmuxQmG264GMpnXJaBHAOgaz2uiI9GbU9WT3mO4ExVcXLEMQAe%2FmE%2BurH5A5myPoDsGCoaTwME%2F1ytbZ%2BkoDXRnfij%2FaKmlakg%2FqR%2B3WMKgN9TAfiDu6vY6gG3adhZszgXR8aBDAqlLyFnNy8wf%2F8OfTxeAH27USXmIJn4YWfGzVr52LcvyppbcwkTzll9PVWRUPK%2B%2BltcG6SG4%2F8aSDtNRiqmemRwbMS5vRLXJq1NG1KgntA5aF7DxK2wjuYHyPPNswmCOVZZ3AXwMn5YZTiq80E8eA16hbR0MgDfhgyNnc1gFu3xA%2BlCJ5F0p5271gucI6wlprvzVekJqImR%2BekoJuXftGU5%2BxEo5P%2FpqeeKYXGnfZMnzoAr%2BkXKB3GK07mCVg%2FCUnLlfGOrWKDA6UOx1rhD%2BP%2BURDGyqfcBb0BPQoQ6zUMOCIrsIGOqUBqURWo9uaBOFMgslqEy%2FkgbjeOwlW6qVUfXpLouVYR20%2BpX%2FYmc2KC7GJHDOaBbXGZ%2Fz8kIhaLPnBg3YhaXJFSB6R%2BdRBafcvrwb0V3IayE%2BcEoDuPUUhRCCm2gR8oKUE4d4awoqFeEKSlOupKlNtN%2FDr8wUqjfF7NTgU6irjpVklYX0gQoIzZc8WhHCvRlkZUsE%2FYbO5nlu3pRPEjqG5JhqHHWjW&X-Amz-Signature=c46d5e4dcaf862b490632faa29430991d4d0412e0efc33bae7d2bae26b00117f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IN4CX24%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T041742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQD61eoqFTHXLy5u4aB2ocUmRgOQjbxWJ1dH2m1o6LUX3QIgA8DOTogRvUVhG5phAujSrKd4QsZK3QcfHS%2BxG1ZEJ9kqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQVPYRyk%2F1iG%2BfKSircA5Rfa8njm9cRt4jyKIdfn0jH7mFzcWaI%2F5GDi9MxPs9WQenFnapWP%2BsTwP2Z3ZjkyxOZItYrn30XOIE%2BeXxvbRg2QDX2eOi8XKM6bPxv7zSJ0MrZ212sKurMJgkZQjj0wvBA3kvgXrDkwlUXS3zeEKYOszaVFvuVGFAGrj9SUqE2xrS2Cw8umrxcSMhyNvI6x2zZ90mDvW%2F4GmuxQmG264GMpnXJaBHAOgaz2uiI9GbU9WT3mO4ExVcXLEMQAe%2FmE%2BurH5A5myPoDsGCoaTwME%2F1ytbZ%2BkoDXRnfij%2FaKmlakg%2FqR%2B3WMKgN9TAfiDu6vY6gG3adhZszgXR8aBDAqlLyFnNy8wf%2F8OfTxeAH27USXmIJn4YWfGzVr52LcvyppbcwkTzll9PVWRUPK%2B%2BltcG6SG4%2F8aSDtNRiqmemRwbMS5vRLXJq1NG1KgntA5aF7DxK2wjuYHyPPNswmCOVZZ3AXwMn5YZTiq80E8eA16hbR0MgDfhgyNnc1gFu3xA%2BlCJ5F0p5271gucI6wlprvzVekJqImR%2BekoJuXftGU5%2BxEo5P%2FpqeeKYXGnfZMnzoAr%2BkXKB3GK07mCVg%2FCUnLlfGOrWKDA6UOx1rhD%2BP%2BURDGyqfcBb0BPQoQ6zUMOCIrsIGOqUBqURWo9uaBOFMgslqEy%2FkgbjeOwlW6qVUfXpLouVYR20%2BpX%2FYmc2KC7GJHDOaBbXGZ%2Fz8kIhaLPnBg3YhaXJFSB6R%2BdRBafcvrwb0V3IayE%2BcEoDuPUUhRCCm2gR8oKUE4d4awoqFeEKSlOupKlNtN%2FDr8wUqjfF7NTgU6irjpVklYX0gQoIzZc8WhHCvRlkZUsE%2FYbO5nlu3pRPEjqG5JhqHHWjW&X-Amz-Signature=d9432c8373db01ebe86c09fb68a8c037a87215f4fde83970ab2310e943f947e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
