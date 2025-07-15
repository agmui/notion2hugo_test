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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z2WRRQN%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T170853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCICYak47l8FAjv%2BMzCkB8S3AJb8niFeJV6IHtGF12vH37AiEAgOUE578HSnVtL3K%2FXPYx1Wny3JdYwquFGRZRbXB6OVEq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGFEc2Oz03C1g88WcyrcA2riVkjZ4Fy3JS1J6Th%2Fb8MUKLia7yW4orJoR2PSLOd5lovzNhO2Sypb%2BoZbKHiwxUxKCfUhWRveRpBU3IpiqaGlhqONqnD9kKL595hwb9wum4J0dw8FbdUabSZWLlE62lSRtRs0NDZMIwF4PnetcVizFgHtllIphgdLbIV4URtrFgK4lLre8kPRmhN0%2BuIfnbaBXJzSHtrN1ERQeAp8Fk2SwcFKWYZ887sTTnMPjIcMRYjx%2F55iTNTvP0LzCXURAHtX7HLnBtVd1y4quyvjWA7ZoWpy56DWN5uQsVHM3ODxaZnEgvlgXcJ0rqklnEadqfuziq2%2BjHNBLStqKAuLmXE6BSsSLVBImtBMNf4BhUytrfOH4vzP8GD2WQGKRi2sc%2BRFZGcWKfkkkz%2F9P0Linnx69Us45vzmaZq86qQfmL5MkWcetmBNXwzVQdOLf2D%2FzF%2FBHfyBTyRGYDK49Rz5pV3z%2B6QFP2lq1Zqs%2BXuvPpOBQnfDHm0qhTdrtdXmZt64IOwUGtiGwx4cZV7hiwJosvXPdK0%2F3S8gLec9eDXNoKF7hCqRV04swj4kJFcV51YV7qiDhHEC6U1DKfKW1RiLbppgOZLgHLjjJMNEbcxhRBxkd1GbP1LD8cqTo4RpMMOG2sMGOqUB0W6ZF5SX7zpFI%2BZJTHTdVB%2FW1%2BzhcZyUaTsR8prNMqjCDHll4FY2atQGyip3lGG4keY%2BwCjfqd6FePnk%2F2A55Pw4ng%2FzD4JtxiYlHnGjRBlPUs5IuBPYpbnPCp8i47T8WYw0hXYln4iE%2BUifbIl6aZuGwXsmeKecOAoDLh9Aa%2FbHs%2FPDPtpgzBwI9uAcc0PDVm%2FjhXGopeekLRAApnLr1n749e86&X-Amz-Signature=8e0b19ccc1da60c9cd5032e6c9cfcb1c25dc833f59c48531e55f85a6603ba594&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z2WRRQN%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T170853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCICYak47l8FAjv%2BMzCkB8S3AJb8niFeJV6IHtGF12vH37AiEAgOUE578HSnVtL3K%2FXPYx1Wny3JdYwquFGRZRbXB6OVEq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGFEc2Oz03C1g88WcyrcA2riVkjZ4Fy3JS1J6Th%2Fb8MUKLia7yW4orJoR2PSLOd5lovzNhO2Sypb%2BoZbKHiwxUxKCfUhWRveRpBU3IpiqaGlhqONqnD9kKL595hwb9wum4J0dw8FbdUabSZWLlE62lSRtRs0NDZMIwF4PnetcVizFgHtllIphgdLbIV4URtrFgK4lLre8kPRmhN0%2BuIfnbaBXJzSHtrN1ERQeAp8Fk2SwcFKWYZ887sTTnMPjIcMRYjx%2F55iTNTvP0LzCXURAHtX7HLnBtVd1y4quyvjWA7ZoWpy56DWN5uQsVHM3ODxaZnEgvlgXcJ0rqklnEadqfuziq2%2BjHNBLStqKAuLmXE6BSsSLVBImtBMNf4BhUytrfOH4vzP8GD2WQGKRi2sc%2BRFZGcWKfkkkz%2F9P0Linnx69Us45vzmaZq86qQfmL5MkWcetmBNXwzVQdOLf2D%2FzF%2FBHfyBTyRGYDK49Rz5pV3z%2B6QFP2lq1Zqs%2BXuvPpOBQnfDHm0qhTdrtdXmZt64IOwUGtiGwx4cZV7hiwJosvXPdK0%2F3S8gLec9eDXNoKF7hCqRV04swj4kJFcV51YV7qiDhHEC6U1DKfKW1RiLbppgOZLgHLjjJMNEbcxhRBxkd1GbP1LD8cqTo4RpMMOG2sMGOqUB0W6ZF5SX7zpFI%2BZJTHTdVB%2FW1%2BzhcZyUaTsR8prNMqjCDHll4FY2atQGyip3lGG4keY%2BwCjfqd6FePnk%2F2A55Pw4ng%2FzD4JtxiYlHnGjRBlPUs5IuBPYpbnPCp8i47T8WYw0hXYln4iE%2BUifbIl6aZuGwXsmeKecOAoDLh9Aa%2FbHs%2FPDPtpgzBwI9uAcc0PDVm%2FjhXGopeekLRAApnLr1n749e86&X-Amz-Signature=a69e20f451abd56f394bcf4c493346c16cf3c833a202c648bb8e0c8b460aa634&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z2WRRQN%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T170853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCICYak47l8FAjv%2BMzCkB8S3AJb8niFeJV6IHtGF12vH37AiEAgOUE578HSnVtL3K%2FXPYx1Wny3JdYwquFGRZRbXB6OVEq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGFEc2Oz03C1g88WcyrcA2riVkjZ4Fy3JS1J6Th%2Fb8MUKLia7yW4orJoR2PSLOd5lovzNhO2Sypb%2BoZbKHiwxUxKCfUhWRveRpBU3IpiqaGlhqONqnD9kKL595hwb9wum4J0dw8FbdUabSZWLlE62lSRtRs0NDZMIwF4PnetcVizFgHtllIphgdLbIV4URtrFgK4lLre8kPRmhN0%2BuIfnbaBXJzSHtrN1ERQeAp8Fk2SwcFKWYZ887sTTnMPjIcMRYjx%2F55iTNTvP0LzCXURAHtX7HLnBtVd1y4quyvjWA7ZoWpy56DWN5uQsVHM3ODxaZnEgvlgXcJ0rqklnEadqfuziq2%2BjHNBLStqKAuLmXE6BSsSLVBImtBMNf4BhUytrfOH4vzP8GD2WQGKRi2sc%2BRFZGcWKfkkkz%2F9P0Linnx69Us45vzmaZq86qQfmL5MkWcetmBNXwzVQdOLf2D%2FzF%2FBHfyBTyRGYDK49Rz5pV3z%2B6QFP2lq1Zqs%2BXuvPpOBQnfDHm0qhTdrtdXmZt64IOwUGtiGwx4cZV7hiwJosvXPdK0%2F3S8gLec9eDXNoKF7hCqRV04swj4kJFcV51YV7qiDhHEC6U1DKfKW1RiLbppgOZLgHLjjJMNEbcxhRBxkd1GbP1LD8cqTo4RpMMOG2sMGOqUB0W6ZF5SX7zpFI%2BZJTHTdVB%2FW1%2BzhcZyUaTsR8prNMqjCDHll4FY2atQGyip3lGG4keY%2BwCjfqd6FePnk%2F2A55Pw4ng%2FzD4JtxiYlHnGjRBlPUs5IuBPYpbnPCp8i47T8WYw0hXYln4iE%2BUifbIl6aZuGwXsmeKecOAoDLh9Aa%2FbHs%2FPDPtpgzBwI9uAcc0PDVm%2FjhXGopeekLRAApnLr1n749e86&X-Amz-Signature=8ac1b652982d38fcab60204c464fc82d516bd1fc5fdab1a622487216f10156b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
