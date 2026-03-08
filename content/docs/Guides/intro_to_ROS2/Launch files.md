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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4FE6TXB%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDgRhdbS%2FLuuS6bcuuARSnr5msk8FRKvFngS1IkgJZ%2BbAIhAN72XXJJ%2BCgaPXj8c%2B8Z4knlJoYhaVbTxLTviB%2BpCYztKv8DCAoQABoMNjM3NDIzMTgzODA1Igyw0Hw9F79Qo9u68PIq3AOPHoSa1XkAndvf0wqUlNouDzkLkZU83fNmr7cjZOWHr0FT5za0o151ooaz%2BcG9qpfQxtXmIaSKtKdnyBc68EQ6cqT3fgAukZKHhd2eTbXsPyOt31oUMyJBchmdd55xeg8Lmz9eF9BX4RFNZ%2BD6wUhU2By7M7r%2FKLQhW%2BxZVxJB5ezW1o2EFqUaehd%2FDBMQT6mThYmyKDj1t%2BZeDhmKVlJa%2BoPLfemVPrfxf6oKf8MwYwp3JOqBlvPdPYjjpNkl77KH5HSpWx%2FTBdArZ80mSaIgnq0Tx312tlewXYxmg8cKOevGMnMUjokaVN4BKfwBp2OHnA6zOK7ME9Vh7DswMjjsE%2Fstx0hBRGTki5Ko4AwtTQmov2P18muny32qkXwDiQy3Jo6XlI0tAw8mIAvjazgkSTQ98SDBR1ulafcdMN%2FZ8EBcrEsYeI8Jg4WmKL3VQpEPpibaHYw4ROGMZTWyfyIFOuoUIGWF5XdbsMWvspp2qoahtry9LryOKJMFpedX7EE5KFD2R4by4ex8tdes6BLzyMMhNxZmeIOhsp0rhXqFfqP24PlC0NetNweBaY6H1utep%2F%2Bn1HxBQ3bqtTrBvW8%2BER9rvoXY0MQnZ3G0i4ed9mOjbh4mpSfizVyfQzCEnrPNBjqkAR58iyxx81eEKOWV4%2BMbjhBq%2Br4HNHvVVkrczJSyGIMWnePADfLyEYu7eVsvpqAxl3JTipjpgVyHi0dZnoaLI2MAhHipux8%2FGs%2FQO48qSqxNcjsQorFjseCHwceRNFQ4zKlmDluVKwr6zCkE7ueTGqxjRuOEsYD6R8Bi19me6lNukUtfTwYIFPdp9%2BmT%2BrULGYiZN7bYQW0lFdMia5b2eGYdRmz7&X-Amz-Signature=4a6f45c3b8dee9258bea7bde921d2b3093727d97dc58546d690cecaff0df459e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4FE6TXB%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDgRhdbS%2FLuuS6bcuuARSnr5msk8FRKvFngS1IkgJZ%2BbAIhAN72XXJJ%2BCgaPXj8c%2B8Z4knlJoYhaVbTxLTviB%2BpCYztKv8DCAoQABoMNjM3NDIzMTgzODA1Igyw0Hw9F79Qo9u68PIq3AOPHoSa1XkAndvf0wqUlNouDzkLkZU83fNmr7cjZOWHr0FT5za0o151ooaz%2BcG9qpfQxtXmIaSKtKdnyBc68EQ6cqT3fgAukZKHhd2eTbXsPyOt31oUMyJBchmdd55xeg8Lmz9eF9BX4RFNZ%2BD6wUhU2By7M7r%2FKLQhW%2BxZVxJB5ezW1o2EFqUaehd%2FDBMQT6mThYmyKDj1t%2BZeDhmKVlJa%2BoPLfemVPrfxf6oKf8MwYwp3JOqBlvPdPYjjpNkl77KH5HSpWx%2FTBdArZ80mSaIgnq0Tx312tlewXYxmg8cKOevGMnMUjokaVN4BKfwBp2OHnA6zOK7ME9Vh7DswMjjsE%2Fstx0hBRGTki5Ko4AwtTQmov2P18muny32qkXwDiQy3Jo6XlI0tAw8mIAvjazgkSTQ98SDBR1ulafcdMN%2FZ8EBcrEsYeI8Jg4WmKL3VQpEPpibaHYw4ROGMZTWyfyIFOuoUIGWF5XdbsMWvspp2qoahtry9LryOKJMFpedX7EE5KFD2R4by4ex8tdes6BLzyMMhNxZmeIOhsp0rhXqFfqP24PlC0NetNweBaY6H1utep%2F%2Bn1HxBQ3bqtTrBvW8%2BER9rvoXY0MQnZ3G0i4ed9mOjbh4mpSfizVyfQzCEnrPNBjqkAR58iyxx81eEKOWV4%2BMbjhBq%2Br4HNHvVVkrczJSyGIMWnePADfLyEYu7eVsvpqAxl3JTipjpgVyHi0dZnoaLI2MAhHipux8%2FGs%2FQO48qSqxNcjsQorFjseCHwceRNFQ4zKlmDluVKwr6zCkE7ueTGqxjRuOEsYD6R8Bi19me6lNukUtfTwYIFPdp9%2BmT%2BrULGYiZN7bYQW0lFdMia5b2eGYdRmz7&X-Amz-Signature=35cb0f405a56107ccf3a0b202dee47e67ceaa029d131817fb45e5a5effac9dc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4FE6TXB%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDgRhdbS%2FLuuS6bcuuARSnr5msk8FRKvFngS1IkgJZ%2BbAIhAN72XXJJ%2BCgaPXj8c%2B8Z4knlJoYhaVbTxLTviB%2BpCYztKv8DCAoQABoMNjM3NDIzMTgzODA1Igyw0Hw9F79Qo9u68PIq3AOPHoSa1XkAndvf0wqUlNouDzkLkZU83fNmr7cjZOWHr0FT5za0o151ooaz%2BcG9qpfQxtXmIaSKtKdnyBc68EQ6cqT3fgAukZKHhd2eTbXsPyOt31oUMyJBchmdd55xeg8Lmz9eF9BX4RFNZ%2BD6wUhU2By7M7r%2FKLQhW%2BxZVxJB5ezW1o2EFqUaehd%2FDBMQT6mThYmyKDj1t%2BZeDhmKVlJa%2BoPLfemVPrfxf6oKf8MwYwp3JOqBlvPdPYjjpNkl77KH5HSpWx%2FTBdArZ80mSaIgnq0Tx312tlewXYxmg8cKOevGMnMUjokaVN4BKfwBp2OHnA6zOK7ME9Vh7DswMjjsE%2Fstx0hBRGTki5Ko4AwtTQmov2P18muny32qkXwDiQy3Jo6XlI0tAw8mIAvjazgkSTQ98SDBR1ulafcdMN%2FZ8EBcrEsYeI8Jg4WmKL3VQpEPpibaHYw4ROGMZTWyfyIFOuoUIGWF5XdbsMWvspp2qoahtry9LryOKJMFpedX7EE5KFD2R4by4ex8tdes6BLzyMMhNxZmeIOhsp0rhXqFfqP24PlC0NetNweBaY6H1utep%2F%2Bn1HxBQ3bqtTrBvW8%2BER9rvoXY0MQnZ3G0i4ed9mOjbh4mpSfizVyfQzCEnrPNBjqkAR58iyxx81eEKOWV4%2BMbjhBq%2Br4HNHvVVkrczJSyGIMWnePADfLyEYu7eVsvpqAxl3JTipjpgVyHi0dZnoaLI2MAhHipux8%2FGs%2FQO48qSqxNcjsQorFjseCHwceRNFQ4zKlmDluVKwr6zCkE7ueTGqxjRuOEsYD6R8Bi19me6lNukUtfTwYIFPdp9%2BmT%2BrULGYiZN7bYQW0lFdMia5b2eGYdRmz7&X-Amz-Signature=c6626309fb1c68c27eddcc22ca68bd9302e128c323d5d80c7c19e9898a1b8113&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
