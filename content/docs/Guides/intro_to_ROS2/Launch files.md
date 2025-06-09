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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X75ZDSVX%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbmx2O4Cz8%2BIicIOKHhel1yXhkmzcggHpMd3cST1ujVAiEAgngOrWmb2JYpiigJFTUzLuba44tgU0NkQuAk5HEPn9cqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCp8q6fKVSHNn5dYpircA5q%2BxE2GJ1RSU4FU4ozg%2FIzXXGjOxXvKp5r%2BdxRq19L5Z2AzEwyR7UvPpJco26J6lof3ExUk2gKXqxhuGGgFCXH0QF8fzFS64NDtYXPBbJnvFgOixJmffx9Knze7Mn6xqfHb%2BZj7h1DubXXuvHXDrz39oPXeRgl2FeCR5XthjGhssVwRXjpFmV0WexmfkXCRNCXAsFQWUXCO5vMCRevtvRlcClpHMIxBV7u71c%2BhADixGSd736%2BU7LtqLxbiis0niYHNiJZgH07S6xdsfTyvdYtY8WEj6jlXlkwTgXljqxjtD5zc9%2BmNQGrGo4kIUVEUdayE3iV%2Fhm78jG1fS7EIxXBzMHgBmoDG%2BMIfVF1hCIxsY1YMy4qP%2B9zXoTF8H%2FWFUj6wNdSCyzClvIqCrDy3usEEB8f54kLA9cFiBwFCEzT4z5QLfUiKUhfvTcBoU5NtdHxRSkFcmMsa%2FPkxSqLRQikTpL3CZATHZ5EE0sTlEz7TGXz47j%2FmJcYs7nhcN8Qoic3eMhXE3r4UvL4Kih4EkWHJEaiWHTVO%2FbYVkcjnrfzB%2F26BiQQ7iGBpJ4na8UGjU%2FgR9amgdI6qrf0ICK%2FjUN4b%2By3HC7Gf4l9xAVc7rCE3wFw39m2gJArBARVGMMD4nMIGOqUBXyxJ0q0Mg%2B5fqmH404PZRDdM6FpVWaNNot1xFLHkGJczNm8byioH9EYtKDlnphrH7WpOloQeIx81MTqVynl4XZGWhMl2PT4pXlsUijSpuick9tRpwfyYE2wa7%2BaEDK%2Bdmngi4rK0y0K%2FpTknp3aBK1pcPTqhKYGg%2Fac9C95zUT4%2FWJFIi2itAelLelZ4fZCJTCMMVeN49GCU6QH8K52oJaBTDg5i&X-Amz-Signature=4f327b5c799ea7012a01a05df9b2cb36d44f73d3ec8648f25772db47f0453ca4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X75ZDSVX%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbmx2O4Cz8%2BIicIOKHhel1yXhkmzcggHpMd3cST1ujVAiEAgngOrWmb2JYpiigJFTUzLuba44tgU0NkQuAk5HEPn9cqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCp8q6fKVSHNn5dYpircA5q%2BxE2GJ1RSU4FU4ozg%2FIzXXGjOxXvKp5r%2BdxRq19L5Z2AzEwyR7UvPpJco26J6lof3ExUk2gKXqxhuGGgFCXH0QF8fzFS64NDtYXPBbJnvFgOixJmffx9Knze7Mn6xqfHb%2BZj7h1DubXXuvHXDrz39oPXeRgl2FeCR5XthjGhssVwRXjpFmV0WexmfkXCRNCXAsFQWUXCO5vMCRevtvRlcClpHMIxBV7u71c%2BhADixGSd736%2BU7LtqLxbiis0niYHNiJZgH07S6xdsfTyvdYtY8WEj6jlXlkwTgXljqxjtD5zc9%2BmNQGrGo4kIUVEUdayE3iV%2Fhm78jG1fS7EIxXBzMHgBmoDG%2BMIfVF1hCIxsY1YMy4qP%2B9zXoTF8H%2FWFUj6wNdSCyzClvIqCrDy3usEEB8f54kLA9cFiBwFCEzT4z5QLfUiKUhfvTcBoU5NtdHxRSkFcmMsa%2FPkxSqLRQikTpL3CZATHZ5EE0sTlEz7TGXz47j%2FmJcYs7nhcN8Qoic3eMhXE3r4UvL4Kih4EkWHJEaiWHTVO%2FbYVkcjnrfzB%2F26BiQQ7iGBpJ4na8UGjU%2FgR9amgdI6qrf0ICK%2FjUN4b%2By3HC7Gf4l9xAVc7rCE3wFw39m2gJArBARVGMMD4nMIGOqUBXyxJ0q0Mg%2B5fqmH404PZRDdM6FpVWaNNot1xFLHkGJczNm8byioH9EYtKDlnphrH7WpOloQeIx81MTqVynl4XZGWhMl2PT4pXlsUijSpuick9tRpwfyYE2wa7%2BaEDK%2Bdmngi4rK0y0K%2FpTknp3aBK1pcPTqhKYGg%2Fac9C95zUT4%2FWJFIi2itAelLelZ4fZCJTCMMVeN49GCU6QH8K52oJaBTDg5i&X-Amz-Signature=838923d936e17e88e8afeecb8464f4ac3f8e4e7d754fea9687f8bc96940d4565&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X75ZDSVX%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbmx2O4Cz8%2BIicIOKHhel1yXhkmzcggHpMd3cST1ujVAiEAgngOrWmb2JYpiigJFTUzLuba44tgU0NkQuAk5HEPn9cqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCp8q6fKVSHNn5dYpircA5q%2BxE2GJ1RSU4FU4ozg%2FIzXXGjOxXvKp5r%2BdxRq19L5Z2AzEwyR7UvPpJco26J6lof3ExUk2gKXqxhuGGgFCXH0QF8fzFS64NDtYXPBbJnvFgOixJmffx9Knze7Mn6xqfHb%2BZj7h1DubXXuvHXDrz39oPXeRgl2FeCR5XthjGhssVwRXjpFmV0WexmfkXCRNCXAsFQWUXCO5vMCRevtvRlcClpHMIxBV7u71c%2BhADixGSd736%2BU7LtqLxbiis0niYHNiJZgH07S6xdsfTyvdYtY8WEj6jlXlkwTgXljqxjtD5zc9%2BmNQGrGo4kIUVEUdayE3iV%2Fhm78jG1fS7EIxXBzMHgBmoDG%2BMIfVF1hCIxsY1YMy4qP%2B9zXoTF8H%2FWFUj6wNdSCyzClvIqCrDy3usEEB8f54kLA9cFiBwFCEzT4z5QLfUiKUhfvTcBoU5NtdHxRSkFcmMsa%2FPkxSqLRQikTpL3CZATHZ5EE0sTlEz7TGXz47j%2FmJcYs7nhcN8Qoic3eMhXE3r4UvL4Kih4EkWHJEaiWHTVO%2FbYVkcjnrfzB%2F26BiQQ7iGBpJ4na8UGjU%2FgR9amgdI6qrf0ICK%2FjUN4b%2By3HC7Gf4l9xAVc7rCE3wFw39m2gJArBARVGMMD4nMIGOqUBXyxJ0q0Mg%2B5fqmH404PZRDdM6FpVWaNNot1xFLHkGJczNm8byioH9EYtKDlnphrH7WpOloQeIx81MTqVynl4XZGWhMl2PT4pXlsUijSpuick9tRpwfyYE2wa7%2BaEDK%2Bdmngi4rK0y0K%2FpTknp3aBK1pcPTqhKYGg%2Fac9C95zUT4%2FWJFIi2itAelLelZ4fZCJTCMMVeN49GCU6QH8K52oJaBTDg5i&X-Amz-Signature=8aa6394922e254c3fd7525f652f3728188a3e47d9a0a290480fe41d43ffd28fd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
