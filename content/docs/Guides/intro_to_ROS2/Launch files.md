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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMXXWKHF%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCh0j3ZX2ZkBxf6Uttl5WRovmMEI584J3%2BvFyWu0ck4QIgRZNBbhFCPksg%2BWllhaivV29VkTQuBHuGpikAM6zVXAIqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzgZ7bREJbp%2BoweESrcA9FnE89GctwhIr0uTIpWG7mAA6sCYgEdXpiyIrYq9gmqTF0wMSmTxP2z8DXJk%2Bg9bgJP6%2Fe4KZJMMDOSfe0Gng3OhdxgLWPYMsXoQWJkrCWXkMe3OFGmIxRJoKaddaX1dmPfWvwemNF%2FsrWsvQQYywp6Wdrh8IIJTPA36xSzj0QlZ1abHuMFGasTy5EwGkwJxqIGayB3JMh5X930U82UyWQX8a%2BjoC5RyTIrTESAlKlEN0igHQhHgk99IdzMfti9QQy8Bp20Q4ZuSimvoSTCGzWccag2KfF%2Fw3On0Ktrfb%2B%2BtCZkmCXjiCPvvxk3CzOFujbaN45KU6rlzMyWNECXupkfEdKHT8cvILzdxVmTLjNSEn47J9KQc0134hIiBk9m41Xv2VCS3Mi%2BiQIvYZfjHFJlV4HIBEJwRtkz2an%2FOfRD1zXQqFD0IlJ9aHhY4Kza90wfIpnseZJHrNg5EkyL0EkyjcRE5l%2B%2BcQD7xTFa4bKj5QZ2Z%2BXK1ObDx6TCCKoYUNWtKQED3qbA%2BmED9ljqj04XthFlMTXyR4njocZCmCBdOjRWaRL3FhP1sZ%2FACnYQght1BGf%2B%2Bw9aDqVzyy1BQWItJYMfq6FkyyWqBKHsEP6zUnjs1nXQ4MpmVCTPML2WtcgGOqUBwAa1xOKSvMbcDtPG5OJQFutuFlfInRn5Cg2SCDQc69Lmfo2NS2V21F%2BIpj2EPmirC9Jo5dzl5xwq3O7MDuLbrQ0AURaWZEH9Y88sV%2BHU4GxpHboaF9fbHp1gLhPBG8uUxIQCn%2B5RsDXYGnfpPr5yDAoXkDvfXaUYev6q7QvrPMpwtur5JsQLw7kYDTafPCi58YKGTCpOds7nX9d%2F%2FyJlm2ez7tjy&X-Amz-Signature=ee67fbb117c17ef90c025376b0995c182e20dc0d0b5cc6836f412a929f9075e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMXXWKHF%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCh0j3ZX2ZkBxf6Uttl5WRovmMEI584J3%2BvFyWu0ck4QIgRZNBbhFCPksg%2BWllhaivV29VkTQuBHuGpikAM6zVXAIqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzgZ7bREJbp%2BoweESrcA9FnE89GctwhIr0uTIpWG7mAA6sCYgEdXpiyIrYq9gmqTF0wMSmTxP2z8DXJk%2Bg9bgJP6%2Fe4KZJMMDOSfe0Gng3OhdxgLWPYMsXoQWJkrCWXkMe3OFGmIxRJoKaddaX1dmPfWvwemNF%2FsrWsvQQYywp6Wdrh8IIJTPA36xSzj0QlZ1abHuMFGasTy5EwGkwJxqIGayB3JMh5X930U82UyWQX8a%2BjoC5RyTIrTESAlKlEN0igHQhHgk99IdzMfti9QQy8Bp20Q4ZuSimvoSTCGzWccag2KfF%2Fw3On0Ktrfb%2B%2BtCZkmCXjiCPvvxk3CzOFujbaN45KU6rlzMyWNECXupkfEdKHT8cvILzdxVmTLjNSEn47J9KQc0134hIiBk9m41Xv2VCS3Mi%2BiQIvYZfjHFJlV4HIBEJwRtkz2an%2FOfRD1zXQqFD0IlJ9aHhY4Kza90wfIpnseZJHrNg5EkyL0EkyjcRE5l%2B%2BcQD7xTFa4bKj5QZ2Z%2BXK1ObDx6TCCKoYUNWtKQED3qbA%2BmED9ljqj04XthFlMTXyR4njocZCmCBdOjRWaRL3FhP1sZ%2FACnYQght1BGf%2B%2Bw9aDqVzyy1BQWItJYMfq6FkyyWqBKHsEP6zUnjs1nXQ4MpmVCTPML2WtcgGOqUBwAa1xOKSvMbcDtPG5OJQFutuFlfInRn5Cg2SCDQc69Lmfo2NS2V21F%2BIpj2EPmirC9Jo5dzl5xwq3O7MDuLbrQ0AURaWZEH9Y88sV%2BHU4GxpHboaF9fbHp1gLhPBG8uUxIQCn%2B5RsDXYGnfpPr5yDAoXkDvfXaUYev6q7QvrPMpwtur5JsQLw7kYDTafPCi58YKGTCpOds7nX9d%2F%2FyJlm2ez7tjy&X-Amz-Signature=913ee47f51787434d88fb880d69ee90f3b09dd57d31f3f4f7bfedb817aef265f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMXXWKHF%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCh0j3ZX2ZkBxf6Uttl5WRovmMEI584J3%2BvFyWu0ck4QIgRZNBbhFCPksg%2BWllhaivV29VkTQuBHuGpikAM6zVXAIqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzgZ7bREJbp%2BoweESrcA9FnE89GctwhIr0uTIpWG7mAA6sCYgEdXpiyIrYq9gmqTF0wMSmTxP2z8DXJk%2Bg9bgJP6%2Fe4KZJMMDOSfe0Gng3OhdxgLWPYMsXoQWJkrCWXkMe3OFGmIxRJoKaddaX1dmPfWvwemNF%2FsrWsvQQYywp6Wdrh8IIJTPA36xSzj0QlZ1abHuMFGasTy5EwGkwJxqIGayB3JMh5X930U82UyWQX8a%2BjoC5RyTIrTESAlKlEN0igHQhHgk99IdzMfti9QQy8Bp20Q4ZuSimvoSTCGzWccag2KfF%2Fw3On0Ktrfb%2B%2BtCZkmCXjiCPvvxk3CzOFujbaN45KU6rlzMyWNECXupkfEdKHT8cvILzdxVmTLjNSEn47J9KQc0134hIiBk9m41Xv2VCS3Mi%2BiQIvYZfjHFJlV4HIBEJwRtkz2an%2FOfRD1zXQqFD0IlJ9aHhY4Kza90wfIpnseZJHrNg5EkyL0EkyjcRE5l%2B%2BcQD7xTFa4bKj5QZ2Z%2BXK1ObDx6TCCKoYUNWtKQED3qbA%2BmED9ljqj04XthFlMTXyR4njocZCmCBdOjRWaRL3FhP1sZ%2FACnYQght1BGf%2B%2Bw9aDqVzyy1BQWItJYMfq6FkyyWqBKHsEP6zUnjs1nXQ4MpmVCTPML2WtcgGOqUBwAa1xOKSvMbcDtPG5OJQFutuFlfInRn5Cg2SCDQc69Lmfo2NS2V21F%2BIpj2EPmirC9Jo5dzl5xwq3O7MDuLbrQ0AURaWZEH9Y88sV%2BHU4GxpHboaF9fbHp1gLhPBG8uUxIQCn%2B5RsDXYGnfpPr5yDAoXkDvfXaUYev6q7QvrPMpwtur5JsQLw7kYDTafPCi58YKGTCpOds7nX9d%2F%2FyJlm2ez7tjy&X-Amz-Signature=83e17f171980ea255eabeb55a83e61a35ad9d09751d29de0e6608a7eeb27d677&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
