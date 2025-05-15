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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAWZYM3C%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T081251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDb1jlqyyOMvQ2drFiRJNpY2r6EZhHBr%2Bm%2F39Sh%2F1c%2BIwIhAN%2BZyuivxsF5mLfySsXIxYA7sVL50gINxtHKSZT5nN4DKv8DCCkQABoMNjM3NDIzMTgzODA1IgySNRXYbPl8195HCIMq3ANGlaMeCsna7hEmLU0a9ljoF1r7TSZ2EYYJE6nCKWqAJ3Vr63lap3V0hLOT%2FRBKfNmXDgffruo46L9CAC0IGcbH%2FaUaBd%2FST%2BVQcTzIvudTxvY2hmt0g79n8tpM8RxrurD5kb9XjFLouk9wHMWCHoaw%2BgDnjpppCdIg5dvqXfgJyxW%2FLCM54ucP4kwl7hQGM2CkKmJafrrQmSd8ANueBnFpNFjoSYiH1%2BE2TO1dW8L%2BhlYmKDPYv4urhg87iYrkWBeW7FxIU3I9ns6kzAOjdhn2YShmYxBwL4onTA%2BO%2BYRkpRN0Puu2HWvRlbVja56APOKJrKKnSR%2B3S0%2BrtoBWkdoPoqGz%2BlysH%2B5mLeMrgnCEwZ630xbAWWPmvdid4tORnwiow5LUtmt%2Bv2UUQl85Lu%2BiEs%2Fy5jAxZp0ccUdc%2B02dB2G%2BqfIwboYeQBwt6JxN1ZNYpaeS%2Fdqowsx6FfUhxIdz4Bpm6ghwcbp1JGlc4H%2FCQJ4LH46bzEOmnNMxjKvpe%2FwmBsdS4a8P55UtjieppMhrC%2FFfVs7gQPoPH3IbSeoUzsFGkZbdmwLtWkf5e9%2FK4Ow7aeK3zu%2Bmk9GNvIJ2Epu59TRPnaztqIiLjtLH35%2B53t%2FAp7xaL9Tpyqsr2TCmtpbBBjqkAe3SdNYSW5AmeCiS0%2FeMqEfR%2BjU%2Ff%2Fgd4JkSUvURdkGmNNUypHzUM7xfda%2F1an9vNfcf7xnC6YzE2gDAidLJfdmVxi4UPTv%2F8UWvaQG4xZlxcivcOJv73L9JmuBsxVd8SCjpGUEXItJaob3rM2ndHE66pllTCGrEYEv5ECQJ6qL%2Bl6F4Z8Bh45G5K5u1nJITqlV4QMj7WV099kTNHCvU7TYo4km8&X-Amz-Signature=eb052d2a097db70a1310154c6756bece42d380c28340299ca538e76be2c1e788&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAWZYM3C%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T081251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDb1jlqyyOMvQ2drFiRJNpY2r6EZhHBr%2Bm%2F39Sh%2F1c%2BIwIhAN%2BZyuivxsF5mLfySsXIxYA7sVL50gINxtHKSZT5nN4DKv8DCCkQABoMNjM3NDIzMTgzODA1IgySNRXYbPl8195HCIMq3ANGlaMeCsna7hEmLU0a9ljoF1r7TSZ2EYYJE6nCKWqAJ3Vr63lap3V0hLOT%2FRBKfNmXDgffruo46L9CAC0IGcbH%2FaUaBd%2FST%2BVQcTzIvudTxvY2hmt0g79n8tpM8RxrurD5kb9XjFLouk9wHMWCHoaw%2BgDnjpppCdIg5dvqXfgJyxW%2FLCM54ucP4kwl7hQGM2CkKmJafrrQmSd8ANueBnFpNFjoSYiH1%2BE2TO1dW8L%2BhlYmKDPYv4urhg87iYrkWBeW7FxIU3I9ns6kzAOjdhn2YShmYxBwL4onTA%2BO%2BYRkpRN0Puu2HWvRlbVja56APOKJrKKnSR%2B3S0%2BrtoBWkdoPoqGz%2BlysH%2B5mLeMrgnCEwZ630xbAWWPmvdid4tORnwiow5LUtmt%2Bv2UUQl85Lu%2BiEs%2Fy5jAxZp0ccUdc%2B02dB2G%2BqfIwboYeQBwt6JxN1ZNYpaeS%2Fdqowsx6FfUhxIdz4Bpm6ghwcbp1JGlc4H%2FCQJ4LH46bzEOmnNMxjKvpe%2FwmBsdS4a8P55UtjieppMhrC%2FFfVs7gQPoPH3IbSeoUzsFGkZbdmwLtWkf5e9%2FK4Ow7aeK3zu%2Bmk9GNvIJ2Epu59TRPnaztqIiLjtLH35%2B53t%2FAp7xaL9Tpyqsr2TCmtpbBBjqkAe3SdNYSW5AmeCiS0%2FeMqEfR%2BjU%2Ff%2Fgd4JkSUvURdkGmNNUypHzUM7xfda%2F1an9vNfcf7xnC6YzE2gDAidLJfdmVxi4UPTv%2F8UWvaQG4xZlxcivcOJv73L9JmuBsxVd8SCjpGUEXItJaob3rM2ndHE66pllTCGrEYEv5ECQJ6qL%2Bl6F4Z8Bh45G5K5u1nJITqlV4QMj7WV099kTNHCvU7TYo4km8&X-Amz-Signature=c7a6b4397e4f272be911f2ce95a869b455b30fcdff47d64c3d0fe1a62cb308b1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAWZYM3C%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T081251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDb1jlqyyOMvQ2drFiRJNpY2r6EZhHBr%2Bm%2F39Sh%2F1c%2BIwIhAN%2BZyuivxsF5mLfySsXIxYA7sVL50gINxtHKSZT5nN4DKv8DCCkQABoMNjM3NDIzMTgzODA1IgySNRXYbPl8195HCIMq3ANGlaMeCsna7hEmLU0a9ljoF1r7TSZ2EYYJE6nCKWqAJ3Vr63lap3V0hLOT%2FRBKfNmXDgffruo46L9CAC0IGcbH%2FaUaBd%2FST%2BVQcTzIvudTxvY2hmt0g79n8tpM8RxrurD5kb9XjFLouk9wHMWCHoaw%2BgDnjpppCdIg5dvqXfgJyxW%2FLCM54ucP4kwl7hQGM2CkKmJafrrQmSd8ANueBnFpNFjoSYiH1%2BE2TO1dW8L%2BhlYmKDPYv4urhg87iYrkWBeW7FxIU3I9ns6kzAOjdhn2YShmYxBwL4onTA%2BO%2BYRkpRN0Puu2HWvRlbVja56APOKJrKKnSR%2B3S0%2BrtoBWkdoPoqGz%2BlysH%2B5mLeMrgnCEwZ630xbAWWPmvdid4tORnwiow5LUtmt%2Bv2UUQl85Lu%2BiEs%2Fy5jAxZp0ccUdc%2B02dB2G%2BqfIwboYeQBwt6JxN1ZNYpaeS%2Fdqowsx6FfUhxIdz4Bpm6ghwcbp1JGlc4H%2FCQJ4LH46bzEOmnNMxjKvpe%2FwmBsdS4a8P55UtjieppMhrC%2FFfVs7gQPoPH3IbSeoUzsFGkZbdmwLtWkf5e9%2FK4Ow7aeK3zu%2Bmk9GNvIJ2Epu59TRPnaztqIiLjtLH35%2B53t%2FAp7xaL9Tpyqsr2TCmtpbBBjqkAe3SdNYSW5AmeCiS0%2FeMqEfR%2BjU%2Ff%2Fgd4JkSUvURdkGmNNUypHzUM7xfda%2F1an9vNfcf7xnC6YzE2gDAidLJfdmVxi4UPTv%2F8UWvaQG4xZlxcivcOJv73L9JmuBsxVd8SCjpGUEXItJaob3rM2ndHE66pllTCGrEYEv5ECQJ6qL%2Bl6F4Z8Bh45G5K5u1nJITqlV4QMj7WV099kTNHCvU7TYo4km8&X-Amz-Signature=8ad21d2de5e3ce2401a28cebc9d7c775a967a483c472b0d30e8fca5450d13842&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
