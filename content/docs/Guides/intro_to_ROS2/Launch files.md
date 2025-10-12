---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNMSIFMJ%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIBPWV3Cbdl1rvA4CNaSFKs30HAIxjYa6ZytCipF6OXZBAiEApi3JjzUZMSF7KE%2Bi1jZEFpa0uhxQKAUEGEb7DnRTBJgq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDAO6F7PtSbNjqzoKgircA2TaLShiLL6iIRUlDA07mncEK3tq0z4EFAvLXPdlhlGu%2B0gb2TLmf234XtFwykZxPyPU4WtV76GUIOoAK9aBGwgXIPNuZkUfzhMlC%2Bp9TLzffAhxQxk%2BkUwhMV8opwozsXChVZZ5WGLfosXaec19lWurTDYBQSubZ7TR2YK4xfGJGhcTS4g7RZQsphs8X5fjbR%2FgQrZ0pc%2BtH9ILoZx9KBakrwFSN3eCQ3%2FLIaqZsWV4TSNs7v5kA7IsWkfcVfETAdPMg2PFCpZXIf3iFWFG1EZ07YTAhEERkVjSayZGOprPkvGMYMJk0tTMCSeLRgJaNH6DhgOxLdHP12sk%2Bv5Rq%2BdkaHJ6m0ZRbvn1SLKufo7xGtjXnQo55ytrvcyYCfCi4XfV%2B9JqX2dECNRK3qPFpdrsxqcUmIwnDNe%2FZK1v8PoOTI2NdsugOy0Uj0P%2FVdpG1u%2FdRuJ6JRXihJAwINCCUBIFiLUn5MYSVWr7kXaLI%2FmCts71TBOr6JjOLV44OAq5KA8NKqyZ3d%2BokaK%2BQOmoPLxOFNV4Azx6%2BJzU433HaAqoh%2FSFMlBkWdI%2FcFBXW3Hiy04nQVaAjeFqLR96mtUq8i7P3LaNyLN%2FDTVwSRjgIuJ%2FJOCwYWskg4FvnT8qMM65q8cGOqUBYTQY%2FuFcBLUSL5hiGojB174%2FzRCoSdbwpkun1NJNTfMDc4SYsgPsf9kM3RUrBoQgOxdBuM6j2CMwrQwOw%2Bn8Z2ToUjlGKr%2ByB5ueLyCKS4bQ09QKSElQFp%2B%2Bt17OZrBMDjMLx59LGxU20XDEjMUckRGQCcblMlyGn4ba0HGXmAspjMqvfPlHLwpCEbBkmWexQxyE%2FlrZ8t7uXOLShkw7v3kx%2BGK0&X-Amz-Signature=9e3797a16601004a25abb66cfe8ff05e6085f100ab61eff62e07143197d9da1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNMSIFMJ%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIBPWV3Cbdl1rvA4CNaSFKs30HAIxjYa6ZytCipF6OXZBAiEApi3JjzUZMSF7KE%2Bi1jZEFpa0uhxQKAUEGEb7DnRTBJgq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDAO6F7PtSbNjqzoKgircA2TaLShiLL6iIRUlDA07mncEK3tq0z4EFAvLXPdlhlGu%2B0gb2TLmf234XtFwykZxPyPU4WtV76GUIOoAK9aBGwgXIPNuZkUfzhMlC%2Bp9TLzffAhxQxk%2BkUwhMV8opwozsXChVZZ5WGLfosXaec19lWurTDYBQSubZ7TR2YK4xfGJGhcTS4g7RZQsphs8X5fjbR%2FgQrZ0pc%2BtH9ILoZx9KBakrwFSN3eCQ3%2FLIaqZsWV4TSNs7v5kA7IsWkfcVfETAdPMg2PFCpZXIf3iFWFG1EZ07YTAhEERkVjSayZGOprPkvGMYMJk0tTMCSeLRgJaNH6DhgOxLdHP12sk%2Bv5Rq%2BdkaHJ6m0ZRbvn1SLKufo7xGtjXnQo55ytrvcyYCfCi4XfV%2B9JqX2dECNRK3qPFpdrsxqcUmIwnDNe%2FZK1v8PoOTI2NdsugOy0Uj0P%2FVdpG1u%2FdRuJ6JRXihJAwINCCUBIFiLUn5MYSVWr7kXaLI%2FmCts71TBOr6JjOLV44OAq5KA8NKqyZ3d%2BokaK%2BQOmoPLxOFNV4Azx6%2BJzU433HaAqoh%2FSFMlBkWdI%2FcFBXW3Hiy04nQVaAjeFqLR96mtUq8i7P3LaNyLN%2FDTVwSRjgIuJ%2FJOCwYWskg4FvnT8qMM65q8cGOqUBYTQY%2FuFcBLUSL5hiGojB174%2FzRCoSdbwpkun1NJNTfMDc4SYsgPsf9kM3RUrBoQgOxdBuM6j2CMwrQwOw%2Bn8Z2ToUjlGKr%2ByB5ueLyCKS4bQ09QKSElQFp%2B%2Bt17OZrBMDjMLx59LGxU20XDEjMUckRGQCcblMlyGn4ba0HGXmAspjMqvfPlHLwpCEbBkmWexQxyE%2FlrZ8t7uXOLShkw7v3kx%2BGK0&X-Amz-Signature=e8ca4e937f8072bf1b2414398f2d55e25f58ac3b124667e12809aa19fa8739cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNMSIFMJ%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIBPWV3Cbdl1rvA4CNaSFKs30HAIxjYa6ZytCipF6OXZBAiEApi3JjzUZMSF7KE%2Bi1jZEFpa0uhxQKAUEGEb7DnRTBJgq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDAO6F7PtSbNjqzoKgircA2TaLShiLL6iIRUlDA07mncEK3tq0z4EFAvLXPdlhlGu%2B0gb2TLmf234XtFwykZxPyPU4WtV76GUIOoAK9aBGwgXIPNuZkUfzhMlC%2Bp9TLzffAhxQxk%2BkUwhMV8opwozsXChVZZ5WGLfosXaec19lWurTDYBQSubZ7TR2YK4xfGJGhcTS4g7RZQsphs8X5fjbR%2FgQrZ0pc%2BtH9ILoZx9KBakrwFSN3eCQ3%2FLIaqZsWV4TSNs7v5kA7IsWkfcVfETAdPMg2PFCpZXIf3iFWFG1EZ07YTAhEERkVjSayZGOprPkvGMYMJk0tTMCSeLRgJaNH6DhgOxLdHP12sk%2Bv5Rq%2BdkaHJ6m0ZRbvn1SLKufo7xGtjXnQo55ytrvcyYCfCi4XfV%2B9JqX2dECNRK3qPFpdrsxqcUmIwnDNe%2FZK1v8PoOTI2NdsugOy0Uj0P%2FVdpG1u%2FdRuJ6JRXihJAwINCCUBIFiLUn5MYSVWr7kXaLI%2FmCts71TBOr6JjOLV44OAq5KA8NKqyZ3d%2BokaK%2BQOmoPLxOFNV4Azx6%2BJzU433HaAqoh%2FSFMlBkWdI%2FcFBXW3Hiy04nQVaAjeFqLR96mtUq8i7P3LaNyLN%2FDTVwSRjgIuJ%2FJOCwYWskg4FvnT8qMM65q8cGOqUBYTQY%2FuFcBLUSL5hiGojB174%2FzRCoSdbwpkun1NJNTfMDc4SYsgPsf9kM3RUrBoQgOxdBuM6j2CMwrQwOw%2Bn8Z2ToUjlGKr%2ByB5ueLyCKS4bQ09QKSElQFp%2B%2Bt17OZrBMDjMLx59LGxU20XDEjMUckRGQCcblMlyGn4ba0HGXmAspjMqvfPlHLwpCEbBkmWexQxyE%2FlrZ8t7uXOLShkw7v3kx%2BGK0&X-Amz-Signature=3a1324f319f4cb49d4777250e910c24b7a5ac1ba75d1c1d885085059aa068159&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
