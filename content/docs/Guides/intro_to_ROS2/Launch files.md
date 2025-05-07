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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DJRNFRV%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T004123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyZAp91PYQx0ObeNlfbDJTG2sm57WsRao83zt07iMLggIgL6BT2PEJ4OpFI8LDYJaSKSdU7sScRFTvRErBn%2FO4NyYq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMRnUBVjXdK%2Baf9zqircA07PrtAsyYZeTiCUojIVr9QvKgcUOqYY9735sh3rTA3j81VXPzfLov4H8yXBBOqbD6EwO9IMrUgSsg3AZ6Ysrm8RD4%2F0zPvJKONieiSWyWyOTa%2FIg7%2B7rJxDD4V1Byve%2F9u%2B2nA4mGIS9hLs7CYWx352CwLef6c1dHFqkhK1fUID%2B002Zhf6J%2FvhcRSM%2F0IWuawQJ2LPSqIGUto1yAgrEAw6yGw8rHo0dYq5%2FdqqZs0AbV0S1LC%2FbFwM95tXJ8AfPURvXPqDa2Kja1GjzBufuCrPT%2FHu1I91OtxV6Q4c9zZyIDmjkAZFLN0pvBNCV6RbWFU7eCOGDyRDt%2BuLpAGKWegTgl2uENj0q06cTcJWrsGQRLrK336b5lPDeZzs98CFvdJBoY9%2F1IFtsQ7LI714W9VT6Izy%2By32csG0Em%2FgqJpcSRDmHiRXvQp3EvIq8%2F7EFtDTpGIqPDIj3d7uy4G%2FIMPKOg9u0X9%2FsoiG0tiNSF2vL2JX3RRgHzlg64z1qXEUr08dixtUM8P4%2B4qacVx%2FxYzS8p6O7fbuCcprj3Jm2QOOOvwn0%2F261vMChIHEDRrTotI%2Bj8Sdpsh%2BqlYVbHLEUBzyM5kDiMehl2MwSlLTiV4OVcMfcjuV%2BYnEmzDPMJ6v6sAGOqUBHv0bvmcudr5nuwX3di4hsWq%2FNRxtJKu3hh4v5aiHaBFs1fy3IN7o1m3Xv2oJByXPlYQVcNVaYrUlAF43gdgRe%2BGvLqsXimZ3Rh6qXZgKXgImGvNz3oxkZxBSrAGYgjRbvyXPPYrZffkfKipeaVsTGwfKVyi0Zi0d%2FpQp2K9UBm93JxulJTvnWmT68LHcVtIkYGWxblKR4sJdi02NgkMojKG6OnHg&X-Amz-Signature=4c8f7815f81e5f5590230fc60b64a4f240eb9ac7dc275dd9a04acf28dda14411&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DJRNFRV%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T004123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyZAp91PYQx0ObeNlfbDJTG2sm57WsRao83zt07iMLggIgL6BT2PEJ4OpFI8LDYJaSKSdU7sScRFTvRErBn%2FO4NyYq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMRnUBVjXdK%2Baf9zqircA07PrtAsyYZeTiCUojIVr9QvKgcUOqYY9735sh3rTA3j81VXPzfLov4H8yXBBOqbD6EwO9IMrUgSsg3AZ6Ysrm8RD4%2F0zPvJKONieiSWyWyOTa%2FIg7%2B7rJxDD4V1Byve%2F9u%2B2nA4mGIS9hLs7CYWx352CwLef6c1dHFqkhK1fUID%2B002Zhf6J%2FvhcRSM%2F0IWuawQJ2LPSqIGUto1yAgrEAw6yGw8rHo0dYq5%2FdqqZs0AbV0S1LC%2FbFwM95tXJ8AfPURvXPqDa2Kja1GjzBufuCrPT%2FHu1I91OtxV6Q4c9zZyIDmjkAZFLN0pvBNCV6RbWFU7eCOGDyRDt%2BuLpAGKWegTgl2uENj0q06cTcJWrsGQRLrK336b5lPDeZzs98CFvdJBoY9%2F1IFtsQ7LI714W9VT6Izy%2By32csG0Em%2FgqJpcSRDmHiRXvQp3EvIq8%2F7EFtDTpGIqPDIj3d7uy4G%2FIMPKOg9u0X9%2FsoiG0tiNSF2vL2JX3RRgHzlg64z1qXEUr08dixtUM8P4%2B4qacVx%2FxYzS8p6O7fbuCcprj3Jm2QOOOvwn0%2F261vMChIHEDRrTotI%2Bj8Sdpsh%2BqlYVbHLEUBzyM5kDiMehl2MwSlLTiV4OVcMfcjuV%2BYnEmzDPMJ6v6sAGOqUBHv0bvmcudr5nuwX3di4hsWq%2FNRxtJKu3hh4v5aiHaBFs1fy3IN7o1m3Xv2oJByXPlYQVcNVaYrUlAF43gdgRe%2BGvLqsXimZ3Rh6qXZgKXgImGvNz3oxkZxBSrAGYgjRbvyXPPYrZffkfKipeaVsTGwfKVyi0Zi0d%2FpQp2K9UBm93JxulJTvnWmT68LHcVtIkYGWxblKR4sJdi02NgkMojKG6OnHg&X-Amz-Signature=6b3ec9b21e61c42ff698842fa8d1f717724ae42b843c9dea0168712749970bee&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DJRNFRV%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T004123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyZAp91PYQx0ObeNlfbDJTG2sm57WsRao83zt07iMLggIgL6BT2PEJ4OpFI8LDYJaSKSdU7sScRFTvRErBn%2FO4NyYq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMRnUBVjXdK%2Baf9zqircA07PrtAsyYZeTiCUojIVr9QvKgcUOqYY9735sh3rTA3j81VXPzfLov4H8yXBBOqbD6EwO9IMrUgSsg3AZ6Ysrm8RD4%2F0zPvJKONieiSWyWyOTa%2FIg7%2B7rJxDD4V1Byve%2F9u%2B2nA4mGIS9hLs7CYWx352CwLef6c1dHFqkhK1fUID%2B002Zhf6J%2FvhcRSM%2F0IWuawQJ2LPSqIGUto1yAgrEAw6yGw8rHo0dYq5%2FdqqZs0AbV0S1LC%2FbFwM95tXJ8AfPURvXPqDa2Kja1GjzBufuCrPT%2FHu1I91OtxV6Q4c9zZyIDmjkAZFLN0pvBNCV6RbWFU7eCOGDyRDt%2BuLpAGKWegTgl2uENj0q06cTcJWrsGQRLrK336b5lPDeZzs98CFvdJBoY9%2F1IFtsQ7LI714W9VT6Izy%2By32csG0Em%2FgqJpcSRDmHiRXvQp3EvIq8%2F7EFtDTpGIqPDIj3d7uy4G%2FIMPKOg9u0X9%2FsoiG0tiNSF2vL2JX3RRgHzlg64z1qXEUr08dixtUM8P4%2B4qacVx%2FxYzS8p6O7fbuCcprj3Jm2QOOOvwn0%2F261vMChIHEDRrTotI%2Bj8Sdpsh%2BqlYVbHLEUBzyM5kDiMehl2MwSlLTiV4OVcMfcjuV%2BYnEmzDPMJ6v6sAGOqUBHv0bvmcudr5nuwX3di4hsWq%2FNRxtJKu3hh4v5aiHaBFs1fy3IN7o1m3Xv2oJByXPlYQVcNVaYrUlAF43gdgRe%2BGvLqsXimZ3Rh6qXZgKXgImGvNz3oxkZxBSrAGYgjRbvyXPPYrZffkfKipeaVsTGwfKVyi0Zi0d%2FpQp2K9UBm93JxulJTvnWmT68LHcVtIkYGWxblKR4sJdi02NgkMojKG6OnHg&X-Amz-Signature=734d19811f9e4293e8666eb9d6ba1a8ced1fd55c579e28d94582a2cff99b7a80&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
