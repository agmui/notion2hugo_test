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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDOKKDM4%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T090716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMcW2FP9DAKS2SbAk9sPErEjwBt92PVABzfZDPmdb7VAiEAtn%2FIz7Zr52ya8wGI%2B8nTKIQTAkIGetweMU16bh1oHqIq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDD6SAOe45cvEkHVqDSrcAziUq9rNChckCJmSrxuAXYe6la5kcAeuKpSS52Rvc64q2otIE3qN4ZTaXBoG3csHjhJpK4ORa6sbELyWCbMRQGg0xgXv0HXdKIsNZNhZ3tfHtNxpCjAAeu%2BAsv8x8zFy532kSF6%2BAapm3YPOkEPjN87lzNN19XvKcbzroyMkye6R0X7oFRlmyWlCnaYHSB6R3n3Vj3PE8rAJI0ora9dDRypmEHbFaIuiNQMHsG18FlnzOaSCR9vwqnNzCWuKW3eHVLUTCST8J9%2FyR2pVH0ZAiEjZ27cXVtqb49fC6S5XzmX5HcvKDuCSNsOEuXpcLZqacrm63LNR59asdXMX1rE8Gncz9ip%2F8Fjtj68mgRmwEBjzZpJItSY2VtSnkm7F2DLAsvwaLdfRZfctQIPMHb3HfWZfJeuTHrnSu%2BNlBI5lNcU%2BQMEdPQPdeyKpc%2BnWw5TaSYaeQJPxw%2FzqLfxuTdYfrX9A5NrhhqWreDFCvQQAki2DpB7z2JSuxh6NX%2BI5qdzTX9HjwgiPCT9i9VDOaFZ5JUIQ0O3YpNf6jtRUbq1njr9jQ0vDoBN7gl%2Bg%2FD5d20rMv0p%2BGiE9ycmKmBUjXvKBNHLEKIfiO%2B4o3PKyJZY5bOBAzKedUTwwD2bv7ri0MPv%2ByL8GOqUBSytXvY6SFfs0MgCEvhA3NYPTkPBl7kZzNLRg%2For7w0BE0%2FSYlD%2BBTwyIZ%2BOS2BfE%2FYrsrAgGJYO%2FSUxSHl3iOy9zUcvMd7m%2FRtGr%2BwT%2Fwkvrd7otRS6SmTNHat%2BV8c%2BZ4A2FWNuQPfY0ubeLbWWdvpJ6sGd%2F20OPjXCVJD5bhUzomYY5mLUBtGLst%2BR3%2BSpWQ%2FUkAEzeby5F%2BHWHYW2l25Al6Kj6&X-Amz-Signature=1519c4d52844ad824b2224d0df42affec5086f5e2bd57d0dd1216e81356e2330&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDOKKDM4%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T090716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMcW2FP9DAKS2SbAk9sPErEjwBt92PVABzfZDPmdb7VAiEAtn%2FIz7Zr52ya8wGI%2B8nTKIQTAkIGetweMU16bh1oHqIq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDD6SAOe45cvEkHVqDSrcAziUq9rNChckCJmSrxuAXYe6la5kcAeuKpSS52Rvc64q2otIE3qN4ZTaXBoG3csHjhJpK4ORa6sbELyWCbMRQGg0xgXv0HXdKIsNZNhZ3tfHtNxpCjAAeu%2BAsv8x8zFy532kSF6%2BAapm3YPOkEPjN87lzNN19XvKcbzroyMkye6R0X7oFRlmyWlCnaYHSB6R3n3Vj3PE8rAJI0ora9dDRypmEHbFaIuiNQMHsG18FlnzOaSCR9vwqnNzCWuKW3eHVLUTCST8J9%2FyR2pVH0ZAiEjZ27cXVtqb49fC6S5XzmX5HcvKDuCSNsOEuXpcLZqacrm63LNR59asdXMX1rE8Gncz9ip%2F8Fjtj68mgRmwEBjzZpJItSY2VtSnkm7F2DLAsvwaLdfRZfctQIPMHb3HfWZfJeuTHrnSu%2BNlBI5lNcU%2BQMEdPQPdeyKpc%2BnWw5TaSYaeQJPxw%2FzqLfxuTdYfrX9A5NrhhqWreDFCvQQAki2DpB7z2JSuxh6NX%2BI5qdzTX9HjwgiPCT9i9VDOaFZ5JUIQ0O3YpNf6jtRUbq1njr9jQ0vDoBN7gl%2Bg%2FD5d20rMv0p%2BGiE9ycmKmBUjXvKBNHLEKIfiO%2B4o3PKyJZY5bOBAzKedUTwwD2bv7ri0MPv%2ByL8GOqUBSytXvY6SFfs0MgCEvhA3NYPTkPBl7kZzNLRg%2For7w0BE0%2FSYlD%2BBTwyIZ%2BOS2BfE%2FYrsrAgGJYO%2FSUxSHl3iOy9zUcvMd7m%2FRtGr%2BwT%2Fwkvrd7otRS6SmTNHat%2BV8c%2BZ4A2FWNuQPfY0ubeLbWWdvpJ6sGd%2F20OPjXCVJD5bhUzomYY5mLUBtGLst%2BR3%2BSpWQ%2FUkAEzeby5F%2BHWHYW2l25Al6Kj6&X-Amz-Signature=8da2e0c0f97eb48b66967a8d2178085b88baae39d391c97dc3bf93e39b069691&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDOKKDM4%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T090716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMcW2FP9DAKS2SbAk9sPErEjwBt92PVABzfZDPmdb7VAiEAtn%2FIz7Zr52ya8wGI%2B8nTKIQTAkIGetweMU16bh1oHqIq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDD6SAOe45cvEkHVqDSrcAziUq9rNChckCJmSrxuAXYe6la5kcAeuKpSS52Rvc64q2otIE3qN4ZTaXBoG3csHjhJpK4ORa6sbELyWCbMRQGg0xgXv0HXdKIsNZNhZ3tfHtNxpCjAAeu%2BAsv8x8zFy532kSF6%2BAapm3YPOkEPjN87lzNN19XvKcbzroyMkye6R0X7oFRlmyWlCnaYHSB6R3n3Vj3PE8rAJI0ora9dDRypmEHbFaIuiNQMHsG18FlnzOaSCR9vwqnNzCWuKW3eHVLUTCST8J9%2FyR2pVH0ZAiEjZ27cXVtqb49fC6S5XzmX5HcvKDuCSNsOEuXpcLZqacrm63LNR59asdXMX1rE8Gncz9ip%2F8Fjtj68mgRmwEBjzZpJItSY2VtSnkm7F2DLAsvwaLdfRZfctQIPMHb3HfWZfJeuTHrnSu%2BNlBI5lNcU%2BQMEdPQPdeyKpc%2BnWw5TaSYaeQJPxw%2FzqLfxuTdYfrX9A5NrhhqWreDFCvQQAki2DpB7z2JSuxh6NX%2BI5qdzTX9HjwgiPCT9i9VDOaFZ5JUIQ0O3YpNf6jtRUbq1njr9jQ0vDoBN7gl%2Bg%2FD5d20rMv0p%2BGiE9ycmKmBUjXvKBNHLEKIfiO%2B4o3PKyJZY5bOBAzKedUTwwD2bv7ri0MPv%2ByL8GOqUBSytXvY6SFfs0MgCEvhA3NYPTkPBl7kZzNLRg%2For7w0BE0%2FSYlD%2BBTwyIZ%2BOS2BfE%2FYrsrAgGJYO%2FSUxSHl3iOy9zUcvMd7m%2FRtGr%2BwT%2Fwkvrd7otRS6SmTNHat%2BV8c%2BZ4A2FWNuQPfY0ubeLbWWdvpJ6sGd%2F20OPjXCVJD5bhUzomYY5mLUBtGLst%2BR3%2BSpWQ%2FUkAEzeby5F%2BHWHYW2l25Al6Kj6&X-Amz-Signature=68b5e41c3318b90187ac6e3fb6ededeaaed10ccde3f16cfd595a54e9fc143d05&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
