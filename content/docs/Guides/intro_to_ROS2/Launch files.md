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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFRWJFIA%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T110139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIGj%2FNLhewy4TWSUSaoEWfarx4l28A176qEAcSXS9G4%2ByAiBwAwOA8DcdKBPwm6Rl8IfWVfI8gxSjQ8kWkZODCsPZQCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMdA0o7YizowQu2jnBKtwDyMnRmMwzUS6XtoR67KPdZQR7s%2FIfZ9Y9O1ZBX4oZTNzrUHLvn7Hx41sTWhyJ7qO0tWZUGurnozNqkxEpkFZ3pgesr2hxeEYe3hVV1hv4c9pDobSZ3rSu0%2FoXOj6MabxxOATu3DfPM%2Fom%2FUexQgkYr1wNwXIbYDyChrXIlKrubOvHYe1IG9ciQUFb%2BvDFEY7D9W%2FdYrNTXWW7Bs2NZiNzs%2B5eam2km8qFLuEez7VRgie%2FgPfWz%2Fjwt1Gg2W0BPNrM8XB%2BqMrMWCSBYpDoWgNvs5gES%2FfkWj6lEqOD3q4Ei08fM%2BVyKn%2FGbIrcnW12IcfjFAuzRln%2F0Y%2F9em8Cd7js9aZvNbxcVoKUq2nUwdkHd361s6WuOzBt%2BmSxurrx9JdgunXqf8HAkBJ75CFt7u24cIQozuhzNBS2SyutwqyM0w81W%2B%2BsgDZPlonit1i1NMPaPNHT%2BNUoYm6bDUEBaTQ42gSjTC0q9TBQZgclIsVOJcCMd2mWcpXk8EjqszFP3zQFNf6q%2BVJ7ba%2FO8AXdRU5HWDW7GLV%2B19dw%2BomnjJ396irW%2FP5TT3D6P%2FR7JqHsMhOpKaz4Tj6RhuTSah0mHr93r7b6qSDDAgxBrJ3zLfJSbaVBRL72rL5erFIhBIswp%2Bu0vgY6pgFRva%2FJ6WOcVHiD3Be%2BullumT9hfg0cMrDDWOW%2FSULYZ%2BX5YF8ZzB9pF%2BAbSpHxTK0UCqTWZrmx7HmLpBBJ%2BcNmAeZL%2BQE31HWZPZT7lrrH7FPot6K1EUn556ecOemZh5Fh5b2C%2BQMZlRNbtTgftnFCKZhJlMx5vAvY6NmD6b1iFiOUz5VdP8YZQuSU943Zp5l08pky%2FN86s6GSKIPIpqE4wJEKKHYX&X-Amz-Signature=8eb6ee65a2654a81a8dd879da5d149f14ff8b27320786da67963b85a1c08b894&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFRWJFIA%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T110139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIGj%2FNLhewy4TWSUSaoEWfarx4l28A176qEAcSXS9G4%2ByAiBwAwOA8DcdKBPwm6Rl8IfWVfI8gxSjQ8kWkZODCsPZQCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMdA0o7YizowQu2jnBKtwDyMnRmMwzUS6XtoR67KPdZQR7s%2FIfZ9Y9O1ZBX4oZTNzrUHLvn7Hx41sTWhyJ7qO0tWZUGurnozNqkxEpkFZ3pgesr2hxeEYe3hVV1hv4c9pDobSZ3rSu0%2FoXOj6MabxxOATu3DfPM%2Fom%2FUexQgkYr1wNwXIbYDyChrXIlKrubOvHYe1IG9ciQUFb%2BvDFEY7D9W%2FdYrNTXWW7Bs2NZiNzs%2B5eam2km8qFLuEez7VRgie%2FgPfWz%2Fjwt1Gg2W0BPNrM8XB%2BqMrMWCSBYpDoWgNvs5gES%2FfkWj6lEqOD3q4Ei08fM%2BVyKn%2FGbIrcnW12IcfjFAuzRln%2F0Y%2F9em8Cd7js9aZvNbxcVoKUq2nUwdkHd361s6WuOzBt%2BmSxurrx9JdgunXqf8HAkBJ75CFt7u24cIQozuhzNBS2SyutwqyM0w81W%2B%2BsgDZPlonit1i1NMPaPNHT%2BNUoYm6bDUEBaTQ42gSjTC0q9TBQZgclIsVOJcCMd2mWcpXk8EjqszFP3zQFNf6q%2BVJ7ba%2FO8AXdRU5HWDW7GLV%2B19dw%2BomnjJ396irW%2FP5TT3D6P%2FR7JqHsMhOpKaz4Tj6RhuTSah0mHr93r7b6qSDDAgxBrJ3zLfJSbaVBRL72rL5erFIhBIswp%2Bu0vgY6pgFRva%2FJ6WOcVHiD3Be%2BullumT9hfg0cMrDDWOW%2FSULYZ%2BX5YF8ZzB9pF%2BAbSpHxTK0UCqTWZrmx7HmLpBBJ%2BcNmAeZL%2BQE31HWZPZT7lrrH7FPot6K1EUn556ecOemZh5Fh5b2C%2BQMZlRNbtTgftnFCKZhJlMx5vAvY6NmD6b1iFiOUz5VdP8YZQuSU943Zp5l08pky%2FN86s6GSKIPIpqE4wJEKKHYX&X-Amz-Signature=5303921fdd93018c3fd0a7ae6cc14f8198fe412c71a4d8d7f87398d449f62bab&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFRWJFIA%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T110139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIGj%2FNLhewy4TWSUSaoEWfarx4l28A176qEAcSXS9G4%2ByAiBwAwOA8DcdKBPwm6Rl8IfWVfI8gxSjQ8kWkZODCsPZQCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMdA0o7YizowQu2jnBKtwDyMnRmMwzUS6XtoR67KPdZQR7s%2FIfZ9Y9O1ZBX4oZTNzrUHLvn7Hx41sTWhyJ7qO0tWZUGurnozNqkxEpkFZ3pgesr2hxeEYe3hVV1hv4c9pDobSZ3rSu0%2FoXOj6MabxxOATu3DfPM%2Fom%2FUexQgkYr1wNwXIbYDyChrXIlKrubOvHYe1IG9ciQUFb%2BvDFEY7D9W%2FdYrNTXWW7Bs2NZiNzs%2B5eam2km8qFLuEez7VRgie%2FgPfWz%2Fjwt1Gg2W0BPNrM8XB%2BqMrMWCSBYpDoWgNvs5gES%2FfkWj6lEqOD3q4Ei08fM%2BVyKn%2FGbIrcnW12IcfjFAuzRln%2F0Y%2F9em8Cd7js9aZvNbxcVoKUq2nUwdkHd361s6WuOzBt%2BmSxurrx9JdgunXqf8HAkBJ75CFt7u24cIQozuhzNBS2SyutwqyM0w81W%2B%2BsgDZPlonit1i1NMPaPNHT%2BNUoYm6bDUEBaTQ42gSjTC0q9TBQZgclIsVOJcCMd2mWcpXk8EjqszFP3zQFNf6q%2BVJ7ba%2FO8AXdRU5HWDW7GLV%2B19dw%2BomnjJ396irW%2FP5TT3D6P%2FR7JqHsMhOpKaz4Tj6RhuTSah0mHr93r7b6qSDDAgxBrJ3zLfJSbaVBRL72rL5erFIhBIswp%2Bu0vgY6pgFRva%2FJ6WOcVHiD3Be%2BullumT9hfg0cMrDDWOW%2FSULYZ%2BX5YF8ZzB9pF%2BAbSpHxTK0UCqTWZrmx7HmLpBBJ%2BcNmAeZL%2BQE31HWZPZT7lrrH7FPot6K1EUn556ecOemZh5Fh5b2C%2BQMZlRNbtTgftnFCKZhJlMx5vAvY6NmD6b1iFiOUz5VdP8YZQuSU943Zp5l08pky%2FN86s6GSKIPIpqE4wJEKKHYX&X-Amz-Signature=31bc99f071b76f6c349459ab54ae56ab9ba4651b76c308225b4930068d02ff02&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
