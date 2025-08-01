---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BBSTDAA%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEbe46q%2ByXs%2FGUYAAGP%2B%2BnEAiNDr9tHAk%2B4o%2F1km%2B2GAiBmgw2f9f6QxtAN9DXM%2Fa2ll0%2F%2Fui4teEwAKQO4MTOzJiqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwlaWhCfb9zsyeP3zKtwDRUbBkO3PuNCGTmYT%2B7wNGmRfeCPN%2FXeQ6S7DaXolpGdGbWsFv0JqMrpmOHcXWywQm5wn6v0jFt%2F8adSUqfNGtuGcdi1yMXv7P9KofZfk63HXjTDCwawjM7n9icFW9%2FIUBvq9H9kbHfEfpU298CdIxLOkrS9u6KTffqIh2czxnfA8VAIM%2BXt5mZ1oXMV9TAkx7SRqtBTk0VCve3ctlukSruHaqlgsJyD9i6evPUwmwMHwAezWUkOEc%2FHChvKn84oKNCvdLqTUXg91hVEwmhgvFe78Dwz9YqbDXejF%2BAXIKJEWyys3Z4eNxLQF5BgYs%2FrG%2BwrTPdVJUYHtiySYVRt36%2BlHlE7vViqvFsXgdoP0cMYYutI9LFN3Wcoc09XpDV5kRx7j9YEoOLgX2nD25w0oYKht2uLVSknUKwnT0GBWcGynn9MtowRz4X20iN3tuKYsNwZaGbD3C0aEmVcySRxYrMPOYoAnFj6nURwL3JX6S40t52yWbJutFhTxw26LP152Cwsu0lQxLzS626IFpHGrowdnoDnFOGeWR3vUTHV8Gw4Hd7nRk0zt6jueIlayxqV%2Fizw19A6wQRJHlD2YON3NoSuVF8XglhiizPA1cJkEDUpphnAFUiwrLL%2F3DYQwwO20xAY6pgG2AFptYxFBHg1U%2Bm75cv5jY7VQUx%2B1PGqrg2EnnRsdoSMdEKlvvmMv0%2BEyinTXr8sDwCbzIA59J7vXEeNys690lNKQtoNyvBJ8xeCrBksgcwQVeEZ88ZmVB%2FNV%2FjzmelPsLSEmXvuBWjddlU5UQpL4HSL4SzNwDAlmmFMjKwpko6CmAkXu9X0YioPriL3hMRdpgW6vPs%2B6rt1LuZk%2BcHWSh4RAabTs&X-Amz-Signature=4f599d1a93b037d3eb7e7dd89ed81c3f84d0d7e5a9b968724adbe3e7320590a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BBSTDAA%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEbe46q%2ByXs%2FGUYAAGP%2B%2BnEAiNDr9tHAk%2B4o%2F1km%2B2GAiBmgw2f9f6QxtAN9DXM%2Fa2ll0%2F%2Fui4teEwAKQO4MTOzJiqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwlaWhCfb9zsyeP3zKtwDRUbBkO3PuNCGTmYT%2B7wNGmRfeCPN%2FXeQ6S7DaXolpGdGbWsFv0JqMrpmOHcXWywQm5wn6v0jFt%2F8adSUqfNGtuGcdi1yMXv7P9KofZfk63HXjTDCwawjM7n9icFW9%2FIUBvq9H9kbHfEfpU298CdIxLOkrS9u6KTffqIh2czxnfA8VAIM%2BXt5mZ1oXMV9TAkx7SRqtBTk0VCve3ctlukSruHaqlgsJyD9i6evPUwmwMHwAezWUkOEc%2FHChvKn84oKNCvdLqTUXg91hVEwmhgvFe78Dwz9YqbDXejF%2BAXIKJEWyys3Z4eNxLQF5BgYs%2FrG%2BwrTPdVJUYHtiySYVRt36%2BlHlE7vViqvFsXgdoP0cMYYutI9LFN3Wcoc09XpDV5kRx7j9YEoOLgX2nD25w0oYKht2uLVSknUKwnT0GBWcGynn9MtowRz4X20iN3tuKYsNwZaGbD3C0aEmVcySRxYrMPOYoAnFj6nURwL3JX6S40t52yWbJutFhTxw26LP152Cwsu0lQxLzS626IFpHGrowdnoDnFOGeWR3vUTHV8Gw4Hd7nRk0zt6jueIlayxqV%2Fizw19A6wQRJHlD2YON3NoSuVF8XglhiizPA1cJkEDUpphnAFUiwrLL%2F3DYQwwO20xAY6pgG2AFptYxFBHg1U%2Bm75cv5jY7VQUx%2B1PGqrg2EnnRsdoSMdEKlvvmMv0%2BEyinTXr8sDwCbzIA59J7vXEeNys690lNKQtoNyvBJ8xeCrBksgcwQVeEZ88ZmVB%2FNV%2FjzmelPsLSEmXvuBWjddlU5UQpL4HSL4SzNwDAlmmFMjKwpko6CmAkXu9X0YioPriL3hMRdpgW6vPs%2B6rt1LuZk%2BcHWSh4RAabTs&X-Amz-Signature=b6950535b770c9ba7b2e0cc6cf647d8d892cc0ce9780dd09e8734b470cfe998b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BBSTDAA%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEbe46q%2ByXs%2FGUYAAGP%2B%2BnEAiNDr9tHAk%2B4o%2F1km%2B2GAiBmgw2f9f6QxtAN9DXM%2Fa2ll0%2F%2Fui4teEwAKQO4MTOzJiqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwlaWhCfb9zsyeP3zKtwDRUbBkO3PuNCGTmYT%2B7wNGmRfeCPN%2FXeQ6S7DaXolpGdGbWsFv0JqMrpmOHcXWywQm5wn6v0jFt%2F8adSUqfNGtuGcdi1yMXv7P9KofZfk63HXjTDCwawjM7n9icFW9%2FIUBvq9H9kbHfEfpU298CdIxLOkrS9u6KTffqIh2czxnfA8VAIM%2BXt5mZ1oXMV9TAkx7SRqtBTk0VCve3ctlukSruHaqlgsJyD9i6evPUwmwMHwAezWUkOEc%2FHChvKn84oKNCvdLqTUXg91hVEwmhgvFe78Dwz9YqbDXejF%2BAXIKJEWyys3Z4eNxLQF5BgYs%2FrG%2BwrTPdVJUYHtiySYVRt36%2BlHlE7vViqvFsXgdoP0cMYYutI9LFN3Wcoc09XpDV5kRx7j9YEoOLgX2nD25w0oYKht2uLVSknUKwnT0GBWcGynn9MtowRz4X20iN3tuKYsNwZaGbD3C0aEmVcySRxYrMPOYoAnFj6nURwL3JX6S40t52yWbJutFhTxw26LP152Cwsu0lQxLzS626IFpHGrowdnoDnFOGeWR3vUTHV8Gw4Hd7nRk0zt6jueIlayxqV%2Fizw19A6wQRJHlD2YON3NoSuVF8XglhiizPA1cJkEDUpphnAFUiwrLL%2F3DYQwwO20xAY6pgG2AFptYxFBHg1U%2Bm75cv5jY7VQUx%2B1PGqrg2EnnRsdoSMdEKlvvmMv0%2BEyinTXr8sDwCbzIA59J7vXEeNys690lNKQtoNyvBJ8xeCrBksgcwQVeEZ88ZmVB%2FNV%2FjzmelPsLSEmXvuBWjddlU5UQpL4HSL4SzNwDAlmmFMjKwpko6CmAkXu9X0YioPriL3hMRdpgW6vPs%2B6rt1LuZk%2BcHWSh4RAabTs&X-Amz-Signature=734a437bf859a6d934232b425b8569024d0dba7baf9bc6bc0daf96bb385a8c98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
