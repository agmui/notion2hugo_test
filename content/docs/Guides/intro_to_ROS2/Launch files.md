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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674PZIUAQ%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCO5y4DRwIItzeP1G5orf0T84beskpFMx1%2FOCnzbB%2B8vwIgebCIwLH1y0I8L%2BmYACIPzdc5m1BGOwx8Z7EPwQWPMFQq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDJN7bx%2BRoRcA%2FKe2pircA1yOJ8%2FhYFVXHbeV9cdMbdxyu1kJDkMUZTvpy%2FDp%2FfVqOh8CveRKuAt8CFxByg3zYq9gQDbEQ5uTo%2BwhLCS2%2FnboKKlWzFfBeodcnGmO81DVI2zlU%2FFovU44Nt%2FKEPO%2FE%2Bl7%2FqmtiOqNmY4Gv7VF2mlovjn%2BWwIlr%2FSxU%2Bo8Wl5SoD5BMtGLo%2FmIm3tD6JA3nLDqKd%2BBZWGjLoCpBfKy8MhPKNsUxK6jtdNH2Qh6R5Zt2vhwzPDNIKcA0OULMEaJa3n3nE648GulpcHeUb49Ag8LpSl9k7Q1L2qDqFMJeTl0cCxIdxFLjowX%2BCHVp6bWrzSDRlgaK8qjXVvQ4fGBhGKRxTX%2B2qKSCk6eVc6RCnckbCoEYZqjxcxMECo8LHlqh9ApgQNaB9DWLMHqlTcOObPq3DJuQNwIdOihqPH05NNn1m4j2nYLSjTO0ECUNedzvIT1Zkzt%2FI%2B0SJbDiGJIsD23JzOReebQy2Bd5NT4kIBb6d3jEK5alDoGen8yNF%2B8fdS9Ji3aMOAdjFF47UFSyuEMtgYf916lQgqFwlTRrKPSbmn7TQKMBF%2FI%2BMyyfV9zhb2FGjguN5BXYWQaUs80PiI6ZK%2FgpUiUaxIIESR%2F0RB8W2quKCVDC1mssPamMIHLgsoGOqUBalpFUgKToHTgVLKwHOkMSbc8BOZN7yQjQNNH9bgHiynkfd2uAE8OCbcUsqQFvQSqLF0vGL6iXvgukMuPvhOBvjsm1VxCfDU1pbDzvSkCMNveeuQCPG%2BiC0Y1NL0PfiYBVNkxme75xNimFOBzLP1kasO6ZbvwILhkGJvShOQZ2imjiZeFWIf4jksW%2FnyEBfzEeazJoYqZu3oBm9ZfKNQ31UW%2F5g7X&X-Amz-Signature=e7d56fda08b3698e07cf730b73789d133d5cf4280ffc4d4e0f3c12e708118898&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674PZIUAQ%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCO5y4DRwIItzeP1G5orf0T84beskpFMx1%2FOCnzbB%2B8vwIgebCIwLH1y0I8L%2BmYACIPzdc5m1BGOwx8Z7EPwQWPMFQq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDJN7bx%2BRoRcA%2FKe2pircA1yOJ8%2FhYFVXHbeV9cdMbdxyu1kJDkMUZTvpy%2FDp%2FfVqOh8CveRKuAt8CFxByg3zYq9gQDbEQ5uTo%2BwhLCS2%2FnboKKlWzFfBeodcnGmO81DVI2zlU%2FFovU44Nt%2FKEPO%2FE%2Bl7%2FqmtiOqNmY4Gv7VF2mlovjn%2BWwIlr%2FSxU%2Bo8Wl5SoD5BMtGLo%2FmIm3tD6JA3nLDqKd%2BBZWGjLoCpBfKy8MhPKNsUxK6jtdNH2Qh6R5Zt2vhwzPDNIKcA0OULMEaJa3n3nE648GulpcHeUb49Ag8LpSl9k7Q1L2qDqFMJeTl0cCxIdxFLjowX%2BCHVp6bWrzSDRlgaK8qjXVvQ4fGBhGKRxTX%2B2qKSCk6eVc6RCnckbCoEYZqjxcxMECo8LHlqh9ApgQNaB9DWLMHqlTcOObPq3DJuQNwIdOihqPH05NNn1m4j2nYLSjTO0ECUNedzvIT1Zkzt%2FI%2B0SJbDiGJIsD23JzOReebQy2Bd5NT4kIBb6d3jEK5alDoGen8yNF%2B8fdS9Ji3aMOAdjFF47UFSyuEMtgYf916lQgqFwlTRrKPSbmn7TQKMBF%2FI%2BMyyfV9zhb2FGjguN5BXYWQaUs80PiI6ZK%2FgpUiUaxIIESR%2F0RB8W2quKCVDC1mssPamMIHLgsoGOqUBalpFUgKToHTgVLKwHOkMSbc8BOZN7yQjQNNH9bgHiynkfd2uAE8OCbcUsqQFvQSqLF0vGL6iXvgukMuPvhOBvjsm1VxCfDU1pbDzvSkCMNveeuQCPG%2BiC0Y1NL0PfiYBVNkxme75xNimFOBzLP1kasO6ZbvwILhkGJvShOQZ2imjiZeFWIf4jksW%2FnyEBfzEeazJoYqZu3oBm9ZfKNQ31UW%2F5g7X&X-Amz-Signature=49cab1f1ff7af6a6729631a2b0ce990023eefc6d0b049a875e74c3e870f90779&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674PZIUAQ%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCO5y4DRwIItzeP1G5orf0T84beskpFMx1%2FOCnzbB%2B8vwIgebCIwLH1y0I8L%2BmYACIPzdc5m1BGOwx8Z7EPwQWPMFQq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDJN7bx%2BRoRcA%2FKe2pircA1yOJ8%2FhYFVXHbeV9cdMbdxyu1kJDkMUZTvpy%2FDp%2FfVqOh8CveRKuAt8CFxByg3zYq9gQDbEQ5uTo%2BwhLCS2%2FnboKKlWzFfBeodcnGmO81DVI2zlU%2FFovU44Nt%2FKEPO%2FE%2Bl7%2FqmtiOqNmY4Gv7VF2mlovjn%2BWwIlr%2FSxU%2Bo8Wl5SoD5BMtGLo%2FmIm3tD6JA3nLDqKd%2BBZWGjLoCpBfKy8MhPKNsUxK6jtdNH2Qh6R5Zt2vhwzPDNIKcA0OULMEaJa3n3nE648GulpcHeUb49Ag8LpSl9k7Q1L2qDqFMJeTl0cCxIdxFLjowX%2BCHVp6bWrzSDRlgaK8qjXVvQ4fGBhGKRxTX%2B2qKSCk6eVc6RCnckbCoEYZqjxcxMECo8LHlqh9ApgQNaB9DWLMHqlTcOObPq3DJuQNwIdOihqPH05NNn1m4j2nYLSjTO0ECUNedzvIT1Zkzt%2FI%2B0SJbDiGJIsD23JzOReebQy2Bd5NT4kIBb6d3jEK5alDoGen8yNF%2B8fdS9Ji3aMOAdjFF47UFSyuEMtgYf916lQgqFwlTRrKPSbmn7TQKMBF%2FI%2BMyyfV9zhb2FGjguN5BXYWQaUs80PiI6ZK%2FgpUiUaxIIESR%2F0RB8W2quKCVDC1mssPamMIHLgsoGOqUBalpFUgKToHTgVLKwHOkMSbc8BOZN7yQjQNNH9bgHiynkfd2uAE8OCbcUsqQFvQSqLF0vGL6iXvgukMuPvhOBvjsm1VxCfDU1pbDzvSkCMNveeuQCPG%2BiC0Y1NL0PfiYBVNkxme75xNimFOBzLP1kasO6ZbvwILhkGJvShOQZ2imjiZeFWIf4jksW%2FnyEBfzEeazJoYqZu3oBm9ZfKNQ31UW%2F5g7X&X-Amz-Signature=74a7f5883efbe549b70d3d6359fb7c04526a53fcd8ef1ec95699c4865ac7486a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
