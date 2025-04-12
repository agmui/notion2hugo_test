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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2Y6GP3B%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T003833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDcmAOUoZ4Iohh%2BiueutaH9oHUUprv%2FhPY4VN3tyXJi7gIgVhXVOGIcJ6BQ5diIoHAErBEblJGAnDmr%2FMtAWeubZSEqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuaKhx5K%2Frosxxa6SrcA2FPaR22Ngb0bMwVO137CPV8baSHZNXScnmUlo80EUAtQe4eLj4V5SO0c86ZA3SdsCg6n8foJzHcHgtOG0NFnrH6Q9dKO3nWtKvUC1C1YHOhmKjd1rMc6wQxvoFG3SmtDbQOrQRS4tgTRdyxA26ynLYuwo7akzNXyBwDVPsgUtPLKoQ9c2fcwTUE2ZEL%2B3%2Bprvi9nH7fD%2FJsZ2IleeCoGAf02ZyuuP80iLTVP1o%2FARhi92nNuXY%2BMVxoLoJcNLhCWlhMY81BcAjuhmxvJIyVPGnkV%2F303toAlfTd8GIvUEc%2Bfclh5xMfYTjxVlf%2FlLNQQYEdOJESNaqdn1KOYlCLpPusjVZ%2F%2FphnsELbIWy7BWu%2FTS1bSIHGuX5AxrKePyJu4rJGPW1qzgutDJfGibxmmovFy6pSz5dxDdak5MWuUPqcmD3rhSB7WapldhV5hbB2CahUozohxOIvWI4%2FtQ2eBksmWmu9y0ue%2B5nDvKwuglsq%2BUsi4wrVnbhljx6EzQUE5RCjlyguz7%2BnG%2B2%2Bymr4PGMFg4xQOTL9Ms4%2BNXoJ%2B9qi%2Bt8lmoMWaBJuQkUUmYI8%2BYIw7%2F6ScBKsnYXK0oUEdvVi5DGWnbxU6h4cL1KxGZLedUROQGFj4WWmufUAMP7V5r8GOqUBXPSc8R%2BLLkgwolC1TWcsaSgoOubNeXpXEGgG0f6%2FsKtxLRP5o1DMSpUZoDKKd4Tr9WzVYpxDTgbhTA1g94EIKai79awApN6lsmUpVtgNVUYeiOpDe5JJxEVzYeacSINeSMLjug5pYSXpBzGmyjW%2Bq8NDxaRkf5D1YvzUW3vOafe8pWqVn9QnxnfvnmbNhOhdyzZx40nLfawRiKpbIust1fhLcKlV&X-Amz-Signature=2a9aa50d82a739d7a07c50330689f8f93969a8becc1a4b62c3469af9c78be2c1&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2Y6GP3B%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T003833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDcmAOUoZ4Iohh%2BiueutaH9oHUUprv%2FhPY4VN3tyXJi7gIgVhXVOGIcJ6BQ5diIoHAErBEblJGAnDmr%2FMtAWeubZSEqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuaKhx5K%2Frosxxa6SrcA2FPaR22Ngb0bMwVO137CPV8baSHZNXScnmUlo80EUAtQe4eLj4V5SO0c86ZA3SdsCg6n8foJzHcHgtOG0NFnrH6Q9dKO3nWtKvUC1C1YHOhmKjd1rMc6wQxvoFG3SmtDbQOrQRS4tgTRdyxA26ynLYuwo7akzNXyBwDVPsgUtPLKoQ9c2fcwTUE2ZEL%2B3%2Bprvi9nH7fD%2FJsZ2IleeCoGAf02ZyuuP80iLTVP1o%2FARhi92nNuXY%2BMVxoLoJcNLhCWlhMY81BcAjuhmxvJIyVPGnkV%2F303toAlfTd8GIvUEc%2Bfclh5xMfYTjxVlf%2FlLNQQYEdOJESNaqdn1KOYlCLpPusjVZ%2F%2FphnsELbIWy7BWu%2FTS1bSIHGuX5AxrKePyJu4rJGPW1qzgutDJfGibxmmovFy6pSz5dxDdak5MWuUPqcmD3rhSB7WapldhV5hbB2CahUozohxOIvWI4%2FtQ2eBksmWmu9y0ue%2B5nDvKwuglsq%2BUsi4wrVnbhljx6EzQUE5RCjlyguz7%2BnG%2B2%2Bymr4PGMFg4xQOTL9Ms4%2BNXoJ%2B9qi%2Bt8lmoMWaBJuQkUUmYI8%2BYIw7%2F6ScBKsnYXK0oUEdvVi5DGWnbxU6h4cL1KxGZLedUROQGFj4WWmufUAMP7V5r8GOqUBXPSc8R%2BLLkgwolC1TWcsaSgoOubNeXpXEGgG0f6%2FsKtxLRP5o1DMSpUZoDKKd4Tr9WzVYpxDTgbhTA1g94EIKai79awApN6lsmUpVtgNVUYeiOpDe5JJxEVzYeacSINeSMLjug5pYSXpBzGmyjW%2Bq8NDxaRkf5D1YvzUW3vOafe8pWqVn9QnxnfvnmbNhOhdyzZx40nLfawRiKpbIust1fhLcKlV&X-Amz-Signature=80a99dec095dc1cf28154743ba3fc965fbc9066b72493507c276b84e2b4c65f0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2Y6GP3B%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T003833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDcmAOUoZ4Iohh%2BiueutaH9oHUUprv%2FhPY4VN3tyXJi7gIgVhXVOGIcJ6BQ5diIoHAErBEblJGAnDmr%2FMtAWeubZSEqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuaKhx5K%2Frosxxa6SrcA2FPaR22Ngb0bMwVO137CPV8baSHZNXScnmUlo80EUAtQe4eLj4V5SO0c86ZA3SdsCg6n8foJzHcHgtOG0NFnrH6Q9dKO3nWtKvUC1C1YHOhmKjd1rMc6wQxvoFG3SmtDbQOrQRS4tgTRdyxA26ynLYuwo7akzNXyBwDVPsgUtPLKoQ9c2fcwTUE2ZEL%2B3%2Bprvi9nH7fD%2FJsZ2IleeCoGAf02ZyuuP80iLTVP1o%2FARhi92nNuXY%2BMVxoLoJcNLhCWlhMY81BcAjuhmxvJIyVPGnkV%2F303toAlfTd8GIvUEc%2Bfclh5xMfYTjxVlf%2FlLNQQYEdOJESNaqdn1KOYlCLpPusjVZ%2F%2FphnsELbIWy7BWu%2FTS1bSIHGuX5AxrKePyJu4rJGPW1qzgutDJfGibxmmovFy6pSz5dxDdak5MWuUPqcmD3rhSB7WapldhV5hbB2CahUozohxOIvWI4%2FtQ2eBksmWmu9y0ue%2B5nDvKwuglsq%2BUsi4wrVnbhljx6EzQUE5RCjlyguz7%2BnG%2B2%2Bymr4PGMFg4xQOTL9Ms4%2BNXoJ%2B9qi%2Bt8lmoMWaBJuQkUUmYI8%2BYIw7%2F6ScBKsnYXK0oUEdvVi5DGWnbxU6h4cL1KxGZLedUROQGFj4WWmufUAMP7V5r8GOqUBXPSc8R%2BLLkgwolC1TWcsaSgoOubNeXpXEGgG0f6%2FsKtxLRP5o1DMSpUZoDKKd4Tr9WzVYpxDTgbhTA1g94EIKai79awApN6lsmUpVtgNVUYeiOpDe5JJxEVzYeacSINeSMLjug5pYSXpBzGmyjW%2Bq8NDxaRkf5D1YvzUW3vOafe8pWqVn9QnxnfvnmbNhOhdyzZx40nLfawRiKpbIust1fhLcKlV&X-Amz-Signature=d416ad4312b8588c550adbf8e60dccbaa33673d58ba284dda1b604958b8a47c5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
