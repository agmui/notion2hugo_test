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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNAISOXW%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T121524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAeCUce7DdHgy1gBi3QJ8Fg20RqrhOV8cS2Pc4SesXVmAiEA1%2FWTDUGLsvVjV0BehEWfwNjfq%2F4N2yYQzkitb6VnawYq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDP3VuctQGTyzE%2FQ4JSrcA5r6w1uD1wYKKvwIG7qOkbWkeeNe339W6Dfcw72WDU9TF9zXZUiOco0N%2FutThEsDgE9Bd6q6uqR27gSqnF0ojw9AoYjGMUlKg0nDqm1zNWii8JnLH5nL4B9d9%2FiXRdjCpXt64jPtLSbdHu%2FXi6pJIv8WEJll4xQatom0dFHAZCj7XjM7y%2BMxJozF09rImjSD0l4p9%2BRoecawIFpB0CeHINqE8zy2u%2FO190Mx8lbugknc931%2FEnAYwUlFibCRRnLNWPhzhVGr%2FNvQ02Y%2FWzz59ICCmeMILnrheMiGNM2s7KeHDy3W%2B7mo3hhqWK1wOqKfEuaaij9sVDVZlRROO%2Fz%2BvWsqFbk2wOrqVkpvl9J%2FIOHuRdMXATGH0p4SzynfLcVUVW1hQ7n%2BNPRW76GXZ1QUPESi5lX2rI4NIBJtY9b2wij%2FDt%2FUsuuM25WceAPLF2ld%2FuQI8edln3r%2FZsFe8IK9TAAEtKhEreB5nureBENlP902Fxwo0jKCcdNFLaKLGSsU140tlsbRp2AcGxQi1RTD3%2FZ7mn3dxllKr64SSgaWlv23VV80rxTb0dWeWD3NniGkmKMXo11JfGlXPxuHlYBiN1M2RxSJD7nloPMi9CT42AWQYmL6qmeXVoh504T9MOKK1L8GOqUBX2yFk1TaH4ls9YypW%2FxMsAw%2B3gKjAdUxHdR%2B%2BK3Dlg9nWSpCD1%2BZtL8v32pH15XFIYCOcj%2BbjGof4n5Q8UMORX0gfyKj2vVT5j0fYulKAwv1cFpZiuHwLT86tnq526JNhxBpkJ7t3fY5AsPat7YcX%2BK4bCVJFlX7DFDSf6x75uXKsyGREWNacISi4xEtqv1LyTE4jbhi%2F%2BZnjD0tJbbbQmRBgaWD&X-Amz-Signature=136c50fa11aa04922df0886b58c2485f06bcc070850cedc95d99b5e5eb500f45&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNAISOXW%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T121524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAeCUce7DdHgy1gBi3QJ8Fg20RqrhOV8cS2Pc4SesXVmAiEA1%2FWTDUGLsvVjV0BehEWfwNjfq%2F4N2yYQzkitb6VnawYq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDP3VuctQGTyzE%2FQ4JSrcA5r6w1uD1wYKKvwIG7qOkbWkeeNe339W6Dfcw72WDU9TF9zXZUiOco0N%2FutThEsDgE9Bd6q6uqR27gSqnF0ojw9AoYjGMUlKg0nDqm1zNWii8JnLH5nL4B9d9%2FiXRdjCpXt64jPtLSbdHu%2FXi6pJIv8WEJll4xQatom0dFHAZCj7XjM7y%2BMxJozF09rImjSD0l4p9%2BRoecawIFpB0CeHINqE8zy2u%2FO190Mx8lbugknc931%2FEnAYwUlFibCRRnLNWPhzhVGr%2FNvQ02Y%2FWzz59ICCmeMILnrheMiGNM2s7KeHDy3W%2B7mo3hhqWK1wOqKfEuaaij9sVDVZlRROO%2Fz%2BvWsqFbk2wOrqVkpvl9J%2FIOHuRdMXATGH0p4SzynfLcVUVW1hQ7n%2BNPRW76GXZ1QUPESi5lX2rI4NIBJtY9b2wij%2FDt%2FUsuuM25WceAPLF2ld%2FuQI8edln3r%2FZsFe8IK9TAAEtKhEreB5nureBENlP902Fxwo0jKCcdNFLaKLGSsU140tlsbRp2AcGxQi1RTD3%2FZ7mn3dxllKr64SSgaWlv23VV80rxTb0dWeWD3NniGkmKMXo11JfGlXPxuHlYBiN1M2RxSJD7nloPMi9CT42AWQYmL6qmeXVoh504T9MOKK1L8GOqUBX2yFk1TaH4ls9YypW%2FxMsAw%2B3gKjAdUxHdR%2B%2BK3Dlg9nWSpCD1%2BZtL8v32pH15XFIYCOcj%2BbjGof4n5Q8UMORX0gfyKj2vVT5j0fYulKAwv1cFpZiuHwLT86tnq526JNhxBpkJ7t3fY5AsPat7YcX%2BK4bCVJFlX7DFDSf6x75uXKsyGREWNacISi4xEtqv1LyTE4jbhi%2F%2BZnjD0tJbbbQmRBgaWD&X-Amz-Signature=66a4c7fcb6f75767478ddb036dc3e476470ae5656a0ccdc2a14f6c9573b0e9d5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNAISOXW%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T121524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAeCUce7DdHgy1gBi3QJ8Fg20RqrhOV8cS2Pc4SesXVmAiEA1%2FWTDUGLsvVjV0BehEWfwNjfq%2F4N2yYQzkitb6VnawYq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDP3VuctQGTyzE%2FQ4JSrcA5r6w1uD1wYKKvwIG7qOkbWkeeNe339W6Dfcw72WDU9TF9zXZUiOco0N%2FutThEsDgE9Bd6q6uqR27gSqnF0ojw9AoYjGMUlKg0nDqm1zNWii8JnLH5nL4B9d9%2FiXRdjCpXt64jPtLSbdHu%2FXi6pJIv8WEJll4xQatom0dFHAZCj7XjM7y%2BMxJozF09rImjSD0l4p9%2BRoecawIFpB0CeHINqE8zy2u%2FO190Mx8lbugknc931%2FEnAYwUlFibCRRnLNWPhzhVGr%2FNvQ02Y%2FWzz59ICCmeMILnrheMiGNM2s7KeHDy3W%2B7mo3hhqWK1wOqKfEuaaij9sVDVZlRROO%2Fz%2BvWsqFbk2wOrqVkpvl9J%2FIOHuRdMXATGH0p4SzynfLcVUVW1hQ7n%2BNPRW76GXZ1QUPESi5lX2rI4NIBJtY9b2wij%2FDt%2FUsuuM25WceAPLF2ld%2FuQI8edln3r%2FZsFe8IK9TAAEtKhEreB5nureBENlP902Fxwo0jKCcdNFLaKLGSsU140tlsbRp2AcGxQi1RTD3%2FZ7mn3dxllKr64SSgaWlv23VV80rxTb0dWeWD3NniGkmKMXo11JfGlXPxuHlYBiN1M2RxSJD7nloPMi9CT42AWQYmL6qmeXVoh504T9MOKK1L8GOqUBX2yFk1TaH4ls9YypW%2FxMsAw%2B3gKjAdUxHdR%2B%2BK3Dlg9nWSpCD1%2BZtL8v32pH15XFIYCOcj%2BbjGof4n5Q8UMORX0gfyKj2vVT5j0fYulKAwv1cFpZiuHwLT86tnq526JNhxBpkJ7t3fY5AsPat7YcX%2BK4bCVJFlX7DFDSf6x75uXKsyGREWNacISi4xEtqv1LyTE4jbhi%2F%2BZnjD0tJbbbQmRBgaWD&X-Amz-Signature=cc6b71def0c15586613a3a2473420a25962015c70a11b75905ed875d106c290e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
