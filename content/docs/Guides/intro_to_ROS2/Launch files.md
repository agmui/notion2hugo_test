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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNAJVEKH%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T100835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAguLy5aYOziQVQDwVxaEifZ3IQst5JSw5TxDdAVxze5AiEAvHVXZsTbyEPbFwPoYT0HEthFy9CVlaX%2FlopWT6x1cbcqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIo1CKBuNBWYhjelGSrcAx%2FiNB%2B1JYivEBzz25mmFqiE2soCtVNNXBpjg8ZHC%2BkArinjwZoEFJAUlB5vz2FxdGV6qUr9GIXDV%2BhHReifM6pm3ZMLoUuwUjsArrI%2FRtMqIxmZFWZ4VSm0aoekizzHJGlWg05gmk83%2BBkHGnkkH8kLlkYBpoYx0OlX0gvUq82Itv%2BFUD7mFKckljbx3RsO0b%2FHjvDkMUImLlq53C4Zkqj0YZCym0R3MoXVeXIaXSj3XWAO4ZSMRkoiAQvyfFSTXASD%2BOZerBOob2YsS23kuT7FdzLKPcRwBePbk1N%2FJ5knIh2gb9Yk8RcaPugsunFqrk98JS0gMA1g8zWlELZzPf8%2FGQVRKXIxDRMYOOrXrMc6M0zjHQB8tSvixgWg%2F0rcWUIiMtvY63L7tM9H2KVMkCc1v6wnVrqYFTaq6urUWnf9QfC41nbU2zdFscCp7%2Ft95CSFfk7B5ntSvB4%2FkAd4mu%2FfglebkN883y5IPeZkKPIH6e6uV7las2S68YlnYpM4Cikd9VDrR3Ny0BxN5Dsw53CItn2xoUvrF%2F%2F9fvhDivVHrMmhokulc3yNJLoeaar5AmBc%2FEggB9uXF4yYNfbrF1FVPb9LpLYPxBpK3cBicHks7Gzjs2uFm%2BftGX5FMMLi2cIGOqUB0T4M6gJnFzXhyUfVSFEbSz1E4Glf5vAEBL0WZc04AccB5FCRETrdu1DuZ79cNrGIK6F9%2FuDLVshXy4%2BYlq9Tki9TmN4SuatACwa52om0Ha8uPLgvWCa6Je9trrRNSOdP4ZsWbiqaQ1fKIflzabryUPUAc5nYJOhzdejyf9%2F3M1MqxIMsbEpg6XAEoCNUFTngiJIjcZW4ZfyjcvLEJxAv5zExJHhR&X-Amz-Signature=0cd53c0aad23b7ade16db2f2d97460edfaa9b50036fbf6fd0f2682040562438d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNAJVEKH%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T100835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAguLy5aYOziQVQDwVxaEifZ3IQst5JSw5TxDdAVxze5AiEAvHVXZsTbyEPbFwPoYT0HEthFy9CVlaX%2FlopWT6x1cbcqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIo1CKBuNBWYhjelGSrcAx%2FiNB%2B1JYivEBzz25mmFqiE2soCtVNNXBpjg8ZHC%2BkArinjwZoEFJAUlB5vz2FxdGV6qUr9GIXDV%2BhHReifM6pm3ZMLoUuwUjsArrI%2FRtMqIxmZFWZ4VSm0aoekizzHJGlWg05gmk83%2BBkHGnkkH8kLlkYBpoYx0OlX0gvUq82Itv%2BFUD7mFKckljbx3RsO0b%2FHjvDkMUImLlq53C4Zkqj0YZCym0R3MoXVeXIaXSj3XWAO4ZSMRkoiAQvyfFSTXASD%2BOZerBOob2YsS23kuT7FdzLKPcRwBePbk1N%2FJ5knIh2gb9Yk8RcaPugsunFqrk98JS0gMA1g8zWlELZzPf8%2FGQVRKXIxDRMYOOrXrMc6M0zjHQB8tSvixgWg%2F0rcWUIiMtvY63L7tM9H2KVMkCc1v6wnVrqYFTaq6urUWnf9QfC41nbU2zdFscCp7%2Ft95CSFfk7B5ntSvB4%2FkAd4mu%2FfglebkN883y5IPeZkKPIH6e6uV7las2S68YlnYpM4Cikd9VDrR3Ny0BxN5Dsw53CItn2xoUvrF%2F%2F9fvhDivVHrMmhokulc3yNJLoeaar5AmBc%2FEggB9uXF4yYNfbrF1FVPb9LpLYPxBpK3cBicHks7Gzjs2uFm%2BftGX5FMMLi2cIGOqUB0T4M6gJnFzXhyUfVSFEbSz1E4Glf5vAEBL0WZc04AccB5FCRETrdu1DuZ79cNrGIK6F9%2FuDLVshXy4%2BYlq9Tki9TmN4SuatACwa52om0Ha8uPLgvWCa6Je9trrRNSOdP4ZsWbiqaQ1fKIflzabryUPUAc5nYJOhzdejyf9%2F3M1MqxIMsbEpg6XAEoCNUFTngiJIjcZW4ZfyjcvLEJxAv5zExJHhR&X-Amz-Signature=51b224b7b11a95c1182071f2782fdefc7f726795e10f65813c26636d2d48a351&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNAJVEKH%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T100835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAguLy5aYOziQVQDwVxaEifZ3IQst5JSw5TxDdAVxze5AiEAvHVXZsTbyEPbFwPoYT0HEthFy9CVlaX%2FlopWT6x1cbcqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIo1CKBuNBWYhjelGSrcAx%2FiNB%2B1JYivEBzz25mmFqiE2soCtVNNXBpjg8ZHC%2BkArinjwZoEFJAUlB5vz2FxdGV6qUr9GIXDV%2BhHReifM6pm3ZMLoUuwUjsArrI%2FRtMqIxmZFWZ4VSm0aoekizzHJGlWg05gmk83%2BBkHGnkkH8kLlkYBpoYx0OlX0gvUq82Itv%2BFUD7mFKckljbx3RsO0b%2FHjvDkMUImLlq53C4Zkqj0YZCym0R3MoXVeXIaXSj3XWAO4ZSMRkoiAQvyfFSTXASD%2BOZerBOob2YsS23kuT7FdzLKPcRwBePbk1N%2FJ5knIh2gb9Yk8RcaPugsunFqrk98JS0gMA1g8zWlELZzPf8%2FGQVRKXIxDRMYOOrXrMc6M0zjHQB8tSvixgWg%2F0rcWUIiMtvY63L7tM9H2KVMkCc1v6wnVrqYFTaq6urUWnf9QfC41nbU2zdFscCp7%2Ft95CSFfk7B5ntSvB4%2FkAd4mu%2FfglebkN883y5IPeZkKPIH6e6uV7las2S68YlnYpM4Cikd9VDrR3Ny0BxN5Dsw53CItn2xoUvrF%2F%2F9fvhDivVHrMmhokulc3yNJLoeaar5AmBc%2FEggB9uXF4yYNfbrF1FVPb9LpLYPxBpK3cBicHks7Gzjs2uFm%2BftGX5FMMLi2cIGOqUB0T4M6gJnFzXhyUfVSFEbSz1E4Glf5vAEBL0WZc04AccB5FCRETrdu1DuZ79cNrGIK6F9%2FuDLVshXy4%2BYlq9Tki9TmN4SuatACwa52om0Ha8uPLgvWCa6Je9trrRNSOdP4ZsWbiqaQ1fKIflzabryUPUAc5nYJOhzdejyf9%2F3M1MqxIMsbEpg6XAEoCNUFTngiJIjcZW4ZfyjcvLEJxAv5zExJHhR&X-Amz-Signature=a4af414658ec144c26b1fb029a9c7948bf4edb614fe210c42c3c0834b124bd56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
