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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLZASMAE%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T180945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIF3ZlhYFGxmRwELu%2BI2H3zCdjNvSgZiN2l3zuXu1YHEWAiAe70VorpeLhvdbK6yHdKHY1gnTIp%2BBPbTyNP8p%2FvfIQCqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEgKv7ONC4fiiYDtBKtwDXFRJbNVL%2Bdk8LvpeiLuvOWXf2dtfjK1wViJB6UhUwlFyn3W8UKQtqatroFM0NLSMD68j2OTXDxjsM9gTk6MxzxsCcTBHKgOEX8jEm%2Fn0FV9PmUdexgCmWpzzEWiQy4bgt1G0wWKvX6kvRhTpCGXsQ2fUivpBm9U6PFlkh6Rh4GX6bNi4CxXkCuWQ35WLD5eSjUFjIaiL7Ge0VGl13%2F8HY%2FuAhZsb%2BMbdjvegRKyF1JzNOzlpd7HlEseP630xw%2FIBc4a%2BL%2Fh2yKmeoEMdWZp74PGRyZrlXAEN9Ia0GFR6E2cHHUssapRG0qPQMfXh0GEd%2BhJxtwXOEKrP4iY2tmOvX8a9ZPIRAXGTQWh1ptZYfb9%2Fqax6OrurNpanFqXA11ZDv6RDyNhDm3%2F264D9EjIbbBC6%2F41%2BS59W1KIOkEye7961%2FHtKYg%2BciDePuNqVqA24Kd78xH1Fm%2FtL91f%2F6KCmTWi7ASPa9ILtZrBFgGjXhYCvgzTg5JzE70dKdC9mCp1qmBnYPelUyzTxBNJVShDwR3h2Mr9iUoe5kDNuDId%2FBAvL3cUcYp1h4VhmbpCg62GcbOGAPgLPEdTN8dSQ9qZ%2FC8d4IhmbXoBIJdeFf4W0rxIpzeS5jit%2FkDfbt5owt6CPwAY6pgEuQjJQLn%2Flm6ktR%2FcxQK3bhk2Px8Ew%2FKIMjOXQ33KaaUCKeeQYUVIOESxlvDqNHTe2reN7aTLU0pPc1IVNeqOLQH6LzuDJF5J2TM%2B1NUA8eVDxNbgqZTEjGldhwToIASczAb%2FF3A%2FGlqKZA5k1WHpwbfq0cYIzsHXNMiqLPWT4iKnNQsAC21VDJMCDo1LEFz5GLrcYdgtlLtJAyKWwylrjHeY76I6z&X-Amz-Signature=ca8dc37f91f4b316f5186c9c7a158137fd0cb9fd214b6dcf3662beac4353af83&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLZASMAE%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T180945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIF3ZlhYFGxmRwELu%2BI2H3zCdjNvSgZiN2l3zuXu1YHEWAiAe70VorpeLhvdbK6yHdKHY1gnTIp%2BBPbTyNP8p%2FvfIQCqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEgKv7ONC4fiiYDtBKtwDXFRJbNVL%2Bdk8LvpeiLuvOWXf2dtfjK1wViJB6UhUwlFyn3W8UKQtqatroFM0NLSMD68j2OTXDxjsM9gTk6MxzxsCcTBHKgOEX8jEm%2Fn0FV9PmUdexgCmWpzzEWiQy4bgt1G0wWKvX6kvRhTpCGXsQ2fUivpBm9U6PFlkh6Rh4GX6bNi4CxXkCuWQ35WLD5eSjUFjIaiL7Ge0VGl13%2F8HY%2FuAhZsb%2BMbdjvegRKyF1JzNOzlpd7HlEseP630xw%2FIBc4a%2BL%2Fh2yKmeoEMdWZp74PGRyZrlXAEN9Ia0GFR6E2cHHUssapRG0qPQMfXh0GEd%2BhJxtwXOEKrP4iY2tmOvX8a9ZPIRAXGTQWh1ptZYfb9%2Fqax6OrurNpanFqXA11ZDv6RDyNhDm3%2F264D9EjIbbBC6%2F41%2BS59W1KIOkEye7961%2FHtKYg%2BciDePuNqVqA24Kd78xH1Fm%2FtL91f%2F6KCmTWi7ASPa9ILtZrBFgGjXhYCvgzTg5JzE70dKdC9mCp1qmBnYPelUyzTxBNJVShDwR3h2Mr9iUoe5kDNuDId%2FBAvL3cUcYp1h4VhmbpCg62GcbOGAPgLPEdTN8dSQ9qZ%2FC8d4IhmbXoBIJdeFf4W0rxIpzeS5jit%2FkDfbt5owt6CPwAY6pgEuQjJQLn%2Flm6ktR%2FcxQK3bhk2Px8Ew%2FKIMjOXQ33KaaUCKeeQYUVIOESxlvDqNHTe2reN7aTLU0pPc1IVNeqOLQH6LzuDJF5J2TM%2B1NUA8eVDxNbgqZTEjGldhwToIASczAb%2FF3A%2FGlqKZA5k1WHpwbfq0cYIzsHXNMiqLPWT4iKnNQsAC21VDJMCDo1LEFz5GLrcYdgtlLtJAyKWwylrjHeY76I6z&X-Amz-Signature=6e2bb49574f4a064f865c5568c973893e6b53e231bd8d34bc2f6d7ac9fcb666d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLZASMAE%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T180945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIF3ZlhYFGxmRwELu%2BI2H3zCdjNvSgZiN2l3zuXu1YHEWAiAe70VorpeLhvdbK6yHdKHY1gnTIp%2BBPbTyNP8p%2FvfIQCqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEgKv7ONC4fiiYDtBKtwDXFRJbNVL%2Bdk8LvpeiLuvOWXf2dtfjK1wViJB6UhUwlFyn3W8UKQtqatroFM0NLSMD68j2OTXDxjsM9gTk6MxzxsCcTBHKgOEX8jEm%2Fn0FV9PmUdexgCmWpzzEWiQy4bgt1G0wWKvX6kvRhTpCGXsQ2fUivpBm9U6PFlkh6Rh4GX6bNi4CxXkCuWQ35WLD5eSjUFjIaiL7Ge0VGl13%2F8HY%2FuAhZsb%2BMbdjvegRKyF1JzNOzlpd7HlEseP630xw%2FIBc4a%2BL%2Fh2yKmeoEMdWZp74PGRyZrlXAEN9Ia0GFR6E2cHHUssapRG0qPQMfXh0GEd%2BhJxtwXOEKrP4iY2tmOvX8a9ZPIRAXGTQWh1ptZYfb9%2Fqax6OrurNpanFqXA11ZDv6RDyNhDm3%2F264D9EjIbbBC6%2F41%2BS59W1KIOkEye7961%2FHtKYg%2BciDePuNqVqA24Kd78xH1Fm%2FtL91f%2F6KCmTWi7ASPa9ILtZrBFgGjXhYCvgzTg5JzE70dKdC9mCp1qmBnYPelUyzTxBNJVShDwR3h2Mr9iUoe5kDNuDId%2FBAvL3cUcYp1h4VhmbpCg62GcbOGAPgLPEdTN8dSQ9qZ%2FC8d4IhmbXoBIJdeFf4W0rxIpzeS5jit%2FkDfbt5owt6CPwAY6pgEuQjJQLn%2Flm6ktR%2FcxQK3bhk2Px8Ew%2FKIMjOXQ33KaaUCKeeQYUVIOESxlvDqNHTe2reN7aTLU0pPc1IVNeqOLQH6LzuDJF5J2TM%2B1NUA8eVDxNbgqZTEjGldhwToIASczAb%2FF3A%2FGlqKZA5k1WHpwbfq0cYIzsHXNMiqLPWT4iKnNQsAC21VDJMCDo1LEFz5GLrcYdgtlLtJAyKWwylrjHeY76I6z&X-Amz-Signature=9002d404ae52f751e7db3e543b882a940cad235d8f5f189889b922fc87514872&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
