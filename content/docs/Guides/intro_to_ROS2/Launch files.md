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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NFUHIMR%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T170115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQD8sA4PEqGU%2BBuzxJBMkSfkc51VWWNlkrcGMJ0tobXAxgIhAOj%2F1dINDdMdoPIJS8JEdZToGRyv4KrokX6KvZl6TxOaKv8DCHkQABoMNjM3NDIzMTgzODA1Igzvy77SR1p6HRMJhewq3AOOAqk2Q7t9JR6E03PLXJivmzV8nrUEKGR%2BAPCbLYc%2BByrHqWc6uJa%2BjDNNfMvkuunm88iL9pKWvc3%2FFjppYcZKHRajlmvVi%2F6kctTiu0Nage%2F%2FvTfHRJE75%2FurcmsY1fFR4tKs5fyr03gp%2F%2BwrAPsyhI9QuWTKQoFf4fQw21J3ckIDpSIuRgfiI%2FmUS1TR%2B4rX9o4WFSUIG5dPMwqdQnpC322hl7K9LC6Q%2BU1cozfAwdpuXUzZ1%2Fdi28MCyx6wqxx8mYZOatC3gCZJv9aiCXuzfJc%2FnKNzl2FmKnPZlhKa5LjJ9QqqsqmeJeFd7VD4S65FTfaiqUCtOzEVKVC8JttwrWIYWlj4XkjoIzkndZ1Hyqu%2BqYNCAVcb5LxwFQmhF9ldgVqSs9q%2FpgXUmhK%2BV%2BmIGOjfiZrb%2B%2FaHtHFDNfjE4QwrUVhqzHAkbgI61WgABw4N98Q75rbyJMlrQKB%2BMKvsxVgU3Fm3mM1wpAlyGN1nnspQwT%2B%2FZIk39FqvNRoxWfakVt0Pub%2FW5v8BAc6B0auQIOO5n88lIQbiDd5%2FFgX40s8P1L%2FxvK8ouQtBu3F5fq0p4KG3WhYBty7JRiHX02R9HVTRidW2xlqAbXiefAaFMCyqXPcagNDkAIqZwzDW4Zi9BjqkAdfYU2BcYyDgZHDOardnwWQpV%2BS%2FlKrqCvAaaZT8O%2F5N%2Bk%2F%2BVyOOk15PRJq6RTdUsdhuTjk%2BL00tuTMIm58%2FHVHnTpNWUtkrpGJKLwSKDtIwj9%2FIhxumMIPVUZNA6jXMuMznJaL0KCvvz2Ys8OsOeVWjD6gfcg%2FeYgbXXOPNMBB9jc6kDa3xeo05g3%2FZclkEZPaUnF%2Bc0BUH5HZBb2KP%2BC3Pp1PE&X-Amz-Signature=a9fce14001c724cf835a3b533da493f415fc04d75536a93660b0079b1d877f71&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NFUHIMR%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T170115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQD8sA4PEqGU%2BBuzxJBMkSfkc51VWWNlkrcGMJ0tobXAxgIhAOj%2F1dINDdMdoPIJS8JEdZToGRyv4KrokX6KvZl6TxOaKv8DCHkQABoMNjM3NDIzMTgzODA1Igzvy77SR1p6HRMJhewq3AOOAqk2Q7t9JR6E03PLXJivmzV8nrUEKGR%2BAPCbLYc%2BByrHqWc6uJa%2BjDNNfMvkuunm88iL9pKWvc3%2FFjppYcZKHRajlmvVi%2F6kctTiu0Nage%2F%2FvTfHRJE75%2FurcmsY1fFR4tKs5fyr03gp%2F%2BwrAPsyhI9QuWTKQoFf4fQw21J3ckIDpSIuRgfiI%2FmUS1TR%2B4rX9o4WFSUIG5dPMwqdQnpC322hl7K9LC6Q%2BU1cozfAwdpuXUzZ1%2Fdi28MCyx6wqxx8mYZOatC3gCZJv9aiCXuzfJc%2FnKNzl2FmKnPZlhKa5LjJ9QqqsqmeJeFd7VD4S65FTfaiqUCtOzEVKVC8JttwrWIYWlj4XkjoIzkndZ1Hyqu%2BqYNCAVcb5LxwFQmhF9ldgVqSs9q%2FpgXUmhK%2BV%2BmIGOjfiZrb%2B%2FaHtHFDNfjE4QwrUVhqzHAkbgI61WgABw4N98Q75rbyJMlrQKB%2BMKvsxVgU3Fm3mM1wpAlyGN1nnspQwT%2B%2FZIk39FqvNRoxWfakVt0Pub%2FW5v8BAc6B0auQIOO5n88lIQbiDd5%2FFgX40s8P1L%2FxvK8ouQtBu3F5fq0p4KG3WhYBty7JRiHX02R9HVTRidW2xlqAbXiefAaFMCyqXPcagNDkAIqZwzDW4Zi9BjqkAdfYU2BcYyDgZHDOardnwWQpV%2BS%2FlKrqCvAaaZT8O%2F5N%2Bk%2F%2BVyOOk15PRJq6RTdUsdhuTjk%2BL00tuTMIm58%2FHVHnTpNWUtkrpGJKLwSKDtIwj9%2FIhxumMIPVUZNA6jXMuMznJaL0KCvvz2Ys8OsOeVWjD6gfcg%2FeYgbXXOPNMBB9jc6kDa3xeo05g3%2FZclkEZPaUnF%2Bc0BUH5HZBb2KP%2BC3Pp1PE&X-Amz-Signature=dcaa5284a3614d9ea3da24563b2ebb153a9b4b7798ea0ebdcab4ffefe9ca994f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NFUHIMR%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T170115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQD8sA4PEqGU%2BBuzxJBMkSfkc51VWWNlkrcGMJ0tobXAxgIhAOj%2F1dINDdMdoPIJS8JEdZToGRyv4KrokX6KvZl6TxOaKv8DCHkQABoMNjM3NDIzMTgzODA1Igzvy77SR1p6HRMJhewq3AOOAqk2Q7t9JR6E03PLXJivmzV8nrUEKGR%2BAPCbLYc%2BByrHqWc6uJa%2BjDNNfMvkuunm88iL9pKWvc3%2FFjppYcZKHRajlmvVi%2F6kctTiu0Nage%2F%2FvTfHRJE75%2FurcmsY1fFR4tKs5fyr03gp%2F%2BwrAPsyhI9QuWTKQoFf4fQw21J3ckIDpSIuRgfiI%2FmUS1TR%2B4rX9o4WFSUIG5dPMwqdQnpC322hl7K9LC6Q%2BU1cozfAwdpuXUzZ1%2Fdi28MCyx6wqxx8mYZOatC3gCZJv9aiCXuzfJc%2FnKNzl2FmKnPZlhKa5LjJ9QqqsqmeJeFd7VD4S65FTfaiqUCtOzEVKVC8JttwrWIYWlj4XkjoIzkndZ1Hyqu%2BqYNCAVcb5LxwFQmhF9ldgVqSs9q%2FpgXUmhK%2BV%2BmIGOjfiZrb%2B%2FaHtHFDNfjE4QwrUVhqzHAkbgI61WgABw4N98Q75rbyJMlrQKB%2BMKvsxVgU3Fm3mM1wpAlyGN1nnspQwT%2B%2FZIk39FqvNRoxWfakVt0Pub%2FW5v8BAc6B0auQIOO5n88lIQbiDd5%2FFgX40s8P1L%2FxvK8ouQtBu3F5fq0p4KG3WhYBty7JRiHX02R9HVTRidW2xlqAbXiefAaFMCyqXPcagNDkAIqZwzDW4Zi9BjqkAdfYU2BcYyDgZHDOardnwWQpV%2BS%2FlKrqCvAaaZT8O%2F5N%2Bk%2F%2BVyOOk15PRJq6RTdUsdhuTjk%2BL00tuTMIm58%2FHVHnTpNWUtkrpGJKLwSKDtIwj9%2FIhxumMIPVUZNA6jXMuMznJaL0KCvvz2Ys8OsOeVWjD6gfcg%2FeYgbXXOPNMBB9jc6kDa3xeo05g3%2FZclkEZPaUnF%2Bc0BUH5HZBb2KP%2BC3Pp1PE&X-Amz-Signature=13801479abc69a616fcede0e8673d6f46cd833933dd76681b230fe7dab9ca032&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
