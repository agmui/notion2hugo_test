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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SQIWZPI%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T050913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0%2B%2Fh%2FZXI3cCmsEM8rxroUiNeQBr7%2FPZF%2Bxfpb9Mn7%2BAIgAe3xw8RDqgAPL%2FrprN9Vp%2F9TbUzk4HCEtJi56WWpNbQq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDB5z592BH061R9EOdCrcAw1P%2FAgoAxw%2B16DiuoKGZ%2BXAAqpH84bI2MdStpy1IP3AyhPwzlCsyRFz1vFvmZ0f6LTFfSUSRydp8OWny3DpJs6UETLe3W3xqRYkUEK4t6sWf2Z%2B%2BCK%2BYW04Egyu5XJS%2BwD5qFajEU4oYBgoco%2BYWvZ7TcNdqnmT%2BZiRD3gJvRiliEppqUuJW6gumDGpchQ2bsraV%2FFYerr2xqywF7MKtPQId3aPSdB0%2BUqNMrvnJr%2BrSKpMU3QT%2FUt5C3W5A%2Bkl2iZcHEHhVTsASUiodbB1t9CRbj7Z%2BeeYkY8jZDqyt6kg7i%2Fkz42ziJSzU7dBfJN8gSwMJ2O87ft%2FSuxFuKa6Mypo2OC0ljzziOy%2B3QiCNApI6yN7TXyjKp%2FZXnh8c4osIaIkg8YJ7Mg51kwXgO8KI7gnt4qKcIuvnxxBQuanC1x8zmfM144LS5yyUXcyqaA6TkqE%2BWLgpr9I3hvSISn6dhbp2ITPU1RbsOIcNYlu4bzfAo6uRG2iWKTd32ZdaU0g%2BHNwTFYoiKuZzSdqLSRRV5NORrigSM8d%2FOcxXQbf3NzZjP5skffFpZWAsh8HqWQmHXmcXPfT34WLsSrOthoz3VKSoVrOAh0%2F1KiFlDnxguz8y9wPfP8CT1GQQE6pMImUgsAGOqUBqzF96ukVOTQTdOaoOUogRfMBY7NrDWdBI8HjpWfcCE4ZhPyhARyUDpp4EyIlkd7VnDljf0kiDNMXnQSN91zkIdPLIuihtjU3dPCGqqWMdaDv%2BoROdM55FaLYs5nx%2B2f5zSleHqv2hfvI6JC%2F1pDAqJl3M3mHBfCaCnQX8sd9poIgA2pyhUc74WB7eUR5McW%2BXigJ33g7vcZyaPVSXu3C9t5nH%2BVT&X-Amz-Signature=e9a985deec66031fc868aeacd956e52dc87669850053b82d620224b7789c543d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SQIWZPI%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T050913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0%2B%2Fh%2FZXI3cCmsEM8rxroUiNeQBr7%2FPZF%2Bxfpb9Mn7%2BAIgAe3xw8RDqgAPL%2FrprN9Vp%2F9TbUzk4HCEtJi56WWpNbQq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDB5z592BH061R9EOdCrcAw1P%2FAgoAxw%2B16DiuoKGZ%2BXAAqpH84bI2MdStpy1IP3AyhPwzlCsyRFz1vFvmZ0f6LTFfSUSRydp8OWny3DpJs6UETLe3W3xqRYkUEK4t6sWf2Z%2B%2BCK%2BYW04Egyu5XJS%2BwD5qFajEU4oYBgoco%2BYWvZ7TcNdqnmT%2BZiRD3gJvRiliEppqUuJW6gumDGpchQ2bsraV%2FFYerr2xqywF7MKtPQId3aPSdB0%2BUqNMrvnJr%2BrSKpMU3QT%2FUt5C3W5A%2Bkl2iZcHEHhVTsASUiodbB1t9CRbj7Z%2BeeYkY8jZDqyt6kg7i%2Fkz42ziJSzU7dBfJN8gSwMJ2O87ft%2FSuxFuKa6Mypo2OC0ljzziOy%2B3QiCNApI6yN7TXyjKp%2FZXnh8c4osIaIkg8YJ7Mg51kwXgO8KI7gnt4qKcIuvnxxBQuanC1x8zmfM144LS5yyUXcyqaA6TkqE%2BWLgpr9I3hvSISn6dhbp2ITPU1RbsOIcNYlu4bzfAo6uRG2iWKTd32ZdaU0g%2BHNwTFYoiKuZzSdqLSRRV5NORrigSM8d%2FOcxXQbf3NzZjP5skffFpZWAsh8HqWQmHXmcXPfT34WLsSrOthoz3VKSoVrOAh0%2F1KiFlDnxguz8y9wPfP8CT1GQQE6pMImUgsAGOqUBqzF96ukVOTQTdOaoOUogRfMBY7NrDWdBI8HjpWfcCE4ZhPyhARyUDpp4EyIlkd7VnDljf0kiDNMXnQSN91zkIdPLIuihtjU3dPCGqqWMdaDv%2BoROdM55FaLYs5nx%2B2f5zSleHqv2hfvI6JC%2F1pDAqJl3M3mHBfCaCnQX8sd9poIgA2pyhUc74WB7eUR5McW%2BXigJ33g7vcZyaPVSXu3C9t5nH%2BVT&X-Amz-Signature=8c1596f6ace581650709366b061c4894274efce596e97bdd05d32cb6ae4af40e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SQIWZPI%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T050913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0%2B%2Fh%2FZXI3cCmsEM8rxroUiNeQBr7%2FPZF%2Bxfpb9Mn7%2BAIgAe3xw8RDqgAPL%2FrprN9Vp%2F9TbUzk4HCEtJi56WWpNbQq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDB5z592BH061R9EOdCrcAw1P%2FAgoAxw%2B16DiuoKGZ%2BXAAqpH84bI2MdStpy1IP3AyhPwzlCsyRFz1vFvmZ0f6LTFfSUSRydp8OWny3DpJs6UETLe3W3xqRYkUEK4t6sWf2Z%2B%2BCK%2BYW04Egyu5XJS%2BwD5qFajEU4oYBgoco%2BYWvZ7TcNdqnmT%2BZiRD3gJvRiliEppqUuJW6gumDGpchQ2bsraV%2FFYerr2xqywF7MKtPQId3aPSdB0%2BUqNMrvnJr%2BrSKpMU3QT%2FUt5C3W5A%2Bkl2iZcHEHhVTsASUiodbB1t9CRbj7Z%2BeeYkY8jZDqyt6kg7i%2Fkz42ziJSzU7dBfJN8gSwMJ2O87ft%2FSuxFuKa6Mypo2OC0ljzziOy%2B3QiCNApI6yN7TXyjKp%2FZXnh8c4osIaIkg8YJ7Mg51kwXgO8KI7gnt4qKcIuvnxxBQuanC1x8zmfM144LS5yyUXcyqaA6TkqE%2BWLgpr9I3hvSISn6dhbp2ITPU1RbsOIcNYlu4bzfAo6uRG2iWKTd32ZdaU0g%2BHNwTFYoiKuZzSdqLSRRV5NORrigSM8d%2FOcxXQbf3NzZjP5skffFpZWAsh8HqWQmHXmcXPfT34WLsSrOthoz3VKSoVrOAh0%2F1KiFlDnxguz8y9wPfP8CT1GQQE6pMImUgsAGOqUBqzF96ukVOTQTdOaoOUogRfMBY7NrDWdBI8HjpWfcCE4ZhPyhARyUDpp4EyIlkd7VnDljf0kiDNMXnQSN91zkIdPLIuihtjU3dPCGqqWMdaDv%2BoROdM55FaLYs5nx%2B2f5zSleHqv2hfvI6JC%2F1pDAqJl3M3mHBfCaCnQX8sd9poIgA2pyhUc74WB7eUR5McW%2BXigJ33g7vcZyaPVSXu3C9t5nH%2BVT&X-Amz-Signature=f11f8bd59de38d33319c7933a5d5939e9d5614b7a48cfa9661b24190e875f97e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
