---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JBN7URT%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4GSrMDWdYlbCIJPWJyNDnHEY2jn9EJ39Z5%2FsRNnDf8wIgXmrhOyyChKZuu6ePHiBz88HDqL%2FM4PRFMP%2FR1Irtio4q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDOBrOXBXKbl8CcOIyyrcA6Sw%2Bj%2BbJ7eWBc%2B6wJnvjGC0ZLeazsilOnZRlMAYvddEJ842U7pn78eSF9TO21MlD76ABuE8oSa64q%2FD901T6AtDKyXZFQEldFOTIfj%2FqY%2FC0qKsn9O96WqWZ%2BpXU%2BT3zM76KcCzilCXFMzwP5oIykScgPu0zHCgshJvO0kaAy9WMS2RVmcKkwlTT0k2CnvINUu7kM2kLGXq28btvd%2F5yS3KHAdWRlpFN92uS%2FQK1jcLwcD6lz06iiPFSEdbZhkYGbytDV%2Fey%2Bo8VJEU1RyQ%2BquzS8vzNmuYh2kD3Y3UxHpTv9lpOJKhgsfCLN0ofJ8tbG9andbk72S9qMBmyy%2FkCdAehJpYhY0OVYAPf3EMqgVIDdsnkVFnNKRGH8kNEjfuKDonW3D%2BVS8hF3Gz3AhNAPKsToXUtEbF4Y0z91TpptjstMCgKPFX%2FC%2B5KbPIn8%2F%2FyMuLqZntKfgsugOVWFKAWtMd8zjQWO%2FKu3hIIHuomjn5u5ANGYm9tUehPh6bsPFaYSSQTpkqSGkOUcfqF6DH3swG12RKuSu%2FqGv%2BIY9kWDQvAjoT2l0Z0trqC9P8sIMAapQ9%2B6uM76CuTsgytQjvSyRB%2FjnaWZIyfv0f4GOs6S7bhAETQJSPy9rHVj%2FZMP3v5ccGOqUBg0FfE6uF%2BxxiX886IXr5F%2Fc4gXcXHrnHCiTFF2PttYAW55bTC2nSRD7SkbdWw700PHCWp1UpDHEOTXn9l23mwDEfNnaia%2Ffwq7%2FQv0DQYOGoNboW716yH3MD0S3KIBRAeygtQRuEEPBxcppH9StSKINXrB5SzchCAjSxr9HVli%2F51%2BTtgiy3D9tDdSojn5zkNSVYc%2FOpfBGDXeKldBMcTXJGj4tC&X-Amz-Signature=810be2890a696386fb6fb1f0a519c97b0c8a32d1705f11beeb4ababa200c6121&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JBN7URT%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4GSrMDWdYlbCIJPWJyNDnHEY2jn9EJ39Z5%2FsRNnDf8wIgXmrhOyyChKZuu6ePHiBz88HDqL%2FM4PRFMP%2FR1Irtio4q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDOBrOXBXKbl8CcOIyyrcA6Sw%2Bj%2BbJ7eWBc%2B6wJnvjGC0ZLeazsilOnZRlMAYvddEJ842U7pn78eSF9TO21MlD76ABuE8oSa64q%2FD901T6AtDKyXZFQEldFOTIfj%2FqY%2FC0qKsn9O96WqWZ%2BpXU%2BT3zM76KcCzilCXFMzwP5oIykScgPu0zHCgshJvO0kaAy9WMS2RVmcKkwlTT0k2CnvINUu7kM2kLGXq28btvd%2F5yS3KHAdWRlpFN92uS%2FQK1jcLwcD6lz06iiPFSEdbZhkYGbytDV%2Fey%2Bo8VJEU1RyQ%2BquzS8vzNmuYh2kD3Y3UxHpTv9lpOJKhgsfCLN0ofJ8tbG9andbk72S9qMBmyy%2FkCdAehJpYhY0OVYAPf3EMqgVIDdsnkVFnNKRGH8kNEjfuKDonW3D%2BVS8hF3Gz3AhNAPKsToXUtEbF4Y0z91TpptjstMCgKPFX%2FC%2B5KbPIn8%2F%2FyMuLqZntKfgsugOVWFKAWtMd8zjQWO%2FKu3hIIHuomjn5u5ANGYm9tUehPh6bsPFaYSSQTpkqSGkOUcfqF6DH3swG12RKuSu%2FqGv%2BIY9kWDQvAjoT2l0Z0trqC9P8sIMAapQ9%2B6uM76CuTsgytQjvSyRB%2FjnaWZIyfv0f4GOs6S7bhAETQJSPy9rHVj%2FZMP3v5ccGOqUBg0FfE6uF%2BxxiX886IXr5F%2Fc4gXcXHrnHCiTFF2PttYAW55bTC2nSRD7SkbdWw700PHCWp1UpDHEOTXn9l23mwDEfNnaia%2Ffwq7%2FQv0DQYOGoNboW716yH3MD0S3KIBRAeygtQRuEEPBxcppH9StSKINXrB5SzchCAjSxr9HVli%2F51%2BTtgiy3D9tDdSojn5zkNSVYc%2FOpfBGDXeKldBMcTXJGj4tC&X-Amz-Signature=a5d533e0a2908d9a04ff549056868b2b4fa4536eba45ed9b097b20206c63cea8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JBN7URT%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4GSrMDWdYlbCIJPWJyNDnHEY2jn9EJ39Z5%2FsRNnDf8wIgXmrhOyyChKZuu6ePHiBz88HDqL%2FM4PRFMP%2FR1Irtio4q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDOBrOXBXKbl8CcOIyyrcA6Sw%2Bj%2BbJ7eWBc%2B6wJnvjGC0ZLeazsilOnZRlMAYvddEJ842U7pn78eSF9TO21MlD76ABuE8oSa64q%2FD901T6AtDKyXZFQEldFOTIfj%2FqY%2FC0qKsn9O96WqWZ%2BpXU%2BT3zM76KcCzilCXFMzwP5oIykScgPu0zHCgshJvO0kaAy9WMS2RVmcKkwlTT0k2CnvINUu7kM2kLGXq28btvd%2F5yS3KHAdWRlpFN92uS%2FQK1jcLwcD6lz06iiPFSEdbZhkYGbytDV%2Fey%2Bo8VJEU1RyQ%2BquzS8vzNmuYh2kD3Y3UxHpTv9lpOJKhgsfCLN0ofJ8tbG9andbk72S9qMBmyy%2FkCdAehJpYhY0OVYAPf3EMqgVIDdsnkVFnNKRGH8kNEjfuKDonW3D%2BVS8hF3Gz3AhNAPKsToXUtEbF4Y0z91TpptjstMCgKPFX%2FC%2B5KbPIn8%2F%2FyMuLqZntKfgsugOVWFKAWtMd8zjQWO%2FKu3hIIHuomjn5u5ANGYm9tUehPh6bsPFaYSSQTpkqSGkOUcfqF6DH3swG12RKuSu%2FqGv%2BIY9kWDQvAjoT2l0Z0trqC9P8sIMAapQ9%2B6uM76CuTsgytQjvSyRB%2FjnaWZIyfv0f4GOs6S7bhAETQJSPy9rHVj%2FZMP3v5ccGOqUBg0FfE6uF%2BxxiX886IXr5F%2Fc4gXcXHrnHCiTFF2PttYAW55bTC2nSRD7SkbdWw700PHCWp1UpDHEOTXn9l23mwDEfNnaia%2Ffwq7%2FQv0DQYOGoNboW716yH3MD0S3KIBRAeygtQRuEEPBxcppH9StSKINXrB5SzchCAjSxr9HVli%2F51%2BTtgiy3D9tDdSojn5zkNSVYc%2FOpfBGDXeKldBMcTXJGj4tC&X-Amz-Signature=cd615064258a0fc0b3e0bb3829f7ff80159b2be65d107c1f25c97c7ac315293a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
