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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDOLKIAZ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T181134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5e9s71FuJAqZye%2Bfpkg%2FLLdnkyfJg1qCa%2BluRlYFkrwIgDHyQUmfdITDBWszlTvpqsTkVV5wDO4sXHnBToRiuIE4q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDOl8sCgPIFlDSOQNJSrcAzkUxECC1TM8WqlaLZy0svR%2FSyN9c7HdWhD1h%2B3paz5Vnz5ugJGHv891Hz14ykS60uCs53WArmCqMrANbPO3yYr58tr5IbprHuwxJ3oBMu6tgvhsEIJurO9UVjlEEXQ7%2B0Qsxn8kb%2B1Mu4JvkM%2B2ne3%2BTgzNz3tfB7%2BtjQHcVP7fMwBB33g%2Byw8Dnryqij1pRB4LSndq4MvO5aXNmsqfY6Y5%2Bfb6sdZPoOQjtIdbXqQZUYMqZGHnF%2BnDjDAiSzaH7oUtghNqERSQ6mMLuDqBKiU5ljdbO%2FmkcHWOqAR338J%2FOPVERJ2eNDCT9WraJmgp%2F7shXFTLJXDsqPVQTDlHhsqP6Zb4fhLL6P4KOcpTya8W58R%2Fm2vXDxKILRwHuISQtUiM3c6coTkD8KQA%2FsYgJWzJbdUCzDy9wS4E91fjRXVgYF3anm4wLw%2BaagBsrro7h4vGGgzJo%2BuVaqOL0PlX04iuxFnQCJKnYbkuYLvxzkeQX5%2Bi4CtO9Qp83G1qoKGyaUIbrOXq9j3QwMfqNfxQeiQTrECylEjC6A605FDNcNiTzopUhnowrOlhw0ei7MWVuMyaQOFQu1Y094216ixPUFqoeBzFZNWhtYr7ujk7YFpcpsjF9nayTFcn4L8RMKbf%2F78GOqUBND0EdUlTQLysjrjaqTEnsCKM2S5MHnkKHAfq0UVw9fo1rMTi30GYQYkBPojO5zCfnD7BY7FslE75BbazdrqE4kN2%2BkFc%2BuQGqpkpD1wqfOROHbKO2Gn2Vx7Px74a51FfP5xFYA8tcTP245KOHOL7CuJYSEmKuqy3DXVeRJqc8Ww%2BRN82zuSaUlu75MX%2B6W5aooYKdic8mCrVHCWL8iboK4uWPvOj&X-Amz-Signature=ffdf10d9886f12b63ec667dcfd212849477b048ee73832a2e6d3161b7e2f948a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDOLKIAZ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T181134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5e9s71FuJAqZye%2Bfpkg%2FLLdnkyfJg1qCa%2BluRlYFkrwIgDHyQUmfdITDBWszlTvpqsTkVV5wDO4sXHnBToRiuIE4q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDOl8sCgPIFlDSOQNJSrcAzkUxECC1TM8WqlaLZy0svR%2FSyN9c7HdWhD1h%2B3paz5Vnz5ugJGHv891Hz14ykS60uCs53WArmCqMrANbPO3yYr58tr5IbprHuwxJ3oBMu6tgvhsEIJurO9UVjlEEXQ7%2B0Qsxn8kb%2B1Mu4JvkM%2B2ne3%2BTgzNz3tfB7%2BtjQHcVP7fMwBB33g%2Byw8Dnryqij1pRB4LSndq4MvO5aXNmsqfY6Y5%2Bfb6sdZPoOQjtIdbXqQZUYMqZGHnF%2BnDjDAiSzaH7oUtghNqERSQ6mMLuDqBKiU5ljdbO%2FmkcHWOqAR338J%2FOPVERJ2eNDCT9WraJmgp%2F7shXFTLJXDsqPVQTDlHhsqP6Zb4fhLL6P4KOcpTya8W58R%2Fm2vXDxKILRwHuISQtUiM3c6coTkD8KQA%2FsYgJWzJbdUCzDy9wS4E91fjRXVgYF3anm4wLw%2BaagBsrro7h4vGGgzJo%2BuVaqOL0PlX04iuxFnQCJKnYbkuYLvxzkeQX5%2Bi4CtO9Qp83G1qoKGyaUIbrOXq9j3QwMfqNfxQeiQTrECylEjC6A605FDNcNiTzopUhnowrOlhw0ei7MWVuMyaQOFQu1Y094216ixPUFqoeBzFZNWhtYr7ujk7YFpcpsjF9nayTFcn4L8RMKbf%2F78GOqUBND0EdUlTQLysjrjaqTEnsCKM2S5MHnkKHAfq0UVw9fo1rMTi30GYQYkBPojO5zCfnD7BY7FslE75BbazdrqE4kN2%2BkFc%2BuQGqpkpD1wqfOROHbKO2Gn2Vx7Px74a51FfP5xFYA8tcTP245KOHOL7CuJYSEmKuqy3DXVeRJqc8Ww%2BRN82zuSaUlu75MX%2B6W5aooYKdic8mCrVHCWL8iboK4uWPvOj&X-Amz-Signature=044a470cb9b5f30b05e53e0d455bb56ca51fbc0e812bf8d62fb436f0ac718d9c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDOLKIAZ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T181134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5e9s71FuJAqZye%2Bfpkg%2FLLdnkyfJg1qCa%2BluRlYFkrwIgDHyQUmfdITDBWszlTvpqsTkVV5wDO4sXHnBToRiuIE4q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDOl8sCgPIFlDSOQNJSrcAzkUxECC1TM8WqlaLZy0svR%2FSyN9c7HdWhD1h%2B3paz5Vnz5ugJGHv891Hz14ykS60uCs53WArmCqMrANbPO3yYr58tr5IbprHuwxJ3oBMu6tgvhsEIJurO9UVjlEEXQ7%2B0Qsxn8kb%2B1Mu4JvkM%2B2ne3%2BTgzNz3tfB7%2BtjQHcVP7fMwBB33g%2Byw8Dnryqij1pRB4LSndq4MvO5aXNmsqfY6Y5%2Bfb6sdZPoOQjtIdbXqQZUYMqZGHnF%2BnDjDAiSzaH7oUtghNqERSQ6mMLuDqBKiU5ljdbO%2FmkcHWOqAR338J%2FOPVERJ2eNDCT9WraJmgp%2F7shXFTLJXDsqPVQTDlHhsqP6Zb4fhLL6P4KOcpTya8W58R%2Fm2vXDxKILRwHuISQtUiM3c6coTkD8KQA%2FsYgJWzJbdUCzDy9wS4E91fjRXVgYF3anm4wLw%2BaagBsrro7h4vGGgzJo%2BuVaqOL0PlX04iuxFnQCJKnYbkuYLvxzkeQX5%2Bi4CtO9Qp83G1qoKGyaUIbrOXq9j3QwMfqNfxQeiQTrECylEjC6A605FDNcNiTzopUhnowrOlhw0ei7MWVuMyaQOFQu1Y094216ixPUFqoeBzFZNWhtYr7ujk7YFpcpsjF9nayTFcn4L8RMKbf%2F78GOqUBND0EdUlTQLysjrjaqTEnsCKM2S5MHnkKHAfq0UVw9fo1rMTi30GYQYkBPojO5zCfnD7BY7FslE75BbazdrqE4kN2%2BkFc%2BuQGqpkpD1wqfOROHbKO2Gn2Vx7Px74a51FfP5xFYA8tcTP245KOHOL7CuJYSEmKuqy3DXVeRJqc8Ww%2BRN82zuSaUlu75MX%2B6W5aooYKdic8mCrVHCWL8iboK4uWPvOj&X-Amz-Signature=8efdc946fca7b422644521b1c5b970f7d057124d116d254ea4d78b20f06923a5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
