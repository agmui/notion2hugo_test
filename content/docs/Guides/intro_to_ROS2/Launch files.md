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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YI52DHL%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCG5Ah%2FVWLxXc3m5ErCqyTwb6GsnjXOd5Y9ZjhsQEFhsAIgfTJ8QK1BL%2BGRgM9pgjn6HR1F2jL9qkd6G%2BLWI1CxGzsq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDJ02Wek8A7EkTDqX9SrcAzifCYlwz5ZjLZka%2FNVdt%2ButZiJEpwE5Nw%2BZlelOSTvlUZzWA4gjN6gILmhmn%2BxVu6n2i%2BL1LTZHKEqQm6XoWpaj5Tn3lb6yPU4S9V5wihdjD4npHPxaUBvrQmIn1L01RjOC2zCTHN8RwiWSiJ69Vviv9nXa4KQi5Ever%2Bv7pxhSKSJMbRgCquMLM6t8F3Tq1CGF%2Ffv85bT7EPFkvBvVKONdBkbneC5RFWjI4ZeLYKg0gT3QBA5sZaZ7%2FnxaGpwlWXGbMqO3utqNCPJad5GAziIOk6dXy0lyERAhUHHYRkRa%2FaHK4OR2U5CMOg35HSE%2BPcQdUGyAjuHZFiNSSojKfCTilOqFfmdVdYJwKqz01IDzVjcMmMPHW9Bd6qZqRRQgV1Zy%2FGr4orTrhheZGFBTEAxZSSI9Fq0Bzka8DtJrvwe0PRwFu5TQbfCATZewepOhTPG7%2FgYYGQx5IudBiW4AWsIevzdsGgeJstuzUvFmv3ORy7QvGB8RDDahrtpLuSlFWOcgf3iWzQTgmShpZIAR8UGaS9nF21GrzWvyxU241REa7kVOhWbjsB%2BEOfiLeA%2BZy8bdvvN9K6HjLo3aSN3LW9k5Ru4ZUAdoPIKVG5YfQ3Bam5Epi%2BOu1PNXpiuqMMDY%2FsQGOqUBPNfpvloAMCRRhQJQOpF39UAYzJpOJzCJailzErYzHi2GfdLzYJKJsUotCdkXJeVwDLjLPcsIG6Tk%2Fdjc7iz2h8uFovO2E0Qpcr04%2FLyNbeB0vB3d%2FRcvvnTxlha845jif1MIKg5RHU7CU1RrCGl9VAch44DyEGVm8SUYx3fFEYCJIPUX80vbqfe%2BYI8zADlvdqogsnvyGmMjQ0boS7CT7o9LD%2BYE&X-Amz-Signature=6bcc3e06cf10a59ac86d1fb548c7283f27797e4741f67c9df060e1dcb75e514f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YI52DHL%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCG5Ah%2FVWLxXc3m5ErCqyTwb6GsnjXOd5Y9ZjhsQEFhsAIgfTJ8QK1BL%2BGRgM9pgjn6HR1F2jL9qkd6G%2BLWI1CxGzsq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDJ02Wek8A7EkTDqX9SrcAzifCYlwz5ZjLZka%2FNVdt%2ButZiJEpwE5Nw%2BZlelOSTvlUZzWA4gjN6gILmhmn%2BxVu6n2i%2BL1LTZHKEqQm6XoWpaj5Tn3lb6yPU4S9V5wihdjD4npHPxaUBvrQmIn1L01RjOC2zCTHN8RwiWSiJ69Vviv9nXa4KQi5Ever%2Bv7pxhSKSJMbRgCquMLM6t8F3Tq1CGF%2Ffv85bT7EPFkvBvVKONdBkbneC5RFWjI4ZeLYKg0gT3QBA5sZaZ7%2FnxaGpwlWXGbMqO3utqNCPJad5GAziIOk6dXy0lyERAhUHHYRkRa%2FaHK4OR2U5CMOg35HSE%2BPcQdUGyAjuHZFiNSSojKfCTilOqFfmdVdYJwKqz01IDzVjcMmMPHW9Bd6qZqRRQgV1Zy%2FGr4orTrhheZGFBTEAxZSSI9Fq0Bzka8DtJrvwe0PRwFu5TQbfCATZewepOhTPG7%2FgYYGQx5IudBiW4AWsIevzdsGgeJstuzUvFmv3ORy7QvGB8RDDahrtpLuSlFWOcgf3iWzQTgmShpZIAR8UGaS9nF21GrzWvyxU241REa7kVOhWbjsB%2BEOfiLeA%2BZy8bdvvN9K6HjLo3aSN3LW9k5Ru4ZUAdoPIKVG5YfQ3Bam5Epi%2BOu1PNXpiuqMMDY%2FsQGOqUBPNfpvloAMCRRhQJQOpF39UAYzJpOJzCJailzErYzHi2GfdLzYJKJsUotCdkXJeVwDLjLPcsIG6Tk%2Fdjc7iz2h8uFovO2E0Qpcr04%2FLyNbeB0vB3d%2FRcvvnTxlha845jif1MIKg5RHU7CU1RrCGl9VAch44DyEGVm8SUYx3fFEYCJIPUX80vbqfe%2BYI8zADlvdqogsnvyGmMjQ0boS7CT7o9LD%2BYE&X-Amz-Signature=c0ec5087c7133a430f57b235346aa8598fade47b83a0075e8b6afe1596794872&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YI52DHL%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCG5Ah%2FVWLxXc3m5ErCqyTwb6GsnjXOd5Y9ZjhsQEFhsAIgfTJ8QK1BL%2BGRgM9pgjn6HR1F2jL9qkd6G%2BLWI1CxGzsq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDJ02Wek8A7EkTDqX9SrcAzifCYlwz5ZjLZka%2FNVdt%2ButZiJEpwE5Nw%2BZlelOSTvlUZzWA4gjN6gILmhmn%2BxVu6n2i%2BL1LTZHKEqQm6XoWpaj5Tn3lb6yPU4S9V5wihdjD4npHPxaUBvrQmIn1L01RjOC2zCTHN8RwiWSiJ69Vviv9nXa4KQi5Ever%2Bv7pxhSKSJMbRgCquMLM6t8F3Tq1CGF%2Ffv85bT7EPFkvBvVKONdBkbneC5RFWjI4ZeLYKg0gT3QBA5sZaZ7%2FnxaGpwlWXGbMqO3utqNCPJad5GAziIOk6dXy0lyERAhUHHYRkRa%2FaHK4OR2U5CMOg35HSE%2BPcQdUGyAjuHZFiNSSojKfCTilOqFfmdVdYJwKqz01IDzVjcMmMPHW9Bd6qZqRRQgV1Zy%2FGr4orTrhheZGFBTEAxZSSI9Fq0Bzka8DtJrvwe0PRwFu5TQbfCATZewepOhTPG7%2FgYYGQx5IudBiW4AWsIevzdsGgeJstuzUvFmv3ORy7QvGB8RDDahrtpLuSlFWOcgf3iWzQTgmShpZIAR8UGaS9nF21GrzWvyxU241REa7kVOhWbjsB%2BEOfiLeA%2BZy8bdvvN9K6HjLo3aSN3LW9k5Ru4ZUAdoPIKVG5YfQ3Bam5Epi%2BOu1PNXpiuqMMDY%2FsQGOqUBPNfpvloAMCRRhQJQOpF39UAYzJpOJzCJailzErYzHi2GfdLzYJKJsUotCdkXJeVwDLjLPcsIG6Tk%2Fdjc7iz2h8uFovO2E0Qpcr04%2FLyNbeB0vB3d%2FRcvvnTxlha845jif1MIKg5RHU7CU1RrCGl9VAch44DyEGVm8SUYx3fFEYCJIPUX80vbqfe%2BYI8zADlvdqogsnvyGmMjQ0boS7CT7o9LD%2BYE&X-Amz-Signature=42fd7f0807e0fe6d9cfe3e4635d74419966722d79d4c966415f9fdcf91c601b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
