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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMDXBWQA%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T170823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSP1L7m3EJdGgdPeSXtE8D50cWeA3I%2Bc6NOL7SEsUA6QIhAPDQxRTQA1SrnojsJTxOcvgrQiV%2FSrtDllcCHPvWOJ7hKv8DCGIQABoMNjM3NDIzMTgzODA1IgzGPGABkviUnMEutSEq3AO%2FjJEuT1xyilb8J8OCQc1zlnTfBGO5MjSvsWFw48Z9DEunN6thjWF26z0M8Ak8ShiLExgLbmwLnwGP6f2BzkgranMkk9ie00bAMUDvqefSVwXFJebsqq8VHF%2BQwbCrmDxz%2FqgipP7bTydupOLTkzIAtAyu7GS%2FDTknGWJkhAfNp%2B4004C9jdS0p35rx6TYhwZWy4bxyhhAB5TwYKGPEVr7YwFXBpZeS%2FvGbEfEPILE7winUwRkBaNJmSAqJFo6yX7A6FvSVO3raOiRh2vACKljcUubFtMah16w7w04aTI1MLGN2cB%2F%2FREN7q61VKAQw%2B%2F1lK9JpJysorC9IOc3B7E%2B%2BtjIYVeL4JB4i5dqSPYyqjaU7MIU9DgzHgmaIj9erTmRd7%2Fx3Q7bR3BQ8Tvd1WFZs97d%2F%2FNRz2613fjK9gD2HaugB00hpIyy3w2Gk%2FUqQj9tefG3IMES9DV%2B%2FHqGEeF0cZAPW5KtgTCxAE8fNVDU8lOu49LyqnJUXR8psFpkuTw9Y5CKQ7jDwC19g%2BA9%2F4ED5r%2BdVAEHcUw%2FwGItlqYU1hz08EILnyyup04NTLA8GKTL3ph5%2Ft41MkXRwFWGt2mZ%2BGXjDl%2B5qN8d4%2FcLOfb60bTZdTd5SgG7C2E%2FuTCLnO7ABjqkAUYeOvJF0kHOSUlHONbJfxf7yNtVS0kCepq28Nyq0rliMFlFyNaDdM%2FiZ1%2BSk2zl%2Fmr8Etlzs5CdBTo4UIZ8ixa79H4iM1w3%2FRskZ0bV%2B1T0j7JujFYT4xZK0ySJXg8uUq01HnHP6g2mouwIX0HBvEPnJyvwMtYYBJ9NeipRfpUhH0JLZi18c2Su%2FF8CYybs%2FOPDmxi8deik7sIvIGzb15GNd3DA&X-Amz-Signature=3676e29cb1cca21b4353adaba1ddf28f3bf12a62f4b7653014a4dcfb2f00b776&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMDXBWQA%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T170823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSP1L7m3EJdGgdPeSXtE8D50cWeA3I%2Bc6NOL7SEsUA6QIhAPDQxRTQA1SrnojsJTxOcvgrQiV%2FSrtDllcCHPvWOJ7hKv8DCGIQABoMNjM3NDIzMTgzODA1IgzGPGABkviUnMEutSEq3AO%2FjJEuT1xyilb8J8OCQc1zlnTfBGO5MjSvsWFw48Z9DEunN6thjWF26z0M8Ak8ShiLExgLbmwLnwGP6f2BzkgranMkk9ie00bAMUDvqefSVwXFJebsqq8VHF%2BQwbCrmDxz%2FqgipP7bTydupOLTkzIAtAyu7GS%2FDTknGWJkhAfNp%2B4004C9jdS0p35rx6TYhwZWy4bxyhhAB5TwYKGPEVr7YwFXBpZeS%2FvGbEfEPILE7winUwRkBaNJmSAqJFo6yX7A6FvSVO3raOiRh2vACKljcUubFtMah16w7w04aTI1MLGN2cB%2F%2FREN7q61VKAQw%2B%2F1lK9JpJysorC9IOc3B7E%2B%2BtjIYVeL4JB4i5dqSPYyqjaU7MIU9DgzHgmaIj9erTmRd7%2Fx3Q7bR3BQ8Tvd1WFZs97d%2F%2FNRz2613fjK9gD2HaugB00hpIyy3w2Gk%2FUqQj9tefG3IMES9DV%2B%2FHqGEeF0cZAPW5KtgTCxAE8fNVDU8lOu49LyqnJUXR8psFpkuTw9Y5CKQ7jDwC19g%2BA9%2F4ED5r%2BdVAEHcUw%2FwGItlqYU1hz08EILnyyup04NTLA8GKTL3ph5%2Ft41MkXRwFWGt2mZ%2BGXjDl%2B5qN8d4%2FcLOfb60bTZdTd5SgG7C2E%2FuTCLnO7ABjqkAUYeOvJF0kHOSUlHONbJfxf7yNtVS0kCepq28Nyq0rliMFlFyNaDdM%2FiZ1%2BSk2zl%2Fmr8Etlzs5CdBTo4UIZ8ixa79H4iM1w3%2FRskZ0bV%2B1T0j7JujFYT4xZK0ySJXg8uUq01HnHP6g2mouwIX0HBvEPnJyvwMtYYBJ9NeipRfpUhH0JLZi18c2Su%2FF8CYybs%2FOPDmxi8deik7sIvIGzb15GNd3DA&X-Amz-Signature=49b800321497d4b41ca1b6ecee0d72251d0ee9a0f60c3425720856ad05b497ad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMDXBWQA%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T170823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSP1L7m3EJdGgdPeSXtE8D50cWeA3I%2Bc6NOL7SEsUA6QIhAPDQxRTQA1SrnojsJTxOcvgrQiV%2FSrtDllcCHPvWOJ7hKv8DCGIQABoMNjM3NDIzMTgzODA1IgzGPGABkviUnMEutSEq3AO%2FjJEuT1xyilb8J8OCQc1zlnTfBGO5MjSvsWFw48Z9DEunN6thjWF26z0M8Ak8ShiLExgLbmwLnwGP6f2BzkgranMkk9ie00bAMUDvqefSVwXFJebsqq8VHF%2BQwbCrmDxz%2FqgipP7bTydupOLTkzIAtAyu7GS%2FDTknGWJkhAfNp%2B4004C9jdS0p35rx6TYhwZWy4bxyhhAB5TwYKGPEVr7YwFXBpZeS%2FvGbEfEPILE7winUwRkBaNJmSAqJFo6yX7A6FvSVO3raOiRh2vACKljcUubFtMah16w7w04aTI1MLGN2cB%2F%2FREN7q61VKAQw%2B%2F1lK9JpJysorC9IOc3B7E%2B%2BtjIYVeL4JB4i5dqSPYyqjaU7MIU9DgzHgmaIj9erTmRd7%2Fx3Q7bR3BQ8Tvd1WFZs97d%2F%2FNRz2613fjK9gD2HaugB00hpIyy3w2Gk%2FUqQj9tefG3IMES9DV%2B%2FHqGEeF0cZAPW5KtgTCxAE8fNVDU8lOu49LyqnJUXR8psFpkuTw9Y5CKQ7jDwC19g%2BA9%2F4ED5r%2BdVAEHcUw%2FwGItlqYU1hz08EILnyyup04NTLA8GKTL3ph5%2Ft41MkXRwFWGt2mZ%2BGXjDl%2B5qN8d4%2FcLOfb60bTZdTd5SgG7C2E%2FuTCLnO7ABjqkAUYeOvJF0kHOSUlHONbJfxf7yNtVS0kCepq28Nyq0rliMFlFyNaDdM%2FiZ1%2BSk2zl%2Fmr8Etlzs5CdBTo4UIZ8ixa79H4iM1w3%2FRskZ0bV%2B1T0j7JujFYT4xZK0ySJXg8uUq01HnHP6g2mouwIX0HBvEPnJyvwMtYYBJ9NeipRfpUhH0JLZi18c2Su%2FF8CYybs%2FOPDmxi8deik7sIvIGzb15GNd3DA&X-Amz-Signature=b0ebb33dad20fb79a32ac82b515a635c8b765b5ca69984186d9468ab1c3577d6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
