---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OLEJRXM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiH7BGrk%2BYJPAml1rl9feN2%2BCkacoVkkJIPrE8oHSfTgIgBkeZR2Uk7F8SHRmuWeg1J183uihD8gnGsE%2BxPQ05cmQq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDCB46H1z3fBZHvjq0CrcAzcTBWbgZecZFvvUrSOHbKRYB%2FMv%2BFDUV%2BaFX2NrjYSu2rLctSXw5xps2uzTc%2FONyZvZc7mWX1Xfaoi642PABivM3sVn%2Fm%2FA84TLM1J6f%2BudV3AbVeMT1c6wWG9us95n4aEbEiJ3PG7ccWDGxwD8GBNiLyGebVniDkMQCKR3auVEt6eAbR7mNKDbELuZH30dhgci74aZFvCwQ3hEzXDBLJWbCbbqMdispwjYy6l0mA5HwMON3JWBttsqw3zyjBa4LqUSDaNifMLOPft2F8nTEHZAA72PpI89%2FAtWDVcscmdxp7nY4S4kB1eZxkZM3seoZ7cGVcNhnAHl1iCdMsi73i%2F1tnkrHH68W8nUvGQ%2F2K83EFjCT29zXh50CBVCgPMjhGUBoqRESPOYwevKx56A0AiRt2ZjOaumdNLAf3dq3NFcPPQT2AqJO9RRvh9L6%2Fuw6kBkXOwTNCGxgGERXDqWqTiWgeD2vK0br4Jp4rTiE6ci0bWGojLyywR8w9jA29Q8Gj10NiJviEXveTCocC3cRGavFG2DSbEETSeXxMcE67%2FxFzqILjlOMGFZiWqiLrI4IkCdvrBTQW3esWRYJhiB4Nd%2BcPoRMsXbuVMSXK6c2o4pWPAloyG7wh%2FG3kioMJfG8cQGOqUBEjZoii3RECxZh23sNYp36%2BnGhDPcNeglZioZSzxVZxj1%2BVAJrJsfCd%2FdeYBlI22Bg%2FA4pRHnbelB4fgooAn5MoMoCFotIKVZ2jzUL4TvUJR%2FHYzSSXKz9O3He7aDWcgGpeFHbtfYGa40ISVV55zbEkYzhmjeWIdy1jDHwYDiZ0Q8Nj6hWDfzTlQWzNM0SP03OI4vq2KxIpSxJD%2B015at%2F9%2FbUkey&X-Amz-Signature=4e7c160c5babf8a58390ce51954b394ca06229967bf0c25b5285b9c13672db1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OLEJRXM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiH7BGrk%2BYJPAml1rl9feN2%2BCkacoVkkJIPrE8oHSfTgIgBkeZR2Uk7F8SHRmuWeg1J183uihD8gnGsE%2BxPQ05cmQq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDCB46H1z3fBZHvjq0CrcAzcTBWbgZecZFvvUrSOHbKRYB%2FMv%2BFDUV%2BaFX2NrjYSu2rLctSXw5xps2uzTc%2FONyZvZc7mWX1Xfaoi642PABivM3sVn%2Fm%2FA84TLM1J6f%2BudV3AbVeMT1c6wWG9us95n4aEbEiJ3PG7ccWDGxwD8GBNiLyGebVniDkMQCKR3auVEt6eAbR7mNKDbELuZH30dhgci74aZFvCwQ3hEzXDBLJWbCbbqMdispwjYy6l0mA5HwMON3JWBttsqw3zyjBa4LqUSDaNifMLOPft2F8nTEHZAA72PpI89%2FAtWDVcscmdxp7nY4S4kB1eZxkZM3seoZ7cGVcNhnAHl1iCdMsi73i%2F1tnkrHH68W8nUvGQ%2F2K83EFjCT29zXh50CBVCgPMjhGUBoqRESPOYwevKx56A0AiRt2ZjOaumdNLAf3dq3NFcPPQT2AqJO9RRvh9L6%2Fuw6kBkXOwTNCGxgGERXDqWqTiWgeD2vK0br4Jp4rTiE6ci0bWGojLyywR8w9jA29Q8Gj10NiJviEXveTCocC3cRGavFG2DSbEETSeXxMcE67%2FxFzqILjlOMGFZiWqiLrI4IkCdvrBTQW3esWRYJhiB4Nd%2BcPoRMsXbuVMSXK6c2o4pWPAloyG7wh%2FG3kioMJfG8cQGOqUBEjZoii3RECxZh23sNYp36%2BnGhDPcNeglZioZSzxVZxj1%2BVAJrJsfCd%2FdeYBlI22Bg%2FA4pRHnbelB4fgooAn5MoMoCFotIKVZ2jzUL4TvUJR%2FHYzSSXKz9O3He7aDWcgGpeFHbtfYGa40ISVV55zbEkYzhmjeWIdy1jDHwYDiZ0Q8Nj6hWDfzTlQWzNM0SP03OI4vq2KxIpSxJD%2B015at%2F9%2FbUkey&X-Amz-Signature=868b7b6ccc802df6f24caede46fdc83b82d0d543c3f421168b87f57aaeadfaba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OLEJRXM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiH7BGrk%2BYJPAml1rl9feN2%2BCkacoVkkJIPrE8oHSfTgIgBkeZR2Uk7F8SHRmuWeg1J183uihD8gnGsE%2BxPQ05cmQq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDCB46H1z3fBZHvjq0CrcAzcTBWbgZecZFvvUrSOHbKRYB%2FMv%2BFDUV%2BaFX2NrjYSu2rLctSXw5xps2uzTc%2FONyZvZc7mWX1Xfaoi642PABivM3sVn%2Fm%2FA84TLM1J6f%2BudV3AbVeMT1c6wWG9us95n4aEbEiJ3PG7ccWDGxwD8GBNiLyGebVniDkMQCKR3auVEt6eAbR7mNKDbELuZH30dhgci74aZFvCwQ3hEzXDBLJWbCbbqMdispwjYy6l0mA5HwMON3JWBttsqw3zyjBa4LqUSDaNifMLOPft2F8nTEHZAA72PpI89%2FAtWDVcscmdxp7nY4S4kB1eZxkZM3seoZ7cGVcNhnAHl1iCdMsi73i%2F1tnkrHH68W8nUvGQ%2F2K83EFjCT29zXh50CBVCgPMjhGUBoqRESPOYwevKx56A0AiRt2ZjOaumdNLAf3dq3NFcPPQT2AqJO9RRvh9L6%2Fuw6kBkXOwTNCGxgGERXDqWqTiWgeD2vK0br4Jp4rTiE6ci0bWGojLyywR8w9jA29Q8Gj10NiJviEXveTCocC3cRGavFG2DSbEETSeXxMcE67%2FxFzqILjlOMGFZiWqiLrI4IkCdvrBTQW3esWRYJhiB4Nd%2BcPoRMsXbuVMSXK6c2o4pWPAloyG7wh%2FG3kioMJfG8cQGOqUBEjZoii3RECxZh23sNYp36%2BnGhDPcNeglZioZSzxVZxj1%2BVAJrJsfCd%2FdeYBlI22Bg%2FA4pRHnbelB4fgooAn5MoMoCFotIKVZ2jzUL4TvUJR%2FHYzSSXKz9O3He7aDWcgGpeFHbtfYGa40ISVV55zbEkYzhmjeWIdy1jDHwYDiZ0Q8Nj6hWDfzTlQWzNM0SP03OI4vq2KxIpSxJD%2B015at%2F9%2FbUkey&X-Amz-Signature=e44e781791019711518a48d27b4070ce4ccee72fb37dd8a72692e0610a6bceaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
