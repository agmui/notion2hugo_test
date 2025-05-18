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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z52E326P%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T200917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPQi3qWkvJKwgCn0an1Yz8OVqPg7BScr4cqEu8d88TKwIgfxbS7O4CTThV%2Boo4of5yZ08KetKRqoETiZ9hF6GY4qIq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDCXxmYBFD50QwUcNZircA%2Bqp0htfS7q9vgoMcsOUor5RvpgIypuWk%2BQVb%2B6Z1PqYEEqawFLdtZxz7oFeBoEOVoagFpgh5ZWrl2wpCzmOIE%2FLIjIro70snFpC9bD4WXKXCadXZys85WPIskX1s%2FOj5KhRMo8NEI4yH%2FeUSXrkwB6UiFCSqDaXVoA%2Fj7fej9yC%2B54ytvthq2dkgyKF7xiK%2FKG%2BKgvr0dLGz%2FLThLDsfy85Psv%2BIdhgTsTD8pwdGLPQ2t4ik5jvMJC7UM04Hh7xf%2Bc0%2B9T9cG8KW9UDtuuA7cYZBNJY%2FvksiNLAN6sGmUrnQYLh%2FeLxNx3lIydurg2R2nUbyiA36UCvYnFvdRiqY04WzNM9%2B0RpXqdHjexOaOd4miZo%2BfXI19Hy5mqE32oUoqiAS2fSKntT5RrZO%2FzhLiHUFtwz04AjLbPRRhp66dzmIfkw0uY9qGiqbvHiYNpiG9vecZC8mL2AnVH9v5Y3VB0WQN6ybnp03lefFQ17W9E1Z4BtBABiV5CgPDxcRewzzrfVZ7lP9euk63RfqX1uXuSGN2hbPRoHKdJ9kiHnpraGY3Gl2z%2FTO94D4%2BUDYlRjVe950z2RUDSjDaYlvNDQMw1KEtjdDrAPizFmHGfO7AtAhsAKIQEe5gqFHKoCMILnqMEGOqUBBNmiboCSXbxHCz%2FeHa7Tyf5oOHZkjUpv2k4MA%2FRcc0pMtFd6SOMV9MshG8EZXlR%2B%2Fg6Yd3eyO8jVcTTuEGYt3oXOGsuokojpzTm7lK2%2BGwIbQ8XvFY9zAPKKkJBbfdP4Bsa%2BpXcRsqyc28zXLxcMbb4Lqqd%2F7sctanjvCBqfF%2BQoNpCvM9GfHxoFjKumM6WOtTUZZARGhAM11rfDQIqZT2ZQD2O2&X-Amz-Signature=f40a7f1dadc404f07c976630bde32b2fad1eb1a437b66915013f76fc8ce6e41b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z52E326P%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T200917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPQi3qWkvJKwgCn0an1Yz8OVqPg7BScr4cqEu8d88TKwIgfxbS7O4CTThV%2Boo4of5yZ08KetKRqoETiZ9hF6GY4qIq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDCXxmYBFD50QwUcNZircA%2Bqp0htfS7q9vgoMcsOUor5RvpgIypuWk%2BQVb%2B6Z1PqYEEqawFLdtZxz7oFeBoEOVoagFpgh5ZWrl2wpCzmOIE%2FLIjIro70snFpC9bD4WXKXCadXZys85WPIskX1s%2FOj5KhRMo8NEI4yH%2FeUSXrkwB6UiFCSqDaXVoA%2Fj7fej9yC%2B54ytvthq2dkgyKF7xiK%2FKG%2BKgvr0dLGz%2FLThLDsfy85Psv%2BIdhgTsTD8pwdGLPQ2t4ik5jvMJC7UM04Hh7xf%2Bc0%2B9T9cG8KW9UDtuuA7cYZBNJY%2FvksiNLAN6sGmUrnQYLh%2FeLxNx3lIydurg2R2nUbyiA36UCvYnFvdRiqY04WzNM9%2B0RpXqdHjexOaOd4miZo%2BfXI19Hy5mqE32oUoqiAS2fSKntT5RrZO%2FzhLiHUFtwz04AjLbPRRhp66dzmIfkw0uY9qGiqbvHiYNpiG9vecZC8mL2AnVH9v5Y3VB0WQN6ybnp03lefFQ17W9E1Z4BtBABiV5CgPDxcRewzzrfVZ7lP9euk63RfqX1uXuSGN2hbPRoHKdJ9kiHnpraGY3Gl2z%2FTO94D4%2BUDYlRjVe950z2RUDSjDaYlvNDQMw1KEtjdDrAPizFmHGfO7AtAhsAKIQEe5gqFHKoCMILnqMEGOqUBBNmiboCSXbxHCz%2FeHa7Tyf5oOHZkjUpv2k4MA%2FRcc0pMtFd6SOMV9MshG8EZXlR%2B%2Fg6Yd3eyO8jVcTTuEGYt3oXOGsuokojpzTm7lK2%2BGwIbQ8XvFY9zAPKKkJBbfdP4Bsa%2BpXcRsqyc28zXLxcMbb4Lqqd%2F7sctanjvCBqfF%2BQoNpCvM9GfHxoFjKumM6WOtTUZZARGhAM11rfDQIqZT2ZQD2O2&X-Amz-Signature=05b1b6bccb69e990ca127639b0ef8119e61ba0419f67076da7c4998f218164ee&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z52E326P%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T200917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPQi3qWkvJKwgCn0an1Yz8OVqPg7BScr4cqEu8d88TKwIgfxbS7O4CTThV%2Boo4of5yZ08KetKRqoETiZ9hF6GY4qIq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDCXxmYBFD50QwUcNZircA%2Bqp0htfS7q9vgoMcsOUor5RvpgIypuWk%2BQVb%2B6Z1PqYEEqawFLdtZxz7oFeBoEOVoagFpgh5ZWrl2wpCzmOIE%2FLIjIro70snFpC9bD4WXKXCadXZys85WPIskX1s%2FOj5KhRMo8NEI4yH%2FeUSXrkwB6UiFCSqDaXVoA%2Fj7fej9yC%2B54ytvthq2dkgyKF7xiK%2FKG%2BKgvr0dLGz%2FLThLDsfy85Psv%2BIdhgTsTD8pwdGLPQ2t4ik5jvMJC7UM04Hh7xf%2Bc0%2B9T9cG8KW9UDtuuA7cYZBNJY%2FvksiNLAN6sGmUrnQYLh%2FeLxNx3lIydurg2R2nUbyiA36UCvYnFvdRiqY04WzNM9%2B0RpXqdHjexOaOd4miZo%2BfXI19Hy5mqE32oUoqiAS2fSKntT5RrZO%2FzhLiHUFtwz04AjLbPRRhp66dzmIfkw0uY9qGiqbvHiYNpiG9vecZC8mL2AnVH9v5Y3VB0WQN6ybnp03lefFQ17W9E1Z4BtBABiV5CgPDxcRewzzrfVZ7lP9euk63RfqX1uXuSGN2hbPRoHKdJ9kiHnpraGY3Gl2z%2FTO94D4%2BUDYlRjVe950z2RUDSjDaYlvNDQMw1KEtjdDrAPizFmHGfO7AtAhsAKIQEe5gqFHKoCMILnqMEGOqUBBNmiboCSXbxHCz%2FeHa7Tyf5oOHZkjUpv2k4MA%2FRcc0pMtFd6SOMV9MshG8EZXlR%2B%2Fg6Yd3eyO8jVcTTuEGYt3oXOGsuokojpzTm7lK2%2BGwIbQ8XvFY9zAPKKkJBbfdP4Bsa%2BpXcRsqyc28zXLxcMbb4Lqqd%2F7sctanjvCBqfF%2BQoNpCvM9GfHxoFjKumM6WOtTUZZARGhAM11rfDQIqZT2ZQD2O2&X-Amz-Signature=b7893b1842c5338ac4a700d22bdbb435d54e23c1c8cd8e1afe66b6f9ffa67c5c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
