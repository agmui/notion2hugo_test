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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYI7USKE%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCeKnxp8cRtKSEeU%2Bqt4QP6Vc%2FM08S3LW4bKuiZRpn2BwIgZGt6jBjy%2F%2BpG5IZOK%2BX0muDiwptLJ3rBbd4IT9qqw5AqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOv8iczo%2FQ7i%2BnXP8yrcA0WWeziAIxwyANHVHjMAdDB%2BahXBJBmT7qIWyWQHZR4tYs7HvUulPdZq5wT9fBINCJ2mYHAylADrsNUxjVy%2ByPmwYVhVaijGnpABCwWI70CrBplF9ncIEBHUHQMTZDoFitj03tXdgTKFAFMChNJx4s33B1vQkClHXKwoQ%2FgVKRrni%2FpKDpikO8FDdjiAXjxxjJNke40sLOZjvxGyc3%2BmIZ5r5Q5aIornnCYDQ4l2Tgat6Wek4nqRWEo3hw9D1%2BQr2RbKMdck6Jb95QXmh6m5dOAYBnetUqOpb70ORTV2PxoffvPLl6BRCzgjFK1J86jpLmsRh2kZuCRiqsHMXtTmtBnhALHIUxlxXj6BJ0DXXYYL8SN5F6VGRbP6DHCXkIZFkEwJ9bNmKsXy%2BwF2KbwE3z9PdcMOrjBfsJb4G6EzzazN8LAMU1HdELkal4Rns2P3igsZtk6GDRhZ8%2BudY%2BtSMltzXLM9io1uKEgP97yzUzzCV15BAH3tFpNGdc9bbRZiVgUeelVykkKoum5YuVN1%2FwGTXZgRN9FlRJUTNuUSS3UNfSpsZTUxt99HQar44fPKD1cLNPH9BaBH6mx5DZIBCmq3BZLt3R%2Fl2d%2BVcnEWJRXPkansp0YV708usIPzMLaR4b8GOqUBo24LUHuhKunCQ6lG82zUOoix2xGLkf7Mbf4m67trGgFhlXWc5mj%2F%2BdvWpveH8VloGwv3bOpw%2FCfG2W9NFKFkipf8hwNQJJhSDzTfucPK2ra8MhKY9XUYQf%2BmniwRayd1%2FJXj4Zzqi1%2BmcarCS0oF8uNk5%2BYDff0dwuEoDlcA0Khd%2F8KWB9VjkDHpxFgEymdcFhu9Rq3Ri%2FnNKaFuAyaGUDPYXw6z&X-Amz-Signature=0b061793b2dfbfe3db743c6f8fa46eb083029bfefe6cb57b2978a7dfe7b65ba6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYI7USKE%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCeKnxp8cRtKSEeU%2Bqt4QP6Vc%2FM08S3LW4bKuiZRpn2BwIgZGt6jBjy%2F%2BpG5IZOK%2BX0muDiwptLJ3rBbd4IT9qqw5AqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOv8iczo%2FQ7i%2BnXP8yrcA0WWeziAIxwyANHVHjMAdDB%2BahXBJBmT7qIWyWQHZR4tYs7HvUulPdZq5wT9fBINCJ2mYHAylADrsNUxjVy%2ByPmwYVhVaijGnpABCwWI70CrBplF9ncIEBHUHQMTZDoFitj03tXdgTKFAFMChNJx4s33B1vQkClHXKwoQ%2FgVKRrni%2FpKDpikO8FDdjiAXjxxjJNke40sLOZjvxGyc3%2BmIZ5r5Q5aIornnCYDQ4l2Tgat6Wek4nqRWEo3hw9D1%2BQr2RbKMdck6Jb95QXmh6m5dOAYBnetUqOpb70ORTV2PxoffvPLl6BRCzgjFK1J86jpLmsRh2kZuCRiqsHMXtTmtBnhALHIUxlxXj6BJ0DXXYYL8SN5F6VGRbP6DHCXkIZFkEwJ9bNmKsXy%2BwF2KbwE3z9PdcMOrjBfsJb4G6EzzazN8LAMU1HdELkal4Rns2P3igsZtk6GDRhZ8%2BudY%2BtSMltzXLM9io1uKEgP97yzUzzCV15BAH3tFpNGdc9bbRZiVgUeelVykkKoum5YuVN1%2FwGTXZgRN9FlRJUTNuUSS3UNfSpsZTUxt99HQar44fPKD1cLNPH9BaBH6mx5DZIBCmq3BZLt3R%2Fl2d%2BVcnEWJRXPkansp0YV708usIPzMLaR4b8GOqUBo24LUHuhKunCQ6lG82zUOoix2xGLkf7Mbf4m67trGgFhlXWc5mj%2F%2BdvWpveH8VloGwv3bOpw%2FCfG2W9NFKFkipf8hwNQJJhSDzTfucPK2ra8MhKY9XUYQf%2BmniwRayd1%2FJXj4Zzqi1%2BmcarCS0oF8uNk5%2BYDff0dwuEoDlcA0Khd%2F8KWB9VjkDHpxFgEymdcFhu9Rq3Ri%2FnNKaFuAyaGUDPYXw6z&X-Amz-Signature=4c89d06385b3bc02599dd5a7742d71794fccb5fc6595744f9a1ceff8aa7c09c2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYI7USKE%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCeKnxp8cRtKSEeU%2Bqt4QP6Vc%2FM08S3LW4bKuiZRpn2BwIgZGt6jBjy%2F%2BpG5IZOK%2BX0muDiwptLJ3rBbd4IT9qqw5AqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOv8iczo%2FQ7i%2BnXP8yrcA0WWeziAIxwyANHVHjMAdDB%2BahXBJBmT7qIWyWQHZR4tYs7HvUulPdZq5wT9fBINCJ2mYHAylADrsNUxjVy%2ByPmwYVhVaijGnpABCwWI70CrBplF9ncIEBHUHQMTZDoFitj03tXdgTKFAFMChNJx4s33B1vQkClHXKwoQ%2FgVKRrni%2FpKDpikO8FDdjiAXjxxjJNke40sLOZjvxGyc3%2BmIZ5r5Q5aIornnCYDQ4l2Tgat6Wek4nqRWEo3hw9D1%2BQr2RbKMdck6Jb95QXmh6m5dOAYBnetUqOpb70ORTV2PxoffvPLl6BRCzgjFK1J86jpLmsRh2kZuCRiqsHMXtTmtBnhALHIUxlxXj6BJ0DXXYYL8SN5F6VGRbP6DHCXkIZFkEwJ9bNmKsXy%2BwF2KbwE3z9PdcMOrjBfsJb4G6EzzazN8LAMU1HdELkal4Rns2P3igsZtk6GDRhZ8%2BudY%2BtSMltzXLM9io1uKEgP97yzUzzCV15BAH3tFpNGdc9bbRZiVgUeelVykkKoum5YuVN1%2FwGTXZgRN9FlRJUTNuUSS3UNfSpsZTUxt99HQar44fPKD1cLNPH9BaBH6mx5DZIBCmq3BZLt3R%2Fl2d%2BVcnEWJRXPkansp0YV708usIPzMLaR4b8GOqUBo24LUHuhKunCQ6lG82zUOoix2xGLkf7Mbf4m67trGgFhlXWc5mj%2F%2BdvWpveH8VloGwv3bOpw%2FCfG2W9NFKFkipf8hwNQJJhSDzTfucPK2ra8MhKY9XUYQf%2BmniwRayd1%2FJXj4Zzqi1%2BmcarCS0oF8uNk5%2BYDff0dwuEoDlcA0Khd%2F8KWB9VjkDHpxFgEymdcFhu9Rq3Ri%2FnNKaFuAyaGUDPYXw6z&X-Amz-Signature=cbdc2239a5682fe991b5267ab612ce33dc50beb563421fe55e0ad22c59f544a9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
