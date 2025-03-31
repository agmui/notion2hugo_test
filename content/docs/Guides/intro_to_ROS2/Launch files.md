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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HL57OTD%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T004130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCNVAgZEt96tKqfe8kloLSd5sSwlNJ0JXkJMbtR9DsQfwIgFYZZFaWOtLyS5sR8gvwq5bMTsJegNl5fUG%2FpvZpzsFoqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJZgBOVnMy52AEB0ircA632vgwIIbvAx4gbwkPgslrs6e46H7Aq2CL6scOEnY1E1gfRILqW2tQg0jnCkOG1fuNHhYQJEnKU3K9G5GKHUaphL3Ww%2FKvjZWzX%2Bicx%2BfUN6gF4DLZzpOxlA7JdSYd%2BiVbxVB4FKwqTKsoqoyLpk5kaTLkbIu%2F2lW1uSEQHNE%2FCz5F2ok8TEQb2IkCLr4lh4hY3SiyMaaI5cjhu0vsrfVEA5g81jvmVNgHGI02qo9bezcjPQ4pzRZrXO3CbongbMjMXmgPx4JQXp%2FKVtBaInGlVS%2FTbv%2F2BSo34SVK5G9bn71zq%2FNeK2Vy0u5CGXh2nQcjQYIHkm7%2FK%2F4VOKS5SGhPXj8BkWsvDosZ0gCMQ%2FEoU9Nrgo3isBavD8jp4qv0z9Svmfw2bviv%2B07B4vKVnqlULLQ4E42RHvQ8dgHg5mLa5ZVLAbvcS192AjXp6FR6Ca%2B6rY5DRghtBJxeesqO890fW%2B7HEAyKjnup0aK%2FiIzHLVYmLJrPsh5%2FbKMWgr87KhWIAdvix0VkkTyh%2BZgMDBM6L31gL0krHHcRQI4SlRGvR60TibOvBA6edOAXEH0w%2FeALzGnZ8YFuY91dmOdVNL03FVw8RYqlsYHEEQ24lnejzy%2FKBynsKsJjyaGuNMOC7p78GOqUB9aikCD80Cwi97t%2FXBe7pQ0T54wwZt857OsGN5c0JwZVx54JowxeGUpdFhYc9zWyetjM2WCsFg76xktVzSJz%2FsyxNC8fO5trJOVIa9oFNq1mwT8BeDt%2F0I9zkOCx5WVRtmufOqE5BRr7W6u%2B0DjnXfQ4DBfoFcRXf8dNQkEiiO%2FCExbIUtbEh3c%2FPp%2B%2Fa4sS9aO8zQo511NlpSExu8wdcf0nrP01D&X-Amz-Signature=7f1c7d2b6ef4a7cdfff89d91e169a21b2548f1866ed59e5f0a779c5f557c36cf&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HL57OTD%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T004130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCNVAgZEt96tKqfe8kloLSd5sSwlNJ0JXkJMbtR9DsQfwIgFYZZFaWOtLyS5sR8gvwq5bMTsJegNl5fUG%2FpvZpzsFoqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJZgBOVnMy52AEB0ircA632vgwIIbvAx4gbwkPgslrs6e46H7Aq2CL6scOEnY1E1gfRILqW2tQg0jnCkOG1fuNHhYQJEnKU3K9G5GKHUaphL3Ww%2FKvjZWzX%2Bicx%2BfUN6gF4DLZzpOxlA7JdSYd%2BiVbxVB4FKwqTKsoqoyLpk5kaTLkbIu%2F2lW1uSEQHNE%2FCz5F2ok8TEQb2IkCLr4lh4hY3SiyMaaI5cjhu0vsrfVEA5g81jvmVNgHGI02qo9bezcjPQ4pzRZrXO3CbongbMjMXmgPx4JQXp%2FKVtBaInGlVS%2FTbv%2F2BSo34SVK5G9bn71zq%2FNeK2Vy0u5CGXh2nQcjQYIHkm7%2FK%2F4VOKS5SGhPXj8BkWsvDosZ0gCMQ%2FEoU9Nrgo3isBavD8jp4qv0z9Svmfw2bviv%2B07B4vKVnqlULLQ4E42RHvQ8dgHg5mLa5ZVLAbvcS192AjXp6FR6Ca%2B6rY5DRghtBJxeesqO890fW%2B7HEAyKjnup0aK%2FiIzHLVYmLJrPsh5%2FbKMWgr87KhWIAdvix0VkkTyh%2BZgMDBM6L31gL0krHHcRQI4SlRGvR60TibOvBA6edOAXEH0w%2FeALzGnZ8YFuY91dmOdVNL03FVw8RYqlsYHEEQ24lnejzy%2FKBynsKsJjyaGuNMOC7p78GOqUB9aikCD80Cwi97t%2FXBe7pQ0T54wwZt857OsGN5c0JwZVx54JowxeGUpdFhYc9zWyetjM2WCsFg76xktVzSJz%2FsyxNC8fO5trJOVIa9oFNq1mwT8BeDt%2F0I9zkOCx5WVRtmufOqE5BRr7W6u%2B0DjnXfQ4DBfoFcRXf8dNQkEiiO%2FCExbIUtbEh3c%2FPp%2B%2Fa4sS9aO8zQo511NlpSExu8wdcf0nrP01D&X-Amz-Signature=8b7b90bd9826248eda83abe8cd12f15ddaf3d0189dd6482eb453341c561316a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HL57OTD%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T004130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCNVAgZEt96tKqfe8kloLSd5sSwlNJ0JXkJMbtR9DsQfwIgFYZZFaWOtLyS5sR8gvwq5bMTsJegNl5fUG%2FpvZpzsFoqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJZgBOVnMy52AEB0ircA632vgwIIbvAx4gbwkPgslrs6e46H7Aq2CL6scOEnY1E1gfRILqW2tQg0jnCkOG1fuNHhYQJEnKU3K9G5GKHUaphL3Ww%2FKvjZWzX%2Bicx%2BfUN6gF4DLZzpOxlA7JdSYd%2BiVbxVB4FKwqTKsoqoyLpk5kaTLkbIu%2F2lW1uSEQHNE%2FCz5F2ok8TEQb2IkCLr4lh4hY3SiyMaaI5cjhu0vsrfVEA5g81jvmVNgHGI02qo9bezcjPQ4pzRZrXO3CbongbMjMXmgPx4JQXp%2FKVtBaInGlVS%2FTbv%2F2BSo34SVK5G9bn71zq%2FNeK2Vy0u5CGXh2nQcjQYIHkm7%2FK%2F4VOKS5SGhPXj8BkWsvDosZ0gCMQ%2FEoU9Nrgo3isBavD8jp4qv0z9Svmfw2bviv%2B07B4vKVnqlULLQ4E42RHvQ8dgHg5mLa5ZVLAbvcS192AjXp6FR6Ca%2B6rY5DRghtBJxeesqO890fW%2B7HEAyKjnup0aK%2FiIzHLVYmLJrPsh5%2FbKMWgr87KhWIAdvix0VkkTyh%2BZgMDBM6L31gL0krHHcRQI4SlRGvR60TibOvBA6edOAXEH0w%2FeALzGnZ8YFuY91dmOdVNL03FVw8RYqlsYHEEQ24lnejzy%2FKBynsKsJjyaGuNMOC7p78GOqUB9aikCD80Cwi97t%2FXBe7pQ0T54wwZt857OsGN5c0JwZVx54JowxeGUpdFhYc9zWyetjM2WCsFg76xktVzSJz%2FsyxNC8fO5trJOVIa9oFNq1mwT8BeDt%2F0I9zkOCx5WVRtmufOqE5BRr7W6u%2B0DjnXfQ4DBfoFcRXf8dNQkEiiO%2FCExbIUtbEh3c%2FPp%2B%2Fa4sS9aO8zQo511NlpSExu8wdcf0nrP01D&X-Amz-Signature=627e8ac8177cdd1562acaf1bafcecd223788454d83d0b0ff436a209e020ec8c4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
