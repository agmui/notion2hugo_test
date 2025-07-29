---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HY245DS%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCc3sxPkyHs21SklfmLQQZpFWRtpG%2BkG%2BGirwJLExQH5AIgXN1DEYjrrlOGig7nNmWQpmIQFQ4Geb%2FoGtasT5CbJ5UqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLdZc7cYsCEtPloy0SrcA2vnymQZBHL%2FiLpAWazFzpfsrIK6gCx8Um49PVXpMPlBziUWAHNTkXSTwh5bSRYsKEg8DAAc%2FMhlHoqdNeSczkr4Gh9YRX0szxEJRgCi11MkX%2B0VBcKG0rrQJIt9jeOwvDJYDsgdv9TOkriYAUA1A%2BHLl0D3DxWDUoeYxmUGnQAXdT0OZukv5EPu57xiHu7oQ3SLNHhEdTCytHlM5w6YfkE7RvayYvMHHrHaEUMFlYAu7yud20SxVYvzO35KQy4iWBWaLUpuY8bE9Wm1CqjAZ2qcNM38i8sll7OGNt2295StZQXlkH%2FUhhb73wx%2BcTzM2pmDminHAzz2b%2B2a7i0UXeqiKowKHUgGFnh63abpe%2Fg7REK5UzwMVvuc%2BgUwFI%2FXami3pTHWXi6gX5zB%2FO7rgT3fYqrxGfi5sWDtrpfNhz3BbcnupLVhcfmthbGA42EVRFc2A5S79masfUprYHWnIEc10Ujh7Eqql2XjWWgOgo94R%2BMknq9uK74f3vOlAZTVJthqlcvoFTbo%2FtOPstDiSHCxjK8MkZXr1l8Pljap46TM2N6ZsXvLHEHKZL7ccbTQWsrq%2FXX4xfPQTMFIe3JYNvSELIIf4Lvqi3m25yQJbyvdjDibeS0QBZpfxzMSMOqXo8QGOqUBk37jgpsHRPB4qjFDGjEBZlE8gxZDBXIlADYPBL81x5cEQmJLm98r8gmJBsIDew4ugCdgZVs5NMXTVr91uXxMvu95acLS15KBuvy011dhG9El%2B0oHIIZe%2BBIyRIyHK85nzzpk6lczCv%2FzvmO1x9kvFwpA0JQ3r%2BFVS3KVH02CUUnS4kCU2lq0pTzZbWlAeFArDBg0ekmt72PYdFEgIjKVp%2B61GPAW&X-Amz-Signature=46968bb3c8b1747be2d822823c190c2612484f712369237bc8089d048e94468e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HY245DS%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCc3sxPkyHs21SklfmLQQZpFWRtpG%2BkG%2BGirwJLExQH5AIgXN1DEYjrrlOGig7nNmWQpmIQFQ4Geb%2FoGtasT5CbJ5UqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLdZc7cYsCEtPloy0SrcA2vnymQZBHL%2FiLpAWazFzpfsrIK6gCx8Um49PVXpMPlBziUWAHNTkXSTwh5bSRYsKEg8DAAc%2FMhlHoqdNeSczkr4Gh9YRX0szxEJRgCi11MkX%2B0VBcKG0rrQJIt9jeOwvDJYDsgdv9TOkriYAUA1A%2BHLl0D3DxWDUoeYxmUGnQAXdT0OZukv5EPu57xiHu7oQ3SLNHhEdTCytHlM5w6YfkE7RvayYvMHHrHaEUMFlYAu7yud20SxVYvzO35KQy4iWBWaLUpuY8bE9Wm1CqjAZ2qcNM38i8sll7OGNt2295StZQXlkH%2FUhhb73wx%2BcTzM2pmDminHAzz2b%2B2a7i0UXeqiKowKHUgGFnh63abpe%2Fg7REK5UzwMVvuc%2BgUwFI%2FXami3pTHWXi6gX5zB%2FO7rgT3fYqrxGfi5sWDtrpfNhz3BbcnupLVhcfmthbGA42EVRFc2A5S79masfUprYHWnIEc10Ujh7Eqql2XjWWgOgo94R%2BMknq9uK74f3vOlAZTVJthqlcvoFTbo%2FtOPstDiSHCxjK8MkZXr1l8Pljap46TM2N6ZsXvLHEHKZL7ccbTQWsrq%2FXX4xfPQTMFIe3JYNvSELIIf4Lvqi3m25yQJbyvdjDibeS0QBZpfxzMSMOqXo8QGOqUBk37jgpsHRPB4qjFDGjEBZlE8gxZDBXIlADYPBL81x5cEQmJLm98r8gmJBsIDew4ugCdgZVs5NMXTVr91uXxMvu95acLS15KBuvy011dhG9El%2B0oHIIZe%2BBIyRIyHK85nzzpk6lczCv%2FzvmO1x9kvFwpA0JQ3r%2BFVS3KVH02CUUnS4kCU2lq0pTzZbWlAeFArDBg0ekmt72PYdFEgIjKVp%2B61GPAW&X-Amz-Signature=a389d28dab00ca99e74b0ba0ecf759d569adbbd986a707ae4ba626933cceef05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HY245DS%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCc3sxPkyHs21SklfmLQQZpFWRtpG%2BkG%2BGirwJLExQH5AIgXN1DEYjrrlOGig7nNmWQpmIQFQ4Geb%2FoGtasT5CbJ5UqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLdZc7cYsCEtPloy0SrcA2vnymQZBHL%2FiLpAWazFzpfsrIK6gCx8Um49PVXpMPlBziUWAHNTkXSTwh5bSRYsKEg8DAAc%2FMhlHoqdNeSczkr4Gh9YRX0szxEJRgCi11MkX%2B0VBcKG0rrQJIt9jeOwvDJYDsgdv9TOkriYAUA1A%2BHLl0D3DxWDUoeYxmUGnQAXdT0OZukv5EPu57xiHu7oQ3SLNHhEdTCytHlM5w6YfkE7RvayYvMHHrHaEUMFlYAu7yud20SxVYvzO35KQy4iWBWaLUpuY8bE9Wm1CqjAZ2qcNM38i8sll7OGNt2295StZQXlkH%2FUhhb73wx%2BcTzM2pmDminHAzz2b%2B2a7i0UXeqiKowKHUgGFnh63abpe%2Fg7REK5UzwMVvuc%2BgUwFI%2FXami3pTHWXi6gX5zB%2FO7rgT3fYqrxGfi5sWDtrpfNhz3BbcnupLVhcfmthbGA42EVRFc2A5S79masfUprYHWnIEc10Ujh7Eqql2XjWWgOgo94R%2BMknq9uK74f3vOlAZTVJthqlcvoFTbo%2FtOPstDiSHCxjK8MkZXr1l8Pljap46TM2N6ZsXvLHEHKZL7ccbTQWsrq%2FXX4xfPQTMFIe3JYNvSELIIf4Lvqi3m25yQJbyvdjDibeS0QBZpfxzMSMOqXo8QGOqUBk37jgpsHRPB4qjFDGjEBZlE8gxZDBXIlADYPBL81x5cEQmJLm98r8gmJBsIDew4ugCdgZVs5NMXTVr91uXxMvu95acLS15KBuvy011dhG9El%2B0oHIIZe%2BBIyRIyHK85nzzpk6lczCv%2FzvmO1x9kvFwpA0JQ3r%2BFVS3KVH02CUUnS4kCU2lq0pTzZbWlAeFArDBg0ekmt72PYdFEgIjKVp%2B61GPAW&X-Amz-Signature=472ea13742e1564bf0e4563e1dcf2d08a6c09a629fe96e30fe8294e32a43f711&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
