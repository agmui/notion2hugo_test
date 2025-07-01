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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OEUHIV3%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T140905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqXN8Y3d%2BN39yhFd1O%2B1epn7jXu7ysxxoe1HpTTfSY8AIgboF6kyWoYWY3d5Y8oPY264z8KY1OTiyf58ImSH4gPhkqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFlW31epOs79JgSVbircA4qHa1%2Bf%2Bh31n43dlTUd0OMsUaE4s2sTWlAw9Hc85dgSgLxty1cRkhfmGatwDWYojF5fsnLadY0FP12FbB0bFr1kTeLeqMjWWn%2BKMCLLLy0FznJ%2Fd%2BNvEmFY%2F2yfAJb7VWGalyB%2Fqdu2ywRdqGzRw3NXVAc85ndBNRgXuEdm1N73tCMLxU5kp6AuqOk7VlS5adAVm7hPO6Jp3KLWOpBzAv2ThxMED9rwy%2BBOp75YtyQcc%2FWNMlbZxjxK5PZUb8HxU2ZUQma6MfFjeUurN4q2vcLLANBtzrCUxCdxIRxlzMR4%2BvvWNe%2F7Kld98cKFE1d8%2BgN%2B77sq%2FkBs%2F7ciEVCGiPx7mcMRrrssJcgs7gHmJ3VQihzboXE23BAmn3TllUmcAksYkS08hg4YCljYuuBc4QuHCMFu4hobi25WuLfffnwp9WVjkRW2ukjGnh4NfyrLbHfY%2FeNTP3Y8eu59pzL7TldRC1%2BVW9zif7fY%2BYr4Av%2F%2FyQQ9lt%2Fo9nh4FWTKhvR8yxIaVmvZOEYW4bO%2Fui%2BZZtbYOvqYV1K%2BOehNAbPln%2BV9MV%2BLrQsQptfuwj5V1o%2BWyWuapVxUCi12ICS8ICZP5%2Fm%2FRW%2BUkRpscB63A%2BcAei8js5sO28JO5mpgBVJNMP6kj8MGOqUBWzll9F98nbDUrqiJ3o0gKWcJ44bW7uKIJJo%2B3EMVLBv8R2sTdg6l6xqln0%2B%2BLmSWqjU2y0pO0Pjk%2BJk4VlBSlScJh34Z6sp3AqUinKK2g7RZd81d8dS7xJ0hjESR6HndkinLn3Gk2ijQu0eeooeeSH1gM%2Fyb0bUkTjTCTQyOWl4tSrcmKVa4vLM0gsHf1WImcY%2B8Kvrt8sBwCqFQab7S7U%2F2Wo1L&X-Amz-Signature=973de2bc0b618e595fc5bb6cc4d1e8e1571f6fd6186d6111f8393dce9c4dcf75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OEUHIV3%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T140905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqXN8Y3d%2BN39yhFd1O%2B1epn7jXu7ysxxoe1HpTTfSY8AIgboF6kyWoYWY3d5Y8oPY264z8KY1OTiyf58ImSH4gPhkqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFlW31epOs79JgSVbircA4qHa1%2Bf%2Bh31n43dlTUd0OMsUaE4s2sTWlAw9Hc85dgSgLxty1cRkhfmGatwDWYojF5fsnLadY0FP12FbB0bFr1kTeLeqMjWWn%2BKMCLLLy0FznJ%2Fd%2BNvEmFY%2F2yfAJb7VWGalyB%2Fqdu2ywRdqGzRw3NXVAc85ndBNRgXuEdm1N73tCMLxU5kp6AuqOk7VlS5adAVm7hPO6Jp3KLWOpBzAv2ThxMED9rwy%2BBOp75YtyQcc%2FWNMlbZxjxK5PZUb8HxU2ZUQma6MfFjeUurN4q2vcLLANBtzrCUxCdxIRxlzMR4%2BvvWNe%2F7Kld98cKFE1d8%2BgN%2B77sq%2FkBs%2F7ciEVCGiPx7mcMRrrssJcgs7gHmJ3VQihzboXE23BAmn3TllUmcAksYkS08hg4YCljYuuBc4QuHCMFu4hobi25WuLfffnwp9WVjkRW2ukjGnh4NfyrLbHfY%2FeNTP3Y8eu59pzL7TldRC1%2BVW9zif7fY%2BYr4Av%2F%2FyQQ9lt%2Fo9nh4FWTKhvR8yxIaVmvZOEYW4bO%2Fui%2BZZtbYOvqYV1K%2BOehNAbPln%2BV9MV%2BLrQsQptfuwj5V1o%2BWyWuapVxUCi12ICS8ICZP5%2Fm%2FRW%2BUkRpscB63A%2BcAei8js5sO28JO5mpgBVJNMP6kj8MGOqUBWzll9F98nbDUrqiJ3o0gKWcJ44bW7uKIJJo%2B3EMVLBv8R2sTdg6l6xqln0%2B%2BLmSWqjU2y0pO0Pjk%2BJk4VlBSlScJh34Z6sp3AqUinKK2g7RZd81d8dS7xJ0hjESR6HndkinLn3Gk2ijQu0eeooeeSH1gM%2Fyb0bUkTjTCTQyOWl4tSrcmKVa4vLM0gsHf1WImcY%2B8Kvrt8sBwCqFQab7S7U%2F2Wo1L&X-Amz-Signature=4969943568d7d7ef8b8511cd5da92127e5bfe10dacf9459cfd93ac7946b38086&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OEUHIV3%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T140905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqXN8Y3d%2BN39yhFd1O%2B1epn7jXu7ysxxoe1HpTTfSY8AIgboF6kyWoYWY3d5Y8oPY264z8KY1OTiyf58ImSH4gPhkqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFlW31epOs79JgSVbircA4qHa1%2Bf%2Bh31n43dlTUd0OMsUaE4s2sTWlAw9Hc85dgSgLxty1cRkhfmGatwDWYojF5fsnLadY0FP12FbB0bFr1kTeLeqMjWWn%2BKMCLLLy0FznJ%2Fd%2BNvEmFY%2F2yfAJb7VWGalyB%2Fqdu2ywRdqGzRw3NXVAc85ndBNRgXuEdm1N73tCMLxU5kp6AuqOk7VlS5adAVm7hPO6Jp3KLWOpBzAv2ThxMED9rwy%2BBOp75YtyQcc%2FWNMlbZxjxK5PZUb8HxU2ZUQma6MfFjeUurN4q2vcLLANBtzrCUxCdxIRxlzMR4%2BvvWNe%2F7Kld98cKFE1d8%2BgN%2B77sq%2FkBs%2F7ciEVCGiPx7mcMRrrssJcgs7gHmJ3VQihzboXE23BAmn3TllUmcAksYkS08hg4YCljYuuBc4QuHCMFu4hobi25WuLfffnwp9WVjkRW2ukjGnh4NfyrLbHfY%2FeNTP3Y8eu59pzL7TldRC1%2BVW9zif7fY%2BYr4Av%2F%2FyQQ9lt%2Fo9nh4FWTKhvR8yxIaVmvZOEYW4bO%2Fui%2BZZtbYOvqYV1K%2BOehNAbPln%2BV9MV%2BLrQsQptfuwj5V1o%2BWyWuapVxUCi12ICS8ICZP5%2Fm%2FRW%2BUkRpscB63A%2BcAei8js5sO28JO5mpgBVJNMP6kj8MGOqUBWzll9F98nbDUrqiJ3o0gKWcJ44bW7uKIJJo%2B3EMVLBv8R2sTdg6l6xqln0%2B%2BLmSWqjU2y0pO0Pjk%2BJk4VlBSlScJh34Z6sp3AqUinKK2g7RZd81d8dS7xJ0hjESR6HndkinLn3Gk2ijQu0eeooeeSH1gM%2Fyb0bUkTjTCTQyOWl4tSrcmKVa4vLM0gsHf1WImcY%2B8Kvrt8sBwCqFQab7S7U%2F2Wo1L&X-Amz-Signature=1524ad757cbf33cee28cbe7ced07af09cdc85d4e70398329d71d75f54ee0084e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
