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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFXSVI7E%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T230947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCOz2rZS5R5j6KGZvKsCf5Iz0xvP18N6LO6vU7R9K9QrAIhAO3vn0hTd2ScDVnxGJfBrtQ2Ij3pBlUmuvVU%2BzzzY5SuKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwo9juYtzXNAAe5Gt8q3AOC%2B917VPDHqxir9jwtW%2Bl9QopI3cnT8zyiymgK13q8ZPB2mk%2Biy44yTgIBbOrEGfy8u7O1MlDVfAfM4mQEt6TymH2BsCegy%2B9%2F68HhedQFm81bmA59wXuOYFuQcAy8st8FuR90Q%2F9GX3BQhD39MB6b6qYkw%2BEc4oL3VkoVRmKQKD65qw6Yg3Z%2BmlD4%2BQ5JG2EF%2BNMYea7BXqpPy%2Fy0j%2F549K40unUq2wWTNhtK%2BfiMiMoInbCyUgW4Yad7ZdxruklYgxNn8puJW3FCJw3X0TBRoFjfMfG1ksKkSlgyg83CHYGL6VXm0hULKwtBzdGT%2FowMqcEcMdbvEKiPuxXEv%2BhHqLgOuFwxq1WZ5tgE3xQ8XthWTquAY1fw8hwnDUvSft3TeiEC2EHUEMcIOc0FAoQiuv4fopuVyOicE7MvFvoMqlzkASRUYDFW%2BWJ3yvocJFn5aydxXsAxHWZP%2FlTd9SQ6ybglUIiA7aoPIKpRSZIpY%2FjnhcYrr47T%2Bw949K32qoEwJMsZkaP0iSP%2Bp%2BDWgtdgTTM7N%2FeRzpFSzHkyt4C6H28Ao6rR9CKYHLs4DRICZ%2Fn6wq16oYedUzSvd%2BNjQ4bWE6prAQmxbCplE3a2kujDjDYFe3iTOtyfZk7SsTCo%2B%2BXDBjqkAdWUuhM7YjqYSsOdg8FI90UtLE%2BsNeXGzrtSltSl21kH9fKMqxLDpafsmYJtPTE218nZ4vcHZQ3uF%2F0BPLzwxZsL2xuvX2yX17xqM5r5H23fn9KEKpqjMjAxhkBRchqwDAw3veOj0u5EBNdSxrK%2Fy9g20L%2BmBXSNOWeQAKeqt%2BzKvgl1JBpEIFL9EMQu%2FFvfIcGgD2gu5sVzy0XFxVxyeItm8EZe&X-Amz-Signature=02b4e0a05a980dcba61545740e667c5f162f45bca1153e593b82a9089a64b83c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFXSVI7E%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T230947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCOz2rZS5R5j6KGZvKsCf5Iz0xvP18N6LO6vU7R9K9QrAIhAO3vn0hTd2ScDVnxGJfBrtQ2Ij3pBlUmuvVU%2BzzzY5SuKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwo9juYtzXNAAe5Gt8q3AOC%2B917VPDHqxir9jwtW%2Bl9QopI3cnT8zyiymgK13q8ZPB2mk%2Biy44yTgIBbOrEGfy8u7O1MlDVfAfM4mQEt6TymH2BsCegy%2B9%2F68HhedQFm81bmA59wXuOYFuQcAy8st8FuR90Q%2F9GX3BQhD39MB6b6qYkw%2BEc4oL3VkoVRmKQKD65qw6Yg3Z%2BmlD4%2BQ5JG2EF%2BNMYea7BXqpPy%2Fy0j%2F549K40unUq2wWTNhtK%2BfiMiMoInbCyUgW4Yad7ZdxruklYgxNn8puJW3FCJw3X0TBRoFjfMfG1ksKkSlgyg83CHYGL6VXm0hULKwtBzdGT%2FowMqcEcMdbvEKiPuxXEv%2BhHqLgOuFwxq1WZ5tgE3xQ8XthWTquAY1fw8hwnDUvSft3TeiEC2EHUEMcIOc0FAoQiuv4fopuVyOicE7MvFvoMqlzkASRUYDFW%2BWJ3yvocJFn5aydxXsAxHWZP%2FlTd9SQ6ybglUIiA7aoPIKpRSZIpY%2FjnhcYrr47T%2Bw949K32qoEwJMsZkaP0iSP%2Bp%2BDWgtdgTTM7N%2FeRzpFSzHkyt4C6H28Ao6rR9CKYHLs4DRICZ%2Fn6wq16oYedUzSvd%2BNjQ4bWE6prAQmxbCplE3a2kujDjDYFe3iTOtyfZk7SsTCo%2B%2BXDBjqkAdWUuhM7YjqYSsOdg8FI90UtLE%2BsNeXGzrtSltSl21kH9fKMqxLDpafsmYJtPTE218nZ4vcHZQ3uF%2F0BPLzwxZsL2xuvX2yX17xqM5r5H23fn9KEKpqjMjAxhkBRchqwDAw3veOj0u5EBNdSxrK%2Fy9g20L%2BmBXSNOWeQAKeqt%2BzKvgl1JBpEIFL9EMQu%2FFvfIcGgD2gu5sVzy0XFxVxyeItm8EZe&X-Amz-Signature=c27fdd4abca4503cf3725a3bf1011145aee9ede2dc432e1d96e2d4acddcc944a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFXSVI7E%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T230947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCOz2rZS5R5j6KGZvKsCf5Iz0xvP18N6LO6vU7R9K9QrAIhAO3vn0hTd2ScDVnxGJfBrtQ2Ij3pBlUmuvVU%2BzzzY5SuKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwo9juYtzXNAAe5Gt8q3AOC%2B917VPDHqxir9jwtW%2Bl9QopI3cnT8zyiymgK13q8ZPB2mk%2Biy44yTgIBbOrEGfy8u7O1MlDVfAfM4mQEt6TymH2BsCegy%2B9%2F68HhedQFm81bmA59wXuOYFuQcAy8st8FuR90Q%2F9GX3BQhD39MB6b6qYkw%2BEc4oL3VkoVRmKQKD65qw6Yg3Z%2BmlD4%2BQ5JG2EF%2BNMYea7BXqpPy%2Fy0j%2F549K40unUq2wWTNhtK%2BfiMiMoInbCyUgW4Yad7ZdxruklYgxNn8puJW3FCJw3X0TBRoFjfMfG1ksKkSlgyg83CHYGL6VXm0hULKwtBzdGT%2FowMqcEcMdbvEKiPuxXEv%2BhHqLgOuFwxq1WZ5tgE3xQ8XthWTquAY1fw8hwnDUvSft3TeiEC2EHUEMcIOc0FAoQiuv4fopuVyOicE7MvFvoMqlzkASRUYDFW%2BWJ3yvocJFn5aydxXsAxHWZP%2FlTd9SQ6ybglUIiA7aoPIKpRSZIpY%2FjnhcYrr47T%2Bw949K32qoEwJMsZkaP0iSP%2Bp%2BDWgtdgTTM7N%2FeRzpFSzHkyt4C6H28Ao6rR9CKYHLs4DRICZ%2Fn6wq16oYedUzSvd%2BNjQ4bWE6prAQmxbCplE3a2kujDjDYFe3iTOtyfZk7SsTCo%2B%2BXDBjqkAdWUuhM7YjqYSsOdg8FI90UtLE%2BsNeXGzrtSltSl21kH9fKMqxLDpafsmYJtPTE218nZ4vcHZQ3uF%2F0BPLzwxZsL2xuvX2yX17xqM5r5H23fn9KEKpqjMjAxhkBRchqwDAw3veOj0u5EBNdSxrK%2Fy9g20L%2BmBXSNOWeQAKeqt%2BzKvgl1JBpEIFL9EMQu%2FFvfIcGgD2gu5sVzy0XFxVxyeItm8EZe&X-Amz-Signature=7a248ab842aa970255eec30dc7cddca9e22e2564c9befee4f24cf1a8841b7a89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
