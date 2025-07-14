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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OSZ4DI3%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T201042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCzmZJPCqzPj1f3455kyaOi0%2BanhRNPoHmJuNgvG2IEmAIhAPrcVZ7sOPUPje908PBdAqPR9rShMoVu%2FqUMQUEEUGdAKv8DCDQQABoMNjM3NDIzMTgzODA1IgzDY15sMEo3v5MJvmUq3AOQvscV5Cy6tmE0BkhDcpBds9WaGdzFu4vv%2Fk1ccpoFKNlwQmd8JXUv93eLPQQ3dB4T9UoIOhVEGNAB1dCiJF8hB01sYfHklwPQp%2BPgUtOTQ39BpI51ns%2F13zh2C0S05ATY723GFIcedskUr6qreNzxEKsi11jCX4iiSO41FOv5w7Oui0DvbBS%2B0p0XrSYtV%2FmSTV5MZNL6yvG18GozVzXAtghaeORYV%2Bd6p8ADS8LQHCUexy4tQK3CIlrCh7AW9S7UEbuhZ%2FTUtrxsZiVyWli%2FfgK%2B%2FwOlhxhNbQJwVeSmXouM%2BIdiGXR5%2Fs92GTfPQXI1neJpdfv8%2FMk964%2F3dRc6Kk94l3cqsLYO0fSCAxeCBMJtk%2B0MEvDva3LsDb0mT4DrewswPWjjrUyr%2BQ8BEYJIfaAUOU%2BEIBAo4yMDmTp7rgQ2kF2QUxX64AH5YvdPk78BndunE6J%2FYR2p8jLhS8onJfN%2Bl23%2BdzqEL2xuOgw83P9kpt%2BeM3qQIwQx8PMDcIo7owEQ29wnJ0NRk59fkEtXibAw8fo1ZiDEKB4oa6GDkrfhP%2FGqyh7XoiKGUclP3pJIKFK2htomhZJ7QE9GCHvYQYq0p4LycXRybIxWTlDm007qz1G03VSwWIYDrTClpNXDBjqkAcSTV1GPUEUrio4h5oh8jSvpJi76WaqtDDX9EeNgPD4ClP4ZZ6O%2FxF2h6sbLA8aP2RFKiI4%2FMqV5DwbQYVKqqvYwsOT3HSu6j7nS4%2FLi0o3Ze8hd5APrZfUPUiiLpbI2BHB7dA3D3vGEvVD1uVGhGznF5UIA79saCgGa3MOsZHtKlVwIupgUFkXU1PoV%2F%2BwnbSwLNe8Pg5d0WNqn2Heqzzcp1fou&X-Amz-Signature=1b63a07325b13c81bc33ab4432ba9b2b5c02e8ab7221c3fe1156975a1017c0a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OSZ4DI3%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T201042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCzmZJPCqzPj1f3455kyaOi0%2BanhRNPoHmJuNgvG2IEmAIhAPrcVZ7sOPUPje908PBdAqPR9rShMoVu%2FqUMQUEEUGdAKv8DCDQQABoMNjM3NDIzMTgzODA1IgzDY15sMEo3v5MJvmUq3AOQvscV5Cy6tmE0BkhDcpBds9WaGdzFu4vv%2Fk1ccpoFKNlwQmd8JXUv93eLPQQ3dB4T9UoIOhVEGNAB1dCiJF8hB01sYfHklwPQp%2BPgUtOTQ39BpI51ns%2F13zh2C0S05ATY723GFIcedskUr6qreNzxEKsi11jCX4iiSO41FOv5w7Oui0DvbBS%2B0p0XrSYtV%2FmSTV5MZNL6yvG18GozVzXAtghaeORYV%2Bd6p8ADS8LQHCUexy4tQK3CIlrCh7AW9S7UEbuhZ%2FTUtrxsZiVyWli%2FfgK%2B%2FwOlhxhNbQJwVeSmXouM%2BIdiGXR5%2Fs92GTfPQXI1neJpdfv8%2FMk964%2F3dRc6Kk94l3cqsLYO0fSCAxeCBMJtk%2B0MEvDva3LsDb0mT4DrewswPWjjrUyr%2BQ8BEYJIfaAUOU%2BEIBAo4yMDmTp7rgQ2kF2QUxX64AH5YvdPk78BndunE6J%2FYR2p8jLhS8onJfN%2Bl23%2BdzqEL2xuOgw83P9kpt%2BeM3qQIwQx8PMDcIo7owEQ29wnJ0NRk59fkEtXibAw8fo1ZiDEKB4oa6GDkrfhP%2FGqyh7XoiKGUclP3pJIKFK2htomhZJ7QE9GCHvYQYq0p4LycXRybIxWTlDm007qz1G03VSwWIYDrTClpNXDBjqkAcSTV1GPUEUrio4h5oh8jSvpJi76WaqtDDX9EeNgPD4ClP4ZZ6O%2FxF2h6sbLA8aP2RFKiI4%2FMqV5DwbQYVKqqvYwsOT3HSu6j7nS4%2FLi0o3Ze8hd5APrZfUPUiiLpbI2BHB7dA3D3vGEvVD1uVGhGznF5UIA79saCgGa3MOsZHtKlVwIupgUFkXU1PoV%2F%2BwnbSwLNe8Pg5d0WNqn2Heqzzcp1fou&X-Amz-Signature=20301731a7c6d210f0ca0428018e4ecb60334b89b0f496089608968f136f4a19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OSZ4DI3%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T201042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCzmZJPCqzPj1f3455kyaOi0%2BanhRNPoHmJuNgvG2IEmAIhAPrcVZ7sOPUPje908PBdAqPR9rShMoVu%2FqUMQUEEUGdAKv8DCDQQABoMNjM3NDIzMTgzODA1IgzDY15sMEo3v5MJvmUq3AOQvscV5Cy6tmE0BkhDcpBds9WaGdzFu4vv%2Fk1ccpoFKNlwQmd8JXUv93eLPQQ3dB4T9UoIOhVEGNAB1dCiJF8hB01sYfHklwPQp%2BPgUtOTQ39BpI51ns%2F13zh2C0S05ATY723GFIcedskUr6qreNzxEKsi11jCX4iiSO41FOv5w7Oui0DvbBS%2B0p0XrSYtV%2FmSTV5MZNL6yvG18GozVzXAtghaeORYV%2Bd6p8ADS8LQHCUexy4tQK3CIlrCh7AW9S7UEbuhZ%2FTUtrxsZiVyWli%2FfgK%2B%2FwOlhxhNbQJwVeSmXouM%2BIdiGXR5%2Fs92GTfPQXI1neJpdfv8%2FMk964%2F3dRc6Kk94l3cqsLYO0fSCAxeCBMJtk%2B0MEvDva3LsDb0mT4DrewswPWjjrUyr%2BQ8BEYJIfaAUOU%2BEIBAo4yMDmTp7rgQ2kF2QUxX64AH5YvdPk78BndunE6J%2FYR2p8jLhS8onJfN%2Bl23%2BdzqEL2xuOgw83P9kpt%2BeM3qQIwQx8PMDcIo7owEQ29wnJ0NRk59fkEtXibAw8fo1ZiDEKB4oa6GDkrfhP%2FGqyh7XoiKGUclP3pJIKFK2htomhZJ7QE9GCHvYQYq0p4LycXRybIxWTlDm007qz1G03VSwWIYDrTClpNXDBjqkAcSTV1GPUEUrio4h5oh8jSvpJi76WaqtDDX9EeNgPD4ClP4ZZ6O%2FxF2h6sbLA8aP2RFKiI4%2FMqV5DwbQYVKqqvYwsOT3HSu6j7nS4%2FLi0o3Ze8hd5APrZfUPUiiLpbI2BHB7dA3D3vGEvVD1uVGhGznF5UIA79saCgGa3MOsZHtKlVwIupgUFkXU1PoV%2F%2BwnbSwLNe8Pg5d0WNqn2Heqzzcp1fou&X-Amz-Signature=fc4a2bf8e072ea1b5ec9ee641bf3437e3a67712049383d77f60eba02aad63d10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
