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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWMU5JKQ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T150730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIEReeBLtI8DaTkq%2Fp7TSPoIaHsfPtajbLIISrNEsnmfNAiBtsJX9es31tPCANUJHgYWsRJYa1f1RyuCD4QWq7gLvmyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIM4%2BpjvSIBunvlmpm%2FKtwDwb6ci1IRvp2HhWs10e0KaGM%2BVIH8q%2FZbv1PHi4C7AjP%2FOzvkpWRZ3fxkeIZ9g33oP%2F39NAq1wOuB9emM18XZvwEQz5nte2kK%2BfjlflEFEP6OFn06l84Cdk8RVS7oVotOEXkAIjADLx%2F3jhVq4O2mmJ7s3rxeYmHmkhA49Tqv%2FzIBEbp9gXS5gjLdxwrfFGgB5B17y9rWOFWUaJuiUVO3fDUW4I%2BT%2FWmNIsl3TGxpTdtO3%2Bd7y7hmetOBMfOI%2FFaN8W7Ldh4Ii%2B1CaOJ2qblPvoQdNE65cy5hqHsSczqUPANaquHudreKWH0AKyT0IVPbMWoQyar%2B1N8EIJZP3e3gGEtbKVb7B%2BBUlZaN%2Fr27%2FapscpM0VG9lS%2FSbxuAlB98EjnzpAu2K8TBUwUbAkeCaBNM0wLnDnJB3Bas%2FKZJFZAZkSlw4k%2BsugJAZMnuvpYmI3u%2FnlHvs5nnQixDRFGMwg9BQ6vYFbX5iPkrPOiPkLhbM6q%2FujVJ%2FMiJfFapwOIlb2bhXs0Nx3RH2QMhtBndaLaQGno0tkklo7TLMGADukeR1fBZU1O%2BLzgwHhiXxf8XULzPn7BU2C%2BzuollM%2F7s1GynjzU0D9UFbH82aos54osJuD1SfkG1ZuIVNbPowjcG1wgY6pgG3d0cayS8iT5%2BWxb5KjAlIrnzId8mDvGNW2l8%2BWUUasJXoYjWEGM1tTHmjvoSqcRHQCw3qsa97M0XOBfVi%2FbYIiduMMHo%2FJsk4XYgaxQrBYEwxb1b%2F%2BBKy5n0qsPiOBfGO34jUP8FYb4B9QIfuJ8y38WBZhraFtc1jOGRiI4kJgnXU3ox3gUmZOSh2y0FUh61vt1ev1N7%2FGkQgcu0HYfeL3VID%2BJVA&X-Amz-Signature=85bc84ce866dd44ca18c7f3ff3e53bcd50cc5957552bcbd6faeffa0265b12570&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWMU5JKQ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T150730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIEReeBLtI8DaTkq%2Fp7TSPoIaHsfPtajbLIISrNEsnmfNAiBtsJX9es31tPCANUJHgYWsRJYa1f1RyuCD4QWq7gLvmyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIM4%2BpjvSIBunvlmpm%2FKtwDwb6ci1IRvp2HhWs10e0KaGM%2BVIH8q%2FZbv1PHi4C7AjP%2FOzvkpWRZ3fxkeIZ9g33oP%2F39NAq1wOuB9emM18XZvwEQz5nte2kK%2BfjlflEFEP6OFn06l84Cdk8RVS7oVotOEXkAIjADLx%2F3jhVq4O2mmJ7s3rxeYmHmkhA49Tqv%2FzIBEbp9gXS5gjLdxwrfFGgB5B17y9rWOFWUaJuiUVO3fDUW4I%2BT%2FWmNIsl3TGxpTdtO3%2Bd7y7hmetOBMfOI%2FFaN8W7Ldh4Ii%2B1CaOJ2qblPvoQdNE65cy5hqHsSczqUPANaquHudreKWH0AKyT0IVPbMWoQyar%2B1N8EIJZP3e3gGEtbKVb7B%2BBUlZaN%2Fr27%2FapscpM0VG9lS%2FSbxuAlB98EjnzpAu2K8TBUwUbAkeCaBNM0wLnDnJB3Bas%2FKZJFZAZkSlw4k%2BsugJAZMnuvpYmI3u%2FnlHvs5nnQixDRFGMwg9BQ6vYFbX5iPkrPOiPkLhbM6q%2FujVJ%2FMiJfFapwOIlb2bhXs0Nx3RH2QMhtBndaLaQGno0tkklo7TLMGADukeR1fBZU1O%2BLzgwHhiXxf8XULzPn7BU2C%2BzuollM%2F7s1GynjzU0D9UFbH82aos54osJuD1SfkG1ZuIVNbPowjcG1wgY6pgG3d0cayS8iT5%2BWxb5KjAlIrnzId8mDvGNW2l8%2BWUUasJXoYjWEGM1tTHmjvoSqcRHQCw3qsa97M0XOBfVi%2FbYIiduMMHo%2FJsk4XYgaxQrBYEwxb1b%2F%2BBKy5n0qsPiOBfGO34jUP8FYb4B9QIfuJ8y38WBZhraFtc1jOGRiI4kJgnXU3ox3gUmZOSh2y0FUh61vt1ev1N7%2FGkQgcu0HYfeL3VID%2BJVA&X-Amz-Signature=d8db3ea477223c79eff9e7deb296c8d8b6d4a6dfb7c7531c0e3714a09b5973b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWMU5JKQ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T150730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIEReeBLtI8DaTkq%2Fp7TSPoIaHsfPtajbLIISrNEsnmfNAiBtsJX9es31tPCANUJHgYWsRJYa1f1RyuCD4QWq7gLvmyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIM4%2BpjvSIBunvlmpm%2FKtwDwb6ci1IRvp2HhWs10e0KaGM%2BVIH8q%2FZbv1PHi4C7AjP%2FOzvkpWRZ3fxkeIZ9g33oP%2F39NAq1wOuB9emM18XZvwEQz5nte2kK%2BfjlflEFEP6OFn06l84Cdk8RVS7oVotOEXkAIjADLx%2F3jhVq4O2mmJ7s3rxeYmHmkhA49Tqv%2FzIBEbp9gXS5gjLdxwrfFGgB5B17y9rWOFWUaJuiUVO3fDUW4I%2BT%2FWmNIsl3TGxpTdtO3%2Bd7y7hmetOBMfOI%2FFaN8W7Ldh4Ii%2B1CaOJ2qblPvoQdNE65cy5hqHsSczqUPANaquHudreKWH0AKyT0IVPbMWoQyar%2B1N8EIJZP3e3gGEtbKVb7B%2BBUlZaN%2Fr27%2FapscpM0VG9lS%2FSbxuAlB98EjnzpAu2K8TBUwUbAkeCaBNM0wLnDnJB3Bas%2FKZJFZAZkSlw4k%2BsugJAZMnuvpYmI3u%2FnlHvs5nnQixDRFGMwg9BQ6vYFbX5iPkrPOiPkLhbM6q%2FujVJ%2FMiJfFapwOIlb2bhXs0Nx3RH2QMhtBndaLaQGno0tkklo7TLMGADukeR1fBZU1O%2BLzgwHhiXxf8XULzPn7BU2C%2BzuollM%2F7s1GynjzU0D9UFbH82aos54osJuD1SfkG1ZuIVNbPowjcG1wgY6pgG3d0cayS8iT5%2BWxb5KjAlIrnzId8mDvGNW2l8%2BWUUasJXoYjWEGM1tTHmjvoSqcRHQCw3qsa97M0XOBfVi%2FbYIiduMMHo%2FJsk4XYgaxQrBYEwxb1b%2F%2BBKy5n0qsPiOBfGO34jUP8FYb4B9QIfuJ8y38WBZhraFtc1jOGRiI4kJgnXU3ox3gUmZOSh2y0FUh61vt1ev1N7%2FGkQgcu0HYfeL3VID%2BJVA&X-Amz-Signature=770a984971f5979d6fc241ae8d5fe0cb4116dffa65e0778adf701e7bace73c88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
