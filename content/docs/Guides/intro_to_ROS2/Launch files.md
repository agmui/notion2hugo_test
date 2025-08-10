---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THK6OKOX%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC25yP%2BgSdMr279hxCXhZ7UK9FVPDiSZopLQN63YkOWzwIhAO0BhIThdrck0mhIR39VYrVFL6Q7Ll%2BcKDU8ClNmMVzfKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqysUNWiHnMDfewQkq3AMsjwe5GXprh0QsoT5ZihRbiC1Uq2aYJpH8Os3zSjfAbYS0%2F2lwhoF4J539eZ4rxlUoYPP9zAaWVpFUFVRwGVYcwOSRM6sj36FnHBZIfy5dmmPVUErwXB9e57Ju4tBarcwmE8%2Fi%2BVgJqNV4KmSAx3Xx%2FnxKqWu9LtjbTwi2lbIh7i5xQW%2BDs4iZ%2FHFRgnHSStrOcInSRmtIXHd3qkrSfROvzbUOuYGgZpIrzUTyEAU%2FzWWYV3tk3zUxWKVVTM%2BcGRxx1ZILwkPKLNiF3vO3tRx3Iq%2FMUj5jIls5b4WVIaHq8wGHEIjvisHIZxS7vNnY7eu4QTdUfip79DZMNa2WkseqNkqDO69%2BWSvaXzSv4r%2FnlYTg1dAfwpSstlQ7wFMTEWcnktqnlhuVAJtf5maPUIKxRCk9GxiIjw%2B5F05ptISrATN6QOr07eM05TJVHk1FDPgcKf2l2si%2B%2FkJsWy%2B27oJLwztF8YeDLToVeer%2BH89tnzfrEnz%2FZuATkQHZJmssdhhXmPal8NyXbabmKccxdqX4Sz7b%2FmXWCAC3i2TtX02BhSDlfV%2BGDoT8oFXnFzakh4IUNqQdxpgVrTe0D1jZEUgNUOkUoPLGdXj3QdWKOSFWzfUfpXgIwFF7NHUw5zChv%2BLEBjqkAZ4BDlxaSXrISO9Of3iFS662TMBtgqWeDd0eugC19aXVE1aAruZ0eot6eFBTUZLma%2BacFsMOS7ZeXUzXO%2B7FhYzxC0gBX3IIkVqpBmsCCVJF0HZmbGZ7%2FWVw4dSVb3GuY%2FWLK%2BzCAWaq3hpe4ZHeME1NDl%2B%2FrRSYh4aqK3DVfIqWKwo40DEsGVg2o5SYNsMoz66vd2ihnX8FusSX328DjZSIozNA&X-Amz-Signature=22e9e2f6fa4e8b7716924eb89ebe0b4d3ca82866ced18fbd71460084d786baab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THK6OKOX%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC25yP%2BgSdMr279hxCXhZ7UK9FVPDiSZopLQN63YkOWzwIhAO0BhIThdrck0mhIR39VYrVFL6Q7Ll%2BcKDU8ClNmMVzfKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqysUNWiHnMDfewQkq3AMsjwe5GXprh0QsoT5ZihRbiC1Uq2aYJpH8Os3zSjfAbYS0%2F2lwhoF4J539eZ4rxlUoYPP9zAaWVpFUFVRwGVYcwOSRM6sj36FnHBZIfy5dmmPVUErwXB9e57Ju4tBarcwmE8%2Fi%2BVgJqNV4KmSAx3Xx%2FnxKqWu9LtjbTwi2lbIh7i5xQW%2BDs4iZ%2FHFRgnHSStrOcInSRmtIXHd3qkrSfROvzbUOuYGgZpIrzUTyEAU%2FzWWYV3tk3zUxWKVVTM%2BcGRxx1ZILwkPKLNiF3vO3tRx3Iq%2FMUj5jIls5b4WVIaHq8wGHEIjvisHIZxS7vNnY7eu4QTdUfip79DZMNa2WkseqNkqDO69%2BWSvaXzSv4r%2FnlYTg1dAfwpSstlQ7wFMTEWcnktqnlhuVAJtf5maPUIKxRCk9GxiIjw%2B5F05ptISrATN6QOr07eM05TJVHk1FDPgcKf2l2si%2B%2FkJsWy%2B27oJLwztF8YeDLToVeer%2BH89tnzfrEnz%2FZuATkQHZJmssdhhXmPal8NyXbabmKccxdqX4Sz7b%2FmXWCAC3i2TtX02BhSDlfV%2BGDoT8oFXnFzakh4IUNqQdxpgVrTe0D1jZEUgNUOkUoPLGdXj3QdWKOSFWzfUfpXgIwFF7NHUw5zChv%2BLEBjqkAZ4BDlxaSXrISO9Of3iFS662TMBtgqWeDd0eugC19aXVE1aAruZ0eot6eFBTUZLma%2BacFsMOS7ZeXUzXO%2B7FhYzxC0gBX3IIkVqpBmsCCVJF0HZmbGZ7%2FWVw4dSVb3GuY%2FWLK%2BzCAWaq3hpe4ZHeME1NDl%2B%2FrRSYh4aqK3DVfIqWKwo40DEsGVg2o5SYNsMoz66vd2ihnX8FusSX328DjZSIozNA&X-Amz-Signature=b39299f6d0fcf3f0b93c849b8548f1913582ad8e039ca446ff1fed8f71862030&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THK6OKOX%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC25yP%2BgSdMr279hxCXhZ7UK9FVPDiSZopLQN63YkOWzwIhAO0BhIThdrck0mhIR39VYrVFL6Q7Ll%2BcKDU8ClNmMVzfKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqysUNWiHnMDfewQkq3AMsjwe5GXprh0QsoT5ZihRbiC1Uq2aYJpH8Os3zSjfAbYS0%2F2lwhoF4J539eZ4rxlUoYPP9zAaWVpFUFVRwGVYcwOSRM6sj36FnHBZIfy5dmmPVUErwXB9e57Ju4tBarcwmE8%2Fi%2BVgJqNV4KmSAx3Xx%2FnxKqWu9LtjbTwi2lbIh7i5xQW%2BDs4iZ%2FHFRgnHSStrOcInSRmtIXHd3qkrSfROvzbUOuYGgZpIrzUTyEAU%2FzWWYV3tk3zUxWKVVTM%2BcGRxx1ZILwkPKLNiF3vO3tRx3Iq%2FMUj5jIls5b4WVIaHq8wGHEIjvisHIZxS7vNnY7eu4QTdUfip79DZMNa2WkseqNkqDO69%2BWSvaXzSv4r%2FnlYTg1dAfwpSstlQ7wFMTEWcnktqnlhuVAJtf5maPUIKxRCk9GxiIjw%2B5F05ptISrATN6QOr07eM05TJVHk1FDPgcKf2l2si%2B%2FkJsWy%2B27oJLwztF8YeDLToVeer%2BH89tnzfrEnz%2FZuATkQHZJmssdhhXmPal8NyXbabmKccxdqX4Sz7b%2FmXWCAC3i2TtX02BhSDlfV%2BGDoT8oFXnFzakh4IUNqQdxpgVrTe0D1jZEUgNUOkUoPLGdXj3QdWKOSFWzfUfpXgIwFF7NHUw5zChv%2BLEBjqkAZ4BDlxaSXrISO9Of3iFS662TMBtgqWeDd0eugC19aXVE1aAruZ0eot6eFBTUZLma%2BacFsMOS7ZeXUzXO%2B7FhYzxC0gBX3IIkVqpBmsCCVJF0HZmbGZ7%2FWVw4dSVb3GuY%2FWLK%2BzCAWaq3hpe4ZHeME1NDl%2B%2FrRSYh4aqK3DVfIqWKwo40DEsGVg2o5SYNsMoz66vd2ihnX8FusSX328DjZSIozNA&X-Amz-Signature=14528280d163feb6108b3892de2118a1643bcfd8a7cbcc8092a009a733f26336&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
