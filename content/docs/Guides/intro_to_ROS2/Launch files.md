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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WMY3JXX%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi1xgSzE5h6krfYZv1LTeC497XUwehoZmjWkxY6hSzJwIgW3H4Wurt065I4Xg8oyHDmroky0ZWCIXl9f8lqoNX6xUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDJxNtfZK2uuYsVqZSircA7Zi6uTXTpllaswDIc6TBhpgQMpjvgx6zh%2FwcaWJx9vtGvzAfi6pOMZKrSw1vQZvSEmiLRss0fqmyC97BPfGAXcwVdG%2Bds9%2FkuLt4WewzDeQigVmx73d7XQYHyylXmsRldVKiGiybT78gXA2%2FW%2BFQ1geX3FK42NLDIHttBjRc8sy5wGGf1k5jciYBMRos%2BexD3cXRupsYyZ9%2F3TCHZJznPWlcX%2BwK6ZtRRbYQcJZFx1ryjbYoPHceHr9GIazAGKPzmsgFWTJFzovOXu1fdjgrzAtiB8p8OfNBjDTPZupVGAqOEDkftoEkXTeM9gFn5hDeEOHqZIrPHZzIhDxm0cjGXkKuF3q%2B5kk7c4mbdIAmAwr17wpLcPLQfI8rocqEWyqdGHbhxDEV97F5q3pHYVDRHNRAtps%2BNPXt1WOzUXQmBxsNSLTYMokIRlFdg%2FldEUJBlXSLpYWDRpOLhtmZn73ho5MCIH8RaFRtU5573Jqumm1lVFnQwlCg6y4MHXostqDQgd2ry0Kk%2B9RBpbr7NDf0pB1gefQUgdbnUPkzdwSU7AFRNZITE1JdA%2FlTyWaNPkFVpQVRb9ZbNogucWsO8egRoNvlk6ZSpY%2BqIft%2FY05gTzoHGchTzgYFM2XJnkRMIOGlr8GOqUBSN0MJ7HmqKjSDBpEen2DTvOPzpfu8l1OmD0wJjSKvWqh6lXAa50U6ELgCMNBubawykXSLV%2BrmilShk4KCtVTrzqAf2s3dFBhzHdSAXgDfEsGyK3zDQDNxCfOTIxDQ2J1AFL2KV7M6w2H6GqHmwbRahx3CH9J0RjOz2i3lqYvPgho4ihcPnDjBrZV5blKP0YRIdikUth99tyzE8ssVD9%2BUoUOLmot&X-Amz-Signature=28d245e19174d5f918675db90ae3d3ca0d7b0f157bf49863595ef41dcf8fd173&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WMY3JXX%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi1xgSzE5h6krfYZv1LTeC497XUwehoZmjWkxY6hSzJwIgW3H4Wurt065I4Xg8oyHDmroky0ZWCIXl9f8lqoNX6xUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDJxNtfZK2uuYsVqZSircA7Zi6uTXTpllaswDIc6TBhpgQMpjvgx6zh%2FwcaWJx9vtGvzAfi6pOMZKrSw1vQZvSEmiLRss0fqmyC97BPfGAXcwVdG%2Bds9%2FkuLt4WewzDeQigVmx73d7XQYHyylXmsRldVKiGiybT78gXA2%2FW%2BFQ1geX3FK42NLDIHttBjRc8sy5wGGf1k5jciYBMRos%2BexD3cXRupsYyZ9%2F3TCHZJznPWlcX%2BwK6ZtRRbYQcJZFx1ryjbYoPHceHr9GIazAGKPzmsgFWTJFzovOXu1fdjgrzAtiB8p8OfNBjDTPZupVGAqOEDkftoEkXTeM9gFn5hDeEOHqZIrPHZzIhDxm0cjGXkKuF3q%2B5kk7c4mbdIAmAwr17wpLcPLQfI8rocqEWyqdGHbhxDEV97F5q3pHYVDRHNRAtps%2BNPXt1WOzUXQmBxsNSLTYMokIRlFdg%2FldEUJBlXSLpYWDRpOLhtmZn73ho5MCIH8RaFRtU5573Jqumm1lVFnQwlCg6y4MHXostqDQgd2ry0Kk%2B9RBpbr7NDf0pB1gefQUgdbnUPkzdwSU7AFRNZITE1JdA%2FlTyWaNPkFVpQVRb9ZbNogucWsO8egRoNvlk6ZSpY%2BqIft%2FY05gTzoHGchTzgYFM2XJnkRMIOGlr8GOqUBSN0MJ7HmqKjSDBpEen2DTvOPzpfu8l1OmD0wJjSKvWqh6lXAa50U6ELgCMNBubawykXSLV%2BrmilShk4KCtVTrzqAf2s3dFBhzHdSAXgDfEsGyK3zDQDNxCfOTIxDQ2J1AFL2KV7M6w2H6GqHmwbRahx3CH9J0RjOz2i3lqYvPgho4ihcPnDjBrZV5blKP0YRIdikUth99tyzE8ssVD9%2BUoUOLmot&X-Amz-Signature=1ef271bffe8d387b19240cb228461173c6a96befcbd1f45708ad682377f13ed3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WMY3JXX%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi1xgSzE5h6krfYZv1LTeC497XUwehoZmjWkxY6hSzJwIgW3H4Wurt065I4Xg8oyHDmroky0ZWCIXl9f8lqoNX6xUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDJxNtfZK2uuYsVqZSircA7Zi6uTXTpllaswDIc6TBhpgQMpjvgx6zh%2FwcaWJx9vtGvzAfi6pOMZKrSw1vQZvSEmiLRss0fqmyC97BPfGAXcwVdG%2Bds9%2FkuLt4WewzDeQigVmx73d7XQYHyylXmsRldVKiGiybT78gXA2%2FW%2BFQ1geX3FK42NLDIHttBjRc8sy5wGGf1k5jciYBMRos%2BexD3cXRupsYyZ9%2F3TCHZJznPWlcX%2BwK6ZtRRbYQcJZFx1ryjbYoPHceHr9GIazAGKPzmsgFWTJFzovOXu1fdjgrzAtiB8p8OfNBjDTPZupVGAqOEDkftoEkXTeM9gFn5hDeEOHqZIrPHZzIhDxm0cjGXkKuF3q%2B5kk7c4mbdIAmAwr17wpLcPLQfI8rocqEWyqdGHbhxDEV97F5q3pHYVDRHNRAtps%2BNPXt1WOzUXQmBxsNSLTYMokIRlFdg%2FldEUJBlXSLpYWDRpOLhtmZn73ho5MCIH8RaFRtU5573Jqumm1lVFnQwlCg6y4MHXostqDQgd2ry0Kk%2B9RBpbr7NDf0pB1gefQUgdbnUPkzdwSU7AFRNZITE1JdA%2FlTyWaNPkFVpQVRb9ZbNogucWsO8egRoNvlk6ZSpY%2BqIft%2FY05gTzoHGchTzgYFM2XJnkRMIOGlr8GOqUBSN0MJ7HmqKjSDBpEen2DTvOPzpfu8l1OmD0wJjSKvWqh6lXAa50U6ELgCMNBubawykXSLV%2BrmilShk4KCtVTrzqAf2s3dFBhzHdSAXgDfEsGyK3zDQDNxCfOTIxDQ2J1AFL2KV7M6w2H6GqHmwbRahx3CH9J0RjOz2i3lqYvPgho4ihcPnDjBrZV5blKP0YRIdikUth99tyzE8ssVD9%2BUoUOLmot&X-Amz-Signature=d0acffd4b361a65f3dce179fafe5ad05c1bb6616f5031a9fc0c8d180cdb622f3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
