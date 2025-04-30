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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STEEWDU2%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T190535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCk5Kdf%2BXynFETRU0OXyCyxHryuAPr%2FzPS5C76qRkzAWwIgGbyun6y%2FG5KZVlr3TOsU1o7iVyR3gvVFBK7ZR%2Bohr4UqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC8%2BeRlIHXMuFCgQwyrcA3NtHFtUL4LON6rJxcqztXCtxnktuez8GtyIsnhKp7t05fwyfxKpYs6mFgDVozW54HGo%2BTcYrPtR%2FBbjJudtTIxrDhahp2cdJtVLPhh2eEZbqBwiHepyeGLf%2BqA3x8SqRQENGaD6RSxEHwO80aMnKxVfFpGc8OKVzzQAePdt2LwB%2F3ze8JYB%2F6kbo9UKd3wNudsaTlPxJ2EHlv5mX6B80ezKFExPOVvL1Lx875389q1c1KvCS%2FO%2FgAwBKjQrtR3NHQKHxLCB9TWkcvSw2JNCiS6YoTfyroFzVM30iSD44MCID0mgrI8mj0KbCPwoZlNgi6og9FFQtvavdXUvyXEYCFAXAIfvHsZzzX1iHUL6pw0YveEth5420Ax4Vf43t4I3nAZRzIuO%2B9zbJPhvZTOoapnxuy5xcixHzelQg1Q0ok0EtSMpc9o6qqsuCf7fayXZhXiDVcFjp3yhET4EHJEtHAggAPygiK%2B4VVch3DOMq8%2FlY3IA49HzU%2BBuNWp4JT0Q29n0GBfStQXfmvAcJYSUBz8rmQVTIYTP4SX5qdafU6Ak%2FoEOcCkAnSXBRp25XpQ34ZRSAsMNg7tGxHUd7GJX5vrFrk%2F7KV51vdRQGVS3ObRqs9K%2Fz%2BrTgt2vl6AuMLnTycAGOqUBLl%2BePqgCHrcAcPfeBnherIs8tAjyotjFCtjT2qhxg%2B%2B4qCHbvqBGJEfZorxnNDRwhTo0kbJfKYm82oF21knd68TeS5jUK1AA6bGg8Z7hLnB0faBOYCs6bGdN9XUjqVuXF1Y%2FdxMGK2f6AgIDnZutclMC7dZDwmNZ6Az4bON6wV7zviS2S4kLII%2BsTmCWkLxMG2QRvmC6%2FCUngIbQ%2BbzCuKQme1kU&X-Amz-Signature=5a00661b144ba5827d5841691fe4617ba0397ebae5b5534566071b4a61da0461&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STEEWDU2%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T190535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCk5Kdf%2BXynFETRU0OXyCyxHryuAPr%2FzPS5C76qRkzAWwIgGbyun6y%2FG5KZVlr3TOsU1o7iVyR3gvVFBK7ZR%2Bohr4UqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC8%2BeRlIHXMuFCgQwyrcA3NtHFtUL4LON6rJxcqztXCtxnktuez8GtyIsnhKp7t05fwyfxKpYs6mFgDVozW54HGo%2BTcYrPtR%2FBbjJudtTIxrDhahp2cdJtVLPhh2eEZbqBwiHepyeGLf%2BqA3x8SqRQENGaD6RSxEHwO80aMnKxVfFpGc8OKVzzQAePdt2LwB%2F3ze8JYB%2F6kbo9UKd3wNudsaTlPxJ2EHlv5mX6B80ezKFExPOVvL1Lx875389q1c1KvCS%2FO%2FgAwBKjQrtR3NHQKHxLCB9TWkcvSw2JNCiS6YoTfyroFzVM30iSD44MCID0mgrI8mj0KbCPwoZlNgi6og9FFQtvavdXUvyXEYCFAXAIfvHsZzzX1iHUL6pw0YveEth5420Ax4Vf43t4I3nAZRzIuO%2B9zbJPhvZTOoapnxuy5xcixHzelQg1Q0ok0EtSMpc9o6qqsuCf7fayXZhXiDVcFjp3yhET4EHJEtHAggAPygiK%2B4VVch3DOMq8%2FlY3IA49HzU%2BBuNWp4JT0Q29n0GBfStQXfmvAcJYSUBz8rmQVTIYTP4SX5qdafU6Ak%2FoEOcCkAnSXBRp25XpQ34ZRSAsMNg7tGxHUd7GJX5vrFrk%2F7KV51vdRQGVS3ObRqs9K%2Fz%2BrTgt2vl6AuMLnTycAGOqUBLl%2BePqgCHrcAcPfeBnherIs8tAjyotjFCtjT2qhxg%2B%2B4qCHbvqBGJEfZorxnNDRwhTo0kbJfKYm82oF21knd68TeS5jUK1AA6bGg8Z7hLnB0faBOYCs6bGdN9XUjqVuXF1Y%2FdxMGK2f6AgIDnZutclMC7dZDwmNZ6Az4bON6wV7zviS2S4kLII%2BsTmCWkLxMG2QRvmC6%2FCUngIbQ%2BbzCuKQme1kU&X-Amz-Signature=b45c760a0795edcfc5528c19226791e2d4ff52fb4fbde6679d8eba1f642d6222&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STEEWDU2%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T190535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCk5Kdf%2BXynFETRU0OXyCyxHryuAPr%2FzPS5C76qRkzAWwIgGbyun6y%2FG5KZVlr3TOsU1o7iVyR3gvVFBK7ZR%2Bohr4UqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC8%2BeRlIHXMuFCgQwyrcA3NtHFtUL4LON6rJxcqztXCtxnktuez8GtyIsnhKp7t05fwyfxKpYs6mFgDVozW54HGo%2BTcYrPtR%2FBbjJudtTIxrDhahp2cdJtVLPhh2eEZbqBwiHepyeGLf%2BqA3x8SqRQENGaD6RSxEHwO80aMnKxVfFpGc8OKVzzQAePdt2LwB%2F3ze8JYB%2F6kbo9UKd3wNudsaTlPxJ2EHlv5mX6B80ezKFExPOVvL1Lx875389q1c1KvCS%2FO%2FgAwBKjQrtR3NHQKHxLCB9TWkcvSw2JNCiS6YoTfyroFzVM30iSD44MCID0mgrI8mj0KbCPwoZlNgi6og9FFQtvavdXUvyXEYCFAXAIfvHsZzzX1iHUL6pw0YveEth5420Ax4Vf43t4I3nAZRzIuO%2B9zbJPhvZTOoapnxuy5xcixHzelQg1Q0ok0EtSMpc9o6qqsuCf7fayXZhXiDVcFjp3yhET4EHJEtHAggAPygiK%2B4VVch3DOMq8%2FlY3IA49HzU%2BBuNWp4JT0Q29n0GBfStQXfmvAcJYSUBz8rmQVTIYTP4SX5qdafU6Ak%2FoEOcCkAnSXBRp25XpQ34ZRSAsMNg7tGxHUd7GJX5vrFrk%2F7KV51vdRQGVS3ObRqs9K%2Fz%2BrTgt2vl6AuMLnTycAGOqUBLl%2BePqgCHrcAcPfeBnherIs8tAjyotjFCtjT2qhxg%2B%2B4qCHbvqBGJEfZorxnNDRwhTo0kbJfKYm82oF21knd68TeS5jUK1AA6bGg8Z7hLnB0faBOYCs6bGdN9XUjqVuXF1Y%2FdxMGK2f6AgIDnZutclMC7dZDwmNZ6Az4bON6wV7zviS2S4kLII%2BsTmCWkLxMG2QRvmC6%2FCUngIbQ%2BbzCuKQme1kU&X-Amz-Signature=2bf2ed6a82d67746dde7dceac9705a4d7f4c0bbb01e7710d743cca27ddb2dd09&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
