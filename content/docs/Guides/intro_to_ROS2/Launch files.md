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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSPU3PYZ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T230141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIGTrr%2BNhVtkqE2fkXtyHSa5ztZoaM%2FkbfsmI80uO8dCDAiAhAzseZ2RINsM53seyA0BRj9ja3l23WRSu06wEjePIEyr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM5HoRzalfCWPij6%2F0KtwDXLj0aArpkYiyWU1NSbx6G2pd3v0qYUF7iCPDYeDlqtFBo97G8e3Rf53rzWMd1jQn0MwVB61ekXbTYiovr3SzC4sId%2FecscvmV55IST5yonozQyAKLLJKxiDU24iNE%2Bq4ekIoyPa%2FuodeklrD3dladUJloT66L9M2KGccPQS0IV%2FFyRlqCSelD7o4eXJVkoN%2F3m5xNqIY3m3W%2F7Ec6n5pR7ikcCg64hjSMS35bArkGhMAccAyy%2FmWWtaobREaGcPvk4d6T2%2BPGCbfxVfsqSBHfUOPv6h74hAyQUbynPiLIteTaLZ3ohfUENOVqHl3zBOCHWhhGxgWM2wNzZaQAbRZYGXv3cli1nv0ACAMVxloAnSnWQ5UWBEHwD8Dz0fZxCm9cnHBBLIHlhhV4tU0EfBkk1KCo2g4QsZMdZWsBCxTbLyJk26oxYHs85XoEhe08zmbXtaz0emNoCdVm6d4sHdZucGb9grtxuG8rWNkKd%2FQWhIzSi1U%2B0%2BBvqafReAj8xxaVFffB00DqqE8MlOXTD%2F2RS2aDs0%2B0MsPJ2OWs3M3z92ePYhGRUwdZ6ydw2xPIx1h%2FkSNGFNOpe5K%2FsIFNxWbd%2FHdRWV9QSB7S6q5INFnZdlLhJrq0czpHLEgCvcw6PKyvgY6pgEYXOG6pkZa93sTeiGbCpVxaUOm7yYW3dqcTgHJg9EMA6sJasso9La40rve9Iyq9%2BLDbo83VAUWhUuM%2FzoBFenrFeCO6hlPvTnCmgq1UqCBXXuwuaZM2QllezW%2FQCQ2HYQHhaT5GcF%2BTJZVmeNCq%2BLI8eckeNTVJiCMxE6f6QFTsQWYvGIZZC%2FXSvjihtzZ8YbX%2B1YP9lNKECMfZE9UXt7zJFllwElj&X-Amz-Signature=6244eb168a9ebea6b36fb70ece528c20c709492b1f13d69ece0cc5cbb54ec6bd&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSPU3PYZ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T230141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIGTrr%2BNhVtkqE2fkXtyHSa5ztZoaM%2FkbfsmI80uO8dCDAiAhAzseZ2RINsM53seyA0BRj9ja3l23WRSu06wEjePIEyr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM5HoRzalfCWPij6%2F0KtwDXLj0aArpkYiyWU1NSbx6G2pd3v0qYUF7iCPDYeDlqtFBo97G8e3Rf53rzWMd1jQn0MwVB61ekXbTYiovr3SzC4sId%2FecscvmV55IST5yonozQyAKLLJKxiDU24iNE%2Bq4ekIoyPa%2FuodeklrD3dladUJloT66L9M2KGccPQS0IV%2FFyRlqCSelD7o4eXJVkoN%2F3m5xNqIY3m3W%2F7Ec6n5pR7ikcCg64hjSMS35bArkGhMAccAyy%2FmWWtaobREaGcPvk4d6T2%2BPGCbfxVfsqSBHfUOPv6h74hAyQUbynPiLIteTaLZ3ohfUENOVqHl3zBOCHWhhGxgWM2wNzZaQAbRZYGXv3cli1nv0ACAMVxloAnSnWQ5UWBEHwD8Dz0fZxCm9cnHBBLIHlhhV4tU0EfBkk1KCo2g4QsZMdZWsBCxTbLyJk26oxYHs85XoEhe08zmbXtaz0emNoCdVm6d4sHdZucGb9grtxuG8rWNkKd%2FQWhIzSi1U%2B0%2BBvqafReAj8xxaVFffB00DqqE8MlOXTD%2F2RS2aDs0%2B0MsPJ2OWs3M3z92ePYhGRUwdZ6ydw2xPIx1h%2FkSNGFNOpe5K%2FsIFNxWbd%2FHdRWV9QSB7S6q5INFnZdlLhJrq0czpHLEgCvcw6PKyvgY6pgEYXOG6pkZa93sTeiGbCpVxaUOm7yYW3dqcTgHJg9EMA6sJasso9La40rve9Iyq9%2BLDbo83VAUWhUuM%2FzoBFenrFeCO6hlPvTnCmgq1UqCBXXuwuaZM2QllezW%2FQCQ2HYQHhaT5GcF%2BTJZVmeNCq%2BLI8eckeNTVJiCMxE6f6QFTsQWYvGIZZC%2FXSvjihtzZ8YbX%2B1YP9lNKECMfZE9UXt7zJFllwElj&X-Amz-Signature=cbc08a278e82f825095dda1817a54851536920bac27132669e6d3f5f1e43438b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSPU3PYZ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T230141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIGTrr%2BNhVtkqE2fkXtyHSa5ztZoaM%2FkbfsmI80uO8dCDAiAhAzseZ2RINsM53seyA0BRj9ja3l23WRSu06wEjePIEyr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM5HoRzalfCWPij6%2F0KtwDXLj0aArpkYiyWU1NSbx6G2pd3v0qYUF7iCPDYeDlqtFBo97G8e3Rf53rzWMd1jQn0MwVB61ekXbTYiovr3SzC4sId%2FecscvmV55IST5yonozQyAKLLJKxiDU24iNE%2Bq4ekIoyPa%2FuodeklrD3dladUJloT66L9M2KGccPQS0IV%2FFyRlqCSelD7o4eXJVkoN%2F3m5xNqIY3m3W%2F7Ec6n5pR7ikcCg64hjSMS35bArkGhMAccAyy%2FmWWtaobREaGcPvk4d6T2%2BPGCbfxVfsqSBHfUOPv6h74hAyQUbynPiLIteTaLZ3ohfUENOVqHl3zBOCHWhhGxgWM2wNzZaQAbRZYGXv3cli1nv0ACAMVxloAnSnWQ5UWBEHwD8Dz0fZxCm9cnHBBLIHlhhV4tU0EfBkk1KCo2g4QsZMdZWsBCxTbLyJk26oxYHs85XoEhe08zmbXtaz0emNoCdVm6d4sHdZucGb9grtxuG8rWNkKd%2FQWhIzSi1U%2B0%2BBvqafReAj8xxaVFffB00DqqE8MlOXTD%2F2RS2aDs0%2B0MsPJ2OWs3M3z92ePYhGRUwdZ6ydw2xPIx1h%2FkSNGFNOpe5K%2FsIFNxWbd%2FHdRWV9QSB7S6q5INFnZdlLhJrq0czpHLEgCvcw6PKyvgY6pgEYXOG6pkZa93sTeiGbCpVxaUOm7yYW3dqcTgHJg9EMA6sJasso9La40rve9Iyq9%2BLDbo83VAUWhUuM%2FzoBFenrFeCO6hlPvTnCmgq1UqCBXXuwuaZM2QllezW%2FQCQ2HYQHhaT5GcF%2BTJZVmeNCq%2BLI8eckeNTVJiCMxE6f6QFTsQWYvGIZZC%2FXSvjihtzZ8YbX%2B1YP9lNKECMfZE9UXt7zJFllwElj&X-Amz-Signature=8c5d8fea65011b677c16214811f95e49a6a4a3609d741d436643e6b77041aba1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
