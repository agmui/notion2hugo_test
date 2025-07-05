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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TCU726P%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T220742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDYpQXDaVdAOi7%2FGLrgzHlLn6n8SmyIjxwdxbhL1B29UwIgAp6yx7an%2BiC23VHdAQbJhZcu4JQbhZIsz3nFAu1LzAoq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIGXjDi3ooiOY3LWKircA0SkCSUd9k2jn78xlVSAzPnyzIIWGzZEyURRhOUmJM19DF%2Bx1Up3mtE1QnV9talB10plgBrR4x5opmC2a86gZLIZ0inRga7UR5wQpuSh%2FxXivirgJHEHA2nlgiGGfRt89D%2FnuuHw5Qpt5sn6KPosIA7HzblLkzrlpUi0CcUnAZBUidd46mrbvKrUGMaE9mRwNCat6VCUrqadnbAxJAF8V4n%2BPoDrxC4iMX%2Fvg8%2BE8YG5Q3kDuYlBjV9%2BjPamr2Yh%2FIuzJJoMq8VxtcxjN4LviUlzxRzLpgu8ZIRYkN6%2BOUdXJpiG%2BdVXIguskNOx3%2B0unX9MwC8mMjqbMMGciFE99wPHb6yihRb7C6q5qLtb575vqbOF8asi4mq5wEO6sr9fpFHCPuYiwUl194ySoi%2FvtwLVz%2BcTKJfKvAoAikBIz1gOxDfriqTRVv8I6xrmMaafgBt5Mxlt9pQgM%2Bfaq3IKKFkexd0W4t4Bot1tgECDmvDssYry4m4Ikt6KQQAK51SWDKeew2qn7RgY1zhIW1Gn0k3GBg0Ibt3S%2Fus%2BZ8oSEYwdHnPfTlYE1L80hhlSMAX6POG2CFA9p3Hz0gegqE%2BC1Qpoj1uLbAkmDj1e0TrFnaH39xe4cpn7rfaw0Lx%2BMIHqpcMGOqUBhRyg%2FB%2BLEdnNzlBCIZO1Y8GCkBowWjgSHJIMsitr5ibqqMU0A3FThAwBqHT4zix8KreyZ36nBd2hcLsaoCNATRVVJr1iAox1hi66s%2FNQ5skDm7ROuFQPTOH0BgzHNBV8775a95XhPoUpQPQoHN%2F3W3k%2BiaY3wRkHcYIyB6krhnUUQ6Z0QwGXfL0IJY%2FNpCpVuB8qrmzMfBF5cz5YMuSxiHHluwz%2F&X-Amz-Signature=884c419e765aa26f6cdde0aa6df88babd78334983d6f214ed41dc25d21744384&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TCU726P%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T220742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDYpQXDaVdAOi7%2FGLrgzHlLn6n8SmyIjxwdxbhL1B29UwIgAp6yx7an%2BiC23VHdAQbJhZcu4JQbhZIsz3nFAu1LzAoq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIGXjDi3ooiOY3LWKircA0SkCSUd9k2jn78xlVSAzPnyzIIWGzZEyURRhOUmJM19DF%2Bx1Up3mtE1QnV9talB10plgBrR4x5opmC2a86gZLIZ0inRga7UR5wQpuSh%2FxXivirgJHEHA2nlgiGGfRt89D%2FnuuHw5Qpt5sn6KPosIA7HzblLkzrlpUi0CcUnAZBUidd46mrbvKrUGMaE9mRwNCat6VCUrqadnbAxJAF8V4n%2BPoDrxC4iMX%2Fvg8%2BE8YG5Q3kDuYlBjV9%2BjPamr2Yh%2FIuzJJoMq8VxtcxjN4LviUlzxRzLpgu8ZIRYkN6%2BOUdXJpiG%2BdVXIguskNOx3%2B0unX9MwC8mMjqbMMGciFE99wPHb6yihRb7C6q5qLtb575vqbOF8asi4mq5wEO6sr9fpFHCPuYiwUl194ySoi%2FvtwLVz%2BcTKJfKvAoAikBIz1gOxDfriqTRVv8I6xrmMaafgBt5Mxlt9pQgM%2Bfaq3IKKFkexd0W4t4Bot1tgECDmvDssYry4m4Ikt6KQQAK51SWDKeew2qn7RgY1zhIW1Gn0k3GBg0Ibt3S%2Fus%2BZ8oSEYwdHnPfTlYE1L80hhlSMAX6POG2CFA9p3Hz0gegqE%2BC1Qpoj1uLbAkmDj1e0TrFnaH39xe4cpn7rfaw0Lx%2BMIHqpcMGOqUBhRyg%2FB%2BLEdnNzlBCIZO1Y8GCkBowWjgSHJIMsitr5ibqqMU0A3FThAwBqHT4zix8KreyZ36nBd2hcLsaoCNATRVVJr1iAox1hi66s%2FNQ5skDm7ROuFQPTOH0BgzHNBV8775a95XhPoUpQPQoHN%2F3W3k%2BiaY3wRkHcYIyB6krhnUUQ6Z0QwGXfL0IJY%2FNpCpVuB8qrmzMfBF5cz5YMuSxiHHluwz%2F&X-Amz-Signature=ed13a479254cf1125680de683c539341a5e5c0ef68c7c1d427727d55521c11bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TCU726P%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T220742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDYpQXDaVdAOi7%2FGLrgzHlLn6n8SmyIjxwdxbhL1B29UwIgAp6yx7an%2BiC23VHdAQbJhZcu4JQbhZIsz3nFAu1LzAoq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIGXjDi3ooiOY3LWKircA0SkCSUd9k2jn78xlVSAzPnyzIIWGzZEyURRhOUmJM19DF%2Bx1Up3mtE1QnV9talB10plgBrR4x5opmC2a86gZLIZ0inRga7UR5wQpuSh%2FxXivirgJHEHA2nlgiGGfRt89D%2FnuuHw5Qpt5sn6KPosIA7HzblLkzrlpUi0CcUnAZBUidd46mrbvKrUGMaE9mRwNCat6VCUrqadnbAxJAF8V4n%2BPoDrxC4iMX%2Fvg8%2BE8YG5Q3kDuYlBjV9%2BjPamr2Yh%2FIuzJJoMq8VxtcxjN4LviUlzxRzLpgu8ZIRYkN6%2BOUdXJpiG%2BdVXIguskNOx3%2B0unX9MwC8mMjqbMMGciFE99wPHb6yihRb7C6q5qLtb575vqbOF8asi4mq5wEO6sr9fpFHCPuYiwUl194ySoi%2FvtwLVz%2BcTKJfKvAoAikBIz1gOxDfriqTRVv8I6xrmMaafgBt5Mxlt9pQgM%2Bfaq3IKKFkexd0W4t4Bot1tgECDmvDssYry4m4Ikt6KQQAK51SWDKeew2qn7RgY1zhIW1Gn0k3GBg0Ibt3S%2Fus%2BZ8oSEYwdHnPfTlYE1L80hhlSMAX6POG2CFA9p3Hz0gegqE%2BC1Qpoj1uLbAkmDj1e0TrFnaH39xe4cpn7rfaw0Lx%2BMIHqpcMGOqUBhRyg%2FB%2BLEdnNzlBCIZO1Y8GCkBowWjgSHJIMsitr5ibqqMU0A3FThAwBqHT4zix8KreyZ36nBd2hcLsaoCNATRVVJr1iAox1hi66s%2FNQ5skDm7ROuFQPTOH0BgzHNBV8775a95XhPoUpQPQoHN%2F3W3k%2BiaY3wRkHcYIyB6krhnUUQ6Z0QwGXfL0IJY%2FNpCpVuB8qrmzMfBF5cz5YMuSxiHHluwz%2F&X-Amz-Signature=6973483cf5f1e5f9560bfc48a7763b4bc9a3e4e05d2949fbad25a4a633da353c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
