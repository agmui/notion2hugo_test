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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS6BNN7U%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T070933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCM3MD30Hax1ewja8NrDkFcr0IZfu7Y8uHg2CM9N9fd3QIgHV78X0dLhsx7ULUSPkRrFEPuzRMNAzCrSz1j8%2BWjzTAq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDGn%2FG4%2F2LuIZEkWn9ircA6hSx9l7vwfwW0zDvvsvfHwVdSUf97SDBhE4JGFTuiB5GYREBIaCC1Aa%2BWUg1yUAfwYv%2BTWlSd9quLfZhUNSBMx2%2BFOpcw%2FavDpoj6N5sSXrT%2BSg6dwXxPBukY4VghRgFn3pzzUYmTZAVJYA0trLUwki9snrSCpabRyxmm6ynIkLwd3KDzYqlGch7aTDiCnDuAxcDfqK9Bz8DWM1098Go5hxVJMZVHquu23G3EfndeavhBLyAq%2BckLJ6JCkAYVGacHxQsqj3Xzi9C9k24sHLlVU5f3EIQi8fHAdA1YCpcuaapOIJgg%2BJeuoWOPCYSfkIGAcj2j3rMXdNAAj0j11jULzd3ltiKJqV8OxAzhrxz%2BZbdh2EdsrHwQTneovTUKRVuDydQcPOZmultyL3%2FPaRu6mO%2Bq3msg8fHQhHalTw52ifV255H0attgt%2FZpfIWNyhuJadO8VVjUCt6%2Bvx2fdv%2BLUUYj3iIpMVFd9a8T2vSYFegt48gvC3YdF00fpmOZZ090g0pMwAo9atcq3nkyeHT2oqH3%2FTLZy4pC0cU6m%2B5CsUs7Wuhf2EdlUyGa35%2BfAFCNyFua9TX%2B3YQwgXe4Spsl7iDiilIF%2FpM4%2BGAuKWjoHuFpwZhLXF%2FTDYfAwtMOji8r8GOqUBPrDGhTPG5n9DJqR2LdIJeGle1Z2Oe%2BkLPciwMWjUkDRd%2Fh76cZStVGY%2FPenXdS81%2F2Io2dFJYVOHT2lovbK2osWywJ%2B7Tr%2F%2BcFFVrljsF%2BQVswV%2BE7TbHApzzyMDoGjF6BwZ9U%2FQszIQU%2FghuZ0MQ3iqze9kJXoylu%2FWxsrFo6NuBO5iklSWCNV9InWkHfDFzwbyO%2Fbs0g4t6s3GDn1%2FFhN3BkUc&X-Amz-Signature=81e60407cecb552ac708135ed93ed28ce8336a74ae16d417b806e46bc7341c02&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS6BNN7U%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T070933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCM3MD30Hax1ewja8NrDkFcr0IZfu7Y8uHg2CM9N9fd3QIgHV78X0dLhsx7ULUSPkRrFEPuzRMNAzCrSz1j8%2BWjzTAq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDGn%2FG4%2F2LuIZEkWn9ircA6hSx9l7vwfwW0zDvvsvfHwVdSUf97SDBhE4JGFTuiB5GYREBIaCC1Aa%2BWUg1yUAfwYv%2BTWlSd9quLfZhUNSBMx2%2BFOpcw%2FavDpoj6N5sSXrT%2BSg6dwXxPBukY4VghRgFn3pzzUYmTZAVJYA0trLUwki9snrSCpabRyxmm6ynIkLwd3KDzYqlGch7aTDiCnDuAxcDfqK9Bz8DWM1098Go5hxVJMZVHquu23G3EfndeavhBLyAq%2BckLJ6JCkAYVGacHxQsqj3Xzi9C9k24sHLlVU5f3EIQi8fHAdA1YCpcuaapOIJgg%2BJeuoWOPCYSfkIGAcj2j3rMXdNAAj0j11jULzd3ltiKJqV8OxAzhrxz%2BZbdh2EdsrHwQTneovTUKRVuDydQcPOZmultyL3%2FPaRu6mO%2Bq3msg8fHQhHalTw52ifV255H0attgt%2FZpfIWNyhuJadO8VVjUCt6%2Bvx2fdv%2BLUUYj3iIpMVFd9a8T2vSYFegt48gvC3YdF00fpmOZZ090g0pMwAo9atcq3nkyeHT2oqH3%2FTLZy4pC0cU6m%2B5CsUs7Wuhf2EdlUyGa35%2BfAFCNyFua9TX%2B3YQwgXe4Spsl7iDiilIF%2FpM4%2BGAuKWjoHuFpwZhLXF%2FTDYfAwtMOji8r8GOqUBPrDGhTPG5n9DJqR2LdIJeGle1Z2Oe%2BkLPciwMWjUkDRd%2Fh76cZStVGY%2FPenXdS81%2F2Io2dFJYVOHT2lovbK2osWywJ%2B7Tr%2F%2BcFFVrljsF%2BQVswV%2BE7TbHApzzyMDoGjF6BwZ9U%2FQszIQU%2FghuZ0MQ3iqze9kJXoylu%2FWxsrFo6NuBO5iklSWCNV9InWkHfDFzwbyO%2Fbs0g4t6s3GDn1%2FFhN3BkUc&X-Amz-Signature=2d6429b20ac44001d0ff5f66b77fee5fc28a9cb55a30ae61c6093b8f850695f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS6BNN7U%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T070933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCM3MD30Hax1ewja8NrDkFcr0IZfu7Y8uHg2CM9N9fd3QIgHV78X0dLhsx7ULUSPkRrFEPuzRMNAzCrSz1j8%2BWjzTAq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDGn%2FG4%2F2LuIZEkWn9ircA6hSx9l7vwfwW0zDvvsvfHwVdSUf97SDBhE4JGFTuiB5GYREBIaCC1Aa%2BWUg1yUAfwYv%2BTWlSd9quLfZhUNSBMx2%2BFOpcw%2FavDpoj6N5sSXrT%2BSg6dwXxPBukY4VghRgFn3pzzUYmTZAVJYA0trLUwki9snrSCpabRyxmm6ynIkLwd3KDzYqlGch7aTDiCnDuAxcDfqK9Bz8DWM1098Go5hxVJMZVHquu23G3EfndeavhBLyAq%2BckLJ6JCkAYVGacHxQsqj3Xzi9C9k24sHLlVU5f3EIQi8fHAdA1YCpcuaapOIJgg%2BJeuoWOPCYSfkIGAcj2j3rMXdNAAj0j11jULzd3ltiKJqV8OxAzhrxz%2BZbdh2EdsrHwQTneovTUKRVuDydQcPOZmultyL3%2FPaRu6mO%2Bq3msg8fHQhHalTw52ifV255H0attgt%2FZpfIWNyhuJadO8VVjUCt6%2Bvx2fdv%2BLUUYj3iIpMVFd9a8T2vSYFegt48gvC3YdF00fpmOZZ090g0pMwAo9atcq3nkyeHT2oqH3%2FTLZy4pC0cU6m%2B5CsUs7Wuhf2EdlUyGa35%2BfAFCNyFua9TX%2B3YQwgXe4Spsl7iDiilIF%2FpM4%2BGAuKWjoHuFpwZhLXF%2FTDYfAwtMOji8r8GOqUBPrDGhTPG5n9DJqR2LdIJeGle1Z2Oe%2BkLPciwMWjUkDRd%2Fh76cZStVGY%2FPenXdS81%2F2Io2dFJYVOHT2lovbK2osWywJ%2B7Tr%2F%2BcFFVrljsF%2BQVswV%2BE7TbHApzzyMDoGjF6BwZ9U%2FQszIQU%2FghuZ0MQ3iqze9kJXoylu%2FWxsrFo6NuBO5iklSWCNV9InWkHfDFzwbyO%2Fbs0g4t6s3GDn1%2FFhN3BkUc&X-Amz-Signature=3880b6205a5f9761b78b5812d21ee17ac8a707a23e1ae61bbc3d5dc40cb49c63&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
