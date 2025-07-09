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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTJDUJSS%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T091225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHi5BbcWFxUEqf5OyTO49XOR%2BfEweXZd6ncOB8qt4%2F%2BiAiEA%2Fyl2dNfaasuUetEEh%2BnSW5UUR7v19OtjiTIAGzCrKD8qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEicZOFYhTwvQoy84CrcA2mNn7riiJRdGSzAzzOuNqulewkXhm5s36H6v2OhElRfNaM3EzAOtQfvRGbAzToAVjmNqKb0fs3Ap%2Bxp%2BKkocfPDKBi5p1F8UsjAu2vVjaNY%2BZTpBuEe7FJsKNbBAimCsqzz%2BRXcUWE0E1tFniP1PJ%2BqWSEctD2uz4GVUbUe3dxScUe7HTgJkxpzJIsgivXXTVYZI%2B7UsXFahC0MDKJLx9%2BjuFMQ9FL%2F4IQ7VRyqyzWP9uAPQonIjHlb65qYiWao9fLoH2aRTIGBm1ArdNvrb2TItRUyUgl7sI0Y%2BwzHTE7egT4ABq4gWo1SVXTgG7cxxaJTHMhVBDRBCYSkTpc7TNuiBlROvW0SNbENlaqOpbe8d2wmyNf0KDTe0xVIDhbNpSr5VD%2FNkYCpHM3U%2BoFN8hT4lI%2FULSPfA7Ya7lTkrAcgm2lGyUP4A8D1K9ZQ2EiNhuCvpzkAghkawB026kaWENdBcSOpwqpfw0SX17twGO1Mt8sNQNCxKHUBjj6LXPXTHWFV1DMs%2F93H3AUzHdtfsuTAnAnLN1hr1D6I2DHzTIMHVB%2FihTgkqOZzRcWfxqT6RZtzTSLgha%2FzdlUQ70AsMSJnpLYy6McqHgml26XsjDhGtRytBymUGCGx4x5KMI%2FTuMMGOqUBQBATys9n%2FcjnloCgFS8YffRmILr9%2BEDSUR31wbnIUvYT2oRiRPp1bWkVVLVVJ4dxl%2FXnxs4yDl5m1AtLlrmlyNaIKdKeW2rpwZAyl%2BrG8JzBc3MmTuAf6XEsZtWr2QQcc0B9Oxs12aZw9hudhXA2a7xEmOZCOxSyFd%2Fn1p5b%2B%2BviGHfI9XTGR7GRyrifyTREeZFzlriiN6w%2BnJ%2FqSrZ1PtgRD%2FpB&X-Amz-Signature=d29da191b98082f4713c7cd7f0aa1ac1e5af603c415b8ee86c3c21a3ac7b8d1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTJDUJSS%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T091225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHi5BbcWFxUEqf5OyTO49XOR%2BfEweXZd6ncOB8qt4%2F%2BiAiEA%2Fyl2dNfaasuUetEEh%2BnSW5UUR7v19OtjiTIAGzCrKD8qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEicZOFYhTwvQoy84CrcA2mNn7riiJRdGSzAzzOuNqulewkXhm5s36H6v2OhElRfNaM3EzAOtQfvRGbAzToAVjmNqKb0fs3Ap%2Bxp%2BKkocfPDKBi5p1F8UsjAu2vVjaNY%2BZTpBuEe7FJsKNbBAimCsqzz%2BRXcUWE0E1tFniP1PJ%2BqWSEctD2uz4GVUbUe3dxScUe7HTgJkxpzJIsgivXXTVYZI%2B7UsXFahC0MDKJLx9%2BjuFMQ9FL%2F4IQ7VRyqyzWP9uAPQonIjHlb65qYiWao9fLoH2aRTIGBm1ArdNvrb2TItRUyUgl7sI0Y%2BwzHTE7egT4ABq4gWo1SVXTgG7cxxaJTHMhVBDRBCYSkTpc7TNuiBlROvW0SNbENlaqOpbe8d2wmyNf0KDTe0xVIDhbNpSr5VD%2FNkYCpHM3U%2BoFN8hT4lI%2FULSPfA7Ya7lTkrAcgm2lGyUP4A8D1K9ZQ2EiNhuCvpzkAghkawB026kaWENdBcSOpwqpfw0SX17twGO1Mt8sNQNCxKHUBjj6LXPXTHWFV1DMs%2F93H3AUzHdtfsuTAnAnLN1hr1D6I2DHzTIMHVB%2FihTgkqOZzRcWfxqT6RZtzTSLgha%2FzdlUQ70AsMSJnpLYy6McqHgml26XsjDhGtRytBymUGCGx4x5KMI%2FTuMMGOqUBQBATys9n%2FcjnloCgFS8YffRmILr9%2BEDSUR31wbnIUvYT2oRiRPp1bWkVVLVVJ4dxl%2FXnxs4yDl5m1AtLlrmlyNaIKdKeW2rpwZAyl%2BrG8JzBc3MmTuAf6XEsZtWr2QQcc0B9Oxs12aZw9hudhXA2a7xEmOZCOxSyFd%2Fn1p5b%2B%2BviGHfI9XTGR7GRyrifyTREeZFzlriiN6w%2BnJ%2FqSrZ1PtgRD%2FpB&X-Amz-Signature=68e53569953c013af618a92cbf98098b8da070fcbca3409e8fca264c68d0078f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTJDUJSS%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T091225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHi5BbcWFxUEqf5OyTO49XOR%2BfEweXZd6ncOB8qt4%2F%2BiAiEA%2Fyl2dNfaasuUetEEh%2BnSW5UUR7v19OtjiTIAGzCrKD8qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEicZOFYhTwvQoy84CrcA2mNn7riiJRdGSzAzzOuNqulewkXhm5s36H6v2OhElRfNaM3EzAOtQfvRGbAzToAVjmNqKb0fs3Ap%2Bxp%2BKkocfPDKBi5p1F8UsjAu2vVjaNY%2BZTpBuEe7FJsKNbBAimCsqzz%2BRXcUWE0E1tFniP1PJ%2BqWSEctD2uz4GVUbUe3dxScUe7HTgJkxpzJIsgivXXTVYZI%2B7UsXFahC0MDKJLx9%2BjuFMQ9FL%2F4IQ7VRyqyzWP9uAPQonIjHlb65qYiWao9fLoH2aRTIGBm1ArdNvrb2TItRUyUgl7sI0Y%2BwzHTE7egT4ABq4gWo1SVXTgG7cxxaJTHMhVBDRBCYSkTpc7TNuiBlROvW0SNbENlaqOpbe8d2wmyNf0KDTe0xVIDhbNpSr5VD%2FNkYCpHM3U%2BoFN8hT4lI%2FULSPfA7Ya7lTkrAcgm2lGyUP4A8D1K9ZQ2EiNhuCvpzkAghkawB026kaWENdBcSOpwqpfw0SX17twGO1Mt8sNQNCxKHUBjj6LXPXTHWFV1DMs%2F93H3AUzHdtfsuTAnAnLN1hr1D6I2DHzTIMHVB%2FihTgkqOZzRcWfxqT6RZtzTSLgha%2FzdlUQ70AsMSJnpLYy6McqHgml26XsjDhGtRytBymUGCGx4x5KMI%2FTuMMGOqUBQBATys9n%2FcjnloCgFS8YffRmILr9%2BEDSUR31wbnIUvYT2oRiRPp1bWkVVLVVJ4dxl%2FXnxs4yDl5m1AtLlrmlyNaIKdKeW2rpwZAyl%2BrG8JzBc3MmTuAf6XEsZtWr2QQcc0B9Oxs12aZw9hudhXA2a7xEmOZCOxSyFd%2Fn1p5b%2B%2BviGHfI9XTGR7GRyrifyTREeZFzlriiN6w%2BnJ%2FqSrZ1PtgRD%2FpB&X-Amz-Signature=f0b9a51c8748618d53a50b498161e0adf0fa5e4791abdf519e0c4caa653257b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
