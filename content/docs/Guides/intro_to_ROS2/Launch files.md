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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466765ZQFGC%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T100800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIDcEp4qFdr8yRwtxrguBn5nuRE9pAU6zQLjTBQIszU3OAiEAvD9EXwt9IDk5fa73aRieqV85qnDxKDeRCYHYYkZDFyoqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNF%2BKmRw9DC9bvqQZircA7NCaFBQYU2fa7Ng4HCa3U2UJLJpL0WefZQpDG8LSm9txJkQPO8gSv%2B5XchZLhYHP2nlWlUuKiwtmQ99x9ASkupPYNTJS1hKGRJTuflfFTrgkKE%2FzYJH8DYUTxu08XYZ3ySRFTgdlEGJC4RseSMLIJ7w0%2BUbEDr14FOArRRgtb1yY2waIL3dRqG7WqE8tnpYUKlitGzLd4tJ%2BZ5Q%2Bv6RS3x7CVl6bEzho41zJAKVhctrMCiymgyuKOF0rJ9WAUd%2Bv%2BkLeR2XCFRyVPch6HAQlyWS16RLTdTlsg488Pk%2BGsTgh0aFj2cGtyl05q8hYP8Dc1FEDt3sLcn0LQxwg8LPX6nd0pBR6igUR2jaiXwsBfzadkYQSGJ9b%2Bgp7OHCjcfPeDYF5PZnI3yp9mi%2BCAUT8y9KZnAR3QFNp%2BA3JHMKRydzDZbCLJxMMDQKVQ4IwTnpJWT3ss7eD1TqmoHcfjIGQYo%2FPgVHJ4LZ4okQySpY7MOgG2zMNYR4UEV%2FxpMf4KXjSKszKW6gdAhBKlpPy6lQ%2FQdNnhPTofFBoCztc1doIje6AopWLkvrzSndDGSB%2FJ0saaGX41wwlste7uDzSFsHUDQDdmrCjruHB5YAlVYI1N8i%2FegCF6RkskiStso0MMmkksAGOqUBtLtXfz480HNMmpiEXzNQTz%2BQG2CkuDY2ROARja%2FGI1cmXrgYdAg9sRbW8dtK5B6ftFM9YoE4F2wQfN0ANQomOuYJZfG3v8MUiJM%2FR1gK5dD%2Bt5FGyZ3W%2BjTMk%2BJkjr7pCYEGcjZC34wc3PIC%2FgHRGTa462xUNtA2%2F8UIJpjZWg2Huej92NIpXrZvPcK%2FXYKiWpGT1PD1WaDd6HZ%2B77cJVySerg6l&X-Amz-Signature=1284749ea043e6ec6901692d28bbb29c22514ec128d534c6174c37a7e672be48&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466765ZQFGC%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T100800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIDcEp4qFdr8yRwtxrguBn5nuRE9pAU6zQLjTBQIszU3OAiEAvD9EXwt9IDk5fa73aRieqV85qnDxKDeRCYHYYkZDFyoqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNF%2BKmRw9DC9bvqQZircA7NCaFBQYU2fa7Ng4HCa3U2UJLJpL0WefZQpDG8LSm9txJkQPO8gSv%2B5XchZLhYHP2nlWlUuKiwtmQ99x9ASkupPYNTJS1hKGRJTuflfFTrgkKE%2FzYJH8DYUTxu08XYZ3ySRFTgdlEGJC4RseSMLIJ7w0%2BUbEDr14FOArRRgtb1yY2waIL3dRqG7WqE8tnpYUKlitGzLd4tJ%2BZ5Q%2Bv6RS3x7CVl6bEzho41zJAKVhctrMCiymgyuKOF0rJ9WAUd%2Bv%2BkLeR2XCFRyVPch6HAQlyWS16RLTdTlsg488Pk%2BGsTgh0aFj2cGtyl05q8hYP8Dc1FEDt3sLcn0LQxwg8LPX6nd0pBR6igUR2jaiXwsBfzadkYQSGJ9b%2Bgp7OHCjcfPeDYF5PZnI3yp9mi%2BCAUT8y9KZnAR3QFNp%2BA3JHMKRydzDZbCLJxMMDQKVQ4IwTnpJWT3ss7eD1TqmoHcfjIGQYo%2FPgVHJ4LZ4okQySpY7MOgG2zMNYR4UEV%2FxpMf4KXjSKszKW6gdAhBKlpPy6lQ%2FQdNnhPTofFBoCztc1doIje6AopWLkvrzSndDGSB%2FJ0saaGX41wwlste7uDzSFsHUDQDdmrCjruHB5YAlVYI1N8i%2FegCF6RkskiStso0MMmkksAGOqUBtLtXfz480HNMmpiEXzNQTz%2BQG2CkuDY2ROARja%2FGI1cmXrgYdAg9sRbW8dtK5B6ftFM9YoE4F2wQfN0ANQomOuYJZfG3v8MUiJM%2FR1gK5dD%2Bt5FGyZ3W%2BjTMk%2BJkjr7pCYEGcjZC34wc3PIC%2FgHRGTa462xUNtA2%2F8UIJpjZWg2Huej92NIpXrZvPcK%2FXYKiWpGT1PD1WaDd6HZ%2B77cJVySerg6l&X-Amz-Signature=0d8de916d2f8543d54858578664e6eddbf6f3bc6a3629ed13bb3665b55359dff&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466765ZQFGC%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T100800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIDcEp4qFdr8yRwtxrguBn5nuRE9pAU6zQLjTBQIszU3OAiEAvD9EXwt9IDk5fa73aRieqV85qnDxKDeRCYHYYkZDFyoqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNF%2BKmRw9DC9bvqQZircA7NCaFBQYU2fa7Ng4HCa3U2UJLJpL0WefZQpDG8LSm9txJkQPO8gSv%2B5XchZLhYHP2nlWlUuKiwtmQ99x9ASkupPYNTJS1hKGRJTuflfFTrgkKE%2FzYJH8DYUTxu08XYZ3ySRFTgdlEGJC4RseSMLIJ7w0%2BUbEDr14FOArRRgtb1yY2waIL3dRqG7WqE8tnpYUKlitGzLd4tJ%2BZ5Q%2Bv6RS3x7CVl6bEzho41zJAKVhctrMCiymgyuKOF0rJ9WAUd%2Bv%2BkLeR2XCFRyVPch6HAQlyWS16RLTdTlsg488Pk%2BGsTgh0aFj2cGtyl05q8hYP8Dc1FEDt3sLcn0LQxwg8LPX6nd0pBR6igUR2jaiXwsBfzadkYQSGJ9b%2Bgp7OHCjcfPeDYF5PZnI3yp9mi%2BCAUT8y9KZnAR3QFNp%2BA3JHMKRydzDZbCLJxMMDQKVQ4IwTnpJWT3ss7eD1TqmoHcfjIGQYo%2FPgVHJ4LZ4okQySpY7MOgG2zMNYR4UEV%2FxpMf4KXjSKszKW6gdAhBKlpPy6lQ%2FQdNnhPTofFBoCztc1doIje6AopWLkvrzSndDGSB%2FJ0saaGX41wwlste7uDzSFsHUDQDdmrCjruHB5YAlVYI1N8i%2FegCF6RkskiStso0MMmkksAGOqUBtLtXfz480HNMmpiEXzNQTz%2BQG2CkuDY2ROARja%2FGI1cmXrgYdAg9sRbW8dtK5B6ftFM9YoE4F2wQfN0ANQomOuYJZfG3v8MUiJM%2FR1gK5dD%2Bt5FGyZ3W%2BjTMk%2BJkjr7pCYEGcjZC34wc3PIC%2FgHRGTa462xUNtA2%2F8UIJpjZWg2Huej92NIpXrZvPcK%2FXYKiWpGT1PD1WaDd6HZ%2B77cJVySerg6l&X-Amz-Signature=62735adef51727ac97c390b51ff1a8582260eed0e6a669ba927a40d778caa26d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
