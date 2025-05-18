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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6AYR6UR%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T170614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHdPT6txcix%2FVUs9bdg8HJ1o%2BNVBW%2FN%2Fuk%2BgGsWmnTT9AiA9ez5unrh%2BL%2BQE2goNmW%2BVXpPszkkQ4XqalBKaclzGVyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMqs%2Fu0Bajw097%2BVS5KtwDmK9I54tVPfe8Uw5e%2BcLqhzTolFt%2FkN71fL0%2FDuug9M1N170ddro6bWtobwBdLV1rl2HPHlHz%2FJslMC32yTmgaIkIjF3sjHAV0XgmGvjb6b95Ha0sesPNMYecrzaX%2FYx78kkJGcydH5Sk4GJ3riOaYaHl2qUxtMGgsW6RokA1U3d46up%2BxzXmrVrgHcEd78KKjr6EAPkS3MuwYEXERyXRtLePTrGPqW5zo%2BqrBE9cgiiY2lFKUzbeTB%2Ff1%2FFluCBvGLzxcaPtwVU4joKD1YeZrfUnUj0SaQqumQev94HX5s8%2BVQooM7%2FL%2FjhX%2FWOTIOqaPjTmPa20vARMLowon8r%2FG4oFn4yU9DyBNNcshu%2FKeRFviQqlU8oWmMLv0SygX%2BouxQZIom0d0MEaCkYhOgiQ3c3gGrA2mQM2oyPQw1xgJb5dwPLWn8I%2FTM47qY2TyORjPru%2FOHrdUGg2cljZA%2FmSgYrfMroZ79UztfrtDATY%2FNA%2FysIT0kSxi1Xre2pH%2BV4jjWFWRgRHCUOBfY7Db%2BOcpnQyygfRT9pVZ2ZDhFzc2B13fB0bDhklaYxrYmgkQT9%2FbitbLBOScnZQpSM8TPiCkCIZnKPaH8EExNsfltRMXv8h%2FOpP1FYOQm%2BzfFkwk6SowQY6pgGuwkDyA7PzucbIU7N6JhGfrq%2B26R9bSIA2zSY6tKq2GLOV%2Fk4uEKAh296mwiGXOjLn44km2pHL13Wp%2FTmYd18P2vuHmaUUxICDaJpWa7hcqsdqAItJhmYcfB2MN9a8xTubaNxGOVLdGmWUhYQTFHpwZ%2FxeW4%2BS15ZSJitjkGEkvvFCpgSlte%2BBTIeY9aeB41VfQC8RM5%2Fj3bmoV16%2F%2BU4YKEmasqqF&X-Amz-Signature=b1347c929e810a2ee69002acc2b4fed990bcf87a4ec937b0a5b583920d520da0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6AYR6UR%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T170614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHdPT6txcix%2FVUs9bdg8HJ1o%2BNVBW%2FN%2Fuk%2BgGsWmnTT9AiA9ez5unrh%2BL%2BQE2goNmW%2BVXpPszkkQ4XqalBKaclzGVyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMqs%2Fu0Bajw097%2BVS5KtwDmK9I54tVPfe8Uw5e%2BcLqhzTolFt%2FkN71fL0%2FDuug9M1N170ddro6bWtobwBdLV1rl2HPHlHz%2FJslMC32yTmgaIkIjF3sjHAV0XgmGvjb6b95Ha0sesPNMYecrzaX%2FYx78kkJGcydH5Sk4GJ3riOaYaHl2qUxtMGgsW6RokA1U3d46up%2BxzXmrVrgHcEd78KKjr6EAPkS3MuwYEXERyXRtLePTrGPqW5zo%2BqrBE9cgiiY2lFKUzbeTB%2Ff1%2FFluCBvGLzxcaPtwVU4joKD1YeZrfUnUj0SaQqumQev94HX5s8%2BVQooM7%2FL%2FjhX%2FWOTIOqaPjTmPa20vARMLowon8r%2FG4oFn4yU9DyBNNcshu%2FKeRFviQqlU8oWmMLv0SygX%2BouxQZIom0d0MEaCkYhOgiQ3c3gGrA2mQM2oyPQw1xgJb5dwPLWn8I%2FTM47qY2TyORjPru%2FOHrdUGg2cljZA%2FmSgYrfMroZ79UztfrtDATY%2FNA%2FysIT0kSxi1Xre2pH%2BV4jjWFWRgRHCUOBfY7Db%2BOcpnQyygfRT9pVZ2ZDhFzc2B13fB0bDhklaYxrYmgkQT9%2FbitbLBOScnZQpSM8TPiCkCIZnKPaH8EExNsfltRMXv8h%2FOpP1FYOQm%2BzfFkwk6SowQY6pgGuwkDyA7PzucbIU7N6JhGfrq%2B26R9bSIA2zSY6tKq2GLOV%2Fk4uEKAh296mwiGXOjLn44km2pHL13Wp%2FTmYd18P2vuHmaUUxICDaJpWa7hcqsdqAItJhmYcfB2MN9a8xTubaNxGOVLdGmWUhYQTFHpwZ%2FxeW4%2BS15ZSJitjkGEkvvFCpgSlte%2BBTIeY9aeB41VfQC8RM5%2Fj3bmoV16%2F%2BU4YKEmasqqF&X-Amz-Signature=c4f2fdd7aa8d273cac860574f02255df88aab6305b7b10c7c774ddab72297cb1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6AYR6UR%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T170614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHdPT6txcix%2FVUs9bdg8HJ1o%2BNVBW%2FN%2Fuk%2BgGsWmnTT9AiA9ez5unrh%2BL%2BQE2goNmW%2BVXpPszkkQ4XqalBKaclzGVyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMqs%2Fu0Bajw097%2BVS5KtwDmK9I54tVPfe8Uw5e%2BcLqhzTolFt%2FkN71fL0%2FDuug9M1N170ddro6bWtobwBdLV1rl2HPHlHz%2FJslMC32yTmgaIkIjF3sjHAV0XgmGvjb6b95Ha0sesPNMYecrzaX%2FYx78kkJGcydH5Sk4GJ3riOaYaHl2qUxtMGgsW6RokA1U3d46up%2BxzXmrVrgHcEd78KKjr6EAPkS3MuwYEXERyXRtLePTrGPqW5zo%2BqrBE9cgiiY2lFKUzbeTB%2Ff1%2FFluCBvGLzxcaPtwVU4joKD1YeZrfUnUj0SaQqumQev94HX5s8%2BVQooM7%2FL%2FjhX%2FWOTIOqaPjTmPa20vARMLowon8r%2FG4oFn4yU9DyBNNcshu%2FKeRFviQqlU8oWmMLv0SygX%2BouxQZIom0d0MEaCkYhOgiQ3c3gGrA2mQM2oyPQw1xgJb5dwPLWn8I%2FTM47qY2TyORjPru%2FOHrdUGg2cljZA%2FmSgYrfMroZ79UztfrtDATY%2FNA%2FysIT0kSxi1Xre2pH%2BV4jjWFWRgRHCUOBfY7Db%2BOcpnQyygfRT9pVZ2ZDhFzc2B13fB0bDhklaYxrYmgkQT9%2FbitbLBOScnZQpSM8TPiCkCIZnKPaH8EExNsfltRMXv8h%2FOpP1FYOQm%2BzfFkwk6SowQY6pgGuwkDyA7PzucbIU7N6JhGfrq%2B26R9bSIA2zSY6tKq2GLOV%2Fk4uEKAh296mwiGXOjLn44km2pHL13Wp%2FTmYd18P2vuHmaUUxICDaJpWa7hcqsdqAItJhmYcfB2MN9a8xTubaNxGOVLdGmWUhYQTFHpwZ%2FxeW4%2BS15ZSJitjkGEkvvFCpgSlte%2BBTIeY9aeB41VfQC8RM5%2Fj3bmoV16%2F%2BU4YKEmasqqF&X-Amz-Signature=e9ad444f0ebe1b10179dd6ee00e20f44212c9dab4c90679acc04801c4f525c38&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
