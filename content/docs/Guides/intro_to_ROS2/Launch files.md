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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2X2QKKG%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T220517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYpF5rfJ7psJj9rLvDTB535r5Mb4rogKQQOOW5qpIhygIge9C6MTT7sOLTjOZhrotJum%2F%2B5xn5j%2FPXE8qZQm8C%2FsEqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCOsf2i8ClmFx2C9XircAyUYLjca4WvmES9miPjFPaJ3Luc972OUcz02bJ%2BCCkwzjaEyli2RIKTscMxfvfVehJ7RStgBJ2utBaXxV%2B8gzcZsAIgffnTRJye3Uz9%2FMLQ%2BJ79lLcjxyzy84AakQxrlDBJa%2FemkB98xP00GFJ8gpgjxC%2BMgVELYyHK9ofAWbZ220r4X97zwW9BGDDrv%2BL2npEgIYBHjf35Pe%2BYZxyL6ASEZp%2B3qVs1BuPtTTZmKL9mw3ARkrGLDCgMkqJUXQ0TW8TlWPQCutOsyLFLkiObfwW1Ne0QFMSOB9Gh6%2FtSShc1gkBKG1Anwtc1Vdu2KJfNgF59pHpJLrsU5MfHKckm%2FKWY9BSmcZwuopEreTaSqGKsyPkOGES0geWOVG1JoQLmWiYtmJ%2FG0GpkBO2LXafWQQGluj74jBZN9Ebf93CQdJLk3nUT5gegSEzGybWuQjZigIi%2BxIErjrOwpIZWCu5iVZGupWnt9OadztaR5ShAPLVXFNicVI2U0Ff315zm5Jzuz1cP0K8ueu2TKxz%2FoY%2FVr1IT9Os4Sniy18fGdkIBodghYmkh5ienxv484w89nVVpifKe0UV%2FZpyIgSiKUQ8HT%2Foq0Pnnqgs4%2FiDINohmGofDzwCCUOh8GMrYrvo9FMLLi77wGOqUBYSoP%2BhzBTphenRu6WDbm5qS5QoW0bmiW%2F7FtAdapHUrTiQps3tCPX70ZM09g1m6eMgaKVimo%2BNAW9DLHUjXSVBwj6BV0i7dZtav327imFpJryyyl9aqmQWFLrqI8Z2QC0lTea3qfz1Y6WjKj5FwsV2EWmQeLzPbH1BTX1mXeRohCYfmz%2FQk1a4QSmiZj5Xx67ED%2Bs39e4tBMtT5NDIRN0pmcnGxC&X-Amz-Signature=70794e60a841a86a7b7ad9f35b2c3d567905efe43767b37c701812147f58f80a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2X2QKKG%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T220517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYpF5rfJ7psJj9rLvDTB535r5Mb4rogKQQOOW5qpIhygIge9C6MTT7sOLTjOZhrotJum%2F%2B5xn5j%2FPXE8qZQm8C%2FsEqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCOsf2i8ClmFx2C9XircAyUYLjca4WvmES9miPjFPaJ3Luc972OUcz02bJ%2BCCkwzjaEyli2RIKTscMxfvfVehJ7RStgBJ2utBaXxV%2B8gzcZsAIgffnTRJye3Uz9%2FMLQ%2BJ79lLcjxyzy84AakQxrlDBJa%2FemkB98xP00GFJ8gpgjxC%2BMgVELYyHK9ofAWbZ220r4X97zwW9BGDDrv%2BL2npEgIYBHjf35Pe%2BYZxyL6ASEZp%2B3qVs1BuPtTTZmKL9mw3ARkrGLDCgMkqJUXQ0TW8TlWPQCutOsyLFLkiObfwW1Ne0QFMSOB9Gh6%2FtSShc1gkBKG1Anwtc1Vdu2KJfNgF59pHpJLrsU5MfHKckm%2FKWY9BSmcZwuopEreTaSqGKsyPkOGES0geWOVG1JoQLmWiYtmJ%2FG0GpkBO2LXafWQQGluj74jBZN9Ebf93CQdJLk3nUT5gegSEzGybWuQjZigIi%2BxIErjrOwpIZWCu5iVZGupWnt9OadztaR5ShAPLVXFNicVI2U0Ff315zm5Jzuz1cP0K8ueu2TKxz%2FoY%2FVr1IT9Os4Sniy18fGdkIBodghYmkh5ienxv484w89nVVpifKe0UV%2FZpyIgSiKUQ8HT%2Foq0Pnnqgs4%2FiDINohmGofDzwCCUOh8GMrYrvo9FMLLi77wGOqUBYSoP%2BhzBTphenRu6WDbm5qS5QoW0bmiW%2F7FtAdapHUrTiQps3tCPX70ZM09g1m6eMgaKVimo%2BNAW9DLHUjXSVBwj6BV0i7dZtav327imFpJryyyl9aqmQWFLrqI8Z2QC0lTea3qfz1Y6WjKj5FwsV2EWmQeLzPbH1BTX1mXeRohCYfmz%2FQk1a4QSmiZj5Xx67ED%2Bs39e4tBMtT5NDIRN0pmcnGxC&X-Amz-Signature=84fbfc05f426b51ad5eec579351502cf17edf989c47e3bd12e6a75ff1c8e1f64&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2X2QKKG%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T220517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYpF5rfJ7psJj9rLvDTB535r5Mb4rogKQQOOW5qpIhygIge9C6MTT7sOLTjOZhrotJum%2F%2B5xn5j%2FPXE8qZQm8C%2FsEqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCOsf2i8ClmFx2C9XircAyUYLjca4WvmES9miPjFPaJ3Luc972OUcz02bJ%2BCCkwzjaEyli2RIKTscMxfvfVehJ7RStgBJ2utBaXxV%2B8gzcZsAIgffnTRJye3Uz9%2FMLQ%2BJ79lLcjxyzy84AakQxrlDBJa%2FemkB98xP00GFJ8gpgjxC%2BMgVELYyHK9ofAWbZ220r4X97zwW9BGDDrv%2BL2npEgIYBHjf35Pe%2BYZxyL6ASEZp%2B3qVs1BuPtTTZmKL9mw3ARkrGLDCgMkqJUXQ0TW8TlWPQCutOsyLFLkiObfwW1Ne0QFMSOB9Gh6%2FtSShc1gkBKG1Anwtc1Vdu2KJfNgF59pHpJLrsU5MfHKckm%2FKWY9BSmcZwuopEreTaSqGKsyPkOGES0geWOVG1JoQLmWiYtmJ%2FG0GpkBO2LXafWQQGluj74jBZN9Ebf93CQdJLk3nUT5gegSEzGybWuQjZigIi%2BxIErjrOwpIZWCu5iVZGupWnt9OadztaR5ShAPLVXFNicVI2U0Ff315zm5Jzuz1cP0K8ueu2TKxz%2FoY%2FVr1IT9Os4Sniy18fGdkIBodghYmkh5ienxv484w89nVVpifKe0UV%2FZpyIgSiKUQ8HT%2Foq0Pnnqgs4%2FiDINohmGofDzwCCUOh8GMrYrvo9FMLLi77wGOqUBYSoP%2BhzBTphenRu6WDbm5qS5QoW0bmiW%2F7FtAdapHUrTiQps3tCPX70ZM09g1m6eMgaKVimo%2BNAW9DLHUjXSVBwj6BV0i7dZtav327imFpJryyyl9aqmQWFLrqI8Z2QC0lTea3qfz1Y6WjKj5FwsV2EWmQeLzPbH1BTX1mXeRohCYfmz%2FQk1a4QSmiZj5Xx67ED%2Bs39e4tBMtT5NDIRN0pmcnGxC&X-Amz-Signature=26ade5134bc0914d6051704293f9723dd81e6ae027618325b008e1a5a850cd15&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
