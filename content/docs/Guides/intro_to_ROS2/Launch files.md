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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE2WXS3P%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T220929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIC%2B4xO9l0VmRDyers14%2BMKcsgnQ9UXXp%2Ba9J9sVWILdTAiEAjXAgDXaUwnfhMzCYQxtvCmAMv%2BGvg4hwQSYY3I657QIq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDMDMfMn%2FmNnBXeSArCrcA4fXEZjg5TNinnOWAPgCLNBKDvVf7zPDOowQ3I6o2Xn9LiUXJJzuiuQuqlP%2FLPcURCcdVW2FB7q7j%2BV3t%2BG%2BX9hTnJDKJLODOXGtGnnksSwdlC1o3Qm0suLDlpT6KJ1cVzRfQzQaFhxAmm%2FT6zIfi0TNofcgtqwESqAj%2BHigKHFMH0%2FtTbAIakAokfLlxgU3hs3Zbk%2FckAvzBMN8cZNUfEFiKqVuywqOK%2FuyIvWz3yWE5LOWhGeGRheJl8Anj4AxV19hI8zE3QYsKGQQ1JYtdKCKuqc63HOX6BNW2A289P1mrxbm4CvT9nGxAZ%2BIYGf8khyPnq9mLGedOtpPCNAUSdl%2FHR%2BkFh35CIRtoitnyi67bzwGzzJY9g%2B8Umq%2BTZNd8dv9DMU9rIK242zkpBuDjxWJtxk5%2BmVjTjtzy%2BhI6YfytwC3L5pKICQANP0VU%2BzDRPWH2RLBV3o4Aed5JiORoo%2BTmZBqPwM0dzqOxIeNqmf6dM4f6jDcFTpPc%2Bl%2FqF8gffb4r5MSBJUviOrJqfiLocpzptHh95xm3y7Lmxm%2Fa2LPDjY6balvKEDoedRVEIiZKgJkASoZxgDrEpQogfraPROxGXm%2BaBJewdM6fKvWAPTOt9INJFmTFGKXED0TMOb22sMGOqUBWWOdLulzcS4pZz6elIrFnuoasXPmhwUi%2BFtKXL90y98IL2HqetbHKJm5cIxBXqP2xhNzkykJipRTmEFHyUIqP%2FfB0qb3JdmZ9556OgGJfO9w%2F3IdCxohyTpnDZU3LUffdB41Ili04XRQKHqwHaGMCNBa0dcmmA%2FeFE%2F1Afio8N4xs%2FzOcIobcwwZceeaW24LPqOuTMy39Yj1dh8JoHDf9mtxT25S&X-Amz-Signature=8d145376dadffba2f70aece1cc25b147174e8f96f65544520d4791ead39ab97a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE2WXS3P%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T220929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIC%2B4xO9l0VmRDyers14%2BMKcsgnQ9UXXp%2Ba9J9sVWILdTAiEAjXAgDXaUwnfhMzCYQxtvCmAMv%2BGvg4hwQSYY3I657QIq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDMDMfMn%2FmNnBXeSArCrcA4fXEZjg5TNinnOWAPgCLNBKDvVf7zPDOowQ3I6o2Xn9LiUXJJzuiuQuqlP%2FLPcURCcdVW2FB7q7j%2BV3t%2BG%2BX9hTnJDKJLODOXGtGnnksSwdlC1o3Qm0suLDlpT6KJ1cVzRfQzQaFhxAmm%2FT6zIfi0TNofcgtqwESqAj%2BHigKHFMH0%2FtTbAIakAokfLlxgU3hs3Zbk%2FckAvzBMN8cZNUfEFiKqVuywqOK%2FuyIvWz3yWE5LOWhGeGRheJl8Anj4AxV19hI8zE3QYsKGQQ1JYtdKCKuqc63HOX6BNW2A289P1mrxbm4CvT9nGxAZ%2BIYGf8khyPnq9mLGedOtpPCNAUSdl%2FHR%2BkFh35CIRtoitnyi67bzwGzzJY9g%2B8Umq%2BTZNd8dv9DMU9rIK242zkpBuDjxWJtxk5%2BmVjTjtzy%2BhI6YfytwC3L5pKICQANP0VU%2BzDRPWH2RLBV3o4Aed5JiORoo%2BTmZBqPwM0dzqOxIeNqmf6dM4f6jDcFTpPc%2Bl%2FqF8gffb4r5MSBJUviOrJqfiLocpzptHh95xm3y7Lmxm%2Fa2LPDjY6balvKEDoedRVEIiZKgJkASoZxgDrEpQogfraPROxGXm%2BaBJewdM6fKvWAPTOt9INJFmTFGKXED0TMOb22sMGOqUBWWOdLulzcS4pZz6elIrFnuoasXPmhwUi%2BFtKXL90y98IL2HqetbHKJm5cIxBXqP2xhNzkykJipRTmEFHyUIqP%2FfB0qb3JdmZ9556OgGJfO9w%2F3IdCxohyTpnDZU3LUffdB41Ili04XRQKHqwHaGMCNBa0dcmmA%2FeFE%2F1Afio8N4xs%2FzOcIobcwwZceeaW24LPqOuTMy39Yj1dh8JoHDf9mtxT25S&X-Amz-Signature=ead87f294c44d95a5367a39b791d2b72f2d4f22a0625d194be3be3906c84eb82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE2WXS3P%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T220929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIC%2B4xO9l0VmRDyers14%2BMKcsgnQ9UXXp%2Ba9J9sVWILdTAiEAjXAgDXaUwnfhMzCYQxtvCmAMv%2BGvg4hwQSYY3I657QIq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDMDMfMn%2FmNnBXeSArCrcA4fXEZjg5TNinnOWAPgCLNBKDvVf7zPDOowQ3I6o2Xn9LiUXJJzuiuQuqlP%2FLPcURCcdVW2FB7q7j%2BV3t%2BG%2BX9hTnJDKJLODOXGtGnnksSwdlC1o3Qm0suLDlpT6KJ1cVzRfQzQaFhxAmm%2FT6zIfi0TNofcgtqwESqAj%2BHigKHFMH0%2FtTbAIakAokfLlxgU3hs3Zbk%2FckAvzBMN8cZNUfEFiKqVuywqOK%2FuyIvWz3yWE5LOWhGeGRheJl8Anj4AxV19hI8zE3QYsKGQQ1JYtdKCKuqc63HOX6BNW2A289P1mrxbm4CvT9nGxAZ%2BIYGf8khyPnq9mLGedOtpPCNAUSdl%2FHR%2BkFh35CIRtoitnyi67bzwGzzJY9g%2B8Umq%2BTZNd8dv9DMU9rIK242zkpBuDjxWJtxk5%2BmVjTjtzy%2BhI6YfytwC3L5pKICQANP0VU%2BzDRPWH2RLBV3o4Aed5JiORoo%2BTmZBqPwM0dzqOxIeNqmf6dM4f6jDcFTpPc%2Bl%2FqF8gffb4r5MSBJUviOrJqfiLocpzptHh95xm3y7Lmxm%2Fa2LPDjY6balvKEDoedRVEIiZKgJkASoZxgDrEpQogfraPROxGXm%2BaBJewdM6fKvWAPTOt9INJFmTFGKXED0TMOb22sMGOqUBWWOdLulzcS4pZz6elIrFnuoasXPmhwUi%2BFtKXL90y98IL2HqetbHKJm5cIxBXqP2xhNzkykJipRTmEFHyUIqP%2FfB0qb3JdmZ9556OgGJfO9w%2F3IdCxohyTpnDZU3LUffdB41Ili04XRQKHqwHaGMCNBa0dcmmA%2FeFE%2F1Afio8N4xs%2FzOcIobcwwZceeaW24LPqOuTMy39Yj1dh8JoHDf9mtxT25S&X-Amz-Signature=a5db2673aad22f4f6db42e443469597d274c6a2420f8945a606b7cc103c77f78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
