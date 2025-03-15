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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCS7L6PS%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T150531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpWb%2Bc3kEslFYmc6EOfG%2BszoY7cF%2FtH6v6vf6G3iKNhQIgAdhLqEhtDZ8fhm5JGr1uGlvHab1nXmWpqGX7FeanfoYq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDJK3XlHN784XFnedYircA%2F4LTXYSZykc1imbLrS3Bo%2BwXe4ca8eOzspNX28yL9T%2BLdr2N5ZKlI4clsw2biRcx6QHb8EvI4f3fzdxEAC%2BdWnlljPAUKUPI55hmiYn5K3LEriIacFtXZO6VPpHH2V%2BWSZ%2BuxrQYFfBrRtUIJ0xgn82bB5ntMJrIoYLoNigFofhbktQ3My6fpaY2%2F48fIFbImQGUeYa7NcV0iAn2VV6bXhXOCExhVIVqPrd%2FyBqIwx8SJK7I5j2EpTgR2Ca9dJl8hD%2BbOtkd11tX1ynOHr4IsMzgj012bhChp7Q3hUhIrPCHaY3KmHJX8dVKqNLFfMMtfORPF8CSGjnS0UdH4nOvd8H97ShfW4KmzE7NrTAUrU7OUorh1vcORxcO8N354DVjzSbDY8GKPZcAyDRPTcv2zuD1690EslvaAbUb99%2BfhhR8zRnYOcdU7RE%2B9GsZ595NCLlZAgC7I2FALUMXogLTFlJ4XSad3UyuS%2F8VX6ptUq2RJrMMymP6HwH4qMuv7LUnZroD1j%2BLc%2B4gt5vvZa5ixEAs%2FZ%2BY8j4eQnWyGFrFXnCeLDeA2kNQtSafdeKJCwtGDt2PIN4O1jf9Y5%2BzWODMM5gtGTnr6MCz%2BHHryB7lgIjtpTHtFEf4zocNrGcMJDv1b4GOqUBgw02yptKJncRBXi9ZSuQBA%2F2jp4PJkOmO1Ydb1vpg%2FA8klvxQlFbpIyDzxW%2BCb81nYB8thJLD8U5QR%2F%2BCC%2FzTJztygg%2B2%2FlENSSeNwe6wBo%2BO9s7pNCBzfV0wBVxtyzg5JhhxXozNif5SIS%2BijMek%2FwB7uglTJDannsrL9bUwHgmoYhCzH1DdFG623nTfw9xu0Zlyu%2FeDNvC6fNntRcrbX8DeIR0&X-Amz-Signature=f344422fbdb8c473072d59193b2e42c03842f0cbbdc9113d55070c4692e2712b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCS7L6PS%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T150531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpWb%2Bc3kEslFYmc6EOfG%2BszoY7cF%2FtH6v6vf6G3iKNhQIgAdhLqEhtDZ8fhm5JGr1uGlvHab1nXmWpqGX7FeanfoYq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDJK3XlHN784XFnedYircA%2F4LTXYSZykc1imbLrS3Bo%2BwXe4ca8eOzspNX28yL9T%2BLdr2N5ZKlI4clsw2biRcx6QHb8EvI4f3fzdxEAC%2BdWnlljPAUKUPI55hmiYn5K3LEriIacFtXZO6VPpHH2V%2BWSZ%2BuxrQYFfBrRtUIJ0xgn82bB5ntMJrIoYLoNigFofhbktQ3My6fpaY2%2F48fIFbImQGUeYa7NcV0iAn2VV6bXhXOCExhVIVqPrd%2FyBqIwx8SJK7I5j2EpTgR2Ca9dJl8hD%2BbOtkd11tX1ynOHr4IsMzgj012bhChp7Q3hUhIrPCHaY3KmHJX8dVKqNLFfMMtfORPF8CSGjnS0UdH4nOvd8H97ShfW4KmzE7NrTAUrU7OUorh1vcORxcO8N354DVjzSbDY8GKPZcAyDRPTcv2zuD1690EslvaAbUb99%2BfhhR8zRnYOcdU7RE%2B9GsZ595NCLlZAgC7I2FALUMXogLTFlJ4XSad3UyuS%2F8VX6ptUq2RJrMMymP6HwH4qMuv7LUnZroD1j%2BLc%2B4gt5vvZa5ixEAs%2FZ%2BY8j4eQnWyGFrFXnCeLDeA2kNQtSafdeKJCwtGDt2PIN4O1jf9Y5%2BzWODMM5gtGTnr6MCz%2BHHryB7lgIjtpTHtFEf4zocNrGcMJDv1b4GOqUBgw02yptKJncRBXi9ZSuQBA%2F2jp4PJkOmO1Ydb1vpg%2FA8klvxQlFbpIyDzxW%2BCb81nYB8thJLD8U5QR%2F%2BCC%2FzTJztygg%2B2%2FlENSSeNwe6wBo%2BO9s7pNCBzfV0wBVxtyzg5JhhxXozNif5SIS%2BijMek%2FwB7uglTJDannsrL9bUwHgmoYhCzH1DdFG623nTfw9xu0Zlyu%2FeDNvC6fNntRcrbX8DeIR0&X-Amz-Signature=2f0e55f82579010ecfe42a0938bb8f06f719105c3e643867f820a846693e1605&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCS7L6PS%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T150531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpWb%2Bc3kEslFYmc6EOfG%2BszoY7cF%2FtH6v6vf6G3iKNhQIgAdhLqEhtDZ8fhm5JGr1uGlvHab1nXmWpqGX7FeanfoYq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDJK3XlHN784XFnedYircA%2F4LTXYSZykc1imbLrS3Bo%2BwXe4ca8eOzspNX28yL9T%2BLdr2N5ZKlI4clsw2biRcx6QHb8EvI4f3fzdxEAC%2BdWnlljPAUKUPI55hmiYn5K3LEriIacFtXZO6VPpHH2V%2BWSZ%2BuxrQYFfBrRtUIJ0xgn82bB5ntMJrIoYLoNigFofhbktQ3My6fpaY2%2F48fIFbImQGUeYa7NcV0iAn2VV6bXhXOCExhVIVqPrd%2FyBqIwx8SJK7I5j2EpTgR2Ca9dJl8hD%2BbOtkd11tX1ynOHr4IsMzgj012bhChp7Q3hUhIrPCHaY3KmHJX8dVKqNLFfMMtfORPF8CSGjnS0UdH4nOvd8H97ShfW4KmzE7NrTAUrU7OUorh1vcORxcO8N354DVjzSbDY8GKPZcAyDRPTcv2zuD1690EslvaAbUb99%2BfhhR8zRnYOcdU7RE%2B9GsZ595NCLlZAgC7I2FALUMXogLTFlJ4XSad3UyuS%2F8VX6ptUq2RJrMMymP6HwH4qMuv7LUnZroD1j%2BLc%2B4gt5vvZa5ixEAs%2FZ%2BY8j4eQnWyGFrFXnCeLDeA2kNQtSafdeKJCwtGDt2PIN4O1jf9Y5%2BzWODMM5gtGTnr6MCz%2BHHryB7lgIjtpTHtFEf4zocNrGcMJDv1b4GOqUBgw02yptKJncRBXi9ZSuQBA%2F2jp4PJkOmO1Ydb1vpg%2FA8klvxQlFbpIyDzxW%2BCb81nYB8thJLD8U5QR%2F%2BCC%2FzTJztygg%2B2%2FlENSSeNwe6wBo%2BO9s7pNCBzfV0wBVxtyzg5JhhxXozNif5SIS%2BijMek%2FwB7uglTJDannsrL9bUwHgmoYhCzH1DdFG623nTfw9xu0Zlyu%2FeDNvC6fNntRcrbX8DeIR0&X-Amz-Signature=ad24a494bb33f4fc9176041effead486bf1a9242c7c833919973cdee723173c4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
