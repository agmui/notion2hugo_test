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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPHDEUP7%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrvGueK5Kl95HxP1CAAQKTtYL90iX10MklcNsEMH9WlAIgcH%2B7Tg2hTrmMflTDi%2FiV10TfR9TcmpnyzowKgPZidVYq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDCRhZfbIrJUHVTiSjSrcAxRtigXzj60Jfo3e6nmS70rrnSwLENSnkG6Bw5Yg1dSlNOr9rberKiHMfwncfleqZMRxdYvaJcwK3sFnXw9jeYlyk77Ytv8YbDRefI%2BMtrjKmHZiZx6Hq9aOt0VURqwCXZJ6BYF7D%2FPvGyKbGR7DvImZz0FKaazeu6xHmgXN3b8cm3qCqTvNMbgkQA465IXLPp3gmA95P8Ro%2BdG5v2rGOItgbYgn9qxQeJvEfZobUgHKKmCycZwxu3jiHIR2Zte2b%2FS1VQ%2BvZRmb6cqJI4AvwYpWhJghF2in5H4LAh%2BgsLgpRsrknRkQ81aHDJs0XXGmqIyvc598y%2FdREN1fRs21OV9ejGyZbawNuhnvOgz3xn2Kj1i5ConwUfLNvaHUd4DOU0yP1omziOsI0FPly2p4snfK5bSU7PSSjhTggxwVFj33H8MR4O8%2Bk%2B8FPi4qUAYQA4GrI3iEC8xz%2B3A3XX%2BjYSptswqdWB5Ts9NJBDvdcL05R9DrQoKCfau7InvEN9fNXPFhcy0joTWHYhhmFjxhJrUnEyG0KWs9dvU5wQD2NYSmyXeG0lH395HOpOHa9AK6LUT1JYFgK1uFt22b4MwAm%2FeuoDXNvIoSgRDevZQihiRgngQdsISBH4iX3wF7MIzP%2BL8GOqUBUpQUYQivFDcvdRexN9nfzg4pThfole9yO8Z1aQIWHMbeBNY8El4yus9%2Bogg2j1vpOMxgfJ7VSZ6XNPe5O0IafdXnkYl1%2BBDS9RRTIOqNb3IxEP%2FTSFk23iecBDn%2FCeyBidOKTH0tRGoQQb499TsCDBkQf3M%2FEY%2Ba09I8J9b354v0L2qZy1qW%2BuJJ%2FUH6wcXSjyHB02sIbzSqFBvdaxpVNc8rxhF6&X-Amz-Signature=c30b3a4f6f65484c4009cf66b611aed0003b95d6d37042312c358c50b9e0b01f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPHDEUP7%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrvGueK5Kl95HxP1CAAQKTtYL90iX10MklcNsEMH9WlAIgcH%2B7Tg2hTrmMflTDi%2FiV10TfR9TcmpnyzowKgPZidVYq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDCRhZfbIrJUHVTiSjSrcAxRtigXzj60Jfo3e6nmS70rrnSwLENSnkG6Bw5Yg1dSlNOr9rberKiHMfwncfleqZMRxdYvaJcwK3sFnXw9jeYlyk77Ytv8YbDRefI%2BMtrjKmHZiZx6Hq9aOt0VURqwCXZJ6BYF7D%2FPvGyKbGR7DvImZz0FKaazeu6xHmgXN3b8cm3qCqTvNMbgkQA465IXLPp3gmA95P8Ro%2BdG5v2rGOItgbYgn9qxQeJvEfZobUgHKKmCycZwxu3jiHIR2Zte2b%2FS1VQ%2BvZRmb6cqJI4AvwYpWhJghF2in5H4LAh%2BgsLgpRsrknRkQ81aHDJs0XXGmqIyvc598y%2FdREN1fRs21OV9ejGyZbawNuhnvOgz3xn2Kj1i5ConwUfLNvaHUd4DOU0yP1omziOsI0FPly2p4snfK5bSU7PSSjhTggxwVFj33H8MR4O8%2Bk%2B8FPi4qUAYQA4GrI3iEC8xz%2B3A3XX%2BjYSptswqdWB5Ts9NJBDvdcL05R9DrQoKCfau7InvEN9fNXPFhcy0joTWHYhhmFjxhJrUnEyG0KWs9dvU5wQD2NYSmyXeG0lH395HOpOHa9AK6LUT1JYFgK1uFt22b4MwAm%2FeuoDXNvIoSgRDevZQihiRgngQdsISBH4iX3wF7MIzP%2BL8GOqUBUpQUYQivFDcvdRexN9nfzg4pThfole9yO8Z1aQIWHMbeBNY8El4yus9%2Bogg2j1vpOMxgfJ7VSZ6XNPe5O0IafdXnkYl1%2BBDS9RRTIOqNb3IxEP%2FTSFk23iecBDn%2FCeyBidOKTH0tRGoQQb499TsCDBkQf3M%2FEY%2Ba09I8J9b354v0L2qZy1qW%2BuJJ%2FUH6wcXSjyHB02sIbzSqFBvdaxpVNc8rxhF6&X-Amz-Signature=d60c08689b9610126d98422f230de07612cff48619bf03484082f529c0bef3a6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPHDEUP7%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrvGueK5Kl95HxP1CAAQKTtYL90iX10MklcNsEMH9WlAIgcH%2B7Tg2hTrmMflTDi%2FiV10TfR9TcmpnyzowKgPZidVYq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDCRhZfbIrJUHVTiSjSrcAxRtigXzj60Jfo3e6nmS70rrnSwLENSnkG6Bw5Yg1dSlNOr9rberKiHMfwncfleqZMRxdYvaJcwK3sFnXw9jeYlyk77Ytv8YbDRefI%2BMtrjKmHZiZx6Hq9aOt0VURqwCXZJ6BYF7D%2FPvGyKbGR7DvImZz0FKaazeu6xHmgXN3b8cm3qCqTvNMbgkQA465IXLPp3gmA95P8Ro%2BdG5v2rGOItgbYgn9qxQeJvEfZobUgHKKmCycZwxu3jiHIR2Zte2b%2FS1VQ%2BvZRmb6cqJI4AvwYpWhJghF2in5H4LAh%2BgsLgpRsrknRkQ81aHDJs0XXGmqIyvc598y%2FdREN1fRs21OV9ejGyZbawNuhnvOgz3xn2Kj1i5ConwUfLNvaHUd4DOU0yP1omziOsI0FPly2p4snfK5bSU7PSSjhTggxwVFj33H8MR4O8%2Bk%2B8FPi4qUAYQA4GrI3iEC8xz%2B3A3XX%2BjYSptswqdWB5Ts9NJBDvdcL05R9DrQoKCfau7InvEN9fNXPFhcy0joTWHYhhmFjxhJrUnEyG0KWs9dvU5wQD2NYSmyXeG0lH395HOpOHa9AK6LUT1JYFgK1uFt22b4MwAm%2FeuoDXNvIoSgRDevZQihiRgngQdsISBH4iX3wF7MIzP%2BL8GOqUBUpQUYQivFDcvdRexN9nfzg4pThfole9yO8Z1aQIWHMbeBNY8El4yus9%2Bogg2j1vpOMxgfJ7VSZ6XNPe5O0IafdXnkYl1%2BBDS9RRTIOqNb3IxEP%2FTSFk23iecBDn%2FCeyBidOKTH0tRGoQQb499TsCDBkQf3M%2FEY%2Ba09I8J9b354v0L2qZy1qW%2BuJJ%2FUH6wcXSjyHB02sIbzSqFBvdaxpVNc8rxhF6&X-Amz-Signature=30f62b17c183e95a2c30ff881e7ad8d553023883655504f58b288e64dfe48c0e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
