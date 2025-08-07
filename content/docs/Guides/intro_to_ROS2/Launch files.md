---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQKTBK5K%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQDsmeZigpwr5U9TUT4Qiqt%2B8Pt8FtwxrWrKFUvRG5qk%2FQIgM%2B9sSWVfQzbUXFEDiXhERBsMZcw%2FAr%2Fc9kc79rL2GiEqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK59DEAZbrzQewwOGircA7Wgru0ZRxoxi%2BYO7tUmg1653WwfATuPA9RhCE6wVTKHUEsH3lUvHuyV9DPmtw7M3HKVY4cLi3XmzkinnHYU9th%2FH6nRwZCLjxsa5Dw79msnVx9D%2FfztMcQpWeGjFq43aUhs%2Fgj1BdZRb5Wp1oCq%2BrQYhypKwKSGhEkSuV2Bv%2BRRLWM7TaWRmXGgNNjwgzof%2FP7SIRQwGdfGn4tjmIAO75YXiHCZo1rVUUbU47E5e72o%2BGA2juvoolKL4bhxi%2Fx6Nv3K9aYDzADmofm8LxMLDqPh3qeAO0n215zcGC1RhGZIB3J4rWsYal9OJ7XPtxX6BPGoF85dmPrcSSjcB9GdfxskqgcxbftzzB39nDzPkZ9EeBO30xjuaaczcrufB8jmi%2FDqdd7EH40WnrFA5JHoyG7MKrfaYHQ71D5zEka%2B7xWOFZF7%2F6xWywpG6EiywqG%2BRkhqNmz5fqW1gCMuUOZ84pKueazaawIo%2Bk6lzqtWmFecEF52aA3pf2mWEw6i4imLLMcJJwZw3Ns8z%2FmRcaXiK2eFRLl%2B%2FFtnzM9JdT3IzWVvtXxcYLNo2WxqUjOEdidAEk4lUFswXHlA2L2wQWio8VGmEXs%2BiAlkFryadmKDsxUYGDIOUcaSmS05%2BcPuMN%2BT1MQGOqUBEc0e1Oak9V7MlAiYlMteJ2qdj410FSoKXyVQfWtchFo8VbC2OM%2FkyxHYrj5q5BQPUD29f9nx10QPV6tyoOqP3IYE9LexBon7Nu6CftbqV3RReNrUJwmfMpb9Wrr7r6dRvD4cGMZh5rImMkmkF%2FhyjBaqLqLbWEU%2BdN3iGsXtm3MSoq5X0%2FzqrjwYF%2Ftbcfe3IhBUIBxQ%2BqKMgrXHnD%2BbTi0v%2BEzF&X-Amz-Signature=80478557777b19958eaebdcb6d9c978a36b7652151024a051d27ca8e133f54c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQKTBK5K%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQDsmeZigpwr5U9TUT4Qiqt%2B8Pt8FtwxrWrKFUvRG5qk%2FQIgM%2B9sSWVfQzbUXFEDiXhERBsMZcw%2FAr%2Fc9kc79rL2GiEqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK59DEAZbrzQewwOGircA7Wgru0ZRxoxi%2BYO7tUmg1653WwfATuPA9RhCE6wVTKHUEsH3lUvHuyV9DPmtw7M3HKVY4cLi3XmzkinnHYU9th%2FH6nRwZCLjxsa5Dw79msnVx9D%2FfztMcQpWeGjFq43aUhs%2Fgj1BdZRb5Wp1oCq%2BrQYhypKwKSGhEkSuV2Bv%2BRRLWM7TaWRmXGgNNjwgzof%2FP7SIRQwGdfGn4tjmIAO75YXiHCZo1rVUUbU47E5e72o%2BGA2juvoolKL4bhxi%2Fx6Nv3K9aYDzADmofm8LxMLDqPh3qeAO0n215zcGC1RhGZIB3J4rWsYal9OJ7XPtxX6BPGoF85dmPrcSSjcB9GdfxskqgcxbftzzB39nDzPkZ9EeBO30xjuaaczcrufB8jmi%2FDqdd7EH40WnrFA5JHoyG7MKrfaYHQ71D5zEka%2B7xWOFZF7%2F6xWywpG6EiywqG%2BRkhqNmz5fqW1gCMuUOZ84pKueazaawIo%2Bk6lzqtWmFecEF52aA3pf2mWEw6i4imLLMcJJwZw3Ns8z%2FmRcaXiK2eFRLl%2B%2FFtnzM9JdT3IzWVvtXxcYLNo2WxqUjOEdidAEk4lUFswXHlA2L2wQWio8VGmEXs%2BiAlkFryadmKDsxUYGDIOUcaSmS05%2BcPuMN%2BT1MQGOqUBEc0e1Oak9V7MlAiYlMteJ2qdj410FSoKXyVQfWtchFo8VbC2OM%2FkyxHYrj5q5BQPUD29f9nx10QPV6tyoOqP3IYE9LexBon7Nu6CftbqV3RReNrUJwmfMpb9Wrr7r6dRvD4cGMZh5rImMkmkF%2FhyjBaqLqLbWEU%2BdN3iGsXtm3MSoq5X0%2FzqrjwYF%2Ftbcfe3IhBUIBxQ%2BqKMgrXHnD%2BbTi0v%2BEzF&X-Amz-Signature=78a602e08ce27915567656d9e1361639b148d25bcbf652a133bda3c499a05018&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQKTBK5K%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQDsmeZigpwr5U9TUT4Qiqt%2B8Pt8FtwxrWrKFUvRG5qk%2FQIgM%2B9sSWVfQzbUXFEDiXhERBsMZcw%2FAr%2Fc9kc79rL2GiEqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK59DEAZbrzQewwOGircA7Wgru0ZRxoxi%2BYO7tUmg1653WwfATuPA9RhCE6wVTKHUEsH3lUvHuyV9DPmtw7M3HKVY4cLi3XmzkinnHYU9th%2FH6nRwZCLjxsa5Dw79msnVx9D%2FfztMcQpWeGjFq43aUhs%2Fgj1BdZRb5Wp1oCq%2BrQYhypKwKSGhEkSuV2Bv%2BRRLWM7TaWRmXGgNNjwgzof%2FP7SIRQwGdfGn4tjmIAO75YXiHCZo1rVUUbU47E5e72o%2BGA2juvoolKL4bhxi%2Fx6Nv3K9aYDzADmofm8LxMLDqPh3qeAO0n215zcGC1RhGZIB3J4rWsYal9OJ7XPtxX6BPGoF85dmPrcSSjcB9GdfxskqgcxbftzzB39nDzPkZ9EeBO30xjuaaczcrufB8jmi%2FDqdd7EH40WnrFA5JHoyG7MKrfaYHQ71D5zEka%2B7xWOFZF7%2F6xWywpG6EiywqG%2BRkhqNmz5fqW1gCMuUOZ84pKueazaawIo%2Bk6lzqtWmFecEF52aA3pf2mWEw6i4imLLMcJJwZw3Ns8z%2FmRcaXiK2eFRLl%2B%2FFtnzM9JdT3IzWVvtXxcYLNo2WxqUjOEdidAEk4lUFswXHlA2L2wQWio8VGmEXs%2BiAlkFryadmKDsxUYGDIOUcaSmS05%2BcPuMN%2BT1MQGOqUBEc0e1Oak9V7MlAiYlMteJ2qdj410FSoKXyVQfWtchFo8VbC2OM%2FkyxHYrj5q5BQPUD29f9nx10QPV6tyoOqP3IYE9LexBon7Nu6CftbqV3RReNrUJwmfMpb9Wrr7r6dRvD4cGMZh5rImMkmkF%2FhyjBaqLqLbWEU%2BdN3iGsXtm3MSoq5X0%2FzqrjwYF%2Ftbcfe3IhBUIBxQ%2BqKMgrXHnD%2BbTi0v%2BEzF&X-Amz-Signature=d78dee6ec84f792c7916565df04e0618cbc0632de9c9bb934bbd5b6e367945b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
