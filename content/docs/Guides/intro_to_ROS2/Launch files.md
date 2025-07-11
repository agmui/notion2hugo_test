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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZCZKR6X%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T004441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbN55d8AhVsL9ZEfvPXBG0jFtgJvs65d%2FEf0V9s%2FJY1AiEA3%2FNJ%2Fd9xag%2FlO2r9Z9QkaiYmCSBwoWfRbmWvKCDSov0qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4%2FlX92evLCynnu0CrcA0VRuW9eYSueIikqfyv2qClgQMZfSoXD0zFuot2wZ%2FeUs6ZOCmMLVW%2FAmG8qi8trp5OA7epoWitVgumKLrb8Ln7kHKelcmUwWB0%2B1wQZlvREUbWWWEH7FeS03DuuNymvy5CFD63xf6ZYnh2wxe3ZBrUUfsuJK35AFKZfpa7T6fYBATPd4Oa5pnbdxJzDDqyv9hAqCZAY2%2FhDkW%2FTU%2BxUXzcB7cAuhd2T39Co5J5v3he91fIxuRXlX76DG8qDQ0VNOjlsLlpTnm3I8sgbk72G4GmMMtr0O2CLanrbg%2FmNjWD5QC9mFyYvPQlm2nF4abub5OZFZvaxXzg%2FBUbFEP%2F9OaApeGsWyTu%2B5bOg6zZjYgiReh%2BScFSoR5VSA9gsPKi49QDoJ3etZsAdiOUXPvxYa%2B2OqjALIrd%2FTkdV%2BRqyAsGs2lA7fbD5dCZH5%2F6TrCuHnX98lUBPNj%2FDULn5%2BkKiH79GBo3coCZegEV%2Bo%2BYhmbbU5ier3AOjzNf%2B0w6uNHsonCAodCUO2yIGxn%2Buh%2FHEdROkRFD5FwU%2BJ2SlUDwSjAu0uthqCcr3XHy3mD0KM1ZZUhOxfG3ENJHc4OTloNwp0JlZBI9v0XwYM0jPb64ivvyDG6YXO6FguZtYemWnMLXNwMMGOqUBdfNGl3pVpWPY68AZwei4nqh0AJs3hZA1vtQxdIJmoA5iOfsMhT7pyv8RmkFYvqtYoiFF2fO35fQIzltWOH8nhLT6jGAQoOuXh%2F%2BmtyaZBilHekp%2Fm1wl%2BXKe%2B28QmgBphBN2ZDxUWqszr9JeLrYMzMNdWz25%2FRus9RdLhKioLEuXQkAs8NZk3A3vKj3WBfqZJo1aH5RdYMK4H7LrM1GCQmX0cQbB&X-Amz-Signature=80e437083593399b453a4c208e7958fcef6b9ab5460d94951291ea2385d0388b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZCZKR6X%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T004441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbN55d8AhVsL9ZEfvPXBG0jFtgJvs65d%2FEf0V9s%2FJY1AiEA3%2FNJ%2Fd9xag%2FlO2r9Z9QkaiYmCSBwoWfRbmWvKCDSov0qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4%2FlX92evLCynnu0CrcA0VRuW9eYSueIikqfyv2qClgQMZfSoXD0zFuot2wZ%2FeUs6ZOCmMLVW%2FAmG8qi8trp5OA7epoWitVgumKLrb8Ln7kHKelcmUwWB0%2B1wQZlvREUbWWWEH7FeS03DuuNymvy5CFD63xf6ZYnh2wxe3ZBrUUfsuJK35AFKZfpa7T6fYBATPd4Oa5pnbdxJzDDqyv9hAqCZAY2%2FhDkW%2FTU%2BxUXzcB7cAuhd2T39Co5J5v3he91fIxuRXlX76DG8qDQ0VNOjlsLlpTnm3I8sgbk72G4GmMMtr0O2CLanrbg%2FmNjWD5QC9mFyYvPQlm2nF4abub5OZFZvaxXzg%2FBUbFEP%2F9OaApeGsWyTu%2B5bOg6zZjYgiReh%2BScFSoR5VSA9gsPKi49QDoJ3etZsAdiOUXPvxYa%2B2OqjALIrd%2FTkdV%2BRqyAsGs2lA7fbD5dCZH5%2F6TrCuHnX98lUBPNj%2FDULn5%2BkKiH79GBo3coCZegEV%2Bo%2BYhmbbU5ier3AOjzNf%2B0w6uNHsonCAodCUO2yIGxn%2Buh%2FHEdROkRFD5FwU%2BJ2SlUDwSjAu0uthqCcr3XHy3mD0KM1ZZUhOxfG3ENJHc4OTloNwp0JlZBI9v0XwYM0jPb64ivvyDG6YXO6FguZtYemWnMLXNwMMGOqUBdfNGl3pVpWPY68AZwei4nqh0AJs3hZA1vtQxdIJmoA5iOfsMhT7pyv8RmkFYvqtYoiFF2fO35fQIzltWOH8nhLT6jGAQoOuXh%2F%2BmtyaZBilHekp%2Fm1wl%2BXKe%2B28QmgBphBN2ZDxUWqszr9JeLrYMzMNdWz25%2FRus9RdLhKioLEuXQkAs8NZk3A3vKj3WBfqZJo1aH5RdYMK4H7LrM1GCQmX0cQbB&X-Amz-Signature=a537d4b2a6503e7bf2d75b48cc97a8df78c306f211d624dd58a9c06bdb9f7090&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZCZKR6X%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T004441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbN55d8AhVsL9ZEfvPXBG0jFtgJvs65d%2FEf0V9s%2FJY1AiEA3%2FNJ%2Fd9xag%2FlO2r9Z9QkaiYmCSBwoWfRbmWvKCDSov0qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4%2FlX92evLCynnu0CrcA0VRuW9eYSueIikqfyv2qClgQMZfSoXD0zFuot2wZ%2FeUs6ZOCmMLVW%2FAmG8qi8trp5OA7epoWitVgumKLrb8Ln7kHKelcmUwWB0%2B1wQZlvREUbWWWEH7FeS03DuuNymvy5CFD63xf6ZYnh2wxe3ZBrUUfsuJK35AFKZfpa7T6fYBATPd4Oa5pnbdxJzDDqyv9hAqCZAY2%2FhDkW%2FTU%2BxUXzcB7cAuhd2T39Co5J5v3he91fIxuRXlX76DG8qDQ0VNOjlsLlpTnm3I8sgbk72G4GmMMtr0O2CLanrbg%2FmNjWD5QC9mFyYvPQlm2nF4abub5OZFZvaxXzg%2FBUbFEP%2F9OaApeGsWyTu%2B5bOg6zZjYgiReh%2BScFSoR5VSA9gsPKi49QDoJ3etZsAdiOUXPvxYa%2B2OqjALIrd%2FTkdV%2BRqyAsGs2lA7fbD5dCZH5%2F6TrCuHnX98lUBPNj%2FDULn5%2BkKiH79GBo3coCZegEV%2Bo%2BYhmbbU5ier3AOjzNf%2B0w6uNHsonCAodCUO2yIGxn%2Buh%2FHEdROkRFD5FwU%2BJ2SlUDwSjAu0uthqCcr3XHy3mD0KM1ZZUhOxfG3ENJHc4OTloNwp0JlZBI9v0XwYM0jPb64ivvyDG6YXO6FguZtYemWnMLXNwMMGOqUBdfNGl3pVpWPY68AZwei4nqh0AJs3hZA1vtQxdIJmoA5iOfsMhT7pyv8RmkFYvqtYoiFF2fO35fQIzltWOH8nhLT6jGAQoOuXh%2F%2BmtyaZBilHekp%2Fm1wl%2BXKe%2B28QmgBphBN2ZDxUWqszr9JeLrYMzMNdWz25%2FRus9RdLhKioLEuXQkAs8NZk3A3vKj3WBfqZJo1aH5RdYMK4H7LrM1GCQmX0cQbB&X-Amz-Signature=2e9104c60f841c63d023ac9669885468e29a49c780d5962f5fdb5d75a80ba077&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
