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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UTQOURO%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDtM%2Fvpl%2Fkoaull8abatAuwUaYTKaAEuPRpTvTsjYzpjAIhAKloPpexRMSONTbabZQ%2FKdTblUk0%2FJl7YNp65AR%2FqzCmKv8DCGkQABoMNjM3NDIzMTgzODA1IgzYJMqXIIE05dOuVeUq3AMLCIAh0lw%2FniGAEq1pykCSP9KI2EfIbJ%2BHURvs%2FEyltOLvnFOsh%2FLEu9epxhff4pNoEqtD3fYRNidbU0F6L7vVjt9G5A7PyRS4jMmrGiwU0A45YbLBwNzCDYwSX4WMe1jRhmH0teSBfjTsB6%2FyqWuuZzV6VvOYtHaLHMggfEe3ctJ53OFJFlRhAdNnpqT54f3O6NoXVyOxtW%2FTRfVifbOSOot8zVdXgfEfFyF8QoLtE96XKCgFU6wdGeuViUbJy441ecBWOBbEZyRKEd7VGd0CucvX8IttwtnneAdjKnNEjgZQB%2BLxRqEAgMT%2BdogSz46WmlCfpKdnr4%2BGFO5W7Bq8o2icSQnlg1xdssZdQ7qFV%2FSnGh6eeNrbkzFF6665NuE3yH03qc2K4yEHdnVpZWrhafWIOdostFmB7fh%2F3g%2FGVXrAQgEhhTqFcE7PUmdiznX1fXZuwuFXlGxjr%2F%2Fa2kkCz14sT1jF%2BF0SzO1KZ3s75GvhkeN6onTpbeDVhD1mM2M9p%2BJ1K9GzuU0bfXShEc9SPB1elJflrg4IcI6MkTo58VNiH%2FUERTZPsFbDFUpYhFvmtz%2Fj4tUoGTVLhoahrnOpSa3W0NNCrhaeJL6ZCz%2FNLVxc292QKUdLlm9WVTD1m5W9BjqkAe2W8OM%2FMbrm%2FCitzZ4GD%2F2IhgtmjsXc0a3uUwz38tMxYc3t77JoW4MiiGG5sxoth5v2Jd4FdH5F8HARm2mcmdcxYsdRQ6tPnL9HrH8cLYywe3lFuP9QH0%2BnlMM51P3LgXgUFndOB4me4Ojt%2F2YrG9L%2F0DBxVwrvniu%2BqOxsyRj9W%2FOQ58F4yctcmWcKBjxPNAoS7QpCa1OgQU7Np%2BcLF5BH8KCY&X-Amz-Signature=70e2eaff40000b62d92be0c379a3ed4d32ff24e012bc595aa6b59bf0a9b0972a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UTQOURO%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDtM%2Fvpl%2Fkoaull8abatAuwUaYTKaAEuPRpTvTsjYzpjAIhAKloPpexRMSONTbabZQ%2FKdTblUk0%2FJl7YNp65AR%2FqzCmKv8DCGkQABoMNjM3NDIzMTgzODA1IgzYJMqXIIE05dOuVeUq3AMLCIAh0lw%2FniGAEq1pykCSP9KI2EfIbJ%2BHURvs%2FEyltOLvnFOsh%2FLEu9epxhff4pNoEqtD3fYRNidbU0F6L7vVjt9G5A7PyRS4jMmrGiwU0A45YbLBwNzCDYwSX4WMe1jRhmH0teSBfjTsB6%2FyqWuuZzV6VvOYtHaLHMggfEe3ctJ53OFJFlRhAdNnpqT54f3O6NoXVyOxtW%2FTRfVifbOSOot8zVdXgfEfFyF8QoLtE96XKCgFU6wdGeuViUbJy441ecBWOBbEZyRKEd7VGd0CucvX8IttwtnneAdjKnNEjgZQB%2BLxRqEAgMT%2BdogSz46WmlCfpKdnr4%2BGFO5W7Bq8o2icSQnlg1xdssZdQ7qFV%2FSnGh6eeNrbkzFF6665NuE3yH03qc2K4yEHdnVpZWrhafWIOdostFmB7fh%2F3g%2FGVXrAQgEhhTqFcE7PUmdiznX1fXZuwuFXlGxjr%2F%2Fa2kkCz14sT1jF%2BF0SzO1KZ3s75GvhkeN6onTpbeDVhD1mM2M9p%2BJ1K9GzuU0bfXShEc9SPB1elJflrg4IcI6MkTo58VNiH%2FUERTZPsFbDFUpYhFvmtz%2Fj4tUoGTVLhoahrnOpSa3W0NNCrhaeJL6ZCz%2FNLVxc292QKUdLlm9WVTD1m5W9BjqkAe2W8OM%2FMbrm%2FCitzZ4GD%2F2IhgtmjsXc0a3uUwz38tMxYc3t77JoW4MiiGG5sxoth5v2Jd4FdH5F8HARm2mcmdcxYsdRQ6tPnL9HrH8cLYywe3lFuP9QH0%2BnlMM51P3LgXgUFndOB4me4Ojt%2F2YrG9L%2F0DBxVwrvniu%2BqOxsyRj9W%2FOQ58F4yctcmWcKBjxPNAoS7QpCa1OgQU7Np%2BcLF5BH8KCY&X-Amz-Signature=05c906339ace9f1fac81363b05a0ecf684205a4f3a97ee129f77fe5e3a6e84d0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UTQOURO%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDtM%2Fvpl%2Fkoaull8abatAuwUaYTKaAEuPRpTvTsjYzpjAIhAKloPpexRMSONTbabZQ%2FKdTblUk0%2FJl7YNp65AR%2FqzCmKv8DCGkQABoMNjM3NDIzMTgzODA1IgzYJMqXIIE05dOuVeUq3AMLCIAh0lw%2FniGAEq1pykCSP9KI2EfIbJ%2BHURvs%2FEyltOLvnFOsh%2FLEu9epxhff4pNoEqtD3fYRNidbU0F6L7vVjt9G5A7PyRS4jMmrGiwU0A45YbLBwNzCDYwSX4WMe1jRhmH0teSBfjTsB6%2FyqWuuZzV6VvOYtHaLHMggfEe3ctJ53OFJFlRhAdNnpqT54f3O6NoXVyOxtW%2FTRfVifbOSOot8zVdXgfEfFyF8QoLtE96XKCgFU6wdGeuViUbJy441ecBWOBbEZyRKEd7VGd0CucvX8IttwtnneAdjKnNEjgZQB%2BLxRqEAgMT%2BdogSz46WmlCfpKdnr4%2BGFO5W7Bq8o2icSQnlg1xdssZdQ7qFV%2FSnGh6eeNrbkzFF6665NuE3yH03qc2K4yEHdnVpZWrhafWIOdostFmB7fh%2F3g%2FGVXrAQgEhhTqFcE7PUmdiznX1fXZuwuFXlGxjr%2F%2Fa2kkCz14sT1jF%2BF0SzO1KZ3s75GvhkeN6onTpbeDVhD1mM2M9p%2BJ1K9GzuU0bfXShEc9SPB1elJflrg4IcI6MkTo58VNiH%2FUERTZPsFbDFUpYhFvmtz%2Fj4tUoGTVLhoahrnOpSa3W0NNCrhaeJL6ZCz%2FNLVxc292QKUdLlm9WVTD1m5W9BjqkAe2W8OM%2FMbrm%2FCitzZ4GD%2F2IhgtmjsXc0a3uUwz38tMxYc3t77JoW4MiiGG5sxoth5v2Jd4FdH5F8HARm2mcmdcxYsdRQ6tPnL9HrH8cLYywe3lFuP9QH0%2BnlMM51P3LgXgUFndOB4me4Ojt%2F2YrG9L%2F0DBxVwrvniu%2BqOxsyRj9W%2FOQ58F4yctcmWcKBjxPNAoS7QpCa1OgQU7Np%2BcLF5BH8KCY&X-Amz-Signature=7951a2fdcd36f0c9b89d9a87c802296dec3d001f3e6038aa879b228172bd33b7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
