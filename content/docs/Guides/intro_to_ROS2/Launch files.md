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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFBZFFQR%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T003747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWJBW%2BXHNooCMKwDm%2BtwGFVqTy53Um0IhOdtsYTxxUjAiEAhcG1qvGEjCnqbwibn8yn07Y6M7z5%2BUjLaRcOTQ4bQSkq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDD6i53Ym72S%2BhxLRgyrcA557iBgENAdcfSLgGWQWWs9XtlbZ8Gmt2C1%2FUMPkLshjf%2FfhNtqgVbU%2BUM7pj0bY5eQpWFBFRH%2FBuwj5kbkU5qWNrEWrc1K1RN84cGgwYUdwdn2lByqYGr92Ni1UYK%2FiUEjh7%2BCu9ncQc7a8avXx8YAC0epYoJxvHup7MoLphYYjktCjHylsVq7VoJ6g9FlUoVOZ2LOCGQlQbxsnYDG%2FiIDTLbjFoaT0LPATOAh5N5lddXW4C406JVjDjDotrdy4xr2QALz%2BI2F3GYDYl4oZK%2BArdMwjNkIG3CExlcItvLN5dOHIwl65hzLWw87CHUWqdFdK51ZoNEm0Nk6lY%2FfuUoIcgp7BfOachb22Bd9OEUbv%2BLvsuIrL3KpOsOnCBE9HfZF%2BBdooI%2BjbgDnooMsAAt9WHcIzNchK274iZ679P7F3yffq4YD0xTqyB6yqmRuKagLXBSQhFMSv8tQbGXNn7vBH6tf1G9zBjLiAxTy0ck%2Bns%2FdEv8K6tg8KyjX9YmIuaGFonVo46UJ4oPBMH78RdLasRvJ2C99wiIAVuAKl4ORZYCkuURW564sFUZn6g74maWod6E8UKmeLVZcQZFhV8zcGgrBRg3%2Ff0okvtBZrhsIzqStd%2FemzlYxiO0j5MMXGo74GOqUBdFAUNXyr0alPq0D7hZO2pVQYSTGgqXUn7SDd0S5v6n7XPEsPdYm5uqD7dJbJF9DMj5o%2B4EbsIwlmex2lNhHoOgt2XxkEu%2BpC1wSMgcok1L1NF0QEuTc9dbLgXOhmQWMeBhTKuCVl9vxGTUl43b10Q7BN3Z6VnpZL3dOqBF0dr0QcDCMe9405ghEnRP0rGOrlTtTBxQsyXclztqyNAIho4vb%2BwNSW&X-Amz-Signature=1a46265ef4a8818b73783275742627ba8e6e3499ba3f1d6a633134fcc6cba1dd&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFBZFFQR%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T003747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWJBW%2BXHNooCMKwDm%2BtwGFVqTy53Um0IhOdtsYTxxUjAiEAhcG1qvGEjCnqbwibn8yn07Y6M7z5%2BUjLaRcOTQ4bQSkq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDD6i53Ym72S%2BhxLRgyrcA557iBgENAdcfSLgGWQWWs9XtlbZ8Gmt2C1%2FUMPkLshjf%2FfhNtqgVbU%2BUM7pj0bY5eQpWFBFRH%2FBuwj5kbkU5qWNrEWrc1K1RN84cGgwYUdwdn2lByqYGr92Ni1UYK%2FiUEjh7%2BCu9ncQc7a8avXx8YAC0epYoJxvHup7MoLphYYjktCjHylsVq7VoJ6g9FlUoVOZ2LOCGQlQbxsnYDG%2FiIDTLbjFoaT0LPATOAh5N5lddXW4C406JVjDjDotrdy4xr2QALz%2BI2F3GYDYl4oZK%2BArdMwjNkIG3CExlcItvLN5dOHIwl65hzLWw87CHUWqdFdK51ZoNEm0Nk6lY%2FfuUoIcgp7BfOachb22Bd9OEUbv%2BLvsuIrL3KpOsOnCBE9HfZF%2BBdooI%2BjbgDnooMsAAt9WHcIzNchK274iZ679P7F3yffq4YD0xTqyB6yqmRuKagLXBSQhFMSv8tQbGXNn7vBH6tf1G9zBjLiAxTy0ck%2Bns%2FdEv8K6tg8KyjX9YmIuaGFonVo46UJ4oPBMH78RdLasRvJ2C99wiIAVuAKl4ORZYCkuURW564sFUZn6g74maWod6E8UKmeLVZcQZFhV8zcGgrBRg3%2Ff0okvtBZrhsIzqStd%2FemzlYxiO0j5MMXGo74GOqUBdFAUNXyr0alPq0D7hZO2pVQYSTGgqXUn7SDd0S5v6n7XPEsPdYm5uqD7dJbJF9DMj5o%2B4EbsIwlmex2lNhHoOgt2XxkEu%2BpC1wSMgcok1L1NF0QEuTc9dbLgXOhmQWMeBhTKuCVl9vxGTUl43b10Q7BN3Z6VnpZL3dOqBF0dr0QcDCMe9405ghEnRP0rGOrlTtTBxQsyXclztqyNAIho4vb%2BwNSW&X-Amz-Signature=4900bb62db88dfdc21bb5f5754affa9e805cbee94203c436cf8c5e513733ab56&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFBZFFQR%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T003747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWJBW%2BXHNooCMKwDm%2BtwGFVqTy53Um0IhOdtsYTxxUjAiEAhcG1qvGEjCnqbwibn8yn07Y6M7z5%2BUjLaRcOTQ4bQSkq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDD6i53Ym72S%2BhxLRgyrcA557iBgENAdcfSLgGWQWWs9XtlbZ8Gmt2C1%2FUMPkLshjf%2FfhNtqgVbU%2BUM7pj0bY5eQpWFBFRH%2FBuwj5kbkU5qWNrEWrc1K1RN84cGgwYUdwdn2lByqYGr92Ni1UYK%2FiUEjh7%2BCu9ncQc7a8avXx8YAC0epYoJxvHup7MoLphYYjktCjHylsVq7VoJ6g9FlUoVOZ2LOCGQlQbxsnYDG%2FiIDTLbjFoaT0LPATOAh5N5lddXW4C406JVjDjDotrdy4xr2QALz%2BI2F3GYDYl4oZK%2BArdMwjNkIG3CExlcItvLN5dOHIwl65hzLWw87CHUWqdFdK51ZoNEm0Nk6lY%2FfuUoIcgp7BfOachb22Bd9OEUbv%2BLvsuIrL3KpOsOnCBE9HfZF%2BBdooI%2BjbgDnooMsAAt9WHcIzNchK274iZ679P7F3yffq4YD0xTqyB6yqmRuKagLXBSQhFMSv8tQbGXNn7vBH6tf1G9zBjLiAxTy0ck%2Bns%2FdEv8K6tg8KyjX9YmIuaGFonVo46UJ4oPBMH78RdLasRvJ2C99wiIAVuAKl4ORZYCkuURW564sFUZn6g74maWod6E8UKmeLVZcQZFhV8zcGgrBRg3%2Ff0okvtBZrhsIzqStd%2FemzlYxiO0j5MMXGo74GOqUBdFAUNXyr0alPq0D7hZO2pVQYSTGgqXUn7SDd0S5v6n7XPEsPdYm5uqD7dJbJF9DMj5o%2B4EbsIwlmex2lNhHoOgt2XxkEu%2BpC1wSMgcok1L1NF0QEuTc9dbLgXOhmQWMeBhTKuCVl9vxGTUl43b10Q7BN3Z6VnpZL3dOqBF0dr0QcDCMe9405ghEnRP0rGOrlTtTBxQsyXclztqyNAIho4vb%2BwNSW&X-Amz-Signature=034638b98b4edc8ffc6c115bd6df5a2afe2ba3234fd0f7f0faa05fef5aee5cab&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
