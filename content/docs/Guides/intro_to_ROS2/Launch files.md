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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W23O7AKZ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T131219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2FaCrj5TMZxEtptsdoizlmr0cC5TRl%2FhG3oJSbX%2BJ3YAiATcT5AfHcADGASpBQtaqWTDGAjzoL60TYjwGYJwhryRCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlgsEt79WOZJZMa5XKtwDqbX4IiMTTTvyl5fIl3dwLO3hIeYo%2F2A9jFZWlbEP1kAhc0f3Wn4Zh%2FKLaZIHwoRLf9t1tFFWl0XnAxcmEEY7xH5bFY3M3tq0C9pecjBCZd3BsjXT0JcDXZzBQeZ%2FinMdL%2FQWA7CJPcG5yhQB6krj69DfSGLkLEguf4QsIhvhEMBT4Sq95akMLY8eQOCP5REVcGIUHwWAdOfaApVxDVROa6CNkYavHUilN0jDWwzsLFqnae65C%2FkHqGfdMu%2F8Q7%2FXMhtuHSrbqgR7KkB3YGmhsV3TCHg%2B49vlrN2HvpHJPtWUXE%2B%2F%2BkSxCPd5i%2BuWmKC4OUszYA888w%2Bq8xT%2BDhAmS0HZfV7svKbyEhUyE6b0MOkNK51SYYPEbWfz0Ge78ovndXu0TmqQXQOo7pRuY26DewP7nmvjthHQig2oc4h5LXg%2FepcCY0Ci245o%2FAPMyPZ%2BxUtG7YfDioaj5RQ6LA1KG4KvEzMvy9tf4AwljFT58ycb1BI4SX71n%2BsQVfqXsxfClS94jcf4cGNmcH%2FXxwdD2dTsADknAgv0HSTBpEJ1VkET2aEQeX3QSK%2FIsCASPc6owCUcLFx6Ezf%2FJh4%2B4EiTumPtY8pAn1aMrDNvLx76MrSVArnbCewgYUhnrTcw6PiQvgY6pgE7tCTvpsDr4fEs1IwTpt6s9RT2AagzdShGzA10FIUEM8rmpQ3gj3OFFTIVFNuGWZJcnJMTvxZ%2BpHN2i%2Fo2dZaZ65Zmo7xV%2BOB5FeFxGQseGpGZ5ocYlSD1uLajtWqVg1mXEns%2FoeVWIK2duAtxQWRW6It%2FsyCCiYh%2BOsWWFcaU8x4VxiUg0osNVfkpS%2BOI%2By8231PEhOmy2inBazUVD%2B%2FjYWwyjG0v&X-Amz-Signature=0617ba559e7a44d00a139836388a9685a5e34e6b3899ca0ad7eea4fece5f96d0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W23O7AKZ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T131219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2FaCrj5TMZxEtptsdoizlmr0cC5TRl%2FhG3oJSbX%2BJ3YAiATcT5AfHcADGASpBQtaqWTDGAjzoL60TYjwGYJwhryRCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlgsEt79WOZJZMa5XKtwDqbX4IiMTTTvyl5fIl3dwLO3hIeYo%2F2A9jFZWlbEP1kAhc0f3Wn4Zh%2FKLaZIHwoRLf9t1tFFWl0XnAxcmEEY7xH5bFY3M3tq0C9pecjBCZd3BsjXT0JcDXZzBQeZ%2FinMdL%2FQWA7CJPcG5yhQB6krj69DfSGLkLEguf4QsIhvhEMBT4Sq95akMLY8eQOCP5REVcGIUHwWAdOfaApVxDVROa6CNkYavHUilN0jDWwzsLFqnae65C%2FkHqGfdMu%2F8Q7%2FXMhtuHSrbqgR7KkB3YGmhsV3TCHg%2B49vlrN2HvpHJPtWUXE%2B%2F%2BkSxCPd5i%2BuWmKC4OUszYA888w%2Bq8xT%2BDhAmS0HZfV7svKbyEhUyE6b0MOkNK51SYYPEbWfz0Ge78ovndXu0TmqQXQOo7pRuY26DewP7nmvjthHQig2oc4h5LXg%2FepcCY0Ci245o%2FAPMyPZ%2BxUtG7YfDioaj5RQ6LA1KG4KvEzMvy9tf4AwljFT58ycb1BI4SX71n%2BsQVfqXsxfClS94jcf4cGNmcH%2FXxwdD2dTsADknAgv0HSTBpEJ1VkET2aEQeX3QSK%2FIsCASPc6owCUcLFx6Ezf%2FJh4%2B4EiTumPtY8pAn1aMrDNvLx76MrSVArnbCewgYUhnrTcw6PiQvgY6pgE7tCTvpsDr4fEs1IwTpt6s9RT2AagzdShGzA10FIUEM8rmpQ3gj3OFFTIVFNuGWZJcnJMTvxZ%2BpHN2i%2Fo2dZaZ65Zmo7xV%2BOB5FeFxGQseGpGZ5ocYlSD1uLajtWqVg1mXEns%2FoeVWIK2duAtxQWRW6It%2FsyCCiYh%2BOsWWFcaU8x4VxiUg0osNVfkpS%2BOI%2By8231PEhOmy2inBazUVD%2B%2FjYWwyjG0v&X-Amz-Signature=0f8dc414c406890c2cb96feb6cda0c11feab1ba124690a5bcd1dc461625468dc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W23O7AKZ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T131219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2FaCrj5TMZxEtptsdoizlmr0cC5TRl%2FhG3oJSbX%2BJ3YAiATcT5AfHcADGASpBQtaqWTDGAjzoL60TYjwGYJwhryRCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlgsEt79WOZJZMa5XKtwDqbX4IiMTTTvyl5fIl3dwLO3hIeYo%2F2A9jFZWlbEP1kAhc0f3Wn4Zh%2FKLaZIHwoRLf9t1tFFWl0XnAxcmEEY7xH5bFY3M3tq0C9pecjBCZd3BsjXT0JcDXZzBQeZ%2FinMdL%2FQWA7CJPcG5yhQB6krj69DfSGLkLEguf4QsIhvhEMBT4Sq95akMLY8eQOCP5REVcGIUHwWAdOfaApVxDVROa6CNkYavHUilN0jDWwzsLFqnae65C%2FkHqGfdMu%2F8Q7%2FXMhtuHSrbqgR7KkB3YGmhsV3TCHg%2B49vlrN2HvpHJPtWUXE%2B%2F%2BkSxCPd5i%2BuWmKC4OUszYA888w%2Bq8xT%2BDhAmS0HZfV7svKbyEhUyE6b0MOkNK51SYYPEbWfz0Ge78ovndXu0TmqQXQOo7pRuY26DewP7nmvjthHQig2oc4h5LXg%2FepcCY0Ci245o%2FAPMyPZ%2BxUtG7YfDioaj5RQ6LA1KG4KvEzMvy9tf4AwljFT58ycb1BI4SX71n%2BsQVfqXsxfClS94jcf4cGNmcH%2FXxwdD2dTsADknAgv0HSTBpEJ1VkET2aEQeX3QSK%2FIsCASPc6owCUcLFx6Ezf%2FJh4%2B4EiTumPtY8pAn1aMrDNvLx76MrSVArnbCewgYUhnrTcw6PiQvgY6pgE7tCTvpsDr4fEs1IwTpt6s9RT2AagzdShGzA10FIUEM8rmpQ3gj3OFFTIVFNuGWZJcnJMTvxZ%2BpHN2i%2Fo2dZaZ65Zmo7xV%2BOB5FeFxGQseGpGZ5ocYlSD1uLajtWqVg1mXEns%2FoeVWIK2duAtxQWRW6It%2FsyCCiYh%2BOsWWFcaU8x4VxiUg0osNVfkpS%2BOI%2By8231PEhOmy2inBazUVD%2B%2FjYWwyjG0v&X-Amz-Signature=c195061eb793df5a0bfdffe33892819b243ecfcf2b487f4b1d7e5995f4234027&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
