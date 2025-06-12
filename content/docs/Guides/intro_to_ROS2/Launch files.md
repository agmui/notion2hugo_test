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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JPREF7Z%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIE4w4yrXLDH%2FXpd%2FKwJL0%2FXFee31x2p0oF3F0a7I8Ed4AiEA0mhQwQOBlDbT%2F8rXrBqxhzkvh2W%2BQtC8xwAZaSJj3j4qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNoWNciuUnuABjepbircA7N7SxzMQvkVTtRL9HpU18ifJcU0dNtLBizyPqCjjX3taXTu5lZ6KbGDaZWiriO7yBLTmvnv4W2wRxlRcpa2Mc29BRV7DCRnuIwOE0329HE607MOO%2FPxUu%2FlYuOSslpw2ET%2FHqMgcqo71UE1Rt88GljNp%2Bd%2B%2BXOAtCTm1i%2B9bpDi8YX%2F6pav7brmSLA5GtJbOkOCgLqxKEHSxdJhtXPUe2S5bekU8NdtflmYlUTQuymt38UtzZnh9ZTVP377LKGeirP1NYmN4HGxBFEZ6qoiJK%2BVzqjeu5%2FEFjPk7Ma92VzWVIu0ghPL2UnWXx9GdxUMOWApVsRkBs%2Fwc6SA%2Bh%2FpyAZrkubw2g5%2FNZu4biTnzL0%2Fes4R4tb2UfxSX43ZWTsNk6A1Md19%2BFBeV9MbQAMAPUY7fFf5%2By%2FrF8B2CPlmfKXIflL6pOGQEi9%2BWKseAwhdPbdtHPcVwFW7l1n%2BeEKG4l4nVMOqnsXU7K9FRtb5CZ5ux94YeWAYweQ%2Bhg13Q5LZ0MFgfV8ZroxqwFCvpTidV6sGcOKDRChQYeBFTFPqfZZiP8qWsdWnrBXMPvShKjoFI1PRkRzGwAJQodXb9UEVkOqDAs40Yc5CnCdVl3p0aYK3TFup%2B8wqiMQt5UxAMNmPrMIGOqUBnZjgHpk9Ni6qOOK1dlWvY3v8o6WIdUITGtACxJBn9A481DjRAEoyPs%2BTHO41%2BfsyEEfHvbExNxBSTBD5rh14FPpvhGuFN74r%2B14lI7EAKefKexYTeS5g2snJaBSLW4U0fZitI5uWz4rtVLqzXIQdoDMf%2BfcA2EiIuqSx9BauabOfCmPk4a%2F7KjsfpeZPPdDIxkMiIaQDMSyxvx4sqs71CnTt8pWS&X-Amz-Signature=624b348b37f0750e450b2e1e371e1e10db26b5bc0f670f1f57e6bf6bdf8b1e3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JPREF7Z%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIE4w4yrXLDH%2FXpd%2FKwJL0%2FXFee31x2p0oF3F0a7I8Ed4AiEA0mhQwQOBlDbT%2F8rXrBqxhzkvh2W%2BQtC8xwAZaSJj3j4qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNoWNciuUnuABjepbircA7N7SxzMQvkVTtRL9HpU18ifJcU0dNtLBizyPqCjjX3taXTu5lZ6KbGDaZWiriO7yBLTmvnv4W2wRxlRcpa2Mc29BRV7DCRnuIwOE0329HE607MOO%2FPxUu%2FlYuOSslpw2ET%2FHqMgcqo71UE1Rt88GljNp%2Bd%2B%2BXOAtCTm1i%2B9bpDi8YX%2F6pav7brmSLA5GtJbOkOCgLqxKEHSxdJhtXPUe2S5bekU8NdtflmYlUTQuymt38UtzZnh9ZTVP377LKGeirP1NYmN4HGxBFEZ6qoiJK%2BVzqjeu5%2FEFjPk7Ma92VzWVIu0ghPL2UnWXx9GdxUMOWApVsRkBs%2Fwc6SA%2Bh%2FpyAZrkubw2g5%2FNZu4biTnzL0%2Fes4R4tb2UfxSX43ZWTsNk6A1Md19%2BFBeV9MbQAMAPUY7fFf5%2By%2FrF8B2CPlmfKXIflL6pOGQEi9%2BWKseAwhdPbdtHPcVwFW7l1n%2BeEKG4l4nVMOqnsXU7K9FRtb5CZ5ux94YeWAYweQ%2Bhg13Q5LZ0MFgfV8ZroxqwFCvpTidV6sGcOKDRChQYeBFTFPqfZZiP8qWsdWnrBXMPvShKjoFI1PRkRzGwAJQodXb9UEVkOqDAs40Yc5CnCdVl3p0aYK3TFup%2B8wqiMQt5UxAMNmPrMIGOqUBnZjgHpk9Ni6qOOK1dlWvY3v8o6WIdUITGtACxJBn9A481DjRAEoyPs%2BTHO41%2BfsyEEfHvbExNxBSTBD5rh14FPpvhGuFN74r%2B14lI7EAKefKexYTeS5g2snJaBSLW4U0fZitI5uWz4rtVLqzXIQdoDMf%2BfcA2EiIuqSx9BauabOfCmPk4a%2F7KjsfpeZPPdDIxkMiIaQDMSyxvx4sqs71CnTt8pWS&X-Amz-Signature=1952093029ed73f4100a556718893ae6f26490aeae6d84c228e6b33c8493eced&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JPREF7Z%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIE4w4yrXLDH%2FXpd%2FKwJL0%2FXFee31x2p0oF3F0a7I8Ed4AiEA0mhQwQOBlDbT%2F8rXrBqxhzkvh2W%2BQtC8xwAZaSJj3j4qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNoWNciuUnuABjepbircA7N7SxzMQvkVTtRL9HpU18ifJcU0dNtLBizyPqCjjX3taXTu5lZ6KbGDaZWiriO7yBLTmvnv4W2wRxlRcpa2Mc29BRV7DCRnuIwOE0329HE607MOO%2FPxUu%2FlYuOSslpw2ET%2FHqMgcqo71UE1Rt88GljNp%2Bd%2B%2BXOAtCTm1i%2B9bpDi8YX%2F6pav7brmSLA5GtJbOkOCgLqxKEHSxdJhtXPUe2S5bekU8NdtflmYlUTQuymt38UtzZnh9ZTVP377LKGeirP1NYmN4HGxBFEZ6qoiJK%2BVzqjeu5%2FEFjPk7Ma92VzWVIu0ghPL2UnWXx9GdxUMOWApVsRkBs%2Fwc6SA%2Bh%2FpyAZrkubw2g5%2FNZu4biTnzL0%2Fes4R4tb2UfxSX43ZWTsNk6A1Md19%2BFBeV9MbQAMAPUY7fFf5%2By%2FrF8B2CPlmfKXIflL6pOGQEi9%2BWKseAwhdPbdtHPcVwFW7l1n%2BeEKG4l4nVMOqnsXU7K9FRtb5CZ5ux94YeWAYweQ%2Bhg13Q5LZ0MFgfV8ZroxqwFCvpTidV6sGcOKDRChQYeBFTFPqfZZiP8qWsdWnrBXMPvShKjoFI1PRkRzGwAJQodXb9UEVkOqDAs40Yc5CnCdVl3p0aYK3TFup%2B8wqiMQt5UxAMNmPrMIGOqUBnZjgHpk9Ni6qOOK1dlWvY3v8o6WIdUITGtACxJBn9A481DjRAEoyPs%2BTHO41%2BfsyEEfHvbExNxBSTBD5rh14FPpvhGuFN74r%2B14lI7EAKefKexYTeS5g2snJaBSLW4U0fZitI5uWz4rtVLqzXIQdoDMf%2BfcA2EiIuqSx9BauabOfCmPk4a%2F7KjsfpeZPPdDIxkMiIaQDMSyxvx4sqs71CnTt8pWS&X-Amz-Signature=4faf3231d310b0315bd073a4e2b029f6e6a57e8a00cd34eefe132fc97f15f258&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
