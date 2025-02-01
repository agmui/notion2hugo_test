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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCPVFJ6L%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T040900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc8Mu6v5PcZTOPJm411WKOLQFpqOvHHpPJs3Mag8S%2BgQIhALY5v0BZAjWWv3tXmcAMK20SzrJTIMkzJjdmGzDO7VabKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2NS3nEg%2FFlYRcetUq3APFTNmqc6NpoE6h1A1y6axuO7iaUFGvAT62uhg3zvwL%2Bmi79Ty49SGOMjP1w0e%2BaULf4i4DuCu8LG68Dn%2BpGfGJr%2Fb5hxtwLlHcoYaQF2tp3me2z9bMty4z3JXRO4AA6qvs2bGxV%2Bk252svES4ppTRum4XaS4bMdQHvqRUBYzDQIolM5Fdc%2Bh4NfC86qo5tU1Y8hel8FTLRybaUqqCtLxwXH5JPOYEOXyBsr215CxqM88U5JqtjRhkhTI1s8e0XfoMl639F7wkHbMyreqY70G17GahJSun6fqrJA%2B7SozvHxxO4J0NW2spYIbKnkptMPI2d6Hhea4Oo9EBcT%2BTsDoFS1xZXa0AqPUpcqS24U4SO%2FlkgPnNfDaw0xjYDru2ZWsvI%2FolMmnT4klNGe0ZkeXBVLnASBggiuXFClnbcftV2XI%2Ft3OBLXexGC7X4h4NsmA8S0kdYtf6NA5pt4oS%2FG5BbjWYpQxn4BRl1UKk4HNA939h%2FBJg4iEaOr5MKMc3%2Bvss8YuZ8QNyOQoLtWaZjaR6GetOP4smB0FPxpGwcGQ9z%2B10YFsPNhvG7n5ElfKLqJ0TyBjoA2%2BrLuqTHD2m%2FksWVs2TGVJl65YtVK57C%2B67XjqrcmkKdsd4%2F59bqwzDep%2Fa8BjqkAfjSZBV7rr%2FFugqfX1zSV%2BE3cE563KWPDCr217D7TavZNJvg8qrTppMpqionZqoUf2EoiepsTh%2F3HoOHq%2BkNUd8MgiEjOQe0Ly8la%2B9%2BCzhqoC4DumNBbk7U9IruETLHxxDIxcJH0BpCEtG130DAlIo1MRHkBT5wyPPjB6btwcKoZl3BErOk1xZlPpdVvN4WPp9lNAo4vhmWjhXhVDCLuc7Ci%2FpV&X-Amz-Signature=ee665daab2fcdde5827eeb41aa924b8a6ff6f1935a30d2dd0eb55bfce59a1d0b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCPVFJ6L%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T040900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc8Mu6v5PcZTOPJm411WKOLQFpqOvHHpPJs3Mag8S%2BgQIhALY5v0BZAjWWv3tXmcAMK20SzrJTIMkzJjdmGzDO7VabKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2NS3nEg%2FFlYRcetUq3APFTNmqc6NpoE6h1A1y6axuO7iaUFGvAT62uhg3zvwL%2Bmi79Ty49SGOMjP1w0e%2BaULf4i4DuCu8LG68Dn%2BpGfGJr%2Fb5hxtwLlHcoYaQF2tp3me2z9bMty4z3JXRO4AA6qvs2bGxV%2Bk252svES4ppTRum4XaS4bMdQHvqRUBYzDQIolM5Fdc%2Bh4NfC86qo5tU1Y8hel8FTLRybaUqqCtLxwXH5JPOYEOXyBsr215CxqM88U5JqtjRhkhTI1s8e0XfoMl639F7wkHbMyreqY70G17GahJSun6fqrJA%2B7SozvHxxO4J0NW2spYIbKnkptMPI2d6Hhea4Oo9EBcT%2BTsDoFS1xZXa0AqPUpcqS24U4SO%2FlkgPnNfDaw0xjYDru2ZWsvI%2FolMmnT4klNGe0ZkeXBVLnASBggiuXFClnbcftV2XI%2Ft3OBLXexGC7X4h4NsmA8S0kdYtf6NA5pt4oS%2FG5BbjWYpQxn4BRl1UKk4HNA939h%2FBJg4iEaOr5MKMc3%2Bvss8YuZ8QNyOQoLtWaZjaR6GetOP4smB0FPxpGwcGQ9z%2B10YFsPNhvG7n5ElfKLqJ0TyBjoA2%2BrLuqTHD2m%2FksWVs2TGVJl65YtVK57C%2B67XjqrcmkKdsd4%2F59bqwzDep%2Fa8BjqkAfjSZBV7rr%2FFugqfX1zSV%2BE3cE563KWPDCr217D7TavZNJvg8qrTppMpqionZqoUf2EoiepsTh%2F3HoOHq%2BkNUd8MgiEjOQe0Ly8la%2B9%2BCzhqoC4DumNBbk7U9IruETLHxxDIxcJH0BpCEtG130DAlIo1MRHkBT5wyPPjB6btwcKoZl3BErOk1xZlPpdVvN4WPp9lNAo4vhmWjhXhVDCLuc7Ci%2FpV&X-Amz-Signature=61169b386a7c61df2d080657f3fb4623a7540facf921128b69cc5f1b638be7bb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCPVFJ6L%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T040900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc8Mu6v5PcZTOPJm411WKOLQFpqOvHHpPJs3Mag8S%2BgQIhALY5v0BZAjWWv3tXmcAMK20SzrJTIMkzJjdmGzDO7VabKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2NS3nEg%2FFlYRcetUq3APFTNmqc6NpoE6h1A1y6axuO7iaUFGvAT62uhg3zvwL%2Bmi79Ty49SGOMjP1w0e%2BaULf4i4DuCu8LG68Dn%2BpGfGJr%2Fb5hxtwLlHcoYaQF2tp3me2z9bMty4z3JXRO4AA6qvs2bGxV%2Bk252svES4ppTRum4XaS4bMdQHvqRUBYzDQIolM5Fdc%2Bh4NfC86qo5tU1Y8hel8FTLRybaUqqCtLxwXH5JPOYEOXyBsr215CxqM88U5JqtjRhkhTI1s8e0XfoMl639F7wkHbMyreqY70G17GahJSun6fqrJA%2B7SozvHxxO4J0NW2spYIbKnkptMPI2d6Hhea4Oo9EBcT%2BTsDoFS1xZXa0AqPUpcqS24U4SO%2FlkgPnNfDaw0xjYDru2ZWsvI%2FolMmnT4klNGe0ZkeXBVLnASBggiuXFClnbcftV2XI%2Ft3OBLXexGC7X4h4NsmA8S0kdYtf6NA5pt4oS%2FG5BbjWYpQxn4BRl1UKk4HNA939h%2FBJg4iEaOr5MKMc3%2Bvss8YuZ8QNyOQoLtWaZjaR6GetOP4smB0FPxpGwcGQ9z%2B10YFsPNhvG7n5ElfKLqJ0TyBjoA2%2BrLuqTHD2m%2FksWVs2TGVJl65YtVK57C%2B67XjqrcmkKdsd4%2F59bqwzDep%2Fa8BjqkAfjSZBV7rr%2FFugqfX1zSV%2BE3cE563KWPDCr217D7TavZNJvg8qrTppMpqionZqoUf2EoiepsTh%2F3HoOHq%2BkNUd8MgiEjOQe0Ly8la%2B9%2BCzhqoC4DumNBbk7U9IruETLHxxDIxcJH0BpCEtG130DAlIo1MRHkBT5wyPPjB6btwcKoZl3BErOk1xZlPpdVvN4WPp9lNAo4vhmWjhXhVDCLuc7Ci%2FpV&X-Amz-Signature=cbbe71be1e60644ef6b27fd284957280a7bf191ce2bb318eec601340e830db1f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
