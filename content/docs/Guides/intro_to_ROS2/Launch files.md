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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ22GGSS%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T070946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKUz27Vj6ADAgEzHFeJb9MFLe9bTXN1QeQFYEc6RSENAIhANmikfgMEIov7DFnUkn5GM%2BZr7RyGsHy7%2FSr%2BAA5T7tgKv8DCEAQABoMNjM3NDIzMTgzODA1IgxZzZpbMCiudEV8588q3AOp2PbfLLoLtn4mHvWgsZRTrscJIdExrfCqr8rqh5UWNthB2gtba3I1suczAsgGMpe890JbPAr5h6J1h%2BOsNJ8rtJO4ocPbvMcVAvrqcrbE3YaDR5q%2BLsVSw0uc18bAtnsLjfgBRz3LCGgx1HP4qtQvFC32Mifa4%2FGzlhi7lNl5CqXtmQnJz47E5UNi8Z5VuZhpfH9NxWJLGYQoqGfOEhDwoRtrrQWY3zscc2lPJiYPU9jKOdgMNgc60dR%2BTl9scmTXcwOIugljBdyPnvpyHa%2BCH6EHKreUtSchLxyN%2FvlVfEfuS8dmK3L6mzHKPOLRIspXXUGrAc8fdqlKBCJHWsxAjtoc2XtIniRQ1ssj5vHGoyu259RZa41B1zx0Mjyrc%2FApX5nhHjUOUfODniA8oCI5z4MBi4wIUqqd2IZrv3mtSRNKI3coaOX7jGBwFteGR7lQmBeA%2BNrxJN%2FHAX7sFaPdOpKZEWziC3g9A0%2FGItFmWlqpkLTMXj5RkdMTWVHNvtaE8nS%2Bq1ad1ghHOZ3%2BqQJ09h1%2BRBTRNKuiWyfvFqaT0eIUoV67XGgQ3IX0ExcNSv3DiDkBGCnIlXq2Rm07TA08gOW963V%2BOoPJ4ps463BrSUV7kq2FvZAeea3spTCEuZvBBjqkAT5R9QF5EG9Wky0B9NO4yaUKYIl78%2F%2F1UyyRmiXxhSccHLJ156R6mZr5APtT6g6iw3vD6EXJ%2FC%2B%2F5JddD4rIEsNu23NoY8eLjRjEFaVLSZZwUSz6Nn6ab%2BbBO%2BB1YQdfxxt6oS8HhyFZ1TB%2BdMNOiFSVSM2VL0dCoZJiSrScBpDnU2tstr4UxwWM8VEnu7BEklQ0kB1fXNl%2FKu%2FauUjPSD6XVv9z&X-Amz-Signature=e8f0e2333ec9f874c93f26220dc1bcc9e0dfb924900c35194c388e80055192fd&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ22GGSS%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T070946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKUz27Vj6ADAgEzHFeJb9MFLe9bTXN1QeQFYEc6RSENAIhANmikfgMEIov7DFnUkn5GM%2BZr7RyGsHy7%2FSr%2BAA5T7tgKv8DCEAQABoMNjM3NDIzMTgzODA1IgxZzZpbMCiudEV8588q3AOp2PbfLLoLtn4mHvWgsZRTrscJIdExrfCqr8rqh5UWNthB2gtba3I1suczAsgGMpe890JbPAr5h6J1h%2BOsNJ8rtJO4ocPbvMcVAvrqcrbE3YaDR5q%2BLsVSw0uc18bAtnsLjfgBRz3LCGgx1HP4qtQvFC32Mifa4%2FGzlhi7lNl5CqXtmQnJz47E5UNi8Z5VuZhpfH9NxWJLGYQoqGfOEhDwoRtrrQWY3zscc2lPJiYPU9jKOdgMNgc60dR%2BTl9scmTXcwOIugljBdyPnvpyHa%2BCH6EHKreUtSchLxyN%2FvlVfEfuS8dmK3L6mzHKPOLRIspXXUGrAc8fdqlKBCJHWsxAjtoc2XtIniRQ1ssj5vHGoyu259RZa41B1zx0Mjyrc%2FApX5nhHjUOUfODniA8oCI5z4MBi4wIUqqd2IZrv3mtSRNKI3coaOX7jGBwFteGR7lQmBeA%2BNrxJN%2FHAX7sFaPdOpKZEWziC3g9A0%2FGItFmWlqpkLTMXj5RkdMTWVHNvtaE8nS%2Bq1ad1ghHOZ3%2BqQJ09h1%2BRBTRNKuiWyfvFqaT0eIUoV67XGgQ3IX0ExcNSv3DiDkBGCnIlXq2Rm07TA08gOW963V%2BOoPJ4ps463BrSUV7kq2FvZAeea3spTCEuZvBBjqkAT5R9QF5EG9Wky0B9NO4yaUKYIl78%2F%2F1UyyRmiXxhSccHLJ156R6mZr5APtT6g6iw3vD6EXJ%2FC%2B%2F5JddD4rIEsNu23NoY8eLjRjEFaVLSZZwUSz6Nn6ab%2BbBO%2BB1YQdfxxt6oS8HhyFZ1TB%2BdMNOiFSVSM2VL0dCoZJiSrScBpDnU2tstr4UxwWM8VEnu7BEklQ0kB1fXNl%2FKu%2FauUjPSD6XVv9z&X-Amz-Signature=76a75d34b973f274997ccc7741403822fbb44fc546881a3254656277f350ce1b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ22GGSS%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T070946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKUz27Vj6ADAgEzHFeJb9MFLe9bTXN1QeQFYEc6RSENAIhANmikfgMEIov7DFnUkn5GM%2BZr7RyGsHy7%2FSr%2BAA5T7tgKv8DCEAQABoMNjM3NDIzMTgzODA1IgxZzZpbMCiudEV8588q3AOp2PbfLLoLtn4mHvWgsZRTrscJIdExrfCqr8rqh5UWNthB2gtba3I1suczAsgGMpe890JbPAr5h6J1h%2BOsNJ8rtJO4ocPbvMcVAvrqcrbE3YaDR5q%2BLsVSw0uc18bAtnsLjfgBRz3LCGgx1HP4qtQvFC32Mifa4%2FGzlhi7lNl5CqXtmQnJz47E5UNi8Z5VuZhpfH9NxWJLGYQoqGfOEhDwoRtrrQWY3zscc2lPJiYPU9jKOdgMNgc60dR%2BTl9scmTXcwOIugljBdyPnvpyHa%2BCH6EHKreUtSchLxyN%2FvlVfEfuS8dmK3L6mzHKPOLRIspXXUGrAc8fdqlKBCJHWsxAjtoc2XtIniRQ1ssj5vHGoyu259RZa41B1zx0Mjyrc%2FApX5nhHjUOUfODniA8oCI5z4MBi4wIUqqd2IZrv3mtSRNKI3coaOX7jGBwFteGR7lQmBeA%2BNrxJN%2FHAX7sFaPdOpKZEWziC3g9A0%2FGItFmWlqpkLTMXj5RkdMTWVHNvtaE8nS%2Bq1ad1ghHOZ3%2BqQJ09h1%2BRBTRNKuiWyfvFqaT0eIUoV67XGgQ3IX0ExcNSv3DiDkBGCnIlXq2Rm07TA08gOW963V%2BOoPJ4ps463BrSUV7kq2FvZAeea3spTCEuZvBBjqkAT5R9QF5EG9Wky0B9NO4yaUKYIl78%2F%2F1UyyRmiXxhSccHLJ156R6mZr5APtT6g6iw3vD6EXJ%2FC%2B%2F5JddD4rIEsNu23NoY8eLjRjEFaVLSZZwUSz6Nn6ab%2BbBO%2BB1YQdfxxt6oS8HhyFZ1TB%2BdMNOiFSVSM2VL0dCoZJiSrScBpDnU2tstr4UxwWM8VEnu7BEklQ0kB1fXNl%2FKu%2FauUjPSD6XVv9z&X-Amz-Signature=8b7632cb72a234a7816665f5ecb737bc610d010bd32e531847ecb1804028821e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
