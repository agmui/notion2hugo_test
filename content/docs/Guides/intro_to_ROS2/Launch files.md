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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JW5W3A3%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T061100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQD4jens9m8NgYBmPWtS07hRT82n%2BtqpGYhKbrQ7A5VrTQIgfUkSBryhavP5EbE2tTpg1xor8TN5mJUMl5vgeuJTdu8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEb5RHSYll%2BnMd0mGSrcAzr%2F5GzTTnJhKqQDVId2ioZJUozfPyctqFfI6MNbOXbAZGWAdwuRFfhjlW%2B6ktRytqN4%2FTjqtCDh5WDn05p%2BdvvU6TKsMBEu9MSyiOUm2Xs55QrVw%2BTEoSAMLYw3snjmJOWZoNKqDGcVbfVs7C5JTx81nmFdAuOQC0VhTDvkjQOxspiRUUsU7hu3KtluvsWDZbluTIXoJDjNQO%2Fk2gj6ayPQM16EbrsgL53%2FiwQmGtVSBcw206DxtcSIqX299%2F5HCvV3rQO0w4454A0SSDdsLDHpnENKR%2B%2FbGgnvy4eJepWwOTghhq8F%2FOn2HYDGKu%2BIgUsiqqLu2dzaPNsrblG0Y76euI71wxDJ%2Fmq1FM4LGw%2F86FFSsZ2ymRed3po%2BbtWQfrzGZRLyUjCuSSbw0YX2qGeeWrgd2oakgI3f4lBfP2KXaRWT4IuNSObj4TtwZp6%2BoTOymm6%2BpoOMpq1G%2BKMb1g3j270NjU2C32nQSw39Lty0Pf%2ByE5X9bmITRL5ur1PS9%2B1SMMAm%2BM32kiibBEyXf2SH5HE%2Fek9rqMApBGynrMlk8GdDVF6uDEtDzavOFQg715HYBAQp2M2%2FtTbMUIP%2F5C6uVXEwgx0zWiy960pBAIU19aR6bgxkyjmyYAicMOarxcEGOqUBX1HHXFsxai8iU7dvoetb2yX3eOlSRCrFZkjhpCEarH3UG3rx%2Bdw2oICzsk%2FV%2BoAlYaOie4m6uOXe8h8%2F5tmGwWYqKJDB1IjqKyj5gSvURb6J0czreu60XaAsbcet9gsFgHNv6ktOB69at8tVJ7PQtElM0xgdW%2BcI68mxqAmgbsPtP7iY9aXX0o%2BK%2BRd%2BIadlU9RzXc8XjJUgopvGhNiWEjoyZUuH&X-Amz-Signature=b3a65d2948dda35a1c8cfc72e1d4ffed92f9a2b910c837239e93232759c213aa&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JW5W3A3%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T061100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQD4jens9m8NgYBmPWtS07hRT82n%2BtqpGYhKbrQ7A5VrTQIgfUkSBryhavP5EbE2tTpg1xor8TN5mJUMl5vgeuJTdu8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEb5RHSYll%2BnMd0mGSrcAzr%2F5GzTTnJhKqQDVId2ioZJUozfPyctqFfI6MNbOXbAZGWAdwuRFfhjlW%2B6ktRytqN4%2FTjqtCDh5WDn05p%2BdvvU6TKsMBEu9MSyiOUm2Xs55QrVw%2BTEoSAMLYw3snjmJOWZoNKqDGcVbfVs7C5JTx81nmFdAuOQC0VhTDvkjQOxspiRUUsU7hu3KtluvsWDZbluTIXoJDjNQO%2Fk2gj6ayPQM16EbrsgL53%2FiwQmGtVSBcw206DxtcSIqX299%2F5HCvV3rQO0w4454A0SSDdsLDHpnENKR%2B%2FbGgnvy4eJepWwOTghhq8F%2FOn2HYDGKu%2BIgUsiqqLu2dzaPNsrblG0Y76euI71wxDJ%2Fmq1FM4LGw%2F86FFSsZ2ymRed3po%2BbtWQfrzGZRLyUjCuSSbw0YX2qGeeWrgd2oakgI3f4lBfP2KXaRWT4IuNSObj4TtwZp6%2BoTOymm6%2BpoOMpq1G%2BKMb1g3j270NjU2C32nQSw39Lty0Pf%2ByE5X9bmITRL5ur1PS9%2B1SMMAm%2BM32kiibBEyXf2SH5HE%2Fek9rqMApBGynrMlk8GdDVF6uDEtDzavOFQg715HYBAQp2M2%2FtTbMUIP%2F5C6uVXEwgx0zWiy960pBAIU19aR6bgxkyjmyYAicMOarxcEGOqUBX1HHXFsxai8iU7dvoetb2yX3eOlSRCrFZkjhpCEarH3UG3rx%2Bdw2oICzsk%2FV%2BoAlYaOie4m6uOXe8h8%2F5tmGwWYqKJDB1IjqKyj5gSvURb6J0czreu60XaAsbcet9gsFgHNv6ktOB69at8tVJ7PQtElM0xgdW%2BcI68mxqAmgbsPtP7iY9aXX0o%2BK%2BRd%2BIadlU9RzXc8XjJUgopvGhNiWEjoyZUuH&X-Amz-Signature=47b4cc2d0f970410ac70d999094310b7e676b417841ce7f5a0c13aa1fd7092b0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JW5W3A3%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T061100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQD4jens9m8NgYBmPWtS07hRT82n%2BtqpGYhKbrQ7A5VrTQIgfUkSBryhavP5EbE2tTpg1xor8TN5mJUMl5vgeuJTdu8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEb5RHSYll%2BnMd0mGSrcAzr%2F5GzTTnJhKqQDVId2ioZJUozfPyctqFfI6MNbOXbAZGWAdwuRFfhjlW%2B6ktRytqN4%2FTjqtCDh5WDn05p%2BdvvU6TKsMBEu9MSyiOUm2Xs55QrVw%2BTEoSAMLYw3snjmJOWZoNKqDGcVbfVs7C5JTx81nmFdAuOQC0VhTDvkjQOxspiRUUsU7hu3KtluvsWDZbluTIXoJDjNQO%2Fk2gj6ayPQM16EbrsgL53%2FiwQmGtVSBcw206DxtcSIqX299%2F5HCvV3rQO0w4454A0SSDdsLDHpnENKR%2B%2FbGgnvy4eJepWwOTghhq8F%2FOn2HYDGKu%2BIgUsiqqLu2dzaPNsrblG0Y76euI71wxDJ%2Fmq1FM4LGw%2F86FFSsZ2ymRed3po%2BbtWQfrzGZRLyUjCuSSbw0YX2qGeeWrgd2oakgI3f4lBfP2KXaRWT4IuNSObj4TtwZp6%2BoTOymm6%2BpoOMpq1G%2BKMb1g3j270NjU2C32nQSw39Lty0Pf%2ByE5X9bmITRL5ur1PS9%2B1SMMAm%2BM32kiibBEyXf2SH5HE%2Fek9rqMApBGynrMlk8GdDVF6uDEtDzavOFQg715HYBAQp2M2%2FtTbMUIP%2F5C6uVXEwgx0zWiy960pBAIU19aR6bgxkyjmyYAicMOarxcEGOqUBX1HHXFsxai8iU7dvoetb2yX3eOlSRCrFZkjhpCEarH3UG3rx%2Bdw2oICzsk%2FV%2BoAlYaOie4m6uOXe8h8%2F5tmGwWYqKJDB1IjqKyj5gSvURb6J0czreu60XaAsbcet9gsFgHNv6ktOB69at8tVJ7PQtElM0xgdW%2BcI68mxqAmgbsPtP7iY9aXX0o%2BK%2BRd%2BIadlU9RzXc8XjJUgopvGhNiWEjoyZUuH&X-Amz-Signature=fe29f811efc86c0ac297fc171cc20c4daa7437843c02cccc6e3b6ed4a7153d0b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
