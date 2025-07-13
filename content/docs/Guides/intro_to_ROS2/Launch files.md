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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO7ZOAGV%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIFX7VAjdrbCULio2bV2vte58JETRf944KgDX1JXbrV6yAiEAuYrgkbjW%2BCGC1XgsYGfwrKXuMOa0562htbK2XZMNB4Qq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDAO6i1rgrvQMAvEsXSrcA3QFdEACdYjOq4i%2F2UgvcoL0%2B01O4HnkRtUrKdLfUnVpuRI6UhoSkvx%2FeD%2FaJwRoLelrTX6sX1VohR2M0Gl1EGoUtn95nSn63%2FfUzBF8UosQ%2BtXvq%2F0K43yNkhUM1Zae0g%2BfnCtFduQnRzyEyBEZ7Ql4yK3wY9pq471kwLQdiyBBC2tXwrrHIEcVTDIFGYVFQ1E3pqzQVc34QkNn8sipRdUW4gUjdmCveiOeK2VtOoZ9e8NNRFGwsnJu%2BBnB4sGhAvHvjAC1NCDAU4Q%2Bru4YrCrYByPLJMMujhx5ikHDnztdB3%2Flo8gHJH9Dr3dGDVzd3iAbY%2BpIAvYr%2FzT6XicHpkN1uzloR6Kkxr%2Fm36Xx0Yvlmk9dNEgir6cwW1FHfsYk%2BDr14%2BJst5VCBSGiVJlYEHmzu7Q0AGJYnnFI3Xhv0nG3H%2Fm9CRVgdgFMElUzTBk9Kk%2F%2F1lVLwcYecLEUskzhMnb7VCbQm4dCRKOhP3JgsoO5AzVqaA%2FBrtnqOBIXgaZefUBJR3vJq1heZ0H3iT8hYztnuTF67k77bKdrdpjyHATbaneB7KLZw8g%2FmjvwDFvE0FKYLPvBnowfGRW0YzHoLhRw9dZjAwfy%2FxJUjvdUmxDiWISjQuDn9Wgr1OQUMInJ0MMGOqUBSpg9GpvPoLQvDXaZzViATtuy40967%2FtX60LsOorivS77fp2m8U3WfRX93vllMUxlpvT%2BsFUXHj7HDUu%2B6ooCn2MN7XmTz6WbzT0rhEgEyNv9jm2Eo5aDoJqIvPrxy6%2BjYfIbVzVZQQ7SNzD9xspZLMI14rwNX9MNEF8EpAMPTXgKYAmqXMSB%2FXpw%2FBFjWiLgqUkxl1Lg90Oe5e0RmTsyuw3JRsSD&X-Amz-Signature=c8914e52a418d9a916ea4bd230ba8694f5a32aac729ef2a8098083d16ff3b221&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO7ZOAGV%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIFX7VAjdrbCULio2bV2vte58JETRf944KgDX1JXbrV6yAiEAuYrgkbjW%2BCGC1XgsYGfwrKXuMOa0562htbK2XZMNB4Qq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDAO6i1rgrvQMAvEsXSrcA3QFdEACdYjOq4i%2F2UgvcoL0%2B01O4HnkRtUrKdLfUnVpuRI6UhoSkvx%2FeD%2FaJwRoLelrTX6sX1VohR2M0Gl1EGoUtn95nSn63%2FfUzBF8UosQ%2BtXvq%2F0K43yNkhUM1Zae0g%2BfnCtFduQnRzyEyBEZ7Ql4yK3wY9pq471kwLQdiyBBC2tXwrrHIEcVTDIFGYVFQ1E3pqzQVc34QkNn8sipRdUW4gUjdmCveiOeK2VtOoZ9e8NNRFGwsnJu%2BBnB4sGhAvHvjAC1NCDAU4Q%2Bru4YrCrYByPLJMMujhx5ikHDnztdB3%2Flo8gHJH9Dr3dGDVzd3iAbY%2BpIAvYr%2FzT6XicHpkN1uzloR6Kkxr%2Fm36Xx0Yvlmk9dNEgir6cwW1FHfsYk%2BDr14%2BJst5VCBSGiVJlYEHmzu7Q0AGJYnnFI3Xhv0nG3H%2Fm9CRVgdgFMElUzTBk9Kk%2F%2F1lVLwcYecLEUskzhMnb7VCbQm4dCRKOhP3JgsoO5AzVqaA%2FBrtnqOBIXgaZefUBJR3vJq1heZ0H3iT8hYztnuTF67k77bKdrdpjyHATbaneB7KLZw8g%2FmjvwDFvE0FKYLPvBnowfGRW0YzHoLhRw9dZjAwfy%2FxJUjvdUmxDiWISjQuDn9Wgr1OQUMInJ0MMGOqUBSpg9GpvPoLQvDXaZzViATtuy40967%2FtX60LsOorivS77fp2m8U3WfRX93vllMUxlpvT%2BsFUXHj7HDUu%2B6ooCn2MN7XmTz6WbzT0rhEgEyNv9jm2Eo5aDoJqIvPrxy6%2BjYfIbVzVZQQ7SNzD9xspZLMI14rwNX9MNEF8EpAMPTXgKYAmqXMSB%2FXpw%2FBFjWiLgqUkxl1Lg90Oe5e0RmTsyuw3JRsSD&X-Amz-Signature=0cec03c8c4232bdf5259f1e457ee197661d37c519156b3110867b493e9851514&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO7ZOAGV%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIFX7VAjdrbCULio2bV2vte58JETRf944KgDX1JXbrV6yAiEAuYrgkbjW%2BCGC1XgsYGfwrKXuMOa0562htbK2XZMNB4Qq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDAO6i1rgrvQMAvEsXSrcA3QFdEACdYjOq4i%2F2UgvcoL0%2B01O4HnkRtUrKdLfUnVpuRI6UhoSkvx%2FeD%2FaJwRoLelrTX6sX1VohR2M0Gl1EGoUtn95nSn63%2FfUzBF8UosQ%2BtXvq%2F0K43yNkhUM1Zae0g%2BfnCtFduQnRzyEyBEZ7Ql4yK3wY9pq471kwLQdiyBBC2tXwrrHIEcVTDIFGYVFQ1E3pqzQVc34QkNn8sipRdUW4gUjdmCveiOeK2VtOoZ9e8NNRFGwsnJu%2BBnB4sGhAvHvjAC1NCDAU4Q%2Bru4YrCrYByPLJMMujhx5ikHDnztdB3%2Flo8gHJH9Dr3dGDVzd3iAbY%2BpIAvYr%2FzT6XicHpkN1uzloR6Kkxr%2Fm36Xx0Yvlmk9dNEgir6cwW1FHfsYk%2BDr14%2BJst5VCBSGiVJlYEHmzu7Q0AGJYnnFI3Xhv0nG3H%2Fm9CRVgdgFMElUzTBk9Kk%2F%2F1lVLwcYecLEUskzhMnb7VCbQm4dCRKOhP3JgsoO5AzVqaA%2FBrtnqOBIXgaZefUBJR3vJq1heZ0H3iT8hYztnuTF67k77bKdrdpjyHATbaneB7KLZw8g%2FmjvwDFvE0FKYLPvBnowfGRW0YzHoLhRw9dZjAwfy%2FxJUjvdUmxDiWISjQuDn9Wgr1OQUMInJ0MMGOqUBSpg9GpvPoLQvDXaZzViATtuy40967%2FtX60LsOorivS77fp2m8U3WfRX93vllMUxlpvT%2BsFUXHj7HDUu%2B6ooCn2MN7XmTz6WbzT0rhEgEyNv9jm2Eo5aDoJqIvPrxy6%2BjYfIbVzVZQQ7SNzD9xspZLMI14rwNX9MNEF8EpAMPTXgKYAmqXMSB%2FXpw%2FBFjWiLgqUkxl1Lg90Oe5e0RmTsyuw3JRsSD&X-Amz-Signature=4066337f6a2939fe39457839d32843e131ebc4deac5240915d397c02b6e70ccf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
