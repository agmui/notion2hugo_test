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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657XVD2F7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy8pZsYNrsx0yjcsr2d%2BBFvivRFkPUOPNUwWAfiifcXwIgfe8Y0FbNaeGNMkagdoXXthVijy54i4%2BBA%2B0o84SrhpYqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIxCvTE5isxIEGradircA7XxVPdHNhOxOnLY%2FV%2BGJJkx69ptOTKEFa%2BTQs7DNj%2BWVEQ9I1PxZUjGmWHGZ6e6v842PZydwTpl7%2F7KCU1Isv3HcGWUZmXM6ufDNfOXn0MhY8OcE1fc93AG4yJtDgH%2Fd5%2FE0ycgi0vyBQ1a0g4ErileYHKm0bGJ6CdYmEFNSbal4NslpUN8AWUnhUpT7CoQi5rci8fu7%2FqkeXRIxkLbR9Rxc5shGRWrkZ3d3uMD2Jy1Gp7ZBGUAJySGyMmIGoLxpGxiC0S3nLbR0Naip0uqjtKRqz1VNjsQh38dt%2F1xVN1S7fQTfd8PHdAzPRcKUUfr9jSTbAhixiWGJlZ5bkWBrS%2B3Oaan4FOfigR9VbOjB843Ik7cbYBDHIvJKOEacXCaZmkGkmJP8FPHPZae7UTbfVDlNLXUrlPMNcvK9hoIYQMg2Bcy6aAACLFAoUp0MrEyvBX1eAgPK%2FgODSBJyBbwqzwlSjzhB4b2RxQaTKcFdyq4PUB525dgxgmnkqQ9%2F3r%2FZ9l7DBzzhdJflupE%2B2ABxz0icZDbYJNw2iTOfEU6gY8pxvQCiJzo2%2F2VQjFqjEQvY54lTTkidTbPArou8KKI6W8eMIJtAtu1kPd6eOKA20vNCC9XBbpNULAGd1HtMKLKq8QGOqUBXa3hxZsSuWR0JWnceAu64%2Fm0oPSrqL5W2O%2BAoHNfD7WBmdoa1lzHcRDbYUkoKV90HMm4UefCeW7wulA7Zni%2FEJUoHnqRBWS8NdOU5EzpH1HS%2F0jR0Ll2ezrO1asoyGIwfU4QasuyJCi%2FM1gWX%2FP7mSs6hlvAKH3jwFLcpaEJUAtMXs4mOmeaZ0UCOMaAcz3HRMJOxl4%2BP4HaskzEH0XZ4EGkXgf7&X-Amz-Signature=bceeecf1e5c4228e513735ac1d321d8b545c463e9d89c93322caeb4b835d9158&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657XVD2F7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy8pZsYNrsx0yjcsr2d%2BBFvivRFkPUOPNUwWAfiifcXwIgfe8Y0FbNaeGNMkagdoXXthVijy54i4%2BBA%2B0o84SrhpYqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIxCvTE5isxIEGradircA7XxVPdHNhOxOnLY%2FV%2BGJJkx69ptOTKEFa%2BTQs7DNj%2BWVEQ9I1PxZUjGmWHGZ6e6v842PZydwTpl7%2F7KCU1Isv3HcGWUZmXM6ufDNfOXn0MhY8OcE1fc93AG4yJtDgH%2Fd5%2FE0ycgi0vyBQ1a0g4ErileYHKm0bGJ6CdYmEFNSbal4NslpUN8AWUnhUpT7CoQi5rci8fu7%2FqkeXRIxkLbR9Rxc5shGRWrkZ3d3uMD2Jy1Gp7ZBGUAJySGyMmIGoLxpGxiC0S3nLbR0Naip0uqjtKRqz1VNjsQh38dt%2F1xVN1S7fQTfd8PHdAzPRcKUUfr9jSTbAhixiWGJlZ5bkWBrS%2B3Oaan4FOfigR9VbOjB843Ik7cbYBDHIvJKOEacXCaZmkGkmJP8FPHPZae7UTbfVDlNLXUrlPMNcvK9hoIYQMg2Bcy6aAACLFAoUp0MrEyvBX1eAgPK%2FgODSBJyBbwqzwlSjzhB4b2RxQaTKcFdyq4PUB525dgxgmnkqQ9%2F3r%2FZ9l7DBzzhdJflupE%2B2ABxz0icZDbYJNw2iTOfEU6gY8pxvQCiJzo2%2F2VQjFqjEQvY54lTTkidTbPArou8KKI6W8eMIJtAtu1kPd6eOKA20vNCC9XBbpNULAGd1HtMKLKq8QGOqUBXa3hxZsSuWR0JWnceAu64%2Fm0oPSrqL5W2O%2BAoHNfD7WBmdoa1lzHcRDbYUkoKV90HMm4UefCeW7wulA7Zni%2FEJUoHnqRBWS8NdOU5EzpH1HS%2F0jR0Ll2ezrO1asoyGIwfU4QasuyJCi%2FM1gWX%2FP7mSs6hlvAKH3jwFLcpaEJUAtMXs4mOmeaZ0UCOMaAcz3HRMJOxl4%2BP4HaskzEH0XZ4EGkXgf7&X-Amz-Signature=a3ecc1ea317f432a47e51778c21b8601e1e3daacbd379f41b096285f954db367&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657XVD2F7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy8pZsYNrsx0yjcsr2d%2BBFvivRFkPUOPNUwWAfiifcXwIgfe8Y0FbNaeGNMkagdoXXthVijy54i4%2BBA%2B0o84SrhpYqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIxCvTE5isxIEGradircA7XxVPdHNhOxOnLY%2FV%2BGJJkx69ptOTKEFa%2BTQs7DNj%2BWVEQ9I1PxZUjGmWHGZ6e6v842PZydwTpl7%2F7KCU1Isv3HcGWUZmXM6ufDNfOXn0MhY8OcE1fc93AG4yJtDgH%2Fd5%2FE0ycgi0vyBQ1a0g4ErileYHKm0bGJ6CdYmEFNSbal4NslpUN8AWUnhUpT7CoQi5rci8fu7%2FqkeXRIxkLbR9Rxc5shGRWrkZ3d3uMD2Jy1Gp7ZBGUAJySGyMmIGoLxpGxiC0S3nLbR0Naip0uqjtKRqz1VNjsQh38dt%2F1xVN1S7fQTfd8PHdAzPRcKUUfr9jSTbAhixiWGJlZ5bkWBrS%2B3Oaan4FOfigR9VbOjB843Ik7cbYBDHIvJKOEacXCaZmkGkmJP8FPHPZae7UTbfVDlNLXUrlPMNcvK9hoIYQMg2Bcy6aAACLFAoUp0MrEyvBX1eAgPK%2FgODSBJyBbwqzwlSjzhB4b2RxQaTKcFdyq4PUB525dgxgmnkqQ9%2F3r%2FZ9l7DBzzhdJflupE%2B2ABxz0icZDbYJNw2iTOfEU6gY8pxvQCiJzo2%2F2VQjFqjEQvY54lTTkidTbPArou8KKI6W8eMIJtAtu1kPd6eOKA20vNCC9XBbpNULAGd1HtMKLKq8QGOqUBXa3hxZsSuWR0JWnceAu64%2Fm0oPSrqL5W2O%2BAoHNfD7WBmdoa1lzHcRDbYUkoKV90HMm4UefCeW7wulA7Zni%2FEJUoHnqRBWS8NdOU5EzpH1HS%2F0jR0Ll2ezrO1asoyGIwfU4QasuyJCi%2FM1gWX%2FP7mSs6hlvAKH3jwFLcpaEJUAtMXs4mOmeaZ0UCOMaAcz3HRMJOxl4%2BP4HaskzEH0XZ4EGkXgf7&X-Amz-Signature=897e8bd84be9d8d4864ea8049491ff4559e48aa8c3f1d5ad76b75b8809e90875&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
