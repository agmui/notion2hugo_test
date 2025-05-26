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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTR7RAUL%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T023905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDDDcsRtN5H0nZhJfkmd%2Bu4dv5gBY62vN8oeLRncfyYSAIgJfy%2BHjqQHQo3Co7JN%2F6a1DMsVKNf0UMFLWLpXrAVEyoq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDKHYqNUuxYsS3hQ0xyrcA9zniZN76NPfPdxSjdFxmajh%2BEirX6ttp2nsgg5pNukF4lr%2FTxA2OlW6%2FGHc2GhlgBTTdS%2B6aLi9ad%2FLwYriqu%2FOlZVVKwMJfOpWMp1PIlEPHzZaD5R%2F6kBa%2BPp2OFQBs9FMPcDo%2BuBpEWWHCXiXRWXOHwkb7dOq0w2oaGmzqaQspjSAFbYgyCpyzGmgk59EHQdKfElktCsPfK8bm0uULZ6852RXvLoxR4o%2FWiaRtRgWcpFcvW9ePWeJA7HpgF2Sq1Gi05Bmag0PYLg0%2Brsl2A6GvtKlzNqKDN3oZvGoznzNqad56ZPaHZjllMIOKwPMTIs0oEeqBEmc2szrqhi7RSF64QSg6WyUMz0naSiOogpZFGb4LzwmZViLMQexpLtVnZyTJejQrTWzOAykf7kWYuy%2Fg7a%2BEPyQaXvLVPtoNAhFE538XHZvEDermyUFpSFj8l%2FmcUv6EYk5nYSv7vSfw00FF93NwMyAfW1ebj6ptz79tiGCtfTOo2OcIkf6OSTu8aMZZP8Zl7ltK0uzvPL0Zd1rVcD0sEHxpI%2F601AM%2FBb%2Bv7aK6XETe3BzrwBYjP4128saiBY8QXSPanzbOPZY4kSoSeIFcuTy2oho%2FdDPvoBgFYUosS4MLgBuT67aMOWdz8EGOqUB04k7ziS%2BJOVtwwQfdZ%2B6Y6dKZDO8SrWWhhi8kS84Fq%2FvfBVMttu2RNG8YmqX3s5Za%2Br1ksXvpA9nO0WdXIdzCwb7tAetf1Ev%2BQlMw4Ma2rPAHK8yAeKazgYTIEhDvfNNE0W7lENS8alhv9kqRok5%2FX9ZCOLmIOES%2BgHBgwngTqhUcuOefzDWjDcjrd72koh1A4ggg8N0ctScmqhOOdgH56KPhcm3&X-Amz-Signature=22c057149b0b51ade960c0f91cbd821df9afc14e61788e88bafb003240151857&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTR7RAUL%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T023905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDDDcsRtN5H0nZhJfkmd%2Bu4dv5gBY62vN8oeLRncfyYSAIgJfy%2BHjqQHQo3Co7JN%2F6a1DMsVKNf0UMFLWLpXrAVEyoq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDKHYqNUuxYsS3hQ0xyrcA9zniZN76NPfPdxSjdFxmajh%2BEirX6ttp2nsgg5pNukF4lr%2FTxA2OlW6%2FGHc2GhlgBTTdS%2B6aLi9ad%2FLwYriqu%2FOlZVVKwMJfOpWMp1PIlEPHzZaD5R%2F6kBa%2BPp2OFQBs9FMPcDo%2BuBpEWWHCXiXRWXOHwkb7dOq0w2oaGmzqaQspjSAFbYgyCpyzGmgk59EHQdKfElktCsPfK8bm0uULZ6852RXvLoxR4o%2FWiaRtRgWcpFcvW9ePWeJA7HpgF2Sq1Gi05Bmag0PYLg0%2Brsl2A6GvtKlzNqKDN3oZvGoznzNqad56ZPaHZjllMIOKwPMTIs0oEeqBEmc2szrqhi7RSF64QSg6WyUMz0naSiOogpZFGb4LzwmZViLMQexpLtVnZyTJejQrTWzOAykf7kWYuy%2Fg7a%2BEPyQaXvLVPtoNAhFE538XHZvEDermyUFpSFj8l%2FmcUv6EYk5nYSv7vSfw00FF93NwMyAfW1ebj6ptz79tiGCtfTOo2OcIkf6OSTu8aMZZP8Zl7ltK0uzvPL0Zd1rVcD0sEHxpI%2F601AM%2FBb%2Bv7aK6XETe3BzrwBYjP4128saiBY8QXSPanzbOPZY4kSoSeIFcuTy2oho%2FdDPvoBgFYUosS4MLgBuT67aMOWdz8EGOqUB04k7ziS%2BJOVtwwQfdZ%2B6Y6dKZDO8SrWWhhi8kS84Fq%2FvfBVMttu2RNG8YmqX3s5Za%2Br1ksXvpA9nO0WdXIdzCwb7tAetf1Ev%2BQlMw4Ma2rPAHK8yAeKazgYTIEhDvfNNE0W7lENS8alhv9kqRok5%2FX9ZCOLmIOES%2BgHBgwngTqhUcuOefzDWjDcjrd72koh1A4ggg8N0ctScmqhOOdgH56KPhcm3&X-Amz-Signature=da2d0b9bbbb7cbdf9cced973cd96b53d76a7aa5ec174404940bc351781685b5c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTR7RAUL%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T023905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDDDcsRtN5H0nZhJfkmd%2Bu4dv5gBY62vN8oeLRncfyYSAIgJfy%2BHjqQHQo3Co7JN%2F6a1DMsVKNf0UMFLWLpXrAVEyoq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDKHYqNUuxYsS3hQ0xyrcA9zniZN76NPfPdxSjdFxmajh%2BEirX6ttp2nsgg5pNukF4lr%2FTxA2OlW6%2FGHc2GhlgBTTdS%2B6aLi9ad%2FLwYriqu%2FOlZVVKwMJfOpWMp1PIlEPHzZaD5R%2F6kBa%2BPp2OFQBs9FMPcDo%2BuBpEWWHCXiXRWXOHwkb7dOq0w2oaGmzqaQspjSAFbYgyCpyzGmgk59EHQdKfElktCsPfK8bm0uULZ6852RXvLoxR4o%2FWiaRtRgWcpFcvW9ePWeJA7HpgF2Sq1Gi05Bmag0PYLg0%2Brsl2A6GvtKlzNqKDN3oZvGoznzNqad56ZPaHZjllMIOKwPMTIs0oEeqBEmc2szrqhi7RSF64QSg6WyUMz0naSiOogpZFGb4LzwmZViLMQexpLtVnZyTJejQrTWzOAykf7kWYuy%2Fg7a%2BEPyQaXvLVPtoNAhFE538XHZvEDermyUFpSFj8l%2FmcUv6EYk5nYSv7vSfw00FF93NwMyAfW1ebj6ptz79tiGCtfTOo2OcIkf6OSTu8aMZZP8Zl7ltK0uzvPL0Zd1rVcD0sEHxpI%2F601AM%2FBb%2Bv7aK6XETe3BzrwBYjP4128saiBY8QXSPanzbOPZY4kSoSeIFcuTy2oho%2FdDPvoBgFYUosS4MLgBuT67aMOWdz8EGOqUB04k7ziS%2BJOVtwwQfdZ%2B6Y6dKZDO8SrWWhhi8kS84Fq%2FvfBVMttu2RNG8YmqX3s5Za%2Br1ksXvpA9nO0WdXIdzCwb7tAetf1Ev%2BQlMw4Ma2rPAHK8yAeKazgYTIEhDvfNNE0W7lENS8alhv9kqRok5%2FX9ZCOLmIOES%2BgHBgwngTqhUcuOefzDWjDcjrd72koh1A4ggg8N0ctScmqhOOdgH56KPhcm3&X-Amz-Signature=c059804a81eb07723b0de4435f8483ab9d361637983740eb9112e98b0a8eed15&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
