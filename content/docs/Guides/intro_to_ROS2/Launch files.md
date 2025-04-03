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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OVHOM7I%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T041101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCeVLu58nHP8viIo0KfjJ4%2BNyFl3JKtmmvfHP6aTfesCwIgMFRj5a60H3ooPBydHZ2hR2gIKDuAxdgFMYiDKc3BywYqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3aM3C3sJjAS6%2BpKSrcA8vkF9R7NCMyR%2BlisdJz%2FcdgBs7Hb%2FSgsIDafkp5C1drycamuNgASeV8Mr7%2FDnE4oAwBJPb1mXzHtQVYauofVsjhk7QFHYnMyrZBLXkfhjpQ2XcWC5jTRZi6i2I9Ot5YiZhpILPLNMm8tLceJn%2FaKHdI%2FSTTuaSDTcmVw37YNTSLv7Gz8GSpGcp0sJx2tmiGYPVpVxBkAstPrJo7SYfAPH5FeOOQXIOiGS5SQC5tbruoEeHHyb3yAoLDTg3g9dkelFWpNPDI87s2J7t79GgBQG9N%2BOIDP3LPthq3tgn012y85GBcP4i%2Bh2kYKwUcuroU9SBtmGLLAZ5Syyil%2BivBzs069VLKEjL3Ij%2Flu4lo2gf9vbxLF49q%2F2aVTtFgEnkZcK2I32dltYjfrdvsNkjGexteSV17Ltix4%2FITHhYSIf1i1TMkQhsuu3YWT3OlrDLGXGVKR81btb5QS5n7xgu4GI11vPo6yTGZcTrSqOgYvr5cLAkKLBo9IKCk8olsP2bGbJ4T5y62ti7JK9ybBmse5ZwdkkI8gNHg3Ls4uEMU8HfczsIW%2FwPEkl0ESY1jbSH%2BqbaMdxGt%2FbwUfHMxItz4eghzDjXtAFGUGW9g20JRx4g%2FisA0LMkJyYyLtnpoMOv7t78GOqUBp5boD4E517fk48%2Bq9V7aDeE5u3P9AfCPqiSCQY1pbB5J%2BdBZ8Rus71HgG8vI6L0V3KD1hmjmlEAc0a%2FSuecW19yG%2FB7zy%2BM%2Bo%2FuZzI2r4PL%2FoD4NpK6SJLh24d00lFqaTwFwEgAP8GvSvanWE34IwFt4xUrJ7rR39kdxBjfdg0JTuHiMn3JvfRPe4sfCS%2BA%2FWHf3YhwqPoKnbGQ4LkZsWzS3zObk&X-Amz-Signature=d23ee3d1f752e349fbc33858c3f714bcb0a5d42c2d3cd603fa2fe3b2a76c065a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OVHOM7I%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T041101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCeVLu58nHP8viIo0KfjJ4%2BNyFl3JKtmmvfHP6aTfesCwIgMFRj5a60H3ooPBydHZ2hR2gIKDuAxdgFMYiDKc3BywYqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3aM3C3sJjAS6%2BpKSrcA8vkF9R7NCMyR%2BlisdJz%2FcdgBs7Hb%2FSgsIDafkp5C1drycamuNgASeV8Mr7%2FDnE4oAwBJPb1mXzHtQVYauofVsjhk7QFHYnMyrZBLXkfhjpQ2XcWC5jTRZi6i2I9Ot5YiZhpILPLNMm8tLceJn%2FaKHdI%2FSTTuaSDTcmVw37YNTSLv7Gz8GSpGcp0sJx2tmiGYPVpVxBkAstPrJo7SYfAPH5FeOOQXIOiGS5SQC5tbruoEeHHyb3yAoLDTg3g9dkelFWpNPDI87s2J7t79GgBQG9N%2BOIDP3LPthq3tgn012y85GBcP4i%2Bh2kYKwUcuroU9SBtmGLLAZ5Syyil%2BivBzs069VLKEjL3Ij%2Flu4lo2gf9vbxLF49q%2F2aVTtFgEnkZcK2I32dltYjfrdvsNkjGexteSV17Ltix4%2FITHhYSIf1i1TMkQhsuu3YWT3OlrDLGXGVKR81btb5QS5n7xgu4GI11vPo6yTGZcTrSqOgYvr5cLAkKLBo9IKCk8olsP2bGbJ4T5y62ti7JK9ybBmse5ZwdkkI8gNHg3Ls4uEMU8HfczsIW%2FwPEkl0ESY1jbSH%2BqbaMdxGt%2FbwUfHMxItz4eghzDjXtAFGUGW9g20JRx4g%2FisA0LMkJyYyLtnpoMOv7t78GOqUBp5boD4E517fk48%2Bq9V7aDeE5u3P9AfCPqiSCQY1pbB5J%2BdBZ8Rus71HgG8vI6L0V3KD1hmjmlEAc0a%2FSuecW19yG%2FB7zy%2BM%2Bo%2FuZzI2r4PL%2FoD4NpK6SJLh24d00lFqaTwFwEgAP8GvSvanWE34IwFt4xUrJ7rR39kdxBjfdg0JTuHiMn3JvfRPe4sfCS%2BA%2FWHf3YhwqPoKnbGQ4LkZsWzS3zObk&X-Amz-Signature=103e9af8e2b73bef9cb0dc88a45ad81d48569b5a6b474c1c2bbd19df290d9eb3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OVHOM7I%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T041101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCeVLu58nHP8viIo0KfjJ4%2BNyFl3JKtmmvfHP6aTfesCwIgMFRj5a60H3ooPBydHZ2hR2gIKDuAxdgFMYiDKc3BywYqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3aM3C3sJjAS6%2BpKSrcA8vkF9R7NCMyR%2BlisdJz%2FcdgBs7Hb%2FSgsIDafkp5C1drycamuNgASeV8Mr7%2FDnE4oAwBJPb1mXzHtQVYauofVsjhk7QFHYnMyrZBLXkfhjpQ2XcWC5jTRZi6i2I9Ot5YiZhpILPLNMm8tLceJn%2FaKHdI%2FSTTuaSDTcmVw37YNTSLv7Gz8GSpGcp0sJx2tmiGYPVpVxBkAstPrJo7SYfAPH5FeOOQXIOiGS5SQC5tbruoEeHHyb3yAoLDTg3g9dkelFWpNPDI87s2J7t79GgBQG9N%2BOIDP3LPthq3tgn012y85GBcP4i%2Bh2kYKwUcuroU9SBtmGLLAZ5Syyil%2BivBzs069VLKEjL3Ij%2Flu4lo2gf9vbxLF49q%2F2aVTtFgEnkZcK2I32dltYjfrdvsNkjGexteSV17Ltix4%2FITHhYSIf1i1TMkQhsuu3YWT3OlrDLGXGVKR81btb5QS5n7xgu4GI11vPo6yTGZcTrSqOgYvr5cLAkKLBo9IKCk8olsP2bGbJ4T5y62ti7JK9ybBmse5ZwdkkI8gNHg3Ls4uEMU8HfczsIW%2FwPEkl0ESY1jbSH%2BqbaMdxGt%2FbwUfHMxItz4eghzDjXtAFGUGW9g20JRx4g%2FisA0LMkJyYyLtnpoMOv7t78GOqUBp5boD4E517fk48%2Bq9V7aDeE5u3P9AfCPqiSCQY1pbB5J%2BdBZ8Rus71HgG8vI6L0V3KD1hmjmlEAc0a%2FSuecW19yG%2FB7zy%2BM%2Bo%2FuZzI2r4PL%2FoD4NpK6SJLh24d00lFqaTwFwEgAP8GvSvanWE34IwFt4xUrJ7rR39kdxBjfdg0JTuHiMn3JvfRPe4sfCS%2BA%2FWHf3YhwqPoKnbGQ4LkZsWzS3zObk&X-Amz-Signature=99f2c8e16a5310baec1fb1d34fd84d8ed36167c0857822827c72a95962169dfa&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
