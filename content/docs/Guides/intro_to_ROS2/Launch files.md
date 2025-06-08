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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USFJWV3H%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T070804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2e%2BfFw4vxrHUTlYnMDhBsB9yg%2B2R41q8tSid8rUie1QIgSA80liLVRP%2FOHTv3iowuEOlAgRIFSG0YVrwKduHxyzkqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLWmdPvJnvBNskPtfSrcAwA41%2B8BlOib7VaFD6giRQ2xMddRAttjl0kGI39mDuAYLkvVxwihgDJXSpZtAcbj8zpflYWzVkrIVZM7Qk2s89HDj6zeR7ZDwIpzcELklSeXhZ%2B6wVznd%2ByRF0gtr2uwRgA5yb42U%2BwJtHWG96lPfejyD2bl0NXqcvjhhp3AfAgHkLxVAOC%2F8tZG%2BvNT4Qde1LktwLtqjN10iqH0E9LM%2Bebfy84tcz6YAskCrZ5dSE9AVecVWNchX%2BsuJ1LSKMVR%2BaA9OEWuwuYIioP5QfDkPN8oBBI0cuhaUHEy9ofaY%2F%2FzETmzYzA9KzO2ZgV%2F2oJL07IX1YuOKZ5yxEPYN99xJGNneviquKB%2F99FsqnipDSeepSGDkG1Gl%2Byeq1lgDrAfrCSC38qJ%2BQ8W4gwWmwBJ6rQQz9zZ%2BOSVbpVK3aEP2SR0%2Bun5YXJoCG3eN2h7ZPNK1qFURTb%2BnvIC5AWmg2MLC%2FnONCetvgHL6Zt7e5bg4VbxP%2F2ZRoAmBXYbjOSfWdLv3S7e0AKHqGnWzFRtINh5w02OjrNTglP3yqpASYq%2BVy2GfcwNgm9l48q4T%2BRIrM%2BFxzGhszzF6zUzvmtTix38pcXTVyvKP0J1boWag4SHNuSeJgq71AczTGrF2u6yMP6wlMIGOqUBFedVUx3u8W0TMFsZiheiSDmo2N4JQLEsiSqSmJPAcU7K%2FKdyM2WBq7Hu%2FUi6b6L6kqdQXvO1DXRUcs%2FQSwP8WPJUxiT9PfPfo%2B4GMS%2BT89CU6rZF7GmcxifkoyL0Ls%2BEh7xY1ete0HLSbcxfbBWn%2FzboDTniqpvkolS4T0gejhI6JOf9kGyRHR68JzrJea1MIXzNTvHpkAvq%2F5sFdAaUxpI1Cz%2FE&X-Amz-Signature=3b5e1a9504f42932fd288464a59bedd283b2d03f5e80ed86638e2084f0f95f9d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USFJWV3H%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T070804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2e%2BfFw4vxrHUTlYnMDhBsB9yg%2B2R41q8tSid8rUie1QIgSA80liLVRP%2FOHTv3iowuEOlAgRIFSG0YVrwKduHxyzkqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLWmdPvJnvBNskPtfSrcAwA41%2B8BlOib7VaFD6giRQ2xMddRAttjl0kGI39mDuAYLkvVxwihgDJXSpZtAcbj8zpflYWzVkrIVZM7Qk2s89HDj6zeR7ZDwIpzcELklSeXhZ%2B6wVznd%2ByRF0gtr2uwRgA5yb42U%2BwJtHWG96lPfejyD2bl0NXqcvjhhp3AfAgHkLxVAOC%2F8tZG%2BvNT4Qde1LktwLtqjN10iqH0E9LM%2Bebfy84tcz6YAskCrZ5dSE9AVecVWNchX%2BsuJ1LSKMVR%2BaA9OEWuwuYIioP5QfDkPN8oBBI0cuhaUHEy9ofaY%2F%2FzETmzYzA9KzO2ZgV%2F2oJL07IX1YuOKZ5yxEPYN99xJGNneviquKB%2F99FsqnipDSeepSGDkG1Gl%2Byeq1lgDrAfrCSC38qJ%2BQ8W4gwWmwBJ6rQQz9zZ%2BOSVbpVK3aEP2SR0%2Bun5YXJoCG3eN2h7ZPNK1qFURTb%2BnvIC5AWmg2MLC%2FnONCetvgHL6Zt7e5bg4VbxP%2F2ZRoAmBXYbjOSfWdLv3S7e0AKHqGnWzFRtINh5w02OjrNTglP3yqpASYq%2BVy2GfcwNgm9l48q4T%2BRIrM%2BFxzGhszzF6zUzvmtTix38pcXTVyvKP0J1boWag4SHNuSeJgq71AczTGrF2u6yMP6wlMIGOqUBFedVUx3u8W0TMFsZiheiSDmo2N4JQLEsiSqSmJPAcU7K%2FKdyM2WBq7Hu%2FUi6b6L6kqdQXvO1DXRUcs%2FQSwP8WPJUxiT9PfPfo%2B4GMS%2BT89CU6rZF7GmcxifkoyL0Ls%2BEh7xY1ete0HLSbcxfbBWn%2FzboDTniqpvkolS4T0gejhI6JOf9kGyRHR68JzrJea1MIXzNTvHpkAvq%2F5sFdAaUxpI1Cz%2FE&X-Amz-Signature=8e93de88ab16456816a53a01f2c5a22b8e69bb9ea81bb13eb4c65ec1251812d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USFJWV3H%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T070804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2e%2BfFw4vxrHUTlYnMDhBsB9yg%2B2R41q8tSid8rUie1QIgSA80liLVRP%2FOHTv3iowuEOlAgRIFSG0YVrwKduHxyzkqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLWmdPvJnvBNskPtfSrcAwA41%2B8BlOib7VaFD6giRQ2xMddRAttjl0kGI39mDuAYLkvVxwihgDJXSpZtAcbj8zpflYWzVkrIVZM7Qk2s89HDj6zeR7ZDwIpzcELklSeXhZ%2B6wVznd%2ByRF0gtr2uwRgA5yb42U%2BwJtHWG96lPfejyD2bl0NXqcvjhhp3AfAgHkLxVAOC%2F8tZG%2BvNT4Qde1LktwLtqjN10iqH0E9LM%2Bebfy84tcz6YAskCrZ5dSE9AVecVWNchX%2BsuJ1LSKMVR%2BaA9OEWuwuYIioP5QfDkPN8oBBI0cuhaUHEy9ofaY%2F%2FzETmzYzA9KzO2ZgV%2F2oJL07IX1YuOKZ5yxEPYN99xJGNneviquKB%2F99FsqnipDSeepSGDkG1Gl%2Byeq1lgDrAfrCSC38qJ%2BQ8W4gwWmwBJ6rQQz9zZ%2BOSVbpVK3aEP2SR0%2Bun5YXJoCG3eN2h7ZPNK1qFURTb%2BnvIC5AWmg2MLC%2FnONCetvgHL6Zt7e5bg4VbxP%2F2ZRoAmBXYbjOSfWdLv3S7e0AKHqGnWzFRtINh5w02OjrNTglP3yqpASYq%2BVy2GfcwNgm9l48q4T%2BRIrM%2BFxzGhszzF6zUzvmtTix38pcXTVyvKP0J1boWag4SHNuSeJgq71AczTGrF2u6yMP6wlMIGOqUBFedVUx3u8W0TMFsZiheiSDmo2N4JQLEsiSqSmJPAcU7K%2FKdyM2WBq7Hu%2FUi6b6L6kqdQXvO1DXRUcs%2FQSwP8WPJUxiT9PfPfo%2B4GMS%2BT89CU6rZF7GmcxifkoyL0Ls%2BEh7xY1ete0HLSbcxfbBWn%2FzboDTniqpvkolS4T0gejhI6JOf9kGyRHR68JzrJea1MIXzNTvHpkAvq%2F5sFdAaUxpI1Cz%2FE&X-Amz-Signature=ffa812768621dc6933ff273c3507ce35dbb0e474bb4e77f27f9b3aec972a6dfc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
