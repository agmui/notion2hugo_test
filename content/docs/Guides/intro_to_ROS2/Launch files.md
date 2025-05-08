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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIGTNWVQ%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3ca64ge1QljqQqZ5F7pqmWlq%2BAbdW4Pz2wYiqwZihigIhAN7oZm2%2FprwJK7jh0T9RitJ3NPh2yJgLDD87iYWBR%2FIyKv8DCH0QABoMNjM3NDIzMTgzODA1Igy3XqdYKKJkNE7nyTgq3AMPKaTzZaFdtfkMkOI0VUBQ5syb0DyPM5v%2FRuMB5gfcDawnEz16jg4j%2FMyRcRPIXz2Em9KtXgWvckUVOHGrorFtsu4mkVnLS3ef%2FlIhfutDNIiv%2BIq6Wj9Q1oBcsEZQ3Z4j3UPlWBaSl3cK7TEN7SnWNGyaDomL43pb7AD81u5zqtDK5HufaXlnJr%2B08ansE%2F%2FbmmoAp9tDHy7LYDfAhJttfC%2B3PBlkEZqyeS0S3ImdPQ9HzdMKrwiYIw2oyCQAh8nTSv3KlQs2ijd4eC3fHNBBZWEzSqWnT1%2FRd7VTNarNuZj2al2POGFFrjV24wb0tHCXydeztcZOyp9lVZHtASjeQuUhLQpel0SkNtNkFJeTby%2FwJzBmUfuLOyrUQpCCfUSFncUvg60Mh25E0ycamQhrTsiiv00nyVKtM4zG%2Bolp0x3XNaPTpR0L3zh%2Fq0YGjhK%2FdprSdP8pIE0L5%2Bbaq4p2Zp0bo0svA9Rd%2Fe5zr32DomV6oLE%2FGWsrhDKkw1%2FNEB6Y56rNALKgLQ9Mc5KHnKOK4FL2%2B4wQos3RZMmJ4tBaMxedzbtXkdMk7udQ8SDiqKhMQPx6fD9XsSoRz0FMQriMP32c2amMJY%2FyenPAyOPr4bfwFKja64bdzpUkwTD5mfTABjqkAe6v6pDfDb2mdZNZTMdVZGJDbx%2FxHXdN4308E5pBStVEGK6AW8Hmj1%2ByZLnqa0iv6DUa8mnfYgbyi4tT1JA66%2FXvpmB099RwEIKdGZePwJEgd7Fsw8fwWYOPzOJyvtwkWzd1aghi%2BXcqiBbpu2iv%2BwUHigM9GlNC0WLZXvizfjGkV17NhYOrKXLOGPgdpubstcmx7sgYa8qfA1YZ1uHGjaJw46nB&X-Amz-Signature=bea72a06246076b53277cfb54f981a4ff54abf3f849ddf4f80ac4f7e859b747b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIGTNWVQ%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3ca64ge1QljqQqZ5F7pqmWlq%2BAbdW4Pz2wYiqwZihigIhAN7oZm2%2FprwJK7jh0T9RitJ3NPh2yJgLDD87iYWBR%2FIyKv8DCH0QABoMNjM3NDIzMTgzODA1Igy3XqdYKKJkNE7nyTgq3AMPKaTzZaFdtfkMkOI0VUBQ5syb0DyPM5v%2FRuMB5gfcDawnEz16jg4j%2FMyRcRPIXz2Em9KtXgWvckUVOHGrorFtsu4mkVnLS3ef%2FlIhfutDNIiv%2BIq6Wj9Q1oBcsEZQ3Z4j3UPlWBaSl3cK7TEN7SnWNGyaDomL43pb7AD81u5zqtDK5HufaXlnJr%2B08ansE%2F%2FbmmoAp9tDHy7LYDfAhJttfC%2B3PBlkEZqyeS0S3ImdPQ9HzdMKrwiYIw2oyCQAh8nTSv3KlQs2ijd4eC3fHNBBZWEzSqWnT1%2FRd7VTNarNuZj2al2POGFFrjV24wb0tHCXydeztcZOyp9lVZHtASjeQuUhLQpel0SkNtNkFJeTby%2FwJzBmUfuLOyrUQpCCfUSFncUvg60Mh25E0ycamQhrTsiiv00nyVKtM4zG%2Bolp0x3XNaPTpR0L3zh%2Fq0YGjhK%2FdprSdP8pIE0L5%2Bbaq4p2Zp0bo0svA9Rd%2Fe5zr32DomV6oLE%2FGWsrhDKkw1%2FNEB6Y56rNALKgLQ9Mc5KHnKOK4FL2%2B4wQos3RZMmJ4tBaMxedzbtXkdMk7udQ8SDiqKhMQPx6fD9XsSoRz0FMQriMP32c2amMJY%2FyenPAyOPr4bfwFKja64bdzpUkwTD5mfTABjqkAe6v6pDfDb2mdZNZTMdVZGJDbx%2FxHXdN4308E5pBStVEGK6AW8Hmj1%2ByZLnqa0iv6DUa8mnfYgbyi4tT1JA66%2FXvpmB099RwEIKdGZePwJEgd7Fsw8fwWYOPzOJyvtwkWzd1aghi%2BXcqiBbpu2iv%2BwUHigM9GlNC0WLZXvizfjGkV17NhYOrKXLOGPgdpubstcmx7sgYa8qfA1YZ1uHGjaJw46nB&X-Amz-Signature=b34849665b4069936a85b38cab32e244c971803ba30a4bb7c893cce8aada0cd7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIGTNWVQ%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3ca64ge1QljqQqZ5F7pqmWlq%2BAbdW4Pz2wYiqwZihigIhAN7oZm2%2FprwJK7jh0T9RitJ3NPh2yJgLDD87iYWBR%2FIyKv8DCH0QABoMNjM3NDIzMTgzODA1Igy3XqdYKKJkNE7nyTgq3AMPKaTzZaFdtfkMkOI0VUBQ5syb0DyPM5v%2FRuMB5gfcDawnEz16jg4j%2FMyRcRPIXz2Em9KtXgWvckUVOHGrorFtsu4mkVnLS3ef%2FlIhfutDNIiv%2BIq6Wj9Q1oBcsEZQ3Z4j3UPlWBaSl3cK7TEN7SnWNGyaDomL43pb7AD81u5zqtDK5HufaXlnJr%2B08ansE%2F%2FbmmoAp9tDHy7LYDfAhJttfC%2B3PBlkEZqyeS0S3ImdPQ9HzdMKrwiYIw2oyCQAh8nTSv3KlQs2ijd4eC3fHNBBZWEzSqWnT1%2FRd7VTNarNuZj2al2POGFFrjV24wb0tHCXydeztcZOyp9lVZHtASjeQuUhLQpel0SkNtNkFJeTby%2FwJzBmUfuLOyrUQpCCfUSFncUvg60Mh25E0ycamQhrTsiiv00nyVKtM4zG%2Bolp0x3XNaPTpR0L3zh%2Fq0YGjhK%2FdprSdP8pIE0L5%2Bbaq4p2Zp0bo0svA9Rd%2Fe5zr32DomV6oLE%2FGWsrhDKkw1%2FNEB6Y56rNALKgLQ9Mc5KHnKOK4FL2%2B4wQos3RZMmJ4tBaMxedzbtXkdMk7udQ8SDiqKhMQPx6fD9XsSoRz0FMQriMP32c2amMJY%2FyenPAyOPr4bfwFKja64bdzpUkwTD5mfTABjqkAe6v6pDfDb2mdZNZTMdVZGJDbx%2FxHXdN4308E5pBStVEGK6AW8Hmj1%2ByZLnqa0iv6DUa8mnfYgbyi4tT1JA66%2FXvpmB099RwEIKdGZePwJEgd7Fsw8fwWYOPzOJyvtwkWzd1aghi%2BXcqiBbpu2iv%2BwUHigM9GlNC0WLZXvizfjGkV17NhYOrKXLOGPgdpubstcmx7sgYa8qfA1YZ1uHGjaJw46nB&X-Amz-Signature=ac62c80dcd06874eb5f73179785df9f2450efa82d5249775eaa870d55723f1cc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
