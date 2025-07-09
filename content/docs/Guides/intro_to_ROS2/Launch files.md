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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466354DAUZG%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T051502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0Xsvb8s6g2X0pT8I5IW4%2FJdRY%2FSoSCud8sjSqSXrPoAiAMSmTV4PNOPyaO2TbpTcV%2FeeDZENaigTz4wFKpOCoq%2BCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5X5Dg%2FvO793IjOefKtwDMowdO0oBaCUjn8uQnZtDRQmIODzx5uLx3uPJgny%2B25soA0nMUGVn1vvVipt169SQ5lTHtJwAJHxxakIPf%2FnOH8a1nkWnYXpglgMwbzhzoo6Oq%2Bpz1fuVA6n5P6pFz6Aa4h9uUVBR3ycN6DilYpShduXvj9OZOqtBUJlLd7R%2FaP7SUlfIetCx3DYyJ5y4vggLRTwzjjflgWHtZHzyLYLI%2BAFSufgoSPLf404rq0DxjEaogvth8zmpe%2Bms9SSB%2FPbqNFCcOLeq0AT%2FBwqWwmdksFO1fac45JIk9%2BIFjrSglVgHlUAPd6QqrTY4VKOAsfnkAvYyaGbOd%2BFqAYMXjtn16%2BKeM4mC25iSjlvifQ%2B9UkLkP6QdXF%2BIoEyo5zp747PuUDxGvDe2EhOj4BejNdnS4kpg755B0NGLfwZdAMLxAPZm0xGjvxMfWAgfpdaifzmyzhW%2BXYL2pFNNuAMF%2FLr2rOD95xmcAV4%2FBT1Sv9%2B4bHAO8aGs1PmiAoI0Pj3Z5wnlmdV%2BY6R0D%2B2mAsRwKNsOmhxX3eP0mIYgp1dj%2BUWdRPXCqjtAABP904WKVElrlLDHsgzwJrc8kpjSZjiPuCm9OBbKCzNXWmbtftmE8hUz%2BvxrR2YLWyBamWZrRYEwhcu3wwY6pgHMGpvgore9S89CrNWK%2F3YPtoqvrp3UYLJOTPoRe3%2BbIg3hLgFFCnoUFdtzqgr0tE0Ced55EX1%2BEojropigmSBpChgHAWHRsOf16JBcHM3%2BjH8J4NiIGeytOH91AILybOD67XJcQIlJxR1h6M54zIEHFaBn%2BXkdm%2FCeDQG4FTeX%2FG19bje0pRss9g96L6u0zps21%2FqlWWQtsIIWJoQQg%2F%2BEQPwINhST&X-Amz-Signature=cb24e8f9c08029a45dcc833394911fa76b99f0767d1024e2d144e3a6aa2acc17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466354DAUZG%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T051502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0Xsvb8s6g2X0pT8I5IW4%2FJdRY%2FSoSCud8sjSqSXrPoAiAMSmTV4PNOPyaO2TbpTcV%2FeeDZENaigTz4wFKpOCoq%2BCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5X5Dg%2FvO793IjOefKtwDMowdO0oBaCUjn8uQnZtDRQmIODzx5uLx3uPJgny%2B25soA0nMUGVn1vvVipt169SQ5lTHtJwAJHxxakIPf%2FnOH8a1nkWnYXpglgMwbzhzoo6Oq%2Bpz1fuVA6n5P6pFz6Aa4h9uUVBR3ycN6DilYpShduXvj9OZOqtBUJlLd7R%2FaP7SUlfIetCx3DYyJ5y4vggLRTwzjjflgWHtZHzyLYLI%2BAFSufgoSPLf404rq0DxjEaogvth8zmpe%2Bms9SSB%2FPbqNFCcOLeq0AT%2FBwqWwmdksFO1fac45JIk9%2BIFjrSglVgHlUAPd6QqrTY4VKOAsfnkAvYyaGbOd%2BFqAYMXjtn16%2BKeM4mC25iSjlvifQ%2B9UkLkP6QdXF%2BIoEyo5zp747PuUDxGvDe2EhOj4BejNdnS4kpg755B0NGLfwZdAMLxAPZm0xGjvxMfWAgfpdaifzmyzhW%2BXYL2pFNNuAMF%2FLr2rOD95xmcAV4%2FBT1Sv9%2B4bHAO8aGs1PmiAoI0Pj3Z5wnlmdV%2BY6R0D%2B2mAsRwKNsOmhxX3eP0mIYgp1dj%2BUWdRPXCqjtAABP904WKVElrlLDHsgzwJrc8kpjSZjiPuCm9OBbKCzNXWmbtftmE8hUz%2BvxrR2YLWyBamWZrRYEwhcu3wwY6pgHMGpvgore9S89CrNWK%2F3YPtoqvrp3UYLJOTPoRe3%2BbIg3hLgFFCnoUFdtzqgr0tE0Ced55EX1%2BEojropigmSBpChgHAWHRsOf16JBcHM3%2BjH8J4NiIGeytOH91AILybOD67XJcQIlJxR1h6M54zIEHFaBn%2BXkdm%2FCeDQG4FTeX%2FG19bje0pRss9g96L6u0zps21%2FqlWWQtsIIWJoQQg%2F%2BEQPwINhST&X-Amz-Signature=234b33f2bc31029b479f6d8b2627e339a35988b6b5f1116c8715bbf0cf1a1a6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466354DAUZG%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T051502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0Xsvb8s6g2X0pT8I5IW4%2FJdRY%2FSoSCud8sjSqSXrPoAiAMSmTV4PNOPyaO2TbpTcV%2FeeDZENaigTz4wFKpOCoq%2BCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5X5Dg%2FvO793IjOefKtwDMowdO0oBaCUjn8uQnZtDRQmIODzx5uLx3uPJgny%2B25soA0nMUGVn1vvVipt169SQ5lTHtJwAJHxxakIPf%2FnOH8a1nkWnYXpglgMwbzhzoo6Oq%2Bpz1fuVA6n5P6pFz6Aa4h9uUVBR3ycN6DilYpShduXvj9OZOqtBUJlLd7R%2FaP7SUlfIetCx3DYyJ5y4vggLRTwzjjflgWHtZHzyLYLI%2BAFSufgoSPLf404rq0DxjEaogvth8zmpe%2Bms9SSB%2FPbqNFCcOLeq0AT%2FBwqWwmdksFO1fac45JIk9%2BIFjrSglVgHlUAPd6QqrTY4VKOAsfnkAvYyaGbOd%2BFqAYMXjtn16%2BKeM4mC25iSjlvifQ%2B9UkLkP6QdXF%2BIoEyo5zp747PuUDxGvDe2EhOj4BejNdnS4kpg755B0NGLfwZdAMLxAPZm0xGjvxMfWAgfpdaifzmyzhW%2BXYL2pFNNuAMF%2FLr2rOD95xmcAV4%2FBT1Sv9%2B4bHAO8aGs1PmiAoI0Pj3Z5wnlmdV%2BY6R0D%2B2mAsRwKNsOmhxX3eP0mIYgp1dj%2BUWdRPXCqjtAABP904WKVElrlLDHsgzwJrc8kpjSZjiPuCm9OBbKCzNXWmbtftmE8hUz%2BvxrR2YLWyBamWZrRYEwhcu3wwY6pgHMGpvgore9S89CrNWK%2F3YPtoqvrp3UYLJOTPoRe3%2BbIg3hLgFFCnoUFdtzqgr0tE0Ced55EX1%2BEojropigmSBpChgHAWHRsOf16JBcHM3%2BjH8J4NiIGeytOH91AILybOD67XJcQIlJxR1h6M54zIEHFaBn%2BXkdm%2FCeDQG4FTeX%2FG19bje0pRss9g96L6u0zps21%2FqlWWQtsIIWJoQQg%2F%2BEQPwINhST&X-Amz-Signature=b359324d254a8251f64e990c54b90484628ce07050bed8271b6893fd7fd7bc9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
