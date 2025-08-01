---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XNGYYWA%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPkbYZLohOBEjCYL%2FYBimzgEdYLx%2BL%2Fg5JO86JVOARKAiEA85Ohd%2Bam6gsCz00QefgziQmTHadx5ZeXos%2FJUktDUvkqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAK1nQ%2B4pUEyA1ghDCrcA9G1pBhPRuKAcw4Px3V6uG3M9JVq6G8smf2DFLpZf1ZYe8n2sbcWJFy%2BKbJ6GleUeyfxZK2TxHhKUzeLX3GwNmoxWT3fOD0zqTF5yeQ6GbITsSrXAr3J4BPH8fkhMZWgoJE8ook48An%2BjnRimT%2B%2BIYpICc21Dh%2BzqD8PWGZRHgqljhlowH6OCE1krfeG4hP0tsox4E1dSSgA0RhoZJOw46tx%2BPDw1vGSTheUins3uwmntNcf%2BtEzmME5lmz9O5eHSpK2hzYyEmkaQ1bETfmpUWGwyeHFm%2FsX4IPZ7xfz79fWyJCVKm8XnbfabXXjGuAAwItrtUg2Bfnaqy9xRZSRwtA6d5171B54zx%2BJKsV8dfi8c4oZGcl9%2Ftb98cIRLRWu9gBbyVfhWXoO9LUkEO54JNf87MgJ8Yb152Fvrn1CD3yW6WGlk9aKNwx9n9iqP%2F2agMcMu0K8khc%2FSDiBpnEGh8qywJAtTthidCvQbOfy4zEvZ15XQ66ttA%2BufSeG0pCSn5C3TFvTo0g7pdaWHBSrNz%2Fwc9NQ87NY5MAQIshNKO6A%2FehPDFZ8FTU8Cb9%2BAj8bDolLZ1dgpo%2FYyxCLQmwjeZNoArkflogJhBGOZPeO7FdE2qc4eJbpqrGX3P%2FUMPTsscQGOqUB3Hlvs%2Bg%2BVwJgL5XnfXo3jZpRJGhYzu8gesxvyaF%2Bp0LJ0E1PAJ%2FP1IzjiwnlNkd7UhGZ3G9T8TtPIFb1wj%2B1tXAF71zu78TOp3H%2Bw%2BxtTFThhJNpvZVx4zT42x2laP9guULTaORYxTCQuYqyhRXKknqg6frWk8HDAtXz8i4LDj3%2FaGYoLXLOJGkt9G3Mq%2FcyILk9FQcbhT95XpMhrUS7PAA0zrNf&X-Amz-Signature=6229ffb73edf98501d209b67e8769cc3ed70bddd68132c938fcbc6bf14797012&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XNGYYWA%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPkbYZLohOBEjCYL%2FYBimzgEdYLx%2BL%2Fg5JO86JVOARKAiEA85Ohd%2Bam6gsCz00QefgziQmTHadx5ZeXos%2FJUktDUvkqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAK1nQ%2B4pUEyA1ghDCrcA9G1pBhPRuKAcw4Px3V6uG3M9JVq6G8smf2DFLpZf1ZYe8n2sbcWJFy%2BKbJ6GleUeyfxZK2TxHhKUzeLX3GwNmoxWT3fOD0zqTF5yeQ6GbITsSrXAr3J4BPH8fkhMZWgoJE8ook48An%2BjnRimT%2B%2BIYpICc21Dh%2BzqD8PWGZRHgqljhlowH6OCE1krfeG4hP0tsox4E1dSSgA0RhoZJOw46tx%2BPDw1vGSTheUins3uwmntNcf%2BtEzmME5lmz9O5eHSpK2hzYyEmkaQ1bETfmpUWGwyeHFm%2FsX4IPZ7xfz79fWyJCVKm8XnbfabXXjGuAAwItrtUg2Bfnaqy9xRZSRwtA6d5171B54zx%2BJKsV8dfi8c4oZGcl9%2Ftb98cIRLRWu9gBbyVfhWXoO9LUkEO54JNf87MgJ8Yb152Fvrn1CD3yW6WGlk9aKNwx9n9iqP%2F2agMcMu0K8khc%2FSDiBpnEGh8qywJAtTthidCvQbOfy4zEvZ15XQ66ttA%2BufSeG0pCSn5C3TFvTo0g7pdaWHBSrNz%2Fwc9NQ87NY5MAQIshNKO6A%2FehPDFZ8FTU8Cb9%2BAj8bDolLZ1dgpo%2FYyxCLQmwjeZNoArkflogJhBGOZPeO7FdE2qc4eJbpqrGX3P%2FUMPTsscQGOqUB3Hlvs%2Bg%2BVwJgL5XnfXo3jZpRJGhYzu8gesxvyaF%2Bp0LJ0E1PAJ%2FP1IzjiwnlNkd7UhGZ3G9T8TtPIFb1wj%2B1tXAF71zu78TOp3H%2Bw%2BxtTFThhJNpvZVx4zT42x2laP9guULTaORYxTCQuYqyhRXKknqg6frWk8HDAtXz8i4LDj3%2FaGYoLXLOJGkt9G3Mq%2FcyILk9FQcbhT95XpMhrUS7PAA0zrNf&X-Amz-Signature=404d7a8545098a1baeaaead48a1db2a9691ee2d25c0fe40745266fd2b1687d7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XNGYYWA%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPkbYZLohOBEjCYL%2FYBimzgEdYLx%2BL%2Fg5JO86JVOARKAiEA85Ohd%2Bam6gsCz00QefgziQmTHadx5ZeXos%2FJUktDUvkqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAK1nQ%2B4pUEyA1ghDCrcA9G1pBhPRuKAcw4Px3V6uG3M9JVq6G8smf2DFLpZf1ZYe8n2sbcWJFy%2BKbJ6GleUeyfxZK2TxHhKUzeLX3GwNmoxWT3fOD0zqTF5yeQ6GbITsSrXAr3J4BPH8fkhMZWgoJE8ook48An%2BjnRimT%2B%2BIYpICc21Dh%2BzqD8PWGZRHgqljhlowH6OCE1krfeG4hP0tsox4E1dSSgA0RhoZJOw46tx%2BPDw1vGSTheUins3uwmntNcf%2BtEzmME5lmz9O5eHSpK2hzYyEmkaQ1bETfmpUWGwyeHFm%2FsX4IPZ7xfz79fWyJCVKm8XnbfabXXjGuAAwItrtUg2Bfnaqy9xRZSRwtA6d5171B54zx%2BJKsV8dfi8c4oZGcl9%2Ftb98cIRLRWu9gBbyVfhWXoO9LUkEO54JNf87MgJ8Yb152Fvrn1CD3yW6WGlk9aKNwx9n9iqP%2F2agMcMu0K8khc%2FSDiBpnEGh8qywJAtTthidCvQbOfy4zEvZ15XQ66ttA%2BufSeG0pCSn5C3TFvTo0g7pdaWHBSrNz%2Fwc9NQ87NY5MAQIshNKO6A%2FehPDFZ8FTU8Cb9%2BAj8bDolLZ1dgpo%2FYyxCLQmwjeZNoArkflogJhBGOZPeO7FdE2qc4eJbpqrGX3P%2FUMPTsscQGOqUB3Hlvs%2Bg%2BVwJgL5XnfXo3jZpRJGhYzu8gesxvyaF%2Bp0LJ0E1PAJ%2FP1IzjiwnlNkd7UhGZ3G9T8TtPIFb1wj%2B1tXAF71zu78TOp3H%2Bw%2BxtTFThhJNpvZVx4zT42x2laP9guULTaORYxTCQuYqyhRXKknqg6frWk8HDAtXz8i4LDj3%2FaGYoLXLOJGkt9G3Mq%2FcyILk9FQcbhT95XpMhrUS7PAA0zrNf&X-Amz-Signature=e20e31300196a8a24b66be1d8a6c20e6c141e40185aa9dc2d53ccb99901748d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
