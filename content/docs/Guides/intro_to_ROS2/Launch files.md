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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R54XWGDI%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T091414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDyjGEC37LX%2BCI%2BKIRkbgtHcqfMu8j0u5mHvPvHtuR32wIhAP7F3UlN2rEp3EGPRI6PpbCNPOn6OvbdrJ760Vz5J%2B5dKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxi03iUMkL6v3%2F6ULEq3APqzlayXzsrzmifBuZ2T1N0%2FUIm66qwP3Dl0ohxdkMU1uIpF%2Bi3NQRkTcwyn%2FZjlO%2BImkGjXg9gUUy33Csh5muQmVnSl9fpJaS%2BkFKMYAdnmC4pS3wUIDmmyjREoFoMACYhvDWIqlZq8aLivX%2Bn3ffghJa4N0FchMm9LpgKMmzk%2B1ZaCtUWEov01xYL4fGnbkt0JNJvAM0KhuzJNccj5fg6ZBydJcW7Ni7YqRHTts1Cl57bDbqkFn9f9EVLHJhI5MGJLuUboCIpTiDhlGH1F%2B2JTeIGT1PGR9JpKvbco6P8yJ%2Bv3VTRtAVa3M79zZkErzCkGMOKEA11GK4MnbEiITUPXz7q%2FXlb2yJI0NfBl%2BUY88L3JpMkV7vVbGhe%2FrBurfzMKlZilBM8Guyix354ryJhfVK51GspbYdjbc51kcmWUpXngxEOQ5Yfxup33Aj6tdCeSoGmdwzIv%2F5CGzijnKZpNQtXZcAw43iwlBs3cS8WfZ4VkL2YvSTI6bdNMaVE6zkR7DcCf8iUQAFATF6t0BLsjv19ZFx%2BbOXZflAvgQysdFs51VAKhD2dN3C0UXGKIntM5YBEU6dm%2Fs8P1AYfJDAW%2FLvPWWqZxEr6r0zniVWo6ui6U0aH1R2VA4iWJTCh%2FufDBjqkAdWiHzyCfRmMFvNW7WhDd1uCakCcKbrPbmyWKcaKxv%2BbhcK4dWEwwfHhKFowIhJIpzNIo2ECz1BkJAKWa0BlxSvr8VCrEUngwktDRqqg4Uo4N7wpOEUYzWC%2FGoTNgn0cTNVigZGoQealkRsNqP8afDUSG6c8%2BlFfN%2FNr3%2FCpBcAHkaLCeS1cLToY9zH%2FvMGtUM5dw5rsQ0jmQ6yvlPiV1jEo8QHH&X-Amz-Signature=745a5e6bdbaeda9c2dc13097461727911fe82d1bd972d731083776ea890c9fbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R54XWGDI%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T091414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDyjGEC37LX%2BCI%2BKIRkbgtHcqfMu8j0u5mHvPvHtuR32wIhAP7F3UlN2rEp3EGPRI6PpbCNPOn6OvbdrJ760Vz5J%2B5dKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxi03iUMkL6v3%2F6ULEq3APqzlayXzsrzmifBuZ2T1N0%2FUIm66qwP3Dl0ohxdkMU1uIpF%2Bi3NQRkTcwyn%2FZjlO%2BImkGjXg9gUUy33Csh5muQmVnSl9fpJaS%2BkFKMYAdnmC4pS3wUIDmmyjREoFoMACYhvDWIqlZq8aLivX%2Bn3ffghJa4N0FchMm9LpgKMmzk%2B1ZaCtUWEov01xYL4fGnbkt0JNJvAM0KhuzJNccj5fg6ZBydJcW7Ni7YqRHTts1Cl57bDbqkFn9f9EVLHJhI5MGJLuUboCIpTiDhlGH1F%2B2JTeIGT1PGR9JpKvbco6P8yJ%2Bv3VTRtAVa3M79zZkErzCkGMOKEA11GK4MnbEiITUPXz7q%2FXlb2yJI0NfBl%2BUY88L3JpMkV7vVbGhe%2FrBurfzMKlZilBM8Guyix354ryJhfVK51GspbYdjbc51kcmWUpXngxEOQ5Yfxup33Aj6tdCeSoGmdwzIv%2F5CGzijnKZpNQtXZcAw43iwlBs3cS8WfZ4VkL2YvSTI6bdNMaVE6zkR7DcCf8iUQAFATF6t0BLsjv19ZFx%2BbOXZflAvgQysdFs51VAKhD2dN3C0UXGKIntM5YBEU6dm%2Fs8P1AYfJDAW%2FLvPWWqZxEr6r0zniVWo6ui6U0aH1R2VA4iWJTCh%2FufDBjqkAdWiHzyCfRmMFvNW7WhDd1uCakCcKbrPbmyWKcaKxv%2BbhcK4dWEwwfHhKFowIhJIpzNIo2ECz1BkJAKWa0BlxSvr8VCrEUngwktDRqqg4Uo4N7wpOEUYzWC%2FGoTNgn0cTNVigZGoQealkRsNqP8afDUSG6c8%2BlFfN%2FNr3%2FCpBcAHkaLCeS1cLToY9zH%2FvMGtUM5dw5rsQ0jmQ6yvlPiV1jEo8QHH&X-Amz-Signature=796bf6e9a579653b836e28f9ec6f2da0d44f3a17b0c2b1fd9d60180902f5ade2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R54XWGDI%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T091414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDyjGEC37LX%2BCI%2BKIRkbgtHcqfMu8j0u5mHvPvHtuR32wIhAP7F3UlN2rEp3EGPRI6PpbCNPOn6OvbdrJ760Vz5J%2B5dKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxi03iUMkL6v3%2F6ULEq3APqzlayXzsrzmifBuZ2T1N0%2FUIm66qwP3Dl0ohxdkMU1uIpF%2Bi3NQRkTcwyn%2FZjlO%2BImkGjXg9gUUy33Csh5muQmVnSl9fpJaS%2BkFKMYAdnmC4pS3wUIDmmyjREoFoMACYhvDWIqlZq8aLivX%2Bn3ffghJa4N0FchMm9LpgKMmzk%2B1ZaCtUWEov01xYL4fGnbkt0JNJvAM0KhuzJNccj5fg6ZBydJcW7Ni7YqRHTts1Cl57bDbqkFn9f9EVLHJhI5MGJLuUboCIpTiDhlGH1F%2B2JTeIGT1PGR9JpKvbco6P8yJ%2Bv3VTRtAVa3M79zZkErzCkGMOKEA11GK4MnbEiITUPXz7q%2FXlb2yJI0NfBl%2BUY88L3JpMkV7vVbGhe%2FrBurfzMKlZilBM8Guyix354ryJhfVK51GspbYdjbc51kcmWUpXngxEOQ5Yfxup33Aj6tdCeSoGmdwzIv%2F5CGzijnKZpNQtXZcAw43iwlBs3cS8WfZ4VkL2YvSTI6bdNMaVE6zkR7DcCf8iUQAFATF6t0BLsjv19ZFx%2BbOXZflAvgQysdFs51VAKhD2dN3C0UXGKIntM5YBEU6dm%2Fs8P1AYfJDAW%2FLvPWWqZxEr6r0zniVWo6ui6U0aH1R2VA4iWJTCh%2FufDBjqkAdWiHzyCfRmMFvNW7WhDd1uCakCcKbrPbmyWKcaKxv%2BbhcK4dWEwwfHhKFowIhJIpzNIo2ECz1BkJAKWa0BlxSvr8VCrEUngwktDRqqg4Uo4N7wpOEUYzWC%2FGoTNgn0cTNVigZGoQealkRsNqP8afDUSG6c8%2BlFfN%2FNr3%2FCpBcAHkaLCeS1cLToY9zH%2FvMGtUM5dw5rsQ0jmQ6yvlPiV1jEo8QHH&X-Amz-Signature=9e25810ee2e71bc1805afbb34cec8af87275e8b24ab35e7ff419c6fd7b0e4575&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
