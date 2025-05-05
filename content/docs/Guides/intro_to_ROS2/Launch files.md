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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W44BSEXG%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T091038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTFfSqqMuzb72cYnrtux9rH4huIehZ5vQr5i9V2HHSWQIhAMajqziIzxJrbRwsJiCnfooilP5KqBpwvvrzjNAUMRGPKv8DCCgQABoMNjM3NDIzMTgzODA1IgwaAktGgHLjtGloCisq3APAybBu0ac6yHx1n4ZUa6MyvNrBchvWY1ndyiBvmp0mhtfC2MsnSMftSjJql642RoIUO9dDAWtdcMKcJeghg7X39JJH5zthA%2FJLRK4KFVjAtQS0AieMm6kJl0B3peqtmPY55bxBwiIT%2FC0t8zs1RUOXz%2Fn%2FY%2Bu21RWKCaTivCYriqZqrsYK%2FVv%2F90TDOZuGxLSEeLvkcRNZ0Cm7lS5Z5vX8YBog6vETP1gT%2FZwS8kPHYyuxtBNpYioeJaCpJ3ycIVJyDDcZz4GSYQdumpK%2BLKhTD7rC428Y74S%2BthofWpZQbSpIQbLyQUuWwt%2Fx0g49PGdGhkekjoGFHl20C2n2ZQQRzisqy8hp5CkPt9L7Sdu8n6gePhYmw7Mu2e2xEQf0xx3tpVV%2BkfcZ78TiC3VJDbCLghGiSZ5sJ5GwoJ1Seopzd2jrlyelF0DKt%2FrLx0W4WFJlRcgJedKrpLpbcL9Mapb7PDSMLtFdhIV2nKJ99LaUjz%2BA5KojwxqU4x4vDnBpS4F4P6gJ9RJTvkxHv4%2FH3eQ7NKNYWRWC6RdomA%2BvL8YxhPHJuxEovT6wSWL7RBRTNcdorJpQrB08d2FVhy3awQiSS%2Br6EbchZWY5P1oJoFjd7%2FbqXArTV7mcyltrGzDMz%2BHABjqkAUw9uCq9Jr5TxBvKT6lcJtH8Pxch5v%2Bt2lOrwtsJHL4rXsNmzDE5oALEfpxqLG8xKUWxqv2Kp%2BhdrXgBmdN5ypc8GdsNybuMX4dwAXuujOUgBugqX6WPCH0zGX9JAwOHoR%2BaJcufCuXc9JVJ2BCeKzgQ1SwrJVaBApm100pTrTpYl9%2BzaPzz8AhUy%2F3dlvMsrqahdaboJh6zpMpEVKUtCo%2Bv%2FS%2F6&X-Amz-Signature=d70d88625f343da6a6feb57e60de93904e9fc9f78d6b8488522855b55f466851&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W44BSEXG%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T091038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTFfSqqMuzb72cYnrtux9rH4huIehZ5vQr5i9V2HHSWQIhAMajqziIzxJrbRwsJiCnfooilP5KqBpwvvrzjNAUMRGPKv8DCCgQABoMNjM3NDIzMTgzODA1IgwaAktGgHLjtGloCisq3APAybBu0ac6yHx1n4ZUa6MyvNrBchvWY1ndyiBvmp0mhtfC2MsnSMftSjJql642RoIUO9dDAWtdcMKcJeghg7X39JJH5zthA%2FJLRK4KFVjAtQS0AieMm6kJl0B3peqtmPY55bxBwiIT%2FC0t8zs1RUOXz%2Fn%2FY%2Bu21RWKCaTivCYriqZqrsYK%2FVv%2F90TDOZuGxLSEeLvkcRNZ0Cm7lS5Z5vX8YBog6vETP1gT%2FZwS8kPHYyuxtBNpYioeJaCpJ3ycIVJyDDcZz4GSYQdumpK%2BLKhTD7rC428Y74S%2BthofWpZQbSpIQbLyQUuWwt%2Fx0g49PGdGhkekjoGFHl20C2n2ZQQRzisqy8hp5CkPt9L7Sdu8n6gePhYmw7Mu2e2xEQf0xx3tpVV%2BkfcZ78TiC3VJDbCLghGiSZ5sJ5GwoJ1Seopzd2jrlyelF0DKt%2FrLx0W4WFJlRcgJedKrpLpbcL9Mapb7PDSMLtFdhIV2nKJ99LaUjz%2BA5KojwxqU4x4vDnBpS4F4P6gJ9RJTvkxHv4%2FH3eQ7NKNYWRWC6RdomA%2BvL8YxhPHJuxEovT6wSWL7RBRTNcdorJpQrB08d2FVhy3awQiSS%2Br6EbchZWY5P1oJoFjd7%2FbqXArTV7mcyltrGzDMz%2BHABjqkAUw9uCq9Jr5TxBvKT6lcJtH8Pxch5v%2Bt2lOrwtsJHL4rXsNmzDE5oALEfpxqLG8xKUWxqv2Kp%2BhdrXgBmdN5ypc8GdsNybuMX4dwAXuujOUgBugqX6WPCH0zGX9JAwOHoR%2BaJcufCuXc9JVJ2BCeKzgQ1SwrJVaBApm100pTrTpYl9%2BzaPzz8AhUy%2F3dlvMsrqahdaboJh6zpMpEVKUtCo%2Bv%2FS%2F6&X-Amz-Signature=f98b9c70434c62b53aaa4a07d30603d8740088e65285debb17362441ec44b272&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W44BSEXG%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T091038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTFfSqqMuzb72cYnrtux9rH4huIehZ5vQr5i9V2HHSWQIhAMajqziIzxJrbRwsJiCnfooilP5KqBpwvvrzjNAUMRGPKv8DCCgQABoMNjM3NDIzMTgzODA1IgwaAktGgHLjtGloCisq3APAybBu0ac6yHx1n4ZUa6MyvNrBchvWY1ndyiBvmp0mhtfC2MsnSMftSjJql642RoIUO9dDAWtdcMKcJeghg7X39JJH5zthA%2FJLRK4KFVjAtQS0AieMm6kJl0B3peqtmPY55bxBwiIT%2FC0t8zs1RUOXz%2Fn%2FY%2Bu21RWKCaTivCYriqZqrsYK%2FVv%2F90TDOZuGxLSEeLvkcRNZ0Cm7lS5Z5vX8YBog6vETP1gT%2FZwS8kPHYyuxtBNpYioeJaCpJ3ycIVJyDDcZz4GSYQdumpK%2BLKhTD7rC428Y74S%2BthofWpZQbSpIQbLyQUuWwt%2Fx0g49PGdGhkekjoGFHl20C2n2ZQQRzisqy8hp5CkPt9L7Sdu8n6gePhYmw7Mu2e2xEQf0xx3tpVV%2BkfcZ78TiC3VJDbCLghGiSZ5sJ5GwoJ1Seopzd2jrlyelF0DKt%2FrLx0W4WFJlRcgJedKrpLpbcL9Mapb7PDSMLtFdhIV2nKJ99LaUjz%2BA5KojwxqU4x4vDnBpS4F4P6gJ9RJTvkxHv4%2FH3eQ7NKNYWRWC6RdomA%2BvL8YxhPHJuxEovT6wSWL7RBRTNcdorJpQrB08d2FVhy3awQiSS%2Br6EbchZWY5P1oJoFjd7%2FbqXArTV7mcyltrGzDMz%2BHABjqkAUw9uCq9Jr5TxBvKT6lcJtH8Pxch5v%2Bt2lOrwtsJHL4rXsNmzDE5oALEfpxqLG8xKUWxqv2Kp%2BhdrXgBmdN5ypc8GdsNybuMX4dwAXuujOUgBugqX6WPCH0zGX9JAwOHoR%2BaJcufCuXc9JVJ2BCeKzgQ1SwrJVaBApm100pTrTpYl9%2BzaPzz8AhUy%2F3dlvMsrqahdaboJh6zpMpEVKUtCo%2Bv%2FS%2F6&X-Amz-Signature=2461d7e2410aaffe283a19f831affbb80ed6bb1e6930ef24640c929a854f92d8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
