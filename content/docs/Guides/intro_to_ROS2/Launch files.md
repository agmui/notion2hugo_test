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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2F7GUFK%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T121348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOvLuyDwLYwIk8HXVx2MdRg%2FAKgn%2BsycHPu3FNikthsAiEAmZtjW5qofnem%2FNDTLm4Lm6u9hCoQN7vguR0KHIW4jkoqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYvAJoZeDjWvnIR3yrcA2FfV65L9uDRdPdRoUDVmKEwbfd4c7HeIfPJqsmaQ%2FmtBebMlsRHOY14S%2FZkhqiC6J0FCBcFzkWAnTcufl8%2F%2FwqQuHuDCdrHwiNLcSfG8FxO%2FLwe53BTjTbCh8s%2Bynsz60z74vUQ7htEgpZdtzfHvTQP2hBeZOMQytqIdK3M0zPJ%2FRoIYlyd4V9F6MFJ8x8kLlMTDJLhhRjaQBqT%2B3mCZh0TZZyN0iD1nXBUv2XLvUqIn%2FUIx5LPIcw%2FQ0%2F2Mzs2MJSUR%2FW9P7dXwQJsz9Z8UpRooDF%2F04SZ7atrtMjAlvmdHHJwasDcXJa87osffLO%2BgAl6MSFRM39hyY8FNaayPXwDRCgrPt9E9a%2FcqtL2SsW4RPhusuPmNGGD62hONXmBCZ%2FKyOjrq06%2FMjnytpQYH6gilI%2BU6dCn2fqp5Coh%2FMvqXDDH6Y4%2FxnS4hlV0HIqx9NL2Ckrg0R21rYKh2Uyggs05iGYsYTde65BObDWgBJ5fQ3vxGsBHUih1JDyUTdjHDG56h2QUj9ytkdDQufB1uen%2BIvHGWUgCvAoUjHezVAoiEoPxAw4YafblwBsxXmYBR9Hv9n8ENpcok6bZJk70rTKOrPazamoN4YHsK%2BkaQS6a4il3zLKysRkdv1kBMJvG7bwGOqUByofITUm9E01QUd%2FeGKgf9W5dSIhIMIfAUnx6z6%2F%2FmZwDb4nrNTmh7lldwselES7TqJlFgag81ikdno1wEDeRZ17%2FyHjMFdrTYWVljpGnoPKJvmwc8ku7%2FgYxkvF2DfNNnM77xbXkjDmBrU5INz1H6pLvhowPMm4WXwwDmuv0AM4dMEeIH9LbMkQFkVd1YHpthETTgk1QrY3ceCVxYmH1kjeM2bRr&X-Amz-Signature=ccfbde775210b395c8d1c1d6cbb22775c92bc3d0b59306b3dc336944c1d26cc0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2F7GUFK%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T121348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOvLuyDwLYwIk8HXVx2MdRg%2FAKgn%2BsycHPu3FNikthsAiEAmZtjW5qofnem%2FNDTLm4Lm6u9hCoQN7vguR0KHIW4jkoqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYvAJoZeDjWvnIR3yrcA2FfV65L9uDRdPdRoUDVmKEwbfd4c7HeIfPJqsmaQ%2FmtBebMlsRHOY14S%2FZkhqiC6J0FCBcFzkWAnTcufl8%2F%2FwqQuHuDCdrHwiNLcSfG8FxO%2FLwe53BTjTbCh8s%2Bynsz60z74vUQ7htEgpZdtzfHvTQP2hBeZOMQytqIdK3M0zPJ%2FRoIYlyd4V9F6MFJ8x8kLlMTDJLhhRjaQBqT%2B3mCZh0TZZyN0iD1nXBUv2XLvUqIn%2FUIx5LPIcw%2FQ0%2F2Mzs2MJSUR%2FW9P7dXwQJsz9Z8UpRooDF%2F04SZ7atrtMjAlvmdHHJwasDcXJa87osffLO%2BgAl6MSFRM39hyY8FNaayPXwDRCgrPt9E9a%2FcqtL2SsW4RPhusuPmNGGD62hONXmBCZ%2FKyOjrq06%2FMjnytpQYH6gilI%2BU6dCn2fqp5Coh%2FMvqXDDH6Y4%2FxnS4hlV0HIqx9NL2Ckrg0R21rYKh2Uyggs05iGYsYTde65BObDWgBJ5fQ3vxGsBHUih1JDyUTdjHDG56h2QUj9ytkdDQufB1uen%2BIvHGWUgCvAoUjHezVAoiEoPxAw4YafblwBsxXmYBR9Hv9n8ENpcok6bZJk70rTKOrPazamoN4YHsK%2BkaQS6a4il3zLKysRkdv1kBMJvG7bwGOqUByofITUm9E01QUd%2FeGKgf9W5dSIhIMIfAUnx6z6%2F%2FmZwDb4nrNTmh7lldwselES7TqJlFgag81ikdno1wEDeRZ17%2FyHjMFdrTYWVljpGnoPKJvmwc8ku7%2FgYxkvF2DfNNnM77xbXkjDmBrU5INz1H6pLvhowPMm4WXwwDmuv0AM4dMEeIH9LbMkQFkVd1YHpthETTgk1QrY3ceCVxYmH1kjeM2bRr&X-Amz-Signature=953b5e4d7dc860be2dd2b9ee506aa0ebf1d4f0042117e6d520b863a073104865&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2F7GUFK%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T121348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOvLuyDwLYwIk8HXVx2MdRg%2FAKgn%2BsycHPu3FNikthsAiEAmZtjW5qofnem%2FNDTLm4Lm6u9hCoQN7vguR0KHIW4jkoqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYvAJoZeDjWvnIR3yrcA2FfV65L9uDRdPdRoUDVmKEwbfd4c7HeIfPJqsmaQ%2FmtBebMlsRHOY14S%2FZkhqiC6J0FCBcFzkWAnTcufl8%2F%2FwqQuHuDCdrHwiNLcSfG8FxO%2FLwe53BTjTbCh8s%2Bynsz60z74vUQ7htEgpZdtzfHvTQP2hBeZOMQytqIdK3M0zPJ%2FRoIYlyd4V9F6MFJ8x8kLlMTDJLhhRjaQBqT%2B3mCZh0TZZyN0iD1nXBUv2XLvUqIn%2FUIx5LPIcw%2FQ0%2F2Mzs2MJSUR%2FW9P7dXwQJsz9Z8UpRooDF%2F04SZ7atrtMjAlvmdHHJwasDcXJa87osffLO%2BgAl6MSFRM39hyY8FNaayPXwDRCgrPt9E9a%2FcqtL2SsW4RPhusuPmNGGD62hONXmBCZ%2FKyOjrq06%2FMjnytpQYH6gilI%2BU6dCn2fqp5Coh%2FMvqXDDH6Y4%2FxnS4hlV0HIqx9NL2Ckrg0R21rYKh2Uyggs05iGYsYTde65BObDWgBJ5fQ3vxGsBHUih1JDyUTdjHDG56h2QUj9ytkdDQufB1uen%2BIvHGWUgCvAoUjHezVAoiEoPxAw4YafblwBsxXmYBR9Hv9n8ENpcok6bZJk70rTKOrPazamoN4YHsK%2BkaQS6a4il3zLKysRkdv1kBMJvG7bwGOqUByofITUm9E01QUd%2FeGKgf9W5dSIhIMIfAUnx6z6%2F%2FmZwDb4nrNTmh7lldwselES7TqJlFgag81ikdno1wEDeRZ17%2FyHjMFdrTYWVljpGnoPKJvmwc8ku7%2FgYxkvF2DfNNnM77xbXkjDmBrU5INz1H6pLvhowPMm4WXwwDmuv0AM4dMEeIH9LbMkQFkVd1YHpthETTgk1QrY3ceCVxYmH1kjeM2bRr&X-Amz-Signature=904fe197cd0e5347ad93fbbdda06fe3222b36d0be13f416c09b8d8068c8cd998&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
