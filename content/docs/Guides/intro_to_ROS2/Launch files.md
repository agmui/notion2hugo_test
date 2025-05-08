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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REPT3AH7%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T132313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBy0OeyjutcCay4Dd5t%2BxbvSIzK%2FdDNG%2BKD0cgFuAqhIAiAh1QDyAw%2FiyHtk%2BnxFWn%2F4swIAJN8TCufzdhdykWAMsir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMejzqmEsKYG7PiH5NKtwDoJD%2FxaGW81Ih2LKK0nuj9tzpw6PaMQG5P4OvXn2MSRmHF5Z%2FcyRIXowiAGQ4GBiaWhioXE98wPJ3crj5RFjNc2YS4j%2FOULmqBZlMzUVqAzStIG%2BByUV9NaGzcsaJq6DhNLA%2F7vDOz4q2vXIB%2B5ITmJayv2uvFKBw7H4U75R1pc5u5fs%2BvIWCByE%2FyKkEXdEG1H%2B%2F9rnzOgF8VW4g7b0LsWLyvyWLzEuPE1HdR1O%2FjIr4NszNgOiM9ZRhUK9PZioyuuaB3NEQiq%2FJZg%2FXbMTMXuISWaRz773IBZjbjKFX9LZVOG%2Fx3LO6NPOz6%2F7dLh42%2FAThxACHgDvheQCXuOCewBUCqptjvjcogoKkgvtVnXEuCFpa2%2FnC7rm2ITyhXQ%2BSuWXU8FQwBwYcRixZITK94mNJxsNz5o48ki%2FzATlcwMZc67uoEd%2FJ%2B11UYEq%2BZjRzU6LDU2BhzFoAEfhpmbLbBaKPZUj4kJ4qQ3NqXgRte26JAPN9YFm5rKR3d2XuS4Eu7yoJS4Iv2yCSSzUeyos8oeX14%2FTGDpIWvl3u78N0Vn6i0YNnFVBxdr01GpqNrETLgnPXfvEHN%2BoPXJizPJgXPqeIFKEcsiiUxF5xNw2zsvkBrPCDPhJZsqGWIIAwt8rywAY6pgEnnCXhNy0SMIVrqlcsMYQ14MnRpHMbQBdJx1VZewxG1PtqO%2B4KWAlD0wNaRzU572S5a8J7uWfjvUOtB4oQIVxpmzVtbOxIdWkvQAUIyVXqytXRM37cFv%2B%2BESoAzlhp8lQZS19RWIjMWq0DiRebdMHlvnwWSd6SHGzHRRJk1hDw3gQ3fCt8dfjncF83acCVhHExskfygX6lQaIMaX%2FdMDAR246Giofe&X-Amz-Signature=3d4efb2de2b511f00fe7d5185362e378f61b6fa6222184f7ae91ec7c91a2f866&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REPT3AH7%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T132313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBy0OeyjutcCay4Dd5t%2BxbvSIzK%2FdDNG%2BKD0cgFuAqhIAiAh1QDyAw%2FiyHtk%2BnxFWn%2F4swIAJN8TCufzdhdykWAMsir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMejzqmEsKYG7PiH5NKtwDoJD%2FxaGW81Ih2LKK0nuj9tzpw6PaMQG5P4OvXn2MSRmHF5Z%2FcyRIXowiAGQ4GBiaWhioXE98wPJ3crj5RFjNc2YS4j%2FOULmqBZlMzUVqAzStIG%2BByUV9NaGzcsaJq6DhNLA%2F7vDOz4q2vXIB%2B5ITmJayv2uvFKBw7H4U75R1pc5u5fs%2BvIWCByE%2FyKkEXdEG1H%2B%2F9rnzOgF8VW4g7b0LsWLyvyWLzEuPE1HdR1O%2FjIr4NszNgOiM9ZRhUK9PZioyuuaB3NEQiq%2FJZg%2FXbMTMXuISWaRz773IBZjbjKFX9LZVOG%2Fx3LO6NPOz6%2F7dLh42%2FAThxACHgDvheQCXuOCewBUCqptjvjcogoKkgvtVnXEuCFpa2%2FnC7rm2ITyhXQ%2BSuWXU8FQwBwYcRixZITK94mNJxsNz5o48ki%2FzATlcwMZc67uoEd%2FJ%2B11UYEq%2BZjRzU6LDU2BhzFoAEfhpmbLbBaKPZUj4kJ4qQ3NqXgRte26JAPN9YFm5rKR3d2XuS4Eu7yoJS4Iv2yCSSzUeyos8oeX14%2FTGDpIWvl3u78N0Vn6i0YNnFVBxdr01GpqNrETLgnPXfvEHN%2BoPXJizPJgXPqeIFKEcsiiUxF5xNw2zsvkBrPCDPhJZsqGWIIAwt8rywAY6pgEnnCXhNy0SMIVrqlcsMYQ14MnRpHMbQBdJx1VZewxG1PtqO%2B4KWAlD0wNaRzU572S5a8J7uWfjvUOtB4oQIVxpmzVtbOxIdWkvQAUIyVXqytXRM37cFv%2B%2BESoAzlhp8lQZS19RWIjMWq0DiRebdMHlvnwWSd6SHGzHRRJk1hDw3gQ3fCt8dfjncF83acCVhHExskfygX6lQaIMaX%2FdMDAR246Giofe&X-Amz-Signature=0847b85992502bfb1d7abb7a584721042de467845e64866caece1b49b7e39d25&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REPT3AH7%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T132313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBy0OeyjutcCay4Dd5t%2BxbvSIzK%2FdDNG%2BKD0cgFuAqhIAiAh1QDyAw%2FiyHtk%2BnxFWn%2F4swIAJN8TCufzdhdykWAMsir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMejzqmEsKYG7PiH5NKtwDoJD%2FxaGW81Ih2LKK0nuj9tzpw6PaMQG5P4OvXn2MSRmHF5Z%2FcyRIXowiAGQ4GBiaWhioXE98wPJ3crj5RFjNc2YS4j%2FOULmqBZlMzUVqAzStIG%2BByUV9NaGzcsaJq6DhNLA%2F7vDOz4q2vXIB%2B5ITmJayv2uvFKBw7H4U75R1pc5u5fs%2BvIWCByE%2FyKkEXdEG1H%2B%2F9rnzOgF8VW4g7b0LsWLyvyWLzEuPE1HdR1O%2FjIr4NszNgOiM9ZRhUK9PZioyuuaB3NEQiq%2FJZg%2FXbMTMXuISWaRz773IBZjbjKFX9LZVOG%2Fx3LO6NPOz6%2F7dLh42%2FAThxACHgDvheQCXuOCewBUCqptjvjcogoKkgvtVnXEuCFpa2%2FnC7rm2ITyhXQ%2BSuWXU8FQwBwYcRixZITK94mNJxsNz5o48ki%2FzATlcwMZc67uoEd%2FJ%2B11UYEq%2BZjRzU6LDU2BhzFoAEfhpmbLbBaKPZUj4kJ4qQ3NqXgRte26JAPN9YFm5rKR3d2XuS4Eu7yoJS4Iv2yCSSzUeyos8oeX14%2FTGDpIWvl3u78N0Vn6i0YNnFVBxdr01GpqNrETLgnPXfvEHN%2BoPXJizPJgXPqeIFKEcsiiUxF5xNw2zsvkBrPCDPhJZsqGWIIAwt8rywAY6pgEnnCXhNy0SMIVrqlcsMYQ14MnRpHMbQBdJx1VZewxG1PtqO%2B4KWAlD0wNaRzU572S5a8J7uWfjvUOtB4oQIVxpmzVtbOxIdWkvQAUIyVXqytXRM37cFv%2B%2BESoAzlhp8lQZS19RWIjMWq0DiRebdMHlvnwWSd6SHGzHRRJk1hDw3gQ3fCt8dfjncF83acCVhHExskfygX6lQaIMaX%2FdMDAR246Giofe&X-Amz-Signature=c973a5b5af015c014a1b1d8af04a489ebcfcd7b498cb6f5b1c9c9ed0785c30bc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
