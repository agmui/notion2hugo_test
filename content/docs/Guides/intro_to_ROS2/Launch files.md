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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOBVCXQD%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T061104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIHVQmjrlUMyFkKwxcCvUCATsLCXN5hnJ0i%2FHYDQ%2FNaWLAiEA8xYsgMx2S%2BjS1Tj1XuS87nEqBpwvvh6Kfmggjrq7Y5cqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIDUa1XANScizViACrcA93RwW4cgTqg9XkGHkLFdi6GnT3JGkop7BKAvrZTShhFzafjG52MroNAEgZJ7A5Mlmh2rQOaIZ4GSEsmBgJEakRKAPQyR0vDyY%2F8KCmZUky8a%2Fp8QMQHgTjT%2B60BMF6%2BJDuuvg5%2FEHVSk%2BT193IF1oOSuGziLtuLDhOrqrF2H8tTC6J0ByDp17g3W96Q2shaF%2FokZRtz2ngh9gW8BzjbEQ8oyF%2B1g3c1KNTe6ngfrZgVKp4FNRiSp8R4z7u8ZXnJaO4XhOzsas11HbZXsQIYPsIPBAcgnMBLQ3%2Bx9nU0ZRPatU6JpFC1vWCcuuVQk7ASqCr2z8%2BoSi2YTvl1WPL3QHQUwhb7ekZjy6ykobrkO7BVOchBtf9ZJfnI8CORKyDnjoT%2F3FKX2ah%2FRYfPNgzQqQL%2FyZaeaoR%2BUb8eL155mMVHGuADQWQvvK9acqIN2A2NughTw2wGZTC5IRFq70tCKKnEV9vczcznX7Max68JI5N3DZ2McL2NT2mI2A46of5BQPocVwdxpPNKTxNo1UWJkcGVMMFqyBp0tBL8Hk56ptTxN6zN2PelYIrPCnB8DNQzSVobvyg2LgRc3HIOr3lkAvblThN%2BXwCyGrGvIEeidGIsbQqnBI6pQ7xAL4ChMPXH0L0GOqUBnblJ%2FHfXu4aYVD1KNH4o5kRPgMXddTxD7lsaiEWROaIaeCwaT62XsBLzxQ5XBXerF949IGEY4Tu1NaL5GbYctAUwCoIR9yj3xuuA6%2F6IgzZ9byIM2maosaDAxN0RhayhmzqgcCSSX1TzmEkW860%2FqvFRXNJHdEpM0ootiS67%2BNM0ECRLELMiuQKkrAt5s8i9qtQsKYIy1NlSGhEWRd4R35M318V0&X-Amz-Signature=2451b5292fb7bb136a39eb0758197d7760ad3bbbc005f5870250fc15c98177fc&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOBVCXQD%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T061104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIHVQmjrlUMyFkKwxcCvUCATsLCXN5hnJ0i%2FHYDQ%2FNaWLAiEA8xYsgMx2S%2BjS1Tj1XuS87nEqBpwvvh6Kfmggjrq7Y5cqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIDUa1XANScizViACrcA93RwW4cgTqg9XkGHkLFdi6GnT3JGkop7BKAvrZTShhFzafjG52MroNAEgZJ7A5Mlmh2rQOaIZ4GSEsmBgJEakRKAPQyR0vDyY%2F8KCmZUky8a%2Fp8QMQHgTjT%2B60BMF6%2BJDuuvg5%2FEHVSk%2BT193IF1oOSuGziLtuLDhOrqrF2H8tTC6J0ByDp17g3W96Q2shaF%2FokZRtz2ngh9gW8BzjbEQ8oyF%2B1g3c1KNTe6ngfrZgVKp4FNRiSp8R4z7u8ZXnJaO4XhOzsas11HbZXsQIYPsIPBAcgnMBLQ3%2Bx9nU0ZRPatU6JpFC1vWCcuuVQk7ASqCr2z8%2BoSi2YTvl1WPL3QHQUwhb7ekZjy6ykobrkO7BVOchBtf9ZJfnI8CORKyDnjoT%2F3FKX2ah%2FRYfPNgzQqQL%2FyZaeaoR%2BUb8eL155mMVHGuADQWQvvK9acqIN2A2NughTw2wGZTC5IRFq70tCKKnEV9vczcznX7Max68JI5N3DZ2McL2NT2mI2A46of5BQPocVwdxpPNKTxNo1UWJkcGVMMFqyBp0tBL8Hk56ptTxN6zN2PelYIrPCnB8DNQzSVobvyg2LgRc3HIOr3lkAvblThN%2BXwCyGrGvIEeidGIsbQqnBI6pQ7xAL4ChMPXH0L0GOqUBnblJ%2FHfXu4aYVD1KNH4o5kRPgMXddTxD7lsaiEWROaIaeCwaT62XsBLzxQ5XBXerF949IGEY4Tu1NaL5GbYctAUwCoIR9yj3xuuA6%2F6IgzZ9byIM2maosaDAxN0RhayhmzqgcCSSX1TzmEkW860%2FqvFRXNJHdEpM0ootiS67%2BNM0ECRLELMiuQKkrAt5s8i9qtQsKYIy1NlSGhEWRd4R35M318V0&X-Amz-Signature=579038a17426ac6629f9681948f108a861b70555b68c167a3a7be0fbe35c406c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOBVCXQD%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T061104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIHVQmjrlUMyFkKwxcCvUCATsLCXN5hnJ0i%2FHYDQ%2FNaWLAiEA8xYsgMx2S%2BjS1Tj1XuS87nEqBpwvvh6Kfmggjrq7Y5cqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIDUa1XANScizViACrcA93RwW4cgTqg9XkGHkLFdi6GnT3JGkop7BKAvrZTShhFzafjG52MroNAEgZJ7A5Mlmh2rQOaIZ4GSEsmBgJEakRKAPQyR0vDyY%2F8KCmZUky8a%2Fp8QMQHgTjT%2B60BMF6%2BJDuuvg5%2FEHVSk%2BT193IF1oOSuGziLtuLDhOrqrF2H8tTC6J0ByDp17g3W96Q2shaF%2FokZRtz2ngh9gW8BzjbEQ8oyF%2B1g3c1KNTe6ngfrZgVKp4FNRiSp8R4z7u8ZXnJaO4XhOzsas11HbZXsQIYPsIPBAcgnMBLQ3%2Bx9nU0ZRPatU6JpFC1vWCcuuVQk7ASqCr2z8%2BoSi2YTvl1WPL3QHQUwhb7ekZjy6ykobrkO7BVOchBtf9ZJfnI8CORKyDnjoT%2F3FKX2ah%2FRYfPNgzQqQL%2FyZaeaoR%2BUb8eL155mMVHGuADQWQvvK9acqIN2A2NughTw2wGZTC5IRFq70tCKKnEV9vczcznX7Max68JI5N3DZ2McL2NT2mI2A46of5BQPocVwdxpPNKTxNo1UWJkcGVMMFqyBp0tBL8Hk56ptTxN6zN2PelYIrPCnB8DNQzSVobvyg2LgRc3HIOr3lkAvblThN%2BXwCyGrGvIEeidGIsbQqnBI6pQ7xAL4ChMPXH0L0GOqUBnblJ%2FHfXu4aYVD1KNH4o5kRPgMXddTxD7lsaiEWROaIaeCwaT62XsBLzxQ5XBXerF949IGEY4Tu1NaL5GbYctAUwCoIR9yj3xuuA6%2F6IgzZ9byIM2maosaDAxN0RhayhmzqgcCSSX1TzmEkW860%2FqvFRXNJHdEpM0ootiS67%2BNM0ECRLELMiuQKkrAt5s8i9qtQsKYIy1NlSGhEWRd4R35M318V0&X-Amz-Signature=43d075de5a647cce392fb54bba2b113f44b7ad7886c808be31710739bb3f7b0b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
