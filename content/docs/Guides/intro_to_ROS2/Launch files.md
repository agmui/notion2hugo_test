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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRMKEUMS%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T080913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCsEzdSX4rfvog8uenjo5XZtYEui0egRfRMwV9696h4MQIgOGj%2BpP0B3d8AKbF0pbsg%2FLSdWS%2FxNv%2B%2FARvWPze5YYIq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDLFbvNekV8sqAZ8Y5yrcA6gGWqfQXo14CCnc83xcKaEgIiL0unGZj%2FDe2B%2BbRRiBTcLFvFEPbbbOmK3xiD%2B6N9XceP2AfgrXlQ4Q7WgfMmhhpmUq4tvNro5RCrck5M9%2F3LUurwa7IH%2B9B4vACCQ3tsMCRJmL8PkxMunlKZ8o0dlqfuYpaz5uZeRcMZNgX1zev%2BQCns79CoJk%2BBobii3LVHDYj22V%2B8JyIhzBPq0zQx3d%2BFf68PQ%2BATMXzgG%2FgGUXoVvi5OoyfjaaWHgJ2cPqNKgeKew23K0jR%2BPXYGIkz6ynbTQxq1skFj8j1Op79IictHzksw1sCf9F97fsOUfA3wqDObW4zCdSqsdwJNxMPFp8IKk%2Bb7B9quAx1Q00Cuggc02RhYYPm6nGTP4mU0dil%2FA60sT8D0dTXayaKbdRMFvdXssg71DPx834xs5QExBwf3mjF1yZuzwStsM784b8nBgTWPeprkjfEw1VRoTW6ClKqZHXC1RNfVoKeqIgn3V9TqbldEyBwrzRQuIg4FJ6YCYvjAY67TX9gOdE2yyWAsORFY4x4IA0ZYOuBYv%2B5xXebo%2FLEnzXwwEuXspDudy9IycwKpC8%2Fu1HW8Lq4f8mw98%2FfNtaVwVTz062IDgkoGGmEuLQwL7Pxkdr8hJJMOqEwb0GOqUBTP9b%2BRnmxCknM%2BzX7YZmDqPo1vBL13K8zUPonz3yUGolbVtl06YDtuyf%2BSWzq02QPNEo1vTnVPdIW%2F7L7S5RsLXczAJuJiV2CctnMDyUjWTuJH7KnuNQZjmqUSxn5hHH%2BtW0pEwgXsu2Rjm74cOw9eXn%2Fvyxc%2BqfGvtTEg1%2Fud30vIn5qFoq8FX%2BLOSaeqNBJWq6vlOGOjLgpnTe3EpuOcWqTIDc&X-Amz-Signature=720559140dbf917fca93e720b9aea2327cd96ea8b16386c7068f519a48b1224d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRMKEUMS%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T080913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCsEzdSX4rfvog8uenjo5XZtYEui0egRfRMwV9696h4MQIgOGj%2BpP0B3d8AKbF0pbsg%2FLSdWS%2FxNv%2B%2FARvWPze5YYIq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDLFbvNekV8sqAZ8Y5yrcA6gGWqfQXo14CCnc83xcKaEgIiL0unGZj%2FDe2B%2BbRRiBTcLFvFEPbbbOmK3xiD%2B6N9XceP2AfgrXlQ4Q7WgfMmhhpmUq4tvNro5RCrck5M9%2F3LUurwa7IH%2B9B4vACCQ3tsMCRJmL8PkxMunlKZ8o0dlqfuYpaz5uZeRcMZNgX1zev%2BQCns79CoJk%2BBobii3LVHDYj22V%2B8JyIhzBPq0zQx3d%2BFf68PQ%2BATMXzgG%2FgGUXoVvi5OoyfjaaWHgJ2cPqNKgeKew23K0jR%2BPXYGIkz6ynbTQxq1skFj8j1Op79IictHzksw1sCf9F97fsOUfA3wqDObW4zCdSqsdwJNxMPFp8IKk%2Bb7B9quAx1Q00Cuggc02RhYYPm6nGTP4mU0dil%2FA60sT8D0dTXayaKbdRMFvdXssg71DPx834xs5QExBwf3mjF1yZuzwStsM784b8nBgTWPeprkjfEw1VRoTW6ClKqZHXC1RNfVoKeqIgn3V9TqbldEyBwrzRQuIg4FJ6YCYvjAY67TX9gOdE2yyWAsORFY4x4IA0ZYOuBYv%2B5xXebo%2FLEnzXwwEuXspDudy9IycwKpC8%2Fu1HW8Lq4f8mw98%2FfNtaVwVTz062IDgkoGGmEuLQwL7Pxkdr8hJJMOqEwb0GOqUBTP9b%2BRnmxCknM%2BzX7YZmDqPo1vBL13K8zUPonz3yUGolbVtl06YDtuyf%2BSWzq02QPNEo1vTnVPdIW%2F7L7S5RsLXczAJuJiV2CctnMDyUjWTuJH7KnuNQZjmqUSxn5hHH%2BtW0pEwgXsu2Rjm74cOw9eXn%2Fvyxc%2BqfGvtTEg1%2Fud30vIn5qFoq8FX%2BLOSaeqNBJWq6vlOGOjLgpnTe3EpuOcWqTIDc&X-Amz-Signature=493bebd40822a541dc9f4ffca07a5535687b2f6dba883284e720f3784aefea1b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRMKEUMS%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T080913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCsEzdSX4rfvog8uenjo5XZtYEui0egRfRMwV9696h4MQIgOGj%2BpP0B3d8AKbF0pbsg%2FLSdWS%2FxNv%2B%2FARvWPze5YYIq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDLFbvNekV8sqAZ8Y5yrcA6gGWqfQXo14CCnc83xcKaEgIiL0unGZj%2FDe2B%2BbRRiBTcLFvFEPbbbOmK3xiD%2B6N9XceP2AfgrXlQ4Q7WgfMmhhpmUq4tvNro5RCrck5M9%2F3LUurwa7IH%2B9B4vACCQ3tsMCRJmL8PkxMunlKZ8o0dlqfuYpaz5uZeRcMZNgX1zev%2BQCns79CoJk%2BBobii3LVHDYj22V%2B8JyIhzBPq0zQx3d%2BFf68PQ%2BATMXzgG%2FgGUXoVvi5OoyfjaaWHgJ2cPqNKgeKew23K0jR%2BPXYGIkz6ynbTQxq1skFj8j1Op79IictHzksw1sCf9F97fsOUfA3wqDObW4zCdSqsdwJNxMPFp8IKk%2Bb7B9quAx1Q00Cuggc02RhYYPm6nGTP4mU0dil%2FA60sT8D0dTXayaKbdRMFvdXssg71DPx834xs5QExBwf3mjF1yZuzwStsM784b8nBgTWPeprkjfEw1VRoTW6ClKqZHXC1RNfVoKeqIgn3V9TqbldEyBwrzRQuIg4FJ6YCYvjAY67TX9gOdE2yyWAsORFY4x4IA0ZYOuBYv%2B5xXebo%2FLEnzXwwEuXspDudy9IycwKpC8%2Fu1HW8Lq4f8mw98%2FfNtaVwVTz062IDgkoGGmEuLQwL7Pxkdr8hJJMOqEwb0GOqUBTP9b%2BRnmxCknM%2BzX7YZmDqPo1vBL13K8zUPonz3yUGolbVtl06YDtuyf%2BSWzq02QPNEo1vTnVPdIW%2F7L7S5RsLXczAJuJiV2CctnMDyUjWTuJH7KnuNQZjmqUSxn5hHH%2BtW0pEwgXsu2Rjm74cOw9eXn%2Fvyxc%2BqfGvtTEg1%2Fud30vIn5qFoq8FX%2BLOSaeqNBJWq6vlOGOjLgpnTe3EpuOcWqTIDc&X-Amz-Signature=c4d77264b13c2095949bd9733a1b07bf1429a201afacf54719e84d0f24979763&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
