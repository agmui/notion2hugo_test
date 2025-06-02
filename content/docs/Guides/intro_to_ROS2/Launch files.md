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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QGFDPWA%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T121621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQCLRTI0Ni9HynINMMdNoxgqx1w9wNmjkpkMu2KOzQb4PgIhAN0W%2F524Nt%2BrT0JZa7Z8qscgnBamGB8fTebxL96YNiO5KogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyq%2BlMNntx5eZftsqgq3APbKAVoHfkrhDs4CH1aTKUb9qpmHZoOBabhVT3%2Bmq2f7btsanVALxc8Wgd9JXkJrffv%2F1fd3T7xJfprUk9I%2BWdRBly6oQbktzxJgu5FuKbVszNH08ZOEopf5p3XGCGgO%2BwjWFZbidWbtM6Y8F7dD0xFJCFeQgl4uLXbsLOUTFj2Qpj0%2Fp5bLj%2FC1GLxVJCoQoeEQgLsUQKvJunEsP3hovFazgTWL%2BBmdlRv2eo3S6cRAJ45Hhha84gqBTqBapjaLcStJTtgiI%2BAZddRx7MjyjqzM5Dh%2F6USvLe0S8CcDUAcatFE6rTqPh9ie%2FSXtOBGXGosLZuOeaHSnm%2FOIjey7rY1UH%2FF%2F3%2FItjSH2y0y5lRO0vOqyskUeLmu7knjhM38DuMW6V3qO%2B1U%2Be5gTuV7GOrsNwoKPtnSl%2F5Ijzxq%2FTvHluZuh9zTlObVZI0tuhb%2FihaUTi303OebpGbvdPvqdJvkhADlSQZ3JCFVEByvyFttuLcQTDQWU4RnInTw4ZUMXyXSDCPr6chSory31k%2FVsO%2FVzY64WH7tBdEC%2B3F78WYUEJElCf1gjK5cnKbipDS%2F5aeeULsq3NF3VXOewxgPdNmha8cnVRWCY0EgoOcwmXMG%2BSn1b6AmpHo0YgxKETDb9PXBBjqkAeouVNAKWnlLy5dXG2vQ33l72UnV%2Fx7oJA7bCufga%2B%2BNwuiohsUVW4arpmmGnz20e3YChhlh6SdLbN7qprAu7h%2FRDOMFd2HNC70Z%2ByDg6w4aMHBSZY5uKN2taC8QLoQ3rKMWOd%2FoKp8c%2BoJNAxXiCpJD%2BuU7KkmH%2B6KD%2Bv2GYhQN1ukuSJ0oxOucswA%2BXwd%2FpDDftF66cRuLc64s6vzBwqStrvqh&X-Amz-Signature=109bcbd0326d3864efccb7997d92fe6017a91f11a2e2636352a39266c031b611&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QGFDPWA%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T121621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQCLRTI0Ni9HynINMMdNoxgqx1w9wNmjkpkMu2KOzQb4PgIhAN0W%2F524Nt%2BrT0JZa7Z8qscgnBamGB8fTebxL96YNiO5KogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyq%2BlMNntx5eZftsqgq3APbKAVoHfkrhDs4CH1aTKUb9qpmHZoOBabhVT3%2Bmq2f7btsanVALxc8Wgd9JXkJrffv%2F1fd3T7xJfprUk9I%2BWdRBly6oQbktzxJgu5FuKbVszNH08ZOEopf5p3XGCGgO%2BwjWFZbidWbtM6Y8F7dD0xFJCFeQgl4uLXbsLOUTFj2Qpj0%2Fp5bLj%2FC1GLxVJCoQoeEQgLsUQKvJunEsP3hovFazgTWL%2BBmdlRv2eo3S6cRAJ45Hhha84gqBTqBapjaLcStJTtgiI%2BAZddRx7MjyjqzM5Dh%2F6USvLe0S8CcDUAcatFE6rTqPh9ie%2FSXtOBGXGosLZuOeaHSnm%2FOIjey7rY1UH%2FF%2F3%2FItjSH2y0y5lRO0vOqyskUeLmu7knjhM38DuMW6V3qO%2B1U%2Be5gTuV7GOrsNwoKPtnSl%2F5Ijzxq%2FTvHluZuh9zTlObVZI0tuhb%2FihaUTi303OebpGbvdPvqdJvkhADlSQZ3JCFVEByvyFttuLcQTDQWU4RnInTw4ZUMXyXSDCPr6chSory31k%2FVsO%2FVzY64WH7tBdEC%2B3F78WYUEJElCf1gjK5cnKbipDS%2F5aeeULsq3NF3VXOewxgPdNmha8cnVRWCY0EgoOcwmXMG%2BSn1b6AmpHo0YgxKETDb9PXBBjqkAeouVNAKWnlLy5dXG2vQ33l72UnV%2Fx7oJA7bCufga%2B%2BNwuiohsUVW4arpmmGnz20e3YChhlh6SdLbN7qprAu7h%2FRDOMFd2HNC70Z%2ByDg6w4aMHBSZY5uKN2taC8QLoQ3rKMWOd%2FoKp8c%2BoJNAxXiCpJD%2BuU7KkmH%2B6KD%2Bv2GYhQN1ukuSJ0oxOucswA%2BXwd%2FpDDftF66cRuLc64s6vzBwqStrvqh&X-Amz-Signature=82a5ba590082134ea6929f80a6e1462ced87cd9d32f1fef112bcfd810ca0d7e1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QGFDPWA%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T121621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQCLRTI0Ni9HynINMMdNoxgqx1w9wNmjkpkMu2KOzQb4PgIhAN0W%2F524Nt%2BrT0JZa7Z8qscgnBamGB8fTebxL96YNiO5KogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyq%2BlMNntx5eZftsqgq3APbKAVoHfkrhDs4CH1aTKUb9qpmHZoOBabhVT3%2Bmq2f7btsanVALxc8Wgd9JXkJrffv%2F1fd3T7xJfprUk9I%2BWdRBly6oQbktzxJgu5FuKbVszNH08ZOEopf5p3XGCGgO%2BwjWFZbidWbtM6Y8F7dD0xFJCFeQgl4uLXbsLOUTFj2Qpj0%2Fp5bLj%2FC1GLxVJCoQoeEQgLsUQKvJunEsP3hovFazgTWL%2BBmdlRv2eo3S6cRAJ45Hhha84gqBTqBapjaLcStJTtgiI%2BAZddRx7MjyjqzM5Dh%2F6USvLe0S8CcDUAcatFE6rTqPh9ie%2FSXtOBGXGosLZuOeaHSnm%2FOIjey7rY1UH%2FF%2F3%2FItjSH2y0y5lRO0vOqyskUeLmu7knjhM38DuMW6V3qO%2B1U%2Be5gTuV7GOrsNwoKPtnSl%2F5Ijzxq%2FTvHluZuh9zTlObVZI0tuhb%2FihaUTi303OebpGbvdPvqdJvkhADlSQZ3JCFVEByvyFttuLcQTDQWU4RnInTw4ZUMXyXSDCPr6chSory31k%2FVsO%2FVzY64WH7tBdEC%2B3F78WYUEJElCf1gjK5cnKbipDS%2F5aeeULsq3NF3VXOewxgPdNmha8cnVRWCY0EgoOcwmXMG%2BSn1b6AmpHo0YgxKETDb9PXBBjqkAeouVNAKWnlLy5dXG2vQ33l72UnV%2Fx7oJA7bCufga%2B%2BNwuiohsUVW4arpmmGnz20e3YChhlh6SdLbN7qprAu7h%2FRDOMFd2HNC70Z%2ByDg6w4aMHBSZY5uKN2taC8QLoQ3rKMWOd%2FoKp8c%2BoJNAxXiCpJD%2BuU7KkmH%2B6KD%2Bv2GYhQN1ukuSJ0oxOucswA%2BXwd%2FpDDftF66cRuLc64s6vzBwqStrvqh&X-Amz-Signature=74a8f58d1728ce1d25b92c376d63c1e483ed2a709bfd1a2adfbdbe3bc343a8a9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
