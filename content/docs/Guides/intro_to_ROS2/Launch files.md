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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWBWMAXK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAo3pXuoPau%2B8zrPfhfd1mqImNMdMGwbqM2ANPMHI%2BMfAiEAhu4iCqCgorX%2FURtIpClu6vX7wEDVDqpQmsnSiqlrC5MqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnaFHHEIndopDIKVSrcAz4M6GVJdR2hdbXTGEpHpntEPX2N5oSUPWVIdN4FgpnaP4JHeW6d9zKcXw%2B9l9LMmoVhxxwhUfJ8XD4zhkMsjw3IHznZXMkIM4Uo9uoicRyYWI4LTC4rfWe0yjTlb2Ex9dtgohCoYR0JQr1NdAggkgqWsrB%2BipVeEH5ZUPp19tcwJhnMRcnbE5UIGDrUHJtr17TKooExj%2FGzVvtoYxOojLBbCDPfTCOiU7xFeeldFtDjDQLNC1yGWpl%2F%2BYi4q3Xg9g%2BZUwubn6Epjik%2B47PNVmZuaBG2JYErtiLnXtM4lnLOLOYVk7yUlG1ZCBIM7ErulVexgj1OZyxjkMWGuQ1hbZ3nmMDGAO9gOYWO%2FDRU7kLVMLmicylCNEzef6FRfbDaVpkolQIZhwOIjROD%2BPZRQPP%2B0V7Dvzf9uLK1FRFshhPKchf67cna5QMtjNRjbyGnKK%2BNbg4tspYL7Spn03V7RFVwocyA%2Fbl%2B5Kwruo1YBV5dygFjurRe4DwHUaGNEaynTIcopbNk8QxY24TNnnGmtteJFteZOleUUxScveElkfL%2BrTkHxfc5qixE1WBfWdUElboP38Fb4R857OliKFwJpCfxDO8GICFgyKyYQ9e84DPC%2FUnLcsw%2F2Cx%2Bu4%2BHMMPBp8QGOqUB0wgcU7epQi%2Fm9gaevTvAXqUlEvIZmpgD11z%2F4lvkI8UPBMSqVf1isn9D3DGJsB2x5H0hwsP2DQHEgu4o7Xwd%2BpRPjgA7XE6HuqGZUrOvjII2cWPsHhI7%2BN%2FiEmCrSHzUia03gvW0cnEw5AGV%2FwPxfKUMFNPyyxeW0DokBYApZJhYac%2Fj7gUiK1nSbaJIt0AKZ%2F3pBIuOARSljJ0HcGeJ3ifR5HTO&X-Amz-Signature=9369082db8d45a62cff223c57a63d49dd82ad3ce23f6e773cccb9b0de3a1248e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWBWMAXK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAo3pXuoPau%2B8zrPfhfd1mqImNMdMGwbqM2ANPMHI%2BMfAiEAhu4iCqCgorX%2FURtIpClu6vX7wEDVDqpQmsnSiqlrC5MqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnaFHHEIndopDIKVSrcAz4M6GVJdR2hdbXTGEpHpntEPX2N5oSUPWVIdN4FgpnaP4JHeW6d9zKcXw%2B9l9LMmoVhxxwhUfJ8XD4zhkMsjw3IHznZXMkIM4Uo9uoicRyYWI4LTC4rfWe0yjTlb2Ex9dtgohCoYR0JQr1NdAggkgqWsrB%2BipVeEH5ZUPp19tcwJhnMRcnbE5UIGDrUHJtr17TKooExj%2FGzVvtoYxOojLBbCDPfTCOiU7xFeeldFtDjDQLNC1yGWpl%2F%2BYi4q3Xg9g%2BZUwubn6Epjik%2B47PNVmZuaBG2JYErtiLnXtM4lnLOLOYVk7yUlG1ZCBIM7ErulVexgj1OZyxjkMWGuQ1hbZ3nmMDGAO9gOYWO%2FDRU7kLVMLmicylCNEzef6FRfbDaVpkolQIZhwOIjROD%2BPZRQPP%2B0V7Dvzf9uLK1FRFshhPKchf67cna5QMtjNRjbyGnKK%2BNbg4tspYL7Spn03V7RFVwocyA%2Fbl%2B5Kwruo1YBV5dygFjurRe4DwHUaGNEaynTIcopbNk8QxY24TNnnGmtteJFteZOleUUxScveElkfL%2BrTkHxfc5qixE1WBfWdUElboP38Fb4R857OliKFwJpCfxDO8GICFgyKyYQ9e84DPC%2FUnLcsw%2F2Cx%2Bu4%2BHMMPBp8QGOqUB0wgcU7epQi%2Fm9gaevTvAXqUlEvIZmpgD11z%2F4lvkI8UPBMSqVf1isn9D3DGJsB2x5H0hwsP2DQHEgu4o7Xwd%2BpRPjgA7XE6HuqGZUrOvjII2cWPsHhI7%2BN%2FiEmCrSHzUia03gvW0cnEw5AGV%2FwPxfKUMFNPyyxeW0DokBYApZJhYac%2Fj7gUiK1nSbaJIt0AKZ%2F3pBIuOARSljJ0HcGeJ3ifR5HTO&X-Amz-Signature=b24ba832bb4cc373da241866b0854cdd5415ed11c64b94fee17f6916d39bc62e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWBWMAXK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAo3pXuoPau%2B8zrPfhfd1mqImNMdMGwbqM2ANPMHI%2BMfAiEAhu4iCqCgorX%2FURtIpClu6vX7wEDVDqpQmsnSiqlrC5MqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnaFHHEIndopDIKVSrcAz4M6GVJdR2hdbXTGEpHpntEPX2N5oSUPWVIdN4FgpnaP4JHeW6d9zKcXw%2B9l9LMmoVhxxwhUfJ8XD4zhkMsjw3IHznZXMkIM4Uo9uoicRyYWI4LTC4rfWe0yjTlb2Ex9dtgohCoYR0JQr1NdAggkgqWsrB%2BipVeEH5ZUPp19tcwJhnMRcnbE5UIGDrUHJtr17TKooExj%2FGzVvtoYxOojLBbCDPfTCOiU7xFeeldFtDjDQLNC1yGWpl%2F%2BYi4q3Xg9g%2BZUwubn6Epjik%2B47PNVmZuaBG2JYErtiLnXtM4lnLOLOYVk7yUlG1ZCBIM7ErulVexgj1OZyxjkMWGuQ1hbZ3nmMDGAO9gOYWO%2FDRU7kLVMLmicylCNEzef6FRfbDaVpkolQIZhwOIjROD%2BPZRQPP%2B0V7Dvzf9uLK1FRFshhPKchf67cna5QMtjNRjbyGnKK%2BNbg4tspYL7Spn03V7RFVwocyA%2Fbl%2B5Kwruo1YBV5dygFjurRe4DwHUaGNEaynTIcopbNk8QxY24TNnnGmtteJFteZOleUUxScveElkfL%2BrTkHxfc5qixE1WBfWdUElboP38Fb4R857OliKFwJpCfxDO8GICFgyKyYQ9e84DPC%2FUnLcsw%2F2Cx%2Bu4%2BHMMPBp8QGOqUB0wgcU7epQi%2Fm9gaevTvAXqUlEvIZmpgD11z%2F4lvkI8UPBMSqVf1isn9D3DGJsB2x5H0hwsP2DQHEgu4o7Xwd%2BpRPjgA7XE6HuqGZUrOvjII2cWPsHhI7%2BN%2FiEmCrSHzUia03gvW0cnEw5AGV%2FwPxfKUMFNPyyxeW0DokBYApZJhYac%2Fj7gUiK1nSbaJIt0AKZ%2F3pBIuOARSljJ0HcGeJ3ifR5HTO&X-Amz-Signature=ee8bf4c844ffd88b06b72b7cbd45497ede712c5e19b80afa7defa83c9b0d0a4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
