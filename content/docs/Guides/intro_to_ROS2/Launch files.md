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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E2CSTQZ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T220739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9J1z95WkeptXv0ZWDVbNDpGuKnXlE1MpHCuhDsJoxpwIhAKK3TcF0EE7enXVkSTCDVTa%2BH0zBqvzjLlhkJQuB2uU6Kv8DCGYQABoMNjM3NDIzMTgzODA1IgxebKwWAn1iF2FR1YEq3APQWwavou96Tx3P66hZMNXawdRcireOY%2Fb3x4OBJ9889DC10b2C94QIHb3utu7LuHMc1PxaUyjPXcabGrRq%2BBMttC2%2BpCZNKJhzUMQKA%2B1mlf5tQv7PGXtRUlAinDH9RcJmfgK9HamH5wX%2Fnq02mmTo7K01ypkDoaauiZNsv2OVqA41WMbXxfkppYi%2BER8JOLETi8%2BH6V%2Bjxvw0uN%2F3lS5McpMvmOJUO5Dl1yjMQcrXgnJklVY6A1XZwmpIZPUl97jC5uUQKPFjW2kQc28H8%2Fnd1ZpN8tmJRdV%2BUmh0UcmBiyC3ErUuDHeZgNEufuKEZiINmuSu7qZLlJJefpzIRyMA58mlDip0QUzc1Oo9v5XxMxMbdeDJiSlmUlvvYM2csqCq8l7w4qS60qGuaCnulsu3NgNgb5Rpf6zw3CterRv%2Fk%2FfyBlzovC2Av65ay66fRB1PpQc6WYO1c8SUJykXefmbg71Uq1AKhISWrM6icMTOLwc9cI45S2SgxCfsHbCJ6s5pnHYE%2BJXNuj2MdgvD9GulVj9x9CLTXoFwWUR1n2odYe8KalsDce5uZNVsxx1rt%2FbdoBmwtGs8jZyn5nMEYfTJrDVPohbyyFoTPkDBdOdPwKOk%2BWnvrbDEbGqc%2BzD%2B0IXABjqkAYDBWTBV71GxeriyocnP4ovLaJpECblXZVynYIG8QFMPlnaf5spJ46KHnGuwm4POY65i8ysAyqI9Fr7ZEGUCWrRo5Urg%2FUKp%2B4CieGv8fnvgSAj%2BAjXzD%2BWfd4ACojx%2FUhAi1jGE2PtrhfR4AIW%2Bf4zHwAkscd6%2FNGvK3JfgHMS%2BYQgg5ddFLUZobLrehN1dG%2FSr%2Fzdd83ne5KPKC1ax2mVlTN2H&X-Amz-Signature=b59114bf1df1c55387d58df90ad566cd19be90afa0910ce0e7c7313891331cb6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E2CSTQZ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T220739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9J1z95WkeptXv0ZWDVbNDpGuKnXlE1MpHCuhDsJoxpwIhAKK3TcF0EE7enXVkSTCDVTa%2BH0zBqvzjLlhkJQuB2uU6Kv8DCGYQABoMNjM3NDIzMTgzODA1IgxebKwWAn1iF2FR1YEq3APQWwavou96Tx3P66hZMNXawdRcireOY%2Fb3x4OBJ9889DC10b2C94QIHb3utu7LuHMc1PxaUyjPXcabGrRq%2BBMttC2%2BpCZNKJhzUMQKA%2B1mlf5tQv7PGXtRUlAinDH9RcJmfgK9HamH5wX%2Fnq02mmTo7K01ypkDoaauiZNsv2OVqA41WMbXxfkppYi%2BER8JOLETi8%2BH6V%2Bjxvw0uN%2F3lS5McpMvmOJUO5Dl1yjMQcrXgnJklVY6A1XZwmpIZPUl97jC5uUQKPFjW2kQc28H8%2Fnd1ZpN8tmJRdV%2BUmh0UcmBiyC3ErUuDHeZgNEufuKEZiINmuSu7qZLlJJefpzIRyMA58mlDip0QUzc1Oo9v5XxMxMbdeDJiSlmUlvvYM2csqCq8l7w4qS60qGuaCnulsu3NgNgb5Rpf6zw3CterRv%2Fk%2FfyBlzovC2Av65ay66fRB1PpQc6WYO1c8SUJykXefmbg71Uq1AKhISWrM6icMTOLwc9cI45S2SgxCfsHbCJ6s5pnHYE%2BJXNuj2MdgvD9GulVj9x9CLTXoFwWUR1n2odYe8KalsDce5uZNVsxx1rt%2FbdoBmwtGs8jZyn5nMEYfTJrDVPohbyyFoTPkDBdOdPwKOk%2BWnvrbDEbGqc%2BzD%2B0IXABjqkAYDBWTBV71GxeriyocnP4ovLaJpECblXZVynYIG8QFMPlnaf5spJ46KHnGuwm4POY65i8ysAyqI9Fr7ZEGUCWrRo5Urg%2FUKp%2B4CieGv8fnvgSAj%2BAjXzD%2BWfd4ACojx%2FUhAi1jGE2PtrhfR4AIW%2Bf4zHwAkscd6%2FNGvK3JfgHMS%2BYQgg5ddFLUZobLrehN1dG%2FSr%2Fzdd83ne5KPKC1ax2mVlTN2H&X-Amz-Signature=ac6c78c3904f34e8985d330dff8c2f7977029ade6acf98927f69e5a6210184e5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E2CSTQZ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T220739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9J1z95WkeptXv0ZWDVbNDpGuKnXlE1MpHCuhDsJoxpwIhAKK3TcF0EE7enXVkSTCDVTa%2BH0zBqvzjLlhkJQuB2uU6Kv8DCGYQABoMNjM3NDIzMTgzODA1IgxebKwWAn1iF2FR1YEq3APQWwavou96Tx3P66hZMNXawdRcireOY%2Fb3x4OBJ9889DC10b2C94QIHb3utu7LuHMc1PxaUyjPXcabGrRq%2BBMttC2%2BpCZNKJhzUMQKA%2B1mlf5tQv7PGXtRUlAinDH9RcJmfgK9HamH5wX%2Fnq02mmTo7K01ypkDoaauiZNsv2OVqA41WMbXxfkppYi%2BER8JOLETi8%2BH6V%2Bjxvw0uN%2F3lS5McpMvmOJUO5Dl1yjMQcrXgnJklVY6A1XZwmpIZPUl97jC5uUQKPFjW2kQc28H8%2Fnd1ZpN8tmJRdV%2BUmh0UcmBiyC3ErUuDHeZgNEufuKEZiINmuSu7qZLlJJefpzIRyMA58mlDip0QUzc1Oo9v5XxMxMbdeDJiSlmUlvvYM2csqCq8l7w4qS60qGuaCnulsu3NgNgb5Rpf6zw3CterRv%2Fk%2FfyBlzovC2Av65ay66fRB1PpQc6WYO1c8SUJykXefmbg71Uq1AKhISWrM6icMTOLwc9cI45S2SgxCfsHbCJ6s5pnHYE%2BJXNuj2MdgvD9GulVj9x9CLTXoFwWUR1n2odYe8KalsDce5uZNVsxx1rt%2FbdoBmwtGs8jZyn5nMEYfTJrDVPohbyyFoTPkDBdOdPwKOk%2BWnvrbDEbGqc%2BzD%2B0IXABjqkAYDBWTBV71GxeriyocnP4ovLaJpECblXZVynYIG8QFMPlnaf5spJ46KHnGuwm4POY65i8ysAyqI9Fr7ZEGUCWrRo5Urg%2FUKp%2B4CieGv8fnvgSAj%2BAjXzD%2BWfd4ACojx%2FUhAi1jGE2PtrhfR4AIW%2Bf4zHwAkscd6%2FNGvK3JfgHMS%2BYQgg5ddFLUZobLrehN1dG%2FSr%2Fzdd83ne5KPKC1ax2mVlTN2H&X-Amz-Signature=10daadd19bb7895e20c55de142eaf6d9a91d8791d6d6192b33bea55fff67ef80&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
