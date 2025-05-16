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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMLM7X7Q%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T140852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGq4Ia%2FkT17SbgcTfFwUUIMbAaAK5BXWNRBPaKdWZNHLAiEA1cew%2BCRS%2BdjQqxQKNvqWFTyER1mbKMQKRSlX5EQkc0oq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDOJsn6wjL0U07hgiqyrcA83YqfJxMLJoGgtUl9g%2Fapq4%2F0UxMRk1QnLn9DxyG%2Fcv8e%2BInC6Wkj%2BMOhkRQ%2F7P8KVqXyTEHSttWyc%2BRaWQ7jsVqnJDLk32%2FY86a8LEHREKwz5nrwyhCNlDBAJJhUiTzVzNRweIH5on3qM%2BncbqzceXTzKubou5k5wvl2YVoeE6BMg%2BZvq%2FJ9Yvnhm9x0wGE5kjZ8wRfxkXP1ZLAik0OPq9Ydzt2sCY26nFg6etBEejH9eoqsNy8ISmx8rJ5T1iDzVBN%2B2UvVmYzCHPrX8BooaXNWuS7V4pA1xdEMRLPB7%2Bq%2B6kZlB2rqk87%2FF7bO0Cb0SRXFsUPn3iXvX2%2FYsqDxxXBxLrFqc0TnBorxAtraBFZ%2BY4Q0%2FcGrEVu%2Bs9kQHdVBpBaZVND4GWV9vFm4oRfD1QE%2FJtgTZf%2FtzHisFZFiVri226RvzOaGAVec9G8n47u5FguxISib6PpxywsBW0fBFbzu%2Bd1jhZtgzZo%2BRL46jxy0V2LjcJKIsA6MHSYqMmSsxDfMUwWuyjRWbkFtBWnIjCqF4mO7BY9TPtAY604FfzXPzG1UM%2BU7rqdVFLBgf6MryyvFJ50W6LGcUnyeyTr%2BuW91anJtGQK30t9XnuNTLqKWAZflhFXezRYq4DMPGBncEGOqUBQrZYPKC4KVb4O8s%2F8B1htEfslvbTgaDsWGgVYAJMYqoi7VJ44bz4JUtLN9wfp5EoQ14FG2lFzg1JKsGkJxX2KRKLBg3kqq7rolpo7W0LuZpXCtsW3wrppx90T%2BokjommV9u1X7AFelIN58R%2Bd8LroHwW%2BY04gV3iQMoj0mDEthFyLhIaWNwOU%2F2B%2B4xnZC7GIM9YdSb3sMlKFTxlRRhd1uniP%2FPR&X-Amz-Signature=f6057a653cb558c678e465f7350305a4c7c4f209ce3d7d50fec8c898e36a06be&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMLM7X7Q%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T140852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGq4Ia%2FkT17SbgcTfFwUUIMbAaAK5BXWNRBPaKdWZNHLAiEA1cew%2BCRS%2BdjQqxQKNvqWFTyER1mbKMQKRSlX5EQkc0oq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDOJsn6wjL0U07hgiqyrcA83YqfJxMLJoGgtUl9g%2Fapq4%2F0UxMRk1QnLn9DxyG%2Fcv8e%2BInC6Wkj%2BMOhkRQ%2F7P8KVqXyTEHSttWyc%2BRaWQ7jsVqnJDLk32%2FY86a8LEHREKwz5nrwyhCNlDBAJJhUiTzVzNRweIH5on3qM%2BncbqzceXTzKubou5k5wvl2YVoeE6BMg%2BZvq%2FJ9Yvnhm9x0wGE5kjZ8wRfxkXP1ZLAik0OPq9Ydzt2sCY26nFg6etBEejH9eoqsNy8ISmx8rJ5T1iDzVBN%2B2UvVmYzCHPrX8BooaXNWuS7V4pA1xdEMRLPB7%2Bq%2B6kZlB2rqk87%2FF7bO0Cb0SRXFsUPn3iXvX2%2FYsqDxxXBxLrFqc0TnBorxAtraBFZ%2BY4Q0%2FcGrEVu%2Bs9kQHdVBpBaZVND4GWV9vFm4oRfD1QE%2FJtgTZf%2FtzHisFZFiVri226RvzOaGAVec9G8n47u5FguxISib6PpxywsBW0fBFbzu%2Bd1jhZtgzZo%2BRL46jxy0V2LjcJKIsA6MHSYqMmSsxDfMUwWuyjRWbkFtBWnIjCqF4mO7BY9TPtAY604FfzXPzG1UM%2BU7rqdVFLBgf6MryyvFJ50W6LGcUnyeyTr%2BuW91anJtGQK30t9XnuNTLqKWAZflhFXezRYq4DMPGBncEGOqUBQrZYPKC4KVb4O8s%2F8B1htEfslvbTgaDsWGgVYAJMYqoi7VJ44bz4JUtLN9wfp5EoQ14FG2lFzg1JKsGkJxX2KRKLBg3kqq7rolpo7W0LuZpXCtsW3wrppx90T%2BokjommV9u1X7AFelIN58R%2Bd8LroHwW%2BY04gV3iQMoj0mDEthFyLhIaWNwOU%2F2B%2B4xnZC7GIM9YdSb3sMlKFTxlRRhd1uniP%2FPR&X-Amz-Signature=3a1439a342d00d0f9bac214ea6944eeddace07d55948a7789358f0266e0df479&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMLM7X7Q%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T140852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGq4Ia%2FkT17SbgcTfFwUUIMbAaAK5BXWNRBPaKdWZNHLAiEA1cew%2BCRS%2BdjQqxQKNvqWFTyER1mbKMQKRSlX5EQkc0oq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDOJsn6wjL0U07hgiqyrcA83YqfJxMLJoGgtUl9g%2Fapq4%2F0UxMRk1QnLn9DxyG%2Fcv8e%2BInC6Wkj%2BMOhkRQ%2F7P8KVqXyTEHSttWyc%2BRaWQ7jsVqnJDLk32%2FY86a8LEHREKwz5nrwyhCNlDBAJJhUiTzVzNRweIH5on3qM%2BncbqzceXTzKubou5k5wvl2YVoeE6BMg%2BZvq%2FJ9Yvnhm9x0wGE5kjZ8wRfxkXP1ZLAik0OPq9Ydzt2sCY26nFg6etBEejH9eoqsNy8ISmx8rJ5T1iDzVBN%2B2UvVmYzCHPrX8BooaXNWuS7V4pA1xdEMRLPB7%2Bq%2B6kZlB2rqk87%2FF7bO0Cb0SRXFsUPn3iXvX2%2FYsqDxxXBxLrFqc0TnBorxAtraBFZ%2BY4Q0%2FcGrEVu%2Bs9kQHdVBpBaZVND4GWV9vFm4oRfD1QE%2FJtgTZf%2FtzHisFZFiVri226RvzOaGAVec9G8n47u5FguxISib6PpxywsBW0fBFbzu%2Bd1jhZtgzZo%2BRL46jxy0V2LjcJKIsA6MHSYqMmSsxDfMUwWuyjRWbkFtBWnIjCqF4mO7BY9TPtAY604FfzXPzG1UM%2BU7rqdVFLBgf6MryyvFJ50W6LGcUnyeyTr%2BuW91anJtGQK30t9XnuNTLqKWAZflhFXezRYq4DMPGBncEGOqUBQrZYPKC4KVb4O8s%2F8B1htEfslvbTgaDsWGgVYAJMYqoi7VJ44bz4JUtLN9wfp5EoQ14FG2lFzg1JKsGkJxX2KRKLBg3kqq7rolpo7W0LuZpXCtsW3wrppx90T%2BokjommV9u1X7AFelIN58R%2Bd8LroHwW%2BY04gV3iQMoj0mDEthFyLhIaWNwOU%2F2B%2B4xnZC7GIM9YdSb3sMlKFTxlRRhd1uniP%2FPR&X-Amz-Signature=cf53c1b7acb5f0ecad7c88aeb0714ee577bb089d6a539de94a5761a453ec57dd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
