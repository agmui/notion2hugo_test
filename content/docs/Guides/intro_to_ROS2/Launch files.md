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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AF6L54N%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T034734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBvv4umABge0EuiIsND15vY9DQgeTeJxrvUPnsWJ0gxAIhAPmoBCWuctZs%2FEYYmUD0%2FA%2BxbNcOyJR9zyJh2jNf9COxKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyv%2BsQ8ql7jnRUNZzEq3AOhk7U9x3k3yGi%2FLLO9NQIn5XZaJZdEylrL14L%2BJG24hpFEXdsJ4Q0wtMUi5I1FRYFLr2p%2FwlxOUOveR3MKbcVVFX5IXfEUkcWGbO9j2jRlPFWlcNuA2gmkGlo9NqTh%2Bt5V0F7lL8v%2FBMSBiMKY%2B9GVobfRXmJVqyE5EFypp%2BVHNyFmY2ZcIN3jI6eASnNn%2F2iQGADBW8tnyc%2FUhoxiRZXmDXUbRtTqT%2FLpvKJsbwIOAPFBMW7Un2i7VscdGEaPivRKORVSNUST4RRALa%2FJ%2FlskZFB7591hWEgIXHjC6E9WGZW5%2Bv0hTgGoAENrwjMia6HX9c9aDZWTu%2F3j73G6D%2B46nnVrf9MWpx3YnOTWUN9ibd4kQLpcv7jPxTYZISCBwHpDZjAXbLa5NScgE4hLvnQWGNmu0qCmlBNiGMAiLigvA11b%2FUCxyYW9ziVYFGc115Fvcb71orYgqfjWY1hTBR6fcBwhp8OD1vjRhD%2BUlmUgGNjedkkCo%2FQ7bfa4szgNOcHS24dM%2FeslOZGwDzj1YYFHlt7gX%2FTVtnSR6Kmx8JmYMGjU%2BmXXfPyFbaOIf3AsWxn%2F6INJRhAZETmrNU1flQNKzisN57Kg2LdCJoYCDbavUI1reXDORuHDxgl24zC9tcbDBjqkAe3xhpVCRgDFWvhG2SnL%2BKJPfyeWJWq5WbwM7HTff9arZVydnpk7ZU0YaD8Yov9IvCBaseQWpJBrtFJ9WiNEaILsbYAMCLUk9MgapvM%2FQlP6gGO05q%2BMd2CNbhHzHlTIiyYhhvdZ9IIscI7BIheEFMq1XD8MvjHorptu%2Bt1vKIJahbPqcg4c869sgBYS%2BW5QtXAXMy4x84juoULq1Ex2wwSoWaPO&X-Amz-Signature=80142b5af06e203424ffefe8b9e5c7192f70071b6285fab73c310ac2577d3243&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AF6L54N%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T034734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBvv4umABge0EuiIsND15vY9DQgeTeJxrvUPnsWJ0gxAIhAPmoBCWuctZs%2FEYYmUD0%2FA%2BxbNcOyJR9zyJh2jNf9COxKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyv%2BsQ8ql7jnRUNZzEq3AOhk7U9x3k3yGi%2FLLO9NQIn5XZaJZdEylrL14L%2BJG24hpFEXdsJ4Q0wtMUi5I1FRYFLr2p%2FwlxOUOveR3MKbcVVFX5IXfEUkcWGbO9j2jRlPFWlcNuA2gmkGlo9NqTh%2Bt5V0F7lL8v%2FBMSBiMKY%2B9GVobfRXmJVqyE5EFypp%2BVHNyFmY2ZcIN3jI6eASnNn%2F2iQGADBW8tnyc%2FUhoxiRZXmDXUbRtTqT%2FLpvKJsbwIOAPFBMW7Un2i7VscdGEaPivRKORVSNUST4RRALa%2FJ%2FlskZFB7591hWEgIXHjC6E9WGZW5%2Bv0hTgGoAENrwjMia6HX9c9aDZWTu%2F3j73G6D%2B46nnVrf9MWpx3YnOTWUN9ibd4kQLpcv7jPxTYZISCBwHpDZjAXbLa5NScgE4hLvnQWGNmu0qCmlBNiGMAiLigvA11b%2FUCxyYW9ziVYFGc115Fvcb71orYgqfjWY1hTBR6fcBwhp8OD1vjRhD%2BUlmUgGNjedkkCo%2FQ7bfa4szgNOcHS24dM%2FeslOZGwDzj1YYFHlt7gX%2FTVtnSR6Kmx8JmYMGjU%2BmXXfPyFbaOIf3AsWxn%2F6INJRhAZETmrNU1flQNKzisN57Kg2LdCJoYCDbavUI1reXDORuHDxgl24zC9tcbDBjqkAe3xhpVCRgDFWvhG2SnL%2BKJPfyeWJWq5WbwM7HTff9arZVydnpk7ZU0YaD8Yov9IvCBaseQWpJBrtFJ9WiNEaILsbYAMCLUk9MgapvM%2FQlP6gGO05q%2BMd2CNbhHzHlTIiyYhhvdZ9IIscI7BIheEFMq1XD8MvjHorptu%2Bt1vKIJahbPqcg4c869sgBYS%2BW5QtXAXMy4x84juoULq1Ex2wwSoWaPO&X-Amz-Signature=0cebec96644328f52e51e9cb5bbcde8e59b517980b23cf34b5ec731a510d8daf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AF6L54N%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T034734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBvv4umABge0EuiIsND15vY9DQgeTeJxrvUPnsWJ0gxAIhAPmoBCWuctZs%2FEYYmUD0%2FA%2BxbNcOyJR9zyJh2jNf9COxKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyv%2BsQ8ql7jnRUNZzEq3AOhk7U9x3k3yGi%2FLLO9NQIn5XZaJZdEylrL14L%2BJG24hpFEXdsJ4Q0wtMUi5I1FRYFLr2p%2FwlxOUOveR3MKbcVVFX5IXfEUkcWGbO9j2jRlPFWlcNuA2gmkGlo9NqTh%2Bt5V0F7lL8v%2FBMSBiMKY%2B9GVobfRXmJVqyE5EFypp%2BVHNyFmY2ZcIN3jI6eASnNn%2F2iQGADBW8tnyc%2FUhoxiRZXmDXUbRtTqT%2FLpvKJsbwIOAPFBMW7Un2i7VscdGEaPivRKORVSNUST4RRALa%2FJ%2FlskZFB7591hWEgIXHjC6E9WGZW5%2Bv0hTgGoAENrwjMia6HX9c9aDZWTu%2F3j73G6D%2B46nnVrf9MWpx3YnOTWUN9ibd4kQLpcv7jPxTYZISCBwHpDZjAXbLa5NScgE4hLvnQWGNmu0qCmlBNiGMAiLigvA11b%2FUCxyYW9ziVYFGc115Fvcb71orYgqfjWY1hTBR6fcBwhp8OD1vjRhD%2BUlmUgGNjedkkCo%2FQ7bfa4szgNOcHS24dM%2FeslOZGwDzj1YYFHlt7gX%2FTVtnSR6Kmx8JmYMGjU%2BmXXfPyFbaOIf3AsWxn%2F6INJRhAZETmrNU1flQNKzisN57Kg2LdCJoYCDbavUI1reXDORuHDxgl24zC9tcbDBjqkAe3xhpVCRgDFWvhG2SnL%2BKJPfyeWJWq5WbwM7HTff9arZVydnpk7ZU0YaD8Yov9IvCBaseQWpJBrtFJ9WiNEaILsbYAMCLUk9MgapvM%2FQlP6gGO05q%2BMd2CNbhHzHlTIiyYhhvdZ9IIscI7BIheEFMq1XD8MvjHorptu%2Bt1vKIJahbPqcg4c869sgBYS%2BW5QtXAXMy4x84juoULq1Ex2wwSoWaPO&X-Amz-Signature=0f252335870808b9d243705cd07d54cc36f0b47728ee4a1a8f219adfa4dfd9fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
