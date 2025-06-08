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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4YCPK6U%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2Bnkv6g%2BMyjK%2BmIoC7oOyA6e3kQu9ARDbjd3F4NmEbgAiEArJfRmsZswyiCMtYgRMhuRakyXqchYixlQ8jshbBZD%2FIqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBASOElxus23V%2FT8NSrcAymXN8TD6e5jL%2BmRPwWJcNrZONQ9CLO5YNM7C1r0QgwaOuLCgaXbUc68ups%2FSoe3a8uwbEwyAC8%2BgJooBXJfC5xdBK92P%2FtjjKaAanM8FYug8bulaS%2BtvDrlgdbO%2Fj09xhWE8MeXLVJFaJGrZw4dtVtYAlaSOJe5Yl5NrUJFkt28MaSJq0VZLYBkYlq%2B5ToU%2BpA3FWDiss0lw6xw5j%2BDOO69DjJUh2E6mFPt%2FWW3UL21QrGxKq6gIXmafZSNMSQ5x1rC5uJne7SlOFu7RZ%2BRHJFzUqT7cuxO0uM4BWGlPrzG8ivK6FAvn6vJJL6BEBG0hMcUPGDoPdDAxxJU0m2rsj%2B9%2Bfhv345gYx7qhJdVPJl6yBOLlCPn5NnpQr7bTA%2BhzC7vIwWkdc2y6ToWBAbFSZbTnzVkXSPdQEZnWha3BzbaLhtFf86S9X37AbUH3iHLJJnDbaw7E3PdpOQi6pGyEJhEPT0lA0813KaZvuUf07wtFeDmIwT1%2FEuE%2BUOXnenKLgT38HiQHtqI0sKrq3nml8EmKM9qNHk%2FM1JPgymAt%2FTxo7%2Bg%2BizDCYGHd9yhNFLCDqp%2BBXEGGfDVWkDj79MgXtAYO6m%2Fnja6nVjmVjTAJxCWhD%2FFzoXbXfx%2BQja4MLOylsIGOqUBgf8aZ%2F1Pio3kX5vDCHhUe0faiNTGy6eZ%2FuvfuGFRQ8Qxforu%2F8dotYXqfD%2B4NGOivONiYdxI%2BcV5HuEzPoache88h2pApReW9COZdz7W%2BGDa8We3ShTcohthQfxpxRYlL%2Brc7J74ov%2F7cPMj93V5s7mySYPKQH5%2FsE2jJVBuKaV%2FPdRiUrW%2BhVsl2HyA2kJWzgEjQLX07W4PMDOveGedkn%2FM34de&X-Amz-Signature=e75a523ca15037a7733eaa6c37173bdfa5edb9b8dbd89da58edd3e4b900d0564&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4YCPK6U%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2Bnkv6g%2BMyjK%2BmIoC7oOyA6e3kQu9ARDbjd3F4NmEbgAiEArJfRmsZswyiCMtYgRMhuRakyXqchYixlQ8jshbBZD%2FIqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBASOElxus23V%2FT8NSrcAymXN8TD6e5jL%2BmRPwWJcNrZONQ9CLO5YNM7C1r0QgwaOuLCgaXbUc68ups%2FSoe3a8uwbEwyAC8%2BgJooBXJfC5xdBK92P%2FtjjKaAanM8FYug8bulaS%2BtvDrlgdbO%2Fj09xhWE8MeXLVJFaJGrZw4dtVtYAlaSOJe5Yl5NrUJFkt28MaSJq0VZLYBkYlq%2B5ToU%2BpA3FWDiss0lw6xw5j%2BDOO69DjJUh2E6mFPt%2FWW3UL21QrGxKq6gIXmafZSNMSQ5x1rC5uJne7SlOFu7RZ%2BRHJFzUqT7cuxO0uM4BWGlPrzG8ivK6FAvn6vJJL6BEBG0hMcUPGDoPdDAxxJU0m2rsj%2B9%2Bfhv345gYx7qhJdVPJl6yBOLlCPn5NnpQr7bTA%2BhzC7vIwWkdc2y6ToWBAbFSZbTnzVkXSPdQEZnWha3BzbaLhtFf86S9X37AbUH3iHLJJnDbaw7E3PdpOQi6pGyEJhEPT0lA0813KaZvuUf07wtFeDmIwT1%2FEuE%2BUOXnenKLgT38HiQHtqI0sKrq3nml8EmKM9qNHk%2FM1JPgymAt%2FTxo7%2Bg%2BizDCYGHd9yhNFLCDqp%2BBXEGGfDVWkDj79MgXtAYO6m%2Fnja6nVjmVjTAJxCWhD%2FFzoXbXfx%2BQja4MLOylsIGOqUBgf8aZ%2F1Pio3kX5vDCHhUe0faiNTGy6eZ%2FuvfuGFRQ8Qxforu%2F8dotYXqfD%2B4NGOivONiYdxI%2BcV5HuEzPoache88h2pApReW9COZdz7W%2BGDa8We3ShTcohthQfxpxRYlL%2Brc7J74ov%2F7cPMj93V5s7mySYPKQH5%2FsE2jJVBuKaV%2FPdRiUrW%2BhVsl2HyA2kJWzgEjQLX07W4PMDOveGedkn%2FM34de&X-Amz-Signature=2c67a88e3ca789378358be2b6384fc8d47741aec0e5a2915fef4b650d303f6d6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4YCPK6U%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2Bnkv6g%2BMyjK%2BmIoC7oOyA6e3kQu9ARDbjd3F4NmEbgAiEArJfRmsZswyiCMtYgRMhuRakyXqchYixlQ8jshbBZD%2FIqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBASOElxus23V%2FT8NSrcAymXN8TD6e5jL%2BmRPwWJcNrZONQ9CLO5YNM7C1r0QgwaOuLCgaXbUc68ups%2FSoe3a8uwbEwyAC8%2BgJooBXJfC5xdBK92P%2FtjjKaAanM8FYug8bulaS%2BtvDrlgdbO%2Fj09xhWE8MeXLVJFaJGrZw4dtVtYAlaSOJe5Yl5NrUJFkt28MaSJq0VZLYBkYlq%2B5ToU%2BpA3FWDiss0lw6xw5j%2BDOO69DjJUh2E6mFPt%2FWW3UL21QrGxKq6gIXmafZSNMSQ5x1rC5uJne7SlOFu7RZ%2BRHJFzUqT7cuxO0uM4BWGlPrzG8ivK6FAvn6vJJL6BEBG0hMcUPGDoPdDAxxJU0m2rsj%2B9%2Bfhv345gYx7qhJdVPJl6yBOLlCPn5NnpQr7bTA%2BhzC7vIwWkdc2y6ToWBAbFSZbTnzVkXSPdQEZnWha3BzbaLhtFf86S9X37AbUH3iHLJJnDbaw7E3PdpOQi6pGyEJhEPT0lA0813KaZvuUf07wtFeDmIwT1%2FEuE%2BUOXnenKLgT38HiQHtqI0sKrq3nml8EmKM9qNHk%2FM1JPgymAt%2FTxo7%2Bg%2BizDCYGHd9yhNFLCDqp%2BBXEGGfDVWkDj79MgXtAYO6m%2Fnja6nVjmVjTAJxCWhD%2FFzoXbXfx%2BQja4MLOylsIGOqUBgf8aZ%2F1Pio3kX5vDCHhUe0faiNTGy6eZ%2FuvfuGFRQ8Qxforu%2F8dotYXqfD%2B4NGOivONiYdxI%2BcV5HuEzPoache88h2pApReW9COZdz7W%2BGDa8We3ShTcohthQfxpxRYlL%2Brc7J74ov%2F7cPMj93V5s7mySYPKQH5%2FsE2jJVBuKaV%2FPdRiUrW%2BhVsl2HyA2kJWzgEjQLX07W4PMDOveGedkn%2FM34de&X-Amz-Signature=f7dacc0686c9716d2f40ec2d08dd15b1781ff9bb369bd64b3d587255afcaff4b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
