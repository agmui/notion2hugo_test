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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCRE3E7V%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T181128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDvJCFTjcPm8Z1q5uJIRLxED0ThQisFo9thEeLISnvl%2FAIhAKXBrfrC9t7Ror%2F4Jg6NBVQNwo63O1jwraOE4rvfQnkfKv8DCEsQABoMNjM3NDIzMTgzODA1IgzOSQiek2zaQbPhhBgq3AOctlMUWwtXdXNswvnTrNBGtq7hS1cwFHNpn9HIbY3m4TFsrrjLXnJ6mdPXYXv5YvOP1Gc6Ps%2F24AwRqg3ENVDA5i1HHnH5l%2BVjzqyXlH5tazatVgyw6qC%2FKQ9mJerB2m9wz6vbBp5bhp%2FmmUA3OKPem2ok%2BMDgLTYcUwB6Q8iWAbrrCZALq4gM2ymecjYdiO2WGNJHEWsQRmg3P4O2BCEbxJf%2FyJ3PRjdwskkn2TfUFo1xdBePyzKGzbQbQEEKNgYgqmmp%2F%2F7iX3NDOuvshSbosOni9r1nKb%2FBpOl4yGgFB4msFL%2BBxvDg9OBfUrtv76bCglfe1Vm6sJoFehiN%2F0Vnoq1CUMOALG2fdtCzPTHyCM2q%2FJA%2BJRmyBENgM6yPAcrit2i%2Fofz2SezNX2wwHVFdzpGUiyanYntuktZM4r8a1iOP9InC1Un6wixpDEuzWjWaXQimJ026Si12npQAYmKiyMnOI6vDVCy4UtnU25MDU2emFPhdh2%2Fv9aYIdedytFTomB7GyHVzFH77D0IEnKi1G4oYleEIciwuLO7c1JZ06%2Fzqn%2F2moBKR2aPDs1zUEOadq0i0D06ulbrrTLvGJz9khFmtFgy6qHnpSq6xmfRbTcyXBKhzIfOciVZKSjDfjPi9BjqkAXnXf7R8u0v2tl77p9hg0HGfhmR7R5poebnPSOjgimeZ3ioluGrMlBmRlirUBYVtpTXH5Fzvd9kmUDwgguh6XJ%2FnjxIkpz3nCez4%2BFzjUKkmQr7xS%2FUArK67Ovlm3NneqJOS8VNUzDs4cidB3VPFfJfYui65NPI8v6uM7QeY2FEA8tRzvoB35Knf9YR71LG6HI0XEeLU8WW07X45O0hRJtx9edr9&X-Amz-Signature=0252666bf4eacf6447a61279e8417482648a4a6d222a99c3c44561db1b1fbe86&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCRE3E7V%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T181128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDvJCFTjcPm8Z1q5uJIRLxED0ThQisFo9thEeLISnvl%2FAIhAKXBrfrC9t7Ror%2F4Jg6NBVQNwo63O1jwraOE4rvfQnkfKv8DCEsQABoMNjM3NDIzMTgzODA1IgzOSQiek2zaQbPhhBgq3AOctlMUWwtXdXNswvnTrNBGtq7hS1cwFHNpn9HIbY3m4TFsrrjLXnJ6mdPXYXv5YvOP1Gc6Ps%2F24AwRqg3ENVDA5i1HHnH5l%2BVjzqyXlH5tazatVgyw6qC%2FKQ9mJerB2m9wz6vbBp5bhp%2FmmUA3OKPem2ok%2BMDgLTYcUwB6Q8iWAbrrCZALq4gM2ymecjYdiO2WGNJHEWsQRmg3P4O2BCEbxJf%2FyJ3PRjdwskkn2TfUFo1xdBePyzKGzbQbQEEKNgYgqmmp%2F%2F7iX3NDOuvshSbosOni9r1nKb%2FBpOl4yGgFB4msFL%2BBxvDg9OBfUrtv76bCglfe1Vm6sJoFehiN%2F0Vnoq1CUMOALG2fdtCzPTHyCM2q%2FJA%2BJRmyBENgM6yPAcrit2i%2Fofz2SezNX2wwHVFdzpGUiyanYntuktZM4r8a1iOP9InC1Un6wixpDEuzWjWaXQimJ026Si12npQAYmKiyMnOI6vDVCy4UtnU25MDU2emFPhdh2%2Fv9aYIdedytFTomB7GyHVzFH77D0IEnKi1G4oYleEIciwuLO7c1JZ06%2Fzqn%2F2moBKR2aPDs1zUEOadq0i0D06ulbrrTLvGJz9khFmtFgy6qHnpSq6xmfRbTcyXBKhzIfOciVZKSjDfjPi9BjqkAXnXf7R8u0v2tl77p9hg0HGfhmR7R5poebnPSOjgimeZ3ioluGrMlBmRlirUBYVtpTXH5Fzvd9kmUDwgguh6XJ%2FnjxIkpz3nCez4%2BFzjUKkmQr7xS%2FUArK67Ovlm3NneqJOS8VNUzDs4cidB3VPFfJfYui65NPI8v6uM7QeY2FEA8tRzvoB35Knf9YR71LG6HI0XEeLU8WW07X45O0hRJtx9edr9&X-Amz-Signature=66409368853e5f21c54c0523e70d996548ecd2f618960840a1a5b2a5c720e487&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCRE3E7V%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T181128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDvJCFTjcPm8Z1q5uJIRLxED0ThQisFo9thEeLISnvl%2FAIhAKXBrfrC9t7Ror%2F4Jg6NBVQNwo63O1jwraOE4rvfQnkfKv8DCEsQABoMNjM3NDIzMTgzODA1IgzOSQiek2zaQbPhhBgq3AOctlMUWwtXdXNswvnTrNBGtq7hS1cwFHNpn9HIbY3m4TFsrrjLXnJ6mdPXYXv5YvOP1Gc6Ps%2F24AwRqg3ENVDA5i1HHnH5l%2BVjzqyXlH5tazatVgyw6qC%2FKQ9mJerB2m9wz6vbBp5bhp%2FmmUA3OKPem2ok%2BMDgLTYcUwB6Q8iWAbrrCZALq4gM2ymecjYdiO2WGNJHEWsQRmg3P4O2BCEbxJf%2FyJ3PRjdwskkn2TfUFo1xdBePyzKGzbQbQEEKNgYgqmmp%2F%2F7iX3NDOuvshSbosOni9r1nKb%2FBpOl4yGgFB4msFL%2BBxvDg9OBfUrtv76bCglfe1Vm6sJoFehiN%2F0Vnoq1CUMOALG2fdtCzPTHyCM2q%2FJA%2BJRmyBENgM6yPAcrit2i%2Fofz2SezNX2wwHVFdzpGUiyanYntuktZM4r8a1iOP9InC1Un6wixpDEuzWjWaXQimJ026Si12npQAYmKiyMnOI6vDVCy4UtnU25MDU2emFPhdh2%2Fv9aYIdedytFTomB7GyHVzFH77D0IEnKi1G4oYleEIciwuLO7c1JZ06%2Fzqn%2F2moBKR2aPDs1zUEOadq0i0D06ulbrrTLvGJz9khFmtFgy6qHnpSq6xmfRbTcyXBKhzIfOciVZKSjDfjPi9BjqkAXnXf7R8u0v2tl77p9hg0HGfhmR7R5poebnPSOjgimeZ3ioluGrMlBmRlirUBYVtpTXH5Fzvd9kmUDwgguh6XJ%2FnjxIkpz3nCez4%2BFzjUKkmQr7xS%2FUArK67Ovlm3NneqJOS8VNUzDs4cidB3VPFfJfYui65NPI8v6uM7QeY2FEA8tRzvoB35Knf9YR71LG6HI0XEeLU8WW07X45O0hRJtx9edr9&X-Amz-Signature=7cdcd163e89ac16926535f6a871e489b5e30c6439a4c16cbf04d3233339597a2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
