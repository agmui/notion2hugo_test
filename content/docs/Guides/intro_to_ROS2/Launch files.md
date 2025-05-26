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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ALJQB3Q%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVb61ojatihI5XSKe%2Bawd1fKwO3HYrPClPCAZoJ7t5twIgM143MeGjCGr8oogBJB4uXtPmtE7SrMa3W7Go4IRYIbUq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDCrdh49BrPsOOsBLVCrcAzV2MItr1QW53aTpf2l5z01q13gF3NyD%2F6pRNaRMnFl6cNO7nHCEZt9M88MJoNzHdZlUhPLQUi6yz6RAje2HDR04pwbf8UkbdVK4qjp7F3PbncG%2FHGGHhY4nrKBv6U3EH8%2F7O7%2F4Piibc5Jw3KLdzt2BSmYjAZgngjYZ8E8mEh79LfgSN04wx8CVjCv%2FZSqRqVrUHWIr3eLMIPXFg5uqdw%2BFKBjfEGw7%2BfX9XYea%2FdlnSYZGvjlaG65OssF5OH8DFye2kX0u%2FKZAyigB%2Bu%2BjVY%2BfqkgHSAmodwgWQGbM7kW9YrgWVkAZpO3NBHtXsh1EDIui4%2FhgbiHUm%2BTuNHnN8OzPEiUS5f5IvxHUXBHAcEHONPlu%2F4kcFC3Ptovv4r9W%2FmvFkupevKPhmwbEXfBN%2BpVGbHGgIwK8iORVcrY1DQJpsqCoT56AjmGIYFi6Qz4USSDjgZ5nJdLxeyle%2FGt%2FN5GVVyWFMPk6iSGWfSstqsR%2FItkupcZrDPZOvTF6V92FI70e4d2WTk7YKYRsR5Gy7Tde4fHvm4wR7vohyCo2Kq3ZGMTDgsq3LlncJaQo1SihXeAvvfTiai8i3XBxwN9YOVMW7jpN6pj%2BZUBUcI8r3wZ9O%2FaESh59CxxypR6MMLer08EGOqUBwMNguGUSehH0lggYdJaP6MlYgX11PUAePX%2F9tUacxhXCY0mlYgeVrPZG1JAPNLn1wo4OnL%2F6zdNZghG3JE2DPalKcR2GeCU%2BAkp3hTYDOlGOSl8be1y6UoSY5iDF2wvsTkN%2FAAlUbVVWXb%2Fo%2FfIyujkumIilflQIfTlEvo68KTueRtMTdIe%2BLl0JR1MaKTC3nOqYTPZ%2BMYfPZXI9pDHb35Playoc&X-Amz-Signature=35b97ff743ffa4d3058a2ad6c177a7f8575d5bc29059bd2b164132c301dbe874&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ALJQB3Q%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVb61ojatihI5XSKe%2Bawd1fKwO3HYrPClPCAZoJ7t5twIgM143MeGjCGr8oogBJB4uXtPmtE7SrMa3W7Go4IRYIbUq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDCrdh49BrPsOOsBLVCrcAzV2MItr1QW53aTpf2l5z01q13gF3NyD%2F6pRNaRMnFl6cNO7nHCEZt9M88MJoNzHdZlUhPLQUi6yz6RAje2HDR04pwbf8UkbdVK4qjp7F3PbncG%2FHGGHhY4nrKBv6U3EH8%2F7O7%2F4Piibc5Jw3KLdzt2BSmYjAZgngjYZ8E8mEh79LfgSN04wx8CVjCv%2FZSqRqVrUHWIr3eLMIPXFg5uqdw%2BFKBjfEGw7%2BfX9XYea%2FdlnSYZGvjlaG65OssF5OH8DFye2kX0u%2FKZAyigB%2Bu%2BjVY%2BfqkgHSAmodwgWQGbM7kW9YrgWVkAZpO3NBHtXsh1EDIui4%2FhgbiHUm%2BTuNHnN8OzPEiUS5f5IvxHUXBHAcEHONPlu%2F4kcFC3Ptovv4r9W%2FmvFkupevKPhmwbEXfBN%2BpVGbHGgIwK8iORVcrY1DQJpsqCoT56AjmGIYFi6Qz4USSDjgZ5nJdLxeyle%2FGt%2FN5GVVyWFMPk6iSGWfSstqsR%2FItkupcZrDPZOvTF6V92FI70e4d2WTk7YKYRsR5Gy7Tde4fHvm4wR7vohyCo2Kq3ZGMTDgsq3LlncJaQo1SihXeAvvfTiai8i3XBxwN9YOVMW7jpN6pj%2BZUBUcI8r3wZ9O%2FaESh59CxxypR6MMLer08EGOqUBwMNguGUSehH0lggYdJaP6MlYgX11PUAePX%2F9tUacxhXCY0mlYgeVrPZG1JAPNLn1wo4OnL%2F6zdNZghG3JE2DPalKcR2GeCU%2BAkp3hTYDOlGOSl8be1y6UoSY5iDF2wvsTkN%2FAAlUbVVWXb%2Fo%2FfIyujkumIilflQIfTlEvo68KTueRtMTdIe%2BLl0JR1MaKTC3nOqYTPZ%2BMYfPZXI9pDHb35Playoc&X-Amz-Signature=4970fc22b3e9b6ba3464932d97225df534e6e00b711c968966fe1a4a27cb973b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ALJQB3Q%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVb61ojatihI5XSKe%2Bawd1fKwO3HYrPClPCAZoJ7t5twIgM143MeGjCGr8oogBJB4uXtPmtE7SrMa3W7Go4IRYIbUq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDCrdh49BrPsOOsBLVCrcAzV2MItr1QW53aTpf2l5z01q13gF3NyD%2F6pRNaRMnFl6cNO7nHCEZt9M88MJoNzHdZlUhPLQUi6yz6RAje2HDR04pwbf8UkbdVK4qjp7F3PbncG%2FHGGHhY4nrKBv6U3EH8%2F7O7%2F4Piibc5Jw3KLdzt2BSmYjAZgngjYZ8E8mEh79LfgSN04wx8CVjCv%2FZSqRqVrUHWIr3eLMIPXFg5uqdw%2BFKBjfEGw7%2BfX9XYea%2FdlnSYZGvjlaG65OssF5OH8DFye2kX0u%2FKZAyigB%2Bu%2BjVY%2BfqkgHSAmodwgWQGbM7kW9YrgWVkAZpO3NBHtXsh1EDIui4%2FhgbiHUm%2BTuNHnN8OzPEiUS5f5IvxHUXBHAcEHONPlu%2F4kcFC3Ptovv4r9W%2FmvFkupevKPhmwbEXfBN%2BpVGbHGgIwK8iORVcrY1DQJpsqCoT56AjmGIYFi6Qz4USSDjgZ5nJdLxeyle%2FGt%2FN5GVVyWFMPk6iSGWfSstqsR%2FItkupcZrDPZOvTF6V92FI70e4d2WTk7YKYRsR5Gy7Tde4fHvm4wR7vohyCo2Kq3ZGMTDgsq3LlncJaQo1SihXeAvvfTiai8i3XBxwN9YOVMW7jpN6pj%2BZUBUcI8r3wZ9O%2FaESh59CxxypR6MMLer08EGOqUBwMNguGUSehH0lggYdJaP6MlYgX11PUAePX%2F9tUacxhXCY0mlYgeVrPZG1JAPNLn1wo4OnL%2F6zdNZghG3JE2DPalKcR2GeCU%2BAkp3hTYDOlGOSl8be1y6UoSY5iDF2wvsTkN%2FAAlUbVVWXb%2Fo%2FfIyujkumIilflQIfTlEvo68KTueRtMTdIe%2BLl0JR1MaKTC3nOqYTPZ%2BMYfPZXI9pDHb35Playoc&X-Amz-Signature=d16700c26f619422f8afdcac094893c0ae5e3386d642786c11a5a7ebc0398fc2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
