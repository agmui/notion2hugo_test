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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSWWG432%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBTElL%2B1OBtgopTF4MJuHlc%2F6J7EonJSjlnE%2FI3RD8dfAiBLUzD0VYtAZ%2FSkC6sMdiBIczkd5MmyWmEaiLQhs%2Fx7Rir%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMVqT7EfDIQH%2BeazVsKtwDKF3XTa6%2FllAurqo6TyTSBn3jCo4jO0tUOYMGPu1cFpScjpTOW446pe9ZJDZPevG6g%2BL6RAcoPDPvXfBPaRFG9M1rMjyYGKWeTullfwrBudYdMJu8pVpj4Q8wuHyo0Tq4hdaqXuSHnOTC5i8c2oH4McEIf7MPwNf3i3Mcj4c95BB15TIHDNzgxXYr4%2FgviqXCzsQ0cL6uejdKBtUVFlQIt%2Fp%2F%2Fu%2FTYbIoLPEvV6Hx7GY5IhuyU%2BUtAD7MY%2BOCOr8ZumPDwpymsOKK4j2qKvsl5AdoCWxaRcp5ZOOHAWqWApw4uwWwaK71Yy7yXc6d9zezSd8cAOL1AX6B2qT0jYGr9h7Chd7x5PLHRAJXPlat%2BUDwFlwnWBR1JI8m9eJxTBpLruq3eqfOh8k%2BsWnhYlhtzC7yb3nT%2Bvdt67ay6Pny5YFXamuQMUqYJVxd0xLWGft1ZXjLG5RlYhj9nJFGKV8s18eSQPr4v4nRKRbWF4OFscIeU32KvlfHt3QMopZlFrT9sa3FiXi%2BZew6flIvq7E%2FoBe%2By9iguEbKF3yugw2fHCJEHPquxMxD7RI5tVXcW9OrKojaRro70Qeho7qj%2FVguDtvJbcO76tKRWjCMnRy7bN%2F8jqP1fkrB2injCQMwksS5xAY6pgGLGQSPyFsIYHcigQfHauYGrtYuSCdrGJ6NQlCv3GEdIIdQmkbkMiCsilcFOy1KMQe89SuxIFrskn3cQ5p07t3pl60BUru5IBQMx%2BpzDpuaJsD9il00N83wNazjH3r2MVCmOBXj1ucVHgRf4x162Xxdi7SohPlnV1dYJt4%2FYghyk%2BPwD4MRkuAHTp2d8pp40HtAAFdnM8bZx5r9H3llsXljcuSpO9dg&X-Amz-Signature=39524a33d60ca8e04f88022eeb95350aab72df5282a8ea05960ac768d30aa3c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSWWG432%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBTElL%2B1OBtgopTF4MJuHlc%2F6J7EonJSjlnE%2FI3RD8dfAiBLUzD0VYtAZ%2FSkC6sMdiBIczkd5MmyWmEaiLQhs%2Fx7Rir%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMVqT7EfDIQH%2BeazVsKtwDKF3XTa6%2FllAurqo6TyTSBn3jCo4jO0tUOYMGPu1cFpScjpTOW446pe9ZJDZPevG6g%2BL6RAcoPDPvXfBPaRFG9M1rMjyYGKWeTullfwrBudYdMJu8pVpj4Q8wuHyo0Tq4hdaqXuSHnOTC5i8c2oH4McEIf7MPwNf3i3Mcj4c95BB15TIHDNzgxXYr4%2FgviqXCzsQ0cL6uejdKBtUVFlQIt%2Fp%2F%2Fu%2FTYbIoLPEvV6Hx7GY5IhuyU%2BUtAD7MY%2BOCOr8ZumPDwpymsOKK4j2qKvsl5AdoCWxaRcp5ZOOHAWqWApw4uwWwaK71Yy7yXc6d9zezSd8cAOL1AX6B2qT0jYGr9h7Chd7x5PLHRAJXPlat%2BUDwFlwnWBR1JI8m9eJxTBpLruq3eqfOh8k%2BsWnhYlhtzC7yb3nT%2Bvdt67ay6Pny5YFXamuQMUqYJVxd0xLWGft1ZXjLG5RlYhj9nJFGKV8s18eSQPr4v4nRKRbWF4OFscIeU32KvlfHt3QMopZlFrT9sa3FiXi%2BZew6flIvq7E%2FoBe%2By9iguEbKF3yugw2fHCJEHPquxMxD7RI5tVXcW9OrKojaRro70Qeho7qj%2FVguDtvJbcO76tKRWjCMnRy7bN%2F8jqP1fkrB2injCQMwksS5xAY6pgGLGQSPyFsIYHcigQfHauYGrtYuSCdrGJ6NQlCv3GEdIIdQmkbkMiCsilcFOy1KMQe89SuxIFrskn3cQ5p07t3pl60BUru5IBQMx%2BpzDpuaJsD9il00N83wNazjH3r2MVCmOBXj1ucVHgRf4x162Xxdi7SohPlnV1dYJt4%2FYghyk%2BPwD4MRkuAHTp2d8pp40HtAAFdnM8bZx5r9H3llsXljcuSpO9dg&X-Amz-Signature=5712cb03bfb0e626210a6d639100f7ee053884e956d6eacb81d63191fa243a67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSWWG432%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBTElL%2B1OBtgopTF4MJuHlc%2F6J7EonJSjlnE%2FI3RD8dfAiBLUzD0VYtAZ%2FSkC6sMdiBIczkd5MmyWmEaiLQhs%2Fx7Rir%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMVqT7EfDIQH%2BeazVsKtwDKF3XTa6%2FllAurqo6TyTSBn3jCo4jO0tUOYMGPu1cFpScjpTOW446pe9ZJDZPevG6g%2BL6RAcoPDPvXfBPaRFG9M1rMjyYGKWeTullfwrBudYdMJu8pVpj4Q8wuHyo0Tq4hdaqXuSHnOTC5i8c2oH4McEIf7MPwNf3i3Mcj4c95BB15TIHDNzgxXYr4%2FgviqXCzsQ0cL6uejdKBtUVFlQIt%2Fp%2F%2Fu%2FTYbIoLPEvV6Hx7GY5IhuyU%2BUtAD7MY%2BOCOr8ZumPDwpymsOKK4j2qKvsl5AdoCWxaRcp5ZOOHAWqWApw4uwWwaK71Yy7yXc6d9zezSd8cAOL1AX6B2qT0jYGr9h7Chd7x5PLHRAJXPlat%2BUDwFlwnWBR1JI8m9eJxTBpLruq3eqfOh8k%2BsWnhYlhtzC7yb3nT%2Bvdt67ay6Pny5YFXamuQMUqYJVxd0xLWGft1ZXjLG5RlYhj9nJFGKV8s18eSQPr4v4nRKRbWF4OFscIeU32KvlfHt3QMopZlFrT9sa3FiXi%2BZew6flIvq7E%2FoBe%2By9iguEbKF3yugw2fHCJEHPquxMxD7RI5tVXcW9OrKojaRro70Qeho7qj%2FVguDtvJbcO76tKRWjCMnRy7bN%2F8jqP1fkrB2injCQMwksS5xAY6pgGLGQSPyFsIYHcigQfHauYGrtYuSCdrGJ6NQlCv3GEdIIdQmkbkMiCsilcFOy1KMQe89SuxIFrskn3cQ5p07t3pl60BUru5IBQMx%2BpzDpuaJsD9il00N83wNazjH3r2MVCmOBXj1ucVHgRf4x162Xxdi7SohPlnV1dYJt4%2FYghyk%2BPwD4MRkuAHTp2d8pp40HtAAFdnM8bZx5r9H3llsXljcuSpO9dg&X-Amz-Signature=ba0394fcb5f1efd35e94991afa85828559b30a68711dc78ad83c2d8106658e2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
