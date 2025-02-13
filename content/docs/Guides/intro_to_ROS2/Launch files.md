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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWNINDGY%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvjRBPAwFLEKk3IiyoCL6y0OEnXWHrGgnLLZkQJePuBAIhALRcGGozltzBpm4%2FgecHvajj0QHbaCSJGlmohep1REg3Kv8DCB4QABoMNjM3NDIzMTgzODA1Igzb3WT8CpndIf9iIq8q3AMJ1LIB%2FxXwjLExgbvYZAIUWwVTf8RRz8EA212U7eFhFu%2Ff3kRh3tTUWO%2FERNmt3WiKzWtZl%2BDls4XqJcCypjzU36AoL6Shfh9xMyUxQ5ij3chy0KvVvrtPqsZNyPs93NKVMhIv15f%2FMBDZ5eXD6PJvsQXPiCOi5DocTQFVhLjl4F0yu%2FLfGlp9lQrkkMzjEXuEY2WD%2BLcaRbgbAu4T%2FnBTxH8AhF7X7RdCQdHvns4o0tJGw5CObYFp%2BQfkWQBG%2FoOLyfRtJBO%2BfJErLONhpKRqkpXNeQ%2Bbb7uDm9juH5qVlvZCCLy1xRszHvKxmsNSN3ZiIigyAovmqS52dpvDz0P3aldLzDNqyvkZC6nHT09sjzNARkuvkagcY5r4IXi8bO%2Bw4Z00mHAc5WJ%2BuHnx0S9TOFLt5HnDvUKqhJvFmhQPwdjI%2FowpqhejgvEdVBSxXtG35thkjypQrjrGoVLkRSx%2Frnqo23BaaO27T%2FkL3MipAeXkd%2F43knHdHrSutBgGMkkMw2YjVxnEPflqG7DVBTKu2h236lFcIkzLpBe723OD3w0M0qA8%2F11LcdSYrr4JxUSpXq%2BmnBqtnvU6sUX%2BTenhE%2Fknfmh3P9oCtFGehW63NE3fh39NYGaBjSa6ZTCHrLm9BjqkAY5J%2F8b3ZFjo53jP7Jf%2BrhPsdFRDp1%2FlOL3fgXbPqifcOQH1LQs4WDGdzwzRabtIt6XxKWnfFVZRkisvh9zpqPAODzZ7In4ciEiJfYpW6kvhTqYTaVLBwv5wkl2%2BMAsVgC2adszfH7KVDj03%2BUwwrdggemPy5m3V27tn7S%2Bm7CkrDoueLoESf7C3wO8xZgs0rXhB2MRh%2FbhU6CXxYdXzq0u3uPpP&X-Amz-Signature=47c57ac0ce196454512e53368e974bd9a1ecd665fd833031c620b52b4e6c80ac&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWNINDGY%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvjRBPAwFLEKk3IiyoCL6y0OEnXWHrGgnLLZkQJePuBAIhALRcGGozltzBpm4%2FgecHvajj0QHbaCSJGlmohep1REg3Kv8DCB4QABoMNjM3NDIzMTgzODA1Igzb3WT8CpndIf9iIq8q3AMJ1LIB%2FxXwjLExgbvYZAIUWwVTf8RRz8EA212U7eFhFu%2Ff3kRh3tTUWO%2FERNmt3WiKzWtZl%2BDls4XqJcCypjzU36AoL6Shfh9xMyUxQ5ij3chy0KvVvrtPqsZNyPs93NKVMhIv15f%2FMBDZ5eXD6PJvsQXPiCOi5DocTQFVhLjl4F0yu%2FLfGlp9lQrkkMzjEXuEY2WD%2BLcaRbgbAu4T%2FnBTxH8AhF7X7RdCQdHvns4o0tJGw5CObYFp%2BQfkWQBG%2FoOLyfRtJBO%2BfJErLONhpKRqkpXNeQ%2Bbb7uDm9juH5qVlvZCCLy1xRszHvKxmsNSN3ZiIigyAovmqS52dpvDz0P3aldLzDNqyvkZC6nHT09sjzNARkuvkagcY5r4IXi8bO%2Bw4Z00mHAc5WJ%2BuHnx0S9TOFLt5HnDvUKqhJvFmhQPwdjI%2FowpqhejgvEdVBSxXtG35thkjypQrjrGoVLkRSx%2Frnqo23BaaO27T%2FkL3MipAeXkd%2F43knHdHrSutBgGMkkMw2YjVxnEPflqG7DVBTKu2h236lFcIkzLpBe723OD3w0M0qA8%2F11LcdSYrr4JxUSpXq%2BmnBqtnvU6sUX%2BTenhE%2Fknfmh3P9oCtFGehW63NE3fh39NYGaBjSa6ZTCHrLm9BjqkAY5J%2F8b3ZFjo53jP7Jf%2BrhPsdFRDp1%2FlOL3fgXbPqifcOQH1LQs4WDGdzwzRabtIt6XxKWnfFVZRkisvh9zpqPAODzZ7In4ciEiJfYpW6kvhTqYTaVLBwv5wkl2%2BMAsVgC2adszfH7KVDj03%2BUwwrdggemPy5m3V27tn7S%2Bm7CkrDoueLoESf7C3wO8xZgs0rXhB2MRh%2FbhU6CXxYdXzq0u3uPpP&X-Amz-Signature=09b518bd3a3d3d282724a4978317f603045085094a5d57c104645193d2f8e9af&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWNINDGY%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvjRBPAwFLEKk3IiyoCL6y0OEnXWHrGgnLLZkQJePuBAIhALRcGGozltzBpm4%2FgecHvajj0QHbaCSJGlmohep1REg3Kv8DCB4QABoMNjM3NDIzMTgzODA1Igzb3WT8CpndIf9iIq8q3AMJ1LIB%2FxXwjLExgbvYZAIUWwVTf8RRz8EA212U7eFhFu%2Ff3kRh3tTUWO%2FERNmt3WiKzWtZl%2BDls4XqJcCypjzU36AoL6Shfh9xMyUxQ5ij3chy0KvVvrtPqsZNyPs93NKVMhIv15f%2FMBDZ5eXD6PJvsQXPiCOi5DocTQFVhLjl4F0yu%2FLfGlp9lQrkkMzjEXuEY2WD%2BLcaRbgbAu4T%2FnBTxH8AhF7X7RdCQdHvns4o0tJGw5CObYFp%2BQfkWQBG%2FoOLyfRtJBO%2BfJErLONhpKRqkpXNeQ%2Bbb7uDm9juH5qVlvZCCLy1xRszHvKxmsNSN3ZiIigyAovmqS52dpvDz0P3aldLzDNqyvkZC6nHT09sjzNARkuvkagcY5r4IXi8bO%2Bw4Z00mHAc5WJ%2BuHnx0S9TOFLt5HnDvUKqhJvFmhQPwdjI%2FowpqhejgvEdVBSxXtG35thkjypQrjrGoVLkRSx%2Frnqo23BaaO27T%2FkL3MipAeXkd%2F43knHdHrSutBgGMkkMw2YjVxnEPflqG7DVBTKu2h236lFcIkzLpBe723OD3w0M0qA8%2F11LcdSYrr4JxUSpXq%2BmnBqtnvU6sUX%2BTenhE%2Fknfmh3P9oCtFGehW63NE3fh39NYGaBjSa6ZTCHrLm9BjqkAY5J%2F8b3ZFjo53jP7Jf%2BrhPsdFRDp1%2FlOL3fgXbPqifcOQH1LQs4WDGdzwzRabtIt6XxKWnfFVZRkisvh9zpqPAODzZ7In4ciEiJfYpW6kvhTqYTaVLBwv5wkl2%2BMAsVgC2adszfH7KVDj03%2BUwwrdggemPy5m3V27tn7S%2Bm7CkrDoueLoESf7C3wO8xZgs0rXhB2MRh%2FbhU6CXxYdXzq0u3uPpP&X-Amz-Signature=269bec47a45c46318b58357303669a8a4f15d40e40c3cf3e6bdf431440240139&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
