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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHJOSLFX%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FoLXsTcUvY%2BJeSvyPW9o0vmAGfceyXohh3GTVBhWLtAiBX5wx5bqKTeHkAYyLdYi1wkcezGz4u%2FxMgbxql7GCXECr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM3MvArEQbYcixugufKtwDgn%2B%2F4%2F7r9JxcDGd%2F9cVm6SMf1DNJ9mvpaBZw9plGPK950TS8RH1dO%2FpwEEQoEDXIxtL6EwdUqVeG1emLhyr3h7tK7Y70jA6JDz16Zdr1RTGR5sfu%2BT0SQoVNEvioLJ4yv%2FQRk1KGsZykEHRyFSnE9Q2wfxZFlDeEU7OH0Yx2z4tyoU%2BuSj4dA2NtZIBmoVFyLdnBzgntZAWbTETZRmQJKeNut4RePhb53%2FegKa4Xq1o7La4drbb2jM1SVxfPnBO8aT0ZziPvLMQXgQapmBkbKzIOhPBTiUBuSZfwFeBa1215%2BOnuqm3BqzTvU0Gf%2F4TKy71WIXEFMNdHW%2BAnAwP5x02Hi6wMCLEOzZfCQE5xu2OPFwiERcckhm3tnmGtFtIie0ihUTxRwEaiWzKXQnwPGoNhXWM1ImZAZBWh3ba8E%2BPyIiJw0UxZc0jxrVV6jSOCv68J3cIrpobNhi%2FzIKm5IlydDcmK9iZ4tVBUhugqHiT9s6BTY7LggBDEnbIBJ9JNK25XznumF28QFkxAhforLwJbRDb4riqZFNeC1tW2%2FLZ1iAiQYxJefIwU1vn4nFyVyyxSodq%2BsuJwHNkqQDC4y2W%2Bke0ASAnffJeW%2FTjQLJH7n16wCW%2FodyDx9N0w0uvwvQY6pgFv%2Bht4arDMFFi6Qp4Ju0vg3m4%2BK8vNkRwmZByz1wgiYJUXQ2boFOS1WdJJ05arLwL9PR6WqBBgqOm5ZKD8qQfLm3zi5uyTwo61UEWqjQngEeCW4Gnty6N7VbL5ejiB4GQ50jzJAGjtsXS9RFUbM3a6F8JIJYx0pl%2BUUwZ4ZeGP3iRerDWsDL1oEBK490xWkkTXYpVIcYZ1fPDVytn01ciAtCsoV%2Bdw&X-Amz-Signature=56697411ad0b9e8d36c0d768efc747d3e5e0a7ddcdb0c491c5ece7e1c83a43fb&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHJOSLFX%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FoLXsTcUvY%2BJeSvyPW9o0vmAGfceyXohh3GTVBhWLtAiBX5wx5bqKTeHkAYyLdYi1wkcezGz4u%2FxMgbxql7GCXECr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM3MvArEQbYcixugufKtwDgn%2B%2F4%2F7r9JxcDGd%2F9cVm6SMf1DNJ9mvpaBZw9plGPK950TS8RH1dO%2FpwEEQoEDXIxtL6EwdUqVeG1emLhyr3h7tK7Y70jA6JDz16Zdr1RTGR5sfu%2BT0SQoVNEvioLJ4yv%2FQRk1KGsZykEHRyFSnE9Q2wfxZFlDeEU7OH0Yx2z4tyoU%2BuSj4dA2NtZIBmoVFyLdnBzgntZAWbTETZRmQJKeNut4RePhb53%2FegKa4Xq1o7La4drbb2jM1SVxfPnBO8aT0ZziPvLMQXgQapmBkbKzIOhPBTiUBuSZfwFeBa1215%2BOnuqm3BqzTvU0Gf%2F4TKy71WIXEFMNdHW%2BAnAwP5x02Hi6wMCLEOzZfCQE5xu2OPFwiERcckhm3tnmGtFtIie0ihUTxRwEaiWzKXQnwPGoNhXWM1ImZAZBWh3ba8E%2BPyIiJw0UxZc0jxrVV6jSOCv68J3cIrpobNhi%2FzIKm5IlydDcmK9iZ4tVBUhugqHiT9s6BTY7LggBDEnbIBJ9JNK25XznumF28QFkxAhforLwJbRDb4riqZFNeC1tW2%2FLZ1iAiQYxJefIwU1vn4nFyVyyxSodq%2BsuJwHNkqQDC4y2W%2Bke0ASAnffJeW%2FTjQLJH7n16wCW%2FodyDx9N0w0uvwvQY6pgFv%2Bht4arDMFFi6Qp4Ju0vg3m4%2BK8vNkRwmZByz1wgiYJUXQ2boFOS1WdJJ05arLwL9PR6WqBBgqOm5ZKD8qQfLm3zi5uyTwo61UEWqjQngEeCW4Gnty6N7VbL5ejiB4GQ50jzJAGjtsXS9RFUbM3a6F8JIJYx0pl%2BUUwZ4ZeGP3iRerDWsDL1oEBK490xWkkTXYpVIcYZ1fPDVytn01ciAtCsoV%2Bdw&X-Amz-Signature=cd9c648d66ae11a0d37e3512cfe98f988f9bb62188e9b6ce59687d9d9b5def39&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHJOSLFX%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FoLXsTcUvY%2BJeSvyPW9o0vmAGfceyXohh3GTVBhWLtAiBX5wx5bqKTeHkAYyLdYi1wkcezGz4u%2FxMgbxql7GCXECr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM3MvArEQbYcixugufKtwDgn%2B%2F4%2F7r9JxcDGd%2F9cVm6SMf1DNJ9mvpaBZw9plGPK950TS8RH1dO%2FpwEEQoEDXIxtL6EwdUqVeG1emLhyr3h7tK7Y70jA6JDz16Zdr1RTGR5sfu%2BT0SQoVNEvioLJ4yv%2FQRk1KGsZykEHRyFSnE9Q2wfxZFlDeEU7OH0Yx2z4tyoU%2BuSj4dA2NtZIBmoVFyLdnBzgntZAWbTETZRmQJKeNut4RePhb53%2FegKa4Xq1o7La4drbb2jM1SVxfPnBO8aT0ZziPvLMQXgQapmBkbKzIOhPBTiUBuSZfwFeBa1215%2BOnuqm3BqzTvU0Gf%2F4TKy71WIXEFMNdHW%2BAnAwP5x02Hi6wMCLEOzZfCQE5xu2OPFwiERcckhm3tnmGtFtIie0ihUTxRwEaiWzKXQnwPGoNhXWM1ImZAZBWh3ba8E%2BPyIiJw0UxZc0jxrVV6jSOCv68J3cIrpobNhi%2FzIKm5IlydDcmK9iZ4tVBUhugqHiT9s6BTY7LggBDEnbIBJ9JNK25XznumF28QFkxAhforLwJbRDb4riqZFNeC1tW2%2FLZ1iAiQYxJefIwU1vn4nFyVyyxSodq%2BsuJwHNkqQDC4y2W%2Bke0ASAnffJeW%2FTjQLJH7n16wCW%2FodyDx9N0w0uvwvQY6pgFv%2Bht4arDMFFi6Qp4Ju0vg3m4%2BK8vNkRwmZByz1wgiYJUXQ2boFOS1WdJJ05arLwL9PR6WqBBgqOm5ZKD8qQfLm3zi5uyTwo61UEWqjQngEeCW4Gnty6N7VbL5ejiB4GQ50jzJAGjtsXS9RFUbM3a6F8JIJYx0pl%2BUUwZ4ZeGP3iRerDWsDL1oEBK490xWkkTXYpVIcYZ1fPDVytn01ciAtCsoV%2Bdw&X-Amz-Signature=cc3a79dcf42b74ea84cd83f023c4218a7a69b8c0cd247e99fafeb87c165cf1a1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
