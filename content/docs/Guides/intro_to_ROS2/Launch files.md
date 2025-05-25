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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XQMQQVY%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T140720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQD%2FRGYElkK3wj8%2BITEyBOGnoFgYkttspVV4vxc23UjpfwIge9O7d0zS87dM4%2Fj4Go0uF%2BVgdqdpEShBaAYyahx5NQ8q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLvx0RPPEc5aIvUGBSrcA1z%2FLlAwLbLzyqvN99UD5YxYYuBGAHTHIQh2VcOaL%2B5QTT%2F9g5Vs6NFg1fopNOYk7qHQGtdap%2FP9gF3ACsjDWS9gWd9vdORWnPAqrbbOaHJ%2BZCOVOW7vNTmkM6FVpsbAZgkobJQUqcqJsMUlaPxiPEUUseX5HCcqhD0gECSWxVTXRCty%2BCvtgpKTd%2B71RLFqoIhax95r6peSebx%2Fg%2BovAyVwFiGSH0glbr%2Fj86iIcIwr9%2BDleEzX8HfZ64yvxUphweu3sJY1nP%2BWiQO8O%2BSJI8x6y3Awf8%2BoV9nj8CUtiUDZAdrMRHWEHJaUde%2BL1xVPXPVnrRGvKAtVfZlxxOwH4Z0%2FQglvLiwSQHX7gKOxvUmCwfwZGNVT9c6yMLpYspxDinSnrg7o9ZYJ2QVWZu9udxJzuDDnIuDk5afTzKBqcBWk04z6jzMipbUCn3H8Ab4HwMoalObbi3U9BFJFRZBG9RsXx%2B6IFmE%2FAzWE2QAzw5krx6Pi03Mt7JkbIQrCvbmMnFrVkU0jMiofM84OCy7QbqKrLHdQFScvWWM2mZe4VJuuZzdIb4pf7DAnZzyG%2FsaQNT%2FpNirLfITCSsA%2BliB%2Fkh8RC6%2FAjrphpt9bLQO%2FMhdRj0RmMLBq3pZgitvpMNezzMEGOqUBiAuIkGXKakGK81epbEM5y9wW0LSNJUZgakn7iTlePYnkIq4VD%2BzlHojGtQxuuGiKrGH851RgVLQiWg5JjjayY8%2Fz6pesQLkSxj6ehCEiXSPt8GpWgXP62fZVaxD8ns4mXjQw5zt%2F0c42tlAd30JbHK3c5D3LLhqdC8%2BipmHBTK5wIbPGGihQULszbDVK8tzAZhHA40inJ7i%2FmbnBm%2BVBmE%2BLYAC5&X-Amz-Signature=7fda34cbe1c375cf4cf368654bcb0faac8d362f1d167ec012d13ce122840045b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XQMQQVY%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T140720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQD%2FRGYElkK3wj8%2BITEyBOGnoFgYkttspVV4vxc23UjpfwIge9O7d0zS87dM4%2Fj4Go0uF%2BVgdqdpEShBaAYyahx5NQ8q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLvx0RPPEc5aIvUGBSrcA1z%2FLlAwLbLzyqvN99UD5YxYYuBGAHTHIQh2VcOaL%2B5QTT%2F9g5Vs6NFg1fopNOYk7qHQGtdap%2FP9gF3ACsjDWS9gWd9vdORWnPAqrbbOaHJ%2BZCOVOW7vNTmkM6FVpsbAZgkobJQUqcqJsMUlaPxiPEUUseX5HCcqhD0gECSWxVTXRCty%2BCvtgpKTd%2B71RLFqoIhax95r6peSebx%2Fg%2BovAyVwFiGSH0glbr%2Fj86iIcIwr9%2BDleEzX8HfZ64yvxUphweu3sJY1nP%2BWiQO8O%2BSJI8x6y3Awf8%2BoV9nj8CUtiUDZAdrMRHWEHJaUde%2BL1xVPXPVnrRGvKAtVfZlxxOwH4Z0%2FQglvLiwSQHX7gKOxvUmCwfwZGNVT9c6yMLpYspxDinSnrg7o9ZYJ2QVWZu9udxJzuDDnIuDk5afTzKBqcBWk04z6jzMipbUCn3H8Ab4HwMoalObbi3U9BFJFRZBG9RsXx%2B6IFmE%2FAzWE2QAzw5krx6Pi03Mt7JkbIQrCvbmMnFrVkU0jMiofM84OCy7QbqKrLHdQFScvWWM2mZe4VJuuZzdIb4pf7DAnZzyG%2FsaQNT%2FpNirLfITCSsA%2BliB%2Fkh8RC6%2FAjrphpt9bLQO%2FMhdRj0RmMLBq3pZgitvpMNezzMEGOqUBiAuIkGXKakGK81epbEM5y9wW0LSNJUZgakn7iTlePYnkIq4VD%2BzlHojGtQxuuGiKrGH851RgVLQiWg5JjjayY8%2Fz6pesQLkSxj6ehCEiXSPt8GpWgXP62fZVaxD8ns4mXjQw5zt%2F0c42tlAd30JbHK3c5D3LLhqdC8%2BipmHBTK5wIbPGGihQULszbDVK8tzAZhHA40inJ7i%2FmbnBm%2BVBmE%2BLYAC5&X-Amz-Signature=23cbfefc33d3b1a13d04d3a82424452fae2b4a6d361b99d7d8b0df985496cf0f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XQMQQVY%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T140720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQD%2FRGYElkK3wj8%2BITEyBOGnoFgYkttspVV4vxc23UjpfwIge9O7d0zS87dM4%2Fj4Go0uF%2BVgdqdpEShBaAYyahx5NQ8q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLvx0RPPEc5aIvUGBSrcA1z%2FLlAwLbLzyqvN99UD5YxYYuBGAHTHIQh2VcOaL%2B5QTT%2F9g5Vs6NFg1fopNOYk7qHQGtdap%2FP9gF3ACsjDWS9gWd9vdORWnPAqrbbOaHJ%2BZCOVOW7vNTmkM6FVpsbAZgkobJQUqcqJsMUlaPxiPEUUseX5HCcqhD0gECSWxVTXRCty%2BCvtgpKTd%2B71RLFqoIhax95r6peSebx%2Fg%2BovAyVwFiGSH0glbr%2Fj86iIcIwr9%2BDleEzX8HfZ64yvxUphweu3sJY1nP%2BWiQO8O%2BSJI8x6y3Awf8%2BoV9nj8CUtiUDZAdrMRHWEHJaUde%2BL1xVPXPVnrRGvKAtVfZlxxOwH4Z0%2FQglvLiwSQHX7gKOxvUmCwfwZGNVT9c6yMLpYspxDinSnrg7o9ZYJ2QVWZu9udxJzuDDnIuDk5afTzKBqcBWk04z6jzMipbUCn3H8Ab4HwMoalObbi3U9BFJFRZBG9RsXx%2B6IFmE%2FAzWE2QAzw5krx6Pi03Mt7JkbIQrCvbmMnFrVkU0jMiofM84OCy7QbqKrLHdQFScvWWM2mZe4VJuuZzdIb4pf7DAnZzyG%2FsaQNT%2FpNirLfITCSsA%2BliB%2Fkh8RC6%2FAjrphpt9bLQO%2FMhdRj0RmMLBq3pZgitvpMNezzMEGOqUBiAuIkGXKakGK81epbEM5y9wW0LSNJUZgakn7iTlePYnkIq4VD%2BzlHojGtQxuuGiKrGH851RgVLQiWg5JjjayY8%2Fz6pesQLkSxj6ehCEiXSPt8GpWgXP62fZVaxD8ns4mXjQw5zt%2F0c42tlAd30JbHK3c5D3LLhqdC8%2BipmHBTK5wIbPGGihQULszbDVK8tzAZhHA40inJ7i%2FmbnBm%2BVBmE%2BLYAC5&X-Amz-Signature=52bec3abc11c42ae5001d935328e319afddc4e02234b06f63bf236aa7952a904&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
