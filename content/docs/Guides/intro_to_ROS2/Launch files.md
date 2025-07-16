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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQM25I6G%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T161144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQC6tGXPmXnbXIt1uift7KNvxuwzdk%2Bymqz%2FnUEhtxlcNwIgHMrj6UAVOUGgIcpC9L3ZXCZ7mgG1Fn0Wt%2FqYk5t0YbMq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOSbAggwEiQkCcfmPyrcAzGJ25ASNMRdNVThST9F3rRSjEPBrOx2sepSaYe7zs8gx8lEbrFQ8fgTy5y2BPBD5sMIlTsoaM48BcFUl21hwjo4WLgNWYkdda8WLbTi9eAcGu%2FGYsTzcrZEq7LorImK7R3oUFN4vsu5pVAEeea0isNP88gymzPRUj42lGW2%2BhWJSAY43XpZT5tbdfQYwHNUYWdQPJ%2BkrMwKI9115GQAxzvMvKSBr8FU5ok2Fcv7f%2BO0Urzzg8gDlfRAfnsD9%2F3232YSLdbW4sMyujqVqwQ36UFF76%2BWC%2FQWld91mA5gWDWEeGzdj6lSe%2BltqDkaCzdeV3UiXzCcl2dQZTdkovmPPTXO2XwkrX3jqoN7DXNpifiIxKaMnieth9Lgr75%2F3RuSKs3CwawLsOkKpTgFwMK8oz9HX4LblCfxk2H%2FSOXdclpqOBQerLrKtTiW6UDL4VYJBYtfc0EFNZ6jeZYHcL5%2Fn0lkheiwOFERDMefA%2F83DPUsSJrjN7Cw6RBuxJZ5emzx4pOE603vKcCHLItdSDlkpBOP5M32O6FYryQ5JpL6ZloaMPJxzWmntHfRu2HgSBLkVfapoTEdcX2HScSn%2BxQJuaMbxtE%2F%2Bq7vB5TLZIIoZuxACk06tyq8Ke9w2pYxMM2T3sMGOqUB6B4kRjq6b9PwGhYleum0T09RpGFBZgQAmyowgfZWR9eUPXg4wI7%2Fzed8aT4WIShnybTvQWV5lyXTk8cIuAIcl5%2BPT9aqiKp9KId%2BSciONOZNkqR62Pl3a%2FrlO0SiEh7pvF%2FtxVejBxvV1ZNFxg1MuxNuEnPWb5KxfnwaLnbTk7dMKgCfY12XzXmAfoLhx2VyoDE%2FUdbb7DX4gdHzeNvWYwuAnAPF&X-Amz-Signature=5de46ccf26b47f5fac3df471399715bc1cd67fa6b0ed292df08c16144c5cdad9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQM25I6G%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T161144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQC6tGXPmXnbXIt1uift7KNvxuwzdk%2Bymqz%2FnUEhtxlcNwIgHMrj6UAVOUGgIcpC9L3ZXCZ7mgG1Fn0Wt%2FqYk5t0YbMq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOSbAggwEiQkCcfmPyrcAzGJ25ASNMRdNVThST9F3rRSjEPBrOx2sepSaYe7zs8gx8lEbrFQ8fgTy5y2BPBD5sMIlTsoaM48BcFUl21hwjo4WLgNWYkdda8WLbTi9eAcGu%2FGYsTzcrZEq7LorImK7R3oUFN4vsu5pVAEeea0isNP88gymzPRUj42lGW2%2BhWJSAY43XpZT5tbdfQYwHNUYWdQPJ%2BkrMwKI9115GQAxzvMvKSBr8FU5ok2Fcv7f%2BO0Urzzg8gDlfRAfnsD9%2F3232YSLdbW4sMyujqVqwQ36UFF76%2BWC%2FQWld91mA5gWDWEeGzdj6lSe%2BltqDkaCzdeV3UiXzCcl2dQZTdkovmPPTXO2XwkrX3jqoN7DXNpifiIxKaMnieth9Lgr75%2F3RuSKs3CwawLsOkKpTgFwMK8oz9HX4LblCfxk2H%2FSOXdclpqOBQerLrKtTiW6UDL4VYJBYtfc0EFNZ6jeZYHcL5%2Fn0lkheiwOFERDMefA%2F83DPUsSJrjN7Cw6RBuxJZ5emzx4pOE603vKcCHLItdSDlkpBOP5M32O6FYryQ5JpL6ZloaMPJxzWmntHfRu2HgSBLkVfapoTEdcX2HScSn%2BxQJuaMbxtE%2F%2Bq7vB5TLZIIoZuxACk06tyq8Ke9w2pYxMM2T3sMGOqUB6B4kRjq6b9PwGhYleum0T09RpGFBZgQAmyowgfZWR9eUPXg4wI7%2Fzed8aT4WIShnybTvQWV5lyXTk8cIuAIcl5%2BPT9aqiKp9KId%2BSciONOZNkqR62Pl3a%2FrlO0SiEh7pvF%2FtxVejBxvV1ZNFxg1MuxNuEnPWb5KxfnwaLnbTk7dMKgCfY12XzXmAfoLhx2VyoDE%2FUdbb7DX4gdHzeNvWYwuAnAPF&X-Amz-Signature=0e781880f0a7d63e2cdc6b7a10a5b4c7f2c19caf227a284b249ff4edc8e07ca2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQM25I6G%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T161144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQC6tGXPmXnbXIt1uift7KNvxuwzdk%2Bymqz%2FnUEhtxlcNwIgHMrj6UAVOUGgIcpC9L3ZXCZ7mgG1Fn0Wt%2FqYk5t0YbMq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOSbAggwEiQkCcfmPyrcAzGJ25ASNMRdNVThST9F3rRSjEPBrOx2sepSaYe7zs8gx8lEbrFQ8fgTy5y2BPBD5sMIlTsoaM48BcFUl21hwjo4WLgNWYkdda8WLbTi9eAcGu%2FGYsTzcrZEq7LorImK7R3oUFN4vsu5pVAEeea0isNP88gymzPRUj42lGW2%2BhWJSAY43XpZT5tbdfQYwHNUYWdQPJ%2BkrMwKI9115GQAxzvMvKSBr8FU5ok2Fcv7f%2BO0Urzzg8gDlfRAfnsD9%2F3232YSLdbW4sMyujqVqwQ36UFF76%2BWC%2FQWld91mA5gWDWEeGzdj6lSe%2BltqDkaCzdeV3UiXzCcl2dQZTdkovmPPTXO2XwkrX3jqoN7DXNpifiIxKaMnieth9Lgr75%2F3RuSKs3CwawLsOkKpTgFwMK8oz9HX4LblCfxk2H%2FSOXdclpqOBQerLrKtTiW6UDL4VYJBYtfc0EFNZ6jeZYHcL5%2Fn0lkheiwOFERDMefA%2F83DPUsSJrjN7Cw6RBuxJZ5emzx4pOE603vKcCHLItdSDlkpBOP5M32O6FYryQ5JpL6ZloaMPJxzWmntHfRu2HgSBLkVfapoTEdcX2HScSn%2BxQJuaMbxtE%2F%2Bq7vB5TLZIIoZuxACk06tyq8Ke9w2pYxMM2T3sMGOqUB6B4kRjq6b9PwGhYleum0T09RpGFBZgQAmyowgfZWR9eUPXg4wI7%2Fzed8aT4WIShnybTvQWV5lyXTk8cIuAIcl5%2BPT9aqiKp9KId%2BSciONOZNkqR62Pl3a%2FrlO0SiEh7pvF%2FtxVejBxvV1ZNFxg1MuxNuEnPWb5KxfnwaLnbTk7dMKgCfY12XzXmAfoLhx2VyoDE%2FUdbb7DX4gdHzeNvWYwuAnAPF&X-Amz-Signature=eaa495db3cb0dacff9a5633952e2adc89f46ef9ea611e9fa35788709bcdd13b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
