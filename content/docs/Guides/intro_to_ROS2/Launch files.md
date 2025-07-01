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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZO7JT5S%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEy9YvIgx1wiR6U2lya6JbY3N56I8NGEkQ0WlwuWwucrAiAwIEAYQz%2F8MNLUZ%2F2SnqtHIZGvrsmlbceX6oz%2Bgd3NViqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbzdZxDmArjuTuiWcKtwDB8srTujQD8MzUTUoEoY4gsRLLQz%2B28QNzKQXJ%2Bs1QOIq7yPSQztvQE8gYxe64jCHog1%2BW6C6cEKOech%2B3MZd0%2Bait6IMT7g9wcv6%2Bg4rOtT7pUV%2FbInpYTCgHx6NYqc7B671O7iLjTNpOuaCx%2B%2F6r56GG74plx1zNf59zcDnRnVv8wZBx1Nk4OdpGW8l%2BBUgsm%2B3a9CU40qCPN1JTeaNJC8UioiYEMma4900RgQdHXm7dT1vknrMJlMMouyrr2L2oVE6uq9khibU5%2Fe4lj%2Biy3RBYRGHUElFbnX0RWPKMlLBn3NjpMozAviIlv3Zn3gwwNweQNvDqCTnogpXVxqY5sqVdUe1uj%2FDnepjRXjePNQr4ospfYy3bV4WWv%2BRWxK8RU7sUEpYrnnPCA3QSDgg86yMQP0kVah3k18SmyVEQgtUWQXmaTQZ0pVFdqkOpln6wzEAnlO2QhX6WJPs2z4HUx%2BE1GAjHwacxO5UIWGHWHHbJ6c5LKuTzoBARdCpqZGzhR19W17aui2tCQNu3kVSkpZQIPIpd68CZvgtQSij7PoA%2F%2FtcEQORDf7A%2F2Z7YAsyX8bwK0HzGKrqF6YByvNUUrFaW%2BwBIxIMK2UHPCpsmK%2FfqTNWV8nyzfoia4Yw9cOQwwY6pgGPIPhYEo9EgJJXFTfJCZ8ZpHeTsZbVCLL0yyWOiUfWLb1OMT6g%2BmPeVYEkC6cF80vkpWGZBAGlIMq1YYTWsOgrrmJ7Bi%2FYx4rFj3cxFNhaXx132nSOod7H9Jmgg2tbtNPJR%2B2nO%2F9p7B8IMjCRssnOSUyGvgC2lqXy%2BfeiK7UC7vp%2BlAxXS3VFxK5%2FLvOIyjjKOywm4pH4AU215FgZAaFPCOaVFjKw&X-Amz-Signature=27a0257742d2e6cd3092bf184683de4fbf2f2600ca340da305abb166d6dbdf6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZO7JT5S%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEy9YvIgx1wiR6U2lya6JbY3N56I8NGEkQ0WlwuWwucrAiAwIEAYQz%2F8MNLUZ%2F2SnqtHIZGvrsmlbceX6oz%2Bgd3NViqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbzdZxDmArjuTuiWcKtwDB8srTujQD8MzUTUoEoY4gsRLLQz%2B28QNzKQXJ%2Bs1QOIq7yPSQztvQE8gYxe64jCHog1%2BW6C6cEKOech%2B3MZd0%2Bait6IMT7g9wcv6%2Bg4rOtT7pUV%2FbInpYTCgHx6NYqc7B671O7iLjTNpOuaCx%2B%2F6r56GG74plx1zNf59zcDnRnVv8wZBx1Nk4OdpGW8l%2BBUgsm%2B3a9CU40qCPN1JTeaNJC8UioiYEMma4900RgQdHXm7dT1vknrMJlMMouyrr2L2oVE6uq9khibU5%2Fe4lj%2Biy3RBYRGHUElFbnX0RWPKMlLBn3NjpMozAviIlv3Zn3gwwNweQNvDqCTnogpXVxqY5sqVdUe1uj%2FDnepjRXjePNQr4ospfYy3bV4WWv%2BRWxK8RU7sUEpYrnnPCA3QSDgg86yMQP0kVah3k18SmyVEQgtUWQXmaTQZ0pVFdqkOpln6wzEAnlO2QhX6WJPs2z4HUx%2BE1GAjHwacxO5UIWGHWHHbJ6c5LKuTzoBARdCpqZGzhR19W17aui2tCQNu3kVSkpZQIPIpd68CZvgtQSij7PoA%2F%2FtcEQORDf7A%2F2Z7YAsyX8bwK0HzGKrqF6YByvNUUrFaW%2BwBIxIMK2UHPCpsmK%2FfqTNWV8nyzfoia4Yw9cOQwwY6pgGPIPhYEo9EgJJXFTfJCZ8ZpHeTsZbVCLL0yyWOiUfWLb1OMT6g%2BmPeVYEkC6cF80vkpWGZBAGlIMq1YYTWsOgrrmJ7Bi%2FYx4rFj3cxFNhaXx132nSOod7H9Jmgg2tbtNPJR%2B2nO%2F9p7B8IMjCRssnOSUyGvgC2lqXy%2BfeiK7UC7vp%2BlAxXS3VFxK5%2FLvOIyjjKOywm4pH4AU215FgZAaFPCOaVFjKw&X-Amz-Signature=21d017e324556c14b9483fb56361f7bd097d27a2593df0350e99f04e282e1a5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZO7JT5S%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEy9YvIgx1wiR6U2lya6JbY3N56I8NGEkQ0WlwuWwucrAiAwIEAYQz%2F8MNLUZ%2F2SnqtHIZGvrsmlbceX6oz%2Bgd3NViqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbzdZxDmArjuTuiWcKtwDB8srTujQD8MzUTUoEoY4gsRLLQz%2B28QNzKQXJ%2Bs1QOIq7yPSQztvQE8gYxe64jCHog1%2BW6C6cEKOech%2B3MZd0%2Bait6IMT7g9wcv6%2Bg4rOtT7pUV%2FbInpYTCgHx6NYqc7B671O7iLjTNpOuaCx%2B%2F6r56GG74plx1zNf59zcDnRnVv8wZBx1Nk4OdpGW8l%2BBUgsm%2B3a9CU40qCPN1JTeaNJC8UioiYEMma4900RgQdHXm7dT1vknrMJlMMouyrr2L2oVE6uq9khibU5%2Fe4lj%2Biy3RBYRGHUElFbnX0RWPKMlLBn3NjpMozAviIlv3Zn3gwwNweQNvDqCTnogpXVxqY5sqVdUe1uj%2FDnepjRXjePNQr4ospfYy3bV4WWv%2BRWxK8RU7sUEpYrnnPCA3QSDgg86yMQP0kVah3k18SmyVEQgtUWQXmaTQZ0pVFdqkOpln6wzEAnlO2QhX6WJPs2z4HUx%2BE1GAjHwacxO5UIWGHWHHbJ6c5LKuTzoBARdCpqZGzhR19W17aui2tCQNu3kVSkpZQIPIpd68CZvgtQSij7PoA%2F%2FtcEQORDf7A%2F2Z7YAsyX8bwK0HzGKrqF6YByvNUUrFaW%2BwBIxIMK2UHPCpsmK%2FfqTNWV8nyzfoia4Yw9cOQwwY6pgGPIPhYEo9EgJJXFTfJCZ8ZpHeTsZbVCLL0yyWOiUfWLb1OMT6g%2BmPeVYEkC6cF80vkpWGZBAGlIMq1YYTWsOgrrmJ7Bi%2FYx4rFj3cxFNhaXx132nSOod7H9Jmgg2tbtNPJR%2B2nO%2F9p7B8IMjCRssnOSUyGvgC2lqXy%2BfeiK7UC7vp%2BlAxXS3VFxK5%2FLvOIyjjKOywm4pH4AU215FgZAaFPCOaVFjKw&X-Amz-Signature=8bf7c833aa100a8698be2d5a92673e5473b084924072346cf71564f7eb53a4dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
