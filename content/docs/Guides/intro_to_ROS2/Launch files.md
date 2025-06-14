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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6GOCLBN%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T140722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIG2sQ4hgG%2B7pYz8Hpl9lTEnCggW0xFVYG367b6iCASwHAiB6uQCJn5022GSyzddyQblbg9ajpIUrMknym%2F0Dk41rCyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMz0XT1kosL2YBsunSKtwDeA7kdBlK0zIxz1446y5oIKRBv%2FSQxg3%2Fx87AOirebVf6%2F0NdnKzJfMZYJbLNoTVWktI1pW2LjlUgYUD%2BqYHYP6djD80esgzWSaitIUz2tw2XwrZTZv7EOJ%2BuhZS3I1uYI7oJefqXA6OC%2BotxFXrfrvQ6CK%2FTB5t02bEYjLKDF%2BjhE9NAs440jMEbWmx%2F2CJCtk31yl2ykoH17I%2FCivsVZ2e2VV%2FOT13uKxi7wCOgkRWqiBgCPWGWVHViNxw9ZJKdcHCoGT59cZW6H14QHYqyEKRQbXvV2W9ujOKdJOSMzXjcy64fuAcOskWGQ7QAeKYlVKAdlNtku2JUzX1Xm8HtgLzuJmSH6ajuTicpghs6Rcy1j1n44v61Lf1GwADfx2w8z343becH%2BCP24LHd9cv1CNxw2w4d%2F7ftIr2sQqL8javKDYWrVeU5wnX%2FPTJenwLD92VGgQN%2BVMoSLHCinYPoO8OYBX%2FQAMB3XDPyPahH5%2BS%2FPfatSyElVDtj2REqv%2BCWAiD2ahKK2elAguwMwO%2Fiyz1DldvSrOGb0c0w2zTLytobXrWAR9Wk25O67hxBaz7YbV84geww%2FZJ8Etqk8rvmrxYMUaLSkL9MzN8G2x%2FV%2FfpFyoqKiWybzFXjWnYw%2BMG1wgY6pgFtVItvff7HvkuujEBfl3faG8s1TFVe10SMZSN4p5dxTrMl9sEm1lwPo%2BwsupQNmP12xpIkbOtcqHq6kSJBvIEKBedPOXaJhr2styPy0wtwqDnoIbTH5zeishZlD3zKOl%2FlueiQ4N39nDKlvoYNpOSLavH4SMaYVt34iewn%2BfMhTU6PMImzsBM3O32l4qh9RoxJA45WZqLZyBYwKlBQ8LyO%2BKE2p4h%2F&X-Amz-Signature=d8c1222ccf434384547de5a02213e9d0fd2d4553bcbe984303ca3e8d7a32054b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6GOCLBN%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T140722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIG2sQ4hgG%2B7pYz8Hpl9lTEnCggW0xFVYG367b6iCASwHAiB6uQCJn5022GSyzddyQblbg9ajpIUrMknym%2F0Dk41rCyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMz0XT1kosL2YBsunSKtwDeA7kdBlK0zIxz1446y5oIKRBv%2FSQxg3%2Fx87AOirebVf6%2F0NdnKzJfMZYJbLNoTVWktI1pW2LjlUgYUD%2BqYHYP6djD80esgzWSaitIUz2tw2XwrZTZv7EOJ%2BuhZS3I1uYI7oJefqXA6OC%2BotxFXrfrvQ6CK%2FTB5t02bEYjLKDF%2BjhE9NAs440jMEbWmx%2F2CJCtk31yl2ykoH17I%2FCivsVZ2e2VV%2FOT13uKxi7wCOgkRWqiBgCPWGWVHViNxw9ZJKdcHCoGT59cZW6H14QHYqyEKRQbXvV2W9ujOKdJOSMzXjcy64fuAcOskWGQ7QAeKYlVKAdlNtku2JUzX1Xm8HtgLzuJmSH6ajuTicpghs6Rcy1j1n44v61Lf1GwADfx2w8z343becH%2BCP24LHd9cv1CNxw2w4d%2F7ftIr2sQqL8javKDYWrVeU5wnX%2FPTJenwLD92VGgQN%2BVMoSLHCinYPoO8OYBX%2FQAMB3XDPyPahH5%2BS%2FPfatSyElVDtj2REqv%2BCWAiD2ahKK2elAguwMwO%2Fiyz1DldvSrOGb0c0w2zTLytobXrWAR9Wk25O67hxBaz7YbV84geww%2FZJ8Etqk8rvmrxYMUaLSkL9MzN8G2x%2FV%2FfpFyoqKiWybzFXjWnYw%2BMG1wgY6pgFtVItvff7HvkuujEBfl3faG8s1TFVe10SMZSN4p5dxTrMl9sEm1lwPo%2BwsupQNmP12xpIkbOtcqHq6kSJBvIEKBedPOXaJhr2styPy0wtwqDnoIbTH5zeishZlD3zKOl%2FlueiQ4N39nDKlvoYNpOSLavH4SMaYVt34iewn%2BfMhTU6PMImzsBM3O32l4qh9RoxJA45WZqLZyBYwKlBQ8LyO%2BKE2p4h%2F&X-Amz-Signature=c4699c9aad2ee53183807518b577a495bf704ca0d724aaec21289a5361ab43f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6GOCLBN%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T140722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIG2sQ4hgG%2B7pYz8Hpl9lTEnCggW0xFVYG367b6iCASwHAiB6uQCJn5022GSyzddyQblbg9ajpIUrMknym%2F0Dk41rCyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMz0XT1kosL2YBsunSKtwDeA7kdBlK0zIxz1446y5oIKRBv%2FSQxg3%2Fx87AOirebVf6%2F0NdnKzJfMZYJbLNoTVWktI1pW2LjlUgYUD%2BqYHYP6djD80esgzWSaitIUz2tw2XwrZTZv7EOJ%2BuhZS3I1uYI7oJefqXA6OC%2BotxFXrfrvQ6CK%2FTB5t02bEYjLKDF%2BjhE9NAs440jMEbWmx%2F2CJCtk31yl2ykoH17I%2FCivsVZ2e2VV%2FOT13uKxi7wCOgkRWqiBgCPWGWVHViNxw9ZJKdcHCoGT59cZW6H14QHYqyEKRQbXvV2W9ujOKdJOSMzXjcy64fuAcOskWGQ7QAeKYlVKAdlNtku2JUzX1Xm8HtgLzuJmSH6ajuTicpghs6Rcy1j1n44v61Lf1GwADfx2w8z343becH%2BCP24LHd9cv1CNxw2w4d%2F7ftIr2sQqL8javKDYWrVeU5wnX%2FPTJenwLD92VGgQN%2BVMoSLHCinYPoO8OYBX%2FQAMB3XDPyPahH5%2BS%2FPfatSyElVDtj2REqv%2BCWAiD2ahKK2elAguwMwO%2Fiyz1DldvSrOGb0c0w2zTLytobXrWAR9Wk25O67hxBaz7YbV84geww%2FZJ8Etqk8rvmrxYMUaLSkL9MzN8G2x%2FV%2FfpFyoqKiWybzFXjWnYw%2BMG1wgY6pgFtVItvff7HvkuujEBfl3faG8s1TFVe10SMZSN4p5dxTrMl9sEm1lwPo%2BwsupQNmP12xpIkbOtcqHq6kSJBvIEKBedPOXaJhr2styPy0wtwqDnoIbTH5zeishZlD3zKOl%2FlueiQ4N39nDKlvoYNpOSLavH4SMaYVt34iewn%2BfMhTU6PMImzsBM3O32l4qh9RoxJA45WZqLZyBYwKlBQ8LyO%2BKE2p4h%2F&X-Amz-Signature=ef0a2c9b73b2bb2cf4cdf197b05499ae14f9594a767dcab3bd6248dcbceca1a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
