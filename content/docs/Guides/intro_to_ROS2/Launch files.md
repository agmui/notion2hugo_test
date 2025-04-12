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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3TI466B%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T220537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIBYlY2xcbX6AqmjizlgqCYNcR4s2FiciYIb1d2afD6doAiEAv4XmX5Ap4UsAtenGgVVDcfnV0dun%2BlhcHVMoptXrstwqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQMgxSVC42rA25soircA7EJul1nEtxFLdNkhRnpXuRi1MSsjBYtCBKMGRUHuhF49BBi5QkHrwD9NcCAvIx0fwKiGNWeUQgUmPffu%2FJO9zqoJ9ejwM5K6fuJtXfNY2hXI2snVX%2B8qpdZbYam9ylBoKYDCI3j9Rj%2B9XtPlgSnnlWx1kARLk%2BIFTe%2Bnr8R5vta3330NcJ1HbWh%2FXW6lJuUSXCbk6URxPprk1Lwo1EINjBaGWD%2BeKsgVh%2FILx1OaTTEAwWTJDWA5iadqiHW7Kmev9bSFIiXrStAUkRkv0eM%2BMTdCtgZ%2FFhW8cqydlV7VKqvNhj4c3jF4x58CjtYl3iYhB%2BgTSStW86n0e4oz2EprVXEZkazooQ%2FHvia0CSbEyuaELSPtFFKKyJ1vLBBL%2FcSAsDQFykGjCPyxrtx8SqmNVEgaYCzs6Kv9PVLZY%2FZxg9enwgeBH9kciJl8IBofEBNAEhjc%2F3%2FfVUJygscaDqgvirnpbjftMWWDSHaeLAE4GCSnw31zcfUJSHSUslE6jr3h6uZdZ9SiiztpQ%2FCySeeDBhKwRLTZwC31E6W5VYNFG9ivdbs8gb2K1MTi8GHPO8YAK9Lql6Ck5yL4ZVz%2F9tP%2FZ7EuzP5cWVYtX7kA2FoRawHHMo3xmCl0DwUTsx0MK6x678GOqUBqwz9XwdPHDT2XVz71f0VTJIVjUWW5vov%2FzC1U4pR1x2stPBtiRHQO5pMXuHl2Z16NCM%2B40JY3WvDrnw3pMf9ago4PD17BIqfmqlMjH1Pl0gRVd5yRBk39XQyVgGAMkfTmS5OyZ77XhQy5t8o5DOH7EB62ulOJ6eELvuRa9GhVgHFXqK6%2FbNaP7tk69c%2FGoGx%2BsNO306gTmuYuOjlC70QSd1VEBRK&X-Amz-Signature=d0a8b38a570577165102beb17ff223c3f990fe2299f45390a997aae9d361733b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3TI466B%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T220537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIBYlY2xcbX6AqmjizlgqCYNcR4s2FiciYIb1d2afD6doAiEAv4XmX5Ap4UsAtenGgVVDcfnV0dun%2BlhcHVMoptXrstwqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQMgxSVC42rA25soircA7EJul1nEtxFLdNkhRnpXuRi1MSsjBYtCBKMGRUHuhF49BBi5QkHrwD9NcCAvIx0fwKiGNWeUQgUmPffu%2FJO9zqoJ9ejwM5K6fuJtXfNY2hXI2snVX%2B8qpdZbYam9ylBoKYDCI3j9Rj%2B9XtPlgSnnlWx1kARLk%2BIFTe%2Bnr8R5vta3330NcJ1HbWh%2FXW6lJuUSXCbk6URxPprk1Lwo1EINjBaGWD%2BeKsgVh%2FILx1OaTTEAwWTJDWA5iadqiHW7Kmev9bSFIiXrStAUkRkv0eM%2BMTdCtgZ%2FFhW8cqydlV7VKqvNhj4c3jF4x58CjtYl3iYhB%2BgTSStW86n0e4oz2EprVXEZkazooQ%2FHvia0CSbEyuaELSPtFFKKyJ1vLBBL%2FcSAsDQFykGjCPyxrtx8SqmNVEgaYCzs6Kv9PVLZY%2FZxg9enwgeBH9kciJl8IBofEBNAEhjc%2F3%2FfVUJygscaDqgvirnpbjftMWWDSHaeLAE4GCSnw31zcfUJSHSUslE6jr3h6uZdZ9SiiztpQ%2FCySeeDBhKwRLTZwC31E6W5VYNFG9ivdbs8gb2K1MTi8GHPO8YAK9Lql6Ck5yL4ZVz%2F9tP%2FZ7EuzP5cWVYtX7kA2FoRawHHMo3xmCl0DwUTsx0MK6x678GOqUBqwz9XwdPHDT2XVz71f0VTJIVjUWW5vov%2FzC1U4pR1x2stPBtiRHQO5pMXuHl2Z16NCM%2B40JY3WvDrnw3pMf9ago4PD17BIqfmqlMjH1Pl0gRVd5yRBk39XQyVgGAMkfTmS5OyZ77XhQy5t8o5DOH7EB62ulOJ6eELvuRa9GhVgHFXqK6%2FbNaP7tk69c%2FGoGx%2BsNO306gTmuYuOjlC70QSd1VEBRK&X-Amz-Signature=ace60456e83af8ab8352d3fcf19618d434914dd336fd7cd8afa1fb2874a24db0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3TI466B%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T220537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIBYlY2xcbX6AqmjizlgqCYNcR4s2FiciYIb1d2afD6doAiEAv4XmX5Ap4UsAtenGgVVDcfnV0dun%2BlhcHVMoptXrstwqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQMgxSVC42rA25soircA7EJul1nEtxFLdNkhRnpXuRi1MSsjBYtCBKMGRUHuhF49BBi5QkHrwD9NcCAvIx0fwKiGNWeUQgUmPffu%2FJO9zqoJ9ejwM5K6fuJtXfNY2hXI2snVX%2B8qpdZbYam9ylBoKYDCI3j9Rj%2B9XtPlgSnnlWx1kARLk%2BIFTe%2Bnr8R5vta3330NcJ1HbWh%2FXW6lJuUSXCbk6URxPprk1Lwo1EINjBaGWD%2BeKsgVh%2FILx1OaTTEAwWTJDWA5iadqiHW7Kmev9bSFIiXrStAUkRkv0eM%2BMTdCtgZ%2FFhW8cqydlV7VKqvNhj4c3jF4x58CjtYl3iYhB%2BgTSStW86n0e4oz2EprVXEZkazooQ%2FHvia0CSbEyuaELSPtFFKKyJ1vLBBL%2FcSAsDQFykGjCPyxrtx8SqmNVEgaYCzs6Kv9PVLZY%2FZxg9enwgeBH9kciJl8IBofEBNAEhjc%2F3%2FfVUJygscaDqgvirnpbjftMWWDSHaeLAE4GCSnw31zcfUJSHSUslE6jr3h6uZdZ9SiiztpQ%2FCySeeDBhKwRLTZwC31E6W5VYNFG9ivdbs8gb2K1MTi8GHPO8YAK9Lql6Ck5yL4ZVz%2F9tP%2FZ7EuzP5cWVYtX7kA2FoRawHHMo3xmCl0DwUTsx0MK6x678GOqUBqwz9XwdPHDT2XVz71f0VTJIVjUWW5vov%2FzC1U4pR1x2stPBtiRHQO5pMXuHl2Z16NCM%2B40JY3WvDrnw3pMf9ago4PD17BIqfmqlMjH1Pl0gRVd5yRBk39XQyVgGAMkfTmS5OyZ77XhQy5t8o5DOH7EB62ulOJ6eELvuRa9GhVgHFXqK6%2FbNaP7tk69c%2FGoGx%2BsNO306gTmuYuOjlC70QSd1VEBRK&X-Amz-Signature=8336f5ad708353a55a7bc33291526b2c94ea11875f4ae32c70388de3da552239&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
