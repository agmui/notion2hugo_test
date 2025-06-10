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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EEITV56%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T024026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBiyoojGKXl6m2g%2Bzno6Ez%2FY6OdHxU9JyJcLK9nPIQTAAiAA7qup9y2ipINTrGKiWkYma5cIvxUX61zcls0TB%2FcejiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8SmFNlLAFYUiniqnKtwDnJ3FRxXZEU0vQOPlXjMia6aJJaOHSSJi3cxBp%2BwRn1Sy0qm7T2BxOrzl9SPqHkDPDQnarze03clD9K91WrucpVTsA4A%2F6VaFlKwV7QpY6YNHjvgYeRBPb9apirEgfmMU%2Bp0%2BzRuuiSRMyVPhbyc%2FfNMZYDWBsPYavw6IkaVxmB63eKKqEN90tz%2FINhZqp0s%2Fv%2Bn1Now52fO9ZVEQLNCCEr9zSeS%2BxqHihI6CUHcv9KO05%2Fy8iotb%2BloHXPp06IO12f0QGM0gFDn97Ee9LzDluTtKd%2BjlcsHr%2FANZ%2BKDLkxYyxTkEOdU6FhZ%2FhjPq8YY5QDPwGjabJO0Ue81QoxWqivz63DpFNi5Qz8VI25PA8DmKk%2BxGRGIoPdv8cnGcpZpUWIye9ALtmrs8waplb7k9zHi0MoH2%2FkmdUlX3ykZgbYIehzvhjnfW68HecUVrw5aXl2B%2BCrRY8ZXcVm5vDGTi7Z14HG0NKcOlztHHN7nDuxnJOY4XSCg8i5%2BKboauswdsjSzivoFogQFpbLuTc2PG5xWdP%2F%2FLGkiugWv0f1UheogCWWqPA2wiGk9Wy7S46u5ZsuhhqXuWEE1Vu5P%2B1uEjLtGu0TloDtbajBnov8DG36PlITuZ1sQHP1%2F7xOwwt6CewgY6pgFcwTCWLmsnki5UA6l5mHf9LiPBvaj%2FWHNKOR%2B6OCQRAAin84O1bhuIefIG8Vjq5C1Smi3w2yGG7wqtOMxb3Laf%2BZ0jL23GUrDj6OVu4HFzTmdPHMyoaaDGpjt%2FPMR%2FnEm86v280fuwTc2lQ4k2RxpqgVEz2aO%2FpVoKhp5%2BgcF0JFDwnmC%2FsPo6JzvhI6RR83STCJMnOAPATHS2oxm9u5PRwZaUtdIh&X-Amz-Signature=8323900ef2deac3875fb7d05824572c384c10f9bf8a2ecf1547032cd66726ee6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EEITV56%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T024026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBiyoojGKXl6m2g%2Bzno6Ez%2FY6OdHxU9JyJcLK9nPIQTAAiAA7qup9y2ipINTrGKiWkYma5cIvxUX61zcls0TB%2FcejiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8SmFNlLAFYUiniqnKtwDnJ3FRxXZEU0vQOPlXjMia6aJJaOHSSJi3cxBp%2BwRn1Sy0qm7T2BxOrzl9SPqHkDPDQnarze03clD9K91WrucpVTsA4A%2F6VaFlKwV7QpY6YNHjvgYeRBPb9apirEgfmMU%2Bp0%2BzRuuiSRMyVPhbyc%2FfNMZYDWBsPYavw6IkaVxmB63eKKqEN90tz%2FINhZqp0s%2Fv%2Bn1Now52fO9ZVEQLNCCEr9zSeS%2BxqHihI6CUHcv9KO05%2Fy8iotb%2BloHXPp06IO12f0QGM0gFDn97Ee9LzDluTtKd%2BjlcsHr%2FANZ%2BKDLkxYyxTkEOdU6FhZ%2FhjPq8YY5QDPwGjabJO0Ue81QoxWqivz63DpFNi5Qz8VI25PA8DmKk%2BxGRGIoPdv8cnGcpZpUWIye9ALtmrs8waplb7k9zHi0MoH2%2FkmdUlX3ykZgbYIehzvhjnfW68HecUVrw5aXl2B%2BCrRY8ZXcVm5vDGTi7Z14HG0NKcOlztHHN7nDuxnJOY4XSCg8i5%2BKboauswdsjSzivoFogQFpbLuTc2PG5xWdP%2F%2FLGkiugWv0f1UheogCWWqPA2wiGk9Wy7S46u5ZsuhhqXuWEE1Vu5P%2B1uEjLtGu0TloDtbajBnov8DG36PlITuZ1sQHP1%2F7xOwwt6CewgY6pgFcwTCWLmsnki5UA6l5mHf9LiPBvaj%2FWHNKOR%2B6OCQRAAin84O1bhuIefIG8Vjq5C1Smi3w2yGG7wqtOMxb3Laf%2BZ0jL23GUrDj6OVu4HFzTmdPHMyoaaDGpjt%2FPMR%2FnEm86v280fuwTc2lQ4k2RxpqgVEz2aO%2FpVoKhp5%2BgcF0JFDwnmC%2FsPo6JzvhI6RR83STCJMnOAPATHS2oxm9u5PRwZaUtdIh&X-Amz-Signature=bb3a7f464433ffad4d04f993231b07126e1d3fd8178e13f1b0567c532cc652fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EEITV56%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T024026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBiyoojGKXl6m2g%2Bzno6Ez%2FY6OdHxU9JyJcLK9nPIQTAAiAA7qup9y2ipINTrGKiWkYma5cIvxUX61zcls0TB%2FcejiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8SmFNlLAFYUiniqnKtwDnJ3FRxXZEU0vQOPlXjMia6aJJaOHSSJi3cxBp%2BwRn1Sy0qm7T2BxOrzl9SPqHkDPDQnarze03clD9K91WrucpVTsA4A%2F6VaFlKwV7QpY6YNHjvgYeRBPb9apirEgfmMU%2Bp0%2BzRuuiSRMyVPhbyc%2FfNMZYDWBsPYavw6IkaVxmB63eKKqEN90tz%2FINhZqp0s%2Fv%2Bn1Now52fO9ZVEQLNCCEr9zSeS%2BxqHihI6CUHcv9KO05%2Fy8iotb%2BloHXPp06IO12f0QGM0gFDn97Ee9LzDluTtKd%2BjlcsHr%2FANZ%2BKDLkxYyxTkEOdU6FhZ%2FhjPq8YY5QDPwGjabJO0Ue81QoxWqivz63DpFNi5Qz8VI25PA8DmKk%2BxGRGIoPdv8cnGcpZpUWIye9ALtmrs8waplb7k9zHi0MoH2%2FkmdUlX3ykZgbYIehzvhjnfW68HecUVrw5aXl2B%2BCrRY8ZXcVm5vDGTi7Z14HG0NKcOlztHHN7nDuxnJOY4XSCg8i5%2BKboauswdsjSzivoFogQFpbLuTc2PG5xWdP%2F%2FLGkiugWv0f1UheogCWWqPA2wiGk9Wy7S46u5ZsuhhqXuWEE1Vu5P%2B1uEjLtGu0TloDtbajBnov8DG36PlITuZ1sQHP1%2F7xOwwt6CewgY6pgFcwTCWLmsnki5UA6l5mHf9LiPBvaj%2FWHNKOR%2B6OCQRAAin84O1bhuIefIG8Vjq5C1Smi3w2yGG7wqtOMxb3Laf%2BZ0jL23GUrDj6OVu4HFzTmdPHMyoaaDGpjt%2FPMR%2FnEm86v280fuwTc2lQ4k2RxpqgVEz2aO%2FpVoKhp5%2BgcF0JFDwnmC%2FsPo6JzvhI6RR83STCJMnOAPATHS2oxm9u5PRwZaUtdIh&X-Amz-Signature=7b924fbcbe234c82b7185eb18f06cf767faaf1de8aa6868cc1c38f5f896b356e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
