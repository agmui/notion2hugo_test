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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWREGEYA%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T031218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOiQxdN7EWWz0f7YTSLTzXmsSt91xy4TJaC5XIc48zoAiEAst0aAYac5cHekz%2FCo2UPRQFYNAuZXk5Id22BtzdJJ6cqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVIf6SINsB5rjCABircA1ANhqo4vZ8FBOCsUqzx21KACGsxUmZ3s%2F643d60Lg21%2FYV96lzBnTM2zEDCDstks3flA4qs8PA2QtmQpH6AZl8QsiuVogOvXAmdphKwYKW36PUspvj%2F1Q684mIFU6J53c7yEQ2aQZfnZA4xvo7vz0Jdt6w%2Fy1V5N39I9yTuIbhKmB5p2kN8CXwYwlU1%2BfBBMzgfuit2BNfAjz1wx7YKHV5zxSwhK2rx%2FcDl0bcsMpP0adaY3P9SjrSPSvw3FY%2BagW0CNDAouP3128aMNYcH%2BXddakZDon6%2FXnwU5EktNIHmYXh3WeaNNNs4A6D2SOvLQ9PB1Hr2ixs9F%2BgIq9sVO4fS8qlTEjfWtYu%2BQaSQ5HvCV38Qi9h4sJESNEbMreskk9ns8YMUi85uo8Q5%2BkHbQQvC4VHDgdc8w5Ljyff6KpqEQ7YudzGzMZbNUXlVR1fVqZSqmRpsyunmbtmODNvdRL23i3VzX%2BIiVklEsqHkVWXc%2BHctfuiu49P5bfcD9rqKE4QLR81EWP1uFwJTdfR5sE4OfcYD%2BFKxZ%2BHXCzdKdVtV1CDasliXxT9pSEFSmmRy%2FJLQBJz5qAuuOqHGtW1bJOawQ9R9Y%2FTBG7BahFKbMbwOTMig5G3fDn6bCzrLMM%2FBgL0GOqUBpTL8G4NaZfOwKN0RJmViqFCVpdRHu30ZVC%2Bs3oHa8jtH5QSnRKudr8LRWS0%2B%2Fv2RcydOPxNMu4M6j04kfgYhLYPEaOH9frMWvKNWdLRhkVgsxGoGfdZgoLFpPWHUDmv%2BpclVhEcrV7qUT%2B7pv8zKqeIvwSOAv6S7rdoyyiekbNhFdkzaeb687a2XL63%2BuUWdZobvi2DzRaJl1nqHpMYvMoy25J3t&X-Amz-Signature=313341c0fff70ca50fb8b2f60167d343d954ced56d128fddfbdce5fe7b8c85e0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWREGEYA%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T031218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOiQxdN7EWWz0f7YTSLTzXmsSt91xy4TJaC5XIc48zoAiEAst0aAYac5cHekz%2FCo2UPRQFYNAuZXk5Id22BtzdJJ6cqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVIf6SINsB5rjCABircA1ANhqo4vZ8FBOCsUqzx21KACGsxUmZ3s%2F643d60Lg21%2FYV96lzBnTM2zEDCDstks3flA4qs8PA2QtmQpH6AZl8QsiuVogOvXAmdphKwYKW36PUspvj%2F1Q684mIFU6J53c7yEQ2aQZfnZA4xvo7vz0Jdt6w%2Fy1V5N39I9yTuIbhKmB5p2kN8CXwYwlU1%2BfBBMzgfuit2BNfAjz1wx7YKHV5zxSwhK2rx%2FcDl0bcsMpP0adaY3P9SjrSPSvw3FY%2BagW0CNDAouP3128aMNYcH%2BXddakZDon6%2FXnwU5EktNIHmYXh3WeaNNNs4A6D2SOvLQ9PB1Hr2ixs9F%2BgIq9sVO4fS8qlTEjfWtYu%2BQaSQ5HvCV38Qi9h4sJESNEbMreskk9ns8YMUi85uo8Q5%2BkHbQQvC4VHDgdc8w5Ljyff6KpqEQ7YudzGzMZbNUXlVR1fVqZSqmRpsyunmbtmODNvdRL23i3VzX%2BIiVklEsqHkVWXc%2BHctfuiu49P5bfcD9rqKE4QLR81EWP1uFwJTdfR5sE4OfcYD%2BFKxZ%2BHXCzdKdVtV1CDasliXxT9pSEFSmmRy%2FJLQBJz5qAuuOqHGtW1bJOawQ9R9Y%2FTBG7BahFKbMbwOTMig5G3fDn6bCzrLMM%2FBgL0GOqUBpTL8G4NaZfOwKN0RJmViqFCVpdRHu30ZVC%2Bs3oHa8jtH5QSnRKudr8LRWS0%2B%2Fv2RcydOPxNMu4M6j04kfgYhLYPEaOH9frMWvKNWdLRhkVgsxGoGfdZgoLFpPWHUDmv%2BpclVhEcrV7qUT%2B7pv8zKqeIvwSOAv6S7rdoyyiekbNhFdkzaeb687a2XL63%2BuUWdZobvi2DzRaJl1nqHpMYvMoy25J3t&X-Amz-Signature=64493c0dcf3565bc54f7e4e07a1e4d4580ba1deb22f55acc9d08a28fdcad53b8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWREGEYA%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T031218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOiQxdN7EWWz0f7YTSLTzXmsSt91xy4TJaC5XIc48zoAiEAst0aAYac5cHekz%2FCo2UPRQFYNAuZXk5Id22BtzdJJ6cqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVIf6SINsB5rjCABircA1ANhqo4vZ8FBOCsUqzx21KACGsxUmZ3s%2F643d60Lg21%2FYV96lzBnTM2zEDCDstks3flA4qs8PA2QtmQpH6AZl8QsiuVogOvXAmdphKwYKW36PUspvj%2F1Q684mIFU6J53c7yEQ2aQZfnZA4xvo7vz0Jdt6w%2Fy1V5N39I9yTuIbhKmB5p2kN8CXwYwlU1%2BfBBMzgfuit2BNfAjz1wx7YKHV5zxSwhK2rx%2FcDl0bcsMpP0adaY3P9SjrSPSvw3FY%2BagW0CNDAouP3128aMNYcH%2BXddakZDon6%2FXnwU5EktNIHmYXh3WeaNNNs4A6D2SOvLQ9PB1Hr2ixs9F%2BgIq9sVO4fS8qlTEjfWtYu%2BQaSQ5HvCV38Qi9h4sJESNEbMreskk9ns8YMUi85uo8Q5%2BkHbQQvC4VHDgdc8w5Ljyff6KpqEQ7YudzGzMZbNUXlVR1fVqZSqmRpsyunmbtmODNvdRL23i3VzX%2BIiVklEsqHkVWXc%2BHctfuiu49P5bfcD9rqKE4QLR81EWP1uFwJTdfR5sE4OfcYD%2BFKxZ%2BHXCzdKdVtV1CDasliXxT9pSEFSmmRy%2FJLQBJz5qAuuOqHGtW1bJOawQ9R9Y%2FTBG7BahFKbMbwOTMig5G3fDn6bCzrLMM%2FBgL0GOqUBpTL8G4NaZfOwKN0RJmViqFCVpdRHu30ZVC%2Bs3oHa8jtH5QSnRKudr8LRWS0%2B%2Fv2RcydOPxNMu4M6j04kfgYhLYPEaOH9frMWvKNWdLRhkVgsxGoGfdZgoLFpPWHUDmv%2BpclVhEcrV7qUT%2B7pv8zKqeIvwSOAv6S7rdoyyiekbNhFdkzaeb687a2XL63%2BuUWdZobvi2DzRaJl1nqHpMYvMoy25J3t&X-Amz-Signature=b982587a64009de4d6270a010ba47144390cee6682b28ea09a3f86166a8711a4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
