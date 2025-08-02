---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N4NXXPW%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCA1UYrrM%2B2ju9HoUTuWeafFzzNESE9KNsHhQCFvglVSgIgCGihP3IbTHM67BWxPDWYDVcWMfaHqTH5jRdXMWF7UBUqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLxqU%2FYW%2BaGnewtdyrcA3H0qAsa7YFhsG%2FQahfzWehtSUGJwauP%2BiLq4j%2Bwy7u%2F1rjPsGHb8zIIoMwbUiKUvvAJhDakniwB0M%2BvPpovKQs8%2BkSfvYDreYp1MynsBRji1BqzQnjKiXhrXivJ7yV%2BOzJoicSH5i4re6scKYHQ9zgLh3BrwsVAhGaoTCFA4VXPFFf72sv4seA2d9Il1eIf2vUeOnbNFKCXanRRbenYMcSKhPjDzWVYntCFH3Fq4nuOoWsqgt2OhdtDkXN7cvhdBoDy4co%2BkDzRHsZ4kZaRTJtNx2Lu2mE15ihNrALd%2BY8JNTqITN7fYZ0fuxS02g4WQVcKCRXBKNvYSZzYnQhm%2FvHl6GalsWdINB2Fxtx3hOIYRkk5capc0EkXcECNKSskHr3Xfa0xj24yeGYKKIHynQGSBcRktxPoi95i61VDhvZRUBh0rfewOQNOTv8XWKeYvL5%2BZWBI%2ByhQ0F1u%2BEl5pioMBAcvcxU97S%2BJ%2F5xIRHUMnopga1dgmzcSVJU5yxamoZjvIZKXn%2B1lGRahTUez%2BJxdU7uAts%2BScmn8dNjJGkIaeBoksiGmpblzsZU1b4gVEVERLMof42QXf3fvUHjFasfe7%2B4b3Fw3XVICN%2FbcTLUHiuJHLUrFHWbb91AhMKyctsQGOqUBSaTTxdKvfYv6mpTrLZ%2BmBdNM03QXsKtknfd3dZa5m82g1NdRBnB6%2FICEa8eIeE7QxFsBCQeY62RmSVOJpxFfXXCsiEq1kg80tZebbyur09fWOCJIx2iNCnVPisjZ5GNaVOuIKEqxQPhtzGu8%2BG8DAbKi2xDkVBueIvtvoVd6zOXbJJUAagp8b5r156Dk2%2Bey4pLIuUhzILM2iPZeTHbLxFx%2BcbT5&X-Amz-Signature=f21889b22ea340a790e75be38e7f350795fe657a575d3226aa34833ef13fa436&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N4NXXPW%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCA1UYrrM%2B2ju9HoUTuWeafFzzNESE9KNsHhQCFvglVSgIgCGihP3IbTHM67BWxPDWYDVcWMfaHqTH5jRdXMWF7UBUqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLxqU%2FYW%2BaGnewtdyrcA3H0qAsa7YFhsG%2FQahfzWehtSUGJwauP%2BiLq4j%2Bwy7u%2F1rjPsGHb8zIIoMwbUiKUvvAJhDakniwB0M%2BvPpovKQs8%2BkSfvYDreYp1MynsBRji1BqzQnjKiXhrXivJ7yV%2BOzJoicSH5i4re6scKYHQ9zgLh3BrwsVAhGaoTCFA4VXPFFf72sv4seA2d9Il1eIf2vUeOnbNFKCXanRRbenYMcSKhPjDzWVYntCFH3Fq4nuOoWsqgt2OhdtDkXN7cvhdBoDy4co%2BkDzRHsZ4kZaRTJtNx2Lu2mE15ihNrALd%2BY8JNTqITN7fYZ0fuxS02g4WQVcKCRXBKNvYSZzYnQhm%2FvHl6GalsWdINB2Fxtx3hOIYRkk5capc0EkXcECNKSskHr3Xfa0xj24yeGYKKIHynQGSBcRktxPoi95i61VDhvZRUBh0rfewOQNOTv8XWKeYvL5%2BZWBI%2ByhQ0F1u%2BEl5pioMBAcvcxU97S%2BJ%2F5xIRHUMnopga1dgmzcSVJU5yxamoZjvIZKXn%2B1lGRahTUez%2BJxdU7uAts%2BScmn8dNjJGkIaeBoksiGmpblzsZU1b4gVEVERLMof42QXf3fvUHjFasfe7%2B4b3Fw3XVICN%2FbcTLUHiuJHLUrFHWbb91AhMKyctsQGOqUBSaTTxdKvfYv6mpTrLZ%2BmBdNM03QXsKtknfd3dZa5m82g1NdRBnB6%2FICEa8eIeE7QxFsBCQeY62RmSVOJpxFfXXCsiEq1kg80tZebbyur09fWOCJIx2iNCnVPisjZ5GNaVOuIKEqxQPhtzGu8%2BG8DAbKi2xDkVBueIvtvoVd6zOXbJJUAagp8b5r156Dk2%2Bey4pLIuUhzILM2iPZeTHbLxFx%2BcbT5&X-Amz-Signature=cbfd1e61b7c338dd919b65dba54102d57742abde440bc3e75732a45e6b32082b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N4NXXPW%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCA1UYrrM%2B2ju9HoUTuWeafFzzNESE9KNsHhQCFvglVSgIgCGihP3IbTHM67BWxPDWYDVcWMfaHqTH5jRdXMWF7UBUqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLxqU%2FYW%2BaGnewtdyrcA3H0qAsa7YFhsG%2FQahfzWehtSUGJwauP%2BiLq4j%2Bwy7u%2F1rjPsGHb8zIIoMwbUiKUvvAJhDakniwB0M%2BvPpovKQs8%2BkSfvYDreYp1MynsBRji1BqzQnjKiXhrXivJ7yV%2BOzJoicSH5i4re6scKYHQ9zgLh3BrwsVAhGaoTCFA4VXPFFf72sv4seA2d9Il1eIf2vUeOnbNFKCXanRRbenYMcSKhPjDzWVYntCFH3Fq4nuOoWsqgt2OhdtDkXN7cvhdBoDy4co%2BkDzRHsZ4kZaRTJtNx2Lu2mE15ihNrALd%2BY8JNTqITN7fYZ0fuxS02g4WQVcKCRXBKNvYSZzYnQhm%2FvHl6GalsWdINB2Fxtx3hOIYRkk5capc0EkXcECNKSskHr3Xfa0xj24yeGYKKIHynQGSBcRktxPoi95i61VDhvZRUBh0rfewOQNOTv8XWKeYvL5%2BZWBI%2ByhQ0F1u%2BEl5pioMBAcvcxU97S%2BJ%2F5xIRHUMnopga1dgmzcSVJU5yxamoZjvIZKXn%2B1lGRahTUez%2BJxdU7uAts%2BScmn8dNjJGkIaeBoksiGmpblzsZU1b4gVEVERLMof42QXf3fvUHjFasfe7%2B4b3Fw3XVICN%2FbcTLUHiuJHLUrFHWbb91AhMKyctsQGOqUBSaTTxdKvfYv6mpTrLZ%2BmBdNM03QXsKtknfd3dZa5m82g1NdRBnB6%2FICEa8eIeE7QxFsBCQeY62RmSVOJpxFfXXCsiEq1kg80tZebbyur09fWOCJIx2iNCnVPisjZ5GNaVOuIKEqxQPhtzGu8%2BG8DAbKi2xDkVBueIvtvoVd6zOXbJJUAagp8b5r156Dk2%2Bey4pLIuUhzILM2iPZeTHbLxFx%2BcbT5&X-Amz-Signature=c2ff5844c218939f7f82111c864fadacac30b5319936d3548b2b5442363a4740&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
