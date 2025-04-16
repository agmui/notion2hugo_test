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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SVELGP3%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T050920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvkC1CglD7BicOK5IMAOvbqw2J3bfX62FTUBtHu2Y8wAiBqk7VvdmuBX5Wm9hxgeURa6jUxaWxpRBM8zDcPO5lOEir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMuFPg5KJT3GrtIxeMKtwD%2BEJoiQDLSo887Fe4BNIUNX3H9AqC%2Fe%2BUDrBX%2BSCQBEkZLvIWjFcyAaNb8l8WSEK5Wpc9r1Ep6BQozXz2TVS1zmWSN0tAN7oQWommSz%2F2lK8phomNhAcIs582LisC0yNDqQ0vkchB1TrIr%2Bki6DjAk5UjCwZ5%2BXJTZriVOadCR9rzeJimHkFvAZGEg0hpa394reAALAmf%2FMJI3GAfb0VhOV4SIeqnhSGC1sfAen9Swb7rTgHXv%2BoayIS0cjvuAjRsb6ar%2FLCeXtQyN7ZMh0NSMxCekbPV3NMYcvyW2xTCuR%2FiosKRNioNfU%2FNNKCLMy%2Fs4S5PfGEKS24WIZN%2BtR5lLHH6NnUtzyrybHzL2B41zAxzJ9LrmX6GhTvX%2Fh9uCXCOL%2B%2FflVvlbCCIRMf%2BwCt80uVoyL5dvKW8Lr6ZVZUq2Q5lAQJrBmPXKo4Jh3LhXzrTVOm%2F8y%2BWtV7Fbw%2BTK42sw6bcHTI4E8WP2Fcb%2F26a6P3qGkfQHuEYeURid781IPrqSnOlkOsCVEplSZmXbF4e2dE%2BR2TAj3tLIcPhmbAztcLOUYU4Wa6r7313giIlnIKH4gcYlpm%2FWcdv5sELCeqhk%2FNnAs5HHkDoD8Qz%2BMOOJr13rQTYFtqjbFU0qC0whfL8vwY6pgEjzNo2kAuEek9ImGkDnFvhabTTrExKpXa16cs85wkMlIrFiyeOZ1Zc4xcESZly6%2FOvkrSx0QW6FWDiWtHf7K%2Bh%2FK2YakuZ6p4HLIDOBAlcojPYxZ0W1Iujra5fOsTHVLUCEJOgbBGXbBx3htJn1Xhtn7Yg6VSBNHO4Ob4m7DfLi0OpTcfbwU%2FHdZZJ6XA%2FdSJTD5GhZ7%2Bceljgiky2QzgY5bN%2BhaGY&X-Amz-Signature=c45fbd3560cb53463edbd2b1168d95d4630f39efd19a55f9840eef746795e862&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SVELGP3%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T050920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvkC1CglD7BicOK5IMAOvbqw2J3bfX62FTUBtHu2Y8wAiBqk7VvdmuBX5Wm9hxgeURa6jUxaWxpRBM8zDcPO5lOEir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMuFPg5KJT3GrtIxeMKtwD%2BEJoiQDLSo887Fe4BNIUNX3H9AqC%2Fe%2BUDrBX%2BSCQBEkZLvIWjFcyAaNb8l8WSEK5Wpc9r1Ep6BQozXz2TVS1zmWSN0tAN7oQWommSz%2F2lK8phomNhAcIs582LisC0yNDqQ0vkchB1TrIr%2Bki6DjAk5UjCwZ5%2BXJTZriVOadCR9rzeJimHkFvAZGEg0hpa394reAALAmf%2FMJI3GAfb0VhOV4SIeqnhSGC1sfAen9Swb7rTgHXv%2BoayIS0cjvuAjRsb6ar%2FLCeXtQyN7ZMh0NSMxCekbPV3NMYcvyW2xTCuR%2FiosKRNioNfU%2FNNKCLMy%2Fs4S5PfGEKS24WIZN%2BtR5lLHH6NnUtzyrybHzL2B41zAxzJ9LrmX6GhTvX%2Fh9uCXCOL%2B%2FflVvlbCCIRMf%2BwCt80uVoyL5dvKW8Lr6ZVZUq2Q5lAQJrBmPXKo4Jh3LhXzrTVOm%2F8y%2BWtV7Fbw%2BTK42sw6bcHTI4E8WP2Fcb%2F26a6P3qGkfQHuEYeURid781IPrqSnOlkOsCVEplSZmXbF4e2dE%2BR2TAj3tLIcPhmbAztcLOUYU4Wa6r7313giIlnIKH4gcYlpm%2FWcdv5sELCeqhk%2FNnAs5HHkDoD8Qz%2BMOOJr13rQTYFtqjbFU0qC0whfL8vwY6pgEjzNo2kAuEek9ImGkDnFvhabTTrExKpXa16cs85wkMlIrFiyeOZ1Zc4xcESZly6%2FOvkrSx0QW6FWDiWtHf7K%2Bh%2FK2YakuZ6p4HLIDOBAlcojPYxZ0W1Iujra5fOsTHVLUCEJOgbBGXbBx3htJn1Xhtn7Yg6VSBNHO4Ob4m7DfLi0OpTcfbwU%2FHdZZJ6XA%2FdSJTD5GhZ7%2Bceljgiky2QzgY5bN%2BhaGY&X-Amz-Signature=acada9997f59bb5029b29379c743cc577d94f136aff2b4ecbe618e5260daed14&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SVELGP3%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T050920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvkC1CglD7BicOK5IMAOvbqw2J3bfX62FTUBtHu2Y8wAiBqk7VvdmuBX5Wm9hxgeURa6jUxaWxpRBM8zDcPO5lOEir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMuFPg5KJT3GrtIxeMKtwD%2BEJoiQDLSo887Fe4BNIUNX3H9AqC%2Fe%2BUDrBX%2BSCQBEkZLvIWjFcyAaNb8l8WSEK5Wpc9r1Ep6BQozXz2TVS1zmWSN0tAN7oQWommSz%2F2lK8phomNhAcIs582LisC0yNDqQ0vkchB1TrIr%2Bki6DjAk5UjCwZ5%2BXJTZriVOadCR9rzeJimHkFvAZGEg0hpa394reAALAmf%2FMJI3GAfb0VhOV4SIeqnhSGC1sfAen9Swb7rTgHXv%2BoayIS0cjvuAjRsb6ar%2FLCeXtQyN7ZMh0NSMxCekbPV3NMYcvyW2xTCuR%2FiosKRNioNfU%2FNNKCLMy%2Fs4S5PfGEKS24WIZN%2BtR5lLHH6NnUtzyrybHzL2B41zAxzJ9LrmX6GhTvX%2Fh9uCXCOL%2B%2FflVvlbCCIRMf%2BwCt80uVoyL5dvKW8Lr6ZVZUq2Q5lAQJrBmPXKo4Jh3LhXzrTVOm%2F8y%2BWtV7Fbw%2BTK42sw6bcHTI4E8WP2Fcb%2F26a6P3qGkfQHuEYeURid781IPrqSnOlkOsCVEplSZmXbF4e2dE%2BR2TAj3tLIcPhmbAztcLOUYU4Wa6r7313giIlnIKH4gcYlpm%2FWcdv5sELCeqhk%2FNnAs5HHkDoD8Qz%2BMOOJr13rQTYFtqjbFU0qC0whfL8vwY6pgEjzNo2kAuEek9ImGkDnFvhabTTrExKpXa16cs85wkMlIrFiyeOZ1Zc4xcESZly6%2FOvkrSx0QW6FWDiWtHf7K%2Bh%2FK2YakuZ6p4HLIDOBAlcojPYxZ0W1Iujra5fOsTHVLUCEJOgbBGXbBx3htJn1Xhtn7Yg6VSBNHO4Ob4m7DfLi0OpTcfbwU%2FHdZZJ6XA%2FdSJTD5GhZ7%2Bceljgiky2QzgY5bN%2BhaGY&X-Amz-Signature=cc2826a0abfaab35be230796b363f325f4622bc06e631e7bdeb704e1232679dd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
