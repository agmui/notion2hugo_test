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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYC6TZD5%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T101004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMpFy32vtBaZ0%2FJFw3VVD9fUv6KlJeiBoKnkE2yd9%2FiAIgTqd%2Fkdry%2BIKQ%2FzJ31Ao%2FZ%2FlzU%2FIG5tjOOUdE2pn2mjsq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDDvobvrEpd%2FskJcSfyrcA1aWOsk2vpLT8l%2BaCpEXEhUHSrKbQl0qN5qgp5XrU6fnihm2irwzVL%2F2H3TWfpoSzhy8j5b%2BwJrfQmDBg%2FpDfKIzh5N6zq4sf53HDEeAb3y6UNfatkmVuZWptvkfEhi6mrF5ArfAxJ2lOLEjSvEgVPJrQCkyXQGW%2FlTsR8bgFPcqrxz%2Fb2l9%2BZ4m%2FGUtUyYcZcL7pEsV0xHWxhDmnv0otg%2FepmzIwj1y9zSYkDK0lfRpu9TZodTLX9aoVRBTO4x5S5HqjYHbNEp5KPKKK5%2F5g5nbFXZxCMDcE1GhBx%2FcwNKgvV1ZmGDgsvd0o0pXfmEIkTVhTGtGcFv3gb3aawAcfflEeEC9FVVhFwdj4x5gWtErYGF5mGsFz22oFBI9vE5vrkx%2FYaUripoXvK2GKwwWnGPW2fbvvC38M2OWhwfx1txSJgUN6KSMqprg4nEIXursTrIWl0YHjO6AuGPLxnM6A%2F%2BuFgfaZAfgAEQHHhCNQk9r1T9arrxIj32nHZZ8Qs0F60DrgxAtnE4egmcsbNXVf94rOpD8YyYeVrSZRm%2B8jMa4gzASDzKZHqrIi%2BafC1zzIN0uWt55GfcLSQfNElxcAJxqGX1kFaoEatpRmGHZkkjmR2AxdkaS86j4pEwLMPjf8cAGOqUB3suuRs6lHCRJRPad020dIOjzniNvwcl%2BMLHOJxGyg4mxNiGvKHdJCBh0DbFqvIIgav%2Fc60JqydXQESFrkRZfwmTQ89N0THVgyCfiweR1Zr%2B7ps5QI58MuBfySzoMblmfS6UhopFQpVYAS7SSOVxT2X7KlYaIHkRdriPelWg7NHOZCvQePnV%2FGbq5Slcuo6a%2FuD1PRpIfTR90Dv3Pydrd31JWBLqL&X-Amz-Signature=665db1e1fe210202e6c25d03192216b3ce302c98f0cd0ee677b6881a6dd09cda&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYC6TZD5%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T101004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMpFy32vtBaZ0%2FJFw3VVD9fUv6KlJeiBoKnkE2yd9%2FiAIgTqd%2Fkdry%2BIKQ%2FzJ31Ao%2FZ%2FlzU%2FIG5tjOOUdE2pn2mjsq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDDvobvrEpd%2FskJcSfyrcA1aWOsk2vpLT8l%2BaCpEXEhUHSrKbQl0qN5qgp5XrU6fnihm2irwzVL%2F2H3TWfpoSzhy8j5b%2BwJrfQmDBg%2FpDfKIzh5N6zq4sf53HDEeAb3y6UNfatkmVuZWptvkfEhi6mrF5ArfAxJ2lOLEjSvEgVPJrQCkyXQGW%2FlTsR8bgFPcqrxz%2Fb2l9%2BZ4m%2FGUtUyYcZcL7pEsV0xHWxhDmnv0otg%2FepmzIwj1y9zSYkDK0lfRpu9TZodTLX9aoVRBTO4x5S5HqjYHbNEp5KPKKK5%2F5g5nbFXZxCMDcE1GhBx%2FcwNKgvV1ZmGDgsvd0o0pXfmEIkTVhTGtGcFv3gb3aawAcfflEeEC9FVVhFwdj4x5gWtErYGF5mGsFz22oFBI9vE5vrkx%2FYaUripoXvK2GKwwWnGPW2fbvvC38M2OWhwfx1txSJgUN6KSMqprg4nEIXursTrIWl0YHjO6AuGPLxnM6A%2F%2BuFgfaZAfgAEQHHhCNQk9r1T9arrxIj32nHZZ8Qs0F60DrgxAtnE4egmcsbNXVf94rOpD8YyYeVrSZRm%2B8jMa4gzASDzKZHqrIi%2BafC1zzIN0uWt55GfcLSQfNElxcAJxqGX1kFaoEatpRmGHZkkjmR2AxdkaS86j4pEwLMPjf8cAGOqUB3suuRs6lHCRJRPad020dIOjzniNvwcl%2BMLHOJxGyg4mxNiGvKHdJCBh0DbFqvIIgav%2Fc60JqydXQESFrkRZfwmTQ89N0THVgyCfiweR1Zr%2B7ps5QI58MuBfySzoMblmfS6UhopFQpVYAS7SSOVxT2X7KlYaIHkRdriPelWg7NHOZCvQePnV%2FGbq5Slcuo6a%2FuD1PRpIfTR90Dv3Pydrd31JWBLqL&X-Amz-Signature=7e17927cb5dfe679f7c412260d0db8c930ff95430e930986e20ad1a7feb58d69&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYC6TZD5%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T101004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMpFy32vtBaZ0%2FJFw3VVD9fUv6KlJeiBoKnkE2yd9%2FiAIgTqd%2Fkdry%2BIKQ%2FzJ31Ao%2FZ%2FlzU%2FIG5tjOOUdE2pn2mjsq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDDvobvrEpd%2FskJcSfyrcA1aWOsk2vpLT8l%2BaCpEXEhUHSrKbQl0qN5qgp5XrU6fnihm2irwzVL%2F2H3TWfpoSzhy8j5b%2BwJrfQmDBg%2FpDfKIzh5N6zq4sf53HDEeAb3y6UNfatkmVuZWptvkfEhi6mrF5ArfAxJ2lOLEjSvEgVPJrQCkyXQGW%2FlTsR8bgFPcqrxz%2Fb2l9%2BZ4m%2FGUtUyYcZcL7pEsV0xHWxhDmnv0otg%2FepmzIwj1y9zSYkDK0lfRpu9TZodTLX9aoVRBTO4x5S5HqjYHbNEp5KPKKK5%2F5g5nbFXZxCMDcE1GhBx%2FcwNKgvV1ZmGDgsvd0o0pXfmEIkTVhTGtGcFv3gb3aawAcfflEeEC9FVVhFwdj4x5gWtErYGF5mGsFz22oFBI9vE5vrkx%2FYaUripoXvK2GKwwWnGPW2fbvvC38M2OWhwfx1txSJgUN6KSMqprg4nEIXursTrIWl0YHjO6AuGPLxnM6A%2F%2BuFgfaZAfgAEQHHhCNQk9r1T9arrxIj32nHZZ8Qs0F60DrgxAtnE4egmcsbNXVf94rOpD8YyYeVrSZRm%2B8jMa4gzASDzKZHqrIi%2BafC1zzIN0uWt55GfcLSQfNElxcAJxqGX1kFaoEatpRmGHZkkjmR2AxdkaS86j4pEwLMPjf8cAGOqUB3suuRs6lHCRJRPad020dIOjzniNvwcl%2BMLHOJxGyg4mxNiGvKHdJCBh0DbFqvIIgav%2Fc60JqydXQESFrkRZfwmTQ89N0THVgyCfiweR1Zr%2B7ps5QI58MuBfySzoMblmfS6UhopFQpVYAS7SSOVxT2X7KlYaIHkRdriPelWg7NHOZCvQePnV%2FGbq5Slcuo6a%2FuD1PRpIfTR90Dv3Pydrd31JWBLqL&X-Amz-Signature=bb207772f14eeb0cebc85041ce698cce1937ed0707b41329afd58defeb32f641&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
