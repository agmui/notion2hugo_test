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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQDQOHOU%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T121343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCXeW%2BoseS4sxzgE57olHFmCi%2FI%2BV5PhkXip5g9z6HTkwIgcuhQvB4KedkApmI1A208XMzEnXb1Hcoe6%2BpncpJ1EeAq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDI4umAELfgkE3R%2BiXyrcA9EL%2FRlCjpi%2F26UMTQFL74KranZ%2B5EzfPB7v6kxrsGuYq0Rb9nlfRlgKPqnLnmY8we%2BxDGvaZvrFx6uucR98ZAOF9%2BiwFtwJHa9dMqsxwNuAsDTdMXZMOk9JE3Jm8Kb07XbeG3vxgMPniFaxuuLyqwdmU40lTCjFrj02AmD5UO58ePQaU9nEIr%2FMbwWCcPAcPBaQxgpsweTa2JPeQsfdfBa4z2X9KGFKju%2FFufngcgPqIdr43iIzSdJQfzj94g%2Fd5jad3b8J%2BIVvTJqdd%2FH4NhBbei%2F4CMw2Ux1T7wsm2M0MDG2%2BsaSN8svHNkwS%2Btd9C7%2F6dYZPcp20Qwyk26sLj9Bj9ArMu8Ihb%2B3YSvW39BqCqEazDM7YjVyefsalhk6gDunX3DeMa67ofggUxSUfmyoyd4od%2Bcn33qyBBwJRgxWPLzWsUCdwbCTb7TnntcvdPDmppCIOiaGbqeH694mlg1cxWi4fzZCCFCVwlzY6QvmyQHXvqZxDM%2F%2FiEAtbpCIdiRoYmY7IGFfuC720LC1UjkouoEgEF%2BVbt8JCYZERGqqgk1mxnCkK0gco8ONj8G9O%2BkDBkY0HCZLFZWZyz0TwkHfCzeaj4L1nxeocCysmMIV2GXprhm2rcTAYE5NpML2xvL0GOqUBRnyVNZwFJET%2FdwLRbm6I5tfG3XFC%2BMavUif7NnHVjHI91OVBesOHSJKs12t4TKsW2qexJkXszwSFBcbpV0fPYL4419SyuWHyY%2Bur4XxHeQj%2FEfvUYbmX%2BdwgzsmUbVsocZngyR4w721J2ikovP%2FAdmtVv%2F9sCz4npZh8CiOP5AIEMC4bBavcbg7DTtsO0KfCe6mWxKQPlCjZsYXAs8WFQQ0jO523&X-Amz-Signature=4d0108dcb84aa1928df3ed93949a8bee3c22dcdc479299ab84d3186f1a5f032a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQDQOHOU%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T121343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCXeW%2BoseS4sxzgE57olHFmCi%2FI%2BV5PhkXip5g9z6HTkwIgcuhQvB4KedkApmI1A208XMzEnXb1Hcoe6%2BpncpJ1EeAq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDI4umAELfgkE3R%2BiXyrcA9EL%2FRlCjpi%2F26UMTQFL74KranZ%2B5EzfPB7v6kxrsGuYq0Rb9nlfRlgKPqnLnmY8we%2BxDGvaZvrFx6uucR98ZAOF9%2BiwFtwJHa9dMqsxwNuAsDTdMXZMOk9JE3Jm8Kb07XbeG3vxgMPniFaxuuLyqwdmU40lTCjFrj02AmD5UO58ePQaU9nEIr%2FMbwWCcPAcPBaQxgpsweTa2JPeQsfdfBa4z2X9KGFKju%2FFufngcgPqIdr43iIzSdJQfzj94g%2Fd5jad3b8J%2BIVvTJqdd%2FH4NhBbei%2F4CMw2Ux1T7wsm2M0MDG2%2BsaSN8svHNkwS%2Btd9C7%2F6dYZPcp20Qwyk26sLj9Bj9ArMu8Ihb%2B3YSvW39BqCqEazDM7YjVyefsalhk6gDunX3DeMa67ofggUxSUfmyoyd4od%2Bcn33qyBBwJRgxWPLzWsUCdwbCTb7TnntcvdPDmppCIOiaGbqeH694mlg1cxWi4fzZCCFCVwlzY6QvmyQHXvqZxDM%2F%2FiEAtbpCIdiRoYmY7IGFfuC720LC1UjkouoEgEF%2BVbt8JCYZERGqqgk1mxnCkK0gco8ONj8G9O%2BkDBkY0HCZLFZWZyz0TwkHfCzeaj4L1nxeocCysmMIV2GXprhm2rcTAYE5NpML2xvL0GOqUBRnyVNZwFJET%2FdwLRbm6I5tfG3XFC%2BMavUif7NnHVjHI91OVBesOHSJKs12t4TKsW2qexJkXszwSFBcbpV0fPYL4419SyuWHyY%2Bur4XxHeQj%2FEfvUYbmX%2BdwgzsmUbVsocZngyR4w721J2ikovP%2FAdmtVv%2F9sCz4npZh8CiOP5AIEMC4bBavcbg7DTtsO0KfCe6mWxKQPlCjZsYXAs8WFQQ0jO523&X-Amz-Signature=034f4a6fd7d7a969f6e54988fd2982857fd6f0ce06ca8e7fe091d0ea864b91ef&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQDQOHOU%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T121343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCXeW%2BoseS4sxzgE57olHFmCi%2FI%2BV5PhkXip5g9z6HTkwIgcuhQvB4KedkApmI1A208XMzEnXb1Hcoe6%2BpncpJ1EeAq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDI4umAELfgkE3R%2BiXyrcA9EL%2FRlCjpi%2F26UMTQFL74KranZ%2B5EzfPB7v6kxrsGuYq0Rb9nlfRlgKPqnLnmY8we%2BxDGvaZvrFx6uucR98ZAOF9%2BiwFtwJHa9dMqsxwNuAsDTdMXZMOk9JE3Jm8Kb07XbeG3vxgMPniFaxuuLyqwdmU40lTCjFrj02AmD5UO58ePQaU9nEIr%2FMbwWCcPAcPBaQxgpsweTa2JPeQsfdfBa4z2X9KGFKju%2FFufngcgPqIdr43iIzSdJQfzj94g%2Fd5jad3b8J%2BIVvTJqdd%2FH4NhBbei%2F4CMw2Ux1T7wsm2M0MDG2%2BsaSN8svHNkwS%2Btd9C7%2F6dYZPcp20Qwyk26sLj9Bj9ArMu8Ihb%2B3YSvW39BqCqEazDM7YjVyefsalhk6gDunX3DeMa67ofggUxSUfmyoyd4od%2Bcn33qyBBwJRgxWPLzWsUCdwbCTb7TnntcvdPDmppCIOiaGbqeH694mlg1cxWi4fzZCCFCVwlzY6QvmyQHXvqZxDM%2F%2FiEAtbpCIdiRoYmY7IGFfuC720LC1UjkouoEgEF%2BVbt8JCYZERGqqgk1mxnCkK0gco8ONj8G9O%2BkDBkY0HCZLFZWZyz0TwkHfCzeaj4L1nxeocCysmMIV2GXprhm2rcTAYE5NpML2xvL0GOqUBRnyVNZwFJET%2FdwLRbm6I5tfG3XFC%2BMavUif7NnHVjHI91OVBesOHSJKs12t4TKsW2qexJkXszwSFBcbpV0fPYL4419SyuWHyY%2Bur4XxHeQj%2FEfvUYbmX%2BdwgzsmUbVsocZngyR4w721J2ikovP%2FAdmtVv%2F9sCz4npZh8CiOP5AIEMC4bBavcbg7DTtsO0KfCe6mWxKQPlCjZsYXAs8WFQQ0jO523&X-Amz-Signature=b47f202e7ce81a3bb415c64477df8371d4595d9698750ebdf39bf60178d1c48d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
