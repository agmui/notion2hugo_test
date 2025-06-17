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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OOOWDUJ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T024017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICy%2BGA9AGaRCJhqeafNELiwFMvRlRok%2B1oQfKihMUuBcAiEA9iOdGQcTn4ykTb66igfm1W0gBEdgFMIW0Tf%2FJ4xdf8Iq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDL0WhZ4qe8dQ%2Bi%2Fe2ircA9XwZqsGN1Y8pYpjd5MN1cuxPAoYQeqypgCN%2BkNER3yvj9P2pTHE71Jso001gvnhZhztkkKUFY0ICwoVKsmcRZoORVpalebrN4LfcUnSHa5s%2FwpFF5b6dZitPyTibJbtVbdbi8o5FAiuArGt5I160K0giP63G8dCWh%2F5b2zk2gQB%2F83Q8TSIGMOF23012tEkGwNo0I0RcyyN4WXSo434YmmNlXYYbzHMcnsfdZKzE22Pqj29M2Fbh6W1CJKCn7gjW1sSGYLrpLgYt%2BZYR4c%2FoZJeO1g95CZZCkfc88nBMr3OK%2ByYnvDBL0%2FwpDlSD5AMdIWF0Cub9cVaJ2fQH6YHlpktJYsa%2F1BPzD2o42GpzzPw3MK%2FnZH7OjN%2FOzS1L0O%2BwUaPLG3gKWG4ZqdSuqE%2BTP8i0zMU6YaJOu41W4QHDawU2t2oinrffk7q6ZEyyHePoaQElCEDXCIQTIkZzPOJpWPXY48J2JgwGRwL2joQkrhVN77tkIFlC9AT24eEVhR7xxqIT7My7KkZ13rKUE7bGnAuPdzxMLozpXZmvYEyIAEPCWzOYB2F8uez2oVCIbH6KeOw1tfuxQtAmnvy5ML%2FK1Qga1mcGHnLy7aPjD%2FmJuUrmzGyt8dK%2FfMAr6ZcMPWLw8IGOqUBvbBqQbqZLFbuPNyU%2FaTp4HI0LoIBFB2g2U7EBJ1SIDF%2BlwHBGWxNevAbW%2FQ3AmqNeVqHRrzM9GAYe2FKm2nkIOV%2B4Sk7ZKYVGs4iU04Et0AUjQD9lLmXau4e2VU405pNzuf6BpLl6LMcG%2Bf%2F%2Bw28SWHfP%2BxknM6ArzrHizPxIUK4SsaaTn5MH3%2B3LIiNr9rFWUZHUQZe7EzjaRlw7kD6F3Qfbx%2Bg&X-Amz-Signature=5b86dfc752f5b174bd34d1a4276ca26981e17e576857c1b26d27dc550a947e30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OOOWDUJ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T024017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICy%2BGA9AGaRCJhqeafNELiwFMvRlRok%2B1oQfKihMUuBcAiEA9iOdGQcTn4ykTb66igfm1W0gBEdgFMIW0Tf%2FJ4xdf8Iq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDL0WhZ4qe8dQ%2Bi%2Fe2ircA9XwZqsGN1Y8pYpjd5MN1cuxPAoYQeqypgCN%2BkNER3yvj9P2pTHE71Jso001gvnhZhztkkKUFY0ICwoVKsmcRZoORVpalebrN4LfcUnSHa5s%2FwpFF5b6dZitPyTibJbtVbdbi8o5FAiuArGt5I160K0giP63G8dCWh%2F5b2zk2gQB%2F83Q8TSIGMOF23012tEkGwNo0I0RcyyN4WXSo434YmmNlXYYbzHMcnsfdZKzE22Pqj29M2Fbh6W1CJKCn7gjW1sSGYLrpLgYt%2BZYR4c%2FoZJeO1g95CZZCkfc88nBMr3OK%2ByYnvDBL0%2FwpDlSD5AMdIWF0Cub9cVaJ2fQH6YHlpktJYsa%2F1BPzD2o42GpzzPw3MK%2FnZH7OjN%2FOzS1L0O%2BwUaPLG3gKWG4ZqdSuqE%2BTP8i0zMU6YaJOu41W4QHDawU2t2oinrffk7q6ZEyyHePoaQElCEDXCIQTIkZzPOJpWPXY48J2JgwGRwL2joQkrhVN77tkIFlC9AT24eEVhR7xxqIT7My7KkZ13rKUE7bGnAuPdzxMLozpXZmvYEyIAEPCWzOYB2F8uez2oVCIbH6KeOw1tfuxQtAmnvy5ML%2FK1Qga1mcGHnLy7aPjD%2FmJuUrmzGyt8dK%2FfMAr6ZcMPWLw8IGOqUBvbBqQbqZLFbuPNyU%2FaTp4HI0LoIBFB2g2U7EBJ1SIDF%2BlwHBGWxNevAbW%2FQ3AmqNeVqHRrzM9GAYe2FKm2nkIOV%2B4Sk7ZKYVGs4iU04Et0AUjQD9lLmXau4e2VU405pNzuf6BpLl6LMcG%2Bf%2F%2Bw28SWHfP%2BxknM6ArzrHizPxIUK4SsaaTn5MH3%2B3LIiNr9rFWUZHUQZe7EzjaRlw7kD6F3Qfbx%2Bg&X-Amz-Signature=899ab6cff01d4826c58d1357b9058e17c36b5c18817db6464c190d65e302d6be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OOOWDUJ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T024017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICy%2BGA9AGaRCJhqeafNELiwFMvRlRok%2B1oQfKihMUuBcAiEA9iOdGQcTn4ykTb66igfm1W0gBEdgFMIW0Tf%2FJ4xdf8Iq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDL0WhZ4qe8dQ%2Bi%2Fe2ircA9XwZqsGN1Y8pYpjd5MN1cuxPAoYQeqypgCN%2BkNER3yvj9P2pTHE71Jso001gvnhZhztkkKUFY0ICwoVKsmcRZoORVpalebrN4LfcUnSHa5s%2FwpFF5b6dZitPyTibJbtVbdbi8o5FAiuArGt5I160K0giP63G8dCWh%2F5b2zk2gQB%2F83Q8TSIGMOF23012tEkGwNo0I0RcyyN4WXSo434YmmNlXYYbzHMcnsfdZKzE22Pqj29M2Fbh6W1CJKCn7gjW1sSGYLrpLgYt%2BZYR4c%2FoZJeO1g95CZZCkfc88nBMr3OK%2ByYnvDBL0%2FwpDlSD5AMdIWF0Cub9cVaJ2fQH6YHlpktJYsa%2F1BPzD2o42GpzzPw3MK%2FnZH7OjN%2FOzS1L0O%2BwUaPLG3gKWG4ZqdSuqE%2BTP8i0zMU6YaJOu41W4QHDawU2t2oinrffk7q6ZEyyHePoaQElCEDXCIQTIkZzPOJpWPXY48J2JgwGRwL2joQkrhVN77tkIFlC9AT24eEVhR7xxqIT7My7KkZ13rKUE7bGnAuPdzxMLozpXZmvYEyIAEPCWzOYB2F8uez2oVCIbH6KeOw1tfuxQtAmnvy5ML%2FK1Qga1mcGHnLy7aPjD%2FmJuUrmzGyt8dK%2FfMAr6ZcMPWLw8IGOqUBvbBqQbqZLFbuPNyU%2FaTp4HI0LoIBFB2g2U7EBJ1SIDF%2BlwHBGWxNevAbW%2FQ3AmqNeVqHRrzM9GAYe2FKm2nkIOV%2B4Sk7ZKYVGs4iU04Et0AUjQD9lLmXau4e2VU405pNzuf6BpLl6LMcG%2Bf%2F%2Bw28SWHfP%2BxknM6ArzrHizPxIUK4SsaaTn5MH3%2B3LIiNr9rFWUZHUQZe7EzjaRlw7kD6F3Qfbx%2Bg&X-Amz-Signature=e4570d5ce2574c4376f61ee5419ac9c89352b52b7da30c66666282d722a331a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
