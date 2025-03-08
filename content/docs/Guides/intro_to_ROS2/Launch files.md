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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EOIZEDE%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T150216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIAHTfekJuw3005F%2BPuLIqiZ7FqcEZp8W%2FoUWgOsjzRXeAiAOUPxQtI0bQuXfXZ1NMHVWwtZf3AReGkTzaQcVDqKp9yr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMirHope4hZhajRgk%2BKtwD7qqZwJqDrj3w2e32OO4Kx2XaiVAKeiGJI4XrbqEupI%2F4HOUdkrtAcS7B7mzarG1gk2Eqct8CIbROqiP%2B1gDKGgP%2BosWPm1vtLO07nG2BqYdHAZ7L13SkPBoI0G0lmmaeX3igm84FiHonNIQ%2BscRbPfB8z1KNlGYgWPETXWtq6dl%2Fr3J4lGrXZZDejZcGp%2BV2VoR4mqfnZhdyZ5Qqqs9BRcJRxjymRzXaF09xNRfw8SIsmhbf1ogEAa%2FcHvVZ2lxz39%2FhIZSdVWp2PN%2FhQ6I3zfKqlR6EFcY2Yn6UHCdtr2y3AaiOQ43SSlM944YkmsDohjoCUGwVsJcPTj75ynNNC3Df4N9KMVOwnx8fjBTiYbY%2BoNaKDKV%2FZpYx4jqXpV3tdYQhvJ5n0B3DbUQThtTSAeUOSO7v5lsuq%2BdPH6H%2BIdrhVUOdujEG%2FNIjzcXRA0qzorp5e3KmvyaG0qW6a4jwY0K%2B6Zx%2B3lrOEp%2FtZ7rQjXfAKhYOFcWIvUHRqqH1zeQFIhYrmLvf49O4fV%2BE2XcRzL9mJIVghKUpDSG6F3tYukaKNX5A%2BmnK7qdTsF5WDxBh%2BoaMxVvJHy4RmAUEy5uB6gq%2B5YzY8C9Of%2FdHZHu8VQYzWzZpCvjH6%2Bp6XR4w7rKxvgY6pgH5lqZaNwv76DepGgLos5OmgJBvj113suuGR6ozG2KKf%2F2kiwcY%2B9EFkfCzjXiGtOtty9F0EsDn8JKSlSFjU8EePy9MSJ73VyS%2FJTZCDQVZA29g2BPsZne2YtHo3V1PolsEUFFeOs0yGu0naVqsXiHXs7Pv98nK4zj2%2B8UB0%2B3LYkvtwMrA%2BfhIEVMeDXqRNT1M6bWbngItDvivYexDQtn0YSa4tyfs&X-Amz-Signature=29af767c6d9b6521492da2e7868526fc01c7e893c65f45206bd380c35595cb88&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EOIZEDE%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T150216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIAHTfekJuw3005F%2BPuLIqiZ7FqcEZp8W%2FoUWgOsjzRXeAiAOUPxQtI0bQuXfXZ1NMHVWwtZf3AReGkTzaQcVDqKp9yr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMirHope4hZhajRgk%2BKtwD7qqZwJqDrj3w2e32OO4Kx2XaiVAKeiGJI4XrbqEupI%2F4HOUdkrtAcS7B7mzarG1gk2Eqct8CIbROqiP%2B1gDKGgP%2BosWPm1vtLO07nG2BqYdHAZ7L13SkPBoI0G0lmmaeX3igm84FiHonNIQ%2BscRbPfB8z1KNlGYgWPETXWtq6dl%2Fr3J4lGrXZZDejZcGp%2BV2VoR4mqfnZhdyZ5Qqqs9BRcJRxjymRzXaF09xNRfw8SIsmhbf1ogEAa%2FcHvVZ2lxz39%2FhIZSdVWp2PN%2FhQ6I3zfKqlR6EFcY2Yn6UHCdtr2y3AaiOQ43SSlM944YkmsDohjoCUGwVsJcPTj75ynNNC3Df4N9KMVOwnx8fjBTiYbY%2BoNaKDKV%2FZpYx4jqXpV3tdYQhvJ5n0B3DbUQThtTSAeUOSO7v5lsuq%2BdPH6H%2BIdrhVUOdujEG%2FNIjzcXRA0qzorp5e3KmvyaG0qW6a4jwY0K%2B6Zx%2B3lrOEp%2FtZ7rQjXfAKhYOFcWIvUHRqqH1zeQFIhYrmLvf49O4fV%2BE2XcRzL9mJIVghKUpDSG6F3tYukaKNX5A%2BmnK7qdTsF5WDxBh%2BoaMxVvJHy4RmAUEy5uB6gq%2B5YzY8C9Of%2FdHZHu8VQYzWzZpCvjH6%2Bp6XR4w7rKxvgY6pgH5lqZaNwv76DepGgLos5OmgJBvj113suuGR6ozG2KKf%2F2kiwcY%2B9EFkfCzjXiGtOtty9F0EsDn8JKSlSFjU8EePy9MSJ73VyS%2FJTZCDQVZA29g2BPsZne2YtHo3V1PolsEUFFeOs0yGu0naVqsXiHXs7Pv98nK4zj2%2B8UB0%2B3LYkvtwMrA%2BfhIEVMeDXqRNT1M6bWbngItDvivYexDQtn0YSa4tyfs&X-Amz-Signature=f20c413b4000dcdba9eef3fbda989bb2858e5711d59ae4b576a0ded85d4649cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EOIZEDE%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T150216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIAHTfekJuw3005F%2BPuLIqiZ7FqcEZp8W%2FoUWgOsjzRXeAiAOUPxQtI0bQuXfXZ1NMHVWwtZf3AReGkTzaQcVDqKp9yr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMirHope4hZhajRgk%2BKtwD7qqZwJqDrj3w2e32OO4Kx2XaiVAKeiGJI4XrbqEupI%2F4HOUdkrtAcS7B7mzarG1gk2Eqct8CIbROqiP%2B1gDKGgP%2BosWPm1vtLO07nG2BqYdHAZ7L13SkPBoI0G0lmmaeX3igm84FiHonNIQ%2BscRbPfB8z1KNlGYgWPETXWtq6dl%2Fr3J4lGrXZZDejZcGp%2BV2VoR4mqfnZhdyZ5Qqqs9BRcJRxjymRzXaF09xNRfw8SIsmhbf1ogEAa%2FcHvVZ2lxz39%2FhIZSdVWp2PN%2FhQ6I3zfKqlR6EFcY2Yn6UHCdtr2y3AaiOQ43SSlM944YkmsDohjoCUGwVsJcPTj75ynNNC3Df4N9KMVOwnx8fjBTiYbY%2BoNaKDKV%2FZpYx4jqXpV3tdYQhvJ5n0B3DbUQThtTSAeUOSO7v5lsuq%2BdPH6H%2BIdrhVUOdujEG%2FNIjzcXRA0qzorp5e3KmvyaG0qW6a4jwY0K%2B6Zx%2B3lrOEp%2FtZ7rQjXfAKhYOFcWIvUHRqqH1zeQFIhYrmLvf49O4fV%2BE2XcRzL9mJIVghKUpDSG6F3tYukaKNX5A%2BmnK7qdTsF5WDxBh%2BoaMxVvJHy4RmAUEy5uB6gq%2B5YzY8C9Of%2FdHZHu8VQYzWzZpCvjH6%2Bp6XR4w7rKxvgY6pgH5lqZaNwv76DepGgLos5OmgJBvj113suuGR6ozG2KKf%2F2kiwcY%2B9EFkfCzjXiGtOtty9F0EsDn8JKSlSFjU8EePy9MSJ73VyS%2FJTZCDQVZA29g2BPsZne2YtHo3V1PolsEUFFeOs0yGu0naVqsXiHXs7Pv98nK4zj2%2B8UB0%2B3LYkvtwMrA%2BfhIEVMeDXqRNT1M6bWbngItDvivYexDQtn0YSa4tyfs&X-Amz-Signature=1cf2f4395c139db4cb190ecb9e0ee22e52dfb74a33be7534f406b579c8353671&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
