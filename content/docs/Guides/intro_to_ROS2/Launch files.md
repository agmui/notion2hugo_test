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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLTHPQPP%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYqbLGkc7O%2FJ5I60z63N5k8em4PeSeX1Yfy31CQFeWYAIgZW%2Fc3VPuaqxjUpB8uIr4gvl78zFhSJWEVzIEbMiLnEgq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDEN0OcJtkmZZLILVlSrcA8cCE3ouRsHFS%2FXHLs0wNXpUIOBe%2FhKczyex9SPaiXQgwR17NXgKREDb%2BtPsRPD9XwOC%2BTQzDbPDCIx9ZxRU89j8%2Bbc1pZzDs9Ge1PqI44ZYrIZer6vUdBHbC7f6NSle2ZIdixN4HQ039yKJUdmYwJf43MTa84kQRbB%2BAMHEtKgydoL1cf%2FqBBcSNyFlaQaiAiowHkiNhyJWfhRYlA0zNkooEdYtGkguBVGp9jo5dLmzIVVjxinndbMfWcxd7XqG1RU%2BwmDG0LvIpj4cWNpR1XlCDWvfY%2FXcHiQIu8ubq1L6TrxyvH%2F9x4UPIsv7pKZzs3GVCctxCc9jM3exOQ4%2BJ8AmfxlybqQ%2Bjm%2FyFub9aHQbTfkJdZeO6x0rFVndrHPclzMkklJPQDRusKezLXmKrTS78Ww3PpaI%2B0F%2BelCm722hxFlo%2BWENmm0oDJY53n3hI2%2FT9wGUf7oO4SIvB8oOmBADRqSOyVraN05678YiclDwTNrvwRTEvz4cOKAMGKBroL5hdiX8amwIb%2BYVDEJQD5f7ST81ISHSJQ82Mpf9YLELGL9Kod5NHKSwnwN%2B1B%2Fry44ooqNsgbq15%2BT9%2BGNRljb4LdOPPtxXlZotF3BNBeoUO9ZxiIPNpB3Z6NQ%2FMKe7vsAGOqUBB%2BHHNVRrZSHnamQJQPGC1hcV1HQ%2F6laz4b%2FkwuQMw7yx1SRc%2BpGAP%2BWmtY7sHMzFRwWk04Zjot%2FuoqN2Iq1Y1YC%2FOEdPt59fLPQ7ob6HxOQKfFbh9Sn6hufsMbrp78BnlqJYhs54v63gShHfXoieY0Owtp9OxIighgZabbTfg3bMJVD2M%2FyoHKZSCL%2BuaENCdgIVntsyuNDQwUjk7C%2BuPc2YZshV&X-Amz-Signature=9ff3de51fe6f70bb42127f092da5c3fc4cad8c309560c461f8a54457f6267084&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLTHPQPP%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYqbLGkc7O%2FJ5I60z63N5k8em4PeSeX1Yfy31CQFeWYAIgZW%2Fc3VPuaqxjUpB8uIr4gvl78zFhSJWEVzIEbMiLnEgq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDEN0OcJtkmZZLILVlSrcA8cCE3ouRsHFS%2FXHLs0wNXpUIOBe%2FhKczyex9SPaiXQgwR17NXgKREDb%2BtPsRPD9XwOC%2BTQzDbPDCIx9ZxRU89j8%2Bbc1pZzDs9Ge1PqI44ZYrIZer6vUdBHbC7f6NSle2ZIdixN4HQ039yKJUdmYwJf43MTa84kQRbB%2BAMHEtKgydoL1cf%2FqBBcSNyFlaQaiAiowHkiNhyJWfhRYlA0zNkooEdYtGkguBVGp9jo5dLmzIVVjxinndbMfWcxd7XqG1RU%2BwmDG0LvIpj4cWNpR1XlCDWvfY%2FXcHiQIu8ubq1L6TrxyvH%2F9x4UPIsv7pKZzs3GVCctxCc9jM3exOQ4%2BJ8AmfxlybqQ%2Bjm%2FyFub9aHQbTfkJdZeO6x0rFVndrHPclzMkklJPQDRusKezLXmKrTS78Ww3PpaI%2B0F%2BelCm722hxFlo%2BWENmm0oDJY53n3hI2%2FT9wGUf7oO4SIvB8oOmBADRqSOyVraN05678YiclDwTNrvwRTEvz4cOKAMGKBroL5hdiX8amwIb%2BYVDEJQD5f7ST81ISHSJQ82Mpf9YLELGL9Kod5NHKSwnwN%2B1B%2Fry44ooqNsgbq15%2BT9%2BGNRljb4LdOPPtxXlZotF3BNBeoUO9ZxiIPNpB3Z6NQ%2FMKe7vsAGOqUBB%2BHHNVRrZSHnamQJQPGC1hcV1HQ%2F6laz4b%2FkwuQMw7yx1SRc%2BpGAP%2BWmtY7sHMzFRwWk04Zjot%2FuoqN2Iq1Y1YC%2FOEdPt59fLPQ7ob6HxOQKfFbh9Sn6hufsMbrp78BnlqJYhs54v63gShHfXoieY0Owtp9OxIighgZabbTfg3bMJVD2M%2FyoHKZSCL%2BuaENCdgIVntsyuNDQwUjk7C%2BuPc2YZshV&X-Amz-Signature=79ac081a7aab22b1c1c4e1ab5b53f944bd54e5642d37ed719e2d4031248a29fe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLTHPQPP%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYqbLGkc7O%2FJ5I60z63N5k8em4PeSeX1Yfy31CQFeWYAIgZW%2Fc3VPuaqxjUpB8uIr4gvl78zFhSJWEVzIEbMiLnEgq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDEN0OcJtkmZZLILVlSrcA8cCE3ouRsHFS%2FXHLs0wNXpUIOBe%2FhKczyex9SPaiXQgwR17NXgKREDb%2BtPsRPD9XwOC%2BTQzDbPDCIx9ZxRU89j8%2Bbc1pZzDs9Ge1PqI44ZYrIZer6vUdBHbC7f6NSle2ZIdixN4HQ039yKJUdmYwJf43MTa84kQRbB%2BAMHEtKgydoL1cf%2FqBBcSNyFlaQaiAiowHkiNhyJWfhRYlA0zNkooEdYtGkguBVGp9jo5dLmzIVVjxinndbMfWcxd7XqG1RU%2BwmDG0LvIpj4cWNpR1XlCDWvfY%2FXcHiQIu8ubq1L6TrxyvH%2F9x4UPIsv7pKZzs3GVCctxCc9jM3exOQ4%2BJ8AmfxlybqQ%2Bjm%2FyFub9aHQbTfkJdZeO6x0rFVndrHPclzMkklJPQDRusKezLXmKrTS78Ww3PpaI%2B0F%2BelCm722hxFlo%2BWENmm0oDJY53n3hI2%2FT9wGUf7oO4SIvB8oOmBADRqSOyVraN05678YiclDwTNrvwRTEvz4cOKAMGKBroL5hdiX8amwIb%2BYVDEJQD5f7ST81ISHSJQ82Mpf9YLELGL9Kod5NHKSwnwN%2B1B%2Fry44ooqNsgbq15%2BT9%2BGNRljb4LdOPPtxXlZotF3BNBeoUO9ZxiIPNpB3Z6NQ%2FMKe7vsAGOqUBB%2BHHNVRrZSHnamQJQPGC1hcV1HQ%2F6laz4b%2FkwuQMw7yx1SRc%2BpGAP%2BWmtY7sHMzFRwWk04Zjot%2FuoqN2Iq1Y1YC%2FOEdPt59fLPQ7ob6HxOQKfFbh9Sn6hufsMbrp78BnlqJYhs54v63gShHfXoieY0Owtp9OxIighgZabbTfg3bMJVD2M%2FyoHKZSCL%2BuaENCdgIVntsyuNDQwUjk7C%2BuPc2YZshV&X-Amz-Signature=231f183f2bfa59b8072acfc07ed33f2eeb8480a569124ed7e80e514fd0d09caf&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
