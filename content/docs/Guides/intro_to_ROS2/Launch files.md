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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EAB3PHH%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T081239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDmrxWio9v21dTW1r3mUqorLDhxpERl6nqaSPegcJ6qQIhAOxqnJs8nBD7Ufpx7ryc7MsjM527etItLjzGHWvEamznKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyscH0dL%2FWvLlnMlhEq3AMxHjLTZkD3Zn5wJyR70HywqmV3c1D26eu%2BVRqxITa9K7GJ8OZrnbmOC5wPp12I7SNMpv1gbVX%2BVh59HoexSM57eJNq4MVAv2UY4jW%2BWhfGYY%2BpCVm4boPU1Ez9BneE5reML1jdIAGattjZefvsYHn0NeDi1rswAFyWwjW04cN9sD5nFkAotypVXFanDQhwjrpcMN4VoomB1Y4OZI%2BQEUb40SXP3UiU05pFzoxpMYNMxd1mBi47uA%2Fgw6ya9OvwFOuE9Eb5CPMBhYRBuvtC%2F6d37fIfyH4QGE3lHCDSGEcA8DZEbX3wRXvmaNsVzu4b7b%2BxMzzGSGF%2BwggEWpRbc%2FzpQkkuYuxfh73lBjRXNZzHN1Ua6jvg1vuQZcuirRp%2FWBa1lNtNqTicIfGQ5LAxSB%2FzCeXWz%2FZt1wKqmamezdPJkPVmczTNimUpVn1IONIl010veHHSNPF%2Fms0OiClIu3RxJNKMGMDSXRjN9NfpLH%2FrsWO3J6nqoHJRZ1H6jrrmCK4%2FYKfFDb68CgD0Dh7nZGKn13JlWW9a7MMyBu7dEgZu1un7EARlansQj39pMom202HL1FJtocbdCo1veKT4712sUACiyyfzH35gCn2R8FFbLuZm8KnxEgGqhWz4uTC47LXBBjqkATQ8e4KfT%2BYDHnINv6ojRJd1NmrCGrIRtxRiupXKD%2Blig04dr9xxt0nyE8ZjLF6%2Bcdf2x3qJTuOmTsC4WS0hAhfLkzchItbmRU0LoD8CJpkqe%2F5CWK%2FjQflXmeQ5v9yFbaWCc2aki5xDBW72uwDu4fGLae%2FyKc3hkLF0T4odR5hgkE6tLDTc%2FOIpZ%2BxbEy%2Fg1S6NnULLjQbhf8jCW5E%2FqQ3LjycI&X-Amz-Signature=180441305891d93d65957ff73562e48fe02a62ebc856e0e1200488021e81d0a4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EAB3PHH%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T081239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDmrxWio9v21dTW1r3mUqorLDhxpERl6nqaSPegcJ6qQIhAOxqnJs8nBD7Ufpx7ryc7MsjM527etItLjzGHWvEamznKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyscH0dL%2FWvLlnMlhEq3AMxHjLTZkD3Zn5wJyR70HywqmV3c1D26eu%2BVRqxITa9K7GJ8OZrnbmOC5wPp12I7SNMpv1gbVX%2BVh59HoexSM57eJNq4MVAv2UY4jW%2BWhfGYY%2BpCVm4boPU1Ez9BneE5reML1jdIAGattjZefvsYHn0NeDi1rswAFyWwjW04cN9sD5nFkAotypVXFanDQhwjrpcMN4VoomB1Y4OZI%2BQEUb40SXP3UiU05pFzoxpMYNMxd1mBi47uA%2Fgw6ya9OvwFOuE9Eb5CPMBhYRBuvtC%2F6d37fIfyH4QGE3lHCDSGEcA8DZEbX3wRXvmaNsVzu4b7b%2BxMzzGSGF%2BwggEWpRbc%2FzpQkkuYuxfh73lBjRXNZzHN1Ua6jvg1vuQZcuirRp%2FWBa1lNtNqTicIfGQ5LAxSB%2FzCeXWz%2FZt1wKqmamezdPJkPVmczTNimUpVn1IONIl010veHHSNPF%2Fms0OiClIu3RxJNKMGMDSXRjN9NfpLH%2FrsWO3J6nqoHJRZ1H6jrrmCK4%2FYKfFDb68CgD0Dh7nZGKn13JlWW9a7MMyBu7dEgZu1un7EARlansQj39pMom202HL1FJtocbdCo1veKT4712sUACiyyfzH35gCn2R8FFbLuZm8KnxEgGqhWz4uTC47LXBBjqkATQ8e4KfT%2BYDHnINv6ojRJd1NmrCGrIRtxRiupXKD%2Blig04dr9xxt0nyE8ZjLF6%2Bcdf2x3qJTuOmTsC4WS0hAhfLkzchItbmRU0LoD8CJpkqe%2F5CWK%2FjQflXmeQ5v9yFbaWCc2aki5xDBW72uwDu4fGLae%2FyKc3hkLF0T4odR5hgkE6tLDTc%2FOIpZ%2BxbEy%2Fg1S6NnULLjQbhf8jCW5E%2FqQ3LjycI&X-Amz-Signature=77ae53e6621bd381c005ca7674fedf91d0734a946e4d0aaf3ca35d3916e66efb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EAB3PHH%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T081239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDmrxWio9v21dTW1r3mUqorLDhxpERl6nqaSPegcJ6qQIhAOxqnJs8nBD7Ufpx7ryc7MsjM527etItLjzGHWvEamznKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyscH0dL%2FWvLlnMlhEq3AMxHjLTZkD3Zn5wJyR70HywqmV3c1D26eu%2BVRqxITa9K7GJ8OZrnbmOC5wPp12I7SNMpv1gbVX%2BVh59HoexSM57eJNq4MVAv2UY4jW%2BWhfGYY%2BpCVm4boPU1Ez9BneE5reML1jdIAGattjZefvsYHn0NeDi1rswAFyWwjW04cN9sD5nFkAotypVXFanDQhwjrpcMN4VoomB1Y4OZI%2BQEUb40SXP3UiU05pFzoxpMYNMxd1mBi47uA%2Fgw6ya9OvwFOuE9Eb5CPMBhYRBuvtC%2F6d37fIfyH4QGE3lHCDSGEcA8DZEbX3wRXvmaNsVzu4b7b%2BxMzzGSGF%2BwggEWpRbc%2FzpQkkuYuxfh73lBjRXNZzHN1Ua6jvg1vuQZcuirRp%2FWBa1lNtNqTicIfGQ5LAxSB%2FzCeXWz%2FZt1wKqmamezdPJkPVmczTNimUpVn1IONIl010veHHSNPF%2Fms0OiClIu3RxJNKMGMDSXRjN9NfpLH%2FrsWO3J6nqoHJRZ1H6jrrmCK4%2FYKfFDb68CgD0Dh7nZGKn13JlWW9a7MMyBu7dEgZu1un7EARlansQj39pMom202HL1FJtocbdCo1veKT4712sUACiyyfzH35gCn2R8FFbLuZm8KnxEgGqhWz4uTC47LXBBjqkATQ8e4KfT%2BYDHnINv6ojRJd1NmrCGrIRtxRiupXKD%2Blig04dr9xxt0nyE8ZjLF6%2Bcdf2x3qJTuOmTsC4WS0hAhfLkzchItbmRU0LoD8CJpkqe%2F5CWK%2FjQflXmeQ5v9yFbaWCc2aki5xDBW72uwDu4fGLae%2FyKc3hkLF0T4odR5hgkE6tLDTc%2FOIpZ%2BxbEy%2Fg1S6NnULLjQbhf8jCW5E%2FqQ3LjycI&X-Amz-Signature=5a32a7f006cc2352a8b68cbbcc39ccdd5d03e3fbdefd7e38758696b402799fb9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
