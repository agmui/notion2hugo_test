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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XVWN72Q%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T090912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2FDG6iAyiSXfQHhxH%2By1fCXWFV4MgdiKfbwfvHQH1EOAiBVE9M9cCeljGLSA5ET1tnk7XH%2FtWzp6KHXbsu3U0Iheyr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIM0zLqAQgMgJoioE%2B8KtwDZa5UGkgJ2ZxwL9LCDFXMK0xWXg4ZYfUwsV2wa138ASGaLUKuDGHVhL1QTP53egzwGnstSHhIPlR%2BcB40dovwp%2Fccxy60FGvk9DfH6%2BhE2CAo%2FPKE9YM%2B0THr45mbrDC8sAUeIplfmZM4IOpJsSXaZ1so4r8%2FjE5hG77kRIy8ye75FR5EY%2BCfyP0A%2FWBNRSDCl%2FbIBNh7wuVuj5iCDBR5J8kWqrJgFcQqKyiijs4nHcU6ih%2F2sWexhB4961AHw09CkDpH78g96UGuRSX8DFK7yFwme63F3pU25TyI3ytCDqNtCPaIPA0oQOHDiL7jxYpG2cKIOe0Ebdog1Sld8gSYRmhkrmKDNCvZUNitS0gySo1YX2x2UVe4WKtCCO6FiI6LbCujfgYnxRpZG16eEuf477Ucw7D3lfLt25ldrBuD%2FYbxpJJBBjjm3eDED9r5jtDuJDJVMOFfZBMpelG1K1TqaISPb3JNlH8S6DFQgRfh6jFhPGDCb55nOBYO9x4ZjQnqLuvh25MXJoPMMsc4rbf4lq%2BlvdItGr%2BNvRNooxMWzyFOmKl72EtKcp0t4WT6MVQ7GZnHqU%2FrMEWp27D3VsIP6TM2ugzpyyx9NaPwJXJOqTI0CFcJyeKEzFygY64wla2%2BvwY6pgFFgNlvJcJjVf4PNVfD4Su%2FwLQGpm3y2vP1KkjFsGK9mgZPMgK6DFGZMuY6TcPLC4LS3fzO9ZnisLZZg15c04hJbW5o4%2FT0mDUTi4cc1jm%2FvYFl4UrVrM9HDoRWGJkwQj8NKbBhxWKAU8B3GaGvLQkeSec3uB1pli1Mus3cpZT0oGZTOg9XO%2B7dm0A2YbsxrCKxZm7JN9o1yXo%2Fjk%2FcHPeuxzxWnSF4&X-Amz-Signature=b1adad562f59f69b4d9418d966938f94f8d22ec8f1a9b575a0d91ff234982a96&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XVWN72Q%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T090912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2FDG6iAyiSXfQHhxH%2By1fCXWFV4MgdiKfbwfvHQH1EOAiBVE9M9cCeljGLSA5ET1tnk7XH%2FtWzp6KHXbsu3U0Iheyr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIM0zLqAQgMgJoioE%2B8KtwDZa5UGkgJ2ZxwL9LCDFXMK0xWXg4ZYfUwsV2wa138ASGaLUKuDGHVhL1QTP53egzwGnstSHhIPlR%2BcB40dovwp%2Fccxy60FGvk9DfH6%2BhE2CAo%2FPKE9YM%2B0THr45mbrDC8sAUeIplfmZM4IOpJsSXaZ1so4r8%2FjE5hG77kRIy8ye75FR5EY%2BCfyP0A%2FWBNRSDCl%2FbIBNh7wuVuj5iCDBR5J8kWqrJgFcQqKyiijs4nHcU6ih%2F2sWexhB4961AHw09CkDpH78g96UGuRSX8DFK7yFwme63F3pU25TyI3ytCDqNtCPaIPA0oQOHDiL7jxYpG2cKIOe0Ebdog1Sld8gSYRmhkrmKDNCvZUNitS0gySo1YX2x2UVe4WKtCCO6FiI6LbCujfgYnxRpZG16eEuf477Ucw7D3lfLt25ldrBuD%2FYbxpJJBBjjm3eDED9r5jtDuJDJVMOFfZBMpelG1K1TqaISPb3JNlH8S6DFQgRfh6jFhPGDCb55nOBYO9x4ZjQnqLuvh25MXJoPMMsc4rbf4lq%2BlvdItGr%2BNvRNooxMWzyFOmKl72EtKcp0t4WT6MVQ7GZnHqU%2FrMEWp27D3VsIP6TM2ugzpyyx9NaPwJXJOqTI0CFcJyeKEzFygY64wla2%2BvwY6pgFFgNlvJcJjVf4PNVfD4Su%2FwLQGpm3y2vP1KkjFsGK9mgZPMgK6DFGZMuY6TcPLC4LS3fzO9ZnisLZZg15c04hJbW5o4%2FT0mDUTi4cc1jm%2FvYFl4UrVrM9HDoRWGJkwQj8NKbBhxWKAU8B3GaGvLQkeSec3uB1pli1Mus3cpZT0oGZTOg9XO%2B7dm0A2YbsxrCKxZm7JN9o1yXo%2Fjk%2FcHPeuxzxWnSF4&X-Amz-Signature=a9d5bca3365ad38127306b6040218664d142b852cfcf2cf6c5c837f450e42d82&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XVWN72Q%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T090912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2FDG6iAyiSXfQHhxH%2By1fCXWFV4MgdiKfbwfvHQH1EOAiBVE9M9cCeljGLSA5ET1tnk7XH%2FtWzp6KHXbsu3U0Iheyr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIM0zLqAQgMgJoioE%2B8KtwDZa5UGkgJ2ZxwL9LCDFXMK0xWXg4ZYfUwsV2wa138ASGaLUKuDGHVhL1QTP53egzwGnstSHhIPlR%2BcB40dovwp%2Fccxy60FGvk9DfH6%2BhE2CAo%2FPKE9YM%2B0THr45mbrDC8sAUeIplfmZM4IOpJsSXaZ1so4r8%2FjE5hG77kRIy8ye75FR5EY%2BCfyP0A%2FWBNRSDCl%2FbIBNh7wuVuj5iCDBR5J8kWqrJgFcQqKyiijs4nHcU6ih%2F2sWexhB4961AHw09CkDpH78g96UGuRSX8DFK7yFwme63F3pU25TyI3ytCDqNtCPaIPA0oQOHDiL7jxYpG2cKIOe0Ebdog1Sld8gSYRmhkrmKDNCvZUNitS0gySo1YX2x2UVe4WKtCCO6FiI6LbCujfgYnxRpZG16eEuf477Ucw7D3lfLt25ldrBuD%2FYbxpJJBBjjm3eDED9r5jtDuJDJVMOFfZBMpelG1K1TqaISPb3JNlH8S6DFQgRfh6jFhPGDCb55nOBYO9x4ZjQnqLuvh25MXJoPMMsc4rbf4lq%2BlvdItGr%2BNvRNooxMWzyFOmKl72EtKcp0t4WT6MVQ7GZnHqU%2FrMEWp27D3VsIP6TM2ugzpyyx9NaPwJXJOqTI0CFcJyeKEzFygY64wla2%2BvwY6pgFFgNlvJcJjVf4PNVfD4Su%2FwLQGpm3y2vP1KkjFsGK9mgZPMgK6DFGZMuY6TcPLC4LS3fzO9ZnisLZZg15c04hJbW5o4%2FT0mDUTi4cc1jm%2FvYFl4UrVrM9HDoRWGJkwQj8NKbBhxWKAU8B3GaGvLQkeSec3uB1pli1Mus3cpZT0oGZTOg9XO%2B7dm0A2YbsxrCKxZm7JN9o1yXo%2Fjk%2FcHPeuxzxWnSF4&X-Amz-Signature=4ff02930f2a23d615543e89a82f392f038cd84df3b1c65435a3f909e18415b84&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
