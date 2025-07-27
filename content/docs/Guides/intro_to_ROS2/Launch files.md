---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647JLSA4T%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCD8h5i3xLDlbDoDNXI0oldUa6SkixStiRWb2GTrf%2FWywIgNCzaCz6UnHrqhS1i1WhyFDiXyrr0yxkABubiaVgRWCsq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDN7566lWPFukuBlEpircAyWZsGHaQPHNlWsfawTZL4fTvZK3dj0GpeIzteIRoauJof0JWlxHIXgVIM1tKkBf5O6pDc%2BXJrnj8WTFW83V0zNk2roSt%2B8sZPjU8DEcUjeFvG0uZ0ccJpMibKiTZIh%2BlyVdx6c6AMDrwUjbdZJDmzZX2rHZBBkSi3dDVMKo5hePwp7ELt00hV3vyDZR66OySCvrSVkN6DLm2z4YcYLO%2F7YGoaUonMZ0xmfZN9TCjFtsDZ%2FzFxwx00aRvPpPyxcsDbvs8enirO9vai7KpqbQCAqrxscMve3HFXa09rbkc89eQ9baEzPE9Rhw0BV%2FY8YPOmh38bG5ajfwb%2BDKfQ2nwztKh%2BEPoySv%2BwmE0u%2BIsdjoxV8pXJ434SJJodlbHAPHDFb7NljTRe0NtziKAV1BccIeYyjiJQyS5kgwaxM7JStDrv%2BV0K%2BFd33MOD%2FgQEst0KHuBTCfw1aGJ%2BBoIhiw9bWfbJwb1McuHnUSeVhk%2BFHFmb0XpxyAtwtJMoHHaekV2CG3MhxjqbCl7kVALXg0b05i9SCqaTor3FlbxtHYQCAY61%2Bdmmzjcke222AgH7KCVvvsD%2BSwRAzYfgWBx9m8W%2FUIS4ta2xXk4tYsK16AtePcJcEA7vgvXbT0Sg2kMOG6lsQGOqUBu%2BD4OaqcrAT7UnVCbqOwWlwxBRfv97ZaKFU%2FHDglfXj59%2FJIL8M9pHB%2BGAkxNkLfjc9RdkfUhlAVlBQ3nt0p2qVJTcvmpavLjDIFPR8LAzy8w8K41fi5YSb0B7yxywK3FeMz5mhK6Xla8HH1CC0a6c0K%2Fz2GiKA%2FxQyQRFCIT0s4DFH%2BUFG1nlDZclEW92cR%2FHY%2BY%2BDIiyVL8EGULKgb6JD92ExS&X-Amz-Signature=3864493f52a01859153f05889d6b5401933af3dd9ab14f471a58872eb38f2764&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647JLSA4T%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCD8h5i3xLDlbDoDNXI0oldUa6SkixStiRWb2GTrf%2FWywIgNCzaCz6UnHrqhS1i1WhyFDiXyrr0yxkABubiaVgRWCsq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDN7566lWPFukuBlEpircAyWZsGHaQPHNlWsfawTZL4fTvZK3dj0GpeIzteIRoauJof0JWlxHIXgVIM1tKkBf5O6pDc%2BXJrnj8WTFW83V0zNk2roSt%2B8sZPjU8DEcUjeFvG0uZ0ccJpMibKiTZIh%2BlyVdx6c6AMDrwUjbdZJDmzZX2rHZBBkSi3dDVMKo5hePwp7ELt00hV3vyDZR66OySCvrSVkN6DLm2z4YcYLO%2F7YGoaUonMZ0xmfZN9TCjFtsDZ%2FzFxwx00aRvPpPyxcsDbvs8enirO9vai7KpqbQCAqrxscMve3HFXa09rbkc89eQ9baEzPE9Rhw0BV%2FY8YPOmh38bG5ajfwb%2BDKfQ2nwztKh%2BEPoySv%2BwmE0u%2BIsdjoxV8pXJ434SJJodlbHAPHDFb7NljTRe0NtziKAV1BccIeYyjiJQyS5kgwaxM7JStDrv%2BV0K%2BFd33MOD%2FgQEst0KHuBTCfw1aGJ%2BBoIhiw9bWfbJwb1McuHnUSeVhk%2BFHFmb0XpxyAtwtJMoHHaekV2CG3MhxjqbCl7kVALXg0b05i9SCqaTor3FlbxtHYQCAY61%2Bdmmzjcke222AgH7KCVvvsD%2BSwRAzYfgWBx9m8W%2FUIS4ta2xXk4tYsK16AtePcJcEA7vgvXbT0Sg2kMOG6lsQGOqUBu%2BD4OaqcrAT7UnVCbqOwWlwxBRfv97ZaKFU%2FHDglfXj59%2FJIL8M9pHB%2BGAkxNkLfjc9RdkfUhlAVlBQ3nt0p2qVJTcvmpavLjDIFPR8LAzy8w8K41fi5YSb0B7yxywK3FeMz5mhK6Xla8HH1CC0a6c0K%2Fz2GiKA%2FxQyQRFCIT0s4DFH%2BUFG1nlDZclEW92cR%2FHY%2BY%2BDIiyVL8EGULKgb6JD92ExS&X-Amz-Signature=c18f7de67d5a820876fdb4298d37c33257363a7624162a05f38e930b1c930aa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647JLSA4T%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCD8h5i3xLDlbDoDNXI0oldUa6SkixStiRWb2GTrf%2FWywIgNCzaCz6UnHrqhS1i1WhyFDiXyrr0yxkABubiaVgRWCsq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDN7566lWPFukuBlEpircAyWZsGHaQPHNlWsfawTZL4fTvZK3dj0GpeIzteIRoauJof0JWlxHIXgVIM1tKkBf5O6pDc%2BXJrnj8WTFW83V0zNk2roSt%2B8sZPjU8DEcUjeFvG0uZ0ccJpMibKiTZIh%2BlyVdx6c6AMDrwUjbdZJDmzZX2rHZBBkSi3dDVMKo5hePwp7ELt00hV3vyDZR66OySCvrSVkN6DLm2z4YcYLO%2F7YGoaUonMZ0xmfZN9TCjFtsDZ%2FzFxwx00aRvPpPyxcsDbvs8enirO9vai7KpqbQCAqrxscMve3HFXa09rbkc89eQ9baEzPE9Rhw0BV%2FY8YPOmh38bG5ajfwb%2BDKfQ2nwztKh%2BEPoySv%2BwmE0u%2BIsdjoxV8pXJ434SJJodlbHAPHDFb7NljTRe0NtziKAV1BccIeYyjiJQyS5kgwaxM7JStDrv%2BV0K%2BFd33MOD%2FgQEst0KHuBTCfw1aGJ%2BBoIhiw9bWfbJwb1McuHnUSeVhk%2BFHFmb0XpxyAtwtJMoHHaekV2CG3MhxjqbCl7kVALXg0b05i9SCqaTor3FlbxtHYQCAY61%2Bdmmzjcke222AgH7KCVvvsD%2BSwRAzYfgWBx9m8W%2FUIS4ta2xXk4tYsK16AtePcJcEA7vgvXbT0Sg2kMOG6lsQGOqUBu%2BD4OaqcrAT7UnVCbqOwWlwxBRfv97ZaKFU%2FHDglfXj59%2FJIL8M9pHB%2BGAkxNkLfjc9RdkfUhlAVlBQ3nt0p2qVJTcvmpavLjDIFPR8LAzy8w8K41fi5YSb0B7yxywK3FeMz5mhK6Xla8HH1CC0a6c0K%2Fz2GiKA%2FxQyQRFCIT0s4DFH%2BUFG1nlDZclEW92cR%2FHY%2BY%2BDIiyVL8EGULKgb6JD92ExS&X-Amz-Signature=25f2d7ff0ce902b7f0c14ea44c53117e8995f93da30d67fa3b7ad97b1035908f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
