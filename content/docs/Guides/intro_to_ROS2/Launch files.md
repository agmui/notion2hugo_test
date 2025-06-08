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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI4ASRRX%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T160922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRfY4KKKIg1sGMircPLDjKfUukeM7gZ08HJSDJoUYe5gIgL7VTYeuYsFE5EMFgObuSZa%2F%2BgSo0f4%2BFHttGJ2TmLf0qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCN7ug8k2LBs4%2BWmtircA9ZYvDL%2F0ia1haQzRj2JXhknoJWHv9RxFoxpKAFRaAHoMLQO2v%2FdPMfhMs7SPsf8Oxm%2F7MpI5ZcGuyEx1g9zzRwQ3cSOOrZjYX9aTYktjjyYfXFiYLq%2Fth57Qdn%2BFAQtJ%2FyMN6kxOJBsOzbeCxRy6h5gWHYV6c90NPMOMZZdpzjCcP%2FFlgQgNrPtJJ%2F66J27mPWCN2zAPKaCS1nIXGi%2F%2BKSERaaPI4IiPvakiAbRfdWYL%2BIALWLwN4nmmsWlolLat1iMDCIz%2F98MDyqCjEhfWYmCXWpu%2B36R8TY8pQ4a9P8aTN2WmT4KPUUPAeFcbohl5%2F%2F2CXkZBqW06dWZ3KCGnaeJVuoTngGGS11UF4J6Zvb2nsDh%2Bledlwe9%2Bf8eo%2B%2FNvW1X8MF2oZIrv7KWLccA6FC0yILAI5aG%2B2McFLVqeTnOEkQg%2F2OZR1bAso%2BNwXB7wiQQDP2QF50zjbX8Xi1LYnPM9ejLJnmsBJTObxx%2B66pA1y6MrRkcoyLqTOPuDUefqgTq5Jscf7AVJE%2BZUbutOY5FgyEVe5EcWck3GAhBF3tJ%2BmBiUxO%2FyPB2vxmtSTIcCy3UmM0t6hbLDukOnUiNBXBnykJgUS4vOMEiZMtG18VXiRs7dS2WWQ5aeRYHMK2ylsIGOqUBS1uDJAL7ZOxi2nStvbMBZCYVKFQUBYgMfEFQXKvNAtKSjJSDOFVNPQgPIE3yejqbHf8XcoLvQhtbD7SV5cP%2BjJtyAsLgDQSYjz0mgUjUGJE0%2BXDzqZI5ppP4jWgWLu59G3qim2%2B1PkS63d3QeJwk%2F%2BcFPQF6qP%2F7wgTjfr6X6VpURB5lnuOz58TUpsyOaoVJMpgk%2BJCrECVNZVGXGt8Ni8Hhilbz&X-Amz-Signature=2d5677cbbd586acd018da0bc3b99d7969bbb03f0cfb9ddc995d70f8945d29fda&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI4ASRRX%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T160922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRfY4KKKIg1sGMircPLDjKfUukeM7gZ08HJSDJoUYe5gIgL7VTYeuYsFE5EMFgObuSZa%2F%2BgSo0f4%2BFHttGJ2TmLf0qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCN7ug8k2LBs4%2BWmtircA9ZYvDL%2F0ia1haQzRj2JXhknoJWHv9RxFoxpKAFRaAHoMLQO2v%2FdPMfhMs7SPsf8Oxm%2F7MpI5ZcGuyEx1g9zzRwQ3cSOOrZjYX9aTYktjjyYfXFiYLq%2Fth57Qdn%2BFAQtJ%2FyMN6kxOJBsOzbeCxRy6h5gWHYV6c90NPMOMZZdpzjCcP%2FFlgQgNrPtJJ%2F66J27mPWCN2zAPKaCS1nIXGi%2F%2BKSERaaPI4IiPvakiAbRfdWYL%2BIALWLwN4nmmsWlolLat1iMDCIz%2F98MDyqCjEhfWYmCXWpu%2B36R8TY8pQ4a9P8aTN2WmT4KPUUPAeFcbohl5%2F%2F2CXkZBqW06dWZ3KCGnaeJVuoTngGGS11UF4J6Zvb2nsDh%2Bledlwe9%2Bf8eo%2B%2FNvW1X8MF2oZIrv7KWLccA6FC0yILAI5aG%2B2McFLVqeTnOEkQg%2F2OZR1bAso%2BNwXB7wiQQDP2QF50zjbX8Xi1LYnPM9ejLJnmsBJTObxx%2B66pA1y6MrRkcoyLqTOPuDUefqgTq5Jscf7AVJE%2BZUbutOY5FgyEVe5EcWck3GAhBF3tJ%2BmBiUxO%2FyPB2vxmtSTIcCy3UmM0t6hbLDukOnUiNBXBnykJgUS4vOMEiZMtG18VXiRs7dS2WWQ5aeRYHMK2ylsIGOqUBS1uDJAL7ZOxi2nStvbMBZCYVKFQUBYgMfEFQXKvNAtKSjJSDOFVNPQgPIE3yejqbHf8XcoLvQhtbD7SV5cP%2BjJtyAsLgDQSYjz0mgUjUGJE0%2BXDzqZI5ppP4jWgWLu59G3qim2%2B1PkS63d3QeJwk%2F%2BcFPQF6qP%2F7wgTjfr6X6VpURB5lnuOz58TUpsyOaoVJMpgk%2BJCrECVNZVGXGt8Ni8Hhilbz&X-Amz-Signature=755aeb785e8ab047dec5db90902835a037020353f401546dd4d543626e5d279d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI4ASRRX%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T160922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRfY4KKKIg1sGMircPLDjKfUukeM7gZ08HJSDJoUYe5gIgL7VTYeuYsFE5EMFgObuSZa%2F%2BgSo0f4%2BFHttGJ2TmLf0qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCN7ug8k2LBs4%2BWmtircA9ZYvDL%2F0ia1haQzRj2JXhknoJWHv9RxFoxpKAFRaAHoMLQO2v%2FdPMfhMs7SPsf8Oxm%2F7MpI5ZcGuyEx1g9zzRwQ3cSOOrZjYX9aTYktjjyYfXFiYLq%2Fth57Qdn%2BFAQtJ%2FyMN6kxOJBsOzbeCxRy6h5gWHYV6c90NPMOMZZdpzjCcP%2FFlgQgNrPtJJ%2F66J27mPWCN2zAPKaCS1nIXGi%2F%2BKSERaaPI4IiPvakiAbRfdWYL%2BIALWLwN4nmmsWlolLat1iMDCIz%2F98MDyqCjEhfWYmCXWpu%2B36R8TY8pQ4a9P8aTN2WmT4KPUUPAeFcbohl5%2F%2F2CXkZBqW06dWZ3KCGnaeJVuoTngGGS11UF4J6Zvb2nsDh%2Bledlwe9%2Bf8eo%2B%2FNvW1X8MF2oZIrv7KWLccA6FC0yILAI5aG%2B2McFLVqeTnOEkQg%2F2OZR1bAso%2BNwXB7wiQQDP2QF50zjbX8Xi1LYnPM9ejLJnmsBJTObxx%2B66pA1y6MrRkcoyLqTOPuDUefqgTq5Jscf7AVJE%2BZUbutOY5FgyEVe5EcWck3GAhBF3tJ%2BmBiUxO%2FyPB2vxmtSTIcCy3UmM0t6hbLDukOnUiNBXBnykJgUS4vOMEiZMtG18VXiRs7dS2WWQ5aeRYHMK2ylsIGOqUBS1uDJAL7ZOxi2nStvbMBZCYVKFQUBYgMfEFQXKvNAtKSjJSDOFVNPQgPIE3yejqbHf8XcoLvQhtbD7SV5cP%2BjJtyAsLgDQSYjz0mgUjUGJE0%2BXDzqZI5ppP4jWgWLu59G3qim2%2B1PkS63d3QeJwk%2F%2BcFPQF6qP%2F7wgTjfr6X6VpURB5lnuOz58TUpsyOaoVJMpgk%2BJCrECVNZVGXGt8Ni8Hhilbz&X-Amz-Signature=2ca414a6ab6af2ddadfda7c8ca450e2a9253d891f7cd38218c510045e814c9ac&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
