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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PZAZ7BV%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T032149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGE4ktm9oBP0hwJXKx8lS3cNqu0WaP6bNSfDLBvg%2FsJoAiEA%2FFFnSkLLC03SJLWZVAljx6wHP4S%2B5ZIWN4NI0R3W6poqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXIcmaNoiymNByACCrcA8%2F9U0iJH22s%2F1pcSx60qRAGQPCTJTqFZVd03bIXQ35Y4PmG21ZN9KUgE5upnOklptKXArrXkUdHWt8uzu4%2Bj0DeYSKyK0XXEfrh6prks4PRqXfjNuylMAt7mf%2F5buFaQVcBKVOMOYXQn7kTb49gaE0Ac816bpHoT9wZGwAJ8hTni39uFqgSEg1IYjWXIJ6bGg9eygBV8bd958awr9J92%2FWPUahu9iWKSKSJCFeeimKXcEmigHCu%2BRc5akdcNkcbjsPM%2BbofTkkdRUeGClqLQ9o43%2FjapYZRAcgQBVnSpdwgFuG7a8kLzLT%2BSjey6n8qL52GfO4Zuv4NQw7ryN3%2F%2Fz80SV4MSBqE5vr%2FcG6F0tY5JqcsX%2BOe7cryKl6WLYduH1DrKRBJ9wlJ%2F9f55v%2BwTDeAWwRVs%2B0wQUYwVItpu277QH3fElmMBlbUb%2Fla2Tue9tz8lqJMC3ZOMkPejQAs67cqXIYC9ApGUn4aL7OG69air8gB%2BJxJkbJvaTjdT6HdPUymBO5Mi%2Fb4gft71a3aYSaiTF6aD9TJswMf23204WCQJ17g%2BGPmMeLjDEqI7UaOgsn44aFDY1poxUq52owfNE9b%2BRiFYab9lXk5VXVUASM6PKwxdRLGwH%2FU6MwTMIiijMAGOqUBhuWiHGp%2B90SJp%2BzW4snPGVmzcGiUp26XRa5izgJxF2L4z1oiLVBY36NdudJlhUX04e%2Fn%2B1sWYW86li%2BYsyW4faK6gDIdOX92XTdr6e3MXOJfm63MFpudgOMRuOtMsc9gk4lM9hGyIHUAMQhfSXRxOkwL3YF3VoIB8dkZ8RFbBsJAoLldfUq%2BtxnnKzT7R6%2B3uWN4CFA4ye1Tf%2Bh%2BvOQY7dp%2Fr%2FqX&X-Amz-Signature=b3dd53ad2cb3541e00ee944c15f61a98204536256dfed880d797b5ccd204b25d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PZAZ7BV%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T032149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGE4ktm9oBP0hwJXKx8lS3cNqu0WaP6bNSfDLBvg%2FsJoAiEA%2FFFnSkLLC03SJLWZVAljx6wHP4S%2B5ZIWN4NI0R3W6poqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXIcmaNoiymNByACCrcA8%2F9U0iJH22s%2F1pcSx60qRAGQPCTJTqFZVd03bIXQ35Y4PmG21ZN9KUgE5upnOklptKXArrXkUdHWt8uzu4%2Bj0DeYSKyK0XXEfrh6prks4PRqXfjNuylMAt7mf%2F5buFaQVcBKVOMOYXQn7kTb49gaE0Ac816bpHoT9wZGwAJ8hTni39uFqgSEg1IYjWXIJ6bGg9eygBV8bd958awr9J92%2FWPUahu9iWKSKSJCFeeimKXcEmigHCu%2BRc5akdcNkcbjsPM%2BbofTkkdRUeGClqLQ9o43%2FjapYZRAcgQBVnSpdwgFuG7a8kLzLT%2BSjey6n8qL52GfO4Zuv4NQw7ryN3%2F%2Fz80SV4MSBqE5vr%2FcG6F0tY5JqcsX%2BOe7cryKl6WLYduH1DrKRBJ9wlJ%2F9f55v%2BwTDeAWwRVs%2B0wQUYwVItpu277QH3fElmMBlbUb%2Fla2Tue9tz8lqJMC3ZOMkPejQAs67cqXIYC9ApGUn4aL7OG69air8gB%2BJxJkbJvaTjdT6HdPUymBO5Mi%2Fb4gft71a3aYSaiTF6aD9TJswMf23204WCQJ17g%2BGPmMeLjDEqI7UaOgsn44aFDY1poxUq52owfNE9b%2BRiFYab9lXk5VXVUASM6PKwxdRLGwH%2FU6MwTMIiijMAGOqUBhuWiHGp%2B90SJp%2BzW4snPGVmzcGiUp26XRa5izgJxF2L4z1oiLVBY36NdudJlhUX04e%2Fn%2B1sWYW86li%2BYsyW4faK6gDIdOX92XTdr6e3MXOJfm63MFpudgOMRuOtMsc9gk4lM9hGyIHUAMQhfSXRxOkwL3YF3VoIB8dkZ8RFbBsJAoLldfUq%2BtxnnKzT7R6%2B3uWN4CFA4ye1Tf%2Bh%2BvOQY7dp%2Fr%2FqX&X-Amz-Signature=8ef37325901c78c7107ca846f9cbc82696db4bceacdb48169f6f148323162b47&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PZAZ7BV%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T032149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGE4ktm9oBP0hwJXKx8lS3cNqu0WaP6bNSfDLBvg%2FsJoAiEA%2FFFnSkLLC03SJLWZVAljx6wHP4S%2B5ZIWN4NI0R3W6poqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXIcmaNoiymNByACCrcA8%2F9U0iJH22s%2F1pcSx60qRAGQPCTJTqFZVd03bIXQ35Y4PmG21ZN9KUgE5upnOklptKXArrXkUdHWt8uzu4%2Bj0DeYSKyK0XXEfrh6prks4PRqXfjNuylMAt7mf%2F5buFaQVcBKVOMOYXQn7kTb49gaE0Ac816bpHoT9wZGwAJ8hTni39uFqgSEg1IYjWXIJ6bGg9eygBV8bd958awr9J92%2FWPUahu9iWKSKSJCFeeimKXcEmigHCu%2BRc5akdcNkcbjsPM%2BbofTkkdRUeGClqLQ9o43%2FjapYZRAcgQBVnSpdwgFuG7a8kLzLT%2BSjey6n8qL52GfO4Zuv4NQw7ryN3%2F%2Fz80SV4MSBqE5vr%2FcG6F0tY5JqcsX%2BOe7cryKl6WLYduH1DrKRBJ9wlJ%2F9f55v%2BwTDeAWwRVs%2B0wQUYwVItpu277QH3fElmMBlbUb%2Fla2Tue9tz8lqJMC3ZOMkPejQAs67cqXIYC9ApGUn4aL7OG69air8gB%2BJxJkbJvaTjdT6HdPUymBO5Mi%2Fb4gft71a3aYSaiTF6aD9TJswMf23204WCQJ17g%2BGPmMeLjDEqI7UaOgsn44aFDY1poxUq52owfNE9b%2BRiFYab9lXk5VXVUASM6PKwxdRLGwH%2FU6MwTMIiijMAGOqUBhuWiHGp%2B90SJp%2BzW4snPGVmzcGiUp26XRa5izgJxF2L4z1oiLVBY36NdudJlhUX04e%2Fn%2B1sWYW86li%2BYsyW4faK6gDIdOX92XTdr6e3MXOJfm63MFpudgOMRuOtMsc9gk4lM9hGyIHUAMQhfSXRxOkwL3YF3VoIB8dkZ8RFbBsJAoLldfUq%2BtxnnKzT7R6%2B3uWN4CFA4ye1Tf%2Bh%2BvOQY7dp%2Fr%2FqX&X-Amz-Signature=a74bca0b028e9d7f4623c294c848f32d7474a647a82ff5f301277b9931fe6dc9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
