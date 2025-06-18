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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6JPK35A%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T150945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBt1yA6Puj8fkPIpjpkqpFAZbWly3jUrgRJj5nPA51jLAiEAzCwDAiTJP0JVYpuw1%2BM9f9fA5rvIjmdYm39KmIg6dBEqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP58HvpAViw8%2F4I%2FdircAz9YGrlifGl59IfXyO0MWLYPzYcCQphxZ74lASzg52RnzRL0lqrbvQ81j5a%2FgKmyUFI1iWVVQngnyachPmmwbUCYOnr8Kue5igjf0V%2FkLmXdP6QyODlgd1DMmw5GIAYMzS%2B1dBczGFL8Eu4qDnvM2Ct0h3w0C7YcIkHaoYy%2FVtKGDfAi2oGSbF6265ylfEPHLW26BHabjZwb4KAFlbR6d5IYw6RTL7yylN8Dijt9PfV6%2BljCWmX7Givq6%2FOweMAqOYBiomIdmDWlOeftscJ92y%2F5ddCkJodCTpu%2Fi5ZbKbGK%2F%2BWYtSlI5kJqzj9d3DL6TYxX2GZgMfo2qCoRfdLDQyvkXXPmToJ1iLcuMKHgIBVPKXLy2SMvXFfNYw1sMNyXV1lYdlGIlA9CoFNWLR8x1LoK0gCbmiT6lQL6BFET7mGed0N4w7pE0lu%2BYaJfspRZrlg%2BY4PyYEsTFzcZW5wio1aT2ks9U20pF71nA3PuXVbfqCfn3nC7RWEvealda3OrGtJGTPSZDuqJwrO%2BV2txJPaXmMzZ%2Bm0rqX1xYovSzS2AD2xmZFeHaOQJkx6aLvXfgli3TibSnXn7F3L%2FBYtd8fBVAg8eoppBaHlIr9IgIjQVmXyQVH5aRnUhtxJeMLbzysIGOqUBIBG2sI3N6NGhrni0HxXnbnC3OSP5ly7tOc3P%2F%2FOrkmkf5iTxxZevANOljvsot3TNx1JJYYZN8P9IfJWkjdr5n97jysdGTjNHVJDaNO5qCrCpsXPRv8%2BRoSwAFAPmsG53xXhZmOger%2BlarOQf8veyyHYw44RGbN%2B2%2B85jxvBYZKLLMiajBngkbPApSUFM6AtCti9QPJDd2KTki9rzv%2BAIUlX%2BQMQW&X-Amz-Signature=cb12f2c34ccbecdf580e73c4d7c9272b6c0c957a18c3eaa73504e268a934ba40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6JPK35A%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T150945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBt1yA6Puj8fkPIpjpkqpFAZbWly3jUrgRJj5nPA51jLAiEAzCwDAiTJP0JVYpuw1%2BM9f9fA5rvIjmdYm39KmIg6dBEqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP58HvpAViw8%2F4I%2FdircAz9YGrlifGl59IfXyO0MWLYPzYcCQphxZ74lASzg52RnzRL0lqrbvQ81j5a%2FgKmyUFI1iWVVQngnyachPmmwbUCYOnr8Kue5igjf0V%2FkLmXdP6QyODlgd1DMmw5GIAYMzS%2B1dBczGFL8Eu4qDnvM2Ct0h3w0C7YcIkHaoYy%2FVtKGDfAi2oGSbF6265ylfEPHLW26BHabjZwb4KAFlbR6d5IYw6RTL7yylN8Dijt9PfV6%2BljCWmX7Givq6%2FOweMAqOYBiomIdmDWlOeftscJ92y%2F5ddCkJodCTpu%2Fi5ZbKbGK%2F%2BWYtSlI5kJqzj9d3DL6TYxX2GZgMfo2qCoRfdLDQyvkXXPmToJ1iLcuMKHgIBVPKXLy2SMvXFfNYw1sMNyXV1lYdlGIlA9CoFNWLR8x1LoK0gCbmiT6lQL6BFET7mGed0N4w7pE0lu%2BYaJfspRZrlg%2BY4PyYEsTFzcZW5wio1aT2ks9U20pF71nA3PuXVbfqCfn3nC7RWEvealda3OrGtJGTPSZDuqJwrO%2BV2txJPaXmMzZ%2Bm0rqX1xYovSzS2AD2xmZFeHaOQJkx6aLvXfgli3TibSnXn7F3L%2FBYtd8fBVAg8eoppBaHlIr9IgIjQVmXyQVH5aRnUhtxJeMLbzysIGOqUBIBG2sI3N6NGhrni0HxXnbnC3OSP5ly7tOc3P%2F%2FOrkmkf5iTxxZevANOljvsot3TNx1JJYYZN8P9IfJWkjdr5n97jysdGTjNHVJDaNO5qCrCpsXPRv8%2BRoSwAFAPmsG53xXhZmOger%2BlarOQf8veyyHYw44RGbN%2B2%2B85jxvBYZKLLMiajBngkbPApSUFM6AtCti9QPJDd2KTki9rzv%2BAIUlX%2BQMQW&X-Amz-Signature=ac09347e34b0280dbcd7261816bf7ef6dad804f605b6c437ee65f7498a404396&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6JPK35A%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T150945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBt1yA6Puj8fkPIpjpkqpFAZbWly3jUrgRJj5nPA51jLAiEAzCwDAiTJP0JVYpuw1%2BM9f9fA5rvIjmdYm39KmIg6dBEqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP58HvpAViw8%2F4I%2FdircAz9YGrlifGl59IfXyO0MWLYPzYcCQphxZ74lASzg52RnzRL0lqrbvQ81j5a%2FgKmyUFI1iWVVQngnyachPmmwbUCYOnr8Kue5igjf0V%2FkLmXdP6QyODlgd1DMmw5GIAYMzS%2B1dBczGFL8Eu4qDnvM2Ct0h3w0C7YcIkHaoYy%2FVtKGDfAi2oGSbF6265ylfEPHLW26BHabjZwb4KAFlbR6d5IYw6RTL7yylN8Dijt9PfV6%2BljCWmX7Givq6%2FOweMAqOYBiomIdmDWlOeftscJ92y%2F5ddCkJodCTpu%2Fi5ZbKbGK%2F%2BWYtSlI5kJqzj9d3DL6TYxX2GZgMfo2qCoRfdLDQyvkXXPmToJ1iLcuMKHgIBVPKXLy2SMvXFfNYw1sMNyXV1lYdlGIlA9CoFNWLR8x1LoK0gCbmiT6lQL6BFET7mGed0N4w7pE0lu%2BYaJfspRZrlg%2BY4PyYEsTFzcZW5wio1aT2ks9U20pF71nA3PuXVbfqCfn3nC7RWEvealda3OrGtJGTPSZDuqJwrO%2BV2txJPaXmMzZ%2Bm0rqX1xYovSzS2AD2xmZFeHaOQJkx6aLvXfgli3TibSnXn7F3L%2FBYtd8fBVAg8eoppBaHlIr9IgIjQVmXyQVH5aRnUhtxJeMLbzysIGOqUBIBG2sI3N6NGhrni0HxXnbnC3OSP5ly7tOc3P%2F%2FOrkmkf5iTxxZevANOljvsot3TNx1JJYYZN8P9IfJWkjdr5n97jysdGTjNHVJDaNO5qCrCpsXPRv8%2BRoSwAFAPmsG53xXhZmOger%2BlarOQf8veyyHYw44RGbN%2B2%2B85jxvBYZKLLMiajBngkbPApSUFM6AtCti9QPJDd2KTki9rzv%2BAIUlX%2BQMQW&X-Amz-Signature=0a30ff8f90bad86272fa415a9f45e976c331b41a8431fad5524386c2ccdcb00b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
