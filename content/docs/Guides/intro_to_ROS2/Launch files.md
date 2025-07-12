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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSWZQVQM%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T004459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHktVgVcMX%2FU1vCynZcFEBkHv2s6S2fVrk2ubWq3BdXTAiARN3dUShCeXUuwDDiG9Lr6PffJmu4ehPoCE4FVmLv16CqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjgQkTkP8qU455HWUKtwDAET1zsWQV4YuJMMULFEzcHg28yNJ6VxfsYj1V%2B8S590bjMOfakif8ZZPW5vaacvCLdET5ZM6iUIGdvI7IcDkvpsHAMxpzCj8Z7Tm%2BedMzI5WM%2F5m9qPV9U%2B8MyTuzsvXEjja3lHKLCf9kh02MpjrCHhEzNot18DRuxExNGNaZvnNfgfk44Da248Bnw%2FQiwLsRqqdCCzefnz9SkpYUzCq1lrj00%2BdcEtho8t9L3Bunf8sWf8UaK08qpq3ALSGGe2iW43PKAyYCxAoKKexfE%2BByvKtkVXsb%2FeDbzEvyQA8tkdXVhZIPt3oYC8gsff2LUdKs2DblqVbuLMeIF%2Fba5bDhf3Xs1rZ1KtLvQhrQL4Z3yFGwHoUj8AwsuxS4w7eJCgkgyzNk1lxPjF49JKGFzopaazxZF9u7sj4Z%2BN8AdjLpf%2BMpmSX3J0U524do8HAPh174y7rV4aovPqURp1w3xhPWnyXGKQHYQY3VnDgNLE7CMWA%2BJNfptUPERLWTp9zU2jjDHMk6XwI57yze39rJHYj7mBC1PuXr%2FNt4vwUam33zBun8XnOB%2F0v7xuwfbtaDVm76McpVUYjbXDzCKC1gB8e1lHhyNqZoviA5zpzGV7pqH2MhLwE%2Fs0%2BRQO%2Fn3ww3rXGwwY6pgHqQRQ6hsYpncyxxdEazDdi5U2RGt18BiUnDy4bfK%2BzGRyRpJA2lYVIVF2WXlaKXyEpb3Xx%2B%2FIvCCZkAvw4H%2F%2FLm9Z%2BoXrReMWOgH81aOKdA0NG2zsdWSp0bg0qgi3B2xWVFh%2B0X4svCutwNGYS4kCe2nphJADekKoxTTZFKXmGU6XN9cKfFr0OQARo4KaEuO5FeixOLHVfFjcu7iv%2FOQGlJpPRgvp7&X-Amz-Signature=9a288475ca64ba51618aca01638674d474df9d770b8380ca36212464e49ca917&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSWZQVQM%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T004459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHktVgVcMX%2FU1vCynZcFEBkHv2s6S2fVrk2ubWq3BdXTAiARN3dUShCeXUuwDDiG9Lr6PffJmu4ehPoCE4FVmLv16CqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjgQkTkP8qU455HWUKtwDAET1zsWQV4YuJMMULFEzcHg28yNJ6VxfsYj1V%2B8S590bjMOfakif8ZZPW5vaacvCLdET5ZM6iUIGdvI7IcDkvpsHAMxpzCj8Z7Tm%2BedMzI5WM%2F5m9qPV9U%2B8MyTuzsvXEjja3lHKLCf9kh02MpjrCHhEzNot18DRuxExNGNaZvnNfgfk44Da248Bnw%2FQiwLsRqqdCCzefnz9SkpYUzCq1lrj00%2BdcEtho8t9L3Bunf8sWf8UaK08qpq3ALSGGe2iW43PKAyYCxAoKKexfE%2BByvKtkVXsb%2FeDbzEvyQA8tkdXVhZIPt3oYC8gsff2LUdKs2DblqVbuLMeIF%2Fba5bDhf3Xs1rZ1KtLvQhrQL4Z3yFGwHoUj8AwsuxS4w7eJCgkgyzNk1lxPjF49JKGFzopaazxZF9u7sj4Z%2BN8AdjLpf%2BMpmSX3J0U524do8HAPh174y7rV4aovPqURp1w3xhPWnyXGKQHYQY3VnDgNLE7CMWA%2BJNfptUPERLWTp9zU2jjDHMk6XwI57yze39rJHYj7mBC1PuXr%2FNt4vwUam33zBun8XnOB%2F0v7xuwfbtaDVm76McpVUYjbXDzCKC1gB8e1lHhyNqZoviA5zpzGV7pqH2MhLwE%2Fs0%2BRQO%2Fn3ww3rXGwwY6pgHqQRQ6hsYpncyxxdEazDdi5U2RGt18BiUnDy4bfK%2BzGRyRpJA2lYVIVF2WXlaKXyEpb3Xx%2B%2FIvCCZkAvw4H%2F%2FLm9Z%2BoXrReMWOgH81aOKdA0NG2zsdWSp0bg0qgi3B2xWVFh%2B0X4svCutwNGYS4kCe2nphJADekKoxTTZFKXmGU6XN9cKfFr0OQARo4KaEuO5FeixOLHVfFjcu7iv%2FOQGlJpPRgvp7&X-Amz-Signature=babd35def5e18ad4590711969f8e6d17c9de17a55c282874b0793cfb0c2cf446&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSWZQVQM%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T004459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHktVgVcMX%2FU1vCynZcFEBkHv2s6S2fVrk2ubWq3BdXTAiARN3dUShCeXUuwDDiG9Lr6PffJmu4ehPoCE4FVmLv16CqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjgQkTkP8qU455HWUKtwDAET1zsWQV4YuJMMULFEzcHg28yNJ6VxfsYj1V%2B8S590bjMOfakif8ZZPW5vaacvCLdET5ZM6iUIGdvI7IcDkvpsHAMxpzCj8Z7Tm%2BedMzI5WM%2F5m9qPV9U%2B8MyTuzsvXEjja3lHKLCf9kh02MpjrCHhEzNot18DRuxExNGNaZvnNfgfk44Da248Bnw%2FQiwLsRqqdCCzefnz9SkpYUzCq1lrj00%2BdcEtho8t9L3Bunf8sWf8UaK08qpq3ALSGGe2iW43PKAyYCxAoKKexfE%2BByvKtkVXsb%2FeDbzEvyQA8tkdXVhZIPt3oYC8gsff2LUdKs2DblqVbuLMeIF%2Fba5bDhf3Xs1rZ1KtLvQhrQL4Z3yFGwHoUj8AwsuxS4w7eJCgkgyzNk1lxPjF49JKGFzopaazxZF9u7sj4Z%2BN8AdjLpf%2BMpmSX3J0U524do8HAPh174y7rV4aovPqURp1w3xhPWnyXGKQHYQY3VnDgNLE7CMWA%2BJNfptUPERLWTp9zU2jjDHMk6XwI57yze39rJHYj7mBC1PuXr%2FNt4vwUam33zBun8XnOB%2F0v7xuwfbtaDVm76McpVUYjbXDzCKC1gB8e1lHhyNqZoviA5zpzGV7pqH2MhLwE%2Fs0%2BRQO%2Fn3ww3rXGwwY6pgHqQRQ6hsYpncyxxdEazDdi5U2RGt18BiUnDy4bfK%2BzGRyRpJA2lYVIVF2WXlaKXyEpb3Xx%2B%2FIvCCZkAvw4H%2F%2FLm9Z%2BoXrReMWOgH81aOKdA0NG2zsdWSp0bg0qgi3B2xWVFh%2B0X4svCutwNGYS4kCe2nphJADekKoxTTZFKXmGU6XN9cKfFr0OQARo4KaEuO5FeixOLHVfFjcu7iv%2FOQGlJpPRgvp7&X-Amz-Signature=695f4dbdc8720b52603c57b2a6937961004743235275131b2817d22b5b989571&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
