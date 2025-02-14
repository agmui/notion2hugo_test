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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCO3STEB%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T050800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYEAldZWoMZnsPIiMtP64Rzh8uFw6lxW%2BmKzQ%2BBYuzAQIgE7bEDaEJfv7i1%2F7n4ntR62ko1UqfRAj6CkM3eq3zhAIq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDIYDYyWCoVil5HLemircA07cf5%2BJi3fk%2BvLYC8SLnJoLJDjmrMW8jo90N4o20qta7egfYfhhaVe1QwNzdkAH3cchtPR4lZqEmmvLtMzAPJsRxE1tv0FvSrHMZqV5YW3UBD%2FxHUrBULfDyMUS2bUGX3O8LaFzNLB4hPUTkweiwFYfF6ThGEWDuHEfY4Wm1Jj%2FhnM6nvWyW%2BrsFYDwJcSonfHjTz69Ynma9BM5PQHFgosKw4l%2FBvtvpYFmqWDACvguTR96CgE610leklRM9ixizxxUzKs22ldpqfBEJkQfteRCibZkiUGH5oTiRFkeh2U4ZkS8Beib7PvdHjJ85cLoNBynz2ee6nVgKqcr%2B9ocwZgerWkAoQxidfHpO5ISO%2F9nsrQEXp5zlnXAl3ID%2BaJaOk%2FD09%2Bt%2B8w96%2FE1xhXXSoL4mNZPIJyOI8CKbGKFOzo2S3UwWePo4HuYKtdYjE8qED%2BDyvpLhqutc8mzSzX4opfQReHou12jWrTL4vp8Jbssautjo98%2BRCkAT%2FHLQbjeL6MG51EQZPSl4cKo2S22nARNFk2eIx2VqqKLTpX6FqM9XX6LesFgYSx6w3wxUXZ%2FdH%2Bg%2FHMRJN3pzlstN51NBP72tMNUx6qHrQytnChNiOKruIu3uClpx3ZtaUTwMIrrur0GOqUB1MUjme7UiiSRSfhXX7G%2B801Poktt5jzF7imcmVnZwCjjxFfr477laaLB16hI3ankYsuqmXRgcR4v3uUy7Gs7z%2B%2FyR%2BodNPP0Zq2lfpeyVLlUJay7tcqIbZfPZLNhvb44G13bPLzPD3CfJcY5hBGEr%2Bw9VA3Zhjsl9s%2FwsrSLVfGGdxBS6MuQrMGmPJNlvMW9OWMXN7fBAXplUFNBXwyGSofMFRGq&X-Amz-Signature=35a4ab39403f5f619d6aaa357a1fc2e5a91af76c8c90d6bea0b8151313f2bd6b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCO3STEB%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T050800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYEAldZWoMZnsPIiMtP64Rzh8uFw6lxW%2BmKzQ%2BBYuzAQIgE7bEDaEJfv7i1%2F7n4ntR62ko1UqfRAj6CkM3eq3zhAIq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDIYDYyWCoVil5HLemircA07cf5%2BJi3fk%2BvLYC8SLnJoLJDjmrMW8jo90N4o20qta7egfYfhhaVe1QwNzdkAH3cchtPR4lZqEmmvLtMzAPJsRxE1tv0FvSrHMZqV5YW3UBD%2FxHUrBULfDyMUS2bUGX3O8LaFzNLB4hPUTkweiwFYfF6ThGEWDuHEfY4Wm1Jj%2FhnM6nvWyW%2BrsFYDwJcSonfHjTz69Ynma9BM5PQHFgosKw4l%2FBvtvpYFmqWDACvguTR96CgE610leklRM9ixizxxUzKs22ldpqfBEJkQfteRCibZkiUGH5oTiRFkeh2U4ZkS8Beib7PvdHjJ85cLoNBynz2ee6nVgKqcr%2B9ocwZgerWkAoQxidfHpO5ISO%2F9nsrQEXp5zlnXAl3ID%2BaJaOk%2FD09%2Bt%2B8w96%2FE1xhXXSoL4mNZPIJyOI8CKbGKFOzo2S3UwWePo4HuYKtdYjE8qED%2BDyvpLhqutc8mzSzX4opfQReHou12jWrTL4vp8Jbssautjo98%2BRCkAT%2FHLQbjeL6MG51EQZPSl4cKo2S22nARNFk2eIx2VqqKLTpX6FqM9XX6LesFgYSx6w3wxUXZ%2FdH%2Bg%2FHMRJN3pzlstN51NBP72tMNUx6qHrQytnChNiOKruIu3uClpx3ZtaUTwMIrrur0GOqUB1MUjme7UiiSRSfhXX7G%2B801Poktt5jzF7imcmVnZwCjjxFfr477laaLB16hI3ankYsuqmXRgcR4v3uUy7Gs7z%2B%2FyR%2BodNPP0Zq2lfpeyVLlUJay7tcqIbZfPZLNhvb44G13bPLzPD3CfJcY5hBGEr%2Bw9VA3Zhjsl9s%2FwsrSLVfGGdxBS6MuQrMGmPJNlvMW9OWMXN7fBAXplUFNBXwyGSofMFRGq&X-Amz-Signature=2721615ad408ecdf481255971f26cb8981c8bb258046939a1a7389ec35dfc7b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCO3STEB%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T050800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYEAldZWoMZnsPIiMtP64Rzh8uFw6lxW%2BmKzQ%2BBYuzAQIgE7bEDaEJfv7i1%2F7n4ntR62ko1UqfRAj6CkM3eq3zhAIq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDIYDYyWCoVil5HLemircA07cf5%2BJi3fk%2BvLYC8SLnJoLJDjmrMW8jo90N4o20qta7egfYfhhaVe1QwNzdkAH3cchtPR4lZqEmmvLtMzAPJsRxE1tv0FvSrHMZqV5YW3UBD%2FxHUrBULfDyMUS2bUGX3O8LaFzNLB4hPUTkweiwFYfF6ThGEWDuHEfY4Wm1Jj%2FhnM6nvWyW%2BrsFYDwJcSonfHjTz69Ynma9BM5PQHFgosKw4l%2FBvtvpYFmqWDACvguTR96CgE610leklRM9ixizxxUzKs22ldpqfBEJkQfteRCibZkiUGH5oTiRFkeh2U4ZkS8Beib7PvdHjJ85cLoNBynz2ee6nVgKqcr%2B9ocwZgerWkAoQxidfHpO5ISO%2F9nsrQEXp5zlnXAl3ID%2BaJaOk%2FD09%2Bt%2B8w96%2FE1xhXXSoL4mNZPIJyOI8CKbGKFOzo2S3UwWePo4HuYKtdYjE8qED%2BDyvpLhqutc8mzSzX4opfQReHou12jWrTL4vp8Jbssautjo98%2BRCkAT%2FHLQbjeL6MG51EQZPSl4cKo2S22nARNFk2eIx2VqqKLTpX6FqM9XX6LesFgYSx6w3wxUXZ%2FdH%2Bg%2FHMRJN3pzlstN51NBP72tMNUx6qHrQytnChNiOKruIu3uClpx3ZtaUTwMIrrur0GOqUB1MUjme7UiiSRSfhXX7G%2B801Poktt5jzF7imcmVnZwCjjxFfr477laaLB16hI3ankYsuqmXRgcR4v3uUy7Gs7z%2B%2FyR%2BodNPP0Zq2lfpeyVLlUJay7tcqIbZfPZLNhvb44G13bPLzPD3CfJcY5hBGEr%2Bw9VA3Zhjsl9s%2FwsrSLVfGGdxBS6MuQrMGmPJNlvMW9OWMXN7fBAXplUFNBXwyGSofMFRGq&X-Amz-Signature=271aacd697455ecc9b706040c1286bf37d6c21372f1bd7e8732a26801f16066f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
