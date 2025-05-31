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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GOENQ6J%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T230817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9DygVjr9%2BYCx%2FJCi64YyVxJXMMPNGL%2BgHFJKMZjtlsAiBQ1iyfKM31e%2BeplkvtY8Lr6j0eMNYdBAlfRw6DNIngjSqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgEHUQFpxPVLkjJllKtwDmGq1SNPA87ddpr4wq039juaIra742E8FEsmB2fgP%2FJpVy7vO5XVtQWNZ02mL0ZaTGfnp%2BQaIPUGAb0bqfVisiozUVaFXXr0yZuQ2mCvL3qXrKR4sdCU6VxrDE55PT1SY4clKjkfMU4%2FE9OaBmiIioP2bW9Tc15LZqOYjFaUmNeaFaUmdNfNGocyQPp2ltFcJZ5eHSCaT%2Fd4txmAumhqwwvQ%2FAo8vEMNyjmHBiPCGse%2BbaPoNoAsZvdbZ2ZwkIlZlIvNDzdvM0LoTw%2FwqGu7nHTNrSqofEgViQydKQc5vxCWPoP0yZswKNVzGFYxAp7EFvRj8USegpOwrmGqzWY9aRjUX086Z%2BDzu3Wr7TgV1edjbOnpieYmrTBbTwqnR7Gir3o3XRTuwtp3E%2B6rsOsjr9m7v8rFrFTNo7jA%2FkhUwUXBlbM5Ll6XbVDBg%2FPpNjqsI8CYgxlNFQUYjl8JFp3v1SF7J176RRSnfxYUrDQWHBLMg2ify06MFJn8rgiv23Krkl7qhxGr6fVyZYqX4Eh4YJ5V%2FWo1iQcBS4r9v%2Fn5w9hzXekf6NGwpct5rkkOX2H%2FScLE9hgyeICyCF6NNDFNEpUXO9Oc8dzky1emXiAHDTkMEYImqxm1TD%2BWLSC4wg8TtwQY6pgH4j5%2F8GyN3SRBKAUy9OMcIgqDTOd5mrlEW0orsKJv7zDQMxFnf5fiMICQ8UvG1htE7epv6BuzfCiWYnwO9UhNuTJ9RoknFmX5dhEx9yYXodcoq7QZvYaXyviNq0x56EH%2B%2B0%2BBeXp%2FFjaabNXdbg46u%2FIE4eQJsGrJgSu8pPJCTODaCI6VvLvbBGiT2Fxxst1qGAe8YmTqWJIK4tKRaNL0FeLpA4mdx&X-Amz-Signature=de2b968d7b8ad4c790c3ead74cc7fb518d0fc6f5b3cc0da967e5ba9eaf856342&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GOENQ6J%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T230817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9DygVjr9%2BYCx%2FJCi64YyVxJXMMPNGL%2BgHFJKMZjtlsAiBQ1iyfKM31e%2BeplkvtY8Lr6j0eMNYdBAlfRw6DNIngjSqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgEHUQFpxPVLkjJllKtwDmGq1SNPA87ddpr4wq039juaIra742E8FEsmB2fgP%2FJpVy7vO5XVtQWNZ02mL0ZaTGfnp%2BQaIPUGAb0bqfVisiozUVaFXXr0yZuQ2mCvL3qXrKR4sdCU6VxrDE55PT1SY4clKjkfMU4%2FE9OaBmiIioP2bW9Tc15LZqOYjFaUmNeaFaUmdNfNGocyQPp2ltFcJZ5eHSCaT%2Fd4txmAumhqwwvQ%2FAo8vEMNyjmHBiPCGse%2BbaPoNoAsZvdbZ2ZwkIlZlIvNDzdvM0LoTw%2FwqGu7nHTNrSqofEgViQydKQc5vxCWPoP0yZswKNVzGFYxAp7EFvRj8USegpOwrmGqzWY9aRjUX086Z%2BDzu3Wr7TgV1edjbOnpieYmrTBbTwqnR7Gir3o3XRTuwtp3E%2B6rsOsjr9m7v8rFrFTNo7jA%2FkhUwUXBlbM5Ll6XbVDBg%2FPpNjqsI8CYgxlNFQUYjl8JFp3v1SF7J176RRSnfxYUrDQWHBLMg2ify06MFJn8rgiv23Krkl7qhxGr6fVyZYqX4Eh4YJ5V%2FWo1iQcBS4r9v%2Fn5w9hzXekf6NGwpct5rkkOX2H%2FScLE9hgyeICyCF6NNDFNEpUXO9Oc8dzky1emXiAHDTkMEYImqxm1TD%2BWLSC4wg8TtwQY6pgH4j5%2F8GyN3SRBKAUy9OMcIgqDTOd5mrlEW0orsKJv7zDQMxFnf5fiMICQ8UvG1htE7epv6BuzfCiWYnwO9UhNuTJ9RoknFmX5dhEx9yYXodcoq7QZvYaXyviNq0x56EH%2B%2B0%2BBeXp%2FFjaabNXdbg46u%2FIE4eQJsGrJgSu8pPJCTODaCI6VvLvbBGiT2Fxxst1qGAe8YmTqWJIK4tKRaNL0FeLpA4mdx&X-Amz-Signature=94c8a0a13fa07b2b2414a93827a5d560847fc35c5882c7edb0bf6918407cc703&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GOENQ6J%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T230817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9DygVjr9%2BYCx%2FJCi64YyVxJXMMPNGL%2BgHFJKMZjtlsAiBQ1iyfKM31e%2BeplkvtY8Lr6j0eMNYdBAlfRw6DNIngjSqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgEHUQFpxPVLkjJllKtwDmGq1SNPA87ddpr4wq039juaIra742E8FEsmB2fgP%2FJpVy7vO5XVtQWNZ02mL0ZaTGfnp%2BQaIPUGAb0bqfVisiozUVaFXXr0yZuQ2mCvL3qXrKR4sdCU6VxrDE55PT1SY4clKjkfMU4%2FE9OaBmiIioP2bW9Tc15LZqOYjFaUmNeaFaUmdNfNGocyQPp2ltFcJZ5eHSCaT%2Fd4txmAumhqwwvQ%2FAo8vEMNyjmHBiPCGse%2BbaPoNoAsZvdbZ2ZwkIlZlIvNDzdvM0LoTw%2FwqGu7nHTNrSqofEgViQydKQc5vxCWPoP0yZswKNVzGFYxAp7EFvRj8USegpOwrmGqzWY9aRjUX086Z%2BDzu3Wr7TgV1edjbOnpieYmrTBbTwqnR7Gir3o3XRTuwtp3E%2B6rsOsjr9m7v8rFrFTNo7jA%2FkhUwUXBlbM5Ll6XbVDBg%2FPpNjqsI8CYgxlNFQUYjl8JFp3v1SF7J176RRSnfxYUrDQWHBLMg2ify06MFJn8rgiv23Krkl7qhxGr6fVyZYqX4Eh4YJ5V%2FWo1iQcBS4r9v%2Fn5w9hzXekf6NGwpct5rkkOX2H%2FScLE9hgyeICyCF6NNDFNEpUXO9Oc8dzky1emXiAHDTkMEYImqxm1TD%2BWLSC4wg8TtwQY6pgH4j5%2F8GyN3SRBKAUy9OMcIgqDTOd5mrlEW0orsKJv7zDQMxFnf5fiMICQ8UvG1htE7epv6BuzfCiWYnwO9UhNuTJ9RoknFmX5dhEx9yYXodcoq7QZvYaXyviNq0x56EH%2B%2B0%2BBeXp%2FFjaabNXdbg46u%2FIE4eQJsGrJgSu8pPJCTODaCI6VvLvbBGiT2Fxxst1qGAe8YmTqWJIK4tKRaNL0FeLpA4mdx&X-Amz-Signature=ee7045e8770072250d58f7da32d22f6a865296e7c448f6b24d18646e63c9e060&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
