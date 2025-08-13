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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6HRA6EH%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD32MjeS8iZr6eIOwGuNHVuWogV19gPed6qxx0gluOMPAIhAO2s772bvXU5KYSGM%2FXUXflgWMbyTc6su3kAnIAOiTw6Kv8DCCQQABoMNjM3NDIzMTgzODA1IgzocjcWRbfaQLLXUGwq3AOuMoAAET01XtxSPjUcKXPuQPHuOeXd6c%2B9v5Q3CMBQb3vFqPbaMF4ODXgCKt32%2FDZTWAZrAdaeGGaRCwEal89GBDn7KGhNqCzKTWWs9D57cy7QQ4yqY2kwXQvktZAiutbTqVxMEFwZSddmnkDCUCRZHq%2FPZILcVtn9S4bCER4YiznKQ6nDNuzzi0nOkQLvlbWZIrDSAU4WsiA1qYgkRWBUHVp%2F51sTc6fbE2z9lY0gxB5ivqAbyB6BDCWQajd6lVhZP04Mud5IkhKr%2BrYvbPmm6zalmKCrUJBcPWbahrJqN5MAYcyeMkRfcgRn8%2BBq9ARl811F6SSSqMiFhu6kPhaKmwf5SAYm3Ej7jnd2XqJ7qZAeBqnE89NTjeI%2BAbBSEYa1k9Uid44Vb2bcEjgQ1LnwwRsP6QrOqzduw87q64TmEOEj7Eq%2BNUjoEGoljXWl5xtRMQP5ANgq3saZrgqoUYnEwvV0icF6tRXW5hpXI7JeBzmYYWyhOApxJbu6LhDhyZT1J%2B19hWcHHN4%2BLFCBx967q3eOojH1pyzeLDFDSlYupz7jGyiHP9JzPMOlSgYMeZVPuNC60LfPoIr0VfK9R76j%2FSJedJ8FGnyNqLa6Mc%2BHLHZgo5iEUJ9o2C05BjDZhfDEBjqkAeE%2FevzEfgxKJn5R%2B0ZiPQ8ahDSHqX58hiMMi06eqXD9L1XcTuCKx9nDf2GVLolQFBT9gF9SNXbC1Qa5CeN8eZQO1yLGZyQNx7mrx1VTCnzf8N05aQMAgJgXoH5byj%2Fq1Wx3gn3wW%2F87gFB5it6OzUn9TJ7JTbs%2BfKo%2FQiXVkv1xWrzwEo%2FERYiFwNjf%2BV7UL7x3Tw3P4yXyy71bjXPahjxPssE1&X-Amz-Signature=8c5e744ae4a4264e468ba4b8d1fb952fcf635cb3e452fc5a96819a5ad47c5a09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6HRA6EH%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD32MjeS8iZr6eIOwGuNHVuWogV19gPed6qxx0gluOMPAIhAO2s772bvXU5KYSGM%2FXUXflgWMbyTc6su3kAnIAOiTw6Kv8DCCQQABoMNjM3NDIzMTgzODA1IgzocjcWRbfaQLLXUGwq3AOuMoAAET01XtxSPjUcKXPuQPHuOeXd6c%2B9v5Q3CMBQb3vFqPbaMF4ODXgCKt32%2FDZTWAZrAdaeGGaRCwEal89GBDn7KGhNqCzKTWWs9D57cy7QQ4yqY2kwXQvktZAiutbTqVxMEFwZSddmnkDCUCRZHq%2FPZILcVtn9S4bCER4YiznKQ6nDNuzzi0nOkQLvlbWZIrDSAU4WsiA1qYgkRWBUHVp%2F51sTc6fbE2z9lY0gxB5ivqAbyB6BDCWQajd6lVhZP04Mud5IkhKr%2BrYvbPmm6zalmKCrUJBcPWbahrJqN5MAYcyeMkRfcgRn8%2BBq9ARl811F6SSSqMiFhu6kPhaKmwf5SAYm3Ej7jnd2XqJ7qZAeBqnE89NTjeI%2BAbBSEYa1k9Uid44Vb2bcEjgQ1LnwwRsP6QrOqzduw87q64TmEOEj7Eq%2BNUjoEGoljXWl5xtRMQP5ANgq3saZrgqoUYnEwvV0icF6tRXW5hpXI7JeBzmYYWyhOApxJbu6LhDhyZT1J%2B19hWcHHN4%2BLFCBx967q3eOojH1pyzeLDFDSlYupz7jGyiHP9JzPMOlSgYMeZVPuNC60LfPoIr0VfK9R76j%2FSJedJ8FGnyNqLa6Mc%2BHLHZgo5iEUJ9o2C05BjDZhfDEBjqkAeE%2FevzEfgxKJn5R%2B0ZiPQ8ahDSHqX58hiMMi06eqXD9L1XcTuCKx9nDf2GVLolQFBT9gF9SNXbC1Qa5CeN8eZQO1yLGZyQNx7mrx1VTCnzf8N05aQMAgJgXoH5byj%2Fq1Wx3gn3wW%2F87gFB5it6OzUn9TJ7JTbs%2BfKo%2FQiXVkv1xWrzwEo%2FERYiFwNjf%2BV7UL7x3Tw3P4yXyy71bjXPahjxPssE1&X-Amz-Signature=2fdf437e7fa9fbbcdf67a0aabc844f75eccafb9fe53d84ef79da80c486a256a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6HRA6EH%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD32MjeS8iZr6eIOwGuNHVuWogV19gPed6qxx0gluOMPAIhAO2s772bvXU5KYSGM%2FXUXflgWMbyTc6su3kAnIAOiTw6Kv8DCCQQABoMNjM3NDIzMTgzODA1IgzocjcWRbfaQLLXUGwq3AOuMoAAET01XtxSPjUcKXPuQPHuOeXd6c%2B9v5Q3CMBQb3vFqPbaMF4ODXgCKt32%2FDZTWAZrAdaeGGaRCwEal89GBDn7KGhNqCzKTWWs9D57cy7QQ4yqY2kwXQvktZAiutbTqVxMEFwZSddmnkDCUCRZHq%2FPZILcVtn9S4bCER4YiznKQ6nDNuzzi0nOkQLvlbWZIrDSAU4WsiA1qYgkRWBUHVp%2F51sTc6fbE2z9lY0gxB5ivqAbyB6BDCWQajd6lVhZP04Mud5IkhKr%2BrYvbPmm6zalmKCrUJBcPWbahrJqN5MAYcyeMkRfcgRn8%2BBq9ARl811F6SSSqMiFhu6kPhaKmwf5SAYm3Ej7jnd2XqJ7qZAeBqnE89NTjeI%2BAbBSEYa1k9Uid44Vb2bcEjgQ1LnwwRsP6QrOqzduw87q64TmEOEj7Eq%2BNUjoEGoljXWl5xtRMQP5ANgq3saZrgqoUYnEwvV0icF6tRXW5hpXI7JeBzmYYWyhOApxJbu6LhDhyZT1J%2B19hWcHHN4%2BLFCBx967q3eOojH1pyzeLDFDSlYupz7jGyiHP9JzPMOlSgYMeZVPuNC60LfPoIr0VfK9R76j%2FSJedJ8FGnyNqLa6Mc%2BHLHZgo5iEUJ9o2C05BjDZhfDEBjqkAeE%2FevzEfgxKJn5R%2B0ZiPQ8ahDSHqX58hiMMi06eqXD9L1XcTuCKx9nDf2GVLolQFBT9gF9SNXbC1Qa5CeN8eZQO1yLGZyQNx7mrx1VTCnzf8N05aQMAgJgXoH5byj%2Fq1Wx3gn3wW%2F87gFB5it6OzUn9TJ7JTbs%2BfKo%2FQiXVkv1xWrzwEo%2FERYiFwNjf%2BV7UL7x3Tw3P4yXyy71bjXPahjxPssE1&X-Amz-Signature=9660915f0855b7ca455a2b223229ff4d22ac7ce261e767f611c6f13d56c2ee11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
