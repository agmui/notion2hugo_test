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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEF5HNCN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy%2BPE05AdJLIabHsMyLlAln8abYHqgKf%2FSx5XxdemF6gIgDXnAleo%2BHR7FBRw60RlIMzLibz9Oo58tKTdNfM%2FBBAgq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDIOKXUrUP8RBh0hD3ircAyUhC%2BpPUfiePHn4DUXTZquFAfySCmdJM3bivbGwsp9jEedytH7%2F9Ucel896kac4mzLWL1ES%2Fkce3qESt1Zf2IoPhQdt5qh9c3tIY0EKugGhHUNfDeaojPa3L%2BfI8Rri9tG2BkH%2BqghzbKxIkTJ%2BgSISRbwzyL2xXtjJ1SI9rA%2BAUB8fK%2BhaJjsQD4IQxWaMzr%2BWMOC%2BqYBlND1DjSafYFHG1HQ8Y%2FBvkPkDpKOh7pNFyCnuY0agkPBkwQnz50o3xSLz4t3TGkdiyiHNKQi9T8%2F5ewexrKwjSEW4htAMmDSI5Or5ak40Mmw95VzV8dRrYoJR701boNQyLrpdMb0IvDyCVinx9eryFUQw211xn0XIK7f2EangzsN3oXEA4vKIAY8ZnntrR1tcavVryf1STlv76QPFZOrOFbVQXFw29bNugmr%2BHAkrwhQVOHgU9JC0aVoaT3W8P8COScAo2Hitc6JaL%2BJzlKtnWGTSmuRnZ%2F8ye6eRI6SYYw92iysgtsJpteFpzhSrjxjRQITc5khpxJnoZtWbawLAs1RaUegBnbNlNwrC0IxTA%2BvEcKq5hIfhbuXgqA9yb6Ooyl9g2KFTNMp5e7rzM0lpGRoX%2BU4zc46YuwlUZ6ELY99xmVPVMPDvtsQGOqUBRpMYJyi%2BLfrp9BWJOztmc8VhakznPpmFJV4KgEMO%2BFsOn3EW1NG%2BY3dOqIrHOUhQPJI37RaIV%2FhiVVt3znepH%2BlgCaBDKsxsC%2FoMtwRfqVm8T1gNf%2B0iqpbzQuZupPuuiKZmUSmIQTIx3DRYg1atttmu1tvXv7nl0RnbC%2BsLp1FWkEbZCZE2MmpPJlgQBYYjpqmjap1nwy5Awk6EadowcXGqQPER&X-Amz-Signature=e889fbf51911d66c545f870539c8ec89f5df28437299deeb6d9e6ae40f456caa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEF5HNCN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy%2BPE05AdJLIabHsMyLlAln8abYHqgKf%2FSx5XxdemF6gIgDXnAleo%2BHR7FBRw60RlIMzLibz9Oo58tKTdNfM%2FBBAgq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDIOKXUrUP8RBh0hD3ircAyUhC%2BpPUfiePHn4DUXTZquFAfySCmdJM3bivbGwsp9jEedytH7%2F9Ucel896kac4mzLWL1ES%2Fkce3qESt1Zf2IoPhQdt5qh9c3tIY0EKugGhHUNfDeaojPa3L%2BfI8Rri9tG2BkH%2BqghzbKxIkTJ%2BgSISRbwzyL2xXtjJ1SI9rA%2BAUB8fK%2BhaJjsQD4IQxWaMzr%2BWMOC%2BqYBlND1DjSafYFHG1HQ8Y%2FBvkPkDpKOh7pNFyCnuY0agkPBkwQnz50o3xSLz4t3TGkdiyiHNKQi9T8%2F5ewexrKwjSEW4htAMmDSI5Or5ak40Mmw95VzV8dRrYoJR701boNQyLrpdMb0IvDyCVinx9eryFUQw211xn0XIK7f2EangzsN3oXEA4vKIAY8ZnntrR1tcavVryf1STlv76QPFZOrOFbVQXFw29bNugmr%2BHAkrwhQVOHgU9JC0aVoaT3W8P8COScAo2Hitc6JaL%2BJzlKtnWGTSmuRnZ%2F8ye6eRI6SYYw92iysgtsJpteFpzhSrjxjRQITc5khpxJnoZtWbawLAs1RaUegBnbNlNwrC0IxTA%2BvEcKq5hIfhbuXgqA9yb6Ooyl9g2KFTNMp5e7rzM0lpGRoX%2BU4zc46YuwlUZ6ELY99xmVPVMPDvtsQGOqUBRpMYJyi%2BLfrp9BWJOztmc8VhakznPpmFJV4KgEMO%2BFsOn3EW1NG%2BY3dOqIrHOUhQPJI37RaIV%2FhiVVt3znepH%2BlgCaBDKsxsC%2FoMtwRfqVm8T1gNf%2B0iqpbzQuZupPuuiKZmUSmIQTIx3DRYg1atttmu1tvXv7nl0RnbC%2BsLp1FWkEbZCZE2MmpPJlgQBYYjpqmjap1nwy5Awk6EadowcXGqQPER&X-Amz-Signature=4a440da3adba610da64bdf66688f4d84446a34bdb1c42a3b3eccb15278926f51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEF5HNCN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy%2BPE05AdJLIabHsMyLlAln8abYHqgKf%2FSx5XxdemF6gIgDXnAleo%2BHR7FBRw60RlIMzLibz9Oo58tKTdNfM%2FBBAgq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDIOKXUrUP8RBh0hD3ircAyUhC%2BpPUfiePHn4DUXTZquFAfySCmdJM3bivbGwsp9jEedytH7%2F9Ucel896kac4mzLWL1ES%2Fkce3qESt1Zf2IoPhQdt5qh9c3tIY0EKugGhHUNfDeaojPa3L%2BfI8Rri9tG2BkH%2BqghzbKxIkTJ%2BgSISRbwzyL2xXtjJ1SI9rA%2BAUB8fK%2BhaJjsQD4IQxWaMzr%2BWMOC%2BqYBlND1DjSafYFHG1HQ8Y%2FBvkPkDpKOh7pNFyCnuY0agkPBkwQnz50o3xSLz4t3TGkdiyiHNKQi9T8%2F5ewexrKwjSEW4htAMmDSI5Or5ak40Mmw95VzV8dRrYoJR701boNQyLrpdMb0IvDyCVinx9eryFUQw211xn0XIK7f2EangzsN3oXEA4vKIAY8ZnntrR1tcavVryf1STlv76QPFZOrOFbVQXFw29bNugmr%2BHAkrwhQVOHgU9JC0aVoaT3W8P8COScAo2Hitc6JaL%2BJzlKtnWGTSmuRnZ%2F8ye6eRI6SYYw92iysgtsJpteFpzhSrjxjRQITc5khpxJnoZtWbawLAs1RaUegBnbNlNwrC0IxTA%2BvEcKq5hIfhbuXgqA9yb6Ooyl9g2KFTNMp5e7rzM0lpGRoX%2BU4zc46YuwlUZ6ELY99xmVPVMPDvtsQGOqUBRpMYJyi%2BLfrp9BWJOztmc8VhakznPpmFJV4KgEMO%2BFsOn3EW1NG%2BY3dOqIrHOUhQPJI37RaIV%2FhiVVt3znepH%2BlgCaBDKsxsC%2FoMtwRfqVm8T1gNf%2B0iqpbzQuZupPuuiKZmUSmIQTIx3DRYg1atttmu1tvXv7nl0RnbC%2BsLp1FWkEbZCZE2MmpPJlgQBYYjpqmjap1nwy5Awk6EadowcXGqQPER&X-Amz-Signature=ae8a2299a9732deaefb5af5871f5b6df07a95834837a7e84bdb328a935ed9264&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
