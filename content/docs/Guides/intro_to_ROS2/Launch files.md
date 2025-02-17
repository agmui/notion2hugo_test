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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJUTVEVV%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T110529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCO5M3K7fmJNih39whubxN241m%2BkEvD01puBx2gP1On2gIgByz5YWk8bTI%2FQtG9ZP%2BEHMr5TYmXeF4ms84n11jhw8sq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDIWmFstpOG64QDMcqircA8p7ni3VFO2WZJZAfMilzkYz1b5WRowQeNClGOn1ENvm2z0wKqKTaOkE81iyo6%2FIkP88nH2nfmZ70u74T2UPKSuR3HYfvKVZrO8zdSxD5VZrxSsz5EGJWeTH3%2B1OUf9Say0zAQC6vK%2Bh%2BR5R9LW%2FD3lVoocjs%2BsV%2BBbdpCo8JSYTU%2BlzvfrXgpawFrWbZZ98xcj2i%2B47oBI4ZMmfhnFGQORc2Fm8dJJlJ8yMQcKMqlXnbjA2PVdwz932lGxfbSvFyQQwFalIvatDn90LqjMjqJBVC%2FfgisHUjQpbYcV7gkL9FCzCf3BrUgJrnZ3Tc9unyJosZVYphCbH8xCcsOyCUtqLip%2FaBwCgqRLuuVAxrRHvGMO7yl%2BB6qknafgtug6GaksPEqFo7W5ZoPTvRrZxnuo5x4aGptI3Txwa9AnFrOis3vsttyGEUCEMtGEVVr9zHU4hXTnOrBcaT8oaHAh7f5oNc4PnKcoFVFC8r1c0U6WprMMa8N4hFz8lpQ%2BJjW7c0KG%2Bsb8mTTp730TfuMkq3YJjeJX%2BJPJYjJHBeqy8O5eFF7IK1wTmK2472K4na0pYJVZhWXXf06u44KML3sDiPNDKLOsh8%2B3SPhNy6vB0f0TnvDJN8jbWgFbQRpqMMNHpy70GOqUBH9t6%2Bm1wxqylZ7hKVR6VqekycT7NxpwvLHYcNH4i0qylJOUdtSkADgvkaZXjJrB1mAmvd5QoD9l%2B4K3RjnF3%2FLnVHmrAZZKsa6XRxgcI4%2BARnxeZl5qtKUO4VJo5xW08GBQDhdqNL13HepQ%2B8mihMuXYGYsjiHFrEmlhDR8h888C7OXEhgBFruGVe2DvNMtMb9CjbIwehlw%2FbfYbfybIuwWBOoEe&X-Amz-Signature=a7bfc339373cdf1e31f986eba34b7f36c1174d9ac3d1c6990280d4a12b74812c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJUTVEVV%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T110529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCO5M3K7fmJNih39whubxN241m%2BkEvD01puBx2gP1On2gIgByz5YWk8bTI%2FQtG9ZP%2BEHMr5TYmXeF4ms84n11jhw8sq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDIWmFstpOG64QDMcqircA8p7ni3VFO2WZJZAfMilzkYz1b5WRowQeNClGOn1ENvm2z0wKqKTaOkE81iyo6%2FIkP88nH2nfmZ70u74T2UPKSuR3HYfvKVZrO8zdSxD5VZrxSsz5EGJWeTH3%2B1OUf9Say0zAQC6vK%2Bh%2BR5R9LW%2FD3lVoocjs%2BsV%2BBbdpCo8JSYTU%2BlzvfrXgpawFrWbZZ98xcj2i%2B47oBI4ZMmfhnFGQORc2Fm8dJJlJ8yMQcKMqlXnbjA2PVdwz932lGxfbSvFyQQwFalIvatDn90LqjMjqJBVC%2FfgisHUjQpbYcV7gkL9FCzCf3BrUgJrnZ3Tc9unyJosZVYphCbH8xCcsOyCUtqLip%2FaBwCgqRLuuVAxrRHvGMO7yl%2BB6qknafgtug6GaksPEqFo7W5ZoPTvRrZxnuo5x4aGptI3Txwa9AnFrOis3vsttyGEUCEMtGEVVr9zHU4hXTnOrBcaT8oaHAh7f5oNc4PnKcoFVFC8r1c0U6WprMMa8N4hFz8lpQ%2BJjW7c0KG%2Bsb8mTTp730TfuMkq3YJjeJX%2BJPJYjJHBeqy8O5eFF7IK1wTmK2472K4na0pYJVZhWXXf06u44KML3sDiPNDKLOsh8%2B3SPhNy6vB0f0TnvDJN8jbWgFbQRpqMMNHpy70GOqUBH9t6%2Bm1wxqylZ7hKVR6VqekycT7NxpwvLHYcNH4i0qylJOUdtSkADgvkaZXjJrB1mAmvd5QoD9l%2B4K3RjnF3%2FLnVHmrAZZKsa6XRxgcI4%2BARnxeZl5qtKUO4VJo5xW08GBQDhdqNL13HepQ%2B8mihMuXYGYsjiHFrEmlhDR8h888C7OXEhgBFruGVe2DvNMtMb9CjbIwehlw%2FbfYbfybIuwWBOoEe&X-Amz-Signature=b0c083d8cd286178c03cd345a3002038633883f473487b7061eac100bae0a5b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJUTVEVV%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T110529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCO5M3K7fmJNih39whubxN241m%2BkEvD01puBx2gP1On2gIgByz5YWk8bTI%2FQtG9ZP%2BEHMr5TYmXeF4ms84n11jhw8sq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDIWmFstpOG64QDMcqircA8p7ni3VFO2WZJZAfMilzkYz1b5WRowQeNClGOn1ENvm2z0wKqKTaOkE81iyo6%2FIkP88nH2nfmZ70u74T2UPKSuR3HYfvKVZrO8zdSxD5VZrxSsz5EGJWeTH3%2B1OUf9Say0zAQC6vK%2Bh%2BR5R9LW%2FD3lVoocjs%2BsV%2BBbdpCo8JSYTU%2BlzvfrXgpawFrWbZZ98xcj2i%2B47oBI4ZMmfhnFGQORc2Fm8dJJlJ8yMQcKMqlXnbjA2PVdwz932lGxfbSvFyQQwFalIvatDn90LqjMjqJBVC%2FfgisHUjQpbYcV7gkL9FCzCf3BrUgJrnZ3Tc9unyJosZVYphCbH8xCcsOyCUtqLip%2FaBwCgqRLuuVAxrRHvGMO7yl%2BB6qknafgtug6GaksPEqFo7W5ZoPTvRrZxnuo5x4aGptI3Txwa9AnFrOis3vsttyGEUCEMtGEVVr9zHU4hXTnOrBcaT8oaHAh7f5oNc4PnKcoFVFC8r1c0U6WprMMa8N4hFz8lpQ%2BJjW7c0KG%2Bsb8mTTp730TfuMkq3YJjeJX%2BJPJYjJHBeqy8O5eFF7IK1wTmK2472K4na0pYJVZhWXXf06u44KML3sDiPNDKLOsh8%2B3SPhNy6vB0f0TnvDJN8jbWgFbQRpqMMNHpy70GOqUBH9t6%2Bm1wxqylZ7hKVR6VqekycT7NxpwvLHYcNH4i0qylJOUdtSkADgvkaZXjJrB1mAmvd5QoD9l%2B4K3RjnF3%2FLnVHmrAZZKsa6XRxgcI4%2BARnxeZl5qtKUO4VJo5xW08GBQDhdqNL13HepQ%2B8mihMuXYGYsjiHFrEmlhDR8h888C7OXEhgBFruGVe2DvNMtMb9CjbIwehlw%2FbfYbfybIuwWBOoEe&X-Amz-Signature=3c0e3deefb609a262fcc2f1c541cddc4015e20bfcfebc5aedbf118cde43c13e6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
