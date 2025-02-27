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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZKLSG3F%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T070820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIHQuCXpTgPoeVnXeO5aIpXMhzUy3Id04KKP8kUwCrnPyAiAWeSSAIdOO8XLud492iuHA54UdyyUFbs6DGIoEVQymbir%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMdrkvLN2fhs8cQ4g5KtwD1LA%2BncLsyp2bYtEi9vhyCs8pz%2FwKb4WrUN1UFIV%2FirOTYvzESOL9vQHccb8Gr770syRr8XqTfd3M3rmZMPPodMaVoFU2fT0b7wkuObgPGSr4WIqKACen16ZQJrZQsydWYiudxYSemwMGgrr4WmpWJSBVK5%2B6xyD6xReKE1pghtIKbSkg78cohLi8d2mvBL%2BZ26L%2Fb4ONenL%2ByIl5nP0vA2KhRXuu42ihbROyc1pTDUZcmSLnHra1VcQLcS6MlyFeE7Duk1Xnw3bAg7jNz5z7mMNnWI3%2F7BzgRHbI0p4qMI3vazFBExg%2FwdbfKCamDg0pLhXKf9UcGBjpzqNSoBwU5aS9Uf9l7cBGHXB8XGHhDaj3WP6UAhHkhEjSCK%2FNKOG1hiwaYfJA%2BWx4ULjBZ3vkErj1q6kFWNu1eGUjFs7DSP1t%2BaRRWPpDc5BajeRSsC%2F7pcdRWSjpP7oFhJ8MWv1wfpqvHW6DxCD9v240ylEjFqkZxfu5AgvMtI16bLa3Z3isf9lfX0QOA2%2BZQzcX3dMEcZ2WAUgkULuYFiG%2BucD1TppX8215J%2BZuFWFnsBIYcZGmm8E2vxjZMcVBz4%2Fuqu9UuLcAFSKkX0%2FSu8IAXuZVVYIuCR%2B8TjAHO1or5w4w1ouAvgY6pgF1wDsj6kf8D70Wgu7Rs37DlCAwbt0TOs6grO5xbzZqycZv9CHu3DPH0hDrYpZQx6u%2FRpCCCXCwKYqvrX8MIo3qst%2Be1GIEtCYG%2BLOtj%2BSC7SkC4ibcGQaIH%2FUvpwo3YhltCfDPJLzqBwNFYBjsdbEoNj4m1nWXOlzssPOMduslVZl8HeAwTM2JZ601jnxErv59d3szB1NLskd0TnIORuqFOco7E8v9&X-Amz-Signature=9f35af0dadb3c941d8e18e1cb4538455ab2d9ec90609c652f4e5493f1444b0c6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZKLSG3F%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T070820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIHQuCXpTgPoeVnXeO5aIpXMhzUy3Id04KKP8kUwCrnPyAiAWeSSAIdOO8XLud492iuHA54UdyyUFbs6DGIoEVQymbir%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMdrkvLN2fhs8cQ4g5KtwD1LA%2BncLsyp2bYtEi9vhyCs8pz%2FwKb4WrUN1UFIV%2FirOTYvzESOL9vQHccb8Gr770syRr8XqTfd3M3rmZMPPodMaVoFU2fT0b7wkuObgPGSr4WIqKACen16ZQJrZQsydWYiudxYSemwMGgrr4WmpWJSBVK5%2B6xyD6xReKE1pghtIKbSkg78cohLi8d2mvBL%2BZ26L%2Fb4ONenL%2ByIl5nP0vA2KhRXuu42ihbROyc1pTDUZcmSLnHra1VcQLcS6MlyFeE7Duk1Xnw3bAg7jNz5z7mMNnWI3%2F7BzgRHbI0p4qMI3vazFBExg%2FwdbfKCamDg0pLhXKf9UcGBjpzqNSoBwU5aS9Uf9l7cBGHXB8XGHhDaj3WP6UAhHkhEjSCK%2FNKOG1hiwaYfJA%2BWx4ULjBZ3vkErj1q6kFWNu1eGUjFs7DSP1t%2BaRRWPpDc5BajeRSsC%2F7pcdRWSjpP7oFhJ8MWv1wfpqvHW6DxCD9v240ylEjFqkZxfu5AgvMtI16bLa3Z3isf9lfX0QOA2%2BZQzcX3dMEcZ2WAUgkULuYFiG%2BucD1TppX8215J%2BZuFWFnsBIYcZGmm8E2vxjZMcVBz4%2Fuqu9UuLcAFSKkX0%2FSu8IAXuZVVYIuCR%2B8TjAHO1or5w4w1ouAvgY6pgF1wDsj6kf8D70Wgu7Rs37DlCAwbt0TOs6grO5xbzZqycZv9CHu3DPH0hDrYpZQx6u%2FRpCCCXCwKYqvrX8MIo3qst%2Be1GIEtCYG%2BLOtj%2BSC7SkC4ibcGQaIH%2FUvpwo3YhltCfDPJLzqBwNFYBjsdbEoNj4m1nWXOlzssPOMduslVZl8HeAwTM2JZ601jnxErv59d3szB1NLskd0TnIORuqFOco7E8v9&X-Amz-Signature=172bf8a2f0ebf97893b75d825efef2655e72d0089db0dd3b39e838598b89b660&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZKLSG3F%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T070820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIHQuCXpTgPoeVnXeO5aIpXMhzUy3Id04KKP8kUwCrnPyAiAWeSSAIdOO8XLud492iuHA54UdyyUFbs6DGIoEVQymbir%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMdrkvLN2fhs8cQ4g5KtwD1LA%2BncLsyp2bYtEi9vhyCs8pz%2FwKb4WrUN1UFIV%2FirOTYvzESOL9vQHccb8Gr770syRr8XqTfd3M3rmZMPPodMaVoFU2fT0b7wkuObgPGSr4WIqKACen16ZQJrZQsydWYiudxYSemwMGgrr4WmpWJSBVK5%2B6xyD6xReKE1pghtIKbSkg78cohLi8d2mvBL%2BZ26L%2Fb4ONenL%2ByIl5nP0vA2KhRXuu42ihbROyc1pTDUZcmSLnHra1VcQLcS6MlyFeE7Duk1Xnw3bAg7jNz5z7mMNnWI3%2F7BzgRHbI0p4qMI3vazFBExg%2FwdbfKCamDg0pLhXKf9UcGBjpzqNSoBwU5aS9Uf9l7cBGHXB8XGHhDaj3WP6UAhHkhEjSCK%2FNKOG1hiwaYfJA%2BWx4ULjBZ3vkErj1q6kFWNu1eGUjFs7DSP1t%2BaRRWPpDc5BajeRSsC%2F7pcdRWSjpP7oFhJ8MWv1wfpqvHW6DxCD9v240ylEjFqkZxfu5AgvMtI16bLa3Z3isf9lfX0QOA2%2BZQzcX3dMEcZ2WAUgkULuYFiG%2BucD1TppX8215J%2BZuFWFnsBIYcZGmm8E2vxjZMcVBz4%2Fuqu9UuLcAFSKkX0%2FSu8IAXuZVVYIuCR%2B8TjAHO1or5w4w1ouAvgY6pgF1wDsj6kf8D70Wgu7Rs37DlCAwbt0TOs6grO5xbzZqycZv9CHu3DPH0hDrYpZQx6u%2FRpCCCXCwKYqvrX8MIo3qst%2Be1GIEtCYG%2BLOtj%2BSC7SkC4ibcGQaIH%2FUvpwo3YhltCfDPJLzqBwNFYBjsdbEoNj4m1nWXOlzssPOMduslVZl8HeAwTM2JZ601jnxErv59d3szB1NLskd0TnIORuqFOco7E8v9&X-Amz-Signature=e9dae075245a06fc2e3fdcc0f454346f1912dd9a8a330d63028cf094ac9f3e01&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
