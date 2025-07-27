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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O2DH76G%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDpZwOls6WZkPjq2vDIWSOjITzUz9LFABa%2B%2FLnqYgmL%2BAIgaDct%2B7aIqeA9TycHsjp2AqRg7cHslnlPNb0miH36k00q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGVLBuYP5Ua5%2BPhAZyrcA7Acn%2FA4EZFpmjCCqjWA9J4%2BkkWgBh33EppQC5t25WETUn4Gi%2B%2BtHjeEp6nAfds0qWZ765MJtWd7DJsOzkBIHqGTtxPXiAQttQzAaikrIJatjiZ3f0jIX24SdkY0uH80LKo11AhnD%2F0V96TDC2J1TMxxCXLOFbmmDJbCTZhLEg2oCjBoH%2BN%2FwcuhChI7Kw35YSbXIZmDDeIvr2t29sUqvfcW7ml1yGfCqycI5LawUfnagBLD2BKFIpnRwIW3oe4pbalgDmG172A%2FAO9Y2wvfig9ln6dIobJ3sa5z7FcqOvUQMw6WJKc51Y8%2Fa6HWyRiYNKLqYFeJCvDzK0y%2FGDQBVhifsie8WQuzVh2YCtUz7i3cCugwql0WFFNTbPgxhIbXcxs6G0OnTdnf%2Bvc7%2FYh9MAIBKsNeMR3DqWY8W4qr2e0UEc8JZxwY5kTrO22y4W9BzEkE%2BGM9hWMdbStCtjgBxL1BlcnTS%2F2K5hy9iAQDK263XsQaF2XRgErkV27Wm0aMP09BvdJYL%2BUJstb4mgLMvTEgvJrXrFEwRzONtlgaztUi%2BBFv%2BeMs000%2FpGhqs0sgu45NpItGKJmoDqyUN2eJr%2FxTohBL7b9lWCMn4zD3t7OAHSVOTAylgzz%2F6hR9MI6CmcQGOqUBr%2F%2Bqo7otMfnkkdVMEeiT4xiRQ3RbgabqJt4pvB6OwNzAL0p3mjXxlFvb85c8NJFLdrkE7s%2F%2FFjpeTA4gGI4YJwKdtEgwZ3%2BD2a5HIs5s9c0QEB19oHdr0D7%2BEToMvX4iLi%2Fiz2JGXfBl6rwtyUGSwIdHUBDBjT7A%2FfJs%2Bn7atzvZXD%2BJB1oKMVUiWfeNMl0T%2BR83dP%2B3FDIezZOAWrpcK9tBURxu&X-Amz-Signature=d31df753c6a7820fe37b1cbae8bb9109ef2de7cb71b07ddd99be1c7c420b67cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O2DH76G%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDpZwOls6WZkPjq2vDIWSOjITzUz9LFABa%2B%2FLnqYgmL%2BAIgaDct%2B7aIqeA9TycHsjp2AqRg7cHslnlPNb0miH36k00q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGVLBuYP5Ua5%2BPhAZyrcA7Acn%2FA4EZFpmjCCqjWA9J4%2BkkWgBh33EppQC5t25WETUn4Gi%2B%2BtHjeEp6nAfds0qWZ765MJtWd7DJsOzkBIHqGTtxPXiAQttQzAaikrIJatjiZ3f0jIX24SdkY0uH80LKo11AhnD%2F0V96TDC2J1TMxxCXLOFbmmDJbCTZhLEg2oCjBoH%2BN%2FwcuhChI7Kw35YSbXIZmDDeIvr2t29sUqvfcW7ml1yGfCqycI5LawUfnagBLD2BKFIpnRwIW3oe4pbalgDmG172A%2FAO9Y2wvfig9ln6dIobJ3sa5z7FcqOvUQMw6WJKc51Y8%2Fa6HWyRiYNKLqYFeJCvDzK0y%2FGDQBVhifsie8WQuzVh2YCtUz7i3cCugwql0WFFNTbPgxhIbXcxs6G0OnTdnf%2Bvc7%2FYh9MAIBKsNeMR3DqWY8W4qr2e0UEc8JZxwY5kTrO22y4W9BzEkE%2BGM9hWMdbStCtjgBxL1BlcnTS%2F2K5hy9iAQDK263XsQaF2XRgErkV27Wm0aMP09BvdJYL%2BUJstb4mgLMvTEgvJrXrFEwRzONtlgaztUi%2BBFv%2BeMs000%2FpGhqs0sgu45NpItGKJmoDqyUN2eJr%2FxTohBL7b9lWCMn4zD3t7OAHSVOTAylgzz%2F6hR9MI6CmcQGOqUBr%2F%2Bqo7otMfnkkdVMEeiT4xiRQ3RbgabqJt4pvB6OwNzAL0p3mjXxlFvb85c8NJFLdrkE7s%2F%2FFjpeTA4gGI4YJwKdtEgwZ3%2BD2a5HIs5s9c0QEB19oHdr0D7%2BEToMvX4iLi%2Fiz2JGXfBl6rwtyUGSwIdHUBDBjT7A%2FfJs%2Bn7atzvZXD%2BJB1oKMVUiWfeNMl0T%2BR83dP%2B3FDIezZOAWrpcK9tBURxu&X-Amz-Signature=1fd69c2946c82a3573085d14718e8a5120f8cf897d917cb9a216f439bc13308b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O2DH76G%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDpZwOls6WZkPjq2vDIWSOjITzUz9LFABa%2B%2FLnqYgmL%2BAIgaDct%2B7aIqeA9TycHsjp2AqRg7cHslnlPNb0miH36k00q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGVLBuYP5Ua5%2BPhAZyrcA7Acn%2FA4EZFpmjCCqjWA9J4%2BkkWgBh33EppQC5t25WETUn4Gi%2B%2BtHjeEp6nAfds0qWZ765MJtWd7DJsOzkBIHqGTtxPXiAQttQzAaikrIJatjiZ3f0jIX24SdkY0uH80LKo11AhnD%2F0V96TDC2J1TMxxCXLOFbmmDJbCTZhLEg2oCjBoH%2BN%2FwcuhChI7Kw35YSbXIZmDDeIvr2t29sUqvfcW7ml1yGfCqycI5LawUfnagBLD2BKFIpnRwIW3oe4pbalgDmG172A%2FAO9Y2wvfig9ln6dIobJ3sa5z7FcqOvUQMw6WJKc51Y8%2Fa6HWyRiYNKLqYFeJCvDzK0y%2FGDQBVhifsie8WQuzVh2YCtUz7i3cCugwql0WFFNTbPgxhIbXcxs6G0OnTdnf%2Bvc7%2FYh9MAIBKsNeMR3DqWY8W4qr2e0UEc8JZxwY5kTrO22y4W9BzEkE%2BGM9hWMdbStCtjgBxL1BlcnTS%2F2K5hy9iAQDK263XsQaF2XRgErkV27Wm0aMP09BvdJYL%2BUJstb4mgLMvTEgvJrXrFEwRzONtlgaztUi%2BBFv%2BeMs000%2FpGhqs0sgu45NpItGKJmoDqyUN2eJr%2FxTohBL7b9lWCMn4zD3t7OAHSVOTAylgzz%2F6hR9MI6CmcQGOqUBr%2F%2Bqo7otMfnkkdVMEeiT4xiRQ3RbgabqJt4pvB6OwNzAL0p3mjXxlFvb85c8NJFLdrkE7s%2F%2FFjpeTA4gGI4YJwKdtEgwZ3%2BD2a5HIs5s9c0QEB19oHdr0D7%2BEToMvX4iLi%2Fiz2JGXfBl6rwtyUGSwIdHUBDBjT7A%2FfJs%2Bn7atzvZXD%2BJB1oKMVUiWfeNMl0T%2BR83dP%2B3FDIezZOAWrpcK9tBURxu&X-Amz-Signature=be53f233b800649f00fc9d1d95867c9bd9ffebdb90e28b075a5915f86326f230&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
