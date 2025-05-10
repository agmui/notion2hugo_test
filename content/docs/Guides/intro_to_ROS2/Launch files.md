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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGHM576G%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T022123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZjwJJrKLC9aIHwc8ocn83eo4TAMiADIZ5vMZX2rYLxgIgK5YjBOREhmSyisXn5NObpP8UJWh7zNU31Er2UPK%2Bf0kqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJQxBzlXi442gZVYircA4ULzQm1KpF9RRi9Od%2Fwz4SrgGifBtcmKl1HW%2FgMv%2FttoRDqB%2FKjxK%2F7%2B%2BVTcg4YKKD2qumGIWW%2BAxmFlFnTlK3CGxmpNooFwR6ifzkw4XjrLhatQqxhgiZQeHXjjCrRYqojIkdQJzE0VPyAGILR75gtiqrEfwYAW%2F2WRhzBUUw%2BB6bzWiV9q3WUN%2FjzMblGpC4%2Bg2It8p%2FFjsWnGpNKEWETdz35Am0rgVGeTm9hkrHxvgdtWMJ9QF%2FPbqY%2FXA%2B83ZsU8VsAOeFdYT8JgpwJmC8xPlzlfhqmpj6TmHeT%2F4Ib53dU7RMwNkEzeiaHBzCIvsM2ry9YgR2MoXhgTv1Y37x1Ieh5yenUYsuc1p8WM2ym2ujthUDsMpLBMhlnqQtXuFTI9hdXOoKM6WomD5YZ5mW3JjtNMBiPsW%2BBPeBGv99ymX1GgdJtIQQNATL49y4Q9bN2whzjQ5cQYRTVLZ1stqMZI1O9f%2F5oiro5QoQ9zmm7kWkQlfCLCWoRY1wM8q6AiGaaDC%2BOV%2FxoEg3WhffzO6BUJRQXXQNkRc34d%2FKj5nYr5jde8ks4k1lCtdxg82syHCn5fqyg9Xm0EzeedErK1eKIsAVtVQCqwIGDeAkQCqsHxIW8T93tyAaEGm60MMXr%2BsAGOqUBkPsLU714hA1wJ%2F%2B%2BbRpfdBkZVTg0jPtBlvpamcXbCxM7Ixd20RgkMn9bdAdvuz3fbU0uYF7IjtEXCzPO6s1Vbsgdjx7MbNvI%2BfMhVSH%2BHr37u49sZnID6Q6U9wXTNtWf%2FFl9ufnRA2xOw0Y6K9xrwupCJE6c8IRxalbSsaVV%2F3ZpfhxfxBIaa6uus7yruVS7TLWQdc7IASCg90Y22gDBGuU%2FBDB6&X-Amz-Signature=93df70e2b3a8008b1b8cbb89e85683240a7fb062afcd8deba2150f9bca45f948&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGHM576G%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T022123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZjwJJrKLC9aIHwc8ocn83eo4TAMiADIZ5vMZX2rYLxgIgK5YjBOREhmSyisXn5NObpP8UJWh7zNU31Er2UPK%2Bf0kqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJQxBzlXi442gZVYircA4ULzQm1KpF9RRi9Od%2Fwz4SrgGifBtcmKl1HW%2FgMv%2FttoRDqB%2FKjxK%2F7%2B%2BVTcg4YKKD2qumGIWW%2BAxmFlFnTlK3CGxmpNooFwR6ifzkw4XjrLhatQqxhgiZQeHXjjCrRYqojIkdQJzE0VPyAGILR75gtiqrEfwYAW%2F2WRhzBUUw%2BB6bzWiV9q3WUN%2FjzMblGpC4%2Bg2It8p%2FFjsWnGpNKEWETdz35Am0rgVGeTm9hkrHxvgdtWMJ9QF%2FPbqY%2FXA%2B83ZsU8VsAOeFdYT8JgpwJmC8xPlzlfhqmpj6TmHeT%2F4Ib53dU7RMwNkEzeiaHBzCIvsM2ry9YgR2MoXhgTv1Y37x1Ieh5yenUYsuc1p8WM2ym2ujthUDsMpLBMhlnqQtXuFTI9hdXOoKM6WomD5YZ5mW3JjtNMBiPsW%2BBPeBGv99ymX1GgdJtIQQNATL49y4Q9bN2whzjQ5cQYRTVLZ1stqMZI1O9f%2F5oiro5QoQ9zmm7kWkQlfCLCWoRY1wM8q6AiGaaDC%2BOV%2FxoEg3WhffzO6BUJRQXXQNkRc34d%2FKj5nYr5jde8ks4k1lCtdxg82syHCn5fqyg9Xm0EzeedErK1eKIsAVtVQCqwIGDeAkQCqsHxIW8T93tyAaEGm60MMXr%2BsAGOqUBkPsLU714hA1wJ%2F%2B%2BbRpfdBkZVTg0jPtBlvpamcXbCxM7Ixd20RgkMn9bdAdvuz3fbU0uYF7IjtEXCzPO6s1Vbsgdjx7MbNvI%2BfMhVSH%2BHr37u49sZnID6Q6U9wXTNtWf%2FFl9ufnRA2xOw0Y6K9xrwupCJE6c8IRxalbSsaVV%2F3ZpfhxfxBIaa6uus7yruVS7TLWQdc7IASCg90Y22gDBGuU%2FBDB6&X-Amz-Signature=6ee09fea3fe572ef468fdfde65838f8ed7e93067c3645650cba82508f5ae417c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGHM576G%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T022123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZjwJJrKLC9aIHwc8ocn83eo4TAMiADIZ5vMZX2rYLxgIgK5YjBOREhmSyisXn5NObpP8UJWh7zNU31Er2UPK%2Bf0kqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJQxBzlXi442gZVYircA4ULzQm1KpF9RRi9Od%2Fwz4SrgGifBtcmKl1HW%2FgMv%2FttoRDqB%2FKjxK%2F7%2B%2BVTcg4YKKD2qumGIWW%2BAxmFlFnTlK3CGxmpNooFwR6ifzkw4XjrLhatQqxhgiZQeHXjjCrRYqojIkdQJzE0VPyAGILR75gtiqrEfwYAW%2F2WRhzBUUw%2BB6bzWiV9q3WUN%2FjzMblGpC4%2Bg2It8p%2FFjsWnGpNKEWETdz35Am0rgVGeTm9hkrHxvgdtWMJ9QF%2FPbqY%2FXA%2B83ZsU8VsAOeFdYT8JgpwJmC8xPlzlfhqmpj6TmHeT%2F4Ib53dU7RMwNkEzeiaHBzCIvsM2ry9YgR2MoXhgTv1Y37x1Ieh5yenUYsuc1p8WM2ym2ujthUDsMpLBMhlnqQtXuFTI9hdXOoKM6WomD5YZ5mW3JjtNMBiPsW%2BBPeBGv99ymX1GgdJtIQQNATL49y4Q9bN2whzjQ5cQYRTVLZ1stqMZI1O9f%2F5oiro5QoQ9zmm7kWkQlfCLCWoRY1wM8q6AiGaaDC%2BOV%2FxoEg3WhffzO6BUJRQXXQNkRc34d%2FKj5nYr5jde8ks4k1lCtdxg82syHCn5fqyg9Xm0EzeedErK1eKIsAVtVQCqwIGDeAkQCqsHxIW8T93tyAaEGm60MMXr%2BsAGOqUBkPsLU714hA1wJ%2F%2B%2BbRpfdBkZVTg0jPtBlvpamcXbCxM7Ixd20RgkMn9bdAdvuz3fbU0uYF7IjtEXCzPO6s1Vbsgdjx7MbNvI%2BfMhVSH%2BHr37u49sZnID6Q6U9wXTNtWf%2FFl9ufnRA2xOw0Y6K9xrwupCJE6c8IRxalbSsaVV%2F3ZpfhxfxBIaa6uus7yruVS7TLWQdc7IASCg90Y22gDBGuU%2FBDB6&X-Amz-Signature=e75b205eb0d63814cdeb55fb7ca93fd29afdb3c2d19199d1df9ea6a693a4e302&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
