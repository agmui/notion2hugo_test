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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QHHX5WZ%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4zvlQmylmmCFitZvhH5DSndzpUShogxqOdePFjvai6AiBThEFJM2vQFy2blOdkuVVcEKMgx0ficA0FYFCiBElkdiqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRgzg4HF73DK0dWxZKtwDzwyH7AAoOpY86UWF8IyrcFb8Eg%2BHXs4hsZcG1bE0m2JIDK2MeRFNlrLQQe4n9FdugumMzvubx6djPUFbR7WkVj8kwoG9xEW%2F4L8iE74OtdQabXLZC%2Fc41b6rtsDygwTg0FmHn55Httl%2Fvp%2Bk%2FAo2DXucgTe5p3%2BB0rP6yGb%2FPQhv%2FQMeppNx%2Bjca7WSA0YDnvlTxphFt3G1Z1weQh%2F7kaQvuokPntqoGhALfOhK%2FA0IMUqqGFRW1oHCXH%2BZzVgb5g8kfa0I6wHtpjFPTrSrk6LlIyW0L53rzCkWEUBO1baGuHkKQ8lYXgDDGT5mXjhwso%2BGqwKeEUNfXlppQ0opIB2A8VXzxlYNpZsF%2Fa02%2FJvNMqk1DMvLgyIhH3SnmFP1pUY2j89ukC7LUFvps9R9ylivNRcT3X5NtzUdE9o2F5h92IUxhuwvy5JFOAsE3LolDZCySFxMR7%2Blb3w%2BjolB%2BLLZUVaCj4MssXS1gzGZGOCZ%2Bbn7rjvye6soYFgKrZJaVEAKzDEMQCmjmPYXv%2Ba%2Bytoxkpc8m9CAMu4UiJ2vz1kKPgsYlmvT%2F7O4HGNR5CuBz%2BEkpCrEW9p5EBpM2h0CCAVUYcy5Fa4R7Hc8DPUSfJxtkkdbi7yGAIRf8PvcwgpHYzQY6pgHEJqtHbGmLzZun3aRQZdyFIhfjxHKNJ4%2FqxKG%2FG8%2BcULg0Fvhb6mHDyWl7FL2JVq0y50um3bZvMx3ZYSdXcVnSpc3YIITFW%2FRJQlrfCThrkoLoQg2Qclm%2Fi4Pi6cq%2F5CTcUGugrGpb9MfRtbVycSR6yqVbT%2FqNfXebhR6o4bPidJkozyl6yNx%2FsaEhUxj%2F%2BsVu5FpRtMKtRrza6k2GeADnbIo44QVd&X-Amz-Signature=d27535385e49c5e7921326d2e5c9cf2ba59041f096785c24e0e1fa7901c0d3a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QHHX5WZ%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4zvlQmylmmCFitZvhH5DSndzpUShogxqOdePFjvai6AiBThEFJM2vQFy2blOdkuVVcEKMgx0ficA0FYFCiBElkdiqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRgzg4HF73DK0dWxZKtwDzwyH7AAoOpY86UWF8IyrcFb8Eg%2BHXs4hsZcG1bE0m2JIDK2MeRFNlrLQQe4n9FdugumMzvubx6djPUFbR7WkVj8kwoG9xEW%2F4L8iE74OtdQabXLZC%2Fc41b6rtsDygwTg0FmHn55Httl%2Fvp%2Bk%2FAo2DXucgTe5p3%2BB0rP6yGb%2FPQhv%2FQMeppNx%2Bjca7WSA0YDnvlTxphFt3G1Z1weQh%2F7kaQvuokPntqoGhALfOhK%2FA0IMUqqGFRW1oHCXH%2BZzVgb5g8kfa0I6wHtpjFPTrSrk6LlIyW0L53rzCkWEUBO1baGuHkKQ8lYXgDDGT5mXjhwso%2BGqwKeEUNfXlppQ0opIB2A8VXzxlYNpZsF%2Fa02%2FJvNMqk1DMvLgyIhH3SnmFP1pUY2j89ukC7LUFvps9R9ylivNRcT3X5NtzUdE9o2F5h92IUxhuwvy5JFOAsE3LolDZCySFxMR7%2Blb3w%2BjolB%2BLLZUVaCj4MssXS1gzGZGOCZ%2Bbn7rjvye6soYFgKrZJaVEAKzDEMQCmjmPYXv%2Ba%2Bytoxkpc8m9CAMu4UiJ2vz1kKPgsYlmvT%2F7O4HGNR5CuBz%2BEkpCrEW9p5EBpM2h0CCAVUYcy5Fa4R7Hc8DPUSfJxtkkdbi7yGAIRf8PvcwgpHYzQY6pgHEJqtHbGmLzZun3aRQZdyFIhfjxHKNJ4%2FqxKG%2FG8%2BcULg0Fvhb6mHDyWl7FL2JVq0y50um3bZvMx3ZYSdXcVnSpc3YIITFW%2FRJQlrfCThrkoLoQg2Qclm%2Fi4Pi6cq%2F5CTcUGugrGpb9MfRtbVycSR6yqVbT%2FqNfXebhR6o4bPidJkozyl6yNx%2FsaEhUxj%2F%2BsVu5FpRtMKtRrza6k2GeADnbIo44QVd&X-Amz-Signature=a44af59a8bec5ea062ac54fa252d310e4533af23854ffb9430eee45b986b8a98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QHHX5WZ%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4zvlQmylmmCFitZvhH5DSndzpUShogxqOdePFjvai6AiBThEFJM2vQFy2blOdkuVVcEKMgx0ficA0FYFCiBElkdiqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRgzg4HF73DK0dWxZKtwDzwyH7AAoOpY86UWF8IyrcFb8Eg%2BHXs4hsZcG1bE0m2JIDK2MeRFNlrLQQe4n9FdugumMzvubx6djPUFbR7WkVj8kwoG9xEW%2F4L8iE74OtdQabXLZC%2Fc41b6rtsDygwTg0FmHn55Httl%2Fvp%2Bk%2FAo2DXucgTe5p3%2BB0rP6yGb%2FPQhv%2FQMeppNx%2Bjca7WSA0YDnvlTxphFt3G1Z1weQh%2F7kaQvuokPntqoGhALfOhK%2FA0IMUqqGFRW1oHCXH%2BZzVgb5g8kfa0I6wHtpjFPTrSrk6LlIyW0L53rzCkWEUBO1baGuHkKQ8lYXgDDGT5mXjhwso%2BGqwKeEUNfXlppQ0opIB2A8VXzxlYNpZsF%2Fa02%2FJvNMqk1DMvLgyIhH3SnmFP1pUY2j89ukC7LUFvps9R9ylivNRcT3X5NtzUdE9o2F5h92IUxhuwvy5JFOAsE3LolDZCySFxMR7%2Blb3w%2BjolB%2BLLZUVaCj4MssXS1gzGZGOCZ%2Bbn7rjvye6soYFgKrZJaVEAKzDEMQCmjmPYXv%2Ba%2Bytoxkpc8m9CAMu4UiJ2vz1kKPgsYlmvT%2F7O4HGNR5CuBz%2BEkpCrEW9p5EBpM2h0CCAVUYcy5Fa4R7Hc8DPUSfJxtkkdbi7yGAIRf8PvcwgpHYzQY6pgHEJqtHbGmLzZun3aRQZdyFIhfjxHKNJ4%2FqxKG%2FG8%2BcULg0Fvhb6mHDyWl7FL2JVq0y50um3bZvMx3ZYSdXcVnSpc3YIITFW%2FRJQlrfCThrkoLoQg2Qclm%2Fi4Pi6cq%2F5CTcUGugrGpb9MfRtbVycSR6yqVbT%2FqNfXebhR6o4bPidJkozyl6yNx%2FsaEhUxj%2F%2BsVu5FpRtMKtRrza6k2GeADnbIo44QVd&X-Amz-Signature=ffe99347f949cb65511ac9e3e7814332af1d4c6301777b1d7fa9a7774a93646c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
