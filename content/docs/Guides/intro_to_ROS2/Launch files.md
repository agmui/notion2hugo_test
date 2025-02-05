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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDV6ECNY%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T140738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIBoYWhkVPq6Y4Ae4DmLgxIDzD%2BPOONh5l%2BOxQpthhdRnAiBQad5Rwgo6yi3eGkoSHsWY3kRWkepLhZw6Gv2H6km3pCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMl7z1SO5MiouB%2FWyXKtwDSs6Iv5fjA4Wd9NfLPG5I%2BMjD438Q4eyZQeFFIHwnw8WfvyAm4SzwDkUDase55p2BhV3Hr3J5uxrZr4hyGT1U9cWBUK1bm0TiOeDeIao5%2BgXPNygJJ1kh9UBRdLEW%2BPLWqYTGqZKj29fLoradSAxZhXHXymKLbCV9oPrA8FavZHHP6PElTd2DsWnsmGZHvgjFI21R9VL0FzYba47H9f66qjpnTctf7OzFDdgudPRgEVGFKht0q2ACWhhG0plsfUCmHofJ9OSKf5b0CoLtr1cmPUIeZIEuTBiTk0jBPrXcPKJtmuBsF4t3SIuAYfwX5tpgngmbXCbOIWFzxDzIufFsmswYIe7fDPDPELoJiw7OU8nlA9Bk2x2GgCnHtKITTlGoPgL9R0T%2BGdSIaZx67U0Jk7DN67HQrEAteWGb%2BIKwrNYIzK2HOdQlIhsgM4pcLgEDB%2FK%2BIOEWmtQFv6%2BHMPmzrZPx88%2BFJULwb35dadtUTpPsYyucKJ1vMSzxK%2BR2CYv6%2BxBkx4eMgKHgylvBx0C8GAvX4b3GpGO%2FKW73OtuXjFQCF%2FMmxfdjE5Ail%2BNJraTlkdUy7E%2FSIL0ymdZYLJOuzRnAMrrqJ7OIjEqkhiUqmnnCJ7cRM6PCpgOMTsAw7ouNvQY6pgH1J2dGkcjvyPdbI82sHDroXTnBpkZ7cZSePWmXghGLFe0tkVKWWh3CEfUSLNO2SCYGRPOTjtwIUpuuoEdtDjFUJtk55NDn2MTNtRR0FN1KRXJzSkvpetNU4%2BSFSu9ZfgDDDjVSomTI4%2BNncNg8OJMyFR0Pf4F123qE3cvuJ5CZzZ1yJNMZiiUpk1PByUssxT%2F0%2FX8NRBK0JUv%2BciwsDPYIJ%2B0x4jcg&X-Amz-Signature=a5fe7f2f1892b6db0e82c9f8176ece79f0d023e15ad5b5f63bd0e1aa99fed8b9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDV6ECNY%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T140738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIBoYWhkVPq6Y4Ae4DmLgxIDzD%2BPOONh5l%2BOxQpthhdRnAiBQad5Rwgo6yi3eGkoSHsWY3kRWkepLhZw6Gv2H6km3pCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMl7z1SO5MiouB%2FWyXKtwDSs6Iv5fjA4Wd9NfLPG5I%2BMjD438Q4eyZQeFFIHwnw8WfvyAm4SzwDkUDase55p2BhV3Hr3J5uxrZr4hyGT1U9cWBUK1bm0TiOeDeIao5%2BgXPNygJJ1kh9UBRdLEW%2BPLWqYTGqZKj29fLoradSAxZhXHXymKLbCV9oPrA8FavZHHP6PElTd2DsWnsmGZHvgjFI21R9VL0FzYba47H9f66qjpnTctf7OzFDdgudPRgEVGFKht0q2ACWhhG0plsfUCmHofJ9OSKf5b0CoLtr1cmPUIeZIEuTBiTk0jBPrXcPKJtmuBsF4t3SIuAYfwX5tpgngmbXCbOIWFzxDzIufFsmswYIe7fDPDPELoJiw7OU8nlA9Bk2x2GgCnHtKITTlGoPgL9R0T%2BGdSIaZx67U0Jk7DN67HQrEAteWGb%2BIKwrNYIzK2HOdQlIhsgM4pcLgEDB%2FK%2BIOEWmtQFv6%2BHMPmzrZPx88%2BFJULwb35dadtUTpPsYyucKJ1vMSzxK%2BR2CYv6%2BxBkx4eMgKHgylvBx0C8GAvX4b3GpGO%2FKW73OtuXjFQCF%2FMmxfdjE5Ail%2BNJraTlkdUy7E%2FSIL0ymdZYLJOuzRnAMrrqJ7OIjEqkhiUqmnnCJ7cRM6PCpgOMTsAw7ouNvQY6pgH1J2dGkcjvyPdbI82sHDroXTnBpkZ7cZSePWmXghGLFe0tkVKWWh3CEfUSLNO2SCYGRPOTjtwIUpuuoEdtDjFUJtk55NDn2MTNtRR0FN1KRXJzSkvpetNU4%2BSFSu9ZfgDDDjVSomTI4%2BNncNg8OJMyFR0Pf4F123qE3cvuJ5CZzZ1yJNMZiiUpk1PByUssxT%2F0%2FX8NRBK0JUv%2BciwsDPYIJ%2B0x4jcg&X-Amz-Signature=27058d0e5a21c9c7585e16d2ab20c0bfd0d829254fab41e8be680d8e398d9d36&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDV6ECNY%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T140738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIBoYWhkVPq6Y4Ae4DmLgxIDzD%2BPOONh5l%2BOxQpthhdRnAiBQad5Rwgo6yi3eGkoSHsWY3kRWkepLhZw6Gv2H6km3pCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMl7z1SO5MiouB%2FWyXKtwDSs6Iv5fjA4Wd9NfLPG5I%2BMjD438Q4eyZQeFFIHwnw8WfvyAm4SzwDkUDase55p2BhV3Hr3J5uxrZr4hyGT1U9cWBUK1bm0TiOeDeIao5%2BgXPNygJJ1kh9UBRdLEW%2BPLWqYTGqZKj29fLoradSAxZhXHXymKLbCV9oPrA8FavZHHP6PElTd2DsWnsmGZHvgjFI21R9VL0FzYba47H9f66qjpnTctf7OzFDdgudPRgEVGFKht0q2ACWhhG0plsfUCmHofJ9OSKf5b0CoLtr1cmPUIeZIEuTBiTk0jBPrXcPKJtmuBsF4t3SIuAYfwX5tpgngmbXCbOIWFzxDzIufFsmswYIe7fDPDPELoJiw7OU8nlA9Bk2x2GgCnHtKITTlGoPgL9R0T%2BGdSIaZx67U0Jk7DN67HQrEAteWGb%2BIKwrNYIzK2HOdQlIhsgM4pcLgEDB%2FK%2BIOEWmtQFv6%2BHMPmzrZPx88%2BFJULwb35dadtUTpPsYyucKJ1vMSzxK%2BR2CYv6%2BxBkx4eMgKHgylvBx0C8GAvX4b3GpGO%2FKW73OtuXjFQCF%2FMmxfdjE5Ail%2BNJraTlkdUy7E%2FSIL0ymdZYLJOuzRnAMrrqJ7OIjEqkhiUqmnnCJ7cRM6PCpgOMTsAw7ouNvQY6pgH1J2dGkcjvyPdbI82sHDroXTnBpkZ7cZSePWmXghGLFe0tkVKWWh3CEfUSLNO2SCYGRPOTjtwIUpuuoEdtDjFUJtk55NDn2MTNtRR0FN1KRXJzSkvpetNU4%2BSFSu9ZfgDDDjVSomTI4%2BNncNg8OJMyFR0Pf4F123qE3cvuJ5CZzZ1yJNMZiiUpk1PByUssxT%2F0%2FX8NRBK0JUv%2BciwsDPYIJ%2B0x4jcg&X-Amz-Signature=eab1995afa5ba239b49f9cf9d2cdcb3e233a2b1f6dd234ac74e80306176fc183&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
