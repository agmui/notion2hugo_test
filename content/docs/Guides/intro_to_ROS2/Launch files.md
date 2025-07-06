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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYSSA4XU%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T051017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDL8jo%2FbjF0jZ6LhpJRdxzcIvmjf7Zzh7QdDmVl%2F67vRwIgf1RNlZBT%2BLpIXiC6GoUqm%2BZNLBm5Yx%2BMVHTCXDolhEwq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDFHG1%2Bv%2BG8lKEiSjeyrcA7CEzQ0pRcE6GC2B0HQLzplcjE5l7jji7oNSi6vf%2BPXpWY%2Bq8dD2tcwPTa0QNNKD35fky4HpGJx3OLmeOlIoeRS4ppWXY21NBpAwMB3fUXXVOaPC7VfsTe3m5OU8BXBjnzvGNhhWPfaJcNfPr9vIbUzYzXO0eMX24cQ1qr1vqAFS%2FKoVJB%2FAk5TtvS1ZabO89zhW6Ats8JmvxEuJ9EOXSCxUC%2FCNUKkTkYdxNGjoORfhax%2B%2FRTNVBsk5c7qBNr9y%2BGVyp7QqPePnqjkzCorVb9aDZvqJ5eDUxANDyLeMF7pGucd11pDbCVLtpvWnZ4H%2FfTbdlHfXbKxAd3Ydg60b2uPA4MkoYKasC9AKbfeto12a21rtLFvwhTqTs9loWsnbl3WeQVd5xBvru1tyYUCwSvIestYIiThSoZP3bG32fOe%2Bs0bOmtAbiMBcjtIg26GQt%2B56JQHUTb9QaHNbl9kDR0H%2FsdoZZ%2FwCYhNUXazZHOZz8Hu%2BBv7od30LwdizoV82HTPJdruFMrAm0lC%2F8Zk4OER3O465gmWLyv1xjnxY5pZCy2JsqIQecb73b0bBEP7AQ8z8claNVFEdq7AwiHgEcgxMFhH%2FHeg9e%2BuqC0KmOYr851GnSqQHsk3xFnm9MNaZp8MGOqUBjxLr3MUJYj8bL3ayjnN3BDDXM3itv6jpjMJTO3W2j6DB86Of%2B%2FupL3%2BqoD3IHvN4%2FiEIg1Vdmcudq%2BA6byVc2xydjbCm5QeLVvN%2Fkx5kEzhqzcKtaH835VT6%2FL7wa1yEbPsYWqJUjpcUGjX4kEjJ16QzSpp97G4UQl1deymDZc0WWroPUlfTW86UkkvX8gus7xO2lO8tbopv%2Bb1Y0dCHR0RFdymy&X-Amz-Signature=fbf0b39e3f3981aca0ad33c5a3deb4eba1fac4af4aa0d861e9fe54a0319db782&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYSSA4XU%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T051017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDL8jo%2FbjF0jZ6LhpJRdxzcIvmjf7Zzh7QdDmVl%2F67vRwIgf1RNlZBT%2BLpIXiC6GoUqm%2BZNLBm5Yx%2BMVHTCXDolhEwq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDFHG1%2Bv%2BG8lKEiSjeyrcA7CEzQ0pRcE6GC2B0HQLzplcjE5l7jji7oNSi6vf%2BPXpWY%2Bq8dD2tcwPTa0QNNKD35fky4HpGJx3OLmeOlIoeRS4ppWXY21NBpAwMB3fUXXVOaPC7VfsTe3m5OU8BXBjnzvGNhhWPfaJcNfPr9vIbUzYzXO0eMX24cQ1qr1vqAFS%2FKoVJB%2FAk5TtvS1ZabO89zhW6Ats8JmvxEuJ9EOXSCxUC%2FCNUKkTkYdxNGjoORfhax%2B%2FRTNVBsk5c7qBNr9y%2BGVyp7QqPePnqjkzCorVb9aDZvqJ5eDUxANDyLeMF7pGucd11pDbCVLtpvWnZ4H%2FfTbdlHfXbKxAd3Ydg60b2uPA4MkoYKasC9AKbfeto12a21rtLFvwhTqTs9loWsnbl3WeQVd5xBvru1tyYUCwSvIestYIiThSoZP3bG32fOe%2Bs0bOmtAbiMBcjtIg26GQt%2B56JQHUTb9QaHNbl9kDR0H%2FsdoZZ%2FwCYhNUXazZHOZz8Hu%2BBv7od30LwdizoV82HTPJdruFMrAm0lC%2F8Zk4OER3O465gmWLyv1xjnxY5pZCy2JsqIQecb73b0bBEP7AQ8z8claNVFEdq7AwiHgEcgxMFhH%2FHeg9e%2BuqC0KmOYr851GnSqQHsk3xFnm9MNaZp8MGOqUBjxLr3MUJYj8bL3ayjnN3BDDXM3itv6jpjMJTO3W2j6DB86Of%2B%2FupL3%2BqoD3IHvN4%2FiEIg1Vdmcudq%2BA6byVc2xydjbCm5QeLVvN%2Fkx5kEzhqzcKtaH835VT6%2FL7wa1yEbPsYWqJUjpcUGjX4kEjJ16QzSpp97G4UQl1deymDZc0WWroPUlfTW86UkkvX8gus7xO2lO8tbopv%2Bb1Y0dCHR0RFdymy&X-Amz-Signature=6807cc71157faaed6f8fa20e8b8bebc78ad91d0a9361e937366f0eb19d1f9aba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYSSA4XU%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T051017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDL8jo%2FbjF0jZ6LhpJRdxzcIvmjf7Zzh7QdDmVl%2F67vRwIgf1RNlZBT%2BLpIXiC6GoUqm%2BZNLBm5Yx%2BMVHTCXDolhEwq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDFHG1%2Bv%2BG8lKEiSjeyrcA7CEzQ0pRcE6GC2B0HQLzplcjE5l7jji7oNSi6vf%2BPXpWY%2Bq8dD2tcwPTa0QNNKD35fky4HpGJx3OLmeOlIoeRS4ppWXY21NBpAwMB3fUXXVOaPC7VfsTe3m5OU8BXBjnzvGNhhWPfaJcNfPr9vIbUzYzXO0eMX24cQ1qr1vqAFS%2FKoVJB%2FAk5TtvS1ZabO89zhW6Ats8JmvxEuJ9EOXSCxUC%2FCNUKkTkYdxNGjoORfhax%2B%2FRTNVBsk5c7qBNr9y%2BGVyp7QqPePnqjkzCorVb9aDZvqJ5eDUxANDyLeMF7pGucd11pDbCVLtpvWnZ4H%2FfTbdlHfXbKxAd3Ydg60b2uPA4MkoYKasC9AKbfeto12a21rtLFvwhTqTs9loWsnbl3WeQVd5xBvru1tyYUCwSvIestYIiThSoZP3bG32fOe%2Bs0bOmtAbiMBcjtIg26GQt%2B56JQHUTb9QaHNbl9kDR0H%2FsdoZZ%2FwCYhNUXazZHOZz8Hu%2BBv7od30LwdizoV82HTPJdruFMrAm0lC%2F8Zk4OER3O465gmWLyv1xjnxY5pZCy2JsqIQecb73b0bBEP7AQ8z8claNVFEdq7AwiHgEcgxMFhH%2FHeg9e%2BuqC0KmOYr851GnSqQHsk3xFnm9MNaZp8MGOqUBjxLr3MUJYj8bL3ayjnN3BDDXM3itv6jpjMJTO3W2j6DB86Of%2B%2FupL3%2BqoD3IHvN4%2FiEIg1Vdmcudq%2BA6byVc2xydjbCm5QeLVvN%2Fkx5kEzhqzcKtaH835VT6%2FL7wa1yEbPsYWqJUjpcUGjX4kEjJ16QzSpp97G4UQl1deymDZc0WWroPUlfTW86UkkvX8gus7xO2lO8tbopv%2Bb1Y0dCHR0RFdymy&X-Amz-Signature=b6cd32298e68a481feeac4aeed179b6635fd0e272b2c2f1f9d99afe5d4914248&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
