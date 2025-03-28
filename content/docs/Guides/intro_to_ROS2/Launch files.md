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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677IGQOCV%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7HPZrEY9Fzey1DoZri3NiXSADAfrN7lXcEWdKEjlXxgIgEUkzDvWpr%2FPaQhXwhP4UKdBGRUAhotPvG%2F3IB%2ByLIy0q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDEhd12GibSWYFLXcHyrcAzRj8H4UZ2gQEKe2V%2Brp2AZASnjzpZHBqlOI26LjdTAhJQR%2BZP1J9tvjLZCpNRhQ%2F1W9SBdQHpCovbiQ3qZ1wQgABg06N8GnnaZ6PUIXQh4fjVF1NhxKV%2BKhBJ579of3OzplmIoS5YPLeLJ%2FHaYKSajlY1OV0ApRoUmdGO2b6s4FbC5GWxtUj3Xo3wF6Q7us4QeU950e7BKR6d9hELZjB%2FajRuXewu%2Ba7pmKEuS%2BYF9Eb2lxjk%2FgwaaXoEsxsK6rEq8BrieT4QLEp%2BbA63%2BaacplSAt5AmKEz0DknTPXVOMsO%2F4tAuBNkZsgXadbmxnw1K1xXAtLAe5jVAhQyUqda2%2B0%2FhjP9WRDl4snMKmiVxPyl9l3DfQHxyslVyenen0Vwqw4zLAAF%2BxXSI%2Bvv6mNQDFqKKDIWgCpYnqK%2B%2BLLPADs9Ow4L7kU%2FWnFkSALY44Pg7BdjefqIJL6IAtJ9w8kokSD%2F0%2BbceGIR03EkQCFIdazzeXdyCZgBdZC8%2BTwHGsMQgy5brkNWIgr5c9XLvN5d2cQYnN7%2BOefqwDJ5x29qMPLPSiy3KHU0oAD%2Bzg7bg2TbkmvE3HzxL2268mhi0EQtUPgl5Up3NHm9LDq%2Bu5y1iwwXWP3zHbhDq2%2BhU9kMJfbmb8GOqUBDFBOge6ML8zdPFy2Forahdxg7UKkdhRD3k0XYN5X%2FKZNrv6sfJQ4rIT7ioYBLZUqOss%2BPN%2F5zx6u9QYGZJ1OexwsQU0ElLCN4AWsiOTuJf24UD0R0YvZse3KmWhdiSPssRVJZ2E93sDAQsgdyF1b1soff87kQqiRrECIH4Y0hMyC26uRXqh5AkoXgnSkkHfNlkzDHGaNTM%2Ftd2seq%2B2nxmxprwY8&X-Amz-Signature=680715a9a7009a98e6e3a486e48f2336c26a49adb6479df8ff3f8be5833243ab&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677IGQOCV%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7HPZrEY9Fzey1DoZri3NiXSADAfrN7lXcEWdKEjlXxgIgEUkzDvWpr%2FPaQhXwhP4UKdBGRUAhotPvG%2F3IB%2ByLIy0q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDEhd12GibSWYFLXcHyrcAzRj8H4UZ2gQEKe2V%2Brp2AZASnjzpZHBqlOI26LjdTAhJQR%2BZP1J9tvjLZCpNRhQ%2F1W9SBdQHpCovbiQ3qZ1wQgABg06N8GnnaZ6PUIXQh4fjVF1NhxKV%2BKhBJ579of3OzplmIoS5YPLeLJ%2FHaYKSajlY1OV0ApRoUmdGO2b6s4FbC5GWxtUj3Xo3wF6Q7us4QeU950e7BKR6d9hELZjB%2FajRuXewu%2Ba7pmKEuS%2BYF9Eb2lxjk%2FgwaaXoEsxsK6rEq8BrieT4QLEp%2BbA63%2BaacplSAt5AmKEz0DknTPXVOMsO%2F4tAuBNkZsgXadbmxnw1K1xXAtLAe5jVAhQyUqda2%2B0%2FhjP9WRDl4snMKmiVxPyl9l3DfQHxyslVyenen0Vwqw4zLAAF%2BxXSI%2Bvv6mNQDFqKKDIWgCpYnqK%2B%2BLLPADs9Ow4L7kU%2FWnFkSALY44Pg7BdjefqIJL6IAtJ9w8kokSD%2F0%2BbceGIR03EkQCFIdazzeXdyCZgBdZC8%2BTwHGsMQgy5brkNWIgr5c9XLvN5d2cQYnN7%2BOefqwDJ5x29qMPLPSiy3KHU0oAD%2Bzg7bg2TbkmvE3HzxL2268mhi0EQtUPgl5Up3NHm9LDq%2Bu5y1iwwXWP3zHbhDq2%2BhU9kMJfbmb8GOqUBDFBOge6ML8zdPFy2Forahdxg7UKkdhRD3k0XYN5X%2FKZNrv6sfJQ4rIT7ioYBLZUqOss%2BPN%2F5zx6u9QYGZJ1OexwsQU0ElLCN4AWsiOTuJf24UD0R0YvZse3KmWhdiSPssRVJZ2E93sDAQsgdyF1b1soff87kQqiRrECIH4Y0hMyC26uRXqh5AkoXgnSkkHfNlkzDHGaNTM%2Ftd2seq%2B2nxmxprwY8&X-Amz-Signature=a8343b0cccd8ae3979b6450ed78312bdc6e450ab61a424904f91f769fd683df8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677IGQOCV%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7HPZrEY9Fzey1DoZri3NiXSADAfrN7lXcEWdKEjlXxgIgEUkzDvWpr%2FPaQhXwhP4UKdBGRUAhotPvG%2F3IB%2ByLIy0q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDEhd12GibSWYFLXcHyrcAzRj8H4UZ2gQEKe2V%2Brp2AZASnjzpZHBqlOI26LjdTAhJQR%2BZP1J9tvjLZCpNRhQ%2F1W9SBdQHpCovbiQ3qZ1wQgABg06N8GnnaZ6PUIXQh4fjVF1NhxKV%2BKhBJ579of3OzplmIoS5YPLeLJ%2FHaYKSajlY1OV0ApRoUmdGO2b6s4FbC5GWxtUj3Xo3wF6Q7us4QeU950e7BKR6d9hELZjB%2FajRuXewu%2Ba7pmKEuS%2BYF9Eb2lxjk%2FgwaaXoEsxsK6rEq8BrieT4QLEp%2BbA63%2BaacplSAt5AmKEz0DknTPXVOMsO%2F4tAuBNkZsgXadbmxnw1K1xXAtLAe5jVAhQyUqda2%2B0%2FhjP9WRDl4snMKmiVxPyl9l3DfQHxyslVyenen0Vwqw4zLAAF%2BxXSI%2Bvv6mNQDFqKKDIWgCpYnqK%2B%2BLLPADs9Ow4L7kU%2FWnFkSALY44Pg7BdjefqIJL6IAtJ9w8kokSD%2F0%2BbceGIR03EkQCFIdazzeXdyCZgBdZC8%2BTwHGsMQgy5brkNWIgr5c9XLvN5d2cQYnN7%2BOefqwDJ5x29qMPLPSiy3KHU0oAD%2Bzg7bg2TbkmvE3HzxL2268mhi0EQtUPgl5Up3NHm9LDq%2Bu5y1iwwXWP3zHbhDq2%2BhU9kMJfbmb8GOqUBDFBOge6ML8zdPFy2Forahdxg7UKkdhRD3k0XYN5X%2FKZNrv6sfJQ4rIT7ioYBLZUqOss%2BPN%2F5zx6u9QYGZJ1OexwsQU0ElLCN4AWsiOTuJf24UD0R0YvZse3KmWhdiSPssRVJZ2E93sDAQsgdyF1b1soff87kQqiRrECIH4Y0hMyC26uRXqh5AkoXgnSkkHfNlkzDHGaNTM%2Ftd2seq%2B2nxmxprwY8&X-Amz-Signature=e8bb8f49b16bfa76199e5bdf13c0298346c663add1034970ce3ff13caacd696e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
