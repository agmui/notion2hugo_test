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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSPABDOM%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIBEpMXSoEkW5YE%2FlqH7kerZ0SFt2DLx84lLXQ2bfphluAiB8s3oLTWK8lzokUAOCzeqBLa0E9MlykQarm81xJnI2XCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIM0AAlW28u5GI1MFKwKtwDwBCo7eLZUwyS3k8xhLR%2BY7LgXy0fPjHfkbQs9cKjer%2BGULPF5ajPVMQI66W3C2Gh2oUAmXPBPcITTtF9x9DCAslcOeu437aFh2LnrCYzbjFtZIB%2Fc0we18qzoEDmQXDwFX3KmJo6S4X3YKRPcl4niMhj4abnStW2nazPfX%2BaGT%2FTXYupU5nP0lyXt3jHGl%2FaNuBrDuF7NrmNJQSeGvgx4f%2BQO1kYCXFeLXvZSccEBxCFJedRhOjwrs%2BjZghxnntzKW%2FPUsdVhCRJqGHIWhGSqM1NX6gKvzPQ%2BKQU%2BpIoACf6IRiYEhpOs5grd613dmZHEuO18DRxrEV4yurINOqPESDIUznkN0B%2BjY1ioFqK84ARhIRCcG%2BTRW2Amg36W%2B0mDQQ6Hn2PnJyLlfS8RvB1wUseY91eQsqxpIHbzG5FkhAptEiBZtpSHt1ekvvpvZshvD%2BcZetUurHDsidfFjMIVKGbgS2yNsjWE6Qg8PkeCq4loelIcD1qQfEwmf8QiiN4Uz7uizxyCYgXJ6ZlZ6JCCIzQ1OMgmiAfXnWrKe1nVGYU5fW2tpCsl3wWcSoziXan7SJxKypMVpE4EO5ascNxDs8W1cnhgQwYt9fajEaZqzqSNsg93XJHrL9Vt70wit3BxAY6pgHSeKo7eG5IcjV9SZ1se1paFzr59bfwG3wpNgHkR%2BOnmKxDjB%2FHlEdi2lygaOdgznm1fciVHh43NlR93DHLw1Vqh8uWwTfM7XBMj0hiyOiYD%2FPzkyQWVKZ5NyybKJV25XM7I4ZRnjEGQGR73unx81DNow3txmQVoC%2F1xSwwPockJAn%2B%2FBqw5SUsxloTVHHrXpO%2BObLhIoi4nWd2nrEoVoCWSChLaefN&X-Amz-Signature=d41ad8c10b48b038f71ef53454f4a021f752b653957e181c6c21158576fc07a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSPABDOM%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIBEpMXSoEkW5YE%2FlqH7kerZ0SFt2DLx84lLXQ2bfphluAiB8s3oLTWK8lzokUAOCzeqBLa0E9MlykQarm81xJnI2XCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIM0AAlW28u5GI1MFKwKtwDwBCo7eLZUwyS3k8xhLR%2BY7LgXy0fPjHfkbQs9cKjer%2BGULPF5ajPVMQI66W3C2Gh2oUAmXPBPcITTtF9x9DCAslcOeu437aFh2LnrCYzbjFtZIB%2Fc0we18qzoEDmQXDwFX3KmJo6S4X3YKRPcl4niMhj4abnStW2nazPfX%2BaGT%2FTXYupU5nP0lyXt3jHGl%2FaNuBrDuF7NrmNJQSeGvgx4f%2BQO1kYCXFeLXvZSccEBxCFJedRhOjwrs%2BjZghxnntzKW%2FPUsdVhCRJqGHIWhGSqM1NX6gKvzPQ%2BKQU%2BpIoACf6IRiYEhpOs5grd613dmZHEuO18DRxrEV4yurINOqPESDIUznkN0B%2BjY1ioFqK84ARhIRCcG%2BTRW2Amg36W%2B0mDQQ6Hn2PnJyLlfS8RvB1wUseY91eQsqxpIHbzG5FkhAptEiBZtpSHt1ekvvpvZshvD%2BcZetUurHDsidfFjMIVKGbgS2yNsjWE6Qg8PkeCq4loelIcD1qQfEwmf8QiiN4Uz7uizxyCYgXJ6ZlZ6JCCIzQ1OMgmiAfXnWrKe1nVGYU5fW2tpCsl3wWcSoziXan7SJxKypMVpE4EO5ascNxDs8W1cnhgQwYt9fajEaZqzqSNsg93XJHrL9Vt70wit3BxAY6pgHSeKo7eG5IcjV9SZ1se1paFzr59bfwG3wpNgHkR%2BOnmKxDjB%2FHlEdi2lygaOdgznm1fciVHh43NlR93DHLw1Vqh8uWwTfM7XBMj0hiyOiYD%2FPzkyQWVKZ5NyybKJV25XM7I4ZRnjEGQGR73unx81DNow3txmQVoC%2F1xSwwPockJAn%2B%2FBqw5SUsxloTVHHrXpO%2BObLhIoi4nWd2nrEoVoCWSChLaefN&X-Amz-Signature=eb789ebed95acfa2b5da72453100e6fa49d951c7a756aa092b80ee666e3466ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSPABDOM%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIBEpMXSoEkW5YE%2FlqH7kerZ0SFt2DLx84lLXQ2bfphluAiB8s3oLTWK8lzokUAOCzeqBLa0E9MlykQarm81xJnI2XCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIM0AAlW28u5GI1MFKwKtwDwBCo7eLZUwyS3k8xhLR%2BY7LgXy0fPjHfkbQs9cKjer%2BGULPF5ajPVMQI66W3C2Gh2oUAmXPBPcITTtF9x9DCAslcOeu437aFh2LnrCYzbjFtZIB%2Fc0we18qzoEDmQXDwFX3KmJo6S4X3YKRPcl4niMhj4abnStW2nazPfX%2BaGT%2FTXYupU5nP0lyXt3jHGl%2FaNuBrDuF7NrmNJQSeGvgx4f%2BQO1kYCXFeLXvZSccEBxCFJedRhOjwrs%2BjZghxnntzKW%2FPUsdVhCRJqGHIWhGSqM1NX6gKvzPQ%2BKQU%2BpIoACf6IRiYEhpOs5grd613dmZHEuO18DRxrEV4yurINOqPESDIUznkN0B%2BjY1ioFqK84ARhIRCcG%2BTRW2Amg36W%2B0mDQQ6Hn2PnJyLlfS8RvB1wUseY91eQsqxpIHbzG5FkhAptEiBZtpSHt1ekvvpvZshvD%2BcZetUurHDsidfFjMIVKGbgS2yNsjWE6Qg8PkeCq4loelIcD1qQfEwmf8QiiN4Uz7uizxyCYgXJ6ZlZ6JCCIzQ1OMgmiAfXnWrKe1nVGYU5fW2tpCsl3wWcSoziXan7SJxKypMVpE4EO5ascNxDs8W1cnhgQwYt9fajEaZqzqSNsg93XJHrL9Vt70wit3BxAY6pgHSeKo7eG5IcjV9SZ1se1paFzr59bfwG3wpNgHkR%2BOnmKxDjB%2FHlEdi2lygaOdgznm1fciVHh43NlR93DHLw1Vqh8uWwTfM7XBMj0hiyOiYD%2FPzkyQWVKZ5NyybKJV25XM7I4ZRnjEGQGR73unx81DNow3txmQVoC%2F1xSwwPockJAn%2B%2FBqw5SUsxloTVHHrXpO%2BObLhIoi4nWd2nrEoVoCWSChLaefN&X-Amz-Signature=2303f54d26cafe9d9dd0f1468e1ebb2b35e91f434ba5c97d6080115f6e7cb53f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
