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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KDGISFC%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1GINKIaEPKyrVSUTWk1LB4b7%2Bx7Nnfv73Ia6KfezbKAiAdf7NEvrbBP2xbWZm7PTnq%2BKjuid2sohbKuntdGxNc%2FCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMzZxqBL7%2BQ6h8xuF8KtwDEMdrkeInZpVQR7LES3XAbTHam6RzqjvwY3ax1N5GteI1cRqJ6QtRHvwDeAGSojou3aX6HTbnjya1J4biSO1sLIfgm9DWFDIKFXtOWJ%2B%2BUPRmasN%2BGFmbUOG6AR8jfSjlPlmET%2BQMWWR%2FpNnvms6bA9IDwroimAmuyEmGGqqJr3rEV5a5LfxdbqzlwV%2BZ8fxM%2F6WmmC9lbTnBf9nKOkPFGoBcSHd89Z5qrOVrqp7llbiAJShT%2BIHgDXmb4rW6T6fBrJJQS2JDicgrNBhZ0FXxzxhJOEi%2BqI75b5yCidWM5l13qu5YQCwC586XwS2z8AXqHSVrIbZiDeSl6rmZh7xdi13PTOHjejPfXmPGo8ksVecq%2FGf90LSya7%2F%2BhMWAXNaymYc58%2FT1hqV1RofIQor%2FkkG1AC9wpRECt0yS4Mg6XGwZMj3RcWYjDfKKzXiUMGsKNb3RcRigCqDFvqqbzN7IrVIQpaafsQ%2BjRA2VjVFcpdGaqMtIOy9SWuQD70QKI6R4Drv96ceUi%2FLjYmKe5CMZwqX%2FZyk8vWeJ6S7jK%2FXAIIvM9Gyl3%2FUm0O9Sid20YEltwl1QWIoljaL0iDvR84SzdNelKt75QSaSbFH2Kj3vlYZBlcJDkOLE2NtbKhcwjMrjwAY6pgEBW3jOrjxnOtldljWHORtPRihPMcU8JB4eeETHcC8fOAXgfqlrf3o%2Bi%2FciGFubX2D8Sa9Z25qMVna9e374tjKAaEXf6rQc1GwsglEJNV%2BoiD4NEbmCz4YWLc3zPE6CJ4Z9MOM7R4%2FYrivRF4KS1Py1%2BYDDVrPYLqF2LVgyCMPTsh8L1o1uLnXIIGI8vXjupthoDdeuBIp3fRlvgL4eEc070wOqqHEC&X-Amz-Signature=aa7cd73d29724c52f09363e1bd8be039613d4c96a75a07bddb7e9f582671cc55&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KDGISFC%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1GINKIaEPKyrVSUTWk1LB4b7%2Bx7Nnfv73Ia6KfezbKAiAdf7NEvrbBP2xbWZm7PTnq%2BKjuid2sohbKuntdGxNc%2FCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMzZxqBL7%2BQ6h8xuF8KtwDEMdrkeInZpVQR7LES3XAbTHam6RzqjvwY3ax1N5GteI1cRqJ6QtRHvwDeAGSojou3aX6HTbnjya1J4biSO1sLIfgm9DWFDIKFXtOWJ%2B%2BUPRmasN%2BGFmbUOG6AR8jfSjlPlmET%2BQMWWR%2FpNnvms6bA9IDwroimAmuyEmGGqqJr3rEV5a5LfxdbqzlwV%2BZ8fxM%2F6WmmC9lbTnBf9nKOkPFGoBcSHd89Z5qrOVrqp7llbiAJShT%2BIHgDXmb4rW6T6fBrJJQS2JDicgrNBhZ0FXxzxhJOEi%2BqI75b5yCidWM5l13qu5YQCwC586XwS2z8AXqHSVrIbZiDeSl6rmZh7xdi13PTOHjejPfXmPGo8ksVecq%2FGf90LSya7%2F%2BhMWAXNaymYc58%2FT1hqV1RofIQor%2FkkG1AC9wpRECt0yS4Mg6XGwZMj3RcWYjDfKKzXiUMGsKNb3RcRigCqDFvqqbzN7IrVIQpaafsQ%2BjRA2VjVFcpdGaqMtIOy9SWuQD70QKI6R4Drv96ceUi%2FLjYmKe5CMZwqX%2FZyk8vWeJ6S7jK%2FXAIIvM9Gyl3%2FUm0O9Sid20YEltwl1QWIoljaL0iDvR84SzdNelKt75QSaSbFH2Kj3vlYZBlcJDkOLE2NtbKhcwjMrjwAY6pgEBW3jOrjxnOtldljWHORtPRihPMcU8JB4eeETHcC8fOAXgfqlrf3o%2Bi%2FciGFubX2D8Sa9Z25qMVna9e374tjKAaEXf6rQc1GwsglEJNV%2BoiD4NEbmCz4YWLc3zPE6CJ4Z9MOM7R4%2FYrivRF4KS1Py1%2BYDDVrPYLqF2LVgyCMPTsh8L1o1uLnXIIGI8vXjupthoDdeuBIp3fRlvgL4eEc070wOqqHEC&X-Amz-Signature=94a8a4dddcea11015b2d907cefa32665f12c7b082d832b606d36539dbbbdc4ea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KDGISFC%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1GINKIaEPKyrVSUTWk1LB4b7%2Bx7Nnfv73Ia6KfezbKAiAdf7NEvrbBP2xbWZm7PTnq%2BKjuid2sohbKuntdGxNc%2FCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMzZxqBL7%2BQ6h8xuF8KtwDEMdrkeInZpVQR7LES3XAbTHam6RzqjvwY3ax1N5GteI1cRqJ6QtRHvwDeAGSojou3aX6HTbnjya1J4biSO1sLIfgm9DWFDIKFXtOWJ%2B%2BUPRmasN%2BGFmbUOG6AR8jfSjlPlmET%2BQMWWR%2FpNnvms6bA9IDwroimAmuyEmGGqqJr3rEV5a5LfxdbqzlwV%2BZ8fxM%2F6WmmC9lbTnBf9nKOkPFGoBcSHd89Z5qrOVrqp7llbiAJShT%2BIHgDXmb4rW6T6fBrJJQS2JDicgrNBhZ0FXxzxhJOEi%2BqI75b5yCidWM5l13qu5YQCwC586XwS2z8AXqHSVrIbZiDeSl6rmZh7xdi13PTOHjejPfXmPGo8ksVecq%2FGf90LSya7%2F%2BhMWAXNaymYc58%2FT1hqV1RofIQor%2FkkG1AC9wpRECt0yS4Mg6XGwZMj3RcWYjDfKKzXiUMGsKNb3RcRigCqDFvqqbzN7IrVIQpaafsQ%2BjRA2VjVFcpdGaqMtIOy9SWuQD70QKI6R4Drv96ceUi%2FLjYmKe5CMZwqX%2FZyk8vWeJ6S7jK%2FXAIIvM9Gyl3%2FUm0O9Sid20YEltwl1QWIoljaL0iDvR84SzdNelKt75QSaSbFH2Kj3vlYZBlcJDkOLE2NtbKhcwjMrjwAY6pgEBW3jOrjxnOtldljWHORtPRihPMcU8JB4eeETHcC8fOAXgfqlrf3o%2Bi%2FciGFubX2D8Sa9Z25qMVna9e374tjKAaEXf6rQc1GwsglEJNV%2BoiD4NEbmCz4YWLc3zPE6CJ4Z9MOM7R4%2FYrivRF4KS1Py1%2BYDDVrPYLqF2LVgyCMPTsh8L1o1uLnXIIGI8vXjupthoDdeuBIp3fRlvgL4eEc070wOqqHEC&X-Amz-Signature=37532b626dac07d04b1eed6a6f7c7ce6c9a9a2c4ceb082a0508d785f232fdb6b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
