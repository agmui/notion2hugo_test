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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG55KUO7%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjdx7h1IuFkgeqzzXXF6gpL1BZOk2f4lVvnrIeo%2B4M7AiEArrNvLK6bj0tZSjMZM5nBQpMCzy0zBEO0zPc%2B1NtY%2BuYqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaz6s75%2F6cA4cXQeSrcAxUxF1lCHPWJHGiZSQsvlkG29512IyMWwsgemqX%2BKbOe7KMwCrFE7yqrGJqyyaBDoVnNcg%2BINnI6%2F0NeiOyykuOSkVthrIG08DLTxuUuGEx4zI5nVhGr1LIrszNwqp%2Fwkpmgx18Uh4dJQvC5yUpIiF5I9iZFnnSrAPHJ6DFy6nLBH%2BhLJIOwDjJhJAKF6elQF%2FTDovAAzGaLVmuEUZvp7ygvzUUu%2F%2BS906at7b49GdmiHdBKfbotl%2BnrE1of0QVp8Xm0WdnkrxP3sVmxOYsWUG0Oqr%2Fly%2BNnWy7XhK5Oj%2FPd%2FcL7OE7RzfvVXa3xBz%2BlXtp1a3Yf%2FnBj8aVhgmYh1WWZQpcGwvZEEaJiBkUjb0zORTdXs%2BnugyRNBg8jmGQtK5Ri0iHhMIOtOpiPqpR%2B1yiCfJLoCkgeatHuZaB0oZTRTQQC5P5EPK6rpSrz2cyG679G2btykNAl4JOVckUl%2FKpQxv%2BHGigt1DsB%2FYRmbRhk%2Fzjwa%2FEfyNqr64HemL%2BGMqbBiEdrtAlVQu0W%2Ftwjpm%2Ba1cykh2izeM2L7TnkG3ik82mRYCsBWBRDHDQ1aQ8DhXElLG8zgSOr%2FzMjfUEQ%2F3oyQvEYq4hnzFwYu5r2nucspTIOgofEseRsYlYtMKDw%2BMAGOqUB01WO0dVypHY5gybSHVh114bizjVmB1FAezgsbsyIoFuuMxpuZumb3lSd3Wo6Hugts5KVASRiRLzBxIEc2NwNcjofXNn28mEv%2B0Szd4ihlvcb0leJQWdkVbGhX2OqJXCommWx4agOwGTh%2BHe5KkqMZdWdAPrzFEElkoQ%2F3qM900h94bT1GhOWCv0ajDRCcuhNKk%2FJawlgV2t5xO2Vw6dIxcZSpgUe&X-Amz-Signature=b1fcf81f4aca38536b2778629c16e08c9d0e77bdfe4779f35cd8ef7ddbad5bd0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG55KUO7%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjdx7h1IuFkgeqzzXXF6gpL1BZOk2f4lVvnrIeo%2B4M7AiEArrNvLK6bj0tZSjMZM5nBQpMCzy0zBEO0zPc%2B1NtY%2BuYqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaz6s75%2F6cA4cXQeSrcAxUxF1lCHPWJHGiZSQsvlkG29512IyMWwsgemqX%2BKbOe7KMwCrFE7yqrGJqyyaBDoVnNcg%2BINnI6%2F0NeiOyykuOSkVthrIG08DLTxuUuGEx4zI5nVhGr1LIrszNwqp%2Fwkpmgx18Uh4dJQvC5yUpIiF5I9iZFnnSrAPHJ6DFy6nLBH%2BhLJIOwDjJhJAKF6elQF%2FTDovAAzGaLVmuEUZvp7ygvzUUu%2F%2BS906at7b49GdmiHdBKfbotl%2BnrE1of0QVp8Xm0WdnkrxP3sVmxOYsWUG0Oqr%2Fly%2BNnWy7XhK5Oj%2FPd%2FcL7OE7RzfvVXa3xBz%2BlXtp1a3Yf%2FnBj8aVhgmYh1WWZQpcGwvZEEaJiBkUjb0zORTdXs%2BnugyRNBg8jmGQtK5Ri0iHhMIOtOpiPqpR%2B1yiCfJLoCkgeatHuZaB0oZTRTQQC5P5EPK6rpSrz2cyG679G2btykNAl4JOVckUl%2FKpQxv%2BHGigt1DsB%2FYRmbRhk%2Fzjwa%2FEfyNqr64HemL%2BGMqbBiEdrtAlVQu0W%2Ftwjpm%2Ba1cykh2izeM2L7TnkG3ik82mRYCsBWBRDHDQ1aQ8DhXElLG8zgSOr%2FzMjfUEQ%2F3oyQvEYq4hnzFwYu5r2nucspTIOgofEseRsYlYtMKDw%2BMAGOqUB01WO0dVypHY5gybSHVh114bizjVmB1FAezgsbsyIoFuuMxpuZumb3lSd3Wo6Hugts5KVASRiRLzBxIEc2NwNcjofXNn28mEv%2B0Szd4ihlvcb0leJQWdkVbGhX2OqJXCommWx4agOwGTh%2BHe5KkqMZdWdAPrzFEElkoQ%2F3qM900h94bT1GhOWCv0ajDRCcuhNKk%2FJawlgV2t5xO2Vw6dIxcZSpgUe&X-Amz-Signature=1eb5787932a594da2b3bad60a33dcabbab95a69eac2feebf3ebed7f6be7428c6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG55KUO7%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjdx7h1IuFkgeqzzXXF6gpL1BZOk2f4lVvnrIeo%2B4M7AiEArrNvLK6bj0tZSjMZM5nBQpMCzy0zBEO0zPc%2B1NtY%2BuYqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaz6s75%2F6cA4cXQeSrcAxUxF1lCHPWJHGiZSQsvlkG29512IyMWwsgemqX%2BKbOe7KMwCrFE7yqrGJqyyaBDoVnNcg%2BINnI6%2F0NeiOyykuOSkVthrIG08DLTxuUuGEx4zI5nVhGr1LIrszNwqp%2Fwkpmgx18Uh4dJQvC5yUpIiF5I9iZFnnSrAPHJ6DFy6nLBH%2BhLJIOwDjJhJAKF6elQF%2FTDovAAzGaLVmuEUZvp7ygvzUUu%2F%2BS906at7b49GdmiHdBKfbotl%2BnrE1of0QVp8Xm0WdnkrxP3sVmxOYsWUG0Oqr%2Fly%2BNnWy7XhK5Oj%2FPd%2FcL7OE7RzfvVXa3xBz%2BlXtp1a3Yf%2FnBj8aVhgmYh1WWZQpcGwvZEEaJiBkUjb0zORTdXs%2BnugyRNBg8jmGQtK5Ri0iHhMIOtOpiPqpR%2B1yiCfJLoCkgeatHuZaB0oZTRTQQC5P5EPK6rpSrz2cyG679G2btykNAl4JOVckUl%2FKpQxv%2BHGigt1DsB%2FYRmbRhk%2Fzjwa%2FEfyNqr64HemL%2BGMqbBiEdrtAlVQu0W%2Ftwjpm%2Ba1cykh2izeM2L7TnkG3ik82mRYCsBWBRDHDQ1aQ8DhXElLG8zgSOr%2FzMjfUEQ%2F3oyQvEYq4hnzFwYu5r2nucspTIOgofEseRsYlYtMKDw%2BMAGOqUB01WO0dVypHY5gybSHVh114bizjVmB1FAezgsbsyIoFuuMxpuZumb3lSd3Wo6Hugts5KVASRiRLzBxIEc2NwNcjofXNn28mEv%2B0Szd4ihlvcb0leJQWdkVbGhX2OqJXCommWx4agOwGTh%2BHe5KkqMZdWdAPrzFEElkoQ%2F3qM900h94bT1GhOWCv0ajDRCcuhNKk%2FJawlgV2t5xO2Vw6dIxcZSpgUe&X-Amz-Signature=534a822c0ec0f7069eaa3d7afb1b96230373246796549a9a52519acf74489a34&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
