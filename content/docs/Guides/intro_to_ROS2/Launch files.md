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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPLKQSHM%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T071414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQD9KpYFGxtvQQOVreo6hWEmgOtFaJfdlmgFQYe8MHrHygIhAPVgFAqNeFw526zB%2FrJSQyMCsMU%2FdD%2FsqqrrIBTTulozKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxIINyNVvN6Uoc0Vu4q3AOP7qCwdM5ZKet0%2FkMHrKaAZHy4hSH8PDAFo3tAUo7SXlF6fCvus5WQlrXzEusKO73a4W12XtxrpQ46%2FWYADXRWRqToJa6iYmoOg990m0%2B%2Bv6I0MuGqaM3wYf8OtsfGWsH3B%2BJhd%2FlaeHMtY3Db9ayEmjtKIIMNvyPBG05dszsO3VjNhrf24hOxaFrbOe%2BPb87Rc1umQ4I7bFXYJaN0hzqp%2BMzM0D9p7%2BzFJ7nSryGeM7cB%2FOiXnDLRhOazLR%2BeAbx0H4Vu81iywBzANLtyN%2BIJvZffJ6DibsiwFNycRKsufMEX6SdwtQDcSCUhIeZ%2BUa3uATwPnKyuIrxEueAFuio6d%2FHeAFio7Vq0fJCnqeN7b23N3ZS8ltTrpmB2pgTEWBwFC%2BVDvzV5miXw26kNxiAUPF%2B04HiSVBnBwqDG3nwMe5whJOP06nedW7deLpmA8k4zud1m7%2BgENF2StKYGVy48v3tH5o9GTqAbKY5o1MRxzgArjSKKfQI9QLwGY7NkSCFDFDgrOLxa%2F1v3qu9tT%2BW2oBCYuEt04Wmg8fW5Spo8Rs4YPFpxtn3AtKVPx36v1EmRxj%2BOJBf5czaroYJ8urifUTAW%2Bxhfs9ZvZ9qsv1fizr9UAuqZc%2F82OGFTVTDs1ufDBjqkATbSKnP%2BZaMXrk33SSEU1hV1U9zYXFX0iu1LhlsJHtsDdSx%2BFIMbj5lkti9F2qzYYYqVH43qTELqFlVnVjYkR1PbPiFKeu4WtSTstk866YcB8TuphUDgQkq1MuSAhZZvncp0Z%2Be03USdi5obMvQTcp8%2BtLdCy10vIWHp8LxuUOH%2Fej%2FXj5Kqr59wgQMz4RrSo1wF0e1XkmXHXzB7koppRsZDm8gW&X-Amz-Signature=545d8bfe1b77f8036729cbb0b115024021a44a8aceb5b2f75a873e01d6d5bf17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPLKQSHM%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T071414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQD9KpYFGxtvQQOVreo6hWEmgOtFaJfdlmgFQYe8MHrHygIhAPVgFAqNeFw526zB%2FrJSQyMCsMU%2FdD%2FsqqrrIBTTulozKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxIINyNVvN6Uoc0Vu4q3AOP7qCwdM5ZKet0%2FkMHrKaAZHy4hSH8PDAFo3tAUo7SXlF6fCvus5WQlrXzEusKO73a4W12XtxrpQ46%2FWYADXRWRqToJa6iYmoOg990m0%2B%2Bv6I0MuGqaM3wYf8OtsfGWsH3B%2BJhd%2FlaeHMtY3Db9ayEmjtKIIMNvyPBG05dszsO3VjNhrf24hOxaFrbOe%2BPb87Rc1umQ4I7bFXYJaN0hzqp%2BMzM0D9p7%2BzFJ7nSryGeM7cB%2FOiXnDLRhOazLR%2BeAbx0H4Vu81iywBzANLtyN%2BIJvZffJ6DibsiwFNycRKsufMEX6SdwtQDcSCUhIeZ%2BUa3uATwPnKyuIrxEueAFuio6d%2FHeAFio7Vq0fJCnqeN7b23N3ZS8ltTrpmB2pgTEWBwFC%2BVDvzV5miXw26kNxiAUPF%2B04HiSVBnBwqDG3nwMe5whJOP06nedW7deLpmA8k4zud1m7%2BgENF2StKYGVy48v3tH5o9GTqAbKY5o1MRxzgArjSKKfQI9QLwGY7NkSCFDFDgrOLxa%2F1v3qu9tT%2BW2oBCYuEt04Wmg8fW5Spo8Rs4YPFpxtn3AtKVPx36v1EmRxj%2BOJBf5czaroYJ8urifUTAW%2Bxhfs9ZvZ9qsv1fizr9UAuqZc%2F82OGFTVTDs1ufDBjqkATbSKnP%2BZaMXrk33SSEU1hV1U9zYXFX0iu1LhlsJHtsDdSx%2BFIMbj5lkti9F2qzYYYqVH43qTELqFlVnVjYkR1PbPiFKeu4WtSTstk866YcB8TuphUDgQkq1MuSAhZZvncp0Z%2Be03USdi5obMvQTcp8%2BtLdCy10vIWHp8LxuUOH%2Fej%2FXj5Kqr59wgQMz4RrSo1wF0e1XkmXHXzB7koppRsZDm8gW&X-Amz-Signature=88b9f91ebc5992f85d112dde79365bf25c2113d5d8a2941c285ebc7693cd86a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPLKQSHM%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T071415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQD9KpYFGxtvQQOVreo6hWEmgOtFaJfdlmgFQYe8MHrHygIhAPVgFAqNeFw526zB%2FrJSQyMCsMU%2FdD%2FsqqrrIBTTulozKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxIINyNVvN6Uoc0Vu4q3AOP7qCwdM5ZKet0%2FkMHrKaAZHy4hSH8PDAFo3tAUo7SXlF6fCvus5WQlrXzEusKO73a4W12XtxrpQ46%2FWYADXRWRqToJa6iYmoOg990m0%2B%2Bv6I0MuGqaM3wYf8OtsfGWsH3B%2BJhd%2FlaeHMtY3Db9ayEmjtKIIMNvyPBG05dszsO3VjNhrf24hOxaFrbOe%2BPb87Rc1umQ4I7bFXYJaN0hzqp%2BMzM0D9p7%2BzFJ7nSryGeM7cB%2FOiXnDLRhOazLR%2BeAbx0H4Vu81iywBzANLtyN%2BIJvZffJ6DibsiwFNycRKsufMEX6SdwtQDcSCUhIeZ%2BUa3uATwPnKyuIrxEueAFuio6d%2FHeAFio7Vq0fJCnqeN7b23N3ZS8ltTrpmB2pgTEWBwFC%2BVDvzV5miXw26kNxiAUPF%2B04HiSVBnBwqDG3nwMe5whJOP06nedW7deLpmA8k4zud1m7%2BgENF2StKYGVy48v3tH5o9GTqAbKY5o1MRxzgArjSKKfQI9QLwGY7NkSCFDFDgrOLxa%2F1v3qu9tT%2BW2oBCYuEt04Wmg8fW5Spo8Rs4YPFpxtn3AtKVPx36v1EmRxj%2BOJBf5czaroYJ8urifUTAW%2Bxhfs9ZvZ9qsv1fizr9UAuqZc%2F82OGFTVTDs1ufDBjqkATbSKnP%2BZaMXrk33SSEU1hV1U9zYXFX0iu1LhlsJHtsDdSx%2BFIMbj5lkti9F2qzYYYqVH43qTELqFlVnVjYkR1PbPiFKeu4WtSTstk866YcB8TuphUDgQkq1MuSAhZZvncp0Z%2Be03USdi5obMvQTcp8%2BtLdCy10vIWHp8LxuUOH%2Fej%2FXj5Kqr59wgQMz4RrSo1wF0e1XkmXHXzB7koppRsZDm8gW&X-Amz-Signature=05d9470c63fe80d5f06f09cf7806cb54d1105f34ee29e9d29d2b52952d90d0f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
