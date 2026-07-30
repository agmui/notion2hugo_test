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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W33KM2MM%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9Qt1lycTc3Wt9vtTHawGpWOL8HvTFFzjidCk0er2fVgIhAKIBRx3Ut9M15wfxyRevlS1MX5a6l0C0FKlBDLZ9XralKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9CpJjTpasTuygwtEq3AN6H%2FgZaLqq5f2qBKeBMUaQ2J73Qp6tahv6OgyNkbR2W7Jf4m%2B35nppAJveJjMqoLqU%2BgiYI%2BTfi46iWak2rX4Xo%2Bsrd%2BPd1UHsxXcQke4KAC525zUKmPmpPCBptTqI%2FV7j4mUQve39tasGx9Z90ozPFOG7b5QLcDIutBUvJcXnZf%2Fq6JpnLGAOdHJK5OEn4OXOPxJnoyt%2Fz2AQiOmlzpY010OW2GKJqXjcTODyTaD6%2BjeRrNEaYfcl3bQ5pJUopoDkSSyi5x3l3%2FPc12IR9Vz2um8rX2rTNFp8aZHFEkRnk90iizEgGghO%2FEq3YTJAhFNXmFTYHjDpCy8vSMwUK02T8EZNWaSgJmQDuFQLUwjP3vM%2BVqMAf6dgCODXCktF6AFlgBTfP3iH%2FqlPxQEYeFSNvdK2oLEBoJcel7xzjT%2BKPa2ZQ5NDWmbhQRXB5hJg1EWUyL2bztV%2FWit5Pg5gxV2sOhZsBxOEwlrLr2S9XyQh3TBMk2a4U0DO0A0m%2Fyu%2Byzr24up7BDV9nRklRoeAvsemFMVonRW1GLsdiqcr7EYf0XHkvZExxkAqNmnW62OoWnCf0GN4YCWSB7S4AqvYyu%2FgZuHscUh6Szji%2B979z1%2FGRIAdHobczTVp5%2BpH9jDj46rTBjqkAV8gsZ4Vc3C%2Bcp6YeP7GqnYfRcCeKAN9TH9c2Hkmp5pSDJa9DwFT3MZbemz8%2BfNTe2i02rbd%2FUK1pXdLyIsvEBSinOBIj0r1VLYqO4BrT8WzgfcrV8Ajv5eQJBxxxcxjZI5g97O7pC5fM8aqmAsEaA8vLyLKTRDhsfg2qK4wEq2qUd%2BXmxKnjIMnLmqELuQLKpIsBIGYBKnp%2FoAEtVYH%2BL0bvz2t&X-Amz-Signature=58ebc682d7f8b62f9ac7fe0873bf9a9bc0c7bfe0ddb2f5bdeda0889a97ff9ef2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W33KM2MM%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9Qt1lycTc3Wt9vtTHawGpWOL8HvTFFzjidCk0er2fVgIhAKIBRx3Ut9M15wfxyRevlS1MX5a6l0C0FKlBDLZ9XralKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9CpJjTpasTuygwtEq3AN6H%2FgZaLqq5f2qBKeBMUaQ2J73Qp6tahv6OgyNkbR2W7Jf4m%2B35nppAJveJjMqoLqU%2BgiYI%2BTfi46iWak2rX4Xo%2Bsrd%2BPd1UHsxXcQke4KAC525zUKmPmpPCBptTqI%2FV7j4mUQve39tasGx9Z90ozPFOG7b5QLcDIutBUvJcXnZf%2Fq6JpnLGAOdHJK5OEn4OXOPxJnoyt%2Fz2AQiOmlzpY010OW2GKJqXjcTODyTaD6%2BjeRrNEaYfcl3bQ5pJUopoDkSSyi5x3l3%2FPc12IR9Vz2um8rX2rTNFp8aZHFEkRnk90iizEgGghO%2FEq3YTJAhFNXmFTYHjDpCy8vSMwUK02T8EZNWaSgJmQDuFQLUwjP3vM%2BVqMAf6dgCODXCktF6AFlgBTfP3iH%2FqlPxQEYeFSNvdK2oLEBoJcel7xzjT%2BKPa2ZQ5NDWmbhQRXB5hJg1EWUyL2bztV%2FWit5Pg5gxV2sOhZsBxOEwlrLr2S9XyQh3TBMk2a4U0DO0A0m%2Fyu%2Byzr24up7BDV9nRklRoeAvsemFMVonRW1GLsdiqcr7EYf0XHkvZExxkAqNmnW62OoWnCf0GN4YCWSB7S4AqvYyu%2FgZuHscUh6Szji%2B979z1%2FGRIAdHobczTVp5%2BpH9jDj46rTBjqkAV8gsZ4Vc3C%2Bcp6YeP7GqnYfRcCeKAN9TH9c2Hkmp5pSDJa9DwFT3MZbemz8%2BfNTe2i02rbd%2FUK1pXdLyIsvEBSinOBIj0r1VLYqO4BrT8WzgfcrV8Ajv5eQJBxxxcxjZI5g97O7pC5fM8aqmAsEaA8vLyLKTRDhsfg2qK4wEq2qUd%2BXmxKnjIMnLmqELuQLKpIsBIGYBKnp%2FoAEtVYH%2BL0bvz2t&X-Amz-Signature=62a07c66c3d527d7aaab11198e9d60bc244f13a804adbfd032652c780f60f11a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W33KM2MM%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9Qt1lycTc3Wt9vtTHawGpWOL8HvTFFzjidCk0er2fVgIhAKIBRx3Ut9M15wfxyRevlS1MX5a6l0C0FKlBDLZ9XralKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9CpJjTpasTuygwtEq3AN6H%2FgZaLqq5f2qBKeBMUaQ2J73Qp6tahv6OgyNkbR2W7Jf4m%2B35nppAJveJjMqoLqU%2BgiYI%2BTfi46iWak2rX4Xo%2Bsrd%2BPd1UHsxXcQke4KAC525zUKmPmpPCBptTqI%2FV7j4mUQve39tasGx9Z90ozPFOG7b5QLcDIutBUvJcXnZf%2Fq6JpnLGAOdHJK5OEn4OXOPxJnoyt%2Fz2AQiOmlzpY010OW2GKJqXjcTODyTaD6%2BjeRrNEaYfcl3bQ5pJUopoDkSSyi5x3l3%2FPc12IR9Vz2um8rX2rTNFp8aZHFEkRnk90iizEgGghO%2FEq3YTJAhFNXmFTYHjDpCy8vSMwUK02T8EZNWaSgJmQDuFQLUwjP3vM%2BVqMAf6dgCODXCktF6AFlgBTfP3iH%2FqlPxQEYeFSNvdK2oLEBoJcel7xzjT%2BKPa2ZQ5NDWmbhQRXB5hJg1EWUyL2bztV%2FWit5Pg5gxV2sOhZsBxOEwlrLr2S9XyQh3TBMk2a4U0DO0A0m%2Fyu%2Byzr24up7BDV9nRklRoeAvsemFMVonRW1GLsdiqcr7EYf0XHkvZExxkAqNmnW62OoWnCf0GN4YCWSB7S4AqvYyu%2FgZuHscUh6Szji%2B979z1%2FGRIAdHobczTVp5%2BpH9jDj46rTBjqkAV8gsZ4Vc3C%2Bcp6YeP7GqnYfRcCeKAN9TH9c2Hkmp5pSDJa9DwFT3MZbemz8%2BfNTe2i02rbd%2FUK1pXdLyIsvEBSinOBIj0r1VLYqO4BrT8WzgfcrV8Ajv5eQJBxxxcxjZI5g97O7pC5fM8aqmAsEaA8vLyLKTRDhsfg2qK4wEq2qUd%2BXmxKnjIMnLmqELuQLKpIsBIGYBKnp%2FoAEtVYH%2BL0bvz2t&X-Amz-Signature=3f5c3994646bc3b8025eef2e9f586213eae412e1b74c735f8e0a7074a2c6bb11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
