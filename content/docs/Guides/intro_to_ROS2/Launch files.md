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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KLWYTH7%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2B%2Frq5DywCuQkHA7eyfedz71JY1%2BElvw6yAdKbolvLMwIhAIdnmzrs99eHXqxcR2CkUKlKnyDR8W3iEwLifv28U%2BmCKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyzaz8zKq%2FKxI2Z%2BNIq3APC59L85tt1hXZnV37phbZMOJeg5kvD47%2BW1S4BjI9A%2BXTO1swyPIWHUuAoSTWbKdckXprDpLPz99LZd357goOZFczq8ubzc6FoIOFR0BmXqvUzbl4YoE1VUmZPC2ArwQYJEUiBjgRQYjyKUtHGJ%2FTp6FwESudGsOYaKgXn6NycqzgXvM7OaCWwOnpvmyhpyy77I2yCydW2i6En%2FPBb3L2psrnFsM53ZB3uOZ6rUB7bGj6mZxV%2BA2JLHNyk6wTbu%2F80pOg4%2BOBx%2FENzqt5wXnFg8bUzzTKReCcEGv8xZEMqBuKtjx6ngGibE9XbIkxJcy2h5d%2B6g3gIDHoQ93sWILgHzyuhVQIMe%2Fgtqv1qy4xyNSlirbszFC62w%2BzNRkUGtK1v2E9A1VUYBvbsIBH3fvfKztUDA9V7RuvfT%2FdHMCL1qSdDSnNzIwamdE%2FKoR6nqPUvuCjqAgsEUoeopqlLpg82iEn%2FhxJ2U4MfNN9gzNtIT4GF6siSJvuQYCYJMQfPv%2BLhisRnhtG9ct%2FLbg4q4zv4FQAFKZbActREj63gJ1r0hsEgc7k%2FeTmQILL5HnGRmBCzoudZag32xd77uFCe4F90VnaoDVJNoqr52dDR3BNJXV772rRVICpKIG4H7DC%2FwIC9BjqkATYarqrqsqAv2Gtiy%2Bfwrv55h%2FFCq1SA07uMl%2FEaXa2AfV2TnXv59LHa81Om9XnmO7xeRvlj5L5UiVzB%2F77yIDSMhdLlruCz5fxX7VDx9NLtoWiRTtsMOAKsS1879Nn7oI1b89BppAqBSvWaHCCQBfEMx%2BoqQnS6QlCc4BxSBvyXIuftQb13XoV8IgknamCWynlcP69cU8oxbGrWJzNPpeFB2P1D&X-Amz-Signature=e979ebfa4dd9edb66a5f304abe7106df43bc698f491f72b35ee0183259bc387f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KLWYTH7%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2B%2Frq5DywCuQkHA7eyfedz71JY1%2BElvw6yAdKbolvLMwIhAIdnmzrs99eHXqxcR2CkUKlKnyDR8W3iEwLifv28U%2BmCKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyzaz8zKq%2FKxI2Z%2BNIq3APC59L85tt1hXZnV37phbZMOJeg5kvD47%2BW1S4BjI9A%2BXTO1swyPIWHUuAoSTWbKdckXprDpLPz99LZd357goOZFczq8ubzc6FoIOFR0BmXqvUzbl4YoE1VUmZPC2ArwQYJEUiBjgRQYjyKUtHGJ%2FTp6FwESudGsOYaKgXn6NycqzgXvM7OaCWwOnpvmyhpyy77I2yCydW2i6En%2FPBb3L2psrnFsM53ZB3uOZ6rUB7bGj6mZxV%2BA2JLHNyk6wTbu%2F80pOg4%2BOBx%2FENzqt5wXnFg8bUzzTKReCcEGv8xZEMqBuKtjx6ngGibE9XbIkxJcy2h5d%2B6g3gIDHoQ93sWILgHzyuhVQIMe%2Fgtqv1qy4xyNSlirbszFC62w%2BzNRkUGtK1v2E9A1VUYBvbsIBH3fvfKztUDA9V7RuvfT%2FdHMCL1qSdDSnNzIwamdE%2FKoR6nqPUvuCjqAgsEUoeopqlLpg82iEn%2FhxJ2U4MfNN9gzNtIT4GF6siSJvuQYCYJMQfPv%2BLhisRnhtG9ct%2FLbg4q4zv4FQAFKZbActREj63gJ1r0hsEgc7k%2FeTmQILL5HnGRmBCzoudZag32xd77uFCe4F90VnaoDVJNoqr52dDR3BNJXV772rRVICpKIG4H7DC%2FwIC9BjqkATYarqrqsqAv2Gtiy%2Bfwrv55h%2FFCq1SA07uMl%2FEaXa2AfV2TnXv59LHa81Om9XnmO7xeRvlj5L5UiVzB%2F77yIDSMhdLlruCz5fxX7VDx9NLtoWiRTtsMOAKsS1879Nn7oI1b89BppAqBSvWaHCCQBfEMx%2BoqQnS6QlCc4BxSBvyXIuftQb13XoV8IgknamCWynlcP69cU8oxbGrWJzNPpeFB2P1D&X-Amz-Signature=6d2cd22008426a08b1b262ae3fba74e986d5a367544c042a6774b5f560981447&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KLWYTH7%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2B%2Frq5DywCuQkHA7eyfedz71JY1%2BElvw6yAdKbolvLMwIhAIdnmzrs99eHXqxcR2CkUKlKnyDR8W3iEwLifv28U%2BmCKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyzaz8zKq%2FKxI2Z%2BNIq3APC59L85tt1hXZnV37phbZMOJeg5kvD47%2BW1S4BjI9A%2BXTO1swyPIWHUuAoSTWbKdckXprDpLPz99LZd357goOZFczq8ubzc6FoIOFR0BmXqvUzbl4YoE1VUmZPC2ArwQYJEUiBjgRQYjyKUtHGJ%2FTp6FwESudGsOYaKgXn6NycqzgXvM7OaCWwOnpvmyhpyy77I2yCydW2i6En%2FPBb3L2psrnFsM53ZB3uOZ6rUB7bGj6mZxV%2BA2JLHNyk6wTbu%2F80pOg4%2BOBx%2FENzqt5wXnFg8bUzzTKReCcEGv8xZEMqBuKtjx6ngGibE9XbIkxJcy2h5d%2B6g3gIDHoQ93sWILgHzyuhVQIMe%2Fgtqv1qy4xyNSlirbszFC62w%2BzNRkUGtK1v2E9A1VUYBvbsIBH3fvfKztUDA9V7RuvfT%2FdHMCL1qSdDSnNzIwamdE%2FKoR6nqPUvuCjqAgsEUoeopqlLpg82iEn%2FhxJ2U4MfNN9gzNtIT4GF6siSJvuQYCYJMQfPv%2BLhisRnhtG9ct%2FLbg4q4zv4FQAFKZbActREj63gJ1r0hsEgc7k%2FeTmQILL5HnGRmBCzoudZag32xd77uFCe4F90VnaoDVJNoqr52dDR3BNJXV772rRVICpKIG4H7DC%2FwIC9BjqkATYarqrqsqAv2Gtiy%2Bfwrv55h%2FFCq1SA07uMl%2FEaXa2AfV2TnXv59LHa81Om9XnmO7xeRvlj5L5UiVzB%2F77yIDSMhdLlruCz5fxX7VDx9NLtoWiRTtsMOAKsS1879Nn7oI1b89BppAqBSvWaHCCQBfEMx%2BoqQnS6QlCc4BxSBvyXIuftQb13XoV8IgknamCWynlcP69cU8oxbGrWJzNPpeFB2P1D&X-Amz-Signature=29ebcb1f437a377efd8a3565172d1fe79f642b0e71fcda4f6aa052c1d2a24581&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
