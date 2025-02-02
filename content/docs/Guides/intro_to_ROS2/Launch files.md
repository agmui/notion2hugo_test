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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPNBZJ5Z%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T100511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQuyg4rd2SIKJZ%2BU90Uoe77tv54vZEejQeckdbefwSpAiAbBrez5dUTFoLqYWG8TYedVkZRrkeIkuwCQBA%2B5icxKiqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXfbgjMFshSGG8bhSKtwDjPvK1US4Svlxfa0sb8AFWxgNfLeJ2Oqjx9K%2F4hyAkIlhA3%2Fw6wrrPN4fXmoVx94naJQ2dOShhaqibKvGgnKov9KGYtci0yImHJTV8SeTfIzTMD0ehw4Gg%2FhM8DobnfXU3vFWcZGNRC27yn%2F7dKJigrbvUOSKa6kB9grIBFcxG%2BugqjJ31hpglRKqyjRAEqP8CZ3dCI8soAJxEWGY9KKfWE2RDn1EWpDe97fwAL6828GmI1FZ4ji%2BDPlacPLi1t%2FCK0CyF80%2Bnu1xHOwNtMmkb6Tm4lMJO%2Fb%2FTUsWjY7mq0SYZAgSmI2Hmip9T5gFbXYzn7qG8VXbZtF2kHG9FdGRHbbo0ToXa7CI3uRfnxwWtXDeIUglhwwTCBn9d5o0HJJjTOz1FmEREgBUgeffhchxtZp%2BtXsPdTgKinirlvUM6XzUvQCFycObm2ocqhk1lrH9AM%2Be1WSUGzWFv%2BvmfLl%2B0yKz5JqWOUzanX0TvflIq7eE2PDWinYMo%2BQwJNc5mWB%2F1WqXo%2FvcOCL5t1yDWpcMXJS7du3M2uaIP382ghMvRDn8RDWMzpca474bs%2BQcPQRYmrcS3I42DvIf3TijaTkcnJ4n%2BbwirnXQXq1GN8ODQ%2FQCHNIaZQtLBk3TmAAwiZ38vAY6pgEVbTzXLCl%2BoNQYfltp%2BVdk%2FwVzDHKzF7lMED29cmoN%2FGcNnltboh5hUpRi9zB3KOYgRDd0fjjPUsLQcsAYLooQWSZeeDFsbrOz444qMEQ20rQGIQIeAVxsMggPJkkEnFmsXjx6oz5FAmbXoxUeGV0lI8B2Wk9avlhvFleFLygHjBKEuQkC6%2F9zJjn3h0tfhtRL3MBKKtVAsmodq26DC41zO96pxbEQ&X-Amz-Signature=e2d0a792b4c865bd5e864365ea3e001ef5537da10b58441d24488a56981c644a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPNBZJ5Z%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T100511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQuyg4rd2SIKJZ%2BU90Uoe77tv54vZEejQeckdbefwSpAiAbBrez5dUTFoLqYWG8TYedVkZRrkeIkuwCQBA%2B5icxKiqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXfbgjMFshSGG8bhSKtwDjPvK1US4Svlxfa0sb8AFWxgNfLeJ2Oqjx9K%2F4hyAkIlhA3%2Fw6wrrPN4fXmoVx94naJQ2dOShhaqibKvGgnKov9KGYtci0yImHJTV8SeTfIzTMD0ehw4Gg%2FhM8DobnfXU3vFWcZGNRC27yn%2F7dKJigrbvUOSKa6kB9grIBFcxG%2BugqjJ31hpglRKqyjRAEqP8CZ3dCI8soAJxEWGY9KKfWE2RDn1EWpDe97fwAL6828GmI1FZ4ji%2BDPlacPLi1t%2FCK0CyF80%2Bnu1xHOwNtMmkb6Tm4lMJO%2Fb%2FTUsWjY7mq0SYZAgSmI2Hmip9T5gFbXYzn7qG8VXbZtF2kHG9FdGRHbbo0ToXa7CI3uRfnxwWtXDeIUglhwwTCBn9d5o0HJJjTOz1FmEREgBUgeffhchxtZp%2BtXsPdTgKinirlvUM6XzUvQCFycObm2ocqhk1lrH9AM%2Be1WSUGzWFv%2BvmfLl%2B0yKz5JqWOUzanX0TvflIq7eE2PDWinYMo%2BQwJNc5mWB%2F1WqXo%2FvcOCL5t1yDWpcMXJS7du3M2uaIP382ghMvRDn8RDWMzpca474bs%2BQcPQRYmrcS3I42DvIf3TijaTkcnJ4n%2BbwirnXQXq1GN8ODQ%2FQCHNIaZQtLBk3TmAAwiZ38vAY6pgEVbTzXLCl%2BoNQYfltp%2BVdk%2FwVzDHKzF7lMED29cmoN%2FGcNnltboh5hUpRi9zB3KOYgRDd0fjjPUsLQcsAYLooQWSZeeDFsbrOz444qMEQ20rQGIQIeAVxsMggPJkkEnFmsXjx6oz5FAmbXoxUeGV0lI8B2Wk9avlhvFleFLygHjBKEuQkC6%2F9zJjn3h0tfhtRL3MBKKtVAsmodq26DC41zO96pxbEQ&X-Amz-Signature=d789f27335ad8dc8bc17836d6a424848baa4b4847aba916f2318b010585748bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPNBZJ5Z%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T100511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQuyg4rd2SIKJZ%2BU90Uoe77tv54vZEejQeckdbefwSpAiAbBrez5dUTFoLqYWG8TYedVkZRrkeIkuwCQBA%2B5icxKiqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXfbgjMFshSGG8bhSKtwDjPvK1US4Svlxfa0sb8AFWxgNfLeJ2Oqjx9K%2F4hyAkIlhA3%2Fw6wrrPN4fXmoVx94naJQ2dOShhaqibKvGgnKov9KGYtci0yImHJTV8SeTfIzTMD0ehw4Gg%2FhM8DobnfXU3vFWcZGNRC27yn%2F7dKJigrbvUOSKa6kB9grIBFcxG%2BugqjJ31hpglRKqyjRAEqP8CZ3dCI8soAJxEWGY9KKfWE2RDn1EWpDe97fwAL6828GmI1FZ4ji%2BDPlacPLi1t%2FCK0CyF80%2Bnu1xHOwNtMmkb6Tm4lMJO%2Fb%2FTUsWjY7mq0SYZAgSmI2Hmip9T5gFbXYzn7qG8VXbZtF2kHG9FdGRHbbo0ToXa7CI3uRfnxwWtXDeIUglhwwTCBn9d5o0HJJjTOz1FmEREgBUgeffhchxtZp%2BtXsPdTgKinirlvUM6XzUvQCFycObm2ocqhk1lrH9AM%2Be1WSUGzWFv%2BvmfLl%2B0yKz5JqWOUzanX0TvflIq7eE2PDWinYMo%2BQwJNc5mWB%2F1WqXo%2FvcOCL5t1yDWpcMXJS7du3M2uaIP382ghMvRDn8RDWMzpca474bs%2BQcPQRYmrcS3I42DvIf3TijaTkcnJ4n%2BbwirnXQXq1GN8ODQ%2FQCHNIaZQtLBk3TmAAwiZ38vAY6pgEVbTzXLCl%2BoNQYfltp%2BVdk%2FwVzDHKzF7lMED29cmoN%2FGcNnltboh5hUpRi9zB3KOYgRDd0fjjPUsLQcsAYLooQWSZeeDFsbrOz444qMEQ20rQGIQIeAVxsMggPJkkEnFmsXjx6oz5FAmbXoxUeGV0lI8B2Wk9avlhvFleFLygHjBKEuQkC6%2F9zJjn3h0tfhtRL3MBKKtVAsmodq26DC41zO96pxbEQ&X-Amz-Signature=27f8213be440ea5f9cee602c300252399584d6c10d91306e376d815530af7a18&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
