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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EA4SL3B%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T032950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIECdWnAvtaDcyr6Ii%2Fxjj9gC%2F0KgDOWVq%2Fcq6asZCHjuAiBygxPaB5KX%2Fwo2JY8dBxFgynfxXRIO%2FiNUiT30jKqFhSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTSbgTCcimUpzW5WfKtwDrVzsOsYJD77FCu9wFoAffj2H%2FdLddgoJvQtLUAlSf6%2Br%2F2tMO177IIcUwROth6wR9g2ca9FlypRg%2BsN%2BTyxew1jqBIov16P28fNGQ%2FryKbLt34CqJ%2B7U%2Bn6B0Oc3%2FEVmUW1PMgunMIRldkGwS9sK5l9INzq8NVviWhVrXkjawVPwNl43dI7oZLJugFKiXSGhdfgJm%2F62BNz7xRhkqD1U2JPKUl7Y4ALUvJcRY72q5ccCzOua3E%2BLqmgRg1Wj0Ga7rp3PohZR1VnNt4AAJtQm4pOBDqs1YC%2BwdMV2m6yzscfdeU111ceNrmZYM5kk7JoQSm4LSA7Xw8G%2FV7nharx46HpcsUxxiJ%2BVaxvYD8MLSovh41BOF1j6GJnWcUo45jPDJQtrCWjWtupkQpizaDwYb9RiK1tIXSmw87C3og6prDjd5P7pZL4EBySxlHv93si4P%2BuTESl60GkFrcm%2B8Uy1Pq3JkehleGYLwKfCwwjqFz%2FefRo83yiWdL7WHJbn73BRJCkRbBcSFGpOwdN8X7caFFY7DfktXqleetr5ddbf4rp7qrLvH5Y0eShPF%2BXEGblGeuCGI%2FxOoz5iEWfConWzcssYbeyuPW0hOt8zx9qyhD2OSMtauySVNoB15asw%2BOmivwY6pgETx0mohfdHHAdLRHJMqVFyo6h19qdeb0a7KK8%2BNwLk88ItxJ1M8Gfxupw6S5lMGZrnIgg1y4V8KaHN%2B15K7wMVAEjSIpJsQSSpcaxBcygY%2BdvE6j3zGYwbyyg43ksZD0OXuanDMy%2BQcV2RkqJfzYqS%2F5I2NjKiPvxGKSnzlqttGuKom1A%2B99z9xGB%2BWz5WBfVB08npborMBGVkMdIzi%2Bx9KFFUTD0n&X-Amz-Signature=d61dca8854f8404eac7335a5ca64e569768be48129f917fa01afa97e637b664d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EA4SL3B%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T032950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIECdWnAvtaDcyr6Ii%2Fxjj9gC%2F0KgDOWVq%2Fcq6asZCHjuAiBygxPaB5KX%2Fwo2JY8dBxFgynfxXRIO%2FiNUiT30jKqFhSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTSbgTCcimUpzW5WfKtwDrVzsOsYJD77FCu9wFoAffj2H%2FdLddgoJvQtLUAlSf6%2Br%2F2tMO177IIcUwROth6wR9g2ca9FlypRg%2BsN%2BTyxew1jqBIov16P28fNGQ%2FryKbLt34CqJ%2B7U%2Bn6B0Oc3%2FEVmUW1PMgunMIRldkGwS9sK5l9INzq8NVviWhVrXkjawVPwNl43dI7oZLJugFKiXSGhdfgJm%2F62BNz7xRhkqD1U2JPKUl7Y4ALUvJcRY72q5ccCzOua3E%2BLqmgRg1Wj0Ga7rp3PohZR1VnNt4AAJtQm4pOBDqs1YC%2BwdMV2m6yzscfdeU111ceNrmZYM5kk7JoQSm4LSA7Xw8G%2FV7nharx46HpcsUxxiJ%2BVaxvYD8MLSovh41BOF1j6GJnWcUo45jPDJQtrCWjWtupkQpizaDwYb9RiK1tIXSmw87C3og6prDjd5P7pZL4EBySxlHv93si4P%2BuTESl60GkFrcm%2B8Uy1Pq3JkehleGYLwKfCwwjqFz%2FefRo83yiWdL7WHJbn73BRJCkRbBcSFGpOwdN8X7caFFY7DfktXqleetr5ddbf4rp7qrLvH5Y0eShPF%2BXEGblGeuCGI%2FxOoz5iEWfConWzcssYbeyuPW0hOt8zx9qyhD2OSMtauySVNoB15asw%2BOmivwY6pgETx0mohfdHHAdLRHJMqVFyo6h19qdeb0a7KK8%2BNwLk88ItxJ1M8Gfxupw6S5lMGZrnIgg1y4V8KaHN%2B15K7wMVAEjSIpJsQSSpcaxBcygY%2BdvE6j3zGYwbyyg43ksZD0OXuanDMy%2BQcV2RkqJfzYqS%2F5I2NjKiPvxGKSnzlqttGuKom1A%2B99z9xGB%2BWz5WBfVB08npborMBGVkMdIzi%2Bx9KFFUTD0n&X-Amz-Signature=d5ab18d45ea13069b1a2f74bde76bffd6fe0efe87968c4d2c5ec82f17472de09&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EA4SL3B%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T032950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIECdWnAvtaDcyr6Ii%2Fxjj9gC%2F0KgDOWVq%2Fcq6asZCHjuAiBygxPaB5KX%2Fwo2JY8dBxFgynfxXRIO%2FiNUiT30jKqFhSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTSbgTCcimUpzW5WfKtwDrVzsOsYJD77FCu9wFoAffj2H%2FdLddgoJvQtLUAlSf6%2Br%2F2tMO177IIcUwROth6wR9g2ca9FlypRg%2BsN%2BTyxew1jqBIov16P28fNGQ%2FryKbLt34CqJ%2B7U%2Bn6B0Oc3%2FEVmUW1PMgunMIRldkGwS9sK5l9INzq8NVviWhVrXkjawVPwNl43dI7oZLJugFKiXSGhdfgJm%2F62BNz7xRhkqD1U2JPKUl7Y4ALUvJcRY72q5ccCzOua3E%2BLqmgRg1Wj0Ga7rp3PohZR1VnNt4AAJtQm4pOBDqs1YC%2BwdMV2m6yzscfdeU111ceNrmZYM5kk7JoQSm4LSA7Xw8G%2FV7nharx46HpcsUxxiJ%2BVaxvYD8MLSovh41BOF1j6GJnWcUo45jPDJQtrCWjWtupkQpizaDwYb9RiK1tIXSmw87C3og6prDjd5P7pZL4EBySxlHv93si4P%2BuTESl60GkFrcm%2B8Uy1Pq3JkehleGYLwKfCwwjqFz%2FefRo83yiWdL7WHJbn73BRJCkRbBcSFGpOwdN8X7caFFY7DfktXqleetr5ddbf4rp7qrLvH5Y0eShPF%2BXEGblGeuCGI%2FxOoz5iEWfConWzcssYbeyuPW0hOt8zx9qyhD2OSMtauySVNoB15asw%2BOmivwY6pgETx0mohfdHHAdLRHJMqVFyo6h19qdeb0a7KK8%2BNwLk88ItxJ1M8Gfxupw6S5lMGZrnIgg1y4V8KaHN%2B15K7wMVAEjSIpJsQSSpcaxBcygY%2BdvE6j3zGYwbyyg43ksZD0OXuanDMy%2BQcV2RkqJfzYqS%2F5I2NjKiPvxGKSnzlqttGuKom1A%2B99z9xGB%2BWz5WBfVB08npborMBGVkMdIzi%2Bx9KFFUTD0n&X-Amz-Signature=71e6798c6fb0b483ce2c4d4b9467e3acfaaf362ad33cafd9fb3d1c54d94e81cb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
