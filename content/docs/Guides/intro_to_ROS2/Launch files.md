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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624XIXC4O%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T150751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIGw4z3V7qlAyIjssZEEXfPLkkn3h5ywhhl%2BSjnnZtRt6AiAs5GN1uDrGDUPsykXKyx6S%2FoKzJ4MSCg5CRe4lu59v%2Byr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMrVWKvmW9adkQj%2B3mKtwDELkJj86HW8oYosE2tQjycous9o3qun6UHgyYFa4NCIcseCcidPocd4uidNZQ5Z6KQXdi0hZ5KMyA0vuuttEJrHGxcZoax40zDTY4OCQxFvexiv0mb820TK3DV%2BV%2F2cXinH4UXSOk6NzzmQZyyW0ubk6WS2yC8kypcscdwf1PCltdS0wiEc9aw8BCFdcxjaH23GVjcRPALiXeUveu9iCIIboE2QNCmZ9rql9rJ1XIGnLx0LV5ZIUXPPtL3%2FUSmMSgsdnAAjA3jA9ZAUW9zgXb1N%2FBGegr59fGiWQv399pnzaVjlFxNa2LLGfqRHH1qfJU9FiO7iEax2IvV8puqNnenxp3RHn57j%2F2UFfGF4XFcrm68VMy7%2F7oScS39yDTDn07yIuMgrfzmvm0hQlsHCzI3qdwGajqJrAolZhzHbQQpN0Ct2xiFQCYK27Y7tBjgcYQghU%2FhQiPS6Z30GHWheX5oC6qN5yFkbxJE6GYjGTa0spx7VCX%2BBN4GxNnMC15%2BYQs%2BABhQVOqbNqINiszpAMSvGuN7KwTYypRCCOpcQQ%2BIMSFFtIWV3G5WiknYfjfICXAGua%2FaPwbOvCwEV7UQTmqNDrEy%2FHVMcJ9iM6PGOXwDlfjS8dgX9l4xxn5BoUwtM%2BkwwY6pgFHWDCU5jKmeCzck0RRPX6Dv5BGMzIzEWpk0n7iwZ8AOzY7hBywdOl6es2lSvUIJBHJBBmQ5FmURjpTFJOyACemnXc9SwvCfnr83eZCWLGE8FMCKlC3Z8%2F258ZkUFzDlFqoyoGyklujAL%2BRXHD44ZI3xLRualUqQxoXRkaYvwwYiEi7uMEC0vwui23TD8cmjv0c9p8%2Fgx%2BSMMNGrnW5UWavEKwi0LXc&X-Amz-Signature=d66c6578de09f27e6aa5b2c4a489c57c6311fe0b3b77ae9796d6c22a02698754&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624XIXC4O%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T150751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIGw4z3V7qlAyIjssZEEXfPLkkn3h5ywhhl%2BSjnnZtRt6AiAs5GN1uDrGDUPsykXKyx6S%2FoKzJ4MSCg5CRe4lu59v%2Byr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMrVWKvmW9adkQj%2B3mKtwDELkJj86HW8oYosE2tQjycous9o3qun6UHgyYFa4NCIcseCcidPocd4uidNZQ5Z6KQXdi0hZ5KMyA0vuuttEJrHGxcZoax40zDTY4OCQxFvexiv0mb820TK3DV%2BV%2F2cXinH4UXSOk6NzzmQZyyW0ubk6WS2yC8kypcscdwf1PCltdS0wiEc9aw8BCFdcxjaH23GVjcRPALiXeUveu9iCIIboE2QNCmZ9rql9rJ1XIGnLx0LV5ZIUXPPtL3%2FUSmMSgsdnAAjA3jA9ZAUW9zgXb1N%2FBGegr59fGiWQv399pnzaVjlFxNa2LLGfqRHH1qfJU9FiO7iEax2IvV8puqNnenxp3RHn57j%2F2UFfGF4XFcrm68VMy7%2F7oScS39yDTDn07yIuMgrfzmvm0hQlsHCzI3qdwGajqJrAolZhzHbQQpN0Ct2xiFQCYK27Y7tBjgcYQghU%2FhQiPS6Z30GHWheX5oC6qN5yFkbxJE6GYjGTa0spx7VCX%2BBN4GxNnMC15%2BYQs%2BABhQVOqbNqINiszpAMSvGuN7KwTYypRCCOpcQQ%2BIMSFFtIWV3G5WiknYfjfICXAGua%2FaPwbOvCwEV7UQTmqNDrEy%2FHVMcJ9iM6PGOXwDlfjS8dgX9l4xxn5BoUwtM%2BkwwY6pgFHWDCU5jKmeCzck0RRPX6Dv5BGMzIzEWpk0n7iwZ8AOzY7hBywdOl6es2lSvUIJBHJBBmQ5FmURjpTFJOyACemnXc9SwvCfnr83eZCWLGE8FMCKlC3Z8%2F258ZkUFzDlFqoyoGyklujAL%2BRXHD44ZI3xLRualUqQxoXRkaYvwwYiEi7uMEC0vwui23TD8cmjv0c9p8%2Fgx%2BSMMNGrnW5UWavEKwi0LXc&X-Amz-Signature=4b95169f284837b722738bf1b7ad8ac6b2281ecbf691e11b2cda69553b1dac73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624XIXC4O%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T150751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIGw4z3V7qlAyIjssZEEXfPLkkn3h5ywhhl%2BSjnnZtRt6AiAs5GN1uDrGDUPsykXKyx6S%2FoKzJ4MSCg5CRe4lu59v%2Byr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMrVWKvmW9adkQj%2B3mKtwDELkJj86HW8oYosE2tQjycous9o3qun6UHgyYFa4NCIcseCcidPocd4uidNZQ5Z6KQXdi0hZ5KMyA0vuuttEJrHGxcZoax40zDTY4OCQxFvexiv0mb820TK3DV%2BV%2F2cXinH4UXSOk6NzzmQZyyW0ubk6WS2yC8kypcscdwf1PCltdS0wiEc9aw8BCFdcxjaH23GVjcRPALiXeUveu9iCIIboE2QNCmZ9rql9rJ1XIGnLx0LV5ZIUXPPtL3%2FUSmMSgsdnAAjA3jA9ZAUW9zgXb1N%2FBGegr59fGiWQv399pnzaVjlFxNa2LLGfqRHH1qfJU9FiO7iEax2IvV8puqNnenxp3RHn57j%2F2UFfGF4XFcrm68VMy7%2F7oScS39yDTDn07yIuMgrfzmvm0hQlsHCzI3qdwGajqJrAolZhzHbQQpN0Ct2xiFQCYK27Y7tBjgcYQghU%2FhQiPS6Z30GHWheX5oC6qN5yFkbxJE6GYjGTa0spx7VCX%2BBN4GxNnMC15%2BYQs%2BABhQVOqbNqINiszpAMSvGuN7KwTYypRCCOpcQQ%2BIMSFFtIWV3G5WiknYfjfICXAGua%2FaPwbOvCwEV7UQTmqNDrEy%2FHVMcJ9iM6PGOXwDlfjS8dgX9l4xxn5BoUwtM%2BkwwY6pgFHWDCU5jKmeCzck0RRPX6Dv5BGMzIzEWpk0n7iwZ8AOzY7hBywdOl6es2lSvUIJBHJBBmQ5FmURjpTFJOyACemnXc9SwvCfnr83eZCWLGE8FMCKlC3Z8%2F258ZkUFzDlFqoyoGyklujAL%2BRXHD44ZI3xLRualUqQxoXRkaYvwwYiEi7uMEC0vwui23TD8cmjv0c9p8%2Fgx%2BSMMNGrnW5UWavEKwi0LXc&X-Amz-Signature=7ea7448f2e1cdf067af5284383d20a0ac2d1a924209561edd936f6e563630b9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
