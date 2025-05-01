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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BHZSXQP%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIB0zNFI%2FruvU%2BfEKpTd0GHVllqFeimFX4hD3KNOoNo1%2BAiBrkPUzPsIqqL05Q4SZiYU%2B8hqtncB8glxVBwFmf3Dr1iqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH%2BogCsQNiN7GZroFKtwDj0G4Dgpl%2F5R8AuCawYldC4AzJSsH2OgCsGC0Cm4yD1V7ij%2B97rO2%2F8%2FMuLUSbHi7414gLxXibcVEefDsoRi3nIGmbHWX0WuonvI44UfzBvhMeN%2B1LA82DNXdEuouHZOt8HJP3%2F1x3SFIy4cdwcCMC84PoWPBAR%2BEN2dSGtK6UzYal6H%2BpK1dGkabaZykMIE3g%2FLAr7nvZp8k%2FE%2FOJv2eFYy2hR4hZmOIUJScVruSdoqkX5PLH2MCOJmE%2F7Uit2SZsSDUoNOUREGmriNm%2FrLH%2Fdnz8%2FmTfa71Kf3DtbTGmjS5mP5Mn8jeb9i%2B5QMaKdoEoPNzogsTvtsokKVImLaPay4SSXXxc2mQbuXNV0bw07emSMoDc21mI%2B9msSYi2itAHp6ttuxNQmE5nM8fSt0GCKP9AywzCINK0Ub6kJZC0RXnrCSeupvZoU%2FyGGpCmyWOk%2FzT1WdFceonSNzaRxHEV%2FtxB7XPEoLUjZMKYcksxmyhSl9xMV0niC%2Bce0xAGNr1FXeJcGKLX0ac%2BdyWg594nDwDEW8xLpJUsbGO6vnoynfKtDWk80H3BkInhxKxN3CSB%2F64%2BE6r8cFeMfhvYGWbknI%2BIMido5TIksrvCpz9Tj6SxSCfKRXA25p4uS8wk%2FTOwAY6pgEtjrl%2FIQScNtGPSpRp0J%2BvGgGp0r5n5%2FMxAtfXo7ZqZ93To1QLPezd3vRULFDF8KDDpdEX2B8ilTgruxAd5ZLCFHQ%2F9mfSBr3T9AUlyQdDECOCueuutY0UtLFalw9Zg2eV6oriqAezxLwxwao93nt5tEs8KTzSJA0xXC%2F5COk3jU3kQD3FYX%2BM558hCyPwimPhBaqAwFh0oobd9hPqiOagPNX1z2Z0&X-Amz-Signature=9e1a6d913b485a932b64c3d3e8ad2f81a8497276701be652b150e21c8e807f7c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BHZSXQP%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIB0zNFI%2FruvU%2BfEKpTd0GHVllqFeimFX4hD3KNOoNo1%2BAiBrkPUzPsIqqL05Q4SZiYU%2B8hqtncB8glxVBwFmf3Dr1iqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH%2BogCsQNiN7GZroFKtwDj0G4Dgpl%2F5R8AuCawYldC4AzJSsH2OgCsGC0Cm4yD1V7ij%2B97rO2%2F8%2FMuLUSbHi7414gLxXibcVEefDsoRi3nIGmbHWX0WuonvI44UfzBvhMeN%2B1LA82DNXdEuouHZOt8HJP3%2F1x3SFIy4cdwcCMC84PoWPBAR%2BEN2dSGtK6UzYal6H%2BpK1dGkabaZykMIE3g%2FLAr7nvZp8k%2FE%2FOJv2eFYy2hR4hZmOIUJScVruSdoqkX5PLH2MCOJmE%2F7Uit2SZsSDUoNOUREGmriNm%2FrLH%2Fdnz8%2FmTfa71Kf3DtbTGmjS5mP5Mn8jeb9i%2B5QMaKdoEoPNzogsTvtsokKVImLaPay4SSXXxc2mQbuXNV0bw07emSMoDc21mI%2B9msSYi2itAHp6ttuxNQmE5nM8fSt0GCKP9AywzCINK0Ub6kJZC0RXnrCSeupvZoU%2FyGGpCmyWOk%2FzT1WdFceonSNzaRxHEV%2FtxB7XPEoLUjZMKYcksxmyhSl9xMV0niC%2Bce0xAGNr1FXeJcGKLX0ac%2BdyWg594nDwDEW8xLpJUsbGO6vnoynfKtDWk80H3BkInhxKxN3CSB%2F64%2BE6r8cFeMfhvYGWbknI%2BIMido5TIksrvCpz9Tj6SxSCfKRXA25p4uS8wk%2FTOwAY6pgEtjrl%2FIQScNtGPSpRp0J%2BvGgGp0r5n5%2FMxAtfXo7ZqZ93To1QLPezd3vRULFDF8KDDpdEX2B8ilTgruxAd5ZLCFHQ%2F9mfSBr3T9AUlyQdDECOCueuutY0UtLFalw9Zg2eV6oriqAezxLwxwao93nt5tEs8KTzSJA0xXC%2F5COk3jU3kQD3FYX%2BM558hCyPwimPhBaqAwFh0oobd9hPqiOagPNX1z2Z0&X-Amz-Signature=7168dcfe333e4be1b29dad4e48e36164dcbca1ff977e17cb7b1f675153df00fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BHZSXQP%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIB0zNFI%2FruvU%2BfEKpTd0GHVllqFeimFX4hD3KNOoNo1%2BAiBrkPUzPsIqqL05Q4SZiYU%2B8hqtncB8glxVBwFmf3Dr1iqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH%2BogCsQNiN7GZroFKtwDj0G4Dgpl%2F5R8AuCawYldC4AzJSsH2OgCsGC0Cm4yD1V7ij%2B97rO2%2F8%2FMuLUSbHi7414gLxXibcVEefDsoRi3nIGmbHWX0WuonvI44UfzBvhMeN%2B1LA82DNXdEuouHZOt8HJP3%2F1x3SFIy4cdwcCMC84PoWPBAR%2BEN2dSGtK6UzYal6H%2BpK1dGkabaZykMIE3g%2FLAr7nvZp8k%2FE%2FOJv2eFYy2hR4hZmOIUJScVruSdoqkX5PLH2MCOJmE%2F7Uit2SZsSDUoNOUREGmriNm%2FrLH%2Fdnz8%2FmTfa71Kf3DtbTGmjS5mP5Mn8jeb9i%2B5QMaKdoEoPNzogsTvtsokKVImLaPay4SSXXxc2mQbuXNV0bw07emSMoDc21mI%2B9msSYi2itAHp6ttuxNQmE5nM8fSt0GCKP9AywzCINK0Ub6kJZC0RXnrCSeupvZoU%2FyGGpCmyWOk%2FzT1WdFceonSNzaRxHEV%2FtxB7XPEoLUjZMKYcksxmyhSl9xMV0niC%2Bce0xAGNr1FXeJcGKLX0ac%2BdyWg594nDwDEW8xLpJUsbGO6vnoynfKtDWk80H3BkInhxKxN3CSB%2F64%2BE6r8cFeMfhvYGWbknI%2BIMido5TIksrvCpz9Tj6SxSCfKRXA25p4uS8wk%2FTOwAY6pgEtjrl%2FIQScNtGPSpRp0J%2BvGgGp0r5n5%2FMxAtfXo7ZqZ93To1QLPezd3vRULFDF8KDDpdEX2B8ilTgruxAd5ZLCFHQ%2F9mfSBr3T9AUlyQdDECOCueuutY0UtLFalw9Zg2eV6oriqAezxLwxwao93nt5tEs8KTzSJA0xXC%2F5COk3jU3kQD3FYX%2BM558hCyPwimPhBaqAwFh0oobd9hPqiOagPNX1z2Z0&X-Amz-Signature=46a0e00c7a3eadef0339a710560c2d7d49bdb32e26698add246363a97087e88b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
