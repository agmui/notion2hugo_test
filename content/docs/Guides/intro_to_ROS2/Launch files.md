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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GBEDMB4%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T050831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIELiPFQtJfv9LmhcejUhV%2FGneXXtWEv7N1IbX%2B2Fcb56AiEA%2Fe%2BR%2FIn0ehbz7Gg4r1SZHV7XV2T0mOHQhxHbP7SW3F4q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDA88hvcOyMb0qvVCpSrcA8wejoJ4Tx61KGOz6P0VffTtdlu1YwwpjrDD0asmSxYyhk2RofhyZ8OoCmnIKzdEZuH7vdW7sJ%2BcMrjOLADe5c6B%2BIhCjRXoRfCQKbULrkCK%2BOIZlp4P46ndCbjbH9EXu4%2Fz2cVlPMYAPt1nclmIXl9Xg2%2FzaV6uJIRtCXOksATSPBRpYwe2H3n3S%2Fxv1bM74wt%2BNJpbzbhkPv%2Bu583asiddHpMMI01VAT%2BrR%2FGWy766pmPIPJocb2dKU9DvmRjl6IQliEhXz75Rfn0pD6hOZkHajHMJOjlvPRnyTsHzv6kpWXjn5aO4yBxL9Mk%2B5UqgJmPQj7QOHH7UGRhJB21DUC3MAjKp3VIfm5%2F4GRnNfEqfl1n370Qu36lfkgqeV%2FZJjMhKIp0B44EQyBL8J7m58p0Ugh4IkxyhCm%2BPtfu%2B%2BkUb9Or30vHWjhfe5rRg9tN1FdwXJogy8aRRWVLqxHTlPe6bQ3NIU1%2BBkds2WRT9%2Bdu6uF0vlQ%2BgR1vDn2YT%2FNdYuA1xLtD9yPLWbtHDALUbhua6ErPDzNqq%2F2%2FLG6zklXPKBdkWWKr0UWiId%2Flw2nI98nQXrn8QzDHoo%2F7XXFxBAfJ7TYRo8z%2BN8E40sT4DnVrEyZN1w2D6pxZJIVskMPS4ysEGOqUBJLB1eWhJPAAsJBJvyNYx%2B477qbdR5oJmUsAULphIkGvDN393UcjfH12WkH62Z9dzmXvqE9D69gR1yhOWaB1H5sVxXMnLlSQSllLwS5xXkLwzCti0PLqs88BV0cKLbmtdt4lJs4sFO7qfgY40P%2F2CG5A9KjOxlyeNgcj6eeQUOipF4GmTRbwfJ86SOclljUTy%2BiTj0bCMt%2FBV0fM9fadLF0c1BrZZ&X-Amz-Signature=4d4481466622826ffe0237a5b53aa60f7237a7cc6aeb16d5717ea89ced450215&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GBEDMB4%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T050831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIELiPFQtJfv9LmhcejUhV%2FGneXXtWEv7N1IbX%2B2Fcb56AiEA%2Fe%2BR%2FIn0ehbz7Gg4r1SZHV7XV2T0mOHQhxHbP7SW3F4q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDA88hvcOyMb0qvVCpSrcA8wejoJ4Tx61KGOz6P0VffTtdlu1YwwpjrDD0asmSxYyhk2RofhyZ8OoCmnIKzdEZuH7vdW7sJ%2BcMrjOLADe5c6B%2BIhCjRXoRfCQKbULrkCK%2BOIZlp4P46ndCbjbH9EXu4%2Fz2cVlPMYAPt1nclmIXl9Xg2%2FzaV6uJIRtCXOksATSPBRpYwe2H3n3S%2Fxv1bM74wt%2BNJpbzbhkPv%2Bu583asiddHpMMI01VAT%2BrR%2FGWy766pmPIPJocb2dKU9DvmRjl6IQliEhXz75Rfn0pD6hOZkHajHMJOjlvPRnyTsHzv6kpWXjn5aO4yBxL9Mk%2B5UqgJmPQj7QOHH7UGRhJB21DUC3MAjKp3VIfm5%2F4GRnNfEqfl1n370Qu36lfkgqeV%2FZJjMhKIp0B44EQyBL8J7m58p0Ugh4IkxyhCm%2BPtfu%2B%2BkUb9Or30vHWjhfe5rRg9tN1FdwXJogy8aRRWVLqxHTlPe6bQ3NIU1%2BBkds2WRT9%2Bdu6uF0vlQ%2BgR1vDn2YT%2FNdYuA1xLtD9yPLWbtHDALUbhua6ErPDzNqq%2F2%2FLG6zklXPKBdkWWKr0UWiId%2Flw2nI98nQXrn8QzDHoo%2F7XXFxBAfJ7TYRo8z%2BN8E40sT4DnVrEyZN1w2D6pxZJIVskMPS4ysEGOqUBJLB1eWhJPAAsJBJvyNYx%2B477qbdR5oJmUsAULphIkGvDN393UcjfH12WkH62Z9dzmXvqE9D69gR1yhOWaB1H5sVxXMnLlSQSllLwS5xXkLwzCti0PLqs88BV0cKLbmtdt4lJs4sFO7qfgY40P%2F2CG5A9KjOxlyeNgcj6eeQUOipF4GmTRbwfJ86SOclljUTy%2BiTj0bCMt%2FBV0fM9fadLF0c1BrZZ&X-Amz-Signature=a598844fdb372b218173c651ec49183ca11ffc9c907873422717968f213e595f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GBEDMB4%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T050831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIELiPFQtJfv9LmhcejUhV%2FGneXXtWEv7N1IbX%2B2Fcb56AiEA%2Fe%2BR%2FIn0ehbz7Gg4r1SZHV7XV2T0mOHQhxHbP7SW3F4q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDA88hvcOyMb0qvVCpSrcA8wejoJ4Tx61KGOz6P0VffTtdlu1YwwpjrDD0asmSxYyhk2RofhyZ8OoCmnIKzdEZuH7vdW7sJ%2BcMrjOLADe5c6B%2BIhCjRXoRfCQKbULrkCK%2BOIZlp4P46ndCbjbH9EXu4%2Fz2cVlPMYAPt1nclmIXl9Xg2%2FzaV6uJIRtCXOksATSPBRpYwe2H3n3S%2Fxv1bM74wt%2BNJpbzbhkPv%2Bu583asiddHpMMI01VAT%2BrR%2FGWy766pmPIPJocb2dKU9DvmRjl6IQliEhXz75Rfn0pD6hOZkHajHMJOjlvPRnyTsHzv6kpWXjn5aO4yBxL9Mk%2B5UqgJmPQj7QOHH7UGRhJB21DUC3MAjKp3VIfm5%2F4GRnNfEqfl1n370Qu36lfkgqeV%2FZJjMhKIp0B44EQyBL8J7m58p0Ugh4IkxyhCm%2BPtfu%2B%2BkUb9Or30vHWjhfe5rRg9tN1FdwXJogy8aRRWVLqxHTlPe6bQ3NIU1%2BBkds2WRT9%2Bdu6uF0vlQ%2BgR1vDn2YT%2FNdYuA1xLtD9yPLWbtHDALUbhua6ErPDzNqq%2F2%2FLG6zklXPKBdkWWKr0UWiId%2Flw2nI98nQXrn8QzDHoo%2F7XXFxBAfJ7TYRo8z%2BN8E40sT4DnVrEyZN1w2D6pxZJIVskMPS4ysEGOqUBJLB1eWhJPAAsJBJvyNYx%2B477qbdR5oJmUsAULphIkGvDN393UcjfH12WkH62Z9dzmXvqE9D69gR1yhOWaB1H5sVxXMnLlSQSllLwS5xXkLwzCti0PLqs88BV0cKLbmtdt4lJs4sFO7qfgY40P%2F2CG5A9KjOxlyeNgcj6eeQUOipF4GmTRbwfJ86SOclljUTy%2BiTj0bCMt%2FBV0fM9fadLF0c1BrZZ&X-Amz-Signature=c7f86b1d642e9bea6a3965b4eba5aca0347f7950819fa1e998a79ead7feacdb9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
