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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YVKTOXA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIDqUYOgkarlQ8I7H25HleSrsgl8jrWvsywSPYofOXVnqAiEA6rASMwwU3yDGv2ZZRTteO9cfCcWObvLNobOktkDDtfwq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDNVsIm%2B4bANIBLtopircA7HywhqgsfQkNdrrW%2FTEcMJd89thKsUlLY%2FqZgns99Y2X%2FW0E6HhoAC3tV0ETmBKLc2TNKowJPZ3MOKHxGoOU3GMuuhdUHcm3UN80sypAsvXxfIjhxbLmldJ1II58dl%2F7lZ%2Fhr7wR8yhNDme4KJVx106twnHDs9cxweq18YttCz%2FpVYFlKpbU0Vna1E%2F712A5L%2B4C1s8ddLItTSajjjNSxRtByEuJfD%2Flo1qRO14SOMAvViip%2FLOv5%2FL9sDK3QsmxkemwSfYRPmh4sDABjelfliUMfpMe%2Bg1z%2BoH2Yb7hcvc2%2Bw9pvutsvUIxwc9AsK64Eqgi%2F4hD30ipaFx8ewkS9%2FE%2Fog3msPau3eVpjMPPM2IYh%2BXQgoYh74OTi1RschS77NmjqFUuAc89fJuSPPxod%2B7AVnyV5qv5B%2BUxBZuVyQsYYsgRikImRkl%2B%2FvmAYxCJw74TtQED9nqApUwlbu7giIdrab4Ze87hD3onXPoO6Cbxj9KQuqEFT%2FhjSABuJrQ75Q%2BLxXtcYe1DWexxrCmAB0hoDIfs9qNbf1LHATtCggOclme5gxrCMtlPZLhj%2FAbST%2BBP16FSdVaz5RYN2zi9NxZehTFQOSpNGOiBjcD2aYjd2lnfKa5fmKbxVOTMNS8jcQGOqUB0Dr8%2FROMOWAW71N94YOrYDpI12vbCDK8tnfYXNcSyyWFwo2sRk1C8%2FzH8bWcciqh%2Bf1G3kidrPyyO%2BXd0TPXB8T3khNmouKZEvktREhYf91EvBEiEQlAAbq6uWepLeOCHWif%2FcgG8Fqwu9Fuhncx50McPUhd3JH9z%2FNx1bKkVpAg%2FFYgjp7u03mMSlKABWyr%2FPV2UwAzJHQATmVYNRoALBlW%2BL9Z&X-Amz-Signature=b152775cab3f603f1efb0fa14166aa3faa0e96b88e54105d208db50e77f56b47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YVKTOXA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIDqUYOgkarlQ8I7H25HleSrsgl8jrWvsywSPYofOXVnqAiEA6rASMwwU3yDGv2ZZRTteO9cfCcWObvLNobOktkDDtfwq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDNVsIm%2B4bANIBLtopircA7HywhqgsfQkNdrrW%2FTEcMJd89thKsUlLY%2FqZgns99Y2X%2FW0E6HhoAC3tV0ETmBKLc2TNKowJPZ3MOKHxGoOU3GMuuhdUHcm3UN80sypAsvXxfIjhxbLmldJ1II58dl%2F7lZ%2Fhr7wR8yhNDme4KJVx106twnHDs9cxweq18YttCz%2FpVYFlKpbU0Vna1E%2F712A5L%2B4C1s8ddLItTSajjjNSxRtByEuJfD%2Flo1qRO14SOMAvViip%2FLOv5%2FL9sDK3QsmxkemwSfYRPmh4sDABjelfliUMfpMe%2Bg1z%2BoH2Yb7hcvc2%2Bw9pvutsvUIxwc9AsK64Eqgi%2F4hD30ipaFx8ewkS9%2FE%2Fog3msPau3eVpjMPPM2IYh%2BXQgoYh74OTi1RschS77NmjqFUuAc89fJuSPPxod%2B7AVnyV5qv5B%2BUxBZuVyQsYYsgRikImRkl%2B%2FvmAYxCJw74TtQED9nqApUwlbu7giIdrab4Ze87hD3onXPoO6Cbxj9KQuqEFT%2FhjSABuJrQ75Q%2BLxXtcYe1DWexxrCmAB0hoDIfs9qNbf1LHATtCggOclme5gxrCMtlPZLhj%2FAbST%2BBP16FSdVaz5RYN2zi9NxZehTFQOSpNGOiBjcD2aYjd2lnfKa5fmKbxVOTMNS8jcQGOqUB0Dr8%2FROMOWAW71N94YOrYDpI12vbCDK8tnfYXNcSyyWFwo2sRk1C8%2FzH8bWcciqh%2Bf1G3kidrPyyO%2BXd0TPXB8T3khNmouKZEvktREhYf91EvBEiEQlAAbq6uWepLeOCHWif%2FcgG8Fqwu9Fuhncx50McPUhd3JH9z%2FNx1bKkVpAg%2FFYgjp7u03mMSlKABWyr%2FPV2UwAzJHQATmVYNRoALBlW%2BL9Z&X-Amz-Signature=4ed71afaf6957eb47f36fbbc2fbb6513c955d789b76e37b7aab85d75414bdf6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YVKTOXA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIDqUYOgkarlQ8I7H25HleSrsgl8jrWvsywSPYofOXVnqAiEA6rASMwwU3yDGv2ZZRTteO9cfCcWObvLNobOktkDDtfwq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDNVsIm%2B4bANIBLtopircA7HywhqgsfQkNdrrW%2FTEcMJd89thKsUlLY%2FqZgns99Y2X%2FW0E6HhoAC3tV0ETmBKLc2TNKowJPZ3MOKHxGoOU3GMuuhdUHcm3UN80sypAsvXxfIjhxbLmldJ1II58dl%2F7lZ%2Fhr7wR8yhNDme4KJVx106twnHDs9cxweq18YttCz%2FpVYFlKpbU0Vna1E%2F712A5L%2B4C1s8ddLItTSajjjNSxRtByEuJfD%2Flo1qRO14SOMAvViip%2FLOv5%2FL9sDK3QsmxkemwSfYRPmh4sDABjelfliUMfpMe%2Bg1z%2BoH2Yb7hcvc2%2Bw9pvutsvUIxwc9AsK64Eqgi%2F4hD30ipaFx8ewkS9%2FE%2Fog3msPau3eVpjMPPM2IYh%2BXQgoYh74OTi1RschS77NmjqFUuAc89fJuSPPxod%2B7AVnyV5qv5B%2BUxBZuVyQsYYsgRikImRkl%2B%2FvmAYxCJw74TtQED9nqApUwlbu7giIdrab4Ze87hD3onXPoO6Cbxj9KQuqEFT%2FhjSABuJrQ75Q%2BLxXtcYe1DWexxrCmAB0hoDIfs9qNbf1LHATtCggOclme5gxrCMtlPZLhj%2FAbST%2BBP16FSdVaz5RYN2zi9NxZehTFQOSpNGOiBjcD2aYjd2lnfKa5fmKbxVOTMNS8jcQGOqUB0Dr8%2FROMOWAW71N94YOrYDpI12vbCDK8tnfYXNcSyyWFwo2sRk1C8%2FzH8bWcciqh%2Bf1G3kidrPyyO%2BXd0TPXB8T3khNmouKZEvktREhYf91EvBEiEQlAAbq6uWepLeOCHWif%2FcgG8Fqwu9Fuhncx50McPUhd3JH9z%2FNx1bKkVpAg%2FFYgjp7u03mMSlKABWyr%2FPV2UwAzJHQATmVYNRoALBlW%2BL9Z&X-Amz-Signature=9cb5793eb0ad9e009db213056f1137bbf16c4987c649670ae0e1f4865c50e3bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
