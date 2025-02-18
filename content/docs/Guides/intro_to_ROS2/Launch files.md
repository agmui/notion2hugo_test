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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UDWQ6HE%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T020845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDMUnXo9OMN6I%2BqiwtIAvP4KI4tLk%2B74gQ%2Flp03b7JN9QIhAPGDlTmcNuOkZe3As7JpylkBhID3kaYyvMLuKhBPj9gdKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywcCj3HXagzetOIFgq3AN%2BpGmJQIjwsDUeHnB0ea%2FtiatM%2FnGlbXjr%2F%2BKiFUCz81NdIdk3ToA7L7lB3Ah%2F%2FuC19shgDTQTjxVS%2F3wGeg0G%2BMpLLPGWvVGJY3OGT6cVAcEai7oqd9nZaQ1ZI0ZR3wLMFf%2F1hWge8lFj8k0KrK95Hj%2F3%2BrBw6h2ksPpRaupNyrbGigxA%2FsSi4TVFfYQXCPzNxsbg4veKWUq4Oq19gKWBfqwJFodQPeuMs84HCiQVy%2BvjjHFboyWustDLwyYiNJqpy0FxwX30zABD3kU2Ms49QjcWbo73rOL4smrg%2FbtT%2F1PCy4e1OmF3GAXs%2Flb262W6LT7N6xFjDB7zYeuwVowC7O4k3xcFKECjGaeqgffTkEpROaCTVMkX9UuZKvZrlnwNQJhkDR6PjwWDGIymF%2F2mqhskRUMQ7ZSc9chI0s%2BkWoGKzSFeHljBSRseXs2m0Ad3Lq1G%2Fp7YdZflyy8ulmrjVFZ85CwhLC3DUuNnwny%2Bz%2B9HH%2BUx%2BxllZNpm44nnkmFTdnlVLYB%2BbyWv3LM3tl4Wy3QkkWeTqmT%2FA7LiVVFQANXRjbBq803oEDVrbHJsIW3v5pyQyJuV5SRiAC4iqaF37H1baVk3V7Ne2lbDO80RPmWKPxY9OzZs%2FZcdDTDJxc%2B9BjqkAfALcWVIh1z06oHKJ6lrdWeonjYTc4IGW87Mrx6A%2BoOwZD9MXCt0Ir4xEYt3rhve3KzMK%2FNHbjks%2FBN4pAqsT4t09ATjgsepUCygDzA5Mdl8ufPHki915E%2Bv6bLGVyFVkQAxzjgaSwX85oUsZcohDPf%2FaEgWLK6Y5oYoO9EfNQ1LSLtvRF3tx%2FUUkl%2FrgFwUvhwpqlSt%2BrrJxpcObqCVC6ZxP6B2&X-Amz-Signature=d518b731e7287aac7c91fe4b8cafdc470b73945280333d73cc357794ae2564ea&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UDWQ6HE%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T020845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDMUnXo9OMN6I%2BqiwtIAvP4KI4tLk%2B74gQ%2Flp03b7JN9QIhAPGDlTmcNuOkZe3As7JpylkBhID3kaYyvMLuKhBPj9gdKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywcCj3HXagzetOIFgq3AN%2BpGmJQIjwsDUeHnB0ea%2FtiatM%2FnGlbXjr%2F%2BKiFUCz81NdIdk3ToA7L7lB3Ah%2F%2FuC19shgDTQTjxVS%2F3wGeg0G%2BMpLLPGWvVGJY3OGT6cVAcEai7oqd9nZaQ1ZI0ZR3wLMFf%2F1hWge8lFj8k0KrK95Hj%2F3%2BrBw6h2ksPpRaupNyrbGigxA%2FsSi4TVFfYQXCPzNxsbg4veKWUq4Oq19gKWBfqwJFodQPeuMs84HCiQVy%2BvjjHFboyWustDLwyYiNJqpy0FxwX30zABD3kU2Ms49QjcWbo73rOL4smrg%2FbtT%2F1PCy4e1OmF3GAXs%2Flb262W6LT7N6xFjDB7zYeuwVowC7O4k3xcFKECjGaeqgffTkEpROaCTVMkX9UuZKvZrlnwNQJhkDR6PjwWDGIymF%2F2mqhskRUMQ7ZSc9chI0s%2BkWoGKzSFeHljBSRseXs2m0Ad3Lq1G%2Fp7YdZflyy8ulmrjVFZ85CwhLC3DUuNnwny%2Bz%2B9HH%2BUx%2BxllZNpm44nnkmFTdnlVLYB%2BbyWv3LM3tl4Wy3QkkWeTqmT%2FA7LiVVFQANXRjbBq803oEDVrbHJsIW3v5pyQyJuV5SRiAC4iqaF37H1baVk3V7Ne2lbDO80RPmWKPxY9OzZs%2FZcdDTDJxc%2B9BjqkAfALcWVIh1z06oHKJ6lrdWeonjYTc4IGW87Mrx6A%2BoOwZD9MXCt0Ir4xEYt3rhve3KzMK%2FNHbjks%2FBN4pAqsT4t09ATjgsepUCygDzA5Mdl8ufPHki915E%2Bv6bLGVyFVkQAxzjgaSwX85oUsZcohDPf%2FaEgWLK6Y5oYoO9EfNQ1LSLtvRF3tx%2FUUkl%2FrgFwUvhwpqlSt%2BrrJxpcObqCVC6ZxP6B2&X-Amz-Signature=638fc81cc6fd13d3990b37bec2fab4c657733bcca98dafabd3a245a68d0b85d6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UDWQ6HE%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T020845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDMUnXo9OMN6I%2BqiwtIAvP4KI4tLk%2B74gQ%2Flp03b7JN9QIhAPGDlTmcNuOkZe3As7JpylkBhID3kaYyvMLuKhBPj9gdKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywcCj3HXagzetOIFgq3AN%2BpGmJQIjwsDUeHnB0ea%2FtiatM%2FnGlbXjr%2F%2BKiFUCz81NdIdk3ToA7L7lB3Ah%2F%2FuC19shgDTQTjxVS%2F3wGeg0G%2BMpLLPGWvVGJY3OGT6cVAcEai7oqd9nZaQ1ZI0ZR3wLMFf%2F1hWge8lFj8k0KrK95Hj%2F3%2BrBw6h2ksPpRaupNyrbGigxA%2FsSi4TVFfYQXCPzNxsbg4veKWUq4Oq19gKWBfqwJFodQPeuMs84HCiQVy%2BvjjHFboyWustDLwyYiNJqpy0FxwX30zABD3kU2Ms49QjcWbo73rOL4smrg%2FbtT%2F1PCy4e1OmF3GAXs%2Flb262W6LT7N6xFjDB7zYeuwVowC7O4k3xcFKECjGaeqgffTkEpROaCTVMkX9UuZKvZrlnwNQJhkDR6PjwWDGIymF%2F2mqhskRUMQ7ZSc9chI0s%2BkWoGKzSFeHljBSRseXs2m0Ad3Lq1G%2Fp7YdZflyy8ulmrjVFZ85CwhLC3DUuNnwny%2Bz%2B9HH%2BUx%2BxllZNpm44nnkmFTdnlVLYB%2BbyWv3LM3tl4Wy3QkkWeTqmT%2FA7LiVVFQANXRjbBq803oEDVrbHJsIW3v5pyQyJuV5SRiAC4iqaF37H1baVk3V7Ne2lbDO80RPmWKPxY9OzZs%2FZcdDTDJxc%2B9BjqkAfALcWVIh1z06oHKJ6lrdWeonjYTc4IGW87Mrx6A%2BoOwZD9MXCt0Ir4xEYt3rhve3KzMK%2FNHbjks%2FBN4pAqsT4t09ATjgsepUCygDzA5Mdl8ufPHki915E%2Bv6bLGVyFVkQAxzjgaSwX85oUsZcohDPf%2FaEgWLK6Y5oYoO9EfNQ1LSLtvRF3tx%2FUUkl%2FrgFwUvhwpqlSt%2BrrJxpcObqCVC6ZxP6B2&X-Amz-Signature=5aac13e3bca10c0cef30715c63876f202cd0a1a41e9ef236e83e02987aced17b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
