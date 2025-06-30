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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6LRPMP6%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T132554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXCLVEIgNEMvOPh2s3%2Fgc94vR5Hd9%2FhTZb%2FOdlixl1MAiEAmhfSp9N2F9%2BglIfSkTeTwm2xRJCEJt5o3oOHlZvI1P0qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEUkyj85T2r9knv2CrcA1wG%2BFHkliyHZ96BBTwY648ZQtd0aVD7Lnt9WQ9P1isDQ91MCl2tnm6X9sWjnHmcRWnZDbLZEO9hKU8ewBSJnpMLPT8ZAwf6jj60P%2FQ3d%2B8Teb1R%2BuIYVAIHlgCqMLvbjKOmwujVijmsTNtfjeaYVLJV6E8Tsz3h9p6snXP1Kyt5yzdeiy3xFJev87c2AolNRG%2F6nUkQ8dMBrNg3H2kOEp5uU%2FfvP7s%2BLzJw91Ap1uFm69vUXmIsVMXOtx9yXQmZXKbm%2Bh428IFTQK1egofJaL53UsxaCBTpTG7kNLdk1BBRfwqzrsxyIDZT5VZ0cJ0bwytnBg%2Bh0EKa5yCx%2Bb4DMxCWeeGigQAGaxP9M7V5BLI9duxe%2FedgKkgfK1Awpl8cBtua1Wd2OtFhzPHA%2BtpHeXE3QJYM1ygjY004keOL0bI1KTUS5EUiAQZxjGHlkgRvDW0WgvYCZswkNqQ2ltFrEsYBp3rvQ3ZAnLIL%2BeL3udrX89cGrkj6gR7HMj5RgMOO%2Fw1XMpVPXEgwEvokq%2BmaKt%2B6%2BGp%2F6l8POGRG1qLoAEkPYXmULWtSKeWTxax1hiI%2FmRhvZ0jM1IgnSELa%2FbKXHqWhiU9dnFZAjBvCikiKd3FaYQL330K96bHS%2FpsbMKOFisMGOqUBE5xO6AUW%2BRU1YJDJtsdEJS2vPi3aDmt7DuF3XQnj2zknes8BcWARRjAfnEDZEBkVkYQw1i0am1Ioz4Nz%2F%2F66akYU%2FCD2Bas5kTN1nqvaoJtQyUaTQMfQfF8xGYIvcm0rPMiFxvbJkDGaGuCxEM632njHXPlhGCfqMwm7%2Bs1GdM4AIQvMN6H1l3%2BrIrd3zfzDYO9oY%2FzRkogqbSSIcPb9q%2BokrdFg&X-Amz-Signature=6f04bac4220d0a3bfa4b9c0cb39570ece0a14def6dfa3d23332389936db6677f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6LRPMP6%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T132554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXCLVEIgNEMvOPh2s3%2Fgc94vR5Hd9%2FhTZb%2FOdlixl1MAiEAmhfSp9N2F9%2BglIfSkTeTwm2xRJCEJt5o3oOHlZvI1P0qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEUkyj85T2r9knv2CrcA1wG%2BFHkliyHZ96BBTwY648ZQtd0aVD7Lnt9WQ9P1isDQ91MCl2tnm6X9sWjnHmcRWnZDbLZEO9hKU8ewBSJnpMLPT8ZAwf6jj60P%2FQ3d%2B8Teb1R%2BuIYVAIHlgCqMLvbjKOmwujVijmsTNtfjeaYVLJV6E8Tsz3h9p6snXP1Kyt5yzdeiy3xFJev87c2AolNRG%2F6nUkQ8dMBrNg3H2kOEp5uU%2FfvP7s%2BLzJw91Ap1uFm69vUXmIsVMXOtx9yXQmZXKbm%2Bh428IFTQK1egofJaL53UsxaCBTpTG7kNLdk1BBRfwqzrsxyIDZT5VZ0cJ0bwytnBg%2Bh0EKa5yCx%2Bb4DMxCWeeGigQAGaxP9M7V5BLI9duxe%2FedgKkgfK1Awpl8cBtua1Wd2OtFhzPHA%2BtpHeXE3QJYM1ygjY004keOL0bI1KTUS5EUiAQZxjGHlkgRvDW0WgvYCZswkNqQ2ltFrEsYBp3rvQ3ZAnLIL%2BeL3udrX89cGrkj6gR7HMj5RgMOO%2Fw1XMpVPXEgwEvokq%2BmaKt%2B6%2BGp%2F6l8POGRG1qLoAEkPYXmULWtSKeWTxax1hiI%2FmRhvZ0jM1IgnSELa%2FbKXHqWhiU9dnFZAjBvCikiKd3FaYQL330K96bHS%2FpsbMKOFisMGOqUBE5xO6AUW%2BRU1YJDJtsdEJS2vPi3aDmt7DuF3XQnj2zknes8BcWARRjAfnEDZEBkVkYQw1i0am1Ioz4Nz%2F%2F66akYU%2FCD2Bas5kTN1nqvaoJtQyUaTQMfQfF8xGYIvcm0rPMiFxvbJkDGaGuCxEM632njHXPlhGCfqMwm7%2Bs1GdM4AIQvMN6H1l3%2BrIrd3zfzDYO9oY%2FzRkogqbSSIcPb9q%2BokrdFg&X-Amz-Signature=e50669fef0bba33d45032ef2db40519ecf863e3d1a350c80a617adb900b13c1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6LRPMP6%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T132554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXCLVEIgNEMvOPh2s3%2Fgc94vR5Hd9%2FhTZb%2FOdlixl1MAiEAmhfSp9N2F9%2BglIfSkTeTwm2xRJCEJt5o3oOHlZvI1P0qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEUkyj85T2r9knv2CrcA1wG%2BFHkliyHZ96BBTwY648ZQtd0aVD7Lnt9WQ9P1isDQ91MCl2tnm6X9sWjnHmcRWnZDbLZEO9hKU8ewBSJnpMLPT8ZAwf6jj60P%2FQ3d%2B8Teb1R%2BuIYVAIHlgCqMLvbjKOmwujVijmsTNtfjeaYVLJV6E8Tsz3h9p6snXP1Kyt5yzdeiy3xFJev87c2AolNRG%2F6nUkQ8dMBrNg3H2kOEp5uU%2FfvP7s%2BLzJw91Ap1uFm69vUXmIsVMXOtx9yXQmZXKbm%2Bh428IFTQK1egofJaL53UsxaCBTpTG7kNLdk1BBRfwqzrsxyIDZT5VZ0cJ0bwytnBg%2Bh0EKa5yCx%2Bb4DMxCWeeGigQAGaxP9M7V5BLI9duxe%2FedgKkgfK1Awpl8cBtua1Wd2OtFhzPHA%2BtpHeXE3QJYM1ygjY004keOL0bI1KTUS5EUiAQZxjGHlkgRvDW0WgvYCZswkNqQ2ltFrEsYBp3rvQ3ZAnLIL%2BeL3udrX89cGrkj6gR7HMj5RgMOO%2Fw1XMpVPXEgwEvokq%2BmaKt%2B6%2BGp%2F6l8POGRG1qLoAEkPYXmULWtSKeWTxax1hiI%2FmRhvZ0jM1IgnSELa%2FbKXHqWhiU9dnFZAjBvCikiKd3FaYQL330K96bHS%2FpsbMKOFisMGOqUBE5xO6AUW%2BRU1YJDJtsdEJS2vPi3aDmt7DuF3XQnj2zknes8BcWARRjAfnEDZEBkVkYQw1i0am1Ioz4Nz%2F%2F66akYU%2FCD2Bas5kTN1nqvaoJtQyUaTQMfQfF8xGYIvcm0rPMiFxvbJkDGaGuCxEM632njHXPlhGCfqMwm7%2Bs1GdM4AIQvMN6H1l3%2BrIrd3zfzDYO9oY%2FzRkogqbSSIcPb9q%2BokrdFg&X-Amz-Signature=90714f51678ba9d976c900a644d3c5149f3c695fe2c03aeca992a5c960feac1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
