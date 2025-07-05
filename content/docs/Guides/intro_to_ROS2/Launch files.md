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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YFJHRJY%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T090826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIGmhoQ4VS7n1BlABi8ZArcLFIGKVTNZemJVczjVIsHY3AiBHO3Aa0bEv4PAFOcc%2BxCrghidaPb6azq1zcX%2BoFBDC2yr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIM4naSvuBRgP5QP0SDKtwDY2yT9FzuITJnPMcJImCBy005qcPEVT8U2%2BXnoHYmJwNF%2FOj%2BOdQ%2BqMnOwaztj5%2FsnW%2F3YmnDvQBu7E1mHA3wBNUsXuQRwqVBpCfwW9PY8yxa0WQ%2FUfRp0YVZw4RVNqZi%2B7y4ZrZBk99909RDXDzVwTGzM5DVhSjieRe%2BQXV0t7C9nSDutML5CpzKr%2BTATzup061NycL8DS4RK4Iw2j%2FRBF0vx7tFFcPjVGFhAI4%2BpzhUaOTVsguW3efy3UZmHF818RGCnhkqlT06gCwlzemTdQvMg4TJ2STnTrpIhB%2FdW6Efv6zO1q4IGercqFquSl6fs3KupICOp3PN4i18gqY3341p9YU2xgjLA47AVoHyxR%2FTl0HSeM7yf5nEn2Z1JMtYSUjONRW0fT0gj%2FNZ14yf61UG%2Bl01KbUHl9vda1%2BTaASoQ%2BMv%2BCu53fNcg5o36Eiv9axjzjPld8W%2BICr21Uzjj85HwLrDYiq8or0bHOXkxzUktVf9RgxcvL8iga51jMBDi6VYPNVsNyhoCsxKEgul%2B1GVMz19dHhLm2hHYcgCc%2FQcAeLQ4ByfBlPnvzdEvN688v8eG%2F8pdIup1Qg4cGr3ZPf%2BQrUwyXBMM4DokHsXeeKAiFoj5NluOh8G1dEwnKyjwwY6pgGAwoJMKxyJ5xgdsWQQKpt%2BBSNkQqChG0Q3RkJW%2FBxwsIKTk%2B3ecMSdTToS8k6BlhrK5XpVtVqMjDyq9wwK8DfCBzMvPohPbzC0LvKd1y0nTJ2c4EK7owT1nVnZeC4InGe704f3HK8zEr1qHVfql%2FjT4SiR1N1Wpsk82f6DVfa4tlCVQfIaz%2Fq6%2FI%2B43MlSd861QW8vNQcdkTNEYeFNKvSTQbNQACux&X-Amz-Signature=2ddc9b214f71737acb7fa4efd891741703f56a56655448d67a1040a25b943bee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YFJHRJY%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T090826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIGmhoQ4VS7n1BlABi8ZArcLFIGKVTNZemJVczjVIsHY3AiBHO3Aa0bEv4PAFOcc%2BxCrghidaPb6azq1zcX%2BoFBDC2yr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIM4naSvuBRgP5QP0SDKtwDY2yT9FzuITJnPMcJImCBy005qcPEVT8U2%2BXnoHYmJwNF%2FOj%2BOdQ%2BqMnOwaztj5%2FsnW%2F3YmnDvQBu7E1mHA3wBNUsXuQRwqVBpCfwW9PY8yxa0WQ%2FUfRp0YVZw4RVNqZi%2B7y4ZrZBk99909RDXDzVwTGzM5DVhSjieRe%2BQXV0t7C9nSDutML5CpzKr%2BTATzup061NycL8DS4RK4Iw2j%2FRBF0vx7tFFcPjVGFhAI4%2BpzhUaOTVsguW3efy3UZmHF818RGCnhkqlT06gCwlzemTdQvMg4TJ2STnTrpIhB%2FdW6Efv6zO1q4IGercqFquSl6fs3KupICOp3PN4i18gqY3341p9YU2xgjLA47AVoHyxR%2FTl0HSeM7yf5nEn2Z1JMtYSUjONRW0fT0gj%2FNZ14yf61UG%2Bl01KbUHl9vda1%2BTaASoQ%2BMv%2BCu53fNcg5o36Eiv9axjzjPld8W%2BICr21Uzjj85HwLrDYiq8or0bHOXkxzUktVf9RgxcvL8iga51jMBDi6VYPNVsNyhoCsxKEgul%2B1GVMz19dHhLm2hHYcgCc%2FQcAeLQ4ByfBlPnvzdEvN688v8eG%2F8pdIup1Qg4cGr3ZPf%2BQrUwyXBMM4DokHsXeeKAiFoj5NluOh8G1dEwnKyjwwY6pgGAwoJMKxyJ5xgdsWQQKpt%2BBSNkQqChG0Q3RkJW%2FBxwsIKTk%2B3ecMSdTToS8k6BlhrK5XpVtVqMjDyq9wwK8DfCBzMvPohPbzC0LvKd1y0nTJ2c4EK7owT1nVnZeC4InGe704f3HK8zEr1qHVfql%2FjT4SiR1N1Wpsk82f6DVfa4tlCVQfIaz%2Fq6%2FI%2B43MlSd861QW8vNQcdkTNEYeFNKvSTQbNQACux&X-Amz-Signature=05b4d30b951c8d2e28bb9ced50eb3c84198d104b7202a1af6e948e51823edf68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YFJHRJY%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T090826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIGmhoQ4VS7n1BlABi8ZArcLFIGKVTNZemJVczjVIsHY3AiBHO3Aa0bEv4PAFOcc%2BxCrghidaPb6azq1zcX%2BoFBDC2yr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIM4naSvuBRgP5QP0SDKtwDY2yT9FzuITJnPMcJImCBy005qcPEVT8U2%2BXnoHYmJwNF%2FOj%2BOdQ%2BqMnOwaztj5%2FsnW%2F3YmnDvQBu7E1mHA3wBNUsXuQRwqVBpCfwW9PY8yxa0WQ%2FUfRp0YVZw4RVNqZi%2B7y4ZrZBk99909RDXDzVwTGzM5DVhSjieRe%2BQXV0t7C9nSDutML5CpzKr%2BTATzup061NycL8DS4RK4Iw2j%2FRBF0vx7tFFcPjVGFhAI4%2BpzhUaOTVsguW3efy3UZmHF818RGCnhkqlT06gCwlzemTdQvMg4TJ2STnTrpIhB%2FdW6Efv6zO1q4IGercqFquSl6fs3KupICOp3PN4i18gqY3341p9YU2xgjLA47AVoHyxR%2FTl0HSeM7yf5nEn2Z1JMtYSUjONRW0fT0gj%2FNZ14yf61UG%2Bl01KbUHl9vda1%2BTaASoQ%2BMv%2BCu53fNcg5o36Eiv9axjzjPld8W%2BICr21Uzjj85HwLrDYiq8or0bHOXkxzUktVf9RgxcvL8iga51jMBDi6VYPNVsNyhoCsxKEgul%2B1GVMz19dHhLm2hHYcgCc%2FQcAeLQ4ByfBlPnvzdEvN688v8eG%2F8pdIup1Qg4cGr3ZPf%2BQrUwyXBMM4DokHsXeeKAiFoj5NluOh8G1dEwnKyjwwY6pgGAwoJMKxyJ5xgdsWQQKpt%2BBSNkQqChG0Q3RkJW%2FBxwsIKTk%2B3ecMSdTToS8k6BlhrK5XpVtVqMjDyq9wwK8DfCBzMvPohPbzC0LvKd1y0nTJ2c4EK7owT1nVnZeC4InGe704f3HK8zEr1qHVfql%2FjT4SiR1N1Wpsk82f6DVfa4tlCVQfIaz%2Fq6%2FI%2B43MlSd861QW8vNQcdkTNEYeFNKvSTQbNQACux&X-Amz-Signature=30a74a95a0d89a3cf7c66ad54391c9f6de6d1215ecb0d95d47344c5808131561&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
