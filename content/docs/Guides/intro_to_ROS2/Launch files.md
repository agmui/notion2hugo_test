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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DPAVKA4%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRb5EHx5fW5z40miKHLZXHw1yFCy9l4KOx%2FxuPlwuklgIgSNDk3rh01ZcEfHeH8R2bnSQwabPRRPuXUEqSmwAgg%2FYq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDC%2BVycIx%2BU7%2BeCTgpircAw%2BHNpnMBcN3gK7X174LIUZhwvwGyah2iFeDBF71CRmbKAASQJLWQiSzQi97c3hjU1BI2tgbRKtOanm60vcFsp%2FZ9e8kgZRm1UqtLTfK7wBVw5TtQb8CbscNz0I1jJKtzcKyFMFofILnv9lQ6WQA0EwZ26np6qXCh4JWMklKWSCBcND%2BSGfU42H%2B2Drrqzhq4XeDZUz9wtETp7stEW%2FWgdhYXl9G82Iirx1kK%2FECJpMtVR4uR1n7rHXK94m0YYHMc2gDLOM8nAvj8fKqlOMvSAKMY%2BWRVB3UrhdBExkPgnbw2Y%2FTvROoQP%2BjVExK7OlrEBD0Dprov7QnnqWluQpeh244rpWooi9FfZKZLmPNcPMiiBHKzynIlMz7F42jn%2FDgBJPQzXOTSrTMnKriVWIG%2FvYGvDFkaIkixqTUcnhpxNjkW7Joo3wR%2BmSMHJ92Ez%2FcNIFQ0EfZVXUwrEmT8wapN5kO3Ph8ZbcN0xgj2hwX31ieMU3fBg6uThvpYwXb23XCeQKLH8E1TghxY5XCY%2Be4I2cIBGoShIHDYF0%2FhVnMGJQFdIuQNW1abovz4%2FAQIMbTkLDuqZEZtMgpZ5ais7GB7X%2FYJOXM8S62LaEd%2FHiyJGNE%2ByrAQleGKL29vWoLMKSdsMsGOqUBXIyVoM5CdKhXx5Ew39UGeO0AFE6zUWzEHQ5T4yUZfDzEIsXt%2BHRF1x9zN2hCGNE3j7TI6FXyTvkN%2F0kaY1FAeRLFxNKjksPUwOqycs%2BXrAbwlJqRnkZ3rn0oDCiEn1G8bQwGUImv7l4fTkqNuVgcHSRh07H19ZcbXU1K2l0R5plRAz1R1M3MIVXhC5ItyjpJAwU6deyaFKLZJvPBmpyl23OmFjkr&X-Amz-Signature=d57a08436f35db29a332fef6f6ee7a4fcef7a9807e99b1d8bd2fe97a9c89cbf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DPAVKA4%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRb5EHx5fW5z40miKHLZXHw1yFCy9l4KOx%2FxuPlwuklgIgSNDk3rh01ZcEfHeH8R2bnSQwabPRRPuXUEqSmwAgg%2FYq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDC%2BVycIx%2BU7%2BeCTgpircAw%2BHNpnMBcN3gK7X174LIUZhwvwGyah2iFeDBF71CRmbKAASQJLWQiSzQi97c3hjU1BI2tgbRKtOanm60vcFsp%2FZ9e8kgZRm1UqtLTfK7wBVw5TtQb8CbscNz0I1jJKtzcKyFMFofILnv9lQ6WQA0EwZ26np6qXCh4JWMklKWSCBcND%2BSGfU42H%2B2Drrqzhq4XeDZUz9wtETp7stEW%2FWgdhYXl9G82Iirx1kK%2FECJpMtVR4uR1n7rHXK94m0YYHMc2gDLOM8nAvj8fKqlOMvSAKMY%2BWRVB3UrhdBExkPgnbw2Y%2FTvROoQP%2BjVExK7OlrEBD0Dprov7QnnqWluQpeh244rpWooi9FfZKZLmPNcPMiiBHKzynIlMz7F42jn%2FDgBJPQzXOTSrTMnKriVWIG%2FvYGvDFkaIkixqTUcnhpxNjkW7Joo3wR%2BmSMHJ92Ez%2FcNIFQ0EfZVXUwrEmT8wapN5kO3Ph8ZbcN0xgj2hwX31ieMU3fBg6uThvpYwXb23XCeQKLH8E1TghxY5XCY%2Be4I2cIBGoShIHDYF0%2FhVnMGJQFdIuQNW1abovz4%2FAQIMbTkLDuqZEZtMgpZ5ais7GB7X%2FYJOXM8S62LaEd%2FHiyJGNE%2ByrAQleGKL29vWoLMKSdsMsGOqUBXIyVoM5CdKhXx5Ew39UGeO0AFE6zUWzEHQ5T4yUZfDzEIsXt%2BHRF1x9zN2hCGNE3j7TI6FXyTvkN%2F0kaY1FAeRLFxNKjksPUwOqycs%2BXrAbwlJqRnkZ3rn0oDCiEn1G8bQwGUImv7l4fTkqNuVgcHSRh07H19ZcbXU1K2l0R5plRAz1R1M3MIVXhC5ItyjpJAwU6deyaFKLZJvPBmpyl23OmFjkr&X-Amz-Signature=faa0c4c2dd3196b2a39518715fee559d48bc9e9c1d1bc43c290d907570bf36cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DPAVKA4%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRb5EHx5fW5z40miKHLZXHw1yFCy9l4KOx%2FxuPlwuklgIgSNDk3rh01ZcEfHeH8R2bnSQwabPRRPuXUEqSmwAgg%2FYq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDC%2BVycIx%2BU7%2BeCTgpircAw%2BHNpnMBcN3gK7X174LIUZhwvwGyah2iFeDBF71CRmbKAASQJLWQiSzQi97c3hjU1BI2tgbRKtOanm60vcFsp%2FZ9e8kgZRm1UqtLTfK7wBVw5TtQb8CbscNz0I1jJKtzcKyFMFofILnv9lQ6WQA0EwZ26np6qXCh4JWMklKWSCBcND%2BSGfU42H%2B2Drrqzhq4XeDZUz9wtETp7stEW%2FWgdhYXl9G82Iirx1kK%2FECJpMtVR4uR1n7rHXK94m0YYHMc2gDLOM8nAvj8fKqlOMvSAKMY%2BWRVB3UrhdBExkPgnbw2Y%2FTvROoQP%2BjVExK7OlrEBD0Dprov7QnnqWluQpeh244rpWooi9FfZKZLmPNcPMiiBHKzynIlMz7F42jn%2FDgBJPQzXOTSrTMnKriVWIG%2FvYGvDFkaIkixqTUcnhpxNjkW7Joo3wR%2BmSMHJ92Ez%2FcNIFQ0EfZVXUwrEmT8wapN5kO3Ph8ZbcN0xgj2hwX31ieMU3fBg6uThvpYwXb23XCeQKLH8E1TghxY5XCY%2Be4I2cIBGoShIHDYF0%2FhVnMGJQFdIuQNW1abovz4%2FAQIMbTkLDuqZEZtMgpZ5ais7GB7X%2FYJOXM8S62LaEd%2FHiyJGNE%2ByrAQleGKL29vWoLMKSdsMsGOqUBXIyVoM5CdKhXx5Ew39UGeO0AFE6zUWzEHQ5T4yUZfDzEIsXt%2BHRF1x9zN2hCGNE3j7TI6FXyTvkN%2F0kaY1FAeRLFxNKjksPUwOqycs%2BXrAbwlJqRnkZ3rn0oDCiEn1G8bQwGUImv7l4fTkqNuVgcHSRh07H19ZcbXU1K2l0R5plRAz1R1M3MIVXhC5ItyjpJAwU6deyaFKLZJvPBmpyl23OmFjkr&X-Amz-Signature=2cd0b0a669c33e6622b7ce94a9ad2f876010935532a85f98da47fc27ede35a2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
