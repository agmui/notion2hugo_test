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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZPJL72I%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T132855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDfCaS%2FIOpn7dYSZlmUlAtKF07fHr61SwTsKti21osanQIhAIuQ1wPgZhekR7YXHHtkZMTR9iaGepdM7XWn0MnaBucjKv8DCC4QABoMNjM3NDIzMTgzODA1IgxvshxW7uibjVQfmr0q3ANiOQh98ikdTHFMUrXPHiDsiOL6CzFuqypy6MSDk4w4xGYaGjkAWVO2smX66upXH6PTKp96R5OjNuDTSj4xBALtX9XhHPEfthtJOG40wuPP%2BX4Xm5goQqmho9jIopIYGvlv8dF8MY5d1fYc0yy3eCRh%2BRAlOpQus3dkzBIcpPGUzx%2F3NXr4ZVzjHXldWvYqMsNQq8XTAlqXs4vlT%2Fo3JTbeJ6sycH6HVIuFiyvG5vt6eDBzn8FctJbN7dttkdAcZ9ZveetNThfFjP0Nr68XXE%2BNiK1YAKng%2B6QIx3%2FYxnVHMavNwbaqbZBjXNvdW%2BUsSiBjwjlGoZTY0L%2F4FhALWL1NOmxYPlpZBrMhHmLOaRGoA7tJZ2UUlF5WwLRv%2F5IkeaBDw51pSnicBJUFLUx44JcOG1v4%2BwfHUkeQQ5WqGVlnpKiXmwH2tqYTcIday%2FAGc%2B%2BcjI2O2qOrE3oI61t0j8%2BuQvx2E5a2Au%2FIh5kRTqJHkuy380Cyeu2WKtz3Ofxrt9VWZ0y%2F%2FpGnHfYuSn%2FI8RuQQC4xnnD0Sb9sOv2jfMJXUbfNze%2BuAxSvp%2FvzvCosbxbqOmDiUo0IlPYNNnsJWs3Vca%2B%2BU4JiJy2Msr%2BRDavZqHd19GeP2qZRY0q%2FTDDXhNTDBjqkARi%2BgQxS81RjH9p1rrYumMbfsJeZmetfBz8zUeEpxB%2Fz%2F7qPsAH%2FUqpIriERkNeW0hOr51vyPkjFkDXVQ7FcMuSV6AYaj5%2B7cBpHjE3U84cYKrmXMtY0b3WwN1Yz6ceTcBq%2FJbgfKlTgXMxWHvEzz3Hu6n9HXnAH0%2FUv38aC%2B6xRobaa3F%2B3sR%2FbQZlLyf1JIY3QRnMxkaAn2CcJhNSRItVpmvjn&X-Amz-Signature=8698d22d6e2bc94280243730f5620e36dc6b3d61870e2660368ae0fd20aa0116&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZPJL72I%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T132855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDfCaS%2FIOpn7dYSZlmUlAtKF07fHr61SwTsKti21osanQIhAIuQ1wPgZhekR7YXHHtkZMTR9iaGepdM7XWn0MnaBucjKv8DCC4QABoMNjM3NDIzMTgzODA1IgxvshxW7uibjVQfmr0q3ANiOQh98ikdTHFMUrXPHiDsiOL6CzFuqypy6MSDk4w4xGYaGjkAWVO2smX66upXH6PTKp96R5OjNuDTSj4xBALtX9XhHPEfthtJOG40wuPP%2BX4Xm5goQqmho9jIopIYGvlv8dF8MY5d1fYc0yy3eCRh%2BRAlOpQus3dkzBIcpPGUzx%2F3NXr4ZVzjHXldWvYqMsNQq8XTAlqXs4vlT%2Fo3JTbeJ6sycH6HVIuFiyvG5vt6eDBzn8FctJbN7dttkdAcZ9ZveetNThfFjP0Nr68XXE%2BNiK1YAKng%2B6QIx3%2FYxnVHMavNwbaqbZBjXNvdW%2BUsSiBjwjlGoZTY0L%2F4FhALWL1NOmxYPlpZBrMhHmLOaRGoA7tJZ2UUlF5WwLRv%2F5IkeaBDw51pSnicBJUFLUx44JcOG1v4%2BwfHUkeQQ5WqGVlnpKiXmwH2tqYTcIday%2FAGc%2B%2BcjI2O2qOrE3oI61t0j8%2BuQvx2E5a2Au%2FIh5kRTqJHkuy380Cyeu2WKtz3Ofxrt9VWZ0y%2F%2FpGnHfYuSn%2FI8RuQQC4xnnD0Sb9sOv2jfMJXUbfNze%2BuAxSvp%2FvzvCosbxbqOmDiUo0IlPYNNnsJWs3Vca%2B%2BU4JiJy2Msr%2BRDavZqHd19GeP2qZRY0q%2FTDDXhNTDBjqkARi%2BgQxS81RjH9p1rrYumMbfsJeZmetfBz8zUeEpxB%2Fz%2F7qPsAH%2FUqpIriERkNeW0hOr51vyPkjFkDXVQ7FcMuSV6AYaj5%2B7cBpHjE3U84cYKrmXMtY0b3WwN1Yz6ceTcBq%2FJbgfKlTgXMxWHvEzz3Hu6n9HXnAH0%2FUv38aC%2B6xRobaa3F%2B3sR%2FbQZlLyf1JIY3QRnMxkaAn2CcJhNSRItVpmvjn&X-Amz-Signature=37992c26dae623352fe8850e27a108b8e3c89cb48133b35d7fb8d6dad7bf6fc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZPJL72I%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T132855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDfCaS%2FIOpn7dYSZlmUlAtKF07fHr61SwTsKti21osanQIhAIuQ1wPgZhekR7YXHHtkZMTR9iaGepdM7XWn0MnaBucjKv8DCC4QABoMNjM3NDIzMTgzODA1IgxvshxW7uibjVQfmr0q3ANiOQh98ikdTHFMUrXPHiDsiOL6CzFuqypy6MSDk4w4xGYaGjkAWVO2smX66upXH6PTKp96R5OjNuDTSj4xBALtX9XhHPEfthtJOG40wuPP%2BX4Xm5goQqmho9jIopIYGvlv8dF8MY5d1fYc0yy3eCRh%2BRAlOpQus3dkzBIcpPGUzx%2F3NXr4ZVzjHXldWvYqMsNQq8XTAlqXs4vlT%2Fo3JTbeJ6sycH6HVIuFiyvG5vt6eDBzn8FctJbN7dttkdAcZ9ZveetNThfFjP0Nr68XXE%2BNiK1YAKng%2B6QIx3%2FYxnVHMavNwbaqbZBjXNvdW%2BUsSiBjwjlGoZTY0L%2F4FhALWL1NOmxYPlpZBrMhHmLOaRGoA7tJZ2UUlF5WwLRv%2F5IkeaBDw51pSnicBJUFLUx44JcOG1v4%2BwfHUkeQQ5WqGVlnpKiXmwH2tqYTcIday%2FAGc%2B%2BcjI2O2qOrE3oI61t0j8%2BuQvx2E5a2Au%2FIh5kRTqJHkuy380Cyeu2WKtz3Ofxrt9VWZ0y%2F%2FpGnHfYuSn%2FI8RuQQC4xnnD0Sb9sOv2jfMJXUbfNze%2BuAxSvp%2FvzvCosbxbqOmDiUo0IlPYNNnsJWs3Vca%2B%2BU4JiJy2Msr%2BRDavZqHd19GeP2qZRY0q%2FTDDXhNTDBjqkARi%2BgQxS81RjH9p1rrYumMbfsJeZmetfBz8zUeEpxB%2Fz%2F7qPsAH%2FUqpIriERkNeW0hOr51vyPkjFkDXVQ7FcMuSV6AYaj5%2B7cBpHjE3U84cYKrmXMtY0b3WwN1Yz6ceTcBq%2FJbgfKlTgXMxWHvEzz3Hu6n9HXnAH0%2FUv38aC%2B6xRobaa3F%2B3sR%2FbQZlLyf1JIY3QRnMxkaAn2CcJhNSRItVpmvjn&X-Amz-Signature=477b490d1e0d31a97f2b667162fdce717f87392e3048396d72b5d05843340dbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
