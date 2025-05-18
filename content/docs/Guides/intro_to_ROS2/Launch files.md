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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPYASKB7%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBpBFnPb9Lb9bfDdVhQq8sm256EMJneUxzzInEIYfT2wIhAPL4xhP7%2BlqZLr5CRk0x0yKIdfeuyyY%2FpOoWaegfV4twKv8DCG8QABoMNjM3NDIzMTgzODA1IgxCIw7jV6qvEctH%2Bt0q3AOwN9unPzHY3rBGXik4ulvwNHK%2B%2BKqC1GU2Rk%2B9I2S%2FiyAnbXa8vofKEogLgPh2Az%2Ba0AhGlYCsSJfBMZpaHxXB%2BsvU6OGHvxwZM0yIy3FiebwbVxEWd%2B6Wj00Ne0cQMIBq5qsnqykS7%2FbR%2Fc8JnkQuiVu9B8ND1Xml4NysZJyHwnmZ4VdF4GOPL%2BJM1%2B1Q4gF7fMKGBs3IaIklGq4T%2Bb9fTGcDSRFe924DhrA7oo4R81X52XA5EF9%2F%2BnbAkqCKSUxgGhxM5yyl1Ej4rf3Mk3zHFL%2Fh8T4JclAf%2FxLd3mqT7ItAMwpN%2FF7C%2Fp4JCSM%2B3SyHle21Ls%2BSBTu9IxtLi4B%2FcZztYkygFZ6IkKZCLRW2GclOGbuxE7AgopaKBNhMiIk0HSb9JqgXMjewyCzTtWt%2FydgLNy8rOFXe1N5KTec2EO0uv1wKens%2BstkqzAoS00p06s4u0ZEoKugu7TAQIQc5cUvRA0KoOu%2Fqpia7BSpc0UNSmqbPLR%2Fh9kIy91KdeefG9DlhI4UBLmFQBsC5Ch7rrLg%2BtOMq%2FPKBR4wNklBoI1GSn2CAgP0sAZ0qFnC%2B7UA7ShGYWnyAg8Tm%2BIMMYzhDQNbSO5MEl9r%2B31qogZx2Qyyi8BG1DsTXM%2FUiijDk%2BaXBBjqkASsdlZLpacoOGgexupSpp%2F4HFOTgltyyH4R1EDzcbkKokB1dqiCAtCEuctX4qb2txeJeNqgzMc1zPoqh5f1jTX4bNPCqmGbDNs9Sb1cgp%2F8%2Bv%2Fh06Hny2fbHZ8cEn9G%2FUO92%2BcGqNDfV3%2F%2BEvfVsE15ADVgpAM6uILBCodWdgkECSKtYf1lGV7n9%2BkOsnQU2V6lxb2%2F5oSknYruNNrySo4l9HBb%2B&X-Amz-Signature=af38a9464a6aae20c4f50ec41377a6f640f539c0a590aaa93390512fe040e4d5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPYASKB7%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBpBFnPb9Lb9bfDdVhQq8sm256EMJneUxzzInEIYfT2wIhAPL4xhP7%2BlqZLr5CRk0x0yKIdfeuyyY%2FpOoWaegfV4twKv8DCG8QABoMNjM3NDIzMTgzODA1IgxCIw7jV6qvEctH%2Bt0q3AOwN9unPzHY3rBGXik4ulvwNHK%2B%2BKqC1GU2Rk%2B9I2S%2FiyAnbXa8vofKEogLgPh2Az%2Ba0AhGlYCsSJfBMZpaHxXB%2BsvU6OGHvxwZM0yIy3FiebwbVxEWd%2B6Wj00Ne0cQMIBq5qsnqykS7%2FbR%2Fc8JnkQuiVu9B8ND1Xml4NysZJyHwnmZ4VdF4GOPL%2BJM1%2B1Q4gF7fMKGBs3IaIklGq4T%2Bb9fTGcDSRFe924DhrA7oo4R81X52XA5EF9%2F%2BnbAkqCKSUxgGhxM5yyl1Ej4rf3Mk3zHFL%2Fh8T4JclAf%2FxLd3mqT7ItAMwpN%2FF7C%2Fp4JCSM%2B3SyHle21Ls%2BSBTu9IxtLi4B%2FcZztYkygFZ6IkKZCLRW2GclOGbuxE7AgopaKBNhMiIk0HSb9JqgXMjewyCzTtWt%2FydgLNy8rOFXe1N5KTec2EO0uv1wKens%2BstkqzAoS00p06s4u0ZEoKugu7TAQIQc5cUvRA0KoOu%2Fqpia7BSpc0UNSmqbPLR%2Fh9kIy91KdeefG9DlhI4UBLmFQBsC5Ch7rrLg%2BtOMq%2FPKBR4wNklBoI1GSn2CAgP0sAZ0qFnC%2B7UA7ShGYWnyAg8Tm%2BIMMYzhDQNbSO5MEl9r%2B31qogZx2Qyyi8BG1DsTXM%2FUiijDk%2BaXBBjqkASsdlZLpacoOGgexupSpp%2F4HFOTgltyyH4R1EDzcbkKokB1dqiCAtCEuctX4qb2txeJeNqgzMc1zPoqh5f1jTX4bNPCqmGbDNs9Sb1cgp%2F8%2Bv%2Fh06Hny2fbHZ8cEn9G%2FUO92%2BcGqNDfV3%2F%2BEvfVsE15ADVgpAM6uILBCodWdgkECSKtYf1lGV7n9%2BkOsnQU2V6lxb2%2F5oSknYruNNrySo4l9HBb%2B&X-Amz-Signature=29ebdc99cc9cac358968f6c4b10531aa62ff6a52267a08e96a05c26b2479fb35&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPYASKB7%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBpBFnPb9Lb9bfDdVhQq8sm256EMJneUxzzInEIYfT2wIhAPL4xhP7%2BlqZLr5CRk0x0yKIdfeuyyY%2FpOoWaegfV4twKv8DCG8QABoMNjM3NDIzMTgzODA1IgxCIw7jV6qvEctH%2Bt0q3AOwN9unPzHY3rBGXik4ulvwNHK%2B%2BKqC1GU2Rk%2B9I2S%2FiyAnbXa8vofKEogLgPh2Az%2Ba0AhGlYCsSJfBMZpaHxXB%2BsvU6OGHvxwZM0yIy3FiebwbVxEWd%2B6Wj00Ne0cQMIBq5qsnqykS7%2FbR%2Fc8JnkQuiVu9B8ND1Xml4NysZJyHwnmZ4VdF4GOPL%2BJM1%2B1Q4gF7fMKGBs3IaIklGq4T%2Bb9fTGcDSRFe924DhrA7oo4R81X52XA5EF9%2F%2BnbAkqCKSUxgGhxM5yyl1Ej4rf3Mk3zHFL%2Fh8T4JclAf%2FxLd3mqT7ItAMwpN%2FF7C%2Fp4JCSM%2B3SyHle21Ls%2BSBTu9IxtLi4B%2FcZztYkygFZ6IkKZCLRW2GclOGbuxE7AgopaKBNhMiIk0HSb9JqgXMjewyCzTtWt%2FydgLNy8rOFXe1N5KTec2EO0uv1wKens%2BstkqzAoS00p06s4u0ZEoKugu7TAQIQc5cUvRA0KoOu%2Fqpia7BSpc0UNSmqbPLR%2Fh9kIy91KdeefG9DlhI4UBLmFQBsC5Ch7rrLg%2BtOMq%2FPKBR4wNklBoI1GSn2CAgP0sAZ0qFnC%2B7UA7ShGYWnyAg8Tm%2BIMMYzhDQNbSO5MEl9r%2B31qogZx2Qyyi8BG1DsTXM%2FUiijDk%2BaXBBjqkASsdlZLpacoOGgexupSpp%2F4HFOTgltyyH4R1EDzcbkKokB1dqiCAtCEuctX4qb2txeJeNqgzMc1zPoqh5f1jTX4bNPCqmGbDNs9Sb1cgp%2F8%2Bv%2Fh06Hny2fbHZ8cEn9G%2FUO92%2BcGqNDfV3%2F%2BEvfVsE15ADVgpAM6uILBCodWdgkECSKtYf1lGV7n9%2BkOsnQU2V6lxb2%2F5oSknYruNNrySo4l9HBb%2B&X-Amz-Signature=cd6fe463d22a9c0c929583d60749d0ff07e27406f8177ad89b9d4422d1626504&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
