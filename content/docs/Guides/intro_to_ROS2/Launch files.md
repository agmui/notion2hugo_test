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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDBXGYOF%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIBy6kTHxgUpkMBAj0EQu%2FD2mluQTeOb5RTXha8Z2gxiqAiBb%2FIGu45rOAUxbm%2BZsyOlMAhnrdFaOo08Ca1zDm99%2FyiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBWx68oYwTx4jZcSyKtwDMCCZtrhruq48xkenR1KA33Jj4FsqhxlVczKYLDTDmEFeeSNmC6lsH4pofqeFYzjDxTPd4%2BF8Gw61PykKj79EQ6F4cBDLtrIrU8t53HZJBYARxRDd1EebN658tKuDcqoxhEVW5E2QVGjSU%2BpFLzPeudQFTAopOL64QnUBAqHoivE3wbNe9vfUz2%2BmER%2FPiaVba8mWaBznImbpktdkJqyF4vJtFHlPRuWd%2B2cVoIVgLsuKCd3PsVE73Xk0CzK69s%2F5BmIMM8WlFLqX3WMxApAFVjtsOqgkmHPXCoGfXzPUlm5GnLcA7aCfvbUGauoCpvY4VXXWbwc4Cbnbs4HmE8qfp82RJ7jJANdHeUJSc4I8x0jCkBTWDtuie8tiU1dlwHiRhULiwhpSCeSljsS5UJF3ub72J2zUvDkOYhOYUpvNdKvYfAg5fSsNL4Uu1C18vlh8cd4vxvwEtxhgsGzU%2BbUq8uJ3EGz5NbprZu1jlFhyftzRgAYoF94pY%2FIaDz2TfepHN6GKiFdfqowLttnLkaztkuiM0XLjvwolU%2B62MHAqxSkZd2ZSUANN7JqvPH10R%2Fd%2BO6GMqKJ8lgyC9eJlDfmflE0v9tKChg4zaSMyhtVmyPxhVhDzp00M0LE7Hp4wq%2BG8wQY6pgF%2FWIB36wFD1rxs%2FJPM3%2BUGRsc0sSB%2FeoIZwGc1SDbGmWDdx0lSIpS513oQBRVCItq3juU%2BRbv8zjKT1qDCS9Pg8ei4tP9ZVVApC%2BUnamfoHOhQvefiXkStLB9XtOdbOFJf5ESLQ0LOX0FZLx%2Fyx8s7KF9mEqkT6a2sRnXTfriEAjhfVY1fkBXuJdVx7Jo51nvDlb5%2FPJ2hhoRoMnKOn8wf77EWI5Z9&X-Amz-Signature=f433c24f87a8e0b2b2a3ee33eeb8b9ce2d687964db62becc56d49e31c220e33c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDBXGYOF%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIBy6kTHxgUpkMBAj0EQu%2FD2mluQTeOb5RTXha8Z2gxiqAiBb%2FIGu45rOAUxbm%2BZsyOlMAhnrdFaOo08Ca1zDm99%2FyiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBWx68oYwTx4jZcSyKtwDMCCZtrhruq48xkenR1KA33Jj4FsqhxlVczKYLDTDmEFeeSNmC6lsH4pofqeFYzjDxTPd4%2BF8Gw61PykKj79EQ6F4cBDLtrIrU8t53HZJBYARxRDd1EebN658tKuDcqoxhEVW5E2QVGjSU%2BpFLzPeudQFTAopOL64QnUBAqHoivE3wbNe9vfUz2%2BmER%2FPiaVba8mWaBznImbpktdkJqyF4vJtFHlPRuWd%2B2cVoIVgLsuKCd3PsVE73Xk0CzK69s%2F5BmIMM8WlFLqX3WMxApAFVjtsOqgkmHPXCoGfXzPUlm5GnLcA7aCfvbUGauoCpvY4VXXWbwc4Cbnbs4HmE8qfp82RJ7jJANdHeUJSc4I8x0jCkBTWDtuie8tiU1dlwHiRhULiwhpSCeSljsS5UJF3ub72J2zUvDkOYhOYUpvNdKvYfAg5fSsNL4Uu1C18vlh8cd4vxvwEtxhgsGzU%2BbUq8uJ3EGz5NbprZu1jlFhyftzRgAYoF94pY%2FIaDz2TfepHN6GKiFdfqowLttnLkaztkuiM0XLjvwolU%2B62MHAqxSkZd2ZSUANN7JqvPH10R%2Fd%2BO6GMqKJ8lgyC9eJlDfmflE0v9tKChg4zaSMyhtVmyPxhVhDzp00M0LE7Hp4wq%2BG8wQY6pgF%2FWIB36wFD1rxs%2FJPM3%2BUGRsc0sSB%2FeoIZwGc1SDbGmWDdx0lSIpS513oQBRVCItq3juU%2BRbv8zjKT1qDCS9Pg8ei4tP9ZVVApC%2BUnamfoHOhQvefiXkStLB9XtOdbOFJf5ESLQ0LOX0FZLx%2Fyx8s7KF9mEqkT6a2sRnXTfriEAjhfVY1fkBXuJdVx7Jo51nvDlb5%2FPJ2hhoRoMnKOn8wf77EWI5Z9&X-Amz-Signature=f3e69c6f75dda0191a8f3970e0e57c68e2944dfa0780976e1deaf500e9f8cd2b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDBXGYOF%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIBy6kTHxgUpkMBAj0EQu%2FD2mluQTeOb5RTXha8Z2gxiqAiBb%2FIGu45rOAUxbm%2BZsyOlMAhnrdFaOo08Ca1zDm99%2FyiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBWx68oYwTx4jZcSyKtwDMCCZtrhruq48xkenR1KA33Jj4FsqhxlVczKYLDTDmEFeeSNmC6lsH4pofqeFYzjDxTPd4%2BF8Gw61PykKj79EQ6F4cBDLtrIrU8t53HZJBYARxRDd1EebN658tKuDcqoxhEVW5E2QVGjSU%2BpFLzPeudQFTAopOL64QnUBAqHoivE3wbNe9vfUz2%2BmER%2FPiaVba8mWaBznImbpktdkJqyF4vJtFHlPRuWd%2B2cVoIVgLsuKCd3PsVE73Xk0CzK69s%2F5BmIMM8WlFLqX3WMxApAFVjtsOqgkmHPXCoGfXzPUlm5GnLcA7aCfvbUGauoCpvY4VXXWbwc4Cbnbs4HmE8qfp82RJ7jJANdHeUJSc4I8x0jCkBTWDtuie8tiU1dlwHiRhULiwhpSCeSljsS5UJF3ub72J2zUvDkOYhOYUpvNdKvYfAg5fSsNL4Uu1C18vlh8cd4vxvwEtxhgsGzU%2BbUq8uJ3EGz5NbprZu1jlFhyftzRgAYoF94pY%2FIaDz2TfepHN6GKiFdfqowLttnLkaztkuiM0XLjvwolU%2B62MHAqxSkZd2ZSUANN7JqvPH10R%2Fd%2BO6GMqKJ8lgyC9eJlDfmflE0v9tKChg4zaSMyhtVmyPxhVhDzp00M0LE7Hp4wq%2BG8wQY6pgF%2FWIB36wFD1rxs%2FJPM3%2BUGRsc0sSB%2FeoIZwGc1SDbGmWDdx0lSIpS513oQBRVCItq3juU%2BRbv8zjKT1qDCS9Pg8ei4tP9ZVVApC%2BUnamfoHOhQvefiXkStLB9XtOdbOFJf5ESLQ0LOX0FZLx%2Fyx8s7KF9mEqkT6a2sRnXTfriEAjhfVY1fkBXuJdVx7Jo51nvDlb5%2FPJ2hhoRoMnKOn8wf77EWI5Z9&X-Amz-Signature=812152028a604e0d692dfbdc4dba2a1c383891912f6e95526a5b80ffb771c2ad&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
