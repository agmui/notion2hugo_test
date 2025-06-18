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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VANERT3W%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T181229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDX%2BqbPRhb635zBPSMLeQoUMdx%2F5D0t82MqG5XHYkcoHwIhAId1sl1nTofBASNoI6JHW%2Bk2DCQT9J9wuI7VRgm7MK3SKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCbMnNTOOtBMRPyWcq3AOHeFIt2q%2Fiu%2Bqk6%2BoCdYnF%2B8Xs%2B11BHPqWr4%2B1rf%2BXF7YMLUPfrsSoCmZo6%2BiXw4TlPN%2FaAJYldqtfZrvnyk13nWCiGfe48hFHxDwyEsB7OirMRqD2KPZ%2B2Fqja6EducQpb7BMJCo%2FGdIghm%2FZ6ev2zEAfYf137lV%2F%2BzYlF91P98yEFQgErRJg15xgma1TuoLXR%2FU5nnhPbJoO6CMu0ZVeu0Qswd6zw3cA%2FmzMIiYTZ0TIfNliiFB6mbs6bgGINR2UJx0J2%2FlALKU0kdyTQRyWjFqIx%2FeY0gny%2BFEVVZg7bV7IPDcYMQr0mr76Vv20eR1Mglt7UH%2BwiHC83z4qbzi2sE4lidHJR3Y7OkWf1PDCyrNLCxrSqMU%2BuU2vFQSJ8pTVD5dEWbCqSRadvHKfrTkFswrvhKmhuQ2KsHDdP4FpUUqAwAOtCfOvn%2B8K3AzlOKD6yYCOfqZ2xmcky2J6XuA2XHjbIsM2RqopDs17d4xGnVasfg2RplKQlWqarTPlkwjA9BmCAwSZtQZwZjVdEIs4%2BRpJYaLxuoPz2sPk5p3Mbjv2TXcxtatPnIhqHkyafYezBzi7uk99TTIH2FKNFvv4MctSL6UcAggbG2%2Ft69ErvYNfNPnEPa363u%2FNTDDo%2B8vCBjqkAa9YKiMl61LcTco9iO63ApglQD6iF63X0M73NTo7yLpca%2FtuKgY25xGQ%2FScXabvWVmUhsen2y8MnpRAeB7xrzXtVKq4%2FlWoPqL4klq6Yw2PffbucGA61bUytH2UA%2BXJonkRQLwMQZYbggmnRgiUg%2FL2EcLT0%2FyJqsQ98hfphNc%2FaXKejLkUyWI8FZjfR00ZTLUkXfauG%2FMVimoYIromb2FMGWbTz&X-Amz-Signature=446740ad01e75950dbc0bb94441b6b6800d74bd00f3bafa40b7917b49fcff844&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VANERT3W%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T181229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDX%2BqbPRhb635zBPSMLeQoUMdx%2F5D0t82MqG5XHYkcoHwIhAId1sl1nTofBASNoI6JHW%2Bk2DCQT9J9wuI7VRgm7MK3SKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCbMnNTOOtBMRPyWcq3AOHeFIt2q%2Fiu%2Bqk6%2BoCdYnF%2B8Xs%2B11BHPqWr4%2B1rf%2BXF7YMLUPfrsSoCmZo6%2BiXw4TlPN%2FaAJYldqtfZrvnyk13nWCiGfe48hFHxDwyEsB7OirMRqD2KPZ%2B2Fqja6EducQpb7BMJCo%2FGdIghm%2FZ6ev2zEAfYf137lV%2F%2BzYlF91P98yEFQgErRJg15xgma1TuoLXR%2FU5nnhPbJoO6CMu0ZVeu0Qswd6zw3cA%2FmzMIiYTZ0TIfNliiFB6mbs6bgGINR2UJx0J2%2FlALKU0kdyTQRyWjFqIx%2FeY0gny%2BFEVVZg7bV7IPDcYMQr0mr76Vv20eR1Mglt7UH%2BwiHC83z4qbzi2sE4lidHJR3Y7OkWf1PDCyrNLCxrSqMU%2BuU2vFQSJ8pTVD5dEWbCqSRadvHKfrTkFswrvhKmhuQ2KsHDdP4FpUUqAwAOtCfOvn%2B8K3AzlOKD6yYCOfqZ2xmcky2J6XuA2XHjbIsM2RqopDs17d4xGnVasfg2RplKQlWqarTPlkwjA9BmCAwSZtQZwZjVdEIs4%2BRpJYaLxuoPz2sPk5p3Mbjv2TXcxtatPnIhqHkyafYezBzi7uk99TTIH2FKNFvv4MctSL6UcAggbG2%2Ft69ErvYNfNPnEPa363u%2FNTDDo%2B8vCBjqkAa9YKiMl61LcTco9iO63ApglQD6iF63X0M73NTo7yLpca%2FtuKgY25xGQ%2FScXabvWVmUhsen2y8MnpRAeB7xrzXtVKq4%2FlWoPqL4klq6Yw2PffbucGA61bUytH2UA%2BXJonkRQLwMQZYbggmnRgiUg%2FL2EcLT0%2FyJqsQ98hfphNc%2FaXKejLkUyWI8FZjfR00ZTLUkXfauG%2FMVimoYIromb2FMGWbTz&X-Amz-Signature=9df4f97633b586dfcadffc1f0656ac218e625a0253ed7b54c6f4580c63e3acea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VANERT3W%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T181229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDX%2BqbPRhb635zBPSMLeQoUMdx%2F5D0t82MqG5XHYkcoHwIhAId1sl1nTofBASNoI6JHW%2Bk2DCQT9J9wuI7VRgm7MK3SKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCbMnNTOOtBMRPyWcq3AOHeFIt2q%2Fiu%2Bqk6%2BoCdYnF%2B8Xs%2B11BHPqWr4%2B1rf%2BXF7YMLUPfrsSoCmZo6%2BiXw4TlPN%2FaAJYldqtfZrvnyk13nWCiGfe48hFHxDwyEsB7OirMRqD2KPZ%2B2Fqja6EducQpb7BMJCo%2FGdIghm%2FZ6ev2zEAfYf137lV%2F%2BzYlF91P98yEFQgErRJg15xgma1TuoLXR%2FU5nnhPbJoO6CMu0ZVeu0Qswd6zw3cA%2FmzMIiYTZ0TIfNliiFB6mbs6bgGINR2UJx0J2%2FlALKU0kdyTQRyWjFqIx%2FeY0gny%2BFEVVZg7bV7IPDcYMQr0mr76Vv20eR1Mglt7UH%2BwiHC83z4qbzi2sE4lidHJR3Y7OkWf1PDCyrNLCxrSqMU%2BuU2vFQSJ8pTVD5dEWbCqSRadvHKfrTkFswrvhKmhuQ2KsHDdP4FpUUqAwAOtCfOvn%2B8K3AzlOKD6yYCOfqZ2xmcky2J6XuA2XHjbIsM2RqopDs17d4xGnVasfg2RplKQlWqarTPlkwjA9BmCAwSZtQZwZjVdEIs4%2BRpJYaLxuoPz2sPk5p3Mbjv2TXcxtatPnIhqHkyafYezBzi7uk99TTIH2FKNFvv4MctSL6UcAggbG2%2Ft69ErvYNfNPnEPa363u%2FNTDDo%2B8vCBjqkAa9YKiMl61LcTco9iO63ApglQD6iF63X0M73NTo7yLpca%2FtuKgY25xGQ%2FScXabvWVmUhsen2y8MnpRAeB7xrzXtVKq4%2FlWoPqL4klq6Yw2PffbucGA61bUytH2UA%2BXJonkRQLwMQZYbggmnRgiUg%2FL2EcLT0%2FyJqsQ98hfphNc%2FaXKejLkUyWI8FZjfR00ZTLUkXfauG%2FMVimoYIromb2FMGWbTz&X-Amz-Signature=2245570750dad3d569ee78936bc95e9def9e5234e4a68260e5c7eafdbd2044e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
