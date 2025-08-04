---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDEKSRZ2%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIFe%2BDgZT7g8y0im92CEyBhQO%2B56Mv8%2BKa07V0WuPC7uvAiEAiVVvWMSfoagjMrXx1pcNl50zhZICLX0LzPrz3NMqbO4q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDPfEe%2BFXTEBoQ9fWPSrcA%2BT3ArEJKhPUTJ7Nf0vVaMZp1sv7hvPSIIWRKntpXjXwFat80lNGYee704MkJj9IggMpgxwwdj0HzTdAYqARhH3Tx0ceGsOgncSSy0pNakie89DYnXEEut%2B8z%2FOw1cMwubwNXhY7GMSRgDAG6nkUbA39QZLH5OUlp9JehhfSUozU2ZBGCv8hpVn%2Fd6dGczdiSflXef8gkIIn12iQS2yq%2FYAaWTZmMZ0Su75u9%2F1RAjkHXEqN4nMf9Hy4Kk%2BiwK2A30WqSq2Z%2BGGH30cF9Kwrw9jw%2BIa9EcOp9iLxMAM5%2Bfoo7teQN2qnjBd8Tme5cEHT4cmDvPFBI3fGMy4T57ueVZ9J0Rx5VltfeiLTt6RW%2FRFaxj%2B6u8hPKWNnLq%2Fa%2Fo5bjP%2FgcGaoYxVfh3hVjTUObgYw2RNt7yccu%2BX%2B7VXBgYoFAox0UkCudmVErNQTsNXjNsnsDftiKyNcFz4pYFCC2WQM1ZFyUAfclQTZIJEnYvN2JXyfL4CQMu5WULbspEJE8YZRxfsvbkPWVjDx7w3z67%2BNYq4OvZlzvxvFfSrB2cYm%2B8Bs0k%2FOxy6dr7Y1ql2ZOWVJ6XyUlZa5uQWK35Yae8WB%2Fgni57L3J%2BfJNcfsJb1IErEAqPIHDs6PRxMPMPKcxMQGOqUB0qVulxQbnFhRXwbhC6AF%2FQlEyyS0jUCIfbmN7pRALlcqH4r8KNuix1Ts1bDOVOjxnOUp%2FOqu49nHqZqkAkDB2nPpr0IG%2BhB6Cd7FZLgxqU1ZtQUbHH4tUNBoMGoZv96yZfchcjz5F1TeTOLaFvaCPs44QRNcmJK5lew6pdObHvGEiPsOiS2WcwwUBMVV67P3OP8fxp546V%2BEtfvP0b4iUMI%2F6Kum&X-Amz-Signature=66a0e9ea8519002dcb6228fe562cbb6f56aa2e664e078d1773df3099e24d0445&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDEKSRZ2%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIFe%2BDgZT7g8y0im92CEyBhQO%2B56Mv8%2BKa07V0WuPC7uvAiEAiVVvWMSfoagjMrXx1pcNl50zhZICLX0LzPrz3NMqbO4q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDPfEe%2BFXTEBoQ9fWPSrcA%2BT3ArEJKhPUTJ7Nf0vVaMZp1sv7hvPSIIWRKntpXjXwFat80lNGYee704MkJj9IggMpgxwwdj0HzTdAYqARhH3Tx0ceGsOgncSSy0pNakie89DYnXEEut%2B8z%2FOw1cMwubwNXhY7GMSRgDAG6nkUbA39QZLH5OUlp9JehhfSUozU2ZBGCv8hpVn%2Fd6dGczdiSflXef8gkIIn12iQS2yq%2FYAaWTZmMZ0Su75u9%2F1RAjkHXEqN4nMf9Hy4Kk%2BiwK2A30WqSq2Z%2BGGH30cF9Kwrw9jw%2BIa9EcOp9iLxMAM5%2Bfoo7teQN2qnjBd8Tme5cEHT4cmDvPFBI3fGMy4T57ueVZ9J0Rx5VltfeiLTt6RW%2FRFaxj%2B6u8hPKWNnLq%2Fa%2Fo5bjP%2FgcGaoYxVfh3hVjTUObgYw2RNt7yccu%2BX%2B7VXBgYoFAox0UkCudmVErNQTsNXjNsnsDftiKyNcFz4pYFCC2WQM1ZFyUAfclQTZIJEnYvN2JXyfL4CQMu5WULbspEJE8YZRxfsvbkPWVjDx7w3z67%2BNYq4OvZlzvxvFfSrB2cYm%2B8Bs0k%2FOxy6dr7Y1ql2ZOWVJ6XyUlZa5uQWK35Yae8WB%2Fgni57L3J%2BfJNcfsJb1IErEAqPIHDs6PRxMPMPKcxMQGOqUB0qVulxQbnFhRXwbhC6AF%2FQlEyyS0jUCIfbmN7pRALlcqH4r8KNuix1Ts1bDOVOjxnOUp%2FOqu49nHqZqkAkDB2nPpr0IG%2BhB6Cd7FZLgxqU1ZtQUbHH4tUNBoMGoZv96yZfchcjz5F1TeTOLaFvaCPs44QRNcmJK5lew6pdObHvGEiPsOiS2WcwwUBMVV67P3OP8fxp546V%2BEtfvP0b4iUMI%2F6Kum&X-Amz-Signature=023d0b25b3ce56297f1f86045317e53aec13dda4975cbbdc208825fccd60ac10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDEKSRZ2%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIFe%2BDgZT7g8y0im92CEyBhQO%2B56Mv8%2BKa07V0WuPC7uvAiEAiVVvWMSfoagjMrXx1pcNl50zhZICLX0LzPrz3NMqbO4q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDPfEe%2BFXTEBoQ9fWPSrcA%2BT3ArEJKhPUTJ7Nf0vVaMZp1sv7hvPSIIWRKntpXjXwFat80lNGYee704MkJj9IggMpgxwwdj0HzTdAYqARhH3Tx0ceGsOgncSSy0pNakie89DYnXEEut%2B8z%2FOw1cMwubwNXhY7GMSRgDAG6nkUbA39QZLH5OUlp9JehhfSUozU2ZBGCv8hpVn%2Fd6dGczdiSflXef8gkIIn12iQS2yq%2FYAaWTZmMZ0Su75u9%2F1RAjkHXEqN4nMf9Hy4Kk%2BiwK2A30WqSq2Z%2BGGH30cF9Kwrw9jw%2BIa9EcOp9iLxMAM5%2Bfoo7teQN2qnjBd8Tme5cEHT4cmDvPFBI3fGMy4T57ueVZ9J0Rx5VltfeiLTt6RW%2FRFaxj%2B6u8hPKWNnLq%2Fa%2Fo5bjP%2FgcGaoYxVfh3hVjTUObgYw2RNt7yccu%2BX%2B7VXBgYoFAox0UkCudmVErNQTsNXjNsnsDftiKyNcFz4pYFCC2WQM1ZFyUAfclQTZIJEnYvN2JXyfL4CQMu5WULbspEJE8YZRxfsvbkPWVjDx7w3z67%2BNYq4OvZlzvxvFfSrB2cYm%2B8Bs0k%2FOxy6dr7Y1ql2ZOWVJ6XyUlZa5uQWK35Yae8WB%2Fgni57L3J%2BfJNcfsJb1IErEAqPIHDs6PRxMPMPKcxMQGOqUB0qVulxQbnFhRXwbhC6AF%2FQlEyyS0jUCIfbmN7pRALlcqH4r8KNuix1Ts1bDOVOjxnOUp%2FOqu49nHqZqkAkDB2nPpr0IG%2BhB6Cd7FZLgxqU1ZtQUbHH4tUNBoMGoZv96yZfchcjz5F1TeTOLaFvaCPs44QRNcmJK5lew6pdObHvGEiPsOiS2WcwwUBMVV67P3OP8fxp546V%2BEtfvP0b4iUMI%2F6Kum&X-Amz-Signature=846b995a002ddb2a3f5dd9d6c9f24546bf86679516e8b5201e515eadb7478107&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
