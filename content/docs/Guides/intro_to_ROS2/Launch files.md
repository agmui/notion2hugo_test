---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAO2M77B%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsuhve%2FnxpL2r2iPycsiTc62QHxhB9u%2B8piAqAfNxroAIgRDz88ZHJ4x8ywbvbNi3D8A3ZC77sFTxmP72FjKshWxkq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDEFrRRpXFYmu97cSiCrcA3ZiK5YJNBRqmUHJhC%2BFsxoXjsYOJgVsANYvZMi6udkcXIegtofYpZrHNXuIX59%2B%2FJAMuCB%2B6D28EhQxNlNVvBx1eSbIS9SWt3LAmfsfdp92yxsc7Pcnyilhbt7BBeYKl%2FfUuUvmgRxX5rPCL9CrlxxHLLO4S0ZLNGgrJstFZXg5HvsNKkWUvSvWXY3d1dDIMagHI7tzw5D6IujumE9PMmm3Pvcw%2Fo4%2FfpymDOrTYSg2N7%2FGEgnm6%2BSTYqjDpFwicp5uQqAX8wJTYr%2FrOSXI5wkEKyBdJsbaTR2x9iK5Ef3hoUdswHBMDeVo8ocDz3Uuafq3Uu%2FFU9dpwDev15iMyjN5N1O%2Bl1tgxba%2FTrPm2Sujs80uKXOSdK5GUfETAxNllDDYywqNsT7C20H30eQD7vH5iDePQJgwxtxnNCyCeD39Ng9AmRvirfd0TllBIJhnniSgskDdCOEW5eNqa6GvIgmfxErG6QOCMH6V0P3PEjvJoV%2B5oxJ30W33odXiP4t%2Fm92pw%2Fvq%2FVMG5XKhKuM5J9HE1TkSHNt%2BCUq9bpTar9sVFgp%2F1CfsMgZ1WjCJZG6Ujwo8p%2FszpR%2Bf5e%2B5eKCc93d8aAzesAwKTgN7QvmaPYPLk2aPh%2BR6FAX7q%2BV%2BMOWr8MQGOqUBd8VDVk%2FwF0HCIvdU7EcASC7Nry%2FFquor2OA5aOfFvmXhxmGCCQj7lUZ1QufTjMKq%2FiLiHJj4MNl4ZHd2VodqOHWCyLbr79Zu%2FgbM4Q5Wt59ZQriL%2FH2zDqodS4DQJrKdQUoq65aaBGa4IARLsp80erXUFn9T29k2yDBrKfM3x4GYvM9Y7e0kpo3Ige9J5D469wCy0VZt705S7mCjPluAMI4BjGM%2B&X-Amz-Signature=425715e2f92aaa4b5b36f219a3a27ac2227fbf352069c3dc4d37678a64f69319&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAO2M77B%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsuhve%2FnxpL2r2iPycsiTc62QHxhB9u%2B8piAqAfNxroAIgRDz88ZHJ4x8ywbvbNi3D8A3ZC77sFTxmP72FjKshWxkq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDEFrRRpXFYmu97cSiCrcA3ZiK5YJNBRqmUHJhC%2BFsxoXjsYOJgVsANYvZMi6udkcXIegtofYpZrHNXuIX59%2B%2FJAMuCB%2B6D28EhQxNlNVvBx1eSbIS9SWt3LAmfsfdp92yxsc7Pcnyilhbt7BBeYKl%2FfUuUvmgRxX5rPCL9CrlxxHLLO4S0ZLNGgrJstFZXg5HvsNKkWUvSvWXY3d1dDIMagHI7tzw5D6IujumE9PMmm3Pvcw%2Fo4%2FfpymDOrTYSg2N7%2FGEgnm6%2BSTYqjDpFwicp5uQqAX8wJTYr%2FrOSXI5wkEKyBdJsbaTR2x9iK5Ef3hoUdswHBMDeVo8ocDz3Uuafq3Uu%2FFU9dpwDev15iMyjN5N1O%2Bl1tgxba%2FTrPm2Sujs80uKXOSdK5GUfETAxNllDDYywqNsT7C20H30eQD7vH5iDePQJgwxtxnNCyCeD39Ng9AmRvirfd0TllBIJhnniSgskDdCOEW5eNqa6GvIgmfxErG6QOCMH6V0P3PEjvJoV%2B5oxJ30W33odXiP4t%2Fm92pw%2Fvq%2FVMG5XKhKuM5J9HE1TkSHNt%2BCUq9bpTar9sVFgp%2F1CfsMgZ1WjCJZG6Ujwo8p%2FszpR%2Bf5e%2B5eKCc93d8aAzesAwKTgN7QvmaPYPLk2aPh%2BR6FAX7q%2BV%2BMOWr8MQGOqUBd8VDVk%2FwF0HCIvdU7EcASC7Nry%2FFquor2OA5aOfFvmXhxmGCCQj7lUZ1QufTjMKq%2FiLiHJj4MNl4ZHd2VodqOHWCyLbr79Zu%2FgbM4Q5Wt59ZQriL%2FH2zDqodS4DQJrKdQUoq65aaBGa4IARLsp80erXUFn9T29k2yDBrKfM3x4GYvM9Y7e0kpo3Ige9J5D469wCy0VZt705S7mCjPluAMI4BjGM%2B&X-Amz-Signature=afd903e5a3c531cd04503da46516201163cfd17b7a004e49a99fe9f80a31ed5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAO2M77B%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsuhve%2FnxpL2r2iPycsiTc62QHxhB9u%2B8piAqAfNxroAIgRDz88ZHJ4x8ywbvbNi3D8A3ZC77sFTxmP72FjKshWxkq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDEFrRRpXFYmu97cSiCrcA3ZiK5YJNBRqmUHJhC%2BFsxoXjsYOJgVsANYvZMi6udkcXIegtofYpZrHNXuIX59%2B%2FJAMuCB%2B6D28EhQxNlNVvBx1eSbIS9SWt3LAmfsfdp92yxsc7Pcnyilhbt7BBeYKl%2FfUuUvmgRxX5rPCL9CrlxxHLLO4S0ZLNGgrJstFZXg5HvsNKkWUvSvWXY3d1dDIMagHI7tzw5D6IujumE9PMmm3Pvcw%2Fo4%2FfpymDOrTYSg2N7%2FGEgnm6%2BSTYqjDpFwicp5uQqAX8wJTYr%2FrOSXI5wkEKyBdJsbaTR2x9iK5Ef3hoUdswHBMDeVo8ocDz3Uuafq3Uu%2FFU9dpwDev15iMyjN5N1O%2Bl1tgxba%2FTrPm2Sujs80uKXOSdK5GUfETAxNllDDYywqNsT7C20H30eQD7vH5iDePQJgwxtxnNCyCeD39Ng9AmRvirfd0TllBIJhnniSgskDdCOEW5eNqa6GvIgmfxErG6QOCMH6V0P3PEjvJoV%2B5oxJ30W33odXiP4t%2Fm92pw%2Fvq%2FVMG5XKhKuM5J9HE1TkSHNt%2BCUq9bpTar9sVFgp%2F1CfsMgZ1WjCJZG6Ujwo8p%2FszpR%2Bf5e%2B5eKCc93d8aAzesAwKTgN7QvmaPYPLk2aPh%2BR6FAX7q%2BV%2BMOWr8MQGOqUBd8VDVk%2FwF0HCIvdU7EcASC7Nry%2FFquor2OA5aOfFvmXhxmGCCQj7lUZ1QufTjMKq%2FiLiHJj4MNl4ZHd2VodqOHWCyLbr79Zu%2FgbM4Q5Wt59ZQriL%2FH2zDqodS4DQJrKdQUoq65aaBGa4IARLsp80erXUFn9T29k2yDBrKfM3x4GYvM9Y7e0kpo3Ige9J5D469wCy0VZt705S7mCjPluAMI4BjGM%2B&X-Amz-Signature=e19f6d71a26bf561f1cfe1edf53874dd8eb0596fa3a478bbeb8c532cc4bca040&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
