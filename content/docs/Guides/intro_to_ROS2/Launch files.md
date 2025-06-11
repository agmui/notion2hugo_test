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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7OIGWWY%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T061332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfeQtfrzVCTkfqvFU8SweumLZFpTN13KkcVWKC4K0GZAIhAM500i1MzGSkWrPVeB1HKSD%2FFRYcpg3BUXPKYVr1n6dcKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRQeuQw%2FnhF02%2FwB8q3AMILjX%2BS30FhYnBvAgMsOXInXnfO5umg1NG16%2F3V%2BuZjYsBol2w%2BLZs7g7UgRNoc6FcD%2B%2B1uQlVRty%2FwfyXFDnOXrdTwATXHfSJbstEXq9JLueNEXQSawRg0GTLLNk9ntOfuP4FKo9kyHbjxt4ApWFMdk7uuZTMYlgCFkdk6knKCJfJAATnKHz9ZHYpBzn0K9MK7kJcvtVyK3JhVcRmZSD8EnGVAaweuTUJMKI5lI6%2FHaPdQPLMGdbk%2F0MxFwJtnRZfe%2FFTu95%2B4q1FC39mH%2BM6NTfKVnG7sFH3kyMLKHDllY%2FJ9ni20p0A8XaNg2g3Vnj6U2RfjSz4jII6UZd0F03L2FA7Njin88HfhrqQQuFUBYwD5KYHg99MeX0nrWOrNZYaaSnyQShZFfILoDzeDMOdSm9UFscQw7MQgBkEFCQocq3WJAyRm9h16a9MzSwCr1fV%2Fhj4Mm1%2BBsVfRQ2RvwZrCgV9Hrdpj5WF27UMk%2BZxDOmQTm6TazJvvV0bJeMlOUXWhw5nll4ih1%2BTrOIFlIjYvuJphlMzCWToBE2FgbrBZmoSnwBu5Owj72qc7Y48j21DKKY6Kxoeh3zTwgIMlBfhsgp6ymJk4jRIAYqiaYc1SpUbMtKHT%2B%2BqIO7mIDDelqTCBjqkARyrXf87OARo6UrFXZkZh6jRfYWorzQNcZMgMY%2BhfLNpmuGapYHJIyuO%2FPjtQh3lSjJ%2Be%2F4lV9xyUKWJFY8FK7WZ7oCDWPdrsZC%2FApcRN5Lyr%2B6%2ByNq78yNmnMhkIwbzm04bbtzh0CcvH5QacIWif3VK1VgWSDjQnHXRKxM9WMUG917jA9yF4qaMz8w9nlAc%2F7S0Q6WFBjEAZAc%2BvwAgHdHdlsk1&X-Amz-Signature=d193a27c4e081323c506d674b9ebea4b6e5424516fcc3c57e507f31e88d2af56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7OIGWWY%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T061332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfeQtfrzVCTkfqvFU8SweumLZFpTN13KkcVWKC4K0GZAIhAM500i1MzGSkWrPVeB1HKSD%2FFRYcpg3BUXPKYVr1n6dcKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRQeuQw%2FnhF02%2FwB8q3AMILjX%2BS30FhYnBvAgMsOXInXnfO5umg1NG16%2F3V%2BuZjYsBol2w%2BLZs7g7UgRNoc6FcD%2B%2B1uQlVRty%2FwfyXFDnOXrdTwATXHfSJbstEXq9JLueNEXQSawRg0GTLLNk9ntOfuP4FKo9kyHbjxt4ApWFMdk7uuZTMYlgCFkdk6knKCJfJAATnKHz9ZHYpBzn0K9MK7kJcvtVyK3JhVcRmZSD8EnGVAaweuTUJMKI5lI6%2FHaPdQPLMGdbk%2F0MxFwJtnRZfe%2FFTu95%2B4q1FC39mH%2BM6NTfKVnG7sFH3kyMLKHDllY%2FJ9ni20p0A8XaNg2g3Vnj6U2RfjSz4jII6UZd0F03L2FA7Njin88HfhrqQQuFUBYwD5KYHg99MeX0nrWOrNZYaaSnyQShZFfILoDzeDMOdSm9UFscQw7MQgBkEFCQocq3WJAyRm9h16a9MzSwCr1fV%2Fhj4Mm1%2BBsVfRQ2RvwZrCgV9Hrdpj5WF27UMk%2BZxDOmQTm6TazJvvV0bJeMlOUXWhw5nll4ih1%2BTrOIFlIjYvuJphlMzCWToBE2FgbrBZmoSnwBu5Owj72qc7Y48j21DKKY6Kxoeh3zTwgIMlBfhsgp6ymJk4jRIAYqiaYc1SpUbMtKHT%2B%2BqIO7mIDDelqTCBjqkARyrXf87OARo6UrFXZkZh6jRfYWorzQNcZMgMY%2BhfLNpmuGapYHJIyuO%2FPjtQh3lSjJ%2Be%2F4lV9xyUKWJFY8FK7WZ7oCDWPdrsZC%2FApcRN5Lyr%2B6%2ByNq78yNmnMhkIwbzm04bbtzh0CcvH5QacIWif3VK1VgWSDjQnHXRKxM9WMUG917jA9yF4qaMz8w9nlAc%2F7S0Q6WFBjEAZAc%2BvwAgHdHdlsk1&X-Amz-Signature=9b27f45fea0007b367e3292c353ddc1b99b8553687aa417d047f672347f95b3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7OIGWWY%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T061332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfeQtfrzVCTkfqvFU8SweumLZFpTN13KkcVWKC4K0GZAIhAM500i1MzGSkWrPVeB1HKSD%2FFRYcpg3BUXPKYVr1n6dcKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRQeuQw%2FnhF02%2FwB8q3AMILjX%2BS30FhYnBvAgMsOXInXnfO5umg1NG16%2F3V%2BuZjYsBol2w%2BLZs7g7UgRNoc6FcD%2B%2B1uQlVRty%2FwfyXFDnOXrdTwATXHfSJbstEXq9JLueNEXQSawRg0GTLLNk9ntOfuP4FKo9kyHbjxt4ApWFMdk7uuZTMYlgCFkdk6knKCJfJAATnKHz9ZHYpBzn0K9MK7kJcvtVyK3JhVcRmZSD8EnGVAaweuTUJMKI5lI6%2FHaPdQPLMGdbk%2F0MxFwJtnRZfe%2FFTu95%2B4q1FC39mH%2BM6NTfKVnG7sFH3kyMLKHDllY%2FJ9ni20p0A8XaNg2g3Vnj6U2RfjSz4jII6UZd0F03L2FA7Njin88HfhrqQQuFUBYwD5KYHg99MeX0nrWOrNZYaaSnyQShZFfILoDzeDMOdSm9UFscQw7MQgBkEFCQocq3WJAyRm9h16a9MzSwCr1fV%2Fhj4Mm1%2BBsVfRQ2RvwZrCgV9Hrdpj5WF27UMk%2BZxDOmQTm6TazJvvV0bJeMlOUXWhw5nll4ih1%2BTrOIFlIjYvuJphlMzCWToBE2FgbrBZmoSnwBu5Owj72qc7Y48j21DKKY6Kxoeh3zTwgIMlBfhsgp6ymJk4jRIAYqiaYc1SpUbMtKHT%2B%2BqIO7mIDDelqTCBjqkARyrXf87OARo6UrFXZkZh6jRfYWorzQNcZMgMY%2BhfLNpmuGapYHJIyuO%2FPjtQh3lSjJ%2Be%2F4lV9xyUKWJFY8FK7WZ7oCDWPdrsZC%2FApcRN5Lyr%2B6%2ByNq78yNmnMhkIwbzm04bbtzh0CcvH5QacIWif3VK1VgWSDjQnHXRKxM9WMUG917jA9yF4qaMz8w9nlAc%2F7S0Q6WFBjEAZAc%2BvwAgHdHdlsk1&X-Amz-Signature=52903fe131dec9c94454e843c6608c6142dfb752723de0b40ba9410f1bf65b8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
