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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLUSXG3Q%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T090759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUC3rKF9g1SVPhmtJBRwyp8CYXuhdTP2GMfWg97LNrQwIgcUnV3kMxKc1VViC%2B1fqUHoOzN8VbQsRH8ryDhmy%2BWzsqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCDq8U3WzIf1Sadi0ircAzXCNnBxiIcc6U%2Fvb4Z4b2rMDht5X%2BSSJgS%2BHiJMDqE6rP4fMThC38LJuGDuNli0eBR2qKvV156Ve2qxnVjA2%2FJTqkCTGFcaoL3CZG5SD%2Bq04kp6SBDX7fVdQSJhBdIDhGIs7jlXiXXEirLsNxn3joBIktK3MIsDRHbRBtpZEBtwzMv7hLAJdTiWt9RXVl%2BW69k1k8sblownl0oTFSUwPfYglgh6q%2F5YnGmH3%2B6%2BAC%2B7%2FmZB%2FoHwxjkMO03luFrwRPz%2FK%2BJszVthnXtAH5KnCVuj%2BlFT1NpFjkMmy2jIqu4byoSBpg7gXguFjBCcdnbp0JmmG64k6egQptVEpyCO8hCzXvsJRNb0WA2g0RBeCgP9xIJv%2FuJP2jiDJAdIoxfpoWq3dfNzfCjVc7VDgmgvr0iOiVD9AhrYjkMc9r2VreD3uDcQWLSOcwA9YUDx792AflSEXo4Tro9KHAIeo1rUqNMoJsP%2FsnBtCi70fOlqxbT%2F0dE3IBg1Fjrk18UfjbyVqXULRMrrxGK%2BkxYrIbUAwEgaCGQtD29VjJmgCu5pLgqjgAMlup46wkg2OgjjBaS0GSz7ANGnGgtTEz2DIYHTuZBniY9yILKBmUeAdhwmcHsOFOE3iqCpTNSfi2kJMJDzlMIGOqUB3%2BKpFPFzv9uZfB1e6fqWJfgSFqPRi762%2BJlo%2BIhv0aoNLz8j%2BEtv0pZ8SGeWBvvlRzHggT%2FjnCTv%2Fo1O2AmHbk01%2BA%2BgAJs4sSMePhNyVU12POdxhzcGQ1P8bWVFQlGChi68GNyRittcNBv4usCY%2FLubRlZvraXv1LpIbNGOvARpuLKYM9GaZrz54Eex3LGfJXAJB4nnZ5JlSgvxIaL2c3AiL%2FXD&X-Amz-Signature=3e8478e43b90bb9b7a0ff8c7edc683bb0b7e5f6036ef59a874534933c73db88d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLUSXG3Q%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T090759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUC3rKF9g1SVPhmtJBRwyp8CYXuhdTP2GMfWg97LNrQwIgcUnV3kMxKc1VViC%2B1fqUHoOzN8VbQsRH8ryDhmy%2BWzsqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCDq8U3WzIf1Sadi0ircAzXCNnBxiIcc6U%2Fvb4Z4b2rMDht5X%2BSSJgS%2BHiJMDqE6rP4fMThC38LJuGDuNli0eBR2qKvV156Ve2qxnVjA2%2FJTqkCTGFcaoL3CZG5SD%2Bq04kp6SBDX7fVdQSJhBdIDhGIs7jlXiXXEirLsNxn3joBIktK3MIsDRHbRBtpZEBtwzMv7hLAJdTiWt9RXVl%2BW69k1k8sblownl0oTFSUwPfYglgh6q%2F5YnGmH3%2B6%2BAC%2B7%2FmZB%2FoHwxjkMO03luFrwRPz%2FK%2BJszVthnXtAH5KnCVuj%2BlFT1NpFjkMmy2jIqu4byoSBpg7gXguFjBCcdnbp0JmmG64k6egQptVEpyCO8hCzXvsJRNb0WA2g0RBeCgP9xIJv%2FuJP2jiDJAdIoxfpoWq3dfNzfCjVc7VDgmgvr0iOiVD9AhrYjkMc9r2VreD3uDcQWLSOcwA9YUDx792AflSEXo4Tro9KHAIeo1rUqNMoJsP%2FsnBtCi70fOlqxbT%2F0dE3IBg1Fjrk18UfjbyVqXULRMrrxGK%2BkxYrIbUAwEgaCGQtD29VjJmgCu5pLgqjgAMlup46wkg2OgjjBaS0GSz7ANGnGgtTEz2DIYHTuZBniY9yILKBmUeAdhwmcHsOFOE3iqCpTNSfi2kJMJDzlMIGOqUB3%2BKpFPFzv9uZfB1e6fqWJfgSFqPRi762%2BJlo%2BIhv0aoNLz8j%2BEtv0pZ8SGeWBvvlRzHggT%2FjnCTv%2Fo1O2AmHbk01%2BA%2BgAJs4sSMePhNyVU12POdxhzcGQ1P8bWVFQlGChi68GNyRittcNBv4usCY%2FLubRlZvraXv1LpIbNGOvARpuLKYM9GaZrz54Eex3LGfJXAJB4nnZ5JlSgvxIaL2c3AiL%2FXD&X-Amz-Signature=cd97cd4ece9e649d7c546f9021edf3500a8ea54859cbb6b7380bc0d3b751c5a2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLUSXG3Q%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T090759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUC3rKF9g1SVPhmtJBRwyp8CYXuhdTP2GMfWg97LNrQwIgcUnV3kMxKc1VViC%2B1fqUHoOzN8VbQsRH8ryDhmy%2BWzsqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCDq8U3WzIf1Sadi0ircAzXCNnBxiIcc6U%2Fvb4Z4b2rMDht5X%2BSSJgS%2BHiJMDqE6rP4fMThC38LJuGDuNli0eBR2qKvV156Ve2qxnVjA2%2FJTqkCTGFcaoL3CZG5SD%2Bq04kp6SBDX7fVdQSJhBdIDhGIs7jlXiXXEirLsNxn3joBIktK3MIsDRHbRBtpZEBtwzMv7hLAJdTiWt9RXVl%2BW69k1k8sblownl0oTFSUwPfYglgh6q%2F5YnGmH3%2B6%2BAC%2B7%2FmZB%2FoHwxjkMO03luFrwRPz%2FK%2BJszVthnXtAH5KnCVuj%2BlFT1NpFjkMmy2jIqu4byoSBpg7gXguFjBCcdnbp0JmmG64k6egQptVEpyCO8hCzXvsJRNb0WA2g0RBeCgP9xIJv%2FuJP2jiDJAdIoxfpoWq3dfNzfCjVc7VDgmgvr0iOiVD9AhrYjkMc9r2VreD3uDcQWLSOcwA9YUDx792AflSEXo4Tro9KHAIeo1rUqNMoJsP%2FsnBtCi70fOlqxbT%2F0dE3IBg1Fjrk18UfjbyVqXULRMrrxGK%2BkxYrIbUAwEgaCGQtD29VjJmgCu5pLgqjgAMlup46wkg2OgjjBaS0GSz7ANGnGgtTEz2DIYHTuZBniY9yILKBmUeAdhwmcHsOFOE3iqCpTNSfi2kJMJDzlMIGOqUB3%2BKpFPFzv9uZfB1e6fqWJfgSFqPRi762%2BJlo%2BIhv0aoNLz8j%2BEtv0pZ8SGeWBvvlRzHggT%2FjnCTv%2Fo1O2AmHbk01%2BA%2BgAJs4sSMePhNyVU12POdxhzcGQ1P8bWVFQlGChi68GNyRittcNBv4usCY%2FLubRlZvraXv1LpIbNGOvARpuLKYM9GaZrz54Eex3LGfJXAJB4nnZ5JlSgvxIaL2c3AiL%2FXD&X-Amz-Signature=6ca01d85a5c0acee5f6a8a08ec3a938995493d8b52eebe6166e914ed56a84d59&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
