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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVGOEJFX%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T090506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGbMnXqvXba5kOS1YRdr8ANLa4UHRH%2BFUeeyBM0R8ehYAiEA6poPUK2K5%2F4mK6o5N8R9GzolWV9atTSS1Sx7QcP4qlYqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBf1h%2FtI6UemtZNR8CrcA1ih7hllK%2BhepjWhaBWzqBxCwiWhnK%2BV2%2FOqrBFdhj0HcVX4mSZ81KINyAqM36azIKuWI3rg3id7Tt3bOygCZ0Tvrh7%2BnO53Q0%2BUZV2C601IU0fadLXFKQCYmRb%2FVr80Twss0d7jAiY%2BTrSmbPo08XNBIoIANDTDzSVbPcxOROr6QyXZ0JP6oDG1KmZY9TWGNLi9cNiLXCokd%2F3psgxtbWxqYH94NR65tisgWj3TPU0%2Fy2OkSd5mEQpMEC2KBkQDuBPBgZZm%2FTR54AR1fbP84JLUlpXUc5OTkEeW3WNYeuAoj8rp3TkAPXyC4zcE6qZBbvq9VDjfj1xeN5f0oVpnz28u7M4V%2F3hV0Q7Pggfyu6k69f1I0eLtzgt6rV0JDSK79oaig0jgbFNeOIf4kMtpWv%2BElIyrkASn9RY%2BtafX19qa2RHZSL%2FAMv45yruyzufFESXI0Kxo4GQe4nHCyAXV9BUuERu2FqtC4K%2FkraTLc0YhFR%2F%2FQGf3uGeiAqfptxzcq%2BmxY5HuKpoHqFMAZwIkRMV7QiSAh%2BhoFyvK20j0BRZBrFKhgDkk%2BJYhuNr6vfA69IaGAP4h%2F2Fu9X9NfsNcZoufSvyiJjlf315Qlp56suCai%2BMdhCWVy9lFM8WEMOC%2BoL0GOqUBVUYmVU5n8NWKvP8h6QptTmeep354DHv94GBWaK4snzhEYV2I90kAcQomvHHbJdctyIhu5lENeUOEJ3F%2BHQfMcMzRZ2GpnZq3uihUsaZ46NHeZQBhKFFRDBV7WZDzS9hY5pi0fT3sxe3PrQ4afyNglJSmdMckcQsZ4tJ6xfD30uFnph60e8N10KV5zVk2jL41F0IDatGOVsqtQRocz9zP8c2tkLSr&X-Amz-Signature=3ff61bf122f31ad337cef59d1be17a4cf8b2ca35434e08be696e22fb2a9b0b34&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVGOEJFX%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T090506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGbMnXqvXba5kOS1YRdr8ANLa4UHRH%2BFUeeyBM0R8ehYAiEA6poPUK2K5%2F4mK6o5N8R9GzolWV9atTSS1Sx7QcP4qlYqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBf1h%2FtI6UemtZNR8CrcA1ih7hllK%2BhepjWhaBWzqBxCwiWhnK%2BV2%2FOqrBFdhj0HcVX4mSZ81KINyAqM36azIKuWI3rg3id7Tt3bOygCZ0Tvrh7%2BnO53Q0%2BUZV2C601IU0fadLXFKQCYmRb%2FVr80Twss0d7jAiY%2BTrSmbPo08XNBIoIANDTDzSVbPcxOROr6QyXZ0JP6oDG1KmZY9TWGNLi9cNiLXCokd%2F3psgxtbWxqYH94NR65tisgWj3TPU0%2Fy2OkSd5mEQpMEC2KBkQDuBPBgZZm%2FTR54AR1fbP84JLUlpXUc5OTkEeW3WNYeuAoj8rp3TkAPXyC4zcE6qZBbvq9VDjfj1xeN5f0oVpnz28u7M4V%2F3hV0Q7Pggfyu6k69f1I0eLtzgt6rV0JDSK79oaig0jgbFNeOIf4kMtpWv%2BElIyrkASn9RY%2BtafX19qa2RHZSL%2FAMv45yruyzufFESXI0Kxo4GQe4nHCyAXV9BUuERu2FqtC4K%2FkraTLc0YhFR%2F%2FQGf3uGeiAqfptxzcq%2BmxY5HuKpoHqFMAZwIkRMV7QiSAh%2BhoFyvK20j0BRZBrFKhgDkk%2BJYhuNr6vfA69IaGAP4h%2F2Fu9X9NfsNcZoufSvyiJjlf315Qlp56suCai%2BMdhCWVy9lFM8WEMOC%2BoL0GOqUBVUYmVU5n8NWKvP8h6QptTmeep354DHv94GBWaK4snzhEYV2I90kAcQomvHHbJdctyIhu5lENeUOEJ3F%2BHQfMcMzRZ2GpnZq3uihUsaZ46NHeZQBhKFFRDBV7WZDzS9hY5pi0fT3sxe3PrQ4afyNglJSmdMckcQsZ4tJ6xfD30uFnph60e8N10KV5zVk2jL41F0IDatGOVsqtQRocz9zP8c2tkLSr&X-Amz-Signature=817b79a9996d340d8c59dc17b0f070808395102303d091aa7e6fc5f3aa248553&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVGOEJFX%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T090506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGbMnXqvXba5kOS1YRdr8ANLa4UHRH%2BFUeeyBM0R8ehYAiEA6poPUK2K5%2F4mK6o5N8R9GzolWV9atTSS1Sx7QcP4qlYqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBf1h%2FtI6UemtZNR8CrcA1ih7hllK%2BhepjWhaBWzqBxCwiWhnK%2BV2%2FOqrBFdhj0HcVX4mSZ81KINyAqM36azIKuWI3rg3id7Tt3bOygCZ0Tvrh7%2BnO53Q0%2BUZV2C601IU0fadLXFKQCYmRb%2FVr80Twss0d7jAiY%2BTrSmbPo08XNBIoIANDTDzSVbPcxOROr6QyXZ0JP6oDG1KmZY9TWGNLi9cNiLXCokd%2F3psgxtbWxqYH94NR65tisgWj3TPU0%2Fy2OkSd5mEQpMEC2KBkQDuBPBgZZm%2FTR54AR1fbP84JLUlpXUc5OTkEeW3WNYeuAoj8rp3TkAPXyC4zcE6qZBbvq9VDjfj1xeN5f0oVpnz28u7M4V%2F3hV0Q7Pggfyu6k69f1I0eLtzgt6rV0JDSK79oaig0jgbFNeOIf4kMtpWv%2BElIyrkASn9RY%2BtafX19qa2RHZSL%2FAMv45yruyzufFESXI0Kxo4GQe4nHCyAXV9BUuERu2FqtC4K%2FkraTLc0YhFR%2F%2FQGf3uGeiAqfptxzcq%2BmxY5HuKpoHqFMAZwIkRMV7QiSAh%2BhoFyvK20j0BRZBrFKhgDkk%2BJYhuNr6vfA69IaGAP4h%2F2Fu9X9NfsNcZoufSvyiJjlf315Qlp56suCai%2BMdhCWVy9lFM8WEMOC%2BoL0GOqUBVUYmVU5n8NWKvP8h6QptTmeep354DHv94GBWaK4snzhEYV2I90kAcQomvHHbJdctyIhu5lENeUOEJ3F%2BHQfMcMzRZ2GpnZq3uihUsaZ46NHeZQBhKFFRDBV7WZDzS9hY5pi0fT3sxe3PrQ4afyNglJSmdMckcQsZ4tJ6xfD30uFnph60e8N10KV5zVk2jL41F0IDatGOVsqtQRocz9zP8c2tkLSr&X-Amz-Signature=b0425f2e7bb7c24723e7ad883fc85721d013c49edc78b7c2c6ceceafcb453c4f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
