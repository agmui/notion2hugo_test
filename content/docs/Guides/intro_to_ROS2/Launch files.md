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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDFV4XML%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCHIt08cFdHBt9X%2BlHPfYRw9D3J25HOke3eI%2Fg%2FBjP4SQIhAKYxQkyvxlUJvGaEc%2Bh7rXk2%2BkQrjyxmArKZJEA3XCU9Kv8DCHMQABoMNjM3NDIzMTgzODA1IgylY%2Fg0zMiWaqVorX8q3AO%2BMqc8fjPE679eOkWURl1DvwKeSwitHlE5ywnU8RzSkRN6aRa2czSAhdD1pghgykuDGUoxDVYQMUAKSHaBYdp%2FumTo2pJ5bFYfF12QAE2bvrtpEQFmRoI0WlOrfUq21YwpgdEsQfov6P5Q060v3iMaWiLyouX7%2BQ0pjX4rx1jMsIwUzqQpaRmuTze84Jw%2F%2BXzA%2Bn70P%2Bwc%2BKPgG7JZKVIOz6w4kDlRjHo5Lvw%2BKdWxjOmPm12e3%2BD8pDTK8UDQUDlggxXZC46RB19iMSc2upyrrw4QjyIApc3xUBfA9AigvCxWroWjQvdroChxb5LYWVaJLGiIzhNektnwEFQtNsmT0Pd0rpezgwfDuoxIe7e4HWcHbwv37K8WBERtsRlpHB7FcAL8eIlGvUNB4249%2FlyTKh3avIg1rw1tQeFMaLJnIGSgL9ZgRfK1uEQ70Cx5%2FHRQAy4TY7HTYgbMGddqIyiVO0kzrYCh7Gzobu1KALEkdNZ2iI89aYOz3Bf7Ek7Fp%2BnRmNCIeUfq05eaX%2FyrQ%2FQzHxYeWOvERZcFtJVd4crYNrbWdZB6w6xILP%2BRI2A4ZLZ%2BpB2h8oAvAL09EmIxBhq7u1Y5YoXahmUFuF%2F68VY5UTEtUpHRyOlcRNznLDD9zszEBjqkAczKuEhpa44NuFwF5zZhhL3A4povcE45lfdblAsb36O6weHT%2FMv6bFn2qt1aZEmkZkyDwlf02H%2BAv3eoFMOrrtxGA0tMKuXflg28qeYlwXssW%2FjsivSIIG2SdY7gzzWYTulu8k8diifGJiVzr0xkUwuHCxoM5%2Bwaxf9iUFgaoKiXFDFb947Y%2FhrERycHPMdEsmlURvPs8%2BmtAs1D4MtfKYI8x6DQ&X-Amz-Signature=68dbe410b12561957de09ea04988f5e8b946127c3a9d4206c67226bbc0280c11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDFV4XML%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCHIt08cFdHBt9X%2BlHPfYRw9D3J25HOke3eI%2Fg%2FBjP4SQIhAKYxQkyvxlUJvGaEc%2Bh7rXk2%2BkQrjyxmArKZJEA3XCU9Kv8DCHMQABoMNjM3NDIzMTgzODA1IgylY%2Fg0zMiWaqVorX8q3AO%2BMqc8fjPE679eOkWURl1DvwKeSwitHlE5ywnU8RzSkRN6aRa2czSAhdD1pghgykuDGUoxDVYQMUAKSHaBYdp%2FumTo2pJ5bFYfF12QAE2bvrtpEQFmRoI0WlOrfUq21YwpgdEsQfov6P5Q060v3iMaWiLyouX7%2BQ0pjX4rx1jMsIwUzqQpaRmuTze84Jw%2F%2BXzA%2Bn70P%2Bwc%2BKPgG7JZKVIOz6w4kDlRjHo5Lvw%2BKdWxjOmPm12e3%2BD8pDTK8UDQUDlggxXZC46RB19iMSc2upyrrw4QjyIApc3xUBfA9AigvCxWroWjQvdroChxb5LYWVaJLGiIzhNektnwEFQtNsmT0Pd0rpezgwfDuoxIe7e4HWcHbwv37K8WBERtsRlpHB7FcAL8eIlGvUNB4249%2FlyTKh3avIg1rw1tQeFMaLJnIGSgL9ZgRfK1uEQ70Cx5%2FHRQAy4TY7HTYgbMGddqIyiVO0kzrYCh7Gzobu1KALEkdNZ2iI89aYOz3Bf7Ek7Fp%2BnRmNCIeUfq05eaX%2FyrQ%2FQzHxYeWOvERZcFtJVd4crYNrbWdZB6w6xILP%2BRI2A4ZLZ%2BpB2h8oAvAL09EmIxBhq7u1Y5YoXahmUFuF%2F68VY5UTEtUpHRyOlcRNznLDD9zszEBjqkAczKuEhpa44NuFwF5zZhhL3A4povcE45lfdblAsb36O6weHT%2FMv6bFn2qt1aZEmkZkyDwlf02H%2BAv3eoFMOrrtxGA0tMKuXflg28qeYlwXssW%2FjsivSIIG2SdY7gzzWYTulu8k8diifGJiVzr0xkUwuHCxoM5%2Bwaxf9iUFgaoKiXFDFb947Y%2FhrERycHPMdEsmlURvPs8%2BmtAs1D4MtfKYI8x6DQ&X-Amz-Signature=662a6ca5a8c4aaa39cb98faa4655d07d1d8b161f2d0e3d8c760a145e73565d8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDFV4XML%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCHIt08cFdHBt9X%2BlHPfYRw9D3J25HOke3eI%2Fg%2FBjP4SQIhAKYxQkyvxlUJvGaEc%2Bh7rXk2%2BkQrjyxmArKZJEA3XCU9Kv8DCHMQABoMNjM3NDIzMTgzODA1IgylY%2Fg0zMiWaqVorX8q3AO%2BMqc8fjPE679eOkWURl1DvwKeSwitHlE5ywnU8RzSkRN6aRa2czSAhdD1pghgykuDGUoxDVYQMUAKSHaBYdp%2FumTo2pJ5bFYfF12QAE2bvrtpEQFmRoI0WlOrfUq21YwpgdEsQfov6P5Q060v3iMaWiLyouX7%2BQ0pjX4rx1jMsIwUzqQpaRmuTze84Jw%2F%2BXzA%2Bn70P%2Bwc%2BKPgG7JZKVIOz6w4kDlRjHo5Lvw%2BKdWxjOmPm12e3%2BD8pDTK8UDQUDlggxXZC46RB19iMSc2upyrrw4QjyIApc3xUBfA9AigvCxWroWjQvdroChxb5LYWVaJLGiIzhNektnwEFQtNsmT0Pd0rpezgwfDuoxIe7e4HWcHbwv37K8WBERtsRlpHB7FcAL8eIlGvUNB4249%2FlyTKh3avIg1rw1tQeFMaLJnIGSgL9ZgRfK1uEQ70Cx5%2FHRQAy4TY7HTYgbMGddqIyiVO0kzrYCh7Gzobu1KALEkdNZ2iI89aYOz3Bf7Ek7Fp%2BnRmNCIeUfq05eaX%2FyrQ%2FQzHxYeWOvERZcFtJVd4crYNrbWdZB6w6xILP%2BRI2A4ZLZ%2BpB2h8oAvAL09EmIxBhq7u1Y5YoXahmUFuF%2F68VY5UTEtUpHRyOlcRNznLDD9zszEBjqkAczKuEhpa44NuFwF5zZhhL3A4povcE45lfdblAsb36O6weHT%2FMv6bFn2qt1aZEmkZkyDwlf02H%2BAv3eoFMOrrtxGA0tMKuXflg28qeYlwXssW%2FjsivSIIG2SdY7gzzWYTulu8k8diifGJiVzr0xkUwuHCxoM5%2Bwaxf9iUFgaoKiXFDFb947Y%2FhrERycHPMdEsmlURvPs8%2BmtAs1D4MtfKYI8x6DQ&X-Amz-Signature=d759bc43bef6daf0e2a0bb658ab617dddb4c95c98116764c1ae25c69cd93b853&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
