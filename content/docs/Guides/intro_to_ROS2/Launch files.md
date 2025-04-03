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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXIHOKLR%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAspd399hqmXwZo0REVHMB%2B0U%2FefNikYkg7f%2FU8k4dJ6AiAKH%2B4AdI28qQ9CSy2F%2BHML5F%2FNA820Enflq3HfFTnX2iqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3tKFJWwFaMuoAC9CKtwDoBg4Vle0vw7dE2%2Bi9S46K%2FzXC7Mdsacbpn5vbhoWi%2B1wkkwUksM3NNvb5BcBLwuJqFLrMLoZXLu6V4cCOSVTuC0a2MS3M19S3viTmzJDvNc%2BuEjhhfbdDH5Pzd5%2Fov5KBXnxr%2FYF5bXT1yVy0Unk1VMwL6BFkOL8h0YauDX9PzSyEM6ajFvF031lYu8tSQBFhVAxD4FXGAjxma6Pc6NpcZJw5JcHpHWMDKX3pQ2v%2B9%2Bm0RWyYonRBb%2FcRoePWdx3CiZr9pcDr%2FchpxhXABktIg%2FppDvjmWqzMEc4SUuVk3xWPIsYVEOevgNgXf%2FomRYjI5aeyCaJ3Eym6ugh6l7X7icWFfjCcvbTLGzrz21wAolNC4gq0gfyPY%2BoYE1W6j4WXmB77%2FMuSFmQzYvktQSL3z1WGXBnONP5Wyt2UR6KuRsHfMCyAhiLEp2oEDGEEO1jNmjwDoRWNrgOMmaCn%2FOGwD%2Fvi%2BqIMbtM%2FPf%2BqPKkNNueSArL9y5pPM5fOf76we9j32IC4armpQj8qO9jmIiZKvRAUgHEYrsxKiFV0g9rYrT6QloqHVuBbg%2FUVFVJIDnsvFjxlOM%2FtZm2PRlVOiDv1wefN1COKlyNySPvwqasCHW9OiV0WrfTfjmzdvwwz4S8vwY6pgHgoApW%2FgBdVjTPxQY2A0C2Z%2Fp%2B5rEXEGNohr4%2FCxYQdhKBShAqPYiGplhxkNvsmY9TSNjjScWveMpsGqf5ctFdnfBiw%2FlRbVZwr1l7b2g5FSS1DF%2B3dQvyLE3HcAVsAYdgqld6tiSjJl%2FqlFj3KvqLMpcI2UsJXMOeiEWjdnA%2BKkrXXlbda0NJ3iq3B6aR5r%2BpZBVz77gKx98jLH6l6dRiv3l8q0pf&X-Amz-Signature=d201874810e6a0201d52c09d54c8a4b3469ace8afa68ccb82f8d3d2d2c3983d9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXIHOKLR%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAspd399hqmXwZo0REVHMB%2B0U%2FefNikYkg7f%2FU8k4dJ6AiAKH%2B4AdI28qQ9CSy2F%2BHML5F%2FNA820Enflq3HfFTnX2iqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3tKFJWwFaMuoAC9CKtwDoBg4Vle0vw7dE2%2Bi9S46K%2FzXC7Mdsacbpn5vbhoWi%2B1wkkwUksM3NNvb5BcBLwuJqFLrMLoZXLu6V4cCOSVTuC0a2MS3M19S3viTmzJDvNc%2BuEjhhfbdDH5Pzd5%2Fov5KBXnxr%2FYF5bXT1yVy0Unk1VMwL6BFkOL8h0YauDX9PzSyEM6ajFvF031lYu8tSQBFhVAxD4FXGAjxma6Pc6NpcZJw5JcHpHWMDKX3pQ2v%2B9%2Bm0RWyYonRBb%2FcRoePWdx3CiZr9pcDr%2FchpxhXABktIg%2FppDvjmWqzMEc4SUuVk3xWPIsYVEOevgNgXf%2FomRYjI5aeyCaJ3Eym6ugh6l7X7icWFfjCcvbTLGzrz21wAolNC4gq0gfyPY%2BoYE1W6j4WXmB77%2FMuSFmQzYvktQSL3z1WGXBnONP5Wyt2UR6KuRsHfMCyAhiLEp2oEDGEEO1jNmjwDoRWNrgOMmaCn%2FOGwD%2Fvi%2BqIMbtM%2FPf%2BqPKkNNueSArL9y5pPM5fOf76we9j32IC4armpQj8qO9jmIiZKvRAUgHEYrsxKiFV0g9rYrT6QloqHVuBbg%2FUVFVJIDnsvFjxlOM%2FtZm2PRlVOiDv1wefN1COKlyNySPvwqasCHW9OiV0WrfTfjmzdvwwz4S8vwY6pgHgoApW%2FgBdVjTPxQY2A0C2Z%2Fp%2B5rEXEGNohr4%2FCxYQdhKBShAqPYiGplhxkNvsmY9TSNjjScWveMpsGqf5ctFdnfBiw%2FlRbVZwr1l7b2g5FSS1DF%2B3dQvyLE3HcAVsAYdgqld6tiSjJl%2FqlFj3KvqLMpcI2UsJXMOeiEWjdnA%2BKkrXXlbda0NJ3iq3B6aR5r%2BpZBVz77gKx98jLH6l6dRiv3l8q0pf&X-Amz-Signature=6b879d08c6ce9393992402ca94bc9f9a4f04d8a71e78814bff77ee3ce58b7a9e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXIHOKLR%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAspd399hqmXwZo0REVHMB%2B0U%2FefNikYkg7f%2FU8k4dJ6AiAKH%2B4AdI28qQ9CSy2F%2BHML5F%2FNA820Enflq3HfFTnX2iqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3tKFJWwFaMuoAC9CKtwDoBg4Vle0vw7dE2%2Bi9S46K%2FzXC7Mdsacbpn5vbhoWi%2B1wkkwUksM3NNvb5BcBLwuJqFLrMLoZXLu6V4cCOSVTuC0a2MS3M19S3viTmzJDvNc%2BuEjhhfbdDH5Pzd5%2Fov5KBXnxr%2FYF5bXT1yVy0Unk1VMwL6BFkOL8h0YauDX9PzSyEM6ajFvF031lYu8tSQBFhVAxD4FXGAjxma6Pc6NpcZJw5JcHpHWMDKX3pQ2v%2B9%2Bm0RWyYonRBb%2FcRoePWdx3CiZr9pcDr%2FchpxhXABktIg%2FppDvjmWqzMEc4SUuVk3xWPIsYVEOevgNgXf%2FomRYjI5aeyCaJ3Eym6ugh6l7X7icWFfjCcvbTLGzrz21wAolNC4gq0gfyPY%2BoYE1W6j4WXmB77%2FMuSFmQzYvktQSL3z1WGXBnONP5Wyt2UR6KuRsHfMCyAhiLEp2oEDGEEO1jNmjwDoRWNrgOMmaCn%2FOGwD%2Fvi%2BqIMbtM%2FPf%2BqPKkNNueSArL9y5pPM5fOf76we9j32IC4armpQj8qO9jmIiZKvRAUgHEYrsxKiFV0g9rYrT6QloqHVuBbg%2FUVFVJIDnsvFjxlOM%2FtZm2PRlVOiDv1wefN1COKlyNySPvwqasCHW9OiV0WrfTfjmzdvwwz4S8vwY6pgHgoApW%2FgBdVjTPxQY2A0C2Z%2Fp%2B5rEXEGNohr4%2FCxYQdhKBShAqPYiGplhxkNvsmY9TSNjjScWveMpsGqf5ctFdnfBiw%2FlRbVZwr1l7b2g5FSS1DF%2B3dQvyLE3HcAVsAYdgqld6tiSjJl%2FqlFj3KvqLMpcI2UsJXMOeiEWjdnA%2BKkrXXlbda0NJ3iq3B6aR5r%2BpZBVz77gKx98jLH6l6dRiv3l8q0pf&X-Amz-Signature=4338317af1621d94be85d3851b340d0ab66384abaf4bb3f3ace22e3b9052e356&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
