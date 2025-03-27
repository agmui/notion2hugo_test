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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZATSKUI6%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T150909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPqBExZDT%2BUpXORRjhx8NYZXLgQcCwLlRx6sKXaweibQIgCQyoAPPmpXlW%2B1DyGk3sKR0EoK9dBGkTTRZeIha1K0sq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDMtEVZn8lBjIVJgHwCrcAxX%2FnoU7EYKtlcVS7%2FQhVS3Uch5T816s1A5yM8oQPPlFLF1nIeRakEpM4SgIU8WDwW6mol00xf33956rQF5mdT9o0a9t4n5PZLK%2FadXtQ9iZxCQc2mj7zK7kQI71QT5aYf8kTrarwy80Hw122wKIsoiG5OPx9EHY554%2Fyf2Uy%2FbbWj5Ty4LPL0Qpo9ydR4bzZJ5uAjyTITfqZ1jW30qLQkAe7uUXtGuH9IzOlK60WFZO%2BdJeAVQmG35nEi69NGfrA8tyfUQik%2Bowe54P6Di9TyelMwg7eroHeDCVO%2Bi3o8hW3vRCVpjp4PKr%2FOysPviMdYScIK6ep4ZvqUTu4IFrbtUXKljETuqSks5IRFGW3aA%2FqRfwinKBcR8qIeOJ2%2FjAW8FEzO9K3eA8LrjVVxVYjt2rp%2B1LGQSJ8%2FkkRKrHyO8PtXtm00xZqere0M6xjlTz%2FjmmTAvm7c8wDm9yVqBLvPSm2BXsUKc%2FkJeRsv5OcIHfPpiSFiMy4pK2P5s5zvX1KXGBu2v7W53V6NnsPfWJ3zm0yvXF9MWYk3cJ8jbjD3IEzkMp162HrXgqUBLGkryazcglIpTXyZ%2FjCXR4I2VThebjlGsgmZCVAkX%2BNC%2B2v%2FntJ4%2BGMnKyIfq6%2Fj%2BqMJnNlb8GOqUBrLmKAWJVBF%2Beo9bqmPzCUcTYg%2FaBPihZl8NOYy%2Bl7DrTD5Ib6tEj8gjmyOajqyTQ8I49w0lrIJpUh04L9inG2nBnktIuobpDTvBT2rElyP%2BidgTH6UDaV%2FN0sI7nKrd5wzPytjwefwOED7NrQUDzXZlYPRDF1ndVESmMn8c6kt8%2FlXGhKFjIHt8LbTxYFa3RkUAJzSjiemC9n7fkHX775NvUFcQe&X-Amz-Signature=8ad14b45bf9885cdd4da5dbb2ef6b13c69ff7cafa938316a405ac6091153242c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZATSKUI6%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T150909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPqBExZDT%2BUpXORRjhx8NYZXLgQcCwLlRx6sKXaweibQIgCQyoAPPmpXlW%2B1DyGk3sKR0EoK9dBGkTTRZeIha1K0sq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDMtEVZn8lBjIVJgHwCrcAxX%2FnoU7EYKtlcVS7%2FQhVS3Uch5T816s1A5yM8oQPPlFLF1nIeRakEpM4SgIU8WDwW6mol00xf33956rQF5mdT9o0a9t4n5PZLK%2FadXtQ9iZxCQc2mj7zK7kQI71QT5aYf8kTrarwy80Hw122wKIsoiG5OPx9EHY554%2Fyf2Uy%2FbbWj5Ty4LPL0Qpo9ydR4bzZJ5uAjyTITfqZ1jW30qLQkAe7uUXtGuH9IzOlK60WFZO%2BdJeAVQmG35nEi69NGfrA8tyfUQik%2Bowe54P6Di9TyelMwg7eroHeDCVO%2Bi3o8hW3vRCVpjp4PKr%2FOysPviMdYScIK6ep4ZvqUTu4IFrbtUXKljETuqSks5IRFGW3aA%2FqRfwinKBcR8qIeOJ2%2FjAW8FEzO9K3eA8LrjVVxVYjt2rp%2B1LGQSJ8%2FkkRKrHyO8PtXtm00xZqere0M6xjlTz%2FjmmTAvm7c8wDm9yVqBLvPSm2BXsUKc%2FkJeRsv5OcIHfPpiSFiMy4pK2P5s5zvX1KXGBu2v7W53V6NnsPfWJ3zm0yvXF9MWYk3cJ8jbjD3IEzkMp162HrXgqUBLGkryazcglIpTXyZ%2FjCXR4I2VThebjlGsgmZCVAkX%2BNC%2B2v%2FntJ4%2BGMnKyIfq6%2Fj%2BqMJnNlb8GOqUBrLmKAWJVBF%2Beo9bqmPzCUcTYg%2FaBPihZl8NOYy%2Bl7DrTD5Ib6tEj8gjmyOajqyTQ8I49w0lrIJpUh04L9inG2nBnktIuobpDTvBT2rElyP%2BidgTH6UDaV%2FN0sI7nKrd5wzPytjwefwOED7NrQUDzXZlYPRDF1ndVESmMn8c6kt8%2FlXGhKFjIHt8LbTxYFa3RkUAJzSjiemC9n7fkHX775NvUFcQe&X-Amz-Signature=575ea0c8528d96bf19669d5d220ce9efc524ad759a6830e52d7faf3853c034ef&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZATSKUI6%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T150909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPqBExZDT%2BUpXORRjhx8NYZXLgQcCwLlRx6sKXaweibQIgCQyoAPPmpXlW%2B1DyGk3sKR0EoK9dBGkTTRZeIha1K0sq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDMtEVZn8lBjIVJgHwCrcAxX%2FnoU7EYKtlcVS7%2FQhVS3Uch5T816s1A5yM8oQPPlFLF1nIeRakEpM4SgIU8WDwW6mol00xf33956rQF5mdT9o0a9t4n5PZLK%2FadXtQ9iZxCQc2mj7zK7kQI71QT5aYf8kTrarwy80Hw122wKIsoiG5OPx9EHY554%2Fyf2Uy%2FbbWj5Ty4LPL0Qpo9ydR4bzZJ5uAjyTITfqZ1jW30qLQkAe7uUXtGuH9IzOlK60WFZO%2BdJeAVQmG35nEi69NGfrA8tyfUQik%2Bowe54P6Di9TyelMwg7eroHeDCVO%2Bi3o8hW3vRCVpjp4PKr%2FOysPviMdYScIK6ep4ZvqUTu4IFrbtUXKljETuqSks5IRFGW3aA%2FqRfwinKBcR8qIeOJ2%2FjAW8FEzO9K3eA8LrjVVxVYjt2rp%2B1LGQSJ8%2FkkRKrHyO8PtXtm00xZqere0M6xjlTz%2FjmmTAvm7c8wDm9yVqBLvPSm2BXsUKc%2FkJeRsv5OcIHfPpiSFiMy4pK2P5s5zvX1KXGBu2v7W53V6NnsPfWJ3zm0yvXF9MWYk3cJ8jbjD3IEzkMp162HrXgqUBLGkryazcglIpTXyZ%2FjCXR4I2VThebjlGsgmZCVAkX%2BNC%2B2v%2FntJ4%2BGMnKyIfq6%2Fj%2BqMJnNlb8GOqUBrLmKAWJVBF%2Beo9bqmPzCUcTYg%2FaBPihZl8NOYy%2Bl7DrTD5Ib6tEj8gjmyOajqyTQ8I49w0lrIJpUh04L9inG2nBnktIuobpDTvBT2rElyP%2BidgTH6UDaV%2FN0sI7nKrd5wzPytjwefwOED7NrQUDzXZlYPRDF1ndVESmMn8c6kt8%2FlXGhKFjIHt8LbTxYFa3RkUAJzSjiemC9n7fkHX775NvUFcQe&X-Amz-Signature=954d8c9ae5f44f452285d6f2634f26ad5b93078a0f332d2616ef6dab67256cfe&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
