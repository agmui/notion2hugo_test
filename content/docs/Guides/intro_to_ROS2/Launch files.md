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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZJOQI6J%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T032501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjzdIUaQ8gJvE0gxxsWrHPrzMacQA45SdvCsEz752%2F1AiB4rKQPsUg9LLVnoF1M5qafZMLJv%2BlrxRBD3%2Bs8em%2FOSCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMa3XJE8EsWWrbl%2FeqKtwDLxDwV8NziDslHxsS7lKq4aTiJheLktdEz6s%2BkAQwe15AcqNx8xYcHV7ixPgiXEVtxKyl1Cgh1hTJlyJuCaTBKZiXPUW6ZH34aCBAP3MK53FZ9Tn%2BOCxA%2FeglkkC2WmHB2Fw1QKYYdsnhdOYMykA8JR7keAskudVUt23wWgOVXUYmdBgjFAPvnPZVEj68YQV0lpbteP8cq%2FotcoqA84e90aQQMpX4iKG%2B0vunncsuOKBIa0uiz%2BWH%2F00Wel73LX1JXFx7LA3zZPgsKERjRETKguYTbn837amY%2F0Z3jSWPV2Pd8VwtYKVMYB3yORgeJUeGl54ktmiEADONkAIlicOXq%2FIzlBrQWanZ027TaSsA%2F0079Gb9e32A3D2%2FxjU3R6QUD972ecue3ala9VEjPHuAi1qHnQtW4WM9vz1%2F4%2B63HDIJ%2BzSJoiXQ6%2FDCEhaYOvc%2ByxUcHwrvqN4BcZfT%2F5q0c49GXmCpT9gGxkYV2zwjeeaH8ur3nOdNgKcf7fjvACRSdiWWuRQZpMRQBGAUZwxQ56naHwNFK4%2FxN9rqsOWxn7nfaRU1Hl07rsi01pO5%2FO1%2FfWaxvk0Fx0P74fF8mr2Dj74qPaLbzNtGuER8OmHNxCVL6zxYVvhsKaqYP40w%2FZ7SvwY6pgGWvCh9NvffUJWNBgwcVPSFW26L3uHQxlgCGYQGbaqVeprXVEEKBO4cAUFXYCcWFaSi1NGQYiL2YZHdE7MXRGOLoaYyP3fcam1CpWjxQA7izbOku4aB2zYs9ll9Lfi%2BavKnnUVE4KWq%2FTCYSaKrXr%2BjLnPu9ezRU64fROtoAeNEhc9FvoI2IGG96ns6ODgIfvfOrZWcvfmLt5K7vEq9%2BuB4lFcPcw7D&X-Amz-Signature=31c7e4e197fb7cb09cbf0d7aeed3aff647a16a9ef466baf5bf2ada0ad6af595c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZJOQI6J%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T032501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjzdIUaQ8gJvE0gxxsWrHPrzMacQA45SdvCsEz752%2F1AiB4rKQPsUg9LLVnoF1M5qafZMLJv%2BlrxRBD3%2Bs8em%2FOSCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMa3XJE8EsWWrbl%2FeqKtwDLxDwV8NziDslHxsS7lKq4aTiJheLktdEz6s%2BkAQwe15AcqNx8xYcHV7ixPgiXEVtxKyl1Cgh1hTJlyJuCaTBKZiXPUW6ZH34aCBAP3MK53FZ9Tn%2BOCxA%2FeglkkC2WmHB2Fw1QKYYdsnhdOYMykA8JR7keAskudVUt23wWgOVXUYmdBgjFAPvnPZVEj68YQV0lpbteP8cq%2FotcoqA84e90aQQMpX4iKG%2B0vunncsuOKBIa0uiz%2BWH%2F00Wel73LX1JXFx7LA3zZPgsKERjRETKguYTbn837amY%2F0Z3jSWPV2Pd8VwtYKVMYB3yORgeJUeGl54ktmiEADONkAIlicOXq%2FIzlBrQWanZ027TaSsA%2F0079Gb9e32A3D2%2FxjU3R6QUD972ecue3ala9VEjPHuAi1qHnQtW4WM9vz1%2F4%2B63HDIJ%2BzSJoiXQ6%2FDCEhaYOvc%2ByxUcHwrvqN4BcZfT%2F5q0c49GXmCpT9gGxkYV2zwjeeaH8ur3nOdNgKcf7fjvACRSdiWWuRQZpMRQBGAUZwxQ56naHwNFK4%2FxN9rqsOWxn7nfaRU1Hl07rsi01pO5%2FO1%2FfWaxvk0Fx0P74fF8mr2Dj74qPaLbzNtGuER8OmHNxCVL6zxYVvhsKaqYP40w%2FZ7SvwY6pgGWvCh9NvffUJWNBgwcVPSFW26L3uHQxlgCGYQGbaqVeprXVEEKBO4cAUFXYCcWFaSi1NGQYiL2YZHdE7MXRGOLoaYyP3fcam1CpWjxQA7izbOku4aB2zYs9ll9Lfi%2BavKnnUVE4KWq%2FTCYSaKrXr%2BjLnPu9ezRU64fROtoAeNEhc9FvoI2IGG96ns6ODgIfvfOrZWcvfmLt5K7vEq9%2BuB4lFcPcw7D&X-Amz-Signature=73cafc9f7e7f4921a082c1285a74f4dc6f3cd3d6ca32a0ba219dda51d571556e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZJOQI6J%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T032501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjzdIUaQ8gJvE0gxxsWrHPrzMacQA45SdvCsEz752%2F1AiB4rKQPsUg9LLVnoF1M5qafZMLJv%2BlrxRBD3%2Bs8em%2FOSCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMa3XJE8EsWWrbl%2FeqKtwDLxDwV8NziDslHxsS7lKq4aTiJheLktdEz6s%2BkAQwe15AcqNx8xYcHV7ixPgiXEVtxKyl1Cgh1hTJlyJuCaTBKZiXPUW6ZH34aCBAP3MK53FZ9Tn%2BOCxA%2FeglkkC2WmHB2Fw1QKYYdsnhdOYMykA8JR7keAskudVUt23wWgOVXUYmdBgjFAPvnPZVEj68YQV0lpbteP8cq%2FotcoqA84e90aQQMpX4iKG%2B0vunncsuOKBIa0uiz%2BWH%2F00Wel73LX1JXFx7LA3zZPgsKERjRETKguYTbn837amY%2F0Z3jSWPV2Pd8VwtYKVMYB3yORgeJUeGl54ktmiEADONkAIlicOXq%2FIzlBrQWanZ027TaSsA%2F0079Gb9e32A3D2%2FxjU3R6QUD972ecue3ala9VEjPHuAi1qHnQtW4WM9vz1%2F4%2B63HDIJ%2BzSJoiXQ6%2FDCEhaYOvc%2ByxUcHwrvqN4BcZfT%2F5q0c49GXmCpT9gGxkYV2zwjeeaH8ur3nOdNgKcf7fjvACRSdiWWuRQZpMRQBGAUZwxQ56naHwNFK4%2FxN9rqsOWxn7nfaRU1Hl07rsi01pO5%2FO1%2FfWaxvk0Fx0P74fF8mr2Dj74qPaLbzNtGuER8OmHNxCVL6zxYVvhsKaqYP40w%2FZ7SvwY6pgGWvCh9NvffUJWNBgwcVPSFW26L3uHQxlgCGYQGbaqVeprXVEEKBO4cAUFXYCcWFaSi1NGQYiL2YZHdE7MXRGOLoaYyP3fcam1CpWjxQA7izbOku4aB2zYs9ll9Lfi%2BavKnnUVE4KWq%2FTCYSaKrXr%2BjLnPu9ezRU64fROtoAeNEhc9FvoI2IGG96ns6ODgIfvfOrZWcvfmLt5K7vEq9%2BuB4lFcPcw7D&X-Amz-Signature=6169f1c70f4028eb5610d6413c4687fa02b39f2255cbc8e200bb43b862d3c6b5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
