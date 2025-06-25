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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JVYLG3K%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T051207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIHn9%2Bg8LueAHX2XCUCvcLkZTbv9P7veAD2oVBvCFCbySAiAYIGq5tK90oFvk1S9erCylfJjxbdnx4cD85O9x7OhaXCr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMjdA7yMzkwwxGuxN1KtwD2yNGNkxx7s4BTxUIuq9Ke0KHroLFMoWHv0%2FEYxNesynSUI5VaSrFbAdxZcPvCWdy24DLMrX99NzZH65s6wGzZ36976ArAeJQ4Klot0KEvZ6FCvk%2FjC5tIdSx8Y7Vwgphl6ZmE6YqNt0eBuGx7YAPeTy9BggJ7EzeKv2GeaqzffNulnYcGgTFNTbbc%2BNVzBh5MyEdwhI7L3LSBPeUTc0nSoIwIhKl1MRuY4CE1hZ3JOLJQpbfbttewDJOgVj1rXD8mYlp%2BJbglWY%2ByYscg91OzWVD8UpzA115yQPYnxC76hHpq%2BzB%2FNrX5txYjccXvc4XjtXk8lhUY7fqRV1j9gJyUQg%2FsrLAo7m38Dodpc6EgOHKtMDNIGvtMUtIRzH1A4BsFRIZIykrQ4%2BWZlYK2NeVeHt6xgH6fIfcuuILCkRanvyQxzl5s57IjycAPNuYFyecQ4VWczW8ekiWGpemz6wwhLPz8dB8hkLq9YOY5NpoOEuAwT8DnbJuRlfgUXpQZDmZiWfArKI6tHV%2BT97TDnrwUM4Ly1X0%2FbeaoBSrMqLyVpLoUZmoxobZLXIOHvSG9djkEJ71VJ1m6q%2BPYQz6BdcWHo3zSu7bSlN98r3p6DHvmLp5%2FMuHlPSakG3ecJsw1MLtwgY6pgGzvpwJsOLPhhPJepXjD16dnrxQICtOGCiPdAnVYkPlajfoFrPmpx2kix6qR3SqYsX4jIhEaO57SkYn3j9r9qULugwLuFXRMyPLTdhQ%2FFqOHi5ogNwJxub6R3lJokKGXoCT63UcBXJJG1TGlbVDaw4TNVoZ%2FjpbMzNE0EMoMb3AIPjIijuRcC7RRv%2BRfq0rbXkswNjS7G45CUwni%2BbYuz0uTCz83JfL&X-Amz-Signature=52e3d20f503b5b4c4af07b033944d475db4a9656313ee406368f8f7265460dfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JVYLG3K%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T051207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIHn9%2Bg8LueAHX2XCUCvcLkZTbv9P7veAD2oVBvCFCbySAiAYIGq5tK90oFvk1S9erCylfJjxbdnx4cD85O9x7OhaXCr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMjdA7yMzkwwxGuxN1KtwD2yNGNkxx7s4BTxUIuq9Ke0KHroLFMoWHv0%2FEYxNesynSUI5VaSrFbAdxZcPvCWdy24DLMrX99NzZH65s6wGzZ36976ArAeJQ4Klot0KEvZ6FCvk%2FjC5tIdSx8Y7Vwgphl6ZmE6YqNt0eBuGx7YAPeTy9BggJ7EzeKv2GeaqzffNulnYcGgTFNTbbc%2BNVzBh5MyEdwhI7L3LSBPeUTc0nSoIwIhKl1MRuY4CE1hZ3JOLJQpbfbttewDJOgVj1rXD8mYlp%2BJbglWY%2ByYscg91OzWVD8UpzA115yQPYnxC76hHpq%2BzB%2FNrX5txYjccXvc4XjtXk8lhUY7fqRV1j9gJyUQg%2FsrLAo7m38Dodpc6EgOHKtMDNIGvtMUtIRzH1A4BsFRIZIykrQ4%2BWZlYK2NeVeHt6xgH6fIfcuuILCkRanvyQxzl5s57IjycAPNuYFyecQ4VWczW8ekiWGpemz6wwhLPz8dB8hkLq9YOY5NpoOEuAwT8DnbJuRlfgUXpQZDmZiWfArKI6tHV%2BT97TDnrwUM4Ly1X0%2FbeaoBSrMqLyVpLoUZmoxobZLXIOHvSG9djkEJ71VJ1m6q%2BPYQz6BdcWHo3zSu7bSlN98r3p6DHvmLp5%2FMuHlPSakG3ecJsw1MLtwgY6pgGzvpwJsOLPhhPJepXjD16dnrxQICtOGCiPdAnVYkPlajfoFrPmpx2kix6qR3SqYsX4jIhEaO57SkYn3j9r9qULugwLuFXRMyPLTdhQ%2FFqOHi5ogNwJxub6R3lJokKGXoCT63UcBXJJG1TGlbVDaw4TNVoZ%2FjpbMzNE0EMoMb3AIPjIijuRcC7RRv%2BRfq0rbXkswNjS7G45CUwni%2BbYuz0uTCz83JfL&X-Amz-Signature=fac26e860ce67b9596a97ab56eb9b0502021937f7658d4b1ceed4a75c4d6a4bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JVYLG3K%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T051207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIHn9%2Bg8LueAHX2XCUCvcLkZTbv9P7veAD2oVBvCFCbySAiAYIGq5tK90oFvk1S9erCylfJjxbdnx4cD85O9x7OhaXCr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMjdA7yMzkwwxGuxN1KtwD2yNGNkxx7s4BTxUIuq9Ke0KHroLFMoWHv0%2FEYxNesynSUI5VaSrFbAdxZcPvCWdy24DLMrX99NzZH65s6wGzZ36976ArAeJQ4Klot0KEvZ6FCvk%2FjC5tIdSx8Y7Vwgphl6ZmE6YqNt0eBuGx7YAPeTy9BggJ7EzeKv2GeaqzffNulnYcGgTFNTbbc%2BNVzBh5MyEdwhI7L3LSBPeUTc0nSoIwIhKl1MRuY4CE1hZ3JOLJQpbfbttewDJOgVj1rXD8mYlp%2BJbglWY%2ByYscg91OzWVD8UpzA115yQPYnxC76hHpq%2BzB%2FNrX5txYjccXvc4XjtXk8lhUY7fqRV1j9gJyUQg%2FsrLAo7m38Dodpc6EgOHKtMDNIGvtMUtIRzH1A4BsFRIZIykrQ4%2BWZlYK2NeVeHt6xgH6fIfcuuILCkRanvyQxzl5s57IjycAPNuYFyecQ4VWczW8ekiWGpemz6wwhLPz8dB8hkLq9YOY5NpoOEuAwT8DnbJuRlfgUXpQZDmZiWfArKI6tHV%2BT97TDnrwUM4Ly1X0%2FbeaoBSrMqLyVpLoUZmoxobZLXIOHvSG9djkEJ71VJ1m6q%2BPYQz6BdcWHo3zSu7bSlN98r3p6DHvmLp5%2FMuHlPSakG3ecJsw1MLtwgY6pgGzvpwJsOLPhhPJepXjD16dnrxQICtOGCiPdAnVYkPlajfoFrPmpx2kix6qR3SqYsX4jIhEaO57SkYn3j9r9qULugwLuFXRMyPLTdhQ%2FFqOHi5ogNwJxub6R3lJokKGXoCT63UcBXJJG1TGlbVDaw4TNVoZ%2FjpbMzNE0EMoMb3AIPjIijuRcC7RRv%2BRfq0rbXkswNjS7G45CUwni%2BbYuz0uTCz83JfL&X-Amz-Signature=8e3fed8d18448ad2d131b66f458b4b398b01cc282a6f104d389a9b07d0fd135a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
