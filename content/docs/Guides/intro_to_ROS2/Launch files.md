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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TI7GXFP%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T110205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID1OpYHkH8l1%2BTu7cfqgqv1lvDdgsPMiI1l8ODT2oSFcAiEAry2hUtS0w3pgnlb6GOiGrBK1r9%2F%2BkPQq5mBBAxtyG4gq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDLew043BY3CHi2QICyrcA%2B%2FD3mGN1wvBbph40jSw7oZLFSOtK%2BBQeTagWy8whAllGTEfhOBDQBqXz2o4%2BuLxMXh27m2z1cX8QPfhjt60SjDtRZaIvEBnBvanNAUKuXHFQDnbPtC9V1y5rsUZYPdoEg5phCULFdsWE%2F%2FxdPSk23QlrmZk8IBliLFNF1ZOlAC8FDRPXuC%2FUrech9teYNl8FAiVVQkHOILpw%2FGkiPbqCVnT0OWZwFGY51m8AXIeNByIOOBu6FgkE8okvXRge1yY2M2Iuny3BqM4lAciuL9Px6hyWXCw7m5ApWeNW1RqxsXRWZoj7r5t%2B%2FSP1v%2FdsYZwtQFP1NrhDruQPGguxCpQgazV82SLvzmViKtT7E3wbl1SMFw%2F4eqiTyRk3Ekkv%2Fsa0BGPCKCv5ZiPFQx20e4TQ%2FE4bt6Bj2drSkp2ZqBaACU3mH%2FfHAnrKutPZCzP71OFKMYrPXrRDmG0RoNflHYbeCsQWwMhfolAib13zFT4X8wpRz272YcwctgzQv9WNftJsK0EGYGfceMgCWsQ97VqIdh5z1TWMWTwsS9Zb1T0S%2FBKoHQTfmtn4Nyf24wRsaHV%2FBQUQ2MLaUhiQVvljAAPV51lRDM%2FyS1I86lt6OR2ufH7ysS1Mlwci7d0zkhqMOX%2ByL8GOqUBu6poSk6gRaw%2BEO57HHaqQ3HOc0K2H6%2ByOmiv6Gt1nGKgZZ9M4VmIaGKwieDdMQ6t3CxlPtSUygvNz9BrMBjOSrY5l0D56xjVscMiW3JwykFBWMAJrGpb2CqCc0Jc%2FLRr6%2Bb%2BSIHb4ULzNdDXKNGrf4AmnDrGT%2B%2Be%2F2T7HbknPcqdEeZO8Rp6%2FqQs%2FWBJQ60Lz%2FVtmxu5UpslFE5IZPiVWgBUkWVB&X-Amz-Signature=e596066e939520b76c9524d2ba26b7292500ed4fa9b1c1c87537e81ba7e874b4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TI7GXFP%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T110205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID1OpYHkH8l1%2BTu7cfqgqv1lvDdgsPMiI1l8ODT2oSFcAiEAry2hUtS0w3pgnlb6GOiGrBK1r9%2F%2BkPQq5mBBAxtyG4gq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDLew043BY3CHi2QICyrcA%2B%2FD3mGN1wvBbph40jSw7oZLFSOtK%2BBQeTagWy8whAllGTEfhOBDQBqXz2o4%2BuLxMXh27m2z1cX8QPfhjt60SjDtRZaIvEBnBvanNAUKuXHFQDnbPtC9V1y5rsUZYPdoEg5phCULFdsWE%2F%2FxdPSk23QlrmZk8IBliLFNF1ZOlAC8FDRPXuC%2FUrech9teYNl8FAiVVQkHOILpw%2FGkiPbqCVnT0OWZwFGY51m8AXIeNByIOOBu6FgkE8okvXRge1yY2M2Iuny3BqM4lAciuL9Px6hyWXCw7m5ApWeNW1RqxsXRWZoj7r5t%2B%2FSP1v%2FdsYZwtQFP1NrhDruQPGguxCpQgazV82SLvzmViKtT7E3wbl1SMFw%2F4eqiTyRk3Ekkv%2Fsa0BGPCKCv5ZiPFQx20e4TQ%2FE4bt6Bj2drSkp2ZqBaACU3mH%2FfHAnrKutPZCzP71OFKMYrPXrRDmG0RoNflHYbeCsQWwMhfolAib13zFT4X8wpRz272YcwctgzQv9WNftJsK0EGYGfceMgCWsQ97VqIdh5z1TWMWTwsS9Zb1T0S%2FBKoHQTfmtn4Nyf24wRsaHV%2FBQUQ2MLaUhiQVvljAAPV51lRDM%2FyS1I86lt6OR2ufH7ysS1Mlwci7d0zkhqMOX%2ByL8GOqUBu6poSk6gRaw%2BEO57HHaqQ3HOc0K2H6%2ByOmiv6Gt1nGKgZZ9M4VmIaGKwieDdMQ6t3CxlPtSUygvNz9BrMBjOSrY5l0D56xjVscMiW3JwykFBWMAJrGpb2CqCc0Jc%2FLRr6%2Bb%2BSIHb4ULzNdDXKNGrf4AmnDrGT%2B%2Be%2F2T7HbknPcqdEeZO8Rp6%2FqQs%2FWBJQ60Lz%2FVtmxu5UpslFE5IZPiVWgBUkWVB&X-Amz-Signature=ac70186e082513725410356061fea214f9317f6bedfd7f7d0fef7ee278cc60bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TI7GXFP%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T110205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID1OpYHkH8l1%2BTu7cfqgqv1lvDdgsPMiI1l8ODT2oSFcAiEAry2hUtS0w3pgnlb6GOiGrBK1r9%2F%2BkPQq5mBBAxtyG4gq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDLew043BY3CHi2QICyrcA%2B%2FD3mGN1wvBbph40jSw7oZLFSOtK%2BBQeTagWy8whAllGTEfhOBDQBqXz2o4%2BuLxMXh27m2z1cX8QPfhjt60SjDtRZaIvEBnBvanNAUKuXHFQDnbPtC9V1y5rsUZYPdoEg5phCULFdsWE%2F%2FxdPSk23QlrmZk8IBliLFNF1ZOlAC8FDRPXuC%2FUrech9teYNl8FAiVVQkHOILpw%2FGkiPbqCVnT0OWZwFGY51m8AXIeNByIOOBu6FgkE8okvXRge1yY2M2Iuny3BqM4lAciuL9Px6hyWXCw7m5ApWeNW1RqxsXRWZoj7r5t%2B%2FSP1v%2FdsYZwtQFP1NrhDruQPGguxCpQgazV82SLvzmViKtT7E3wbl1SMFw%2F4eqiTyRk3Ekkv%2Fsa0BGPCKCv5ZiPFQx20e4TQ%2FE4bt6Bj2drSkp2ZqBaACU3mH%2FfHAnrKutPZCzP71OFKMYrPXrRDmG0RoNflHYbeCsQWwMhfolAib13zFT4X8wpRz272YcwctgzQv9WNftJsK0EGYGfceMgCWsQ97VqIdh5z1TWMWTwsS9Zb1T0S%2FBKoHQTfmtn4Nyf24wRsaHV%2FBQUQ2MLaUhiQVvljAAPV51lRDM%2FyS1I86lt6OR2ufH7ysS1Mlwci7d0zkhqMOX%2ByL8GOqUBu6poSk6gRaw%2BEO57HHaqQ3HOc0K2H6%2ByOmiv6Gt1nGKgZZ9M4VmIaGKwieDdMQ6t3CxlPtSUygvNz9BrMBjOSrY5l0D56xjVscMiW3JwykFBWMAJrGpb2CqCc0Jc%2FLRr6%2Bb%2BSIHb4ULzNdDXKNGrf4AmnDrGT%2B%2Be%2F2T7HbknPcqdEeZO8Rp6%2FqQs%2FWBJQ60Lz%2FVtmxu5UpslFE5IZPiVWgBUkWVB&X-Amz-Signature=a1458c777fd34cbcf36a6bd36ba6f3c28b4fd2a4a9198287faaadccc09a46378&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
