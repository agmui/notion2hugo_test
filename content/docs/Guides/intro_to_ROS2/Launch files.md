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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKADGC63%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T060938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA24ogmHHhaYUjzmjQwmZTeI3aqb73yAtl30J7CKMRlQAiBBTs6%2Fq%2F5Q8GNTUhNbxJxSTbgbrJKk7IZZIy%2BPZxhkECqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZp8Sq1%2BZUfYysWQzKtwD%2FTsrbA3EarFryM8NNahMo3p4w2iWEk6VrphVuzopSF3XMTk7GvhnJzPuXKgFTqg4t4WNbNA3OX89tY0qNbX4EwQiYBbkvLBvALJ2%2B5WvLCVZVl1ae0o7wm%2FYbg0eCIoMavbsseKTRpUHZSB2VT7soFDytM1qRJ3n3gNCqtfIIuV74T80f8S%2Ftv57ypWVQ8RUjLQ%2FsOfvx7db4auZbD0qkB1N2hMCYSdarRczuVGtpCBVuBkjhWYBQ%2BXr%2BUIfBJ%2F6X4XOXM4KOICGvzfOXlOaRvVS7ERYC%2BU6%2FtNhi268k%2B6%2B0Jp5C%2F2fLkDbABKsT43NL%2FRpZEwqJvi%2FltVqzEwSaAvP0D17U3TTTFvXVVG9FOZC5AcMTQIaM%2BKqcDx2AVlDawEkiviJclQGMTEtOuAGLW7myxNTsaTZgJ8l%2B7n0km3ufhOVolOAK0SM9RH7kOl%2FDwKzC1XVtzrgesoDNwzUC3KBzJPkjINQ4kHWg1%2BFjvVHCPOkIdtGHoEXwdv5QS%2FhWkklKq0g%2B0g9fiClTuLP%2FY4kt5WXhqhTSWYpmjIsjciR9FZgloLnkb8Hng8fKry9ndKw5iHfaQlXwQhLx6Y5gJMMOTZmtDyY%2FAnBg3ulF5fYsASk%2FCJi9gSiug0w476gvQY6pgFnX5DXWEOIgO54rXaPrGqTqHeRBawLA5KZYcB4baXRxqGHmf8IfwX%2FkMZ29S9g66TtW%2BKfPVJ0QclpKBQ626l9g3YyVeYUqM8UzTeFE9mVeQ7mNEV3l7rar4pOnnKy1RREbrPnjG5wDLRGNsqAZjOdeumg1C5%2FFcrSi2JHh1HGrIrIFKqbPCxyyYgHlVJQQpj8Js2i1R%2FpoQcd1KpPj2D7HyQoImbM&X-Amz-Signature=71366a4b3529c19f63ab38f3eef9a846d6afb2b0256f2bca190d8f4847eedeab&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKADGC63%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T060938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA24ogmHHhaYUjzmjQwmZTeI3aqb73yAtl30J7CKMRlQAiBBTs6%2Fq%2F5Q8GNTUhNbxJxSTbgbrJKk7IZZIy%2BPZxhkECqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZp8Sq1%2BZUfYysWQzKtwD%2FTsrbA3EarFryM8NNahMo3p4w2iWEk6VrphVuzopSF3XMTk7GvhnJzPuXKgFTqg4t4WNbNA3OX89tY0qNbX4EwQiYBbkvLBvALJ2%2B5WvLCVZVl1ae0o7wm%2FYbg0eCIoMavbsseKTRpUHZSB2VT7soFDytM1qRJ3n3gNCqtfIIuV74T80f8S%2Ftv57ypWVQ8RUjLQ%2FsOfvx7db4auZbD0qkB1N2hMCYSdarRczuVGtpCBVuBkjhWYBQ%2BXr%2BUIfBJ%2F6X4XOXM4KOICGvzfOXlOaRvVS7ERYC%2BU6%2FtNhi268k%2B6%2B0Jp5C%2F2fLkDbABKsT43NL%2FRpZEwqJvi%2FltVqzEwSaAvP0D17U3TTTFvXVVG9FOZC5AcMTQIaM%2BKqcDx2AVlDawEkiviJclQGMTEtOuAGLW7myxNTsaTZgJ8l%2B7n0km3ufhOVolOAK0SM9RH7kOl%2FDwKzC1XVtzrgesoDNwzUC3KBzJPkjINQ4kHWg1%2BFjvVHCPOkIdtGHoEXwdv5QS%2FhWkklKq0g%2B0g9fiClTuLP%2FY4kt5WXhqhTSWYpmjIsjciR9FZgloLnkb8Hng8fKry9ndKw5iHfaQlXwQhLx6Y5gJMMOTZmtDyY%2FAnBg3ulF5fYsASk%2FCJi9gSiug0w476gvQY6pgFnX5DXWEOIgO54rXaPrGqTqHeRBawLA5KZYcB4baXRxqGHmf8IfwX%2FkMZ29S9g66TtW%2BKfPVJ0QclpKBQ626l9g3YyVeYUqM8UzTeFE9mVeQ7mNEV3l7rar4pOnnKy1RREbrPnjG5wDLRGNsqAZjOdeumg1C5%2FFcrSi2JHh1HGrIrIFKqbPCxyyYgHlVJQQpj8Js2i1R%2FpoQcd1KpPj2D7HyQoImbM&X-Amz-Signature=e7273103883b85c538d2be2bd031935710cc887d23a8f4dc913111d6bbc508b8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKADGC63%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T060938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA24ogmHHhaYUjzmjQwmZTeI3aqb73yAtl30J7CKMRlQAiBBTs6%2Fq%2F5Q8GNTUhNbxJxSTbgbrJKk7IZZIy%2BPZxhkECqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZp8Sq1%2BZUfYysWQzKtwD%2FTsrbA3EarFryM8NNahMo3p4w2iWEk6VrphVuzopSF3XMTk7GvhnJzPuXKgFTqg4t4WNbNA3OX89tY0qNbX4EwQiYBbkvLBvALJ2%2B5WvLCVZVl1ae0o7wm%2FYbg0eCIoMavbsseKTRpUHZSB2VT7soFDytM1qRJ3n3gNCqtfIIuV74T80f8S%2Ftv57ypWVQ8RUjLQ%2FsOfvx7db4auZbD0qkB1N2hMCYSdarRczuVGtpCBVuBkjhWYBQ%2BXr%2BUIfBJ%2F6X4XOXM4KOICGvzfOXlOaRvVS7ERYC%2BU6%2FtNhi268k%2B6%2B0Jp5C%2F2fLkDbABKsT43NL%2FRpZEwqJvi%2FltVqzEwSaAvP0D17U3TTTFvXVVG9FOZC5AcMTQIaM%2BKqcDx2AVlDawEkiviJclQGMTEtOuAGLW7myxNTsaTZgJ8l%2B7n0km3ufhOVolOAK0SM9RH7kOl%2FDwKzC1XVtzrgesoDNwzUC3KBzJPkjINQ4kHWg1%2BFjvVHCPOkIdtGHoEXwdv5QS%2FhWkklKq0g%2B0g9fiClTuLP%2FY4kt5WXhqhTSWYpmjIsjciR9FZgloLnkb8Hng8fKry9ndKw5iHfaQlXwQhLx6Y5gJMMOTZmtDyY%2FAnBg3ulF5fYsASk%2FCJi9gSiug0w476gvQY6pgFnX5DXWEOIgO54rXaPrGqTqHeRBawLA5KZYcB4baXRxqGHmf8IfwX%2FkMZ29S9g66TtW%2BKfPVJ0QclpKBQ626l9g3YyVeYUqM8UzTeFE9mVeQ7mNEV3l7rar4pOnnKy1RREbrPnjG5wDLRGNsqAZjOdeumg1C5%2FFcrSi2JHh1HGrIrIFKqbPCxyyYgHlVJQQpj8Js2i1R%2FpoQcd1KpPj2D7HyQoImbM&X-Amz-Signature=6f510bcc6782a43a7ec7c3ef6887499501e2ddafd89abd8d2bd6443639f2ccc5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
