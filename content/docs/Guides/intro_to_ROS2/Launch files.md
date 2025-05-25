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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHGTQYQZ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T041559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQCseSK698hiCqRSC33KJC8qvfuJ4xf%2B2koSzP7fT11%2FKAIhAIPR6OOn6u9FV%2Fvbm4O3ERjGGfR%2FKHLxxYhV4LYk8ImFKv8DCCQQABoMNjM3NDIzMTgzODA1Igy6DnqetOtAJywzKIMq3ANm8rj44%2BHIaNZ9AAIVjUu9g1rl0fGCE56oXpV1UwOmPqsZXNnA3J4b74yuSOWa0f1wssq%2B7UPg9cWbCM2Spffq7K1N3j6SzSFLZIrKC9SbnsK8fg8ixcctBCLav1h1cFapC6sOSQ1ZA2JIe87N8ICK%2FVJMWKhlSJqgMvBQLxNeOH6XmY70d20juVz%2FdF0RoSTdbSNqfs3robOc8fQELuleX8PSenQtNFdiVWuZDlqst1sCvMMSNuyMp0DJT8exwPnZa6vooCwLF4jZHyhc3jvDj60EhQ7NySOg2Hxppj6HJJJ3D%2BXL0DyEZmcyIcuSvAhfS32hl%2FPUjHcZBmyTNnaQiwluwF%2BOEvYoqixXxhpRFOzDfd0ltRmA7F06mIgJQfXA4LmZSRrzGnFGotGNzjJEakomA%2FMgB4Hgu7iAtqv3fkgmTjtyKI463U0aga8a8HSDjOiH5b61l4XVROjkpf04%2FG5c%2FfLEVvicLbGjt%2BQzUpFPuWKFoGXjlLlsPi9CDt4IF5DKFYDe%2FRmkcM%2F3EXsKFeM251QEOMG11z2%2F9rdGkDTHSMpujslqsxOE7Yv2XL9T6FlnvcTVhGJhECaU5fxhEPtWTnIuLbiKM8cu7zyutezTt7KFHIWkrkIvTDCgmMrBBjqkAZ9V%2F%2FFtUhPWc13nKk7J0B%2FlT1GKVppFcWOIS9o2zmez%2FYAXd4kQem3EiIT3kZJJZ%2BwHRFa0pdG4T5xERtENZaMoE0VaWB5txG6oW0bNbuhDWBN%2Fc7xfJRUssS47%2F1GxNBmPr83LZVfb68GEq47WNCwKCr4ZX2lkGOcIkpJgoER9iMZ%2BMCIYctLFt2sNQg99czKp05di0pmIaWv1nRsrHh7%2Ff1hZ&X-Amz-Signature=eb747b6ae82000ee82a82183b5f1c4ff185677809c0a5cbb0dfa1cdcab6da34c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHGTQYQZ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T041559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQCseSK698hiCqRSC33KJC8qvfuJ4xf%2B2koSzP7fT11%2FKAIhAIPR6OOn6u9FV%2Fvbm4O3ERjGGfR%2FKHLxxYhV4LYk8ImFKv8DCCQQABoMNjM3NDIzMTgzODA1Igy6DnqetOtAJywzKIMq3ANm8rj44%2BHIaNZ9AAIVjUu9g1rl0fGCE56oXpV1UwOmPqsZXNnA3J4b74yuSOWa0f1wssq%2B7UPg9cWbCM2Spffq7K1N3j6SzSFLZIrKC9SbnsK8fg8ixcctBCLav1h1cFapC6sOSQ1ZA2JIe87N8ICK%2FVJMWKhlSJqgMvBQLxNeOH6XmY70d20juVz%2FdF0RoSTdbSNqfs3robOc8fQELuleX8PSenQtNFdiVWuZDlqst1sCvMMSNuyMp0DJT8exwPnZa6vooCwLF4jZHyhc3jvDj60EhQ7NySOg2Hxppj6HJJJ3D%2BXL0DyEZmcyIcuSvAhfS32hl%2FPUjHcZBmyTNnaQiwluwF%2BOEvYoqixXxhpRFOzDfd0ltRmA7F06mIgJQfXA4LmZSRrzGnFGotGNzjJEakomA%2FMgB4Hgu7iAtqv3fkgmTjtyKI463U0aga8a8HSDjOiH5b61l4XVROjkpf04%2FG5c%2FfLEVvicLbGjt%2BQzUpFPuWKFoGXjlLlsPi9CDt4IF5DKFYDe%2FRmkcM%2F3EXsKFeM251QEOMG11z2%2F9rdGkDTHSMpujslqsxOE7Yv2XL9T6FlnvcTVhGJhECaU5fxhEPtWTnIuLbiKM8cu7zyutezTt7KFHIWkrkIvTDCgmMrBBjqkAZ9V%2F%2FFtUhPWc13nKk7J0B%2FlT1GKVppFcWOIS9o2zmez%2FYAXd4kQem3EiIT3kZJJZ%2BwHRFa0pdG4T5xERtENZaMoE0VaWB5txG6oW0bNbuhDWBN%2Fc7xfJRUssS47%2F1GxNBmPr83LZVfb68GEq47WNCwKCr4ZX2lkGOcIkpJgoER9iMZ%2BMCIYctLFt2sNQg99czKp05di0pmIaWv1nRsrHh7%2Ff1hZ&X-Amz-Signature=81e4994b0616a1f1c7a60b6f80273cd9f6bbb5d40a684e2713952498c17723c9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHGTQYQZ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T041559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQCseSK698hiCqRSC33KJC8qvfuJ4xf%2B2koSzP7fT11%2FKAIhAIPR6OOn6u9FV%2Fvbm4O3ERjGGfR%2FKHLxxYhV4LYk8ImFKv8DCCQQABoMNjM3NDIzMTgzODA1Igy6DnqetOtAJywzKIMq3ANm8rj44%2BHIaNZ9AAIVjUu9g1rl0fGCE56oXpV1UwOmPqsZXNnA3J4b74yuSOWa0f1wssq%2B7UPg9cWbCM2Spffq7K1N3j6SzSFLZIrKC9SbnsK8fg8ixcctBCLav1h1cFapC6sOSQ1ZA2JIe87N8ICK%2FVJMWKhlSJqgMvBQLxNeOH6XmY70d20juVz%2FdF0RoSTdbSNqfs3robOc8fQELuleX8PSenQtNFdiVWuZDlqst1sCvMMSNuyMp0DJT8exwPnZa6vooCwLF4jZHyhc3jvDj60EhQ7NySOg2Hxppj6HJJJ3D%2BXL0DyEZmcyIcuSvAhfS32hl%2FPUjHcZBmyTNnaQiwluwF%2BOEvYoqixXxhpRFOzDfd0ltRmA7F06mIgJQfXA4LmZSRrzGnFGotGNzjJEakomA%2FMgB4Hgu7iAtqv3fkgmTjtyKI463U0aga8a8HSDjOiH5b61l4XVROjkpf04%2FG5c%2FfLEVvicLbGjt%2BQzUpFPuWKFoGXjlLlsPi9CDt4IF5DKFYDe%2FRmkcM%2F3EXsKFeM251QEOMG11z2%2F9rdGkDTHSMpujslqsxOE7Yv2XL9T6FlnvcTVhGJhECaU5fxhEPtWTnIuLbiKM8cu7zyutezTt7KFHIWkrkIvTDCgmMrBBjqkAZ9V%2F%2FFtUhPWc13nKk7J0B%2FlT1GKVppFcWOIS9o2zmez%2FYAXd4kQem3EiIT3kZJJZ%2BwHRFa0pdG4T5xERtENZaMoE0VaWB5txG6oW0bNbuhDWBN%2Fc7xfJRUssS47%2F1GxNBmPr83LZVfb68GEq47WNCwKCr4ZX2lkGOcIkpJgoER9iMZ%2BMCIYctLFt2sNQg99czKp05di0pmIaWv1nRsrHh7%2Ff1hZ&X-Amz-Signature=06706505754b4d2f706e12b0d71ab4058b8357be73af218880e77d8fe2ed1209&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
