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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHRVEC6D%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID2edOA0nFNNXI8x8pv%2BirO%2BYwwWYdJOygDrcL6fYD5hAiEAxrqCTzVYjp1FA%2FQZvdN%2BNp6aqM%2FKvHwQO%2Bw3T2PaE0UqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGy5R21OWs60j6RW%2FyrcA5tsLYlfW3kIwV1P0TQMCerRQoYdzWKHLbcBhuOTVp7SC4dNS6pqi%2B3TRUdnB%2BPpvnhEJcijqF110hVW6oorZBqT6lMM5D7OpO6dpw%2FlauNakuRxmQpw123gXUXL%2BkUVjquJ5uz3bod5LQkNwA9AsOPFPQsPOQ8ngoRjgXQD%2BnnDsuJIajkNU27tYm7Kfa4qCrcPez1PI%2FjSJxQIa3wRp8GJ6l7ge%2BxwDObhjytnKLSTg3OixIgvvpfCwL4LceHIUamHD1ZBbXBYS9aHUutWPjz3RPWVf%2B78tfBTebywtEsPLZ6tAGofEauT0bMu9WH8FgchZOqHr%2Btw%2Bd4ROHYXOTCn4Qz9peJ6VYm%2FgIh4WCSOK4pXBaAAGw6eDLRLv%2FvsyCF4EDOf5byALG2s7YceMHmQtgBtHkDlZKl2nYXN5i6mjBpZQsLc4lmD3%2BhY%2BsDo2lBuqA8kUYxyX70ykQgTUoKYBUlvz2Wr6dWkbc%2BRCoULGz8UA2803gYX0tnjSYvSPDBYfBuw%2FbKByTlfh1CEPNnZrb8OqF44R0ZsodU5iErokBP8JkfweHKCQU1zEAsmYQBIcH62pTNlTLgaMrfb7KViM1qGef2q0aZC9epkMmy63RqTJnfOWfitBlKjMOXE%2BcAGOqUB5SIf2WsKJtUl7bynMfxnuQgGyuJexaim%2FkEkRQk%2Fil81dnAvCvo%2Bpbr%2BaFqci2MCMcda19jymyNn2wMu0vMxn3PpL62ol4eCeDSa57dwCiMftecovSE7hCIHBhc%2Barx%2BPRa3Ro2Ohtex3F%2F4vDO22ho%2BKMUit88i%2FPP7%2BUvLdTqDJqyQeju4xtdRWfhHnhLu%2FvAEd%2BNe%2F5KtzTUAOVGDoky96nzT&X-Amz-Signature=dd5dad0d10c5fd0522fb21098cc655f168a774c8152b6a4780a3d993cf1c8ab1&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHRVEC6D%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID2edOA0nFNNXI8x8pv%2BirO%2BYwwWYdJOygDrcL6fYD5hAiEAxrqCTzVYjp1FA%2FQZvdN%2BNp6aqM%2FKvHwQO%2Bw3T2PaE0UqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGy5R21OWs60j6RW%2FyrcA5tsLYlfW3kIwV1P0TQMCerRQoYdzWKHLbcBhuOTVp7SC4dNS6pqi%2B3TRUdnB%2BPpvnhEJcijqF110hVW6oorZBqT6lMM5D7OpO6dpw%2FlauNakuRxmQpw123gXUXL%2BkUVjquJ5uz3bod5LQkNwA9AsOPFPQsPOQ8ngoRjgXQD%2BnnDsuJIajkNU27tYm7Kfa4qCrcPez1PI%2FjSJxQIa3wRp8GJ6l7ge%2BxwDObhjytnKLSTg3OixIgvvpfCwL4LceHIUamHD1ZBbXBYS9aHUutWPjz3RPWVf%2B78tfBTebywtEsPLZ6tAGofEauT0bMu9WH8FgchZOqHr%2Btw%2Bd4ROHYXOTCn4Qz9peJ6VYm%2FgIh4WCSOK4pXBaAAGw6eDLRLv%2FvsyCF4EDOf5byALG2s7YceMHmQtgBtHkDlZKl2nYXN5i6mjBpZQsLc4lmD3%2BhY%2BsDo2lBuqA8kUYxyX70ykQgTUoKYBUlvz2Wr6dWkbc%2BRCoULGz8UA2803gYX0tnjSYvSPDBYfBuw%2FbKByTlfh1CEPNnZrb8OqF44R0ZsodU5iErokBP8JkfweHKCQU1zEAsmYQBIcH62pTNlTLgaMrfb7KViM1qGef2q0aZC9epkMmy63RqTJnfOWfitBlKjMOXE%2BcAGOqUB5SIf2WsKJtUl7bynMfxnuQgGyuJexaim%2FkEkRQk%2Fil81dnAvCvo%2Bpbr%2BaFqci2MCMcda19jymyNn2wMu0vMxn3PpL62ol4eCeDSa57dwCiMftecovSE7hCIHBhc%2Barx%2BPRa3Ro2Ohtex3F%2F4vDO22ho%2BKMUit88i%2FPP7%2BUvLdTqDJqyQeju4xtdRWfhHnhLu%2FvAEd%2BNe%2F5KtzTUAOVGDoky96nzT&X-Amz-Signature=c030aa64e2b51ccce667164f993eebfdadf33bca8c5d88ea96b15a43babe6c0a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHRVEC6D%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID2edOA0nFNNXI8x8pv%2BirO%2BYwwWYdJOygDrcL6fYD5hAiEAxrqCTzVYjp1FA%2FQZvdN%2BNp6aqM%2FKvHwQO%2Bw3T2PaE0UqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGy5R21OWs60j6RW%2FyrcA5tsLYlfW3kIwV1P0TQMCerRQoYdzWKHLbcBhuOTVp7SC4dNS6pqi%2B3TRUdnB%2BPpvnhEJcijqF110hVW6oorZBqT6lMM5D7OpO6dpw%2FlauNakuRxmQpw123gXUXL%2BkUVjquJ5uz3bod5LQkNwA9AsOPFPQsPOQ8ngoRjgXQD%2BnnDsuJIajkNU27tYm7Kfa4qCrcPez1PI%2FjSJxQIa3wRp8GJ6l7ge%2BxwDObhjytnKLSTg3OixIgvvpfCwL4LceHIUamHD1ZBbXBYS9aHUutWPjz3RPWVf%2B78tfBTebywtEsPLZ6tAGofEauT0bMu9WH8FgchZOqHr%2Btw%2Bd4ROHYXOTCn4Qz9peJ6VYm%2FgIh4WCSOK4pXBaAAGw6eDLRLv%2FvsyCF4EDOf5byALG2s7YceMHmQtgBtHkDlZKl2nYXN5i6mjBpZQsLc4lmD3%2BhY%2BsDo2lBuqA8kUYxyX70ykQgTUoKYBUlvz2Wr6dWkbc%2BRCoULGz8UA2803gYX0tnjSYvSPDBYfBuw%2FbKByTlfh1CEPNnZrb8OqF44R0ZsodU5iErokBP8JkfweHKCQU1zEAsmYQBIcH62pTNlTLgaMrfb7KViM1qGef2q0aZC9epkMmy63RqTJnfOWfitBlKjMOXE%2BcAGOqUB5SIf2WsKJtUl7bynMfxnuQgGyuJexaim%2FkEkRQk%2Fil81dnAvCvo%2Bpbr%2BaFqci2MCMcda19jymyNn2wMu0vMxn3PpL62ol4eCeDSa57dwCiMftecovSE7hCIHBhc%2Barx%2BPRa3Ro2Ohtex3F%2F4vDO22ho%2BKMUit88i%2FPP7%2BUvLdTqDJqyQeju4xtdRWfhHnhLu%2FvAEd%2BNe%2F5KtzTUAOVGDoky96nzT&X-Amz-Signature=b7072601d0e42a85d117dbaf805779b2653ac82f0449be0000a2130645f6a172&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
