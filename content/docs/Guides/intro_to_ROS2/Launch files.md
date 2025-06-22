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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX4SDTPV%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIFNx7h%2FeJKYPoXTpOdESu58BOSSz8bIOgIS6GM9%2B01KNAiEA866mJgbCKH5Oxg6ZQV9SO2iPjKa99Am4o9kt6kcmn98qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2FnI3Cti7CNrdmcISrcA8QgrYndXSlbuaVKR1vsJ%2FqLma7YcwcJosvfoPjnzZStFPHJbOwBLOyG6TBX1sgql7Ojp0XaIZYQUc%2B8wB79ZR4RtygxxA87CC4O5DhvZu2pduz3rqk0R3%2FnQ58hgW6QvYdxbzL1icVGI%2FrMxUzCHe9lZANh5SanfSLP0ud2Q74xNO1btTgkZA0iLs1dm%2FrU%2F%2FCHpeexAKXLHQAZZ2Q4jWSwmh3w4rk22SgY1PsIc82SZiaQeKCmQ%2Fhfurmg0mOKhBIaE1FQhPcylBQKMxGQKgDGUEFlSd%2BzIm6Y5WB%2BwtqWZTQszN%2FUmrsXc7NLtmRMRiz6YwtBg8THwk72AI%2Fkc8T9oX%2FhgCxTT9lKW6WB94PJMCUhck6Nghr6nNcGVeg8CHFYZhfGkJeKSSZZWID5NrDK3yThXeyuYzuMN7wn%2FXIhBLFjuf7fXM%2F1oG98CHUd8D4%2B6HIhuwl4wEvWrCFvSgdBcZS8RqqnPv81aFLK0%2BMwv0wOJLAw%2F9FRwOA%2FdycXPTTmYr8uTXV2TRa0X%2FkVEgoIvO7wikkxdwkN5flTun802ku1lhly16BqXEi4kSfVdolf9HyjmxTuR6EcCxaMgJsylrc5el5ycwdPQPz04S0sMCRiaacl0LqvBncfMIGU4cIGOqUBJlryWbV2eDUGavkbM8wkqSwdmo7thKowv8pVmJ%2BWXcGz1PSq%2BMIFHSMHeh4SBQoLk9T28Q3oQtJXd7WU0cat5dmOiyTnfLwzrkHN4r8zx1NqoFGc8orW7jK%2B%2BVnt8OZg%2Bqh1ya1lZ3821Je9cODm8QHBbhIODGPDsSqA5rUYbQF%2FMQPrYbgBMlDd1eqP57%2FiaqpEjQEM5YQxPllRYVwsrd2ueG1i&X-Amz-Signature=c81787e5d5efc638e567fd3ff2fa6e8d76e9b806d0ea38fb2a8447662a96ae8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX4SDTPV%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIFNx7h%2FeJKYPoXTpOdESu58BOSSz8bIOgIS6GM9%2B01KNAiEA866mJgbCKH5Oxg6ZQV9SO2iPjKa99Am4o9kt6kcmn98qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2FnI3Cti7CNrdmcISrcA8QgrYndXSlbuaVKR1vsJ%2FqLma7YcwcJosvfoPjnzZStFPHJbOwBLOyG6TBX1sgql7Ojp0XaIZYQUc%2B8wB79ZR4RtygxxA87CC4O5DhvZu2pduz3rqk0R3%2FnQ58hgW6QvYdxbzL1icVGI%2FrMxUzCHe9lZANh5SanfSLP0ud2Q74xNO1btTgkZA0iLs1dm%2FrU%2F%2FCHpeexAKXLHQAZZ2Q4jWSwmh3w4rk22SgY1PsIc82SZiaQeKCmQ%2Fhfurmg0mOKhBIaE1FQhPcylBQKMxGQKgDGUEFlSd%2BzIm6Y5WB%2BwtqWZTQszN%2FUmrsXc7NLtmRMRiz6YwtBg8THwk72AI%2Fkc8T9oX%2FhgCxTT9lKW6WB94PJMCUhck6Nghr6nNcGVeg8CHFYZhfGkJeKSSZZWID5NrDK3yThXeyuYzuMN7wn%2FXIhBLFjuf7fXM%2F1oG98CHUd8D4%2B6HIhuwl4wEvWrCFvSgdBcZS8RqqnPv81aFLK0%2BMwv0wOJLAw%2F9FRwOA%2FdycXPTTmYr8uTXV2TRa0X%2FkVEgoIvO7wikkxdwkN5flTun802ku1lhly16BqXEi4kSfVdolf9HyjmxTuR6EcCxaMgJsylrc5el5ycwdPQPz04S0sMCRiaacl0LqvBncfMIGU4cIGOqUBJlryWbV2eDUGavkbM8wkqSwdmo7thKowv8pVmJ%2BWXcGz1PSq%2BMIFHSMHeh4SBQoLk9T28Q3oQtJXd7WU0cat5dmOiyTnfLwzrkHN4r8zx1NqoFGc8orW7jK%2B%2BVnt8OZg%2Bqh1ya1lZ3821Je9cODm8QHBbhIODGPDsSqA5rUYbQF%2FMQPrYbgBMlDd1eqP57%2FiaqpEjQEM5YQxPllRYVwsrd2ueG1i&X-Amz-Signature=6cc6c20e0dcb093df44db21d403e366401f5f3f4988c6afb2d367c46926e2a36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX4SDTPV%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIFNx7h%2FeJKYPoXTpOdESu58BOSSz8bIOgIS6GM9%2B01KNAiEA866mJgbCKH5Oxg6ZQV9SO2iPjKa99Am4o9kt6kcmn98qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2FnI3Cti7CNrdmcISrcA8QgrYndXSlbuaVKR1vsJ%2FqLma7YcwcJosvfoPjnzZStFPHJbOwBLOyG6TBX1sgql7Ojp0XaIZYQUc%2B8wB79ZR4RtygxxA87CC4O5DhvZu2pduz3rqk0R3%2FnQ58hgW6QvYdxbzL1icVGI%2FrMxUzCHe9lZANh5SanfSLP0ud2Q74xNO1btTgkZA0iLs1dm%2FrU%2F%2FCHpeexAKXLHQAZZ2Q4jWSwmh3w4rk22SgY1PsIc82SZiaQeKCmQ%2Fhfurmg0mOKhBIaE1FQhPcylBQKMxGQKgDGUEFlSd%2BzIm6Y5WB%2BwtqWZTQszN%2FUmrsXc7NLtmRMRiz6YwtBg8THwk72AI%2Fkc8T9oX%2FhgCxTT9lKW6WB94PJMCUhck6Nghr6nNcGVeg8CHFYZhfGkJeKSSZZWID5NrDK3yThXeyuYzuMN7wn%2FXIhBLFjuf7fXM%2F1oG98CHUd8D4%2B6HIhuwl4wEvWrCFvSgdBcZS8RqqnPv81aFLK0%2BMwv0wOJLAw%2F9FRwOA%2FdycXPTTmYr8uTXV2TRa0X%2FkVEgoIvO7wikkxdwkN5flTun802ku1lhly16BqXEi4kSfVdolf9HyjmxTuR6EcCxaMgJsylrc5el5ycwdPQPz04S0sMCRiaacl0LqvBncfMIGU4cIGOqUBJlryWbV2eDUGavkbM8wkqSwdmo7thKowv8pVmJ%2BWXcGz1PSq%2BMIFHSMHeh4SBQoLk9T28Q3oQtJXd7WU0cat5dmOiyTnfLwzrkHN4r8zx1NqoFGc8orW7jK%2B%2BVnt8OZg%2Bqh1ya1lZ3821Je9cODm8QHBbhIODGPDsSqA5rUYbQF%2FMQPrYbgBMlDd1eqP57%2FiaqpEjQEM5YQxPllRYVwsrd2ueG1i&X-Amz-Signature=303a62a45660ac541477a85096fc98cc654668539a1653d347a23aa94bff69ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
