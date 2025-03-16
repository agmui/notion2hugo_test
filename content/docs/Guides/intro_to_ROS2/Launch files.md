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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH4HZWZG%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOxQnL7BZqF6gH%2FsJJyaB%2B3kgI4ZY%2BgbJkYJ%2BPELmf2wIhAPCmuzdm0nqrnQEfP%2B4nP23ODh2H%2F87zXXBXqX%2BPWludKv8DCDQQABoMNjM3NDIzMTgzODA1IgxErM5955UNxp7D5YAq3AM74GRB%2Bw6l4nZswGGATfhEqrATPQyT2uNM%2BkcVy5rr%2FeiMQzzle05Mkb2uaaQGbyUGvSHcPVmAjB7kBGTJ85Vfv1nXUiKJ0PtJ8bJiGtmWHzM1V67TTP1BNdA3eGCkCY9lgEnIC64KFYqB%2FRE4CkQe1FYVZw0TA6bDYitsI7KLwms73Z8oKCoBOTn%2BJprun%2Feg6WO7T8CvR4TBkmsNaDCDjnixmjaoTT7E5HlCV%2FO71P8GbG0PNDqcYpmNZ02gjeZu6PqLGJfJaHkpsn5ZrKzmu08umUt9Y8Maou%2FEFv6lwagR5BVP0uEanw4dLUPvg9Xs%2F9pHPLCv7%2F84v%2FCdLQterGWJx96UCPrVjAU7TD6eXIYSuAVQsY0ZrG%2BNrZ5idXiieFaZRV%2F6vpOHVH3ZManbyOiWW69TqZAThIxR3zGe1LlQjiKdTKyTOhmU%2Fm%2B5ILauxxK54wB3kUGmOnvBSRDI2tkp9VLuTluO36T7o%2BjwI2otNG8%2BX7Ts2C0whL7IeYRD4aoi%2B5vWhG21AlEziyXN4xkBYF6%2F4ZE1tVeYfpL1ylU1k%2BZlsj%2Bz3pQ0YvBSMHU5mBSU6%2B7UUCTLOlyZDMMC6HckExrGCMB6VrGo1w6IUGfyhoRDLbmw6%2BMjqTD6vdy%2BBjqkATfbLAmv5sf7mdqDnOuMEzTqCaifuMSd8RnaFqRVKfkIVPIvtN2XepS2dXGCqoIwI4COtw0VV1pvRDivsxg4fk39gqaAW%2Ff3OiB0TEOMOJyC0Hb%2F980w0yleh7DSrXl1G%2Fstnw8r6XIVxFrTXOOYf94ZKRIGtXR8y1ql2sPTVclz%2BDlGnqtHKSOZhQsewYcru3tmu5XguJxDMP9hjC3eVgmjEK4n&X-Amz-Signature=1558c200713a888e4323a506adfc372b302e9df9e851b31843cb7fc457d07ebd&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH4HZWZG%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOxQnL7BZqF6gH%2FsJJyaB%2B3kgI4ZY%2BgbJkYJ%2BPELmf2wIhAPCmuzdm0nqrnQEfP%2B4nP23ODh2H%2F87zXXBXqX%2BPWludKv8DCDQQABoMNjM3NDIzMTgzODA1IgxErM5955UNxp7D5YAq3AM74GRB%2Bw6l4nZswGGATfhEqrATPQyT2uNM%2BkcVy5rr%2FeiMQzzle05Mkb2uaaQGbyUGvSHcPVmAjB7kBGTJ85Vfv1nXUiKJ0PtJ8bJiGtmWHzM1V67TTP1BNdA3eGCkCY9lgEnIC64KFYqB%2FRE4CkQe1FYVZw0TA6bDYitsI7KLwms73Z8oKCoBOTn%2BJprun%2Feg6WO7T8CvR4TBkmsNaDCDjnixmjaoTT7E5HlCV%2FO71P8GbG0PNDqcYpmNZ02gjeZu6PqLGJfJaHkpsn5ZrKzmu08umUt9Y8Maou%2FEFv6lwagR5BVP0uEanw4dLUPvg9Xs%2F9pHPLCv7%2F84v%2FCdLQterGWJx96UCPrVjAU7TD6eXIYSuAVQsY0ZrG%2BNrZ5idXiieFaZRV%2F6vpOHVH3ZManbyOiWW69TqZAThIxR3zGe1LlQjiKdTKyTOhmU%2Fm%2B5ILauxxK54wB3kUGmOnvBSRDI2tkp9VLuTluO36T7o%2BjwI2otNG8%2BX7Ts2C0whL7IeYRD4aoi%2B5vWhG21AlEziyXN4xkBYF6%2F4ZE1tVeYfpL1ylU1k%2BZlsj%2Bz3pQ0YvBSMHU5mBSU6%2B7UUCTLOlyZDMMC6HckExrGCMB6VrGo1w6IUGfyhoRDLbmw6%2BMjqTD6vdy%2BBjqkATfbLAmv5sf7mdqDnOuMEzTqCaifuMSd8RnaFqRVKfkIVPIvtN2XepS2dXGCqoIwI4COtw0VV1pvRDivsxg4fk39gqaAW%2Ff3OiB0TEOMOJyC0Hb%2F980w0yleh7DSrXl1G%2Fstnw8r6XIVxFrTXOOYf94ZKRIGtXR8y1ql2sPTVclz%2BDlGnqtHKSOZhQsewYcru3tmu5XguJxDMP9hjC3eVgmjEK4n&X-Amz-Signature=70d43449092fc4b7cf3fd38684378421dc124fba7990f9fd4cd333fe09893a6d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH4HZWZG%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOxQnL7BZqF6gH%2FsJJyaB%2B3kgI4ZY%2BgbJkYJ%2BPELmf2wIhAPCmuzdm0nqrnQEfP%2B4nP23ODh2H%2F87zXXBXqX%2BPWludKv8DCDQQABoMNjM3NDIzMTgzODA1IgxErM5955UNxp7D5YAq3AM74GRB%2Bw6l4nZswGGATfhEqrATPQyT2uNM%2BkcVy5rr%2FeiMQzzle05Mkb2uaaQGbyUGvSHcPVmAjB7kBGTJ85Vfv1nXUiKJ0PtJ8bJiGtmWHzM1V67TTP1BNdA3eGCkCY9lgEnIC64KFYqB%2FRE4CkQe1FYVZw0TA6bDYitsI7KLwms73Z8oKCoBOTn%2BJprun%2Feg6WO7T8CvR4TBkmsNaDCDjnixmjaoTT7E5HlCV%2FO71P8GbG0PNDqcYpmNZ02gjeZu6PqLGJfJaHkpsn5ZrKzmu08umUt9Y8Maou%2FEFv6lwagR5BVP0uEanw4dLUPvg9Xs%2F9pHPLCv7%2F84v%2FCdLQterGWJx96UCPrVjAU7TD6eXIYSuAVQsY0ZrG%2BNrZ5idXiieFaZRV%2F6vpOHVH3ZManbyOiWW69TqZAThIxR3zGe1LlQjiKdTKyTOhmU%2Fm%2B5ILauxxK54wB3kUGmOnvBSRDI2tkp9VLuTluO36T7o%2BjwI2otNG8%2BX7Ts2C0whL7IeYRD4aoi%2B5vWhG21AlEziyXN4xkBYF6%2F4ZE1tVeYfpL1ylU1k%2BZlsj%2Bz3pQ0YvBSMHU5mBSU6%2B7UUCTLOlyZDMMC6HckExrGCMB6VrGo1w6IUGfyhoRDLbmw6%2BMjqTD6vdy%2BBjqkATfbLAmv5sf7mdqDnOuMEzTqCaifuMSd8RnaFqRVKfkIVPIvtN2XepS2dXGCqoIwI4COtw0VV1pvRDivsxg4fk39gqaAW%2Ff3OiB0TEOMOJyC0Hb%2F980w0yleh7DSrXl1G%2Fstnw8r6XIVxFrTXOOYf94ZKRIGtXR8y1ql2sPTVclz%2BDlGnqtHKSOZhQsewYcru3tmu5XguJxDMP9hjC3eVgmjEK4n&X-Amz-Signature=6911a56b839aebd277c94f99a3060c9a3af64d9f5c83f4533128f841aa89da5f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
