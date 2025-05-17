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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FXOWSNZ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T220730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgVb1OGrkHtWPiK1GZH6bFpbcGT6rTItKiZ4972FJpkAiEAoQYHnD7m4ZY%2FODM%2BIcXeFT0%2BLTgFTVh4iF8lUfci7hwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDJhBmaDeWsJBK4TZvyrcA6Cd1Jn7g4jLPoxIH6hhmX2tpHV5ZG6pQzCiSv76D3HJu9V8XLYJQ0Vu0P%2BfSbcvjkjoE4w4%2FFxXdTfLjJGI3YRUkLxBDXU7b9kdo8xCLa6JMnkhLZu3uxjd46f%2BVsDxObh5kN8o9y1bYXafiTMoO9pgH8aXppT6xsTTlu%2BgBynR7zNTSzTAhTSwzOEsZ7RKF%2BI%2Ba8GCIL2DRzf%2B3nAHjNVM6D1p4EMPhferEOlDP6JqbPsgTyRaJ1ZD3OOU87p8akBnW7BijdY2OnhwPAR82fZwY%2B0YvGKpYRrxJ63uN0UM6Nw46hCvs60sX3djtV3gb%2BtbGuZsUxyEhdLkt3%2FZD9GGqRJueUQNSME1lYj4KK9WfNP92z0Tl2dwfkdvCEXT%2FxOjvq0FWMrj60A4HZ2TEio92IQnDFKTFVpJsR%2BziSEWwbH8Dj2ZgCr4ygxs%2FiCNnOMlLliZ46RWeuQNocExulBqgjV%2F2xvWwdNP2dgoAErtn25FDl%2FO%2Bp5gwbMlaiy8AddYavxQ7JttPlKRcIYhPi8k%2Ba0QZYGh%2FZ9LaPuARQlNx%2F6esbfYmLAvM6SaeZAqY%2BOfIXvX58LHPFQFItQoKFsLbxCxeMy8DdWc%2FUOSPnjqL5x%2FiwZnvwiulbZMMNr3o8EGOqUBfy3TOBMP1pjj97Ciy3fKiIugLejOeGW5Wa2FXqMUtHhRGDYUh6tFSABAiBU1BZwPT%2Bmb6jA8fsHGFQ2AhkjRYFhOSdlPZSzStfEateTZU1dYJ9MN25cWIdaZ2L8tg8f7EZL9gbh8ymrMh3dODLZvTFQ%2BDO%2BkBjKqKBZIemwMK41hcUYRBhV2u%2FWoJZh78zJsCzMDtC20559EnKIoWuYgQCu2Gc6G&X-Amz-Signature=1b0869a681cb9b6df8cff92938fafc3472264040895cba332bf884b257d5c135&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FXOWSNZ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T220730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgVb1OGrkHtWPiK1GZH6bFpbcGT6rTItKiZ4972FJpkAiEAoQYHnD7m4ZY%2FODM%2BIcXeFT0%2BLTgFTVh4iF8lUfci7hwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDJhBmaDeWsJBK4TZvyrcA6Cd1Jn7g4jLPoxIH6hhmX2tpHV5ZG6pQzCiSv76D3HJu9V8XLYJQ0Vu0P%2BfSbcvjkjoE4w4%2FFxXdTfLjJGI3YRUkLxBDXU7b9kdo8xCLa6JMnkhLZu3uxjd46f%2BVsDxObh5kN8o9y1bYXafiTMoO9pgH8aXppT6xsTTlu%2BgBynR7zNTSzTAhTSwzOEsZ7RKF%2BI%2Ba8GCIL2DRzf%2B3nAHjNVM6D1p4EMPhferEOlDP6JqbPsgTyRaJ1ZD3OOU87p8akBnW7BijdY2OnhwPAR82fZwY%2B0YvGKpYRrxJ63uN0UM6Nw46hCvs60sX3djtV3gb%2BtbGuZsUxyEhdLkt3%2FZD9GGqRJueUQNSME1lYj4KK9WfNP92z0Tl2dwfkdvCEXT%2FxOjvq0FWMrj60A4HZ2TEio92IQnDFKTFVpJsR%2BziSEWwbH8Dj2ZgCr4ygxs%2FiCNnOMlLliZ46RWeuQNocExulBqgjV%2F2xvWwdNP2dgoAErtn25FDl%2FO%2Bp5gwbMlaiy8AddYavxQ7JttPlKRcIYhPi8k%2Ba0QZYGh%2FZ9LaPuARQlNx%2F6esbfYmLAvM6SaeZAqY%2BOfIXvX58LHPFQFItQoKFsLbxCxeMy8DdWc%2FUOSPnjqL5x%2FiwZnvwiulbZMMNr3o8EGOqUBfy3TOBMP1pjj97Ciy3fKiIugLejOeGW5Wa2FXqMUtHhRGDYUh6tFSABAiBU1BZwPT%2Bmb6jA8fsHGFQ2AhkjRYFhOSdlPZSzStfEateTZU1dYJ9MN25cWIdaZ2L8tg8f7EZL9gbh8ymrMh3dODLZvTFQ%2BDO%2BkBjKqKBZIemwMK41hcUYRBhV2u%2FWoJZh78zJsCzMDtC20559EnKIoWuYgQCu2Gc6G&X-Amz-Signature=9c1f237e0d4a3e4c8eadf744916eb1f8bd7a6279dfe2f2ff20cf4ee10bfa2774&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FXOWSNZ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T220730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgVb1OGrkHtWPiK1GZH6bFpbcGT6rTItKiZ4972FJpkAiEAoQYHnD7m4ZY%2FODM%2BIcXeFT0%2BLTgFTVh4iF8lUfci7hwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDJhBmaDeWsJBK4TZvyrcA6Cd1Jn7g4jLPoxIH6hhmX2tpHV5ZG6pQzCiSv76D3HJu9V8XLYJQ0Vu0P%2BfSbcvjkjoE4w4%2FFxXdTfLjJGI3YRUkLxBDXU7b9kdo8xCLa6JMnkhLZu3uxjd46f%2BVsDxObh5kN8o9y1bYXafiTMoO9pgH8aXppT6xsTTlu%2BgBynR7zNTSzTAhTSwzOEsZ7RKF%2BI%2Ba8GCIL2DRzf%2B3nAHjNVM6D1p4EMPhferEOlDP6JqbPsgTyRaJ1ZD3OOU87p8akBnW7BijdY2OnhwPAR82fZwY%2B0YvGKpYRrxJ63uN0UM6Nw46hCvs60sX3djtV3gb%2BtbGuZsUxyEhdLkt3%2FZD9GGqRJueUQNSME1lYj4KK9WfNP92z0Tl2dwfkdvCEXT%2FxOjvq0FWMrj60A4HZ2TEio92IQnDFKTFVpJsR%2BziSEWwbH8Dj2ZgCr4ygxs%2FiCNnOMlLliZ46RWeuQNocExulBqgjV%2F2xvWwdNP2dgoAErtn25FDl%2FO%2Bp5gwbMlaiy8AddYavxQ7JttPlKRcIYhPi8k%2Ba0QZYGh%2FZ9LaPuARQlNx%2F6esbfYmLAvM6SaeZAqY%2BOfIXvX58LHPFQFItQoKFsLbxCxeMy8DdWc%2FUOSPnjqL5x%2FiwZnvwiulbZMMNr3o8EGOqUBfy3TOBMP1pjj97Ciy3fKiIugLejOeGW5Wa2FXqMUtHhRGDYUh6tFSABAiBU1BZwPT%2Bmb6jA8fsHGFQ2AhkjRYFhOSdlPZSzStfEateTZU1dYJ9MN25cWIdaZ2L8tg8f7EZL9gbh8ymrMh3dODLZvTFQ%2BDO%2BkBjKqKBZIemwMK41hcUYRBhV2u%2FWoJZh78zJsCzMDtC20559EnKIoWuYgQCu2Gc6G&X-Amz-Signature=9c5d0d92b01ee5994efcaacc0fd26cf10ff38ec1495e5124e1100ad0d94c1bcd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
