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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673JFA4CU%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T005337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeFok3srME1LgNJWIDAxJA2WlV8c98e%2BKxGq1MezbQowIgZDssVWaScY8w1Z485terLmFppnqjRXokmwU2KdH8rxEqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPl5tkXt32mqnPUNSrcA0Ui4z3uqp%2Fe6N87C%2BRCVG%2Bnn5SWhLMiFOEqX092PNhlriEMVQ8ZaNhV1TZtZlfngPwfu9GXtZoVjrZAJuwMlWb4nLMvGwsudVAxnHmLywVT6YmFVg8el0dsC9j8gQhJtpnezX4blCZ5HItlUWlMFC40xbWpJqYBzNUbdWTJ5J1gv1JGFHbnSd0pZL3S%2BN6tqj7Qo%2Fq3s1GwVqV4qW19mqWy0b0J2P0GW%2BAOyjNIBWx47JqoiDd7NU%2FnGDX18F6LBlgdnDSDfEWPsdnrZQZ9p%2Ffb38p40Q5jySjtqRiFY%2BFa7xDaLMi5FtpyJDYff%2FQ7ssoFXHHczrXdPM5g0pymFty6RUK4WJKssKxqCiRq7vo9btFw3PnRbT8H1Fz6rGo3JBFovQ2Dj0AooiaKR4RGh11nJUSNzvakscL4pfhCWdlyZOnoBjihbfq0ZUW%2FuKVGon%2F%2BIxGI87CkT3AZ8ZzzXKH1Wh5J9I6COeU0NHCvRoqlzgjX5qhZ66ZMkqsV1l54x6QRPB05fhpGwGPLBga1G9YQBbx4sEIRQFagrorDdZExQJF2lDAUQCl5SzzyGkExYY5bycYtCCBhpP4MOkBcbFHheMbE2kGTGWzpGhGhoInPurMzS0bXBdlCbgLBML%2FJ7cEGOqUBXJnTpB%2FMOUtnstI%2FTbEDNXU2VxDxt1y5FHUtg9lStTwzCwwyOhI9%2BYOcnI19fyl74VW2EvtAz1vpnJhoNTRh0ajc%2BEFRrocgNyjBqe4NI3Pxv4ZjPnwwzcSqK9faHVX2meANOihMatzxDfWkPQOSucGm3QRhWRPwmn3A7PfJL0%2BthWPdlOb6sEDYNiD0wUfslYrMLlhVCcbNNc8uVmEZG7uvLiK%2F&X-Amz-Signature=b53487275b437f7af4f8c830f3dc0eecec4754fea44cd1266e319b15a2874a33&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673JFA4CU%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T005337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeFok3srME1LgNJWIDAxJA2WlV8c98e%2BKxGq1MezbQowIgZDssVWaScY8w1Z485terLmFppnqjRXokmwU2KdH8rxEqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPl5tkXt32mqnPUNSrcA0Ui4z3uqp%2Fe6N87C%2BRCVG%2Bnn5SWhLMiFOEqX092PNhlriEMVQ8ZaNhV1TZtZlfngPwfu9GXtZoVjrZAJuwMlWb4nLMvGwsudVAxnHmLywVT6YmFVg8el0dsC9j8gQhJtpnezX4blCZ5HItlUWlMFC40xbWpJqYBzNUbdWTJ5J1gv1JGFHbnSd0pZL3S%2BN6tqj7Qo%2Fq3s1GwVqV4qW19mqWy0b0J2P0GW%2BAOyjNIBWx47JqoiDd7NU%2FnGDX18F6LBlgdnDSDfEWPsdnrZQZ9p%2Ffb38p40Q5jySjtqRiFY%2BFa7xDaLMi5FtpyJDYff%2FQ7ssoFXHHczrXdPM5g0pymFty6RUK4WJKssKxqCiRq7vo9btFw3PnRbT8H1Fz6rGo3JBFovQ2Dj0AooiaKR4RGh11nJUSNzvakscL4pfhCWdlyZOnoBjihbfq0ZUW%2FuKVGon%2F%2BIxGI87CkT3AZ8ZzzXKH1Wh5J9I6COeU0NHCvRoqlzgjX5qhZ66ZMkqsV1l54x6QRPB05fhpGwGPLBga1G9YQBbx4sEIRQFagrorDdZExQJF2lDAUQCl5SzzyGkExYY5bycYtCCBhpP4MOkBcbFHheMbE2kGTGWzpGhGhoInPurMzS0bXBdlCbgLBML%2FJ7cEGOqUBXJnTpB%2FMOUtnstI%2FTbEDNXU2VxDxt1y5FHUtg9lStTwzCwwyOhI9%2BYOcnI19fyl74VW2EvtAz1vpnJhoNTRh0ajc%2BEFRrocgNyjBqe4NI3Pxv4ZjPnwwzcSqK9faHVX2meANOihMatzxDfWkPQOSucGm3QRhWRPwmn3A7PfJL0%2BthWPdlOb6sEDYNiD0wUfslYrMLlhVCcbNNc8uVmEZG7uvLiK%2F&X-Amz-Signature=5db86143585a5d9e57746027ee347ba9fc0c47dc80b0915a1cdae508e23bf493&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673JFA4CU%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T005337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeFok3srME1LgNJWIDAxJA2WlV8c98e%2BKxGq1MezbQowIgZDssVWaScY8w1Z485terLmFppnqjRXokmwU2KdH8rxEqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPl5tkXt32mqnPUNSrcA0Ui4z3uqp%2Fe6N87C%2BRCVG%2Bnn5SWhLMiFOEqX092PNhlriEMVQ8ZaNhV1TZtZlfngPwfu9GXtZoVjrZAJuwMlWb4nLMvGwsudVAxnHmLywVT6YmFVg8el0dsC9j8gQhJtpnezX4blCZ5HItlUWlMFC40xbWpJqYBzNUbdWTJ5J1gv1JGFHbnSd0pZL3S%2BN6tqj7Qo%2Fq3s1GwVqV4qW19mqWy0b0J2P0GW%2BAOyjNIBWx47JqoiDd7NU%2FnGDX18F6LBlgdnDSDfEWPsdnrZQZ9p%2Ffb38p40Q5jySjtqRiFY%2BFa7xDaLMi5FtpyJDYff%2FQ7ssoFXHHczrXdPM5g0pymFty6RUK4WJKssKxqCiRq7vo9btFw3PnRbT8H1Fz6rGo3JBFovQ2Dj0AooiaKR4RGh11nJUSNzvakscL4pfhCWdlyZOnoBjihbfq0ZUW%2FuKVGon%2F%2BIxGI87CkT3AZ8ZzzXKH1Wh5J9I6COeU0NHCvRoqlzgjX5qhZ66ZMkqsV1l54x6QRPB05fhpGwGPLBga1G9YQBbx4sEIRQFagrorDdZExQJF2lDAUQCl5SzzyGkExYY5bycYtCCBhpP4MOkBcbFHheMbE2kGTGWzpGhGhoInPurMzS0bXBdlCbgLBML%2FJ7cEGOqUBXJnTpB%2FMOUtnstI%2FTbEDNXU2VxDxt1y5FHUtg9lStTwzCwwyOhI9%2BYOcnI19fyl74VW2EvtAz1vpnJhoNTRh0ajc%2BEFRrocgNyjBqe4NI3Pxv4ZjPnwwzcSqK9faHVX2meANOihMatzxDfWkPQOSucGm3QRhWRPwmn3A7PfJL0%2BthWPdlOb6sEDYNiD0wUfslYrMLlhVCcbNNc8uVmEZG7uvLiK%2F&X-Amz-Signature=832469b42d20a848558f87770c1c46aee165a6c6ab3b7370f3dc1756c21fb6f1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
