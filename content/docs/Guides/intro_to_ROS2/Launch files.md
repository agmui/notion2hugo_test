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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGNTXOD5%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T050922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQCn61mKI1wFHtl2eDkJ5%2B7qz653DMXwflty6QFC71LpVAIgNCp%2BJsy%2F%2Bs3OKXKKWtzazu3iGQE1vP4372Y8tLPdBA0qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDobI7GQdwsKuqxMJircAxg9mYa7xDHsqiMpOixQvWSs%2Fp9ewBFUliQEt6eNoBteDJ5MzWxZciJAZCWVmnOVYY2qE7FSuU7nn5xVIm709vKifPRtyj2n2tgCBwXtTI5W4tXCBDiDL8i3uiSK%2BjkM6pr8FbSiopqrFOKxH%2FXNgFMTW8YKGLpf5lG%2B3c%2BpgJQxPgvZds3jJI1l77RuP1r6OBP9NfBA4FxwbRNPwI%2FGYjtxnBGvNzOzTBpims6LhQAlNxmW91buJjV%2FFrRS2UwoRD7JX2eaLm0jsfCSyU5pNxs2RY6McAo36yJFnei8VcgFnHWaAO5SmfkEDJVzphTHTCTdeobjOA4V6WAjPAad4GaXUit92he2TEvnjoFXLA8uxB7dJIAGcYLReLPnjvVM6IzDw5nHw4p%2BUFmS8kb8d%2Bmy2N1dkatF8w9wvIi7Mavc09LWiWuukhVWER9H%2FmixEADhxNHSoFtoid38INgTO2YhSKtU3Hc8nWp%2FKzVej8qy6gDUw4OXp6IAxSLYGjvKOlSZ804wOEV%2BYXCBmmvrrvphGtlZwgDNH8eJnkd9YuAR3JxvrQcrs1tBU2XlrpQkDIRMIowc3e1yx9xnpvBKMJMq69a1DkirYzpNoYgewpox5dQ%2B1OGrHb7EPsk0MO27nMAGOqUB4V9876VJml3j4m7Yoiv2iNrB8KcBDNkhaR%2Fwv2pRBTx4%2BjHit3LCAHpbpiI96Iytjq%2BxI%2F5DixfnpEuNsV947syE6QCbudfH4p9flYFyAzfpEcnhI%2B3lM%2F%2B4tvKdEMVXQZhPgmTbBc9CZlYt7gtOFVxN%2BuqOUCGDD2MkInF%2Fq5yRIJdA9NyEW29J%2BFPHPkQpzviCHbWUXi%2FegaLhDgi%2BRlnu8Z6j&X-Amz-Signature=7a3675a96d7efbbc7b0b56c6762bff9f629928220489c289c224a56b2ed92ea6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGNTXOD5%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T050922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQCn61mKI1wFHtl2eDkJ5%2B7qz653DMXwflty6QFC71LpVAIgNCp%2BJsy%2F%2Bs3OKXKKWtzazu3iGQE1vP4372Y8tLPdBA0qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDobI7GQdwsKuqxMJircAxg9mYa7xDHsqiMpOixQvWSs%2Fp9ewBFUliQEt6eNoBteDJ5MzWxZciJAZCWVmnOVYY2qE7FSuU7nn5xVIm709vKifPRtyj2n2tgCBwXtTI5W4tXCBDiDL8i3uiSK%2BjkM6pr8FbSiopqrFOKxH%2FXNgFMTW8YKGLpf5lG%2B3c%2BpgJQxPgvZds3jJI1l77RuP1r6OBP9NfBA4FxwbRNPwI%2FGYjtxnBGvNzOzTBpims6LhQAlNxmW91buJjV%2FFrRS2UwoRD7JX2eaLm0jsfCSyU5pNxs2RY6McAo36yJFnei8VcgFnHWaAO5SmfkEDJVzphTHTCTdeobjOA4V6WAjPAad4GaXUit92he2TEvnjoFXLA8uxB7dJIAGcYLReLPnjvVM6IzDw5nHw4p%2BUFmS8kb8d%2Bmy2N1dkatF8w9wvIi7Mavc09LWiWuukhVWER9H%2FmixEADhxNHSoFtoid38INgTO2YhSKtU3Hc8nWp%2FKzVej8qy6gDUw4OXp6IAxSLYGjvKOlSZ804wOEV%2BYXCBmmvrrvphGtlZwgDNH8eJnkd9YuAR3JxvrQcrs1tBU2XlrpQkDIRMIowc3e1yx9xnpvBKMJMq69a1DkirYzpNoYgewpox5dQ%2B1OGrHb7EPsk0MO27nMAGOqUB4V9876VJml3j4m7Yoiv2iNrB8KcBDNkhaR%2Fwv2pRBTx4%2BjHit3LCAHpbpiI96Iytjq%2BxI%2F5DixfnpEuNsV947syE6QCbudfH4p9flYFyAzfpEcnhI%2B3lM%2F%2B4tvKdEMVXQZhPgmTbBc9CZlYt7gtOFVxN%2BuqOUCGDD2MkInF%2Fq5yRIJdA9NyEW29J%2BFPHPkQpzviCHbWUXi%2FegaLhDgi%2BRlnu8Z6j&X-Amz-Signature=90d2f5d9b46a08797f94a0811ef81c0267aaa4c6786c74cef603fe6aece7311b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGNTXOD5%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T050922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQCn61mKI1wFHtl2eDkJ5%2B7qz653DMXwflty6QFC71LpVAIgNCp%2BJsy%2F%2Bs3OKXKKWtzazu3iGQE1vP4372Y8tLPdBA0qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDobI7GQdwsKuqxMJircAxg9mYa7xDHsqiMpOixQvWSs%2Fp9ewBFUliQEt6eNoBteDJ5MzWxZciJAZCWVmnOVYY2qE7FSuU7nn5xVIm709vKifPRtyj2n2tgCBwXtTI5W4tXCBDiDL8i3uiSK%2BjkM6pr8FbSiopqrFOKxH%2FXNgFMTW8YKGLpf5lG%2B3c%2BpgJQxPgvZds3jJI1l77RuP1r6OBP9NfBA4FxwbRNPwI%2FGYjtxnBGvNzOzTBpims6LhQAlNxmW91buJjV%2FFrRS2UwoRD7JX2eaLm0jsfCSyU5pNxs2RY6McAo36yJFnei8VcgFnHWaAO5SmfkEDJVzphTHTCTdeobjOA4V6WAjPAad4GaXUit92he2TEvnjoFXLA8uxB7dJIAGcYLReLPnjvVM6IzDw5nHw4p%2BUFmS8kb8d%2Bmy2N1dkatF8w9wvIi7Mavc09LWiWuukhVWER9H%2FmixEADhxNHSoFtoid38INgTO2YhSKtU3Hc8nWp%2FKzVej8qy6gDUw4OXp6IAxSLYGjvKOlSZ804wOEV%2BYXCBmmvrrvphGtlZwgDNH8eJnkd9YuAR3JxvrQcrs1tBU2XlrpQkDIRMIowc3e1yx9xnpvBKMJMq69a1DkirYzpNoYgewpox5dQ%2B1OGrHb7EPsk0MO27nMAGOqUB4V9876VJml3j4m7Yoiv2iNrB8KcBDNkhaR%2Fwv2pRBTx4%2BjHit3LCAHpbpiI96Iytjq%2BxI%2F5DixfnpEuNsV947syE6QCbudfH4p9flYFyAzfpEcnhI%2B3lM%2F%2B4tvKdEMVXQZhPgmTbBc9CZlYt7gtOFVxN%2BuqOUCGDD2MkInF%2Fq5yRIJdA9NyEW29J%2BFPHPkQpzviCHbWUXi%2FegaLhDgi%2BRlnu8Z6j&X-Amz-Signature=d68340927e1718d739a43c947288c3ad23be3d46b929d52ef9b1ddd622c073c4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
