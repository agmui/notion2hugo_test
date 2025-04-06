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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5R4V7GA%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T210329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FhPnN%2FKd1BatHQ%2FjhrWuMVyNqOYVtzMP%2FDm1W%2FxGQFAIhALuvZcxwP3KV%2BNm2RGfpc8c%2BOuJTq4ifubo4tNvtyflsKv8DCEwQABoMNjM3NDIzMTgzODA1IgwcO5P48pyxmP8jDHwq3AM8bBpdwMuaffEApVXN0dVYVBAVwTDkXReHNza65d9Rh%2FSxyTdvPB3YqkWQIAm0RE9%2F7AMnQJe38Nbg329KlnDYX3pik%2Bi084Im9b02PghD7Ym1MEkoaSPDstCU%2B3YF%2BZL0C0adY4o9rnPnpr2a9hfEzZ%2BfoD0hGunnHhTkgnng%2BaiFYmD%2BtARIycgFPE2ZAEdc8yZ6dldxUVmW0auTtj0HAfa475zjIRCtdp3xpf59A%2BxtrOveMsmhVN6od10OzYYqx3FNSVC8zseaw2zBSQVCx4CbrjD4rRfoJUM4nS7QtysM4bzwmCDFK2zKiPTHqzHUoHuOW7kSdMnvqs0gtX%2FGOj5Dpn6Ga2vTHQ0CUeeIl%2FInl5MKGvkgZPFmKdS3mQ9b74iWAH4p1QuK%2BZWQkGvLSc16nQUBEXxh6ELoe8jAdalSpOr7vuNeQ2X5XcqhwrzhjW%2FkQWYZN3yr%2B8J5ih%2FpSNyGtJTJErkRY6dw4ME4bhVhPZGwRqSgAJ0F9UTKiQc%2FbR0gQNLwa4FP%2Bl6XT2b518%2Bkbr1TM2%2F2MqJaGWjiNvIoxCoUpYYsHnZYjqZigV%2BAKDdgVwaptiEQkrcuK%2Fj1JIqBlnCWS4J4Xec8Y%2Bkn9H9pnP6%2FjtMuYuoZvjCHncu%2FBjqkAZvI2kqTd4fM4lqMRxRYuYXVYbmi%2FrKRGBEYoa868FD4Sjt%2F4Q7JMxoHzQOJcaPPcgLezK9C6SI2675tB3WEjwERxDrJDNJ2eid%2FzXE49gl%2BpBEGjuALOWr6seRpLd87IfkbpFL%2FhRT1IYqouUnYps28yxpMsegZCg4yU1I9OexxPpQveYCb3TV%2BydJu6Ibfcv6qJl7J3ggpbfpTQy12rDR8%2FCyX&X-Amz-Signature=c8461b620fcd9b573bc198245cc546dd7b75639cd5a1fe7acb54385fa2753859&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5R4V7GA%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T210329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FhPnN%2FKd1BatHQ%2FjhrWuMVyNqOYVtzMP%2FDm1W%2FxGQFAIhALuvZcxwP3KV%2BNm2RGfpc8c%2BOuJTq4ifubo4tNvtyflsKv8DCEwQABoMNjM3NDIzMTgzODA1IgwcO5P48pyxmP8jDHwq3AM8bBpdwMuaffEApVXN0dVYVBAVwTDkXReHNza65d9Rh%2FSxyTdvPB3YqkWQIAm0RE9%2F7AMnQJe38Nbg329KlnDYX3pik%2Bi084Im9b02PghD7Ym1MEkoaSPDstCU%2B3YF%2BZL0C0adY4o9rnPnpr2a9hfEzZ%2BfoD0hGunnHhTkgnng%2BaiFYmD%2BtARIycgFPE2ZAEdc8yZ6dldxUVmW0auTtj0HAfa475zjIRCtdp3xpf59A%2BxtrOveMsmhVN6od10OzYYqx3FNSVC8zseaw2zBSQVCx4CbrjD4rRfoJUM4nS7QtysM4bzwmCDFK2zKiPTHqzHUoHuOW7kSdMnvqs0gtX%2FGOj5Dpn6Ga2vTHQ0CUeeIl%2FInl5MKGvkgZPFmKdS3mQ9b74iWAH4p1QuK%2BZWQkGvLSc16nQUBEXxh6ELoe8jAdalSpOr7vuNeQ2X5XcqhwrzhjW%2FkQWYZN3yr%2B8J5ih%2FpSNyGtJTJErkRY6dw4ME4bhVhPZGwRqSgAJ0F9UTKiQc%2FbR0gQNLwa4FP%2Bl6XT2b518%2Bkbr1TM2%2F2MqJaGWjiNvIoxCoUpYYsHnZYjqZigV%2BAKDdgVwaptiEQkrcuK%2Fj1JIqBlnCWS4J4Xec8Y%2Bkn9H9pnP6%2FjtMuYuoZvjCHncu%2FBjqkAZvI2kqTd4fM4lqMRxRYuYXVYbmi%2FrKRGBEYoa868FD4Sjt%2F4Q7JMxoHzQOJcaPPcgLezK9C6SI2675tB3WEjwERxDrJDNJ2eid%2FzXE49gl%2BpBEGjuALOWr6seRpLd87IfkbpFL%2FhRT1IYqouUnYps28yxpMsegZCg4yU1I9OexxPpQveYCb3TV%2BydJu6Ibfcv6qJl7J3ggpbfpTQy12rDR8%2FCyX&X-Amz-Signature=1779e55d3331d53473cd33a252daac5ef0cd7cfdd747b41dc865d6e234e845cc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5R4V7GA%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T210329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FhPnN%2FKd1BatHQ%2FjhrWuMVyNqOYVtzMP%2FDm1W%2FxGQFAIhALuvZcxwP3KV%2BNm2RGfpc8c%2BOuJTq4ifubo4tNvtyflsKv8DCEwQABoMNjM3NDIzMTgzODA1IgwcO5P48pyxmP8jDHwq3AM8bBpdwMuaffEApVXN0dVYVBAVwTDkXReHNza65d9Rh%2FSxyTdvPB3YqkWQIAm0RE9%2F7AMnQJe38Nbg329KlnDYX3pik%2Bi084Im9b02PghD7Ym1MEkoaSPDstCU%2B3YF%2BZL0C0adY4o9rnPnpr2a9hfEzZ%2BfoD0hGunnHhTkgnng%2BaiFYmD%2BtARIycgFPE2ZAEdc8yZ6dldxUVmW0auTtj0HAfa475zjIRCtdp3xpf59A%2BxtrOveMsmhVN6od10OzYYqx3FNSVC8zseaw2zBSQVCx4CbrjD4rRfoJUM4nS7QtysM4bzwmCDFK2zKiPTHqzHUoHuOW7kSdMnvqs0gtX%2FGOj5Dpn6Ga2vTHQ0CUeeIl%2FInl5MKGvkgZPFmKdS3mQ9b74iWAH4p1QuK%2BZWQkGvLSc16nQUBEXxh6ELoe8jAdalSpOr7vuNeQ2X5XcqhwrzhjW%2FkQWYZN3yr%2B8J5ih%2FpSNyGtJTJErkRY6dw4ME4bhVhPZGwRqSgAJ0F9UTKiQc%2FbR0gQNLwa4FP%2Bl6XT2b518%2Bkbr1TM2%2F2MqJaGWjiNvIoxCoUpYYsHnZYjqZigV%2BAKDdgVwaptiEQkrcuK%2Fj1JIqBlnCWS4J4Xec8Y%2Bkn9H9pnP6%2FjtMuYuoZvjCHncu%2FBjqkAZvI2kqTd4fM4lqMRxRYuYXVYbmi%2FrKRGBEYoa868FD4Sjt%2F4Q7JMxoHzQOJcaPPcgLezK9C6SI2675tB3WEjwERxDrJDNJ2eid%2FzXE49gl%2BpBEGjuALOWr6seRpLd87IfkbpFL%2FhRT1IYqouUnYps28yxpMsegZCg4yU1I9OexxPpQveYCb3TV%2BydJu6Ibfcv6qJl7J3ggpbfpTQy12rDR8%2FCyX&X-Amz-Signature=0eae1c6a41eb36e38fda78874449ffddb6a671d92aba8922c4aaecc041bf85f6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
