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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKBHTRAH%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICYjdt8QRTK4xfmJsp7SjHiQ16ZyH25iJhpsb%2BkWJxf4AiB349hHv9aP4CMhRIvNrOvM7DLAW57ur3jugqMy8%2Ff7CCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnjpJYW%2Bw5UwWa9TOKtwDzHvtNrWtC1j1A9FpG9yX7hQyH27eluLgCe%2BS23e3KdnhHrSnPqJoMWwq2lT9qx%2F9r27eYpptLUMHJNN%2FfqS3VC2UT7NvM0%2BbflELJo8AL0uHcIPTD9bPHmHsVtINLrmnZ3t%2F2HJ5wwwtJgVjHkh4op%2F7GJkkjZAGx8%2FZgAHfghfLJaIeNH36LfMZ0Zg%2BEqXr9Zzf%2FW8pWihUKQZepuaAX3F26Hkzl5tBTNPfn5iQnLXKDaxOlQIEEj%2Fyyjo3OHKW90hj1FJ6SHFvRoqw420yvCbwFADq743b%2BUWgGVBnHZwTstVpNUxPhfX8oEKA2ijx6v2SnN2BqunWPjAgj%2FHH6BKYLXT3NDI5FZqFeQwARo6k9t522L%2FoANFoLx39w4V5%2Fx%2BVvPUmlsTx1d9b6uKyeARwJkjFhkMWs6jfqcLlI%2FKEdMLl8Bd7G2gI14Kw2isYu04DaBSXUrjvZxt8Wlpp0G471%2FScJ7jdGGb3I7SDEzI3%2BjyULFEN7EnMtPvSBhTff2Gi6UoFkFtq3%2FfK8En23d57HJ6krx%2B5sRyHG1tqyn2aI%2F%2FbRb9B9snrQRlmfjGDx6VC6HWPaMqMkd1%2F80KZOkRM%2Ba6fZ8739HyyGR39sGDi6wfjpKPlB1MG%2Fj8wwqPKvgY6pgE%2FZa4pYhsTjNHpSUTF9%2FAPKIsF3Mi8EntVgjpL0WM%2FBdSHjtM1EQLx1KIq%2Fps%2Bn3e%2FMeWjCK3bNO6UKHC%2FEA737IETS6uWzRGcYeFLUN4kn9Mhc21rBdkBILHkO%2FLOtarHva33KLi8Hdz1k9V9GYWzevGJdD%2BQfYvGKvI3D1VTCgnbQWiFETRJwZk2VvXVyUOWsCFPVPvbzf9haiixixTXUfLekcjl&X-Amz-Signature=5a85fcab153d301eede8a6ab752157ecee6f9489f12565db9983d58374f08004&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKBHTRAH%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICYjdt8QRTK4xfmJsp7SjHiQ16ZyH25iJhpsb%2BkWJxf4AiB349hHv9aP4CMhRIvNrOvM7DLAW57ur3jugqMy8%2Ff7CCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnjpJYW%2Bw5UwWa9TOKtwDzHvtNrWtC1j1A9FpG9yX7hQyH27eluLgCe%2BS23e3KdnhHrSnPqJoMWwq2lT9qx%2F9r27eYpptLUMHJNN%2FfqS3VC2UT7NvM0%2BbflELJo8AL0uHcIPTD9bPHmHsVtINLrmnZ3t%2F2HJ5wwwtJgVjHkh4op%2F7GJkkjZAGx8%2FZgAHfghfLJaIeNH36LfMZ0Zg%2BEqXr9Zzf%2FW8pWihUKQZepuaAX3F26Hkzl5tBTNPfn5iQnLXKDaxOlQIEEj%2Fyyjo3OHKW90hj1FJ6SHFvRoqw420yvCbwFADq743b%2BUWgGVBnHZwTstVpNUxPhfX8oEKA2ijx6v2SnN2BqunWPjAgj%2FHH6BKYLXT3NDI5FZqFeQwARo6k9t522L%2FoANFoLx39w4V5%2Fx%2BVvPUmlsTx1d9b6uKyeARwJkjFhkMWs6jfqcLlI%2FKEdMLl8Bd7G2gI14Kw2isYu04DaBSXUrjvZxt8Wlpp0G471%2FScJ7jdGGb3I7SDEzI3%2BjyULFEN7EnMtPvSBhTff2Gi6UoFkFtq3%2FfK8En23d57HJ6krx%2B5sRyHG1tqyn2aI%2F%2FbRb9B9snrQRlmfjGDx6VC6HWPaMqMkd1%2F80KZOkRM%2Ba6fZ8739HyyGR39sGDi6wfjpKPlB1MG%2Fj8wwqPKvgY6pgE%2FZa4pYhsTjNHpSUTF9%2FAPKIsF3Mi8EntVgjpL0WM%2FBdSHjtM1EQLx1KIq%2Fps%2Bn3e%2FMeWjCK3bNO6UKHC%2FEA737IETS6uWzRGcYeFLUN4kn9Mhc21rBdkBILHkO%2FLOtarHva33KLi8Hdz1k9V9GYWzevGJdD%2BQfYvGKvI3D1VTCgnbQWiFETRJwZk2VvXVyUOWsCFPVPvbzf9haiixixTXUfLekcjl&X-Amz-Signature=827427bf7c51e9e61270bea1be157c957f65de38b96dbbca6870600cb0e33063&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKBHTRAH%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICYjdt8QRTK4xfmJsp7SjHiQ16ZyH25iJhpsb%2BkWJxf4AiB349hHv9aP4CMhRIvNrOvM7DLAW57ur3jugqMy8%2Ff7CCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnjpJYW%2Bw5UwWa9TOKtwDzHvtNrWtC1j1A9FpG9yX7hQyH27eluLgCe%2BS23e3KdnhHrSnPqJoMWwq2lT9qx%2F9r27eYpptLUMHJNN%2FfqS3VC2UT7NvM0%2BbflELJo8AL0uHcIPTD9bPHmHsVtINLrmnZ3t%2F2HJ5wwwtJgVjHkh4op%2F7GJkkjZAGx8%2FZgAHfghfLJaIeNH36LfMZ0Zg%2BEqXr9Zzf%2FW8pWihUKQZepuaAX3F26Hkzl5tBTNPfn5iQnLXKDaxOlQIEEj%2Fyyjo3OHKW90hj1FJ6SHFvRoqw420yvCbwFADq743b%2BUWgGVBnHZwTstVpNUxPhfX8oEKA2ijx6v2SnN2BqunWPjAgj%2FHH6BKYLXT3NDI5FZqFeQwARo6k9t522L%2FoANFoLx39w4V5%2Fx%2BVvPUmlsTx1d9b6uKyeARwJkjFhkMWs6jfqcLlI%2FKEdMLl8Bd7G2gI14Kw2isYu04DaBSXUrjvZxt8Wlpp0G471%2FScJ7jdGGb3I7SDEzI3%2BjyULFEN7EnMtPvSBhTff2Gi6UoFkFtq3%2FfK8En23d57HJ6krx%2B5sRyHG1tqyn2aI%2F%2FbRb9B9snrQRlmfjGDx6VC6HWPaMqMkd1%2F80KZOkRM%2Ba6fZ8739HyyGR39sGDi6wfjpKPlB1MG%2Fj8wwqPKvgY6pgE%2FZa4pYhsTjNHpSUTF9%2FAPKIsF3Mi8EntVgjpL0WM%2FBdSHjtM1EQLx1KIq%2Fps%2Bn3e%2FMeWjCK3bNO6UKHC%2FEA737IETS6uWzRGcYeFLUN4kn9Mhc21rBdkBILHkO%2FLOtarHva33KLi8Hdz1k9V9GYWzevGJdD%2BQfYvGKvI3D1VTCgnbQWiFETRJwZk2VvXVyUOWsCFPVPvbzf9haiixixTXUfLekcjl&X-Amz-Signature=ebe08e45d2d962ddc895c4d9d7e2c627074109dacf91a15e3f16d9635cf4713b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
