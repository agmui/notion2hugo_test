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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MUELPXB%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T081102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTjKbKDzgtSwwftE%2BJRzILyMgG9DeQ2F9HCXqLQb1fRQIga6rAEuPGE6bZRzZ8SUc7sAgibyfpeGzce7bYFIFMTw8qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJbghyLQZBRJyZskOCrcA0JkUFn6VTeeJSdkRBADV%2Bt04WIhJFfeqRYrw26nEUZKWwoG9y0kQ1jZXkO9izrWFHz7yX3VkxImVgxuHwoc6NdVDSdDVnSzwlfJLZy6fwID6vEgOn7%2F06tdogky5F63fvLy99rtyVtB%2FbgXqXm2y%2BHmUbe8eHd5Bq2g5p1MoERjhyqRSlgJp4y57GlNInCQlC3qejYAAWNfsnwxaqU4gUEnJ7%2BKbYytfaxnPI5HwzACTs%2BSo5u3aS%2BHWgEL8y%2BPjUuW%2FuiqUZ0laUvVQHQXQsojBPb69rTTGw2xDddf%2FuLr3c8gu9e8MARd5ZF5jYLb7nG2j4tFKOq8uTAG3WElZQmqHJD%2F6X%2FF8RdKletMc%2Fe80tJRr%2BYhz096%2BrLvHNVyqF7fa59X7oFZAzXIduKTlbFAb81aG4aeX3i0U9yFb16zv9z1%2FGId1iu%2BCaThXnkbzBQ28gSa%2BOFmKpxWhL2SAwJQAgLiP%2Bf7EX%2BcAmSkXjb5ouDM157Lprrs8bYPwpGH4G8SytOhGXFZZrSxpXDn8szsATCQuzjZ8h69IMFeMwEYmCzXpOvrtP9HhGp8Zjg3MEE1oYoCHCexPZ5p%2BaDYsjIQLwXu7eaeB0ua70uTgntffQ0Yjzf%2BkH%2F4F9K8MLiiyMMGOqUBckRGpQhFL%2BlxbQMWtHKJ%2BGaYQ%2BdxrG3KxUvA%2B8v3vxUG4Fq7sdt61i8RR8HlnfDBJ0XqtR%2FRhUIll%2BkCOoXObO8%2BUGlNPXPjhUv0aM97P16Oj7kpCrvkKxybGYUK9dGzh7ki6lmO9jmeMxoM9SKIHK3tNkOyUzDffQme%2BsEuk1OZZm75dOi7C64%2B2nzkt3nQ3NfoifZB43cWt8RzqK%2BAdxZpPxw%2F&X-Amz-Signature=1e2c52da2e180e47a930a6519577bd37b7baa077ac64b02951324ddbedf3fce1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MUELPXB%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T081102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTjKbKDzgtSwwftE%2BJRzILyMgG9DeQ2F9HCXqLQb1fRQIga6rAEuPGE6bZRzZ8SUc7sAgibyfpeGzce7bYFIFMTw8qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJbghyLQZBRJyZskOCrcA0JkUFn6VTeeJSdkRBADV%2Bt04WIhJFfeqRYrw26nEUZKWwoG9y0kQ1jZXkO9izrWFHz7yX3VkxImVgxuHwoc6NdVDSdDVnSzwlfJLZy6fwID6vEgOn7%2F06tdogky5F63fvLy99rtyVtB%2FbgXqXm2y%2BHmUbe8eHd5Bq2g5p1MoERjhyqRSlgJp4y57GlNInCQlC3qejYAAWNfsnwxaqU4gUEnJ7%2BKbYytfaxnPI5HwzACTs%2BSo5u3aS%2BHWgEL8y%2BPjUuW%2FuiqUZ0laUvVQHQXQsojBPb69rTTGw2xDddf%2FuLr3c8gu9e8MARd5ZF5jYLb7nG2j4tFKOq8uTAG3WElZQmqHJD%2F6X%2FF8RdKletMc%2Fe80tJRr%2BYhz096%2BrLvHNVyqF7fa59X7oFZAzXIduKTlbFAb81aG4aeX3i0U9yFb16zv9z1%2FGId1iu%2BCaThXnkbzBQ28gSa%2BOFmKpxWhL2SAwJQAgLiP%2Bf7EX%2BcAmSkXjb5ouDM157Lprrs8bYPwpGH4G8SytOhGXFZZrSxpXDn8szsATCQuzjZ8h69IMFeMwEYmCzXpOvrtP9HhGp8Zjg3MEE1oYoCHCexPZ5p%2BaDYsjIQLwXu7eaeB0ua70uTgntffQ0Yjzf%2BkH%2F4F9K8MLiiyMMGOqUBckRGpQhFL%2BlxbQMWtHKJ%2BGaYQ%2BdxrG3KxUvA%2B8v3vxUG4Fq7sdt61i8RR8HlnfDBJ0XqtR%2FRhUIll%2BkCOoXObO8%2BUGlNPXPjhUv0aM97P16Oj7kpCrvkKxybGYUK9dGzh7ki6lmO9jmeMxoM9SKIHK3tNkOyUzDffQme%2BsEuk1OZZm75dOi7C64%2B2nzkt3nQ3NfoifZB43cWt8RzqK%2BAdxZpPxw%2F&X-Amz-Signature=be5a16512ad2fb5b00c656110dfd606259f25be5b4364f42cdbc38247f0f9f4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MUELPXB%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T081102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTjKbKDzgtSwwftE%2BJRzILyMgG9DeQ2F9HCXqLQb1fRQIga6rAEuPGE6bZRzZ8SUc7sAgibyfpeGzce7bYFIFMTw8qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJbghyLQZBRJyZskOCrcA0JkUFn6VTeeJSdkRBADV%2Bt04WIhJFfeqRYrw26nEUZKWwoG9y0kQ1jZXkO9izrWFHz7yX3VkxImVgxuHwoc6NdVDSdDVnSzwlfJLZy6fwID6vEgOn7%2F06tdogky5F63fvLy99rtyVtB%2FbgXqXm2y%2BHmUbe8eHd5Bq2g5p1MoERjhyqRSlgJp4y57GlNInCQlC3qejYAAWNfsnwxaqU4gUEnJ7%2BKbYytfaxnPI5HwzACTs%2BSo5u3aS%2BHWgEL8y%2BPjUuW%2FuiqUZ0laUvVQHQXQsojBPb69rTTGw2xDddf%2FuLr3c8gu9e8MARd5ZF5jYLb7nG2j4tFKOq8uTAG3WElZQmqHJD%2F6X%2FF8RdKletMc%2Fe80tJRr%2BYhz096%2BrLvHNVyqF7fa59X7oFZAzXIduKTlbFAb81aG4aeX3i0U9yFb16zv9z1%2FGId1iu%2BCaThXnkbzBQ28gSa%2BOFmKpxWhL2SAwJQAgLiP%2Bf7EX%2BcAmSkXjb5ouDM157Lprrs8bYPwpGH4G8SytOhGXFZZrSxpXDn8szsATCQuzjZ8h69IMFeMwEYmCzXpOvrtP9HhGp8Zjg3MEE1oYoCHCexPZ5p%2BaDYsjIQLwXu7eaeB0ua70uTgntffQ0Yjzf%2BkH%2F4F9K8MLiiyMMGOqUBckRGpQhFL%2BlxbQMWtHKJ%2BGaYQ%2BdxrG3KxUvA%2B8v3vxUG4Fq7sdt61i8RR8HlnfDBJ0XqtR%2FRhUIll%2BkCOoXObO8%2BUGlNPXPjhUv0aM97P16Oj7kpCrvkKxybGYUK9dGzh7ki6lmO9jmeMxoM9SKIHK3tNkOyUzDffQme%2BsEuk1OZZm75dOi7C64%2B2nzkt3nQ3NfoifZB43cWt8RzqK%2BAdxZpPxw%2F&X-Amz-Signature=6a64123679bc169257559e66c60c1c5ed58dbe1cfdfa72ac09a56f4a1d18c6c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
