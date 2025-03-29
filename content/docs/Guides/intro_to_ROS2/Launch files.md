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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F3WIR3F%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T003822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIFzw%2FDJEUJnFD9GEDQxsOJOKxT4jk825uEVEcJRpFgGoAiAPwbD6VH%2FJfztSRpd5zzKwRsj2woK2LMEDCSoUA2Jvtyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMVBUBDOcknlCZoHBlKtwDApTx7PUDqCQUATf8WqrgAg3hfjfHjlLuzE6F28m0UlZ5e6Oa7lNWV7PpSgP8BjZZCpZEvRJMuEFtfucaI66sbrhz4wQrWB%2FJ6%2BtiU%2Bg7kvpyCW5VRpaip1oIsT6G2L6eQkJxkH%2Bax6USAcceOb1Bcx0K83Amd%2BNP4DXQPyKQo%2FNqcTKP9P%2FW5nOaTQjh7c%2FwL0giqA3j8iOjyLaUIy36U0HTNnEoJ1hb1FTXWJkt24SyzGe8G0JLJMU8NwSpPCJaxe4xUaaKmU50ztvJeL1cgpEBvy%2Fg5P1kjWIsz%2FhT4Icw4ZaqvxybQBQDjwGKJOzFqt1OOa1Xx4iG4jyucImkESjynzeXMcGhHFQSQue%2FgATolJCSJu399%2FrlEGlcnd90NUIN%2FgZ0OX0vPN9BUxFvDBqL1Qm89pTwfDEoWWoFZ9SXjsqcAlYOTRY5IIV8Csho%2B%2BZm%2FNQF5CqpkalH7tQN6keqhbZPsjDdx6Tyk1%2Fakv8yVmoFyX4VYar3ebwyknqdl0xQa9DAmZ%2BP9gdZMu03C59%2FnVRtJDT8YBY6BJIDt0lAKVx9yPJWYaFzRVF0kCviiIW%2BCR1T3HvKQN5JqoL69bR%2F5Q8fSYYt5iu4eF2XjrjqwmUSNXcyww28AAUw8t6cvwY6pgGB5HgBj%2FpsvnQ1kjghHO5Nd0q7jlwEuWsHx%2BxI8oQEVt0G5dNQCkHIOnIr9l4vRQVK8otY8Il%2Fv5wCXuWL5RDiiTrUBftQrXEbz8SpUvn3PtrCAjGiCoZmpZ%2FvFpw5fnOYiTdVS2%2BdgVAj7bMcfNvY2o9LjSCxsjgCLRziqVTyCx3jJskpi%2FbRTDogYATV5ZLIjL%2B8F4yIG8VtxX6lNRnC5QV6QYb8&X-Amz-Signature=1de4fbc8676d52ea2597a513c1e7df5c774da39a474d5a7aa9145df564eea644&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F3WIR3F%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T003822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIFzw%2FDJEUJnFD9GEDQxsOJOKxT4jk825uEVEcJRpFgGoAiAPwbD6VH%2FJfztSRpd5zzKwRsj2woK2LMEDCSoUA2Jvtyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMVBUBDOcknlCZoHBlKtwDApTx7PUDqCQUATf8WqrgAg3hfjfHjlLuzE6F28m0UlZ5e6Oa7lNWV7PpSgP8BjZZCpZEvRJMuEFtfucaI66sbrhz4wQrWB%2FJ6%2BtiU%2Bg7kvpyCW5VRpaip1oIsT6G2L6eQkJxkH%2Bax6USAcceOb1Bcx0K83Amd%2BNP4DXQPyKQo%2FNqcTKP9P%2FW5nOaTQjh7c%2FwL0giqA3j8iOjyLaUIy36U0HTNnEoJ1hb1FTXWJkt24SyzGe8G0JLJMU8NwSpPCJaxe4xUaaKmU50ztvJeL1cgpEBvy%2Fg5P1kjWIsz%2FhT4Icw4ZaqvxybQBQDjwGKJOzFqt1OOa1Xx4iG4jyucImkESjynzeXMcGhHFQSQue%2FgATolJCSJu399%2FrlEGlcnd90NUIN%2FgZ0OX0vPN9BUxFvDBqL1Qm89pTwfDEoWWoFZ9SXjsqcAlYOTRY5IIV8Csho%2B%2BZm%2FNQF5CqpkalH7tQN6keqhbZPsjDdx6Tyk1%2Fakv8yVmoFyX4VYar3ebwyknqdl0xQa9DAmZ%2BP9gdZMu03C59%2FnVRtJDT8YBY6BJIDt0lAKVx9yPJWYaFzRVF0kCviiIW%2BCR1T3HvKQN5JqoL69bR%2F5Q8fSYYt5iu4eF2XjrjqwmUSNXcyww28AAUw8t6cvwY6pgGB5HgBj%2FpsvnQ1kjghHO5Nd0q7jlwEuWsHx%2BxI8oQEVt0G5dNQCkHIOnIr9l4vRQVK8otY8Il%2Fv5wCXuWL5RDiiTrUBftQrXEbz8SpUvn3PtrCAjGiCoZmpZ%2FvFpw5fnOYiTdVS2%2BdgVAj7bMcfNvY2o9LjSCxsjgCLRziqVTyCx3jJskpi%2FbRTDogYATV5ZLIjL%2B8F4yIG8VtxX6lNRnC5QV6QYb8&X-Amz-Signature=107b5ede04e2ac5bb4b89fcdcd924d10b91f0c9dfa69aab8d825d7000680f22c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F3WIR3F%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T003822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIFzw%2FDJEUJnFD9GEDQxsOJOKxT4jk825uEVEcJRpFgGoAiAPwbD6VH%2FJfztSRpd5zzKwRsj2woK2LMEDCSoUA2Jvtyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMVBUBDOcknlCZoHBlKtwDApTx7PUDqCQUATf8WqrgAg3hfjfHjlLuzE6F28m0UlZ5e6Oa7lNWV7PpSgP8BjZZCpZEvRJMuEFtfucaI66sbrhz4wQrWB%2FJ6%2BtiU%2Bg7kvpyCW5VRpaip1oIsT6G2L6eQkJxkH%2Bax6USAcceOb1Bcx0K83Amd%2BNP4DXQPyKQo%2FNqcTKP9P%2FW5nOaTQjh7c%2FwL0giqA3j8iOjyLaUIy36U0HTNnEoJ1hb1FTXWJkt24SyzGe8G0JLJMU8NwSpPCJaxe4xUaaKmU50ztvJeL1cgpEBvy%2Fg5P1kjWIsz%2FhT4Icw4ZaqvxybQBQDjwGKJOzFqt1OOa1Xx4iG4jyucImkESjynzeXMcGhHFQSQue%2FgATolJCSJu399%2FrlEGlcnd90NUIN%2FgZ0OX0vPN9BUxFvDBqL1Qm89pTwfDEoWWoFZ9SXjsqcAlYOTRY5IIV8Csho%2B%2BZm%2FNQF5CqpkalH7tQN6keqhbZPsjDdx6Tyk1%2Fakv8yVmoFyX4VYar3ebwyknqdl0xQa9DAmZ%2BP9gdZMu03C59%2FnVRtJDT8YBY6BJIDt0lAKVx9yPJWYaFzRVF0kCviiIW%2BCR1T3HvKQN5JqoL69bR%2F5Q8fSYYt5iu4eF2XjrjqwmUSNXcyww28AAUw8t6cvwY6pgGB5HgBj%2FpsvnQ1kjghHO5Nd0q7jlwEuWsHx%2BxI8oQEVt0G5dNQCkHIOnIr9l4vRQVK8otY8Il%2Fv5wCXuWL5RDiiTrUBftQrXEbz8SpUvn3PtrCAjGiCoZmpZ%2FvFpw5fnOYiTdVS2%2BdgVAj7bMcfNvY2o9LjSCxsjgCLRziqVTyCx3jJskpi%2FbRTDogYATV5ZLIjL%2B8F4yIG8VtxX6lNRnC5QV6QYb8&X-Amz-Signature=cd93085e34e62bcdb1312e57ee015c6f5c5f4f94550f716735900fb4b2c8ee22&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
