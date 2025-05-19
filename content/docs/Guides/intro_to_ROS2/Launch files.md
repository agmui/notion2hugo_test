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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QFB5WJV%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T081402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FdTIEl6Vk3Vce3kcNNSUSJALYqr7YDB%2FoILLPLFabrAiA%2FLtxAghvd3JVOnxSPnsVaHfcp%2BVn7yH8RmvLozxLGtyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1p4ZoXz9AGguFfmbKtwDfYA6hjPmP9Bzq%2F9K9l3aPaggrCH0Tb5OdW4XURdYl0HHif30WUxYyWagpdw7ZZuJ%2BDibAgj7Ed9AOGg8K3JkwOEqTC32NnTXQIywvGFXqwxY%2BdIueOuon8Va5DnVzt46XqecWra%2FFjsGPG%2FC0J36hjw5HIhD3aHTOB%2B3p16YX8%2FwZXS%2FU%2FOgdShyI%2FafXSzbM%2FKCbu5BpjA8cGcePnW%2BdzYgXVQnicjJpZENqnYnA51B7vILjqCVl08lKtigGCDLoPViLCOq0hTj84ILinFRoRK58XK4EtxYL1860tGHAvGJPfLcriA5k5hjdA0EFzVAvxLTifdVTNap3hJ4ha8jgkhsO2Z%2FRBx0eUqb7mRkJUB%2BOKSRsjjl9LUq8KZ5DTRZ4tWusZ8Y4cOoIENWX10%2Fncpr1ltBfyKRC%2Fj1Clka9JVa4yQQ0xhqacnOQw1NwMuHTvVGndct18h2mHAXK5vhXBQTjbGjfgy9W5L40e0OF7E4y36gQl4YTH4RXcZSX94UiEMJA9x6rukPDhs3KW3PqZLkvVxNMpdMVVkC9G9YB3vZZDw70KdvevxSqGy9RIztFQJBX4vvKqmPtlzZjWzkgOR7yXabzuboD4TdPnn9MHrIBoBm6H1IyfIoIHAwu7mrwQY6pgH%2F12mk34dYPdCMWZwKJ1WqVRk2rV5hP2pNhtSZW7two6B9ilozBrvc16JQkLdG0RLDvSdFbu%2FbjnsyIEw%2FmeKaA2d5Yck74Njav4I0Qmt5mRtJQ%2Fd7VQiZwaF%2BCtrZQwEOsOGL3p7mAeopDbE6CXczzgPtznT4rKk5nC%2Fj9oTDT273c%2FJQTJk1vLqXwJwpYkc6%2FQXDe3o8RJ3JbzYtNMcf%2BiDN1vqD&X-Amz-Signature=f978eb1914e562bcd7bead9c4482b8679a9dea228d672116e3b72288af35c0b5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QFB5WJV%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T081402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FdTIEl6Vk3Vce3kcNNSUSJALYqr7YDB%2FoILLPLFabrAiA%2FLtxAghvd3JVOnxSPnsVaHfcp%2BVn7yH8RmvLozxLGtyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1p4ZoXz9AGguFfmbKtwDfYA6hjPmP9Bzq%2F9K9l3aPaggrCH0Tb5OdW4XURdYl0HHif30WUxYyWagpdw7ZZuJ%2BDibAgj7Ed9AOGg8K3JkwOEqTC32NnTXQIywvGFXqwxY%2BdIueOuon8Va5DnVzt46XqecWra%2FFjsGPG%2FC0J36hjw5HIhD3aHTOB%2B3p16YX8%2FwZXS%2FU%2FOgdShyI%2FafXSzbM%2FKCbu5BpjA8cGcePnW%2BdzYgXVQnicjJpZENqnYnA51B7vILjqCVl08lKtigGCDLoPViLCOq0hTj84ILinFRoRK58XK4EtxYL1860tGHAvGJPfLcriA5k5hjdA0EFzVAvxLTifdVTNap3hJ4ha8jgkhsO2Z%2FRBx0eUqb7mRkJUB%2BOKSRsjjl9LUq8KZ5DTRZ4tWusZ8Y4cOoIENWX10%2Fncpr1ltBfyKRC%2Fj1Clka9JVa4yQQ0xhqacnOQw1NwMuHTvVGndct18h2mHAXK5vhXBQTjbGjfgy9W5L40e0OF7E4y36gQl4YTH4RXcZSX94UiEMJA9x6rukPDhs3KW3PqZLkvVxNMpdMVVkC9G9YB3vZZDw70KdvevxSqGy9RIztFQJBX4vvKqmPtlzZjWzkgOR7yXabzuboD4TdPnn9MHrIBoBm6H1IyfIoIHAwu7mrwQY6pgH%2F12mk34dYPdCMWZwKJ1WqVRk2rV5hP2pNhtSZW7two6B9ilozBrvc16JQkLdG0RLDvSdFbu%2FbjnsyIEw%2FmeKaA2d5Yck74Njav4I0Qmt5mRtJQ%2Fd7VQiZwaF%2BCtrZQwEOsOGL3p7mAeopDbE6CXczzgPtznT4rKk5nC%2Fj9oTDT273c%2FJQTJk1vLqXwJwpYkc6%2FQXDe3o8RJ3JbzYtNMcf%2BiDN1vqD&X-Amz-Signature=5dcaefc6475070da6eadc98c2f3b2d517febc508dc37cfff95a4d5412bef13ee&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QFB5WJV%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T081402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FdTIEl6Vk3Vce3kcNNSUSJALYqr7YDB%2FoILLPLFabrAiA%2FLtxAghvd3JVOnxSPnsVaHfcp%2BVn7yH8RmvLozxLGtyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1p4ZoXz9AGguFfmbKtwDfYA6hjPmP9Bzq%2F9K9l3aPaggrCH0Tb5OdW4XURdYl0HHif30WUxYyWagpdw7ZZuJ%2BDibAgj7Ed9AOGg8K3JkwOEqTC32NnTXQIywvGFXqwxY%2BdIueOuon8Va5DnVzt46XqecWra%2FFjsGPG%2FC0J36hjw5HIhD3aHTOB%2B3p16YX8%2FwZXS%2FU%2FOgdShyI%2FafXSzbM%2FKCbu5BpjA8cGcePnW%2BdzYgXVQnicjJpZENqnYnA51B7vILjqCVl08lKtigGCDLoPViLCOq0hTj84ILinFRoRK58XK4EtxYL1860tGHAvGJPfLcriA5k5hjdA0EFzVAvxLTifdVTNap3hJ4ha8jgkhsO2Z%2FRBx0eUqb7mRkJUB%2BOKSRsjjl9LUq8KZ5DTRZ4tWusZ8Y4cOoIENWX10%2Fncpr1ltBfyKRC%2Fj1Clka9JVa4yQQ0xhqacnOQw1NwMuHTvVGndct18h2mHAXK5vhXBQTjbGjfgy9W5L40e0OF7E4y36gQl4YTH4RXcZSX94UiEMJA9x6rukPDhs3KW3PqZLkvVxNMpdMVVkC9G9YB3vZZDw70KdvevxSqGy9RIztFQJBX4vvKqmPtlzZjWzkgOR7yXabzuboD4TdPnn9MHrIBoBm6H1IyfIoIHAwu7mrwQY6pgH%2F12mk34dYPdCMWZwKJ1WqVRk2rV5hP2pNhtSZW7two6B9ilozBrvc16JQkLdG0RLDvSdFbu%2FbjnsyIEw%2FmeKaA2d5Yck74Njav4I0Qmt5mRtJQ%2Fd7VQiZwaF%2BCtrZQwEOsOGL3p7mAeopDbE6CXczzgPtznT4rKk5nC%2Fj9oTDT273c%2FJQTJk1vLqXwJwpYkc6%2FQXDe3o8RJ3JbzYtNMcf%2BiDN1vqD&X-Amz-Signature=ad9d3cae4cea181cc1a18f2dd7e32e46bcd1c119a0252e9e4927c9d91d2e809d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
