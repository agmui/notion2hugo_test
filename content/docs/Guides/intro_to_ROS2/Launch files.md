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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2GV4YXF%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIE07tN%2ByeQBrNmeOo5398BwZ6F4Lh96eT%2B4ZHK%2F69ys4AiEA%2Bf43A9in80RZjvlo%2B8H7GJyrKc64sub7WkkiqZJ94b8qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpyUi5bdUb67H2ulSrcAwinZ8gWcVFKqcBdSUw1AtCr4K1fL%2B431IXtmyyzgK0W2%2BGwd10XdPh3U5Ph6aboQOwH%2Fdn4B9EDYFcXl%2FOCFPOjfg8D3PgMdxPwNEdnB5wrxzJKDStmjdu48EVALQECOcqnlqMmKf7uSTMvquDrkxdt4XpD2VARNvGW6iyBrALuaoABx%2B3oei4to1NbXPDwt116QvKf4BYO7%2BGsWmXjPsIgCNEOKXmY%2FkaVvR6z4oi3q2CUE%2Bkq4Yh6Dzi%2BT6dl1Lsp9Dk7RBKGo%2BHnL8alVhRjejajtsVUWRRSSzi5TXAzQmvrts7jI6JAkNiq%2FXgEyssFByQO0Gv9%2FJim1OHNuYXH86%2FFUi9M3ieGbx%2Bpgh3q9oeHpYR%2BAl70hjmmV1I%2FgNW80R9TB5jUXxidwRd%2FnQX494akpjoVAZ%2BgcqBojOthY8VZj76LC4KcRdAmaP6z%2BzFGxX2Mfnrkowyh5FRfVHwypAxsM6CxInO7%2B7mLwUtmL9FkjsmkPXUzPDLL1HytdcLb3sMg3sc1edbBlS%2FCtNz8Xh3nOlYB%2FJDwCjIEMVxR1j2e6ENCAdBoahJ5YYGDLee2mqvY2bqS5TyT%2Ffu%2BvKIke8eWQwB5skYXcoQvNhjXOBSqDblB0ej0O%2FelMNiQ1scGOqUBHKkbFeno97nQ7QQdo3RqQyp5ntlJzOw5oHURYI4IinzS5%2FIYyGpJcvFJgU4%2BD3ChSKAX9dl4Bb6EV5eZ3lYptIUf%2FahcKsh0QdiXvfjGXvliO3pmtujUdIZr5xPyVUDTzLGhfJI5ScLSHM3FctnU7RaHwktj73gXElUdM8QDEgaZaTs7ucEu5KolaaFEL4oAcI6SMfnQrAbwTClEtG9H3o7RcduX&X-Amz-Signature=66aa245d8b3a20922047061ad81879c49ebc383ebb7d4e9077bd8a0c99454689&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2GV4YXF%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIE07tN%2ByeQBrNmeOo5398BwZ6F4Lh96eT%2B4ZHK%2F69ys4AiEA%2Bf43A9in80RZjvlo%2B8H7GJyrKc64sub7WkkiqZJ94b8qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpyUi5bdUb67H2ulSrcAwinZ8gWcVFKqcBdSUw1AtCr4K1fL%2B431IXtmyyzgK0W2%2BGwd10XdPh3U5Ph6aboQOwH%2Fdn4B9EDYFcXl%2FOCFPOjfg8D3PgMdxPwNEdnB5wrxzJKDStmjdu48EVALQECOcqnlqMmKf7uSTMvquDrkxdt4XpD2VARNvGW6iyBrALuaoABx%2B3oei4to1NbXPDwt116QvKf4BYO7%2BGsWmXjPsIgCNEOKXmY%2FkaVvR6z4oi3q2CUE%2Bkq4Yh6Dzi%2BT6dl1Lsp9Dk7RBKGo%2BHnL8alVhRjejajtsVUWRRSSzi5TXAzQmvrts7jI6JAkNiq%2FXgEyssFByQO0Gv9%2FJim1OHNuYXH86%2FFUi9M3ieGbx%2Bpgh3q9oeHpYR%2BAl70hjmmV1I%2FgNW80R9TB5jUXxidwRd%2FnQX494akpjoVAZ%2BgcqBojOthY8VZj76LC4KcRdAmaP6z%2BzFGxX2Mfnrkowyh5FRfVHwypAxsM6CxInO7%2B7mLwUtmL9FkjsmkPXUzPDLL1HytdcLb3sMg3sc1edbBlS%2FCtNz8Xh3nOlYB%2FJDwCjIEMVxR1j2e6ENCAdBoahJ5YYGDLee2mqvY2bqS5TyT%2Ffu%2BvKIke8eWQwB5skYXcoQvNhjXOBSqDblB0ej0O%2FelMNiQ1scGOqUBHKkbFeno97nQ7QQdo3RqQyp5ntlJzOw5oHURYI4IinzS5%2FIYyGpJcvFJgU4%2BD3ChSKAX9dl4Bb6EV5eZ3lYptIUf%2FahcKsh0QdiXvfjGXvliO3pmtujUdIZr5xPyVUDTzLGhfJI5ScLSHM3FctnU7RaHwktj73gXElUdM8QDEgaZaTs7ucEu5KolaaFEL4oAcI6SMfnQrAbwTClEtG9H3o7RcduX&X-Amz-Signature=d905c4f9bd4c3125a5f6c7c7b6a212481a3c515259f77f1649f48eb27b1d38cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2GV4YXF%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIE07tN%2ByeQBrNmeOo5398BwZ6F4Lh96eT%2B4ZHK%2F69ys4AiEA%2Bf43A9in80RZjvlo%2B8H7GJyrKc64sub7WkkiqZJ94b8qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpyUi5bdUb67H2ulSrcAwinZ8gWcVFKqcBdSUw1AtCr4K1fL%2B431IXtmyyzgK0W2%2BGwd10XdPh3U5Ph6aboQOwH%2Fdn4B9EDYFcXl%2FOCFPOjfg8D3PgMdxPwNEdnB5wrxzJKDStmjdu48EVALQECOcqnlqMmKf7uSTMvquDrkxdt4XpD2VARNvGW6iyBrALuaoABx%2B3oei4to1NbXPDwt116QvKf4BYO7%2BGsWmXjPsIgCNEOKXmY%2FkaVvR6z4oi3q2CUE%2Bkq4Yh6Dzi%2BT6dl1Lsp9Dk7RBKGo%2BHnL8alVhRjejajtsVUWRRSSzi5TXAzQmvrts7jI6JAkNiq%2FXgEyssFByQO0Gv9%2FJim1OHNuYXH86%2FFUi9M3ieGbx%2Bpgh3q9oeHpYR%2BAl70hjmmV1I%2FgNW80R9TB5jUXxidwRd%2FnQX494akpjoVAZ%2BgcqBojOthY8VZj76LC4KcRdAmaP6z%2BzFGxX2Mfnrkowyh5FRfVHwypAxsM6CxInO7%2B7mLwUtmL9FkjsmkPXUzPDLL1HytdcLb3sMg3sc1edbBlS%2FCtNz8Xh3nOlYB%2FJDwCjIEMVxR1j2e6ENCAdBoahJ5YYGDLee2mqvY2bqS5TyT%2Ffu%2BvKIke8eWQwB5skYXcoQvNhjXOBSqDblB0ej0O%2FelMNiQ1scGOqUBHKkbFeno97nQ7QQdo3RqQyp5ntlJzOw5oHURYI4IinzS5%2FIYyGpJcvFJgU4%2BD3ChSKAX9dl4Bb6EV5eZ3lYptIUf%2FahcKsh0QdiXvfjGXvliO3pmtujUdIZr5xPyVUDTzLGhfJI5ScLSHM3FctnU7RaHwktj73gXElUdM8QDEgaZaTs7ucEu5KolaaFEL4oAcI6SMfnQrAbwTClEtG9H3o7RcduX&X-Amz-Signature=46901c05da1694a07863db5a2f0cf669bc34367fa67249b9893dfa1690df3322&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
