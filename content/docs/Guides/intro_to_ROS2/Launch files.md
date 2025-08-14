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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466542HAVLA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB6yjxhv4WoKyomk1pAQg1QUnkiQDdTyyWYSMSUXFMmQIgEo844WXXL46OQl9aN9Pf6jTXGixcvjKsD5l8qDh0yIwq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDPXyms4GPeJlelqJDyrcA0bezZUh8NkOSaOH00oxPYzTlwcUYrBmKLRVTzaPGpfikowmSLshHYJU6S5rA%2BzJZdy9DlALqjsVaiZZL%2FtHH0omXG5XU%2B7xxFxptHcrYfV2sU2UubTm7s0y0xZsg20S9E9JSBdA1eYEv4mb%2FDy06jJa2LkWE%2Fv2m9AiqMHdfSKqJwKW1NonVtP%2B5oAqiBPjxsacncr62BT3C4Ys%2BCbyx%2Fgzwr53zUIXjZHdocp2eYJo35apfThnE4oZrdM%2FFuWiPG%2BW5XXV127mUbIkR8%2F%2Fk3fQjZpFqKuw2CmNzqVHT1JZCCscKSIoIkdpziLQFsiMGk%2B8ntpMbxaHux0eOBdeztmueOlsYMEKQjVJEYxnpVFcKlDr%2Fmsq%2FlxTxd6l0ib7LhNO%2BXmorMv6hMc891H3DwEQVYiARzFZA%2BZW%2B1IBcLwn1K%2FVJ7PVTHjw%2BcEmh2ADIPvFkXV5MNGqVobMBDyGx9zWK5cTZf4RqEVwoiDDeht6HHs7i5rxFm9NtLXGuLcTUhWVKzMFsGhbWh13PPbHytreKAFyiNGYTm5FZNcU6y8biCenaV5kTdHja7X%2Bu0Pr5MvXr%2BaSWSFdsM%2Fl%2F8Zv3I%2BAeiWHTw3RVtT9%2FCYlVgrW%2BUuus6gCQESkpWqYMLf598QGOqUByUFxPp68TSU0sZHGXHv%2BqAWgc1G8T21YLH7NtcQtxaNdw81DrZsEyFVoY7je9BfYW2%2BwYpXcJKNcEMYmVCuDMUXKSl%2By7PSdeBzM465wnnOQvtHZG4giGWu4TmaFz1FGRoQCFVJeMMQyViYZ0smhu0UoJvTRIfYEtKY1PUGCVmQKCwSuJduqndEJiXhN7d2sAuZJknH0azKjlsHFSUzU6h28MYuS&X-Amz-Signature=f8314b3fa74689b3281b127b2feff2f9bcc629e965510768121ab82f5892a69f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466542HAVLA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB6yjxhv4WoKyomk1pAQg1QUnkiQDdTyyWYSMSUXFMmQIgEo844WXXL46OQl9aN9Pf6jTXGixcvjKsD5l8qDh0yIwq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDPXyms4GPeJlelqJDyrcA0bezZUh8NkOSaOH00oxPYzTlwcUYrBmKLRVTzaPGpfikowmSLshHYJU6S5rA%2BzJZdy9DlALqjsVaiZZL%2FtHH0omXG5XU%2B7xxFxptHcrYfV2sU2UubTm7s0y0xZsg20S9E9JSBdA1eYEv4mb%2FDy06jJa2LkWE%2Fv2m9AiqMHdfSKqJwKW1NonVtP%2B5oAqiBPjxsacncr62BT3C4Ys%2BCbyx%2Fgzwr53zUIXjZHdocp2eYJo35apfThnE4oZrdM%2FFuWiPG%2BW5XXV127mUbIkR8%2F%2Fk3fQjZpFqKuw2CmNzqVHT1JZCCscKSIoIkdpziLQFsiMGk%2B8ntpMbxaHux0eOBdeztmueOlsYMEKQjVJEYxnpVFcKlDr%2Fmsq%2FlxTxd6l0ib7LhNO%2BXmorMv6hMc891H3DwEQVYiARzFZA%2BZW%2B1IBcLwn1K%2FVJ7PVTHjw%2BcEmh2ADIPvFkXV5MNGqVobMBDyGx9zWK5cTZf4RqEVwoiDDeht6HHs7i5rxFm9NtLXGuLcTUhWVKzMFsGhbWh13PPbHytreKAFyiNGYTm5FZNcU6y8biCenaV5kTdHja7X%2Bu0Pr5MvXr%2BaSWSFdsM%2Fl%2F8Zv3I%2BAeiWHTw3RVtT9%2FCYlVgrW%2BUuus6gCQESkpWqYMLf598QGOqUByUFxPp68TSU0sZHGXHv%2BqAWgc1G8T21YLH7NtcQtxaNdw81DrZsEyFVoY7je9BfYW2%2BwYpXcJKNcEMYmVCuDMUXKSl%2By7PSdeBzM465wnnOQvtHZG4giGWu4TmaFz1FGRoQCFVJeMMQyViYZ0smhu0UoJvTRIfYEtKY1PUGCVmQKCwSuJduqndEJiXhN7d2sAuZJknH0azKjlsHFSUzU6h28MYuS&X-Amz-Signature=b2a459d74cd524ad70636258cf446a3ac090d352cbb9121b53bcc9991e2ed4f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466542HAVLA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB6yjxhv4WoKyomk1pAQg1QUnkiQDdTyyWYSMSUXFMmQIgEo844WXXL46OQl9aN9Pf6jTXGixcvjKsD5l8qDh0yIwq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDPXyms4GPeJlelqJDyrcA0bezZUh8NkOSaOH00oxPYzTlwcUYrBmKLRVTzaPGpfikowmSLshHYJU6S5rA%2BzJZdy9DlALqjsVaiZZL%2FtHH0omXG5XU%2B7xxFxptHcrYfV2sU2UubTm7s0y0xZsg20S9E9JSBdA1eYEv4mb%2FDy06jJa2LkWE%2Fv2m9AiqMHdfSKqJwKW1NonVtP%2B5oAqiBPjxsacncr62BT3C4Ys%2BCbyx%2Fgzwr53zUIXjZHdocp2eYJo35apfThnE4oZrdM%2FFuWiPG%2BW5XXV127mUbIkR8%2F%2Fk3fQjZpFqKuw2CmNzqVHT1JZCCscKSIoIkdpziLQFsiMGk%2B8ntpMbxaHux0eOBdeztmueOlsYMEKQjVJEYxnpVFcKlDr%2Fmsq%2FlxTxd6l0ib7LhNO%2BXmorMv6hMc891H3DwEQVYiARzFZA%2BZW%2B1IBcLwn1K%2FVJ7PVTHjw%2BcEmh2ADIPvFkXV5MNGqVobMBDyGx9zWK5cTZf4RqEVwoiDDeht6HHs7i5rxFm9NtLXGuLcTUhWVKzMFsGhbWh13PPbHytreKAFyiNGYTm5FZNcU6y8biCenaV5kTdHja7X%2Bu0Pr5MvXr%2BaSWSFdsM%2Fl%2F8Zv3I%2BAeiWHTw3RVtT9%2FCYlVgrW%2BUuus6gCQESkpWqYMLf598QGOqUByUFxPp68TSU0sZHGXHv%2BqAWgc1G8T21YLH7NtcQtxaNdw81DrZsEyFVoY7je9BfYW2%2BwYpXcJKNcEMYmVCuDMUXKSl%2By7PSdeBzM465wnnOQvtHZG4giGWu4TmaFz1FGRoQCFVJeMMQyViYZ0smhu0UoJvTRIfYEtKY1PUGCVmQKCwSuJduqndEJiXhN7d2sAuZJknH0azKjlsHFSUzU6h28MYuS&X-Amz-Signature=a7ebd4ceabb31e69888857d3d5613c1d9a4c33c5848585972d0e29cf25c51afe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
