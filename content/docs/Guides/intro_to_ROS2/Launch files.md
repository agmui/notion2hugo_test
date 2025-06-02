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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644IFXRH3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T004433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQD5Uq08CE293BYbTfMyfx3KBCtsqXtlTSrrLzvB%2FPO4bgIgcdZqojfPnEQ7MyCSk1oj37kzwr18vo1DKy6QMbbQwvUqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNoVt%2FAbX95udGdnmyrcAzS76%2FI8sXrV22ee6uoAOGbHY7sZzq355aaFioVUxX0%2F5wMNUucnF9g0xO1cYn5O1wWiw8CDwPs48XpACvEl2z5x%2BKgNiyjDJe%2FKAA5Z0EjW%2F64SDk1TMl3nrpTKtzT43y0QzBeIYnkwqhdW77k19b%2Fqtv0Lr8%2FkO8GbZRAwWI8KD8teiNp3KkqtaIB9a40oKGZDeBSbYeiUHepXP4r1AL3ugWbHZlnvJdag6qABnu5xtcpgefCxax%2BRtZGTeVwQ1pv7L6rMYXFEHlXQRMjOdXDp706eEzP7wslnNRArzfQYaiuY0bL%2B07z5kaNomdlAeaI8mHi2D727b9Oz%2B%2FEt08wZ8NBCBCsBPZpN7yDhBrS4iosHHOV8azwvtp1hopFNzO0FZm3z9cq57Q%2BU8XsArRLH0bEmcD8uj28yyHWYydXp%2FgtWld2dfhoboEuHca5y2%2FTW7Dxk6boWbFi06lZ%2F7il8EnlHiR2FRqCBU8ZK2Aaot1d4xvvRVEif3OSdNr7xqy3mHANkTE4Ir4Y427S2mPzptha2LN%2Fzx8wFgKsv6e7HV3UuzUiTr9y0D%2F1NwQ3JzBCzhPoNWi0Jkq%2FRchV54QNZmXjuot7lzqJXuCdoWccb%2BvmPZd0c9D8T6SlGMPLO88EGOqUBOhAGKeSvyKhZ%2BHiWfCI4hk4XxvEHdfsl33LsAplMFom9pUktPXo7mgnygvXD5yeIS7cTqVYgqtWDR9tttlCHXE%2FWmufCqP1b1UuariOvUNcxQRJxajGOYX0Zi3ZhbS6QO0qDLAV1%2B59uXiWjJiHU2ysuNI9fq%2FKATOdG30NVmFx0ajzlue6Pb8L6q0OuIYP3oR3gkWxGgxOjpVrZMVY7m9PT12wy&X-Amz-Signature=d0d3382bc8e4986ae8b90f580d92753fe14e5481f30819bad2f105c0b69664b6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644IFXRH3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T004433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQD5Uq08CE293BYbTfMyfx3KBCtsqXtlTSrrLzvB%2FPO4bgIgcdZqojfPnEQ7MyCSk1oj37kzwr18vo1DKy6QMbbQwvUqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNoVt%2FAbX95udGdnmyrcAzS76%2FI8sXrV22ee6uoAOGbHY7sZzq355aaFioVUxX0%2F5wMNUucnF9g0xO1cYn5O1wWiw8CDwPs48XpACvEl2z5x%2BKgNiyjDJe%2FKAA5Z0EjW%2F64SDk1TMl3nrpTKtzT43y0QzBeIYnkwqhdW77k19b%2Fqtv0Lr8%2FkO8GbZRAwWI8KD8teiNp3KkqtaIB9a40oKGZDeBSbYeiUHepXP4r1AL3ugWbHZlnvJdag6qABnu5xtcpgefCxax%2BRtZGTeVwQ1pv7L6rMYXFEHlXQRMjOdXDp706eEzP7wslnNRArzfQYaiuY0bL%2B07z5kaNomdlAeaI8mHi2D727b9Oz%2B%2FEt08wZ8NBCBCsBPZpN7yDhBrS4iosHHOV8azwvtp1hopFNzO0FZm3z9cq57Q%2BU8XsArRLH0bEmcD8uj28yyHWYydXp%2FgtWld2dfhoboEuHca5y2%2FTW7Dxk6boWbFi06lZ%2F7il8EnlHiR2FRqCBU8ZK2Aaot1d4xvvRVEif3OSdNr7xqy3mHANkTE4Ir4Y427S2mPzptha2LN%2Fzx8wFgKsv6e7HV3UuzUiTr9y0D%2F1NwQ3JzBCzhPoNWi0Jkq%2FRchV54QNZmXjuot7lzqJXuCdoWccb%2BvmPZd0c9D8T6SlGMPLO88EGOqUBOhAGKeSvyKhZ%2BHiWfCI4hk4XxvEHdfsl33LsAplMFom9pUktPXo7mgnygvXD5yeIS7cTqVYgqtWDR9tttlCHXE%2FWmufCqP1b1UuariOvUNcxQRJxajGOYX0Zi3ZhbS6QO0qDLAV1%2B59uXiWjJiHU2ysuNI9fq%2FKATOdG30NVmFx0ajzlue6Pb8L6q0OuIYP3oR3gkWxGgxOjpVrZMVY7m9PT12wy&X-Amz-Signature=541e6fb6af6359e02bed6aaf27c7eeae09567159bcf1122b97bc4c0518445a95&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644IFXRH3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T004433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQD5Uq08CE293BYbTfMyfx3KBCtsqXtlTSrrLzvB%2FPO4bgIgcdZqojfPnEQ7MyCSk1oj37kzwr18vo1DKy6QMbbQwvUqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNoVt%2FAbX95udGdnmyrcAzS76%2FI8sXrV22ee6uoAOGbHY7sZzq355aaFioVUxX0%2F5wMNUucnF9g0xO1cYn5O1wWiw8CDwPs48XpACvEl2z5x%2BKgNiyjDJe%2FKAA5Z0EjW%2F64SDk1TMl3nrpTKtzT43y0QzBeIYnkwqhdW77k19b%2Fqtv0Lr8%2FkO8GbZRAwWI8KD8teiNp3KkqtaIB9a40oKGZDeBSbYeiUHepXP4r1AL3ugWbHZlnvJdag6qABnu5xtcpgefCxax%2BRtZGTeVwQ1pv7L6rMYXFEHlXQRMjOdXDp706eEzP7wslnNRArzfQYaiuY0bL%2B07z5kaNomdlAeaI8mHi2D727b9Oz%2B%2FEt08wZ8NBCBCsBPZpN7yDhBrS4iosHHOV8azwvtp1hopFNzO0FZm3z9cq57Q%2BU8XsArRLH0bEmcD8uj28yyHWYydXp%2FgtWld2dfhoboEuHca5y2%2FTW7Dxk6boWbFi06lZ%2F7il8EnlHiR2FRqCBU8ZK2Aaot1d4xvvRVEif3OSdNr7xqy3mHANkTE4Ir4Y427S2mPzptha2LN%2Fzx8wFgKsv6e7HV3UuzUiTr9y0D%2F1NwQ3JzBCzhPoNWi0Jkq%2FRchV54QNZmXjuot7lzqJXuCdoWccb%2BvmPZd0c9D8T6SlGMPLO88EGOqUBOhAGKeSvyKhZ%2BHiWfCI4hk4XxvEHdfsl33LsAplMFom9pUktPXo7mgnygvXD5yeIS7cTqVYgqtWDR9tttlCHXE%2FWmufCqP1b1UuariOvUNcxQRJxajGOYX0Zi3ZhbS6QO0qDLAV1%2B59uXiWjJiHU2ysuNI9fq%2FKATOdG30NVmFx0ajzlue6Pb8L6q0OuIYP3oR3gkWxGgxOjpVrZMVY7m9PT12wy&X-Amz-Signature=5a39d6e7f8418b47396e225f9773004a4448556974ef7685a6e089138c8f42ca&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
