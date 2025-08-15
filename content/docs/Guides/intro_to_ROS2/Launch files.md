---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBKADPZ7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQD1yK3GZM8UXfH6vf85d0sJR3IRHsivVvYd2CdH6lz4KwIhAKYUH81hDuFASSsqoA%2BXklwly5YzHDMo2UhYkSIJNniTKv8DCGMQABoMNjM3NDIzMTgzODA1IgwP2SxEAx7%2FwmehCvcq3AOwBfq8xKuVXFSq0vtqWEWrdjwoRWhqBJ%2Fi8ZXhiUL%2FKFsoI9rS7jj34vyREd%2FvPKgCSeL1njkV7UVYW6A%2BCEE5VdWJVpNS3EzISR%2B8USncJt9bKybocGLJ05O%2BNMuKK2DVA%2FSq39jYdfz7vJu%2Br6de0RgwB1fSIls4bsRRsG7hO9tmnd9EO4InknXMuhlNJT%2BrHnPPfPZJynjTPe1ZnAm%2BDOgKKHqgBiAAJPbkRvtgMmO4ZJz7xlKks9MAt4Qt3IdcvnV29gG%2FocCwMAbxuYrJMyyhI9ch5%2BLWjyMu4jPP1iJreT9oYjL6pOyPXHrOBA5HcS020zgh%2BBwvZ63jJd7a1xLmNDm2eN9yD81qlA%2BRuwA2KuNiHyU7KJu2%2FgJUXVnddayfm6cte7Xv3MzyRv2jZmGrG6w8m9rRGqZx5xhRHmFJxovLYfxZx76JuLcozneKL9mI8WQ9jMx7zdsevzgmko%2BGLtvlCdknHncV8Fk%2BMiVJ8yxDEAJtN6vpZSOA2CY0WrjtdCPSe5C7Way%2BUGy0ew3VDygufs7rP5cvuRLwfqKDTSef4SuD9ADqq8djZp6%2F0vgtsh2%2B28WevXOGRO0TXUQOjHezCNN%2F%2BkXEPwNahriU1Y1t4kMz1EjT8DDE2v3EBjqkAbHLoyzil534ThaPaya%2FZhOnjzIUbPoXE7H%2BQvVr2BmvOvnJdQOYHLI9ObWlv8b%2F4aGjeoe4GkfzIjTYOSTvq3fVJhAp%2F86I3XgHpe843n%2FF7FOhgrJlg6oBJjOYU6bNhPYmmgaC9MxVnAk0hsnrD2dIVpzjmgi4hRW%2Bo8HUQ8rH3Bjnt8iIB8P6UZFnKOX0n70IrhUP6stQQTS%2F1cKf8NTPf49Y&X-Amz-Signature=433dd2c42e4da0af2cb0237b76c355de639fdf4339b3334394c95705ddbda970&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBKADPZ7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQD1yK3GZM8UXfH6vf85d0sJR3IRHsivVvYd2CdH6lz4KwIhAKYUH81hDuFASSsqoA%2BXklwly5YzHDMo2UhYkSIJNniTKv8DCGMQABoMNjM3NDIzMTgzODA1IgwP2SxEAx7%2FwmehCvcq3AOwBfq8xKuVXFSq0vtqWEWrdjwoRWhqBJ%2Fi8ZXhiUL%2FKFsoI9rS7jj34vyREd%2FvPKgCSeL1njkV7UVYW6A%2BCEE5VdWJVpNS3EzISR%2B8USncJt9bKybocGLJ05O%2BNMuKK2DVA%2FSq39jYdfz7vJu%2Br6de0RgwB1fSIls4bsRRsG7hO9tmnd9EO4InknXMuhlNJT%2BrHnPPfPZJynjTPe1ZnAm%2BDOgKKHqgBiAAJPbkRvtgMmO4ZJz7xlKks9MAt4Qt3IdcvnV29gG%2FocCwMAbxuYrJMyyhI9ch5%2BLWjyMu4jPP1iJreT9oYjL6pOyPXHrOBA5HcS020zgh%2BBwvZ63jJd7a1xLmNDm2eN9yD81qlA%2BRuwA2KuNiHyU7KJu2%2FgJUXVnddayfm6cte7Xv3MzyRv2jZmGrG6w8m9rRGqZx5xhRHmFJxovLYfxZx76JuLcozneKL9mI8WQ9jMx7zdsevzgmko%2BGLtvlCdknHncV8Fk%2BMiVJ8yxDEAJtN6vpZSOA2CY0WrjtdCPSe5C7Way%2BUGy0ew3VDygufs7rP5cvuRLwfqKDTSef4SuD9ADqq8djZp6%2F0vgtsh2%2B28WevXOGRO0TXUQOjHezCNN%2F%2BkXEPwNahriU1Y1t4kMz1EjT8DDE2v3EBjqkAbHLoyzil534ThaPaya%2FZhOnjzIUbPoXE7H%2BQvVr2BmvOvnJdQOYHLI9ObWlv8b%2F4aGjeoe4GkfzIjTYOSTvq3fVJhAp%2F86I3XgHpe843n%2FF7FOhgrJlg6oBJjOYU6bNhPYmmgaC9MxVnAk0hsnrD2dIVpzjmgi4hRW%2Bo8HUQ8rH3Bjnt8iIB8P6UZFnKOX0n70IrhUP6stQQTS%2F1cKf8NTPf49Y&X-Amz-Signature=aa58fc9e317edb582b1e9c3972b4f69f30592f8e7bc4a7557b529a84a1453850&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBKADPZ7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQD1yK3GZM8UXfH6vf85d0sJR3IRHsivVvYd2CdH6lz4KwIhAKYUH81hDuFASSsqoA%2BXklwly5YzHDMo2UhYkSIJNniTKv8DCGMQABoMNjM3NDIzMTgzODA1IgwP2SxEAx7%2FwmehCvcq3AOwBfq8xKuVXFSq0vtqWEWrdjwoRWhqBJ%2Fi8ZXhiUL%2FKFsoI9rS7jj34vyREd%2FvPKgCSeL1njkV7UVYW6A%2BCEE5VdWJVpNS3EzISR%2B8USncJt9bKybocGLJ05O%2BNMuKK2DVA%2FSq39jYdfz7vJu%2Br6de0RgwB1fSIls4bsRRsG7hO9tmnd9EO4InknXMuhlNJT%2BrHnPPfPZJynjTPe1ZnAm%2BDOgKKHqgBiAAJPbkRvtgMmO4ZJz7xlKks9MAt4Qt3IdcvnV29gG%2FocCwMAbxuYrJMyyhI9ch5%2BLWjyMu4jPP1iJreT9oYjL6pOyPXHrOBA5HcS020zgh%2BBwvZ63jJd7a1xLmNDm2eN9yD81qlA%2BRuwA2KuNiHyU7KJu2%2FgJUXVnddayfm6cte7Xv3MzyRv2jZmGrG6w8m9rRGqZx5xhRHmFJxovLYfxZx76JuLcozneKL9mI8WQ9jMx7zdsevzgmko%2BGLtvlCdknHncV8Fk%2BMiVJ8yxDEAJtN6vpZSOA2CY0WrjtdCPSe5C7Way%2BUGy0ew3VDygufs7rP5cvuRLwfqKDTSef4SuD9ADqq8djZp6%2F0vgtsh2%2B28WevXOGRO0TXUQOjHezCNN%2F%2BkXEPwNahriU1Y1t4kMz1EjT8DDE2v3EBjqkAbHLoyzil534ThaPaya%2FZhOnjzIUbPoXE7H%2BQvVr2BmvOvnJdQOYHLI9ObWlv8b%2F4aGjeoe4GkfzIjTYOSTvq3fVJhAp%2F86I3XgHpe843n%2FF7FOhgrJlg6oBJjOYU6bNhPYmmgaC9MxVnAk0hsnrD2dIVpzjmgi4hRW%2Bo8HUQ8rH3Bjnt8iIB8P6UZFnKOX0n70IrhUP6stQQTS%2F1cKf8NTPf49Y&X-Amz-Signature=67db30ba1b902dd2df2bb3642b346a52d6e5f499056c32bca9d6a6f4e07e79ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
