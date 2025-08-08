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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LZAOJSP%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQC0rnia%2Bzu%2BEnITnES9d9PiyaAZxYRqsYCsfo36Dg6dbgIhAP%2Fpn0nniwwWaDiS6ArYCQppKSnLhI75XH%2BH%2FU2oPAzFKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8nFu1Fn6DAJfIy8kq3APxs9KUlSi3yzL%2Ft1VMViDc%2FXoj7R52eI5Yci1OEkDmcUYadTNAexEYxxz9tIg54FBxp136Fc%2B2utQC2CxwHBV8McTzgkOPVd6psxZAuH5eU57%2BKRLQ%2BwYuJeQepczeNtyRiggJ7byu1iIM3eBp%2BhNI%2BnDSV8yTWMHyFyGN8lg21EiadWTr4CWmoP23xBvSB7HbD37SKx%2BDwrbWd8%2Bj4aQ23sdkV9bkmiBlL5Zn5C9b8yDe5%2FFS1QfW%2F%2B040Y6pvuLZX6%2BbF20ZGTL2XgB2XZpq%2FZkpMmEN3S5gI0R2Z%2FsZn1D8%2Fj%2FVYoO%2B3JSlXFkXpSU2QGxG%2FwkAdFlaGqxl2pIFDr5F5dX%2BpXxSNJa%2BSZ%2F0ydz5o3TuEx8lHyN8Y0iwrLsP19a%2BXH4NH4CgI%2FwGXonZGzfpRQrF0zSu%2FSah9vX%2B3UCbQNHLjy%2FAnTDdT3LtAgc7N0LR2KgnQpK%2F%2F5nM3SgXWn1lpr6L1ppy38enp0pUmIT915R81YA%2F3JGBWFdyZfzU%2FxwRYzGT5MBf%2FwwtEkLYXq781xwePCbwiieASeMRRLqxqlAYimU3qBMwjOEXW6FhzjTNro8Yn8eMGhL1GDBy9ymRper3FxfzGEr%2FAMP1rN%2Bcp%2Bd4sAYIHKHMWjD12tfEBjqkAbixu%2B39bWneQgKJrJ8VriZJDkDIbBtolsgkz6d71pqLMkFE0ZOrh9E73z7dyHllof5oJCcJ6sOhqKFlidOUQELpc%2Bc%2FpoDDzKHoYjjUGLhIA6mQUWd%2FGuK8jb9NhIYTz9ZWgc%2BfGeXl17u4MqHZlrj2WRXc7cpQjBPfwXY22pLjF3olvB1UyhOBkzciqps1ulKvY8WNA4zy9qnrEKPfo2d4XT39&X-Amz-Signature=0b7a3f833f2950b426a49ce1f9a0d862d68089a7254e9058a9f72b7985db135d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LZAOJSP%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQC0rnia%2Bzu%2BEnITnES9d9PiyaAZxYRqsYCsfo36Dg6dbgIhAP%2Fpn0nniwwWaDiS6ArYCQppKSnLhI75XH%2BH%2FU2oPAzFKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8nFu1Fn6DAJfIy8kq3APxs9KUlSi3yzL%2Ft1VMViDc%2FXoj7R52eI5Yci1OEkDmcUYadTNAexEYxxz9tIg54FBxp136Fc%2B2utQC2CxwHBV8McTzgkOPVd6psxZAuH5eU57%2BKRLQ%2BwYuJeQepczeNtyRiggJ7byu1iIM3eBp%2BhNI%2BnDSV8yTWMHyFyGN8lg21EiadWTr4CWmoP23xBvSB7HbD37SKx%2BDwrbWd8%2Bj4aQ23sdkV9bkmiBlL5Zn5C9b8yDe5%2FFS1QfW%2F%2B040Y6pvuLZX6%2BbF20ZGTL2XgB2XZpq%2FZkpMmEN3S5gI0R2Z%2FsZn1D8%2Fj%2FVYoO%2B3JSlXFkXpSU2QGxG%2FwkAdFlaGqxl2pIFDr5F5dX%2BpXxSNJa%2BSZ%2F0ydz5o3TuEx8lHyN8Y0iwrLsP19a%2BXH4NH4CgI%2FwGXonZGzfpRQrF0zSu%2FSah9vX%2B3UCbQNHLjy%2FAnTDdT3LtAgc7N0LR2KgnQpK%2F%2F5nM3SgXWn1lpr6L1ppy38enp0pUmIT915R81YA%2F3JGBWFdyZfzU%2FxwRYzGT5MBf%2FwwtEkLYXq781xwePCbwiieASeMRRLqxqlAYimU3qBMwjOEXW6FhzjTNro8Yn8eMGhL1GDBy9ymRper3FxfzGEr%2FAMP1rN%2Bcp%2Bd4sAYIHKHMWjD12tfEBjqkAbixu%2B39bWneQgKJrJ8VriZJDkDIbBtolsgkz6d71pqLMkFE0ZOrh9E73z7dyHllof5oJCcJ6sOhqKFlidOUQELpc%2Bc%2FpoDDzKHoYjjUGLhIA6mQUWd%2FGuK8jb9NhIYTz9ZWgc%2BfGeXl17u4MqHZlrj2WRXc7cpQjBPfwXY22pLjF3olvB1UyhOBkzciqps1ulKvY8WNA4zy9qnrEKPfo2d4XT39&X-Amz-Signature=6ba6aabd2a506ba58515ed6ab41799861f9d50e1590970932c6e5f18e3d87924&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LZAOJSP%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQC0rnia%2Bzu%2BEnITnES9d9PiyaAZxYRqsYCsfo36Dg6dbgIhAP%2Fpn0nniwwWaDiS6ArYCQppKSnLhI75XH%2BH%2FU2oPAzFKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8nFu1Fn6DAJfIy8kq3APxs9KUlSi3yzL%2Ft1VMViDc%2FXoj7R52eI5Yci1OEkDmcUYadTNAexEYxxz9tIg54FBxp136Fc%2B2utQC2CxwHBV8McTzgkOPVd6psxZAuH5eU57%2BKRLQ%2BwYuJeQepczeNtyRiggJ7byu1iIM3eBp%2BhNI%2BnDSV8yTWMHyFyGN8lg21EiadWTr4CWmoP23xBvSB7HbD37SKx%2BDwrbWd8%2Bj4aQ23sdkV9bkmiBlL5Zn5C9b8yDe5%2FFS1QfW%2F%2B040Y6pvuLZX6%2BbF20ZGTL2XgB2XZpq%2FZkpMmEN3S5gI0R2Z%2FsZn1D8%2Fj%2FVYoO%2B3JSlXFkXpSU2QGxG%2FwkAdFlaGqxl2pIFDr5F5dX%2BpXxSNJa%2BSZ%2F0ydz5o3TuEx8lHyN8Y0iwrLsP19a%2BXH4NH4CgI%2FwGXonZGzfpRQrF0zSu%2FSah9vX%2B3UCbQNHLjy%2FAnTDdT3LtAgc7N0LR2KgnQpK%2F%2F5nM3SgXWn1lpr6L1ppy38enp0pUmIT915R81YA%2F3JGBWFdyZfzU%2FxwRYzGT5MBf%2FwwtEkLYXq781xwePCbwiieASeMRRLqxqlAYimU3qBMwjOEXW6FhzjTNro8Yn8eMGhL1GDBy9ymRper3FxfzGEr%2FAMP1rN%2Bcp%2Bd4sAYIHKHMWjD12tfEBjqkAbixu%2B39bWneQgKJrJ8VriZJDkDIbBtolsgkz6d71pqLMkFE0ZOrh9E73z7dyHllof5oJCcJ6sOhqKFlidOUQELpc%2Bc%2FpoDDzKHoYjjUGLhIA6mQUWd%2FGuK8jb9NhIYTz9ZWgc%2BfGeXl17u4MqHZlrj2WRXc7cpQjBPfwXY22pLjF3olvB1UyhOBkzciqps1ulKvY8WNA4zy9qnrEKPfo2d4XT39&X-Amz-Signature=2fed12cc9208a088c2a6fc72913a1f35be4d2fb06da386d8a6733b7db6427e12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
