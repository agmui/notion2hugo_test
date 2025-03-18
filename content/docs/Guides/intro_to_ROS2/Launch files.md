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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDOUJ3JI%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T090904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIEpGi5z68tx5BGpDDQwTsSzfP6XZ3jHx7438BByze1%2FjAiA29ShqSpdy4%2BgFxORwnbtJ4SdnmNtqMHv02wuK8tVJwCr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMErXAetfALZEWD%2B5PKtwDwZGkR%2BXUTxXwf43KvIBCetTfQVj3Uvn2V618TULgJ7lHvrWEvF0vng%2BcM7rh3JNwH8YyQWqbacgjwByEz64uK3h2EeglmK85WJeTWaFx6bZZqkzUP9eDMuLY0VciDBj9qLAaCXICCWF6xLsuElS7e1elqSnbIzVsE%2BnJfpJl9hEbsaTGV1InYWI%2FxM1IyjpR1rwm%2FEGI5mZyFkJ4VRJyd6mpzFoSoE0TldL%2FlnaI%2Bv57JHX7qeQ4rCNC5LT0IR3i0SYGPhmFjUVJLyfwoCokJSWf3OrcIKltdYYlKXBErRmdk6sZzrevDThm6yLIsTvawSv1Vuak0CbbwVd96gIKnaaKPQ3nsdzkwNpTA604qfWDV862rvi8p47yWlAftPJXB6hSp9cNBJjrSpxrubW1lH4Rb%2FhKOnaUuQBogsgeAw%2F9rvN1bn0i4YMw3XF10RC%2Fp2kiGIdlfJCNha0qytoXsxaAC%2BJl%2BcJ5aORnq7IQ2FM5By%2Bs3fwllNhEkXpMZ2gBQXYkeBmSIz078uvaEsk0Lp%2BY%2FouMLuTOFe%2FD0Ly%2BIKBqrdMJuQj3fvuufM4gMvRHedGh3Li5%2BNkuQPn90rE0YmRHhAY7JveMkxZ2Xtr10nZZf%2B%2BiSAqiFhz9zMkw19bkvgY6pgHGgzCBAaRw%2BpU6t5L5i9HXjEfUe9SbF05zHuYd0dT09TslSKSKbTNt0M4IwyzlHea%2BvP4zFWPdsQK2bvlB%2F6gEeP3p2JAe2d1HhWIG%2FKvlHlUVQyQi9Z728MYlPBLWKJ8f9K%2FSo3LKfW%2Bp7D3Mk03HrW40YnBRdgaDkiz%2B6ByoPwOxUy2aKjqFB9CcZKOtHzalgrC8ySTLFYOe3ApTMdqC7EUwNvos&X-Amz-Signature=16095d302df24d2b4c3156e3684ca91566a10879b7e642e668c4e2c2edb965a7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDOUJ3JI%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T090904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIEpGi5z68tx5BGpDDQwTsSzfP6XZ3jHx7438BByze1%2FjAiA29ShqSpdy4%2BgFxORwnbtJ4SdnmNtqMHv02wuK8tVJwCr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMErXAetfALZEWD%2B5PKtwDwZGkR%2BXUTxXwf43KvIBCetTfQVj3Uvn2V618TULgJ7lHvrWEvF0vng%2BcM7rh3JNwH8YyQWqbacgjwByEz64uK3h2EeglmK85WJeTWaFx6bZZqkzUP9eDMuLY0VciDBj9qLAaCXICCWF6xLsuElS7e1elqSnbIzVsE%2BnJfpJl9hEbsaTGV1InYWI%2FxM1IyjpR1rwm%2FEGI5mZyFkJ4VRJyd6mpzFoSoE0TldL%2FlnaI%2Bv57JHX7qeQ4rCNC5LT0IR3i0SYGPhmFjUVJLyfwoCokJSWf3OrcIKltdYYlKXBErRmdk6sZzrevDThm6yLIsTvawSv1Vuak0CbbwVd96gIKnaaKPQ3nsdzkwNpTA604qfWDV862rvi8p47yWlAftPJXB6hSp9cNBJjrSpxrubW1lH4Rb%2FhKOnaUuQBogsgeAw%2F9rvN1bn0i4YMw3XF10RC%2Fp2kiGIdlfJCNha0qytoXsxaAC%2BJl%2BcJ5aORnq7IQ2FM5By%2Bs3fwllNhEkXpMZ2gBQXYkeBmSIz078uvaEsk0Lp%2BY%2FouMLuTOFe%2FD0Ly%2BIKBqrdMJuQj3fvuufM4gMvRHedGh3Li5%2BNkuQPn90rE0YmRHhAY7JveMkxZ2Xtr10nZZf%2B%2BiSAqiFhz9zMkw19bkvgY6pgHGgzCBAaRw%2BpU6t5L5i9HXjEfUe9SbF05zHuYd0dT09TslSKSKbTNt0M4IwyzlHea%2BvP4zFWPdsQK2bvlB%2F6gEeP3p2JAe2d1HhWIG%2FKvlHlUVQyQi9Z728MYlPBLWKJ8f9K%2FSo3LKfW%2Bp7D3Mk03HrW40YnBRdgaDkiz%2B6ByoPwOxUy2aKjqFB9CcZKOtHzalgrC8ySTLFYOe3ApTMdqC7EUwNvos&X-Amz-Signature=46e5020f228939efde346504d7524323049d81727f842fa033bc7f6da43f47cc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDOUJ3JI%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T090904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIEpGi5z68tx5BGpDDQwTsSzfP6XZ3jHx7438BByze1%2FjAiA29ShqSpdy4%2BgFxORwnbtJ4SdnmNtqMHv02wuK8tVJwCr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMErXAetfALZEWD%2B5PKtwDwZGkR%2BXUTxXwf43KvIBCetTfQVj3Uvn2V618TULgJ7lHvrWEvF0vng%2BcM7rh3JNwH8YyQWqbacgjwByEz64uK3h2EeglmK85WJeTWaFx6bZZqkzUP9eDMuLY0VciDBj9qLAaCXICCWF6xLsuElS7e1elqSnbIzVsE%2BnJfpJl9hEbsaTGV1InYWI%2FxM1IyjpR1rwm%2FEGI5mZyFkJ4VRJyd6mpzFoSoE0TldL%2FlnaI%2Bv57JHX7qeQ4rCNC5LT0IR3i0SYGPhmFjUVJLyfwoCokJSWf3OrcIKltdYYlKXBErRmdk6sZzrevDThm6yLIsTvawSv1Vuak0CbbwVd96gIKnaaKPQ3nsdzkwNpTA604qfWDV862rvi8p47yWlAftPJXB6hSp9cNBJjrSpxrubW1lH4Rb%2FhKOnaUuQBogsgeAw%2F9rvN1bn0i4YMw3XF10RC%2Fp2kiGIdlfJCNha0qytoXsxaAC%2BJl%2BcJ5aORnq7IQ2FM5By%2Bs3fwllNhEkXpMZ2gBQXYkeBmSIz078uvaEsk0Lp%2BY%2FouMLuTOFe%2FD0Ly%2BIKBqrdMJuQj3fvuufM4gMvRHedGh3Li5%2BNkuQPn90rE0YmRHhAY7JveMkxZ2Xtr10nZZf%2B%2BiSAqiFhz9zMkw19bkvgY6pgHGgzCBAaRw%2BpU6t5L5i9HXjEfUe9SbF05zHuYd0dT09TslSKSKbTNt0M4IwyzlHea%2BvP4zFWPdsQK2bvlB%2F6gEeP3p2JAe2d1HhWIG%2FKvlHlUVQyQi9Z728MYlPBLWKJ8f9K%2FSo3LKfW%2Bp7D3Mk03HrW40YnBRdgaDkiz%2B6ByoPwOxUy2aKjqFB9CcZKOtHzalgrC8ySTLFYOe3ApTMdqC7EUwNvos&X-Amz-Signature=6f13dd0b2ca42bdf4282b769cf1b23e2ed2ff5d209e824ba4c153a8c75abd307&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
