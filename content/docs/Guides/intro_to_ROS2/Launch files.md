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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DPZM4QV%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T003715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCHn4EA5%2BMRemzao7d%2FMiVZV7WRt%2BqQ%2FQEMBGzXrD4N6AIhAJ%2BushwapL8Z7yrpsrdkBavbKIyK5jg2xtrPZLa6EWtNKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxntdC9dMvg0b2Ueesq3APcUUNImbjiOHZQSgkiMxKpooLEsMzPY%2B7EZFLjt5Gm7bcMWwQgPv%2BGsro3rt%2BK8LWlxht5637g09lsEBhEb4FSj1tGbiv5HFS763gdZmXVhgmC5qhFjTU6EMc3XmjjOhZBKmlgXbbgmLC%2F83phg%2B8BBPICLm3sFmKOIi67QMarxEYiB9OCSIzH5FcDPEGubCkTQB9Q3eQtgo1frt3%2FvkpY08ahp6aYGrlDoaPq9G2zNoQZDKJ1IZPrdbKz4hsGACgMhPPNCLQ%2B3KZVHI11FZoKnqBG3mYrTAbMlAwhWRO2f42x1sQbMkFlnpvDPH9kJk64sjKvwxI7ThDN3pYSK%2BD37AhsKMFxsy6JXXU0CjwfsTLNXMESb2yp0YCZZCNEhqxiJ0IXKCUYHGT9B%2F%2BNj1ISP2ZKq0Hb%2Biy%2B39PfDwIQS2hK4%2BRumP4EuYKi%2BPc4g5lrWbrosPDMZA1qKnFwwrHyZy%2BJairdoKSPpqIepVJolI0NzR5P9ZI5rbwo5Eftm6aYUrXDrKRF%2BMNO4lW3DGVGxP2Ighf1Sdt9y37l8de9L%2BPzjVOX40siBUaHZVKjer%2F1vO1mr9f7XXS%2FyO2ZoZIGHKQYoDRM3MOrnEo7rRm%2FwD2ATce%2BZhIVx1f3GzCS9%2Fe%2BBjqkAWpP1%2F2CdpORSxnTEhlYSkzJOHM1TPraPxhYJ6R0rapn5aKJRA%2FHcWlTJb8O3BWNP1MfGtK7L6jhgPRuNxP4IGqCwdzzXbR%2FQE8ugCs9gnOdm3n%2B%2FRGJmHxZFunMV5Opqj9jfL9zl9VFyDsH%2BmZSMAgCZjrYD9qRq3CYpI%2F0yEG3tjhqWWuAIEnH%2F1QX8yWMVQQA3KQeHu0irdNBv7leg3lLrDEY&X-Amz-Signature=edfe44bc38f5e625cd289d3d0030b3b11f43d99bdb0380eeea1925e27ec9e36c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DPZM4QV%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T003715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCHn4EA5%2BMRemzao7d%2FMiVZV7WRt%2BqQ%2FQEMBGzXrD4N6AIhAJ%2BushwapL8Z7yrpsrdkBavbKIyK5jg2xtrPZLa6EWtNKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxntdC9dMvg0b2Ueesq3APcUUNImbjiOHZQSgkiMxKpooLEsMzPY%2B7EZFLjt5Gm7bcMWwQgPv%2BGsro3rt%2BK8LWlxht5637g09lsEBhEb4FSj1tGbiv5HFS763gdZmXVhgmC5qhFjTU6EMc3XmjjOhZBKmlgXbbgmLC%2F83phg%2B8BBPICLm3sFmKOIi67QMarxEYiB9OCSIzH5FcDPEGubCkTQB9Q3eQtgo1frt3%2FvkpY08ahp6aYGrlDoaPq9G2zNoQZDKJ1IZPrdbKz4hsGACgMhPPNCLQ%2B3KZVHI11FZoKnqBG3mYrTAbMlAwhWRO2f42x1sQbMkFlnpvDPH9kJk64sjKvwxI7ThDN3pYSK%2BD37AhsKMFxsy6JXXU0CjwfsTLNXMESb2yp0YCZZCNEhqxiJ0IXKCUYHGT9B%2F%2BNj1ISP2ZKq0Hb%2Biy%2B39PfDwIQS2hK4%2BRumP4EuYKi%2BPc4g5lrWbrosPDMZA1qKnFwwrHyZy%2BJairdoKSPpqIepVJolI0NzR5P9ZI5rbwo5Eftm6aYUrXDrKRF%2BMNO4lW3DGVGxP2Ighf1Sdt9y37l8de9L%2BPzjVOX40siBUaHZVKjer%2F1vO1mr9f7XXS%2FyO2ZoZIGHKQYoDRM3MOrnEo7rRm%2FwD2ATce%2BZhIVx1f3GzCS9%2Fe%2BBjqkAWpP1%2F2CdpORSxnTEhlYSkzJOHM1TPraPxhYJ6R0rapn5aKJRA%2FHcWlTJb8O3BWNP1MfGtK7L6jhgPRuNxP4IGqCwdzzXbR%2FQE8ugCs9gnOdm3n%2B%2FRGJmHxZFunMV5Opqj9jfL9zl9VFyDsH%2BmZSMAgCZjrYD9qRq3CYpI%2F0yEG3tjhqWWuAIEnH%2F1QX8yWMVQQA3KQeHu0irdNBv7leg3lLrDEY&X-Amz-Signature=81bd284fcb319f07b6f4b3f4c3e367f68613890072b96309d251bfc4b157fa87&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DPZM4QV%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T003715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCHn4EA5%2BMRemzao7d%2FMiVZV7WRt%2BqQ%2FQEMBGzXrD4N6AIhAJ%2BushwapL8Z7yrpsrdkBavbKIyK5jg2xtrPZLa6EWtNKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxntdC9dMvg0b2Ueesq3APcUUNImbjiOHZQSgkiMxKpooLEsMzPY%2B7EZFLjt5Gm7bcMWwQgPv%2BGsro3rt%2BK8LWlxht5637g09lsEBhEb4FSj1tGbiv5HFS763gdZmXVhgmC5qhFjTU6EMc3XmjjOhZBKmlgXbbgmLC%2F83phg%2B8BBPICLm3sFmKOIi67QMarxEYiB9OCSIzH5FcDPEGubCkTQB9Q3eQtgo1frt3%2FvkpY08ahp6aYGrlDoaPq9G2zNoQZDKJ1IZPrdbKz4hsGACgMhPPNCLQ%2B3KZVHI11FZoKnqBG3mYrTAbMlAwhWRO2f42x1sQbMkFlnpvDPH9kJk64sjKvwxI7ThDN3pYSK%2BD37AhsKMFxsy6JXXU0CjwfsTLNXMESb2yp0YCZZCNEhqxiJ0IXKCUYHGT9B%2F%2BNj1ISP2ZKq0Hb%2Biy%2B39PfDwIQS2hK4%2BRumP4EuYKi%2BPc4g5lrWbrosPDMZA1qKnFwwrHyZy%2BJairdoKSPpqIepVJolI0NzR5P9ZI5rbwo5Eftm6aYUrXDrKRF%2BMNO4lW3DGVGxP2Ighf1Sdt9y37l8de9L%2BPzjVOX40siBUaHZVKjer%2F1vO1mr9f7XXS%2FyO2ZoZIGHKQYoDRM3MOrnEo7rRm%2FwD2ATce%2BZhIVx1f3GzCS9%2Fe%2BBjqkAWpP1%2F2CdpORSxnTEhlYSkzJOHM1TPraPxhYJ6R0rapn5aKJRA%2FHcWlTJb8O3BWNP1MfGtK7L6jhgPRuNxP4IGqCwdzzXbR%2FQE8ugCs9gnOdm3n%2B%2FRGJmHxZFunMV5Opqj9jfL9zl9VFyDsH%2BmZSMAgCZjrYD9qRq3CYpI%2F0yEG3tjhqWWuAIEnH%2F1QX8yWMVQQA3KQeHu0irdNBv7leg3lLrDEY&X-Amz-Signature=893c7e419ac4e27063c610fe9ad3dd07f81f8877dd6ea4972f4fa704889ab5d9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
