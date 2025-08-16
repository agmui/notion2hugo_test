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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSTK7K55%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFLtk9K0AJc1r73K95B%2BaKltjmddo354XI9z%2B3tp010kAiEA7cCTGmbaj5jFJhe2OeHusalOTz%2Bcwc6K2%2BzfhMR9zlkq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOujnyF7pS%2FqM2sv0CrcAzKQnt0e4qWB7TkBzetguHZjL7i1U4VXu3J%2Bj7bgFtI0hyhueVtIROt2tJ1kHGjXi7W7LPaX1t%2F278ESC11pY3VBC6n7bgHUIgbs2bPm89Us0R0icpW0JxH6%2BZ9b1dCVLgXHr4OGpajb3nXlQLOe04SLxYVwbkQMmP2wx7GvOhiZ5gMiENPQGi57vbXnuu2SFdvoVSX5zYv6vZCl%2B5%2Fh%2BhFJwfdL%2BUXyf0sjBwZJxWUMtop%2BSeo8tpezznTlVgeoXInQ50Jit4fqaFd4mdeyiMRVYri6nKAhW8r6sqFHWF495gVPF0S%2B71rZ3C1in9MFFNDjxjnuA9mDYBOGWE5yXZrUIQMLOWOvf2j5UNgvVBXT71xZhI9DSewWOET%2FLAElSAfps6hbPJ9qaGrkFyNQnyPa7rm%2BB0AizGZJ5LHzK2uZG9wKJnhuvTd1OqKvbSJjW6EjlOKaQDkiTbHh766e1PRJLTZzrXSoOcXBC9Ft3DfquR6JLBTi0B1wzMuEUivBvX%2BTGCgE%2BYigt7n7i4%2B%2F%2F1GmlMj%2BCeO4Hv6ZrYsgTEbHO8xsvimnUQ6JLa786LJEdgpgCcyfyLFmrgaEbytt8qSw5QC9KKjUV4M4LpNIgQLeWjwUjWhRXOgB9R9%2FMP73gMUGOqUBPWpM4%2FJSRc5nAs2QZXSvVm4vr5oUx9cFU0V2cxDwNsfdm%2BZs1oQUBZijKJsSy0lJ2xWUS8OU921eqHxcuw8pSNqkBVa0E%2BHkR6f%2BIkCEHeW0tPc0h8xdO9kvB77V6VY4FtA4rR6qiqATJheRIJSXdjNTS0vAeBb%2FzGJapLq76l0nqkuEROlmAFHhQ4O0Xkj7bOfDJyzfEqOPRGuc0KexHXemFG8U&X-Amz-Signature=8a4771d4e675d28a1cfa3c80e98dea052680f4f10aa51b0de1f08285231672a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSTK7K55%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFLtk9K0AJc1r73K95B%2BaKltjmddo354XI9z%2B3tp010kAiEA7cCTGmbaj5jFJhe2OeHusalOTz%2Bcwc6K2%2BzfhMR9zlkq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOujnyF7pS%2FqM2sv0CrcAzKQnt0e4qWB7TkBzetguHZjL7i1U4VXu3J%2Bj7bgFtI0hyhueVtIROt2tJ1kHGjXi7W7LPaX1t%2F278ESC11pY3VBC6n7bgHUIgbs2bPm89Us0R0icpW0JxH6%2BZ9b1dCVLgXHr4OGpajb3nXlQLOe04SLxYVwbkQMmP2wx7GvOhiZ5gMiENPQGi57vbXnuu2SFdvoVSX5zYv6vZCl%2B5%2Fh%2BhFJwfdL%2BUXyf0sjBwZJxWUMtop%2BSeo8tpezznTlVgeoXInQ50Jit4fqaFd4mdeyiMRVYri6nKAhW8r6sqFHWF495gVPF0S%2B71rZ3C1in9MFFNDjxjnuA9mDYBOGWE5yXZrUIQMLOWOvf2j5UNgvVBXT71xZhI9DSewWOET%2FLAElSAfps6hbPJ9qaGrkFyNQnyPa7rm%2BB0AizGZJ5LHzK2uZG9wKJnhuvTd1OqKvbSJjW6EjlOKaQDkiTbHh766e1PRJLTZzrXSoOcXBC9Ft3DfquR6JLBTi0B1wzMuEUivBvX%2BTGCgE%2BYigt7n7i4%2B%2F%2F1GmlMj%2BCeO4Hv6ZrYsgTEbHO8xsvimnUQ6JLa786LJEdgpgCcyfyLFmrgaEbytt8qSw5QC9KKjUV4M4LpNIgQLeWjwUjWhRXOgB9R9%2FMP73gMUGOqUBPWpM4%2FJSRc5nAs2QZXSvVm4vr5oUx9cFU0V2cxDwNsfdm%2BZs1oQUBZijKJsSy0lJ2xWUS8OU921eqHxcuw8pSNqkBVa0E%2BHkR6f%2BIkCEHeW0tPc0h8xdO9kvB77V6VY4FtA4rR6qiqATJheRIJSXdjNTS0vAeBb%2FzGJapLq76l0nqkuEROlmAFHhQ4O0Xkj7bOfDJyzfEqOPRGuc0KexHXemFG8U&X-Amz-Signature=a92f31cc40d5ee3773fb2f96471620465b5265b21f2d9f6b1513966433da66b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSTK7K55%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFLtk9K0AJc1r73K95B%2BaKltjmddo354XI9z%2B3tp010kAiEA7cCTGmbaj5jFJhe2OeHusalOTz%2Bcwc6K2%2BzfhMR9zlkq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOujnyF7pS%2FqM2sv0CrcAzKQnt0e4qWB7TkBzetguHZjL7i1U4VXu3J%2Bj7bgFtI0hyhueVtIROt2tJ1kHGjXi7W7LPaX1t%2F278ESC11pY3VBC6n7bgHUIgbs2bPm89Us0R0icpW0JxH6%2BZ9b1dCVLgXHr4OGpajb3nXlQLOe04SLxYVwbkQMmP2wx7GvOhiZ5gMiENPQGi57vbXnuu2SFdvoVSX5zYv6vZCl%2B5%2Fh%2BhFJwfdL%2BUXyf0sjBwZJxWUMtop%2BSeo8tpezznTlVgeoXInQ50Jit4fqaFd4mdeyiMRVYri6nKAhW8r6sqFHWF495gVPF0S%2B71rZ3C1in9MFFNDjxjnuA9mDYBOGWE5yXZrUIQMLOWOvf2j5UNgvVBXT71xZhI9DSewWOET%2FLAElSAfps6hbPJ9qaGrkFyNQnyPa7rm%2BB0AizGZJ5LHzK2uZG9wKJnhuvTd1OqKvbSJjW6EjlOKaQDkiTbHh766e1PRJLTZzrXSoOcXBC9Ft3DfquR6JLBTi0B1wzMuEUivBvX%2BTGCgE%2BYigt7n7i4%2B%2F%2F1GmlMj%2BCeO4Hv6ZrYsgTEbHO8xsvimnUQ6JLa786LJEdgpgCcyfyLFmrgaEbytt8qSw5QC9KKjUV4M4LpNIgQLeWjwUjWhRXOgB9R9%2FMP73gMUGOqUBPWpM4%2FJSRc5nAs2QZXSvVm4vr5oUx9cFU0V2cxDwNsfdm%2BZs1oQUBZijKJsSy0lJ2xWUS8OU921eqHxcuw8pSNqkBVa0E%2BHkR6f%2BIkCEHeW0tPc0h8xdO9kvB77V6VY4FtA4rR6qiqATJheRIJSXdjNTS0vAeBb%2FzGJapLq76l0nqkuEROlmAFHhQ4O0Xkj7bOfDJyzfEqOPRGuc0KexHXemFG8U&X-Amz-Signature=333df88982b84fd2d60069f6c193cdc759ce35c53e64a88a982b2d9a1f037bd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
