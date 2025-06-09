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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2RWPCHB%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T071104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDOlgkB0F%2BxJUEPXTFx6%2BT3qyrq4pDyJAcysf6G6wTwpAiEA1GkAuEI6GWinelPGAXcreikRtM7kdXzDCBnYKU%2FmvRIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFtGymN88Kx1km4yCrcA5O%2B4lp%2BfNWm211lpp03gicqyNNIstFinG2lBuSSlZ9fKrjJosnNj8DULsgDgGHgYE0UiYto4n%2Bi5QuwbtVft46Eq468PQrmp9ztZ7qWMJr0%2BpcfjnKPxi8Eyf1YA7nKBBledr247Bj5xXfFWKfqYHLw01N%2BtRzu4xMDgfKTWwXW7ENeFy6PtaHGRWRkdMcE1BI46EGgVBpmN4T9aOntL8BCbkxq%2BQ9kjMdy9zGv%2Fld5%2Fl9YwdZwSsfm57%2BPdNQFjx%2BGHTVcTiOAzOg%2FGEX1a5mdk7z%2FNWQycuBEWXgSsAIj9yedxOeCBG2lif192x3sLpNvO5BwOc9%2F%2BQtSInqyzfkSuIvNlpTNQTQSpY52n%2FDgz3bJsdtDHm6a2zLpCommcvdTkfK8u%2FqFf%2FEIcKOaTk8ENyGmdcsH5YBwPaaHCVu%2FVoK%2B6%2F%2Bf24wfdHnPHJ61bju2y7lcf4HPZACSQxjunGXtinXCWVuS9iXgArgtXnlZS0ZUE6U8%2BGXyoSJAYYm7AvxW4RXoQtlrEGhONot%2BN4Fj2SWiY0h%2F0hg816KQkdip3msk88XVjXIzUAT0t%2BznHk1wb4G60o7WBv4zpMQM97QdsXxExFjJ1WP0F5RDbhoLhZca7By4PMuR4FDFMK3dmcIGOqUB3w5U%2FNJQQBfBg%2BCjFWsv0DP98kd%2FcwYbt3vZ6HkqJXAHixLTkuU3VgCX08LduEZ0GmVRE7bFKjQXEm%2FU%2F%2BzV3cUZRLf3yu%2BHAwHp9Rva4f0TdW6gNQtvp%2Bzbgjc8pDZDLPRgUKMDw4Fbuh6G%2Bg3Q11nFcv4UzCXwx%2Bcxlm7AnCoJh%2BH5PYlUsxEttP15r02IdTWH3ju%2BfVK7m2S%2BT%2BADRSQFH2t3&X-Amz-Signature=e444dc256aa1f994b59a75bad2e951decd1befe536ff3c934c75181ef8cd9880&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2RWPCHB%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T071104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDOlgkB0F%2BxJUEPXTFx6%2BT3qyrq4pDyJAcysf6G6wTwpAiEA1GkAuEI6GWinelPGAXcreikRtM7kdXzDCBnYKU%2FmvRIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFtGymN88Kx1km4yCrcA5O%2B4lp%2BfNWm211lpp03gicqyNNIstFinG2lBuSSlZ9fKrjJosnNj8DULsgDgGHgYE0UiYto4n%2Bi5QuwbtVft46Eq468PQrmp9ztZ7qWMJr0%2BpcfjnKPxi8Eyf1YA7nKBBledr247Bj5xXfFWKfqYHLw01N%2BtRzu4xMDgfKTWwXW7ENeFy6PtaHGRWRkdMcE1BI46EGgVBpmN4T9aOntL8BCbkxq%2BQ9kjMdy9zGv%2Fld5%2Fl9YwdZwSsfm57%2BPdNQFjx%2BGHTVcTiOAzOg%2FGEX1a5mdk7z%2FNWQycuBEWXgSsAIj9yedxOeCBG2lif192x3sLpNvO5BwOc9%2F%2BQtSInqyzfkSuIvNlpTNQTQSpY52n%2FDgz3bJsdtDHm6a2zLpCommcvdTkfK8u%2FqFf%2FEIcKOaTk8ENyGmdcsH5YBwPaaHCVu%2FVoK%2B6%2F%2Bf24wfdHnPHJ61bju2y7lcf4HPZACSQxjunGXtinXCWVuS9iXgArgtXnlZS0ZUE6U8%2BGXyoSJAYYm7AvxW4RXoQtlrEGhONot%2BN4Fj2SWiY0h%2F0hg816KQkdip3msk88XVjXIzUAT0t%2BznHk1wb4G60o7WBv4zpMQM97QdsXxExFjJ1WP0F5RDbhoLhZca7By4PMuR4FDFMK3dmcIGOqUB3w5U%2FNJQQBfBg%2BCjFWsv0DP98kd%2FcwYbt3vZ6HkqJXAHixLTkuU3VgCX08LduEZ0GmVRE7bFKjQXEm%2FU%2F%2BzV3cUZRLf3yu%2BHAwHp9Rva4f0TdW6gNQtvp%2Bzbgjc8pDZDLPRgUKMDw4Fbuh6G%2Bg3Q11nFcv4UzCXwx%2Bcxlm7AnCoJh%2BH5PYlUsxEttP15r02IdTWH3ju%2BfVK7m2S%2BT%2BADRSQFH2t3&X-Amz-Signature=5ece4201d0e69502d3b981651eb0f6a461f990f3488e10bd3e15694573e15023&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2RWPCHB%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T071104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDOlgkB0F%2BxJUEPXTFx6%2BT3qyrq4pDyJAcysf6G6wTwpAiEA1GkAuEI6GWinelPGAXcreikRtM7kdXzDCBnYKU%2FmvRIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFtGymN88Kx1km4yCrcA5O%2B4lp%2BfNWm211lpp03gicqyNNIstFinG2lBuSSlZ9fKrjJosnNj8DULsgDgGHgYE0UiYto4n%2Bi5QuwbtVft46Eq468PQrmp9ztZ7qWMJr0%2BpcfjnKPxi8Eyf1YA7nKBBledr247Bj5xXfFWKfqYHLw01N%2BtRzu4xMDgfKTWwXW7ENeFy6PtaHGRWRkdMcE1BI46EGgVBpmN4T9aOntL8BCbkxq%2BQ9kjMdy9zGv%2Fld5%2Fl9YwdZwSsfm57%2BPdNQFjx%2BGHTVcTiOAzOg%2FGEX1a5mdk7z%2FNWQycuBEWXgSsAIj9yedxOeCBG2lif192x3sLpNvO5BwOc9%2F%2BQtSInqyzfkSuIvNlpTNQTQSpY52n%2FDgz3bJsdtDHm6a2zLpCommcvdTkfK8u%2FqFf%2FEIcKOaTk8ENyGmdcsH5YBwPaaHCVu%2FVoK%2B6%2F%2Bf24wfdHnPHJ61bju2y7lcf4HPZACSQxjunGXtinXCWVuS9iXgArgtXnlZS0ZUE6U8%2BGXyoSJAYYm7AvxW4RXoQtlrEGhONot%2BN4Fj2SWiY0h%2F0hg816KQkdip3msk88XVjXIzUAT0t%2BznHk1wb4G60o7WBv4zpMQM97QdsXxExFjJ1WP0F5RDbhoLhZca7By4PMuR4FDFMK3dmcIGOqUB3w5U%2FNJQQBfBg%2BCjFWsv0DP98kd%2FcwYbt3vZ6HkqJXAHixLTkuU3VgCX08LduEZ0GmVRE7bFKjQXEm%2FU%2F%2BzV3cUZRLf3yu%2BHAwHp9Rva4f0TdW6gNQtvp%2Bzbgjc8pDZDLPRgUKMDw4Fbuh6G%2Bg3Q11nFcv4UzCXwx%2Bcxlm7AnCoJh%2BH5PYlUsxEttP15r02IdTWH3ju%2BfVK7m2S%2BT%2BADRSQFH2t3&X-Amz-Signature=7fe69327d1ce464be45954c3d9f8048753a8289ee9042fb2d5fc62a2b90abb05&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
