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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KSKORPG%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T100955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQChiKViYWe0exKypjh07cHm40aNmC%2BW7F%2BDXmye3Z1OeAIhANGAHgHc0f0CGNq4R%2BySDdP9vWSKlZh5tn1TUAOf%2FHiOKv8DCBMQABoMNjM3NDIzMTgzODA1Igy9Ehs9F65GYY2H20Qq3AODl2j3DCZPugLdt2%2FcYBwE6ZZAiK6qH1KaL3AiDntipxG0Ji3yJtCQfURDW3fkTnwVS%2BsFwxKHw%2F0gKI4AOBtwJyCgFT8Ho6hFH1RYMjUSO344GGUZaIQsvh58P0hiPqMDBaniCMUt4%2BFVDeRxYv8mpDryfAHXIQmR1kQ76%2BJLPaGLUw%2BPl5t2R%2BM4gHpiN%2FnBbbm79hjK0qdCI7ufsEIzi2vt793bnqiVCxn5rknJhnryO3LzkfFhIionnEdnCs%2BOqfL0QqNIv1owh0gAYGzTcOpJicimTw36uAwK6SzFcbCmTvEphs9ckYO986y2FgaYBTIB4kBkr%2FAbzJ%2FLFNFZRYzzxTjtbZnjWCqa9g6Nci%2Fx3Hgd%2BjB6k4JObpz3pd48RqZ4ZtFSEKEHgeLS0wQ0mDuWNZsKSw0Szbwdv7OLFUc7uNB4rrWx1fPe1LDRdv3KYXdY87LuxAyeQ1HxBG0BjCptuijizr1tIDVrER7TK%2BLbODz6pPdrKINp5tLdSmgGNIjFkaXTDy%2BGpJmIQH5WsMr462FBJR7p%2Biiiokx2Tq%2BeYkrCCdFJA%2FM%2FFeEX5FRaggtEmTBnHP4oKgJW3vi0%2F%2BEM9idgd4tIQfSW3EOFj0fls7DpkqZOU28FMTDM76%2FCBjqkAX9H1WhvQ3556Hvd2lDuQAcfLSQTXNRWdZa8yLwJcMZe5JoK%2B1zW2mMeiCnSBWQD7BgLc%2BOM9JLHwiUCAjqbCe3Q9nie026cHSvPHBM2qx8mzE7ecVghkMm6nHdwAPnfWtxM9fykzr8cIOVl4%2FhPgF2MQiB%2FHE%2FeeyHKnfpeupKueVzkOfVOHd6FabiuFnUG%2Fwa1HawUsQHW3y3KJP%2BP4yZCWJpO&X-Amz-Signature=56fc11cc6bc597d585e9248bd17eb5a60ad8bdedb44ad61d77984bdcc9c64e74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KSKORPG%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T100955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQChiKViYWe0exKypjh07cHm40aNmC%2BW7F%2BDXmye3Z1OeAIhANGAHgHc0f0CGNq4R%2BySDdP9vWSKlZh5tn1TUAOf%2FHiOKv8DCBMQABoMNjM3NDIzMTgzODA1Igy9Ehs9F65GYY2H20Qq3AODl2j3DCZPugLdt2%2FcYBwE6ZZAiK6qH1KaL3AiDntipxG0Ji3yJtCQfURDW3fkTnwVS%2BsFwxKHw%2F0gKI4AOBtwJyCgFT8Ho6hFH1RYMjUSO344GGUZaIQsvh58P0hiPqMDBaniCMUt4%2BFVDeRxYv8mpDryfAHXIQmR1kQ76%2BJLPaGLUw%2BPl5t2R%2BM4gHpiN%2FnBbbm79hjK0qdCI7ufsEIzi2vt793bnqiVCxn5rknJhnryO3LzkfFhIionnEdnCs%2BOqfL0QqNIv1owh0gAYGzTcOpJicimTw36uAwK6SzFcbCmTvEphs9ckYO986y2FgaYBTIB4kBkr%2FAbzJ%2FLFNFZRYzzxTjtbZnjWCqa9g6Nci%2Fx3Hgd%2BjB6k4JObpz3pd48RqZ4ZtFSEKEHgeLS0wQ0mDuWNZsKSw0Szbwdv7OLFUc7uNB4rrWx1fPe1LDRdv3KYXdY87LuxAyeQ1HxBG0BjCptuijizr1tIDVrER7TK%2BLbODz6pPdrKINp5tLdSmgGNIjFkaXTDy%2BGpJmIQH5WsMr462FBJR7p%2Biiiokx2Tq%2BeYkrCCdFJA%2FM%2FFeEX5FRaggtEmTBnHP4oKgJW3vi0%2F%2BEM9idgd4tIQfSW3EOFj0fls7DpkqZOU28FMTDM76%2FCBjqkAX9H1WhvQ3556Hvd2lDuQAcfLSQTXNRWdZa8yLwJcMZe5JoK%2B1zW2mMeiCnSBWQD7BgLc%2BOM9JLHwiUCAjqbCe3Q9nie026cHSvPHBM2qx8mzE7ecVghkMm6nHdwAPnfWtxM9fykzr8cIOVl4%2FhPgF2MQiB%2FHE%2FeeyHKnfpeupKueVzkOfVOHd6FabiuFnUG%2Fwa1HawUsQHW3y3KJP%2BP4yZCWJpO&X-Amz-Signature=a7d54c4f4bd3797ab4315fbd0f27961bcb3235c1a2753925dbcb6a5b406020d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KSKORPG%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T100955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQChiKViYWe0exKypjh07cHm40aNmC%2BW7F%2BDXmye3Z1OeAIhANGAHgHc0f0CGNq4R%2BySDdP9vWSKlZh5tn1TUAOf%2FHiOKv8DCBMQABoMNjM3NDIzMTgzODA1Igy9Ehs9F65GYY2H20Qq3AODl2j3DCZPugLdt2%2FcYBwE6ZZAiK6qH1KaL3AiDntipxG0Ji3yJtCQfURDW3fkTnwVS%2BsFwxKHw%2F0gKI4AOBtwJyCgFT8Ho6hFH1RYMjUSO344GGUZaIQsvh58P0hiPqMDBaniCMUt4%2BFVDeRxYv8mpDryfAHXIQmR1kQ76%2BJLPaGLUw%2BPl5t2R%2BM4gHpiN%2FnBbbm79hjK0qdCI7ufsEIzi2vt793bnqiVCxn5rknJhnryO3LzkfFhIionnEdnCs%2BOqfL0QqNIv1owh0gAYGzTcOpJicimTw36uAwK6SzFcbCmTvEphs9ckYO986y2FgaYBTIB4kBkr%2FAbzJ%2FLFNFZRYzzxTjtbZnjWCqa9g6Nci%2Fx3Hgd%2BjB6k4JObpz3pd48RqZ4ZtFSEKEHgeLS0wQ0mDuWNZsKSw0Szbwdv7OLFUc7uNB4rrWx1fPe1LDRdv3KYXdY87LuxAyeQ1HxBG0BjCptuijizr1tIDVrER7TK%2BLbODz6pPdrKINp5tLdSmgGNIjFkaXTDy%2BGpJmIQH5WsMr462FBJR7p%2Biiiokx2Tq%2BeYkrCCdFJA%2FM%2FFeEX5FRaggtEmTBnHP4oKgJW3vi0%2F%2BEM9idgd4tIQfSW3EOFj0fls7DpkqZOU28FMTDM76%2FCBjqkAX9H1WhvQ3556Hvd2lDuQAcfLSQTXNRWdZa8yLwJcMZe5JoK%2B1zW2mMeiCnSBWQD7BgLc%2BOM9JLHwiUCAjqbCe3Q9nie026cHSvPHBM2qx8mzE7ecVghkMm6nHdwAPnfWtxM9fykzr8cIOVl4%2FhPgF2MQiB%2FHE%2FeeyHKnfpeupKueVzkOfVOHd6FabiuFnUG%2Fwa1HawUsQHW3y3KJP%2BP4yZCWJpO&X-Amz-Signature=689235e188d80cbefa283bf1df82f344d6afc1824e07135aa584f4de80bc4caa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
