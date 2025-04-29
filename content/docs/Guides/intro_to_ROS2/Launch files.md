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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XBRFHTH%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T033056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf2Hjsh%2Fobtpbu4%2F3E%2BAainpzXT74h%2BYMeYd0aN7FG0wIgGXtKkRzLV2XVPdyyhI6kFz8uy9ifDySvxUZb3Qlx5ZIqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7khkvHqudwZrZzXCrcA8KUm3UX2LD%2Fi5pzJe%2FqZeE1u8wQd3dT5n6XA9r4pASaRMqyf3He%2Ba6lL0PVBY25kxR966rtv2wR8tK08TJUHGC4qHw5WxJh53258ZeW%2BAvqqZ4nm9F8tMFO%2FbiMDvM1Eg%2Fp5gxhbo%2B3Mk0vIrLnTAtZGChqIjotSv942MD6zOGynk6ClF8XSpmOxNITduvB1DdKYxzSf6UobVkM%2FDQtLlOTQZosBqdsM3xMB6ylvnkofRiixVA3HUFKOY7wyU%2BJSgogba55T%2F0OdERe2ZzntHFoZCBeG52kUcZKi5thVoTFP0wl3aO3KfUy9Hi0fa99bdtOW5xeBc24mI728x2Ept%2BjmmQwJpXAKRUnD4HCm4hHNwdSipZGKAGgOMTOo9VUtKeu6YmdMVTXrnH%2BskNSTU4Nn1eAmP0zO%2Bx1itpX7w5j%2BLT7dQdEYkTzK7ASLXj8yXpVnx7MQYsr4MbrvPsxpYNmzAyS5i4EBedTV5L%2B1euk%2BvtCHNDVRrUmOok4IFU9U9BT%2BWax9bO7hVokxWPNqDddYgGwt2NSjnfFSFHvatAnmmJW5d8hAyh%2Fcrzx%2BfeAu4hvDnN7wfi1ufmkYBNytqtrj9CPklXDJBg4IFzsRAJMp3okEBAuNh4dsji%2FMKm%2FwMAGOqUBinPnJ7xDl0MLJU0h4IaWDbZNEHXZsvqL%2BUWEyFE%2Fy1XmNLFkSEc%2BTmmLBW0Gh9YtlB7B%2B8m574Ius6ulP7ZyUOZ9Uj5peAKBDbBXlxrGvbBOBzqxJGmOo3Yho%2Fu8zBjwosRjlUevgUkxt1GEXCl5GzErm3g4zF%2BNsqnR3ArcH4%2BF%2BwqjkDDyHhWbgm%2FHGXz12sSX3TOXZPTzGAYT%2B%2FHXl0rTrEwC&X-Amz-Signature=70ab49c2dbc8d8b0169a6602c35ee04242215cdea768cc9617eefd5730ecea77&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XBRFHTH%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T033056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf2Hjsh%2Fobtpbu4%2F3E%2BAainpzXT74h%2BYMeYd0aN7FG0wIgGXtKkRzLV2XVPdyyhI6kFz8uy9ifDySvxUZb3Qlx5ZIqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7khkvHqudwZrZzXCrcA8KUm3UX2LD%2Fi5pzJe%2FqZeE1u8wQd3dT5n6XA9r4pASaRMqyf3He%2Ba6lL0PVBY25kxR966rtv2wR8tK08TJUHGC4qHw5WxJh53258ZeW%2BAvqqZ4nm9F8tMFO%2FbiMDvM1Eg%2Fp5gxhbo%2B3Mk0vIrLnTAtZGChqIjotSv942MD6zOGynk6ClF8XSpmOxNITduvB1DdKYxzSf6UobVkM%2FDQtLlOTQZosBqdsM3xMB6ylvnkofRiixVA3HUFKOY7wyU%2BJSgogba55T%2F0OdERe2ZzntHFoZCBeG52kUcZKi5thVoTFP0wl3aO3KfUy9Hi0fa99bdtOW5xeBc24mI728x2Ept%2BjmmQwJpXAKRUnD4HCm4hHNwdSipZGKAGgOMTOo9VUtKeu6YmdMVTXrnH%2BskNSTU4Nn1eAmP0zO%2Bx1itpX7w5j%2BLT7dQdEYkTzK7ASLXj8yXpVnx7MQYsr4MbrvPsxpYNmzAyS5i4EBedTV5L%2B1euk%2BvtCHNDVRrUmOok4IFU9U9BT%2BWax9bO7hVokxWPNqDddYgGwt2NSjnfFSFHvatAnmmJW5d8hAyh%2Fcrzx%2BfeAu4hvDnN7wfi1ufmkYBNytqtrj9CPklXDJBg4IFzsRAJMp3okEBAuNh4dsji%2FMKm%2FwMAGOqUBinPnJ7xDl0MLJU0h4IaWDbZNEHXZsvqL%2BUWEyFE%2Fy1XmNLFkSEc%2BTmmLBW0Gh9YtlB7B%2B8m574Ius6ulP7ZyUOZ9Uj5peAKBDbBXlxrGvbBOBzqxJGmOo3Yho%2Fu8zBjwosRjlUevgUkxt1GEXCl5GzErm3g4zF%2BNsqnR3ArcH4%2BF%2BwqjkDDyHhWbgm%2FHGXz12sSX3TOXZPTzGAYT%2B%2FHXl0rTrEwC&X-Amz-Signature=c4c24b3e29e1735c20b2dfd052a876010b1f597332cd10229361bfb4f16a234a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XBRFHTH%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T033056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf2Hjsh%2Fobtpbu4%2F3E%2BAainpzXT74h%2BYMeYd0aN7FG0wIgGXtKkRzLV2XVPdyyhI6kFz8uy9ifDySvxUZb3Qlx5ZIqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7khkvHqudwZrZzXCrcA8KUm3UX2LD%2Fi5pzJe%2FqZeE1u8wQd3dT5n6XA9r4pASaRMqyf3He%2Ba6lL0PVBY25kxR966rtv2wR8tK08TJUHGC4qHw5WxJh53258ZeW%2BAvqqZ4nm9F8tMFO%2FbiMDvM1Eg%2Fp5gxhbo%2B3Mk0vIrLnTAtZGChqIjotSv942MD6zOGynk6ClF8XSpmOxNITduvB1DdKYxzSf6UobVkM%2FDQtLlOTQZosBqdsM3xMB6ylvnkofRiixVA3HUFKOY7wyU%2BJSgogba55T%2F0OdERe2ZzntHFoZCBeG52kUcZKi5thVoTFP0wl3aO3KfUy9Hi0fa99bdtOW5xeBc24mI728x2Ept%2BjmmQwJpXAKRUnD4HCm4hHNwdSipZGKAGgOMTOo9VUtKeu6YmdMVTXrnH%2BskNSTU4Nn1eAmP0zO%2Bx1itpX7w5j%2BLT7dQdEYkTzK7ASLXj8yXpVnx7MQYsr4MbrvPsxpYNmzAyS5i4EBedTV5L%2B1euk%2BvtCHNDVRrUmOok4IFU9U9BT%2BWax9bO7hVokxWPNqDddYgGwt2NSjnfFSFHvatAnmmJW5d8hAyh%2Fcrzx%2BfeAu4hvDnN7wfi1ufmkYBNytqtrj9CPklXDJBg4IFzsRAJMp3okEBAuNh4dsji%2FMKm%2FwMAGOqUBinPnJ7xDl0MLJU0h4IaWDbZNEHXZsvqL%2BUWEyFE%2Fy1XmNLFkSEc%2BTmmLBW0Gh9YtlB7B%2B8m574Ius6ulP7ZyUOZ9Uj5peAKBDbBXlxrGvbBOBzqxJGmOo3Yho%2Fu8zBjwosRjlUevgUkxt1GEXCl5GzErm3g4zF%2BNsqnR3ArcH4%2BF%2BwqjkDDyHhWbgm%2FHGXz12sSX3TOXZPTzGAYT%2B%2FHXl0rTrEwC&X-Amz-Signature=78ffe30eb9bb191eb8d5da8fba9dc937a430a335c512dc0119d7023b114a986a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
