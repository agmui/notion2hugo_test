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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTDZ2M4W%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T070826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDrJHeoxjirCpGvXWqK5YNCH%2F%2FFfDFPxgjJT2%2F650hySQIgYuhzWJKlJj8W0dCC%2FWNj9hkZu%2BjFQUdwjyQPHBZBVZEqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FXSu%2F%2FaIEqfH2CdyrcA%2FoHxjrlkj2KMERUsf0McdwRauvOvR2Kp%2FKcJ4rPp9JX9JqO7aRcvoxKj8nFl2r%2FzP7EryTMIcFh%2F4hS4SU1cXhgRP80xy4FuVCz4W0pYj7Is0RNashT19n5K30VmuMe6RPB7dh1EwtIuyYK68uGUaW83ItCOVFIKcYCs02KwSjeWw%2B5kSQpCEFLIhO3YTx9MBoFrTQTB6ZE4onK6AWmW3KccbW9mQBoSIrZODzRQFccDVoTSqautRDRod6gfwnQ8q3WXDGACheB4%2FFF8EcXHruFE7ko0%2FRJudXKxhaMtFbTmGf5rZE3V79c2p6OLI1WvP7mERzBPlw9V0K84WN5X3aoe0suzdGkJ9yHHXoMFTvUv9A4%2B%2BgLlNULDqs%2F4SPOZm0ZQVDZJva9IlmdrJO9Qn8oCo5OBPRkeGga3mVtj15eZ7mGHR69rOtF3KVTPkJPmXFh4I0YzT4q1atmpY1DsTJ98k6NGnApSX7Aeg4a7pR0p3CzDjoy9f8y7uygWDrGl4X2V4ADbYu2EIBpfhjEXYb0Ma1iqw0Zia2Jn5j4l%2BASJLeIxL%2F6Tv4MqMI4qhJ47K5KAivRfnMUSB4%2FpffwaEW8WkQ2L8E3ZSSeyfnpqG42Sb7Qzd0epD2uacB6MNSJur4GOqUBMgasxewmocueNzmNkZW%2FbevgqV4YMdCdzAXn8imvd48%2F8Ke1Kkat%2Fp5VkiId5nqBlaQhUCE9wXjfWvf%2BUumhaj0fmH9lfxRhCz%2B3i9qXvkbQLZ%2B3H82QrvnKr8ThF6onYKOiuy4yREuvZzo8ILC4AHNMls9JOgjKZCPD2OcriIta3miN7qzZeJwiMm8GoSqo3XW6JTOTO5NtaZRpnukQi7aUqUw3&X-Amz-Signature=306ce1c16aaad3e503bb56d682287ad7384242e42284431576ca4d4249756f7d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTDZ2M4W%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T070826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDrJHeoxjirCpGvXWqK5YNCH%2F%2FFfDFPxgjJT2%2F650hySQIgYuhzWJKlJj8W0dCC%2FWNj9hkZu%2BjFQUdwjyQPHBZBVZEqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FXSu%2F%2FaIEqfH2CdyrcA%2FoHxjrlkj2KMERUsf0McdwRauvOvR2Kp%2FKcJ4rPp9JX9JqO7aRcvoxKj8nFl2r%2FzP7EryTMIcFh%2F4hS4SU1cXhgRP80xy4FuVCz4W0pYj7Is0RNashT19n5K30VmuMe6RPB7dh1EwtIuyYK68uGUaW83ItCOVFIKcYCs02KwSjeWw%2B5kSQpCEFLIhO3YTx9MBoFrTQTB6ZE4onK6AWmW3KccbW9mQBoSIrZODzRQFccDVoTSqautRDRod6gfwnQ8q3WXDGACheB4%2FFF8EcXHruFE7ko0%2FRJudXKxhaMtFbTmGf5rZE3V79c2p6OLI1WvP7mERzBPlw9V0K84WN5X3aoe0suzdGkJ9yHHXoMFTvUv9A4%2B%2BgLlNULDqs%2F4SPOZm0ZQVDZJva9IlmdrJO9Qn8oCo5OBPRkeGga3mVtj15eZ7mGHR69rOtF3KVTPkJPmXFh4I0YzT4q1atmpY1DsTJ98k6NGnApSX7Aeg4a7pR0p3CzDjoy9f8y7uygWDrGl4X2V4ADbYu2EIBpfhjEXYb0Ma1iqw0Zia2Jn5j4l%2BASJLeIxL%2F6Tv4MqMI4qhJ47K5KAivRfnMUSB4%2FpffwaEW8WkQ2L8E3ZSSeyfnpqG42Sb7Qzd0epD2uacB6MNSJur4GOqUBMgasxewmocueNzmNkZW%2FbevgqV4YMdCdzAXn8imvd48%2F8Ke1Kkat%2Fp5VkiId5nqBlaQhUCE9wXjfWvf%2BUumhaj0fmH9lfxRhCz%2B3i9qXvkbQLZ%2B3H82QrvnKr8ThF6onYKOiuy4yREuvZzo8ILC4AHNMls9JOgjKZCPD2OcriIta3miN7qzZeJwiMm8GoSqo3XW6JTOTO5NtaZRpnukQi7aUqUw3&X-Amz-Signature=f5e21e19e122086956eb4ceebde8cd7083ffda6dc71913a41bcfae3202b1d9e8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTDZ2M4W%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T070826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDrJHeoxjirCpGvXWqK5YNCH%2F%2FFfDFPxgjJT2%2F650hySQIgYuhzWJKlJj8W0dCC%2FWNj9hkZu%2BjFQUdwjyQPHBZBVZEqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FXSu%2F%2FaIEqfH2CdyrcA%2FoHxjrlkj2KMERUsf0McdwRauvOvR2Kp%2FKcJ4rPp9JX9JqO7aRcvoxKj8nFl2r%2FzP7EryTMIcFh%2F4hS4SU1cXhgRP80xy4FuVCz4W0pYj7Is0RNashT19n5K30VmuMe6RPB7dh1EwtIuyYK68uGUaW83ItCOVFIKcYCs02KwSjeWw%2B5kSQpCEFLIhO3YTx9MBoFrTQTB6ZE4onK6AWmW3KccbW9mQBoSIrZODzRQFccDVoTSqautRDRod6gfwnQ8q3WXDGACheB4%2FFF8EcXHruFE7ko0%2FRJudXKxhaMtFbTmGf5rZE3V79c2p6OLI1WvP7mERzBPlw9V0K84WN5X3aoe0suzdGkJ9yHHXoMFTvUv9A4%2B%2BgLlNULDqs%2F4SPOZm0ZQVDZJva9IlmdrJO9Qn8oCo5OBPRkeGga3mVtj15eZ7mGHR69rOtF3KVTPkJPmXFh4I0YzT4q1atmpY1DsTJ98k6NGnApSX7Aeg4a7pR0p3CzDjoy9f8y7uygWDrGl4X2V4ADbYu2EIBpfhjEXYb0Ma1iqw0Zia2Jn5j4l%2BASJLeIxL%2F6Tv4MqMI4qhJ47K5KAivRfnMUSB4%2FpffwaEW8WkQ2L8E3ZSSeyfnpqG42Sb7Qzd0epD2uacB6MNSJur4GOqUBMgasxewmocueNzmNkZW%2FbevgqV4YMdCdzAXn8imvd48%2F8Ke1Kkat%2Fp5VkiId5nqBlaQhUCE9wXjfWvf%2BUumhaj0fmH9lfxRhCz%2B3i9qXvkbQLZ%2B3H82QrvnKr8ThF6onYKOiuy4yREuvZzo8ILC4AHNMls9JOgjKZCPD2OcriIta3miN7qzZeJwiMm8GoSqo3XW6JTOTO5NtaZRpnukQi7aUqUw3&X-Amz-Signature=65f3efe9a0bfb825b3ea78ca2d5b89928f06290c5c6d5aa8b1d9c05f7b6d9581&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
