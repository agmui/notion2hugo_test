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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PPJZZRV%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T121520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGyw2%2BuZIgI0eHI7LOifG50JOE3296v7lRGOg48Sy%2BTFAiA8fjZfv9anCneY6KR3m4jdUhNyJyE9Q%2BsPHTQvoEmAtSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMDYS7MUCAYiut0HaIKtwD2zcVm2Hm7De54EhbCT5TaI%2BouldvAiEIywsEgoFpfXmq2U2Hryns5s0Gi9WhzM8uWGX5L%2FfU247UmyzgHat8cbze%2FRn6Bqv3aXi%2F43a0bNTVX%2FdYYgTsZIQaQTT%2F7P%2B4MEsLlv5%2BWtyCK1noT5aMxyYwiTDsd%2FhnJ7KxqCbRgxwvfl8AjNsNHpF1M9Fh8dlUxz21%2FaAwwLGFP2xspZIHJpjnLN%2FXYmTwyqaJs3ZNy7ENaQPnfdJTUR30F4b0CIm%2BCshQaN6oy1uHlA14Entz6VQsUijsXFFZ2t2HhJLZyx9oaCSTletvyWUH8FKi4NNoDHzjXNR9IVuLpHIIdMFR15u0fYmcjVWLhil0FsbnT1G1tLhDrfJQzH4RuzSH3dnNJlBR4WhGUKi7hqdg1m85lAN0DTKOvvQC9u%2F1SJf7%2FRBqEMjWLgW%2BZtY5xx8vwL04YGMPWqDt7I%2Ff9UV7wKCqNgtRFztPhxRpQB4FX%2F3kodc7fnxcF0Ss1i8Sq3MjdRLulPqAGJbECGjLGFccyzpkqPYkBPNNpxyYfig2VGJV5rrybnBpWdQb47AEM7yPtNfRNJGG2HeM3g8S3YHzMPHRymqSGTE1KdiD3ZkxjzBYPYDZFWTyLA9b5y7odD4wv%2B3OvwY6pgGSOoMIA3M7ci%2FT%2BHhSo64MXlzUd7Yv9XYm4Gmkvva36Xxke2h9RUhoGiucsykM10lzpe5EO%2BVmgbgWzMMLMF39xxn4urUOd5PqJgrkU%2Fhyx2QgnPcuXs2DKi2tlI6URbQUIrSLp8jnrVBxJQ7dfSG4nW2DCw%2FnURWpxZIjjL1PYRbj7WuNj92pCF%2BSaRXi0unNvoaLQ7cgXT4Jh%2F9Xgle6oHX8chdt&X-Amz-Signature=70c0624458414de73e78636800e8b371e9ad9b28d4b828d3ee69bad1bf39f0b3&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PPJZZRV%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T121520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGyw2%2BuZIgI0eHI7LOifG50JOE3296v7lRGOg48Sy%2BTFAiA8fjZfv9anCneY6KR3m4jdUhNyJyE9Q%2BsPHTQvoEmAtSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMDYS7MUCAYiut0HaIKtwD2zcVm2Hm7De54EhbCT5TaI%2BouldvAiEIywsEgoFpfXmq2U2Hryns5s0Gi9WhzM8uWGX5L%2FfU247UmyzgHat8cbze%2FRn6Bqv3aXi%2F43a0bNTVX%2FdYYgTsZIQaQTT%2F7P%2B4MEsLlv5%2BWtyCK1noT5aMxyYwiTDsd%2FhnJ7KxqCbRgxwvfl8AjNsNHpF1M9Fh8dlUxz21%2FaAwwLGFP2xspZIHJpjnLN%2FXYmTwyqaJs3ZNy7ENaQPnfdJTUR30F4b0CIm%2BCshQaN6oy1uHlA14Entz6VQsUijsXFFZ2t2HhJLZyx9oaCSTletvyWUH8FKi4NNoDHzjXNR9IVuLpHIIdMFR15u0fYmcjVWLhil0FsbnT1G1tLhDrfJQzH4RuzSH3dnNJlBR4WhGUKi7hqdg1m85lAN0DTKOvvQC9u%2F1SJf7%2FRBqEMjWLgW%2BZtY5xx8vwL04YGMPWqDt7I%2Ff9UV7wKCqNgtRFztPhxRpQB4FX%2F3kodc7fnxcF0Ss1i8Sq3MjdRLulPqAGJbECGjLGFccyzpkqPYkBPNNpxyYfig2VGJV5rrybnBpWdQb47AEM7yPtNfRNJGG2HeM3g8S3YHzMPHRymqSGTE1KdiD3ZkxjzBYPYDZFWTyLA9b5y7odD4wv%2B3OvwY6pgGSOoMIA3M7ci%2FT%2BHhSo64MXlzUd7Yv9XYm4Gmkvva36Xxke2h9RUhoGiucsykM10lzpe5EO%2BVmgbgWzMMLMF39xxn4urUOd5PqJgrkU%2Fhyx2QgnPcuXs2DKi2tlI6URbQUIrSLp8jnrVBxJQ7dfSG4nW2DCw%2FnURWpxZIjjL1PYRbj7WuNj92pCF%2BSaRXi0unNvoaLQ7cgXT4Jh%2F9Xgle6oHX8chdt&X-Amz-Signature=8f3db01657a850fddbde5f89bb58e137f8874d922c53a68214d249c10bce6822&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PPJZZRV%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T121520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGyw2%2BuZIgI0eHI7LOifG50JOE3296v7lRGOg48Sy%2BTFAiA8fjZfv9anCneY6KR3m4jdUhNyJyE9Q%2BsPHTQvoEmAtSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMDYS7MUCAYiut0HaIKtwD2zcVm2Hm7De54EhbCT5TaI%2BouldvAiEIywsEgoFpfXmq2U2Hryns5s0Gi9WhzM8uWGX5L%2FfU247UmyzgHat8cbze%2FRn6Bqv3aXi%2F43a0bNTVX%2FdYYgTsZIQaQTT%2F7P%2B4MEsLlv5%2BWtyCK1noT5aMxyYwiTDsd%2FhnJ7KxqCbRgxwvfl8AjNsNHpF1M9Fh8dlUxz21%2FaAwwLGFP2xspZIHJpjnLN%2FXYmTwyqaJs3ZNy7ENaQPnfdJTUR30F4b0CIm%2BCshQaN6oy1uHlA14Entz6VQsUijsXFFZ2t2HhJLZyx9oaCSTletvyWUH8FKi4NNoDHzjXNR9IVuLpHIIdMFR15u0fYmcjVWLhil0FsbnT1G1tLhDrfJQzH4RuzSH3dnNJlBR4WhGUKi7hqdg1m85lAN0DTKOvvQC9u%2F1SJf7%2FRBqEMjWLgW%2BZtY5xx8vwL04YGMPWqDt7I%2Ff9UV7wKCqNgtRFztPhxRpQB4FX%2F3kodc7fnxcF0Ss1i8Sq3MjdRLulPqAGJbECGjLGFccyzpkqPYkBPNNpxyYfig2VGJV5rrybnBpWdQb47AEM7yPtNfRNJGG2HeM3g8S3YHzMPHRymqSGTE1KdiD3ZkxjzBYPYDZFWTyLA9b5y7odD4wv%2B3OvwY6pgGSOoMIA3M7ci%2FT%2BHhSo64MXlzUd7Yv9XYm4Gmkvva36Xxke2h9RUhoGiucsykM10lzpe5EO%2BVmgbgWzMMLMF39xxn4urUOd5PqJgrkU%2Fhyx2QgnPcuXs2DKi2tlI6URbQUIrSLp8jnrVBxJQ7dfSG4nW2DCw%2FnURWpxZIjjL1PYRbj7WuNj92pCF%2BSaRXi0unNvoaLQ7cgXT4Jh%2F9Xgle6oHX8chdt&X-Amz-Signature=b10587ab6737699021a226c4e52a8056863095e2b5415e65910cacc35fe9dfaa&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
