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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y636GTLE%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T150959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIFC87wPn16R0VIZZImmIl3NlI%2BAG4r3kMhAI2uziLpc5AiEAnFfMfexMXzQBSYozE5GfK3gB0ZUEocyLkcu91FrRIKsq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDFdO1FzQyhL7KD9exCrcA845hlGcgkXpvdE9q9JFlS9veGi0HvQVyuZ%2B11ILLjjJeoOq%2Fk29Z3U9r6zWz1AMpC5%2FEwELpycG2tCUFNs3ISsxgozb48jXQWchG8p3IAtz0TCrbzjdBP1BhzmeQZ81aN60dKh5XpgjdAsj06e3i9yp%2Bkb5eV16Hi8grLL4DjJUxcrU6cfdjSEPlHjhYQqGepeLv19%2FapYGVsoNcwCVB0M2lgQP7ngcNKLrVOdnZzC9WBNfWZYGT7xUOAJaFb7UycWemfAaaadf8uJpvpAyfrX7lswwHbuIvNrF0OMvdjBsuMATHoXhAx4x2I3U4RI3D0gwK09yCHacwv5S6Qb6DQYI%2FFljzrzOutev85Gz2Bv9z5sKC9zQjzhzrFu9F1LVgAy99SFwcZTmCmM8a0pwiV9NiAX3os%2FVn4jtXRIR%2Bb3OIGDT48gcopOOnD2a5djHhS6niZNxmRM3oxY6DxWKoxPHwlkpUQ5UPA7N7i7cTySl2imIEltb6kgfYqdnAarUQbah6lfCZdUv13pRkF8ArEdXfDGxWSKzPoNk4Z2RVHPdrVQ2Jloq2c%2BE%2Bm7po0QaB7O01OO3XpkeurjDaKAEd9cp8a0UXSHffVeMAOslsWZ0Idkafkrl7qjxQaFuMNSGjsQGOqUBUKrsygHVOaP07bFVBk39nCoWoHMAGBuNF9nA%2BFX5kTu%2BiMXrZlTVgouPv%2BkSwM89luqr0tfovXVVwHMzxoVBkCSMAdEgQXuHtW9qVOxyDp6unWDtI4ltHX3l%2Fmi%2F6%2BXGHt0yVo6oI5Jkef6izEBn6GE22RRyUZj1WqrmyRDhfV%2Bdp5r3IO%2FWHfvrpmnqG9OtZm3igr9XtH6SfouRVXgnPPtxp4sj&X-Amz-Signature=f28e3e98c373c1bfda3dbc9440e20593c7da1f170f8173a429d416234f4a53c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y636GTLE%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T150959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIFC87wPn16R0VIZZImmIl3NlI%2BAG4r3kMhAI2uziLpc5AiEAnFfMfexMXzQBSYozE5GfK3gB0ZUEocyLkcu91FrRIKsq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDFdO1FzQyhL7KD9exCrcA845hlGcgkXpvdE9q9JFlS9veGi0HvQVyuZ%2B11ILLjjJeoOq%2Fk29Z3U9r6zWz1AMpC5%2FEwELpycG2tCUFNs3ISsxgozb48jXQWchG8p3IAtz0TCrbzjdBP1BhzmeQZ81aN60dKh5XpgjdAsj06e3i9yp%2Bkb5eV16Hi8grLL4DjJUxcrU6cfdjSEPlHjhYQqGepeLv19%2FapYGVsoNcwCVB0M2lgQP7ngcNKLrVOdnZzC9WBNfWZYGT7xUOAJaFb7UycWemfAaaadf8uJpvpAyfrX7lswwHbuIvNrF0OMvdjBsuMATHoXhAx4x2I3U4RI3D0gwK09yCHacwv5S6Qb6DQYI%2FFljzrzOutev85Gz2Bv9z5sKC9zQjzhzrFu9F1LVgAy99SFwcZTmCmM8a0pwiV9NiAX3os%2FVn4jtXRIR%2Bb3OIGDT48gcopOOnD2a5djHhS6niZNxmRM3oxY6DxWKoxPHwlkpUQ5UPA7N7i7cTySl2imIEltb6kgfYqdnAarUQbah6lfCZdUv13pRkF8ArEdXfDGxWSKzPoNk4Z2RVHPdrVQ2Jloq2c%2BE%2Bm7po0QaB7O01OO3XpkeurjDaKAEd9cp8a0UXSHffVeMAOslsWZ0Idkafkrl7qjxQaFuMNSGjsQGOqUBUKrsygHVOaP07bFVBk39nCoWoHMAGBuNF9nA%2BFX5kTu%2BiMXrZlTVgouPv%2BkSwM89luqr0tfovXVVwHMzxoVBkCSMAdEgQXuHtW9qVOxyDp6unWDtI4ltHX3l%2Fmi%2F6%2BXGHt0yVo6oI5Jkef6izEBn6GE22RRyUZj1WqrmyRDhfV%2Bdp5r3IO%2FWHfvrpmnqG9OtZm3igr9XtH6SfouRVXgnPPtxp4sj&X-Amz-Signature=7580178dd58de8a1b87a0482bec68ff09497f77ae9edd754d2abd64d6c126452&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y636GTLE%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T150959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIFC87wPn16R0VIZZImmIl3NlI%2BAG4r3kMhAI2uziLpc5AiEAnFfMfexMXzQBSYozE5GfK3gB0ZUEocyLkcu91FrRIKsq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDFdO1FzQyhL7KD9exCrcA845hlGcgkXpvdE9q9JFlS9veGi0HvQVyuZ%2B11ILLjjJeoOq%2Fk29Z3U9r6zWz1AMpC5%2FEwELpycG2tCUFNs3ISsxgozb48jXQWchG8p3IAtz0TCrbzjdBP1BhzmeQZ81aN60dKh5XpgjdAsj06e3i9yp%2Bkb5eV16Hi8grLL4DjJUxcrU6cfdjSEPlHjhYQqGepeLv19%2FapYGVsoNcwCVB0M2lgQP7ngcNKLrVOdnZzC9WBNfWZYGT7xUOAJaFb7UycWemfAaaadf8uJpvpAyfrX7lswwHbuIvNrF0OMvdjBsuMATHoXhAx4x2I3U4RI3D0gwK09yCHacwv5S6Qb6DQYI%2FFljzrzOutev85Gz2Bv9z5sKC9zQjzhzrFu9F1LVgAy99SFwcZTmCmM8a0pwiV9NiAX3os%2FVn4jtXRIR%2Bb3OIGDT48gcopOOnD2a5djHhS6niZNxmRM3oxY6DxWKoxPHwlkpUQ5UPA7N7i7cTySl2imIEltb6kgfYqdnAarUQbah6lfCZdUv13pRkF8ArEdXfDGxWSKzPoNk4Z2RVHPdrVQ2Jloq2c%2BE%2Bm7po0QaB7O01OO3XpkeurjDaKAEd9cp8a0UXSHffVeMAOslsWZ0Idkafkrl7qjxQaFuMNSGjsQGOqUBUKrsygHVOaP07bFVBk39nCoWoHMAGBuNF9nA%2BFX5kTu%2BiMXrZlTVgouPv%2BkSwM89luqr0tfovXVVwHMzxoVBkCSMAdEgQXuHtW9qVOxyDp6unWDtI4ltHX3l%2Fmi%2F6%2BXGHt0yVo6oI5Jkef6izEBn6GE22RRyUZj1WqrmyRDhfV%2Bdp5r3IO%2FWHfvrpmnqG9OtZm3igr9XtH6SfouRVXgnPPtxp4sj&X-Amz-Signature=b5135372e16754a749c17f234caa9a61f70dbb752e0222bd3c16b8ba4dfc5079&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
