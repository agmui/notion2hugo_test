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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBAMCNUN%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T170213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICA6N%2Fdxz%2Brnef2%2BoZdHSjnLdLtkv64kvco8hLhbKs%2F8AiEA3rtbLj%2FGNBAMZh5fmuhXc5WzruWl2zarBGdqYYuC0fcqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvpwsAlEnQFCGpkQircA%2BsyvCAuHnFXzXYmVsvD4eZuh3kJunpqhehUZFWj22BgzRibQUmRz1HAoxC5HaceIqaPEuUIq5r2u%2BKlbiKzKxsZnO5dlVqYmIoipMs90A7NxgLcL2Un6dmy9A1lnORxoFhLbMG0KUtQGdKDlXsDh14XggUOWrpdl9gLWpqUcztDunwmsuvGHEfgK04pYusjgVtiTasIlAUc9zNhOW8SmIrAu%2Bwz8LMVT4WLXyFYdkfdCReLeDsXZ%2Fo2nPoCB5vh1950NgKOhhxnFhPyTdgfHafbpfuvT0ucYpat26e33ENG%2Bpk5QiOfnX%2BHeE%2BnbtqC5mv3tNuXQnr0pNyza0ytwDLetMUWK4wbgaUPYkbKZ%2FH7TmrQaA2Nl7KrPow0advizQP8UNnsc4VkfRRtyBzjebDc%2BSnDNh0GO8kFA53%2BTIe%2Fx19VE%2FnmsXxadhSg8OQxKCVx4G9iX8r%2Fy2u059i2xQky8mDQ5Sm3Ep10tgevUX5wylVXsJ%2F1te2jFQg%2BIrH6NgHcpAzHSagKt7af%2FMvPOuo6W6GxXQGlfh9iRWUys6IRTnXisQjP8mVOsRmkan3e4dixJ8Zq23MxBYfjCLttAzkwnr%2Ba1u0Jb71RB9EdIgHclbiEPAdWnGm3k1KNMJeF6bwGOqUBxYcK2PEKr6O2zHNQgDrYAW6kKfrrTqUIAQ1ilH5B2%2F7oMfgbXqkAdeevzp8tKM%2FondsqIc6X2arXN90JTmKa1FbeUb3qN6VXr6uDz27llOWJARmubAKj89V%2FZAWP1K3KlqZNyhwikuSOfW%2FoA4c%2F%2FmseZwBxy%2BP4vdRPCVtHwlBIjx716cdFTUw8VoMVUVS%2FesV38pgUjQUFFKe%2Byt8FwekLYULz&X-Amz-Signature=cc123e2c62760d70e835c1d2aeb7dd3d784dd893fcc507bff0491002775b6c03&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBAMCNUN%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T170213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICA6N%2Fdxz%2Brnef2%2BoZdHSjnLdLtkv64kvco8hLhbKs%2F8AiEA3rtbLj%2FGNBAMZh5fmuhXc5WzruWl2zarBGdqYYuC0fcqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvpwsAlEnQFCGpkQircA%2BsyvCAuHnFXzXYmVsvD4eZuh3kJunpqhehUZFWj22BgzRibQUmRz1HAoxC5HaceIqaPEuUIq5r2u%2BKlbiKzKxsZnO5dlVqYmIoipMs90A7NxgLcL2Un6dmy9A1lnORxoFhLbMG0KUtQGdKDlXsDh14XggUOWrpdl9gLWpqUcztDunwmsuvGHEfgK04pYusjgVtiTasIlAUc9zNhOW8SmIrAu%2Bwz8LMVT4WLXyFYdkfdCReLeDsXZ%2Fo2nPoCB5vh1950NgKOhhxnFhPyTdgfHafbpfuvT0ucYpat26e33ENG%2Bpk5QiOfnX%2BHeE%2BnbtqC5mv3tNuXQnr0pNyza0ytwDLetMUWK4wbgaUPYkbKZ%2FH7TmrQaA2Nl7KrPow0advizQP8UNnsc4VkfRRtyBzjebDc%2BSnDNh0GO8kFA53%2BTIe%2Fx19VE%2FnmsXxadhSg8OQxKCVx4G9iX8r%2Fy2u059i2xQky8mDQ5Sm3Ep10tgevUX5wylVXsJ%2F1te2jFQg%2BIrH6NgHcpAzHSagKt7af%2FMvPOuo6W6GxXQGlfh9iRWUys6IRTnXisQjP8mVOsRmkan3e4dixJ8Zq23MxBYfjCLttAzkwnr%2Ba1u0Jb71RB9EdIgHclbiEPAdWnGm3k1KNMJeF6bwGOqUBxYcK2PEKr6O2zHNQgDrYAW6kKfrrTqUIAQ1ilH5B2%2F7oMfgbXqkAdeevzp8tKM%2FondsqIc6X2arXN90JTmKa1FbeUb3qN6VXr6uDz27llOWJARmubAKj89V%2FZAWP1K3KlqZNyhwikuSOfW%2FoA4c%2F%2FmseZwBxy%2BP4vdRPCVtHwlBIjx716cdFTUw8VoMVUVS%2FesV38pgUjQUFFKe%2Byt8FwekLYULz&X-Amz-Signature=d4b63891724000c79d55a8d72a0e95b0f3e1036ae33ecf6669c98dcc36ebca1b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBAMCNUN%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T170213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICA6N%2Fdxz%2Brnef2%2BoZdHSjnLdLtkv64kvco8hLhbKs%2F8AiEA3rtbLj%2FGNBAMZh5fmuhXc5WzruWl2zarBGdqYYuC0fcqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvpwsAlEnQFCGpkQircA%2BsyvCAuHnFXzXYmVsvD4eZuh3kJunpqhehUZFWj22BgzRibQUmRz1HAoxC5HaceIqaPEuUIq5r2u%2BKlbiKzKxsZnO5dlVqYmIoipMs90A7NxgLcL2Un6dmy9A1lnORxoFhLbMG0KUtQGdKDlXsDh14XggUOWrpdl9gLWpqUcztDunwmsuvGHEfgK04pYusjgVtiTasIlAUc9zNhOW8SmIrAu%2Bwz8LMVT4WLXyFYdkfdCReLeDsXZ%2Fo2nPoCB5vh1950NgKOhhxnFhPyTdgfHafbpfuvT0ucYpat26e33ENG%2Bpk5QiOfnX%2BHeE%2BnbtqC5mv3tNuXQnr0pNyza0ytwDLetMUWK4wbgaUPYkbKZ%2FH7TmrQaA2Nl7KrPow0advizQP8UNnsc4VkfRRtyBzjebDc%2BSnDNh0GO8kFA53%2BTIe%2Fx19VE%2FnmsXxadhSg8OQxKCVx4G9iX8r%2Fy2u059i2xQky8mDQ5Sm3Ep10tgevUX5wylVXsJ%2F1te2jFQg%2BIrH6NgHcpAzHSagKt7af%2FMvPOuo6W6GxXQGlfh9iRWUys6IRTnXisQjP8mVOsRmkan3e4dixJ8Zq23MxBYfjCLttAzkwnr%2Ba1u0Jb71RB9EdIgHclbiEPAdWnGm3k1KNMJeF6bwGOqUBxYcK2PEKr6O2zHNQgDrYAW6kKfrrTqUIAQ1ilH5B2%2F7oMfgbXqkAdeevzp8tKM%2FondsqIc6X2arXN90JTmKa1FbeUb3qN6VXr6uDz27llOWJARmubAKj89V%2FZAWP1K3KlqZNyhwikuSOfW%2FoA4c%2F%2FmseZwBxy%2BP4vdRPCVtHwlBIjx716cdFTUw8VoMVUVS%2FesV38pgUjQUFFKe%2Byt8FwekLYULz&X-Amz-Signature=ae27e3d098f23575dd720b6964ac01e36be7c72ef85f4f8b457a8a6129886ac2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
