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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYIERZLR%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIFT3mx6SrwBYHOpoeIukCNgq51aRIv%2BZQlBtl9UxOmmdAiEA20atBU0FK4zXVHrG%2BRPv2NDZflz182hALQxG7ToOxwoq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJ4q2JsGNhJMnsLG9CrcA5E4szxjG3H3KxjbH5tVyDSdRQNVxqadw%2B13UsdYdhjKPl7ZvOOUdf0l4JUCdtK9h%2FWMZCse4k3aCbgtSQOHEqzOcl1CtW5pDjBbbqkKTXDgjCp7rBoIQ58rIK%2FtbrY97Qu3kkVd6EtZZ0h4I6qfcWdMa5LMamaMpJOEjd%2FsQUtxCeWlO29UlGw95F1AnD%2FPzLnI0RLUab0ZtemxQkg9KhvwcOKU77r4kAbYGtBicZmVDTX%2FSEYHYzvukGfMnq%2FlhNkU%2FgyibzWDZKgRdhjQwK2Emr28toNd8lxXsucqDG10GuHz55dVBsL6RVnDA4u1QSBiOsaaKEm54hVCaDdCcr8UHq7ZPW4TUq1ZZ3JiCelb7Rqjcwc2Xn75OVcpnAhfv%2BEEbozxb1t2fKDjcCiEB%2Bv841B2QW34YanhqLU27CG9Ls63s5FuZgvww1fknf%2BI%2BLs0VG9%2BdkhTlFkwqXksFlqekMLj1mCj2V0LiRrHpwZPcFB5cG7YeFGBCoErP9uinYNtHL%2FKJhLsOYQtTcgni4KsdBiQTYW2KlGMTIuGcubyxxHrZe%2Bj3%2FI%2FcGHIdClfUpSZd3IkDviegtvRbQ6PVl%2FCbVz%2FKdZEM2cc3UzS6UBFsy4H8Y0aXdUeTxJrMPXMgb4GOqUBG9Yrjh7J%2Fmv9ry8LEu9kB1cxccTAq%2BclJP0MuUnfg9ARSc4kkXXrnuEZeaTpyVbsYw0S3ZeHol821s5nK2Y5AtaPHqAAMDIJsy18an2mzVJUtR93OwJewSDeA7Lp2eCT%2BiVsdcHaP2PL4MZuUU65WFXLZcI5NwgI5fU3LbxYyoCeu5SUhqvJHUuvUK8WLz%2FgLUIFkIiOjb7ypzra1e%2BfFtuT%2Bfkz&X-Amz-Signature=9b6ae8d3febbb819c3524c6c522d69cb825d3934e8db918f1708176fe2e929e8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYIERZLR%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIFT3mx6SrwBYHOpoeIukCNgq51aRIv%2BZQlBtl9UxOmmdAiEA20atBU0FK4zXVHrG%2BRPv2NDZflz182hALQxG7ToOxwoq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJ4q2JsGNhJMnsLG9CrcA5E4szxjG3H3KxjbH5tVyDSdRQNVxqadw%2B13UsdYdhjKPl7ZvOOUdf0l4JUCdtK9h%2FWMZCse4k3aCbgtSQOHEqzOcl1CtW5pDjBbbqkKTXDgjCp7rBoIQ58rIK%2FtbrY97Qu3kkVd6EtZZ0h4I6qfcWdMa5LMamaMpJOEjd%2FsQUtxCeWlO29UlGw95F1AnD%2FPzLnI0RLUab0ZtemxQkg9KhvwcOKU77r4kAbYGtBicZmVDTX%2FSEYHYzvukGfMnq%2FlhNkU%2FgyibzWDZKgRdhjQwK2Emr28toNd8lxXsucqDG10GuHz55dVBsL6RVnDA4u1QSBiOsaaKEm54hVCaDdCcr8UHq7ZPW4TUq1ZZ3JiCelb7Rqjcwc2Xn75OVcpnAhfv%2BEEbozxb1t2fKDjcCiEB%2Bv841B2QW34YanhqLU27CG9Ls63s5FuZgvww1fknf%2BI%2BLs0VG9%2BdkhTlFkwqXksFlqekMLj1mCj2V0LiRrHpwZPcFB5cG7YeFGBCoErP9uinYNtHL%2FKJhLsOYQtTcgni4KsdBiQTYW2KlGMTIuGcubyxxHrZe%2Bj3%2FI%2FcGHIdClfUpSZd3IkDviegtvRbQ6PVl%2FCbVz%2FKdZEM2cc3UzS6UBFsy4H8Y0aXdUeTxJrMPXMgb4GOqUBG9Yrjh7J%2Fmv9ry8LEu9kB1cxccTAq%2BclJP0MuUnfg9ARSc4kkXXrnuEZeaTpyVbsYw0S3ZeHol821s5nK2Y5AtaPHqAAMDIJsy18an2mzVJUtR93OwJewSDeA7Lp2eCT%2BiVsdcHaP2PL4MZuUU65WFXLZcI5NwgI5fU3LbxYyoCeu5SUhqvJHUuvUK8WLz%2FgLUIFkIiOjb7ypzra1e%2BfFtuT%2Bfkz&X-Amz-Signature=6fa2f4a772d5c933ec97db81e817386cf65c4600b23c8622c7898a247c704003&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYIERZLR%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIFT3mx6SrwBYHOpoeIukCNgq51aRIv%2BZQlBtl9UxOmmdAiEA20atBU0FK4zXVHrG%2BRPv2NDZflz182hALQxG7ToOxwoq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJ4q2JsGNhJMnsLG9CrcA5E4szxjG3H3KxjbH5tVyDSdRQNVxqadw%2B13UsdYdhjKPl7ZvOOUdf0l4JUCdtK9h%2FWMZCse4k3aCbgtSQOHEqzOcl1CtW5pDjBbbqkKTXDgjCp7rBoIQ58rIK%2FtbrY97Qu3kkVd6EtZZ0h4I6qfcWdMa5LMamaMpJOEjd%2FsQUtxCeWlO29UlGw95F1AnD%2FPzLnI0RLUab0ZtemxQkg9KhvwcOKU77r4kAbYGtBicZmVDTX%2FSEYHYzvukGfMnq%2FlhNkU%2FgyibzWDZKgRdhjQwK2Emr28toNd8lxXsucqDG10GuHz55dVBsL6RVnDA4u1QSBiOsaaKEm54hVCaDdCcr8UHq7ZPW4TUq1ZZ3JiCelb7Rqjcwc2Xn75OVcpnAhfv%2BEEbozxb1t2fKDjcCiEB%2Bv841B2QW34YanhqLU27CG9Ls63s5FuZgvww1fknf%2BI%2BLs0VG9%2BdkhTlFkwqXksFlqekMLj1mCj2V0LiRrHpwZPcFB5cG7YeFGBCoErP9uinYNtHL%2FKJhLsOYQtTcgni4KsdBiQTYW2KlGMTIuGcubyxxHrZe%2Bj3%2FI%2FcGHIdClfUpSZd3IkDviegtvRbQ6PVl%2FCbVz%2FKdZEM2cc3UzS6UBFsy4H8Y0aXdUeTxJrMPXMgb4GOqUBG9Yrjh7J%2Fmv9ry8LEu9kB1cxccTAq%2BclJP0MuUnfg9ARSc4kkXXrnuEZeaTpyVbsYw0S3ZeHol821s5nK2Y5AtaPHqAAMDIJsy18an2mzVJUtR93OwJewSDeA7Lp2eCT%2BiVsdcHaP2PL4MZuUU65WFXLZcI5NwgI5fU3LbxYyoCeu5SUhqvJHUuvUK8WLz%2FgLUIFkIiOjb7ypzra1e%2BfFtuT%2Bfkz&X-Amz-Signature=376c177405381ce4d924ea581cee628d3530f27f6e57131b690b675099f8b6f2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
