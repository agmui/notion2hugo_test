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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QONEA6U2%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T004203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCID0psatqlm8u00X0hRB1s5ub7vYn%2Fumh21061UFK8cD%2BAiEA6P8NsHL8%2FfxIugH2v9nHIa2IVG4T4DJ6R4IwaJK%2BPBYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLWnfsuvWHh81d3drircAxmpqSE5YMfr6KYkhKxGzmMB5r1yYYOoMCKHtXQAxDKRBvfgBctf8xtD6JjpEpFF1W0GpzR8E6%2Ferqwg4OHqKGJxLJOgF5BjSE9KkuCQ4uMxrwxFkRV6w3dSax9Iz3jeRheG%2FzbxLXNWuRWKrJLOwjBy5M2H8TNoTpDjktfa9w3nwayls7nWPnaWddRjU4%2BiQnnsD8N6jlLx0vNY%2FzEz1ZvIW9wtR37p5mE%2BVyw8f5X2IpmfKnlXqEvRJvXyDsqp7Cp0WrVr6zjX8hjRALt%2FuX%2FNhyoWiOOCbIewnuD8EIvarmJQKWZR2udSeJEeVA5BaMqzzKu0BkvwBuvOViPLXpdwYZ50A9scVqdr5Rw0GAZN%2BOre1bKHLdpDs%2FEhpEjRsxi98301iDypNS%2B9FeA8skLF%2FevoyjsGQ%2FmLViv8%2BYnEN1hbBiBQTsrzHyDC6YuAADVYli1mTL2lKnsjR9f21D4lgZ%2FffRxp%2Fibor133rpzD3R7ZaRiZ9YcmNHkuPs1jlVTpiYrGOEojYswvzonSvQSbMs5ENlCWC2Mb9Q5cfOFGUiPtls9eu0uVo51Ph1slwNaTzVeXnHEdOeA9Te5Iu1ssJIA8SNefH67Lc3ssXI1%2FVw%2F6pSWGwPd8K2ATMLC2%2FL4GOqUBbLZYV3RVtdD%2FBOWUmar0E4V4hkY1ESCunS3aGLHbYDyDVTkHFryvkl8ZfXm43wG05LiGHfoHZaAUDWfRTsyQrKuurO6lET%2F7j%2BNYI6Y9e%2BbDXnmfStB%2FsA%2FMn8Ie%2BIbAF9LCoBqhIKaCPl03MZzrusmpNWi7CFSPkfSvNiLAVkTNKsCDu%2FcsjKFuzCkWZIhR0b2d9gRuc7G4gokiNQa3vPNay1QV&X-Amz-Signature=27efe66ad73621c19a475a649902d787add0ad30ed7dcbf56b42bc5729077e6a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QONEA6U2%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T004203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCID0psatqlm8u00X0hRB1s5ub7vYn%2Fumh21061UFK8cD%2BAiEA6P8NsHL8%2FfxIugH2v9nHIa2IVG4T4DJ6R4IwaJK%2BPBYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLWnfsuvWHh81d3drircAxmpqSE5YMfr6KYkhKxGzmMB5r1yYYOoMCKHtXQAxDKRBvfgBctf8xtD6JjpEpFF1W0GpzR8E6%2Ferqwg4OHqKGJxLJOgF5BjSE9KkuCQ4uMxrwxFkRV6w3dSax9Iz3jeRheG%2FzbxLXNWuRWKrJLOwjBy5M2H8TNoTpDjktfa9w3nwayls7nWPnaWddRjU4%2BiQnnsD8N6jlLx0vNY%2FzEz1ZvIW9wtR37p5mE%2BVyw8f5X2IpmfKnlXqEvRJvXyDsqp7Cp0WrVr6zjX8hjRALt%2FuX%2FNhyoWiOOCbIewnuD8EIvarmJQKWZR2udSeJEeVA5BaMqzzKu0BkvwBuvOViPLXpdwYZ50A9scVqdr5Rw0GAZN%2BOre1bKHLdpDs%2FEhpEjRsxi98301iDypNS%2B9FeA8skLF%2FevoyjsGQ%2FmLViv8%2BYnEN1hbBiBQTsrzHyDC6YuAADVYli1mTL2lKnsjR9f21D4lgZ%2FffRxp%2Fibor133rpzD3R7ZaRiZ9YcmNHkuPs1jlVTpiYrGOEojYswvzonSvQSbMs5ENlCWC2Mb9Q5cfOFGUiPtls9eu0uVo51Ph1slwNaTzVeXnHEdOeA9Te5Iu1ssJIA8SNefH67Lc3ssXI1%2FVw%2F6pSWGwPd8K2ATMLC2%2FL4GOqUBbLZYV3RVtdD%2FBOWUmar0E4V4hkY1ESCunS3aGLHbYDyDVTkHFryvkl8ZfXm43wG05LiGHfoHZaAUDWfRTsyQrKuurO6lET%2F7j%2BNYI6Y9e%2BbDXnmfStB%2FsA%2FMn8Ie%2BIbAF9LCoBqhIKaCPl03MZzrusmpNWi7CFSPkfSvNiLAVkTNKsCDu%2FcsjKFuzCkWZIhR0b2d9gRuc7G4gokiNQa3vPNay1QV&X-Amz-Signature=c9c12b685d3abb2b5b866098ed8ac6414ba7f9b8e6c62af2c6aeb9df155a980e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QONEA6U2%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T004203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCID0psatqlm8u00X0hRB1s5ub7vYn%2Fumh21061UFK8cD%2BAiEA6P8NsHL8%2FfxIugH2v9nHIa2IVG4T4DJ6R4IwaJK%2BPBYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLWnfsuvWHh81d3drircAxmpqSE5YMfr6KYkhKxGzmMB5r1yYYOoMCKHtXQAxDKRBvfgBctf8xtD6JjpEpFF1W0GpzR8E6%2Ferqwg4OHqKGJxLJOgF5BjSE9KkuCQ4uMxrwxFkRV6w3dSax9Iz3jeRheG%2FzbxLXNWuRWKrJLOwjBy5M2H8TNoTpDjktfa9w3nwayls7nWPnaWddRjU4%2BiQnnsD8N6jlLx0vNY%2FzEz1ZvIW9wtR37p5mE%2BVyw8f5X2IpmfKnlXqEvRJvXyDsqp7Cp0WrVr6zjX8hjRALt%2FuX%2FNhyoWiOOCbIewnuD8EIvarmJQKWZR2udSeJEeVA5BaMqzzKu0BkvwBuvOViPLXpdwYZ50A9scVqdr5Rw0GAZN%2BOre1bKHLdpDs%2FEhpEjRsxi98301iDypNS%2B9FeA8skLF%2FevoyjsGQ%2FmLViv8%2BYnEN1hbBiBQTsrzHyDC6YuAADVYli1mTL2lKnsjR9f21D4lgZ%2FffRxp%2Fibor133rpzD3R7ZaRiZ9YcmNHkuPs1jlVTpiYrGOEojYswvzonSvQSbMs5ENlCWC2Mb9Q5cfOFGUiPtls9eu0uVo51Ph1slwNaTzVeXnHEdOeA9Te5Iu1ssJIA8SNefH67Lc3ssXI1%2FVw%2F6pSWGwPd8K2ATMLC2%2FL4GOqUBbLZYV3RVtdD%2FBOWUmar0E4V4hkY1ESCunS3aGLHbYDyDVTkHFryvkl8ZfXm43wG05LiGHfoHZaAUDWfRTsyQrKuurO6lET%2F7j%2BNYI6Y9e%2BbDXnmfStB%2FsA%2FMn8Ie%2BIbAF9LCoBqhIKaCPl03MZzrusmpNWi7CFSPkfSvNiLAVkTNKsCDu%2FcsjKFuzCkWZIhR0b2d9gRuc7G4gokiNQa3vPNay1QV&X-Amz-Signature=58b76184579ab1e2307e73d89da16e2f6c3d0015603a13ec1e935f14444a76fa&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
