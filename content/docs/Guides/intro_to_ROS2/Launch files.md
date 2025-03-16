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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X2DQQYO%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T100727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVY76ghKh1kAzSqJyHvSYHL2VpWCuzilwvmpl%2BMqZhiAiAkPrgHSFSDY7nRDZ0STT2j2UtZVQ8gA5tnNzD1GvaXLCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMckJnNt8zidp5lYNpKtwDJ4K21al2aUt8PgjkPCWo8k5VgU7G8OFdPUqoIBNj8N0bMcUuhtYjeKwODd%2BHFhew5B9cD3ikqfA6VnTTQCdEmf3xZhxUNmSfGbagjVbJ5Pmppfe0rK3E0mpwg7pVw%2FTjN74Fsr7XlTabrRypdQzEMDPQof2n35p7qNAhgPF6kvXzZA7EfKZA9N7eyNiFj2J8dgHufJvI15sngDx9BLGkg5SizfMJABUZ2n%2Bhw2%2Fx6FcBtayHB2y2UYNyYLAP4Yk5WYa0hNQNJobol4UQusSdvYUctlIUCRMkn3g4kh1fz1nujFR5AWuPxkCVcjvktegynqi3dbMLQcV9m6hMz1mUzDCcsI5DB3YeqPMeFha1G4inQXMzfJkXWghM8WPYu%2FQA%2F6Ba7V%2BYiZslwF2Gzd7Qsd7bhOVfwxLv3vnSb9PypwOMb8bKPWGMImt8Z48tqXzhBf2D97Xf%2FQTTpA4U%2B%2BtXIxvL8iql4NhBBa2iSBQqQlBpxCnaoesFU9BVXR1kIPwbuf8LA4pXYm0hdBzxSrKSJ3nX%2B6YxbPcG%2Bh2lQ8bLvhX1bsVEC3r1xP%2BsIhMFEAlBGtf3BM2Z5QQRR%2BX9DyqXGHiebvQaSwa6XJ1hBy0wJ51G9U%2F0mWpSZ6fW7DQwq5PavgY6pgEFG8FMWrMxdmOd1mT81pGuHrf1MRZCCcx65Y1U4N5OqPUt%2FvBvxUKJjwA9LM41fz8zKiYc%2B%2FAp0Cufa53X2PWnjrLFwP3XfJ6iUUESuybaKVaEus4DFeKfW0xB3rRWlHRj%2FICD1uUhnKr7X2tPr6Aghv5KCWk8T83RQxKAmFb4skgiwGtdQWvKRxjk6ulqzYlC6L2Vb8jXH%2Bmry1ftZXuCVFRdYHf8&X-Amz-Signature=6d0771258aba2de3158d0c8817ec2a3e0aafba528feb844b601585f91dff4931&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X2DQQYO%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T100727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVY76ghKh1kAzSqJyHvSYHL2VpWCuzilwvmpl%2BMqZhiAiAkPrgHSFSDY7nRDZ0STT2j2UtZVQ8gA5tnNzD1GvaXLCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMckJnNt8zidp5lYNpKtwDJ4K21al2aUt8PgjkPCWo8k5VgU7G8OFdPUqoIBNj8N0bMcUuhtYjeKwODd%2BHFhew5B9cD3ikqfA6VnTTQCdEmf3xZhxUNmSfGbagjVbJ5Pmppfe0rK3E0mpwg7pVw%2FTjN74Fsr7XlTabrRypdQzEMDPQof2n35p7qNAhgPF6kvXzZA7EfKZA9N7eyNiFj2J8dgHufJvI15sngDx9BLGkg5SizfMJABUZ2n%2Bhw2%2Fx6FcBtayHB2y2UYNyYLAP4Yk5WYa0hNQNJobol4UQusSdvYUctlIUCRMkn3g4kh1fz1nujFR5AWuPxkCVcjvktegynqi3dbMLQcV9m6hMz1mUzDCcsI5DB3YeqPMeFha1G4inQXMzfJkXWghM8WPYu%2FQA%2F6Ba7V%2BYiZslwF2Gzd7Qsd7bhOVfwxLv3vnSb9PypwOMb8bKPWGMImt8Z48tqXzhBf2D97Xf%2FQTTpA4U%2B%2BtXIxvL8iql4NhBBa2iSBQqQlBpxCnaoesFU9BVXR1kIPwbuf8LA4pXYm0hdBzxSrKSJ3nX%2B6YxbPcG%2Bh2lQ8bLvhX1bsVEC3r1xP%2BsIhMFEAlBGtf3BM2Z5QQRR%2BX9DyqXGHiebvQaSwa6XJ1hBy0wJ51G9U%2F0mWpSZ6fW7DQwq5PavgY6pgEFG8FMWrMxdmOd1mT81pGuHrf1MRZCCcx65Y1U4N5OqPUt%2FvBvxUKJjwA9LM41fz8zKiYc%2B%2FAp0Cufa53X2PWnjrLFwP3XfJ6iUUESuybaKVaEus4DFeKfW0xB3rRWlHRj%2FICD1uUhnKr7X2tPr6Aghv5KCWk8T83RQxKAmFb4skgiwGtdQWvKRxjk6ulqzYlC6L2Vb8jXH%2Bmry1ftZXuCVFRdYHf8&X-Amz-Signature=dc9f2936c311053bee6d8ecc88ffe4d7ab4836e89857a3cc4a7ac539bf0f490d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X2DQQYO%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T100727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVY76ghKh1kAzSqJyHvSYHL2VpWCuzilwvmpl%2BMqZhiAiAkPrgHSFSDY7nRDZ0STT2j2UtZVQ8gA5tnNzD1GvaXLCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMckJnNt8zidp5lYNpKtwDJ4K21al2aUt8PgjkPCWo8k5VgU7G8OFdPUqoIBNj8N0bMcUuhtYjeKwODd%2BHFhew5B9cD3ikqfA6VnTTQCdEmf3xZhxUNmSfGbagjVbJ5Pmppfe0rK3E0mpwg7pVw%2FTjN74Fsr7XlTabrRypdQzEMDPQof2n35p7qNAhgPF6kvXzZA7EfKZA9N7eyNiFj2J8dgHufJvI15sngDx9BLGkg5SizfMJABUZ2n%2Bhw2%2Fx6FcBtayHB2y2UYNyYLAP4Yk5WYa0hNQNJobol4UQusSdvYUctlIUCRMkn3g4kh1fz1nujFR5AWuPxkCVcjvktegynqi3dbMLQcV9m6hMz1mUzDCcsI5DB3YeqPMeFha1G4inQXMzfJkXWghM8WPYu%2FQA%2F6Ba7V%2BYiZslwF2Gzd7Qsd7bhOVfwxLv3vnSb9PypwOMb8bKPWGMImt8Z48tqXzhBf2D97Xf%2FQTTpA4U%2B%2BtXIxvL8iql4NhBBa2iSBQqQlBpxCnaoesFU9BVXR1kIPwbuf8LA4pXYm0hdBzxSrKSJ3nX%2B6YxbPcG%2Bh2lQ8bLvhX1bsVEC3r1xP%2BsIhMFEAlBGtf3BM2Z5QQRR%2BX9DyqXGHiebvQaSwa6XJ1hBy0wJ51G9U%2F0mWpSZ6fW7DQwq5PavgY6pgEFG8FMWrMxdmOd1mT81pGuHrf1MRZCCcx65Y1U4N5OqPUt%2FvBvxUKJjwA9LM41fz8zKiYc%2B%2FAp0Cufa53X2PWnjrLFwP3XfJ6iUUESuybaKVaEus4DFeKfW0xB3rRWlHRj%2FICD1uUhnKr7X2tPr6Aghv5KCWk8T83RQxKAmFb4skgiwGtdQWvKRxjk6ulqzYlC6L2Vb8jXH%2Bmry1ftZXuCVFRdYHf8&X-Amz-Signature=a5e8571b8fa3680914684f935bf8664d8ffe93b0a6f02384a7193eb302ec5b81&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
