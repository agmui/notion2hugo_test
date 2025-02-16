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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HASIJDS%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T150245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCICtqi8FFRLx%2B%2BqhPs5F8kNkXB%2F9IXgyx5MfOv5sJRfryAiEAoJ86%2F32mTGUd%2BcjY2TSTkpNBYcUzEYl0ezFELu8sw9Qq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDK%2BWJmlrTTDRWseFNCrcA3lbgUVKtqJMc3L7WHnBYqAW4QCdrazZEEu6g%2B2H%2Ftb9%2B5VZxdGTI1VH9iSOvRxRmrjuPvOAJhq8E%2Fu4qC7TEKiDLeYw%2BjzGGRg%2Blsa0Qro%2BTQ2RznYyBWegonC0dULHyzWj3Mg%2BBSB4j8laeXO2OBYRZ2n7bB5qZFr6a5nfoVYbLj5P1LEa1g4II2hbyQKIUFm95Rrj9lMgs%2B2EILzKxzdx2GJXvpFPttkH9D81L6a%2F%2FXZQbT8U%2B9m1NqVmVh4w%2Bi1tvKOy6WxTyDn%2Fvs5xlrVP5a7j2PP%2FLpKlpV3S7KZU2O7jT7tKkAY4nh2q3BB2zSzD1mrvciyx1MtbOyVLzL9T2q0ypV4%2F%2B6%2BJm%2BOF35dLOq3I5rEMAIst4AXOVBWt674bp15r33kfM53MS1lUW38G%2FMypy1VeLnEdPpfgDtNK7MNZxGisirkIBNKvQ%2FxNZDv6qY5eW2vJW%2BcTuYmGixPIrXu3AVaC7RtymtgIo%2BtWojbdj9ojW%2FAP0xKg44kMJN6HZ6sIZEwCSHZbs%2FItfbPXEwRcwVQpdQk01JhfM9SXHX1NuSa4JQmTrS5WuSrxpU1JNFPtXOwvBsVKb4OqAi6qguAfSUr80yzXR7PCIK44AqzbPiPsPvF4YASMMO2Zx70GOqUBxJCdhUNTwUPK0u17IBoLrOkSyC%2Bz4tGhttSZjverMRf6K1mw%2FDICGbsEU24WtGFSFL1ENIpTQAZIIgsd%2FqsabmYwcHQzBqhh5yHOFxPsZTEtFpyce1AhgMehDQJS4z2lOS0BegfHLmYtXBiHoM9GsQv1f5%2FrruooR2r4glYDcIpKCfdtuRSRO9AhoGi8h62H15oiLAFaMfvgYUCrQ%2B0SbNef9Xcs&X-Amz-Signature=d9ee63ef10d25b4299002b0cf0db893653a3552266586410fc118ca80e60000f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HASIJDS%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T150245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCICtqi8FFRLx%2B%2BqhPs5F8kNkXB%2F9IXgyx5MfOv5sJRfryAiEAoJ86%2F32mTGUd%2BcjY2TSTkpNBYcUzEYl0ezFELu8sw9Qq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDK%2BWJmlrTTDRWseFNCrcA3lbgUVKtqJMc3L7WHnBYqAW4QCdrazZEEu6g%2B2H%2Ftb9%2B5VZxdGTI1VH9iSOvRxRmrjuPvOAJhq8E%2Fu4qC7TEKiDLeYw%2BjzGGRg%2Blsa0Qro%2BTQ2RznYyBWegonC0dULHyzWj3Mg%2BBSB4j8laeXO2OBYRZ2n7bB5qZFr6a5nfoVYbLj5P1LEa1g4II2hbyQKIUFm95Rrj9lMgs%2B2EILzKxzdx2GJXvpFPttkH9D81L6a%2F%2FXZQbT8U%2B9m1NqVmVh4w%2Bi1tvKOy6WxTyDn%2Fvs5xlrVP5a7j2PP%2FLpKlpV3S7KZU2O7jT7tKkAY4nh2q3BB2zSzD1mrvciyx1MtbOyVLzL9T2q0ypV4%2F%2B6%2BJm%2BOF35dLOq3I5rEMAIst4AXOVBWt674bp15r33kfM53MS1lUW38G%2FMypy1VeLnEdPpfgDtNK7MNZxGisirkIBNKvQ%2FxNZDv6qY5eW2vJW%2BcTuYmGixPIrXu3AVaC7RtymtgIo%2BtWojbdj9ojW%2FAP0xKg44kMJN6HZ6sIZEwCSHZbs%2FItfbPXEwRcwVQpdQk01JhfM9SXHX1NuSa4JQmTrS5WuSrxpU1JNFPtXOwvBsVKb4OqAi6qguAfSUr80yzXR7PCIK44AqzbPiPsPvF4YASMMO2Zx70GOqUBxJCdhUNTwUPK0u17IBoLrOkSyC%2Bz4tGhttSZjverMRf6K1mw%2FDICGbsEU24WtGFSFL1ENIpTQAZIIgsd%2FqsabmYwcHQzBqhh5yHOFxPsZTEtFpyce1AhgMehDQJS4z2lOS0BegfHLmYtXBiHoM9GsQv1f5%2FrruooR2r4glYDcIpKCfdtuRSRO9AhoGi8h62H15oiLAFaMfvgYUCrQ%2B0SbNef9Xcs&X-Amz-Signature=015bd5128b8b09b74d0db317942be596bb694f98890ca13347a97fbca04bea25&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HASIJDS%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T150245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCICtqi8FFRLx%2B%2BqhPs5F8kNkXB%2F9IXgyx5MfOv5sJRfryAiEAoJ86%2F32mTGUd%2BcjY2TSTkpNBYcUzEYl0ezFELu8sw9Qq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDK%2BWJmlrTTDRWseFNCrcA3lbgUVKtqJMc3L7WHnBYqAW4QCdrazZEEu6g%2B2H%2Ftb9%2B5VZxdGTI1VH9iSOvRxRmrjuPvOAJhq8E%2Fu4qC7TEKiDLeYw%2BjzGGRg%2Blsa0Qro%2BTQ2RznYyBWegonC0dULHyzWj3Mg%2BBSB4j8laeXO2OBYRZ2n7bB5qZFr6a5nfoVYbLj5P1LEa1g4II2hbyQKIUFm95Rrj9lMgs%2B2EILzKxzdx2GJXvpFPttkH9D81L6a%2F%2FXZQbT8U%2B9m1NqVmVh4w%2Bi1tvKOy6WxTyDn%2Fvs5xlrVP5a7j2PP%2FLpKlpV3S7KZU2O7jT7tKkAY4nh2q3BB2zSzD1mrvciyx1MtbOyVLzL9T2q0ypV4%2F%2B6%2BJm%2BOF35dLOq3I5rEMAIst4AXOVBWt674bp15r33kfM53MS1lUW38G%2FMypy1VeLnEdPpfgDtNK7MNZxGisirkIBNKvQ%2FxNZDv6qY5eW2vJW%2BcTuYmGixPIrXu3AVaC7RtymtgIo%2BtWojbdj9ojW%2FAP0xKg44kMJN6HZ6sIZEwCSHZbs%2FItfbPXEwRcwVQpdQk01JhfM9SXHX1NuSa4JQmTrS5WuSrxpU1JNFPtXOwvBsVKb4OqAi6qguAfSUr80yzXR7PCIK44AqzbPiPsPvF4YASMMO2Zx70GOqUBxJCdhUNTwUPK0u17IBoLrOkSyC%2Bz4tGhttSZjverMRf6K1mw%2FDICGbsEU24WtGFSFL1ENIpTQAZIIgsd%2FqsabmYwcHQzBqhh5yHOFxPsZTEtFpyce1AhgMehDQJS4z2lOS0BegfHLmYtXBiHoM9GsQv1f5%2FrruooR2r4glYDcIpKCfdtuRSRO9AhoGi8h62H15oiLAFaMfvgYUCrQ%2B0SbNef9Xcs&X-Amz-Signature=7e7c06b6d139ebc88eb28a4f507d47eeedd2189e69a9279b03a13d3ade2aae54&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
