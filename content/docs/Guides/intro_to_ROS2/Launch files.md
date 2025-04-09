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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVNV63JY%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T220813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIDlgVmwFHDCax%2FbH2rebRQCEXz57TKvlsm%2BppazQIupQAiAf%2B1iM34o%2BKgtCZ1ls2iCLO8IsadgpDX2hB84zpp1tUCqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG3E9vHMODLaIyi03KtwDM48Sa8Cy%2FkAwjmk%2BRyMYqDG%2FC0Aggeu68FKTknkrMnVaBXhPK%2BRvy0GyxDX5zCOpENwT%2BQtl8kkwu6Bc8W6qgyjlkLyIjWXiFIasZ4SyW61BhaQdk4tWgV2LLzCwPPITbhrUrUdqPOkEeI8lObrnj7mu0%2FvTsb6oTxwWfyI57gVcSY62drlZ0Pq3cV4EyFOsuobLnFgBx7wxZoj1NmmBaGE12jxgz2DfgBZVQrDJR4P19x%2BAPP8iBWDTOp58X6jVtZwwx14NBU%2BLYLulB56yOZZr8bEJR8Opemru7CvkHGFJ2mDQGlGrH5O03jz9WqtDRnKWwWVnsVFZo%2BW9IgrjxxrLIR1G9ncGdRHjapPq0rTSvhbPht6%2FDPtHu0cIlT9kWewdz8rx%2FZKqHt0N%2B4yd8LQuwc4OAjIklWes%2FMw0I9vDFdHr8EA08F%2FdpAEiFxd7Ux%2B5LlDHu1CUqL44IuILdbQt0Djl%2BnwfO%2FRdWk7LTmK%2FxK13kkHoGGBzuj9s1esbS1ZWqxGlw%2FtJ%2FRrbEqW6MPUxWxPTUpjFDGLqHyGjKEjB1y%2Fd0JZuocVvz3T0mNNE2lUo7drs9dw%2FQgb1GIRqRX2BlOGKr4DD%2BlSIpyEWrPV%2FIpGrZDSCFaI7UqUw4sjbvwY6pgFgARJr8Mm10joC9yPS%2BYqngS1DSBQyAxAubiQhtOvjLytPHJsEQfFuu%2B9JlxyNrjBjvuPnd4%2BpuZx%2FF7wOpHvchvDq7ZRvMeh8XZIKvJJ4Jwhg59v04uyKBzJTZEQdfnBdhGpnCYIS%2FWBI7jULM5oMbqqx87YYipfYn%2Baqm4tZZwNTVrFre7B4ej3K4WRLQ2xTUZmbfQeadiuBikrzvkTXo2t1ONR%2B&X-Amz-Signature=78fbb8de741b548cf716f084d4ecbb41286cd2c2c0972069bbd6389ac7692a67&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVNV63JY%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T220813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIDlgVmwFHDCax%2FbH2rebRQCEXz57TKvlsm%2BppazQIupQAiAf%2B1iM34o%2BKgtCZ1ls2iCLO8IsadgpDX2hB84zpp1tUCqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG3E9vHMODLaIyi03KtwDM48Sa8Cy%2FkAwjmk%2BRyMYqDG%2FC0Aggeu68FKTknkrMnVaBXhPK%2BRvy0GyxDX5zCOpENwT%2BQtl8kkwu6Bc8W6qgyjlkLyIjWXiFIasZ4SyW61BhaQdk4tWgV2LLzCwPPITbhrUrUdqPOkEeI8lObrnj7mu0%2FvTsb6oTxwWfyI57gVcSY62drlZ0Pq3cV4EyFOsuobLnFgBx7wxZoj1NmmBaGE12jxgz2DfgBZVQrDJR4P19x%2BAPP8iBWDTOp58X6jVtZwwx14NBU%2BLYLulB56yOZZr8bEJR8Opemru7CvkHGFJ2mDQGlGrH5O03jz9WqtDRnKWwWVnsVFZo%2BW9IgrjxxrLIR1G9ncGdRHjapPq0rTSvhbPht6%2FDPtHu0cIlT9kWewdz8rx%2FZKqHt0N%2B4yd8LQuwc4OAjIklWes%2FMw0I9vDFdHr8EA08F%2FdpAEiFxd7Ux%2B5LlDHu1CUqL44IuILdbQt0Djl%2BnwfO%2FRdWk7LTmK%2FxK13kkHoGGBzuj9s1esbS1ZWqxGlw%2FtJ%2FRrbEqW6MPUxWxPTUpjFDGLqHyGjKEjB1y%2Fd0JZuocVvz3T0mNNE2lUo7drs9dw%2FQgb1GIRqRX2BlOGKr4DD%2BlSIpyEWrPV%2FIpGrZDSCFaI7UqUw4sjbvwY6pgFgARJr8Mm10joC9yPS%2BYqngS1DSBQyAxAubiQhtOvjLytPHJsEQfFuu%2B9JlxyNrjBjvuPnd4%2BpuZx%2FF7wOpHvchvDq7ZRvMeh8XZIKvJJ4Jwhg59v04uyKBzJTZEQdfnBdhGpnCYIS%2FWBI7jULM5oMbqqx87YYipfYn%2Baqm4tZZwNTVrFre7B4ej3K4WRLQ2xTUZmbfQeadiuBikrzvkTXo2t1ONR%2B&X-Amz-Signature=e5b9f80dfe3802bc08a89447f127ce07cd8a159cbabf2229c64d288893157fa0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVNV63JY%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T220813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIDlgVmwFHDCax%2FbH2rebRQCEXz57TKvlsm%2BppazQIupQAiAf%2B1iM34o%2BKgtCZ1ls2iCLO8IsadgpDX2hB84zpp1tUCqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG3E9vHMODLaIyi03KtwDM48Sa8Cy%2FkAwjmk%2BRyMYqDG%2FC0Aggeu68FKTknkrMnVaBXhPK%2BRvy0GyxDX5zCOpENwT%2BQtl8kkwu6Bc8W6qgyjlkLyIjWXiFIasZ4SyW61BhaQdk4tWgV2LLzCwPPITbhrUrUdqPOkEeI8lObrnj7mu0%2FvTsb6oTxwWfyI57gVcSY62drlZ0Pq3cV4EyFOsuobLnFgBx7wxZoj1NmmBaGE12jxgz2DfgBZVQrDJR4P19x%2BAPP8iBWDTOp58X6jVtZwwx14NBU%2BLYLulB56yOZZr8bEJR8Opemru7CvkHGFJ2mDQGlGrH5O03jz9WqtDRnKWwWVnsVFZo%2BW9IgrjxxrLIR1G9ncGdRHjapPq0rTSvhbPht6%2FDPtHu0cIlT9kWewdz8rx%2FZKqHt0N%2B4yd8LQuwc4OAjIklWes%2FMw0I9vDFdHr8EA08F%2FdpAEiFxd7Ux%2B5LlDHu1CUqL44IuILdbQt0Djl%2BnwfO%2FRdWk7LTmK%2FxK13kkHoGGBzuj9s1esbS1ZWqxGlw%2FtJ%2FRrbEqW6MPUxWxPTUpjFDGLqHyGjKEjB1y%2Fd0JZuocVvz3T0mNNE2lUo7drs9dw%2FQgb1GIRqRX2BlOGKr4DD%2BlSIpyEWrPV%2FIpGrZDSCFaI7UqUw4sjbvwY6pgFgARJr8Mm10joC9yPS%2BYqngS1DSBQyAxAubiQhtOvjLytPHJsEQfFuu%2B9JlxyNrjBjvuPnd4%2BpuZx%2FF7wOpHvchvDq7ZRvMeh8XZIKvJJ4Jwhg59v04uyKBzJTZEQdfnBdhGpnCYIS%2FWBI7jULM5oMbqqx87YYipfYn%2Baqm4tZZwNTVrFre7B4ej3K4WRLQ2xTUZmbfQeadiuBikrzvkTXo2t1ONR%2B&X-Amz-Signature=2206789f1eca890d9624e9f888573e8f1d4d6552fe52253f97689caf701f9dfd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
