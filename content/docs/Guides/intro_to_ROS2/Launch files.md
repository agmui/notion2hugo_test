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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU4MJ4VP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIBG6DLDKgFi7hn5qKUtOF5LGRpi65bkxmuYc44q%2FV1SpAiBTdBT4O9awudOtbswyfDkd3U38cfnhJvk90PA6B0d3Yir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMsRzLcJTToUm3QnN7KtwDCNUl1%2FkqGSgkzz%2F8kZcR61A0giQ%2BC9LIUKyht2z79EXm4FF%2FMg8R9qbVOeQpGpXhsLehtc2C6vTjWNElpGRR4sFc2uG0CXpdGMZFoYwiQpuN9Q72q3K2IIAU8fd6Ir0huike5AbtC3Ry4XrJyclm3hvUtaQkbA3nR3A7P%2BXS%2BWWCKsCBVPaT51l0MR3yekbIBDraq8jIprwsYv5LmXJlzmdSizy8cYuEkNe%2BsqugPE9BkMYhH80iNvQmiwvuVagzb0ChjjErssOpU3x24RxzjSZ40wyCYcrdRWGry9oh%2FobjCCkE76pWiB9DIwEPPFyTKEmxoEv3F%2B0jH8cInLmgOJSTcpvmM1nlM%2FSdwEYLtelNA5GryHyCpUHy2I2%2FzLIXmKs4f%2BWNcp0bam%2B52EgFbZR%2B%2BgYeBpJZUGfOKUf9zRBOjIqekYBOJqJZL3sjbyiMIfcdHLdFHhrjkexd3BTNy%2Fg83ddTqM4a6slf%2BlSCdIyJxtq1xbtL9yClc5qsmjULtj2OS%2F4%2FvJTUfOKTyPaBP3qZ9S0v%2F0T9Fzo28HVs5fVW%2BEIwii91m2J1H5xI20WuXHNct4Nx6bxhI4x0S%2FrweEZWEdbixYS%2FmGp2x0iBIj%2BT269IXnNTdHwLltMwyO77xAY6pgHiYeJa%2BtBHhgENhqaFVXowTZ0DR7azlKDVnWupG1XAD7oQ4Wpfqtiru7msY3pmwWDUi9Wn%2Fw4Dj6%2FUj2kzciRQ%2FPDUMv8ReeEVEBvXcGlOYePSx9a3I20keY%2Bk3RKKfjaVaLxuQdGnUlAanFfkUzm9yCQHdu6rqgpx0vBxmNPM13oOZYUoE8vJnBQKPwi1y8BElzd0IlzKEf0%2Fe6gVCGJOyTl3M1cQ&X-Amz-Signature=ec7f91107d6bdb22cc74cc04c82133c4d109891cec711760cb05a9da6f82360f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU4MJ4VP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIBG6DLDKgFi7hn5qKUtOF5LGRpi65bkxmuYc44q%2FV1SpAiBTdBT4O9awudOtbswyfDkd3U38cfnhJvk90PA6B0d3Yir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMsRzLcJTToUm3QnN7KtwDCNUl1%2FkqGSgkzz%2F8kZcR61A0giQ%2BC9LIUKyht2z79EXm4FF%2FMg8R9qbVOeQpGpXhsLehtc2C6vTjWNElpGRR4sFc2uG0CXpdGMZFoYwiQpuN9Q72q3K2IIAU8fd6Ir0huike5AbtC3Ry4XrJyclm3hvUtaQkbA3nR3A7P%2BXS%2BWWCKsCBVPaT51l0MR3yekbIBDraq8jIprwsYv5LmXJlzmdSizy8cYuEkNe%2BsqugPE9BkMYhH80iNvQmiwvuVagzb0ChjjErssOpU3x24RxzjSZ40wyCYcrdRWGry9oh%2FobjCCkE76pWiB9DIwEPPFyTKEmxoEv3F%2B0jH8cInLmgOJSTcpvmM1nlM%2FSdwEYLtelNA5GryHyCpUHy2I2%2FzLIXmKs4f%2BWNcp0bam%2B52EgFbZR%2B%2BgYeBpJZUGfOKUf9zRBOjIqekYBOJqJZL3sjbyiMIfcdHLdFHhrjkexd3BTNy%2Fg83ddTqM4a6slf%2BlSCdIyJxtq1xbtL9yClc5qsmjULtj2OS%2F4%2FvJTUfOKTyPaBP3qZ9S0v%2F0T9Fzo28HVs5fVW%2BEIwii91m2J1H5xI20WuXHNct4Nx6bxhI4x0S%2FrweEZWEdbixYS%2FmGp2x0iBIj%2BT269IXnNTdHwLltMwyO77xAY6pgHiYeJa%2BtBHhgENhqaFVXowTZ0DR7azlKDVnWupG1XAD7oQ4Wpfqtiru7msY3pmwWDUi9Wn%2Fw4Dj6%2FUj2kzciRQ%2FPDUMv8ReeEVEBvXcGlOYePSx9a3I20keY%2Bk3RKKfjaVaLxuQdGnUlAanFfkUzm9yCQHdu6rqgpx0vBxmNPM13oOZYUoE8vJnBQKPwi1y8BElzd0IlzKEf0%2Fe6gVCGJOyTl3M1cQ&X-Amz-Signature=4fad52636c5a99b54725d977789cb691dc5e382d92f51ae7722b8227cc8cc364&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU4MJ4VP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIBG6DLDKgFi7hn5qKUtOF5LGRpi65bkxmuYc44q%2FV1SpAiBTdBT4O9awudOtbswyfDkd3U38cfnhJvk90PA6B0d3Yir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMsRzLcJTToUm3QnN7KtwDCNUl1%2FkqGSgkzz%2F8kZcR61A0giQ%2BC9LIUKyht2z79EXm4FF%2FMg8R9qbVOeQpGpXhsLehtc2C6vTjWNElpGRR4sFc2uG0CXpdGMZFoYwiQpuN9Q72q3K2IIAU8fd6Ir0huike5AbtC3Ry4XrJyclm3hvUtaQkbA3nR3A7P%2BXS%2BWWCKsCBVPaT51l0MR3yekbIBDraq8jIprwsYv5LmXJlzmdSizy8cYuEkNe%2BsqugPE9BkMYhH80iNvQmiwvuVagzb0ChjjErssOpU3x24RxzjSZ40wyCYcrdRWGry9oh%2FobjCCkE76pWiB9DIwEPPFyTKEmxoEv3F%2B0jH8cInLmgOJSTcpvmM1nlM%2FSdwEYLtelNA5GryHyCpUHy2I2%2FzLIXmKs4f%2BWNcp0bam%2B52EgFbZR%2B%2BgYeBpJZUGfOKUf9zRBOjIqekYBOJqJZL3sjbyiMIfcdHLdFHhrjkexd3BTNy%2Fg83ddTqM4a6slf%2BlSCdIyJxtq1xbtL9yClc5qsmjULtj2OS%2F4%2FvJTUfOKTyPaBP3qZ9S0v%2F0T9Fzo28HVs5fVW%2BEIwii91m2J1H5xI20WuXHNct4Nx6bxhI4x0S%2FrweEZWEdbixYS%2FmGp2x0iBIj%2BT269IXnNTdHwLltMwyO77xAY6pgHiYeJa%2BtBHhgENhqaFVXowTZ0DR7azlKDVnWupG1XAD7oQ4Wpfqtiru7msY3pmwWDUi9Wn%2Fw4Dj6%2FUj2kzciRQ%2FPDUMv8ReeEVEBvXcGlOYePSx9a3I20keY%2Bk3RKKfjaVaLxuQdGnUlAanFfkUzm9yCQHdu6rqgpx0vBxmNPM13oOZYUoE8vJnBQKPwi1y8BElzd0IlzKEf0%2Fe6gVCGJOyTl3M1cQ&X-Amz-Signature=0a8475d06638763fbc801439930c82ea05ee0e56cb3f7168a1243957218becf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
