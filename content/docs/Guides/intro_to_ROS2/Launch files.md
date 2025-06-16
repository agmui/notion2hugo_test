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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QIBTWZO%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T150953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCjQCZ5B89LeOQowAG1D7D6RbvcD9aVe3CEfowfhCm42QIhAKj89gEBKStt%2BZMPse%2FyLk27apSlF4Cn%2FUxkyVWGb16yKv8DCF8QABoMNjM3NDIzMTgzODA1Igyh4EXy8TXIE7FtT%2Fkq3AOOVOcI9HiiUwgZc63EngTrkwdzJAiG6tFDayCuCYdyz2UhNtLnGzoo%2FKVs5%2F9Fw5e%2FgOfRf09oPJFDmavTGdLN444anYn7R66x7YLmGRXWKeXZhFBCIRse4QVuakM9l8wu0XqGSoJ3EQqBmvliU7YrfzAfGqMSvOj08zSzOD2%2BEq2SkOUXG40khm7xkoUAdOUVJKVhKmdOaRsjLUfBOB%2Fq9TD9hEpJ3L%2BsWLujzvINqpCPSgEuKzgkEMVx6J6T9NdlGdUyp%2B9CjX1oRrbppMzwntgJpE5X2RjYn7yQgRTtTvplwLRhwAqGxaFtskzIs%2Bb1HH3mQqZTT7Cjkg10jWGVDZJnPsZV%2FqAANpY2JacsnwQSPbY5chAAwuDD%2FqYdjNUhj5SVRMvWzZFLd3IBcqchdafgnEhJN4ytAC2HATrBq3PFlW2kQiH9tNIKIglQA4X7E2BSFUq3sTwjnv3RwQlv2FNyln4J%2FlUuPt0Sk4ygAJd%2Bwc%2BFC5V1NydbvBdPqmmO4XRv%2BshqpOHLhkZ8Dfh%2BNP6iFuXRKpfFhXDb%2B4aHssHE2Q7YIqIl9S5qt8ieSwKdnbxQein76ZasIB6%2BBUJMuMWlcjcxCOXCElXMyqm9QY1C9DiLVLIuZ6guHTDGycDCBjqkAf312jJyfjy4RnWES7X2wXTvVhYuuE3TwF3I4Obc8An%2FPkBF2bBM2jVasSqDK%2FbOAiQZBWmF9QJvs0diCEFkQIPh%2BGT%2F3ecgfWqhjsRMFZ%2BUybMyFX3CEw9zWv1WZazwmMQzfrdALd6vExB1Vla2Ml8BJ9%2B53ETKyDTG%2Fcu4tR%2FRUvbZZDzYR%2FZ%2FeiLgll6lBTvCC%2FPqp3ivPbmXVinTzskgZeRJ&X-Amz-Signature=0be9083a161de62fb1f309a2fb3f4077c523214c9ad3c6a65bf6360d4483ff74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QIBTWZO%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T150953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCjQCZ5B89LeOQowAG1D7D6RbvcD9aVe3CEfowfhCm42QIhAKj89gEBKStt%2BZMPse%2FyLk27apSlF4Cn%2FUxkyVWGb16yKv8DCF8QABoMNjM3NDIzMTgzODA1Igyh4EXy8TXIE7FtT%2Fkq3AOOVOcI9HiiUwgZc63EngTrkwdzJAiG6tFDayCuCYdyz2UhNtLnGzoo%2FKVs5%2F9Fw5e%2FgOfRf09oPJFDmavTGdLN444anYn7R66x7YLmGRXWKeXZhFBCIRse4QVuakM9l8wu0XqGSoJ3EQqBmvliU7YrfzAfGqMSvOj08zSzOD2%2BEq2SkOUXG40khm7xkoUAdOUVJKVhKmdOaRsjLUfBOB%2Fq9TD9hEpJ3L%2BsWLujzvINqpCPSgEuKzgkEMVx6J6T9NdlGdUyp%2B9CjX1oRrbppMzwntgJpE5X2RjYn7yQgRTtTvplwLRhwAqGxaFtskzIs%2Bb1HH3mQqZTT7Cjkg10jWGVDZJnPsZV%2FqAANpY2JacsnwQSPbY5chAAwuDD%2FqYdjNUhj5SVRMvWzZFLd3IBcqchdafgnEhJN4ytAC2HATrBq3PFlW2kQiH9tNIKIglQA4X7E2BSFUq3sTwjnv3RwQlv2FNyln4J%2FlUuPt0Sk4ygAJd%2Bwc%2BFC5V1NydbvBdPqmmO4XRv%2BshqpOHLhkZ8Dfh%2BNP6iFuXRKpfFhXDb%2B4aHssHE2Q7YIqIl9S5qt8ieSwKdnbxQein76ZasIB6%2BBUJMuMWlcjcxCOXCElXMyqm9QY1C9DiLVLIuZ6guHTDGycDCBjqkAf312jJyfjy4RnWES7X2wXTvVhYuuE3TwF3I4Obc8An%2FPkBF2bBM2jVasSqDK%2FbOAiQZBWmF9QJvs0diCEFkQIPh%2BGT%2F3ecgfWqhjsRMFZ%2BUybMyFX3CEw9zWv1WZazwmMQzfrdALd6vExB1Vla2Ml8BJ9%2B53ETKyDTG%2Fcu4tR%2FRUvbZZDzYR%2FZ%2FeiLgll6lBTvCC%2FPqp3ivPbmXVinTzskgZeRJ&X-Amz-Signature=01b55924eb497109c28c15254fa6ec52feaaf2aca6018467db5186041cf56166&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QIBTWZO%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T150953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCjQCZ5B89LeOQowAG1D7D6RbvcD9aVe3CEfowfhCm42QIhAKj89gEBKStt%2BZMPse%2FyLk27apSlF4Cn%2FUxkyVWGb16yKv8DCF8QABoMNjM3NDIzMTgzODA1Igyh4EXy8TXIE7FtT%2Fkq3AOOVOcI9HiiUwgZc63EngTrkwdzJAiG6tFDayCuCYdyz2UhNtLnGzoo%2FKVs5%2F9Fw5e%2FgOfRf09oPJFDmavTGdLN444anYn7R66x7YLmGRXWKeXZhFBCIRse4QVuakM9l8wu0XqGSoJ3EQqBmvliU7YrfzAfGqMSvOj08zSzOD2%2BEq2SkOUXG40khm7xkoUAdOUVJKVhKmdOaRsjLUfBOB%2Fq9TD9hEpJ3L%2BsWLujzvINqpCPSgEuKzgkEMVx6J6T9NdlGdUyp%2B9CjX1oRrbppMzwntgJpE5X2RjYn7yQgRTtTvplwLRhwAqGxaFtskzIs%2Bb1HH3mQqZTT7Cjkg10jWGVDZJnPsZV%2FqAANpY2JacsnwQSPbY5chAAwuDD%2FqYdjNUhj5SVRMvWzZFLd3IBcqchdafgnEhJN4ytAC2HATrBq3PFlW2kQiH9tNIKIglQA4X7E2BSFUq3sTwjnv3RwQlv2FNyln4J%2FlUuPt0Sk4ygAJd%2Bwc%2BFC5V1NydbvBdPqmmO4XRv%2BshqpOHLhkZ8Dfh%2BNP6iFuXRKpfFhXDb%2B4aHssHE2Q7YIqIl9S5qt8ieSwKdnbxQein76ZasIB6%2BBUJMuMWlcjcxCOXCElXMyqm9QY1C9DiLVLIuZ6guHTDGycDCBjqkAf312jJyfjy4RnWES7X2wXTvVhYuuE3TwF3I4Obc8An%2FPkBF2bBM2jVasSqDK%2FbOAiQZBWmF9QJvs0diCEFkQIPh%2BGT%2F3ecgfWqhjsRMFZ%2BUybMyFX3CEw9zWv1WZazwmMQzfrdALd6vExB1Vla2Ml8BJ9%2B53ETKyDTG%2Fcu4tR%2FRUvbZZDzYR%2FZ%2FeiLgll6lBTvCC%2FPqp3ivPbmXVinTzskgZeRJ&X-Amz-Signature=5223cf7eb22cb03c7af0f6412cd1684a3ac38829817d8bbaab816c89c6cdd7be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
