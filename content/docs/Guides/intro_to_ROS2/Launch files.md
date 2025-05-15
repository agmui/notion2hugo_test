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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMXWYN4E%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCNUh2wa0uqInX2UdV%2FuInVASJEWYXmDd4WirTY63N39gIhAIxFXE%2BzzGVGUDQ6I6g%2BNSnMVtDAoBQUpygFz%2BXO1XZNKv8DCDMQABoMNjM3NDIzMTgzODA1IgzwBjEx9X%2BwoZiYDj4q3ANU08F2TxzddyZmAVeRUj5qrh5lyf3omXq7bA9VJsaBwxLzzjOtmmcimwFRlUZA7nwWrriQaUguTFfJSlbeMOFtUoLFW5aZar6EZqAs9NrcHhPT9QmYqL5QTWmZmhXqnbGakksPwgYPvY4f7La5ywMUJEIOIhGuHg6%2F%2BfnXulIMKqKrCYywTAb0oMOyFedWAbAEhiKVE%2F%2BsbU%2BZ8adIZN1jUGHf6vENgIKZVPwJIZLxMUPTcejl2NAITrwZ5khV1RqdQFerDPb6fqXRnXVLoJBmkkdVkXHxfrI%2FrAcNaanNKPWy%2B17WBvbo63vrUx3djU1dmfaW%2B%2BJYNhCAh9pYZElCJcrNFb8Bz6PLkFUU1nCCgeLKc35%2FntgoFPmxakoHwaFWKe64KYodaYW5KljwaRoPGnEDMwjADM8wa7paYycnZ9ws71KLC7JCqqW%2Fae6pImbJqJcWxrayoh5FEztml6BcbrZ8m9wwg%2BB3xfAaqtSTTT5bH317uPsblJdLz8jEh2elyRwY%2FfHWuXUWYCZVSBRZiDjGJtakA1X8nVeFap9tfjlpMbgHtwiaxZTETM%2FyNmGzoftprQ44dzrFlkFwG9%2FXmW%2BNi1%2Ba7siFn4VdpZGLQw%2FNzb%2B0lNjxposMRzDv35jBBjqkAVqk2UKkPa7Hx4hTcLNcWMeC%2F5z949r9HnizA2OJXnXIjRstRxJcaql3oZvWidvUNsZCtKe8KLuGqh7iUML4epvVmldtbT1HMEZjcd1sUY0nTjpNREHXa3il%2BErC1OHc75vsbHBMjATIpKwoY%2Fx69KCZxOek%2FO0ge716OJv1PpIX4%2FLOCvxvmMLQKKZl9556pknlY%2F8LVfo9%2B%2FpkGQXjs85t0rmN&X-Amz-Signature=c84094c836d1fa1943291e520b5c09d9368563c9005ccae3b03bfa5010859b60&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMXWYN4E%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCNUh2wa0uqInX2UdV%2FuInVASJEWYXmDd4WirTY63N39gIhAIxFXE%2BzzGVGUDQ6I6g%2BNSnMVtDAoBQUpygFz%2BXO1XZNKv8DCDMQABoMNjM3NDIzMTgzODA1IgzwBjEx9X%2BwoZiYDj4q3ANU08F2TxzddyZmAVeRUj5qrh5lyf3omXq7bA9VJsaBwxLzzjOtmmcimwFRlUZA7nwWrriQaUguTFfJSlbeMOFtUoLFW5aZar6EZqAs9NrcHhPT9QmYqL5QTWmZmhXqnbGakksPwgYPvY4f7La5ywMUJEIOIhGuHg6%2F%2BfnXulIMKqKrCYywTAb0oMOyFedWAbAEhiKVE%2F%2BsbU%2BZ8adIZN1jUGHf6vENgIKZVPwJIZLxMUPTcejl2NAITrwZ5khV1RqdQFerDPb6fqXRnXVLoJBmkkdVkXHxfrI%2FrAcNaanNKPWy%2B17WBvbo63vrUx3djU1dmfaW%2B%2BJYNhCAh9pYZElCJcrNFb8Bz6PLkFUU1nCCgeLKc35%2FntgoFPmxakoHwaFWKe64KYodaYW5KljwaRoPGnEDMwjADM8wa7paYycnZ9ws71KLC7JCqqW%2Fae6pImbJqJcWxrayoh5FEztml6BcbrZ8m9wwg%2BB3xfAaqtSTTT5bH317uPsblJdLz8jEh2elyRwY%2FfHWuXUWYCZVSBRZiDjGJtakA1X8nVeFap9tfjlpMbgHtwiaxZTETM%2FyNmGzoftprQ44dzrFlkFwG9%2FXmW%2BNi1%2Ba7siFn4VdpZGLQw%2FNzb%2B0lNjxposMRzDv35jBBjqkAVqk2UKkPa7Hx4hTcLNcWMeC%2F5z949r9HnizA2OJXnXIjRstRxJcaql3oZvWidvUNsZCtKe8KLuGqh7iUML4epvVmldtbT1HMEZjcd1sUY0nTjpNREHXa3il%2BErC1OHc75vsbHBMjATIpKwoY%2Fx69KCZxOek%2FO0ge716OJv1PpIX4%2FLOCvxvmMLQKKZl9556pknlY%2F8LVfo9%2B%2FpkGQXjs85t0rmN&X-Amz-Signature=9a62484876b92a4b792b1c177e3f4319ea6660ca1efa08c93f56c5239bb996ce&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMXWYN4E%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCNUh2wa0uqInX2UdV%2FuInVASJEWYXmDd4WirTY63N39gIhAIxFXE%2BzzGVGUDQ6I6g%2BNSnMVtDAoBQUpygFz%2BXO1XZNKv8DCDMQABoMNjM3NDIzMTgzODA1IgzwBjEx9X%2BwoZiYDj4q3ANU08F2TxzddyZmAVeRUj5qrh5lyf3omXq7bA9VJsaBwxLzzjOtmmcimwFRlUZA7nwWrriQaUguTFfJSlbeMOFtUoLFW5aZar6EZqAs9NrcHhPT9QmYqL5QTWmZmhXqnbGakksPwgYPvY4f7La5ywMUJEIOIhGuHg6%2F%2BfnXulIMKqKrCYywTAb0oMOyFedWAbAEhiKVE%2F%2BsbU%2BZ8adIZN1jUGHf6vENgIKZVPwJIZLxMUPTcejl2NAITrwZ5khV1RqdQFerDPb6fqXRnXVLoJBmkkdVkXHxfrI%2FrAcNaanNKPWy%2B17WBvbo63vrUx3djU1dmfaW%2B%2BJYNhCAh9pYZElCJcrNFb8Bz6PLkFUU1nCCgeLKc35%2FntgoFPmxakoHwaFWKe64KYodaYW5KljwaRoPGnEDMwjADM8wa7paYycnZ9ws71KLC7JCqqW%2Fae6pImbJqJcWxrayoh5FEztml6BcbrZ8m9wwg%2BB3xfAaqtSTTT5bH317uPsblJdLz8jEh2elyRwY%2FfHWuXUWYCZVSBRZiDjGJtakA1X8nVeFap9tfjlpMbgHtwiaxZTETM%2FyNmGzoftprQ44dzrFlkFwG9%2FXmW%2BNi1%2Ba7siFn4VdpZGLQw%2FNzb%2B0lNjxposMRzDv35jBBjqkAVqk2UKkPa7Hx4hTcLNcWMeC%2F5z949r9HnizA2OJXnXIjRstRxJcaql3oZvWidvUNsZCtKe8KLuGqh7iUML4epvVmldtbT1HMEZjcd1sUY0nTjpNREHXa3il%2BErC1OHc75vsbHBMjATIpKwoY%2Fx69KCZxOek%2FO0ge716OJv1PpIX4%2FLOCvxvmMLQKKZl9556pknlY%2F8LVfo9%2B%2FpkGQXjs85t0rmN&X-Amz-Signature=35d385bac52bd00a6b6fc81083142d14c235ce6e14287de5fae41d94cba290ad&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
