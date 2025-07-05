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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TCBSYBX%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIF94lPcMuy0kMaE583HkW57MZi0ZUB8SnX6AyFq4UEVzAiEAiDh6l%2BlH9MG956eKF4TCytPO5VchYM39b5DUVQfCrCoq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDLhy30sMhucAbPXLQircA2OC0eWBqX4SKWSy9dSEhOxF128TkzbbMhSWyyM7J4WM0VjtvFaG%2F3bABOcuTVoJNTy5Lx09Ei%2B0WWhNDKD4JnIRtc7BcGfXQNB4i8BU1UMr2%2B9SwU3KayOLGUsxk2OPv%2BoeTAM2bClLxNsE7VoVpZ7a5f2pcQ9xMLayUM6iQkZi4WoKXdZAdYM1fYigSFnpUbAHVIG6Dn3bXBRkVn4y%2FYPz70XE2nEsQJp5IQustr4EV1oIhT4%2FePuUJKXgDD7QJfJFPUxgpn31MpVXa7T3%2FVH89DVFqD7ABZsJStKMJhIeg1qxDSHj8J3W%2Fvv4iOhmcFERAOp85kG1jFNTNHuHwgqpYtMyn0AmMZfo2b90WKM2nansnRzxml%2Fm%2Fpg5nD7Tw0ZuGoKrGydVK0mofja%2Fa4Yh5qrPNRz9IPwjmYhDZQyiRBjYssIfXPfl8NMz0x73eS4afNX3sswTfPBgBz1k8rIyoh278SaI2JXB0IPUTNwQDNH4xr02MK3v8rUjBrnZCTgPmmKlBp2ENPHnqD1rHbgQ77IO81TicYAqDPMqQTIb11eOm1w9pMV16dCfEu8%2F5L8IQqkdVgtcywWTtfQQ95Psbspkmdb9YReihb95bazPf1l7aaStWoP2KVSrMI2GpsMGOqUBAkML%2BT7bWFiuRX2NuQVqxQ7i7QHHhzVkiIWGN7GVMedE2EDxlX2%2FdHUxQ375Iux1IrafSlP9hAlUvy9hL4VT1vOc7AqbP%2BLcmLajDGsEnaEYpv3K2SqxnIvq%2BQgoN3EnjwvwX4fhlD4lJ12D8DBF7dbxTG%2FWFpBs3HOR7iGe3Z9O1sSxcnFZ5WhTqKHKaZdor6sv8bEU0q1qOCxLwppMWLLUJbHj&X-Amz-Signature=8a535d16e16c5c1003f00a1a69697a9f9e0ecac420e3f012290ecd1ac05bf1ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TCBSYBX%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIF94lPcMuy0kMaE583HkW57MZi0ZUB8SnX6AyFq4UEVzAiEAiDh6l%2BlH9MG956eKF4TCytPO5VchYM39b5DUVQfCrCoq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDLhy30sMhucAbPXLQircA2OC0eWBqX4SKWSy9dSEhOxF128TkzbbMhSWyyM7J4WM0VjtvFaG%2F3bABOcuTVoJNTy5Lx09Ei%2B0WWhNDKD4JnIRtc7BcGfXQNB4i8BU1UMr2%2B9SwU3KayOLGUsxk2OPv%2BoeTAM2bClLxNsE7VoVpZ7a5f2pcQ9xMLayUM6iQkZi4WoKXdZAdYM1fYigSFnpUbAHVIG6Dn3bXBRkVn4y%2FYPz70XE2nEsQJp5IQustr4EV1oIhT4%2FePuUJKXgDD7QJfJFPUxgpn31MpVXa7T3%2FVH89DVFqD7ABZsJStKMJhIeg1qxDSHj8J3W%2Fvv4iOhmcFERAOp85kG1jFNTNHuHwgqpYtMyn0AmMZfo2b90WKM2nansnRzxml%2Fm%2Fpg5nD7Tw0ZuGoKrGydVK0mofja%2Fa4Yh5qrPNRz9IPwjmYhDZQyiRBjYssIfXPfl8NMz0x73eS4afNX3sswTfPBgBz1k8rIyoh278SaI2JXB0IPUTNwQDNH4xr02MK3v8rUjBrnZCTgPmmKlBp2ENPHnqD1rHbgQ77IO81TicYAqDPMqQTIb11eOm1w9pMV16dCfEu8%2F5L8IQqkdVgtcywWTtfQQ95Psbspkmdb9YReihb95bazPf1l7aaStWoP2KVSrMI2GpsMGOqUBAkML%2BT7bWFiuRX2NuQVqxQ7i7QHHhzVkiIWGN7GVMedE2EDxlX2%2FdHUxQ375Iux1IrafSlP9hAlUvy9hL4VT1vOc7AqbP%2BLcmLajDGsEnaEYpv3K2SqxnIvq%2BQgoN3EnjwvwX4fhlD4lJ12D8DBF7dbxTG%2FWFpBs3HOR7iGe3Z9O1sSxcnFZ5WhTqKHKaZdor6sv8bEU0q1qOCxLwppMWLLUJbHj&X-Amz-Signature=666c592ff603e704031e01cb2f0f400f047582ca661bcbd3c379c612aff0cf5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TCBSYBX%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIF94lPcMuy0kMaE583HkW57MZi0ZUB8SnX6AyFq4UEVzAiEAiDh6l%2BlH9MG956eKF4TCytPO5VchYM39b5DUVQfCrCoq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDLhy30sMhucAbPXLQircA2OC0eWBqX4SKWSy9dSEhOxF128TkzbbMhSWyyM7J4WM0VjtvFaG%2F3bABOcuTVoJNTy5Lx09Ei%2B0WWhNDKD4JnIRtc7BcGfXQNB4i8BU1UMr2%2B9SwU3KayOLGUsxk2OPv%2BoeTAM2bClLxNsE7VoVpZ7a5f2pcQ9xMLayUM6iQkZi4WoKXdZAdYM1fYigSFnpUbAHVIG6Dn3bXBRkVn4y%2FYPz70XE2nEsQJp5IQustr4EV1oIhT4%2FePuUJKXgDD7QJfJFPUxgpn31MpVXa7T3%2FVH89DVFqD7ABZsJStKMJhIeg1qxDSHj8J3W%2Fvv4iOhmcFERAOp85kG1jFNTNHuHwgqpYtMyn0AmMZfo2b90WKM2nansnRzxml%2Fm%2Fpg5nD7Tw0ZuGoKrGydVK0mofja%2Fa4Yh5qrPNRz9IPwjmYhDZQyiRBjYssIfXPfl8NMz0x73eS4afNX3sswTfPBgBz1k8rIyoh278SaI2JXB0IPUTNwQDNH4xr02MK3v8rUjBrnZCTgPmmKlBp2ENPHnqD1rHbgQ77IO81TicYAqDPMqQTIb11eOm1w9pMV16dCfEu8%2F5L8IQqkdVgtcywWTtfQQ95Psbspkmdb9YReihb95bazPf1l7aaStWoP2KVSrMI2GpsMGOqUBAkML%2BT7bWFiuRX2NuQVqxQ7i7QHHhzVkiIWGN7GVMedE2EDxlX2%2FdHUxQ375Iux1IrafSlP9hAlUvy9hL4VT1vOc7AqbP%2BLcmLajDGsEnaEYpv3K2SqxnIvq%2BQgoN3EnjwvwX4fhlD4lJ12D8DBF7dbxTG%2FWFpBs3HOR7iGe3Z9O1sSxcnFZ5WhTqKHKaZdor6sv8bEU0q1qOCxLwppMWLLUJbHj&X-Amz-Signature=d6645e752640ba65e2d4db50926fb8f18ae9f3e603e8d0a986c25a813fc18979&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
