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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NOIPKG6%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDXbZc9f0%2FaIUWjuWcX1nB83iY8bympz9NIneRcDMCW6wIgC%2Fmjn6klC%2F6EpPxajk602QXPgv239LuwssOPOManfdcq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDHUwqZaY4Ud8Jj01gSrcA5nEdEjf02Cp2sstCxvMyOtJzWzYoR0YemBXuuFIWvIZ0F6IWIGVH6q55XlYQDhuN1V1bxNaFoTeKjJZleLwGKtDcL9Ux1EgkCPpzFxR8zP3ASLoPjulPktltu3tVZQlxL0gy2kz%2FhM5CMr%2FpNJmoQ2e6gVwfri6uO9GKZlbWIUFwIfXqDcwMLe9w8pcgN7cGe9wOcjMZNfuInstT4tBuzlK%2FGfqDJSWjFv3QVLBxpT%2F0ic9bYpEmeY1Ss6w4ijwnThAVC1c5y1oqjyKGsL3tLjhkiYc7cMFBn1FWbX0nNrid0jTo8XzCrh7XRJ%2FpzqdrMdtc7rRxgJ8%2Bgx9FnEJ5ABMNcwxdUo55zvbBly8ojFaD51U%2BKycHwWJryNdrj1D0Y%2Fukwy1F5A6yqRbG1z5fcT95oIwtQIG%2F64f3vDRmeme%2FCzLSJIFmlm0ksTMITa6cSdEUWrXsBhD4%2BmAM93wnajFAPFBlObC1kE%2BdN%2BJ6hqd6fcp4V0Bt6tzX9%2Btu6NTNs4zGrgvOAYnFRHbSPPYS3g3p%2F0EPm1CrKLztgA9ySPXuesF9b3Ligqar%2BjqvpzscsIPzWBhOF%2FjkvwMoGP5CyzphtMPn2eCl29gvwCYJ4X2gwQDAj4vXH3HsfiRMMKx2MMGOqUB7V4PiKbJ0o6tol%2B%2FUEgOQVq%2FAC%2B4roF2KF3uHxFWF1iQ8D0hgk2QxDU0R0XtqkuU3IpHXmpck5JlATc8N7fWITx5cZ%2FGNf7udI%2FiPsh6HmPm2dWhvOJg9y8peCVWI0RRBCI9DCYNeeKXdbdqguORnKqmhBovQ92pOVK2wIQHlGiXNKONJTfiZaC3SXOjY%2F2Ur839UEn2z8toG%2FwSRMP0utVDMO2y&X-Amz-Signature=60fe11b484de3dedd18c96d869d05408c580cdb0cf84dae2b76485b83060f294&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NOIPKG6%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDXbZc9f0%2FaIUWjuWcX1nB83iY8bympz9NIneRcDMCW6wIgC%2Fmjn6klC%2F6EpPxajk602QXPgv239LuwssOPOManfdcq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDHUwqZaY4Ud8Jj01gSrcA5nEdEjf02Cp2sstCxvMyOtJzWzYoR0YemBXuuFIWvIZ0F6IWIGVH6q55XlYQDhuN1V1bxNaFoTeKjJZleLwGKtDcL9Ux1EgkCPpzFxR8zP3ASLoPjulPktltu3tVZQlxL0gy2kz%2FhM5CMr%2FpNJmoQ2e6gVwfri6uO9GKZlbWIUFwIfXqDcwMLe9w8pcgN7cGe9wOcjMZNfuInstT4tBuzlK%2FGfqDJSWjFv3QVLBxpT%2F0ic9bYpEmeY1Ss6w4ijwnThAVC1c5y1oqjyKGsL3tLjhkiYc7cMFBn1FWbX0nNrid0jTo8XzCrh7XRJ%2FpzqdrMdtc7rRxgJ8%2Bgx9FnEJ5ABMNcwxdUo55zvbBly8ojFaD51U%2BKycHwWJryNdrj1D0Y%2Fukwy1F5A6yqRbG1z5fcT95oIwtQIG%2F64f3vDRmeme%2FCzLSJIFmlm0ksTMITa6cSdEUWrXsBhD4%2BmAM93wnajFAPFBlObC1kE%2BdN%2BJ6hqd6fcp4V0Bt6tzX9%2Btu6NTNs4zGrgvOAYnFRHbSPPYS3g3p%2F0EPm1CrKLztgA9ySPXuesF9b3Ligqar%2BjqvpzscsIPzWBhOF%2FjkvwMoGP5CyzphtMPn2eCl29gvwCYJ4X2gwQDAj4vXH3HsfiRMMKx2MMGOqUB7V4PiKbJ0o6tol%2B%2FUEgOQVq%2FAC%2B4roF2KF3uHxFWF1iQ8D0hgk2QxDU0R0XtqkuU3IpHXmpck5JlATc8N7fWITx5cZ%2FGNf7udI%2FiPsh6HmPm2dWhvOJg9y8peCVWI0RRBCI9DCYNeeKXdbdqguORnKqmhBovQ92pOVK2wIQHlGiXNKONJTfiZaC3SXOjY%2F2Ur839UEn2z8toG%2FwSRMP0utVDMO2y&X-Amz-Signature=da48d21efc2c68ac84a46b5336c18868cd0e568ed7b5172e2c4132bc3b0cc40a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NOIPKG6%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDXbZc9f0%2FaIUWjuWcX1nB83iY8bympz9NIneRcDMCW6wIgC%2Fmjn6klC%2F6EpPxajk602QXPgv239LuwssOPOManfdcq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDHUwqZaY4Ud8Jj01gSrcA5nEdEjf02Cp2sstCxvMyOtJzWzYoR0YemBXuuFIWvIZ0F6IWIGVH6q55XlYQDhuN1V1bxNaFoTeKjJZleLwGKtDcL9Ux1EgkCPpzFxR8zP3ASLoPjulPktltu3tVZQlxL0gy2kz%2FhM5CMr%2FpNJmoQ2e6gVwfri6uO9GKZlbWIUFwIfXqDcwMLe9w8pcgN7cGe9wOcjMZNfuInstT4tBuzlK%2FGfqDJSWjFv3QVLBxpT%2F0ic9bYpEmeY1Ss6w4ijwnThAVC1c5y1oqjyKGsL3tLjhkiYc7cMFBn1FWbX0nNrid0jTo8XzCrh7XRJ%2FpzqdrMdtc7rRxgJ8%2Bgx9FnEJ5ABMNcwxdUo55zvbBly8ojFaD51U%2BKycHwWJryNdrj1D0Y%2Fukwy1F5A6yqRbG1z5fcT95oIwtQIG%2F64f3vDRmeme%2FCzLSJIFmlm0ksTMITa6cSdEUWrXsBhD4%2BmAM93wnajFAPFBlObC1kE%2BdN%2BJ6hqd6fcp4V0Bt6tzX9%2Btu6NTNs4zGrgvOAYnFRHbSPPYS3g3p%2F0EPm1CrKLztgA9ySPXuesF9b3Ligqar%2BjqvpzscsIPzWBhOF%2FjkvwMoGP5CyzphtMPn2eCl29gvwCYJ4X2gwQDAj4vXH3HsfiRMMKx2MMGOqUB7V4PiKbJ0o6tol%2B%2FUEgOQVq%2FAC%2B4roF2KF3uHxFWF1iQ8D0hgk2QxDU0R0XtqkuU3IpHXmpck5JlATc8N7fWITx5cZ%2FGNf7udI%2FiPsh6HmPm2dWhvOJg9y8peCVWI0RRBCI9DCYNeeKXdbdqguORnKqmhBovQ92pOVK2wIQHlGiXNKONJTfiZaC3SXOjY%2F2Ur839UEn2z8toG%2FwSRMP0utVDMO2y&X-Amz-Signature=6b94a24e789a5f05ab649f797dd89829d60e7d2cfa31cbce4e82ab440111671f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
