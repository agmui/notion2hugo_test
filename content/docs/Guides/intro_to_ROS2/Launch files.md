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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWMDPVUC%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T033626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDM03mXUXf8O5nyPfZqzz39ScUcMSiiXLTpk8b9XmTigIhAOcZ6fMXU%2Fv8Wp1e28CfoeECZ27igS%2FklBAQR1BnYBApKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEg%2BWMQDXmFQbgDzgq3APHDvN03lc2fXzssQO2rl0rGkw%2FqfIlS9D%2F5yF%2F39vt8vmnWNHKO1zLFrDzb%2FetGETMrblC5Yrlf8wJvp9Od8gf%2BLIyd5%2B229Uuf9dPa4F4%2BVAEXScyK5GdSs5tCQx%2BlIB%2FUaqbNLAU6Uue2Ra9FxS6AHoJOleW0EtY6vAyfT9buGrLvbtpOSNAYUT9BBSMXykiEzY2CSzeNXFRowIRcbvSmoRiKaqlW20xHqfSs94juqTWiocZN7ykRoY9N7rpgittfXVQn8Hl0aFOPSTWT%2Bqs8fwI6D9ecV%2BGwQdI7QAlV7y8%2FLzgcx1i8%2BE4devBGbk%2FzYSL%2BoKjm5JBSdFFixlcQ298uX1PtVbu86GKo3Et%2BgeAKN%2B1L11%2FR1fW1fcdM4xq%2BobuSJaepE%2FlslXoT74dIWY%2FXu97iy0z80Kn0Xz8E7bLgIGZLn36WVmcndCp7UjeskMV%2FW1Pm%2Fgy6JV7LMGq9swX1asIoKOiURS4old3jl%2F4ZwD9vy9LtMXZyGPg6NZt1mafD%2FbC7KSD1hRDXJw23aej5JW7%2BhWXElPkHE7JhfC3uQvYlsJND3d8D4lPe%2FkzJSNosS78P6v5HZz8PbRsod0%2BfDppNgtn7AKwQP%2BhcZmDCzUf9Xc1vWaq4zDyruTBBjqkAUKf8%2FNbLa6LzUZlANVkWeCRAlfCabLNyTccTVVBser7Jh0FktGVPIa07%2FpDlNjNhMKS5WWSnul%2BebXZ%2FE6kzA4qsoU5J9w10wqRR7BRV0S%2BT%2FEVrJyUlsgbAuZmso%2FvJg%2BJOiI6nxvOvyl3MojPl8dv5rC%2F1h3l5DzGzh94QgOAled7wcEaj2ae%2BMcgYlPiE6rFeQNKX%2FUp1tHqqY05tU9mfrbs&X-Amz-Signature=103aa3b5ed3d05bc7e54d04f1920fedb8090f3d51f394181c2e9759c81d0e40c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWMDPVUC%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T033626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDM03mXUXf8O5nyPfZqzz39ScUcMSiiXLTpk8b9XmTigIhAOcZ6fMXU%2Fv8Wp1e28CfoeECZ27igS%2FklBAQR1BnYBApKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEg%2BWMQDXmFQbgDzgq3APHDvN03lc2fXzssQO2rl0rGkw%2FqfIlS9D%2F5yF%2F39vt8vmnWNHKO1zLFrDzb%2FetGETMrblC5Yrlf8wJvp9Od8gf%2BLIyd5%2B229Uuf9dPa4F4%2BVAEXScyK5GdSs5tCQx%2BlIB%2FUaqbNLAU6Uue2Ra9FxS6AHoJOleW0EtY6vAyfT9buGrLvbtpOSNAYUT9BBSMXykiEzY2CSzeNXFRowIRcbvSmoRiKaqlW20xHqfSs94juqTWiocZN7ykRoY9N7rpgittfXVQn8Hl0aFOPSTWT%2Bqs8fwI6D9ecV%2BGwQdI7QAlV7y8%2FLzgcx1i8%2BE4devBGbk%2FzYSL%2BoKjm5JBSdFFixlcQ298uX1PtVbu86GKo3Et%2BgeAKN%2B1L11%2FR1fW1fcdM4xq%2BobuSJaepE%2FlslXoT74dIWY%2FXu97iy0z80Kn0Xz8E7bLgIGZLn36WVmcndCp7UjeskMV%2FW1Pm%2Fgy6JV7LMGq9swX1asIoKOiURS4old3jl%2F4ZwD9vy9LtMXZyGPg6NZt1mafD%2FbC7KSD1hRDXJw23aej5JW7%2BhWXElPkHE7JhfC3uQvYlsJND3d8D4lPe%2FkzJSNosS78P6v5HZz8PbRsod0%2BfDppNgtn7AKwQP%2BhcZmDCzUf9Xc1vWaq4zDyruTBBjqkAUKf8%2FNbLa6LzUZlANVkWeCRAlfCabLNyTccTVVBser7Jh0FktGVPIa07%2FpDlNjNhMKS5WWSnul%2BebXZ%2FE6kzA4qsoU5J9w10wqRR7BRV0S%2BT%2FEVrJyUlsgbAuZmso%2FvJg%2BJOiI6nxvOvyl3MojPl8dv5rC%2F1h3l5DzGzh94QgOAled7wcEaj2ae%2BMcgYlPiE6rFeQNKX%2FUp1tHqqY05tU9mfrbs&X-Amz-Signature=5f52927aa2f438c772a9b6f4e9d4dc0e3962fb17053409bea0f6994465a92cac&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWMDPVUC%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T033626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDM03mXUXf8O5nyPfZqzz39ScUcMSiiXLTpk8b9XmTigIhAOcZ6fMXU%2Fv8Wp1e28CfoeECZ27igS%2FklBAQR1BnYBApKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEg%2BWMQDXmFQbgDzgq3APHDvN03lc2fXzssQO2rl0rGkw%2FqfIlS9D%2F5yF%2F39vt8vmnWNHKO1zLFrDzb%2FetGETMrblC5Yrlf8wJvp9Od8gf%2BLIyd5%2B229Uuf9dPa4F4%2BVAEXScyK5GdSs5tCQx%2BlIB%2FUaqbNLAU6Uue2Ra9FxS6AHoJOleW0EtY6vAyfT9buGrLvbtpOSNAYUT9BBSMXykiEzY2CSzeNXFRowIRcbvSmoRiKaqlW20xHqfSs94juqTWiocZN7ykRoY9N7rpgittfXVQn8Hl0aFOPSTWT%2Bqs8fwI6D9ecV%2BGwQdI7QAlV7y8%2FLzgcx1i8%2BE4devBGbk%2FzYSL%2BoKjm5JBSdFFixlcQ298uX1PtVbu86GKo3Et%2BgeAKN%2B1L11%2FR1fW1fcdM4xq%2BobuSJaepE%2FlslXoT74dIWY%2FXu97iy0z80Kn0Xz8E7bLgIGZLn36WVmcndCp7UjeskMV%2FW1Pm%2Fgy6JV7LMGq9swX1asIoKOiURS4old3jl%2F4ZwD9vy9LtMXZyGPg6NZt1mafD%2FbC7KSD1hRDXJw23aej5JW7%2BhWXElPkHE7JhfC3uQvYlsJND3d8D4lPe%2FkzJSNosS78P6v5HZz8PbRsod0%2BfDppNgtn7AKwQP%2BhcZmDCzUf9Xc1vWaq4zDyruTBBjqkAUKf8%2FNbLa6LzUZlANVkWeCRAlfCabLNyTccTVVBser7Jh0FktGVPIa07%2FpDlNjNhMKS5WWSnul%2BebXZ%2FE6kzA4qsoU5J9w10wqRR7BRV0S%2BT%2FEVrJyUlsgbAuZmso%2FvJg%2BJOiI6nxvOvyl3MojPl8dv5rC%2F1h3l5DzGzh94QgOAled7wcEaj2ae%2BMcgYlPiE6rFeQNKX%2FUp1tHqqY05tU9mfrbs&X-Amz-Signature=56ac405f314546c50ed8928a29083940c2e3408436cfe58920c42e19fcbb4d64&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
