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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS5YXOUL%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T151103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCdv%2B1XOLsmxbsalUEpgBIPupjTp%2B6PwuIVRDW1xvXcdQIgSQzr90BUpNyWbKtCELCT%2FPnaWieKxR%2B%2BhSOUlnb%2Fou8qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOIVSShrNdhG70JLyrcAy7NYskT3T0aHt39ZccIYN1qEVpW50rRePmPz8OKF%2B9LwQ4KRX%2FQ5oBgb5X2cystgah8Hl2ZSNtYSz8dkDVHCRX9mQLaRvg4BwOCzN7Z%2FP5T7wSb5LmSwYyAWDFy%2BVN7fgWAQ%2BtG4OS2fACTx%2F2DWu08HAtpvRfXlv6emHc32H9rE0p5Ih5X5SzA0fm5mW%2BtlT7W4AKLS%2Bjl7Z9MckBHFGSxqHmTL8tT8Saeb4oFj8QDPHv08x6yQONelEWBisJPy6d8h%2BUjWC0pLZmBBQoOLTF5JGY35iIuSv4ZiR5io5Kp654%2Ba2nM5NCOnXUrdhygqrbyIGs5Dt0OO%2BgDxM8HCklWeHPj%2FOKXCrcePWix5HA7rJGSBU85LksnfdwyIMsqWW1UDd0krXpxSGm05MJBQOY0Myk1Sx2aBu3ojfQDXqx1BFRDfdlvKbqmRR8BU%2BRxWk%2B9plxL%2BAAmRnw%2FlAvqivmZxvxMKP8hPHL8sEzqh%2Fzln24gJXUDhIz0BLQVnxk%2Bzhz%2FeWe6gAbzgXrpgEzM1LTE20zNAVjT1csUlLu5elp%2FItprn7w8itk8FVoUQbIfvsdAuuA5GAAV2FwJUmUGXjxSFHpCS6JHv2NTm7OjPFHutm8iCaqHmdv8VqH8MIOX2r8GOqUBjmsPF3rJQ3tn4ZwvhyStqwtp0ZvMEz41l8mNfZJqSeFf1ClvE5XpM75NVqsHpucMh08D9p5x4tQAtHYqGnlMYxWgxSniK1wgi%2BkeA2mv%2FHfr8L4hFy72KBbOSFve5jWBACFMKxgLO6p0QSjnFZfQfg6BZW6WH3yUef6ym7qm%2B5onauphO0cDZ67JrJMIEsrD7NdYTUUM2SDXrTav158Fgy1ZBSa7&X-Amz-Signature=14345a6858f841af3159161103458d2bb9717cbc338a1d3f1e217d9940736453&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS5YXOUL%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T151103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCdv%2B1XOLsmxbsalUEpgBIPupjTp%2B6PwuIVRDW1xvXcdQIgSQzr90BUpNyWbKtCELCT%2FPnaWieKxR%2B%2BhSOUlnb%2Fou8qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOIVSShrNdhG70JLyrcAy7NYskT3T0aHt39ZccIYN1qEVpW50rRePmPz8OKF%2B9LwQ4KRX%2FQ5oBgb5X2cystgah8Hl2ZSNtYSz8dkDVHCRX9mQLaRvg4BwOCzN7Z%2FP5T7wSb5LmSwYyAWDFy%2BVN7fgWAQ%2BtG4OS2fACTx%2F2DWu08HAtpvRfXlv6emHc32H9rE0p5Ih5X5SzA0fm5mW%2BtlT7W4AKLS%2Bjl7Z9MckBHFGSxqHmTL8tT8Saeb4oFj8QDPHv08x6yQONelEWBisJPy6d8h%2BUjWC0pLZmBBQoOLTF5JGY35iIuSv4ZiR5io5Kp654%2Ba2nM5NCOnXUrdhygqrbyIGs5Dt0OO%2BgDxM8HCklWeHPj%2FOKXCrcePWix5HA7rJGSBU85LksnfdwyIMsqWW1UDd0krXpxSGm05MJBQOY0Myk1Sx2aBu3ojfQDXqx1BFRDfdlvKbqmRR8BU%2BRxWk%2B9plxL%2BAAmRnw%2FlAvqivmZxvxMKP8hPHL8sEzqh%2Fzln24gJXUDhIz0BLQVnxk%2Bzhz%2FeWe6gAbzgXrpgEzM1LTE20zNAVjT1csUlLu5elp%2FItprn7w8itk8FVoUQbIfvsdAuuA5GAAV2FwJUmUGXjxSFHpCS6JHv2NTm7OjPFHutm8iCaqHmdv8VqH8MIOX2r8GOqUBjmsPF3rJQ3tn4ZwvhyStqwtp0ZvMEz41l8mNfZJqSeFf1ClvE5XpM75NVqsHpucMh08D9p5x4tQAtHYqGnlMYxWgxSniK1wgi%2BkeA2mv%2FHfr8L4hFy72KBbOSFve5jWBACFMKxgLO6p0QSjnFZfQfg6BZW6WH3yUef6ym7qm%2B5onauphO0cDZ67JrJMIEsrD7NdYTUUM2SDXrTav158Fgy1ZBSa7&X-Amz-Signature=ac6df6135879f8aa3d30e12957670eccf39a3f10807dcae371b60e09407eb74e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS5YXOUL%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T151103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCdv%2B1XOLsmxbsalUEpgBIPupjTp%2B6PwuIVRDW1xvXcdQIgSQzr90BUpNyWbKtCELCT%2FPnaWieKxR%2B%2BhSOUlnb%2Fou8qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOIVSShrNdhG70JLyrcAy7NYskT3T0aHt39ZccIYN1qEVpW50rRePmPz8OKF%2B9LwQ4KRX%2FQ5oBgb5X2cystgah8Hl2ZSNtYSz8dkDVHCRX9mQLaRvg4BwOCzN7Z%2FP5T7wSb5LmSwYyAWDFy%2BVN7fgWAQ%2BtG4OS2fACTx%2F2DWu08HAtpvRfXlv6emHc32H9rE0p5Ih5X5SzA0fm5mW%2BtlT7W4AKLS%2Bjl7Z9MckBHFGSxqHmTL8tT8Saeb4oFj8QDPHv08x6yQONelEWBisJPy6d8h%2BUjWC0pLZmBBQoOLTF5JGY35iIuSv4ZiR5io5Kp654%2Ba2nM5NCOnXUrdhygqrbyIGs5Dt0OO%2BgDxM8HCklWeHPj%2FOKXCrcePWix5HA7rJGSBU85LksnfdwyIMsqWW1UDd0krXpxSGm05MJBQOY0Myk1Sx2aBu3ojfQDXqx1BFRDfdlvKbqmRR8BU%2BRxWk%2B9plxL%2BAAmRnw%2FlAvqivmZxvxMKP8hPHL8sEzqh%2Fzln24gJXUDhIz0BLQVnxk%2Bzhz%2FeWe6gAbzgXrpgEzM1LTE20zNAVjT1csUlLu5elp%2FItprn7w8itk8FVoUQbIfvsdAuuA5GAAV2FwJUmUGXjxSFHpCS6JHv2NTm7OjPFHutm8iCaqHmdv8VqH8MIOX2r8GOqUBjmsPF3rJQ3tn4ZwvhyStqwtp0ZvMEz41l8mNfZJqSeFf1ClvE5XpM75NVqsHpucMh08D9p5x4tQAtHYqGnlMYxWgxSniK1wgi%2BkeA2mv%2FHfr8L4hFy72KBbOSFve5jWBACFMKxgLO6p0QSjnFZfQfg6BZW6WH3yUef6ym7qm%2B5onauphO0cDZ67JrJMIEsrD7NdYTUUM2SDXrTav158Fgy1ZBSa7&X-Amz-Signature=b23d360557dcec2877d220b530f306440d4210802c5d71046489c1bd41839533&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
