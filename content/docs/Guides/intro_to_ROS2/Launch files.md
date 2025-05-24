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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OLBR5WC%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T033109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIG%2FYxPYquzrPiZ370g2AB777Pr%2BXKEHBMn7F7S3bfM9iAiEAhI68xTiZWTmbMAs7FnK2qCJYhYdY8uVbs2z1LnrsK7UqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIwbDN8AsblbLfCIbyrcA1FSsK7feVrmdO7HrwQY1hXH2Qa%2FlzK4wqtxoA8RG0BuQLl8tBAnHXmZJCQJgsPtLwBk27VTwUrry%2FfkqPGSzp8swUAay3bStx4H5xCaIP4Co9mAEIJqhOs74L02igKStDm79ifH6KA%2FwzZvVgQxkQ1DqRyo4icXKLq65ctDfF5OXkP0rzirGOKjl6a4kxD9NiFjNlR25VuH6ra96UjMGejXDztO89bF6LaTAmHIhx8VOMMr6HAsndJV7GrOHqQT76dSzEy0Zzf0t6wCBbnHBPy0z9q0CcE7L5VBRUAcnAKtqBqOe2XUmk9BwX5CcskoromNDV1fKwfFGbr6LYA8o%2F7RImoAxOuCeIiTj77hf5MHtF8QoSsSfrGqFj%2FlYJ1bj9AL%2FjLbJn7HaO9n96bUuyBgyt%2F7qzA3FVdmo245eG7LOAUsnkdghVDFY3K3Z4tAVpl1dLv5UjU%2Bn8f%2BBxY%2FAyFCa6eSNvSS%2FhtzrJqZzWdnf%2BPyotq7en7vkIwBg%2FZaUMq4v34GXYSM0j%2BGetIJZ%2BqbLRoNLBgSl%2FeqTOPA6WRDXYv7gTSpH%2B1grWyky42zrz2BeKIVNNYfKXDKqd%2Fe44M4qdjhDoBhE2rqIF5z%2Bd9j5wAooCUNNu8cUPC%2FMNv4xMEGOqUBuF49DhLjRk%2FzxdClI7o80leOI%2B%2Bg5JxdU9jJZ3Qi2reUcdkovmEWXDCEPIiYg3%2Bz7bR2dedpsECQYx%2FGmxVmZ4iBoBK6iGo2%2FIZwouLxecTxr%2B1MMIGEghgK9QJ%2FSfk28fnl8cg4MMIltLeczw7wASI0PxaCJJjlCCmcAi4Hw8X%2FvEcP9UWRlndf2c7uNZfdW9tx2U9uSjrMH1NU4ANEgwGvq86U&X-Amz-Signature=4fcf6ff6f259f1c9fe4a2752bacf0b4c0653486558afd1f6d5396cfed5de4d91&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OLBR5WC%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T033109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIG%2FYxPYquzrPiZ370g2AB777Pr%2BXKEHBMn7F7S3bfM9iAiEAhI68xTiZWTmbMAs7FnK2qCJYhYdY8uVbs2z1LnrsK7UqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIwbDN8AsblbLfCIbyrcA1FSsK7feVrmdO7HrwQY1hXH2Qa%2FlzK4wqtxoA8RG0BuQLl8tBAnHXmZJCQJgsPtLwBk27VTwUrry%2FfkqPGSzp8swUAay3bStx4H5xCaIP4Co9mAEIJqhOs74L02igKStDm79ifH6KA%2FwzZvVgQxkQ1DqRyo4icXKLq65ctDfF5OXkP0rzirGOKjl6a4kxD9NiFjNlR25VuH6ra96UjMGejXDztO89bF6LaTAmHIhx8VOMMr6HAsndJV7GrOHqQT76dSzEy0Zzf0t6wCBbnHBPy0z9q0CcE7L5VBRUAcnAKtqBqOe2XUmk9BwX5CcskoromNDV1fKwfFGbr6LYA8o%2F7RImoAxOuCeIiTj77hf5MHtF8QoSsSfrGqFj%2FlYJ1bj9AL%2FjLbJn7HaO9n96bUuyBgyt%2F7qzA3FVdmo245eG7LOAUsnkdghVDFY3K3Z4tAVpl1dLv5UjU%2Bn8f%2BBxY%2FAyFCa6eSNvSS%2FhtzrJqZzWdnf%2BPyotq7en7vkIwBg%2FZaUMq4v34GXYSM0j%2BGetIJZ%2BqbLRoNLBgSl%2FeqTOPA6WRDXYv7gTSpH%2B1grWyky42zrz2BeKIVNNYfKXDKqd%2Fe44M4qdjhDoBhE2rqIF5z%2Bd9j5wAooCUNNu8cUPC%2FMNv4xMEGOqUBuF49DhLjRk%2FzxdClI7o80leOI%2B%2Bg5JxdU9jJZ3Qi2reUcdkovmEWXDCEPIiYg3%2Bz7bR2dedpsECQYx%2FGmxVmZ4iBoBK6iGo2%2FIZwouLxecTxr%2B1MMIGEghgK9QJ%2FSfk28fnl8cg4MMIltLeczw7wASI0PxaCJJjlCCmcAi4Hw8X%2FvEcP9UWRlndf2c7uNZfdW9tx2U9uSjrMH1NU4ANEgwGvq86U&X-Amz-Signature=bd82f504f6c16e41c0e5aa58efee53f0151aa3f8f2adb2c4d75dfc7717fc635e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OLBR5WC%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T033109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIG%2FYxPYquzrPiZ370g2AB777Pr%2BXKEHBMn7F7S3bfM9iAiEAhI68xTiZWTmbMAs7FnK2qCJYhYdY8uVbs2z1LnrsK7UqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIwbDN8AsblbLfCIbyrcA1FSsK7feVrmdO7HrwQY1hXH2Qa%2FlzK4wqtxoA8RG0BuQLl8tBAnHXmZJCQJgsPtLwBk27VTwUrry%2FfkqPGSzp8swUAay3bStx4H5xCaIP4Co9mAEIJqhOs74L02igKStDm79ifH6KA%2FwzZvVgQxkQ1DqRyo4icXKLq65ctDfF5OXkP0rzirGOKjl6a4kxD9NiFjNlR25VuH6ra96UjMGejXDztO89bF6LaTAmHIhx8VOMMr6HAsndJV7GrOHqQT76dSzEy0Zzf0t6wCBbnHBPy0z9q0CcE7L5VBRUAcnAKtqBqOe2XUmk9BwX5CcskoromNDV1fKwfFGbr6LYA8o%2F7RImoAxOuCeIiTj77hf5MHtF8QoSsSfrGqFj%2FlYJ1bj9AL%2FjLbJn7HaO9n96bUuyBgyt%2F7qzA3FVdmo245eG7LOAUsnkdghVDFY3K3Z4tAVpl1dLv5UjU%2Bn8f%2BBxY%2FAyFCa6eSNvSS%2FhtzrJqZzWdnf%2BPyotq7en7vkIwBg%2FZaUMq4v34GXYSM0j%2BGetIJZ%2BqbLRoNLBgSl%2FeqTOPA6WRDXYv7gTSpH%2B1grWyky42zrz2BeKIVNNYfKXDKqd%2Fe44M4qdjhDoBhE2rqIF5z%2Bd9j5wAooCUNNu8cUPC%2FMNv4xMEGOqUBuF49DhLjRk%2FzxdClI7o80leOI%2B%2Bg5JxdU9jJZ3Qi2reUcdkovmEWXDCEPIiYg3%2Bz7bR2dedpsECQYx%2FGmxVmZ4iBoBK6iGo2%2FIZwouLxecTxr%2B1MMIGEghgK9QJ%2FSfk28fnl8cg4MMIltLeczw7wASI0PxaCJJjlCCmcAi4Hw8X%2FvEcP9UWRlndf2c7uNZfdW9tx2U9uSjrMH1NU4ANEgwGvq86U&X-Amz-Signature=8decd5b746efd06f4f2ab0dc288da4556cc94dbb4d94be7491fdbaee0829f91d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
