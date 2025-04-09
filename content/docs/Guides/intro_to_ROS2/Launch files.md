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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M2DIF6X%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T032601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIBNaBKZJLfIuzgCt%2Fr%2FaXEjlowvJMLjuRt3uWO0F4pwkAiEAhki%2F4K70tI0mP75Ida0p%2FaIC9HgnEZwjpFKXqA%2BqbrsqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB9bKsVizAlRFmxVvyrcA9qdrqjvwCoC5tIC1%2FcSKDfwbSXE8NttdM%2FSenAjOAlwPvLXHa%2FZSizoJ3txRjKbcEArw4SLMeNjm8uYJ4n1fN2jIqNPxzAIBx%2FOdn31WAbaXnxZzOM1zMwYpCQNX4NNxNqFl6aJVCqoPkCDV0duaO%2FJQsl%2BnXrmAnTbcv694N2WJKg%2BCORMScII0%2BhXC2zgtJAhEwS17bthrd%2BlA%2BSnJoguJHy2t8I6ADsL4DpB2yWigTf3Zz3nVqCL1NfKfyMF4efZWYTXECAolG1gpGKrdr29NK%2FGKvpNjY1GS6z97Yl9U4T9Sf4s2RZ6tlbXZz8Dbl9XRFL8%2FfDCDZCpByuYTTv5EsVuucaLK%2FjRxRPfHrzTonyYQTU%2BavNpXgeXXxyqAMNc3jAyd1fKPqpwUCE0GnzmrgHEgloQcQMK%2FrpwEnWnz4Rv%2FYtVC3ummoaXRIP%2B2qwh8%2F9S30EYXIzbfkvMOGqkNqAuUzBRMUUAMB0xRTVjWPz62On0QeU5mq0zfx3kvg26b6BDJVYMsiIl6IQ%2By4WitGLzo%2B%2Byc6aXzSaxtwncyJ8EaVMiicZdqdG%2FF5DKb4OZgu%2FEpYy%2B4YS8g8V06N1G4HIXDcBNpvalU%2BNCLVWHS0eu4m3o52QkqfOoMPC%2F178GOqUB%2F45Ic8%2BRd3Wo%2Bt4xGwNuE%2F02HLlE5oTH4kj6%2Bv42eW3LISriljNxJUkuremWv%2FU%2BaPdEbUgeIBnRbhaxTV1%2FuMdueC4tTIntAF846auid4KJrlizxNUR3c3T7gNK6NQ5YLYDRLpfFsNZR32PFoUgW%2FukE80oPwG%2FNwGB89bExUBVU7wia1JHeKalH8MwNPQVVX4Bblj2jbma86kI1PTSibd76RLO&X-Amz-Signature=37685c7e510b618fad47b0594a666b9a8f79aeeceb16541149e018fb81b5dc57&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M2DIF6X%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T032601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIBNaBKZJLfIuzgCt%2Fr%2FaXEjlowvJMLjuRt3uWO0F4pwkAiEAhki%2F4K70tI0mP75Ida0p%2FaIC9HgnEZwjpFKXqA%2BqbrsqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB9bKsVizAlRFmxVvyrcA9qdrqjvwCoC5tIC1%2FcSKDfwbSXE8NttdM%2FSenAjOAlwPvLXHa%2FZSizoJ3txRjKbcEArw4SLMeNjm8uYJ4n1fN2jIqNPxzAIBx%2FOdn31WAbaXnxZzOM1zMwYpCQNX4NNxNqFl6aJVCqoPkCDV0duaO%2FJQsl%2BnXrmAnTbcv694N2WJKg%2BCORMScII0%2BhXC2zgtJAhEwS17bthrd%2BlA%2BSnJoguJHy2t8I6ADsL4DpB2yWigTf3Zz3nVqCL1NfKfyMF4efZWYTXECAolG1gpGKrdr29NK%2FGKvpNjY1GS6z97Yl9U4T9Sf4s2RZ6tlbXZz8Dbl9XRFL8%2FfDCDZCpByuYTTv5EsVuucaLK%2FjRxRPfHrzTonyYQTU%2BavNpXgeXXxyqAMNc3jAyd1fKPqpwUCE0GnzmrgHEgloQcQMK%2FrpwEnWnz4Rv%2FYtVC3ummoaXRIP%2B2qwh8%2F9S30EYXIzbfkvMOGqkNqAuUzBRMUUAMB0xRTVjWPz62On0QeU5mq0zfx3kvg26b6BDJVYMsiIl6IQ%2By4WitGLzo%2B%2Byc6aXzSaxtwncyJ8EaVMiicZdqdG%2FF5DKb4OZgu%2FEpYy%2B4YS8g8V06N1G4HIXDcBNpvalU%2BNCLVWHS0eu4m3o52QkqfOoMPC%2F178GOqUB%2F45Ic8%2BRd3Wo%2Bt4xGwNuE%2F02HLlE5oTH4kj6%2Bv42eW3LISriljNxJUkuremWv%2FU%2BaPdEbUgeIBnRbhaxTV1%2FuMdueC4tTIntAF846auid4KJrlizxNUR3c3T7gNK6NQ5YLYDRLpfFsNZR32PFoUgW%2FukE80oPwG%2FNwGB89bExUBVU7wia1JHeKalH8MwNPQVVX4Bblj2jbma86kI1PTSibd76RLO&X-Amz-Signature=bc4b88e20351714c5f3295c9c2ba240a5ca991b10b7db4b560c503d702efcd55&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M2DIF6X%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T032601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIBNaBKZJLfIuzgCt%2Fr%2FaXEjlowvJMLjuRt3uWO0F4pwkAiEAhki%2F4K70tI0mP75Ida0p%2FaIC9HgnEZwjpFKXqA%2BqbrsqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB9bKsVizAlRFmxVvyrcA9qdrqjvwCoC5tIC1%2FcSKDfwbSXE8NttdM%2FSenAjOAlwPvLXHa%2FZSizoJ3txRjKbcEArw4SLMeNjm8uYJ4n1fN2jIqNPxzAIBx%2FOdn31WAbaXnxZzOM1zMwYpCQNX4NNxNqFl6aJVCqoPkCDV0duaO%2FJQsl%2BnXrmAnTbcv694N2WJKg%2BCORMScII0%2BhXC2zgtJAhEwS17bthrd%2BlA%2BSnJoguJHy2t8I6ADsL4DpB2yWigTf3Zz3nVqCL1NfKfyMF4efZWYTXECAolG1gpGKrdr29NK%2FGKvpNjY1GS6z97Yl9U4T9Sf4s2RZ6tlbXZz8Dbl9XRFL8%2FfDCDZCpByuYTTv5EsVuucaLK%2FjRxRPfHrzTonyYQTU%2BavNpXgeXXxyqAMNc3jAyd1fKPqpwUCE0GnzmrgHEgloQcQMK%2FrpwEnWnz4Rv%2FYtVC3ummoaXRIP%2B2qwh8%2F9S30EYXIzbfkvMOGqkNqAuUzBRMUUAMB0xRTVjWPz62On0QeU5mq0zfx3kvg26b6BDJVYMsiIl6IQ%2By4WitGLzo%2B%2Byc6aXzSaxtwncyJ8EaVMiicZdqdG%2FF5DKb4OZgu%2FEpYy%2B4YS8g8V06N1G4HIXDcBNpvalU%2BNCLVWHS0eu4m3o52QkqfOoMPC%2F178GOqUB%2F45Ic8%2BRd3Wo%2Bt4xGwNuE%2F02HLlE5oTH4kj6%2Bv42eW3LISriljNxJUkuremWv%2FU%2BaPdEbUgeIBnRbhaxTV1%2FuMdueC4tTIntAF846auid4KJrlizxNUR3c3T7gNK6NQ5YLYDRLpfFsNZR32PFoUgW%2FukE80oPwG%2FNwGB89bExUBVU7wia1JHeKalH8MwNPQVVX4Bblj2jbma86kI1PTSibd76RLO&X-Amz-Signature=55d9b7c222a584218b8dc653b0eb440c6fbe19ae9cade01b556d7bb4a30e68b2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
