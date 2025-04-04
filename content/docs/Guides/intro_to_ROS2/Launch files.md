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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCIMMU5F%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAf3o%2BLQ9jBifSD73dO2sW%2BJjUv2HD1YZi2rNloRqSwAiEArrZ17sNhen6t1AjxcD7nqdF8TDpPdIBxoWFIUUhRtt0q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDGPMomZxDOxxybTSgircA16iblJjLsIOsI2FOXoMVoqQp6113UBCaBXcK9J1uoWHPsXm4uxAm0mqoxmL6gyCza2i%2BX7TnXtYBGdgep%2FI8JTOkxMDQdVes5kvrlmSaaYgArUhMfvV%2BYYeCBx%2FDvGtRqefwvuA1bb0TxMq%2FBX1YMYQEMz3TezmnkXYZfYDRicN5kSHATG9reTDgJIoLSeUU7qJVSegZiH4OmJnuJERliSw5xhTKlwTFYNwCQGOMrqFNW29IhgHdEirGlQfHnsFGV9gl53Xk%2Fzif%2BSOiZw0%2BesW8aTzIHitjrI11GIJ%2FNA0Ld1jpwWFT2fgg1Yp4004lY8ZPn1wjLcnJVSq6FQdIRfPrVMMym7rZQPwwWzQWdUWurCMQJxrYLFhmMa%2BvlBKSKMWOa0M%2BVFFmA7s9ngQjMYQHopPNJhyPSwUUVrg8Ag%2B%2FpiCi8EdPTrkFPqttNBzVPg2kb5npRxWrx%2FyLxKyrCAJjCee9oPFcy1EnIvwv2mo%2BLWJyvtx11LVlSTm%2Ff%2FKg%2F0Zn%2BWrMFwlkdkfD%2BVaNd%2BPEMp6VnxOFbSRv6FQhWazyDB%2B2JxLvTWGji0X%2FaF%2B%2Bvhr8oA7BMf2IppPJgPE6BhzlOJdlXZHHHsz1q3B%2BQVzABWDsrpL3XclSQ%2BVMKmIwb8GOqUBGVRTc3Y6umxxU3qVxTdaNnJrP5ft5nYTu8iYnIV07%2Bu%2F1pY%2F9xNSSfc422qxhfWMwW12sU%2FYBWFiBAlDHpRr%2F%2BjTUV5zfe3tEXkzq7j2tCeSErXYG8lREpE6hSC1HdWn9EMpPOV7WcLuZNaNmr%2BvvI1g53aBTqndjnRl5%2F7VqB%2B5ubt1zdiWpXUUByabQZOWbrz%2F9p17cJWUCHE9UlfZ5%2FQydBpk&X-Amz-Signature=24795b85087a4c1c404a9429311c234ffb59325b76c15bbd53913c341fb4dd09&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCIMMU5F%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAf3o%2BLQ9jBifSD73dO2sW%2BJjUv2HD1YZi2rNloRqSwAiEArrZ17sNhen6t1AjxcD7nqdF8TDpPdIBxoWFIUUhRtt0q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDGPMomZxDOxxybTSgircA16iblJjLsIOsI2FOXoMVoqQp6113UBCaBXcK9J1uoWHPsXm4uxAm0mqoxmL6gyCza2i%2BX7TnXtYBGdgep%2FI8JTOkxMDQdVes5kvrlmSaaYgArUhMfvV%2BYYeCBx%2FDvGtRqefwvuA1bb0TxMq%2FBX1YMYQEMz3TezmnkXYZfYDRicN5kSHATG9reTDgJIoLSeUU7qJVSegZiH4OmJnuJERliSw5xhTKlwTFYNwCQGOMrqFNW29IhgHdEirGlQfHnsFGV9gl53Xk%2Fzif%2BSOiZw0%2BesW8aTzIHitjrI11GIJ%2FNA0Ld1jpwWFT2fgg1Yp4004lY8ZPn1wjLcnJVSq6FQdIRfPrVMMym7rZQPwwWzQWdUWurCMQJxrYLFhmMa%2BvlBKSKMWOa0M%2BVFFmA7s9ngQjMYQHopPNJhyPSwUUVrg8Ag%2B%2FpiCi8EdPTrkFPqttNBzVPg2kb5npRxWrx%2FyLxKyrCAJjCee9oPFcy1EnIvwv2mo%2BLWJyvtx11LVlSTm%2Ff%2FKg%2F0Zn%2BWrMFwlkdkfD%2BVaNd%2BPEMp6VnxOFbSRv6FQhWazyDB%2B2JxLvTWGji0X%2FaF%2B%2Bvhr8oA7BMf2IppPJgPE6BhzlOJdlXZHHHsz1q3B%2BQVzABWDsrpL3XclSQ%2BVMKmIwb8GOqUBGVRTc3Y6umxxU3qVxTdaNnJrP5ft5nYTu8iYnIV07%2Bu%2F1pY%2F9xNSSfc422qxhfWMwW12sU%2FYBWFiBAlDHpRr%2F%2BjTUV5zfe3tEXkzq7j2tCeSErXYG8lREpE6hSC1HdWn9EMpPOV7WcLuZNaNmr%2BvvI1g53aBTqndjnRl5%2F7VqB%2B5ubt1zdiWpXUUByabQZOWbrz%2F9p17cJWUCHE9UlfZ5%2FQydBpk&X-Amz-Signature=c0b2037585bb0da0e52cf9009a0cffc0f6df39709814320e17883f6708d3cd2b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCIMMU5F%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAf3o%2BLQ9jBifSD73dO2sW%2BJjUv2HD1YZi2rNloRqSwAiEArrZ17sNhen6t1AjxcD7nqdF8TDpPdIBxoWFIUUhRtt0q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDGPMomZxDOxxybTSgircA16iblJjLsIOsI2FOXoMVoqQp6113UBCaBXcK9J1uoWHPsXm4uxAm0mqoxmL6gyCza2i%2BX7TnXtYBGdgep%2FI8JTOkxMDQdVes5kvrlmSaaYgArUhMfvV%2BYYeCBx%2FDvGtRqefwvuA1bb0TxMq%2FBX1YMYQEMz3TezmnkXYZfYDRicN5kSHATG9reTDgJIoLSeUU7qJVSegZiH4OmJnuJERliSw5xhTKlwTFYNwCQGOMrqFNW29IhgHdEirGlQfHnsFGV9gl53Xk%2Fzif%2BSOiZw0%2BesW8aTzIHitjrI11GIJ%2FNA0Ld1jpwWFT2fgg1Yp4004lY8ZPn1wjLcnJVSq6FQdIRfPrVMMym7rZQPwwWzQWdUWurCMQJxrYLFhmMa%2BvlBKSKMWOa0M%2BVFFmA7s9ngQjMYQHopPNJhyPSwUUVrg8Ag%2B%2FpiCi8EdPTrkFPqttNBzVPg2kb5npRxWrx%2FyLxKyrCAJjCee9oPFcy1EnIvwv2mo%2BLWJyvtx11LVlSTm%2Ff%2FKg%2F0Zn%2BWrMFwlkdkfD%2BVaNd%2BPEMp6VnxOFbSRv6FQhWazyDB%2B2JxLvTWGji0X%2FaF%2B%2Bvhr8oA7BMf2IppPJgPE6BhzlOJdlXZHHHsz1q3B%2BQVzABWDsrpL3XclSQ%2BVMKmIwb8GOqUBGVRTc3Y6umxxU3qVxTdaNnJrP5ft5nYTu8iYnIV07%2Bu%2F1pY%2F9xNSSfc422qxhfWMwW12sU%2FYBWFiBAlDHpRr%2F%2BjTUV5zfe3tEXkzq7j2tCeSErXYG8lREpE6hSC1HdWn9EMpPOV7WcLuZNaNmr%2BvvI1g53aBTqndjnRl5%2F7VqB%2B5ubt1zdiWpXUUByabQZOWbrz%2F9p17cJWUCHE9UlfZ5%2FQydBpk&X-Amz-Signature=b2ac3f50bbf61bccdca90f04ec2fa95c92e56e09ae0026f7c094ade86292b657&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
