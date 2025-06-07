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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626RGWLFY%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T181047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFRL7KfX1%2F3PGnrHY3An%2BVhwG5z2QnXi1BhxBzxkTfqAiBlO0UsC8KLGboXsm3%2FyZPwGGrGIBOgt%2BrsHaF68NOXOSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMBETHOFwg8j%2FlzLkaKtwDSPk%2BPJjo3G13U7SEf4SefAg72LiB%2B8hs%2Bmv8EX4umknKYvcYYFFo%2FYU%2B0eeOt3hk0L9NxRhyihI9PVMu9MOAnQDyg%2FZxLWRpIpd%2BTBlYU3OsYDYeMfYY4UMbiR4qGfPwSOulEgN3U8ynQVbfj2%2F2iTYVSJ42qXMM2Ytxa%2BA8fEWtbAIHqi2LN5Petiic033oTv7P82Y1hgTzg2TARTdjlv9wYJ9WOw%2F6vhh5jeddyvenhoBc3f1fO3brIHe1BNxRQLueksThHSX8huuCcl2ZUkJyXE4ueaxZ8aA0ohzT41vgVyx3E%2B1vyU1qT9%2BzLI9w9aKY9Uq078TuTgHs70ud3rnaVSPyAD58Skh2U%2BWxcWfaHbh27mKYlAWAJgf4gebT834P9r18uOz1qYIFBkHFAspEDV8KgwGBQc8nHVloy1yNK6SFuqnFkq7%2B2NV50E2D4X2oQfvb%2FXVveRS5GI5WNcYlAseUu2UoPOykjpYLb%2BNexdvHiYNJMWoH%2Fgf8oMWEhDs6IA8rVk5Xf1%2FJpFmNBEMQRG9WnTugobeLy9SV4ZaWeavxYr5oxe%2FDsdmW06dXVsFd%2B8GWcBEbTKi0nQVRzPadvYA931rHkk8LE9PxjzRYBul%2F3kJ%2B27q4Jn8wyoGRwgY6pgH4bCH2TNonAhT8IPc5ALRpVsQWKRw9bcqqfwUslVB2u%2BhYu9%2BcCgwCG26b8pbuKhoJj9jsOWhQgm%2Fo29rAn0drxrisg3ilg%2F5uHFOsrGj5Ez1qYcEut128v3yRuhjYy%2B50EXwMXG1hHQsDsgLA%2B5KHJkLjy2mTvn5dJ5fJ8T1xIAodSpYaimhIt0mN1fnPbIh9gIjB81bF469E9iIUI3jzRloouXyr&X-Amz-Signature=08b1d725025b2f7af20d79c2be4466e95c9802528588ef75fc6fc97a2e942e72&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626RGWLFY%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T181046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFRL7KfX1%2F3PGnrHY3An%2BVhwG5z2QnXi1BhxBzxkTfqAiBlO0UsC8KLGboXsm3%2FyZPwGGrGIBOgt%2BrsHaF68NOXOSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMBETHOFwg8j%2FlzLkaKtwDSPk%2BPJjo3G13U7SEf4SefAg72LiB%2B8hs%2Bmv8EX4umknKYvcYYFFo%2FYU%2B0eeOt3hk0L9NxRhyihI9PVMu9MOAnQDyg%2FZxLWRpIpd%2BTBlYU3OsYDYeMfYY4UMbiR4qGfPwSOulEgN3U8ynQVbfj2%2F2iTYVSJ42qXMM2Ytxa%2BA8fEWtbAIHqi2LN5Petiic033oTv7P82Y1hgTzg2TARTdjlv9wYJ9WOw%2F6vhh5jeddyvenhoBc3f1fO3brIHe1BNxRQLueksThHSX8huuCcl2ZUkJyXE4ueaxZ8aA0ohzT41vgVyx3E%2B1vyU1qT9%2BzLI9w9aKY9Uq078TuTgHs70ud3rnaVSPyAD58Skh2U%2BWxcWfaHbh27mKYlAWAJgf4gebT834P9r18uOz1qYIFBkHFAspEDV8KgwGBQc8nHVloy1yNK6SFuqnFkq7%2B2NV50E2D4X2oQfvb%2FXVveRS5GI5WNcYlAseUu2UoPOykjpYLb%2BNexdvHiYNJMWoH%2Fgf8oMWEhDs6IA8rVk5Xf1%2FJpFmNBEMQRG9WnTugobeLy9SV4ZaWeavxYr5oxe%2FDsdmW06dXVsFd%2B8GWcBEbTKi0nQVRzPadvYA931rHkk8LE9PxjzRYBul%2F3kJ%2B27q4Jn8wyoGRwgY6pgH4bCH2TNonAhT8IPc5ALRpVsQWKRw9bcqqfwUslVB2u%2BhYu9%2BcCgwCG26b8pbuKhoJj9jsOWhQgm%2Fo29rAn0drxrisg3ilg%2F5uHFOsrGj5Ez1qYcEut128v3yRuhjYy%2B50EXwMXG1hHQsDsgLA%2B5KHJkLjy2mTvn5dJ5fJ8T1xIAodSpYaimhIt0mN1fnPbIh9gIjB81bF469E9iIUI3jzRloouXyr&X-Amz-Signature=f9ab3cc773ce27dc1e31cbd59df60be917e355d18c30e14f04dd3a510fbe883c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626RGWLFY%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T181046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFRL7KfX1%2F3PGnrHY3An%2BVhwG5z2QnXi1BhxBzxkTfqAiBlO0UsC8KLGboXsm3%2FyZPwGGrGIBOgt%2BrsHaF68NOXOSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMBETHOFwg8j%2FlzLkaKtwDSPk%2BPJjo3G13U7SEf4SefAg72LiB%2B8hs%2Bmv8EX4umknKYvcYYFFo%2FYU%2B0eeOt3hk0L9NxRhyihI9PVMu9MOAnQDyg%2FZxLWRpIpd%2BTBlYU3OsYDYeMfYY4UMbiR4qGfPwSOulEgN3U8ynQVbfj2%2F2iTYVSJ42qXMM2Ytxa%2BA8fEWtbAIHqi2LN5Petiic033oTv7P82Y1hgTzg2TARTdjlv9wYJ9WOw%2F6vhh5jeddyvenhoBc3f1fO3brIHe1BNxRQLueksThHSX8huuCcl2ZUkJyXE4ueaxZ8aA0ohzT41vgVyx3E%2B1vyU1qT9%2BzLI9w9aKY9Uq078TuTgHs70ud3rnaVSPyAD58Skh2U%2BWxcWfaHbh27mKYlAWAJgf4gebT834P9r18uOz1qYIFBkHFAspEDV8KgwGBQc8nHVloy1yNK6SFuqnFkq7%2B2NV50E2D4X2oQfvb%2FXVveRS5GI5WNcYlAseUu2UoPOykjpYLb%2BNexdvHiYNJMWoH%2Fgf8oMWEhDs6IA8rVk5Xf1%2FJpFmNBEMQRG9WnTugobeLy9SV4ZaWeavxYr5oxe%2FDsdmW06dXVsFd%2B8GWcBEbTKi0nQVRzPadvYA931rHkk8LE9PxjzRYBul%2F3kJ%2B27q4Jn8wyoGRwgY6pgH4bCH2TNonAhT8IPc5ALRpVsQWKRw9bcqqfwUslVB2u%2BhYu9%2BcCgwCG26b8pbuKhoJj9jsOWhQgm%2Fo29rAn0drxrisg3ilg%2F5uHFOsrGj5Ez1qYcEut128v3yRuhjYy%2B50EXwMXG1hHQsDsgLA%2B5KHJkLjy2mTvn5dJ5fJ8T1xIAodSpYaimhIt0mN1fnPbIh9gIjB81bF469E9iIUI3jzRloouXyr&X-Amz-Signature=e3a55893f7f358f53fda5db132ec3b9c7c296043b9ac6cf27025ef76fc96090c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
