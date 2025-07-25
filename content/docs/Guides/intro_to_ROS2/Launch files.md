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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEFJPNP6%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDbJNcUyLZmutnzY%2BcrI8LvNTXbhAO6skFsxaJXb3Ma7gIgUsCYV52ZTXrUB0%2BfKdoEW7DBic%2BNle4ggwSBKwnhk58q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDF%2BUjiasWWTHl4FshircA45IvL5wLePWmMq%2BiTe0KtaTz5tDyfRcBNYf53N8w0t2qXtmtM5bcV1EUDsGSB4VTX1tPLYD6B6spKicjI%2FvNr%2Baw9ZberY65MZgyRr04JTaPicP4Vh%2Fek6qSAC4a%2BKx9Vi10fGgXdNsmBwBICcYjPjflepUEWiACWVAErDfCAbmGJBtYszkhKZ35B0z3swl7LZtsCysR%2Bo7TT6A8Ek2VlWxvtiJUWCvpYqxJsryDFayLjBdAAGRxf40rRwsycTwmIciI0RP1KLiZXraHgOFiTu3%2BdE5Qtp%2BBjgccO73mhbucanXtT00xg%2FUyxLmX%2BxGUm4%2FuEFcNGmXQFFK%2FXh%2Buz2ohRii1jHWnyS%2FZffTfRoBMWSH4PTS8KrT7RbvM0Biky%2FLeevUoVOZCYbjr3jxkpyIF8B51tB%2FBwe6LjzZuKXvNdlaEZ4Qzzra4wYFf6iYlwfQk6vXIHpbol1NVnPZWquZ0EXwjv4Eye9jQPBV6UWqXJDRHDyan%2Fl3i2VR5l55vx%2FSer8czHCuCvLYWEjItHzi6rdXuObJsFG7gwptX8YxWx9HXliCitvPjaqSAUgZ7wYRtINmWe4mTJlP4848s%2BbKGHWe%2FiM9SHWiSWnJBxANDg%2B%2FgZEDnVzTnrRnMN%2FAjMQGOqUBULb%2FiaE%2BN4Dtercj4mz5WKu32IsdhFiTw3VtvPlrwEK%2BPT2gPSL6%2FgZJ0ooaNnFi3KJe05qwWZdbDuMtCz4UFERhIfx%2F6G2DjnBe3kAkzWxZUoWMHKTgZyF1vMXaWj36NrUCJhczvqKv6Wb%2Fh3uefLTJxs9oeNeZ%2BY8RWY90lUXlDQ0KNqwa%2FXk5UoT4VzjZIOnv%2BDXxBRvZy55zRel8X0PFnRpK&X-Amz-Signature=44b007c0ed026ea1de5a6a6b9dbcd5d3dc09686c742019f5b707f7cac1cca6ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEFJPNP6%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDbJNcUyLZmutnzY%2BcrI8LvNTXbhAO6skFsxaJXb3Ma7gIgUsCYV52ZTXrUB0%2BfKdoEW7DBic%2BNle4ggwSBKwnhk58q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDF%2BUjiasWWTHl4FshircA45IvL5wLePWmMq%2BiTe0KtaTz5tDyfRcBNYf53N8w0t2qXtmtM5bcV1EUDsGSB4VTX1tPLYD6B6spKicjI%2FvNr%2Baw9ZberY65MZgyRr04JTaPicP4Vh%2Fek6qSAC4a%2BKx9Vi10fGgXdNsmBwBICcYjPjflepUEWiACWVAErDfCAbmGJBtYszkhKZ35B0z3swl7LZtsCysR%2Bo7TT6A8Ek2VlWxvtiJUWCvpYqxJsryDFayLjBdAAGRxf40rRwsycTwmIciI0RP1KLiZXraHgOFiTu3%2BdE5Qtp%2BBjgccO73mhbucanXtT00xg%2FUyxLmX%2BxGUm4%2FuEFcNGmXQFFK%2FXh%2Buz2ohRii1jHWnyS%2FZffTfRoBMWSH4PTS8KrT7RbvM0Biky%2FLeevUoVOZCYbjr3jxkpyIF8B51tB%2FBwe6LjzZuKXvNdlaEZ4Qzzra4wYFf6iYlwfQk6vXIHpbol1NVnPZWquZ0EXwjv4Eye9jQPBV6UWqXJDRHDyan%2Fl3i2VR5l55vx%2FSer8czHCuCvLYWEjItHzi6rdXuObJsFG7gwptX8YxWx9HXliCitvPjaqSAUgZ7wYRtINmWe4mTJlP4848s%2BbKGHWe%2FiM9SHWiSWnJBxANDg%2B%2FgZEDnVzTnrRnMN%2FAjMQGOqUBULb%2FiaE%2BN4Dtercj4mz5WKu32IsdhFiTw3VtvPlrwEK%2BPT2gPSL6%2FgZJ0ooaNnFi3KJe05qwWZdbDuMtCz4UFERhIfx%2F6G2DjnBe3kAkzWxZUoWMHKTgZyF1vMXaWj36NrUCJhczvqKv6Wb%2Fh3uefLTJxs9oeNeZ%2BY8RWY90lUXlDQ0KNqwa%2FXk5UoT4VzjZIOnv%2BDXxBRvZy55zRel8X0PFnRpK&X-Amz-Signature=766dbd66dc60ab1e7a401006073a344850da67b126a69d6692889b1824283302&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEFJPNP6%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDbJNcUyLZmutnzY%2BcrI8LvNTXbhAO6skFsxaJXb3Ma7gIgUsCYV52ZTXrUB0%2BfKdoEW7DBic%2BNle4ggwSBKwnhk58q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDF%2BUjiasWWTHl4FshircA45IvL5wLePWmMq%2BiTe0KtaTz5tDyfRcBNYf53N8w0t2qXtmtM5bcV1EUDsGSB4VTX1tPLYD6B6spKicjI%2FvNr%2Baw9ZberY65MZgyRr04JTaPicP4Vh%2Fek6qSAC4a%2BKx9Vi10fGgXdNsmBwBICcYjPjflepUEWiACWVAErDfCAbmGJBtYszkhKZ35B0z3swl7LZtsCysR%2Bo7TT6A8Ek2VlWxvtiJUWCvpYqxJsryDFayLjBdAAGRxf40rRwsycTwmIciI0RP1KLiZXraHgOFiTu3%2BdE5Qtp%2BBjgccO73mhbucanXtT00xg%2FUyxLmX%2BxGUm4%2FuEFcNGmXQFFK%2FXh%2Buz2ohRii1jHWnyS%2FZffTfRoBMWSH4PTS8KrT7RbvM0Biky%2FLeevUoVOZCYbjr3jxkpyIF8B51tB%2FBwe6LjzZuKXvNdlaEZ4Qzzra4wYFf6iYlwfQk6vXIHpbol1NVnPZWquZ0EXwjv4Eye9jQPBV6UWqXJDRHDyan%2Fl3i2VR5l55vx%2FSer8czHCuCvLYWEjItHzi6rdXuObJsFG7gwptX8YxWx9HXliCitvPjaqSAUgZ7wYRtINmWe4mTJlP4848s%2BbKGHWe%2FiM9SHWiSWnJBxANDg%2B%2FgZEDnVzTnrRnMN%2FAjMQGOqUBULb%2FiaE%2BN4Dtercj4mz5WKu32IsdhFiTw3VtvPlrwEK%2BPT2gPSL6%2FgZJ0ooaNnFi3KJe05qwWZdbDuMtCz4UFERhIfx%2F6G2DjnBe3kAkzWxZUoWMHKTgZyF1vMXaWj36NrUCJhczvqKv6Wb%2Fh3uefLTJxs9oeNeZ%2BY8RWY90lUXlDQ0KNqwa%2FXk5UoT4VzjZIOnv%2BDXxBRvZy55zRel8X0PFnRpK&X-Amz-Signature=b9c35cda49febfcc8d2da24b9c272df5f4dc011b5f8798f2339ca4381e124b48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
