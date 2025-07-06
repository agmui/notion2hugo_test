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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQZQUFHW%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIGcH799kKLt%2BT%2Fgw76KENJ2VoxL%2F8Y8hXeHUCqwfyHEyAiEAlMBT%2BUPFtHZcDz2e2MOkey9M6LWaOWu8B2fyuL2L%2F%2F8q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDBhetuSJ91%2FyNxSbFyrcA%2Fh9%2BO2mEwqtcr7ca%2FcWudpF1KKfvx3ed%2FfhAG75TohBVRRU6AxUfaz2TmJzV%2FC%2Frzt5ErrzaHVQk%2FoT0G3TyZet74eGiq9NymIKZ26oaXKGjbB8pg1sHuF1Q%2B9zgfem62jGlj0tBwXchvbQOE0ca%2Bq5%2B78leCUw4LTtJox%2Fgb7G%2FvAvmrL1nKzpv8IKvbBImXnTxHKLbrHEC8DKIA2x1HHO5JoCaCMeYb%2BQKINrapDVLcYD6VsRIwqwz9yCq94gT1X%2Fni2ffcfhD%2B8nVPhtrQ%2B5mA4Rqovpbwh7HP57QnM58BUZsdDs%2B43ip%2FD7ALIchSW%2BJ6h3Sjkom271zfu0j9TM%2F09aoR1Rmpt1WDns2eXC2pKMHMR4SRhDqzzPcSsFvPG%2FakGFA444eBb3NPH30N3L7p1CbJ7NBvcu18ORJaQ3dr%2B4UV33bPHF839uax5WP1EDyVFl6PjbAFFTPFwvSCita6JuH8uFVoZcKY%2Bd6qt%2FPjLoAnhouqBJVxF0w8SxapOAiELLMPoZaXLUhVcIukLZpA6v2xHopSpJNoNq%2BEq8wZnAIfOxGuk%2Ff3TqeMLTUpi0oRKqgIm5F0Ms3MvouHs42Crv7gqOuXShlLYzVGhCWPKg6g14zGqAWBbqMJveqsMGOqUBuumdcEHl0p84QsosvnsGlQSr9%2F6QdVAlaSaKi3e%2BZhOIk6Cfv1Qd%2FAy8Z2lKxtwMTCXKqcCfd8Qumci35Lu8ZxdU1XgtHvvmwh0aRkqrhEerfNVWAb9F35JbB1JJZRgq1jiW%2F4WxdR%2BjUXqaoXARgoMKqpkpwBD%2Fg3s80WI%2BBGIjye49UOBvfaMZrojW6EEFK%2BFAXBdpuTYAlQVeFh6JAW%2BFPUio&X-Amz-Signature=0a0990ce99b4052391d026e86f7085f71b5804435bde2922aee66fc34e4d8270&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQZQUFHW%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIGcH799kKLt%2BT%2Fgw76KENJ2VoxL%2F8Y8hXeHUCqwfyHEyAiEAlMBT%2BUPFtHZcDz2e2MOkey9M6LWaOWu8B2fyuL2L%2F%2F8q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDBhetuSJ91%2FyNxSbFyrcA%2Fh9%2BO2mEwqtcr7ca%2FcWudpF1KKfvx3ed%2FfhAG75TohBVRRU6AxUfaz2TmJzV%2FC%2Frzt5ErrzaHVQk%2FoT0G3TyZet74eGiq9NymIKZ26oaXKGjbB8pg1sHuF1Q%2B9zgfem62jGlj0tBwXchvbQOE0ca%2Bq5%2B78leCUw4LTtJox%2Fgb7G%2FvAvmrL1nKzpv8IKvbBImXnTxHKLbrHEC8DKIA2x1HHO5JoCaCMeYb%2BQKINrapDVLcYD6VsRIwqwz9yCq94gT1X%2Fni2ffcfhD%2B8nVPhtrQ%2B5mA4Rqovpbwh7HP57QnM58BUZsdDs%2B43ip%2FD7ALIchSW%2BJ6h3Sjkom271zfu0j9TM%2F09aoR1Rmpt1WDns2eXC2pKMHMR4SRhDqzzPcSsFvPG%2FakGFA444eBb3NPH30N3L7p1CbJ7NBvcu18ORJaQ3dr%2B4UV33bPHF839uax5WP1EDyVFl6PjbAFFTPFwvSCita6JuH8uFVoZcKY%2Bd6qt%2FPjLoAnhouqBJVxF0w8SxapOAiELLMPoZaXLUhVcIukLZpA6v2xHopSpJNoNq%2BEq8wZnAIfOxGuk%2Ff3TqeMLTUpi0oRKqgIm5F0Ms3MvouHs42Crv7gqOuXShlLYzVGhCWPKg6g14zGqAWBbqMJveqsMGOqUBuumdcEHl0p84QsosvnsGlQSr9%2F6QdVAlaSaKi3e%2BZhOIk6Cfv1Qd%2FAy8Z2lKxtwMTCXKqcCfd8Qumci35Lu8ZxdU1XgtHvvmwh0aRkqrhEerfNVWAb9F35JbB1JJZRgq1jiW%2F4WxdR%2BjUXqaoXARgoMKqpkpwBD%2Fg3s80WI%2BBGIjye49UOBvfaMZrojW6EEFK%2BFAXBdpuTYAlQVeFh6JAW%2BFPUio&X-Amz-Signature=1da8f439b8f51eecf55d0523828e88ec66634688eb7596fd743edca32ae58011&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQZQUFHW%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIGcH799kKLt%2BT%2Fgw76KENJ2VoxL%2F8Y8hXeHUCqwfyHEyAiEAlMBT%2BUPFtHZcDz2e2MOkey9M6LWaOWu8B2fyuL2L%2F%2F8q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDBhetuSJ91%2FyNxSbFyrcA%2Fh9%2BO2mEwqtcr7ca%2FcWudpF1KKfvx3ed%2FfhAG75TohBVRRU6AxUfaz2TmJzV%2FC%2Frzt5ErrzaHVQk%2FoT0G3TyZet74eGiq9NymIKZ26oaXKGjbB8pg1sHuF1Q%2B9zgfem62jGlj0tBwXchvbQOE0ca%2Bq5%2B78leCUw4LTtJox%2Fgb7G%2FvAvmrL1nKzpv8IKvbBImXnTxHKLbrHEC8DKIA2x1HHO5JoCaCMeYb%2BQKINrapDVLcYD6VsRIwqwz9yCq94gT1X%2Fni2ffcfhD%2B8nVPhtrQ%2B5mA4Rqovpbwh7HP57QnM58BUZsdDs%2B43ip%2FD7ALIchSW%2BJ6h3Sjkom271zfu0j9TM%2F09aoR1Rmpt1WDns2eXC2pKMHMR4SRhDqzzPcSsFvPG%2FakGFA444eBb3NPH30N3L7p1CbJ7NBvcu18ORJaQ3dr%2B4UV33bPHF839uax5WP1EDyVFl6PjbAFFTPFwvSCita6JuH8uFVoZcKY%2Bd6qt%2FPjLoAnhouqBJVxF0w8SxapOAiELLMPoZaXLUhVcIukLZpA6v2xHopSpJNoNq%2BEq8wZnAIfOxGuk%2Ff3TqeMLTUpi0oRKqgIm5F0Ms3MvouHs42Crv7gqOuXShlLYzVGhCWPKg6g14zGqAWBbqMJveqsMGOqUBuumdcEHl0p84QsosvnsGlQSr9%2F6QdVAlaSaKi3e%2BZhOIk6Cfv1Qd%2FAy8Z2lKxtwMTCXKqcCfd8Qumci35Lu8ZxdU1XgtHvvmwh0aRkqrhEerfNVWAb9F35JbB1JJZRgq1jiW%2F4WxdR%2BjUXqaoXARgoMKqpkpwBD%2Fg3s80WI%2BBGIjye49UOBvfaMZrojW6EEFK%2BFAXBdpuTYAlQVeFh6JAW%2BFPUio&X-Amz-Signature=891717f829c8be33710e29532a161d65115b17893f706177301f71f9e5c0f64c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
