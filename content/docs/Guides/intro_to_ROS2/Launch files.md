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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7WOUVYH%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T090920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDblosahaYvxE%2BxT6MmVC98%2FrZrQX3RL4%2BXsoJ2f11MXgIhAN15ivsMA%2BIqwsvcScARoZerrcbK7YAr22OhvYp3gHpGKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9wFvmcb%2FuR7aHQO0q3ANvMQ9g3YY69M9if%2FWOE1fTOGElBP100I%2FHD1%2FDjsMCQ9WTF7AYPJpJmwOiqiBMvkkA3tVmHBNAVmFfWCmO7hKD4pLIVAiCQ47UQGbJL63%2Fo%2F1JRakjfJYreOnz7z41C7sDAE2R8GeMTORLuABjFvYeHQ9EEYsW2ommF%2FyG%2FU71ZzVLbrmOYI1i%2BiZ20iPfi1aLwds7f8R%2BHrY5g5dR2WKTbgppjMnbBvOBuhx9gZ0MQukwrct%2B%2FiT%2BYbAcs3YFhs1Z4FfMGtcrn9o3qY%2Bh8SmMOitZGGWMcsRGWzQroPhoG4XQHPR9BeNgKyxHobp%2BN6%2FIW4PsPRNr0BeaIEnrDMyjzYuEmgfIk%2FV2Fsce0kEzd6cWKNfkRn1aVzLKyRVta5%2FQ99eev2ZXPuoq8qkzcxJDjpX%2BPUhFEeNTO9tLjTH9Ls0Kjzy8DuWD94jn%2BQxlETFfuH9j1kXJeBdAZeBDacrWyO%2FAsXk5CUfvBacMowZvxkXfLkp6QxNy4JOVsdTLDCpmkf%2FpjqyKL%2BUWcHPpHqt9B6As3WuB6Y3wg7fywAQrRgARxtRkcTab2EhjmrDdldizBe1kcWD2uUSanUkELeBEAVO326dUH1Z3AipEcyS7JVFJk4%2Ff1cdOZz7b9zCoip3ABjqkAcMRchGppZju%2Bhof8ptyrnifQ%2BoVQL58NSuTR29zdwMuSxFRRsyHo4RI%2BP91qIARQ8XBGcYJgIznJU3bJFxh6HppckHQbGRmAKvNPUH3v3UMNFZjLd4ReBGYHArsRO%2BTQeArIUBpqi4y1kWoc2vA0U16n4Ell3iDrVILGIspnODYqLJ4qnU1r46yIovcTDk35JDXjaTe4ZRAb%2Fqs1q9Q%2BCdPl5ZL&X-Amz-Signature=1e8a3223c7094a3ad7dca979496587728471451f3b741833157ad992f25209a5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7WOUVYH%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T090920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDblosahaYvxE%2BxT6MmVC98%2FrZrQX3RL4%2BXsoJ2f11MXgIhAN15ivsMA%2BIqwsvcScARoZerrcbK7YAr22OhvYp3gHpGKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9wFvmcb%2FuR7aHQO0q3ANvMQ9g3YY69M9if%2FWOE1fTOGElBP100I%2FHD1%2FDjsMCQ9WTF7AYPJpJmwOiqiBMvkkA3tVmHBNAVmFfWCmO7hKD4pLIVAiCQ47UQGbJL63%2Fo%2F1JRakjfJYreOnz7z41C7sDAE2R8GeMTORLuABjFvYeHQ9EEYsW2ommF%2FyG%2FU71ZzVLbrmOYI1i%2BiZ20iPfi1aLwds7f8R%2BHrY5g5dR2WKTbgppjMnbBvOBuhx9gZ0MQukwrct%2B%2FiT%2BYbAcs3YFhs1Z4FfMGtcrn9o3qY%2Bh8SmMOitZGGWMcsRGWzQroPhoG4XQHPR9BeNgKyxHobp%2BN6%2FIW4PsPRNr0BeaIEnrDMyjzYuEmgfIk%2FV2Fsce0kEzd6cWKNfkRn1aVzLKyRVta5%2FQ99eev2ZXPuoq8qkzcxJDjpX%2BPUhFEeNTO9tLjTH9Ls0Kjzy8DuWD94jn%2BQxlETFfuH9j1kXJeBdAZeBDacrWyO%2FAsXk5CUfvBacMowZvxkXfLkp6QxNy4JOVsdTLDCpmkf%2FpjqyKL%2BUWcHPpHqt9B6As3WuB6Y3wg7fywAQrRgARxtRkcTab2EhjmrDdldizBe1kcWD2uUSanUkELeBEAVO326dUH1Z3AipEcyS7JVFJk4%2Ff1cdOZz7b9zCoip3ABjqkAcMRchGppZju%2Bhof8ptyrnifQ%2BoVQL58NSuTR29zdwMuSxFRRsyHo4RI%2BP91qIARQ8XBGcYJgIznJU3bJFxh6HppckHQbGRmAKvNPUH3v3UMNFZjLd4ReBGYHArsRO%2BTQeArIUBpqi4y1kWoc2vA0U16n4Ell3iDrVILGIspnODYqLJ4qnU1r46yIovcTDk35JDXjaTe4ZRAb%2Fqs1q9Q%2BCdPl5ZL&X-Amz-Signature=91a04475ec6e8b4859a165fe1d0297e184d145f0182bb49d4ca4e85cac991cfa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7WOUVYH%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T090920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDblosahaYvxE%2BxT6MmVC98%2FrZrQX3RL4%2BXsoJ2f11MXgIhAN15ivsMA%2BIqwsvcScARoZerrcbK7YAr22OhvYp3gHpGKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9wFvmcb%2FuR7aHQO0q3ANvMQ9g3YY69M9if%2FWOE1fTOGElBP100I%2FHD1%2FDjsMCQ9WTF7AYPJpJmwOiqiBMvkkA3tVmHBNAVmFfWCmO7hKD4pLIVAiCQ47UQGbJL63%2Fo%2F1JRakjfJYreOnz7z41C7sDAE2R8GeMTORLuABjFvYeHQ9EEYsW2ommF%2FyG%2FU71ZzVLbrmOYI1i%2BiZ20iPfi1aLwds7f8R%2BHrY5g5dR2WKTbgppjMnbBvOBuhx9gZ0MQukwrct%2B%2FiT%2BYbAcs3YFhs1Z4FfMGtcrn9o3qY%2Bh8SmMOitZGGWMcsRGWzQroPhoG4XQHPR9BeNgKyxHobp%2BN6%2FIW4PsPRNr0BeaIEnrDMyjzYuEmgfIk%2FV2Fsce0kEzd6cWKNfkRn1aVzLKyRVta5%2FQ99eev2ZXPuoq8qkzcxJDjpX%2BPUhFEeNTO9tLjTH9Ls0Kjzy8DuWD94jn%2BQxlETFfuH9j1kXJeBdAZeBDacrWyO%2FAsXk5CUfvBacMowZvxkXfLkp6QxNy4JOVsdTLDCpmkf%2FpjqyKL%2BUWcHPpHqt9B6As3WuB6Y3wg7fywAQrRgARxtRkcTab2EhjmrDdldizBe1kcWD2uUSanUkELeBEAVO326dUH1Z3AipEcyS7JVFJk4%2Ff1cdOZz7b9zCoip3ABjqkAcMRchGppZju%2Bhof8ptyrnifQ%2BoVQL58NSuTR29zdwMuSxFRRsyHo4RI%2BP91qIARQ8XBGcYJgIznJU3bJFxh6HppckHQbGRmAKvNPUH3v3UMNFZjLd4ReBGYHArsRO%2BTQeArIUBpqi4y1kWoc2vA0U16n4Ell3iDrVILGIspnODYqLJ4qnU1r46yIovcTDk35JDXjaTe4ZRAb%2Fqs1q9Q%2BCdPl5ZL&X-Amz-Signature=668e8689773dc83980b88795650fa4fbc56f68e46d397bed9d916d86efb73cf1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
