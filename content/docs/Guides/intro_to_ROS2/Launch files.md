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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NPYADOH%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T020706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDkVbT8HiVuBmL6QeBfHiXy5aBORwq4VK2220rjmJNUGQIhAMnfwjwn8csQnbLL6Guya6Fo5pKDmPOF9qZlK2fwwL8TKv8DCCMQABoMNjM3NDIzMTgzODA1Igz%2BkuMAx6QvtjZ2ikAq3AP%2Fm1g0bT234zYzqL84KJf32mfh%2Fozz494BFpahIduAJllTghcPYjntV3iK2KaW6cbaG8YM%2BJ%2Bto1QBSJmk2x64hL%2FbIUjgo9fX50BWWlQEyR5JD3iySEOD8KEeLsM5Rq9MzzCpLHtlR2QhGVkxIs5E0Ql2Ci3tTtWlrWweqxZqf5DCzfEcjd5hCJqdAWXj3A%2B1xhw9uh9ZPmjNfBspMqDzxJtXNdDaatyv3imSJmHsgWPJZEC20JUdYvH6x4tr5v88VaYuBG3s2YKNyNa18vCY29rpcPT%2FlmHfmtfwaJPu2QHDX30cr%2Bq%2BsRwhpXnIJ1Vn%2F59tdqgif0EHpoZbl59u2cE1rRg5xlS2N8ZgXyrLPYil7pbugwZZqmS%2BDRQ8RCJXlFtLST9e3wN3%2BYTIPTSw9kxjWR7KxXVb2ge75Sy%2FJZ%2FByDhAlzIZMIMhjlqPZ49dI7P9Ikzh4u%2F7z9SlXXL4rbtvkO56tR7G8FhiyrbhIXZv50NTHeWHFv%2BEWj9ZHzWz9G%2BhNEwdveV78wa%2FvnULdhwgqRX2vbp0uDs7rRm16BPduwEzjR1Y%2BSX4yT7W4ZBkqHv6uJJFL9LFoPWPUL%2FN5G5SIMVmvUXl2wW2ps8eO%2F1yoWTQoMyarRgqjjCZ6oW9BjqkAYiq9gIZFT9j7TgwXZYRcfULHc7bkTzA%2FGkaO7%2FU5FL99b5KGym9l3oqKh8CZ23E7MjiGms8719kjauE%2Bjf7N6EWgvPv8Of1k7SlokpAc2o7FgaGPH%2BKC%2B1Q9HyV648xfzIY6ob2MRyFFkIL7pBugf17Fxqy6aQSrwgjUPh%2BXKDVFii3bh5wazKtquUuIJxC2NNjweyGdf7DCzBdYdTq4he86%2B1k&X-Amz-Signature=157d3ea7236ddf1315f85bb775c9e21e0ab5d6a5ff1103ea2174f88c2b8ae256&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NPYADOH%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T020706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDkVbT8HiVuBmL6QeBfHiXy5aBORwq4VK2220rjmJNUGQIhAMnfwjwn8csQnbLL6Guya6Fo5pKDmPOF9qZlK2fwwL8TKv8DCCMQABoMNjM3NDIzMTgzODA1Igz%2BkuMAx6QvtjZ2ikAq3AP%2Fm1g0bT234zYzqL84KJf32mfh%2Fozz494BFpahIduAJllTghcPYjntV3iK2KaW6cbaG8YM%2BJ%2Bto1QBSJmk2x64hL%2FbIUjgo9fX50BWWlQEyR5JD3iySEOD8KEeLsM5Rq9MzzCpLHtlR2QhGVkxIs5E0Ql2Ci3tTtWlrWweqxZqf5DCzfEcjd5hCJqdAWXj3A%2B1xhw9uh9ZPmjNfBspMqDzxJtXNdDaatyv3imSJmHsgWPJZEC20JUdYvH6x4tr5v88VaYuBG3s2YKNyNa18vCY29rpcPT%2FlmHfmtfwaJPu2QHDX30cr%2Bq%2BsRwhpXnIJ1Vn%2F59tdqgif0EHpoZbl59u2cE1rRg5xlS2N8ZgXyrLPYil7pbugwZZqmS%2BDRQ8RCJXlFtLST9e3wN3%2BYTIPTSw9kxjWR7KxXVb2ge75Sy%2FJZ%2FByDhAlzIZMIMhjlqPZ49dI7P9Ikzh4u%2F7z9SlXXL4rbtvkO56tR7G8FhiyrbhIXZv50NTHeWHFv%2BEWj9ZHzWz9G%2BhNEwdveV78wa%2FvnULdhwgqRX2vbp0uDs7rRm16BPduwEzjR1Y%2BSX4yT7W4ZBkqHv6uJJFL9LFoPWPUL%2FN5G5SIMVmvUXl2wW2ps8eO%2F1yoWTQoMyarRgqjjCZ6oW9BjqkAYiq9gIZFT9j7TgwXZYRcfULHc7bkTzA%2FGkaO7%2FU5FL99b5KGym9l3oqKh8CZ23E7MjiGms8719kjauE%2Bjf7N6EWgvPv8Of1k7SlokpAc2o7FgaGPH%2BKC%2B1Q9HyV648xfzIY6ob2MRyFFkIL7pBugf17Fxqy6aQSrwgjUPh%2BXKDVFii3bh5wazKtquUuIJxC2NNjweyGdf7DCzBdYdTq4he86%2B1k&X-Amz-Signature=ffa23fb6daf418d7baf0dc0756bc09916b3a8d0765d2607ad212ffe3a132c3a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NPYADOH%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T020706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDkVbT8HiVuBmL6QeBfHiXy5aBORwq4VK2220rjmJNUGQIhAMnfwjwn8csQnbLL6Guya6Fo5pKDmPOF9qZlK2fwwL8TKv8DCCMQABoMNjM3NDIzMTgzODA1Igz%2BkuMAx6QvtjZ2ikAq3AP%2Fm1g0bT234zYzqL84KJf32mfh%2Fozz494BFpahIduAJllTghcPYjntV3iK2KaW6cbaG8YM%2BJ%2Bto1QBSJmk2x64hL%2FbIUjgo9fX50BWWlQEyR5JD3iySEOD8KEeLsM5Rq9MzzCpLHtlR2QhGVkxIs5E0Ql2Ci3tTtWlrWweqxZqf5DCzfEcjd5hCJqdAWXj3A%2B1xhw9uh9ZPmjNfBspMqDzxJtXNdDaatyv3imSJmHsgWPJZEC20JUdYvH6x4tr5v88VaYuBG3s2YKNyNa18vCY29rpcPT%2FlmHfmtfwaJPu2QHDX30cr%2Bq%2BsRwhpXnIJ1Vn%2F59tdqgif0EHpoZbl59u2cE1rRg5xlS2N8ZgXyrLPYil7pbugwZZqmS%2BDRQ8RCJXlFtLST9e3wN3%2BYTIPTSw9kxjWR7KxXVb2ge75Sy%2FJZ%2FByDhAlzIZMIMhjlqPZ49dI7P9Ikzh4u%2F7z9SlXXL4rbtvkO56tR7G8FhiyrbhIXZv50NTHeWHFv%2BEWj9ZHzWz9G%2BhNEwdveV78wa%2FvnULdhwgqRX2vbp0uDs7rRm16BPduwEzjR1Y%2BSX4yT7W4ZBkqHv6uJJFL9LFoPWPUL%2FN5G5SIMVmvUXl2wW2ps8eO%2F1yoWTQoMyarRgqjjCZ6oW9BjqkAYiq9gIZFT9j7TgwXZYRcfULHc7bkTzA%2FGkaO7%2FU5FL99b5KGym9l3oqKh8CZ23E7MjiGms8719kjauE%2Bjf7N6EWgvPv8Of1k7SlokpAc2o7FgaGPH%2BKC%2B1Q9HyV648xfzIY6ob2MRyFFkIL7pBugf17Fxqy6aQSrwgjUPh%2BXKDVFii3bh5wazKtquUuIJxC2NNjweyGdf7DCzBdYdTq4he86%2B1k&X-Amz-Signature=540e3cf7ff5305824f0a312f87c8c2666ebba6531ea8628c555196f34b9f7169&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
