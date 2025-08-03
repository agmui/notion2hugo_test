---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y56JIR5Q%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAybHRFAM0mvkPc9w5IcOy4bfzuLcLv07tw223UTs0K4AiEAhQZN%2FF%2F8yhlZe3dNEs0g3NgJlKtkbbnKt%2Bh32bFVfAcq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDKvp1G8wYz78YRNdZircAzvdO6prQvdVukDqpgKXfU5cZfs1XrawncEuJ8Z9KlOfiwRuYEiQXK7g%2B3iNi3W8DVpf1qtSBrBlAmxq6uUoz6la%2BKZn5HPR9t9naM%2FstWVTb5r5g%2FMGRIyQe1t2G6wCeosbg4zxg7oCFmyTmoOWUmms%2B7OzVXJ5j%2BSZm%2FlDW5Bm6EEc%2FjiVJ%2FOTHLZwqkzLVcIKgvwPYPvt3Luh2DXX8OPT8QI8xaT8YLUBb5uM6E4er5HMRHL3WSpjAWWLiwckIXtsvq6j7LNh6GIvfz%2B4MJNmpF95TVAtSHsyYeMWJsKVSibtbm4S2%2FQvY6cS%2Fbwz%2BdIs58gksn7jiedsWEMozzvvn2CN9NZiMCFN0%2FejK7H%2Binfvq4Da74OXVWw%2BP0lQ3qBUYmyH7G7Sa7PYhGVFuvhqGpiF%2FBVFKoaRZLqc4RVcBW3U8G1iyiSSFwM9HeVYWWdnetK6E6HRprt8NBQ7ZQCo8kuIuSo1nJ5M2ZVDWR4bsZxv5dl%2Btt2oF3Ox5r1r4jKcAVvvWqCYTEw94QYY5F55gj9lTjXz9ZHQ5ehfLhAGaRX%2F5q7W%2Fx4Fh88JfbIlr3fpJS49HLEO79E3eYNyVzfMb3aeU0MO1Z8Z2sHX5BeEhfwpc1kWM9GN%2BLQ2MPHRvcQGOqUBklpVpQYFp2bIY3j2xnfBwUx3a70pkL5Xv2b1ekNXtnGkQd5aZHM0kVhx5QQfUaErdCOmZ6vAb13IjGQVz43cw4WKOpypGf2oszLTto4s0MyuOd4W0WocQkK0m%2Fsf6tRq58tem6%2BJzfpVcD6EAtmoBPbYrehCOufZfXQQaLulX2dSH%2B7Swt2ZuK5FfOctSNumQz0eZNfzkzQ8VnBbEaWzDsgxYLln&X-Amz-Signature=9a62b78ea7f3d68f741ef8625eb648d07d9ce9b82968131932d3918abd23f2de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y56JIR5Q%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAybHRFAM0mvkPc9w5IcOy4bfzuLcLv07tw223UTs0K4AiEAhQZN%2FF%2F8yhlZe3dNEs0g3NgJlKtkbbnKt%2Bh32bFVfAcq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDKvp1G8wYz78YRNdZircAzvdO6prQvdVukDqpgKXfU5cZfs1XrawncEuJ8Z9KlOfiwRuYEiQXK7g%2B3iNi3W8DVpf1qtSBrBlAmxq6uUoz6la%2BKZn5HPR9t9naM%2FstWVTb5r5g%2FMGRIyQe1t2G6wCeosbg4zxg7oCFmyTmoOWUmms%2B7OzVXJ5j%2BSZm%2FlDW5Bm6EEc%2FjiVJ%2FOTHLZwqkzLVcIKgvwPYPvt3Luh2DXX8OPT8QI8xaT8YLUBb5uM6E4er5HMRHL3WSpjAWWLiwckIXtsvq6j7LNh6GIvfz%2B4MJNmpF95TVAtSHsyYeMWJsKVSibtbm4S2%2FQvY6cS%2Fbwz%2BdIs58gksn7jiedsWEMozzvvn2CN9NZiMCFN0%2FejK7H%2Binfvq4Da74OXVWw%2BP0lQ3qBUYmyH7G7Sa7PYhGVFuvhqGpiF%2FBVFKoaRZLqc4RVcBW3U8G1iyiSSFwM9HeVYWWdnetK6E6HRprt8NBQ7ZQCo8kuIuSo1nJ5M2ZVDWR4bsZxv5dl%2Btt2oF3Ox5r1r4jKcAVvvWqCYTEw94QYY5F55gj9lTjXz9ZHQ5ehfLhAGaRX%2F5q7W%2Fx4Fh88JfbIlr3fpJS49HLEO79E3eYNyVzfMb3aeU0MO1Z8Z2sHX5BeEhfwpc1kWM9GN%2BLQ2MPHRvcQGOqUBklpVpQYFp2bIY3j2xnfBwUx3a70pkL5Xv2b1ekNXtnGkQd5aZHM0kVhx5QQfUaErdCOmZ6vAb13IjGQVz43cw4WKOpypGf2oszLTto4s0MyuOd4W0WocQkK0m%2Fsf6tRq58tem6%2BJzfpVcD6EAtmoBPbYrehCOufZfXQQaLulX2dSH%2B7Swt2ZuK5FfOctSNumQz0eZNfzkzQ8VnBbEaWzDsgxYLln&X-Amz-Signature=69a9c3930ec5633892cf5705d1a496acb26e2a45d1a79e2056db46b53dea0264&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y56JIR5Q%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAybHRFAM0mvkPc9w5IcOy4bfzuLcLv07tw223UTs0K4AiEAhQZN%2FF%2F8yhlZe3dNEs0g3NgJlKtkbbnKt%2Bh32bFVfAcq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDKvp1G8wYz78YRNdZircAzvdO6prQvdVukDqpgKXfU5cZfs1XrawncEuJ8Z9KlOfiwRuYEiQXK7g%2B3iNi3W8DVpf1qtSBrBlAmxq6uUoz6la%2BKZn5HPR9t9naM%2FstWVTb5r5g%2FMGRIyQe1t2G6wCeosbg4zxg7oCFmyTmoOWUmms%2B7OzVXJ5j%2BSZm%2FlDW5Bm6EEc%2FjiVJ%2FOTHLZwqkzLVcIKgvwPYPvt3Luh2DXX8OPT8QI8xaT8YLUBb5uM6E4er5HMRHL3WSpjAWWLiwckIXtsvq6j7LNh6GIvfz%2B4MJNmpF95TVAtSHsyYeMWJsKVSibtbm4S2%2FQvY6cS%2Fbwz%2BdIs58gksn7jiedsWEMozzvvn2CN9NZiMCFN0%2FejK7H%2Binfvq4Da74OXVWw%2BP0lQ3qBUYmyH7G7Sa7PYhGVFuvhqGpiF%2FBVFKoaRZLqc4RVcBW3U8G1iyiSSFwM9HeVYWWdnetK6E6HRprt8NBQ7ZQCo8kuIuSo1nJ5M2ZVDWR4bsZxv5dl%2Btt2oF3Ox5r1r4jKcAVvvWqCYTEw94QYY5F55gj9lTjXz9ZHQ5ehfLhAGaRX%2F5q7W%2Fx4Fh88JfbIlr3fpJS49HLEO79E3eYNyVzfMb3aeU0MO1Z8Z2sHX5BeEhfwpc1kWM9GN%2BLQ2MPHRvcQGOqUBklpVpQYFp2bIY3j2xnfBwUx3a70pkL5Xv2b1ekNXtnGkQd5aZHM0kVhx5QQfUaErdCOmZ6vAb13IjGQVz43cw4WKOpypGf2oszLTto4s0MyuOd4W0WocQkK0m%2Fsf6tRq58tem6%2BJzfpVcD6EAtmoBPbYrehCOufZfXQQaLulX2dSH%2B7Swt2ZuK5FfOctSNumQz0eZNfzkzQ8VnBbEaWzDsgxYLln&X-Amz-Signature=c894ccbc0f0e4df127f17b855fbeb6103ada453fbeae9e7c996dba2d1e5730e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
