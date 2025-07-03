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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JCZ5K3D%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T071108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIHgiLVfqMO7TT%2FayH1CMBsR3AC253XSyFRVDd%2BUn7r2OAiBs%2FVfMc1hB%2B%2B4%2FuWLsuJpG2%2BV4q4C%2BiheagXcBTmpyoSqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BfpiaM5jmy%2FlwjGWKtwDR4du2zrSbZ52%2BFfcxTCefGwKmW%2B7vcD2jKt2mvZLs%2B%2F8Qqf1AD1h6IJB1yQZcA4VJ9V9pBDfjTsb9twUlcTvRfC0atQ1SIIXytnWOUwYUuaTaVfGyAJ7QTUBbsafUtb4qPlE5pJsY2vvzby0QQYvizyf8P2Hemw3tV7ZdkHklCQnzDdZnXk9hY8nBNJpjTcgJl33C6fj4AIU337rHROpcmQRfT2syUcJwjtZzSo2VAKdGAgMl0AgBgc65cUjgYeApCkFknv4B67s84ZQh%2BVbbazvniq8QQUysJ4nTRheYmPr7Ab3UT57R89%2FokSi0uHDE3TmUskMkV3%2FITo4fhoBs5qm86PUhgdotpCQYvFaVWWpo0VjMbVzY3yStJpRb5oIg880m1EA1Lv7SNKcE%2Ff9heb%2FwX%2FwTaWHoEFXYt8EIY9SkSA54sdZD77PXEicM7atZtPC%2FgrWUb9Snz63N%2BGcF%2FHx727lh09oXo5xji9kBu8b9k9WtgZuT5Shd81Niw97x92nGYX1hNcxkoFmrgsOCW2aPSMFVzq5b%2B1dQe84%2B7ZtIVKkx9KEpmKSYinOwo%2B%2BcoYDr78riKa6pcG6BGMwOhUizGpTrl%2FQtOVpbWuxxP2gFm%2BpGSnR8VzXpCsworCYwwY6pgE3gRzL7ZePZhjsUV6MhRK4kDlLwgfnFdjkN4ot07mmfoaWxBnIYw62Bbu45yFvXHtFVCsr%2FC9JZCoEgkdyi0feEkEU9hx1MZX1mHMrd3w%2BlDjOdtGXkjSRlTvG2%2FZKekeeHwMmwj2FB4i2srcSgbtcuqBlxsa9i3l8amO7BfUe%2FFgeFWHiWw8E3HdgIdrER%2BatfaI3Zu5DQ52UKFstK%2FyFaqrMUOV7&X-Amz-Signature=3e8b6edf1f1e5b8338c0ca44dbc0baf26232e5b987256a9c8a2761e6dc730717&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JCZ5K3D%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T071108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIHgiLVfqMO7TT%2FayH1CMBsR3AC253XSyFRVDd%2BUn7r2OAiBs%2FVfMc1hB%2B%2B4%2FuWLsuJpG2%2BV4q4C%2BiheagXcBTmpyoSqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BfpiaM5jmy%2FlwjGWKtwDR4du2zrSbZ52%2BFfcxTCefGwKmW%2B7vcD2jKt2mvZLs%2B%2F8Qqf1AD1h6IJB1yQZcA4VJ9V9pBDfjTsb9twUlcTvRfC0atQ1SIIXytnWOUwYUuaTaVfGyAJ7QTUBbsafUtb4qPlE5pJsY2vvzby0QQYvizyf8P2Hemw3tV7ZdkHklCQnzDdZnXk9hY8nBNJpjTcgJl33C6fj4AIU337rHROpcmQRfT2syUcJwjtZzSo2VAKdGAgMl0AgBgc65cUjgYeApCkFknv4B67s84ZQh%2BVbbazvniq8QQUysJ4nTRheYmPr7Ab3UT57R89%2FokSi0uHDE3TmUskMkV3%2FITo4fhoBs5qm86PUhgdotpCQYvFaVWWpo0VjMbVzY3yStJpRb5oIg880m1EA1Lv7SNKcE%2Ff9heb%2FwX%2FwTaWHoEFXYt8EIY9SkSA54sdZD77PXEicM7atZtPC%2FgrWUb9Snz63N%2BGcF%2FHx727lh09oXo5xji9kBu8b9k9WtgZuT5Shd81Niw97x92nGYX1hNcxkoFmrgsOCW2aPSMFVzq5b%2B1dQe84%2B7ZtIVKkx9KEpmKSYinOwo%2B%2BcoYDr78riKa6pcG6BGMwOhUizGpTrl%2FQtOVpbWuxxP2gFm%2BpGSnR8VzXpCsworCYwwY6pgE3gRzL7ZePZhjsUV6MhRK4kDlLwgfnFdjkN4ot07mmfoaWxBnIYw62Bbu45yFvXHtFVCsr%2FC9JZCoEgkdyi0feEkEU9hx1MZX1mHMrd3w%2BlDjOdtGXkjSRlTvG2%2FZKekeeHwMmwj2FB4i2srcSgbtcuqBlxsa9i3l8amO7BfUe%2FFgeFWHiWw8E3HdgIdrER%2BatfaI3Zu5DQ52UKFstK%2FyFaqrMUOV7&X-Amz-Signature=b007d531f7123dd2d425574cff544c78dd3e5cd9fe977459ba7a3434e21f5e1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JCZ5K3D%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T071109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIHgiLVfqMO7TT%2FayH1CMBsR3AC253XSyFRVDd%2BUn7r2OAiBs%2FVfMc1hB%2B%2B4%2FuWLsuJpG2%2BV4q4C%2BiheagXcBTmpyoSqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BfpiaM5jmy%2FlwjGWKtwDR4du2zrSbZ52%2BFfcxTCefGwKmW%2B7vcD2jKt2mvZLs%2B%2F8Qqf1AD1h6IJB1yQZcA4VJ9V9pBDfjTsb9twUlcTvRfC0atQ1SIIXytnWOUwYUuaTaVfGyAJ7QTUBbsafUtb4qPlE5pJsY2vvzby0QQYvizyf8P2Hemw3tV7ZdkHklCQnzDdZnXk9hY8nBNJpjTcgJl33C6fj4AIU337rHROpcmQRfT2syUcJwjtZzSo2VAKdGAgMl0AgBgc65cUjgYeApCkFknv4B67s84ZQh%2BVbbazvniq8QQUysJ4nTRheYmPr7Ab3UT57R89%2FokSi0uHDE3TmUskMkV3%2FITo4fhoBs5qm86PUhgdotpCQYvFaVWWpo0VjMbVzY3yStJpRb5oIg880m1EA1Lv7SNKcE%2Ff9heb%2FwX%2FwTaWHoEFXYt8EIY9SkSA54sdZD77PXEicM7atZtPC%2FgrWUb9Snz63N%2BGcF%2FHx727lh09oXo5xji9kBu8b9k9WtgZuT5Shd81Niw97x92nGYX1hNcxkoFmrgsOCW2aPSMFVzq5b%2B1dQe84%2B7ZtIVKkx9KEpmKSYinOwo%2B%2BcoYDr78riKa6pcG6BGMwOhUizGpTrl%2FQtOVpbWuxxP2gFm%2BpGSnR8VzXpCsworCYwwY6pgE3gRzL7ZePZhjsUV6MhRK4kDlLwgfnFdjkN4ot07mmfoaWxBnIYw62Bbu45yFvXHtFVCsr%2FC9JZCoEgkdyi0feEkEU9hx1MZX1mHMrd3w%2BlDjOdtGXkjSRlTvG2%2FZKekeeHwMmwj2FB4i2srcSgbtcuqBlxsa9i3l8amO7BfUe%2FFgeFWHiWw8E3HdgIdrER%2BatfaI3Zu5DQ52UKFstK%2FyFaqrMUOV7&X-Amz-Signature=43cf9eaac95d40683d029bbe734c65d6fad45cc017bfabfc227238117e4354ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
