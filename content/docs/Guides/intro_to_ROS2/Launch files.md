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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPDTB7KL%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIDDDhzx%2BEA239fGLZcYNuovW5z9lnSm2xD5CTWL9ApwhAiEA2hisEueeyUwHHA1xqNclmDb2nMFa3mnKPC%2BNxqd0wVAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMXPFikZECgCehesCrcA3XycGK4knKpCwrPovSGjfK%2Bv9YKUv1971veIgQWBkn9KFUO313vI6aFK07j0We04BfN3urQTrQokQzV%2F3qrJyfIIL8mAd%2FOjRTod6zZ4ltQEJJUTx58nivpKsJreW3BQUrjmTbBYTqsOWPJF5axRCTPBSVED18hNMV%2BwX2jngVH8duCflvXbJspJECahV9wGw3YupLPvqjgoT5jQbbOw2N7R09xCZyq2MdXw1fdbrWSifbZOcZ53dvFzQp29CgSvuGzeH6Sb44LbJKfcSKS%2BD7HP%2Fh89ZKeLBKVkqOI%2Bl%2F6ZlzfvK2C4Ywy9PC6B5%2BhNMbsokYnhgI2ShI9XpRZNbwW2s1waDlv58RqQNW12vYGpUE2C7CMftp%2FIfCUtTKlbjuDV%2BksYc7Z9EOo33ILFyk8DWB7VpG3mdm2wPZ%2BknOkFuUVz7htjR1XMKM1y35htZDG2iXAvZfmHvWCO0XbXGvNaCG1qTyWyAyQHiUBcJBWjohgLVjhNzujTTI2AZws2LdP8Sn9cWCvlwJFPiNqhHbBA6Y9M0CfTwAXe8Y53joLt9bAiTQN7nfhEnl3qbKWvz68Wb%2FyvwiYM6HLUv6dDI4AkYkIYiX1VWY1lhWTaO7D0Y7ycoUzAfucVFrKMPH378EGOqUBum4u%2Frs3INzxITWTyE5NxjQ4qMQ%2BpH4IMeuc0sS1HPDwVQo%2BccAVRXDNfAdGxAebpS2lqMxooE8abrMW1xvfIIw4TBRwdMSH0caca2Km6VqaBe3v8vEBrqurL1UULu6kU7ggA54LZ3pTPeXco%2BATeTRv7u0jmRUDhK50BnS9pJ%2Fw8%2BMAGKT8mkGdG2Nb3HpJsMAF6vPAqbRYolphA37vC3RfAZz%2B&X-Amz-Signature=3f9081f1a7e34f96b914c16189a4bf0c7cd90da96d736601b41ee0673365fe04&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPDTB7KL%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIDDDhzx%2BEA239fGLZcYNuovW5z9lnSm2xD5CTWL9ApwhAiEA2hisEueeyUwHHA1xqNclmDb2nMFa3mnKPC%2BNxqd0wVAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMXPFikZECgCehesCrcA3XycGK4knKpCwrPovSGjfK%2Bv9YKUv1971veIgQWBkn9KFUO313vI6aFK07j0We04BfN3urQTrQokQzV%2F3qrJyfIIL8mAd%2FOjRTod6zZ4ltQEJJUTx58nivpKsJreW3BQUrjmTbBYTqsOWPJF5axRCTPBSVED18hNMV%2BwX2jngVH8duCflvXbJspJECahV9wGw3YupLPvqjgoT5jQbbOw2N7R09xCZyq2MdXw1fdbrWSifbZOcZ53dvFzQp29CgSvuGzeH6Sb44LbJKfcSKS%2BD7HP%2Fh89ZKeLBKVkqOI%2Bl%2F6ZlzfvK2C4Ywy9PC6B5%2BhNMbsokYnhgI2ShI9XpRZNbwW2s1waDlv58RqQNW12vYGpUE2C7CMftp%2FIfCUtTKlbjuDV%2BksYc7Z9EOo33ILFyk8DWB7VpG3mdm2wPZ%2BknOkFuUVz7htjR1XMKM1y35htZDG2iXAvZfmHvWCO0XbXGvNaCG1qTyWyAyQHiUBcJBWjohgLVjhNzujTTI2AZws2LdP8Sn9cWCvlwJFPiNqhHbBA6Y9M0CfTwAXe8Y53joLt9bAiTQN7nfhEnl3qbKWvz68Wb%2FyvwiYM6HLUv6dDI4AkYkIYiX1VWY1lhWTaO7D0Y7ycoUzAfucVFrKMPH378EGOqUBum4u%2Frs3INzxITWTyE5NxjQ4qMQ%2BpH4IMeuc0sS1HPDwVQo%2BccAVRXDNfAdGxAebpS2lqMxooE8abrMW1xvfIIw4TBRwdMSH0caca2Km6VqaBe3v8vEBrqurL1UULu6kU7ggA54LZ3pTPeXco%2BATeTRv7u0jmRUDhK50BnS9pJ%2Fw8%2BMAGKT8mkGdG2Nb3HpJsMAF6vPAqbRYolphA37vC3RfAZz%2B&X-Amz-Signature=b0deea02341fe7991a0c91624e785a89d6d21d2e6c6405df5e6d44623eae26fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPDTB7KL%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIDDDhzx%2BEA239fGLZcYNuovW5z9lnSm2xD5CTWL9ApwhAiEA2hisEueeyUwHHA1xqNclmDb2nMFa3mnKPC%2BNxqd0wVAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMXPFikZECgCehesCrcA3XycGK4knKpCwrPovSGjfK%2Bv9YKUv1971veIgQWBkn9KFUO313vI6aFK07j0We04BfN3urQTrQokQzV%2F3qrJyfIIL8mAd%2FOjRTod6zZ4ltQEJJUTx58nivpKsJreW3BQUrjmTbBYTqsOWPJF5axRCTPBSVED18hNMV%2BwX2jngVH8duCflvXbJspJECahV9wGw3YupLPvqjgoT5jQbbOw2N7R09xCZyq2MdXw1fdbrWSifbZOcZ53dvFzQp29CgSvuGzeH6Sb44LbJKfcSKS%2BD7HP%2Fh89ZKeLBKVkqOI%2Bl%2F6ZlzfvK2C4Ywy9PC6B5%2BhNMbsokYnhgI2ShI9XpRZNbwW2s1waDlv58RqQNW12vYGpUE2C7CMftp%2FIfCUtTKlbjuDV%2BksYc7Z9EOo33ILFyk8DWB7VpG3mdm2wPZ%2BknOkFuUVz7htjR1XMKM1y35htZDG2iXAvZfmHvWCO0XbXGvNaCG1qTyWyAyQHiUBcJBWjohgLVjhNzujTTI2AZws2LdP8Sn9cWCvlwJFPiNqhHbBA6Y9M0CfTwAXe8Y53joLt9bAiTQN7nfhEnl3qbKWvz68Wb%2FyvwiYM6HLUv6dDI4AkYkIYiX1VWY1lhWTaO7D0Y7ycoUzAfucVFrKMPH378EGOqUBum4u%2Frs3INzxITWTyE5NxjQ4qMQ%2BpH4IMeuc0sS1HPDwVQo%2BccAVRXDNfAdGxAebpS2lqMxooE8abrMW1xvfIIw4TBRwdMSH0caca2Km6VqaBe3v8vEBrqurL1UULu6kU7ggA54LZ3pTPeXco%2BATeTRv7u0jmRUDhK50BnS9pJ%2Fw8%2BMAGKT8mkGdG2Nb3HpJsMAF6vPAqbRYolphA37vC3RfAZz%2B&X-Amz-Signature=004981098e934214ebeee8681b7a57755c12e6a62adfdad00a31c381aa78580c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
