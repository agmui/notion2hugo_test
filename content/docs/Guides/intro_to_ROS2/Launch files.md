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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HZF2K2T%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T032430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGuIaX4ir8kt8EjTbfOjwZsX8PJ79fweESyY1TLY%2FBRRAiBZe9LXS0VkPExghyTFDrR7czYLG0S5oJOXRTZO1B39uir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMrA6wi1Qic9mGjK9aKtwDTzWOamFK%2FeKg73Vn8Rhjco8goSyXkoM44wrQ25I44aE6nruDSabZHI1VtLut15BsdQjcZJQmduvvz67oJUGvbJ2dJyQ8wJ%2Bn%2FpHR%2Bi6vtLmi5VeKMUmB9VPyYbs7acFyrtPt%2BthqZENmJaR2y1RaHcdizhEnzSoDigYkJc%2B6TZEv6n7X53Uud7msEZQLP5guIfDgE7q57XzfTnnQ1Q2QQ13dv%2BwRCjB%2Bl0m%2FPUlTPf5eQ37ovsV6kZ%2BBkXa2ljjhYE3EHjxd4adi6UlWHEaqSo4rg%2FZ%2BfMa930Ak61hLb0UovoidXdjt8WJ3aS3k8sC7koUk2FuaogNWLjvblqNds3glaVy%2Bg2ySUFK9mJcJJj%2Fl%2BADF%2B591jOKjjTHnmAW%2B5zdoOkagyR2B7RkY17fQCSIHiQX1%2BvWch0zhHH18R%2FdJk5%2F4COELx3VFkV3GHZlmgwTSGpmwfGcXjiQD%2BEKaiT3hFTgcPxk3eNc46veB038NCXp8SEipjuSphThMkzcgYBCwhupp0U4Xy8s3dZXsh5YRtgK%2Bh8E6ppnVA%2BEStWrVeL7Zyo1Ii6xoWjKRduBlMxxPZZ1Lx%2FmkllNaPFGkOrOYjlwD%2B2ScOAj9rr5MSGL19jLP6IXUAAXXIHcw8Y2xwAY6pgEgQcIj1%2F6t1y3ICYw5Xjijv%2BEfUD5L872o3fwiwGg6qzDxlh5TSfw0WL0iaTyh6Fr%2F7g8eekzYZh5OYBC2jsuQNgEgL4p8V6R0l21X%2Fog5xHZzJBsL%2BU2kSAqdgiGDiyrwtd6uwopQ2eFuwx1EsQKxLx0y3NIwGBMJHfDSviDagwV0AQZuTP%2B9UToW2fwKXLYOexomlwUHoBd4VmvTHFrc0%2FbEjY8U&X-Amz-Signature=f94ca1acc0b5231966cfcf2bf81842432f292741f1707671a1f5fd139539848d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HZF2K2T%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T032430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGuIaX4ir8kt8EjTbfOjwZsX8PJ79fweESyY1TLY%2FBRRAiBZe9LXS0VkPExghyTFDrR7czYLG0S5oJOXRTZO1B39uir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMrA6wi1Qic9mGjK9aKtwDTzWOamFK%2FeKg73Vn8Rhjco8goSyXkoM44wrQ25I44aE6nruDSabZHI1VtLut15BsdQjcZJQmduvvz67oJUGvbJ2dJyQ8wJ%2Bn%2FpHR%2Bi6vtLmi5VeKMUmB9VPyYbs7acFyrtPt%2BthqZENmJaR2y1RaHcdizhEnzSoDigYkJc%2B6TZEv6n7X53Uud7msEZQLP5guIfDgE7q57XzfTnnQ1Q2QQ13dv%2BwRCjB%2Bl0m%2FPUlTPf5eQ37ovsV6kZ%2BBkXa2ljjhYE3EHjxd4adi6UlWHEaqSo4rg%2FZ%2BfMa930Ak61hLb0UovoidXdjt8WJ3aS3k8sC7koUk2FuaogNWLjvblqNds3glaVy%2Bg2ySUFK9mJcJJj%2Fl%2BADF%2B591jOKjjTHnmAW%2B5zdoOkagyR2B7RkY17fQCSIHiQX1%2BvWch0zhHH18R%2FdJk5%2F4COELx3VFkV3GHZlmgwTSGpmwfGcXjiQD%2BEKaiT3hFTgcPxk3eNc46veB038NCXp8SEipjuSphThMkzcgYBCwhupp0U4Xy8s3dZXsh5YRtgK%2Bh8E6ppnVA%2BEStWrVeL7Zyo1Ii6xoWjKRduBlMxxPZZ1Lx%2FmkllNaPFGkOrOYjlwD%2B2ScOAj9rr5MSGL19jLP6IXUAAXXIHcw8Y2xwAY6pgEgQcIj1%2F6t1y3ICYw5Xjijv%2BEfUD5L872o3fwiwGg6qzDxlh5TSfw0WL0iaTyh6Fr%2F7g8eekzYZh5OYBC2jsuQNgEgL4p8V6R0l21X%2Fog5xHZzJBsL%2BU2kSAqdgiGDiyrwtd6uwopQ2eFuwx1EsQKxLx0y3NIwGBMJHfDSviDagwV0AQZuTP%2B9UToW2fwKXLYOexomlwUHoBd4VmvTHFrc0%2FbEjY8U&X-Amz-Signature=279e62456951271312dee178bd61fe43cc202a8766e16db2f60cde75a3f33b2a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HZF2K2T%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T032430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGuIaX4ir8kt8EjTbfOjwZsX8PJ79fweESyY1TLY%2FBRRAiBZe9LXS0VkPExghyTFDrR7czYLG0S5oJOXRTZO1B39uir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMrA6wi1Qic9mGjK9aKtwDTzWOamFK%2FeKg73Vn8Rhjco8goSyXkoM44wrQ25I44aE6nruDSabZHI1VtLut15BsdQjcZJQmduvvz67oJUGvbJ2dJyQ8wJ%2Bn%2FpHR%2Bi6vtLmi5VeKMUmB9VPyYbs7acFyrtPt%2BthqZENmJaR2y1RaHcdizhEnzSoDigYkJc%2B6TZEv6n7X53Uud7msEZQLP5guIfDgE7q57XzfTnnQ1Q2QQ13dv%2BwRCjB%2Bl0m%2FPUlTPf5eQ37ovsV6kZ%2BBkXa2ljjhYE3EHjxd4adi6UlWHEaqSo4rg%2FZ%2BfMa930Ak61hLb0UovoidXdjt8WJ3aS3k8sC7koUk2FuaogNWLjvblqNds3glaVy%2Bg2ySUFK9mJcJJj%2Fl%2BADF%2B591jOKjjTHnmAW%2B5zdoOkagyR2B7RkY17fQCSIHiQX1%2BvWch0zhHH18R%2FdJk5%2F4COELx3VFkV3GHZlmgwTSGpmwfGcXjiQD%2BEKaiT3hFTgcPxk3eNc46veB038NCXp8SEipjuSphThMkzcgYBCwhupp0U4Xy8s3dZXsh5YRtgK%2Bh8E6ppnVA%2BEStWrVeL7Zyo1Ii6xoWjKRduBlMxxPZZ1Lx%2FmkllNaPFGkOrOYjlwD%2B2ScOAj9rr5MSGL19jLP6IXUAAXXIHcw8Y2xwAY6pgEgQcIj1%2F6t1y3ICYw5Xjijv%2BEfUD5L872o3fwiwGg6qzDxlh5TSfw0WL0iaTyh6Fr%2F7g8eekzYZh5OYBC2jsuQNgEgL4p8V6R0l21X%2Fog5xHZzJBsL%2BU2kSAqdgiGDiyrwtd6uwopQ2eFuwx1EsQKxLx0y3NIwGBMJHfDSviDagwV0AQZuTP%2B9UToW2fwKXLYOexomlwUHoBd4VmvTHFrc0%2FbEjY8U&X-Amz-Signature=d53b2f38fc669f4f04aec962e809011e8b67178db6497498d633c4c22e47c18e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
