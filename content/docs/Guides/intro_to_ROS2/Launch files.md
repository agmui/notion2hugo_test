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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HNX2WCE%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEBl8UmXx9TipU%2FebSBnq9gXClcwW5IEfaTDC1rDoxPQIgGRpN0XOv%2F5%2BY7rlqr3WHcyVAqwfb1MbQbBIcW%2FsBV%2FkqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEBDYQQ%2F6A%2FCZar5gSrcA6dJ8ln8zk8BqnoEbWY5tU0MLp%2FBTHuq5YmNiAbeeBf5nH4yktOtBWq6LX16APRn4JphMrrOgl6IzJADsEXW2yP2ahWj%2BP7kPYVoHRi25I0t%2BFFvV2X%2FmHTMIi067F0sae8qM8z5YO%2BSPIFhgf45giZf6Oo%2B2ozPe3833QZxMp1FypHrGsQ4XqquO9Bnm4V2%2FobgtW4E7pBSX6GjAl4upARBgmGofVYTY9Xu7Ups1YDl5rRqEiR%2BELrUDs7bWDT6XHUvzvdyFmFPk3m6XhTlglVVyZ1HLxCHHG%2BrHb2TAcdvkyMm3HdpWcXufWj3N7218g5yHaE4xeS9VHOO0r5ey57jzW71K89C5D4S0KLSovdlEyP8WG3mG20XXh6PRck9GVXiTaqM%2FLKQ%2B6yJr%2ByCSzq2AhHkCNzLuFQD8HqyyLcdlTOO7aDr2u6mz77gBWHQ0P5%2B1Awqocfl6mX4nziAWKtGOuamuFZsl0ocD5GvRBJyyaKQhZWWr1aSILumR6Idb9pMPCrj3TTkHdKC%2BqpsFKaIaJvqbyNY15XbmiKxXA96BGiFHJiMG8pNhmP5OwnIc%2F5MzgVGuiV7PHS4Kh4geWQsVgYURXXWJheYiYsNwELgTZ5BXXvUtvtbdAhOMKeegtIGOqUBpiWQCsfMO0LjmqrRTkyFIFkE0GdCU4XRuZeakC6EzwOayiyA48Sy8uym4x1YI2TQRxQU23z%2B0nj54FLnWKwdODEiO5A8QIW0gb2R3BGlJvJPLhExFiUpaFvKLhgGLeL7Dx1fGUE6lWw58D%2F4kgH1H4JnnfPp06suE2oOIrvm1Ot0fX58wV311QOP4sxOCWSRccBp6Eu7xBfCbL9rMStgMscitI0b&X-Amz-Signature=cc69ab9982e063db6ea0a905217ebb3c9ab146f648b7bb271e8d19a016b3fc3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HNX2WCE%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEBl8UmXx9TipU%2FebSBnq9gXClcwW5IEfaTDC1rDoxPQIgGRpN0XOv%2F5%2BY7rlqr3WHcyVAqwfb1MbQbBIcW%2FsBV%2FkqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEBDYQQ%2F6A%2FCZar5gSrcA6dJ8ln8zk8BqnoEbWY5tU0MLp%2FBTHuq5YmNiAbeeBf5nH4yktOtBWq6LX16APRn4JphMrrOgl6IzJADsEXW2yP2ahWj%2BP7kPYVoHRi25I0t%2BFFvV2X%2FmHTMIi067F0sae8qM8z5YO%2BSPIFhgf45giZf6Oo%2B2ozPe3833QZxMp1FypHrGsQ4XqquO9Bnm4V2%2FobgtW4E7pBSX6GjAl4upARBgmGofVYTY9Xu7Ups1YDl5rRqEiR%2BELrUDs7bWDT6XHUvzvdyFmFPk3m6XhTlglVVyZ1HLxCHHG%2BrHb2TAcdvkyMm3HdpWcXufWj3N7218g5yHaE4xeS9VHOO0r5ey57jzW71K89C5D4S0KLSovdlEyP8WG3mG20XXh6PRck9GVXiTaqM%2FLKQ%2B6yJr%2ByCSzq2AhHkCNzLuFQD8HqyyLcdlTOO7aDr2u6mz77gBWHQ0P5%2B1Awqocfl6mX4nziAWKtGOuamuFZsl0ocD5GvRBJyyaKQhZWWr1aSILumR6Idb9pMPCrj3TTkHdKC%2BqpsFKaIaJvqbyNY15XbmiKxXA96BGiFHJiMG8pNhmP5OwnIc%2F5MzgVGuiV7PHS4Kh4geWQsVgYURXXWJheYiYsNwELgTZ5BXXvUtvtbdAhOMKeegtIGOqUBpiWQCsfMO0LjmqrRTkyFIFkE0GdCU4XRuZeakC6EzwOayiyA48Sy8uym4x1YI2TQRxQU23z%2B0nj54FLnWKwdODEiO5A8QIW0gb2R3BGlJvJPLhExFiUpaFvKLhgGLeL7Dx1fGUE6lWw58D%2F4kgH1H4JnnfPp06suE2oOIrvm1Ot0fX58wV311QOP4sxOCWSRccBp6Eu7xBfCbL9rMStgMscitI0b&X-Amz-Signature=16699d64a72c363171ef12eeeb1b5874d91a1a856103debeafbddb54070dc608&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HNX2WCE%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEBl8UmXx9TipU%2FebSBnq9gXClcwW5IEfaTDC1rDoxPQIgGRpN0XOv%2F5%2BY7rlqr3WHcyVAqwfb1MbQbBIcW%2FsBV%2FkqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEBDYQQ%2F6A%2FCZar5gSrcA6dJ8ln8zk8BqnoEbWY5tU0MLp%2FBTHuq5YmNiAbeeBf5nH4yktOtBWq6LX16APRn4JphMrrOgl6IzJADsEXW2yP2ahWj%2BP7kPYVoHRi25I0t%2BFFvV2X%2FmHTMIi067F0sae8qM8z5YO%2BSPIFhgf45giZf6Oo%2B2ozPe3833QZxMp1FypHrGsQ4XqquO9Bnm4V2%2FobgtW4E7pBSX6GjAl4upARBgmGofVYTY9Xu7Ups1YDl5rRqEiR%2BELrUDs7bWDT6XHUvzvdyFmFPk3m6XhTlglVVyZ1HLxCHHG%2BrHb2TAcdvkyMm3HdpWcXufWj3N7218g5yHaE4xeS9VHOO0r5ey57jzW71K89C5D4S0KLSovdlEyP8WG3mG20XXh6PRck9GVXiTaqM%2FLKQ%2B6yJr%2ByCSzq2AhHkCNzLuFQD8HqyyLcdlTOO7aDr2u6mz77gBWHQ0P5%2B1Awqocfl6mX4nziAWKtGOuamuFZsl0ocD5GvRBJyyaKQhZWWr1aSILumR6Idb9pMPCrj3TTkHdKC%2BqpsFKaIaJvqbyNY15XbmiKxXA96BGiFHJiMG8pNhmP5OwnIc%2F5MzgVGuiV7PHS4Kh4geWQsVgYURXXWJheYiYsNwELgTZ5BXXvUtvtbdAhOMKeegtIGOqUBpiWQCsfMO0LjmqrRTkyFIFkE0GdCU4XRuZeakC6EzwOayiyA48Sy8uym4x1YI2TQRxQU23z%2B0nj54FLnWKwdODEiO5A8QIW0gb2R3BGlJvJPLhExFiUpaFvKLhgGLeL7Dx1fGUE6lWw58D%2F4kgH1H4JnnfPp06suE2oOIrvm1Ot0fX58wV311QOP4sxOCWSRccBp6Eu7xBfCbL9rMStgMscitI0b&X-Amz-Signature=33f2c1b787bb649d129bb3ac74ccdece34d74b184dafa6f34e0d41afc025a933&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
