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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5RQ45YB%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T121616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVjbLo5Fb6gEGqV2SrP4kHmXX3w%2FQWtz3jxSFHrS9gPAiBj2mdkq0eS5d1O8vVt31RgHndZXGtWEu3yXpNBLPDB%2FiqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqGa1TOTO2%2F1EwXI%2FKtwDkiE%2BQTQtDbR3Z6B5HGj2RkSOpD5%2F998nIJNS7IUwHXt%2BHKI2IhUczGVxCpGspsjv%2B%2FAyy6hd%2B4eAfj72QHErceD3hTLrIhh7vqqRJ3LUyxXHFCQKDWPkA0izlYXyBjzdxkWctrVqSW3yefA4xQ0NAdAXbt0hZq2czxchoHUY11jDecGmvSAXM0UVYo67pa4FrYbXuYkfvxLH4uy6lnQpvrpRJRNKz2jxhO2I%2FhOtSGP7gkR87%2F%2BrI%2B847E%2F%2BD0BhSPYhUTW0hVkZIu8aZU0gfLtPf4TZBUJRiA%2FqH6ZLu5Ty7zA4OfxfGRBjPI1WO5N7XpHUIa7g4M6vGQo4%2FvntI8DGNEeudYPS8lwhn8PW0om1oUa1RSw3ndj%2FrWLSOPgA7ozCdcyMt1P5mDv15lnqWz2KJZBbS%2BD4iYiuK6N%2BCK%2F4goy6TdOWG8KPMB%2BMnJtq0oMy4aN0Favc5xYIIO8zb6ERAEN5pQFeZNZOc%2BXbzOaWgPiJ3ifqmXnZw46OLpXmrEMIvseV70sONTNmu78v1ExOqtAtDp4%2BiPPB2qQqQsJumcwUiUcVrhNSyAF%2FX5B48tJs94iddadyiysdt833Qen45kQdSRX5%2BjxJrMyLhrsACBCgoyh0G9PQAMkwjP7DwwY6pgGwG9wpnp%2BR3gEDbPRmEY41hLmXWUcW0urd%2Fyoga6j2YHCfLW89vhYM0yxHxFV0pqpIurvFfEAfZm8IrioS9qdXLqANpbdyJyXeaCETpwuzMflMpnuKOsDm6YzPONrk%2F4ddWpP8M8JS3A72YMS3Trgjw4lRv8IXrM9mYWaEkY2j3HxZWyQ7vJAtgbcxBIRMgHlBcJAfoShxX4PBoV%2BQamtaROCro%2Bd5&X-Amz-Signature=e19c6880ee72c122ee13c49c3ee91a872c150d4daa49e0b1c0381aa070c0fe6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5RQ45YB%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T121616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVjbLo5Fb6gEGqV2SrP4kHmXX3w%2FQWtz3jxSFHrS9gPAiBj2mdkq0eS5d1O8vVt31RgHndZXGtWEu3yXpNBLPDB%2FiqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqGa1TOTO2%2F1EwXI%2FKtwDkiE%2BQTQtDbR3Z6B5HGj2RkSOpD5%2F998nIJNS7IUwHXt%2BHKI2IhUczGVxCpGspsjv%2B%2FAyy6hd%2B4eAfj72QHErceD3hTLrIhh7vqqRJ3LUyxXHFCQKDWPkA0izlYXyBjzdxkWctrVqSW3yefA4xQ0NAdAXbt0hZq2czxchoHUY11jDecGmvSAXM0UVYo67pa4FrYbXuYkfvxLH4uy6lnQpvrpRJRNKz2jxhO2I%2FhOtSGP7gkR87%2F%2BrI%2B847E%2F%2BD0BhSPYhUTW0hVkZIu8aZU0gfLtPf4TZBUJRiA%2FqH6ZLu5Ty7zA4OfxfGRBjPI1WO5N7XpHUIa7g4M6vGQo4%2FvntI8DGNEeudYPS8lwhn8PW0om1oUa1RSw3ndj%2FrWLSOPgA7ozCdcyMt1P5mDv15lnqWz2KJZBbS%2BD4iYiuK6N%2BCK%2F4goy6TdOWG8KPMB%2BMnJtq0oMy4aN0Favc5xYIIO8zb6ERAEN5pQFeZNZOc%2BXbzOaWgPiJ3ifqmXnZw46OLpXmrEMIvseV70sONTNmu78v1ExOqtAtDp4%2BiPPB2qQqQsJumcwUiUcVrhNSyAF%2FX5B48tJs94iddadyiysdt833Qen45kQdSRX5%2BjxJrMyLhrsACBCgoyh0G9PQAMkwjP7DwwY6pgGwG9wpnp%2BR3gEDbPRmEY41hLmXWUcW0urd%2Fyoga6j2YHCfLW89vhYM0yxHxFV0pqpIurvFfEAfZm8IrioS9qdXLqANpbdyJyXeaCETpwuzMflMpnuKOsDm6YzPONrk%2F4ddWpP8M8JS3A72YMS3Trgjw4lRv8IXrM9mYWaEkY2j3HxZWyQ7vJAtgbcxBIRMgHlBcJAfoShxX4PBoV%2BQamtaROCro%2Bd5&X-Amz-Signature=6ec140a9ae70569e9bf316cd16c6f042572852c73ba263b817c62c2bd369890b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5RQ45YB%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T121616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVjbLo5Fb6gEGqV2SrP4kHmXX3w%2FQWtz3jxSFHrS9gPAiBj2mdkq0eS5d1O8vVt31RgHndZXGtWEu3yXpNBLPDB%2FiqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqGa1TOTO2%2F1EwXI%2FKtwDkiE%2BQTQtDbR3Z6B5HGj2RkSOpD5%2F998nIJNS7IUwHXt%2BHKI2IhUczGVxCpGspsjv%2B%2FAyy6hd%2B4eAfj72QHErceD3hTLrIhh7vqqRJ3LUyxXHFCQKDWPkA0izlYXyBjzdxkWctrVqSW3yefA4xQ0NAdAXbt0hZq2czxchoHUY11jDecGmvSAXM0UVYo67pa4FrYbXuYkfvxLH4uy6lnQpvrpRJRNKz2jxhO2I%2FhOtSGP7gkR87%2F%2BrI%2B847E%2F%2BD0BhSPYhUTW0hVkZIu8aZU0gfLtPf4TZBUJRiA%2FqH6ZLu5Ty7zA4OfxfGRBjPI1WO5N7XpHUIa7g4M6vGQo4%2FvntI8DGNEeudYPS8lwhn8PW0om1oUa1RSw3ndj%2FrWLSOPgA7ozCdcyMt1P5mDv15lnqWz2KJZBbS%2BD4iYiuK6N%2BCK%2F4goy6TdOWG8KPMB%2BMnJtq0oMy4aN0Favc5xYIIO8zb6ERAEN5pQFeZNZOc%2BXbzOaWgPiJ3ifqmXnZw46OLpXmrEMIvseV70sONTNmu78v1ExOqtAtDp4%2BiPPB2qQqQsJumcwUiUcVrhNSyAF%2FX5B48tJs94iddadyiysdt833Qen45kQdSRX5%2BjxJrMyLhrsACBCgoyh0G9PQAMkwjP7DwwY6pgGwG9wpnp%2BR3gEDbPRmEY41hLmXWUcW0urd%2Fyoga6j2YHCfLW89vhYM0yxHxFV0pqpIurvFfEAfZm8IrioS9qdXLqANpbdyJyXeaCETpwuzMflMpnuKOsDm6YzPONrk%2F4ddWpP8M8JS3A72YMS3Trgjw4lRv8IXrM9mYWaEkY2j3HxZWyQ7vJAtgbcxBIRMgHlBcJAfoShxX4PBoV%2BQamtaROCro%2Bd5&X-Amz-Signature=b3f8b57f78eefe6f5d91232d6309e7686442183826e385e6ffe0dd9c014ada00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
