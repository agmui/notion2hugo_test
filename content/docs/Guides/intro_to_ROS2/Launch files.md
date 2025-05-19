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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD67GHMG%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T034044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID938vihLtTMTXjo6p4gYN2RDiIo2QPVFX%2B%2B%2Fpp9rBhuAiEA7PD18OnvQfH8Bf0WrPinTWix9TyL8bNrsnJC7RJ4XXIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0kuSLX4xgv66uv4yrcA24dJ0x7bbSNlUHIy%2BB6zlwTDYzNNf6lM%2FjLG24AWrJYeBpnnn%2F3%2F%2FpzPtEhGbgNZSoa8FNsou9YzUvBxBvfyULPBjf3VtUQqn6p3WcU2ixnSYqV%2BwqYOcyAUgtW9HtT76eD19JfKERNIbSZlEYpSQWrgTprqVrtMOSJU%2BB4NOFfRObJpBbFO%2FCZau913Dy%2BVYjIF1GHM%2BVifA8kd5D3fURxs%2FF69eTW7OeWSudd9CSakNZ5NJmvIFc0ImGexoIaf8sdbkYxACFww7N0rhz9Lo4LjMXA68q1dfIMS98zPavZxItbDQHI53KPv%2FnwG%2BQTxdUTZip19CdRVPu3FbNq7rFiX03vjAzDtmnx%2FQpshVN3Cz0%2Fyky6XR%2FwWoAeWDics1d1kMvno7JWuM1o%2BoedAb15eoMX61VNGNuy9iyRpkFgSSWQbNJf2WhJUHQv%2Bw21c%2BknwiWHvsxlYCJuvpvoD%2B153brXn8NCXEfF9i1ZUBgn5oqe1DmGMUkzmQsgJ1pj%2F8996zshfAhuKFp2j6E%2BT9q79gKd6LQ%2BhWnfD5ZOf3MlMD68tmItNcA0erhcTIctMQPx4%2F46gP3DSHmWZkUccqBdTD2BWBrha4vMbDTvToIaNTESahlIY3xWOEtqMNfsqcEGOqUBE7rLAozKGF67NDwv4dRIyStTxXY%2F%2BWRiOPB8fJEMKrgK%2FfWDXDRawUssEE0ja%2FIOjgm2rbGBI6VlkYzDNmUh9dOwEa0e6Re1NhdsRU5eBPdGa%2BJu1Rj5scxAb7seSeIOH3EBlgfrR7E4w8SY4UVSyVP2hFmAq7eP2hVK3waq8L9hlBRSG0hukYXzZnJ0zIW6%2BSnZ7x3o3ci21GtMwSEhMfPM%2BxeM&X-Amz-Signature=28e206ad03cb1049800c05f4eb75e8ad1aa06a14145259812bae0351958ef181&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD67GHMG%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T034044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID938vihLtTMTXjo6p4gYN2RDiIo2QPVFX%2B%2B%2Fpp9rBhuAiEA7PD18OnvQfH8Bf0WrPinTWix9TyL8bNrsnJC7RJ4XXIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0kuSLX4xgv66uv4yrcA24dJ0x7bbSNlUHIy%2BB6zlwTDYzNNf6lM%2FjLG24AWrJYeBpnnn%2F3%2F%2FpzPtEhGbgNZSoa8FNsou9YzUvBxBvfyULPBjf3VtUQqn6p3WcU2ixnSYqV%2BwqYOcyAUgtW9HtT76eD19JfKERNIbSZlEYpSQWrgTprqVrtMOSJU%2BB4NOFfRObJpBbFO%2FCZau913Dy%2BVYjIF1GHM%2BVifA8kd5D3fURxs%2FF69eTW7OeWSudd9CSakNZ5NJmvIFc0ImGexoIaf8sdbkYxACFww7N0rhz9Lo4LjMXA68q1dfIMS98zPavZxItbDQHI53KPv%2FnwG%2BQTxdUTZip19CdRVPu3FbNq7rFiX03vjAzDtmnx%2FQpshVN3Cz0%2Fyky6XR%2FwWoAeWDics1d1kMvno7JWuM1o%2BoedAb15eoMX61VNGNuy9iyRpkFgSSWQbNJf2WhJUHQv%2Bw21c%2BknwiWHvsxlYCJuvpvoD%2B153brXn8NCXEfF9i1ZUBgn5oqe1DmGMUkzmQsgJ1pj%2F8996zshfAhuKFp2j6E%2BT9q79gKd6LQ%2BhWnfD5ZOf3MlMD68tmItNcA0erhcTIctMQPx4%2F46gP3DSHmWZkUccqBdTD2BWBrha4vMbDTvToIaNTESahlIY3xWOEtqMNfsqcEGOqUBE7rLAozKGF67NDwv4dRIyStTxXY%2F%2BWRiOPB8fJEMKrgK%2FfWDXDRawUssEE0ja%2FIOjgm2rbGBI6VlkYzDNmUh9dOwEa0e6Re1NhdsRU5eBPdGa%2BJu1Rj5scxAb7seSeIOH3EBlgfrR7E4w8SY4UVSyVP2hFmAq7eP2hVK3waq8L9hlBRSG0hukYXzZnJ0zIW6%2BSnZ7x3o3ci21GtMwSEhMfPM%2BxeM&X-Amz-Signature=1447a3b1ce590fd26784bba0d2578a52fc1b813f05ac3f00f326dea6344dbfb5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD67GHMG%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T034044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID938vihLtTMTXjo6p4gYN2RDiIo2QPVFX%2B%2B%2Fpp9rBhuAiEA7PD18OnvQfH8Bf0WrPinTWix9TyL8bNrsnJC7RJ4XXIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0kuSLX4xgv66uv4yrcA24dJ0x7bbSNlUHIy%2BB6zlwTDYzNNf6lM%2FjLG24AWrJYeBpnnn%2F3%2F%2FpzPtEhGbgNZSoa8FNsou9YzUvBxBvfyULPBjf3VtUQqn6p3WcU2ixnSYqV%2BwqYOcyAUgtW9HtT76eD19JfKERNIbSZlEYpSQWrgTprqVrtMOSJU%2BB4NOFfRObJpBbFO%2FCZau913Dy%2BVYjIF1GHM%2BVifA8kd5D3fURxs%2FF69eTW7OeWSudd9CSakNZ5NJmvIFc0ImGexoIaf8sdbkYxACFww7N0rhz9Lo4LjMXA68q1dfIMS98zPavZxItbDQHI53KPv%2FnwG%2BQTxdUTZip19CdRVPu3FbNq7rFiX03vjAzDtmnx%2FQpshVN3Cz0%2Fyky6XR%2FwWoAeWDics1d1kMvno7JWuM1o%2BoedAb15eoMX61VNGNuy9iyRpkFgSSWQbNJf2WhJUHQv%2Bw21c%2BknwiWHvsxlYCJuvpvoD%2B153brXn8NCXEfF9i1ZUBgn5oqe1DmGMUkzmQsgJ1pj%2F8996zshfAhuKFp2j6E%2BT9q79gKd6LQ%2BhWnfD5ZOf3MlMD68tmItNcA0erhcTIctMQPx4%2F46gP3DSHmWZkUccqBdTD2BWBrha4vMbDTvToIaNTESahlIY3xWOEtqMNfsqcEGOqUBE7rLAozKGF67NDwv4dRIyStTxXY%2F%2BWRiOPB8fJEMKrgK%2FfWDXDRawUssEE0ja%2FIOjgm2rbGBI6VlkYzDNmUh9dOwEa0e6Re1NhdsRU5eBPdGa%2BJu1Rj5scxAb7seSeIOH3EBlgfrR7E4w8SY4UVSyVP2hFmAq7eP2hVK3waq8L9hlBRSG0hukYXzZnJ0zIW6%2BSnZ7x3o3ci21GtMwSEhMfPM%2BxeM&X-Amz-Signature=2e3181f1ca4213f439b0002867ce4b5a7d9439572482c820dbad57d1ed687978&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
