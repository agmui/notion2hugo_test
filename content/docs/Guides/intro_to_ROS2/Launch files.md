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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FYVXYO4%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BiPwY%2Fr%2BF5xAkJ2qTNiFiwJmESJPaW%2FXvefJhtJn4qQIhAOyHGUPAj1kl64FEn%2F1eRQ61Fsc73sjNmyYPLaz7MuXEKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcPNSFyOVDfqKwF3kq3AMwrlD5WicTKEj2BEXarSp9EsENfRrB7PN%2BUBJNlpgQqBZ5QJxr4BvXYRdQY1A8kdPmp2D%2FU4PoQ80JX8TS%2Ft1TkVrwtuAfK6KsEI1HlYMWAOY90yNJ2A9ciYLfat3m2ZnhgUile04lBQ2EpcKK0F%2Fq2DUOLGoCIWGgmL7CiX93GZzPvaL06nPIP6njXjGYbTBEUQtR0LkfV2LNz5Y2QW4CIt2cTgQg%2BBTyuJKbQGQGL18cCRlIb08RPYM7G9Bq%2BdxzWQAKTkeTbwKcBZsUu5pzqbAIOn3IuKU5XTMiAQhbhsKDI5K83t7nO46HDYj0RMlTUf6wh8WFk%2B17sdhspy0xo9YD63yDRiD1dRBquqBw9qGXjEK3A9cFYMDZxAvpOdboltfalDTR1a2rlm9WWG7DIdxzj4BuB7F6m3YOonqxwV7JuHAY%2B12Ed0wHxZVc9hCYDTrNsK6qQ99g9KGpgBpfb5f9P0nD9yWNHAkDaJZhQ294vRlVMHQKQq5PzYVdYptM96vjfLQl4YyaNdRy8CgrsqYoTTcm%2BqdnwJvYdqq0SynnOmpP3KG%2FmXDh%2FMgCRKs%2B6ZyNNm9rogLZ%2BT2wMCEEKMI7x8C3RaQx2p72eahCSX6%2B%2Ftl6Rf7hpxyDgzDJnsm%2BBjqkAba4bsH4JWaXzCLFxGfwNvIvGtShbYmLfs7oE%2FJKG4RIAD19s1eMuMph%2Bw3NpVgRbghJdNMpWGAJGwb9Ekeo1WW5BUCKUMC%2BvXdfksnFRlkzAw9rKEGcO4DzndMylKDVMWd8Ci%2Bn6geh8NJdzfuUf8Z%2FgFCLkdL6jH5tgdWYtow41MNrmSIDOJcILYxdFIyl4ORNtDDSZ3zZTysX%2B1fuLh5p9ezT&X-Amz-Signature=0eff074d0b4a51f372404f77eb8ed69bb55bff1c85551e4cf92777f962fda175&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FYVXYO4%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BiPwY%2Fr%2BF5xAkJ2qTNiFiwJmESJPaW%2FXvefJhtJn4qQIhAOyHGUPAj1kl64FEn%2F1eRQ61Fsc73sjNmyYPLaz7MuXEKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcPNSFyOVDfqKwF3kq3AMwrlD5WicTKEj2BEXarSp9EsENfRrB7PN%2BUBJNlpgQqBZ5QJxr4BvXYRdQY1A8kdPmp2D%2FU4PoQ80JX8TS%2Ft1TkVrwtuAfK6KsEI1HlYMWAOY90yNJ2A9ciYLfat3m2ZnhgUile04lBQ2EpcKK0F%2Fq2DUOLGoCIWGgmL7CiX93GZzPvaL06nPIP6njXjGYbTBEUQtR0LkfV2LNz5Y2QW4CIt2cTgQg%2BBTyuJKbQGQGL18cCRlIb08RPYM7G9Bq%2BdxzWQAKTkeTbwKcBZsUu5pzqbAIOn3IuKU5XTMiAQhbhsKDI5K83t7nO46HDYj0RMlTUf6wh8WFk%2B17sdhspy0xo9YD63yDRiD1dRBquqBw9qGXjEK3A9cFYMDZxAvpOdboltfalDTR1a2rlm9WWG7DIdxzj4BuB7F6m3YOonqxwV7JuHAY%2B12Ed0wHxZVc9hCYDTrNsK6qQ99g9KGpgBpfb5f9P0nD9yWNHAkDaJZhQ294vRlVMHQKQq5PzYVdYptM96vjfLQl4YyaNdRy8CgrsqYoTTcm%2BqdnwJvYdqq0SynnOmpP3KG%2FmXDh%2FMgCRKs%2B6ZyNNm9rogLZ%2BT2wMCEEKMI7x8C3RaQx2p72eahCSX6%2B%2Ftl6Rf7hpxyDgzDJnsm%2BBjqkAba4bsH4JWaXzCLFxGfwNvIvGtShbYmLfs7oE%2FJKG4RIAD19s1eMuMph%2Bw3NpVgRbghJdNMpWGAJGwb9Ekeo1WW5BUCKUMC%2BvXdfksnFRlkzAw9rKEGcO4DzndMylKDVMWd8Ci%2Bn6geh8NJdzfuUf8Z%2FgFCLkdL6jH5tgdWYtow41MNrmSIDOJcILYxdFIyl4ORNtDDSZ3zZTysX%2B1fuLh5p9ezT&X-Amz-Signature=bf3f8cdab519073834ff7f21dda4216bd49bf65b56f2d9949d22e30e5379eb39&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FYVXYO4%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BiPwY%2Fr%2BF5xAkJ2qTNiFiwJmESJPaW%2FXvefJhtJn4qQIhAOyHGUPAj1kl64FEn%2F1eRQ61Fsc73sjNmyYPLaz7MuXEKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcPNSFyOVDfqKwF3kq3AMwrlD5WicTKEj2BEXarSp9EsENfRrB7PN%2BUBJNlpgQqBZ5QJxr4BvXYRdQY1A8kdPmp2D%2FU4PoQ80JX8TS%2Ft1TkVrwtuAfK6KsEI1HlYMWAOY90yNJ2A9ciYLfat3m2ZnhgUile04lBQ2EpcKK0F%2Fq2DUOLGoCIWGgmL7CiX93GZzPvaL06nPIP6njXjGYbTBEUQtR0LkfV2LNz5Y2QW4CIt2cTgQg%2BBTyuJKbQGQGL18cCRlIb08RPYM7G9Bq%2BdxzWQAKTkeTbwKcBZsUu5pzqbAIOn3IuKU5XTMiAQhbhsKDI5K83t7nO46HDYj0RMlTUf6wh8WFk%2B17sdhspy0xo9YD63yDRiD1dRBquqBw9qGXjEK3A9cFYMDZxAvpOdboltfalDTR1a2rlm9WWG7DIdxzj4BuB7F6m3YOonqxwV7JuHAY%2B12Ed0wHxZVc9hCYDTrNsK6qQ99g9KGpgBpfb5f9P0nD9yWNHAkDaJZhQ294vRlVMHQKQq5PzYVdYptM96vjfLQl4YyaNdRy8CgrsqYoTTcm%2BqdnwJvYdqq0SynnOmpP3KG%2FmXDh%2FMgCRKs%2B6ZyNNm9rogLZ%2BT2wMCEEKMI7x8C3RaQx2p72eahCSX6%2B%2Ftl6Rf7hpxyDgzDJnsm%2BBjqkAba4bsH4JWaXzCLFxGfwNvIvGtShbYmLfs7oE%2FJKG4RIAD19s1eMuMph%2Bw3NpVgRbghJdNMpWGAJGwb9Ekeo1WW5BUCKUMC%2BvXdfksnFRlkzAw9rKEGcO4DzndMylKDVMWd8Ci%2Bn6geh8NJdzfuUf8Z%2FgFCLkdL6jH5tgdWYtow41MNrmSIDOJcILYxdFIyl4ORNtDDSZ3zZTysX%2B1fuLh5p9ezT&X-Amz-Signature=2e5976e32bcec319d483e21819ec15f2e12b4f8d8bb1b28b2c93e18ceff73ea9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
