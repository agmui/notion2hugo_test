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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV6HGDKI%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T140113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEgvyj1xBLCQqEWKTbf65x3x4c6EQP6XJVGw5Oy%2BzcV9AiBbqbb%2BzLI%2Bf9J%2Bih%2F%2BRA%2B9awmZbua6KUDl8F%2BhdjJPqiqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM623hT0Qmsk3BHVSwKtwDJ%2FBZYrPPv3FuX2Z1h4%2BTXHUtY3JXBSzahhSsy%2Bzr2%2BnX%2BrLuql1UCsdVCicnhyQyWIuz3l5tTZbA%2FERi0B1SR8hVG4ZJU8AceRFIpHhBrlNuQfRHm8fmnpq6CLUURqTST25qfmrllhfr3JyV8d0NzIQO2WqP6BXEwYq33xIoAGjnXAY%2BCkiIV8ZShpxuBtjNjoSg1VwnxHvt37CxSP1%2BDf76zd7zttAovBmJkT8gSYZj%2BsAfApSZxCxKn5DBNIwernwv54l635hWpHQQrJj7Le%2Fd%2FdcXCT3HELmpVEuQm6pOWa4qevY%2B6gnPswt%2BHuqcDilM0I5YBAOn9BO81Brer%2FgJenJG9UrnAfbV4IGBI8Ox%2BP2rOv3azJrYJCCQDuq%2Bs9ncsvtfZ8YyS8%2BPvVidQe7%2F9XMNf093E7VYupaMVbQr5qzO%2F1%2Be5i8T3LjapMPm7fbydrhlCET3H6qHZ3f2tQdLMNjoRIuQ%2FpNC92QvBnH07oKzga%2Bz%2BNlrP4uySGchlGM9Zx2dE7uAmqUm%2Bq5T3L5Rfx4sEj7gCk%2BnNSPpkPvC9hFeg9YRl08IqAlOpbnaQr0zBfuKRhWVD7so5MHon4EaJOr8JDiBCJ3%2B%2BUandm57Ka3jpXT0E0S2PRwww%2BShvQY6pgGYIyzan%2BjZka2tz%2By%2FKjy2XoB0ug9VnjOhkPT05uzwTG1bBTKvG1e%2Bgy19NB%2BGl%2BE4HEW4Wm1pvcYp3l4QYCRCKVkOmtiC705j5Wy26yNu5vbf944YBdd66Lt6zO28NZKZTlNS9dODuUkfNtd0qPZO6aNIRqWwpFG%2FKrz%2FpoVEANN4UPQUZBUiE4ZAucZRrE0Awx5FgFEGuFZ4OdBTNwRFQVYrMtqB&X-Amz-Signature=7d992e9f26d234b519cc61cbc500e78a77fb7538a6a1249f84f33ea29987ea08&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV6HGDKI%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T140113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEgvyj1xBLCQqEWKTbf65x3x4c6EQP6XJVGw5Oy%2BzcV9AiBbqbb%2BzLI%2Bf9J%2Bih%2F%2BRA%2B9awmZbua6KUDl8F%2BhdjJPqiqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM623hT0Qmsk3BHVSwKtwDJ%2FBZYrPPv3FuX2Z1h4%2BTXHUtY3JXBSzahhSsy%2Bzr2%2BnX%2BrLuql1UCsdVCicnhyQyWIuz3l5tTZbA%2FERi0B1SR8hVG4ZJU8AceRFIpHhBrlNuQfRHm8fmnpq6CLUURqTST25qfmrllhfr3JyV8d0NzIQO2WqP6BXEwYq33xIoAGjnXAY%2BCkiIV8ZShpxuBtjNjoSg1VwnxHvt37CxSP1%2BDf76zd7zttAovBmJkT8gSYZj%2BsAfApSZxCxKn5DBNIwernwv54l635hWpHQQrJj7Le%2Fd%2FdcXCT3HELmpVEuQm6pOWa4qevY%2B6gnPswt%2BHuqcDilM0I5YBAOn9BO81Brer%2FgJenJG9UrnAfbV4IGBI8Ox%2BP2rOv3azJrYJCCQDuq%2Bs9ncsvtfZ8YyS8%2BPvVidQe7%2F9XMNf093E7VYupaMVbQr5qzO%2F1%2Be5i8T3LjapMPm7fbydrhlCET3H6qHZ3f2tQdLMNjoRIuQ%2FpNC92QvBnH07oKzga%2Bz%2BNlrP4uySGchlGM9Zx2dE7uAmqUm%2Bq5T3L5Rfx4sEj7gCk%2BnNSPpkPvC9hFeg9YRl08IqAlOpbnaQr0zBfuKRhWVD7so5MHon4EaJOr8JDiBCJ3%2B%2BUandm57Ka3jpXT0E0S2PRwww%2BShvQY6pgGYIyzan%2BjZka2tz%2By%2FKjy2XoB0ug9VnjOhkPT05uzwTG1bBTKvG1e%2Bgy19NB%2BGl%2BE4HEW4Wm1pvcYp3l4QYCRCKVkOmtiC705j5Wy26yNu5vbf944YBdd66Lt6zO28NZKZTlNS9dODuUkfNtd0qPZO6aNIRqWwpFG%2FKrz%2FpoVEANN4UPQUZBUiE4ZAucZRrE0Awx5FgFEGuFZ4OdBTNwRFQVYrMtqB&X-Amz-Signature=482dfa9249f0c7fe3d0c1568cc2b011f621a8855298ecec7a3b2de41ba2ac5bd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV6HGDKI%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T140113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEgvyj1xBLCQqEWKTbf65x3x4c6EQP6XJVGw5Oy%2BzcV9AiBbqbb%2BzLI%2Bf9J%2Bih%2F%2BRA%2B9awmZbua6KUDl8F%2BhdjJPqiqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM623hT0Qmsk3BHVSwKtwDJ%2FBZYrPPv3FuX2Z1h4%2BTXHUtY3JXBSzahhSsy%2Bzr2%2BnX%2BrLuql1UCsdVCicnhyQyWIuz3l5tTZbA%2FERi0B1SR8hVG4ZJU8AceRFIpHhBrlNuQfRHm8fmnpq6CLUURqTST25qfmrllhfr3JyV8d0NzIQO2WqP6BXEwYq33xIoAGjnXAY%2BCkiIV8ZShpxuBtjNjoSg1VwnxHvt37CxSP1%2BDf76zd7zttAovBmJkT8gSYZj%2BsAfApSZxCxKn5DBNIwernwv54l635hWpHQQrJj7Le%2Fd%2FdcXCT3HELmpVEuQm6pOWa4qevY%2B6gnPswt%2BHuqcDilM0I5YBAOn9BO81Brer%2FgJenJG9UrnAfbV4IGBI8Ox%2BP2rOv3azJrYJCCQDuq%2Bs9ncsvtfZ8YyS8%2BPvVidQe7%2F9XMNf093E7VYupaMVbQr5qzO%2F1%2Be5i8T3LjapMPm7fbydrhlCET3H6qHZ3f2tQdLMNjoRIuQ%2FpNC92QvBnH07oKzga%2Bz%2BNlrP4uySGchlGM9Zx2dE7uAmqUm%2Bq5T3L5Rfx4sEj7gCk%2BnNSPpkPvC9hFeg9YRl08IqAlOpbnaQr0zBfuKRhWVD7so5MHon4EaJOr8JDiBCJ3%2B%2BUandm57Ka3jpXT0E0S2PRwww%2BShvQY6pgGYIyzan%2BjZka2tz%2By%2FKjy2XoB0ug9VnjOhkPT05uzwTG1bBTKvG1e%2Bgy19NB%2BGl%2BE4HEW4Wm1pvcYp3l4QYCRCKVkOmtiC705j5Wy26yNu5vbf944YBdd66Lt6zO28NZKZTlNS9dODuUkfNtd0qPZO6aNIRqWwpFG%2FKrz%2FpoVEANN4UPQUZBUiE4ZAucZRrE0Awx5FgFEGuFZ4OdBTNwRFQVYrMtqB&X-Amz-Signature=a61b0e36be0a195c403da98aa62ba5336800a7821d4f3b6cd11b3c456bd1f3ea&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
