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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ3JLXPF%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T121541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH4EAUCvrDmD5kkxJuc%2FOezZD4gUZD2vAfiiJAz2zEl1AiEAswFU%2FcFNur6cq%2B4gFs2Cms%2Bezk328kWitX%2F23ZycGiEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDB0QCIwL6hsoeYQK7CrcAzWDQt6hoYs%2FATSMt2XcrX0%2F2rp30oK%2F7U%2B%2BHi3Ppl%2BNGdheLTqtfY%2FX%2FacqwUEPcwX7X%2FJCjt6n%2FWTW4P%2FAlwTxHNkT3%2FjN%2FeXtEhJlz4AkMXwVX0JO8VP8Dnt4KWE9pn5OseQhGHv6t%2FeMEZcBwk2cVCHBVH4YJrd6rnW8ojrw51R2r97r801HlNQmZ0%2BTkZJdefxFfA4S%2Bbwhqc7QpWIYQeS8w7s3wxpWXpBv%2B8%2BKCzFIxa5IW08RoMiJ2vl6r4gCl9eWJ8PMicFZFasCN181c5G7AR%2FfB77WAGKJxAI9d%2B4a068nuZFwMcEAY4VTKiZi8pprzLS4WMPDkQPgTNZ8YoDRxejJUMXNQ8pnkSQDq7fr1a04MtKvN1obhKtvVdmhiGRzx4wDSkkKmYTVjMtYLNqPQRjDdtGlgzbOhlDiBE5cCzlWLLz17YoHeuhDlOyFqemmURp3qrasFe29EDVhmCQBbtWlF%2Bg7kRY6rzC1Kh9hQqup40w2GLBbFiYRklt%2BnnsgeQuoyav%2FsHMaTDUB0n6nG7RVZ5%2F%2Fx6NTL7vt%2B8aVQ6xaPyd%2FXNBMObRjY9x1x0M5bZ5OiXd%2F%2Bgp2aYvfPPXl7KM2R982vzTicCkstX3TNcVVX8oakQJgMPew8sAGOqUBdS%2BSOpo%2BC09HFUa8Wbq0%2F3cemIZHWsCPEPRMxww8WWEh6sOrwV0GWnTAwaY7uyECGbG%2BQkxz10oQk73bnsfm3j%2FXgjkKin0zROTAZy8e87XEWZAXxaXVN6XnpawPs%2BJNBCxAeaQypQkrEiCQddyNYaEVOroRTIrK2hjHVvFkpYnLI%2B3%2FjzWSnvCNRqGFLqVD6C4y5tBcXACV4S7SOU3NXSH3sB%2BI&X-Amz-Signature=82adb688d9e03c2f9a2febb6483d42317dec0d24c39766a5fe6707094bf046a9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ3JLXPF%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T121541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH4EAUCvrDmD5kkxJuc%2FOezZD4gUZD2vAfiiJAz2zEl1AiEAswFU%2FcFNur6cq%2B4gFs2Cms%2Bezk328kWitX%2F23ZycGiEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDB0QCIwL6hsoeYQK7CrcAzWDQt6hoYs%2FATSMt2XcrX0%2F2rp30oK%2F7U%2B%2BHi3Ppl%2BNGdheLTqtfY%2FX%2FacqwUEPcwX7X%2FJCjt6n%2FWTW4P%2FAlwTxHNkT3%2FjN%2FeXtEhJlz4AkMXwVX0JO8VP8Dnt4KWE9pn5OseQhGHv6t%2FeMEZcBwk2cVCHBVH4YJrd6rnW8ojrw51R2r97r801HlNQmZ0%2BTkZJdefxFfA4S%2Bbwhqc7QpWIYQeS8w7s3wxpWXpBv%2B8%2BKCzFIxa5IW08RoMiJ2vl6r4gCl9eWJ8PMicFZFasCN181c5G7AR%2FfB77WAGKJxAI9d%2B4a068nuZFwMcEAY4VTKiZi8pprzLS4WMPDkQPgTNZ8YoDRxejJUMXNQ8pnkSQDq7fr1a04MtKvN1obhKtvVdmhiGRzx4wDSkkKmYTVjMtYLNqPQRjDdtGlgzbOhlDiBE5cCzlWLLz17YoHeuhDlOyFqemmURp3qrasFe29EDVhmCQBbtWlF%2Bg7kRY6rzC1Kh9hQqup40w2GLBbFiYRklt%2BnnsgeQuoyav%2FsHMaTDUB0n6nG7RVZ5%2F%2Fx6NTL7vt%2B8aVQ6xaPyd%2FXNBMObRjY9x1x0M5bZ5OiXd%2F%2Bgp2aYvfPPXl7KM2R982vzTicCkstX3TNcVVX8oakQJgMPew8sAGOqUBdS%2BSOpo%2BC09HFUa8Wbq0%2F3cemIZHWsCPEPRMxww8WWEh6sOrwV0GWnTAwaY7uyECGbG%2BQkxz10oQk73bnsfm3j%2FXgjkKin0zROTAZy8e87XEWZAXxaXVN6XnpawPs%2BJNBCxAeaQypQkrEiCQddyNYaEVOroRTIrK2hjHVvFkpYnLI%2B3%2FjzWSnvCNRqGFLqVD6C4y5tBcXACV4S7SOU3NXSH3sB%2BI&X-Amz-Signature=7a9f21c5e72cb972fd2cb0e7ed8c8e21ba0ec380c4b5c3118c43c7b3a88ee092&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ3JLXPF%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T121541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH4EAUCvrDmD5kkxJuc%2FOezZD4gUZD2vAfiiJAz2zEl1AiEAswFU%2FcFNur6cq%2B4gFs2Cms%2Bezk328kWitX%2F23ZycGiEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDB0QCIwL6hsoeYQK7CrcAzWDQt6hoYs%2FATSMt2XcrX0%2F2rp30oK%2F7U%2B%2BHi3Ppl%2BNGdheLTqtfY%2FX%2FacqwUEPcwX7X%2FJCjt6n%2FWTW4P%2FAlwTxHNkT3%2FjN%2FeXtEhJlz4AkMXwVX0JO8VP8Dnt4KWE9pn5OseQhGHv6t%2FeMEZcBwk2cVCHBVH4YJrd6rnW8ojrw51R2r97r801HlNQmZ0%2BTkZJdefxFfA4S%2Bbwhqc7QpWIYQeS8w7s3wxpWXpBv%2B8%2BKCzFIxa5IW08RoMiJ2vl6r4gCl9eWJ8PMicFZFasCN181c5G7AR%2FfB77WAGKJxAI9d%2B4a068nuZFwMcEAY4VTKiZi8pprzLS4WMPDkQPgTNZ8YoDRxejJUMXNQ8pnkSQDq7fr1a04MtKvN1obhKtvVdmhiGRzx4wDSkkKmYTVjMtYLNqPQRjDdtGlgzbOhlDiBE5cCzlWLLz17YoHeuhDlOyFqemmURp3qrasFe29EDVhmCQBbtWlF%2Bg7kRY6rzC1Kh9hQqup40w2GLBbFiYRklt%2BnnsgeQuoyav%2FsHMaTDUB0n6nG7RVZ5%2F%2Fx6NTL7vt%2B8aVQ6xaPyd%2FXNBMObRjY9x1x0M5bZ5OiXd%2F%2Bgp2aYvfPPXl7KM2R982vzTicCkstX3TNcVVX8oakQJgMPew8sAGOqUBdS%2BSOpo%2BC09HFUa8Wbq0%2F3cemIZHWsCPEPRMxww8WWEh6sOrwV0GWnTAwaY7uyECGbG%2BQkxz10oQk73bnsfm3j%2FXgjkKin0zROTAZy8e87XEWZAXxaXVN6XnpawPs%2BJNBCxAeaQypQkrEiCQddyNYaEVOroRTIrK2hjHVvFkpYnLI%2B3%2FjzWSnvCNRqGFLqVD6C4y5tBcXACV4S7SOU3NXSH3sB%2BI&X-Amz-Signature=8d5a9bdc84c42c4011f9fbf04366975e58342ecffa85d30bd7bc2dfff9be55ee&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
