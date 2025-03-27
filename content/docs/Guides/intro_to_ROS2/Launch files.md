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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EA2RE5W%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICiNueEYp76aysxDV4OvxY3%2BaLHYZ%2BliI1lOYov9pZ%2FOAiArgtWN2R4I2qbNH61QZt2dQs2AmcBteME16Kv1eNcp2Cr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMHBnQQVoDqW6j4Y2CKtwDUKcMBGFtx4NwbBl5SgHhNigkqa9fhG%2BUoLJYZH6U621fjTqE8RgkSuzy%2B0oVp1TiNRP5iBraotAw95AbNMLrOx26jLoLOKZR7oER5swUgXDAw%2F%2Fo6vChhCJgOs1KSDoMfNXEz1t8kKW8T7HH5%2B9NJgF%2BoA5nCOa5QW1WvwtWCKQc3YcL%2Bg%2BrQzTWL4IaacSLK7VDqE8hMVeMEoS6wDOYdY2FQn%2Fr%2FZOtRBufUgqy%2FWfYncHExXX%2BoD%2FsXa6plyYwdEdJe9D7yooBBnxDqI6nG%2F8ArMEQn8n3fFBzigAB2UcJOQ3kf0ksW7%2B3ukI1mn0AIMTaBl%2Faei1VYkDQ%2BEXHH9MRaVqaB1FlvgTBkJSS3hfZkSXy8e7pGlCpkSDc1P%2F9qRsgHbvoZ%2FhB5NwMr18pIHNmOXxvs2Go6BUlpygGgwWbU6UcyZdeeAiedN0YkAFK%2FuPzCjOOnZDnLyFpFRv4zQ15v7Gq9Om3Qm%2Bz%2F6pvGHpfRATJ3ZdLv1UtFbBAdHt%2FSUBxBQ4%2BgCltg8%2B2rjGZ2WMqi%2FXw4s0wJzik9VXPpd9%2FR6Jaf2DXY8wVsWArVR4yNoJb1ihFqYLuORzK9RgbGVpk8JNAHy5p6eRQW5HfPqisi7T%2FFI9JKffIoqQw592WvwY6pgHH11iZE31bWQuQfd79dgARuJG2POjRYaJvAQ%2Bi5%2BAbNI02r6SVh%2FIERvnTtHgOLIm6Lx1BzCfPLBbq3PmZPGWqsMX5Z9sqqF23Em87sjyXioaWgxQuz%2FKSPUiTni%2B%2F5ARGVBldd6mYR5uckMYBPx%2FL%2B5RpvBiWEnQg%2FFpXDzerA%2Fn%2BWSdXyO6dXHcD8UzAsOj4NMQLzWpQxQFKw0zZZF8OIY7NwSsJ&X-Amz-Signature=975d193fe80ac1d405a090ee3e132679191e76d2b5a27ba7093f6380d2f3c9ec&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EA2RE5W%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICiNueEYp76aysxDV4OvxY3%2BaLHYZ%2BliI1lOYov9pZ%2FOAiArgtWN2R4I2qbNH61QZt2dQs2AmcBteME16Kv1eNcp2Cr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMHBnQQVoDqW6j4Y2CKtwDUKcMBGFtx4NwbBl5SgHhNigkqa9fhG%2BUoLJYZH6U621fjTqE8RgkSuzy%2B0oVp1TiNRP5iBraotAw95AbNMLrOx26jLoLOKZR7oER5swUgXDAw%2F%2Fo6vChhCJgOs1KSDoMfNXEz1t8kKW8T7HH5%2B9NJgF%2BoA5nCOa5QW1WvwtWCKQc3YcL%2Bg%2BrQzTWL4IaacSLK7VDqE8hMVeMEoS6wDOYdY2FQn%2Fr%2FZOtRBufUgqy%2FWfYncHExXX%2BoD%2FsXa6plyYwdEdJe9D7yooBBnxDqI6nG%2F8ArMEQn8n3fFBzigAB2UcJOQ3kf0ksW7%2B3ukI1mn0AIMTaBl%2Faei1VYkDQ%2BEXHH9MRaVqaB1FlvgTBkJSS3hfZkSXy8e7pGlCpkSDc1P%2F9qRsgHbvoZ%2FhB5NwMr18pIHNmOXxvs2Go6BUlpygGgwWbU6UcyZdeeAiedN0YkAFK%2FuPzCjOOnZDnLyFpFRv4zQ15v7Gq9Om3Qm%2Bz%2F6pvGHpfRATJ3ZdLv1UtFbBAdHt%2FSUBxBQ4%2BgCltg8%2B2rjGZ2WMqi%2FXw4s0wJzik9VXPpd9%2FR6Jaf2DXY8wVsWArVR4yNoJb1ihFqYLuORzK9RgbGVpk8JNAHy5p6eRQW5HfPqisi7T%2FFI9JKffIoqQw592WvwY6pgHH11iZE31bWQuQfd79dgARuJG2POjRYaJvAQ%2Bi5%2BAbNI02r6SVh%2FIERvnTtHgOLIm6Lx1BzCfPLBbq3PmZPGWqsMX5Z9sqqF23Em87sjyXioaWgxQuz%2FKSPUiTni%2B%2F5ARGVBldd6mYR5uckMYBPx%2FL%2B5RpvBiWEnQg%2FFpXDzerA%2Fn%2BWSdXyO6dXHcD8UzAsOj4NMQLzWpQxQFKw0zZZF8OIY7NwSsJ&X-Amz-Signature=627f2029d9529049c0ecdc768390642b8e964aa52de5fef188760bcfa659d7ad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EA2RE5W%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICiNueEYp76aysxDV4OvxY3%2BaLHYZ%2BliI1lOYov9pZ%2FOAiArgtWN2R4I2qbNH61QZt2dQs2AmcBteME16Kv1eNcp2Cr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMHBnQQVoDqW6j4Y2CKtwDUKcMBGFtx4NwbBl5SgHhNigkqa9fhG%2BUoLJYZH6U621fjTqE8RgkSuzy%2B0oVp1TiNRP5iBraotAw95AbNMLrOx26jLoLOKZR7oER5swUgXDAw%2F%2Fo6vChhCJgOs1KSDoMfNXEz1t8kKW8T7HH5%2B9NJgF%2BoA5nCOa5QW1WvwtWCKQc3YcL%2Bg%2BrQzTWL4IaacSLK7VDqE8hMVeMEoS6wDOYdY2FQn%2Fr%2FZOtRBufUgqy%2FWfYncHExXX%2BoD%2FsXa6plyYwdEdJe9D7yooBBnxDqI6nG%2F8ArMEQn8n3fFBzigAB2UcJOQ3kf0ksW7%2B3ukI1mn0AIMTaBl%2Faei1VYkDQ%2BEXHH9MRaVqaB1FlvgTBkJSS3hfZkSXy8e7pGlCpkSDc1P%2F9qRsgHbvoZ%2FhB5NwMr18pIHNmOXxvs2Go6BUlpygGgwWbU6UcyZdeeAiedN0YkAFK%2FuPzCjOOnZDnLyFpFRv4zQ15v7Gq9Om3Qm%2Bz%2F6pvGHpfRATJ3ZdLv1UtFbBAdHt%2FSUBxBQ4%2BgCltg8%2B2rjGZ2WMqi%2FXw4s0wJzik9VXPpd9%2FR6Jaf2DXY8wVsWArVR4yNoJb1ihFqYLuORzK9RgbGVpk8JNAHy5p6eRQW5HfPqisi7T%2FFI9JKffIoqQw592WvwY6pgHH11iZE31bWQuQfd79dgARuJG2POjRYaJvAQ%2Bi5%2BAbNI02r6SVh%2FIERvnTtHgOLIm6Lx1BzCfPLBbq3PmZPGWqsMX5Z9sqqF23Em87sjyXioaWgxQuz%2FKSPUiTni%2B%2F5ARGVBldd6mYR5uckMYBPx%2FL%2B5RpvBiWEnQg%2FFpXDzerA%2Fn%2BWSdXyO6dXHcD8UzAsOj4NMQLzWpQxQFKw0zZZF8OIY7NwSsJ&X-Amz-Signature=830c0dfa78da2783a9f6f439197188699b42276948a58c1719dbf5b0c1b5cebb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
