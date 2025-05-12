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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQAHVDLS%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T140939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDCkkyVE%2BRo72W7U4UCxunWLwOPb6H4aTGaeYrM6%2B4AFwIgDuL%2FUZcPKjzE2dlFQoVapuogU3FqJppnzAi%2B7K7KblIqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA9392P57rnjDPgM%2BircA4hobL2CB2oTRw9eRanwIK7c3IovVUOXbjV6QuBBKvFrJXIQqeAxgaoH3Dt6Mxm3RYavENZ%2BwzhuMGkmj17wLLIfUzCm%2FlJkhkqcO6BOusGIsNxR2oi94lZjekTVg73W7YYwKLDfPHhWaG4ARe7vrGJDm0RQkuPGGot5Ak%2B6JMQ1a4tJ5dw01ptRxX34gAqDt9N24PJVvyhSJbzusPn1eMs72OPkGXiLs4iwVu0JXGPMJMqsY8THyj%2FT3kGv2OhFbjv5gSyVkE6LATrkvL8slL7GoS1BYrQpRx7aq25wpjSIRXVSYc4WtF1Wr34Tv9vFHY1Oj2aOoF39%2FJwlrCeM64paP6Vqme%2Bym0Ml0lOXWh0%2BgMz1e%2F1PUbv7xoGXQv83MEjCtGTjZDknVyoSBZBL8IvjD4lCqQXJG8cGaiR86WsQEy3pDPx5QdDHyW5hFr8ON8DY6bOnujE2DvXSD6Vw8VHSLwjWHtDfsW%2Fkzp9RDImaWQBmUJKZ%2BGSEDaCRBur%2F11b5R3SITLyxsI%2BJ8tRGkWlHGFeM6FWSNLzVHMJaYlXum8KyhaPGskTKCMv0IBAz44AqyLRCM5soPXG4EzVPikdm%2F7rXxJ6f7d2gtqOwH9okjU7NK%2B6VxWqWYa%2FEMLTsh8EGOqUBHTBVrQnb%2FxYN1ZXUXgPuEL6YNcUO94UhCheimR7t5pT8eD1EDbntH32%2FUcKMqvgwuzVGGdr5PVq6m%2BJ4ePO7iaFLMUjUz%2F94lY2PaAsuFsH53IvzntFB7oRR7JTlYi1QUd19mDYisPVdosmie%2BttRcN%2BKt4Nbzu7%2Bhlcd8XfkC5TJavjgp4tTY36FgfPxmuGgk108GRYJdW%2B7Evy4uxviFJR3T16&X-Amz-Signature=7dc2dc67013853d0a912d6a4db3c2c9f8480ed9f291f3ab1f600c5d3eea0c4f3&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQAHVDLS%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T140939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDCkkyVE%2BRo72W7U4UCxunWLwOPb6H4aTGaeYrM6%2B4AFwIgDuL%2FUZcPKjzE2dlFQoVapuogU3FqJppnzAi%2B7K7KblIqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA9392P57rnjDPgM%2BircA4hobL2CB2oTRw9eRanwIK7c3IovVUOXbjV6QuBBKvFrJXIQqeAxgaoH3Dt6Mxm3RYavENZ%2BwzhuMGkmj17wLLIfUzCm%2FlJkhkqcO6BOusGIsNxR2oi94lZjekTVg73W7YYwKLDfPHhWaG4ARe7vrGJDm0RQkuPGGot5Ak%2B6JMQ1a4tJ5dw01ptRxX34gAqDt9N24PJVvyhSJbzusPn1eMs72OPkGXiLs4iwVu0JXGPMJMqsY8THyj%2FT3kGv2OhFbjv5gSyVkE6LATrkvL8slL7GoS1BYrQpRx7aq25wpjSIRXVSYc4WtF1Wr34Tv9vFHY1Oj2aOoF39%2FJwlrCeM64paP6Vqme%2Bym0Ml0lOXWh0%2BgMz1e%2F1PUbv7xoGXQv83MEjCtGTjZDknVyoSBZBL8IvjD4lCqQXJG8cGaiR86WsQEy3pDPx5QdDHyW5hFr8ON8DY6bOnujE2DvXSD6Vw8VHSLwjWHtDfsW%2Fkzp9RDImaWQBmUJKZ%2BGSEDaCRBur%2F11b5R3SITLyxsI%2BJ8tRGkWlHGFeM6FWSNLzVHMJaYlXum8KyhaPGskTKCMv0IBAz44AqyLRCM5soPXG4EzVPikdm%2F7rXxJ6f7d2gtqOwH9okjU7NK%2B6VxWqWYa%2FEMLTsh8EGOqUBHTBVrQnb%2FxYN1ZXUXgPuEL6YNcUO94UhCheimR7t5pT8eD1EDbntH32%2FUcKMqvgwuzVGGdr5PVq6m%2BJ4ePO7iaFLMUjUz%2F94lY2PaAsuFsH53IvzntFB7oRR7JTlYi1QUd19mDYisPVdosmie%2BttRcN%2BKt4Nbzu7%2Bhlcd8XfkC5TJavjgp4tTY36FgfPxmuGgk108GRYJdW%2B7Evy4uxviFJR3T16&X-Amz-Signature=ae8ec53d80add04ce29a2f0c5c66ef54a1ecca81a25a7642775821cd237865a0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQAHVDLS%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T140939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDCkkyVE%2BRo72W7U4UCxunWLwOPb6H4aTGaeYrM6%2B4AFwIgDuL%2FUZcPKjzE2dlFQoVapuogU3FqJppnzAi%2B7K7KblIqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA9392P57rnjDPgM%2BircA4hobL2CB2oTRw9eRanwIK7c3IovVUOXbjV6QuBBKvFrJXIQqeAxgaoH3Dt6Mxm3RYavENZ%2BwzhuMGkmj17wLLIfUzCm%2FlJkhkqcO6BOusGIsNxR2oi94lZjekTVg73W7YYwKLDfPHhWaG4ARe7vrGJDm0RQkuPGGot5Ak%2B6JMQ1a4tJ5dw01ptRxX34gAqDt9N24PJVvyhSJbzusPn1eMs72OPkGXiLs4iwVu0JXGPMJMqsY8THyj%2FT3kGv2OhFbjv5gSyVkE6LATrkvL8slL7GoS1BYrQpRx7aq25wpjSIRXVSYc4WtF1Wr34Tv9vFHY1Oj2aOoF39%2FJwlrCeM64paP6Vqme%2Bym0Ml0lOXWh0%2BgMz1e%2F1PUbv7xoGXQv83MEjCtGTjZDknVyoSBZBL8IvjD4lCqQXJG8cGaiR86WsQEy3pDPx5QdDHyW5hFr8ON8DY6bOnujE2DvXSD6Vw8VHSLwjWHtDfsW%2Fkzp9RDImaWQBmUJKZ%2BGSEDaCRBur%2F11b5R3SITLyxsI%2BJ8tRGkWlHGFeM6FWSNLzVHMJaYlXum8KyhaPGskTKCMv0IBAz44AqyLRCM5soPXG4EzVPikdm%2F7rXxJ6f7d2gtqOwH9okjU7NK%2B6VxWqWYa%2FEMLTsh8EGOqUBHTBVrQnb%2FxYN1ZXUXgPuEL6YNcUO94UhCheimR7t5pT8eD1EDbntH32%2FUcKMqvgwuzVGGdr5PVq6m%2BJ4ePO7iaFLMUjUz%2F94lY2PaAsuFsH53IvzntFB7oRR7JTlYi1QUd19mDYisPVdosmie%2BttRcN%2BKt4Nbzu7%2Bhlcd8XfkC5TJavjgp4tTY36FgfPxmuGgk108GRYJdW%2B7Evy4uxviFJR3T16&X-Amz-Signature=92b61f1a676e445c086841e7c8ca9b8b53a0ceb30ee661a9e54f679286178ec3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
