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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEG2SQHD%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T004030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgLQK7LV916hKh9Gjcop1f5zKvxburYMjeFBHqAiPXkAIgY3p5F%2B0Tbu7y4Sg6yH8Z2ovUTj91BJCwOCszozY9iRgqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6%2BTFM1ez7Mb3y%2BuSrcAyjfpcL%2B%2FMEk3scZmeRpyG6LsoKTr6p%2FubczdDYAqvvSOTwpz9xNjNosoY34eTVdhhoXEffgQIHfhVir8FJbkBrp5Ha1i2mQkmUvkHSlwG3nt%2Fx9Il2cPqtqUJa6RZ0tfCwqAVQIMEhLZBUCCg%2BDz59JlEff5qS6D6JddGr50Sm3ZyJwgOlwjEuJ%2FWknYu7bU3ppd2B5hcU%2FYwsMFJ7aNCLlldcBxCHhotckGRYvblG1AG75hJQooucyep2Wc7VkKJ5yK9t3cQVHhr2ByvlE8PejRYGkxLEp2LE%2Fi1SospBB57i5d9pqjoqfHrE%2FfoV5FOXSrw1lOX4NOIEJvMQjVB2xW7oVZ8b9a3HyzzKeItnAk0cDwhPaevp5X6Txb04a397y4myvVgOQidWw5I7LiyMDpWknKmLltMzoGLxrC5qYYw8UZzrJ%2FIL%2B%2FE2oElfUok71hT89NpwfefNBXZQy%2FML4UwIonF8MCsz9bE%2FM2RB0%2BkrQDscCFwBNPTHeu2LBkoEHANAFneuuuuQfCAtmVS19PxAYEx1QT2EjiAAScWjnNbBxc5RhGLFArmFVwMetHPzZGYFhePPkOMEuv%2BkByCHmri79Q8LlBDFTkM9yYGW9xIiydowENJFA5ZdOMJyX6cEGOqUByGiEdUsnSHysnS6GZ%2BqodSrZDJZ8WHAX08%2FFwLmQLefphPJsahcTI7MvrcdhnY4CCPPM7byn3OWdqhu8HDt2UBUzSqMvPn1LekgrIInUN3VMfavwtZ1pbjKM5A5Hrcz%2BiJHTN1vFC5JW6A62mfa6LuFxf5cdguMaoHpGIAtCJjqfES47gkzMMOYlcWg0c9J%2B6ZKIqoTZqKXUfvgCNvBR2HwQqhT0&X-Amz-Signature=bcf305f2ff4f90d181ec4df29a14f35d5d5e5c3f64f195921e7b082fdde21a2f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEG2SQHD%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T004030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgLQK7LV916hKh9Gjcop1f5zKvxburYMjeFBHqAiPXkAIgY3p5F%2B0Tbu7y4Sg6yH8Z2ovUTj91BJCwOCszozY9iRgqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6%2BTFM1ez7Mb3y%2BuSrcAyjfpcL%2B%2FMEk3scZmeRpyG6LsoKTr6p%2FubczdDYAqvvSOTwpz9xNjNosoY34eTVdhhoXEffgQIHfhVir8FJbkBrp5Ha1i2mQkmUvkHSlwG3nt%2Fx9Il2cPqtqUJa6RZ0tfCwqAVQIMEhLZBUCCg%2BDz59JlEff5qS6D6JddGr50Sm3ZyJwgOlwjEuJ%2FWknYu7bU3ppd2B5hcU%2FYwsMFJ7aNCLlldcBxCHhotckGRYvblG1AG75hJQooucyep2Wc7VkKJ5yK9t3cQVHhr2ByvlE8PejRYGkxLEp2LE%2Fi1SospBB57i5d9pqjoqfHrE%2FfoV5FOXSrw1lOX4NOIEJvMQjVB2xW7oVZ8b9a3HyzzKeItnAk0cDwhPaevp5X6Txb04a397y4myvVgOQidWw5I7LiyMDpWknKmLltMzoGLxrC5qYYw8UZzrJ%2FIL%2B%2FE2oElfUok71hT89NpwfefNBXZQy%2FML4UwIonF8MCsz9bE%2FM2RB0%2BkrQDscCFwBNPTHeu2LBkoEHANAFneuuuuQfCAtmVS19PxAYEx1QT2EjiAAScWjnNbBxc5RhGLFArmFVwMetHPzZGYFhePPkOMEuv%2BkByCHmri79Q8LlBDFTkM9yYGW9xIiydowENJFA5ZdOMJyX6cEGOqUByGiEdUsnSHysnS6GZ%2BqodSrZDJZ8WHAX08%2FFwLmQLefphPJsahcTI7MvrcdhnY4CCPPM7byn3OWdqhu8HDt2UBUzSqMvPn1LekgrIInUN3VMfavwtZ1pbjKM5A5Hrcz%2BiJHTN1vFC5JW6A62mfa6LuFxf5cdguMaoHpGIAtCJjqfES47gkzMMOYlcWg0c9J%2B6ZKIqoTZqKXUfvgCNvBR2HwQqhT0&X-Amz-Signature=61c25e12d940229daf8090946107a90d38a8eec4706c88b75e67d7936209fef9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEG2SQHD%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T004030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgLQK7LV916hKh9Gjcop1f5zKvxburYMjeFBHqAiPXkAIgY3p5F%2B0Tbu7y4Sg6yH8Z2ovUTj91BJCwOCszozY9iRgqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6%2BTFM1ez7Mb3y%2BuSrcAyjfpcL%2B%2FMEk3scZmeRpyG6LsoKTr6p%2FubczdDYAqvvSOTwpz9xNjNosoY34eTVdhhoXEffgQIHfhVir8FJbkBrp5Ha1i2mQkmUvkHSlwG3nt%2Fx9Il2cPqtqUJa6RZ0tfCwqAVQIMEhLZBUCCg%2BDz59JlEff5qS6D6JddGr50Sm3ZyJwgOlwjEuJ%2FWknYu7bU3ppd2B5hcU%2FYwsMFJ7aNCLlldcBxCHhotckGRYvblG1AG75hJQooucyep2Wc7VkKJ5yK9t3cQVHhr2ByvlE8PejRYGkxLEp2LE%2Fi1SospBB57i5d9pqjoqfHrE%2FfoV5FOXSrw1lOX4NOIEJvMQjVB2xW7oVZ8b9a3HyzzKeItnAk0cDwhPaevp5X6Txb04a397y4myvVgOQidWw5I7LiyMDpWknKmLltMzoGLxrC5qYYw8UZzrJ%2FIL%2B%2FE2oElfUok71hT89NpwfefNBXZQy%2FML4UwIonF8MCsz9bE%2FM2RB0%2BkrQDscCFwBNPTHeu2LBkoEHANAFneuuuuQfCAtmVS19PxAYEx1QT2EjiAAScWjnNbBxc5RhGLFArmFVwMetHPzZGYFhePPkOMEuv%2BkByCHmri79Q8LlBDFTkM9yYGW9xIiydowENJFA5ZdOMJyX6cEGOqUByGiEdUsnSHysnS6GZ%2BqodSrZDJZ8WHAX08%2FFwLmQLefphPJsahcTI7MvrcdhnY4CCPPM7byn3OWdqhu8HDt2UBUzSqMvPn1LekgrIInUN3VMfavwtZ1pbjKM5A5Hrcz%2BiJHTN1vFC5JW6A62mfa6LuFxf5cdguMaoHpGIAtCJjqfES47gkzMMOYlcWg0c9J%2B6ZKIqoTZqKXUfvgCNvBR2HwQqhT0&X-Amz-Signature=6626bffc22684e8184b8a2c486d96f70033180e80093806d7071eed4b340ed6e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
