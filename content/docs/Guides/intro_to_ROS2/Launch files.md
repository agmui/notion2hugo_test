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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYZE4XJP%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T003708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIGofAHsIWb7yOPP7jvJx%2FxGoSw3bMYGvn0WaR8ux0BZZAiAWUd6IbckZiyzRrlawmPGmZJ9zlySQGNNt%2FWbLm9kp8yr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMXa4u3v8P16oodYwWKtwDctguE4dfNMxoWauz5JTP1CygUPRT4%2BHiRdNQNAuHEcNDe8dPqIBktIO5t3DDNgowB%2FsPP6KImL5iH0sCkIWp7pN%2BKrImZ6Ms5PDQk92S5Igl%2Fzbp9KEA3BH71xgwMP85zu0rI%2Bt9aDhY5eUz%2Fd1wRgaaAv7F8rTZjeXjQjI8%2BvL2%2F6RqrrYX0BHNnNNYvez2GKlbfqmXdqNz6RlygXWgcjXb15XMsP4G%2BmmrrjSMgf4WQkL8beUlbdd197yFt%2BzWL1e0I95VmRz09gHZQL%2BgJ9gQ9b1Gs%2B3D78i9hrYyYy0G8mVEZjEGcgUcf9PGuUWtGwfsnlGAGx9%2BQIZGSjL9Ifcgk58ydEfUO32k%2BjeJja%2B9RKK9VJmSljiJwjGrXesWAszFqfNW0ozGsvgrM67IqmEKbYF5uF9JHwIijj%2Fi%2BR7P8OWT7jIo1blA9koU8sYt0w9fEhlale4qfOPkfZb%2FEpiBuICwRtra%2FkyT4Cf8ZydKWFjs4ahAU4PIkS86sEz6ZZL137tkjBWAgQvyHVVPJsnrVw1Zwpe7OH8cB%2BUctxXVor3LpiNKsXoV5B2wSCgQTPbqJKMxvbW8j6nqFhkYM8xPUs%2FOOV%2FNF1mxjaqWnGbKtQzHaFVwRa0YeeEw3tf%2BvQY6pgEcX9vYCblEOp7g1SYVFdHmmmSExsEl016D0X6r13zDadS4K07zAx5E%2Bu8n2q7BC3BlZx%2FmCd70pK8gqlIDvKpUsnd3SfAO%2FLYqxHCcjVS7eJbhUVXUTZmFNvEMrDK67tH6qY6N6Bkc8py0AjjsGjOSwT0P%2BMSwcYFyd9tfekXMzfLjBaPPgNmSZdlruKIf8F9UkgtjQ1AQXTSHFb9eR6Rx1VcKHehW&X-Amz-Signature=7870ebe4edd77ab4c9a1325059c0a713a92f9b33a7fb9035426eb94246018335&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYZE4XJP%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T003708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIGofAHsIWb7yOPP7jvJx%2FxGoSw3bMYGvn0WaR8ux0BZZAiAWUd6IbckZiyzRrlawmPGmZJ9zlySQGNNt%2FWbLm9kp8yr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMXa4u3v8P16oodYwWKtwDctguE4dfNMxoWauz5JTP1CygUPRT4%2BHiRdNQNAuHEcNDe8dPqIBktIO5t3DDNgowB%2FsPP6KImL5iH0sCkIWp7pN%2BKrImZ6Ms5PDQk92S5Igl%2Fzbp9KEA3BH71xgwMP85zu0rI%2Bt9aDhY5eUz%2Fd1wRgaaAv7F8rTZjeXjQjI8%2BvL2%2F6RqrrYX0BHNnNNYvez2GKlbfqmXdqNz6RlygXWgcjXb15XMsP4G%2BmmrrjSMgf4WQkL8beUlbdd197yFt%2BzWL1e0I95VmRz09gHZQL%2BgJ9gQ9b1Gs%2B3D78i9hrYyYy0G8mVEZjEGcgUcf9PGuUWtGwfsnlGAGx9%2BQIZGSjL9Ifcgk58ydEfUO32k%2BjeJja%2B9RKK9VJmSljiJwjGrXesWAszFqfNW0ozGsvgrM67IqmEKbYF5uF9JHwIijj%2Fi%2BR7P8OWT7jIo1blA9koU8sYt0w9fEhlale4qfOPkfZb%2FEpiBuICwRtra%2FkyT4Cf8ZydKWFjs4ahAU4PIkS86sEz6ZZL137tkjBWAgQvyHVVPJsnrVw1Zwpe7OH8cB%2BUctxXVor3LpiNKsXoV5B2wSCgQTPbqJKMxvbW8j6nqFhkYM8xPUs%2FOOV%2FNF1mxjaqWnGbKtQzHaFVwRa0YeeEw3tf%2BvQY6pgEcX9vYCblEOp7g1SYVFdHmmmSExsEl016D0X6r13zDadS4K07zAx5E%2Bu8n2q7BC3BlZx%2FmCd70pK8gqlIDvKpUsnd3SfAO%2FLYqxHCcjVS7eJbhUVXUTZmFNvEMrDK67tH6qY6N6Bkc8py0AjjsGjOSwT0P%2BMSwcYFyd9tfekXMzfLjBaPPgNmSZdlruKIf8F9UkgtjQ1AQXTSHFb9eR6Rx1VcKHehW&X-Amz-Signature=f11b11a3fcce99b3b9be15b0ae3531cf0603d8681d61df03ad98fdb0a2e24b8f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYZE4XJP%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T003708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIGofAHsIWb7yOPP7jvJx%2FxGoSw3bMYGvn0WaR8ux0BZZAiAWUd6IbckZiyzRrlawmPGmZJ9zlySQGNNt%2FWbLm9kp8yr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMXa4u3v8P16oodYwWKtwDctguE4dfNMxoWauz5JTP1CygUPRT4%2BHiRdNQNAuHEcNDe8dPqIBktIO5t3DDNgowB%2FsPP6KImL5iH0sCkIWp7pN%2BKrImZ6Ms5PDQk92S5Igl%2Fzbp9KEA3BH71xgwMP85zu0rI%2Bt9aDhY5eUz%2Fd1wRgaaAv7F8rTZjeXjQjI8%2BvL2%2F6RqrrYX0BHNnNNYvez2GKlbfqmXdqNz6RlygXWgcjXb15XMsP4G%2BmmrrjSMgf4WQkL8beUlbdd197yFt%2BzWL1e0I95VmRz09gHZQL%2BgJ9gQ9b1Gs%2B3D78i9hrYyYy0G8mVEZjEGcgUcf9PGuUWtGwfsnlGAGx9%2BQIZGSjL9Ifcgk58ydEfUO32k%2BjeJja%2B9RKK9VJmSljiJwjGrXesWAszFqfNW0ozGsvgrM67IqmEKbYF5uF9JHwIijj%2Fi%2BR7P8OWT7jIo1blA9koU8sYt0w9fEhlale4qfOPkfZb%2FEpiBuICwRtra%2FkyT4Cf8ZydKWFjs4ahAU4PIkS86sEz6ZZL137tkjBWAgQvyHVVPJsnrVw1Zwpe7OH8cB%2BUctxXVor3LpiNKsXoV5B2wSCgQTPbqJKMxvbW8j6nqFhkYM8xPUs%2FOOV%2FNF1mxjaqWnGbKtQzHaFVwRa0YeeEw3tf%2BvQY6pgEcX9vYCblEOp7g1SYVFdHmmmSExsEl016D0X6r13zDadS4K07zAx5E%2Bu8n2q7BC3BlZx%2FmCd70pK8gqlIDvKpUsnd3SfAO%2FLYqxHCcjVS7eJbhUVXUTZmFNvEMrDK67tH6qY6N6Bkc8py0AjjsGjOSwT0P%2BMSwcYFyd9tfekXMzfLjBaPPgNmSZdlruKIf8F9UkgtjQ1AQXTSHFb9eR6Rx1VcKHehW&X-Amz-Signature=b692eec8801eaa8447b35760a5da75b2ae43bf21b1c8170d61ecc8a9da349ac0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
