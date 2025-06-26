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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UE3WCQI%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T170847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIF2WRQg0S9NrPWqB%2F2Ty%2FEz0ah4kOHxP8ARdSk46HBQJAiEAxZAjdsfVWLJlXggiTcgz54mtHY0%2BCcWAuFQgJvR52xgq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDOFzot1D%2BXssT8rRdyrcA8otstqbWtZsFvi2FcdegPnEJ3ZBtnq%2FWVkGjCjK77b8oapEiGbOpgdSbuWeeTxZ44mikl3oM6UkTTrg8NgdNJAKlXinNSBg4dU5VdBKTpKjB%2Bkajfo3GXm5GwbUzjkoxDxCOhV5WITFhwVA4gS79z9ns3p518AO41U9iyl8nDl1ZlvIlqR1VAQOK5%2FnO2JwtqNyNkmdd0zQtKMRGpYs9Z6VAiVGkCjDPNB%2FF%2Frb3El0wksuMmRqxtVrEee0BlDf%2FWk9kHCmnwNe6hFhnVYwSS0w9mxhRTHR8a323VhrG%2FqZRfxMLd%2B%2BgS5JSBkQYfKeqUTcmtU%2Bl9cbhOvrsb2SZrnkgE01OciQcM3NvxyW07mzXj7jnnMpmECCECFfkSptnCmrJOfbllUs9q6d6lS8%2Fs95%2FyLEUaePOl06by%2F8WhCjadQp7wRZdOns%2BpEx6J6%2FseOsbFCpsobwN6Nx1d5cUO%2BAYf3VOTw2WQwt4Uq%2BNnept4LsHTh5SN9i8BxyCpZ60L0FD0wv4AmYfXl0okP70kJa3LrpOsMFXPClMEBKlV02SvqbxBgxAwLUm12cHhyogTngScp4apf5SL%2BcE9WjdJfg0IimWZFe%2BvYdIoWvSjtruVKm2luqv03PWFRdMMad9cIGOqUBPvfFQHL3PWsa63puHus%2B0MJOU0RSt4ik6K8B5%2FgwNB7mt7VO3Xc6rxDeRzCjOsaNLV4u6FMjmkuNL4nNLNvGjVNOV%2BWX5zNl2LF%2F6CDordUjW1Q9SxNRM75DIuK1NtY9wlpIrvM5g%2FbF3Ux9lpN5knZwwdWjv9kSMCLsNEVnED9NZyfKHJyjB38DSWliRpGH8stwAOM7txk38GFM%2BIyDRWRm44UA&X-Amz-Signature=b0c57606c0a921e6bad2bf92bdb4d95fa579002f5c5592a91f1b72a813cd6a06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UE3WCQI%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T170847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIF2WRQg0S9NrPWqB%2F2Ty%2FEz0ah4kOHxP8ARdSk46HBQJAiEAxZAjdsfVWLJlXggiTcgz54mtHY0%2BCcWAuFQgJvR52xgq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDOFzot1D%2BXssT8rRdyrcA8otstqbWtZsFvi2FcdegPnEJ3ZBtnq%2FWVkGjCjK77b8oapEiGbOpgdSbuWeeTxZ44mikl3oM6UkTTrg8NgdNJAKlXinNSBg4dU5VdBKTpKjB%2Bkajfo3GXm5GwbUzjkoxDxCOhV5WITFhwVA4gS79z9ns3p518AO41U9iyl8nDl1ZlvIlqR1VAQOK5%2FnO2JwtqNyNkmdd0zQtKMRGpYs9Z6VAiVGkCjDPNB%2FF%2Frb3El0wksuMmRqxtVrEee0BlDf%2FWk9kHCmnwNe6hFhnVYwSS0w9mxhRTHR8a323VhrG%2FqZRfxMLd%2B%2BgS5JSBkQYfKeqUTcmtU%2Bl9cbhOvrsb2SZrnkgE01OciQcM3NvxyW07mzXj7jnnMpmECCECFfkSptnCmrJOfbllUs9q6d6lS8%2Fs95%2FyLEUaePOl06by%2F8WhCjadQp7wRZdOns%2BpEx6J6%2FseOsbFCpsobwN6Nx1d5cUO%2BAYf3VOTw2WQwt4Uq%2BNnept4LsHTh5SN9i8BxyCpZ60L0FD0wv4AmYfXl0okP70kJa3LrpOsMFXPClMEBKlV02SvqbxBgxAwLUm12cHhyogTngScp4apf5SL%2BcE9WjdJfg0IimWZFe%2BvYdIoWvSjtruVKm2luqv03PWFRdMMad9cIGOqUBPvfFQHL3PWsa63puHus%2B0MJOU0RSt4ik6K8B5%2FgwNB7mt7VO3Xc6rxDeRzCjOsaNLV4u6FMjmkuNL4nNLNvGjVNOV%2BWX5zNl2LF%2F6CDordUjW1Q9SxNRM75DIuK1NtY9wlpIrvM5g%2FbF3Ux9lpN5knZwwdWjv9kSMCLsNEVnED9NZyfKHJyjB38DSWliRpGH8stwAOM7txk38GFM%2BIyDRWRm44UA&X-Amz-Signature=0460b3431f6b0ea79ad634cfab65e279a301bde754ebc9172f7e2486c328946e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UE3WCQI%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T170847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIF2WRQg0S9NrPWqB%2F2Ty%2FEz0ah4kOHxP8ARdSk46HBQJAiEAxZAjdsfVWLJlXggiTcgz54mtHY0%2BCcWAuFQgJvR52xgq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDOFzot1D%2BXssT8rRdyrcA8otstqbWtZsFvi2FcdegPnEJ3ZBtnq%2FWVkGjCjK77b8oapEiGbOpgdSbuWeeTxZ44mikl3oM6UkTTrg8NgdNJAKlXinNSBg4dU5VdBKTpKjB%2Bkajfo3GXm5GwbUzjkoxDxCOhV5WITFhwVA4gS79z9ns3p518AO41U9iyl8nDl1ZlvIlqR1VAQOK5%2FnO2JwtqNyNkmdd0zQtKMRGpYs9Z6VAiVGkCjDPNB%2FF%2Frb3El0wksuMmRqxtVrEee0BlDf%2FWk9kHCmnwNe6hFhnVYwSS0w9mxhRTHR8a323VhrG%2FqZRfxMLd%2B%2BgS5JSBkQYfKeqUTcmtU%2Bl9cbhOvrsb2SZrnkgE01OciQcM3NvxyW07mzXj7jnnMpmECCECFfkSptnCmrJOfbllUs9q6d6lS8%2Fs95%2FyLEUaePOl06by%2F8WhCjadQp7wRZdOns%2BpEx6J6%2FseOsbFCpsobwN6Nx1d5cUO%2BAYf3VOTw2WQwt4Uq%2BNnept4LsHTh5SN9i8BxyCpZ60L0FD0wv4AmYfXl0okP70kJa3LrpOsMFXPClMEBKlV02SvqbxBgxAwLUm12cHhyogTngScp4apf5SL%2BcE9WjdJfg0IimWZFe%2BvYdIoWvSjtruVKm2luqv03PWFRdMMad9cIGOqUBPvfFQHL3PWsa63puHus%2B0MJOU0RSt4ik6K8B5%2FgwNB7mt7VO3Xc6rxDeRzCjOsaNLV4u6FMjmkuNL4nNLNvGjVNOV%2BWX5zNl2LF%2F6CDordUjW1Q9SxNRM75DIuK1NtY9wlpIrvM5g%2FbF3Ux9lpN5knZwwdWjv9kSMCLsNEVnED9NZyfKHJyjB38DSWliRpGH8stwAOM7txk38GFM%2BIyDRWRm44UA&X-Amz-Signature=b76c03ac33754d0722e3e73172162c11ee02c265c7215aa0920c5d91f9353f47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
