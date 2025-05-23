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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJZQ3T7S%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDGLxQkOpQOMuSVuyvif5wrfosAjR%2FtfCYp4%2FphfYnGogIgc5Fsm%2BvVFoxXsSgI4IYoSHLnHRtfJud%2ByRuao9zy9nkqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDdFnY%2B9hGYnohuniCrcAzLwwcNwV8lWuDjj2w0%2FHK%2Bs7%2FCDF9YcLUv8UMDX%2Fw6MiZXuy9J7Z1Tb9Zr8%2B45B1fhFw6wnfsWl2M%2FKr1jd0HTwxDvPu9chLO5%2B%2FnrR6Nb1NoLHQp4sXRhcaDRvbUBmr11NfJLYsxmkI9l0uEGbnbXJLGxxMjt9DySKEEsh0%2B4J3F7MMxeY2vQ6GuQGArIK%2FiehmrVN48GxkZGNhQlOEHqkk%2Bk40iJL2lrp7Y8Te9bYsml%2FFFMcZ8EqawckR9s9H7rXWm%2BEEg1qjHSAIW8ML4nSOVbbTvLjd1Il6qCqkohYqSmAFY0o21yzoL%2BPxUp6vEMKILEiYcjjNOFSaayXYjZDTF2FRoZz02EuzhL1yHb0AlcrA2PDlKlGaw7GVX9YNWm1YAqGjFhlrKQxBjiMxQ2YdhgdRo4AOWhWT3r9eGLout4fPOHkF00rkUf2cbyB%2BhmPO5fmkx9z1VqaFtnh5E5W3mtzkv7LleiIrmUINUiJWPw3tAP1oSGtEgsCglR42BYu9ejUk57CSih3I4XHqw50qfIW7s7o9vxpD%2FGpOLVmAJiA4WTuOxQaP8W7wT1R8vU648UVlKcMI8BwwRQBKIvmK3zL19cHSuavGe9OIuGrpkEUbMsfIUPtPlwjMPnXw8EGOqUBh1I%2FZt5zClPnWPkD2%2FCTwFZn%2F09UdiUc%2F7z4J4DryoGMcRGcUS0m2yabzJw0%2B224L6LoyJlxu%2FnvzJS3Z%2F04oiYlBRyvtuc9WieC3gv8r3mR4CgNpeDegr3nWCrdmFCFGn2NbtOzbLLAxPsf%2BRBRoeffNXvQjCH4%2FPThpihUL5d7mHfeT8142Fs96yoJmZaXTqfNbsvWeoUdedBxvE534TuxFIu9&X-Amz-Signature=53b5cdd8d11d71af9c48733b260ea101755546250fc45eabf1f829ad8bc319d3&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJZQ3T7S%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDGLxQkOpQOMuSVuyvif5wrfosAjR%2FtfCYp4%2FphfYnGogIgc5Fsm%2BvVFoxXsSgI4IYoSHLnHRtfJud%2ByRuao9zy9nkqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDdFnY%2B9hGYnohuniCrcAzLwwcNwV8lWuDjj2w0%2FHK%2Bs7%2FCDF9YcLUv8UMDX%2Fw6MiZXuy9J7Z1Tb9Zr8%2B45B1fhFw6wnfsWl2M%2FKr1jd0HTwxDvPu9chLO5%2B%2FnrR6Nb1NoLHQp4sXRhcaDRvbUBmr11NfJLYsxmkI9l0uEGbnbXJLGxxMjt9DySKEEsh0%2B4J3F7MMxeY2vQ6GuQGArIK%2FiehmrVN48GxkZGNhQlOEHqkk%2Bk40iJL2lrp7Y8Te9bYsml%2FFFMcZ8EqawckR9s9H7rXWm%2BEEg1qjHSAIW8ML4nSOVbbTvLjd1Il6qCqkohYqSmAFY0o21yzoL%2BPxUp6vEMKILEiYcjjNOFSaayXYjZDTF2FRoZz02EuzhL1yHb0AlcrA2PDlKlGaw7GVX9YNWm1YAqGjFhlrKQxBjiMxQ2YdhgdRo4AOWhWT3r9eGLout4fPOHkF00rkUf2cbyB%2BhmPO5fmkx9z1VqaFtnh5E5W3mtzkv7LleiIrmUINUiJWPw3tAP1oSGtEgsCglR42BYu9ejUk57CSih3I4XHqw50qfIW7s7o9vxpD%2FGpOLVmAJiA4WTuOxQaP8W7wT1R8vU648UVlKcMI8BwwRQBKIvmK3zL19cHSuavGe9OIuGrpkEUbMsfIUPtPlwjMPnXw8EGOqUBh1I%2FZt5zClPnWPkD2%2FCTwFZn%2F09UdiUc%2F7z4J4DryoGMcRGcUS0m2yabzJw0%2B224L6LoyJlxu%2FnvzJS3Z%2F04oiYlBRyvtuc9WieC3gv8r3mR4CgNpeDegr3nWCrdmFCFGn2NbtOzbLLAxPsf%2BRBRoeffNXvQjCH4%2FPThpihUL5d7mHfeT8142Fs96yoJmZaXTqfNbsvWeoUdedBxvE534TuxFIu9&X-Amz-Signature=2e62c6b6632990b8ababf0bdac1328295b8ac3f1acc78886107362467f71461a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJZQ3T7S%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDGLxQkOpQOMuSVuyvif5wrfosAjR%2FtfCYp4%2FphfYnGogIgc5Fsm%2BvVFoxXsSgI4IYoSHLnHRtfJud%2ByRuao9zy9nkqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDdFnY%2B9hGYnohuniCrcAzLwwcNwV8lWuDjj2w0%2FHK%2Bs7%2FCDF9YcLUv8UMDX%2Fw6MiZXuy9J7Z1Tb9Zr8%2B45B1fhFw6wnfsWl2M%2FKr1jd0HTwxDvPu9chLO5%2B%2FnrR6Nb1NoLHQp4sXRhcaDRvbUBmr11NfJLYsxmkI9l0uEGbnbXJLGxxMjt9DySKEEsh0%2B4J3F7MMxeY2vQ6GuQGArIK%2FiehmrVN48GxkZGNhQlOEHqkk%2Bk40iJL2lrp7Y8Te9bYsml%2FFFMcZ8EqawckR9s9H7rXWm%2BEEg1qjHSAIW8ML4nSOVbbTvLjd1Il6qCqkohYqSmAFY0o21yzoL%2BPxUp6vEMKILEiYcjjNOFSaayXYjZDTF2FRoZz02EuzhL1yHb0AlcrA2PDlKlGaw7GVX9YNWm1YAqGjFhlrKQxBjiMxQ2YdhgdRo4AOWhWT3r9eGLout4fPOHkF00rkUf2cbyB%2BhmPO5fmkx9z1VqaFtnh5E5W3mtzkv7LleiIrmUINUiJWPw3tAP1oSGtEgsCglR42BYu9ejUk57CSih3I4XHqw50qfIW7s7o9vxpD%2FGpOLVmAJiA4WTuOxQaP8W7wT1R8vU648UVlKcMI8BwwRQBKIvmK3zL19cHSuavGe9OIuGrpkEUbMsfIUPtPlwjMPnXw8EGOqUBh1I%2FZt5zClPnWPkD2%2FCTwFZn%2F09UdiUc%2F7z4J4DryoGMcRGcUS0m2yabzJw0%2B224L6LoyJlxu%2FnvzJS3Z%2F04oiYlBRyvtuc9WieC3gv8r3mR4CgNpeDegr3nWCrdmFCFGn2NbtOzbLLAxPsf%2BRBRoeffNXvQjCH4%2FPThpihUL5d7mHfeT8142Fs96yoJmZaXTqfNbsvWeoUdedBxvE534TuxFIu9&X-Amz-Signature=3999d07666bb65f8b308a4c4a97d7d59e6f29858dd4546a87a325480d4f73a3b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
