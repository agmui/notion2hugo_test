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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W5IBQJY%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T210834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFSYrNHvA9Wm%2F6ywaXdbWBrrc%2FwxP4BOrQ0gLe7bG1xHAiBZG%2Bpjx6TNH8uvZGJ8XBEmO1E2LI9GfxPVZ50W4ASu1iqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWRkHaz11ihsr1nvKKtwDT7GyYncok60ktVMkT3Q0QgPEXvryV4FThf0vE80E5eh5jBLBCjT7vdaGoaJwoXntRZ5dC1RcBkmwAqCppPjldb7P1c%2BoJ%2BgVbO%2FxVC37Qbmx1GAqUT0ouFy%2BTGiHhrGkwBPGHRxLF2Y40UwshNE4eseyKW8ZwXNG6FyNZ5PZSsBsYPk4IW7mKxWwCtG4G%2BNz3gno2jitTwuwX1WdrHr9vWoV0dI45Keru1bvhT%2F4E%2BNOeckLTrD6l05iVckIu6TTLN3HgwC7bUeAu5s3259oMiGoXTVCJP4fqPR4s4lby1PER%2BMmo21ommePvMNyX06L6FHk%2B1%2F7jKYXbXuAqNCoccXu9HFliuFpelhrWeLNppFFla6w34hgN0qscWyH9IVxSlQ4RGIVjFs1ZcccrNJrUBXuvmCQ4x2Ja3XK3OfGJCLuwjOdaDRtuIJM%2FbeJSh0GhAAFOYt5FgGiY41aPcoO1lU3k1Zwd%2BRgzKkLIv6W9UY3GET%2FYwKzyv%2B9dqlM133DBrTvipd2WFT2%2F%2B8ZgdfFfHfaE1MEC1Nw235xM88vTs7qxm0ZeyD%2FfIFcKR%2FcoptfjRWm2NqAUhhsHpqksd56mhMhclJdbcjvSrDQRuftOu63iwcyW4bS1CZfTRsw3pq7wwY6pgF2SkYdb5kHZZ7Xlr0aeuygm3XXmsfy2YG9R5uBu4DX5nhM5gAqZVVRwM7eGxTu%2Bqs4V0sKZdrcQEVVcKvnP08DKslTMTexT9DAQbFvhI7SGxa2wI6BuGZdS%2FHtlornoRebLuBn1MWus81fGYlIFvPCU9PFIj2a393%2FOvhwHUtNyKkulucAEWAL2OWEWy81kpDfNqGWxmcC0GYZ72xSd2kzGxeLzVnF&X-Amz-Signature=0c1c20e190c2a8fb673f2b02c766794ecb3980ba38275da6a145f8ce27224788&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W5IBQJY%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T210834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFSYrNHvA9Wm%2F6ywaXdbWBrrc%2FwxP4BOrQ0gLe7bG1xHAiBZG%2Bpjx6TNH8uvZGJ8XBEmO1E2LI9GfxPVZ50W4ASu1iqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWRkHaz11ihsr1nvKKtwDT7GyYncok60ktVMkT3Q0QgPEXvryV4FThf0vE80E5eh5jBLBCjT7vdaGoaJwoXntRZ5dC1RcBkmwAqCppPjldb7P1c%2BoJ%2BgVbO%2FxVC37Qbmx1GAqUT0ouFy%2BTGiHhrGkwBPGHRxLF2Y40UwshNE4eseyKW8ZwXNG6FyNZ5PZSsBsYPk4IW7mKxWwCtG4G%2BNz3gno2jitTwuwX1WdrHr9vWoV0dI45Keru1bvhT%2F4E%2BNOeckLTrD6l05iVckIu6TTLN3HgwC7bUeAu5s3259oMiGoXTVCJP4fqPR4s4lby1PER%2BMmo21ommePvMNyX06L6FHk%2B1%2F7jKYXbXuAqNCoccXu9HFliuFpelhrWeLNppFFla6w34hgN0qscWyH9IVxSlQ4RGIVjFs1ZcccrNJrUBXuvmCQ4x2Ja3XK3OfGJCLuwjOdaDRtuIJM%2FbeJSh0GhAAFOYt5FgGiY41aPcoO1lU3k1Zwd%2BRgzKkLIv6W9UY3GET%2FYwKzyv%2B9dqlM133DBrTvipd2WFT2%2F%2B8ZgdfFfHfaE1MEC1Nw235xM88vTs7qxm0ZeyD%2FfIFcKR%2FcoptfjRWm2NqAUhhsHpqksd56mhMhclJdbcjvSrDQRuftOu63iwcyW4bS1CZfTRsw3pq7wwY6pgF2SkYdb5kHZZ7Xlr0aeuygm3XXmsfy2YG9R5uBu4DX5nhM5gAqZVVRwM7eGxTu%2Bqs4V0sKZdrcQEVVcKvnP08DKslTMTexT9DAQbFvhI7SGxa2wI6BuGZdS%2FHtlornoRebLuBn1MWus81fGYlIFvPCU9PFIj2a393%2FOvhwHUtNyKkulucAEWAL2OWEWy81kpDfNqGWxmcC0GYZ72xSd2kzGxeLzVnF&X-Amz-Signature=879089e49a7d3d4e9dcd612b2b040fb1cbe7da2f92ccb33bb4ece8bcccd36c30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W5IBQJY%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T210834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFSYrNHvA9Wm%2F6ywaXdbWBrrc%2FwxP4BOrQ0gLe7bG1xHAiBZG%2Bpjx6TNH8uvZGJ8XBEmO1E2LI9GfxPVZ50W4ASu1iqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWRkHaz11ihsr1nvKKtwDT7GyYncok60ktVMkT3Q0QgPEXvryV4FThf0vE80E5eh5jBLBCjT7vdaGoaJwoXntRZ5dC1RcBkmwAqCppPjldb7P1c%2BoJ%2BgVbO%2FxVC37Qbmx1GAqUT0ouFy%2BTGiHhrGkwBPGHRxLF2Y40UwshNE4eseyKW8ZwXNG6FyNZ5PZSsBsYPk4IW7mKxWwCtG4G%2BNz3gno2jitTwuwX1WdrHr9vWoV0dI45Keru1bvhT%2F4E%2BNOeckLTrD6l05iVckIu6TTLN3HgwC7bUeAu5s3259oMiGoXTVCJP4fqPR4s4lby1PER%2BMmo21ommePvMNyX06L6FHk%2B1%2F7jKYXbXuAqNCoccXu9HFliuFpelhrWeLNppFFla6w34hgN0qscWyH9IVxSlQ4RGIVjFs1ZcccrNJrUBXuvmCQ4x2Ja3XK3OfGJCLuwjOdaDRtuIJM%2FbeJSh0GhAAFOYt5FgGiY41aPcoO1lU3k1Zwd%2BRgzKkLIv6W9UY3GET%2FYwKzyv%2B9dqlM133DBrTvipd2WFT2%2F%2B8ZgdfFfHfaE1MEC1Nw235xM88vTs7qxm0ZeyD%2FfIFcKR%2FcoptfjRWm2NqAUhhsHpqksd56mhMhclJdbcjvSrDQRuftOu63iwcyW4bS1CZfTRsw3pq7wwY6pgF2SkYdb5kHZZ7Xlr0aeuygm3XXmsfy2YG9R5uBu4DX5nhM5gAqZVVRwM7eGxTu%2Bqs4V0sKZdrcQEVVcKvnP08DKslTMTexT9DAQbFvhI7SGxa2wI6BuGZdS%2FHtlornoRebLuBn1MWus81fGYlIFvPCU9PFIj2a393%2FOvhwHUtNyKkulucAEWAL2OWEWy81kpDfNqGWxmcC0GYZ72xSd2kzGxeLzVnF&X-Amz-Signature=b7ac3a5744c3e4a82b6fd9704bcfbaa7ea05b55b33a99262c2cc4600cb562658&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
