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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KW4HVRA%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T061343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDBmSnttxgEtiRqjcVWEX1UWziiLJfxa75u6CTf1I73oAIgYFYf4TRixF4BcC115R%2BGS68PSSbneG3%2FbWKDcnYX%2BG4qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYSdSAguZHN5YcAIyrcA38%2BX4nScV5%2BLMI8Rsyw2A%2BM35lnWRKOjg%2BJkVhDHHWJwntaCSPGG8mRXbGj95sgAVkpd2G5CWPIeWYlwUTYdLvdBqkxeyA%2BB3rsFskWqxvxrJwGBpMkYFs7S3IHM5qX5MYuTvN%2BTN%2B3OxryqAFq3kqtiECvxYf%2BGIMUga3yeM%2FmlM1Al9FOMaf8QzDQ8YbE2AQdPDHyuXZlxRgw701D0KDJSxLsKwjXDRdWhHuQzUBc10gNDdNUkWNMcfvgHZDR9gvlTeC0Wnvp%2F6lq9BUIkytZWKab1ODzs7aF%2B0f12ANhUrogRaG1IW4Jh%2BL8KqaRSgfFwLc2VqgDzEzsNVsH4bjDdychKikZjJeGVhF90dzMM1%2Bl4HVPcLs0D0rhni28%2Fgao8GGfCb%2Fk%2BCu6p9rx6vRMKBYnPavKPC74Pyj7AymwxoUOArRIg7zuVpyT22TWnMAgotP6iiuL7wyr5dl%2Bj8AJhfDqGC6v34UFUa9D1N1%2BFJvksCO4VS2WhIMmmN8kdL648vzZSkF91zMH%2Bro8lhqBSI9ydHN2InY0jvCr5aTCMsJ%2FbH1APBbtvcK3YcPdtVL9cibB2XPwrZ2BP1Z1z860RuO4zKzc767ZrosLgCdCkDd6yyEt1pNN72ylMK3CqcIGOqUBfjHpNk%2F%2BwjyuUcmjbm5%2F8MyDLavnwDD6EO5jOFyd99FD6V%2F1qsX%2FWte%2BgQwosV%2FZiJ4e8CtbkkWboeBl2I4lI4sg6wNBiKpVp5hLFJb6ITNthxHzUGAVJpgkceqN7du9vXemQ1Yiv2tlPBvPYR8XiOqpizN3A0QfkrQeLgvHJ9r1KQ%2F7BnIBiQFXQfGalQf%2F9IPGZ0u9pdWOTJWYHB1DzMsJl2SR&X-Amz-Signature=60e949ed6d352171296afa896ecd9262fad62ed0d2f68d5b477d15b4f736c55f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KW4HVRA%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T061342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDBmSnttxgEtiRqjcVWEX1UWziiLJfxa75u6CTf1I73oAIgYFYf4TRixF4BcC115R%2BGS68PSSbneG3%2FbWKDcnYX%2BG4qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYSdSAguZHN5YcAIyrcA38%2BX4nScV5%2BLMI8Rsyw2A%2BM35lnWRKOjg%2BJkVhDHHWJwntaCSPGG8mRXbGj95sgAVkpd2G5CWPIeWYlwUTYdLvdBqkxeyA%2BB3rsFskWqxvxrJwGBpMkYFs7S3IHM5qX5MYuTvN%2BTN%2B3OxryqAFq3kqtiECvxYf%2BGIMUga3yeM%2FmlM1Al9FOMaf8QzDQ8YbE2AQdPDHyuXZlxRgw701D0KDJSxLsKwjXDRdWhHuQzUBc10gNDdNUkWNMcfvgHZDR9gvlTeC0Wnvp%2F6lq9BUIkytZWKab1ODzs7aF%2B0f12ANhUrogRaG1IW4Jh%2BL8KqaRSgfFwLc2VqgDzEzsNVsH4bjDdychKikZjJeGVhF90dzMM1%2Bl4HVPcLs0D0rhni28%2Fgao8GGfCb%2Fk%2BCu6p9rx6vRMKBYnPavKPC74Pyj7AymwxoUOArRIg7zuVpyT22TWnMAgotP6iiuL7wyr5dl%2Bj8AJhfDqGC6v34UFUa9D1N1%2BFJvksCO4VS2WhIMmmN8kdL648vzZSkF91zMH%2Bro8lhqBSI9ydHN2InY0jvCr5aTCMsJ%2FbH1APBbtvcK3YcPdtVL9cibB2XPwrZ2BP1Z1z860RuO4zKzc767ZrosLgCdCkDd6yyEt1pNN72ylMK3CqcIGOqUBfjHpNk%2F%2BwjyuUcmjbm5%2F8MyDLavnwDD6EO5jOFyd99FD6V%2F1qsX%2FWte%2BgQwosV%2FZiJ4e8CtbkkWboeBl2I4lI4sg6wNBiKpVp5hLFJb6ITNthxHzUGAVJpgkceqN7du9vXemQ1Yiv2tlPBvPYR8XiOqpizN3A0QfkrQeLgvHJ9r1KQ%2F7BnIBiQFXQfGalQf%2F9IPGZ0u9pdWOTJWYHB1DzMsJl2SR&X-Amz-Signature=1c4d654e38f0c3baa7873e077bb71d1bd287e45ace7a454e6d0b59aeee6ec471&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KW4HVRA%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T061342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDBmSnttxgEtiRqjcVWEX1UWziiLJfxa75u6CTf1I73oAIgYFYf4TRixF4BcC115R%2BGS68PSSbneG3%2FbWKDcnYX%2BG4qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYSdSAguZHN5YcAIyrcA38%2BX4nScV5%2BLMI8Rsyw2A%2BM35lnWRKOjg%2BJkVhDHHWJwntaCSPGG8mRXbGj95sgAVkpd2G5CWPIeWYlwUTYdLvdBqkxeyA%2BB3rsFskWqxvxrJwGBpMkYFs7S3IHM5qX5MYuTvN%2BTN%2B3OxryqAFq3kqtiECvxYf%2BGIMUga3yeM%2FmlM1Al9FOMaf8QzDQ8YbE2AQdPDHyuXZlxRgw701D0KDJSxLsKwjXDRdWhHuQzUBc10gNDdNUkWNMcfvgHZDR9gvlTeC0Wnvp%2F6lq9BUIkytZWKab1ODzs7aF%2B0f12ANhUrogRaG1IW4Jh%2BL8KqaRSgfFwLc2VqgDzEzsNVsH4bjDdychKikZjJeGVhF90dzMM1%2Bl4HVPcLs0D0rhni28%2Fgao8GGfCb%2Fk%2BCu6p9rx6vRMKBYnPavKPC74Pyj7AymwxoUOArRIg7zuVpyT22TWnMAgotP6iiuL7wyr5dl%2Bj8AJhfDqGC6v34UFUa9D1N1%2BFJvksCO4VS2WhIMmmN8kdL648vzZSkF91zMH%2Bro8lhqBSI9ydHN2InY0jvCr5aTCMsJ%2FbH1APBbtvcK3YcPdtVL9cibB2XPwrZ2BP1Z1z860RuO4zKzc767ZrosLgCdCkDd6yyEt1pNN72ylMK3CqcIGOqUBfjHpNk%2F%2BwjyuUcmjbm5%2F8MyDLavnwDD6EO5jOFyd99FD6V%2F1qsX%2FWte%2BgQwosV%2FZiJ4e8CtbkkWboeBl2I4lI4sg6wNBiKpVp5hLFJb6ITNthxHzUGAVJpgkceqN7du9vXemQ1Yiv2tlPBvPYR8XiOqpizN3A0QfkrQeLgvHJ9r1KQ%2F7BnIBiQFXQfGalQf%2F9IPGZ0u9pdWOTJWYHB1DzMsJl2SR&X-Amz-Signature=bec0542e57399edbfd463e4797160f6a378bc704d246da8b174e58870ad62ce3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
