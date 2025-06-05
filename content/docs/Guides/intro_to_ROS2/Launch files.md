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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JKUSWZB%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T220353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIH%2FFAuboRcalxXl2QGWCgnHpXNVQsFTkRZ1dbInDNNJBAiAcoZPhf0%2BCQlULE8UncM%2FJ4Kzqfl5clgkq7IGxBLNgPCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM7cwUpwYiqsnqtzgVKtwD7xIrUqXlcNQFQwq7kIZPmuniZ5k4zhRlDgydygLfEOq%2BWoW1dWROH8oCJ4UXgGD%2By%2FrtAPg7KA562ezTWsSm2XpnTV1k%2BVUl%2BMvXMSCtclAcddTQkpB%2BC5hJu60FKLbNlJ9AWkWOXAH7EV9lr3OhmWC66t6OST%2FSKeL7sHHKg%2FL0UQqX2A8aiT%2Bhw3Sbl5IVbjBv70pKJRVW8XsuTZ0L%2BaXE506v%2FDPRoaT6fDYp%2FFZshW3Q2bQVFmvClNtSenODag0W13QWyr8iI%2BVWusSiyaQg4yqDqVJ%2BuO3FRQbmXTOMCTkiGF5I3r9fitKPMRDznEX3zhicIrYTw8re37eevk4kV12S2C9HTKHjZyW0T35xhDBBjJZ1KQb1FqNG25DpYomqhU2TEJq8F7nOQK2x%2FkCbVRhce0H1QNzB77JOdFJAExy5Hf8iwv02bCi1H%2B6Lb5NPNkaoC4Tqlir7OzMIQb8%2Fo7YRurV%2BmnQe0qEbs0QDi1xHJbJtSH4yOQgadoDGh6I9MQvdWYBqwczPyjK6h1SEYyQlVHjWLeJinQS7OmJTZok4dRFa6%2BU%2BMqeTm14JBmU%2FfA7sx6t2eS5XQ%2Btv0npPtdaLKL3xsiuNfZ4fVcpqHfxsyvVoRsVoaeQwntiHwgY6pgGggAPDwKdQfC8wlvLE%2B1fM%2FqSVZ7miKrgBmfltM9eBgyWdO8QYSfboyGTk2rpz5FBMlFnq8rJ42c0nHNr8fhX912SLV3SxZGPk%2BiIpp8YFmbHrkz5%2BqaoL81bH9qin34o90ZoY1tje05Zx0L0M6p0y7IjkPkxNt9UY7ofH2iOXSyb50qcaR1qYaZ0dxR%2BonFpZ0HE4kiWs9RSuIEOwoAGXBzvWNf79&X-Amz-Signature=d63554e02881ff8d9ddb4b17fbd1197ba2e36478e5acec1e51adbb44708d15e7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JKUSWZB%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T220353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIH%2FFAuboRcalxXl2QGWCgnHpXNVQsFTkRZ1dbInDNNJBAiAcoZPhf0%2BCQlULE8UncM%2FJ4Kzqfl5clgkq7IGxBLNgPCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM7cwUpwYiqsnqtzgVKtwD7xIrUqXlcNQFQwq7kIZPmuniZ5k4zhRlDgydygLfEOq%2BWoW1dWROH8oCJ4UXgGD%2By%2FrtAPg7KA562ezTWsSm2XpnTV1k%2BVUl%2BMvXMSCtclAcddTQkpB%2BC5hJu60FKLbNlJ9AWkWOXAH7EV9lr3OhmWC66t6OST%2FSKeL7sHHKg%2FL0UQqX2A8aiT%2Bhw3Sbl5IVbjBv70pKJRVW8XsuTZ0L%2BaXE506v%2FDPRoaT6fDYp%2FFZshW3Q2bQVFmvClNtSenODag0W13QWyr8iI%2BVWusSiyaQg4yqDqVJ%2BuO3FRQbmXTOMCTkiGF5I3r9fitKPMRDznEX3zhicIrYTw8re37eevk4kV12S2C9HTKHjZyW0T35xhDBBjJZ1KQb1FqNG25DpYomqhU2TEJq8F7nOQK2x%2FkCbVRhce0H1QNzB77JOdFJAExy5Hf8iwv02bCi1H%2B6Lb5NPNkaoC4Tqlir7OzMIQb8%2Fo7YRurV%2BmnQe0qEbs0QDi1xHJbJtSH4yOQgadoDGh6I9MQvdWYBqwczPyjK6h1SEYyQlVHjWLeJinQS7OmJTZok4dRFa6%2BU%2BMqeTm14JBmU%2FfA7sx6t2eS5XQ%2Btv0npPtdaLKL3xsiuNfZ4fVcpqHfxsyvVoRsVoaeQwntiHwgY6pgGggAPDwKdQfC8wlvLE%2B1fM%2FqSVZ7miKrgBmfltM9eBgyWdO8QYSfboyGTk2rpz5FBMlFnq8rJ42c0nHNr8fhX912SLV3SxZGPk%2BiIpp8YFmbHrkz5%2BqaoL81bH9qin34o90ZoY1tje05Zx0L0M6p0y7IjkPkxNt9UY7ofH2iOXSyb50qcaR1qYaZ0dxR%2BonFpZ0HE4kiWs9RSuIEOwoAGXBzvWNf79&X-Amz-Signature=ed02a7e1dd2090c0e7b33bd5764520f2603becdc8a80e07e328a4e63e1865f7a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JKUSWZB%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T220353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIH%2FFAuboRcalxXl2QGWCgnHpXNVQsFTkRZ1dbInDNNJBAiAcoZPhf0%2BCQlULE8UncM%2FJ4Kzqfl5clgkq7IGxBLNgPCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM7cwUpwYiqsnqtzgVKtwD7xIrUqXlcNQFQwq7kIZPmuniZ5k4zhRlDgydygLfEOq%2BWoW1dWROH8oCJ4UXgGD%2By%2FrtAPg7KA562ezTWsSm2XpnTV1k%2BVUl%2BMvXMSCtclAcddTQkpB%2BC5hJu60FKLbNlJ9AWkWOXAH7EV9lr3OhmWC66t6OST%2FSKeL7sHHKg%2FL0UQqX2A8aiT%2Bhw3Sbl5IVbjBv70pKJRVW8XsuTZ0L%2BaXE506v%2FDPRoaT6fDYp%2FFZshW3Q2bQVFmvClNtSenODag0W13QWyr8iI%2BVWusSiyaQg4yqDqVJ%2BuO3FRQbmXTOMCTkiGF5I3r9fitKPMRDznEX3zhicIrYTw8re37eevk4kV12S2C9HTKHjZyW0T35xhDBBjJZ1KQb1FqNG25DpYomqhU2TEJq8F7nOQK2x%2FkCbVRhce0H1QNzB77JOdFJAExy5Hf8iwv02bCi1H%2B6Lb5NPNkaoC4Tqlir7OzMIQb8%2Fo7YRurV%2BmnQe0qEbs0QDi1xHJbJtSH4yOQgadoDGh6I9MQvdWYBqwczPyjK6h1SEYyQlVHjWLeJinQS7OmJTZok4dRFa6%2BU%2BMqeTm14JBmU%2FfA7sx6t2eS5XQ%2Btv0npPtdaLKL3xsiuNfZ4fVcpqHfxsyvVoRsVoaeQwntiHwgY6pgGggAPDwKdQfC8wlvLE%2B1fM%2FqSVZ7miKrgBmfltM9eBgyWdO8QYSfboyGTk2rpz5FBMlFnq8rJ42c0nHNr8fhX912SLV3SxZGPk%2BiIpp8YFmbHrkz5%2BqaoL81bH9qin34o90ZoY1tje05Zx0L0M6p0y7IjkPkxNt9UY7ofH2iOXSyb50qcaR1qYaZ0dxR%2BonFpZ0HE4kiWs9RSuIEOwoAGXBzvWNf79&X-Amz-Signature=403bd62514b2c51cf9cfc3482efde3d512594278da153d8824ebd895ccebf4d6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
