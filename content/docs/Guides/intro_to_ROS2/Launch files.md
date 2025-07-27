---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4LHFYVU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIC%2F7mt%2BXVp6m0ZppgwkC9Pd3PZw2exR085b1iycZen65AiEA8dexsPwKUdXjArSspGuJ7hGsAbqgp%2Foipxyvfvy0Hlkq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDG56FK%2FOZiz9kPctDSrcA1B2g3x7zr8s1fQ6suWx9T1JpPN0AVy9x03NydZipV9%2FpY30blj7ov51wcvl4SW%2F8ESV3B%2BSNF3WhJokgloFv57zR669v2wSAwNs72VrPo8pENwGuP%2BFRsF%2FwQmuNkOKPGnOb5Ri5uAybtTKiWoh90IfStU94TEFinz28jc%2BHO8vWXBEnvg7uNYHB9z1be9OM%2FVZpI4uxkZqw6ciRsNM3zMk8IgtKO%2Bh6XdItUqYEmNMjF3tk%2F%2F9%2F6JjMiNNUSw4Py8ebM9j6Zvu%2FI5benC6umF5briIMA62secsD10L6rkdUZW5JmmfoT3ZU%2ByIOQrkljqoXgWaEG4DjcAjfgU94fOsKpuFz%2FYLXC%2B9R5me4on0fu1%2BhOqQI%2FEkZjV1UEGY3KrEVYqaZL%2BR8arvnNt7sjiLi0WfkbNZW20kWi%2FVXGqiy3sl%2Bxf6AqlwdIoUOcYa%2FXISCXze07FEG3%2BsPRkcRhWOfhSyk%2BuZtkpi0ARn17GvPpRTfWdhX1Bkvra4ty3WUSnMj4r9GBj9qZUbrF2MDgBYR4Ws4lJFUYFutsw2cw8XY1RkFKTE1dO6MubhDcZ6fdSl1O%2BBVsgUSvtGartbsXeoaVW0clzg%2FEgICs%2F8vMQfhuoPHfHjGeZUQD1IMNO7lsQGOqUBiACNy54jFLwNHVhJl5oBmo1KcpJ766QiVB78I6czMkyezMOI24nIVxV2r%2Bfocbfq3iKSmHudqs%2FiGIrdeI5m4T1c1sUIHmPjtoGnesoeKhOhoOucQmmtOiR5EUOCx165Ue%2BxtaoYBKt0s36h8eEBA36yIZ%2FqRts5QLviG3mREWwZfNrjJmqYkBOd0wbT%2BjGQsNXw3OB7Zv9I7Ph9CoUXu4XzqvqS&X-Amz-Signature=75fe6921e84b47473017b308c40844fa4109ba31abb1c9f406c2066e20c2ffde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4LHFYVU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIC%2F7mt%2BXVp6m0ZppgwkC9Pd3PZw2exR085b1iycZen65AiEA8dexsPwKUdXjArSspGuJ7hGsAbqgp%2Foipxyvfvy0Hlkq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDG56FK%2FOZiz9kPctDSrcA1B2g3x7zr8s1fQ6suWx9T1JpPN0AVy9x03NydZipV9%2FpY30blj7ov51wcvl4SW%2F8ESV3B%2BSNF3WhJokgloFv57zR669v2wSAwNs72VrPo8pENwGuP%2BFRsF%2FwQmuNkOKPGnOb5Ri5uAybtTKiWoh90IfStU94TEFinz28jc%2BHO8vWXBEnvg7uNYHB9z1be9OM%2FVZpI4uxkZqw6ciRsNM3zMk8IgtKO%2Bh6XdItUqYEmNMjF3tk%2F%2F9%2F6JjMiNNUSw4Py8ebM9j6Zvu%2FI5benC6umF5briIMA62secsD10L6rkdUZW5JmmfoT3ZU%2ByIOQrkljqoXgWaEG4DjcAjfgU94fOsKpuFz%2FYLXC%2B9R5me4on0fu1%2BhOqQI%2FEkZjV1UEGY3KrEVYqaZL%2BR8arvnNt7sjiLi0WfkbNZW20kWi%2FVXGqiy3sl%2Bxf6AqlwdIoUOcYa%2FXISCXze07FEG3%2BsPRkcRhWOfhSyk%2BuZtkpi0ARn17GvPpRTfWdhX1Bkvra4ty3WUSnMj4r9GBj9qZUbrF2MDgBYR4Ws4lJFUYFutsw2cw8XY1RkFKTE1dO6MubhDcZ6fdSl1O%2BBVsgUSvtGartbsXeoaVW0clzg%2FEgICs%2F8vMQfhuoPHfHjGeZUQD1IMNO7lsQGOqUBiACNy54jFLwNHVhJl5oBmo1KcpJ766QiVB78I6czMkyezMOI24nIVxV2r%2Bfocbfq3iKSmHudqs%2FiGIrdeI5m4T1c1sUIHmPjtoGnesoeKhOhoOucQmmtOiR5EUOCx165Ue%2BxtaoYBKt0s36h8eEBA36yIZ%2FqRts5QLviG3mREWwZfNrjJmqYkBOd0wbT%2BjGQsNXw3OB7Zv9I7Ph9CoUXu4XzqvqS&X-Amz-Signature=4d187df1ae7a61b536897663ac733577a281e86b4ef438012cc0e1d92b7dbc4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4LHFYVU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIC%2F7mt%2BXVp6m0ZppgwkC9Pd3PZw2exR085b1iycZen65AiEA8dexsPwKUdXjArSspGuJ7hGsAbqgp%2Foipxyvfvy0Hlkq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDG56FK%2FOZiz9kPctDSrcA1B2g3x7zr8s1fQ6suWx9T1JpPN0AVy9x03NydZipV9%2FpY30blj7ov51wcvl4SW%2F8ESV3B%2BSNF3WhJokgloFv57zR669v2wSAwNs72VrPo8pENwGuP%2BFRsF%2FwQmuNkOKPGnOb5Ri5uAybtTKiWoh90IfStU94TEFinz28jc%2BHO8vWXBEnvg7uNYHB9z1be9OM%2FVZpI4uxkZqw6ciRsNM3zMk8IgtKO%2Bh6XdItUqYEmNMjF3tk%2F%2F9%2F6JjMiNNUSw4Py8ebM9j6Zvu%2FI5benC6umF5briIMA62secsD10L6rkdUZW5JmmfoT3ZU%2ByIOQrkljqoXgWaEG4DjcAjfgU94fOsKpuFz%2FYLXC%2B9R5me4on0fu1%2BhOqQI%2FEkZjV1UEGY3KrEVYqaZL%2BR8arvnNt7sjiLi0WfkbNZW20kWi%2FVXGqiy3sl%2Bxf6AqlwdIoUOcYa%2FXISCXze07FEG3%2BsPRkcRhWOfhSyk%2BuZtkpi0ARn17GvPpRTfWdhX1Bkvra4ty3WUSnMj4r9GBj9qZUbrF2MDgBYR4Ws4lJFUYFutsw2cw8XY1RkFKTE1dO6MubhDcZ6fdSl1O%2BBVsgUSvtGartbsXeoaVW0clzg%2FEgICs%2F8vMQfhuoPHfHjGeZUQD1IMNO7lsQGOqUBiACNy54jFLwNHVhJl5oBmo1KcpJ766QiVB78I6czMkyezMOI24nIVxV2r%2Bfocbfq3iKSmHudqs%2FiGIrdeI5m4T1c1sUIHmPjtoGnesoeKhOhoOucQmmtOiR5EUOCx165Ue%2BxtaoYBKt0s36h8eEBA36yIZ%2FqRts5QLviG3mREWwZfNrjJmqYkBOd0wbT%2BjGQsNXw3OB7Zv9I7Ph9CoUXu4XzqvqS&X-Amz-Signature=c3196c658fff4f4d5f0533836d7417c6c64c3388831211149d45663d4a66ab05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
