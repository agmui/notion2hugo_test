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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VP4YQVF%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T161020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnK0Y5bfFytd7c4b1xqQKeYHAkQmWEhJhsfyN9Y7TCPAIgBzJRrU9LSDFYD0dHZ16eUkr1RWgyxO07R9ZdiYy4XMMq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDC0KUvDUMDj2XwENaircA4lPxyDHsZyQs9PkGMl4vCM8XRrXVdS%2FeX17mUpHxmeb8ta2xMC6HPpQoIn%2FvfnTWRW%2FZ6EpvrboOPpsHljPqoMzChj76Jq8iej3LzFKHmBEQCZ5P3VMn3rXNyowy0AOFUlTyvvb%2BLzv7xllFD1ccA5VS0fRsgOt2sjAaaGk9l0mx1oauqh5sH4s3eMxsEXnRtf5W159c5q2TBX%2Fc%2BIoetJNuuJQLHs5XLRXbHdvIjgWmn1lAu%2FDSNMcE5yA%2BIRALDcJKuoqnJEJYp5PNO3W2dwh9UsnpH8CQjGFXC3%2F5t3bRAA86xIWnyXo5JJhIc0CA4mhksc8Xywqyj0p9MunnlIsUTmaqt8AYl55h8yYavWK1QBbCTIUttJsG2Y0hXqTqvnEPCWE6bc7a03oJgOLrvNPldZEwdbqYGSylRUf3ay6yOOm%2BciKrHJZYyW%2FYSJYpbYdz42WrtWvPP15YRd%2B9DSWculoU87xCVpa%2BnahdDyS%2FE%2BtfuuI8U2nawboj4EoNfmeG6oIUAmEVF9eUxxvlyX1pdsOizWn4HquDWgeMjo1NirbYEuyUUOlc1eAWkywpKkNEiq7Dmltzs%2B73640%2BbW45Cle8skA2Dhl8HTs1AJzT6%2BPM0v%2FPNUYJ9rsMJm0ncEGOqUB8F%2F5Wz3wyb2RcZbq%2FOz%2BwZ%2B%2B4Ri9zjZZIRHYkCyv6zciwIA4fGJYld2q%2BieOfRTbkjdHoOvOxXv2dVBYqDBff7xYeoRd7QCyIm5jNO4NySnEOTKMbeQJzRb3Njb2a5HNl8i6m0LUAyYYwYAu9PW2r%2F2q8gXQAxLgX4YIRxZY0MogtqFTfPl8%2FUW3SxSeOOJvXkXc91Rd1toN9mQJKnHeroQZCjzq&X-Amz-Signature=67da0e53202358c3cd8ab5f278b6c531314973c08047e3d59be2c5ac11842670&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VP4YQVF%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T161020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnK0Y5bfFytd7c4b1xqQKeYHAkQmWEhJhsfyN9Y7TCPAIgBzJRrU9LSDFYD0dHZ16eUkr1RWgyxO07R9ZdiYy4XMMq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDC0KUvDUMDj2XwENaircA4lPxyDHsZyQs9PkGMl4vCM8XRrXVdS%2FeX17mUpHxmeb8ta2xMC6HPpQoIn%2FvfnTWRW%2FZ6EpvrboOPpsHljPqoMzChj76Jq8iej3LzFKHmBEQCZ5P3VMn3rXNyowy0AOFUlTyvvb%2BLzv7xllFD1ccA5VS0fRsgOt2sjAaaGk9l0mx1oauqh5sH4s3eMxsEXnRtf5W159c5q2TBX%2Fc%2BIoetJNuuJQLHs5XLRXbHdvIjgWmn1lAu%2FDSNMcE5yA%2BIRALDcJKuoqnJEJYp5PNO3W2dwh9UsnpH8CQjGFXC3%2F5t3bRAA86xIWnyXo5JJhIc0CA4mhksc8Xywqyj0p9MunnlIsUTmaqt8AYl55h8yYavWK1QBbCTIUttJsG2Y0hXqTqvnEPCWE6bc7a03oJgOLrvNPldZEwdbqYGSylRUf3ay6yOOm%2BciKrHJZYyW%2FYSJYpbYdz42WrtWvPP15YRd%2B9DSWculoU87xCVpa%2BnahdDyS%2FE%2BtfuuI8U2nawboj4EoNfmeG6oIUAmEVF9eUxxvlyX1pdsOizWn4HquDWgeMjo1NirbYEuyUUOlc1eAWkywpKkNEiq7Dmltzs%2B73640%2BbW45Cle8skA2Dhl8HTs1AJzT6%2BPM0v%2FPNUYJ9rsMJm0ncEGOqUB8F%2F5Wz3wyb2RcZbq%2FOz%2BwZ%2B%2B4Ri9zjZZIRHYkCyv6zciwIA4fGJYld2q%2BieOfRTbkjdHoOvOxXv2dVBYqDBff7xYeoRd7QCyIm5jNO4NySnEOTKMbeQJzRb3Njb2a5HNl8i6m0LUAyYYwYAu9PW2r%2F2q8gXQAxLgX4YIRxZY0MogtqFTfPl8%2FUW3SxSeOOJvXkXc91Rd1toN9mQJKnHeroQZCjzq&X-Amz-Signature=004f5ddb3b0d2852292a0ef399bedcd1b1dcbb65d078d601e408b4fc0d432933&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VP4YQVF%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T161020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnK0Y5bfFytd7c4b1xqQKeYHAkQmWEhJhsfyN9Y7TCPAIgBzJRrU9LSDFYD0dHZ16eUkr1RWgyxO07R9ZdiYy4XMMq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDC0KUvDUMDj2XwENaircA4lPxyDHsZyQs9PkGMl4vCM8XRrXVdS%2FeX17mUpHxmeb8ta2xMC6HPpQoIn%2FvfnTWRW%2FZ6EpvrboOPpsHljPqoMzChj76Jq8iej3LzFKHmBEQCZ5P3VMn3rXNyowy0AOFUlTyvvb%2BLzv7xllFD1ccA5VS0fRsgOt2sjAaaGk9l0mx1oauqh5sH4s3eMxsEXnRtf5W159c5q2TBX%2Fc%2BIoetJNuuJQLHs5XLRXbHdvIjgWmn1lAu%2FDSNMcE5yA%2BIRALDcJKuoqnJEJYp5PNO3W2dwh9UsnpH8CQjGFXC3%2F5t3bRAA86xIWnyXo5JJhIc0CA4mhksc8Xywqyj0p9MunnlIsUTmaqt8AYl55h8yYavWK1QBbCTIUttJsG2Y0hXqTqvnEPCWE6bc7a03oJgOLrvNPldZEwdbqYGSylRUf3ay6yOOm%2BciKrHJZYyW%2FYSJYpbYdz42WrtWvPP15YRd%2B9DSWculoU87xCVpa%2BnahdDyS%2FE%2BtfuuI8U2nawboj4EoNfmeG6oIUAmEVF9eUxxvlyX1pdsOizWn4HquDWgeMjo1NirbYEuyUUOlc1eAWkywpKkNEiq7Dmltzs%2B73640%2BbW45Cle8skA2Dhl8HTs1AJzT6%2BPM0v%2FPNUYJ9rsMJm0ncEGOqUB8F%2F5Wz3wyb2RcZbq%2FOz%2BwZ%2B%2B4Ri9zjZZIRHYkCyv6zciwIA4fGJYld2q%2BieOfRTbkjdHoOvOxXv2dVBYqDBff7xYeoRd7QCyIm5jNO4NySnEOTKMbeQJzRb3Njb2a5HNl8i6m0LUAyYYwYAu9PW2r%2F2q8gXQAxLgX4YIRxZY0MogtqFTfPl8%2FUW3SxSeOOJvXkXc91Rd1toN9mQJKnHeroQZCjzq&X-Amz-Signature=ad6ba80ad1c8caff6f6c4e870b8e37ca0cde8d7fadc42477b436087e5e5e174e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
