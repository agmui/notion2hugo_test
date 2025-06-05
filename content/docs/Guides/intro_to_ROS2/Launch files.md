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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCUUCCMH%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T132450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIANIXLpn8XJO1EDvf8%2FJfyEosgIRKH77%2FsTGwEVKUqPdAiEAmJhjcEO%2FLLm0gLfs3mKLUdrsWIsqL07wpsU6GH5b9DUq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDASMDlmPMS%2BE0BijlCrcA75iW67L2tuY0%2BSqud8jWGRMFpY7dB0yibXUIXWT8Pany3kjvBCotPUnwwLW6qO87V%2FZCC0UQGtIkEf%2BkpU1V76K%2Bh%2FU%2F2K9%2BUZ5kDHhqy5rZqJD%2FJFxz%2FFVD7JYECf9XI8J3BxY2RIw4jRyPLnWRI1hv78gM%2BzIPCFDlp%2FNcFP97%2F%2F4frKv3RbQA0rK%2BBm%2BtXopbCjKeuqyN%2BMSTn%2FhlPE0isYUY1O6bMxUBAHFje%2F7b1FRwg8UHjIIMy71UiLwXLAonVIaHshGQIh9wX0j9m6uw0TuVadlnEUeZNyew3UWzkbI4gTxoQvvo%2FDDX1tVkTumxrI7edexjRIgDPRHQvugQYUpR2BE3H0iKyAvJkLphj5VAAgkba6G%2BlVcnOVxw%2F8Wm7pE860Ip6ePdTBES0aEWeMD31GRCJskYCDcNlX0b%2BDA3vG3Iew41qizhbrNwJ1M0haAuJwJIrvp8cEwZEbPxy5vhVNlWjxEvZCHEgzffK11tdH%2Bg4t3ifasc7Kh%2FaB3Ba6FTmerlBMLU0pvyXCFvzb2DxbRXqZM8Yo%2FN2fj3DqIspG7lQ2FTfxffWZtpavYj04AmW5cxPu7QuSCfP8bO5CsQ%2BeIbd0a0fh9ZcBvXm6H6g8jMzO9WgINMK2MhsIGOqUBfCHjfHCvZ63rZCshvFKg17kGdkNMdJ783po%2BjHVsPvfD2bECxYqLBzemSaSJbKT0dNTV0DwC7DO8frCWlqAacbcs1V1AmsRSC1cYWUaJFR35xdTXAqmfUCLMe8rhgJQ3w4%2F20H33s4NUfZuVuKtK8nygXwZ0T1io0FO1JIGuDOmVIEFrz09kptD1scepZ6%2FkKf7FvZxHUWKyl3yNzguEJWK6zwtw&X-Amz-Signature=2b3bf1bb49368fc5e25be314db2ed5ea4e3f401d4f7c768b122c83fe47a42da5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCUUCCMH%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T132450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIANIXLpn8XJO1EDvf8%2FJfyEosgIRKH77%2FsTGwEVKUqPdAiEAmJhjcEO%2FLLm0gLfs3mKLUdrsWIsqL07wpsU6GH5b9DUq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDASMDlmPMS%2BE0BijlCrcA75iW67L2tuY0%2BSqud8jWGRMFpY7dB0yibXUIXWT8Pany3kjvBCotPUnwwLW6qO87V%2FZCC0UQGtIkEf%2BkpU1V76K%2Bh%2FU%2F2K9%2BUZ5kDHhqy5rZqJD%2FJFxz%2FFVD7JYECf9XI8J3BxY2RIw4jRyPLnWRI1hv78gM%2BzIPCFDlp%2FNcFP97%2F%2F4frKv3RbQA0rK%2BBm%2BtXopbCjKeuqyN%2BMSTn%2FhlPE0isYUY1O6bMxUBAHFje%2F7b1FRwg8UHjIIMy71UiLwXLAonVIaHshGQIh9wX0j9m6uw0TuVadlnEUeZNyew3UWzkbI4gTxoQvvo%2FDDX1tVkTumxrI7edexjRIgDPRHQvugQYUpR2BE3H0iKyAvJkLphj5VAAgkba6G%2BlVcnOVxw%2F8Wm7pE860Ip6ePdTBES0aEWeMD31GRCJskYCDcNlX0b%2BDA3vG3Iew41qizhbrNwJ1M0haAuJwJIrvp8cEwZEbPxy5vhVNlWjxEvZCHEgzffK11tdH%2Bg4t3ifasc7Kh%2FaB3Ba6FTmerlBMLU0pvyXCFvzb2DxbRXqZM8Yo%2FN2fj3DqIspG7lQ2FTfxffWZtpavYj04AmW5cxPu7QuSCfP8bO5CsQ%2BeIbd0a0fh9ZcBvXm6H6g8jMzO9WgINMK2MhsIGOqUBfCHjfHCvZ63rZCshvFKg17kGdkNMdJ783po%2BjHVsPvfD2bECxYqLBzemSaSJbKT0dNTV0DwC7DO8frCWlqAacbcs1V1AmsRSC1cYWUaJFR35xdTXAqmfUCLMe8rhgJQ3w4%2F20H33s4NUfZuVuKtK8nygXwZ0T1io0FO1JIGuDOmVIEFrz09kptD1scepZ6%2FkKf7FvZxHUWKyl3yNzguEJWK6zwtw&X-Amz-Signature=ca0d16d80ec4aec7e44cd76dc753f33286ee45afe28ca72b7f417f99cf778170&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCUUCCMH%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T132450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIANIXLpn8XJO1EDvf8%2FJfyEosgIRKH77%2FsTGwEVKUqPdAiEAmJhjcEO%2FLLm0gLfs3mKLUdrsWIsqL07wpsU6GH5b9DUq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDASMDlmPMS%2BE0BijlCrcA75iW67L2tuY0%2BSqud8jWGRMFpY7dB0yibXUIXWT8Pany3kjvBCotPUnwwLW6qO87V%2FZCC0UQGtIkEf%2BkpU1V76K%2Bh%2FU%2F2K9%2BUZ5kDHhqy5rZqJD%2FJFxz%2FFVD7JYECf9XI8J3BxY2RIw4jRyPLnWRI1hv78gM%2BzIPCFDlp%2FNcFP97%2F%2F4frKv3RbQA0rK%2BBm%2BtXopbCjKeuqyN%2BMSTn%2FhlPE0isYUY1O6bMxUBAHFje%2F7b1FRwg8UHjIIMy71UiLwXLAonVIaHshGQIh9wX0j9m6uw0TuVadlnEUeZNyew3UWzkbI4gTxoQvvo%2FDDX1tVkTumxrI7edexjRIgDPRHQvugQYUpR2BE3H0iKyAvJkLphj5VAAgkba6G%2BlVcnOVxw%2F8Wm7pE860Ip6ePdTBES0aEWeMD31GRCJskYCDcNlX0b%2BDA3vG3Iew41qizhbrNwJ1M0haAuJwJIrvp8cEwZEbPxy5vhVNlWjxEvZCHEgzffK11tdH%2Bg4t3ifasc7Kh%2FaB3Ba6FTmerlBMLU0pvyXCFvzb2DxbRXqZM8Yo%2FN2fj3DqIspG7lQ2FTfxffWZtpavYj04AmW5cxPu7QuSCfP8bO5CsQ%2BeIbd0a0fh9ZcBvXm6H6g8jMzO9WgINMK2MhsIGOqUBfCHjfHCvZ63rZCshvFKg17kGdkNMdJ783po%2BjHVsPvfD2bECxYqLBzemSaSJbKT0dNTV0DwC7DO8frCWlqAacbcs1V1AmsRSC1cYWUaJFR35xdTXAqmfUCLMe8rhgJQ3w4%2F20H33s4NUfZuVuKtK8nygXwZ0T1io0FO1JIGuDOmVIEFrz09kptD1scepZ6%2FkKf7FvZxHUWKyl3yNzguEJWK6zwtw&X-Amz-Signature=733afaec4a29da7a783f7b39bb884469db8942d539d7c13cd337b6e357193895&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
