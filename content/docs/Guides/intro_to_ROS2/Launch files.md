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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TDWTACR%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T061230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHgX4eStHLO4312IheynWfaTr18ioMAEGFkkX7SNxffVAiAoAkMRce%2FiPqatiI1NjTc25kEAvlu4Q8FSFXafc5VVZCr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMeU9R6wf26s%2BG3ISBKtwDyLDMbyULX4uDPvQZOLzHsodHdYFt5OnN7Txerd9Eul5Wqf1y1xKkmBgDS%2FDBsVRpsnitlXwY6jVdAvvuK83s%2Fs3Kw1umuajUputYw9a877y8ikYuqineUQsZLRxql2Oq%2BWGePPYBaCrx5aY5zP8%2B3x1fQzJD2ZNUIIgatekT70yAFnnE9BAqw2XXWTaRN%2BQAy2aJwZVMQbk3SKKUgr0THT%2FQzhOBmQmfqDsh5%2BwB6xs8IyLXo12FZVeK%2FaSy9Wm9SPHbfD1hUUYOdtg%2BpQgVSkeaqq76w6geegud1vGuJiQnX%2Bgc31tXBzj8qw4Bno%2BhLlhXgKT1YbI86jGGJ10RRWFTl%2F6jZNWcVtdz0b3t9azLE5%2B4NWDk7uCNGvGgXVDFji78U0GC9o4tCVRk59dKs9K4WbufTbMHEfs0x3Qu1t4gPRbFT66EMwOjYhIgr0Ob6iqdNYaB6%2FzB6by%2B%2BqLGm9QjoIuLxNRrPjFFKxb916gSLZ2UX6uXIpETxMKY9%2B3VURm1pJqs8XriV9d5gcVjg0VL3NAS%2FcnlEpY7kRjOgSmGDI15Q31vsaco3BXj7%2FsM75d6ICBI3vNXrD6nx%2B999aMvdpVlW00gh4CCyFWtuxjE1nViqx86Yl1rnokwiu7SvwY6pgE06%2FfKHHg9RDpb9FAhDJdom%2B2RQNVLew1L4fewCf65KF3dcF2B%2F%2BgFLsqUF5aN80zMzS5aA%2BxDH4Ih4WHbLY9j%2Fnn58LuiCes%2B%2B2CLOA4LB2ZVA4FQQf1BhLX9TcpBOetLI6gVeo0KQUwg7YMEBpjsG8XYW2ZPp5RjKbOsG9LIdcf0N9hsxA4CBZ%2FTsGry5noM1z191mTHZfG%2BPJ6nbkdgARqZW50g&X-Amz-Signature=30318ec09381302c965ff5234714894efe75cc0c4cf2cf4c6fbfeda6be56e7d5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TDWTACR%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T061230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHgX4eStHLO4312IheynWfaTr18ioMAEGFkkX7SNxffVAiAoAkMRce%2FiPqatiI1NjTc25kEAvlu4Q8FSFXafc5VVZCr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMeU9R6wf26s%2BG3ISBKtwDyLDMbyULX4uDPvQZOLzHsodHdYFt5OnN7Txerd9Eul5Wqf1y1xKkmBgDS%2FDBsVRpsnitlXwY6jVdAvvuK83s%2Fs3Kw1umuajUputYw9a877y8ikYuqineUQsZLRxql2Oq%2BWGePPYBaCrx5aY5zP8%2B3x1fQzJD2ZNUIIgatekT70yAFnnE9BAqw2XXWTaRN%2BQAy2aJwZVMQbk3SKKUgr0THT%2FQzhOBmQmfqDsh5%2BwB6xs8IyLXo12FZVeK%2FaSy9Wm9SPHbfD1hUUYOdtg%2BpQgVSkeaqq76w6geegud1vGuJiQnX%2Bgc31tXBzj8qw4Bno%2BhLlhXgKT1YbI86jGGJ10RRWFTl%2F6jZNWcVtdz0b3t9azLE5%2B4NWDk7uCNGvGgXVDFji78U0GC9o4tCVRk59dKs9K4WbufTbMHEfs0x3Qu1t4gPRbFT66EMwOjYhIgr0Ob6iqdNYaB6%2FzB6by%2B%2BqLGm9QjoIuLxNRrPjFFKxb916gSLZ2UX6uXIpETxMKY9%2B3VURm1pJqs8XriV9d5gcVjg0VL3NAS%2FcnlEpY7kRjOgSmGDI15Q31vsaco3BXj7%2FsM75d6ICBI3vNXrD6nx%2B999aMvdpVlW00gh4CCyFWtuxjE1nViqx86Yl1rnokwiu7SvwY6pgE06%2FfKHHg9RDpb9FAhDJdom%2B2RQNVLew1L4fewCf65KF3dcF2B%2F%2BgFLsqUF5aN80zMzS5aA%2BxDH4Ih4WHbLY9j%2Fnn58LuiCes%2B%2B2CLOA4LB2ZVA4FQQf1BhLX9TcpBOetLI6gVeo0KQUwg7YMEBpjsG8XYW2ZPp5RjKbOsG9LIdcf0N9hsxA4CBZ%2FTsGry5noM1z191mTHZfG%2BPJ6nbkdgARqZW50g&X-Amz-Signature=19e130df5d286c20db902cc3577337127090be33c3beb70f54954c790a2bc750&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TDWTACR%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T061230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHgX4eStHLO4312IheynWfaTr18ioMAEGFkkX7SNxffVAiAoAkMRce%2FiPqatiI1NjTc25kEAvlu4Q8FSFXafc5VVZCr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMeU9R6wf26s%2BG3ISBKtwDyLDMbyULX4uDPvQZOLzHsodHdYFt5OnN7Txerd9Eul5Wqf1y1xKkmBgDS%2FDBsVRpsnitlXwY6jVdAvvuK83s%2Fs3Kw1umuajUputYw9a877y8ikYuqineUQsZLRxql2Oq%2BWGePPYBaCrx5aY5zP8%2B3x1fQzJD2ZNUIIgatekT70yAFnnE9BAqw2XXWTaRN%2BQAy2aJwZVMQbk3SKKUgr0THT%2FQzhOBmQmfqDsh5%2BwB6xs8IyLXo12FZVeK%2FaSy9Wm9SPHbfD1hUUYOdtg%2BpQgVSkeaqq76w6geegud1vGuJiQnX%2Bgc31tXBzj8qw4Bno%2BhLlhXgKT1YbI86jGGJ10RRWFTl%2F6jZNWcVtdz0b3t9azLE5%2B4NWDk7uCNGvGgXVDFji78U0GC9o4tCVRk59dKs9K4WbufTbMHEfs0x3Qu1t4gPRbFT66EMwOjYhIgr0Ob6iqdNYaB6%2FzB6by%2B%2BqLGm9QjoIuLxNRrPjFFKxb916gSLZ2UX6uXIpETxMKY9%2B3VURm1pJqs8XriV9d5gcVjg0VL3NAS%2FcnlEpY7kRjOgSmGDI15Q31vsaco3BXj7%2FsM75d6ICBI3vNXrD6nx%2B999aMvdpVlW00gh4CCyFWtuxjE1nViqx86Yl1rnokwiu7SvwY6pgE06%2FfKHHg9RDpb9FAhDJdom%2B2RQNVLew1L4fewCf65KF3dcF2B%2F%2BgFLsqUF5aN80zMzS5aA%2BxDH4Ih4WHbLY9j%2Fnn58LuiCes%2B%2B2CLOA4LB2ZVA4FQQf1BhLX9TcpBOetLI6gVeo0KQUwg7YMEBpjsG8XYW2ZPp5RjKbOsG9LIdcf0N9hsxA4CBZ%2FTsGry5noM1z191mTHZfG%2BPJ6nbkdgARqZW50g&X-Amz-Signature=ba529e784cab0882fec4a28385cba20e53a56f7b59f484285fbf71bcff8335d1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
