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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCNVZPGS%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCID%2BQTu8hNgKd96ePueHcMGYHTqWGXvpVRRtIn1z4lep5AiA5obn%2FScToRsmzbnAsTMPxbCa45ru%2F3d7960Eb60oamir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMABl87QMnQohSMAUXKtwD2XfdMTbtR%2F0olTV8ofDoAUlVIjfdeWcR%2BpR3U9FC4YObQR5dCyB05yeSMnYl4bCD8WAHCh%2B8en8%2BrFsNj8yvAuiGXqEPFbtVqyKk6GcJT0JlvsaXK6L7KmT%2F0OtF4nXofxwlWx6k7GTjJN9442LlukZdt8oaIiAMuo4tRGbkp2yGe538baA0yHLEKY%2FQwB%2B8rFRC6yrFzWr%2FD%2F0c1jRvJ9P17HDp%2F7zmBVYUvwZP65MWGH6eZAUAhlRIpeFVZUBZ9JgnEqbpIQPEvP53gv9o%2BzMoy5ec%2Bm7Q1lr1r4%2B5MiJnz9dPmm7kEPUqPTMBmnXRBZiA5rw0k%2FphYqdiO6vy9S9PztDwBkgJUnS31h7qvEc6D4%2B4Yi%2BWsRPbSYnWEeFn8exU92kA8zi%2BrQZnAGTtr8Ue4nBoCmlTyVArFlLlSQgI8MJdzV7QweFNCODw%2FhfpN9dTkoXalhqbE%2F8pXikDvFPrJEgGxA8Epp7O4KseLflqgUKDKgU4M%2FKLBBQnSauqspV%2BQbnjT45bSzyUTHsDYl%2FlM3zG6qVMjKKZkrQqLj38%2BG4Iu2BU4YkPTzoDGhIGX%2Bp%2FOQnJqY3lJ1ItxkVEEShc8ErcY3jHJ%2B71AMhlTek0kna%2B1NW0wvQUsLUwmJ%2FHvQY6pgEVlee5SamOpo20pNAP6k3qhF66TrplIceaGXPF82oqkiarjL3xfSJ1WMV56F8mP%2BZsHR2YQMZPCHUIFn%2FtdN8Xjgh3v45OegZhql9HgzXToJGSjCD7C7lJBaprCQHR28jdVfvzLmRbqjKCrKaf6Um0J1k%2B2r32O3nhSiAzw%2BQOk3nFbcuEP0bwTFyIYocUUqpB%2BVuR31C3avW%2F6vLnXzkgxIQ61yW%2B&X-Amz-Signature=595a550a172acd5716320853c9ca5de27410d259a04ced298e8a281986c0723b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCNVZPGS%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCID%2BQTu8hNgKd96ePueHcMGYHTqWGXvpVRRtIn1z4lep5AiA5obn%2FScToRsmzbnAsTMPxbCa45ru%2F3d7960Eb60oamir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMABl87QMnQohSMAUXKtwD2XfdMTbtR%2F0olTV8ofDoAUlVIjfdeWcR%2BpR3U9FC4YObQR5dCyB05yeSMnYl4bCD8WAHCh%2B8en8%2BrFsNj8yvAuiGXqEPFbtVqyKk6GcJT0JlvsaXK6L7KmT%2F0OtF4nXofxwlWx6k7GTjJN9442LlukZdt8oaIiAMuo4tRGbkp2yGe538baA0yHLEKY%2FQwB%2B8rFRC6yrFzWr%2FD%2F0c1jRvJ9P17HDp%2F7zmBVYUvwZP65MWGH6eZAUAhlRIpeFVZUBZ9JgnEqbpIQPEvP53gv9o%2BzMoy5ec%2Bm7Q1lr1r4%2B5MiJnz9dPmm7kEPUqPTMBmnXRBZiA5rw0k%2FphYqdiO6vy9S9PztDwBkgJUnS31h7qvEc6D4%2B4Yi%2BWsRPbSYnWEeFn8exU92kA8zi%2BrQZnAGTtr8Ue4nBoCmlTyVArFlLlSQgI8MJdzV7QweFNCODw%2FhfpN9dTkoXalhqbE%2F8pXikDvFPrJEgGxA8Epp7O4KseLflqgUKDKgU4M%2FKLBBQnSauqspV%2BQbnjT45bSzyUTHsDYl%2FlM3zG6qVMjKKZkrQqLj38%2BG4Iu2BU4YkPTzoDGhIGX%2Bp%2FOQnJqY3lJ1ItxkVEEShc8ErcY3jHJ%2B71AMhlTek0kna%2B1NW0wvQUsLUwmJ%2FHvQY6pgEVlee5SamOpo20pNAP6k3qhF66TrplIceaGXPF82oqkiarjL3xfSJ1WMV56F8mP%2BZsHR2YQMZPCHUIFn%2FtdN8Xjgh3v45OegZhql9HgzXToJGSjCD7C7lJBaprCQHR28jdVfvzLmRbqjKCrKaf6Um0J1k%2B2r32O3nhSiAzw%2BQOk3nFbcuEP0bwTFyIYocUUqpB%2BVuR31C3avW%2F6vLnXzkgxIQ61yW%2B&X-Amz-Signature=5ec32b715f049da3264b600d618161db87a7212d2fbb3c8507e99cf0744462b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCNVZPGS%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCID%2BQTu8hNgKd96ePueHcMGYHTqWGXvpVRRtIn1z4lep5AiA5obn%2FScToRsmzbnAsTMPxbCa45ru%2F3d7960Eb60oamir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMABl87QMnQohSMAUXKtwD2XfdMTbtR%2F0olTV8ofDoAUlVIjfdeWcR%2BpR3U9FC4YObQR5dCyB05yeSMnYl4bCD8WAHCh%2B8en8%2BrFsNj8yvAuiGXqEPFbtVqyKk6GcJT0JlvsaXK6L7KmT%2F0OtF4nXofxwlWx6k7GTjJN9442LlukZdt8oaIiAMuo4tRGbkp2yGe538baA0yHLEKY%2FQwB%2B8rFRC6yrFzWr%2FD%2F0c1jRvJ9P17HDp%2F7zmBVYUvwZP65MWGH6eZAUAhlRIpeFVZUBZ9JgnEqbpIQPEvP53gv9o%2BzMoy5ec%2Bm7Q1lr1r4%2B5MiJnz9dPmm7kEPUqPTMBmnXRBZiA5rw0k%2FphYqdiO6vy9S9PztDwBkgJUnS31h7qvEc6D4%2B4Yi%2BWsRPbSYnWEeFn8exU92kA8zi%2BrQZnAGTtr8Ue4nBoCmlTyVArFlLlSQgI8MJdzV7QweFNCODw%2FhfpN9dTkoXalhqbE%2F8pXikDvFPrJEgGxA8Epp7O4KseLflqgUKDKgU4M%2FKLBBQnSauqspV%2BQbnjT45bSzyUTHsDYl%2FlM3zG6qVMjKKZkrQqLj38%2BG4Iu2BU4YkPTzoDGhIGX%2Bp%2FOQnJqY3lJ1ItxkVEEShc8ErcY3jHJ%2B71AMhlTek0kna%2B1NW0wvQUsLUwmJ%2FHvQY6pgEVlee5SamOpo20pNAP6k3qhF66TrplIceaGXPF82oqkiarjL3xfSJ1WMV56F8mP%2BZsHR2YQMZPCHUIFn%2FtdN8Xjgh3v45OegZhql9HgzXToJGSjCD7C7lJBaprCQHR28jdVfvzLmRbqjKCrKaf6Um0J1k%2B2r32O3nhSiAzw%2BQOk3nFbcuEP0bwTFyIYocUUqpB%2BVuR31C3avW%2F6vLnXzkgxIQ61yW%2B&X-Amz-Signature=6537ca586e4092468afedd2f0bf2cb71f51d70bc6663898972b58bf86c8a0803&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
