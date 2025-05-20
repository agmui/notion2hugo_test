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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ3MXGLZ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T121621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuML78e5vMppULGWIz6ms0FVeQwCn5Swru3qI9nRMcyAiEAtmCg%2BzTdSwyf7HFq4wlGrVLptg4K6DXsbZLL1PDZcmgqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBnBhG1gELFKg66v6SrcA6nKDLJvGdyJywvuEXxoAV%2BLcA0lwkzh5bLkoyESml3TeR3D9gKJxgOLsB0Q4E4rr0JguLxO6hfm%2Bqf%2FsFU5JH7RWe9gCeZ5egwldLIjPqrUpznwRMoCfx2kWEFy16%2Fmn8ZI9jMIB3pYsvwkJOabqxom83pcGs8WQ2Njnn5Z%2B1Sm5x%2BJbliSr%2BK9SVISUXgX3OBUrk4e9yaJAcm6jF0s4FiHYHoYAgxOnm23DwySjRSpdhKRRtJToi0EtesdVFR6TeXd%2B8YhTlpvdXJXslWaz%2Bz3LR5gDW%2FtbEqlKtXvNCTuADWy9n967HLl0gXlaHC%2F%2ByMKA3fhckOboHHjGbiNMRHqaIkvTthik5BReRcmsELcaFE0xMCoXIDyDxQR2Tw4A99v%2BPK0fxLIWsh%2FsjwXLkjF4I1viJquuRwLFgjFfEwyNQOWG1eEhItFdcYIdgx%2BrCCdnMjwNiT54nXhF%2FXG8ojBsxadPa0%2Fy7xFrcm3qD11aiFirrsMcT4APZoSy4JESC18BEl3IwYIUpe5%2FG%2Bx5Dps%2BlnPMXp4r8GaRy%2B1SMY4zSyPnnw6xFO7PLOhoe%2FjU4nR%2FGCPFUuRlAZULe%2BQd0ty%2FijdsNmxV5AQ7ZyGz1ZwJVqUliWC52CIxxQyMOrSscEGOqUBMtQC%2BV9Xnxa%2B5DNmeMEjNswsUHm6TXptv7JlxdqbbjzI96bC3%2BCtlzxQgdkhl1QwmE0FsLQU0DyRdWvNf%2FEtis1wH0VsoDYSx6mrmS4WyzNV6bSY47gFON1DaOmmbjMOR2FQVxWEIS3MNIJ7%2F4oZGUtSagQ87PUvtQeb1LXyqATvuUf3JiWpMrIJdb%2BpdZrf2iUk9G1MqFQlhSTlZhfJnoSjQDJj&X-Amz-Signature=8d3138e76167b35bb0af1544000b6818e109d5b410d574d8158dae8c06082bdd&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ3MXGLZ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T121621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuML78e5vMppULGWIz6ms0FVeQwCn5Swru3qI9nRMcyAiEAtmCg%2BzTdSwyf7HFq4wlGrVLptg4K6DXsbZLL1PDZcmgqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBnBhG1gELFKg66v6SrcA6nKDLJvGdyJywvuEXxoAV%2BLcA0lwkzh5bLkoyESml3TeR3D9gKJxgOLsB0Q4E4rr0JguLxO6hfm%2Bqf%2FsFU5JH7RWe9gCeZ5egwldLIjPqrUpznwRMoCfx2kWEFy16%2Fmn8ZI9jMIB3pYsvwkJOabqxom83pcGs8WQ2Njnn5Z%2B1Sm5x%2BJbliSr%2BK9SVISUXgX3OBUrk4e9yaJAcm6jF0s4FiHYHoYAgxOnm23DwySjRSpdhKRRtJToi0EtesdVFR6TeXd%2B8YhTlpvdXJXslWaz%2Bz3LR5gDW%2FtbEqlKtXvNCTuADWy9n967HLl0gXlaHC%2F%2ByMKA3fhckOboHHjGbiNMRHqaIkvTthik5BReRcmsELcaFE0xMCoXIDyDxQR2Tw4A99v%2BPK0fxLIWsh%2FsjwXLkjF4I1viJquuRwLFgjFfEwyNQOWG1eEhItFdcYIdgx%2BrCCdnMjwNiT54nXhF%2FXG8ojBsxadPa0%2Fy7xFrcm3qD11aiFirrsMcT4APZoSy4JESC18BEl3IwYIUpe5%2FG%2Bx5Dps%2BlnPMXp4r8GaRy%2B1SMY4zSyPnnw6xFO7PLOhoe%2FjU4nR%2FGCPFUuRlAZULe%2BQd0ty%2FijdsNmxV5AQ7ZyGz1ZwJVqUliWC52CIxxQyMOrSscEGOqUBMtQC%2BV9Xnxa%2B5DNmeMEjNswsUHm6TXptv7JlxdqbbjzI96bC3%2BCtlzxQgdkhl1QwmE0FsLQU0DyRdWvNf%2FEtis1wH0VsoDYSx6mrmS4WyzNV6bSY47gFON1DaOmmbjMOR2FQVxWEIS3MNIJ7%2F4oZGUtSagQ87PUvtQeb1LXyqATvuUf3JiWpMrIJdb%2BpdZrf2iUk9G1MqFQlhSTlZhfJnoSjQDJj&X-Amz-Signature=e18c0814b66d4f79396b671ab29ba6615a3065ea166ffea86fb4816fa5bb12fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ3MXGLZ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T121621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuML78e5vMppULGWIz6ms0FVeQwCn5Swru3qI9nRMcyAiEAtmCg%2BzTdSwyf7HFq4wlGrVLptg4K6DXsbZLL1PDZcmgqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBnBhG1gELFKg66v6SrcA6nKDLJvGdyJywvuEXxoAV%2BLcA0lwkzh5bLkoyESml3TeR3D9gKJxgOLsB0Q4E4rr0JguLxO6hfm%2Bqf%2FsFU5JH7RWe9gCeZ5egwldLIjPqrUpznwRMoCfx2kWEFy16%2Fmn8ZI9jMIB3pYsvwkJOabqxom83pcGs8WQ2Njnn5Z%2B1Sm5x%2BJbliSr%2BK9SVISUXgX3OBUrk4e9yaJAcm6jF0s4FiHYHoYAgxOnm23DwySjRSpdhKRRtJToi0EtesdVFR6TeXd%2B8YhTlpvdXJXslWaz%2Bz3LR5gDW%2FtbEqlKtXvNCTuADWy9n967HLl0gXlaHC%2F%2ByMKA3fhckOboHHjGbiNMRHqaIkvTthik5BReRcmsELcaFE0xMCoXIDyDxQR2Tw4A99v%2BPK0fxLIWsh%2FsjwXLkjF4I1viJquuRwLFgjFfEwyNQOWG1eEhItFdcYIdgx%2BrCCdnMjwNiT54nXhF%2FXG8ojBsxadPa0%2Fy7xFrcm3qD11aiFirrsMcT4APZoSy4JESC18BEl3IwYIUpe5%2FG%2Bx5Dps%2BlnPMXp4r8GaRy%2B1SMY4zSyPnnw6xFO7PLOhoe%2FjU4nR%2FGCPFUuRlAZULe%2BQd0ty%2FijdsNmxV5AQ7ZyGz1ZwJVqUliWC52CIxxQyMOrSscEGOqUBMtQC%2BV9Xnxa%2B5DNmeMEjNswsUHm6TXptv7JlxdqbbjzI96bC3%2BCtlzxQgdkhl1QwmE0FsLQU0DyRdWvNf%2FEtis1wH0VsoDYSx6mrmS4WyzNV6bSY47gFON1DaOmmbjMOR2FQVxWEIS3MNIJ7%2F4oZGUtSagQ87PUvtQeb1LXyqATvuUf3JiWpMrIJdb%2BpdZrf2iUk9G1MqFQlhSTlZhfJnoSjQDJj&X-Amz-Signature=3c9ffd2a7b171b2964885d3a1097399ed2c4c152ce9a97d06074ba9c07ba8c27&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
