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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ4JE2CM%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCVjdan%2BND3KnVrBeWKKCrdKU8gjPtl1T1tOrpNqa%2FdRQIhAIY9U6nh0l%2BNmUFzIcbheVzgRSwk0HeLMalBa3wV75i3KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwyxk3exmyiZRxgztEq3AMS3NcVI7kr9Om3ly5rJJ1utAcHXMAa3sK5xkicwCjHeHtHzVOi3PSpfaSuSqmGdGaidVGJD%2BRmGX%2FR4V6xkE59%2Bpv09moDXG7InuS96Ra16AwzIeYiBgYur7ayJmkUYjAj1398ddHLHhJBhIU%2FntssalCXKCXoUSIA4GUHE7E3kwCrMsbBHsYo8n0CjVgVS0VKXQ5LqQEk%2BNucKp1KpA%2BVkgYBRzxSKFtnQUf5LmvHSVa%2FQ0aV1m5V3iCEPMX6gfcC3U4O7A88Hqza%2B71sbX%2FMhzJ6oUQ3%2BM6G9TQKV%2FMiJt1QHm0ghuJvT0LVExxOrerIddKacwxrUlYSGxGx0EKxE%2Bba%2BjVqy7QHUL9%2BVXZk03e4XmwYwcadKd9C9y63kZfSenaQ%2BBFXi4hmc0a7FL%2BM6i6jZLwM7mmkxAKJnLvj1oW3ZnburjVLnHd%2BOwcBqd00Up5cJSYCwRqdG7lgywopw1HhHpr6uu9wRvq9UfUbTLLAY3qLUmUUEh3LybEq2m%2FElobXwXIrrBKoe4n9INhSvULzxar3kdowXAwmh7SGe5tZkGO6aijzH%2FT0%2FPvOWalDjcJsVnwooSRDZdPud6ffkjU96%2B8ilEt3iVj%2FMysdV5N4lqAoAo9tvXbVHDD5ttfEBjqkAS1kGOU%2BjfqWS4iQVNGufouVexjqQLxUm1w%2FeBSLnk56CkCRSfuecWBwpCo9kzoQZJ7YxzLlrDr0neHT9aj0wBcc%2FkRtd2Rqcnu5w1dW1ok1tXpAWSgeQsMEJgoP3%2BWOUEIXJYZwoe34ZCsfvCBWcccKk4VBLWXhBnmc9jVT9uK%2BK%2FOPYvq6LmOCgzj%2FF710As1TzHu80sH0AimpvdZArK0gbP0d&X-Amz-Signature=e3b473632a173176a9e9114ee38007e37d92655cb7613b583e1bcb41f533737c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ4JE2CM%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCVjdan%2BND3KnVrBeWKKCrdKU8gjPtl1T1tOrpNqa%2FdRQIhAIY9U6nh0l%2BNmUFzIcbheVzgRSwk0HeLMalBa3wV75i3KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwyxk3exmyiZRxgztEq3AMS3NcVI7kr9Om3ly5rJJ1utAcHXMAa3sK5xkicwCjHeHtHzVOi3PSpfaSuSqmGdGaidVGJD%2BRmGX%2FR4V6xkE59%2Bpv09moDXG7InuS96Ra16AwzIeYiBgYur7ayJmkUYjAj1398ddHLHhJBhIU%2FntssalCXKCXoUSIA4GUHE7E3kwCrMsbBHsYo8n0CjVgVS0VKXQ5LqQEk%2BNucKp1KpA%2BVkgYBRzxSKFtnQUf5LmvHSVa%2FQ0aV1m5V3iCEPMX6gfcC3U4O7A88Hqza%2B71sbX%2FMhzJ6oUQ3%2BM6G9TQKV%2FMiJt1QHm0ghuJvT0LVExxOrerIddKacwxrUlYSGxGx0EKxE%2Bba%2BjVqy7QHUL9%2BVXZk03e4XmwYwcadKd9C9y63kZfSenaQ%2BBFXi4hmc0a7FL%2BM6i6jZLwM7mmkxAKJnLvj1oW3ZnburjVLnHd%2BOwcBqd00Up5cJSYCwRqdG7lgywopw1HhHpr6uu9wRvq9UfUbTLLAY3qLUmUUEh3LybEq2m%2FElobXwXIrrBKoe4n9INhSvULzxar3kdowXAwmh7SGe5tZkGO6aijzH%2FT0%2FPvOWalDjcJsVnwooSRDZdPud6ffkjU96%2B8ilEt3iVj%2FMysdV5N4lqAoAo9tvXbVHDD5ttfEBjqkAS1kGOU%2BjfqWS4iQVNGufouVexjqQLxUm1w%2FeBSLnk56CkCRSfuecWBwpCo9kzoQZJ7YxzLlrDr0neHT9aj0wBcc%2FkRtd2Rqcnu5w1dW1ok1tXpAWSgeQsMEJgoP3%2BWOUEIXJYZwoe34ZCsfvCBWcccKk4VBLWXhBnmc9jVT9uK%2BK%2FOPYvq6LmOCgzj%2FF710As1TzHu80sH0AimpvdZArK0gbP0d&X-Amz-Signature=a0a05ff6bbc405dd8d1f89f0df48075d547d80e6b20a9889d0cac983e4bf9090&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ4JE2CM%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCVjdan%2BND3KnVrBeWKKCrdKU8gjPtl1T1tOrpNqa%2FdRQIhAIY9U6nh0l%2BNmUFzIcbheVzgRSwk0HeLMalBa3wV75i3KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwyxk3exmyiZRxgztEq3AMS3NcVI7kr9Om3ly5rJJ1utAcHXMAa3sK5xkicwCjHeHtHzVOi3PSpfaSuSqmGdGaidVGJD%2BRmGX%2FR4V6xkE59%2Bpv09moDXG7InuS96Ra16AwzIeYiBgYur7ayJmkUYjAj1398ddHLHhJBhIU%2FntssalCXKCXoUSIA4GUHE7E3kwCrMsbBHsYo8n0CjVgVS0VKXQ5LqQEk%2BNucKp1KpA%2BVkgYBRzxSKFtnQUf5LmvHSVa%2FQ0aV1m5V3iCEPMX6gfcC3U4O7A88Hqza%2B71sbX%2FMhzJ6oUQ3%2BM6G9TQKV%2FMiJt1QHm0ghuJvT0LVExxOrerIddKacwxrUlYSGxGx0EKxE%2Bba%2BjVqy7QHUL9%2BVXZk03e4XmwYwcadKd9C9y63kZfSenaQ%2BBFXi4hmc0a7FL%2BM6i6jZLwM7mmkxAKJnLvj1oW3ZnburjVLnHd%2BOwcBqd00Up5cJSYCwRqdG7lgywopw1HhHpr6uu9wRvq9UfUbTLLAY3qLUmUUEh3LybEq2m%2FElobXwXIrrBKoe4n9INhSvULzxar3kdowXAwmh7SGe5tZkGO6aijzH%2FT0%2FPvOWalDjcJsVnwooSRDZdPud6ffkjU96%2B8ilEt3iVj%2FMysdV5N4lqAoAo9tvXbVHDD5ttfEBjqkAS1kGOU%2BjfqWS4iQVNGufouVexjqQLxUm1w%2FeBSLnk56CkCRSfuecWBwpCo9kzoQZJ7YxzLlrDr0neHT9aj0wBcc%2FkRtd2Rqcnu5w1dW1ok1tXpAWSgeQsMEJgoP3%2BWOUEIXJYZwoe34ZCsfvCBWcccKk4VBLWXhBnmc9jVT9uK%2BK%2FOPYvq6LmOCgzj%2FF710As1TzHu80sH0AimpvdZArK0gbP0d&X-Amz-Signature=37a33f003cd6e3e76a1c2df3762b5ff7a01652618ddd060f1e3773d05515e5ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
