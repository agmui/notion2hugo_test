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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LXKM7IU%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIGA4aB2E81d8yRs%2FH7E5Wdx%2F6hu%2B5PA97Ylc0M0lYWiMAiAOEZL99b8Eo3jP0AEvfPbiuQaLs%2BkaDIhvhrgFI7SFqir%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMbDdsINC2C6032VezKtwDfgGa3t9Jd9%2FeX88c9Lpc5e0%2FcbQpUiRBqPvZb9%2B2ZgVJOHe3x8iZFmRPY9EU9ux5bciEgmwp%2FdNUiIbTjSlXWisv%2FmWzJqWXWSs%2Fx61Sq7oyeU7n1ba4Xcm96XezOH4BujDoXeUokqiMUlzoBIxCBTMjNA9GTXBZVabuaywz2rKvVe0Hfvo5dIbY%2BNWnAdNjy%2B6xMf7qXJgUqLK3tD32lkqBXl6sSJmQUB3mZKRtYFzYvXpU2f%2FGhbjW6rMa8rrwZqWhrRcBDYfvr8TA5CLwIEN3qMXS4p8CejAIBgzKNsCP%2BMx1%2BbX619gP2WlldE13VxjsugDe23iE%2BxwZJE6lzvG1JPMbnwfU7wTv4Fj%2FwhG15qbBgXHvgeldT%2BRR30gtbn2HCNSUvHjeucsU8zqkLjgTOpNwg0o9trVvK4pmMjXq6rQd9PWPCUKFCwPJyY4z1P6wrhnmbLMFe0cf3GyVhESwWYEp1iQE7GxEDpYHfHXWdb%2BozAyAOIyQIbx4H4Dgz7FT63YTe%2F1sGUUvZpcPiYHQuye4MC3SYrq%2B9Gz%2BN%2F7%2Ffehp%2FNR3mQqJhXtRjb%2BUGvlVi4bj1lAZVF9QNrg4BxjKAY1ccw3zsixf1FufLENi0RHAvj7%2F096TpNwwre2RwQY6pgF3SPQkCxeK%2FdN8DTwSHGRQP1NmoTBrrJ73qEPAPe4Fa6bpyTIa9epm3OGfE52KyZbH1dhBWqd2fSiPgUxnYTmDbyA%2B0NLDKWKp2erujMhtLg3AKBcBocyPrGfPk%2FmsS1JDzpPdFwZG85r5c0ddQuw7M3Ux%2FMQrcgGn3vZIsBusJgV6x1r2tqOjMOiJsB0cN%2Fs0ba%2B1uDrHjMEF7Vpez4JeR75mbbzN&X-Amz-Signature=50ecbc065cd819e9880e3f2d886cab5711c92ea2101e6b82943244ee7d6d6918&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LXKM7IU%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIGA4aB2E81d8yRs%2FH7E5Wdx%2F6hu%2B5PA97Ylc0M0lYWiMAiAOEZL99b8Eo3jP0AEvfPbiuQaLs%2BkaDIhvhrgFI7SFqir%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMbDdsINC2C6032VezKtwDfgGa3t9Jd9%2FeX88c9Lpc5e0%2FcbQpUiRBqPvZb9%2B2ZgVJOHe3x8iZFmRPY9EU9ux5bciEgmwp%2FdNUiIbTjSlXWisv%2FmWzJqWXWSs%2Fx61Sq7oyeU7n1ba4Xcm96XezOH4BujDoXeUokqiMUlzoBIxCBTMjNA9GTXBZVabuaywz2rKvVe0Hfvo5dIbY%2BNWnAdNjy%2B6xMf7qXJgUqLK3tD32lkqBXl6sSJmQUB3mZKRtYFzYvXpU2f%2FGhbjW6rMa8rrwZqWhrRcBDYfvr8TA5CLwIEN3qMXS4p8CejAIBgzKNsCP%2BMx1%2BbX619gP2WlldE13VxjsugDe23iE%2BxwZJE6lzvG1JPMbnwfU7wTv4Fj%2FwhG15qbBgXHvgeldT%2BRR30gtbn2HCNSUvHjeucsU8zqkLjgTOpNwg0o9trVvK4pmMjXq6rQd9PWPCUKFCwPJyY4z1P6wrhnmbLMFe0cf3GyVhESwWYEp1iQE7GxEDpYHfHXWdb%2BozAyAOIyQIbx4H4Dgz7FT63YTe%2F1sGUUvZpcPiYHQuye4MC3SYrq%2B9Gz%2BN%2F7%2Ffehp%2FNR3mQqJhXtRjb%2BUGvlVi4bj1lAZVF9QNrg4BxjKAY1ccw3zsixf1FufLENi0RHAvj7%2F096TpNwwre2RwQY6pgF3SPQkCxeK%2FdN8DTwSHGRQP1NmoTBrrJ73qEPAPe4Fa6bpyTIa9epm3OGfE52KyZbH1dhBWqd2fSiPgUxnYTmDbyA%2B0NLDKWKp2erujMhtLg3AKBcBocyPrGfPk%2FmsS1JDzpPdFwZG85r5c0ddQuw7M3Ux%2FMQrcgGn3vZIsBusJgV6x1r2tqOjMOiJsB0cN%2Fs0ba%2B1uDrHjMEF7Vpez4JeR75mbbzN&X-Amz-Signature=81355672471aa433f40b60383873980fe923fce749327ed0fdcd6b60ff3cd1dc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LXKM7IU%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIGA4aB2E81d8yRs%2FH7E5Wdx%2F6hu%2B5PA97Ylc0M0lYWiMAiAOEZL99b8Eo3jP0AEvfPbiuQaLs%2BkaDIhvhrgFI7SFqir%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMbDdsINC2C6032VezKtwDfgGa3t9Jd9%2FeX88c9Lpc5e0%2FcbQpUiRBqPvZb9%2B2ZgVJOHe3x8iZFmRPY9EU9ux5bciEgmwp%2FdNUiIbTjSlXWisv%2FmWzJqWXWSs%2Fx61Sq7oyeU7n1ba4Xcm96XezOH4BujDoXeUokqiMUlzoBIxCBTMjNA9GTXBZVabuaywz2rKvVe0Hfvo5dIbY%2BNWnAdNjy%2B6xMf7qXJgUqLK3tD32lkqBXl6sSJmQUB3mZKRtYFzYvXpU2f%2FGhbjW6rMa8rrwZqWhrRcBDYfvr8TA5CLwIEN3qMXS4p8CejAIBgzKNsCP%2BMx1%2BbX619gP2WlldE13VxjsugDe23iE%2BxwZJE6lzvG1JPMbnwfU7wTv4Fj%2FwhG15qbBgXHvgeldT%2BRR30gtbn2HCNSUvHjeucsU8zqkLjgTOpNwg0o9trVvK4pmMjXq6rQd9PWPCUKFCwPJyY4z1P6wrhnmbLMFe0cf3GyVhESwWYEp1iQE7GxEDpYHfHXWdb%2BozAyAOIyQIbx4H4Dgz7FT63YTe%2F1sGUUvZpcPiYHQuye4MC3SYrq%2B9Gz%2BN%2F7%2Ffehp%2FNR3mQqJhXtRjb%2BUGvlVi4bj1lAZVF9QNrg4BxjKAY1ccw3zsixf1FufLENi0RHAvj7%2F096TpNwwre2RwQY6pgF3SPQkCxeK%2FdN8DTwSHGRQP1NmoTBrrJ73qEPAPe4Fa6bpyTIa9epm3OGfE52KyZbH1dhBWqd2fSiPgUxnYTmDbyA%2B0NLDKWKp2erujMhtLg3AKBcBocyPrGfPk%2FmsS1JDzpPdFwZG85r5c0ddQuw7M3Ux%2FMQrcgGn3vZIsBusJgV6x1r2tqOjMOiJsB0cN%2Fs0ba%2B1uDrHjMEF7Vpez4JeR75mbbzN&X-Amz-Signature=4e372913ef76667889ca1ab11ab6b96845cef2bf15c91c9b5edd148d5dbdbd41&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
