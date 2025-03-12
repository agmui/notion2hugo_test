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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOHDFZ3F%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T110730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCyuXU40tVEdRl0BVKvAiCkGHeTVab78GfCkqR3jrksiwIgM9S%2FHJus%2BDg%2BB3vNickZ9yGbeCDCH7QtIcO8ggnb2TwqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwJ97hKUQaG22IJ7ircA9stsMKvxuF7BuFAQ9qIecUJCHKhMMj0Qn%2BeZctnW4RnEFB2%2BBRF%2FXtyU53KwhtgdlPA6kpqY8k94N5zNnvAV5PLccdOATEFJmq2H%2FKfAaWGizRjQ%2BiBmQC0RM3i%2BVirlNx8UVoBDgTYZqTOHB5OsTsnmzmD2mcdw6Z0QodY6cBXZ55XTA67YQ7IWHVfERWO7b4f8bENz69cUMVL7PSrFzknjgHD10NRYHauYGMObCtZtn6WbLFHQL86KhJHwmW4qNqJYqS0afnQCyhLlz66pLeHae8LC0gdwrhAyhGE8mhyrAMiHtPpwEglUrpcm6F4911je0NSxHFilSZdsGbhg98WUI%2FziyBkB2WFerl5npVYiAYOtc5243yGBJ7bzvTxp8HN4hmBwAH5lPF1c3%2B2UmAQKwqqaehI0U5uo4A44zKX2W2%2Foy5KR1sCyuWCqX8hq03Z7CxrHxoCBsUM1l%2B5pAkrG%2FGckgVqVbdgQC53CO7ImjURGDGfKvVQ9xERHDFN%2F6VOhA%2BYrYU1pUjQpvuJ%2BaqwobcNv2EnU3%2B4OLhoVm7qmTQOfYtuiDQ17aWDi9BDw5JyNBfiTuQY5f2UEHPKVULr2lQlpYdWzf5K%2F%2Fgr2BXz2rjElRhV4BfjGjKSML69xb4GOqUBwZA0VShM9cij5hTkcD5YicQoKVqIRhpTqcNq8OZT%2FmHEVX50XPwRDwYDjwgrdjI0ekYQWn5euag%2BtJ3k%2FOk2PtVFQlcUQ4kb9KsRAkr%2FPcMabJ%2F%2FquMCWf1zZ4vPnzSQ8Yy8j%2BFuIgLPziGC4AbKXQQa6E3h2ZM2KZ%2FHuyUNHhxXSbQh4I8%2B0qPFrMGNWtXjkT7WxOv8UKwUCpH5c9OfdLYmX4sS&X-Amz-Signature=99d73dc41373feb284f2459b42dd76c16087486886c9ff98a6d6dde16d98deca&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOHDFZ3F%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T110730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCyuXU40tVEdRl0BVKvAiCkGHeTVab78GfCkqR3jrksiwIgM9S%2FHJus%2BDg%2BB3vNickZ9yGbeCDCH7QtIcO8ggnb2TwqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwJ97hKUQaG22IJ7ircA9stsMKvxuF7BuFAQ9qIecUJCHKhMMj0Qn%2BeZctnW4RnEFB2%2BBRF%2FXtyU53KwhtgdlPA6kpqY8k94N5zNnvAV5PLccdOATEFJmq2H%2FKfAaWGizRjQ%2BiBmQC0RM3i%2BVirlNx8UVoBDgTYZqTOHB5OsTsnmzmD2mcdw6Z0QodY6cBXZ55XTA67YQ7IWHVfERWO7b4f8bENz69cUMVL7PSrFzknjgHD10NRYHauYGMObCtZtn6WbLFHQL86KhJHwmW4qNqJYqS0afnQCyhLlz66pLeHae8LC0gdwrhAyhGE8mhyrAMiHtPpwEglUrpcm6F4911je0NSxHFilSZdsGbhg98WUI%2FziyBkB2WFerl5npVYiAYOtc5243yGBJ7bzvTxp8HN4hmBwAH5lPF1c3%2B2UmAQKwqqaehI0U5uo4A44zKX2W2%2Foy5KR1sCyuWCqX8hq03Z7CxrHxoCBsUM1l%2B5pAkrG%2FGckgVqVbdgQC53CO7ImjURGDGfKvVQ9xERHDFN%2F6VOhA%2BYrYU1pUjQpvuJ%2BaqwobcNv2EnU3%2B4OLhoVm7qmTQOfYtuiDQ17aWDi9BDw5JyNBfiTuQY5f2UEHPKVULr2lQlpYdWzf5K%2F%2Fgr2BXz2rjElRhV4BfjGjKSML69xb4GOqUBwZA0VShM9cij5hTkcD5YicQoKVqIRhpTqcNq8OZT%2FmHEVX50XPwRDwYDjwgrdjI0ekYQWn5euag%2BtJ3k%2FOk2PtVFQlcUQ4kb9KsRAkr%2FPcMabJ%2F%2FquMCWf1zZ4vPnzSQ8Yy8j%2BFuIgLPziGC4AbKXQQa6E3h2ZM2KZ%2FHuyUNHhxXSbQh4I8%2B0qPFrMGNWtXjkT7WxOv8UKwUCpH5c9OfdLYmX4sS&X-Amz-Signature=22188bed6ef0617fc45fa0f9d14f000cb65af726f090436f8e3cc7aae0908556&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOHDFZ3F%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T110730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCyuXU40tVEdRl0BVKvAiCkGHeTVab78GfCkqR3jrksiwIgM9S%2FHJus%2BDg%2BB3vNickZ9yGbeCDCH7QtIcO8ggnb2TwqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwJ97hKUQaG22IJ7ircA9stsMKvxuF7BuFAQ9qIecUJCHKhMMj0Qn%2BeZctnW4RnEFB2%2BBRF%2FXtyU53KwhtgdlPA6kpqY8k94N5zNnvAV5PLccdOATEFJmq2H%2FKfAaWGizRjQ%2BiBmQC0RM3i%2BVirlNx8UVoBDgTYZqTOHB5OsTsnmzmD2mcdw6Z0QodY6cBXZ55XTA67YQ7IWHVfERWO7b4f8bENz69cUMVL7PSrFzknjgHD10NRYHauYGMObCtZtn6WbLFHQL86KhJHwmW4qNqJYqS0afnQCyhLlz66pLeHae8LC0gdwrhAyhGE8mhyrAMiHtPpwEglUrpcm6F4911je0NSxHFilSZdsGbhg98WUI%2FziyBkB2WFerl5npVYiAYOtc5243yGBJ7bzvTxp8HN4hmBwAH5lPF1c3%2B2UmAQKwqqaehI0U5uo4A44zKX2W2%2Foy5KR1sCyuWCqX8hq03Z7CxrHxoCBsUM1l%2B5pAkrG%2FGckgVqVbdgQC53CO7ImjURGDGfKvVQ9xERHDFN%2F6VOhA%2BYrYU1pUjQpvuJ%2BaqwobcNv2EnU3%2B4OLhoVm7qmTQOfYtuiDQ17aWDi9BDw5JyNBfiTuQY5f2UEHPKVULr2lQlpYdWzf5K%2F%2Fgr2BXz2rjElRhV4BfjGjKSML69xb4GOqUBwZA0VShM9cij5hTkcD5YicQoKVqIRhpTqcNq8OZT%2FmHEVX50XPwRDwYDjwgrdjI0ekYQWn5euag%2BtJ3k%2FOk2PtVFQlcUQ4kb9KsRAkr%2FPcMabJ%2F%2FquMCWf1zZ4vPnzSQ8Yy8j%2BFuIgLPziGC4AbKXQQa6E3h2ZM2KZ%2FHuyUNHhxXSbQh4I8%2B0qPFrMGNWtXjkT7WxOv8UKwUCpH5c9OfdLYmX4sS&X-Amz-Signature=5f09aeeef93497d4fc7eed5896618b14b8eee21c5805e625e8f861f7a0de5d28&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
