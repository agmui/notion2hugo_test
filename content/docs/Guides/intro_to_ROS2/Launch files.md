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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCYCEAT3%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T090932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCICAZUkhLs9PXGHJ8F9y3%2Fboe6goRkBG5iBaMitjmTpNOAiBzYFW9XhZdtcQjAnXqHOTxjXBgPYl5j01ijF346PXxSyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMLucvMdx76OUlNimoKtwD%2FJauxz8iwDOuTpnemNOkQUPaxyru%2FkfXtHzc2PGC%2FrIGY2j03%2Bh0Rl2s%2BY%2FUq5HXYNK2tJC1Sm%2FpGaE%2BxoCpH6p8%2BL7U%2FZnOjq4bEA2To0NMK1mC5xUG0wg%2Fr0rjvLS%2BUbF6vUsSKOCVmGaPPBJZhAV1NRyPqUdqHpWUsE84K%2FNVwpVtiLQBbhNZwgtgzF6C1RoPivGu8jivC52fUg1Pd2E182wJFtw3bq8UJ7npbg5jNBd%2BT3Zr84BP62Fty1uuUbNW7DuGW0dQteIAwlP%2F4I2Q327UzfjGOMORl6TSepgcinBzxanieaVvDfVIgT0OzZfzo9rQ8QztYPXOGoO0PxLovmIwK130ra1v9tLv426DeXdwQddn%2B4zeyZ6F%2FmxljG00JvzLth2BDPRNyQd5Xk6ZmTjJFMkCKtOSBYWc6kYfKryf737opDc%2By%2BS0HHHKgk%2FLvL%2BL1QjQr2%2B%2FuSlG82ck%2FKUYgvsham29JPhiE%2F1DzsGdLkIoIBDO9DPqCZYjIpVYvlHMedLftDFdf3J71kHls6ymlOGldbQFN8J6L0jn%2FQtIXKH01UV5b7YKOS1Ty1LksMQTezorTGpIIfFgB%2FwsSli4OUHyzoQFWSwq5l3M7XWWiCZPFTQTHEQwjurLvQY6pgHWjw%2BfGhiXxwcvINdCUy0NZP%2FPm5TbTZmNcJmMStJzSVFxzM2HtdQN6qP97pvLI16wGR0LjkAkAo%2BuylR%2FwymMWglJ7UfvIEV28NYzwC%2BW6yD%2BNgUIm4OxlcXeaVI1yZNZ%2FP6DF%2BnT0SuCX%2FeDnOfSIT%2BPR2fxzhqBL%2FC8yv7iaXEZXOvS2lni59%2F8JJ4xOkiByDv69NSom9ohbzQFYzYLxxo5YVRM&X-Amz-Signature=e4fcbc5f71cc9d9264347f3b2f31ca2f93b64babfdec69fb21622a636cab3c71&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCYCEAT3%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T090932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCICAZUkhLs9PXGHJ8F9y3%2Fboe6goRkBG5iBaMitjmTpNOAiBzYFW9XhZdtcQjAnXqHOTxjXBgPYl5j01ijF346PXxSyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMLucvMdx76OUlNimoKtwD%2FJauxz8iwDOuTpnemNOkQUPaxyru%2FkfXtHzc2PGC%2FrIGY2j03%2Bh0Rl2s%2BY%2FUq5HXYNK2tJC1Sm%2FpGaE%2BxoCpH6p8%2BL7U%2FZnOjq4bEA2To0NMK1mC5xUG0wg%2Fr0rjvLS%2BUbF6vUsSKOCVmGaPPBJZhAV1NRyPqUdqHpWUsE84K%2FNVwpVtiLQBbhNZwgtgzF6C1RoPivGu8jivC52fUg1Pd2E182wJFtw3bq8UJ7npbg5jNBd%2BT3Zr84BP62Fty1uuUbNW7DuGW0dQteIAwlP%2F4I2Q327UzfjGOMORl6TSepgcinBzxanieaVvDfVIgT0OzZfzo9rQ8QztYPXOGoO0PxLovmIwK130ra1v9tLv426DeXdwQddn%2B4zeyZ6F%2FmxljG00JvzLth2BDPRNyQd5Xk6ZmTjJFMkCKtOSBYWc6kYfKryf737opDc%2By%2BS0HHHKgk%2FLvL%2BL1QjQr2%2B%2FuSlG82ck%2FKUYgvsham29JPhiE%2F1DzsGdLkIoIBDO9DPqCZYjIpVYvlHMedLftDFdf3J71kHls6ymlOGldbQFN8J6L0jn%2FQtIXKH01UV5b7YKOS1Ty1LksMQTezorTGpIIfFgB%2FwsSli4OUHyzoQFWSwq5l3M7XWWiCZPFTQTHEQwjurLvQY6pgHWjw%2BfGhiXxwcvINdCUy0NZP%2FPm5TbTZmNcJmMStJzSVFxzM2HtdQN6qP97pvLI16wGR0LjkAkAo%2BuylR%2FwymMWglJ7UfvIEV28NYzwC%2BW6yD%2BNgUIm4OxlcXeaVI1yZNZ%2FP6DF%2BnT0SuCX%2FeDnOfSIT%2BPR2fxzhqBL%2FC8yv7iaXEZXOvS2lni59%2F8JJ4xOkiByDv69NSom9ohbzQFYzYLxxo5YVRM&X-Amz-Signature=06e9b1ffee86babfac4c8f8fca930834c7d5be9f74fde9a8b21d891f30980fde&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCYCEAT3%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T090932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCICAZUkhLs9PXGHJ8F9y3%2Fboe6goRkBG5iBaMitjmTpNOAiBzYFW9XhZdtcQjAnXqHOTxjXBgPYl5j01ijF346PXxSyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMLucvMdx76OUlNimoKtwD%2FJauxz8iwDOuTpnemNOkQUPaxyru%2FkfXtHzc2PGC%2FrIGY2j03%2Bh0Rl2s%2BY%2FUq5HXYNK2tJC1Sm%2FpGaE%2BxoCpH6p8%2BL7U%2FZnOjq4bEA2To0NMK1mC5xUG0wg%2Fr0rjvLS%2BUbF6vUsSKOCVmGaPPBJZhAV1NRyPqUdqHpWUsE84K%2FNVwpVtiLQBbhNZwgtgzF6C1RoPivGu8jivC52fUg1Pd2E182wJFtw3bq8UJ7npbg5jNBd%2BT3Zr84BP62Fty1uuUbNW7DuGW0dQteIAwlP%2F4I2Q327UzfjGOMORl6TSepgcinBzxanieaVvDfVIgT0OzZfzo9rQ8QztYPXOGoO0PxLovmIwK130ra1v9tLv426DeXdwQddn%2B4zeyZ6F%2FmxljG00JvzLth2BDPRNyQd5Xk6ZmTjJFMkCKtOSBYWc6kYfKryf737opDc%2By%2BS0HHHKgk%2FLvL%2BL1QjQr2%2B%2FuSlG82ck%2FKUYgvsham29JPhiE%2F1DzsGdLkIoIBDO9DPqCZYjIpVYvlHMedLftDFdf3J71kHls6ymlOGldbQFN8J6L0jn%2FQtIXKH01UV5b7YKOS1Ty1LksMQTezorTGpIIfFgB%2FwsSli4OUHyzoQFWSwq5l3M7XWWiCZPFTQTHEQwjurLvQY6pgHWjw%2BfGhiXxwcvINdCUy0NZP%2FPm5TbTZmNcJmMStJzSVFxzM2HtdQN6qP97pvLI16wGR0LjkAkAo%2BuylR%2FwymMWglJ7UfvIEV28NYzwC%2BW6yD%2BNgUIm4OxlcXeaVI1yZNZ%2FP6DF%2BnT0SuCX%2FeDnOfSIT%2BPR2fxzhqBL%2FC8yv7iaXEZXOvS2lni59%2F8JJ4xOkiByDv69NSom9ohbzQFYzYLxxo5YVRM&X-Amz-Signature=2390615febd934139631dcb99b37b2ea2800ced8c4df0b4f2567dbc9025a5861&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
