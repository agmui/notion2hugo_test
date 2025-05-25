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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6LRPXZB%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T004627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHpifw2Oyk%2FM7qgkXHr92REwRNL%2BbskvhpePtzFtiF3JAiBQYJFYuuj4fIrjCfYuPtwkoTj69sy15s7UjljVivqUkir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM4NiQsu5Njqo3vV1OKtwDx9Cq3WXyIoQdBJqsyceDJtn%2FK73QKCdt3X9tNdnVcOisoaPUDOao2d7GnSuuUYo4WXIcc5onxQJjH90ZMqfHhHDeWsnOxPP4JXxO6iUQVl1NM5nPoACVPDew5zdNfY%2FolBhjkDlBFh1Yb2ALTBVmkhE4IIgjemXLnyMAKZlY9OEieCARvHlXmjfPDzaf84u3CBbv6YjRajyA00ERb8SroxZcKNPq0kxa7AGuG0dxD1XHPUYJ5bcwuqGdZC2UXRvizFPUfr6JZQpZ%2FdehnUgrGbN4tlCtKILTjIU21VbUHpRh%2BmhGAO8YUDGGs67zhbgr16YHT8%2FhgYhwAYTk2pb9%2FUx6Taw2w0boBBd2ruBbR4ldSgquVQkfcxaIaS71ptSgBwwihDLiAihh%2B8GQbj79Ye5VLNl58bVm85wvrf%2B1hNnJgv2X1TSvAGmRoW3PC%2F9SNk%2F5JSdQApXnyQ5H9xu%2BsSZfoQ8sIUk7JeUJJoBUdQ0zapLroQMbE%2BG%2FeUs9WYqEP2rpLYoCA8AVDP%2BglSOGeuObwCDvsrj1W1Fqxay2PL9A3i32l4aK5hic8x%2Fqhe1CKNrE7TJNNqhSXFDMauyg7%2F7gc3XG09lV1afaNGaK0fTUYmEGGuQMAOXXMmcwy8zJwQY6pgEu9LSvgHSgiQiDdFeoEI3X8FVelIuFAfhYEoz6N7z5uYMZkCs6qpuvijP%2BrRjdj02uSn8nICJhCqc25wg8cg1FE9L2A2wnpex%2BufibfXz%2FVfDl8HnFN5rlx1DJ1mv6SQ%2FmD8o%2Ba%2B71C15u51vpkkdlpW4YY7N%2BNFedJ3Kw5uP64XGemPXeGboSu1XOKgO%2BkRdmoR2nYz%2FsjCUrrrNQhjPv3L%2Bq4iOk&X-Amz-Signature=1b89347c5808eade1a487233da76e078356a2c71e1c486a6f06f4b97235902c7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6LRPXZB%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T004627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHpifw2Oyk%2FM7qgkXHr92REwRNL%2BbskvhpePtzFtiF3JAiBQYJFYuuj4fIrjCfYuPtwkoTj69sy15s7UjljVivqUkir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM4NiQsu5Njqo3vV1OKtwDx9Cq3WXyIoQdBJqsyceDJtn%2FK73QKCdt3X9tNdnVcOisoaPUDOao2d7GnSuuUYo4WXIcc5onxQJjH90ZMqfHhHDeWsnOxPP4JXxO6iUQVl1NM5nPoACVPDew5zdNfY%2FolBhjkDlBFh1Yb2ALTBVmkhE4IIgjemXLnyMAKZlY9OEieCARvHlXmjfPDzaf84u3CBbv6YjRajyA00ERb8SroxZcKNPq0kxa7AGuG0dxD1XHPUYJ5bcwuqGdZC2UXRvizFPUfr6JZQpZ%2FdehnUgrGbN4tlCtKILTjIU21VbUHpRh%2BmhGAO8YUDGGs67zhbgr16YHT8%2FhgYhwAYTk2pb9%2FUx6Taw2w0boBBd2ruBbR4ldSgquVQkfcxaIaS71ptSgBwwihDLiAihh%2B8GQbj79Ye5VLNl58bVm85wvrf%2B1hNnJgv2X1TSvAGmRoW3PC%2F9SNk%2F5JSdQApXnyQ5H9xu%2BsSZfoQ8sIUk7JeUJJoBUdQ0zapLroQMbE%2BG%2FeUs9WYqEP2rpLYoCA8AVDP%2BglSOGeuObwCDvsrj1W1Fqxay2PL9A3i32l4aK5hic8x%2Fqhe1CKNrE7TJNNqhSXFDMauyg7%2F7gc3XG09lV1afaNGaK0fTUYmEGGuQMAOXXMmcwy8zJwQY6pgEu9LSvgHSgiQiDdFeoEI3X8FVelIuFAfhYEoz6N7z5uYMZkCs6qpuvijP%2BrRjdj02uSn8nICJhCqc25wg8cg1FE9L2A2wnpex%2BufibfXz%2FVfDl8HnFN5rlx1DJ1mv6SQ%2FmD8o%2Ba%2B71C15u51vpkkdlpW4YY7N%2BNFedJ3Kw5uP64XGemPXeGboSu1XOKgO%2BkRdmoR2nYz%2FsjCUrrrNQhjPv3L%2Bq4iOk&X-Amz-Signature=fed9d4bb38c18ce1530cde271b8a9a7c2549227d1c35b1e1dc2fa6c3a3b62f56&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6LRPXZB%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T004627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHpifw2Oyk%2FM7qgkXHr92REwRNL%2BbskvhpePtzFtiF3JAiBQYJFYuuj4fIrjCfYuPtwkoTj69sy15s7UjljVivqUkir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM4NiQsu5Njqo3vV1OKtwDx9Cq3WXyIoQdBJqsyceDJtn%2FK73QKCdt3X9tNdnVcOisoaPUDOao2d7GnSuuUYo4WXIcc5onxQJjH90ZMqfHhHDeWsnOxPP4JXxO6iUQVl1NM5nPoACVPDew5zdNfY%2FolBhjkDlBFh1Yb2ALTBVmkhE4IIgjemXLnyMAKZlY9OEieCARvHlXmjfPDzaf84u3CBbv6YjRajyA00ERb8SroxZcKNPq0kxa7AGuG0dxD1XHPUYJ5bcwuqGdZC2UXRvizFPUfr6JZQpZ%2FdehnUgrGbN4tlCtKILTjIU21VbUHpRh%2BmhGAO8YUDGGs67zhbgr16YHT8%2FhgYhwAYTk2pb9%2FUx6Taw2w0boBBd2ruBbR4ldSgquVQkfcxaIaS71ptSgBwwihDLiAihh%2B8GQbj79Ye5VLNl58bVm85wvrf%2B1hNnJgv2X1TSvAGmRoW3PC%2F9SNk%2F5JSdQApXnyQ5H9xu%2BsSZfoQ8sIUk7JeUJJoBUdQ0zapLroQMbE%2BG%2FeUs9WYqEP2rpLYoCA8AVDP%2BglSOGeuObwCDvsrj1W1Fqxay2PL9A3i32l4aK5hic8x%2Fqhe1CKNrE7TJNNqhSXFDMauyg7%2F7gc3XG09lV1afaNGaK0fTUYmEGGuQMAOXXMmcwy8zJwQY6pgEu9LSvgHSgiQiDdFeoEI3X8FVelIuFAfhYEoz6N7z5uYMZkCs6qpuvijP%2BrRjdj02uSn8nICJhCqc25wg8cg1FE9L2A2wnpex%2BufibfXz%2FVfDl8HnFN5rlx1DJ1mv6SQ%2FmD8o%2Ba%2B71C15u51vpkkdlpW4YY7N%2BNFedJ3Kw5uP64XGemPXeGboSu1XOKgO%2BkRdmoR2nYz%2FsjCUrrrNQhjPv3L%2Bq4iOk&X-Amz-Signature=c3f0d5fa1fbd27465f566468a007570ac41e9a86121f4a72a4bb1e6d5ed5c074&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
