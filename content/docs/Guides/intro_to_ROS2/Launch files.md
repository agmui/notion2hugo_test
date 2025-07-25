---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZKWBXXK%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIC7nbXzkvbF%2Bc7MQk6%2FdxhB7S6K%2F%2FamhNvApzpbrebivAiEA4Gnc2qsLUkG1vcCAa%2BPn0Ob%2F7Pe0dtWwhoIxvRybVvcq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDKmd%2FGrIZfWpNFLSqyrcAzzJNFCjBPqwquG3I6ERFZTXf6hbtkA5Lro0kJBUkLCBUQXEdIgQ8ViNDAsk4choX4sAEouIBY5%2FTRUVLjh1bgJmYYwUA2SrqXkJLVt1LgNvN25LtVDTI%2BpkUw9kRAwj%2FTobLbnozotyh45FYKlNaulwIPnzG4ZapTszibzggFWuFbM7Uubo6N6dC3QNClukgTZXglKBSiQSGWhYdHsnmYAK4JZ3OtPJxsQtR7PYDHAJmkGFwBBfpW3yIMdW9RHlgJv7%2BT1gh4OajuVUjQAbYt%2BGsxYQkrvYGazjLuJRIDg53N4mhaYs8nUnc%2Bt5Ztdi9zHT1SahiHeWLMZ2onBIR9fvhmNMKyTc26wAkqysn%2Bhm1Mvf%2FSjeaOHjtAPaZ3KwOCAcTY5IrQ2Vi9Z53e7NJAb9JJZO4WdNIeg8E8U5kQrSvbpRep7MGIbSxrn7Clj6jPmsocgh5dK6CeW63GSw%2FplxS8qbbMqGLmfHrT9VgMtOjwDoBs0F5dafVwwoHzpkVodN4V0mIxTs2vqfq4N%2BIhLp9FIF3s4AnFiVwEUTfX58Ujw1j37pHw80AxpTw2CHZMVewUAqampf6NcZC%2BrCIa4mBrqbR7hAXmMSPPaQfdlF28EuCGEmrMcn14dNMN6Gj8QGOqUBPqDuDTYISpjTrVOt9Hnm%2BwokfAsue3Nkhg%2B0D%2F1urH6%2FH8YkKDV%2Bc4b72ckYBg%2B0eUsUqehfg6IFvJLojqBcTU4ldDtaVqsCoaAp7%2BMa8o1PGAXNkMha0OxQ%2FAdz5X0%2Bw2boBnPPS65Fx%2BQzGr3oNl2rTdXSeN46oYbneRRxDyYldTyAWrIKZofK5XL1ld%2Fzov2McJM1MqInL2Qe2lAZ3xQwZd4w&X-Amz-Signature=3910dc4a6ca3b7f4afae0a0eadb8703419af0defa6993ed462b06842351f07a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZKWBXXK%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIC7nbXzkvbF%2Bc7MQk6%2FdxhB7S6K%2F%2FamhNvApzpbrebivAiEA4Gnc2qsLUkG1vcCAa%2BPn0Ob%2F7Pe0dtWwhoIxvRybVvcq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDKmd%2FGrIZfWpNFLSqyrcAzzJNFCjBPqwquG3I6ERFZTXf6hbtkA5Lro0kJBUkLCBUQXEdIgQ8ViNDAsk4choX4sAEouIBY5%2FTRUVLjh1bgJmYYwUA2SrqXkJLVt1LgNvN25LtVDTI%2BpkUw9kRAwj%2FTobLbnozotyh45FYKlNaulwIPnzG4ZapTszibzggFWuFbM7Uubo6N6dC3QNClukgTZXglKBSiQSGWhYdHsnmYAK4JZ3OtPJxsQtR7PYDHAJmkGFwBBfpW3yIMdW9RHlgJv7%2BT1gh4OajuVUjQAbYt%2BGsxYQkrvYGazjLuJRIDg53N4mhaYs8nUnc%2Bt5Ztdi9zHT1SahiHeWLMZ2onBIR9fvhmNMKyTc26wAkqysn%2Bhm1Mvf%2FSjeaOHjtAPaZ3KwOCAcTY5IrQ2Vi9Z53e7NJAb9JJZO4WdNIeg8E8U5kQrSvbpRep7MGIbSxrn7Clj6jPmsocgh5dK6CeW63GSw%2FplxS8qbbMqGLmfHrT9VgMtOjwDoBs0F5dafVwwoHzpkVodN4V0mIxTs2vqfq4N%2BIhLp9FIF3s4AnFiVwEUTfX58Ujw1j37pHw80AxpTw2CHZMVewUAqampf6NcZC%2BrCIa4mBrqbR7hAXmMSPPaQfdlF28EuCGEmrMcn14dNMN6Gj8QGOqUBPqDuDTYISpjTrVOt9Hnm%2BwokfAsue3Nkhg%2B0D%2F1urH6%2FH8YkKDV%2Bc4b72ckYBg%2B0eUsUqehfg6IFvJLojqBcTU4ldDtaVqsCoaAp7%2BMa8o1PGAXNkMha0OxQ%2FAdz5X0%2Bw2boBnPPS65Fx%2BQzGr3oNl2rTdXSeN46oYbneRRxDyYldTyAWrIKZofK5XL1ld%2Fzov2McJM1MqInL2Qe2lAZ3xQwZd4w&X-Amz-Signature=94f0046e34eb3a121399a5275f2b11f06e4875837ec1f09503d5ab043f63b276&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZKWBXXK%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIC7nbXzkvbF%2Bc7MQk6%2FdxhB7S6K%2F%2FamhNvApzpbrebivAiEA4Gnc2qsLUkG1vcCAa%2BPn0Ob%2F7Pe0dtWwhoIxvRybVvcq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDKmd%2FGrIZfWpNFLSqyrcAzzJNFCjBPqwquG3I6ERFZTXf6hbtkA5Lro0kJBUkLCBUQXEdIgQ8ViNDAsk4choX4sAEouIBY5%2FTRUVLjh1bgJmYYwUA2SrqXkJLVt1LgNvN25LtVDTI%2BpkUw9kRAwj%2FTobLbnozotyh45FYKlNaulwIPnzG4ZapTszibzggFWuFbM7Uubo6N6dC3QNClukgTZXglKBSiQSGWhYdHsnmYAK4JZ3OtPJxsQtR7PYDHAJmkGFwBBfpW3yIMdW9RHlgJv7%2BT1gh4OajuVUjQAbYt%2BGsxYQkrvYGazjLuJRIDg53N4mhaYs8nUnc%2Bt5Ztdi9zHT1SahiHeWLMZ2onBIR9fvhmNMKyTc26wAkqysn%2Bhm1Mvf%2FSjeaOHjtAPaZ3KwOCAcTY5IrQ2Vi9Z53e7NJAb9JJZO4WdNIeg8E8U5kQrSvbpRep7MGIbSxrn7Clj6jPmsocgh5dK6CeW63GSw%2FplxS8qbbMqGLmfHrT9VgMtOjwDoBs0F5dafVwwoHzpkVodN4V0mIxTs2vqfq4N%2BIhLp9FIF3s4AnFiVwEUTfX58Ujw1j37pHw80AxpTw2CHZMVewUAqampf6NcZC%2BrCIa4mBrqbR7hAXmMSPPaQfdlF28EuCGEmrMcn14dNMN6Gj8QGOqUBPqDuDTYISpjTrVOt9Hnm%2BwokfAsue3Nkhg%2B0D%2F1urH6%2FH8YkKDV%2Bc4b72ckYBg%2B0eUsUqehfg6IFvJLojqBcTU4ldDtaVqsCoaAp7%2BMa8o1PGAXNkMha0OxQ%2FAdz5X0%2Bw2boBnPPS65Fx%2BQzGr3oNl2rTdXSeN46oYbneRRxDyYldTyAWrIKZofK5XL1ld%2Fzov2McJM1MqInL2Qe2lAZ3xQwZd4w&X-Amz-Signature=f66964501664063dfb92f79926ea213706385a2e82410cf9c681476e60fbb66d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
