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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAORD7SF%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T190706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2zTIQMrlSDeUAw94o%2F96hkW1ofX1UvysLKjlch7OV%2FwIgfWUFWaVpgE4%2BwSbMtQ96ta4nM9R8hpcSVtkPVpERUloq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDPIxquoFCJvaoLLYHyrcAwLetJMq6Xh74KbWEn1Q3m1JUbVKcJJOM6m6itYT%2BWikTGrkKkiLBon7QlIX0xWPQYqOGe6BV7TIP2MuWFLaRa2iNdjFHwUZcgsYfsaj0aX8%2B%2FD0qMg8IwN%2BI7pmhN6OctGc%2FX7UTs11%2F8U4MseJ11jjFV87zS7Y2BiFB%2FzI11h2kQuDF7EQ2g2PBWHq4kBaCN5zbLf3%2Fzo0OlREQkUuhzRvMrL4VWbhW2AsXjeXOUkKoJpH4wiFbENfFuygMFqW0x8HRV9rk5SISkBBcakQbaLTLITqMxH3EnCBQNYf2NXGPTmAFpZ8J889UST9z0svReQCAx9q5SdKp%2FvZwGqqsoyKQuPju1j5b%2F2z%2FlXgSoVn8ABzINhS8qwxJBKoKBsOW832HRQtlpfunYyI5uM%2BbJTbK%2FERkqjbb9uMi5u3VxavdA1uzcKZctj%2Fn6XvI0vBc4ZX9IrlvjE5TSoalDnasGKSL3%2F%2B%2FMDEB%2FGHCqBlrtoXwvsxdM4SHnpwAPwEqPTuZXZG3vFETu1sIdbuD9Vfhg8gulFHTsDWsTZ0mkKB1KAa9%2BPirI89cfQ6NLYhFFvOVPGx4HE9%2BCdyP%2FwFLB9%2FKsrDH0BRuSbh6qazTztavc2ivjR27GeS6kNv%2Fq56MP%2FJ%2B8IGOqUBD5tPkUjoK7oTj5ZamtDQJHhnUarAER7ihivx%2FNa7rVylK4Pkn8aPKZhMK3%2Byvaln3YG%2BjM1ucXkKQfJVRL6P%2B2iejyK5u9ZZ4iRgJTAeq0c%2B84e8a3A1F4bZuU2mM9zc74GDRPyOIO6p54j6dT6ha8PiLb1nnBmIAmqEBZsjFl66K8p5gMwcfdFhmgG4ccWNkbWoG11rPn%2B747tDuAB8fRRskzyb&X-Amz-Signature=e361a7fc01aed3d3745f8a0d3e0e1741d1bf95e86bab8ec7acac17133cdc562d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAORD7SF%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T190706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2zTIQMrlSDeUAw94o%2F96hkW1ofX1UvysLKjlch7OV%2FwIgfWUFWaVpgE4%2BwSbMtQ96ta4nM9R8hpcSVtkPVpERUloq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDPIxquoFCJvaoLLYHyrcAwLetJMq6Xh74KbWEn1Q3m1JUbVKcJJOM6m6itYT%2BWikTGrkKkiLBon7QlIX0xWPQYqOGe6BV7TIP2MuWFLaRa2iNdjFHwUZcgsYfsaj0aX8%2B%2FD0qMg8IwN%2BI7pmhN6OctGc%2FX7UTs11%2F8U4MseJ11jjFV87zS7Y2BiFB%2FzI11h2kQuDF7EQ2g2PBWHq4kBaCN5zbLf3%2Fzo0OlREQkUuhzRvMrL4VWbhW2AsXjeXOUkKoJpH4wiFbENfFuygMFqW0x8HRV9rk5SISkBBcakQbaLTLITqMxH3EnCBQNYf2NXGPTmAFpZ8J889UST9z0svReQCAx9q5SdKp%2FvZwGqqsoyKQuPju1j5b%2F2z%2FlXgSoVn8ABzINhS8qwxJBKoKBsOW832HRQtlpfunYyI5uM%2BbJTbK%2FERkqjbb9uMi5u3VxavdA1uzcKZctj%2Fn6XvI0vBc4ZX9IrlvjE5TSoalDnasGKSL3%2F%2B%2FMDEB%2FGHCqBlrtoXwvsxdM4SHnpwAPwEqPTuZXZG3vFETu1sIdbuD9Vfhg8gulFHTsDWsTZ0mkKB1KAa9%2BPirI89cfQ6NLYhFFvOVPGx4HE9%2BCdyP%2FwFLB9%2FKsrDH0BRuSbh6qazTztavc2ivjR27GeS6kNv%2Fq56MP%2FJ%2B8IGOqUBD5tPkUjoK7oTj5ZamtDQJHhnUarAER7ihivx%2FNa7rVylK4Pkn8aPKZhMK3%2Byvaln3YG%2BjM1ucXkKQfJVRL6P%2B2iejyK5u9ZZ4iRgJTAeq0c%2B84e8a3A1F4bZuU2mM9zc74GDRPyOIO6p54j6dT6ha8PiLb1nnBmIAmqEBZsjFl66K8p5gMwcfdFhmgG4ccWNkbWoG11rPn%2B747tDuAB8fRRskzyb&X-Amz-Signature=9c42ce415b1d384827c670ad1e9c7a6d44d76f5158383c823f1591fdd4ebd9b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAORD7SF%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T190706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2zTIQMrlSDeUAw94o%2F96hkW1ofX1UvysLKjlch7OV%2FwIgfWUFWaVpgE4%2BwSbMtQ96ta4nM9R8hpcSVtkPVpERUloq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDPIxquoFCJvaoLLYHyrcAwLetJMq6Xh74KbWEn1Q3m1JUbVKcJJOM6m6itYT%2BWikTGrkKkiLBon7QlIX0xWPQYqOGe6BV7TIP2MuWFLaRa2iNdjFHwUZcgsYfsaj0aX8%2B%2FD0qMg8IwN%2BI7pmhN6OctGc%2FX7UTs11%2F8U4MseJ11jjFV87zS7Y2BiFB%2FzI11h2kQuDF7EQ2g2PBWHq4kBaCN5zbLf3%2Fzo0OlREQkUuhzRvMrL4VWbhW2AsXjeXOUkKoJpH4wiFbENfFuygMFqW0x8HRV9rk5SISkBBcakQbaLTLITqMxH3EnCBQNYf2NXGPTmAFpZ8J889UST9z0svReQCAx9q5SdKp%2FvZwGqqsoyKQuPju1j5b%2F2z%2FlXgSoVn8ABzINhS8qwxJBKoKBsOW832HRQtlpfunYyI5uM%2BbJTbK%2FERkqjbb9uMi5u3VxavdA1uzcKZctj%2Fn6XvI0vBc4ZX9IrlvjE5TSoalDnasGKSL3%2F%2B%2FMDEB%2FGHCqBlrtoXwvsxdM4SHnpwAPwEqPTuZXZG3vFETu1sIdbuD9Vfhg8gulFHTsDWsTZ0mkKB1KAa9%2BPirI89cfQ6NLYhFFvOVPGx4HE9%2BCdyP%2FwFLB9%2FKsrDH0BRuSbh6qazTztavc2ivjR27GeS6kNv%2Fq56MP%2FJ%2B8IGOqUBD5tPkUjoK7oTj5ZamtDQJHhnUarAER7ihivx%2FNa7rVylK4Pkn8aPKZhMK3%2Byvaln3YG%2BjM1ucXkKQfJVRL6P%2B2iejyK5u9ZZ4iRgJTAeq0c%2B84e8a3A1F4bZuU2mM9zc74GDRPyOIO6p54j6dT6ha8PiLb1nnBmIAmqEBZsjFl66K8p5gMwcfdFhmgG4ccWNkbWoG11rPn%2B747tDuAB8fRRskzyb&X-Amz-Signature=eb4b8e0884d08eedda342412f512b5df744c0d9704744c7c48a87bb58f29aaf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
