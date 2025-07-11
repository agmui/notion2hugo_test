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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHVYPJ7V%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T220922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdhVywY%2BGxZR8lZsOG2bEv6u3wZOn8DfoiWDLu4bTFKQIgDfG4y8d0rTkSiWIKM%2FbBWFVLaT%2FYnnZzcHcECPx5c54qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDf5HiIzRYNpXZyDCrcA8uhBzi4Arcpcwq%2B6VS%2B6CPtTzB2M%2BNl9CI2YAWYumcNEq0eTBOgkYAN19f6F8DWJelMI7CQERHaQCh2e4hrs8%2B%2F0siSVbv%2BzHiEA3MTCXiTLrHtqmBnEMDf0h01KQFJz837g22cCV5rUqy7bzPd1KPjlCh2N4d%2BLbCgXbvAkYGY7mgIct72WPNUN4SUd%2BsGRg7nv8FUzKFRLL46S%2FvhqlTGUU9pbpKfTvIaEO7FIxG5uhYc7%2FoUdEYXTJVHAHYFecDM129%2BwinUBOcVGlkCvBCwXvrbJuLjZa1V6zCNHC95TfgbcvsojQYSJKlb85HPxQuSNleANtUf83TNVgyZPjzCFhWjYnyjVdRneVtA9vlK7sNd%2B4kAUFwK3tTiXMbIaz4svaoubSllrJf0gx1ZV7waK4%2FwlBTm5RmDJUcgKfGT2XZPD7b%2F6W8qSTgTxCJP%2FXATD7gTmzyAhFD5z1BKjepTv%2BldyQjqpcx35ebEjnksrjVUIm4kpj6KssQMRtcFDAfMzbe4ishB%2B0I0tCK%2B0xCUWkzFSwqXHsuTEXedVoqjrirD8Gw52vWifjYF8JY0%2FNhjdaCdJut2gOkpAzAjVEL4fw3OgngvcybARoNtkAQJXpY%2Fx3UlHdpVegguMI6ExsMGOqUB5cHP0ROQhD7VMV6BO0sTFhOd0G2D%2BeRHo5IdC2BBM6gRMlgpGp%2F6Rx%2B2qSzrOeTZJkyLCE5vYK1lZR03R6wZVGX%2BCthTUfTdKehOfZJgJfJxjaW%2FAWiZrLmCp0zR3hdl4Ea2QBaWFYg%2FKL2qIkRvFLSZQPyKmmu1u8N2MAx1i1TziZbfzT9p2rrgZW6A9DuFxKgWaBGAaT4x13XjGFK4LO7bfJpz&X-Amz-Signature=cc4abae78c03cde41e1062dbc3e656d7f4a9cfca30e022d9356523d5052fc7f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHVYPJ7V%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T220922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdhVywY%2BGxZR8lZsOG2bEv6u3wZOn8DfoiWDLu4bTFKQIgDfG4y8d0rTkSiWIKM%2FbBWFVLaT%2FYnnZzcHcECPx5c54qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDf5HiIzRYNpXZyDCrcA8uhBzi4Arcpcwq%2B6VS%2B6CPtTzB2M%2BNl9CI2YAWYumcNEq0eTBOgkYAN19f6F8DWJelMI7CQERHaQCh2e4hrs8%2B%2F0siSVbv%2BzHiEA3MTCXiTLrHtqmBnEMDf0h01KQFJz837g22cCV5rUqy7bzPd1KPjlCh2N4d%2BLbCgXbvAkYGY7mgIct72WPNUN4SUd%2BsGRg7nv8FUzKFRLL46S%2FvhqlTGUU9pbpKfTvIaEO7FIxG5uhYc7%2FoUdEYXTJVHAHYFecDM129%2BwinUBOcVGlkCvBCwXvrbJuLjZa1V6zCNHC95TfgbcvsojQYSJKlb85HPxQuSNleANtUf83TNVgyZPjzCFhWjYnyjVdRneVtA9vlK7sNd%2B4kAUFwK3tTiXMbIaz4svaoubSllrJf0gx1ZV7waK4%2FwlBTm5RmDJUcgKfGT2XZPD7b%2F6W8qSTgTxCJP%2FXATD7gTmzyAhFD5z1BKjepTv%2BldyQjqpcx35ebEjnksrjVUIm4kpj6KssQMRtcFDAfMzbe4ishB%2B0I0tCK%2B0xCUWkzFSwqXHsuTEXedVoqjrirD8Gw52vWifjYF8JY0%2FNhjdaCdJut2gOkpAzAjVEL4fw3OgngvcybARoNtkAQJXpY%2Fx3UlHdpVegguMI6ExsMGOqUB5cHP0ROQhD7VMV6BO0sTFhOd0G2D%2BeRHo5IdC2BBM6gRMlgpGp%2F6Rx%2B2qSzrOeTZJkyLCE5vYK1lZR03R6wZVGX%2BCthTUfTdKehOfZJgJfJxjaW%2FAWiZrLmCp0zR3hdl4Ea2QBaWFYg%2FKL2qIkRvFLSZQPyKmmu1u8N2MAx1i1TziZbfzT9p2rrgZW6A9DuFxKgWaBGAaT4x13XjGFK4LO7bfJpz&X-Amz-Signature=00b99e69891417f313f02d0576b796ac8d037828bb9cad916558ac6cfd86766d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHVYPJ7V%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T220922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdhVywY%2BGxZR8lZsOG2bEv6u3wZOn8DfoiWDLu4bTFKQIgDfG4y8d0rTkSiWIKM%2FbBWFVLaT%2FYnnZzcHcECPx5c54qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDf5HiIzRYNpXZyDCrcA8uhBzi4Arcpcwq%2B6VS%2B6CPtTzB2M%2BNl9CI2YAWYumcNEq0eTBOgkYAN19f6F8DWJelMI7CQERHaQCh2e4hrs8%2B%2F0siSVbv%2BzHiEA3MTCXiTLrHtqmBnEMDf0h01KQFJz837g22cCV5rUqy7bzPd1KPjlCh2N4d%2BLbCgXbvAkYGY7mgIct72WPNUN4SUd%2BsGRg7nv8FUzKFRLL46S%2FvhqlTGUU9pbpKfTvIaEO7FIxG5uhYc7%2FoUdEYXTJVHAHYFecDM129%2BwinUBOcVGlkCvBCwXvrbJuLjZa1V6zCNHC95TfgbcvsojQYSJKlb85HPxQuSNleANtUf83TNVgyZPjzCFhWjYnyjVdRneVtA9vlK7sNd%2B4kAUFwK3tTiXMbIaz4svaoubSllrJf0gx1ZV7waK4%2FwlBTm5RmDJUcgKfGT2XZPD7b%2F6W8qSTgTxCJP%2FXATD7gTmzyAhFD5z1BKjepTv%2BldyQjqpcx35ebEjnksrjVUIm4kpj6KssQMRtcFDAfMzbe4ishB%2B0I0tCK%2B0xCUWkzFSwqXHsuTEXedVoqjrirD8Gw52vWifjYF8JY0%2FNhjdaCdJut2gOkpAzAjVEL4fw3OgngvcybARoNtkAQJXpY%2Fx3UlHdpVegguMI6ExsMGOqUB5cHP0ROQhD7VMV6BO0sTFhOd0G2D%2BeRHo5IdC2BBM6gRMlgpGp%2F6Rx%2B2qSzrOeTZJkyLCE5vYK1lZR03R6wZVGX%2BCthTUfTdKehOfZJgJfJxjaW%2FAWiZrLmCp0zR3hdl4Ea2QBaWFYg%2FKL2qIkRvFLSZQPyKmmu1u8N2MAx1i1TziZbfzT9p2rrgZW6A9DuFxKgWaBGAaT4x13XjGFK4LO7bfJpz&X-Amz-Signature=e0dae695b354b590e48b9914ba276c322dd472ea53cc61cf9f5d46d83ec93a77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
