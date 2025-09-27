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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RP7OVNR%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIEapTJmPPNBz9K%2FNuHAKfuTPlkpYjdjcu2iYxxqkzIiZAiAoEgmVm2ju3FwDh272vwU5zCsyPCxAuATtITsV%2FxXOpCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPZ86ZzmfhF6JDkwCKtwDZwqj66Ta5ICj4D8xjQUb%2Fk3IAiQlgYZRs31jAxhaE6ttwl4e4NJFbCkmWZcfdw4aJn26iDj4A3uApNNAiV1yiVXSN1bETHnIgmF%2B8SsHtvw96SMA9XAtUwMp4sUmQisVV1h%2FbjeLgTs94UddsATdjS8Artn1IvHsrWxiEPY3cx34erfczTXIAhchUFeZU5cyD%2FGQWm126%2F2cQMqevWo89gSDqAFW6hx8kBLjtFbe6IqwXSq5mQhLPGSUQ3%2BmmBP1dKEcLczQ4fsqdvnQeOGtJIUeSLTIL0OiSNiI963dO6WvdHEoTyFCjw22Xd2%2FK%2FiVGaMIZv1sOfJpinpC4bPJQ0d2bzkmt5HslunP8PW1gdEhFB4Db6RpqMc3IOdR0z3Mm1F2HnMK5iJyzDf0j%2FLibOFzWHRVAnJbhhWVlzoYpstopYAyucqXvUDd4qV79WS3%2FJB6iVmISDhxF4IuvkYyeCETWn1gQ8SQ2MUyh8FXDWb1oLb00mn%2BztNg%2FW0BU1K3nPoZzdY2eQG%2B9ZavnflcbYwF46t93jDJHSnViu0gOuWxr6vSFCAKagxyBbLfJ1ropxFcF3J7B76%2BX5aNWnxxFTQ07TVRoLVujy%2BPTSvAOBDzUwyGOgGM20e%2BxIIw5OfcxgY6pgHamdtvzlxSjuk2F4vR2YFGocEv94OeXOeinocT1w3u93jSBcOlHD6eFqvDZmXz787%2FQJ54I5nzqut6DDKrGkmt6n6Fwg1SIEM5L0tLtfMkawmu5MhnkhHYURA0%2By8bGWcr%2BoJ5EJ0hBbA8HInE1dy55VafziWdwiR3%2BCyylvouWdvjE0pV1e2du79qV0WofM20Io3fdQVT8uAbaBBAEWuH%2FuL4Suhk&X-Amz-Signature=650799fc1429ffa439c74eb282b7d30bd57e567736bf566dc5d8bc91b56b0381&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RP7OVNR%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIEapTJmPPNBz9K%2FNuHAKfuTPlkpYjdjcu2iYxxqkzIiZAiAoEgmVm2ju3FwDh272vwU5zCsyPCxAuATtITsV%2FxXOpCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPZ86ZzmfhF6JDkwCKtwDZwqj66Ta5ICj4D8xjQUb%2Fk3IAiQlgYZRs31jAxhaE6ttwl4e4NJFbCkmWZcfdw4aJn26iDj4A3uApNNAiV1yiVXSN1bETHnIgmF%2B8SsHtvw96SMA9XAtUwMp4sUmQisVV1h%2FbjeLgTs94UddsATdjS8Artn1IvHsrWxiEPY3cx34erfczTXIAhchUFeZU5cyD%2FGQWm126%2F2cQMqevWo89gSDqAFW6hx8kBLjtFbe6IqwXSq5mQhLPGSUQ3%2BmmBP1dKEcLczQ4fsqdvnQeOGtJIUeSLTIL0OiSNiI963dO6WvdHEoTyFCjw22Xd2%2FK%2FiVGaMIZv1sOfJpinpC4bPJQ0d2bzkmt5HslunP8PW1gdEhFB4Db6RpqMc3IOdR0z3Mm1F2HnMK5iJyzDf0j%2FLibOFzWHRVAnJbhhWVlzoYpstopYAyucqXvUDd4qV79WS3%2FJB6iVmISDhxF4IuvkYyeCETWn1gQ8SQ2MUyh8FXDWb1oLb00mn%2BztNg%2FW0BU1K3nPoZzdY2eQG%2B9ZavnflcbYwF46t93jDJHSnViu0gOuWxr6vSFCAKagxyBbLfJ1ropxFcF3J7B76%2BX5aNWnxxFTQ07TVRoLVujy%2BPTSvAOBDzUwyGOgGM20e%2BxIIw5OfcxgY6pgHamdtvzlxSjuk2F4vR2YFGocEv94OeXOeinocT1w3u93jSBcOlHD6eFqvDZmXz787%2FQJ54I5nzqut6DDKrGkmt6n6Fwg1SIEM5L0tLtfMkawmu5MhnkhHYURA0%2By8bGWcr%2BoJ5EJ0hBbA8HInE1dy55VafziWdwiR3%2BCyylvouWdvjE0pV1e2du79qV0WofM20Io3fdQVT8uAbaBBAEWuH%2FuL4Suhk&X-Amz-Signature=99ed1590ff50a935768ebb0daada204af09af93d4ffa3b7e102af99068dfaf87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RP7OVNR%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIEapTJmPPNBz9K%2FNuHAKfuTPlkpYjdjcu2iYxxqkzIiZAiAoEgmVm2ju3FwDh272vwU5zCsyPCxAuATtITsV%2FxXOpCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPZ86ZzmfhF6JDkwCKtwDZwqj66Ta5ICj4D8xjQUb%2Fk3IAiQlgYZRs31jAxhaE6ttwl4e4NJFbCkmWZcfdw4aJn26iDj4A3uApNNAiV1yiVXSN1bETHnIgmF%2B8SsHtvw96SMA9XAtUwMp4sUmQisVV1h%2FbjeLgTs94UddsATdjS8Artn1IvHsrWxiEPY3cx34erfczTXIAhchUFeZU5cyD%2FGQWm126%2F2cQMqevWo89gSDqAFW6hx8kBLjtFbe6IqwXSq5mQhLPGSUQ3%2BmmBP1dKEcLczQ4fsqdvnQeOGtJIUeSLTIL0OiSNiI963dO6WvdHEoTyFCjw22Xd2%2FK%2FiVGaMIZv1sOfJpinpC4bPJQ0d2bzkmt5HslunP8PW1gdEhFB4Db6RpqMc3IOdR0z3Mm1F2HnMK5iJyzDf0j%2FLibOFzWHRVAnJbhhWVlzoYpstopYAyucqXvUDd4qV79WS3%2FJB6iVmISDhxF4IuvkYyeCETWn1gQ8SQ2MUyh8FXDWb1oLb00mn%2BztNg%2FW0BU1K3nPoZzdY2eQG%2B9ZavnflcbYwF46t93jDJHSnViu0gOuWxr6vSFCAKagxyBbLfJ1ropxFcF3J7B76%2BX5aNWnxxFTQ07TVRoLVujy%2BPTSvAOBDzUwyGOgGM20e%2BxIIw5OfcxgY6pgHamdtvzlxSjuk2F4vR2YFGocEv94OeXOeinocT1w3u93jSBcOlHD6eFqvDZmXz787%2FQJ54I5nzqut6DDKrGkmt6n6Fwg1SIEM5L0tLtfMkawmu5MhnkhHYURA0%2By8bGWcr%2BoJ5EJ0hBbA8HInE1dy55VafziWdwiR3%2BCyylvouWdvjE0pV1e2du79qV0WofM20Io3fdQVT8uAbaBBAEWuH%2FuL4Suhk&X-Amz-Signature=e076675c13180f9aecfc5ac59001283c352af53c58b88cc75b9185b6e84f2537&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
