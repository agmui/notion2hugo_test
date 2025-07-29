---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5R6RXEN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDQqtGCo7m8NK5%2BLxaLC%2Ff%2FU6HumiYuCeP0liLz4kS8pwIhAIaMvpu%2FxpnfSX%2B9NsTfmg3NTwaIiqkyoqHxGYsRFRlmKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUneiSaCZbRSzGBVEq3APTlDWceKOK5JYIJ7ofuJJcTvubjc3ffWxhwmJb83jxxC9FLvfjAbXMO214rYX%2FKkoHTjf6YeSFZA5JCvyTw%2B8AXuNAZZ7Yj6Rthey2Xcn9r%2F1xqKPm%2B1WPAQKvarUgAinHSZos%2B9NrDHIAPOvqsXshIpVPZCnlYi58y0AQ9reCVVBM0UsV2IVG8naB54H5IGVsNj%2BvKX1J5sdbc9%2FOgLhRPlwA1TfSLPi4mAM9sx2WN8D66zz7L45Vcu1aGZ4%2Fz3gm3BS%2FytnhMeQVg%2Fj2ASvRf%2FhcW6HIjPOI85Y4uozITNfajEiMdNTvTvc6cUA%2BXOwDSpDxTPbs1LLv%2BDc%2FvbJ88FmD84MTaHDF1ygrI2eti4PRT%2FUYZlHH8GwRF0n%2Fa1aQunFCBif1Oe9grSGoByZrOJnP85Hdx7g9q4E8RREAaJSuCs%2Fkio1qqVa9fhWnaaFI6M2JMCXEVuRm22yV16aZxTDHbmAM62KHXjzJ6QOma9az6Wz7E7hgkB7tmSIRqYjbmWFpR%2BL7g9lllxFShGcc1J8FYp8o713B%2BZBGqmSLw6KXklgtjZgLdm%2BS22ySl5bW34Nry5zzCgi%2Fe3vQO27KVG8i4BAt3%2B5MDOEIihy3Z%2BBDexdd0af6yxxMEjC1zaDEBjqkAYRv2IT8fethonOHpJIrw0fnzNtl0kN8Ln5raqIbKWQZnkOSUg8Kbf635fdE1tdb0UVs9GJ5SLO%2BL4dl2TXFzS2eICYT1%2Bs0hR7lyYLzUr0qpvIsOMZQWTnZsEQXajjvelkQVSKsIQ2pLv8D8Mwfso%2B7cMFjvc8%2B%2BMIq%2BvNUxmCzmx4hEenIarO8UUs0AabWgT3AdOEm2ggiOw8xjV8QkRjmlkR3&X-Amz-Signature=69f316982ecf151cc23314cf39ebee36a80dedcf6b8b9fd49f9c9348bd156454&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5R6RXEN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDQqtGCo7m8NK5%2BLxaLC%2Ff%2FU6HumiYuCeP0liLz4kS8pwIhAIaMvpu%2FxpnfSX%2B9NsTfmg3NTwaIiqkyoqHxGYsRFRlmKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUneiSaCZbRSzGBVEq3APTlDWceKOK5JYIJ7ofuJJcTvubjc3ffWxhwmJb83jxxC9FLvfjAbXMO214rYX%2FKkoHTjf6YeSFZA5JCvyTw%2B8AXuNAZZ7Yj6Rthey2Xcn9r%2F1xqKPm%2B1WPAQKvarUgAinHSZos%2B9NrDHIAPOvqsXshIpVPZCnlYi58y0AQ9reCVVBM0UsV2IVG8naB54H5IGVsNj%2BvKX1J5sdbc9%2FOgLhRPlwA1TfSLPi4mAM9sx2WN8D66zz7L45Vcu1aGZ4%2Fz3gm3BS%2FytnhMeQVg%2Fj2ASvRf%2FhcW6HIjPOI85Y4uozITNfajEiMdNTvTvc6cUA%2BXOwDSpDxTPbs1LLv%2BDc%2FvbJ88FmD84MTaHDF1ygrI2eti4PRT%2FUYZlHH8GwRF0n%2Fa1aQunFCBif1Oe9grSGoByZrOJnP85Hdx7g9q4E8RREAaJSuCs%2Fkio1qqVa9fhWnaaFI6M2JMCXEVuRm22yV16aZxTDHbmAM62KHXjzJ6QOma9az6Wz7E7hgkB7tmSIRqYjbmWFpR%2BL7g9lllxFShGcc1J8FYp8o713B%2BZBGqmSLw6KXklgtjZgLdm%2BS22ySl5bW34Nry5zzCgi%2Fe3vQO27KVG8i4BAt3%2B5MDOEIihy3Z%2BBDexdd0af6yxxMEjC1zaDEBjqkAYRv2IT8fethonOHpJIrw0fnzNtl0kN8Ln5raqIbKWQZnkOSUg8Kbf635fdE1tdb0UVs9GJ5SLO%2BL4dl2TXFzS2eICYT1%2Bs0hR7lyYLzUr0qpvIsOMZQWTnZsEQXajjvelkQVSKsIQ2pLv8D8Mwfso%2B7cMFjvc8%2B%2BMIq%2BvNUxmCzmx4hEenIarO8UUs0AabWgT3AdOEm2ggiOw8xjV8QkRjmlkR3&X-Amz-Signature=923c3c59e8508857bba73d3c71d5a2874d457330c030f69ecfcd982063dccbec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5R6RXEN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDQqtGCo7m8NK5%2BLxaLC%2Ff%2FU6HumiYuCeP0liLz4kS8pwIhAIaMvpu%2FxpnfSX%2B9NsTfmg3NTwaIiqkyoqHxGYsRFRlmKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUneiSaCZbRSzGBVEq3APTlDWceKOK5JYIJ7ofuJJcTvubjc3ffWxhwmJb83jxxC9FLvfjAbXMO214rYX%2FKkoHTjf6YeSFZA5JCvyTw%2B8AXuNAZZ7Yj6Rthey2Xcn9r%2F1xqKPm%2B1WPAQKvarUgAinHSZos%2B9NrDHIAPOvqsXshIpVPZCnlYi58y0AQ9reCVVBM0UsV2IVG8naB54H5IGVsNj%2BvKX1J5sdbc9%2FOgLhRPlwA1TfSLPi4mAM9sx2WN8D66zz7L45Vcu1aGZ4%2Fz3gm3BS%2FytnhMeQVg%2Fj2ASvRf%2FhcW6HIjPOI85Y4uozITNfajEiMdNTvTvc6cUA%2BXOwDSpDxTPbs1LLv%2BDc%2FvbJ88FmD84MTaHDF1ygrI2eti4PRT%2FUYZlHH8GwRF0n%2Fa1aQunFCBif1Oe9grSGoByZrOJnP85Hdx7g9q4E8RREAaJSuCs%2Fkio1qqVa9fhWnaaFI6M2JMCXEVuRm22yV16aZxTDHbmAM62KHXjzJ6QOma9az6Wz7E7hgkB7tmSIRqYjbmWFpR%2BL7g9lllxFShGcc1J8FYp8o713B%2BZBGqmSLw6KXklgtjZgLdm%2BS22ySl5bW34Nry5zzCgi%2Fe3vQO27KVG8i4BAt3%2B5MDOEIihy3Z%2BBDexdd0af6yxxMEjC1zaDEBjqkAYRv2IT8fethonOHpJIrw0fnzNtl0kN8Ln5raqIbKWQZnkOSUg8Kbf635fdE1tdb0UVs9GJ5SLO%2BL4dl2TXFzS2eICYT1%2Bs0hR7lyYLzUr0qpvIsOMZQWTnZsEQXajjvelkQVSKsIQ2pLv8D8Mwfso%2B7cMFjvc8%2B%2BMIq%2BvNUxmCzmx4hEenIarO8UUs0AabWgT3AdOEm2ggiOw8xjV8QkRjmlkR3&X-Amz-Signature=46a944d2b71d2406c99dd663b32a3056711dfc7d8b869474448debb14d6bcd52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
