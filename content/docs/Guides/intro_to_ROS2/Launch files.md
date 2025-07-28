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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V47GFOYV%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIC2vZw4VsYgMcHR8LniG3sjbnRt%2FOEREOLmNs1ZkS4aGAiAW2Nie9vIdAaVzyc9ce2CYFQ1Fp9dwfil92M7I%2BsmPlSqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRIeYUYNvWPtJwtfQKtwD4fAIUeLQJ9knRxh%2FdOZNjLobdVC4H7GuCePa%2FfKE9xOXDKl7YfiOMdR%2BVsxkbdagEENRG0V7SmxY7xjeotQcFt6Y1Fp21icE2PqRiv3eRyd7k1%2BPZMZxPtDWeo%2BKTox7%2FVrGJnvt9bs7pD04eTFoc549ynwo6YOVfYWL%2F8C5780q7lQ9Ug22lfSJ%2FlkB1%2FmkdcCWK0sIuhEG2Y%2FYQG%2BB9%2FT3hbCefyTTtppYqempn0tBdsIvip9YLq30Fodz2Tt5E6mJhEIcW2uOsD%2FVRwzU4JoFHr%2Fp7%2FZ0UavnharCQ9t0rpH5nfATJYBqiN2jYQij12LywGsz2MK9mMujWS0Bkwsjtdk%2BGlj0yYwm7lhtalRmRYIZz%2FD3d1B7vlLUMbt0MPfJnbyjaYKZ4Msb%2BCX7ZTxFSM%2FCUXC07cSvZrgjhzJbpDillQPz6eVDzeygfAAqmyg%2BQRpf4KF0pR2smSSp6oCpWIULBl%2FpSOadgZ5DF3BefSIXHFqdGLNbLahHW3dTqExwF7mPmdLrCfaO%2F4GD1SnXVhS9wGcWu%2BGCx8ASEeZtxE0JsiOjzkEgRO24r3AXjiB1hpXTUmMS8jMwEIXPmgCU1LgHKF98S5NQWKuA80lNW2q3qZoEwfEWw18whtKexAY6pgFEDki2eb%2B6IX%2BAbfX1lGZbzIdtePEzG80B%2BwbESC8HBYN3uS54Vs43bPXVi9ZC5O%2BueoWb2TxUEe4cg3j75f%2FoUKhSZYlVBw5kmxdd4yijOsDeUWxi5rc4zGhdyUq%2Bt6dojEtB8ii6hJxmqx6JEsJewV%2BeNyzfuJhkGui%2BcOhZxOyCG%2FlA7Lm98Mq3RRgnatf3TV5EGOEVVTtvL0y8YwSr8YKLDJKC&X-Amz-Signature=d389d9800e7c3103896084ee64f337c0c8c9fff06440e1a13d46491a3b3e3678&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V47GFOYV%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIC2vZw4VsYgMcHR8LniG3sjbnRt%2FOEREOLmNs1ZkS4aGAiAW2Nie9vIdAaVzyc9ce2CYFQ1Fp9dwfil92M7I%2BsmPlSqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRIeYUYNvWPtJwtfQKtwD4fAIUeLQJ9knRxh%2FdOZNjLobdVC4H7GuCePa%2FfKE9xOXDKl7YfiOMdR%2BVsxkbdagEENRG0V7SmxY7xjeotQcFt6Y1Fp21icE2PqRiv3eRyd7k1%2BPZMZxPtDWeo%2BKTox7%2FVrGJnvt9bs7pD04eTFoc549ynwo6YOVfYWL%2F8C5780q7lQ9Ug22lfSJ%2FlkB1%2FmkdcCWK0sIuhEG2Y%2FYQG%2BB9%2FT3hbCefyTTtppYqempn0tBdsIvip9YLq30Fodz2Tt5E6mJhEIcW2uOsD%2FVRwzU4JoFHr%2Fp7%2FZ0UavnharCQ9t0rpH5nfATJYBqiN2jYQij12LywGsz2MK9mMujWS0Bkwsjtdk%2BGlj0yYwm7lhtalRmRYIZz%2FD3d1B7vlLUMbt0MPfJnbyjaYKZ4Msb%2BCX7ZTxFSM%2FCUXC07cSvZrgjhzJbpDillQPz6eVDzeygfAAqmyg%2BQRpf4KF0pR2smSSp6oCpWIULBl%2FpSOadgZ5DF3BefSIXHFqdGLNbLahHW3dTqExwF7mPmdLrCfaO%2F4GD1SnXVhS9wGcWu%2BGCx8ASEeZtxE0JsiOjzkEgRO24r3AXjiB1hpXTUmMS8jMwEIXPmgCU1LgHKF98S5NQWKuA80lNW2q3qZoEwfEWw18whtKexAY6pgFEDki2eb%2B6IX%2BAbfX1lGZbzIdtePEzG80B%2BwbESC8HBYN3uS54Vs43bPXVi9ZC5O%2BueoWb2TxUEe4cg3j75f%2FoUKhSZYlVBw5kmxdd4yijOsDeUWxi5rc4zGhdyUq%2Bt6dojEtB8ii6hJxmqx6JEsJewV%2BeNyzfuJhkGui%2BcOhZxOyCG%2FlA7Lm98Mq3RRgnatf3TV5EGOEVVTtvL0y8YwSr8YKLDJKC&X-Amz-Signature=b0c82ff835b94b14ea16c8aee8d0607cf6b6e7a95d83454be7c684aea3ed7840&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V47GFOYV%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIC2vZw4VsYgMcHR8LniG3sjbnRt%2FOEREOLmNs1ZkS4aGAiAW2Nie9vIdAaVzyc9ce2CYFQ1Fp9dwfil92M7I%2BsmPlSqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRIeYUYNvWPtJwtfQKtwD4fAIUeLQJ9knRxh%2FdOZNjLobdVC4H7GuCePa%2FfKE9xOXDKl7YfiOMdR%2BVsxkbdagEENRG0V7SmxY7xjeotQcFt6Y1Fp21icE2PqRiv3eRyd7k1%2BPZMZxPtDWeo%2BKTox7%2FVrGJnvt9bs7pD04eTFoc549ynwo6YOVfYWL%2F8C5780q7lQ9Ug22lfSJ%2FlkB1%2FmkdcCWK0sIuhEG2Y%2FYQG%2BB9%2FT3hbCefyTTtppYqempn0tBdsIvip9YLq30Fodz2Tt5E6mJhEIcW2uOsD%2FVRwzU4JoFHr%2Fp7%2FZ0UavnharCQ9t0rpH5nfATJYBqiN2jYQij12LywGsz2MK9mMujWS0Bkwsjtdk%2BGlj0yYwm7lhtalRmRYIZz%2FD3d1B7vlLUMbt0MPfJnbyjaYKZ4Msb%2BCX7ZTxFSM%2FCUXC07cSvZrgjhzJbpDillQPz6eVDzeygfAAqmyg%2BQRpf4KF0pR2smSSp6oCpWIULBl%2FpSOadgZ5DF3BefSIXHFqdGLNbLahHW3dTqExwF7mPmdLrCfaO%2F4GD1SnXVhS9wGcWu%2BGCx8ASEeZtxE0JsiOjzkEgRO24r3AXjiB1hpXTUmMS8jMwEIXPmgCU1LgHKF98S5NQWKuA80lNW2q3qZoEwfEWw18whtKexAY6pgFEDki2eb%2B6IX%2BAbfX1lGZbzIdtePEzG80B%2BwbESC8HBYN3uS54Vs43bPXVi9ZC5O%2BueoWb2TxUEe4cg3j75f%2FoUKhSZYlVBw5kmxdd4yijOsDeUWxi5rc4zGhdyUq%2Bt6dojEtB8ii6hJxmqx6JEsJewV%2BeNyzfuJhkGui%2BcOhZxOyCG%2FlA7Lm98Mq3RRgnatf3TV5EGOEVVTtvL0y8YwSr8YKLDJKC&X-Amz-Signature=d8414f95f2f5a9228dd3563f5560fb9206e82be61e2b8d58ab7a50bd6ac02b68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
