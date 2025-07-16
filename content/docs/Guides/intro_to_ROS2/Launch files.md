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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A5QIIUT%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T171153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCWrT5Z7uQC1U437DIRwWH4WTotV1ADzBuiXIpx%2BT7YKgIgKaI2cIoeV4gRWd2rqxTXWiSJr%2F0DaERohuyZP4nrTZQq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDPV1wukDeiTGgiRpAircA%2BHT%2FTZfkrBWc4cBfVliKVgmvdcEq4SKAny1BIzQozzN9aja8DuPNOZK6KegHBQvK4DFQmd4JetFnI5boPPFasLdAqlK9PXMnWgX4ZwcsxhimEND3FmhZAVEGfT0gESsYTYa6rdKyh9IwhMbpuz2W6ohimL0UGE%2FAxODO0QQ6teNnj6phsLbfeDjY%2FcNpCOEa3oviM3GX5DSn64%2BOaTurLLQ36liYWsO9UoNzy%2B1zunciky3uGxIHNdffzawQ0985WLEjHAtF3j8P8JatsrkRRqutsFuXtt4bmOYzQtgubOPX2Wb0qjRd5ouQUgGjHHxc6Zp%2FapGtJImeHdOOqXrJZNjdfPcXchEYWMOgKlXVbBK8p2n%2F6%2BgPVwypA72%2BJ9XY8%2BDR1s6d2Kte3pygTKhioLnmJVMuYLd3V4KRn7fkoLyFfia%2BQwAheGOCCtttMx%2FfLqhWuWs9v9%2BTBupO0GNWFIsFKXBG69Fcf9Q1FgGC%2FwWtR%2FBlrT89C5Yjecja3SW6b5cNiLXVA%2B5J6i5MY4jzLrpA4UudJVGcLoLCeloQIAuTGdFTVf0aIjykjsAn2jVKloZ7Gtd0JfejFr1gBhoh9lhuqStkhiqRO5aOHFSX%2FG%2FdOCyVeKFaMtYp0bPMNez38MGOqUB%2BDhwaZkrNQph6qnz52jQwEHmROUgujS0eLbOxjYEUwhU8twv65RB%2BRl8F7bgggFX6EOhxW05msTKJ1PVntIJrAIHBrNI7xAeDjP3Ta1Wx33tSXVgjwhKnJ2prZ5YCZ%2FCdFodBdLsIq%2FKBXgPir9eEn7KWQqUugKc%2BMl3TEtuDVKns5NtFTvO8rw6GCKWZJxJFX%2BU6I%2F7M9xgx5BIbcmcHjN1BgtU&X-Amz-Signature=845715501a7cf97521e0e07fdab3346e1d27076c15bfef98ea63512ebb4e887b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A5QIIUT%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T171153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCWrT5Z7uQC1U437DIRwWH4WTotV1ADzBuiXIpx%2BT7YKgIgKaI2cIoeV4gRWd2rqxTXWiSJr%2F0DaERohuyZP4nrTZQq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDPV1wukDeiTGgiRpAircA%2BHT%2FTZfkrBWc4cBfVliKVgmvdcEq4SKAny1BIzQozzN9aja8DuPNOZK6KegHBQvK4DFQmd4JetFnI5boPPFasLdAqlK9PXMnWgX4ZwcsxhimEND3FmhZAVEGfT0gESsYTYa6rdKyh9IwhMbpuz2W6ohimL0UGE%2FAxODO0QQ6teNnj6phsLbfeDjY%2FcNpCOEa3oviM3GX5DSn64%2BOaTurLLQ36liYWsO9UoNzy%2B1zunciky3uGxIHNdffzawQ0985WLEjHAtF3j8P8JatsrkRRqutsFuXtt4bmOYzQtgubOPX2Wb0qjRd5ouQUgGjHHxc6Zp%2FapGtJImeHdOOqXrJZNjdfPcXchEYWMOgKlXVbBK8p2n%2F6%2BgPVwypA72%2BJ9XY8%2BDR1s6d2Kte3pygTKhioLnmJVMuYLd3V4KRn7fkoLyFfia%2BQwAheGOCCtttMx%2FfLqhWuWs9v9%2BTBupO0GNWFIsFKXBG69Fcf9Q1FgGC%2FwWtR%2FBlrT89C5Yjecja3SW6b5cNiLXVA%2B5J6i5MY4jzLrpA4UudJVGcLoLCeloQIAuTGdFTVf0aIjykjsAn2jVKloZ7Gtd0JfejFr1gBhoh9lhuqStkhiqRO5aOHFSX%2FG%2FdOCyVeKFaMtYp0bPMNez38MGOqUB%2BDhwaZkrNQph6qnz52jQwEHmROUgujS0eLbOxjYEUwhU8twv65RB%2BRl8F7bgggFX6EOhxW05msTKJ1PVntIJrAIHBrNI7xAeDjP3Ta1Wx33tSXVgjwhKnJ2prZ5YCZ%2FCdFodBdLsIq%2FKBXgPir9eEn7KWQqUugKc%2BMl3TEtuDVKns5NtFTvO8rw6GCKWZJxJFX%2BU6I%2F7M9xgx5BIbcmcHjN1BgtU&X-Amz-Signature=cb960b6651666db9f3132a09777c95b3f81b91f8fe5910a690c9611a5e69b462&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A5QIIUT%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T171153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCWrT5Z7uQC1U437DIRwWH4WTotV1ADzBuiXIpx%2BT7YKgIgKaI2cIoeV4gRWd2rqxTXWiSJr%2F0DaERohuyZP4nrTZQq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDPV1wukDeiTGgiRpAircA%2BHT%2FTZfkrBWc4cBfVliKVgmvdcEq4SKAny1BIzQozzN9aja8DuPNOZK6KegHBQvK4DFQmd4JetFnI5boPPFasLdAqlK9PXMnWgX4ZwcsxhimEND3FmhZAVEGfT0gESsYTYa6rdKyh9IwhMbpuz2W6ohimL0UGE%2FAxODO0QQ6teNnj6phsLbfeDjY%2FcNpCOEa3oviM3GX5DSn64%2BOaTurLLQ36liYWsO9UoNzy%2B1zunciky3uGxIHNdffzawQ0985WLEjHAtF3j8P8JatsrkRRqutsFuXtt4bmOYzQtgubOPX2Wb0qjRd5ouQUgGjHHxc6Zp%2FapGtJImeHdOOqXrJZNjdfPcXchEYWMOgKlXVbBK8p2n%2F6%2BgPVwypA72%2BJ9XY8%2BDR1s6d2Kte3pygTKhioLnmJVMuYLd3V4KRn7fkoLyFfia%2BQwAheGOCCtttMx%2FfLqhWuWs9v9%2BTBupO0GNWFIsFKXBG69Fcf9Q1FgGC%2FwWtR%2FBlrT89C5Yjecja3SW6b5cNiLXVA%2B5J6i5MY4jzLrpA4UudJVGcLoLCeloQIAuTGdFTVf0aIjykjsAn2jVKloZ7Gtd0JfejFr1gBhoh9lhuqStkhiqRO5aOHFSX%2FG%2FdOCyVeKFaMtYp0bPMNez38MGOqUB%2BDhwaZkrNQph6qnz52jQwEHmROUgujS0eLbOxjYEUwhU8twv65RB%2BRl8F7bgggFX6EOhxW05msTKJ1PVntIJrAIHBrNI7xAeDjP3Ta1Wx33tSXVgjwhKnJ2prZ5YCZ%2FCdFodBdLsIq%2FKBXgPir9eEn7KWQqUugKc%2BMl3TEtuDVKns5NtFTvO8rw6GCKWZJxJFX%2BU6I%2F7M9xgx5BIbcmcHjN1BgtU&X-Amz-Signature=2e84ce9b10d63757a27ff3a825fd7c1ba0da0257e7dec80b3d0217330c3cf7c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
