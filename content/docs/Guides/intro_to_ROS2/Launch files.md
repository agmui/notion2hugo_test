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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SU5BTRE%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T071031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX6QKzo7W7fcQu5Y32rSbxOjcSHPSojBn70XzpR3rqkQIhANlpYJBHBaCdKZdPkE1G5Z2tsiEjpj86QjnkjHtlDrD7Kv8DCBAQABoMNjM3NDIzMTgzODA1IgzPfOtXJ2UEQJAbAMYq3ANqStd5fB3giLH8uqzYX8UpcCuKXhWdmrVMxbIGutiA0DpbLaPymMv7VL9GptKMJ23MOgNJvmJAOgjF1Kwo74bI1AIrEk2JIVmIVAtwzlb4VBN2YzfsIoY4yOv50QR%2BhLccjCJdh7KWB4Sq8xbB5NqLLoeB2k8WbZCaiq81vyAC4hjnCCzbuY%2B0A6wBCGXF4%2BCMs4GIwfX8bEhCJdl0RzHbUmIoqTvVw6vDdKZ9AAyKAtSwWvD%2FdqDqpH4suUojN0P%2BGC90AWclOxoq3pS1OWXKG9ShaaEJnsOA%2Fbq%2BptunfwXjcCPEicMiTcPyEZi5dMn3o9dFGYkUHAnQbnnjNzv9Ra4Nmur1dA0xh86yXce4%2B9rprAALaiO0%2FK4V30HjpzOHKsFk0tXLaAAsCVxmQneftOj26EFR%2FekVFdVt1gvGR1U7%2BUCDGJe3QHYgR%2Fd%2F6K9tYiLhvvYW%2FTGg%2BqwIxfMcCj%2B%2FwlHirTrldJkbWoND2V9w2ftJxc9ZDJztNsT%2BhKCsn3t6PIy%2FfX9jGH10sP2MpcYj6Wzmkp5SJaYXnmCTJqSbT3t%2FEBEGqJNDV0znKnJkTJZs8Eh%2BVjHzkGcMFh1vlbuGe08174jJiqtW73ttRitFZMNYTJBBWEzd7zC%2BpM3DBjqkAbFzfwWERPuzGzoUzp8vuaTshmiIrzwLNF904OY8BQjI9og%2FxIUwhe0WeKUXg%2BIya2%2FfexbjKEk%2BRj5BZKDA9l9wygy7wL5ZdIjAF8LxzkcM5yHFhohVd6tBKRYHKyT7Qxbdh4KpsSa7H1VCRjvoHmqXvisGyRBXCocqbD8BLrdd532aGuYBLuKDZvOb%2B3njMUgvOakgI4x1r%2BpU3zDMBSFvUFrk&X-Amz-Signature=4755e8f2f1e1f6cb6122446398e889ce5ad239ac26415a8442be75ee5a3d4970&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SU5BTRE%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T071031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX6QKzo7W7fcQu5Y32rSbxOjcSHPSojBn70XzpR3rqkQIhANlpYJBHBaCdKZdPkE1G5Z2tsiEjpj86QjnkjHtlDrD7Kv8DCBAQABoMNjM3NDIzMTgzODA1IgzPfOtXJ2UEQJAbAMYq3ANqStd5fB3giLH8uqzYX8UpcCuKXhWdmrVMxbIGutiA0DpbLaPymMv7VL9GptKMJ23MOgNJvmJAOgjF1Kwo74bI1AIrEk2JIVmIVAtwzlb4VBN2YzfsIoY4yOv50QR%2BhLccjCJdh7KWB4Sq8xbB5NqLLoeB2k8WbZCaiq81vyAC4hjnCCzbuY%2B0A6wBCGXF4%2BCMs4GIwfX8bEhCJdl0RzHbUmIoqTvVw6vDdKZ9AAyKAtSwWvD%2FdqDqpH4suUojN0P%2BGC90AWclOxoq3pS1OWXKG9ShaaEJnsOA%2Fbq%2BptunfwXjcCPEicMiTcPyEZi5dMn3o9dFGYkUHAnQbnnjNzv9Ra4Nmur1dA0xh86yXce4%2B9rprAALaiO0%2FK4V30HjpzOHKsFk0tXLaAAsCVxmQneftOj26EFR%2FekVFdVt1gvGR1U7%2BUCDGJe3QHYgR%2Fd%2F6K9tYiLhvvYW%2FTGg%2BqwIxfMcCj%2B%2FwlHirTrldJkbWoND2V9w2ftJxc9ZDJztNsT%2BhKCsn3t6PIy%2FfX9jGH10sP2MpcYj6Wzmkp5SJaYXnmCTJqSbT3t%2FEBEGqJNDV0znKnJkTJZs8Eh%2BVjHzkGcMFh1vlbuGe08174jJiqtW73ttRitFZMNYTJBBWEzd7zC%2BpM3DBjqkAbFzfwWERPuzGzoUzp8vuaTshmiIrzwLNF904OY8BQjI9og%2FxIUwhe0WeKUXg%2BIya2%2FfexbjKEk%2BRj5BZKDA9l9wygy7wL5ZdIjAF8LxzkcM5yHFhohVd6tBKRYHKyT7Qxbdh4KpsSa7H1VCRjvoHmqXvisGyRBXCocqbD8BLrdd532aGuYBLuKDZvOb%2B3njMUgvOakgI4x1r%2BpU3zDMBSFvUFrk&X-Amz-Signature=0d37c7c870451b6ac1d9c4607410e8501940636827a0155d52c8f67c0f29d218&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SU5BTRE%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T071031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX6QKzo7W7fcQu5Y32rSbxOjcSHPSojBn70XzpR3rqkQIhANlpYJBHBaCdKZdPkE1G5Z2tsiEjpj86QjnkjHtlDrD7Kv8DCBAQABoMNjM3NDIzMTgzODA1IgzPfOtXJ2UEQJAbAMYq3ANqStd5fB3giLH8uqzYX8UpcCuKXhWdmrVMxbIGutiA0DpbLaPymMv7VL9GptKMJ23MOgNJvmJAOgjF1Kwo74bI1AIrEk2JIVmIVAtwzlb4VBN2YzfsIoY4yOv50QR%2BhLccjCJdh7KWB4Sq8xbB5NqLLoeB2k8WbZCaiq81vyAC4hjnCCzbuY%2B0A6wBCGXF4%2BCMs4GIwfX8bEhCJdl0RzHbUmIoqTvVw6vDdKZ9AAyKAtSwWvD%2FdqDqpH4suUojN0P%2BGC90AWclOxoq3pS1OWXKG9ShaaEJnsOA%2Fbq%2BptunfwXjcCPEicMiTcPyEZi5dMn3o9dFGYkUHAnQbnnjNzv9Ra4Nmur1dA0xh86yXce4%2B9rprAALaiO0%2FK4V30HjpzOHKsFk0tXLaAAsCVxmQneftOj26EFR%2FekVFdVt1gvGR1U7%2BUCDGJe3QHYgR%2Fd%2F6K9tYiLhvvYW%2FTGg%2BqwIxfMcCj%2B%2FwlHirTrldJkbWoND2V9w2ftJxc9ZDJztNsT%2BhKCsn3t6PIy%2FfX9jGH10sP2MpcYj6Wzmkp5SJaYXnmCTJqSbT3t%2FEBEGqJNDV0znKnJkTJZs8Eh%2BVjHzkGcMFh1vlbuGe08174jJiqtW73ttRitFZMNYTJBBWEzd7zC%2BpM3DBjqkAbFzfwWERPuzGzoUzp8vuaTshmiIrzwLNF904OY8BQjI9og%2FxIUwhe0WeKUXg%2BIya2%2FfexbjKEk%2BRj5BZKDA9l9wygy7wL5ZdIjAF8LxzkcM5yHFhohVd6tBKRYHKyT7Qxbdh4KpsSa7H1VCRjvoHmqXvisGyRBXCocqbD8BLrdd532aGuYBLuKDZvOb%2B3njMUgvOakgI4x1r%2BpU3zDMBSFvUFrk&X-Amz-Signature=75b01b50244ab2b4b1548ce45d9cf921fc2a653f3ad0a92eb0130663bab922ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
