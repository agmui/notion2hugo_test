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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMVCLV7R%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T090419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCICJKf1ZLwht1znav8FTzk62LxWz2h04oTN0NDcN%2BnWOmAiEAw3YCy0ceVsb6%2Bw%2B3r%2FDKFCtPsepEDR2QT3lTv779S08q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDNB0OS5JgQUKvAAtuSrcA%2BLPH%2BMQmffr%2B4XkRCRAHhx2U0FedI0IxIMgTy9xg07KzVGJpFWXA46qtbO%2FGSeRpLyPLdq8%2F4JXQygPCUyxHZJxf0TxtNPm16vddZUqytLLxXTiIO%2BujsQkSe5KjlA5ZUdPIyIhwP2ofBLDnOIyHtA0PT3dntkpgRTneKmXpKl2bkzrgwn1gFGavNLa%2FrGhKMA776SdKdUPsRqI0d2cX2q%2BvZom2SbJ1uS5BE93hxpFeOtuYLgGTMXtImA463KUC4PaRy5Jp6CpQFkXd8lshd4MZxA7dWKOAmBOsPefjTJ6UkPim08IFma%2B2YM%2FEFDchHcqeI%2BBIq%2Bjr9qIRcpkZbwJS9VSlKTo3%2F9p%2Bxyl%2FYfbPYrH6H5h05WrRulxS7m7mD0jnk9CZyjYdajWiqZJF1FuYpCN1Nm%2BQecc0hBUySmLEnmpV1cjtPqoKKgd3tFaSoLvxZU2Jtp2QhGv%2Fkd6bckXyw4QTAwevBJd7UiJrFsBjUNoJ9nL5QXKV9AshZmpM8cM22%2FTDv3xxZ7O7gH3quVv%2F%2BWDivVgVnmPpKQ0FndsMAMA2ycNgdK%2FxQCq37IA8MzPdyfIbPmdGFbv634gjUlEHz1rkQvnBf0PjPU28ECyrB91tyZQhTCisLisMMv9xb0GOqUBsLU0WWItyameJl5rZGELWcwXDaJjcj2f6NJxbCVA1FV9zqTcsFKa3Mc69MzQ5dCl2rbAQ5LaRsk5RtH49pegrFOrMpgVXLo0genFSznYSznn5xRQtBAclt4OqcwDXOyh4mJlHfrP754x8f0Ck0qQKvjTcWt5XDAhCQtB7pSndJ54YSRw9zwyWBzSqafVFdUw3Wvy6vzdwOWkw3atFV9loDVuHPFe&X-Amz-Signature=727ec08bd578d6b9f4b471ea808c94e01be7ddb3daf5a92c0aa00d00a4b26329&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMVCLV7R%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T090419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCICJKf1ZLwht1znav8FTzk62LxWz2h04oTN0NDcN%2BnWOmAiEAw3YCy0ceVsb6%2Bw%2B3r%2FDKFCtPsepEDR2QT3lTv779S08q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDNB0OS5JgQUKvAAtuSrcA%2BLPH%2BMQmffr%2B4XkRCRAHhx2U0FedI0IxIMgTy9xg07KzVGJpFWXA46qtbO%2FGSeRpLyPLdq8%2F4JXQygPCUyxHZJxf0TxtNPm16vddZUqytLLxXTiIO%2BujsQkSe5KjlA5ZUdPIyIhwP2ofBLDnOIyHtA0PT3dntkpgRTneKmXpKl2bkzrgwn1gFGavNLa%2FrGhKMA776SdKdUPsRqI0d2cX2q%2BvZom2SbJ1uS5BE93hxpFeOtuYLgGTMXtImA463KUC4PaRy5Jp6CpQFkXd8lshd4MZxA7dWKOAmBOsPefjTJ6UkPim08IFma%2B2YM%2FEFDchHcqeI%2BBIq%2Bjr9qIRcpkZbwJS9VSlKTo3%2F9p%2Bxyl%2FYfbPYrH6H5h05WrRulxS7m7mD0jnk9CZyjYdajWiqZJF1FuYpCN1Nm%2BQecc0hBUySmLEnmpV1cjtPqoKKgd3tFaSoLvxZU2Jtp2QhGv%2Fkd6bckXyw4QTAwevBJd7UiJrFsBjUNoJ9nL5QXKV9AshZmpM8cM22%2FTDv3xxZ7O7gH3quVv%2F%2BWDivVgVnmPpKQ0FndsMAMA2ycNgdK%2FxQCq37IA8MzPdyfIbPmdGFbv634gjUlEHz1rkQvnBf0PjPU28ECyrB91tyZQhTCisLisMMv9xb0GOqUBsLU0WWItyameJl5rZGELWcwXDaJjcj2f6NJxbCVA1FV9zqTcsFKa3Mc69MzQ5dCl2rbAQ5LaRsk5RtH49pegrFOrMpgVXLo0genFSznYSznn5xRQtBAclt4OqcwDXOyh4mJlHfrP754x8f0Ck0qQKvjTcWt5XDAhCQtB7pSndJ54YSRw9zwyWBzSqafVFdUw3Wvy6vzdwOWkw3atFV9loDVuHPFe&X-Amz-Signature=df6eac31e4312c12e988d9a5329754c3a0114929a50ec3c6bf41c8fef8467f28&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMVCLV7R%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T090419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCICJKf1ZLwht1znav8FTzk62LxWz2h04oTN0NDcN%2BnWOmAiEAw3YCy0ceVsb6%2Bw%2B3r%2FDKFCtPsepEDR2QT3lTv779S08q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDNB0OS5JgQUKvAAtuSrcA%2BLPH%2BMQmffr%2B4XkRCRAHhx2U0FedI0IxIMgTy9xg07KzVGJpFWXA46qtbO%2FGSeRpLyPLdq8%2F4JXQygPCUyxHZJxf0TxtNPm16vddZUqytLLxXTiIO%2BujsQkSe5KjlA5ZUdPIyIhwP2ofBLDnOIyHtA0PT3dntkpgRTneKmXpKl2bkzrgwn1gFGavNLa%2FrGhKMA776SdKdUPsRqI0d2cX2q%2BvZom2SbJ1uS5BE93hxpFeOtuYLgGTMXtImA463KUC4PaRy5Jp6CpQFkXd8lshd4MZxA7dWKOAmBOsPefjTJ6UkPim08IFma%2B2YM%2FEFDchHcqeI%2BBIq%2Bjr9qIRcpkZbwJS9VSlKTo3%2F9p%2Bxyl%2FYfbPYrH6H5h05WrRulxS7m7mD0jnk9CZyjYdajWiqZJF1FuYpCN1Nm%2BQecc0hBUySmLEnmpV1cjtPqoKKgd3tFaSoLvxZU2Jtp2QhGv%2Fkd6bckXyw4QTAwevBJd7UiJrFsBjUNoJ9nL5QXKV9AshZmpM8cM22%2FTDv3xxZ7O7gH3quVv%2F%2BWDivVgVnmPpKQ0FndsMAMA2ycNgdK%2FxQCq37IA8MzPdyfIbPmdGFbv634gjUlEHz1rkQvnBf0PjPU28ECyrB91tyZQhTCisLisMMv9xb0GOqUBsLU0WWItyameJl5rZGELWcwXDaJjcj2f6NJxbCVA1FV9zqTcsFKa3Mc69MzQ5dCl2rbAQ5LaRsk5RtH49pegrFOrMpgVXLo0genFSznYSznn5xRQtBAclt4OqcwDXOyh4mJlHfrP754x8f0Ck0qQKvjTcWt5XDAhCQtB7pSndJ54YSRw9zwyWBzSqafVFdUw3Wvy6vzdwOWkw3atFV9loDVuHPFe&X-Amz-Signature=379d4241d7be6bc08b94f34d8943ab119a7a3373e99340d040344bea66f131ff&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
