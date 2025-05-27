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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4KGE6UG%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T070933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPOCQqr1mThTeduxrtynX1pSwg66mbPtlXW7Q5jAx4ewIgbyVNx%2FXc%2BrOzm5WVWECHx%2B1lEulFZisDJ5nevkQz358q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDK8QbWKeay0hJFRHUSrcA6uQ66qr2qFZfkHGAWDJSju5g3fYRZsdxUHVmyvra9oaou2emMdGaJn9yAHw1oRPv67MXaN4jgbqJL20T3ECIVGsNBeqdVjcqPaf%2Bd1E7W51pzOCARtE6s6wVEx8U%2BL1iiEljN3o87L1ccpHo8z0Yk7AO9yRMPj0T5IsK00KTXSPn%2BWuzp6%2Bq3fLJ2mq2YaJBrw38wJxqNkkWWYVxyW2u%2BpcJdLiu3r1wpcgQhGm%2B11AuqvQu6205%2BC6y%2BMQymXPWFxt48uwNGMeufXBcOuyLEAoQ%2BWF0Gjqy%2FTrWP1b%2BQEyBM8Sv5v0THKH%2FyPl4fa4yWySTyRrwV4fzJZZSiF%2F9DCuI%2BcoAcp7R74phssc%2FzkTqQYjAYLq%2BhKqK4vj8y%2BEP2H%2Fh8Qozi8MDZIil7ot0StZrwN4BFCWKpdxXR9V2Pgi5uOpUgA5wy18fDTLNfv7%2F6ffKqMBP60KH9q3KpOlZCH%2BbSVLyKsHtrXnH2KDyA06ipk62OqyydY1IErTz5AjmkmQU%2FgGVkbXVkoiua%2BYZ%2FKLjrDdnq8tVCOnilJQG63YFdvWtOj26hCidjucs%2BxEHQ4w0caneTyQgtKy%2Ffu8CObELb4h2Mv%2BppuVF5hmn6522hT5cCCU5JwEHZn7MKq11cEGOqUBIq7X9mT1mD%2BUBPJXrs6focTWZ3XINND7abbijpDVbokJFLxYOxGjYUWLkaxmX7IlEYUkH2Gecs4Y%2BftL1FASXSwHv9RwbDuJ8HXbxPlA6XmMsR3n8hHcJbyu3%2Fxfa321d2oZiqKOEb0IWqx4lyrhIRou1QpYWAUBUaHSNQZRRcYGSlaV1wWJkoinS7WSUAt6sTi4ao1JOfqQaOiKIPPDoMquEyCi&X-Amz-Signature=51e74e9a274db8392cc096be87095ed444f4e6c7f0bc1e3e4471af6fa6ad720c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4KGE6UG%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T070933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPOCQqr1mThTeduxrtynX1pSwg66mbPtlXW7Q5jAx4ewIgbyVNx%2FXc%2BrOzm5WVWECHx%2B1lEulFZisDJ5nevkQz358q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDK8QbWKeay0hJFRHUSrcA6uQ66qr2qFZfkHGAWDJSju5g3fYRZsdxUHVmyvra9oaou2emMdGaJn9yAHw1oRPv67MXaN4jgbqJL20T3ECIVGsNBeqdVjcqPaf%2Bd1E7W51pzOCARtE6s6wVEx8U%2BL1iiEljN3o87L1ccpHo8z0Yk7AO9yRMPj0T5IsK00KTXSPn%2BWuzp6%2Bq3fLJ2mq2YaJBrw38wJxqNkkWWYVxyW2u%2BpcJdLiu3r1wpcgQhGm%2B11AuqvQu6205%2BC6y%2BMQymXPWFxt48uwNGMeufXBcOuyLEAoQ%2BWF0Gjqy%2FTrWP1b%2BQEyBM8Sv5v0THKH%2FyPl4fa4yWySTyRrwV4fzJZZSiF%2F9DCuI%2BcoAcp7R74phssc%2FzkTqQYjAYLq%2BhKqK4vj8y%2BEP2H%2Fh8Qozi8MDZIil7ot0StZrwN4BFCWKpdxXR9V2Pgi5uOpUgA5wy18fDTLNfv7%2F6ffKqMBP60KH9q3KpOlZCH%2BbSVLyKsHtrXnH2KDyA06ipk62OqyydY1IErTz5AjmkmQU%2FgGVkbXVkoiua%2BYZ%2FKLjrDdnq8tVCOnilJQG63YFdvWtOj26hCidjucs%2BxEHQ4w0caneTyQgtKy%2Ffu8CObELb4h2Mv%2BppuVF5hmn6522hT5cCCU5JwEHZn7MKq11cEGOqUBIq7X9mT1mD%2BUBPJXrs6focTWZ3XINND7abbijpDVbokJFLxYOxGjYUWLkaxmX7IlEYUkH2Gecs4Y%2BftL1FASXSwHv9RwbDuJ8HXbxPlA6XmMsR3n8hHcJbyu3%2Fxfa321d2oZiqKOEb0IWqx4lyrhIRou1QpYWAUBUaHSNQZRRcYGSlaV1wWJkoinS7WSUAt6sTi4ao1JOfqQaOiKIPPDoMquEyCi&X-Amz-Signature=089b872bed163b9685c68ead4f3cc1c6eeae4d9f619cbc338c3f87c559f35dca&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4KGE6UG%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T070933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPOCQqr1mThTeduxrtynX1pSwg66mbPtlXW7Q5jAx4ewIgbyVNx%2FXc%2BrOzm5WVWECHx%2B1lEulFZisDJ5nevkQz358q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDK8QbWKeay0hJFRHUSrcA6uQ66qr2qFZfkHGAWDJSju5g3fYRZsdxUHVmyvra9oaou2emMdGaJn9yAHw1oRPv67MXaN4jgbqJL20T3ECIVGsNBeqdVjcqPaf%2Bd1E7W51pzOCARtE6s6wVEx8U%2BL1iiEljN3o87L1ccpHo8z0Yk7AO9yRMPj0T5IsK00KTXSPn%2BWuzp6%2Bq3fLJ2mq2YaJBrw38wJxqNkkWWYVxyW2u%2BpcJdLiu3r1wpcgQhGm%2B11AuqvQu6205%2BC6y%2BMQymXPWFxt48uwNGMeufXBcOuyLEAoQ%2BWF0Gjqy%2FTrWP1b%2BQEyBM8Sv5v0THKH%2FyPl4fa4yWySTyRrwV4fzJZZSiF%2F9DCuI%2BcoAcp7R74phssc%2FzkTqQYjAYLq%2BhKqK4vj8y%2BEP2H%2Fh8Qozi8MDZIil7ot0StZrwN4BFCWKpdxXR9V2Pgi5uOpUgA5wy18fDTLNfv7%2F6ffKqMBP60KH9q3KpOlZCH%2BbSVLyKsHtrXnH2KDyA06ipk62OqyydY1IErTz5AjmkmQU%2FgGVkbXVkoiua%2BYZ%2FKLjrDdnq8tVCOnilJQG63YFdvWtOj26hCidjucs%2BxEHQ4w0caneTyQgtKy%2Ffu8CObELb4h2Mv%2BppuVF5hmn6522hT5cCCU5JwEHZn7MKq11cEGOqUBIq7X9mT1mD%2BUBPJXrs6focTWZ3XINND7abbijpDVbokJFLxYOxGjYUWLkaxmX7IlEYUkH2Gecs4Y%2BftL1FASXSwHv9RwbDuJ8HXbxPlA6XmMsR3n8hHcJbyu3%2Fxfa321d2oZiqKOEb0IWqx4lyrhIRou1QpYWAUBUaHSNQZRRcYGSlaV1wWJkoinS7WSUAt6sTi4ao1JOfqQaOiKIPPDoMquEyCi&X-Amz-Signature=facd92f9922f83136027f113d4fefcc70e3e4f2ffa8b143388262a4871aa5c49&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
