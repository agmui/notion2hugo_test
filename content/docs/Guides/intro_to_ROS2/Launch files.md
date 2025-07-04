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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656WIJNYS%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCkYLILci%2F%2BARCypLj7hjH8Ia8l0zpBljxCGKMBRDpcGwIgFcmBWQFyJIS4GIGiYntNMYRN9W%2BrNiYNmRQU01gUyCQq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDMyAh2kP2xoOCZeAYyrcA5OhbQzU77dEZ1r7j9%2FXb6AaORIZRb%2FlMfm0X5UgOe%2Bb7kCUFKBQRNbnfdMLPhlOcQTrwiARSOuPNxgyKJF%2B5bt1kZ4zWXN5tEYriTnYdfCttWzAbHpHBRu9CbAzarYJHzO31Po0FmtFhhX388%2B7ewpxK8N8wMfUDKIbm%2FVW7%2FNuEFwfx%2Bf%2FN4oDY3uFlkCmubO0RMJEuB56WgW1mrk1WLZfZ89ZH8y43zlrf%2FCDK62xkzGqLLIMCvHU9OqvOJq6EE6%2F0TR1A79gLQSaYk%2BrVLAwb%2FM6ZdKmS9ylNdU3aplnlgLniqmVufRJWY8JH3OdYcXa9eP1T4qOR97kMOUN7PKoRbHa19MjKFHYn1gVPusac2uTepZpXrFA9DhloJ3Qv27H1HAkr%2BL7%2FM4ZBEzNQVtlwdVyCVe1GEP4%2BJtRu%2BJNuD0mKbWhlE4byw0Fk8yuP8jlDTzUKKggLOsuG1TzfNoAdypQGviThcTQSI47Fue4LDq3RXsp5Ok19JPUErvGRkUtSRNmQtqkc1RZSRNY38Lipaf6w6saWyirfBnsmBNOEcG1Lo9u7g5LERmuUtilD402pM4GImuwOPyd0PjvNEyyRHV6l2v3xlyeLhHBXhK4AYyGxirDhJ4AokXiML7ooMMGOqUBEfwpx9q3utWaLj3nyC6gACQcbZGI6WrcX%2B88tbTaeu%2FEvEUKdtnFcU5SLNZL38MMTSQka4A9%2B85wBPSM2RhkWQ5yUr6gBQ0HHthBUyvcE9FEGDShCZGZ7eP%2FfE0%2BqGA6wrc8mcJeC8wwwPW7HlYXnbL74Xh1VCmv4LM4lD3sLODofC9K%2BVco7OnUyiKXRVrloIPltl82yV9apsLlAHwey5tr7%2FNQ&X-Amz-Signature=a96512e1b9b491e61d2e9c112a398c5ea06e15e5fe4b86c656077e40eac97edc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656WIJNYS%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCkYLILci%2F%2BARCypLj7hjH8Ia8l0zpBljxCGKMBRDpcGwIgFcmBWQFyJIS4GIGiYntNMYRN9W%2BrNiYNmRQU01gUyCQq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDMyAh2kP2xoOCZeAYyrcA5OhbQzU77dEZ1r7j9%2FXb6AaORIZRb%2FlMfm0X5UgOe%2Bb7kCUFKBQRNbnfdMLPhlOcQTrwiARSOuPNxgyKJF%2B5bt1kZ4zWXN5tEYriTnYdfCttWzAbHpHBRu9CbAzarYJHzO31Po0FmtFhhX388%2B7ewpxK8N8wMfUDKIbm%2FVW7%2FNuEFwfx%2Bf%2FN4oDY3uFlkCmubO0RMJEuB56WgW1mrk1WLZfZ89ZH8y43zlrf%2FCDK62xkzGqLLIMCvHU9OqvOJq6EE6%2F0TR1A79gLQSaYk%2BrVLAwb%2FM6ZdKmS9ylNdU3aplnlgLniqmVufRJWY8JH3OdYcXa9eP1T4qOR97kMOUN7PKoRbHa19MjKFHYn1gVPusac2uTepZpXrFA9DhloJ3Qv27H1HAkr%2BL7%2FM4ZBEzNQVtlwdVyCVe1GEP4%2BJtRu%2BJNuD0mKbWhlE4byw0Fk8yuP8jlDTzUKKggLOsuG1TzfNoAdypQGviThcTQSI47Fue4LDq3RXsp5Ok19JPUErvGRkUtSRNmQtqkc1RZSRNY38Lipaf6w6saWyirfBnsmBNOEcG1Lo9u7g5LERmuUtilD402pM4GImuwOPyd0PjvNEyyRHV6l2v3xlyeLhHBXhK4AYyGxirDhJ4AokXiML7ooMMGOqUBEfwpx9q3utWaLj3nyC6gACQcbZGI6WrcX%2B88tbTaeu%2FEvEUKdtnFcU5SLNZL38MMTSQka4A9%2B85wBPSM2RhkWQ5yUr6gBQ0HHthBUyvcE9FEGDShCZGZ7eP%2FfE0%2BqGA6wrc8mcJeC8wwwPW7HlYXnbL74Xh1VCmv4LM4lD3sLODofC9K%2BVco7OnUyiKXRVrloIPltl82yV9apsLlAHwey5tr7%2FNQ&X-Amz-Signature=4e26c900db330cc7fc762e8eff5172776ae27cd16f26253c621aa4d854b933dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656WIJNYS%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCkYLILci%2F%2BARCypLj7hjH8Ia8l0zpBljxCGKMBRDpcGwIgFcmBWQFyJIS4GIGiYntNMYRN9W%2BrNiYNmRQU01gUyCQq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDMyAh2kP2xoOCZeAYyrcA5OhbQzU77dEZ1r7j9%2FXb6AaORIZRb%2FlMfm0X5UgOe%2Bb7kCUFKBQRNbnfdMLPhlOcQTrwiARSOuPNxgyKJF%2B5bt1kZ4zWXN5tEYriTnYdfCttWzAbHpHBRu9CbAzarYJHzO31Po0FmtFhhX388%2B7ewpxK8N8wMfUDKIbm%2FVW7%2FNuEFwfx%2Bf%2FN4oDY3uFlkCmubO0RMJEuB56WgW1mrk1WLZfZ89ZH8y43zlrf%2FCDK62xkzGqLLIMCvHU9OqvOJq6EE6%2F0TR1A79gLQSaYk%2BrVLAwb%2FM6ZdKmS9ylNdU3aplnlgLniqmVufRJWY8JH3OdYcXa9eP1T4qOR97kMOUN7PKoRbHa19MjKFHYn1gVPusac2uTepZpXrFA9DhloJ3Qv27H1HAkr%2BL7%2FM4ZBEzNQVtlwdVyCVe1GEP4%2BJtRu%2BJNuD0mKbWhlE4byw0Fk8yuP8jlDTzUKKggLOsuG1TzfNoAdypQGviThcTQSI47Fue4LDq3RXsp5Ok19JPUErvGRkUtSRNmQtqkc1RZSRNY38Lipaf6w6saWyirfBnsmBNOEcG1Lo9u7g5LERmuUtilD402pM4GImuwOPyd0PjvNEyyRHV6l2v3xlyeLhHBXhK4AYyGxirDhJ4AokXiML7ooMMGOqUBEfwpx9q3utWaLj3nyC6gACQcbZGI6WrcX%2B88tbTaeu%2FEvEUKdtnFcU5SLNZL38MMTSQka4A9%2B85wBPSM2RhkWQ5yUr6gBQ0HHthBUyvcE9FEGDShCZGZ7eP%2FfE0%2BqGA6wrc8mcJeC8wwwPW7HlYXnbL74Xh1VCmv4LM4lD3sLODofC9K%2BVco7OnUyiKXRVrloIPltl82yV9apsLlAHwey5tr7%2FNQ&X-Amz-Signature=a740bd57a56b995f6fe9e9cf4c1fcbaffc73c0fb1781ecb291601876e6667c85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
