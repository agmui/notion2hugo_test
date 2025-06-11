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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMIRIQQU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T181229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCcDkrTR0VjYeYPZGHrdWW5Dkwmm42OiphR3tCaQaToKwIhANlm5ez%2B21Uggek3P%2BO23GCif8YDKhYiXdw5bwUZjFdpKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEUE44TlJcyYr8Cncq3APkAnrSG3dj4DntmJgqIu4pwWCkPVrV6%2Bsz6cwxL1kyDHCsrpux%2BmN0xGNXkb8Oumxssm%2F%2B5wDBnfFFHUmEGAGY2mtkQn2AwDafcAgsefaC22QC2uQu5RZlI2X84x9%2FigVEvnE3fWv0loWGBNqfwd4kfxgommzUp1eIsV0DU8D0fsZ4fciSc%2FFu%2FPRqabDJGerPKZtJaNWNbLDgO8hMPMRz35E%2BV5whmkcTedQJKQEV94YdzS0lCoY%2BEgyprM4i82yotzSyUKCvWS%2FgGZe%2FqkwPtIC26aPETeYuPKu52lnH08smVtGL1BOzPniNx7L1DITen9sNw9Rq4s1UDJeux3M5pxIFNw33RtRn%2BgPDb1AFSorH7WjZusQdFW8rftotNH5haXa7N0qOWb5DaHD4zd0m0NVczltEsJtTHL74vH0PVKAcLr5Uh9NB4S17%2FDoiZwcWIVG4yaAr%2B28zxfTlA4FT57789TjYWqpnPVhi9ZRZThKMUIl%2BdeIgSDiKd97Miho7Km2vpEVqBA6jSTBV1zFVClPuawYaXyua9212NsdLwmSengGTGgnGZYoFp%2BRgWS5bl1wTTPPuxU0Fcog5lfueG3A09P9h7NGQGzkeDUGzm7jPFVoFD9lRk%2FIf0jDt56bCBjqkAVa%2BBB9jB90DKTRAhd3RHsz%2F8V5%2BYQlrL5XzIw0Z7TdhahZavI3dUvIlo35hCF7aR%2FJoKaSaQcOWAs%2Bj9jzv0AXUls7LccWYUza7%2B7hzJGO0dSMeYSpsQFPGyk1DNmqUtx70bC2ZhmHFdTvG8hFLvDVuxLnb3IZIPyGfqgRx6xxtrzdRJ9B1g3sLptWQsPaVbU7MloiQ9mPyadG1w%2B%2B43yzkrXyd&X-Amz-Signature=02223be11b6dc42e7ff61c8c076faa7d060abdc54bc7eed0b11c4ca655c1ad0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMIRIQQU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T181229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCcDkrTR0VjYeYPZGHrdWW5Dkwmm42OiphR3tCaQaToKwIhANlm5ez%2B21Uggek3P%2BO23GCif8YDKhYiXdw5bwUZjFdpKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEUE44TlJcyYr8Cncq3APkAnrSG3dj4DntmJgqIu4pwWCkPVrV6%2Bsz6cwxL1kyDHCsrpux%2BmN0xGNXkb8Oumxssm%2F%2B5wDBnfFFHUmEGAGY2mtkQn2AwDafcAgsefaC22QC2uQu5RZlI2X84x9%2FigVEvnE3fWv0loWGBNqfwd4kfxgommzUp1eIsV0DU8D0fsZ4fciSc%2FFu%2FPRqabDJGerPKZtJaNWNbLDgO8hMPMRz35E%2BV5whmkcTedQJKQEV94YdzS0lCoY%2BEgyprM4i82yotzSyUKCvWS%2FgGZe%2FqkwPtIC26aPETeYuPKu52lnH08smVtGL1BOzPniNx7L1DITen9sNw9Rq4s1UDJeux3M5pxIFNw33RtRn%2BgPDb1AFSorH7WjZusQdFW8rftotNH5haXa7N0qOWb5DaHD4zd0m0NVczltEsJtTHL74vH0PVKAcLr5Uh9NB4S17%2FDoiZwcWIVG4yaAr%2B28zxfTlA4FT57789TjYWqpnPVhi9ZRZThKMUIl%2BdeIgSDiKd97Miho7Km2vpEVqBA6jSTBV1zFVClPuawYaXyua9212NsdLwmSengGTGgnGZYoFp%2BRgWS5bl1wTTPPuxU0Fcog5lfueG3A09P9h7NGQGzkeDUGzm7jPFVoFD9lRk%2FIf0jDt56bCBjqkAVa%2BBB9jB90DKTRAhd3RHsz%2F8V5%2BYQlrL5XzIw0Z7TdhahZavI3dUvIlo35hCF7aR%2FJoKaSaQcOWAs%2Bj9jzv0AXUls7LccWYUza7%2B7hzJGO0dSMeYSpsQFPGyk1DNmqUtx70bC2ZhmHFdTvG8hFLvDVuxLnb3IZIPyGfqgRx6xxtrzdRJ9B1g3sLptWQsPaVbU7MloiQ9mPyadG1w%2B%2B43yzkrXyd&X-Amz-Signature=55d3b752f996f49aa2030b47c84b5816633c9758bd1ddc705c71451b10c4e683&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMIRIQQU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T181229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCcDkrTR0VjYeYPZGHrdWW5Dkwmm42OiphR3tCaQaToKwIhANlm5ez%2B21Uggek3P%2BO23GCif8YDKhYiXdw5bwUZjFdpKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEUE44TlJcyYr8Cncq3APkAnrSG3dj4DntmJgqIu4pwWCkPVrV6%2Bsz6cwxL1kyDHCsrpux%2BmN0xGNXkb8Oumxssm%2F%2B5wDBnfFFHUmEGAGY2mtkQn2AwDafcAgsefaC22QC2uQu5RZlI2X84x9%2FigVEvnE3fWv0loWGBNqfwd4kfxgommzUp1eIsV0DU8D0fsZ4fciSc%2FFu%2FPRqabDJGerPKZtJaNWNbLDgO8hMPMRz35E%2BV5whmkcTedQJKQEV94YdzS0lCoY%2BEgyprM4i82yotzSyUKCvWS%2FgGZe%2FqkwPtIC26aPETeYuPKu52lnH08smVtGL1BOzPniNx7L1DITen9sNw9Rq4s1UDJeux3M5pxIFNw33RtRn%2BgPDb1AFSorH7WjZusQdFW8rftotNH5haXa7N0qOWb5DaHD4zd0m0NVczltEsJtTHL74vH0PVKAcLr5Uh9NB4S17%2FDoiZwcWIVG4yaAr%2B28zxfTlA4FT57789TjYWqpnPVhi9ZRZThKMUIl%2BdeIgSDiKd97Miho7Km2vpEVqBA6jSTBV1zFVClPuawYaXyua9212NsdLwmSengGTGgnGZYoFp%2BRgWS5bl1wTTPPuxU0Fcog5lfueG3A09P9h7NGQGzkeDUGzm7jPFVoFD9lRk%2FIf0jDt56bCBjqkAVa%2BBB9jB90DKTRAhd3RHsz%2F8V5%2BYQlrL5XzIw0Z7TdhahZavI3dUvIlo35hCF7aR%2FJoKaSaQcOWAs%2Bj9jzv0AXUls7LccWYUza7%2B7hzJGO0dSMeYSpsQFPGyk1DNmqUtx70bC2ZhmHFdTvG8hFLvDVuxLnb3IZIPyGfqgRx6xxtrzdRJ9B1g3sLptWQsPaVbU7MloiQ9mPyadG1w%2B%2B43yzkrXyd&X-Amz-Signature=b60f3713a642edc9938f1b327e3f28e4ac767306e79d64d2bc813154b7b9a952&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
