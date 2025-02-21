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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNWNMQ67%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T021039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbZAff%2FsHVwYDULsEA1X6PozQ0TCCQ89HOvOofglIRzAIhAO7jTUoIDIDk2eKUiSM37osm9w5KfmEC7NFxrW8O09sLKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igze9itzWxcMy1LY9jsq3APpc2qDTGxu%2BwP1HFNWhBlDoWGZ7XVAVweIaLj6aXWrSOkPYVRst4BARKrJS3IRYIxgBZdAIwp6qq31YAHvv2mxC3P9XjTai0b8nv5AVg4EjI6XgFfdYvSZVZ0dsk6oGRsqD0uBAMaRFMcWl%2FSQTGIyY808fQ5AEVYlhEW9eWrO2pZ50d29EEFMcmOxGksvzo%2F6IujoA8FXD%2BZI5vUrUZD%2BcJXvGvo%2Fvj3Wh5SaG4s%2Fknz%2BPy2rufc0O5ytYxtiKQP5JwYClub6jrDhrMv%2B06SBF3OiEhQkJQPoZRxfn0JLVtxoUx%2BIWhCLLsI7CvOOBG0gU2GUwpEC%2Bve2iTvn5WkuUYvZoacf2m60fvzJ%2Fp5MEEhy0ppljwqm3Na5L7TgmuziyfXQmFBo0YaIqOSyhoZwKsA5CfjYTMAMEguTa9suYINV41T8t6r0%2BTZPsKoq84aKyE%2Bddr6EHIuy5tbtwT13GLd25wyLaFXLdWJ8qwuLEzqR7QDkJrdwU4hSQG1120NFzU2s54gsHc1i6viMBs7387p2nZ7sgRvb4bkt4P%2FjZeCJ17wKjdBgERK2wGuILTbZ7bkB1kqYeQwHrSqXB6moku1OUWTM8CY5M7BKgxiaL5OX7CdA9t%2Bx9oQ39zDFhN%2B9BjqkAShWCpIe54FAXc6oDQS7W8OpPSiQIZZTU3DYqz7j5ioq0DPN1OsEcz2wGxOh5DFIDI3LPeMzY8cb15ZhSeifew2%2F0yzB5EjokXsNybl4qDLWEBdxLWzEp1AwxeK5fFG0Xk%2FD3sG9d0xWZkqLJE98GBW4aJ3i9BKfAD2WPKuNOvHfqv%2B8XKyJCRbcGv8TidmAe04aPRqh36%2B1u8YWvjk0fmTyiczT&X-Amz-Signature=73d1a1102a5d91fef4a94cec6bd038c6edf90a7359badab0a44608c7734a4bfb&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNWNMQ67%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T021039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbZAff%2FsHVwYDULsEA1X6PozQ0TCCQ89HOvOofglIRzAIhAO7jTUoIDIDk2eKUiSM37osm9w5KfmEC7NFxrW8O09sLKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igze9itzWxcMy1LY9jsq3APpc2qDTGxu%2BwP1HFNWhBlDoWGZ7XVAVweIaLj6aXWrSOkPYVRst4BARKrJS3IRYIxgBZdAIwp6qq31YAHvv2mxC3P9XjTai0b8nv5AVg4EjI6XgFfdYvSZVZ0dsk6oGRsqD0uBAMaRFMcWl%2FSQTGIyY808fQ5AEVYlhEW9eWrO2pZ50d29EEFMcmOxGksvzo%2F6IujoA8FXD%2BZI5vUrUZD%2BcJXvGvo%2Fvj3Wh5SaG4s%2Fknz%2BPy2rufc0O5ytYxtiKQP5JwYClub6jrDhrMv%2B06SBF3OiEhQkJQPoZRxfn0JLVtxoUx%2BIWhCLLsI7CvOOBG0gU2GUwpEC%2Bve2iTvn5WkuUYvZoacf2m60fvzJ%2Fp5MEEhy0ppljwqm3Na5L7TgmuziyfXQmFBo0YaIqOSyhoZwKsA5CfjYTMAMEguTa9suYINV41T8t6r0%2BTZPsKoq84aKyE%2Bddr6EHIuy5tbtwT13GLd25wyLaFXLdWJ8qwuLEzqR7QDkJrdwU4hSQG1120NFzU2s54gsHc1i6viMBs7387p2nZ7sgRvb4bkt4P%2FjZeCJ17wKjdBgERK2wGuILTbZ7bkB1kqYeQwHrSqXB6moku1OUWTM8CY5M7BKgxiaL5OX7CdA9t%2Bx9oQ39zDFhN%2B9BjqkAShWCpIe54FAXc6oDQS7W8OpPSiQIZZTU3DYqz7j5ioq0DPN1OsEcz2wGxOh5DFIDI3LPeMzY8cb15ZhSeifew2%2F0yzB5EjokXsNybl4qDLWEBdxLWzEp1AwxeK5fFG0Xk%2FD3sG9d0xWZkqLJE98GBW4aJ3i9BKfAD2WPKuNOvHfqv%2B8XKyJCRbcGv8TidmAe04aPRqh36%2B1u8YWvjk0fmTyiczT&X-Amz-Signature=437921c4e6eed1ace392f19b4d1be956d0b1d54b62c35a6c375ab5ac8a60045e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNWNMQ67%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T021039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbZAff%2FsHVwYDULsEA1X6PozQ0TCCQ89HOvOofglIRzAIhAO7jTUoIDIDk2eKUiSM37osm9w5KfmEC7NFxrW8O09sLKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igze9itzWxcMy1LY9jsq3APpc2qDTGxu%2BwP1HFNWhBlDoWGZ7XVAVweIaLj6aXWrSOkPYVRst4BARKrJS3IRYIxgBZdAIwp6qq31YAHvv2mxC3P9XjTai0b8nv5AVg4EjI6XgFfdYvSZVZ0dsk6oGRsqD0uBAMaRFMcWl%2FSQTGIyY808fQ5AEVYlhEW9eWrO2pZ50d29EEFMcmOxGksvzo%2F6IujoA8FXD%2BZI5vUrUZD%2BcJXvGvo%2Fvj3Wh5SaG4s%2Fknz%2BPy2rufc0O5ytYxtiKQP5JwYClub6jrDhrMv%2B06SBF3OiEhQkJQPoZRxfn0JLVtxoUx%2BIWhCLLsI7CvOOBG0gU2GUwpEC%2Bve2iTvn5WkuUYvZoacf2m60fvzJ%2Fp5MEEhy0ppljwqm3Na5L7TgmuziyfXQmFBo0YaIqOSyhoZwKsA5CfjYTMAMEguTa9suYINV41T8t6r0%2BTZPsKoq84aKyE%2Bddr6EHIuy5tbtwT13GLd25wyLaFXLdWJ8qwuLEzqR7QDkJrdwU4hSQG1120NFzU2s54gsHc1i6viMBs7387p2nZ7sgRvb4bkt4P%2FjZeCJ17wKjdBgERK2wGuILTbZ7bkB1kqYeQwHrSqXB6moku1OUWTM8CY5M7BKgxiaL5OX7CdA9t%2Bx9oQ39zDFhN%2B9BjqkAShWCpIe54FAXc6oDQS7W8OpPSiQIZZTU3DYqz7j5ioq0DPN1OsEcz2wGxOh5DFIDI3LPeMzY8cb15ZhSeifew2%2F0yzB5EjokXsNybl4qDLWEBdxLWzEp1AwxeK5fFG0Xk%2FD3sG9d0xWZkqLJE98GBW4aJ3i9BKfAD2WPKuNOvHfqv%2B8XKyJCRbcGv8TidmAe04aPRqh36%2B1u8YWvjk0fmTyiczT&X-Amz-Signature=4ca0b3749c956c3e30e1d48122071950021f4be06526e41dd718a019ed878e9a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
