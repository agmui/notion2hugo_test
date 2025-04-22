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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLD5HTSK%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T132053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIALwLErVre7ngBrEZ0mjpFP4U%2FQfvjzERTepSiDi20RqAiAxJGRexDV6Aj2gaSTcFYhvo3lsoIp5p9w%2FonxvKOcfiiqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoJcZoruH%2FiRPFjDmKtwDeSMz%2BNzMjAk9lbATn97gcslG8tYc%2FB99xW41GYZALVba%2Bjm5sCcjlY5XwerCDh6b%2FRqsTZ86wmrIVrgVL9oKB5zBLBfG0BVZsRpffuQDHmLDn7BBbrP9FjkZd0E9jowNxIVUF%2BU%2BAHEBwkD%2FYXoBRr9npCypETEjMDPBwnAzGcYK%2BhDT8P8X9Vp0yjgEcFKilIVQJQPs%2B0x4yqXA1r5vGqza5KI9Cc4kIeHvfmuo0SQR2vsicurn5fNe4a7RHII%2FWE3X8Qttp%2Bh0XXBmX3SWiSq%2FtC%2BDC2zEuCdcqwfq%2BX3HzcWoGkxRzis2lNl%2Fcz2GjNBkNzx4eHgBarY%2F1Gr%2FNO9LgXHnz78BtxDaXFsmVYa4G9ZYO%2BBP9mPrJ0XsdlTw2XuWpzvUA8NJ3ErZNUqT6ldrs%2Fquy4NojZWSxBtfC%2Fw%2FCV5ORYCkPLJWmIXipa4oS6MeO9nMSg6yr04eoMIl4%2BDGvJSwae3fmfmX0aYxq%2BifmfNTOkFOtocwUpJ80JXtxNk%2B%2Fep%2FPw0A6jOGLbWtULA1AnoCujjLjKWDQMuvO%2BSIKFxeVKFTxF5GmoUJrXp3dRfrJvQU3cYKSmV%2BOiXbg0sI%2FMEyXbAVNEgayJ9Ge3SuJ%2BCHXhJvb8MaDkUwuqqewAY6pgGIENujNbgPUvRSI3A1BF%2FQ6%2BvJ6Jsbsk4AgMVM%2B%2BIBqln%2FAHjqUqq7d6dw5t8KSNp7QP7xKgV8OHcLPvoYuVxc%2F52nloJORaTMmYKxxyAzBFPS1Kbp%2BhwiPwO3eiLAeuOxaq%2BU8ENErX%2BW36OsyCrq0Il4c3CNqq4A%2FySG%2F2cpPIkHvw6AOPgmZf1KOy%2BapdZz4h2XtJ2nGn4L0%2F9MfkxbutV41Vx3&X-Amz-Signature=162119f63b5a88b74f2847015c3f1f3e62935b0b6ab08a45d8eeef0fc98903d0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLD5HTSK%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T132053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIALwLErVre7ngBrEZ0mjpFP4U%2FQfvjzERTepSiDi20RqAiAxJGRexDV6Aj2gaSTcFYhvo3lsoIp5p9w%2FonxvKOcfiiqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoJcZoruH%2FiRPFjDmKtwDeSMz%2BNzMjAk9lbATn97gcslG8tYc%2FB99xW41GYZALVba%2Bjm5sCcjlY5XwerCDh6b%2FRqsTZ86wmrIVrgVL9oKB5zBLBfG0BVZsRpffuQDHmLDn7BBbrP9FjkZd0E9jowNxIVUF%2BU%2BAHEBwkD%2FYXoBRr9npCypETEjMDPBwnAzGcYK%2BhDT8P8X9Vp0yjgEcFKilIVQJQPs%2B0x4yqXA1r5vGqza5KI9Cc4kIeHvfmuo0SQR2vsicurn5fNe4a7RHII%2FWE3X8Qttp%2Bh0XXBmX3SWiSq%2FtC%2BDC2zEuCdcqwfq%2BX3HzcWoGkxRzis2lNl%2Fcz2GjNBkNzx4eHgBarY%2F1Gr%2FNO9LgXHnz78BtxDaXFsmVYa4G9ZYO%2BBP9mPrJ0XsdlTw2XuWpzvUA8NJ3ErZNUqT6ldrs%2Fquy4NojZWSxBtfC%2Fw%2FCV5ORYCkPLJWmIXipa4oS6MeO9nMSg6yr04eoMIl4%2BDGvJSwae3fmfmX0aYxq%2BifmfNTOkFOtocwUpJ80JXtxNk%2B%2Fep%2FPw0A6jOGLbWtULA1AnoCujjLjKWDQMuvO%2BSIKFxeVKFTxF5GmoUJrXp3dRfrJvQU3cYKSmV%2BOiXbg0sI%2FMEyXbAVNEgayJ9Ge3SuJ%2BCHXhJvb8MaDkUwuqqewAY6pgGIENujNbgPUvRSI3A1BF%2FQ6%2BvJ6Jsbsk4AgMVM%2B%2BIBqln%2FAHjqUqq7d6dw5t8KSNp7QP7xKgV8OHcLPvoYuVxc%2F52nloJORaTMmYKxxyAzBFPS1Kbp%2BhwiPwO3eiLAeuOxaq%2BU8ENErX%2BW36OsyCrq0Il4c3CNqq4A%2FySG%2F2cpPIkHvw6AOPgmZf1KOy%2BapdZz4h2XtJ2nGn4L0%2F9MfkxbutV41Vx3&X-Amz-Signature=a77b02cbe56ef901a1818b7d7bc0caa3cd511b52c909cde9035f76c88f1510a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLD5HTSK%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T132053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIALwLErVre7ngBrEZ0mjpFP4U%2FQfvjzERTepSiDi20RqAiAxJGRexDV6Aj2gaSTcFYhvo3lsoIp5p9w%2FonxvKOcfiiqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoJcZoruH%2FiRPFjDmKtwDeSMz%2BNzMjAk9lbATn97gcslG8tYc%2FB99xW41GYZALVba%2Bjm5sCcjlY5XwerCDh6b%2FRqsTZ86wmrIVrgVL9oKB5zBLBfG0BVZsRpffuQDHmLDn7BBbrP9FjkZd0E9jowNxIVUF%2BU%2BAHEBwkD%2FYXoBRr9npCypETEjMDPBwnAzGcYK%2BhDT8P8X9Vp0yjgEcFKilIVQJQPs%2B0x4yqXA1r5vGqza5KI9Cc4kIeHvfmuo0SQR2vsicurn5fNe4a7RHII%2FWE3X8Qttp%2Bh0XXBmX3SWiSq%2FtC%2BDC2zEuCdcqwfq%2BX3HzcWoGkxRzis2lNl%2Fcz2GjNBkNzx4eHgBarY%2F1Gr%2FNO9LgXHnz78BtxDaXFsmVYa4G9ZYO%2BBP9mPrJ0XsdlTw2XuWpzvUA8NJ3ErZNUqT6ldrs%2Fquy4NojZWSxBtfC%2Fw%2FCV5ORYCkPLJWmIXipa4oS6MeO9nMSg6yr04eoMIl4%2BDGvJSwae3fmfmX0aYxq%2BifmfNTOkFOtocwUpJ80JXtxNk%2B%2Fep%2FPw0A6jOGLbWtULA1AnoCujjLjKWDQMuvO%2BSIKFxeVKFTxF5GmoUJrXp3dRfrJvQU3cYKSmV%2BOiXbg0sI%2FMEyXbAVNEgayJ9Ge3SuJ%2BCHXhJvb8MaDkUwuqqewAY6pgGIENujNbgPUvRSI3A1BF%2FQ6%2BvJ6Jsbsk4AgMVM%2B%2BIBqln%2FAHjqUqq7d6dw5t8KSNp7QP7xKgV8OHcLPvoYuVxc%2F52nloJORaTMmYKxxyAzBFPS1Kbp%2BhwiPwO3eiLAeuOxaq%2BU8ENErX%2BW36OsyCrq0Il4c3CNqq4A%2FySG%2F2cpPIkHvw6AOPgmZf1KOy%2BapdZz4h2XtJ2nGn4L0%2F9MfkxbutV41Vx3&X-Amz-Signature=37e56d3f167891b71730e72b3d5252f12bd22aafcf17d17d141bdc1f38b86b82&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
