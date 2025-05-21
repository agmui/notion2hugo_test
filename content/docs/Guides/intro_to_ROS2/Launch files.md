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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4PJ2CG6%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T022807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdudV6dD0DPmBbMuUJQ4KLdIZQ6WRo%2FxA%2F8lH5cC9cBwIhALy0UahvlQJ1%2F%2Fbp5C8uJomqYLcJbvbXScdJTK4zRZ7EKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwk04WsIOxMysgnbRwq3APjifKowMJ3vlWL456%2BdshxdUtRSnkY%2BZe7c0GhbpeqcsLeDK99n%2FXLN6n9gX8ektMPbpwR6%2F4dMRfznXV1MmlsN3Fzd%2FgqeJ6gffJuiMbtMaLcgqxu0o6if%2FlTl2zIMxFQ004WxlaLeHzP1v5mVL7V7YxUXdb6V89IIm3D69r7a3pp8kiJaRTEMVxmgg2%2FPg4O6m%2FrI9U7tp6Mo%2BgTudi7BInvgUmDlUEENFD%2BjUk3XDkkck4REGwfZzkGVbvx%2BFhh5QeGBGhE1PAGi%2FNsm%2BiE%2FpM0NnyYM1pseeKM5TaiUvpPfZAVGifFrFoiF67dfD6%2FnkHOp6QGyX2Wc1SO3RXWuI%2Bz9FnIA7XhJKu4SUO2UDsg9FX1Uzdh%2FnpYkVQnOjFpJGjFzQWGkbou0DnrwJOWMlrXPoHC5kXJdkEsZdpQMoQZFwYKf%2B4gd6uLfJX4yVqV5WhC4thaLilWZGDe0tlYcE1edPEvav%2BkeF%2FKedeRGm1rfQJJ0L%2Fndbk5bFWf0jgukCUGTzNZXhd6p72jJxUkUpCg8onOka8Qar7RWQzhOS5aPZMpZPHfJrmizlFtqSOrzj8n5BOqQTbRP9Abys5UnHGU73SwriyGy%2BSl2crx5NROfumlXptJCSg1jzCAubTBBjqkAdVDy4k7qIdS642SxjbpZF26R3JgEb8tdB7%2FFXyvoIN8fEkV%2F8ifdDVfI%2Fr9rBwFn8OTh%2B8inDZak97PsEdGy2nlzqlLpQ9W7oAhvzVmTG4Pg98zUWg70ghpeYLIN6onODtkBqXnVaBtUQpFgbMtVkYpVxDymgj31P16j73Ddbp3ZeeeTu4paxNEL2QeVxR11x%2Fs3RcAf3f71PEwExNS2gpXmzUb&X-Amz-Signature=a04fc6db9ea5fe8074a10616b9ebc55b5f2c56b7f6fe046997d939ca93287216&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4PJ2CG6%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T022807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdudV6dD0DPmBbMuUJQ4KLdIZQ6WRo%2FxA%2F8lH5cC9cBwIhALy0UahvlQJ1%2F%2Fbp5C8uJomqYLcJbvbXScdJTK4zRZ7EKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwk04WsIOxMysgnbRwq3APjifKowMJ3vlWL456%2BdshxdUtRSnkY%2BZe7c0GhbpeqcsLeDK99n%2FXLN6n9gX8ektMPbpwR6%2F4dMRfznXV1MmlsN3Fzd%2FgqeJ6gffJuiMbtMaLcgqxu0o6if%2FlTl2zIMxFQ004WxlaLeHzP1v5mVL7V7YxUXdb6V89IIm3D69r7a3pp8kiJaRTEMVxmgg2%2FPg4O6m%2FrI9U7tp6Mo%2BgTudi7BInvgUmDlUEENFD%2BjUk3XDkkck4REGwfZzkGVbvx%2BFhh5QeGBGhE1PAGi%2FNsm%2BiE%2FpM0NnyYM1pseeKM5TaiUvpPfZAVGifFrFoiF67dfD6%2FnkHOp6QGyX2Wc1SO3RXWuI%2Bz9FnIA7XhJKu4SUO2UDsg9FX1Uzdh%2FnpYkVQnOjFpJGjFzQWGkbou0DnrwJOWMlrXPoHC5kXJdkEsZdpQMoQZFwYKf%2B4gd6uLfJX4yVqV5WhC4thaLilWZGDe0tlYcE1edPEvav%2BkeF%2FKedeRGm1rfQJJ0L%2Fndbk5bFWf0jgukCUGTzNZXhd6p72jJxUkUpCg8onOka8Qar7RWQzhOS5aPZMpZPHfJrmizlFtqSOrzj8n5BOqQTbRP9Abys5UnHGU73SwriyGy%2BSl2crx5NROfumlXptJCSg1jzCAubTBBjqkAdVDy4k7qIdS642SxjbpZF26R3JgEb8tdB7%2FFXyvoIN8fEkV%2F8ifdDVfI%2Fr9rBwFn8OTh%2B8inDZak97PsEdGy2nlzqlLpQ9W7oAhvzVmTG4Pg98zUWg70ghpeYLIN6onODtkBqXnVaBtUQpFgbMtVkYpVxDymgj31P16j73Ddbp3ZeeeTu4paxNEL2QeVxR11x%2Fs3RcAf3f71PEwExNS2gpXmzUb&X-Amz-Signature=b002f23749098645b1359c89d25de5118c634ebfd6ded37cf3b31afe2e5986ea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4PJ2CG6%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T022807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdudV6dD0DPmBbMuUJQ4KLdIZQ6WRo%2FxA%2F8lH5cC9cBwIhALy0UahvlQJ1%2F%2Fbp5C8uJomqYLcJbvbXScdJTK4zRZ7EKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwk04WsIOxMysgnbRwq3APjifKowMJ3vlWL456%2BdshxdUtRSnkY%2BZe7c0GhbpeqcsLeDK99n%2FXLN6n9gX8ektMPbpwR6%2F4dMRfznXV1MmlsN3Fzd%2FgqeJ6gffJuiMbtMaLcgqxu0o6if%2FlTl2zIMxFQ004WxlaLeHzP1v5mVL7V7YxUXdb6V89IIm3D69r7a3pp8kiJaRTEMVxmgg2%2FPg4O6m%2FrI9U7tp6Mo%2BgTudi7BInvgUmDlUEENFD%2BjUk3XDkkck4REGwfZzkGVbvx%2BFhh5QeGBGhE1PAGi%2FNsm%2BiE%2FpM0NnyYM1pseeKM5TaiUvpPfZAVGifFrFoiF67dfD6%2FnkHOp6QGyX2Wc1SO3RXWuI%2Bz9FnIA7XhJKu4SUO2UDsg9FX1Uzdh%2FnpYkVQnOjFpJGjFzQWGkbou0DnrwJOWMlrXPoHC5kXJdkEsZdpQMoQZFwYKf%2B4gd6uLfJX4yVqV5WhC4thaLilWZGDe0tlYcE1edPEvav%2BkeF%2FKedeRGm1rfQJJ0L%2Fndbk5bFWf0jgukCUGTzNZXhd6p72jJxUkUpCg8onOka8Qar7RWQzhOS5aPZMpZPHfJrmizlFtqSOrzj8n5BOqQTbRP9Abys5UnHGU73SwriyGy%2BSl2crx5NROfumlXptJCSg1jzCAubTBBjqkAdVDy4k7qIdS642SxjbpZF26R3JgEb8tdB7%2FFXyvoIN8fEkV%2F8ifdDVfI%2Fr9rBwFn8OTh%2B8inDZak97PsEdGy2nlzqlLpQ9W7oAhvzVmTG4Pg98zUWg70ghpeYLIN6onODtkBqXnVaBtUQpFgbMtVkYpVxDymgj31P16j73Ddbp3ZeeeTu4paxNEL2QeVxR11x%2Fs3RcAf3f71PEwExNS2gpXmzUb&X-Amz-Signature=e6a1bdb55287178c2f98a08673804e41b18ae93ecbf17dac163d17e3d950d62e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
