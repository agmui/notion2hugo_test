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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AV5U2YN%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T220156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8%2FXj7z4tc8NB3igkcHv5kv4kBTWcuzK8MsVWdXQFzpwIhAKl%2Bc4UGKI6OoUIULgfVDHwi5m3zRT2xY1LB4NcLo8AWKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwV7VSIKDcHOn1UQVMq3APNgHTNT3ASPadgGjP9fHo%2FP2wMVWEX70bgmFLotqD701YzCLw1NHEQjOLrqvdYOXdrlCopbL%2BeTviqyPJYCnnZ8RWQqi14pbPtGN6uMYIGgixiJ1HL7gXd9NMXsazjxfqs2sZergCBIBfNMl9h2D2y%2Fns%2FjfijwPpSeOLfjHkhOqNIxdP0xZ7B4i0GkKkKq4fFFv%2B13fYMScOQ6BYW9pi012rN7ZxIiDwCUHEzkFM4t8Wu6dBQdlx%2BtKD0xtUlvVmcdhw2PbaR6uP05B3aV6Gd9E%2Br30yIwq00r%2BVt0WDhAyM7Y9hw4rh%2Fzoy3TLmbhQbdIVKL59FAQtqvr6Sp69ArL810EOqgdjYsJ1sgcHNbYoPXLUAou5TW0jwjhg6%2BtfpPuoH1AMmvzH0wyBfNZiNj1z9OHT7mpwkLup7TshZDwbaLI2Y4jVAakjrmvDu9lU1tUwVSim2Efd2LAR8leqZ%2F0GMHovQgAjPaxVPbJoQddiwvBEPKPg6KzA9UDUCGqWdEKUrv9BCes%2BweAi0MozzZ3tKQdbIRBitBGv9K2B20Q4MgZI%2F6tAO0Wc3t46XxeP4onES7OXgY8C3%2FdZGJrHyjrbYan4tVGkuEmK7lmgH3wbs6jpzxIaDFYundyDCQppO%2BBjqkATAxOmHVNGM7BBxW9%2FrYjee7tj4omZsMsTwxY6Lvdx%2BH%2FS3pOgJaHh7g1UmCVKdRi%2B9t5MchOIQrFWJ3hzVzV6l4r5qtaZfSO7x9xd33DFp3jzsO2DknekAERBlAx20ppdNVAcluyRDSMe%2F21yZcmKKyU7X1VeTYXRsBMZsEnwWq6AS0FiGjCz84KZtKQUGvqZGEZrh8PAEWnKyUllGS%2BdwktXSS&X-Amz-Signature=b97a3758eb9a93d550f1aba46a37f51683b580abdf9ff6aced94894e1d7c9412&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AV5U2YN%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T220156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8%2FXj7z4tc8NB3igkcHv5kv4kBTWcuzK8MsVWdXQFzpwIhAKl%2Bc4UGKI6OoUIULgfVDHwi5m3zRT2xY1LB4NcLo8AWKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwV7VSIKDcHOn1UQVMq3APNgHTNT3ASPadgGjP9fHo%2FP2wMVWEX70bgmFLotqD701YzCLw1NHEQjOLrqvdYOXdrlCopbL%2BeTviqyPJYCnnZ8RWQqi14pbPtGN6uMYIGgixiJ1HL7gXd9NMXsazjxfqs2sZergCBIBfNMl9h2D2y%2Fns%2FjfijwPpSeOLfjHkhOqNIxdP0xZ7B4i0GkKkKq4fFFv%2B13fYMScOQ6BYW9pi012rN7ZxIiDwCUHEzkFM4t8Wu6dBQdlx%2BtKD0xtUlvVmcdhw2PbaR6uP05B3aV6Gd9E%2Br30yIwq00r%2BVt0WDhAyM7Y9hw4rh%2Fzoy3TLmbhQbdIVKL59FAQtqvr6Sp69ArL810EOqgdjYsJ1sgcHNbYoPXLUAou5TW0jwjhg6%2BtfpPuoH1AMmvzH0wyBfNZiNj1z9OHT7mpwkLup7TshZDwbaLI2Y4jVAakjrmvDu9lU1tUwVSim2Efd2LAR8leqZ%2F0GMHovQgAjPaxVPbJoQddiwvBEPKPg6KzA9UDUCGqWdEKUrv9BCes%2BweAi0MozzZ3tKQdbIRBitBGv9K2B20Q4MgZI%2F6tAO0Wc3t46XxeP4onES7OXgY8C3%2FdZGJrHyjrbYan4tVGkuEmK7lmgH3wbs6jpzxIaDFYundyDCQppO%2BBjqkATAxOmHVNGM7BBxW9%2FrYjee7tj4omZsMsTwxY6Lvdx%2BH%2FS3pOgJaHh7g1UmCVKdRi%2B9t5MchOIQrFWJ3hzVzV6l4r5qtaZfSO7x9xd33DFp3jzsO2DknekAERBlAx20ppdNVAcluyRDSMe%2F21yZcmKKyU7X1VeTYXRsBMZsEnwWq6AS0FiGjCz84KZtKQUGvqZGEZrh8PAEWnKyUllGS%2BdwktXSS&X-Amz-Signature=98d23851c8bd0406ad24c0e9a80c542d39d571af6b56d677aac6b797754741f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AV5U2YN%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T220156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8%2FXj7z4tc8NB3igkcHv5kv4kBTWcuzK8MsVWdXQFzpwIhAKl%2Bc4UGKI6OoUIULgfVDHwi5m3zRT2xY1LB4NcLo8AWKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwV7VSIKDcHOn1UQVMq3APNgHTNT3ASPadgGjP9fHo%2FP2wMVWEX70bgmFLotqD701YzCLw1NHEQjOLrqvdYOXdrlCopbL%2BeTviqyPJYCnnZ8RWQqi14pbPtGN6uMYIGgixiJ1HL7gXd9NMXsazjxfqs2sZergCBIBfNMl9h2D2y%2Fns%2FjfijwPpSeOLfjHkhOqNIxdP0xZ7B4i0GkKkKq4fFFv%2B13fYMScOQ6BYW9pi012rN7ZxIiDwCUHEzkFM4t8Wu6dBQdlx%2BtKD0xtUlvVmcdhw2PbaR6uP05B3aV6Gd9E%2Br30yIwq00r%2BVt0WDhAyM7Y9hw4rh%2Fzoy3TLmbhQbdIVKL59FAQtqvr6Sp69ArL810EOqgdjYsJ1sgcHNbYoPXLUAou5TW0jwjhg6%2BtfpPuoH1AMmvzH0wyBfNZiNj1z9OHT7mpwkLup7TshZDwbaLI2Y4jVAakjrmvDu9lU1tUwVSim2Efd2LAR8leqZ%2F0GMHovQgAjPaxVPbJoQddiwvBEPKPg6KzA9UDUCGqWdEKUrv9BCes%2BweAi0MozzZ3tKQdbIRBitBGv9K2B20Q4MgZI%2F6tAO0Wc3t46XxeP4onES7OXgY8C3%2FdZGJrHyjrbYan4tVGkuEmK7lmgH3wbs6jpzxIaDFYundyDCQppO%2BBjqkATAxOmHVNGM7BBxW9%2FrYjee7tj4omZsMsTwxY6Lvdx%2BH%2FS3pOgJaHh7g1UmCVKdRi%2B9t5MchOIQrFWJ3hzVzV6l4r5qtaZfSO7x9xd33DFp3jzsO2DknekAERBlAx20ppdNVAcluyRDSMe%2F21yZcmKKyU7X1VeTYXRsBMZsEnwWq6AS0FiGjCz84KZtKQUGvqZGEZrh8PAEWnKyUllGS%2BdwktXSS&X-Amz-Signature=4e74c45b18942fdbb1acec734ea2a5c8886ec0164e4d192c6763281172949e16&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
