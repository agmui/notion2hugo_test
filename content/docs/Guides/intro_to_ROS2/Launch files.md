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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZVJJJWS%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T201009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6oz7Lf95xYI0Ck6AXWbeCosdXroxiCpvO5mFhQnR6vAiA8w58336sGXvrA%2BrPL427nR38YVfW%2FIR07irvjzGRCwiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUeBv52D%2BkNauYqyUKtwDxZfn9LUrfp0t1QoQLZC%2BhTifxvWDax316BLBGd8XywnOljWu3qNfVX6hzvi2jkTeeTCqN99megXcvMhEaz7%2FPJgBeEowlLOkDD0ebCnNZOdxrARWev%2B4PqjD1y%2Fp73WyoykDsH%2ByewQutJalzvvIbH2AlBzMBDvf3Mfy%2FqUPHssjzrLDZHzm4Iz1E2uvso%2BvGNk5ec8z9z81gA2n7FOS%2Bf8m%2FRuPCUJzks7PIiToQ5DDPyqvVK3%2FIh96xY5eoTpr7%2Fxs%2FxrGIxwRCj4NFt6AQt9Moy8TLKU5NmfcuVaw9chsf4eEPhgB3y3azL2Q5%2FtiZkNxZsJ6CxhQjrDmoQpyatmpJ70UIZzXrR9W4pFSewf0sNaPHh5%2FnmEOd5LgsnD9%2FmlQyi9%2BI8%2FZNR%2Fu%2Bi%2BbbjY3z9IrJzye%2F%2B3QaUi1GdqdaJ9DXlUdGdoJqwHLCrv0gZplumNLRAYlhUL1fA0O3fZ8UO000U2Xhzs%2BoYNXfOiE9sjly7T%2BH%2B1ioXKsrNhF255i0p%2F%2BleyhfTbCRuMhHZEjB%2F9pn1y8%2FArkc6F7M2n83F7v6Q0ja%2FNEwZqWSguQQRMbiVf7lKnCPv5N60J%2BZF8x3Kb2deaCclHtDSnD7lU3QPmVTlW%2Bguw9iDgw9te1wwY6pgFCDOe38KYMy10%2BEsNgFvrWINKU7t8aoxcOO9fJP%2B3UT75Do1MkCSmZt6BdxmPyjREyPhW8jPPlS%2Fa9ZaDZMOHi9LgxV8k4RnG0fAfs5pg8kY%2FgV0qxylDSliye7JsJ03xjRlyjfx3u7CqjSamsguc7NgAg7PYs4A5IcqU%2FjYmmkkeQiwc58SrIP%2B5hufUQGh1q52w2WZj7%2FnQNkSR8cccef0aGLO1m&X-Amz-Signature=0986454822195fcc2bf316619c46ee1063cd9674bfde7e9227cc261b3fb20adf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZVJJJWS%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T201009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6oz7Lf95xYI0Ck6AXWbeCosdXroxiCpvO5mFhQnR6vAiA8w58336sGXvrA%2BrPL427nR38YVfW%2FIR07irvjzGRCwiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUeBv52D%2BkNauYqyUKtwDxZfn9LUrfp0t1QoQLZC%2BhTifxvWDax316BLBGd8XywnOljWu3qNfVX6hzvi2jkTeeTCqN99megXcvMhEaz7%2FPJgBeEowlLOkDD0ebCnNZOdxrARWev%2B4PqjD1y%2Fp73WyoykDsH%2ByewQutJalzvvIbH2AlBzMBDvf3Mfy%2FqUPHssjzrLDZHzm4Iz1E2uvso%2BvGNk5ec8z9z81gA2n7FOS%2Bf8m%2FRuPCUJzks7PIiToQ5DDPyqvVK3%2FIh96xY5eoTpr7%2Fxs%2FxrGIxwRCj4NFt6AQt9Moy8TLKU5NmfcuVaw9chsf4eEPhgB3y3azL2Q5%2FtiZkNxZsJ6CxhQjrDmoQpyatmpJ70UIZzXrR9W4pFSewf0sNaPHh5%2FnmEOd5LgsnD9%2FmlQyi9%2BI8%2FZNR%2Fu%2Bi%2BbbjY3z9IrJzye%2F%2B3QaUi1GdqdaJ9DXlUdGdoJqwHLCrv0gZplumNLRAYlhUL1fA0O3fZ8UO000U2Xhzs%2BoYNXfOiE9sjly7T%2BH%2B1ioXKsrNhF255i0p%2F%2BleyhfTbCRuMhHZEjB%2F9pn1y8%2FArkc6F7M2n83F7v6Q0ja%2FNEwZqWSguQQRMbiVf7lKnCPv5N60J%2BZF8x3Kb2deaCclHtDSnD7lU3QPmVTlW%2Bguw9iDgw9te1wwY6pgFCDOe38KYMy10%2BEsNgFvrWINKU7t8aoxcOO9fJP%2B3UT75Do1MkCSmZt6BdxmPyjREyPhW8jPPlS%2Fa9ZaDZMOHi9LgxV8k4RnG0fAfs5pg8kY%2FgV0qxylDSliye7JsJ03xjRlyjfx3u7CqjSamsguc7NgAg7PYs4A5IcqU%2FjYmmkkeQiwc58SrIP%2B5hufUQGh1q52w2WZj7%2FnQNkSR8cccef0aGLO1m&X-Amz-Signature=ccad0a32652543aa8db59edfc675fb041fe9b50176489d0e44acbe7d97fe68d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZVJJJWS%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T201009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6oz7Lf95xYI0Ck6AXWbeCosdXroxiCpvO5mFhQnR6vAiA8w58336sGXvrA%2BrPL427nR38YVfW%2FIR07irvjzGRCwiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUeBv52D%2BkNauYqyUKtwDxZfn9LUrfp0t1QoQLZC%2BhTifxvWDax316BLBGd8XywnOljWu3qNfVX6hzvi2jkTeeTCqN99megXcvMhEaz7%2FPJgBeEowlLOkDD0ebCnNZOdxrARWev%2B4PqjD1y%2Fp73WyoykDsH%2ByewQutJalzvvIbH2AlBzMBDvf3Mfy%2FqUPHssjzrLDZHzm4Iz1E2uvso%2BvGNk5ec8z9z81gA2n7FOS%2Bf8m%2FRuPCUJzks7PIiToQ5DDPyqvVK3%2FIh96xY5eoTpr7%2Fxs%2FxrGIxwRCj4NFt6AQt9Moy8TLKU5NmfcuVaw9chsf4eEPhgB3y3azL2Q5%2FtiZkNxZsJ6CxhQjrDmoQpyatmpJ70UIZzXrR9W4pFSewf0sNaPHh5%2FnmEOd5LgsnD9%2FmlQyi9%2BI8%2FZNR%2Fu%2Bi%2BbbjY3z9IrJzye%2F%2B3QaUi1GdqdaJ9DXlUdGdoJqwHLCrv0gZplumNLRAYlhUL1fA0O3fZ8UO000U2Xhzs%2BoYNXfOiE9sjly7T%2BH%2B1ioXKsrNhF255i0p%2F%2BleyhfTbCRuMhHZEjB%2F9pn1y8%2FArkc6F7M2n83F7v6Q0ja%2FNEwZqWSguQQRMbiVf7lKnCPv5N60J%2BZF8x3Kb2deaCclHtDSnD7lU3QPmVTlW%2Bguw9iDgw9te1wwY6pgFCDOe38KYMy10%2BEsNgFvrWINKU7t8aoxcOO9fJP%2B3UT75Do1MkCSmZt6BdxmPyjREyPhW8jPPlS%2Fa9ZaDZMOHi9LgxV8k4RnG0fAfs5pg8kY%2FgV0qxylDSliye7JsJ03xjRlyjfx3u7CqjSamsguc7NgAg7PYs4A5IcqU%2FjYmmkkeQiwc58SrIP%2B5hufUQGh1q52w2WZj7%2FnQNkSR8cccef0aGLO1m&X-Amz-Signature=0d05d45a209767d80826ecb71814ad8a837c7ad87d1f7405261294db0b287e04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
