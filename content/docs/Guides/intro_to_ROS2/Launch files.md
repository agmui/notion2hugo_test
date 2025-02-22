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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSQP6KTC%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T160747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLpjDlaHs2bR4Q%2Fwh1XNkAZADG%2BYQl%2FeXrJr8iHn8FkAiBdxStGK6QfFucZC9f3UW6IiMO%2B0X%2FW8eQW0W3sqtR%2BRiqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhaK%2B8D4dOZljqulMKtwDm3fBficb6hGrLJZtl8C0gIFXX%2F0LpZZVBAzrvnZRtkip46ud1hP4dPPClN8xpS7tD0WStAOWPzcTT9LSdHxJ%2BkRaoRZeqO1ABxP7rJepCrBg2dKVL2L6ElulVyGsSvudhOm4q9sEhbmhvrnj31n2ZPFgffiwpzWpMFxw4veMlxCUw7opoYK8%2B0N9q3YDcEustO3%2FEmwAORlR6mJIjqDkyxzWuXg6W%2FbD3GVgAQwpXJj%2B1xaDFp1kicKenT5GHNRWirNziFC6RSnq4tWO%2FZhV2lJ7EZwwFfW2vdKspez5T9ASnz3JphASKfuzO60cb%2BJX%2BdVuF8kNC7aSQmhyH5YZ5IbYkBxX%2F8yvMI3HvZcBfgJL21PRwx2Cyc%2FiwGroo2Q75nBKD4PEDrYeoeE1XxCpNhBxm0JP7FXCSFBDN6SDsPi03il4WZW%2BdenNOo0eCNH2DFEUU7IHZj7nrfDT4uVobWrFQwmSSqpvwo6SPoQh9hu%2BkM5ShKMsyVubgZ%2Fr4uPATtf8JjM9g1ljdjKxGiefrpquDoPnciq7NQbUx3WlUhe8P85QC3SjugCzQ4w7K8KrsKWN%2Bh8zJ5w1CaD7ILbhlmhbkyTbramuy5S64Htbhv5iUk0h0dALKwyjSYIwwd3mvQY6pgFouyOYN2d2qz%2Fob6v8WZEd85l7QRUj6pL5T8n6Gp03iqh7NGN5eiQVb%2Buw2oL3Ltr18mj8PCz8amblOsEUjKaJHhV74eTYIHwtOCl9etojz5RZ%2FVrV3Ays0gJ2sxLUygz19MFSS5DnL91vfUYmStbunOhrrCZmTNYH8miXrq0usV7K6%2BDyNwAMqvpkAB%2Bc9DllLsOXI6svIXYA69ZuGelISeWZdukz&X-Amz-Signature=8b4e78160a22d054ead47df0955bd65d17540b2b50cdb4ed1097aa4262a58421&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSQP6KTC%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T160747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLpjDlaHs2bR4Q%2Fwh1XNkAZADG%2BYQl%2FeXrJr8iHn8FkAiBdxStGK6QfFucZC9f3UW6IiMO%2B0X%2FW8eQW0W3sqtR%2BRiqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhaK%2B8D4dOZljqulMKtwDm3fBficb6hGrLJZtl8C0gIFXX%2F0LpZZVBAzrvnZRtkip46ud1hP4dPPClN8xpS7tD0WStAOWPzcTT9LSdHxJ%2BkRaoRZeqO1ABxP7rJepCrBg2dKVL2L6ElulVyGsSvudhOm4q9sEhbmhvrnj31n2ZPFgffiwpzWpMFxw4veMlxCUw7opoYK8%2B0N9q3YDcEustO3%2FEmwAORlR6mJIjqDkyxzWuXg6W%2FbD3GVgAQwpXJj%2B1xaDFp1kicKenT5GHNRWirNziFC6RSnq4tWO%2FZhV2lJ7EZwwFfW2vdKspez5T9ASnz3JphASKfuzO60cb%2BJX%2BdVuF8kNC7aSQmhyH5YZ5IbYkBxX%2F8yvMI3HvZcBfgJL21PRwx2Cyc%2FiwGroo2Q75nBKD4PEDrYeoeE1XxCpNhBxm0JP7FXCSFBDN6SDsPi03il4WZW%2BdenNOo0eCNH2DFEUU7IHZj7nrfDT4uVobWrFQwmSSqpvwo6SPoQh9hu%2BkM5ShKMsyVubgZ%2Fr4uPATtf8JjM9g1ljdjKxGiefrpquDoPnciq7NQbUx3WlUhe8P85QC3SjugCzQ4w7K8KrsKWN%2Bh8zJ5w1CaD7ILbhlmhbkyTbramuy5S64Htbhv5iUk0h0dALKwyjSYIwwd3mvQY6pgFouyOYN2d2qz%2Fob6v8WZEd85l7QRUj6pL5T8n6Gp03iqh7NGN5eiQVb%2Buw2oL3Ltr18mj8PCz8amblOsEUjKaJHhV74eTYIHwtOCl9etojz5RZ%2FVrV3Ays0gJ2sxLUygz19MFSS5DnL91vfUYmStbunOhrrCZmTNYH8miXrq0usV7K6%2BDyNwAMqvpkAB%2Bc9DllLsOXI6svIXYA69ZuGelISeWZdukz&X-Amz-Signature=6f603cdad617a500f79cbbcb6ad741d03e5611d4ed4ccf3d6bbbad70c68097a0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSQP6KTC%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T160747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLpjDlaHs2bR4Q%2Fwh1XNkAZADG%2BYQl%2FeXrJr8iHn8FkAiBdxStGK6QfFucZC9f3UW6IiMO%2B0X%2FW8eQW0W3sqtR%2BRiqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhaK%2B8D4dOZljqulMKtwDm3fBficb6hGrLJZtl8C0gIFXX%2F0LpZZVBAzrvnZRtkip46ud1hP4dPPClN8xpS7tD0WStAOWPzcTT9LSdHxJ%2BkRaoRZeqO1ABxP7rJepCrBg2dKVL2L6ElulVyGsSvudhOm4q9sEhbmhvrnj31n2ZPFgffiwpzWpMFxw4veMlxCUw7opoYK8%2B0N9q3YDcEustO3%2FEmwAORlR6mJIjqDkyxzWuXg6W%2FbD3GVgAQwpXJj%2B1xaDFp1kicKenT5GHNRWirNziFC6RSnq4tWO%2FZhV2lJ7EZwwFfW2vdKspez5T9ASnz3JphASKfuzO60cb%2BJX%2BdVuF8kNC7aSQmhyH5YZ5IbYkBxX%2F8yvMI3HvZcBfgJL21PRwx2Cyc%2FiwGroo2Q75nBKD4PEDrYeoeE1XxCpNhBxm0JP7FXCSFBDN6SDsPi03il4WZW%2BdenNOo0eCNH2DFEUU7IHZj7nrfDT4uVobWrFQwmSSqpvwo6SPoQh9hu%2BkM5ShKMsyVubgZ%2Fr4uPATtf8JjM9g1ljdjKxGiefrpquDoPnciq7NQbUx3WlUhe8P85QC3SjugCzQ4w7K8KrsKWN%2Bh8zJ5w1CaD7ILbhlmhbkyTbramuy5S64Htbhv5iUk0h0dALKwyjSYIwwd3mvQY6pgFouyOYN2d2qz%2Fob6v8WZEd85l7QRUj6pL5T8n6Gp03iqh7NGN5eiQVb%2Buw2oL3Ltr18mj8PCz8amblOsEUjKaJHhV74eTYIHwtOCl9etojz5RZ%2FVrV3Ays0gJ2sxLUygz19MFSS5DnL91vfUYmStbunOhrrCZmTNYH8miXrq0usV7K6%2BDyNwAMqvpkAB%2Bc9DllLsOXI6svIXYA69ZuGelISeWZdukz&X-Amz-Signature=36c00ca7a83726301109692773d0a732d2c008676d523e188061ded52e4ff290&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
