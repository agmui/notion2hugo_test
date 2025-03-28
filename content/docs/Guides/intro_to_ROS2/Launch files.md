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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVLTRPJ6%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTOy3zPMR9VKGp6fICkWjTIFiM1PcaAHyDsv3KYvpBTAiEA8QC5lsxwm2jc%2FJt0OMk0w%2BHfIb3KpmuILBE0UXmbS4cq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMpR3PXOTvT5zMb%2FMSrcA2aRgXy%2B4UVCxYcoWMkUsTYaxwOcTcFTHQRoBnseMRskkSkxX5g34UxR4Mm64oVP%2FRPLoMwCy0LJDt3mP9lqsDTDfOh8mUByiPPgBSwNBXR9sPqKEG6%2FsYJ0FrjYM0LaYBoKicsvgu3b5fUuZanQfpItCinzPG47lRwNqyNAUo%2FnQfkDYtGqhpSFG58z6Pnil%2FJjGsu24gCIE2S2ZE2Is5pewpCcJGU4qm2izzlTF9YEUQ0jWuimLATflrb5cdiwfSLIl0R956grdSH5YXgko3C78epcraML%2FqL3dEu%2FhT%2B%2BiqA6FaPb4%2BqUkXQp%2BK3%2FMV%2BvFH9Pfj%2FMaz%2Fbal1hH3DUE%2Byxmds%2Fi2JuYVBU9Z6i2pMeP%2BtQT3gkTpZBYwHfwLYLb170NtQNWnY9g3DzTMuQGU7Cdc5ogiyuDELnH6Y0W1BEPk3xVWRRlKT%2B%2B9rUEiHaDPRK6OjpYrSFSM3NBMFbSYyyp%2FGoSHf07U16kYfnNKaDWPJkt7Ex4acR5yTW9nZDZApd73LY9W7u51WwdsITjC5OgXWEekVNBpvIgUlbYnf37ufrdvBxl7HqylkLvx%2F2uwZs4pIj%2B3F96MFMNM2wL3aPfTskIsN59zx0pp%2Fi0U%2BXzmKChb1mb4JiMMyJm78GOqUBXXnbgROfhh7l8x3ATe9cW%2BB6RCcDyrx8GmgS14chw8tI0b2CgUiPTl%2FNzJ8G8jxGfWBK77brt0vk8kBFzDR88OvUybt9dgzqwAYW7OYwwP6klNDXHprJGbSa8v1JzlU80GaA5B0Lxe5X72a6HYpY9Wf6fvVbFGQYXriJxd6O62K5QWmKvq0E%2FJIkTkXIrFLixuvnoqNrK%2Bj9iFcFrzA2U0tkQinB&X-Amz-Signature=4871b5e0220ca8b387d5040d84fd5e3302d6adc0a2878e0ba48d1c67b5aef2c5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVLTRPJ6%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTOy3zPMR9VKGp6fICkWjTIFiM1PcaAHyDsv3KYvpBTAiEA8QC5lsxwm2jc%2FJt0OMk0w%2BHfIb3KpmuILBE0UXmbS4cq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMpR3PXOTvT5zMb%2FMSrcA2aRgXy%2B4UVCxYcoWMkUsTYaxwOcTcFTHQRoBnseMRskkSkxX5g34UxR4Mm64oVP%2FRPLoMwCy0LJDt3mP9lqsDTDfOh8mUByiPPgBSwNBXR9sPqKEG6%2FsYJ0FrjYM0LaYBoKicsvgu3b5fUuZanQfpItCinzPG47lRwNqyNAUo%2FnQfkDYtGqhpSFG58z6Pnil%2FJjGsu24gCIE2S2ZE2Is5pewpCcJGU4qm2izzlTF9YEUQ0jWuimLATflrb5cdiwfSLIl0R956grdSH5YXgko3C78epcraML%2FqL3dEu%2FhT%2B%2BiqA6FaPb4%2BqUkXQp%2BK3%2FMV%2BvFH9Pfj%2FMaz%2Fbal1hH3DUE%2Byxmds%2Fi2JuYVBU9Z6i2pMeP%2BtQT3gkTpZBYwHfwLYLb170NtQNWnY9g3DzTMuQGU7Cdc5ogiyuDELnH6Y0W1BEPk3xVWRRlKT%2B%2B9rUEiHaDPRK6OjpYrSFSM3NBMFbSYyyp%2FGoSHf07U16kYfnNKaDWPJkt7Ex4acR5yTW9nZDZApd73LY9W7u51WwdsITjC5OgXWEekVNBpvIgUlbYnf37ufrdvBxl7HqylkLvx%2F2uwZs4pIj%2B3F96MFMNM2wL3aPfTskIsN59zx0pp%2Fi0U%2BXzmKChb1mb4JiMMyJm78GOqUBXXnbgROfhh7l8x3ATe9cW%2BB6RCcDyrx8GmgS14chw8tI0b2CgUiPTl%2FNzJ8G8jxGfWBK77brt0vk8kBFzDR88OvUybt9dgzqwAYW7OYwwP6klNDXHprJGbSa8v1JzlU80GaA5B0Lxe5X72a6HYpY9Wf6fvVbFGQYXriJxd6O62K5QWmKvq0E%2FJIkTkXIrFLixuvnoqNrK%2Bj9iFcFrzA2U0tkQinB&X-Amz-Signature=7d4045f3193775fefa0137cc279209bf4ad0ff7abd113be78bcd603bf55a78a0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVLTRPJ6%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTOy3zPMR9VKGp6fICkWjTIFiM1PcaAHyDsv3KYvpBTAiEA8QC5lsxwm2jc%2FJt0OMk0w%2BHfIb3KpmuILBE0UXmbS4cq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMpR3PXOTvT5zMb%2FMSrcA2aRgXy%2B4UVCxYcoWMkUsTYaxwOcTcFTHQRoBnseMRskkSkxX5g34UxR4Mm64oVP%2FRPLoMwCy0LJDt3mP9lqsDTDfOh8mUByiPPgBSwNBXR9sPqKEG6%2FsYJ0FrjYM0LaYBoKicsvgu3b5fUuZanQfpItCinzPG47lRwNqyNAUo%2FnQfkDYtGqhpSFG58z6Pnil%2FJjGsu24gCIE2S2ZE2Is5pewpCcJGU4qm2izzlTF9YEUQ0jWuimLATflrb5cdiwfSLIl0R956grdSH5YXgko3C78epcraML%2FqL3dEu%2FhT%2B%2BiqA6FaPb4%2BqUkXQp%2BK3%2FMV%2BvFH9Pfj%2FMaz%2Fbal1hH3DUE%2Byxmds%2Fi2JuYVBU9Z6i2pMeP%2BtQT3gkTpZBYwHfwLYLb170NtQNWnY9g3DzTMuQGU7Cdc5ogiyuDELnH6Y0W1BEPk3xVWRRlKT%2B%2B9rUEiHaDPRK6OjpYrSFSM3NBMFbSYyyp%2FGoSHf07U16kYfnNKaDWPJkt7Ex4acR5yTW9nZDZApd73LY9W7u51WwdsITjC5OgXWEekVNBpvIgUlbYnf37ufrdvBxl7HqylkLvx%2F2uwZs4pIj%2B3F96MFMNM2wL3aPfTskIsN59zx0pp%2Fi0U%2BXzmKChb1mb4JiMMyJm78GOqUBXXnbgROfhh7l8x3ATe9cW%2BB6RCcDyrx8GmgS14chw8tI0b2CgUiPTl%2FNzJ8G8jxGfWBK77brt0vk8kBFzDR88OvUybt9dgzqwAYW7OYwwP6klNDXHprJGbSa8v1JzlU80GaA5B0Lxe5X72a6HYpY9Wf6fvVbFGQYXriJxd6O62K5QWmKvq0E%2FJIkTkXIrFLixuvnoqNrK%2Bj9iFcFrzA2U0tkQinB&X-Amz-Signature=e1c95b4690397a3801a77bdbd8c7d44f3eba1e7750261fdfc474b19e220a90de&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
