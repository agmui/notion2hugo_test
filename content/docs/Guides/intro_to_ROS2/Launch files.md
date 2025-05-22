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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644N7WF37%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIBMY%2Fqkg1ZLwPasNrYECpYI2GGi3PDS9%2FAcCcQ5Tb0JhAiEA0CUpDiYpM1CRa2iQ2J%2FOeU7IGlSQ7tt%2BG8lLj%2BLfLwcqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOyt3Vo2TLas%2FpuOSrcA%2B%2FzHOPfCOwXoIvxwJzWTMrOVrLwjKmjELh9cJciUFY9Mrgz%2F3fhqmDfh%2F%2BDCwT9GcmRlT9NfMTJUAlttKu1JWjHfgPpjYAPR4YjClDPovzEQM7kMfD0oq9h0pGelVvYXbB78rjnjIB8Fqhd9sWNoJKKGrT6f%2FNb5Mjjx03F30ERNpdxhJh3GkyDkB8M2G%2FNw2yP2W525gIezltd%2FZVlDQ8ZDxImdvpXeIC7Zr1QDaTb1g3zphjCTft66VbT3lQ%2BmsVIq5NiVvmUFFOPzf3dbWAFOdHTm6DaAW%2Fkv59FXGYUofIKWbBRggz3SeKvgy0NQYblia7tOC1tiS65PrhyZm08sQd7QZlaW0EXTwetfEjyhRY99f9GHlCaBMrRXc5Vi7diU%2BvPMGw%2B3Fc9yrNK3J4ZVrNQRfbfKeTxHQbxT4U%2Fm7g0ZkbrjP5w5bNL3kn%2BF4Atxy05qV3sDGa1%2B0IWrRXo0aGQjXqIwlckEbNtFdaDJ%2FytYqM2YCRNTyunFNUOO1cL3zOPnwJAS4MhgHZA3WaWEZ9B0%2Fen7oGIthAqOlp0Hhd2IMs8A8ADux7W6wXbkTkSCrygB6LketVP7fxlgEz6LOgK6fOLgHN4CK2hsDKUpaFleXhqL2UvIxP6MKCHvsEGOqUB0LmCjMvrHwclhafsRi3MlMuPZB6j0eakQN3Ej6YBSoDfhATRVc5uDG87CtDT%2F61kL50TNP39v7NyBOa%2B4fTmcZ%2BTazbXXHswfEG2Tbp8dUrMEdM6NYXCd%2BSckKz0TUCMKEAE0AYbMeCbh%2FMygqvq77ayHQSQ9WPgk%2BcWywZjFPn45unmb6Ui%2FX%2BvBBKuneDTAbgdBxWpd73MoIpcJ%2FufTORXCC8D&X-Amz-Signature=7b7068b779a39a41baf471a27529e7031f84a1dacc9e2e62e9aeca0c9551b558&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644N7WF37%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIBMY%2Fqkg1ZLwPasNrYECpYI2GGi3PDS9%2FAcCcQ5Tb0JhAiEA0CUpDiYpM1CRa2iQ2J%2FOeU7IGlSQ7tt%2BG8lLj%2BLfLwcqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOyt3Vo2TLas%2FpuOSrcA%2B%2FzHOPfCOwXoIvxwJzWTMrOVrLwjKmjELh9cJciUFY9Mrgz%2F3fhqmDfh%2F%2BDCwT9GcmRlT9NfMTJUAlttKu1JWjHfgPpjYAPR4YjClDPovzEQM7kMfD0oq9h0pGelVvYXbB78rjnjIB8Fqhd9sWNoJKKGrT6f%2FNb5Mjjx03F30ERNpdxhJh3GkyDkB8M2G%2FNw2yP2W525gIezltd%2FZVlDQ8ZDxImdvpXeIC7Zr1QDaTb1g3zphjCTft66VbT3lQ%2BmsVIq5NiVvmUFFOPzf3dbWAFOdHTm6DaAW%2Fkv59FXGYUofIKWbBRggz3SeKvgy0NQYblia7tOC1tiS65PrhyZm08sQd7QZlaW0EXTwetfEjyhRY99f9GHlCaBMrRXc5Vi7diU%2BvPMGw%2B3Fc9yrNK3J4ZVrNQRfbfKeTxHQbxT4U%2Fm7g0ZkbrjP5w5bNL3kn%2BF4Atxy05qV3sDGa1%2B0IWrRXo0aGQjXqIwlckEbNtFdaDJ%2FytYqM2YCRNTyunFNUOO1cL3zOPnwJAS4MhgHZA3WaWEZ9B0%2Fen7oGIthAqOlp0Hhd2IMs8A8ADux7W6wXbkTkSCrygB6LketVP7fxlgEz6LOgK6fOLgHN4CK2hsDKUpaFleXhqL2UvIxP6MKCHvsEGOqUB0LmCjMvrHwclhafsRi3MlMuPZB6j0eakQN3Ej6YBSoDfhATRVc5uDG87CtDT%2F61kL50TNP39v7NyBOa%2B4fTmcZ%2BTazbXXHswfEG2Tbp8dUrMEdM6NYXCd%2BSckKz0TUCMKEAE0AYbMeCbh%2FMygqvq77ayHQSQ9WPgk%2BcWywZjFPn45unmb6Ui%2FX%2BvBBKuneDTAbgdBxWpd73MoIpcJ%2FufTORXCC8D&X-Amz-Signature=eb9fd8afdcf4290d9f3e5f23350972d93b74f64b60e78f553f8017ff06571659&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644N7WF37%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIBMY%2Fqkg1ZLwPasNrYECpYI2GGi3PDS9%2FAcCcQ5Tb0JhAiEA0CUpDiYpM1CRa2iQ2J%2FOeU7IGlSQ7tt%2BG8lLj%2BLfLwcqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOyt3Vo2TLas%2FpuOSrcA%2B%2FzHOPfCOwXoIvxwJzWTMrOVrLwjKmjELh9cJciUFY9Mrgz%2F3fhqmDfh%2F%2BDCwT9GcmRlT9NfMTJUAlttKu1JWjHfgPpjYAPR4YjClDPovzEQM7kMfD0oq9h0pGelVvYXbB78rjnjIB8Fqhd9sWNoJKKGrT6f%2FNb5Mjjx03F30ERNpdxhJh3GkyDkB8M2G%2FNw2yP2W525gIezltd%2FZVlDQ8ZDxImdvpXeIC7Zr1QDaTb1g3zphjCTft66VbT3lQ%2BmsVIq5NiVvmUFFOPzf3dbWAFOdHTm6DaAW%2Fkv59FXGYUofIKWbBRggz3SeKvgy0NQYblia7tOC1tiS65PrhyZm08sQd7QZlaW0EXTwetfEjyhRY99f9GHlCaBMrRXc5Vi7diU%2BvPMGw%2B3Fc9yrNK3J4ZVrNQRfbfKeTxHQbxT4U%2Fm7g0ZkbrjP5w5bNL3kn%2BF4Atxy05qV3sDGa1%2B0IWrRXo0aGQjXqIwlckEbNtFdaDJ%2FytYqM2YCRNTyunFNUOO1cL3zOPnwJAS4MhgHZA3WaWEZ9B0%2Fen7oGIthAqOlp0Hhd2IMs8A8ADux7W6wXbkTkSCrygB6LketVP7fxlgEz6LOgK6fOLgHN4CK2hsDKUpaFleXhqL2UvIxP6MKCHvsEGOqUB0LmCjMvrHwclhafsRi3MlMuPZB6j0eakQN3Ej6YBSoDfhATRVc5uDG87CtDT%2F61kL50TNP39v7NyBOa%2B4fTmcZ%2BTazbXXHswfEG2Tbp8dUrMEdM6NYXCd%2BSckKz0TUCMKEAE0AYbMeCbh%2FMygqvq77ayHQSQ9WPgk%2BcWywZjFPn45unmb6Ui%2FX%2BvBBKuneDTAbgdBxWpd73MoIpcJ%2FufTORXCC8D&X-Amz-Signature=9113ac5462e3747b3ca23099cc7253ee50f1d278b261f6ce867de694549e921b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
