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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2RCK56U%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1Ug0KF2QUlCBAJITb9VVXaoDCmoIirahgccmhrjfNsAiBFcJbEF%2FQcnDDBvY04yJKw7orlXOtMKozgHW8TopAYEiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU2jwX8S1IKolzTGEKtwDQ9ZVduNbIv0ytpLaU%2Fznf5rkQcfoAqe0qbBXAM8w5mUAabQgrC0LjilScclzYiqooo99lUFqTAnHukNrpqtXKrmnUPQFIyDprJ%2FVvn30LWQQ1%2BdqKOjirnXtGF7kMNj1mkKu2D1p5Jbb8TjfOS0SPJn%2Bs7zxE62KIxgTB5i4REjLrpcOQXnRQ2pOd3JNWWTpf1jHfrrbmeRFyC1bn7CPuzqPAzvB1aVuX2aYxAtUKZvIt62isjSegeSojk5XXjJXerDOORkoaOhagUBdYs96%2F8eVvWq%2FIDd6VDy2QTtSOWF1mPKJuo9vJ5VfbPijbisXSbgI37EBv8ijsgktg0Nam6ll4IOCbzIHSMiMlZlQMwngBKso3Fj3teK3BP4seRFWhPe7UIkeWg8HDqNo2PGM5DG0OqfB1v%2FgFAnOPqfw7x16xlaEgQGOjabNBC%2FLTzYECuxPf2tOzeWASiPLXU5lvXgYBZzF%2BW5J13cTq9Wq1XPeIpSigkEWDDLmHP4%2BSR1LBxcvtOKf92CAoFBXGKjivrXz0hJNTttTMQknE3UxrH3vfflhlU8MmnrD0vxSYl3A3M0zl37RJRfwqnJixgUNYad9gRdS03ZuRhecrYk%2BgSqk8nnzu3GX4Iil488wl%2FOlxAY6pgGmmBfsRKtOmOxvy%2F57keIwbVN%2BxTQjxVBrHJDzvKCrs8GH2HkqD3JTwUAAVKlzoivyGxBQy7SLlpgUNwu77joqHv8p15h%2F7cxtc54DzcplRWpFqyV%2BYh%2F3y4ITBPO7dfEUjCfkhjICPggUpLrYr7g6iThyyssDo22pJ%2B4fNDlUhGQINTgFALFBdF8EAHtGmdapxTNmaoqb5pD9BOFvJEzmWO1Urxdb&X-Amz-Signature=33ad5b09c48d01aae8ba7663a3034dac0effa5b5b7b3fb28096fafc461858822&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2RCK56U%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1Ug0KF2QUlCBAJITb9VVXaoDCmoIirahgccmhrjfNsAiBFcJbEF%2FQcnDDBvY04yJKw7orlXOtMKozgHW8TopAYEiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU2jwX8S1IKolzTGEKtwDQ9ZVduNbIv0ytpLaU%2Fznf5rkQcfoAqe0qbBXAM8w5mUAabQgrC0LjilScclzYiqooo99lUFqTAnHukNrpqtXKrmnUPQFIyDprJ%2FVvn30LWQQ1%2BdqKOjirnXtGF7kMNj1mkKu2D1p5Jbb8TjfOS0SPJn%2Bs7zxE62KIxgTB5i4REjLrpcOQXnRQ2pOd3JNWWTpf1jHfrrbmeRFyC1bn7CPuzqPAzvB1aVuX2aYxAtUKZvIt62isjSegeSojk5XXjJXerDOORkoaOhagUBdYs96%2F8eVvWq%2FIDd6VDy2QTtSOWF1mPKJuo9vJ5VfbPijbisXSbgI37EBv8ijsgktg0Nam6ll4IOCbzIHSMiMlZlQMwngBKso3Fj3teK3BP4seRFWhPe7UIkeWg8HDqNo2PGM5DG0OqfB1v%2FgFAnOPqfw7x16xlaEgQGOjabNBC%2FLTzYECuxPf2tOzeWASiPLXU5lvXgYBZzF%2BW5J13cTq9Wq1XPeIpSigkEWDDLmHP4%2BSR1LBxcvtOKf92CAoFBXGKjivrXz0hJNTttTMQknE3UxrH3vfflhlU8MmnrD0vxSYl3A3M0zl37RJRfwqnJixgUNYad9gRdS03ZuRhecrYk%2BgSqk8nnzu3GX4Iil488wl%2FOlxAY6pgGmmBfsRKtOmOxvy%2F57keIwbVN%2BxTQjxVBrHJDzvKCrs8GH2HkqD3JTwUAAVKlzoivyGxBQy7SLlpgUNwu77joqHv8p15h%2F7cxtc54DzcplRWpFqyV%2BYh%2F3y4ITBPO7dfEUjCfkhjICPggUpLrYr7g6iThyyssDo22pJ%2B4fNDlUhGQINTgFALFBdF8EAHtGmdapxTNmaoqb5pD9BOFvJEzmWO1Urxdb&X-Amz-Signature=68fb61091165391322fe064a45dd97a785ede5b63089b24d9aff5b7ca55cc71e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2RCK56U%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1Ug0KF2QUlCBAJITb9VVXaoDCmoIirahgccmhrjfNsAiBFcJbEF%2FQcnDDBvY04yJKw7orlXOtMKozgHW8TopAYEiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU2jwX8S1IKolzTGEKtwDQ9ZVduNbIv0ytpLaU%2Fznf5rkQcfoAqe0qbBXAM8w5mUAabQgrC0LjilScclzYiqooo99lUFqTAnHukNrpqtXKrmnUPQFIyDprJ%2FVvn30LWQQ1%2BdqKOjirnXtGF7kMNj1mkKu2D1p5Jbb8TjfOS0SPJn%2Bs7zxE62KIxgTB5i4REjLrpcOQXnRQ2pOd3JNWWTpf1jHfrrbmeRFyC1bn7CPuzqPAzvB1aVuX2aYxAtUKZvIt62isjSegeSojk5XXjJXerDOORkoaOhagUBdYs96%2F8eVvWq%2FIDd6VDy2QTtSOWF1mPKJuo9vJ5VfbPijbisXSbgI37EBv8ijsgktg0Nam6ll4IOCbzIHSMiMlZlQMwngBKso3Fj3teK3BP4seRFWhPe7UIkeWg8HDqNo2PGM5DG0OqfB1v%2FgFAnOPqfw7x16xlaEgQGOjabNBC%2FLTzYECuxPf2tOzeWASiPLXU5lvXgYBZzF%2BW5J13cTq9Wq1XPeIpSigkEWDDLmHP4%2BSR1LBxcvtOKf92CAoFBXGKjivrXz0hJNTttTMQknE3UxrH3vfflhlU8MmnrD0vxSYl3A3M0zl37RJRfwqnJixgUNYad9gRdS03ZuRhecrYk%2BgSqk8nnzu3GX4Iil488wl%2FOlxAY6pgGmmBfsRKtOmOxvy%2F57keIwbVN%2BxTQjxVBrHJDzvKCrs8GH2HkqD3JTwUAAVKlzoivyGxBQy7SLlpgUNwu77joqHv8p15h%2F7cxtc54DzcplRWpFqyV%2BYh%2F3y4ITBPO7dfEUjCfkhjICPggUpLrYr7g6iThyyssDo22pJ%2B4fNDlUhGQINTgFALFBdF8EAHtGmdapxTNmaoqb5pD9BOFvJEzmWO1Urxdb&X-Amz-Signature=bb37b36630cba9361b54f2d421bfde439aba66f4ccd985274a05684124d45a6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
