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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZYVO2VH%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACC7mPryst2P0iG9W4oLerOdL1MZvCCIvsisugnnWqCAiBlJtvfsvhfi55AtWlWIZ8KlEx0zlhVzC6%2Bdw0y9ttaciqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyaFEJZV%2BKDKE38nwKtwDU9M6%2FQ2t511a2BE6OJE35z3YdTM3iWaMBVqo933A9RRGpqlZ1YIPFChxoqJOHDKp3p2Nl30VT7fJdVJ30q5SxuxEmj2JT2L4tvgWzFu3jAVOB2niPy1dNT2KidYJSOAeeVg%2F6wjOXekqO1NOT7tgcng5lx7jE4BwtEeG83uhyb3VNWRnHsAX4%2BPUumLzB7jHFaZYzcDqCGDfO3OEsflPjqGv%2FZsoWeozS6%2BWtGXyrAw3qAGYMY1sKbBJtXf9Zoq0yU2F3bIWo7BkMwaNhJPqoCNWydYeySns1ZQTk3ATjY%2FDiwGVAYUYQ1Tpe7JE7J5MiEir6Q5T3kwNuVXl4EygjtaT22qJ%2B8tC9x3aNPNiHmPrl7o7m9hcEClKgicoEXfE6LPWvNeZN65dpvT4PHsXUwxPYLDSHg%2BAqDlLDowJd8bBBn6U3Pscug%2FpN7jZ0S6SH11OTjRdhuvDF76le8NOx0m8DIIperU7Bia4vEU6DL2ZiadjECJQGJq6YbpS3mkoZ5rJcaTw3u1Dx7yNAgp6U%2BedryrGjv6LNn%2BA%2FkR9s%2Fv%2F8LOy8GGJzRXEHLp8l8kIO0VNSiTsvodtK1ip2r18vybxV7m0pseDSR0vhKevs9bDhzef1xnQQqCuSzgw4P6FvwY6pgF2pnEwo6hnEUuCXu8o3kTCxSnQ7sqXCEddgnuapGgdwZVR4rx90z3jVKvLl5Gy%2BSLM2Gcg0AlQAJ9%2BTrZFzc8wgylCo8xs2NV5UTNMOfyETvRvh2oFxbMFgDNXGtKVFemWXknJ2DDkeiUmM7yvRE8wbHGKUywrz%2FWzfCp2pyvG%2BD8S5YA3T%2B0dc24VC%2FfFf6oT1JXjNODFMiS92LXIdw8DWeHzvaYe&X-Amz-Signature=4b77a8d41c5b6e25718123f6d8ac5a0f16c87d9e0194860a65596d24d6f3f74e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZYVO2VH%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACC7mPryst2P0iG9W4oLerOdL1MZvCCIvsisugnnWqCAiBlJtvfsvhfi55AtWlWIZ8KlEx0zlhVzC6%2Bdw0y9ttaciqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyaFEJZV%2BKDKE38nwKtwDU9M6%2FQ2t511a2BE6OJE35z3YdTM3iWaMBVqo933A9RRGpqlZ1YIPFChxoqJOHDKp3p2Nl30VT7fJdVJ30q5SxuxEmj2JT2L4tvgWzFu3jAVOB2niPy1dNT2KidYJSOAeeVg%2F6wjOXekqO1NOT7tgcng5lx7jE4BwtEeG83uhyb3VNWRnHsAX4%2BPUumLzB7jHFaZYzcDqCGDfO3OEsflPjqGv%2FZsoWeozS6%2BWtGXyrAw3qAGYMY1sKbBJtXf9Zoq0yU2F3bIWo7BkMwaNhJPqoCNWydYeySns1ZQTk3ATjY%2FDiwGVAYUYQ1Tpe7JE7J5MiEir6Q5T3kwNuVXl4EygjtaT22qJ%2B8tC9x3aNPNiHmPrl7o7m9hcEClKgicoEXfE6LPWvNeZN65dpvT4PHsXUwxPYLDSHg%2BAqDlLDowJd8bBBn6U3Pscug%2FpN7jZ0S6SH11OTjRdhuvDF76le8NOx0m8DIIperU7Bia4vEU6DL2ZiadjECJQGJq6YbpS3mkoZ5rJcaTw3u1Dx7yNAgp6U%2BedryrGjv6LNn%2BA%2FkR9s%2Fv%2F8LOy8GGJzRXEHLp8l8kIO0VNSiTsvodtK1ip2r18vybxV7m0pseDSR0vhKevs9bDhzef1xnQQqCuSzgw4P6FvwY6pgF2pnEwo6hnEUuCXu8o3kTCxSnQ7sqXCEddgnuapGgdwZVR4rx90z3jVKvLl5Gy%2BSLM2Gcg0AlQAJ9%2BTrZFzc8wgylCo8xs2NV5UTNMOfyETvRvh2oFxbMFgDNXGtKVFemWXknJ2DDkeiUmM7yvRE8wbHGKUywrz%2FWzfCp2pyvG%2BD8S5YA3T%2B0dc24VC%2FfFf6oT1JXjNODFMiS92LXIdw8DWeHzvaYe&X-Amz-Signature=c4bcedd47922abecd87e4f26602a3bf767d4b6c6538e08d5b19a6dd5f8936cc8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZYVO2VH%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACC7mPryst2P0iG9W4oLerOdL1MZvCCIvsisugnnWqCAiBlJtvfsvhfi55AtWlWIZ8KlEx0zlhVzC6%2Bdw0y9ttaciqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyaFEJZV%2BKDKE38nwKtwDU9M6%2FQ2t511a2BE6OJE35z3YdTM3iWaMBVqo933A9RRGpqlZ1YIPFChxoqJOHDKp3p2Nl30VT7fJdVJ30q5SxuxEmj2JT2L4tvgWzFu3jAVOB2niPy1dNT2KidYJSOAeeVg%2F6wjOXekqO1NOT7tgcng5lx7jE4BwtEeG83uhyb3VNWRnHsAX4%2BPUumLzB7jHFaZYzcDqCGDfO3OEsflPjqGv%2FZsoWeozS6%2BWtGXyrAw3qAGYMY1sKbBJtXf9Zoq0yU2F3bIWo7BkMwaNhJPqoCNWydYeySns1ZQTk3ATjY%2FDiwGVAYUYQ1Tpe7JE7J5MiEir6Q5T3kwNuVXl4EygjtaT22qJ%2B8tC9x3aNPNiHmPrl7o7m9hcEClKgicoEXfE6LPWvNeZN65dpvT4PHsXUwxPYLDSHg%2BAqDlLDowJd8bBBn6U3Pscug%2FpN7jZ0S6SH11OTjRdhuvDF76le8NOx0m8DIIperU7Bia4vEU6DL2ZiadjECJQGJq6YbpS3mkoZ5rJcaTw3u1Dx7yNAgp6U%2BedryrGjv6LNn%2BA%2FkR9s%2Fv%2F8LOy8GGJzRXEHLp8l8kIO0VNSiTsvodtK1ip2r18vybxV7m0pseDSR0vhKevs9bDhzef1xnQQqCuSzgw4P6FvwY6pgF2pnEwo6hnEUuCXu8o3kTCxSnQ7sqXCEddgnuapGgdwZVR4rx90z3jVKvLl5Gy%2BSLM2Gcg0AlQAJ9%2BTrZFzc8wgylCo8xs2NV5UTNMOfyETvRvh2oFxbMFgDNXGtKVFemWXknJ2DDkeiUmM7yvRE8wbHGKUywrz%2FWzfCp2pyvG%2BD8S5YA3T%2B0dc24VC%2FfFf6oT1JXjNODFMiS92LXIdw8DWeHzvaYe&X-Amz-Signature=0672a0591247629e5c15079dc9a43a2a4888f6d17d58b56aaca24c59baab0657&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
