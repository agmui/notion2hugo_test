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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z34XQDN3%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T210919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDVaEJ6MhaFtwsl1vhe8HWbSXlJxnIokZEx2rNe%2FUVXUgIhAJMpe5e259KvieFXEN02xo0MPDnUg42GKxRcFO9xyN6PKv8DCBwQABoMNjM3NDIzMTgzODA1IgztNPhyvUhx46d3hv4q3ANR7cn%2F6yea3NXZ0mMsraNEsJ3dNsLq2li1%2F95L%2F%2F8ul6y3D0FJgdQ%2BdIe%2BWfK8mrbRO%2FoYcbQe86V1sCfxP4jpD86b8TQ95vxsfV3akpJlSW3GvZhhA4y1g4WkI%2F0kTluaWq91%2Fw1t2UdR%2BEZFeLfA%2FQfS9J7P0iUkP8MJWI9TOeWW3MgkaUnybGZ5NCa3b86RJ6wGj3QEYbj698RBJ8dlj2%2B3XEKOeiZf7SlEIuAn4HOTS6DU1c79%2BNgP8rtDLpP1hraPtB52IeITn1BDd36tDdVo727IwpAs3qUxuezcWML9N7MHWLQ8Pl8qIeOtKe67nmPWD6yq%2F6N0Vy2L7ryd8hdUTohBekG0nDjxKC9RiVH0gkbieAz5Rmb7x%2BjP%2FYkMvIdPGQdFSaV%2FzJojGfr%2FSQy%2BxWoYID%2FP3PuqSIyg%2FZo2FjZZlS8T9hjZAuhhO6CC%2FJr5adaxFR6RtqMvecqiZ7mRvoETSasFJEfXx9Wz65eD7hMFvgoZfaa2HnCMNrMRH1tMUyQ0G1ZWtEZvSiR0oxkoQ05qKBnf5IINGaPbGCHcAHr%2FDqndGrB0%2BBeli8L%2FpN1lPyGZZ1OK60KX2egjo6OJVEG6bR6rX3uUbRAReew5Dh2VwnBSXjC9JjDshf3BBjqkAYvq9r%2BQLat66AjCLjuWxyvcEgaG7bZ1EaqEEMSgy3VacOgp6HcHW4ehow6YM%2FuXDlFp%2F746m6%2BjTiAQCDOajT6KnUGGL0jTFqmXapFGOyqQ6uQXF0xYXT45J%2FKFyJz4cGeFo0XGHeKwj%2FBcAn3vvNAiziHdLWjG1ayKGQ3UQ8xZzt5NnjoGdFKnR%2FLDTSzAO68ti8M0epNnoPKS%2Fq0AAN%2Fm08rK&X-Amz-Signature=dd55c5d2e8149b33a2bdd1adb0606471ff1d42e3dfcfc32c5bc1893952cdfa03&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z34XQDN3%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T210919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDVaEJ6MhaFtwsl1vhe8HWbSXlJxnIokZEx2rNe%2FUVXUgIhAJMpe5e259KvieFXEN02xo0MPDnUg42GKxRcFO9xyN6PKv8DCBwQABoMNjM3NDIzMTgzODA1IgztNPhyvUhx46d3hv4q3ANR7cn%2F6yea3NXZ0mMsraNEsJ3dNsLq2li1%2F95L%2F%2F8ul6y3D0FJgdQ%2BdIe%2BWfK8mrbRO%2FoYcbQe86V1sCfxP4jpD86b8TQ95vxsfV3akpJlSW3GvZhhA4y1g4WkI%2F0kTluaWq91%2Fw1t2UdR%2BEZFeLfA%2FQfS9J7P0iUkP8MJWI9TOeWW3MgkaUnybGZ5NCa3b86RJ6wGj3QEYbj698RBJ8dlj2%2B3XEKOeiZf7SlEIuAn4HOTS6DU1c79%2BNgP8rtDLpP1hraPtB52IeITn1BDd36tDdVo727IwpAs3qUxuezcWML9N7MHWLQ8Pl8qIeOtKe67nmPWD6yq%2F6N0Vy2L7ryd8hdUTohBekG0nDjxKC9RiVH0gkbieAz5Rmb7x%2BjP%2FYkMvIdPGQdFSaV%2FzJojGfr%2FSQy%2BxWoYID%2FP3PuqSIyg%2FZo2FjZZlS8T9hjZAuhhO6CC%2FJr5adaxFR6RtqMvecqiZ7mRvoETSasFJEfXx9Wz65eD7hMFvgoZfaa2HnCMNrMRH1tMUyQ0G1ZWtEZvSiR0oxkoQ05qKBnf5IINGaPbGCHcAHr%2FDqndGrB0%2BBeli8L%2FpN1lPyGZZ1OK60KX2egjo6OJVEG6bR6rX3uUbRAReew5Dh2VwnBSXjC9JjDshf3BBjqkAYvq9r%2BQLat66AjCLjuWxyvcEgaG7bZ1EaqEEMSgy3VacOgp6HcHW4ehow6YM%2FuXDlFp%2F746m6%2BjTiAQCDOajT6KnUGGL0jTFqmXapFGOyqQ6uQXF0xYXT45J%2FKFyJz4cGeFo0XGHeKwj%2FBcAn3vvNAiziHdLWjG1ayKGQ3UQ8xZzt5NnjoGdFKnR%2FLDTSzAO68ti8M0epNnoPKS%2Fq0AAN%2Fm08rK&X-Amz-Signature=9238e20a33b201d3806722bd01ce93858422dd679ace4cdda044d3633ddffd6c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z34XQDN3%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T210919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDVaEJ6MhaFtwsl1vhe8HWbSXlJxnIokZEx2rNe%2FUVXUgIhAJMpe5e259KvieFXEN02xo0MPDnUg42GKxRcFO9xyN6PKv8DCBwQABoMNjM3NDIzMTgzODA1IgztNPhyvUhx46d3hv4q3ANR7cn%2F6yea3NXZ0mMsraNEsJ3dNsLq2li1%2F95L%2F%2F8ul6y3D0FJgdQ%2BdIe%2BWfK8mrbRO%2FoYcbQe86V1sCfxP4jpD86b8TQ95vxsfV3akpJlSW3GvZhhA4y1g4WkI%2F0kTluaWq91%2Fw1t2UdR%2BEZFeLfA%2FQfS9J7P0iUkP8MJWI9TOeWW3MgkaUnybGZ5NCa3b86RJ6wGj3QEYbj698RBJ8dlj2%2B3XEKOeiZf7SlEIuAn4HOTS6DU1c79%2BNgP8rtDLpP1hraPtB52IeITn1BDd36tDdVo727IwpAs3qUxuezcWML9N7MHWLQ8Pl8qIeOtKe67nmPWD6yq%2F6N0Vy2L7ryd8hdUTohBekG0nDjxKC9RiVH0gkbieAz5Rmb7x%2BjP%2FYkMvIdPGQdFSaV%2FzJojGfr%2FSQy%2BxWoYID%2FP3PuqSIyg%2FZo2FjZZlS8T9hjZAuhhO6CC%2FJr5adaxFR6RtqMvecqiZ7mRvoETSasFJEfXx9Wz65eD7hMFvgoZfaa2HnCMNrMRH1tMUyQ0G1ZWtEZvSiR0oxkoQ05qKBnf5IINGaPbGCHcAHr%2FDqndGrB0%2BBeli8L%2FpN1lPyGZZ1OK60KX2egjo6OJVEG6bR6rX3uUbRAReew5Dh2VwnBSXjC9JjDshf3BBjqkAYvq9r%2BQLat66AjCLjuWxyvcEgaG7bZ1EaqEEMSgy3VacOgp6HcHW4ehow6YM%2FuXDlFp%2F746m6%2BjTiAQCDOajT6KnUGGL0jTFqmXapFGOyqQ6uQXF0xYXT45J%2FKFyJz4cGeFo0XGHeKwj%2FBcAn3vvNAiziHdLWjG1ayKGQ3UQ8xZzt5NnjoGdFKnR%2FLDTSzAO68ti8M0epNnoPKS%2Fq0AAN%2Fm08rK&X-Amz-Signature=84f5dd7bf0a72d1e81ba89a3b5fd76c334143701248003d222a6ecd4209cc1af&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
