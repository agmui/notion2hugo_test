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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AIJTEBF%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFRAF3bC5Lptr1jFaIiGeVPnJrLfbtWqPHjW0H6YTC7NAiEAoYFYUxYHeL4wC11Tpg358ruNy87LHMqcEXZwDoF76SwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKhY5kGUFI3e%2BzX79ircA3pLcWXeP7JizeZFvTURZdko%2FaksCmPp7DjrbWMQHNiItX8ShABm9rEtAjlVmBOVslNtgLpCoaJK8LLT5UYnEsB9Hh0KGvnhcAuttJI7NTlQch4YPifkwrIJAXyNXdPK018JyZEop0HWPdR23LZzYwU3W80QLiijhcdX5neTLT2%2FDTcuSArIK%2FCDpUmZPehq0vLEniYUedrnVNtj0SHNnjOwOgwv91BBCXF5Hrmx6h9FlXZlNHkaSVgNjVxP7R75PkMCqKyESOtaW8ta6iguKK%2F8xM8iGIjvzaLUVnIk4ggCou0t5dtThCbkVzmBGn7zrN59JpOMgVkWMg%2FdehHwd4TkDh8ZIIiOPcgwYNmsn2shFVjTAM5OoBpzqykLQJvb3pOI3lsmq1Qch1ro83%2BnX9Caq2w%2F1WNZvpnozm7Hc%2BLqmhTARElIyiB3PAB3bCGYtc7UDEYMZDzJlRH4c0trhqrPZ3465Qbygsr%2BUZfEPbty4kYQsT8QgS2nV3UjOXM64er01eRNYQugTLAz%2BwO0%2B0FfehWxF4wagL41NEB3vmjJrH5Az7AgRL14ejO%2FjbOoPqSakNyJHXIHukZMczmkw7NEVPTrqNhzejl2TkwVkxrgyQUiTpOiPU4P%2Fv%2BNMIG7n8AGOqUBp8%2BraebOmKjUctWYmgTlWTd%2B4o8BwDZRnUkQawmrRJC%2FIYXY%2ByGyt10kOpHXH%2B6LqKBSmdglRIx4Be7qemwKy6LxxTkWiHgi%2FmZXClI9IaQ28ttLwk%2Ftd8Nqz1dCrO83ZrW6oecuRTcnxBk9TWv%2FGN2D8%2FFmVD8%2FLALkBIgxNZC1LReNiPXs8sqLhD7efxqa9WbRc6y3kE15Re0hJmUri8buH9V2&X-Amz-Signature=8d199c70715e2989ce00e0cb85dc655059454332e5f2e9a98846950a03c56a1f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AIJTEBF%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFRAF3bC5Lptr1jFaIiGeVPnJrLfbtWqPHjW0H6YTC7NAiEAoYFYUxYHeL4wC11Tpg358ruNy87LHMqcEXZwDoF76SwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKhY5kGUFI3e%2BzX79ircA3pLcWXeP7JizeZFvTURZdko%2FaksCmPp7DjrbWMQHNiItX8ShABm9rEtAjlVmBOVslNtgLpCoaJK8LLT5UYnEsB9Hh0KGvnhcAuttJI7NTlQch4YPifkwrIJAXyNXdPK018JyZEop0HWPdR23LZzYwU3W80QLiijhcdX5neTLT2%2FDTcuSArIK%2FCDpUmZPehq0vLEniYUedrnVNtj0SHNnjOwOgwv91BBCXF5Hrmx6h9FlXZlNHkaSVgNjVxP7R75PkMCqKyESOtaW8ta6iguKK%2F8xM8iGIjvzaLUVnIk4ggCou0t5dtThCbkVzmBGn7zrN59JpOMgVkWMg%2FdehHwd4TkDh8ZIIiOPcgwYNmsn2shFVjTAM5OoBpzqykLQJvb3pOI3lsmq1Qch1ro83%2BnX9Caq2w%2F1WNZvpnozm7Hc%2BLqmhTARElIyiB3PAB3bCGYtc7UDEYMZDzJlRH4c0trhqrPZ3465Qbygsr%2BUZfEPbty4kYQsT8QgS2nV3UjOXM64er01eRNYQugTLAz%2BwO0%2B0FfehWxF4wagL41NEB3vmjJrH5Az7AgRL14ejO%2FjbOoPqSakNyJHXIHukZMczmkw7NEVPTrqNhzejl2TkwVkxrgyQUiTpOiPU4P%2Fv%2BNMIG7n8AGOqUBp8%2BraebOmKjUctWYmgTlWTd%2B4o8BwDZRnUkQawmrRJC%2FIYXY%2ByGyt10kOpHXH%2B6LqKBSmdglRIx4Be7qemwKy6LxxTkWiHgi%2FmZXClI9IaQ28ttLwk%2Ftd8Nqz1dCrO83ZrW6oecuRTcnxBk9TWv%2FGN2D8%2FFmVD8%2FLALkBIgxNZC1LReNiPXs8sqLhD7efxqa9WbRc6y3kE15Re0hJmUri8buH9V2&X-Amz-Signature=2711ce32ecc93dcf575daa6c9fcca0e632b1940de62b41870d3df7824f6f8acf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AIJTEBF%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFRAF3bC5Lptr1jFaIiGeVPnJrLfbtWqPHjW0H6YTC7NAiEAoYFYUxYHeL4wC11Tpg358ruNy87LHMqcEXZwDoF76SwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKhY5kGUFI3e%2BzX79ircA3pLcWXeP7JizeZFvTURZdko%2FaksCmPp7DjrbWMQHNiItX8ShABm9rEtAjlVmBOVslNtgLpCoaJK8LLT5UYnEsB9Hh0KGvnhcAuttJI7NTlQch4YPifkwrIJAXyNXdPK018JyZEop0HWPdR23LZzYwU3W80QLiijhcdX5neTLT2%2FDTcuSArIK%2FCDpUmZPehq0vLEniYUedrnVNtj0SHNnjOwOgwv91BBCXF5Hrmx6h9FlXZlNHkaSVgNjVxP7R75PkMCqKyESOtaW8ta6iguKK%2F8xM8iGIjvzaLUVnIk4ggCou0t5dtThCbkVzmBGn7zrN59JpOMgVkWMg%2FdehHwd4TkDh8ZIIiOPcgwYNmsn2shFVjTAM5OoBpzqykLQJvb3pOI3lsmq1Qch1ro83%2BnX9Caq2w%2F1WNZvpnozm7Hc%2BLqmhTARElIyiB3PAB3bCGYtc7UDEYMZDzJlRH4c0trhqrPZ3465Qbygsr%2BUZfEPbty4kYQsT8QgS2nV3UjOXM64er01eRNYQugTLAz%2BwO0%2B0FfehWxF4wagL41NEB3vmjJrH5Az7AgRL14ejO%2FjbOoPqSakNyJHXIHukZMczmkw7NEVPTrqNhzejl2TkwVkxrgyQUiTpOiPU4P%2Fv%2BNMIG7n8AGOqUBp8%2BraebOmKjUctWYmgTlWTd%2B4o8BwDZRnUkQawmrRJC%2FIYXY%2ByGyt10kOpHXH%2B6LqKBSmdglRIx4Be7qemwKy6LxxTkWiHgi%2FmZXClI9IaQ28ttLwk%2Ftd8Nqz1dCrO83ZrW6oecuRTcnxBk9TWv%2FGN2D8%2FFmVD8%2FLALkBIgxNZC1LReNiPXs8sqLhD7efxqa9WbRc6y3kE15Re0hJmUri8buH9V2&X-Amz-Signature=eff0c335c609a570f77a4bd51fed10c33bc567e4c687eb800de460835f881b9c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
