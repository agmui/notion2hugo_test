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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKC4G63G%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T181032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIHdXTbiopToe2E5rbLg9j6FdGrMP%2B%2Fe1E2H5o8Rfha%2BxAiEA4p1LamJ34CpB1RNbXIwAYr9ysjZ%2FOV4PFHmMFRU2P48qiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAr2O0jA2Hr%2F5XH4XircA7%2BaNnwKJnslcmkqWld%2FAiWLpIWT8BzLNUG5T3fhmA6%2F254CypF%2B6p3iiXURizQqz0Jtz4gOa12UzNlFKm69MagrpxdOBgRZYRbYL6UQ04%2F3Hj4bD5pP6%2F1zj%2BqSu4uRdBdsHqCXT8uMfE176ypfo%2BBBDABtof5PYb48SyQv0tBo7iQ41LIy1PJ9roi5pavG3jMLtLBxYckySIqf0%2BfE17EjWLv0yoTdO4OVWh7gSvWOmloeLjMCJWzuS0hNHpz5x25x7k0Hr325XVTNIQ1KqmC6uXxowscY0Yi9COvPgU4nkIPsM%2BW892stQbQlgKNLTAKS%2Bs6EiOP%2Btpd1NhC5mQR07ecM9AvdmvfP6L4XcTxJukxOqfgLqAGRCekAOJDBvpAj8O46cy%2BrBL%2FcZ24xMf1DHAursxyTAKE01lwSmeV7I0Ee8dPqvpYOauK8Xgw%2BK%2FSlBG843eS7jgIcM0HdT3ISFxUbukHaM3q2%2FOefjNl1TQr4cg7%2FrmxjdMv2WijVxTrcr6WZ37eGe%2BYucjNuD2uu3Kk%2BhqlNk5jboQ6%2BKTGYWZrGg2rtCiPspav7JnLI0yz0mwu5NMuiMGMhMX8Yri%2FfpHMxJico6XERZ8kGJHtFZzlGBTlmVhj7DFm%2BMLz68cEGOqUBvkmSGuu5uWn2iaNlq8a08tdIaptPeEyGvbh7G09ZuAw%2BNkQRuqzdtydjQ3eMeMApXBqi6Gf2FqBHYLPkyHoOfQe1mfGtSn%2FpwkVR0n9XiO%2FXFWf6Ee5vNkeKVfiDQSUwOsFRuEE%2FCzEauMCotn%2FXFum2Ah1enTF9QsyDaeidOm1Bb9UdpzSsSpywF4M0F28mjpSAvVZ6YeI4cpcZEusYGePT%2F82o&X-Amz-Signature=3b455afc12464bfaf4824aac56d6e71095e343d43725476e82c166e38b5876d0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKC4G63G%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T181032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIHdXTbiopToe2E5rbLg9j6FdGrMP%2B%2Fe1E2H5o8Rfha%2BxAiEA4p1LamJ34CpB1RNbXIwAYr9ysjZ%2FOV4PFHmMFRU2P48qiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAr2O0jA2Hr%2F5XH4XircA7%2BaNnwKJnslcmkqWld%2FAiWLpIWT8BzLNUG5T3fhmA6%2F254CypF%2B6p3iiXURizQqz0Jtz4gOa12UzNlFKm69MagrpxdOBgRZYRbYL6UQ04%2F3Hj4bD5pP6%2F1zj%2BqSu4uRdBdsHqCXT8uMfE176ypfo%2BBBDABtof5PYb48SyQv0tBo7iQ41LIy1PJ9roi5pavG3jMLtLBxYckySIqf0%2BfE17EjWLv0yoTdO4OVWh7gSvWOmloeLjMCJWzuS0hNHpz5x25x7k0Hr325XVTNIQ1KqmC6uXxowscY0Yi9COvPgU4nkIPsM%2BW892stQbQlgKNLTAKS%2Bs6EiOP%2Btpd1NhC5mQR07ecM9AvdmvfP6L4XcTxJukxOqfgLqAGRCekAOJDBvpAj8O46cy%2BrBL%2FcZ24xMf1DHAursxyTAKE01lwSmeV7I0Ee8dPqvpYOauK8Xgw%2BK%2FSlBG843eS7jgIcM0HdT3ISFxUbukHaM3q2%2FOefjNl1TQr4cg7%2FrmxjdMv2WijVxTrcr6WZ37eGe%2BYucjNuD2uu3Kk%2BhqlNk5jboQ6%2BKTGYWZrGg2rtCiPspav7JnLI0yz0mwu5NMuiMGMhMX8Yri%2FfpHMxJico6XERZ8kGJHtFZzlGBTlmVhj7DFm%2BMLz68cEGOqUBvkmSGuu5uWn2iaNlq8a08tdIaptPeEyGvbh7G09ZuAw%2BNkQRuqzdtydjQ3eMeMApXBqi6Gf2FqBHYLPkyHoOfQe1mfGtSn%2FpwkVR0n9XiO%2FXFWf6Ee5vNkeKVfiDQSUwOsFRuEE%2FCzEauMCotn%2FXFum2Ah1enTF9QsyDaeidOm1Bb9UdpzSsSpywF4M0F28mjpSAvVZ6YeI4cpcZEusYGePT%2F82o&X-Amz-Signature=56e6be099bd5a7479becb4d37eb18a128266ca9f37da7b59f911933ed51be991&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKC4G63G%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T181032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIHdXTbiopToe2E5rbLg9j6FdGrMP%2B%2Fe1E2H5o8Rfha%2BxAiEA4p1LamJ34CpB1RNbXIwAYr9ysjZ%2FOV4PFHmMFRU2P48qiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAr2O0jA2Hr%2F5XH4XircA7%2BaNnwKJnslcmkqWld%2FAiWLpIWT8BzLNUG5T3fhmA6%2F254CypF%2B6p3iiXURizQqz0Jtz4gOa12UzNlFKm69MagrpxdOBgRZYRbYL6UQ04%2F3Hj4bD5pP6%2F1zj%2BqSu4uRdBdsHqCXT8uMfE176ypfo%2BBBDABtof5PYb48SyQv0tBo7iQ41LIy1PJ9roi5pavG3jMLtLBxYckySIqf0%2BfE17EjWLv0yoTdO4OVWh7gSvWOmloeLjMCJWzuS0hNHpz5x25x7k0Hr325XVTNIQ1KqmC6uXxowscY0Yi9COvPgU4nkIPsM%2BW892stQbQlgKNLTAKS%2Bs6EiOP%2Btpd1NhC5mQR07ecM9AvdmvfP6L4XcTxJukxOqfgLqAGRCekAOJDBvpAj8O46cy%2BrBL%2FcZ24xMf1DHAursxyTAKE01lwSmeV7I0Ee8dPqvpYOauK8Xgw%2BK%2FSlBG843eS7jgIcM0HdT3ISFxUbukHaM3q2%2FOefjNl1TQr4cg7%2FrmxjdMv2WijVxTrcr6WZ37eGe%2BYucjNuD2uu3Kk%2BhqlNk5jboQ6%2BKTGYWZrGg2rtCiPspav7JnLI0yz0mwu5NMuiMGMhMX8Yri%2FfpHMxJico6XERZ8kGJHtFZzlGBTlmVhj7DFm%2BMLz68cEGOqUBvkmSGuu5uWn2iaNlq8a08tdIaptPeEyGvbh7G09ZuAw%2BNkQRuqzdtydjQ3eMeMApXBqi6Gf2FqBHYLPkyHoOfQe1mfGtSn%2FpwkVR0n9XiO%2FXFWf6Ee5vNkeKVfiDQSUwOsFRuEE%2FCzEauMCotn%2FXFum2Ah1enTF9QsyDaeidOm1Bb9UdpzSsSpywF4M0F28mjpSAvVZ6YeI4cpcZEusYGePT%2F82o&X-Amz-Signature=a4d4f507ba0a0b54b3c3ce81c2b6229499a12e641dbcf2ca790f736fb40982ea&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
