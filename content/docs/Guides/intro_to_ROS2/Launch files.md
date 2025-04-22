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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTCWLAOI%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T181204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQC%2Bco9UEyzVjT8U8NNYsOKi0Kf99yW8fyzTm9RVRco%2FNAIgQd7QA11wSqo%2Bay%2Bi9lNRck1GHOIxLnaQ%2BfSvDTlsru8qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1FoEVLLARCXv8RzyrcA0kf%2B%2FJ%2FAUaIvP3zhYvNBM1gNrsmW6cwADaqZA0tzJOE4rrVPLbHeInje6ogV7eIit7bARwd82%2FufKbsxdq%2BmKKavqwSkm3a3st%2BR%2B6LjmuThG%2BG51Jv%2F5g4MQrv2IHaGsepzG08WciwXA5sybx5i%2BxnyuLYPQrxP32J4WtImG1LG4hMjcT8cxooAgq8bnb9cDmLNis4G6ObvEKPEGOStJqJrS6VNalGPNjZ4VPSfqG8Uj6qU5s9wNntHiVY9NTnHrEZxsT6TFDZtgNrzuyjeZjD%2B9%2BQzGn0FccbUsjvK57F%2Fxl%2BBf3eqXwz55M3n74KPSEpCXDQsyWkwLZFMWEBEoj%2Be73TqrP2U1CEahOpZw9FSORGQ8Jc3pah2UO2Z37y24zpC%2FxOvIaaTz4V8hWwERM%2F7OJyrwT6Jh6gUKafNUU%2Bauy4syCuJpj8DRrbG2%2BJ1t6tlpHKagCRdATQgDRO2o0dn%2BLCvGz%2BjGXPdxjadVKfeoa2AnfJ27lyUkoo2vSRMhkGCsHCR5%2Bz%2BbNqge3AknW5nUrxpAaNz%2Ba%2BLyoPsTvgEZ401WZQd9ne7tv9OiFXZ7nrGGymJpA86fTGHJWOGLHv0ynAgErTpEM3jUm2rhsJyMaD0gKmJbY3qXanMIyfn8AGOqUBisWQCqFhAm9S75dN51CzzVHe0VrA9HzuwoVwkIJYGpdtiC46mxQ3z0s63U4LqD8wvdS%2B%2BLEUk5eJUR0oRyZO7rQBSHip%2F0SrZqfK%2BBo5cWlCdjtOxLNiFfKUKnLIxNQOBJDzMkHNg5nK0uhPeV71yutFgwfsAe7maaHKWndUmNQ7a8SeWGHScJFSm4WLy3HiCk0bxsTEcRo5PgfIXPh4nHGfMmL5&X-Amz-Signature=933800e1c2433e84c8fd4ae8680768f2f94f597bbc7af2a990fdae82c0a3741d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTCWLAOI%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T181204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQC%2Bco9UEyzVjT8U8NNYsOKi0Kf99yW8fyzTm9RVRco%2FNAIgQd7QA11wSqo%2Bay%2Bi9lNRck1GHOIxLnaQ%2BfSvDTlsru8qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1FoEVLLARCXv8RzyrcA0kf%2B%2FJ%2FAUaIvP3zhYvNBM1gNrsmW6cwADaqZA0tzJOE4rrVPLbHeInje6ogV7eIit7bARwd82%2FufKbsxdq%2BmKKavqwSkm3a3st%2BR%2B6LjmuThG%2BG51Jv%2F5g4MQrv2IHaGsepzG08WciwXA5sybx5i%2BxnyuLYPQrxP32J4WtImG1LG4hMjcT8cxooAgq8bnb9cDmLNis4G6ObvEKPEGOStJqJrS6VNalGPNjZ4VPSfqG8Uj6qU5s9wNntHiVY9NTnHrEZxsT6TFDZtgNrzuyjeZjD%2B9%2BQzGn0FccbUsjvK57F%2Fxl%2BBf3eqXwz55M3n74KPSEpCXDQsyWkwLZFMWEBEoj%2Be73TqrP2U1CEahOpZw9FSORGQ8Jc3pah2UO2Z37y24zpC%2FxOvIaaTz4V8hWwERM%2F7OJyrwT6Jh6gUKafNUU%2Bauy4syCuJpj8DRrbG2%2BJ1t6tlpHKagCRdATQgDRO2o0dn%2BLCvGz%2BjGXPdxjadVKfeoa2AnfJ27lyUkoo2vSRMhkGCsHCR5%2Bz%2BbNqge3AknW5nUrxpAaNz%2Ba%2BLyoPsTvgEZ401WZQd9ne7tv9OiFXZ7nrGGymJpA86fTGHJWOGLHv0ynAgErTpEM3jUm2rhsJyMaD0gKmJbY3qXanMIyfn8AGOqUBisWQCqFhAm9S75dN51CzzVHe0VrA9HzuwoVwkIJYGpdtiC46mxQ3z0s63U4LqD8wvdS%2B%2BLEUk5eJUR0oRyZO7rQBSHip%2F0SrZqfK%2BBo5cWlCdjtOxLNiFfKUKnLIxNQOBJDzMkHNg5nK0uhPeV71yutFgwfsAe7maaHKWndUmNQ7a8SeWGHScJFSm4WLy3HiCk0bxsTEcRo5PgfIXPh4nHGfMmL5&X-Amz-Signature=ac062727706039b99c914d9249eed3978ab9df75ccb9abc8c1615b5ff34a1351&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTCWLAOI%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T181204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQC%2Bco9UEyzVjT8U8NNYsOKi0Kf99yW8fyzTm9RVRco%2FNAIgQd7QA11wSqo%2Bay%2Bi9lNRck1GHOIxLnaQ%2BfSvDTlsru8qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1FoEVLLARCXv8RzyrcA0kf%2B%2FJ%2FAUaIvP3zhYvNBM1gNrsmW6cwADaqZA0tzJOE4rrVPLbHeInje6ogV7eIit7bARwd82%2FufKbsxdq%2BmKKavqwSkm3a3st%2BR%2B6LjmuThG%2BG51Jv%2F5g4MQrv2IHaGsepzG08WciwXA5sybx5i%2BxnyuLYPQrxP32J4WtImG1LG4hMjcT8cxooAgq8bnb9cDmLNis4G6ObvEKPEGOStJqJrS6VNalGPNjZ4VPSfqG8Uj6qU5s9wNntHiVY9NTnHrEZxsT6TFDZtgNrzuyjeZjD%2B9%2BQzGn0FccbUsjvK57F%2Fxl%2BBf3eqXwz55M3n74KPSEpCXDQsyWkwLZFMWEBEoj%2Be73TqrP2U1CEahOpZw9FSORGQ8Jc3pah2UO2Z37y24zpC%2FxOvIaaTz4V8hWwERM%2F7OJyrwT6Jh6gUKafNUU%2Bauy4syCuJpj8DRrbG2%2BJ1t6tlpHKagCRdATQgDRO2o0dn%2BLCvGz%2BjGXPdxjadVKfeoa2AnfJ27lyUkoo2vSRMhkGCsHCR5%2Bz%2BbNqge3AknW5nUrxpAaNz%2Ba%2BLyoPsTvgEZ401WZQd9ne7tv9OiFXZ7nrGGymJpA86fTGHJWOGLHv0ynAgErTpEM3jUm2rhsJyMaD0gKmJbY3qXanMIyfn8AGOqUBisWQCqFhAm9S75dN51CzzVHe0VrA9HzuwoVwkIJYGpdtiC46mxQ3z0s63U4LqD8wvdS%2B%2BLEUk5eJUR0oRyZO7rQBSHip%2F0SrZqfK%2BBo5cWlCdjtOxLNiFfKUKnLIxNQOBJDzMkHNg5nK0uhPeV71yutFgwfsAe7maaHKWndUmNQ7a8SeWGHScJFSm4WLy3HiCk0bxsTEcRo5PgfIXPh4nHGfMmL5&X-Amz-Signature=ed9fac8f32e7291d4f90fb2dc8ac58a1fd55f20eb7fbe31388f6582b4f83240b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
