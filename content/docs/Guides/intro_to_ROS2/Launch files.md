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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLK25G3B%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T230817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCc0HsSYMwkkd3irZfo7SSGG58%2ByOxw%2Fbv3JZ13DlltmwIhAIObo28JwXWMyaqsl90PfZ07GD9WqidM51ViSLVjzBcbKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZEoA001T2CaXxBB4q3AOw33E4F1I1jaaXwssccYVfXNyv6aRQveQ2z247RYKsGbKwuowOfdbnm0DZy%2FOufTDiwSJvcMTyQunFCMwbUMEB2bwvr6Fk6QEfRHFwCK4wDB9hOlBKAOVXV7iZd3mjzD66y3s9iJ%2BpxRpp1q2YqJ6sga85AkM%2FDcMpNO8Pay2ryQ9ORrkBeZ50U42GvCW7d2l7LodqGGOJa9YFkD52UMsmB9pr3sU4gn72TLgpzdAycYQLxSsOQTu3xiWKRHLFY2IUR4e0gr2IJzmGUDZsLVnlLkGdN6fwddX9pAUyVDuNj9bMDfzzRzV1MTiUfGxo4ijCZR%2Fo%2FNkVC8S9LwEgx9PaCc1ZRrYqkO5Mwi41Y86lTexm%2FvVFygXbsGwxLCEs8Y%2B6YmE3PJs8f20h4%2Bva8JE%2BisR74WfUZFpXKNXN%2B%2BWrAGa0NtucyLRdeEWQr2qJlHLr102SEmrrREjGCYzQKS4DIDZtxnFRMP4IILF1WjASmNCzNZjdF9P733q10mAQtcYfXYW6B%2BX5bH1ZmM2eFmZK45gTtw1GwoxCRXQd4%2BOc3Zgnl6ihZCB0gflp5EuvJy2lRkyl49mgxi0U8dvLYQM65pFsuD16KM6wPQoDInfXuI7EYmL8q7SOUnwVnzC6p%2FPBBjqkAS1PLoBaSY6s13jqQJKuQ7UttmdF%2FlZjmDQwfPDJ4CA03C6%2B5QW8XmOTRydNIjfSY2yuysUbkBMM%2FfiCyVdSMepcyuXdDAUEaFStZIpkdQbEOzicw7m9veCbKU4L4SEimMEG6U%2BoDz%2FdG23xUO717KVtJ3UC4WBfX%2FELrpdxShdfxJFxuVhbHzRVKMFweXKbgW83U63uPDX0D8Geev0iXif4N77%2F&X-Amz-Signature=897bf7bf43dee7d407294366cb7344b7c2c88228e36c04ad9eb44a2acee7e82d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLK25G3B%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T230817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCc0HsSYMwkkd3irZfo7SSGG58%2ByOxw%2Fbv3JZ13DlltmwIhAIObo28JwXWMyaqsl90PfZ07GD9WqidM51ViSLVjzBcbKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZEoA001T2CaXxBB4q3AOw33E4F1I1jaaXwssccYVfXNyv6aRQveQ2z247RYKsGbKwuowOfdbnm0DZy%2FOufTDiwSJvcMTyQunFCMwbUMEB2bwvr6Fk6QEfRHFwCK4wDB9hOlBKAOVXV7iZd3mjzD66y3s9iJ%2BpxRpp1q2YqJ6sga85AkM%2FDcMpNO8Pay2ryQ9ORrkBeZ50U42GvCW7d2l7LodqGGOJa9YFkD52UMsmB9pr3sU4gn72TLgpzdAycYQLxSsOQTu3xiWKRHLFY2IUR4e0gr2IJzmGUDZsLVnlLkGdN6fwddX9pAUyVDuNj9bMDfzzRzV1MTiUfGxo4ijCZR%2Fo%2FNkVC8S9LwEgx9PaCc1ZRrYqkO5Mwi41Y86lTexm%2FvVFygXbsGwxLCEs8Y%2B6YmE3PJs8f20h4%2Bva8JE%2BisR74WfUZFpXKNXN%2B%2BWrAGa0NtucyLRdeEWQr2qJlHLr102SEmrrREjGCYzQKS4DIDZtxnFRMP4IILF1WjASmNCzNZjdF9P733q10mAQtcYfXYW6B%2BX5bH1ZmM2eFmZK45gTtw1GwoxCRXQd4%2BOc3Zgnl6ihZCB0gflp5EuvJy2lRkyl49mgxi0U8dvLYQM65pFsuD16KM6wPQoDInfXuI7EYmL8q7SOUnwVnzC6p%2FPBBjqkAS1PLoBaSY6s13jqQJKuQ7UttmdF%2FlZjmDQwfPDJ4CA03C6%2B5QW8XmOTRydNIjfSY2yuysUbkBMM%2FfiCyVdSMepcyuXdDAUEaFStZIpkdQbEOzicw7m9veCbKU4L4SEimMEG6U%2BoDz%2FdG23xUO717KVtJ3UC4WBfX%2FELrpdxShdfxJFxuVhbHzRVKMFweXKbgW83U63uPDX0D8Geev0iXif4N77%2F&X-Amz-Signature=adcdc20e00e5b8a5145ba78ec5b5817e3c2f8aa1405af493b8faf858dbbbe5d9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLK25G3B%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T230817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCc0HsSYMwkkd3irZfo7SSGG58%2ByOxw%2Fbv3JZ13DlltmwIhAIObo28JwXWMyaqsl90PfZ07GD9WqidM51ViSLVjzBcbKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZEoA001T2CaXxBB4q3AOw33E4F1I1jaaXwssccYVfXNyv6aRQveQ2z247RYKsGbKwuowOfdbnm0DZy%2FOufTDiwSJvcMTyQunFCMwbUMEB2bwvr6Fk6QEfRHFwCK4wDB9hOlBKAOVXV7iZd3mjzD66y3s9iJ%2BpxRpp1q2YqJ6sga85AkM%2FDcMpNO8Pay2ryQ9ORrkBeZ50U42GvCW7d2l7LodqGGOJa9YFkD52UMsmB9pr3sU4gn72TLgpzdAycYQLxSsOQTu3xiWKRHLFY2IUR4e0gr2IJzmGUDZsLVnlLkGdN6fwddX9pAUyVDuNj9bMDfzzRzV1MTiUfGxo4ijCZR%2Fo%2FNkVC8S9LwEgx9PaCc1ZRrYqkO5Mwi41Y86lTexm%2FvVFygXbsGwxLCEs8Y%2B6YmE3PJs8f20h4%2Bva8JE%2BisR74WfUZFpXKNXN%2B%2BWrAGa0NtucyLRdeEWQr2qJlHLr102SEmrrREjGCYzQKS4DIDZtxnFRMP4IILF1WjASmNCzNZjdF9P733q10mAQtcYfXYW6B%2BX5bH1ZmM2eFmZK45gTtw1GwoxCRXQd4%2BOc3Zgnl6ihZCB0gflp5EuvJy2lRkyl49mgxi0U8dvLYQM65pFsuD16KM6wPQoDInfXuI7EYmL8q7SOUnwVnzC6p%2FPBBjqkAS1PLoBaSY6s13jqQJKuQ7UttmdF%2FlZjmDQwfPDJ4CA03C6%2B5QW8XmOTRydNIjfSY2yuysUbkBMM%2FfiCyVdSMepcyuXdDAUEaFStZIpkdQbEOzicw7m9veCbKU4L4SEimMEG6U%2BoDz%2FdG23xUO717KVtJ3UC4WBfX%2FELrpdxShdfxJFxuVhbHzRVKMFweXKbgW83U63uPDX0D8Geev0iXif4N77%2F&X-Amz-Signature=ab0fd2ac7e1775c28225b90a225fe8dddf8e58755a17d5af5d2fe02145578a39&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
