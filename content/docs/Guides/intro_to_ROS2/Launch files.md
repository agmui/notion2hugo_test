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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDTBOMWW%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T151004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG7oqMx%2FNKKa%2BVsaD48npexwc2wOUfElQyuA3NzTzogxAiAKCB0W2Dg3%2F%2FRt2l7VcbwkP9ThqveTIwfg2e21rB%2BTkiqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2FDfzWXgh24yBmFIKtwDwG3%2BUuM3k2aeLwCR0iFM1NecO9095NUVzm9vGXyY54c%2FHlM5IL4emaZGD%2FBkw43zGuhU5qoVTAa9oHkX5WTCXIFYlhYCRbpbbuS2DBvBGr8WcWs0%2F%2BXqgseFWC8LHOTfDu2repP7AH6oezO8M9jxn3r87pOLi8spvuBqEQAzAteYeKhtosiwObo5MMF%2FWidyMqX8WUODs1QKfgvBUGkONkwMFieKJa3h3Pj6cjkH1%2B6ZRHQO84MKQX%2FPPP4AKhIW9l40s3Pyu1oBpuetfWxRM3P0oWPjRkAH95I%2F290jTvDjoPZyDnc6RcGzXwE4bi%2FU0iSYUbEOa0L94NFQOPDKVqP9R0YMJR6PPEHXySFpF3I%2Fw0EZUIX1dMCwNYSW77pKCidBkbZrcY8RGb%2BhM8g3agNCQZeqg%2F4jd8uUV74krCNyFjVvWpmZM%2FZI4jzLWykm1jsndXTe8k43lj7iBYKfrO86EY5c2daV4SGFU6wwY%2BITVwxCTGrajbaCQvDIEd%2FdNbEHkJ%2BkR4OMt155UKjvZuU%2FV%2FxuVquFbQTTXfoBaJOorBW2G%2BR9rPHvJQ6u2U7htejIc6puO5iWqgurvw4RURzcscEvIDKpUZTTAVasjvjAGFtw5ijQX5LIfoUw1bOywQY6pgGtQGnn6vbtkNaZ93f6dYJ%2BHhbL9oD5zZxJtv8AESOAEE%2BfsleOPyKt%2F%2FxUTjCUV51BGU2IcjmEb0RdqXx5MQpxAOhA419LEnGjuvAA9QVG0ObmCAp4dlcVe7kZ46MubrQL5ttAygP%2FDxK4QKPA92ZbBOMcuxZoa7GNf93dELlvIQZykrfg21G7H3aVYbW1A0B4rrGIVZiWgmyhkDUyT1H0%2FsMoc0TJ&X-Amz-Signature=7657e18722d3244e7fe2fd49e9cf848a291e7d0f4f02201db6c6694e04f7d765&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDTBOMWW%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T151004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG7oqMx%2FNKKa%2BVsaD48npexwc2wOUfElQyuA3NzTzogxAiAKCB0W2Dg3%2F%2FRt2l7VcbwkP9ThqveTIwfg2e21rB%2BTkiqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2FDfzWXgh24yBmFIKtwDwG3%2BUuM3k2aeLwCR0iFM1NecO9095NUVzm9vGXyY54c%2FHlM5IL4emaZGD%2FBkw43zGuhU5qoVTAa9oHkX5WTCXIFYlhYCRbpbbuS2DBvBGr8WcWs0%2F%2BXqgseFWC8LHOTfDu2repP7AH6oezO8M9jxn3r87pOLi8spvuBqEQAzAteYeKhtosiwObo5MMF%2FWidyMqX8WUODs1QKfgvBUGkONkwMFieKJa3h3Pj6cjkH1%2B6ZRHQO84MKQX%2FPPP4AKhIW9l40s3Pyu1oBpuetfWxRM3P0oWPjRkAH95I%2F290jTvDjoPZyDnc6RcGzXwE4bi%2FU0iSYUbEOa0L94NFQOPDKVqP9R0YMJR6PPEHXySFpF3I%2Fw0EZUIX1dMCwNYSW77pKCidBkbZrcY8RGb%2BhM8g3agNCQZeqg%2F4jd8uUV74krCNyFjVvWpmZM%2FZI4jzLWykm1jsndXTe8k43lj7iBYKfrO86EY5c2daV4SGFU6wwY%2BITVwxCTGrajbaCQvDIEd%2FdNbEHkJ%2BkR4OMt155UKjvZuU%2FV%2FxuVquFbQTTXfoBaJOorBW2G%2BR9rPHvJQ6u2U7htejIc6puO5iWqgurvw4RURzcscEvIDKpUZTTAVasjvjAGFtw5ijQX5LIfoUw1bOywQY6pgGtQGnn6vbtkNaZ93f6dYJ%2BHhbL9oD5zZxJtv8AESOAEE%2BfsleOPyKt%2F%2FxUTjCUV51BGU2IcjmEb0RdqXx5MQpxAOhA419LEnGjuvAA9QVG0ObmCAp4dlcVe7kZ46MubrQL5ttAygP%2FDxK4QKPA92ZbBOMcuxZoa7GNf93dELlvIQZykrfg21G7H3aVYbW1A0B4rrGIVZiWgmyhkDUyT1H0%2FsMoc0TJ&X-Amz-Signature=7df8b19765155102f60a7f3aeb9c10219b020d0f3813caad761dafa9c0328ac2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDTBOMWW%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T151004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG7oqMx%2FNKKa%2BVsaD48npexwc2wOUfElQyuA3NzTzogxAiAKCB0W2Dg3%2F%2FRt2l7VcbwkP9ThqveTIwfg2e21rB%2BTkiqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2FDfzWXgh24yBmFIKtwDwG3%2BUuM3k2aeLwCR0iFM1NecO9095NUVzm9vGXyY54c%2FHlM5IL4emaZGD%2FBkw43zGuhU5qoVTAa9oHkX5WTCXIFYlhYCRbpbbuS2DBvBGr8WcWs0%2F%2BXqgseFWC8LHOTfDu2repP7AH6oezO8M9jxn3r87pOLi8spvuBqEQAzAteYeKhtosiwObo5MMF%2FWidyMqX8WUODs1QKfgvBUGkONkwMFieKJa3h3Pj6cjkH1%2B6ZRHQO84MKQX%2FPPP4AKhIW9l40s3Pyu1oBpuetfWxRM3P0oWPjRkAH95I%2F290jTvDjoPZyDnc6RcGzXwE4bi%2FU0iSYUbEOa0L94NFQOPDKVqP9R0YMJR6PPEHXySFpF3I%2Fw0EZUIX1dMCwNYSW77pKCidBkbZrcY8RGb%2BhM8g3agNCQZeqg%2F4jd8uUV74krCNyFjVvWpmZM%2FZI4jzLWykm1jsndXTe8k43lj7iBYKfrO86EY5c2daV4SGFU6wwY%2BITVwxCTGrajbaCQvDIEd%2FdNbEHkJ%2BkR4OMt155UKjvZuU%2FV%2FxuVquFbQTTXfoBaJOorBW2G%2BR9rPHvJQ6u2U7htejIc6puO5iWqgurvw4RURzcscEvIDKpUZTTAVasjvjAGFtw5ijQX5LIfoUw1bOywQY6pgGtQGnn6vbtkNaZ93f6dYJ%2BHhbL9oD5zZxJtv8AESOAEE%2BfsleOPyKt%2F%2FxUTjCUV51BGU2IcjmEb0RdqXx5MQpxAOhA419LEnGjuvAA9QVG0ObmCAp4dlcVe7kZ46MubrQL5ttAygP%2FDxK4QKPA92ZbBOMcuxZoa7GNf93dELlvIQZykrfg21G7H3aVYbW1A0B4rrGIVZiWgmyhkDUyT1H0%2FsMoc0TJ&X-Amz-Signature=fe0413d8fd5c2a0b55a35054bc3f81e83bcf67aed513415c1a54523ac4dcf629&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
