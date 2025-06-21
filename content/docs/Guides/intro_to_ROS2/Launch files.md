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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UAKATQF%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T181027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbkOXeH5%2BPkSaBKJ1VQ6Hs5JRFLDaMhU82VuVhzINWrAiARzqgVqIToY6J%2BHUQjVI5VknMoEpLKO26V1fmpd0v5dyqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUfLZpgELZAXRUeuiKtwDM8vM3SCDokG%2Bkwy4DdEgVRBsSZUbBn6gyiqztGJY%2F4pTorvzNXDCAnVCeY8ZtAd4iUaHIjWiOoM6UBHvZC%2FzLlvaXoE%2BXbqCP0I16fQBsBDjaevDFYp2tUrUs0eY8J%2BdGoDV%2Bl5QOJzmCpteg9pbSz0Dldj4vryumyDTBKudeWvnWb85o78OC0wb1WGJnl0MLlMtLa8RQe5BVP6ICKT7A5Iq9tlu1%2FV2AQVnUxTuJUWZCUhxIM28odImHuT8sYobVclvFvheLLLMRpeQeqH0z5rSBxbsvBId2h2N8R19Jw4jBHWu2QjTKICl1z%2F7mvts%2BswVFsvFkkZ1Vju3%2BSM0n68VkI8p6uhZvGFMfiM7AOjIPtDaIxjKFREiNPqQ4LqPYAZhgIgXSx5yz7QUcHaVF3rOFpR3vS8RyBEX2beXjFV%2FGExd51dyOu%2B%2F1qlqV5CNh3tJRogY%2Fzl4eial3lao4ofxUiq3Nexs7YJF19bz8vrcRSI2gHPt4aj3qSeXManuUsXhutYmOhVbnEqk48B1TguzeDV8Fexq7m7rmruvhmc0T9o5%2FpnxiqhmDjgjoowE7iuWo57%2BEhepUAWHY1RcQ0ReVGeRg0KS1oAzblys%2BMITfZXisXdhlStvRvAw0Y%2FbwgY6pgE4DNRbkJ4YWmwMMAibnW%2Fxgtnq9amkD4mRBEFv2wLu8MFncggthgaHKV%2BwGGthAA5bg4AChX7YY9CL6HcJerPpsMuNBwMAIG0v8DvRlGEm%2B4kJjq0toa1x925KwzMoPeae1aBkMgvrqIcxXWnTmHJOjA6ja7PQsnyJsuKGpvgTOMK2xrGQTOVSylFedUfTWHmq%2BPVTxUKXxw4mvVtfIKE1H%2F0GHiTV&X-Amz-Signature=6fa24aedf87fd8fb6cfe29cfc66c2dcc78cf646bbc8475110430e09ce5169433&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UAKATQF%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T181027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbkOXeH5%2BPkSaBKJ1VQ6Hs5JRFLDaMhU82VuVhzINWrAiARzqgVqIToY6J%2BHUQjVI5VknMoEpLKO26V1fmpd0v5dyqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUfLZpgELZAXRUeuiKtwDM8vM3SCDokG%2Bkwy4DdEgVRBsSZUbBn6gyiqztGJY%2F4pTorvzNXDCAnVCeY8ZtAd4iUaHIjWiOoM6UBHvZC%2FzLlvaXoE%2BXbqCP0I16fQBsBDjaevDFYp2tUrUs0eY8J%2BdGoDV%2Bl5QOJzmCpteg9pbSz0Dldj4vryumyDTBKudeWvnWb85o78OC0wb1WGJnl0MLlMtLa8RQe5BVP6ICKT7A5Iq9tlu1%2FV2AQVnUxTuJUWZCUhxIM28odImHuT8sYobVclvFvheLLLMRpeQeqH0z5rSBxbsvBId2h2N8R19Jw4jBHWu2QjTKICl1z%2F7mvts%2BswVFsvFkkZ1Vju3%2BSM0n68VkI8p6uhZvGFMfiM7AOjIPtDaIxjKFREiNPqQ4LqPYAZhgIgXSx5yz7QUcHaVF3rOFpR3vS8RyBEX2beXjFV%2FGExd51dyOu%2B%2F1qlqV5CNh3tJRogY%2Fzl4eial3lao4ofxUiq3Nexs7YJF19bz8vrcRSI2gHPt4aj3qSeXManuUsXhutYmOhVbnEqk48B1TguzeDV8Fexq7m7rmruvhmc0T9o5%2FpnxiqhmDjgjoowE7iuWo57%2BEhepUAWHY1RcQ0ReVGeRg0KS1oAzblys%2BMITfZXisXdhlStvRvAw0Y%2FbwgY6pgE4DNRbkJ4YWmwMMAibnW%2Fxgtnq9amkD4mRBEFv2wLu8MFncggthgaHKV%2BwGGthAA5bg4AChX7YY9CL6HcJerPpsMuNBwMAIG0v8DvRlGEm%2B4kJjq0toa1x925KwzMoPeae1aBkMgvrqIcxXWnTmHJOjA6ja7PQsnyJsuKGpvgTOMK2xrGQTOVSylFedUfTWHmq%2BPVTxUKXxw4mvVtfIKE1H%2F0GHiTV&X-Amz-Signature=563b33ac8eaaa2a324be49438b55c90f033fdfb4e098f907f97f183a4a40189b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UAKATQF%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T181027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbkOXeH5%2BPkSaBKJ1VQ6Hs5JRFLDaMhU82VuVhzINWrAiARzqgVqIToY6J%2BHUQjVI5VknMoEpLKO26V1fmpd0v5dyqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUfLZpgELZAXRUeuiKtwDM8vM3SCDokG%2Bkwy4DdEgVRBsSZUbBn6gyiqztGJY%2F4pTorvzNXDCAnVCeY8ZtAd4iUaHIjWiOoM6UBHvZC%2FzLlvaXoE%2BXbqCP0I16fQBsBDjaevDFYp2tUrUs0eY8J%2BdGoDV%2Bl5QOJzmCpteg9pbSz0Dldj4vryumyDTBKudeWvnWb85o78OC0wb1WGJnl0MLlMtLa8RQe5BVP6ICKT7A5Iq9tlu1%2FV2AQVnUxTuJUWZCUhxIM28odImHuT8sYobVclvFvheLLLMRpeQeqH0z5rSBxbsvBId2h2N8R19Jw4jBHWu2QjTKICl1z%2F7mvts%2BswVFsvFkkZ1Vju3%2BSM0n68VkI8p6uhZvGFMfiM7AOjIPtDaIxjKFREiNPqQ4LqPYAZhgIgXSx5yz7QUcHaVF3rOFpR3vS8RyBEX2beXjFV%2FGExd51dyOu%2B%2F1qlqV5CNh3tJRogY%2Fzl4eial3lao4ofxUiq3Nexs7YJF19bz8vrcRSI2gHPt4aj3qSeXManuUsXhutYmOhVbnEqk48B1TguzeDV8Fexq7m7rmruvhmc0T9o5%2FpnxiqhmDjgjoowE7iuWo57%2BEhepUAWHY1RcQ0ReVGeRg0KS1oAzblys%2BMITfZXisXdhlStvRvAw0Y%2FbwgY6pgE4DNRbkJ4YWmwMMAibnW%2Fxgtnq9amkD4mRBEFv2wLu8MFncggthgaHKV%2BwGGthAA5bg4AChX7YY9CL6HcJerPpsMuNBwMAIG0v8DvRlGEm%2B4kJjq0toa1x925KwzMoPeae1aBkMgvrqIcxXWnTmHJOjA6ja7PQsnyJsuKGpvgTOMK2xrGQTOVSylFedUfTWHmq%2BPVTxUKXxw4mvVtfIKE1H%2F0GHiTV&X-Amz-Signature=1664ba69818ee565ff34722abf8f9d1189b5afbbb9c87ea9f20e2bc30d489240&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
