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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKNB73BA%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T220115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIADivf6pAVWOW5j5MIJJXuLPeS3wtIvNg32o90olQrQxAiEA1Tg9F9vymVL15JsbzvFtbc3DHWOhkB%2Fd8q9Xk2gtrYsqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BA2etRW3qiflwfEyrcA3BPjDvIif5zgwVcEuJAQMGwYb8NMYmEIVP%2FnC1EUpbzVYJRP0K8bv0yJdt8hESBkWTTmOcwwQaCf4PqkvLWwunU5D%2FQD7d838xpX9DwdvQqzbWFqlGRqAokr4DR1FxwS6uXXIe8LSBwxDCR1BjgII6YRVFbAmVArEktCg9yWuW1sgTmp4Gd9HqNhR3mfgn%2BrzUtyerr%2BKDmIWkOaidxNqR%2FWDpr%2Fqu1XAtxYbtNX8n6QBNnjd%2FacXqEOf5yuC9kHdSRK5BhCOkD4c9n7%2BELv09KjRmC4eAb3ZjbV6YaosC6uMsn0XTaGh8J9fMEGim4JIHeB6O2R0aDYWNWtZhuNNNWVctym89q9%2BjJkPEVliYu39iULYCk5m9rTjk0q1xCJnJUM2IcyKG9Mi5K%2Bx85OMybYfqxDYSMfDP6Fqu0tvAf%2B%2FurKggDBzp4BQS9rTEJ1ixZzu2JHVIqzSMnJGUu4bVSJx%2FJjzlMr%2BSgRlsN%2FINzBFy3OmTnx7UXQmNVvyTxQkgzI7GiXCFywbJJPS8hmYzJJZ%2F4uXC003rlGBhWMQinOB%2BzIsWu7ZvrMOLdgl3ozsTaLALFhhNNx2dNnPVFAqkn2t4D81UyZV03QynaJ2%2BiVhxWXfqXJIuNaOhrMJay%2BrwGOqUBWT6L%2BHxbf7giJFYkhIIN%2BuytamRGYOrO6gjL61%2BAF5WVzxiy%2FX99kVbN7V%2Fc8nK2IryfWUvEjPzSr7z9RIGrU0K1QYLwoPyaVJwkDVUfRORm2AhouRMBGciHldF1FoP6X9kZnjl%2FYM%2BcngoX%2BGbicgqvTsZ4nLLmZW%2BUaSfugX8ym9VTrY3bpdK4URhzUAciD%2FnFvHmF9Tfc3j3qdrJmkrVnMjqT&X-Amz-Signature=a3288b5db239ca5a2307fd20909e9f527fdc612101a81934c0c4b47b847aee70&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKNB73BA%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T220115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIADivf6pAVWOW5j5MIJJXuLPeS3wtIvNg32o90olQrQxAiEA1Tg9F9vymVL15JsbzvFtbc3DHWOhkB%2Fd8q9Xk2gtrYsqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BA2etRW3qiflwfEyrcA3BPjDvIif5zgwVcEuJAQMGwYb8NMYmEIVP%2FnC1EUpbzVYJRP0K8bv0yJdt8hESBkWTTmOcwwQaCf4PqkvLWwunU5D%2FQD7d838xpX9DwdvQqzbWFqlGRqAokr4DR1FxwS6uXXIe8LSBwxDCR1BjgII6YRVFbAmVArEktCg9yWuW1sgTmp4Gd9HqNhR3mfgn%2BrzUtyerr%2BKDmIWkOaidxNqR%2FWDpr%2Fqu1XAtxYbtNX8n6QBNnjd%2FacXqEOf5yuC9kHdSRK5BhCOkD4c9n7%2BELv09KjRmC4eAb3ZjbV6YaosC6uMsn0XTaGh8J9fMEGim4JIHeB6O2R0aDYWNWtZhuNNNWVctym89q9%2BjJkPEVliYu39iULYCk5m9rTjk0q1xCJnJUM2IcyKG9Mi5K%2Bx85OMybYfqxDYSMfDP6Fqu0tvAf%2B%2FurKggDBzp4BQS9rTEJ1ixZzu2JHVIqzSMnJGUu4bVSJx%2FJjzlMr%2BSgRlsN%2FINzBFy3OmTnx7UXQmNVvyTxQkgzI7GiXCFywbJJPS8hmYzJJZ%2F4uXC003rlGBhWMQinOB%2BzIsWu7ZvrMOLdgl3ozsTaLALFhhNNx2dNnPVFAqkn2t4D81UyZV03QynaJ2%2BiVhxWXfqXJIuNaOhrMJay%2BrwGOqUBWT6L%2BHxbf7giJFYkhIIN%2BuytamRGYOrO6gjL61%2BAF5WVzxiy%2FX99kVbN7V%2Fc8nK2IryfWUvEjPzSr7z9RIGrU0K1QYLwoPyaVJwkDVUfRORm2AhouRMBGciHldF1FoP6X9kZnjl%2FYM%2BcngoX%2BGbicgqvTsZ4nLLmZW%2BUaSfugX8ym9VTrY3bpdK4URhzUAciD%2FnFvHmF9Tfc3j3qdrJmkrVnMjqT&X-Amz-Signature=968e8fa77d5f3a2e32bb258fd3b6ba9abd8afb1ac31f8b8a2bda4d097e05b1fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKNB73BA%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T220115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIADivf6pAVWOW5j5MIJJXuLPeS3wtIvNg32o90olQrQxAiEA1Tg9F9vymVL15JsbzvFtbc3DHWOhkB%2Fd8q9Xk2gtrYsqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BA2etRW3qiflwfEyrcA3BPjDvIif5zgwVcEuJAQMGwYb8NMYmEIVP%2FnC1EUpbzVYJRP0K8bv0yJdt8hESBkWTTmOcwwQaCf4PqkvLWwunU5D%2FQD7d838xpX9DwdvQqzbWFqlGRqAokr4DR1FxwS6uXXIe8LSBwxDCR1BjgII6YRVFbAmVArEktCg9yWuW1sgTmp4Gd9HqNhR3mfgn%2BrzUtyerr%2BKDmIWkOaidxNqR%2FWDpr%2Fqu1XAtxYbtNX8n6QBNnjd%2FacXqEOf5yuC9kHdSRK5BhCOkD4c9n7%2BELv09KjRmC4eAb3ZjbV6YaosC6uMsn0XTaGh8J9fMEGim4JIHeB6O2R0aDYWNWtZhuNNNWVctym89q9%2BjJkPEVliYu39iULYCk5m9rTjk0q1xCJnJUM2IcyKG9Mi5K%2Bx85OMybYfqxDYSMfDP6Fqu0tvAf%2B%2FurKggDBzp4BQS9rTEJ1ixZzu2JHVIqzSMnJGUu4bVSJx%2FJjzlMr%2BSgRlsN%2FINzBFy3OmTnx7UXQmNVvyTxQkgzI7GiXCFywbJJPS8hmYzJJZ%2F4uXC003rlGBhWMQinOB%2BzIsWu7ZvrMOLdgl3ozsTaLALFhhNNx2dNnPVFAqkn2t4D81UyZV03QynaJ2%2BiVhxWXfqXJIuNaOhrMJay%2BrwGOqUBWT6L%2BHxbf7giJFYkhIIN%2BuytamRGYOrO6gjL61%2BAF5WVzxiy%2FX99kVbN7V%2Fc8nK2IryfWUvEjPzSr7z9RIGrU0K1QYLwoPyaVJwkDVUfRORm2AhouRMBGciHldF1FoP6X9kZnjl%2FYM%2BcngoX%2BGbicgqvTsZ4nLLmZW%2BUaSfugX8ym9VTrY3bpdK4URhzUAciD%2FnFvHmF9Tfc3j3qdrJmkrVnMjqT&X-Amz-Signature=81d90017b27c2f984b1be90490b733431a0dccbab7c33c99c85d68df16ece4b0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
