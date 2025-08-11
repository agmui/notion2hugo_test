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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BYHDCWY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZMJ4%2Bjtbvf8iA3srdhO8p8zSmNTdv9xo6RiGjVJeKZgIhANjhWBJY73CcKhLRpRwRRzFZlOkHR7cgWM5M1wDc7dNWKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzgT681yPVahT63%2FZ4q3AMcQ5%2BQX5HJJUve8cj8sMgRA0mcGeQD5Af5vDzFFtLigOp%2FM493BRu6R5cJa%2BvI6ryreTg1uXCRp0wRy%2BJe4ZIsMP4%2FqguSyTc1FyDYkC1PIEWOwmybbZI6hrjtKrAjxeLgWoQQOc3WRI0eZmw5Q7Dlsk0hORLn8dTY68O5hWEBIpGdLQuas%2BVKYP0XwUP3%2FZA6Ah6B083SMQbjoVhuJA0R1J4DshNg%2BpvH9EP6u3ibK67CedS30oXiPh4VAV3azFz8cX7eUxjGdVo%2F7289RdT5JYTkRafUiKe3A3zQXgavQ%2B0J0xfvaizwzBNpBQXdYFIuSJWOVeadk8KRQhnjYu2VSRFU2MG9qUNiVg7DXWsywXx6QKydvrTFw6wDQOtysMEG1wgchmUagmzL1cdGnHf2hRoE4jcEST78rxlo4XayUjZFZ0G8agRMAMqud7nOE70QbLvxHghI1hXcs4IYgJad%2Bzco7n8CjN9zt96UzSqvJyNBp%2F4oLtYMa7QGUILLPp3YEhWsrx59B6vTFqyw6%2B%2FzNTFjBGPY%2F7J22NEdJ6RDRPovzDehg4hXdWrRZSIZ%2FOUYW%2BtzLkeQNZ6UTTQhHDxXuxALZanSlHethflKVu2CMaKFo7WUMudR5I7IfDDw1OTEBjqkAcYOeM2ks9bnT6E9rDfakdfmJky54Vd18Vw7eALLahzNJ%2FraqQWnYWUmvHXIZRZQBYw3dOpcCOo5OYL8Q%2FdvktbMPHCCOTGWiS4lyLH0SVkox061bja55xUrUnOm%2B9gyUrAykgRsxhB%2FJ7ocZo%2BRdfv%2BFphWKhfDSqsavS3gOhtdB4%2Fe6SfuZvZ9OoFTDkHLsRYR7qjhY9pXqllkXULUcHTaLVff&X-Amz-Signature=f3597c7b9df3bd51ba76f28c00f5d2726198882134d454c9ee56c36edc47c882&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BYHDCWY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZMJ4%2Bjtbvf8iA3srdhO8p8zSmNTdv9xo6RiGjVJeKZgIhANjhWBJY73CcKhLRpRwRRzFZlOkHR7cgWM5M1wDc7dNWKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzgT681yPVahT63%2FZ4q3AMcQ5%2BQX5HJJUve8cj8sMgRA0mcGeQD5Af5vDzFFtLigOp%2FM493BRu6R5cJa%2BvI6ryreTg1uXCRp0wRy%2BJe4ZIsMP4%2FqguSyTc1FyDYkC1PIEWOwmybbZI6hrjtKrAjxeLgWoQQOc3WRI0eZmw5Q7Dlsk0hORLn8dTY68O5hWEBIpGdLQuas%2BVKYP0XwUP3%2FZA6Ah6B083SMQbjoVhuJA0R1J4DshNg%2BpvH9EP6u3ibK67CedS30oXiPh4VAV3azFz8cX7eUxjGdVo%2F7289RdT5JYTkRafUiKe3A3zQXgavQ%2B0J0xfvaizwzBNpBQXdYFIuSJWOVeadk8KRQhnjYu2VSRFU2MG9qUNiVg7DXWsywXx6QKydvrTFw6wDQOtysMEG1wgchmUagmzL1cdGnHf2hRoE4jcEST78rxlo4XayUjZFZ0G8agRMAMqud7nOE70QbLvxHghI1hXcs4IYgJad%2Bzco7n8CjN9zt96UzSqvJyNBp%2F4oLtYMa7QGUILLPp3YEhWsrx59B6vTFqyw6%2B%2FzNTFjBGPY%2F7J22NEdJ6RDRPovzDehg4hXdWrRZSIZ%2FOUYW%2BtzLkeQNZ6UTTQhHDxXuxALZanSlHethflKVu2CMaKFo7WUMudR5I7IfDDw1OTEBjqkAcYOeM2ks9bnT6E9rDfakdfmJky54Vd18Vw7eALLahzNJ%2FraqQWnYWUmvHXIZRZQBYw3dOpcCOo5OYL8Q%2FdvktbMPHCCOTGWiS4lyLH0SVkox061bja55xUrUnOm%2B9gyUrAykgRsxhB%2FJ7ocZo%2BRdfv%2BFphWKhfDSqsavS3gOhtdB4%2Fe6SfuZvZ9OoFTDkHLsRYR7qjhY9pXqllkXULUcHTaLVff&X-Amz-Signature=becff94b0378a189e264e7aa226a0fc306ed0c6ab4ea304fcd152b142c827837&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BYHDCWY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZMJ4%2Bjtbvf8iA3srdhO8p8zSmNTdv9xo6RiGjVJeKZgIhANjhWBJY73CcKhLRpRwRRzFZlOkHR7cgWM5M1wDc7dNWKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzgT681yPVahT63%2FZ4q3AMcQ5%2BQX5HJJUve8cj8sMgRA0mcGeQD5Af5vDzFFtLigOp%2FM493BRu6R5cJa%2BvI6ryreTg1uXCRp0wRy%2BJe4ZIsMP4%2FqguSyTc1FyDYkC1PIEWOwmybbZI6hrjtKrAjxeLgWoQQOc3WRI0eZmw5Q7Dlsk0hORLn8dTY68O5hWEBIpGdLQuas%2BVKYP0XwUP3%2FZA6Ah6B083SMQbjoVhuJA0R1J4DshNg%2BpvH9EP6u3ibK67CedS30oXiPh4VAV3azFz8cX7eUxjGdVo%2F7289RdT5JYTkRafUiKe3A3zQXgavQ%2B0J0xfvaizwzBNpBQXdYFIuSJWOVeadk8KRQhnjYu2VSRFU2MG9qUNiVg7DXWsywXx6QKydvrTFw6wDQOtysMEG1wgchmUagmzL1cdGnHf2hRoE4jcEST78rxlo4XayUjZFZ0G8agRMAMqud7nOE70QbLvxHghI1hXcs4IYgJad%2Bzco7n8CjN9zt96UzSqvJyNBp%2F4oLtYMa7QGUILLPp3YEhWsrx59B6vTFqyw6%2B%2FzNTFjBGPY%2F7J22NEdJ6RDRPovzDehg4hXdWrRZSIZ%2FOUYW%2BtzLkeQNZ6UTTQhHDxXuxALZanSlHethflKVu2CMaKFo7WUMudR5I7IfDDw1OTEBjqkAcYOeM2ks9bnT6E9rDfakdfmJky54Vd18Vw7eALLahzNJ%2FraqQWnYWUmvHXIZRZQBYw3dOpcCOo5OYL8Q%2FdvktbMPHCCOTGWiS4lyLH0SVkox061bja55xUrUnOm%2B9gyUrAykgRsxhB%2FJ7ocZo%2BRdfv%2BFphWKhfDSqsavS3gOhtdB4%2Fe6SfuZvZ9OoFTDkHLsRYR7qjhY9pXqllkXULUcHTaLVff&X-Amz-Signature=d918a3b5805bc0d026414eda718055bde00bc2263878f3f3f3a38b57351e5dc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
