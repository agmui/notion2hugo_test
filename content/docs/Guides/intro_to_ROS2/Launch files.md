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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFV3KLUR%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T050933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCJ0unr%2BTwZ%2F3NJKPJMbkUaL1D9q1edM9V0i%2BjbG2fydwIhAN5%2BAhX32vYNFBgwE72XJoV5Ikc8SQhuJcsV56QYJ%2B4fKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzq1LVg2CXJyUlTeHkq3AMH281WCGIVBB1hu4qUIJpiUHeDluEe4pKLvaCJODk58CAPcwk610M0kZXOOoLquvp4mbKHGyN%2BC%2F1y%2FC6HSHreJ2YU05Af5Hn58EX2U1NVLLOMzvO5A3PBOqTNXyzGBI5bAWewKQ0XnlUuxI08SovXVEnuGywgiWNLTcp%2B0LDJCuGiRYyNczOP4rEyJpRSW5mcmivVTes0h9BqOn67FUMnACWWEww573OY9pGcQ%2F2%2Bh8G1hPUZlM2GykE3F%2BlmfPXJIc97U4EJpd0xAniqbzhe8VyDwLMqFvK%2F0peIzTZwTHUEKOAC8vOq7iE2CsuX6wlS41QMH6%2B8A4gNcPBzp%2BTF6kvFanMwy3OnJ2DHdiXEY4BPnHOzFqCoG%2FasgpPKqgV%2BI%2BnijkNgs50bgm5xUOatYV7%2FNZmoz1192S%2BwV%2BsDXVplUTg9me3jtbJkCq6gIqSEpP2BTUL4VLaDmEaj5BiJLorW2dvQv6pg%2FPk%2BrqORngGUrS36ruXDCArt5Urdz1%2Ft%2BBFHUMfzQBkUxJ%2BbQU5iBRcUdyhhuxFFCAylTM32k1Z%2Fs5q4vI%2Fqy4CcdI2qH7nsa37oS6cDy27WimvGovoTv8xsGg5UNGfw2LPLrCSKuBihkiIUMgQHXFDTpDCluJDBBjqkAf6sFoJqU%2FkeWVW61uiEQdnn7jJ7vs3w3x%2Bqc9PSlbRoDGjHLVSxcxJcjYtVqmnl15ZzuSkp%2BfnbPM7YgMEVn7b4VAGWYziy%2FXI5cQ5WMCLK3jC95SxV1VCny0LZ6nofs55y5iGEXMckDqK0RVldD2YvoX%2F%2FMrEY0O1JaLpZOcHuGaojw8hXD6aCEiW1XhI%2F2Z8X%2BrTefDoEEcIeJAu6WIZbdZuY&X-Amz-Signature=d7c897750a846a166eee42ea7769fa44eb29cf52b40b01a62be5face0b481f1c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFV3KLUR%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T050933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCJ0unr%2BTwZ%2F3NJKPJMbkUaL1D9q1edM9V0i%2BjbG2fydwIhAN5%2BAhX32vYNFBgwE72XJoV5Ikc8SQhuJcsV56QYJ%2B4fKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzq1LVg2CXJyUlTeHkq3AMH281WCGIVBB1hu4qUIJpiUHeDluEe4pKLvaCJODk58CAPcwk610M0kZXOOoLquvp4mbKHGyN%2BC%2F1y%2FC6HSHreJ2YU05Af5Hn58EX2U1NVLLOMzvO5A3PBOqTNXyzGBI5bAWewKQ0XnlUuxI08SovXVEnuGywgiWNLTcp%2B0LDJCuGiRYyNczOP4rEyJpRSW5mcmivVTes0h9BqOn67FUMnACWWEww573OY9pGcQ%2F2%2Bh8G1hPUZlM2GykE3F%2BlmfPXJIc97U4EJpd0xAniqbzhe8VyDwLMqFvK%2F0peIzTZwTHUEKOAC8vOq7iE2CsuX6wlS41QMH6%2B8A4gNcPBzp%2BTF6kvFanMwy3OnJ2DHdiXEY4BPnHOzFqCoG%2FasgpPKqgV%2BI%2BnijkNgs50bgm5xUOatYV7%2FNZmoz1192S%2BwV%2BsDXVplUTg9me3jtbJkCq6gIqSEpP2BTUL4VLaDmEaj5BiJLorW2dvQv6pg%2FPk%2BrqORngGUrS36ruXDCArt5Urdz1%2Ft%2BBFHUMfzQBkUxJ%2BbQU5iBRcUdyhhuxFFCAylTM32k1Z%2Fs5q4vI%2Fqy4CcdI2qH7nsa37oS6cDy27WimvGovoTv8xsGg5UNGfw2LPLrCSKuBihkiIUMgQHXFDTpDCluJDBBjqkAf6sFoJqU%2FkeWVW61uiEQdnn7jJ7vs3w3x%2Bqc9PSlbRoDGjHLVSxcxJcjYtVqmnl15ZzuSkp%2BfnbPM7YgMEVn7b4VAGWYziy%2FXI5cQ5WMCLK3jC95SxV1VCny0LZ6nofs55y5iGEXMckDqK0RVldD2YvoX%2F%2FMrEY0O1JaLpZOcHuGaojw8hXD6aCEiW1XhI%2F2Z8X%2BrTefDoEEcIeJAu6WIZbdZuY&X-Amz-Signature=a0085d2f616870c794a5f2ea568391b556642799cb67175c43eb9b1490ab7ad8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFV3KLUR%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T050933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCJ0unr%2BTwZ%2F3NJKPJMbkUaL1D9q1edM9V0i%2BjbG2fydwIhAN5%2BAhX32vYNFBgwE72XJoV5Ikc8SQhuJcsV56QYJ%2B4fKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzq1LVg2CXJyUlTeHkq3AMH281WCGIVBB1hu4qUIJpiUHeDluEe4pKLvaCJODk58CAPcwk610M0kZXOOoLquvp4mbKHGyN%2BC%2F1y%2FC6HSHreJ2YU05Af5Hn58EX2U1NVLLOMzvO5A3PBOqTNXyzGBI5bAWewKQ0XnlUuxI08SovXVEnuGywgiWNLTcp%2B0LDJCuGiRYyNczOP4rEyJpRSW5mcmivVTes0h9BqOn67FUMnACWWEww573OY9pGcQ%2F2%2Bh8G1hPUZlM2GykE3F%2BlmfPXJIc97U4EJpd0xAniqbzhe8VyDwLMqFvK%2F0peIzTZwTHUEKOAC8vOq7iE2CsuX6wlS41QMH6%2B8A4gNcPBzp%2BTF6kvFanMwy3OnJ2DHdiXEY4BPnHOzFqCoG%2FasgpPKqgV%2BI%2BnijkNgs50bgm5xUOatYV7%2FNZmoz1192S%2BwV%2BsDXVplUTg9me3jtbJkCq6gIqSEpP2BTUL4VLaDmEaj5BiJLorW2dvQv6pg%2FPk%2BrqORngGUrS36ruXDCArt5Urdz1%2Ft%2BBFHUMfzQBkUxJ%2BbQU5iBRcUdyhhuxFFCAylTM32k1Z%2Fs5q4vI%2Fqy4CcdI2qH7nsa37oS6cDy27WimvGovoTv8xsGg5UNGfw2LPLrCSKuBihkiIUMgQHXFDTpDCluJDBBjqkAf6sFoJqU%2FkeWVW61uiEQdnn7jJ7vs3w3x%2Bqc9PSlbRoDGjHLVSxcxJcjYtVqmnl15ZzuSkp%2BfnbPM7YgMEVn7b4VAGWYziy%2FXI5cQ5WMCLK3jC95SxV1VCny0LZ6nofs55y5iGEXMckDqK0RVldD2YvoX%2F%2FMrEY0O1JaLpZOcHuGaojw8hXD6aCEiW1XhI%2F2Z8X%2BrTefDoEEcIeJAu6WIZbdZuY&X-Amz-Signature=e1da214d06e443ba0553e6081d9f26e7a00bde8a1d9ccf5fc19bb6c1e97ff49d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
