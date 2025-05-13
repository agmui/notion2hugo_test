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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654AE4XC3%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T004152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIFJ5uVTTlrt1L9nbTCjPgCF0p6Bvutc5LdvnO7eHJlndAiEA73wpRhSBDhk38v89cMmChVgHUl0Edd9y2tQ8sPguBQAqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDxTXSW%2FJnvkuwypjSrcA%2BRJC1GsgIgyrABtboFF6iuRtH5a4pypl%2Fj6f4UGnBGwAnJJJGWso0XKV4vj0YnVbZsm7%2Fgjw24YMR0C3tGnl13SbG4w4jywW3H8IfeskWAsS0HxfVqjN1z9KOnAU8hlK0oP1sY%2F85rMjJrwCk3scUZvGN54dIT%2FQaWZpuJgvANoQsOf10HqFhuMDPOo2MBnPatKkOdF758I%2FPEw4Ugqm21HWXCymJVcV%2BTzwSmvchEINJBhfvy9qrqUEcbnYd1BzyL8l7sM2D1v50f6a%2Br%2BsZ94v4ywdgGZhpC1r2R3nbJRUZhSp1uL0SebUQlBsIsyhOMuJaHcvGlTaRLZYpkC4Pi4QgCYk%2BXMV8IfjwYd8%2FplSq6SmVfdjppZYqATOHJrK71scZ0aFLtPUkyctSbmg53XKUfEO%2F68CQA3eMxjafb899kJQaVrOYX7JfZuW5ZeK4m2nlNcYryCVG%2FlBTfTle8jDANR86CXuZnDez9ho25PiUOfFqxkJwcUnvklduRBiras53TeDtMHpema5F52J6xwrNqqft%2B%2BqkI5bPn%2B%2FHCP1a%2B9e3YYPGymHMNGYIJFqJjIX2Va6hu5kADKUOhyAleOe3kykNd7bvv%2B9eimLqi7YUPMTZg3xaWz5CexMNWRisEGOqUBWztGQORf1kDTeTS1sUe%2B2FCm3s0f%2Bn8butUIfYB0NBhZARwgoMUsAsml7EBiSkT0P%2FlOCrJxJWphIzL%2FcgzjQbQIHtmKFQLubshYpDwLSqaUUuBEbkRSYYF1PjB0e9u2Eb1AIsE9FZGyys%2FTvzpwIwk4%2BVvFN0EgWD7iDhyplNLidI%2F7F5XVPDgCdGBMwfhn35ClBsf60DLfPTwyXEZqR4Of8Uot&X-Amz-Signature=1593aef698336e4020080504a1369aefdbf1e4c53958827d281f7fddba5ab376&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654AE4XC3%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T004152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIFJ5uVTTlrt1L9nbTCjPgCF0p6Bvutc5LdvnO7eHJlndAiEA73wpRhSBDhk38v89cMmChVgHUl0Edd9y2tQ8sPguBQAqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDxTXSW%2FJnvkuwypjSrcA%2BRJC1GsgIgyrABtboFF6iuRtH5a4pypl%2Fj6f4UGnBGwAnJJJGWso0XKV4vj0YnVbZsm7%2Fgjw24YMR0C3tGnl13SbG4w4jywW3H8IfeskWAsS0HxfVqjN1z9KOnAU8hlK0oP1sY%2F85rMjJrwCk3scUZvGN54dIT%2FQaWZpuJgvANoQsOf10HqFhuMDPOo2MBnPatKkOdF758I%2FPEw4Ugqm21HWXCymJVcV%2BTzwSmvchEINJBhfvy9qrqUEcbnYd1BzyL8l7sM2D1v50f6a%2Br%2BsZ94v4ywdgGZhpC1r2R3nbJRUZhSp1uL0SebUQlBsIsyhOMuJaHcvGlTaRLZYpkC4Pi4QgCYk%2BXMV8IfjwYd8%2FplSq6SmVfdjppZYqATOHJrK71scZ0aFLtPUkyctSbmg53XKUfEO%2F68CQA3eMxjafb899kJQaVrOYX7JfZuW5ZeK4m2nlNcYryCVG%2FlBTfTle8jDANR86CXuZnDez9ho25PiUOfFqxkJwcUnvklduRBiras53TeDtMHpema5F52J6xwrNqqft%2B%2BqkI5bPn%2B%2FHCP1a%2B9e3YYPGymHMNGYIJFqJjIX2Va6hu5kADKUOhyAleOe3kykNd7bvv%2B9eimLqi7YUPMTZg3xaWz5CexMNWRisEGOqUBWztGQORf1kDTeTS1sUe%2B2FCm3s0f%2Bn8butUIfYB0NBhZARwgoMUsAsml7EBiSkT0P%2FlOCrJxJWphIzL%2FcgzjQbQIHtmKFQLubshYpDwLSqaUUuBEbkRSYYF1PjB0e9u2Eb1AIsE9FZGyys%2FTvzpwIwk4%2BVvFN0EgWD7iDhyplNLidI%2F7F5XVPDgCdGBMwfhn35ClBsf60DLfPTwyXEZqR4Of8Uot&X-Amz-Signature=fc6ae58fdbc3ee4fa0fc56908cfd4135554f8d14cf42cbe8502acb0e9cab8457&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654AE4XC3%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T004152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIFJ5uVTTlrt1L9nbTCjPgCF0p6Bvutc5LdvnO7eHJlndAiEA73wpRhSBDhk38v89cMmChVgHUl0Edd9y2tQ8sPguBQAqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDxTXSW%2FJnvkuwypjSrcA%2BRJC1GsgIgyrABtboFF6iuRtH5a4pypl%2Fj6f4UGnBGwAnJJJGWso0XKV4vj0YnVbZsm7%2Fgjw24YMR0C3tGnl13SbG4w4jywW3H8IfeskWAsS0HxfVqjN1z9KOnAU8hlK0oP1sY%2F85rMjJrwCk3scUZvGN54dIT%2FQaWZpuJgvANoQsOf10HqFhuMDPOo2MBnPatKkOdF758I%2FPEw4Ugqm21HWXCymJVcV%2BTzwSmvchEINJBhfvy9qrqUEcbnYd1BzyL8l7sM2D1v50f6a%2Br%2BsZ94v4ywdgGZhpC1r2R3nbJRUZhSp1uL0SebUQlBsIsyhOMuJaHcvGlTaRLZYpkC4Pi4QgCYk%2BXMV8IfjwYd8%2FplSq6SmVfdjppZYqATOHJrK71scZ0aFLtPUkyctSbmg53XKUfEO%2F68CQA3eMxjafb899kJQaVrOYX7JfZuW5ZeK4m2nlNcYryCVG%2FlBTfTle8jDANR86CXuZnDez9ho25PiUOfFqxkJwcUnvklduRBiras53TeDtMHpema5F52J6xwrNqqft%2B%2BqkI5bPn%2B%2FHCP1a%2B9e3YYPGymHMNGYIJFqJjIX2Va6hu5kADKUOhyAleOe3kykNd7bvv%2B9eimLqi7YUPMTZg3xaWz5CexMNWRisEGOqUBWztGQORf1kDTeTS1sUe%2B2FCm3s0f%2Bn8butUIfYB0NBhZARwgoMUsAsml7EBiSkT0P%2FlOCrJxJWphIzL%2FcgzjQbQIHtmKFQLubshYpDwLSqaUUuBEbkRSYYF1PjB0e9u2Eb1AIsE9FZGyys%2FTvzpwIwk4%2BVvFN0EgWD7iDhyplNLidI%2F7F5XVPDgCdGBMwfhn35ClBsf60DLfPTwyXEZqR4Of8Uot&X-Amz-Signature=15fa4d0721a778ef868ae60e69e1b0cfa247eba521bbd51f0efff4800bae1aeb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
