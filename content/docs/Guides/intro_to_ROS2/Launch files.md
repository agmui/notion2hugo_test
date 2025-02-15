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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SQU7RP4%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T140205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCICUu2VHTrD%2FC9Jk6DivHk%2BQ%2FerX30sxYml0EhjEkvbMQAiAEkOxrI6uKIO4x1TDNrprqV%2BtdvGgIJl1lyXKtH6dALyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM6O5xgUbskXxSlDTgKtwD4IpjaTq%2FYIT2R0bYdMdUXlcX4NYLgNB83cSgHA0ZWGpQT%2BjaAnItzP%2FEuJGAczR7drPGXxnPb5v%2FIcAlLkQPZigvHaIE898StzlRxk%2BrKQiZJxUnSP63aO6FQVOQ6ptDSxC1tgNRI8ngyWRLuBBROU0jCqbrqcwAFGBOQqGI4zXkX9EMeIui2Hw%2FoRlCq19QqiHnTcyk724GcMFlikmatET7Tu4f%2Fyp8A9yqkUA64ExaazIZfPuBVuzdcgPuTo%2F2e90Sxac0ChuvKEmtl1LaJ6qFanj%2Fxgr2SdBuNupGOy2El7BBpaGW7qhiG%2BdELdN8%2BJzA2PaCm2a47ROhDpzvNP9%2Be%2BLZBnPgR4G7ITZ2nKdRCeZP2orQvRRdeOcmxE7leaZI9fU5%2FfwS5WsiOSJp6dfWCyVAPfUoGCXOFnMF0fIiurE0lS4%2FISyPN82SIXVwgj4A22ZICQFHtzyMqnybfijB%2FBDLlj2q1ycYS%2BybwFbGvhUxqYsuP%2B%2BMQFp9SC%2FSLpqsCeibuFXUTJ6y%2FxTqa3ooLdHxfNlc7AGTd%2BMA%2F8nL8x%2BA4QIxbfxey%2Fs51veJUGFsztI84DUzIwrDpwrAoXUY%2BxBBAAwUnATGQCrpm9gsA44r36hA9x3%2BrTUw1OzBvQY6pgFqzbJZh0fBr45jM4gjGyHjmwOaVXw7Ltil3SM%2FaXvcxdwiYl7Tml848ofFVlI3XJ%2BuU8QjoUKnevJdpn1qMiQs2D%2BWUGvxSU2h8kbBUbk5KevaK0BZNMm8%2FOyEArRwvVoK4V%2BsqPDJ4w5zGcxNiAEyOAPD4LUt5B0QKnI2drtKpSr58rNr0OIEpZVW8P%2B5XuZV5rvo6Ya%2BqzAHa5%2Frb9UAUq9hhyFl&X-Amz-Signature=08fc895229e75aa90ed4bb8e2563aab57071e98c3de934943112d85f31b151c3&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SQU7RP4%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T140205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCICUu2VHTrD%2FC9Jk6DivHk%2BQ%2FerX30sxYml0EhjEkvbMQAiAEkOxrI6uKIO4x1TDNrprqV%2BtdvGgIJl1lyXKtH6dALyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM6O5xgUbskXxSlDTgKtwD4IpjaTq%2FYIT2R0bYdMdUXlcX4NYLgNB83cSgHA0ZWGpQT%2BjaAnItzP%2FEuJGAczR7drPGXxnPb5v%2FIcAlLkQPZigvHaIE898StzlRxk%2BrKQiZJxUnSP63aO6FQVOQ6ptDSxC1tgNRI8ngyWRLuBBROU0jCqbrqcwAFGBOQqGI4zXkX9EMeIui2Hw%2FoRlCq19QqiHnTcyk724GcMFlikmatET7Tu4f%2Fyp8A9yqkUA64ExaazIZfPuBVuzdcgPuTo%2F2e90Sxac0ChuvKEmtl1LaJ6qFanj%2Fxgr2SdBuNupGOy2El7BBpaGW7qhiG%2BdELdN8%2BJzA2PaCm2a47ROhDpzvNP9%2Be%2BLZBnPgR4G7ITZ2nKdRCeZP2orQvRRdeOcmxE7leaZI9fU5%2FfwS5WsiOSJp6dfWCyVAPfUoGCXOFnMF0fIiurE0lS4%2FISyPN82SIXVwgj4A22ZICQFHtzyMqnybfijB%2FBDLlj2q1ycYS%2BybwFbGvhUxqYsuP%2B%2BMQFp9SC%2FSLpqsCeibuFXUTJ6y%2FxTqa3ooLdHxfNlc7AGTd%2BMA%2F8nL8x%2BA4QIxbfxey%2Fs51veJUGFsztI84DUzIwrDpwrAoXUY%2BxBBAAwUnATGQCrpm9gsA44r36hA9x3%2BrTUw1OzBvQY6pgFqzbJZh0fBr45jM4gjGyHjmwOaVXw7Ltil3SM%2FaXvcxdwiYl7Tml848ofFVlI3XJ%2BuU8QjoUKnevJdpn1qMiQs2D%2BWUGvxSU2h8kbBUbk5KevaK0BZNMm8%2FOyEArRwvVoK4V%2BsqPDJ4w5zGcxNiAEyOAPD4LUt5B0QKnI2drtKpSr58rNr0OIEpZVW8P%2B5XuZV5rvo6Ya%2BqzAHa5%2Frb9UAUq9hhyFl&X-Amz-Signature=b167a70fe27079b8802e132f99fde61a394c393e159fb14632ba31d9ec2d5dfc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SQU7RP4%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T140205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCICUu2VHTrD%2FC9Jk6DivHk%2BQ%2FerX30sxYml0EhjEkvbMQAiAEkOxrI6uKIO4x1TDNrprqV%2BtdvGgIJl1lyXKtH6dALyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM6O5xgUbskXxSlDTgKtwD4IpjaTq%2FYIT2R0bYdMdUXlcX4NYLgNB83cSgHA0ZWGpQT%2BjaAnItzP%2FEuJGAczR7drPGXxnPb5v%2FIcAlLkQPZigvHaIE898StzlRxk%2BrKQiZJxUnSP63aO6FQVOQ6ptDSxC1tgNRI8ngyWRLuBBROU0jCqbrqcwAFGBOQqGI4zXkX9EMeIui2Hw%2FoRlCq19QqiHnTcyk724GcMFlikmatET7Tu4f%2Fyp8A9yqkUA64ExaazIZfPuBVuzdcgPuTo%2F2e90Sxac0ChuvKEmtl1LaJ6qFanj%2Fxgr2SdBuNupGOy2El7BBpaGW7qhiG%2BdELdN8%2BJzA2PaCm2a47ROhDpzvNP9%2Be%2BLZBnPgR4G7ITZ2nKdRCeZP2orQvRRdeOcmxE7leaZI9fU5%2FfwS5WsiOSJp6dfWCyVAPfUoGCXOFnMF0fIiurE0lS4%2FISyPN82SIXVwgj4A22ZICQFHtzyMqnybfijB%2FBDLlj2q1ycYS%2BybwFbGvhUxqYsuP%2B%2BMQFp9SC%2FSLpqsCeibuFXUTJ6y%2FxTqa3ooLdHxfNlc7AGTd%2BMA%2F8nL8x%2BA4QIxbfxey%2Fs51veJUGFsztI84DUzIwrDpwrAoXUY%2BxBBAAwUnATGQCrpm9gsA44r36hA9x3%2BrTUw1OzBvQY6pgFqzbJZh0fBr45jM4gjGyHjmwOaVXw7Ltil3SM%2FaXvcxdwiYl7Tml848ofFVlI3XJ%2BuU8QjoUKnevJdpn1qMiQs2D%2BWUGvxSU2h8kbBUbk5KevaK0BZNMm8%2FOyEArRwvVoK4V%2BsqPDJ4w5zGcxNiAEyOAPD4LUt5B0QKnI2drtKpSr58rNr0OIEpZVW8P%2B5XuZV5rvo6Ya%2BqzAHa5%2Frb9UAUq9hhyFl&X-Amz-Signature=400fcebad100ce9f413d62a56b2898cf81fa2cdb54824e926e2d54fd29f0c23e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
