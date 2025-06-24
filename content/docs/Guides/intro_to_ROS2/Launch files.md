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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKSX27QT%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T061410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIEeI5h4kSRNZ9MUOA8Vc%2FDUBDtXomQ2gUQ6vn4h78YknAiBCCOCHpoe6ErkltBwINAt1Eb3UoNwAxaDT2Z5VNjSDmSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMGoQOjjGa3Qoro9DyKtwDF8BWXu02Es9gLuiyUnEtDvrX4yNU61lQqtWI1axGQEYSHo2emcAz3kxnIXihIcHfPSQ5bxbJ22WO2jxZYEFSZE7YG262qEglzCET%2B9uJl1g%2FWDE579NVgz9pzo7G60ITo%2F0EhQqXjUmrNuJc%2BWuzYAzRpbk1zfbZBW%2FQJYMH4rBSp8uWjfh%2BfNf2PikfUa9%2B0bG7X%2B4T5fKO70fUsquo5R8aNBdK5NWsQt2F6diXzeAYW%2BH8uAblXRwW7QIePSV3AL2UwJtIiBnZwM4Uz1gVDcVgotKg6uVT0ZHnUK7skgp2PtK6Mm6pDrb2%2FkFSytSsLD2sc%2BtyewPmSN1qf5hVRQgxumYakYLlYaOrp41hfHhoryH3fKPPE%2BLlYuU8rOihVnIUH%2FsOxVTqOdiWO9h5fVpFBKv5aIkAGCreMTeD6rrYzbWPEwdtZoC5%2F36D%2FxXI2dyfF5Pb%2BMEWZSOxhZyfjNXC2sLeOMd%2Fz8euYXlhJrS%2FEbweCGiB128DZOzyJ49WfdSeJ7jSNDiqAj29eP5z%2BmEAQSPd%2BXy9WXwcXo44V%2BjVY%2Bl99UK2DQ5%2FoazjFINB6x0xuQphTSPc8G0Up58hTJv2VtwDA2eFx%2BG1TmhB3jNkjEK%2BsqEaEZ29WU8w%2FvbowgY6pgEygaZy9XEMRSwiaw7Ep9335pyZWGkir%2BjDOBxy7b89XATgcOCgU3VSHYmgfdZOxHEsefYBXJzjGFTDM6%2BjWC8ErQrzwn4deiNM8fF2f5JzOYxOH7j0OD6YTXiZI%2F0TxsNMrGwYFKQeLEpYSv94RYbiVcGS3UXaZLe6doIhFrPkxULvcQjYq5XXNKQrprFFVjQmesdZxSzrybo19guEpLoEn6lShpnm&X-Amz-Signature=c8ed94519e2abc85678336727625251121405770a31a7cf1884c66eb7c50019c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKSX27QT%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T061410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIEeI5h4kSRNZ9MUOA8Vc%2FDUBDtXomQ2gUQ6vn4h78YknAiBCCOCHpoe6ErkltBwINAt1Eb3UoNwAxaDT2Z5VNjSDmSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMGoQOjjGa3Qoro9DyKtwDF8BWXu02Es9gLuiyUnEtDvrX4yNU61lQqtWI1axGQEYSHo2emcAz3kxnIXihIcHfPSQ5bxbJ22WO2jxZYEFSZE7YG262qEglzCET%2B9uJl1g%2FWDE579NVgz9pzo7G60ITo%2F0EhQqXjUmrNuJc%2BWuzYAzRpbk1zfbZBW%2FQJYMH4rBSp8uWjfh%2BfNf2PikfUa9%2B0bG7X%2B4T5fKO70fUsquo5R8aNBdK5NWsQt2F6diXzeAYW%2BH8uAblXRwW7QIePSV3AL2UwJtIiBnZwM4Uz1gVDcVgotKg6uVT0ZHnUK7skgp2PtK6Mm6pDrb2%2FkFSytSsLD2sc%2BtyewPmSN1qf5hVRQgxumYakYLlYaOrp41hfHhoryH3fKPPE%2BLlYuU8rOihVnIUH%2FsOxVTqOdiWO9h5fVpFBKv5aIkAGCreMTeD6rrYzbWPEwdtZoC5%2F36D%2FxXI2dyfF5Pb%2BMEWZSOxhZyfjNXC2sLeOMd%2Fz8euYXlhJrS%2FEbweCGiB128DZOzyJ49WfdSeJ7jSNDiqAj29eP5z%2BmEAQSPd%2BXy9WXwcXo44V%2BjVY%2Bl99UK2DQ5%2FoazjFINB6x0xuQphTSPc8G0Up58hTJv2VtwDA2eFx%2BG1TmhB3jNkjEK%2BsqEaEZ29WU8w%2FvbowgY6pgEygaZy9XEMRSwiaw7Ep9335pyZWGkir%2BjDOBxy7b89XATgcOCgU3VSHYmgfdZOxHEsefYBXJzjGFTDM6%2BjWC8ErQrzwn4deiNM8fF2f5JzOYxOH7j0OD6YTXiZI%2F0TxsNMrGwYFKQeLEpYSv94RYbiVcGS3UXaZLe6doIhFrPkxULvcQjYq5XXNKQrprFFVjQmesdZxSzrybo19guEpLoEn6lShpnm&X-Amz-Signature=e55ac3855de5b33460a105a86c3cc9242fcbdb33e1925fe2d4a52fafa2e713b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKSX27QT%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T061410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIEeI5h4kSRNZ9MUOA8Vc%2FDUBDtXomQ2gUQ6vn4h78YknAiBCCOCHpoe6ErkltBwINAt1Eb3UoNwAxaDT2Z5VNjSDmSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMGoQOjjGa3Qoro9DyKtwDF8BWXu02Es9gLuiyUnEtDvrX4yNU61lQqtWI1axGQEYSHo2emcAz3kxnIXihIcHfPSQ5bxbJ22WO2jxZYEFSZE7YG262qEglzCET%2B9uJl1g%2FWDE579NVgz9pzo7G60ITo%2F0EhQqXjUmrNuJc%2BWuzYAzRpbk1zfbZBW%2FQJYMH4rBSp8uWjfh%2BfNf2PikfUa9%2B0bG7X%2B4T5fKO70fUsquo5R8aNBdK5NWsQt2F6diXzeAYW%2BH8uAblXRwW7QIePSV3AL2UwJtIiBnZwM4Uz1gVDcVgotKg6uVT0ZHnUK7skgp2PtK6Mm6pDrb2%2FkFSytSsLD2sc%2BtyewPmSN1qf5hVRQgxumYakYLlYaOrp41hfHhoryH3fKPPE%2BLlYuU8rOihVnIUH%2FsOxVTqOdiWO9h5fVpFBKv5aIkAGCreMTeD6rrYzbWPEwdtZoC5%2F36D%2FxXI2dyfF5Pb%2BMEWZSOxhZyfjNXC2sLeOMd%2Fz8euYXlhJrS%2FEbweCGiB128DZOzyJ49WfdSeJ7jSNDiqAj29eP5z%2BmEAQSPd%2BXy9WXwcXo44V%2BjVY%2Bl99UK2DQ5%2FoazjFINB6x0xuQphTSPc8G0Up58hTJv2VtwDA2eFx%2BG1TmhB3jNkjEK%2BsqEaEZ29WU8w%2FvbowgY6pgEygaZy9XEMRSwiaw7Ep9335pyZWGkir%2BjDOBxy7b89XATgcOCgU3VSHYmgfdZOxHEsefYBXJzjGFTDM6%2BjWC8ErQrzwn4deiNM8fF2f5JzOYxOH7j0OD6YTXiZI%2F0TxsNMrGwYFKQeLEpYSv94RYbiVcGS3UXaZLe6doIhFrPkxULvcQjYq5XXNKQrprFFVjQmesdZxSzrybo19guEpLoEn6lShpnm&X-Amz-Signature=e88f178c484b2de072e5d6e1aa9327bc33c97fc4d1f038e4473311f1db4959c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
