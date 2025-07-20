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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633ZX4KDT%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T081141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDISrzWqXRNFKj42XHFcXpUyt07dPcg9R3g3BmeMsqDQIhANjzmZOoKoOGqSCZfeB8WNxagGGzt54l9O3BKtCyItsEKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxeUZ5Bbw9ntHH6Nusq3AP%2FG1kqSUCgQXOBb4vO7K7mQZaGLaX9FrhLua3Oyk1lWct%2FGfGmGIbjo%2BLvwYoBiwHf8Vk0BMe3WFjEej0zbL4S6q3ROV%2FF2CWJNmfsEQ4CwXaqQwn7dQOXXmhrRW2p5Q8vLucNbhBjBjS%2F%2BWUTEx12WZQA4nlhzT24hcquMyuQ9WyxUtg6RRbGbqctuv4NnwI%2Fp7sfp%2BtR61Ity0cKGNkZltjQjZxYNIoW8Sqpws3gBHkaRRDsnUUESNgZ%2B8%2FpNBoL8M69ICJARNMjrZw7cHuEQY2JQAKgmvKthD4Fc%2BIlp%2BUjOP%2BlnagRxD7RGGQRRvTzc9VuthpXz0TkB6tBAn%2FIPM1ZkHi8R1fVoeT4AmXAbpCGeM9lyVkPYLWPYelnugUXpipt0CsdFlcgxEkC8izaiUDx17sb3xfOgNeMtm6XUaNYqiq%2Be20MN8v%2FRmGT4pTRFrjKb46V1uwwd4LgXVo5j4rx9TQkYV%2F62CM3JivMaxF8npndRGYmcs2ykCAJPAHJ%2B3c1e%2FtGZcpP8PFx4qARNuBocUV6jRGGJevk7KN0BJEhh6nDUr60OMLcSaRXHKylGEmVVss505vKkx3%2FqiklS3A%2B3da0I9QPXNe9Q0PQtKZ48kc4Ef3s1FsF8TCJsfLDBjqkAc3tLHqPWXnTcJf4Rl1VWQwnMEzIs1wDAiuYZRkUHK3QjyilfhpJzGuONoGaVM3xvOEqOqxPgkxVUxrJ%2BqGtf9hi5OkWQEGKXV0HXizWVo9E6nQZZjmnHOGKPtKoOM3IR8%2BsuBjbQpumXX4vVfwvBFTnB65F2XkGckn0GChdEb87HijPDYxFAxWUQfLuToXK65zFwg%2BGVREiSYSNzvf5%2Foh36f0%2F&X-Amz-Signature=f3e7ce45219482dcf3a518f471adfbcc62d5862eac7df4bb47fdd0cdb17594bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633ZX4KDT%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T081141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDISrzWqXRNFKj42XHFcXpUyt07dPcg9R3g3BmeMsqDQIhANjzmZOoKoOGqSCZfeB8WNxagGGzt54l9O3BKtCyItsEKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxeUZ5Bbw9ntHH6Nusq3AP%2FG1kqSUCgQXOBb4vO7K7mQZaGLaX9FrhLua3Oyk1lWct%2FGfGmGIbjo%2BLvwYoBiwHf8Vk0BMe3WFjEej0zbL4S6q3ROV%2FF2CWJNmfsEQ4CwXaqQwn7dQOXXmhrRW2p5Q8vLucNbhBjBjS%2F%2BWUTEx12WZQA4nlhzT24hcquMyuQ9WyxUtg6RRbGbqctuv4NnwI%2Fp7sfp%2BtR61Ity0cKGNkZltjQjZxYNIoW8Sqpws3gBHkaRRDsnUUESNgZ%2B8%2FpNBoL8M69ICJARNMjrZw7cHuEQY2JQAKgmvKthD4Fc%2BIlp%2BUjOP%2BlnagRxD7RGGQRRvTzc9VuthpXz0TkB6tBAn%2FIPM1ZkHi8R1fVoeT4AmXAbpCGeM9lyVkPYLWPYelnugUXpipt0CsdFlcgxEkC8izaiUDx17sb3xfOgNeMtm6XUaNYqiq%2Be20MN8v%2FRmGT4pTRFrjKb46V1uwwd4LgXVo5j4rx9TQkYV%2F62CM3JivMaxF8npndRGYmcs2ykCAJPAHJ%2B3c1e%2FtGZcpP8PFx4qARNuBocUV6jRGGJevk7KN0BJEhh6nDUr60OMLcSaRXHKylGEmVVss505vKkx3%2FqiklS3A%2B3da0I9QPXNe9Q0PQtKZ48kc4Ef3s1FsF8TCJsfLDBjqkAc3tLHqPWXnTcJf4Rl1VWQwnMEzIs1wDAiuYZRkUHK3QjyilfhpJzGuONoGaVM3xvOEqOqxPgkxVUxrJ%2BqGtf9hi5OkWQEGKXV0HXizWVo9E6nQZZjmnHOGKPtKoOM3IR8%2BsuBjbQpumXX4vVfwvBFTnB65F2XkGckn0GChdEb87HijPDYxFAxWUQfLuToXK65zFwg%2BGVREiSYSNzvf5%2Foh36f0%2F&X-Amz-Signature=67756b0ea0d4f189fd955f7e141038671e99c87528e5a1a8075b2c115128b003&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633ZX4KDT%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T081141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDISrzWqXRNFKj42XHFcXpUyt07dPcg9R3g3BmeMsqDQIhANjzmZOoKoOGqSCZfeB8WNxagGGzt54l9O3BKtCyItsEKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxeUZ5Bbw9ntHH6Nusq3AP%2FG1kqSUCgQXOBb4vO7K7mQZaGLaX9FrhLua3Oyk1lWct%2FGfGmGIbjo%2BLvwYoBiwHf8Vk0BMe3WFjEej0zbL4S6q3ROV%2FF2CWJNmfsEQ4CwXaqQwn7dQOXXmhrRW2p5Q8vLucNbhBjBjS%2F%2BWUTEx12WZQA4nlhzT24hcquMyuQ9WyxUtg6RRbGbqctuv4NnwI%2Fp7sfp%2BtR61Ity0cKGNkZltjQjZxYNIoW8Sqpws3gBHkaRRDsnUUESNgZ%2B8%2FpNBoL8M69ICJARNMjrZw7cHuEQY2JQAKgmvKthD4Fc%2BIlp%2BUjOP%2BlnagRxD7RGGQRRvTzc9VuthpXz0TkB6tBAn%2FIPM1ZkHi8R1fVoeT4AmXAbpCGeM9lyVkPYLWPYelnugUXpipt0CsdFlcgxEkC8izaiUDx17sb3xfOgNeMtm6XUaNYqiq%2Be20MN8v%2FRmGT4pTRFrjKb46V1uwwd4LgXVo5j4rx9TQkYV%2F62CM3JivMaxF8npndRGYmcs2ykCAJPAHJ%2B3c1e%2FtGZcpP8PFx4qARNuBocUV6jRGGJevk7KN0BJEhh6nDUr60OMLcSaRXHKylGEmVVss505vKkx3%2FqiklS3A%2B3da0I9QPXNe9Q0PQtKZ48kc4Ef3s1FsF8TCJsfLDBjqkAc3tLHqPWXnTcJf4Rl1VWQwnMEzIs1wDAiuYZRkUHK3QjyilfhpJzGuONoGaVM3xvOEqOqxPgkxVUxrJ%2BqGtf9hi5OkWQEGKXV0HXizWVo9E6nQZZjmnHOGKPtKoOM3IR8%2BsuBjbQpumXX4vVfwvBFTnB65F2XkGckn0GChdEb87HijPDYxFAxWUQfLuToXK65zFwg%2BGVREiSYSNzvf5%2Foh36f0%2F&X-Amz-Signature=5ac2a7def02fd782327c6daa0870ccbf30bbbe1184feedfc893915c642c2f93d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
