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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I6LEDEK%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T090832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCR6CcxbP%2FmcJo4dpelyAXrMp%2B2oaefLCblxqeqbvbA%2BwIhAN7bsmENx5lckWO4GzU6rNYyJUd6qU2Gobr7Frf7RkloKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxK2Yk2dHLIgl2U9SQq3ANdMEvF1sYcJ2gaiS8Ao5O7uQNsEyVEuWsYGvTPANlT3maoN9%2F2WOpiXyCltHjx7FBMhABh7CzBkJ7FfLZfZhs%2FxZPicrxGXWVcjCoZN0e5WQ%2BF7cbE%2FtWEX5x43XWGcbmdtow%2FeP9BGVJgZJtqMC%2FX%2Fswl50bq7hMZTNGk0psM3aXoLXW5DgHkSrgXxrADhdbcrf1A%2F%2BxAqwsN%2BRlgH2R1S4R08qLWAyIAJEWvGrs3wtoO%2F4ELgXAcs8xdMLH0hD4sKnGB%2B9kdxRxLu3UU5Q20iyimFQYfLAv8DIZy623UWLMhO8frceMRlfyvp2d8xGBMrDPUnnv85YcfyUpweZY18S6wtNJEm572aCHhUSPLj0afHUwslsMtloE8iODZwGeHXOEsN%2BninEC7i1wn7u%2BMO99qLo4dRB3ukcXEEFR%2B%2BeQGUoeoduzuuY%2FlMuU6RGd11F6wOdly6gM5qKMerOnKYmhPYKJcMVxqyPNhHI4XpE6aoJyW7Xj50PH22nP6MZ8syT2OpSqULU9HRRlZw51eKm33QIE56VpJesynBNjq98d%2FN%2BXtAVED1m6APzdP5hT6BYxF4l%2FtaTVCIht8aw92oHcOAWPCZm08TiB3V%2FVZoUxOBK8tDWORYT1o8zDlo8q%2BBjqkAT7yVMs9pgcudvUeh9l8NEP4kd9ow7PMtFtnfg4%2BbByULOYpL4f4vEwKHzv8OiFGkww7IeIV%2FJn9LtDLcC1NWbSaRoHHbMeNrIAUPEmYUX268Ij%2Fo4FAgF1iXaQ3A002HNZvK%2FflLvuOoeXaJzedsuI6sqRxmtvphGmllXJrDex%2Fsmd1Ajb1HekPArwWkRE9w6KoAxCQcxBSGuqD8T2pRVz3WZRb&X-Amz-Signature=5179455c8c12d9a8c8e71c2602bc106391d199307cf421df81054a1bacaad612&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I6LEDEK%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T090832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCR6CcxbP%2FmcJo4dpelyAXrMp%2B2oaefLCblxqeqbvbA%2BwIhAN7bsmENx5lckWO4GzU6rNYyJUd6qU2Gobr7Frf7RkloKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxK2Yk2dHLIgl2U9SQq3ANdMEvF1sYcJ2gaiS8Ao5O7uQNsEyVEuWsYGvTPANlT3maoN9%2F2WOpiXyCltHjx7FBMhABh7CzBkJ7FfLZfZhs%2FxZPicrxGXWVcjCoZN0e5WQ%2BF7cbE%2FtWEX5x43XWGcbmdtow%2FeP9BGVJgZJtqMC%2FX%2Fswl50bq7hMZTNGk0psM3aXoLXW5DgHkSrgXxrADhdbcrf1A%2F%2BxAqwsN%2BRlgH2R1S4R08qLWAyIAJEWvGrs3wtoO%2F4ELgXAcs8xdMLH0hD4sKnGB%2B9kdxRxLu3UU5Q20iyimFQYfLAv8DIZy623UWLMhO8frceMRlfyvp2d8xGBMrDPUnnv85YcfyUpweZY18S6wtNJEm572aCHhUSPLj0afHUwslsMtloE8iODZwGeHXOEsN%2BninEC7i1wn7u%2BMO99qLo4dRB3ukcXEEFR%2B%2BeQGUoeoduzuuY%2FlMuU6RGd11F6wOdly6gM5qKMerOnKYmhPYKJcMVxqyPNhHI4XpE6aoJyW7Xj50PH22nP6MZ8syT2OpSqULU9HRRlZw51eKm33QIE56VpJesynBNjq98d%2FN%2BXtAVED1m6APzdP5hT6BYxF4l%2FtaTVCIht8aw92oHcOAWPCZm08TiB3V%2FVZoUxOBK8tDWORYT1o8zDlo8q%2BBjqkAT7yVMs9pgcudvUeh9l8NEP4kd9ow7PMtFtnfg4%2BbByULOYpL4f4vEwKHzv8OiFGkww7IeIV%2FJn9LtDLcC1NWbSaRoHHbMeNrIAUPEmYUX268Ij%2Fo4FAgF1iXaQ3A002HNZvK%2FflLvuOoeXaJzedsuI6sqRxmtvphGmllXJrDex%2Fsmd1Ajb1HekPArwWkRE9w6KoAxCQcxBSGuqD8T2pRVz3WZRb&X-Amz-Signature=f2cc06cbf5a403a3dde893f7dcbb9a6c6e932da514507b35702099879cbf4944&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I6LEDEK%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T090832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCR6CcxbP%2FmcJo4dpelyAXrMp%2B2oaefLCblxqeqbvbA%2BwIhAN7bsmENx5lckWO4GzU6rNYyJUd6qU2Gobr7Frf7RkloKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxK2Yk2dHLIgl2U9SQq3ANdMEvF1sYcJ2gaiS8Ao5O7uQNsEyVEuWsYGvTPANlT3maoN9%2F2WOpiXyCltHjx7FBMhABh7CzBkJ7FfLZfZhs%2FxZPicrxGXWVcjCoZN0e5WQ%2BF7cbE%2FtWEX5x43XWGcbmdtow%2FeP9BGVJgZJtqMC%2FX%2Fswl50bq7hMZTNGk0psM3aXoLXW5DgHkSrgXxrADhdbcrf1A%2F%2BxAqwsN%2BRlgH2R1S4R08qLWAyIAJEWvGrs3wtoO%2F4ELgXAcs8xdMLH0hD4sKnGB%2B9kdxRxLu3UU5Q20iyimFQYfLAv8DIZy623UWLMhO8frceMRlfyvp2d8xGBMrDPUnnv85YcfyUpweZY18S6wtNJEm572aCHhUSPLj0afHUwslsMtloE8iODZwGeHXOEsN%2BninEC7i1wn7u%2BMO99qLo4dRB3ukcXEEFR%2B%2BeQGUoeoduzuuY%2FlMuU6RGd11F6wOdly6gM5qKMerOnKYmhPYKJcMVxqyPNhHI4XpE6aoJyW7Xj50PH22nP6MZ8syT2OpSqULU9HRRlZw51eKm33QIE56VpJesynBNjq98d%2FN%2BXtAVED1m6APzdP5hT6BYxF4l%2FtaTVCIht8aw92oHcOAWPCZm08TiB3V%2FVZoUxOBK8tDWORYT1o8zDlo8q%2BBjqkAT7yVMs9pgcudvUeh9l8NEP4kd9ow7PMtFtnfg4%2BbByULOYpL4f4vEwKHzv8OiFGkww7IeIV%2FJn9LtDLcC1NWbSaRoHHbMeNrIAUPEmYUX268Ij%2Fo4FAgF1iXaQ3A002HNZvK%2FflLvuOoeXaJzedsuI6sqRxmtvphGmllXJrDex%2Fsmd1Ajb1HekPArwWkRE9w6KoAxCQcxBSGuqD8T2pRVz3WZRb&X-Amz-Signature=3b3d435026a9f0de863b75e24db37563763709aa93d3973df3a3ae7a276f5641&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
