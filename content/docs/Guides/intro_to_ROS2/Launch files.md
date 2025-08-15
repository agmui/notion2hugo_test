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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL5P7SVZ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIA5qEeLzptuhZj8WDMxpPFW%2B1sUDvpZ5WUZnD7b5FIPRAiBtF3%2FWHeD1Y0QMVUyhXyM3tGEKVXC9muzfsC3S11bUSyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM%2Fya0ZCRxR6PbgZFKKtwDBGcd6LAyhuydzYxHXbK45MivGfTWnC1yqsP%2FqYfK6CqQrLbMzypuzTm3ZW6%2BXtpyXyiFs%2FsiNzFU7hRcLk8aLChE%2BMxILocMKP3A8lPBh0P5HQ%2BWDqQi8fvUmOZFcnwatiPtyTqpU5NZX%2FfcIIKtxf74TDmD1lTcop2CB8MBcub4rga3kouexwRzb%2BGd0GKo1ubKQbGURGdNf7OnhhTgv%2FZWxi3cBNhH%2FZu2nXYTgH8g1mZSwYt%2FwOLD938%2FIYpTGuYtokS%2Ftv8r%2FOzn6SaK9BepkMiThVp7Hij1v5RsAZCaBizshgWlysR06lRG4Ij663WVrfFbfFlTnBw3eIKRmwLnSZj1Nt2dDXB5z%2B3Vku1bzNylr3Fa4%2B3FjduoifWV32P%2FO3pYZCRgnWx4Hp9rQlZMbuXB0apiWFQ6Prv8pvmA4uD9V3GnwXgr1yrXbjMr%2BPT4C%2Bwv6T6OK1o0kIL2XQ3ncXmbpb28lSm4S9F7XSLz7j2S0mN6uSfhd4b6dks8unjmISogjmv9OYGwLuCSrV8bog%2BtC2Sx5CAYx1y2GPIF1yfLiF6muIF6HLrLut8oKOgyUOq%2B6b6tDdA0kWYF0AJG%2FwSCAj3OnpIuUlz5u2v0XSm1yor3l3Lucxgw5rf8xAY6pgFlsYmSsJA%2FztaTO8212jOppDhyEJhc7KJ9irgzq57LUpQsumqluMVgCL1eZika%2FK0jWO01HEBhjXRn0owuj9Yh9AmEo3p8x%2BHlKZrGA%2FGqf5ECtk51%2B9ScVc47Qkww2%2Bqbs%2BSSWXxZiTKV7BEP0D%2B8s9bsFEyKwrGvLbrvs%2FLHtSvEV14qOXl4Gz0yLkwH5xb%2FS2B9OoyNeFvH%2B6WKukvvXZHk2%2Bfx&X-Amz-Signature=8f76a6d08f9c016c3a125cdfd1df73a3b54978dc9de34a171670803689133a38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL5P7SVZ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIA5qEeLzptuhZj8WDMxpPFW%2B1sUDvpZ5WUZnD7b5FIPRAiBtF3%2FWHeD1Y0QMVUyhXyM3tGEKVXC9muzfsC3S11bUSyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM%2Fya0ZCRxR6PbgZFKKtwDBGcd6LAyhuydzYxHXbK45MivGfTWnC1yqsP%2FqYfK6CqQrLbMzypuzTm3ZW6%2BXtpyXyiFs%2FsiNzFU7hRcLk8aLChE%2BMxILocMKP3A8lPBh0P5HQ%2BWDqQi8fvUmOZFcnwatiPtyTqpU5NZX%2FfcIIKtxf74TDmD1lTcop2CB8MBcub4rga3kouexwRzb%2BGd0GKo1ubKQbGURGdNf7OnhhTgv%2FZWxi3cBNhH%2FZu2nXYTgH8g1mZSwYt%2FwOLD938%2FIYpTGuYtokS%2Ftv8r%2FOzn6SaK9BepkMiThVp7Hij1v5RsAZCaBizshgWlysR06lRG4Ij663WVrfFbfFlTnBw3eIKRmwLnSZj1Nt2dDXB5z%2B3Vku1bzNylr3Fa4%2B3FjduoifWV32P%2FO3pYZCRgnWx4Hp9rQlZMbuXB0apiWFQ6Prv8pvmA4uD9V3GnwXgr1yrXbjMr%2BPT4C%2Bwv6T6OK1o0kIL2XQ3ncXmbpb28lSm4S9F7XSLz7j2S0mN6uSfhd4b6dks8unjmISogjmv9OYGwLuCSrV8bog%2BtC2Sx5CAYx1y2GPIF1yfLiF6muIF6HLrLut8oKOgyUOq%2B6b6tDdA0kWYF0AJG%2FwSCAj3OnpIuUlz5u2v0XSm1yor3l3Lucxgw5rf8xAY6pgFlsYmSsJA%2FztaTO8212jOppDhyEJhc7KJ9irgzq57LUpQsumqluMVgCL1eZika%2FK0jWO01HEBhjXRn0owuj9Yh9AmEo3p8x%2BHlKZrGA%2FGqf5ECtk51%2B9ScVc47Qkww2%2Bqbs%2BSSWXxZiTKV7BEP0D%2B8s9bsFEyKwrGvLbrvs%2FLHtSvEV14qOXl4Gz0yLkwH5xb%2FS2B9OoyNeFvH%2B6WKukvvXZHk2%2Bfx&X-Amz-Signature=c57f51b57e87cc662252195bbe7c62316a2a00a22e38c196c09e7ec1d6d86e57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL5P7SVZ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIA5qEeLzptuhZj8WDMxpPFW%2B1sUDvpZ5WUZnD7b5FIPRAiBtF3%2FWHeD1Y0QMVUyhXyM3tGEKVXC9muzfsC3S11bUSyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM%2Fya0ZCRxR6PbgZFKKtwDBGcd6LAyhuydzYxHXbK45MivGfTWnC1yqsP%2FqYfK6CqQrLbMzypuzTm3ZW6%2BXtpyXyiFs%2FsiNzFU7hRcLk8aLChE%2BMxILocMKP3A8lPBh0P5HQ%2BWDqQi8fvUmOZFcnwatiPtyTqpU5NZX%2FfcIIKtxf74TDmD1lTcop2CB8MBcub4rga3kouexwRzb%2BGd0GKo1ubKQbGURGdNf7OnhhTgv%2FZWxi3cBNhH%2FZu2nXYTgH8g1mZSwYt%2FwOLD938%2FIYpTGuYtokS%2Ftv8r%2FOzn6SaK9BepkMiThVp7Hij1v5RsAZCaBizshgWlysR06lRG4Ij663WVrfFbfFlTnBw3eIKRmwLnSZj1Nt2dDXB5z%2B3Vku1bzNylr3Fa4%2B3FjduoifWV32P%2FO3pYZCRgnWx4Hp9rQlZMbuXB0apiWFQ6Prv8pvmA4uD9V3GnwXgr1yrXbjMr%2BPT4C%2Bwv6T6OK1o0kIL2XQ3ncXmbpb28lSm4S9F7XSLz7j2S0mN6uSfhd4b6dks8unjmISogjmv9OYGwLuCSrV8bog%2BtC2Sx5CAYx1y2GPIF1yfLiF6muIF6HLrLut8oKOgyUOq%2B6b6tDdA0kWYF0AJG%2FwSCAj3OnpIuUlz5u2v0XSm1yor3l3Lucxgw5rf8xAY6pgFlsYmSsJA%2FztaTO8212jOppDhyEJhc7KJ9irgzq57LUpQsumqluMVgCL1eZika%2FK0jWO01HEBhjXRn0owuj9Yh9AmEo3p8x%2BHlKZrGA%2FGqf5ECtk51%2B9ScVc47Qkww2%2Bqbs%2BSSWXxZiTKV7BEP0D%2B8s9bsFEyKwrGvLbrvs%2FLHtSvEV14qOXl4Gz0yLkwH5xb%2FS2B9OoyNeFvH%2B6WKukvvXZHk2%2Bfx&X-Amz-Signature=2cdbdf7ae60f3998ce812e32202b82f61fd529df29547648725960eb24d0a7b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
