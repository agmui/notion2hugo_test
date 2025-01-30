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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KCYMCYI%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T230124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGF4x1e9EDknjr%2BAA%2FlJSx45BnVYfXIvmbpSRUXzV6WGAiBouAxGPy44UboawmqTYP4xs3THFGxfYmWRL%2FzKfPEVKCqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHPZ2cxzoHike1suLKtwDlWUg79PvjKuPauGPL6JS2OBfEtZsQe8v5Zdx8AJpDGm%2BwtLOo0JhwAr6pafHSJsMF2cQYMS%2FoeSmdkEWza6DMETscDlbY0xf4ozwTubG4QLL2acew3j0gVsUGFqvKb4HL3nDM15rwWN%2BBc%2Bjv6OkoQetdSud7vVPf21A6%2BLE5nOWYkksqbphYI0XLdvjt1XKLRbjc8XUb448%2F383BV2mzZyLSRDZ5s0AK6Zf865o8OUoM1cNmfYpRccT4AQbF7UpiW2E2pCiDezyKc2S9mpdI3OG%2B91xkaTNkLqSxBbU3INy2pIYM8fges7LLsIun1IOxyDeZSzv52injgxT3EBbylWcrJohUqOdciW7KEKQKYrD3ZgyMMyvM2hTip54bHjTgOyn0SBJZ9jPAOHAi3CeC8yyyuH4UKxVwUEconDE0NewCcN2klDk%2FnC94D2S%2FPCutYudfTl1R99OJYuuAjbfdhYY6YAKzK5SnE9jaZjYwDCzO8HP%2F2Vlt4nC5pnhJGoutI9LhowjzYcfwlMwo50Ge34LMOqn0DJSzEvWSHUm4sZc4DBttlUUacJcJxS%2BOkmeK9pGEZe0zbGwnshLGKVUC6G1J4MGLduN4mTXoj3NXWB3hRRnrZ2c%2BwrauAQwiP7vvAY6pgGDFwfANCnEFGnFSqWKqy1CNgD2r6LOINgcynxQ9UEF0BohF9JYh7lq4C%2F4uPBR5yURqn%2FlcU17w8KgaRBF5NpRTWhbVGtZZfrIVMx46rAOReiVnWTnnIlQIP%2FObtDmmoMlHBLBA5OqMCmUTL%2FimT%2FuFjpSsgDvahCQok7vGBYxIaYjxJ1p73t3gflx4Dg%2FD6t9lKNf3NFC9CBXhlX3%2FsTbPf%2B91C7i&X-Amz-Signature=8fcb7c1f6c3f791b25bf731f339b8ec3171aa319b945b6676b9fb10b65b7f05a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KCYMCYI%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T230124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGF4x1e9EDknjr%2BAA%2FlJSx45BnVYfXIvmbpSRUXzV6WGAiBouAxGPy44UboawmqTYP4xs3THFGxfYmWRL%2FzKfPEVKCqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHPZ2cxzoHike1suLKtwDlWUg79PvjKuPauGPL6JS2OBfEtZsQe8v5Zdx8AJpDGm%2BwtLOo0JhwAr6pafHSJsMF2cQYMS%2FoeSmdkEWza6DMETscDlbY0xf4ozwTubG4QLL2acew3j0gVsUGFqvKb4HL3nDM15rwWN%2BBc%2Bjv6OkoQetdSud7vVPf21A6%2BLE5nOWYkksqbphYI0XLdvjt1XKLRbjc8XUb448%2F383BV2mzZyLSRDZ5s0AK6Zf865o8OUoM1cNmfYpRccT4AQbF7UpiW2E2pCiDezyKc2S9mpdI3OG%2B91xkaTNkLqSxBbU3INy2pIYM8fges7LLsIun1IOxyDeZSzv52injgxT3EBbylWcrJohUqOdciW7KEKQKYrD3ZgyMMyvM2hTip54bHjTgOyn0SBJZ9jPAOHAi3CeC8yyyuH4UKxVwUEconDE0NewCcN2klDk%2FnC94D2S%2FPCutYudfTl1R99OJYuuAjbfdhYY6YAKzK5SnE9jaZjYwDCzO8HP%2F2Vlt4nC5pnhJGoutI9LhowjzYcfwlMwo50Ge34LMOqn0DJSzEvWSHUm4sZc4DBttlUUacJcJxS%2BOkmeK9pGEZe0zbGwnshLGKVUC6G1J4MGLduN4mTXoj3NXWB3hRRnrZ2c%2BwrauAQwiP7vvAY6pgGDFwfANCnEFGnFSqWKqy1CNgD2r6LOINgcynxQ9UEF0BohF9JYh7lq4C%2F4uPBR5yURqn%2FlcU17w8KgaRBF5NpRTWhbVGtZZfrIVMx46rAOReiVnWTnnIlQIP%2FObtDmmoMlHBLBA5OqMCmUTL%2FimT%2FuFjpSsgDvahCQok7vGBYxIaYjxJ1p73t3gflx4Dg%2FD6t9lKNf3NFC9CBXhlX3%2FsTbPf%2B91C7i&X-Amz-Signature=951ab73d513dd4e60b266238cdaf1cf97ca878171a69f7022e82ea1bd2af3f10&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KCYMCYI%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T230124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGF4x1e9EDknjr%2BAA%2FlJSx45BnVYfXIvmbpSRUXzV6WGAiBouAxGPy44UboawmqTYP4xs3THFGxfYmWRL%2FzKfPEVKCqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHPZ2cxzoHike1suLKtwDlWUg79PvjKuPauGPL6JS2OBfEtZsQe8v5Zdx8AJpDGm%2BwtLOo0JhwAr6pafHSJsMF2cQYMS%2FoeSmdkEWza6DMETscDlbY0xf4ozwTubG4QLL2acew3j0gVsUGFqvKb4HL3nDM15rwWN%2BBc%2Bjv6OkoQetdSud7vVPf21A6%2BLE5nOWYkksqbphYI0XLdvjt1XKLRbjc8XUb448%2F383BV2mzZyLSRDZ5s0AK6Zf865o8OUoM1cNmfYpRccT4AQbF7UpiW2E2pCiDezyKc2S9mpdI3OG%2B91xkaTNkLqSxBbU3INy2pIYM8fges7LLsIun1IOxyDeZSzv52injgxT3EBbylWcrJohUqOdciW7KEKQKYrD3ZgyMMyvM2hTip54bHjTgOyn0SBJZ9jPAOHAi3CeC8yyyuH4UKxVwUEconDE0NewCcN2klDk%2FnC94D2S%2FPCutYudfTl1R99OJYuuAjbfdhYY6YAKzK5SnE9jaZjYwDCzO8HP%2F2Vlt4nC5pnhJGoutI9LhowjzYcfwlMwo50Ge34LMOqn0DJSzEvWSHUm4sZc4DBttlUUacJcJxS%2BOkmeK9pGEZe0zbGwnshLGKVUC6G1J4MGLduN4mTXoj3NXWB3hRRnrZ2c%2BwrauAQwiP7vvAY6pgGDFwfANCnEFGnFSqWKqy1CNgD2r6LOINgcynxQ9UEF0BohF9JYh7lq4C%2F4uPBR5yURqn%2FlcU17w8KgaRBF5NpRTWhbVGtZZfrIVMx46rAOReiVnWTnnIlQIP%2FObtDmmoMlHBLBA5OqMCmUTL%2FimT%2FuFjpSsgDvahCQok7vGBYxIaYjxJ1p73t3gflx4Dg%2FD6t9lKNf3NFC9CBXhlX3%2FsTbPf%2B91C7i&X-Amz-Signature=7f0e702cb97f527d6eb973e0b5f6cdefa896d5eac925b9cb7d6a443c20d95386&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
