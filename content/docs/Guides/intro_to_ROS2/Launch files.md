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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2A5PSYK%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzfOyZEsssSR%2FdxbIuoiV7m39R4tiFSygP9TRDxrThiAIgR0zFJG1QVyVYQ6JATPjzmfzeEvlFSE2ebtSUbLy%2FSTUq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDPihN3eno9Oe4knvCSrcA5WOjSYn%2BMjJ8Y9a0B3aeGbVxOX%2FvUCeKxGtM9xEFaR%2BzrxmSzawETSVtv8%2Fu0BzSTfnZtlPQf7HBaU1JgdNMvuZk5Fl03ikR6SpCOe%2FAXW4Elhta5hTbsAWldBy%2BFJ5u%2F4%2BAX5WRFVa0%2FVHr6aMpA9VpL8isoc6c4lkicslKTDjUSIjyJIPZ%2FkGGG3Y4ijatFj5VCBemxLbyu3U6VTgI5jx4dcl44W1YIhJInAcn1IU50wX8FiCiEks1fkALAkny4pbYcmVBFYBr5qXB531lzcmgox5%2FAhhM39DaccbkNlWmZaHqJqhZAOghvpR02HJR9FBh1MWH8PgDNuGM7vhRutBP5nMpKmiI86%2FQ8ihLm1phVZL7FYn7FFesaeNxKCeNf1N%2BR0PAR6XSJ7%2FX%2BnN28fRnaymO0TBrpxG2Dm3CR6%2FUl%2BoOeVEFp%2FocbXSkwYu6qShXatF%2BI%2FG8dwe6bmzLZ7AI2S7CM%2FklhEY0xAhyjhWqLhdtlKNPqoaVxZuNsvEwwjPiOIEjHmP4EgUsv0zKKgfwXOXbpFiYcuOqR1nTRl8nZLI7RNNmZk%2BiiZvEq1eBqE65s%2F6%2FXVP35GNDwV6STJj0G56v6gIhcWX2id6BLMsTMT5y3pqCx57oapiMMGZ6cAGOqUBP6QrQE%2Bg6TWD7f3q0Zr0QVxXOeB%2Bijl4Ixt0HtpDkeIINhRuDgc652rSsP3N2rQKXss%2BWq7IIxY%2FLb%2FTCFAxEre9mgQDbKCU%2Be5o9WFtkhVWLXpaok5UvDhDUmbGhv4pyFlLyTIosQ4HjLtA3GX8101eNaTNfcSZkr41O4bPQ67hblP5dbfhz%2FV%2BVn8sOF0dyjEdPCsHogtFp3G47kaQSMjg%2FNWu&X-Amz-Signature=9eb539f37b3716a6bf98ac0e198f059796b9214dbe838a2e0fc5ca827f62aaa7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2A5PSYK%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzfOyZEsssSR%2FdxbIuoiV7m39R4tiFSygP9TRDxrThiAIgR0zFJG1QVyVYQ6JATPjzmfzeEvlFSE2ebtSUbLy%2FSTUq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDPihN3eno9Oe4knvCSrcA5WOjSYn%2BMjJ8Y9a0B3aeGbVxOX%2FvUCeKxGtM9xEFaR%2BzrxmSzawETSVtv8%2Fu0BzSTfnZtlPQf7HBaU1JgdNMvuZk5Fl03ikR6SpCOe%2FAXW4Elhta5hTbsAWldBy%2BFJ5u%2F4%2BAX5WRFVa0%2FVHr6aMpA9VpL8isoc6c4lkicslKTDjUSIjyJIPZ%2FkGGG3Y4ijatFj5VCBemxLbyu3U6VTgI5jx4dcl44W1YIhJInAcn1IU50wX8FiCiEks1fkALAkny4pbYcmVBFYBr5qXB531lzcmgox5%2FAhhM39DaccbkNlWmZaHqJqhZAOghvpR02HJR9FBh1MWH8PgDNuGM7vhRutBP5nMpKmiI86%2FQ8ihLm1phVZL7FYn7FFesaeNxKCeNf1N%2BR0PAR6XSJ7%2FX%2BnN28fRnaymO0TBrpxG2Dm3CR6%2FUl%2BoOeVEFp%2FocbXSkwYu6qShXatF%2BI%2FG8dwe6bmzLZ7AI2S7CM%2FklhEY0xAhyjhWqLhdtlKNPqoaVxZuNsvEwwjPiOIEjHmP4EgUsv0zKKgfwXOXbpFiYcuOqR1nTRl8nZLI7RNNmZk%2BiiZvEq1eBqE65s%2F6%2FXVP35GNDwV6STJj0G56v6gIhcWX2id6BLMsTMT5y3pqCx57oapiMMGZ6cAGOqUBP6QrQE%2Bg6TWD7f3q0Zr0QVxXOeB%2Bijl4Ixt0HtpDkeIINhRuDgc652rSsP3N2rQKXss%2BWq7IIxY%2FLb%2FTCFAxEre9mgQDbKCU%2Be5o9WFtkhVWLXpaok5UvDhDUmbGhv4pyFlLyTIosQ4HjLtA3GX8101eNaTNfcSZkr41O4bPQ67hblP5dbfhz%2FV%2BVn8sOF0dyjEdPCsHogtFp3G47kaQSMjg%2FNWu&X-Amz-Signature=43e1e8310adf384d065f3c6a2ac5274a251358222424409edd215ca74aa378f9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2A5PSYK%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzfOyZEsssSR%2FdxbIuoiV7m39R4tiFSygP9TRDxrThiAIgR0zFJG1QVyVYQ6JATPjzmfzeEvlFSE2ebtSUbLy%2FSTUq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDPihN3eno9Oe4knvCSrcA5WOjSYn%2BMjJ8Y9a0B3aeGbVxOX%2FvUCeKxGtM9xEFaR%2BzrxmSzawETSVtv8%2Fu0BzSTfnZtlPQf7HBaU1JgdNMvuZk5Fl03ikR6SpCOe%2FAXW4Elhta5hTbsAWldBy%2BFJ5u%2F4%2BAX5WRFVa0%2FVHr6aMpA9VpL8isoc6c4lkicslKTDjUSIjyJIPZ%2FkGGG3Y4ijatFj5VCBemxLbyu3U6VTgI5jx4dcl44W1YIhJInAcn1IU50wX8FiCiEks1fkALAkny4pbYcmVBFYBr5qXB531lzcmgox5%2FAhhM39DaccbkNlWmZaHqJqhZAOghvpR02HJR9FBh1MWH8PgDNuGM7vhRutBP5nMpKmiI86%2FQ8ihLm1phVZL7FYn7FFesaeNxKCeNf1N%2BR0PAR6XSJ7%2FX%2BnN28fRnaymO0TBrpxG2Dm3CR6%2FUl%2BoOeVEFp%2FocbXSkwYu6qShXatF%2BI%2FG8dwe6bmzLZ7AI2S7CM%2FklhEY0xAhyjhWqLhdtlKNPqoaVxZuNsvEwwjPiOIEjHmP4EgUsv0zKKgfwXOXbpFiYcuOqR1nTRl8nZLI7RNNmZk%2BiiZvEq1eBqE65s%2F6%2FXVP35GNDwV6STJj0G56v6gIhcWX2id6BLMsTMT5y3pqCx57oapiMMGZ6cAGOqUBP6QrQE%2Bg6TWD7f3q0Zr0QVxXOeB%2Bijl4Ixt0HtpDkeIINhRuDgc652rSsP3N2rQKXss%2BWq7IIxY%2FLb%2FTCFAxEre9mgQDbKCU%2Be5o9WFtkhVWLXpaok5UvDhDUmbGhv4pyFlLyTIosQ4HjLtA3GX8101eNaTNfcSZkr41O4bPQ67hblP5dbfhz%2FV%2BVn8sOF0dyjEdPCsHogtFp3G47kaQSMjg%2FNWu&X-Amz-Signature=f8bb7c48876244561ae8c36af7f435871415335849ebb4aefeee93cc99806794&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
