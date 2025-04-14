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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YIX3LRL%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T190146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhqnu9bLL3dbHtZLUr86%2FspysKtHvtjbwrqjn%2F2i9JJAiEAoVnpc3fFxBWMTz7VQC%2FqXVDAQDcmqphMIy1lyA2Ka1kq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDGyK28WLaC4U48o5kCrcA9pLKOKyl%2FdRy%2FhVz0zRTGsfoqA60a4B43JAZLWT%2F81kBiWr4oevLkCrTepe89Xab0QdsmhQ0d%2FpTZfHvxP8Bb82MlMIok9d8AxRF%2FS38WG%2FBYUOmRXnswGbb2bP7QQniOU9HZd0WuDYFuEPK0KJ6COpNb%2BDcYZWqe9%2FJ6u9xNH2Bkx7ys7PDmwfIcYvWyqE4KbUl4Nx%2BuLlFNwiNmw5QyVUrKAuPPWbVVLnqB%2BcLjjWiNHPKyWj1xSCmclY17cNL8AOyQzS9YM8Uuiw6hSEC0PbXmcTQerdp1Bve2IYIYFL1hjglNmEXTLFxXiDj7FBcqsGlFIMk6D243M1StwJyPm9JVwXUb7ImsC%2Bofe%2FxU3%2BSJ6m1IffmbsR2AN%2BWsXVXBomK%2BUuk7CJaplJlp3gODUxEZ7wqn5hwV9fQ2047j85r63gxYlyTvk587l3pE2QTJu9K1Ywhuj%2FF1IAfq0hjbZgS9%2BmIwyT0HlsdTIS%2FidIyHL1CZ5n8TVhPKe9z02d%2Bw7UCfA2%2BM6Hpcc43IMW5Yh%2BRZjVfrXAtztOBGXGh9WfAnj7rYRi9%2Fq39v0nVxyP%2BTnkrSHjdfm5vepVRGOhjd%2BklCuaxI%2BW9iczJ9mVnPDSBVTCUqb8TlnLCz7yMNWU9b8GOqUBbdR3gj3I0KBoiAYNBsHWV2Ik3yKuPjf%2Fg047ToATxR%2FO2FPxqLqimzke%2BZtWu7LPcTtEbJOcHcm4N8VQp%2F9ZHBHeSkp%2FufjuT3xkJfXG6e%2FcPkpPabLTQdvI1mCa1nbDwA2HSV3qG82ZFA77E0hQ6LqJHK%2FLTi2zAWMBGIw9bj3mZaH0rl%2FgsQH8pmxFTaR6yzVKmedhaTBBbXLNFonr%2BU%2Bj5ShF&X-Amz-Signature=4c49ca4094d5fbe60f645b7ea9edadee280bb6bef11a1fc5ee3907eabb171c13&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YIX3LRL%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T190146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhqnu9bLL3dbHtZLUr86%2FspysKtHvtjbwrqjn%2F2i9JJAiEAoVnpc3fFxBWMTz7VQC%2FqXVDAQDcmqphMIy1lyA2Ka1kq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDGyK28WLaC4U48o5kCrcA9pLKOKyl%2FdRy%2FhVz0zRTGsfoqA60a4B43JAZLWT%2F81kBiWr4oevLkCrTepe89Xab0QdsmhQ0d%2FpTZfHvxP8Bb82MlMIok9d8AxRF%2FS38WG%2FBYUOmRXnswGbb2bP7QQniOU9HZd0WuDYFuEPK0KJ6COpNb%2BDcYZWqe9%2FJ6u9xNH2Bkx7ys7PDmwfIcYvWyqE4KbUl4Nx%2BuLlFNwiNmw5QyVUrKAuPPWbVVLnqB%2BcLjjWiNHPKyWj1xSCmclY17cNL8AOyQzS9YM8Uuiw6hSEC0PbXmcTQerdp1Bve2IYIYFL1hjglNmEXTLFxXiDj7FBcqsGlFIMk6D243M1StwJyPm9JVwXUb7ImsC%2Bofe%2FxU3%2BSJ6m1IffmbsR2AN%2BWsXVXBomK%2BUuk7CJaplJlp3gODUxEZ7wqn5hwV9fQ2047j85r63gxYlyTvk587l3pE2QTJu9K1Ywhuj%2FF1IAfq0hjbZgS9%2BmIwyT0HlsdTIS%2FidIyHL1CZ5n8TVhPKe9z02d%2Bw7UCfA2%2BM6Hpcc43IMW5Yh%2BRZjVfrXAtztOBGXGh9WfAnj7rYRi9%2Fq39v0nVxyP%2BTnkrSHjdfm5vepVRGOhjd%2BklCuaxI%2BW9iczJ9mVnPDSBVTCUqb8TlnLCz7yMNWU9b8GOqUBbdR3gj3I0KBoiAYNBsHWV2Ik3yKuPjf%2Fg047ToATxR%2FO2FPxqLqimzke%2BZtWu7LPcTtEbJOcHcm4N8VQp%2F9ZHBHeSkp%2FufjuT3xkJfXG6e%2FcPkpPabLTQdvI1mCa1nbDwA2HSV3qG82ZFA77E0hQ6LqJHK%2FLTi2zAWMBGIw9bj3mZaH0rl%2FgsQH8pmxFTaR6yzVKmedhaTBBbXLNFonr%2BU%2Bj5ShF&X-Amz-Signature=4b4f2ee44ee82a4b71ffc82e95b1e3255b144667a81a71f280e0fdfec7b65209&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YIX3LRL%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T190146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhqnu9bLL3dbHtZLUr86%2FspysKtHvtjbwrqjn%2F2i9JJAiEAoVnpc3fFxBWMTz7VQC%2FqXVDAQDcmqphMIy1lyA2Ka1kq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDGyK28WLaC4U48o5kCrcA9pLKOKyl%2FdRy%2FhVz0zRTGsfoqA60a4B43JAZLWT%2F81kBiWr4oevLkCrTepe89Xab0QdsmhQ0d%2FpTZfHvxP8Bb82MlMIok9d8AxRF%2FS38WG%2FBYUOmRXnswGbb2bP7QQniOU9HZd0WuDYFuEPK0KJ6COpNb%2BDcYZWqe9%2FJ6u9xNH2Bkx7ys7PDmwfIcYvWyqE4KbUl4Nx%2BuLlFNwiNmw5QyVUrKAuPPWbVVLnqB%2BcLjjWiNHPKyWj1xSCmclY17cNL8AOyQzS9YM8Uuiw6hSEC0PbXmcTQerdp1Bve2IYIYFL1hjglNmEXTLFxXiDj7FBcqsGlFIMk6D243M1StwJyPm9JVwXUb7ImsC%2Bofe%2FxU3%2BSJ6m1IffmbsR2AN%2BWsXVXBomK%2BUuk7CJaplJlp3gODUxEZ7wqn5hwV9fQ2047j85r63gxYlyTvk587l3pE2QTJu9K1Ywhuj%2FF1IAfq0hjbZgS9%2BmIwyT0HlsdTIS%2FidIyHL1CZ5n8TVhPKe9z02d%2Bw7UCfA2%2BM6Hpcc43IMW5Yh%2BRZjVfrXAtztOBGXGh9WfAnj7rYRi9%2Fq39v0nVxyP%2BTnkrSHjdfm5vepVRGOhjd%2BklCuaxI%2BW9iczJ9mVnPDSBVTCUqb8TlnLCz7yMNWU9b8GOqUBbdR3gj3I0KBoiAYNBsHWV2Ik3yKuPjf%2Fg047ToATxR%2FO2FPxqLqimzke%2BZtWu7LPcTtEbJOcHcm4N8VQp%2F9ZHBHeSkp%2FufjuT3xkJfXG6e%2FcPkpPabLTQdvI1mCa1nbDwA2HSV3qG82ZFA77E0hQ6LqJHK%2FLTi2zAWMBGIw9bj3mZaH0rl%2FgsQH8pmxFTaR6yzVKmedhaTBBbXLNFonr%2BU%2Bj5ShF&X-Amz-Signature=0cebc410b5c861da5a555ff8cdc913ed52368ae60080eb2fa30cda4f4defba3b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
