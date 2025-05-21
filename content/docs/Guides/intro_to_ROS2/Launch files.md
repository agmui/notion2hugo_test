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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EGLGWBM%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T090953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg1F4FCHBhEjIZsQI8hf9o%2B2TIHEtTBuZKJ%2FQWYfiOHQIgK2e0u6Lqri6juyEfJrEhP5NoI14npzWofJC%2FNWUd8w8qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7F7PI6jBLRWN%2BIOCrcA%2Fxm4FKmJZqrXFj46v0wGLy7dJfLvRyveLOYXS6Pa2yzmf86qOiFem8qlQrpESUCfuYK07RSPe7K92%2BgNgSLIQ2uAO8lwHftzIkb4bJu9OcBB%2Bbmm4u18nCyO4mQE6OrWtCHECFaixU%2FjfUNuBoGETWfpxpvZ2cjIYBWPu6gQP8np5KzWzCi1M3OUnrPvjleL6dRRMnf3UJfdlpE27aXV3C4XNVmTN1gUFfoc8Jx4eE2XvLPsx7nX0pWYOpwJIg3InxCAvlxWBdOw%2Fng1Ixqq1Zw8qVyR27Fvv3b4Seo%2Bg%2Fg9O1wEb9WwWZ%2FncWldXySDBU7uf%2FsYnNmm%2BYTBl3NuGIp%2FunHtI6yj0adK6UjR477Qrb%2BTqEsGZ2hg%2FTuRhuBbvNIN%2FIG3bAoQyqCmhM43aB%2FGjjxQuGA2BZ8XBpJywjLRywn%2FsfJpsIssxLs2UzrRPr2xNXH1SLN4cLyslEpahAc3U4Pt2HvySL2T%2BDah7fn22VSEA1U2IL%2FUwNtKjZYrRw3YHWuQo1I8cpKESC4aO%2BA9RhoZ9yAUDu0UmMFarVQlZmQBM0dtVgGD%2BscugJZwFnQRq1LepT0R%2F53CJZ0bIqhVDH78KeIIHNY5XUxrtkyVmT78SzCh5cdjFHVMPHstcEGOqUBlk9vAcl5Fs7qeoOcBD3iOiVMsq5YSo8UYCLwosC%2FIwZ4Dd09n9icOqC6wtomex4C2%2BGE1oYcwqoNrFPALpDObmPmxxZg6vtZNE3wCh%2Fti%2BuHw1P1m5Dy2rrXqbmndQ0ckXF9UMEiqJAxGTbd%2F7iJ2Hw7A97dObLkRqm%2BPSOLOSRhpWU2WuWtTwgWt1g3PNJuQPXhVAXJdaLsKlcKWw493AtEeDl2&X-Amz-Signature=5593e5f3f88c2b736058ba220bbb175784832b4d118d257192fa442b2774bcf0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EGLGWBM%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T090953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg1F4FCHBhEjIZsQI8hf9o%2B2TIHEtTBuZKJ%2FQWYfiOHQIgK2e0u6Lqri6juyEfJrEhP5NoI14npzWofJC%2FNWUd8w8qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7F7PI6jBLRWN%2BIOCrcA%2Fxm4FKmJZqrXFj46v0wGLy7dJfLvRyveLOYXS6Pa2yzmf86qOiFem8qlQrpESUCfuYK07RSPe7K92%2BgNgSLIQ2uAO8lwHftzIkb4bJu9OcBB%2Bbmm4u18nCyO4mQE6OrWtCHECFaixU%2FjfUNuBoGETWfpxpvZ2cjIYBWPu6gQP8np5KzWzCi1M3OUnrPvjleL6dRRMnf3UJfdlpE27aXV3C4XNVmTN1gUFfoc8Jx4eE2XvLPsx7nX0pWYOpwJIg3InxCAvlxWBdOw%2Fng1Ixqq1Zw8qVyR27Fvv3b4Seo%2Bg%2Fg9O1wEb9WwWZ%2FncWldXySDBU7uf%2FsYnNmm%2BYTBl3NuGIp%2FunHtI6yj0adK6UjR477Qrb%2BTqEsGZ2hg%2FTuRhuBbvNIN%2FIG3bAoQyqCmhM43aB%2FGjjxQuGA2BZ8XBpJywjLRywn%2FsfJpsIssxLs2UzrRPr2xNXH1SLN4cLyslEpahAc3U4Pt2HvySL2T%2BDah7fn22VSEA1U2IL%2FUwNtKjZYrRw3YHWuQo1I8cpKESC4aO%2BA9RhoZ9yAUDu0UmMFarVQlZmQBM0dtVgGD%2BscugJZwFnQRq1LepT0R%2F53CJZ0bIqhVDH78KeIIHNY5XUxrtkyVmT78SzCh5cdjFHVMPHstcEGOqUBlk9vAcl5Fs7qeoOcBD3iOiVMsq5YSo8UYCLwosC%2FIwZ4Dd09n9icOqC6wtomex4C2%2BGE1oYcwqoNrFPALpDObmPmxxZg6vtZNE3wCh%2Fti%2BuHw1P1m5Dy2rrXqbmndQ0ckXF9UMEiqJAxGTbd%2F7iJ2Hw7A97dObLkRqm%2BPSOLOSRhpWU2WuWtTwgWt1g3PNJuQPXhVAXJdaLsKlcKWw493AtEeDl2&X-Amz-Signature=d2ad00bc277a52f12d954e9b88de5713c43355d8e5db61e4c711f0621324ec74&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EGLGWBM%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T090953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg1F4FCHBhEjIZsQI8hf9o%2B2TIHEtTBuZKJ%2FQWYfiOHQIgK2e0u6Lqri6juyEfJrEhP5NoI14npzWofJC%2FNWUd8w8qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7F7PI6jBLRWN%2BIOCrcA%2Fxm4FKmJZqrXFj46v0wGLy7dJfLvRyveLOYXS6Pa2yzmf86qOiFem8qlQrpESUCfuYK07RSPe7K92%2BgNgSLIQ2uAO8lwHftzIkb4bJu9OcBB%2Bbmm4u18nCyO4mQE6OrWtCHECFaixU%2FjfUNuBoGETWfpxpvZ2cjIYBWPu6gQP8np5KzWzCi1M3OUnrPvjleL6dRRMnf3UJfdlpE27aXV3C4XNVmTN1gUFfoc8Jx4eE2XvLPsx7nX0pWYOpwJIg3InxCAvlxWBdOw%2Fng1Ixqq1Zw8qVyR27Fvv3b4Seo%2Bg%2Fg9O1wEb9WwWZ%2FncWldXySDBU7uf%2FsYnNmm%2BYTBl3NuGIp%2FunHtI6yj0adK6UjR477Qrb%2BTqEsGZ2hg%2FTuRhuBbvNIN%2FIG3bAoQyqCmhM43aB%2FGjjxQuGA2BZ8XBpJywjLRywn%2FsfJpsIssxLs2UzrRPr2xNXH1SLN4cLyslEpahAc3U4Pt2HvySL2T%2BDah7fn22VSEA1U2IL%2FUwNtKjZYrRw3YHWuQo1I8cpKESC4aO%2BA9RhoZ9yAUDu0UmMFarVQlZmQBM0dtVgGD%2BscugJZwFnQRq1LepT0R%2F53CJZ0bIqhVDH78KeIIHNY5XUxrtkyVmT78SzCh5cdjFHVMPHstcEGOqUBlk9vAcl5Fs7qeoOcBD3iOiVMsq5YSo8UYCLwosC%2FIwZ4Dd09n9icOqC6wtomex4C2%2BGE1oYcwqoNrFPALpDObmPmxxZg6vtZNE3wCh%2Fti%2BuHw1P1m5Dy2rrXqbmndQ0ckXF9UMEiqJAxGTbd%2F7iJ2Hw7A97dObLkRqm%2BPSOLOSRhpWU2WuWtTwgWt1g3PNJuQPXhVAXJdaLsKlcKWw493AtEeDl2&X-Amz-Signature=59f7e9849cea9a739a250e802a871c6f8338929254bba777b38cf73e0173d9de&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
