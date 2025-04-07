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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RILKPW4W%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T081236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FhHcZmvQM77IqLPqO%2Fhs7FsIZipCYF2YA3NRrLR0kuAIhAODScpAV44jGIVcgh0DrzkxW%2FMlOEXPPQl5OiY2TLmfKKv8DCFkQABoMNjM3NDIzMTgzODA1IgwuE4vbEqDKGJ8SLWwq3AMcIAACNF5S4%2FmVFop3QxiPeF9Q1B9dP6EbJ%2BIPzdxeC8AGzfxu8bzMkO%2FWvY8FqqjBAYOY8iYDKcsFvSdqjCo8%2FJk60rHIb3yoTte5fD5iCUvnGttvn4kvWnWiFGflybAVan%2BotCk0q3MNl4h72woEMdhRmkxmHXb39TI2RUrSx8QLHnYSUBk%2BMIxA4%2FfqxMyPQakc2ijuVQeiy1%2Fzop8qfEiWsYOLXoNrKSMFe%2FdPsOpzdVKHxvc6MX0szMKnVdPLKwY0qbuRsJTvTuMHtVKM4xiG7auY5vZndLNE0bbiFP6QGPEqT0pQExERKm2Hrp8Z%2FpaY76A9Ur00gJkqIvRBeEWnzRtxoto%2BNdKcAYUhet7GF3wslyXApqiEDvPW3b2EysbFTNecSXpTFwFShVUHUz3M7JZ16PdT1Fr5Gtud4cN%2F4AMURN2Pq4Gt1RCi2ZmZvU6BmM%2BZLQzPeYf2xqb1hHgb0dX%2BRpNMRCDl4qIyGC8dQ9fjcbIaEEZNoMV%2FIJpYV6Px0y0jLQNtaE8FEFvS8prWIugRsqgEqkYHgqn38%2FEEPI11AfG19zRmXAD%2BzP6wAc3G2%2FJePIreD15k3VxGmnbtyfxofDu2yBKnIQV3USc1rF8Xx2em3XgsYTDJhc6%2FBjqkAUWYR0ACGPURhZpuVvYxTWIFngDvVH%2B9abCAGi%2B8dQrdKuDdTaubDS1RMFCvSymTcF5j8DChjjeCn8oIGGYDaT89DzUHhxU1Pbog%2BSm3HWj9GpD7I13noLE98ilJcvWTOLhg0LGxiIfS4s74Iia4ShqnLqtpyGVM0VXMcxsbFP6tuTzd4Qu8gS77eGWQi3OtDh9%2B1iPZJzCzc1htN5Obw5xp1Pcb&X-Amz-Signature=d75a0fd4cf47af1c243ee7c9744f10586b0342b62412782d1ed6813d8853d614&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RILKPW4W%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T081236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FhHcZmvQM77IqLPqO%2Fhs7FsIZipCYF2YA3NRrLR0kuAIhAODScpAV44jGIVcgh0DrzkxW%2FMlOEXPPQl5OiY2TLmfKKv8DCFkQABoMNjM3NDIzMTgzODA1IgwuE4vbEqDKGJ8SLWwq3AMcIAACNF5S4%2FmVFop3QxiPeF9Q1B9dP6EbJ%2BIPzdxeC8AGzfxu8bzMkO%2FWvY8FqqjBAYOY8iYDKcsFvSdqjCo8%2FJk60rHIb3yoTte5fD5iCUvnGttvn4kvWnWiFGflybAVan%2BotCk0q3MNl4h72woEMdhRmkxmHXb39TI2RUrSx8QLHnYSUBk%2BMIxA4%2FfqxMyPQakc2ijuVQeiy1%2Fzop8qfEiWsYOLXoNrKSMFe%2FdPsOpzdVKHxvc6MX0szMKnVdPLKwY0qbuRsJTvTuMHtVKM4xiG7auY5vZndLNE0bbiFP6QGPEqT0pQExERKm2Hrp8Z%2FpaY76A9Ur00gJkqIvRBeEWnzRtxoto%2BNdKcAYUhet7GF3wslyXApqiEDvPW3b2EysbFTNecSXpTFwFShVUHUz3M7JZ16PdT1Fr5Gtud4cN%2F4AMURN2Pq4Gt1RCi2ZmZvU6BmM%2BZLQzPeYf2xqb1hHgb0dX%2BRpNMRCDl4qIyGC8dQ9fjcbIaEEZNoMV%2FIJpYV6Px0y0jLQNtaE8FEFvS8prWIugRsqgEqkYHgqn38%2FEEPI11AfG19zRmXAD%2BzP6wAc3G2%2FJePIreD15k3VxGmnbtyfxofDu2yBKnIQV3USc1rF8Xx2em3XgsYTDJhc6%2FBjqkAUWYR0ACGPURhZpuVvYxTWIFngDvVH%2B9abCAGi%2B8dQrdKuDdTaubDS1RMFCvSymTcF5j8DChjjeCn8oIGGYDaT89DzUHhxU1Pbog%2BSm3HWj9GpD7I13noLE98ilJcvWTOLhg0LGxiIfS4s74Iia4ShqnLqtpyGVM0VXMcxsbFP6tuTzd4Qu8gS77eGWQi3OtDh9%2B1iPZJzCzc1htN5Obw5xp1Pcb&X-Amz-Signature=5edb626172b388342c9b7d13deceb5f0e1313bc18a1ed3ba6f18ea4c6c5171cd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RILKPW4W%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T081236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FhHcZmvQM77IqLPqO%2Fhs7FsIZipCYF2YA3NRrLR0kuAIhAODScpAV44jGIVcgh0DrzkxW%2FMlOEXPPQl5OiY2TLmfKKv8DCFkQABoMNjM3NDIzMTgzODA1IgwuE4vbEqDKGJ8SLWwq3AMcIAACNF5S4%2FmVFop3QxiPeF9Q1B9dP6EbJ%2BIPzdxeC8AGzfxu8bzMkO%2FWvY8FqqjBAYOY8iYDKcsFvSdqjCo8%2FJk60rHIb3yoTte5fD5iCUvnGttvn4kvWnWiFGflybAVan%2BotCk0q3MNl4h72woEMdhRmkxmHXb39TI2RUrSx8QLHnYSUBk%2BMIxA4%2FfqxMyPQakc2ijuVQeiy1%2Fzop8qfEiWsYOLXoNrKSMFe%2FdPsOpzdVKHxvc6MX0szMKnVdPLKwY0qbuRsJTvTuMHtVKM4xiG7auY5vZndLNE0bbiFP6QGPEqT0pQExERKm2Hrp8Z%2FpaY76A9Ur00gJkqIvRBeEWnzRtxoto%2BNdKcAYUhet7GF3wslyXApqiEDvPW3b2EysbFTNecSXpTFwFShVUHUz3M7JZ16PdT1Fr5Gtud4cN%2F4AMURN2Pq4Gt1RCi2ZmZvU6BmM%2BZLQzPeYf2xqb1hHgb0dX%2BRpNMRCDl4qIyGC8dQ9fjcbIaEEZNoMV%2FIJpYV6Px0y0jLQNtaE8FEFvS8prWIugRsqgEqkYHgqn38%2FEEPI11AfG19zRmXAD%2BzP6wAc3G2%2FJePIreD15k3VxGmnbtyfxofDu2yBKnIQV3USc1rF8Xx2em3XgsYTDJhc6%2FBjqkAUWYR0ACGPURhZpuVvYxTWIFngDvVH%2B9abCAGi%2B8dQrdKuDdTaubDS1RMFCvSymTcF5j8DChjjeCn8oIGGYDaT89DzUHhxU1Pbog%2BSm3HWj9GpD7I13noLE98ilJcvWTOLhg0LGxiIfS4s74Iia4ShqnLqtpyGVM0VXMcxsbFP6tuTzd4Qu8gS77eGWQi3OtDh9%2B1iPZJzCzc1htN5Obw5xp1Pcb&X-Amz-Signature=f488140643db42951073c8e2441f8be92d5491537d8892d8cd619d7f674775ef&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
