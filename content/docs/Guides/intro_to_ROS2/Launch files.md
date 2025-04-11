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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRTVSOK7%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T150854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIG1NqclJ%2BhNQhJq%2BbR7iOK%2FZIFjt0JjQ%2FXnztHhjCqczAiBNwUEQfzLaLiFgtVmLpAvkL6YJwBuh86mxcZaDUDFOFiqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqFGPbYfP9oQxKPdgKtwDk3Q5vLiipnAdBfpkrJKXFae9WzCe6npHkUUVcYXOJxwAlJv6a9OuBFB%2BaG6y2Z%2F%2FyIIwmeVq4VIoTEr6%2Fj5YjxZsOgiYtbi1qSVoHNEBmDoKSMfK5wzBZ%2BECbJyEvJa5VRs1KmiRNw5zYco9N0JmKp6a%2BRqe9IckLMWLiLpPjewp%2BGG%2BdX1CsPkaqVmgeDIw1FDHU%2FetcQu2tZ1Ieh7FNtVT1OgeKBkeG4jN7qZV1d3VU3VrlBlnCVdjBX3J1KGPB9SvzVTxXwaOlGr%2Fxs2nX8M5XuBT013wOHEXdjPTA348haOcLAEI0RbCF8GAKVSGPfSJOUpiM32zjk1DEnwRd5ClW6FdaJav%2FSq9w6eOaI39BqTIBNmldPfmoYR46BbXQK3NOgsVIZwDd6HSV59fxkhKOddUwgn62CEXna1JLzUR7qHGOyztpNgOIJOce%2FYVk%2F1a9zjsFJWxHIT4RGAzqfCzGA9dCLtkeFMw4cnH3LWwA8FvCGSqVkkt8ZayT2Z7RjLb%2B9Auy7pfDtUdhLrB1a985wAoQXuIiwrHy0pEBt9uLQtnPE5NLC%2BQfsn5%2F5yflKHRimx38HrznV7%2BDUXeTLcwhBbJLU6hA3BTQg1QEep1uRe%2B3SqITWYvZTswqtDkvwY6pgHXfx9kn1KZBm5EoR2wF0lweZDy7YlFgSsi8XQys8uMnmJYLZ2JOcBr8oHwOuWfwlZaafoR%2BcVIWGdRp4JzyzbTT9Qo1rJSK7PVPCSIfKwxiXn12wjhF9gQ4eMtGd2Q1S74Mu0yPE0WvIu7fObD%2FYysowucTKd%2Bl4iFo3Rgcz43qz8yd1%2FZyHrPzxK0HpvYY7HAW%2BR2NJHK8vN9W%2FSibqZ3xUPWk73r&X-Amz-Signature=52a1f8e56c4169b33b1fbf355351ba47028f2f38f4ef59c746b477cb37e4b68a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRTVSOK7%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T150854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIG1NqclJ%2BhNQhJq%2BbR7iOK%2FZIFjt0JjQ%2FXnztHhjCqczAiBNwUEQfzLaLiFgtVmLpAvkL6YJwBuh86mxcZaDUDFOFiqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqFGPbYfP9oQxKPdgKtwDk3Q5vLiipnAdBfpkrJKXFae9WzCe6npHkUUVcYXOJxwAlJv6a9OuBFB%2BaG6y2Z%2F%2FyIIwmeVq4VIoTEr6%2Fj5YjxZsOgiYtbi1qSVoHNEBmDoKSMfK5wzBZ%2BECbJyEvJa5VRs1KmiRNw5zYco9N0JmKp6a%2BRqe9IckLMWLiLpPjewp%2BGG%2BdX1CsPkaqVmgeDIw1FDHU%2FetcQu2tZ1Ieh7FNtVT1OgeKBkeG4jN7qZV1d3VU3VrlBlnCVdjBX3J1KGPB9SvzVTxXwaOlGr%2Fxs2nX8M5XuBT013wOHEXdjPTA348haOcLAEI0RbCF8GAKVSGPfSJOUpiM32zjk1DEnwRd5ClW6FdaJav%2FSq9w6eOaI39BqTIBNmldPfmoYR46BbXQK3NOgsVIZwDd6HSV59fxkhKOddUwgn62CEXna1JLzUR7qHGOyztpNgOIJOce%2FYVk%2F1a9zjsFJWxHIT4RGAzqfCzGA9dCLtkeFMw4cnH3LWwA8FvCGSqVkkt8ZayT2Z7RjLb%2B9Auy7pfDtUdhLrB1a985wAoQXuIiwrHy0pEBt9uLQtnPE5NLC%2BQfsn5%2F5yflKHRimx38HrznV7%2BDUXeTLcwhBbJLU6hA3BTQg1QEep1uRe%2B3SqITWYvZTswqtDkvwY6pgHXfx9kn1KZBm5EoR2wF0lweZDy7YlFgSsi8XQys8uMnmJYLZ2JOcBr8oHwOuWfwlZaafoR%2BcVIWGdRp4JzyzbTT9Qo1rJSK7PVPCSIfKwxiXn12wjhF9gQ4eMtGd2Q1S74Mu0yPE0WvIu7fObD%2FYysowucTKd%2Bl4iFo3Rgcz43qz8yd1%2FZyHrPzxK0HpvYY7HAW%2BR2NJHK8vN9W%2FSibqZ3xUPWk73r&X-Amz-Signature=5579b8566706eea384e737dc7167195f1dccc55648755d009890701e4b6bca7c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRTVSOK7%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T150854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIG1NqclJ%2BhNQhJq%2BbR7iOK%2FZIFjt0JjQ%2FXnztHhjCqczAiBNwUEQfzLaLiFgtVmLpAvkL6YJwBuh86mxcZaDUDFOFiqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqFGPbYfP9oQxKPdgKtwDk3Q5vLiipnAdBfpkrJKXFae9WzCe6npHkUUVcYXOJxwAlJv6a9OuBFB%2BaG6y2Z%2F%2FyIIwmeVq4VIoTEr6%2Fj5YjxZsOgiYtbi1qSVoHNEBmDoKSMfK5wzBZ%2BECbJyEvJa5VRs1KmiRNw5zYco9N0JmKp6a%2BRqe9IckLMWLiLpPjewp%2BGG%2BdX1CsPkaqVmgeDIw1FDHU%2FetcQu2tZ1Ieh7FNtVT1OgeKBkeG4jN7qZV1d3VU3VrlBlnCVdjBX3J1KGPB9SvzVTxXwaOlGr%2Fxs2nX8M5XuBT013wOHEXdjPTA348haOcLAEI0RbCF8GAKVSGPfSJOUpiM32zjk1DEnwRd5ClW6FdaJav%2FSq9w6eOaI39BqTIBNmldPfmoYR46BbXQK3NOgsVIZwDd6HSV59fxkhKOddUwgn62CEXna1JLzUR7qHGOyztpNgOIJOce%2FYVk%2F1a9zjsFJWxHIT4RGAzqfCzGA9dCLtkeFMw4cnH3LWwA8FvCGSqVkkt8ZayT2Z7RjLb%2B9Auy7pfDtUdhLrB1a985wAoQXuIiwrHy0pEBt9uLQtnPE5NLC%2BQfsn5%2F5yflKHRimx38HrznV7%2BDUXeTLcwhBbJLU6hA3BTQg1QEep1uRe%2B3SqITWYvZTswqtDkvwY6pgHXfx9kn1KZBm5EoR2wF0lweZDy7YlFgSsi8XQys8uMnmJYLZ2JOcBr8oHwOuWfwlZaafoR%2BcVIWGdRp4JzyzbTT9Qo1rJSK7PVPCSIfKwxiXn12wjhF9gQ4eMtGd2Q1S74Mu0yPE0WvIu7fObD%2FYysowucTKd%2Bl4iFo3Rgcz43qz8yd1%2FZyHrPzxK0HpvYY7HAW%2BR2NJHK8vN9W%2FSibqZ3xUPWk73r&X-Amz-Signature=d24c0a9f589825354056b31a4030f844cdd0488eb8e6058b47e162f89b69502f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
