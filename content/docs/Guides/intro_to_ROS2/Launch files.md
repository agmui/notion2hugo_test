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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y63IR5V%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T090858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrytsG6WBnnDo%2F7ffjrGaXQgBacZhAcjHBW2Alh%2BwmlQIhANSboo6rW1PJzlvTw7HGeY5oZz39LyHBd24VC9knRzX%2BKv8DCHEQABoMNjM3NDIzMTgzODA1IgzyBXfEOnYdPRzEdpkq3ANUr%2FzWTGLLJ2PcgXHKB3XWpIWkaQJ2Zj3F9snf30Iukbvqvf9m2WoTvm1AQlVd1lWrTGpP8aesuplesD%2F2kZi9LSEW2J1ajZoisiMBY8jgmq8Roei3VaHOpcNm9yyv4Uce1AGr%2BxIeNK1mcT399BbicYUYkUllDyJZcX2twrx1x9lQSi8Dhq9fpv24djJUXZaqlMnjwuk9WkJPrLEXO9srqCeRm%2BPuTEBAsDhp6fGI2WjyuO5pqK%2FY9Imkbzvgqi1Fo9Ybz9p1Z6KT4oH3ybqM%2BA9GOGldl7KI2R0nyXLRD383cG%2BOT%2BSyH4utWBv1onfUutLcpxkuZrmO%2F1Pml6GqL29O%2FQ3BcndlKM9gHpoQpsItofy4J7pW9c%2B3oD1dI2UUGicEu5RBdhbSZPhe4M%2BSkeE7BRBoDGJgyS0R9J7xcTKu0acg1%2F8BxDD2s7FzkwbI8uBpoDPWvLq6T6Zv5F5zN2yPe%2BzDfBhN4xgrhcV5sswa9DvcytY6CLK8nny2Kl6jMw1u1OQFx%2BWaIXJJFd0%2BRG8bEeSyFK%2B4xkkdRwvpiHtxBVn%2BecG8B3zskriBIHaAPRzHJ97uIUE%2BJhqpOsabo4kcDAu8l8tuK7TrU6njQ7Pu3iYvJMr%2B5YeiGTCbkojABjqkARQFnuViREgSOpzcnuYmNk%2FiSs6wpna1wX%2FQmtx0M1lQiyP2prbtCfcZ1hywieXY97EdF%2BzO1cQu%2BpMuFEOKZ0LRpKshuYBOLdEuTiBSSnB3Xv0rosynURividPOYAir39o83lGTWOUZFjs074hXAP0F4dykHkG%2FKGffaXISHAUBU4w91w%2FN%2FfJZA9NpHJh4gI44pzPz1XdDUigNcT1Ra6iEAybw&X-Amz-Signature=1a41fcd59bac802b47e87b23bee4e9d66bba5fdf7dca8b93c013480f2afec4b7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y63IR5V%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T090858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrytsG6WBnnDo%2F7ffjrGaXQgBacZhAcjHBW2Alh%2BwmlQIhANSboo6rW1PJzlvTw7HGeY5oZz39LyHBd24VC9knRzX%2BKv8DCHEQABoMNjM3NDIzMTgzODA1IgzyBXfEOnYdPRzEdpkq3ANUr%2FzWTGLLJ2PcgXHKB3XWpIWkaQJ2Zj3F9snf30Iukbvqvf9m2WoTvm1AQlVd1lWrTGpP8aesuplesD%2F2kZi9LSEW2J1ajZoisiMBY8jgmq8Roei3VaHOpcNm9yyv4Uce1AGr%2BxIeNK1mcT399BbicYUYkUllDyJZcX2twrx1x9lQSi8Dhq9fpv24djJUXZaqlMnjwuk9WkJPrLEXO9srqCeRm%2BPuTEBAsDhp6fGI2WjyuO5pqK%2FY9Imkbzvgqi1Fo9Ybz9p1Z6KT4oH3ybqM%2BA9GOGldl7KI2R0nyXLRD383cG%2BOT%2BSyH4utWBv1onfUutLcpxkuZrmO%2F1Pml6GqL29O%2FQ3BcndlKM9gHpoQpsItofy4J7pW9c%2B3oD1dI2UUGicEu5RBdhbSZPhe4M%2BSkeE7BRBoDGJgyS0R9J7xcTKu0acg1%2F8BxDD2s7FzkwbI8uBpoDPWvLq6T6Zv5F5zN2yPe%2BzDfBhN4xgrhcV5sswa9DvcytY6CLK8nny2Kl6jMw1u1OQFx%2BWaIXJJFd0%2BRG8bEeSyFK%2B4xkkdRwvpiHtxBVn%2BecG8B3zskriBIHaAPRzHJ97uIUE%2BJhqpOsabo4kcDAu8l8tuK7TrU6njQ7Pu3iYvJMr%2B5YeiGTCbkojABjqkARQFnuViREgSOpzcnuYmNk%2FiSs6wpna1wX%2FQmtx0M1lQiyP2prbtCfcZ1hywieXY97EdF%2BzO1cQu%2BpMuFEOKZ0LRpKshuYBOLdEuTiBSSnB3Xv0rosynURividPOYAir39o83lGTWOUZFjs074hXAP0F4dykHkG%2FKGffaXISHAUBU4w91w%2FN%2FfJZA9NpHJh4gI44pzPz1XdDUigNcT1Ra6iEAybw&X-Amz-Signature=3bef0b6496891ce6cff48bc5406618d7c79fa88f4a7aff10f3c5338033c31c35&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y63IR5V%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T090858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrytsG6WBnnDo%2F7ffjrGaXQgBacZhAcjHBW2Alh%2BwmlQIhANSboo6rW1PJzlvTw7HGeY5oZz39LyHBd24VC9knRzX%2BKv8DCHEQABoMNjM3NDIzMTgzODA1IgzyBXfEOnYdPRzEdpkq3ANUr%2FzWTGLLJ2PcgXHKB3XWpIWkaQJ2Zj3F9snf30Iukbvqvf9m2WoTvm1AQlVd1lWrTGpP8aesuplesD%2F2kZi9LSEW2J1ajZoisiMBY8jgmq8Roei3VaHOpcNm9yyv4Uce1AGr%2BxIeNK1mcT399BbicYUYkUllDyJZcX2twrx1x9lQSi8Dhq9fpv24djJUXZaqlMnjwuk9WkJPrLEXO9srqCeRm%2BPuTEBAsDhp6fGI2WjyuO5pqK%2FY9Imkbzvgqi1Fo9Ybz9p1Z6KT4oH3ybqM%2BA9GOGldl7KI2R0nyXLRD383cG%2BOT%2BSyH4utWBv1onfUutLcpxkuZrmO%2F1Pml6GqL29O%2FQ3BcndlKM9gHpoQpsItofy4J7pW9c%2B3oD1dI2UUGicEu5RBdhbSZPhe4M%2BSkeE7BRBoDGJgyS0R9J7xcTKu0acg1%2F8BxDD2s7FzkwbI8uBpoDPWvLq6T6Zv5F5zN2yPe%2BzDfBhN4xgrhcV5sswa9DvcytY6CLK8nny2Kl6jMw1u1OQFx%2BWaIXJJFd0%2BRG8bEeSyFK%2B4xkkdRwvpiHtxBVn%2BecG8B3zskriBIHaAPRzHJ97uIUE%2BJhqpOsabo4kcDAu8l8tuK7TrU6njQ7Pu3iYvJMr%2B5YeiGTCbkojABjqkARQFnuViREgSOpzcnuYmNk%2FiSs6wpna1wX%2FQmtx0M1lQiyP2prbtCfcZ1hywieXY97EdF%2BzO1cQu%2BpMuFEOKZ0LRpKshuYBOLdEuTiBSSnB3Xv0rosynURividPOYAir39o83lGTWOUZFjs074hXAP0F4dykHkG%2FKGffaXISHAUBU4w91w%2FN%2FfJZA9NpHJh4gI44pzPz1XdDUigNcT1Ra6iEAybw&X-Amz-Signature=be9b9754af6dfe4525ef54fb2ba53f88c75f17c05228b9e009ff4668e66e2da7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
