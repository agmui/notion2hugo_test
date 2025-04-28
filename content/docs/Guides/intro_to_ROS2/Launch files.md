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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WJ6MKAT%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE5pJaxI2hfnOT8jv2D6IO1p6%2FnH2s5YKBNG5Tqjvo3XAiBPPAjUy9CncqBNcLuQyb1btCbJOM6VUkzPEF1Z8dw2dyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMWykhr83%2B4UjeXigNKtwDPVBmFkmHeAqZqeIg7wVpwebjSn9F%2Fe4zlvq%2BScuihP8zKPAZgVNYIAamf71TFZSdXXpOqWFnTPJlp1dAGGzFWr6nMlxKBgwL1R1CRkOLAAJrrlX%2FA89SBcb%2BfUMwsu%2Fmd3h4lm%2Fr0Nhi7Lw2uLevV9QQXn%2Fo5%2BzG8qQMOQKLW8%2BtZ1cXcxHyaA3URVWMuxYncohDdlDhRNIcCAL1%2Bkw1nK1AgmBE0fVs%2B4z%2Bx1OPs%2BUyfDFj0ruceLxLK5m9wNLdUUZxudtoB1MFnTSyTM%2BjzziB46p%2F%2FbpqeQHO9diexQC36UosG4KpiWkC073ria5%2BNGz5VsKiQwdxQIs%2FfvJYOU8CzQI2jQZUMv8xhNHqiF%2Fi1J4bqRAjU1ljeuA3fd9KhgjxGvRWQq7RBeC60bRbo8ffQIQFnBcAhNZrg%2F2LgdXZmkTuzbjbmNscdWepN0ZzdjR%2BX2b8El%2FXH1qzwzYokONZ98EZ50POpGFIYzIRpd%2BA9RYw7hWAp38T0f9CBkGWMU8ZCBJtOgA%2FNwTKVne7G6eMKcLY6S%2FMdp31gtGoRy%2F181N2Az85c93UtYvPPw5vaRNOrMP2pj1lksZFCuaSFh4aqvP8MKZmAmjbMCkMEtdNVDw%2B0h9pXGWEQnww99G%2FwAY6pgG%2BLQW%2B1%2BlBqA61%2F7%2Fql46Y3bKoe03BOEpThi53bWDHk0dEgSpxSPskRpGGL3pjlZkaKMOCkLv1ySBtqkqfhodFtRNv6tuJ0wSbXWF0SLZAfuTmwSeKyLc8pnQvcQa%2FQNr%2Fv%2BeaBFJTlLqbaEuNFgPZQcaI2Czbm8U4l0Lka0DSN9s6w4WoLi20eR5uwc6N2slZxuT%2BRUcL55maKrZ8SuACzTgL1IpE&X-Amz-Signature=6fc878ad7a5200dd0421dbbafe8caaac4828c2f006a3ecda1fe624b2d2c0b46c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WJ6MKAT%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE5pJaxI2hfnOT8jv2D6IO1p6%2FnH2s5YKBNG5Tqjvo3XAiBPPAjUy9CncqBNcLuQyb1btCbJOM6VUkzPEF1Z8dw2dyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMWykhr83%2B4UjeXigNKtwDPVBmFkmHeAqZqeIg7wVpwebjSn9F%2Fe4zlvq%2BScuihP8zKPAZgVNYIAamf71TFZSdXXpOqWFnTPJlp1dAGGzFWr6nMlxKBgwL1R1CRkOLAAJrrlX%2FA89SBcb%2BfUMwsu%2Fmd3h4lm%2Fr0Nhi7Lw2uLevV9QQXn%2Fo5%2BzG8qQMOQKLW8%2BtZ1cXcxHyaA3URVWMuxYncohDdlDhRNIcCAL1%2Bkw1nK1AgmBE0fVs%2B4z%2Bx1OPs%2BUyfDFj0ruceLxLK5m9wNLdUUZxudtoB1MFnTSyTM%2BjzziB46p%2F%2FbpqeQHO9diexQC36UosG4KpiWkC073ria5%2BNGz5VsKiQwdxQIs%2FfvJYOU8CzQI2jQZUMv8xhNHqiF%2Fi1J4bqRAjU1ljeuA3fd9KhgjxGvRWQq7RBeC60bRbo8ffQIQFnBcAhNZrg%2F2LgdXZmkTuzbjbmNscdWepN0ZzdjR%2BX2b8El%2FXH1qzwzYokONZ98EZ50POpGFIYzIRpd%2BA9RYw7hWAp38T0f9CBkGWMU8ZCBJtOgA%2FNwTKVne7G6eMKcLY6S%2FMdp31gtGoRy%2F181N2Az85c93UtYvPPw5vaRNOrMP2pj1lksZFCuaSFh4aqvP8MKZmAmjbMCkMEtdNVDw%2B0h9pXGWEQnww99G%2FwAY6pgG%2BLQW%2B1%2BlBqA61%2F7%2Fql46Y3bKoe03BOEpThi53bWDHk0dEgSpxSPskRpGGL3pjlZkaKMOCkLv1ySBtqkqfhodFtRNv6tuJ0wSbXWF0SLZAfuTmwSeKyLc8pnQvcQa%2FQNr%2Fv%2BeaBFJTlLqbaEuNFgPZQcaI2Czbm8U4l0Lka0DSN9s6w4WoLi20eR5uwc6N2slZxuT%2BRUcL55maKrZ8SuACzTgL1IpE&X-Amz-Signature=6667b613303ea2342884ebc65eb4c7cc13b467b0b1ea5b2450794e3faff3ac43&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WJ6MKAT%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE5pJaxI2hfnOT8jv2D6IO1p6%2FnH2s5YKBNG5Tqjvo3XAiBPPAjUy9CncqBNcLuQyb1btCbJOM6VUkzPEF1Z8dw2dyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMWykhr83%2B4UjeXigNKtwDPVBmFkmHeAqZqeIg7wVpwebjSn9F%2Fe4zlvq%2BScuihP8zKPAZgVNYIAamf71TFZSdXXpOqWFnTPJlp1dAGGzFWr6nMlxKBgwL1R1CRkOLAAJrrlX%2FA89SBcb%2BfUMwsu%2Fmd3h4lm%2Fr0Nhi7Lw2uLevV9QQXn%2Fo5%2BzG8qQMOQKLW8%2BtZ1cXcxHyaA3URVWMuxYncohDdlDhRNIcCAL1%2Bkw1nK1AgmBE0fVs%2B4z%2Bx1OPs%2BUyfDFj0ruceLxLK5m9wNLdUUZxudtoB1MFnTSyTM%2BjzziB46p%2F%2FbpqeQHO9diexQC36UosG4KpiWkC073ria5%2BNGz5VsKiQwdxQIs%2FfvJYOU8CzQI2jQZUMv8xhNHqiF%2Fi1J4bqRAjU1ljeuA3fd9KhgjxGvRWQq7RBeC60bRbo8ffQIQFnBcAhNZrg%2F2LgdXZmkTuzbjbmNscdWepN0ZzdjR%2BX2b8El%2FXH1qzwzYokONZ98EZ50POpGFIYzIRpd%2BA9RYw7hWAp38T0f9CBkGWMU8ZCBJtOgA%2FNwTKVne7G6eMKcLY6S%2FMdp31gtGoRy%2F181N2Az85c93UtYvPPw5vaRNOrMP2pj1lksZFCuaSFh4aqvP8MKZmAmjbMCkMEtdNVDw%2B0h9pXGWEQnww99G%2FwAY6pgG%2BLQW%2B1%2BlBqA61%2F7%2Fql46Y3bKoe03BOEpThi53bWDHk0dEgSpxSPskRpGGL3pjlZkaKMOCkLv1ySBtqkqfhodFtRNv6tuJ0wSbXWF0SLZAfuTmwSeKyLc8pnQvcQa%2FQNr%2Fv%2BeaBFJTlLqbaEuNFgPZQcaI2Czbm8U4l0Lka0DSN9s6w4WoLi20eR5uwc6N2slZxuT%2BRUcL55maKrZ8SuACzTgL1IpE&X-Amz-Signature=c4b002b097297543c75a5e8fb9d77cf666c818964b9f560d5a155936fb2246f0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
