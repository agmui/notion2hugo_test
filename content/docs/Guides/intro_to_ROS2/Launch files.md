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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z2QAHEU%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClnyKliQXxNMY2KHtGsmAoSRKTwy4x3k0WMgAYQKbANQIhAJaBjzwwrldILfoTC2aGQmo872uzc%2F8wwjP2W0L6zkyqKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUpz7hJ3Zv5m%2BTJzQq3ANXvGmv4I0LH93%2FQAULoC7eYXZUlwMqXiQey1r2RSZw1f7%2Fdb4om9qG0emeMPN%2FKTRNqiLhoZXmdAsP0RbCoLN3ZsJJYGoIYIE0gLAcJ%2BHJLv6ocbxKseTvkbbGNKqAqj0Hl5y%2F%2FYrvnu%2Fzt7xZpXbthPiQ8Q8H7cbDzDduuYUuXFbqmotXSrnzwpkHMEXnl9IXcjMwz2cSMkuqI86%2B9oR%2FFPH86vkKAPWwJWSNGf1qpO0QflepeSFpL%2BzIwkBNYtt9zaLdQ72CsnxHfd5lg%2F8Ezt0NFqSAk%2B2LcOUea%2BqaRbpwT%2Bz6SY6q2DNAZ%2FLRZFsByTxxLn%2BadPr0ojpIdUfETxmlR8C%2FGGPZvyjPDSA%2FkDt9BkcnLWuACUxX4zlXRolP8O8Kp02D49mi1GzyxhxE%2F1AIyrxwmMHi1FwjbLy4hOgVSIED0LIXqoC9F2YtLbFvKmEMcr0%2BYpqPjkmyryC5auhIF5Et1p4ixsyAgS3NnxJ16P2xNiOChsQApPkCfRdxngpu1kk1SoLgygixKRS%2FGXwhzdI4pepKni8aReP6MKr97osW0e7gRlj4s9InZf0lN3JXJCHVUz3hTYxOnN1wYAMqa5c4UYH361U%2BAfUJK6%2FYsyzz9uE2rIUJnDDm9LfDBjqkARg6%2Fwe7qiRXOZs2q66wOw9cXdarO70trwpIjo4qb6fmeIwO%2BQPgk%2F0GH%2Feo3fOEgbLWSc%2B5pl%2Fg0GyoVVfpftpDdjgqYsM7AjJ2NxIVKw1tDV48EpQZYzfG0LHVhToKdTZ3WtqQYU379hcf5plXKTNJ2DbKw4Iwb3FNodNu02uHBEZ4mzklCef%2BCzTVReSdkbgOPUojw4l58iYAeWuC34Rdt9tO&X-Amz-Signature=6863a8db3af37ef5311c49cac0feb4f2baf21df8414bf8474c5d6342988be690&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z2QAHEU%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClnyKliQXxNMY2KHtGsmAoSRKTwy4x3k0WMgAYQKbANQIhAJaBjzwwrldILfoTC2aGQmo872uzc%2F8wwjP2W0L6zkyqKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUpz7hJ3Zv5m%2BTJzQq3ANXvGmv4I0LH93%2FQAULoC7eYXZUlwMqXiQey1r2RSZw1f7%2Fdb4om9qG0emeMPN%2FKTRNqiLhoZXmdAsP0RbCoLN3ZsJJYGoIYIE0gLAcJ%2BHJLv6ocbxKseTvkbbGNKqAqj0Hl5y%2F%2FYrvnu%2Fzt7xZpXbthPiQ8Q8H7cbDzDduuYUuXFbqmotXSrnzwpkHMEXnl9IXcjMwz2cSMkuqI86%2B9oR%2FFPH86vkKAPWwJWSNGf1qpO0QflepeSFpL%2BzIwkBNYtt9zaLdQ72CsnxHfd5lg%2F8Ezt0NFqSAk%2B2LcOUea%2BqaRbpwT%2Bz6SY6q2DNAZ%2FLRZFsByTxxLn%2BadPr0ojpIdUfETxmlR8C%2FGGPZvyjPDSA%2FkDt9BkcnLWuACUxX4zlXRolP8O8Kp02D49mi1GzyxhxE%2F1AIyrxwmMHi1FwjbLy4hOgVSIED0LIXqoC9F2YtLbFvKmEMcr0%2BYpqPjkmyryC5auhIF5Et1p4ixsyAgS3NnxJ16P2xNiOChsQApPkCfRdxngpu1kk1SoLgygixKRS%2FGXwhzdI4pepKni8aReP6MKr97osW0e7gRlj4s9InZf0lN3JXJCHVUz3hTYxOnN1wYAMqa5c4UYH361U%2BAfUJK6%2FYsyzz9uE2rIUJnDDm9LfDBjqkARg6%2Fwe7qiRXOZs2q66wOw9cXdarO70trwpIjo4qb6fmeIwO%2BQPgk%2F0GH%2Feo3fOEgbLWSc%2B5pl%2Fg0GyoVVfpftpDdjgqYsM7AjJ2NxIVKw1tDV48EpQZYzfG0LHVhToKdTZ3WtqQYU379hcf5plXKTNJ2DbKw4Iwb3FNodNu02uHBEZ4mzklCef%2BCzTVReSdkbgOPUojw4l58iYAeWuC34Rdt9tO&X-Amz-Signature=ef5b1172a36a892e458ff6cb6f25cd899f157d301d4f392a43de3c6b032089cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z2QAHEU%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T061409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClnyKliQXxNMY2KHtGsmAoSRKTwy4x3k0WMgAYQKbANQIhAJaBjzwwrldILfoTC2aGQmo872uzc%2F8wwjP2W0L6zkyqKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUpz7hJ3Zv5m%2BTJzQq3ANXvGmv4I0LH93%2FQAULoC7eYXZUlwMqXiQey1r2RSZw1f7%2Fdb4om9qG0emeMPN%2FKTRNqiLhoZXmdAsP0RbCoLN3ZsJJYGoIYIE0gLAcJ%2BHJLv6ocbxKseTvkbbGNKqAqj0Hl5y%2F%2FYrvnu%2Fzt7xZpXbthPiQ8Q8H7cbDzDduuYUuXFbqmotXSrnzwpkHMEXnl9IXcjMwz2cSMkuqI86%2B9oR%2FFPH86vkKAPWwJWSNGf1qpO0QflepeSFpL%2BzIwkBNYtt9zaLdQ72CsnxHfd5lg%2F8Ezt0NFqSAk%2B2LcOUea%2BqaRbpwT%2Bz6SY6q2DNAZ%2FLRZFsByTxxLn%2BadPr0ojpIdUfETxmlR8C%2FGGPZvyjPDSA%2FkDt9BkcnLWuACUxX4zlXRolP8O8Kp02D49mi1GzyxhxE%2F1AIyrxwmMHi1FwjbLy4hOgVSIED0LIXqoC9F2YtLbFvKmEMcr0%2BYpqPjkmyryC5auhIF5Et1p4ixsyAgS3NnxJ16P2xNiOChsQApPkCfRdxngpu1kk1SoLgygixKRS%2FGXwhzdI4pepKni8aReP6MKr97osW0e7gRlj4s9InZf0lN3JXJCHVUz3hTYxOnN1wYAMqa5c4UYH361U%2BAfUJK6%2FYsyzz9uE2rIUJnDDm9LfDBjqkARg6%2Fwe7qiRXOZs2q66wOw9cXdarO70trwpIjo4qb6fmeIwO%2BQPgk%2F0GH%2Feo3fOEgbLWSc%2B5pl%2Fg0GyoVVfpftpDdjgqYsM7AjJ2NxIVKw1tDV48EpQZYzfG0LHVhToKdTZ3WtqQYU379hcf5plXKTNJ2DbKw4Iwb3FNodNu02uHBEZ4mzklCef%2BCzTVReSdkbgOPUojw4l58iYAeWuC34Rdt9tO&X-Amz-Signature=04de8b0c34cf7401968125e259d89162e98496c4b9830d965f74fa8afae847b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
