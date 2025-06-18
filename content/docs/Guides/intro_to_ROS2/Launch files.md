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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C7Y5MMI%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBVgYPrCEXcq%2FkaBrPT4%2FzxijgCzDIERRAYVKU3XBjJqAiA3XJ554XwnRAtYJRkTDtSdTSQMOrQmYPMRQ0%2Bc%2BS6TJiqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM7PXtC3ABko3QKXTKtwDdl0j6nxy3A3EkJhTAklDf25qZJCNcuWKXfK20xGVsScsXGBBqEDv1MFPPoNbCDCxoLPFvvwMnNMOrbz8UP3FAqsWObf8ke1S6csYpcYqunPzGOFRcOT0ACmZVN%2FOTUYqEJw0USIP9HncP9mtjpptu4R4Szx3LFS9F84peKC9bH7ru3vcMt541hCJHr55Oypx6nfDlauwnyAUZRiWKEgEqLvNoDbBK1h56yI2K2ZL802nswb37GlVuklCUlJuXV9gY7cNEwPHQKbU2XPQSy%2Fhu0GGn0xfjUf%2FizyzOP14UnYRuxu%2BV7AqB4OwGwtIZlHBezTlaK%2F6YxEcwMCiY5zDZ7NAc1%2BJhN6vkWoTM2UtY2yx%2BfSSQ6po5oJVi32HvgbKprd6auosW2X7%2BrZVTHKON%2Fy4ggq8lq5JZ5rXIStNekqTmQk6TPY59hHI0pThClD4buhXm8NietfZdIj5DAHJXrFjrw6hdFp8r%2BF1x5FVSywSAusdb6gpOAM1z%2F01%2BNyS2h%2FxNx4EXS%2FIq%2BTKh%2BLCduEg7CCd%2B86GN6G%2FwJuhmtUFbkd7O3gC3nZff0MZ4DQL%2BYsDYFpu%2F2pKQVAHfZdVcsAAyzdxWOGZJ2FgyubcGpI%2BsP3DMEFrmL1rbGEw%2B%2FvLwgY6pgF5Fmj5NACEifld3WAQ9uJjUgD6RotuSBsRyhkgWDaZ5JhF5E3NbDOUFwj2ihtVLgbO7minUzf3MVSCLBugJrMeoNoA44JuCik9AhkrM75%2BS%2FcvhpdNvlDxujqPo2i6auYhKfmzOwzVUMGJvoZS91U52PiWJ1IlavhSHwDG5oyUT4mvYLA9M298%2FjAdsbeLvhJTbUlMfK1WtQ0itHjZzwLIDSpDcjP6&X-Amz-Signature=ef1972b3925e8d6e56796d994beb85018b1f0506b366a466579b5b529110f883&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C7Y5MMI%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBVgYPrCEXcq%2FkaBrPT4%2FzxijgCzDIERRAYVKU3XBjJqAiA3XJ554XwnRAtYJRkTDtSdTSQMOrQmYPMRQ0%2Bc%2BS6TJiqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM7PXtC3ABko3QKXTKtwDdl0j6nxy3A3EkJhTAklDf25qZJCNcuWKXfK20xGVsScsXGBBqEDv1MFPPoNbCDCxoLPFvvwMnNMOrbz8UP3FAqsWObf8ke1S6csYpcYqunPzGOFRcOT0ACmZVN%2FOTUYqEJw0USIP9HncP9mtjpptu4R4Szx3LFS9F84peKC9bH7ru3vcMt541hCJHr55Oypx6nfDlauwnyAUZRiWKEgEqLvNoDbBK1h56yI2K2ZL802nswb37GlVuklCUlJuXV9gY7cNEwPHQKbU2XPQSy%2Fhu0GGn0xfjUf%2FizyzOP14UnYRuxu%2BV7AqB4OwGwtIZlHBezTlaK%2F6YxEcwMCiY5zDZ7NAc1%2BJhN6vkWoTM2UtY2yx%2BfSSQ6po5oJVi32HvgbKprd6auosW2X7%2BrZVTHKON%2Fy4ggq8lq5JZ5rXIStNekqTmQk6TPY59hHI0pThClD4buhXm8NietfZdIj5DAHJXrFjrw6hdFp8r%2BF1x5FVSywSAusdb6gpOAM1z%2F01%2BNyS2h%2FxNx4EXS%2FIq%2BTKh%2BLCduEg7CCd%2B86GN6G%2FwJuhmtUFbkd7O3gC3nZff0MZ4DQL%2BYsDYFpu%2F2pKQVAHfZdVcsAAyzdxWOGZJ2FgyubcGpI%2BsP3DMEFrmL1rbGEw%2B%2FvLwgY6pgF5Fmj5NACEifld3WAQ9uJjUgD6RotuSBsRyhkgWDaZ5JhF5E3NbDOUFwj2ihtVLgbO7minUzf3MVSCLBugJrMeoNoA44JuCik9AhkrM75%2BS%2FcvhpdNvlDxujqPo2i6auYhKfmzOwzVUMGJvoZS91U52PiWJ1IlavhSHwDG5oyUT4mvYLA9M298%2FjAdsbeLvhJTbUlMfK1WtQ0itHjZzwLIDSpDcjP6&X-Amz-Signature=a7c99f185af9700f755ccabbb2af676dbbb1275317417e9f08299f9a7b562b97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C7Y5MMI%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBVgYPrCEXcq%2FkaBrPT4%2FzxijgCzDIERRAYVKU3XBjJqAiA3XJ554XwnRAtYJRkTDtSdTSQMOrQmYPMRQ0%2Bc%2BS6TJiqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM7PXtC3ABko3QKXTKtwDdl0j6nxy3A3EkJhTAklDf25qZJCNcuWKXfK20xGVsScsXGBBqEDv1MFPPoNbCDCxoLPFvvwMnNMOrbz8UP3FAqsWObf8ke1S6csYpcYqunPzGOFRcOT0ACmZVN%2FOTUYqEJw0USIP9HncP9mtjpptu4R4Szx3LFS9F84peKC9bH7ru3vcMt541hCJHr55Oypx6nfDlauwnyAUZRiWKEgEqLvNoDbBK1h56yI2K2ZL802nswb37GlVuklCUlJuXV9gY7cNEwPHQKbU2XPQSy%2Fhu0GGn0xfjUf%2FizyzOP14UnYRuxu%2BV7AqB4OwGwtIZlHBezTlaK%2F6YxEcwMCiY5zDZ7NAc1%2BJhN6vkWoTM2UtY2yx%2BfSSQ6po5oJVi32HvgbKprd6auosW2X7%2BrZVTHKON%2Fy4ggq8lq5JZ5rXIStNekqTmQk6TPY59hHI0pThClD4buhXm8NietfZdIj5DAHJXrFjrw6hdFp8r%2BF1x5FVSywSAusdb6gpOAM1z%2F01%2BNyS2h%2FxNx4EXS%2FIq%2BTKh%2BLCduEg7CCd%2B86GN6G%2FwJuhmtUFbkd7O3gC3nZff0MZ4DQL%2BYsDYFpu%2F2pKQVAHfZdVcsAAyzdxWOGZJ2FgyubcGpI%2BsP3DMEFrmL1rbGEw%2B%2FvLwgY6pgF5Fmj5NACEifld3WAQ9uJjUgD6RotuSBsRyhkgWDaZ5JhF5E3NbDOUFwj2ihtVLgbO7minUzf3MVSCLBugJrMeoNoA44JuCik9AhkrM75%2BS%2FcvhpdNvlDxujqPo2i6auYhKfmzOwzVUMGJvoZS91U52PiWJ1IlavhSHwDG5oyUT4mvYLA9M298%2FjAdsbeLvhJTbUlMfK1WtQ0itHjZzwLIDSpDcjP6&X-Amz-Signature=cd0df4072bd34227816ba0e73af7badd524c2530f97c055ebb9ca20ba177e0a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
