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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTYZXLQV%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDH8SkHLv3VqA88RpAtgi6EDW5jqamT80k3H2o9WIHlAiEA8AnMbYhdlJP1MvXLwVL3U3b4m%2BBDh3HGwLwuOm3PE0kq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDLXcz2GU0Gd6HeY80yrcA5sTSt9MANDiuaigHbv%2F2tH2xi213bj%2FdK7oSzpMUthTKrJD5R5e3okeT256qJF66hVrSEQwZKSX%2FxS%2FsB1A9i4IurzKE7Mwsz8Z3gBteWiYvoYioMiy8Uq23ikANLxPTEqN8t%2FLaQzcVFeYzKOsR8NN6EaqX27%2Fr33Ygs26tmzU3imtJc6U5oLAIfivtjLd3pMPos%2FAOXZUt2d05cG8qvE0XkS9LoFM89MqyIGuI0lAhogEK%2BMb3SzDvcnueb8wCbFQbCrATTkvtqZ53QDORuVTiLs97VPwjATcZGQMto4jN2rXIwYlgE5cwIRU4sb0lEB3MghNjmblb7AvK7hEX%2FDYllkl3SfW4QDXryHQww2NfkMikZ%2FkN9Us2wAq%2FbOPQsypUH21lED3hRtzLwuALrCO5P30wCe7peqV2nXTkfYZE39vpki1c06%2BCIjVzqtge7pkLZos2WMsBtnRObxQVsDaByxUQTrb0BIw5q1A8DWDNJDKNmhh98n%2BIEJiKiy1BXZWzukIyTJIfY%2B8z%2Bn3zbOD0Dsy%2F%2FXIUIaI6bKzBxVJoTKWiKxvoq%2BcQzsGeefeY5r7iAXkw6UAbzX86dynMgQOgowlLaCLV1kFafqgi91rbA1jbdtrKU8fiB4oMInt2dMGOqUBi5aW%2BoFoejkJ5V00DuNjwHGcrd5tlIn%2BVxTZ5t9%2F4wYYZX78UVqu40aWkfaIx8mhtuQ05zBv%2F%2FTiRsZbh%2FYXWisWhSeR0xkvS2w3wUsqFIYNiNf2fskKgxFyuCdl50e%2B2qdiPBP%2FCDls7epwbTe21CoUq83ieNFCoTfHIqzugyVL%2Flpy6i1crmifePQIhQ9L%2FrYjevrPNjpT3TzMwZZgqBjuj01Q&X-Amz-Signature=79d80862571d69bfdabac67406979455b95fbddeb75e6086849c3a9d01099a71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTYZXLQV%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDH8SkHLv3VqA88RpAtgi6EDW5jqamT80k3H2o9WIHlAiEA8AnMbYhdlJP1MvXLwVL3U3b4m%2BBDh3HGwLwuOm3PE0kq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDLXcz2GU0Gd6HeY80yrcA5sTSt9MANDiuaigHbv%2F2tH2xi213bj%2FdK7oSzpMUthTKrJD5R5e3okeT256qJF66hVrSEQwZKSX%2FxS%2FsB1A9i4IurzKE7Mwsz8Z3gBteWiYvoYioMiy8Uq23ikANLxPTEqN8t%2FLaQzcVFeYzKOsR8NN6EaqX27%2Fr33Ygs26tmzU3imtJc6U5oLAIfivtjLd3pMPos%2FAOXZUt2d05cG8qvE0XkS9LoFM89MqyIGuI0lAhogEK%2BMb3SzDvcnueb8wCbFQbCrATTkvtqZ53QDORuVTiLs97VPwjATcZGQMto4jN2rXIwYlgE5cwIRU4sb0lEB3MghNjmblb7AvK7hEX%2FDYllkl3SfW4QDXryHQww2NfkMikZ%2FkN9Us2wAq%2FbOPQsypUH21lED3hRtzLwuALrCO5P30wCe7peqV2nXTkfYZE39vpki1c06%2BCIjVzqtge7pkLZos2WMsBtnRObxQVsDaByxUQTrb0BIw5q1A8DWDNJDKNmhh98n%2BIEJiKiy1BXZWzukIyTJIfY%2B8z%2Bn3zbOD0Dsy%2F%2FXIUIaI6bKzBxVJoTKWiKxvoq%2BcQzsGeefeY5r7iAXkw6UAbzX86dynMgQOgowlLaCLV1kFafqgi91rbA1jbdtrKU8fiB4oMInt2dMGOqUBi5aW%2BoFoejkJ5V00DuNjwHGcrd5tlIn%2BVxTZ5t9%2F4wYYZX78UVqu40aWkfaIx8mhtuQ05zBv%2F%2FTiRsZbh%2FYXWisWhSeR0xkvS2w3wUsqFIYNiNf2fskKgxFyuCdl50e%2B2qdiPBP%2FCDls7epwbTe21CoUq83ieNFCoTfHIqzugyVL%2Flpy6i1crmifePQIhQ9L%2FrYjevrPNjpT3TzMwZZgqBjuj01Q&X-Amz-Signature=6141458d7e35705aa8c0d5cd36971e4de807e4e9fc7da675e92dc5c5c3a53c33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTYZXLQV%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDH8SkHLv3VqA88RpAtgi6EDW5jqamT80k3H2o9WIHlAiEA8AnMbYhdlJP1MvXLwVL3U3b4m%2BBDh3HGwLwuOm3PE0kq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDLXcz2GU0Gd6HeY80yrcA5sTSt9MANDiuaigHbv%2F2tH2xi213bj%2FdK7oSzpMUthTKrJD5R5e3okeT256qJF66hVrSEQwZKSX%2FxS%2FsB1A9i4IurzKE7Mwsz8Z3gBteWiYvoYioMiy8Uq23ikANLxPTEqN8t%2FLaQzcVFeYzKOsR8NN6EaqX27%2Fr33Ygs26tmzU3imtJc6U5oLAIfivtjLd3pMPos%2FAOXZUt2d05cG8qvE0XkS9LoFM89MqyIGuI0lAhogEK%2BMb3SzDvcnueb8wCbFQbCrATTkvtqZ53QDORuVTiLs97VPwjATcZGQMto4jN2rXIwYlgE5cwIRU4sb0lEB3MghNjmblb7AvK7hEX%2FDYllkl3SfW4QDXryHQww2NfkMikZ%2FkN9Us2wAq%2FbOPQsypUH21lED3hRtzLwuALrCO5P30wCe7peqV2nXTkfYZE39vpki1c06%2BCIjVzqtge7pkLZos2WMsBtnRObxQVsDaByxUQTrb0BIw5q1A8DWDNJDKNmhh98n%2BIEJiKiy1BXZWzukIyTJIfY%2B8z%2Bn3zbOD0Dsy%2F%2FXIUIaI6bKzBxVJoTKWiKxvoq%2BcQzsGeefeY5r7iAXkw6UAbzX86dynMgQOgowlLaCLV1kFafqgi91rbA1jbdtrKU8fiB4oMInt2dMGOqUBi5aW%2BoFoejkJ5V00DuNjwHGcrd5tlIn%2BVxTZ5t9%2F4wYYZX78UVqu40aWkfaIx8mhtuQ05zBv%2F%2FTiRsZbh%2FYXWisWhSeR0xkvS2w3wUsqFIYNiNf2fskKgxFyuCdl50e%2B2qdiPBP%2FCDls7epwbTe21CoUq83ieNFCoTfHIqzugyVL%2Flpy6i1crmifePQIhQ9L%2FrYjevrPNjpT3TzMwZZgqBjuj01Q&X-Amz-Signature=be4444e1f0878836748661f70ddc9e4450070ea8c10ec077c5226658e068d08d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
