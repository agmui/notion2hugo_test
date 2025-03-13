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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ENW4SSN%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T161002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUJcXLsazCAdc%2FR7Y2YybQtln26mDa8%2FoVymRSGo4n2QIgNY9Cl82Zm5ap%2FrM2d8tNezZ4bX0nKnEDRAA4w%2FZ18yoqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEe4N2VYLbY5KypgYyrcA9vg78fMmVxBlKi3rlvcg2tysJ0aQm4IO0zmYE59yCUftK53%2B8rztcu9rIlbnHwgdRKnWTkLdijgd4dP8t0rrqnM8x5dJrU2%2FG5OhrqvLPz0RqcMil9svVy8v6evxqUFY%2FlQ1tRiRGGUwJaEzwUbmIKi4CtXG4jG53MRXPJ6ilhqLXUD3e4boQYLu2cZUaA6G9PH%2B9RkV27MCl8s0RY4aVn1Kb8ft%2FVAVmtJThFku%2BUO8zgs2BfnCItOmq%2FPGG%2F23wkwMEg04xaR6LmbnWzJIXjtU3D1Y%2FzWhXLkvS%2Bg8MJHixWgvZm5P5WBd%2Bp2k7con%2FpShh9kBK9lCXrRPN%2BkmpNcNzsRGYH%2FQtpMqyiG%2FBU7Z3pt%2BCn%2FnofNgDNVnLq3i2MvrzPh4UTWKrmVf3NZGRhExxVziUiggwTIEn0brbF%2BQOPlGVBjb9vVu3QDIy2meX591pmydCDZbh5RGIlh0bksl%2F7Sq3VHjrY1hCZDChts8MM2cOHoUQ%2B1zkktNrK%2F0dOvpLm%2FTvPpdQcOJYnQ%2BqAJKyJL%2FplmRUlgzBngm4L1V%2F30qCsev9fbztBTFVPaxM%2Bk%2F3fqKuRQXMPpzK556aKkYlIhjjENstnntHtcOa%2Bt10EKvdUwggQ2wFfkMJ33y74GOqUBUgCiTwWIrCT%2B8dFU7gpLgDJgIBD5gr%2F%2BDkWZtMPRKmolJgxcnLVhBd0kImoAEMEcBZsXd01iBvAm1gPDu5qLJ%2BQQn1Ba6xAn1r0qmBttHNWQ1Fw%2BNEPWxtOahkjcHwQ78tEmf7zuW6VcG%2BKXML2TF0jkgSu94gBs0K5uwIxFcoGp%2FGjC7I1XHj9HPCXko%2BSY%2FB4ZZQV5g4zRJtE0fjX8%2BvXJa1uB&X-Amz-Signature=c9f4755bc578d6121a64a67bbeed37c3741bca352dda524cbf37b15337533668&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ENW4SSN%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T161002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUJcXLsazCAdc%2FR7Y2YybQtln26mDa8%2FoVymRSGo4n2QIgNY9Cl82Zm5ap%2FrM2d8tNezZ4bX0nKnEDRAA4w%2FZ18yoqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEe4N2VYLbY5KypgYyrcA9vg78fMmVxBlKi3rlvcg2tysJ0aQm4IO0zmYE59yCUftK53%2B8rztcu9rIlbnHwgdRKnWTkLdijgd4dP8t0rrqnM8x5dJrU2%2FG5OhrqvLPz0RqcMil9svVy8v6evxqUFY%2FlQ1tRiRGGUwJaEzwUbmIKi4CtXG4jG53MRXPJ6ilhqLXUD3e4boQYLu2cZUaA6G9PH%2B9RkV27MCl8s0RY4aVn1Kb8ft%2FVAVmtJThFku%2BUO8zgs2BfnCItOmq%2FPGG%2F23wkwMEg04xaR6LmbnWzJIXjtU3D1Y%2FzWhXLkvS%2Bg8MJHixWgvZm5P5WBd%2Bp2k7con%2FpShh9kBK9lCXrRPN%2BkmpNcNzsRGYH%2FQtpMqyiG%2FBU7Z3pt%2BCn%2FnofNgDNVnLq3i2MvrzPh4UTWKrmVf3NZGRhExxVziUiggwTIEn0brbF%2BQOPlGVBjb9vVu3QDIy2meX591pmydCDZbh5RGIlh0bksl%2F7Sq3VHjrY1hCZDChts8MM2cOHoUQ%2B1zkktNrK%2F0dOvpLm%2FTvPpdQcOJYnQ%2BqAJKyJL%2FplmRUlgzBngm4L1V%2F30qCsev9fbztBTFVPaxM%2Bk%2F3fqKuRQXMPpzK556aKkYlIhjjENstnntHtcOa%2Bt10EKvdUwggQ2wFfkMJ33y74GOqUBUgCiTwWIrCT%2B8dFU7gpLgDJgIBD5gr%2F%2BDkWZtMPRKmolJgxcnLVhBd0kImoAEMEcBZsXd01iBvAm1gPDu5qLJ%2BQQn1Ba6xAn1r0qmBttHNWQ1Fw%2BNEPWxtOahkjcHwQ78tEmf7zuW6VcG%2BKXML2TF0jkgSu94gBs0K5uwIxFcoGp%2FGjC7I1XHj9HPCXko%2BSY%2FB4ZZQV5g4zRJtE0fjX8%2BvXJa1uB&X-Amz-Signature=b70b1db0f0d48dc915c68c4c281bf4f65b5f9c0c252113befddc249798a075bb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ENW4SSN%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T161002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUJcXLsazCAdc%2FR7Y2YybQtln26mDa8%2FoVymRSGo4n2QIgNY9Cl82Zm5ap%2FrM2d8tNezZ4bX0nKnEDRAA4w%2FZ18yoqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEe4N2VYLbY5KypgYyrcA9vg78fMmVxBlKi3rlvcg2tysJ0aQm4IO0zmYE59yCUftK53%2B8rztcu9rIlbnHwgdRKnWTkLdijgd4dP8t0rrqnM8x5dJrU2%2FG5OhrqvLPz0RqcMil9svVy8v6evxqUFY%2FlQ1tRiRGGUwJaEzwUbmIKi4CtXG4jG53MRXPJ6ilhqLXUD3e4boQYLu2cZUaA6G9PH%2B9RkV27MCl8s0RY4aVn1Kb8ft%2FVAVmtJThFku%2BUO8zgs2BfnCItOmq%2FPGG%2F23wkwMEg04xaR6LmbnWzJIXjtU3D1Y%2FzWhXLkvS%2Bg8MJHixWgvZm5P5WBd%2Bp2k7con%2FpShh9kBK9lCXrRPN%2BkmpNcNzsRGYH%2FQtpMqyiG%2FBU7Z3pt%2BCn%2FnofNgDNVnLq3i2MvrzPh4UTWKrmVf3NZGRhExxVziUiggwTIEn0brbF%2BQOPlGVBjb9vVu3QDIy2meX591pmydCDZbh5RGIlh0bksl%2F7Sq3VHjrY1hCZDChts8MM2cOHoUQ%2B1zkktNrK%2F0dOvpLm%2FTvPpdQcOJYnQ%2BqAJKyJL%2FplmRUlgzBngm4L1V%2F30qCsev9fbztBTFVPaxM%2Bk%2F3fqKuRQXMPpzK556aKkYlIhjjENstnntHtcOa%2Bt10EKvdUwggQ2wFfkMJ33y74GOqUBUgCiTwWIrCT%2B8dFU7gpLgDJgIBD5gr%2F%2BDkWZtMPRKmolJgxcnLVhBd0kImoAEMEcBZsXd01iBvAm1gPDu5qLJ%2BQQn1Ba6xAn1r0qmBttHNWQ1Fw%2BNEPWxtOahkjcHwQ78tEmf7zuW6VcG%2BKXML2TF0jkgSu94gBs0K5uwIxFcoGp%2FGjC7I1XHj9HPCXko%2BSY%2FB4ZZQV5g4zRJtE0fjX8%2BvXJa1uB&X-Amz-Signature=03651c0684425e00b9073f4c9ba5268eab459254c6eba9c098afebcdd426cf9d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
