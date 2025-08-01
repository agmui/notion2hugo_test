---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVOTVYDX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpkf%2Fs6J1UvVpFnEqP0KG58hDqzZ7wnuZ%2BDXIURL8llAIhAPADlmOiuPYoPqH6vBRCAmumE4AFKsa4wb4KcYrt6HEfKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxga3T6bpH3WsB9Zp0q3AP5U2wszCmmNVkuyPP8fXqsT%2FeHW2u92COq%2BzjCZip8KAJyibhrkexBUxSnYpgVopiuhSUz33Rr5SOTRkEn70vB8Sbk7OLlmmUK2UxGRPc6tLC4cEi%2FgrjlVPGn5GlaxqjXUUx0z%2BWfP8nr4yyAiav0x6axxfR0GutzwOpzeSNqjwRtWyRcs7WxLEjP6VZBJuzulCNFM3lcYBK5XJntP%2B704euIyR7%2FC%2F%2B8mo%2FTmaAN4lxvut6cBJBj5jc1s%2FfzHFfr%2FiPl8KkRJ%2BwXsG9lAKZurCRvPFvQFE8pvc866fIH8Ge8p1ydIGkmYLrJqURvP3r6lWAqguZSC7HfI8udcG5nuOOs%2FLZEMN5S1N2361Vb2wDFqXTDsopA3VLJxr8ZyYRpWKouEyinZiRf%2FdywQi2K44lorv6ZNBdDlzwH0kvYy3E54cL98VhET1bYjNLjNYKK6v5VLG22hjHgv%2BsILqnW4QdqekpkJ9Ot8ovtVVWrZH4pveFp15RUFVWqmT1QjvGcZtMJg4Z3FTye2vBMwKfzgLFLgdfkWr4tbD6MYUZNouKVk7A7Vg%2BIAqGgV5hWMhv4rc8lrEtRZIFPwHSfpX%2FltTpCa8f6%2FTpL2AI%2FWUgaePcHeDkxXM%2BtuxVi4zDytbLEBjqkAXov67smvAfZ3J6sLMRJxIC%2FNg7MmmDk7FZ%2BNEsgXoD48eC1hsD3j1ibMv0TrHPjgVkVmZduMtNcxIy%2FzJSmodb1gi36%2F%2BJAhd6EIPGsgegZonBNvtVTtFUj6zoilZxKscmhkAO7CPUNA0r16QLLDwls5WxEZ9czgKqhKUP1DRgZGq122mTm49oFZI%2BzNmNPpSMXMSLeyfKA%2F8qZljQPF%2F%2BNgaQ5&X-Amz-Signature=a4af27f62a1b733d275cca5238b275888ca7cd587f97e02b2a374b498238d7a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVOTVYDX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpkf%2Fs6J1UvVpFnEqP0KG58hDqzZ7wnuZ%2BDXIURL8llAIhAPADlmOiuPYoPqH6vBRCAmumE4AFKsa4wb4KcYrt6HEfKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxga3T6bpH3WsB9Zp0q3AP5U2wszCmmNVkuyPP8fXqsT%2FeHW2u92COq%2BzjCZip8KAJyibhrkexBUxSnYpgVopiuhSUz33Rr5SOTRkEn70vB8Sbk7OLlmmUK2UxGRPc6tLC4cEi%2FgrjlVPGn5GlaxqjXUUx0z%2BWfP8nr4yyAiav0x6axxfR0GutzwOpzeSNqjwRtWyRcs7WxLEjP6VZBJuzulCNFM3lcYBK5XJntP%2B704euIyR7%2FC%2F%2B8mo%2FTmaAN4lxvut6cBJBj5jc1s%2FfzHFfr%2FiPl8KkRJ%2BwXsG9lAKZurCRvPFvQFE8pvc866fIH8Ge8p1ydIGkmYLrJqURvP3r6lWAqguZSC7HfI8udcG5nuOOs%2FLZEMN5S1N2361Vb2wDFqXTDsopA3VLJxr8ZyYRpWKouEyinZiRf%2FdywQi2K44lorv6ZNBdDlzwH0kvYy3E54cL98VhET1bYjNLjNYKK6v5VLG22hjHgv%2BsILqnW4QdqekpkJ9Ot8ovtVVWrZH4pveFp15RUFVWqmT1QjvGcZtMJg4Z3FTye2vBMwKfzgLFLgdfkWr4tbD6MYUZNouKVk7A7Vg%2BIAqGgV5hWMhv4rc8lrEtRZIFPwHSfpX%2FltTpCa8f6%2FTpL2AI%2FWUgaePcHeDkxXM%2BtuxVi4zDytbLEBjqkAXov67smvAfZ3J6sLMRJxIC%2FNg7MmmDk7FZ%2BNEsgXoD48eC1hsD3j1ibMv0TrHPjgVkVmZduMtNcxIy%2FzJSmodb1gi36%2F%2BJAhd6EIPGsgegZonBNvtVTtFUj6zoilZxKscmhkAO7CPUNA0r16QLLDwls5WxEZ9czgKqhKUP1DRgZGq122mTm49oFZI%2BzNmNPpSMXMSLeyfKA%2F8qZljQPF%2F%2BNgaQ5&X-Amz-Signature=88bbc41648375422fd6d7045e72a77b7da7421a48bca30f3a91c27ed4e98105a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVOTVYDX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpkf%2Fs6J1UvVpFnEqP0KG58hDqzZ7wnuZ%2BDXIURL8llAIhAPADlmOiuPYoPqH6vBRCAmumE4AFKsa4wb4KcYrt6HEfKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxga3T6bpH3WsB9Zp0q3AP5U2wszCmmNVkuyPP8fXqsT%2FeHW2u92COq%2BzjCZip8KAJyibhrkexBUxSnYpgVopiuhSUz33Rr5SOTRkEn70vB8Sbk7OLlmmUK2UxGRPc6tLC4cEi%2FgrjlVPGn5GlaxqjXUUx0z%2BWfP8nr4yyAiav0x6axxfR0GutzwOpzeSNqjwRtWyRcs7WxLEjP6VZBJuzulCNFM3lcYBK5XJntP%2B704euIyR7%2FC%2F%2B8mo%2FTmaAN4lxvut6cBJBj5jc1s%2FfzHFfr%2FiPl8KkRJ%2BwXsG9lAKZurCRvPFvQFE8pvc866fIH8Ge8p1ydIGkmYLrJqURvP3r6lWAqguZSC7HfI8udcG5nuOOs%2FLZEMN5S1N2361Vb2wDFqXTDsopA3VLJxr8ZyYRpWKouEyinZiRf%2FdywQi2K44lorv6ZNBdDlzwH0kvYy3E54cL98VhET1bYjNLjNYKK6v5VLG22hjHgv%2BsILqnW4QdqekpkJ9Ot8ovtVVWrZH4pveFp15RUFVWqmT1QjvGcZtMJg4Z3FTye2vBMwKfzgLFLgdfkWr4tbD6MYUZNouKVk7A7Vg%2BIAqGgV5hWMhv4rc8lrEtRZIFPwHSfpX%2FltTpCa8f6%2FTpL2AI%2FWUgaePcHeDkxXM%2BtuxVi4zDytbLEBjqkAXov67smvAfZ3J6sLMRJxIC%2FNg7MmmDk7FZ%2BNEsgXoD48eC1hsD3j1ibMv0TrHPjgVkVmZduMtNcxIy%2FzJSmodb1gi36%2F%2BJAhd6EIPGsgegZonBNvtVTtFUj6zoilZxKscmhkAO7CPUNA0r16QLLDwls5WxEZ9czgKqhKUP1DRgZGq122mTm49oFZI%2BzNmNPpSMXMSLeyfKA%2F8qZljQPF%2F%2BNgaQ5&X-Amz-Signature=f2d1eb7ea40e704a9f837d47e9a7190ecd4de14a0456d23f33e67cb5e355febf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
