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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6RGN6P3%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T090808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCICZC7Nq5OAAcjIe72vvhzVrl3MudgnUWcorbhLnsMy95AiAOOcjgnPCRfkRLrGaLyBDGjFiyXFQuiEaD8NpLlnKJdir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMK90bqJ1E002WJcBVKtwDi5g3MXJVjEQnVdpYyEHe4%2BQEL%2B4KPLoxYyJ31Jsx5Q%2FCExcUXEt95QmnhN81oLsRJZn5CV%2FCd%2B%2FcG1IXiS%2BrUijao0l6xB4mywT1r3ZfVpx1izjL7m4Ya0TDg5z4lX531SgJ1J6JGERbAF4fUJf0732XFuRlcMErLfa1ddZhLbIvOlF6AFsB%2B6q8qPSREFGTWLYM35gXsZJ3wQsF0u6CGYINmVlDXSzTncq0Mlc4ylv%2F3bwooMDnmtnJcGI6y4uEdEYiPbDgehbhtLVEWpWmU3K7K%2FuKWxNo%2FEVbIWTfoIiGsKtE7kyjtKPv2oJOAB%2FnVlazCy3wd93bBb5gik2gu5nozT6bMBd4qbd%2B5Fr5Xsk%2F9I0PxuzfiR3vL63NA29fC%2BPECo0gbOiCecwlqjqdaTZMvXkBVXfZ8YEDoSw9XPaS4Tn5%2BPnMcSzyIbm8aIz7yUmp9SgsB9p78V%2FzzOklW0POVKzmSSqASVGzHx%2FySw9zBM6XqWX8INxOnAeCte21kIh2y5cPzl2G6letDkmR%2FRqVben2cv25SU9%2Fqt871x0ycJoq1VxBug0fv1muBXjzw8QrNCGGlWBK2n%2BLjI1Y7Ryqb%2BvPcqOL82B1DLI5eLP9zzWUmxd8H3mt9Aowz7y0wgY6pgE3AgkG9kbjQxxfFrl4khVfLqLaw2d7Bw1ujwMqUnUTmz%2FsM%2BVCzGATWQDrI4NfY4i3o1qfMzWzzkm8FwAAp%2B9mm5SOcLG0jDBCyL%2FEztKTKX%2B6BaLYQdWBYaIaEuyt2yws%2FSxkLolycsFOq0c%2BxMSoQQVK5osKJjIqpMmvJPxWbERaQhH7sS0V%2FzZFuhR7tmRVw0d%2FAzMJ%2FGdwrSd%2F5Of0dwyYjqSH&X-Amz-Signature=e5e7ac9f64aa516893f7cc5a5a7f747e15bfa363a5256b42f69736391cbc7ee2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6RGN6P3%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T090808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCICZC7Nq5OAAcjIe72vvhzVrl3MudgnUWcorbhLnsMy95AiAOOcjgnPCRfkRLrGaLyBDGjFiyXFQuiEaD8NpLlnKJdir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMK90bqJ1E002WJcBVKtwDi5g3MXJVjEQnVdpYyEHe4%2BQEL%2B4KPLoxYyJ31Jsx5Q%2FCExcUXEt95QmnhN81oLsRJZn5CV%2FCd%2B%2FcG1IXiS%2BrUijao0l6xB4mywT1r3ZfVpx1izjL7m4Ya0TDg5z4lX531SgJ1J6JGERbAF4fUJf0732XFuRlcMErLfa1ddZhLbIvOlF6AFsB%2B6q8qPSREFGTWLYM35gXsZJ3wQsF0u6CGYINmVlDXSzTncq0Mlc4ylv%2F3bwooMDnmtnJcGI6y4uEdEYiPbDgehbhtLVEWpWmU3K7K%2FuKWxNo%2FEVbIWTfoIiGsKtE7kyjtKPv2oJOAB%2FnVlazCy3wd93bBb5gik2gu5nozT6bMBd4qbd%2B5Fr5Xsk%2F9I0PxuzfiR3vL63NA29fC%2BPECo0gbOiCecwlqjqdaTZMvXkBVXfZ8YEDoSw9XPaS4Tn5%2BPnMcSzyIbm8aIz7yUmp9SgsB9p78V%2FzzOklW0POVKzmSSqASVGzHx%2FySw9zBM6XqWX8INxOnAeCte21kIh2y5cPzl2G6letDkmR%2FRqVben2cv25SU9%2Fqt871x0ycJoq1VxBug0fv1muBXjzw8QrNCGGlWBK2n%2BLjI1Y7Ryqb%2BvPcqOL82B1DLI5eLP9zzWUmxd8H3mt9Aowz7y0wgY6pgE3AgkG9kbjQxxfFrl4khVfLqLaw2d7Bw1ujwMqUnUTmz%2FsM%2BVCzGATWQDrI4NfY4i3o1qfMzWzzkm8FwAAp%2B9mm5SOcLG0jDBCyL%2FEztKTKX%2B6BaLYQdWBYaIaEuyt2yws%2FSxkLolycsFOq0c%2BxMSoQQVK5osKJjIqpMmvJPxWbERaQhH7sS0V%2FzZFuhR7tmRVw0d%2FAzMJ%2FGdwrSd%2F5Of0dwyYjqSH&X-Amz-Signature=faa6ab69683870857b429d810ae6dd380dc7e3bfcc64595d002f2b9c0cbf2f92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6RGN6P3%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T090808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCICZC7Nq5OAAcjIe72vvhzVrl3MudgnUWcorbhLnsMy95AiAOOcjgnPCRfkRLrGaLyBDGjFiyXFQuiEaD8NpLlnKJdir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMK90bqJ1E002WJcBVKtwDi5g3MXJVjEQnVdpYyEHe4%2BQEL%2B4KPLoxYyJ31Jsx5Q%2FCExcUXEt95QmnhN81oLsRJZn5CV%2FCd%2B%2FcG1IXiS%2BrUijao0l6xB4mywT1r3ZfVpx1izjL7m4Ya0TDg5z4lX531SgJ1J6JGERbAF4fUJf0732XFuRlcMErLfa1ddZhLbIvOlF6AFsB%2B6q8qPSREFGTWLYM35gXsZJ3wQsF0u6CGYINmVlDXSzTncq0Mlc4ylv%2F3bwooMDnmtnJcGI6y4uEdEYiPbDgehbhtLVEWpWmU3K7K%2FuKWxNo%2FEVbIWTfoIiGsKtE7kyjtKPv2oJOAB%2FnVlazCy3wd93bBb5gik2gu5nozT6bMBd4qbd%2B5Fr5Xsk%2F9I0PxuzfiR3vL63NA29fC%2BPECo0gbOiCecwlqjqdaTZMvXkBVXfZ8YEDoSw9XPaS4Tn5%2BPnMcSzyIbm8aIz7yUmp9SgsB9p78V%2FzzOklW0POVKzmSSqASVGzHx%2FySw9zBM6XqWX8INxOnAeCte21kIh2y5cPzl2G6letDkmR%2FRqVben2cv25SU9%2Fqt871x0ycJoq1VxBug0fv1muBXjzw8QrNCGGlWBK2n%2BLjI1Y7Ryqb%2BvPcqOL82B1DLI5eLP9zzWUmxd8H3mt9Aowz7y0wgY6pgE3AgkG9kbjQxxfFrl4khVfLqLaw2d7Bw1ujwMqUnUTmz%2FsM%2BVCzGATWQDrI4NfY4i3o1qfMzWzzkm8FwAAp%2B9mm5SOcLG0jDBCyL%2FEztKTKX%2B6BaLYQdWBYaIaEuyt2yws%2FSxkLolycsFOq0c%2BxMSoQQVK5osKJjIqpMmvJPxWbERaQhH7sS0V%2FzZFuhR7tmRVw0d%2FAzMJ%2FGdwrSd%2F5Of0dwyYjqSH&X-Amz-Signature=1949858ee3a013bf47d7b9ede8affeca2c36969e5e9750c662cea00c40952196&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
