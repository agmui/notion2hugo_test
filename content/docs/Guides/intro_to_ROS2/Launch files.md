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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXSTO7FX%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDmgou3LF%2B5OaLboNOy%2FK6ia8Y%2BAOD9%2BP1v4jneDmOhyAiEA5TUioVgFRBBN6%2BTPLfh8nmPDQ%2F789as9grI4pt9GAVEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCjsutA5WtiDPSWZVSrcA712kkUorpMkPmBBGP1hG1E9fXXrJlU1XoXA1cpjTsA%2BllqjjlvWkRrbZWQath3YHFzABcD%2FmrumO6ZuTEBzogEvF60JvzVhYNZZRK7zdLe60VrHdMt6vC0%2BYRGFH8WzL1PLUlsD5YcC%2BDA%2BsFp6s5ZkeTS%2FOIJwaaB94LJi61HJEPTNG7w5PfI8QAHdP9S0zBaEqnGwlQ%2B4N8k%2BzTgApaEHOgZhHDenin5e%2FA3i4EgxM7ktPfML2XMDW8TKr5nQ%2BYKKEHJQk0qWp3GTYEuBoaihq4UI%2FCmCoqoqKi2jkCxL3lFNMsmAHA1WvK49RcejzyPZ6fEF7%2FI3tfvicc5Yz%2FvZ1BkhWAm3VkHzTk1VObjLqeulizdwkN7YjINnAf%2BrmOhODECSDnxYeW3tG3Mmu0OAMzSDipP0fhWVc3aQMZbOmfFVDklv8AyYu4sM3FMr01V%2FXgnL%2FaLdd7q%2Fa4Pb3Io4fdrljxG%2FKsQY4G1ZP8jRUspqWKrOY2hax%2BVNr8YfEt7a%2B9tT4XC6wESXQJVUmWgo40L%2BcNRewjc8PHbAGeIQ%2BoqPaHueuemLQaw4R%2BMK9idadipMMginQ6jdMQgrYaUN6ET7Ew%2B%2BHB0oXPIEOEBd9W%2FwFkjhrgsvuIbXMKfK%2BLwGOqUBnA2ZyVL22sUUCT7ihupz5fBZjcQ7155FtWygN14wb9hDrT%2F4GCha8MMv%2Fo7SBkDJol%2FRjq4GLRg7n13Mb1ZmZn5FRkXvpou2%2Fr6%2Bi1WOqsA5nFU2739Es6IPLvoZMx903TsmDxacRJt4TLA6XhRY8EooFPBC%2BScZnuuSohQMnSSwt2phvSfNzbQY0AiJUhYAbAsoVx8z5oP6ovtX3dsNgOlbtc58&X-Amz-Signature=f914d22952ded261ad8ed8bc956fdd49ec8edb3170f12de061150c643159681a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXSTO7FX%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDmgou3LF%2B5OaLboNOy%2FK6ia8Y%2BAOD9%2BP1v4jneDmOhyAiEA5TUioVgFRBBN6%2BTPLfh8nmPDQ%2F789as9grI4pt9GAVEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCjsutA5WtiDPSWZVSrcA712kkUorpMkPmBBGP1hG1E9fXXrJlU1XoXA1cpjTsA%2BllqjjlvWkRrbZWQath3YHFzABcD%2FmrumO6ZuTEBzogEvF60JvzVhYNZZRK7zdLe60VrHdMt6vC0%2BYRGFH8WzL1PLUlsD5YcC%2BDA%2BsFp6s5ZkeTS%2FOIJwaaB94LJi61HJEPTNG7w5PfI8QAHdP9S0zBaEqnGwlQ%2B4N8k%2BzTgApaEHOgZhHDenin5e%2FA3i4EgxM7ktPfML2XMDW8TKr5nQ%2BYKKEHJQk0qWp3GTYEuBoaihq4UI%2FCmCoqoqKi2jkCxL3lFNMsmAHA1WvK49RcejzyPZ6fEF7%2FI3tfvicc5Yz%2FvZ1BkhWAm3VkHzTk1VObjLqeulizdwkN7YjINnAf%2BrmOhODECSDnxYeW3tG3Mmu0OAMzSDipP0fhWVc3aQMZbOmfFVDklv8AyYu4sM3FMr01V%2FXgnL%2FaLdd7q%2Fa4Pb3Io4fdrljxG%2FKsQY4G1ZP8jRUspqWKrOY2hax%2BVNr8YfEt7a%2B9tT4XC6wESXQJVUmWgo40L%2BcNRewjc8PHbAGeIQ%2BoqPaHueuemLQaw4R%2BMK9idadipMMginQ6jdMQgrYaUN6ET7Ew%2B%2BHB0oXPIEOEBd9W%2FwFkjhrgsvuIbXMKfK%2BLwGOqUBnA2ZyVL22sUUCT7ihupz5fBZjcQ7155FtWygN14wb9hDrT%2F4GCha8MMv%2Fo7SBkDJol%2FRjq4GLRg7n13Mb1ZmZn5FRkXvpou2%2Fr6%2Bi1WOqsA5nFU2739Es6IPLvoZMx903TsmDxacRJt4TLA6XhRY8EooFPBC%2BScZnuuSohQMnSSwt2phvSfNzbQY0AiJUhYAbAsoVx8z5oP6ovtX3dsNgOlbtc58&X-Amz-Signature=b0586bce84da69044d2b70c6f520b5640d844d6a21516aa244811dee80c33d66&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXSTO7FX%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDmgou3LF%2B5OaLboNOy%2FK6ia8Y%2BAOD9%2BP1v4jneDmOhyAiEA5TUioVgFRBBN6%2BTPLfh8nmPDQ%2F789as9grI4pt9GAVEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCjsutA5WtiDPSWZVSrcA712kkUorpMkPmBBGP1hG1E9fXXrJlU1XoXA1cpjTsA%2BllqjjlvWkRrbZWQath3YHFzABcD%2FmrumO6ZuTEBzogEvF60JvzVhYNZZRK7zdLe60VrHdMt6vC0%2BYRGFH8WzL1PLUlsD5YcC%2BDA%2BsFp6s5ZkeTS%2FOIJwaaB94LJi61HJEPTNG7w5PfI8QAHdP9S0zBaEqnGwlQ%2B4N8k%2BzTgApaEHOgZhHDenin5e%2FA3i4EgxM7ktPfML2XMDW8TKr5nQ%2BYKKEHJQk0qWp3GTYEuBoaihq4UI%2FCmCoqoqKi2jkCxL3lFNMsmAHA1WvK49RcejzyPZ6fEF7%2FI3tfvicc5Yz%2FvZ1BkhWAm3VkHzTk1VObjLqeulizdwkN7YjINnAf%2BrmOhODECSDnxYeW3tG3Mmu0OAMzSDipP0fhWVc3aQMZbOmfFVDklv8AyYu4sM3FMr01V%2FXgnL%2FaLdd7q%2Fa4Pb3Io4fdrljxG%2FKsQY4G1ZP8jRUspqWKrOY2hax%2BVNr8YfEt7a%2B9tT4XC6wESXQJVUmWgo40L%2BcNRewjc8PHbAGeIQ%2BoqPaHueuemLQaw4R%2BMK9idadipMMginQ6jdMQgrYaUN6ET7Ew%2B%2BHB0oXPIEOEBd9W%2FwFkjhrgsvuIbXMKfK%2BLwGOqUBnA2ZyVL22sUUCT7ihupz5fBZjcQ7155FtWygN14wb9hDrT%2F4GCha8MMv%2Fo7SBkDJol%2FRjq4GLRg7n13Mb1ZmZn5FRkXvpou2%2Fr6%2Bi1WOqsA5nFU2739Es6IPLvoZMx903TsmDxacRJt4TLA6XhRY8EooFPBC%2BScZnuuSohQMnSSwt2phvSfNzbQY0AiJUhYAbAsoVx8z5oP6ovtX3dsNgOlbtc58&X-Amz-Signature=2105c594a87ae1c33ada74b2defc166c0e8abb8fcf8d1553a56c1342d601bd2d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
