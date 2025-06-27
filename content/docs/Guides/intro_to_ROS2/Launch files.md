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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK32BTEN%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T041851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDskSG9wtK%2Fb7j5i3D3LnHlXGHZqgR6hVFWNxfEqB8okgIgY7FhXHSyQaLUfGU8kZCFqSCuWcnytTC1DlXhfEO%2B59cq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDKvQhf9Jgl%2BmYSda4ircA0Ji%2BwnbCsWgT5bUDj0vUjN0NCVJb5BIZTN2g7suSdb40IoqO0QRDKm%2FtcN9TEFiapRkM1wBE%2BiWB%2BSyWsCLOl8Q54dUuVHwQJELjBnav1FWIcXMjL3bNDB3sOZQ5GuVvEYkd69Qc4CUOUk4U4sO3FfvQx4dIMg3dUJ52ovSUITC4cjw1%2BelHpFDPdWHcHBHuvlbKKNP8%2FSSAIB%2Bvl7swxuYPOGOvVR%2BB0CVC1yxxLBOX3RAPqsvkW4MmAGMGRAGj65tvaWC9PD93AO34Vc1vDJlOlMovUK4X5bBEcN%2FJblLzE3KNxz9J6eKEOhqGU1exTJ0rwKARFUt0YwdfPM6vi4Wgj82iv1n74gGGwOwJLKXngQQmOzpBlatrg%2F%2BkSm8nfM3Pf%2Fsehkj2vqBHbDEbizf27D91hVbsU3TcaZlbVYyUwp%2FtuHbi0m9EYt5glngjwW8ICZpbf3%2FNkR5f58p9vM4T1unWt2d5hWwuq0%2FEVgE4kiDPc11iYK0FpYRiMBNMvzMUikKroldrJBg5C4aIWjPiAeN84lmXYz0%2Brr6%2Fnjn8RqdogSraf8qnEknTMTXNmsyq7hv6x6B1cRc9qf6AIVJPZydj%2Bmv04gKt70LDtcrhrMbPDD%2F0IVGoI4PMKmg%2BMIGOqUBc6ix9VNX%2FZYRRLkStrHzj93AHbYGgpvKtR%2B8uRF0KVoXWj4K6bCKJbRMlJsffqInILJog%2BGIg8Ggv6wPkesetmobbyPdIufw1U%2BTcJkikE%2BcfERFuKdNjovN5yOYpu8EHs7kTRFq8Cx4E1bR70TvxRFSpMluRtDzpfCK25ZY4XuGUnBQY5jOerpzrRjWgLw5IdGCMSFGxOZSws7hhBMJsZeEUX3I&X-Amz-Signature=2591ddb340467cc59fc2602c70da29b6c41d57c1ce845002fd2ba796583ad20a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK32BTEN%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T041851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDskSG9wtK%2Fb7j5i3D3LnHlXGHZqgR6hVFWNxfEqB8okgIgY7FhXHSyQaLUfGU8kZCFqSCuWcnytTC1DlXhfEO%2B59cq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDKvQhf9Jgl%2BmYSda4ircA0Ji%2BwnbCsWgT5bUDj0vUjN0NCVJb5BIZTN2g7suSdb40IoqO0QRDKm%2FtcN9TEFiapRkM1wBE%2BiWB%2BSyWsCLOl8Q54dUuVHwQJELjBnav1FWIcXMjL3bNDB3sOZQ5GuVvEYkd69Qc4CUOUk4U4sO3FfvQx4dIMg3dUJ52ovSUITC4cjw1%2BelHpFDPdWHcHBHuvlbKKNP8%2FSSAIB%2Bvl7swxuYPOGOvVR%2BB0CVC1yxxLBOX3RAPqsvkW4MmAGMGRAGj65tvaWC9PD93AO34Vc1vDJlOlMovUK4X5bBEcN%2FJblLzE3KNxz9J6eKEOhqGU1exTJ0rwKARFUt0YwdfPM6vi4Wgj82iv1n74gGGwOwJLKXngQQmOzpBlatrg%2F%2BkSm8nfM3Pf%2Fsehkj2vqBHbDEbizf27D91hVbsU3TcaZlbVYyUwp%2FtuHbi0m9EYt5glngjwW8ICZpbf3%2FNkR5f58p9vM4T1unWt2d5hWwuq0%2FEVgE4kiDPc11iYK0FpYRiMBNMvzMUikKroldrJBg5C4aIWjPiAeN84lmXYz0%2Brr6%2Fnjn8RqdogSraf8qnEknTMTXNmsyq7hv6x6B1cRc9qf6AIVJPZydj%2Bmv04gKt70LDtcrhrMbPDD%2F0IVGoI4PMKmg%2BMIGOqUBc6ix9VNX%2FZYRRLkStrHzj93AHbYGgpvKtR%2B8uRF0KVoXWj4K6bCKJbRMlJsffqInILJog%2BGIg8Ggv6wPkesetmobbyPdIufw1U%2BTcJkikE%2BcfERFuKdNjovN5yOYpu8EHs7kTRFq8Cx4E1bR70TvxRFSpMluRtDzpfCK25ZY4XuGUnBQY5jOerpzrRjWgLw5IdGCMSFGxOZSws7hhBMJsZeEUX3I&X-Amz-Signature=2c388f0a168f060870469af2cf54c647e1e41b2a309916a3e2bc20a2796d05c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK32BTEN%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T041851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDskSG9wtK%2Fb7j5i3D3LnHlXGHZqgR6hVFWNxfEqB8okgIgY7FhXHSyQaLUfGU8kZCFqSCuWcnytTC1DlXhfEO%2B59cq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDKvQhf9Jgl%2BmYSda4ircA0Ji%2BwnbCsWgT5bUDj0vUjN0NCVJb5BIZTN2g7suSdb40IoqO0QRDKm%2FtcN9TEFiapRkM1wBE%2BiWB%2BSyWsCLOl8Q54dUuVHwQJELjBnav1FWIcXMjL3bNDB3sOZQ5GuVvEYkd69Qc4CUOUk4U4sO3FfvQx4dIMg3dUJ52ovSUITC4cjw1%2BelHpFDPdWHcHBHuvlbKKNP8%2FSSAIB%2Bvl7swxuYPOGOvVR%2BB0CVC1yxxLBOX3RAPqsvkW4MmAGMGRAGj65tvaWC9PD93AO34Vc1vDJlOlMovUK4X5bBEcN%2FJblLzE3KNxz9J6eKEOhqGU1exTJ0rwKARFUt0YwdfPM6vi4Wgj82iv1n74gGGwOwJLKXngQQmOzpBlatrg%2F%2BkSm8nfM3Pf%2Fsehkj2vqBHbDEbizf27D91hVbsU3TcaZlbVYyUwp%2FtuHbi0m9EYt5glngjwW8ICZpbf3%2FNkR5f58p9vM4T1unWt2d5hWwuq0%2FEVgE4kiDPc11iYK0FpYRiMBNMvzMUikKroldrJBg5C4aIWjPiAeN84lmXYz0%2Brr6%2Fnjn8RqdogSraf8qnEknTMTXNmsyq7hv6x6B1cRc9qf6AIVJPZydj%2Bmv04gKt70LDtcrhrMbPDD%2F0IVGoI4PMKmg%2BMIGOqUBc6ix9VNX%2FZYRRLkStrHzj93AHbYGgpvKtR%2B8uRF0KVoXWj4K6bCKJbRMlJsffqInILJog%2BGIg8Ggv6wPkesetmobbyPdIufw1U%2BTcJkikE%2BcfERFuKdNjovN5yOYpu8EHs7kTRFq8Cx4E1bR70TvxRFSpMluRtDzpfCK25ZY4XuGUnBQY5jOerpzrRjWgLw5IdGCMSFGxOZSws7hhBMJsZeEUX3I&X-Amz-Signature=462164b8bf90cf305fbee19e457320258476217bfc25ecebc26f8a18fa815def&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
