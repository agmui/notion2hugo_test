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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZD7F24N%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T050802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFuIvRnJL%2BXapruJ2aiDAroRaC%2BVsXtg13KV1uYRkwutAiBaoG%2BotuAJVW8dkNgVTtwUNeDsq5m7tloGpE6lnED6fSqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQPMZQR8Ju1bSfdKPKtwD0oxK1W6I4snV9bL4IrOiiC9xK3FQcWuMIx1UChKkR%2Fq6ZfLFfSu7wupANk4q2oajNsbWG6qf1%2F4DlYIh%2BSpKhFZ9EC5nFVToRTX6AIddUKB1TmXNl66kZgCPwNu1BsrvLPUpoeXFd1nDgv%2BhKfzXj2MvoEZjfpfGvro7hMxC3f1jRgm7YRs3hgX%2FKWLdueK3Y%2FIHfruOVSY8v%2FZ9M9qU%2BPMIvKIjz3%2BOErCiWIbZuAQWR5JGTm87APNYUNTh94txoe2FBzHs8FikeBLGgprPuQjhfb3MTHaue0xCTCJbk2NZVAkbUjTandwMDUmItUoJhqx2tg2R8sm30MYRrJ6tqKxXk1ymVVEDe6Dhp8odC2kzDI0HcDKN%2BB74TWlViSfEJ7ULNcnzBtkkSGOK9b%2B2NL5ExRthsxqX6MH8YHfbUnXh%2BdoQ%2FnhHLd1%2FlrGd3PYQwCUBstBa3XQfQoSQcRDcrw1WmRWHlvnjqAKGuk6iLWhkmz4O6qUuEZPU4%2FZ4gCINAT92P3fceP2l19hDaiGLUCaCMO7fyGFcg0qh%2FmJnT1ws%2Fpw1n%2B9%2BMYMFcM2yKrQypO4JUyaE0EVMr%2F4M%2BoanWCPchQNFst4JtSumg%2F6%2BAgs3E9d2Tm3XqjsbtcIwi%2BP9vgY6pgFmdak%2FHCJplmgdCe8%2FOn1HEvLdAYHtg9WGSSq%2B%2BlzsZ6mU1fyvjzqW2rnPUqUOrla5wW2WfLob7xQz2W%2FWPSo2UPxIhH1gwD77bVUiGHyF49sasL3lzRm3b9qHYE6QtabvpdW0zKUfJ%2FXPBOQ1I1av38cpFXVZC2O6%2BaaM77tU7EICRzbLf1qtj8rW1jkplEIk%2BL9EqEwvxKRnRcv1VT%2BigGu6%2BjBU&X-Amz-Signature=53661fdaf805d5e029c6f04ceb9425de2c7d94d417ea0ebf27c7b370b9b07f6f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZD7F24N%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T050802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFuIvRnJL%2BXapruJ2aiDAroRaC%2BVsXtg13KV1uYRkwutAiBaoG%2BotuAJVW8dkNgVTtwUNeDsq5m7tloGpE6lnED6fSqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQPMZQR8Ju1bSfdKPKtwD0oxK1W6I4snV9bL4IrOiiC9xK3FQcWuMIx1UChKkR%2Fq6ZfLFfSu7wupANk4q2oajNsbWG6qf1%2F4DlYIh%2BSpKhFZ9EC5nFVToRTX6AIddUKB1TmXNl66kZgCPwNu1BsrvLPUpoeXFd1nDgv%2BhKfzXj2MvoEZjfpfGvro7hMxC3f1jRgm7YRs3hgX%2FKWLdueK3Y%2FIHfruOVSY8v%2FZ9M9qU%2BPMIvKIjz3%2BOErCiWIbZuAQWR5JGTm87APNYUNTh94txoe2FBzHs8FikeBLGgprPuQjhfb3MTHaue0xCTCJbk2NZVAkbUjTandwMDUmItUoJhqx2tg2R8sm30MYRrJ6tqKxXk1ymVVEDe6Dhp8odC2kzDI0HcDKN%2BB74TWlViSfEJ7ULNcnzBtkkSGOK9b%2B2NL5ExRthsxqX6MH8YHfbUnXh%2BdoQ%2FnhHLd1%2FlrGd3PYQwCUBstBa3XQfQoSQcRDcrw1WmRWHlvnjqAKGuk6iLWhkmz4O6qUuEZPU4%2FZ4gCINAT92P3fceP2l19hDaiGLUCaCMO7fyGFcg0qh%2FmJnT1ws%2Fpw1n%2B9%2BMYMFcM2yKrQypO4JUyaE0EVMr%2F4M%2BoanWCPchQNFst4JtSumg%2F6%2BAgs3E9d2Tm3XqjsbtcIwi%2BP9vgY6pgFmdak%2FHCJplmgdCe8%2FOn1HEvLdAYHtg9WGSSq%2B%2BlzsZ6mU1fyvjzqW2rnPUqUOrla5wW2WfLob7xQz2W%2FWPSo2UPxIhH1gwD77bVUiGHyF49sasL3lzRm3b9qHYE6QtabvpdW0zKUfJ%2FXPBOQ1I1av38cpFXVZC2O6%2BaaM77tU7EICRzbLf1qtj8rW1jkplEIk%2BL9EqEwvxKRnRcv1VT%2BigGu6%2BjBU&X-Amz-Signature=cf40b2b0aad57485f6e21ec40e1b5e4b3abf0f20857ed274f195fb158018ad3a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZD7F24N%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T050802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFuIvRnJL%2BXapruJ2aiDAroRaC%2BVsXtg13KV1uYRkwutAiBaoG%2BotuAJVW8dkNgVTtwUNeDsq5m7tloGpE6lnED6fSqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQPMZQR8Ju1bSfdKPKtwD0oxK1W6I4snV9bL4IrOiiC9xK3FQcWuMIx1UChKkR%2Fq6ZfLFfSu7wupANk4q2oajNsbWG6qf1%2F4DlYIh%2BSpKhFZ9EC5nFVToRTX6AIddUKB1TmXNl66kZgCPwNu1BsrvLPUpoeXFd1nDgv%2BhKfzXj2MvoEZjfpfGvro7hMxC3f1jRgm7YRs3hgX%2FKWLdueK3Y%2FIHfruOVSY8v%2FZ9M9qU%2BPMIvKIjz3%2BOErCiWIbZuAQWR5JGTm87APNYUNTh94txoe2FBzHs8FikeBLGgprPuQjhfb3MTHaue0xCTCJbk2NZVAkbUjTandwMDUmItUoJhqx2tg2R8sm30MYRrJ6tqKxXk1ymVVEDe6Dhp8odC2kzDI0HcDKN%2BB74TWlViSfEJ7ULNcnzBtkkSGOK9b%2B2NL5ExRthsxqX6MH8YHfbUnXh%2BdoQ%2FnhHLd1%2FlrGd3PYQwCUBstBa3XQfQoSQcRDcrw1WmRWHlvnjqAKGuk6iLWhkmz4O6qUuEZPU4%2FZ4gCINAT92P3fceP2l19hDaiGLUCaCMO7fyGFcg0qh%2FmJnT1ws%2Fpw1n%2B9%2BMYMFcM2yKrQypO4JUyaE0EVMr%2F4M%2BoanWCPchQNFst4JtSumg%2F6%2BAgs3E9d2Tm3XqjsbtcIwi%2BP9vgY6pgFmdak%2FHCJplmgdCe8%2FOn1HEvLdAYHtg9WGSSq%2B%2BlzsZ6mU1fyvjzqW2rnPUqUOrla5wW2WfLob7xQz2W%2FWPSo2UPxIhH1gwD77bVUiGHyF49sasL3lzRm3b9qHYE6QtabvpdW0zKUfJ%2FXPBOQ1I1av38cpFXVZC2O6%2BaaM77tU7EICRzbLf1qtj8rW1jkplEIk%2BL9EqEwvxKRnRcv1VT%2BigGu6%2BjBU&X-Amz-Signature=b0cef190744de158e3c519ab36714c75a17ee36f84e0ed6227799b734610a2a4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
