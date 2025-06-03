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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4HOHE66%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T091034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCUBzpg7RFVBUzLgm5B6FGzBgYC2QDsfezo2l0HdirN6QIhAM2%2BG4f%2F8%2BuBKrIN8NVZB%2Bj6ClXnVlahoCmCi5zoAJpJKv8DCBAQABoMNjM3NDIzMTgzODA1IgwkTzsqXlfGOhI9Zskq3ANVx04fWbBlYkJqq99hGSrb1RuXk0Kah0f6mhY7nRnqqWhakgftSPxuonQEWN3mZdxe9Wsu4ItP5qjxrE4V9xWPLHckBYkGOkWKYxjJV93wMuel3s48ld2fKPcF%2FwhPHPeoO5u%2FbhVHRq3wmW9pnJZWxr%2FCWXkEcJYjlfvBhPT9XTWTP5OzY90seyDt13d5uw2XzASZqgKMqC7c3O0X8Ri5zJiTtVAoUFRbmon%2BpmQbbudPbbBdmYvfiXfpIP%2BRUI%2BavUeqkJC28XwOzwrRX7%2FtYvCn3cWbTSvH9xTHTRCnF8KO0labN8NDUOLXyapXpABdlAhIJQnLHpj672vq%2BD%2FKEU0V%2B%2FInb3kWO8gkRMH2Yaw4ANwnS9JNvFbtya69hOLWmVqQOoZQLiQ96nC2JVASGo3%2FOaAL25UA7wTeYXq1AxufRUNhMsiaD5%2BFDURZYLEZGbo9ysdR%2FholrdponIo5yCfF%2BjmXW08yEyYotAOcnCMg2Lftm7y21UkwCxt8igBnYhWQAebdgdDJjmUYgQnlApc5icJfKyP4u2%2BCMN790C6XiGq1UFG4ijgqp9SS%2B%2FDXIuHTCZJIAPonb0aNYanKhJYK14R9uvkZ0yuaaD7mBT1ECdvTJmEP%2BZNV8TCFxfrBBjqkAStTulJpQwP%2Fm7CK3iCvoIZJGi0Moa0u%2B9r9aDw%2FUgHmPVc1EcKR9ZZyhcyfsRILZcAHFC6uc78zV4IveCy2AiMR0Hv%2FSfIrkY%2FR7AYO%2FfJ2XtorC9AqkSYzWM9EMSSqHTBHWKDpSfUqdbBIbA8MFqpjgJNmSzi1A3OAXWryE2H%2FWgGrZchG7w3y7%2FB77GqBQcCU5TVgzM9HrwdJIL8mgyg%2FR9Yh&X-Amz-Signature=bde6b1ec05c7497ede393d80e75b2342da00d9b247080e312902b1d11e0ff4ac&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4HOHE66%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T091034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCUBzpg7RFVBUzLgm5B6FGzBgYC2QDsfezo2l0HdirN6QIhAM2%2BG4f%2F8%2BuBKrIN8NVZB%2Bj6ClXnVlahoCmCi5zoAJpJKv8DCBAQABoMNjM3NDIzMTgzODA1IgwkTzsqXlfGOhI9Zskq3ANVx04fWbBlYkJqq99hGSrb1RuXk0Kah0f6mhY7nRnqqWhakgftSPxuonQEWN3mZdxe9Wsu4ItP5qjxrE4V9xWPLHckBYkGOkWKYxjJV93wMuel3s48ld2fKPcF%2FwhPHPeoO5u%2FbhVHRq3wmW9pnJZWxr%2FCWXkEcJYjlfvBhPT9XTWTP5OzY90seyDt13d5uw2XzASZqgKMqC7c3O0X8Ri5zJiTtVAoUFRbmon%2BpmQbbudPbbBdmYvfiXfpIP%2BRUI%2BavUeqkJC28XwOzwrRX7%2FtYvCn3cWbTSvH9xTHTRCnF8KO0labN8NDUOLXyapXpABdlAhIJQnLHpj672vq%2BD%2FKEU0V%2B%2FInb3kWO8gkRMH2Yaw4ANwnS9JNvFbtya69hOLWmVqQOoZQLiQ96nC2JVASGo3%2FOaAL25UA7wTeYXq1AxufRUNhMsiaD5%2BFDURZYLEZGbo9ysdR%2FholrdponIo5yCfF%2BjmXW08yEyYotAOcnCMg2Lftm7y21UkwCxt8igBnYhWQAebdgdDJjmUYgQnlApc5icJfKyP4u2%2BCMN790C6XiGq1UFG4ijgqp9SS%2B%2FDXIuHTCZJIAPonb0aNYanKhJYK14R9uvkZ0yuaaD7mBT1ECdvTJmEP%2BZNV8TCFxfrBBjqkAStTulJpQwP%2Fm7CK3iCvoIZJGi0Moa0u%2B9r9aDw%2FUgHmPVc1EcKR9ZZyhcyfsRILZcAHFC6uc78zV4IveCy2AiMR0Hv%2FSfIrkY%2FR7AYO%2FfJ2XtorC9AqkSYzWM9EMSSqHTBHWKDpSfUqdbBIbA8MFqpjgJNmSzi1A3OAXWryE2H%2FWgGrZchG7w3y7%2FB77GqBQcCU5TVgzM9HrwdJIL8mgyg%2FR9Yh&X-Amz-Signature=757cc8352c5b33adafbf34444c30737bb146f36f3a9aa1c70223684d39af3dbc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4HOHE66%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T091034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCUBzpg7RFVBUzLgm5B6FGzBgYC2QDsfezo2l0HdirN6QIhAM2%2BG4f%2F8%2BuBKrIN8NVZB%2Bj6ClXnVlahoCmCi5zoAJpJKv8DCBAQABoMNjM3NDIzMTgzODA1IgwkTzsqXlfGOhI9Zskq3ANVx04fWbBlYkJqq99hGSrb1RuXk0Kah0f6mhY7nRnqqWhakgftSPxuonQEWN3mZdxe9Wsu4ItP5qjxrE4V9xWPLHckBYkGOkWKYxjJV93wMuel3s48ld2fKPcF%2FwhPHPeoO5u%2FbhVHRq3wmW9pnJZWxr%2FCWXkEcJYjlfvBhPT9XTWTP5OzY90seyDt13d5uw2XzASZqgKMqC7c3O0X8Ri5zJiTtVAoUFRbmon%2BpmQbbudPbbBdmYvfiXfpIP%2BRUI%2BavUeqkJC28XwOzwrRX7%2FtYvCn3cWbTSvH9xTHTRCnF8KO0labN8NDUOLXyapXpABdlAhIJQnLHpj672vq%2BD%2FKEU0V%2B%2FInb3kWO8gkRMH2Yaw4ANwnS9JNvFbtya69hOLWmVqQOoZQLiQ96nC2JVASGo3%2FOaAL25UA7wTeYXq1AxufRUNhMsiaD5%2BFDURZYLEZGbo9ysdR%2FholrdponIo5yCfF%2BjmXW08yEyYotAOcnCMg2Lftm7y21UkwCxt8igBnYhWQAebdgdDJjmUYgQnlApc5icJfKyP4u2%2BCMN790C6XiGq1UFG4ijgqp9SS%2B%2FDXIuHTCZJIAPonb0aNYanKhJYK14R9uvkZ0yuaaD7mBT1ECdvTJmEP%2BZNV8TCFxfrBBjqkAStTulJpQwP%2Fm7CK3iCvoIZJGi0Moa0u%2B9r9aDw%2FUgHmPVc1EcKR9ZZyhcyfsRILZcAHFC6uc78zV4IveCy2AiMR0Hv%2FSfIrkY%2FR7AYO%2FfJ2XtorC9AqkSYzWM9EMSSqHTBHWKDpSfUqdbBIbA8MFqpjgJNmSzi1A3OAXWryE2H%2FWgGrZchG7w3y7%2FB77GqBQcCU5TVgzM9HrwdJIL8mgyg%2FR9Yh&X-Amz-Signature=a8793a1fdbd49f306e8fd70bc0c171eadc9ea56c2c6838965de55a3fd81d7d46&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
