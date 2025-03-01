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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE5BYOVY%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T040931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCICZAmTVnHdweuL4TOsmHGIikHeyzVOXSuXmxbIhYKdE6AiEAnQOqxwZ11MVEoMw8b%2B0YoVlfXCUwgLr%2B9j%2FNQHlyidUqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIBG%2BJ6cEWzHJEUbVSrcAypsyzVQJkvDIicVvUOWXBn2D37zVbl05QduM6PXhYPryDkl%2FeXp%2BXxL%2BFj5wRyPQ7nO9mslxdb9m9hpumKF3jnB8jkqXb3ToEC3uycPgaFqeYy5odnBxT1ZhXj2X3ga42GKCdlRGjxyXwkaCsrZFUDjfKg7I%2BG6pPU%2BOvvWbBd%2Fdv6%2BBh0%2F8ofOFtBdnym8ltfObL4%2B4hXSSM8rao%2F5%2B%2BahV%2F0KvoD%2BRXBYQCLPVDSpSbm3IJJpO2W59S%2BoXJNjMYrdzL2e249qi1dAXd2RbdP9bm1Wv5B1Jw9zTb8JivZDGf58zJNVuNC8omW0ylYjZQH2QUZkeGNNpgbIjp978CjtUFvtQQo7hNpjfsv8QXUlurvJMW76zAQrXGHtkwd2gsJr0kjNaQlBoJ679Hwdcl8OSJJZFPFCMuCNk2Ayfa4PqkODnfKTOE36tvAB3yjyjB2tQhuIrsDZ8omSeMRHmAHabUdPiRwVr5cAcwXMztJs8%2Fzgzh2z67POor%2ByXIp6tl3McBbSJFwVW389TnSPOtseK1Ev00xi8A6L%2B%2FLr7ScPhZhBFfSpnZlrJgxOpE2nLGe5bIRawL4HbQU7%2F5ndMuiHMdoffFfnbx%2F6loZtZiZZwAvLqhRDRloHsfFSMLDyib4GOqUBwQ8Apzuk4ysqdq0TUlOOtpEPqFHMRXhEp4Dc7s3eBPvQkD8dmY6Le2o7SOBCqp8iU%2B3Gb%2FFqiUuAMyt1ZASAXEGzJQqIs0PDcrN3xtBmGd%2F%2BTuJslW0v0uBUBVv%2FNKE0dXegZrsqtDfyJaw6K8GH%2BpYQHFYzEycDeQoz7MogvnPXmTISKbboCEfPpS8I3mU0v%2BESFXVwyouYIiRjyvoc0Gt9jfgM&X-Amz-Signature=1e7e3ce4cc93da08db535e65deffbe8babd84468fcb2523d7ccf37f09fb241f0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE5BYOVY%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T040931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCICZAmTVnHdweuL4TOsmHGIikHeyzVOXSuXmxbIhYKdE6AiEAnQOqxwZ11MVEoMw8b%2B0YoVlfXCUwgLr%2B9j%2FNQHlyidUqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIBG%2BJ6cEWzHJEUbVSrcAypsyzVQJkvDIicVvUOWXBn2D37zVbl05QduM6PXhYPryDkl%2FeXp%2BXxL%2BFj5wRyPQ7nO9mslxdb9m9hpumKF3jnB8jkqXb3ToEC3uycPgaFqeYy5odnBxT1ZhXj2X3ga42GKCdlRGjxyXwkaCsrZFUDjfKg7I%2BG6pPU%2BOvvWbBd%2Fdv6%2BBh0%2F8ofOFtBdnym8ltfObL4%2B4hXSSM8rao%2F5%2B%2BahV%2F0KvoD%2BRXBYQCLPVDSpSbm3IJJpO2W59S%2BoXJNjMYrdzL2e249qi1dAXd2RbdP9bm1Wv5B1Jw9zTb8JivZDGf58zJNVuNC8omW0ylYjZQH2QUZkeGNNpgbIjp978CjtUFvtQQo7hNpjfsv8QXUlurvJMW76zAQrXGHtkwd2gsJr0kjNaQlBoJ679Hwdcl8OSJJZFPFCMuCNk2Ayfa4PqkODnfKTOE36tvAB3yjyjB2tQhuIrsDZ8omSeMRHmAHabUdPiRwVr5cAcwXMztJs8%2Fzgzh2z67POor%2ByXIp6tl3McBbSJFwVW389TnSPOtseK1Ev00xi8A6L%2B%2FLr7ScPhZhBFfSpnZlrJgxOpE2nLGe5bIRawL4HbQU7%2F5ndMuiHMdoffFfnbx%2F6loZtZiZZwAvLqhRDRloHsfFSMLDyib4GOqUBwQ8Apzuk4ysqdq0TUlOOtpEPqFHMRXhEp4Dc7s3eBPvQkD8dmY6Le2o7SOBCqp8iU%2B3Gb%2FFqiUuAMyt1ZASAXEGzJQqIs0PDcrN3xtBmGd%2F%2BTuJslW0v0uBUBVv%2FNKE0dXegZrsqtDfyJaw6K8GH%2BpYQHFYzEycDeQoz7MogvnPXmTISKbboCEfPpS8I3mU0v%2BESFXVwyouYIiRjyvoc0Gt9jfgM&X-Amz-Signature=82660783820a32d39a2178a8e6b9f1d33bacbe5bf5e904823e57cd6eca176258&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE5BYOVY%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T040931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCICZAmTVnHdweuL4TOsmHGIikHeyzVOXSuXmxbIhYKdE6AiEAnQOqxwZ11MVEoMw8b%2B0YoVlfXCUwgLr%2B9j%2FNQHlyidUqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIBG%2BJ6cEWzHJEUbVSrcAypsyzVQJkvDIicVvUOWXBn2D37zVbl05QduM6PXhYPryDkl%2FeXp%2BXxL%2BFj5wRyPQ7nO9mslxdb9m9hpumKF3jnB8jkqXb3ToEC3uycPgaFqeYy5odnBxT1ZhXj2X3ga42GKCdlRGjxyXwkaCsrZFUDjfKg7I%2BG6pPU%2BOvvWbBd%2Fdv6%2BBh0%2F8ofOFtBdnym8ltfObL4%2B4hXSSM8rao%2F5%2B%2BahV%2F0KvoD%2BRXBYQCLPVDSpSbm3IJJpO2W59S%2BoXJNjMYrdzL2e249qi1dAXd2RbdP9bm1Wv5B1Jw9zTb8JivZDGf58zJNVuNC8omW0ylYjZQH2QUZkeGNNpgbIjp978CjtUFvtQQo7hNpjfsv8QXUlurvJMW76zAQrXGHtkwd2gsJr0kjNaQlBoJ679Hwdcl8OSJJZFPFCMuCNk2Ayfa4PqkODnfKTOE36tvAB3yjyjB2tQhuIrsDZ8omSeMRHmAHabUdPiRwVr5cAcwXMztJs8%2Fzgzh2z67POor%2ByXIp6tl3McBbSJFwVW389TnSPOtseK1Ev00xi8A6L%2B%2FLr7ScPhZhBFfSpnZlrJgxOpE2nLGe5bIRawL4HbQU7%2F5ndMuiHMdoffFfnbx%2F6loZtZiZZwAvLqhRDRloHsfFSMLDyib4GOqUBwQ8Apzuk4ysqdq0TUlOOtpEPqFHMRXhEp4Dc7s3eBPvQkD8dmY6Le2o7SOBCqp8iU%2B3Gb%2FFqiUuAMyt1ZASAXEGzJQqIs0PDcrN3xtBmGd%2F%2BTuJslW0v0uBUBVv%2FNKE0dXegZrsqtDfyJaw6K8GH%2BpYQHFYzEycDeQoz7MogvnPXmTISKbboCEfPpS8I3mU0v%2BESFXVwyouYIiRjyvoc0Gt9jfgM&X-Amz-Signature=def876e5d7e682f7722c00073c2d9960addc03ede740bb8d92704374d77b5ed7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
