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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOOILUTS%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T061136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPIW5f1sE9VEvpRuurdsVybEQw7VIp%2F2O2UKHMaSv8HwIhAICHRNtMqtsoRAJ%2FT%2F%2BfUv1Qh%2BzaIr16PCvce4WZ4oGtKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcZTB915tzilwXQ2cq3ANvOCSTA%2Bzyd5BEmU2P5l6GMwttTEdn26ZtnSxcKUCFUK5qTJfgW5N9PsX%2BprShgRIQlCmf0%2B%2Bu3gIVsFJQlarnwAYtuiraGLZ%2FVVV8a%2BnH2GusQVToeR5ybPItEMxvs2JTFOeA7V1vxIR8n5Tq%2FGWUvyW2ZsweRKYC3w5N%2FuK%2BArD%2BRjmdDMYe%2F2HXXw6N9bbpuE1DLjEMg2BdDS1Xb5nsNPZ09v6UxDQojTfJKUkkL%2BC3uLnP0Zo5bz%2B819kC0eYEdgCrg3srSUVHUDBaVFpBqAVXy7khhC2zxvk3RVnlNKJROl6GlQiKoQv4UVg7hKD51Jow%2B%2BUvXss8zvO3pE2ATmoV%2FpItTPU%2BG3T7%2BA52LGhd2aiLcoaOgr23UBaPQe447SOIBGotkVZs6SEBjqq%2B0VBivDTyiSWuFShVa09saQGrSbeSEW3Bo2aok1s3MjRkEVv8mThD8kHZBGo22Ju45%2Bxx%2BD97zf9PX2OxuEs6B5m%2BqUqGosnP5LoO8%2BcHPJWPQi80C%2BunTE1GgjUFBPb3fEuEAJHYDnDF6MnPubA6Irdj7Tf6d%2Byis961Pxf3ojC%2BDc2CyiLgt3RUsj%2Bi9U9oU8%2BDGyKW%2Fd2PfVSOOlRCLGzNRkiDVnqixfYu0jDm5cm%2BBjqkASFqudrUFkR%2FJDPm1nOQ6J5cswFuv7N6pGR6TfKsyYYHLW0cy6j27Ux4b9dvf2ZNVccyX7akmEuOWXzFTb6xIcJa%2FwvYo3q5JrUCnplyyYzsbtprdFItZ%2F82GiPk%2FormTiMKLOFVczQhD%2FMsn9uEbYG8qsSs%2FNhYIKlpUoxPaeYZ1AlOw05JLiutk7xe0jUnUb0asDpBnpUcODa9tNdMLgjRrOOX&X-Amz-Signature=e745a8c955e2510c0d093a877b67361f4f6f74ec17e6358892423de73cbb7f8a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOOILUTS%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T061136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPIW5f1sE9VEvpRuurdsVybEQw7VIp%2F2O2UKHMaSv8HwIhAICHRNtMqtsoRAJ%2FT%2F%2BfUv1Qh%2BzaIr16PCvce4WZ4oGtKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcZTB915tzilwXQ2cq3ANvOCSTA%2Bzyd5BEmU2P5l6GMwttTEdn26ZtnSxcKUCFUK5qTJfgW5N9PsX%2BprShgRIQlCmf0%2B%2Bu3gIVsFJQlarnwAYtuiraGLZ%2FVVV8a%2BnH2GusQVToeR5ybPItEMxvs2JTFOeA7V1vxIR8n5Tq%2FGWUvyW2ZsweRKYC3w5N%2FuK%2BArD%2BRjmdDMYe%2F2HXXw6N9bbpuE1DLjEMg2BdDS1Xb5nsNPZ09v6UxDQojTfJKUkkL%2BC3uLnP0Zo5bz%2B819kC0eYEdgCrg3srSUVHUDBaVFpBqAVXy7khhC2zxvk3RVnlNKJROl6GlQiKoQv4UVg7hKD51Jow%2B%2BUvXss8zvO3pE2ATmoV%2FpItTPU%2BG3T7%2BA52LGhd2aiLcoaOgr23UBaPQe447SOIBGotkVZs6SEBjqq%2B0VBivDTyiSWuFShVa09saQGrSbeSEW3Bo2aok1s3MjRkEVv8mThD8kHZBGo22Ju45%2Bxx%2BD97zf9PX2OxuEs6B5m%2BqUqGosnP5LoO8%2BcHPJWPQi80C%2BunTE1GgjUFBPb3fEuEAJHYDnDF6MnPubA6Irdj7Tf6d%2Byis961Pxf3ojC%2BDc2CyiLgt3RUsj%2Bi9U9oU8%2BDGyKW%2Fd2PfVSOOlRCLGzNRkiDVnqixfYu0jDm5cm%2BBjqkASFqudrUFkR%2FJDPm1nOQ6J5cswFuv7N6pGR6TfKsyYYHLW0cy6j27Ux4b9dvf2ZNVccyX7akmEuOWXzFTb6xIcJa%2FwvYo3q5JrUCnplyyYzsbtprdFItZ%2F82GiPk%2FormTiMKLOFVczQhD%2FMsn9uEbYG8qsSs%2FNhYIKlpUoxPaeYZ1AlOw05JLiutk7xe0jUnUb0asDpBnpUcODa9tNdMLgjRrOOX&X-Amz-Signature=e2be46a626407e779fd758ee3bbdec228af85798cf5c832574dae0f807a46a89&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOOILUTS%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T061136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPIW5f1sE9VEvpRuurdsVybEQw7VIp%2F2O2UKHMaSv8HwIhAICHRNtMqtsoRAJ%2FT%2F%2BfUv1Qh%2BzaIr16PCvce4WZ4oGtKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcZTB915tzilwXQ2cq3ANvOCSTA%2Bzyd5BEmU2P5l6GMwttTEdn26ZtnSxcKUCFUK5qTJfgW5N9PsX%2BprShgRIQlCmf0%2B%2Bu3gIVsFJQlarnwAYtuiraGLZ%2FVVV8a%2BnH2GusQVToeR5ybPItEMxvs2JTFOeA7V1vxIR8n5Tq%2FGWUvyW2ZsweRKYC3w5N%2FuK%2BArD%2BRjmdDMYe%2F2HXXw6N9bbpuE1DLjEMg2BdDS1Xb5nsNPZ09v6UxDQojTfJKUkkL%2BC3uLnP0Zo5bz%2B819kC0eYEdgCrg3srSUVHUDBaVFpBqAVXy7khhC2zxvk3RVnlNKJROl6GlQiKoQv4UVg7hKD51Jow%2B%2BUvXss8zvO3pE2ATmoV%2FpItTPU%2BG3T7%2BA52LGhd2aiLcoaOgr23UBaPQe447SOIBGotkVZs6SEBjqq%2B0VBivDTyiSWuFShVa09saQGrSbeSEW3Bo2aok1s3MjRkEVv8mThD8kHZBGo22Ju45%2Bxx%2BD97zf9PX2OxuEs6B5m%2BqUqGosnP5LoO8%2BcHPJWPQi80C%2BunTE1GgjUFBPb3fEuEAJHYDnDF6MnPubA6Irdj7Tf6d%2Byis961Pxf3ojC%2BDc2CyiLgt3RUsj%2Bi9U9oU8%2BDGyKW%2Fd2PfVSOOlRCLGzNRkiDVnqixfYu0jDm5cm%2BBjqkASFqudrUFkR%2FJDPm1nOQ6J5cswFuv7N6pGR6TfKsyYYHLW0cy6j27Ux4b9dvf2ZNVccyX7akmEuOWXzFTb6xIcJa%2FwvYo3q5JrUCnplyyYzsbtprdFItZ%2F82GiPk%2FormTiMKLOFVczQhD%2FMsn9uEbYG8qsSs%2FNhYIKlpUoxPaeYZ1AlOw05JLiutk7xe0jUnUb0asDpBnpUcODa9tNdMLgjRrOOX&X-Amz-Signature=583f11730fb2ba438ab19bb4966cb127c7bdd9ee7326f1d9000f2b0609f9874f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
