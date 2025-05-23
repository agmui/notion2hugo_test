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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TOUI62H%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T121537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQC4b9CpGKtKzSQS2brNgkEgiZMWukbHfEhPPoiyXVVr6AIgDdu8eIFnq%2B%2Fi0bgszj%2BZzOUdUpJf8pRZVUHE3ZmiMOMqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGSkSfYj3AJ6p0OKLyrcA7ucLyuBf9pLlCrU6XearpnVQZYS%2BW6U9l6XDt7UatkkchmGqjGqg9FMH7IHvvq%2B1DnjildrmkZTUma9nbBU8cc5eZ05vRB1YdraaFAHo%2BQxGR2eZBo1%2BFqoh3nWt2L1mkkxCCWia3hCJ0LLkperbIgFVPFjNUwXanX%2BvEztBTmcn6DpGzu4pWDbk99%2FK2HOsrDftFHamLj%2BDuO%2FO0AuUuzpRIELlNmJUP3oD6U3RJ1qsrLuWKOKXnt%2B%2F0SkXdoaiSu2qhQnHcJy0OOmW%2BoB1VfAe0JE5yRNMLUnGVb35spffDM3Y0o%2FAec4EcUVrkBZPvRYCAmaY1W%2Bh7lkCT3QCpKROdaeQw8XjurWSkq2nCTE7cSnFvMZR%2FpJfR9lSyc%2Fxg0DsjuuFleqwxwaap3qVu7tzKxTfmuhibI20xm70M0R9BbnhAAaaiB1F0%2Bxg8p9swL%2FpLrSzxG5raTdfZAlGdMIX91f%2Bz2pzCuYfHhnYzltSVtULNOyn8F4eOrErdEPYy%2BkhqeLQIyvclQ%2FtpdaNA8Q4bCJBFMOUw7OGqVNbAIVuokqp0JT4p5DjW263HVZfPpUEDpLfpo4ShySSJqFEBBjqsGvPQqQ%2Bo5fwxkO57y%2BOa7dRxpSqacWqX3lMLbEwcEGOqUBg0m4QuzxjxfoVGpzedVvhN1n%2BbfdwzXntJGE%2FCKKFzj5vT5KuyJqY0KWMYJLFm%2FLKJKZj%2BMLXVn53K1HhjsXelsTM5lhwoBdQNWY1%2B%2B%2B4m8pk%2Fc99iQoZ%2By1afokUdgQyIinRYND8uoSIh3zcLFSYmbKgaXpHsA1t7BdZpb4ORCncw6oH3A%2BvIi1vOKNQq1DzH%2BmXnAuX46Dz5x9s6zCaPJ4yE7d&X-Amz-Signature=d5676fb5879d72ef1004103c60a90ea32e4312226d0bf8a547c42432250f976d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TOUI62H%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T121537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQC4b9CpGKtKzSQS2brNgkEgiZMWukbHfEhPPoiyXVVr6AIgDdu8eIFnq%2B%2Fi0bgszj%2BZzOUdUpJf8pRZVUHE3ZmiMOMqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGSkSfYj3AJ6p0OKLyrcA7ucLyuBf9pLlCrU6XearpnVQZYS%2BW6U9l6XDt7UatkkchmGqjGqg9FMH7IHvvq%2B1DnjildrmkZTUma9nbBU8cc5eZ05vRB1YdraaFAHo%2BQxGR2eZBo1%2BFqoh3nWt2L1mkkxCCWia3hCJ0LLkperbIgFVPFjNUwXanX%2BvEztBTmcn6DpGzu4pWDbk99%2FK2HOsrDftFHamLj%2BDuO%2FO0AuUuzpRIELlNmJUP3oD6U3RJ1qsrLuWKOKXnt%2B%2F0SkXdoaiSu2qhQnHcJy0OOmW%2BoB1VfAe0JE5yRNMLUnGVb35spffDM3Y0o%2FAec4EcUVrkBZPvRYCAmaY1W%2Bh7lkCT3QCpKROdaeQw8XjurWSkq2nCTE7cSnFvMZR%2FpJfR9lSyc%2Fxg0DsjuuFleqwxwaap3qVu7tzKxTfmuhibI20xm70M0R9BbnhAAaaiB1F0%2Bxg8p9swL%2FpLrSzxG5raTdfZAlGdMIX91f%2Bz2pzCuYfHhnYzltSVtULNOyn8F4eOrErdEPYy%2BkhqeLQIyvclQ%2FtpdaNA8Q4bCJBFMOUw7OGqVNbAIVuokqp0JT4p5DjW263HVZfPpUEDpLfpo4ShySSJqFEBBjqsGvPQqQ%2Bo5fwxkO57y%2BOa7dRxpSqacWqX3lMLbEwcEGOqUBg0m4QuzxjxfoVGpzedVvhN1n%2BbfdwzXntJGE%2FCKKFzj5vT5KuyJqY0KWMYJLFm%2FLKJKZj%2BMLXVn53K1HhjsXelsTM5lhwoBdQNWY1%2B%2B%2B4m8pk%2Fc99iQoZ%2By1afokUdgQyIinRYND8uoSIh3zcLFSYmbKgaXpHsA1t7BdZpb4ORCncw6oH3A%2BvIi1vOKNQq1DzH%2BmXnAuX46Dz5x9s6zCaPJ4yE7d&X-Amz-Signature=c27e28c9243638bb8f6b2b0d647140ba9544ca767514befe42a7c2d096042ef0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TOUI62H%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T121537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQC4b9CpGKtKzSQS2brNgkEgiZMWukbHfEhPPoiyXVVr6AIgDdu8eIFnq%2B%2Fi0bgszj%2BZzOUdUpJf8pRZVUHE3ZmiMOMqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGSkSfYj3AJ6p0OKLyrcA7ucLyuBf9pLlCrU6XearpnVQZYS%2BW6U9l6XDt7UatkkchmGqjGqg9FMH7IHvvq%2B1DnjildrmkZTUma9nbBU8cc5eZ05vRB1YdraaFAHo%2BQxGR2eZBo1%2BFqoh3nWt2L1mkkxCCWia3hCJ0LLkperbIgFVPFjNUwXanX%2BvEztBTmcn6DpGzu4pWDbk99%2FK2HOsrDftFHamLj%2BDuO%2FO0AuUuzpRIELlNmJUP3oD6U3RJ1qsrLuWKOKXnt%2B%2F0SkXdoaiSu2qhQnHcJy0OOmW%2BoB1VfAe0JE5yRNMLUnGVb35spffDM3Y0o%2FAec4EcUVrkBZPvRYCAmaY1W%2Bh7lkCT3QCpKROdaeQw8XjurWSkq2nCTE7cSnFvMZR%2FpJfR9lSyc%2Fxg0DsjuuFleqwxwaap3qVu7tzKxTfmuhibI20xm70M0R9BbnhAAaaiB1F0%2Bxg8p9swL%2FpLrSzxG5raTdfZAlGdMIX91f%2Bz2pzCuYfHhnYzltSVtULNOyn8F4eOrErdEPYy%2BkhqeLQIyvclQ%2FtpdaNA8Q4bCJBFMOUw7OGqVNbAIVuokqp0JT4p5DjW263HVZfPpUEDpLfpo4ShySSJqFEBBjqsGvPQqQ%2Bo5fwxkO57y%2BOa7dRxpSqacWqX3lMLbEwcEGOqUBg0m4QuzxjxfoVGpzedVvhN1n%2BbfdwzXntJGE%2FCKKFzj5vT5KuyJqY0KWMYJLFm%2FLKJKZj%2BMLXVn53K1HhjsXelsTM5lhwoBdQNWY1%2B%2B%2B4m8pk%2Fc99iQoZ%2By1afokUdgQyIinRYND8uoSIh3zcLFSYmbKgaXpHsA1t7BdZpb4ORCncw6oH3A%2BvIi1vOKNQq1DzH%2BmXnAuX46Dz5x9s6zCaPJ4yE7d&X-Amz-Signature=60d045d7a7656c9cd2e58f19e64ed554b802282c0aa3671deb6a18597b4b06e9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
