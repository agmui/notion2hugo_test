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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KZZF54P%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T210837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCUXFNF4N44q6smpDJpjR4BP7AXVXxOjvgJ9AA8rTaRbQIhAPhSrIjR7l4E65s%2FlP15DQczKbWFEf9SyLhWmI82%2FznPKv8DCH4QABoMNjM3NDIzMTgzODA1IgzXEicvTgb%2BZkDRKEgq3AM6qQw4hu%2B7dfjOW2jcrt4xFkJRWba%2FTpnDrPWx4GFED5oVxEL3Sbc%2BujHLBcT92zIjFu6OiDhheS6omPHsY0v4ZNGxiZePR%2BLzG8elYGDVdCQ9mtrB1KP2YUpylgaP6u3wyAfYn6KpE37fj3KMiBMuOOMgtE6vvWYQ%2FaRs%2BX4pyKC9KAiv%2FlrYdiEDkycksJS3CBusfC4%2FFAj%2FsZv58IR%2BR7EE0%2BXY3oOXwZFbyiXtKmDfpNTkgqrMvQAPX6yWZReMHms4xVXrK%2FvY0QpKZfobkKJTVyoBiovF%2FUO6AtCwszcLy3Y4EXKEQdMabwMb1I6G1CD6a6E%2FZY1JBLOpUCbTRQRVL0EwiZ3y1hP0Ek3mCIAoP1FV5mr8stmP%2F8sqViE6wmmjEPMnU4TRiY3YyQaYltzPKVsm%2F8eAhVZ4QlgutJKiVjcv5UMs8a38mVxj%2BN8LfF8XkJRBnTss62JD%2FRXp11Fe31U9VDL3yeoNro4Fv9uGrk1Qm7PILf8AV3S833cYjCaiQ0%2BEtMv98K6MP9ZvzMtC95rg%2BA9dhOaSZk9qC9MiLiR3jdfRprWu5m4dyuS6zbxRIJKSUvToLyYvSpmj%2F8q%2BdQjUEYdEVqSafYH0k5azl%2BqUFQVru01YpjDSuOXDBjqkAa1L6LFjHaVj%2B3e1UxjGHYr2PwcKurmaJRJJ3Jfv87rrCc%2BwkRJAuyetEbvGL8FN3xoYZRYkb2lhaPlOaxW8DeFzGCv%2BwrCcL0lidfULrC9r6ASviYXXy3gwNFa23tpOdzVEvpxINlqa6k2ExlfuTN9cDee43jjVxGyE0X5uEVfQTXo%2B8hqJHr6CexBBz2v9Zpc%2FGOyB4pOGMKrJSLn3Zhs7XWAF&X-Amz-Signature=e619303b1a52eaf20e31f7133ecf667dfe40005b0574b2a34406f9049c880dc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KZZF54P%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T210837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCUXFNF4N44q6smpDJpjR4BP7AXVXxOjvgJ9AA8rTaRbQIhAPhSrIjR7l4E65s%2FlP15DQczKbWFEf9SyLhWmI82%2FznPKv8DCH4QABoMNjM3NDIzMTgzODA1IgzXEicvTgb%2BZkDRKEgq3AM6qQw4hu%2B7dfjOW2jcrt4xFkJRWba%2FTpnDrPWx4GFED5oVxEL3Sbc%2BujHLBcT92zIjFu6OiDhheS6omPHsY0v4ZNGxiZePR%2BLzG8elYGDVdCQ9mtrB1KP2YUpylgaP6u3wyAfYn6KpE37fj3KMiBMuOOMgtE6vvWYQ%2FaRs%2BX4pyKC9KAiv%2FlrYdiEDkycksJS3CBusfC4%2FFAj%2FsZv58IR%2BR7EE0%2BXY3oOXwZFbyiXtKmDfpNTkgqrMvQAPX6yWZReMHms4xVXrK%2FvY0QpKZfobkKJTVyoBiovF%2FUO6AtCwszcLy3Y4EXKEQdMabwMb1I6G1CD6a6E%2FZY1JBLOpUCbTRQRVL0EwiZ3y1hP0Ek3mCIAoP1FV5mr8stmP%2F8sqViE6wmmjEPMnU4TRiY3YyQaYltzPKVsm%2F8eAhVZ4QlgutJKiVjcv5UMs8a38mVxj%2BN8LfF8XkJRBnTss62JD%2FRXp11Fe31U9VDL3yeoNro4Fv9uGrk1Qm7PILf8AV3S833cYjCaiQ0%2BEtMv98K6MP9ZvzMtC95rg%2BA9dhOaSZk9qC9MiLiR3jdfRprWu5m4dyuS6zbxRIJKSUvToLyYvSpmj%2F8q%2BdQjUEYdEVqSafYH0k5azl%2BqUFQVru01YpjDSuOXDBjqkAa1L6LFjHaVj%2B3e1UxjGHYr2PwcKurmaJRJJ3Jfv87rrCc%2BwkRJAuyetEbvGL8FN3xoYZRYkb2lhaPlOaxW8DeFzGCv%2BwrCcL0lidfULrC9r6ASviYXXy3gwNFa23tpOdzVEvpxINlqa6k2ExlfuTN9cDee43jjVxGyE0X5uEVfQTXo%2B8hqJHr6CexBBz2v9Zpc%2FGOyB4pOGMKrJSLn3Zhs7XWAF&X-Amz-Signature=80fffe9794ad04f079d1a96932ecf12ea1a410b1da9f6f14b24c4484e770c23e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KZZF54P%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T210837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCUXFNF4N44q6smpDJpjR4BP7AXVXxOjvgJ9AA8rTaRbQIhAPhSrIjR7l4E65s%2FlP15DQczKbWFEf9SyLhWmI82%2FznPKv8DCH4QABoMNjM3NDIzMTgzODA1IgzXEicvTgb%2BZkDRKEgq3AM6qQw4hu%2B7dfjOW2jcrt4xFkJRWba%2FTpnDrPWx4GFED5oVxEL3Sbc%2BujHLBcT92zIjFu6OiDhheS6omPHsY0v4ZNGxiZePR%2BLzG8elYGDVdCQ9mtrB1KP2YUpylgaP6u3wyAfYn6KpE37fj3KMiBMuOOMgtE6vvWYQ%2FaRs%2BX4pyKC9KAiv%2FlrYdiEDkycksJS3CBusfC4%2FFAj%2FsZv58IR%2BR7EE0%2BXY3oOXwZFbyiXtKmDfpNTkgqrMvQAPX6yWZReMHms4xVXrK%2FvY0QpKZfobkKJTVyoBiovF%2FUO6AtCwszcLy3Y4EXKEQdMabwMb1I6G1CD6a6E%2FZY1JBLOpUCbTRQRVL0EwiZ3y1hP0Ek3mCIAoP1FV5mr8stmP%2F8sqViE6wmmjEPMnU4TRiY3YyQaYltzPKVsm%2F8eAhVZ4QlgutJKiVjcv5UMs8a38mVxj%2BN8LfF8XkJRBnTss62JD%2FRXp11Fe31U9VDL3yeoNro4Fv9uGrk1Qm7PILf8AV3S833cYjCaiQ0%2BEtMv98K6MP9ZvzMtC95rg%2BA9dhOaSZk9qC9MiLiR3jdfRprWu5m4dyuS6zbxRIJKSUvToLyYvSpmj%2F8q%2BdQjUEYdEVqSafYH0k5azl%2BqUFQVru01YpjDSuOXDBjqkAa1L6LFjHaVj%2B3e1UxjGHYr2PwcKurmaJRJJ3Jfv87rrCc%2BwkRJAuyetEbvGL8FN3xoYZRYkb2lhaPlOaxW8DeFzGCv%2BwrCcL0lidfULrC9r6ASviYXXy3gwNFa23tpOdzVEvpxINlqa6k2ExlfuTN9cDee43jjVxGyE0X5uEVfQTXo%2B8hqJHr6CexBBz2v9Zpc%2FGOyB4pOGMKrJSLn3Zhs7XWAF&X-Amz-Signature=a1a87df143fee17f55e9149d0b4befb147149a2b6b9f6251dc3f69a004f937c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
