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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOJNQRGO%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T022830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHXmt776wV4srX4JFcIwndul1nMdB2%2FPaHbQa%2FzVtnRMAiAoB6z%2FDcKUNG3Gp4nOh1jdBKOSXjmQ7gL%2BVWizxCeXCSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5VCc6%2B4sGXmBxMv%2FKtwDV%2B9awrycN3v%2BKseaLWnvJmwYE8gTxU7oyIAfToXnsryjNU8BWXXVa5M0e5kRQfN2iEucuhk02sfz5EbsSDj550vf6suugGLK%2BSb4XcljpE8Ds9KQ%2BCgOcCL0294oKzgM%2BLhUiAqf%2FUXZCbbgGXHyAbxI0D8fgcTyU3L5rzGnp7SmUPaPdHer5B2aFBiS8zMIsGFIcmjcr1G2BD8%2FGZng6SUX30a7QraxGeUI8eZduSkSh0btoX9ALvQhJ8dUX7AqOlYtWLJBM1mbTKaMF62mnXzEagOkP%2B5w%2Bs%2FA7bhBCYENpLFa1zO7kqMIcqBFn4Wqu9had4Jb2WtwRx7wDr5ywxToiyoSrt0b9jCx0rOEjHi6Tk2fKBf0iSIYv2MRjS%2FuaDTTYXqyYOgwqq%2Bpax3bwlzFi3ihToiee5BBiFwHml5Cn9UZVg0RL7dMG0QENul3SP2BqMR%2FCWNkkYvPqqLmen1Q71NXUpcaaUfhat5wGUtAEVfedY7Ha8LGAjC1ffMuWJl8%2FDqeaiR1YP17qBpdgYs3Ej4HiphbH4yOmqVFqA5D%2Fk1DeD5uMg3EUMDQ9Y5UdV9DUWJLbo7ZZ%2FPcEYJ840JIHu2Wm1vhNIUT7LwlCzKut7OpFxQot7SA%2FDowtIjfwQY6pgGxRPtSUM%2F76YV5kVbAnbliyQMCGZ4RjWVu%2Fga4fTEkHzmAizhIsShlmXPZlyjMovFoD0jgnk8G3hdyMQvtu1CCU83e93TCoe0cpoPxX4F502EWMtChuq0jgsnTrn63DVr%2B1l6J8a09ax4E8MeAFeVy8Q%2BkeYRgpI%2FBYgSLh8Kls9J4okYdXT6rxZXtR7PC2ySyzZ3rRVC7p5nTUUS9dfPYT1dTlhY5&X-Amz-Signature=93cfbe635a9957af82fd3be9c9c9fc8e3cb7b10c0d785db88ef880606258c938&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOJNQRGO%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T022830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHXmt776wV4srX4JFcIwndul1nMdB2%2FPaHbQa%2FzVtnRMAiAoB6z%2FDcKUNG3Gp4nOh1jdBKOSXjmQ7gL%2BVWizxCeXCSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5VCc6%2B4sGXmBxMv%2FKtwDV%2B9awrycN3v%2BKseaLWnvJmwYE8gTxU7oyIAfToXnsryjNU8BWXXVa5M0e5kRQfN2iEucuhk02sfz5EbsSDj550vf6suugGLK%2BSb4XcljpE8Ds9KQ%2BCgOcCL0294oKzgM%2BLhUiAqf%2FUXZCbbgGXHyAbxI0D8fgcTyU3L5rzGnp7SmUPaPdHer5B2aFBiS8zMIsGFIcmjcr1G2BD8%2FGZng6SUX30a7QraxGeUI8eZduSkSh0btoX9ALvQhJ8dUX7AqOlYtWLJBM1mbTKaMF62mnXzEagOkP%2B5w%2Bs%2FA7bhBCYENpLFa1zO7kqMIcqBFn4Wqu9had4Jb2WtwRx7wDr5ywxToiyoSrt0b9jCx0rOEjHi6Tk2fKBf0iSIYv2MRjS%2FuaDTTYXqyYOgwqq%2Bpax3bwlzFi3ihToiee5BBiFwHml5Cn9UZVg0RL7dMG0QENul3SP2BqMR%2FCWNkkYvPqqLmen1Q71NXUpcaaUfhat5wGUtAEVfedY7Ha8LGAjC1ffMuWJl8%2FDqeaiR1YP17qBpdgYs3Ej4HiphbH4yOmqVFqA5D%2Fk1DeD5uMg3EUMDQ9Y5UdV9DUWJLbo7ZZ%2FPcEYJ840JIHu2Wm1vhNIUT7LwlCzKut7OpFxQot7SA%2FDowtIjfwQY6pgGxRPtSUM%2F76YV5kVbAnbliyQMCGZ4RjWVu%2Fga4fTEkHzmAizhIsShlmXPZlyjMovFoD0jgnk8G3hdyMQvtu1CCU83e93TCoe0cpoPxX4F502EWMtChuq0jgsnTrn63DVr%2B1l6J8a09ax4E8MeAFeVy8Q%2BkeYRgpI%2FBYgSLh8Kls9J4okYdXT6rxZXtR7PC2ySyzZ3rRVC7p5nTUUS9dfPYT1dTlhY5&X-Amz-Signature=3e4e4abe49eadc5c6b96e409ac62559e837b5be6832fa8477ae506c197dd2130&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOJNQRGO%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T022830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHXmt776wV4srX4JFcIwndul1nMdB2%2FPaHbQa%2FzVtnRMAiAoB6z%2FDcKUNG3Gp4nOh1jdBKOSXjmQ7gL%2BVWizxCeXCSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5VCc6%2B4sGXmBxMv%2FKtwDV%2B9awrycN3v%2BKseaLWnvJmwYE8gTxU7oyIAfToXnsryjNU8BWXXVa5M0e5kRQfN2iEucuhk02sfz5EbsSDj550vf6suugGLK%2BSb4XcljpE8Ds9KQ%2BCgOcCL0294oKzgM%2BLhUiAqf%2FUXZCbbgGXHyAbxI0D8fgcTyU3L5rzGnp7SmUPaPdHer5B2aFBiS8zMIsGFIcmjcr1G2BD8%2FGZng6SUX30a7QraxGeUI8eZduSkSh0btoX9ALvQhJ8dUX7AqOlYtWLJBM1mbTKaMF62mnXzEagOkP%2B5w%2Bs%2FA7bhBCYENpLFa1zO7kqMIcqBFn4Wqu9had4Jb2WtwRx7wDr5ywxToiyoSrt0b9jCx0rOEjHi6Tk2fKBf0iSIYv2MRjS%2FuaDTTYXqyYOgwqq%2Bpax3bwlzFi3ihToiee5BBiFwHml5Cn9UZVg0RL7dMG0QENul3SP2BqMR%2FCWNkkYvPqqLmen1Q71NXUpcaaUfhat5wGUtAEVfedY7Ha8LGAjC1ffMuWJl8%2FDqeaiR1YP17qBpdgYs3Ej4HiphbH4yOmqVFqA5D%2Fk1DeD5uMg3EUMDQ9Y5UdV9DUWJLbo7ZZ%2FPcEYJ840JIHu2Wm1vhNIUT7LwlCzKut7OpFxQot7SA%2FDowtIjfwQY6pgGxRPtSUM%2F76YV5kVbAnbliyQMCGZ4RjWVu%2Fga4fTEkHzmAizhIsShlmXPZlyjMovFoD0jgnk8G3hdyMQvtu1CCU83e93TCoe0cpoPxX4F502EWMtChuq0jgsnTrn63DVr%2B1l6J8a09ax4E8MeAFeVy8Q%2BkeYRgpI%2FBYgSLh8Kls9J4okYdXT6rxZXtR7PC2ySyzZ3rRVC7p5nTUUS9dfPYT1dTlhY5&X-Amz-Signature=d5e3d5dd94b6db74f8bae19f1ea64cbd1e2ebaa374ab366fb109abab84fc3b42&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
