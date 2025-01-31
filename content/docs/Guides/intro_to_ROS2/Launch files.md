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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MVLLS4K%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T100809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbihiMAVtTMCKxwbmH1ZstUUuWRbaf6Ta8kWU%2Bj9f93QIgffYpD9bzjDDXUs2bU80smjiyeH%2FMIlNFWuQFu5Jl6FwqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjCz9xV3OjhWCbyvCrcA7tGZW8EzYIg51otRGZxu19tpxxNlOSohji922%2FBsokj5qdIVv8CDTV6axAzabAOJVRCQ%2BQRTbE7qvDAJOsIJdT1TVpY7W8%2BhPcK6WBbKn%2Boo8QSax%2FUMIamjf95qwS10x4%2FhLIgEy3MSBHhbzuBx7wtYzBS5S1BngqRLiYCEQPU07rog5ttjTPUKR7H8eGCtOcr7nEiWPtHrkUGEHB83M9%2Bob96odslY114Ff54K3dl9z0MFfQTzE6sRPZ4f9Bk0KK72GFC0ILy%2F%2F6ZC4TBv8HxNcfbLMvEiw921rXuUr3unXVBXf8Ik92M8AhfDvh9rpNy4i%2Byx%2BDvIi%2FXY6%2FkRI0Gx066tTE7rtkXM%2BUiUM8I0dhrE7wji3q3JILfpHBIhvbHGF8pLqIST%2F%2FJw35jXDjZQwE4tg8ShVL646USdEtalksCcptUMN9ZeWmlwFKURID4Bx2MjOdoajqJQjuajPb1WLztg0ixZPgydJyqnhss1q9EVXWOQsmuYxMNOjUAv2hfhTgclC%2FRF7vEqvBiSHzF8n%2B7MjdyDhvWksWsTBIwuJ3T17ZOX6wFSVpECU5DJNIyZfygpCG%2FOm0%2FcY6ain9QqPq16b6UHrDliG6e2rCR0y2xa8%2BWUHi27CJpMM648rwGOqUBV1rBWGcpCUz%2BAi5uH594055pFlnCpfdPzA6Zen1gNFnBB9jxWjBHzqaVlfaqu3yljFSUTs76nPZZHaAb71v6AkFO8ej2uzHod%2B%2BXSn%2FlizVlq4tgJCLznz70SzpjHeR4wBhxOAYgZ1Pct6H9jNTrRiTgZAPHzZhaBPCHuHvIPZGh4vxBDgHXosvilQQgr8z76DeZX1Y27Pu0SqzGJJmrNiOiQgbL&X-Amz-Signature=274ff716592e70e0f4c5dcfc39cb593746f6e28aececba19b2d69b8d782e4f29&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MVLLS4K%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T100809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbihiMAVtTMCKxwbmH1ZstUUuWRbaf6Ta8kWU%2Bj9f93QIgffYpD9bzjDDXUs2bU80smjiyeH%2FMIlNFWuQFu5Jl6FwqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjCz9xV3OjhWCbyvCrcA7tGZW8EzYIg51otRGZxu19tpxxNlOSohji922%2FBsokj5qdIVv8CDTV6axAzabAOJVRCQ%2BQRTbE7qvDAJOsIJdT1TVpY7W8%2BhPcK6WBbKn%2Boo8QSax%2FUMIamjf95qwS10x4%2FhLIgEy3MSBHhbzuBx7wtYzBS5S1BngqRLiYCEQPU07rog5ttjTPUKR7H8eGCtOcr7nEiWPtHrkUGEHB83M9%2Bob96odslY114Ff54K3dl9z0MFfQTzE6sRPZ4f9Bk0KK72GFC0ILy%2F%2F6ZC4TBv8HxNcfbLMvEiw921rXuUr3unXVBXf8Ik92M8AhfDvh9rpNy4i%2Byx%2BDvIi%2FXY6%2FkRI0Gx066tTE7rtkXM%2BUiUM8I0dhrE7wji3q3JILfpHBIhvbHGF8pLqIST%2F%2FJw35jXDjZQwE4tg8ShVL646USdEtalksCcptUMN9ZeWmlwFKURID4Bx2MjOdoajqJQjuajPb1WLztg0ixZPgydJyqnhss1q9EVXWOQsmuYxMNOjUAv2hfhTgclC%2FRF7vEqvBiSHzF8n%2B7MjdyDhvWksWsTBIwuJ3T17ZOX6wFSVpECU5DJNIyZfygpCG%2FOm0%2FcY6ain9QqPq16b6UHrDliG6e2rCR0y2xa8%2BWUHi27CJpMM648rwGOqUBV1rBWGcpCUz%2BAi5uH594055pFlnCpfdPzA6Zen1gNFnBB9jxWjBHzqaVlfaqu3yljFSUTs76nPZZHaAb71v6AkFO8ej2uzHod%2B%2BXSn%2FlizVlq4tgJCLznz70SzpjHeR4wBhxOAYgZ1Pct6H9jNTrRiTgZAPHzZhaBPCHuHvIPZGh4vxBDgHXosvilQQgr8z76DeZX1Y27Pu0SqzGJJmrNiOiQgbL&X-Amz-Signature=6563fea4e5688df9823b1546abcda4d7ae59ba5b41983a01516abeba992cb931&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MVLLS4K%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T100809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbihiMAVtTMCKxwbmH1ZstUUuWRbaf6Ta8kWU%2Bj9f93QIgffYpD9bzjDDXUs2bU80smjiyeH%2FMIlNFWuQFu5Jl6FwqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjCz9xV3OjhWCbyvCrcA7tGZW8EzYIg51otRGZxu19tpxxNlOSohji922%2FBsokj5qdIVv8CDTV6axAzabAOJVRCQ%2BQRTbE7qvDAJOsIJdT1TVpY7W8%2BhPcK6WBbKn%2Boo8QSax%2FUMIamjf95qwS10x4%2FhLIgEy3MSBHhbzuBx7wtYzBS5S1BngqRLiYCEQPU07rog5ttjTPUKR7H8eGCtOcr7nEiWPtHrkUGEHB83M9%2Bob96odslY114Ff54K3dl9z0MFfQTzE6sRPZ4f9Bk0KK72GFC0ILy%2F%2F6ZC4TBv8HxNcfbLMvEiw921rXuUr3unXVBXf8Ik92M8AhfDvh9rpNy4i%2Byx%2BDvIi%2FXY6%2FkRI0Gx066tTE7rtkXM%2BUiUM8I0dhrE7wji3q3JILfpHBIhvbHGF8pLqIST%2F%2FJw35jXDjZQwE4tg8ShVL646USdEtalksCcptUMN9ZeWmlwFKURID4Bx2MjOdoajqJQjuajPb1WLztg0ixZPgydJyqnhss1q9EVXWOQsmuYxMNOjUAv2hfhTgclC%2FRF7vEqvBiSHzF8n%2B7MjdyDhvWksWsTBIwuJ3T17ZOX6wFSVpECU5DJNIyZfygpCG%2FOm0%2FcY6ain9QqPq16b6UHrDliG6e2rCR0y2xa8%2BWUHi27CJpMM648rwGOqUBV1rBWGcpCUz%2BAi5uH594055pFlnCpfdPzA6Zen1gNFnBB9jxWjBHzqaVlfaqu3yljFSUTs76nPZZHaAb71v6AkFO8ej2uzHod%2B%2BXSn%2FlizVlq4tgJCLznz70SzpjHeR4wBhxOAYgZ1Pct6H9jNTrRiTgZAPHzZhaBPCHuHvIPZGh4vxBDgHXosvilQQgr8z76DeZX1Y27Pu0SqzGJJmrNiOiQgbL&X-Amz-Signature=a24f1269d08af1089e5f8c30ae28ecf69d9705e5ad5aaa9397bd4af1aa1309e6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
