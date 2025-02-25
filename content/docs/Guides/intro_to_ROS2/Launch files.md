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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YWTVIJK%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T003713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCa4p77BA14NVygbkAALE5o0g7MxGgSZPCSiSqBEnxq5QIhAIRCwyyGwgttUnqibF6irdl9vZyxZc7C3VDgsTUhpmaAKv8DCDkQABoMNjM3NDIzMTgzODA1IgwnAQkdN4bdGu4CNy8q3AMFPrFhIR2q3hqXJTfh%2FTAfOmxJT%2Bz9CUGWtjbX4nfAKrOiF2lhDP2UurVt6ACqnWhZafajDbdcgYDB6cHLqmRBcoGC7oBka4dWLs1FE9QkZPqlsTyWQxXwmJj%2Fiwr4BoKqSJhiWOSklCEH%2BG4%2FZbILEAq9%2B3kcro4zlqDjtsC%2BBtZTg9dNqlwV6SCPW8WhYaFb1Azoyrn7Qz1ZP7ZAs8NzPDRxvxXSNly%2BpcxL4Ga6tOGNWOhoqzLMvU57cveWgQWs6T6W4Qm1jDJHaRWQwtYWzrNo1Wmx5yyW1nf36%2BxAuaM93yu1i5y08vhkBHHY957djQeDp8%2BuSMFKfMIQqUVdx5nTrVaqp5WiGBSu5BR6n%2B71TFM4MXxDKACgK0AMcGYUeN%2BchcAmlEkq9Lwx0heDv54vhG6WJBTQGHQ0bXwSxXCjJM%2BGBUD%2BbWvCcyqZu5trh5Ggj1fsbqKhxJcNU4%2BZZobqqlUpVqC4hOVLIxKr%2BEvQq2ctd2FHobVEYRM533YfA2SD8ZuzbNXhsUPanhT3d27iFTkSr%2BPdTcjRR0aiqN4cRgpWlNWUigtAawI0Fq%2FrR9%2F9C6oH14jVsE9G3oEl3TlHCDkuf4QleXvH3KlgM16QbNLPrz43JxxkQzDcgvS9BjqkAVoC7hHVY4%2B5P4rZ3vskLlHDCNEg%2B0d5Y79ecSM1WqxbyDk%2FgZZwzMFj8KrKbSOwOWpMk98MEqoz6Z98t58TmZpKpVqbYy0rLPfJgs4zHBNj0g1UFlcUVCTexfVrsaXzDV0FOw6AmPkbHZms6ZfdRs62Lap6iHnkPqOXr32qtntCIYQxDlVF5dxSZ4jZITl2IPU%2FkZwbuwr6Lpzqp7YiT%2BdO%2FkJL&X-Amz-Signature=2ae4f0954f4116de7e53c23405270ef720d1373546444b1e46cb7ed494c844c6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YWTVIJK%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T003713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCa4p77BA14NVygbkAALE5o0g7MxGgSZPCSiSqBEnxq5QIhAIRCwyyGwgttUnqibF6irdl9vZyxZc7C3VDgsTUhpmaAKv8DCDkQABoMNjM3NDIzMTgzODA1IgwnAQkdN4bdGu4CNy8q3AMFPrFhIR2q3hqXJTfh%2FTAfOmxJT%2Bz9CUGWtjbX4nfAKrOiF2lhDP2UurVt6ACqnWhZafajDbdcgYDB6cHLqmRBcoGC7oBka4dWLs1FE9QkZPqlsTyWQxXwmJj%2Fiwr4BoKqSJhiWOSklCEH%2BG4%2FZbILEAq9%2B3kcro4zlqDjtsC%2BBtZTg9dNqlwV6SCPW8WhYaFb1Azoyrn7Qz1ZP7ZAs8NzPDRxvxXSNly%2BpcxL4Ga6tOGNWOhoqzLMvU57cveWgQWs6T6W4Qm1jDJHaRWQwtYWzrNo1Wmx5yyW1nf36%2BxAuaM93yu1i5y08vhkBHHY957djQeDp8%2BuSMFKfMIQqUVdx5nTrVaqp5WiGBSu5BR6n%2B71TFM4MXxDKACgK0AMcGYUeN%2BchcAmlEkq9Lwx0heDv54vhG6WJBTQGHQ0bXwSxXCjJM%2BGBUD%2BbWvCcyqZu5trh5Ggj1fsbqKhxJcNU4%2BZZobqqlUpVqC4hOVLIxKr%2BEvQq2ctd2FHobVEYRM533YfA2SD8ZuzbNXhsUPanhT3d27iFTkSr%2BPdTcjRR0aiqN4cRgpWlNWUigtAawI0Fq%2FrR9%2F9C6oH14jVsE9G3oEl3TlHCDkuf4QleXvH3KlgM16QbNLPrz43JxxkQzDcgvS9BjqkAVoC7hHVY4%2B5P4rZ3vskLlHDCNEg%2B0d5Y79ecSM1WqxbyDk%2FgZZwzMFj8KrKbSOwOWpMk98MEqoz6Z98t58TmZpKpVqbYy0rLPfJgs4zHBNj0g1UFlcUVCTexfVrsaXzDV0FOw6AmPkbHZms6ZfdRs62Lap6iHnkPqOXr32qtntCIYQxDlVF5dxSZ4jZITl2IPU%2FkZwbuwr6Lpzqp7YiT%2BdO%2FkJL&X-Amz-Signature=33922c12c4b77442e4bfe9dfaa3c3725507ab8f913550ad11d19fd93ece222fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YWTVIJK%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T003713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCa4p77BA14NVygbkAALE5o0g7MxGgSZPCSiSqBEnxq5QIhAIRCwyyGwgttUnqibF6irdl9vZyxZc7C3VDgsTUhpmaAKv8DCDkQABoMNjM3NDIzMTgzODA1IgwnAQkdN4bdGu4CNy8q3AMFPrFhIR2q3hqXJTfh%2FTAfOmxJT%2Bz9CUGWtjbX4nfAKrOiF2lhDP2UurVt6ACqnWhZafajDbdcgYDB6cHLqmRBcoGC7oBka4dWLs1FE9QkZPqlsTyWQxXwmJj%2Fiwr4BoKqSJhiWOSklCEH%2BG4%2FZbILEAq9%2B3kcro4zlqDjtsC%2BBtZTg9dNqlwV6SCPW8WhYaFb1Azoyrn7Qz1ZP7ZAs8NzPDRxvxXSNly%2BpcxL4Ga6tOGNWOhoqzLMvU57cveWgQWs6T6W4Qm1jDJHaRWQwtYWzrNo1Wmx5yyW1nf36%2BxAuaM93yu1i5y08vhkBHHY957djQeDp8%2BuSMFKfMIQqUVdx5nTrVaqp5WiGBSu5BR6n%2B71TFM4MXxDKACgK0AMcGYUeN%2BchcAmlEkq9Lwx0heDv54vhG6WJBTQGHQ0bXwSxXCjJM%2BGBUD%2BbWvCcyqZu5trh5Ggj1fsbqKhxJcNU4%2BZZobqqlUpVqC4hOVLIxKr%2BEvQq2ctd2FHobVEYRM533YfA2SD8ZuzbNXhsUPanhT3d27iFTkSr%2BPdTcjRR0aiqN4cRgpWlNWUigtAawI0Fq%2FrR9%2F9C6oH14jVsE9G3oEl3TlHCDkuf4QleXvH3KlgM16QbNLPrz43JxxkQzDcgvS9BjqkAVoC7hHVY4%2B5P4rZ3vskLlHDCNEg%2B0d5Y79ecSM1WqxbyDk%2FgZZwzMFj8KrKbSOwOWpMk98MEqoz6Z98t58TmZpKpVqbYy0rLPfJgs4zHBNj0g1UFlcUVCTexfVrsaXzDV0FOw6AmPkbHZms6ZfdRs62Lap6iHnkPqOXr32qtntCIYQxDlVF5dxSZ4jZITl2IPU%2FkZwbuwr6Lpzqp7YiT%2BdO%2FkJL&X-Amz-Signature=404f456207bb2fc7dc3df35475f1debdfd4247d600bdf6bb666f7cf53c4df76b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
