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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXQCGMJ5%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIA%2BAk4RZojo08VjSBNeCsvFez2xAa9fbHqo%2B1RrPjEhNAiBJESK2oJjJ1W5y7K6o41I8bJeGaViIBD8Sst9Ht8Z%2BwSqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEqeIqm9JK%2BnLdMfbKtwDul1WwqEHSJdbairtVa0n5jokM7QJIpkTu6MAs1GCOe1mODT%2By6XBB4QMq2TE7uGUlRu%2FGCFl5iqGHXK%2FVx5BgTYRZusJM7WrgfZL1AOAISPdKcJMgJpR6uWPLwraNdeXDqVrS%2Bbr7GuKOg%2B%2Fdu1mqpU7osKSymQA8QQLuJsneuqYMOGQmLqNOduYdOlQauru2uN9Y4wqAO%2F%2B2GIzNwZrlYVEcrxF91uJPdG0Yf9KTdIErOZr8HQJM9szaO5aAeAbNfpx32z5xwTVs%2BxIP7SJGf%2FRG3RG%2FCh3bMUbTl0BQtwVL%2B%2F1tvrkRbtxyavucpOLnTjRBDPu%2BEz8Oyuix4R0EzSMJvb14FFNOJQ5MVyR9LsE2Ah9vdp4QYGAQX%2FXgNxwiZWo1g%2FwUJ9X8JABo4jVFy7xFTDWOgDRcA3JZu571x%2BCgsPnvKul2VDj%2FxWNy7JVOJG172bhH3hF62nSNgcFOHvjeB32YBo9yvyNzbKkB5zDIP6cbTmqV1nFX0AV0VNfZCJbG69bWdL%2BlRsC%2BEWXZBGiwicprbBF0ZJc%2FuhlwIf2PfR%2FbDo4sWCr%2B6wJy9tg5TJTUfmOKR8mHuS9%2FmycSLBA6afAC%2FCE%2FaZjIpn1BaWEx0VzgjJol16D2lIw1MC60wY6pgF3b9MZTLzjmiM2aLTELOeQW8HBfSvYE3HZvaCgPbCiJg0uhjvA8cUxMV7j4i5IkRpcbKV9Llfp4%2FL%2BAPlEDYN5zWW%2B1X1OE7PWKf0SsPPuHVfytrsVbkOTZm6dXkYeQ6KhZZ0c5wFCP7toocwjZR%2BXEUgNfQapDHi9dcxR5ta79YcUONQQ6DC32e6zWsPvKoyUp87iS6ZyFXx8gbu%2BUFrPN8SId0W4&X-Amz-Signature=9a5e47c4316052bfcbca762d276e4b6b3f6b6aea8ce0428699589cbce705c35a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXQCGMJ5%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIA%2BAk4RZojo08VjSBNeCsvFez2xAa9fbHqo%2B1RrPjEhNAiBJESK2oJjJ1W5y7K6o41I8bJeGaViIBD8Sst9Ht8Z%2BwSqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEqeIqm9JK%2BnLdMfbKtwDul1WwqEHSJdbairtVa0n5jokM7QJIpkTu6MAs1GCOe1mODT%2By6XBB4QMq2TE7uGUlRu%2FGCFl5iqGHXK%2FVx5BgTYRZusJM7WrgfZL1AOAISPdKcJMgJpR6uWPLwraNdeXDqVrS%2Bbr7GuKOg%2B%2Fdu1mqpU7osKSymQA8QQLuJsneuqYMOGQmLqNOduYdOlQauru2uN9Y4wqAO%2F%2B2GIzNwZrlYVEcrxF91uJPdG0Yf9KTdIErOZr8HQJM9szaO5aAeAbNfpx32z5xwTVs%2BxIP7SJGf%2FRG3RG%2FCh3bMUbTl0BQtwVL%2B%2F1tvrkRbtxyavucpOLnTjRBDPu%2BEz8Oyuix4R0EzSMJvb14FFNOJQ5MVyR9LsE2Ah9vdp4QYGAQX%2FXgNxwiZWo1g%2FwUJ9X8JABo4jVFy7xFTDWOgDRcA3JZu571x%2BCgsPnvKul2VDj%2FxWNy7JVOJG172bhH3hF62nSNgcFOHvjeB32YBo9yvyNzbKkB5zDIP6cbTmqV1nFX0AV0VNfZCJbG69bWdL%2BlRsC%2BEWXZBGiwicprbBF0ZJc%2FuhlwIf2PfR%2FbDo4sWCr%2B6wJy9tg5TJTUfmOKR8mHuS9%2FmycSLBA6afAC%2FCE%2FaZjIpn1BaWEx0VzgjJol16D2lIw1MC60wY6pgF3b9MZTLzjmiM2aLTELOeQW8HBfSvYE3HZvaCgPbCiJg0uhjvA8cUxMV7j4i5IkRpcbKV9Llfp4%2FL%2BAPlEDYN5zWW%2B1X1OE7PWKf0SsPPuHVfytrsVbkOTZm6dXkYeQ6KhZZ0c5wFCP7toocwjZR%2BXEUgNfQapDHi9dcxR5ta79YcUONQQ6DC32e6zWsPvKoyUp87iS6ZyFXx8gbu%2BUFrPN8SId0W4&X-Amz-Signature=c8c0b711ca58c591dbf1f6bbeb7a43f4d79f242add32d50318acf6332f6a882f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXQCGMJ5%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIA%2BAk4RZojo08VjSBNeCsvFez2xAa9fbHqo%2B1RrPjEhNAiBJESK2oJjJ1W5y7K6o41I8bJeGaViIBD8Sst9Ht8Z%2BwSqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEqeIqm9JK%2BnLdMfbKtwDul1WwqEHSJdbairtVa0n5jokM7QJIpkTu6MAs1GCOe1mODT%2By6XBB4QMq2TE7uGUlRu%2FGCFl5iqGHXK%2FVx5BgTYRZusJM7WrgfZL1AOAISPdKcJMgJpR6uWPLwraNdeXDqVrS%2Bbr7GuKOg%2B%2Fdu1mqpU7osKSymQA8QQLuJsneuqYMOGQmLqNOduYdOlQauru2uN9Y4wqAO%2F%2B2GIzNwZrlYVEcrxF91uJPdG0Yf9KTdIErOZr8HQJM9szaO5aAeAbNfpx32z5xwTVs%2BxIP7SJGf%2FRG3RG%2FCh3bMUbTl0BQtwVL%2B%2F1tvrkRbtxyavucpOLnTjRBDPu%2BEz8Oyuix4R0EzSMJvb14FFNOJQ5MVyR9LsE2Ah9vdp4QYGAQX%2FXgNxwiZWo1g%2FwUJ9X8JABo4jVFy7xFTDWOgDRcA3JZu571x%2BCgsPnvKul2VDj%2FxWNy7JVOJG172bhH3hF62nSNgcFOHvjeB32YBo9yvyNzbKkB5zDIP6cbTmqV1nFX0AV0VNfZCJbG69bWdL%2BlRsC%2BEWXZBGiwicprbBF0ZJc%2FuhlwIf2PfR%2FbDo4sWCr%2B6wJy9tg5TJTUfmOKR8mHuS9%2FmycSLBA6afAC%2FCE%2FaZjIpn1BaWEx0VzgjJol16D2lIw1MC60wY6pgF3b9MZTLzjmiM2aLTELOeQW8HBfSvYE3HZvaCgPbCiJg0uhjvA8cUxMV7j4i5IkRpcbKV9Llfp4%2FL%2BAPlEDYN5zWW%2B1X1OE7PWKf0SsPPuHVfytrsVbkOTZm6dXkYeQ6KhZZ0c5wFCP7toocwjZR%2BXEUgNfQapDHi9dcxR5ta79YcUONQQ6DC32e6zWsPvKoyUp87iS6ZyFXx8gbu%2BUFrPN8SId0W4&X-Amz-Signature=89aad4b25c4a6fe2afba4715d533b915975b89272a14b8a7f11da61f10eee0c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
