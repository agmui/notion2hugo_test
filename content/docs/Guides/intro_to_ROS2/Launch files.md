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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PSP3CGV%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T004045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi%2F9c65pDPL1uShzH6SnwUstbJWjyso8HBnhssQ6zNnwIgAhjFz07Xtvg1bwp6hVav8q57dUVXtS8IdWjpWLPMkSgqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCViDN01UJifI9dn%2ByrcA3KYmHgiwT%2FQpDG0jiMm3LC986a9gK7g77bBYJ37TfPD4nD0yN0BW8R3eQcTx33G%2B2pPeM4rKTus4XSxAcq6LGt7CQyYJPRkzVI7V32kAO1m500zDQqNhnQxUvgrSJnYKf35H85w8oBmuX9iXHELKM9i1pG9AhMyeyoCkbSUh%2F5OSDZ3BBD5Iv6MGbO9Qi3ly8QFfokJMj3xOzLCo0HlHlCIrWg%2BaxyTcTLEI9YP8jW7DH5yFMu3sUclwuP%2B38fne5iG9bY6%2F1Vv6WUc7OJNUVJFkGy0H4ugcLMG4VeTkCWHVfeEEaxaku6iUmcip2p%2B7PUbqnl6WbF890KEEe5x4mqJJKSig59ZOgWB8CjwhQKKxvRruEje5jJkQb5Kf9JBOQWb7FQO9wG5Fx7y6p%2FdzHONpusJUqFcuqC60Be33PUbedB%2FKMAQQ8EjlWZEv6PDnet1ECK%2Fdfi3nauTBekpxdFwIBBeTEdHpDsFjq%2BbyJ7Fya2kXrckttG8weZIhArgIG3HX%2FW17cfnmnADU60HVnO1XEEqlcYfaJWUNcEIou%2F9Q3Z3xS1trDwyDCXIhgQlwkl04PemO1bol6jHeXhjj6S95YHyT6%2FHJKQzCZvIojJ4QDcnoqN0zIs3zqNhMIaixcAGOqUBU2lxd0wAAXq0eQ9o%2BBkHuHSdDr%2FZj7v3D57LSE3I6GBmWRtSpb88F8DcSqVOA1xsXe2WBdoE5SiBJy5fQLUEhaTHzjoWhcIdJofge8%2FEru4ChZuc862gKDdFV0l0AsdFSf7aq4lhUYA%2B6a2Jb%2BvGHdoTrudpzjAHivKgeQ46XuRul2tBNiPYXjH5QULF9hIiBIqH7qvTApil%2FNIenLBE3vdxZy5v&X-Amz-Signature=6320d955dd806a6a730221b688421a57416788e73ff77e17bc8030d00cb378b5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PSP3CGV%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T004045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi%2F9c65pDPL1uShzH6SnwUstbJWjyso8HBnhssQ6zNnwIgAhjFz07Xtvg1bwp6hVav8q57dUVXtS8IdWjpWLPMkSgqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCViDN01UJifI9dn%2ByrcA3KYmHgiwT%2FQpDG0jiMm3LC986a9gK7g77bBYJ37TfPD4nD0yN0BW8R3eQcTx33G%2B2pPeM4rKTus4XSxAcq6LGt7CQyYJPRkzVI7V32kAO1m500zDQqNhnQxUvgrSJnYKf35H85w8oBmuX9iXHELKM9i1pG9AhMyeyoCkbSUh%2F5OSDZ3BBD5Iv6MGbO9Qi3ly8QFfokJMj3xOzLCo0HlHlCIrWg%2BaxyTcTLEI9YP8jW7DH5yFMu3sUclwuP%2B38fne5iG9bY6%2F1Vv6WUc7OJNUVJFkGy0H4ugcLMG4VeTkCWHVfeEEaxaku6iUmcip2p%2B7PUbqnl6WbF890KEEe5x4mqJJKSig59ZOgWB8CjwhQKKxvRruEje5jJkQb5Kf9JBOQWb7FQO9wG5Fx7y6p%2FdzHONpusJUqFcuqC60Be33PUbedB%2FKMAQQ8EjlWZEv6PDnet1ECK%2Fdfi3nauTBekpxdFwIBBeTEdHpDsFjq%2BbyJ7Fya2kXrckttG8weZIhArgIG3HX%2FW17cfnmnADU60HVnO1XEEqlcYfaJWUNcEIou%2F9Q3Z3xS1trDwyDCXIhgQlwkl04PemO1bol6jHeXhjj6S95YHyT6%2FHJKQzCZvIojJ4QDcnoqN0zIs3zqNhMIaixcAGOqUBU2lxd0wAAXq0eQ9o%2BBkHuHSdDr%2FZj7v3D57LSE3I6GBmWRtSpb88F8DcSqVOA1xsXe2WBdoE5SiBJy5fQLUEhaTHzjoWhcIdJofge8%2FEru4ChZuc862gKDdFV0l0AsdFSf7aq4lhUYA%2B6a2Jb%2BvGHdoTrudpzjAHivKgeQ46XuRul2tBNiPYXjH5QULF9hIiBIqH7qvTApil%2FNIenLBE3vdxZy5v&X-Amz-Signature=fa4ad59f80ec6537879b2674ea18936c88a88385b3b54e3007270e2aa72416d1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PSP3CGV%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T004045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi%2F9c65pDPL1uShzH6SnwUstbJWjyso8HBnhssQ6zNnwIgAhjFz07Xtvg1bwp6hVav8q57dUVXtS8IdWjpWLPMkSgqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCViDN01UJifI9dn%2ByrcA3KYmHgiwT%2FQpDG0jiMm3LC986a9gK7g77bBYJ37TfPD4nD0yN0BW8R3eQcTx33G%2B2pPeM4rKTus4XSxAcq6LGt7CQyYJPRkzVI7V32kAO1m500zDQqNhnQxUvgrSJnYKf35H85w8oBmuX9iXHELKM9i1pG9AhMyeyoCkbSUh%2F5OSDZ3BBD5Iv6MGbO9Qi3ly8QFfokJMj3xOzLCo0HlHlCIrWg%2BaxyTcTLEI9YP8jW7DH5yFMu3sUclwuP%2B38fne5iG9bY6%2F1Vv6WUc7OJNUVJFkGy0H4ugcLMG4VeTkCWHVfeEEaxaku6iUmcip2p%2B7PUbqnl6WbF890KEEe5x4mqJJKSig59ZOgWB8CjwhQKKxvRruEje5jJkQb5Kf9JBOQWb7FQO9wG5Fx7y6p%2FdzHONpusJUqFcuqC60Be33PUbedB%2FKMAQQ8EjlWZEv6PDnet1ECK%2Fdfi3nauTBekpxdFwIBBeTEdHpDsFjq%2BbyJ7Fya2kXrckttG8weZIhArgIG3HX%2FW17cfnmnADU60HVnO1XEEqlcYfaJWUNcEIou%2F9Q3Z3xS1trDwyDCXIhgQlwkl04PemO1bol6jHeXhjj6S95YHyT6%2FHJKQzCZvIojJ4QDcnoqN0zIs3zqNhMIaixcAGOqUBU2lxd0wAAXq0eQ9o%2BBkHuHSdDr%2FZj7v3D57LSE3I6GBmWRtSpb88F8DcSqVOA1xsXe2WBdoE5SiBJy5fQLUEhaTHzjoWhcIdJofge8%2FEru4ChZuc862gKDdFV0l0AsdFSf7aq4lhUYA%2B6a2Jb%2BvGHdoTrudpzjAHivKgeQ46XuRul2tBNiPYXjH5QULF9hIiBIqH7qvTApil%2FNIenLBE3vdxZy5v&X-Amz-Signature=8b486d3e6e887134fb2b77d5c34e013ef96878ae491654c0fe2cd30de14af6ae&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
