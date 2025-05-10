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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CPL4UAH%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T131654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDipYCBHuvCy96Irj6n89b590iAeAuWxIFyqZ1G1olS8QIgFL5GL7osn9%2FYig3PIrmAx%2FePAl4UV%2BpfZTVIPkNd0zgqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOoL0lvr5kfF1nnSSrcAystIElrWqGBQc4NwUTxjaPDSLXHz1R1xCagmsnFWcao%2BAvZxAT6vbiHUhSHQyIKDi3BXiUOIz8SO9W68rW1iNJhcnZ7p%2BQ4v%2B7vVwo3LfAzzxx7SSXeUvMZefBvie9RUBODKY8W65aN%2FPwm3BnQ6cT%2B6QsRwoFupJ9PJcf4YbVRpY%2BFY2z6d%2BVvBerDdmuDxOXNMJqLXZ78rxw8Ic2AKhvZ%2FsA9S%2Bd7%2FFe%2FmqJumY2XqxB4ZKnhVbZx0FHmJOKYlJwx1vSJU%2BoCM1Ar8K%2Fa305AF7TJdPLKm%2BYWajXZEnN1ilCCBvpRb6hYZWVAERnuqCNlh2NWlOl5IOKSbBOTR4RHirBbjzRF0GzYyv9UK6vsra9iI5Z4BJu3byReSyZepCzdJVGEvvXuy%2BuSLD3%2Ffk6dNqIB%2Fq5Hr7jOaBvWyAVeOcxQy1z%2B2JoLEi4aB%2Bm9Ruzxz5RXdDY4fIAI50nhF2EOXVC%2FTsDp7ztZjdbec7i%2FOW263ODZSOoY7g09z60uUTRakGt2SW0WSWJ%2BXD%2BennrwWb6pwVzYkAspFubvhPZz4bxOI5H7iodCw4oe96xLQjEeDHVzaOeBNu21Hh%2F3euC1G9ejW%2B7CAs0geAo3942a4GD9%2FErOcfBUOCSWMMGP%2FMAGOqUBCqNW4lw396pgs6ci9gLGjjyeta7Eyl0qwh5me9VNuAdIEA6In7TqYs2eaUVa7WmdSZrZEVsMEbGQQhhV8HqfJnk4%2FfoqFaOQEud4kW7PwOIYUyMPRVULGK52YOANrZwvyLNHzSVP%2Fv8aVeBP2DqynwNYYIvin%2BHJEwKIzYiKK4QGtyCNxHM1lYjX%2BsM7LcHLHYPQMyyH48JwHat1NKwn78iq4FI6&X-Amz-Signature=89b5116101ccfdf4fdfe6af8111297f7600b2561171fd5d3f133c2c9ffc08208&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CPL4UAH%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T131654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDipYCBHuvCy96Irj6n89b590iAeAuWxIFyqZ1G1olS8QIgFL5GL7osn9%2FYig3PIrmAx%2FePAl4UV%2BpfZTVIPkNd0zgqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOoL0lvr5kfF1nnSSrcAystIElrWqGBQc4NwUTxjaPDSLXHz1R1xCagmsnFWcao%2BAvZxAT6vbiHUhSHQyIKDi3BXiUOIz8SO9W68rW1iNJhcnZ7p%2BQ4v%2B7vVwo3LfAzzxx7SSXeUvMZefBvie9RUBODKY8W65aN%2FPwm3BnQ6cT%2B6QsRwoFupJ9PJcf4YbVRpY%2BFY2z6d%2BVvBerDdmuDxOXNMJqLXZ78rxw8Ic2AKhvZ%2FsA9S%2Bd7%2FFe%2FmqJumY2XqxB4ZKnhVbZx0FHmJOKYlJwx1vSJU%2BoCM1Ar8K%2Fa305AF7TJdPLKm%2BYWajXZEnN1ilCCBvpRb6hYZWVAERnuqCNlh2NWlOl5IOKSbBOTR4RHirBbjzRF0GzYyv9UK6vsra9iI5Z4BJu3byReSyZepCzdJVGEvvXuy%2BuSLD3%2Ffk6dNqIB%2Fq5Hr7jOaBvWyAVeOcxQy1z%2B2JoLEi4aB%2Bm9Ruzxz5RXdDY4fIAI50nhF2EOXVC%2FTsDp7ztZjdbec7i%2FOW263ODZSOoY7g09z60uUTRakGt2SW0WSWJ%2BXD%2BennrwWb6pwVzYkAspFubvhPZz4bxOI5H7iodCw4oe96xLQjEeDHVzaOeBNu21Hh%2F3euC1G9ejW%2B7CAs0geAo3942a4GD9%2FErOcfBUOCSWMMGP%2FMAGOqUBCqNW4lw396pgs6ci9gLGjjyeta7Eyl0qwh5me9VNuAdIEA6In7TqYs2eaUVa7WmdSZrZEVsMEbGQQhhV8HqfJnk4%2FfoqFaOQEud4kW7PwOIYUyMPRVULGK52YOANrZwvyLNHzSVP%2Fv8aVeBP2DqynwNYYIvin%2BHJEwKIzYiKK4QGtyCNxHM1lYjX%2BsM7LcHLHYPQMyyH48JwHat1NKwn78iq4FI6&X-Amz-Signature=de47b240e2c857be6d71328c840fc29bf8766ef8a1d94d59677f1dd2d8c1b3b5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CPL4UAH%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T131654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDipYCBHuvCy96Irj6n89b590iAeAuWxIFyqZ1G1olS8QIgFL5GL7osn9%2FYig3PIrmAx%2FePAl4UV%2BpfZTVIPkNd0zgqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOoL0lvr5kfF1nnSSrcAystIElrWqGBQc4NwUTxjaPDSLXHz1R1xCagmsnFWcao%2BAvZxAT6vbiHUhSHQyIKDi3BXiUOIz8SO9W68rW1iNJhcnZ7p%2BQ4v%2B7vVwo3LfAzzxx7SSXeUvMZefBvie9RUBODKY8W65aN%2FPwm3BnQ6cT%2B6QsRwoFupJ9PJcf4YbVRpY%2BFY2z6d%2BVvBerDdmuDxOXNMJqLXZ78rxw8Ic2AKhvZ%2FsA9S%2Bd7%2FFe%2FmqJumY2XqxB4ZKnhVbZx0FHmJOKYlJwx1vSJU%2BoCM1Ar8K%2Fa305AF7TJdPLKm%2BYWajXZEnN1ilCCBvpRb6hYZWVAERnuqCNlh2NWlOl5IOKSbBOTR4RHirBbjzRF0GzYyv9UK6vsra9iI5Z4BJu3byReSyZepCzdJVGEvvXuy%2BuSLD3%2Ffk6dNqIB%2Fq5Hr7jOaBvWyAVeOcxQy1z%2B2JoLEi4aB%2Bm9Ruzxz5RXdDY4fIAI50nhF2EOXVC%2FTsDp7ztZjdbec7i%2FOW263ODZSOoY7g09z60uUTRakGt2SW0WSWJ%2BXD%2BennrwWb6pwVzYkAspFubvhPZz4bxOI5H7iodCw4oe96xLQjEeDHVzaOeBNu21Hh%2F3euC1G9ejW%2B7CAs0geAo3942a4GD9%2FErOcfBUOCSWMMGP%2FMAGOqUBCqNW4lw396pgs6ci9gLGjjyeta7Eyl0qwh5me9VNuAdIEA6In7TqYs2eaUVa7WmdSZrZEVsMEbGQQhhV8HqfJnk4%2FfoqFaOQEud4kW7PwOIYUyMPRVULGK52YOANrZwvyLNHzSVP%2Fv8aVeBP2DqynwNYYIvin%2BHJEwKIzYiKK4QGtyCNxHM1lYjX%2BsM7LcHLHYPQMyyH48JwHat1NKwn78iq4FI6&X-Amz-Signature=f21892ad58e2c1df4f72e227bd8c8b7c618f176b9c0fd9dc659ee1d316b0e4f5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
