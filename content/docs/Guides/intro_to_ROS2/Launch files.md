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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CIYAHYG%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T004624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCBd7oG4exxP3ODLbZ5Rmkw3I%2BVej9OfAsOxoAfVidjRwIhAPhWPLXPRTkWDc3n9BBuHhJIcAxKiTTHpCWTcS1mCWqbKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsJkucDkNXE6%2B9gTYq3AO4%2FaCNmLlFKpNBY54%2FVfJ63GFFMPnZBKGLYKigtfulP8%2FPhT9KpPrHLzfx1dG1ytll4IaFjaHuE5rLF6hP5HGnYajiql1IK5BW2dssEHc0MEvgcc%2BxLeoD7n5FEV7n3IotFzULi9NYZ7JFwkMHyYPay3uTRck6v20670oKIrr466s9qo6rkjLDhzPbbE1lb2CEodx0xLgBPV5qLVhZ4G1kBbnWaql6fhCyNENjamAAQyW%2FmE%2B4X%2BVw1MyXXqHUYk9V2tQLugSE%2FyAmunkaZAStOWEw5fmKLqcrAdwO6Ko1Y26qmrKWLhMcUwLqQSxT8gdOyN70O7ejnFfqtK%2Ff4%2Bb%2F7t5xmXtcsVh%2FC6jWwVjCVqonl1c3duBAccCgGc42sAnB%2BJOAwbvn088NOuLmX78lL%2FdV4cRGsSe5HwtvjemNYZ7%2F4fGRu2ZMKF3f%2Bv4nO6KiPqB%2B1qIdbI2vp1fHUq6vY7QoaWGVTuJ69PBACbhMU3r%2Fg7f6AY7gCJmmr9zdPPEGsElOnD48V3S0YNjhvRAkpWoiDnb41IN0L5%2FmEKhwfw0y2qs50gV7%2Bb568CfYJmRWtdIBA6dp98KVTpjX%2FfDGLfw8C8Iy8%2FsPumqQZlhAK4fDw26YHUZbYqF0hTDwpuLCBjqkAVQJfLX2VU8EpVxTE2ZLD3ciL3uv30p4PdycHaNNoAcI3VAO5DoG06I0qr32EujC6LQjnXf%2FbXo6MFl2Po%2B4C2NGKwBUHuyzEMBjYhUSuEcHGvqF3YPVnrxHitNRdlmxkV9QZbikWHvdCntYYiye%2FddZyzbygZlLIMpSWPTuqpbS7vztQVeps6D7yvxZJWXsCq3ua%2F%2FblF%2Bd9jJtBNWvZhOsO8ed&X-Amz-Signature=e5c0b351f16a615c71072b0f2581f45352e801788f6a0a64260c8eb518997948&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CIYAHYG%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T004624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCBd7oG4exxP3ODLbZ5Rmkw3I%2BVej9OfAsOxoAfVidjRwIhAPhWPLXPRTkWDc3n9BBuHhJIcAxKiTTHpCWTcS1mCWqbKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsJkucDkNXE6%2B9gTYq3AO4%2FaCNmLlFKpNBY54%2FVfJ63GFFMPnZBKGLYKigtfulP8%2FPhT9KpPrHLzfx1dG1ytll4IaFjaHuE5rLF6hP5HGnYajiql1IK5BW2dssEHc0MEvgcc%2BxLeoD7n5FEV7n3IotFzULi9NYZ7JFwkMHyYPay3uTRck6v20670oKIrr466s9qo6rkjLDhzPbbE1lb2CEodx0xLgBPV5qLVhZ4G1kBbnWaql6fhCyNENjamAAQyW%2FmE%2B4X%2BVw1MyXXqHUYk9V2tQLugSE%2FyAmunkaZAStOWEw5fmKLqcrAdwO6Ko1Y26qmrKWLhMcUwLqQSxT8gdOyN70O7ejnFfqtK%2Ff4%2Bb%2F7t5xmXtcsVh%2FC6jWwVjCVqonl1c3duBAccCgGc42sAnB%2BJOAwbvn088NOuLmX78lL%2FdV4cRGsSe5HwtvjemNYZ7%2F4fGRu2ZMKF3f%2Bv4nO6KiPqB%2B1qIdbI2vp1fHUq6vY7QoaWGVTuJ69PBACbhMU3r%2Fg7f6AY7gCJmmr9zdPPEGsElOnD48V3S0YNjhvRAkpWoiDnb41IN0L5%2FmEKhwfw0y2qs50gV7%2Bb568CfYJmRWtdIBA6dp98KVTpjX%2FfDGLfw8C8Iy8%2FsPumqQZlhAK4fDw26YHUZbYqF0hTDwpuLCBjqkAVQJfLX2VU8EpVxTE2ZLD3ciL3uv30p4PdycHaNNoAcI3VAO5DoG06I0qr32EujC6LQjnXf%2FbXo6MFl2Po%2B4C2NGKwBUHuyzEMBjYhUSuEcHGvqF3YPVnrxHitNRdlmxkV9QZbikWHvdCntYYiye%2FddZyzbygZlLIMpSWPTuqpbS7vztQVeps6D7yvxZJWXsCq3ua%2F%2FblF%2Bd9jJtBNWvZhOsO8ed&X-Amz-Signature=2b224e8a70646f52147589bfede35dcef1d7284e172358c31f806f37f6d8afb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CIYAHYG%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T004624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCBd7oG4exxP3ODLbZ5Rmkw3I%2BVej9OfAsOxoAfVidjRwIhAPhWPLXPRTkWDc3n9BBuHhJIcAxKiTTHpCWTcS1mCWqbKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsJkucDkNXE6%2B9gTYq3AO4%2FaCNmLlFKpNBY54%2FVfJ63GFFMPnZBKGLYKigtfulP8%2FPhT9KpPrHLzfx1dG1ytll4IaFjaHuE5rLF6hP5HGnYajiql1IK5BW2dssEHc0MEvgcc%2BxLeoD7n5FEV7n3IotFzULi9NYZ7JFwkMHyYPay3uTRck6v20670oKIrr466s9qo6rkjLDhzPbbE1lb2CEodx0xLgBPV5qLVhZ4G1kBbnWaql6fhCyNENjamAAQyW%2FmE%2B4X%2BVw1MyXXqHUYk9V2tQLugSE%2FyAmunkaZAStOWEw5fmKLqcrAdwO6Ko1Y26qmrKWLhMcUwLqQSxT8gdOyN70O7ejnFfqtK%2Ff4%2Bb%2F7t5xmXtcsVh%2FC6jWwVjCVqonl1c3duBAccCgGc42sAnB%2BJOAwbvn088NOuLmX78lL%2FdV4cRGsSe5HwtvjemNYZ7%2F4fGRu2ZMKF3f%2Bv4nO6KiPqB%2B1qIdbI2vp1fHUq6vY7QoaWGVTuJ69PBACbhMU3r%2Fg7f6AY7gCJmmr9zdPPEGsElOnD48V3S0YNjhvRAkpWoiDnb41IN0L5%2FmEKhwfw0y2qs50gV7%2Bb568CfYJmRWtdIBA6dp98KVTpjX%2FfDGLfw8C8Iy8%2FsPumqQZlhAK4fDw26YHUZbYqF0hTDwpuLCBjqkAVQJfLX2VU8EpVxTE2ZLD3ciL3uv30p4PdycHaNNoAcI3VAO5DoG06I0qr32EujC6LQjnXf%2FbXo6MFl2Po%2B4C2NGKwBUHuyzEMBjYhUSuEcHGvqF3YPVnrxHitNRdlmxkV9QZbikWHvdCntYYiye%2FddZyzbygZlLIMpSWPTuqpbS7vztQVeps6D7yvxZJWXsCq3ua%2F%2FblF%2Bd9jJtBNWvZhOsO8ed&X-Amz-Signature=79a4c4722395c452f4b7004a0099b7d0b4eafe18924dbf1447e635b2e7556452&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
