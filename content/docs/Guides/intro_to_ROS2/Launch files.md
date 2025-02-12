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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAHGNN3G%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T050833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5Ir6tAFxfY4UCUH88txHCzeo4NtBN8mQxd55w6lTs7AIhAPpagn3pnKTlvB2%2FvCuAKJntXHx8rH2StbATJ4LCBjDfKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmSWKHIK8b%2BA8q1J0q3APMYYyUzA1vXs4GgsHISNYgozAZQcoxcXUbwl7QU0TapavMjdGMlRsRoARBn%2Bh9%2BzAEefZTiLQmkWEBPqszOLQY7x1qlWBX6EZwsxk9yFtwmqTq%2F9XLvgF55iJMypGKY72cQYEsWiJekW9xKls2xtca8y%2BSC7%2FXaYN4C7kz4X6bclGNBrSSH8%2Bty%2FKFWONJaQ1fIL8b0022cbxRL9lClVKLaB5%2FLGW7Pr9tjfD8ynlkVuMNm8TItp9Cv6mu7psWccZectHdnidbxwgN8ubSEhWcv7jW4mssSVM2%2BfBHiFv8xYSkD9jOdA6k0SCAXi75WbYajrvZbCCnfQxvZFItt1pN8lilubv5sF%2Bt6S50GfMtu80ANikDRb3qg2TKrqNczjh5X7MLWNP8Zrxbk7H1R8kA%2B7P%2FpOo0cLgoUQXGDZ6PbdPU4sGm%2F%2Fql%2BeJ6r%2FtSyKI1oxU3mF3TeqP39g2eBdJNB5GgT3lEHWJZ5w4z1toci4RoMCjISqDUlRDf6qHG0YSymqAmihRBSxwIu3p1K3FpqaRvur7YLOET6WH7TwWJt5pZ5RpcK9nW75IrCtlN%2BLE6LOkHSlvtkpmtR88XTDXD8IN%2FfgFhn3qbbJ7988mRnHX9E4aEkyGceEyBoTDn5q%2B9BjqkATKxEG3XRCk1uejMebRYOgGCab3uAWAkZlUNDhqu0pt%2BZZxDYav7BUf%2BL8pkV%2FXLBuE9x8j8qHpKwhOvUZMpEmeBPOMOR4cGYI3zbc%2FIF1Vsbq3p3djToYWRYaYqVl8co8O6EkNVM03%2FHXx%2F6w46OqIUwTAKTuGRzFnX5VQyqlVE9zzxwm74M1gOrLA5BIuA1O1OT2WCMPg6feJpSaFtVwjWupYN&X-Amz-Signature=d10fe5c9255a0fcafc35e27bd87ed20268e636bacfc7e7cde0ab7ec0cd93d6be&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAHGNN3G%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T050833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5Ir6tAFxfY4UCUH88txHCzeo4NtBN8mQxd55w6lTs7AIhAPpagn3pnKTlvB2%2FvCuAKJntXHx8rH2StbATJ4LCBjDfKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmSWKHIK8b%2BA8q1J0q3APMYYyUzA1vXs4GgsHISNYgozAZQcoxcXUbwl7QU0TapavMjdGMlRsRoARBn%2Bh9%2BzAEefZTiLQmkWEBPqszOLQY7x1qlWBX6EZwsxk9yFtwmqTq%2F9XLvgF55iJMypGKY72cQYEsWiJekW9xKls2xtca8y%2BSC7%2FXaYN4C7kz4X6bclGNBrSSH8%2Bty%2FKFWONJaQ1fIL8b0022cbxRL9lClVKLaB5%2FLGW7Pr9tjfD8ynlkVuMNm8TItp9Cv6mu7psWccZectHdnidbxwgN8ubSEhWcv7jW4mssSVM2%2BfBHiFv8xYSkD9jOdA6k0SCAXi75WbYajrvZbCCnfQxvZFItt1pN8lilubv5sF%2Bt6S50GfMtu80ANikDRb3qg2TKrqNczjh5X7MLWNP8Zrxbk7H1R8kA%2B7P%2FpOo0cLgoUQXGDZ6PbdPU4sGm%2F%2Fql%2BeJ6r%2FtSyKI1oxU3mF3TeqP39g2eBdJNB5GgT3lEHWJZ5w4z1toci4RoMCjISqDUlRDf6qHG0YSymqAmihRBSxwIu3p1K3FpqaRvur7YLOET6WH7TwWJt5pZ5RpcK9nW75IrCtlN%2BLE6LOkHSlvtkpmtR88XTDXD8IN%2FfgFhn3qbbJ7988mRnHX9E4aEkyGceEyBoTDn5q%2B9BjqkATKxEG3XRCk1uejMebRYOgGCab3uAWAkZlUNDhqu0pt%2BZZxDYav7BUf%2BL8pkV%2FXLBuE9x8j8qHpKwhOvUZMpEmeBPOMOR4cGYI3zbc%2FIF1Vsbq3p3djToYWRYaYqVl8co8O6EkNVM03%2FHXx%2F6w46OqIUwTAKTuGRzFnX5VQyqlVE9zzxwm74M1gOrLA5BIuA1O1OT2WCMPg6feJpSaFtVwjWupYN&X-Amz-Signature=bb2282a972dd87ca3c8accc298b4264958f75100ad9a35a66d844f6dbe3ca2af&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAHGNN3G%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T050833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5Ir6tAFxfY4UCUH88txHCzeo4NtBN8mQxd55w6lTs7AIhAPpagn3pnKTlvB2%2FvCuAKJntXHx8rH2StbATJ4LCBjDfKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmSWKHIK8b%2BA8q1J0q3APMYYyUzA1vXs4GgsHISNYgozAZQcoxcXUbwl7QU0TapavMjdGMlRsRoARBn%2Bh9%2BzAEefZTiLQmkWEBPqszOLQY7x1qlWBX6EZwsxk9yFtwmqTq%2F9XLvgF55iJMypGKY72cQYEsWiJekW9xKls2xtca8y%2BSC7%2FXaYN4C7kz4X6bclGNBrSSH8%2Bty%2FKFWONJaQ1fIL8b0022cbxRL9lClVKLaB5%2FLGW7Pr9tjfD8ynlkVuMNm8TItp9Cv6mu7psWccZectHdnidbxwgN8ubSEhWcv7jW4mssSVM2%2BfBHiFv8xYSkD9jOdA6k0SCAXi75WbYajrvZbCCnfQxvZFItt1pN8lilubv5sF%2Bt6S50GfMtu80ANikDRb3qg2TKrqNczjh5X7MLWNP8Zrxbk7H1R8kA%2B7P%2FpOo0cLgoUQXGDZ6PbdPU4sGm%2F%2Fql%2BeJ6r%2FtSyKI1oxU3mF3TeqP39g2eBdJNB5GgT3lEHWJZ5w4z1toci4RoMCjISqDUlRDf6qHG0YSymqAmihRBSxwIu3p1K3FpqaRvur7YLOET6WH7TwWJt5pZ5RpcK9nW75IrCtlN%2BLE6LOkHSlvtkpmtR88XTDXD8IN%2FfgFhn3qbbJ7988mRnHX9E4aEkyGceEyBoTDn5q%2B9BjqkATKxEG3XRCk1uejMebRYOgGCab3uAWAkZlUNDhqu0pt%2BZZxDYav7BUf%2BL8pkV%2FXLBuE9x8j8qHpKwhOvUZMpEmeBPOMOR4cGYI3zbc%2FIF1Vsbq3p3djToYWRYaYqVl8co8O6EkNVM03%2FHXx%2F6w46OqIUwTAKTuGRzFnX5VQyqlVE9zzxwm74M1gOrLA5BIuA1O1OT2WCMPg6feJpSaFtVwjWupYN&X-Amz-Signature=be1ef4020956a18dcad10b38eb71111e5d4c57ea3c29a1ccd356d212440dd143&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
