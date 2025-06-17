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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZL5SDAK%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqdpga2qgx6gzhL1XtJHIFWYRHGal4cNt%2F7RZQb7HpEgIhAJwfObMS1aj5LDFbTo66wrXqTYUMQ1io5avsungJnjKDKv8DCH0QABoMNjM3NDIzMTgzODA1IgwoZYXoOtt09UDIu6cq3AMd7x7P2E3xbUj3CzK%2BypUM%2FZqsHkOWvs%2FRvlMdk7W3Ksmb0Jsy6KXwY%2FXXxW7O%2B21ECD77uiXhdTdSk7ZaedOXWVMm%2Bkg2PATVsMmktCRjnow9niFebjdfx1wfrIQY0zMeZ%2BOKMBLnik6FW0infKSAHDiTCT3ICwpmBZMyIFfzsYRi2bRIpF4yRQVoc6m0p4Kc7YS%2BQuTvQgT0dkH7QZszRb1YF1Znqt6GBo0X2Uky%2BOU60muL0pk6FdRD%2BXofdpOuECJzAY3XH%2FDSiHjRaJZtelGm2cjcCYG691oKqqdX%2BzngXP%2B%2BFbtIV7uzAqgBJDkKyirbyeUomhxAqGPTxGfvPsSasgANnqzMJHVifiqimfSjkv03v2bNmjKDtHskf18LyVSzmL5VILFdWZn1HzS%2FO3xd5USjT7mXuEzO8KnaCNXxO9MUBaYwxs0FQD7ENxZojVaG%2Fkbk9ytgAU%2FKjj7P%2FQz%2FEMW36DhU%2BqPc0lfGmWfC3b0E3Ge8weetK5wTyP7bG4eZKdovrUsuKNkT367x%2FlNEoWIsDRCeYx7t2VVKA%2BQ%2BlUnXZt%2BZxLVVjssOvrwAE4A2%2F3muX2z69NUWVTFWlTP51zvvEdl3e2F1NJcNo8CzzucCTyuatz19ODDiiMfCBjqkAaKRvFU3%2F1ZO5ykSyF5XNWUGIieL6bhFsf3o%2Bt2CT1fqEm4A7i0RyRBYn0xvUz%2FzZk%2FzqedYWLkDlyhmVf64VsnbbkPUHqLhx9V4e%2F3BPihD%2FJFOVG3FwEXFLDRBv06OV1IMlJMGMSPoOtyTc0k0%2BIXILDbMsKyfuW0niQ6niRr8deseGgJKC6s%2Bd6gtIcGeg5%2F8f%2B1LQ95QDNaGefmg%2BvAgFrcw&X-Amz-Signature=93b52fdbcb75ec01f54c76a37f0e0a252c7891bab7fd39de785b33c86115df5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZL5SDAK%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqdpga2qgx6gzhL1XtJHIFWYRHGal4cNt%2F7RZQb7HpEgIhAJwfObMS1aj5LDFbTo66wrXqTYUMQ1io5avsungJnjKDKv8DCH0QABoMNjM3NDIzMTgzODA1IgwoZYXoOtt09UDIu6cq3AMd7x7P2E3xbUj3CzK%2BypUM%2FZqsHkOWvs%2FRvlMdk7W3Ksmb0Jsy6KXwY%2FXXxW7O%2B21ECD77uiXhdTdSk7ZaedOXWVMm%2Bkg2PATVsMmktCRjnow9niFebjdfx1wfrIQY0zMeZ%2BOKMBLnik6FW0infKSAHDiTCT3ICwpmBZMyIFfzsYRi2bRIpF4yRQVoc6m0p4Kc7YS%2BQuTvQgT0dkH7QZszRb1YF1Znqt6GBo0X2Uky%2BOU60muL0pk6FdRD%2BXofdpOuECJzAY3XH%2FDSiHjRaJZtelGm2cjcCYG691oKqqdX%2BzngXP%2B%2BFbtIV7uzAqgBJDkKyirbyeUomhxAqGPTxGfvPsSasgANnqzMJHVifiqimfSjkv03v2bNmjKDtHskf18LyVSzmL5VILFdWZn1HzS%2FO3xd5USjT7mXuEzO8KnaCNXxO9MUBaYwxs0FQD7ENxZojVaG%2Fkbk9ytgAU%2FKjj7P%2FQz%2FEMW36DhU%2BqPc0lfGmWfC3b0E3Ge8weetK5wTyP7bG4eZKdovrUsuKNkT367x%2FlNEoWIsDRCeYx7t2VVKA%2BQ%2BlUnXZt%2BZxLVVjssOvrwAE4A2%2F3muX2z69NUWVTFWlTP51zvvEdl3e2F1NJcNo8CzzucCTyuatz19ODDiiMfCBjqkAaKRvFU3%2F1ZO5ykSyF5XNWUGIieL6bhFsf3o%2Bt2CT1fqEm4A7i0RyRBYn0xvUz%2FzZk%2FzqedYWLkDlyhmVf64VsnbbkPUHqLhx9V4e%2F3BPihD%2FJFOVG3FwEXFLDRBv06OV1IMlJMGMSPoOtyTc0k0%2BIXILDbMsKyfuW0niQ6niRr8deseGgJKC6s%2Bd6gtIcGeg5%2F8f%2B1LQ95QDNaGefmg%2BvAgFrcw&X-Amz-Signature=41146e583a9fc7376c3a19d94bfbaac22c37709b9fd0edf1b2adac7b131edb96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZL5SDAK%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqdpga2qgx6gzhL1XtJHIFWYRHGal4cNt%2F7RZQb7HpEgIhAJwfObMS1aj5LDFbTo66wrXqTYUMQ1io5avsungJnjKDKv8DCH0QABoMNjM3NDIzMTgzODA1IgwoZYXoOtt09UDIu6cq3AMd7x7P2E3xbUj3CzK%2BypUM%2FZqsHkOWvs%2FRvlMdk7W3Ksmb0Jsy6KXwY%2FXXxW7O%2B21ECD77uiXhdTdSk7ZaedOXWVMm%2Bkg2PATVsMmktCRjnow9niFebjdfx1wfrIQY0zMeZ%2BOKMBLnik6FW0infKSAHDiTCT3ICwpmBZMyIFfzsYRi2bRIpF4yRQVoc6m0p4Kc7YS%2BQuTvQgT0dkH7QZszRb1YF1Znqt6GBo0X2Uky%2BOU60muL0pk6FdRD%2BXofdpOuECJzAY3XH%2FDSiHjRaJZtelGm2cjcCYG691oKqqdX%2BzngXP%2B%2BFbtIV7uzAqgBJDkKyirbyeUomhxAqGPTxGfvPsSasgANnqzMJHVifiqimfSjkv03v2bNmjKDtHskf18LyVSzmL5VILFdWZn1HzS%2FO3xd5USjT7mXuEzO8KnaCNXxO9MUBaYwxs0FQD7ENxZojVaG%2Fkbk9ytgAU%2FKjj7P%2FQz%2FEMW36DhU%2BqPc0lfGmWfC3b0E3Ge8weetK5wTyP7bG4eZKdovrUsuKNkT367x%2FlNEoWIsDRCeYx7t2VVKA%2BQ%2BlUnXZt%2BZxLVVjssOvrwAE4A2%2F3muX2z69NUWVTFWlTP51zvvEdl3e2F1NJcNo8CzzucCTyuatz19ODDiiMfCBjqkAaKRvFU3%2F1ZO5ykSyF5XNWUGIieL6bhFsf3o%2Bt2CT1fqEm4A7i0RyRBYn0xvUz%2FzZk%2FzqedYWLkDlyhmVf64VsnbbkPUHqLhx9V4e%2F3BPihD%2FJFOVG3FwEXFLDRBv06OV1IMlJMGMSPoOtyTc0k0%2BIXILDbMsKyfuW0niQ6niRr8deseGgJKC6s%2Bd6gtIcGeg5%2F8f%2B1LQ95QDNaGefmg%2BvAgFrcw&X-Amz-Signature=fddfc9dd0ba35145db1c0cd9f4c137ef7a161b4290c7e4732a927b4bb3b0c8e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
