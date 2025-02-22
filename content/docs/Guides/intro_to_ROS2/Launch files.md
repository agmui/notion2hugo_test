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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U5XNSZZ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T031034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBTs0P%2B0MF5e7us5PHezxfzPQkrQP7R3QEW91ncgoJX3AiA9lZ%2Bwokv9tH33uFUf4C%2BcenAuK9m3TrQp%2Bj%2Bx1zM2DSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZM%2BvjoHNrvhjLzhgKtwDjdE3IR5y5K0FyJgW%2B00HPNrmnFDiACjEzNjZ4%2BqBqSxFD1tMRBxpSqBwG3FUgdHU49gZkdwKG%2F3O%2BtF4hgjMlZ%2FkdW5YdMvQlLqhGwJB1t4gD55Py8FKlrH5yztAZ9PfebEDBUmdYwSvnSGbk6%2BJcs0nlJ%2B4PMX3O45WoMgxrW4r%2Bk9gS9clPzAWhBfogVHshURTQ25aGyaKRIu8fLzrD62Q%2FK47qG0WdkAPtZceIcm8nlJRjR0HNmZBqrRTlAcftAhgEfYZm7XPyHUHuUunGpnf4kYowKr1G1t4iX0V7%2BC98BmV0azw%2BpxvuQCLA2xrk5TmVqQGuHuv0uYmqvC%2B6Ot7l5tRTAFKqRhb8qCDX2WOwtFEx3sbGuLaVa4iW8sqbVN%2BdjeOsYtizqqEn%2FZBzuytDilDoHZEarB5XEbkubkA4yedRGVDjHQGZhyILzfvgXBbrqbR4rcB%2Bz%2BNZtaMnzx0kWE2V7Zypu0wRIcCRZV%2FYD%2FlUUeO2ZaUcibhM2TOaKFn3laDmjYHqyPKLK%2F9DmfGzCGk9Ix%2BVGFDfQmiiSCqm%2BGnqeQijeQZevBSv%2BUNLifedmM3ud49rRn93r6evvCuX50EI7vwCLJ5urEW8eOOIInO%2BSbpUZ7%2FxN4wjuzkvQY6pgGtiVxuLMxPnFia3OtXUbMyVE0JX4NGzlK8C5FTnRL9eF%2F%2FcOqAYZuifkyYd%2BrtDJk8HXrBXF09gVjaim0pMOCuSJf5jVUP%2FpUvGRPT%2Fft0phoj1v21Aw0ycYkzRQCPJGhJ2zu7qWYLaoZpOdQP%2BJoEx0CwozpV%2BSsGDr%2BdAx5WXZJj4ocw5mejd5nJNPaTt%2B6Zu%2BVvnqiOjEVYfX5rRzm%2FFS6HdAQ1&X-Amz-Signature=29ea8a2bebe5fa18d6abb636c9de2257f5add573ed137bde7cf829c3547b5b0a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U5XNSZZ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T031034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBTs0P%2B0MF5e7us5PHezxfzPQkrQP7R3QEW91ncgoJX3AiA9lZ%2Bwokv9tH33uFUf4C%2BcenAuK9m3TrQp%2Bj%2Bx1zM2DSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZM%2BvjoHNrvhjLzhgKtwDjdE3IR5y5K0FyJgW%2B00HPNrmnFDiACjEzNjZ4%2BqBqSxFD1tMRBxpSqBwG3FUgdHU49gZkdwKG%2F3O%2BtF4hgjMlZ%2FkdW5YdMvQlLqhGwJB1t4gD55Py8FKlrH5yztAZ9PfebEDBUmdYwSvnSGbk6%2BJcs0nlJ%2B4PMX3O45WoMgxrW4r%2Bk9gS9clPzAWhBfogVHshURTQ25aGyaKRIu8fLzrD62Q%2FK47qG0WdkAPtZceIcm8nlJRjR0HNmZBqrRTlAcftAhgEfYZm7XPyHUHuUunGpnf4kYowKr1G1t4iX0V7%2BC98BmV0azw%2BpxvuQCLA2xrk5TmVqQGuHuv0uYmqvC%2B6Ot7l5tRTAFKqRhb8qCDX2WOwtFEx3sbGuLaVa4iW8sqbVN%2BdjeOsYtizqqEn%2FZBzuytDilDoHZEarB5XEbkubkA4yedRGVDjHQGZhyILzfvgXBbrqbR4rcB%2Bz%2BNZtaMnzx0kWE2V7Zypu0wRIcCRZV%2FYD%2FlUUeO2ZaUcibhM2TOaKFn3laDmjYHqyPKLK%2F9DmfGzCGk9Ix%2BVGFDfQmiiSCqm%2BGnqeQijeQZevBSv%2BUNLifedmM3ud49rRn93r6evvCuX50EI7vwCLJ5urEW8eOOIInO%2BSbpUZ7%2FxN4wjuzkvQY6pgGtiVxuLMxPnFia3OtXUbMyVE0JX4NGzlK8C5FTnRL9eF%2F%2FcOqAYZuifkyYd%2BrtDJk8HXrBXF09gVjaim0pMOCuSJf5jVUP%2FpUvGRPT%2Fft0phoj1v21Aw0ycYkzRQCPJGhJ2zu7qWYLaoZpOdQP%2BJoEx0CwozpV%2BSsGDr%2BdAx5WXZJj4ocw5mejd5nJNPaTt%2B6Zu%2BVvnqiOjEVYfX5rRzm%2FFS6HdAQ1&X-Amz-Signature=e187196db5e6e17d21765a513ed50ccd4f670834abda8ab1e7cbea5933108601&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U5XNSZZ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T031034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBTs0P%2B0MF5e7us5PHezxfzPQkrQP7R3QEW91ncgoJX3AiA9lZ%2Bwokv9tH33uFUf4C%2BcenAuK9m3TrQp%2Bj%2Bx1zM2DSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZM%2BvjoHNrvhjLzhgKtwDjdE3IR5y5K0FyJgW%2B00HPNrmnFDiACjEzNjZ4%2BqBqSxFD1tMRBxpSqBwG3FUgdHU49gZkdwKG%2F3O%2BtF4hgjMlZ%2FkdW5YdMvQlLqhGwJB1t4gD55Py8FKlrH5yztAZ9PfebEDBUmdYwSvnSGbk6%2BJcs0nlJ%2B4PMX3O45WoMgxrW4r%2Bk9gS9clPzAWhBfogVHshURTQ25aGyaKRIu8fLzrD62Q%2FK47qG0WdkAPtZceIcm8nlJRjR0HNmZBqrRTlAcftAhgEfYZm7XPyHUHuUunGpnf4kYowKr1G1t4iX0V7%2BC98BmV0azw%2BpxvuQCLA2xrk5TmVqQGuHuv0uYmqvC%2B6Ot7l5tRTAFKqRhb8qCDX2WOwtFEx3sbGuLaVa4iW8sqbVN%2BdjeOsYtizqqEn%2FZBzuytDilDoHZEarB5XEbkubkA4yedRGVDjHQGZhyILzfvgXBbrqbR4rcB%2Bz%2BNZtaMnzx0kWE2V7Zypu0wRIcCRZV%2FYD%2FlUUeO2ZaUcibhM2TOaKFn3laDmjYHqyPKLK%2F9DmfGzCGk9Ix%2BVGFDfQmiiSCqm%2BGnqeQijeQZevBSv%2BUNLifedmM3ud49rRn93r6evvCuX50EI7vwCLJ5urEW8eOOIInO%2BSbpUZ7%2FxN4wjuzkvQY6pgGtiVxuLMxPnFia3OtXUbMyVE0JX4NGzlK8C5FTnRL9eF%2F%2FcOqAYZuifkyYd%2BrtDJk8HXrBXF09gVjaim0pMOCuSJf5jVUP%2FpUvGRPT%2Fft0phoj1v21Aw0ycYkzRQCPJGhJ2zu7qWYLaoZpOdQP%2BJoEx0CwozpV%2BSsGDr%2BdAx5WXZJj4ocw5mejd5nJNPaTt%2B6Zu%2BVvnqiOjEVYfX5rRzm%2FFS6HdAQ1&X-Amz-Signature=072063c666b7787d098d3c416e918051ab6a97824359f359443bea008fde50e2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
