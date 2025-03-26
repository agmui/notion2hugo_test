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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRQLM7H7%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T032309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBvu%2F4chHieFmaYg4LuZWWFooO5qrG%2FUWkyBMPxHK3IQAiAQP9w4oSL2dENzt4s%2FLjqExQcV%2FhbrGCXsAxX8%2Fe36vir%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIM17hLLfAQqVHD8Dm0KtwD1fAKJBD9fOrdry0%2B0Yhy66LNzFucN6DqSTAhQn%2FiH4D6cAmDMw%2Fjw4eSPJoDxQrVHObkK4J%2Fe0wHXPU6hOGXIt4K1CsYHEoV2JBMLk6GFDnFAH2lp0VMNoCGiskovMmkOq8xsccHGleJwm0%2BrOJ4f3dQusjA%2BwET%2BpwMPSs1PVc2zBa7kgeaa%2F%2Bm4noGz2tSvhT5HCaBFmlYax0Av671rMoxxc1ZILuAKEqtmrYKkERMlKWmnOrKZjvhfN8xoAwM8R2o5byaroc58zGGoGhRVGh0PDEuPYuSBZkHQFcnoJr5NTQnWdIo5X%2Bxwu4IIfLm9V0HILnJv5lPBcUu62S9riiJbylJ0lzEwg2U5aj%2FQPrOEScRxdamrsPNOJrtbuwmKhD4YRy5DViqo3nE89ndW%2BK5DM7iKRMnyiShBcp%2FXVp%2Fs4OYNBV%2F8fTvMbeuWubJbGL5RNQN8foV8FiLJ9Z%2FaKIRk7galVAMq4VA%2B2f3H7g7u2KQO%2BAPhpVEmmNYyLPuqjwbQYt03%2B2eEza30YNIZMOO0dg1FCN%2B3F2w6H8hwptRcG9i10d9ppoIR7TwnCshijmBzhcgZuXrquemlcVpfR9BlB3GCY3k7FtJJ1yqmtS73CVWZdc6hDxG2K4wycuNvwY6pgH5O%2FQpkit6xMG%2BL1NVMxrd4Qt4OFMEKBDEDpRYuFFMHtLXMb08EEZ2iUoLpKhkID1QHa%2FuY9XYyKX6Jq0mEhfy%2BsgCuURxJmt5MejqbcjbIxUD7Dgx9jty%2Bu3HetLEC8iB9h0hFHHEXUFYR0%2FlbTGDVOOzengebufjk%2FwBDgsFW2wQtLacYlB1BXtR7oh8zJIi3yjm6LCwYNbz%2BGXcKt21Igq9%2B%2FE7&X-Amz-Signature=a0a7234ec5a7f99dd809a1f740ed84882e8e36876e690b5b2d32de0a0cebcc27&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRQLM7H7%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T032309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBvu%2F4chHieFmaYg4LuZWWFooO5qrG%2FUWkyBMPxHK3IQAiAQP9w4oSL2dENzt4s%2FLjqExQcV%2FhbrGCXsAxX8%2Fe36vir%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIM17hLLfAQqVHD8Dm0KtwD1fAKJBD9fOrdry0%2B0Yhy66LNzFucN6DqSTAhQn%2FiH4D6cAmDMw%2Fjw4eSPJoDxQrVHObkK4J%2Fe0wHXPU6hOGXIt4K1CsYHEoV2JBMLk6GFDnFAH2lp0VMNoCGiskovMmkOq8xsccHGleJwm0%2BrOJ4f3dQusjA%2BwET%2BpwMPSs1PVc2zBa7kgeaa%2F%2Bm4noGz2tSvhT5HCaBFmlYax0Av671rMoxxc1ZILuAKEqtmrYKkERMlKWmnOrKZjvhfN8xoAwM8R2o5byaroc58zGGoGhRVGh0PDEuPYuSBZkHQFcnoJr5NTQnWdIo5X%2Bxwu4IIfLm9V0HILnJv5lPBcUu62S9riiJbylJ0lzEwg2U5aj%2FQPrOEScRxdamrsPNOJrtbuwmKhD4YRy5DViqo3nE89ndW%2BK5DM7iKRMnyiShBcp%2FXVp%2Fs4OYNBV%2F8fTvMbeuWubJbGL5RNQN8foV8FiLJ9Z%2FaKIRk7galVAMq4VA%2B2f3H7g7u2KQO%2BAPhpVEmmNYyLPuqjwbQYt03%2B2eEza30YNIZMOO0dg1FCN%2B3F2w6H8hwptRcG9i10d9ppoIR7TwnCshijmBzhcgZuXrquemlcVpfR9BlB3GCY3k7FtJJ1yqmtS73CVWZdc6hDxG2K4wycuNvwY6pgH5O%2FQpkit6xMG%2BL1NVMxrd4Qt4OFMEKBDEDpRYuFFMHtLXMb08EEZ2iUoLpKhkID1QHa%2FuY9XYyKX6Jq0mEhfy%2BsgCuURxJmt5MejqbcjbIxUD7Dgx9jty%2Bu3HetLEC8iB9h0hFHHEXUFYR0%2FlbTGDVOOzengebufjk%2FwBDgsFW2wQtLacYlB1BXtR7oh8zJIi3yjm6LCwYNbz%2BGXcKt21Igq9%2B%2FE7&X-Amz-Signature=5386dd2357cbabd0cd2cb1b274697e64cc89999cd319463c39556ff9fa7a7a2b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRQLM7H7%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T032309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBvu%2F4chHieFmaYg4LuZWWFooO5qrG%2FUWkyBMPxHK3IQAiAQP9w4oSL2dENzt4s%2FLjqExQcV%2FhbrGCXsAxX8%2Fe36vir%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIM17hLLfAQqVHD8Dm0KtwD1fAKJBD9fOrdry0%2B0Yhy66LNzFucN6DqSTAhQn%2FiH4D6cAmDMw%2Fjw4eSPJoDxQrVHObkK4J%2Fe0wHXPU6hOGXIt4K1CsYHEoV2JBMLk6GFDnFAH2lp0VMNoCGiskovMmkOq8xsccHGleJwm0%2BrOJ4f3dQusjA%2BwET%2BpwMPSs1PVc2zBa7kgeaa%2F%2Bm4noGz2tSvhT5HCaBFmlYax0Av671rMoxxc1ZILuAKEqtmrYKkERMlKWmnOrKZjvhfN8xoAwM8R2o5byaroc58zGGoGhRVGh0PDEuPYuSBZkHQFcnoJr5NTQnWdIo5X%2Bxwu4IIfLm9V0HILnJv5lPBcUu62S9riiJbylJ0lzEwg2U5aj%2FQPrOEScRxdamrsPNOJrtbuwmKhD4YRy5DViqo3nE89ndW%2BK5DM7iKRMnyiShBcp%2FXVp%2Fs4OYNBV%2F8fTvMbeuWubJbGL5RNQN8foV8FiLJ9Z%2FaKIRk7galVAMq4VA%2B2f3H7g7u2KQO%2BAPhpVEmmNYyLPuqjwbQYt03%2B2eEza30YNIZMOO0dg1FCN%2B3F2w6H8hwptRcG9i10d9ppoIR7TwnCshijmBzhcgZuXrquemlcVpfR9BlB3GCY3k7FtJJ1yqmtS73CVWZdc6hDxG2K4wycuNvwY6pgH5O%2FQpkit6xMG%2BL1NVMxrd4Qt4OFMEKBDEDpRYuFFMHtLXMb08EEZ2iUoLpKhkID1QHa%2FuY9XYyKX6Jq0mEhfy%2BsgCuURxJmt5MejqbcjbIxUD7Dgx9jty%2Bu3HetLEC8iB9h0hFHHEXUFYR0%2FlbTGDVOOzengebufjk%2FwBDgsFW2wQtLacYlB1BXtR7oh8zJIi3yjm6LCwYNbz%2BGXcKt21Igq9%2B%2FE7&X-Amz-Signature=e8250b23d59d2ee8fa202af8202275d68fb8961c86df33bb2a9ff0561815bf2b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
