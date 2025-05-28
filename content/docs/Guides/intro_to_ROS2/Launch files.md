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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UWMQRL5%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD30Wyk271pOs25%2FtC13YsCe%2B3Ouu7C42KbJ97i7H%2FP2gIgTPsk0Y8pGvFVa%2B4VYV5aIrn2x4PBy3yeVdLYlZGyMO0q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDAUARDtyLJG4LCGLaCrcA5w2bHGo1GGpwuhPMOH78TGhBck7wTx7Ua8qUjHb%2Fcze0VB%2FqS89AWqQ6MH%2BFcKw7mKvWqq%2BV6jV%2FK0JFmMG6N8nZTIC5HQN3DLpLbRki89tzxPpPPlKHic6uT4qTnvQ%2BZgmfmXcy2hY0jKoDsDyp6kC2avjDJIcpVepp3%2BndhrcHs7XhrHyn6t5aRgbFwiTYF1BOHvCb56ZToUsHYyxfQ5rMNyBuDdIL%2Fo2F6ibK2TbYYSvWeic%2FoHv3S5VfKycjXBX83OD07cvk5egk8%2Flh%2FjJlPaYAbT8pFdA2DCYWoHWlcddqOBlcqx1%2FeAvZ8ecky6n634GJBfkqnnaQzhW8DxF5jPLluzu2Uuy83SOJ98iSq3kxseEznmkAlOkzfELzF188LCDN7kuwsAjUPdHE09aukywwrtGk4zGaIx4x8v%2F5TJ%2FcQS2NumbhgHIGrwlOAhhZI6Q8L6mdj%2BVoLRQ%2BH47nhADaL23B2LlLCV4O%2FFtXUYcihRSb4c0Nzqg%2BwIcdxbQq4keWPMaiw3XDpZTfCIO18SyVLzOPGYetozqSzDJGKcPiL1vPGDuAS%2FJB2XJnXsmSiom7W3nQjkE5gz7FKKVp9kPNZRJQPRzSQGHMkirnc8tpg2lwa57i2Y2MOz%2B3MEGOqUBhF6STxx%2Bn9IlDkh3fRWZkjEpAmtfQIDAl79blQ9aFx%2Fty7uiFPu05nv3g%2FoS8C77X7RDs%2FoFbi%2BK2YsUYqZigX5k71tXzvTMcsZKfNF7ryXuXZ3SXjcZQ1qwO8I7lnmxNpuHG50n9cEZUfOAG8raBWMPseNSHOFRYWaRZY5qvJxBhm2MyNmyNBuYXCvuSFbwuGyFiTow5VHid8lFWJxzYMyt6XMZ&X-Amz-Signature=5834dc2a8b5afe49fdb817f267d61528e9ba46bc77a940c7b60506c50ec64754&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UWMQRL5%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD30Wyk271pOs25%2FtC13YsCe%2B3Ouu7C42KbJ97i7H%2FP2gIgTPsk0Y8pGvFVa%2B4VYV5aIrn2x4PBy3yeVdLYlZGyMO0q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDAUARDtyLJG4LCGLaCrcA5w2bHGo1GGpwuhPMOH78TGhBck7wTx7Ua8qUjHb%2Fcze0VB%2FqS89AWqQ6MH%2BFcKw7mKvWqq%2BV6jV%2FK0JFmMG6N8nZTIC5HQN3DLpLbRki89tzxPpPPlKHic6uT4qTnvQ%2BZgmfmXcy2hY0jKoDsDyp6kC2avjDJIcpVepp3%2BndhrcHs7XhrHyn6t5aRgbFwiTYF1BOHvCb56ZToUsHYyxfQ5rMNyBuDdIL%2Fo2F6ibK2TbYYSvWeic%2FoHv3S5VfKycjXBX83OD07cvk5egk8%2Flh%2FjJlPaYAbT8pFdA2DCYWoHWlcddqOBlcqx1%2FeAvZ8ecky6n634GJBfkqnnaQzhW8DxF5jPLluzu2Uuy83SOJ98iSq3kxseEznmkAlOkzfELzF188LCDN7kuwsAjUPdHE09aukywwrtGk4zGaIx4x8v%2F5TJ%2FcQS2NumbhgHIGrwlOAhhZI6Q8L6mdj%2BVoLRQ%2BH47nhADaL23B2LlLCV4O%2FFtXUYcihRSb4c0Nzqg%2BwIcdxbQq4keWPMaiw3XDpZTfCIO18SyVLzOPGYetozqSzDJGKcPiL1vPGDuAS%2FJB2XJnXsmSiom7W3nQjkE5gz7FKKVp9kPNZRJQPRzSQGHMkirnc8tpg2lwa57i2Y2MOz%2B3MEGOqUBhF6STxx%2Bn9IlDkh3fRWZkjEpAmtfQIDAl79blQ9aFx%2Fty7uiFPu05nv3g%2FoS8C77X7RDs%2FoFbi%2BK2YsUYqZigX5k71tXzvTMcsZKfNF7ryXuXZ3SXjcZQ1qwO8I7lnmxNpuHG50n9cEZUfOAG8raBWMPseNSHOFRYWaRZY5qvJxBhm2MyNmyNBuYXCvuSFbwuGyFiTow5VHid8lFWJxzYMyt6XMZ&X-Amz-Signature=4251fa323492b11df4070c0d10c76e71dd9e78a565ba3a59b6e94f68647186f5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UWMQRL5%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD30Wyk271pOs25%2FtC13YsCe%2B3Ouu7C42KbJ97i7H%2FP2gIgTPsk0Y8pGvFVa%2B4VYV5aIrn2x4PBy3yeVdLYlZGyMO0q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDAUARDtyLJG4LCGLaCrcA5w2bHGo1GGpwuhPMOH78TGhBck7wTx7Ua8qUjHb%2Fcze0VB%2FqS89AWqQ6MH%2BFcKw7mKvWqq%2BV6jV%2FK0JFmMG6N8nZTIC5HQN3DLpLbRki89tzxPpPPlKHic6uT4qTnvQ%2BZgmfmXcy2hY0jKoDsDyp6kC2avjDJIcpVepp3%2BndhrcHs7XhrHyn6t5aRgbFwiTYF1BOHvCb56ZToUsHYyxfQ5rMNyBuDdIL%2Fo2F6ibK2TbYYSvWeic%2FoHv3S5VfKycjXBX83OD07cvk5egk8%2Flh%2FjJlPaYAbT8pFdA2DCYWoHWlcddqOBlcqx1%2FeAvZ8ecky6n634GJBfkqnnaQzhW8DxF5jPLluzu2Uuy83SOJ98iSq3kxseEznmkAlOkzfELzF188LCDN7kuwsAjUPdHE09aukywwrtGk4zGaIx4x8v%2F5TJ%2FcQS2NumbhgHIGrwlOAhhZI6Q8L6mdj%2BVoLRQ%2BH47nhADaL23B2LlLCV4O%2FFtXUYcihRSb4c0Nzqg%2BwIcdxbQq4keWPMaiw3XDpZTfCIO18SyVLzOPGYetozqSzDJGKcPiL1vPGDuAS%2FJB2XJnXsmSiom7W3nQjkE5gz7FKKVp9kPNZRJQPRzSQGHMkirnc8tpg2lwa57i2Y2MOz%2B3MEGOqUBhF6STxx%2Bn9IlDkh3fRWZkjEpAmtfQIDAl79blQ9aFx%2Fty7uiFPu05nv3g%2FoS8C77X7RDs%2FoFbi%2BK2YsUYqZigX5k71tXzvTMcsZKfNF7ryXuXZ3SXjcZQ1qwO8I7lnmxNpuHG50n9cEZUfOAG8raBWMPseNSHOFRYWaRZY5qvJxBhm2MyNmyNBuYXCvuSFbwuGyFiTow5VHid8lFWJxzYMyt6XMZ&X-Amz-Signature=86ba0d970fbdea7000806a3bb5c1b5cf7d0060361ac6d384c68e01caaa5f466d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
