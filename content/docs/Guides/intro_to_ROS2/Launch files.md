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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GGL2ZKW%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T003857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8lXIHEt66QuYR3bSQbjM6xKyY9B8qNQ3OA8vumelQNQIgZmhIZLy2pvaw4lmcjW%2BdPGyiO1e6ujq84A5Wm2H8enIqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyJcRGj1E7gIivXGyrcAweq%2F1oTz%2B3wh1yraldHKFmdL%2FudAoygcZqoWRoRAg2FIRWdFlUxSGN92vwL7D4DQpvI8rjKODf0PVCdEhE6q9jT3ay5XyXI9RJlzLJAZDqjc8muoEsx7ek4xiDHf5u3rZ6eQqjJKPwcXwBPU02%2FHqTljjGY7PcW0%2FAksbTpoiKaEJ6TKhc7qRqvv%2B7cmrHuNYWYidHCpmOvpZPJ%2BCDsqPUM%2FPvdgsvulmT2TF9TcALVLpKypa6BI4F%2Fk5GMZDQmv%2BEPIBs52yo%2Bmr44E%2B0xJG%2Bwt339Y2eugW%2BuDz4060biESaPejbyVcmLLvo3OoNg7HveOoKVKOFJzfBDeEm306y6gejDGC7B1JWDrwDMMT340zxvtZ3b26Hay1qKXMkum3lHv0senx6DwnJOj61EClFnqLMRbxFEjJiXAJv5lxe4BJ%2FepgpgrNgzFhLa%2BEgL3ODyIDAVkTxL88QR%2FswkO9OLtswxQHiiYSboUK20PYWgphGaFXOs1MdA9onk8IVoG4SQ8yBp8GyHWfqnOaozFlwxaQCODDtB8ibRBQAjM0LbFYdc4C6%2FSLc%2BinddXeasfkF5c4493TVkHQdLF1xkXlVf%2B3KzAEFQGr3AlrWZq%2BsHmch5Nd8e0BdU3neVMMW5vL8GOqUB5x6CHIUd3pYQPn0TtVAUDY4YNxLnzejcqVOTJmD5jX7sz5msDI3VHkcPhrShaHPbvMJyVn6Hh6gyhqS63MTEuBpgK9cBHWRLKubkBcC1cKs6vdkzufUbmH5v%2BvIU2dp%2FQzVCxOVmix9Pz7OZmjK30ZcxvqIfXMb0Ayt3fV0bJf9Vk05%2BQTwZzHnzjBpWgJOagoLse5cFWfiJix7SXkVZkbQZpP5v&X-Amz-Signature=d6600254fe78bd6ee56f7ff52d5b5beafe079b3560869e3fad76b79ec40d9a1d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GGL2ZKW%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T003857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8lXIHEt66QuYR3bSQbjM6xKyY9B8qNQ3OA8vumelQNQIgZmhIZLy2pvaw4lmcjW%2BdPGyiO1e6ujq84A5Wm2H8enIqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyJcRGj1E7gIivXGyrcAweq%2F1oTz%2B3wh1yraldHKFmdL%2FudAoygcZqoWRoRAg2FIRWdFlUxSGN92vwL7D4DQpvI8rjKODf0PVCdEhE6q9jT3ay5XyXI9RJlzLJAZDqjc8muoEsx7ek4xiDHf5u3rZ6eQqjJKPwcXwBPU02%2FHqTljjGY7PcW0%2FAksbTpoiKaEJ6TKhc7qRqvv%2B7cmrHuNYWYidHCpmOvpZPJ%2BCDsqPUM%2FPvdgsvulmT2TF9TcALVLpKypa6BI4F%2Fk5GMZDQmv%2BEPIBs52yo%2Bmr44E%2B0xJG%2Bwt339Y2eugW%2BuDz4060biESaPejbyVcmLLvo3OoNg7HveOoKVKOFJzfBDeEm306y6gejDGC7B1JWDrwDMMT340zxvtZ3b26Hay1qKXMkum3lHv0senx6DwnJOj61EClFnqLMRbxFEjJiXAJv5lxe4BJ%2FepgpgrNgzFhLa%2BEgL3ODyIDAVkTxL88QR%2FswkO9OLtswxQHiiYSboUK20PYWgphGaFXOs1MdA9onk8IVoG4SQ8yBp8GyHWfqnOaozFlwxaQCODDtB8ibRBQAjM0LbFYdc4C6%2FSLc%2BinddXeasfkF5c4493TVkHQdLF1xkXlVf%2B3KzAEFQGr3AlrWZq%2BsHmch5Nd8e0BdU3neVMMW5vL8GOqUB5x6CHIUd3pYQPn0TtVAUDY4YNxLnzejcqVOTJmD5jX7sz5msDI3VHkcPhrShaHPbvMJyVn6Hh6gyhqS63MTEuBpgK9cBHWRLKubkBcC1cKs6vdkzufUbmH5v%2BvIU2dp%2FQzVCxOVmix9Pz7OZmjK30ZcxvqIfXMb0Ayt3fV0bJf9Vk05%2BQTwZzHnzjBpWgJOagoLse5cFWfiJix7SXkVZkbQZpP5v&X-Amz-Signature=e654750769c66a0ff50c7a8447a3ca538825a0ed498a25984c2f457b11a28627&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GGL2ZKW%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T003857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8lXIHEt66QuYR3bSQbjM6xKyY9B8qNQ3OA8vumelQNQIgZmhIZLy2pvaw4lmcjW%2BdPGyiO1e6ujq84A5Wm2H8enIqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyJcRGj1E7gIivXGyrcAweq%2F1oTz%2B3wh1yraldHKFmdL%2FudAoygcZqoWRoRAg2FIRWdFlUxSGN92vwL7D4DQpvI8rjKODf0PVCdEhE6q9jT3ay5XyXI9RJlzLJAZDqjc8muoEsx7ek4xiDHf5u3rZ6eQqjJKPwcXwBPU02%2FHqTljjGY7PcW0%2FAksbTpoiKaEJ6TKhc7qRqvv%2B7cmrHuNYWYidHCpmOvpZPJ%2BCDsqPUM%2FPvdgsvulmT2TF9TcALVLpKypa6BI4F%2Fk5GMZDQmv%2BEPIBs52yo%2Bmr44E%2B0xJG%2Bwt339Y2eugW%2BuDz4060biESaPejbyVcmLLvo3OoNg7HveOoKVKOFJzfBDeEm306y6gejDGC7B1JWDrwDMMT340zxvtZ3b26Hay1qKXMkum3lHv0senx6DwnJOj61EClFnqLMRbxFEjJiXAJv5lxe4BJ%2FepgpgrNgzFhLa%2BEgL3ODyIDAVkTxL88QR%2FswkO9OLtswxQHiiYSboUK20PYWgphGaFXOs1MdA9onk8IVoG4SQ8yBp8GyHWfqnOaozFlwxaQCODDtB8ibRBQAjM0LbFYdc4C6%2FSLc%2BinddXeasfkF5c4493TVkHQdLF1xkXlVf%2B3KzAEFQGr3AlrWZq%2BsHmch5Nd8e0BdU3neVMMW5vL8GOqUB5x6CHIUd3pYQPn0TtVAUDY4YNxLnzejcqVOTJmD5jX7sz5msDI3VHkcPhrShaHPbvMJyVn6Hh6gyhqS63MTEuBpgK9cBHWRLKubkBcC1cKs6vdkzufUbmH5v%2BvIU2dp%2FQzVCxOVmix9Pz7OZmjK30ZcxvqIfXMb0Ayt3fV0bJf9Vk05%2BQTwZzHnzjBpWgJOagoLse5cFWfiJix7SXkVZkbQZpP5v&X-Amz-Signature=4995324d82175091e13ea845ecfbc7cf3f3c16d24cc32839140ae6438c7b0789&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
