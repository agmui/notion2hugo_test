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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGDLGVC7%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T051321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDCTZA6kHO416xdFPVWJZg8E9PjCkI4EeAPMMUz498m9AIgOk%2F9zR8Ij7gJYuAwy14doDZ%2Brj5Hfvbo35hbOuXl27Mq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDJVo0HiNPA%2BKoC7a%2FircAw3r51dWWkNl0BK7QeJZQw10C8ruFxK0PS%2BvlN73dsGKLntmy%2FPJEIYoftJaFq9YFfev%2B7cPXUmrRPKCvDj3CMkLQHPJDa51i%2FR2k%2BXZgrQOUSTQnM2SeBd%2BQmImXurJ6482ry1aQbqR9yi1BEUpeXOZENftkadPDPZMcdF0Xn9Jo2AgoCLqUqLmR34na3hbfU5ESvojZExnFEgNYLv7nbdCq0tM77aeezj00c2gjSX7zu0PNnx1j3oG1SfUueSFqYbea%2FdlqFxSDhVHVVNB6rioLDbnQkxAY8thWeihMdKVbjk7Z23mY2RlvU%2BnAcDiExFOaLBlBbSes95vY%2BU66JgG0%2BbUGUnuRjUt6zbBnBisMScpERAEx6vLqXTxuqoMzZ%2BEzMMYT7EslnGeiBfnyKfgExMdMvgEmzAsueLi6hxnAXLTZLHljeA3HeNqYtdIUvJMNf0gW1C3Kpc9Ct8lGoLO5W53BOb4CYrIqUzM6N%2FH4s%2BjJNuJda7tcVLpZX87%2FwA%2FcI1AwIRXtEhiTkjicVCDy03dBlmTsOFXu1J0wayXE3jWmXfR1mKEuvHLTuP%2FHMFSj3CAVwOptliHP8DTuaRuZ7Z7BD7edzdZd4Zi8oPk2H6mtYRae990zN9sMLuZrMMGOqUB32yijTj7RueWa39kZn0wzIvMoqqGRdDmvqjY52%2FXFJxqizPOuxUjhJKJsQuvVx%2BedkLhp8lcrOUThzr65FRFIdeioKSEVX4rA76pdhSOhgG%2BbUWeqwxPE7xSeWJ%2BiQn%2FigyYD1eOIymjJRfFwLsIxfwegFB1jYRQ4BAa359D5jHl3d5tx%2BOM5cl2eXxUBpu%2BOyzX%2FIL1s6gm0msKEEPbyIX3aQy%2B&X-Amz-Signature=a41030b185585553a9889d83d768f40948f3679e343781cc80a814199b277acc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGDLGVC7%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T051321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDCTZA6kHO416xdFPVWJZg8E9PjCkI4EeAPMMUz498m9AIgOk%2F9zR8Ij7gJYuAwy14doDZ%2Brj5Hfvbo35hbOuXl27Mq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDJVo0HiNPA%2BKoC7a%2FircAw3r51dWWkNl0BK7QeJZQw10C8ruFxK0PS%2BvlN73dsGKLntmy%2FPJEIYoftJaFq9YFfev%2B7cPXUmrRPKCvDj3CMkLQHPJDa51i%2FR2k%2BXZgrQOUSTQnM2SeBd%2BQmImXurJ6482ry1aQbqR9yi1BEUpeXOZENftkadPDPZMcdF0Xn9Jo2AgoCLqUqLmR34na3hbfU5ESvojZExnFEgNYLv7nbdCq0tM77aeezj00c2gjSX7zu0PNnx1j3oG1SfUueSFqYbea%2FdlqFxSDhVHVVNB6rioLDbnQkxAY8thWeihMdKVbjk7Z23mY2RlvU%2BnAcDiExFOaLBlBbSes95vY%2BU66JgG0%2BbUGUnuRjUt6zbBnBisMScpERAEx6vLqXTxuqoMzZ%2BEzMMYT7EslnGeiBfnyKfgExMdMvgEmzAsueLi6hxnAXLTZLHljeA3HeNqYtdIUvJMNf0gW1C3Kpc9Ct8lGoLO5W53BOb4CYrIqUzM6N%2FH4s%2BjJNuJda7tcVLpZX87%2FwA%2FcI1AwIRXtEhiTkjicVCDy03dBlmTsOFXu1J0wayXE3jWmXfR1mKEuvHLTuP%2FHMFSj3CAVwOptliHP8DTuaRuZ7Z7BD7edzdZd4Zi8oPk2H6mtYRae990zN9sMLuZrMMGOqUB32yijTj7RueWa39kZn0wzIvMoqqGRdDmvqjY52%2FXFJxqizPOuxUjhJKJsQuvVx%2BedkLhp8lcrOUThzr65FRFIdeioKSEVX4rA76pdhSOhgG%2BbUWeqwxPE7xSeWJ%2BiQn%2FigyYD1eOIymjJRfFwLsIxfwegFB1jYRQ4BAa359D5jHl3d5tx%2BOM5cl2eXxUBpu%2BOyzX%2FIL1s6gm0msKEEPbyIX3aQy%2B&X-Amz-Signature=21b32042a484bd8f926a260d508dc0536e5e40797cd4c8c44acb30de69cca4c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGDLGVC7%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T051321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDCTZA6kHO416xdFPVWJZg8E9PjCkI4EeAPMMUz498m9AIgOk%2F9zR8Ij7gJYuAwy14doDZ%2Brj5Hfvbo35hbOuXl27Mq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDJVo0HiNPA%2BKoC7a%2FircAw3r51dWWkNl0BK7QeJZQw10C8ruFxK0PS%2BvlN73dsGKLntmy%2FPJEIYoftJaFq9YFfev%2B7cPXUmrRPKCvDj3CMkLQHPJDa51i%2FR2k%2BXZgrQOUSTQnM2SeBd%2BQmImXurJ6482ry1aQbqR9yi1BEUpeXOZENftkadPDPZMcdF0Xn9Jo2AgoCLqUqLmR34na3hbfU5ESvojZExnFEgNYLv7nbdCq0tM77aeezj00c2gjSX7zu0PNnx1j3oG1SfUueSFqYbea%2FdlqFxSDhVHVVNB6rioLDbnQkxAY8thWeihMdKVbjk7Z23mY2RlvU%2BnAcDiExFOaLBlBbSes95vY%2BU66JgG0%2BbUGUnuRjUt6zbBnBisMScpERAEx6vLqXTxuqoMzZ%2BEzMMYT7EslnGeiBfnyKfgExMdMvgEmzAsueLi6hxnAXLTZLHljeA3HeNqYtdIUvJMNf0gW1C3Kpc9Ct8lGoLO5W53BOb4CYrIqUzM6N%2FH4s%2BjJNuJda7tcVLpZX87%2FwA%2FcI1AwIRXtEhiTkjicVCDy03dBlmTsOFXu1J0wayXE3jWmXfR1mKEuvHLTuP%2FHMFSj3CAVwOptliHP8DTuaRuZ7Z7BD7edzdZd4Zi8oPk2H6mtYRae990zN9sMLuZrMMGOqUB32yijTj7RueWa39kZn0wzIvMoqqGRdDmvqjY52%2FXFJxqizPOuxUjhJKJsQuvVx%2BedkLhp8lcrOUThzr65FRFIdeioKSEVX4rA76pdhSOhgG%2BbUWeqwxPE7xSeWJ%2BiQn%2FigyYD1eOIymjJRfFwLsIxfwegFB1jYRQ4BAa359D5jHl3d5tx%2BOM5cl2eXxUBpu%2BOyzX%2FIL1s6gm0msKEEPbyIX3aQy%2B&X-Amz-Signature=3e3e12e7805e63efdee7a427683814dae3cd8827086bff47a35671ad16abedfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
