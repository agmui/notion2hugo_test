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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHSWDSEO%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T121400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGTgR2UpI1U8pc7YUInRPO406LjDUQkQDrPVc9ept54LAiAlH5AzwbU6TzSS8VPCt1x%2B8mHQ5DjV8%2Fyx6bSPtEmDgir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMcUK1F38WOeM0TbSXKtwD71%2Bihwy78U8A%2FWH1PKa7UgRy0q2Hn2LJ%2Fd%2FmbbyFTXZPanCP2%2FavqzogoeCvmKRgQc1FsXmYQ2pJ5UUMYQ7G1Ua6YVUcLr1C1AujSupvNeHZSyGegzc%2BJfK%2BDgooRbEFR12hMsl%2BSo3VIb3bNxNnkNYWcMuIofjDMLUICVxV0I3mV%2BYwHhmGkHn6ci2t2MbFO5S16nbIkpw96mWxrphzSogetSUcJG6OfO2BBNXDsiIq1q3kDYi%2BgAIFktpq3pzxC%2BSwhOn01OqDahqEURBwCc0mWuFa54Y9h6XjFWtv5fyUoE32et%2FmdVQV%2B3QvJub3RtXRtH5250%2B%2Bm0j6ANJc%2FE%2BO9jcEP1bOQU7bhPn2xYGuf%2BhlQTKQKUwY1RddqRat4XBEo09pfxJpTFG1Xmjpa9p6gqAORXfpLv%2FHMWdjPcwSHAMJQzzAPg%2Bm5EWszRIEaKH1G0XfCBgGMrVyNLJ%2FL5UDboSXiHi9qqmAqy8pHqG321FTFsB4T5EK1yOFQ5ldAGIPuCOmbIYTTh3nkg8aB97xrfhHGbGgsQKa9V%2B0xbZU4BduPCXi%2BhMHnmbMqMjspaSaM1ENFNcQm9OyYyvPJ%2Bp5gLDyKMpDQzk82cQLZM7IISP%2FXChrNc6ZP8cwv6mrvgY6pgHavCDUAAC%2FI%2Fsq9G82hBCdc9mHPEM%2BoWG56Mi6BW9Ggmph95ngBAKNKNI0nQ9EwPQjiTN1VXHhGb8t7c4kgFhLe4P40ZbSfEbmPsnp1H0AfGHY%2FqCqpyDAnA7NAU0kD5vS7SxRXpAhtoQxDHsL4D6Png3lkwYjeWCMFkQmnuGKsa9WK0YKSAFZvpjqx31vMaVA94E9h6TjUdqACvS17BxgfRi31qrc&X-Amz-Signature=cfca61209dd306d72289488ea778c9ee8aba58bcb54a139139c8cb4c1a012f7c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHSWDSEO%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T121400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGTgR2UpI1U8pc7YUInRPO406LjDUQkQDrPVc9ept54LAiAlH5AzwbU6TzSS8VPCt1x%2B8mHQ5DjV8%2Fyx6bSPtEmDgir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMcUK1F38WOeM0TbSXKtwD71%2Bihwy78U8A%2FWH1PKa7UgRy0q2Hn2LJ%2Fd%2FmbbyFTXZPanCP2%2FavqzogoeCvmKRgQc1FsXmYQ2pJ5UUMYQ7G1Ua6YVUcLr1C1AujSupvNeHZSyGegzc%2BJfK%2BDgooRbEFR12hMsl%2BSo3VIb3bNxNnkNYWcMuIofjDMLUICVxV0I3mV%2BYwHhmGkHn6ci2t2MbFO5S16nbIkpw96mWxrphzSogetSUcJG6OfO2BBNXDsiIq1q3kDYi%2BgAIFktpq3pzxC%2BSwhOn01OqDahqEURBwCc0mWuFa54Y9h6XjFWtv5fyUoE32et%2FmdVQV%2B3QvJub3RtXRtH5250%2B%2Bm0j6ANJc%2FE%2BO9jcEP1bOQU7bhPn2xYGuf%2BhlQTKQKUwY1RddqRat4XBEo09pfxJpTFG1Xmjpa9p6gqAORXfpLv%2FHMWdjPcwSHAMJQzzAPg%2Bm5EWszRIEaKH1G0XfCBgGMrVyNLJ%2FL5UDboSXiHi9qqmAqy8pHqG321FTFsB4T5EK1yOFQ5ldAGIPuCOmbIYTTh3nkg8aB97xrfhHGbGgsQKa9V%2B0xbZU4BduPCXi%2BhMHnmbMqMjspaSaM1ENFNcQm9OyYyvPJ%2Bp5gLDyKMpDQzk82cQLZM7IISP%2FXChrNc6ZP8cwv6mrvgY6pgHavCDUAAC%2FI%2Fsq9G82hBCdc9mHPEM%2BoWG56Mi6BW9Ggmph95ngBAKNKNI0nQ9EwPQjiTN1VXHhGb8t7c4kgFhLe4P40ZbSfEbmPsnp1H0AfGHY%2FqCqpyDAnA7NAU0kD5vS7SxRXpAhtoQxDHsL4D6Png3lkwYjeWCMFkQmnuGKsa9WK0YKSAFZvpjqx31vMaVA94E9h6TjUdqACvS17BxgfRi31qrc&X-Amz-Signature=59e5ce9e8eb90496d7d7b6c188ad1b950d98486d9df3f669774320dc6d385bdb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHSWDSEO%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T121400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGTgR2UpI1U8pc7YUInRPO406LjDUQkQDrPVc9ept54LAiAlH5AzwbU6TzSS8VPCt1x%2B8mHQ5DjV8%2Fyx6bSPtEmDgir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMcUK1F38WOeM0TbSXKtwD71%2Bihwy78U8A%2FWH1PKa7UgRy0q2Hn2LJ%2Fd%2FmbbyFTXZPanCP2%2FavqzogoeCvmKRgQc1FsXmYQ2pJ5UUMYQ7G1Ua6YVUcLr1C1AujSupvNeHZSyGegzc%2BJfK%2BDgooRbEFR12hMsl%2BSo3VIb3bNxNnkNYWcMuIofjDMLUICVxV0I3mV%2BYwHhmGkHn6ci2t2MbFO5S16nbIkpw96mWxrphzSogetSUcJG6OfO2BBNXDsiIq1q3kDYi%2BgAIFktpq3pzxC%2BSwhOn01OqDahqEURBwCc0mWuFa54Y9h6XjFWtv5fyUoE32et%2FmdVQV%2B3QvJub3RtXRtH5250%2B%2Bm0j6ANJc%2FE%2BO9jcEP1bOQU7bhPn2xYGuf%2BhlQTKQKUwY1RddqRat4XBEo09pfxJpTFG1Xmjpa9p6gqAORXfpLv%2FHMWdjPcwSHAMJQzzAPg%2Bm5EWszRIEaKH1G0XfCBgGMrVyNLJ%2FL5UDboSXiHi9qqmAqy8pHqG321FTFsB4T5EK1yOFQ5ldAGIPuCOmbIYTTh3nkg8aB97xrfhHGbGgsQKa9V%2B0xbZU4BduPCXi%2BhMHnmbMqMjspaSaM1ENFNcQm9OyYyvPJ%2Bp5gLDyKMpDQzk82cQLZM7IISP%2FXChrNc6ZP8cwv6mrvgY6pgHavCDUAAC%2FI%2Fsq9G82hBCdc9mHPEM%2BoWG56Mi6BW9Ggmph95ngBAKNKNI0nQ9EwPQjiTN1VXHhGb8t7c4kgFhLe4P40ZbSfEbmPsnp1H0AfGHY%2FqCqpyDAnA7NAU0kD5vS7SxRXpAhtoQxDHsL4D6Png3lkwYjeWCMFkQmnuGKsa9WK0YKSAFZvpjqx31vMaVA94E9h6TjUdqACvS17BxgfRi31qrc&X-Amz-Signature=06c409789143e6172ad42a68709c2e88da2d54f2193d2431b1f9fbcc87ae0622&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
