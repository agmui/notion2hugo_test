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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLKECFKF%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T100855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAMOa5QP7eadiz4cGOeHq5%2B0OvaNVEeME76TMPaKWdFXAiEAm9kaBFLty8o5eCT22LwKXjQ2BsnPjd%2FI2HigGICqXHIqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFyeUX%2BWjcoWibzGSrcA80lY8WscLfHTxgeWFrMNZaDDUt1tvU1KqUbIM6ruwAZV%2F2j6eZT2Er9vpH8if29DM8rsVfcu%2FD69YYNTJn37%2F6NTuq%2BJpZrSpbv2xz4hdYrtcB0wXp4l5uW72b%2BSeK3dhq2ILkg%2BxRnxEmZNF5mdOYcCDL8opCi25d6GaZ%2BSTwis%2Bkd88TCKHzWEvsOD3%2FAQAldqQ1WWRFsJX0sofzPcbg54FIuWRk5UySpwfm1t6g5wezVuguBqu%2BNfLJdrP3ozkcioXKZOVP1EHppWBFOfyjcxHPSuZoyuV6f9ZMkZMz4xYgDsKbdIjPESasciiS4b7qUgauwH2ZG5ZNIqhfSgmXV%2FgUVVsUIvUTD5%2FcdnclyRevByobzdwKgOqEAK9arJWz%2BeP89FaqHoskK1vi9xskIkTCmfJEdzWG%2BtUjftT5piSM1Z1xlqTq%2BDclT8MfBqYzgayDjFsGKNPC27chzuC0LurTvz%2FoaMGQLtC4mFed7U5d2%2FMOubfCkB7mtR2pp7ZeIH9ikS0bsof%2FwkvHVeSw%2BgrvrXPsKD47J6dE8i7r0ryEy1KRAa7PRhBpOEmf7lOOfm%2FeIS5vlsSdzPDes3bJ6s7tqYcWe9Qh8IvuYBYUAZ2pJG6s4yU9eryKnMJ%2B3rL0GOqUBMUavxlOReo8OReJLYzKGyquRgvCPZfgtEYPxcdlMd2JYYhbSET6JXbcuQYaS46107%2FJ3JPg71fKhhOE3g%2BzX9%2BIGKjkGNzdm4ROfhqK83Gc8M3cpXkAcwgIZP6SJd%2BnT6Rl8r4ZzGNmG%2BmCz8eTMiXP95xx7fETUrUDw%2FrTjyweHXeazxdB4D11O%2B5tbpPpLWbYwS3BM%2FzBby0RPA8ZBJtUqInmr&X-Amz-Signature=4e8f16385449093c777877d0ada6ebcb2836127663a4c287ccd1f82f78bd6401&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLKECFKF%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T100855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAMOa5QP7eadiz4cGOeHq5%2B0OvaNVEeME76TMPaKWdFXAiEAm9kaBFLty8o5eCT22LwKXjQ2BsnPjd%2FI2HigGICqXHIqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFyeUX%2BWjcoWibzGSrcA80lY8WscLfHTxgeWFrMNZaDDUt1tvU1KqUbIM6ruwAZV%2F2j6eZT2Er9vpH8if29DM8rsVfcu%2FD69YYNTJn37%2F6NTuq%2BJpZrSpbv2xz4hdYrtcB0wXp4l5uW72b%2BSeK3dhq2ILkg%2BxRnxEmZNF5mdOYcCDL8opCi25d6GaZ%2BSTwis%2Bkd88TCKHzWEvsOD3%2FAQAldqQ1WWRFsJX0sofzPcbg54FIuWRk5UySpwfm1t6g5wezVuguBqu%2BNfLJdrP3ozkcioXKZOVP1EHppWBFOfyjcxHPSuZoyuV6f9ZMkZMz4xYgDsKbdIjPESasciiS4b7qUgauwH2ZG5ZNIqhfSgmXV%2FgUVVsUIvUTD5%2FcdnclyRevByobzdwKgOqEAK9arJWz%2BeP89FaqHoskK1vi9xskIkTCmfJEdzWG%2BtUjftT5piSM1Z1xlqTq%2BDclT8MfBqYzgayDjFsGKNPC27chzuC0LurTvz%2FoaMGQLtC4mFed7U5d2%2FMOubfCkB7mtR2pp7ZeIH9ikS0bsof%2FwkvHVeSw%2BgrvrXPsKD47J6dE8i7r0ryEy1KRAa7PRhBpOEmf7lOOfm%2FeIS5vlsSdzPDes3bJ6s7tqYcWe9Qh8IvuYBYUAZ2pJG6s4yU9eryKnMJ%2B3rL0GOqUBMUavxlOReo8OReJLYzKGyquRgvCPZfgtEYPxcdlMd2JYYhbSET6JXbcuQYaS46107%2FJ3JPg71fKhhOE3g%2BzX9%2BIGKjkGNzdm4ROfhqK83Gc8M3cpXkAcwgIZP6SJd%2BnT6Rl8r4ZzGNmG%2BmCz8eTMiXP95xx7fETUrUDw%2FrTjyweHXeazxdB4D11O%2B5tbpPpLWbYwS3BM%2FzBby0RPA8ZBJtUqInmr&X-Amz-Signature=f8f8e94c1d077c3f66599650df0d4bb56213977a719bb45e43e15c7a291001ff&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLKECFKF%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T100855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAMOa5QP7eadiz4cGOeHq5%2B0OvaNVEeME76TMPaKWdFXAiEAm9kaBFLty8o5eCT22LwKXjQ2BsnPjd%2FI2HigGICqXHIqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFyeUX%2BWjcoWibzGSrcA80lY8WscLfHTxgeWFrMNZaDDUt1tvU1KqUbIM6ruwAZV%2F2j6eZT2Er9vpH8if29DM8rsVfcu%2FD69YYNTJn37%2F6NTuq%2BJpZrSpbv2xz4hdYrtcB0wXp4l5uW72b%2BSeK3dhq2ILkg%2BxRnxEmZNF5mdOYcCDL8opCi25d6GaZ%2BSTwis%2Bkd88TCKHzWEvsOD3%2FAQAldqQ1WWRFsJX0sofzPcbg54FIuWRk5UySpwfm1t6g5wezVuguBqu%2BNfLJdrP3ozkcioXKZOVP1EHppWBFOfyjcxHPSuZoyuV6f9ZMkZMz4xYgDsKbdIjPESasciiS4b7qUgauwH2ZG5ZNIqhfSgmXV%2FgUVVsUIvUTD5%2FcdnclyRevByobzdwKgOqEAK9arJWz%2BeP89FaqHoskK1vi9xskIkTCmfJEdzWG%2BtUjftT5piSM1Z1xlqTq%2BDclT8MfBqYzgayDjFsGKNPC27chzuC0LurTvz%2FoaMGQLtC4mFed7U5d2%2FMOubfCkB7mtR2pp7ZeIH9ikS0bsof%2FwkvHVeSw%2BgrvrXPsKD47J6dE8i7r0ryEy1KRAa7PRhBpOEmf7lOOfm%2FeIS5vlsSdzPDes3bJ6s7tqYcWe9Qh8IvuYBYUAZ2pJG6s4yU9eryKnMJ%2B3rL0GOqUBMUavxlOReo8OReJLYzKGyquRgvCPZfgtEYPxcdlMd2JYYhbSET6JXbcuQYaS46107%2FJ3JPg71fKhhOE3g%2BzX9%2BIGKjkGNzdm4ROfhqK83Gc8M3cpXkAcwgIZP6SJd%2BnT6Rl8r4ZzGNmG%2BmCz8eTMiXP95xx7fETUrUDw%2FrTjyweHXeazxdB4D11O%2B5tbpPpLWbYwS3BM%2FzBby0RPA8ZBJtUqInmr&X-Amz-Signature=c830c8a31b783d1668ac1c24e1e79f991f862c2bf6643819cd09693b3f270afe&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
