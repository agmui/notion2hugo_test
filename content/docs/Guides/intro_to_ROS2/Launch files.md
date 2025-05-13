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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYMG6VGS%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T022802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIHuNsTuRsiM3cwdJdiZDHSOvK1nvtOTcdCawwk6b%2FMW6AiApupOFiwCQ2vGPAyB3H8WBcZzbpPwUS93Mnkh1C1hVpCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoU1tp3bcn0ILNT3RKtwDlDRdFl0XYcGa1IKUvlRg4ntcD3wDdL02zd1Rhz9UCwZzhBkIewusuCbQA9o90TLGLTB8EvHlWr%2FBe4ThWleNbM3l36n8jIiTl4GJWSbe%2BohIAeY2Na1Pmt%2BNa%2Ffi56zRReFuFdBYuhy70OdDI%2FL7j1J9kIFW1n2zRtAeaKwEMm1GKXwAfy5uiYSenMeUp8njR%2FHHNTgslRAwfdM%2FvAuCPFaMjxgzvldsC71ySgkepDsdegIMy4RbICBmvbESBINN9TG6C9OdPn0bKUxObbe%2FIOSsydGWiHzPfcRib2MFujU5XQ0F4wrvSgYuSF0qvElSXtRcKKehYwJT%2BG0F1%2BfmoLmmUnOiNP58MkUbbLuG7LnoOIUi72dW1OS1crN1g6zwjg%2F4mWa3avY2iz%2FMYPCwZM5R0gnGTd1L8MvLisIXvMKBdjjPVmGeHW4uUrzwwAjvvV%2B1oy9OAFo%2FjWp31P4S%2BnM9dvAcYIn%2Bu7IsSAmx27w8HCS7LLHSIArSBeF0m6spEiLji0bWjSMT34fuaMZU5Ke4XQrUWR2HpRmsxF%2FKj3%2B0m%2F5WD1g8gHT%2BiRFvJC6CF8kqFr8IGYD4fQ4WBIULSZJN%2FnsvcmbF%2BIffoasiLh7wcithIVt7d3A%2BEgIw6saKwQY6pgHm%2FHMjwRQXFWa%2FVxfHzS7jbzl8K1Bun5P5Hlll7%2FoqQw4ltQA8jEgfUzzeP%2FCiRlTERmNpGhmq%2FyMSBaHfpJ707OgNzpXvj5tz3eAzeV2cXbYQQqYU52818Yw8Nf4FwcSLmyz9blloRQ6CqppjrbBKdRzOgEUJzHECXuUfRcWB6qBtIh9RSh%2F4RSRbACYx1k31y781Wn6cZRsXDEahpWuHlMxHGDgM&X-Amz-Signature=a91278b7a0adad96213f5674700ff4eb9b131e5fcd046304e87f8771daf05790&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYMG6VGS%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T022802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIHuNsTuRsiM3cwdJdiZDHSOvK1nvtOTcdCawwk6b%2FMW6AiApupOFiwCQ2vGPAyB3H8WBcZzbpPwUS93Mnkh1C1hVpCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoU1tp3bcn0ILNT3RKtwDlDRdFl0XYcGa1IKUvlRg4ntcD3wDdL02zd1Rhz9UCwZzhBkIewusuCbQA9o90TLGLTB8EvHlWr%2FBe4ThWleNbM3l36n8jIiTl4GJWSbe%2BohIAeY2Na1Pmt%2BNa%2Ffi56zRReFuFdBYuhy70OdDI%2FL7j1J9kIFW1n2zRtAeaKwEMm1GKXwAfy5uiYSenMeUp8njR%2FHHNTgslRAwfdM%2FvAuCPFaMjxgzvldsC71ySgkepDsdegIMy4RbICBmvbESBINN9TG6C9OdPn0bKUxObbe%2FIOSsydGWiHzPfcRib2MFujU5XQ0F4wrvSgYuSF0qvElSXtRcKKehYwJT%2BG0F1%2BfmoLmmUnOiNP58MkUbbLuG7LnoOIUi72dW1OS1crN1g6zwjg%2F4mWa3avY2iz%2FMYPCwZM5R0gnGTd1L8MvLisIXvMKBdjjPVmGeHW4uUrzwwAjvvV%2B1oy9OAFo%2FjWp31P4S%2BnM9dvAcYIn%2Bu7IsSAmx27w8HCS7LLHSIArSBeF0m6spEiLji0bWjSMT34fuaMZU5Ke4XQrUWR2HpRmsxF%2FKj3%2B0m%2F5WD1g8gHT%2BiRFvJC6CF8kqFr8IGYD4fQ4WBIULSZJN%2FnsvcmbF%2BIffoasiLh7wcithIVt7d3A%2BEgIw6saKwQY6pgHm%2FHMjwRQXFWa%2FVxfHzS7jbzl8K1Bun5P5Hlll7%2FoqQw4ltQA8jEgfUzzeP%2FCiRlTERmNpGhmq%2FyMSBaHfpJ707OgNzpXvj5tz3eAzeV2cXbYQQqYU52818Yw8Nf4FwcSLmyz9blloRQ6CqppjrbBKdRzOgEUJzHECXuUfRcWB6qBtIh9RSh%2F4RSRbACYx1k31y781Wn6cZRsXDEahpWuHlMxHGDgM&X-Amz-Signature=559b4948a7efd19ecd11614e08fe18a2703bbf9373f973be00b2f8c2fbb50ebf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYMG6VGS%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T022802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIHuNsTuRsiM3cwdJdiZDHSOvK1nvtOTcdCawwk6b%2FMW6AiApupOFiwCQ2vGPAyB3H8WBcZzbpPwUS93Mnkh1C1hVpCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoU1tp3bcn0ILNT3RKtwDlDRdFl0XYcGa1IKUvlRg4ntcD3wDdL02zd1Rhz9UCwZzhBkIewusuCbQA9o90TLGLTB8EvHlWr%2FBe4ThWleNbM3l36n8jIiTl4GJWSbe%2BohIAeY2Na1Pmt%2BNa%2Ffi56zRReFuFdBYuhy70OdDI%2FL7j1J9kIFW1n2zRtAeaKwEMm1GKXwAfy5uiYSenMeUp8njR%2FHHNTgslRAwfdM%2FvAuCPFaMjxgzvldsC71ySgkepDsdegIMy4RbICBmvbESBINN9TG6C9OdPn0bKUxObbe%2FIOSsydGWiHzPfcRib2MFujU5XQ0F4wrvSgYuSF0qvElSXtRcKKehYwJT%2BG0F1%2BfmoLmmUnOiNP58MkUbbLuG7LnoOIUi72dW1OS1crN1g6zwjg%2F4mWa3avY2iz%2FMYPCwZM5R0gnGTd1L8MvLisIXvMKBdjjPVmGeHW4uUrzwwAjvvV%2B1oy9OAFo%2FjWp31P4S%2BnM9dvAcYIn%2Bu7IsSAmx27w8HCS7LLHSIArSBeF0m6spEiLji0bWjSMT34fuaMZU5Ke4XQrUWR2HpRmsxF%2FKj3%2B0m%2F5WD1g8gHT%2BiRFvJC6CF8kqFr8IGYD4fQ4WBIULSZJN%2FnsvcmbF%2BIffoasiLh7wcithIVt7d3A%2BEgIw6saKwQY6pgHm%2FHMjwRQXFWa%2FVxfHzS7jbzl8K1Bun5P5Hlll7%2FoqQw4ltQA8jEgfUzzeP%2FCiRlTERmNpGhmq%2FyMSBaHfpJ707OgNzpXvj5tz3eAzeV2cXbYQQqYU52818Yw8Nf4FwcSLmyz9blloRQ6CqppjrbBKdRzOgEUJzHECXuUfRcWB6qBtIh9RSh%2F4RSRbACYx1k31y781Wn6cZRsXDEahpWuHlMxHGDgM&X-Amz-Signature=c7fb206069c04a006557a01af86e6d0afb9321f071e2bbad9b1f9fb9741c1794&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
