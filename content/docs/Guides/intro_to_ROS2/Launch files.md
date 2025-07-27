---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZAVYKT2%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIGaN%2BNUUFUAVfTeJuV9EPlWz1EDG07EC2GFB2xLL1AxYAiAOUgDaOyUSETB7DUmeHIm5VPDN1oKdKOuDver4P1sTHir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIM60iQsXKWMitEw%2FccKtwDDsX1R47w%2Fn%2FBnA4%2FSiRtL9BYqrtu0XQkGLtzv0oEJLUrJWQH82xIv4Sa9zzh6iiR96Y9IgX1oxMyZuiJvSDKv8GOuYuPMqJUeOEA8k3B96IkOPV05yoxGOar9lfuLVSql31UdUrV2L9BgSxbhql4wKt9tHvV3q3dcHUi%2BLTWN%2B1GwKxjnmrzCQwVpUA8aTSEjIfDiVo1NVG%2Fvn%2FlEmEB28lHrAHKBmtqzIa8I%2BEPhLH39JxvWemk8vy63ZSuGWbgkKxvMaljiX64dcKIhRyJzx4mAZ5XyjOdv4e%2BxIwuD1CkQXgvvRLidEGCmHxNI8QJRXW3Sem%2Be1yK0vqNsSyXMddUtrvv8AVH8vDAKvya5w1WB%2FDL%2FxaV3NDLydRTy8100ZYg1g9XAlzTNmgbqH3%2BVwIaQCQbtQL4YHRMkD4CMqDPkyy4I%2B8DLXMKbOkkJFg5ghlRTlHsT5DeCVhVM9d9T%2Btf6CraqwEKqIHKwqhV1vuj88NtGw3cet%2Bzh3l9w2VWPK%2B55B4Zhn%2F%2FmFB26GMGtnaFlKghHFM82yfS1XnNL5kSWUj1Sku0Rr%2BLgicOQ0QXYz5qTC1OvYuPr7qjblwvVlRC6k%2B19TXb0qE8xN%2FTn9Id47mBfmHEt9J%2FlrQwisOVxAY6pgGECQcDakGgTN5rus6P8tqruEyQ82W3%2B3xHntYgz9JPxsVCwng2cyLtRwuYi3saNxz7OVsC3ChWArNghl8uCP7b6uZQqTxuMQF3Zdrx5mYBW2hXwdcjl4%2FsWXy5%2BQT75EpEsM4Uh99VqCU1PMVLhDHVKJlGd7Ewhc%2FVhYgKBZF5RxjDAl14oWRRz29Xhuu2mchuS7bhHL3N6duzzCLqy9KibV9VVrKO&X-Amz-Signature=172a5d184d33303f58902a5c698e761eeeacc555c3920cf541938304d5b94b2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZAVYKT2%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIGaN%2BNUUFUAVfTeJuV9EPlWz1EDG07EC2GFB2xLL1AxYAiAOUgDaOyUSETB7DUmeHIm5VPDN1oKdKOuDver4P1sTHir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIM60iQsXKWMitEw%2FccKtwDDsX1R47w%2Fn%2FBnA4%2FSiRtL9BYqrtu0XQkGLtzv0oEJLUrJWQH82xIv4Sa9zzh6iiR96Y9IgX1oxMyZuiJvSDKv8GOuYuPMqJUeOEA8k3B96IkOPV05yoxGOar9lfuLVSql31UdUrV2L9BgSxbhql4wKt9tHvV3q3dcHUi%2BLTWN%2B1GwKxjnmrzCQwVpUA8aTSEjIfDiVo1NVG%2Fvn%2FlEmEB28lHrAHKBmtqzIa8I%2BEPhLH39JxvWemk8vy63ZSuGWbgkKxvMaljiX64dcKIhRyJzx4mAZ5XyjOdv4e%2BxIwuD1CkQXgvvRLidEGCmHxNI8QJRXW3Sem%2Be1yK0vqNsSyXMddUtrvv8AVH8vDAKvya5w1WB%2FDL%2FxaV3NDLydRTy8100ZYg1g9XAlzTNmgbqH3%2BVwIaQCQbtQL4YHRMkD4CMqDPkyy4I%2B8DLXMKbOkkJFg5ghlRTlHsT5DeCVhVM9d9T%2Btf6CraqwEKqIHKwqhV1vuj88NtGw3cet%2Bzh3l9w2VWPK%2B55B4Zhn%2F%2FmFB26GMGtnaFlKghHFM82yfS1XnNL5kSWUj1Sku0Rr%2BLgicOQ0QXYz5qTC1OvYuPr7qjblwvVlRC6k%2B19TXb0qE8xN%2FTn9Id47mBfmHEt9J%2FlrQwisOVxAY6pgGECQcDakGgTN5rus6P8tqruEyQ82W3%2B3xHntYgz9JPxsVCwng2cyLtRwuYi3saNxz7OVsC3ChWArNghl8uCP7b6uZQqTxuMQF3Zdrx5mYBW2hXwdcjl4%2FsWXy5%2BQT75EpEsM4Uh99VqCU1PMVLhDHVKJlGd7Ewhc%2FVhYgKBZF5RxjDAl14oWRRz29Xhuu2mchuS7bhHL3N6duzzCLqy9KibV9VVrKO&X-Amz-Signature=5d88ae9c835c3127a8cbbd9f34dedc500f0f28d6cfe1dca458ae7f8f5b133f4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZAVYKT2%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIGaN%2BNUUFUAVfTeJuV9EPlWz1EDG07EC2GFB2xLL1AxYAiAOUgDaOyUSETB7DUmeHIm5VPDN1oKdKOuDver4P1sTHir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIM60iQsXKWMitEw%2FccKtwDDsX1R47w%2Fn%2FBnA4%2FSiRtL9BYqrtu0XQkGLtzv0oEJLUrJWQH82xIv4Sa9zzh6iiR96Y9IgX1oxMyZuiJvSDKv8GOuYuPMqJUeOEA8k3B96IkOPV05yoxGOar9lfuLVSql31UdUrV2L9BgSxbhql4wKt9tHvV3q3dcHUi%2BLTWN%2B1GwKxjnmrzCQwVpUA8aTSEjIfDiVo1NVG%2Fvn%2FlEmEB28lHrAHKBmtqzIa8I%2BEPhLH39JxvWemk8vy63ZSuGWbgkKxvMaljiX64dcKIhRyJzx4mAZ5XyjOdv4e%2BxIwuD1CkQXgvvRLidEGCmHxNI8QJRXW3Sem%2Be1yK0vqNsSyXMddUtrvv8AVH8vDAKvya5w1WB%2FDL%2FxaV3NDLydRTy8100ZYg1g9XAlzTNmgbqH3%2BVwIaQCQbtQL4YHRMkD4CMqDPkyy4I%2B8DLXMKbOkkJFg5ghlRTlHsT5DeCVhVM9d9T%2Btf6CraqwEKqIHKwqhV1vuj88NtGw3cet%2Bzh3l9w2VWPK%2B55B4Zhn%2F%2FmFB26GMGtnaFlKghHFM82yfS1XnNL5kSWUj1Sku0Rr%2BLgicOQ0QXYz5qTC1OvYuPr7qjblwvVlRC6k%2B19TXb0qE8xN%2FTn9Id47mBfmHEt9J%2FlrQwisOVxAY6pgGECQcDakGgTN5rus6P8tqruEyQ82W3%2B3xHntYgz9JPxsVCwng2cyLtRwuYi3saNxz7OVsC3ChWArNghl8uCP7b6uZQqTxuMQF3Zdrx5mYBW2hXwdcjl4%2FsWXy5%2BQT75EpEsM4Uh99VqCU1PMVLhDHVKJlGd7Ewhc%2FVhYgKBZF5RxjDAl14oWRRz29Xhuu2mchuS7bhHL3N6duzzCLqy9KibV9VVrKO&X-Amz-Signature=c448570dcd979b22c828bb2954d42f442d6b2d1e2e65c2dc729d8f5fb0d16c3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
