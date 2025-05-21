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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BXSINJ2%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIC3LCQRIHkZNwGUqx3YW9PsCgJfqN%2Fnl9t9ygdSriPiKAiEArb3Q3zFssrWkFS5Ri4mspSPkdILOqW6GSWoUkSIyNvgqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH3yBA8f44G%2FvBoF6yrcAz6cMytO%2FGXtZ2YxlUYCTmhq5gvwqJZFWRFM2MCM7P90ljYIpVC4kG5VKl%2BT3Xhfl2tV5RF82WFYdjv9krAQBMHEWf%2F4jZacY%2F7TjKVd4tXs0HpGJI7YCBaaNfK4Y%2FrLxh%2BEGqUsobCLcXDr3wX3VOT%2BZ8HZebfF2hu2DP7OFJTqAr8Y4KbHYErmbkeye9zganh0gGPYHTaomRL7L6un%2FeYzUzS9I2zt%2BYDA9SHH8P6pMh3s3WeABwLyT%2FtDvUyUtCx6CjFZoFEu%2Bl0f0M0euHGEiOSLw%2BlkDPmfmNmJ5XvFCxDVvmLQzSjIiMtlvcPD9LP%2By67opvKrXRvEGwNzr0QuL9O5p6bHBaf8m4QzvK6omiRZYs1DAY8UawhLYLNI%2FsGlVN682GIwBnKf5F0jDC61UX9tnvrrN%2FVLivo2vJ4INgZ3ZBWUw%2BErtD%2BMdinSHSDuiVEPBBOSc1Wx7SvFOFHw070MJOL1rOV%2FKLZxynB53s9ervuYNXLFd0K7tVIb92%2B7OyM6xwtVDE9p5s%2F9zeJIGfEW8C26wK1ZmxY2ol2f7ivHKQ0Km4FOg9nS7oDWDQucg87vGdKH66BtXd0YQYGigIR%2BQqu%2B7ZXs7o%2FO%2By6mH3nOHhN1ZrTxcSGcMMrwuMEGOqUBbEDu%2FEc7ZIiCXpuFfjRG5XrWli2MiCQ%2B3fzaCgD4tUd%2Bbfz1VdHTp2PIeegI9JeXCHTZT7md%2FC362C4Hagmplf6joI%2Fvi71rh4PRiKqLtVAyJQ8oRWwyEbQH8mDwx8p2EmfKQu5HPFNZHYDbOtWCX08CStYYuZplb%2BsFhLGvBlWYdAo9uOMM6lo6BtutnbGgxOb55ktg6PaGC2ufEE4EPWOJiBlx&X-Amz-Signature=9e66e4e3e1b8999ae15e95812ce6fc5daa02536547f1ba79448940652ca9de8e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BXSINJ2%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIC3LCQRIHkZNwGUqx3YW9PsCgJfqN%2Fnl9t9ygdSriPiKAiEArb3Q3zFssrWkFS5Ri4mspSPkdILOqW6GSWoUkSIyNvgqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH3yBA8f44G%2FvBoF6yrcAz6cMytO%2FGXtZ2YxlUYCTmhq5gvwqJZFWRFM2MCM7P90ljYIpVC4kG5VKl%2BT3Xhfl2tV5RF82WFYdjv9krAQBMHEWf%2F4jZacY%2F7TjKVd4tXs0HpGJI7YCBaaNfK4Y%2FrLxh%2BEGqUsobCLcXDr3wX3VOT%2BZ8HZebfF2hu2DP7OFJTqAr8Y4KbHYErmbkeye9zganh0gGPYHTaomRL7L6un%2FeYzUzS9I2zt%2BYDA9SHH8P6pMh3s3WeABwLyT%2FtDvUyUtCx6CjFZoFEu%2Bl0f0M0euHGEiOSLw%2BlkDPmfmNmJ5XvFCxDVvmLQzSjIiMtlvcPD9LP%2By67opvKrXRvEGwNzr0QuL9O5p6bHBaf8m4QzvK6omiRZYs1DAY8UawhLYLNI%2FsGlVN682GIwBnKf5F0jDC61UX9tnvrrN%2FVLivo2vJ4INgZ3ZBWUw%2BErtD%2BMdinSHSDuiVEPBBOSc1Wx7SvFOFHw070MJOL1rOV%2FKLZxynB53s9ervuYNXLFd0K7tVIb92%2B7OyM6xwtVDE9p5s%2F9zeJIGfEW8C26wK1ZmxY2ol2f7ivHKQ0Km4FOg9nS7oDWDQucg87vGdKH66BtXd0YQYGigIR%2BQqu%2B7ZXs7o%2FO%2By6mH3nOHhN1ZrTxcSGcMMrwuMEGOqUBbEDu%2FEc7ZIiCXpuFfjRG5XrWli2MiCQ%2B3fzaCgD4tUd%2Bbfz1VdHTp2PIeegI9JeXCHTZT7md%2FC362C4Hagmplf6joI%2Fvi71rh4PRiKqLtVAyJQ8oRWwyEbQH8mDwx8p2EmfKQu5HPFNZHYDbOtWCX08CStYYuZplb%2BsFhLGvBlWYdAo9uOMM6lo6BtutnbGgxOb55ktg6PaGC2ufEE4EPWOJiBlx&X-Amz-Signature=fb43740e6542949c31d5c9ad11d9a4b73c2655248ff4fecedded22768c5474e4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BXSINJ2%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIC3LCQRIHkZNwGUqx3YW9PsCgJfqN%2Fnl9t9ygdSriPiKAiEArb3Q3zFssrWkFS5Ri4mspSPkdILOqW6GSWoUkSIyNvgqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH3yBA8f44G%2FvBoF6yrcAz6cMytO%2FGXtZ2YxlUYCTmhq5gvwqJZFWRFM2MCM7P90ljYIpVC4kG5VKl%2BT3Xhfl2tV5RF82WFYdjv9krAQBMHEWf%2F4jZacY%2F7TjKVd4tXs0HpGJI7YCBaaNfK4Y%2FrLxh%2BEGqUsobCLcXDr3wX3VOT%2BZ8HZebfF2hu2DP7OFJTqAr8Y4KbHYErmbkeye9zganh0gGPYHTaomRL7L6un%2FeYzUzS9I2zt%2BYDA9SHH8P6pMh3s3WeABwLyT%2FtDvUyUtCx6CjFZoFEu%2Bl0f0M0euHGEiOSLw%2BlkDPmfmNmJ5XvFCxDVvmLQzSjIiMtlvcPD9LP%2By67opvKrXRvEGwNzr0QuL9O5p6bHBaf8m4QzvK6omiRZYs1DAY8UawhLYLNI%2FsGlVN682GIwBnKf5F0jDC61UX9tnvrrN%2FVLivo2vJ4INgZ3ZBWUw%2BErtD%2BMdinSHSDuiVEPBBOSc1Wx7SvFOFHw070MJOL1rOV%2FKLZxynB53s9ervuYNXLFd0K7tVIb92%2B7OyM6xwtVDE9p5s%2F9zeJIGfEW8C26wK1ZmxY2ol2f7ivHKQ0Km4FOg9nS7oDWDQucg87vGdKH66BtXd0YQYGigIR%2BQqu%2B7ZXs7o%2FO%2By6mH3nOHhN1ZrTxcSGcMMrwuMEGOqUBbEDu%2FEc7ZIiCXpuFfjRG5XrWli2MiCQ%2B3fzaCgD4tUd%2Bbfz1VdHTp2PIeegI9JeXCHTZT7md%2FC362C4Hagmplf6joI%2Fvi71rh4PRiKqLtVAyJQ8oRWwyEbQH8mDwx8p2EmfKQu5HPFNZHYDbOtWCX08CStYYuZplb%2BsFhLGvBlWYdAo9uOMM6lo6BtutnbGgxOb55ktg6PaGC2ufEE4EPWOJiBlx&X-Amz-Signature=76021f6629c5d04941653efbeff968450cdff08c58e4552c049d04f0e677a74d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
