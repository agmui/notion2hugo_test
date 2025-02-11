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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRFYZ3DF%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T020937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZ%2BjZ0QPQ32iSs0Tb8Ar32h9IrTABwSgsFQRW3UxyI2QIgNH6j36pwrKPuQOUZdlMouyVXaA0BdlFeUco1UFQLiKgqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL7Gqkkng24ZtvkkmSrcAxK%2F%2BuZhxtGsmy5kUVzvdHHVduU9kFJD4mhfWRSHuGlLqGAp4C8JMQod%2FMnBCEDQFnWYrkPzp%2FmynnO95rakMkPFgNPXuhn%2F2N4hEbwC6qcUTTm3BIGQVxj1XLc32UlxqpU9c8nEFMfrtXubpb8I0rwLsFZR9XNZd3V85g17J%2F053%2FwtfrqSpN3fMmBxRNt5tA2hPkyipQx0lEmJ1np0jMXCATIwdeSoeZF1bn%2FvIOJ4tm9Nw%2BRbTohYvQf4y%2FveSkL6h14J%2FdF9rhXAewKrZsj70DqN7B4E%2B%2BiYJl456Oyx4rYBxou2Lc9H%2B001SgXv%2FxwxMB7BZhPeBba7f7C0FcVZsSnXb5Fky2pUy%2BJo4nCcjX9O8oVt8HSSiFuj4un%2Fv02BEexv7E28X4nmCrD3SjdeSW537DPTCsRSIL%2FVYmtR2hkSjoEd0GM22mbaeK6gM54V6HkUYnHBEaMM8c9mi5eWO%2FHAssfXXpfbYp97xpWuWfYNKVEuxSakXT3qLjaPaM31ydM067P2%2BQYiFrfl%2BeqgISL7m%2Bgq%2BzYiyJ40cCHbVtznlQN%2BmzrbJwUePEqW6zmUCsojQrkKWjeYPdZfBIOBM6wWXjtdRHTwA6rT0z122o%2B5JMSmswTYPCDaMJvdqr0GOqUBRRnVsubLBmVsYzWk4VcKUh3jdeOa95XWkKlTONjmquXTm0QsML0LQOfBV9DjNKBLPXV3eUIgRlP%2FWloE9aX8sd1xBKimqCf4LQkH0JfGqpIIRKqlVGuCWTSYzPhRZiwQblKCoJY45fvJfqDDwOOJT4b9V8PBXeriQL1z2wBS2F8w8fu5dbNH0n4eqwfY5MYl0wG6Mw1Su580B93it3phrEgm0QDA&X-Amz-Signature=ceac1456e9b092ba4f30d61c55ab384134adbf42d1e539b73119506e194ef95d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRFYZ3DF%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T020937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZ%2BjZ0QPQ32iSs0Tb8Ar32h9IrTABwSgsFQRW3UxyI2QIgNH6j36pwrKPuQOUZdlMouyVXaA0BdlFeUco1UFQLiKgqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL7Gqkkng24ZtvkkmSrcAxK%2F%2BuZhxtGsmy5kUVzvdHHVduU9kFJD4mhfWRSHuGlLqGAp4C8JMQod%2FMnBCEDQFnWYrkPzp%2FmynnO95rakMkPFgNPXuhn%2F2N4hEbwC6qcUTTm3BIGQVxj1XLc32UlxqpU9c8nEFMfrtXubpb8I0rwLsFZR9XNZd3V85g17J%2F053%2FwtfrqSpN3fMmBxRNt5tA2hPkyipQx0lEmJ1np0jMXCATIwdeSoeZF1bn%2FvIOJ4tm9Nw%2BRbTohYvQf4y%2FveSkL6h14J%2FdF9rhXAewKrZsj70DqN7B4E%2B%2BiYJl456Oyx4rYBxou2Lc9H%2B001SgXv%2FxwxMB7BZhPeBba7f7C0FcVZsSnXb5Fky2pUy%2BJo4nCcjX9O8oVt8HSSiFuj4un%2Fv02BEexv7E28X4nmCrD3SjdeSW537DPTCsRSIL%2FVYmtR2hkSjoEd0GM22mbaeK6gM54V6HkUYnHBEaMM8c9mi5eWO%2FHAssfXXpfbYp97xpWuWfYNKVEuxSakXT3qLjaPaM31ydM067P2%2BQYiFrfl%2BeqgISL7m%2Bgq%2BzYiyJ40cCHbVtznlQN%2BmzrbJwUePEqW6zmUCsojQrkKWjeYPdZfBIOBM6wWXjtdRHTwA6rT0z122o%2B5JMSmswTYPCDaMJvdqr0GOqUBRRnVsubLBmVsYzWk4VcKUh3jdeOa95XWkKlTONjmquXTm0QsML0LQOfBV9DjNKBLPXV3eUIgRlP%2FWloE9aX8sd1xBKimqCf4LQkH0JfGqpIIRKqlVGuCWTSYzPhRZiwQblKCoJY45fvJfqDDwOOJT4b9V8PBXeriQL1z2wBS2F8w8fu5dbNH0n4eqwfY5MYl0wG6Mw1Su580B93it3phrEgm0QDA&X-Amz-Signature=8dbaec4836fd564fb7b3c336e6cffccc2cf79cfc855c1f8c2a5f1934408b9734&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRFYZ3DF%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T020937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZ%2BjZ0QPQ32iSs0Tb8Ar32h9IrTABwSgsFQRW3UxyI2QIgNH6j36pwrKPuQOUZdlMouyVXaA0BdlFeUco1UFQLiKgqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL7Gqkkng24ZtvkkmSrcAxK%2F%2BuZhxtGsmy5kUVzvdHHVduU9kFJD4mhfWRSHuGlLqGAp4C8JMQod%2FMnBCEDQFnWYrkPzp%2FmynnO95rakMkPFgNPXuhn%2F2N4hEbwC6qcUTTm3BIGQVxj1XLc32UlxqpU9c8nEFMfrtXubpb8I0rwLsFZR9XNZd3V85g17J%2F053%2FwtfrqSpN3fMmBxRNt5tA2hPkyipQx0lEmJ1np0jMXCATIwdeSoeZF1bn%2FvIOJ4tm9Nw%2BRbTohYvQf4y%2FveSkL6h14J%2FdF9rhXAewKrZsj70DqN7B4E%2B%2BiYJl456Oyx4rYBxou2Lc9H%2B001SgXv%2FxwxMB7BZhPeBba7f7C0FcVZsSnXb5Fky2pUy%2BJo4nCcjX9O8oVt8HSSiFuj4un%2Fv02BEexv7E28X4nmCrD3SjdeSW537DPTCsRSIL%2FVYmtR2hkSjoEd0GM22mbaeK6gM54V6HkUYnHBEaMM8c9mi5eWO%2FHAssfXXpfbYp97xpWuWfYNKVEuxSakXT3qLjaPaM31ydM067P2%2BQYiFrfl%2BeqgISL7m%2Bgq%2BzYiyJ40cCHbVtznlQN%2BmzrbJwUePEqW6zmUCsojQrkKWjeYPdZfBIOBM6wWXjtdRHTwA6rT0z122o%2B5JMSmswTYPCDaMJvdqr0GOqUBRRnVsubLBmVsYzWk4VcKUh3jdeOa95XWkKlTONjmquXTm0QsML0LQOfBV9DjNKBLPXV3eUIgRlP%2FWloE9aX8sd1xBKimqCf4LQkH0JfGqpIIRKqlVGuCWTSYzPhRZiwQblKCoJY45fvJfqDDwOOJT4b9V8PBXeriQL1z2wBS2F8w8fu5dbNH0n4eqwfY5MYl0wG6Mw1Su580B93it3phrEgm0QDA&X-Amz-Signature=4f99b2e7bdd37d9ed5572bebae122f6b1aaf554e28a2699d8d797973e6e8b273&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
