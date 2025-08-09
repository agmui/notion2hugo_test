---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S57SOGPV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQC2icmxy0ybZiYXm18X9tf%2BrVX8xnEEVNDx7XszgluIywIgELdq9dWe5kMXf4THputQSlWWVFbpOUTvFFlOpjpx728qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkKW8Ur5F87KC8VTircAzX2MvNcPGPPvNgB7vZ1iTlutTTxQsIZcOfKdsDaJ%2Biem1PNccQpIFgF6iuEnI355WB%2BMNAsCS9udhPnk4CG%2B9FTR%2FMimV7j3vohPkEgODJ%2Fhii0z%2B0UFZF4FYAKSvP4MTp0wXbj9XDFiTLcvUF3aZw2XmXAw9IWM3ttkTVfcu%2FOalCvX5zetnubRnYYmVj21zrDK%2FITCsUbAuh1ug1R5qZLpyKbuKqnb1bJGBVDNDNFHuhIWhXN8f3RQMxlEcUhRaK4yR%2FAK7JyezH3W8KzdmhEBFF3iI1s%2Fza3HuUiI3s%2FmueMRA69Mk9ASGEgGc6fYAbkx58pf3igu6kGY%2FirV08h1rHbtnXLJ0wx1G4uh1Xn9AU99YgbMeIVnx0sZShY0W420W671tfMZbcq7VajrKRYTukbkZWGeekjzjTuNNyJeYnkVR%2B8LErkXNwYsqDyZHLNXCf%2FubhYXt1u19rNpD2dAscfDVfNx44Fr6WvZ%2BjBp9GyTccPi7g%2BZDD9qrwwuI2hBY%2BBRRuf6jf08o5b958zjXT5hhP7gVaw7hONOhzXm25aqqoQTvtImcLcKKsVmecM%2FLXRjNVmPKKEeTLt6OFjhYbKZqVZWB7o9GlyTj9QfMT2PyMNlmShr4jRMJGg28QGOqUBMyGcqu7Jh0uMdUTShoe6ye%2FCAebIWJBrFAMtPVQvRv2T8vy9T8rPauufxaR41Z3zH2X7eEgxN2SfnszPnIENPp7g52TmtwpJSVzRxqRYmUfZkpW3287MfEoDI2puzixUxBvME6PpvOGdan%2BMs%2F66YdFDCqsJLutTgS%2BzayxM8ehjCTiORtoMOqOYBamxlGioCENHOxmngoOG39%2FMhQjIgKATz6JA&X-Amz-Signature=fd7f20e1952cb423f64cb791d025b2d546bf6aacaf32f0e9abde5b7080a6f571&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S57SOGPV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQC2icmxy0ybZiYXm18X9tf%2BrVX8xnEEVNDx7XszgluIywIgELdq9dWe5kMXf4THputQSlWWVFbpOUTvFFlOpjpx728qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkKW8Ur5F87KC8VTircAzX2MvNcPGPPvNgB7vZ1iTlutTTxQsIZcOfKdsDaJ%2Biem1PNccQpIFgF6iuEnI355WB%2BMNAsCS9udhPnk4CG%2B9FTR%2FMimV7j3vohPkEgODJ%2Fhii0z%2B0UFZF4FYAKSvP4MTp0wXbj9XDFiTLcvUF3aZw2XmXAw9IWM3ttkTVfcu%2FOalCvX5zetnubRnYYmVj21zrDK%2FITCsUbAuh1ug1R5qZLpyKbuKqnb1bJGBVDNDNFHuhIWhXN8f3RQMxlEcUhRaK4yR%2FAK7JyezH3W8KzdmhEBFF3iI1s%2Fza3HuUiI3s%2FmueMRA69Mk9ASGEgGc6fYAbkx58pf3igu6kGY%2FirV08h1rHbtnXLJ0wx1G4uh1Xn9AU99YgbMeIVnx0sZShY0W420W671tfMZbcq7VajrKRYTukbkZWGeekjzjTuNNyJeYnkVR%2B8LErkXNwYsqDyZHLNXCf%2FubhYXt1u19rNpD2dAscfDVfNx44Fr6WvZ%2BjBp9GyTccPi7g%2BZDD9qrwwuI2hBY%2BBRRuf6jf08o5b958zjXT5hhP7gVaw7hONOhzXm25aqqoQTvtImcLcKKsVmecM%2FLXRjNVmPKKEeTLt6OFjhYbKZqVZWB7o9GlyTj9QfMT2PyMNlmShr4jRMJGg28QGOqUBMyGcqu7Jh0uMdUTShoe6ye%2FCAebIWJBrFAMtPVQvRv2T8vy9T8rPauufxaR41Z3zH2X7eEgxN2SfnszPnIENPp7g52TmtwpJSVzRxqRYmUfZkpW3287MfEoDI2puzixUxBvME6PpvOGdan%2BMs%2F66YdFDCqsJLutTgS%2BzayxM8ehjCTiORtoMOqOYBamxlGioCENHOxmngoOG39%2FMhQjIgKATz6JA&X-Amz-Signature=15e2a61eb264888c1766d7dbc6f6cf220ec92862b65c62509924fd7e1c3a6441&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S57SOGPV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQC2icmxy0ybZiYXm18X9tf%2BrVX8xnEEVNDx7XszgluIywIgELdq9dWe5kMXf4THputQSlWWVFbpOUTvFFlOpjpx728qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkKW8Ur5F87KC8VTircAzX2MvNcPGPPvNgB7vZ1iTlutTTxQsIZcOfKdsDaJ%2Biem1PNccQpIFgF6iuEnI355WB%2BMNAsCS9udhPnk4CG%2B9FTR%2FMimV7j3vohPkEgODJ%2Fhii0z%2B0UFZF4FYAKSvP4MTp0wXbj9XDFiTLcvUF3aZw2XmXAw9IWM3ttkTVfcu%2FOalCvX5zetnubRnYYmVj21zrDK%2FITCsUbAuh1ug1R5qZLpyKbuKqnb1bJGBVDNDNFHuhIWhXN8f3RQMxlEcUhRaK4yR%2FAK7JyezH3W8KzdmhEBFF3iI1s%2Fza3HuUiI3s%2FmueMRA69Mk9ASGEgGc6fYAbkx58pf3igu6kGY%2FirV08h1rHbtnXLJ0wx1G4uh1Xn9AU99YgbMeIVnx0sZShY0W420W671tfMZbcq7VajrKRYTukbkZWGeekjzjTuNNyJeYnkVR%2B8LErkXNwYsqDyZHLNXCf%2FubhYXt1u19rNpD2dAscfDVfNx44Fr6WvZ%2BjBp9GyTccPi7g%2BZDD9qrwwuI2hBY%2BBRRuf6jf08o5b958zjXT5hhP7gVaw7hONOhzXm25aqqoQTvtImcLcKKsVmecM%2FLXRjNVmPKKEeTLt6OFjhYbKZqVZWB7o9GlyTj9QfMT2PyMNlmShr4jRMJGg28QGOqUBMyGcqu7Jh0uMdUTShoe6ye%2FCAebIWJBrFAMtPVQvRv2T8vy9T8rPauufxaR41Z3zH2X7eEgxN2SfnszPnIENPp7g52TmtwpJSVzRxqRYmUfZkpW3287MfEoDI2puzixUxBvME6PpvOGdan%2BMs%2F66YdFDCqsJLutTgS%2BzayxM8ehjCTiORtoMOqOYBamxlGioCENHOxmngoOG39%2FMhQjIgKATz6JA&X-Amz-Signature=73d692083e1f803798fb3b08874589550b3f774ac7926dacf13bc394a056caa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
