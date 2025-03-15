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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M7EJA4U%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T121224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6KdljP%2F1f9wTcQ4gDn9JwA2deUeCjZGdLJY8kK8h7sQIgZ5OupifA4EN1lUM5mt6L5yZJjUn9uOu9AAv66Xb9GeQq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDIbIYAOgppdUT3RLsircA3mk6qSzaOpe%2FCpeksCZQJvgquZMg4EnCnqAY4QQ4w%2FSrH%2FPfXT4GKoWVy7NzkR68FWI6fdIaVLv%2BMUNStIWw%2FvNrtMRE7wnEAaCFuCGaUzPcdRamRLvTr4zWt0hOqE1koetlOyd8tlCddIUTbygmH5VjJYA8z4JUGJVmuJPGLoawptFSRbguQAEYBInmRucNhhbnZQVv4h%2BTYquP8MArLDwDkHzNy4MwxXPSATNIwKGURq%2B8E367jfR0tX1BRkcizN58aJfCj%2B6gxcef%2BSTnE5Kfytra8RhfwxiuSWr9%2BVxPfWOWACc6wafZuc2OtPjkMPQWjmAHCq05KE60OEDCp2FO4WOCLLRNR0Jlrij8AMmh7Kr2iaHYntyRB2LA4XPltryXuKacSgHZuSn7V3XMSnUFJLjWUnYeAUjr9aLF3z02U3PqrJsyl4i6ZRu1FLSLD2oN07svcILfxbs3tQ9ZjzZMSnM1xx4Nq6FtzB%2FymS1xFiUMTi5WmvXQMe75yjFWXtk8juMDuzR6LQX%2F5wXdJxnGt5c7d0dJt9NDCx8XP9qjHeVVhV5iMU2R0Eia7P0ybkODEYLUHZxjDBkEVzbnLQmgq%2BnEKwtUena9UaOXThXKmM%2BN53cvp6QXMSOMOvQ1b4GOqUB5IFwAYTUbOoYqa34en2UbapjvhIfW0bpg7AXSgDv%2F1lzwobEZcLikcxAUU3SMVUwoH%2B3180HPivk0zHtKIrrcVDEWe5D%2BWSfdEO5MlfNoQF54r3z6mOrlp2aol%2BB%2F5HHB37xeNgRaS4MPXzMHH6SNznBX51Y%2BQb1nmPFNPmIsfg8vlBQRA1oR2zSidDoK0CaNtNFTY2XsGyFPbyBeXertqPwJr%2BX&X-Amz-Signature=763b886939cd5db8d9909ffc8cdf6973f313c62e312658498fff1b9224ff1386&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M7EJA4U%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T121224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6KdljP%2F1f9wTcQ4gDn9JwA2deUeCjZGdLJY8kK8h7sQIgZ5OupifA4EN1lUM5mt6L5yZJjUn9uOu9AAv66Xb9GeQq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDIbIYAOgppdUT3RLsircA3mk6qSzaOpe%2FCpeksCZQJvgquZMg4EnCnqAY4QQ4w%2FSrH%2FPfXT4GKoWVy7NzkR68FWI6fdIaVLv%2BMUNStIWw%2FvNrtMRE7wnEAaCFuCGaUzPcdRamRLvTr4zWt0hOqE1koetlOyd8tlCddIUTbygmH5VjJYA8z4JUGJVmuJPGLoawptFSRbguQAEYBInmRucNhhbnZQVv4h%2BTYquP8MArLDwDkHzNy4MwxXPSATNIwKGURq%2B8E367jfR0tX1BRkcizN58aJfCj%2B6gxcef%2BSTnE5Kfytra8RhfwxiuSWr9%2BVxPfWOWACc6wafZuc2OtPjkMPQWjmAHCq05KE60OEDCp2FO4WOCLLRNR0Jlrij8AMmh7Kr2iaHYntyRB2LA4XPltryXuKacSgHZuSn7V3XMSnUFJLjWUnYeAUjr9aLF3z02U3PqrJsyl4i6ZRu1FLSLD2oN07svcILfxbs3tQ9ZjzZMSnM1xx4Nq6FtzB%2FymS1xFiUMTi5WmvXQMe75yjFWXtk8juMDuzR6LQX%2F5wXdJxnGt5c7d0dJt9NDCx8XP9qjHeVVhV5iMU2R0Eia7P0ybkODEYLUHZxjDBkEVzbnLQmgq%2BnEKwtUena9UaOXThXKmM%2BN53cvp6QXMSOMOvQ1b4GOqUB5IFwAYTUbOoYqa34en2UbapjvhIfW0bpg7AXSgDv%2F1lzwobEZcLikcxAUU3SMVUwoH%2B3180HPivk0zHtKIrrcVDEWe5D%2BWSfdEO5MlfNoQF54r3z6mOrlp2aol%2BB%2F5HHB37xeNgRaS4MPXzMHH6SNznBX51Y%2BQb1nmPFNPmIsfg8vlBQRA1oR2zSidDoK0CaNtNFTY2XsGyFPbyBeXertqPwJr%2BX&X-Amz-Signature=98737aab608b7b7762bfc724e06a5bdcf2d33250189c8de6b9e925715dc39058&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M7EJA4U%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T121224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6KdljP%2F1f9wTcQ4gDn9JwA2deUeCjZGdLJY8kK8h7sQIgZ5OupifA4EN1lUM5mt6L5yZJjUn9uOu9AAv66Xb9GeQq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDIbIYAOgppdUT3RLsircA3mk6qSzaOpe%2FCpeksCZQJvgquZMg4EnCnqAY4QQ4w%2FSrH%2FPfXT4GKoWVy7NzkR68FWI6fdIaVLv%2BMUNStIWw%2FvNrtMRE7wnEAaCFuCGaUzPcdRamRLvTr4zWt0hOqE1koetlOyd8tlCddIUTbygmH5VjJYA8z4JUGJVmuJPGLoawptFSRbguQAEYBInmRucNhhbnZQVv4h%2BTYquP8MArLDwDkHzNy4MwxXPSATNIwKGURq%2B8E367jfR0tX1BRkcizN58aJfCj%2B6gxcef%2BSTnE5Kfytra8RhfwxiuSWr9%2BVxPfWOWACc6wafZuc2OtPjkMPQWjmAHCq05KE60OEDCp2FO4WOCLLRNR0Jlrij8AMmh7Kr2iaHYntyRB2LA4XPltryXuKacSgHZuSn7V3XMSnUFJLjWUnYeAUjr9aLF3z02U3PqrJsyl4i6ZRu1FLSLD2oN07svcILfxbs3tQ9ZjzZMSnM1xx4Nq6FtzB%2FymS1xFiUMTi5WmvXQMe75yjFWXtk8juMDuzR6LQX%2F5wXdJxnGt5c7d0dJt9NDCx8XP9qjHeVVhV5iMU2R0Eia7P0ybkODEYLUHZxjDBkEVzbnLQmgq%2BnEKwtUena9UaOXThXKmM%2BN53cvp6QXMSOMOvQ1b4GOqUB5IFwAYTUbOoYqa34en2UbapjvhIfW0bpg7AXSgDv%2F1lzwobEZcLikcxAUU3SMVUwoH%2B3180HPivk0zHtKIrrcVDEWe5D%2BWSfdEO5MlfNoQF54r3z6mOrlp2aol%2BB%2F5HHB37xeNgRaS4MPXzMHH6SNznBX51Y%2BQb1nmPFNPmIsfg8vlBQRA1oR2zSidDoK0CaNtNFTY2XsGyFPbyBeXertqPwJr%2BX&X-Amz-Signature=7923ea53434897d23c2246db13a616a61d9e8aab12ea4d87e8eefdbab5a13c65&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
