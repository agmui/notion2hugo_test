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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJHZKITY%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T090754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFM2HxYvxBcxKzytZpf%2B0aJmLSAojaTJzFqWDuKNpRbhAiA3zGEOlqRGtX60yaMkG%2B0RLWTV5cexdYOerHMeCreMrSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2737SUi4J7jvKxCbKtwDswPPR6XAXdd58DX58BwslLNc3%2FI%2FOEZPARvvGuJ8JZ8cxQIExY9%2FCJguUagt%2BEp6EFMEXTi3UCUXyKYNvpiVvKH%2F12kb15qTT9%2BECKji7HiVmPjVIgnCz9a0%2Fs3OuqTfwWmVr0zGcNS2dMV5YIeKNywE9bMxdhqYgWkF7tLb%2Fx9CtqQBO6PFlEpzu0Tw6Imulr%2Bvg5%2FtkmrlpfJZEFb%2BFq59O9fFC6d2ai1N5bM6%2FqMFoqFmH1LP%2BhhXU7F9Nzw4YMiCY%2F7Nv64IePhR6ltwcrTY6Mp%2Bq1wZyjXoHO276YD8476JXVs2SdECryOY1jkpcO5ZhRMmXgZGA1Iu4kJmgWa%2BS6Wmx4CLOjyf78A5%2BUb6zAs9dYXt6pwi0yf%2FzP8kGV51tXbRB94Prb%2FEX9m65LeNNGJY8UA3uM9GNLGZ6NLa4DLH3h%2FPkrCwivRqO1zIxIWAE7h%2BNytO24oxIH6lS1zFC6tu1ILklamIwBxrArhb1OASqecTlWzt%2FkUM0vyIBupy2Fekvr2k5v0gDWVSEZgeuW%2FlKgsgLiGN9v3v4eQHjx6wTUqOLH2rTgFLWTaHuO0z5WKG6lZR4o%2FiI%2Bpx3Htf8ASthYWwAVSxIeusFPQzp9OJYVNt62cv1Egww5zyvAY6pgHlB%2Fx18Dwz6kOnzo%2B8FBxj%2BoZYojkKiRM3PZOqvPMEzPLaCYJRa0Zo0rDZdCUVHAp21Al6X5sXX1UuYHDQ%2FdHytQTSUng%2FEPlIiTQj7J7MpMtgop2pesMjb4jyq8MKhx9Ag70Ay2QfKY9Ew3WMJJ6jrAv1NhB1dkFkAh%2BCCi6iMGqKWwJRK%2FrwYqzu7woWA15B3TCSEZtAO2yo1H2eTskB1WsCKHl3&X-Amz-Signature=c49e377eeabfe443fa2c39675d1fe576278c1808c0a78a0c52d355ff8fd996f9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJHZKITY%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T090754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFM2HxYvxBcxKzytZpf%2B0aJmLSAojaTJzFqWDuKNpRbhAiA3zGEOlqRGtX60yaMkG%2B0RLWTV5cexdYOerHMeCreMrSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2737SUi4J7jvKxCbKtwDswPPR6XAXdd58DX58BwslLNc3%2FI%2FOEZPARvvGuJ8JZ8cxQIExY9%2FCJguUagt%2BEp6EFMEXTi3UCUXyKYNvpiVvKH%2F12kb15qTT9%2BECKji7HiVmPjVIgnCz9a0%2Fs3OuqTfwWmVr0zGcNS2dMV5YIeKNywE9bMxdhqYgWkF7tLb%2Fx9CtqQBO6PFlEpzu0Tw6Imulr%2Bvg5%2FtkmrlpfJZEFb%2BFq59O9fFC6d2ai1N5bM6%2FqMFoqFmH1LP%2BhhXU7F9Nzw4YMiCY%2F7Nv64IePhR6ltwcrTY6Mp%2Bq1wZyjXoHO276YD8476JXVs2SdECryOY1jkpcO5ZhRMmXgZGA1Iu4kJmgWa%2BS6Wmx4CLOjyf78A5%2BUb6zAs9dYXt6pwi0yf%2FzP8kGV51tXbRB94Prb%2FEX9m65LeNNGJY8UA3uM9GNLGZ6NLa4DLH3h%2FPkrCwivRqO1zIxIWAE7h%2BNytO24oxIH6lS1zFC6tu1ILklamIwBxrArhb1OASqecTlWzt%2FkUM0vyIBupy2Fekvr2k5v0gDWVSEZgeuW%2FlKgsgLiGN9v3v4eQHjx6wTUqOLH2rTgFLWTaHuO0z5WKG6lZR4o%2FiI%2Bpx3Htf8ASthYWwAVSxIeusFPQzp9OJYVNt62cv1Egww5zyvAY6pgHlB%2Fx18Dwz6kOnzo%2B8FBxj%2BoZYojkKiRM3PZOqvPMEzPLaCYJRa0Zo0rDZdCUVHAp21Al6X5sXX1UuYHDQ%2FdHytQTSUng%2FEPlIiTQj7J7MpMtgop2pesMjb4jyq8MKhx9Ag70Ay2QfKY9Ew3WMJJ6jrAv1NhB1dkFkAh%2BCCi6iMGqKWwJRK%2FrwYqzu7woWA15B3TCSEZtAO2yo1H2eTskB1WsCKHl3&X-Amz-Signature=70502467f475b2c8f32e3d55dbf2dec0dc68cb04e4a4fb8aabcbec266547f36d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJHZKITY%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T090754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFM2HxYvxBcxKzytZpf%2B0aJmLSAojaTJzFqWDuKNpRbhAiA3zGEOlqRGtX60yaMkG%2B0RLWTV5cexdYOerHMeCreMrSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2737SUi4J7jvKxCbKtwDswPPR6XAXdd58DX58BwslLNc3%2FI%2FOEZPARvvGuJ8JZ8cxQIExY9%2FCJguUagt%2BEp6EFMEXTi3UCUXyKYNvpiVvKH%2F12kb15qTT9%2BECKji7HiVmPjVIgnCz9a0%2Fs3OuqTfwWmVr0zGcNS2dMV5YIeKNywE9bMxdhqYgWkF7tLb%2Fx9CtqQBO6PFlEpzu0Tw6Imulr%2Bvg5%2FtkmrlpfJZEFb%2BFq59O9fFC6d2ai1N5bM6%2FqMFoqFmH1LP%2BhhXU7F9Nzw4YMiCY%2F7Nv64IePhR6ltwcrTY6Mp%2Bq1wZyjXoHO276YD8476JXVs2SdECryOY1jkpcO5ZhRMmXgZGA1Iu4kJmgWa%2BS6Wmx4CLOjyf78A5%2BUb6zAs9dYXt6pwi0yf%2FzP8kGV51tXbRB94Prb%2FEX9m65LeNNGJY8UA3uM9GNLGZ6NLa4DLH3h%2FPkrCwivRqO1zIxIWAE7h%2BNytO24oxIH6lS1zFC6tu1ILklamIwBxrArhb1OASqecTlWzt%2FkUM0vyIBupy2Fekvr2k5v0gDWVSEZgeuW%2FlKgsgLiGN9v3v4eQHjx6wTUqOLH2rTgFLWTaHuO0z5WKG6lZR4o%2FiI%2Bpx3Htf8ASthYWwAVSxIeusFPQzp9OJYVNt62cv1Egww5zyvAY6pgHlB%2Fx18Dwz6kOnzo%2B8FBxj%2BoZYojkKiRM3PZOqvPMEzPLaCYJRa0Zo0rDZdCUVHAp21Al6X5sXX1UuYHDQ%2FdHytQTSUng%2FEPlIiTQj7J7MpMtgop2pesMjb4jyq8MKhx9Ag70Ay2QfKY9Ew3WMJJ6jrAv1NhB1dkFkAh%2BCCi6iMGqKWwJRK%2FrwYqzu7woWA15B3TCSEZtAO2yo1H2eTskB1WsCKHl3&X-Amz-Signature=c0e993dee045179f11375d022e3b8142f937c95427e5f868e6ddfc43531ae3dd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
