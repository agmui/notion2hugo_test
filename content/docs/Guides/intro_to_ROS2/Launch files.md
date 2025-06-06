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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAE3KPVN%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T161102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAqUANUdR6W%2Brr%2Bw2haLnjmFzbzpL3qlPXXZLZzdS0WAiB28q87TOAyffXkJoLtToxFxrfQABVJOxyss0hFsXX1XSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM8EWurQLOPdnWxqJOKtwDDL81Fh6PV9GZE34roo95ezpyI1Idm0zZB6ZMsWpFnUt4jU%2Ba2BhZGhhNmChgiXGgpp4Kl44armpZ5gNr6JkN0QQQ1WaOxQjfQ0qIcDA5upPS4ybECogohkS6i4Q4hxeopEaPvqMTM7wMYSISZ73DBPH7gpTw3UW%2FJvisPsAhKlPD8pketvazubFbMMpDyW4XFOR%2BT3heDdvZi%2FR22wJlDRxhs42VvHGUwG6ymqlyUxPKPgPnof1yVpstP%2F8y1YpgRKrCLbN52FqnYm%2FeC4Lbva2usdw07XKH%2F%2FraS2eJ0Ql5Rn0AflwXcK3qNAQn4iNeeHhgdj6bBe5Wakr0p1nl0%2Be%2FRBB%2BVZhIavM0inle9X1TGr19GbjnWKFgsNaPqbfz9TOQV%2FLDUblO%2BjuHaQNj8Oq5O9hYzFusy954S%2B0GdnlKY%2Fjv08XqN%2FoTifJ%2BbHhfvFvnb4xcbqr2GrWwPHh9PdZaGOX5qzA95yjoSSigcCbvgGv%2F5Fq%2Br9AkM6zXkPQY9zyTujxTQ9hpE2k2rVJQ%2Fm8uByYyu6HCWDZZW2imTQhWn8hJ4pA%2FRVMTDlXDRHDgs8Ep4UgQwDgaTqmJXz0yfiBOUb1MaMlNcBUgxBzBbiFrWSUwusz46g8VQ%2BwwvqGMwgY6pgGv2QKIOfMv52OSeiwOiGNOFBeGYy47XxBIItasAuaxJBPW%2BJzPUfot4eZnEuHyYDXLjrqUXbOiFdTY72Weyl%2FI53OvcrTzY0k6kZK0y5iXPLrHS3VHQGfSdZpkH9r%2FcXsG3P4uTFe9EaFjtJl%2FAwuNNisCjeLyw4sgn8M4pRRthu6fteyVux0P%2B4cK5pXhpZeVuPiBsMoiF16Tf756xAtwaeMOBWUO&X-Amz-Signature=a6f7e4a3200eaf8d012992938533334bc96e4904eae8662151332e0037bca133&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAE3KPVN%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T161102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAqUANUdR6W%2Brr%2Bw2haLnjmFzbzpL3qlPXXZLZzdS0WAiB28q87TOAyffXkJoLtToxFxrfQABVJOxyss0hFsXX1XSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM8EWurQLOPdnWxqJOKtwDDL81Fh6PV9GZE34roo95ezpyI1Idm0zZB6ZMsWpFnUt4jU%2Ba2BhZGhhNmChgiXGgpp4Kl44armpZ5gNr6JkN0QQQ1WaOxQjfQ0qIcDA5upPS4ybECogohkS6i4Q4hxeopEaPvqMTM7wMYSISZ73DBPH7gpTw3UW%2FJvisPsAhKlPD8pketvazubFbMMpDyW4XFOR%2BT3heDdvZi%2FR22wJlDRxhs42VvHGUwG6ymqlyUxPKPgPnof1yVpstP%2F8y1YpgRKrCLbN52FqnYm%2FeC4Lbva2usdw07XKH%2F%2FraS2eJ0Ql5Rn0AflwXcK3qNAQn4iNeeHhgdj6bBe5Wakr0p1nl0%2Be%2FRBB%2BVZhIavM0inle9X1TGr19GbjnWKFgsNaPqbfz9TOQV%2FLDUblO%2BjuHaQNj8Oq5O9hYzFusy954S%2B0GdnlKY%2Fjv08XqN%2FoTifJ%2BbHhfvFvnb4xcbqr2GrWwPHh9PdZaGOX5qzA95yjoSSigcCbvgGv%2F5Fq%2Br9AkM6zXkPQY9zyTujxTQ9hpE2k2rVJQ%2Fm8uByYyu6HCWDZZW2imTQhWn8hJ4pA%2FRVMTDlXDRHDgs8Ep4UgQwDgaTqmJXz0yfiBOUb1MaMlNcBUgxBzBbiFrWSUwusz46g8VQ%2BwwvqGMwgY6pgGv2QKIOfMv52OSeiwOiGNOFBeGYy47XxBIItasAuaxJBPW%2BJzPUfot4eZnEuHyYDXLjrqUXbOiFdTY72Weyl%2FI53OvcrTzY0k6kZK0y5iXPLrHS3VHQGfSdZpkH9r%2FcXsG3P4uTFe9EaFjtJl%2FAwuNNisCjeLyw4sgn8M4pRRthu6fteyVux0P%2B4cK5pXhpZeVuPiBsMoiF16Tf756xAtwaeMOBWUO&X-Amz-Signature=d3bc05cf962e6b5e016ca2fe7a64f8f219b7a50c6d18e85f01d8262f22e49db7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAE3KPVN%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T161102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAqUANUdR6W%2Brr%2Bw2haLnjmFzbzpL3qlPXXZLZzdS0WAiB28q87TOAyffXkJoLtToxFxrfQABVJOxyss0hFsXX1XSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM8EWurQLOPdnWxqJOKtwDDL81Fh6PV9GZE34roo95ezpyI1Idm0zZB6ZMsWpFnUt4jU%2Ba2BhZGhhNmChgiXGgpp4Kl44armpZ5gNr6JkN0QQQ1WaOxQjfQ0qIcDA5upPS4ybECogohkS6i4Q4hxeopEaPvqMTM7wMYSISZ73DBPH7gpTw3UW%2FJvisPsAhKlPD8pketvazubFbMMpDyW4XFOR%2BT3heDdvZi%2FR22wJlDRxhs42VvHGUwG6ymqlyUxPKPgPnof1yVpstP%2F8y1YpgRKrCLbN52FqnYm%2FeC4Lbva2usdw07XKH%2F%2FraS2eJ0Ql5Rn0AflwXcK3qNAQn4iNeeHhgdj6bBe5Wakr0p1nl0%2Be%2FRBB%2BVZhIavM0inle9X1TGr19GbjnWKFgsNaPqbfz9TOQV%2FLDUblO%2BjuHaQNj8Oq5O9hYzFusy954S%2B0GdnlKY%2Fjv08XqN%2FoTifJ%2BbHhfvFvnb4xcbqr2GrWwPHh9PdZaGOX5qzA95yjoSSigcCbvgGv%2F5Fq%2Br9AkM6zXkPQY9zyTujxTQ9hpE2k2rVJQ%2Fm8uByYyu6HCWDZZW2imTQhWn8hJ4pA%2FRVMTDlXDRHDgs8Ep4UgQwDgaTqmJXz0yfiBOUb1MaMlNcBUgxBzBbiFrWSUwusz46g8VQ%2BwwvqGMwgY6pgGv2QKIOfMv52OSeiwOiGNOFBeGYy47XxBIItasAuaxJBPW%2BJzPUfot4eZnEuHyYDXLjrqUXbOiFdTY72Weyl%2FI53OvcrTzY0k6kZK0y5iXPLrHS3VHQGfSdZpkH9r%2FcXsG3P4uTFe9EaFjtJl%2FAwuNNisCjeLyw4sgn8M4pRRthu6fteyVux0P%2B4cK5pXhpZeVuPiBsMoiF16Tf756xAtwaeMOBWUO&X-Amz-Signature=9305cb20af81cba770b9861637d8974470a0cf355d6dcae7d1ddf3b77e09708c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
