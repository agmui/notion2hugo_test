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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DDADR7G%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T230741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCID2S93r09SZNuqs1LJI8%2BEoUKJ%2BUbA9nhEwWxZa7epULAiEA%2FvIUacvDGujbPU7axIQVgxICTPKeQvamRlRWU4h30iEqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhY48teLDCsyL6YwyrcA0SPFWxB8PGZpwgdVXlwtdRJ9dA7RhPU%2BlFxW%2FD1udt%2Fc0m%2BRZbmKzAv%2FbSStA%2BiIpKmv6dxycNfWdpD812Ug6VTq11CrIw01%2BR7%2FUhln8qqcZsG4H%2BFiCF%2ByUEnrNyPOaSk7ayEXta3o9RkdsCVqWbS8DeMcDQx2Hl1otr%2FzSHbFu0wQMxphh52k3mUw9P0ym0z%2FwcoCuQRv85UVzs1kzpv%2FM3NjK6E2hnX1FHXCwXmOGLFCJLJnHJFeTB1CWcz%2FELJ55mP9ywamkrsb5eqHKDwM5TSVyDIkKUG0WNDyIB9xtd4%2F%2B5hxISx%2BGQ5Noiy5iryhKbAWwgz8uQmbqvs4U6E63%2BlAyGrQnM7FeIkJNZKq%2B9HvS6KtzjUbbJizhls4AaMOo7llNRRPh%2B0hNsFu%2BCqFwnmW%2FLtUNdaDanVJz%2FTOCZIiLjeHpMXWHUJwtzagi7Vym3tUJp%2F8rgGwTgxP2kXbbggYw5AFnhB5C9SjiW0tR4GmXdOkr%2Fdd4xgb72gQ%2Fvw8qkR%2FXr9vsKldsHmFiaHQWmWAxkStd2gvwNDRz7M7AfGicCwvL8Ha2hLe%2FJ30r2xKQ0xSzkSVqKK6ndvLJSyRvMZLgPMTqKUPoJNTpBLIR5%2BEit8tR0PkPpGMMvMkMAGOqUBxkCdvCr9wd%2FjamTmt2384LHZuoWKvf6NmMG5zMaBcA1T9lbpoGv%2BqMPBp8uR5%2F4RDG%2FjS0EA0VDbwUCvX9pCl7av3m5Sl4Nt8ATfK1Dtm7rb9fqGnQrP03X7DpL4I5T%2FA9bVTU7VhYKBQSyE13i%2FmBp%2FuNvw6dBGdqiO9%2FXkSwJbqgMKMOhQgyqKCdBeHGS4KGbjqAcdOX9WvcmSVfKuzFMtVwnW&X-Amz-Signature=03a8243ff25ba0891a4976ba942033ee869891c65e0058d33c28009b20869083&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DDADR7G%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T230741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCID2S93r09SZNuqs1LJI8%2BEoUKJ%2BUbA9nhEwWxZa7epULAiEA%2FvIUacvDGujbPU7axIQVgxICTPKeQvamRlRWU4h30iEqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhY48teLDCsyL6YwyrcA0SPFWxB8PGZpwgdVXlwtdRJ9dA7RhPU%2BlFxW%2FD1udt%2Fc0m%2BRZbmKzAv%2FbSStA%2BiIpKmv6dxycNfWdpD812Ug6VTq11CrIw01%2BR7%2FUhln8qqcZsG4H%2BFiCF%2ByUEnrNyPOaSk7ayEXta3o9RkdsCVqWbS8DeMcDQx2Hl1otr%2FzSHbFu0wQMxphh52k3mUw9P0ym0z%2FwcoCuQRv85UVzs1kzpv%2FM3NjK6E2hnX1FHXCwXmOGLFCJLJnHJFeTB1CWcz%2FELJ55mP9ywamkrsb5eqHKDwM5TSVyDIkKUG0WNDyIB9xtd4%2F%2B5hxISx%2BGQ5Noiy5iryhKbAWwgz8uQmbqvs4U6E63%2BlAyGrQnM7FeIkJNZKq%2B9HvS6KtzjUbbJizhls4AaMOo7llNRRPh%2B0hNsFu%2BCqFwnmW%2FLtUNdaDanVJz%2FTOCZIiLjeHpMXWHUJwtzagi7Vym3tUJp%2F8rgGwTgxP2kXbbggYw5AFnhB5C9SjiW0tR4GmXdOkr%2Fdd4xgb72gQ%2Fvw8qkR%2FXr9vsKldsHmFiaHQWmWAxkStd2gvwNDRz7M7AfGicCwvL8Ha2hLe%2FJ30r2xKQ0xSzkSVqKK6ndvLJSyRvMZLgPMTqKUPoJNTpBLIR5%2BEit8tR0PkPpGMMvMkMAGOqUBxkCdvCr9wd%2FjamTmt2384LHZuoWKvf6NmMG5zMaBcA1T9lbpoGv%2BqMPBp8uR5%2F4RDG%2FjS0EA0VDbwUCvX9pCl7av3m5Sl4Nt8ATfK1Dtm7rb9fqGnQrP03X7DpL4I5T%2FA9bVTU7VhYKBQSyE13i%2FmBp%2FuNvw6dBGdqiO9%2FXkSwJbqgMKMOhQgyqKCdBeHGS4KGbjqAcdOX9WvcmSVfKuzFMtVwnW&X-Amz-Signature=6512e32713d7241650d8a86391e3be984b39c58127913bad131576d9315d82cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DDADR7G%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T230741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCID2S93r09SZNuqs1LJI8%2BEoUKJ%2BUbA9nhEwWxZa7epULAiEA%2FvIUacvDGujbPU7axIQVgxICTPKeQvamRlRWU4h30iEqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhY48teLDCsyL6YwyrcA0SPFWxB8PGZpwgdVXlwtdRJ9dA7RhPU%2BlFxW%2FD1udt%2Fc0m%2BRZbmKzAv%2FbSStA%2BiIpKmv6dxycNfWdpD812Ug6VTq11CrIw01%2BR7%2FUhln8qqcZsG4H%2BFiCF%2ByUEnrNyPOaSk7ayEXta3o9RkdsCVqWbS8DeMcDQx2Hl1otr%2FzSHbFu0wQMxphh52k3mUw9P0ym0z%2FwcoCuQRv85UVzs1kzpv%2FM3NjK6E2hnX1FHXCwXmOGLFCJLJnHJFeTB1CWcz%2FELJ55mP9ywamkrsb5eqHKDwM5TSVyDIkKUG0WNDyIB9xtd4%2F%2B5hxISx%2BGQ5Noiy5iryhKbAWwgz8uQmbqvs4U6E63%2BlAyGrQnM7FeIkJNZKq%2B9HvS6KtzjUbbJizhls4AaMOo7llNRRPh%2B0hNsFu%2BCqFwnmW%2FLtUNdaDanVJz%2FTOCZIiLjeHpMXWHUJwtzagi7Vym3tUJp%2F8rgGwTgxP2kXbbggYw5AFnhB5C9SjiW0tR4GmXdOkr%2Fdd4xgb72gQ%2Fvw8qkR%2FXr9vsKldsHmFiaHQWmWAxkStd2gvwNDRz7M7AfGicCwvL8Ha2hLe%2FJ30r2xKQ0xSzkSVqKK6ndvLJSyRvMZLgPMTqKUPoJNTpBLIR5%2BEit8tR0PkPpGMMvMkMAGOqUBxkCdvCr9wd%2FjamTmt2384LHZuoWKvf6NmMG5zMaBcA1T9lbpoGv%2BqMPBp8uR5%2F4RDG%2FjS0EA0VDbwUCvX9pCl7av3m5Sl4Nt8ATfK1Dtm7rb9fqGnQrP03X7DpL4I5T%2FA9bVTU7VhYKBQSyE13i%2FmBp%2FuNvw6dBGdqiO9%2FXkSwJbqgMKMOhQgyqKCdBeHGS4KGbjqAcdOX9WvcmSVfKuzFMtVwnW&X-Amz-Signature=913369696aeee95f0c104b00ee94e8dbf377bb81d0d2e7345309baad7616dd8f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
