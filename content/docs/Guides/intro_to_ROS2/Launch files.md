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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4UOJA6Y%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T160821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIBlp1iFyV8f9k5g4ECsLhORX%2BYALtXlPl5PnHj8dftvKAiA2EKbeL4AJKKxKHr%2F%2F0%2BK3xbVzILfpLxaN0TzHKUTR3yqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN4e2G83wxD7YXvEFKtwD9CbUVjP385N54u8d%2B1kIRJny7Q3iEPh3QhfALuh8EALlahaTDS1bOlM2d5uAS%2Fh0JHUOsrp3%2FeNu4PZLngWKZP0KjFr51ouM3nLFazgmmTzPObn%2Bk6XTOBHA1Pa2YfFn5v81nbJyZnZt6OReJnz0KbBbKEXLqKMyYTaNykzUBxA48u4Un2teLVKdtHBkzZn7uRC8wbKbN9pqB3aCRrnNA3NZhHmP8%2BgNXrS%2FbeAkiR1CU%2FWrdde%2BEKid1Yq3UzdA5t3boaTB9RQP0lqJPFB9COH2jnRB8nx%2BuCghcENkWNJvyTnWWLanUq912jtMgE1aO51Q2h0AWB%2Baqbt%2B6WRo8440%2FR825oObWxmZe%2Fv26xjG9RLF0hHQ6rj%2FAQQsyCWoj867iu%2BD7Vik0vQ3lr7zU6iAjqd%2Ba4cQUbQ8%2BIHedi867yTOh1wcXbUNeVhmvGc67XyKcrRp7xWHA0TkELtZ%2FLQhnnKbcZGLy%2ByIq5jIfH47eHZNj4kDHK8wfyjdaDeuGX5O7MaIsZSJNphTXfiZxuX9969qa1p007adGILZ%2BUQ%2Bt86WTio0EY3%2FSfP9YM8oX8r%2FTFyubAyT4q3OTXkpt05AX0HvxFcajUPZFEvkHvWwNujlF%2FMYB9dlzA8wutOlvwY6pgGtAQ2m0OmES32xjSa0PlyD%2FeTehCiSxK0AzfQcLRsF%2FWdAre8L%2FZP9Qx1Kr1K2PwN4lDT%2FqdykL%2FKY11hc%2Flf7RWBguxwIcJvjqAMNQmGGOtFEXJheIVaKO5UHA83Zd%2F5iDPucxGH3AyxAw62muhtQsUz7W%2BPFLJ8kpjACp%2Bd4xq8Yy%2F1vEJW4%2Fp%2Ftm030gOvXxzNuOqCISMleoXzdZ95NTwBLlgLW&X-Amz-Signature=2a40e4f042fdb60664c5b1b76d9087905e6ec7b5556580adca1efd23a03551f1&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4UOJA6Y%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T160821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIBlp1iFyV8f9k5g4ECsLhORX%2BYALtXlPl5PnHj8dftvKAiA2EKbeL4AJKKxKHr%2F%2F0%2BK3xbVzILfpLxaN0TzHKUTR3yqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN4e2G83wxD7YXvEFKtwD9CbUVjP385N54u8d%2B1kIRJny7Q3iEPh3QhfALuh8EALlahaTDS1bOlM2d5uAS%2Fh0JHUOsrp3%2FeNu4PZLngWKZP0KjFr51ouM3nLFazgmmTzPObn%2Bk6XTOBHA1Pa2YfFn5v81nbJyZnZt6OReJnz0KbBbKEXLqKMyYTaNykzUBxA48u4Un2teLVKdtHBkzZn7uRC8wbKbN9pqB3aCRrnNA3NZhHmP8%2BgNXrS%2FbeAkiR1CU%2FWrdde%2BEKid1Yq3UzdA5t3boaTB9RQP0lqJPFB9COH2jnRB8nx%2BuCghcENkWNJvyTnWWLanUq912jtMgE1aO51Q2h0AWB%2Baqbt%2B6WRo8440%2FR825oObWxmZe%2Fv26xjG9RLF0hHQ6rj%2FAQQsyCWoj867iu%2BD7Vik0vQ3lr7zU6iAjqd%2Ba4cQUbQ8%2BIHedi867yTOh1wcXbUNeVhmvGc67XyKcrRp7xWHA0TkELtZ%2FLQhnnKbcZGLy%2ByIq5jIfH47eHZNj4kDHK8wfyjdaDeuGX5O7MaIsZSJNphTXfiZxuX9969qa1p007adGILZ%2BUQ%2Bt86WTio0EY3%2FSfP9YM8oX8r%2FTFyubAyT4q3OTXkpt05AX0HvxFcajUPZFEvkHvWwNujlF%2FMYB9dlzA8wutOlvwY6pgGtAQ2m0OmES32xjSa0PlyD%2FeTehCiSxK0AzfQcLRsF%2FWdAre8L%2FZP9Qx1Kr1K2PwN4lDT%2FqdykL%2FKY11hc%2Flf7RWBguxwIcJvjqAMNQmGGOtFEXJheIVaKO5UHA83Zd%2F5iDPucxGH3AyxAw62muhtQsUz7W%2BPFLJ8kpjACp%2Bd4xq8Yy%2F1vEJW4%2Fp%2Ftm030gOvXxzNuOqCISMleoXzdZ95NTwBLlgLW&X-Amz-Signature=ca36f42c49ba1a2dd30584445b784e92224cc35ff469ee3027aa0003ff5d94bd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4UOJA6Y%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T160821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIBlp1iFyV8f9k5g4ECsLhORX%2BYALtXlPl5PnHj8dftvKAiA2EKbeL4AJKKxKHr%2F%2F0%2BK3xbVzILfpLxaN0TzHKUTR3yqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN4e2G83wxD7YXvEFKtwD9CbUVjP385N54u8d%2B1kIRJny7Q3iEPh3QhfALuh8EALlahaTDS1bOlM2d5uAS%2Fh0JHUOsrp3%2FeNu4PZLngWKZP0KjFr51ouM3nLFazgmmTzPObn%2Bk6XTOBHA1Pa2YfFn5v81nbJyZnZt6OReJnz0KbBbKEXLqKMyYTaNykzUBxA48u4Un2teLVKdtHBkzZn7uRC8wbKbN9pqB3aCRrnNA3NZhHmP8%2BgNXrS%2FbeAkiR1CU%2FWrdde%2BEKid1Yq3UzdA5t3boaTB9RQP0lqJPFB9COH2jnRB8nx%2BuCghcENkWNJvyTnWWLanUq912jtMgE1aO51Q2h0AWB%2Baqbt%2B6WRo8440%2FR825oObWxmZe%2Fv26xjG9RLF0hHQ6rj%2FAQQsyCWoj867iu%2BD7Vik0vQ3lr7zU6iAjqd%2Ba4cQUbQ8%2BIHedi867yTOh1wcXbUNeVhmvGc67XyKcrRp7xWHA0TkELtZ%2FLQhnnKbcZGLy%2ByIq5jIfH47eHZNj4kDHK8wfyjdaDeuGX5O7MaIsZSJNphTXfiZxuX9969qa1p007adGILZ%2BUQ%2Bt86WTio0EY3%2FSfP9YM8oX8r%2FTFyubAyT4q3OTXkpt05AX0HvxFcajUPZFEvkHvWwNujlF%2FMYB9dlzA8wutOlvwY6pgGtAQ2m0OmES32xjSa0PlyD%2FeTehCiSxK0AzfQcLRsF%2FWdAre8L%2FZP9Qx1Kr1K2PwN4lDT%2FqdykL%2FKY11hc%2Flf7RWBguxwIcJvjqAMNQmGGOtFEXJheIVaKO5UHA83Zd%2F5iDPucxGH3AyxAw62muhtQsUz7W%2BPFLJ8kpjACp%2Bd4xq8Yy%2F1vEJW4%2Fp%2Ftm030gOvXxzNuOqCISMleoXzdZ95NTwBLlgLW&X-Amz-Signature=d41369fe1dd491cc67dc0fbca1e984be08b464112c5631a55723e15d1db7851d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
