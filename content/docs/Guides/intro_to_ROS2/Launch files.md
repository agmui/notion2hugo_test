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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644C5IVSR%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQDkTE7xoP3BrRMBDjvIb3Jfc%2FE7YTjvGBdwH2VowuVmBQIhAKb8Ctx6xLr30eOXJKCKjyveJqDNc6gwZsLk9S1oxCu%2BKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1dj5GLLIs7UucH3gq3AMnx61UAYNYCDDfOTWZMlVfj%2BRXGl8msXcVES4rN4T1gp5gOwioJ0pl7%2BUKICsiWcdb7aP%2FFhUuc3r73jdNzl46uBr%2FGdIVD7Q%2BKZIbeMTpykBm4ofZIyu4fylZ%2B1eo98UVgQB8bOPK9I3ulCKi4Dt1tGyCCrYww7rMcWknaiBoLBTe2wp7tZKzjfaxMSRTbFDnWH%2FlNk0sxz6sx1HwOKLLQtpiC3anDN%2FhkST1CHBl6VId9xwxXqQhoPHYoOLznhSEUAgfpSjcWBxLHrfgrkgFp4cM05cSk30UXUSh6OmW49d4mmZBilh2jKV%2Bc5H2g%2BXz3kF6SvxKc8hGjdYXdpcoQ41vriluhNNpggLAGdVTf6g1E77lzDkne42PhCCPbViIYto4KAm3spmZAt28332Pj1t3BDOu3LyKbNHDwxSEPji%2BU3vCPH5cHkhfsLn11e0p8wlTuTVY%2FbChi3h2tFSVE42wTlHYOBQVJnIxKEWoQlUNvInxuPi26KLVCZbeMZw8FpI0bJPHUpX3VqQI6hvw%2Frk7bSIg59cq8GFrFuF7jxdP087ZVFwH0nAfiWAOZx5AnDv9A%2F6fJpChhHHw6G1Z8%2B87gxzlEqygrEe%2Fx4r4SH02hFX8ihX7Xba4OTCu94nBBjqkAWtg4zoye1GKbrbAOh%2BQwcJPBhHm0bG%2BfO3pNGa8qxSI8FXjDpuVbN3o%2BMJCGzu8MqK%2BdQfeLvJEjTMLJ00nWSpfeCn4kkQoM0jdVnmgCATRADff9%2FjEeh%2Bg4aAlxf5lbH9t%2FqqsmYDc90sZJXG6apdzt7IvH4%2B2wx6GgGyBheIiq6obc0%2FJiZyixcVHngakASxoq4%2BBn3ve%2FEG6XrJoZT0rI4%2BP&X-Amz-Signature=7756b8f06f2e883ab5ed6e7eacad965d6425a74dcf1d05e8fa28a1128d51ef05&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644C5IVSR%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQDkTE7xoP3BrRMBDjvIb3Jfc%2FE7YTjvGBdwH2VowuVmBQIhAKb8Ctx6xLr30eOXJKCKjyveJqDNc6gwZsLk9S1oxCu%2BKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1dj5GLLIs7UucH3gq3AMnx61UAYNYCDDfOTWZMlVfj%2BRXGl8msXcVES4rN4T1gp5gOwioJ0pl7%2BUKICsiWcdb7aP%2FFhUuc3r73jdNzl46uBr%2FGdIVD7Q%2BKZIbeMTpykBm4ofZIyu4fylZ%2B1eo98UVgQB8bOPK9I3ulCKi4Dt1tGyCCrYww7rMcWknaiBoLBTe2wp7tZKzjfaxMSRTbFDnWH%2FlNk0sxz6sx1HwOKLLQtpiC3anDN%2FhkST1CHBl6VId9xwxXqQhoPHYoOLznhSEUAgfpSjcWBxLHrfgrkgFp4cM05cSk30UXUSh6OmW49d4mmZBilh2jKV%2Bc5H2g%2BXz3kF6SvxKc8hGjdYXdpcoQ41vriluhNNpggLAGdVTf6g1E77lzDkne42PhCCPbViIYto4KAm3spmZAt28332Pj1t3BDOu3LyKbNHDwxSEPji%2BU3vCPH5cHkhfsLn11e0p8wlTuTVY%2FbChi3h2tFSVE42wTlHYOBQVJnIxKEWoQlUNvInxuPi26KLVCZbeMZw8FpI0bJPHUpX3VqQI6hvw%2Frk7bSIg59cq8GFrFuF7jxdP087ZVFwH0nAfiWAOZx5AnDv9A%2F6fJpChhHHw6G1Z8%2B87gxzlEqygrEe%2Fx4r4SH02hFX8ihX7Xba4OTCu94nBBjqkAWtg4zoye1GKbrbAOh%2BQwcJPBhHm0bG%2BfO3pNGa8qxSI8FXjDpuVbN3o%2BMJCGzu8MqK%2BdQfeLvJEjTMLJ00nWSpfeCn4kkQoM0jdVnmgCATRADff9%2FjEeh%2Bg4aAlxf5lbH9t%2FqqsmYDc90sZJXG6apdzt7IvH4%2B2wx6GgGyBheIiq6obc0%2FJiZyixcVHngakASxoq4%2BBn3ve%2FEG6XrJoZT0rI4%2BP&X-Amz-Signature=077f20ed9096be310be81caec5efa02705b27171a577e5ed958f80dbdf8857c5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644C5IVSR%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQDkTE7xoP3BrRMBDjvIb3Jfc%2FE7YTjvGBdwH2VowuVmBQIhAKb8Ctx6xLr30eOXJKCKjyveJqDNc6gwZsLk9S1oxCu%2BKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1dj5GLLIs7UucH3gq3AMnx61UAYNYCDDfOTWZMlVfj%2BRXGl8msXcVES4rN4T1gp5gOwioJ0pl7%2BUKICsiWcdb7aP%2FFhUuc3r73jdNzl46uBr%2FGdIVD7Q%2BKZIbeMTpykBm4ofZIyu4fylZ%2B1eo98UVgQB8bOPK9I3ulCKi4Dt1tGyCCrYww7rMcWknaiBoLBTe2wp7tZKzjfaxMSRTbFDnWH%2FlNk0sxz6sx1HwOKLLQtpiC3anDN%2FhkST1CHBl6VId9xwxXqQhoPHYoOLznhSEUAgfpSjcWBxLHrfgrkgFp4cM05cSk30UXUSh6OmW49d4mmZBilh2jKV%2Bc5H2g%2BXz3kF6SvxKc8hGjdYXdpcoQ41vriluhNNpggLAGdVTf6g1E77lzDkne42PhCCPbViIYto4KAm3spmZAt28332Pj1t3BDOu3LyKbNHDwxSEPji%2BU3vCPH5cHkhfsLn11e0p8wlTuTVY%2FbChi3h2tFSVE42wTlHYOBQVJnIxKEWoQlUNvInxuPi26KLVCZbeMZw8FpI0bJPHUpX3VqQI6hvw%2Frk7bSIg59cq8GFrFuF7jxdP087ZVFwH0nAfiWAOZx5AnDv9A%2F6fJpChhHHw6G1Z8%2B87gxzlEqygrEe%2Fx4r4SH02hFX8ihX7Xba4OTCu94nBBjqkAWtg4zoye1GKbrbAOh%2BQwcJPBhHm0bG%2BfO3pNGa8qxSI8FXjDpuVbN3o%2BMJCGzu8MqK%2BdQfeLvJEjTMLJ00nWSpfeCn4kkQoM0jdVnmgCATRADff9%2FjEeh%2Bg4aAlxf5lbH9t%2FqqsmYDc90sZJXG6apdzt7IvH4%2B2wx6GgGyBheIiq6obc0%2FJiZyixcVHngakASxoq4%2BBn3ve%2FEG6XrJoZT0rI4%2BP&X-Amz-Signature=eda334b4d2c93e2900cef7099c0a12493781575157593d8e65cc0e760c2488fc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
