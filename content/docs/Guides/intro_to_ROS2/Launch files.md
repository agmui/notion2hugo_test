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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLDCVU3C%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFA7yswJgOLgvK%2By7FolPMYNFwFUVwxs9QSzXa1RcIWEAiEA4ACtX7BECWOGrqrMPxLpcHeA8P2etF6B0NmsG%2BHK4MMqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLinzDMf4B6dBIUu5CrcAzRYV0QpRU9U9lBcqB03EgKOv5ppKa5qXmpGVkcN4yNC3EoLmYRX0ZF7FHg5X9rRTu9C9XD6daYLSUVaw6TCfisIjsB5ycGoWXbt3NdoOBF%2Bc7TVgLL%2BlmlkfW1Gc5%2B6Z40DLj16e4%2Fvz9YR7yBRPbuNlZcgPrQTzddaFBn3%2BiwBEZoHzKlAL0A8WkTM175B5qCW7O%2Bv13o6WJdmcJ%2FG80ySzicH2uuNWe9lPDrEFp3T2scnR%2F1LRTPQQ9fNjcqaedmBf4rrq9hG9sDNJPNLY33Jv9GnTDNwccfwfhwR1R8OblpcXApB6eawUwHPIUfqDIKI9lDsW307RK%2BebecstUsmTaYICOYkrblYN7IENaSMqT%2Fako8jAXC3uC5nl1HkWX%2FsmIOHkbLGf26vEKsyukRvLik1EC2jcKiGyoA9fJqQ9jcnB%2FkMVuJpLik%2B%2FSSOka%2FfjmyitFRIBO9pEpx2fnj8NjXqQkjQM6K8IZBISeRmVmdBly%2BOAfF6mIg5mfTpa2414h%2BnASS%2F%2FASB%2BWbTc1PqRaNx8TqgTHhUg%2FbExhXPuXSivY1rfgGrrcADop6gdO%2F4CCqJvEx%2FqXbipTx9gVYcFIHwsUKVAsY0N1ZaFgQNVSn5I8SiDLT6h6ssMOrVxcMGOqUBybS2wf4PfUhV6xF4dgfKAXJnMz9434GvtYmNRzDCItqh3P6PQUZR5Y07br3CMDD6IVZQN9EQ%2B1RcXNBH8Vz%2Bic0UsxEy7E%2FcQqTQooiJoZ2aHiprx46KLlN4ixIVLFJbbOOraIAi7lNIFKqjuyZId%2FMstBO6hqi1UdVSHprZP0JDx82%2FqT8enZqOlGH5JHR3LNmpZoA2p84iX3tMRXUHd85A38Sp&X-Amz-Signature=6ea1f84a497c0e3b4eac3a9cea99a367d5a1e21abcf367930ff3d8ed56e2a3b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLDCVU3C%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFA7yswJgOLgvK%2By7FolPMYNFwFUVwxs9QSzXa1RcIWEAiEA4ACtX7BECWOGrqrMPxLpcHeA8P2etF6B0NmsG%2BHK4MMqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLinzDMf4B6dBIUu5CrcAzRYV0QpRU9U9lBcqB03EgKOv5ppKa5qXmpGVkcN4yNC3EoLmYRX0ZF7FHg5X9rRTu9C9XD6daYLSUVaw6TCfisIjsB5ycGoWXbt3NdoOBF%2Bc7TVgLL%2BlmlkfW1Gc5%2B6Z40DLj16e4%2Fvz9YR7yBRPbuNlZcgPrQTzddaFBn3%2BiwBEZoHzKlAL0A8WkTM175B5qCW7O%2Bv13o6WJdmcJ%2FG80ySzicH2uuNWe9lPDrEFp3T2scnR%2F1LRTPQQ9fNjcqaedmBf4rrq9hG9sDNJPNLY33Jv9GnTDNwccfwfhwR1R8OblpcXApB6eawUwHPIUfqDIKI9lDsW307RK%2BebecstUsmTaYICOYkrblYN7IENaSMqT%2Fako8jAXC3uC5nl1HkWX%2FsmIOHkbLGf26vEKsyukRvLik1EC2jcKiGyoA9fJqQ9jcnB%2FkMVuJpLik%2B%2FSSOka%2FfjmyitFRIBO9pEpx2fnj8NjXqQkjQM6K8IZBISeRmVmdBly%2BOAfF6mIg5mfTpa2414h%2BnASS%2F%2FASB%2BWbTc1PqRaNx8TqgTHhUg%2FbExhXPuXSivY1rfgGrrcADop6gdO%2F4CCqJvEx%2FqXbipTx9gVYcFIHwsUKVAsY0N1ZaFgQNVSn5I8SiDLT6h6ssMOrVxcMGOqUBybS2wf4PfUhV6xF4dgfKAXJnMz9434GvtYmNRzDCItqh3P6PQUZR5Y07br3CMDD6IVZQN9EQ%2B1RcXNBH8Vz%2Bic0UsxEy7E%2FcQqTQooiJoZ2aHiprx46KLlN4ixIVLFJbbOOraIAi7lNIFKqjuyZId%2FMstBO6hqi1UdVSHprZP0JDx82%2FqT8enZqOlGH5JHR3LNmpZoA2p84iX3tMRXUHd85A38Sp&X-Amz-Signature=2f143377e204151e9c1f6af6a84a0e6161ae708bea2d9e27843fbacdfae36904&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLDCVU3C%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFA7yswJgOLgvK%2By7FolPMYNFwFUVwxs9QSzXa1RcIWEAiEA4ACtX7BECWOGrqrMPxLpcHeA8P2etF6B0NmsG%2BHK4MMqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLinzDMf4B6dBIUu5CrcAzRYV0QpRU9U9lBcqB03EgKOv5ppKa5qXmpGVkcN4yNC3EoLmYRX0ZF7FHg5X9rRTu9C9XD6daYLSUVaw6TCfisIjsB5ycGoWXbt3NdoOBF%2Bc7TVgLL%2BlmlkfW1Gc5%2B6Z40DLj16e4%2Fvz9YR7yBRPbuNlZcgPrQTzddaFBn3%2BiwBEZoHzKlAL0A8WkTM175B5qCW7O%2Bv13o6WJdmcJ%2FG80ySzicH2uuNWe9lPDrEFp3T2scnR%2F1LRTPQQ9fNjcqaedmBf4rrq9hG9sDNJPNLY33Jv9GnTDNwccfwfhwR1R8OblpcXApB6eawUwHPIUfqDIKI9lDsW307RK%2BebecstUsmTaYICOYkrblYN7IENaSMqT%2Fako8jAXC3uC5nl1HkWX%2FsmIOHkbLGf26vEKsyukRvLik1EC2jcKiGyoA9fJqQ9jcnB%2FkMVuJpLik%2B%2FSSOka%2FfjmyitFRIBO9pEpx2fnj8NjXqQkjQM6K8IZBISeRmVmdBly%2BOAfF6mIg5mfTpa2414h%2BnASS%2F%2FASB%2BWbTc1PqRaNx8TqgTHhUg%2FbExhXPuXSivY1rfgGrrcADop6gdO%2F4CCqJvEx%2FqXbipTx9gVYcFIHwsUKVAsY0N1ZaFgQNVSn5I8SiDLT6h6ssMOrVxcMGOqUBybS2wf4PfUhV6xF4dgfKAXJnMz9434GvtYmNRzDCItqh3P6PQUZR5Y07br3CMDD6IVZQN9EQ%2B1RcXNBH8Vz%2Bic0UsxEy7E%2FcQqTQooiJoZ2aHiprx46KLlN4ixIVLFJbbOOraIAi7lNIFKqjuyZId%2FMstBO6hqi1UdVSHprZP0JDx82%2FqT8enZqOlGH5JHR3LNmpZoA2p84iX3tMRXUHd85A38Sp&X-Amz-Signature=12375e89746b5ec4b62c7c58e4f29660f63b2d72fb6891be1fe12f3e8bddc8a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
