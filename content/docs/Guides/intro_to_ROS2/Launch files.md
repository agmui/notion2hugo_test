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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TXEU2K6%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T004006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIG5Z5SDoXH8K9nj0jJzY%2B%2B5xnmEZfIOjA101P6KEJu87AiEAwbi0UwrrX%2F98vVlUgp9tyQFVFwQHxBw6zsqOIlp7rG4qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFtq9MEwedt0Cf5bXSrcA5OESOoC%2F2IBYV%2BEEX8AwLqYfKt1%2BMv%2BKHivGTpQe473WxPO5SWuzsJSDYrxYX8tFVAO4FR217dx8HwlpILChHfJMBXlqWIg10luGWOMP%2BDowkQ76dw83yyHmCHQc%2B6wxK6bEanRqo9lKHjz2%2FfwFCoNYkE9XEXUpD23kN4hwD4P3hmBfLsYCkMyV9ycwrTgBjqmiLi8nIpPqxz9MjNfbo5RYm9gYUOJk9iZTgsXx%2FR1NI0CsW%2B8CR6P2omVaHv4D8knBIsNwu3oe0JIO1D2IDHTWaaJYipOfCcZRIJcoQetlDBPnlGBnkOmKSyTpQHH06XxBKbI9WBrLED8zf3By1%2FE%2FejH3q5TyKI4PIzUiVFaYsnayqBhFWl90ShdrEBMdIPUXn8TLBX5K0GKgrpp344%2FX6Trp6FLBd0ModiqsChvjVQaIxBqE7cAZwSStJxD0jCS8YIg3bfazYaiyQPaTm6vqDIHAI0OikoidPGIkSiHWqhrixSPpQH4xVxeFIYnECxPNVURIsFMuwnzbPSfSvje3p6fwMH54d2vGVu95621pWtifhbL8TT86AWApx%2Bj6m0gPzB4lwYM9Q1R4IsyUX7MxX92EjM8pl07lYR5QK09AK%2FUt%2B9NjfyArM%2BhMKG5jr4GOqUBzBXyqAMwGl6bY98vOjx2Z%2BhR%2Fl6ZyAqtM3DbnpbbnTUtJr6bqWSaMG4yvTRXrce7aX%2FpIAOK85uG1Kx5Ru%2Bq0u8p4kw5PUdrAqMnqMUlfDipaBAWn98N3KnyfIJlHVAPk%2FN%2BH%2FW32vhPNIfKij48VXv%2FXZcsuxVBTEcsXyJylphs%2B4pm5hyQqFS%2Bt1ZrftAycy7blZkS4HzmlqvpSS2%2BiRwTCSh4&X-Amz-Signature=636769b4fbc72806be817acb9d527de54c975e836d8d5e36c04522b0e31e683b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TXEU2K6%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T004006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIG5Z5SDoXH8K9nj0jJzY%2B%2B5xnmEZfIOjA101P6KEJu87AiEAwbi0UwrrX%2F98vVlUgp9tyQFVFwQHxBw6zsqOIlp7rG4qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFtq9MEwedt0Cf5bXSrcA5OESOoC%2F2IBYV%2BEEX8AwLqYfKt1%2BMv%2BKHivGTpQe473WxPO5SWuzsJSDYrxYX8tFVAO4FR217dx8HwlpILChHfJMBXlqWIg10luGWOMP%2BDowkQ76dw83yyHmCHQc%2B6wxK6bEanRqo9lKHjz2%2FfwFCoNYkE9XEXUpD23kN4hwD4P3hmBfLsYCkMyV9ycwrTgBjqmiLi8nIpPqxz9MjNfbo5RYm9gYUOJk9iZTgsXx%2FR1NI0CsW%2B8CR6P2omVaHv4D8knBIsNwu3oe0JIO1D2IDHTWaaJYipOfCcZRIJcoQetlDBPnlGBnkOmKSyTpQHH06XxBKbI9WBrLED8zf3By1%2FE%2FejH3q5TyKI4PIzUiVFaYsnayqBhFWl90ShdrEBMdIPUXn8TLBX5K0GKgrpp344%2FX6Trp6FLBd0ModiqsChvjVQaIxBqE7cAZwSStJxD0jCS8YIg3bfazYaiyQPaTm6vqDIHAI0OikoidPGIkSiHWqhrixSPpQH4xVxeFIYnECxPNVURIsFMuwnzbPSfSvje3p6fwMH54d2vGVu95621pWtifhbL8TT86AWApx%2Bj6m0gPzB4lwYM9Q1R4IsyUX7MxX92EjM8pl07lYR5QK09AK%2FUt%2B9NjfyArM%2BhMKG5jr4GOqUBzBXyqAMwGl6bY98vOjx2Z%2BhR%2Fl6ZyAqtM3DbnpbbnTUtJr6bqWSaMG4yvTRXrce7aX%2FpIAOK85uG1Kx5Ru%2Bq0u8p4kw5PUdrAqMnqMUlfDipaBAWn98N3KnyfIJlHVAPk%2FN%2BH%2FW32vhPNIfKij48VXv%2FXZcsuxVBTEcsXyJylphs%2B4pm5hyQqFS%2Bt1ZrftAycy7blZkS4HzmlqvpSS2%2BiRwTCSh4&X-Amz-Signature=fe56af4f6d8bf1c6f47f860c7366a478364867198c8b780c2e55720161353fee&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TXEU2K6%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T004006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIG5Z5SDoXH8K9nj0jJzY%2B%2B5xnmEZfIOjA101P6KEJu87AiEAwbi0UwrrX%2F98vVlUgp9tyQFVFwQHxBw6zsqOIlp7rG4qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFtq9MEwedt0Cf5bXSrcA5OESOoC%2F2IBYV%2BEEX8AwLqYfKt1%2BMv%2BKHivGTpQe473WxPO5SWuzsJSDYrxYX8tFVAO4FR217dx8HwlpILChHfJMBXlqWIg10luGWOMP%2BDowkQ76dw83yyHmCHQc%2B6wxK6bEanRqo9lKHjz2%2FfwFCoNYkE9XEXUpD23kN4hwD4P3hmBfLsYCkMyV9ycwrTgBjqmiLi8nIpPqxz9MjNfbo5RYm9gYUOJk9iZTgsXx%2FR1NI0CsW%2B8CR6P2omVaHv4D8knBIsNwu3oe0JIO1D2IDHTWaaJYipOfCcZRIJcoQetlDBPnlGBnkOmKSyTpQHH06XxBKbI9WBrLED8zf3By1%2FE%2FejH3q5TyKI4PIzUiVFaYsnayqBhFWl90ShdrEBMdIPUXn8TLBX5K0GKgrpp344%2FX6Trp6FLBd0ModiqsChvjVQaIxBqE7cAZwSStJxD0jCS8YIg3bfazYaiyQPaTm6vqDIHAI0OikoidPGIkSiHWqhrixSPpQH4xVxeFIYnECxPNVURIsFMuwnzbPSfSvje3p6fwMH54d2vGVu95621pWtifhbL8TT86AWApx%2Bj6m0gPzB4lwYM9Q1R4IsyUX7MxX92EjM8pl07lYR5QK09AK%2FUt%2B9NjfyArM%2BhMKG5jr4GOqUBzBXyqAMwGl6bY98vOjx2Z%2BhR%2Fl6ZyAqtM3DbnpbbnTUtJr6bqWSaMG4yvTRXrce7aX%2FpIAOK85uG1Kx5Ru%2Bq0u8p4kw5PUdrAqMnqMUlfDipaBAWn98N3KnyfIJlHVAPk%2FN%2BH%2FW32vhPNIfKij48VXv%2FXZcsuxVBTEcsXyJylphs%2B4pm5hyQqFS%2Bt1ZrftAycy7blZkS4HzmlqvpSS2%2BiRwTCSh4&X-Amz-Signature=1564256ce5f38bf016509faf30e547e3dd9bbc015f572b39e3941d78a0e6fab5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
