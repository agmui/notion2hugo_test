---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RUKN7CD%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIBCiUPTgEuNynpmBf2KRlYZUljxUtZI7O7GzQyKjw4lSAiEAgGAairKx96sdhkod%2FAXvZofasALvK%2BW21siigJ9tOz0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDKPLszp1n5L5%2FyPSlSrcA6FpU5yKTywtQACYORwNOQDK2rBMQuFKiisxmzjBH%2Bo5M2TXV19e6RUmre5f1S3B%2BwDmPAg7yk8Sqf5ARMUJ7pp6pNwcT%2FnErpZYAlKCvJwvuhTD2vfPwwWk5mkb9A%2FK%2Bg4SAuEqVgli06WorG63e3FynbAIzeD8R2025MHTuvXvIdIeKFhRxQIqXxGSgYE2YiqbstrGuj9D7GVMskyISF6GodozVHx6a0NOam4WCCWO%2BB35X2D8gf9yWvMPjv2mnPBNRdjkoAgKTCaCP6p%2BgBRQMucisJ2KicgE%2BZdD9FzXHZmvqD9g81c6PJk2lgUs1iQZsUEG4cFcCBKqG3GPfCPUzcI3NzdtIUKlCnNqZyOKkTLovRqiwLdiwd3Ixk0NvYZCgxeqHl7UUCzWcZKrM486LPaLf1Rb2JMYyN%2BPwRe0WFTaJo%2FlMzfaRheGqC%2FzALDj7w%2BCZXO9EjJz76hzOK3uFmfE1P02rgLjG0db%2F73udok38V97gVti6lf%2FlvG%2FiQtjbPq2bNCQcF17Pt2zg9aP3MgidwKT44z3nN6tOx6s0qtQcG0vKJkrY6u5iPq%2FrM0qKsNc3%2FBoQCM6c2kfAUFn3rej6HwkL%2BkeqSx%2Fyj2oxVIVu4lkNqcK3R33MJj6ksQGOqUBFICOir7ugw8Rm66mwH6w2BBrxJx59wPMteKrDfFttPFWW8%2FeEljmFQ4Cy1ydnaQb7Eel%2FhM7B0oeNWG5p3d5QMndbkTcVH2AZd37RpHJfr3Ihv0Z1ebseUWrdxtFpgQ8LFgwKNCMsLiSJ9FcJ1B8iJmAlKl%2BYO%2FraKgCTNslq%2FTtzEEp21W0Or7ScbzNKKIyWlfxMlcMn%2F3%2BlPrylecVxY0mgqVu&X-Amz-Signature=57633cc5611d1fd3be15fca7224a732a502ec9e4e416d1d6caffdeeba1a2ccba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RUKN7CD%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIBCiUPTgEuNynpmBf2KRlYZUljxUtZI7O7GzQyKjw4lSAiEAgGAairKx96sdhkod%2FAXvZofasALvK%2BW21siigJ9tOz0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDKPLszp1n5L5%2FyPSlSrcA6FpU5yKTywtQACYORwNOQDK2rBMQuFKiisxmzjBH%2Bo5M2TXV19e6RUmre5f1S3B%2BwDmPAg7yk8Sqf5ARMUJ7pp6pNwcT%2FnErpZYAlKCvJwvuhTD2vfPwwWk5mkb9A%2FK%2Bg4SAuEqVgli06WorG63e3FynbAIzeD8R2025MHTuvXvIdIeKFhRxQIqXxGSgYE2YiqbstrGuj9D7GVMskyISF6GodozVHx6a0NOam4WCCWO%2BB35X2D8gf9yWvMPjv2mnPBNRdjkoAgKTCaCP6p%2BgBRQMucisJ2KicgE%2BZdD9FzXHZmvqD9g81c6PJk2lgUs1iQZsUEG4cFcCBKqG3GPfCPUzcI3NzdtIUKlCnNqZyOKkTLovRqiwLdiwd3Ixk0NvYZCgxeqHl7UUCzWcZKrM486LPaLf1Rb2JMYyN%2BPwRe0WFTaJo%2FlMzfaRheGqC%2FzALDj7w%2BCZXO9EjJz76hzOK3uFmfE1P02rgLjG0db%2F73udok38V97gVti6lf%2FlvG%2FiQtjbPq2bNCQcF17Pt2zg9aP3MgidwKT44z3nN6tOx6s0qtQcG0vKJkrY6u5iPq%2FrM0qKsNc3%2FBoQCM6c2kfAUFn3rej6HwkL%2BkeqSx%2Fyj2oxVIVu4lkNqcK3R33MJj6ksQGOqUBFICOir7ugw8Rm66mwH6w2BBrxJx59wPMteKrDfFttPFWW8%2FeEljmFQ4Cy1ydnaQb7Eel%2FhM7B0oeNWG5p3d5QMndbkTcVH2AZd37RpHJfr3Ihv0Z1ebseUWrdxtFpgQ8LFgwKNCMsLiSJ9FcJ1B8iJmAlKl%2BYO%2FraKgCTNslq%2FTtzEEp21W0Or7ScbzNKKIyWlfxMlcMn%2F3%2BlPrylecVxY0mgqVu&X-Amz-Signature=c18b34c4e63b748af2ea7a08659c7c781f5b1e07540c0fb76354b22f0713dc75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RUKN7CD%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIBCiUPTgEuNynpmBf2KRlYZUljxUtZI7O7GzQyKjw4lSAiEAgGAairKx96sdhkod%2FAXvZofasALvK%2BW21siigJ9tOz0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDKPLszp1n5L5%2FyPSlSrcA6FpU5yKTywtQACYORwNOQDK2rBMQuFKiisxmzjBH%2Bo5M2TXV19e6RUmre5f1S3B%2BwDmPAg7yk8Sqf5ARMUJ7pp6pNwcT%2FnErpZYAlKCvJwvuhTD2vfPwwWk5mkb9A%2FK%2Bg4SAuEqVgli06WorG63e3FynbAIzeD8R2025MHTuvXvIdIeKFhRxQIqXxGSgYE2YiqbstrGuj9D7GVMskyISF6GodozVHx6a0NOam4WCCWO%2BB35X2D8gf9yWvMPjv2mnPBNRdjkoAgKTCaCP6p%2BgBRQMucisJ2KicgE%2BZdD9FzXHZmvqD9g81c6PJk2lgUs1iQZsUEG4cFcCBKqG3GPfCPUzcI3NzdtIUKlCnNqZyOKkTLovRqiwLdiwd3Ixk0NvYZCgxeqHl7UUCzWcZKrM486LPaLf1Rb2JMYyN%2BPwRe0WFTaJo%2FlMzfaRheGqC%2FzALDj7w%2BCZXO9EjJz76hzOK3uFmfE1P02rgLjG0db%2F73udok38V97gVti6lf%2FlvG%2FiQtjbPq2bNCQcF17Pt2zg9aP3MgidwKT44z3nN6tOx6s0qtQcG0vKJkrY6u5iPq%2FrM0qKsNc3%2FBoQCM6c2kfAUFn3rej6HwkL%2BkeqSx%2Fyj2oxVIVu4lkNqcK3R33MJj6ksQGOqUBFICOir7ugw8Rm66mwH6w2BBrxJx59wPMteKrDfFttPFWW8%2FeEljmFQ4Cy1ydnaQb7Eel%2FhM7B0oeNWG5p3d5QMndbkTcVH2AZd37RpHJfr3Ihv0Z1ebseUWrdxtFpgQ8LFgwKNCMsLiSJ9FcJ1B8iJmAlKl%2BYO%2FraKgCTNslq%2FTtzEEp21W0Or7ScbzNKKIyWlfxMlcMn%2F3%2BlPrylecVxY0mgqVu&X-Amz-Signature=e0ef9c411d7f09a249023036785237008fbb8fa98794657edbcd0ac59d86769a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
