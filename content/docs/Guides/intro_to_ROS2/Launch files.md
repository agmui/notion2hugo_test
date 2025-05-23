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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4N6M5WZ%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T150853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQDGAk8GNSUgs5xlQ9E3c49EyvHsuTLA3wlMf4KfhAVISgIhAITbyQFe%2BP5wgv2XCvU3HH6MI9q6YoAJuZwQwki4g5keKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHeSYO6Hj38oG1MyUq3APW%2BuDLQ1R6%2FyJZ1USurRAaJwPV6l%2FnDbJAQl1JBXy%2BGsW7DwJOMKpTY13oUa7d%2BrxojZRiekMT259Nrc%2BrBqckugI42p6iIySTxQ%2BfYJVCfvlnFVLxInwT0f8Ve5UrC1twziZAq8FyXfkWeJR7mUGQdoFsvFvTY1lxv2pnGWx626%2B9Oq385HsS6ipkG6zO%2BK9TXfP83xBf3Z0peZ0p%2B7s9jNZm9dWOJCAPhFXc8DRTw84juNvlxIjNtrPJNH6skbmUv3l%2F3TNSgL7m7N7tmlqKkB4oLwJ3knJSdALZNreZ7MgWphVta7i9StJPHl9KrfXZ5%2FyCA0dRvwKIrqyhc474OP40iAKb9cOQ94%2BMeXEEIbASwyqe8%2FhuE%2Fv4TsPUzwZhnfwmDZ4c7%2BCmdRgiV8zqJ2bGUnArtuziogQoC%2FztLhSS6DIQgJBNopuuYkmqeEKSbUxdRCfpFhdyDoEx584uEUsSwxW%2Bi9mv8M9evZkpS%2BpzmcuZIgLzLctBRMRiQIS6uLqMujEthjZxCj9x7Vy1lu9J87bMhfPDNNWbNsfz73FYGrfWU60dnNBrcfFynwQdQ%2B6%2FG03VEuxkLq7HwuP68JEcLKtN0aS2ZLATIKl2uPg1sZ6rHWirobENNzDjjsLBBjqkAWFSJONpdcwLnLasCb0rrGOQ4mxCgj76ZYJZrhPlH7ghkYiSSpa8NzKGthPqi0OnaJZuq15nYlpxqfZ%2FuT96%2B70ho7u%2F2zeaQjFLUbTkND71Tr1nUhVMIN7JVKlfEeB2tIz%2FI7PEaihkpz%2BprCGoxQi4uYr8MBIWWGDUs3C3yCMRVZdGFoaY%2BgeceUeFVKQFuQFp8KlM%2F3KBpOmRXwHQm6Q7GQTC&X-Amz-Signature=a45c5cc949c8018043b8a8a30da4cd263e6912e08ba282b593995cc90d6068e5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4N6M5WZ%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T150853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQDGAk8GNSUgs5xlQ9E3c49EyvHsuTLA3wlMf4KfhAVISgIhAITbyQFe%2BP5wgv2XCvU3HH6MI9q6YoAJuZwQwki4g5keKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHeSYO6Hj38oG1MyUq3APW%2BuDLQ1R6%2FyJZ1USurRAaJwPV6l%2FnDbJAQl1JBXy%2BGsW7DwJOMKpTY13oUa7d%2BrxojZRiekMT259Nrc%2BrBqckugI42p6iIySTxQ%2BfYJVCfvlnFVLxInwT0f8Ve5UrC1twziZAq8FyXfkWeJR7mUGQdoFsvFvTY1lxv2pnGWx626%2B9Oq385HsS6ipkG6zO%2BK9TXfP83xBf3Z0peZ0p%2B7s9jNZm9dWOJCAPhFXc8DRTw84juNvlxIjNtrPJNH6skbmUv3l%2F3TNSgL7m7N7tmlqKkB4oLwJ3knJSdALZNreZ7MgWphVta7i9StJPHl9KrfXZ5%2FyCA0dRvwKIrqyhc474OP40iAKb9cOQ94%2BMeXEEIbASwyqe8%2FhuE%2Fv4TsPUzwZhnfwmDZ4c7%2BCmdRgiV8zqJ2bGUnArtuziogQoC%2FztLhSS6DIQgJBNopuuYkmqeEKSbUxdRCfpFhdyDoEx584uEUsSwxW%2Bi9mv8M9evZkpS%2BpzmcuZIgLzLctBRMRiQIS6uLqMujEthjZxCj9x7Vy1lu9J87bMhfPDNNWbNsfz73FYGrfWU60dnNBrcfFynwQdQ%2B6%2FG03VEuxkLq7HwuP68JEcLKtN0aS2ZLATIKl2uPg1sZ6rHWirobENNzDjjsLBBjqkAWFSJONpdcwLnLasCb0rrGOQ4mxCgj76ZYJZrhPlH7ghkYiSSpa8NzKGthPqi0OnaJZuq15nYlpxqfZ%2FuT96%2B70ho7u%2F2zeaQjFLUbTkND71Tr1nUhVMIN7JVKlfEeB2tIz%2FI7PEaihkpz%2BprCGoxQi4uYr8MBIWWGDUs3C3yCMRVZdGFoaY%2BgeceUeFVKQFuQFp8KlM%2F3KBpOmRXwHQm6Q7GQTC&X-Amz-Signature=6f26c9cf8354b8375dad991e2fe276da9e0ddebd36c4b9cc730cb61a849d94e7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4N6M5WZ%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T150853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQDGAk8GNSUgs5xlQ9E3c49EyvHsuTLA3wlMf4KfhAVISgIhAITbyQFe%2BP5wgv2XCvU3HH6MI9q6YoAJuZwQwki4g5keKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHeSYO6Hj38oG1MyUq3APW%2BuDLQ1R6%2FyJZ1USurRAaJwPV6l%2FnDbJAQl1JBXy%2BGsW7DwJOMKpTY13oUa7d%2BrxojZRiekMT259Nrc%2BrBqckugI42p6iIySTxQ%2BfYJVCfvlnFVLxInwT0f8Ve5UrC1twziZAq8FyXfkWeJR7mUGQdoFsvFvTY1lxv2pnGWx626%2B9Oq385HsS6ipkG6zO%2BK9TXfP83xBf3Z0peZ0p%2B7s9jNZm9dWOJCAPhFXc8DRTw84juNvlxIjNtrPJNH6skbmUv3l%2F3TNSgL7m7N7tmlqKkB4oLwJ3knJSdALZNreZ7MgWphVta7i9StJPHl9KrfXZ5%2FyCA0dRvwKIrqyhc474OP40iAKb9cOQ94%2BMeXEEIbASwyqe8%2FhuE%2Fv4TsPUzwZhnfwmDZ4c7%2BCmdRgiV8zqJ2bGUnArtuziogQoC%2FztLhSS6DIQgJBNopuuYkmqeEKSbUxdRCfpFhdyDoEx584uEUsSwxW%2Bi9mv8M9evZkpS%2BpzmcuZIgLzLctBRMRiQIS6uLqMujEthjZxCj9x7Vy1lu9J87bMhfPDNNWbNsfz73FYGrfWU60dnNBrcfFynwQdQ%2B6%2FG03VEuxkLq7HwuP68JEcLKtN0aS2ZLATIKl2uPg1sZ6rHWirobENNzDjjsLBBjqkAWFSJONpdcwLnLasCb0rrGOQ4mxCgj76ZYJZrhPlH7ghkYiSSpa8NzKGthPqi0OnaJZuq15nYlpxqfZ%2FuT96%2B70ho7u%2F2zeaQjFLUbTkND71Tr1nUhVMIN7JVKlfEeB2tIz%2FI7PEaihkpz%2BprCGoxQi4uYr8MBIWWGDUs3C3yCMRVZdGFoaY%2BgeceUeFVKQFuQFp8KlM%2F3KBpOmRXwHQm6Q7GQTC&X-Amz-Signature=6e18a2be02ff2290588f530814ae98d6f22afe1eb9448d797e7d5c408a16a637&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
