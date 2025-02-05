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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDYBGOYC%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T230740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDGWw85NQGsicsYQRiFIl59dAg4rIMu45pXQrresWvqFQIgb2n8ELpZFOobYGs637sSEUhccLYzwGQQclLDIKl8Gvcq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDO0pRVndwtMomyaVWCrcAzKn2%2BcnG5NE6hBhZ5LIRJ%2BN5tNiMRyl5V3DPdnC99GSgvAZGMIPPm9qCXV%2BNIJOE9lihsySwWGp%2FJJmlWCRb43GUzZ1JiLbxcdIo4gjxReWIPFt3XGO%2BG3JhT0%2Fun0u8i25FnsfiAO93rPz3SyZhX7GmPDLh3SIVoD12fpkUXED%2FT2HVSmAYekgGL1wW%2FvyPfj78X7VIlzvYcutVgXS90QIAJgkj61GMvtNJccShZwDyZsyoS7ck1PgfThAIqM%2FRO1pcvdE3gauf109f7q8NxL4a0kA1TGbfv5c75RnxO3ToRXW1ZlGGFzYFNcnt0mBmhTPqqcXE8jjqQONxX2IGTRNvNhenaejtKPer7ce6GhosWVNTvNp4pIeMAqxt9%2F%2FvvK0QV0IyEn4ebkEa2LOhqZyYjGlLPxVugKBIfcqeboa8CrLaqxDLgkAAc7dByCISyTQlSELeVbkKUNLceHHbaofGlhOPbRhuZieNrbvDR8ubWdfNL%2FWGB7hP5MqSxYv%2FQpvKCzqUNPyCxB8PHt8G2vs83SuqEXIRKTvBOEAMo95Gknhff%2BxQj9zTUcpgN62NvrtmarHN%2FNUCMuQvWgWM08zAf2w6tO5eQOG0FU6GmMIvYM8v2FbE0mnW7G%2BMNO7jr0GOqUBgMQAp05tLYpR%2BVBS%2Bzhs%2FrOiPBi9X%2FLqJugtFg8RztM%2BrgvzGN3gOliriI%2FgbRAmyjD3x7L0odsv%2FCAU9E7vtgAzqDkMOIjJ7QlqMA0AoJTxkqTd9c%2Fu0phGfokayknVKxv2WVLmdapakUQM4WAOUCixjK9efzWtbqvN3hlk0hPCTJUNujtNJ4NnYNktIsgLefcNiG82lcwdFRn3gUbPZorn73mt&X-Amz-Signature=9172ece5e6a69ac0ee96937360cd493f6f0a9cc9313b4b27be18bb7348f24676&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDYBGOYC%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T230740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDGWw85NQGsicsYQRiFIl59dAg4rIMu45pXQrresWvqFQIgb2n8ELpZFOobYGs637sSEUhccLYzwGQQclLDIKl8Gvcq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDO0pRVndwtMomyaVWCrcAzKn2%2BcnG5NE6hBhZ5LIRJ%2BN5tNiMRyl5V3DPdnC99GSgvAZGMIPPm9qCXV%2BNIJOE9lihsySwWGp%2FJJmlWCRb43GUzZ1JiLbxcdIo4gjxReWIPFt3XGO%2BG3JhT0%2Fun0u8i25FnsfiAO93rPz3SyZhX7GmPDLh3SIVoD12fpkUXED%2FT2HVSmAYekgGL1wW%2FvyPfj78X7VIlzvYcutVgXS90QIAJgkj61GMvtNJccShZwDyZsyoS7ck1PgfThAIqM%2FRO1pcvdE3gauf109f7q8NxL4a0kA1TGbfv5c75RnxO3ToRXW1ZlGGFzYFNcnt0mBmhTPqqcXE8jjqQONxX2IGTRNvNhenaejtKPer7ce6GhosWVNTvNp4pIeMAqxt9%2F%2FvvK0QV0IyEn4ebkEa2LOhqZyYjGlLPxVugKBIfcqeboa8CrLaqxDLgkAAc7dByCISyTQlSELeVbkKUNLceHHbaofGlhOPbRhuZieNrbvDR8ubWdfNL%2FWGB7hP5MqSxYv%2FQpvKCzqUNPyCxB8PHt8G2vs83SuqEXIRKTvBOEAMo95Gknhff%2BxQj9zTUcpgN62NvrtmarHN%2FNUCMuQvWgWM08zAf2w6tO5eQOG0FU6GmMIvYM8v2FbE0mnW7G%2BMNO7jr0GOqUBgMQAp05tLYpR%2BVBS%2Bzhs%2FrOiPBi9X%2FLqJugtFg8RztM%2BrgvzGN3gOliriI%2FgbRAmyjD3x7L0odsv%2FCAU9E7vtgAzqDkMOIjJ7QlqMA0AoJTxkqTd9c%2Fu0phGfokayknVKxv2WVLmdapakUQM4WAOUCixjK9efzWtbqvN3hlk0hPCTJUNujtNJ4NnYNktIsgLefcNiG82lcwdFRn3gUbPZorn73mt&X-Amz-Signature=35e2be4b92d5b49f3f4db126251038b960d763fc1c96ccb1093d4dc3f762b627&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDYBGOYC%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T230740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDGWw85NQGsicsYQRiFIl59dAg4rIMu45pXQrresWvqFQIgb2n8ELpZFOobYGs637sSEUhccLYzwGQQclLDIKl8Gvcq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDO0pRVndwtMomyaVWCrcAzKn2%2BcnG5NE6hBhZ5LIRJ%2BN5tNiMRyl5V3DPdnC99GSgvAZGMIPPm9qCXV%2BNIJOE9lihsySwWGp%2FJJmlWCRb43GUzZ1JiLbxcdIo4gjxReWIPFt3XGO%2BG3JhT0%2Fun0u8i25FnsfiAO93rPz3SyZhX7GmPDLh3SIVoD12fpkUXED%2FT2HVSmAYekgGL1wW%2FvyPfj78X7VIlzvYcutVgXS90QIAJgkj61GMvtNJccShZwDyZsyoS7ck1PgfThAIqM%2FRO1pcvdE3gauf109f7q8NxL4a0kA1TGbfv5c75RnxO3ToRXW1ZlGGFzYFNcnt0mBmhTPqqcXE8jjqQONxX2IGTRNvNhenaejtKPer7ce6GhosWVNTvNp4pIeMAqxt9%2F%2FvvK0QV0IyEn4ebkEa2LOhqZyYjGlLPxVugKBIfcqeboa8CrLaqxDLgkAAc7dByCISyTQlSELeVbkKUNLceHHbaofGlhOPbRhuZieNrbvDR8ubWdfNL%2FWGB7hP5MqSxYv%2FQpvKCzqUNPyCxB8PHt8G2vs83SuqEXIRKTvBOEAMo95Gknhff%2BxQj9zTUcpgN62NvrtmarHN%2FNUCMuQvWgWM08zAf2w6tO5eQOG0FU6GmMIvYM8v2FbE0mnW7G%2BMNO7jr0GOqUBgMQAp05tLYpR%2BVBS%2Bzhs%2FrOiPBi9X%2FLqJugtFg8RztM%2BrgvzGN3gOliriI%2FgbRAmyjD3x7L0odsv%2FCAU9E7vtgAzqDkMOIjJ7QlqMA0AoJTxkqTd9c%2Fu0phGfokayknVKxv2WVLmdapakUQM4WAOUCixjK9efzWtbqvN3hlk0hPCTJUNujtNJ4NnYNktIsgLefcNiG82lcwdFRn3gUbPZorn73mt&X-Amz-Signature=45cb4e40621832b37b7c5eb9b459309b8c600228fbcc21da21b79f857a67d7dc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
