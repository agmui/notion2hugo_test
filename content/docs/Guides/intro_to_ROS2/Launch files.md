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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D4UNLAJ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T181002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYIaB8E7efBEdPTU76qMYUgGqDbpRaVa34PDQGuY1umAiA9QJZsoKpF5z0zDxuZ3VVFNzZYYU3ihZ6KSJoQTbIQWSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMssSuFNz1a9%2F1AK%2FXKtwDW41%2BbTgTux5JM%2B8%2BSWZC47ENco9sU7Je3V%2B547huVOjCyzDen8%2ByGi329wKCvUaZtYsz3U4OOvR0IL8C47c%2FRJ%2FHn07tIowKtp2YKxwr4MBicySPvieII7BKC8fIperD9dt2zn%2F8lEFbXK2B1KcNTYlLiUEuZfQIrW4reqP7ZJQZEWgVC1jbQoGc01rsFG%2BQ9iuHl0LiWVyjg4EVkohtFi0bFnIy5wRQMpONckJaPj290KF%2Ba9PcVbRpLvTTxLXRAQ6e7IpGM5E0spQ162H3MWcqElSmKNIut8D49%2BO1%2BNquWG%2BTP4LjW0FAbmtRiHgMK8cqxdI916cIlKRdIf8h%2BS0plrGxLF8aMDQjdG7MTJdxExoQP05IwmA0fOmVnM4PzbxF4RkCL2vscXJaVhEJCXabSF5F6jEvlFfnb1aU6cNmbk64AXh150GnyO0ibiq0S%2FX0NuTCOOMC%2B6sNicy3E8G4p09MhLZB32OgLu0tQQ7IEI7KdJmWcmHvjVTx8zkLLAaYBXdDUsIpQAb%2FLLoDt3MxYyNKSlYunuoauOJX%2BTPXd9K%2FLWk8VZcagX6N7fS%2B%2B8t5T7wJsEcm3Wod%2Bg2sC5E4a2zDh5N%2Bj2Y3IVB17dj8%2F0nUr7aZDrRiI%2Bswwq%2B5wAY6pgFIXMTLCJA31u7kyt5AqwyG8f5nFTfE2jUvBCvVybiNEi4N5Vtn9%2BQJZAH%2Bub3KgqLHXPnjMYE0HRqS4zQ9aIhuvW%2Fnbh5NXobjOnEoeO%2FAQJXlRs2lc9YW0mYELkz%2F908oX21M%2BoY5vNekzum468RfiO0wQ3UVhsMOKV2TKiUsLvPsdUoXShHMdUDDUy4viFwfzvqlm9DuooS1xRK0PXebpiV0XGeR&X-Amz-Signature=e18f0bfedcfee41842f24e2597a39985babe3109528caf1bd9be5c721074cdc4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D4UNLAJ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T181002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYIaB8E7efBEdPTU76qMYUgGqDbpRaVa34PDQGuY1umAiA9QJZsoKpF5z0zDxuZ3VVFNzZYYU3ihZ6KSJoQTbIQWSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMssSuFNz1a9%2F1AK%2FXKtwDW41%2BbTgTux5JM%2B8%2BSWZC47ENco9sU7Je3V%2B547huVOjCyzDen8%2ByGi329wKCvUaZtYsz3U4OOvR0IL8C47c%2FRJ%2FHn07tIowKtp2YKxwr4MBicySPvieII7BKC8fIperD9dt2zn%2F8lEFbXK2B1KcNTYlLiUEuZfQIrW4reqP7ZJQZEWgVC1jbQoGc01rsFG%2BQ9iuHl0LiWVyjg4EVkohtFi0bFnIy5wRQMpONckJaPj290KF%2Ba9PcVbRpLvTTxLXRAQ6e7IpGM5E0spQ162H3MWcqElSmKNIut8D49%2BO1%2BNquWG%2BTP4LjW0FAbmtRiHgMK8cqxdI916cIlKRdIf8h%2BS0plrGxLF8aMDQjdG7MTJdxExoQP05IwmA0fOmVnM4PzbxF4RkCL2vscXJaVhEJCXabSF5F6jEvlFfnb1aU6cNmbk64AXh150GnyO0ibiq0S%2FX0NuTCOOMC%2B6sNicy3E8G4p09MhLZB32OgLu0tQQ7IEI7KdJmWcmHvjVTx8zkLLAaYBXdDUsIpQAb%2FLLoDt3MxYyNKSlYunuoauOJX%2BTPXd9K%2FLWk8VZcagX6N7fS%2B%2B8t5T7wJsEcm3Wod%2Bg2sC5E4a2zDh5N%2Bj2Y3IVB17dj8%2F0nUr7aZDrRiI%2Bswwq%2B5wAY6pgFIXMTLCJA31u7kyt5AqwyG8f5nFTfE2jUvBCvVybiNEi4N5Vtn9%2BQJZAH%2Bub3KgqLHXPnjMYE0HRqS4zQ9aIhuvW%2Fnbh5NXobjOnEoeO%2FAQJXlRs2lc9YW0mYELkz%2F908oX21M%2BoY5vNekzum468RfiO0wQ3UVhsMOKV2TKiUsLvPsdUoXShHMdUDDUy4viFwfzvqlm9DuooS1xRK0PXebpiV0XGeR&X-Amz-Signature=494b14924de1c6b66de3a2482a9b04208973a8794c092dc9796d286454ca2ba2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D4UNLAJ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T181002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYIaB8E7efBEdPTU76qMYUgGqDbpRaVa34PDQGuY1umAiA9QJZsoKpF5z0zDxuZ3VVFNzZYYU3ihZ6KSJoQTbIQWSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMssSuFNz1a9%2F1AK%2FXKtwDW41%2BbTgTux5JM%2B8%2BSWZC47ENco9sU7Je3V%2B547huVOjCyzDen8%2ByGi329wKCvUaZtYsz3U4OOvR0IL8C47c%2FRJ%2FHn07tIowKtp2YKxwr4MBicySPvieII7BKC8fIperD9dt2zn%2F8lEFbXK2B1KcNTYlLiUEuZfQIrW4reqP7ZJQZEWgVC1jbQoGc01rsFG%2BQ9iuHl0LiWVyjg4EVkohtFi0bFnIy5wRQMpONckJaPj290KF%2Ba9PcVbRpLvTTxLXRAQ6e7IpGM5E0spQ162H3MWcqElSmKNIut8D49%2BO1%2BNquWG%2BTP4LjW0FAbmtRiHgMK8cqxdI916cIlKRdIf8h%2BS0plrGxLF8aMDQjdG7MTJdxExoQP05IwmA0fOmVnM4PzbxF4RkCL2vscXJaVhEJCXabSF5F6jEvlFfnb1aU6cNmbk64AXh150GnyO0ibiq0S%2FX0NuTCOOMC%2B6sNicy3E8G4p09MhLZB32OgLu0tQQ7IEI7KdJmWcmHvjVTx8zkLLAaYBXdDUsIpQAb%2FLLoDt3MxYyNKSlYunuoauOJX%2BTPXd9K%2FLWk8VZcagX6N7fS%2B%2B8t5T7wJsEcm3Wod%2Bg2sC5E4a2zDh5N%2Bj2Y3IVB17dj8%2F0nUr7aZDrRiI%2Bswwq%2B5wAY6pgFIXMTLCJA31u7kyt5AqwyG8f5nFTfE2jUvBCvVybiNEi4N5Vtn9%2BQJZAH%2Bub3KgqLHXPnjMYE0HRqS4zQ9aIhuvW%2Fnbh5NXobjOnEoeO%2FAQJXlRs2lc9YW0mYELkz%2F908oX21M%2BoY5vNekzum468RfiO0wQ3UVhsMOKV2TKiUsLvPsdUoXShHMdUDDUy4viFwfzvqlm9DuooS1xRK0PXebpiV0XGeR&X-Amz-Signature=c59b4f79f9b4ae9e19fd538d446afdc3b408bfb8c943df73108d3df7f6c1d9d1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
