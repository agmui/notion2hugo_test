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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O24H5L3%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T200134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIAYMHHi55XO3rBoJpF9eIvbVd4Chp7pgjcB9alMOqSlIAiEAyJQV9dqoeI0IviYa370JysyoGNEn3PPb1IS2PizHMPoq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDDYgTvHsbc5xMigh3ircA5%2FCCgRYQLQLdQxlPmuLMnQiS1LZCXXzdsyqvy2n%2FYZyiPJz9yl0Np7uiH6w4sLoYBhSNtnZUFSOBo33wtEEFmDsg3wTC36GSaaE%2BRWU4jmy%2BQwU9gBrfIunRp3F%2Fo49LfP6nPI62T25fnFTKEMwFeS83PlA6BXfsaXpYYmmqTJdN4fAXjizgjISmHPk%2BK6p41uo0u061uh5QN6qIq7hryiNkrM0Ho2%2FzhO6Jt3Jb8MexkMFejXChRt5bv%2Bwlk19GdfOeH5I7sMtIziZzmT3WAMG6j19Z1SjBJvTMJ4AsVcVq5gECtXuJ9UTFCK8DDjak5k5RKa1j7ZhNIsOylkdXh4ZIq1Klirziq%2BIz3oieeWdQLAZQHLwdSiYdeZ4lSTZJg7GW2AunJylbr2W%2FAYzOg360fRr86BOVASCNVPSiJFJZuytJat%2BvDN6S65jGvaW4hMuUANF%2BlSDrP2FH0RnEgGZe8hslDH84rsJnuwe7XDl1KD4eVCu0S3%2B4uwqreGxCBsEAGxPPQqS1Xms1MEZHAVlDG02eEt%2BW53pKROYISLcCiHclP9gvGwdbNcPPe55UVvP9bjcOKkJVh3ZwexBhVUoa9v3sMiOzy7XpK9ImqLpDKt296B7Da6WUcb1MNvgt74GOqUBRVh6DfZKEvGVV%2BFWHEQyGm2fkQIAytqsDD65TaACRu65gecLeIjRvBuhUZd2xHweqKGXUlS%2F925S3J9e%2BTrHZ648%2BTuF12WwVHdNZBkP%2Fp2%2FRd3kXnvhE%2F5HSZHf1GwbHcXyKcWMgVsPNGd%2FmeoegK1OWwnJ0GhS6q%2BjBkUaxutNvodtnGD7ghI2w8rse4aOAgRt2LVsRq7ZzoD8Fk2QI35QqI59&X-Amz-Signature=e84f3b170fcc321f377c408de9ee853a252c469ce03caca5b2e36386a3e92133&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O24H5L3%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T200134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIAYMHHi55XO3rBoJpF9eIvbVd4Chp7pgjcB9alMOqSlIAiEAyJQV9dqoeI0IviYa370JysyoGNEn3PPb1IS2PizHMPoq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDDYgTvHsbc5xMigh3ircA5%2FCCgRYQLQLdQxlPmuLMnQiS1LZCXXzdsyqvy2n%2FYZyiPJz9yl0Np7uiH6w4sLoYBhSNtnZUFSOBo33wtEEFmDsg3wTC36GSaaE%2BRWU4jmy%2BQwU9gBrfIunRp3F%2Fo49LfP6nPI62T25fnFTKEMwFeS83PlA6BXfsaXpYYmmqTJdN4fAXjizgjISmHPk%2BK6p41uo0u061uh5QN6qIq7hryiNkrM0Ho2%2FzhO6Jt3Jb8MexkMFejXChRt5bv%2Bwlk19GdfOeH5I7sMtIziZzmT3WAMG6j19Z1SjBJvTMJ4AsVcVq5gECtXuJ9UTFCK8DDjak5k5RKa1j7ZhNIsOylkdXh4ZIq1Klirziq%2BIz3oieeWdQLAZQHLwdSiYdeZ4lSTZJg7GW2AunJylbr2W%2FAYzOg360fRr86BOVASCNVPSiJFJZuytJat%2BvDN6S65jGvaW4hMuUANF%2BlSDrP2FH0RnEgGZe8hslDH84rsJnuwe7XDl1KD4eVCu0S3%2B4uwqreGxCBsEAGxPPQqS1Xms1MEZHAVlDG02eEt%2BW53pKROYISLcCiHclP9gvGwdbNcPPe55UVvP9bjcOKkJVh3ZwexBhVUoa9v3sMiOzy7XpK9ImqLpDKt296B7Da6WUcb1MNvgt74GOqUBRVh6DfZKEvGVV%2BFWHEQyGm2fkQIAytqsDD65TaACRu65gecLeIjRvBuhUZd2xHweqKGXUlS%2F925S3J9e%2BTrHZ648%2BTuF12WwVHdNZBkP%2Fp2%2FRd3kXnvhE%2F5HSZHf1GwbHcXyKcWMgVsPNGd%2FmeoegK1OWwnJ0GhS6q%2BjBkUaxutNvodtnGD7ghI2w8rse4aOAgRt2LVsRq7ZzoD8Fk2QI35QqI59&X-Amz-Signature=00517626c55d4c9850078cb755cba272dbe1a38c7bc63360cc43dc6207c38d32&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O24H5L3%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T200134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIAYMHHi55XO3rBoJpF9eIvbVd4Chp7pgjcB9alMOqSlIAiEAyJQV9dqoeI0IviYa370JysyoGNEn3PPb1IS2PizHMPoq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDDYgTvHsbc5xMigh3ircA5%2FCCgRYQLQLdQxlPmuLMnQiS1LZCXXzdsyqvy2n%2FYZyiPJz9yl0Np7uiH6w4sLoYBhSNtnZUFSOBo33wtEEFmDsg3wTC36GSaaE%2BRWU4jmy%2BQwU9gBrfIunRp3F%2Fo49LfP6nPI62T25fnFTKEMwFeS83PlA6BXfsaXpYYmmqTJdN4fAXjizgjISmHPk%2BK6p41uo0u061uh5QN6qIq7hryiNkrM0Ho2%2FzhO6Jt3Jb8MexkMFejXChRt5bv%2Bwlk19GdfOeH5I7sMtIziZzmT3WAMG6j19Z1SjBJvTMJ4AsVcVq5gECtXuJ9UTFCK8DDjak5k5RKa1j7ZhNIsOylkdXh4ZIq1Klirziq%2BIz3oieeWdQLAZQHLwdSiYdeZ4lSTZJg7GW2AunJylbr2W%2FAYzOg360fRr86BOVASCNVPSiJFJZuytJat%2BvDN6S65jGvaW4hMuUANF%2BlSDrP2FH0RnEgGZe8hslDH84rsJnuwe7XDl1KD4eVCu0S3%2B4uwqreGxCBsEAGxPPQqS1Xms1MEZHAVlDG02eEt%2BW53pKROYISLcCiHclP9gvGwdbNcPPe55UVvP9bjcOKkJVh3ZwexBhVUoa9v3sMiOzy7XpK9ImqLpDKt296B7Da6WUcb1MNvgt74GOqUBRVh6DfZKEvGVV%2BFWHEQyGm2fkQIAytqsDD65TaACRu65gecLeIjRvBuhUZd2xHweqKGXUlS%2F925S3J9e%2BTrHZ648%2BTuF12WwVHdNZBkP%2Fp2%2FRd3kXnvhE%2F5HSZHf1GwbHcXyKcWMgVsPNGd%2FmeoegK1OWwnJ0GhS6q%2BjBkUaxutNvodtnGD7ghI2w8rse4aOAgRt2LVsRq7ZzoD8Fk2QI35QqI59&X-Amz-Signature=882acc230d2ded4494b01441e3fa8ec9b6447b39dff8795500de557ecaf0ca67&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
