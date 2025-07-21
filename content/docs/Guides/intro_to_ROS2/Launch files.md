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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645JF5NQC%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T181329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGZ%2FKo2hpfsEwZGhMz%2BvGkobYe%2FfEayqxrhgQA%2B3a2rHAiEA1nb8q%2ByLHFGdGWHzFfoFGPmGEIpS4YLhRZ5dDt0nwvUqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFrkqohqYSUqslpQZSrcAz8BUJISbJHiSJyBuVX4s%2B53FhQAi2V9Bkm7SxANI4WGDd8aAyJWM7OgXWVWIkbQNGsfOS7RhmRqH5FTimD2gm6H7aNSRlY1NY7%2BnH2bt9Kps3hYFYDvVrpXz71G0XeKkLLtXkn3Q4m7rF%2F3OfnkJMTQA86OSf4Yybj%2BzAzz3GpMAcZBcxrfx%2FSy%2FE%2BRhVXE7gkcWfL%2FLR9A%2Fsu3Py8U1xd6kQP6SwbB5dhPxbfvDq8b4MeKqBG0sX40fhwZBJdapES4lzbpeyiwPzts0AR5kSDF2jhxhrqekoXQylYSSCkPGW2RtUnf1XAUrGF37iIjFQhr1PGz9tLwrjBGPUy6RC%2BxOm2M8vPwFZNXUmxNn8QCMN5hyr0eGIjdcyk8%2BnNG5UPSteRUpVGrAPKQX8i0Om3AR5CZ1%2FDG%2BP0zCoTCszvMSpWe%2FiYYa4BwTL6FKh24wOPRdfK9MCiMX4fuDdW7oFGUd%2BIj6tNr346gciMa4Q8VXizyPtauEaVmTro4D98BHtOhOL99ESoXMTarAeYlEhSOPakx0%2FFXFCW8MMkZS1adgHGXMwVK78UoC%2Fs%2BzVkFg7oOBjU86XVnvBlPpLpSMUWjKq8Y4Fa2IqHfauw8iM5z%2FuTnOQhYnApCwv1QMMfn%2BcMGOqUBCYygRcO06RNN5Nexh0WBwRRceK2tsOLx%2Fx28dTkuBCXz34JReC6ocqkVD4fGLs18S%2Byl2Kws5GCZ7pnH6pAbK7VJ952YJfZ3D%2Bm1Via0BIUgpDH9NihMyLaxxKezgFhOVK1yK5ePVBOg3A%2Bw0dbEYkH6Zzp%2F4cyuW7VRcwI9BmsE6ujvdksdn%2F5fROALOhrHt4orGhegPqVJSyMwolyOQab7wdK5&X-Amz-Signature=7ed37b84bf69ab8a9eaa76ba519f8a0927eb4d4f959364d3d3d59d92a2129bd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645JF5NQC%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T181330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGZ%2FKo2hpfsEwZGhMz%2BvGkobYe%2FfEayqxrhgQA%2B3a2rHAiEA1nb8q%2ByLHFGdGWHzFfoFGPmGEIpS4YLhRZ5dDt0nwvUqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFrkqohqYSUqslpQZSrcAz8BUJISbJHiSJyBuVX4s%2B53FhQAi2V9Bkm7SxANI4WGDd8aAyJWM7OgXWVWIkbQNGsfOS7RhmRqH5FTimD2gm6H7aNSRlY1NY7%2BnH2bt9Kps3hYFYDvVrpXz71G0XeKkLLtXkn3Q4m7rF%2F3OfnkJMTQA86OSf4Yybj%2BzAzz3GpMAcZBcxrfx%2FSy%2FE%2BRhVXE7gkcWfL%2FLR9A%2Fsu3Py8U1xd6kQP6SwbB5dhPxbfvDq8b4MeKqBG0sX40fhwZBJdapES4lzbpeyiwPzts0AR5kSDF2jhxhrqekoXQylYSSCkPGW2RtUnf1XAUrGF37iIjFQhr1PGz9tLwrjBGPUy6RC%2BxOm2M8vPwFZNXUmxNn8QCMN5hyr0eGIjdcyk8%2BnNG5UPSteRUpVGrAPKQX8i0Om3AR5CZ1%2FDG%2BP0zCoTCszvMSpWe%2FiYYa4BwTL6FKh24wOPRdfK9MCiMX4fuDdW7oFGUd%2BIj6tNr346gciMa4Q8VXizyPtauEaVmTro4D98BHtOhOL99ESoXMTarAeYlEhSOPakx0%2FFXFCW8MMkZS1adgHGXMwVK78UoC%2Fs%2BzVkFg7oOBjU86XVnvBlPpLpSMUWjKq8Y4Fa2IqHfauw8iM5z%2FuTnOQhYnApCwv1QMMfn%2BcMGOqUBCYygRcO06RNN5Nexh0WBwRRceK2tsOLx%2Fx28dTkuBCXz34JReC6ocqkVD4fGLs18S%2Byl2Kws5GCZ7pnH6pAbK7VJ952YJfZ3D%2Bm1Via0BIUgpDH9NihMyLaxxKezgFhOVK1yK5ePVBOg3A%2Bw0dbEYkH6Zzp%2F4cyuW7VRcwI9BmsE6ujvdksdn%2F5fROALOhrHt4orGhegPqVJSyMwolyOQab7wdK5&X-Amz-Signature=08b925e5dfc552820c83b365f68e0a9c65b4d1fb502871b592c6179d07c2a170&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645JF5NQC%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T181330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGZ%2FKo2hpfsEwZGhMz%2BvGkobYe%2FfEayqxrhgQA%2B3a2rHAiEA1nb8q%2ByLHFGdGWHzFfoFGPmGEIpS4YLhRZ5dDt0nwvUqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFrkqohqYSUqslpQZSrcAz8BUJISbJHiSJyBuVX4s%2B53FhQAi2V9Bkm7SxANI4WGDd8aAyJWM7OgXWVWIkbQNGsfOS7RhmRqH5FTimD2gm6H7aNSRlY1NY7%2BnH2bt9Kps3hYFYDvVrpXz71G0XeKkLLtXkn3Q4m7rF%2F3OfnkJMTQA86OSf4Yybj%2BzAzz3GpMAcZBcxrfx%2FSy%2FE%2BRhVXE7gkcWfL%2FLR9A%2Fsu3Py8U1xd6kQP6SwbB5dhPxbfvDq8b4MeKqBG0sX40fhwZBJdapES4lzbpeyiwPzts0AR5kSDF2jhxhrqekoXQylYSSCkPGW2RtUnf1XAUrGF37iIjFQhr1PGz9tLwrjBGPUy6RC%2BxOm2M8vPwFZNXUmxNn8QCMN5hyr0eGIjdcyk8%2BnNG5UPSteRUpVGrAPKQX8i0Om3AR5CZ1%2FDG%2BP0zCoTCszvMSpWe%2FiYYa4BwTL6FKh24wOPRdfK9MCiMX4fuDdW7oFGUd%2BIj6tNr346gciMa4Q8VXizyPtauEaVmTro4D98BHtOhOL99ESoXMTarAeYlEhSOPakx0%2FFXFCW8MMkZS1adgHGXMwVK78UoC%2Fs%2BzVkFg7oOBjU86XVnvBlPpLpSMUWjKq8Y4Fa2IqHfauw8iM5z%2FuTnOQhYnApCwv1QMMfn%2BcMGOqUBCYygRcO06RNN5Nexh0WBwRRceK2tsOLx%2Fx28dTkuBCXz34JReC6ocqkVD4fGLs18S%2Byl2Kws5GCZ7pnH6pAbK7VJ952YJfZ3D%2Bm1Via0BIUgpDH9NihMyLaxxKezgFhOVK1yK5ePVBOg3A%2Bw0dbEYkH6Zzp%2F4cyuW7VRcwI9BmsE6ujvdksdn%2F5fROALOhrHt4orGhegPqVJSyMwolyOQab7wdK5&X-Amz-Signature=eb5dd6df83e9fae3209a8ad1c5c25c0af54256a90853d7607ff3324a81452877&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
