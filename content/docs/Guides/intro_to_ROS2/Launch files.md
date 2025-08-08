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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DVIQ4YZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIDjirRJk2RoabdANEt44BVfpu56QLefsR4KIJZqJXe0UAiEAkLuQzpzw4HW1Kx7obiGV1BMyCX4KEk6lTgF74gJoIw0qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEolhH24FJS3fLWipCrcA9pqriBx8orbvrqm52QCRQ9c0rTJuH9Q%2BG%2FmEwDTJMGXLw2py2mIn8bO8rqOAS8uWSf94yjYEnFgeKtavU%2FyVI89BWI%2BT5acq%2F0%2BGdQVaiswOmDBiJDDuRrkO6PDOHmFQqIH17%2BarPsMIxB4Tf9jXOyJaAOutwTKEjx%2Bgnxd%2BOEsApUTTTEyoitSqg%2FDh%2FIpBJqg5iViZU1vd6DXywE%2FUuejEo87NHBcq1%2F9BKOBJ8fBZBZILU35UZi6YBTW%2BYw%2F38VhyUj9BzWjGIGgtyMFq5svWVj%2FM%2BxH2YYMHQvAa0w3v0oVYrJlVT79rfwkHUkYYPMXv%2BHpQU%2BJtMJVqQ%2FSC%2BnbnvHkP265pNucdzhVefdV8bEUcRwNul1KBtC%2BKgFEoBlq66lviAz31oV%2BS5ddel7qULPuxGWExEE%2Bn57%2FC91apvR3m%2BdK8XHvMqKItiQPfEFuX3qfONfzif866wEHRNfZcwZZlghT5r9TOMmDiCvHiuQ5Ky6%2BAN2UItk02ovu1jqxz2Klh0fMU5tbSbBP4RceB329rlowGjYw%2B0Qyo%2BL6bBC%2FZSTTgMbsG1ZsxoukT0RcgYLcO%2F9dr8bPhPier2ubhDfxqtgR2nqH4H%2FQQ5uJFLl4eaREPno4UiXXMJyf1sQGOqUBYFwzb8qP6TsQDbqBYoz0KL6Vul2le4Gt7CoTK%2BK7x394CbG9CFEougL2sn3wYkmBYPnWs4QeDweJIXJHnuuMFkQ4twDWPuxwyZfzRxResll5Iu%2Fiec3i9i4mxqw6pdJLq7gh8%2BS%2BkRgx4o7ygFA7B%2Bcq1weUyENuzSLYfGJPVdQwU9kXw8SX%2BeJMqla5C4Q75Wldi204moaFyzbOcUL9JipX3uck&X-Amz-Signature=5ffb44c774618e5882b40d6da1b7591ad663cd55eba398be5b5b5b5e05269d81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DVIQ4YZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIDjirRJk2RoabdANEt44BVfpu56QLefsR4KIJZqJXe0UAiEAkLuQzpzw4HW1Kx7obiGV1BMyCX4KEk6lTgF74gJoIw0qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEolhH24FJS3fLWipCrcA9pqriBx8orbvrqm52QCRQ9c0rTJuH9Q%2BG%2FmEwDTJMGXLw2py2mIn8bO8rqOAS8uWSf94yjYEnFgeKtavU%2FyVI89BWI%2BT5acq%2F0%2BGdQVaiswOmDBiJDDuRrkO6PDOHmFQqIH17%2BarPsMIxB4Tf9jXOyJaAOutwTKEjx%2Bgnxd%2BOEsApUTTTEyoitSqg%2FDh%2FIpBJqg5iViZU1vd6DXywE%2FUuejEo87NHBcq1%2F9BKOBJ8fBZBZILU35UZi6YBTW%2BYw%2F38VhyUj9BzWjGIGgtyMFq5svWVj%2FM%2BxH2YYMHQvAa0w3v0oVYrJlVT79rfwkHUkYYPMXv%2BHpQU%2BJtMJVqQ%2FSC%2BnbnvHkP265pNucdzhVefdV8bEUcRwNul1KBtC%2BKgFEoBlq66lviAz31oV%2BS5ddel7qULPuxGWExEE%2Bn57%2FC91apvR3m%2BdK8XHvMqKItiQPfEFuX3qfONfzif866wEHRNfZcwZZlghT5r9TOMmDiCvHiuQ5Ky6%2BAN2UItk02ovu1jqxz2Klh0fMU5tbSbBP4RceB329rlowGjYw%2B0Qyo%2BL6bBC%2FZSTTgMbsG1ZsxoukT0RcgYLcO%2F9dr8bPhPier2ubhDfxqtgR2nqH4H%2FQQ5uJFLl4eaREPno4UiXXMJyf1sQGOqUBYFwzb8qP6TsQDbqBYoz0KL6Vul2le4Gt7CoTK%2BK7x394CbG9CFEougL2sn3wYkmBYPnWs4QeDweJIXJHnuuMFkQ4twDWPuxwyZfzRxResll5Iu%2Fiec3i9i4mxqw6pdJLq7gh8%2BS%2BkRgx4o7ygFA7B%2Bcq1weUyENuzSLYfGJPVdQwU9kXw8SX%2BeJMqla5C4Q75Wldi204moaFyzbOcUL9JipX3uck&X-Amz-Signature=c06139d2f5a5b10e46038466ed9c1adc43bde6fd82d86550fb17fb50c12c2cb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DVIQ4YZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIDjirRJk2RoabdANEt44BVfpu56QLefsR4KIJZqJXe0UAiEAkLuQzpzw4HW1Kx7obiGV1BMyCX4KEk6lTgF74gJoIw0qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEolhH24FJS3fLWipCrcA9pqriBx8orbvrqm52QCRQ9c0rTJuH9Q%2BG%2FmEwDTJMGXLw2py2mIn8bO8rqOAS8uWSf94yjYEnFgeKtavU%2FyVI89BWI%2BT5acq%2F0%2BGdQVaiswOmDBiJDDuRrkO6PDOHmFQqIH17%2BarPsMIxB4Tf9jXOyJaAOutwTKEjx%2Bgnxd%2BOEsApUTTTEyoitSqg%2FDh%2FIpBJqg5iViZU1vd6DXywE%2FUuejEo87NHBcq1%2F9BKOBJ8fBZBZILU35UZi6YBTW%2BYw%2F38VhyUj9BzWjGIGgtyMFq5svWVj%2FM%2BxH2YYMHQvAa0w3v0oVYrJlVT79rfwkHUkYYPMXv%2BHpQU%2BJtMJVqQ%2FSC%2BnbnvHkP265pNucdzhVefdV8bEUcRwNul1KBtC%2BKgFEoBlq66lviAz31oV%2BS5ddel7qULPuxGWExEE%2Bn57%2FC91apvR3m%2BdK8XHvMqKItiQPfEFuX3qfONfzif866wEHRNfZcwZZlghT5r9TOMmDiCvHiuQ5Ky6%2BAN2UItk02ovu1jqxz2Klh0fMU5tbSbBP4RceB329rlowGjYw%2B0Qyo%2BL6bBC%2FZSTTgMbsG1ZsxoukT0RcgYLcO%2F9dr8bPhPier2ubhDfxqtgR2nqH4H%2FQQ5uJFLl4eaREPno4UiXXMJyf1sQGOqUBYFwzb8qP6TsQDbqBYoz0KL6Vul2le4Gt7CoTK%2BK7x394CbG9CFEougL2sn3wYkmBYPnWs4QeDweJIXJHnuuMFkQ4twDWPuxwyZfzRxResll5Iu%2Fiec3i9i4mxqw6pdJLq7gh8%2BS%2BkRgx4o7ygFA7B%2Bcq1weUyENuzSLYfGJPVdQwU9kXw8SX%2BeJMqla5C4Q75Wldi204moaFyzbOcUL9JipX3uck&X-Amz-Signature=599f2e54dc936623962e36103e5de5697e31f3b2490f7feb91378b182f8b418e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
