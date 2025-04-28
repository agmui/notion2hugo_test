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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYBQOQWU%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T004230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCotjGLbXNOzHF4DEKTzcmjf8eyD3tPUze2K%2FrWlfOT5AIhAIx6Cx%2Bj2TRb6WLpNqMaFIY4aXpudGAYizpKz0gczlP9Kv8DCGkQABoMNjM3NDIzMTgzODA1Igx22VFPCiHhgaXPhzYq3AOWdjnQIqqaZ2MMwov%2FrzXkYF%2FEab5l9Q4Lt13%2BrlzrrJsc29VSgvAkzoWgakijZvEGbKtc8Wov%2FMvMF1N7wsG%2FxGh3mI8ZTMbrirEBFk7M%2FHIvCnMlBst%2BdxCqoUCH3SoFw%2BUUp8ACHeleeZ5EQdE74IWmixFxn4HkAiv%2BooI3bacMEhCRJKH2daMsw0abLDMM1XTU7dEiJS6qoTVdCF98E90%2BJoqBQrf5GGPcflW3CnPtNa6vZp8pRW0pUSQLHD1gQMOwVqUs%2BahBC5TaH%2FfukzMc0XRRjm9VRK9VBwojKYQlx8qPCvHJNtPtYVJkDXe8qwiMXeS2bS9Bx5M9itQdVz5fTwadDKwiT%2FQiE%2B29%2BO0waxylFDG%2FBxjxDKWqpWnl1%2FCoAe%2F40MZUeqZlDr5fpoL4lMrlkzQETf7dAK3ys21JDvSCbCH6RE6wBTpgqeWaCfBvbKhJBcynRQn%2Fk2uznSWmg7rI62VRXRShTf6PAtsX2MkevKhaBYDn%2FRlQ3ZtOpX851%2B0gM7CaxoFqbpz%2F5uBSF8tqw%2Bbzy3F9A9GbmlKwVRe7%2FQRJmwvOboT5XDRlcZGP3bpJNIAZIzJIZB61O40EOZElmLud%2BCr8bhKMEef1NFwknwAbI%2FNBcTDqjrvABjqkAeUDn5zvqFEdlIIGH4qeiCA9P4yqucImf9RXxw%2Fed3Jw%2FAsQj163JKNi3O6UlKVUuXzFkHIMpiMn4AaBkFRDD8DzKL9DNSkuudOF5A%2F4lOUza1DByGTygbiWXE4r%2BdmRPYguzuP36D8CJ%2FddVWFD%2FnNMSE3f3Lo5cJLd9D4HfU2DVrMd9ISIT%2BNzrmPkM6X3jFc1tkPepsYRxdxu0p9Mq1C7g0BM&X-Amz-Signature=e2a7abbc1f974010ed29a90ff44bca2e49f6050f1981c212e530c31eeba6d9ca&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYBQOQWU%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T004230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCotjGLbXNOzHF4DEKTzcmjf8eyD3tPUze2K%2FrWlfOT5AIhAIx6Cx%2Bj2TRb6WLpNqMaFIY4aXpudGAYizpKz0gczlP9Kv8DCGkQABoMNjM3NDIzMTgzODA1Igx22VFPCiHhgaXPhzYq3AOWdjnQIqqaZ2MMwov%2FrzXkYF%2FEab5l9Q4Lt13%2BrlzrrJsc29VSgvAkzoWgakijZvEGbKtc8Wov%2FMvMF1N7wsG%2FxGh3mI8ZTMbrirEBFk7M%2FHIvCnMlBst%2BdxCqoUCH3SoFw%2BUUp8ACHeleeZ5EQdE74IWmixFxn4HkAiv%2BooI3bacMEhCRJKH2daMsw0abLDMM1XTU7dEiJS6qoTVdCF98E90%2BJoqBQrf5GGPcflW3CnPtNa6vZp8pRW0pUSQLHD1gQMOwVqUs%2BahBC5TaH%2FfukzMc0XRRjm9VRK9VBwojKYQlx8qPCvHJNtPtYVJkDXe8qwiMXeS2bS9Bx5M9itQdVz5fTwadDKwiT%2FQiE%2B29%2BO0waxylFDG%2FBxjxDKWqpWnl1%2FCoAe%2F40MZUeqZlDr5fpoL4lMrlkzQETf7dAK3ys21JDvSCbCH6RE6wBTpgqeWaCfBvbKhJBcynRQn%2Fk2uznSWmg7rI62VRXRShTf6PAtsX2MkevKhaBYDn%2FRlQ3ZtOpX851%2B0gM7CaxoFqbpz%2F5uBSF8tqw%2Bbzy3F9A9GbmlKwVRe7%2FQRJmwvOboT5XDRlcZGP3bpJNIAZIzJIZB61O40EOZElmLud%2BCr8bhKMEef1NFwknwAbI%2FNBcTDqjrvABjqkAeUDn5zvqFEdlIIGH4qeiCA9P4yqucImf9RXxw%2Fed3Jw%2FAsQj163JKNi3O6UlKVUuXzFkHIMpiMn4AaBkFRDD8DzKL9DNSkuudOF5A%2F4lOUza1DByGTygbiWXE4r%2BdmRPYguzuP36D8CJ%2FddVWFD%2FnNMSE3f3Lo5cJLd9D4HfU2DVrMd9ISIT%2BNzrmPkM6X3jFc1tkPepsYRxdxu0p9Mq1C7g0BM&X-Amz-Signature=0a5563698e5784a88648b0d9a9b05febd80a34ad36d98bee42d3e9bf2bd0db20&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYBQOQWU%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T004230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCotjGLbXNOzHF4DEKTzcmjf8eyD3tPUze2K%2FrWlfOT5AIhAIx6Cx%2Bj2TRb6WLpNqMaFIY4aXpudGAYizpKz0gczlP9Kv8DCGkQABoMNjM3NDIzMTgzODA1Igx22VFPCiHhgaXPhzYq3AOWdjnQIqqaZ2MMwov%2FrzXkYF%2FEab5l9Q4Lt13%2BrlzrrJsc29VSgvAkzoWgakijZvEGbKtc8Wov%2FMvMF1N7wsG%2FxGh3mI8ZTMbrirEBFk7M%2FHIvCnMlBst%2BdxCqoUCH3SoFw%2BUUp8ACHeleeZ5EQdE74IWmixFxn4HkAiv%2BooI3bacMEhCRJKH2daMsw0abLDMM1XTU7dEiJS6qoTVdCF98E90%2BJoqBQrf5GGPcflW3CnPtNa6vZp8pRW0pUSQLHD1gQMOwVqUs%2BahBC5TaH%2FfukzMc0XRRjm9VRK9VBwojKYQlx8qPCvHJNtPtYVJkDXe8qwiMXeS2bS9Bx5M9itQdVz5fTwadDKwiT%2FQiE%2B29%2BO0waxylFDG%2FBxjxDKWqpWnl1%2FCoAe%2F40MZUeqZlDr5fpoL4lMrlkzQETf7dAK3ys21JDvSCbCH6RE6wBTpgqeWaCfBvbKhJBcynRQn%2Fk2uznSWmg7rI62VRXRShTf6PAtsX2MkevKhaBYDn%2FRlQ3ZtOpX851%2B0gM7CaxoFqbpz%2F5uBSF8tqw%2Bbzy3F9A9GbmlKwVRe7%2FQRJmwvOboT5XDRlcZGP3bpJNIAZIzJIZB61O40EOZElmLud%2BCr8bhKMEef1NFwknwAbI%2FNBcTDqjrvABjqkAeUDn5zvqFEdlIIGH4qeiCA9P4yqucImf9RXxw%2Fed3Jw%2FAsQj163JKNi3O6UlKVUuXzFkHIMpiMn4AaBkFRDD8DzKL9DNSkuudOF5A%2F4lOUza1DByGTygbiWXE4r%2BdmRPYguzuP36D8CJ%2FddVWFD%2FnNMSE3f3Lo5cJLd9D4HfU2DVrMd9ISIT%2BNzrmPkM6X3jFc1tkPepsYRxdxu0p9Mq1C7g0BM&X-Amz-Signature=5ea4ae80d45dcdb49dce123dd77d371b354532656e906dd72171d766207dd2c9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
