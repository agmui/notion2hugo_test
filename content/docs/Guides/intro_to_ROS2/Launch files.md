---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBQDIXI5%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCjxQ3rAnTXPPP68s5QP6Rb2%2Bayw7CxYzcO0UwuNlFqQQIhAI1k57diV4cFx2kZwp6FpsAcn%2FOSgSsGOfZlCV4fn%2FA7Kv8DCHgQABoMNjM3NDIzMTgzODA1IgydfZFuh9Z8xLQuXLAq3AOpgisScr7dBgJzGeAIM2QOhJINq5CNuKbs2zYU1XlN5POF93eXlLfTogNpoZeg8ejHMRhdIMKeDjm0gnMxp335oXAqVfV5hqzemC1O%2FkLOsDCj9%2BEH3hf1hXPzH4Qrqj5jUegO5YkAMZeRuL%2BBy%2Fe%2FlJqWqDR3Zh3GrMx0gd1riju1jes10CRiolVPDk1K6InyQPhmv6nQVMoqRzdLhdvhKikK2HuY6RCCMaYnC638IZWzVCm8BCeq%2BxkNQVhYIt8xE9ConBPHqfLCdQKQk6SsiOWzIY%2F2gLrByD26MDd9E%2F8l%2BZEjynM%2BXuvJ8sQYQwhf38qQOHEOUaMKNcYlRkWGENCQ7pmM6m35tlGew9kMkRu2DYlBEsCqOa4lGSz2PoY5ieWhZKFL8LdckwC0X9MYQq27Pg82wl%2Bx07p1WoKHXmgtS%2BqBfxA4H2MPLmw32isuVGVvTJ5KnI6Tz1UzQJVDXLWl8yRnbQWkUFIf8xiEUwwtMzoZRHlkbGN2mVw92mvNVVv0cOH2ElRklHhtuNBqy8w1LHqpQ3UdWQuKkF4MoSlXU4vt6s4LPUvCnOWGeQK%2BRXqMUvzI1P6PwFWgNcTTsWLLGZGGJsrNrHb505iX%2BeB5e8hpG7jdtlz8DjCK%2BJjEBjqkAUl0xXEOC4d22zLhq9SU7zsqvCpg47XSX9pLIBecbiCIIlYnxCOkyhwJtCr9HtyAa%2BdnhiEZM9PQn2WWoNCe%2BJsTJuc6fywAxfZt7kJ8pIAfPgEYdW6MlX4o%2F630%2Bz8wVa1ko5BOoomZ3FVOpxGhuiHKeQFJlQv%2FftmuqAxTINJLCTSVL8rGzdkIPiLrnFZCvN9PoPdOcRZPSkhmOhjXCowtyfRX&X-Amz-Signature=a67b2d3bf76987cc52d74efd110f29b9b4474cd8f563c530d1fa0831d1f6a79d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBQDIXI5%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCjxQ3rAnTXPPP68s5QP6Rb2%2Bayw7CxYzcO0UwuNlFqQQIhAI1k57diV4cFx2kZwp6FpsAcn%2FOSgSsGOfZlCV4fn%2FA7Kv8DCHgQABoMNjM3NDIzMTgzODA1IgydfZFuh9Z8xLQuXLAq3AOpgisScr7dBgJzGeAIM2QOhJINq5CNuKbs2zYU1XlN5POF93eXlLfTogNpoZeg8ejHMRhdIMKeDjm0gnMxp335oXAqVfV5hqzemC1O%2FkLOsDCj9%2BEH3hf1hXPzH4Qrqj5jUegO5YkAMZeRuL%2BBy%2Fe%2FlJqWqDR3Zh3GrMx0gd1riju1jes10CRiolVPDk1K6InyQPhmv6nQVMoqRzdLhdvhKikK2HuY6RCCMaYnC638IZWzVCm8BCeq%2BxkNQVhYIt8xE9ConBPHqfLCdQKQk6SsiOWzIY%2F2gLrByD26MDd9E%2F8l%2BZEjynM%2BXuvJ8sQYQwhf38qQOHEOUaMKNcYlRkWGENCQ7pmM6m35tlGew9kMkRu2DYlBEsCqOa4lGSz2PoY5ieWhZKFL8LdckwC0X9MYQq27Pg82wl%2Bx07p1WoKHXmgtS%2BqBfxA4H2MPLmw32isuVGVvTJ5KnI6Tz1UzQJVDXLWl8yRnbQWkUFIf8xiEUwwtMzoZRHlkbGN2mVw92mvNVVv0cOH2ElRklHhtuNBqy8w1LHqpQ3UdWQuKkF4MoSlXU4vt6s4LPUvCnOWGeQK%2BRXqMUvzI1P6PwFWgNcTTsWLLGZGGJsrNrHb505iX%2BeB5e8hpG7jdtlz8DjCK%2BJjEBjqkAUl0xXEOC4d22zLhq9SU7zsqvCpg47XSX9pLIBecbiCIIlYnxCOkyhwJtCr9HtyAa%2BdnhiEZM9PQn2WWoNCe%2BJsTJuc6fywAxfZt7kJ8pIAfPgEYdW6MlX4o%2F630%2Bz8wVa1ko5BOoomZ3FVOpxGhuiHKeQFJlQv%2FftmuqAxTINJLCTSVL8rGzdkIPiLrnFZCvN9PoPdOcRZPSkhmOhjXCowtyfRX&X-Amz-Signature=1adbc431a49591434b5d4cbd3b74bd3936e7aa4992b8cebd70946f3a78077812&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBQDIXI5%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCjxQ3rAnTXPPP68s5QP6Rb2%2Bayw7CxYzcO0UwuNlFqQQIhAI1k57diV4cFx2kZwp6FpsAcn%2FOSgSsGOfZlCV4fn%2FA7Kv8DCHgQABoMNjM3NDIzMTgzODA1IgydfZFuh9Z8xLQuXLAq3AOpgisScr7dBgJzGeAIM2QOhJINq5CNuKbs2zYU1XlN5POF93eXlLfTogNpoZeg8ejHMRhdIMKeDjm0gnMxp335oXAqVfV5hqzemC1O%2FkLOsDCj9%2BEH3hf1hXPzH4Qrqj5jUegO5YkAMZeRuL%2BBy%2Fe%2FlJqWqDR3Zh3GrMx0gd1riju1jes10CRiolVPDk1K6InyQPhmv6nQVMoqRzdLhdvhKikK2HuY6RCCMaYnC638IZWzVCm8BCeq%2BxkNQVhYIt8xE9ConBPHqfLCdQKQk6SsiOWzIY%2F2gLrByD26MDd9E%2F8l%2BZEjynM%2BXuvJ8sQYQwhf38qQOHEOUaMKNcYlRkWGENCQ7pmM6m35tlGew9kMkRu2DYlBEsCqOa4lGSz2PoY5ieWhZKFL8LdckwC0X9MYQq27Pg82wl%2Bx07p1WoKHXmgtS%2BqBfxA4H2MPLmw32isuVGVvTJ5KnI6Tz1UzQJVDXLWl8yRnbQWkUFIf8xiEUwwtMzoZRHlkbGN2mVw92mvNVVv0cOH2ElRklHhtuNBqy8w1LHqpQ3UdWQuKkF4MoSlXU4vt6s4LPUvCnOWGeQK%2BRXqMUvzI1P6PwFWgNcTTsWLLGZGGJsrNrHb505iX%2BeB5e8hpG7jdtlz8DjCK%2BJjEBjqkAUl0xXEOC4d22zLhq9SU7zsqvCpg47XSX9pLIBecbiCIIlYnxCOkyhwJtCr9HtyAa%2BdnhiEZM9PQn2WWoNCe%2BJsTJuc6fywAxfZt7kJ8pIAfPgEYdW6MlX4o%2F630%2Bz8wVa1ko5BOoomZ3FVOpxGhuiHKeQFJlQv%2FftmuqAxTINJLCTSVL8rGzdkIPiLrnFZCvN9PoPdOcRZPSkhmOhjXCowtyfRX&X-Amz-Signature=0918b8def06d9d7227ac4249d19ca1a34163015b2537981683a2ec58a8a467c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
