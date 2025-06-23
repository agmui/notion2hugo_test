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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2F5A5F5%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDGEkn%2FmlzrEJXL3fNps4AT0iHAMIttW6Vltfg01F2XSgIgezI7joFeb7FOX1p6%2BsSdoLJ%2BziLZuagSFyfp7AkUj2Aq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDMASQ8izg30MGqvMoyrcA7iFSkcStKhPWFtvIIdgqGUov6wtQaqI0vLT5d%2Bp3Ns7ZQ2EJ2z%2BnmQNR6raxdqVZSkAQvxZqxQ2HuWtlrtTFPqmXqvxCDNj2lSz7cSblz7lGrqliV%2FUZfG%2FAce9QrDk4BCabaHU%2F1AYAytCm3lddz%2B062pWVi3Y7Q8Ab5RdJaVMlEm7C%2BJgkMVYD3gLquk2L8p6eC%2FeS%2BoXT%2FhsRp%2F2mPklbOHctp2C0W9lqRBKblwTX%2FlPbkRKcd2p33u5TcutzbK75jMwf7TEhPDUeohvj4keND950ndHI4ZsauqLP257466wu82NomixCQLIFp5zU4mas7FHwsaDls3VUU%2FAklefXKYvGnQTfwWS%2FUNDqfjF3UIsek1T58wAcoaPW%2FFKJ0PzvFsgzCUBIz%2F2aa4xXCSc2u2aNv%2B6hGYl%2FrYdR83H%2BDes%2FAIVFEc5u%2BnP05uVAhPuf51DeqPUmFhYzAv5MLQwZ%2FF3O7%2FrER47gaNbKhPAtjq1MfHb5OSrV8NIbXwrj1lqrlL9FU%2FJL0MkTzkgYOK%2BqYgG96JEUViq7W4t3YMT047vX%2BRNMYXcL85IATNLT2GIMBAsydoC4e8YOBmwSIxzafVpky9f8SaXDgyz67LF0vYX4M%2Fb8OsealBCMOeq5sIGOqUBDPLSz4q85QxS4eXLKewvx1UIeB%2B1dR8Q%2Bzes5dpJEQvmaC%2BD2y4shTelK5G%2FF6Elz8tQWpLJ%2FjgWuma%2FXY6J6e8q33NFQ7hF846XiEpLLhv9U6o7lJaJMVaJT86%2BaJ7ACFM3h7z91U4c0ESOl8rKz%2BKEdd6o5N6HeyPJQ8rFXx2VngiOPVyewD7STRkLMN0G72c4fTDq3hcLeSocpBWHTqF5ANH9&X-Amz-Signature=94c9f76946a4f6634a2722bfe73f9c01829e511ef8fba9f3c67e54d9057f90a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2F5A5F5%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDGEkn%2FmlzrEJXL3fNps4AT0iHAMIttW6Vltfg01F2XSgIgezI7joFeb7FOX1p6%2BsSdoLJ%2BziLZuagSFyfp7AkUj2Aq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDMASQ8izg30MGqvMoyrcA7iFSkcStKhPWFtvIIdgqGUov6wtQaqI0vLT5d%2Bp3Ns7ZQ2EJ2z%2BnmQNR6raxdqVZSkAQvxZqxQ2HuWtlrtTFPqmXqvxCDNj2lSz7cSblz7lGrqliV%2FUZfG%2FAce9QrDk4BCabaHU%2F1AYAytCm3lddz%2B062pWVi3Y7Q8Ab5RdJaVMlEm7C%2BJgkMVYD3gLquk2L8p6eC%2FeS%2BoXT%2FhsRp%2F2mPklbOHctp2C0W9lqRBKblwTX%2FlPbkRKcd2p33u5TcutzbK75jMwf7TEhPDUeohvj4keND950ndHI4ZsauqLP257466wu82NomixCQLIFp5zU4mas7FHwsaDls3VUU%2FAklefXKYvGnQTfwWS%2FUNDqfjF3UIsek1T58wAcoaPW%2FFKJ0PzvFsgzCUBIz%2F2aa4xXCSc2u2aNv%2B6hGYl%2FrYdR83H%2BDes%2FAIVFEc5u%2BnP05uVAhPuf51DeqPUmFhYzAv5MLQwZ%2FF3O7%2FrER47gaNbKhPAtjq1MfHb5OSrV8NIbXwrj1lqrlL9FU%2FJL0MkTzkgYOK%2BqYgG96JEUViq7W4t3YMT047vX%2BRNMYXcL85IATNLT2GIMBAsydoC4e8YOBmwSIxzafVpky9f8SaXDgyz67LF0vYX4M%2Fb8OsealBCMOeq5sIGOqUBDPLSz4q85QxS4eXLKewvx1UIeB%2B1dR8Q%2Bzes5dpJEQvmaC%2BD2y4shTelK5G%2FF6Elz8tQWpLJ%2FjgWuma%2FXY6J6e8q33NFQ7hF846XiEpLLhv9U6o7lJaJMVaJT86%2BaJ7ACFM3h7z91U4c0ESOl8rKz%2BKEdd6o5N6HeyPJQ8rFXx2VngiOPVyewD7STRkLMN0G72c4fTDq3hcLeSocpBWHTqF5ANH9&X-Amz-Signature=7d955f22a0ec6f4c4350c59ed6b64cf5c57483a9d4df28449f33075ca25d8a10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2F5A5F5%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDGEkn%2FmlzrEJXL3fNps4AT0iHAMIttW6Vltfg01F2XSgIgezI7joFeb7FOX1p6%2BsSdoLJ%2BziLZuagSFyfp7AkUj2Aq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDMASQ8izg30MGqvMoyrcA7iFSkcStKhPWFtvIIdgqGUov6wtQaqI0vLT5d%2Bp3Ns7ZQ2EJ2z%2BnmQNR6raxdqVZSkAQvxZqxQ2HuWtlrtTFPqmXqvxCDNj2lSz7cSblz7lGrqliV%2FUZfG%2FAce9QrDk4BCabaHU%2F1AYAytCm3lddz%2B062pWVi3Y7Q8Ab5RdJaVMlEm7C%2BJgkMVYD3gLquk2L8p6eC%2FeS%2BoXT%2FhsRp%2F2mPklbOHctp2C0W9lqRBKblwTX%2FlPbkRKcd2p33u5TcutzbK75jMwf7TEhPDUeohvj4keND950ndHI4ZsauqLP257466wu82NomixCQLIFp5zU4mas7FHwsaDls3VUU%2FAklefXKYvGnQTfwWS%2FUNDqfjF3UIsek1T58wAcoaPW%2FFKJ0PzvFsgzCUBIz%2F2aa4xXCSc2u2aNv%2B6hGYl%2FrYdR83H%2BDes%2FAIVFEc5u%2BnP05uVAhPuf51DeqPUmFhYzAv5MLQwZ%2FF3O7%2FrER47gaNbKhPAtjq1MfHb5OSrV8NIbXwrj1lqrlL9FU%2FJL0MkTzkgYOK%2BqYgG96JEUViq7W4t3YMT047vX%2BRNMYXcL85IATNLT2GIMBAsydoC4e8YOBmwSIxzafVpky9f8SaXDgyz67LF0vYX4M%2Fb8OsealBCMOeq5sIGOqUBDPLSz4q85QxS4eXLKewvx1UIeB%2B1dR8Q%2Bzes5dpJEQvmaC%2BD2y4shTelK5G%2FF6Elz8tQWpLJ%2FjgWuma%2FXY6J6e8q33NFQ7hF846XiEpLLhv9U6o7lJaJMVaJT86%2BaJ7ACFM3h7z91U4c0ESOl8rKz%2BKEdd6o5N6HeyPJQ8rFXx2VngiOPVyewD7STRkLMN0G72c4fTDq3hcLeSocpBWHTqF5ANH9&X-Amz-Signature=7ded9c2e89d1eac8a76021c2681f84177d0505138bcb7a1de986cef62916a9d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
