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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM62NEH5%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T110203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8ExywjZvMf0dRDahFkPlJk%2Ba4301Sqbs2zjW%2FLSNAXQIhANbKCFenVM2KAVSU6GhuuoUr9y6svkPytvz%2FqMjibpsDKv8DCBQQABoMNjM3NDIzMTgzODA1IgyCg7T0PW7rNPwJCZ8q3APR%2FCk8D6nU7yb%2FE%2BdrtMJKOwmYgHIPIIN1VkyC6I0caKPBDm3QJ7vmv2VdzkKF2NDXq8ROlvadz8tvx5jhd5mbJ4A7hr93uGfhKVDtxcYDSHfHdaKjqC6Kd5U6H3KO0CnUL3ncJTqu2N9lA3d%2F83TuklKiOV6MdaPdTjoOD7%2BTg2vl5CdzWwK4Lt0AgEupKDMHtTpOaLUSqrNMTuxDNVmSxLuEws835MaOcCW4DoueCoxOmQRi8VzdHpHabarQJ4VaabWpXKTZdOD1i%2FNUizyVlYtu4kmu3FUYKK1LIp6o6jHERyKVU2ZRg4XkLdM6LOm138whmFqPtkhf0E2EJLUYhApumlHGSSHUm0BZCiheQdzLgdDaTN2DEXbCvHl9%2FthhAGyg5DgVJ%2Fj6qLDxeRJIZ1x2cVyBb3yM3aov5wGahgFW1F5MQuPE5zKl2K5jgMS8gkDyf1LIi5fcxTOdyr8pWXBb6%2BhaFRL%2FI9l%2F7dNUxL1lR%2FBaOKsX%2FhlMO3V0j71xMeOnIr9GKozMXYcJ8pz5ppgv7Wyf5AMtoqXMVmu%2BG%2FY1x%2BQxBkwmTYKoa3qV%2FozUA4cy43oB4oJeXUCxUeOpczMOyER1gSAlABiLCiSBc17m2MQIIwJ0Ww24zTCFstW%2BBjqkATAjToNEDqI3XQP%2B40%2FMJDYUh8xdyhxvwv1pOX6BcPeVC5aF%2BJknp2zekKxkaQDKf%2F9JqMb5S3DTuabNrX7IwptCIFKD6vkGsHooHdQYvTuw5KBqO%2B0KGBfqj58iZZIvvHe1L1sLQmEtwQPce%2Bg%2BtDe00li0T%2B9nNCocjmkoDQjmY0BzPBm3SYhrNnWZVu3bzEI9V3mPE2bIXXYqSc2qS87zDE0Q&X-Amz-Signature=8d193b69e457c5c948570ba8d80a03af9b8186cdf4c14ac4cd995923da672c1a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM62NEH5%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T110203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8ExywjZvMf0dRDahFkPlJk%2Ba4301Sqbs2zjW%2FLSNAXQIhANbKCFenVM2KAVSU6GhuuoUr9y6svkPytvz%2FqMjibpsDKv8DCBQQABoMNjM3NDIzMTgzODA1IgyCg7T0PW7rNPwJCZ8q3APR%2FCk8D6nU7yb%2FE%2BdrtMJKOwmYgHIPIIN1VkyC6I0caKPBDm3QJ7vmv2VdzkKF2NDXq8ROlvadz8tvx5jhd5mbJ4A7hr93uGfhKVDtxcYDSHfHdaKjqC6Kd5U6H3KO0CnUL3ncJTqu2N9lA3d%2F83TuklKiOV6MdaPdTjoOD7%2BTg2vl5CdzWwK4Lt0AgEupKDMHtTpOaLUSqrNMTuxDNVmSxLuEws835MaOcCW4DoueCoxOmQRi8VzdHpHabarQJ4VaabWpXKTZdOD1i%2FNUizyVlYtu4kmu3FUYKK1LIp6o6jHERyKVU2ZRg4XkLdM6LOm138whmFqPtkhf0E2EJLUYhApumlHGSSHUm0BZCiheQdzLgdDaTN2DEXbCvHl9%2FthhAGyg5DgVJ%2Fj6qLDxeRJIZ1x2cVyBb3yM3aov5wGahgFW1F5MQuPE5zKl2K5jgMS8gkDyf1LIi5fcxTOdyr8pWXBb6%2BhaFRL%2FI9l%2F7dNUxL1lR%2FBaOKsX%2FhlMO3V0j71xMeOnIr9GKozMXYcJ8pz5ppgv7Wyf5AMtoqXMVmu%2BG%2FY1x%2BQxBkwmTYKoa3qV%2FozUA4cy43oB4oJeXUCxUeOpczMOyER1gSAlABiLCiSBc17m2MQIIwJ0Ww24zTCFstW%2BBjqkATAjToNEDqI3XQP%2B40%2FMJDYUh8xdyhxvwv1pOX6BcPeVC5aF%2BJknp2zekKxkaQDKf%2F9JqMb5S3DTuabNrX7IwptCIFKD6vkGsHooHdQYvTuw5KBqO%2B0KGBfqj58iZZIvvHe1L1sLQmEtwQPce%2Bg%2BtDe00li0T%2B9nNCocjmkoDQjmY0BzPBm3SYhrNnWZVu3bzEI9V3mPE2bIXXYqSc2qS87zDE0Q&X-Amz-Signature=deef971240e19a2889f4891ba571ef5c6ca6b23f5ca6b26cb30b57b2763c0554&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM62NEH5%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T110203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8ExywjZvMf0dRDahFkPlJk%2Ba4301Sqbs2zjW%2FLSNAXQIhANbKCFenVM2KAVSU6GhuuoUr9y6svkPytvz%2FqMjibpsDKv8DCBQQABoMNjM3NDIzMTgzODA1IgyCg7T0PW7rNPwJCZ8q3APR%2FCk8D6nU7yb%2FE%2BdrtMJKOwmYgHIPIIN1VkyC6I0caKPBDm3QJ7vmv2VdzkKF2NDXq8ROlvadz8tvx5jhd5mbJ4A7hr93uGfhKVDtxcYDSHfHdaKjqC6Kd5U6H3KO0CnUL3ncJTqu2N9lA3d%2F83TuklKiOV6MdaPdTjoOD7%2BTg2vl5CdzWwK4Lt0AgEupKDMHtTpOaLUSqrNMTuxDNVmSxLuEws835MaOcCW4DoueCoxOmQRi8VzdHpHabarQJ4VaabWpXKTZdOD1i%2FNUizyVlYtu4kmu3FUYKK1LIp6o6jHERyKVU2ZRg4XkLdM6LOm138whmFqPtkhf0E2EJLUYhApumlHGSSHUm0BZCiheQdzLgdDaTN2DEXbCvHl9%2FthhAGyg5DgVJ%2Fj6qLDxeRJIZ1x2cVyBb3yM3aov5wGahgFW1F5MQuPE5zKl2K5jgMS8gkDyf1LIi5fcxTOdyr8pWXBb6%2BhaFRL%2FI9l%2F7dNUxL1lR%2FBaOKsX%2FhlMO3V0j71xMeOnIr9GKozMXYcJ8pz5ppgv7Wyf5AMtoqXMVmu%2BG%2FY1x%2BQxBkwmTYKoa3qV%2FozUA4cy43oB4oJeXUCxUeOpczMOyER1gSAlABiLCiSBc17m2MQIIwJ0Ww24zTCFstW%2BBjqkATAjToNEDqI3XQP%2B40%2FMJDYUh8xdyhxvwv1pOX6BcPeVC5aF%2BJknp2zekKxkaQDKf%2F9JqMb5S3DTuabNrX7IwptCIFKD6vkGsHooHdQYvTuw5KBqO%2B0KGBfqj58iZZIvvHe1L1sLQmEtwQPce%2Bg%2BtDe00li0T%2B9nNCocjmkoDQjmY0BzPBm3SYhrNnWZVu3bzEI9V3mPE2bIXXYqSc2qS87zDE0Q&X-Amz-Signature=d4b07d540abd1a5834f30bf3da4e2cf2ca484a5a23c970bf15d12e2f9700c5cc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
