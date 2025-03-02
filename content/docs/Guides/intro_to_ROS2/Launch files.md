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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYKEWQ6R%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICb2C3lXDdHLc1Xp5K1xfjEeic6wdHWnittb7GPA1yncAiA47nGmOoEUfDlQSQnNccmay%2BaevWTRBVtSAggPfI8TkiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4LD6nbbuhK%2F3h8tMKtwDmPFjF0F46cGcUlEf%2FIJ%2BY5iAv8xkNUgXuXQY%2BHYhmcjc6iuJ7XFAj8mcoLKi89fk3e%2Fod5Qm41rRK5wTXjqyvC8Xu5mVWnLWlxc3BjIbB4a6SJVBeYVRNZoULZT8SU6NZogbF8rykjUdY4V67E7nUSc%2FXBPCyxWQ%2BHXAgbFH5RiBw%2FJIZaQJr3ZhjusDsiQM4KZi0ulKGl%2FOkcy1%2Bn%2BybSqrrWyV2guDv4E1TaUQgzsoQDgx3j4gNmaG6WkCcVH6IdWynWO6nVVmj3QBR71XacTqFMPTeq3h5oE7EsD%2BzSC%2FTvyHjo%2F35NbLYSMvRrKzPtyDVE8ewvELlAF96FjeW7PZF6hlibsfD1Hmh6bjFlczat6OMRiFHsL1BHuynLdj%2B3VM3TsJeV9opTr4AANQiDmms5KfPUJjaFeW%2F0Sn2B4%2B5Gb6Ewf99DEYZJkrYcBsG7sfIBPNY%2Fmb4oY39VoEyI7%2F44jTZcEN8o8B3v%2BDw6E%2BVnp3X6lviWefF2GlfwB%2BPyz0LjRKxJ4npz0%2BZsxXzThKdJYK8nXj9DIfAUcRAKrSgJ%2Bq4KrilKwSDq12y4yAJjWDxzkuhjiVXawE0gkKxdwkmTpxDLMAp9UCs6nV8DB9%2BNKzEskkbWa0uUYwrJqSvgY6pgEfDhHQIM54r8TVobM3kKG%2BpSPZjWTN%2FLD%2F7MPsarbXYH2KFrG7sHlp3gIGKBwXnnZdlZfw38fuA0pOiCPG%2BQu1WoPSkDzJmrfga2FapCCk6MtFNvx1fLarZMrfOxnphsvVGr%2F9w7WPz9WIzcx%2BnJ7g0BYA7wEUbNxvxz02KlHYaOXruj7lHK4sIJxNRMnf%2FIbXIohGMYN0donzzA0oVxANQxtgUneR&X-Amz-Signature=a92bc0ea8ee9c464539fbc9e74db5e80a769e05edd5a2cdb3bf9241b09ab1ca6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYKEWQ6R%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICb2C3lXDdHLc1Xp5K1xfjEeic6wdHWnittb7GPA1yncAiA47nGmOoEUfDlQSQnNccmay%2BaevWTRBVtSAggPfI8TkiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4LD6nbbuhK%2F3h8tMKtwDmPFjF0F46cGcUlEf%2FIJ%2BY5iAv8xkNUgXuXQY%2BHYhmcjc6iuJ7XFAj8mcoLKi89fk3e%2Fod5Qm41rRK5wTXjqyvC8Xu5mVWnLWlxc3BjIbB4a6SJVBeYVRNZoULZT8SU6NZogbF8rykjUdY4V67E7nUSc%2FXBPCyxWQ%2BHXAgbFH5RiBw%2FJIZaQJr3ZhjusDsiQM4KZi0ulKGl%2FOkcy1%2Bn%2BybSqrrWyV2guDv4E1TaUQgzsoQDgx3j4gNmaG6WkCcVH6IdWynWO6nVVmj3QBR71XacTqFMPTeq3h5oE7EsD%2BzSC%2FTvyHjo%2F35NbLYSMvRrKzPtyDVE8ewvELlAF96FjeW7PZF6hlibsfD1Hmh6bjFlczat6OMRiFHsL1BHuynLdj%2B3VM3TsJeV9opTr4AANQiDmms5KfPUJjaFeW%2F0Sn2B4%2B5Gb6Ewf99DEYZJkrYcBsG7sfIBPNY%2Fmb4oY39VoEyI7%2F44jTZcEN8o8B3v%2BDw6E%2BVnp3X6lviWefF2GlfwB%2BPyz0LjRKxJ4npz0%2BZsxXzThKdJYK8nXj9DIfAUcRAKrSgJ%2Bq4KrilKwSDq12y4yAJjWDxzkuhjiVXawE0gkKxdwkmTpxDLMAp9UCs6nV8DB9%2BNKzEskkbWa0uUYwrJqSvgY6pgEfDhHQIM54r8TVobM3kKG%2BpSPZjWTN%2FLD%2F7MPsarbXYH2KFrG7sHlp3gIGKBwXnnZdlZfw38fuA0pOiCPG%2BQu1WoPSkDzJmrfga2FapCCk6MtFNvx1fLarZMrfOxnphsvVGr%2F9w7WPz9WIzcx%2BnJ7g0BYA7wEUbNxvxz02KlHYaOXruj7lHK4sIJxNRMnf%2FIbXIohGMYN0donzzA0oVxANQxtgUneR&X-Amz-Signature=df1147c8e64f3e7e0e0ae41fc2a60f44e24029c50712f299c2cdfe7811a46fee&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYKEWQ6R%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICb2C3lXDdHLc1Xp5K1xfjEeic6wdHWnittb7GPA1yncAiA47nGmOoEUfDlQSQnNccmay%2BaevWTRBVtSAggPfI8TkiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4LD6nbbuhK%2F3h8tMKtwDmPFjF0F46cGcUlEf%2FIJ%2BY5iAv8xkNUgXuXQY%2BHYhmcjc6iuJ7XFAj8mcoLKi89fk3e%2Fod5Qm41rRK5wTXjqyvC8Xu5mVWnLWlxc3BjIbB4a6SJVBeYVRNZoULZT8SU6NZogbF8rykjUdY4V67E7nUSc%2FXBPCyxWQ%2BHXAgbFH5RiBw%2FJIZaQJr3ZhjusDsiQM4KZi0ulKGl%2FOkcy1%2Bn%2BybSqrrWyV2guDv4E1TaUQgzsoQDgx3j4gNmaG6WkCcVH6IdWynWO6nVVmj3QBR71XacTqFMPTeq3h5oE7EsD%2BzSC%2FTvyHjo%2F35NbLYSMvRrKzPtyDVE8ewvELlAF96FjeW7PZF6hlibsfD1Hmh6bjFlczat6OMRiFHsL1BHuynLdj%2B3VM3TsJeV9opTr4AANQiDmms5KfPUJjaFeW%2F0Sn2B4%2B5Gb6Ewf99DEYZJkrYcBsG7sfIBPNY%2Fmb4oY39VoEyI7%2F44jTZcEN8o8B3v%2BDw6E%2BVnp3X6lviWefF2GlfwB%2BPyz0LjRKxJ4npz0%2BZsxXzThKdJYK8nXj9DIfAUcRAKrSgJ%2Bq4KrilKwSDq12y4yAJjWDxzkuhjiVXawE0gkKxdwkmTpxDLMAp9UCs6nV8DB9%2BNKzEskkbWa0uUYwrJqSvgY6pgEfDhHQIM54r8TVobM3kKG%2BpSPZjWTN%2FLD%2F7MPsarbXYH2KFrG7sHlp3gIGKBwXnnZdlZfw38fuA0pOiCPG%2BQu1WoPSkDzJmrfga2FapCCk6MtFNvx1fLarZMrfOxnphsvVGr%2F9w7WPz9WIzcx%2BnJ7g0BYA7wEUbNxvxz02KlHYaOXruj7lHK4sIJxNRMnf%2FIbXIohGMYN0donzzA0oVxANQxtgUneR&X-Amz-Signature=077276e558e80ac9a383b93b093f6f9217e6fa44275b1230cf7273aaca4775fc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
