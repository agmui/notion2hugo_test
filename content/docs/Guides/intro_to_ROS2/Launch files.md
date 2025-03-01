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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF6GJ5TU%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T032229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDFCDev8sEQUt5whUuKCBBjwHIG9HbqKmRqXHNBYfkWIgIhAMlXQ4D%2BnSlMNT9ihZTTfab9KupSCyndJTMlwaBJVI5hKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9uRq3jV%2BAreqQlIYq3APNxX09z5M5bFPfMDU%2BcJlXc8u1%2FgJhl6Pli8uX75V0bXh%2FvApAopEgdSyyhTIdLOuBDRDW9zhU9YSI0a0gwhWo5TXsk9s2chCR3NQYWAFXnJaNw18G2aawTmSYRVasOjx9%2BkIBSLqXAr%2F24%2B0HoVRiGvuy8sNDr7wctIiYmJLQ0cBcroYcoUFw3Zt%2ByX%2FSceUAq0CQeUJk3MMDtoG4f2uFBHjMLT2egl8PD4OELU28JkBuW9nihzrytjXZQayNMPPdMTHXNi%2BExB5q7ZqFCALexuDRvs2egczG1rIWItBUm8tr4py%2FhkaAHH4DA%2Ba08jkHlvG76ngKqU%2Fk7WfyHgVj62x9j59BmM2lrnR68y2KD%2BCF%2BztgRh2l%2FPb2MUFYTQ8yj5Lj0ew1CnvRV71wmbZB2T7f8Y3Ej8f0GKHe2lgELuORlG75IL%2BSvma1Orr36LBtgVojUPClHn48fGPTcCfn2VhO9Z7cW%2BaBB0tkykwP%2ByEiAIzgo8buTezVO%2FNm8XjI0yKdX9sLz4rFF%2FUPzuz8PSHZjVFd%2F7sSCVkmd6rzKzbPabNc0SYZAdXxBXL%2BKy0zYJoRu2hwfUdK30hDma9iNujm8Dbhlhtx9I5Vv5fqm%2FgMIVP%2BNvDXbNafFjD78Ym%2BBjqkAZqMXIJiCIX8fu9MbJ9r%2Fn9GjnflN3fboIyKaWPQUypDqied4tFBuH%2FmbQ4DSEQyXImvLE%2BHoX7M9Mvc12sq3WDuTPVrQ%2F9GzCmsre6yAuWyBuLFlyE%2Bmz9%2BuRSjNBmuknMSmhAFBhyfFckt6n2gyldAIrgZUqI68jfkBBujKV17idBgZ6YpelwRsww4BIx1XWzqkCwc7k6z5SbRJtBmhCv0Cnxz&X-Amz-Signature=961961d89726602e65e34b4e133c1963dfc52c56e577cbcf8f98fda7eee25e69&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF6GJ5TU%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T032229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDFCDev8sEQUt5whUuKCBBjwHIG9HbqKmRqXHNBYfkWIgIhAMlXQ4D%2BnSlMNT9ihZTTfab9KupSCyndJTMlwaBJVI5hKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9uRq3jV%2BAreqQlIYq3APNxX09z5M5bFPfMDU%2BcJlXc8u1%2FgJhl6Pli8uX75V0bXh%2FvApAopEgdSyyhTIdLOuBDRDW9zhU9YSI0a0gwhWo5TXsk9s2chCR3NQYWAFXnJaNw18G2aawTmSYRVasOjx9%2BkIBSLqXAr%2F24%2B0HoVRiGvuy8sNDr7wctIiYmJLQ0cBcroYcoUFw3Zt%2ByX%2FSceUAq0CQeUJk3MMDtoG4f2uFBHjMLT2egl8PD4OELU28JkBuW9nihzrytjXZQayNMPPdMTHXNi%2BExB5q7ZqFCALexuDRvs2egczG1rIWItBUm8tr4py%2FhkaAHH4DA%2Ba08jkHlvG76ngKqU%2Fk7WfyHgVj62x9j59BmM2lrnR68y2KD%2BCF%2BztgRh2l%2FPb2MUFYTQ8yj5Lj0ew1CnvRV71wmbZB2T7f8Y3Ej8f0GKHe2lgELuORlG75IL%2BSvma1Orr36LBtgVojUPClHn48fGPTcCfn2VhO9Z7cW%2BaBB0tkykwP%2ByEiAIzgo8buTezVO%2FNm8XjI0yKdX9sLz4rFF%2FUPzuz8PSHZjVFd%2F7sSCVkmd6rzKzbPabNc0SYZAdXxBXL%2BKy0zYJoRu2hwfUdK30hDma9iNujm8Dbhlhtx9I5Vv5fqm%2FgMIVP%2BNvDXbNafFjD78Ym%2BBjqkAZqMXIJiCIX8fu9MbJ9r%2Fn9GjnflN3fboIyKaWPQUypDqied4tFBuH%2FmbQ4DSEQyXImvLE%2BHoX7M9Mvc12sq3WDuTPVrQ%2F9GzCmsre6yAuWyBuLFlyE%2Bmz9%2BuRSjNBmuknMSmhAFBhyfFckt6n2gyldAIrgZUqI68jfkBBujKV17idBgZ6YpelwRsww4BIx1XWzqkCwc7k6z5SbRJtBmhCv0Cnxz&X-Amz-Signature=2e41a8fdd1c0d838084ab9db524f3f827c2d5de7e96fefee9355afb99e48c9ea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF6GJ5TU%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T032229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDFCDev8sEQUt5whUuKCBBjwHIG9HbqKmRqXHNBYfkWIgIhAMlXQ4D%2BnSlMNT9ihZTTfab9KupSCyndJTMlwaBJVI5hKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9uRq3jV%2BAreqQlIYq3APNxX09z5M5bFPfMDU%2BcJlXc8u1%2FgJhl6Pli8uX75V0bXh%2FvApAopEgdSyyhTIdLOuBDRDW9zhU9YSI0a0gwhWo5TXsk9s2chCR3NQYWAFXnJaNw18G2aawTmSYRVasOjx9%2BkIBSLqXAr%2F24%2B0HoVRiGvuy8sNDr7wctIiYmJLQ0cBcroYcoUFw3Zt%2ByX%2FSceUAq0CQeUJk3MMDtoG4f2uFBHjMLT2egl8PD4OELU28JkBuW9nihzrytjXZQayNMPPdMTHXNi%2BExB5q7ZqFCALexuDRvs2egczG1rIWItBUm8tr4py%2FhkaAHH4DA%2Ba08jkHlvG76ngKqU%2Fk7WfyHgVj62x9j59BmM2lrnR68y2KD%2BCF%2BztgRh2l%2FPb2MUFYTQ8yj5Lj0ew1CnvRV71wmbZB2T7f8Y3Ej8f0GKHe2lgELuORlG75IL%2BSvma1Orr36LBtgVojUPClHn48fGPTcCfn2VhO9Z7cW%2BaBB0tkykwP%2ByEiAIzgo8buTezVO%2FNm8XjI0yKdX9sLz4rFF%2FUPzuz8PSHZjVFd%2F7sSCVkmd6rzKzbPabNc0SYZAdXxBXL%2BKy0zYJoRu2hwfUdK30hDma9iNujm8Dbhlhtx9I5Vv5fqm%2FgMIVP%2BNvDXbNafFjD78Ym%2BBjqkAZqMXIJiCIX8fu9MbJ9r%2Fn9GjnflN3fboIyKaWPQUypDqied4tFBuH%2FmbQ4DSEQyXImvLE%2BHoX7M9Mvc12sq3WDuTPVrQ%2F9GzCmsre6yAuWyBuLFlyE%2Bmz9%2BuRSjNBmuknMSmhAFBhyfFckt6n2gyldAIrgZUqI68jfkBBujKV17idBgZ6YpelwRsww4BIx1XWzqkCwc7k6z5SbRJtBmhCv0Cnxz&X-Amz-Signature=ca2578ef340f35def035b02e186d0e212e0d011ce7e4d7d3736a93e74e59d30b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
