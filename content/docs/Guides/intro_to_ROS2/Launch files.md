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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMNPTFN5%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC%2FR9lzxFawOhTssRkrjI9N%2FPU3t3xa8hdAMn2ng%2BOkQAIgaAFNlS4XwsuI1YOnCogPoHm85p%2FANzwTX6E6HWkYZg4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHmvekj1CA%2B%2Fd30xhyrcAwTWmEmLnWggMDAL%2FxaO9ZdgsIK%2F%2Bt6%2BUN9hVgGrerBF2%2B9Kke5j7aFqbPIIuAiR9BVqmHPT7GNrgzvfLMNIALoYZM%2BIvHNexx%2FZ6Io7fXKLOIAr7%2FMgJi3vSOVuUYo%2F%2B0Uon2uOo5Z%2F5Yqgs2AemUYHcyhnoErdGj3DQQE1LkAZJSrr0dWwVCvxpbo7yABeDP9xbu7Evi4tgy3VZ74efzvwzlR8QTZGPpOJV1mI5xUenS%2BvAkjcYQ4%2BhaKeRgIthjrrCodI3kCkx5RNe%2BDTcnmxSFNnfoxOx3EXA5cuaO1FM0qwlOGhWO3xJgoXDRFod8Ve0IRl2cbtCAoOi%2BLbze2Li6KIYA4i4%2FGbQHcfffnBIj%2FAeGf5btDWjmV4pm2lou4BWnDXXTDk9RjiJe4rHfd1kh64PpKwD1yta5X6%2BNPdRehghisZNdQ6KmhxMBhNwWhX8O4eTpJvCbbVdOOPRRXWlmVcu3aBhtPISxkVIsxZoXOulr10qEKZ%2B2W2TGxHODm3NRhftHmE73d6dC0cNXrIu39nEj8XrnxCcL2ymA3rJpZdOr7iOakeYCIfHazAApVJcUR%2Blm4Nb%2BJyp%2BHzQPA6axrsG5lgF%2FmyG0KCFux9xdUk4jG9FOEPKtHwMNyBkcAGOqUB0DJJcc2yD%2BUb5zdoocsmkg59NFRXAX4%2FoHaObPBNYS5pwYk4N5G1RLMwT8OJFh9XmblVIKY8bebo96bXNwbnFDkEpYZ85Ydvmlapoza1n1Y4uMU7kpDh52aShw2KAzu%2BLgsUUGmQrqE0bE9t5h7%2BfqexSOn8yfN5GF3QueWQOL8FB68nWEHFUd%2FqMHUJZu%2B3F6DXsn3ddv4OnAuf12y6wvgVaHNO&X-Amz-Signature=ecd0c1fa8f7c5fc269a8c2828f38d0f5ef44415f76a17e620b534d779be39e3c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMNPTFN5%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC%2FR9lzxFawOhTssRkrjI9N%2FPU3t3xa8hdAMn2ng%2BOkQAIgaAFNlS4XwsuI1YOnCogPoHm85p%2FANzwTX6E6HWkYZg4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHmvekj1CA%2B%2Fd30xhyrcAwTWmEmLnWggMDAL%2FxaO9ZdgsIK%2F%2Bt6%2BUN9hVgGrerBF2%2B9Kke5j7aFqbPIIuAiR9BVqmHPT7GNrgzvfLMNIALoYZM%2BIvHNexx%2FZ6Io7fXKLOIAr7%2FMgJi3vSOVuUYo%2F%2B0Uon2uOo5Z%2F5Yqgs2AemUYHcyhnoErdGj3DQQE1LkAZJSrr0dWwVCvxpbo7yABeDP9xbu7Evi4tgy3VZ74efzvwzlR8QTZGPpOJV1mI5xUenS%2BvAkjcYQ4%2BhaKeRgIthjrrCodI3kCkx5RNe%2BDTcnmxSFNnfoxOx3EXA5cuaO1FM0qwlOGhWO3xJgoXDRFod8Ve0IRl2cbtCAoOi%2BLbze2Li6KIYA4i4%2FGbQHcfffnBIj%2FAeGf5btDWjmV4pm2lou4BWnDXXTDk9RjiJe4rHfd1kh64PpKwD1yta5X6%2BNPdRehghisZNdQ6KmhxMBhNwWhX8O4eTpJvCbbVdOOPRRXWlmVcu3aBhtPISxkVIsxZoXOulr10qEKZ%2B2W2TGxHODm3NRhftHmE73d6dC0cNXrIu39nEj8XrnxCcL2ymA3rJpZdOr7iOakeYCIfHazAApVJcUR%2Blm4Nb%2BJyp%2BHzQPA6axrsG5lgF%2FmyG0KCFux9xdUk4jG9FOEPKtHwMNyBkcAGOqUB0DJJcc2yD%2BUb5zdoocsmkg59NFRXAX4%2FoHaObPBNYS5pwYk4N5G1RLMwT8OJFh9XmblVIKY8bebo96bXNwbnFDkEpYZ85Ydvmlapoza1n1Y4uMU7kpDh52aShw2KAzu%2BLgsUUGmQrqE0bE9t5h7%2BfqexSOn8yfN5GF3QueWQOL8FB68nWEHFUd%2FqMHUJZu%2B3F6DXsn3ddv4OnAuf12y6wvgVaHNO&X-Amz-Signature=a3fdca2316c30f094fd6fcb7ed9da60b65d8bccf3b357e99301664f75e56587a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMNPTFN5%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC%2FR9lzxFawOhTssRkrjI9N%2FPU3t3xa8hdAMn2ng%2BOkQAIgaAFNlS4XwsuI1YOnCogPoHm85p%2FANzwTX6E6HWkYZg4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHmvekj1CA%2B%2Fd30xhyrcAwTWmEmLnWggMDAL%2FxaO9ZdgsIK%2F%2Bt6%2BUN9hVgGrerBF2%2B9Kke5j7aFqbPIIuAiR9BVqmHPT7GNrgzvfLMNIALoYZM%2BIvHNexx%2FZ6Io7fXKLOIAr7%2FMgJi3vSOVuUYo%2F%2B0Uon2uOo5Z%2F5Yqgs2AemUYHcyhnoErdGj3DQQE1LkAZJSrr0dWwVCvxpbo7yABeDP9xbu7Evi4tgy3VZ74efzvwzlR8QTZGPpOJV1mI5xUenS%2BvAkjcYQ4%2BhaKeRgIthjrrCodI3kCkx5RNe%2BDTcnmxSFNnfoxOx3EXA5cuaO1FM0qwlOGhWO3xJgoXDRFod8Ve0IRl2cbtCAoOi%2BLbze2Li6KIYA4i4%2FGbQHcfffnBIj%2FAeGf5btDWjmV4pm2lou4BWnDXXTDk9RjiJe4rHfd1kh64PpKwD1yta5X6%2BNPdRehghisZNdQ6KmhxMBhNwWhX8O4eTpJvCbbVdOOPRRXWlmVcu3aBhtPISxkVIsxZoXOulr10qEKZ%2B2W2TGxHODm3NRhftHmE73d6dC0cNXrIu39nEj8XrnxCcL2ymA3rJpZdOr7iOakeYCIfHazAApVJcUR%2Blm4Nb%2BJyp%2BHzQPA6axrsG5lgF%2FmyG0KCFux9xdUk4jG9FOEPKtHwMNyBkcAGOqUB0DJJcc2yD%2BUb5zdoocsmkg59NFRXAX4%2FoHaObPBNYS5pwYk4N5G1RLMwT8OJFh9XmblVIKY8bebo96bXNwbnFDkEpYZ85Ydvmlapoza1n1Y4uMU7kpDh52aShw2KAzu%2BLgsUUGmQrqE0bE9t5h7%2BfqexSOn8yfN5GF3QueWQOL8FB68nWEHFUd%2FqMHUJZu%2B3F6DXsn3ddv4OnAuf12y6wvgVaHNO&X-Amz-Signature=eb09fe3b814f9be7b0605554448dfcdc344600af585cbbb2a5463c6a6f12ec71&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
