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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYNL3GSV%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T022819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIFROvwlS88LCnEojY6swyL1uw3BpCGuBd%2BswEbP2vLTUAiEAlp0REL%2BB%2BnRuQzCCzEh3KQb5%2FOHuiBd2OhGEmu6dJtIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDE83YpAHahrgMG%2FGwCrcAwT03JImQJ6uYyblSQbBw113eu9d%2FDlX9%2Bo0fIMhZau%2Buk9doCFZVutrfvyCictie3JFJLk6pECH9CqNjNF0H3RWqjlQDqNDkYbYY6dAZg2WpClsnX6Zc7ylRcHuLp68ue1eF6n%2B2G3J3pJwDxx4xuC224Yf6ybj%2FFC%2FNkIpX5WwWRd%2BjI5HudfNkJ3l7umeQy0ecpO0qcg2FLOULvrjNXaLS%2BK%2B3W9HjRqM%2FIp31%2FhQNh7GhkqEVAITEZf%2B%2F%2FTfzRM4ct4PlLxGT3D49sJwMlFJmxv52gL28aaFDNiV2glN1Jr%2BUNYyuSFkr5WdtwfCPzbf7Il0j0gedvov9sc68Pxg06ga3TNBg6BrA1XURPWmAJEGW4mSzgza3aJcdxsOJAcrL0G%2BCIG4K0orgElxKhNkeNTo9HLXhQIVXsUzEV1CQPK67yID29juVRl%2B3Q1edIAK%2B7QxPlXIaHz0q8sOPvIxalQoFEGuieFxpg7u9lJ1Bo0wh%2FF%2Fh%2BMsY8HJJYT850hXg8PiPhLwRSLFiB32eMcCQmmAJ6l7Zx3Gw3g7P2Nh6xenrqbB%2FjW%2BVvIvUoaQaYDi2pFkVbgOZiLwfQX0rwUHUhC3QEibNndnrAFyawvvPim7AWs8BCowDCngMPqs38AGOqUB%2BiVPIJjL6SdmWIgn5%2BNHLWjCvezadwDZVTv6BTkD8%2FWUWvTTvMeRk9lSx85aK2WD%2F3HGUy95%2Ft0ACZgRM8ZVbe0fEqLOMJsbhMjarquUBISXUdDGz%2BCvvmlKxlnpqBYjtyiVCbk0noOmeFSJdgDJ4bfHgcpz4ZnhVH9hocdVTY9TCPY%2FV5rFWX%2BuwHBOofHbdAq7sRNqQfHzvSxQIBzQIQHKccKX&X-Amz-Signature=d6395b301933e10aa8cd9994c3548a76f5f419b1d6726c684be3cea099b89c72&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYNL3GSV%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T022819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIFROvwlS88LCnEojY6swyL1uw3BpCGuBd%2BswEbP2vLTUAiEAlp0REL%2BB%2BnRuQzCCzEh3KQb5%2FOHuiBd2OhGEmu6dJtIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDE83YpAHahrgMG%2FGwCrcAwT03JImQJ6uYyblSQbBw113eu9d%2FDlX9%2Bo0fIMhZau%2Buk9doCFZVutrfvyCictie3JFJLk6pECH9CqNjNF0H3RWqjlQDqNDkYbYY6dAZg2WpClsnX6Zc7ylRcHuLp68ue1eF6n%2B2G3J3pJwDxx4xuC224Yf6ybj%2FFC%2FNkIpX5WwWRd%2BjI5HudfNkJ3l7umeQy0ecpO0qcg2FLOULvrjNXaLS%2BK%2B3W9HjRqM%2FIp31%2FhQNh7GhkqEVAITEZf%2B%2F%2FTfzRM4ct4PlLxGT3D49sJwMlFJmxv52gL28aaFDNiV2glN1Jr%2BUNYyuSFkr5WdtwfCPzbf7Il0j0gedvov9sc68Pxg06ga3TNBg6BrA1XURPWmAJEGW4mSzgza3aJcdxsOJAcrL0G%2BCIG4K0orgElxKhNkeNTo9HLXhQIVXsUzEV1CQPK67yID29juVRl%2B3Q1edIAK%2B7QxPlXIaHz0q8sOPvIxalQoFEGuieFxpg7u9lJ1Bo0wh%2FF%2Fh%2BMsY8HJJYT850hXg8PiPhLwRSLFiB32eMcCQmmAJ6l7Zx3Gw3g7P2Nh6xenrqbB%2FjW%2BVvIvUoaQaYDi2pFkVbgOZiLwfQX0rwUHUhC3QEibNndnrAFyawvvPim7AWs8BCowDCngMPqs38AGOqUB%2BiVPIJjL6SdmWIgn5%2BNHLWjCvezadwDZVTv6BTkD8%2FWUWvTTvMeRk9lSx85aK2WD%2F3HGUy95%2Ft0ACZgRM8ZVbe0fEqLOMJsbhMjarquUBISXUdDGz%2BCvvmlKxlnpqBYjtyiVCbk0noOmeFSJdgDJ4bfHgcpz4ZnhVH9hocdVTY9TCPY%2FV5rFWX%2BuwHBOofHbdAq7sRNqQfHzvSxQIBzQIQHKccKX&X-Amz-Signature=f01f2be807356e0cadf654c25809159f75763711fabcffe7132525f38bf8501c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYNL3GSV%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T022819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIFROvwlS88LCnEojY6swyL1uw3BpCGuBd%2BswEbP2vLTUAiEAlp0REL%2BB%2BnRuQzCCzEh3KQb5%2FOHuiBd2OhGEmu6dJtIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDE83YpAHahrgMG%2FGwCrcAwT03JImQJ6uYyblSQbBw113eu9d%2FDlX9%2Bo0fIMhZau%2Buk9doCFZVutrfvyCictie3JFJLk6pECH9CqNjNF0H3RWqjlQDqNDkYbYY6dAZg2WpClsnX6Zc7ylRcHuLp68ue1eF6n%2B2G3J3pJwDxx4xuC224Yf6ybj%2FFC%2FNkIpX5WwWRd%2BjI5HudfNkJ3l7umeQy0ecpO0qcg2FLOULvrjNXaLS%2BK%2B3W9HjRqM%2FIp31%2FhQNh7GhkqEVAITEZf%2B%2F%2FTfzRM4ct4PlLxGT3D49sJwMlFJmxv52gL28aaFDNiV2glN1Jr%2BUNYyuSFkr5WdtwfCPzbf7Il0j0gedvov9sc68Pxg06ga3TNBg6BrA1XURPWmAJEGW4mSzgza3aJcdxsOJAcrL0G%2BCIG4K0orgElxKhNkeNTo9HLXhQIVXsUzEV1CQPK67yID29juVRl%2B3Q1edIAK%2B7QxPlXIaHz0q8sOPvIxalQoFEGuieFxpg7u9lJ1Bo0wh%2FF%2Fh%2BMsY8HJJYT850hXg8PiPhLwRSLFiB32eMcCQmmAJ6l7Zx3Gw3g7P2Nh6xenrqbB%2FjW%2BVvIvUoaQaYDi2pFkVbgOZiLwfQX0rwUHUhC3QEibNndnrAFyawvvPim7AWs8BCowDCngMPqs38AGOqUB%2BiVPIJjL6SdmWIgn5%2BNHLWjCvezadwDZVTv6BTkD8%2FWUWvTTvMeRk9lSx85aK2WD%2F3HGUy95%2Ft0ACZgRM8ZVbe0fEqLOMJsbhMjarquUBISXUdDGz%2BCvvmlKxlnpqBYjtyiVCbk0noOmeFSJdgDJ4bfHgcpz4ZnhVH9hocdVTY9TCPY%2FV5rFWX%2BuwHBOofHbdAq7sRNqQfHzvSxQIBzQIQHKccKX&X-Amz-Signature=f54d00d33f21a901da46d18165d0c661c587a102867edc78846d461da9a31ebe&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
