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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PAC7J6H%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIHgz%2FFhwsLmGmRdAn6XE%2BCXOdiG%2FCkmwAgd5f6RkOqf4AiAjoHlfO0pVZZ7qZQS2b%2BwUvJlD4hyaHMyKFOVYcnO8yiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoU%2FwUkxyopsoYrtpKtwDjHscIRne3vd%2FENO8WB%2F%2BaAhhjaxOTfCjaX%2Bwt616nTkKNKGI8rdKOnV2PSzuSVfjeyHrrMYyngwEiEyvaMZ72QUKfGtvWprafjfafCcXLvdJhR5%2BS%2FZ6xUAADqhQszNONcPQ45JVbmyGain1RlduxI5lJpcZp3Sd69%2B%2B8NsRAChbM6VEMXKY997Ee1i4ToEChuoAJrfIlMcTzX5NARFyZcacQlDyg8wuuxbZhM0SJ1zGwhfLkdGHv7r%2F79e10DF8yncpV3Wa%2Bt%2Fw%2BG3e2OaYsTwJvRIC4g0LnFO0fwRRISsPLn0a%2Fqo8tGnCbjiHAtPZBJKAMyjuGfYUL28sK9df%2FeRGrEhfOpiXFQdgesUVp6DkvVAIqvNxiuWLbo9%2FYZMZEV2ubW2Ad9745DfMwS0r64ZTnB%2FySRabZBZv9QIvXqZEAA5A%2ByPyJEUyAyJiiE7Tff76j0lIo0pIF%2B6Uw8m9zIkPCw06rcXSkr%2FeObfGdU3NCKDaVvvN8I0dINUpZJx%2FWw%2Fe5%2B2PkGw3iQSYDvClN92V9gNH1663PcVfdO6hsueAf86lBoQdeHHrep4KBSmu4CD38%2BRkfSb4Jx0jZjuh0Ic8xrYSs4X%2BT8VeOhuuzgYxE5%2BfjMDsh0iNBqEwm%2BGdwAY6pgEyCjy94srsytKn7lC%2Flr%2FgNrmDUZ5OFI2J6RMQGxp7GuwrLkHFkPDawf261hJ5f5OlBo0QFowY3sRNGkaeZ2bqxefAdq0ZsnG4Eqn4VaSRzS9PkIxOSm1SSM3jTFbte%2BlVdYuUu%2BEEdoEj4xS2GHrPZMRsrAX3LbWy0b3FCPi6xWgA%2BomFM1Vv%2Ft6I24fby%2BK5lJbZZ9xjG8Bv8kRxIcL%2FvcE5zKTF&X-Amz-Signature=8da16984cacc3736a212a7c4962d3821abb4bdeb33c7f77c722cec911665e2f0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PAC7J6H%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIHgz%2FFhwsLmGmRdAn6XE%2BCXOdiG%2FCkmwAgd5f6RkOqf4AiAjoHlfO0pVZZ7qZQS2b%2BwUvJlD4hyaHMyKFOVYcnO8yiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoU%2FwUkxyopsoYrtpKtwDjHscIRne3vd%2FENO8WB%2F%2BaAhhjaxOTfCjaX%2Bwt616nTkKNKGI8rdKOnV2PSzuSVfjeyHrrMYyngwEiEyvaMZ72QUKfGtvWprafjfafCcXLvdJhR5%2BS%2FZ6xUAADqhQszNONcPQ45JVbmyGain1RlduxI5lJpcZp3Sd69%2B%2B8NsRAChbM6VEMXKY997Ee1i4ToEChuoAJrfIlMcTzX5NARFyZcacQlDyg8wuuxbZhM0SJ1zGwhfLkdGHv7r%2F79e10DF8yncpV3Wa%2Bt%2Fw%2BG3e2OaYsTwJvRIC4g0LnFO0fwRRISsPLn0a%2Fqo8tGnCbjiHAtPZBJKAMyjuGfYUL28sK9df%2FeRGrEhfOpiXFQdgesUVp6DkvVAIqvNxiuWLbo9%2FYZMZEV2ubW2Ad9745DfMwS0r64ZTnB%2FySRabZBZv9QIvXqZEAA5A%2ByPyJEUyAyJiiE7Tff76j0lIo0pIF%2B6Uw8m9zIkPCw06rcXSkr%2FeObfGdU3NCKDaVvvN8I0dINUpZJx%2FWw%2Fe5%2B2PkGw3iQSYDvClN92V9gNH1663PcVfdO6hsueAf86lBoQdeHHrep4KBSmu4CD38%2BRkfSb4Jx0jZjuh0Ic8xrYSs4X%2BT8VeOhuuzgYxE5%2BfjMDsh0iNBqEwm%2BGdwAY6pgEyCjy94srsytKn7lC%2Flr%2FgNrmDUZ5OFI2J6RMQGxp7GuwrLkHFkPDawf261hJ5f5OlBo0QFowY3sRNGkaeZ2bqxefAdq0ZsnG4Eqn4VaSRzS9PkIxOSm1SSM3jTFbte%2BlVdYuUu%2BEEdoEj4xS2GHrPZMRsrAX3LbWy0b3FCPi6xWgA%2BomFM1Vv%2Ft6I24fby%2BK5lJbZZ9xjG8Bv8kRxIcL%2FvcE5zKTF&X-Amz-Signature=66bd623ca54e971ab7e2057ce0064605d31888b3b34613b6ad7db796e1c721f3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PAC7J6H%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIHgz%2FFhwsLmGmRdAn6XE%2BCXOdiG%2FCkmwAgd5f6RkOqf4AiAjoHlfO0pVZZ7qZQS2b%2BwUvJlD4hyaHMyKFOVYcnO8yiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoU%2FwUkxyopsoYrtpKtwDjHscIRne3vd%2FENO8WB%2F%2BaAhhjaxOTfCjaX%2Bwt616nTkKNKGI8rdKOnV2PSzuSVfjeyHrrMYyngwEiEyvaMZ72QUKfGtvWprafjfafCcXLvdJhR5%2BS%2FZ6xUAADqhQszNONcPQ45JVbmyGain1RlduxI5lJpcZp3Sd69%2B%2B8NsRAChbM6VEMXKY997Ee1i4ToEChuoAJrfIlMcTzX5NARFyZcacQlDyg8wuuxbZhM0SJ1zGwhfLkdGHv7r%2F79e10DF8yncpV3Wa%2Bt%2Fw%2BG3e2OaYsTwJvRIC4g0LnFO0fwRRISsPLn0a%2Fqo8tGnCbjiHAtPZBJKAMyjuGfYUL28sK9df%2FeRGrEhfOpiXFQdgesUVp6DkvVAIqvNxiuWLbo9%2FYZMZEV2ubW2Ad9745DfMwS0r64ZTnB%2FySRabZBZv9QIvXqZEAA5A%2ByPyJEUyAyJiiE7Tff76j0lIo0pIF%2B6Uw8m9zIkPCw06rcXSkr%2FeObfGdU3NCKDaVvvN8I0dINUpZJx%2FWw%2Fe5%2B2PkGw3iQSYDvClN92V9gNH1663PcVfdO6hsueAf86lBoQdeHHrep4KBSmu4CD38%2BRkfSb4Jx0jZjuh0Ic8xrYSs4X%2BT8VeOhuuzgYxE5%2BfjMDsh0iNBqEwm%2BGdwAY6pgEyCjy94srsytKn7lC%2Flr%2FgNrmDUZ5OFI2J6RMQGxp7GuwrLkHFkPDawf261hJ5f5OlBo0QFowY3sRNGkaeZ2bqxefAdq0ZsnG4Eqn4VaSRzS9PkIxOSm1SSM3jTFbte%2BlVdYuUu%2BEEdoEj4xS2GHrPZMRsrAX3LbWy0b3FCPi6xWgA%2BomFM1Vv%2Ft6I24fby%2BK5lJbZZ9xjG8Bv8kRxIcL%2FvcE5zKTF&X-Amz-Signature=7c297588bbd749446058bff69b7fe64479d011548af4374be39b5496e86a7cb4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
