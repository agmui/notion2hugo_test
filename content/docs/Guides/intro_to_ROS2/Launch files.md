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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QX5DGMW%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJ2tR5UWoovKpnRYKwD0jD8MhWTIFqCgSODYxxxYbMJAIhAJdjKbSuZXi6iE1Z7Y0Zvp5xUQkNlSxxHuwVYpcz2qWkKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiDeMpQmtveaIlQXMq3AO%2BhWWt5IY5jsobs2N4BsjLW6EvExbOGgGkfctX1AEl50SxRqkxQZdONxcApKa%2BnqK12bpuCX2G6a3%2BztWAipWGho7CEWnePql8%2FWYQioSkhp%2FmrAYGE%2BhF4CMDWn3vH4IOfQxJ2PhEZbsqE%2Bi3bedDBLI8RClO9c74D4Go0Auq74QEtBGBj87jp0YoyjUvOpMdPXX%2BHEFV8x20YdxL%2FESRSevVTj9L3djZpeAFiujtrAfVkdl8Cdyuy%2BuuBfxfxvJJyEDUht86PnjBLCGDe9YSAOyQKqKj6%2BxgUd5z3ndLzhBbZi7KuIYPw1IuFL5KX9JewckVNbLPuFqtMvW%2Fb3doKGug%2FuLNbNnrpV52ExuAvv5huVmvF33ABv5KCHCqgbNZfF%2Bv6iYd6RUDl7vhycyjOBwJ7oB5G%2FQ3yv2uh9YulODGTShOJEuLssw3O8lc8gYFH5oIHPcBFIqsErDgJnxHTPDorn7n4JZ6Ib3CU3bITLIoNrlT22uweGHJtfR5DmsITC7S%2FnIWc0%2FTVx10TaEygTt%2BhPt%2FpOVDqVZAkfl3ZDlA0qRVBw%2FcpiRtTfbGVCdYhk1zPM%2FxBfrgqD0Yw3FEhPEOhoZdlgbM%2FRtbl3qRrfDpbv%2BYKyRqwXjgSTDr2cu%2BBjqkAWSv8gqTi7n5e6pvYURDoBgseRdOKrRmwTlsPObiIttv2gkkdZMArvbgbhFj1HLMYODXum9dpHQFgwegabxX4ouy%2F81hdIxOeks4DZvnoix8irrRm5cKfoL3Dl6A%2FFTfd3AoptJaAQUsEfvK198ZU5vVNRmOwGc8u%2BUQeklRpJOt2NvEwHn5hiadV0c1AND1TbQpurprZWHZjFmPcbt5idMua0wT&X-Amz-Signature=d00cc26bda2224a915f562c436e27086a8e829ca7d9e9099464b5e647b708bcc&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QX5DGMW%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJ2tR5UWoovKpnRYKwD0jD8MhWTIFqCgSODYxxxYbMJAIhAJdjKbSuZXi6iE1Z7Y0Zvp5xUQkNlSxxHuwVYpcz2qWkKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiDeMpQmtveaIlQXMq3AO%2BhWWt5IY5jsobs2N4BsjLW6EvExbOGgGkfctX1AEl50SxRqkxQZdONxcApKa%2BnqK12bpuCX2G6a3%2BztWAipWGho7CEWnePql8%2FWYQioSkhp%2FmrAYGE%2BhF4CMDWn3vH4IOfQxJ2PhEZbsqE%2Bi3bedDBLI8RClO9c74D4Go0Auq74QEtBGBj87jp0YoyjUvOpMdPXX%2BHEFV8x20YdxL%2FESRSevVTj9L3djZpeAFiujtrAfVkdl8Cdyuy%2BuuBfxfxvJJyEDUht86PnjBLCGDe9YSAOyQKqKj6%2BxgUd5z3ndLzhBbZi7KuIYPw1IuFL5KX9JewckVNbLPuFqtMvW%2Fb3doKGug%2FuLNbNnrpV52ExuAvv5huVmvF33ABv5KCHCqgbNZfF%2Bv6iYd6RUDl7vhycyjOBwJ7oB5G%2FQ3yv2uh9YulODGTShOJEuLssw3O8lc8gYFH5oIHPcBFIqsErDgJnxHTPDorn7n4JZ6Ib3CU3bITLIoNrlT22uweGHJtfR5DmsITC7S%2FnIWc0%2FTVx10TaEygTt%2BhPt%2FpOVDqVZAkfl3ZDlA0qRVBw%2FcpiRtTfbGVCdYhk1zPM%2FxBfrgqD0Yw3FEhPEOhoZdlgbM%2FRtbl3qRrfDpbv%2BYKyRqwXjgSTDr2cu%2BBjqkAWSv8gqTi7n5e6pvYURDoBgseRdOKrRmwTlsPObiIttv2gkkdZMArvbgbhFj1HLMYODXum9dpHQFgwegabxX4ouy%2F81hdIxOeks4DZvnoix8irrRm5cKfoL3Dl6A%2FFTfd3AoptJaAQUsEfvK198ZU5vVNRmOwGc8u%2BUQeklRpJOt2NvEwHn5hiadV0c1AND1TbQpurprZWHZjFmPcbt5idMua0wT&X-Amz-Signature=f4f4e8d826055dc10866132164d663ef5c96d0f4e192ede832c85877c52c592f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QX5DGMW%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJ2tR5UWoovKpnRYKwD0jD8MhWTIFqCgSODYxxxYbMJAIhAJdjKbSuZXi6iE1Z7Y0Zvp5xUQkNlSxxHuwVYpcz2qWkKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiDeMpQmtveaIlQXMq3AO%2BhWWt5IY5jsobs2N4BsjLW6EvExbOGgGkfctX1AEl50SxRqkxQZdONxcApKa%2BnqK12bpuCX2G6a3%2BztWAipWGho7CEWnePql8%2FWYQioSkhp%2FmrAYGE%2BhF4CMDWn3vH4IOfQxJ2PhEZbsqE%2Bi3bedDBLI8RClO9c74D4Go0Auq74QEtBGBj87jp0YoyjUvOpMdPXX%2BHEFV8x20YdxL%2FESRSevVTj9L3djZpeAFiujtrAfVkdl8Cdyuy%2BuuBfxfxvJJyEDUht86PnjBLCGDe9YSAOyQKqKj6%2BxgUd5z3ndLzhBbZi7KuIYPw1IuFL5KX9JewckVNbLPuFqtMvW%2Fb3doKGug%2FuLNbNnrpV52ExuAvv5huVmvF33ABv5KCHCqgbNZfF%2Bv6iYd6RUDl7vhycyjOBwJ7oB5G%2FQ3yv2uh9YulODGTShOJEuLssw3O8lc8gYFH5oIHPcBFIqsErDgJnxHTPDorn7n4JZ6Ib3CU3bITLIoNrlT22uweGHJtfR5DmsITC7S%2FnIWc0%2FTVx10TaEygTt%2BhPt%2FpOVDqVZAkfl3ZDlA0qRVBw%2FcpiRtTfbGVCdYhk1zPM%2FxBfrgqD0Yw3FEhPEOhoZdlgbM%2FRtbl3qRrfDpbv%2BYKyRqwXjgSTDr2cu%2BBjqkAWSv8gqTi7n5e6pvYURDoBgseRdOKrRmwTlsPObiIttv2gkkdZMArvbgbhFj1HLMYODXum9dpHQFgwegabxX4ouy%2F81hdIxOeks4DZvnoix8irrRm5cKfoL3Dl6A%2FFTfd3AoptJaAQUsEfvK198ZU5vVNRmOwGc8u%2BUQeklRpJOt2NvEwHn5hiadV0c1AND1TbQpurprZWHZjFmPcbt5idMua0wT&X-Amz-Signature=8d5e7715867c95ae8b07e843e6de699f6e18038cf7b8534802a939d973282961&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
