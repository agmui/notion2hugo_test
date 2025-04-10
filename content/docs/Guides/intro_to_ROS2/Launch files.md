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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YOWKV6Y%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T181128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIA%2BqXdqBOdSKyc17JJ4sTkQmZG%2Bz4RyTclR%2FM4f3nxKnAiEAit%2FOe6eX%2BXaSHco%2FlsNp3kTR9uK4BD32eaUVTSixwroqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKrbhfJXL5%2FohnFCuSrcA%2BuFMnUnNaEXkTzYOx9YeMbUraGUOA4cc4GPCmW8EGpLo8w1jnhRgdboWupgMGDFd%2BRa56tLW5SHWSOaHpZATRnD%2FiEPHlRjQ3vSGJlkPx%2FNCgqU9ARGkUyjscbHd6bWqB81%2B7IT0NZb9Py3uc7yZ%2FEA1%2BWZJDVbC4WYMpwcP3p7bAE5gpJ%2BkfRNQa0POrKN7K3aZhW8aOmaPAMEeZdQQ9I79UpGgGMT3kwUwfZ6SRXbXHCT6nvth%2Bb6zhrYZE2PpJ9PguOrcl7FFRdhv2Vo2LbaunhAt%2FSLWUzgCNNozMq%2F5fbfPPs%2Fo%2BugzrSOzgN7N81q4Gg7tHizptDIhUZktPNskCUvf5BobjgMpdwVupczBaAAIkNvTSV82ftlLABc1sur2c7vEUc0aEJgmG76YCfWgxYgQyZNLCIW9q%2BSlXZ73%2BjImNAI%2FfXy3OyaklsoxjLMZ0k4OXyunDOVBFy6cBh31hxNK84PpdUat5IA27OymiJz3SiKFJqRYuVj4oBpYg8ANSCn0eb4WiUnU3OUQ6ASDbff%2BrIGJ45hjd3wJXCoRhlkCVarB6rtuiNVrI70QuJZQ3R59xymU0Vgyeb23iE5iRl3nzmyZPrhevjlbl4RMbQchR9LDmYUeSGkMKqH4L8GOqUBed2BqbJzwoF4KvMWQwyoB9mEn1y4x9%2FLZwNsz4NqQyLLv1qavldk%2FJpyj134j%2Bf4BxT4V4t5idoQjYcwHKQtI%2FO%2BBeo7cuCB7GDD1BVBW%2F%2BvsWUTACx44I5gNBSgfGsIgpXcGzFJqHUJ6XIwPj8HhnPF4IfpKEcq%2F4KNPlZw0fQrrhaKs3BpCs9IYejfZJ4xruFnfOmz5YTJ3yhGdtzGR4ddzDOx&X-Amz-Signature=a945c3f832a7e587a89ef8fa9a4f72e3954f62cb7ecddbea39389f8b073152d3&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YOWKV6Y%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T181128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIA%2BqXdqBOdSKyc17JJ4sTkQmZG%2Bz4RyTclR%2FM4f3nxKnAiEAit%2FOe6eX%2BXaSHco%2FlsNp3kTR9uK4BD32eaUVTSixwroqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKrbhfJXL5%2FohnFCuSrcA%2BuFMnUnNaEXkTzYOx9YeMbUraGUOA4cc4GPCmW8EGpLo8w1jnhRgdboWupgMGDFd%2BRa56tLW5SHWSOaHpZATRnD%2FiEPHlRjQ3vSGJlkPx%2FNCgqU9ARGkUyjscbHd6bWqB81%2B7IT0NZb9Py3uc7yZ%2FEA1%2BWZJDVbC4WYMpwcP3p7bAE5gpJ%2BkfRNQa0POrKN7K3aZhW8aOmaPAMEeZdQQ9I79UpGgGMT3kwUwfZ6SRXbXHCT6nvth%2Bb6zhrYZE2PpJ9PguOrcl7FFRdhv2Vo2LbaunhAt%2FSLWUzgCNNozMq%2F5fbfPPs%2Fo%2BugzrSOzgN7N81q4Gg7tHizptDIhUZktPNskCUvf5BobjgMpdwVupczBaAAIkNvTSV82ftlLABc1sur2c7vEUc0aEJgmG76YCfWgxYgQyZNLCIW9q%2BSlXZ73%2BjImNAI%2FfXy3OyaklsoxjLMZ0k4OXyunDOVBFy6cBh31hxNK84PpdUat5IA27OymiJz3SiKFJqRYuVj4oBpYg8ANSCn0eb4WiUnU3OUQ6ASDbff%2BrIGJ45hjd3wJXCoRhlkCVarB6rtuiNVrI70QuJZQ3R59xymU0Vgyeb23iE5iRl3nzmyZPrhevjlbl4RMbQchR9LDmYUeSGkMKqH4L8GOqUBed2BqbJzwoF4KvMWQwyoB9mEn1y4x9%2FLZwNsz4NqQyLLv1qavldk%2FJpyj134j%2Bf4BxT4V4t5idoQjYcwHKQtI%2FO%2BBeo7cuCB7GDD1BVBW%2F%2BvsWUTACx44I5gNBSgfGsIgpXcGzFJqHUJ6XIwPj8HhnPF4IfpKEcq%2F4KNPlZw0fQrrhaKs3BpCs9IYejfZJ4xruFnfOmz5YTJ3yhGdtzGR4ddzDOx&X-Amz-Signature=26a4e1931519744942e29600c72fd0c870714ffdea59bfc5ab1faf34d3fb8d1a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YOWKV6Y%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T181128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIA%2BqXdqBOdSKyc17JJ4sTkQmZG%2Bz4RyTclR%2FM4f3nxKnAiEAit%2FOe6eX%2BXaSHco%2FlsNp3kTR9uK4BD32eaUVTSixwroqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKrbhfJXL5%2FohnFCuSrcA%2BuFMnUnNaEXkTzYOx9YeMbUraGUOA4cc4GPCmW8EGpLo8w1jnhRgdboWupgMGDFd%2BRa56tLW5SHWSOaHpZATRnD%2FiEPHlRjQ3vSGJlkPx%2FNCgqU9ARGkUyjscbHd6bWqB81%2B7IT0NZb9Py3uc7yZ%2FEA1%2BWZJDVbC4WYMpwcP3p7bAE5gpJ%2BkfRNQa0POrKN7K3aZhW8aOmaPAMEeZdQQ9I79UpGgGMT3kwUwfZ6SRXbXHCT6nvth%2Bb6zhrYZE2PpJ9PguOrcl7FFRdhv2Vo2LbaunhAt%2FSLWUzgCNNozMq%2F5fbfPPs%2Fo%2BugzrSOzgN7N81q4Gg7tHizptDIhUZktPNskCUvf5BobjgMpdwVupczBaAAIkNvTSV82ftlLABc1sur2c7vEUc0aEJgmG76YCfWgxYgQyZNLCIW9q%2BSlXZ73%2BjImNAI%2FfXy3OyaklsoxjLMZ0k4OXyunDOVBFy6cBh31hxNK84PpdUat5IA27OymiJz3SiKFJqRYuVj4oBpYg8ANSCn0eb4WiUnU3OUQ6ASDbff%2BrIGJ45hjd3wJXCoRhlkCVarB6rtuiNVrI70QuJZQ3R59xymU0Vgyeb23iE5iRl3nzmyZPrhevjlbl4RMbQchR9LDmYUeSGkMKqH4L8GOqUBed2BqbJzwoF4KvMWQwyoB9mEn1y4x9%2FLZwNsz4NqQyLLv1qavldk%2FJpyj134j%2Bf4BxT4V4t5idoQjYcwHKQtI%2FO%2BBeo7cuCB7GDD1BVBW%2F%2BvsWUTACx44I5gNBSgfGsIgpXcGzFJqHUJ6XIwPj8HhnPF4IfpKEcq%2F4KNPlZw0fQrrhaKs3BpCs9IYejfZJ4xruFnfOmz5YTJ3yhGdtzGR4ddzDOx&X-Amz-Signature=11aaa197136cddd259969d9663d93e6cc23ee46758779deb742fc5586bb52a67&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
