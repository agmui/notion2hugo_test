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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNBE77EF%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T132556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGByLcmhv%2Bj9KqA%2F9%2BPzWP8Onq9qa6bh723pr4jqb4hiAiEA4vbhWAsctWIa%2FqVn4NSCz3HW7BskfJJciFYtUJm6aoEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHo%2FjccZoGXZ%2BQhMnyrcA0CoLe3x3Qij7kaEYZGDEPmt5QvtlEG%2FY4IMhWYIPMN1sNJHVMacSaOh7yYvYhAaWuQvO9DChLRemmo0t0uGxuHNnQNpD0L26EJ9TdALY0pPTCE0tuK%2FUBgN%2FuloVu1hiIvvvW5EzgWyHKXpoebYARw8A9nLvpM5oTtdg1UeCwcXuXtz%2BIEPiQkw9R4wvEWPQR51%2BBQaNaVYSLSAZkENt3AtEqTXiQsWQU5n%2FbwTYG2W%2ByP%2FkfmvvevhcjMPgTpf%2BKAa3DRR4HigyrgMwt16qVD30MdL0IG%2FC5SGhb05P1QZ61b7bE7UAq8ok3l2xNU05JjK6WfEu3fugaP4Dc5N2EbGdjiQI%2Fzye9P%2Bwu%2BkuDDhL00sYLShLSmN6tfU9csxnSw3NewamwtFdNoF8RnhjoeWnopAXF6SJyvNzI7IagdhI78yjytuyBMR5oj7%2FG1ySj1xrluh%2Br7nDmT4ptIK1BWL%2FwRbz5JbdKLcPI6BwMKUxOITYJesVxZP81KFoLAcLfLUiHOceFFJQFmZtIDbIore6xOWDNziNmYyokwjUaGRacoYvkiuVpgJdhRGOnAxZxCvr9Fae2Vd3%2FRg2V5%2FWHG2iQkGNSHaWFocWEUQxqUx1oXzV6GY75wUpXEKMNmmxcIGOqUB4rVzjqzr%2BezIgy1%2BAKnRqgeADO5Kp3r9FCJX%2FBWCT1SNvTE11Pf8MmZGiZkk0UC2dJDg5lTRxlNLwEagn62C51dac7JXa5HKH6AefJxlIDY7Xhtvzz9741QY8INGyWxR6R7G0zW0zINaIcx1mH1Mbt53qLfM8Dzxa%2FTxMhIemG%2FkqW5iXzuDYatJg679N4SfM1OP27uV8pO9%2BGr2I%2BIlxW%2Fddx0J&X-Amz-Signature=a165cf029b1b355775bbb282475ea6b042543b1969e47b2c35e332415e934145&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNBE77EF%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T132556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGByLcmhv%2Bj9KqA%2F9%2BPzWP8Onq9qa6bh723pr4jqb4hiAiEA4vbhWAsctWIa%2FqVn4NSCz3HW7BskfJJciFYtUJm6aoEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHo%2FjccZoGXZ%2BQhMnyrcA0CoLe3x3Qij7kaEYZGDEPmt5QvtlEG%2FY4IMhWYIPMN1sNJHVMacSaOh7yYvYhAaWuQvO9DChLRemmo0t0uGxuHNnQNpD0L26EJ9TdALY0pPTCE0tuK%2FUBgN%2FuloVu1hiIvvvW5EzgWyHKXpoebYARw8A9nLvpM5oTtdg1UeCwcXuXtz%2BIEPiQkw9R4wvEWPQR51%2BBQaNaVYSLSAZkENt3AtEqTXiQsWQU5n%2FbwTYG2W%2ByP%2FkfmvvevhcjMPgTpf%2BKAa3DRR4HigyrgMwt16qVD30MdL0IG%2FC5SGhb05P1QZ61b7bE7UAq8ok3l2xNU05JjK6WfEu3fugaP4Dc5N2EbGdjiQI%2Fzye9P%2Bwu%2BkuDDhL00sYLShLSmN6tfU9csxnSw3NewamwtFdNoF8RnhjoeWnopAXF6SJyvNzI7IagdhI78yjytuyBMR5oj7%2FG1ySj1xrluh%2Br7nDmT4ptIK1BWL%2FwRbz5JbdKLcPI6BwMKUxOITYJesVxZP81KFoLAcLfLUiHOceFFJQFmZtIDbIore6xOWDNziNmYyokwjUaGRacoYvkiuVpgJdhRGOnAxZxCvr9Fae2Vd3%2FRg2V5%2FWHG2iQkGNSHaWFocWEUQxqUx1oXzV6GY75wUpXEKMNmmxcIGOqUB4rVzjqzr%2BezIgy1%2BAKnRqgeADO5Kp3r9FCJX%2FBWCT1SNvTE11Pf8MmZGiZkk0UC2dJDg5lTRxlNLwEagn62C51dac7JXa5HKH6AefJxlIDY7Xhtvzz9741QY8INGyWxR6R7G0zW0zINaIcx1mH1Mbt53qLfM8Dzxa%2FTxMhIemG%2FkqW5iXzuDYatJg679N4SfM1OP27uV8pO9%2BGr2I%2BIlxW%2Fddx0J&X-Amz-Signature=92ca44995d97429645d46f0616292033e8aa42f31631f8c488eed5ffff5b12be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNBE77EF%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T132556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGByLcmhv%2Bj9KqA%2F9%2BPzWP8Onq9qa6bh723pr4jqb4hiAiEA4vbhWAsctWIa%2FqVn4NSCz3HW7BskfJJciFYtUJm6aoEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHo%2FjccZoGXZ%2BQhMnyrcA0CoLe3x3Qij7kaEYZGDEPmt5QvtlEG%2FY4IMhWYIPMN1sNJHVMacSaOh7yYvYhAaWuQvO9DChLRemmo0t0uGxuHNnQNpD0L26EJ9TdALY0pPTCE0tuK%2FUBgN%2FuloVu1hiIvvvW5EzgWyHKXpoebYARw8A9nLvpM5oTtdg1UeCwcXuXtz%2BIEPiQkw9R4wvEWPQR51%2BBQaNaVYSLSAZkENt3AtEqTXiQsWQU5n%2FbwTYG2W%2ByP%2FkfmvvevhcjMPgTpf%2BKAa3DRR4HigyrgMwt16qVD30MdL0IG%2FC5SGhb05P1QZ61b7bE7UAq8ok3l2xNU05JjK6WfEu3fugaP4Dc5N2EbGdjiQI%2Fzye9P%2Bwu%2BkuDDhL00sYLShLSmN6tfU9csxnSw3NewamwtFdNoF8RnhjoeWnopAXF6SJyvNzI7IagdhI78yjytuyBMR5oj7%2FG1ySj1xrluh%2Br7nDmT4ptIK1BWL%2FwRbz5JbdKLcPI6BwMKUxOITYJesVxZP81KFoLAcLfLUiHOceFFJQFmZtIDbIore6xOWDNziNmYyokwjUaGRacoYvkiuVpgJdhRGOnAxZxCvr9Fae2Vd3%2FRg2V5%2FWHG2iQkGNSHaWFocWEUQxqUx1oXzV6GY75wUpXEKMNmmxcIGOqUB4rVzjqzr%2BezIgy1%2BAKnRqgeADO5Kp3r9FCJX%2FBWCT1SNvTE11Pf8MmZGiZkk0UC2dJDg5lTRxlNLwEagn62C51dac7JXa5HKH6AefJxlIDY7Xhtvzz9741QY8INGyWxR6R7G0zW0zINaIcx1mH1Mbt53qLfM8Dzxa%2FTxMhIemG%2FkqW5iXzuDYatJg679N4SfM1OP27uV8pO9%2BGr2I%2BIlxW%2Fddx0J&X-Amz-Signature=edd4012848c6812b53286e7e54f1d3e168ccdc5a007945e91855058360708d30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
