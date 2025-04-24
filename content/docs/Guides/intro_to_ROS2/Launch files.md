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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNYLDCNO%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T121525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIBW8EkR%2FbUiFfK4gh%2F%2FOqs2wHMnT4n2rAlHHFJ4IleQGAiEAi9bOeuJ6vjbTeNM3TNexsLpNDbCz%2FeYbeM58PnBwtQcq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDBFIMjHw2ekqiLTaTSrcA3smatxRSZKl69OErxU0zGb1dXUx0A3XvuJ7r0flxEkW3JElSTFt%2FPHJ2FOlOd3wFfjb9MHnunI8K526bEnaVBw8wIk5xDVx%2Ft3gNP1jBUzXlDWidZ85EiWanTShxPJtX%2Bvc6Cj1uWPj1RZwo2FD3K7f%2F1M2l36fvQa1CQ%2B%2Bnzs68AXwxVjj60U0a8uyOubB3K9uAob6DxzUyPAnygnmJH0PoZPUahaLLe%2FjtZvPZkrBjGrVSETLYKG0lJTGqTrV17KaNedG2uvt3Dgq88yyA22o5lmTlokwiTefB3%2BJp%2FCUHzhLb%2F2Cqoo9gyh3C20NUBTZ2HMDv976k4pda3mi8WHTNy6QQ2iiF6n36eXqcNANJRdsKKNqZ5j%2BNa%2FutKBtCS0UBbQdV8gjGGD%2BpzPOPwEEYmlQJpK%2FRscv%2FlzKtexqyQKlzzi43nE1iUS0L026Az9kA9TSrf4n8KhyXNSVVSXnwaOD9qO8nN1w1IFB1Pou1H44yInv%2BfGZXX9m9QeMQToQfXrzYx2YVMGLMy0hi9O5y3XUiyya%2FyxHBv1SBDCngEfaSnftjJ0ynG2in2dZPEvm5Xd8cSTqTa7uWYQeY4sb60qQN0ahECnULRuvAdT0BshLZAWxEPWPcdtMMLK8qMAGOqUBJ2oOBZ%2FJPg0tCbVhfbSd4Mgh%2B9O06f1dhKruuRTwoql8lGzmf59JGyNT3fNnncK1YM%2FCUSGVGotOwt2mkHr3oMUYxAaX0RC8e1DxP2CZVEFcMK9OV8m500sVI8u2kdWR14FKU3uvaLc8%2FtWeRN4zs6K54pe%2BFhoLMb49rHsjLjyTjPPAWeC0IlcSVTmf0XTuIyIdN32%2BrjpDBw6pGDaQ5IOPk83%2F&X-Amz-Signature=92c0eb4688a21e364b314e64ef0eb3c4c0fb9d9c5dd066b4dc7e96def3cdaacb&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNYLDCNO%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T121525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIBW8EkR%2FbUiFfK4gh%2F%2FOqs2wHMnT4n2rAlHHFJ4IleQGAiEAi9bOeuJ6vjbTeNM3TNexsLpNDbCz%2FeYbeM58PnBwtQcq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDBFIMjHw2ekqiLTaTSrcA3smatxRSZKl69OErxU0zGb1dXUx0A3XvuJ7r0flxEkW3JElSTFt%2FPHJ2FOlOd3wFfjb9MHnunI8K526bEnaVBw8wIk5xDVx%2Ft3gNP1jBUzXlDWidZ85EiWanTShxPJtX%2Bvc6Cj1uWPj1RZwo2FD3K7f%2F1M2l36fvQa1CQ%2B%2Bnzs68AXwxVjj60U0a8uyOubB3K9uAob6DxzUyPAnygnmJH0PoZPUahaLLe%2FjtZvPZkrBjGrVSETLYKG0lJTGqTrV17KaNedG2uvt3Dgq88yyA22o5lmTlokwiTefB3%2BJp%2FCUHzhLb%2F2Cqoo9gyh3C20NUBTZ2HMDv976k4pda3mi8WHTNy6QQ2iiF6n36eXqcNANJRdsKKNqZ5j%2BNa%2FutKBtCS0UBbQdV8gjGGD%2BpzPOPwEEYmlQJpK%2FRscv%2FlzKtexqyQKlzzi43nE1iUS0L026Az9kA9TSrf4n8KhyXNSVVSXnwaOD9qO8nN1w1IFB1Pou1H44yInv%2BfGZXX9m9QeMQToQfXrzYx2YVMGLMy0hi9O5y3XUiyya%2FyxHBv1SBDCngEfaSnftjJ0ynG2in2dZPEvm5Xd8cSTqTa7uWYQeY4sb60qQN0ahECnULRuvAdT0BshLZAWxEPWPcdtMMLK8qMAGOqUBJ2oOBZ%2FJPg0tCbVhfbSd4Mgh%2B9O06f1dhKruuRTwoql8lGzmf59JGyNT3fNnncK1YM%2FCUSGVGotOwt2mkHr3oMUYxAaX0RC8e1DxP2CZVEFcMK9OV8m500sVI8u2kdWR14FKU3uvaLc8%2FtWeRN4zs6K54pe%2BFhoLMb49rHsjLjyTjPPAWeC0IlcSVTmf0XTuIyIdN32%2BrjpDBw6pGDaQ5IOPk83%2F&X-Amz-Signature=50fb069a7bb3ecad0f16255fd438ebf795e9ba5e0e3f0b61bcdbb69b2c124370&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNYLDCNO%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T121525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIBW8EkR%2FbUiFfK4gh%2F%2FOqs2wHMnT4n2rAlHHFJ4IleQGAiEAi9bOeuJ6vjbTeNM3TNexsLpNDbCz%2FeYbeM58PnBwtQcq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDBFIMjHw2ekqiLTaTSrcA3smatxRSZKl69OErxU0zGb1dXUx0A3XvuJ7r0flxEkW3JElSTFt%2FPHJ2FOlOd3wFfjb9MHnunI8K526bEnaVBw8wIk5xDVx%2Ft3gNP1jBUzXlDWidZ85EiWanTShxPJtX%2Bvc6Cj1uWPj1RZwo2FD3K7f%2F1M2l36fvQa1CQ%2B%2Bnzs68AXwxVjj60U0a8uyOubB3K9uAob6DxzUyPAnygnmJH0PoZPUahaLLe%2FjtZvPZkrBjGrVSETLYKG0lJTGqTrV17KaNedG2uvt3Dgq88yyA22o5lmTlokwiTefB3%2BJp%2FCUHzhLb%2F2Cqoo9gyh3C20NUBTZ2HMDv976k4pda3mi8WHTNy6QQ2iiF6n36eXqcNANJRdsKKNqZ5j%2BNa%2FutKBtCS0UBbQdV8gjGGD%2BpzPOPwEEYmlQJpK%2FRscv%2FlzKtexqyQKlzzi43nE1iUS0L026Az9kA9TSrf4n8KhyXNSVVSXnwaOD9qO8nN1w1IFB1Pou1H44yInv%2BfGZXX9m9QeMQToQfXrzYx2YVMGLMy0hi9O5y3XUiyya%2FyxHBv1SBDCngEfaSnftjJ0ynG2in2dZPEvm5Xd8cSTqTa7uWYQeY4sb60qQN0ahECnULRuvAdT0BshLZAWxEPWPcdtMMLK8qMAGOqUBJ2oOBZ%2FJPg0tCbVhfbSd4Mgh%2B9O06f1dhKruuRTwoql8lGzmf59JGyNT3fNnncK1YM%2FCUSGVGotOwt2mkHr3oMUYxAaX0RC8e1DxP2CZVEFcMK9OV8m500sVI8u2kdWR14FKU3uvaLc8%2FtWeRN4zs6K54pe%2BFhoLMb49rHsjLjyTjPPAWeC0IlcSVTmf0XTuIyIdN32%2BrjpDBw6pGDaQ5IOPk83%2F&X-Amz-Signature=bce8420dd2aeaeab9e955f397570fba895f84250494e2983c0cb0b2ca94ef9c9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
