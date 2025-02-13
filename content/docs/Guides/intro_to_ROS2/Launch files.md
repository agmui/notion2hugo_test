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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCJ2ZOC2%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T110331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3WWrPVj3RmzUuzHD%2BTheppK33tzSODnRIFdIydH99UgIhAI0X4wOP%2FL1ATk15ZjL6lTJP5ReQniecjRWyYltKuyAIKv8DCBQQABoMNjM3NDIzMTgzODA1IgyG%2BlVwWORPt8Q44F8q3ANk2w%2Fiv%2FFPzXLa9Ce8w4Sg2KVGJ9m0qDZw%2FO8ehGmAMMOHL2pSi94sZ4UF2%2Fc62JqqnK2kqXTlARGK6vttXqjDXNd7DyJ3RPctuPyBzKCP9duL5LMC0eldpvVlGFgrv4YjeyhStMhaJUCDSJMOTnVwUsibjHY7vJMP56JggxzfN%2BdLTzqTlI9QdL7zb9ey4c%2BqdPfyHL5QqfU8zfW2NdTFZ1Z4i%2FXaCytzYtVUBuMZZhxv2pfwjjI%2F9Qu8y0Zfixy7Gcc6R6rgNJhKY9bGEeCv9qs%2B5Gr9y2ZeUvHRxUQgHkiF%2BpOmkyu7n%2F2Pm7g31jHnFuHoKsI3Jl6Nn%2B6wrrQKPLDU9Xp9dOzMR%2Fd8o7g%2BT2Bk3XhKQL9FJGecPmaGFc83LIIIABICZTHEhSe0JTSa%2FZcglbR9vDPgpHKlH11QtpIxr5dYMadJag%2FcuvV6K4iAYpWvnms6qpVjIei0AdhOSwEGbTN%2FB8xNb3DaRiQ4InxdWH1sowqyaBmunWN%2F%2FR8%2Bi4OcNLfy426%2FJ%2B35DXhgltmGzeOkjr%2BT3UW5PbB6Lx3vY45D5E%2BHOQeV%2FTfipunFvB7QvZrFRR7qTr4i6S0w3EUBRe13aDxgt3tmy%2BSRxzrcX5bILMzoxno7dDCDore9BjqkAfdkKA5movZeZkSltDUo4pLrBdaxdSPLhJ%2FaFHDykTDJVv2DdDzz%2FfHTV2Njiq25PiOcWLLz41KfxCB4476ostx9v4EdEfk4pu0qqGfKEcNfzyjRO74uCd%2FXkzyzUgna2R7ynCiYYY8aYyifv8iz3JrJ3EVIWEZvkka1BkAUNYUOg1QU1lRtVS5MoL0YTA1KoeJPCis1n4oykb695fD%2F61lmr7ew&X-Amz-Signature=4f4bd25c1b808c3aeccea4e33e517364b33277fa1038c1581f7c5dcaf3691e82&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCJ2ZOC2%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T110331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3WWrPVj3RmzUuzHD%2BTheppK33tzSODnRIFdIydH99UgIhAI0X4wOP%2FL1ATk15ZjL6lTJP5ReQniecjRWyYltKuyAIKv8DCBQQABoMNjM3NDIzMTgzODA1IgyG%2BlVwWORPt8Q44F8q3ANk2w%2Fiv%2FFPzXLa9Ce8w4Sg2KVGJ9m0qDZw%2FO8ehGmAMMOHL2pSi94sZ4UF2%2Fc62JqqnK2kqXTlARGK6vttXqjDXNd7DyJ3RPctuPyBzKCP9duL5LMC0eldpvVlGFgrv4YjeyhStMhaJUCDSJMOTnVwUsibjHY7vJMP56JggxzfN%2BdLTzqTlI9QdL7zb9ey4c%2BqdPfyHL5QqfU8zfW2NdTFZ1Z4i%2FXaCytzYtVUBuMZZhxv2pfwjjI%2F9Qu8y0Zfixy7Gcc6R6rgNJhKY9bGEeCv9qs%2B5Gr9y2ZeUvHRxUQgHkiF%2BpOmkyu7n%2F2Pm7g31jHnFuHoKsI3Jl6Nn%2B6wrrQKPLDU9Xp9dOzMR%2Fd8o7g%2BT2Bk3XhKQL9FJGecPmaGFc83LIIIABICZTHEhSe0JTSa%2FZcglbR9vDPgpHKlH11QtpIxr5dYMadJag%2FcuvV6K4iAYpWvnms6qpVjIei0AdhOSwEGbTN%2FB8xNb3DaRiQ4InxdWH1sowqyaBmunWN%2F%2FR8%2Bi4OcNLfy426%2FJ%2B35DXhgltmGzeOkjr%2BT3UW5PbB6Lx3vY45D5E%2BHOQeV%2FTfipunFvB7QvZrFRR7qTr4i6S0w3EUBRe13aDxgt3tmy%2BSRxzrcX5bILMzoxno7dDCDore9BjqkAfdkKA5movZeZkSltDUo4pLrBdaxdSPLhJ%2FaFHDykTDJVv2DdDzz%2FfHTV2Njiq25PiOcWLLz41KfxCB4476ostx9v4EdEfk4pu0qqGfKEcNfzyjRO74uCd%2FXkzyzUgna2R7ynCiYYY8aYyifv8iz3JrJ3EVIWEZvkka1BkAUNYUOg1QU1lRtVS5MoL0YTA1KoeJPCis1n4oykb695fD%2F61lmr7ew&X-Amz-Signature=50a1454fd0a2f78e63b26f85f1e28ae8399de88b7aabf7e079b15ba40ab581b6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCJ2ZOC2%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T110331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3WWrPVj3RmzUuzHD%2BTheppK33tzSODnRIFdIydH99UgIhAI0X4wOP%2FL1ATk15ZjL6lTJP5ReQniecjRWyYltKuyAIKv8DCBQQABoMNjM3NDIzMTgzODA1IgyG%2BlVwWORPt8Q44F8q3ANk2w%2Fiv%2FFPzXLa9Ce8w4Sg2KVGJ9m0qDZw%2FO8ehGmAMMOHL2pSi94sZ4UF2%2Fc62JqqnK2kqXTlARGK6vttXqjDXNd7DyJ3RPctuPyBzKCP9duL5LMC0eldpvVlGFgrv4YjeyhStMhaJUCDSJMOTnVwUsibjHY7vJMP56JggxzfN%2BdLTzqTlI9QdL7zb9ey4c%2BqdPfyHL5QqfU8zfW2NdTFZ1Z4i%2FXaCytzYtVUBuMZZhxv2pfwjjI%2F9Qu8y0Zfixy7Gcc6R6rgNJhKY9bGEeCv9qs%2B5Gr9y2ZeUvHRxUQgHkiF%2BpOmkyu7n%2F2Pm7g31jHnFuHoKsI3Jl6Nn%2B6wrrQKPLDU9Xp9dOzMR%2Fd8o7g%2BT2Bk3XhKQL9FJGecPmaGFc83LIIIABICZTHEhSe0JTSa%2FZcglbR9vDPgpHKlH11QtpIxr5dYMadJag%2FcuvV6K4iAYpWvnms6qpVjIei0AdhOSwEGbTN%2FB8xNb3DaRiQ4InxdWH1sowqyaBmunWN%2F%2FR8%2Bi4OcNLfy426%2FJ%2B35DXhgltmGzeOkjr%2BT3UW5PbB6Lx3vY45D5E%2BHOQeV%2FTfipunFvB7QvZrFRR7qTr4i6S0w3EUBRe13aDxgt3tmy%2BSRxzrcX5bILMzoxno7dDCDore9BjqkAfdkKA5movZeZkSltDUo4pLrBdaxdSPLhJ%2FaFHDykTDJVv2DdDzz%2FfHTV2Njiq25PiOcWLLz41KfxCB4476ostx9v4EdEfk4pu0qqGfKEcNfzyjRO74uCd%2FXkzyzUgna2R7ynCiYYY8aYyifv8iz3JrJ3EVIWEZvkka1BkAUNYUOg1QU1lRtVS5MoL0YTA1KoeJPCis1n4oykb695fD%2F61lmr7ew&X-Amz-Signature=405547d8790bc4455d556d3eff0ddbdef1fe9e237ed784f40fa9accc22aa49f1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
