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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3E5ONGV%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2B1KAtInngxuf7l5sWfT2UE38pgRbPMklPJVe53ykY0AIgH4vaFYMnx9cAek7fBrBGSCkqGRMhDiBl3JR49fFdmXQqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE8IdumvB%2FxsI68k5CrcA0iXk%2BHb3XIFdXfB%2BhemKTYghUpk6vm86RPAeEgzeHKkkfdrUaFR8tdnc7LwjxkELummJLvWgKy9LKRnVDcHeyLY6zABoga%2F2KykqjUhPVA01ol%2BpWdgQ7vkbCsihdQbXDrqoTWFWe94DwP0BpLBcsM5NVhjZBwivAv5jczAZ%2BMHYBF36ZXKA%2FEYJZHRrAlmem04JlRjQ48ATPm1xEETQtvCCrDL6uYHlsUO4D9SVw5csCJPFX8d7LuWwUVjmJqm2FCjehqwX%2Fa8xjRPCZkCt3Yvnz45S4KDNNXeKUrMtm1kUtI2bIB62oeSnqw8emweYylGTyEqAs%2BGEvunXPkFS5wqqezHCj7aZ1rZncSiK5UHN0DXG%2Fe%2BIsA1PJFiJurPT541M9rtwr%2F8t7rM0eqzc%2F8COEMXdXjA9ZFYH%2FFYcVI%2FToD0IFYFb%2FAajGBeVKca2KgXuUdy0HyhSMoTEHh%2Bl47zkmFCsfr2AdBPVb36CulkBcUd5ijJGi7kOwcdCWD%2F5mgnFT123qjmU8Wj3jGdkICkiT0NhenkRbBZTEITglNi8JVR58DM5gNXC8icBi3VxEkXb0TYliKUvR%2BfZpFjZnv7cej%2FOMPmvNCs35I0F4GVIcpRUKo7mB5H9R2wMLOC8MsGOqUBkZmPuI7pfIptejQcKZc62m2b7jPmJI8zxv79iPoy4iKPT1%2BAhiMA4sVtMAkjmsVaE0kdJ%2Be663gVGflD6Cb%2FLeqvpuk2E4yBsqvkT2AXjS%2FIQISnoCHVI2trTWxcQJMAQfxFpwlo75zZ%2F9rj0Oh4OevCbTcRiiVpEHe41CNW4NLgz40Omv46fDE19eW8MpjiGgCaL8mDi1Sm58MphX%2FTgEfAVCr9&X-Amz-Signature=77ed76182beb1482c8b5ba0596e5e76699964630f6cf8604d218be12232282f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3E5ONGV%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2B1KAtInngxuf7l5sWfT2UE38pgRbPMklPJVe53ykY0AIgH4vaFYMnx9cAek7fBrBGSCkqGRMhDiBl3JR49fFdmXQqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE8IdumvB%2FxsI68k5CrcA0iXk%2BHb3XIFdXfB%2BhemKTYghUpk6vm86RPAeEgzeHKkkfdrUaFR8tdnc7LwjxkELummJLvWgKy9LKRnVDcHeyLY6zABoga%2F2KykqjUhPVA01ol%2BpWdgQ7vkbCsihdQbXDrqoTWFWe94DwP0BpLBcsM5NVhjZBwivAv5jczAZ%2BMHYBF36ZXKA%2FEYJZHRrAlmem04JlRjQ48ATPm1xEETQtvCCrDL6uYHlsUO4D9SVw5csCJPFX8d7LuWwUVjmJqm2FCjehqwX%2Fa8xjRPCZkCt3Yvnz45S4KDNNXeKUrMtm1kUtI2bIB62oeSnqw8emweYylGTyEqAs%2BGEvunXPkFS5wqqezHCj7aZ1rZncSiK5UHN0DXG%2Fe%2BIsA1PJFiJurPT541M9rtwr%2F8t7rM0eqzc%2F8COEMXdXjA9ZFYH%2FFYcVI%2FToD0IFYFb%2FAajGBeVKca2KgXuUdy0HyhSMoTEHh%2Bl47zkmFCsfr2AdBPVb36CulkBcUd5ijJGi7kOwcdCWD%2F5mgnFT123qjmU8Wj3jGdkICkiT0NhenkRbBZTEITglNi8JVR58DM5gNXC8icBi3VxEkXb0TYliKUvR%2BfZpFjZnv7cej%2FOMPmvNCs35I0F4GVIcpRUKo7mB5H9R2wMLOC8MsGOqUBkZmPuI7pfIptejQcKZc62m2b7jPmJI8zxv79iPoy4iKPT1%2BAhiMA4sVtMAkjmsVaE0kdJ%2Be663gVGflD6Cb%2FLeqvpuk2E4yBsqvkT2AXjS%2FIQISnoCHVI2trTWxcQJMAQfxFpwlo75zZ%2F9rj0Oh4OevCbTcRiiVpEHe41CNW4NLgz40Omv46fDE19eW8MpjiGgCaL8mDi1Sm58MphX%2FTgEfAVCr9&X-Amz-Signature=e2e44500aaa3dcbdfd2efcdda7508617f20071c67bd27c27aa5394783b6ebf91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3E5ONGV%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2B1KAtInngxuf7l5sWfT2UE38pgRbPMklPJVe53ykY0AIgH4vaFYMnx9cAek7fBrBGSCkqGRMhDiBl3JR49fFdmXQqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE8IdumvB%2FxsI68k5CrcA0iXk%2BHb3XIFdXfB%2BhemKTYghUpk6vm86RPAeEgzeHKkkfdrUaFR8tdnc7LwjxkELummJLvWgKy9LKRnVDcHeyLY6zABoga%2F2KykqjUhPVA01ol%2BpWdgQ7vkbCsihdQbXDrqoTWFWe94DwP0BpLBcsM5NVhjZBwivAv5jczAZ%2BMHYBF36ZXKA%2FEYJZHRrAlmem04JlRjQ48ATPm1xEETQtvCCrDL6uYHlsUO4D9SVw5csCJPFX8d7LuWwUVjmJqm2FCjehqwX%2Fa8xjRPCZkCt3Yvnz45S4KDNNXeKUrMtm1kUtI2bIB62oeSnqw8emweYylGTyEqAs%2BGEvunXPkFS5wqqezHCj7aZ1rZncSiK5UHN0DXG%2Fe%2BIsA1PJFiJurPT541M9rtwr%2F8t7rM0eqzc%2F8COEMXdXjA9ZFYH%2FFYcVI%2FToD0IFYFb%2FAajGBeVKca2KgXuUdy0HyhSMoTEHh%2Bl47zkmFCsfr2AdBPVb36CulkBcUd5ijJGi7kOwcdCWD%2F5mgnFT123qjmU8Wj3jGdkICkiT0NhenkRbBZTEITglNi8JVR58DM5gNXC8icBi3VxEkXb0TYliKUvR%2BfZpFjZnv7cej%2FOMPmvNCs35I0F4GVIcpRUKo7mB5H9R2wMLOC8MsGOqUBkZmPuI7pfIptejQcKZc62m2b7jPmJI8zxv79iPoy4iKPT1%2BAhiMA4sVtMAkjmsVaE0kdJ%2Be663gVGflD6Cb%2FLeqvpuk2E4yBsqvkT2AXjS%2FIQISnoCHVI2trTWxcQJMAQfxFpwlo75zZ%2F9rj0Oh4OevCbTcRiiVpEHe41CNW4NLgz40Omv46fDE19eW8MpjiGgCaL8mDi1Sm58MphX%2FTgEfAVCr9&X-Amz-Signature=5f4c9aa21d54afd989ede2bee76f5ac5dc8961e89deb4ac43ff74d3845c4719a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
