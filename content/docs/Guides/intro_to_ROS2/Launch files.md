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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM6T6U4S%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T150703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCtEPsTgJ37Hd1To7RaQ7AufTg72mYDbsq76S4Uh6G7sAIhAOgfSU604zLtxIK7pP9QgqW8mdqH%2BZ%2B3X6ys6vBw1l19KogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHpzbHXLPewzRPl8Iq3AMHvL3dXTsZTjDOs94Lm6CH%2FjgIN8%2FOlur4GE%2BzZrmGW43Em%2BXTa61E1dlP1X3InvaDrykGVhvQoCMzC%2Fgur%2FeU3S4orl04s08u8lPGt1QyCXjMRrPxmyQBbuwJKqFAGGylZMUoVOvvOZBvrjVmiyjGIvuNgYCRMTqNVX0qWAloNsy7p2mYSE%2FiRH8GUAbloPOKF7KfKG3FpfbCYhyWKvx3JyEolHwGq4HEpIn4KfpU5yYKk11KM%2B4AYsq6Csh4fwp8HCVPFrX1n0aGxIAp7NubJ%2FYZ%2B%2FLdbwRj60u%2FVq4Cy%2B8t%2BIBnkSZs2XoTgq8axeWCMpXGeibcSf%2FIhimAMyyf9Q0UODgfaSunqTQi%2BrpzZOU2ZiZtaS4wgCCH0dbdbxctNGTMLbmEzgGnbT08tP2MtEmr7TlTTZHsfwWvmdPUFhJFUTuDUt%2Bf9yFes7HO40foEE%2F%2BprBbRqsE9oTLy9SaHDtscr%2FuCQHfLrHarJNeMWve0xdYisQU9DQJL3dwdMZrlHwg5BUsVt%2FgihH8O08xXrukgXj8PMDFwERjyKgyT7Vff94FMOSKjrTxgEDS4%2FfHKaqt2pzUzyiH0r9gYyS1aMLusyKRZfX1O77nwkPVPBpAxxW7yKVD5iOGGzDd9pPABjqkAaT2njNRp%2BEkeGwZmHRVDLfywrXnKst8jVy%2BDyS7MRPBGk1g6QRSydQBBpIZg2eKHFkN%2FSmt%2B5yJjPTxf7P9D%2FSTaaPWISrMT6YLsUzgFzXerIdP4TgbX4w%2B3mQp5v%2FV16fQw1isIohFWzTymkF%2B2XB4faqPxWX9%2FOFb44zLa9CQ%2FA4cjH02Eav9aOQh%2FkFl3%2BGEgHgnjiSM3iYvJFCdbThy%2Fbhi&X-Amz-Signature=d267fc00cdfa12478b92f535e233d3f90bd2aecaa8863d35b1c50574a5f1b607&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM6T6U4S%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T150703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCtEPsTgJ37Hd1To7RaQ7AufTg72mYDbsq76S4Uh6G7sAIhAOgfSU604zLtxIK7pP9QgqW8mdqH%2BZ%2B3X6ys6vBw1l19KogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHpzbHXLPewzRPl8Iq3AMHvL3dXTsZTjDOs94Lm6CH%2FjgIN8%2FOlur4GE%2BzZrmGW43Em%2BXTa61E1dlP1X3InvaDrykGVhvQoCMzC%2Fgur%2FeU3S4orl04s08u8lPGt1QyCXjMRrPxmyQBbuwJKqFAGGylZMUoVOvvOZBvrjVmiyjGIvuNgYCRMTqNVX0qWAloNsy7p2mYSE%2FiRH8GUAbloPOKF7KfKG3FpfbCYhyWKvx3JyEolHwGq4HEpIn4KfpU5yYKk11KM%2B4AYsq6Csh4fwp8HCVPFrX1n0aGxIAp7NubJ%2FYZ%2B%2FLdbwRj60u%2FVq4Cy%2B8t%2BIBnkSZs2XoTgq8axeWCMpXGeibcSf%2FIhimAMyyf9Q0UODgfaSunqTQi%2BrpzZOU2ZiZtaS4wgCCH0dbdbxctNGTMLbmEzgGnbT08tP2MtEmr7TlTTZHsfwWvmdPUFhJFUTuDUt%2Bf9yFes7HO40foEE%2F%2BprBbRqsE9oTLy9SaHDtscr%2FuCQHfLrHarJNeMWve0xdYisQU9DQJL3dwdMZrlHwg5BUsVt%2FgihH8O08xXrukgXj8PMDFwERjyKgyT7Vff94FMOSKjrTxgEDS4%2FfHKaqt2pzUzyiH0r9gYyS1aMLusyKRZfX1O77nwkPVPBpAxxW7yKVD5iOGGzDd9pPABjqkAaT2njNRp%2BEkeGwZmHRVDLfywrXnKst8jVy%2BDyS7MRPBGk1g6QRSydQBBpIZg2eKHFkN%2FSmt%2B5yJjPTxf7P9D%2FSTaaPWISrMT6YLsUzgFzXerIdP4TgbX4w%2B3mQp5v%2FV16fQw1isIohFWzTymkF%2B2XB4faqPxWX9%2FOFb44zLa9CQ%2FA4cjH02Eav9aOQh%2FkFl3%2BGEgHgnjiSM3iYvJFCdbThy%2Fbhi&X-Amz-Signature=3fe5116db3ab97b3b5fcdfc9ef26da3a8cf0b7cd334674f2c2b6948770b96f81&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM6T6U4S%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T150703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCtEPsTgJ37Hd1To7RaQ7AufTg72mYDbsq76S4Uh6G7sAIhAOgfSU604zLtxIK7pP9QgqW8mdqH%2BZ%2B3X6ys6vBw1l19KogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHpzbHXLPewzRPl8Iq3AMHvL3dXTsZTjDOs94Lm6CH%2FjgIN8%2FOlur4GE%2BzZrmGW43Em%2BXTa61E1dlP1X3InvaDrykGVhvQoCMzC%2Fgur%2FeU3S4orl04s08u8lPGt1QyCXjMRrPxmyQBbuwJKqFAGGylZMUoVOvvOZBvrjVmiyjGIvuNgYCRMTqNVX0qWAloNsy7p2mYSE%2FiRH8GUAbloPOKF7KfKG3FpfbCYhyWKvx3JyEolHwGq4HEpIn4KfpU5yYKk11KM%2B4AYsq6Csh4fwp8HCVPFrX1n0aGxIAp7NubJ%2FYZ%2B%2FLdbwRj60u%2FVq4Cy%2B8t%2BIBnkSZs2XoTgq8axeWCMpXGeibcSf%2FIhimAMyyf9Q0UODgfaSunqTQi%2BrpzZOU2ZiZtaS4wgCCH0dbdbxctNGTMLbmEzgGnbT08tP2MtEmr7TlTTZHsfwWvmdPUFhJFUTuDUt%2Bf9yFes7HO40foEE%2F%2BprBbRqsE9oTLy9SaHDtscr%2FuCQHfLrHarJNeMWve0xdYisQU9DQJL3dwdMZrlHwg5BUsVt%2FgihH8O08xXrukgXj8PMDFwERjyKgyT7Vff94FMOSKjrTxgEDS4%2FfHKaqt2pzUzyiH0r9gYyS1aMLusyKRZfX1O77nwkPVPBpAxxW7yKVD5iOGGzDd9pPABjqkAaT2njNRp%2BEkeGwZmHRVDLfywrXnKst8jVy%2BDyS7MRPBGk1g6QRSydQBBpIZg2eKHFkN%2FSmt%2B5yJjPTxf7P9D%2FSTaaPWISrMT6YLsUzgFzXerIdP4TgbX4w%2B3mQp5v%2FV16fQw1isIohFWzTymkF%2B2XB4faqPxWX9%2FOFb44zLa9CQ%2FA4cjH02Eav9aOQh%2FkFl3%2BGEgHgnjiSM3iYvJFCdbThy%2Fbhi&X-Amz-Signature=fcfbae42904533d5d2912a0c740b84c96a2048d06083023cdabdcb0d865fc6ab&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
