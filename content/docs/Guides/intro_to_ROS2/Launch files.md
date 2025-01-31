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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RINN2M7%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T003529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzgHI6xdoEILaZElhCfdx%2FX0XkMIvSKfQ%2F9hvhxumh5AiA6jrnVNiLUTyKewZvLHbS2bbGFP1Bc0VlMTV6sxtVT1iqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRsNaGNkV3ybyXeK8KtwDuMqKrsNJYyn%2FexBZb54gKiH0jESasgRUcS%2FfkYzIHQ%2FIYU66I5%2FleRG07NjXk9MYdKQsKo%2Bk1gEC%2FBIyYM%2BHjfCnIln9kQCur5%2FI%2BtUI%2FUiJ9K3XBKjL1mbWFPFpn%2Fs%2F84NFC9NN0vEJjCZkynI5apmSMcsq7HZcOKIjaZy57nc8bOWoWIRiTCT4lDFCXbx7A6DsqZMegt0%2F4%2BgSWFKJLkyLi882e7Nvycu1WL%2BQvZv%2BPWb7%2Fm1TvsCKFxUvCQwm8nh38yEHZ3HAgo5oZDPZaf9nSPagnGr10sy%2Fo4MX57Zb95JD8967uK4HIBy137EY69AeDHMZcf91D1LJn%2F6o2M4w5a2jNzUmd0c2MPJF4ARc8Gf7Xm4aOjcIKfz%2FE28OrQterczr0K5HL1ZK7CydNWZW%2BQLq5skk6RRhOaZ%2FSN69vf8XIQ4t%2BtBAnk9yTmzQxIyqYwtHzOeMg%2FDgmRCbN7aklaRhKoIls8Xy4RnDbaU8f5hYfffr%2BiMuhF%2F%2FM13gdeXXb90%2BLD4M1kYEQ0x3CF00HXgH5xgTafKIW%2BItm4ksnyB00wPvUh23cI14%2F7afEJnjTr46wny1eKHt8kB2MsHgk3rw3YnRjrfKgjuzT452hYZ61voHpeVbMrEwwJrwvAY6pgFQMluMUMaSzycCpDD5igUpxf1TjtGpN%2BKJIDbUEP4m1fCHWpahkiEL7UtCgbgldeKRvK%2B%2FeoCv%2FSNFZlTujOYOGzvILo3WfdXOFpK5CkU4C%2BXmL6jCppFRgcDXCY9O82N0VBXw1urH4QxGf45JLsk3BZZ2AKHf1VmHMTXi%2Bof7z37%2Fa8CX4aQR5rjG7tbGAWw0AlP8AF8JgLbJ35VFZ%2BwUB2tUEyms&X-Amz-Signature=0924d29c80d88a35d323107c5771f1b00b956877eecaea78c87a225c02d92f7d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RINN2M7%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T003529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzgHI6xdoEILaZElhCfdx%2FX0XkMIvSKfQ%2F9hvhxumh5AiA6jrnVNiLUTyKewZvLHbS2bbGFP1Bc0VlMTV6sxtVT1iqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRsNaGNkV3ybyXeK8KtwDuMqKrsNJYyn%2FexBZb54gKiH0jESasgRUcS%2FfkYzIHQ%2FIYU66I5%2FleRG07NjXk9MYdKQsKo%2Bk1gEC%2FBIyYM%2BHjfCnIln9kQCur5%2FI%2BtUI%2FUiJ9K3XBKjL1mbWFPFpn%2Fs%2F84NFC9NN0vEJjCZkynI5apmSMcsq7HZcOKIjaZy57nc8bOWoWIRiTCT4lDFCXbx7A6DsqZMegt0%2F4%2BgSWFKJLkyLi882e7Nvycu1WL%2BQvZv%2BPWb7%2Fm1TvsCKFxUvCQwm8nh38yEHZ3HAgo5oZDPZaf9nSPagnGr10sy%2Fo4MX57Zb95JD8967uK4HIBy137EY69AeDHMZcf91D1LJn%2F6o2M4w5a2jNzUmd0c2MPJF4ARc8Gf7Xm4aOjcIKfz%2FE28OrQterczr0K5HL1ZK7CydNWZW%2BQLq5skk6RRhOaZ%2FSN69vf8XIQ4t%2BtBAnk9yTmzQxIyqYwtHzOeMg%2FDgmRCbN7aklaRhKoIls8Xy4RnDbaU8f5hYfffr%2BiMuhF%2F%2FM13gdeXXb90%2BLD4M1kYEQ0x3CF00HXgH5xgTafKIW%2BItm4ksnyB00wPvUh23cI14%2F7afEJnjTr46wny1eKHt8kB2MsHgk3rw3YnRjrfKgjuzT452hYZ61voHpeVbMrEwwJrwvAY6pgFQMluMUMaSzycCpDD5igUpxf1TjtGpN%2BKJIDbUEP4m1fCHWpahkiEL7UtCgbgldeKRvK%2B%2FeoCv%2FSNFZlTujOYOGzvILo3WfdXOFpK5CkU4C%2BXmL6jCppFRgcDXCY9O82N0VBXw1urH4QxGf45JLsk3BZZ2AKHf1VmHMTXi%2Bof7z37%2Fa8CX4aQR5rjG7tbGAWw0AlP8AF8JgLbJ35VFZ%2BwUB2tUEyms&X-Amz-Signature=0c7a6106352cc468ab15e6dca134750a5ebe39815b34c07e019eb1ce64a64a99&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RINN2M7%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T003529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzgHI6xdoEILaZElhCfdx%2FX0XkMIvSKfQ%2F9hvhxumh5AiA6jrnVNiLUTyKewZvLHbS2bbGFP1Bc0VlMTV6sxtVT1iqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRsNaGNkV3ybyXeK8KtwDuMqKrsNJYyn%2FexBZb54gKiH0jESasgRUcS%2FfkYzIHQ%2FIYU66I5%2FleRG07NjXk9MYdKQsKo%2Bk1gEC%2FBIyYM%2BHjfCnIln9kQCur5%2FI%2BtUI%2FUiJ9K3XBKjL1mbWFPFpn%2Fs%2F84NFC9NN0vEJjCZkynI5apmSMcsq7HZcOKIjaZy57nc8bOWoWIRiTCT4lDFCXbx7A6DsqZMegt0%2F4%2BgSWFKJLkyLi882e7Nvycu1WL%2BQvZv%2BPWb7%2Fm1TvsCKFxUvCQwm8nh38yEHZ3HAgo5oZDPZaf9nSPagnGr10sy%2Fo4MX57Zb95JD8967uK4HIBy137EY69AeDHMZcf91D1LJn%2F6o2M4w5a2jNzUmd0c2MPJF4ARc8Gf7Xm4aOjcIKfz%2FE28OrQterczr0K5HL1ZK7CydNWZW%2BQLq5skk6RRhOaZ%2FSN69vf8XIQ4t%2BtBAnk9yTmzQxIyqYwtHzOeMg%2FDgmRCbN7aklaRhKoIls8Xy4RnDbaU8f5hYfffr%2BiMuhF%2F%2FM13gdeXXb90%2BLD4M1kYEQ0x3CF00HXgH5xgTafKIW%2BItm4ksnyB00wPvUh23cI14%2F7afEJnjTr46wny1eKHt8kB2MsHgk3rw3YnRjrfKgjuzT452hYZ61voHpeVbMrEwwJrwvAY6pgFQMluMUMaSzycCpDD5igUpxf1TjtGpN%2BKJIDbUEP4m1fCHWpahkiEL7UtCgbgldeKRvK%2B%2FeoCv%2FSNFZlTujOYOGzvILo3WfdXOFpK5CkU4C%2BXmL6jCppFRgcDXCY9O82N0VBXw1urH4QxGf45JLsk3BZZ2AKHf1VmHMTXi%2Bof7z37%2Fa8CX4aQR5rjG7tbGAWw0AlP8AF8JgLbJ35VFZ%2BwUB2tUEyms&X-Amz-Signature=9ccafa517de85c4c09d8951cd5fddf4e0492ecda40acf40d1e7952e8335acafe&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
