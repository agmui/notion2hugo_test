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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z7R3LXG%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0mVUDGW9LhgJQFGGRV1Ge3nYSNrvfvjhV%2FQD%2F6%2FFDvAIhAOndZsqjPX%2BC8Fh2dZX53uZOANDRMU9dqRlEVR24lYEnKv8DCEsQABoMNjM3NDIzMTgzODA1IgyiDwSAP%2BIgFMVSC%2BAq3AMl4ia1nVRjUhJN3OLI3kYEhB6GqCXtc%2Ba1x2vq8fBGxmvV3yGhu6wnIo78x7XtnG3F3WnKzygA604rVfC9evvLiEanwjGD9rMOywUIOSZ%2FjSrD4%2BVq1kjGjrWgN6a%2F1MMERNRjmBvee0DXvaSIe6MarvA4%2FDIs%2B%2BI0zGjNtAnsqh7nr91X8IKei0ugLR1BthPVwZVP%2FehX5o1OAD0MQzv%2BcbDKXVzBlTxk3oaZo7lD0dHcQcJXqScM1SyQauUJGi%2BoeqsOrbiL1KMiBOWxsGYQiGplL0yNpQseO2c4CrvpN%2Fr%2BhIamWkz6Eb4jqtNO4DmpspbNaUx6qvQCq%2BVsSKyhTSBO%2FaTV%2FFE0Xxwm3rZep4rcJ%2BImQr6M316lV6RH4tQtGb2HJtzwri9qNHqY3jw5AGEPW060n14aB%2FMT87muwEdMdavBDhz2SG0g2ySZQ5WsX4zTsEF6mbUVHepZL2Oxdyfi6HMe8VxIdxVxuCF%2FyV39liXmOrO8b33DvA9r%2FGu1GXHLhOIKHnL3C7dU0MGLfa9Orctt6%2BhvJimYVO2NAwrCahvfR6GBvCAjre3d5Z%2FxR6EE3o35aaRyT%2B9vgt4K3IvBqxbrULb3HUdVVXdZi1wQc1kfIoozCDwhJzCX0NLBBjqkAVG3RrK%2Bhr21etO5o5BJC8crqcSDEQSmE2d%2BBUTy232dYbtTliOAaWripJC9Baw3QGmk2p0AKa4DADeScTThAjH5KkMelbUYTs69%2BJtEPUZzTD5lkTE8HIoQ0jOxO4aSOYpUeFtXOqTCnwmoDgsQOHIY6%2FfqEnNRNBRK4v3xSOTIAOCW1NoJo8c1eLrJhcfgf5DW7RFNcMOImsvOQR7AObW77Aog&X-Amz-Signature=924fe5c7467aa8ae7958ea068bd02ddd4c904144f82a7a5c3f4f297af99662df&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z7R3LXG%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0mVUDGW9LhgJQFGGRV1Ge3nYSNrvfvjhV%2FQD%2F6%2FFDvAIhAOndZsqjPX%2BC8Fh2dZX53uZOANDRMU9dqRlEVR24lYEnKv8DCEsQABoMNjM3NDIzMTgzODA1IgyiDwSAP%2BIgFMVSC%2BAq3AMl4ia1nVRjUhJN3OLI3kYEhB6GqCXtc%2Ba1x2vq8fBGxmvV3yGhu6wnIo78x7XtnG3F3WnKzygA604rVfC9evvLiEanwjGD9rMOywUIOSZ%2FjSrD4%2BVq1kjGjrWgN6a%2F1MMERNRjmBvee0DXvaSIe6MarvA4%2FDIs%2B%2BI0zGjNtAnsqh7nr91X8IKei0ugLR1BthPVwZVP%2FehX5o1OAD0MQzv%2BcbDKXVzBlTxk3oaZo7lD0dHcQcJXqScM1SyQauUJGi%2BoeqsOrbiL1KMiBOWxsGYQiGplL0yNpQseO2c4CrvpN%2Fr%2BhIamWkz6Eb4jqtNO4DmpspbNaUx6qvQCq%2BVsSKyhTSBO%2FaTV%2FFE0Xxwm3rZep4rcJ%2BImQr6M316lV6RH4tQtGb2HJtzwri9qNHqY3jw5AGEPW060n14aB%2FMT87muwEdMdavBDhz2SG0g2ySZQ5WsX4zTsEF6mbUVHepZL2Oxdyfi6HMe8VxIdxVxuCF%2FyV39liXmOrO8b33DvA9r%2FGu1GXHLhOIKHnL3C7dU0MGLfa9Orctt6%2BhvJimYVO2NAwrCahvfR6GBvCAjre3d5Z%2FxR6EE3o35aaRyT%2B9vgt4K3IvBqxbrULb3HUdVVXdZi1wQc1kfIoozCDwhJzCX0NLBBjqkAVG3RrK%2Bhr21etO5o5BJC8crqcSDEQSmE2d%2BBUTy232dYbtTliOAaWripJC9Baw3QGmk2p0AKa4DADeScTThAjH5KkMelbUYTs69%2BJtEPUZzTD5lkTE8HIoQ0jOxO4aSOYpUeFtXOqTCnwmoDgsQOHIY6%2FfqEnNRNBRK4v3xSOTIAOCW1NoJo8c1eLrJhcfgf5DW7RFNcMOImsvOQR7AObW77Aog&X-Amz-Signature=134d96abb358f513d8ec56a8a30aff83e15a95600a7992d2717ad262d281f73c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z7R3LXG%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0mVUDGW9LhgJQFGGRV1Ge3nYSNrvfvjhV%2FQD%2F6%2FFDvAIhAOndZsqjPX%2BC8Fh2dZX53uZOANDRMU9dqRlEVR24lYEnKv8DCEsQABoMNjM3NDIzMTgzODA1IgyiDwSAP%2BIgFMVSC%2BAq3AMl4ia1nVRjUhJN3OLI3kYEhB6GqCXtc%2Ba1x2vq8fBGxmvV3yGhu6wnIo78x7XtnG3F3WnKzygA604rVfC9evvLiEanwjGD9rMOywUIOSZ%2FjSrD4%2BVq1kjGjrWgN6a%2F1MMERNRjmBvee0DXvaSIe6MarvA4%2FDIs%2B%2BI0zGjNtAnsqh7nr91X8IKei0ugLR1BthPVwZVP%2FehX5o1OAD0MQzv%2BcbDKXVzBlTxk3oaZo7lD0dHcQcJXqScM1SyQauUJGi%2BoeqsOrbiL1KMiBOWxsGYQiGplL0yNpQseO2c4CrvpN%2Fr%2BhIamWkz6Eb4jqtNO4DmpspbNaUx6qvQCq%2BVsSKyhTSBO%2FaTV%2FFE0Xxwm3rZep4rcJ%2BImQr6M316lV6RH4tQtGb2HJtzwri9qNHqY3jw5AGEPW060n14aB%2FMT87muwEdMdavBDhz2SG0g2ySZQ5WsX4zTsEF6mbUVHepZL2Oxdyfi6HMe8VxIdxVxuCF%2FyV39liXmOrO8b33DvA9r%2FGu1GXHLhOIKHnL3C7dU0MGLfa9Orctt6%2BhvJimYVO2NAwrCahvfR6GBvCAjre3d5Z%2FxR6EE3o35aaRyT%2B9vgt4K3IvBqxbrULb3HUdVVXdZi1wQc1kfIoozCDwhJzCX0NLBBjqkAVG3RrK%2Bhr21etO5o5BJC8crqcSDEQSmE2d%2BBUTy232dYbtTliOAaWripJC9Baw3QGmk2p0AKa4DADeScTThAjH5KkMelbUYTs69%2BJtEPUZzTD5lkTE8HIoQ0jOxO4aSOYpUeFtXOqTCnwmoDgsQOHIY6%2FfqEnNRNBRK4v3xSOTIAOCW1NoJo8c1eLrJhcfgf5DW7RFNcMOImsvOQR7AObW77Aog&X-Amz-Signature=f1a6991070ac73b12f2e8a7046308ca759f4913c24c0c2c8890a08d5f4c68d21&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
