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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXPO2I2G%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T121431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjg%2FVPf5TtRlslo1uKZiAUxwrcZNzKqfu9qg3ZGk4ocgIhALi0IPYYsBXIARalUhb6AvOwj1eSvZ0IZQabQvCSIOrJKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdKYW7wyxTgBtTuFYq3AN4T4x9m23BwyiQduWkos8hTX0d7QVCYhmYUpSFXrnRkmq49BSirpeu13crEVEqmd7%2BloGxYysAGG6%2FIZJjnczlNzzmu0%2FpRoW8Aqvf6cW9UbGFtJ3qtpnE2zp48Zmw4lFdTkzXo%2F6ee6mMB37i8ZFp6UYKdcE2IykhWz1FmEwiGQ6frLIMmA77iqgAckSF%2BWJS5D782RcqWoVVY1FH%2FnT3XWtL8ja79COLduAVeDrqRamfQxsGHJsTXoV0cxYdmzub%2BIdTRWSReOfiMUO%2F8pXzSBZFwFCh5SxAg9%2B1Y6nv2M%2BnwZa0CMFthA2EhWGEmkZ3PK8VROSYflLVmrPRTfwjaKJyiQdBiwdQQ3FWL9bWdZgUphcFm5DqeJqT2wA%2BTa6TFS%2FGjisIcI%2Bgccqhlhf%2FS4XRief31L2kNYYvpANtvH3vy3LCMzRzrJDtlvg2raaq5GGTC1%2BO%2BwEVuBEiC5Fn0hhTafWaNXl%2BqPMRiCRSqd88%2FVLdg6e0JrNl7WA8p%2FOOjkHAgtxc6OBd9ZMJU3SskFiTIRC2GfEv%2B0XOg%2FZtQXZDsdCocKHccKFlHginAkirQK%2FzVj%2FsSrtfmbOUMiPZoczjzjJX59FkqjHpPKmuxY4NN2mcDqZV9lBgNzDwxpu%2BBjqkARsZ5nGNG2auCp2Qv59OKEqzcLBPFBLyWM4DuoJqI0gbL%2FPKO0E5nhdwACRcD5tOBbsP9%2BWbkrEx13UEin2Dl75xy1Inajkv8ATVA3NiqmqbcjtLwdfKDHSBZSfE%2F1KhfnYcEebZ0bVnxWjA%2Ff2e%2FhCdG5oNzW1zk5IgaimUePFs1RJSHU56n3mMUa7vgpPLbOUaW3BK5Dj%2Fns64Ks0%2Fvc1N%2B9cQ&X-Amz-Signature=e3e41f8457bd89e1d7e563bc7a0616c4cfa8003093961b39fc4b1d488787a256&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXPO2I2G%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T121431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjg%2FVPf5TtRlslo1uKZiAUxwrcZNzKqfu9qg3ZGk4ocgIhALi0IPYYsBXIARalUhb6AvOwj1eSvZ0IZQabQvCSIOrJKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdKYW7wyxTgBtTuFYq3AN4T4x9m23BwyiQduWkos8hTX0d7QVCYhmYUpSFXrnRkmq49BSirpeu13crEVEqmd7%2BloGxYysAGG6%2FIZJjnczlNzzmu0%2FpRoW8Aqvf6cW9UbGFtJ3qtpnE2zp48Zmw4lFdTkzXo%2F6ee6mMB37i8ZFp6UYKdcE2IykhWz1FmEwiGQ6frLIMmA77iqgAckSF%2BWJS5D782RcqWoVVY1FH%2FnT3XWtL8ja79COLduAVeDrqRamfQxsGHJsTXoV0cxYdmzub%2BIdTRWSReOfiMUO%2F8pXzSBZFwFCh5SxAg9%2B1Y6nv2M%2BnwZa0CMFthA2EhWGEmkZ3PK8VROSYflLVmrPRTfwjaKJyiQdBiwdQQ3FWL9bWdZgUphcFm5DqeJqT2wA%2BTa6TFS%2FGjisIcI%2Bgccqhlhf%2FS4XRief31L2kNYYvpANtvH3vy3LCMzRzrJDtlvg2raaq5GGTC1%2BO%2BwEVuBEiC5Fn0hhTafWaNXl%2BqPMRiCRSqd88%2FVLdg6e0JrNl7WA8p%2FOOjkHAgtxc6OBd9ZMJU3SskFiTIRC2GfEv%2B0XOg%2FZtQXZDsdCocKHccKFlHginAkirQK%2FzVj%2FsSrtfmbOUMiPZoczjzjJX59FkqjHpPKmuxY4NN2mcDqZV9lBgNzDwxpu%2BBjqkARsZ5nGNG2auCp2Qv59OKEqzcLBPFBLyWM4DuoJqI0gbL%2FPKO0E5nhdwACRcD5tOBbsP9%2BWbkrEx13UEin2Dl75xy1Inajkv8ATVA3NiqmqbcjtLwdfKDHSBZSfE%2F1KhfnYcEebZ0bVnxWjA%2Ff2e%2FhCdG5oNzW1zk5IgaimUePFs1RJSHU56n3mMUa7vgpPLbOUaW3BK5Dj%2Fns64Ks0%2Fvc1N%2B9cQ&X-Amz-Signature=520e7410d5b92b877ac75417b826b94d73e37cbf0b0d635549b94e090c3afda0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXPO2I2G%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T121431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjg%2FVPf5TtRlslo1uKZiAUxwrcZNzKqfu9qg3ZGk4ocgIhALi0IPYYsBXIARalUhb6AvOwj1eSvZ0IZQabQvCSIOrJKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdKYW7wyxTgBtTuFYq3AN4T4x9m23BwyiQduWkos8hTX0d7QVCYhmYUpSFXrnRkmq49BSirpeu13crEVEqmd7%2BloGxYysAGG6%2FIZJjnczlNzzmu0%2FpRoW8Aqvf6cW9UbGFtJ3qtpnE2zp48Zmw4lFdTkzXo%2F6ee6mMB37i8ZFp6UYKdcE2IykhWz1FmEwiGQ6frLIMmA77iqgAckSF%2BWJS5D782RcqWoVVY1FH%2FnT3XWtL8ja79COLduAVeDrqRamfQxsGHJsTXoV0cxYdmzub%2BIdTRWSReOfiMUO%2F8pXzSBZFwFCh5SxAg9%2B1Y6nv2M%2BnwZa0CMFthA2EhWGEmkZ3PK8VROSYflLVmrPRTfwjaKJyiQdBiwdQQ3FWL9bWdZgUphcFm5DqeJqT2wA%2BTa6TFS%2FGjisIcI%2Bgccqhlhf%2FS4XRief31L2kNYYvpANtvH3vy3LCMzRzrJDtlvg2raaq5GGTC1%2BO%2BwEVuBEiC5Fn0hhTafWaNXl%2BqPMRiCRSqd88%2FVLdg6e0JrNl7WA8p%2FOOjkHAgtxc6OBd9ZMJU3SskFiTIRC2GfEv%2B0XOg%2FZtQXZDsdCocKHccKFlHginAkirQK%2FzVj%2FsSrtfmbOUMiPZoczjzjJX59FkqjHpPKmuxY4NN2mcDqZV9lBgNzDwxpu%2BBjqkARsZ5nGNG2auCp2Qv59OKEqzcLBPFBLyWM4DuoJqI0gbL%2FPKO0E5nhdwACRcD5tOBbsP9%2BWbkrEx13UEin2Dl75xy1Inajkv8ATVA3NiqmqbcjtLwdfKDHSBZSfE%2F1KhfnYcEebZ0bVnxWjA%2Ff2e%2FhCdG5oNzW1zk5IgaimUePFs1RJSHU56n3mMUa7vgpPLbOUaW3BK5Dj%2Fns64Ks0%2Fvc1N%2B9cQ&X-Amz-Signature=c59889be4778bd61f667aae4d9ed8643d88c11df311bedc4031af068128a1b2b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
