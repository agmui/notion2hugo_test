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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UPFEN4B%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICnqSDVvnmZL5W9YgED%2BS%2Fa129ZgWNNT6ZscPsbtDFL%2FAiEA4w40T7%2B9x8ELNI4ChSx5sjIhQloJLIcdO3kOHVgLtcgqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOu3e3MMDZ2auYMwOyrcAwElhXCuYEsBSR4vVMyihb5g6G%2F0ewKD38ZXTSHMK2GWD0V23ZKKwuBvLLMZOAd1%2F8GYOXOYh7KZgWl%2F0PV0j4zmVQOcf7W8r9jofwI3igrGtD32JJWJ3uoiUOXFyFc3rCv%2BhGMbfXBLfmtHqEDJRPP3FNIJUu%2B%2FiSOynH3jR41S%2B%2BNRJDOiLBGBrz%2F7%2Bvo9R3nLu%2BC6FRQVrQdAk8%2BAsyeXeJmrwh2GxLVzGZLG79kx52id8MvGgXpvymSsUloEPvD%2BkKBAJ4gOBhHMfRE5EvDNSB8vM3%2F6pW85wJYbb6waJ8VJ6Bm56E8r6ok9d5Jg14VgEFLBYU15B7%2F5vF5Qoz37fu5bKTnmeaoYUwVhxIM5TWD6YYCVtUiqOHmIzjxKAUwv%2BzAaAWcXAQKOlDAUNL7qH1jpnCB%2FHtrT0vsz79BiX0hFt8noMdlQRQsDQHj%2FdNtyyR4Anhv3%2FmdyG%2BebS9XDeDZsD76OgTEj82I%2F1T3fsjh%2FEQDEcyWRRTb8%2BK9Ya9x%2FKQdLytsW4rV5f4SN0bwNuV5vrT2DPRJrZHph2xNAtYFFQJytSO24e55vbnrjLZjfaPkzSgd7r7spbFvDCGMSihaEGqxDNU1l6vYoxj8pq4vqWOssZ8%2FMIquNMP6I8sYGOqUBVWvTmLXxhdbJ51j8da%2B5x8Zq312PKFz9IB55F9EIfA8niEj8AizvwSW9ekei%2FSu8DpzUwh9dV536UJEm3ioNRD1yLA8MWLwmWSBdtoh6V2wMsTbzmng%2BSyoGf9FrHmtv5TfRSkqKOCjUpY4rDJ2Hf1qAkRFomXMUCU70umCSxtbc3cLDzZRry%2FvfaO24O71jbQ8WdCvIJRxAiHB1QIpRxBau1NcT&X-Amz-Signature=ef3fed4ad4c84cd8ac539171dbb906ce967b975765ab947e2229d8dc79959baf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UPFEN4B%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICnqSDVvnmZL5W9YgED%2BS%2Fa129ZgWNNT6ZscPsbtDFL%2FAiEA4w40T7%2B9x8ELNI4ChSx5sjIhQloJLIcdO3kOHVgLtcgqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOu3e3MMDZ2auYMwOyrcAwElhXCuYEsBSR4vVMyihb5g6G%2F0ewKD38ZXTSHMK2GWD0V23ZKKwuBvLLMZOAd1%2F8GYOXOYh7KZgWl%2F0PV0j4zmVQOcf7W8r9jofwI3igrGtD32JJWJ3uoiUOXFyFc3rCv%2BhGMbfXBLfmtHqEDJRPP3FNIJUu%2B%2FiSOynH3jR41S%2B%2BNRJDOiLBGBrz%2F7%2Bvo9R3nLu%2BC6FRQVrQdAk8%2BAsyeXeJmrwh2GxLVzGZLG79kx52id8MvGgXpvymSsUloEPvD%2BkKBAJ4gOBhHMfRE5EvDNSB8vM3%2F6pW85wJYbb6waJ8VJ6Bm56E8r6ok9d5Jg14VgEFLBYU15B7%2F5vF5Qoz37fu5bKTnmeaoYUwVhxIM5TWD6YYCVtUiqOHmIzjxKAUwv%2BzAaAWcXAQKOlDAUNL7qH1jpnCB%2FHtrT0vsz79BiX0hFt8noMdlQRQsDQHj%2FdNtyyR4Anhv3%2FmdyG%2BebS9XDeDZsD76OgTEj82I%2F1T3fsjh%2FEQDEcyWRRTb8%2BK9Ya9x%2FKQdLytsW4rV5f4SN0bwNuV5vrT2DPRJrZHph2xNAtYFFQJytSO24e55vbnrjLZjfaPkzSgd7r7spbFvDCGMSihaEGqxDNU1l6vYoxj8pq4vqWOssZ8%2FMIquNMP6I8sYGOqUBVWvTmLXxhdbJ51j8da%2B5x8Zq312PKFz9IB55F9EIfA8niEj8AizvwSW9ekei%2FSu8DpzUwh9dV536UJEm3ioNRD1yLA8MWLwmWSBdtoh6V2wMsTbzmng%2BSyoGf9FrHmtv5TfRSkqKOCjUpY4rDJ2Hf1qAkRFomXMUCU70umCSxtbc3cLDzZRry%2FvfaO24O71jbQ8WdCvIJRxAiHB1QIpRxBau1NcT&X-Amz-Signature=1bc69adae8cf73a41364dac8e1c7f0e45420d6f5e6c50dda1cb651d79fa26083&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UPFEN4B%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICnqSDVvnmZL5W9YgED%2BS%2Fa129ZgWNNT6ZscPsbtDFL%2FAiEA4w40T7%2B9x8ELNI4ChSx5sjIhQloJLIcdO3kOHVgLtcgqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOu3e3MMDZ2auYMwOyrcAwElhXCuYEsBSR4vVMyihb5g6G%2F0ewKD38ZXTSHMK2GWD0V23ZKKwuBvLLMZOAd1%2F8GYOXOYh7KZgWl%2F0PV0j4zmVQOcf7W8r9jofwI3igrGtD32JJWJ3uoiUOXFyFc3rCv%2BhGMbfXBLfmtHqEDJRPP3FNIJUu%2B%2FiSOynH3jR41S%2B%2BNRJDOiLBGBrz%2F7%2Bvo9R3nLu%2BC6FRQVrQdAk8%2BAsyeXeJmrwh2GxLVzGZLG79kx52id8MvGgXpvymSsUloEPvD%2BkKBAJ4gOBhHMfRE5EvDNSB8vM3%2F6pW85wJYbb6waJ8VJ6Bm56E8r6ok9d5Jg14VgEFLBYU15B7%2F5vF5Qoz37fu5bKTnmeaoYUwVhxIM5TWD6YYCVtUiqOHmIzjxKAUwv%2BzAaAWcXAQKOlDAUNL7qH1jpnCB%2FHtrT0vsz79BiX0hFt8noMdlQRQsDQHj%2FdNtyyR4Anhv3%2FmdyG%2BebS9XDeDZsD76OgTEj82I%2F1T3fsjh%2FEQDEcyWRRTb8%2BK9Ya9x%2FKQdLytsW4rV5f4SN0bwNuV5vrT2DPRJrZHph2xNAtYFFQJytSO24e55vbnrjLZjfaPkzSgd7r7spbFvDCGMSihaEGqxDNU1l6vYoxj8pq4vqWOssZ8%2FMIquNMP6I8sYGOqUBVWvTmLXxhdbJ51j8da%2B5x8Zq312PKFz9IB55F9EIfA8niEj8AizvwSW9ekei%2FSu8DpzUwh9dV536UJEm3ioNRD1yLA8MWLwmWSBdtoh6V2wMsTbzmng%2BSyoGf9FrHmtv5TfRSkqKOCjUpY4rDJ2Hf1qAkRFomXMUCU70umCSxtbc3cLDzZRry%2FvfaO24O71jbQ8WdCvIJRxAiHB1QIpRxBau1NcT&X-Amz-Signature=7885b1dee2400c33a0045521123d032a983e34091d76638f4feff8663fcfd524&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
