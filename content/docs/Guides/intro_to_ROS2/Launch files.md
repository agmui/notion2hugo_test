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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFO6BNEP%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T121445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCICNOplJQjVxya7WLLKhNLcQAuzM9MYpVCZOPxy%2F%2B6AzdAiEA149De2n0LJf8mvvCS77dBZPxdL0JquH%2BYZJ6fylziCYqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJonEVxNJFQay%2BGGhyrcA1EHKfu9A5xQhNmhJyeeokWluw%2BSzHR%2FlXE49OtoItVZIz8haqyHTeFcFSjbd%2F9PBWYU%2F20dQ1neBRNqcu6RmQ4zG%2BAHilFCkGWW2%2Bsa8IxdrkLpQ692X0JQ2DjanQIqWIhGm7l47EJ8LWK2EA20IShEnSq4P876nxTdF8FSOfznho6d26XGLhfvJ885DH%2BnlJi0gTA5d%2BQQ4PMQOzMLqBJ4NiaTaYDDv%2BpP8RF5Bo3iHyoFgEVP7p5dPH9MQJTYebKK3ZduPkJkGSrNusPj2rnDOZ%2B4addzsWbvoMbowoBDigrSfbSyU2rkVwsHTpZ8hLS8AxT6dA%2Fx541UDJxaL920XF2M9npA3uG3SXV1DIpJUWAN75YXoWQp4lpZ4ymLsxTf8kHwGU72h%2B%2FWJ5FsEx8XVREsymvGX4PnHicNhWiu2Jv%2BvMWtluvFeJ0DjKQ%2B8IliEDDcNimvh2rDhJ33wMp41FGDc%2BuF8KKBTyoXFb4yBmoMaxEyDRexPAz7OcBKyULbIqE%2FdgroRLOKEEzfpGkJ%2BhGttuLKqrM%2FeJ1A%2Bi%2BLquQ7J7utte%2BIitNeXmNcPROunsuXqbfnkYwzD8xFVYUxkWJ7xRfI%2F5p0dhZgvnsxHtp0b7E2UG0hJKK1MIuIqr8GOqUB3wBvXiuxa7mM72Z3qykD9U0ivyDemFnUJSfiSOWgatFOe7%2F3CUPJuQeM0%2Bh0VGJwHYBJqzOdr%2F0PJ7ez6a%2Fhbam1hFTCClHMNeiEpie6%2BtzQOjaUB0JfnLXzOHRj6cHDJkeerfExK1V67js6YvcgYoSOgwI8Fo%2FRQG6ZUcZtNqLiK8WUv3juxJkLoOa4mTKOL4xxU6vhPlnpKTIW7ieRSyCl9r8U&X-Amz-Signature=cdfbe6c7d39ae3f1b282a2be25ab4919b74531f9c4f1444ee498dc46db519e4c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFO6BNEP%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T121445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCICNOplJQjVxya7WLLKhNLcQAuzM9MYpVCZOPxy%2F%2B6AzdAiEA149De2n0LJf8mvvCS77dBZPxdL0JquH%2BYZJ6fylziCYqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJonEVxNJFQay%2BGGhyrcA1EHKfu9A5xQhNmhJyeeokWluw%2BSzHR%2FlXE49OtoItVZIz8haqyHTeFcFSjbd%2F9PBWYU%2F20dQ1neBRNqcu6RmQ4zG%2BAHilFCkGWW2%2Bsa8IxdrkLpQ692X0JQ2DjanQIqWIhGm7l47EJ8LWK2EA20IShEnSq4P876nxTdF8FSOfznho6d26XGLhfvJ885DH%2BnlJi0gTA5d%2BQQ4PMQOzMLqBJ4NiaTaYDDv%2BpP8RF5Bo3iHyoFgEVP7p5dPH9MQJTYebKK3ZduPkJkGSrNusPj2rnDOZ%2B4addzsWbvoMbowoBDigrSfbSyU2rkVwsHTpZ8hLS8AxT6dA%2Fx541UDJxaL920XF2M9npA3uG3SXV1DIpJUWAN75YXoWQp4lpZ4ymLsxTf8kHwGU72h%2B%2FWJ5FsEx8XVREsymvGX4PnHicNhWiu2Jv%2BvMWtluvFeJ0DjKQ%2B8IliEDDcNimvh2rDhJ33wMp41FGDc%2BuF8KKBTyoXFb4yBmoMaxEyDRexPAz7OcBKyULbIqE%2FdgroRLOKEEzfpGkJ%2BhGttuLKqrM%2FeJ1A%2Bi%2BLquQ7J7utte%2BIitNeXmNcPROunsuXqbfnkYwzD8xFVYUxkWJ7xRfI%2F5p0dhZgvnsxHtp0b7E2UG0hJKK1MIuIqr8GOqUB3wBvXiuxa7mM72Z3qykD9U0ivyDemFnUJSfiSOWgatFOe7%2F3CUPJuQeM0%2Bh0VGJwHYBJqzOdr%2F0PJ7ez6a%2Fhbam1hFTCClHMNeiEpie6%2BtzQOjaUB0JfnLXzOHRj6cHDJkeerfExK1V67js6YvcgYoSOgwI8Fo%2FRQG6ZUcZtNqLiK8WUv3juxJkLoOa4mTKOL4xxU6vhPlnpKTIW7ieRSyCl9r8U&X-Amz-Signature=a713c874a21e94d657595296c28ccb036f0ac313b33af5925fbfe6dba428297c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFO6BNEP%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T121445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCICNOplJQjVxya7WLLKhNLcQAuzM9MYpVCZOPxy%2F%2B6AzdAiEA149De2n0LJf8mvvCS77dBZPxdL0JquH%2BYZJ6fylziCYqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJonEVxNJFQay%2BGGhyrcA1EHKfu9A5xQhNmhJyeeokWluw%2BSzHR%2FlXE49OtoItVZIz8haqyHTeFcFSjbd%2F9PBWYU%2F20dQ1neBRNqcu6RmQ4zG%2BAHilFCkGWW2%2Bsa8IxdrkLpQ692X0JQ2DjanQIqWIhGm7l47EJ8LWK2EA20IShEnSq4P876nxTdF8FSOfznho6d26XGLhfvJ885DH%2BnlJi0gTA5d%2BQQ4PMQOzMLqBJ4NiaTaYDDv%2BpP8RF5Bo3iHyoFgEVP7p5dPH9MQJTYebKK3ZduPkJkGSrNusPj2rnDOZ%2B4addzsWbvoMbowoBDigrSfbSyU2rkVwsHTpZ8hLS8AxT6dA%2Fx541UDJxaL920XF2M9npA3uG3SXV1DIpJUWAN75YXoWQp4lpZ4ymLsxTf8kHwGU72h%2B%2FWJ5FsEx8XVREsymvGX4PnHicNhWiu2Jv%2BvMWtluvFeJ0DjKQ%2B8IliEDDcNimvh2rDhJ33wMp41FGDc%2BuF8KKBTyoXFb4yBmoMaxEyDRexPAz7OcBKyULbIqE%2FdgroRLOKEEzfpGkJ%2BhGttuLKqrM%2FeJ1A%2Bi%2BLquQ7J7utte%2BIitNeXmNcPROunsuXqbfnkYwzD8xFVYUxkWJ7xRfI%2F5p0dhZgvnsxHtp0b7E2UG0hJKK1MIuIqr8GOqUB3wBvXiuxa7mM72Z3qykD9U0ivyDemFnUJSfiSOWgatFOe7%2F3CUPJuQeM0%2Bh0VGJwHYBJqzOdr%2F0PJ7ez6a%2Fhbam1hFTCClHMNeiEpie6%2BtzQOjaUB0JfnLXzOHRj6cHDJkeerfExK1V67js6YvcgYoSOgwI8Fo%2FRQG6ZUcZtNqLiK8WUv3juxJkLoOa4mTKOL4xxU6vhPlnpKTIW7ieRSyCl9r8U&X-Amz-Signature=6f3b4362184cfcaad1dc581791a53c3d8bc2fc05a359d0b2c4f14bb1b71f82db&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
