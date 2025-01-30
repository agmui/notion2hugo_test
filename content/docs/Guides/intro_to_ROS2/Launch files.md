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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XXAEI4L%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy6DfvReVUzEuQqVOXjYERCCN9PSp5nnUMfvN2aZ1hawIgTryJTIRfV5XxXzg638tbc6m8SuQ63PQoD06CbBb8cisqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNKKpYzuk4L3F1%2F21CrcA%2FDURD7Jw8g%2BvI9rhMA0Toz2e6OkYInVdHrGJtuJr9ipsJh5Ep3mK6A82Ag73hAdxRkOzlKjPbz3h8G87HUZ%2FbXty7S6KCjxgGRBtJO%2BFfx8i78capEQ0tm0%2F7DyCXPJRXnsJhry3K9WB0hGcYYCjjVHZypVd%2FNa%2Bkcz5WdMStlPbg%2BYNHx5uk1Y6hy1eycyzdv5oJaatwimMRlUbh0uwZ5%2FmvBMcBJ60FxWjUF6sbU1jI%2BKVgiZ04aoVboYfJUbv44jcd3hEcdEvPobJ3YpmwxxKPp%2F%2FWciWN%2B5C1d8%2FiKq0hrdb29ex53%2FZ%2FTp%2F3FS%2FukLX2YxR1NkdVFrSjCdiytsuAqxn1lH%2FzCl8yHQnjhInncsui2I9sy%2BQ65xPh9hdroXXskNW9xpAnZaMJgv%2FszfeLdMJHULwK%2B5%2Ft9ZxiW8fgD7jm4QPOvHYBvD0suPykTNnjhbQUF1aazdq0e%2Bf3Wxwk3ofUPutGhfWuSf1OM2JS0gQU45ngpQunCs2X71LBHPdZg6mrLmp5n3WvU6Q9s2P2PLqIQ6Pk2jnN5hRREx5pjeN2%2FFeqiATVxrjNrGN2i%2BXgF7cypZ48ufLDLLI9yXV5MHFCyKlr9gTiJERpQc9jTM%2Fo7234Vz2ODgMIGr7bwGOqUBCWmx3d0EnC7vW99wfvXdgBNRVHKK%2B3XW2eNKprIlmScwaRkDTCN0dh5Op26ypa4PTNPVQCuc%2FFm9ltxhwBkKk%2FiSnaBBXfbOpQl%2FwKBqrxrJCB%2BsvDM6nNPKhf4SYRqrgA5mddC02t2%2B3R4291tJkbnqvufXTWE%2FhnB1%2FsrMxNlyk0eJrsJ6pfhREs5om6TFAxqZVN%2FURAVHmqR6swJ3xVlxcLnc&X-Amz-Signature=fd7cc9390603ada6d0d0bc940d40ef5956e8cf398498eff409da0f19a84fbe27&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XXAEI4L%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy6DfvReVUzEuQqVOXjYERCCN9PSp5nnUMfvN2aZ1hawIgTryJTIRfV5XxXzg638tbc6m8SuQ63PQoD06CbBb8cisqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNKKpYzuk4L3F1%2F21CrcA%2FDURD7Jw8g%2BvI9rhMA0Toz2e6OkYInVdHrGJtuJr9ipsJh5Ep3mK6A82Ag73hAdxRkOzlKjPbz3h8G87HUZ%2FbXty7S6KCjxgGRBtJO%2BFfx8i78capEQ0tm0%2F7DyCXPJRXnsJhry3K9WB0hGcYYCjjVHZypVd%2FNa%2Bkcz5WdMStlPbg%2BYNHx5uk1Y6hy1eycyzdv5oJaatwimMRlUbh0uwZ5%2FmvBMcBJ60FxWjUF6sbU1jI%2BKVgiZ04aoVboYfJUbv44jcd3hEcdEvPobJ3YpmwxxKPp%2F%2FWciWN%2B5C1d8%2FiKq0hrdb29ex53%2FZ%2FTp%2F3FS%2FukLX2YxR1NkdVFrSjCdiytsuAqxn1lH%2FzCl8yHQnjhInncsui2I9sy%2BQ65xPh9hdroXXskNW9xpAnZaMJgv%2FszfeLdMJHULwK%2B5%2Ft9ZxiW8fgD7jm4QPOvHYBvD0suPykTNnjhbQUF1aazdq0e%2Bf3Wxwk3ofUPutGhfWuSf1OM2JS0gQU45ngpQunCs2X71LBHPdZg6mrLmp5n3WvU6Q9s2P2PLqIQ6Pk2jnN5hRREx5pjeN2%2FFeqiATVxrjNrGN2i%2BXgF7cypZ48ufLDLLI9yXV5MHFCyKlr9gTiJERpQc9jTM%2Fo7234Vz2ODgMIGr7bwGOqUBCWmx3d0EnC7vW99wfvXdgBNRVHKK%2B3XW2eNKprIlmScwaRkDTCN0dh5Op26ypa4PTNPVQCuc%2FFm9ltxhwBkKk%2FiSnaBBXfbOpQl%2FwKBqrxrJCB%2BsvDM6nNPKhf4SYRqrgA5mddC02t2%2B3R4291tJkbnqvufXTWE%2FhnB1%2FsrMxNlyk0eJrsJ6pfhREs5om6TFAxqZVN%2FURAVHmqR6swJ3xVlxcLnc&X-Amz-Signature=31961068fd7b2661f5fd9b37bc5cbd11af35909fbd42551fb1468b00a08f9923&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XXAEI4L%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy6DfvReVUzEuQqVOXjYERCCN9PSp5nnUMfvN2aZ1hawIgTryJTIRfV5XxXzg638tbc6m8SuQ63PQoD06CbBb8cisqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNKKpYzuk4L3F1%2F21CrcA%2FDURD7Jw8g%2BvI9rhMA0Toz2e6OkYInVdHrGJtuJr9ipsJh5Ep3mK6A82Ag73hAdxRkOzlKjPbz3h8G87HUZ%2FbXty7S6KCjxgGRBtJO%2BFfx8i78capEQ0tm0%2F7DyCXPJRXnsJhry3K9WB0hGcYYCjjVHZypVd%2FNa%2Bkcz5WdMStlPbg%2BYNHx5uk1Y6hy1eycyzdv5oJaatwimMRlUbh0uwZ5%2FmvBMcBJ60FxWjUF6sbU1jI%2BKVgiZ04aoVboYfJUbv44jcd3hEcdEvPobJ3YpmwxxKPp%2F%2FWciWN%2B5C1d8%2FiKq0hrdb29ex53%2FZ%2FTp%2F3FS%2FukLX2YxR1NkdVFrSjCdiytsuAqxn1lH%2FzCl8yHQnjhInncsui2I9sy%2BQ65xPh9hdroXXskNW9xpAnZaMJgv%2FszfeLdMJHULwK%2B5%2Ft9ZxiW8fgD7jm4QPOvHYBvD0suPykTNnjhbQUF1aazdq0e%2Bf3Wxwk3ofUPutGhfWuSf1OM2JS0gQU45ngpQunCs2X71LBHPdZg6mrLmp5n3WvU6Q9s2P2PLqIQ6Pk2jnN5hRREx5pjeN2%2FFeqiATVxrjNrGN2i%2BXgF7cypZ48ufLDLLI9yXV5MHFCyKlr9gTiJERpQc9jTM%2Fo7234Vz2ODgMIGr7bwGOqUBCWmx3d0EnC7vW99wfvXdgBNRVHKK%2B3XW2eNKprIlmScwaRkDTCN0dh5Op26ypa4PTNPVQCuc%2FFm9ltxhwBkKk%2FiSnaBBXfbOpQl%2FwKBqrxrJCB%2BsvDM6nNPKhf4SYRqrgA5mddC02t2%2B3R4291tJkbnqvufXTWE%2FhnB1%2FsrMxNlyk0eJrsJ6pfhREs5om6TFAxqZVN%2FURAVHmqR6swJ3xVlxcLnc&X-Amz-Signature=58da81c07b81a33855870ec7e59d64b8f786ff7b220e928dd968f723c46b2ad9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
