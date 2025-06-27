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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEWEARFS%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIGFTr1ktMD6CRwgYWOTiaapTuOdJpwpHBfP7EeQVeQndAiEA6evluOzjNcV0pDWK9xoQJ1Y4YYbdnfpZfZNG4PB6wTMq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDGsYbQ0YsQlG1%2FpJQircAyczMhsimHl4qY0QFqZ3AsMMTQ%2F3MSGrO8BN6YvmU1orNighQ7V5fJK1ZJgsfZEYfppteOi2K5lTCNWGDxo0ietuNYoAGhFdJ99aXpKHI9l5iOGHY%2BRssDGuO%2BqZ%2BGyzZ5PUMH2EWtVTQ%2BI%2B%2FxhozVb4mP88OODOmqzdwgGghTttpAmEb8Rac1t83YK5uEjA5UoY8o1ZnM%2FNFXzH9MYYfhm2PfaktaXr9WSBcvsQeB5QJl15IOpRxwD%2Fn7W74lH78QBFXctJwCTq0GRsf%2FePw2ihcFV51bBeP%2BaJrAEMEy1sUh7cXW9NDGXYi3od147cJslz3xsDuvDMTWnlDjZK7QlHLf9HBDJ6FeI%2Fqx5Ur3LCDN2GF%2FWO6gMNbwNqxKprNlQuwyxlOvRLLOByJx%2FKDYOkwCQseUv2bRYQ0%2FLMRB8OEcSO0LLUvWaAtvSXTPfQ2O1Hi29O%2F%2FJs4WOeIItIKK%2FnKld4kTZA3kATXdhihox3MWk4XynTgIYbhIUIh%2BJPViwJN4VP9dplrahG4y1rQqkMDmZPc8llWVMOvgxfGTUSbeej19ry006Er4oqfozVgIH%2BvohILSja9W1QDhXUutDjuM%2BJYFs676LuW9CxBk9i3f4xBdgPXypFCx7mMMbU%2BcIGOqUBj5nYhut6H%2B51NClAm9D5c4VG0B56aU8wfqKyYwGUdSpGqhuqQMcfjrvJHv2IeQdMGE8D4GmgFQdbKXgcNS7SCKNukyVyRxoaADlCEF6ZF0G3YYwhk8ApIKiyd8drk8ie1ryRC4m0KaJ%2FbY%2FrCQ4Zlxz1%2FDfcejWEfc341Jz0gsKbKyjqECd6aa7OStXQ%2BHM%2BBFmUi%2Fv0o%2F6cbQpbR%2FTBGTydaUCJ&X-Amz-Signature=25b02cde7f7ca35ae8b19288e64d987f9d742f6502db2fb61cb37d1f44042ce0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEWEARFS%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIGFTr1ktMD6CRwgYWOTiaapTuOdJpwpHBfP7EeQVeQndAiEA6evluOzjNcV0pDWK9xoQJ1Y4YYbdnfpZfZNG4PB6wTMq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDGsYbQ0YsQlG1%2FpJQircAyczMhsimHl4qY0QFqZ3AsMMTQ%2F3MSGrO8BN6YvmU1orNighQ7V5fJK1ZJgsfZEYfppteOi2K5lTCNWGDxo0ietuNYoAGhFdJ99aXpKHI9l5iOGHY%2BRssDGuO%2BqZ%2BGyzZ5PUMH2EWtVTQ%2BI%2B%2FxhozVb4mP88OODOmqzdwgGghTttpAmEb8Rac1t83YK5uEjA5UoY8o1ZnM%2FNFXzH9MYYfhm2PfaktaXr9WSBcvsQeB5QJl15IOpRxwD%2Fn7W74lH78QBFXctJwCTq0GRsf%2FePw2ihcFV51bBeP%2BaJrAEMEy1sUh7cXW9NDGXYi3od147cJslz3xsDuvDMTWnlDjZK7QlHLf9HBDJ6FeI%2Fqx5Ur3LCDN2GF%2FWO6gMNbwNqxKprNlQuwyxlOvRLLOByJx%2FKDYOkwCQseUv2bRYQ0%2FLMRB8OEcSO0LLUvWaAtvSXTPfQ2O1Hi29O%2F%2FJs4WOeIItIKK%2FnKld4kTZA3kATXdhihox3MWk4XynTgIYbhIUIh%2BJPViwJN4VP9dplrahG4y1rQqkMDmZPc8llWVMOvgxfGTUSbeej19ry006Er4oqfozVgIH%2BvohILSja9W1QDhXUutDjuM%2BJYFs676LuW9CxBk9i3f4xBdgPXypFCx7mMMbU%2BcIGOqUBj5nYhut6H%2B51NClAm9D5c4VG0B56aU8wfqKyYwGUdSpGqhuqQMcfjrvJHv2IeQdMGE8D4GmgFQdbKXgcNS7SCKNukyVyRxoaADlCEF6ZF0G3YYwhk8ApIKiyd8drk8ie1ryRC4m0KaJ%2FbY%2FrCQ4Zlxz1%2FDfcejWEfc341Jz0gsKbKyjqECd6aa7OStXQ%2BHM%2BBFmUi%2Fv0o%2F6cbQpbR%2FTBGTydaUCJ&X-Amz-Signature=d8212a9e1d4b2b26f7a893832b2d2111361fe3263960c726078fe36e8c1f9426&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEWEARFS%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIGFTr1ktMD6CRwgYWOTiaapTuOdJpwpHBfP7EeQVeQndAiEA6evluOzjNcV0pDWK9xoQJ1Y4YYbdnfpZfZNG4PB6wTMq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDGsYbQ0YsQlG1%2FpJQircAyczMhsimHl4qY0QFqZ3AsMMTQ%2F3MSGrO8BN6YvmU1orNighQ7V5fJK1ZJgsfZEYfppteOi2K5lTCNWGDxo0ietuNYoAGhFdJ99aXpKHI9l5iOGHY%2BRssDGuO%2BqZ%2BGyzZ5PUMH2EWtVTQ%2BI%2B%2FxhozVb4mP88OODOmqzdwgGghTttpAmEb8Rac1t83YK5uEjA5UoY8o1ZnM%2FNFXzH9MYYfhm2PfaktaXr9WSBcvsQeB5QJl15IOpRxwD%2Fn7W74lH78QBFXctJwCTq0GRsf%2FePw2ihcFV51bBeP%2BaJrAEMEy1sUh7cXW9NDGXYi3od147cJslz3xsDuvDMTWnlDjZK7QlHLf9HBDJ6FeI%2Fqx5Ur3LCDN2GF%2FWO6gMNbwNqxKprNlQuwyxlOvRLLOByJx%2FKDYOkwCQseUv2bRYQ0%2FLMRB8OEcSO0LLUvWaAtvSXTPfQ2O1Hi29O%2F%2FJs4WOeIItIKK%2FnKld4kTZA3kATXdhihox3MWk4XynTgIYbhIUIh%2BJPViwJN4VP9dplrahG4y1rQqkMDmZPc8llWVMOvgxfGTUSbeej19ry006Er4oqfozVgIH%2BvohILSja9W1QDhXUutDjuM%2BJYFs676LuW9CxBk9i3f4xBdgPXypFCx7mMMbU%2BcIGOqUBj5nYhut6H%2B51NClAm9D5c4VG0B56aU8wfqKyYwGUdSpGqhuqQMcfjrvJHv2IeQdMGE8D4GmgFQdbKXgcNS7SCKNukyVyRxoaADlCEF6ZF0G3YYwhk8ApIKiyd8drk8ie1ryRC4m0KaJ%2FbY%2FrCQ4Zlxz1%2FDfcejWEfc341Jz0gsKbKyjqECd6aa7OStXQ%2BHM%2BBFmUi%2Fv0o%2F6cbQpbR%2FTBGTydaUCJ&X-Amz-Signature=a4ef6956f78969d2239e764b1ab6211efe8d0df685bcc36475fd6cdcfebcb54e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
