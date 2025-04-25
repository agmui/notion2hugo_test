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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JABNYVE%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BYuuMjWtW3xnOop7tRc3a%2BmQ2LWJxLRPD4b7ZL8zFAQIgUcPfWlvRfsrT%2F4TAxt1bly3W5bl%2BbX767RvbNPKftZEq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDalY1xYD5%2Fq9muuiyrcA8miGW41qCjoH0LE0E7TnJ%2B3ijHjjvECBwODtQiBZbymlh83IiNjMluD5VpWfI8vQQAV64rsEHH4Q0pSFeuAcc4wzs87qlLn5%2BnX4JzP3O0KdpgLGhn1XNyhllrVQOF12Zkl%2FhY8tjlEQ%2BPFFFYTAgtKfSrvyLHTVXpjDoQ3rsZF0yVIT0ODiJXrs3buT8kkX8j5qttwQ2oxvwcHeEuPyLINP699%2BUFgaGdzFZHHSRcXh1iNqRyhViV0VUXtiZzeAzu34RumvfQEA72uCyIF3PeYOS9c1QjcOoSMbaQ54ClvwcMAQ96ox%2FYeP9owPJzKimxgczof5%2FF3I5Gh26QXlOLOoinRd5nWqWuUh18%2FAvUP9B6ch62wqfWBuDhzHLtVhh9xcgI6S6LiTzEz9Ih9vCzKetGmyP32Pg%2BV%2FAntbkLkRzpca4OpWfYhJPxGlLjANPFTCiLEK1VdC6mmoU6GpGBunUQP8HLD%2BjytI9mWsmAaT8RIK8dvBpS5mhnq1rCa1hpJBUud2uYKXT6yTbAFrXQXu2UWd0TICR74jP7kJ9ruBrjvrA2uau9cy9pgULoQoodydrzp0tHKr8qTqkh9UmfSXjQzawBZmfMdPl%2FwlRYekiLR04z2KGtyiTerMPjJrMAGOqUBcMhQKvc2P0o43qx2BssQmbD1ED%2FbQJXN%2FKs1bgqG1A5xBnRx%2FC8zx7ZWYHWfj0kfrvVkZb3ePaGVe%2FBR41ZY%2F5Zv0DM60cjRNYR0tOgpQgY4z3Hy4QcWyu0VsWlqod6qF4hLzP9ncwcFpYIVpWQXeEckA1wmMM3gXpec5onuCpLNGP8A%2F7MX%2F9pHUft6VgRqSyZtnTAMVNI%2B28GCce3EqhzHFiNP&X-Amz-Signature=8098adb06b98f6b4c6fef71c60172220ea8a2dbc47635621ffde77000f10f794&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JABNYVE%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BYuuMjWtW3xnOop7tRc3a%2BmQ2LWJxLRPD4b7ZL8zFAQIgUcPfWlvRfsrT%2F4TAxt1bly3W5bl%2BbX767RvbNPKftZEq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDalY1xYD5%2Fq9muuiyrcA8miGW41qCjoH0LE0E7TnJ%2B3ijHjjvECBwODtQiBZbymlh83IiNjMluD5VpWfI8vQQAV64rsEHH4Q0pSFeuAcc4wzs87qlLn5%2BnX4JzP3O0KdpgLGhn1XNyhllrVQOF12Zkl%2FhY8tjlEQ%2BPFFFYTAgtKfSrvyLHTVXpjDoQ3rsZF0yVIT0ODiJXrs3buT8kkX8j5qttwQ2oxvwcHeEuPyLINP699%2BUFgaGdzFZHHSRcXh1iNqRyhViV0VUXtiZzeAzu34RumvfQEA72uCyIF3PeYOS9c1QjcOoSMbaQ54ClvwcMAQ96ox%2FYeP9owPJzKimxgczof5%2FF3I5Gh26QXlOLOoinRd5nWqWuUh18%2FAvUP9B6ch62wqfWBuDhzHLtVhh9xcgI6S6LiTzEz9Ih9vCzKetGmyP32Pg%2BV%2FAntbkLkRzpca4OpWfYhJPxGlLjANPFTCiLEK1VdC6mmoU6GpGBunUQP8HLD%2BjytI9mWsmAaT8RIK8dvBpS5mhnq1rCa1hpJBUud2uYKXT6yTbAFrXQXu2UWd0TICR74jP7kJ9ruBrjvrA2uau9cy9pgULoQoodydrzp0tHKr8qTqkh9UmfSXjQzawBZmfMdPl%2FwlRYekiLR04z2KGtyiTerMPjJrMAGOqUBcMhQKvc2P0o43qx2BssQmbD1ED%2FbQJXN%2FKs1bgqG1A5xBnRx%2FC8zx7ZWYHWfj0kfrvVkZb3ePaGVe%2FBR41ZY%2F5Zv0DM60cjRNYR0tOgpQgY4z3Hy4QcWyu0VsWlqod6qF4hLzP9ncwcFpYIVpWQXeEckA1wmMM3gXpec5onuCpLNGP8A%2F7MX%2F9pHUft6VgRqSyZtnTAMVNI%2B28GCce3EqhzHFiNP&X-Amz-Signature=7a2670b6004aa273c6bbee0293deabaacf0529a303998f81802a2fcd9b8ea857&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JABNYVE%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BYuuMjWtW3xnOop7tRc3a%2BmQ2LWJxLRPD4b7ZL8zFAQIgUcPfWlvRfsrT%2F4TAxt1bly3W5bl%2BbX767RvbNPKftZEq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDalY1xYD5%2Fq9muuiyrcA8miGW41qCjoH0LE0E7TnJ%2B3ijHjjvECBwODtQiBZbymlh83IiNjMluD5VpWfI8vQQAV64rsEHH4Q0pSFeuAcc4wzs87qlLn5%2BnX4JzP3O0KdpgLGhn1XNyhllrVQOF12Zkl%2FhY8tjlEQ%2BPFFFYTAgtKfSrvyLHTVXpjDoQ3rsZF0yVIT0ODiJXrs3buT8kkX8j5qttwQ2oxvwcHeEuPyLINP699%2BUFgaGdzFZHHSRcXh1iNqRyhViV0VUXtiZzeAzu34RumvfQEA72uCyIF3PeYOS9c1QjcOoSMbaQ54ClvwcMAQ96ox%2FYeP9owPJzKimxgczof5%2FF3I5Gh26QXlOLOoinRd5nWqWuUh18%2FAvUP9B6ch62wqfWBuDhzHLtVhh9xcgI6S6LiTzEz9Ih9vCzKetGmyP32Pg%2BV%2FAntbkLkRzpca4OpWfYhJPxGlLjANPFTCiLEK1VdC6mmoU6GpGBunUQP8HLD%2BjytI9mWsmAaT8RIK8dvBpS5mhnq1rCa1hpJBUud2uYKXT6yTbAFrXQXu2UWd0TICR74jP7kJ9ruBrjvrA2uau9cy9pgULoQoodydrzp0tHKr8qTqkh9UmfSXjQzawBZmfMdPl%2FwlRYekiLR04z2KGtyiTerMPjJrMAGOqUBcMhQKvc2P0o43qx2BssQmbD1ED%2FbQJXN%2FKs1bgqG1A5xBnRx%2FC8zx7ZWYHWfj0kfrvVkZb3ePaGVe%2FBR41ZY%2F5Zv0DM60cjRNYR0tOgpQgY4z3Hy4QcWyu0VsWlqod6qF4hLzP9ncwcFpYIVpWQXeEckA1wmMM3gXpec5onuCpLNGP8A%2F7MX%2F9pHUft6VgRqSyZtnTAMVNI%2B28GCce3EqhzHFiNP&X-Amz-Signature=4577f50afadea60970cb94933e1685016a16b80f0b60522cdb03d23e41415a5a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
