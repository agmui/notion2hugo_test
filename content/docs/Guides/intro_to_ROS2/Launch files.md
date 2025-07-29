---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JWPVITN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCLuGs5%2FX4aiQNwpw0zBmRYeyp0YLMC9u%2FOqaz3J2Y%2FuQIgdgTWxMKiw0zuvhOoSgu6%2FbJxc0ywQHHgNZqUgxKghQkqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5XoV8lgDTcGRpcAircA51YHLlcsseAlhctOwTQL1nGZsuyD4W262LUE95R4viOO5sdxgi20gL%2BNnOehU1h1i9DPahtITg%2FHzDzICUH%2BlIX2f4yK7vwD20yLuzC7u4doWsEJR1OUvYRwZHThygpF9fMZZGlvjjf5FTfJEFDffFzxSFm3CetkhpqCbjRpWtK9%2FzqfBUg9gXzNM06SWdZ%2B0Ih50Jy8prWC91MeEvbx7tcSXizXlxGFDc9DeZBK8F6cMVKidDLzCphPBACMuobTawn1mLqNfv2HLQpGqIUknY7iQi0q4IPZY1w6Gs0U%2B%2FB22A6%2FOI%2FhFS6pYdhUR4vkz4QvWbjsfSY3V%2BA3ACBzs%2B2%2Bi9Qx9pnW3Q3bC7tN2IxNjM9FAFvSUXiQRQTc%2FiC2IHgEffUnsMi9zfnNn9nlwEcXemBeUqUKsDxs1HowVQi5GJmH2Abs0UiC51c3Y6FqgKFVeyvocgZEWC9CTNGvB%2FKXf3Uki7P8I7HfptOPSy1Bxi5hIMjfMo1RjOMPH40ZEmR8PGWAMgWqQTfAdeNytgOEBv33%2Fi%2Fi2iVowvEnaLNPhqz3WtZypJRG0l7I0i%2FPB83PDZ%2FMgWHlXHw7vSHKgMThtBjjFRACKXZ9nOBC1Z3M3TCNEncQTMX%2ByGyMK20ocQGOqUBeD%2BJBG06n01Ji0wGo3kQ5IRx%2Fe5YEaTwm6l1SZGHJDHvUnBebnM4X64Ux%2F%2FWk87Y1Vqykqnj71P%2F7n%2FV7i34qbda6hRri%2B32QXkUEmyWcbmZHRJb5vH4b%2BKBtZERTZNDtig0dEb4KjgMBvXQFk76ChnsIXE5Z8s4ikIifUET%2BH9TbBn%2FaEffGXk9tm1MG8AEIZq10OjvNrOEsMb0Fl4g%2F377hPxX&X-Amz-Signature=b56b3a1e12bf21f4224d4920232c6ec9a02eb96409c4567518b66efa8fdf0ea3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JWPVITN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCLuGs5%2FX4aiQNwpw0zBmRYeyp0YLMC9u%2FOqaz3J2Y%2FuQIgdgTWxMKiw0zuvhOoSgu6%2FbJxc0ywQHHgNZqUgxKghQkqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5XoV8lgDTcGRpcAircA51YHLlcsseAlhctOwTQL1nGZsuyD4W262LUE95R4viOO5sdxgi20gL%2BNnOehU1h1i9DPahtITg%2FHzDzICUH%2BlIX2f4yK7vwD20yLuzC7u4doWsEJR1OUvYRwZHThygpF9fMZZGlvjjf5FTfJEFDffFzxSFm3CetkhpqCbjRpWtK9%2FzqfBUg9gXzNM06SWdZ%2B0Ih50Jy8prWC91MeEvbx7tcSXizXlxGFDc9DeZBK8F6cMVKidDLzCphPBACMuobTawn1mLqNfv2HLQpGqIUknY7iQi0q4IPZY1w6Gs0U%2B%2FB22A6%2FOI%2FhFS6pYdhUR4vkz4QvWbjsfSY3V%2BA3ACBzs%2B2%2Bi9Qx9pnW3Q3bC7tN2IxNjM9FAFvSUXiQRQTc%2FiC2IHgEffUnsMi9zfnNn9nlwEcXemBeUqUKsDxs1HowVQi5GJmH2Abs0UiC51c3Y6FqgKFVeyvocgZEWC9CTNGvB%2FKXf3Uki7P8I7HfptOPSy1Bxi5hIMjfMo1RjOMPH40ZEmR8PGWAMgWqQTfAdeNytgOEBv33%2Fi%2Fi2iVowvEnaLNPhqz3WtZypJRG0l7I0i%2FPB83PDZ%2FMgWHlXHw7vSHKgMThtBjjFRACKXZ9nOBC1Z3M3TCNEncQTMX%2ByGyMK20ocQGOqUBeD%2BJBG06n01Ji0wGo3kQ5IRx%2Fe5YEaTwm6l1SZGHJDHvUnBebnM4X64Ux%2F%2FWk87Y1Vqykqnj71P%2F7n%2FV7i34qbda6hRri%2B32QXkUEmyWcbmZHRJb5vH4b%2BKBtZERTZNDtig0dEb4KjgMBvXQFk76ChnsIXE5Z8s4ikIifUET%2BH9TbBn%2FaEffGXk9tm1MG8AEIZq10OjvNrOEsMb0Fl4g%2F377hPxX&X-Amz-Signature=6e72ec0574421593a12e8d3ff235d768b28979bd7b4b788ee11a28c44e3adf51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JWPVITN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCLuGs5%2FX4aiQNwpw0zBmRYeyp0YLMC9u%2FOqaz3J2Y%2FuQIgdgTWxMKiw0zuvhOoSgu6%2FbJxc0ywQHHgNZqUgxKghQkqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5XoV8lgDTcGRpcAircA51YHLlcsseAlhctOwTQL1nGZsuyD4W262LUE95R4viOO5sdxgi20gL%2BNnOehU1h1i9DPahtITg%2FHzDzICUH%2BlIX2f4yK7vwD20yLuzC7u4doWsEJR1OUvYRwZHThygpF9fMZZGlvjjf5FTfJEFDffFzxSFm3CetkhpqCbjRpWtK9%2FzqfBUg9gXzNM06SWdZ%2B0Ih50Jy8prWC91MeEvbx7tcSXizXlxGFDc9DeZBK8F6cMVKidDLzCphPBACMuobTawn1mLqNfv2HLQpGqIUknY7iQi0q4IPZY1w6Gs0U%2B%2FB22A6%2FOI%2FhFS6pYdhUR4vkz4QvWbjsfSY3V%2BA3ACBzs%2B2%2Bi9Qx9pnW3Q3bC7tN2IxNjM9FAFvSUXiQRQTc%2FiC2IHgEffUnsMi9zfnNn9nlwEcXemBeUqUKsDxs1HowVQi5GJmH2Abs0UiC51c3Y6FqgKFVeyvocgZEWC9CTNGvB%2FKXf3Uki7P8I7HfptOPSy1Bxi5hIMjfMo1RjOMPH40ZEmR8PGWAMgWqQTfAdeNytgOEBv33%2Fi%2Fi2iVowvEnaLNPhqz3WtZypJRG0l7I0i%2FPB83PDZ%2FMgWHlXHw7vSHKgMThtBjjFRACKXZ9nOBC1Z3M3TCNEncQTMX%2ByGyMK20ocQGOqUBeD%2BJBG06n01Ji0wGo3kQ5IRx%2Fe5YEaTwm6l1SZGHJDHvUnBebnM4X64Ux%2F%2FWk87Y1Vqykqnj71P%2F7n%2FV7i34qbda6hRri%2B32QXkUEmyWcbmZHRJb5vH4b%2BKBtZERTZNDtig0dEb4KjgMBvXQFk76ChnsIXE5Z8s4ikIifUET%2BH9TbBn%2FaEffGXk9tm1MG8AEIZq10OjvNrOEsMb0Fl4g%2F377hPxX&X-Amz-Signature=bd3e8e4a84a684484df3dd9dd8bcaa5c4eca7e092022894dcbc5a345b89ccc39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
