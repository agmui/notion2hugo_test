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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDTGQELF%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDryY7vtMn1kTcDwgnuvt7dRjNbqA1tSi9PUjzD7R5HQAiEAgS%2FCeGndLeJyui2JZRtf0NZgVJNWU%2BbSYqciwzvVG%2BEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDMqPR0p6aAKTIJlOeCrcA9BMpWFR2%2B29ZnaoG2%2BvNVUa4O3kVf1je4tG5nwMbjCnu%2FbFDOQ%2B5awHdFiGTWx8k8i1o%2Bg4oKA7yf9D1KRJcIyHUO5IPaUf%2FpJefe2Knq9HPFWqcSrfJ1ap4BiXgESTu0dtJMTF1jLl3IWN69gfTV3grEJcHqFuRfPjbG8%2BACG%2BLjEIrrl8OuOfUZGKAa6aT3w0zlvNKvH42%2BWKfnvFLvLKTZa1AFuvDexOqf0JyT5E6bpcrubgBIun4ayP8Akt%2B7NuSi6eWPsXmFIFjMtTdOXOEtyMGsF64Yh%2B9vj4VycisFlAzgeFhM9Qi12HvI4TbrVXRLMzihu8v%2BoIOIcGmBQR69F26wctgzQWnE6IIEvQJJKEylg5Ic%2FmbOw5FacalNDmjOuQf9DxGEZrWPl3s3WzVEE%2FcBOr29Ru%2B2m1VFUTBPDsMcT69raI0kt0Ts8UCWYJ0R0nfsBebDo7hBGWiFSjyBMMOBYbpmB948FVK8xshv3k4%2BYpx3WK16G1ViJo579qtuqbHB9KeL0G2GEA8HdkZMYqv8XMxmy7gnaebsyGtANPlepRL9j74wLVqzi1TIYry9irDGG0tF9BHEdKCPKUE%2F7BD5dSNLRDK%2FOm8k8QIwO9LeIryHkhUKxyMPjqur0GOqUBXxVe9Y1wVPXsVEpnvHUGVlxv%2FiGoBMnsZIXsAP5aJeGoiJPTALOQHOgvmdHtsCbLAvpzJxAHeLqu1gyf05I%2BF82bO1Fg96zK0ZvILb0Kb1bXgInkwLYos6kDjS3H7muv6Dmj7jMvdaHC2rf%2FHDQC7sFyHzIkFIQvx%2BJp0UDb7fu%2FOzNn4LvqveSfEk7ywMVKI7o2FaSap9e7LR9XB8M7gxuBkpl3&X-Amz-Signature=470bf838dbfe9a679baad787895e204c6a506343d595e3e9866c243b8bbbd6d4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDTGQELF%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDryY7vtMn1kTcDwgnuvt7dRjNbqA1tSi9PUjzD7R5HQAiEAgS%2FCeGndLeJyui2JZRtf0NZgVJNWU%2BbSYqciwzvVG%2BEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDMqPR0p6aAKTIJlOeCrcA9BMpWFR2%2B29ZnaoG2%2BvNVUa4O3kVf1je4tG5nwMbjCnu%2FbFDOQ%2B5awHdFiGTWx8k8i1o%2Bg4oKA7yf9D1KRJcIyHUO5IPaUf%2FpJefe2Knq9HPFWqcSrfJ1ap4BiXgESTu0dtJMTF1jLl3IWN69gfTV3grEJcHqFuRfPjbG8%2BACG%2BLjEIrrl8OuOfUZGKAa6aT3w0zlvNKvH42%2BWKfnvFLvLKTZa1AFuvDexOqf0JyT5E6bpcrubgBIun4ayP8Akt%2B7NuSi6eWPsXmFIFjMtTdOXOEtyMGsF64Yh%2B9vj4VycisFlAzgeFhM9Qi12HvI4TbrVXRLMzihu8v%2BoIOIcGmBQR69F26wctgzQWnE6IIEvQJJKEylg5Ic%2FmbOw5FacalNDmjOuQf9DxGEZrWPl3s3WzVEE%2FcBOr29Ru%2B2m1VFUTBPDsMcT69raI0kt0Ts8UCWYJ0R0nfsBebDo7hBGWiFSjyBMMOBYbpmB948FVK8xshv3k4%2BYpx3WK16G1ViJo579qtuqbHB9KeL0G2GEA8HdkZMYqv8XMxmy7gnaebsyGtANPlepRL9j74wLVqzi1TIYry9irDGG0tF9BHEdKCPKUE%2F7BD5dSNLRDK%2FOm8k8QIwO9LeIryHkhUKxyMPjqur0GOqUBXxVe9Y1wVPXsVEpnvHUGVlxv%2FiGoBMnsZIXsAP5aJeGoiJPTALOQHOgvmdHtsCbLAvpzJxAHeLqu1gyf05I%2BF82bO1Fg96zK0ZvILb0Kb1bXgInkwLYos6kDjS3H7muv6Dmj7jMvdaHC2rf%2FHDQC7sFyHzIkFIQvx%2BJp0UDb7fu%2FOzNn4LvqveSfEk7ywMVKI7o2FaSap9e7LR9XB8M7gxuBkpl3&X-Amz-Signature=45d3ba70539ac19fd8535da6d65d1b3cbd39669334505fca358290e1a85409df&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDTGQELF%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDryY7vtMn1kTcDwgnuvt7dRjNbqA1tSi9PUjzD7R5HQAiEAgS%2FCeGndLeJyui2JZRtf0NZgVJNWU%2BbSYqciwzvVG%2BEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDMqPR0p6aAKTIJlOeCrcA9BMpWFR2%2B29ZnaoG2%2BvNVUa4O3kVf1je4tG5nwMbjCnu%2FbFDOQ%2B5awHdFiGTWx8k8i1o%2Bg4oKA7yf9D1KRJcIyHUO5IPaUf%2FpJefe2Knq9HPFWqcSrfJ1ap4BiXgESTu0dtJMTF1jLl3IWN69gfTV3grEJcHqFuRfPjbG8%2BACG%2BLjEIrrl8OuOfUZGKAa6aT3w0zlvNKvH42%2BWKfnvFLvLKTZa1AFuvDexOqf0JyT5E6bpcrubgBIun4ayP8Akt%2B7NuSi6eWPsXmFIFjMtTdOXOEtyMGsF64Yh%2B9vj4VycisFlAzgeFhM9Qi12HvI4TbrVXRLMzihu8v%2BoIOIcGmBQR69F26wctgzQWnE6IIEvQJJKEylg5Ic%2FmbOw5FacalNDmjOuQf9DxGEZrWPl3s3WzVEE%2FcBOr29Ru%2B2m1VFUTBPDsMcT69raI0kt0Ts8UCWYJ0R0nfsBebDo7hBGWiFSjyBMMOBYbpmB948FVK8xshv3k4%2BYpx3WK16G1ViJo579qtuqbHB9KeL0G2GEA8HdkZMYqv8XMxmy7gnaebsyGtANPlepRL9j74wLVqzi1TIYry9irDGG0tF9BHEdKCPKUE%2F7BD5dSNLRDK%2FOm8k8QIwO9LeIryHkhUKxyMPjqur0GOqUBXxVe9Y1wVPXsVEpnvHUGVlxv%2FiGoBMnsZIXsAP5aJeGoiJPTALOQHOgvmdHtsCbLAvpzJxAHeLqu1gyf05I%2BF82bO1Fg96zK0ZvILb0Kb1bXgInkwLYos6kDjS3H7muv6Dmj7jMvdaHC2rf%2FHDQC7sFyHzIkFIQvx%2BJp0UDb7fu%2FOzNn4LvqveSfEk7ywMVKI7o2FaSap9e7LR9XB8M7gxuBkpl3&X-Amz-Signature=55003f4d5e46510e58bc2d441c3de342c7a5d9c5b24b033fd8b544b10daec746&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
