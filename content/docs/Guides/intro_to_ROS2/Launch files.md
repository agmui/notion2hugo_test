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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUDE5FMY%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T170826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICPHGGSpAIc8e%2F%2F44ImiZ3qZM64PHF%2FVvlQxVxKYMbJ9AiB%2FRajb86zVC13zj%2F3HIXaUMCCtsuwPLoninB7gEwEucSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM78I0%2BmoE6pbY3DeUKtwD%2FP0AlmaX609mOsastAwzlXvcP2t3k1crtg7txYqHBN3gMoAwtPfMAUOsfSoT8KkvhEAC9aivaeGV4SBHbNLPp7z0Od9q3hKESvPkOFMSbloSnwHV%2F5ZjE8xpJctdu%2BYFSNy3fA9FMaIGOTsQNP37s9js5RUTrJkMXW9M%2Ba9XLo3UZx21q4R8Tb99Ta7EGQklHB%2FUpa0anVuYyCWNF30pBtNpFu%2Fh9mQR1nvrnQCHGuaysD5xCYfiPe%2Fi1bm8Lws1L6R1uYPQuqKIgG4UW55IUaabeV4fuQoVr%2FJEZqqZcsXVl3BX0Yj6Cqd5uapwyxnH6TK7%2FdYVF6l4kS%2FQqEvs1tWIikiIqulRYE0e5nrVOXVOgzvzdgQdBAYOOlipsXh1fXdnFAYQvFIYS5LGwcLJ9lxTurC1kYtg3o15Vkn4byK294CLwbQvd6fkyPgRTPGRQVZcqDbtsCY4h9oBw4etAhi0bMfvBf7CemhojjlQM2%2BmvLnaJebqFr0RCBDNHewCeBmEsD4QrEYJpiAVDBvZEZl4K9JyMcWUeO2n37Pvp9QXSbhf64IRFeukOLWeqhlvhhUrp4Q%2BJ%2FPnvVcd%2FNtXSZzCnQWJMyYgxhxHoUr1o9uA0rwM9A24MCwpDFowzrjuwwY6pgE4l5Tnhy78u%2FiEmXpRZJGVe6EgDxypvw%2F%2B0a7vJeppQX34Kk%2BfkCizHpOzvp0g3Q9YDyPjbWLctkFCKNUOinFFSZ6aHC1SH4IevxNVgFre%2Fq6Sw57AX6KA7XJbO%2F6B9gw8qlgWYB%2Fb08BpkM3VOszn8bF%2FzX5%2BgnjWD20UZzTmlpw%2BoCenrQlyasQZoHL1iOsF6MhWgEi4pmeSOVAnM8%2F%2Bzt1XjmJV&X-Amz-Signature=4205746b7b11f09e8eef60ca3623b8f7913b52f2ce67e856d5515a727fe4302c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUDE5FMY%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T170826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICPHGGSpAIc8e%2F%2F44ImiZ3qZM64PHF%2FVvlQxVxKYMbJ9AiB%2FRajb86zVC13zj%2F3HIXaUMCCtsuwPLoninB7gEwEucSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM78I0%2BmoE6pbY3DeUKtwD%2FP0AlmaX609mOsastAwzlXvcP2t3k1crtg7txYqHBN3gMoAwtPfMAUOsfSoT8KkvhEAC9aivaeGV4SBHbNLPp7z0Od9q3hKESvPkOFMSbloSnwHV%2F5ZjE8xpJctdu%2BYFSNy3fA9FMaIGOTsQNP37s9js5RUTrJkMXW9M%2Ba9XLo3UZx21q4R8Tb99Ta7EGQklHB%2FUpa0anVuYyCWNF30pBtNpFu%2Fh9mQR1nvrnQCHGuaysD5xCYfiPe%2Fi1bm8Lws1L6R1uYPQuqKIgG4UW55IUaabeV4fuQoVr%2FJEZqqZcsXVl3BX0Yj6Cqd5uapwyxnH6TK7%2FdYVF6l4kS%2FQqEvs1tWIikiIqulRYE0e5nrVOXVOgzvzdgQdBAYOOlipsXh1fXdnFAYQvFIYS5LGwcLJ9lxTurC1kYtg3o15Vkn4byK294CLwbQvd6fkyPgRTPGRQVZcqDbtsCY4h9oBw4etAhi0bMfvBf7CemhojjlQM2%2BmvLnaJebqFr0RCBDNHewCeBmEsD4QrEYJpiAVDBvZEZl4K9JyMcWUeO2n37Pvp9QXSbhf64IRFeukOLWeqhlvhhUrp4Q%2BJ%2FPnvVcd%2FNtXSZzCnQWJMyYgxhxHoUr1o9uA0rwM9A24MCwpDFowzrjuwwY6pgE4l5Tnhy78u%2FiEmXpRZJGVe6EgDxypvw%2F%2B0a7vJeppQX34Kk%2BfkCizHpOzvp0g3Q9YDyPjbWLctkFCKNUOinFFSZ6aHC1SH4IevxNVgFre%2Fq6Sw57AX6KA7XJbO%2F6B9gw8qlgWYB%2Fb08BpkM3VOszn8bF%2FzX5%2BgnjWD20UZzTmlpw%2BoCenrQlyasQZoHL1iOsF6MhWgEi4pmeSOVAnM8%2F%2Bzt1XjmJV&X-Amz-Signature=5cb83c521dbdc12f03f2d5f7b5c582bdae1518c92119a4c06a91d9b53326fd6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUDE5FMY%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T170826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICPHGGSpAIc8e%2F%2F44ImiZ3qZM64PHF%2FVvlQxVxKYMbJ9AiB%2FRajb86zVC13zj%2F3HIXaUMCCtsuwPLoninB7gEwEucSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM78I0%2BmoE6pbY3DeUKtwD%2FP0AlmaX609mOsastAwzlXvcP2t3k1crtg7txYqHBN3gMoAwtPfMAUOsfSoT8KkvhEAC9aivaeGV4SBHbNLPp7z0Od9q3hKESvPkOFMSbloSnwHV%2F5ZjE8xpJctdu%2BYFSNy3fA9FMaIGOTsQNP37s9js5RUTrJkMXW9M%2Ba9XLo3UZx21q4R8Tb99Ta7EGQklHB%2FUpa0anVuYyCWNF30pBtNpFu%2Fh9mQR1nvrnQCHGuaysD5xCYfiPe%2Fi1bm8Lws1L6R1uYPQuqKIgG4UW55IUaabeV4fuQoVr%2FJEZqqZcsXVl3BX0Yj6Cqd5uapwyxnH6TK7%2FdYVF6l4kS%2FQqEvs1tWIikiIqulRYE0e5nrVOXVOgzvzdgQdBAYOOlipsXh1fXdnFAYQvFIYS5LGwcLJ9lxTurC1kYtg3o15Vkn4byK294CLwbQvd6fkyPgRTPGRQVZcqDbtsCY4h9oBw4etAhi0bMfvBf7CemhojjlQM2%2BmvLnaJebqFr0RCBDNHewCeBmEsD4QrEYJpiAVDBvZEZl4K9JyMcWUeO2n37Pvp9QXSbhf64IRFeukOLWeqhlvhhUrp4Q%2BJ%2FPnvVcd%2FNtXSZzCnQWJMyYgxhxHoUr1o9uA0rwM9A24MCwpDFowzrjuwwY6pgE4l5Tnhy78u%2FiEmXpRZJGVe6EgDxypvw%2F%2B0a7vJeppQX34Kk%2BfkCizHpOzvp0g3Q9YDyPjbWLctkFCKNUOinFFSZ6aHC1SH4IevxNVgFre%2Fq6Sw57AX6KA7XJbO%2F6B9gw8qlgWYB%2Fb08BpkM3VOszn8bF%2FzX5%2BgnjWD20UZzTmlpw%2BoCenrQlyasQZoHL1iOsF6MhWgEi4pmeSOVAnM8%2F%2Bzt1XjmJV&X-Amz-Signature=a3d1affa033c6bd164badeea5f7ced95461b1d7eaaf61a15889b2c8b449ce0bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
