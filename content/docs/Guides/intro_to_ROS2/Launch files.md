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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWVXX2W5%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHs3ndz4Bq2oO7g%2B38PrEupHPW60s9mOp7bRwV%2BIaStQIhAIIywjRhD98rKnS0PfTbz26IDvoinL4ejo3sQlETqW%2FbKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igym463uBxnsZDmXfyUq3AOURDbho9zRIr233xvpD8djlAkE8RafHZXuq2DFJRejR6RCVIjaEGWDPsU0jTIkA2lPsn4x9ODSCpMliw9ho2K4rIen7TLqEUvsgxOm4ETBCZGnc3RQC%2Bw5SvHfl8h1Ac5CSDMDZuWZOLF0xS7%2FBYmRlAxBV8%2FxXAmgZXBMRvw0hU9yy4dS%2FatXykMC3vppHzK0e%2FheQMxiRi%2Bf1dzu28MUk%2B8CVGFHwbsTE4thb9FnKSDGsLxg4hXyKq6wIE3yUw03IgMZ1nrECWLZmhxySX8mR8tUy1oGOf7ECHTsX1%2BWO3fttan6s12QjTMWCKoRlQUCZcmhJwzbDP4CpdF9%2FaCZEFDsJpW9jTGpinn5ul%2FKGZybarqpqEUHFhyb27qAsBIJ5MnDOTlMgrlozvdWjHo3%2BlgE7OFNQWodeeLS8JJe1SD4FD8JnJWFvaAqizWynw1tM7nUiPxDnDvRP4ixuKDK3fnUNkmlly4YDY8REi4V0B1PUFQZ5sOTngNYK0VCJKKPkeo%2B%2FdZe1s1yEeLun7J5wqlI8%2Bm%2BSnrX2ArAAxnVQjpU6KLGgeJVYUjr9%2FRVeyITkeeQd4pfHZoekiR4SH%2Fbmn%2BFTXfsD3hPhrpsWXqduphAtDNGa6%2FB%2Fb52rzCQpbK9BjqkAbEbbNqr8UvsdD%2BXMSBPZJK7UrU3vmtU4O2zv5PZ2SPVQq8cUhNRLhkDvxZJGfOEhKfGjim3iOihAkTbYrbLT0fZtyxJakI5v3vg5lHoeiM0e0UK3XIXENJznEKgxyydg83YjqzLiwAlrfVqPLFvGIw5iwkmx4mB1nrVi97hQag21saMMYeSDZjaL2dqKSBwjMpUaPtMMoSiEzjhXPSChnbMJXWB&X-Amz-Signature=2edbb38017d7a2ba65cd9aed798d7e43752f23bb8528729f7031e4a65daaf368&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWVXX2W5%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHs3ndz4Bq2oO7g%2B38PrEupHPW60s9mOp7bRwV%2BIaStQIhAIIywjRhD98rKnS0PfTbz26IDvoinL4ejo3sQlETqW%2FbKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igym463uBxnsZDmXfyUq3AOURDbho9zRIr233xvpD8djlAkE8RafHZXuq2DFJRejR6RCVIjaEGWDPsU0jTIkA2lPsn4x9ODSCpMliw9ho2K4rIen7TLqEUvsgxOm4ETBCZGnc3RQC%2Bw5SvHfl8h1Ac5CSDMDZuWZOLF0xS7%2FBYmRlAxBV8%2FxXAmgZXBMRvw0hU9yy4dS%2FatXykMC3vppHzK0e%2FheQMxiRi%2Bf1dzu28MUk%2B8CVGFHwbsTE4thb9FnKSDGsLxg4hXyKq6wIE3yUw03IgMZ1nrECWLZmhxySX8mR8tUy1oGOf7ECHTsX1%2BWO3fttan6s12QjTMWCKoRlQUCZcmhJwzbDP4CpdF9%2FaCZEFDsJpW9jTGpinn5ul%2FKGZybarqpqEUHFhyb27qAsBIJ5MnDOTlMgrlozvdWjHo3%2BlgE7OFNQWodeeLS8JJe1SD4FD8JnJWFvaAqizWynw1tM7nUiPxDnDvRP4ixuKDK3fnUNkmlly4YDY8REi4V0B1PUFQZ5sOTngNYK0VCJKKPkeo%2B%2FdZe1s1yEeLun7J5wqlI8%2Bm%2BSnrX2ArAAxnVQjpU6KLGgeJVYUjr9%2FRVeyITkeeQd4pfHZoekiR4SH%2Fbmn%2BFTXfsD3hPhrpsWXqduphAtDNGa6%2FB%2Fb52rzCQpbK9BjqkAbEbbNqr8UvsdD%2BXMSBPZJK7UrU3vmtU4O2zv5PZ2SPVQq8cUhNRLhkDvxZJGfOEhKfGjim3iOihAkTbYrbLT0fZtyxJakI5v3vg5lHoeiM0e0UK3XIXENJznEKgxyydg83YjqzLiwAlrfVqPLFvGIw5iwkmx4mB1nrVi97hQag21saMMYeSDZjaL2dqKSBwjMpUaPtMMoSiEzjhXPSChnbMJXWB&X-Amz-Signature=85c0e7e50b4fa230806947a957b55891f9ff3ffc769fad018c7034385015b025&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWVXX2W5%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHs3ndz4Bq2oO7g%2B38PrEupHPW60s9mOp7bRwV%2BIaStQIhAIIywjRhD98rKnS0PfTbz26IDvoinL4ejo3sQlETqW%2FbKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igym463uBxnsZDmXfyUq3AOURDbho9zRIr233xvpD8djlAkE8RafHZXuq2DFJRejR6RCVIjaEGWDPsU0jTIkA2lPsn4x9ODSCpMliw9ho2K4rIen7TLqEUvsgxOm4ETBCZGnc3RQC%2Bw5SvHfl8h1Ac5CSDMDZuWZOLF0xS7%2FBYmRlAxBV8%2FxXAmgZXBMRvw0hU9yy4dS%2FatXykMC3vppHzK0e%2FheQMxiRi%2Bf1dzu28MUk%2B8CVGFHwbsTE4thb9FnKSDGsLxg4hXyKq6wIE3yUw03IgMZ1nrECWLZmhxySX8mR8tUy1oGOf7ECHTsX1%2BWO3fttan6s12QjTMWCKoRlQUCZcmhJwzbDP4CpdF9%2FaCZEFDsJpW9jTGpinn5ul%2FKGZybarqpqEUHFhyb27qAsBIJ5MnDOTlMgrlozvdWjHo3%2BlgE7OFNQWodeeLS8JJe1SD4FD8JnJWFvaAqizWynw1tM7nUiPxDnDvRP4ixuKDK3fnUNkmlly4YDY8REi4V0B1PUFQZ5sOTngNYK0VCJKKPkeo%2B%2FdZe1s1yEeLun7J5wqlI8%2Bm%2BSnrX2ArAAxnVQjpU6KLGgeJVYUjr9%2FRVeyITkeeQd4pfHZoekiR4SH%2Fbmn%2BFTXfsD3hPhrpsWXqduphAtDNGa6%2FB%2Fb52rzCQpbK9BjqkAbEbbNqr8UvsdD%2BXMSBPZJK7UrU3vmtU4O2zv5PZ2SPVQq8cUhNRLhkDvxZJGfOEhKfGjim3iOihAkTbYrbLT0fZtyxJakI5v3vg5lHoeiM0e0UK3XIXENJznEKgxyydg83YjqzLiwAlrfVqPLFvGIw5iwkmx4mB1nrVi97hQag21saMMYeSDZjaL2dqKSBwjMpUaPtMMoSiEzjhXPSChnbMJXWB&X-Amz-Signature=6de94de8ee03604f727ad999adf64324709d97da4b7a55d1d6c85e71111a8cec&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
