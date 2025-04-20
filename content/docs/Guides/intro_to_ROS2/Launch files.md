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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC4BBFHY%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T090739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIE3DbBeL86blhVEAMt7llc%2BXqQK8N5%2Bh%2Fu7We7cwzWIEAiEA6gX4LpkZtHL%2F6wk5olR8CE7GqZD3ubivBEwIhgpa%2BOsqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIR0GcinRFeOQaiALircA9DOGQJz%2FVTLzGms0sjJaaucHFiM8v%2FDbQK3q4mmflWedF7ARxlKfx8fGfKkP3ClZV0f9fp4XYM1oiN6gIreBeeZnV3nOj0rlyqki1CA9GMpJGPljytpmBVe78Vnq3yxcAime78nhITNdPzhGZcj3V9zYJiDz48Dmv7z5tHDPS%2B3MzwUK5NMqByoxLq1GUDmgy8hzqF%2FJUd%2FHn%2Fz76YDCrqmNA6pa5FwrkqZROS%2BfjndRnr6WYogLESR%2BtzEYINaKF7oLbP5ePHfm7mUMsFqGhfgHJkoXUQicOgkpo9tyNLAjyUZtS5MTeun3NrjPGNhTmfrVaxj%2F0sho7GQ9vUcEB5pcMp4%2BKMS1PNipzlva3%2Ft76QbINaTUrInQMfZcUNVkJT%2BbSEqgIsy%2F%2BnPEjdcqA9%2BS%2B%2BXviHA27sdIS5Bmvd64%2BXYXOXSTIGhPfj2sOIz2R2I4rCm9AjVYn0HOMpoLYSs%2Fadp9VUvxJU13KoN26fmynuB6nSj5QOW9MxpPJwfEkUnJUq8RChcKmzWBQ5jOgqEwpPYYldD1BQdoruUvTaEo08pNWKBtZEJZM6t2YMGO7ciuYWrh3tGV9ReQ8cWbGSEW%2F7b4TTxmqHYl%2B58y8lhQV%2FSWI1vRKK8i9zMMPijksAGOqUBIxEbpMvqx0DFxEpxYSmehVd2N2Mc8ifVkTqDReRVuv9n5%2BGlc%2FKtzcZ27sHnbeO97c3pBc1YpB36UDtX3Lv4U9whXZTahvCUEtUiT2B8N1xif6SHYyuUh4rpiaBD9T1LtX86m7sNG8KxuH4fvM%2F0B7M%2ByonBjQRP%2BjdK8ZR0cOe0ZtSki%2FJuKKo1qbyEyQOFob9GVvBQZm1shsg%2F%2BUaGXBANqAiI&X-Amz-Signature=4925228f71f1a4764728bd030ad19b15da915a6ce83dd4fe5593c646986c4d92&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC4BBFHY%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T090739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIE3DbBeL86blhVEAMt7llc%2BXqQK8N5%2Bh%2Fu7We7cwzWIEAiEA6gX4LpkZtHL%2F6wk5olR8CE7GqZD3ubivBEwIhgpa%2BOsqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIR0GcinRFeOQaiALircA9DOGQJz%2FVTLzGms0sjJaaucHFiM8v%2FDbQK3q4mmflWedF7ARxlKfx8fGfKkP3ClZV0f9fp4XYM1oiN6gIreBeeZnV3nOj0rlyqki1CA9GMpJGPljytpmBVe78Vnq3yxcAime78nhITNdPzhGZcj3V9zYJiDz48Dmv7z5tHDPS%2B3MzwUK5NMqByoxLq1GUDmgy8hzqF%2FJUd%2FHn%2Fz76YDCrqmNA6pa5FwrkqZROS%2BfjndRnr6WYogLESR%2BtzEYINaKF7oLbP5ePHfm7mUMsFqGhfgHJkoXUQicOgkpo9tyNLAjyUZtS5MTeun3NrjPGNhTmfrVaxj%2F0sho7GQ9vUcEB5pcMp4%2BKMS1PNipzlva3%2Ft76QbINaTUrInQMfZcUNVkJT%2BbSEqgIsy%2F%2BnPEjdcqA9%2BS%2B%2BXviHA27sdIS5Bmvd64%2BXYXOXSTIGhPfj2sOIz2R2I4rCm9AjVYn0HOMpoLYSs%2Fadp9VUvxJU13KoN26fmynuB6nSj5QOW9MxpPJwfEkUnJUq8RChcKmzWBQ5jOgqEwpPYYldD1BQdoruUvTaEo08pNWKBtZEJZM6t2YMGO7ciuYWrh3tGV9ReQ8cWbGSEW%2F7b4TTxmqHYl%2B58y8lhQV%2FSWI1vRKK8i9zMMPijksAGOqUBIxEbpMvqx0DFxEpxYSmehVd2N2Mc8ifVkTqDReRVuv9n5%2BGlc%2FKtzcZ27sHnbeO97c3pBc1YpB36UDtX3Lv4U9whXZTahvCUEtUiT2B8N1xif6SHYyuUh4rpiaBD9T1LtX86m7sNG8KxuH4fvM%2F0B7M%2ByonBjQRP%2BjdK8ZR0cOe0ZtSki%2FJuKKo1qbyEyQOFob9GVvBQZm1shsg%2F%2BUaGXBANqAiI&X-Amz-Signature=70fd8384ef798846da3f7811a6eba5535ceba56f414876b59fef67163da2c607&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC4BBFHY%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T090739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIE3DbBeL86blhVEAMt7llc%2BXqQK8N5%2Bh%2Fu7We7cwzWIEAiEA6gX4LpkZtHL%2F6wk5olR8CE7GqZD3ubivBEwIhgpa%2BOsqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIR0GcinRFeOQaiALircA9DOGQJz%2FVTLzGms0sjJaaucHFiM8v%2FDbQK3q4mmflWedF7ARxlKfx8fGfKkP3ClZV0f9fp4XYM1oiN6gIreBeeZnV3nOj0rlyqki1CA9GMpJGPljytpmBVe78Vnq3yxcAime78nhITNdPzhGZcj3V9zYJiDz48Dmv7z5tHDPS%2B3MzwUK5NMqByoxLq1GUDmgy8hzqF%2FJUd%2FHn%2Fz76YDCrqmNA6pa5FwrkqZROS%2BfjndRnr6WYogLESR%2BtzEYINaKF7oLbP5ePHfm7mUMsFqGhfgHJkoXUQicOgkpo9tyNLAjyUZtS5MTeun3NrjPGNhTmfrVaxj%2F0sho7GQ9vUcEB5pcMp4%2BKMS1PNipzlva3%2Ft76QbINaTUrInQMfZcUNVkJT%2BbSEqgIsy%2F%2BnPEjdcqA9%2BS%2B%2BXviHA27sdIS5Bmvd64%2BXYXOXSTIGhPfj2sOIz2R2I4rCm9AjVYn0HOMpoLYSs%2Fadp9VUvxJU13KoN26fmynuB6nSj5QOW9MxpPJwfEkUnJUq8RChcKmzWBQ5jOgqEwpPYYldD1BQdoruUvTaEo08pNWKBtZEJZM6t2YMGO7ciuYWrh3tGV9ReQ8cWbGSEW%2F7b4TTxmqHYl%2B58y8lhQV%2FSWI1vRKK8i9zMMPijksAGOqUBIxEbpMvqx0DFxEpxYSmehVd2N2Mc8ifVkTqDReRVuv9n5%2BGlc%2FKtzcZ27sHnbeO97c3pBc1YpB36UDtX3Lv4U9whXZTahvCUEtUiT2B8N1xif6SHYyuUh4rpiaBD9T1LtX86m7sNG8KxuH4fvM%2F0B7M%2ByonBjQRP%2BjdK8ZR0cOe0ZtSki%2FJuKKo1qbyEyQOFob9GVvBQZm1shsg%2F%2BUaGXBANqAiI&X-Amz-Signature=042bda716613d3cfe1b4470a0879c5e34bc393a068032fdd494ea03db894f37a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
