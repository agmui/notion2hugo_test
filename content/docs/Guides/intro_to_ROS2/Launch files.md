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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU2G3EGL%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T140719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtVTuTh56F83XvJg%2BwwkfxqJ8ffd7vfY7p4cNzBEQ%2BgAiEA4RnhFys8ksCLT%2Fqxp4F8vPAd5DJnG%2F85JF1QY4Ww8OoqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmUHka4omysC9%2BThSrcA5MRROBj2a9Eab72XXO1zjRJeJQ96QzHziO%2FMX6KYWdr3GB%2F8dz99zWdmVQqIt%2FFRqxvPoe10mLtX%2BS0on1pqpIZW6%2B8L0LmuoKDclkDaHLSemhSx4BOv1r3NHVCUDveszPiTfWWzS%2F%2BoquAECXdZ4rm5p0jbYFKjyFFt%2BUmnv80xc0yuougoaoHuVxJYbgqHe93COxUPPD67sePTVNTBNwyG6z7Ql8XTz0%2BJw7Wcnxn%2B3TrSqtPBd0WG5avuq4NdWzNAlfqCsXFbS7DdK64eOA9%2B6FKpG2HD%2BQE75DAEBvD9UD79Qh%2BhLAxTJ4xPp0kT2qNKNVTa%2B2Jc62kqGDwpGUWwv8bp0kYzO%2BzkgNdYHOUlNlVA89%2BuXE%2BgBGy9RYV1GavyBoMi6MOUmONlAQKqokXM4GKi5bCdaCTJTrTUUJuna1cHI9e1Kv%2FEUfDCw6l7Mvag2nGMI17BObFttwyTZ%2BOUSZgcoZ1o%2BViRkIoCLNFs0FVzBr67IIBL95Adc4jKnaqjhnWAqApd6iKxuSzVHVESgirGtSCisiwM4q864unUUWsCdFDRZSCY28%2FkCIIaW9NzAf9vdsaa8YFI2isLcxWYeKXDYuxgAdhmCQj3O2RH4b%2FEQjb69VlQQXrMPvWhMMGOqUBCv%2FmRZswEOKI%2Bef2bwUKjHsrM2UI2VfRsbQ5PtZVtkm0GP1xd29SFp3PKwy6C3Uxb%2Fs%2Bc%2FsG4z96ioEEdxSfqqLTUNXUR15hkvBBkl3Wnw2ao5Xjxo1fWvipUDJeKbcZPyQu3RdcWTBviTI5jNSRATnl%2F8wdDkOXff%2FPDYC0MHJqojkMp2eXadxZEK1pIyrUWGUi%2F%2BRbsmsLDFVkO2PvQDgRth2k&X-Amz-Signature=11f87787d6ccdc72fca29d933746fed2cd5a504a118e0d9c05330a971b21f58c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU2G3EGL%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T140719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtVTuTh56F83XvJg%2BwwkfxqJ8ffd7vfY7p4cNzBEQ%2BgAiEA4RnhFys8ksCLT%2Fqxp4F8vPAd5DJnG%2F85JF1QY4Ww8OoqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmUHka4omysC9%2BThSrcA5MRROBj2a9Eab72XXO1zjRJeJQ96QzHziO%2FMX6KYWdr3GB%2F8dz99zWdmVQqIt%2FFRqxvPoe10mLtX%2BS0on1pqpIZW6%2B8L0LmuoKDclkDaHLSemhSx4BOv1r3NHVCUDveszPiTfWWzS%2F%2BoquAECXdZ4rm5p0jbYFKjyFFt%2BUmnv80xc0yuougoaoHuVxJYbgqHe93COxUPPD67sePTVNTBNwyG6z7Ql8XTz0%2BJw7Wcnxn%2B3TrSqtPBd0WG5avuq4NdWzNAlfqCsXFbS7DdK64eOA9%2B6FKpG2HD%2BQE75DAEBvD9UD79Qh%2BhLAxTJ4xPp0kT2qNKNVTa%2B2Jc62kqGDwpGUWwv8bp0kYzO%2BzkgNdYHOUlNlVA89%2BuXE%2BgBGy9RYV1GavyBoMi6MOUmONlAQKqokXM4GKi5bCdaCTJTrTUUJuna1cHI9e1Kv%2FEUfDCw6l7Mvag2nGMI17BObFttwyTZ%2BOUSZgcoZ1o%2BViRkIoCLNFs0FVzBr67IIBL95Adc4jKnaqjhnWAqApd6iKxuSzVHVESgirGtSCisiwM4q864unUUWsCdFDRZSCY28%2FkCIIaW9NzAf9vdsaa8YFI2isLcxWYeKXDYuxgAdhmCQj3O2RH4b%2FEQjb69VlQQXrMPvWhMMGOqUBCv%2FmRZswEOKI%2Bef2bwUKjHsrM2UI2VfRsbQ5PtZVtkm0GP1xd29SFp3PKwy6C3Uxb%2Fs%2Bc%2FsG4z96ioEEdxSfqqLTUNXUR15hkvBBkl3Wnw2ao5Xjxo1fWvipUDJeKbcZPyQu3RdcWTBviTI5jNSRATnl%2F8wdDkOXff%2FPDYC0MHJqojkMp2eXadxZEK1pIyrUWGUi%2F%2BRbsmsLDFVkO2PvQDgRth2k&X-Amz-Signature=a45f815906138f13e1b2a761c00914a700ab08cdeaa62b3d09ce6d5471e97d76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU2G3EGL%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T140719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtVTuTh56F83XvJg%2BwwkfxqJ8ffd7vfY7p4cNzBEQ%2BgAiEA4RnhFys8ksCLT%2Fqxp4F8vPAd5DJnG%2F85JF1QY4Ww8OoqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmUHka4omysC9%2BThSrcA5MRROBj2a9Eab72XXO1zjRJeJQ96QzHziO%2FMX6KYWdr3GB%2F8dz99zWdmVQqIt%2FFRqxvPoe10mLtX%2BS0on1pqpIZW6%2B8L0LmuoKDclkDaHLSemhSx4BOv1r3NHVCUDveszPiTfWWzS%2F%2BoquAECXdZ4rm5p0jbYFKjyFFt%2BUmnv80xc0yuougoaoHuVxJYbgqHe93COxUPPD67sePTVNTBNwyG6z7Ql8XTz0%2BJw7Wcnxn%2B3TrSqtPBd0WG5avuq4NdWzNAlfqCsXFbS7DdK64eOA9%2B6FKpG2HD%2BQE75DAEBvD9UD79Qh%2BhLAxTJ4xPp0kT2qNKNVTa%2B2Jc62kqGDwpGUWwv8bp0kYzO%2BzkgNdYHOUlNlVA89%2BuXE%2BgBGy9RYV1GavyBoMi6MOUmONlAQKqokXM4GKi5bCdaCTJTrTUUJuna1cHI9e1Kv%2FEUfDCw6l7Mvag2nGMI17BObFttwyTZ%2BOUSZgcoZ1o%2BViRkIoCLNFs0FVzBr67IIBL95Adc4jKnaqjhnWAqApd6iKxuSzVHVESgirGtSCisiwM4q864unUUWsCdFDRZSCY28%2FkCIIaW9NzAf9vdsaa8YFI2isLcxWYeKXDYuxgAdhmCQj3O2RH4b%2FEQjb69VlQQXrMPvWhMMGOqUBCv%2FmRZswEOKI%2Bef2bwUKjHsrM2UI2VfRsbQ5PtZVtkm0GP1xd29SFp3PKwy6C3Uxb%2Fs%2Bc%2FsG4z96ioEEdxSfqqLTUNXUR15hkvBBkl3Wnw2ao5Xjxo1fWvipUDJeKbcZPyQu3RdcWTBviTI5jNSRATnl%2F8wdDkOXff%2FPDYC0MHJqojkMp2eXadxZEK1pIyrUWGUi%2F%2BRbsmsLDFVkO2PvQDgRth2k&X-Amz-Signature=a1f54e222e07774898b3010c702f7a69c0529d037b4850047380445da775f388&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
