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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4HRM4LN%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3zWibMpH2fAa8TRuOY4yJ41VpanFI%2BqSPi3NKtvFDrwIgIUsoad4LDHIJvNr7lQAISR63Lk13PdzNZ1%2BtW7BjHxAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDAf%2F3v4QXmYhhP5cmircAwmlulfC9fwGKLEmB0lh6iHkTijtrR6cEmv0I3JgAt%2BjruWmhHjvZYNeYrufsO0ge9ZrxTCYg0Og6SGDLYxvxdHxDApqK85woauVJ2S9QRC2jaOKxVOwG9xJoIqd21iBQULBL%2Fm0R1UasTK418CPpXPiznDCXKJc1ldMQqFzwI0rBCi7kKReNJ8fUakz4Ga%2Bm7EJfMH2azfQYT3hd%2FrVRhA6EWfOe3hvhtLaQuMLyjdn39mlmLytekhCehDT%2FGVL5jou1teBkf8p251oEIsbUnM7PocxG15mAcWnUO0ArdgfEWW9FYwPFzLhDvLR%2F454nyICVLcSe8HlIlPAeXjeY%2BJpqkGE01Hl5d5zXQ9sWvzGXTOA7eGGMXjB9kFWlmJjYnox1r%2BLTTEgKnqXXbYsuyP3Cps2AEEIhOEf87iHTH4gzq6q75vOotvIq3eGZGaVeIgr7zhfUNH3rrBt67aaiaTYLth8B5oUoVJGrXhu3I2vqrVtwxylVF5aTFxgUBLNMH4a6TMqo5wbcLgtlCbeva5u6POzW2SvFFOqzj4vYkptGCKcIsYUCvULlgsExXAmE96Y%2BQWJaavJ58qc1vLNuF6wSrmKgm9if%2FoLaSXeoJAzFdYxGCj1iTdRCO83MOCbp8EGOqUB7Yc9FnC1ve%2BlMAYrk4MRclAbvYAXktsOi0Tx9t4a9MNpnrzHs61cJtFWkTfjJu%2FsosNbpDGurgY1V4C1qm7QiXUGEUXwKlIoSbm8GHon9qSLaM9P02WfqqlnneN2JXrojZh80BIFd0oiAa9EfF5dFjXF%2B4ytLlQfYqXXOSRr1chlo3wzpdxBLQMbJjR31Bqber%2Fnl91PVRQmf1hJvfKDLULHb%2Bzz&X-Amz-Signature=693e7d25ef692db44efb96838fe6856f63c980fd9e340ee8692200af59285695&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4HRM4LN%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3zWibMpH2fAa8TRuOY4yJ41VpanFI%2BqSPi3NKtvFDrwIgIUsoad4LDHIJvNr7lQAISR63Lk13PdzNZ1%2BtW7BjHxAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDAf%2F3v4QXmYhhP5cmircAwmlulfC9fwGKLEmB0lh6iHkTijtrR6cEmv0I3JgAt%2BjruWmhHjvZYNeYrufsO0ge9ZrxTCYg0Og6SGDLYxvxdHxDApqK85woauVJ2S9QRC2jaOKxVOwG9xJoIqd21iBQULBL%2Fm0R1UasTK418CPpXPiznDCXKJc1ldMQqFzwI0rBCi7kKReNJ8fUakz4Ga%2Bm7EJfMH2azfQYT3hd%2FrVRhA6EWfOe3hvhtLaQuMLyjdn39mlmLytekhCehDT%2FGVL5jou1teBkf8p251oEIsbUnM7PocxG15mAcWnUO0ArdgfEWW9FYwPFzLhDvLR%2F454nyICVLcSe8HlIlPAeXjeY%2BJpqkGE01Hl5d5zXQ9sWvzGXTOA7eGGMXjB9kFWlmJjYnox1r%2BLTTEgKnqXXbYsuyP3Cps2AEEIhOEf87iHTH4gzq6q75vOotvIq3eGZGaVeIgr7zhfUNH3rrBt67aaiaTYLth8B5oUoVJGrXhu3I2vqrVtwxylVF5aTFxgUBLNMH4a6TMqo5wbcLgtlCbeva5u6POzW2SvFFOqzj4vYkptGCKcIsYUCvULlgsExXAmE96Y%2BQWJaavJ58qc1vLNuF6wSrmKgm9if%2FoLaSXeoJAzFdYxGCj1iTdRCO83MOCbp8EGOqUB7Yc9FnC1ve%2BlMAYrk4MRclAbvYAXktsOi0Tx9t4a9MNpnrzHs61cJtFWkTfjJu%2FsosNbpDGurgY1V4C1qm7QiXUGEUXwKlIoSbm8GHon9qSLaM9P02WfqqlnneN2JXrojZh80BIFd0oiAa9EfF5dFjXF%2B4ytLlQfYqXXOSRr1chlo3wzpdxBLQMbJjR31Bqber%2Fnl91PVRQmf1hJvfKDLULHb%2Bzz&X-Amz-Signature=c71b025a27f0d01e8b0ddf753eb29ff8aafdc2e2e7d8225d330b4d22e8c2b512&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4HRM4LN%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3zWibMpH2fAa8TRuOY4yJ41VpanFI%2BqSPi3NKtvFDrwIgIUsoad4LDHIJvNr7lQAISR63Lk13PdzNZ1%2BtW7BjHxAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDAf%2F3v4QXmYhhP5cmircAwmlulfC9fwGKLEmB0lh6iHkTijtrR6cEmv0I3JgAt%2BjruWmhHjvZYNeYrufsO0ge9ZrxTCYg0Og6SGDLYxvxdHxDApqK85woauVJ2S9QRC2jaOKxVOwG9xJoIqd21iBQULBL%2Fm0R1UasTK418CPpXPiznDCXKJc1ldMQqFzwI0rBCi7kKReNJ8fUakz4Ga%2Bm7EJfMH2azfQYT3hd%2FrVRhA6EWfOe3hvhtLaQuMLyjdn39mlmLytekhCehDT%2FGVL5jou1teBkf8p251oEIsbUnM7PocxG15mAcWnUO0ArdgfEWW9FYwPFzLhDvLR%2F454nyICVLcSe8HlIlPAeXjeY%2BJpqkGE01Hl5d5zXQ9sWvzGXTOA7eGGMXjB9kFWlmJjYnox1r%2BLTTEgKnqXXbYsuyP3Cps2AEEIhOEf87iHTH4gzq6q75vOotvIq3eGZGaVeIgr7zhfUNH3rrBt67aaiaTYLth8B5oUoVJGrXhu3I2vqrVtwxylVF5aTFxgUBLNMH4a6TMqo5wbcLgtlCbeva5u6POzW2SvFFOqzj4vYkptGCKcIsYUCvULlgsExXAmE96Y%2BQWJaavJ58qc1vLNuF6wSrmKgm9if%2FoLaSXeoJAzFdYxGCj1iTdRCO83MOCbp8EGOqUB7Yc9FnC1ve%2BlMAYrk4MRclAbvYAXktsOi0Tx9t4a9MNpnrzHs61cJtFWkTfjJu%2FsosNbpDGurgY1V4C1qm7QiXUGEUXwKlIoSbm8GHon9qSLaM9P02WfqqlnneN2JXrojZh80BIFd0oiAa9EfF5dFjXF%2B4ytLlQfYqXXOSRr1chlo3wzpdxBLQMbJjR31Bqber%2Fnl91PVRQmf1hJvfKDLULHb%2Bzz&X-Amz-Signature=4bd68d4108103088e166bca5f3cd470a299ff7dd28e68b53e54a6e80bcfddeef&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
