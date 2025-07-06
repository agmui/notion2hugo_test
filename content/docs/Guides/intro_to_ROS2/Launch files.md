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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKKC26VV%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T042340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIAvxU7vkmbkceRreQjjBvW%2BOwWzIx40btrQ2WsvXA%2FpqAiBzfn85nCyRAl%2B92jSv1M7PaNa%2F%2FgMSIzi53EWzozcLCyr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIM5lCllD7OrAfs3nAYKtwDLtUZ9kCnsuDuclnW3KZCuDsamnZtknQtxh873SyQyWB%2FAitLrI%2F0waa2Xu1rZsMWmgbvisNwKJnhxlBizoRGqRsiODrVM4lmniNKbKHz5oeVq5TMvTfz%2BF0mjHhUPTrh9JbRkNA%2B%2FsMA13mK%2FmhkWxCfWnHLPqgArj%2BlJgqNaXasIQKGH6YCyf9Pd0FJyI9%2BvQWPomZ2V4pHbaqk1qG%2BfILP0lOZxDWGOieGaoHag2VZXzfiu5WyjTHt0IjsqwYCzeqZdoxril1DY4yfTeYcdpXkraiAt1IgNGC%2Bn5xGDQowiuQKyO9TuB2seGO6NcmcZJYZj%2Fo%2F3W0U8XBcTJvMBV1e00fFaH6zUWlgbQgXYIo4HlD6TFSip0Q7JyM11JmmysTukQq89ODKnephh1xc6ra09ibboF7NlV6kjPgJT4Nzy%2FUxZz1Hsg7JDkGEj97HP1acdW%2FPY0qwlINC49znLzc3PvfIwFVvNdrARKhvGxqJsJf6wEDIpqYtTbp6dqFFnxHKTqYpIWSO2fNZh9J%2B4Ve%2FEp74m7e07c8ZWf7B5l97yeNqok%2BehF7xNYI0f8qjfequT%2BPyqJklXEQfC5ndSquyOTVx0R2bZvEfxU%2BfDRDON%2BBTZO1WcXbn3xUwt4inwwY6pgF4owFF%2BrzxxxH22WvsK%2Bpu1VU8pCkmHBcQknpX2LU%2BCRb%2Ft%2FZaXnMtRSK%2Bit9zppi%2Bw0kzOb%2BlhFsh4V08u%2FMN6B3TBGAerTevhqe8ZmmWIGLFJvvoTQYdC1ATdRtCzLp9sVvyGRA%2BR9sHrPXefUO4PmQ%2FOuYgFFT7hH8vAoANUVRfJyu2HSljs7FeB7Y%2B6ZrEr5uFxRbkomCyqu3akVI1oqgaeHcE&X-Amz-Signature=f39a671da087fd30222fdbdd93b9a55ddfd43079c3e8731b90e5982f9c53a7c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKKC26VV%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T042340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIAvxU7vkmbkceRreQjjBvW%2BOwWzIx40btrQ2WsvXA%2FpqAiBzfn85nCyRAl%2B92jSv1M7PaNa%2F%2FgMSIzi53EWzozcLCyr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIM5lCllD7OrAfs3nAYKtwDLtUZ9kCnsuDuclnW3KZCuDsamnZtknQtxh873SyQyWB%2FAitLrI%2F0waa2Xu1rZsMWmgbvisNwKJnhxlBizoRGqRsiODrVM4lmniNKbKHz5oeVq5TMvTfz%2BF0mjHhUPTrh9JbRkNA%2B%2FsMA13mK%2FmhkWxCfWnHLPqgArj%2BlJgqNaXasIQKGH6YCyf9Pd0FJyI9%2BvQWPomZ2V4pHbaqk1qG%2BfILP0lOZxDWGOieGaoHag2VZXzfiu5WyjTHt0IjsqwYCzeqZdoxril1DY4yfTeYcdpXkraiAt1IgNGC%2Bn5xGDQowiuQKyO9TuB2seGO6NcmcZJYZj%2Fo%2F3W0U8XBcTJvMBV1e00fFaH6zUWlgbQgXYIo4HlD6TFSip0Q7JyM11JmmysTukQq89ODKnephh1xc6ra09ibboF7NlV6kjPgJT4Nzy%2FUxZz1Hsg7JDkGEj97HP1acdW%2FPY0qwlINC49znLzc3PvfIwFVvNdrARKhvGxqJsJf6wEDIpqYtTbp6dqFFnxHKTqYpIWSO2fNZh9J%2B4Ve%2FEp74m7e07c8ZWf7B5l97yeNqok%2BehF7xNYI0f8qjfequT%2BPyqJklXEQfC5ndSquyOTVx0R2bZvEfxU%2BfDRDON%2BBTZO1WcXbn3xUwt4inwwY6pgF4owFF%2BrzxxxH22WvsK%2Bpu1VU8pCkmHBcQknpX2LU%2BCRb%2Ft%2FZaXnMtRSK%2Bit9zppi%2Bw0kzOb%2BlhFsh4V08u%2FMN6B3TBGAerTevhqe8ZmmWIGLFJvvoTQYdC1ATdRtCzLp9sVvyGRA%2BR9sHrPXefUO4PmQ%2FOuYgFFT7hH8vAoANUVRfJyu2HSljs7FeB7Y%2B6ZrEr5uFxRbkomCyqu3akVI1oqgaeHcE&X-Amz-Signature=ef55f01127953d1ea5ab3db2b07ac2ac8b5230c2c5bbfe2d2060b2b3ef879a9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKKC26VV%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T042340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIAvxU7vkmbkceRreQjjBvW%2BOwWzIx40btrQ2WsvXA%2FpqAiBzfn85nCyRAl%2B92jSv1M7PaNa%2F%2FgMSIzi53EWzozcLCyr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIM5lCllD7OrAfs3nAYKtwDLtUZ9kCnsuDuclnW3KZCuDsamnZtknQtxh873SyQyWB%2FAitLrI%2F0waa2Xu1rZsMWmgbvisNwKJnhxlBizoRGqRsiODrVM4lmniNKbKHz5oeVq5TMvTfz%2BF0mjHhUPTrh9JbRkNA%2B%2FsMA13mK%2FmhkWxCfWnHLPqgArj%2BlJgqNaXasIQKGH6YCyf9Pd0FJyI9%2BvQWPomZ2V4pHbaqk1qG%2BfILP0lOZxDWGOieGaoHag2VZXzfiu5WyjTHt0IjsqwYCzeqZdoxril1DY4yfTeYcdpXkraiAt1IgNGC%2Bn5xGDQowiuQKyO9TuB2seGO6NcmcZJYZj%2Fo%2F3W0U8XBcTJvMBV1e00fFaH6zUWlgbQgXYIo4HlD6TFSip0Q7JyM11JmmysTukQq89ODKnephh1xc6ra09ibboF7NlV6kjPgJT4Nzy%2FUxZz1Hsg7JDkGEj97HP1acdW%2FPY0qwlINC49znLzc3PvfIwFVvNdrARKhvGxqJsJf6wEDIpqYtTbp6dqFFnxHKTqYpIWSO2fNZh9J%2B4Ve%2FEp74m7e07c8ZWf7B5l97yeNqok%2BehF7xNYI0f8qjfequT%2BPyqJklXEQfC5ndSquyOTVx0R2bZvEfxU%2BfDRDON%2BBTZO1WcXbn3xUwt4inwwY6pgF4owFF%2BrzxxxH22WvsK%2Bpu1VU8pCkmHBcQknpX2LU%2BCRb%2Ft%2FZaXnMtRSK%2Bit9zppi%2Bw0kzOb%2BlhFsh4V08u%2FMN6B3TBGAerTevhqe8ZmmWIGLFJvvoTQYdC1ATdRtCzLp9sVvyGRA%2BR9sHrPXefUO4PmQ%2FOuYgFFT7hH8vAoANUVRfJyu2HSljs7FeB7Y%2B6ZrEr5uFxRbkomCyqu3akVI1oqgaeHcE&X-Amz-Signature=f0b34b5d775f76f49ce642f7f555445ebaca608e2ed45038079f3acc3e7a47a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
