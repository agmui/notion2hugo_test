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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNRX44F7%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDR0NCf2TBM%2FOxdoP9T8PEET3uBE2U%2Fmji%2Fn5MM86LQFwIhAJUmSidNs4IYCfU9gJp11hlPF3YWv4sU%2F2ZOLxxINAvBKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBfz8%2Buhn7ny7eGxgq3APmi89dEFkIby91VcVJwVkwABBtSKd5dkS1enOp%2Flfp%2FxuJGVFSy9tmNwJesWZyyo%2BKE%2FktOnR07oo6RnwttaHt6pRBdo8Ijj%2B3h52HOVG%2FaLizUIUadEAPhCbWKZ6qsyWyf4MrRo5rJ6cBePOHsCBR%2FXAsLhYlD7YdZfwghwCSYsy8Ny6OF9MzG0100cJZtMZws%2FmRjqx5EmP%2Bk8l75QNoqjSqbIm9KxZmg2Jn6n3D96%2B%2B16Ad4fAsQrf4fkUcbMxNbaxENNgCLQ9ID4sli6RdEG73KZ51uQ3kplkhoiRiqv0ePsx%2FkFmTZ1p9X8o73JrPNX9DC5fD0LLiMGJzX6uee36%2FOjoOuV2njoFhIGo2S7G1d%2F7uNszF2OJoF1gRMtgkRrHfsJfUpj%2ByFQES06SFzg%2B7Yfb6M%2BUCM18ciGN1azpabGat6fyWL%2FpmLNO7Gv6MnQXKTFdGXKaZA9VzeyPCHcP4kIf2v%2FYzXUXTGgFO5mLZwHXx%2FrIre3RR0yaTTyuTYPK8x%2F0rn9xWCzEkDoQhW7mtoOrVPsMQ83bSLafwxYa9eSIdYcxO%2FgMwqkHB7XLTOnc07%2BuX2ojuVMALVOCoqfuFm%2FdDTpZPfWYLC3LSOoWf9afJz37TdYsNYTCzvOa%2FBjqkAZNsjUXACBj%2BCtn6fm%2FQb9WgE4G3tnay8RITzVUpP4RUL8PPobICNh5mXudrpem%2FAEcNcDW9EWKRphngXUFJGBayGxNgmzn4YWlP%2FFZlu83MvITcEpTFIAIyyIPLVrs70R2fJV1bC3RLIa2K88k3vPC0IURvCwXQIN3CWYOX3C1rAuD%2FOG025%2BXgXX0pNBMGkYafZxotdTJtS9wU%2F2MepDsQVA%2BL&X-Amz-Signature=e27c286638186121283c061433dca1e2db5c3841591962f95eec9f078551a914&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNRX44F7%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDR0NCf2TBM%2FOxdoP9T8PEET3uBE2U%2Fmji%2Fn5MM86LQFwIhAJUmSidNs4IYCfU9gJp11hlPF3YWv4sU%2F2ZOLxxINAvBKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBfz8%2Buhn7ny7eGxgq3APmi89dEFkIby91VcVJwVkwABBtSKd5dkS1enOp%2Flfp%2FxuJGVFSy9tmNwJesWZyyo%2BKE%2FktOnR07oo6RnwttaHt6pRBdo8Ijj%2B3h52HOVG%2FaLizUIUadEAPhCbWKZ6qsyWyf4MrRo5rJ6cBePOHsCBR%2FXAsLhYlD7YdZfwghwCSYsy8Ny6OF9MzG0100cJZtMZws%2FmRjqx5EmP%2Bk8l75QNoqjSqbIm9KxZmg2Jn6n3D96%2B%2B16Ad4fAsQrf4fkUcbMxNbaxENNgCLQ9ID4sli6RdEG73KZ51uQ3kplkhoiRiqv0ePsx%2FkFmTZ1p9X8o73JrPNX9DC5fD0LLiMGJzX6uee36%2FOjoOuV2njoFhIGo2S7G1d%2F7uNszF2OJoF1gRMtgkRrHfsJfUpj%2ByFQES06SFzg%2B7Yfb6M%2BUCM18ciGN1azpabGat6fyWL%2FpmLNO7Gv6MnQXKTFdGXKaZA9VzeyPCHcP4kIf2v%2FYzXUXTGgFO5mLZwHXx%2FrIre3RR0yaTTyuTYPK8x%2F0rn9xWCzEkDoQhW7mtoOrVPsMQ83bSLafwxYa9eSIdYcxO%2FgMwqkHB7XLTOnc07%2BuX2ojuVMALVOCoqfuFm%2FdDTpZPfWYLC3LSOoWf9afJz37TdYsNYTCzvOa%2FBjqkAZNsjUXACBj%2BCtn6fm%2FQb9WgE4G3tnay8RITzVUpP4RUL8PPobICNh5mXudrpem%2FAEcNcDW9EWKRphngXUFJGBayGxNgmzn4YWlP%2FFZlu83MvITcEpTFIAIyyIPLVrs70R2fJV1bC3RLIa2K88k3vPC0IURvCwXQIN3CWYOX3C1rAuD%2FOG025%2BXgXX0pNBMGkYafZxotdTJtS9wU%2F2MepDsQVA%2BL&X-Amz-Signature=35fa83cd8e79a5320f169be66233a6f69aa7e0319f9fc37029619346e580ff8e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNRX44F7%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDR0NCf2TBM%2FOxdoP9T8PEET3uBE2U%2Fmji%2Fn5MM86LQFwIhAJUmSidNs4IYCfU9gJp11hlPF3YWv4sU%2F2ZOLxxINAvBKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBfz8%2Buhn7ny7eGxgq3APmi89dEFkIby91VcVJwVkwABBtSKd5dkS1enOp%2Flfp%2FxuJGVFSy9tmNwJesWZyyo%2BKE%2FktOnR07oo6RnwttaHt6pRBdo8Ijj%2B3h52HOVG%2FaLizUIUadEAPhCbWKZ6qsyWyf4MrRo5rJ6cBePOHsCBR%2FXAsLhYlD7YdZfwghwCSYsy8Ny6OF9MzG0100cJZtMZws%2FmRjqx5EmP%2Bk8l75QNoqjSqbIm9KxZmg2Jn6n3D96%2B%2B16Ad4fAsQrf4fkUcbMxNbaxENNgCLQ9ID4sli6RdEG73KZ51uQ3kplkhoiRiqv0ePsx%2FkFmTZ1p9X8o73JrPNX9DC5fD0LLiMGJzX6uee36%2FOjoOuV2njoFhIGo2S7G1d%2F7uNszF2OJoF1gRMtgkRrHfsJfUpj%2ByFQES06SFzg%2B7Yfb6M%2BUCM18ciGN1azpabGat6fyWL%2FpmLNO7Gv6MnQXKTFdGXKaZA9VzeyPCHcP4kIf2v%2FYzXUXTGgFO5mLZwHXx%2FrIre3RR0yaTTyuTYPK8x%2F0rn9xWCzEkDoQhW7mtoOrVPsMQ83bSLafwxYa9eSIdYcxO%2FgMwqkHB7XLTOnc07%2BuX2ojuVMALVOCoqfuFm%2FdDTpZPfWYLC3LSOoWf9afJz37TdYsNYTCzvOa%2FBjqkAZNsjUXACBj%2BCtn6fm%2FQb9WgE4G3tnay8RITzVUpP4RUL8PPobICNh5mXudrpem%2FAEcNcDW9EWKRphngXUFJGBayGxNgmzn4YWlP%2FFZlu83MvITcEpTFIAIyyIPLVrs70R2fJV1bC3RLIa2K88k3vPC0IURvCwXQIN3CWYOX3C1rAuD%2FOG025%2BXgXX0pNBMGkYafZxotdTJtS9wU%2F2MepDsQVA%2BL&X-Amz-Signature=8b3372b901f42658e74ebbe8fd258acd6609efd754662f0f53fde94e8d135b30&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
