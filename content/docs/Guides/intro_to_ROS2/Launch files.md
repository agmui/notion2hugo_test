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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646BSRLLI%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T110144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIGAkFaenSVi4%2F8xKdnfzCm69iecMp5gDfDE5HxMXYTO1AiAy%2FvUj1Y%2BVTireAcK2JwfAVfyldUAu%2FRgoCjpe%2BsbdpCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbuWGkiEqNX8Fkve%2BKtwDfyYnbu6mkwKOlrYAZCWcnOkAOra3cUOX6yE%2BFSQxmYP55uh6McA%2Fa0O2MSa0JqGfi2y5Cv5v535BlPBZEUdwDLnRsHPpX2yQJlamQCgs5zG%2BHlUMUZ7nEgnHyEH%2Bi5thozt0eKVQlG6lf4FjRJb2K8BqqOy%2BGRm1buUDnUr%2F4o4DWKWHEApAYp7UbJOnjyJlP7OoyFJj5H%2FESmjTNImU8KeD7VEXOyEB8rLJfOWhoQLXvA%2BZwORneBJntkRSKANGPPw%2BCs4WEZ0JiCgKAwSKEILnJ%2FaF0sC2%2BjKRjjKqXXGWxEhTBF9SBleTLFsjPHUn2BCr%2FGskLUv3a20rUIKJCZN6Fsz3aW2Bh8e4QRxy9co5stx7FgsSO4LRhLm%2FxSnxgc%2BP3zgDOTxEgMyxBzP59vX2PaTjp8SV%2FCSvByGJzkZ9fDcwx4MH91emtohKioJeWY9LbbXaBjVSD60z3qRsLM4o0jeShdNrYPvfZ93mEJwrbTDrvlVw37z6WjUAC8hEzhryCJaLPERAh%2BnJk27ZOtjAgq6IYH%2BiKM2U%2BfFouNFSQqh5GhFKKEn7hIF3rEozLLkxcW%2F%2F%2FjbZqU6yXJnbHWMBT6PZBLHgbgm62530Rk1am0onsvW5AHqHLvUw%2FPn0vgY6pgEgSAZL%2FbT2O2BCccZ5qm9LTQCKDOi9Wa6ZbKDCfB6uPvqhkl0i3UkLDKqdD19NNymLzWVdrk7Twdw3R6XxTGZbdwTDqkeH9qJVYayoOiQICHIUty4yTxlUkiCwMFTcdXYnOMHN%2BCWQk4lNDZppyc7RwLZR9xHuI0kvFOjJr76TNSkHf6SAn553nwmLZw9ScLWYdh53%2FvBCg0dHUTDuDGBHjw9fpNZX&X-Amz-Signature=c037d44dab0aab657863c13f813ff780b31037413a0cbd3cfe495ed509e25cf2&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646BSRLLI%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T110144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIGAkFaenSVi4%2F8xKdnfzCm69iecMp5gDfDE5HxMXYTO1AiAy%2FvUj1Y%2BVTireAcK2JwfAVfyldUAu%2FRgoCjpe%2BsbdpCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbuWGkiEqNX8Fkve%2BKtwDfyYnbu6mkwKOlrYAZCWcnOkAOra3cUOX6yE%2BFSQxmYP55uh6McA%2Fa0O2MSa0JqGfi2y5Cv5v535BlPBZEUdwDLnRsHPpX2yQJlamQCgs5zG%2BHlUMUZ7nEgnHyEH%2Bi5thozt0eKVQlG6lf4FjRJb2K8BqqOy%2BGRm1buUDnUr%2F4o4DWKWHEApAYp7UbJOnjyJlP7OoyFJj5H%2FESmjTNImU8KeD7VEXOyEB8rLJfOWhoQLXvA%2BZwORneBJntkRSKANGPPw%2BCs4WEZ0JiCgKAwSKEILnJ%2FaF0sC2%2BjKRjjKqXXGWxEhTBF9SBleTLFsjPHUn2BCr%2FGskLUv3a20rUIKJCZN6Fsz3aW2Bh8e4QRxy9co5stx7FgsSO4LRhLm%2FxSnxgc%2BP3zgDOTxEgMyxBzP59vX2PaTjp8SV%2FCSvByGJzkZ9fDcwx4MH91emtohKioJeWY9LbbXaBjVSD60z3qRsLM4o0jeShdNrYPvfZ93mEJwrbTDrvlVw37z6WjUAC8hEzhryCJaLPERAh%2BnJk27ZOtjAgq6IYH%2BiKM2U%2BfFouNFSQqh5GhFKKEn7hIF3rEozLLkxcW%2F%2F%2FjbZqU6yXJnbHWMBT6PZBLHgbgm62530Rk1am0onsvW5AHqHLvUw%2FPn0vgY6pgEgSAZL%2FbT2O2BCccZ5qm9LTQCKDOi9Wa6ZbKDCfB6uPvqhkl0i3UkLDKqdD19NNymLzWVdrk7Twdw3R6XxTGZbdwTDqkeH9qJVYayoOiQICHIUty4yTxlUkiCwMFTcdXYnOMHN%2BCWQk4lNDZppyc7RwLZR9xHuI0kvFOjJr76TNSkHf6SAn553nwmLZw9ScLWYdh53%2FvBCg0dHUTDuDGBHjw9fpNZX&X-Amz-Signature=31c866a25c82e6ddc353e3767d1f2e64224c0a531ff9bd939702d87e03408b35&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646BSRLLI%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T110144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIGAkFaenSVi4%2F8xKdnfzCm69iecMp5gDfDE5HxMXYTO1AiAy%2FvUj1Y%2BVTireAcK2JwfAVfyldUAu%2FRgoCjpe%2BsbdpCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbuWGkiEqNX8Fkve%2BKtwDfyYnbu6mkwKOlrYAZCWcnOkAOra3cUOX6yE%2BFSQxmYP55uh6McA%2Fa0O2MSa0JqGfi2y5Cv5v535BlPBZEUdwDLnRsHPpX2yQJlamQCgs5zG%2BHlUMUZ7nEgnHyEH%2Bi5thozt0eKVQlG6lf4FjRJb2K8BqqOy%2BGRm1buUDnUr%2F4o4DWKWHEApAYp7UbJOnjyJlP7OoyFJj5H%2FESmjTNImU8KeD7VEXOyEB8rLJfOWhoQLXvA%2BZwORneBJntkRSKANGPPw%2BCs4WEZ0JiCgKAwSKEILnJ%2FaF0sC2%2BjKRjjKqXXGWxEhTBF9SBleTLFsjPHUn2BCr%2FGskLUv3a20rUIKJCZN6Fsz3aW2Bh8e4QRxy9co5stx7FgsSO4LRhLm%2FxSnxgc%2BP3zgDOTxEgMyxBzP59vX2PaTjp8SV%2FCSvByGJzkZ9fDcwx4MH91emtohKioJeWY9LbbXaBjVSD60z3qRsLM4o0jeShdNrYPvfZ93mEJwrbTDrvlVw37z6WjUAC8hEzhryCJaLPERAh%2BnJk27ZOtjAgq6IYH%2BiKM2U%2BfFouNFSQqh5GhFKKEn7hIF3rEozLLkxcW%2F%2F%2FjbZqU6yXJnbHWMBT6PZBLHgbgm62530Rk1am0onsvW5AHqHLvUw%2FPn0vgY6pgEgSAZL%2FbT2O2BCccZ5qm9LTQCKDOi9Wa6ZbKDCfB6uPvqhkl0i3UkLDKqdD19NNymLzWVdrk7Twdw3R6XxTGZbdwTDqkeH9qJVYayoOiQICHIUty4yTxlUkiCwMFTcdXYnOMHN%2BCWQk4lNDZppyc7RwLZR9xHuI0kvFOjJr76TNSkHf6SAn553nwmLZw9ScLWYdh53%2FvBCg0dHUTDuDGBHjw9fpNZX&X-Amz-Signature=e95f7c30c51e23b5543d841b3a703b0f5942eaba2de100b51200f51ef3076beb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
