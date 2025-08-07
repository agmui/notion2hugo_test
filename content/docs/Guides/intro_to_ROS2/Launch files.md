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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCL6J57P%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIEJVqrX2F1kCZNGpz%2B8kG07CLYxq8F12DjYz9oSfrx%2FqAiBuT79xEqsXwDw%2FutXlzy8Y0eU%2BZpAbTvjQNvkSG0svQSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5bPPnTVDtdJvmcnKKtwDJSu4kgj8dKymE1MPqS7l0AD0jwxzDoQCmjR8PygwiV%2BToS%2FWZ1ZoZhMc%2B3BOzKTBwtYsWu3vn%2FmyhuGJANjq1Hv8GcZgJABpcnF9UZSeNJwqHo556XBSuJBnrLzq7AWreVvgfhw%2Bf11HYWCBsUkzxJoOpMh5kg3aIuUywxPfgBtfJMcK59mVFUzwJjRNKtrfzHFg6Aw1RAfsJcbqZntsqS32ZYABKtb8QE0CHAIpt6%2FvP3p7Ll%2FyUbGXqS98ZN%2Bvs38JZJs5MGWdfzqM6omT7IIpxMNSduJE%2FHcUbeYgs46IdvTUal9Glolo3PJInMD60sloom30bii3%2BOwXMyWlWvA5r67udX0B5Rr7q9mNYD5JSWU%2BbOJAHxDd5bLHGzO9JDf3BOzx%2FQb4Vrh9%2Fl1GjIKBWHxdxLaQwpBrmHF8X%2FSZiBZtm5l%2FSjlMfGJBos5z%2BWbPPGyePIrJZ7%2FyoSBubfcpiKXmLeJrgJBg8LdEQFjgcV8eluF4YT%2BLP58QsVM7ZCoxjtTnrRjDImTAQkRu4NYsMj9HOMOSawvnqiRmomXHoN8sW%2BngCv3S8ZZGqQYogpy7OKIlblpscp%2Fqk5TzH6L9Q8TR3%2BleoDFkmwlNxRqJPBqP4hORh%2FTCyQEwlrXRxAY6pgFJSZVRLpMYBHUnx%2F5LyBCD%2BhG0no4Iff8H1Jgde89Iy%2BanfL8rAq5OIWw3kSBRRdP9f%2Fc0XvsXtDESqR3DW0VlfyAbq%2B2F9iJSQkSIEBIiJ2rrFpOazJlUpAXMDj9hz%2BGMnypM1R25CFS4adGTXFajNniCqoiYLYdj3HFAeBLN5p02FjkGmt7LXwCAUWLZAeMIwZN4gT8as4lujCLrLDplmZQekVN3&X-Amz-Signature=03fb3086065d62be1ff1f2afb1ff63587882daabf0e3e8ea67458c32fc9e35a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCL6J57P%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIEJVqrX2F1kCZNGpz%2B8kG07CLYxq8F12DjYz9oSfrx%2FqAiBuT79xEqsXwDw%2FutXlzy8Y0eU%2BZpAbTvjQNvkSG0svQSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5bPPnTVDtdJvmcnKKtwDJSu4kgj8dKymE1MPqS7l0AD0jwxzDoQCmjR8PygwiV%2BToS%2FWZ1ZoZhMc%2B3BOzKTBwtYsWu3vn%2FmyhuGJANjq1Hv8GcZgJABpcnF9UZSeNJwqHo556XBSuJBnrLzq7AWreVvgfhw%2Bf11HYWCBsUkzxJoOpMh5kg3aIuUywxPfgBtfJMcK59mVFUzwJjRNKtrfzHFg6Aw1RAfsJcbqZntsqS32ZYABKtb8QE0CHAIpt6%2FvP3p7Ll%2FyUbGXqS98ZN%2Bvs38JZJs5MGWdfzqM6omT7IIpxMNSduJE%2FHcUbeYgs46IdvTUal9Glolo3PJInMD60sloom30bii3%2BOwXMyWlWvA5r67udX0B5Rr7q9mNYD5JSWU%2BbOJAHxDd5bLHGzO9JDf3BOzx%2FQb4Vrh9%2Fl1GjIKBWHxdxLaQwpBrmHF8X%2FSZiBZtm5l%2FSjlMfGJBos5z%2BWbPPGyePIrJZ7%2FyoSBubfcpiKXmLeJrgJBg8LdEQFjgcV8eluF4YT%2BLP58QsVM7ZCoxjtTnrRjDImTAQkRu4NYsMj9HOMOSawvnqiRmomXHoN8sW%2BngCv3S8ZZGqQYogpy7OKIlblpscp%2Fqk5TzH6L9Q8TR3%2BleoDFkmwlNxRqJPBqP4hORh%2FTCyQEwlrXRxAY6pgFJSZVRLpMYBHUnx%2F5LyBCD%2BhG0no4Iff8H1Jgde89Iy%2BanfL8rAq5OIWw3kSBRRdP9f%2Fc0XvsXtDESqR3DW0VlfyAbq%2B2F9iJSQkSIEBIiJ2rrFpOazJlUpAXMDj9hz%2BGMnypM1R25CFS4adGTXFajNniCqoiYLYdj3HFAeBLN5p02FjkGmt7LXwCAUWLZAeMIwZN4gT8as4lujCLrLDplmZQekVN3&X-Amz-Signature=d6f11f639a70f8d327b47dc117d17c4735b8851d1f30461a45b3dd8de2b1eeea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCL6J57P%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIEJVqrX2F1kCZNGpz%2B8kG07CLYxq8F12DjYz9oSfrx%2FqAiBuT79xEqsXwDw%2FutXlzy8Y0eU%2BZpAbTvjQNvkSG0svQSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5bPPnTVDtdJvmcnKKtwDJSu4kgj8dKymE1MPqS7l0AD0jwxzDoQCmjR8PygwiV%2BToS%2FWZ1ZoZhMc%2B3BOzKTBwtYsWu3vn%2FmyhuGJANjq1Hv8GcZgJABpcnF9UZSeNJwqHo556XBSuJBnrLzq7AWreVvgfhw%2Bf11HYWCBsUkzxJoOpMh5kg3aIuUywxPfgBtfJMcK59mVFUzwJjRNKtrfzHFg6Aw1RAfsJcbqZntsqS32ZYABKtb8QE0CHAIpt6%2FvP3p7Ll%2FyUbGXqS98ZN%2Bvs38JZJs5MGWdfzqM6omT7IIpxMNSduJE%2FHcUbeYgs46IdvTUal9Glolo3PJInMD60sloom30bii3%2BOwXMyWlWvA5r67udX0B5Rr7q9mNYD5JSWU%2BbOJAHxDd5bLHGzO9JDf3BOzx%2FQb4Vrh9%2Fl1GjIKBWHxdxLaQwpBrmHF8X%2FSZiBZtm5l%2FSjlMfGJBos5z%2BWbPPGyePIrJZ7%2FyoSBubfcpiKXmLeJrgJBg8LdEQFjgcV8eluF4YT%2BLP58QsVM7ZCoxjtTnrRjDImTAQkRu4NYsMj9HOMOSawvnqiRmomXHoN8sW%2BngCv3S8ZZGqQYogpy7OKIlblpscp%2Fqk5TzH6L9Q8TR3%2BleoDFkmwlNxRqJPBqP4hORh%2FTCyQEwlrXRxAY6pgFJSZVRLpMYBHUnx%2F5LyBCD%2BhG0no4Iff8H1Jgde89Iy%2BanfL8rAq5OIWw3kSBRRdP9f%2Fc0XvsXtDESqR3DW0VlfyAbq%2B2F9iJSQkSIEBIiJ2rrFpOazJlUpAXMDj9hz%2BGMnypM1R25CFS4adGTXFajNniCqoiYLYdj3HFAeBLN5p02FjkGmt7LXwCAUWLZAeMIwZN4gT8as4lujCLrLDplmZQekVN3&X-Amz-Signature=e82c12ba3f623b582d2097feea8586e12db02cd0bf34c0d2ba12dcbe8734c23e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
