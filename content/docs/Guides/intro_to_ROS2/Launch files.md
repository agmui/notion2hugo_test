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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRGP5DCN%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T121446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDWsJCOXEo%2Bo%2BjfXzEwN6c8xNRNf20rzrPMOGw9T4zCgIgeV5V7EnmxZW3BPtj4hEzOOW4ufdiP86nk%2F8xZD5aZM4qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJF3Zz2GVSkeljcpTCrcAxs480%2F8VVS2JCKF2UtI5zImtdUILCHbxnseGWlbC02Wh4%2FXGXkp1C3BjlK0QHXWO%2FKVdbJK4Q35%2FRjmSu79xHRmf95czYkZ4xeRb2MV5qFyzvF5t4XE16MPo5%2BDMDNckcy3gkcWvQOaZpVYvQ6pRgzveu8Rzl%2B2qRdLQkA2xS4buyXl0el7zA0DQU%2FKh3BPyqettLIkrEN4QUcJla%2FvmOk5LMt2heodfmIaA9%2B0xWxNqBsKrvE7Jx1qix%2B2cVpfjamcssRwtSS0A8%2B95DOyVtagkNPiQiTvVAcj1j3VjaA2U74BaDe0xysq9utjDGD%2Bp%2F9SxFEOBUcmmSHPrWc78VCzZ5OvI5HpSRb8%2Ffk2uMYjt4ZzcGR86HmEhMwl9MgTQszm8DnP4V14%2FsxDA5FGX7pKCzkWkUiue9cXDNW2MDpYFJjPOFH8qyjHrIKpLcbmZChZVSC%2Bzs8NGxjZfcEAok8oRRzmyzEU%2FWRv6k09tii6l8xiY8rADwnoV19dWwxeJcxaSjQwNGn5ND6QSHYYh%2FXkZfhEak1hYkxNAKfToVSflveSoEDc4q%2BZAjqFNxOIW6uH3%2BBBV%2FYvYzl2YUckyzga2w7nBxmtRIK%2BLhfb1mZ1e4HEXW0KztqIQUm0MPmclr4GOqUBZeyd0lQiDqvuAo577TDMS01ktFFnW2z4qfHh9H8fXS0RzspKJBb1iTcLbWvl4Wo5sB0rpvT%2BS2odpusPuVnHlEDZMPVaf7FzT8QFWeKrmwWaxbJmnfXEegzBcMRhl%2B4TFpHQJ7JraxV6%2BQmkczvCFDuL9Kp12QxXyAThSR2pB69yaWe3ywOKEBy%2FQ%2FePKmaOOKK9Ht89hLL1ugvdecMLvqtGDGyi&X-Amz-Signature=020b01efd61f61819bf0f8026685ed3bc5d7c6788caa93a8a3f9184a21909f08&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRGP5DCN%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T121446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDWsJCOXEo%2Bo%2BjfXzEwN6c8xNRNf20rzrPMOGw9T4zCgIgeV5V7EnmxZW3BPtj4hEzOOW4ufdiP86nk%2F8xZD5aZM4qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJF3Zz2GVSkeljcpTCrcAxs480%2F8VVS2JCKF2UtI5zImtdUILCHbxnseGWlbC02Wh4%2FXGXkp1C3BjlK0QHXWO%2FKVdbJK4Q35%2FRjmSu79xHRmf95czYkZ4xeRb2MV5qFyzvF5t4XE16MPo5%2BDMDNckcy3gkcWvQOaZpVYvQ6pRgzveu8Rzl%2B2qRdLQkA2xS4buyXl0el7zA0DQU%2FKh3BPyqettLIkrEN4QUcJla%2FvmOk5LMt2heodfmIaA9%2B0xWxNqBsKrvE7Jx1qix%2B2cVpfjamcssRwtSS0A8%2B95DOyVtagkNPiQiTvVAcj1j3VjaA2U74BaDe0xysq9utjDGD%2Bp%2F9SxFEOBUcmmSHPrWc78VCzZ5OvI5HpSRb8%2Ffk2uMYjt4ZzcGR86HmEhMwl9MgTQszm8DnP4V14%2FsxDA5FGX7pKCzkWkUiue9cXDNW2MDpYFJjPOFH8qyjHrIKpLcbmZChZVSC%2Bzs8NGxjZfcEAok8oRRzmyzEU%2FWRv6k09tii6l8xiY8rADwnoV19dWwxeJcxaSjQwNGn5ND6QSHYYh%2FXkZfhEak1hYkxNAKfToVSflveSoEDc4q%2BZAjqFNxOIW6uH3%2BBBV%2FYvYzl2YUckyzga2w7nBxmtRIK%2BLhfb1mZ1e4HEXW0KztqIQUm0MPmclr4GOqUBZeyd0lQiDqvuAo577TDMS01ktFFnW2z4qfHh9H8fXS0RzspKJBb1iTcLbWvl4Wo5sB0rpvT%2BS2odpusPuVnHlEDZMPVaf7FzT8QFWeKrmwWaxbJmnfXEegzBcMRhl%2B4TFpHQJ7JraxV6%2BQmkczvCFDuL9Kp12QxXyAThSR2pB69yaWe3ywOKEBy%2FQ%2FePKmaOOKK9Ht89hLL1ugvdecMLvqtGDGyi&X-Amz-Signature=9542a8dd79b19e1bba0741b8095de0df0d19be5db663c49a32b1abe56e149d18&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRGP5DCN%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T121446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDWsJCOXEo%2Bo%2BjfXzEwN6c8xNRNf20rzrPMOGw9T4zCgIgeV5V7EnmxZW3BPtj4hEzOOW4ufdiP86nk%2F8xZD5aZM4qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJF3Zz2GVSkeljcpTCrcAxs480%2F8VVS2JCKF2UtI5zImtdUILCHbxnseGWlbC02Wh4%2FXGXkp1C3BjlK0QHXWO%2FKVdbJK4Q35%2FRjmSu79xHRmf95czYkZ4xeRb2MV5qFyzvF5t4XE16MPo5%2BDMDNckcy3gkcWvQOaZpVYvQ6pRgzveu8Rzl%2B2qRdLQkA2xS4buyXl0el7zA0DQU%2FKh3BPyqettLIkrEN4QUcJla%2FvmOk5LMt2heodfmIaA9%2B0xWxNqBsKrvE7Jx1qix%2B2cVpfjamcssRwtSS0A8%2B95DOyVtagkNPiQiTvVAcj1j3VjaA2U74BaDe0xysq9utjDGD%2Bp%2F9SxFEOBUcmmSHPrWc78VCzZ5OvI5HpSRb8%2Ffk2uMYjt4ZzcGR86HmEhMwl9MgTQszm8DnP4V14%2FsxDA5FGX7pKCzkWkUiue9cXDNW2MDpYFJjPOFH8qyjHrIKpLcbmZChZVSC%2Bzs8NGxjZfcEAok8oRRzmyzEU%2FWRv6k09tii6l8xiY8rADwnoV19dWwxeJcxaSjQwNGn5ND6QSHYYh%2FXkZfhEak1hYkxNAKfToVSflveSoEDc4q%2BZAjqFNxOIW6uH3%2BBBV%2FYvYzl2YUckyzga2w7nBxmtRIK%2BLhfb1mZ1e4HEXW0KztqIQUm0MPmclr4GOqUBZeyd0lQiDqvuAo577TDMS01ktFFnW2z4qfHh9H8fXS0RzspKJBb1iTcLbWvl4Wo5sB0rpvT%2BS2odpusPuVnHlEDZMPVaf7FzT8QFWeKrmwWaxbJmnfXEegzBcMRhl%2B4TFpHQJ7JraxV6%2BQmkczvCFDuL9Kp12QxXyAThSR2pB69yaWe3ywOKEBy%2FQ%2FePKmaOOKK9Ht89hLL1ugvdecMLvqtGDGyi&X-Amz-Signature=9b8acae4b687cd0686dffb2382c1fb4adb7f9bca755e9858afa0e751e142d783&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
