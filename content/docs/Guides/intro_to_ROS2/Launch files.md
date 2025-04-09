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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVVUPT2M%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCP1sIy5gxOdVLAF7uYzd4ocTEWDZI%2FMQ4CUe82V9KpewIhAPgWbpx9f%2BiRWZTRPZ5wPvbJH7lsejxAk0YHIbv%2Brf8yKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzB7njhWko%2BejckqQUq3APHO3IgHihr2WWE0yN47f%2FYzeDWC2A2qIz5zvc%2FZLelsouJWic%2F6vqrq%2FNzU7fCH1spstNfGVFMVb8VOSQ6xqcuuYJkGpR9QG8wX5f9SxufZr6NiLLGu%2FfsgI5V1IOeF4mnc1f6IEbd19LC3fQ4YwM84780bk2pdI941H4nlqWSdq0LJtQE2OBaxuTMYyR8JItQsnylKurU1ya8SGIloiaJm1xa4Sdwuf3qlGeObWSdwQHAMrc5Xmvq4ZVoKQEiLUmESCf01HezaCYjxelLNXJSRLs6%2Bd7oawr0sukHbiOC%2BMHIePPdbyUjz7RZcSo5ZiC5fOQBHMd%2B%2FFeANrRGuk%2BxDFp9dcV2Y8SSv4Plg1dl9jtuhMF2QkURouW%2Faivm20cF%2F%2BY1KffywHvn90JZhTJ7ET8cTIs9nMM2ABvUA3yVROOm9qRd9pV4JBMVuYdcdC%2B%2FVYH4bi3hObTuRptiweH2glCfsg3TGLeFp9eRMwERbWYdgvv5Fgr%2FYa9RV%2FZwiMFAlogy4VE5WEpp2m%2FO2I5IR8KIKaI3y%2BLKZWoZnC8DGv%2BNV1zYf4X9XRpMk5dpM%2BVLNZtGzvYLY%2FheBrlX5BBzoZ0UI3B1qMKDM312TYwco3x7ehP%2BusuXAj10gzC2mNm%2FBjqkAaQhMBRgQFh8lYI8jcmko0MIUBH3uTkPmv9o9sk1NoQ84Qo81b1wgLMY5r5RAYh9vBD9JqjL96uB%2B2YJM0TdZtZDHx%2B%2BLun%2ByhavXLvfgcCAZl7bUvxgRlTaWtNCdj8Kb2AhqjjBPXdSOEYCSDhwkzCk0E7Vznud7ZcjXWjmiZM%2BBgvepEUZbzmq1ZBQOHaufpc0b%2BJ8Ri%2BuyjPCC%2FW38qNxEdZT&X-Amz-Signature=26bf7795de25ff90cd99a0175a629ac4ffd69b96df907d5b81c830aa650f5ea5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVVUPT2M%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCP1sIy5gxOdVLAF7uYzd4ocTEWDZI%2FMQ4CUe82V9KpewIhAPgWbpx9f%2BiRWZTRPZ5wPvbJH7lsejxAk0YHIbv%2Brf8yKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzB7njhWko%2BejckqQUq3APHO3IgHihr2WWE0yN47f%2FYzeDWC2A2qIz5zvc%2FZLelsouJWic%2F6vqrq%2FNzU7fCH1spstNfGVFMVb8VOSQ6xqcuuYJkGpR9QG8wX5f9SxufZr6NiLLGu%2FfsgI5V1IOeF4mnc1f6IEbd19LC3fQ4YwM84780bk2pdI941H4nlqWSdq0LJtQE2OBaxuTMYyR8JItQsnylKurU1ya8SGIloiaJm1xa4Sdwuf3qlGeObWSdwQHAMrc5Xmvq4ZVoKQEiLUmESCf01HezaCYjxelLNXJSRLs6%2Bd7oawr0sukHbiOC%2BMHIePPdbyUjz7RZcSo5ZiC5fOQBHMd%2B%2FFeANrRGuk%2BxDFp9dcV2Y8SSv4Plg1dl9jtuhMF2QkURouW%2Faivm20cF%2F%2BY1KffywHvn90JZhTJ7ET8cTIs9nMM2ABvUA3yVROOm9qRd9pV4JBMVuYdcdC%2B%2FVYH4bi3hObTuRptiweH2glCfsg3TGLeFp9eRMwERbWYdgvv5Fgr%2FYa9RV%2FZwiMFAlogy4VE5WEpp2m%2FO2I5IR8KIKaI3y%2BLKZWoZnC8DGv%2BNV1zYf4X9XRpMk5dpM%2BVLNZtGzvYLY%2FheBrlX5BBzoZ0UI3B1qMKDM312TYwco3x7ehP%2BusuXAj10gzC2mNm%2FBjqkAaQhMBRgQFh8lYI8jcmko0MIUBH3uTkPmv9o9sk1NoQ84Qo81b1wgLMY5r5RAYh9vBD9JqjL96uB%2B2YJM0TdZtZDHx%2B%2BLun%2ByhavXLvfgcCAZl7bUvxgRlTaWtNCdj8Kb2AhqjjBPXdSOEYCSDhwkzCk0E7Vznud7ZcjXWjmiZM%2BBgvepEUZbzmq1ZBQOHaufpc0b%2BJ8Ri%2BuyjPCC%2FW38qNxEdZT&X-Amz-Signature=a7feecbf0694d696fe768cc655b15a92cecc10921701a32d8b513e1744f1efcb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVVUPT2M%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCP1sIy5gxOdVLAF7uYzd4ocTEWDZI%2FMQ4CUe82V9KpewIhAPgWbpx9f%2BiRWZTRPZ5wPvbJH7lsejxAk0YHIbv%2Brf8yKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzB7njhWko%2BejckqQUq3APHO3IgHihr2WWE0yN47f%2FYzeDWC2A2qIz5zvc%2FZLelsouJWic%2F6vqrq%2FNzU7fCH1spstNfGVFMVb8VOSQ6xqcuuYJkGpR9QG8wX5f9SxufZr6NiLLGu%2FfsgI5V1IOeF4mnc1f6IEbd19LC3fQ4YwM84780bk2pdI941H4nlqWSdq0LJtQE2OBaxuTMYyR8JItQsnylKurU1ya8SGIloiaJm1xa4Sdwuf3qlGeObWSdwQHAMrc5Xmvq4ZVoKQEiLUmESCf01HezaCYjxelLNXJSRLs6%2Bd7oawr0sukHbiOC%2BMHIePPdbyUjz7RZcSo5ZiC5fOQBHMd%2B%2FFeANrRGuk%2BxDFp9dcV2Y8SSv4Plg1dl9jtuhMF2QkURouW%2Faivm20cF%2F%2BY1KffywHvn90JZhTJ7ET8cTIs9nMM2ABvUA3yVROOm9qRd9pV4JBMVuYdcdC%2B%2FVYH4bi3hObTuRptiweH2glCfsg3TGLeFp9eRMwERbWYdgvv5Fgr%2FYa9RV%2FZwiMFAlogy4VE5WEpp2m%2FO2I5IR8KIKaI3y%2BLKZWoZnC8DGv%2BNV1zYf4X9XRpMk5dpM%2BVLNZtGzvYLY%2FheBrlX5BBzoZ0UI3B1qMKDM312TYwco3x7ehP%2BusuXAj10gzC2mNm%2FBjqkAaQhMBRgQFh8lYI8jcmko0MIUBH3uTkPmv9o9sk1NoQ84Qo81b1wgLMY5r5RAYh9vBD9JqjL96uB%2B2YJM0TdZtZDHx%2B%2BLun%2ByhavXLvfgcCAZl7bUvxgRlTaWtNCdj8Kb2AhqjjBPXdSOEYCSDhwkzCk0E7Vznud7ZcjXWjmiZM%2BBgvepEUZbzmq1ZBQOHaufpc0b%2BJ8Ri%2BuyjPCC%2FW38qNxEdZT&X-Amz-Signature=027fcc5e559c18a989fb948d800a541b7452ca4c4664863a7358f015b21b59ff&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
