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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V772FI6U%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDlFygATxuw7fyfERkcvfNbbfiDhcdz5hmXpF3hQYj45QIgEyNasMU506adRVQUCTOHVNFv3tyY3%2BeTeCBs1W0p%2F3EqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOmTRPFHEZ%2BKGqrZBSrcAx5HG8gSBcLCtOVe6Sqwranc0RXL8o7TsRFA0aOmlWEGeLY27nsCU%2B9HL7m22p9%2BYJH8kCBP2YXD8zARfAdqK2YaT5AqiXqBqHtJnEuYgs8U%2FnL8AN%2Be7qa3zRoDE4bxx5HhY5nJQNjpHInYw3COTjmw2AOoytlX6BTCPDa3PnIWkhv%2BDDA9IHElKeV%2B9nRCnd2VgkHhtDVWlunY8JLTqzO6dwz6aE5eK7fQnIW1XtgX5neS1nMINyAJpI%2F1kOZuFxheinT%2F3lqSMNAfkndyuCBb9KjIrT%2Fs%2BGhbYgU5RffTwA38k3gUhv4N9WSGKXGHUJomvn%2FOZcT02Hp%2FXOAhvofunbQ6Ime%2BHQb54I%2B%2BWV3wvhzjMZ62NxqbhRAX7MHyYiN2xc50nsU1tV%2FcYtLvJRjLOeKYOUAYXEqUquL4xNQQS8Mtg%2FCIgYhrH4%2FeNdpPd4pqHf0Xt1NZnGf7dfEogdj3NNyKA863A%2FOjplZ6NcyDMN%2Bk1L1hGRr9FweI5b7OnFaom5rjV87r9I0zRXmvTFJkUayh99hBTN1o4dLV3NFpte1e%2FE3IY93JHkVvkk8M2pMcxFr2AKHzBSVyQhsgFIVgePryqk%2FNzTIT%2FPUo%2B1V1xOKluG8TUyCIyJCiMIa10cQGOqUB0zgXE2hCoe7IOm9S4hauSDXI4aLS9fJ1MHKheYGWE4hwKGUE%2BgtcbNWLgExybN78jVylczPfqfe1UtUnl7ikWD6KrZJrN7QqHDL1Yetjyrt5dijHldN360wWBLhZ0rY2kZepYgLiQHcX%2FhIZ5LNjQOg%2FCcPOs1FvxGeFj%2FswwUPl3wqtPNz8DXkqXVqk%2B72YhG2Le5Ung2BHtlWtly7Duxlfy7xy&X-Amz-Signature=14a1c437b320e3c6f45919c4c8b01f58524a519b87879a21d1c34d3824fb4292&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V772FI6U%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDlFygATxuw7fyfERkcvfNbbfiDhcdz5hmXpF3hQYj45QIgEyNasMU506adRVQUCTOHVNFv3tyY3%2BeTeCBs1W0p%2F3EqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOmTRPFHEZ%2BKGqrZBSrcAx5HG8gSBcLCtOVe6Sqwranc0RXL8o7TsRFA0aOmlWEGeLY27nsCU%2B9HL7m22p9%2BYJH8kCBP2YXD8zARfAdqK2YaT5AqiXqBqHtJnEuYgs8U%2FnL8AN%2Be7qa3zRoDE4bxx5HhY5nJQNjpHInYw3COTjmw2AOoytlX6BTCPDa3PnIWkhv%2BDDA9IHElKeV%2B9nRCnd2VgkHhtDVWlunY8JLTqzO6dwz6aE5eK7fQnIW1XtgX5neS1nMINyAJpI%2F1kOZuFxheinT%2F3lqSMNAfkndyuCBb9KjIrT%2Fs%2BGhbYgU5RffTwA38k3gUhv4N9WSGKXGHUJomvn%2FOZcT02Hp%2FXOAhvofunbQ6Ime%2BHQb54I%2B%2BWV3wvhzjMZ62NxqbhRAX7MHyYiN2xc50nsU1tV%2FcYtLvJRjLOeKYOUAYXEqUquL4xNQQS8Mtg%2FCIgYhrH4%2FeNdpPd4pqHf0Xt1NZnGf7dfEogdj3NNyKA863A%2FOjplZ6NcyDMN%2Bk1L1hGRr9FweI5b7OnFaom5rjV87r9I0zRXmvTFJkUayh99hBTN1o4dLV3NFpte1e%2FE3IY93JHkVvkk8M2pMcxFr2AKHzBSVyQhsgFIVgePryqk%2FNzTIT%2FPUo%2B1V1xOKluG8TUyCIyJCiMIa10cQGOqUB0zgXE2hCoe7IOm9S4hauSDXI4aLS9fJ1MHKheYGWE4hwKGUE%2BgtcbNWLgExybN78jVylczPfqfe1UtUnl7ikWD6KrZJrN7QqHDL1Yetjyrt5dijHldN360wWBLhZ0rY2kZepYgLiQHcX%2FhIZ5LNjQOg%2FCcPOs1FvxGeFj%2FswwUPl3wqtPNz8DXkqXVqk%2B72YhG2Le5Ung2BHtlWtly7Duxlfy7xy&X-Amz-Signature=01bde2493d3b8c0a11603cbeb7503fb9ae907cb9160b0538fce0f7057a2493a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V772FI6U%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDlFygATxuw7fyfERkcvfNbbfiDhcdz5hmXpF3hQYj45QIgEyNasMU506adRVQUCTOHVNFv3tyY3%2BeTeCBs1W0p%2F3EqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOmTRPFHEZ%2BKGqrZBSrcAx5HG8gSBcLCtOVe6Sqwranc0RXL8o7TsRFA0aOmlWEGeLY27nsCU%2B9HL7m22p9%2BYJH8kCBP2YXD8zARfAdqK2YaT5AqiXqBqHtJnEuYgs8U%2FnL8AN%2Be7qa3zRoDE4bxx5HhY5nJQNjpHInYw3COTjmw2AOoytlX6BTCPDa3PnIWkhv%2BDDA9IHElKeV%2B9nRCnd2VgkHhtDVWlunY8JLTqzO6dwz6aE5eK7fQnIW1XtgX5neS1nMINyAJpI%2F1kOZuFxheinT%2F3lqSMNAfkndyuCBb9KjIrT%2Fs%2BGhbYgU5RffTwA38k3gUhv4N9WSGKXGHUJomvn%2FOZcT02Hp%2FXOAhvofunbQ6Ime%2BHQb54I%2B%2BWV3wvhzjMZ62NxqbhRAX7MHyYiN2xc50nsU1tV%2FcYtLvJRjLOeKYOUAYXEqUquL4xNQQS8Mtg%2FCIgYhrH4%2FeNdpPd4pqHf0Xt1NZnGf7dfEogdj3NNyKA863A%2FOjplZ6NcyDMN%2Bk1L1hGRr9FweI5b7OnFaom5rjV87r9I0zRXmvTFJkUayh99hBTN1o4dLV3NFpte1e%2FE3IY93JHkVvkk8M2pMcxFr2AKHzBSVyQhsgFIVgePryqk%2FNzTIT%2FPUo%2B1V1xOKluG8TUyCIyJCiMIa10cQGOqUB0zgXE2hCoe7IOm9S4hauSDXI4aLS9fJ1MHKheYGWE4hwKGUE%2BgtcbNWLgExybN78jVylczPfqfe1UtUnl7ikWD6KrZJrN7QqHDL1Yetjyrt5dijHldN360wWBLhZ0rY2kZepYgLiQHcX%2FhIZ5LNjQOg%2FCcPOs1FvxGeFj%2FswwUPl3wqtPNz8DXkqXVqk%2B72YhG2Le5Ung2BHtlWtly7Duxlfy7xy&X-Amz-Signature=42ec8a083bbbad1ae9cde920d774d520e392e4343894dc86db779687f278026a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
