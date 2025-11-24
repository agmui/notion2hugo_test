---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SN246VU%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxIE2J5V0AJnna9YSTy1XcuPepbO7DuzCHsRFBAyjQuQIhANrJDvlaRLj8ZsHvzzd83JNvtdfbfowF8GnbPOeTpma4Kv8DCEoQABoMNjM3NDIzMTgzODA1Igw1UmB6NVDTt5MAlCYq3AOXRVjPmrBD31ZEJ9Q99p9jIlY6xrFpYZiAgCHdHs%2Bn4pu3xFQ8sVB9PA%2FigMP1%2BU3iqVRSF8x3epVWJvlgIQC6etkT6psOkDX7AF6EBs4FsaxP0ZLYRl0VgWAmYt6MfL0SwvNxAofrpUEqCyXPHDcxPlBfi0s2ctS6PlZ2Fa%2FFJbcQyebSwTyRWHcUcWUXVFsF7urdC9mhobeCsFRy0BXgnSM7iBR%2F%2FlPHAYR8Y%2FhwyIu6%2BYrqClqb45SJojcsIKTduTyR6R%2F6uaS0cd3KmIZlUaSE%2FEkBsJATqKepXV%2BF4u1pVL3UGJH3m5Wn9mQ%2FCLeDiC4w0J5j%2B6dJbgwUFqCRBsPvr4%2BQKUifdjcvS9JTdCRFjlbv5ZjYMGGEUFZI0N0Fd9rxErTpmWumIm1rTph8Yh2nxI3yyZtI8l8Sc6pO4ZCRigRupcZbGYF1wuV4OuDXLbnVYq3uRO5jBvKPcrBFy7aCcdDHJF6PPU%2BLlH%2FCDT06BTgvklYVVzCyQA3VA7o6LSjW2ZrxpktgJf00TnjD1geIUiGHQtlWC0pBuMju7tjKF1A9Qvl0Fsif8aMYVd4GUjS2gl0s8%2F5UNxolVZwbQEN4ikiSB1HZyRPwRSYGHJic%2FuatrAoRLaxOrjDg3I7JBjqkAVtLvHpwjVfZUaK7bIaU1DDu7ZEGZCUQHoBDT67b4ptyqhfJ9D90cJs4kZOefCAj3jI5aRREpMhxn5nKg3s1n4HXTIlgHO6MRZpFJJXrlU53tz87FvCG1mnrPrXxrjGIc5h%2FPQJrgZE0WNFeJbwe1%2FtygM3Pq%2FKPCjPbN5tjjZ5TQYLWBLZBbh4oo6p7aDx73peoWPRzaLZoUgR3VnQrnN%2BVkura&X-Amz-Signature=b699bf0b14783ee1efbd59b79e3b4c7aa6595c7afc77c12d4647af130d9270b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SN246VU%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxIE2J5V0AJnna9YSTy1XcuPepbO7DuzCHsRFBAyjQuQIhANrJDvlaRLj8ZsHvzzd83JNvtdfbfowF8GnbPOeTpma4Kv8DCEoQABoMNjM3NDIzMTgzODA1Igw1UmB6NVDTt5MAlCYq3AOXRVjPmrBD31ZEJ9Q99p9jIlY6xrFpYZiAgCHdHs%2Bn4pu3xFQ8sVB9PA%2FigMP1%2BU3iqVRSF8x3epVWJvlgIQC6etkT6psOkDX7AF6EBs4FsaxP0ZLYRl0VgWAmYt6MfL0SwvNxAofrpUEqCyXPHDcxPlBfi0s2ctS6PlZ2Fa%2FFJbcQyebSwTyRWHcUcWUXVFsF7urdC9mhobeCsFRy0BXgnSM7iBR%2F%2FlPHAYR8Y%2FhwyIu6%2BYrqClqb45SJojcsIKTduTyR6R%2F6uaS0cd3KmIZlUaSE%2FEkBsJATqKepXV%2BF4u1pVL3UGJH3m5Wn9mQ%2FCLeDiC4w0J5j%2B6dJbgwUFqCRBsPvr4%2BQKUifdjcvS9JTdCRFjlbv5ZjYMGGEUFZI0N0Fd9rxErTpmWumIm1rTph8Yh2nxI3yyZtI8l8Sc6pO4ZCRigRupcZbGYF1wuV4OuDXLbnVYq3uRO5jBvKPcrBFy7aCcdDHJF6PPU%2BLlH%2FCDT06BTgvklYVVzCyQA3VA7o6LSjW2ZrxpktgJf00TnjD1geIUiGHQtlWC0pBuMju7tjKF1A9Qvl0Fsif8aMYVd4GUjS2gl0s8%2F5UNxolVZwbQEN4ikiSB1HZyRPwRSYGHJic%2FuatrAoRLaxOrjDg3I7JBjqkAVtLvHpwjVfZUaK7bIaU1DDu7ZEGZCUQHoBDT67b4ptyqhfJ9D90cJs4kZOefCAj3jI5aRREpMhxn5nKg3s1n4HXTIlgHO6MRZpFJJXrlU53tz87FvCG1mnrPrXxrjGIc5h%2FPQJrgZE0WNFeJbwe1%2FtygM3Pq%2FKPCjPbN5tjjZ5TQYLWBLZBbh4oo6p7aDx73peoWPRzaLZoUgR3VnQrnN%2BVkura&X-Amz-Signature=9d80fc6320b74833ff951289c3e6d428a74b43f45967045cd7c29473a1bc3c2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SN246VU%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxIE2J5V0AJnna9YSTy1XcuPepbO7DuzCHsRFBAyjQuQIhANrJDvlaRLj8ZsHvzzd83JNvtdfbfowF8GnbPOeTpma4Kv8DCEoQABoMNjM3NDIzMTgzODA1Igw1UmB6NVDTt5MAlCYq3AOXRVjPmrBD31ZEJ9Q99p9jIlY6xrFpYZiAgCHdHs%2Bn4pu3xFQ8sVB9PA%2FigMP1%2BU3iqVRSF8x3epVWJvlgIQC6etkT6psOkDX7AF6EBs4FsaxP0ZLYRl0VgWAmYt6MfL0SwvNxAofrpUEqCyXPHDcxPlBfi0s2ctS6PlZ2Fa%2FFJbcQyebSwTyRWHcUcWUXVFsF7urdC9mhobeCsFRy0BXgnSM7iBR%2F%2FlPHAYR8Y%2FhwyIu6%2BYrqClqb45SJojcsIKTduTyR6R%2F6uaS0cd3KmIZlUaSE%2FEkBsJATqKepXV%2BF4u1pVL3UGJH3m5Wn9mQ%2FCLeDiC4w0J5j%2B6dJbgwUFqCRBsPvr4%2BQKUifdjcvS9JTdCRFjlbv5ZjYMGGEUFZI0N0Fd9rxErTpmWumIm1rTph8Yh2nxI3yyZtI8l8Sc6pO4ZCRigRupcZbGYF1wuV4OuDXLbnVYq3uRO5jBvKPcrBFy7aCcdDHJF6PPU%2BLlH%2FCDT06BTgvklYVVzCyQA3VA7o6LSjW2ZrxpktgJf00TnjD1geIUiGHQtlWC0pBuMju7tjKF1A9Qvl0Fsif8aMYVd4GUjS2gl0s8%2F5UNxolVZwbQEN4ikiSB1HZyRPwRSYGHJic%2FuatrAoRLaxOrjDg3I7JBjqkAVtLvHpwjVfZUaK7bIaU1DDu7ZEGZCUQHoBDT67b4ptyqhfJ9D90cJs4kZOefCAj3jI5aRREpMhxn5nKg3s1n4HXTIlgHO6MRZpFJJXrlU53tz87FvCG1mnrPrXxrjGIc5h%2FPQJrgZE0WNFeJbwe1%2FtygM3Pq%2FKPCjPbN5tjjZ5TQYLWBLZBbh4oo6p7aDx73peoWPRzaLZoUgR3VnQrnN%2BVkura&X-Amz-Signature=bbd6cb3c59dacdbcfae0932ba26cf885876badec44d17a746f2f9f786d4ea10c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
