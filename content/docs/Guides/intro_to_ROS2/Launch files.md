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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D4TPB6C%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T220150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIBeWe5Uzf1mD1msPSVgl%2Fh1w36aPpOw82yAvTDCydR6RAiEA7giSk%2FsYaJlk3ly42lA4stx0IbhNErYTS7M6LqP2q6kq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDFzk4dT%2FGr%2FUDr2BbyrcA6Z7kxp5JHM6GUSFm4m9sGWamPFoeEuPhmL%2B81HrML%2B5rPe69GhE9wS%2FuMWVzzFdz2p4Ph%2B71h%2FwXTngep6iwYVFIL8rzMo6leQi1Kd8uNW4SB5hpV9LdpuQU7P0Qje3MO6lioMccONMAoRfOMtL9ZQ%2Bqo1cbS7ETkxaujB9d0%2BD6TwOipeEd9k612HggaBzRL2UFCBA2wdv0XAsIzzhDO9%2FO5AwP5UA%2FUEVu6P0rgCHUUQpv9Nj1a46FXTiwLrExEbqyfDwuRTsI0cF03%2BGtkaY2JIi%2FnyUS91uDcE6Qu%2FLfmNg5gjWqur%2B7PytDaJuNGkuxHBFfNm1gE1cGvA%2BU8y8973e1%2F4lVGJfmdRBHQ1y6AD0y4XjBtgdotUwTdMNZXiZSVavAhRQrs%2F6ovLrAdGsu8vzn2els0nWWVzM9U%2BNxw03g6V0%2B7Ay%2FWUygABCVQ4ilQIiT9enC%2Bw%2FcelbmHiuB7Qxv0s%2FMX9xIFG9dAMuN5kIjrm9PUrT0luWbB%2Btd7nvHjwqvDba3D2A39bvzJDp0e6j%2FZcgbpHrVjWYSijkq8wkvGEX%2FBQlBGs2Z7RLGOCkauJyx4vCaIBmX%2BtLbE3jdn5HpoZQyahFqMU5l1q%2B6eTomLPMF3KA%2FUL7MP6%2Brb4GOqUBEZH9y6%2BwkRc5KW0YeOhBLKBenXU6FnmznAM18CvUyEd3ryTlDEmGY4Fpitc7FV%2FZey6i2NaGBycPQXBKPK1CB68CbdSydLkzM9GPBTLJzEFNqFnE%2FTBa6bP3H93HC%2FZDbVsb%2FiU3lOJ3TWAuHAT8RF9HYsyS0PQaJxTvRIpXkoodlqBGkRCN6o%2BaHJHaJMIRubF%2BNae7RmwRuZUVQx3ZeA3kanY9&X-Amz-Signature=79d6d3d3b7c7f21a0d26af4f36e4d54af46ce6cc31f77edbde94c55fab03aa89&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D4TPB6C%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T220150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIBeWe5Uzf1mD1msPSVgl%2Fh1w36aPpOw82yAvTDCydR6RAiEA7giSk%2FsYaJlk3ly42lA4stx0IbhNErYTS7M6LqP2q6kq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDFzk4dT%2FGr%2FUDr2BbyrcA6Z7kxp5JHM6GUSFm4m9sGWamPFoeEuPhmL%2B81HrML%2B5rPe69GhE9wS%2FuMWVzzFdz2p4Ph%2B71h%2FwXTngep6iwYVFIL8rzMo6leQi1Kd8uNW4SB5hpV9LdpuQU7P0Qje3MO6lioMccONMAoRfOMtL9ZQ%2Bqo1cbS7ETkxaujB9d0%2BD6TwOipeEd9k612HggaBzRL2UFCBA2wdv0XAsIzzhDO9%2FO5AwP5UA%2FUEVu6P0rgCHUUQpv9Nj1a46FXTiwLrExEbqyfDwuRTsI0cF03%2BGtkaY2JIi%2FnyUS91uDcE6Qu%2FLfmNg5gjWqur%2B7PytDaJuNGkuxHBFfNm1gE1cGvA%2BU8y8973e1%2F4lVGJfmdRBHQ1y6AD0y4XjBtgdotUwTdMNZXiZSVavAhRQrs%2F6ovLrAdGsu8vzn2els0nWWVzM9U%2BNxw03g6V0%2B7Ay%2FWUygABCVQ4ilQIiT9enC%2Bw%2FcelbmHiuB7Qxv0s%2FMX9xIFG9dAMuN5kIjrm9PUrT0luWbB%2Btd7nvHjwqvDba3D2A39bvzJDp0e6j%2FZcgbpHrVjWYSijkq8wkvGEX%2FBQlBGs2Z7RLGOCkauJyx4vCaIBmX%2BtLbE3jdn5HpoZQyahFqMU5l1q%2B6eTomLPMF3KA%2FUL7MP6%2Brb4GOqUBEZH9y6%2BwkRc5KW0YeOhBLKBenXU6FnmznAM18CvUyEd3ryTlDEmGY4Fpitc7FV%2FZey6i2NaGBycPQXBKPK1CB68CbdSydLkzM9GPBTLJzEFNqFnE%2FTBa6bP3H93HC%2FZDbVsb%2FiU3lOJ3TWAuHAT8RF9HYsyS0PQaJxTvRIpXkoodlqBGkRCN6o%2BaHJHaJMIRubF%2BNae7RmwRuZUVQx3ZeA3kanY9&X-Amz-Signature=5c04ed1a9749f4d0a4e2988f8f981dd6cb57ad78c4974e81ac8a08460310c1f7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D4TPB6C%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T220150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIBeWe5Uzf1mD1msPSVgl%2Fh1w36aPpOw82yAvTDCydR6RAiEA7giSk%2FsYaJlk3ly42lA4stx0IbhNErYTS7M6LqP2q6kq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDFzk4dT%2FGr%2FUDr2BbyrcA6Z7kxp5JHM6GUSFm4m9sGWamPFoeEuPhmL%2B81HrML%2B5rPe69GhE9wS%2FuMWVzzFdz2p4Ph%2B71h%2FwXTngep6iwYVFIL8rzMo6leQi1Kd8uNW4SB5hpV9LdpuQU7P0Qje3MO6lioMccONMAoRfOMtL9ZQ%2Bqo1cbS7ETkxaujB9d0%2BD6TwOipeEd9k612HggaBzRL2UFCBA2wdv0XAsIzzhDO9%2FO5AwP5UA%2FUEVu6P0rgCHUUQpv9Nj1a46FXTiwLrExEbqyfDwuRTsI0cF03%2BGtkaY2JIi%2FnyUS91uDcE6Qu%2FLfmNg5gjWqur%2B7PytDaJuNGkuxHBFfNm1gE1cGvA%2BU8y8973e1%2F4lVGJfmdRBHQ1y6AD0y4XjBtgdotUwTdMNZXiZSVavAhRQrs%2F6ovLrAdGsu8vzn2els0nWWVzM9U%2BNxw03g6V0%2B7Ay%2FWUygABCVQ4ilQIiT9enC%2Bw%2FcelbmHiuB7Qxv0s%2FMX9xIFG9dAMuN5kIjrm9PUrT0luWbB%2Btd7nvHjwqvDba3D2A39bvzJDp0e6j%2FZcgbpHrVjWYSijkq8wkvGEX%2FBQlBGs2Z7RLGOCkauJyx4vCaIBmX%2BtLbE3jdn5HpoZQyahFqMU5l1q%2B6eTomLPMF3KA%2FUL7MP6%2Brb4GOqUBEZH9y6%2BwkRc5KW0YeOhBLKBenXU6FnmznAM18CvUyEd3ryTlDEmGY4Fpitc7FV%2FZey6i2NaGBycPQXBKPK1CB68CbdSydLkzM9GPBTLJzEFNqFnE%2FTBa6bP3H93HC%2FZDbVsb%2FiU3lOJ3TWAuHAT8RF9HYsyS0PQaJxTvRIpXkoodlqBGkRCN6o%2BaHJHaJMIRubF%2BNae7RmwRuZUVQx3ZeA3kanY9&X-Amz-Signature=32da5c4d6aecc91ab4eda94f890fdeadbdae280088005058fe2ebff24c1bc957&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
