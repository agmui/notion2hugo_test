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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3AJ2J5M%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T110104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCH3mxG4lrQhLmK66wFnUgK%2Fv%2BvvhrxFGNqOttckvOULcCIQCWr%2B0WowaE0rOHdf1ap0GvtEr4PK0UH5ylzaFVbvFVYyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMQCR9E0SA113mrj1FKtwDmtQstMM6l6LfezcYok1N1K1eJEYoeiyP6jH6vm2Le9ZUcD9uMy2HSraj7Jo5hmDBLtYRVkvXxpNSYBcjGGjX2oDyd34Sb0SemZz97eV9me8NvJsw9e2GlsdoRwsaVornPcCKvkUkjjhUmJilaFnTpktdiowsJWNVecPT9Wd44ryf5AU7gt8GrrW%2BLvae9AnapmDCxrW%2BHMwdSJWFxfBh%2FejvQx8FkrZ3644YBptBLZOILC1O5%2F2mwOlclxLeJuqFxok99VB2XjVmNMKVdHfigu%2FL14tx60Ky%2FUEpz%2BDKBnFcEw5wp2pspLyEfYYXXFWDHfu4auijwsdwXJlusNP9NZJQszCD%2BmgAnwurbyWkFlE2Pa1k2k4FOlwX9%2BWgvR3JxN9yqc61w9eEpjYzsaHHvHva6zg5Ojp8shAq5qCasCbqLuTx4Bz75d02J4S8Xi5Kn7P1QAHIhkx9C5RZ%2FC%2FfXqls1cj0Gp2hh1GL0ACDDlzY9xMuXae7ideNfwVD%2BqJ8NcvaaoWFkgEvj%2BZjG3oYkdw8mWsu3rZV7KS59zV%2B9jZtC4LUMiOoz0ayw67zaS9WZidG963AuRUt3JAtt6upcLrbXF51LmySpxEUkc6%2BncpIUyLcpic%2F8t14rMcw7IufvwY6pgEfbe4hm3rxTdRAZW5sjemLJALVhClkMOrbvl1EGY4vebFk336z24cNRrJb1MPI12j%2FORQq8%2BYF4Fd1Q9HDzlB96lGGJctUojuzUMRkVoGtkrlGnf2y2JvoxMbdLROvTVKaonkflxdkTNYxCCnzo7jADB3SgUP3JV7%2BPuECkB%2FU7pkHiKpo4ZvMdhi8JLC4puBs0QH1xt6w1u3Rux5ok%2F0Gzi9lL0ck&X-Amz-Signature=13aed52465b0df6a8cdaadff4197b41c7692bb559aebf51756dc7c19d7ae13e4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3AJ2J5M%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T110104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCH3mxG4lrQhLmK66wFnUgK%2Fv%2BvvhrxFGNqOttckvOULcCIQCWr%2B0WowaE0rOHdf1ap0GvtEr4PK0UH5ylzaFVbvFVYyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMQCR9E0SA113mrj1FKtwDmtQstMM6l6LfezcYok1N1K1eJEYoeiyP6jH6vm2Le9ZUcD9uMy2HSraj7Jo5hmDBLtYRVkvXxpNSYBcjGGjX2oDyd34Sb0SemZz97eV9me8NvJsw9e2GlsdoRwsaVornPcCKvkUkjjhUmJilaFnTpktdiowsJWNVecPT9Wd44ryf5AU7gt8GrrW%2BLvae9AnapmDCxrW%2BHMwdSJWFxfBh%2FejvQx8FkrZ3644YBptBLZOILC1O5%2F2mwOlclxLeJuqFxok99VB2XjVmNMKVdHfigu%2FL14tx60Ky%2FUEpz%2BDKBnFcEw5wp2pspLyEfYYXXFWDHfu4auijwsdwXJlusNP9NZJQszCD%2BmgAnwurbyWkFlE2Pa1k2k4FOlwX9%2BWgvR3JxN9yqc61w9eEpjYzsaHHvHva6zg5Ojp8shAq5qCasCbqLuTx4Bz75d02J4S8Xi5Kn7P1QAHIhkx9C5RZ%2FC%2FfXqls1cj0Gp2hh1GL0ACDDlzY9xMuXae7ideNfwVD%2BqJ8NcvaaoWFkgEvj%2BZjG3oYkdw8mWsu3rZV7KS59zV%2B9jZtC4LUMiOoz0ayw67zaS9WZidG963AuRUt3JAtt6upcLrbXF51LmySpxEUkc6%2BncpIUyLcpic%2F8t14rMcw7IufvwY6pgEfbe4hm3rxTdRAZW5sjemLJALVhClkMOrbvl1EGY4vebFk336z24cNRrJb1MPI12j%2FORQq8%2BYF4Fd1Q9HDzlB96lGGJctUojuzUMRkVoGtkrlGnf2y2JvoxMbdLROvTVKaonkflxdkTNYxCCnzo7jADB3SgUP3JV7%2BPuECkB%2FU7pkHiKpo4ZvMdhi8JLC4puBs0QH1xt6w1u3Rux5ok%2F0Gzi9lL0ck&X-Amz-Signature=ad0a76bd05876935ddd8eda08247ad711729546ac025a6c59a3f6f0685d63ad8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3AJ2J5M%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T110104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCH3mxG4lrQhLmK66wFnUgK%2Fv%2BvvhrxFGNqOttckvOULcCIQCWr%2B0WowaE0rOHdf1ap0GvtEr4PK0UH5ylzaFVbvFVYyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMQCR9E0SA113mrj1FKtwDmtQstMM6l6LfezcYok1N1K1eJEYoeiyP6jH6vm2Le9ZUcD9uMy2HSraj7Jo5hmDBLtYRVkvXxpNSYBcjGGjX2oDyd34Sb0SemZz97eV9me8NvJsw9e2GlsdoRwsaVornPcCKvkUkjjhUmJilaFnTpktdiowsJWNVecPT9Wd44ryf5AU7gt8GrrW%2BLvae9AnapmDCxrW%2BHMwdSJWFxfBh%2FejvQx8FkrZ3644YBptBLZOILC1O5%2F2mwOlclxLeJuqFxok99VB2XjVmNMKVdHfigu%2FL14tx60Ky%2FUEpz%2BDKBnFcEw5wp2pspLyEfYYXXFWDHfu4auijwsdwXJlusNP9NZJQszCD%2BmgAnwurbyWkFlE2Pa1k2k4FOlwX9%2BWgvR3JxN9yqc61w9eEpjYzsaHHvHva6zg5Ojp8shAq5qCasCbqLuTx4Bz75d02J4S8Xi5Kn7P1QAHIhkx9C5RZ%2FC%2FfXqls1cj0Gp2hh1GL0ACDDlzY9xMuXae7ideNfwVD%2BqJ8NcvaaoWFkgEvj%2BZjG3oYkdw8mWsu3rZV7KS59zV%2B9jZtC4LUMiOoz0ayw67zaS9WZidG963AuRUt3JAtt6upcLrbXF51LmySpxEUkc6%2BncpIUyLcpic%2F8t14rMcw7IufvwY6pgEfbe4hm3rxTdRAZW5sjemLJALVhClkMOrbvl1EGY4vebFk336z24cNRrJb1MPI12j%2FORQq8%2BYF4Fd1Q9HDzlB96lGGJctUojuzUMRkVoGtkrlGnf2y2JvoxMbdLROvTVKaonkflxdkTNYxCCnzo7jADB3SgUP3JV7%2BPuECkB%2FU7pkHiKpo4ZvMdhi8JLC4puBs0QH1xt6w1u3Rux5ok%2F0Gzi9lL0ck&X-Amz-Signature=536d79a798f43efdf52815fb68fc39a0c413091a0a654b02cbbec0b7de3f8cd7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
