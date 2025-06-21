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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F4SFDXS%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T033801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDgM8g9UIeAa0sb8dMIBouvsLp6hCdLMU1TB4bhWcogVAiEA2oOpGyUQwG%2BT0AF1yj3GyfGd86alLfEjUg%2FcwXPL3nAqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKGNId%2BhJnwqfgxxyrcA%2F62I5JD6PRISKHOXdJmS6V%2Br2%2BaBEotVBGI%2FGOfc9KgaQk4dewKvcn5qt0cPmJtO8pclwaM7aBQzKFULfOVjNVoGn97ChXXzL2odSIMnn%2FUa5CS9Q3hPBBZKcIEbRLLmnzy95sf2rhZZxWemPIjwnEmUdvdWslZ8hJ7%2FG0BJI3zD4xY%2FbU48sSCYE5EW%2BOtWPIccA0jC0hJZdG0g0Op7%2BgX6YNaHfgAx6WddawhbVnzz10eF9XuTI%2FljqQA5B95I9DE1Nj%2B3RImizoIuytEhfl%2BVcaxHoAY9n0tLa8XjbB4juunbHy2WVPpPPRJqp%2FTORAq5712JqhLizaoDf%2FDRungydnnPihmm4IcQJ3R8jHfT3YEFTNYBd9pqKS0U4JVL2wGMvIXDv7zUbKB%2Fk34UhVDOH7IRluw7h2663JivWzc476HbajDfSDBO1MsZx1wl6Se9uj3PRnRxTbyXaMwnkGRCnwszuYwVj4YpUZeMccN0PH64J6Yok4rd3sL5g731nT8dMY1w40TmEnl4U3e%2F1esNG4AL1ZrLEe%2FZnFZ7keZDv0dJ50VTjPe1hHwqlnVKJSnxMaQcD98LPB3Yfs6rgSwGxDqZ6YkEQAyDZ%2FR1LOdNERTRmIOhNx9ehYGMNWv2MIGOqUB8aFbsBDLGYIX6FdxE4js6XsNc99tbMZdfMZ0d5kx4ZMhk4BJvg1MmV2zlymsBPHll2i4MZKYFalm3n9jd%2Fsf1d97XvlWAtjtDMUd5IGt9HY4acS13CyiVKfegI9IRD%2BjFauCYAqugNFIexNa0aOityLLvHbfaHMxFUmiBAgfWqRADBsZegIbSRrxO4kdG5IFodqkOCsgkgmiQCxoTkhlM1FKCxPv&X-Amz-Signature=e1f9005892557ee1f9db280980dca67264719fc9237f211b10484f38f28d09cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F4SFDXS%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T033801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDgM8g9UIeAa0sb8dMIBouvsLp6hCdLMU1TB4bhWcogVAiEA2oOpGyUQwG%2BT0AF1yj3GyfGd86alLfEjUg%2FcwXPL3nAqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKGNId%2BhJnwqfgxxyrcA%2F62I5JD6PRISKHOXdJmS6V%2Br2%2BaBEotVBGI%2FGOfc9KgaQk4dewKvcn5qt0cPmJtO8pclwaM7aBQzKFULfOVjNVoGn97ChXXzL2odSIMnn%2FUa5CS9Q3hPBBZKcIEbRLLmnzy95sf2rhZZxWemPIjwnEmUdvdWslZ8hJ7%2FG0BJI3zD4xY%2FbU48sSCYE5EW%2BOtWPIccA0jC0hJZdG0g0Op7%2BgX6YNaHfgAx6WddawhbVnzz10eF9XuTI%2FljqQA5B95I9DE1Nj%2B3RImizoIuytEhfl%2BVcaxHoAY9n0tLa8XjbB4juunbHy2WVPpPPRJqp%2FTORAq5712JqhLizaoDf%2FDRungydnnPihmm4IcQJ3R8jHfT3YEFTNYBd9pqKS0U4JVL2wGMvIXDv7zUbKB%2Fk34UhVDOH7IRluw7h2663JivWzc476HbajDfSDBO1MsZx1wl6Se9uj3PRnRxTbyXaMwnkGRCnwszuYwVj4YpUZeMccN0PH64J6Yok4rd3sL5g731nT8dMY1w40TmEnl4U3e%2F1esNG4AL1ZrLEe%2FZnFZ7keZDv0dJ50VTjPe1hHwqlnVKJSnxMaQcD98LPB3Yfs6rgSwGxDqZ6YkEQAyDZ%2FR1LOdNERTRmIOhNx9ehYGMNWv2MIGOqUB8aFbsBDLGYIX6FdxE4js6XsNc99tbMZdfMZ0d5kx4ZMhk4BJvg1MmV2zlymsBPHll2i4MZKYFalm3n9jd%2Fsf1d97XvlWAtjtDMUd5IGt9HY4acS13CyiVKfegI9IRD%2BjFauCYAqugNFIexNa0aOityLLvHbfaHMxFUmiBAgfWqRADBsZegIbSRrxO4kdG5IFodqkOCsgkgmiQCxoTkhlM1FKCxPv&X-Amz-Signature=0feab7c9805995fe6f7d5654c308fbd5c3f1b15087cc745f918148b2382b74a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F4SFDXS%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T033801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDgM8g9UIeAa0sb8dMIBouvsLp6hCdLMU1TB4bhWcogVAiEA2oOpGyUQwG%2BT0AF1yj3GyfGd86alLfEjUg%2FcwXPL3nAqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKGNId%2BhJnwqfgxxyrcA%2F62I5JD6PRISKHOXdJmS6V%2Br2%2BaBEotVBGI%2FGOfc9KgaQk4dewKvcn5qt0cPmJtO8pclwaM7aBQzKFULfOVjNVoGn97ChXXzL2odSIMnn%2FUa5CS9Q3hPBBZKcIEbRLLmnzy95sf2rhZZxWemPIjwnEmUdvdWslZ8hJ7%2FG0BJI3zD4xY%2FbU48sSCYE5EW%2BOtWPIccA0jC0hJZdG0g0Op7%2BgX6YNaHfgAx6WddawhbVnzz10eF9XuTI%2FljqQA5B95I9DE1Nj%2B3RImizoIuytEhfl%2BVcaxHoAY9n0tLa8XjbB4juunbHy2WVPpPPRJqp%2FTORAq5712JqhLizaoDf%2FDRungydnnPihmm4IcQJ3R8jHfT3YEFTNYBd9pqKS0U4JVL2wGMvIXDv7zUbKB%2Fk34UhVDOH7IRluw7h2663JivWzc476HbajDfSDBO1MsZx1wl6Se9uj3PRnRxTbyXaMwnkGRCnwszuYwVj4YpUZeMccN0PH64J6Yok4rd3sL5g731nT8dMY1w40TmEnl4U3e%2F1esNG4AL1ZrLEe%2FZnFZ7keZDv0dJ50VTjPe1hHwqlnVKJSnxMaQcD98LPB3Yfs6rgSwGxDqZ6YkEQAyDZ%2FR1LOdNERTRmIOhNx9ehYGMNWv2MIGOqUB8aFbsBDLGYIX6FdxE4js6XsNc99tbMZdfMZ0d5kx4ZMhk4BJvg1MmV2zlymsBPHll2i4MZKYFalm3n9jd%2Fsf1d97XvlWAtjtDMUd5IGt9HY4acS13CyiVKfegI9IRD%2BjFauCYAqugNFIexNa0aOityLLvHbfaHMxFUmiBAgfWqRADBsZegIbSRrxO4kdG5IFodqkOCsgkgmiQCxoTkhlM1FKCxPv&X-Amz-Signature=ffae3dc6cbede606357cbdd2442f72efd3a2261a3572c3cb05c17511c0bfdf41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
