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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632GABCNI%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T032815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIGTHonj8kxQIDXg9eAYhmseJCdnxgRtbnEqEXYJk9i65AiEAvDVRKNeAISIKOI58tNXaWxJfMb7QKQXIkqYbg7ZQxUIqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEh4vG%2BTjMup2HLAFSrcAzpaIJY3M8yQNI8Om2KI7C4s%2F9xr3DoYxIXyYYKMYDzPG8%2FRhjavDKjhlfgtBB66d3e6ML49SFHM8iQ%2FvGhgUx1ka1myjM59kD5%2FcGbYsm%2F85Lzlvfetwb6o1jXIyojvaonwvN0m6A5FfOHcx%2BMDN2GF3ySpQ6ifq40MDDJ%2Be6jOP3ps8iHViV1MQr5CYzgvstf4nkAiErED4z5vMXf9YxfoEvxBUekFP%2FR8F4PiJlsm8Po5Eczfxf600jp9fGym9jbciBts50AOaiyTsRjwnTvaEBe0bIlDl3txAWk9wkEKrhf%2FWF%2FNP1nrKenj0WQ9QemUASBhUJRNt6OXKkOpMURo0CqzcSuOBxmXnHZcpWAE%2B3BJ0WyWgl8U4ueBOsLCCrjfLNJqdPFgiHzwEq1dhuVK8iWyau6lZCgRosMI4RoeN1wVKxOmJ4isv1a8r2doiqNj%2Bmp%2FS6jJzlGbGs21nJfVzU2uYCnHF70tB3BNtXmq3QlRfupN9Bk2LQO8CtuLfOb5cZK7brYjT8UbKZXDZYFcuIgJKPx6FeFWIK6DDrrgzVD2t82tpjzgzsDwviBvXMizT2v39pU8Sk3CCbUwrpRAACIOJtkMtoJ2vk5DHMHOWKJRgeZzTItsxB3gMPOInMAGOqUBSBS%2F3RvU3CH9IE%2F0UW3XT4ZRpSw1QshLwcPVEXKLxKD69%2BAtvydsRk82cqUvzb%2FPKTrq9DbYAZWxfIpfu6UeiZAMdMfXdJ%2B%2BigHUFNNi3jJszRAItEn%2F6k9EaADgi7PiHFE%2BQAZvYbaBsAA2vXRYDu87kUwWkNfjn4rQL1IZkHRt6il6Bb2bJci52SmHeH95bsqHyXcGyA20CbmXe2GqnnUXFvFI&X-Amz-Signature=f729d62a616cd20a2e9c1db6683511136fe797e175cd5d505faf914c40e6b69a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632GABCNI%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T032815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIGTHonj8kxQIDXg9eAYhmseJCdnxgRtbnEqEXYJk9i65AiEAvDVRKNeAISIKOI58tNXaWxJfMb7QKQXIkqYbg7ZQxUIqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEh4vG%2BTjMup2HLAFSrcAzpaIJY3M8yQNI8Om2KI7C4s%2F9xr3DoYxIXyYYKMYDzPG8%2FRhjavDKjhlfgtBB66d3e6ML49SFHM8iQ%2FvGhgUx1ka1myjM59kD5%2FcGbYsm%2F85Lzlvfetwb6o1jXIyojvaonwvN0m6A5FfOHcx%2BMDN2GF3ySpQ6ifq40MDDJ%2Be6jOP3ps8iHViV1MQr5CYzgvstf4nkAiErED4z5vMXf9YxfoEvxBUekFP%2FR8F4PiJlsm8Po5Eczfxf600jp9fGym9jbciBts50AOaiyTsRjwnTvaEBe0bIlDl3txAWk9wkEKrhf%2FWF%2FNP1nrKenj0WQ9QemUASBhUJRNt6OXKkOpMURo0CqzcSuOBxmXnHZcpWAE%2B3BJ0WyWgl8U4ueBOsLCCrjfLNJqdPFgiHzwEq1dhuVK8iWyau6lZCgRosMI4RoeN1wVKxOmJ4isv1a8r2doiqNj%2Bmp%2FS6jJzlGbGs21nJfVzU2uYCnHF70tB3BNtXmq3QlRfupN9Bk2LQO8CtuLfOb5cZK7brYjT8UbKZXDZYFcuIgJKPx6FeFWIK6DDrrgzVD2t82tpjzgzsDwviBvXMizT2v39pU8Sk3CCbUwrpRAACIOJtkMtoJ2vk5DHMHOWKJRgeZzTItsxB3gMPOInMAGOqUBSBS%2F3RvU3CH9IE%2F0UW3XT4ZRpSw1QshLwcPVEXKLxKD69%2BAtvydsRk82cqUvzb%2FPKTrq9DbYAZWxfIpfu6UeiZAMdMfXdJ%2B%2BigHUFNNi3jJszRAItEn%2F6k9EaADgi7PiHFE%2BQAZvYbaBsAA2vXRYDu87kUwWkNfjn4rQL1IZkHRt6il6Bb2bJci52SmHeH95bsqHyXcGyA20CbmXe2GqnnUXFvFI&X-Amz-Signature=8e8df74e70b8a9faca3c4f3de171b3da02159e29034c366a80db125d66fee381&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632GABCNI%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T032815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIGTHonj8kxQIDXg9eAYhmseJCdnxgRtbnEqEXYJk9i65AiEAvDVRKNeAISIKOI58tNXaWxJfMb7QKQXIkqYbg7ZQxUIqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEh4vG%2BTjMup2HLAFSrcAzpaIJY3M8yQNI8Om2KI7C4s%2F9xr3DoYxIXyYYKMYDzPG8%2FRhjavDKjhlfgtBB66d3e6ML49SFHM8iQ%2FvGhgUx1ka1myjM59kD5%2FcGbYsm%2F85Lzlvfetwb6o1jXIyojvaonwvN0m6A5FfOHcx%2BMDN2GF3ySpQ6ifq40MDDJ%2Be6jOP3ps8iHViV1MQr5CYzgvstf4nkAiErED4z5vMXf9YxfoEvxBUekFP%2FR8F4PiJlsm8Po5Eczfxf600jp9fGym9jbciBts50AOaiyTsRjwnTvaEBe0bIlDl3txAWk9wkEKrhf%2FWF%2FNP1nrKenj0WQ9QemUASBhUJRNt6OXKkOpMURo0CqzcSuOBxmXnHZcpWAE%2B3BJ0WyWgl8U4ueBOsLCCrjfLNJqdPFgiHzwEq1dhuVK8iWyau6lZCgRosMI4RoeN1wVKxOmJ4isv1a8r2doiqNj%2Bmp%2FS6jJzlGbGs21nJfVzU2uYCnHF70tB3BNtXmq3QlRfupN9Bk2LQO8CtuLfOb5cZK7brYjT8UbKZXDZYFcuIgJKPx6FeFWIK6DDrrgzVD2t82tpjzgzsDwviBvXMizT2v39pU8Sk3CCbUwrpRAACIOJtkMtoJ2vk5DHMHOWKJRgeZzTItsxB3gMPOInMAGOqUBSBS%2F3RvU3CH9IE%2F0UW3XT4ZRpSw1QshLwcPVEXKLxKD69%2BAtvydsRk82cqUvzb%2FPKTrq9DbYAZWxfIpfu6UeiZAMdMfXdJ%2B%2BigHUFNNi3jJszRAItEn%2F6k9EaADgi7PiHFE%2BQAZvYbaBsAA2vXRYDu87kUwWkNfjn4rQL1IZkHRt6il6Bb2bJci52SmHeH95bsqHyXcGyA20CbmXe2GqnnUXFvFI&X-Amz-Signature=10a57f4eb784ca52ba05ecdaec5cd470444309c7975d552b880588138af894de&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
