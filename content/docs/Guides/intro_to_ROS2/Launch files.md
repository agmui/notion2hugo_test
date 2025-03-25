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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTLJI5AN%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T160912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDAOp5Luli1J4HosEsoGBULjNROcCOCMr1mJE5%2BzouAKAiBlME8YJU89N4MWFqmKlLpc0SgUxVY0UI66G1emA6il9Cr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIM27slRa9oXGl%2F04LTKtwDCVwzbxymZ3fb7WvvIi5rHkvPViPM2gLyihp4J62OeKVMtjXIP7VIhHFT7BjeR35AVb15rxddknjRcM1yWKNVsRNY%2Bzu91voG1D1Rm%2FwKOUD%2BO8aoZHxs%2BjYt2SHf%2BANq92qX45%2BUfu7w631uwUD5On004VwoFZzGvW2RbHrE0OqMxLgZCuFHuCm%2Bj72aeGZ%2FFRWn7%2ByqsrBJ3bNZrxrbviO0bc%2B02RRJ1EMVgmLkk%2BKCThGkXbGimqwmMNQ9p0psKPnu3S0tAh8omuZCdkVzNAeb%2Bhky5pTKkfKu5CAvmSOFGbcZEUK1XbtxtjT3fRqHn%2FQmWTm2sw65hpHQmzDNxK8HUkXNmL%2B2U49xWIlq%2F4djOaVU7VnFi55JnockJq%2BcWLYs5YZudeUrSB1Ul9BQMWfOAJVkGLiTxvVx39sAfoR1EKpKVzdkFvZ1nvvacvP59J6D6MQc27KUx4%2FworE%2Bd%2Bypw%2BmZMH%2FptyK62R3l0TwlHoCoIEVH%2B5AWqGqWJGYlIa1fsifz5jPduovjSe7KZ7ZX%2B1wtmami2WWsmwyUWu%2BCY%2B9PoNhTgA6AEUXqM1HxUFv2MsrKEPEHJyFBpEb%2FF8yhAremjrSmAtzDX89p0Js1FJR8KNivxIiv7%2Fkw5qOLvwY6pgE4GYTUdZkM8r3d0l1Ik9YdkA2sEXC4sVl2D%2FNCVV%2FDGNT0E8%2Fh2V%2F0qfo5%2FVhwqsoimh3bXFAKznEAxNb8t5lutshvkH0ikqpFfYlSO8L5EKFnvUXzrUuu12fWcYC%2BXLNvzOe8BcRY7%2F3v8uNIBteIKwQe33KmjAS7%2Bz5%2FpMiFio4Aq6R0VhYPV%2Fj4Y0dqMYpaR5Kc%2FAGeZwDor4suWgeWbICcSzA0&X-Amz-Signature=6064ee0221376ba977c3dc1604167224e931b7a8131a1b968c89ea70f0edb9f2&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTLJI5AN%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T160912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDAOp5Luli1J4HosEsoGBULjNROcCOCMr1mJE5%2BzouAKAiBlME8YJU89N4MWFqmKlLpc0SgUxVY0UI66G1emA6il9Cr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIM27slRa9oXGl%2F04LTKtwDCVwzbxymZ3fb7WvvIi5rHkvPViPM2gLyihp4J62OeKVMtjXIP7VIhHFT7BjeR35AVb15rxddknjRcM1yWKNVsRNY%2Bzu91voG1D1Rm%2FwKOUD%2BO8aoZHxs%2BjYt2SHf%2BANq92qX45%2BUfu7w631uwUD5On004VwoFZzGvW2RbHrE0OqMxLgZCuFHuCm%2Bj72aeGZ%2FFRWn7%2ByqsrBJ3bNZrxrbviO0bc%2B02RRJ1EMVgmLkk%2BKCThGkXbGimqwmMNQ9p0psKPnu3S0tAh8omuZCdkVzNAeb%2Bhky5pTKkfKu5CAvmSOFGbcZEUK1XbtxtjT3fRqHn%2FQmWTm2sw65hpHQmzDNxK8HUkXNmL%2B2U49xWIlq%2F4djOaVU7VnFi55JnockJq%2BcWLYs5YZudeUrSB1Ul9BQMWfOAJVkGLiTxvVx39sAfoR1EKpKVzdkFvZ1nvvacvP59J6D6MQc27KUx4%2FworE%2Bd%2Bypw%2BmZMH%2FptyK62R3l0TwlHoCoIEVH%2B5AWqGqWJGYlIa1fsifz5jPduovjSe7KZ7ZX%2B1wtmami2WWsmwyUWu%2BCY%2B9PoNhTgA6AEUXqM1HxUFv2MsrKEPEHJyFBpEb%2FF8yhAremjrSmAtzDX89p0Js1FJR8KNivxIiv7%2Fkw5qOLvwY6pgE4GYTUdZkM8r3d0l1Ik9YdkA2sEXC4sVl2D%2FNCVV%2FDGNT0E8%2Fh2V%2F0qfo5%2FVhwqsoimh3bXFAKznEAxNb8t5lutshvkH0ikqpFfYlSO8L5EKFnvUXzrUuu12fWcYC%2BXLNvzOe8BcRY7%2F3v8uNIBteIKwQe33KmjAS7%2Bz5%2FpMiFio4Aq6R0VhYPV%2Fj4Y0dqMYpaR5Kc%2FAGeZwDor4suWgeWbICcSzA0&X-Amz-Signature=98be3dc3d162005e462a3d8920b8273f0e41f79ce8267b0ecabede9c4345a29d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTLJI5AN%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T160912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDAOp5Luli1J4HosEsoGBULjNROcCOCMr1mJE5%2BzouAKAiBlME8YJU89N4MWFqmKlLpc0SgUxVY0UI66G1emA6il9Cr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIM27slRa9oXGl%2F04LTKtwDCVwzbxymZ3fb7WvvIi5rHkvPViPM2gLyihp4J62OeKVMtjXIP7VIhHFT7BjeR35AVb15rxddknjRcM1yWKNVsRNY%2Bzu91voG1D1Rm%2FwKOUD%2BO8aoZHxs%2BjYt2SHf%2BANq92qX45%2BUfu7w631uwUD5On004VwoFZzGvW2RbHrE0OqMxLgZCuFHuCm%2Bj72aeGZ%2FFRWn7%2ByqsrBJ3bNZrxrbviO0bc%2B02RRJ1EMVgmLkk%2BKCThGkXbGimqwmMNQ9p0psKPnu3S0tAh8omuZCdkVzNAeb%2Bhky5pTKkfKu5CAvmSOFGbcZEUK1XbtxtjT3fRqHn%2FQmWTm2sw65hpHQmzDNxK8HUkXNmL%2B2U49xWIlq%2F4djOaVU7VnFi55JnockJq%2BcWLYs5YZudeUrSB1Ul9BQMWfOAJVkGLiTxvVx39sAfoR1EKpKVzdkFvZ1nvvacvP59J6D6MQc27KUx4%2FworE%2Bd%2Bypw%2BmZMH%2FptyK62R3l0TwlHoCoIEVH%2B5AWqGqWJGYlIa1fsifz5jPduovjSe7KZ7ZX%2B1wtmami2WWsmwyUWu%2BCY%2B9PoNhTgA6AEUXqM1HxUFv2MsrKEPEHJyFBpEb%2FF8yhAremjrSmAtzDX89p0Js1FJR8KNivxIiv7%2Fkw5qOLvwY6pgE4GYTUdZkM8r3d0l1Ik9YdkA2sEXC4sVl2D%2FNCVV%2FDGNT0E8%2Fh2V%2F0qfo5%2FVhwqsoimh3bXFAKznEAxNb8t5lutshvkH0ikqpFfYlSO8L5EKFnvUXzrUuu12fWcYC%2BXLNvzOe8BcRY7%2F3v8uNIBteIKwQe33KmjAS7%2Bz5%2FpMiFio4Aq6R0VhYPV%2Fj4Y0dqMYpaR5Kc%2FAGeZwDor4suWgeWbICcSzA0&X-Amz-Signature=2091cc7e91b89bd2fda138f95506d88f02fcec8703a268efce16d7b39b6a5ed3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
