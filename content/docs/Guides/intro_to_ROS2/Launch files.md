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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D36FRVY%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T034051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHrmStqK2BN7NoW%2Bm4L33lAqKZ2fPZB5RcTPPq7BYWFaAiBV2DY4h7wT0FkUq68hLfMGQ0vGe1jjezFfbVHH%2BA54OCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzDHRMxKB6biLdAE0KtwD0nFrjiEKni6j5NRXMBS%2BFUb4EC4Q80BNhLvPLIwlgGwVmhPqnqVOVCaC%2F22LPFwPa%2F6IQYnitz9lLpveC5Wios%2BKFfF5f%2B4wKzvaD88BDhGO8FbChiNPQF1BR%2Fe5r5oon8EaMSQszFYfcBPx2DsfGFMnPJIoTjOG8KVggLLNHfGtyxjKiUrxmFc%2Fqb5YVnnvL7KuImKAB6e%2F9uyvxYn3FNZufyAxPoOLfmR6IJfgX%2FwGoiDUk3rFbpvBC7NxBlwDY2IcQz7w6zpeG9zK1qZFP2tzR0%2FpPWGAV8hkYnLFpR%2FlL1qaI5sIa3XNcdrqMvsp8%2B%2F%2BIcEoxpDar5a%2BLafv8oVuFGtQogUdQziYD9oUfemBc5%2BtVuJDkobIWgxqsg4lXCYuU1kfRkPuR4gW3I%2Bw6DuXf3FgCWnQ4sJvgIJpbBciOj6nn%2B4v5tHV8M9BqwuWZ97xG4sW6yTjk%2FPrIUMxy4R1wjmzm4tE%2FMaZ8VOm78m%2FXxHIVwSoD93GdVSpDwa5a1xEc77C3B3hkFePowBfnjBybobmbtvTz30fXrHihRCuI7rAdWfVaUSz0QS4rsK1LhWZ8VKIe2o7ONxNgRawroTS2CGlcDdQaNxU1PRYamnZKUjl0Igx5DNEZaEw9YPOwgY6pgEWbIy83Ey1a6HYXJAMmTxD3B6M39SnOu4nUkwTeS1FoIGq9NUwwR0KOjXmLFJxxFEPXfoa2%2F9uxiKWlseKGy7b%2FfLgfcW7S74%2B34f8hF5u%2BP39vfnZv9yqiQsUjiURQX0y0o5lJNkAt9qyYd1P9n9cPF%2BcKA6YR3DqgUtNXmomM627B0vbJ%2F%2BrQg8Wwcd7lClgWJmBCRHRrqYH1AWK5rmbK7fXUOtB&X-Amz-Signature=5a416be85689289f7f4d59596b02a631846be45d14747c852dd8895a916d485d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D36FRVY%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T034051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHrmStqK2BN7NoW%2Bm4L33lAqKZ2fPZB5RcTPPq7BYWFaAiBV2DY4h7wT0FkUq68hLfMGQ0vGe1jjezFfbVHH%2BA54OCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzDHRMxKB6biLdAE0KtwD0nFrjiEKni6j5NRXMBS%2BFUb4EC4Q80BNhLvPLIwlgGwVmhPqnqVOVCaC%2F22LPFwPa%2F6IQYnitz9lLpveC5Wios%2BKFfF5f%2B4wKzvaD88BDhGO8FbChiNPQF1BR%2Fe5r5oon8EaMSQszFYfcBPx2DsfGFMnPJIoTjOG8KVggLLNHfGtyxjKiUrxmFc%2Fqb5YVnnvL7KuImKAB6e%2F9uyvxYn3FNZufyAxPoOLfmR6IJfgX%2FwGoiDUk3rFbpvBC7NxBlwDY2IcQz7w6zpeG9zK1qZFP2tzR0%2FpPWGAV8hkYnLFpR%2FlL1qaI5sIa3XNcdrqMvsp8%2B%2F%2BIcEoxpDar5a%2BLafv8oVuFGtQogUdQziYD9oUfemBc5%2BtVuJDkobIWgxqsg4lXCYuU1kfRkPuR4gW3I%2Bw6DuXf3FgCWnQ4sJvgIJpbBciOj6nn%2B4v5tHV8M9BqwuWZ97xG4sW6yTjk%2FPrIUMxy4R1wjmzm4tE%2FMaZ8VOm78m%2FXxHIVwSoD93GdVSpDwa5a1xEc77C3B3hkFePowBfnjBybobmbtvTz30fXrHihRCuI7rAdWfVaUSz0QS4rsK1LhWZ8VKIe2o7ONxNgRawroTS2CGlcDdQaNxU1PRYamnZKUjl0Igx5DNEZaEw9YPOwgY6pgEWbIy83Ey1a6HYXJAMmTxD3B6M39SnOu4nUkwTeS1FoIGq9NUwwR0KOjXmLFJxxFEPXfoa2%2F9uxiKWlseKGy7b%2FfLgfcW7S74%2B34f8hF5u%2BP39vfnZv9yqiQsUjiURQX0y0o5lJNkAt9qyYd1P9n9cPF%2BcKA6YR3DqgUtNXmomM627B0vbJ%2F%2BrQg8Wwcd7lClgWJmBCRHRrqYH1AWK5rmbK7fXUOtB&X-Amz-Signature=5d710e374d88108ffeb368cdac538dd47ca92797970be6032f83372004beb6d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D36FRVY%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T034051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHrmStqK2BN7NoW%2Bm4L33lAqKZ2fPZB5RcTPPq7BYWFaAiBV2DY4h7wT0FkUq68hLfMGQ0vGe1jjezFfbVHH%2BA54OCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzDHRMxKB6biLdAE0KtwD0nFrjiEKni6j5NRXMBS%2BFUb4EC4Q80BNhLvPLIwlgGwVmhPqnqVOVCaC%2F22LPFwPa%2F6IQYnitz9lLpveC5Wios%2BKFfF5f%2B4wKzvaD88BDhGO8FbChiNPQF1BR%2Fe5r5oon8EaMSQszFYfcBPx2DsfGFMnPJIoTjOG8KVggLLNHfGtyxjKiUrxmFc%2Fqb5YVnnvL7KuImKAB6e%2F9uyvxYn3FNZufyAxPoOLfmR6IJfgX%2FwGoiDUk3rFbpvBC7NxBlwDY2IcQz7w6zpeG9zK1qZFP2tzR0%2FpPWGAV8hkYnLFpR%2FlL1qaI5sIa3XNcdrqMvsp8%2B%2F%2BIcEoxpDar5a%2BLafv8oVuFGtQogUdQziYD9oUfemBc5%2BtVuJDkobIWgxqsg4lXCYuU1kfRkPuR4gW3I%2Bw6DuXf3FgCWnQ4sJvgIJpbBciOj6nn%2B4v5tHV8M9BqwuWZ97xG4sW6yTjk%2FPrIUMxy4R1wjmzm4tE%2FMaZ8VOm78m%2FXxHIVwSoD93GdVSpDwa5a1xEc77C3B3hkFePowBfnjBybobmbtvTz30fXrHihRCuI7rAdWfVaUSz0QS4rsK1LhWZ8VKIe2o7ONxNgRawroTS2CGlcDdQaNxU1PRYamnZKUjl0Igx5DNEZaEw9YPOwgY6pgEWbIy83Ey1a6HYXJAMmTxD3B6M39SnOu4nUkwTeS1FoIGq9NUwwR0KOjXmLFJxxFEPXfoa2%2F9uxiKWlseKGy7b%2FfLgfcW7S74%2B34f8hF5u%2BP39vfnZv9yqiQsUjiURQX0y0o5lJNkAt9qyYd1P9n9cPF%2BcKA6YR3DqgUtNXmomM627B0vbJ%2F%2BrQg8Wwcd7lClgWJmBCRHRrqYH1AWK5rmbK7fXUOtB&X-Amz-Signature=e39cf8002ffec218aea709af84e40ce43c728e636aacf4c3a4b80ad3a84bd69b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
