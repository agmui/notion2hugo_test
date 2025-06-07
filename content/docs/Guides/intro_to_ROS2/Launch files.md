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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HZV2XMQ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T160912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5Q1R%2FYKi1dVeSN6mXlbmGYF0ebwcKxzr9w24hXmwHfwIgO%2BQ%2BgCrYHqVghR7qh827LHp%2BSt%2FHYi8CwngsG1VyeIQq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBvm%2Bk6CZYp3HW4x2SrcAwETNd%2BQu3OGRSs8wxbKl1mCCB7ExvIINOyBXREb%2BdKTqCr0tgEtdu3DWFULzkhQwvrwX1%2FSf%2BnIwYkEaNrq3PTI5DaCgllLjhOPdAumFZbOwDuj6qu4ItTAIdO%2FPnEtErH29BcuPJv9SmMcFo89ssOoDgFgFXlOepGh3qhD%2FVNjCo26JWzTE6xBYPA%2BdOrT2B5NJHHuf5Ydox0T5%2Fw2pmc4cieTqrZUbd18vEVh3h0SKLKh%2BEEzhIWPC2xMgtRpACVtXXO%2Bu4UDpQl%2F2pBcX%2FdM0egRswS%2FCJx9vDh5EVuzrcxLJCz6EeYeQX1SoHe5hicBFtGGl3UrY2U0KthAEbPuByGxgXqGPL2uP3fDwURSmJlk%2F%2BWTaLGDXtgZ9eV993OnWJ0WpXiQi3dF1MxK9t9Kxeeb0XxVf7NHCUmn1RmmFUPHoFGCL%2BRXGYa%2FMwvB6SjvSY%2FdoyxxZVQpdBLNceJSnu3EeKRfrYYybvc9pJvCAIlFLJntN7g1kgcI5YRl%2FlKx%2Bt2JeFn%2Fz0W%2FHrAFbvCQarHBRaUMN54mxPo8fm8KPOdAEFnnB7%2F3UAelwpKvMrX110X50X6aPVdfM4aZ1RMYMyoGjBXM4Y8GpDLVR7hu5fT9yR8Hiq3pB7%2FJMKyBkcIGOqUBs2kiC5XHh0udCMRRLO2yhtvQfTYPxbs2ME8ergM%2Bs76Wa32IYSEwuWQQmuuopDd6RMm4xyevSEAfIjfce1E63jlXuuui4VywqqREbBE7wRaTRcP8e3kD5vEct2rTQqFnNu6bY%2Fd9IlLP6BNwKo%2BYJf5BW5Z9NFYMYL7f871%2BaGAX2rgZ6bShdNbTMDYXyWqfALWhU92sq5HHHNEylo6YGEBcH0NW&X-Amz-Signature=5ba1ebb364458459112f695c176ae1cacd21466e8c627375aebc562cfbae6553&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HZV2XMQ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T160912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5Q1R%2FYKi1dVeSN6mXlbmGYF0ebwcKxzr9w24hXmwHfwIgO%2BQ%2BgCrYHqVghR7qh827LHp%2BSt%2FHYi8CwngsG1VyeIQq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBvm%2Bk6CZYp3HW4x2SrcAwETNd%2BQu3OGRSs8wxbKl1mCCB7ExvIINOyBXREb%2BdKTqCr0tgEtdu3DWFULzkhQwvrwX1%2FSf%2BnIwYkEaNrq3PTI5DaCgllLjhOPdAumFZbOwDuj6qu4ItTAIdO%2FPnEtErH29BcuPJv9SmMcFo89ssOoDgFgFXlOepGh3qhD%2FVNjCo26JWzTE6xBYPA%2BdOrT2B5NJHHuf5Ydox0T5%2Fw2pmc4cieTqrZUbd18vEVh3h0SKLKh%2BEEzhIWPC2xMgtRpACVtXXO%2Bu4UDpQl%2F2pBcX%2FdM0egRswS%2FCJx9vDh5EVuzrcxLJCz6EeYeQX1SoHe5hicBFtGGl3UrY2U0KthAEbPuByGxgXqGPL2uP3fDwURSmJlk%2F%2BWTaLGDXtgZ9eV993OnWJ0WpXiQi3dF1MxK9t9Kxeeb0XxVf7NHCUmn1RmmFUPHoFGCL%2BRXGYa%2FMwvB6SjvSY%2FdoyxxZVQpdBLNceJSnu3EeKRfrYYybvc9pJvCAIlFLJntN7g1kgcI5YRl%2FlKx%2Bt2JeFn%2Fz0W%2FHrAFbvCQarHBRaUMN54mxPo8fm8KPOdAEFnnB7%2F3UAelwpKvMrX110X50X6aPVdfM4aZ1RMYMyoGjBXM4Y8GpDLVR7hu5fT9yR8Hiq3pB7%2FJMKyBkcIGOqUBs2kiC5XHh0udCMRRLO2yhtvQfTYPxbs2ME8ergM%2Bs76Wa32IYSEwuWQQmuuopDd6RMm4xyevSEAfIjfce1E63jlXuuui4VywqqREbBE7wRaTRcP8e3kD5vEct2rTQqFnNu6bY%2Fd9IlLP6BNwKo%2BYJf5BW5Z9NFYMYL7f871%2BaGAX2rgZ6bShdNbTMDYXyWqfALWhU92sq5HHHNEylo6YGEBcH0NW&X-Amz-Signature=febddc62b50a8c70e1d4fe3899d8f378ee5808a07b11fed885af4f543c3ee077&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HZV2XMQ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T160912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5Q1R%2FYKi1dVeSN6mXlbmGYF0ebwcKxzr9w24hXmwHfwIgO%2BQ%2BgCrYHqVghR7qh827LHp%2BSt%2FHYi8CwngsG1VyeIQq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBvm%2Bk6CZYp3HW4x2SrcAwETNd%2BQu3OGRSs8wxbKl1mCCB7ExvIINOyBXREb%2BdKTqCr0tgEtdu3DWFULzkhQwvrwX1%2FSf%2BnIwYkEaNrq3PTI5DaCgllLjhOPdAumFZbOwDuj6qu4ItTAIdO%2FPnEtErH29BcuPJv9SmMcFo89ssOoDgFgFXlOepGh3qhD%2FVNjCo26JWzTE6xBYPA%2BdOrT2B5NJHHuf5Ydox0T5%2Fw2pmc4cieTqrZUbd18vEVh3h0SKLKh%2BEEzhIWPC2xMgtRpACVtXXO%2Bu4UDpQl%2F2pBcX%2FdM0egRswS%2FCJx9vDh5EVuzrcxLJCz6EeYeQX1SoHe5hicBFtGGl3UrY2U0KthAEbPuByGxgXqGPL2uP3fDwURSmJlk%2F%2BWTaLGDXtgZ9eV993OnWJ0WpXiQi3dF1MxK9t9Kxeeb0XxVf7NHCUmn1RmmFUPHoFGCL%2BRXGYa%2FMwvB6SjvSY%2FdoyxxZVQpdBLNceJSnu3EeKRfrYYybvc9pJvCAIlFLJntN7g1kgcI5YRl%2FlKx%2Bt2JeFn%2Fz0W%2FHrAFbvCQarHBRaUMN54mxPo8fm8KPOdAEFnnB7%2F3UAelwpKvMrX110X50X6aPVdfM4aZ1RMYMyoGjBXM4Y8GpDLVR7hu5fT9yR8Hiq3pB7%2FJMKyBkcIGOqUBs2kiC5XHh0udCMRRLO2yhtvQfTYPxbs2ME8ergM%2Bs76Wa32IYSEwuWQQmuuopDd6RMm4xyevSEAfIjfce1E63jlXuuui4VywqqREbBE7wRaTRcP8e3kD5vEct2rTQqFnNu6bY%2Fd9IlLP6BNwKo%2BYJf5BW5Z9NFYMYL7f871%2BaGAX2rgZ6bShdNbTMDYXyWqfALWhU92sq5HHHNEylo6YGEBcH0NW&X-Amz-Signature=cd6a458b951c2afb9f7cb06c1ee7a7b06a020cfc30221ee8ed5d63fb35e212a4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
