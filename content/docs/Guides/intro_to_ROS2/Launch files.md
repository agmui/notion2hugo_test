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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFCDZDSE%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T090935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHYUGnJUtWpqB0QB5lp%2F5ekiWd287%2BQRHEDYwrfI632YAiARRZf0l2lJlRAPoL5QOBo%2F6Qi%2FIyHxDLLuHZyXAyJEHCqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd%2B7ZtfxjNDNidCnxKtwDlPY7R3kfrmNhqHQcos%2FN%2BBDI5sMTItu%2FTCfLQK3HIZuyWJqLjLJXeBC%2FLnYENZIxq1zhoQXwRK%2FO%2FdR9W%2BioSOeXrdLQ%2FFzgt3cjE4foNZUWkUMkAeGg80quQfk%2BUn16LuIa%2BAdgsMW1rm7CfkF9iqCTPbzXofmjkLyhp3FgeEGEpLp3AQ8FIYALCUwAmc2VxqD8eJc%2FxwtthxU31%2FO%2F%2B9bCi8noN3fN6jQTUnWXGo1NRdPxd%2Bi21gaJH8UbkcLqOeZ%2FTRKJSD09yhVWvDuI5cMk7ZHhnQ5veklRDO%2BgIeAzWKBoE5kNNaHokvw7Of%2F9wGDcRODSvPvk5uHU8j1JpWDRKl3bXCZBtGN5osO4wJweSo%2BR%2BbD4608oUxMIplaHQuEja4SGFk%2FuBcddmPp%2BEWx6S4uPuVKQMdj9zykGRFyuoG2pQ0Eiq4moVtDWg31gJEuUv1GvGYcISqFMneen5k4v061JgSN3PeOUrlX4nmaS11qkP7Eo1oEQdZha3C0OG%2FjrVtPS%2FD0ON%2FGbH%2Bg7r%2F1k9cosQAu1uWvHPrWvYwoDJFC3vRughcSiRyE9nRi%2FF2ENKuGj0xhFbD8b88ExHkzjVwZOo70skdOgYYZarJbEVE7OfhTZxl%2BMrpowvOvAwQY6pgEZpPfaYQTezeLu2Vl6e5PE4B6%2BLzDKNKKsWArvcH3hooRUsuw4a%2Bd2dUMgG4ST88X%2FhaPKa8qhA%2FHzYHr%2FgZ3VwuUVcOQzr4YamjXCWsn9kMik82YKPG4jSX0jInJcZ%2FPFsHw6gXy97EVrV4VtG9x1%2FnKzlzfmiVsmew9Hehghe6eHlGwYSVQfAFRbN0%2BA%2FtVJ2tzbHNWEp5AXpKLpCfew7gw7TBZE&X-Amz-Signature=ea34b1acefb33a5e4b8c07fdd06b3b7dc5db69edbed4eebbf7d11922688c0d02&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFCDZDSE%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T090935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHYUGnJUtWpqB0QB5lp%2F5ekiWd287%2BQRHEDYwrfI632YAiARRZf0l2lJlRAPoL5QOBo%2F6Qi%2FIyHxDLLuHZyXAyJEHCqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd%2B7ZtfxjNDNidCnxKtwDlPY7R3kfrmNhqHQcos%2FN%2BBDI5sMTItu%2FTCfLQK3HIZuyWJqLjLJXeBC%2FLnYENZIxq1zhoQXwRK%2FO%2FdR9W%2BioSOeXrdLQ%2FFzgt3cjE4foNZUWkUMkAeGg80quQfk%2BUn16LuIa%2BAdgsMW1rm7CfkF9iqCTPbzXofmjkLyhp3FgeEGEpLp3AQ8FIYALCUwAmc2VxqD8eJc%2FxwtthxU31%2FO%2F%2B9bCi8noN3fN6jQTUnWXGo1NRdPxd%2Bi21gaJH8UbkcLqOeZ%2FTRKJSD09yhVWvDuI5cMk7ZHhnQ5veklRDO%2BgIeAzWKBoE5kNNaHokvw7Of%2F9wGDcRODSvPvk5uHU8j1JpWDRKl3bXCZBtGN5osO4wJweSo%2BR%2BbD4608oUxMIplaHQuEja4SGFk%2FuBcddmPp%2BEWx6S4uPuVKQMdj9zykGRFyuoG2pQ0Eiq4moVtDWg31gJEuUv1GvGYcISqFMneen5k4v061JgSN3PeOUrlX4nmaS11qkP7Eo1oEQdZha3C0OG%2FjrVtPS%2FD0ON%2FGbH%2Bg7r%2F1k9cosQAu1uWvHPrWvYwoDJFC3vRughcSiRyE9nRi%2FF2ENKuGj0xhFbD8b88ExHkzjVwZOo70skdOgYYZarJbEVE7OfhTZxl%2BMrpowvOvAwQY6pgEZpPfaYQTezeLu2Vl6e5PE4B6%2BLzDKNKKsWArvcH3hooRUsuw4a%2Bd2dUMgG4ST88X%2FhaPKa8qhA%2FHzYHr%2FgZ3VwuUVcOQzr4YamjXCWsn9kMik82YKPG4jSX0jInJcZ%2FPFsHw6gXy97EVrV4VtG9x1%2FnKzlzfmiVsmew9Hehghe6eHlGwYSVQfAFRbN0%2BA%2FtVJ2tzbHNWEp5AXpKLpCfew7gw7TBZE&X-Amz-Signature=e88fda0982833842fbf5f71e1f72e057ef66ce3f1e115199bb2a4c28113fc0e6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFCDZDSE%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T090935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHYUGnJUtWpqB0QB5lp%2F5ekiWd287%2BQRHEDYwrfI632YAiARRZf0l2lJlRAPoL5QOBo%2F6Qi%2FIyHxDLLuHZyXAyJEHCqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd%2B7ZtfxjNDNidCnxKtwDlPY7R3kfrmNhqHQcos%2FN%2BBDI5sMTItu%2FTCfLQK3HIZuyWJqLjLJXeBC%2FLnYENZIxq1zhoQXwRK%2FO%2FdR9W%2BioSOeXrdLQ%2FFzgt3cjE4foNZUWkUMkAeGg80quQfk%2BUn16LuIa%2BAdgsMW1rm7CfkF9iqCTPbzXofmjkLyhp3FgeEGEpLp3AQ8FIYALCUwAmc2VxqD8eJc%2FxwtthxU31%2FO%2F%2B9bCi8noN3fN6jQTUnWXGo1NRdPxd%2Bi21gaJH8UbkcLqOeZ%2FTRKJSD09yhVWvDuI5cMk7ZHhnQ5veklRDO%2BgIeAzWKBoE5kNNaHokvw7Of%2F9wGDcRODSvPvk5uHU8j1JpWDRKl3bXCZBtGN5osO4wJweSo%2BR%2BbD4608oUxMIplaHQuEja4SGFk%2FuBcddmPp%2BEWx6S4uPuVKQMdj9zykGRFyuoG2pQ0Eiq4moVtDWg31gJEuUv1GvGYcISqFMneen5k4v061JgSN3PeOUrlX4nmaS11qkP7Eo1oEQdZha3C0OG%2FjrVtPS%2FD0ON%2FGbH%2Bg7r%2F1k9cosQAu1uWvHPrWvYwoDJFC3vRughcSiRyE9nRi%2FF2ENKuGj0xhFbD8b88ExHkzjVwZOo70skdOgYYZarJbEVE7OfhTZxl%2BMrpowvOvAwQY6pgEZpPfaYQTezeLu2Vl6e5PE4B6%2BLzDKNKKsWArvcH3hooRUsuw4a%2Bd2dUMgG4ST88X%2FhaPKa8qhA%2FHzYHr%2FgZ3VwuUVcOQzr4YamjXCWsn9kMik82YKPG4jSX0jInJcZ%2FPFsHw6gXy97EVrV4VtG9x1%2FnKzlzfmiVsmew9Hehghe6eHlGwYSVQfAFRbN0%2BA%2FtVJ2tzbHNWEp5AXpKLpCfew7gw7TBZE&X-Amz-Signature=37d6b73a0599334e0e8d0ceb2ac58f3b63811dc99370568a3b63d0f7f3db7bc3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
