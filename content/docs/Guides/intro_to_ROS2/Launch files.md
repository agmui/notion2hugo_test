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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7MXRBX4%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T041058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCgpPJFjFo1t0NpFscVlvnQo20WfVy%2Fup%2Bf%2BzVvsBbEwwIgWk5eEPxilrUMNh4YY5iUFU%2FnMF6bhheqz0p3Uaxle2AqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDdYO5Pv%2FNlYgcfzCrcA6g%2BjiArCpAtipAEFxo2KhxQ%2FwotIIP9ymnB6m2k2LqSN9YlU67r9jXjRXVa%2Fhm3sCdUYAACCGZHNyJ0flSWxbqLCOhlY07%2FgxGWNwkJN%2BT6nIjqwmYLWVMyiWhUs8fI3YezirP4Hrz%2FmmwmhkKqWDrJb%2FGkkVtGvf0Znfob6Pz1jFQwhSOM4kRJZ3xQUGg8pOCLh%2F60WuCEChLMKlwgQ5uiVQPo7Msqu5WE0BDo48dDfKY87zXu8GOFCydJQKzb1cPtzT%2F4ZKpVenYjtLipNhnVJKAgVmYLlUSAsKdsvO35PTLuAqBk80QhGPmO2Qe6NAgaXNyt4m8Px6W4HVnFQzmKLBfwptA5bpk7dgauW3KxuM%2Fz7g8OG6f%2B2P3Av%2FfqzaHME9JISnWBrsAzCo%2Fgn0yTHjx6J8UDEFw%2BqRi4Gq9xHGDffFCzbiOo1V5LClb%2FjlPPaPB4Lo4OB8N%2B2eJz9AAVpbRZCjDi3oFF80Dl6v89ToDwP86fFzUj68U0WyUdnmXMIQCvJ8e4%2By5%2FeGxQ%2BRfjrTosdAED60sucWTMnDUeXjT2RuRsJxU2mVu4S3OOnKWl1Mgci30FxLpeR%2F4uraIgQ89wIPXMAN1%2FBKk2lbWuR%2F26a9c8tzLLKLfgMO%2F33L8GOqUB9Ngm01xiTBWt%2FP2cV9CsQZjUf03jY57XNxVji%2B7Ujiz8k%2Fk6jCRPaBW6dMCAfK8F8VpEsqNW3QbFVgS8XiYsCQpKZkb%2FSTn%2FrvWV4jr0HBGkKXH2%2FZ2aG0k7ZBb5Dmdos%2F6%2BsSLbFWmZLlYOE8zzuFKp9FPqtT2N3FXeqQn3W9MzmtJ%2B0Sxy4x4U7%2BMttK9QZcuhuak8VgUcb%2BAoof6GAhxhSX4X&X-Amz-Signature=bad5f827ad034d5ced749d1a92e1309f490dbdc85e65712c6958c96463ffae9e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7MXRBX4%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T041058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCgpPJFjFo1t0NpFscVlvnQo20WfVy%2Fup%2Bf%2BzVvsBbEwwIgWk5eEPxilrUMNh4YY5iUFU%2FnMF6bhheqz0p3Uaxle2AqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDdYO5Pv%2FNlYgcfzCrcA6g%2BjiArCpAtipAEFxo2KhxQ%2FwotIIP9ymnB6m2k2LqSN9YlU67r9jXjRXVa%2Fhm3sCdUYAACCGZHNyJ0flSWxbqLCOhlY07%2FgxGWNwkJN%2BT6nIjqwmYLWVMyiWhUs8fI3YezirP4Hrz%2FmmwmhkKqWDrJb%2FGkkVtGvf0Znfob6Pz1jFQwhSOM4kRJZ3xQUGg8pOCLh%2F60WuCEChLMKlwgQ5uiVQPo7Msqu5WE0BDo48dDfKY87zXu8GOFCydJQKzb1cPtzT%2F4ZKpVenYjtLipNhnVJKAgVmYLlUSAsKdsvO35PTLuAqBk80QhGPmO2Qe6NAgaXNyt4m8Px6W4HVnFQzmKLBfwptA5bpk7dgauW3KxuM%2Fz7g8OG6f%2B2P3Av%2FfqzaHME9JISnWBrsAzCo%2Fgn0yTHjx6J8UDEFw%2BqRi4Gq9xHGDffFCzbiOo1V5LClb%2FjlPPaPB4Lo4OB8N%2B2eJz9AAVpbRZCjDi3oFF80Dl6v89ToDwP86fFzUj68U0WyUdnmXMIQCvJ8e4%2By5%2FeGxQ%2BRfjrTosdAED60sucWTMnDUeXjT2RuRsJxU2mVu4S3OOnKWl1Mgci30FxLpeR%2F4uraIgQ89wIPXMAN1%2FBKk2lbWuR%2F26a9c8tzLLKLfgMO%2F33L8GOqUB9Ngm01xiTBWt%2FP2cV9CsQZjUf03jY57XNxVji%2B7Ujiz8k%2Fk6jCRPaBW6dMCAfK8F8VpEsqNW3QbFVgS8XiYsCQpKZkb%2FSTn%2FrvWV4jr0HBGkKXH2%2FZ2aG0k7ZBb5Dmdos%2F6%2BsSLbFWmZLlYOE8zzuFKp9FPqtT2N3FXeqQn3W9MzmtJ%2B0Sxy4x4U7%2BMttK9QZcuhuak8VgUcb%2BAoof6GAhxhSX4X&X-Amz-Signature=d7d9ca17498d4ca7fb03522362cbeb25d034218cd16bee32059ef3ada60e6814&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7MXRBX4%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T041058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCgpPJFjFo1t0NpFscVlvnQo20WfVy%2Fup%2Bf%2BzVvsBbEwwIgWk5eEPxilrUMNh4YY5iUFU%2FnMF6bhheqz0p3Uaxle2AqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDdYO5Pv%2FNlYgcfzCrcA6g%2BjiArCpAtipAEFxo2KhxQ%2FwotIIP9ymnB6m2k2LqSN9YlU67r9jXjRXVa%2Fhm3sCdUYAACCGZHNyJ0flSWxbqLCOhlY07%2FgxGWNwkJN%2BT6nIjqwmYLWVMyiWhUs8fI3YezirP4Hrz%2FmmwmhkKqWDrJb%2FGkkVtGvf0Znfob6Pz1jFQwhSOM4kRJZ3xQUGg8pOCLh%2F60WuCEChLMKlwgQ5uiVQPo7Msqu5WE0BDo48dDfKY87zXu8GOFCydJQKzb1cPtzT%2F4ZKpVenYjtLipNhnVJKAgVmYLlUSAsKdsvO35PTLuAqBk80QhGPmO2Qe6NAgaXNyt4m8Px6W4HVnFQzmKLBfwptA5bpk7dgauW3KxuM%2Fz7g8OG6f%2B2P3Av%2FfqzaHME9JISnWBrsAzCo%2Fgn0yTHjx6J8UDEFw%2BqRi4Gq9xHGDffFCzbiOo1V5LClb%2FjlPPaPB4Lo4OB8N%2B2eJz9AAVpbRZCjDi3oFF80Dl6v89ToDwP86fFzUj68U0WyUdnmXMIQCvJ8e4%2By5%2FeGxQ%2BRfjrTosdAED60sucWTMnDUeXjT2RuRsJxU2mVu4S3OOnKWl1Mgci30FxLpeR%2F4uraIgQ89wIPXMAN1%2FBKk2lbWuR%2F26a9c8tzLLKLfgMO%2F33L8GOqUB9Ngm01xiTBWt%2FP2cV9CsQZjUf03jY57XNxVji%2B7Ujiz8k%2Fk6jCRPaBW6dMCAfK8F8VpEsqNW3QbFVgS8XiYsCQpKZkb%2FSTn%2FrvWV4jr0HBGkKXH2%2FZ2aG0k7ZBb5Dmdos%2F6%2BsSLbFWmZLlYOE8zzuFKp9FPqtT2N3FXeqQn3W9MzmtJ%2B0Sxy4x4U7%2BMttK9QZcuhuak8VgUcb%2BAoof6GAhxhSX4X&X-Amz-Signature=a7143ee4403d8f506b1f45568f3c3988485d0dd9e3a680444103873d215a0302&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
