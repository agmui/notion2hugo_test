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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OTIAKHJ%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T070815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvtTvkMan3ic7xx%2FVDMsXhNHQlUoqLrYffozoXkWZ6hQIgAsu2iKUZcoZzgyh4KW82n9o7%2BSdCm8%2BEYEYAY129L9MqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5zvNHcTov8pV9oqircA4e223vYPp1S1Y%2F0DfTu%2BpLURbT0RL7YcbSo%2BWKXSqXRfhExaVM3FYaWVs2%2BU%2FLFIGfes7esMbLSbLlz3c7ZZD9yyPLUoKrilue7GNkKriZqfZ6Qqay1cmCBDltufxI%2FQ93iVzfos1WW9DsIUar5VveKPLcDZAKrOjgDC1UdyBnwVMNrr%2Fw1jCOaPCS1bPenmRgZHxSu5xNZYQbteDv8IcbCgIBMUCPyHY7DwKoAqUiLItx0%2Bs946chIBYlA7mzL%2B%2F1DKutCw6Dfsijzf9epqNxecwWxw9J09qnmBVxp50vyembVUMSD3fRf%2FUo2fuESz5pWYtF7n10EinthRhtvfGmUwwwn%2F2AItbF7bC8EXX%2Bu7KyeTrpOJrhFEIgv8WHsVtaLVsHURp1JXGE1nEULdnFu5DJQ%2BjR3Vw3FpITVdLucRe0E7sje7SsQVkzhBujjb1VL%2BMf3D%2FHMuCab4h4Az5aZSVeKXyXt%2FBaPdgCUYmOCwKl3bs5sS4iXj%2BSPpp8KwiYXy7pIAjz68OEcugzlJYXesCE7jRAgm0yNj8uvWlQxxwTJXwTavpqFOwRUhwDP8%2BsKrzVvk%2FtnutQGZV1j4R5WyZJFjGxLerlqhi8q6hKlAZgecLwXF7zRdnLxMOXA4L0GOqUBKkj7ZFykmkLyxi9jHsow1oFmpFl4YOVJSxKJsynEmPE7KC9GygN0GN9OWX3DpVx4GWUwbcfkl1QM5MMXjVQuxbLV4NxDKJjo%2FtAeQQZJlrRckqx6iyZr9p%2BUAe0D6BKeniAmZrYU%2FK9OlPJQSMQXtgQdFVu43FDPgUsL6I8JP0WrE44FQAlq97bDzD7bSPejCdWfVfujMhPiMEdb2lT%2BRBQFFosK&X-Amz-Signature=7e393c2a341058e80aa234ebee54326a501e786133a301eab1e85f52e029e9a5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OTIAKHJ%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T070815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvtTvkMan3ic7xx%2FVDMsXhNHQlUoqLrYffozoXkWZ6hQIgAsu2iKUZcoZzgyh4KW82n9o7%2BSdCm8%2BEYEYAY129L9MqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5zvNHcTov8pV9oqircA4e223vYPp1S1Y%2F0DfTu%2BpLURbT0RL7YcbSo%2BWKXSqXRfhExaVM3FYaWVs2%2BU%2FLFIGfes7esMbLSbLlz3c7ZZD9yyPLUoKrilue7GNkKriZqfZ6Qqay1cmCBDltufxI%2FQ93iVzfos1WW9DsIUar5VveKPLcDZAKrOjgDC1UdyBnwVMNrr%2Fw1jCOaPCS1bPenmRgZHxSu5xNZYQbteDv8IcbCgIBMUCPyHY7DwKoAqUiLItx0%2Bs946chIBYlA7mzL%2B%2F1DKutCw6Dfsijzf9epqNxecwWxw9J09qnmBVxp50vyembVUMSD3fRf%2FUo2fuESz5pWYtF7n10EinthRhtvfGmUwwwn%2F2AItbF7bC8EXX%2Bu7KyeTrpOJrhFEIgv8WHsVtaLVsHURp1JXGE1nEULdnFu5DJQ%2BjR3Vw3FpITVdLucRe0E7sje7SsQVkzhBujjb1VL%2BMf3D%2FHMuCab4h4Az5aZSVeKXyXt%2FBaPdgCUYmOCwKl3bs5sS4iXj%2BSPpp8KwiYXy7pIAjz68OEcugzlJYXesCE7jRAgm0yNj8uvWlQxxwTJXwTavpqFOwRUhwDP8%2BsKrzVvk%2FtnutQGZV1j4R5WyZJFjGxLerlqhi8q6hKlAZgecLwXF7zRdnLxMOXA4L0GOqUBKkj7ZFykmkLyxi9jHsow1oFmpFl4YOVJSxKJsynEmPE7KC9GygN0GN9OWX3DpVx4GWUwbcfkl1QM5MMXjVQuxbLV4NxDKJjo%2FtAeQQZJlrRckqx6iyZr9p%2BUAe0D6BKeniAmZrYU%2FK9OlPJQSMQXtgQdFVu43FDPgUsL6I8JP0WrE44FQAlq97bDzD7bSPejCdWfVfujMhPiMEdb2lT%2BRBQFFosK&X-Amz-Signature=38bdf7bf272d6a3bde6ae316462b208deda82d630c983d9b5918489c2704ef43&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OTIAKHJ%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T070815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvtTvkMan3ic7xx%2FVDMsXhNHQlUoqLrYffozoXkWZ6hQIgAsu2iKUZcoZzgyh4KW82n9o7%2BSdCm8%2BEYEYAY129L9MqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5zvNHcTov8pV9oqircA4e223vYPp1S1Y%2F0DfTu%2BpLURbT0RL7YcbSo%2BWKXSqXRfhExaVM3FYaWVs2%2BU%2FLFIGfes7esMbLSbLlz3c7ZZD9yyPLUoKrilue7GNkKriZqfZ6Qqay1cmCBDltufxI%2FQ93iVzfos1WW9DsIUar5VveKPLcDZAKrOjgDC1UdyBnwVMNrr%2Fw1jCOaPCS1bPenmRgZHxSu5xNZYQbteDv8IcbCgIBMUCPyHY7DwKoAqUiLItx0%2Bs946chIBYlA7mzL%2B%2F1DKutCw6Dfsijzf9epqNxecwWxw9J09qnmBVxp50vyembVUMSD3fRf%2FUo2fuESz5pWYtF7n10EinthRhtvfGmUwwwn%2F2AItbF7bC8EXX%2Bu7KyeTrpOJrhFEIgv8WHsVtaLVsHURp1JXGE1nEULdnFu5DJQ%2BjR3Vw3FpITVdLucRe0E7sje7SsQVkzhBujjb1VL%2BMf3D%2FHMuCab4h4Az5aZSVeKXyXt%2FBaPdgCUYmOCwKl3bs5sS4iXj%2BSPpp8KwiYXy7pIAjz68OEcugzlJYXesCE7jRAgm0yNj8uvWlQxxwTJXwTavpqFOwRUhwDP8%2BsKrzVvk%2FtnutQGZV1j4R5WyZJFjGxLerlqhi8q6hKlAZgecLwXF7zRdnLxMOXA4L0GOqUBKkj7ZFykmkLyxi9jHsow1oFmpFl4YOVJSxKJsynEmPE7KC9GygN0GN9OWX3DpVx4GWUwbcfkl1QM5MMXjVQuxbLV4NxDKJjo%2FtAeQQZJlrRckqx6iyZr9p%2BUAe0D6BKeniAmZrYU%2FK9OlPJQSMQXtgQdFVu43FDPgUsL6I8JP0WrE44FQAlq97bDzD7bSPejCdWfVfujMhPiMEdb2lT%2BRBQFFosK&X-Amz-Signature=03a991c342e1bba8b900a1e9130f8f5b098ce72382ea6c03293e4132a81e6602&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
