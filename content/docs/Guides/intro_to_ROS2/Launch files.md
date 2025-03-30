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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7S2CCY5%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T100739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIBQQTXWMgImq90ledtjxhlWQBClWcKiWH2Exu2B1px40AiAraMbHK4%2FLfdKv2E1Hqxbk84OD0DNQ7U5Yi7DfM3dEGiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBMz3FAMZTtnAjXvbKtwDG4DgSxiCDJ3TCoofVp1rWSKxVDyLfQ4GVRSjzlcfSsONvpAQJEofMtDOwyR8Xa2mrLqMcwnVrj82ASltGpIVXDWywuPJCaMmzRNHUtQpo%2Bu3wTctbKyMFejCJylR2vu9yHII6ANObiI8VcyHoKMgWUn55ffXNUzXTYVJaA%2BUMIQoNK6e26MBvAJ66GA6CzZViFbWRJ5UWPE8IqGRor0BKmRDkG0d%2FnNTHXeFl981sJ2o6j62Jl6MUzLPHO9VSy1192oAJofVOlHAsyomUG21LIXwuN26nmiGiVW3MmCh18nqvHN03NrhfiywvvphkqeLtO%2BmiKewVh0sAvUIzC4kpzJ77CwG9jLm%2Fls6lGc9A4LRRd9npRqyySUgbfSwkxZwSH0l2VQsPEORJVCxhVE83R2MOlXispDwgSqkG97zhjhXpE1Hzced%2FiJtiYzYBtGXMuBRXOol3kfJMQS6hOHFoEkwZXn8RCaFYOdJoaAtUvQEcZJDNrgCR4HYTwE4eyiCgKHFYW41GA8fqAyQ2XHv2Qkn6kdvyjK80%2FXfMpytkyX%2F9g4kvEdJAXXENvaxXJdFE9Kse6PjSh1yjD42IN69%2FMdJL6KyABLwvX%2FADV0O4nbtagKALrIL%2BFqYdiYwuu%2BjvwY6pgGIugkIWnskVUVZRe%2Bje9WdJM%2Fj3%2FAhjNQrgeg0egbuJnc9Bw1ejUweH9E3J933tesaT7r4ObI7hpzYNZBNj5GKSFCkUGGKBtPXu4LCRb%2FZiJwN%2FWXM%2BrhbsUNgSDa8YtWmtz5ftWa7B%2Fa9CgGIR0g1N0G5knyTU6I3DZlmZDvLQETNAd2LYrHx702KhBQMcSnnDlBJy0lz85oMkLmeEgJ%2BHCY8lSoB&X-Amz-Signature=d131e91d88b44da129179eada27bcc30fc6ee772c4562213b5badbf97b968a89&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7S2CCY5%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T100739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIBQQTXWMgImq90ledtjxhlWQBClWcKiWH2Exu2B1px40AiAraMbHK4%2FLfdKv2E1Hqxbk84OD0DNQ7U5Yi7DfM3dEGiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBMz3FAMZTtnAjXvbKtwDG4DgSxiCDJ3TCoofVp1rWSKxVDyLfQ4GVRSjzlcfSsONvpAQJEofMtDOwyR8Xa2mrLqMcwnVrj82ASltGpIVXDWywuPJCaMmzRNHUtQpo%2Bu3wTctbKyMFejCJylR2vu9yHII6ANObiI8VcyHoKMgWUn55ffXNUzXTYVJaA%2BUMIQoNK6e26MBvAJ66GA6CzZViFbWRJ5UWPE8IqGRor0BKmRDkG0d%2FnNTHXeFl981sJ2o6j62Jl6MUzLPHO9VSy1192oAJofVOlHAsyomUG21LIXwuN26nmiGiVW3MmCh18nqvHN03NrhfiywvvphkqeLtO%2BmiKewVh0sAvUIzC4kpzJ77CwG9jLm%2Fls6lGc9A4LRRd9npRqyySUgbfSwkxZwSH0l2VQsPEORJVCxhVE83R2MOlXispDwgSqkG97zhjhXpE1Hzced%2FiJtiYzYBtGXMuBRXOol3kfJMQS6hOHFoEkwZXn8RCaFYOdJoaAtUvQEcZJDNrgCR4HYTwE4eyiCgKHFYW41GA8fqAyQ2XHv2Qkn6kdvyjK80%2FXfMpytkyX%2F9g4kvEdJAXXENvaxXJdFE9Kse6PjSh1yjD42IN69%2FMdJL6KyABLwvX%2FADV0O4nbtagKALrIL%2BFqYdiYwuu%2BjvwY6pgGIugkIWnskVUVZRe%2Bje9WdJM%2Fj3%2FAhjNQrgeg0egbuJnc9Bw1ejUweH9E3J933tesaT7r4ObI7hpzYNZBNj5GKSFCkUGGKBtPXu4LCRb%2FZiJwN%2FWXM%2BrhbsUNgSDa8YtWmtz5ftWa7B%2Fa9CgGIR0g1N0G5knyTU6I3DZlmZDvLQETNAd2LYrHx702KhBQMcSnnDlBJy0lz85oMkLmeEgJ%2BHCY8lSoB&X-Amz-Signature=b075fe13079c8f74a28b7076a6319f1baf2c41d8723662a50ad43eda7ea9f211&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7S2CCY5%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T100739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIBQQTXWMgImq90ledtjxhlWQBClWcKiWH2Exu2B1px40AiAraMbHK4%2FLfdKv2E1Hqxbk84OD0DNQ7U5Yi7DfM3dEGiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBMz3FAMZTtnAjXvbKtwDG4DgSxiCDJ3TCoofVp1rWSKxVDyLfQ4GVRSjzlcfSsONvpAQJEofMtDOwyR8Xa2mrLqMcwnVrj82ASltGpIVXDWywuPJCaMmzRNHUtQpo%2Bu3wTctbKyMFejCJylR2vu9yHII6ANObiI8VcyHoKMgWUn55ffXNUzXTYVJaA%2BUMIQoNK6e26MBvAJ66GA6CzZViFbWRJ5UWPE8IqGRor0BKmRDkG0d%2FnNTHXeFl981sJ2o6j62Jl6MUzLPHO9VSy1192oAJofVOlHAsyomUG21LIXwuN26nmiGiVW3MmCh18nqvHN03NrhfiywvvphkqeLtO%2BmiKewVh0sAvUIzC4kpzJ77CwG9jLm%2Fls6lGc9A4LRRd9npRqyySUgbfSwkxZwSH0l2VQsPEORJVCxhVE83R2MOlXispDwgSqkG97zhjhXpE1Hzced%2FiJtiYzYBtGXMuBRXOol3kfJMQS6hOHFoEkwZXn8RCaFYOdJoaAtUvQEcZJDNrgCR4HYTwE4eyiCgKHFYW41GA8fqAyQ2XHv2Qkn6kdvyjK80%2FXfMpytkyX%2F9g4kvEdJAXXENvaxXJdFE9Kse6PjSh1yjD42IN69%2FMdJL6KyABLwvX%2FADV0O4nbtagKALrIL%2BFqYdiYwuu%2BjvwY6pgGIugkIWnskVUVZRe%2Bje9WdJM%2Fj3%2FAhjNQrgeg0egbuJnc9Bw1ejUweH9E3J933tesaT7r4ObI7hpzYNZBNj5GKSFCkUGGKBtPXu4LCRb%2FZiJwN%2FWXM%2BrhbsUNgSDa8YtWmtz5ftWa7B%2Fa9CgGIR0g1N0G5knyTU6I3DZlmZDvLQETNAd2LYrHx702KhBQMcSnnDlBJy0lz85oMkLmeEgJ%2BHCY8lSoB&X-Amz-Signature=234ef3b8e3f8986907576d17142472267588d1569b01bc82f76b51c64fef26da&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
