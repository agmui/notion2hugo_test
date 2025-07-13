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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS4KLTC3%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDR4RxWpm%2F%2BZB3Jg7yv%2BOjvEHBRthDKtTcCQ2WLNdMw2AIgOg4RxfmBty5NvvW%2B3x%2FPFvozgQV6fkNWYpWmoLp30BYq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDOTa9NpsrGagt%2BjxiCrcA57dAXLE3e6KJTEgUl3meHVXMspAXGgjOHd5eb%2BFy7kHi8BzMNrg3ilE55UfPbEm4z9Gy%2FVw8Ob2B3lwSDsizEij8Y7WtY6uxyKSV8nA3N5q7rDg3nI71cJqC2Gan9nncFEgaxcCt4alXIuVaHBEEQ4V2LbzvQQwSbGM%2Fbi79bScX2LRxnYqUF5ua6RrEiV%2Fh%2FziQQB4apoGuzTvsnCp4r0RB9SNhfKCWn3cfej0N8A2xkZYP4ddGazE%2B6ofN1hAZRtD8ObOt3Jv%2FPCB6MZT%2FunDy3Ij6iiNr254Qx7mo5feglio%2B2JhMubbvfcu4ZQIfWTxRYAEA4UfjcJAZDixKwzLXx3jhJhlFDvoaI7JsrZy7MDXL%2FW%2BM6DXYtMs%2FS8ILLNZ50hbG%2FJoB35IVDEJLHqoG8gXifNVtfjTfF3vWeLpSmc7qTS6jGdUYx%2Bf19hYk4awC68giLO3uoIqVxvQ%2BytrGBx1%2Fa%2FKtAM6OYfR%2BhylRvGg2nUcaNJeJKtO%2FXABajLFbe74vqZcQaz%2BBEAF9y9Xn5oqLReb%2Foa%2BP10RuwNbkA2J50%2BCGbeU1vL%2FnbcVTgDB81dsF6%2FwXjI%2BeAoiroPHdcL8P85D4B8iiFdTPwuRsZVDcTzmy8vw6BjhMKPI0MMGOqUBzIBznHaEOedRV%2BmVWJgBk1yb0M4Yu2Db9xNNooheMm9UMesvDWbP2GMccbYqcjvqyxqDdgtUKvLTKkgVpSIAdPaa56FO5FLp8ta7iE8ziRAv2y5wHT4NRKGJ7CCG8q%2F23fjm0fjDtVZ1pVGBkP5FRqG338QKpOWDK1%2FUNmONPwK14KGMCO3o0JMJGD0UNYTi3rHwiR4VVcTt3uDnCYVOKCFAHVOn&X-Amz-Signature=39af833a0ba3de94dfd20a038b1aa482952194d11ce67af9c3864902e8f855e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS4KLTC3%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDR4RxWpm%2F%2BZB3Jg7yv%2BOjvEHBRthDKtTcCQ2WLNdMw2AIgOg4RxfmBty5NvvW%2B3x%2FPFvozgQV6fkNWYpWmoLp30BYq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDOTa9NpsrGagt%2BjxiCrcA57dAXLE3e6KJTEgUl3meHVXMspAXGgjOHd5eb%2BFy7kHi8BzMNrg3ilE55UfPbEm4z9Gy%2FVw8Ob2B3lwSDsizEij8Y7WtY6uxyKSV8nA3N5q7rDg3nI71cJqC2Gan9nncFEgaxcCt4alXIuVaHBEEQ4V2LbzvQQwSbGM%2Fbi79bScX2LRxnYqUF5ua6RrEiV%2Fh%2FziQQB4apoGuzTvsnCp4r0RB9SNhfKCWn3cfej0N8A2xkZYP4ddGazE%2B6ofN1hAZRtD8ObOt3Jv%2FPCB6MZT%2FunDy3Ij6iiNr254Qx7mo5feglio%2B2JhMubbvfcu4ZQIfWTxRYAEA4UfjcJAZDixKwzLXx3jhJhlFDvoaI7JsrZy7MDXL%2FW%2BM6DXYtMs%2FS8ILLNZ50hbG%2FJoB35IVDEJLHqoG8gXifNVtfjTfF3vWeLpSmc7qTS6jGdUYx%2Bf19hYk4awC68giLO3uoIqVxvQ%2BytrGBx1%2Fa%2FKtAM6OYfR%2BhylRvGg2nUcaNJeJKtO%2FXABajLFbe74vqZcQaz%2BBEAF9y9Xn5oqLReb%2Foa%2BP10RuwNbkA2J50%2BCGbeU1vL%2FnbcVTgDB81dsF6%2FwXjI%2BeAoiroPHdcL8P85D4B8iiFdTPwuRsZVDcTzmy8vw6BjhMKPI0MMGOqUBzIBznHaEOedRV%2BmVWJgBk1yb0M4Yu2Db9xNNooheMm9UMesvDWbP2GMccbYqcjvqyxqDdgtUKvLTKkgVpSIAdPaa56FO5FLp8ta7iE8ziRAv2y5wHT4NRKGJ7CCG8q%2F23fjm0fjDtVZ1pVGBkP5FRqG338QKpOWDK1%2FUNmONPwK14KGMCO3o0JMJGD0UNYTi3rHwiR4VVcTt3uDnCYVOKCFAHVOn&X-Amz-Signature=c030ba665c253dde5f0061394e8ded2f0e341053428335ec89d9dd6f28b17454&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS4KLTC3%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDR4RxWpm%2F%2BZB3Jg7yv%2BOjvEHBRthDKtTcCQ2WLNdMw2AIgOg4RxfmBty5NvvW%2B3x%2FPFvozgQV6fkNWYpWmoLp30BYq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDOTa9NpsrGagt%2BjxiCrcA57dAXLE3e6KJTEgUl3meHVXMspAXGgjOHd5eb%2BFy7kHi8BzMNrg3ilE55UfPbEm4z9Gy%2FVw8Ob2B3lwSDsizEij8Y7WtY6uxyKSV8nA3N5q7rDg3nI71cJqC2Gan9nncFEgaxcCt4alXIuVaHBEEQ4V2LbzvQQwSbGM%2Fbi79bScX2LRxnYqUF5ua6RrEiV%2Fh%2FziQQB4apoGuzTvsnCp4r0RB9SNhfKCWn3cfej0N8A2xkZYP4ddGazE%2B6ofN1hAZRtD8ObOt3Jv%2FPCB6MZT%2FunDy3Ij6iiNr254Qx7mo5feglio%2B2JhMubbvfcu4ZQIfWTxRYAEA4UfjcJAZDixKwzLXx3jhJhlFDvoaI7JsrZy7MDXL%2FW%2BM6DXYtMs%2FS8ILLNZ50hbG%2FJoB35IVDEJLHqoG8gXifNVtfjTfF3vWeLpSmc7qTS6jGdUYx%2Bf19hYk4awC68giLO3uoIqVxvQ%2BytrGBx1%2Fa%2FKtAM6OYfR%2BhylRvGg2nUcaNJeJKtO%2FXABajLFbe74vqZcQaz%2BBEAF9y9Xn5oqLReb%2Foa%2BP10RuwNbkA2J50%2BCGbeU1vL%2FnbcVTgDB81dsF6%2FwXjI%2BeAoiroPHdcL8P85D4B8iiFdTPwuRsZVDcTzmy8vw6BjhMKPI0MMGOqUBzIBznHaEOedRV%2BmVWJgBk1yb0M4Yu2Db9xNNooheMm9UMesvDWbP2GMccbYqcjvqyxqDdgtUKvLTKkgVpSIAdPaa56FO5FLp8ta7iE8ziRAv2y5wHT4NRKGJ7CCG8q%2F23fjm0fjDtVZ1pVGBkP5FRqG338QKpOWDK1%2FUNmONPwK14KGMCO3o0JMJGD0UNYTi3rHwiR4VVcTt3uDnCYVOKCFAHVOn&X-Amz-Signature=5bf3371a4a4ce2923039e12f2f0e346e354607628c16299a0a494f2aa0be662c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
