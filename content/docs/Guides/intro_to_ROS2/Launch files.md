---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5IRDZWS%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDDDzxAY7sTvIfSdeHKkf%2BAV8Ntd7fskmuiGKZiyPf%2FqgIhAOpf8tBnAQsxlTw5o%2FFr%2BVUlmdhiFUEUqFmLmIKnx9Z9Kv8DCDIQABoMNjM3NDIzMTgzODA1IgxnhcfZslsSyXTrHcoq3AOBpLqJ9K%2FQ1ynZlraE1fHx0BgPJ2r68AGWNNESGul2j8Oek0hvOU8zophqXQl4N8%2F8tmtocscbL8zq%2Bjgppo9XjG%2B4Dseql0M21QOftUm%2BM2yFFPKBUo68Qb1u4IESbQ7i5QPj0ltTJRf2Z21UsB4zGY%2B%2BiPYZezqTvQ6JVRAgHSwtCEMNqZfKXINme8p8QagcIzWYlMbbnS%2FfgKNoczUiItOtDAoXlyjvTwpDSkdwE57fK%2BnQsX1qGVDByoU%2BHPXAkUlcYvZOBUYe%2FmMubNzAkNrpSA4xuSYNZ%2BCELEPVPa%2FAcV2yYNABf1hU3sMwyCFuAV7p44pS5necWOxUPHctbSlXvqcY4PJ3LVq8Vle34ac2RHEMfQYercF5m1TfJdsWxH1FvAY6DuXMNBI2AHqVZM8q%2F3nfnVZS%2BM%2Fx1GFQohsmpCoZWPGIdWBRpUn7QFN0hh6UjWUnJ4HDcQOi0LiZyfCilOAM8Trxr6ABXP84l5Q%2BshjfEo7iE5VrzEvyyDv6flC18yhoimFcsGqUDsbWe6Yhe2gIkX7W98w2QA%2B2FOZnhuWEWCRBaR%2FCPvVUFIHiJUT6BarTZXvFOE4m5R76ZMo7EIMYaIL8HSJroqT2f%2BRNbQsA5zHIPtHaqzCc2abSBjqkAb2kz2zJX%2BbqiJSXIUY4aknNqtlDQZcpoBwKjofmg%2FvqwBu4BCe%2BGk40YcC6rd%2Bd07dUIhub2eljwstWzSXNcVzvHGMNkwAcA5%2B2A6Z0I%2FYh6RGWn3zSzJOmne0e4dFYwhoa%2FvQy8Dr5mffKQlTpP5S575B9cobt2KniEQH79R26mG9FUiefBdeHNZYjwrYaqWH0CLZ6vtSlfF3JqNzZoDMdDE3P&X-Amz-Signature=2cddd05807ca9d7949116bc421c919924840d4065a609dc58bbed75ee397fce1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5IRDZWS%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDDDzxAY7sTvIfSdeHKkf%2BAV8Ntd7fskmuiGKZiyPf%2FqgIhAOpf8tBnAQsxlTw5o%2FFr%2BVUlmdhiFUEUqFmLmIKnx9Z9Kv8DCDIQABoMNjM3NDIzMTgzODA1IgxnhcfZslsSyXTrHcoq3AOBpLqJ9K%2FQ1ynZlraE1fHx0BgPJ2r68AGWNNESGul2j8Oek0hvOU8zophqXQl4N8%2F8tmtocscbL8zq%2Bjgppo9XjG%2B4Dseql0M21QOftUm%2BM2yFFPKBUo68Qb1u4IESbQ7i5QPj0ltTJRf2Z21UsB4zGY%2B%2BiPYZezqTvQ6JVRAgHSwtCEMNqZfKXINme8p8QagcIzWYlMbbnS%2FfgKNoczUiItOtDAoXlyjvTwpDSkdwE57fK%2BnQsX1qGVDByoU%2BHPXAkUlcYvZOBUYe%2FmMubNzAkNrpSA4xuSYNZ%2BCELEPVPa%2FAcV2yYNABf1hU3sMwyCFuAV7p44pS5necWOxUPHctbSlXvqcY4PJ3LVq8Vle34ac2RHEMfQYercF5m1TfJdsWxH1FvAY6DuXMNBI2AHqVZM8q%2F3nfnVZS%2BM%2Fx1GFQohsmpCoZWPGIdWBRpUn7QFN0hh6UjWUnJ4HDcQOi0LiZyfCilOAM8Trxr6ABXP84l5Q%2BshjfEo7iE5VrzEvyyDv6flC18yhoimFcsGqUDsbWe6Yhe2gIkX7W98w2QA%2B2FOZnhuWEWCRBaR%2FCPvVUFIHiJUT6BarTZXvFOE4m5R76ZMo7EIMYaIL8HSJroqT2f%2BRNbQsA5zHIPtHaqzCc2abSBjqkAb2kz2zJX%2BbqiJSXIUY4aknNqtlDQZcpoBwKjofmg%2FvqwBu4BCe%2BGk40YcC6rd%2Bd07dUIhub2eljwstWzSXNcVzvHGMNkwAcA5%2B2A6Z0I%2FYh6RGWn3zSzJOmne0e4dFYwhoa%2FvQy8Dr5mffKQlTpP5S575B9cobt2KniEQH79R26mG9FUiefBdeHNZYjwrYaqWH0CLZ6vtSlfF3JqNzZoDMdDE3P&X-Amz-Signature=f51a0895833c4d1748efca461b2e350cdd45c3f2b7b4153f4e720eb4be9c59f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5IRDZWS%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDDDzxAY7sTvIfSdeHKkf%2BAV8Ntd7fskmuiGKZiyPf%2FqgIhAOpf8tBnAQsxlTw5o%2FFr%2BVUlmdhiFUEUqFmLmIKnx9Z9Kv8DCDIQABoMNjM3NDIzMTgzODA1IgxnhcfZslsSyXTrHcoq3AOBpLqJ9K%2FQ1ynZlraE1fHx0BgPJ2r68AGWNNESGul2j8Oek0hvOU8zophqXQl4N8%2F8tmtocscbL8zq%2Bjgppo9XjG%2B4Dseql0M21QOftUm%2BM2yFFPKBUo68Qb1u4IESbQ7i5QPj0ltTJRf2Z21UsB4zGY%2B%2BiPYZezqTvQ6JVRAgHSwtCEMNqZfKXINme8p8QagcIzWYlMbbnS%2FfgKNoczUiItOtDAoXlyjvTwpDSkdwE57fK%2BnQsX1qGVDByoU%2BHPXAkUlcYvZOBUYe%2FmMubNzAkNrpSA4xuSYNZ%2BCELEPVPa%2FAcV2yYNABf1hU3sMwyCFuAV7p44pS5necWOxUPHctbSlXvqcY4PJ3LVq8Vle34ac2RHEMfQYercF5m1TfJdsWxH1FvAY6DuXMNBI2AHqVZM8q%2F3nfnVZS%2BM%2Fx1GFQohsmpCoZWPGIdWBRpUn7QFN0hh6UjWUnJ4HDcQOi0LiZyfCilOAM8Trxr6ABXP84l5Q%2BshjfEo7iE5VrzEvyyDv6flC18yhoimFcsGqUDsbWe6Yhe2gIkX7W98w2QA%2B2FOZnhuWEWCRBaR%2FCPvVUFIHiJUT6BarTZXvFOE4m5R76ZMo7EIMYaIL8HSJroqT2f%2BRNbQsA5zHIPtHaqzCc2abSBjqkAb2kz2zJX%2BbqiJSXIUY4aknNqtlDQZcpoBwKjofmg%2FvqwBu4BCe%2BGk40YcC6rd%2Bd07dUIhub2eljwstWzSXNcVzvHGMNkwAcA5%2B2A6Z0I%2FYh6RGWn3zSzJOmne0e4dFYwhoa%2FvQy8Dr5mffKQlTpP5S575B9cobt2KniEQH79R26mG9FUiefBdeHNZYjwrYaqWH0CLZ6vtSlfF3JqNzZoDMdDE3P&X-Amz-Signature=e68c7e73a0d1cae77472f0624830a3bf37a7a469f5b481af1d6dfb6ec7d71e80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
