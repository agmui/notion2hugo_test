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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZO5R7PF%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T190351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDe0LUH6NXaTlJJWg0DYieHLOM4SXKgvxfJ9cg%2F7JT0mAIgBAFDHRfP5T6%2BTDIrOMnkA%2FF4NHEw2FWDW%2F2JVKnBuEwqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2FuHD4FZOFcs7V9pSrcA%2BY6bHT%2Fz4zzfQJdYUp8bD3qE%2BijhtrD0iYYldmsGVd75F8mbjwXcxaPtWkd4BBI7diB270ulEl%2F%2Bbe2oDJ%2FhdFzjv9EZjq1v8jMUWW2JjVupuBGvlgG%2BGPVllUXRaYKI0VNDcv1xYgetw5zb382kS4neWL2rAdjXQMrN7DBDp9HXeMIM3en7dDBljw77FEcBru%2BrjMS0GtD0jicBk7hNw3IM5xfLqfl21F9eikIviKkXnzR23BWtWOH0moDSOgYnupsIDkbTQa5Ario8XXmb5J0RNGyUUV34TC4lNWI7QZJwaoWER9yLd6dP5bE8RTBWVoe1nvCD7aXUtYQxFta4zMmR%2BosN4muqe573su3TqubdSbHW0%2BF1nYS3kSFsaBeDcRXRO5FtpW9oDtzf2IEELHNSU3sqyBE7HwK3Vfgf9E7V3k2mqxoSo9HXouFMz1%2B0r%2FmJTZQuvjUpnVBXuGC2G%2Bd%2BF%2Bch1IWsGrbHzLzhmOzqSWbUlVFZ6TRybaPCblApNicOIPyRLLVedlA%2Fn%2FDf0pcYHBS41k61Eb5M9SsGybroT5zqajJeibDxJVfO6ffwkFo34ZyhYeGS6eKPOWBXBGbFIWDuViw3mynNfpJTj7JvRVTrIK7%2F5Z3L5duMPbF8b4GOqUBEEbFA4kKqJJRCHHsXNKIlpO9npgP1d7KP%2BQ5KqG7OXD%2Bvf4qLMxs9NVE3yTTuFDvSsJiGzw%2BvbjZ2AuPiMY%2BSqSE7QsMgrIW5V9Y6BDbhOPYBCOeHK3QG44A%2F4F7BQ7%2FYeCOmPtJSGNXMJdpSHTlsOn1vf8bSZtRe%2B5OhJDI2tZ5yzKBjJgFxuvUzUx89dcK22bJbA390cB5EHiWYkKv2eHZDisW&X-Amz-Signature=8aee96608c6755d3a42b285cc5407aa4cab2b4f88059e282fabbeaa0b51d5cf2&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZO5R7PF%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T190351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDe0LUH6NXaTlJJWg0DYieHLOM4SXKgvxfJ9cg%2F7JT0mAIgBAFDHRfP5T6%2BTDIrOMnkA%2FF4NHEw2FWDW%2F2JVKnBuEwqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2FuHD4FZOFcs7V9pSrcA%2BY6bHT%2Fz4zzfQJdYUp8bD3qE%2BijhtrD0iYYldmsGVd75F8mbjwXcxaPtWkd4BBI7diB270ulEl%2F%2Bbe2oDJ%2FhdFzjv9EZjq1v8jMUWW2JjVupuBGvlgG%2BGPVllUXRaYKI0VNDcv1xYgetw5zb382kS4neWL2rAdjXQMrN7DBDp9HXeMIM3en7dDBljw77FEcBru%2BrjMS0GtD0jicBk7hNw3IM5xfLqfl21F9eikIviKkXnzR23BWtWOH0moDSOgYnupsIDkbTQa5Ario8XXmb5J0RNGyUUV34TC4lNWI7QZJwaoWER9yLd6dP5bE8RTBWVoe1nvCD7aXUtYQxFta4zMmR%2BosN4muqe573su3TqubdSbHW0%2BF1nYS3kSFsaBeDcRXRO5FtpW9oDtzf2IEELHNSU3sqyBE7HwK3Vfgf9E7V3k2mqxoSo9HXouFMz1%2B0r%2FmJTZQuvjUpnVBXuGC2G%2Bd%2BF%2Bch1IWsGrbHzLzhmOzqSWbUlVFZ6TRybaPCblApNicOIPyRLLVedlA%2Fn%2FDf0pcYHBS41k61Eb5M9SsGybroT5zqajJeibDxJVfO6ffwkFo34ZyhYeGS6eKPOWBXBGbFIWDuViw3mynNfpJTj7JvRVTrIK7%2F5Z3L5duMPbF8b4GOqUBEEbFA4kKqJJRCHHsXNKIlpO9npgP1d7KP%2BQ5KqG7OXD%2Bvf4qLMxs9NVE3yTTuFDvSsJiGzw%2BvbjZ2AuPiMY%2BSqSE7QsMgrIW5V9Y6BDbhOPYBCOeHK3QG44A%2F4F7BQ7%2FYeCOmPtJSGNXMJdpSHTlsOn1vf8bSZtRe%2B5OhJDI2tZ5yzKBjJgFxuvUzUx89dcK22bJbA390cB5EHiWYkKv2eHZDisW&X-Amz-Signature=830ca01bc49a313e19e4085dd072ea24ee4b1ae598bc4c955df64ea322b88532&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZO5R7PF%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T190351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDe0LUH6NXaTlJJWg0DYieHLOM4SXKgvxfJ9cg%2F7JT0mAIgBAFDHRfP5T6%2BTDIrOMnkA%2FF4NHEw2FWDW%2F2JVKnBuEwqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2FuHD4FZOFcs7V9pSrcA%2BY6bHT%2Fz4zzfQJdYUp8bD3qE%2BijhtrD0iYYldmsGVd75F8mbjwXcxaPtWkd4BBI7diB270ulEl%2F%2Bbe2oDJ%2FhdFzjv9EZjq1v8jMUWW2JjVupuBGvlgG%2BGPVllUXRaYKI0VNDcv1xYgetw5zb382kS4neWL2rAdjXQMrN7DBDp9HXeMIM3en7dDBljw77FEcBru%2BrjMS0GtD0jicBk7hNw3IM5xfLqfl21F9eikIviKkXnzR23BWtWOH0moDSOgYnupsIDkbTQa5Ario8XXmb5J0RNGyUUV34TC4lNWI7QZJwaoWER9yLd6dP5bE8RTBWVoe1nvCD7aXUtYQxFta4zMmR%2BosN4muqe573su3TqubdSbHW0%2BF1nYS3kSFsaBeDcRXRO5FtpW9oDtzf2IEELHNSU3sqyBE7HwK3Vfgf9E7V3k2mqxoSo9HXouFMz1%2B0r%2FmJTZQuvjUpnVBXuGC2G%2Bd%2BF%2Bch1IWsGrbHzLzhmOzqSWbUlVFZ6TRybaPCblApNicOIPyRLLVedlA%2Fn%2FDf0pcYHBS41k61Eb5M9SsGybroT5zqajJeibDxJVfO6ffwkFo34ZyhYeGS6eKPOWBXBGbFIWDuViw3mynNfpJTj7JvRVTrIK7%2F5Z3L5duMPbF8b4GOqUBEEbFA4kKqJJRCHHsXNKIlpO9npgP1d7KP%2BQ5KqG7OXD%2Bvf4qLMxs9NVE3yTTuFDvSsJiGzw%2BvbjZ2AuPiMY%2BSqSE7QsMgrIW5V9Y6BDbhOPYBCOeHK3QG44A%2F4F7BQ7%2FYeCOmPtJSGNXMJdpSHTlsOn1vf8bSZtRe%2B5OhJDI2tZ5yzKBjJgFxuvUzUx89dcK22bJbA390cB5EHiWYkKv2eHZDisW&X-Amz-Signature=b151b7655e7df2129962ed7305092e2dbccabbdc8f79e1171e63824292f8df9c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
