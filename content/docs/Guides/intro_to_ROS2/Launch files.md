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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUJPOIQE%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T050954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIDb5cCi2CW07RbNFcxlMhqHOUnknJdpSG6PsakuguwBvAiBcmPy5sUt7mDxjQPNv%2FfPquRXHJgcaHig0BIQjmxGBuSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMKOXMhYWSbfEOH4cgKtwDOXl7rp%2BhGwObKkRFnahSRIAJ1%2F1KMJasQuDUWmor3DTQBT%2ByGdKKrC2MzpiMJueuhRvcUYVBksPujUQgpXX%2BbKjuV4TL6YQDMo5RQOic4xrl551rx6OUBm%2FLnMSQslba7A7D%2BfAxfDvrA5KlHo1OQbbRL519GwNwWQZktKep8AMoEANAVuUiMTKcj%2FPMThRbnJPrTLBhsTXRgtqsjvhZzMzzMagttZUhfYRaB3Rwr5uAD2kl5stK4NmRWioMsPaCwmfoqWabwziH9geOKZBRRKOb70Eg1Qe0IsD8sWMDEZBFNR4uRdqwveQGL0smz4PFvOb9VQo2BbmHAi8wBKl5thjgYTVacX6KVddN9Lo0D%2BsRF50wjS9vg%2BrU00F8MGLEoIi4fxYhqPBYyRm3J232OC%2FuY9OILOYCIo9RWpZsJxTADvjIq84eFOMSo8mg6EhsBDRJ%2FUhatsO8Tnm67FwVPuWvFnBZjYrQQ4a2ZOlixKRusiLTscWbwC0qgfMz9aR0ITTMWQxKcas4%2B8hehun3trR4pGaE%2B9o7V4dNaZM%2F6c0hfYtENvPq%2FKeCp8mzmAMM0MHFudYulrEbnxfOHmx54o1xaADRxiI8GzA%2Fu9Ve5vVUMBhhhR0oQSF1Xbgwm4PhwAY6pgGhgmOXaN%2B%2FgFbPlQkNlGAVwmFtxh6H2ylH4qNDak2lsBhK5UTwtNzTEaQy2mRaT3xFDCMjfPNa7spM%2BZ8nM%2FoQv0AaibNaNxBqMqbOpIP15BFFenDYtcpz9k43haahfUJF%2BAmGw43c%2FAwjXtU%2BMNY%2F%2BaTyGCvPz4YI6fc3FCv2VGtzpspcis90JuHGIsRamGu0uGI3qURPnwPHCOQx9ISJOiP6S0OC&X-Amz-Signature=c6b1cb83f511c1acd6f7831b8d95077f4564b9ff3dd6c1b595f22e7f85b09d42&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUJPOIQE%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T050954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIDb5cCi2CW07RbNFcxlMhqHOUnknJdpSG6PsakuguwBvAiBcmPy5sUt7mDxjQPNv%2FfPquRXHJgcaHig0BIQjmxGBuSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMKOXMhYWSbfEOH4cgKtwDOXl7rp%2BhGwObKkRFnahSRIAJ1%2F1KMJasQuDUWmor3DTQBT%2ByGdKKrC2MzpiMJueuhRvcUYVBksPujUQgpXX%2BbKjuV4TL6YQDMo5RQOic4xrl551rx6OUBm%2FLnMSQslba7A7D%2BfAxfDvrA5KlHo1OQbbRL519GwNwWQZktKep8AMoEANAVuUiMTKcj%2FPMThRbnJPrTLBhsTXRgtqsjvhZzMzzMagttZUhfYRaB3Rwr5uAD2kl5stK4NmRWioMsPaCwmfoqWabwziH9geOKZBRRKOb70Eg1Qe0IsD8sWMDEZBFNR4uRdqwveQGL0smz4PFvOb9VQo2BbmHAi8wBKl5thjgYTVacX6KVddN9Lo0D%2BsRF50wjS9vg%2BrU00F8MGLEoIi4fxYhqPBYyRm3J232OC%2FuY9OILOYCIo9RWpZsJxTADvjIq84eFOMSo8mg6EhsBDRJ%2FUhatsO8Tnm67FwVPuWvFnBZjYrQQ4a2ZOlixKRusiLTscWbwC0qgfMz9aR0ITTMWQxKcas4%2B8hehun3trR4pGaE%2B9o7V4dNaZM%2F6c0hfYtENvPq%2FKeCp8mzmAMM0MHFudYulrEbnxfOHmx54o1xaADRxiI8GzA%2Fu9Ve5vVUMBhhhR0oQSF1Xbgwm4PhwAY6pgGhgmOXaN%2B%2FgFbPlQkNlGAVwmFtxh6H2ylH4qNDak2lsBhK5UTwtNzTEaQy2mRaT3xFDCMjfPNa7spM%2BZ8nM%2FoQv0AaibNaNxBqMqbOpIP15BFFenDYtcpz9k43haahfUJF%2BAmGw43c%2FAwjXtU%2BMNY%2F%2BaTyGCvPz4YI6fc3FCv2VGtzpspcis90JuHGIsRamGu0uGI3qURPnwPHCOQx9ISJOiP6S0OC&X-Amz-Signature=f2f5d2656e1c4999f9b24273d651fd9214f27582a04efed572362de7de7948b2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUJPOIQE%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T050954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIDb5cCi2CW07RbNFcxlMhqHOUnknJdpSG6PsakuguwBvAiBcmPy5sUt7mDxjQPNv%2FfPquRXHJgcaHig0BIQjmxGBuSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMKOXMhYWSbfEOH4cgKtwDOXl7rp%2BhGwObKkRFnahSRIAJ1%2F1KMJasQuDUWmor3DTQBT%2ByGdKKrC2MzpiMJueuhRvcUYVBksPujUQgpXX%2BbKjuV4TL6YQDMo5RQOic4xrl551rx6OUBm%2FLnMSQslba7A7D%2BfAxfDvrA5KlHo1OQbbRL519GwNwWQZktKep8AMoEANAVuUiMTKcj%2FPMThRbnJPrTLBhsTXRgtqsjvhZzMzzMagttZUhfYRaB3Rwr5uAD2kl5stK4NmRWioMsPaCwmfoqWabwziH9geOKZBRRKOb70Eg1Qe0IsD8sWMDEZBFNR4uRdqwveQGL0smz4PFvOb9VQo2BbmHAi8wBKl5thjgYTVacX6KVddN9Lo0D%2BsRF50wjS9vg%2BrU00F8MGLEoIi4fxYhqPBYyRm3J232OC%2FuY9OILOYCIo9RWpZsJxTADvjIq84eFOMSo8mg6EhsBDRJ%2FUhatsO8Tnm67FwVPuWvFnBZjYrQQ4a2ZOlixKRusiLTscWbwC0qgfMz9aR0ITTMWQxKcas4%2B8hehun3trR4pGaE%2B9o7V4dNaZM%2F6c0hfYtENvPq%2FKeCp8mzmAMM0MHFudYulrEbnxfOHmx54o1xaADRxiI8GzA%2Fu9Ve5vVUMBhhhR0oQSF1Xbgwm4PhwAY6pgGhgmOXaN%2B%2FgFbPlQkNlGAVwmFtxh6H2ylH4qNDak2lsBhK5UTwtNzTEaQy2mRaT3xFDCMjfPNa7spM%2BZ8nM%2FoQv0AaibNaNxBqMqbOpIP15BFFenDYtcpz9k43haahfUJF%2BAmGw43c%2FAwjXtU%2BMNY%2F%2BaTyGCvPz4YI6fc3FCv2VGtzpspcis90JuHGIsRamGu0uGI3qURPnwPHCOQx9ISJOiP6S0OC&X-Amz-Signature=b2c645f233787dcb5e065282f38098938b9c267347f03ba29daaef78da362da2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
