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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZHZDCQY%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCae%2FUP5IkuWlSioee0OMIwzlnboVHyEjgfKgDENiUN7AIgYF6Q8%2BXp32%2FFpdJNpJwIpWgdJBszHlFEIVXHI3Re510q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDC7otTEh5yiDve3sPyrcA07tvWQku6nyGAsVDnOg8t8YFaCqfl1%2FoNymqaJLwDTO6577kLsK9UvzpaYyMPfoh6LOvVzF5BIDZXda9%2B56Q4fcosKD1dPOOpHytY3Jo4IPA76RGK1cAVi5aZDi9PFp4Jb2X%2BZ2%2FnhxmDm2dQAnqt5aZYdaP5jz2tX7gnUBupjeEpLyPcPI4trAD4dE%2FEP8RDTJs8XE3uS6uVcfo2p1Wj9n%2Fbwu%2B4DL0vNGiksXVpOGyckINGuHaUZm2e4C9OdFRmpT3Ovj1jZVhV5IrLCzEzFmCeKHgMToc5unYQPCE%2FJeA0liFoZ5bSCyT1npJNIp8sWZ7Bv5OoAKokMljBy%2Bb3QOzDesdVFL8ophaWRmaKODbJpLuROol0qLAv3cJk2WE0%2FG4Q%2B31hwfceIWBwgMT1em%2Bif186y3nBbxzwBjKlNavlPDC5UleF%2B%2F9q0JPrKHm%2F0kNVwrpeKy3600SoNCd72L4xZ%2FVkPJ74S4tCBsLo3OixLWFf26B6Be8I%2BuQZUo62FrLGzVk5fJp2KLIZzO5LBkJ0kP7gD2eAFpY%2FxpTnUjjxZrFcdqSmszG0PTOPaiS%2Bx3%2B9YokhvpT5cFYWyYWabRe7Zjx6T61BxkjufkGuJ%2FQTvJZTttjK7L%2BDC6MMaRjcIGOqUBhMsO2LesG94s%2BeE1iScCQEd83KNFMoZPa6m81no2Zo%2BB%2BsHY2cPnIdauVjzDCQDiDfdMR69%2BSyzdd9XLa5tqjOPFG9QIljGfcGwVSe6zcf9utKbNuu1pYRkEfCZRBBLaYm3rQmP%2BA1iw1dtTUftZ9VQHKvYG4Q3pGXoiB09lJ5F0MMZosJbVOYQ2dM5efjl7i0NtWRBMNFTIeeqvQQfqb%2FOIH9mt&X-Amz-Signature=1ba4fcbeed7bec3a6425379cba7f2e967c9b86e30e7b059768883d2143d300c3&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZHZDCQY%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCae%2FUP5IkuWlSioee0OMIwzlnboVHyEjgfKgDENiUN7AIgYF6Q8%2BXp32%2FFpdJNpJwIpWgdJBszHlFEIVXHI3Re510q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDC7otTEh5yiDve3sPyrcA07tvWQku6nyGAsVDnOg8t8YFaCqfl1%2FoNymqaJLwDTO6577kLsK9UvzpaYyMPfoh6LOvVzF5BIDZXda9%2B56Q4fcosKD1dPOOpHytY3Jo4IPA76RGK1cAVi5aZDi9PFp4Jb2X%2BZ2%2FnhxmDm2dQAnqt5aZYdaP5jz2tX7gnUBupjeEpLyPcPI4trAD4dE%2FEP8RDTJs8XE3uS6uVcfo2p1Wj9n%2Fbwu%2B4DL0vNGiksXVpOGyckINGuHaUZm2e4C9OdFRmpT3Ovj1jZVhV5IrLCzEzFmCeKHgMToc5unYQPCE%2FJeA0liFoZ5bSCyT1npJNIp8sWZ7Bv5OoAKokMljBy%2Bb3QOzDesdVFL8ophaWRmaKODbJpLuROol0qLAv3cJk2WE0%2FG4Q%2B31hwfceIWBwgMT1em%2Bif186y3nBbxzwBjKlNavlPDC5UleF%2B%2F9q0JPrKHm%2F0kNVwrpeKy3600SoNCd72L4xZ%2FVkPJ74S4tCBsLo3OixLWFf26B6Be8I%2BuQZUo62FrLGzVk5fJp2KLIZzO5LBkJ0kP7gD2eAFpY%2FxpTnUjjxZrFcdqSmszG0PTOPaiS%2Bx3%2B9YokhvpT5cFYWyYWabRe7Zjx6T61BxkjufkGuJ%2FQTvJZTttjK7L%2BDC6MMaRjcIGOqUBhMsO2LesG94s%2BeE1iScCQEd83KNFMoZPa6m81no2Zo%2BB%2BsHY2cPnIdauVjzDCQDiDfdMR69%2BSyzdd9XLa5tqjOPFG9QIljGfcGwVSe6zcf9utKbNuu1pYRkEfCZRBBLaYm3rQmP%2BA1iw1dtTUftZ9VQHKvYG4Q3pGXoiB09lJ5F0MMZosJbVOYQ2dM5efjl7i0NtWRBMNFTIeeqvQQfqb%2FOIH9mt&X-Amz-Signature=127bc13e6f81f5935b99f4712ad53cc8ff9e52d667d45aabd3f21747c48c79ff&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZHZDCQY%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCae%2FUP5IkuWlSioee0OMIwzlnboVHyEjgfKgDENiUN7AIgYF6Q8%2BXp32%2FFpdJNpJwIpWgdJBszHlFEIVXHI3Re510q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDC7otTEh5yiDve3sPyrcA07tvWQku6nyGAsVDnOg8t8YFaCqfl1%2FoNymqaJLwDTO6577kLsK9UvzpaYyMPfoh6LOvVzF5BIDZXda9%2B56Q4fcosKD1dPOOpHytY3Jo4IPA76RGK1cAVi5aZDi9PFp4Jb2X%2BZ2%2FnhxmDm2dQAnqt5aZYdaP5jz2tX7gnUBupjeEpLyPcPI4trAD4dE%2FEP8RDTJs8XE3uS6uVcfo2p1Wj9n%2Fbwu%2B4DL0vNGiksXVpOGyckINGuHaUZm2e4C9OdFRmpT3Ovj1jZVhV5IrLCzEzFmCeKHgMToc5unYQPCE%2FJeA0liFoZ5bSCyT1npJNIp8sWZ7Bv5OoAKokMljBy%2Bb3QOzDesdVFL8ophaWRmaKODbJpLuROol0qLAv3cJk2WE0%2FG4Q%2B31hwfceIWBwgMT1em%2Bif186y3nBbxzwBjKlNavlPDC5UleF%2B%2F9q0JPrKHm%2F0kNVwrpeKy3600SoNCd72L4xZ%2FVkPJ74S4tCBsLo3OixLWFf26B6Be8I%2BuQZUo62FrLGzVk5fJp2KLIZzO5LBkJ0kP7gD2eAFpY%2FxpTnUjjxZrFcdqSmszG0PTOPaiS%2Bx3%2B9YokhvpT5cFYWyYWabRe7Zjx6T61BxkjufkGuJ%2FQTvJZTttjK7L%2BDC6MMaRjcIGOqUBhMsO2LesG94s%2BeE1iScCQEd83KNFMoZPa6m81no2Zo%2BB%2BsHY2cPnIdauVjzDCQDiDfdMR69%2BSyzdd9XLa5tqjOPFG9QIljGfcGwVSe6zcf9utKbNuu1pYRkEfCZRBBLaYm3rQmP%2BA1iw1dtTUftZ9VQHKvYG4Q3pGXoiB09lJ5F0MMZosJbVOYQ2dM5efjl7i0NtWRBMNFTIeeqvQQfqb%2FOIH9mt&X-Amz-Signature=4fd8d3feb2102b8cd84c8be772eeb45a8c1c23b67d5db80710154177c23b0b88&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
