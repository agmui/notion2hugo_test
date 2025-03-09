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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R56XNWJI%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T180757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGQql0si7gP%2BvfnVNGfxw%2BXzvug28uqIcTnj2SgCB%2F5XAiEA%2Fl8FPK%2FkbXNuyj2DI%2BKSxm7Xg%2BysZWednI%2BAhd7Wdc4q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDNkocQsCqIL%2B7uRKZyrcA37LFM5SQENAzWawuvGJkRKzJlvqG%2BeVSmcVARFVN8uaABFLSe%2BjyM6GTj7bQhNYELIsMLmToN%2B9uvTvqggIglut4qOM2azceMS%2BtcGAm4eTK39CKpLbY%2BH4rd6vKg3huY19z3Smo9qDoeTq8TLlMsIltz%2BQIlKy9KYyFKHXSzZZ9bsdObvGdHdwonsEeeglj0iA9GvM9yWjGv%2B69j7KAZ9or%2Bx4VXKGEH4MbeU6OPxGeskjrovh%2BOfs4oKh%2F7rCOFZw%2FRnIC3kN8juZXXyndTmAvhb3sQasjYXsd1HB0A741%2Fqf8gJbxsBWRwcseiqr4YAVIqFI7sdQ0pCYR6pcwlcLQKukIlVO7dNmVEa6BckCpMBZZ0Und3iZH2l9sDLGtCDSN8udHHUPtffYeeJ5Y%2FoSBVfyEUqzEbPFkdEZCnJ%2F9Iyju%2BGMktV%2Bf3qwdX25iG8f9aygrZvlknAmXD2ZJwy8gV46h%2BQkzQ5gSlf5kFmIpVNXafMtD7MWzoOJUdXzBggP%2BOkUd2ugHSKE4LsI3uhHpjZ%2FvcUU8r%2BRxgeBu9X%2BClFjBC%2BFzy0AcYJ9M9%2FAP7uLeja6nqEOV%2FDaFfzLUPHjoEwfAqhvEQNZ1Rf8095dTn6XVnsib2kRBQ8DMOuwtr4GOqUBZUY7V7nCt6SLlAFE%2FoPQrHGl7YhlRMxOzgL7ST7WYsBZeYuvsoftzVPg%2BNlvAfuwM%2Fs4VptwJKbsWtkAXa7qQl1tidRKBp6lQ1MUNdHT0%2BP7JGjLQcrWpRlENCp19S5%2BkgcnMdO4%2Fjz4K1hjmIaDJcCsurYdnVSO3EzKouW6QPldbCoP4gg2VFj9FJms2gRT0bxkuNVu%2FZNMnu8qcSqBeUJp3j9b&X-Amz-Signature=8413511f61fb0ff22a6b64e2ed756f9c368dc7eb9cfa7cbb39e70c94b2f361f8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R56XNWJI%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T180757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGQql0si7gP%2BvfnVNGfxw%2BXzvug28uqIcTnj2SgCB%2F5XAiEA%2Fl8FPK%2FkbXNuyj2DI%2BKSxm7Xg%2BysZWednI%2BAhd7Wdc4q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDNkocQsCqIL%2B7uRKZyrcA37LFM5SQENAzWawuvGJkRKzJlvqG%2BeVSmcVARFVN8uaABFLSe%2BjyM6GTj7bQhNYELIsMLmToN%2B9uvTvqggIglut4qOM2azceMS%2BtcGAm4eTK39CKpLbY%2BH4rd6vKg3huY19z3Smo9qDoeTq8TLlMsIltz%2BQIlKy9KYyFKHXSzZZ9bsdObvGdHdwonsEeeglj0iA9GvM9yWjGv%2B69j7KAZ9or%2Bx4VXKGEH4MbeU6OPxGeskjrovh%2BOfs4oKh%2F7rCOFZw%2FRnIC3kN8juZXXyndTmAvhb3sQasjYXsd1HB0A741%2Fqf8gJbxsBWRwcseiqr4YAVIqFI7sdQ0pCYR6pcwlcLQKukIlVO7dNmVEa6BckCpMBZZ0Und3iZH2l9sDLGtCDSN8udHHUPtffYeeJ5Y%2FoSBVfyEUqzEbPFkdEZCnJ%2F9Iyju%2BGMktV%2Bf3qwdX25iG8f9aygrZvlknAmXD2ZJwy8gV46h%2BQkzQ5gSlf5kFmIpVNXafMtD7MWzoOJUdXzBggP%2BOkUd2ugHSKE4LsI3uhHpjZ%2FvcUU8r%2BRxgeBu9X%2BClFjBC%2BFzy0AcYJ9M9%2FAP7uLeja6nqEOV%2FDaFfzLUPHjoEwfAqhvEQNZ1Rf8095dTn6XVnsib2kRBQ8DMOuwtr4GOqUBZUY7V7nCt6SLlAFE%2FoPQrHGl7YhlRMxOzgL7ST7WYsBZeYuvsoftzVPg%2BNlvAfuwM%2Fs4VptwJKbsWtkAXa7qQl1tidRKBp6lQ1MUNdHT0%2BP7JGjLQcrWpRlENCp19S5%2BkgcnMdO4%2Fjz4K1hjmIaDJcCsurYdnVSO3EzKouW6QPldbCoP4gg2VFj9FJms2gRT0bxkuNVu%2FZNMnu8qcSqBeUJp3j9b&X-Amz-Signature=f9e329cecc1bcc2de652daad65d27d46913013dfd5f2c5cafa372e13cd3ff04e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R56XNWJI%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T180757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGQql0si7gP%2BvfnVNGfxw%2BXzvug28uqIcTnj2SgCB%2F5XAiEA%2Fl8FPK%2FkbXNuyj2DI%2BKSxm7Xg%2BysZWednI%2BAhd7Wdc4q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDNkocQsCqIL%2B7uRKZyrcA37LFM5SQENAzWawuvGJkRKzJlvqG%2BeVSmcVARFVN8uaABFLSe%2BjyM6GTj7bQhNYELIsMLmToN%2B9uvTvqggIglut4qOM2azceMS%2BtcGAm4eTK39CKpLbY%2BH4rd6vKg3huY19z3Smo9qDoeTq8TLlMsIltz%2BQIlKy9KYyFKHXSzZZ9bsdObvGdHdwonsEeeglj0iA9GvM9yWjGv%2B69j7KAZ9or%2Bx4VXKGEH4MbeU6OPxGeskjrovh%2BOfs4oKh%2F7rCOFZw%2FRnIC3kN8juZXXyndTmAvhb3sQasjYXsd1HB0A741%2Fqf8gJbxsBWRwcseiqr4YAVIqFI7sdQ0pCYR6pcwlcLQKukIlVO7dNmVEa6BckCpMBZZ0Und3iZH2l9sDLGtCDSN8udHHUPtffYeeJ5Y%2FoSBVfyEUqzEbPFkdEZCnJ%2F9Iyju%2BGMktV%2Bf3qwdX25iG8f9aygrZvlknAmXD2ZJwy8gV46h%2BQkzQ5gSlf5kFmIpVNXafMtD7MWzoOJUdXzBggP%2BOkUd2ugHSKE4LsI3uhHpjZ%2FvcUU8r%2BRxgeBu9X%2BClFjBC%2BFzy0AcYJ9M9%2FAP7uLeja6nqEOV%2FDaFfzLUPHjoEwfAqhvEQNZ1Rf8095dTn6XVnsib2kRBQ8DMOuwtr4GOqUBZUY7V7nCt6SLlAFE%2FoPQrHGl7YhlRMxOzgL7ST7WYsBZeYuvsoftzVPg%2BNlvAfuwM%2Fs4VptwJKbsWtkAXa7qQl1tidRKBp6lQ1MUNdHT0%2BP7JGjLQcrWpRlENCp19S5%2BkgcnMdO4%2Fjz4K1hjmIaDJcCsurYdnVSO3EzKouW6QPldbCoP4gg2VFj9FJms2gRT0bxkuNVu%2FZNMnu8qcSqBeUJp3j9b&X-Amz-Signature=27fff8a6afefd1d7bd2cdaa51eb89bba726de7aab06bef87c04de7bae51c71d2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
