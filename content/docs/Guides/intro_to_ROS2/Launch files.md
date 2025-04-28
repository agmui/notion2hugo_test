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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DW73AXY%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjXG%2B6YQBdAIRfcerLTG5CcR03JqGGBYXK9icOoDJ1AgIhAMrU%2FMI7dx52mRXhVnMXzqvzYWnu1LbZXtcWmfEbmRmPKv8DCH8QABoMNjM3NDIzMTgzODA1IgyOfqZhYNg0WjV%2FlcQq3AMnXDkrmfN65HjPuXdv0JICLFYOEXu%2BAQLYgBncYHkUphxHr48P5gJtFQNLx2PPRnF%2FfakdOkn%2B1zSrHMHR1TXalCksggLCrKj2D%2BAG3T4T8chRvnz%2BUFHm2SNEjw%2BTzjtk9jY5c0G5UGMTn5%2Fbq%2BeJ8I0lDWhidQRCer8jRrom6EhnOEEESBEFNFcaAZEaJmDfGOpm71QckJeZkbrvibLo5cBCC8vqZ%2BjucPVFQcxDQtwctF3ZdH2F%2Br%2BLPtxg6wpj%2BO21yxytHzLza8FBNSqQ0DEA%2F1%2FxVYxWRW%2FyXYLKtTKrLYqO%2BzjJWtPxdoLXrpB5baiqAZgrv88pbPPLjeOsZ%2Brmv0DKfcIHc33pnAcWiDhh1V9GT%2FdSlwI9sWZvwFdf43RIkds3BHsEQ%2B%2BbQ2aoyzFW5i0nqrJIjYL6bdAa0FUIiq9n42cERB48LNAahdrtGaVKgofQ0%2Fp3M3slm7pruRdvQl0PFmjE%2Ft1o49d7%2FinrjaikOUrHqTmej9Ue6iv2DhvvO2KQOueWuuY0SvaC3J0%2Fs5YcURXChNZfFDJ%2FgLsQItPfIyaBIGpOXmj05350CPYYkGbnDaIdmby5TY1bX7nr%2Fod4IVAHISIGLKD5bSqY7cGU3FVG7LnZ7zDJ7L%2FABjqkAR%2BIgZ3Khh%2FXaeZnc1d5Lz%2BYVD2cVDqa%2FlzDHGbp1GMyVlrWPhUJv0fjiQkYtsm8C0lN75OrNPUu4rJaqcnJOnVoJEFsOL8%2BUDouLuuRP38Pp8m87zkjqvbY%2BM78zItGCBSZ8v4%2Bj4kG%2FusEaKyIwrqy1K67Erj1vyaZWhoTAMeHPEa3D9MnDE95LcQRTBnq7fw26Mh%2BbZa%2Bn3o2IMObvtBjg2G0&X-Amz-Signature=20d0d6213f8b477b231974e0c8b52eaca423839baf077a2457fdb697c6e10ee0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DW73AXY%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjXG%2B6YQBdAIRfcerLTG5CcR03JqGGBYXK9icOoDJ1AgIhAMrU%2FMI7dx52mRXhVnMXzqvzYWnu1LbZXtcWmfEbmRmPKv8DCH8QABoMNjM3NDIzMTgzODA1IgyOfqZhYNg0WjV%2FlcQq3AMnXDkrmfN65HjPuXdv0JICLFYOEXu%2BAQLYgBncYHkUphxHr48P5gJtFQNLx2PPRnF%2FfakdOkn%2B1zSrHMHR1TXalCksggLCrKj2D%2BAG3T4T8chRvnz%2BUFHm2SNEjw%2BTzjtk9jY5c0G5UGMTn5%2Fbq%2BeJ8I0lDWhidQRCer8jRrom6EhnOEEESBEFNFcaAZEaJmDfGOpm71QckJeZkbrvibLo5cBCC8vqZ%2BjucPVFQcxDQtwctF3ZdH2F%2Br%2BLPtxg6wpj%2BO21yxytHzLza8FBNSqQ0DEA%2F1%2FxVYxWRW%2FyXYLKtTKrLYqO%2BzjJWtPxdoLXrpB5baiqAZgrv88pbPPLjeOsZ%2Brmv0DKfcIHc33pnAcWiDhh1V9GT%2FdSlwI9sWZvwFdf43RIkds3BHsEQ%2B%2BbQ2aoyzFW5i0nqrJIjYL6bdAa0FUIiq9n42cERB48LNAahdrtGaVKgofQ0%2Fp3M3slm7pruRdvQl0PFmjE%2Ft1o49d7%2FinrjaikOUrHqTmej9Ue6iv2DhvvO2KQOueWuuY0SvaC3J0%2Fs5YcURXChNZfFDJ%2FgLsQItPfIyaBIGpOXmj05350CPYYkGbnDaIdmby5TY1bX7nr%2Fod4IVAHISIGLKD5bSqY7cGU3FVG7LnZ7zDJ7L%2FABjqkAR%2BIgZ3Khh%2FXaeZnc1d5Lz%2BYVD2cVDqa%2FlzDHGbp1GMyVlrWPhUJv0fjiQkYtsm8C0lN75OrNPUu4rJaqcnJOnVoJEFsOL8%2BUDouLuuRP38Pp8m87zkjqvbY%2BM78zItGCBSZ8v4%2Bj4kG%2FusEaKyIwrqy1K67Erj1vyaZWhoTAMeHPEa3D9MnDE95LcQRTBnq7fw26Mh%2BbZa%2Bn3o2IMObvtBjg2G0&X-Amz-Signature=b403af3ffea3531e37ab8dcbf0310c733a873cbf4038c8c977d4c5ca3db87291&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DW73AXY%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjXG%2B6YQBdAIRfcerLTG5CcR03JqGGBYXK9icOoDJ1AgIhAMrU%2FMI7dx52mRXhVnMXzqvzYWnu1LbZXtcWmfEbmRmPKv8DCH8QABoMNjM3NDIzMTgzODA1IgyOfqZhYNg0WjV%2FlcQq3AMnXDkrmfN65HjPuXdv0JICLFYOEXu%2BAQLYgBncYHkUphxHr48P5gJtFQNLx2PPRnF%2FfakdOkn%2B1zSrHMHR1TXalCksggLCrKj2D%2BAG3T4T8chRvnz%2BUFHm2SNEjw%2BTzjtk9jY5c0G5UGMTn5%2Fbq%2BeJ8I0lDWhidQRCer8jRrom6EhnOEEESBEFNFcaAZEaJmDfGOpm71QckJeZkbrvibLo5cBCC8vqZ%2BjucPVFQcxDQtwctF3ZdH2F%2Br%2BLPtxg6wpj%2BO21yxytHzLza8FBNSqQ0DEA%2F1%2FxVYxWRW%2FyXYLKtTKrLYqO%2BzjJWtPxdoLXrpB5baiqAZgrv88pbPPLjeOsZ%2Brmv0DKfcIHc33pnAcWiDhh1V9GT%2FdSlwI9sWZvwFdf43RIkds3BHsEQ%2B%2BbQ2aoyzFW5i0nqrJIjYL6bdAa0FUIiq9n42cERB48LNAahdrtGaVKgofQ0%2Fp3M3slm7pruRdvQl0PFmjE%2Ft1o49d7%2FinrjaikOUrHqTmej9Ue6iv2DhvvO2KQOueWuuY0SvaC3J0%2Fs5YcURXChNZfFDJ%2FgLsQItPfIyaBIGpOXmj05350CPYYkGbnDaIdmby5TY1bX7nr%2Fod4IVAHISIGLKD5bSqY7cGU3FVG7LnZ7zDJ7L%2FABjqkAR%2BIgZ3Khh%2FXaeZnc1d5Lz%2BYVD2cVDqa%2FlzDHGbp1GMyVlrWPhUJv0fjiQkYtsm8C0lN75OrNPUu4rJaqcnJOnVoJEFsOL8%2BUDouLuuRP38Pp8m87zkjqvbY%2BM78zItGCBSZ8v4%2Bj4kG%2FusEaKyIwrqy1K67Erj1vyaZWhoTAMeHPEa3D9MnDE95LcQRTBnq7fw26Mh%2BbZa%2Bn3o2IMObvtBjg2G0&X-Amz-Signature=d83ded82a7d2e6cd43c051fda3b9307278dbd0fee8cedc934ae0689c8faa08bc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
