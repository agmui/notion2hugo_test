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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZY6MEKN%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T110603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQD3PqV%2F6Yupz8nXhXU1S7gd7Kob3epspXG%2BOTm5jTIt4gIgMc%2Bgv2wWJLlco4M48bMNzAUijPmIZVRiLc3mNwxPH1wq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDKA2NIenROxV0rMbcSrcAzNBNAzSE9ys4VHEOX9l%2B5p%2BvRZoRiI2W8octIIlS5ba5Jm9cFFjqk%2FQn5skWEO6kTmhg9YTOQ5OKoMpSPwUh7sIJ6IvgFRbj%2FWGF%2BsoaJL3yWr9RQk2n%2FodHXUKA3bLhQUYMP80qir5alQRWhpK07PvWVGcm%2BXuEsu1tQlXJqNWFRyHbPxJ8apW6QDD5XoIcaD%2BesMnhEFPGXnq2inowPNsAPlUuys%2Fpf18tM%2FGiAAce1obzS1qAIh%2BmjuA%2B7CfQFarCijLy3K1rIQEHikjC7p0AxHTCpJiSwmLtstiFq2Ld0sD0VNrQDbXoomicB5HQK%2Bdt8ruRwGy2nkD299CTuCzPpRjLOiwd7ABaReX%2B2wH6QY9xYtA%2FmfRcgiQobWuv34f%2BSi3uHaedNEnEHpzrlNm00nsYLI6oBMcQcDwm08r4lvgFBYRRUQnAoCp8fOAiXvGmR5HcQsdBh%2F3HzvVQi%2BLn1l%2BzMLaYcTK6f7LRKZ3yabLuELw1E7NiIWeeGb42MOKNpDUDlvXTJliu6wJfUUjWJGk9eAH1mJjxGjvLlK%2F6fCzku50jUELSkf00HZWQgH6QgpjHDgM7MFfGUL80cGuLVMUbVb8eBFwgtNeMJJcIM7jOxIWLr7Pg2WKMNe%2BusIGOqUBOMXVkTvXPty%2BMuoUZw2W9qYpfB6Eh%2FqP%2FGCNwMIj8%2FCePrcZXPpsRZ%2BT%2FAzGBwHWU1obW2XnnzASwTX8DUmsHhmEiJbMrUI9d%2FibqcB59aYsN%2FaBSxtD12Hl%2FuOQVv6zlSnPcBO1sNnsH8qZREPlfx9%2B%2FFaHBHxGecPUjjzNpbtczwclt9U60nlZne7h7%2BMpP6lUeUog%2FtfgNkTyL7SC1x9HSBQk&X-Amz-Signature=8acbf104e043aa511ecf355ef3e6f8fa4c9ef2023a2435c579401d8e54a507fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZY6MEKN%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T110603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQD3PqV%2F6Yupz8nXhXU1S7gd7Kob3epspXG%2BOTm5jTIt4gIgMc%2Bgv2wWJLlco4M48bMNzAUijPmIZVRiLc3mNwxPH1wq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDKA2NIenROxV0rMbcSrcAzNBNAzSE9ys4VHEOX9l%2B5p%2BvRZoRiI2W8octIIlS5ba5Jm9cFFjqk%2FQn5skWEO6kTmhg9YTOQ5OKoMpSPwUh7sIJ6IvgFRbj%2FWGF%2BsoaJL3yWr9RQk2n%2FodHXUKA3bLhQUYMP80qir5alQRWhpK07PvWVGcm%2BXuEsu1tQlXJqNWFRyHbPxJ8apW6QDD5XoIcaD%2BesMnhEFPGXnq2inowPNsAPlUuys%2Fpf18tM%2FGiAAce1obzS1qAIh%2BmjuA%2B7CfQFarCijLy3K1rIQEHikjC7p0AxHTCpJiSwmLtstiFq2Ld0sD0VNrQDbXoomicB5HQK%2Bdt8ruRwGy2nkD299CTuCzPpRjLOiwd7ABaReX%2B2wH6QY9xYtA%2FmfRcgiQobWuv34f%2BSi3uHaedNEnEHpzrlNm00nsYLI6oBMcQcDwm08r4lvgFBYRRUQnAoCp8fOAiXvGmR5HcQsdBh%2F3HzvVQi%2BLn1l%2BzMLaYcTK6f7LRKZ3yabLuELw1E7NiIWeeGb42MOKNpDUDlvXTJliu6wJfUUjWJGk9eAH1mJjxGjvLlK%2F6fCzku50jUELSkf00HZWQgH6QgpjHDgM7MFfGUL80cGuLVMUbVb8eBFwgtNeMJJcIM7jOxIWLr7Pg2WKMNe%2BusIGOqUBOMXVkTvXPty%2BMuoUZw2W9qYpfB6Eh%2FqP%2FGCNwMIj8%2FCePrcZXPpsRZ%2BT%2FAzGBwHWU1obW2XnnzASwTX8DUmsHhmEiJbMrUI9d%2FibqcB59aYsN%2FaBSxtD12Hl%2FuOQVv6zlSnPcBO1sNnsH8qZREPlfx9%2B%2FFaHBHxGecPUjjzNpbtczwclt9U60nlZne7h7%2BMpP6lUeUog%2FtfgNkTyL7SC1x9HSBQk&X-Amz-Signature=199e22a65c51dfbe07b4649446cec62b98218edaf97e2bb77c02068bf1ae9b9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZY6MEKN%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T110603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQD3PqV%2F6Yupz8nXhXU1S7gd7Kob3epspXG%2BOTm5jTIt4gIgMc%2Bgv2wWJLlco4M48bMNzAUijPmIZVRiLc3mNwxPH1wq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDKA2NIenROxV0rMbcSrcAzNBNAzSE9ys4VHEOX9l%2B5p%2BvRZoRiI2W8octIIlS5ba5Jm9cFFjqk%2FQn5skWEO6kTmhg9YTOQ5OKoMpSPwUh7sIJ6IvgFRbj%2FWGF%2BsoaJL3yWr9RQk2n%2FodHXUKA3bLhQUYMP80qir5alQRWhpK07PvWVGcm%2BXuEsu1tQlXJqNWFRyHbPxJ8apW6QDD5XoIcaD%2BesMnhEFPGXnq2inowPNsAPlUuys%2Fpf18tM%2FGiAAce1obzS1qAIh%2BmjuA%2B7CfQFarCijLy3K1rIQEHikjC7p0AxHTCpJiSwmLtstiFq2Ld0sD0VNrQDbXoomicB5HQK%2Bdt8ruRwGy2nkD299CTuCzPpRjLOiwd7ABaReX%2B2wH6QY9xYtA%2FmfRcgiQobWuv34f%2BSi3uHaedNEnEHpzrlNm00nsYLI6oBMcQcDwm08r4lvgFBYRRUQnAoCp8fOAiXvGmR5HcQsdBh%2F3HzvVQi%2BLn1l%2BzMLaYcTK6f7LRKZ3yabLuELw1E7NiIWeeGb42MOKNpDUDlvXTJliu6wJfUUjWJGk9eAH1mJjxGjvLlK%2F6fCzku50jUELSkf00HZWQgH6QgpjHDgM7MFfGUL80cGuLVMUbVb8eBFwgtNeMJJcIM7jOxIWLr7Pg2WKMNe%2BusIGOqUBOMXVkTvXPty%2BMuoUZw2W9qYpfB6Eh%2FqP%2FGCNwMIj8%2FCePrcZXPpsRZ%2BT%2FAzGBwHWU1obW2XnnzASwTX8DUmsHhmEiJbMrUI9d%2FibqcB59aYsN%2FaBSxtD12Hl%2FuOQVv6zlSnPcBO1sNnsH8qZREPlfx9%2B%2FFaHBHxGecPUjjzNpbtczwclt9U60nlZne7h7%2BMpP6lUeUog%2FtfgNkTyL7SC1x9HSBQk&X-Amz-Signature=77a7434fba137c2a2be5eb190951ba20a37a16e4d88a723e039cd3e0401cc9b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
