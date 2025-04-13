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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6AOVCGQ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T220742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCAgXYCPJTXH8kg6Pz5WYt1iPhDgt9zo8hlahywN2tFcQIhAJ%2FMKDazSfHkd8Rd8ob2AB1DYsPnVARLJxOKbWft5LIYKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTAhprWWwfov2GoHwq3AMkjwcmiv%2FgN6wyqUiTHBuXyooL6%2F7wgM5gCpkjOpapCubuuUeAV1vQnycsYRX4ZdW%2FX3pb7VWuCJA4zoz%2BLizASfvuouygpbrXa4la9OIT1aioRSSJ1lOa9d5MjkLZLKhr2Q35XzbSYjS7SPmOWbbUBSjxvubdJALSd07rSIO6Q8x0oS3YnvKEIqjALHNdSfPLy4BWLZ31ezIApY6kTH0RDbiPZM3Krutxq7hSkK3bUzg2rgXRUWjXiN3zUBO%2F8hpWhJISQQGmGGuLmH5kX97gYEmafTuIfdxjYP8jY5KQ77AYugKxmqABgWGRgDnkLQhUIMPv7iMc3UGamhchMQR4NrpbkvIceLGUmin5C0k9PjJbqLbyiQpnxSWfNPBmrByCMEaVDC%2BpiS2deJbYezlMkCJw%2B8V7JJ1UdV%2FrdsOz5nT17G34xDVmkcbLqxjcYwQHDCoFBSa8zHpMVULE0mNFj922dYU72fDL8htPbiCCa4Fj5sB7JFW%2BV2A%2Bi%2BQbEXlMsjBH55vAAXfG5NuZV0P9eeWPxaIoxvrQ63e6Wnq7pd%2B5ZrgMSxYsKWvF7Kvk8r6mcPV5pO2pxLOmef3gUEXGF6lkDAjkVeUhPcMfYeNqY1FqDd4u79XLv488ijC2sPC%2FBjqkAUah7z2LCWCQI41nIrmVz0DlEh%2Fhf%2FuobmvgQazB8dsmA4YQMpgZKDxzMFr%2BKxpOLqslWFjTy9mTgWKXWloZgM%2B3OT2YlNqx6BgKtz8ZCh4bTDB5tQ2q5gifmvyRi0Zpz9O3G%2F3hZyOLzbSPPiuour9Uwe%2F07VT12pJhhgCRYc7JrevV9BFhxtbHs%2Ba8Jdsdb3rr%2FYenh8%2Fq62kOv4J0HUJMotr8&X-Amz-Signature=23d49ba521898f5c5ca80fe3ba0a5c3dcf3c17539bf398fd5111615e4b77104c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6AOVCGQ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T220742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCAgXYCPJTXH8kg6Pz5WYt1iPhDgt9zo8hlahywN2tFcQIhAJ%2FMKDazSfHkd8Rd8ob2AB1DYsPnVARLJxOKbWft5LIYKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTAhprWWwfov2GoHwq3AMkjwcmiv%2FgN6wyqUiTHBuXyooL6%2F7wgM5gCpkjOpapCubuuUeAV1vQnycsYRX4ZdW%2FX3pb7VWuCJA4zoz%2BLizASfvuouygpbrXa4la9OIT1aioRSSJ1lOa9d5MjkLZLKhr2Q35XzbSYjS7SPmOWbbUBSjxvubdJALSd07rSIO6Q8x0oS3YnvKEIqjALHNdSfPLy4BWLZ31ezIApY6kTH0RDbiPZM3Krutxq7hSkK3bUzg2rgXRUWjXiN3zUBO%2F8hpWhJISQQGmGGuLmH5kX97gYEmafTuIfdxjYP8jY5KQ77AYugKxmqABgWGRgDnkLQhUIMPv7iMc3UGamhchMQR4NrpbkvIceLGUmin5C0k9PjJbqLbyiQpnxSWfNPBmrByCMEaVDC%2BpiS2deJbYezlMkCJw%2B8V7JJ1UdV%2FrdsOz5nT17G34xDVmkcbLqxjcYwQHDCoFBSa8zHpMVULE0mNFj922dYU72fDL8htPbiCCa4Fj5sB7JFW%2BV2A%2Bi%2BQbEXlMsjBH55vAAXfG5NuZV0P9eeWPxaIoxvrQ63e6Wnq7pd%2B5ZrgMSxYsKWvF7Kvk8r6mcPV5pO2pxLOmef3gUEXGF6lkDAjkVeUhPcMfYeNqY1FqDd4u79XLv488ijC2sPC%2FBjqkAUah7z2LCWCQI41nIrmVz0DlEh%2Fhf%2FuobmvgQazB8dsmA4YQMpgZKDxzMFr%2BKxpOLqslWFjTy9mTgWKXWloZgM%2B3OT2YlNqx6BgKtz8ZCh4bTDB5tQ2q5gifmvyRi0Zpz9O3G%2F3hZyOLzbSPPiuour9Uwe%2F07VT12pJhhgCRYc7JrevV9BFhxtbHs%2Ba8Jdsdb3rr%2FYenh8%2Fq62kOv4J0HUJMotr8&X-Amz-Signature=629c16dee59ef6ed96961829c6fec128423d605bb327165b084fe3a8815b8f54&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6AOVCGQ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T220742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCAgXYCPJTXH8kg6Pz5WYt1iPhDgt9zo8hlahywN2tFcQIhAJ%2FMKDazSfHkd8Rd8ob2AB1DYsPnVARLJxOKbWft5LIYKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTAhprWWwfov2GoHwq3AMkjwcmiv%2FgN6wyqUiTHBuXyooL6%2F7wgM5gCpkjOpapCubuuUeAV1vQnycsYRX4ZdW%2FX3pb7VWuCJA4zoz%2BLizASfvuouygpbrXa4la9OIT1aioRSSJ1lOa9d5MjkLZLKhr2Q35XzbSYjS7SPmOWbbUBSjxvubdJALSd07rSIO6Q8x0oS3YnvKEIqjALHNdSfPLy4BWLZ31ezIApY6kTH0RDbiPZM3Krutxq7hSkK3bUzg2rgXRUWjXiN3zUBO%2F8hpWhJISQQGmGGuLmH5kX97gYEmafTuIfdxjYP8jY5KQ77AYugKxmqABgWGRgDnkLQhUIMPv7iMc3UGamhchMQR4NrpbkvIceLGUmin5C0k9PjJbqLbyiQpnxSWfNPBmrByCMEaVDC%2BpiS2deJbYezlMkCJw%2B8V7JJ1UdV%2FrdsOz5nT17G34xDVmkcbLqxjcYwQHDCoFBSa8zHpMVULE0mNFj922dYU72fDL8htPbiCCa4Fj5sB7JFW%2BV2A%2Bi%2BQbEXlMsjBH55vAAXfG5NuZV0P9eeWPxaIoxvrQ63e6Wnq7pd%2B5ZrgMSxYsKWvF7Kvk8r6mcPV5pO2pxLOmef3gUEXGF6lkDAjkVeUhPcMfYeNqY1FqDd4u79XLv488ijC2sPC%2FBjqkAUah7z2LCWCQI41nIrmVz0DlEh%2Fhf%2FuobmvgQazB8dsmA4YQMpgZKDxzMFr%2BKxpOLqslWFjTy9mTgWKXWloZgM%2B3OT2YlNqx6BgKtz8ZCh4bTDB5tQ2q5gifmvyRi0Zpz9O3G%2F3hZyOLzbSPPiuour9Uwe%2F07VT12pJhhgCRYc7JrevV9BFhxtbHs%2Ba8Jdsdb3rr%2FYenh8%2Fq62kOv4J0HUJMotr8&X-Amz-Signature=0721c76d84722818c55e7b69825d95d54eb4ba20e207e640b5296b4bd50608f4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
