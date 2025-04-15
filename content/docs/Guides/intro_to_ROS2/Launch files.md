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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXLQ2FNZ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T061238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2BGaNVTV7zP%2Bi8dWw4JhvbfFsiLbbI4Xh%2BVc%2FintIq%2FAiBW6bTHTo6hd6iDF0k%2BeMU2qicJlT4HmGH2yGPES6VO8ir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMl61LYw10vQT6FtGOKtwDurbzj8IbekPwUqlHx3StjiV4uUFFhbtkhG3q4Komx5M8D7AACtOvenmMt7WZzVZofjrIdYjeOf8fZdnWQQKcXnmQ4XY%2F19e5EodbeNpD1je9fOTCO2wPnvFnu1Wmlbz6rWbNEBbv0EQgZ9DKldCcv9D7%2F3DuPLdss9xqeG7sfpHgQ6B0EsudiEaM7vaSpu%2Bd4Whdtezhjq15k711cLmHDeN48li0ysUFe9m2Rx5%2Bwqs4u21GM7unHf%2Fdz97nYfISJcgypffywhUQhMpni1Lv%2B1LLYAXz9Oz0AreVVPPvmScHQFfaG3%2Bq2mJFRuc5S8oz2T94k17RFfafHyjQac6NbRxDKONPFQd3MygHgtMqoDY9DvGRwM3RqiLrwQmC78z557RwdwSYcrc%2BYsJfZo9O7KuchTgy9lTmzt0iDIPFc11kVbgzXbbC9oK%2BHiph6IzCk8G3G50l0GkD8KWybJcj%2BwTCQ%2BrU6Gj%2BkYB4ltjz8WwBRksiknSRp5USkuH43W7kRYhtjQQAYaFmIl8DwZM7Amm%2FnoYHAP2Az1%2BjI0bh6SfZr3QaDmyf8fElwYBawE5hQFyxTBKT4sPh9UxQeiO26oY3d71uehvinqHDYW8bWedd337fJ%2B2DuCG4lMgwsur3vwY6pgHA9s8OQPZoGGyPGQYjXlvtnVnJ3cC4vnjimw%2B6k5j3EQjrVjxamsTN0gGo2EnoqxEeygRoGb0UsTP3ez38PkQ63kG8FkahLNW7lova5qIjhKTWoUKtBKy8KwaLgrvd%2BuqE7dQlzYCQWOEF0YEX5uAYE%2FzAKiPklwAaaztrgyLpuqlbpwJzOTaAzfOsA6S0d4qqsACgi4t%2BIaYcCkETTd8TyHTYec1h&X-Amz-Signature=ec6ae7c7a3bf7d4ee87d301304b8d6fbce8faaef869ecb3709855a49a1b97728&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXLQ2FNZ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T061238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2BGaNVTV7zP%2Bi8dWw4JhvbfFsiLbbI4Xh%2BVc%2FintIq%2FAiBW6bTHTo6hd6iDF0k%2BeMU2qicJlT4HmGH2yGPES6VO8ir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMl61LYw10vQT6FtGOKtwDurbzj8IbekPwUqlHx3StjiV4uUFFhbtkhG3q4Komx5M8D7AACtOvenmMt7WZzVZofjrIdYjeOf8fZdnWQQKcXnmQ4XY%2F19e5EodbeNpD1je9fOTCO2wPnvFnu1Wmlbz6rWbNEBbv0EQgZ9DKldCcv9D7%2F3DuPLdss9xqeG7sfpHgQ6B0EsudiEaM7vaSpu%2Bd4Whdtezhjq15k711cLmHDeN48li0ysUFe9m2Rx5%2Bwqs4u21GM7unHf%2Fdz97nYfISJcgypffywhUQhMpni1Lv%2B1LLYAXz9Oz0AreVVPPvmScHQFfaG3%2Bq2mJFRuc5S8oz2T94k17RFfafHyjQac6NbRxDKONPFQd3MygHgtMqoDY9DvGRwM3RqiLrwQmC78z557RwdwSYcrc%2BYsJfZo9O7KuchTgy9lTmzt0iDIPFc11kVbgzXbbC9oK%2BHiph6IzCk8G3G50l0GkD8KWybJcj%2BwTCQ%2BrU6Gj%2BkYB4ltjz8WwBRksiknSRp5USkuH43W7kRYhtjQQAYaFmIl8DwZM7Amm%2FnoYHAP2Az1%2BjI0bh6SfZr3QaDmyf8fElwYBawE5hQFyxTBKT4sPh9UxQeiO26oY3d71uehvinqHDYW8bWedd337fJ%2B2DuCG4lMgwsur3vwY6pgHA9s8OQPZoGGyPGQYjXlvtnVnJ3cC4vnjimw%2B6k5j3EQjrVjxamsTN0gGo2EnoqxEeygRoGb0UsTP3ez38PkQ63kG8FkahLNW7lova5qIjhKTWoUKtBKy8KwaLgrvd%2BuqE7dQlzYCQWOEF0YEX5uAYE%2FzAKiPklwAaaztrgyLpuqlbpwJzOTaAzfOsA6S0d4qqsACgi4t%2BIaYcCkETTd8TyHTYec1h&X-Amz-Signature=92e506986077ded644c2151d36d23efa6118035f9553deb4fd2fe547858dc2ff&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXLQ2FNZ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T061238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2BGaNVTV7zP%2Bi8dWw4JhvbfFsiLbbI4Xh%2BVc%2FintIq%2FAiBW6bTHTo6hd6iDF0k%2BeMU2qicJlT4HmGH2yGPES6VO8ir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMl61LYw10vQT6FtGOKtwDurbzj8IbekPwUqlHx3StjiV4uUFFhbtkhG3q4Komx5M8D7AACtOvenmMt7WZzVZofjrIdYjeOf8fZdnWQQKcXnmQ4XY%2F19e5EodbeNpD1je9fOTCO2wPnvFnu1Wmlbz6rWbNEBbv0EQgZ9DKldCcv9D7%2F3DuPLdss9xqeG7sfpHgQ6B0EsudiEaM7vaSpu%2Bd4Whdtezhjq15k711cLmHDeN48li0ysUFe9m2Rx5%2Bwqs4u21GM7unHf%2Fdz97nYfISJcgypffywhUQhMpni1Lv%2B1LLYAXz9Oz0AreVVPPvmScHQFfaG3%2Bq2mJFRuc5S8oz2T94k17RFfafHyjQac6NbRxDKONPFQd3MygHgtMqoDY9DvGRwM3RqiLrwQmC78z557RwdwSYcrc%2BYsJfZo9O7KuchTgy9lTmzt0iDIPFc11kVbgzXbbC9oK%2BHiph6IzCk8G3G50l0GkD8KWybJcj%2BwTCQ%2BrU6Gj%2BkYB4ltjz8WwBRksiknSRp5USkuH43W7kRYhtjQQAYaFmIl8DwZM7Amm%2FnoYHAP2Az1%2BjI0bh6SfZr3QaDmyf8fElwYBawE5hQFyxTBKT4sPh9UxQeiO26oY3d71uehvinqHDYW8bWedd337fJ%2B2DuCG4lMgwsur3vwY6pgHA9s8OQPZoGGyPGQYjXlvtnVnJ3cC4vnjimw%2B6k5j3EQjrVjxamsTN0gGo2EnoqxEeygRoGb0UsTP3ez38PkQ63kG8FkahLNW7lova5qIjhKTWoUKtBKy8KwaLgrvd%2BuqE7dQlzYCQWOEF0YEX5uAYE%2FzAKiPklwAaaztrgyLpuqlbpwJzOTaAzfOsA6S0d4qqsACgi4t%2BIaYcCkETTd8TyHTYec1h&X-Amz-Signature=8433aa8a35c5624029e8c6a318b5c794620bb36f2e3f59277855a3d5c28d0ae7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
