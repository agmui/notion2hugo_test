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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4SBKGKW%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGOduCWOWGCnvbxAf5rEi0MQVoo9ftBfcnTSW3qlqfpxAiBzh%2FRRfK0FojzzoylaHJcK8Uy%2Fo5rEbvItHe0KBMmYWCqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXU5Sx8bAUf86mobMKtwDIwbsZIKvsaHk1BXzqNto4szfKnhIywCZOHE4PjcjM5O7hm27zOkpNee2W46rPoDwrLxphCILWBLliRlXWpVAktZlF6SJG%2FI06cBS6MMQs7Ee3q5chsQNxdqK4h5JzZ1PD4UBYMiTl5ZU%2BAIK0N%2Bkk9Xbmg%2B3AmysNmCyDSGyMcLA7ZF57mCAx2BjCtoLv6zF%2FYHovgnULZwmHaQPAtGP5ulm4WnPcDFBdPMmh%2FcazJ4z80D1U99TtzPdLCkniCAQfCbS6tK%2Fi6KCXhw7FAPZFtlitNbQn7QbvnETTvSDyDaL4qeIUJ0uqb4nTlMxqMlfUj1HTCdoyTsv4p5fvYdXHauQNBSYB2ewKFyaE6EpupiB9y2IwDd%2Flu0Uh7To8Jo6J2wVEzmi2JNQfT0jrrKSGCjL%2BOR9mU8MPN3NAWOVdtMtOh0Hqqep1DiLjHT%2BnGIfquiwUAM6kgFLEQSFvb2Fz2Kb8PUcWZEIXye%2BpJsd26MY43Ssi%2BVbMMcexJLWLPTW%2B3CVZY6Qcka5fXhEtVjhr4OiRgXd3GpdoOH3hxKYxNj2jmI4lKg5Hhh7Qi2IU5ja4o1ztTKY1NE7Xf1%2BLj4egO1Bx1Z4qT9irf2HQFwA%2FJLR2GnCWp8p5wQPzj0wg9%2B9vwY6pgFRwUh%2FNgoEuhgkW85PRVRlD2dE2x2fA%2B27IJM0NIyJ0s2Ckb7ImruA5IH2nNn7cQsxIFO8%2FKic3bCug4o6VMachKp8D5R%2F91kMV7pu0txydParpfH9yfMh1POnjZl%2FiN5oHIzhRKv1es2XzAQz5ZXyUt6X06qwjvLJXpRY48SLgzdcmvYRsLlOW0pSn9HJiAFoZf7oWwpTMh%2F9VKw%2B9E0zQc9hCEyk&X-Amz-Signature=435a8b063728d1153c87ea73659d50b09c51bb58721f752a3cc8e72a9303447f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4SBKGKW%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGOduCWOWGCnvbxAf5rEi0MQVoo9ftBfcnTSW3qlqfpxAiBzh%2FRRfK0FojzzoylaHJcK8Uy%2Fo5rEbvItHe0KBMmYWCqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXU5Sx8bAUf86mobMKtwDIwbsZIKvsaHk1BXzqNto4szfKnhIywCZOHE4PjcjM5O7hm27zOkpNee2W46rPoDwrLxphCILWBLliRlXWpVAktZlF6SJG%2FI06cBS6MMQs7Ee3q5chsQNxdqK4h5JzZ1PD4UBYMiTl5ZU%2BAIK0N%2Bkk9Xbmg%2B3AmysNmCyDSGyMcLA7ZF57mCAx2BjCtoLv6zF%2FYHovgnULZwmHaQPAtGP5ulm4WnPcDFBdPMmh%2FcazJ4z80D1U99TtzPdLCkniCAQfCbS6tK%2Fi6KCXhw7FAPZFtlitNbQn7QbvnETTvSDyDaL4qeIUJ0uqb4nTlMxqMlfUj1HTCdoyTsv4p5fvYdXHauQNBSYB2ewKFyaE6EpupiB9y2IwDd%2Flu0Uh7To8Jo6J2wVEzmi2JNQfT0jrrKSGCjL%2BOR9mU8MPN3NAWOVdtMtOh0Hqqep1DiLjHT%2BnGIfquiwUAM6kgFLEQSFvb2Fz2Kb8PUcWZEIXye%2BpJsd26MY43Ssi%2BVbMMcexJLWLPTW%2B3CVZY6Qcka5fXhEtVjhr4OiRgXd3GpdoOH3hxKYxNj2jmI4lKg5Hhh7Qi2IU5ja4o1ztTKY1NE7Xf1%2BLj4egO1Bx1Z4qT9irf2HQFwA%2FJLR2GnCWp8p5wQPzj0wg9%2B9vwY6pgFRwUh%2FNgoEuhgkW85PRVRlD2dE2x2fA%2B27IJM0NIyJ0s2Ckb7ImruA5IH2nNn7cQsxIFO8%2FKic3bCug4o6VMachKp8D5R%2F91kMV7pu0txydParpfH9yfMh1POnjZl%2FiN5oHIzhRKv1es2XzAQz5ZXyUt6X06qwjvLJXpRY48SLgzdcmvYRsLlOW0pSn9HJiAFoZf7oWwpTMh%2F9VKw%2B9E0zQc9hCEyk&X-Amz-Signature=c09c7a396fbd51161f7c60ef0b56b113897c012ecb0976654794d60fe459556c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4SBKGKW%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGOduCWOWGCnvbxAf5rEi0MQVoo9ftBfcnTSW3qlqfpxAiBzh%2FRRfK0FojzzoylaHJcK8Uy%2Fo5rEbvItHe0KBMmYWCqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXU5Sx8bAUf86mobMKtwDIwbsZIKvsaHk1BXzqNto4szfKnhIywCZOHE4PjcjM5O7hm27zOkpNee2W46rPoDwrLxphCILWBLliRlXWpVAktZlF6SJG%2FI06cBS6MMQs7Ee3q5chsQNxdqK4h5JzZ1PD4UBYMiTl5ZU%2BAIK0N%2Bkk9Xbmg%2B3AmysNmCyDSGyMcLA7ZF57mCAx2BjCtoLv6zF%2FYHovgnULZwmHaQPAtGP5ulm4WnPcDFBdPMmh%2FcazJ4z80D1U99TtzPdLCkniCAQfCbS6tK%2Fi6KCXhw7FAPZFtlitNbQn7QbvnETTvSDyDaL4qeIUJ0uqb4nTlMxqMlfUj1HTCdoyTsv4p5fvYdXHauQNBSYB2ewKFyaE6EpupiB9y2IwDd%2Flu0Uh7To8Jo6J2wVEzmi2JNQfT0jrrKSGCjL%2BOR9mU8MPN3NAWOVdtMtOh0Hqqep1DiLjHT%2BnGIfquiwUAM6kgFLEQSFvb2Fz2Kb8PUcWZEIXye%2BpJsd26MY43Ssi%2BVbMMcexJLWLPTW%2B3CVZY6Qcka5fXhEtVjhr4OiRgXd3GpdoOH3hxKYxNj2jmI4lKg5Hhh7Qi2IU5ja4o1ztTKY1NE7Xf1%2BLj4egO1Bx1Z4qT9irf2HQFwA%2FJLR2GnCWp8p5wQPzj0wg9%2B9vwY6pgFRwUh%2FNgoEuhgkW85PRVRlD2dE2x2fA%2B27IJM0NIyJ0s2Ckb7ImruA5IH2nNn7cQsxIFO8%2FKic3bCug4o6VMachKp8D5R%2F91kMV7pu0txydParpfH9yfMh1POnjZl%2FiN5oHIzhRKv1es2XzAQz5ZXyUt6X06qwjvLJXpRY48SLgzdcmvYRsLlOW0pSn9HJiAFoZf7oWwpTMh%2F9VKw%2B9E0zQc9hCEyk&X-Amz-Signature=d8fbd50f82238be09992c1b0ff1c143890ca51636d5bf3740bd97dff7b5a6934&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
