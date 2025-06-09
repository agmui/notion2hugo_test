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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7SPJWZY%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T110819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKAhs5%2Blm5i4536C4wvT0VHuzz1N%2F%2F5osvHF0WzLhnLAIgPaIzDXlgMx%2FzePO%2BYCuS0Fwj%2F%2BcTF07X2911tu5%2FoVYqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFayT6KmJCG7OW%2BS9CrcA9pYBp%2F5dWiPvXIlRTFSnLIa5nXyr8v3FJL4vgFwnH8XQEfzTv6jDd%2FJf%2Byhdzcfx7n3zlutaD3kQBc%2Bum8TAP4QP1Z88LnDn6z%2FVmzeqwAjWbUfI2mRKguXm16UkW6LAjZjQtl6SvWQo2SjV3Vzod%2F%2BHy3AF3V%2FnXx%2F2qYfk9a4fWMz2JPrjMsYJGE37FsbKQ%2B0nhcHSaC1LgXUGsNIv1QLuk5TdKP0moPaZOqMHh2cvZIVA5n7Mi6pjZiozSxKtbR%2FICjlAiHfFD9OUkJbLJy0Gj%2F2hnWJSC0G5ykxEPGQtMJpuszjKJWkjDS2wPN0SrrilHoS9FksKcfTjOdXwE3y4oDgvZjDPMsUc3XjLV8O6A9mYs5nPHlqLUH6iRP1EDh9pwfj60h1ypWI3QCCcM4Avn4kDYKxlofXMhCaUi%2BW0ZfFBw6kuzVbN5lV7%2F7XxhDwpk4jze9yXBpm9k9efyuLibBFxjKfusW3cLY7yCfYyB62KJfPwAsdphNmh3sqmoqvP92KM1g8IgcimxPYBCC8rgmOvUwjopKiMG5rBXnGbPkNdPKQY1Ek52W4kWMP2C8dFzv3l6Tbzofufd%2BMZt7nY%2FF2AZxOAf%2FtPDOEQuwg7VEcnYKasAu6CdldMP7dmsIGOqUBubYnHDMxMccFdNN6XqYkzT9BDWP%2FthZ98AtPfNyrPXOFxzftyaet9gGXFqlbqFD4uR7XBBS4Bc5nP9sDmCeA%2F%2FgsCZwTxRlEJ%2Bru6kD0eDw8zMSQk8mPt9QlpZRvTF6b8Os%2BIWmN640Kn3p08ll9mTQKlZ8N4NYkPLu0jqNXSmBLVzetpa8XBZTxBRPLcvcQ6oV9o1cwHfK2ZsN9NrskxIWkntuG&X-Amz-Signature=772e32c9dd87a457aefd0a5e18256bf0fae6ce2de9004b2409ff01e8fd130242&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7SPJWZY%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T110819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKAhs5%2Blm5i4536C4wvT0VHuzz1N%2F%2F5osvHF0WzLhnLAIgPaIzDXlgMx%2FzePO%2BYCuS0Fwj%2F%2BcTF07X2911tu5%2FoVYqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFayT6KmJCG7OW%2BS9CrcA9pYBp%2F5dWiPvXIlRTFSnLIa5nXyr8v3FJL4vgFwnH8XQEfzTv6jDd%2FJf%2Byhdzcfx7n3zlutaD3kQBc%2Bum8TAP4QP1Z88LnDn6z%2FVmzeqwAjWbUfI2mRKguXm16UkW6LAjZjQtl6SvWQo2SjV3Vzod%2F%2BHy3AF3V%2FnXx%2F2qYfk9a4fWMz2JPrjMsYJGE37FsbKQ%2B0nhcHSaC1LgXUGsNIv1QLuk5TdKP0moPaZOqMHh2cvZIVA5n7Mi6pjZiozSxKtbR%2FICjlAiHfFD9OUkJbLJy0Gj%2F2hnWJSC0G5ykxEPGQtMJpuszjKJWkjDS2wPN0SrrilHoS9FksKcfTjOdXwE3y4oDgvZjDPMsUc3XjLV8O6A9mYs5nPHlqLUH6iRP1EDh9pwfj60h1ypWI3QCCcM4Avn4kDYKxlofXMhCaUi%2BW0ZfFBw6kuzVbN5lV7%2F7XxhDwpk4jze9yXBpm9k9efyuLibBFxjKfusW3cLY7yCfYyB62KJfPwAsdphNmh3sqmoqvP92KM1g8IgcimxPYBCC8rgmOvUwjopKiMG5rBXnGbPkNdPKQY1Ek52W4kWMP2C8dFzv3l6Tbzofufd%2BMZt7nY%2FF2AZxOAf%2FtPDOEQuwg7VEcnYKasAu6CdldMP7dmsIGOqUBubYnHDMxMccFdNN6XqYkzT9BDWP%2FthZ98AtPfNyrPXOFxzftyaet9gGXFqlbqFD4uR7XBBS4Bc5nP9sDmCeA%2F%2FgsCZwTxRlEJ%2Bru6kD0eDw8zMSQk8mPt9QlpZRvTF6b8Os%2BIWmN640Kn3p08ll9mTQKlZ8N4NYkPLu0jqNXSmBLVzetpa8XBZTxBRPLcvcQ6oV9o1cwHfK2ZsN9NrskxIWkntuG&X-Amz-Signature=6c304a388b708108c076960f6ebf38af2695b66cc41a2edba23db4b069198b93&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7SPJWZY%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T110819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKAhs5%2Blm5i4536C4wvT0VHuzz1N%2F%2F5osvHF0WzLhnLAIgPaIzDXlgMx%2FzePO%2BYCuS0Fwj%2F%2BcTF07X2911tu5%2FoVYqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFayT6KmJCG7OW%2BS9CrcA9pYBp%2F5dWiPvXIlRTFSnLIa5nXyr8v3FJL4vgFwnH8XQEfzTv6jDd%2FJf%2Byhdzcfx7n3zlutaD3kQBc%2Bum8TAP4QP1Z88LnDn6z%2FVmzeqwAjWbUfI2mRKguXm16UkW6LAjZjQtl6SvWQo2SjV3Vzod%2F%2BHy3AF3V%2FnXx%2F2qYfk9a4fWMz2JPrjMsYJGE37FsbKQ%2B0nhcHSaC1LgXUGsNIv1QLuk5TdKP0moPaZOqMHh2cvZIVA5n7Mi6pjZiozSxKtbR%2FICjlAiHfFD9OUkJbLJy0Gj%2F2hnWJSC0G5ykxEPGQtMJpuszjKJWkjDS2wPN0SrrilHoS9FksKcfTjOdXwE3y4oDgvZjDPMsUc3XjLV8O6A9mYs5nPHlqLUH6iRP1EDh9pwfj60h1ypWI3QCCcM4Avn4kDYKxlofXMhCaUi%2BW0ZfFBw6kuzVbN5lV7%2F7XxhDwpk4jze9yXBpm9k9efyuLibBFxjKfusW3cLY7yCfYyB62KJfPwAsdphNmh3sqmoqvP92KM1g8IgcimxPYBCC8rgmOvUwjopKiMG5rBXnGbPkNdPKQY1Ek52W4kWMP2C8dFzv3l6Tbzofufd%2BMZt7nY%2FF2AZxOAf%2FtPDOEQuwg7VEcnYKasAu6CdldMP7dmsIGOqUBubYnHDMxMccFdNN6XqYkzT9BDWP%2FthZ98AtPfNyrPXOFxzftyaet9gGXFqlbqFD4uR7XBBS4Bc5nP9sDmCeA%2F%2FgsCZwTxRlEJ%2Bru6kD0eDw8zMSQk8mPt9QlpZRvTF6b8Os%2BIWmN640Kn3p08ll9mTQKlZ8N4NYkPLu0jqNXSmBLVzetpa8XBZTxBRPLcvcQ6oV9o1cwHfK2ZsN9NrskxIWkntuG&X-Amz-Signature=a95df0214b5ac72bdbcc7e605097291970b924bc528b4609cf3af84b1b50d97f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
