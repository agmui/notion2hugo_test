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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YORK4GWF%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T131700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIBLg1jQl2ZVD493CMVehdFf6HpG6hsVD4mWFMruIaHLDAiBSk49Sc1OC0Sgm4s61effbsyUoBsZRkgUXVCHUvq4vqir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMKgcBzWNymaRLm5SzKtwDUEUYs2X59IS%2FSg%2B%2F3HNZJCDpA5Fzbj64bFR%2FxNzt%2F4u5Fob2iVjpEYw%2BmjX7B%2Bo%2FtJIB6Kvo%2FRKaQILpPmT0kDjlorRm2QG4Eb7vOKdJNBZWCeRivDCGUnJx721eMpS7p6duADUky%2FlZk31AjkrfBH6bB0z18GWgN6LU6XO5Js7XDUgDNw7xaNMdM9U%2Fk6Geeys%2B167S5m6J3oVmUPem6kpQX8mqrOQiDVHWWuFE3VT6oj14rW7E8jNLu%2F5zkzFgSA6jL2WK3RmbeDuTDQJIwdDyQIvij%2FDJEUn%2FuB7TFDF928XWeSqE5SiWco2pxtvUaqbKLIemkucyU%2FDTqFzs%2FQNe8CV4WCkoJu6WLX1TTbOoCS4vvf6COFD9DLu31CloNGji2FQyT9Pwh2ErTS3IErHXTBIAf46MOMUOuZlkVD5s78MeIVxE6oR4K5Fy%2BhA9N8GMPc4SDJTgFQQsokiIGmgRcWDUQ2%2FAk%2FBtM9lbEAy4qk1r%2Bbo2vRNsTJUiiO58zLuf68XMMZXIgqfNaGXyH%2FQ5WkZ5lMqpP6U8pvw65JNrn3BFJXsph%2BjUyNiUeyugljIGsaybfNnx9DL5p%2BaTzFPCne%2FyFnpaCvmagjrPK2ytBJKCPvjJKY%2BN5kYw1fn2vQY6pgEVnyYDeulAyBHqJ%2BT6q0nxIpPrLQjhePKEQWGyMGsBAeoJjfFIQsJrEeNaCH%2FcAdR6kaNXwn1v4fwrz2XxXZy%2F2F6rGfI0QGSycwiXC59ueXf2NbeYYH126pZ%2FoBRY7RB69qyVjb5GUNZLo12VbAUr1R0teEbPhm%2Bp6M9QysDuhs2zzg0o66qG0RfTtqfW26PovKPRLiGQh0x98dGBsHOB%2F0wqpfgA&X-Amz-Signature=8ea0c1e5fb31a7f2d52eadd9bda80fa1afbda3aa5a32cd98e5ede64150eb6a5c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YORK4GWF%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T131700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIBLg1jQl2ZVD493CMVehdFf6HpG6hsVD4mWFMruIaHLDAiBSk49Sc1OC0Sgm4s61effbsyUoBsZRkgUXVCHUvq4vqir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMKgcBzWNymaRLm5SzKtwDUEUYs2X59IS%2FSg%2B%2F3HNZJCDpA5Fzbj64bFR%2FxNzt%2F4u5Fob2iVjpEYw%2BmjX7B%2Bo%2FtJIB6Kvo%2FRKaQILpPmT0kDjlorRm2QG4Eb7vOKdJNBZWCeRivDCGUnJx721eMpS7p6duADUky%2FlZk31AjkrfBH6bB0z18GWgN6LU6XO5Js7XDUgDNw7xaNMdM9U%2Fk6Geeys%2B167S5m6J3oVmUPem6kpQX8mqrOQiDVHWWuFE3VT6oj14rW7E8jNLu%2F5zkzFgSA6jL2WK3RmbeDuTDQJIwdDyQIvij%2FDJEUn%2FuB7TFDF928XWeSqE5SiWco2pxtvUaqbKLIemkucyU%2FDTqFzs%2FQNe8CV4WCkoJu6WLX1TTbOoCS4vvf6COFD9DLu31CloNGji2FQyT9Pwh2ErTS3IErHXTBIAf46MOMUOuZlkVD5s78MeIVxE6oR4K5Fy%2BhA9N8GMPc4SDJTgFQQsokiIGmgRcWDUQ2%2FAk%2FBtM9lbEAy4qk1r%2Bbo2vRNsTJUiiO58zLuf68XMMZXIgqfNaGXyH%2FQ5WkZ5lMqpP6U8pvw65JNrn3BFJXsph%2BjUyNiUeyugljIGsaybfNnx9DL5p%2BaTzFPCne%2FyFnpaCvmagjrPK2ytBJKCPvjJKY%2BN5kYw1fn2vQY6pgEVnyYDeulAyBHqJ%2BT6q0nxIpPrLQjhePKEQWGyMGsBAeoJjfFIQsJrEeNaCH%2FcAdR6kaNXwn1v4fwrz2XxXZy%2F2F6rGfI0QGSycwiXC59ueXf2NbeYYH126pZ%2FoBRY7RB69qyVjb5GUNZLo12VbAUr1R0teEbPhm%2Bp6M9QysDuhs2zzg0o66qG0RfTtqfW26PovKPRLiGQh0x98dGBsHOB%2F0wqpfgA&X-Amz-Signature=898b9a607112e0a5022169749eb40b42ba60e4603df7cd95b2b0e158ccb832e4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YORK4GWF%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T131700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIBLg1jQl2ZVD493CMVehdFf6HpG6hsVD4mWFMruIaHLDAiBSk49Sc1OC0Sgm4s61effbsyUoBsZRkgUXVCHUvq4vqir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMKgcBzWNymaRLm5SzKtwDUEUYs2X59IS%2FSg%2B%2F3HNZJCDpA5Fzbj64bFR%2FxNzt%2F4u5Fob2iVjpEYw%2BmjX7B%2Bo%2FtJIB6Kvo%2FRKaQILpPmT0kDjlorRm2QG4Eb7vOKdJNBZWCeRivDCGUnJx721eMpS7p6duADUky%2FlZk31AjkrfBH6bB0z18GWgN6LU6XO5Js7XDUgDNw7xaNMdM9U%2Fk6Geeys%2B167S5m6J3oVmUPem6kpQX8mqrOQiDVHWWuFE3VT6oj14rW7E8jNLu%2F5zkzFgSA6jL2WK3RmbeDuTDQJIwdDyQIvij%2FDJEUn%2FuB7TFDF928XWeSqE5SiWco2pxtvUaqbKLIemkucyU%2FDTqFzs%2FQNe8CV4WCkoJu6WLX1TTbOoCS4vvf6COFD9DLu31CloNGji2FQyT9Pwh2ErTS3IErHXTBIAf46MOMUOuZlkVD5s78MeIVxE6oR4K5Fy%2BhA9N8GMPc4SDJTgFQQsokiIGmgRcWDUQ2%2FAk%2FBtM9lbEAy4qk1r%2Bbo2vRNsTJUiiO58zLuf68XMMZXIgqfNaGXyH%2FQ5WkZ5lMqpP6U8pvw65JNrn3BFJXsph%2BjUyNiUeyugljIGsaybfNnx9DL5p%2BaTzFPCne%2FyFnpaCvmagjrPK2ytBJKCPvjJKY%2BN5kYw1fn2vQY6pgEVnyYDeulAyBHqJ%2BT6q0nxIpPrLQjhePKEQWGyMGsBAeoJjfFIQsJrEeNaCH%2FcAdR6kaNXwn1v4fwrz2XxXZy%2F2F6rGfI0QGSycwiXC59ueXf2NbeYYH126pZ%2FoBRY7RB69qyVjb5GUNZLo12VbAUr1R0teEbPhm%2Bp6M9QysDuhs2zzg0o66qG0RfTtqfW26PovKPRLiGQh0x98dGBsHOB%2F0wqpfgA&X-Amz-Signature=7c20bded8158d5db838a110cdf2a1cfa17f608b8b33d4b97795de2f2c69aa188&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
