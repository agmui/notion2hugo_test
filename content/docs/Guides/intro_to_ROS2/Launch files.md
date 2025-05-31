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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662242YO3T%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBcq%2FnhwhMwt33u8yLkJrUfoMatLQuKam%2B5rEsszu0YVAiEA12KpXvQ1KKYXuIRXVUUKDVsoVYaV%2BotUmuq12FbqZKwqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOpOCCCcIe7E9hRiFircA%2Flb9kjgfQU%2BK98Z3v5V0TLNan0YhThUPxqgyl8Ew1YoW7%2FT4%2FeNXaWGVhmbALikbEDG6tkPLexvjJJvWbKoQVpZCDqx%2B4dLrUhpFSOe0tRlYpYEMj5hCMVUERetjnUdjaoMElVsd5QsF3q9YqMa2BuUNyyXem4GBeUT6%2FA%2FUNeb7952Pg3lI0MLM1zFdN%2BLB9c8CFnF3Gf1YgXKTlOuYnnnVox6%2FhRpC6Boe6nv9Mn4yZlvPg42uZfRVEngE4Kr53WhUf6jlmAQg0w8Jna%2BBOPMdwedK7L9BEWwp7CY9Iu%2Baz9liLO3aWr%2B%2BBPsmgTlOIcDtHsdAMhIoX1N17XRfCK6576GgKfbN00K5etL2n597JrGB7NNkC7wnLEZ23trycs2IaNne1ywtgX9G9ZxTr7vVXQ99IyWTl%2BP1IOlKVJuJniQvW%2Fk94Xhjpbs7RQN0GwHpiLdkjgNuLbb7fCk%2Be53Q%2Fty91K1G%2BCbgnyOf%2F1HG9%2BNI7zeFtaYVdSVaQwVTgz2R6tebd5KNmqSGl4EHUvml56vKy0Q5z%2FWCllyfwAtKdC5yC%2BPZq%2B%2FZ6vQLQN2clyuB3Ik1AaTO%2FBuc6X6JEePXki2ULIhQfhKQnrtHo44C8u2FktvySJyE26pMNzm7MEGOqUBcBYmBcm0eaVVb4q1efJk4BDhW68D2XoVpQvf9HAfwDAHnENEft6i4nI%2FWSc8K4c1Be3LTNvorhAualGp%2BPBWT2865RpbH8a8pHj%2FV1JoZr9TdWsMTZfPmX9ER9q5SSzWBTnXgnZiXrDtUmXoxrgOtg6MAU6dSdAufaloBXjqLFT4ZeGGM8Cxnz8djcN1oiS8yzXdetB52Ljnj97ph2dRYrjiqXaU&X-Amz-Signature=0d3d9b1950db75aae2e1277be3f750b9a0709f93dfa88ebd6783b314d688235a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662242YO3T%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBcq%2FnhwhMwt33u8yLkJrUfoMatLQuKam%2B5rEsszu0YVAiEA12KpXvQ1KKYXuIRXVUUKDVsoVYaV%2BotUmuq12FbqZKwqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOpOCCCcIe7E9hRiFircA%2Flb9kjgfQU%2BK98Z3v5V0TLNan0YhThUPxqgyl8Ew1YoW7%2FT4%2FeNXaWGVhmbALikbEDG6tkPLexvjJJvWbKoQVpZCDqx%2B4dLrUhpFSOe0tRlYpYEMj5hCMVUERetjnUdjaoMElVsd5QsF3q9YqMa2BuUNyyXem4GBeUT6%2FA%2FUNeb7952Pg3lI0MLM1zFdN%2BLB9c8CFnF3Gf1YgXKTlOuYnnnVox6%2FhRpC6Boe6nv9Mn4yZlvPg42uZfRVEngE4Kr53WhUf6jlmAQg0w8Jna%2BBOPMdwedK7L9BEWwp7CY9Iu%2Baz9liLO3aWr%2B%2BBPsmgTlOIcDtHsdAMhIoX1N17XRfCK6576GgKfbN00K5etL2n597JrGB7NNkC7wnLEZ23trycs2IaNne1ywtgX9G9ZxTr7vVXQ99IyWTl%2BP1IOlKVJuJniQvW%2Fk94Xhjpbs7RQN0GwHpiLdkjgNuLbb7fCk%2Be53Q%2Fty91K1G%2BCbgnyOf%2F1HG9%2BNI7zeFtaYVdSVaQwVTgz2R6tebd5KNmqSGl4EHUvml56vKy0Q5z%2FWCllyfwAtKdC5yC%2BPZq%2B%2FZ6vQLQN2clyuB3Ik1AaTO%2FBuc6X6JEePXki2ULIhQfhKQnrtHo44C8u2FktvySJyE26pMNzm7MEGOqUBcBYmBcm0eaVVb4q1efJk4BDhW68D2XoVpQvf9HAfwDAHnENEft6i4nI%2FWSc8K4c1Be3LTNvorhAualGp%2BPBWT2865RpbH8a8pHj%2FV1JoZr9TdWsMTZfPmX9ER9q5SSzWBTnXgnZiXrDtUmXoxrgOtg6MAU6dSdAufaloBXjqLFT4ZeGGM8Cxnz8djcN1oiS8yzXdetB52Ljnj97ph2dRYrjiqXaU&X-Amz-Signature=2e80e065a7f582bae9a8f0abf90edf60dec2aba80071c7cb063fa169ac30b10b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662242YO3T%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBcq%2FnhwhMwt33u8yLkJrUfoMatLQuKam%2B5rEsszu0YVAiEA12KpXvQ1KKYXuIRXVUUKDVsoVYaV%2BotUmuq12FbqZKwqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOpOCCCcIe7E9hRiFircA%2Flb9kjgfQU%2BK98Z3v5V0TLNan0YhThUPxqgyl8Ew1YoW7%2FT4%2FeNXaWGVhmbALikbEDG6tkPLexvjJJvWbKoQVpZCDqx%2B4dLrUhpFSOe0tRlYpYEMj5hCMVUERetjnUdjaoMElVsd5QsF3q9YqMa2BuUNyyXem4GBeUT6%2FA%2FUNeb7952Pg3lI0MLM1zFdN%2BLB9c8CFnF3Gf1YgXKTlOuYnnnVox6%2FhRpC6Boe6nv9Mn4yZlvPg42uZfRVEngE4Kr53WhUf6jlmAQg0w8Jna%2BBOPMdwedK7L9BEWwp7CY9Iu%2Baz9liLO3aWr%2B%2BBPsmgTlOIcDtHsdAMhIoX1N17XRfCK6576GgKfbN00K5etL2n597JrGB7NNkC7wnLEZ23trycs2IaNne1ywtgX9G9ZxTr7vVXQ99IyWTl%2BP1IOlKVJuJniQvW%2Fk94Xhjpbs7RQN0GwHpiLdkjgNuLbb7fCk%2Be53Q%2Fty91K1G%2BCbgnyOf%2F1HG9%2BNI7zeFtaYVdSVaQwVTgz2R6tebd5KNmqSGl4EHUvml56vKy0Q5z%2FWCllyfwAtKdC5yC%2BPZq%2B%2FZ6vQLQN2clyuB3Ik1AaTO%2FBuc6X6JEePXki2ULIhQfhKQnrtHo44C8u2FktvySJyE26pMNzm7MEGOqUBcBYmBcm0eaVVb4q1efJk4BDhW68D2XoVpQvf9HAfwDAHnENEft6i4nI%2FWSc8K4c1Be3LTNvorhAualGp%2BPBWT2865RpbH8a8pHj%2FV1JoZr9TdWsMTZfPmX9ER9q5SSzWBTnXgnZiXrDtUmXoxrgOtg6MAU6dSdAufaloBXjqLFT4ZeGGM8Cxnz8djcN1oiS8yzXdetB52Ljnj97ph2dRYrjiqXaU&X-Amz-Signature=341b78a042b73f9c021b31bffa5edc3da6e80ca00c4ccb4d5cc5ca345d49b76d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
