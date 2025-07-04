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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWUX5RIU%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T041939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDIbF6UvinEV8YvpldLZ%2Fn8vyPePq5BOJMc8q4tuNR%2BTAIgOW6xbe2p4ePGIYcfpnbOPhe9%2BfTYvuh%2BpZq16%2FIkrCwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDOKgyz3xNtRsSP4HwSrcAyb%2B2MFKZtnKemE0QjsTJ7iCDc0ofRqoM90vpdDiigl8rH5lGBnp%2BsHfBegJKd762oEBr8gbGEvxcORQAaKHE7up7quunJQxIe9kbx%2F75H2hMcM1Um0E1f44EqIbcuv%2B%2FMUXHXlWsCBSHy%2BSlIuPIdNgcifaJulHppEBaz67cBNUew%2BrLXZTTiRPRRSKszzrs2ACS0qD8WIGazXmD6RjnoJJd3TqydRJUsMI1iW8tE4Agz1wpZ%2Bs2dF2aQUjhU0J%2BaDYHitQcHKQ%2FXIgIU9u75%2Ff6X4uQLD%2ByaIyQOWiKe6hBsTtGAQq59B0TL9rdeR7i8j4v8FjOKtLGRO0Iq5qVdlqOrfhioXlSP6v2B0L2GYXpWJTCJ5V7c2gmydDbEqCgyK7Yg1oLIApJRxRKyRX%2BTxV4T9sryUrsIEtuCfbgOV5pE0k1QVFgsk9KYrjZpIjvjkHo1iokcgPQklDDEdkcTX0d7tAbtUh%2BSipOLGVjTxk1td7sKYyy0OGPpTBuO3kcnHsAMVbGGzhz29b%2BuIAQjJ3MAe7lMpPJ72MYVbTb2vZFHEsF6m8Vs2MoBxFsTVIPfmJJL3M2Jrslo8OtHdXmk6wM%2BHmIMWjHInMl%2BILpsvX7ydeCEqDFluFKaPGMLyOncMGOqUBmZGsdcyRhwDOH9I2UfLXb%2Bqaa654D2RZw9ri4SerDKfzzpbEzlvUAPtGChU9YSXpymgSOr8BDHFzwfxSjxK5xHy0Eaurd7UYa6EfiFIhGeOJMPPTBJdBr%2Fyrsuv1MBQLZPIF0N0brHgPPyH%2FOlr4ADnr3vyDvHS%2BWNaonYn7LjJcn5K1JSSJ7BweDZ2nAdp2FLHb47NQgjmNvMldpn%2F36yXQuryE&X-Amz-Signature=64a43f89a815e32e0cc320ddb1fcc5d7ac67b49b2f85ebdc23dd2297f8d48071&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWUX5RIU%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T041939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDIbF6UvinEV8YvpldLZ%2Fn8vyPePq5BOJMc8q4tuNR%2BTAIgOW6xbe2p4ePGIYcfpnbOPhe9%2BfTYvuh%2BpZq16%2FIkrCwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDOKgyz3xNtRsSP4HwSrcAyb%2B2MFKZtnKemE0QjsTJ7iCDc0ofRqoM90vpdDiigl8rH5lGBnp%2BsHfBegJKd762oEBr8gbGEvxcORQAaKHE7up7quunJQxIe9kbx%2F75H2hMcM1Um0E1f44EqIbcuv%2B%2FMUXHXlWsCBSHy%2BSlIuPIdNgcifaJulHppEBaz67cBNUew%2BrLXZTTiRPRRSKszzrs2ACS0qD8WIGazXmD6RjnoJJd3TqydRJUsMI1iW8tE4Agz1wpZ%2Bs2dF2aQUjhU0J%2BaDYHitQcHKQ%2FXIgIU9u75%2Ff6X4uQLD%2ByaIyQOWiKe6hBsTtGAQq59B0TL9rdeR7i8j4v8FjOKtLGRO0Iq5qVdlqOrfhioXlSP6v2B0L2GYXpWJTCJ5V7c2gmydDbEqCgyK7Yg1oLIApJRxRKyRX%2BTxV4T9sryUrsIEtuCfbgOV5pE0k1QVFgsk9KYrjZpIjvjkHo1iokcgPQklDDEdkcTX0d7tAbtUh%2BSipOLGVjTxk1td7sKYyy0OGPpTBuO3kcnHsAMVbGGzhz29b%2BuIAQjJ3MAe7lMpPJ72MYVbTb2vZFHEsF6m8Vs2MoBxFsTVIPfmJJL3M2Jrslo8OtHdXmk6wM%2BHmIMWjHInMl%2BILpsvX7ydeCEqDFluFKaPGMLyOncMGOqUBmZGsdcyRhwDOH9I2UfLXb%2Bqaa654D2RZw9ri4SerDKfzzpbEzlvUAPtGChU9YSXpymgSOr8BDHFzwfxSjxK5xHy0Eaurd7UYa6EfiFIhGeOJMPPTBJdBr%2Fyrsuv1MBQLZPIF0N0brHgPPyH%2FOlr4ADnr3vyDvHS%2BWNaonYn7LjJcn5K1JSSJ7BweDZ2nAdp2FLHb47NQgjmNvMldpn%2F36yXQuryE&X-Amz-Signature=ebe099a302a0c22cb75071d0a42fafc2021281bb90b6909cb28497387ed3be87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWUX5RIU%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T041939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDIbF6UvinEV8YvpldLZ%2Fn8vyPePq5BOJMc8q4tuNR%2BTAIgOW6xbe2p4ePGIYcfpnbOPhe9%2BfTYvuh%2BpZq16%2FIkrCwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDOKgyz3xNtRsSP4HwSrcAyb%2B2MFKZtnKemE0QjsTJ7iCDc0ofRqoM90vpdDiigl8rH5lGBnp%2BsHfBegJKd762oEBr8gbGEvxcORQAaKHE7up7quunJQxIe9kbx%2F75H2hMcM1Um0E1f44EqIbcuv%2B%2FMUXHXlWsCBSHy%2BSlIuPIdNgcifaJulHppEBaz67cBNUew%2BrLXZTTiRPRRSKszzrs2ACS0qD8WIGazXmD6RjnoJJd3TqydRJUsMI1iW8tE4Agz1wpZ%2Bs2dF2aQUjhU0J%2BaDYHitQcHKQ%2FXIgIU9u75%2Ff6X4uQLD%2ByaIyQOWiKe6hBsTtGAQq59B0TL9rdeR7i8j4v8FjOKtLGRO0Iq5qVdlqOrfhioXlSP6v2B0L2GYXpWJTCJ5V7c2gmydDbEqCgyK7Yg1oLIApJRxRKyRX%2BTxV4T9sryUrsIEtuCfbgOV5pE0k1QVFgsk9KYrjZpIjvjkHo1iokcgPQklDDEdkcTX0d7tAbtUh%2BSipOLGVjTxk1td7sKYyy0OGPpTBuO3kcnHsAMVbGGzhz29b%2BuIAQjJ3MAe7lMpPJ72MYVbTb2vZFHEsF6m8Vs2MoBxFsTVIPfmJJL3M2Jrslo8OtHdXmk6wM%2BHmIMWjHInMl%2BILpsvX7ydeCEqDFluFKaPGMLyOncMGOqUBmZGsdcyRhwDOH9I2UfLXb%2Bqaa654D2RZw9ri4SerDKfzzpbEzlvUAPtGChU9YSXpymgSOr8BDHFzwfxSjxK5xHy0Eaurd7UYa6EfiFIhGeOJMPPTBJdBr%2Fyrsuv1MBQLZPIF0N0brHgPPyH%2FOlr4ADnr3vyDvHS%2BWNaonYn7LjJcn5K1JSSJ7BweDZ2nAdp2FLHb47NQgjmNvMldpn%2F36yXQuryE&X-Amz-Signature=312cb1b766bb91aa70b174e865d4072bcfa726ab58a709e062c910d03f47d677&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
