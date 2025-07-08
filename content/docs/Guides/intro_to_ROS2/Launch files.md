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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJJK5UCQ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T140945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPlHBIqbP2GapI3HaFcFBA4J1RDKywy88%2BJNl7zVVvwAiBbeVbBGQlhoyw58rp8MiJ8oFGutO9%2F%2Ft1ilLSfff7gsSqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMznMlityVQkXe29KwKtwD7y7k6Xrx7iucVO4kS%2FxDNcgg9gog59kb4QNTHFHYcChRhNxGWitMg4YFyRBNDBbSrbW5KEMNezNI1y3l6GKaCEQuD5vNnyQe%2FyWaCy7RIamYclBkLDLTm7vNE0IEmnpBbgMcRcyLy%2FOPN0Ji7UGPgaWUUDXZAQVHXTWzlUHXmfHDPYLUAotT3F56T0oE12n9wLkA%2Fsj0bZ5hkhBvJxMSgXXt4D8lDmDZRz09EA%2BApjQ7V401wowCyM3Fp6t9Cs9ATgLeEBH1Kpl2ygeudbxTtNpFwK1wU31jVRWORDFlE61joqxTe8%2FJSygVW3Z8Yq2%2B3cJFdHtPux%2BGqqtNIVdQP6kc2qkVJnPF9P2kemIXutaLaX7zEyh4IGmsVcRrUMBCoDaex3KVX1ZECMokj91pq%2BXhISPa0WE22reQkBOYqBj6iTT2%2FqTDKCg7TQk1%2F3gB4LAfm2kQV0qcMSFQoyVrjs%2Fva2%2FPWgHD9y8Y4WxcebcaTjBDuJw1fwDtPhzQ9pH28Q2V3OgV%2Bb3JOJXf36Nc7g4SkeAzabrwoDL0b22dTWLEBLABNq%2FfVCglLYPvqtffNB%2FHRCzk3wGNt9tCQBxN7xYU8SbIuOe5qUzHcoT83Vu1ee8PoWi2xGrVLnwwg6e0wwY6pgHY22w7J0OmkswCWtvSssWo9SNb2hJtZ%2FspUuI%2FKt0CAuoc8075t%2BQcCcOPqvY1qoVGZbw17VHGbEuauWKtV2kldDC3lxbHLL6bsjouSMF6ej3LtfRphWlV3pcLa6IGoRnuSPmlJCK6OGcZ00KuH9QUCQ5IgpZKCWKLldMGMkq2oNa%2BmY9Ini8V6x8jmkLu6MQpiBCkAkDc0X1c7qHVywdVFNbDIo03&X-Amz-Signature=1b5143b22457c14b49c33544091a0b0a4be536d9d51f8d544e6298499605aa02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJJK5UCQ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T140945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPlHBIqbP2GapI3HaFcFBA4J1RDKywy88%2BJNl7zVVvwAiBbeVbBGQlhoyw58rp8MiJ8oFGutO9%2F%2Ft1ilLSfff7gsSqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMznMlityVQkXe29KwKtwD7y7k6Xrx7iucVO4kS%2FxDNcgg9gog59kb4QNTHFHYcChRhNxGWitMg4YFyRBNDBbSrbW5KEMNezNI1y3l6GKaCEQuD5vNnyQe%2FyWaCy7RIamYclBkLDLTm7vNE0IEmnpBbgMcRcyLy%2FOPN0Ji7UGPgaWUUDXZAQVHXTWzlUHXmfHDPYLUAotT3F56T0oE12n9wLkA%2Fsj0bZ5hkhBvJxMSgXXt4D8lDmDZRz09EA%2BApjQ7V401wowCyM3Fp6t9Cs9ATgLeEBH1Kpl2ygeudbxTtNpFwK1wU31jVRWORDFlE61joqxTe8%2FJSygVW3Z8Yq2%2B3cJFdHtPux%2BGqqtNIVdQP6kc2qkVJnPF9P2kemIXutaLaX7zEyh4IGmsVcRrUMBCoDaex3KVX1ZECMokj91pq%2BXhISPa0WE22reQkBOYqBj6iTT2%2FqTDKCg7TQk1%2F3gB4LAfm2kQV0qcMSFQoyVrjs%2Fva2%2FPWgHD9y8Y4WxcebcaTjBDuJw1fwDtPhzQ9pH28Q2V3OgV%2Bb3JOJXf36Nc7g4SkeAzabrwoDL0b22dTWLEBLABNq%2FfVCglLYPvqtffNB%2FHRCzk3wGNt9tCQBxN7xYU8SbIuOe5qUzHcoT83Vu1ee8PoWi2xGrVLnwwg6e0wwY6pgHY22w7J0OmkswCWtvSssWo9SNb2hJtZ%2FspUuI%2FKt0CAuoc8075t%2BQcCcOPqvY1qoVGZbw17VHGbEuauWKtV2kldDC3lxbHLL6bsjouSMF6ej3LtfRphWlV3pcLa6IGoRnuSPmlJCK6OGcZ00KuH9QUCQ5IgpZKCWKLldMGMkq2oNa%2BmY9Ini8V6x8jmkLu6MQpiBCkAkDc0X1c7qHVywdVFNbDIo03&X-Amz-Signature=72fb03a764e05ba8c9da5c420ca7f0bff3b4f721e19a05b83765da5f0a100a42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJJK5UCQ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T140945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPlHBIqbP2GapI3HaFcFBA4J1RDKywy88%2BJNl7zVVvwAiBbeVbBGQlhoyw58rp8MiJ8oFGutO9%2F%2Ft1ilLSfff7gsSqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMznMlityVQkXe29KwKtwD7y7k6Xrx7iucVO4kS%2FxDNcgg9gog59kb4QNTHFHYcChRhNxGWitMg4YFyRBNDBbSrbW5KEMNezNI1y3l6GKaCEQuD5vNnyQe%2FyWaCy7RIamYclBkLDLTm7vNE0IEmnpBbgMcRcyLy%2FOPN0Ji7UGPgaWUUDXZAQVHXTWzlUHXmfHDPYLUAotT3F56T0oE12n9wLkA%2Fsj0bZ5hkhBvJxMSgXXt4D8lDmDZRz09EA%2BApjQ7V401wowCyM3Fp6t9Cs9ATgLeEBH1Kpl2ygeudbxTtNpFwK1wU31jVRWORDFlE61joqxTe8%2FJSygVW3Z8Yq2%2B3cJFdHtPux%2BGqqtNIVdQP6kc2qkVJnPF9P2kemIXutaLaX7zEyh4IGmsVcRrUMBCoDaex3KVX1ZECMokj91pq%2BXhISPa0WE22reQkBOYqBj6iTT2%2FqTDKCg7TQk1%2F3gB4LAfm2kQV0qcMSFQoyVrjs%2Fva2%2FPWgHD9y8Y4WxcebcaTjBDuJw1fwDtPhzQ9pH28Q2V3OgV%2Bb3JOJXf36Nc7g4SkeAzabrwoDL0b22dTWLEBLABNq%2FfVCglLYPvqtffNB%2FHRCzk3wGNt9tCQBxN7xYU8SbIuOe5qUzHcoT83Vu1ee8PoWi2xGrVLnwwg6e0wwY6pgHY22w7J0OmkswCWtvSssWo9SNb2hJtZ%2FspUuI%2FKt0CAuoc8075t%2BQcCcOPqvY1qoVGZbw17VHGbEuauWKtV2kldDC3lxbHLL6bsjouSMF6ej3LtfRphWlV3pcLa6IGoRnuSPmlJCK6OGcZ00KuH9QUCQ5IgpZKCWKLldMGMkq2oNa%2BmY9Ini8V6x8jmkLu6MQpiBCkAkDc0X1c7qHVywdVFNbDIo03&X-Amz-Signature=69a68fc98be86af6a99db9a307b326dd97682112d55ca5b3492e399a0631f257&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
