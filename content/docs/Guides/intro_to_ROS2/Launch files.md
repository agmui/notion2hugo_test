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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEGH6ZXT%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T230700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDCMxMSEQcM8Viutio5UODVaHAzQaRO3k4yZsuw0%2Fs9TAIhANnqBAfLI7DS%2BVEj%2FlVdVcKi7g547vh5Yx%2BezJYqNxvnKv8DCCAQABoMNjM3NDIzMTgzODA1IgyXgeV6f1M9yrfvOekq3AP6yK3pi4oempraTbVMrf90lYGe5S4TlCJGcrDTY6GFn7WHwdwQWvX0l%2FwU9lSQUCwGya%2FAlG7SbktFGo765byuH%2BVlVqravlOdwgw9C%2FZysyFir1lnrowK95ZRQicVbWAO1FD95V3QJBPf3%2FpWga%2B3LPC1Q%2BgdjIfEU%2Bobm0gu1O4JxJRG0O10wnvMEfwXxQ8%2F%2F5b4sU0ktuEd2dYQOe0n1hyHvtpqxQkj%2BjBmy9mhE2inyCr6th38GrzauC%2FpzOi1fcl4pj1P1DCCZn9Z0FYzEQYmQaxYhCN0sPjFUYiXtf%2BWs7G0ziYohlC9I298O5jDxD4X0AFiyT86liXUM9WwsYHpp1masNYTLFouGUY7VuIDQjOwiqExdqjOaYxxV8z6eTV5L5v1ngyHkAuCIr%2FVnPyR%2BAFnXqCgc1e7zc2Gggg01TwyErkvXlvwtNodibz7aKXy3pLnsoBzZeA097Gsp%2FTUZiQ1h%2Fxc5m0PLfY0Wwx38p8XjMVpOV3uZo5sgFnwJ5GxlH21QmBRzbNUK2lz9ArF8T2nPJrD9pAlSh1TW1jJb1S%2B%2BLtiXkjPjjk%2F1l1L%2FMAYqM08W6BYP%2BLff%2FNcVRNYHpEfOHkQtwxISADHKEgua96hQtXxfS7FfjCKupTBBjqkAVBW2Jqr4vf7WdLYsafrjuSB59SKuMtv9aJltXUUoU7TwN%2FlmsyJR%2BkDtRS%2B77ZodbjmLu3Yd4E6v9Aacn6DS8pkEg7cLgfX3vz%2FRjOiwvXQaYIJVt2%2FspC8HvwYlooa1dwpl8bucUaMmE7%2BJmbPs2dp%2FBZWAurDh0EblNsXFmwL%2BcisBNSvd3ctXKMft%2BejOe7Pv5i58b%2BRji39qo43v%2Bs%2B9X8z&X-Amz-Signature=4af306438fbeb8f400cf03e1e4b174b87567ba0e5a81d8360f16cd62172220f8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEGH6ZXT%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T230700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDCMxMSEQcM8Viutio5UODVaHAzQaRO3k4yZsuw0%2Fs9TAIhANnqBAfLI7DS%2BVEj%2FlVdVcKi7g547vh5Yx%2BezJYqNxvnKv8DCCAQABoMNjM3NDIzMTgzODA1IgyXgeV6f1M9yrfvOekq3AP6yK3pi4oempraTbVMrf90lYGe5S4TlCJGcrDTY6GFn7WHwdwQWvX0l%2FwU9lSQUCwGya%2FAlG7SbktFGo765byuH%2BVlVqravlOdwgw9C%2FZysyFir1lnrowK95ZRQicVbWAO1FD95V3QJBPf3%2FpWga%2B3LPC1Q%2BgdjIfEU%2Bobm0gu1O4JxJRG0O10wnvMEfwXxQ8%2F%2F5b4sU0ktuEd2dYQOe0n1hyHvtpqxQkj%2BjBmy9mhE2inyCr6th38GrzauC%2FpzOi1fcl4pj1P1DCCZn9Z0FYzEQYmQaxYhCN0sPjFUYiXtf%2BWs7G0ziYohlC9I298O5jDxD4X0AFiyT86liXUM9WwsYHpp1masNYTLFouGUY7VuIDQjOwiqExdqjOaYxxV8z6eTV5L5v1ngyHkAuCIr%2FVnPyR%2BAFnXqCgc1e7zc2Gggg01TwyErkvXlvwtNodibz7aKXy3pLnsoBzZeA097Gsp%2FTUZiQ1h%2Fxc5m0PLfY0Wwx38p8XjMVpOV3uZo5sgFnwJ5GxlH21QmBRzbNUK2lz9ArF8T2nPJrD9pAlSh1TW1jJb1S%2B%2BLtiXkjPjjk%2F1l1L%2FMAYqM08W6BYP%2BLff%2FNcVRNYHpEfOHkQtwxISADHKEgua96hQtXxfS7FfjCKupTBBjqkAVBW2Jqr4vf7WdLYsafrjuSB59SKuMtv9aJltXUUoU7TwN%2FlmsyJR%2BkDtRS%2B77ZodbjmLu3Yd4E6v9Aacn6DS8pkEg7cLgfX3vz%2FRjOiwvXQaYIJVt2%2FspC8HvwYlooa1dwpl8bucUaMmE7%2BJmbPs2dp%2FBZWAurDh0EblNsXFmwL%2BcisBNSvd3ctXKMft%2BejOe7Pv5i58b%2BRji39qo43v%2Bs%2B9X8z&X-Amz-Signature=30d155b47d1e2a537cb61fb55503aaa8e7ffcf8b8e8b8e44736a02b177013328&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEGH6ZXT%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T230700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDCMxMSEQcM8Viutio5UODVaHAzQaRO3k4yZsuw0%2Fs9TAIhANnqBAfLI7DS%2BVEj%2FlVdVcKi7g547vh5Yx%2BezJYqNxvnKv8DCCAQABoMNjM3NDIzMTgzODA1IgyXgeV6f1M9yrfvOekq3AP6yK3pi4oempraTbVMrf90lYGe5S4TlCJGcrDTY6GFn7WHwdwQWvX0l%2FwU9lSQUCwGya%2FAlG7SbktFGo765byuH%2BVlVqravlOdwgw9C%2FZysyFir1lnrowK95ZRQicVbWAO1FD95V3QJBPf3%2FpWga%2B3LPC1Q%2BgdjIfEU%2Bobm0gu1O4JxJRG0O10wnvMEfwXxQ8%2F%2F5b4sU0ktuEd2dYQOe0n1hyHvtpqxQkj%2BjBmy9mhE2inyCr6th38GrzauC%2FpzOi1fcl4pj1P1DCCZn9Z0FYzEQYmQaxYhCN0sPjFUYiXtf%2BWs7G0ziYohlC9I298O5jDxD4X0AFiyT86liXUM9WwsYHpp1masNYTLFouGUY7VuIDQjOwiqExdqjOaYxxV8z6eTV5L5v1ngyHkAuCIr%2FVnPyR%2BAFnXqCgc1e7zc2Gggg01TwyErkvXlvwtNodibz7aKXy3pLnsoBzZeA097Gsp%2FTUZiQ1h%2Fxc5m0PLfY0Wwx38p8XjMVpOV3uZo5sgFnwJ5GxlH21QmBRzbNUK2lz9ArF8T2nPJrD9pAlSh1TW1jJb1S%2B%2BLtiXkjPjjk%2F1l1L%2FMAYqM08W6BYP%2BLff%2FNcVRNYHpEfOHkQtwxISADHKEgua96hQtXxfS7FfjCKupTBBjqkAVBW2Jqr4vf7WdLYsafrjuSB59SKuMtv9aJltXUUoU7TwN%2FlmsyJR%2BkDtRS%2B77ZodbjmLu3Yd4E6v9Aacn6DS8pkEg7cLgfX3vz%2FRjOiwvXQaYIJVt2%2FspC8HvwYlooa1dwpl8bucUaMmE7%2BJmbPs2dp%2FBZWAurDh0EblNsXFmwL%2BcisBNSvd3ctXKMft%2BejOe7Pv5i58b%2BRji39qo43v%2Bs%2B9X8z&X-Amz-Signature=ce2dcc0546b8d0ed1ec70282314ae67443a11a193003f821c2929f7040cb13ae&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
