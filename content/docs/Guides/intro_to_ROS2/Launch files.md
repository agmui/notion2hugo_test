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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X6C2F2Y%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T034605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXQ7JtqN1hByYQr4aXNhgC0%2F39yKK5wOgKcgeADaZtjAiA4uPjmZU5FxUJ5lsSHUYZDC4R2BP8rNJAGiEOogtUB%2BCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHXcCJxZGdY9U5popKtwDjhE9UwDFnQP%2B9sICKhUoLTDwnHzhb6tSI2smtICqQGJeCoO%2BsC%2FLUxAKcqpq6KsBWChrl7nGb17AMVOm1ZrEBW6%2BIFeZq4CyCHltfxdOFR6%2B4wZue57MQFZIoDMOe%2FXkAkAD3ZiSb7%2BYAHTvqY6lKBP7Z%2B8RtdIysDvCgEG5Wd7Erj4aVDg%2FUYmNBv6qosp%2BufWM5P%2Fa5aj3xLfYSHcBwCEuxLInso4zyGlzVEpOzJyKB%2FDthXGRnvgvpX%2FgP7WCCLSod4p0W8hKSiKP5kTcqXJ%2FqB3igJyXaxu1Lbv7QVEuVK4LN6UqP8ty4z84gEMj1f07zcFAb2aAHl7LNr7A852LwusWTKR%2F2r1wggPoSdlhaicy%2BR9XWrihUw6688wA5lrcg797jLtfm49Q1rOdtVGhn1XMXK63SqLmcRSIWQFoyWt503Td7XprZ0A0dBbLmNPuLsEsZ%2B8p0aTUlMv0nyghXlYQUxigjjooaogm%2BuxYRl7gpCy%2FGQH5jDehhmypIyUL6c5ufih9TkjOPs6BlN8n5xJZaAr%2BLk0R6mWRNDEUIT2uyS%2BmhkB5F5WxOu%2Byca4QatcG4BqxxJp1bhv2b9%2BneG0B1jp5XAp9nokbbwyETksuUom8Givfxoww%2FKHswwY6pgEZ0a5TnqNF3m9fpt3IgHSexjDc68Q46UMAY%2BGsEl8HXGi3rIX8EQSs4o8KdXcG9m1dYB1Q07uFZY5pKNOq2eyvfADvEsdLux9Q1yIxouKi2%2FxFrsy%2FTozuQOHfsD%2Bvz9ycAXa0TsqRnqQs4rVMiC1wbWOV8TpOjFz5OJWc1gzKwXabzoGAJBaMKypEBPbGFktIEIKJ06IhkWCIb3sznUDqzWAAVwL9&X-Amz-Signature=6eadf3900d957bac731846c6a352e1a106ac24ba5d02c55a4b70a8c648a65e85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X6C2F2Y%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T034605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXQ7JtqN1hByYQr4aXNhgC0%2F39yKK5wOgKcgeADaZtjAiA4uPjmZU5FxUJ5lsSHUYZDC4R2BP8rNJAGiEOogtUB%2BCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHXcCJxZGdY9U5popKtwDjhE9UwDFnQP%2B9sICKhUoLTDwnHzhb6tSI2smtICqQGJeCoO%2BsC%2FLUxAKcqpq6KsBWChrl7nGb17AMVOm1ZrEBW6%2BIFeZq4CyCHltfxdOFR6%2B4wZue57MQFZIoDMOe%2FXkAkAD3ZiSb7%2BYAHTvqY6lKBP7Z%2B8RtdIysDvCgEG5Wd7Erj4aVDg%2FUYmNBv6qosp%2BufWM5P%2Fa5aj3xLfYSHcBwCEuxLInso4zyGlzVEpOzJyKB%2FDthXGRnvgvpX%2FgP7WCCLSod4p0W8hKSiKP5kTcqXJ%2FqB3igJyXaxu1Lbv7QVEuVK4LN6UqP8ty4z84gEMj1f07zcFAb2aAHl7LNr7A852LwusWTKR%2F2r1wggPoSdlhaicy%2BR9XWrihUw6688wA5lrcg797jLtfm49Q1rOdtVGhn1XMXK63SqLmcRSIWQFoyWt503Td7XprZ0A0dBbLmNPuLsEsZ%2B8p0aTUlMv0nyghXlYQUxigjjooaogm%2BuxYRl7gpCy%2FGQH5jDehhmypIyUL6c5ufih9TkjOPs6BlN8n5xJZaAr%2BLk0R6mWRNDEUIT2uyS%2BmhkB5F5WxOu%2Byca4QatcG4BqxxJp1bhv2b9%2BneG0B1jp5XAp9nokbbwyETksuUom8Givfxoww%2FKHswwY6pgEZ0a5TnqNF3m9fpt3IgHSexjDc68Q46UMAY%2BGsEl8HXGi3rIX8EQSs4o8KdXcG9m1dYB1Q07uFZY5pKNOq2eyvfADvEsdLux9Q1yIxouKi2%2FxFrsy%2FTozuQOHfsD%2Bvz9ycAXa0TsqRnqQs4rVMiC1wbWOV8TpOjFz5OJWc1gzKwXabzoGAJBaMKypEBPbGFktIEIKJ06IhkWCIb3sznUDqzWAAVwL9&X-Amz-Signature=c21bc89e47be308ec446596f5ce5ff5d3d904f69b900788c1cfd68a97eedfe33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X6C2F2Y%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T034605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXQ7JtqN1hByYQr4aXNhgC0%2F39yKK5wOgKcgeADaZtjAiA4uPjmZU5FxUJ5lsSHUYZDC4R2BP8rNJAGiEOogtUB%2BCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHXcCJxZGdY9U5popKtwDjhE9UwDFnQP%2B9sICKhUoLTDwnHzhb6tSI2smtICqQGJeCoO%2BsC%2FLUxAKcqpq6KsBWChrl7nGb17AMVOm1ZrEBW6%2BIFeZq4CyCHltfxdOFR6%2B4wZue57MQFZIoDMOe%2FXkAkAD3ZiSb7%2BYAHTvqY6lKBP7Z%2B8RtdIysDvCgEG5Wd7Erj4aVDg%2FUYmNBv6qosp%2BufWM5P%2Fa5aj3xLfYSHcBwCEuxLInso4zyGlzVEpOzJyKB%2FDthXGRnvgvpX%2FgP7WCCLSod4p0W8hKSiKP5kTcqXJ%2FqB3igJyXaxu1Lbv7QVEuVK4LN6UqP8ty4z84gEMj1f07zcFAb2aAHl7LNr7A852LwusWTKR%2F2r1wggPoSdlhaicy%2BR9XWrihUw6688wA5lrcg797jLtfm49Q1rOdtVGhn1XMXK63SqLmcRSIWQFoyWt503Td7XprZ0A0dBbLmNPuLsEsZ%2B8p0aTUlMv0nyghXlYQUxigjjooaogm%2BuxYRl7gpCy%2FGQH5jDehhmypIyUL6c5ufih9TkjOPs6BlN8n5xJZaAr%2BLk0R6mWRNDEUIT2uyS%2BmhkB5F5WxOu%2Byca4QatcG4BqxxJp1bhv2b9%2BneG0B1jp5XAp9nokbbwyETksuUom8Givfxoww%2FKHswwY6pgEZ0a5TnqNF3m9fpt3IgHSexjDc68Q46UMAY%2BGsEl8HXGi3rIX8EQSs4o8KdXcG9m1dYB1Q07uFZY5pKNOq2eyvfADvEsdLux9Q1yIxouKi2%2FxFrsy%2FTozuQOHfsD%2Bvz9ycAXa0TsqRnqQs4rVMiC1wbWOV8TpOjFz5OJWc1gzKwXabzoGAJBaMKypEBPbGFktIEIKJ06IhkWCIb3sznUDqzWAAVwL9&X-Amz-Signature=90c592899d2715c5f0ccddb2297e046facaa77b2cdc8700a08d9d7abbe5db0bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
