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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DLYERCU%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVrwfiAg32%2FTgyhoFBAth1O4DSrWw8RrBfZXxGp5TOhAIgDMd%2BMIeKycbitKhUQ79N9HUE%2BfCtJZl3ustsCxyETIkqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHhBNunPodTE2ItnvSrcA0LhCjico1knIXsRF%2B4aN58Qkgx54%2BS8vWW2pDbpAAduIIoGWP6DMTE5jzHyZm0IeUL8Hkdi7vq8GMqDHlkesYiJerRbpv2%2FYEeVNio7FaH8qIgBeYOCy06fVfBmdnsNcdSf3YTA3jWNle4fyJe16yVer1nCmdFk1qX7DDGdm0%2BmKSbo4eIz2Wdu%2B%2BJYkohmXrO7y4vwz%2Fa%2BLAcSSEzGqQBycQ5cyrg6jJmOu4OHCwnfXaWM2cNExY%2FlkWzmdJ%2B2x9RpIaT5%2FQS4SAWLjK69J2J7Fl%2BFs7rJ7%2FLfk%2BIU8BZsTw93cgawnhVaA9%2F3zEk%2BobIeAt3XKES6Fs57w4U8fh3%2F81qDy0sDoiGq0Bl%2Bhh%2B8wupeyofhTXz0whUlB9PZVFYTUFgdOBW1gg1nJR835iPWBfO%2FE54RsNhD2N6ZM7cttWcog8yaNVQhWP2psiWfS7Pr2P0akMLu%2BQFR7VBzTRFYEoXcPmu3EsOjrnQv9cQno09OATMIlrC0EzV6nXmqzQic9p3zNW%2FD3SJqH0XtnJlgppQjRkUAF8YWIpVt3GZXpbzgv1oZVSbApp9zPFh%2BxyfB0AV%2Fyk1gpaAbB5n3ScZLPJb2eK%2BQEHYGTRE8qK%2BhcUg%2BvKZPcOEusGrfMIqSz8IGOqUBuSq6UbLPZSjMhI%2FcH00OYEE7MkVVAxpQ22pnT62MH4ZvvYqBzIntBQTtPeMxqPlyBBGUEuu09cxZ35kQkwFQpHPi7ORGWnke03NN%2B5aAh6xk8fMQavlzi0biOCfNgcoLICUQvZk3MmdkkG7X3ka1D7u1gyddDcQf1ZLXwjM81m3sOdZRMAb0vCowRs%2FBrW0lr%2B5SoX3TszhVuX86RQwR3HlhxcWz&X-Amz-Signature=91240fe4e03e379cef304123153374ba24831e6f8791bfaf9f6fe2243c3e3fc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DLYERCU%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVrwfiAg32%2FTgyhoFBAth1O4DSrWw8RrBfZXxGp5TOhAIgDMd%2BMIeKycbitKhUQ79N9HUE%2BfCtJZl3ustsCxyETIkqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHhBNunPodTE2ItnvSrcA0LhCjico1knIXsRF%2B4aN58Qkgx54%2BS8vWW2pDbpAAduIIoGWP6DMTE5jzHyZm0IeUL8Hkdi7vq8GMqDHlkesYiJerRbpv2%2FYEeVNio7FaH8qIgBeYOCy06fVfBmdnsNcdSf3YTA3jWNle4fyJe16yVer1nCmdFk1qX7DDGdm0%2BmKSbo4eIz2Wdu%2B%2BJYkohmXrO7y4vwz%2Fa%2BLAcSSEzGqQBycQ5cyrg6jJmOu4OHCwnfXaWM2cNExY%2FlkWzmdJ%2B2x9RpIaT5%2FQS4SAWLjK69J2J7Fl%2BFs7rJ7%2FLfk%2BIU8BZsTw93cgawnhVaA9%2F3zEk%2BobIeAt3XKES6Fs57w4U8fh3%2F81qDy0sDoiGq0Bl%2Bhh%2B8wupeyofhTXz0whUlB9PZVFYTUFgdOBW1gg1nJR835iPWBfO%2FE54RsNhD2N6ZM7cttWcog8yaNVQhWP2psiWfS7Pr2P0akMLu%2BQFR7VBzTRFYEoXcPmu3EsOjrnQv9cQno09OATMIlrC0EzV6nXmqzQic9p3zNW%2FD3SJqH0XtnJlgppQjRkUAF8YWIpVt3GZXpbzgv1oZVSbApp9zPFh%2BxyfB0AV%2Fyk1gpaAbB5n3ScZLPJb2eK%2BQEHYGTRE8qK%2BhcUg%2BvKZPcOEusGrfMIqSz8IGOqUBuSq6UbLPZSjMhI%2FcH00OYEE7MkVVAxpQ22pnT62MH4ZvvYqBzIntBQTtPeMxqPlyBBGUEuu09cxZ35kQkwFQpHPi7ORGWnke03NN%2B5aAh6xk8fMQavlzi0biOCfNgcoLICUQvZk3MmdkkG7X3ka1D7u1gyddDcQf1ZLXwjM81m3sOdZRMAb0vCowRs%2FBrW0lr%2B5SoX3TszhVuX86RQwR3HlhxcWz&X-Amz-Signature=09ae7957be405bc14476704cb3c77b419cbac85294c595ad5f6496b47d226469&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DLYERCU%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVrwfiAg32%2FTgyhoFBAth1O4DSrWw8RrBfZXxGp5TOhAIgDMd%2BMIeKycbitKhUQ79N9HUE%2BfCtJZl3ustsCxyETIkqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHhBNunPodTE2ItnvSrcA0LhCjico1knIXsRF%2B4aN58Qkgx54%2BS8vWW2pDbpAAduIIoGWP6DMTE5jzHyZm0IeUL8Hkdi7vq8GMqDHlkesYiJerRbpv2%2FYEeVNio7FaH8qIgBeYOCy06fVfBmdnsNcdSf3YTA3jWNle4fyJe16yVer1nCmdFk1qX7DDGdm0%2BmKSbo4eIz2Wdu%2B%2BJYkohmXrO7y4vwz%2Fa%2BLAcSSEzGqQBycQ5cyrg6jJmOu4OHCwnfXaWM2cNExY%2FlkWzmdJ%2B2x9RpIaT5%2FQS4SAWLjK69J2J7Fl%2BFs7rJ7%2FLfk%2BIU8BZsTw93cgawnhVaA9%2F3zEk%2BobIeAt3XKES6Fs57w4U8fh3%2F81qDy0sDoiGq0Bl%2Bhh%2B8wupeyofhTXz0whUlB9PZVFYTUFgdOBW1gg1nJR835iPWBfO%2FE54RsNhD2N6ZM7cttWcog8yaNVQhWP2psiWfS7Pr2P0akMLu%2BQFR7VBzTRFYEoXcPmu3EsOjrnQv9cQno09OATMIlrC0EzV6nXmqzQic9p3zNW%2FD3SJqH0XtnJlgppQjRkUAF8YWIpVt3GZXpbzgv1oZVSbApp9zPFh%2BxyfB0AV%2Fyk1gpaAbB5n3ScZLPJb2eK%2BQEHYGTRE8qK%2BhcUg%2BvKZPcOEusGrfMIqSz8IGOqUBuSq6UbLPZSjMhI%2FcH00OYEE7MkVVAxpQ22pnT62MH4ZvvYqBzIntBQTtPeMxqPlyBBGUEuu09cxZ35kQkwFQpHPi7ORGWnke03NN%2B5aAh6xk8fMQavlzi0biOCfNgcoLICUQvZk3MmdkkG7X3ka1D7u1gyddDcQf1ZLXwjM81m3sOdZRMAb0vCowRs%2FBrW0lr%2B5SoX3TszhVuX86RQwR3HlhxcWz&X-Amz-Signature=a74e9993529a1b7508063b883bf4e56481fdef47703799371fb71bbda10f9c78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
