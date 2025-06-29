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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYXIKQKC%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T190202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9ZNOGhF%2F89YZ3G7ntV4l4AcijrC4Nt042uFD%2BLpQ0iQIgAwtO5zlkt%2B6JNX9HFG0Pi%2BBYNuu4JGUDYHhiZ3X%2FdeUqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDChGKHygLOVcqjHqOyrcA8iWSZLlga%2BxVciGQ%2BuBxosN7v7HWqPwX%2BYa7Ee8yjdCsB2rb94k8KJTDwX%2FkDQzDRxc3MQfECDewOL6QAIrGoz7BxoLrdJCK%2BvPUZFNtAmm4Y6AhwXdwBn0%2FJC7cwKDi5D%2FlqCjumvaeigQU3KR1KAgJDrRPUbtAQiWKdMtr0uFLr8VpD7TPUIZLa%2BUvrf24ekFvVBM1%2BugyIDRDZ0lygObWPsL7nDguCFOPLV%2Feyc6HVeugqhL1b1tZ000Z8zRVVIhP8lSil4bkWkz6EP6l5S8epLZGWebsaBJGg%2BNFiCbb65RIBzQXxXJaFM822y6Dd10OtoUakQMtaJftgp%2BaoYiqYPcjnre5v%2BFQNTYgnXB42YznBnpuAJIqGiJXnpsCd7KlDjpB0Xnp6fgahR8yZWcrMMdkPl2L1CY%2B9qHPr2IztGs7WWtWSux8yKE4MWN5jaF1dzzXdPmBvX5sYGZ8apZSSsN71pbxIpoU%2FfawHtho6%2F5tIntbBSNKwJjaKFCEga5x6nHI4iNT5QfLADL9SY%2B8p7dH6t4ZCKH1IyVywM7uJx9OaNTIV9qR1oHBvSXaJ0ci9O42To0hrt84kCLc9IdFSg69zTC9uuuI3XcD%2FVFZpqLpZyZViEKcuiyMIj7hcMGOqUBLIPK%2FTUFgunsBDQeO8wZC91ws3w1%2FNwagdVbTKzbXYhoakj7kw%2BaMiV3jvupddFSBGrIgBBShXqqin%2Fnkk0UhVy22tzYV0Zol3nfW30ISR8uJ4Xv5hnPq9VcLV8iHrC%2BG5e7eQlN0vgamT8bYWaBe%2Fd%2FFc2nX%2BVHz%2BOyhDJKLH8xRdeCDU2Ph%2F4J%2B9u9xHmaRnCYoO82YzxT9x2A2zi84epKiiXS&X-Amz-Signature=a14df30a66a594475dd58bacf222b8ec22d0014ef48832822cd9a206041a3584&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYXIKQKC%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T190202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9ZNOGhF%2F89YZ3G7ntV4l4AcijrC4Nt042uFD%2BLpQ0iQIgAwtO5zlkt%2B6JNX9HFG0Pi%2BBYNuu4JGUDYHhiZ3X%2FdeUqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDChGKHygLOVcqjHqOyrcA8iWSZLlga%2BxVciGQ%2BuBxosN7v7HWqPwX%2BYa7Ee8yjdCsB2rb94k8KJTDwX%2FkDQzDRxc3MQfECDewOL6QAIrGoz7BxoLrdJCK%2BvPUZFNtAmm4Y6AhwXdwBn0%2FJC7cwKDi5D%2FlqCjumvaeigQU3KR1KAgJDrRPUbtAQiWKdMtr0uFLr8VpD7TPUIZLa%2BUvrf24ekFvVBM1%2BugyIDRDZ0lygObWPsL7nDguCFOPLV%2Feyc6HVeugqhL1b1tZ000Z8zRVVIhP8lSil4bkWkz6EP6l5S8epLZGWebsaBJGg%2BNFiCbb65RIBzQXxXJaFM822y6Dd10OtoUakQMtaJftgp%2BaoYiqYPcjnre5v%2BFQNTYgnXB42YznBnpuAJIqGiJXnpsCd7KlDjpB0Xnp6fgahR8yZWcrMMdkPl2L1CY%2B9qHPr2IztGs7WWtWSux8yKE4MWN5jaF1dzzXdPmBvX5sYGZ8apZSSsN71pbxIpoU%2FfawHtho6%2F5tIntbBSNKwJjaKFCEga5x6nHI4iNT5QfLADL9SY%2B8p7dH6t4ZCKH1IyVywM7uJx9OaNTIV9qR1oHBvSXaJ0ci9O42To0hrt84kCLc9IdFSg69zTC9uuuI3XcD%2FVFZpqLpZyZViEKcuiyMIj7hcMGOqUBLIPK%2FTUFgunsBDQeO8wZC91ws3w1%2FNwagdVbTKzbXYhoakj7kw%2BaMiV3jvupddFSBGrIgBBShXqqin%2Fnkk0UhVy22tzYV0Zol3nfW30ISR8uJ4Xv5hnPq9VcLV8iHrC%2BG5e7eQlN0vgamT8bYWaBe%2Fd%2FFc2nX%2BVHz%2BOyhDJKLH8xRdeCDU2Ph%2F4J%2B9u9xHmaRnCYoO82YzxT9x2A2zi84epKiiXS&X-Amz-Signature=f1e24c79318cee9adc1cf0aa0c622137277a02e291bee1c387d1e97d3a72e27d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYXIKQKC%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T190202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9ZNOGhF%2F89YZ3G7ntV4l4AcijrC4Nt042uFD%2BLpQ0iQIgAwtO5zlkt%2B6JNX9HFG0Pi%2BBYNuu4JGUDYHhiZ3X%2FdeUqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDChGKHygLOVcqjHqOyrcA8iWSZLlga%2BxVciGQ%2BuBxosN7v7HWqPwX%2BYa7Ee8yjdCsB2rb94k8KJTDwX%2FkDQzDRxc3MQfECDewOL6QAIrGoz7BxoLrdJCK%2BvPUZFNtAmm4Y6AhwXdwBn0%2FJC7cwKDi5D%2FlqCjumvaeigQU3KR1KAgJDrRPUbtAQiWKdMtr0uFLr8VpD7TPUIZLa%2BUvrf24ekFvVBM1%2BugyIDRDZ0lygObWPsL7nDguCFOPLV%2Feyc6HVeugqhL1b1tZ000Z8zRVVIhP8lSil4bkWkz6EP6l5S8epLZGWebsaBJGg%2BNFiCbb65RIBzQXxXJaFM822y6Dd10OtoUakQMtaJftgp%2BaoYiqYPcjnre5v%2BFQNTYgnXB42YznBnpuAJIqGiJXnpsCd7KlDjpB0Xnp6fgahR8yZWcrMMdkPl2L1CY%2B9qHPr2IztGs7WWtWSux8yKE4MWN5jaF1dzzXdPmBvX5sYGZ8apZSSsN71pbxIpoU%2FfawHtho6%2F5tIntbBSNKwJjaKFCEga5x6nHI4iNT5QfLADL9SY%2B8p7dH6t4ZCKH1IyVywM7uJx9OaNTIV9qR1oHBvSXaJ0ci9O42To0hrt84kCLc9IdFSg69zTC9uuuI3XcD%2FVFZpqLpZyZViEKcuiyMIj7hcMGOqUBLIPK%2FTUFgunsBDQeO8wZC91ws3w1%2FNwagdVbTKzbXYhoakj7kw%2BaMiV3jvupddFSBGrIgBBShXqqin%2Fnkk0UhVy22tzYV0Zol3nfW30ISR8uJ4Xv5hnPq9VcLV8iHrC%2BG5e7eQlN0vgamT8bYWaBe%2Fd%2FFc2nX%2BVHz%2BOyhDJKLH8xRdeCDU2Ph%2F4J%2B9u9xHmaRnCYoO82YzxT9x2A2zi84epKiiXS&X-Amz-Signature=9080283b5e232257fb82d64574911e3b4be16b434cd58ab1d766210e4b5b2c80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
