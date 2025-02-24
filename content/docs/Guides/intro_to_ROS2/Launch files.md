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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMTN3IFV%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T131726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDmnNxeJM%2BfQDvXIeZ2UTzec9tj9QjIOWOE7JGLJ0KWoAiEAoPjciSACEVWOKVzFED1dEGU9d2sdZKImM4dMU3Gplcgq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDGDmMkqKbpvz0wuCwircA9jKLAWYlB9SKg19Opb63ISfmkDe6QRKVdkkHzt2EtY61FrC0u%2BH9FGjMdHNEZyRYpWxEthpEnPXnTAXniHmI%2BMMDZEby4YapnzWWR%2FIFObBoD0xzxGcvG25Girikb43U%2BXJerC08IvPPBrv9mYGckRoRZ3wIKnvOOGskOb3wCNzKDagZrJJuEBuvv4SHlH2ylPz4Gqepp5Ut%2BML4em1BaONWlbWRrZmP9ld9MrB7AzEYuA8BIhBgkkaZ0GWLIKRVHxi1P3GuGswwieTWrHThwF1yanC4vHhQ06A1x5Hlusa3mOOPtWWHABGvy7kIsgode4fkcddRkX4MKvzBEBGf%2Fw%2Fr%2BQVe3svLipx98h1PQQMfHS82CfqB%2FQJWZSxI%2BKqC%2Fk%2Bx6PZU%2FcioRnMsGejUr9h%2Fh1rbkQZGFLzGPaESifGISlIdjIQjTADopNvdajivXlZ6%2FzcYehT9GiwkrGjnJuwzbu5xwD5W3K3WJf79Vnvx5RxjeFZobv72%2B%2FwXYfggA1shK8ZRh19keMzAWEx85JZW2PyjMcXUCpMXNchqANexCJCQln4F6FxGKSv0KQkwb9dcLCCuNb%2B%2Fgx5CdQRQhbcsAtgTZrqpSW%2FRR1urCrvdBaqbG%2FJvJi3X1T%2BMOHW8b0GOqUBOvskl5HuuB%2BYka7jRBsrkNZRMCDH3Ggtl3oGBpR7t7ksGDfd07fgtSzisL%2FE3ud%2FALiTWxauMq6bWgtU%2BDyT8%2FSQ2iNcSSAr%2FT0N9lOlhRq%2BtXSgxiWce1OpUXn4090ieA8Dnqoj38XwKt4vLcoGBo%2BuF7nJsMRHlCWOzTtHD8ntfddUl9ls4GZm5%2Fff0ufMXzwFkpAfALFOeZnJmVTi76zok4cO&X-Amz-Signature=769225ecfb323eeed091155952f290eb9f5108172f61d06e0696ef212b0b1ee0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMTN3IFV%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T131726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDmnNxeJM%2BfQDvXIeZ2UTzec9tj9QjIOWOE7JGLJ0KWoAiEAoPjciSACEVWOKVzFED1dEGU9d2sdZKImM4dMU3Gplcgq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDGDmMkqKbpvz0wuCwircA9jKLAWYlB9SKg19Opb63ISfmkDe6QRKVdkkHzt2EtY61FrC0u%2BH9FGjMdHNEZyRYpWxEthpEnPXnTAXniHmI%2BMMDZEby4YapnzWWR%2FIFObBoD0xzxGcvG25Girikb43U%2BXJerC08IvPPBrv9mYGckRoRZ3wIKnvOOGskOb3wCNzKDagZrJJuEBuvv4SHlH2ylPz4Gqepp5Ut%2BML4em1BaONWlbWRrZmP9ld9MrB7AzEYuA8BIhBgkkaZ0GWLIKRVHxi1P3GuGswwieTWrHThwF1yanC4vHhQ06A1x5Hlusa3mOOPtWWHABGvy7kIsgode4fkcddRkX4MKvzBEBGf%2Fw%2Fr%2BQVe3svLipx98h1PQQMfHS82CfqB%2FQJWZSxI%2BKqC%2Fk%2Bx6PZU%2FcioRnMsGejUr9h%2Fh1rbkQZGFLzGPaESifGISlIdjIQjTADopNvdajivXlZ6%2FzcYehT9GiwkrGjnJuwzbu5xwD5W3K3WJf79Vnvx5RxjeFZobv72%2B%2FwXYfggA1shK8ZRh19keMzAWEx85JZW2PyjMcXUCpMXNchqANexCJCQln4F6FxGKSv0KQkwb9dcLCCuNb%2B%2Fgx5CdQRQhbcsAtgTZrqpSW%2FRR1urCrvdBaqbG%2FJvJi3X1T%2BMOHW8b0GOqUBOvskl5HuuB%2BYka7jRBsrkNZRMCDH3Ggtl3oGBpR7t7ksGDfd07fgtSzisL%2FE3ud%2FALiTWxauMq6bWgtU%2BDyT8%2FSQ2iNcSSAr%2FT0N9lOlhRq%2BtXSgxiWce1OpUXn4090ieA8Dnqoj38XwKt4vLcoGBo%2BuF7nJsMRHlCWOzTtHD8ntfddUl9ls4GZm5%2Fff0ufMXzwFkpAfALFOeZnJmVTi76zok4cO&X-Amz-Signature=07fe676a6878cd6aca930d74504a8c51ee6a06565af0e980f566dc28ed04ed8f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMTN3IFV%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T131726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDmnNxeJM%2BfQDvXIeZ2UTzec9tj9QjIOWOE7JGLJ0KWoAiEAoPjciSACEVWOKVzFED1dEGU9d2sdZKImM4dMU3Gplcgq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDGDmMkqKbpvz0wuCwircA9jKLAWYlB9SKg19Opb63ISfmkDe6QRKVdkkHzt2EtY61FrC0u%2BH9FGjMdHNEZyRYpWxEthpEnPXnTAXniHmI%2BMMDZEby4YapnzWWR%2FIFObBoD0xzxGcvG25Girikb43U%2BXJerC08IvPPBrv9mYGckRoRZ3wIKnvOOGskOb3wCNzKDagZrJJuEBuvv4SHlH2ylPz4Gqepp5Ut%2BML4em1BaONWlbWRrZmP9ld9MrB7AzEYuA8BIhBgkkaZ0GWLIKRVHxi1P3GuGswwieTWrHThwF1yanC4vHhQ06A1x5Hlusa3mOOPtWWHABGvy7kIsgode4fkcddRkX4MKvzBEBGf%2Fw%2Fr%2BQVe3svLipx98h1PQQMfHS82CfqB%2FQJWZSxI%2BKqC%2Fk%2Bx6PZU%2FcioRnMsGejUr9h%2Fh1rbkQZGFLzGPaESifGISlIdjIQjTADopNvdajivXlZ6%2FzcYehT9GiwkrGjnJuwzbu5xwD5W3K3WJf79Vnvx5RxjeFZobv72%2B%2FwXYfggA1shK8ZRh19keMzAWEx85JZW2PyjMcXUCpMXNchqANexCJCQln4F6FxGKSv0KQkwb9dcLCCuNb%2B%2Fgx5CdQRQhbcsAtgTZrqpSW%2FRR1urCrvdBaqbG%2FJvJi3X1T%2BMOHW8b0GOqUBOvskl5HuuB%2BYka7jRBsrkNZRMCDH3Ggtl3oGBpR7t7ksGDfd07fgtSzisL%2FE3ud%2FALiTWxauMq6bWgtU%2BDyT8%2FSQ2iNcSSAr%2FT0N9lOlhRq%2BtXSgxiWce1OpUXn4090ieA8Dnqoj38XwKt4vLcoGBo%2BuF7nJsMRHlCWOzTtHD8ntfddUl9ls4GZm5%2Fff0ufMXzwFkpAfALFOeZnJmVTi76zok4cO&X-Amz-Signature=5005c52eaf9bde3f6fcd566b7579b3cb3a4d30eb9814cb539550319dbe98b6f1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
