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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVJQ3HHP%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T003727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIC%2BfSy%2BlpmfPU5nDy8u3DUTRha%2FNeleMxqJ6h6YLmwccAiA7UQ7hXHFgQbx8obK%2FF%2FcH5kAv4CLjm%2BGinYyqm%2FJ18SqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMArue9v7oUqZIhjqXKtwDH2FnU556VBUuTKaPSzOWP71UmIQQKSZ81zkXfalMJW7EFGCV31YpUfWqVWc5Fv5E8ydnRLoEQirDl5ht6iEaRR%2BvPvQeBx1eYGS1rwfQj7NdvIkJSXJuQoAoDAW44KrtUh0Ao4FEflQjKRXfmtVtwSL06sXgU%2FH8CLqYKrp6ftXeKzmDO5ngW4ztuIQe29%2BB0xGQS%2FkBuRcXM5NhY7PkqsHHQsi7%2FGfRySuNkeZcKb7npELOEGbW0qEtbwDpDWAx1aBXaBruNB%2BbyNX2UuGy0PHdTTHx1zsfnFs%2FZiOldQpe2cf4lVh0HgTOZNBlqCPpHxmAoRsXJHdUk72wmditlUg87H%2BCg%2FyX9KF4dKR6a6TbItDaAp4bAD%2FvviV7tL3ytZAHn54vS%2BSmOuzuZfub9DOOmg6%2BeCHkI3A1PETnpkWWVMNCWbSCfje1xs2vUNAYXidRNmgQaCDCQYjyViAAbJwSAjQ%2Bw9oyf1ETtVD9yEj4klIR7daCJtfgtzVCFaHDsPeTB9vyoCcwV48ToyqFFSG4x3s0AYv2mOn8qcz8jl4P6goqp9BcksUGbjDDBVaPFEL7ZaMQ6LjKObAn9n%2F0kuzifsh4TQ0m%2BWtvE9pC%2FApKGf22aIn3DLH0Hs0wnY3DvgY6pgHS97cci295Kh5c1iw8sysW4ndZfCe26RUQGHPYK50K93DGz3SQnGWig7Re4HEx9FN%2BIvAlxT26%2BIziAuAB1VQbVrAW%2Bis6jX6AWCp3i7Uf8oXInNZl1Rx8djYVFWIWh%2B6wWTOQQx24rnhD7YkxIuQjtvbc%2FjLwMqosU%2FNC5nqHk6FChiI3ZsQgSxedZhc1fXrjQidhVuvogoEWVXeMJjxHlnIKN1df&X-Amz-Signature=fd56505909f688faa78eb4181a54e12f89500a137ba0a3286ac494dc3e324195&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVJQ3HHP%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T003727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIC%2BfSy%2BlpmfPU5nDy8u3DUTRha%2FNeleMxqJ6h6YLmwccAiA7UQ7hXHFgQbx8obK%2FF%2FcH5kAv4CLjm%2BGinYyqm%2FJ18SqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMArue9v7oUqZIhjqXKtwDH2FnU556VBUuTKaPSzOWP71UmIQQKSZ81zkXfalMJW7EFGCV31YpUfWqVWc5Fv5E8ydnRLoEQirDl5ht6iEaRR%2BvPvQeBx1eYGS1rwfQj7NdvIkJSXJuQoAoDAW44KrtUh0Ao4FEflQjKRXfmtVtwSL06sXgU%2FH8CLqYKrp6ftXeKzmDO5ngW4ztuIQe29%2BB0xGQS%2FkBuRcXM5NhY7PkqsHHQsi7%2FGfRySuNkeZcKb7npELOEGbW0qEtbwDpDWAx1aBXaBruNB%2BbyNX2UuGy0PHdTTHx1zsfnFs%2FZiOldQpe2cf4lVh0HgTOZNBlqCPpHxmAoRsXJHdUk72wmditlUg87H%2BCg%2FyX9KF4dKR6a6TbItDaAp4bAD%2FvviV7tL3ytZAHn54vS%2BSmOuzuZfub9DOOmg6%2BeCHkI3A1PETnpkWWVMNCWbSCfje1xs2vUNAYXidRNmgQaCDCQYjyViAAbJwSAjQ%2Bw9oyf1ETtVD9yEj4klIR7daCJtfgtzVCFaHDsPeTB9vyoCcwV48ToyqFFSG4x3s0AYv2mOn8qcz8jl4P6goqp9BcksUGbjDDBVaPFEL7ZaMQ6LjKObAn9n%2F0kuzifsh4TQ0m%2BWtvE9pC%2FApKGf22aIn3DLH0Hs0wnY3DvgY6pgHS97cci295Kh5c1iw8sysW4ndZfCe26RUQGHPYK50K93DGz3SQnGWig7Re4HEx9FN%2BIvAlxT26%2BIziAuAB1VQbVrAW%2Bis6jX6AWCp3i7Uf8oXInNZl1Rx8djYVFWIWh%2B6wWTOQQx24rnhD7YkxIuQjtvbc%2FjLwMqosU%2FNC5nqHk6FChiI3ZsQgSxedZhc1fXrjQidhVuvogoEWVXeMJjxHlnIKN1df&X-Amz-Signature=344ca95182050b62a8685e1527b1ca08fc82012e987905e13c863cd21fd94495&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVJQ3HHP%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T003727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIC%2BfSy%2BlpmfPU5nDy8u3DUTRha%2FNeleMxqJ6h6YLmwccAiA7UQ7hXHFgQbx8obK%2FF%2FcH5kAv4CLjm%2BGinYyqm%2FJ18SqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMArue9v7oUqZIhjqXKtwDH2FnU556VBUuTKaPSzOWP71UmIQQKSZ81zkXfalMJW7EFGCV31YpUfWqVWc5Fv5E8ydnRLoEQirDl5ht6iEaRR%2BvPvQeBx1eYGS1rwfQj7NdvIkJSXJuQoAoDAW44KrtUh0Ao4FEflQjKRXfmtVtwSL06sXgU%2FH8CLqYKrp6ftXeKzmDO5ngW4ztuIQe29%2BB0xGQS%2FkBuRcXM5NhY7PkqsHHQsi7%2FGfRySuNkeZcKb7npELOEGbW0qEtbwDpDWAx1aBXaBruNB%2BbyNX2UuGy0PHdTTHx1zsfnFs%2FZiOldQpe2cf4lVh0HgTOZNBlqCPpHxmAoRsXJHdUk72wmditlUg87H%2BCg%2FyX9KF4dKR6a6TbItDaAp4bAD%2FvviV7tL3ytZAHn54vS%2BSmOuzuZfub9DOOmg6%2BeCHkI3A1PETnpkWWVMNCWbSCfje1xs2vUNAYXidRNmgQaCDCQYjyViAAbJwSAjQ%2Bw9oyf1ETtVD9yEj4klIR7daCJtfgtzVCFaHDsPeTB9vyoCcwV48ToyqFFSG4x3s0AYv2mOn8qcz8jl4P6goqp9BcksUGbjDDBVaPFEL7ZaMQ6LjKObAn9n%2F0kuzifsh4TQ0m%2BWtvE9pC%2FApKGf22aIn3DLH0Hs0wnY3DvgY6pgHS97cci295Kh5c1iw8sysW4ndZfCe26RUQGHPYK50K93DGz3SQnGWig7Re4HEx9FN%2BIvAlxT26%2BIziAuAB1VQbVrAW%2Bis6jX6AWCp3i7Uf8oXInNZl1Rx8djYVFWIWh%2B6wWTOQQx24rnhD7YkxIuQjtvbc%2FjLwMqosU%2FNC5nqHk6FChiI3ZsQgSxedZhc1fXrjQidhVuvogoEWVXeMJjxHlnIKN1df&X-Amz-Signature=1b07020feec8a3dd5feae730c2e0816b70279931427a7e3d834ef43d5be8795f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
