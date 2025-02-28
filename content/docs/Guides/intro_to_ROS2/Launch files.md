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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BXFD65Q%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T121343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCICUq0YIFuHacz1QepvF0JY3ann5ppEgHmWEL2BHGH8gSAiBA4BMiUS9U9cOxnGBch4g9rKHgWyvWp2%2BzfbCTKC100SqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg6fLgF93GNzu7UQqKtwDLkrCWK81zniY6tqoKihj7FxbLHfoe0FB2Nf4TTqgBqDsYctH%2BgwQ9YY9SqfaY2WvysGFC4aWNX%2Bghvoma8VOvFWdej9LLDVLRPmTW17osMHsMti%2BrkD4IozpF%2BqmKrlAOPYnmaNBRzqdSdFo3D%2FUxdftJIsDhSSHbkntLB4z%2FOv2r2UVZLWhc21htNNmI5Zg%2Fv1900sMqqYZzYfSktF3pCPCCS76vsP9y5nBNBXTtHnJtXTUr17R%2FycfrgVhUj1eUG5ihDxlNydsL3fSqM16hJHr3KJJSdrw4%2Fd3LyLCRbMGw8JyN0TEDwZcvap856JSByj%2BoT5L53tgpA%2Fx1od%2FAsUWwZJ8m46NAkMsSEJfk4ZkCeE8iEzKr2N%2BGxDaSuJNgBA%2BT%2BYIBg6Z5cYyQ6HgjcS4GmKSRt8nbsQPbumKdTiHg8yxwmhYelOaQeBZIDv%2BTSXdBX7w3B7WtD2%2BWNUXvqDSjU5P1JaYKX0d4%2B%2FOtrs0lm2bjNivamr%2BZyW%2FdFTRYQ%2B%2Bkxjqr4Pa9EDu2YzzKEZW5x8BfzH6%2Fr436fWTwj0kqZAP%2BaCokUiQFYkdMc0Vb0VIPYaLQKIav89mMvPU%2FglliRN81LTPJd5jh%2BjCYjTxRLNnxWFP5VI%2BX6EwvdCGvgY6pgG%2Fw91vBXRMvT3AvLy4yEcSb8GIY5iqHH%2FZwroqilkEm5AAOYkVeWP%2FvXH6iVN54OJM6QTG8CmM6xOXSrohM%2BtxEfiQJ7BBCZsHrg1yveoZJrMc0qAlLMQtpCxYT8O6rZXos2zakdlM1qalxfmbNz8OGg%2FBxOmb%2FBMcvd1hQ%2FXuda%2BRFI1jwKyhOknKgIfiMy%2BCofcG9FanMZDRwrFbNSZM52oTa3Wb&X-Amz-Signature=64d680368ab7cafcfb4e1045bc46ec94883bcc482d168ba46a43d0fc3ed6530b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BXFD65Q%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T121343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCICUq0YIFuHacz1QepvF0JY3ann5ppEgHmWEL2BHGH8gSAiBA4BMiUS9U9cOxnGBch4g9rKHgWyvWp2%2BzfbCTKC100SqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg6fLgF93GNzu7UQqKtwDLkrCWK81zniY6tqoKihj7FxbLHfoe0FB2Nf4TTqgBqDsYctH%2BgwQ9YY9SqfaY2WvysGFC4aWNX%2Bghvoma8VOvFWdej9LLDVLRPmTW17osMHsMti%2BrkD4IozpF%2BqmKrlAOPYnmaNBRzqdSdFo3D%2FUxdftJIsDhSSHbkntLB4z%2FOv2r2UVZLWhc21htNNmI5Zg%2Fv1900sMqqYZzYfSktF3pCPCCS76vsP9y5nBNBXTtHnJtXTUr17R%2FycfrgVhUj1eUG5ihDxlNydsL3fSqM16hJHr3KJJSdrw4%2Fd3LyLCRbMGw8JyN0TEDwZcvap856JSByj%2BoT5L53tgpA%2Fx1od%2FAsUWwZJ8m46NAkMsSEJfk4ZkCeE8iEzKr2N%2BGxDaSuJNgBA%2BT%2BYIBg6Z5cYyQ6HgjcS4GmKSRt8nbsQPbumKdTiHg8yxwmhYelOaQeBZIDv%2BTSXdBX7w3B7WtD2%2BWNUXvqDSjU5P1JaYKX0d4%2B%2FOtrs0lm2bjNivamr%2BZyW%2FdFTRYQ%2B%2Bkxjqr4Pa9EDu2YzzKEZW5x8BfzH6%2Fr436fWTwj0kqZAP%2BaCokUiQFYkdMc0Vb0VIPYaLQKIav89mMvPU%2FglliRN81LTPJd5jh%2BjCYjTxRLNnxWFP5VI%2BX6EwvdCGvgY6pgG%2Fw91vBXRMvT3AvLy4yEcSb8GIY5iqHH%2FZwroqilkEm5AAOYkVeWP%2FvXH6iVN54OJM6QTG8CmM6xOXSrohM%2BtxEfiQJ7BBCZsHrg1yveoZJrMc0qAlLMQtpCxYT8O6rZXos2zakdlM1qalxfmbNz8OGg%2FBxOmb%2FBMcvd1hQ%2FXuda%2BRFI1jwKyhOknKgIfiMy%2BCofcG9FanMZDRwrFbNSZM52oTa3Wb&X-Amz-Signature=080ba2bef9bd629c560e29bafee78b30f70b68a33949b0006ca2d87659a2f777&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BXFD65Q%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T121343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCICUq0YIFuHacz1QepvF0JY3ann5ppEgHmWEL2BHGH8gSAiBA4BMiUS9U9cOxnGBch4g9rKHgWyvWp2%2BzfbCTKC100SqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg6fLgF93GNzu7UQqKtwDLkrCWK81zniY6tqoKihj7FxbLHfoe0FB2Nf4TTqgBqDsYctH%2BgwQ9YY9SqfaY2WvysGFC4aWNX%2Bghvoma8VOvFWdej9LLDVLRPmTW17osMHsMti%2BrkD4IozpF%2BqmKrlAOPYnmaNBRzqdSdFo3D%2FUxdftJIsDhSSHbkntLB4z%2FOv2r2UVZLWhc21htNNmI5Zg%2Fv1900sMqqYZzYfSktF3pCPCCS76vsP9y5nBNBXTtHnJtXTUr17R%2FycfrgVhUj1eUG5ihDxlNydsL3fSqM16hJHr3KJJSdrw4%2Fd3LyLCRbMGw8JyN0TEDwZcvap856JSByj%2BoT5L53tgpA%2Fx1od%2FAsUWwZJ8m46NAkMsSEJfk4ZkCeE8iEzKr2N%2BGxDaSuJNgBA%2BT%2BYIBg6Z5cYyQ6HgjcS4GmKSRt8nbsQPbumKdTiHg8yxwmhYelOaQeBZIDv%2BTSXdBX7w3B7WtD2%2BWNUXvqDSjU5P1JaYKX0d4%2B%2FOtrs0lm2bjNivamr%2BZyW%2FdFTRYQ%2B%2Bkxjqr4Pa9EDu2YzzKEZW5x8BfzH6%2Fr436fWTwj0kqZAP%2BaCokUiQFYkdMc0Vb0VIPYaLQKIav89mMvPU%2FglliRN81LTPJd5jh%2BjCYjTxRLNnxWFP5VI%2BX6EwvdCGvgY6pgG%2Fw91vBXRMvT3AvLy4yEcSb8GIY5iqHH%2FZwroqilkEm5AAOYkVeWP%2FvXH6iVN54OJM6QTG8CmM6xOXSrohM%2BtxEfiQJ7BBCZsHrg1yveoZJrMc0qAlLMQtpCxYT8O6rZXos2zakdlM1qalxfmbNz8OGg%2FBxOmb%2FBMcvd1hQ%2FXuda%2BRFI1jwKyhOknKgIfiMy%2BCofcG9FanMZDRwrFbNSZM52oTa3Wb&X-Amz-Signature=a22abd5d75d9f95694a78e74eb036bed7f278542e3faf9cad059a0a6dd02d057&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
