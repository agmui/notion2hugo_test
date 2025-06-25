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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JZVU436%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIACuvYrIKbyvlz%2FfVfj6ZP8QSOmJ7cBl2HU4KsHeIeY1AiAVImbFHVNfdsacrgAMwPmEgn73vuzlcqCP5pJchh5pdir%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMjBw5C0idI%2FKhDrN4KtwDIRiY0akMywfkP4uv3lSLmJK0AwacUXEizd%2Fd9EAwJmX1wnjQ5TuZ9fvC%2FiDCx9coFAGzkWF8JekYLZbbXEZxaPmhMSBBxScb21af7Dqgki6BFWMQ%2FPqC9p4qjlPbb5ySNtFsUvvKexDZEkNVRZuKz%2B%2BYaKFj8vjqFXXcNFhpeJ5af7HahJCI6gF1A4NZVr6BzZnmTzYbHR%2BIF7exlTYad%2BuIb7wOERUkvXoRBxXWY1rnCFnjdmJxuHxpu%2BHd0X4vQpe%2BoMMBDu4LwgcMCN103%2FZoeXZ5iEqmmTR7PC%2BOuW8hTAgse4y4QvyrmWoR%2FcTzMYLS9LkdK1dhF934IRfLV8%2Ffxh86PgsItVRkGJxk6hHgxliNgH%2FSw3Xd4eowBsNx1eGTLnPxoGDrOA%2BWXFXLspwNSSHWdd%2FwKMm4qCnAcXCybnQJyeFzCtzovMa9kLTOrU7WvY4%2FkBK60q6m8HRITFGgTmz9pV44E87RMpWHqp3W9GrPHcDYOpuTRgUmRhFHrW4DKKwOu8KzUz6cTS0l2h%2FVS76g6GhO51kgF5vBeX9HSQn0KRxqcNubz9JePx0lH42T%2Bdj4HNb2J5%2FBOx8fyKAVz1nTNoXB7N4ZB1it6ctpGcv%2F1GiyxhiX%2BzYwjbrxwgY6pgGKD0fra8%2FTBbRP8Ug9bXib27iHT6vHSgkQx4uvE%2FsUWUXl9ovWEuZ%2FbQ45YtFd9%2Bk7iEohSFVxzYR4UrNRMlOK%2FvWP2EW%2B1K4xk7ygwYM6aFiCO%2BrcCmpRcX04yIebBvsNYg8GaYln5MZbOrJ0nrZwJ63u%2FY7RgPLXmR6FRtc%2FLfSylTV%2FyX%2BR3516kDsdKTuiAX9oDcKJTVkvQ6eHYqsbh4Y%2BXZCf&X-Amz-Signature=18317df3c78d6eb1246a446c81045d31fb044d4816ad4f460b49a1b260c4c6bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JZVU436%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIACuvYrIKbyvlz%2FfVfj6ZP8QSOmJ7cBl2HU4KsHeIeY1AiAVImbFHVNfdsacrgAMwPmEgn73vuzlcqCP5pJchh5pdir%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMjBw5C0idI%2FKhDrN4KtwDIRiY0akMywfkP4uv3lSLmJK0AwacUXEizd%2Fd9EAwJmX1wnjQ5TuZ9fvC%2FiDCx9coFAGzkWF8JekYLZbbXEZxaPmhMSBBxScb21af7Dqgki6BFWMQ%2FPqC9p4qjlPbb5ySNtFsUvvKexDZEkNVRZuKz%2B%2BYaKFj8vjqFXXcNFhpeJ5af7HahJCI6gF1A4NZVr6BzZnmTzYbHR%2BIF7exlTYad%2BuIb7wOERUkvXoRBxXWY1rnCFnjdmJxuHxpu%2BHd0X4vQpe%2BoMMBDu4LwgcMCN103%2FZoeXZ5iEqmmTR7PC%2BOuW8hTAgse4y4QvyrmWoR%2FcTzMYLS9LkdK1dhF934IRfLV8%2Ffxh86PgsItVRkGJxk6hHgxliNgH%2FSw3Xd4eowBsNx1eGTLnPxoGDrOA%2BWXFXLspwNSSHWdd%2FwKMm4qCnAcXCybnQJyeFzCtzovMa9kLTOrU7WvY4%2FkBK60q6m8HRITFGgTmz9pV44E87RMpWHqp3W9GrPHcDYOpuTRgUmRhFHrW4DKKwOu8KzUz6cTS0l2h%2FVS76g6GhO51kgF5vBeX9HSQn0KRxqcNubz9JePx0lH42T%2Bdj4HNb2J5%2FBOx8fyKAVz1nTNoXB7N4ZB1it6ctpGcv%2F1GiyxhiX%2BzYwjbrxwgY6pgGKD0fra8%2FTBbRP8Ug9bXib27iHT6vHSgkQx4uvE%2FsUWUXl9ovWEuZ%2FbQ45YtFd9%2Bk7iEohSFVxzYR4UrNRMlOK%2FvWP2EW%2B1K4xk7ygwYM6aFiCO%2BrcCmpRcX04yIebBvsNYg8GaYln5MZbOrJ0nrZwJ63u%2FY7RgPLXmR6FRtc%2FLfSylTV%2FyX%2BR3516kDsdKTuiAX9oDcKJTVkvQ6eHYqsbh4Y%2BXZCf&X-Amz-Signature=38a9f3f3cd89560e4c9e54f1ba9486e5708bc0232db0950274d8775db2f18b5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JZVU436%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIACuvYrIKbyvlz%2FfVfj6ZP8QSOmJ7cBl2HU4KsHeIeY1AiAVImbFHVNfdsacrgAMwPmEgn73vuzlcqCP5pJchh5pdir%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMjBw5C0idI%2FKhDrN4KtwDIRiY0akMywfkP4uv3lSLmJK0AwacUXEizd%2Fd9EAwJmX1wnjQ5TuZ9fvC%2FiDCx9coFAGzkWF8JekYLZbbXEZxaPmhMSBBxScb21af7Dqgki6BFWMQ%2FPqC9p4qjlPbb5ySNtFsUvvKexDZEkNVRZuKz%2B%2BYaKFj8vjqFXXcNFhpeJ5af7HahJCI6gF1A4NZVr6BzZnmTzYbHR%2BIF7exlTYad%2BuIb7wOERUkvXoRBxXWY1rnCFnjdmJxuHxpu%2BHd0X4vQpe%2BoMMBDu4LwgcMCN103%2FZoeXZ5iEqmmTR7PC%2BOuW8hTAgse4y4QvyrmWoR%2FcTzMYLS9LkdK1dhF934IRfLV8%2Ffxh86PgsItVRkGJxk6hHgxliNgH%2FSw3Xd4eowBsNx1eGTLnPxoGDrOA%2BWXFXLspwNSSHWdd%2FwKMm4qCnAcXCybnQJyeFzCtzovMa9kLTOrU7WvY4%2FkBK60q6m8HRITFGgTmz9pV44E87RMpWHqp3W9GrPHcDYOpuTRgUmRhFHrW4DKKwOu8KzUz6cTS0l2h%2FVS76g6GhO51kgF5vBeX9HSQn0KRxqcNubz9JePx0lH42T%2Bdj4HNb2J5%2FBOx8fyKAVz1nTNoXB7N4ZB1it6ctpGcv%2F1GiyxhiX%2BzYwjbrxwgY6pgGKD0fra8%2FTBbRP8Ug9bXib27iHT6vHSgkQx4uvE%2FsUWUXl9ovWEuZ%2FbQ45YtFd9%2Bk7iEohSFVxzYR4UrNRMlOK%2FvWP2EW%2B1K4xk7ygwYM6aFiCO%2BrcCmpRcX04yIebBvsNYg8GaYln5MZbOrJ0nrZwJ63u%2FY7RgPLXmR6FRtc%2FLfSylTV%2FyX%2BR3516kDsdKTuiAX9oDcKJTVkvQ6eHYqsbh4Y%2BXZCf&X-Amz-Signature=7ef358786259cc29137d8ebe77ce36ccad24c65a6310f41c007df4ba8de0ed6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
