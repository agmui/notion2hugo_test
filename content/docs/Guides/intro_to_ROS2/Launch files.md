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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXVLH6U4%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T061122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCICNL2YNacxkEmX4TuPTdAsQN5dccxV%2F46u6LUItEwUHKAh9XcHGWZ1s0ser6H8kHpay0DtdWHHfeH7Uphh6xQZiJKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igysc69qG6x2JslNzn8q3ANJ%2FxyDk3fOOEQEaD5YDlTHjoa4xazsXafbmyns4a5BR%2Fw0M1GMhLsWztVJ0F%2BTdVmn4oHirOExqSiN5N3wjf5JdrhiNOWnPkJcHqAH3rxidK9bG93iqgnSSjfx052ANP3Ogtp5CWSJnsclQAw6V40GQZhLntPR0s1in%2BGjlMgZBFJ%2Bd5W98P7Md%2B7QneLXE2j%2BmDdaSX2VdP4xSN5AXR%2FVPHTzclRViPi8UgFDSsIFei0l%2BDKcMGtxCyTkfz1hieTgeyZCecNukyiuX%2BHaI504MD2iOtAFmtxznpmPGE7kymLAvBeG2Ai3ZUZDShdnAI95ZUXvu5yIV%2BZ2vpYMupnCF%2BTC2oeKV2yzEs6%2FocsJqfJCnTT9XGE4GdaffwFAyXAr0amJPC82SRNBVNp7%2BW9hlaJlQTDQZ%2BSqr4sl6Z8Y7Scb9qcKODe7wjXKb2oQK1p639PQoE1Mc0vy1woAHcTyJELWQBSmt6dRybgeBeqtFgSZuXxO0sepmxo55Vu9UfBMKbn2kC%2F0CdBoKbxFymsjAFDEaus98k2ERvmJRkmcb%2Bs2u7edhVpy5Nj8LL5k%2FWqsyB6lKNvvy9b7G98gjViX%2BuJWQ%2FqM6CVUaXRUYe7kCPw%2BQUtRed4l0VhD5jDji8%2B%2BBjqnAVYLz6H8Oe%2BlRAjwJdxNeCnjJjL3u4%2BVGN1gKFxmP5atERGQgqyPvrKFcK1e2ur9cBoy5oSBYJAR7DAOXO0Ifh48cE5zdGBMzuK8np9OJzoUvaTGCKnqjLVlQUCZjX%2FCGJ6hhnWVVJhuiY4N1JcRqCHyMj2YYd1MisCLx6UT1PgJhP81Dvyg3syw%2Fh1PxLrSYYL1%2B%2BZm68du0OMp%2B8wgYebX2GEKfAPe&X-Amz-Signature=590d5468d43fff54e2d2c2b7c662cb9fdb1aa8b97f64c0497a8af0c4c034e9be&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXVLH6U4%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T061122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCICNL2YNacxkEmX4TuPTdAsQN5dccxV%2F46u6LUItEwUHKAh9XcHGWZ1s0ser6H8kHpay0DtdWHHfeH7Uphh6xQZiJKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igysc69qG6x2JslNzn8q3ANJ%2FxyDk3fOOEQEaD5YDlTHjoa4xazsXafbmyns4a5BR%2Fw0M1GMhLsWztVJ0F%2BTdVmn4oHirOExqSiN5N3wjf5JdrhiNOWnPkJcHqAH3rxidK9bG93iqgnSSjfx052ANP3Ogtp5CWSJnsclQAw6V40GQZhLntPR0s1in%2BGjlMgZBFJ%2Bd5W98P7Md%2B7QneLXE2j%2BmDdaSX2VdP4xSN5AXR%2FVPHTzclRViPi8UgFDSsIFei0l%2BDKcMGtxCyTkfz1hieTgeyZCecNukyiuX%2BHaI504MD2iOtAFmtxznpmPGE7kymLAvBeG2Ai3ZUZDShdnAI95ZUXvu5yIV%2BZ2vpYMupnCF%2BTC2oeKV2yzEs6%2FocsJqfJCnTT9XGE4GdaffwFAyXAr0amJPC82SRNBVNp7%2BW9hlaJlQTDQZ%2BSqr4sl6Z8Y7Scb9qcKODe7wjXKb2oQK1p639PQoE1Mc0vy1woAHcTyJELWQBSmt6dRybgeBeqtFgSZuXxO0sepmxo55Vu9UfBMKbn2kC%2F0CdBoKbxFymsjAFDEaus98k2ERvmJRkmcb%2Bs2u7edhVpy5Nj8LL5k%2FWqsyB6lKNvvy9b7G98gjViX%2BuJWQ%2FqM6CVUaXRUYe7kCPw%2BQUtRed4l0VhD5jDji8%2B%2BBjqnAVYLz6H8Oe%2BlRAjwJdxNeCnjJjL3u4%2BVGN1gKFxmP5atERGQgqyPvrKFcK1e2ur9cBoy5oSBYJAR7DAOXO0Ifh48cE5zdGBMzuK8np9OJzoUvaTGCKnqjLVlQUCZjX%2FCGJ6hhnWVVJhuiY4N1JcRqCHyMj2YYd1MisCLx6UT1PgJhP81Dvyg3syw%2Fh1PxLrSYYL1%2B%2BZm68du0OMp%2B8wgYebX2GEKfAPe&X-Amz-Signature=0e70f7074aab78f296d5cc9d1566bcc32ed679269b933623b9fcf4a97cdd6b5f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXVLH6U4%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T061122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCICNL2YNacxkEmX4TuPTdAsQN5dccxV%2F46u6LUItEwUHKAh9XcHGWZ1s0ser6H8kHpay0DtdWHHfeH7Uphh6xQZiJKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igysc69qG6x2JslNzn8q3ANJ%2FxyDk3fOOEQEaD5YDlTHjoa4xazsXafbmyns4a5BR%2Fw0M1GMhLsWztVJ0F%2BTdVmn4oHirOExqSiN5N3wjf5JdrhiNOWnPkJcHqAH3rxidK9bG93iqgnSSjfx052ANP3Ogtp5CWSJnsclQAw6V40GQZhLntPR0s1in%2BGjlMgZBFJ%2Bd5W98P7Md%2B7QneLXE2j%2BmDdaSX2VdP4xSN5AXR%2FVPHTzclRViPi8UgFDSsIFei0l%2BDKcMGtxCyTkfz1hieTgeyZCecNukyiuX%2BHaI504MD2iOtAFmtxznpmPGE7kymLAvBeG2Ai3ZUZDShdnAI95ZUXvu5yIV%2BZ2vpYMupnCF%2BTC2oeKV2yzEs6%2FocsJqfJCnTT9XGE4GdaffwFAyXAr0amJPC82SRNBVNp7%2BW9hlaJlQTDQZ%2BSqr4sl6Z8Y7Scb9qcKODe7wjXKb2oQK1p639PQoE1Mc0vy1woAHcTyJELWQBSmt6dRybgeBeqtFgSZuXxO0sepmxo55Vu9UfBMKbn2kC%2F0CdBoKbxFymsjAFDEaus98k2ERvmJRkmcb%2Bs2u7edhVpy5Nj8LL5k%2FWqsyB6lKNvvy9b7G98gjViX%2BuJWQ%2FqM6CVUaXRUYe7kCPw%2BQUtRed4l0VhD5jDji8%2B%2BBjqnAVYLz6H8Oe%2BlRAjwJdxNeCnjJjL3u4%2BVGN1gKFxmP5atERGQgqyPvrKFcK1e2ur9cBoy5oSBYJAR7DAOXO0Ifh48cE5zdGBMzuK8np9OJzoUvaTGCKnqjLVlQUCZjX%2FCGJ6hhnWVVJhuiY4N1JcRqCHyMj2YYd1MisCLx6UT1PgJhP81Dvyg3syw%2Fh1PxLrSYYL1%2B%2BZm68du0OMp%2B8wgYebX2GEKfAPe&X-Amz-Signature=3835055e09349f2964968e7ea37af8e81023f5348d61d0e7dae56a0febe0e75c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
