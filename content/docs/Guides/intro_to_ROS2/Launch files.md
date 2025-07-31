---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZJJG5SR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNnaeNndCufCwD55ya0loUkHgTNf46EU%2BRHBwJanog3wIhAP%2F0atccSWdOZFqGsbQ1l%2Fd%2F879QfOrAFDCFjQSLVQbzKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD%2FPo8wWtwznrXb98q3AOkB%2F7BOuWMaQBQMVTrMovn7dQR8kQRTMvapxVZl68Gbfp4lhgwv%2BsuijSfLN8Oh%2B6FfoCsUpFs%2FG5YSAj%2BuTHURo1Xa%2FubSiqvxCznVQzZRiDq8NcX1dU5RnwIRuCm4rA8qKws%2BAm%2BMWX2FwjTJU3y2Yy4e2CdTQWm2%2FoLppS1il2b4%2Bd5BgnEthGGi2Aes6YL17%2FGutZShNPdJ88dm1Xi9uZ3ZA%2F1Pe0A4zDAB6n4d5vWQBwYqV4H7h1NZNK7%2BI5K40T6ourK2KkCKOHub2gn0jRAkfMEK3qrBr45VX7fRXVQpMAXKX0un6d9VuNnzNrFUSitZVtShCxEFH6rnRghUnOvpNw1Gk5q7ynQDhAaUziuJyPzoPItt55w8IJ4NPc9SE02SxdgCux1zJ%2F3WbXbVqO8gJkTkm6u43FdrsYsXVVymGPhcNxhzs%2B9goQzBmmYK0fC6Cy2OopU61A4tTXCRrIbxe8%2FDeTiZdNe%2BdBsSVVrbwqWu75cArLbnPRHmwXOMzOTxIo1e6yK%2BFTkfsCs2uCxWrDEhzoJFDGLYq6Hd1w1B0Fdb72Y7TRPC8MmxyXc6kPRt2DwPEUzTMO7vAP78peACdiNljtK1ZOiwVIuLUhVTOKb5wX4pcZUvzCIm6zEBjqkAX3zgMFlFtscfUn52IrFni2%2FL6TUp9XHsCciY58Tj7qSlAEb7XtLMFZdCI3im08A6ogU%2F8JuGFPpknGN4bUTZFBB65BOjyOhD%2FgM6Gr5y8%2Bbe112EWid5uU%2BGAIPMfLI%2BmQ%2Fa42Asm3%2FA03uOGk7eP61a9KMDQC2WUkjWDI5wNcrJXUqtj78XhICSSrzAjcT2ikShZKGy9lNBJujVLBAw%2F8CpZUu&X-Amz-Signature=ec99941cfa204e0cf763ee1f9bdea202c5849c94a9472c9fe4f9348484d3bc4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZJJG5SR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNnaeNndCufCwD55ya0loUkHgTNf46EU%2BRHBwJanog3wIhAP%2F0atccSWdOZFqGsbQ1l%2Fd%2F879QfOrAFDCFjQSLVQbzKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD%2FPo8wWtwznrXb98q3AOkB%2F7BOuWMaQBQMVTrMovn7dQR8kQRTMvapxVZl68Gbfp4lhgwv%2BsuijSfLN8Oh%2B6FfoCsUpFs%2FG5YSAj%2BuTHURo1Xa%2FubSiqvxCznVQzZRiDq8NcX1dU5RnwIRuCm4rA8qKws%2BAm%2BMWX2FwjTJU3y2Yy4e2CdTQWm2%2FoLppS1il2b4%2Bd5BgnEthGGi2Aes6YL17%2FGutZShNPdJ88dm1Xi9uZ3ZA%2F1Pe0A4zDAB6n4d5vWQBwYqV4H7h1NZNK7%2BI5K40T6ourK2KkCKOHub2gn0jRAkfMEK3qrBr45VX7fRXVQpMAXKX0un6d9VuNnzNrFUSitZVtShCxEFH6rnRghUnOvpNw1Gk5q7ynQDhAaUziuJyPzoPItt55w8IJ4NPc9SE02SxdgCux1zJ%2F3WbXbVqO8gJkTkm6u43FdrsYsXVVymGPhcNxhzs%2B9goQzBmmYK0fC6Cy2OopU61A4tTXCRrIbxe8%2FDeTiZdNe%2BdBsSVVrbwqWu75cArLbnPRHmwXOMzOTxIo1e6yK%2BFTkfsCs2uCxWrDEhzoJFDGLYq6Hd1w1B0Fdb72Y7TRPC8MmxyXc6kPRt2DwPEUzTMO7vAP78peACdiNljtK1ZOiwVIuLUhVTOKb5wX4pcZUvzCIm6zEBjqkAX3zgMFlFtscfUn52IrFni2%2FL6TUp9XHsCciY58Tj7qSlAEb7XtLMFZdCI3im08A6ogU%2F8JuGFPpknGN4bUTZFBB65BOjyOhD%2FgM6Gr5y8%2Bbe112EWid5uU%2BGAIPMfLI%2BmQ%2Fa42Asm3%2FA03uOGk7eP61a9KMDQC2WUkjWDI5wNcrJXUqtj78XhICSSrzAjcT2ikShZKGy9lNBJujVLBAw%2F8CpZUu&X-Amz-Signature=ae9e3abd316f169f59118bdcb2fb3e15ad092e06e6350e92d52657ef2c258bcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZJJG5SR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNnaeNndCufCwD55ya0loUkHgTNf46EU%2BRHBwJanog3wIhAP%2F0atccSWdOZFqGsbQ1l%2Fd%2F879QfOrAFDCFjQSLVQbzKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD%2FPo8wWtwznrXb98q3AOkB%2F7BOuWMaQBQMVTrMovn7dQR8kQRTMvapxVZl68Gbfp4lhgwv%2BsuijSfLN8Oh%2B6FfoCsUpFs%2FG5YSAj%2BuTHURo1Xa%2FubSiqvxCznVQzZRiDq8NcX1dU5RnwIRuCm4rA8qKws%2BAm%2BMWX2FwjTJU3y2Yy4e2CdTQWm2%2FoLppS1il2b4%2Bd5BgnEthGGi2Aes6YL17%2FGutZShNPdJ88dm1Xi9uZ3ZA%2F1Pe0A4zDAB6n4d5vWQBwYqV4H7h1NZNK7%2BI5K40T6ourK2KkCKOHub2gn0jRAkfMEK3qrBr45VX7fRXVQpMAXKX0un6d9VuNnzNrFUSitZVtShCxEFH6rnRghUnOvpNw1Gk5q7ynQDhAaUziuJyPzoPItt55w8IJ4NPc9SE02SxdgCux1zJ%2F3WbXbVqO8gJkTkm6u43FdrsYsXVVymGPhcNxhzs%2B9goQzBmmYK0fC6Cy2OopU61A4tTXCRrIbxe8%2FDeTiZdNe%2BdBsSVVrbwqWu75cArLbnPRHmwXOMzOTxIo1e6yK%2BFTkfsCs2uCxWrDEhzoJFDGLYq6Hd1w1B0Fdb72Y7TRPC8MmxyXc6kPRt2DwPEUzTMO7vAP78peACdiNljtK1ZOiwVIuLUhVTOKb5wX4pcZUvzCIm6zEBjqkAX3zgMFlFtscfUn52IrFni2%2FL6TUp9XHsCciY58Tj7qSlAEb7XtLMFZdCI3im08A6ogU%2F8JuGFPpknGN4bUTZFBB65BOjyOhD%2FgM6Gr5y8%2Bbe112EWid5uU%2BGAIPMfLI%2BmQ%2Fa42Asm3%2FA03uOGk7eP61a9KMDQC2WUkjWDI5wNcrJXUqtj78XhICSSrzAjcT2ikShZKGy9lNBJujVLBAw%2F8CpZUu&X-Amz-Signature=62b7c5dad869e51e1905d9013af724c44d7972369065cdbeabb26d4504680ed8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
