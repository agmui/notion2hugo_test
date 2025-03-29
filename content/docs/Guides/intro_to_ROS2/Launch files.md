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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAJXG2VA%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T160814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDfiNa2kCaxL9SkMIXx%2BwnLesfzoZ04qqln198vkOrl7QIgPdabkVo45Hq1aRTSPzTGkD6Imb5%2BRGmnl4FJACvy1g4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDDxcSAW%2BqbxbOVwqWyrcA15Fpd5YIjCjyHozG67E%2B%2FIrlp%2BKL8umUY1Vx5Mddcnw1YidwJu8yIWlrwdLzXlt1Dz6mER%2FMMo0yNoIUpDVU2Y7HKlJ9ZnNfdW7SkHGHaZdD8F83sL%2BjeOg3phjxB08g6T4GwH7l4C3YIVAr4j1gltkFR4G0GZnKQWlc%2BgfkDK1aedeVETsaARyTCmrk5etY0u%2BnWT9gKn2IF3YRVsoaTeaWRa1M4mPX35B2KNDhVsmal%2BmIL24Tgo0kZT7m7pIDp1Ddd0tBkF89afIxD4q%2BY1QNPP01JCfbDGe7DufEJbB07jaBTLgGrnGDiSGtufwe9bV8kSbo4ewJjnOB4zptWWrkETadjEIeiaJ6p8ladtTZRARy4h5h9a%2BsyuYI9sE%2Bi3zVS8yuPeE8Rt2tdogSKMj2mXc4SIH%2BcK%2BRmog6vtxoLSdOwJ5oKOCmgAqkmKK6Vjsu02FfxFCPtJekDj7KmTo6Ir6EH9O3OlFdrLxj6LplVZd%2F60o4bFdEpBn27swFfaao5lGfhVW6rhiKOJr7aaOBtHKW9MaRTCNz0kiJsu91dsiFFvI3dNkjjpkHgPnhlX00pGVO3KJcLFl1E1NSZQS1b4vrzvi5TdempDuolFjpHaLGMWg5VB%2BPhGaMI%2BfoL8GOqUBINvdOqZqVsFwm5o70j4m5t1z2hcCG8bF2kL2PtcFG1DzO85%2FalzNQJ9ZWD0%2FseA%2F93dKAE3Bzv6lO7rTWK3wFlqlJBR3f%2F0OsNlTk6X%2BMfUajNXmIsA2vnA%2F4giAkOiVjJ11Fpk24KokI99qHrMqw9k9hMRX2%2BRrXkCB0utd3tm9l9tMzOSkRnSkGGEaVHXVOfoYIQZmJDNIgjgD%2Bm0vbjTw%2FQAW&X-Amz-Signature=af016e4495b89b489821d2f05d249654bcf18fa768ebe5ea4c404d866af61d66&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAJXG2VA%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T160814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDfiNa2kCaxL9SkMIXx%2BwnLesfzoZ04qqln198vkOrl7QIgPdabkVo45Hq1aRTSPzTGkD6Imb5%2BRGmnl4FJACvy1g4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDDxcSAW%2BqbxbOVwqWyrcA15Fpd5YIjCjyHozG67E%2B%2FIrlp%2BKL8umUY1Vx5Mddcnw1YidwJu8yIWlrwdLzXlt1Dz6mER%2FMMo0yNoIUpDVU2Y7HKlJ9ZnNfdW7SkHGHaZdD8F83sL%2BjeOg3phjxB08g6T4GwH7l4C3YIVAr4j1gltkFR4G0GZnKQWlc%2BgfkDK1aedeVETsaARyTCmrk5etY0u%2BnWT9gKn2IF3YRVsoaTeaWRa1M4mPX35B2KNDhVsmal%2BmIL24Tgo0kZT7m7pIDp1Ddd0tBkF89afIxD4q%2BY1QNPP01JCfbDGe7DufEJbB07jaBTLgGrnGDiSGtufwe9bV8kSbo4ewJjnOB4zptWWrkETadjEIeiaJ6p8ladtTZRARy4h5h9a%2BsyuYI9sE%2Bi3zVS8yuPeE8Rt2tdogSKMj2mXc4SIH%2BcK%2BRmog6vtxoLSdOwJ5oKOCmgAqkmKK6Vjsu02FfxFCPtJekDj7KmTo6Ir6EH9O3OlFdrLxj6LplVZd%2F60o4bFdEpBn27swFfaao5lGfhVW6rhiKOJr7aaOBtHKW9MaRTCNz0kiJsu91dsiFFvI3dNkjjpkHgPnhlX00pGVO3KJcLFl1E1NSZQS1b4vrzvi5TdempDuolFjpHaLGMWg5VB%2BPhGaMI%2BfoL8GOqUBINvdOqZqVsFwm5o70j4m5t1z2hcCG8bF2kL2PtcFG1DzO85%2FalzNQJ9ZWD0%2FseA%2F93dKAE3Bzv6lO7rTWK3wFlqlJBR3f%2F0OsNlTk6X%2BMfUajNXmIsA2vnA%2F4giAkOiVjJ11Fpk24KokI99qHrMqw9k9hMRX2%2BRrXkCB0utd3tm9l9tMzOSkRnSkGGEaVHXVOfoYIQZmJDNIgjgD%2Bm0vbjTw%2FQAW&X-Amz-Signature=4b7385c296ac01ffbf553b8df2592a934057d4b8c55cb42f7549fdd88294414c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAJXG2VA%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T160814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDfiNa2kCaxL9SkMIXx%2BwnLesfzoZ04qqln198vkOrl7QIgPdabkVo45Hq1aRTSPzTGkD6Imb5%2BRGmnl4FJACvy1g4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDDxcSAW%2BqbxbOVwqWyrcA15Fpd5YIjCjyHozG67E%2B%2FIrlp%2BKL8umUY1Vx5Mddcnw1YidwJu8yIWlrwdLzXlt1Dz6mER%2FMMo0yNoIUpDVU2Y7HKlJ9ZnNfdW7SkHGHaZdD8F83sL%2BjeOg3phjxB08g6T4GwH7l4C3YIVAr4j1gltkFR4G0GZnKQWlc%2BgfkDK1aedeVETsaARyTCmrk5etY0u%2BnWT9gKn2IF3YRVsoaTeaWRa1M4mPX35B2KNDhVsmal%2BmIL24Tgo0kZT7m7pIDp1Ddd0tBkF89afIxD4q%2BY1QNPP01JCfbDGe7DufEJbB07jaBTLgGrnGDiSGtufwe9bV8kSbo4ewJjnOB4zptWWrkETadjEIeiaJ6p8ladtTZRARy4h5h9a%2BsyuYI9sE%2Bi3zVS8yuPeE8Rt2tdogSKMj2mXc4SIH%2BcK%2BRmog6vtxoLSdOwJ5oKOCmgAqkmKK6Vjsu02FfxFCPtJekDj7KmTo6Ir6EH9O3OlFdrLxj6LplVZd%2F60o4bFdEpBn27swFfaao5lGfhVW6rhiKOJr7aaOBtHKW9MaRTCNz0kiJsu91dsiFFvI3dNkjjpkHgPnhlX00pGVO3KJcLFl1E1NSZQS1b4vrzvi5TdempDuolFjpHaLGMWg5VB%2BPhGaMI%2BfoL8GOqUBINvdOqZqVsFwm5o70j4m5t1z2hcCG8bF2kL2PtcFG1DzO85%2FalzNQJ9ZWD0%2FseA%2F93dKAE3Bzv6lO7rTWK3wFlqlJBR3f%2F0OsNlTk6X%2BMfUajNXmIsA2vnA%2F4giAkOiVjJ11Fpk24KokI99qHrMqw9k9hMRX2%2BRrXkCB0utd3tm9l9tMzOSkRnSkGGEaVHXVOfoYIQZmJDNIgjgD%2Bm0vbjTw%2FQAW&X-Amz-Signature=96ccb71d838b14d5a7e1865868682d8e5447a4ba1e3d747591b0483bdc637460&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
