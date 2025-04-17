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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMW6CBIQ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T022120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiw8WS0Ru70tO1pGkX%2F3sku3kHpEWXxJMQr7zZnqSOOgIgcEc3Ds1XVeXIWLI3KZHiMNhJI0iMMOoKxrXVzdcuJFcq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIJq8PWELZCQa%2FRmayrcA4Y8C0FKq%2BL5Rz4SiHjdSLCsUaI%2FZ%2BFJwIPjGU40SYU07sZKNWE2kS9wyN5%2BW4X9FnSPhnocvl63NWl74eDXQ%2FSyR7Ucp4QDHX3LlwwCgiyGofo8lsCo%2BCMPbTky2May9zhFD8rET8hBzOxxVdicDBmz5X4MqGche23kuGACBMJ%2FOuwDzBKu5Qiji0ET2qSIprxrhlAgtv9ZKThr4QAFrOm40uoxZzkwe7XrIFGEQ6lIAYd38f0gJ3BZcpLIuathACPZD7kZeykVEYIAOumcrAu2Ngic4BMaDrnUmzqujGRuLTqCTM3%2FLWJUrAhhb%2BqMKHAqHpVW1uqVFVS6iSrsUSJyZ9T6oLHddMvLEuf9QDEyWNU5Z8lYajt7fHEubRcY5EIqU7SoPSOYq8%2FuHfmnFlP%2F8atjWtBDnCr%2Fxq24W11l%2BbsIvAPNguamNHjUQZs1eQTeKCNWLPzlv4Tdh1GXFMGlBb88Mk%2FObeQp2WSA5B06jz2Dh0XWGkTdkRwFj8Og9LXZzkye%2B2iUtto6nIkCTPrq6A5sjQSnRmtb%2FEcsJv5iVdmgEliTeYHTDMnlLr8MruKNBjATf5x1XQKnl6zkJZiOKV0PIc2N9To07Cbzcm9%2FmyN2Fv9%2B3N9Oad0KMIPGgcAGOqUBom9aNGLgb0eYvrSU46pLGchXJWtYpq%2FLJAGOoHIksmXabkfC6Jmp08t8CXNgIIhlQVh52Pk3jWkFTYtoN68IJptDF0oHr507WCzDmAuPoNVIGy21UmRml4DaN1zFcwS5SZcgqpBh%2BSsq95h2juoG5y37WSWSNy36YH%2BofWwDb2S1pH4fEyGdjtsDX9yY%2BXB2qz1YMxH%2FGH21cDEux%2BGY0NiA7Q60&X-Amz-Signature=9e34618503518953b34a5d7486717fe5878693eed9d8243acaea609cdfd1e9f4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMW6CBIQ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T022120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiw8WS0Ru70tO1pGkX%2F3sku3kHpEWXxJMQr7zZnqSOOgIgcEc3Ds1XVeXIWLI3KZHiMNhJI0iMMOoKxrXVzdcuJFcq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIJq8PWELZCQa%2FRmayrcA4Y8C0FKq%2BL5Rz4SiHjdSLCsUaI%2FZ%2BFJwIPjGU40SYU07sZKNWE2kS9wyN5%2BW4X9FnSPhnocvl63NWl74eDXQ%2FSyR7Ucp4QDHX3LlwwCgiyGofo8lsCo%2BCMPbTky2May9zhFD8rET8hBzOxxVdicDBmz5X4MqGche23kuGACBMJ%2FOuwDzBKu5Qiji0ET2qSIprxrhlAgtv9ZKThr4QAFrOm40uoxZzkwe7XrIFGEQ6lIAYd38f0gJ3BZcpLIuathACPZD7kZeykVEYIAOumcrAu2Ngic4BMaDrnUmzqujGRuLTqCTM3%2FLWJUrAhhb%2BqMKHAqHpVW1uqVFVS6iSrsUSJyZ9T6oLHddMvLEuf9QDEyWNU5Z8lYajt7fHEubRcY5EIqU7SoPSOYq8%2FuHfmnFlP%2F8atjWtBDnCr%2Fxq24W11l%2BbsIvAPNguamNHjUQZs1eQTeKCNWLPzlv4Tdh1GXFMGlBb88Mk%2FObeQp2WSA5B06jz2Dh0XWGkTdkRwFj8Og9LXZzkye%2B2iUtto6nIkCTPrq6A5sjQSnRmtb%2FEcsJv5iVdmgEliTeYHTDMnlLr8MruKNBjATf5x1XQKnl6zkJZiOKV0PIc2N9To07Cbzcm9%2FmyN2Fv9%2B3N9Oad0KMIPGgcAGOqUBom9aNGLgb0eYvrSU46pLGchXJWtYpq%2FLJAGOoHIksmXabkfC6Jmp08t8CXNgIIhlQVh52Pk3jWkFTYtoN68IJptDF0oHr507WCzDmAuPoNVIGy21UmRml4DaN1zFcwS5SZcgqpBh%2BSsq95h2juoG5y37WSWSNy36YH%2BofWwDb2S1pH4fEyGdjtsDX9yY%2BXB2qz1YMxH%2FGH21cDEux%2BGY0NiA7Q60&X-Amz-Signature=51d794cd0a7a0c87c2081deec31a06e9b576ba7ee80e3261a2655f0e548e9fbf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMW6CBIQ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T022120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiw8WS0Ru70tO1pGkX%2F3sku3kHpEWXxJMQr7zZnqSOOgIgcEc3Ds1XVeXIWLI3KZHiMNhJI0iMMOoKxrXVzdcuJFcq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIJq8PWELZCQa%2FRmayrcA4Y8C0FKq%2BL5Rz4SiHjdSLCsUaI%2FZ%2BFJwIPjGU40SYU07sZKNWE2kS9wyN5%2BW4X9FnSPhnocvl63NWl74eDXQ%2FSyR7Ucp4QDHX3LlwwCgiyGofo8lsCo%2BCMPbTky2May9zhFD8rET8hBzOxxVdicDBmz5X4MqGche23kuGACBMJ%2FOuwDzBKu5Qiji0ET2qSIprxrhlAgtv9ZKThr4QAFrOm40uoxZzkwe7XrIFGEQ6lIAYd38f0gJ3BZcpLIuathACPZD7kZeykVEYIAOumcrAu2Ngic4BMaDrnUmzqujGRuLTqCTM3%2FLWJUrAhhb%2BqMKHAqHpVW1uqVFVS6iSrsUSJyZ9T6oLHddMvLEuf9QDEyWNU5Z8lYajt7fHEubRcY5EIqU7SoPSOYq8%2FuHfmnFlP%2F8atjWtBDnCr%2Fxq24W11l%2BbsIvAPNguamNHjUQZs1eQTeKCNWLPzlv4Tdh1GXFMGlBb88Mk%2FObeQp2WSA5B06jz2Dh0XWGkTdkRwFj8Og9LXZzkye%2B2iUtto6nIkCTPrq6A5sjQSnRmtb%2FEcsJv5iVdmgEliTeYHTDMnlLr8MruKNBjATf5x1XQKnl6zkJZiOKV0PIc2N9To07Cbzcm9%2FmyN2Fv9%2B3N9Oad0KMIPGgcAGOqUBom9aNGLgb0eYvrSU46pLGchXJWtYpq%2FLJAGOoHIksmXabkfC6Jmp08t8CXNgIIhlQVh52Pk3jWkFTYtoN68IJptDF0oHr507WCzDmAuPoNVIGy21UmRml4DaN1zFcwS5SZcgqpBh%2BSsq95h2juoG5y37WSWSNy36YH%2BofWwDb2S1pH4fEyGdjtsDX9yY%2BXB2qz1YMxH%2FGH21cDEux%2BGY0NiA7Q60&X-Amz-Signature=7007ec31549f107fcfbdaa1be176a9f6d29276000eff9556a80a8c65556ad6fe&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
