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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OZ55J2C%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T090824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIATXDtouGsns7aN%2BtBfeHUs9US2qlT6%2FxMHtLpGIt4s0AiBIhRbXttSMxgqN2fpVC7zTYzejF66qibQXDbwEWxAPmiqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BgyaukAHozxlEhJ2KtwDhy98a%2FlqJfw1JaJJrdAG%2BhB%2FfZfEVU8lCe0K%2FoflZ1IDSOoQDlkt%2B%2FSkkv1YByh%2FeGHQBF3JX0yita8OWkYC3%2BTwCg5qNQ5kckVcY4llCGnW4OpxJM%2BbBP5%2BhRCn2TjG4yDCJwTl70XYF8Z3Mcptpx7RQRSuI%2BV79%2F4Vrqx3w63d2JO42UatumuqRCGMUF0vbBxzcTXf7CO6zBGN35OtKHStTE36dHi1Nf9zqnxiMiTtVY3%2FSVr6vKkCdc5297WPVP7dzkFy0IhURUNiUlSG0FNoRUAAp3tScFuKUNEUbaJKzXo12m1CNd1IxhDhZltz9w%2BD1qLVTW5qRNGL3vKyPs9aL8sLj9kckGsAe3iMWO4h0FpH3Io4Gq9hsRClTAyduA9x38Hx3%2Bqjj2jzRY%2BSPmQ1A5UXS9prcY%2F%2BjqkqL538zVdkokP0Ya9UjynBwt5Z5MxxrznZJz2gmzBellksOiArJgK33zaKJWm2R2SF5S0fLIJaQqjUkrCMaBSbePXajUaEZt%2Fy1u8DEcLv8Fb8dJKPVSUqhHB8oJnw8DdPbVuV8khcAEKPyb1q%2BjKw0wLmSR7jETSow95zejntnlyuFq01OzVkTapwtPNnfAJvvQwmiOAZdw7PPRqED4Iw4rzWvQY6pgGuBKBAExnSUQBPUZ4CFoEfiKc89fL15h%2B1enPhcqlmioJR1OOy%2BvD2IaORP3vQZMY8IhQY7CKdnYcURB9VYlnMpV1O8uZgux8AHLd%2F5fjQNye1gzW4LTnwsoYZPU2d9NXSU%2Bb90%2BbkigCfaceWX52oFs3FwLcW6zE0ZjwsK8QM70Meh25dOT1JUiqh5cBa%2B6uJHveM%2BPb01rnQeDQozq97xFPO%2Bkca&X-Amz-Signature=513367672009da60f59d64af67c22014e4d7e6de44ee7d640edf5b8033ba64d9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OZ55J2C%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T090824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIATXDtouGsns7aN%2BtBfeHUs9US2qlT6%2FxMHtLpGIt4s0AiBIhRbXttSMxgqN2fpVC7zTYzejF66qibQXDbwEWxAPmiqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BgyaukAHozxlEhJ2KtwDhy98a%2FlqJfw1JaJJrdAG%2BhB%2FfZfEVU8lCe0K%2FoflZ1IDSOoQDlkt%2B%2FSkkv1YByh%2FeGHQBF3JX0yita8OWkYC3%2BTwCg5qNQ5kckVcY4llCGnW4OpxJM%2BbBP5%2BhRCn2TjG4yDCJwTl70XYF8Z3Mcptpx7RQRSuI%2BV79%2F4Vrqx3w63d2JO42UatumuqRCGMUF0vbBxzcTXf7CO6zBGN35OtKHStTE36dHi1Nf9zqnxiMiTtVY3%2FSVr6vKkCdc5297WPVP7dzkFy0IhURUNiUlSG0FNoRUAAp3tScFuKUNEUbaJKzXo12m1CNd1IxhDhZltz9w%2BD1qLVTW5qRNGL3vKyPs9aL8sLj9kckGsAe3iMWO4h0FpH3Io4Gq9hsRClTAyduA9x38Hx3%2Bqjj2jzRY%2BSPmQ1A5UXS9prcY%2F%2BjqkqL538zVdkokP0Ya9UjynBwt5Z5MxxrznZJz2gmzBellksOiArJgK33zaKJWm2R2SF5S0fLIJaQqjUkrCMaBSbePXajUaEZt%2Fy1u8DEcLv8Fb8dJKPVSUqhHB8oJnw8DdPbVuV8khcAEKPyb1q%2BjKw0wLmSR7jETSow95zejntnlyuFq01OzVkTapwtPNnfAJvvQwmiOAZdw7PPRqED4Iw4rzWvQY6pgGuBKBAExnSUQBPUZ4CFoEfiKc89fL15h%2B1enPhcqlmioJR1OOy%2BvD2IaORP3vQZMY8IhQY7CKdnYcURB9VYlnMpV1O8uZgux8AHLd%2F5fjQNye1gzW4LTnwsoYZPU2d9NXSU%2Bb90%2BbkigCfaceWX52oFs3FwLcW6zE0ZjwsK8QM70Meh25dOT1JUiqh5cBa%2B6uJHveM%2BPb01rnQeDQozq97xFPO%2Bkca&X-Amz-Signature=43d968b6cc1b48924a8306209df58624693984a21b50d33ceb30eb45f510e4cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OZ55J2C%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T090824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIATXDtouGsns7aN%2BtBfeHUs9US2qlT6%2FxMHtLpGIt4s0AiBIhRbXttSMxgqN2fpVC7zTYzejF66qibQXDbwEWxAPmiqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BgyaukAHozxlEhJ2KtwDhy98a%2FlqJfw1JaJJrdAG%2BhB%2FfZfEVU8lCe0K%2FoflZ1IDSOoQDlkt%2B%2FSkkv1YByh%2FeGHQBF3JX0yita8OWkYC3%2BTwCg5qNQ5kckVcY4llCGnW4OpxJM%2BbBP5%2BhRCn2TjG4yDCJwTl70XYF8Z3Mcptpx7RQRSuI%2BV79%2F4Vrqx3w63d2JO42UatumuqRCGMUF0vbBxzcTXf7CO6zBGN35OtKHStTE36dHi1Nf9zqnxiMiTtVY3%2FSVr6vKkCdc5297WPVP7dzkFy0IhURUNiUlSG0FNoRUAAp3tScFuKUNEUbaJKzXo12m1CNd1IxhDhZltz9w%2BD1qLVTW5qRNGL3vKyPs9aL8sLj9kckGsAe3iMWO4h0FpH3Io4Gq9hsRClTAyduA9x38Hx3%2Bqjj2jzRY%2BSPmQ1A5UXS9prcY%2F%2BjqkqL538zVdkokP0Ya9UjynBwt5Z5MxxrznZJz2gmzBellksOiArJgK33zaKJWm2R2SF5S0fLIJaQqjUkrCMaBSbePXajUaEZt%2Fy1u8DEcLv8Fb8dJKPVSUqhHB8oJnw8DdPbVuV8khcAEKPyb1q%2BjKw0wLmSR7jETSow95zejntnlyuFq01OzVkTapwtPNnfAJvvQwmiOAZdw7PPRqED4Iw4rzWvQY6pgGuBKBAExnSUQBPUZ4CFoEfiKc89fL15h%2B1enPhcqlmioJR1OOy%2BvD2IaORP3vQZMY8IhQY7CKdnYcURB9VYlnMpV1O8uZgux8AHLd%2F5fjQNye1gzW4LTnwsoYZPU2d9NXSU%2Bb90%2BbkigCfaceWX52oFs3FwLcW6zE0ZjwsK8QM70Meh25dOT1JUiqh5cBa%2B6uJHveM%2BPb01rnQeDQozq97xFPO%2Bkca&X-Amz-Signature=26ba0592ed49a09c84e4edf17d7a8b7a992c5bddf47fceb1a1361c369d4e7353&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
