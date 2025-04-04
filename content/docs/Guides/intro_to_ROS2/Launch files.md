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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U44IPVFO%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCT55Si7YOWKMFabnZYg1uc1T1Ton667n5URq8jxk9XLgIgbP5skdvSJCOXS6euPgRSQp38%2F2kQkMCHxt7NH%2FbGSg4q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDPbH9Tuq%2B76wVKtD6CrcA%2FwAYa%2BomMoC5xgpguPdkVkxj4WOUBCV1V0%2Bb0uMIT8y4pubK27nDwq7syCdHBBdR9KEM9ZLrVxZ%2Fof1lDLRhmTUvQNU2N0ILnAsKl5QQHdupnmFb47vbxM8rteFhc3LZN9W7tS0JaPJa9Vrg5Zc4seRm6izDXfQomggYR89qcfZmXCz%2BJu0JnLtB1eIotwcMbbLSxo1JIPK4c73vRLIUuenMdVQHspu4BpHD1MIKGJI%2FZ1z%2FGV8XJfsand5P2Pnm2O3jpj59DDFEOnLkj35UV1Q5m%2FkdkUEnE2B%2Bc55PMETSaLDv%2B%2BoDUKFYCKhyhE9dCvZDrz62xAVm1r7VYUBvttTHT%2FcL34yPHs0FsgpR5j2Gqj4yfi3jEthQGQruPZdJVw%2FEUfL6NQ14YSYB9MGp2YLzDiAD7N0G9VUOw3mf9GKgf16XfjheTU5mDFPJ4iqgVQkFKGtceuRf4Jcr3Bu3ShZno653kr2VLq9II%2By6QvGOkBYXMFdQQUnGwFzp%2FhCz2ikJWG8tNovZg6fiE%2FrGx0Zk4qfdFyGWZHzDUPQHR7OuNMdrXVIOTyUJZvwQnmy2zVea%2FWAgsD0ZyEc6D7R%2BeWPgUuqMkiyxj25NamUZ%2F0%2FIBdZviPgEb4Q1EXiMNTjvr8GOqUBnPU%2F4CFykmW9NzeS2ox0ZtxFck%2BbFYBZHCl8mw1mGtSFF0PiqJQqQ1RXYXrTUhOkHjaj2%2Foh%2BtB%2FoUGeNWuJ%2B%2F%2BWJpxP8aOwfOhef6kMWwoFl27gQuiz%2FRtRDYaI6Fxfe0GNGvQ5MQQN3lBdupPlZLXYjPsXL%2BUh45xwRfj6w5APxRyRbYL9bnrf17MGA71EJ27KYUA53enDcoTW0w2uxzym8uvf&X-Amz-Signature=aa3273095d99b5fa0c47638843db3312eef811dddb1c5e499ca15a245e4344b1&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U44IPVFO%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCT55Si7YOWKMFabnZYg1uc1T1Ton667n5URq8jxk9XLgIgbP5skdvSJCOXS6euPgRSQp38%2F2kQkMCHxt7NH%2FbGSg4q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDPbH9Tuq%2B76wVKtD6CrcA%2FwAYa%2BomMoC5xgpguPdkVkxj4WOUBCV1V0%2Bb0uMIT8y4pubK27nDwq7syCdHBBdR9KEM9ZLrVxZ%2Fof1lDLRhmTUvQNU2N0ILnAsKl5QQHdupnmFb47vbxM8rteFhc3LZN9W7tS0JaPJa9Vrg5Zc4seRm6izDXfQomggYR89qcfZmXCz%2BJu0JnLtB1eIotwcMbbLSxo1JIPK4c73vRLIUuenMdVQHspu4BpHD1MIKGJI%2FZ1z%2FGV8XJfsand5P2Pnm2O3jpj59DDFEOnLkj35UV1Q5m%2FkdkUEnE2B%2Bc55PMETSaLDv%2B%2BoDUKFYCKhyhE9dCvZDrz62xAVm1r7VYUBvttTHT%2FcL34yPHs0FsgpR5j2Gqj4yfi3jEthQGQruPZdJVw%2FEUfL6NQ14YSYB9MGp2YLzDiAD7N0G9VUOw3mf9GKgf16XfjheTU5mDFPJ4iqgVQkFKGtceuRf4Jcr3Bu3ShZno653kr2VLq9II%2By6QvGOkBYXMFdQQUnGwFzp%2FhCz2ikJWG8tNovZg6fiE%2FrGx0Zk4qfdFyGWZHzDUPQHR7OuNMdrXVIOTyUJZvwQnmy2zVea%2FWAgsD0ZyEc6D7R%2BeWPgUuqMkiyxj25NamUZ%2F0%2FIBdZviPgEb4Q1EXiMNTjvr8GOqUBnPU%2F4CFykmW9NzeS2ox0ZtxFck%2BbFYBZHCl8mw1mGtSFF0PiqJQqQ1RXYXrTUhOkHjaj2%2Foh%2BtB%2FoUGeNWuJ%2B%2F%2BWJpxP8aOwfOhef6kMWwoFl27gQuiz%2FRtRDYaI6Fxfe0GNGvQ5MQQN3lBdupPlZLXYjPsXL%2BUh45xwRfj6w5APxRyRbYL9bnrf17MGA71EJ27KYUA53enDcoTW0w2uxzym8uvf&X-Amz-Signature=0fc572a7ed7c388b84fa39f97a0d94f2bf193bb96f582f69a9f4ae5a90b21b94&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U44IPVFO%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCT55Si7YOWKMFabnZYg1uc1T1Ton667n5URq8jxk9XLgIgbP5skdvSJCOXS6euPgRSQp38%2F2kQkMCHxt7NH%2FbGSg4q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDPbH9Tuq%2B76wVKtD6CrcA%2FwAYa%2BomMoC5xgpguPdkVkxj4WOUBCV1V0%2Bb0uMIT8y4pubK27nDwq7syCdHBBdR9KEM9ZLrVxZ%2Fof1lDLRhmTUvQNU2N0ILnAsKl5QQHdupnmFb47vbxM8rteFhc3LZN9W7tS0JaPJa9Vrg5Zc4seRm6izDXfQomggYR89qcfZmXCz%2BJu0JnLtB1eIotwcMbbLSxo1JIPK4c73vRLIUuenMdVQHspu4BpHD1MIKGJI%2FZ1z%2FGV8XJfsand5P2Pnm2O3jpj59DDFEOnLkj35UV1Q5m%2FkdkUEnE2B%2Bc55PMETSaLDv%2B%2BoDUKFYCKhyhE9dCvZDrz62xAVm1r7VYUBvttTHT%2FcL34yPHs0FsgpR5j2Gqj4yfi3jEthQGQruPZdJVw%2FEUfL6NQ14YSYB9MGp2YLzDiAD7N0G9VUOw3mf9GKgf16XfjheTU5mDFPJ4iqgVQkFKGtceuRf4Jcr3Bu3ShZno653kr2VLq9II%2By6QvGOkBYXMFdQQUnGwFzp%2FhCz2ikJWG8tNovZg6fiE%2FrGx0Zk4qfdFyGWZHzDUPQHR7OuNMdrXVIOTyUJZvwQnmy2zVea%2FWAgsD0ZyEc6D7R%2BeWPgUuqMkiyxj25NamUZ%2F0%2FIBdZviPgEb4Q1EXiMNTjvr8GOqUBnPU%2F4CFykmW9NzeS2ox0ZtxFck%2BbFYBZHCl8mw1mGtSFF0PiqJQqQ1RXYXrTUhOkHjaj2%2Foh%2BtB%2FoUGeNWuJ%2B%2F%2BWJpxP8aOwfOhef6kMWwoFl27gQuiz%2FRtRDYaI6Fxfe0GNGvQ5MQQN3lBdupPlZLXYjPsXL%2BUh45xwRfj6w5APxRyRbYL9bnrf17MGA71EJ27KYUA53enDcoTW0w2uxzym8uvf&X-Amz-Signature=bf4cb762be4874823720276762e80988a086e379ab2948847c213bf190befaee&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
