---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTWIEXKC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIElgVO3t%2FYSRevEyMPs9isfhbXLHgtLECyy24S0bS76oAiBSPXucimAhAQH6xLJ6eHiZbEByonQ3RPqBbq6F%2FJNIjiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZWtLRVAp5AvyYcHHKtwDX0vTL1xI47kxuxZ9t6H3oQr051XNsFKh46p9G%2B8ptqKW2r2HMl1LgZTShFMtq79KQI4jZ3xMIalfxuFdFW4KV1npTkybFYdiB4xwrSPSefMKPbUeO99DctxkHnws2%2BrVSLrN8a5enTvhjMYV7COlPMoJDu4nVdKr6iCq6F48sFTdK55kc33uHwYFWp2kVFZFrUgLL0ssAo8KbuV8mHbLwHrm0fMxZlw8CzDsMHReU3304a3Abct9M87nTzdP65SOB%2FXFnGfKtqlKji4dYjjOx8GoHH0VwSVelTPqcvLV4Jxc%2BtyA1c%2FzUPl7nzFXFr5GwNWnyuLd1Num30rx7bk%2Bcu0ZKOP5xhLSzONxkfDNmqQlRbWJWb7zXy9Uldr9w5Scysmp218N4WUnyideUJDTG2y%2BXNMf%2Bc7qgQ48Yg4uhGqC2spLFa1zNcD%2FFBUtrE0Tl%2F1cvsJfZRfgfFyJa%2Bf0Wj2dU1zjaAefYw%2FbCt8MWHbNvG5N16BHn9cie6ISl9XkxCntP6Tf5JpvKtkb%2BUlyv%2F8m95hWSfgHT3gSGM2E8V%2BckPdWquun%2B05kaYApCWbpP8eDunYXLetfuvpZnyyuKFZtJRvCYbiSLiwYPFqXOJb2WTqpHwqM%2F0%2BgWRQwo%2B7TxAY6pgGHUYUK6ywcy0nYOE2vBE89ktRGfRuQDPbdlm7WHsD9Bd0AeZj3hxGmE9iTeEutNRNNZj6%2FK%2FA1a%2Be3KQXeHYPO8yotgZ97ybZ%2FTrC%2FG8T%2B9m7PrlPxKAqnEwDXwKm8AyLFKSk3ZseIGuyBBt9v8jv4C5hmF8I4EQ9YQDUJSRI4VSNIM2CehUmRVpss%2Bi1OvOyQ43Pynxv%2BsqeazgBdxSEBxjKaN7Se&X-Amz-Signature=10a637e84eb738e06a8756da08c6f8b23f334af45f3dbf3924d8afe490638e2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTWIEXKC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIElgVO3t%2FYSRevEyMPs9isfhbXLHgtLECyy24S0bS76oAiBSPXucimAhAQH6xLJ6eHiZbEByonQ3RPqBbq6F%2FJNIjiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZWtLRVAp5AvyYcHHKtwDX0vTL1xI47kxuxZ9t6H3oQr051XNsFKh46p9G%2B8ptqKW2r2HMl1LgZTShFMtq79KQI4jZ3xMIalfxuFdFW4KV1npTkybFYdiB4xwrSPSefMKPbUeO99DctxkHnws2%2BrVSLrN8a5enTvhjMYV7COlPMoJDu4nVdKr6iCq6F48sFTdK55kc33uHwYFWp2kVFZFrUgLL0ssAo8KbuV8mHbLwHrm0fMxZlw8CzDsMHReU3304a3Abct9M87nTzdP65SOB%2FXFnGfKtqlKji4dYjjOx8GoHH0VwSVelTPqcvLV4Jxc%2BtyA1c%2FzUPl7nzFXFr5GwNWnyuLd1Num30rx7bk%2Bcu0ZKOP5xhLSzONxkfDNmqQlRbWJWb7zXy9Uldr9w5Scysmp218N4WUnyideUJDTG2y%2BXNMf%2Bc7qgQ48Yg4uhGqC2spLFa1zNcD%2FFBUtrE0Tl%2F1cvsJfZRfgfFyJa%2Bf0Wj2dU1zjaAefYw%2FbCt8MWHbNvG5N16BHn9cie6ISl9XkxCntP6Tf5JpvKtkb%2BUlyv%2F8m95hWSfgHT3gSGM2E8V%2BckPdWquun%2B05kaYApCWbpP8eDunYXLetfuvpZnyyuKFZtJRvCYbiSLiwYPFqXOJb2WTqpHwqM%2F0%2BgWRQwo%2B7TxAY6pgGHUYUK6ywcy0nYOE2vBE89ktRGfRuQDPbdlm7WHsD9Bd0AeZj3hxGmE9iTeEutNRNNZj6%2FK%2FA1a%2Be3KQXeHYPO8yotgZ97ybZ%2FTrC%2FG8T%2B9m7PrlPxKAqnEwDXwKm8AyLFKSk3ZseIGuyBBt9v8jv4C5hmF8I4EQ9YQDUJSRI4VSNIM2CehUmRVpss%2Bi1OvOyQ43Pynxv%2BsqeazgBdxSEBxjKaN7Se&X-Amz-Signature=136a2afc777f0e9755fe585270e3f4bc3970b8ac87c2725a4fb72fb2f0e99289&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTWIEXKC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIElgVO3t%2FYSRevEyMPs9isfhbXLHgtLECyy24S0bS76oAiBSPXucimAhAQH6xLJ6eHiZbEByonQ3RPqBbq6F%2FJNIjiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZWtLRVAp5AvyYcHHKtwDX0vTL1xI47kxuxZ9t6H3oQr051XNsFKh46p9G%2B8ptqKW2r2HMl1LgZTShFMtq79KQI4jZ3xMIalfxuFdFW4KV1npTkybFYdiB4xwrSPSefMKPbUeO99DctxkHnws2%2BrVSLrN8a5enTvhjMYV7COlPMoJDu4nVdKr6iCq6F48sFTdK55kc33uHwYFWp2kVFZFrUgLL0ssAo8KbuV8mHbLwHrm0fMxZlw8CzDsMHReU3304a3Abct9M87nTzdP65SOB%2FXFnGfKtqlKji4dYjjOx8GoHH0VwSVelTPqcvLV4Jxc%2BtyA1c%2FzUPl7nzFXFr5GwNWnyuLd1Num30rx7bk%2Bcu0ZKOP5xhLSzONxkfDNmqQlRbWJWb7zXy9Uldr9w5Scysmp218N4WUnyideUJDTG2y%2BXNMf%2Bc7qgQ48Yg4uhGqC2spLFa1zNcD%2FFBUtrE0Tl%2F1cvsJfZRfgfFyJa%2Bf0Wj2dU1zjaAefYw%2FbCt8MWHbNvG5N16BHn9cie6ISl9XkxCntP6Tf5JpvKtkb%2BUlyv%2F8m95hWSfgHT3gSGM2E8V%2BckPdWquun%2B05kaYApCWbpP8eDunYXLetfuvpZnyyuKFZtJRvCYbiSLiwYPFqXOJb2WTqpHwqM%2F0%2BgWRQwo%2B7TxAY6pgGHUYUK6ywcy0nYOE2vBE89ktRGfRuQDPbdlm7WHsD9Bd0AeZj3hxGmE9iTeEutNRNNZj6%2FK%2FA1a%2Be3KQXeHYPO8yotgZ97ybZ%2FTrC%2FG8T%2B9m7PrlPxKAqnEwDXwKm8AyLFKSk3ZseIGuyBBt9v8jv4C5hmF8I4EQ9YQDUJSRI4VSNIM2CehUmRVpss%2Bi1OvOyQ43Pynxv%2BsqeazgBdxSEBxjKaN7Se&X-Amz-Signature=2a67edb0a3a183d8671485a0b7f154679a0e51ec5ee8a03f1246f0e57a4fc08a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
