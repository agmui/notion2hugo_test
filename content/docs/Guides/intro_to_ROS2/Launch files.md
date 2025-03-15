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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAWL3W5K%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T230701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbmhcQYBhd65inoNHtuKOcqKfOF3lndudwsEUYAgNLPgIgY8exLAGeoRCePfPrXDBYNP6%2Bu6w%2F4DUHM2wS2kZddDUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDOmiMKkVnMf0cCjqACrcA8P8sxfI0GyFLVxKcoqB6HAmTvudlordMW1p53fui%2B2C%2FUPfjncOTYGFrllY%2FpKKZ9KiN3RTXQ83inMkvQj7zQO%2FSqxqawr4ABYG3WrSwHqVXjuttofQuckjMeTHYgBI0CUvbFyiFbxMoTupnEK3p4dS4jgSQZFOWaObCWUD3U2QkIJH%2FRhC0QWdjRlnoptuOBfTukpSlObNnNKUszGBYkihKyALJvMJFd9nd34frD02gzGtJyhuYj%2FPhRZRClwxFbo3xdbe3PiI08mt1rYJR4DW5%2Fxht7Xho4uyn7pyMQvHDD1mQFbT%2Fa1P0oOaojOuvLind814tbKuw5g4VMw6wYbq6O3lQOcJNyA6l%2B3n6pi8%2FjYuVobMVRKeTjaDvej%2BodJu%2B3xSq3ZgglHmZkmrMdPWYweTNWe2XTOeGySfT4DsoU4nxedfshezdZo5XSaDkUd55fJXKrCBCn84%2FLEHbITOtlZr1mNHRWm0HFgp%2Fb8tEXC2TPjtZkpxn%2BhGVGTX%2F311Om3Ccpq%2F%2B2P2gAfLH26h1AQl6xiiQ35b1rdY1SQJNvEItZIwxqegTgCYRrs4qy%2B0nYvEcHm9teSYdltsl%2FaBwLtRROyIfTxNALxF66BruiDpW3PO5Sun4cyxMNOB2L4GOqUBKTGHPD7lOfuYiDuX1XOBFR1w0l2TJvco%2FyMcTXgXJqctvKXemRMdyIKWJRH%2FrCBT1jSRVsxkarZU%2F1q2yycUiwwtNXYPbpGubNWFK8olOW1HqobQpCZGeytg5BG73AIOk8P60RgFWh24bF2YYrJxhFysKpXgHk1392ujBVReY68mW1jimsWysxh7OjeMdY6LRL2rAeWYFK93AkM0%2FO3BuwYBOU1K&X-Amz-Signature=fa2cfdc81a3bca17645926c0c7fb62782435fa2b02c759e82fb8c90be2072f39&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAWL3W5K%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T230701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbmhcQYBhd65inoNHtuKOcqKfOF3lndudwsEUYAgNLPgIgY8exLAGeoRCePfPrXDBYNP6%2Bu6w%2F4DUHM2wS2kZddDUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDOmiMKkVnMf0cCjqACrcA8P8sxfI0GyFLVxKcoqB6HAmTvudlordMW1p53fui%2B2C%2FUPfjncOTYGFrllY%2FpKKZ9KiN3RTXQ83inMkvQj7zQO%2FSqxqawr4ABYG3WrSwHqVXjuttofQuckjMeTHYgBI0CUvbFyiFbxMoTupnEK3p4dS4jgSQZFOWaObCWUD3U2QkIJH%2FRhC0QWdjRlnoptuOBfTukpSlObNnNKUszGBYkihKyALJvMJFd9nd34frD02gzGtJyhuYj%2FPhRZRClwxFbo3xdbe3PiI08mt1rYJR4DW5%2Fxht7Xho4uyn7pyMQvHDD1mQFbT%2Fa1P0oOaojOuvLind814tbKuw5g4VMw6wYbq6O3lQOcJNyA6l%2B3n6pi8%2FjYuVobMVRKeTjaDvej%2BodJu%2B3xSq3ZgglHmZkmrMdPWYweTNWe2XTOeGySfT4DsoU4nxedfshezdZo5XSaDkUd55fJXKrCBCn84%2FLEHbITOtlZr1mNHRWm0HFgp%2Fb8tEXC2TPjtZkpxn%2BhGVGTX%2F311Om3Ccpq%2F%2B2P2gAfLH26h1AQl6xiiQ35b1rdY1SQJNvEItZIwxqegTgCYRrs4qy%2B0nYvEcHm9teSYdltsl%2FaBwLtRROyIfTxNALxF66BruiDpW3PO5Sun4cyxMNOB2L4GOqUBKTGHPD7lOfuYiDuX1XOBFR1w0l2TJvco%2FyMcTXgXJqctvKXemRMdyIKWJRH%2FrCBT1jSRVsxkarZU%2F1q2yycUiwwtNXYPbpGubNWFK8olOW1HqobQpCZGeytg5BG73AIOk8P60RgFWh24bF2YYrJxhFysKpXgHk1392ujBVReY68mW1jimsWysxh7OjeMdY6LRL2rAeWYFK93AkM0%2FO3BuwYBOU1K&X-Amz-Signature=d1717af6e938d0352038fa42c09b3804bb50adf134a148e9aeb30f7cdfe45e7a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAWL3W5K%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T230701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbmhcQYBhd65inoNHtuKOcqKfOF3lndudwsEUYAgNLPgIgY8exLAGeoRCePfPrXDBYNP6%2Bu6w%2F4DUHM2wS2kZddDUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDOmiMKkVnMf0cCjqACrcA8P8sxfI0GyFLVxKcoqB6HAmTvudlordMW1p53fui%2B2C%2FUPfjncOTYGFrllY%2FpKKZ9KiN3RTXQ83inMkvQj7zQO%2FSqxqawr4ABYG3WrSwHqVXjuttofQuckjMeTHYgBI0CUvbFyiFbxMoTupnEK3p4dS4jgSQZFOWaObCWUD3U2QkIJH%2FRhC0QWdjRlnoptuOBfTukpSlObNnNKUszGBYkihKyALJvMJFd9nd34frD02gzGtJyhuYj%2FPhRZRClwxFbo3xdbe3PiI08mt1rYJR4DW5%2Fxht7Xho4uyn7pyMQvHDD1mQFbT%2Fa1P0oOaojOuvLind814tbKuw5g4VMw6wYbq6O3lQOcJNyA6l%2B3n6pi8%2FjYuVobMVRKeTjaDvej%2BodJu%2B3xSq3ZgglHmZkmrMdPWYweTNWe2XTOeGySfT4DsoU4nxedfshezdZo5XSaDkUd55fJXKrCBCn84%2FLEHbITOtlZr1mNHRWm0HFgp%2Fb8tEXC2TPjtZkpxn%2BhGVGTX%2F311Om3Ccpq%2F%2B2P2gAfLH26h1AQl6xiiQ35b1rdY1SQJNvEItZIwxqegTgCYRrs4qy%2B0nYvEcHm9teSYdltsl%2FaBwLtRROyIfTxNALxF66BruiDpW3PO5Sun4cyxMNOB2L4GOqUBKTGHPD7lOfuYiDuX1XOBFR1w0l2TJvco%2FyMcTXgXJqctvKXemRMdyIKWJRH%2FrCBT1jSRVsxkarZU%2F1q2yycUiwwtNXYPbpGubNWFK8olOW1HqobQpCZGeytg5BG73AIOk8P60RgFWh24bF2YYrJxhFysKpXgHk1392ujBVReY68mW1jimsWysxh7OjeMdY6LRL2rAeWYFK93AkM0%2FO3BuwYBOU1K&X-Amz-Signature=257fc0694dc6953e692c02483102826ef33c43f5a2afa25256467824214004e4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
