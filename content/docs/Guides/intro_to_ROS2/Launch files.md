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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN7JCS3X%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T050943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQC5mj6MzN0Jg1cILTwajBXCO1t%2B04I6%2Fez3wmknPMD6uwIgE4SgNg%2BM%2BFr%2BCKOkTqGa4ac%2F%2FIxmFX9MK5D%2FjBYaHe4qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOetBwOf9cjm5B%2BUyCrcA01bu27ksDJUXmTD5KBAbE2rfR%2BWYT%2FmUcKpN4WktYNo9pLCOaqkARSjdA3wGLw2f7Aun7Mpas%2BWwGrMwDhN0l0c6IYFSABcjz%2BdJLb5xxcM8vqTdliqtZs75iesJACPmkrtiq8Ptb0avW6BTIoV3mK4hcV45f55aDsP8yhy%2B3DKjAYSUtB8NgaxnMCfbVSQTOENrV7YvgMlaXbXxjNjNxBv%2FqcXXTQunBLqrCHvmIL9NfJc%2B6g172pdufoCMcRiDYqgb7Q%2BWkheAWnanmwvhPfySfaQY8L0SyFaGcsq6e%2FIbs%2BYSBFnp3yxtDPGp7O%2Fn%2FDI29ClnlVltvlz7dgEQM0bCMuOfmiqZtLtM%2BXsVccHLD57g6sfX%2Bsh1wOcc0GhsD9kQmfx3cD3mzuULcpcR5ZSfVTKbNor4CYQUrLurVqXL4PAs0CwtFSDkiU7P2ovUpP7Lo2LpUiEaVn6TVGOGhkuPlU%2BMR%2BbVdWSV3z54AFDgDpF%2FHa5FQtEnwskt6nKZqofiDymlQdYsPX%2F0N8lmMEy1iaOjWtCapH8ZDxEcAmumMk2%2BomMDoeZtrkfskYUi5ifqWbCXqhVfQE%2BFywuvZEI8GkKaiXC4jNfpiJBgKeZEgwv3rRI7KLEX0maMP2TusEGOqUBUI0J5TI6h3QGyPwB9NhpQSHnfWGPTx5Kdl%2BeltnHHTI0eIko%2FqtFi8qERS7q4l7WZPIqJlXcBHISU9KZhTTarDngc80bHTSwiRS%2F59KHbv7PhBwxAfgyaP1y62ioLnHSfvYDnTc22TUi0wkpgZiyIPw9htQ%2BV7WG1ILpj4xi8VFYKO%2Fr3v%2F%2FeHlGpWoAiB%2FdlCYO6hGRWvlkt5Gu3WL2Qg%2F%2FU043&X-Amz-Signature=94ee445e2db595c6514edd03d85a93caf10fb0a54b3b190d78c0c481e8073a8a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN7JCS3X%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T050943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQC5mj6MzN0Jg1cILTwajBXCO1t%2B04I6%2Fez3wmknPMD6uwIgE4SgNg%2BM%2BFr%2BCKOkTqGa4ac%2F%2FIxmFX9MK5D%2FjBYaHe4qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOetBwOf9cjm5B%2BUyCrcA01bu27ksDJUXmTD5KBAbE2rfR%2BWYT%2FmUcKpN4WktYNo9pLCOaqkARSjdA3wGLw2f7Aun7Mpas%2BWwGrMwDhN0l0c6IYFSABcjz%2BdJLb5xxcM8vqTdliqtZs75iesJACPmkrtiq8Ptb0avW6BTIoV3mK4hcV45f55aDsP8yhy%2B3DKjAYSUtB8NgaxnMCfbVSQTOENrV7YvgMlaXbXxjNjNxBv%2FqcXXTQunBLqrCHvmIL9NfJc%2B6g172pdufoCMcRiDYqgb7Q%2BWkheAWnanmwvhPfySfaQY8L0SyFaGcsq6e%2FIbs%2BYSBFnp3yxtDPGp7O%2Fn%2FDI29ClnlVltvlz7dgEQM0bCMuOfmiqZtLtM%2BXsVccHLD57g6sfX%2Bsh1wOcc0GhsD9kQmfx3cD3mzuULcpcR5ZSfVTKbNor4CYQUrLurVqXL4PAs0CwtFSDkiU7P2ovUpP7Lo2LpUiEaVn6TVGOGhkuPlU%2BMR%2BbVdWSV3z54AFDgDpF%2FHa5FQtEnwskt6nKZqofiDymlQdYsPX%2F0N8lmMEy1iaOjWtCapH8ZDxEcAmumMk2%2BomMDoeZtrkfskYUi5ifqWbCXqhVfQE%2BFywuvZEI8GkKaiXC4jNfpiJBgKeZEgwv3rRI7KLEX0maMP2TusEGOqUBUI0J5TI6h3QGyPwB9NhpQSHnfWGPTx5Kdl%2BeltnHHTI0eIko%2FqtFi8qERS7q4l7WZPIqJlXcBHISU9KZhTTarDngc80bHTSwiRS%2F59KHbv7PhBwxAfgyaP1y62ioLnHSfvYDnTc22TUi0wkpgZiyIPw9htQ%2BV7WG1ILpj4xi8VFYKO%2Fr3v%2F%2FeHlGpWoAiB%2FdlCYO6hGRWvlkt5Gu3WL2Qg%2F%2FU043&X-Amz-Signature=a64df056b9782a3e6c1067d4a8e7b0ea1b4b88bbae911389d32d656557521a1f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN7JCS3X%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T050943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQC5mj6MzN0Jg1cILTwajBXCO1t%2B04I6%2Fez3wmknPMD6uwIgE4SgNg%2BM%2BFr%2BCKOkTqGa4ac%2F%2FIxmFX9MK5D%2FjBYaHe4qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOetBwOf9cjm5B%2BUyCrcA01bu27ksDJUXmTD5KBAbE2rfR%2BWYT%2FmUcKpN4WktYNo9pLCOaqkARSjdA3wGLw2f7Aun7Mpas%2BWwGrMwDhN0l0c6IYFSABcjz%2BdJLb5xxcM8vqTdliqtZs75iesJACPmkrtiq8Ptb0avW6BTIoV3mK4hcV45f55aDsP8yhy%2B3DKjAYSUtB8NgaxnMCfbVSQTOENrV7YvgMlaXbXxjNjNxBv%2FqcXXTQunBLqrCHvmIL9NfJc%2B6g172pdufoCMcRiDYqgb7Q%2BWkheAWnanmwvhPfySfaQY8L0SyFaGcsq6e%2FIbs%2BYSBFnp3yxtDPGp7O%2Fn%2FDI29ClnlVltvlz7dgEQM0bCMuOfmiqZtLtM%2BXsVccHLD57g6sfX%2Bsh1wOcc0GhsD9kQmfx3cD3mzuULcpcR5ZSfVTKbNor4CYQUrLurVqXL4PAs0CwtFSDkiU7P2ovUpP7Lo2LpUiEaVn6TVGOGhkuPlU%2BMR%2BbVdWSV3z54AFDgDpF%2FHa5FQtEnwskt6nKZqofiDymlQdYsPX%2F0N8lmMEy1iaOjWtCapH8ZDxEcAmumMk2%2BomMDoeZtrkfskYUi5ifqWbCXqhVfQE%2BFywuvZEI8GkKaiXC4jNfpiJBgKeZEgwv3rRI7KLEX0maMP2TusEGOqUBUI0J5TI6h3QGyPwB9NhpQSHnfWGPTx5Kdl%2BeltnHHTI0eIko%2FqtFi8qERS7q4l7WZPIqJlXcBHISU9KZhTTarDngc80bHTSwiRS%2F59KHbv7PhBwxAfgyaP1y62ioLnHSfvYDnTc22TUi0wkpgZiyIPw9htQ%2BV7WG1ILpj4xi8VFYKO%2Fr3v%2F%2FeHlGpWoAiB%2FdlCYO6hGRWvlkt5Gu3WL2Qg%2F%2FU043&X-Amz-Signature=b66c9521683c317458b6905dbe8e290950839d67a19ce1b1201fa4442f4924d3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
