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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPAQUIEV%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T070847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCICSUDSUJJ7wgOfhhpyIhJdUU20HezYdb2DPFNhWcYPcSAiEA6SJzCDd%2BJDzmrUQNwK2emFQL%2BRO8CllTnB1nvQoffmoq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDDJpleGKZZJ4XxV37ircA53lwCB6CUWq8ArAU%2B%2F2rgsNVQC6Wu3wD2ex87nZgvP91jRqESrhkk63SKT3JYE1vyulSMKf3RFJAdj9rwnV0U4FqmUezFyrbI6GWxofFNOyQwZ0YZNpDCEWjYvJDpFP0dLMUks2005w9tOVOk9kBfSA4Q%2BXBZ2BzmXznpE3tSzo8FFS9VtANe9HxSiv6ejgxqeLXcSPhDdmBrTpQW6bvi5N9fdZgiAJpdLR%2FQTgX8GrHvnWPDpr9VV3WpwDb%2F4aNIkgp%2BfWqNiIgMzcNuI%2BPETqzLgcmMYJ2OBZM7FnHFYGzyWupg2igiDQVsDlQO%2FurD2XMWHfVpIcMqYqjlFtTdcSlokI%2BKxb3xJfkoI5LBEUUhqvs%2FXZb5J6M%2FDii%2FnNRTeNA77u3w93whO3IkmMFa25pz2TcEX2RQGt7hdPyhEe3rn%2Fx8%2BDs0tfr9Z3uXoykGHwM6spnPPC1Zsdp9Kt6qC5Vn62G%2F4yHlqw777XfPXidW3yUphtlpL93RscAegPkt%2FEbijnrEZ42fN%2FQgb5J1Up1nWK1PXimcHKl9ox7d7N2Oen7%2BdXLjqRsfEGiTdzR%2FiGbqQ4naNMrVRchF1b4qS%2B2v2wbfomYsOm8Cpl1nZL%2F4ZK%2Bs%2FH%2BR81DB8XMLisucIGOqUB8VAVzrZxQi0hRivZ7RxR%2BzHZagdzh9DbrLnOr%2FyNntav3VXqgEgGi%2FQDPmsaN7IuI5UFcZ1aOTQ6Iajbhfa7S%2BBXIlTjrSKv450O3bxiNUxnIHKUQ0%2Br5kNUaFBnU6FEyg81FxyPZpZ68SjlBw0WSxYZ9ELjBddfXH6rCq1YWb0NSyrmdJkm%2BPXL%2BcgnzjOTlClBoVm%2BXYdU5pzF%2Busf%2FOS4NLR8&X-Amz-Signature=660e8703f5edbea7053464f7f4f1e77ebcb2f9abddefeae2ad7eef78370eb951&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPAQUIEV%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T070847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCICSUDSUJJ7wgOfhhpyIhJdUU20HezYdb2DPFNhWcYPcSAiEA6SJzCDd%2BJDzmrUQNwK2emFQL%2BRO8CllTnB1nvQoffmoq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDDJpleGKZZJ4XxV37ircA53lwCB6CUWq8ArAU%2B%2F2rgsNVQC6Wu3wD2ex87nZgvP91jRqESrhkk63SKT3JYE1vyulSMKf3RFJAdj9rwnV0U4FqmUezFyrbI6GWxofFNOyQwZ0YZNpDCEWjYvJDpFP0dLMUks2005w9tOVOk9kBfSA4Q%2BXBZ2BzmXznpE3tSzo8FFS9VtANe9HxSiv6ejgxqeLXcSPhDdmBrTpQW6bvi5N9fdZgiAJpdLR%2FQTgX8GrHvnWPDpr9VV3WpwDb%2F4aNIkgp%2BfWqNiIgMzcNuI%2BPETqzLgcmMYJ2OBZM7FnHFYGzyWupg2igiDQVsDlQO%2FurD2XMWHfVpIcMqYqjlFtTdcSlokI%2BKxb3xJfkoI5LBEUUhqvs%2FXZb5J6M%2FDii%2FnNRTeNA77u3w93whO3IkmMFa25pz2TcEX2RQGt7hdPyhEe3rn%2Fx8%2BDs0tfr9Z3uXoykGHwM6spnPPC1Zsdp9Kt6qC5Vn62G%2F4yHlqw777XfPXidW3yUphtlpL93RscAegPkt%2FEbijnrEZ42fN%2FQgb5J1Up1nWK1PXimcHKl9ox7d7N2Oen7%2BdXLjqRsfEGiTdzR%2FiGbqQ4naNMrVRchF1b4qS%2B2v2wbfomYsOm8Cpl1nZL%2F4ZK%2Bs%2FH%2BR81DB8XMLisucIGOqUB8VAVzrZxQi0hRivZ7RxR%2BzHZagdzh9DbrLnOr%2FyNntav3VXqgEgGi%2FQDPmsaN7IuI5UFcZ1aOTQ6Iajbhfa7S%2BBXIlTjrSKv450O3bxiNUxnIHKUQ0%2Br5kNUaFBnU6FEyg81FxyPZpZ68SjlBw0WSxYZ9ELjBddfXH6rCq1YWb0NSyrmdJkm%2BPXL%2BcgnzjOTlClBoVm%2BXYdU5pzF%2Busf%2FOS4NLR8&X-Amz-Signature=86c8df06b498055b6db52034a706ac215eac01c3b2e4fdc444ec73092ab5457e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPAQUIEV%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T070847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCICSUDSUJJ7wgOfhhpyIhJdUU20HezYdb2DPFNhWcYPcSAiEA6SJzCDd%2BJDzmrUQNwK2emFQL%2BRO8CllTnB1nvQoffmoq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDDJpleGKZZJ4XxV37ircA53lwCB6CUWq8ArAU%2B%2F2rgsNVQC6Wu3wD2ex87nZgvP91jRqESrhkk63SKT3JYE1vyulSMKf3RFJAdj9rwnV0U4FqmUezFyrbI6GWxofFNOyQwZ0YZNpDCEWjYvJDpFP0dLMUks2005w9tOVOk9kBfSA4Q%2BXBZ2BzmXznpE3tSzo8FFS9VtANe9HxSiv6ejgxqeLXcSPhDdmBrTpQW6bvi5N9fdZgiAJpdLR%2FQTgX8GrHvnWPDpr9VV3WpwDb%2F4aNIkgp%2BfWqNiIgMzcNuI%2BPETqzLgcmMYJ2OBZM7FnHFYGzyWupg2igiDQVsDlQO%2FurD2XMWHfVpIcMqYqjlFtTdcSlokI%2BKxb3xJfkoI5LBEUUhqvs%2FXZb5J6M%2FDii%2FnNRTeNA77u3w93whO3IkmMFa25pz2TcEX2RQGt7hdPyhEe3rn%2Fx8%2BDs0tfr9Z3uXoykGHwM6spnPPC1Zsdp9Kt6qC5Vn62G%2F4yHlqw777XfPXidW3yUphtlpL93RscAegPkt%2FEbijnrEZ42fN%2FQgb5J1Up1nWK1PXimcHKl9ox7d7N2Oen7%2BdXLjqRsfEGiTdzR%2FiGbqQ4naNMrVRchF1b4qS%2B2v2wbfomYsOm8Cpl1nZL%2F4ZK%2Bs%2FH%2BR81DB8XMLisucIGOqUB8VAVzrZxQi0hRivZ7RxR%2BzHZagdzh9DbrLnOr%2FyNntav3VXqgEgGi%2FQDPmsaN7IuI5UFcZ1aOTQ6Iajbhfa7S%2BBXIlTjrSKv450O3bxiNUxnIHKUQ0%2Br5kNUaFBnU6FEyg81FxyPZpZ68SjlBw0WSxYZ9ELjBddfXH6rCq1YWb0NSyrmdJkm%2BPXL%2BcgnzjOTlClBoVm%2BXYdU5pzF%2Busf%2FOS4NLR8&X-Amz-Signature=cca071be3501cef2f77475fc22ec0bd0545a2a7bb7ae6c606b88235f0ab748e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
