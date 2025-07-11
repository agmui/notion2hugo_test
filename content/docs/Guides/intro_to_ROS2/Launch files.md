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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CTBKNZX%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T091104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHkQxANjuGokpDc8UFohovUB2qjkz%2Bx%2FP5UhiMvzT5WTAiAWj%2BNDd0lXpM4dtKUxfaUJ9%2BsWTbMdtSxpVLvQbJL1OSqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BCs9iN9oDXWnsCJuKtwDk6TBePzVHSnaFkwMhoyhHBkv5eomy7U%2Fu012lHiN%2FF7kUiAn3yG0%2FN%2Funh%2FPpbcGMVbRQSB3PLm67DTYXYmHnWrumDXXHHcvWUm3NwoO%2Fsg%2BdO2JYjeq9N4j%2FiI8zw9acfbyJfwhcvo1m3FhOWsu32cYZm6id1KFBLETddTYkklhQgtGA4RwdpwgYaW90NBwc0zrGb%2FzZwfsu%2Fi3dXIyJJoZEOw24DQVTGFBhAC4lQX1LIlrjEpZeDI2aCt%2FL2SUtD%2FhN4oeGpM9GYKewGGshG3UUYVNhWsthCkCCadIH89T0NJGHPXrTEO6s9IkGSlYqq4gsoytLe85nrwJpjf8NiHXns3os3on3ninW592FnECHesQFTP%2BRsmGa0QhflCO%2FoSARngB4o8Vnqgz5uIgIgyP5uhQCdkEc%2BFugcHXKwOJNym%2BsIo84j2vi1n2rgWyfsZYUkuHjU2y9sG24BrOPE63Ak4tJKGnKt4TdHDCKtPVnaaAp5anmO%2FL6kOgOo3pc2kK29PiGztH2VUCsfJgC%2FdWUVA7mfIBKqISVdwWdQk%2F3qlpAa2Nua6yihAZ%2FXdQXG4zZNLEVZAzLeCPU48ZuLNZzAvzZYQYbkSYvLjg%2FWb%2F4%2BoB59ZoKsJIJmcwxKjDwwY6pgFjoTrGzRkdfiNK9SwEqsYJGQPVNo8IiMaghLUpV78ITU1U2rIjE%2BCYoZ%2F%2B9cPzTqMi7T994uU5ww68LroQCFHgq3CSshPhP2TiVLhv%2FhELo3XN55mT%2Fo3AjkXwoSdGHQzJkdOutTlotNNWRF9hTPkIMpc4nbw9DMWmxvelEPIMBInR8f9yJoR3qnYC64ZfvoFTpyozK0GKIMNYaodXDoCZ82MNfh5N&X-Amz-Signature=286d8b3fbd0af6db5adab5149903872f0f43d97277332d9c3d79e908e86ef106&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CTBKNZX%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T091104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHkQxANjuGokpDc8UFohovUB2qjkz%2Bx%2FP5UhiMvzT5WTAiAWj%2BNDd0lXpM4dtKUxfaUJ9%2BsWTbMdtSxpVLvQbJL1OSqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BCs9iN9oDXWnsCJuKtwDk6TBePzVHSnaFkwMhoyhHBkv5eomy7U%2Fu012lHiN%2FF7kUiAn3yG0%2FN%2Funh%2FPpbcGMVbRQSB3PLm67DTYXYmHnWrumDXXHHcvWUm3NwoO%2Fsg%2BdO2JYjeq9N4j%2FiI8zw9acfbyJfwhcvo1m3FhOWsu32cYZm6id1KFBLETddTYkklhQgtGA4RwdpwgYaW90NBwc0zrGb%2FzZwfsu%2Fi3dXIyJJoZEOw24DQVTGFBhAC4lQX1LIlrjEpZeDI2aCt%2FL2SUtD%2FhN4oeGpM9GYKewGGshG3UUYVNhWsthCkCCadIH89T0NJGHPXrTEO6s9IkGSlYqq4gsoytLe85nrwJpjf8NiHXns3os3on3ninW592FnECHesQFTP%2BRsmGa0QhflCO%2FoSARngB4o8Vnqgz5uIgIgyP5uhQCdkEc%2BFugcHXKwOJNym%2BsIo84j2vi1n2rgWyfsZYUkuHjU2y9sG24BrOPE63Ak4tJKGnKt4TdHDCKtPVnaaAp5anmO%2FL6kOgOo3pc2kK29PiGztH2VUCsfJgC%2FdWUVA7mfIBKqISVdwWdQk%2F3qlpAa2Nua6yihAZ%2FXdQXG4zZNLEVZAzLeCPU48ZuLNZzAvzZYQYbkSYvLjg%2FWb%2F4%2BoB59ZoKsJIJmcwxKjDwwY6pgFjoTrGzRkdfiNK9SwEqsYJGQPVNo8IiMaghLUpV78ITU1U2rIjE%2BCYoZ%2F%2B9cPzTqMi7T994uU5ww68LroQCFHgq3CSshPhP2TiVLhv%2FhELo3XN55mT%2Fo3AjkXwoSdGHQzJkdOutTlotNNWRF9hTPkIMpc4nbw9DMWmxvelEPIMBInR8f9yJoR3qnYC64ZfvoFTpyozK0GKIMNYaodXDoCZ82MNfh5N&X-Amz-Signature=0e91a5bc75570aed4a5eac68806fd5967d82fae96860c5bfe011e88394ca0a48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CTBKNZX%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T091104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHkQxANjuGokpDc8UFohovUB2qjkz%2Bx%2FP5UhiMvzT5WTAiAWj%2BNDd0lXpM4dtKUxfaUJ9%2BsWTbMdtSxpVLvQbJL1OSqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BCs9iN9oDXWnsCJuKtwDk6TBePzVHSnaFkwMhoyhHBkv5eomy7U%2Fu012lHiN%2FF7kUiAn3yG0%2FN%2Funh%2FPpbcGMVbRQSB3PLm67DTYXYmHnWrumDXXHHcvWUm3NwoO%2Fsg%2BdO2JYjeq9N4j%2FiI8zw9acfbyJfwhcvo1m3FhOWsu32cYZm6id1KFBLETddTYkklhQgtGA4RwdpwgYaW90NBwc0zrGb%2FzZwfsu%2Fi3dXIyJJoZEOw24DQVTGFBhAC4lQX1LIlrjEpZeDI2aCt%2FL2SUtD%2FhN4oeGpM9GYKewGGshG3UUYVNhWsthCkCCadIH89T0NJGHPXrTEO6s9IkGSlYqq4gsoytLe85nrwJpjf8NiHXns3os3on3ninW592FnECHesQFTP%2BRsmGa0QhflCO%2FoSARngB4o8Vnqgz5uIgIgyP5uhQCdkEc%2BFugcHXKwOJNym%2BsIo84j2vi1n2rgWyfsZYUkuHjU2y9sG24BrOPE63Ak4tJKGnKt4TdHDCKtPVnaaAp5anmO%2FL6kOgOo3pc2kK29PiGztH2VUCsfJgC%2FdWUVA7mfIBKqISVdwWdQk%2F3qlpAa2Nua6yihAZ%2FXdQXG4zZNLEVZAzLeCPU48ZuLNZzAvzZYQYbkSYvLjg%2FWb%2F4%2BoB59ZoKsJIJmcwxKjDwwY6pgFjoTrGzRkdfiNK9SwEqsYJGQPVNo8IiMaghLUpV78ITU1U2rIjE%2BCYoZ%2F%2B9cPzTqMi7T994uU5ww68LroQCFHgq3CSshPhP2TiVLhv%2FhELo3XN55mT%2Fo3AjkXwoSdGHQzJkdOutTlotNNWRF9hTPkIMpc4nbw9DMWmxvelEPIMBInR8f9yJoR3qnYC64ZfvoFTpyozK0GKIMNYaodXDoCZ82MNfh5N&X-Amz-Signature=ac44e2be76da0489c28dffeeccd23ae163999bd87f972018eb080f8a76908bdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
