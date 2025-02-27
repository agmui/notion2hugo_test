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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LCOJPKN%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T131730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIBGmGy%2FhBSZ0GiQIfId9gdrBcWOLr0t86nRDqwoMJbJjAiEAlLR%2BjcjudSjH5WRy2aDRjcSSpp%2FR%2FvoOSphNvUudCyAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDEqI8%2Fnf%2BY16f%2BtH8yrcAyv6388tU1wRRLGth5VzpaENlN9ZnIzj6Y5prhks1BhS7xB6MV9ckVPh6Ic731HaeeAO6zdr%2BPIYbXk%2BgbHkpWaJ%2B8131rDKtnfV8WsnCqJ0zX63xS%2FKF46ynZndZJA%2FaKauNA1SF99f9I1lIqLCDTJDqTkj7bPpMs4IH4mAV%2BiyOjqxEUoEVoOHLjMCz%2FB6yg1qckOz7mmotOFRLE6q7SJMwjPHgjAr2Bo7IQvJplvJxiNTFM2SgzSe0K7wBRvkd8GO2n9kAOIBamXJ0GHVseHA2C0DLzwwUeScT%2FOj7jGHhqaR3YirkLImcGDaMSN0TYjjlofO2A1aRGGufIq0T%2FCQqSfsLQX%2BxoIzk6r3M24ycFD9a5%2B1P%2BBIj3MSVzYZQ23%2FV4AqXQcFZdx5umQ86UMPB9f%2Fxebur1onYNWN4Z%2BBhfSjJiBIOT7Iit%2F%2BcCosPxsq0En9TBSrLFcqIIynxF0XlRmG4cyBJuw61yDv%2FrCu6drOiU7r%2FGPMe7j2EW9eu3LAAvSYWTP0dGS1bPaKAN5BpIQGlHeekvF24uFOMxoqnIHD4oKc3PEoOcSa1i5YcZqg0XwcDggYATuTsU9xOpDsnP3ZqgCriWGKiIdGlpqf5vKwoHuV%2BW%2FC2vxRMOGtgb4GOqUBH8wKndprQnZJ7P%2FBxsM2Z5WoaKSYW4SoLAhW5PU34gjc6WPeHY6x6rflqQEXmckZaC6gjAn9IEaZ4DCMw4giSB0TsCbR0%2BFk%2BGcaBEdkdbdVWiKVaplaxsXUfk1JxHv9FbRq2nXjvsAmkB5CSw2eI4WQXkDrGroEHWAzFs8WBhKtMyqBlLAyNlFwg4KC7SnS%2BztbKofgBN92E713GZINe2SU33%2BU&X-Amz-Signature=60dea16b1db167def3dbec2dd88a1b13d103144651571760cc657c0da1ee200c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LCOJPKN%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T131730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIBGmGy%2FhBSZ0GiQIfId9gdrBcWOLr0t86nRDqwoMJbJjAiEAlLR%2BjcjudSjH5WRy2aDRjcSSpp%2FR%2FvoOSphNvUudCyAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDEqI8%2Fnf%2BY16f%2BtH8yrcAyv6388tU1wRRLGth5VzpaENlN9ZnIzj6Y5prhks1BhS7xB6MV9ckVPh6Ic731HaeeAO6zdr%2BPIYbXk%2BgbHkpWaJ%2B8131rDKtnfV8WsnCqJ0zX63xS%2FKF46ynZndZJA%2FaKauNA1SF99f9I1lIqLCDTJDqTkj7bPpMs4IH4mAV%2BiyOjqxEUoEVoOHLjMCz%2FB6yg1qckOz7mmotOFRLE6q7SJMwjPHgjAr2Bo7IQvJplvJxiNTFM2SgzSe0K7wBRvkd8GO2n9kAOIBamXJ0GHVseHA2C0DLzwwUeScT%2FOj7jGHhqaR3YirkLImcGDaMSN0TYjjlofO2A1aRGGufIq0T%2FCQqSfsLQX%2BxoIzk6r3M24ycFD9a5%2B1P%2BBIj3MSVzYZQ23%2FV4AqXQcFZdx5umQ86UMPB9f%2Fxebur1onYNWN4Z%2BBhfSjJiBIOT7Iit%2F%2BcCosPxsq0En9TBSrLFcqIIynxF0XlRmG4cyBJuw61yDv%2FrCu6drOiU7r%2FGPMe7j2EW9eu3LAAvSYWTP0dGS1bPaKAN5BpIQGlHeekvF24uFOMxoqnIHD4oKc3PEoOcSa1i5YcZqg0XwcDggYATuTsU9xOpDsnP3ZqgCriWGKiIdGlpqf5vKwoHuV%2BW%2FC2vxRMOGtgb4GOqUBH8wKndprQnZJ7P%2FBxsM2Z5WoaKSYW4SoLAhW5PU34gjc6WPeHY6x6rflqQEXmckZaC6gjAn9IEaZ4DCMw4giSB0TsCbR0%2BFk%2BGcaBEdkdbdVWiKVaplaxsXUfk1JxHv9FbRq2nXjvsAmkB5CSw2eI4WQXkDrGroEHWAzFs8WBhKtMyqBlLAyNlFwg4KC7SnS%2BztbKofgBN92E713GZINe2SU33%2BU&X-Amz-Signature=6944800bd44c3778023756636b80b1760a3c23a821b48569907b1e001cd6bf8b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LCOJPKN%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T131730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIBGmGy%2FhBSZ0GiQIfId9gdrBcWOLr0t86nRDqwoMJbJjAiEAlLR%2BjcjudSjH5WRy2aDRjcSSpp%2FR%2FvoOSphNvUudCyAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDEqI8%2Fnf%2BY16f%2BtH8yrcAyv6388tU1wRRLGth5VzpaENlN9ZnIzj6Y5prhks1BhS7xB6MV9ckVPh6Ic731HaeeAO6zdr%2BPIYbXk%2BgbHkpWaJ%2B8131rDKtnfV8WsnCqJ0zX63xS%2FKF46ynZndZJA%2FaKauNA1SF99f9I1lIqLCDTJDqTkj7bPpMs4IH4mAV%2BiyOjqxEUoEVoOHLjMCz%2FB6yg1qckOz7mmotOFRLE6q7SJMwjPHgjAr2Bo7IQvJplvJxiNTFM2SgzSe0K7wBRvkd8GO2n9kAOIBamXJ0GHVseHA2C0DLzwwUeScT%2FOj7jGHhqaR3YirkLImcGDaMSN0TYjjlofO2A1aRGGufIq0T%2FCQqSfsLQX%2BxoIzk6r3M24ycFD9a5%2B1P%2BBIj3MSVzYZQ23%2FV4AqXQcFZdx5umQ86UMPB9f%2Fxebur1onYNWN4Z%2BBhfSjJiBIOT7Iit%2F%2BcCosPxsq0En9TBSrLFcqIIynxF0XlRmG4cyBJuw61yDv%2FrCu6drOiU7r%2FGPMe7j2EW9eu3LAAvSYWTP0dGS1bPaKAN5BpIQGlHeekvF24uFOMxoqnIHD4oKc3PEoOcSa1i5YcZqg0XwcDggYATuTsU9xOpDsnP3ZqgCriWGKiIdGlpqf5vKwoHuV%2BW%2FC2vxRMOGtgb4GOqUBH8wKndprQnZJ7P%2FBxsM2Z5WoaKSYW4SoLAhW5PU34gjc6WPeHY6x6rflqQEXmckZaC6gjAn9IEaZ4DCMw4giSB0TsCbR0%2BFk%2BGcaBEdkdbdVWiKVaplaxsXUfk1JxHv9FbRq2nXjvsAmkB5CSw2eI4WQXkDrGroEHWAzFs8WBhKtMyqBlLAyNlFwg4KC7SnS%2BztbKofgBN92E713GZINe2SU33%2BU&X-Amz-Signature=2e9e0940d0bf8b9145b65faca38571394ed651f6d9207ce3f2c3334aad7acd0e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
