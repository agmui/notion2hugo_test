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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FSTO647%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T160733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIBj67Am7mO1rBa01kOReu62y9sfqukFi9dA8mTu5yGkfAiEA06rJjwVyQRkPTmVdFfnNe8hq237nGsRLOC6TlkGA46sq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDGGTM4p4W4PCwS%2BQKircAxqrK7dmI7PAyaUl7IF37OC4BPbMu80J4xRVI836rqgzGyUKHOBt4f8H%2FCjSAHn3aLQvMEiVAXW%2FNCSxMUwxUVyNOxkmo1w9xcjvNnE5qi04KJDRwuAHBfoLMHb%2FI8QF%2B53DlxpH1lCc3jkhWYdURiowjb%2BfdxCjfwSlP5BKxaBOKBtF10I1WHWZOqJYaFjvT5Aocn%2BmgoQK7Kh86tj1n829xnghd6NvTRYlrew%2BU%2B6UcG2kFwKdYJkQPN7Ck1gS5td6MVUwzGZwGzelzcB7S%2BUWN%2FwwdusCMybbz06iQENsAu5yZ31sW6GKiMLtNorLdw6KMI3JDqEVLsK8oCgoKkFZz%2B3gz9nEnN0eDtv2DmKnsAljTxQJkbkFOzJmTc7izROiUfmWRCuSy7Pkq4NoL0oUf7bSFLZbXQewHXvBjZLfSiHUtsmX7bs%2B1rQk7txlkXr4m1u4ThKWc7Y%2FE7RcbKs4%2BA6C%2FVL2i13KOx%2FsaC5X3NCboyRdmicKZnx0ax7zHAJm2O7sOpltlThfMMa9zCMO9CpP2E0OiHHEXw8rps36FrKRAokk%2F%2FNFEQaZcvKxLCJKSQ05snvTgOIX79L%2B9BTey4srlMXfAeH8TLYUaBH5faRB2QSyoMemLX62MM2ax70GOqUBxdH2jhzP%2BOvou0gsN4VQVAN%2F%2BKg73YxMkoxp8kGmBKg8bdCP8%2BXtADmv2cQXFmGw%2BRyW%2BIpDMiJ%2BUodTChW%2FOZBhKhNmn0h61xS1sdZUHOJfgUMzdHwYWJYbDWHp4BkArHQVZdVaYoA%2B6RwvfRal2j0uv0CC9U6z3xs%2BVo3z1G7fo41PDoff0L9SQbTh%2Bh6P5OzI%2BcgzupHEsI2RTiNCIwUM0k6q&X-Amz-Signature=87753080c83f90013b8ecabe2b0a20909180daa7fa000db0a396c11f8b941025&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FSTO647%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T160733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIBj67Am7mO1rBa01kOReu62y9sfqukFi9dA8mTu5yGkfAiEA06rJjwVyQRkPTmVdFfnNe8hq237nGsRLOC6TlkGA46sq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDGGTM4p4W4PCwS%2BQKircAxqrK7dmI7PAyaUl7IF37OC4BPbMu80J4xRVI836rqgzGyUKHOBt4f8H%2FCjSAHn3aLQvMEiVAXW%2FNCSxMUwxUVyNOxkmo1w9xcjvNnE5qi04KJDRwuAHBfoLMHb%2FI8QF%2B53DlxpH1lCc3jkhWYdURiowjb%2BfdxCjfwSlP5BKxaBOKBtF10I1WHWZOqJYaFjvT5Aocn%2BmgoQK7Kh86tj1n829xnghd6NvTRYlrew%2BU%2B6UcG2kFwKdYJkQPN7Ck1gS5td6MVUwzGZwGzelzcB7S%2BUWN%2FwwdusCMybbz06iQENsAu5yZ31sW6GKiMLtNorLdw6KMI3JDqEVLsK8oCgoKkFZz%2B3gz9nEnN0eDtv2DmKnsAljTxQJkbkFOzJmTc7izROiUfmWRCuSy7Pkq4NoL0oUf7bSFLZbXQewHXvBjZLfSiHUtsmX7bs%2B1rQk7txlkXr4m1u4ThKWc7Y%2FE7RcbKs4%2BA6C%2FVL2i13KOx%2FsaC5X3NCboyRdmicKZnx0ax7zHAJm2O7sOpltlThfMMa9zCMO9CpP2E0OiHHEXw8rps36FrKRAokk%2F%2FNFEQaZcvKxLCJKSQ05snvTgOIX79L%2B9BTey4srlMXfAeH8TLYUaBH5faRB2QSyoMemLX62MM2ax70GOqUBxdH2jhzP%2BOvou0gsN4VQVAN%2F%2BKg73YxMkoxp8kGmBKg8bdCP8%2BXtADmv2cQXFmGw%2BRyW%2BIpDMiJ%2BUodTChW%2FOZBhKhNmn0h61xS1sdZUHOJfgUMzdHwYWJYbDWHp4BkArHQVZdVaYoA%2B6RwvfRal2j0uv0CC9U6z3xs%2BVo3z1G7fo41PDoff0L9SQbTh%2Bh6P5OzI%2BcgzupHEsI2RTiNCIwUM0k6q&X-Amz-Signature=59c1521a8b450304062bfb6a51d6d08040d62d5a597280e7aed79384ed96eb76&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FSTO647%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T160733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIBj67Am7mO1rBa01kOReu62y9sfqukFi9dA8mTu5yGkfAiEA06rJjwVyQRkPTmVdFfnNe8hq237nGsRLOC6TlkGA46sq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDGGTM4p4W4PCwS%2BQKircAxqrK7dmI7PAyaUl7IF37OC4BPbMu80J4xRVI836rqgzGyUKHOBt4f8H%2FCjSAHn3aLQvMEiVAXW%2FNCSxMUwxUVyNOxkmo1w9xcjvNnE5qi04KJDRwuAHBfoLMHb%2FI8QF%2B53DlxpH1lCc3jkhWYdURiowjb%2BfdxCjfwSlP5BKxaBOKBtF10I1WHWZOqJYaFjvT5Aocn%2BmgoQK7Kh86tj1n829xnghd6NvTRYlrew%2BU%2B6UcG2kFwKdYJkQPN7Ck1gS5td6MVUwzGZwGzelzcB7S%2BUWN%2FwwdusCMybbz06iQENsAu5yZ31sW6GKiMLtNorLdw6KMI3JDqEVLsK8oCgoKkFZz%2B3gz9nEnN0eDtv2DmKnsAljTxQJkbkFOzJmTc7izROiUfmWRCuSy7Pkq4NoL0oUf7bSFLZbXQewHXvBjZLfSiHUtsmX7bs%2B1rQk7txlkXr4m1u4ThKWc7Y%2FE7RcbKs4%2BA6C%2FVL2i13KOx%2FsaC5X3NCboyRdmicKZnx0ax7zHAJm2O7sOpltlThfMMa9zCMO9CpP2E0OiHHEXw8rps36FrKRAokk%2F%2FNFEQaZcvKxLCJKSQ05snvTgOIX79L%2B9BTey4srlMXfAeH8TLYUaBH5faRB2QSyoMemLX62MM2ax70GOqUBxdH2jhzP%2BOvou0gsN4VQVAN%2F%2BKg73YxMkoxp8kGmBKg8bdCP8%2BXtADmv2cQXFmGw%2BRyW%2BIpDMiJ%2BUodTChW%2FOZBhKhNmn0h61xS1sdZUHOJfgUMzdHwYWJYbDWHp4BkArHQVZdVaYoA%2B6RwvfRal2j0uv0CC9U6z3xs%2BVo3z1G7fo41PDoff0L9SQbTh%2Bh6P5OzI%2BcgzupHEsI2RTiNCIwUM0k6q&X-Amz-Signature=1d48af37005c0a5528c21dd6625d231ecd79bb048d56a83b396c0304c6d100d3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
