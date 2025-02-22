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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYTYNMDG%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T090711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGf0DF%2BccO9zorhYuhn4GECFJDSw5Zht%2BCeYm9rFCUU6AiBVfebQhl1A3RvgX28UmbZs%2FgAz2wTeT%2FJmwgRuc8d0%2FiqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMILleL7jRGjFMZKZ1KtwDBTCIayesga9oH%2Fd%2FXr%2FLHNhqxSmWEr99h6fqg43wkSh%2BA2ERYNOtVr3VvWdkJ5NDWtWLNE%2BxTROuMKdSvgUrytNBf%2FVJZ5ehbQYyuk0I92ch%2FsdHuoY1AboYQeL5A8SOZNYlNVO%2FMle%2FhgKucli1d%2Be5IgMZEbHTBn3sbB0O6sf%2BQ4WPcueGdny1CJIhrutBOXWg%2FIiFkq5wqlyDHrnGDbePPjaxrCxTug%2FvG6RaADJtWnEpUASvXKE65OQIYiFEWiGETCWs8JLY%2F7brwXgBe6QZRpkIiKt3OLGY1HjIjLVLSJUbZRBBjGaNfkfTym84ztWBx20JVv%2F5DrolxRlOM9IpYxmVeCvc71%2F5dmmsd0%2Fje%2FAtCZZYrlp7o6R%2BS%2BeSQSYogn5K2qW2dYxWYzjUQ9FNb2h6FjhBtigDgVyJUJqM2N%2Ff9UM9Meo4TXLHITHgTmq8mL8ztjlduD%2BsCHy9uqh1k6opP31IiM1M%2F53P62cBgsy3nP0lBw%2FbrPEaxJTfwULjwE30CoERUt9HoEJg%2FuR1Ogs39LkB4Itc%2BexrA0ByFHQEPeVlvU4R8hJbxrCkkcD3hRbdlBsyh1KsxXLgw4R9NxCMByyMx4%2BKj9OhAWzljEZC%2BHpuleLnsJ8wlMjlvQY6pgHi5wiMwXuxS%2B0Gk9RHylsubf8Z38FKLwRuYxGItpSS4bEsQ4R7JSRTA89eMXTrcmWTfy2WXeezfwZO%2F5ku91nn2tVvkBwl%2ByctSRhbiXF5CHPY2squzsUUaK89hKUTtZnXG%2Ff801wxGrdNFjDPoYHcYi1NcQq3oHBXoZmeUZEdi1epCdeXWmS4fjUB4NDshQbIqju5BzrxccHyuXFPMT3PlRa%2B55LD&X-Amz-Signature=93fbfbef3394904e6950a06a382a6d4d2877b84575d9e3473e08ab426daaea66&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYTYNMDG%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T090711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGf0DF%2BccO9zorhYuhn4GECFJDSw5Zht%2BCeYm9rFCUU6AiBVfebQhl1A3RvgX28UmbZs%2FgAz2wTeT%2FJmwgRuc8d0%2FiqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMILleL7jRGjFMZKZ1KtwDBTCIayesga9oH%2Fd%2FXr%2FLHNhqxSmWEr99h6fqg43wkSh%2BA2ERYNOtVr3VvWdkJ5NDWtWLNE%2BxTROuMKdSvgUrytNBf%2FVJZ5ehbQYyuk0I92ch%2FsdHuoY1AboYQeL5A8SOZNYlNVO%2FMle%2FhgKucli1d%2Be5IgMZEbHTBn3sbB0O6sf%2BQ4WPcueGdny1CJIhrutBOXWg%2FIiFkq5wqlyDHrnGDbePPjaxrCxTug%2FvG6RaADJtWnEpUASvXKE65OQIYiFEWiGETCWs8JLY%2F7brwXgBe6QZRpkIiKt3OLGY1HjIjLVLSJUbZRBBjGaNfkfTym84ztWBx20JVv%2F5DrolxRlOM9IpYxmVeCvc71%2F5dmmsd0%2Fje%2FAtCZZYrlp7o6R%2BS%2BeSQSYogn5K2qW2dYxWYzjUQ9FNb2h6FjhBtigDgVyJUJqM2N%2Ff9UM9Meo4TXLHITHgTmq8mL8ztjlduD%2BsCHy9uqh1k6opP31IiM1M%2F53P62cBgsy3nP0lBw%2FbrPEaxJTfwULjwE30CoERUt9HoEJg%2FuR1Ogs39LkB4Itc%2BexrA0ByFHQEPeVlvU4R8hJbxrCkkcD3hRbdlBsyh1KsxXLgw4R9NxCMByyMx4%2BKj9OhAWzljEZC%2BHpuleLnsJ8wlMjlvQY6pgHi5wiMwXuxS%2B0Gk9RHylsubf8Z38FKLwRuYxGItpSS4bEsQ4R7JSRTA89eMXTrcmWTfy2WXeezfwZO%2F5ku91nn2tVvkBwl%2ByctSRhbiXF5CHPY2squzsUUaK89hKUTtZnXG%2Ff801wxGrdNFjDPoYHcYi1NcQq3oHBXoZmeUZEdi1epCdeXWmS4fjUB4NDshQbIqju5BzrxccHyuXFPMT3PlRa%2B55LD&X-Amz-Signature=dd5bcd3f08d07723791bf28b447cc37b189b372cc3770d9c6c21aae4c169a66e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYTYNMDG%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T090711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGf0DF%2BccO9zorhYuhn4GECFJDSw5Zht%2BCeYm9rFCUU6AiBVfebQhl1A3RvgX28UmbZs%2FgAz2wTeT%2FJmwgRuc8d0%2FiqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMILleL7jRGjFMZKZ1KtwDBTCIayesga9oH%2Fd%2FXr%2FLHNhqxSmWEr99h6fqg43wkSh%2BA2ERYNOtVr3VvWdkJ5NDWtWLNE%2BxTROuMKdSvgUrytNBf%2FVJZ5ehbQYyuk0I92ch%2FsdHuoY1AboYQeL5A8SOZNYlNVO%2FMle%2FhgKucli1d%2Be5IgMZEbHTBn3sbB0O6sf%2BQ4WPcueGdny1CJIhrutBOXWg%2FIiFkq5wqlyDHrnGDbePPjaxrCxTug%2FvG6RaADJtWnEpUASvXKE65OQIYiFEWiGETCWs8JLY%2F7brwXgBe6QZRpkIiKt3OLGY1HjIjLVLSJUbZRBBjGaNfkfTym84ztWBx20JVv%2F5DrolxRlOM9IpYxmVeCvc71%2F5dmmsd0%2Fje%2FAtCZZYrlp7o6R%2BS%2BeSQSYogn5K2qW2dYxWYzjUQ9FNb2h6FjhBtigDgVyJUJqM2N%2Ff9UM9Meo4TXLHITHgTmq8mL8ztjlduD%2BsCHy9uqh1k6opP31IiM1M%2F53P62cBgsy3nP0lBw%2FbrPEaxJTfwULjwE30CoERUt9HoEJg%2FuR1Ogs39LkB4Itc%2BexrA0ByFHQEPeVlvU4R8hJbxrCkkcD3hRbdlBsyh1KsxXLgw4R9NxCMByyMx4%2BKj9OhAWzljEZC%2BHpuleLnsJ8wlMjlvQY6pgHi5wiMwXuxS%2B0Gk9RHylsubf8Z38FKLwRuYxGItpSS4bEsQ4R7JSRTA89eMXTrcmWTfy2WXeezfwZO%2F5ku91nn2tVvkBwl%2ByctSRhbiXF5CHPY2squzsUUaK89hKUTtZnXG%2Ff801wxGrdNFjDPoYHcYi1NcQq3oHBXoZmeUZEdi1epCdeXWmS4fjUB4NDshQbIqju5BzrxccHyuXFPMT3PlRa%2B55LD&X-Amz-Signature=96903d1564b5a90ffc469794dcfabaac0784798a2f5a45d28269c2924685a365&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
