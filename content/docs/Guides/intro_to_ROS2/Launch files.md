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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4U5VRZY%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T181100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCxnEuhw5Jl1RMO%2BDIuCFlyUOotBAGTmezaz%2F7xqvU%2BnQIhAMoqu3EyrP1%2F1jdU%2BtP2zNVSz4002fH%2FeGSE7DXMT6GBKv8DCEoQABoMNjM3NDIzMTgzODA1IgxNNPV%2BAKtAHGI29OAq3ANfJsdgqqlM%2FhVYVQCqQ94TMed8TIeCWFffElv%2BP%2Ba3RPDlHrOce7khQ%2BCgz%2Fpzvv5HhkSoIn1G7cyGUE7IXWtqip%2Fk%2FPS3qTqkwwlJEdfda24OyrqmZNVhABRC378JMgnD0NlSssxEvjXU2Ggtufezg38fR7%2FQFVmijB8%2FULv0JqUl21RvY%2BjX%2F%2B4hf4nK1nZ4nq4tvGM6J5eyq8goUYPagd9mPctP3EFLse1fZdTt%2B4nDH82UVVadZruQAIkZXxmJHBh%2F6u%2FbYvZezG%2FXavG%2BQXIW5eJatBGO4kfanOD71YSzFnM2iPNIoFATRrkAoDDxWWdo3XyD6XmEGtIAVyfoSYp9W3laqmDS8ZkEWrG0sBlZXSEn04nOY%2BcTW5PFuUGDmF36AuCE8d7as3VK%2BzEaP9t4aMZXy6lDmAZPkSH62ewG3A%2BnqOqneRlbCP36Wk9kpp%2FtVsfkCGhSo4c2Yyye3i3XzWfedgzHAMYvtl7L598OF%2BfkxIlz4RSpw3lZmlx0AxMd2Gl9rlcPStLofkuTG2E25DGOLFuLteS9Jjz3wKD9Kn91kiOZeO6LY6czEWNr0XUUgC%2FUPUFs9x9qH2A7GX%2BoVOl3cDAdHqODiGhePfRMhU1B5Ud9vGQV%2BDCghbzCBjqkAQ0lfJWZqL80QPjp1YwmOk%2F7xdAl%2BWhQe8L0QY7s%2FQujWDyl5JRIWRA6COiloCRMAuqycLa6C957f1YpRYRbtmDUSn1Of0rjWqQIA%2BGS0iFbgmAOTPkAqrgOFaYXO7CiSlsq%2Fk2%2BnV6gzg5gtGPpYtCpJk8CAO0%2FKM8JJX2d%2BHCVIMVwqMGWT2bC%2Bi2ZK8afe7%2B2p%2FZu0vwYcLW3RyaI2LDbaHwD&X-Amz-Signature=deab08a81bf9ae844486bfa27b314be3a404051f4fc9cde52c023a76d00fa70c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4U5VRZY%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T181100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCxnEuhw5Jl1RMO%2BDIuCFlyUOotBAGTmezaz%2F7xqvU%2BnQIhAMoqu3EyrP1%2F1jdU%2BtP2zNVSz4002fH%2FeGSE7DXMT6GBKv8DCEoQABoMNjM3NDIzMTgzODA1IgxNNPV%2BAKtAHGI29OAq3ANfJsdgqqlM%2FhVYVQCqQ94TMed8TIeCWFffElv%2BP%2Ba3RPDlHrOce7khQ%2BCgz%2Fpzvv5HhkSoIn1G7cyGUE7IXWtqip%2Fk%2FPS3qTqkwwlJEdfda24OyrqmZNVhABRC378JMgnD0NlSssxEvjXU2Ggtufezg38fR7%2FQFVmijB8%2FULv0JqUl21RvY%2BjX%2F%2B4hf4nK1nZ4nq4tvGM6J5eyq8goUYPagd9mPctP3EFLse1fZdTt%2B4nDH82UVVadZruQAIkZXxmJHBh%2F6u%2FbYvZezG%2FXavG%2BQXIW5eJatBGO4kfanOD71YSzFnM2iPNIoFATRrkAoDDxWWdo3XyD6XmEGtIAVyfoSYp9W3laqmDS8ZkEWrG0sBlZXSEn04nOY%2BcTW5PFuUGDmF36AuCE8d7as3VK%2BzEaP9t4aMZXy6lDmAZPkSH62ewG3A%2BnqOqneRlbCP36Wk9kpp%2FtVsfkCGhSo4c2Yyye3i3XzWfedgzHAMYvtl7L598OF%2BfkxIlz4RSpw3lZmlx0AxMd2Gl9rlcPStLofkuTG2E25DGOLFuLteS9Jjz3wKD9Kn91kiOZeO6LY6czEWNr0XUUgC%2FUPUFs9x9qH2A7GX%2BoVOl3cDAdHqODiGhePfRMhU1B5Ud9vGQV%2BDCghbzCBjqkAQ0lfJWZqL80QPjp1YwmOk%2F7xdAl%2BWhQe8L0QY7s%2FQujWDyl5JRIWRA6COiloCRMAuqycLa6C957f1YpRYRbtmDUSn1Of0rjWqQIA%2BGS0iFbgmAOTPkAqrgOFaYXO7CiSlsq%2Fk2%2BnV6gzg5gtGPpYtCpJk8CAO0%2FKM8JJX2d%2BHCVIMVwqMGWT2bC%2Bi2ZK8afe7%2B2p%2FZu0vwYcLW3RyaI2LDbaHwD&X-Amz-Signature=75b927a78e6f5e7ed323b39f4bb0437a202db800c8e8f0afbf381f50e7bd2751&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4U5VRZY%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T181100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCxnEuhw5Jl1RMO%2BDIuCFlyUOotBAGTmezaz%2F7xqvU%2BnQIhAMoqu3EyrP1%2F1jdU%2BtP2zNVSz4002fH%2FeGSE7DXMT6GBKv8DCEoQABoMNjM3NDIzMTgzODA1IgxNNPV%2BAKtAHGI29OAq3ANfJsdgqqlM%2FhVYVQCqQ94TMed8TIeCWFffElv%2BP%2Ba3RPDlHrOce7khQ%2BCgz%2Fpzvv5HhkSoIn1G7cyGUE7IXWtqip%2Fk%2FPS3qTqkwwlJEdfda24OyrqmZNVhABRC378JMgnD0NlSssxEvjXU2Ggtufezg38fR7%2FQFVmijB8%2FULv0JqUl21RvY%2BjX%2F%2B4hf4nK1nZ4nq4tvGM6J5eyq8goUYPagd9mPctP3EFLse1fZdTt%2B4nDH82UVVadZruQAIkZXxmJHBh%2F6u%2FbYvZezG%2FXavG%2BQXIW5eJatBGO4kfanOD71YSzFnM2iPNIoFATRrkAoDDxWWdo3XyD6XmEGtIAVyfoSYp9W3laqmDS8ZkEWrG0sBlZXSEn04nOY%2BcTW5PFuUGDmF36AuCE8d7as3VK%2BzEaP9t4aMZXy6lDmAZPkSH62ewG3A%2BnqOqneRlbCP36Wk9kpp%2FtVsfkCGhSo4c2Yyye3i3XzWfedgzHAMYvtl7L598OF%2BfkxIlz4RSpw3lZmlx0AxMd2Gl9rlcPStLofkuTG2E25DGOLFuLteS9Jjz3wKD9Kn91kiOZeO6LY6czEWNr0XUUgC%2FUPUFs9x9qH2A7GX%2BoVOl3cDAdHqODiGhePfRMhU1B5Ud9vGQV%2BDCghbzCBjqkAQ0lfJWZqL80QPjp1YwmOk%2F7xdAl%2BWhQe8L0QY7s%2FQujWDyl5JRIWRA6COiloCRMAuqycLa6C957f1YpRYRbtmDUSn1Of0rjWqQIA%2BGS0iFbgmAOTPkAqrgOFaYXO7CiSlsq%2Fk2%2BnV6gzg5gtGPpYtCpJk8CAO0%2FKM8JJX2d%2BHCVIMVwqMGWT2bC%2Bi2ZK8afe7%2B2p%2FZu0vwYcLW3RyaI2LDbaHwD&X-Amz-Signature=5dc51f54142f47134cb24aeb7f9fab710b1ef344b75b20af0fa98a45dbf39c86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
