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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RNPPII6%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T170804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIGbjerBp2cri5hMicmLHBwTThAfjG%2B%2FuVQ9moyR8yw%2FjAiBWJL5WOQHSsqLW9FetxqdmbE%2BuwzAtmlEupxx%2FGEtwMCqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsg1IXlndxnV%2Fodk0KtwDU9raVJDdvNkV96lanvcCEGY5CaEv8Nq0vNzO9FAKoGtSgj5uStFx%2F2u9OXBVgLKIUuD6ftByZFKri%2FSDweuuXEHjeSsnCCf5eBJO3xE0JabZyn1EfA%2FOnqZcqmbTIOoKR%2BHaYMPDQCSayMi4UO1x0GpLle4y9mQv%2FAZNBTBc5jAj5AAwEI0YriCXGH1nxIlgMUk4LRF3bI4Z2VAf1x6ENBlQ3CYHvkOZoCk97j3bV%2FZuguJoy9%2BMkE2hcVID2s9%2FkUl8sMPXN7g5F7wNZ7%2B71Hhj8PFkdSY8PvmShjnXkeQrasREi3XS1Sz6T0OGLNPPw%2FmMZoKhnW7wJQb82S3UXaJYOG6A03PmxdU9TcvfRWTDgqV2Q5NZOtj8AEyJ6J6ynVKej0ZQdAQAkx95Zb6FcD3ks7IfXJX%2BgIXokhBOUuaHg9iL4GIlUftwVZ3ChpmFdZ0TAqnkkmzSerSf67jbMGjoUWYwhSp7Jpmm0tOdtvGNUZBpZtwVCJ%2BclWSzqQAanN%2FsCvLuuNCRmexMETmcYWUn%2Fw1cFTTLLWkQ15P8lUFLbSaPDrfiXTurHNs3tC4xO6V3yXtjzmu0LEkwlN5EVS5OoS3NKFSuSxtdgif%2FP1YvJctn96JrtEpqhh0wib7CwQY6pgHGFonZk0L0IOnB8%2Bp%2B8GXY%2FuRgIiLtVzNeMIEaYgOgnSWvAJqJxW2OC4MZ0k1bO7IrbFetGDkBnouOhXchZTPoDBDOnZrKr8BNsE2VyAcemsUXv7hDUPCd5E%2BFnIohiplUGSaYqq5zFaCOvz8iTnsqSaoCXI11jbfAlJIhhaY7K0MSGtmSwgYlSbnHR40T7RB%2Bs1HyUpAMgxT6Xr309duMEpeU9Ilc&X-Amz-Signature=7b89662a96a8e1449b0290400f669d385619e9f4bbb78d9c38daf3974bfe0516&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RNPPII6%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T170804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIGbjerBp2cri5hMicmLHBwTThAfjG%2B%2FuVQ9moyR8yw%2FjAiBWJL5WOQHSsqLW9FetxqdmbE%2BuwzAtmlEupxx%2FGEtwMCqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsg1IXlndxnV%2Fodk0KtwDU9raVJDdvNkV96lanvcCEGY5CaEv8Nq0vNzO9FAKoGtSgj5uStFx%2F2u9OXBVgLKIUuD6ftByZFKri%2FSDweuuXEHjeSsnCCf5eBJO3xE0JabZyn1EfA%2FOnqZcqmbTIOoKR%2BHaYMPDQCSayMi4UO1x0GpLle4y9mQv%2FAZNBTBc5jAj5AAwEI0YriCXGH1nxIlgMUk4LRF3bI4Z2VAf1x6ENBlQ3CYHvkOZoCk97j3bV%2FZuguJoy9%2BMkE2hcVID2s9%2FkUl8sMPXN7g5F7wNZ7%2B71Hhj8PFkdSY8PvmShjnXkeQrasREi3XS1Sz6T0OGLNPPw%2FmMZoKhnW7wJQb82S3UXaJYOG6A03PmxdU9TcvfRWTDgqV2Q5NZOtj8AEyJ6J6ynVKej0ZQdAQAkx95Zb6FcD3ks7IfXJX%2BgIXokhBOUuaHg9iL4GIlUftwVZ3ChpmFdZ0TAqnkkmzSerSf67jbMGjoUWYwhSp7Jpmm0tOdtvGNUZBpZtwVCJ%2BclWSzqQAanN%2FsCvLuuNCRmexMETmcYWUn%2Fw1cFTTLLWkQ15P8lUFLbSaPDrfiXTurHNs3tC4xO6V3yXtjzmu0LEkwlN5EVS5OoS3NKFSuSxtdgif%2FP1YvJctn96JrtEpqhh0wib7CwQY6pgHGFonZk0L0IOnB8%2Bp%2B8GXY%2FuRgIiLtVzNeMIEaYgOgnSWvAJqJxW2OC4MZ0k1bO7IrbFetGDkBnouOhXchZTPoDBDOnZrKr8BNsE2VyAcemsUXv7hDUPCd5E%2BFnIohiplUGSaYqq5zFaCOvz8iTnsqSaoCXI11jbfAlJIhhaY7K0MSGtmSwgYlSbnHR40T7RB%2Bs1HyUpAMgxT6Xr309duMEpeU9Ilc&X-Amz-Signature=45dd141a981748b0eb35e50791438078baead71717c213ed4a8eca9b55589e58&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RNPPII6%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T170804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIGbjerBp2cri5hMicmLHBwTThAfjG%2B%2FuVQ9moyR8yw%2FjAiBWJL5WOQHSsqLW9FetxqdmbE%2BuwzAtmlEupxx%2FGEtwMCqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsg1IXlndxnV%2Fodk0KtwDU9raVJDdvNkV96lanvcCEGY5CaEv8Nq0vNzO9FAKoGtSgj5uStFx%2F2u9OXBVgLKIUuD6ftByZFKri%2FSDweuuXEHjeSsnCCf5eBJO3xE0JabZyn1EfA%2FOnqZcqmbTIOoKR%2BHaYMPDQCSayMi4UO1x0GpLle4y9mQv%2FAZNBTBc5jAj5AAwEI0YriCXGH1nxIlgMUk4LRF3bI4Z2VAf1x6ENBlQ3CYHvkOZoCk97j3bV%2FZuguJoy9%2BMkE2hcVID2s9%2FkUl8sMPXN7g5F7wNZ7%2B71Hhj8PFkdSY8PvmShjnXkeQrasREi3XS1Sz6T0OGLNPPw%2FmMZoKhnW7wJQb82S3UXaJYOG6A03PmxdU9TcvfRWTDgqV2Q5NZOtj8AEyJ6J6ynVKej0ZQdAQAkx95Zb6FcD3ks7IfXJX%2BgIXokhBOUuaHg9iL4GIlUftwVZ3ChpmFdZ0TAqnkkmzSerSf67jbMGjoUWYwhSp7Jpmm0tOdtvGNUZBpZtwVCJ%2BclWSzqQAanN%2FsCvLuuNCRmexMETmcYWUn%2Fw1cFTTLLWkQ15P8lUFLbSaPDrfiXTurHNs3tC4xO6V3yXtjzmu0LEkwlN5EVS5OoS3NKFSuSxtdgif%2FP1YvJctn96JrtEpqhh0wib7CwQY6pgHGFonZk0L0IOnB8%2Bp%2B8GXY%2FuRgIiLtVzNeMIEaYgOgnSWvAJqJxW2OC4MZ0k1bO7IrbFetGDkBnouOhXchZTPoDBDOnZrKr8BNsE2VyAcemsUXv7hDUPCd5E%2BFnIohiplUGSaYqq5zFaCOvz8iTnsqSaoCXI11jbfAlJIhhaY7K0MSGtmSwgYlSbnHR40T7RB%2Bs1HyUpAMgxT6Xr309duMEpeU9Ilc&X-Amz-Signature=1859ebf8ed12b5c3b8faa32e53da91c127182ed8c3d583b4e698846d3b944237&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
