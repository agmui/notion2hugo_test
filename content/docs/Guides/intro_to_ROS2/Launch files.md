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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI65QAS4%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T041400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCy7NtVyi5X%2FyMpmekZ4jXW1FKCuRDJ7%2FY7FNpYAAr5owIhAIQPyMJWr%2FVbGHkMf%2B1cyYmR6tpMHs0uxgRA3Zp%2BhgP6KogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTh%2B11finXK%2B72tGUq3APBgxoTI0O3KIVG6Wj%2B7Bx3x2pycOFI5WCgI5L%2BrSUaxkcrrUQ0K6otBCutc%2Frjk3UycW%2FrzkeVb9OxDT6%2B9xl4OKRZUkjy4gsO961%2FW2Uvxwjx6yXyi1LkpU2UfUv4%2F6sn0fjqpOF7rrOf1r%2FQDKcWKXExQ5AqIkEYMZJ5LxOZFVaR%2FtWZkJFXbeuxbY9Z2xyXu5bggp%2BmPRXzLf0NHDcBoTCX1sz%2BJAuntBhvwlsFts%2F4F7ImuFUjT1A4LcldmWj8aVGgvJOmTa68o%2FdB00xmusW3iDC6YbV9n9Plxim0B7UR04Xl6nrfqP04KL%2FQ3dAwkp0GgRdbfIKfh%2Fhnz27sn0WutOe86WMbtz%2FUEfN9WgogAKTWWYwajrLBX9SaisQvVQBb%2Ba9YoYCoAERqoU2ZqaHThrN6xBNo3p3xduSgCd7cR8mVUv%2FlMcMjcEGEVVwn8X7lzbIMCb4VZnupzg5d%2Bpvh4S5Oo19j5j2ky2BHDpTd5Clwg7LO8LgzFtAh9IkT6e2FZooFWq1f%2FroB%2FWIwvRWiZ2FjfR13guFgYKeZms1jY1G6MLvYkI2h3b0jZDyWIr2IOVD5UuejGhIlW2XB9cKq9T37UQK6m2pPZCQdtEJ7abJaec6tQZsFAzCLhoXBBjqkATXMcPLYUU1hhknv5DmtbBDIRLVbeSc4WVd8dHrlTkD4JTVUwcGE59pK4qncT%2FL9U7bff9Hsy5aq0S6K%2BcbmE91sbMORtX6UMpLJ9OBsQq9V9cj8niDdH3WeYTNBsaluua7Vcr9Kvo%2FkMqJSbESZU2R%2BxhZyiQUSJWYDVeDHIId5q1FeO4jyntITkQH%2BfSzBr4IilGSVdbs4AEXctRy0BJbMNq5M&X-Amz-Signature=093c9adebc8c027dba9b9adc3a22bfa76c224837601ef14174610cde5604559e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI65QAS4%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T041400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCy7NtVyi5X%2FyMpmekZ4jXW1FKCuRDJ7%2FY7FNpYAAr5owIhAIQPyMJWr%2FVbGHkMf%2B1cyYmR6tpMHs0uxgRA3Zp%2BhgP6KogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTh%2B11finXK%2B72tGUq3APBgxoTI0O3KIVG6Wj%2B7Bx3x2pycOFI5WCgI5L%2BrSUaxkcrrUQ0K6otBCutc%2Frjk3UycW%2FrzkeVb9OxDT6%2B9xl4OKRZUkjy4gsO961%2FW2Uvxwjx6yXyi1LkpU2UfUv4%2F6sn0fjqpOF7rrOf1r%2FQDKcWKXExQ5AqIkEYMZJ5LxOZFVaR%2FtWZkJFXbeuxbY9Z2xyXu5bggp%2BmPRXzLf0NHDcBoTCX1sz%2BJAuntBhvwlsFts%2F4F7ImuFUjT1A4LcldmWj8aVGgvJOmTa68o%2FdB00xmusW3iDC6YbV9n9Plxim0B7UR04Xl6nrfqP04KL%2FQ3dAwkp0GgRdbfIKfh%2Fhnz27sn0WutOe86WMbtz%2FUEfN9WgogAKTWWYwajrLBX9SaisQvVQBb%2Ba9YoYCoAERqoU2ZqaHThrN6xBNo3p3xduSgCd7cR8mVUv%2FlMcMjcEGEVVwn8X7lzbIMCb4VZnupzg5d%2Bpvh4S5Oo19j5j2ky2BHDpTd5Clwg7LO8LgzFtAh9IkT6e2FZooFWq1f%2FroB%2FWIwvRWiZ2FjfR13guFgYKeZms1jY1G6MLvYkI2h3b0jZDyWIr2IOVD5UuejGhIlW2XB9cKq9T37UQK6m2pPZCQdtEJ7abJaec6tQZsFAzCLhoXBBjqkATXMcPLYUU1hhknv5DmtbBDIRLVbeSc4WVd8dHrlTkD4JTVUwcGE59pK4qncT%2FL9U7bff9Hsy5aq0S6K%2BcbmE91sbMORtX6UMpLJ9OBsQq9V9cj8niDdH3WeYTNBsaluua7Vcr9Kvo%2FkMqJSbESZU2R%2BxhZyiQUSJWYDVeDHIId5q1FeO4jyntITkQH%2BfSzBr4IilGSVdbs4AEXctRy0BJbMNq5M&X-Amz-Signature=78aa14723e0819316c3a1f94a56ec01d023140bf2c89452f39b4b66c73692bb2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI65QAS4%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T041400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCy7NtVyi5X%2FyMpmekZ4jXW1FKCuRDJ7%2FY7FNpYAAr5owIhAIQPyMJWr%2FVbGHkMf%2B1cyYmR6tpMHs0uxgRA3Zp%2BhgP6KogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTh%2B11finXK%2B72tGUq3APBgxoTI0O3KIVG6Wj%2B7Bx3x2pycOFI5WCgI5L%2BrSUaxkcrrUQ0K6otBCutc%2Frjk3UycW%2FrzkeVb9OxDT6%2B9xl4OKRZUkjy4gsO961%2FW2Uvxwjx6yXyi1LkpU2UfUv4%2F6sn0fjqpOF7rrOf1r%2FQDKcWKXExQ5AqIkEYMZJ5LxOZFVaR%2FtWZkJFXbeuxbY9Z2xyXu5bggp%2BmPRXzLf0NHDcBoTCX1sz%2BJAuntBhvwlsFts%2F4F7ImuFUjT1A4LcldmWj8aVGgvJOmTa68o%2FdB00xmusW3iDC6YbV9n9Plxim0B7UR04Xl6nrfqP04KL%2FQ3dAwkp0GgRdbfIKfh%2Fhnz27sn0WutOe86WMbtz%2FUEfN9WgogAKTWWYwajrLBX9SaisQvVQBb%2Ba9YoYCoAERqoU2ZqaHThrN6xBNo3p3xduSgCd7cR8mVUv%2FlMcMjcEGEVVwn8X7lzbIMCb4VZnupzg5d%2Bpvh4S5Oo19j5j2ky2BHDpTd5Clwg7LO8LgzFtAh9IkT6e2FZooFWq1f%2FroB%2FWIwvRWiZ2FjfR13guFgYKeZms1jY1G6MLvYkI2h3b0jZDyWIr2IOVD5UuejGhIlW2XB9cKq9T37UQK6m2pPZCQdtEJ7abJaec6tQZsFAzCLhoXBBjqkATXMcPLYUU1hhknv5DmtbBDIRLVbeSc4WVd8dHrlTkD4JTVUwcGE59pK4qncT%2FL9U7bff9Hsy5aq0S6K%2BcbmE91sbMORtX6UMpLJ9OBsQq9V9cj8niDdH3WeYTNBsaluua7Vcr9Kvo%2FkMqJSbESZU2R%2BxhZyiQUSJWYDVeDHIId5q1FeO4jyntITkQH%2BfSzBr4IilGSVdbs4AEXctRy0BJbMNq5M&X-Amz-Signature=12352161d747b391317adf0d4cd4e486cddc13a3c4678867d13e741589b08f71&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
