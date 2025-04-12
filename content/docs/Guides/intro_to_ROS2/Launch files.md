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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP76E57H%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T150659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIAUF7HxpICmeBQBkglH3zYxKXbUcSnS5Uf46KN0Y3CLBAiEAwWuoEpA6Pu2dCvQtVZ421IILS06sEWFKW02UOq7NLAIqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9UWkOenBbTKEBekCrcAzH3N6imiipAQC%2FmJgHuFy%2FOMOT%2BPjOfdSXU1PHvrs3ddDtA5tnmD%2BpxPi0HLR06XixGKAU4oLEuOpvw8j0QQz7K8TEBVCMntknl6xejuko%2FRRcRNWcCsjyjRyjQr9k%2FzizZEpWqLpPJocscIbNCvGryI7l%2BLXewRP6XqdisjVYjxwuxM0pdR5kKn6rWc4crDFLHSI8J7xGLiu93rZOxdKARxT1sTG0UlXyxbObj9CJdxAKXXtyaA0aMbecdMcuds0GV2yEXmuBx2%2Bsq6%2B5DmOccNovPeFg%2Fbnjaelvrj%2Fx%2FsiTDXELTOihxYDvo9nIJ%2FQOXUcr3pIWBCHtlGkIiQQS3rtA%2Br0h5Zx%2FGtNG%2FbP1VgWbsbCgQynjWjB4R5qn2X4jAS3cb2oaxF8JkMNT2CyguZgb6RP4k84FcJMT3EphkS1qFseCX%2B1KyP9QyDjLUzpg%2Bp8kyiwdFyrFe8tZHwGBZjeo6tjDfL6g9YUOdMbfTScFI8Pf%2BvLYLQ9rX5VjXSwZYmz%2FqK2uOH4oIxJ%2FVI5PBIFvsxivae6n01aRY6BfRbH87sqWxUeX7oKXChc3C0GTrmSrk7J0TQZlP8rolZiDSYtpekRDxUF5l1HODAs1QpLj17zxbmWM0ULfOMOb76b8GOqUBMCeIC%2BpP1l%2F%2Fgh%2BCSIyr39oAeCQdq4Bo%2BNE6VjmgaDn29EHMjJoPUJPCy8oIQbXB7r2pd%2BvCNDJG2Wrkxg5CSLZIkEua2corVZQD%2FxpJlHxai4tlxd5IVlSMMqzTzXmSirS5J9RDnKh0F%2FJzOVAhghyNLEQKzPbIU8MxOJ2FzayjuFpmDcNYfwOzdNoWh%2FdP%2FEZXFSiUb9gKwiSZnSAh2DfF37rR&X-Amz-Signature=5e62b5af1696d5db4d65951fd7b8ba8346fad801181bd777f4fcd6b606bc1bd6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP76E57H%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T150659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIAUF7HxpICmeBQBkglH3zYxKXbUcSnS5Uf46KN0Y3CLBAiEAwWuoEpA6Pu2dCvQtVZ421IILS06sEWFKW02UOq7NLAIqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9UWkOenBbTKEBekCrcAzH3N6imiipAQC%2FmJgHuFy%2FOMOT%2BPjOfdSXU1PHvrs3ddDtA5tnmD%2BpxPi0HLR06XixGKAU4oLEuOpvw8j0QQz7K8TEBVCMntknl6xejuko%2FRRcRNWcCsjyjRyjQr9k%2FzizZEpWqLpPJocscIbNCvGryI7l%2BLXewRP6XqdisjVYjxwuxM0pdR5kKn6rWc4crDFLHSI8J7xGLiu93rZOxdKARxT1sTG0UlXyxbObj9CJdxAKXXtyaA0aMbecdMcuds0GV2yEXmuBx2%2Bsq6%2B5DmOccNovPeFg%2Fbnjaelvrj%2Fx%2FsiTDXELTOihxYDvo9nIJ%2FQOXUcr3pIWBCHtlGkIiQQS3rtA%2Br0h5Zx%2FGtNG%2FbP1VgWbsbCgQynjWjB4R5qn2X4jAS3cb2oaxF8JkMNT2CyguZgb6RP4k84FcJMT3EphkS1qFseCX%2B1KyP9QyDjLUzpg%2Bp8kyiwdFyrFe8tZHwGBZjeo6tjDfL6g9YUOdMbfTScFI8Pf%2BvLYLQ9rX5VjXSwZYmz%2FqK2uOH4oIxJ%2FVI5PBIFvsxivae6n01aRY6BfRbH87sqWxUeX7oKXChc3C0GTrmSrk7J0TQZlP8rolZiDSYtpekRDxUF5l1HODAs1QpLj17zxbmWM0ULfOMOb76b8GOqUBMCeIC%2BpP1l%2F%2Fgh%2BCSIyr39oAeCQdq4Bo%2BNE6VjmgaDn29EHMjJoPUJPCy8oIQbXB7r2pd%2BvCNDJG2Wrkxg5CSLZIkEua2corVZQD%2FxpJlHxai4tlxd5IVlSMMqzTzXmSirS5J9RDnKh0F%2FJzOVAhghyNLEQKzPbIU8MxOJ2FzayjuFpmDcNYfwOzdNoWh%2FdP%2FEZXFSiUb9gKwiSZnSAh2DfF37rR&X-Amz-Signature=a41355f22cd45c61c3aa5c74dbec50276aff05f1b3709df7ac863f2ff5dfedf3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP76E57H%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T150659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIAUF7HxpICmeBQBkglH3zYxKXbUcSnS5Uf46KN0Y3CLBAiEAwWuoEpA6Pu2dCvQtVZ421IILS06sEWFKW02UOq7NLAIqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9UWkOenBbTKEBekCrcAzH3N6imiipAQC%2FmJgHuFy%2FOMOT%2BPjOfdSXU1PHvrs3ddDtA5tnmD%2BpxPi0HLR06XixGKAU4oLEuOpvw8j0QQz7K8TEBVCMntknl6xejuko%2FRRcRNWcCsjyjRyjQr9k%2FzizZEpWqLpPJocscIbNCvGryI7l%2BLXewRP6XqdisjVYjxwuxM0pdR5kKn6rWc4crDFLHSI8J7xGLiu93rZOxdKARxT1sTG0UlXyxbObj9CJdxAKXXtyaA0aMbecdMcuds0GV2yEXmuBx2%2Bsq6%2B5DmOccNovPeFg%2Fbnjaelvrj%2Fx%2FsiTDXELTOihxYDvo9nIJ%2FQOXUcr3pIWBCHtlGkIiQQS3rtA%2Br0h5Zx%2FGtNG%2FbP1VgWbsbCgQynjWjB4R5qn2X4jAS3cb2oaxF8JkMNT2CyguZgb6RP4k84FcJMT3EphkS1qFseCX%2B1KyP9QyDjLUzpg%2Bp8kyiwdFyrFe8tZHwGBZjeo6tjDfL6g9YUOdMbfTScFI8Pf%2BvLYLQ9rX5VjXSwZYmz%2FqK2uOH4oIxJ%2FVI5PBIFvsxivae6n01aRY6BfRbH87sqWxUeX7oKXChc3C0GTrmSrk7J0TQZlP8rolZiDSYtpekRDxUF5l1HODAs1QpLj17zxbmWM0ULfOMOb76b8GOqUBMCeIC%2BpP1l%2F%2Fgh%2BCSIyr39oAeCQdq4Bo%2BNE6VjmgaDn29EHMjJoPUJPCy8oIQbXB7r2pd%2BvCNDJG2Wrkxg5CSLZIkEua2corVZQD%2FxpJlHxai4tlxd5IVlSMMqzTzXmSirS5J9RDnKh0F%2FJzOVAhghyNLEQKzPbIU8MxOJ2FzayjuFpmDcNYfwOzdNoWh%2FdP%2FEZXFSiUb9gKwiSZnSAh2DfF37rR&X-Amz-Signature=6df9597925c44d55b02b9871821778d53061415dae6185f62de310b5371a317c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
