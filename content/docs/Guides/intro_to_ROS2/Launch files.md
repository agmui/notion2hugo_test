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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7RKL6WB%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T061415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRUQhCA2M3l1A8fN43W0IHwrERXcZnZUy9YsRQRCXovAIhAItXz5KvfvIrzXigDgpdo%2FEO7whSZQErVSy6njc6c44kKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2F4YuljGJb9oLo1nMq3AO6yVC738kkp7%2BQs8u%2Fw0D9XerXhIgib3J%2FH9BTUuxrXAvSE58K0hgoVQ%2FmTXgc8Qiijdb3DbsNm9fF4u8ivfkhx%2FKjjKJ1iN2I%2FeKSRWpysPBYy4plI4ja8NnT9mK91SO2brVdCijVEqkUF8LOE4SOHgvV6TCl4S6HpqdDHMmaSnDxiJc1sc%2FO6XkWYB4YpEH8nqeGdbT3gugsjzCctcHbFdgQyP%2Ffm%2BmMoY8%2FFR6fFbaMGRYdIN2BhZgxYGA2aRgBgBApjQ5NavEB0b3QDTb5ORt88lkAsxtf5NsAblfgt2BJ1IFc4VMCQRk3jeLE2Uya8vsZ5JinkBaVANN3A5WpOPORksJUFz4XW4%2BTggvGVEv%2FNkTLCs0xLI%2FcIZJkYmMhWZbIvFt%2BCGhfGjHxfXANEhCfA2PGF4ae8Jj2qiWWHInzL1DESfppO%2F8WNlyjcUP2YMoXv5pJumhqJpIO3kxRzISX7mMsESb1nDxK9n2iMeeDAZPN0KRYkagDL7pYYZ9Fi8WkH9nLm3i1Gak5kn55bkaHluQJGBUOulZhsR0sNT6ONZxP%2BqTMHzJdLaGX65GZrSh2Xd8qAw5LS%2BeOmvfKmeBeNdoYR6MebGzAZljlxn2HiMGHcDOk11fNWzCOvIjDBjqkAezgegW2wym60of%2FG%2FfxmhMBv5JKmDQ4f9wXY7BR3vhDZbD2GXM0wzRTqGbV5u4mrmlY6Yt2mW7HRm7rbpiDyjCWfKZNGK7ztGfm%2Biy040VjlgBy9xbwDAaT%2FE%2By1uFdcWK0vnSgZPbCoirTlokYhPp3dERGjKT6uqB9TD4RbveM5DsauIsFHyDIfWaaXlbPziioVCMXhFnHh%2BoZF7%2FAlYuIzf2u&X-Amz-Signature=d1fb06e2076714d692c14bc2b8f68dbf6bb8abe65ccb4ad57252809a238279c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7RKL6WB%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T061415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRUQhCA2M3l1A8fN43W0IHwrERXcZnZUy9YsRQRCXovAIhAItXz5KvfvIrzXigDgpdo%2FEO7whSZQErVSy6njc6c44kKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2F4YuljGJb9oLo1nMq3AO6yVC738kkp7%2BQs8u%2Fw0D9XerXhIgib3J%2FH9BTUuxrXAvSE58K0hgoVQ%2FmTXgc8Qiijdb3DbsNm9fF4u8ivfkhx%2FKjjKJ1iN2I%2FeKSRWpysPBYy4plI4ja8NnT9mK91SO2brVdCijVEqkUF8LOE4SOHgvV6TCl4S6HpqdDHMmaSnDxiJc1sc%2FO6XkWYB4YpEH8nqeGdbT3gugsjzCctcHbFdgQyP%2Ffm%2BmMoY8%2FFR6fFbaMGRYdIN2BhZgxYGA2aRgBgBApjQ5NavEB0b3QDTb5ORt88lkAsxtf5NsAblfgt2BJ1IFc4VMCQRk3jeLE2Uya8vsZ5JinkBaVANN3A5WpOPORksJUFz4XW4%2BTggvGVEv%2FNkTLCs0xLI%2FcIZJkYmMhWZbIvFt%2BCGhfGjHxfXANEhCfA2PGF4ae8Jj2qiWWHInzL1DESfppO%2F8WNlyjcUP2YMoXv5pJumhqJpIO3kxRzISX7mMsESb1nDxK9n2iMeeDAZPN0KRYkagDL7pYYZ9Fi8WkH9nLm3i1Gak5kn55bkaHluQJGBUOulZhsR0sNT6ONZxP%2BqTMHzJdLaGX65GZrSh2Xd8qAw5LS%2BeOmvfKmeBeNdoYR6MebGzAZljlxn2HiMGHcDOk11fNWzCOvIjDBjqkAezgegW2wym60of%2FG%2FfxmhMBv5JKmDQ4f9wXY7BR3vhDZbD2GXM0wzRTqGbV5u4mrmlY6Yt2mW7HRm7rbpiDyjCWfKZNGK7ztGfm%2Biy040VjlgBy9xbwDAaT%2FE%2By1uFdcWK0vnSgZPbCoirTlokYhPp3dERGjKT6uqB9TD4RbveM5DsauIsFHyDIfWaaXlbPziioVCMXhFnHh%2BoZF7%2FAlYuIzf2u&X-Amz-Signature=312a3a46d0055bd65a26a17326a9c77d5a03fc1d8da0d5f812ef0822ba996f44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7RKL6WB%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T061415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRUQhCA2M3l1A8fN43W0IHwrERXcZnZUy9YsRQRCXovAIhAItXz5KvfvIrzXigDgpdo%2FEO7whSZQErVSy6njc6c44kKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2F4YuljGJb9oLo1nMq3AO6yVC738kkp7%2BQs8u%2Fw0D9XerXhIgib3J%2FH9BTUuxrXAvSE58K0hgoVQ%2FmTXgc8Qiijdb3DbsNm9fF4u8ivfkhx%2FKjjKJ1iN2I%2FeKSRWpysPBYy4plI4ja8NnT9mK91SO2brVdCijVEqkUF8LOE4SOHgvV6TCl4S6HpqdDHMmaSnDxiJc1sc%2FO6XkWYB4YpEH8nqeGdbT3gugsjzCctcHbFdgQyP%2Ffm%2BmMoY8%2FFR6fFbaMGRYdIN2BhZgxYGA2aRgBgBApjQ5NavEB0b3QDTb5ORt88lkAsxtf5NsAblfgt2BJ1IFc4VMCQRk3jeLE2Uya8vsZ5JinkBaVANN3A5WpOPORksJUFz4XW4%2BTggvGVEv%2FNkTLCs0xLI%2FcIZJkYmMhWZbIvFt%2BCGhfGjHxfXANEhCfA2PGF4ae8Jj2qiWWHInzL1DESfppO%2F8WNlyjcUP2YMoXv5pJumhqJpIO3kxRzISX7mMsESb1nDxK9n2iMeeDAZPN0KRYkagDL7pYYZ9Fi8WkH9nLm3i1Gak5kn55bkaHluQJGBUOulZhsR0sNT6ONZxP%2BqTMHzJdLaGX65GZrSh2Xd8qAw5LS%2BeOmvfKmeBeNdoYR6MebGzAZljlxn2HiMGHcDOk11fNWzCOvIjDBjqkAezgegW2wym60of%2FG%2FfxmhMBv5JKmDQ4f9wXY7BR3vhDZbD2GXM0wzRTqGbV5u4mrmlY6Yt2mW7HRm7rbpiDyjCWfKZNGK7ztGfm%2Biy040VjlgBy9xbwDAaT%2FE%2By1uFdcWK0vnSgZPbCoirTlokYhPp3dERGjKT6uqB9TD4RbveM5DsauIsFHyDIfWaaXlbPziioVCMXhFnHh%2BoZF7%2FAlYuIzf2u&X-Amz-Signature=0183240a4065c299d62cf41457b0bffef96a7dc380aff79800db8681233a77c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
