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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTKQ4IU4%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHTJGMTAO%2BUb6SPVC%2FbOD1Z%2Bl51JPYL7KnkuvM2e867hAiAmHIiJEASQK3sW9lXFwAuGOiD%2BJZDQMxn4MYGQUvBuLyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDzAsKwJRXkOcidmyKtwDeq5qEqqGOTv8dvKIgcT4ue%2FTkxuQG6aFBfKGS8XQLcpWluRFeOV8xQCPFdrOFgQ2f2QStAbT7KSZ%2FRDDnurRzv9APPP49zrGzhG%2B5B2QOC8cy%2F1NH0qvMbcUTp6So1xhPWVmTgyu1LSKICROv8US6ih1uIYEGhOdOL7rpf7A2DZWo%2F1Ug7c5MXZLtAwbGNskM3x0ybMRADQH7xS2lizDFoIs%2FBlK7gbiae6Llo5zMKdF09SWBhcrk3%2By5XwUPEGbRFJkBcOxxoJUv0dkS6TgMInv35ZSeO%2FlzbxGu6mfEon801qv3bUR5IujnXiIDTSogcPLawv30IhFIJS7Lri8z4EhRRv4ckGrCauiCYOXxq%2FzMyblmxYnbl7n%2FCHg8yMrqmyr8Svt5B3xqiYln2tXLrsLjhTG%2BjO3VF%2BeqBLROsmNYZA5btwve42t0oB3G9fzTe7MTx1QycxlW8LPHHihZUqU268IRhYLo3inFpJmmHajzZJAUfYySdHh0D%2B8%2BcOcHVVO9dqpuhXKzVPFLjLm%2FGHi1cyzdddgpbRQTVsyEiAT8%2Fy1YcXZaYUyi9SgU1bh08dtAiKluV5qiqif%2FbpqCai1C9p6t65EUb1ex%2F70DHaLq8fpr8mTFAve8wEw18uzwQY6pgGOTBQ7fyLeLNpBqMiifMhk1fvNYQIxb%2BO%2FoR3HVXDFudAvqDSt%2FBzqO2S%2FxFfo7y3rQc%2FIb1axhIGd9UFzT2pgpb20gRlORL97%2BMexNC2ORqNgs%2BXpIa%2BcHWPnGBzGcNTPoUAPLhRzhEIybOTsvX2T%2FRHJeyrYJXWj4DOrxdOyeQPCQtLlB8ELqw8fACvLTRFPJeEIxRG9SMsOMbroQlim5H%2BGj3ey&X-Amz-Signature=2246ddfe0fd8bbaa829f4189a8a0f74724e5e02819d90b1287530798acbf987b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTKQ4IU4%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHTJGMTAO%2BUb6SPVC%2FbOD1Z%2Bl51JPYL7KnkuvM2e867hAiAmHIiJEASQK3sW9lXFwAuGOiD%2BJZDQMxn4MYGQUvBuLyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDzAsKwJRXkOcidmyKtwDeq5qEqqGOTv8dvKIgcT4ue%2FTkxuQG6aFBfKGS8XQLcpWluRFeOV8xQCPFdrOFgQ2f2QStAbT7KSZ%2FRDDnurRzv9APPP49zrGzhG%2B5B2QOC8cy%2F1NH0qvMbcUTp6So1xhPWVmTgyu1LSKICROv8US6ih1uIYEGhOdOL7rpf7A2DZWo%2F1Ug7c5MXZLtAwbGNskM3x0ybMRADQH7xS2lizDFoIs%2FBlK7gbiae6Llo5zMKdF09SWBhcrk3%2By5XwUPEGbRFJkBcOxxoJUv0dkS6TgMInv35ZSeO%2FlzbxGu6mfEon801qv3bUR5IujnXiIDTSogcPLawv30IhFIJS7Lri8z4EhRRv4ckGrCauiCYOXxq%2FzMyblmxYnbl7n%2FCHg8yMrqmyr8Svt5B3xqiYln2tXLrsLjhTG%2BjO3VF%2BeqBLROsmNYZA5btwve42t0oB3G9fzTe7MTx1QycxlW8LPHHihZUqU268IRhYLo3inFpJmmHajzZJAUfYySdHh0D%2B8%2BcOcHVVO9dqpuhXKzVPFLjLm%2FGHi1cyzdddgpbRQTVsyEiAT8%2Fy1YcXZaYUyi9SgU1bh08dtAiKluV5qiqif%2FbpqCai1C9p6t65EUb1ex%2F70DHaLq8fpr8mTFAve8wEw18uzwQY6pgGOTBQ7fyLeLNpBqMiifMhk1fvNYQIxb%2BO%2FoR3HVXDFudAvqDSt%2FBzqO2S%2FxFfo7y3rQc%2FIb1axhIGd9UFzT2pgpb20gRlORL97%2BMexNC2ORqNgs%2BXpIa%2BcHWPnGBzGcNTPoUAPLhRzhEIybOTsvX2T%2FRHJeyrYJXWj4DOrxdOyeQPCQtLlB8ELqw8fACvLTRFPJeEIxRG9SMsOMbroQlim5H%2BGj3ey&X-Amz-Signature=2ce4c77c1968f8f5ee76cdeda8bfa1b5d1e76040aa705d06ca7f37f26afaf944&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTKQ4IU4%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHTJGMTAO%2BUb6SPVC%2FbOD1Z%2Bl51JPYL7KnkuvM2e867hAiAmHIiJEASQK3sW9lXFwAuGOiD%2BJZDQMxn4MYGQUvBuLyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDzAsKwJRXkOcidmyKtwDeq5qEqqGOTv8dvKIgcT4ue%2FTkxuQG6aFBfKGS8XQLcpWluRFeOV8xQCPFdrOFgQ2f2QStAbT7KSZ%2FRDDnurRzv9APPP49zrGzhG%2B5B2QOC8cy%2F1NH0qvMbcUTp6So1xhPWVmTgyu1LSKICROv8US6ih1uIYEGhOdOL7rpf7A2DZWo%2F1Ug7c5MXZLtAwbGNskM3x0ybMRADQH7xS2lizDFoIs%2FBlK7gbiae6Llo5zMKdF09SWBhcrk3%2By5XwUPEGbRFJkBcOxxoJUv0dkS6TgMInv35ZSeO%2FlzbxGu6mfEon801qv3bUR5IujnXiIDTSogcPLawv30IhFIJS7Lri8z4EhRRv4ckGrCauiCYOXxq%2FzMyblmxYnbl7n%2FCHg8yMrqmyr8Svt5B3xqiYln2tXLrsLjhTG%2BjO3VF%2BeqBLROsmNYZA5btwve42t0oB3G9fzTe7MTx1QycxlW8LPHHihZUqU268IRhYLo3inFpJmmHajzZJAUfYySdHh0D%2B8%2BcOcHVVO9dqpuhXKzVPFLjLm%2FGHi1cyzdddgpbRQTVsyEiAT8%2Fy1YcXZaYUyi9SgU1bh08dtAiKluV5qiqif%2FbpqCai1C9p6t65EUb1ex%2F70DHaLq8fpr8mTFAve8wEw18uzwQY6pgGOTBQ7fyLeLNpBqMiifMhk1fvNYQIxb%2BO%2FoR3HVXDFudAvqDSt%2FBzqO2S%2FxFfo7y3rQc%2FIb1axhIGd9UFzT2pgpb20gRlORL97%2BMexNC2ORqNgs%2BXpIa%2BcHWPnGBzGcNTPoUAPLhRzhEIybOTsvX2T%2FRHJeyrYJXWj4DOrxdOyeQPCQtLlB8ELqw8fACvLTRFPJeEIxRG9SMsOMbroQlim5H%2BGj3ey&X-Amz-Signature=b0c9c4ab30afcbdb1cf05c6ed4f086716662f00f3d3baf47ca352005a446a932&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
