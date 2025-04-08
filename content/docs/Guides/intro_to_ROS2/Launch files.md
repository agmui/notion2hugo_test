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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S5VNZMQ%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T150913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV8pPN6r0O4jBh4XZWKwLElZT0apIk7wqVyJTcfTfK5gIhAPdvf4GeZ6siW3g1cKCeCEowIDw%2FEciy7PKc60i2N050Kv8DCHcQABoMNjM3NDIzMTgzODA1IgwAqt6EaGeDZJ0I3Lkq3AM2gRjfE5J2RKV1wrTWnHMPvGfSk6p0UTtRKHCQhe1rL2Y4SygdQxNbF6Bkt5otkV0I64S0Glt3xUWdYI1YVa6C6pGw3gksQs%2BttVxAG5EnL%2BxiMsuTLdzY0XVV9pBdTiEOeKe4QviwtE5HCZ2IeQbKySVo0gyphRla0%2F54npWaVdSXM0fcd27gjI8YjpfysMKKBV%2Bz1vpDc9E8x6JcEW5vf3dZmii6UT4l0MlEfu24QQiUbomFxpBykt5SGx3ZAfPey8t0%2F2moqpWwRH9PJpLn%2Ff3p96p7fgQUR0Y5Wfb7EfW1MpPDFj4TIpVlyTajc8ageqn5KtF3%2Bmexk%2Bt73xTNQqlBfkdsac9%2FWqAQ3lnmDG6fvRxETi2griWwlmg7kbzz1WNFU9lPUaYfA5yIhzJWQfz2tEznB9795wRH4jDnJet5UzuHmU%2FyY41vvXJ5XW7KFknT1AE2P0%2Fz1fZ6BqP5BxEMF0rINevkTc459YwtrrtQYzOaWEVjk75ylpwyhtfc%2BgQqyIzE%2B94t6nKUzjNuAlUGJgPrqEacrPHa%2FESVOKG3iUk%2F2YrbsQIgGemE9iUENeT%2FP7l0mIfl8gLvTF6Fu6UNDkOtyS8%2FYSH%2FnT8%2F8D1aEqdVvrGSiEgtcDDi19S%2FBjqkAe7LC06OQPaLG5pivdR7ukFSfZ7rcCO99W7v77eBQbPoL0EHtObaKovKeKkMreuaIOo85AP7Lj6DjR4UXSXxkMQ7oEmCh%2F4lcvlPkgV%2FZIhEwtJ5NnnAFwqycSv64xbma0Cuo4l9O0SjtpQLw4S5ZsLqmRlxb%2Bb2l%2B4DspY9820rLslvzxzS5iVJlMKjUaS2lARiuuZ8RnWfVLJnH1UHnM8HOXhl&X-Amz-Signature=c9c066a5ac30a19f26a8677524d12816417f5e63c3390a7a771f08dba18c72d2&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S5VNZMQ%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T150913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV8pPN6r0O4jBh4XZWKwLElZT0apIk7wqVyJTcfTfK5gIhAPdvf4GeZ6siW3g1cKCeCEowIDw%2FEciy7PKc60i2N050Kv8DCHcQABoMNjM3NDIzMTgzODA1IgwAqt6EaGeDZJ0I3Lkq3AM2gRjfE5J2RKV1wrTWnHMPvGfSk6p0UTtRKHCQhe1rL2Y4SygdQxNbF6Bkt5otkV0I64S0Glt3xUWdYI1YVa6C6pGw3gksQs%2BttVxAG5EnL%2BxiMsuTLdzY0XVV9pBdTiEOeKe4QviwtE5HCZ2IeQbKySVo0gyphRla0%2F54npWaVdSXM0fcd27gjI8YjpfysMKKBV%2Bz1vpDc9E8x6JcEW5vf3dZmii6UT4l0MlEfu24QQiUbomFxpBykt5SGx3ZAfPey8t0%2F2moqpWwRH9PJpLn%2Ff3p96p7fgQUR0Y5Wfb7EfW1MpPDFj4TIpVlyTajc8ageqn5KtF3%2Bmexk%2Bt73xTNQqlBfkdsac9%2FWqAQ3lnmDG6fvRxETi2griWwlmg7kbzz1WNFU9lPUaYfA5yIhzJWQfz2tEznB9795wRH4jDnJet5UzuHmU%2FyY41vvXJ5XW7KFknT1AE2P0%2Fz1fZ6BqP5BxEMF0rINevkTc459YwtrrtQYzOaWEVjk75ylpwyhtfc%2BgQqyIzE%2B94t6nKUzjNuAlUGJgPrqEacrPHa%2FESVOKG3iUk%2F2YrbsQIgGemE9iUENeT%2FP7l0mIfl8gLvTF6Fu6UNDkOtyS8%2FYSH%2FnT8%2F8D1aEqdVvrGSiEgtcDDi19S%2FBjqkAe7LC06OQPaLG5pivdR7ukFSfZ7rcCO99W7v77eBQbPoL0EHtObaKovKeKkMreuaIOo85AP7Lj6DjR4UXSXxkMQ7oEmCh%2F4lcvlPkgV%2FZIhEwtJ5NnnAFwqycSv64xbma0Cuo4l9O0SjtpQLw4S5ZsLqmRlxb%2Bb2l%2B4DspY9820rLslvzxzS5iVJlMKjUaS2lARiuuZ8RnWfVLJnH1UHnM8HOXhl&X-Amz-Signature=564f4965588c20f94242f91e3a34b3167422ac95efa2a87658ff8b2c848d547b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S5VNZMQ%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T150913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV8pPN6r0O4jBh4XZWKwLElZT0apIk7wqVyJTcfTfK5gIhAPdvf4GeZ6siW3g1cKCeCEowIDw%2FEciy7PKc60i2N050Kv8DCHcQABoMNjM3NDIzMTgzODA1IgwAqt6EaGeDZJ0I3Lkq3AM2gRjfE5J2RKV1wrTWnHMPvGfSk6p0UTtRKHCQhe1rL2Y4SygdQxNbF6Bkt5otkV0I64S0Glt3xUWdYI1YVa6C6pGw3gksQs%2BttVxAG5EnL%2BxiMsuTLdzY0XVV9pBdTiEOeKe4QviwtE5HCZ2IeQbKySVo0gyphRla0%2F54npWaVdSXM0fcd27gjI8YjpfysMKKBV%2Bz1vpDc9E8x6JcEW5vf3dZmii6UT4l0MlEfu24QQiUbomFxpBykt5SGx3ZAfPey8t0%2F2moqpWwRH9PJpLn%2Ff3p96p7fgQUR0Y5Wfb7EfW1MpPDFj4TIpVlyTajc8ageqn5KtF3%2Bmexk%2Bt73xTNQqlBfkdsac9%2FWqAQ3lnmDG6fvRxETi2griWwlmg7kbzz1WNFU9lPUaYfA5yIhzJWQfz2tEznB9795wRH4jDnJet5UzuHmU%2FyY41vvXJ5XW7KFknT1AE2P0%2Fz1fZ6BqP5BxEMF0rINevkTc459YwtrrtQYzOaWEVjk75ylpwyhtfc%2BgQqyIzE%2B94t6nKUzjNuAlUGJgPrqEacrPHa%2FESVOKG3iUk%2F2YrbsQIgGemE9iUENeT%2FP7l0mIfl8gLvTF6Fu6UNDkOtyS8%2FYSH%2FnT8%2F8D1aEqdVvrGSiEgtcDDi19S%2FBjqkAe7LC06OQPaLG5pivdR7ukFSfZ7rcCO99W7v77eBQbPoL0EHtObaKovKeKkMreuaIOo85AP7Lj6DjR4UXSXxkMQ7oEmCh%2F4lcvlPkgV%2FZIhEwtJ5NnnAFwqycSv64xbma0Cuo4l9O0SjtpQLw4S5ZsLqmRlxb%2Bb2l%2B4DspY9820rLslvzxzS5iVJlMKjUaS2lARiuuZ8RnWfVLJnH1UHnM8HOXhl&X-Amz-Signature=6bd9c55cb65e94a2513d44e2056497f9d5dd9787637935402212f18879bfb5d6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
