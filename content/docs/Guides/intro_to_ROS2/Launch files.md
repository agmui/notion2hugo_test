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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZKBFJ5Y%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T121252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZtSqpZxvQ94lI2uNSajem0NUvsoPsdwr%2BeF%2F06reT7AIgO%2FiZwxRzGYUVes7gphtjkDBnspGWPaG9WGlUypwrI88q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDF8XKJNripFvPWZ3%2BCrcAyBkZ8WXyyN6l5lmtpZVbnOGPROrLNqu0sw18%2Bc4Xwsei2y4moVbEyRhUelBJOpPypB1eyi%2Fr7DQhk0UGHmWPAlle%2B%2B9rdEW8YDcOYpKjcVzT%2FA%2F67Nnni3wu8hZeACEJqJ%2FY7j4zxODtrjF3B5aptG0dupHgZAYSJxFcOlIKsuyDOJUR5qbV3NEwEdpAb7%2BQZdBO10g2ogwU5YxC5wum%2BESatSdt0eWJtdLt5%2BDuRSDtBaDicL4YAot%2FEGc8yvHSsTCobCxp7qG2O1OkyISNt4zAW4WtwksTxWedQsIVIXwTwgE9gULJnTJ%2FxUleenYljVe6udF%2Ba6cpyWgf2mqQxqzgvGVBx5OZxBWsPQLL3JysMlVz9EABYmXlNq5u6V6d5p1IIk2IQRRvCcPRhFwbZJ2cGsP7cqmA1sIRHIW%2FB52R%2BAsLIFe6nihQZDh%2BRULLTBsr6Meylt%2BKYricYOlYhGcWfn%2Bmch3E2G2EJFVy9Zx1A9%2FkTpch8dDcbFkon8yAdKEFZKvgOQR94cAL139tlRlxrFGfXorsyumuXzUYktTY3PIRx7021aXgtJJcjcFAdGFN9ZcWzfNXO7J1XrTJD4FnXXc9L%2FDKqcu7aRH%2F0yIFf7eRWb0CZSGXlgRMKr%2ByL8GOqUBYBnXd0%2FYqy%2Fsg9Ea17DCjhCOafVYxHeBr%2FZfHRpr1NGVJqOubhCD%2BfYX4Xe22kVEjK9xJ0n8Zxoo4HpK%2Bpzi%2FfaZJuKIHmLaQSdhblTUA2iNykcJcIHnm9LAEFkqPtSrO0pCiBdwXcI2Sbv03m%2BrkBzvpd0UgE%2FmXpse%2FtedDCKJhMdTjr5cY%2BV62fGOz3sWSTVRcHqThoRwHeWQYr09yNZs8KAz&X-Amz-Signature=d1cdbc80258333c8431c2612f56bca8d0db2a5d33bef69e48cc7588e471aa3d7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZKBFJ5Y%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T121252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZtSqpZxvQ94lI2uNSajem0NUvsoPsdwr%2BeF%2F06reT7AIgO%2FiZwxRzGYUVes7gphtjkDBnspGWPaG9WGlUypwrI88q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDF8XKJNripFvPWZ3%2BCrcAyBkZ8WXyyN6l5lmtpZVbnOGPROrLNqu0sw18%2Bc4Xwsei2y4moVbEyRhUelBJOpPypB1eyi%2Fr7DQhk0UGHmWPAlle%2B%2B9rdEW8YDcOYpKjcVzT%2FA%2F67Nnni3wu8hZeACEJqJ%2FY7j4zxODtrjF3B5aptG0dupHgZAYSJxFcOlIKsuyDOJUR5qbV3NEwEdpAb7%2BQZdBO10g2ogwU5YxC5wum%2BESatSdt0eWJtdLt5%2BDuRSDtBaDicL4YAot%2FEGc8yvHSsTCobCxp7qG2O1OkyISNt4zAW4WtwksTxWedQsIVIXwTwgE9gULJnTJ%2FxUleenYljVe6udF%2Ba6cpyWgf2mqQxqzgvGVBx5OZxBWsPQLL3JysMlVz9EABYmXlNq5u6V6d5p1IIk2IQRRvCcPRhFwbZJ2cGsP7cqmA1sIRHIW%2FB52R%2BAsLIFe6nihQZDh%2BRULLTBsr6Meylt%2BKYricYOlYhGcWfn%2Bmch3E2G2EJFVy9Zx1A9%2FkTpch8dDcbFkon8yAdKEFZKvgOQR94cAL139tlRlxrFGfXorsyumuXzUYktTY3PIRx7021aXgtJJcjcFAdGFN9ZcWzfNXO7J1XrTJD4FnXXc9L%2FDKqcu7aRH%2F0yIFf7eRWb0CZSGXlgRMKr%2ByL8GOqUBYBnXd0%2FYqy%2Fsg9Ea17DCjhCOafVYxHeBr%2FZfHRpr1NGVJqOubhCD%2BfYX4Xe22kVEjK9xJ0n8Zxoo4HpK%2Bpzi%2FfaZJuKIHmLaQSdhblTUA2iNykcJcIHnm9LAEFkqPtSrO0pCiBdwXcI2Sbv03m%2BrkBzvpd0UgE%2FmXpse%2FtedDCKJhMdTjr5cY%2BV62fGOz3sWSTVRcHqThoRwHeWQYr09yNZs8KAz&X-Amz-Signature=7a23f5a89aa5ec45e9a83722d5aa04461e81faf3a6127004b286851a0249bf96&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZKBFJ5Y%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T121252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZtSqpZxvQ94lI2uNSajem0NUvsoPsdwr%2BeF%2F06reT7AIgO%2FiZwxRzGYUVes7gphtjkDBnspGWPaG9WGlUypwrI88q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDF8XKJNripFvPWZ3%2BCrcAyBkZ8WXyyN6l5lmtpZVbnOGPROrLNqu0sw18%2Bc4Xwsei2y4moVbEyRhUelBJOpPypB1eyi%2Fr7DQhk0UGHmWPAlle%2B%2B9rdEW8YDcOYpKjcVzT%2FA%2F67Nnni3wu8hZeACEJqJ%2FY7j4zxODtrjF3B5aptG0dupHgZAYSJxFcOlIKsuyDOJUR5qbV3NEwEdpAb7%2BQZdBO10g2ogwU5YxC5wum%2BESatSdt0eWJtdLt5%2BDuRSDtBaDicL4YAot%2FEGc8yvHSsTCobCxp7qG2O1OkyISNt4zAW4WtwksTxWedQsIVIXwTwgE9gULJnTJ%2FxUleenYljVe6udF%2Ba6cpyWgf2mqQxqzgvGVBx5OZxBWsPQLL3JysMlVz9EABYmXlNq5u6V6d5p1IIk2IQRRvCcPRhFwbZJ2cGsP7cqmA1sIRHIW%2FB52R%2BAsLIFe6nihQZDh%2BRULLTBsr6Meylt%2BKYricYOlYhGcWfn%2Bmch3E2G2EJFVy9Zx1A9%2FkTpch8dDcbFkon8yAdKEFZKvgOQR94cAL139tlRlxrFGfXorsyumuXzUYktTY3PIRx7021aXgtJJcjcFAdGFN9ZcWzfNXO7J1XrTJD4FnXXc9L%2FDKqcu7aRH%2F0yIFf7eRWb0CZSGXlgRMKr%2ByL8GOqUBYBnXd0%2FYqy%2Fsg9Ea17DCjhCOafVYxHeBr%2FZfHRpr1NGVJqOubhCD%2BfYX4Xe22kVEjK9xJ0n8Zxoo4HpK%2Bpzi%2FfaZJuKIHmLaQSdhblTUA2iNykcJcIHnm9LAEFkqPtSrO0pCiBdwXcI2Sbv03m%2BrkBzvpd0UgE%2FmXpse%2FtedDCKJhMdTjr5cY%2BV62fGOz3sWSTVRcHqThoRwHeWQYr09yNZs8KAz&X-Amz-Signature=3d596188c1c52ce8e13d6e7ebc975345c471a2697e74fac1883668e813121590&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
