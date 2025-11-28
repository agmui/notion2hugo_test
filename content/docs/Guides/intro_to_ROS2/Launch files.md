---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTBB5TYK%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhDYMwSXRrscTvNdGJFDOoczxGfDwXPYR93OJbDXdhZAIgDPzAdRCVy5Ylo04kCW%2BjDCeVCbX2BoakDM5w2OP1OskqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNVtbbCk0KnkW9lfuSrcA98JeyKxbK0GssruA4K29xN7t8rvgjlqAMYBJN1YkevubYZ9Gl7tTEr8nSVl%2FJzcMvDC2vb3ykd8btV3EUKQNwEyjZUnrr3UWg63iFYy5v1Om%2BXft3nQaLgu0YKtnsEKW9MZ%2B%2Bvg0XJZ37UZSVsKM58fGHgBdldGSRbjyzaoLeMuThfZT%2FgRRlZnQrEuE5uUPZxO%2FHmtU6lP7fdlFHKYLLKPI4nO98ft%2FKiPA5Ug%2B5iayJvpwuqbvyWSbBBsvnqvYY%2BuRoujmsMd1yUOupzwfNMQDLMQv6u7ZGLd1JoU5t%2Fbc91o4xnQLgIsNkDTF8v3ZmLYwdbVIYAWasefwzMAFtb6JBK3vm2cs4ETtcnCjcWXf4bnZP1P10njtAJUZTliTftcKB4QvI%2FLdbRPOkCTI6ABOpYFoYJhxwGYvOMOSmeGvhOasuxleNxFPkPn4ZvMhp0STXbqH8W5C9MGGkUo8Xen%2Fc4jjewJIquPmjpSaoT4cUFS7bwJKZ5bvUIdE0AINtjDzlPCt9JaXsn17iW6GvrVCjEJe24BbpuLAGYFL%2FNYWvuHFkSsfnZAbCYASKL9FQ3j8W61PWG71n5UYVTJwfBH5P54PsNB6YYM4VBorM1Biw6vrveqgaG1FVWYMKyZo8kGOqUBCPeDk7MpmPBN3cV0bUB2GXrXyS8TTjCaKjJu0d73BpHo2LMZLMATlliwRiKOVRPEvcspeSKUHR9xDohTtL8pSSIG0v1ZTFLLeVcmC%2FIvD5DdyoymV%2BKQkkYL6N0PuNRppEGKH4x20kEoY0Q9%2FjxVTcHTpyzI392EXaKF3y6f928qP0YoNn3XG%2FhbEBy8m8NCwlNAlNvF7cKu8HGQxpDR6JbM5sto&X-Amz-Signature=69dca8ff3936b9af3d8a4b4d0de9f365d074177e9536d6acd641be079fa80dde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTBB5TYK%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhDYMwSXRrscTvNdGJFDOoczxGfDwXPYR93OJbDXdhZAIgDPzAdRCVy5Ylo04kCW%2BjDCeVCbX2BoakDM5w2OP1OskqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNVtbbCk0KnkW9lfuSrcA98JeyKxbK0GssruA4K29xN7t8rvgjlqAMYBJN1YkevubYZ9Gl7tTEr8nSVl%2FJzcMvDC2vb3ykd8btV3EUKQNwEyjZUnrr3UWg63iFYy5v1Om%2BXft3nQaLgu0YKtnsEKW9MZ%2B%2Bvg0XJZ37UZSVsKM58fGHgBdldGSRbjyzaoLeMuThfZT%2FgRRlZnQrEuE5uUPZxO%2FHmtU6lP7fdlFHKYLLKPI4nO98ft%2FKiPA5Ug%2B5iayJvpwuqbvyWSbBBsvnqvYY%2BuRoujmsMd1yUOupzwfNMQDLMQv6u7ZGLd1JoU5t%2Fbc91o4xnQLgIsNkDTF8v3ZmLYwdbVIYAWasefwzMAFtb6JBK3vm2cs4ETtcnCjcWXf4bnZP1P10njtAJUZTliTftcKB4QvI%2FLdbRPOkCTI6ABOpYFoYJhxwGYvOMOSmeGvhOasuxleNxFPkPn4ZvMhp0STXbqH8W5C9MGGkUo8Xen%2Fc4jjewJIquPmjpSaoT4cUFS7bwJKZ5bvUIdE0AINtjDzlPCt9JaXsn17iW6GvrVCjEJe24BbpuLAGYFL%2FNYWvuHFkSsfnZAbCYASKL9FQ3j8W61PWG71n5UYVTJwfBH5P54PsNB6YYM4VBorM1Biw6vrveqgaG1FVWYMKyZo8kGOqUBCPeDk7MpmPBN3cV0bUB2GXrXyS8TTjCaKjJu0d73BpHo2LMZLMATlliwRiKOVRPEvcspeSKUHR9xDohTtL8pSSIG0v1ZTFLLeVcmC%2FIvD5DdyoymV%2BKQkkYL6N0PuNRppEGKH4x20kEoY0Q9%2FjxVTcHTpyzI392EXaKF3y6f928qP0YoNn3XG%2FhbEBy8m8NCwlNAlNvF7cKu8HGQxpDR6JbM5sto&X-Amz-Signature=ce5936dc51466c2b2682b50ac35afb60315c21af0611764b5f35c4d787f24d6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTBB5TYK%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhDYMwSXRrscTvNdGJFDOoczxGfDwXPYR93OJbDXdhZAIgDPzAdRCVy5Ylo04kCW%2BjDCeVCbX2BoakDM5w2OP1OskqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNVtbbCk0KnkW9lfuSrcA98JeyKxbK0GssruA4K29xN7t8rvgjlqAMYBJN1YkevubYZ9Gl7tTEr8nSVl%2FJzcMvDC2vb3ykd8btV3EUKQNwEyjZUnrr3UWg63iFYy5v1Om%2BXft3nQaLgu0YKtnsEKW9MZ%2B%2Bvg0XJZ37UZSVsKM58fGHgBdldGSRbjyzaoLeMuThfZT%2FgRRlZnQrEuE5uUPZxO%2FHmtU6lP7fdlFHKYLLKPI4nO98ft%2FKiPA5Ug%2B5iayJvpwuqbvyWSbBBsvnqvYY%2BuRoujmsMd1yUOupzwfNMQDLMQv6u7ZGLd1JoU5t%2Fbc91o4xnQLgIsNkDTF8v3ZmLYwdbVIYAWasefwzMAFtb6JBK3vm2cs4ETtcnCjcWXf4bnZP1P10njtAJUZTliTftcKB4QvI%2FLdbRPOkCTI6ABOpYFoYJhxwGYvOMOSmeGvhOasuxleNxFPkPn4ZvMhp0STXbqH8W5C9MGGkUo8Xen%2Fc4jjewJIquPmjpSaoT4cUFS7bwJKZ5bvUIdE0AINtjDzlPCt9JaXsn17iW6GvrVCjEJe24BbpuLAGYFL%2FNYWvuHFkSsfnZAbCYASKL9FQ3j8W61PWG71n5UYVTJwfBH5P54PsNB6YYM4VBorM1Biw6vrveqgaG1FVWYMKyZo8kGOqUBCPeDk7MpmPBN3cV0bUB2GXrXyS8TTjCaKjJu0d73BpHo2LMZLMATlliwRiKOVRPEvcspeSKUHR9xDohTtL8pSSIG0v1ZTFLLeVcmC%2FIvD5DdyoymV%2BKQkkYL6N0PuNRppEGKH4x20kEoY0Q9%2FjxVTcHTpyzI392EXaKF3y6f928qP0YoNn3XG%2FhbEBy8m8NCwlNAlNvF7cKu8HGQxpDR6JbM5sto&X-Amz-Signature=49a1ecce51e634bdb1e541c155fffd0ba20f74eaa732d3f80a9297331db694bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
