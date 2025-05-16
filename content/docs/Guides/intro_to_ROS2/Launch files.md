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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPPZSDFK%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbM9%2BSBXA%2BdzpI4r1G1lDoqMopzCp5Y7m4s8mSXGlcWAiBmGZJ3FFjMKxQnudLq0Shiv%2FL2PEFb2xh0QU%2Bymjw7iir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMAt0x9ytRLPqajYjLKtwDht%2Bv3hcadHaOEcojh4s9Bl9GzN3ozPv1XGiwSjYvhISrpo48XyrcvxVgtxcaxNT%2FaC78d9aZtidvSFTtPyJElaiMk6QjXMlD7VlekfMhjbmCt2AMsvMGgflhOnKoz%2FzaJEusTRlHOGzYsmYkU%2BGm4rhB8jUhzyM5GRw9yo60wDHrztHtiElGdY2bf0rnzYF7JryJH87jCD8DINhCPXo0KHx44SH4bnNQTCjw7zlFLTPg2UNCu3o93GWzULtk%2FxdbbSzcDvjUvZnevXBWBYT53%2B507dik9WfqVRNewP7S2quoNn65d1m9lHRrU0sTz0gZYXhxMvJ2LPZLfH5WSwcpM0gsc4nzs9ylYQOYKdgOYBuHA0X%2F7ZvtsMNyLIsxof25eaJek1vWHk9VEn2VKd3iO5mWg49vichjC6sycygaBMAnNzCTcw%2BqtnF%2FdJngyM35b7pvgNdXLp5O4KupzrVBw%2B8kxaSgH9RMPO%2BSLp2gQKT76RhwpGZBIPkSTnO1gjN6sEvuD2VdsMQTy5wUboUviCqI3ghzdXiEQ%2B7UH7HVcIppZTfTU0Phe9tNJgCc8n7UgSaFvLwQ%2BqrZj9ZT62GpvlQiiznzUSGLtM22OSgAURjAJlptq1HIrGsS7vsw06ecwQY6pgFL4m%2Fpj6F5DbqxXSCsZgq53CnQvIl21xt%2F%2FqSnde3cN%2FfI2TUWxwzRVz%2BpxQlpTkBqgf62bw07tmjVgk37%2FKHTnqKsjMB2V4oRC%2FRXgAEbCfHp9Jxkofp%2FTs9wRcioExhGrhuGWReDyngqeckr4awQuIs8XXr7JZwas4m2Lz1g1x8gBX27Gp4rBQBAV332bpyphNMgAf0gO0lG%2BJ342mM1gF6jZ%2FzU&X-Amz-Signature=d2189ea8478d844af9feda5a3b6cf604882509e3351724c8147f511c6d45649a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPPZSDFK%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbM9%2BSBXA%2BdzpI4r1G1lDoqMopzCp5Y7m4s8mSXGlcWAiBmGZJ3FFjMKxQnudLq0Shiv%2FL2PEFb2xh0QU%2Bymjw7iir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMAt0x9ytRLPqajYjLKtwDht%2Bv3hcadHaOEcojh4s9Bl9GzN3ozPv1XGiwSjYvhISrpo48XyrcvxVgtxcaxNT%2FaC78d9aZtidvSFTtPyJElaiMk6QjXMlD7VlekfMhjbmCt2AMsvMGgflhOnKoz%2FzaJEusTRlHOGzYsmYkU%2BGm4rhB8jUhzyM5GRw9yo60wDHrztHtiElGdY2bf0rnzYF7JryJH87jCD8DINhCPXo0KHx44SH4bnNQTCjw7zlFLTPg2UNCu3o93GWzULtk%2FxdbbSzcDvjUvZnevXBWBYT53%2B507dik9WfqVRNewP7S2quoNn65d1m9lHRrU0sTz0gZYXhxMvJ2LPZLfH5WSwcpM0gsc4nzs9ylYQOYKdgOYBuHA0X%2F7ZvtsMNyLIsxof25eaJek1vWHk9VEn2VKd3iO5mWg49vichjC6sycygaBMAnNzCTcw%2BqtnF%2FdJngyM35b7pvgNdXLp5O4KupzrVBw%2B8kxaSgH9RMPO%2BSLp2gQKT76RhwpGZBIPkSTnO1gjN6sEvuD2VdsMQTy5wUboUviCqI3ghzdXiEQ%2B7UH7HVcIppZTfTU0Phe9tNJgCc8n7UgSaFvLwQ%2BqrZj9ZT62GpvlQiiznzUSGLtM22OSgAURjAJlptq1HIrGsS7vsw06ecwQY6pgFL4m%2Fpj6F5DbqxXSCsZgq53CnQvIl21xt%2F%2FqSnde3cN%2FfI2TUWxwzRVz%2BpxQlpTkBqgf62bw07tmjVgk37%2FKHTnqKsjMB2V4oRC%2FRXgAEbCfHp9Jxkofp%2FTs9wRcioExhGrhuGWReDyngqeckr4awQuIs8XXr7JZwas4m2Lz1g1x8gBX27Gp4rBQBAV332bpyphNMgAf0gO0lG%2BJ342mM1gF6jZ%2FzU&X-Amz-Signature=87c42c5852312ff6203bef3fa667b3c2ce347c74295d45513720727b6ad24fac&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPPZSDFK%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbM9%2BSBXA%2BdzpI4r1G1lDoqMopzCp5Y7m4s8mSXGlcWAiBmGZJ3FFjMKxQnudLq0Shiv%2FL2PEFb2xh0QU%2Bymjw7iir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMAt0x9ytRLPqajYjLKtwDht%2Bv3hcadHaOEcojh4s9Bl9GzN3ozPv1XGiwSjYvhISrpo48XyrcvxVgtxcaxNT%2FaC78d9aZtidvSFTtPyJElaiMk6QjXMlD7VlekfMhjbmCt2AMsvMGgflhOnKoz%2FzaJEusTRlHOGzYsmYkU%2BGm4rhB8jUhzyM5GRw9yo60wDHrztHtiElGdY2bf0rnzYF7JryJH87jCD8DINhCPXo0KHx44SH4bnNQTCjw7zlFLTPg2UNCu3o93GWzULtk%2FxdbbSzcDvjUvZnevXBWBYT53%2B507dik9WfqVRNewP7S2quoNn65d1m9lHRrU0sTz0gZYXhxMvJ2LPZLfH5WSwcpM0gsc4nzs9ylYQOYKdgOYBuHA0X%2F7ZvtsMNyLIsxof25eaJek1vWHk9VEn2VKd3iO5mWg49vichjC6sycygaBMAnNzCTcw%2BqtnF%2FdJngyM35b7pvgNdXLp5O4KupzrVBw%2B8kxaSgH9RMPO%2BSLp2gQKT76RhwpGZBIPkSTnO1gjN6sEvuD2VdsMQTy5wUboUviCqI3ghzdXiEQ%2B7UH7HVcIppZTfTU0Phe9tNJgCc8n7UgSaFvLwQ%2BqrZj9ZT62GpvlQiiznzUSGLtM22OSgAURjAJlptq1HIrGsS7vsw06ecwQY6pgFL4m%2Fpj6F5DbqxXSCsZgq53CnQvIl21xt%2F%2FqSnde3cN%2FfI2TUWxwzRVz%2BpxQlpTkBqgf62bw07tmjVgk37%2FKHTnqKsjMB2V4oRC%2FRXgAEbCfHp9Jxkofp%2FTs9wRcioExhGrhuGWReDyngqeckr4awQuIs8XXr7JZwas4m2Lz1g1x8gBX27Gp4rBQBAV332bpyphNMgAf0gO0lG%2BJ342mM1gF6jZ%2FzU&X-Amz-Signature=5d7836da487bb59dae6a28c46e4a8d63d26fc84ef162afde69b28973436218a6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
