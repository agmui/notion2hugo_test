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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W45LZLOR%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQD7xslvg5W0g889bhiZRlbORq%2Bi9R3FZvvW6j7sGtAmYgIgbnq84Ei%2BW6qf9skq0hd%2B21Ymtb4VwhMoq6h5a6tkBPQq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDDN%2B2yLUt%2BIbcaoMNyrcA7gLBTHCmghw%2BAEelDxhX2PRdlq5FfONPXKyYdNEiso3cRVnJSAZ7JIxAELVTsqO1Ekr779kqQ2Og%2B47cgDhFhAS3CdfOs6JZ%2BmVulx7XFV0Iw9VHBoFZ%2BtbIusPndHYitMK8FIoI7YLtNOj6BwRP%2BJV8gKyHPoOOd39rUxlLbV74inziLmgWArG0D1%2BwDe2wqzCHOtg8NAdSGW3ESEEwpJ12SBjeZqI0CYtjnwesvZoPi1rIUSC2t%2FJ5BG7lf5PPOVxFh4Vf7HBeXm0uk2A6g3zuzZuSri1jkURTrI2aDHbTwP%2B2PG3m7Hkvh2JaDThks7OMKByZi3s5zzeveG0RuqZxcryHepU0mMHG2VZw%2BBsivWJiVBNBybDDQME734v19K3ZQny3UCmC0YHsB0eKX7lIkjweX9elPR476jxeiZxEw86SjwFwHNdMHe4KlIy5gDhazDF%2FwFIg5irn5pGwayelqAMC%2FYQqUohOXhx6UapjX8v%2Fcp5ZFdEuMNdyCjSjgLXBdBYMg38bUqIZMtwDkyUYh8soeU%2FcTSqIvpdWAoBjrbT9wiJ8BolkD%2BdCbkllIT77etVviYdAjYvlDSoMwtcEtjnNv5ialOwkeTytzZAn4djXBfXBDB6kOMpMLuA%2Fr0GOqUBSvFctWDj0Vl0xcdOzwScfIBE%2F5sPVGVzAsUEruoC42auuy5DEf1eM21Y6Z2LtxEnH0nVrVRjsBoB%2Be36JIM5X0udPajLwGtGU5f5ZojRofG41ESpk7gl1h2TQxbWgUYZOjU0mrenlkmM1il4l6zKdGgia5EFjVVrmoYSQVnydOodqJYwp3%2F2JpOf%2FVTK9XH%2B59cuMAQKwunZxYrk%2BYp0YyipQua7&X-Amz-Signature=3d35fc4f7e6ede777a8acac7ed3d106a2d07996c7995f63eb222ad3812202e40&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W45LZLOR%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQD7xslvg5W0g889bhiZRlbORq%2Bi9R3FZvvW6j7sGtAmYgIgbnq84Ei%2BW6qf9skq0hd%2B21Ymtb4VwhMoq6h5a6tkBPQq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDDN%2B2yLUt%2BIbcaoMNyrcA7gLBTHCmghw%2BAEelDxhX2PRdlq5FfONPXKyYdNEiso3cRVnJSAZ7JIxAELVTsqO1Ekr779kqQ2Og%2B47cgDhFhAS3CdfOs6JZ%2BmVulx7XFV0Iw9VHBoFZ%2BtbIusPndHYitMK8FIoI7YLtNOj6BwRP%2BJV8gKyHPoOOd39rUxlLbV74inziLmgWArG0D1%2BwDe2wqzCHOtg8NAdSGW3ESEEwpJ12SBjeZqI0CYtjnwesvZoPi1rIUSC2t%2FJ5BG7lf5PPOVxFh4Vf7HBeXm0uk2A6g3zuzZuSri1jkURTrI2aDHbTwP%2B2PG3m7Hkvh2JaDThks7OMKByZi3s5zzeveG0RuqZxcryHepU0mMHG2VZw%2BBsivWJiVBNBybDDQME734v19K3ZQny3UCmC0YHsB0eKX7lIkjweX9elPR476jxeiZxEw86SjwFwHNdMHe4KlIy5gDhazDF%2FwFIg5irn5pGwayelqAMC%2FYQqUohOXhx6UapjX8v%2Fcp5ZFdEuMNdyCjSjgLXBdBYMg38bUqIZMtwDkyUYh8soeU%2FcTSqIvpdWAoBjrbT9wiJ8BolkD%2BdCbkllIT77etVviYdAjYvlDSoMwtcEtjnNv5ialOwkeTytzZAn4djXBfXBDB6kOMpMLuA%2Fr0GOqUBSvFctWDj0Vl0xcdOzwScfIBE%2F5sPVGVzAsUEruoC42auuy5DEf1eM21Y6Z2LtxEnH0nVrVRjsBoB%2Be36JIM5X0udPajLwGtGU5f5ZojRofG41ESpk7gl1h2TQxbWgUYZOjU0mrenlkmM1il4l6zKdGgia5EFjVVrmoYSQVnydOodqJYwp3%2F2JpOf%2FVTK9XH%2B59cuMAQKwunZxYrk%2BYp0YyipQua7&X-Amz-Signature=4b4f295553e9116974064c6d0d34a981d1681161cde1a7d052a2b6055b05e1ee&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W45LZLOR%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQD7xslvg5W0g889bhiZRlbORq%2Bi9R3FZvvW6j7sGtAmYgIgbnq84Ei%2BW6qf9skq0hd%2B21Ymtb4VwhMoq6h5a6tkBPQq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDDN%2B2yLUt%2BIbcaoMNyrcA7gLBTHCmghw%2BAEelDxhX2PRdlq5FfONPXKyYdNEiso3cRVnJSAZ7JIxAELVTsqO1Ekr779kqQ2Og%2B47cgDhFhAS3CdfOs6JZ%2BmVulx7XFV0Iw9VHBoFZ%2BtbIusPndHYitMK8FIoI7YLtNOj6BwRP%2BJV8gKyHPoOOd39rUxlLbV74inziLmgWArG0D1%2BwDe2wqzCHOtg8NAdSGW3ESEEwpJ12SBjeZqI0CYtjnwesvZoPi1rIUSC2t%2FJ5BG7lf5PPOVxFh4Vf7HBeXm0uk2A6g3zuzZuSri1jkURTrI2aDHbTwP%2B2PG3m7Hkvh2JaDThks7OMKByZi3s5zzeveG0RuqZxcryHepU0mMHG2VZw%2BBsivWJiVBNBybDDQME734v19K3ZQny3UCmC0YHsB0eKX7lIkjweX9elPR476jxeiZxEw86SjwFwHNdMHe4KlIy5gDhazDF%2FwFIg5irn5pGwayelqAMC%2FYQqUohOXhx6UapjX8v%2Fcp5ZFdEuMNdyCjSjgLXBdBYMg38bUqIZMtwDkyUYh8soeU%2FcTSqIvpdWAoBjrbT9wiJ8BolkD%2BdCbkllIT77etVviYdAjYvlDSoMwtcEtjnNv5ialOwkeTytzZAn4djXBfXBDB6kOMpMLuA%2Fr0GOqUBSvFctWDj0Vl0xcdOzwScfIBE%2F5sPVGVzAsUEruoC42auuy5DEf1eM21Y6Z2LtxEnH0nVrVRjsBoB%2Be36JIM5X0udPajLwGtGU5f5ZojRofG41ESpk7gl1h2TQxbWgUYZOjU0mrenlkmM1il4l6zKdGgia5EFjVVrmoYSQVnydOodqJYwp3%2F2JpOf%2FVTK9XH%2B59cuMAQKwunZxYrk%2BYp0YyipQua7&X-Amz-Signature=08f3271bcd88b84f6a1157e999c5d57852cdeca5823de5e68662a45c8c0d485f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
