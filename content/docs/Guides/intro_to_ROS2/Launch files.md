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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVXLFPNY%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T190343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDKCX4P2dWKL2XLfMPTte4PKlVRvkVRus2fEWlWeKkoUwIgEBwnMtl9NWp9%2FAfO6actADKh1dqcHTurguAglzEy7sYq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDOg4k%2FfdMHDvyz5TCircA5Pg9N64NW6mEND5pL29chw5dhkI6Ul6xNhDZE2%2FLXTiKXOqHYFg8Cx1W%2F%2B%2FHJCwwwvaEUTVG2Syss3SYHsr%2FshuxJ4hBb0tk1HHpRmv8%2FzDH7Sfs%2FuIyMUFL3E7HujkuqkY55HGhFUqC4ycQFEVtr528gFS3XLYMn99ljqlvYNdga6zw9Dj8Du921WriINr%2BORp4tRS5RoSFysP0NU199XZBat2kORH%2BsVKu2QNEepPqDJdRKkKTcdM%2ByFSMu%2FxPsDy4l4w0s0IoQsYH7fvu4ylXa7ScfCExPkH8PCJKpymZBVqGNhPBlagAdHFjFrlwE8WOr3KzJhKW5tiw76vUHOFpgbYgNU1vRDr27V42g41u7bRKyuAnKZnN7sRngBArxEYMIiN6G3pOO5lQYhplcMpM0jdReoJn0BYpCcIyBs6HmkdEg8evQ7Eo4aNu3yP04v4jxPnuhRF1tazMp%2Br0CCXyRalMOpn9qNBlq6f48jw%2FV7otJY4y9aA0FDLPUwwWGs0XtYMo9VjihrbS8u4z63L3IQhfA7ywHPtqTgDQgUsvbvkY5WYXHiGpCsM%2BoKW7Y6VvT9UFH532buQ5OIz0hicTnqf5duM40NL2Ho8Y6mk%2F40rR%2F6JYITqyIQrMIiopcMGOqUB1fhoTlrSlpOsRZbWsZDAkq%2FLA%2BJlfP%2FBKKgcku4851LclCPMFU31FmFFQ4Eo5SwpvbbDYm314EK0IQyOsm9O67X4SFy%2BUZqmoSPZ9Yrg8bGBqgXCR3L%2B4HPNxg1N4%2FJjKARfXMBpSD%2F7I2isTRy68kOQXeeWPI%2FzJo5wT0bHtVGWVWUBsnBb%2BlWFtQjo97uFe0q2EQV%2FfoKMpDQIZsFDCVTSR%2Fq%2B&X-Amz-Signature=fe05369f2d31e35a18e5e1c84b92dd57ac51f30f4b4172514d247e57d156f2c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVXLFPNY%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T190343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDKCX4P2dWKL2XLfMPTte4PKlVRvkVRus2fEWlWeKkoUwIgEBwnMtl9NWp9%2FAfO6actADKh1dqcHTurguAglzEy7sYq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDOg4k%2FfdMHDvyz5TCircA5Pg9N64NW6mEND5pL29chw5dhkI6Ul6xNhDZE2%2FLXTiKXOqHYFg8Cx1W%2F%2B%2FHJCwwwvaEUTVG2Syss3SYHsr%2FshuxJ4hBb0tk1HHpRmv8%2FzDH7Sfs%2FuIyMUFL3E7HujkuqkY55HGhFUqC4ycQFEVtr528gFS3XLYMn99ljqlvYNdga6zw9Dj8Du921WriINr%2BORp4tRS5RoSFysP0NU199XZBat2kORH%2BsVKu2QNEepPqDJdRKkKTcdM%2ByFSMu%2FxPsDy4l4w0s0IoQsYH7fvu4ylXa7ScfCExPkH8PCJKpymZBVqGNhPBlagAdHFjFrlwE8WOr3KzJhKW5tiw76vUHOFpgbYgNU1vRDr27V42g41u7bRKyuAnKZnN7sRngBArxEYMIiN6G3pOO5lQYhplcMpM0jdReoJn0BYpCcIyBs6HmkdEg8evQ7Eo4aNu3yP04v4jxPnuhRF1tazMp%2Br0CCXyRalMOpn9qNBlq6f48jw%2FV7otJY4y9aA0FDLPUwwWGs0XtYMo9VjihrbS8u4z63L3IQhfA7ywHPtqTgDQgUsvbvkY5WYXHiGpCsM%2BoKW7Y6VvT9UFH532buQ5OIz0hicTnqf5duM40NL2Ho8Y6mk%2F40rR%2F6JYITqyIQrMIiopcMGOqUB1fhoTlrSlpOsRZbWsZDAkq%2FLA%2BJlfP%2FBKKgcku4851LclCPMFU31FmFFQ4Eo5SwpvbbDYm314EK0IQyOsm9O67X4SFy%2BUZqmoSPZ9Yrg8bGBqgXCR3L%2B4HPNxg1N4%2FJjKARfXMBpSD%2F7I2isTRy68kOQXeeWPI%2FzJo5wT0bHtVGWVWUBsnBb%2BlWFtQjo97uFe0q2EQV%2FfoKMpDQIZsFDCVTSR%2Fq%2B&X-Amz-Signature=515003a102452410a8580f0f2cd33c90ed791d5db4701ea7d5fe1ec02c5566dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVXLFPNY%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T190343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDKCX4P2dWKL2XLfMPTte4PKlVRvkVRus2fEWlWeKkoUwIgEBwnMtl9NWp9%2FAfO6actADKh1dqcHTurguAglzEy7sYq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDOg4k%2FfdMHDvyz5TCircA5Pg9N64NW6mEND5pL29chw5dhkI6Ul6xNhDZE2%2FLXTiKXOqHYFg8Cx1W%2F%2B%2FHJCwwwvaEUTVG2Syss3SYHsr%2FshuxJ4hBb0tk1HHpRmv8%2FzDH7Sfs%2FuIyMUFL3E7HujkuqkY55HGhFUqC4ycQFEVtr528gFS3XLYMn99ljqlvYNdga6zw9Dj8Du921WriINr%2BORp4tRS5RoSFysP0NU199XZBat2kORH%2BsVKu2QNEepPqDJdRKkKTcdM%2ByFSMu%2FxPsDy4l4w0s0IoQsYH7fvu4ylXa7ScfCExPkH8PCJKpymZBVqGNhPBlagAdHFjFrlwE8WOr3KzJhKW5tiw76vUHOFpgbYgNU1vRDr27V42g41u7bRKyuAnKZnN7sRngBArxEYMIiN6G3pOO5lQYhplcMpM0jdReoJn0BYpCcIyBs6HmkdEg8evQ7Eo4aNu3yP04v4jxPnuhRF1tazMp%2Br0CCXyRalMOpn9qNBlq6f48jw%2FV7otJY4y9aA0FDLPUwwWGs0XtYMo9VjihrbS8u4z63L3IQhfA7ywHPtqTgDQgUsvbvkY5WYXHiGpCsM%2BoKW7Y6VvT9UFH532buQ5OIz0hicTnqf5duM40NL2Ho8Y6mk%2F40rR%2F6JYITqyIQrMIiopcMGOqUB1fhoTlrSlpOsRZbWsZDAkq%2FLA%2BJlfP%2FBKKgcku4851LclCPMFU31FmFFQ4Eo5SwpvbbDYm314EK0IQyOsm9O67X4SFy%2BUZqmoSPZ9Yrg8bGBqgXCR3L%2B4HPNxg1N4%2FJjKARfXMBpSD%2F7I2isTRy68kOQXeeWPI%2FzJo5wT0bHtVGWVWUBsnBb%2BlWFtQjo97uFe0q2EQV%2FfoKMpDQIZsFDCVTSR%2Fq%2B&X-Amz-Signature=e75d9a348f2f4ba58be4dc34c44cd7f72ac7c5b826cf4f528f1e41958540d375&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
