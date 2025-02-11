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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAESPFWX%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T180834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3Fg1MvytBNimrrGYwXjrG9fhKGPR8ANgsKSXQUEsejwIhAPVX5PtGJ8J65Q%2F3l5DgN2a%2BjBV%2F52M6AdguAPJU6Mv9KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmO5UodwquOh6izhAq3AMi%2BCu0T6z9FjtNHIAm1nbS9fzrvpiok3E%2FlijF%2FEAKxonJ%2BetGuyu0PC7kBRplf1ME6z9O3dCHfvM6vU5yjkWMBdPdGkLfC9wuX0KNUTTwPAwJN6pPwnMSFJRxu%2BpIL5RjFkxrTHgNL1sKycpZdzGTz5WHUzRzekDlQy9Drb%2BuOIcYKAm8H9N2yWSWewwKr%2FA1c99AlDePHEw4PDq04ercZdhWphZX7ugHmT55vy%2Fme7YM18J7%2Fay2oiCexbqOtvgBQ2SnoKgrJ8se1Mj2EyvN663PcbP1Z36fcubGhqbfJoYqd0EPRYjPgXnlCqVk%2BvYhqtTMBzR1BiuBPydsCByv9Tit0jUJ9JLKXtzEsCcZ4UXPTPKDAega%2FlCtw46t7fxZG%2Fb7cp6cN9uOrQkUIiJ8b9KGj7hqsUAyV%2Fq77oUUOW5BS83IQniBUEljsc%2FCKz33nz27IUIiWTfNWYqTXTAKD9GtJzgANyH0ligsbfjiho3Eg31TkhJ%2B8%2BnhqOFiyEfv0OH9TcIjGdliSzYbSdCfyoD%2FWn15BqA3Kk4rYuqzs%2F9w2UNx2m9nqNKY0FEmonvt3hovCWSsGtjUXBP1fxLN6vOv4i0gNAwYNSCD9wf5q77nKdbotqjdN0gIpzCfkq69BjqkAYJMUVA8h%2FfGQSMXxCuoR5k88awiAeYxjdFfleAidwidyzJBHAhvW%2BvTgokv2JeEaXQmWfarq5Fd4rJKOo9qpel%2B1myGkQ6h5ud8O8ElYoQb1C2%2FD04JnGNSdJpAAR7xd%2FaKSz76uVHZGjSYkQIrLr9Y6Hi%2BOVVZ%2FAn7eRQBD0SO60dSDEbV1P%2FDSzBLyZJAuzripMaYuhqT%2Fiqi3hM2Tezm%2FzD5&X-Amz-Signature=f2fd7f4aaf2fdc25f284a704a8c0686d60ea85abbc9094c6adee6ec0caa22ddd&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAESPFWX%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T180833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3Fg1MvytBNimrrGYwXjrG9fhKGPR8ANgsKSXQUEsejwIhAPVX5PtGJ8J65Q%2F3l5DgN2a%2BjBV%2F52M6AdguAPJU6Mv9KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmO5UodwquOh6izhAq3AMi%2BCu0T6z9FjtNHIAm1nbS9fzrvpiok3E%2FlijF%2FEAKxonJ%2BetGuyu0PC7kBRplf1ME6z9O3dCHfvM6vU5yjkWMBdPdGkLfC9wuX0KNUTTwPAwJN6pPwnMSFJRxu%2BpIL5RjFkxrTHgNL1sKycpZdzGTz5WHUzRzekDlQy9Drb%2BuOIcYKAm8H9N2yWSWewwKr%2FA1c99AlDePHEw4PDq04ercZdhWphZX7ugHmT55vy%2Fme7YM18J7%2Fay2oiCexbqOtvgBQ2SnoKgrJ8se1Mj2EyvN663PcbP1Z36fcubGhqbfJoYqd0EPRYjPgXnlCqVk%2BvYhqtTMBzR1BiuBPydsCByv9Tit0jUJ9JLKXtzEsCcZ4UXPTPKDAega%2FlCtw46t7fxZG%2Fb7cp6cN9uOrQkUIiJ8b9KGj7hqsUAyV%2Fq77oUUOW5BS83IQniBUEljsc%2FCKz33nz27IUIiWTfNWYqTXTAKD9GtJzgANyH0ligsbfjiho3Eg31TkhJ%2B8%2BnhqOFiyEfv0OH9TcIjGdliSzYbSdCfyoD%2FWn15BqA3Kk4rYuqzs%2F9w2UNx2m9nqNKY0FEmonvt3hovCWSsGtjUXBP1fxLN6vOv4i0gNAwYNSCD9wf5q77nKdbotqjdN0gIpzCfkq69BjqkAYJMUVA8h%2FfGQSMXxCuoR5k88awiAeYxjdFfleAidwidyzJBHAhvW%2BvTgokv2JeEaXQmWfarq5Fd4rJKOo9qpel%2B1myGkQ6h5ud8O8ElYoQb1C2%2FD04JnGNSdJpAAR7xd%2FaKSz76uVHZGjSYkQIrLr9Y6Hi%2BOVVZ%2FAn7eRQBD0SO60dSDEbV1P%2FDSzBLyZJAuzripMaYuhqT%2Fiqi3hM2Tezm%2FzD5&X-Amz-Signature=a26f3fefaf91b7ed7f5e7012941b1af19473dbcfdb0fbd1ea997a74bca0ee693&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAESPFWX%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T180833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3Fg1MvytBNimrrGYwXjrG9fhKGPR8ANgsKSXQUEsejwIhAPVX5PtGJ8J65Q%2F3l5DgN2a%2BjBV%2F52M6AdguAPJU6Mv9KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmO5UodwquOh6izhAq3AMi%2BCu0T6z9FjtNHIAm1nbS9fzrvpiok3E%2FlijF%2FEAKxonJ%2BetGuyu0PC7kBRplf1ME6z9O3dCHfvM6vU5yjkWMBdPdGkLfC9wuX0KNUTTwPAwJN6pPwnMSFJRxu%2BpIL5RjFkxrTHgNL1sKycpZdzGTz5WHUzRzekDlQy9Drb%2BuOIcYKAm8H9N2yWSWewwKr%2FA1c99AlDePHEw4PDq04ercZdhWphZX7ugHmT55vy%2Fme7YM18J7%2Fay2oiCexbqOtvgBQ2SnoKgrJ8se1Mj2EyvN663PcbP1Z36fcubGhqbfJoYqd0EPRYjPgXnlCqVk%2BvYhqtTMBzR1BiuBPydsCByv9Tit0jUJ9JLKXtzEsCcZ4UXPTPKDAega%2FlCtw46t7fxZG%2Fb7cp6cN9uOrQkUIiJ8b9KGj7hqsUAyV%2Fq77oUUOW5BS83IQniBUEljsc%2FCKz33nz27IUIiWTfNWYqTXTAKD9GtJzgANyH0ligsbfjiho3Eg31TkhJ%2B8%2BnhqOFiyEfv0OH9TcIjGdliSzYbSdCfyoD%2FWn15BqA3Kk4rYuqzs%2F9w2UNx2m9nqNKY0FEmonvt3hovCWSsGtjUXBP1fxLN6vOv4i0gNAwYNSCD9wf5q77nKdbotqjdN0gIpzCfkq69BjqkAYJMUVA8h%2FfGQSMXxCuoR5k88awiAeYxjdFfleAidwidyzJBHAhvW%2BvTgokv2JeEaXQmWfarq5Fd4rJKOo9qpel%2B1myGkQ6h5ud8O8ElYoQb1C2%2FD04JnGNSdJpAAR7xd%2FaKSz76uVHZGjSYkQIrLr9Y6Hi%2BOVVZ%2FAn7eRQBD0SO60dSDEbV1P%2FDSzBLyZJAuzripMaYuhqT%2Fiqi3hM2Tezm%2FzD5&X-Amz-Signature=2211097d1a51091054f67781165361d658d2be35ee359d81a6ca48c612b1320e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
