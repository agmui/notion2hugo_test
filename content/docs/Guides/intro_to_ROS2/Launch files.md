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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IHP6NTQ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICn1MAFiRtLl0hLV%2B4ceeUUj%2F0XJkKOFezUEQlblnY3VAiBza8MJc8Nf%2FV52PVqfuph3Dn%2Fwv%2FjoZiDBXp5%2FB7YmiSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMCtnBZLXYRkGssdTxKtwDuuFutCj%2FmKRDXJ9kzR9QC2K24NSNv8p1oeIHeuj6GGA8pwM1Iq1d0g8usjFSvzFqfAJ%2B59b3j14uugjsjrSr61E02%2BRHJP8nTkL8Kanrpm0137qopqjXwiN%2B9cj%2FbvNeiT9SQTzs1rLxsnZyFgnjcxWUAzhsXncncMdhVcdUboTVLYQxDN5H4TXA%2BiOAdEueM7wvbUJxYhqSwyIVqsZZy4geTzwNFjf6r8BkKwQ%2Fw68C0OIhuCr0evKJmpVSOuTXMj%2Bx7iC03CkDa0o9noNBwTgYUPtCmWRj2NzTuAHj6LvrBFotEKLePFkTlOF5KGfBXnPbiNIYjzZ4UsIFHjkiTRjDhWxNvPoQOpJUE5ddiKVkoCqJPM1YqHTP1ErNXS7EKsHh4ugzOC7MJ41KRpNL1kH4GF84cvorZPDaY90u2g2ahg14pCime6le74Daii%2FIMWGOMODg6NVJCAbql81lzpBaT39aNBJVEJ2W8adK7JijLhbvDjE2n%2By1m4aVor6HwhuHkfcHGJ0unj8NUOoc5sMgiDlGymGQa%2Flgai2Ns2qfWLlZC2s6Ixti0uyIt9n3NInVeC9dzmfy1wk%2BfJFIs2HvqX4nU%2BazqrsQCgtCQlspDZlyOdfCqIB06AEwzpSDwAY6pgEVUrXbwj0f1AjbcJcGmQhOJq2TCZA%2B8QKPbwUDU0yFO0GzVFUNaBDQyywY4l6MhXs6EfXUxmDpanj%2BFxgHuye7jI6JRQVVhZqw1fyVrdg1vnLJ1%2FJeve3f5KP9nahjiTgDOyfzOOeNfe9XOI4Z9HvJBgAi4kYXEe8S%2BF%2BQLpYRvsg6MstIh08viLzhdSsJrwIZpMzL33gx7ULN2IMpcMCvz321T63W&X-Amz-Signature=577c9d51776050de30462b5b05e0f6bae986a9ea9f2e8dda5b2dc29300d40be4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IHP6NTQ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICn1MAFiRtLl0hLV%2B4ceeUUj%2F0XJkKOFezUEQlblnY3VAiBza8MJc8Nf%2FV52PVqfuph3Dn%2Fwv%2FjoZiDBXp5%2FB7YmiSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMCtnBZLXYRkGssdTxKtwDuuFutCj%2FmKRDXJ9kzR9QC2K24NSNv8p1oeIHeuj6GGA8pwM1Iq1d0g8usjFSvzFqfAJ%2B59b3j14uugjsjrSr61E02%2BRHJP8nTkL8Kanrpm0137qopqjXwiN%2B9cj%2FbvNeiT9SQTzs1rLxsnZyFgnjcxWUAzhsXncncMdhVcdUboTVLYQxDN5H4TXA%2BiOAdEueM7wvbUJxYhqSwyIVqsZZy4geTzwNFjf6r8BkKwQ%2Fw68C0OIhuCr0evKJmpVSOuTXMj%2Bx7iC03CkDa0o9noNBwTgYUPtCmWRj2NzTuAHj6LvrBFotEKLePFkTlOF5KGfBXnPbiNIYjzZ4UsIFHjkiTRjDhWxNvPoQOpJUE5ddiKVkoCqJPM1YqHTP1ErNXS7EKsHh4ugzOC7MJ41KRpNL1kH4GF84cvorZPDaY90u2g2ahg14pCime6le74Daii%2FIMWGOMODg6NVJCAbql81lzpBaT39aNBJVEJ2W8adK7JijLhbvDjE2n%2By1m4aVor6HwhuHkfcHGJ0unj8NUOoc5sMgiDlGymGQa%2Flgai2Ns2qfWLlZC2s6Ixti0uyIt9n3NInVeC9dzmfy1wk%2BfJFIs2HvqX4nU%2BazqrsQCgtCQlspDZlyOdfCqIB06AEwzpSDwAY6pgEVUrXbwj0f1AjbcJcGmQhOJq2TCZA%2B8QKPbwUDU0yFO0GzVFUNaBDQyywY4l6MhXs6EfXUxmDpanj%2BFxgHuye7jI6JRQVVhZqw1fyVrdg1vnLJ1%2FJeve3f5KP9nahjiTgDOyfzOOeNfe9XOI4Z9HvJBgAi4kYXEe8S%2BF%2BQLpYRvsg6MstIh08viLzhdSsJrwIZpMzL33gx7ULN2IMpcMCvz321T63W&X-Amz-Signature=203f450bb9eb8bf89726da18afcea1b4f552bed458b14542921463f29b90266f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IHP6NTQ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICn1MAFiRtLl0hLV%2B4ceeUUj%2F0XJkKOFezUEQlblnY3VAiBza8MJc8Nf%2FV52PVqfuph3Dn%2Fwv%2FjoZiDBXp5%2FB7YmiSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMCtnBZLXYRkGssdTxKtwDuuFutCj%2FmKRDXJ9kzR9QC2K24NSNv8p1oeIHeuj6GGA8pwM1Iq1d0g8usjFSvzFqfAJ%2B59b3j14uugjsjrSr61E02%2BRHJP8nTkL8Kanrpm0137qopqjXwiN%2B9cj%2FbvNeiT9SQTzs1rLxsnZyFgnjcxWUAzhsXncncMdhVcdUboTVLYQxDN5H4TXA%2BiOAdEueM7wvbUJxYhqSwyIVqsZZy4geTzwNFjf6r8BkKwQ%2Fw68C0OIhuCr0evKJmpVSOuTXMj%2Bx7iC03CkDa0o9noNBwTgYUPtCmWRj2NzTuAHj6LvrBFotEKLePFkTlOF5KGfBXnPbiNIYjzZ4UsIFHjkiTRjDhWxNvPoQOpJUE5ddiKVkoCqJPM1YqHTP1ErNXS7EKsHh4ugzOC7MJ41KRpNL1kH4GF84cvorZPDaY90u2g2ahg14pCime6le74Daii%2FIMWGOMODg6NVJCAbql81lzpBaT39aNBJVEJ2W8adK7JijLhbvDjE2n%2By1m4aVor6HwhuHkfcHGJ0unj8NUOoc5sMgiDlGymGQa%2Flgai2Ns2qfWLlZC2s6Ixti0uyIt9n3NInVeC9dzmfy1wk%2BfJFIs2HvqX4nU%2BazqrsQCgtCQlspDZlyOdfCqIB06AEwzpSDwAY6pgEVUrXbwj0f1AjbcJcGmQhOJq2TCZA%2B8QKPbwUDU0yFO0GzVFUNaBDQyywY4l6MhXs6EfXUxmDpanj%2BFxgHuye7jI6JRQVVhZqw1fyVrdg1vnLJ1%2FJeve3f5KP9nahjiTgDOyfzOOeNfe9XOI4Z9HvJBgAi4kYXEe8S%2BF%2BQLpYRvsg6MstIh08viLzhdSsJrwIZpMzL33gx7ULN2IMpcMCvz321T63W&X-Amz-Signature=e523409fda773f2c161871af338daaacc1231040acdc0970b5f5791b24a62f58&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
