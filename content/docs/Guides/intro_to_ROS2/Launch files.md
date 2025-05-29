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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU6A53JH%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T150858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BOIkKBiJxRMi0aYSURkjq0Vw8Vik5QV5OkJ2hTcbFvAiEA1uzFZY7QxdE9SupI1xWfOZA7DFrYOSvkIYhCVZNSklsqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2Fwrqeo4rrS%2BVAB0yrcA6VE%2BODaHSz8eTQ0mWFRsgqxTjl5ZQWhwyWR82igHtubzOz0Al3Vhl%2FWr5PgFoG5H83S2xOuMqa51HQdM00nKG6a1OmDr%2B2UE5kqScC3ZKMuXVCJ17BnWO1pT6hGjqw1QilX4AY8Zf12B2ARwYdz3damuklZAXP5qkMQIJj2lXcnQQ6lyyR6bIuoez5inpthSMLWi9evfqONVPcypidgCsSzBfe4dkskH0Pqo5JWqR2vrOltxdan4mbN05hdznpzGJFW%2F6KN%2FHbI7QGrho8Pn0yNkhhlmgFePHFDdVzrHEDW3g2NVF1W66u7iZ2fqqyliUmZrBZOsM6bz7Zc39v0ubFmEZhtX8lLh1urryw5K7c70x4TQ097mOt7vmB%2BNyrn1PECXE9zCJNGFyVHbLhJ2y5uk1Q8xVb7IBfQE8pVd70mVERrRlY34Zv%2FuOWh%2FzpbPD8IGTX%2Bo1STDlcr7VtYzwY7KJCMyckoyEKtaplxN%2FruxXHAadd%2FU5DWkIRoLWdKd4XZy1KiVkkLpQlKQXYjeSxVFnWNAzlkL46pkAyNPTc%2FZuIUO4U98C%2BKEuhICH86EUfPWnSHoE21iFZNCzr3iQdX3elN%2B15iE%2B%2B8qv7dEOlMElpeYlltdvlJlxwcMNGy4cEGOqUBDgWMZN2ZjMEQff61QqTNKtjJx44RJNSyVf%2FDvvc9ICapunXGSaJLPlZlIgTl0llkEhIvx0H3QkGjAcW4Jt%2Ftiz6MYrVGh4ATr7j4ven9ueFOwV5rIABAcd0I3kFGHAZnyd4ThE37BtPE2Avj3slkl28ktyDz2ypnYkrbV2r1CFht1GuNG0CH2tKKL5Yw2QJQHNlg8AiDqDyAGA7HPBqeZd%2FYQNRM&X-Amz-Signature=fa9c004c3f3847ff36f2376d93f6427d6f512d190a4a02fc2a488f6aab25afa5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU6A53JH%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T150858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BOIkKBiJxRMi0aYSURkjq0Vw8Vik5QV5OkJ2hTcbFvAiEA1uzFZY7QxdE9SupI1xWfOZA7DFrYOSvkIYhCVZNSklsqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2Fwrqeo4rrS%2BVAB0yrcA6VE%2BODaHSz8eTQ0mWFRsgqxTjl5ZQWhwyWR82igHtubzOz0Al3Vhl%2FWr5PgFoG5H83S2xOuMqa51HQdM00nKG6a1OmDr%2B2UE5kqScC3ZKMuXVCJ17BnWO1pT6hGjqw1QilX4AY8Zf12B2ARwYdz3damuklZAXP5qkMQIJj2lXcnQQ6lyyR6bIuoez5inpthSMLWi9evfqONVPcypidgCsSzBfe4dkskH0Pqo5JWqR2vrOltxdan4mbN05hdznpzGJFW%2F6KN%2FHbI7QGrho8Pn0yNkhhlmgFePHFDdVzrHEDW3g2NVF1W66u7iZ2fqqyliUmZrBZOsM6bz7Zc39v0ubFmEZhtX8lLh1urryw5K7c70x4TQ097mOt7vmB%2BNyrn1PECXE9zCJNGFyVHbLhJ2y5uk1Q8xVb7IBfQE8pVd70mVERrRlY34Zv%2FuOWh%2FzpbPD8IGTX%2Bo1STDlcr7VtYzwY7KJCMyckoyEKtaplxN%2FruxXHAadd%2FU5DWkIRoLWdKd4XZy1KiVkkLpQlKQXYjeSxVFnWNAzlkL46pkAyNPTc%2FZuIUO4U98C%2BKEuhICH86EUfPWnSHoE21iFZNCzr3iQdX3elN%2B15iE%2B%2B8qv7dEOlMElpeYlltdvlJlxwcMNGy4cEGOqUBDgWMZN2ZjMEQff61QqTNKtjJx44RJNSyVf%2FDvvc9ICapunXGSaJLPlZlIgTl0llkEhIvx0H3QkGjAcW4Jt%2Ftiz6MYrVGh4ATr7j4ven9ueFOwV5rIABAcd0I3kFGHAZnyd4ThE37BtPE2Avj3slkl28ktyDz2ypnYkrbV2r1CFht1GuNG0CH2tKKL5Yw2QJQHNlg8AiDqDyAGA7HPBqeZd%2FYQNRM&X-Amz-Signature=1265b7549e2cc76a254da2282e1c5db8d696e2336e94feb9d04d8e126ef18dfb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU6A53JH%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T150858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BOIkKBiJxRMi0aYSURkjq0Vw8Vik5QV5OkJ2hTcbFvAiEA1uzFZY7QxdE9SupI1xWfOZA7DFrYOSvkIYhCVZNSklsqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2Fwrqeo4rrS%2BVAB0yrcA6VE%2BODaHSz8eTQ0mWFRsgqxTjl5ZQWhwyWR82igHtubzOz0Al3Vhl%2FWr5PgFoG5H83S2xOuMqa51HQdM00nKG6a1OmDr%2B2UE5kqScC3ZKMuXVCJ17BnWO1pT6hGjqw1QilX4AY8Zf12B2ARwYdz3damuklZAXP5qkMQIJj2lXcnQQ6lyyR6bIuoez5inpthSMLWi9evfqONVPcypidgCsSzBfe4dkskH0Pqo5JWqR2vrOltxdan4mbN05hdznpzGJFW%2F6KN%2FHbI7QGrho8Pn0yNkhhlmgFePHFDdVzrHEDW3g2NVF1W66u7iZ2fqqyliUmZrBZOsM6bz7Zc39v0ubFmEZhtX8lLh1urryw5K7c70x4TQ097mOt7vmB%2BNyrn1PECXE9zCJNGFyVHbLhJ2y5uk1Q8xVb7IBfQE8pVd70mVERrRlY34Zv%2FuOWh%2FzpbPD8IGTX%2Bo1STDlcr7VtYzwY7KJCMyckoyEKtaplxN%2FruxXHAadd%2FU5DWkIRoLWdKd4XZy1KiVkkLpQlKQXYjeSxVFnWNAzlkL46pkAyNPTc%2FZuIUO4U98C%2BKEuhICH86EUfPWnSHoE21iFZNCzr3iQdX3elN%2B15iE%2B%2B8qv7dEOlMElpeYlltdvlJlxwcMNGy4cEGOqUBDgWMZN2ZjMEQff61QqTNKtjJx44RJNSyVf%2FDvvc9ICapunXGSaJLPlZlIgTl0llkEhIvx0H3QkGjAcW4Jt%2Ftiz6MYrVGh4ATr7j4ven9ueFOwV5rIABAcd0I3kFGHAZnyd4ThE37BtPE2Avj3slkl28ktyDz2ypnYkrbV2r1CFht1GuNG0CH2tKKL5Yw2QJQHNlg8AiDqDyAGA7HPBqeZd%2FYQNRM&X-Amz-Signature=449f950c78cc8e79c417f642522f8c614486ebab18ccb6c3708512ee8b5a1068&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
