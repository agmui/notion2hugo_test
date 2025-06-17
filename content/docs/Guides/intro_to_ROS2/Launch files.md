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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV46CMJJ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlAFrO09Qsm%2FnL7L23jlYZvmhFwgj4q7Ekap4TuYT%2FfAiEAtzE%2FQJiQrBZlKThxGXe%2Bal%2BvwoQ5E4WfMVXZMsf7M5Uq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDCDTqzvHaB5qxu263ircA%2FpWNs9E6UIlopDqGp%2FH6j63ARhts6AfTrSPqM1vITV%2FJrsjRE9P8%2Fdz%2BbOn7BLvXNnwF%2B66ayg%2Bi9SNSL%2FELP00oV0mhWenS%2BfVrAO8u4CZViwWI4LFjaksjlOmkjXcHQJqoApiFjf3drt2SAQu5%2BrPGd4njybrOQfssIxmcpNdHH1LvUprboQuZsX6j28WpxIz1v0jQLvwJ1i1LWDqeOBVfLJfgpUjc166gEeUvFHniBivWBKJvn7wKnzEfjTmP2kwlOdJ2VJdo4nHIIFjAG6FwtNEGqHXhyZP67GpiqRvM325FZa6bVA5ntm6Lq6MEE8gwqiyTqFONroCP7xvhe%2B9ShlF9QUL6zhX%2F%2BDfiUNvTGlPyQwIbkvBYQtEMUAVTZjCEP4El8pKxODu9xqeZFyVLszAM8gJjQr07ZDMDvbRELlM%2F4b1FqqhSvSh%2BTZ3CJoHpx6fJhy2hHEgBPCJRdI9WyZZD3njhKw40WwQ0iJZc302N7DOIzeHagx%2FkSnp%2B%2FeE2SnziK%2FuApX%2BS2vPuR246NPxdYfG3Ekpf6%2F4YNIg7wutLnG4xEAkrXHu%2FsCjqXXBeJe8CHvQzZV7kq0EU3LNnWu0NlANctc9RR45%2FexNucdONKIs9MFxpnswMIHuxMIGOqUBZ54j1Txo6kFlmptNwb979rEoP5Fj%2BQUTT%2FtLBWklT2qrkbEZhi2%2Bh7Rc1O8shMb3iY8mKiSz7ZqOEAoSfBzU3tP4jnnCH58Pkty9UZjhiMt%2FeX7ZmKjIuKFjk%2F2I2n7oSaROsjQfDSsmc%2BQxOi2TKb6qrXeNzsn2KOTjTVQHxusWjfMu4%2BQPHQ1Huoy4FOKs4DEIcF4SKBl6ihXrpqEU7mSxob5H&X-Amz-Signature=42a0c1a794bb0b08c563babdf688399f69fab9af845b6d958625d45da193e230&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV46CMJJ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlAFrO09Qsm%2FnL7L23jlYZvmhFwgj4q7Ekap4TuYT%2FfAiEAtzE%2FQJiQrBZlKThxGXe%2Bal%2BvwoQ5E4WfMVXZMsf7M5Uq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDCDTqzvHaB5qxu263ircA%2FpWNs9E6UIlopDqGp%2FH6j63ARhts6AfTrSPqM1vITV%2FJrsjRE9P8%2Fdz%2BbOn7BLvXNnwF%2B66ayg%2Bi9SNSL%2FELP00oV0mhWenS%2BfVrAO8u4CZViwWI4LFjaksjlOmkjXcHQJqoApiFjf3drt2SAQu5%2BrPGd4njybrOQfssIxmcpNdHH1LvUprboQuZsX6j28WpxIz1v0jQLvwJ1i1LWDqeOBVfLJfgpUjc166gEeUvFHniBivWBKJvn7wKnzEfjTmP2kwlOdJ2VJdo4nHIIFjAG6FwtNEGqHXhyZP67GpiqRvM325FZa6bVA5ntm6Lq6MEE8gwqiyTqFONroCP7xvhe%2B9ShlF9QUL6zhX%2F%2BDfiUNvTGlPyQwIbkvBYQtEMUAVTZjCEP4El8pKxODu9xqeZFyVLszAM8gJjQr07ZDMDvbRELlM%2F4b1FqqhSvSh%2BTZ3CJoHpx6fJhy2hHEgBPCJRdI9WyZZD3njhKw40WwQ0iJZc302N7DOIzeHagx%2FkSnp%2B%2FeE2SnziK%2FuApX%2BS2vPuR246NPxdYfG3Ekpf6%2F4YNIg7wutLnG4xEAkrXHu%2FsCjqXXBeJe8CHvQzZV7kq0EU3LNnWu0NlANctc9RR45%2FexNucdONKIs9MFxpnswMIHuxMIGOqUBZ54j1Txo6kFlmptNwb979rEoP5Fj%2BQUTT%2FtLBWklT2qrkbEZhi2%2Bh7Rc1O8shMb3iY8mKiSz7ZqOEAoSfBzU3tP4jnnCH58Pkty9UZjhiMt%2FeX7ZmKjIuKFjk%2F2I2n7oSaROsjQfDSsmc%2BQxOi2TKb6qrXeNzsn2KOTjTVQHxusWjfMu4%2BQPHQ1Huoy4FOKs4DEIcF4SKBl6ihXrpqEU7mSxob5H&X-Amz-Signature=155dfe7e862db248c841dde7c2ce4ac4616a1716e047ea47ba37f413738a824b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV46CMJJ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlAFrO09Qsm%2FnL7L23jlYZvmhFwgj4q7Ekap4TuYT%2FfAiEAtzE%2FQJiQrBZlKThxGXe%2Bal%2BvwoQ5E4WfMVXZMsf7M5Uq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDCDTqzvHaB5qxu263ircA%2FpWNs9E6UIlopDqGp%2FH6j63ARhts6AfTrSPqM1vITV%2FJrsjRE9P8%2Fdz%2BbOn7BLvXNnwF%2B66ayg%2Bi9SNSL%2FELP00oV0mhWenS%2BfVrAO8u4CZViwWI4LFjaksjlOmkjXcHQJqoApiFjf3drt2SAQu5%2BrPGd4njybrOQfssIxmcpNdHH1LvUprboQuZsX6j28WpxIz1v0jQLvwJ1i1LWDqeOBVfLJfgpUjc166gEeUvFHniBivWBKJvn7wKnzEfjTmP2kwlOdJ2VJdo4nHIIFjAG6FwtNEGqHXhyZP67GpiqRvM325FZa6bVA5ntm6Lq6MEE8gwqiyTqFONroCP7xvhe%2B9ShlF9QUL6zhX%2F%2BDfiUNvTGlPyQwIbkvBYQtEMUAVTZjCEP4El8pKxODu9xqeZFyVLszAM8gJjQr07ZDMDvbRELlM%2F4b1FqqhSvSh%2BTZ3CJoHpx6fJhy2hHEgBPCJRdI9WyZZD3njhKw40WwQ0iJZc302N7DOIzeHagx%2FkSnp%2B%2FeE2SnziK%2FuApX%2BS2vPuR246NPxdYfG3Ekpf6%2F4YNIg7wutLnG4xEAkrXHu%2FsCjqXXBeJe8CHvQzZV7kq0EU3LNnWu0NlANctc9RR45%2FexNucdONKIs9MFxpnswMIHuxMIGOqUBZ54j1Txo6kFlmptNwb979rEoP5Fj%2BQUTT%2FtLBWklT2qrkbEZhi2%2Bh7Rc1O8shMb3iY8mKiSz7ZqOEAoSfBzU3tP4jnnCH58Pkty9UZjhiMt%2FeX7ZmKjIuKFjk%2F2I2n7oSaROsjQfDSsmc%2BQxOi2TKb6qrXeNzsn2KOTjTVQHxusWjfMu4%2BQPHQ1Huoy4FOKs4DEIcF4SKBl6ihXrpqEU7mSxob5H&X-Amz-Signature=2b4a0da446cadbae285fecce1164f6851aa593eccaa195fd871669bf08f9f473&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
