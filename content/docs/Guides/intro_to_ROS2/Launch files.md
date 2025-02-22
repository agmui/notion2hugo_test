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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UALLFQ3C%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T050717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQgjf6jh0xxhATwTU9UJGnvDWKVGb89xIzmstk00ocUQIhAPKE8v4PDdxAdBLrphyf%2F7u%2FAjCNbxarwBLqQdMw%2Fh0dKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwI6e2sHlU5lL39A7Iq3ANxrc4yjK%2BYaH1zSkidNBZGPEoo4ul0kmk3p9PQwonz%2F30tmbNY7zjFM%2FzAnpUbDO39k9fMiU1I%2BOIEAmU2miPSqtIjxDfhywdVRoFouP%2BqKPwaKd7ej78kSSRYgnLQl%2Bcn%2BySA5fNu8Fcrac%2BT6ffLuRurAKDD68NVAxleBhF4KIEpK%2BRB2R6uajTzg7HP1dHxmXg66ZBht1Dp95GIyV02vBegB9Fx281QNgKzTk1S1zbuffn%2BPVZ5NRZjBudNiVbvH%2FTpN4raMpZk6Zt0sE8OT5Mo0XnhZBsnFXrEq1DUelkyCs%2FAMIHuQVWWp80tKjVNmIb1wglf%2BFbZHum0n%2FcFQvHJwm4HjUpeRQsF6ZY8L5kR%2BPN3%2FXZmX7dVMGHTPsVIfaJs2IrEynEeT6yBm1BI1Y3j4lK46YX%2FN0H08DqyhR57YMQpyRH9L%2B8Q4An%2FJf%2FhSrQZlcynPgxFO6AkUUBSW1DlRU7O3Mmb8TvkAvoJWZ52vYW6rXf0zV0SBFGw4FsRwzOrQcntJZuA%2FeArFi5QLjaoDYoWA0gajMPZsu28CJttL6vWWoy1U%2F%2BFAVgbai6F8B%2BucMxJHI%2BTJZrNppgyRV91ClG5utEwKKEQTvPqbOlqH4QEP3cFaqNa8DC4quW9BjqkAZAHXT8f8khXKajuGWZXCx%2F6%2BpXNxO%2F5hQr4DZKDBZnoHFhhhDSnbz8eAxvM%2BwIWF%2B7jkEdl5yBiga%2B5WCTy%2B%2FTRFTOMVCMCtZfYmFw%2BXm1WDKldoBzJbfzdmy8Qu%2F3oBXQ%2BH3ml%2B7gkq7qDgxGdRTVzyEES%2B2NUJbEcWuc6iBnK%2FjpWd%2Fix9tJvLhQ1WRtp4pbsmQnhQmwf0qgArUyYMtKo9JjO&X-Amz-Signature=8a36dab72474d4a547266eee33720eb9aacf3c70dfc4cd5b1838353505f88327&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UALLFQ3C%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T050717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQgjf6jh0xxhATwTU9UJGnvDWKVGb89xIzmstk00ocUQIhAPKE8v4PDdxAdBLrphyf%2F7u%2FAjCNbxarwBLqQdMw%2Fh0dKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwI6e2sHlU5lL39A7Iq3ANxrc4yjK%2BYaH1zSkidNBZGPEoo4ul0kmk3p9PQwonz%2F30tmbNY7zjFM%2FzAnpUbDO39k9fMiU1I%2BOIEAmU2miPSqtIjxDfhywdVRoFouP%2BqKPwaKd7ej78kSSRYgnLQl%2Bcn%2BySA5fNu8Fcrac%2BT6ffLuRurAKDD68NVAxleBhF4KIEpK%2BRB2R6uajTzg7HP1dHxmXg66ZBht1Dp95GIyV02vBegB9Fx281QNgKzTk1S1zbuffn%2BPVZ5NRZjBudNiVbvH%2FTpN4raMpZk6Zt0sE8OT5Mo0XnhZBsnFXrEq1DUelkyCs%2FAMIHuQVWWp80tKjVNmIb1wglf%2BFbZHum0n%2FcFQvHJwm4HjUpeRQsF6ZY8L5kR%2BPN3%2FXZmX7dVMGHTPsVIfaJs2IrEynEeT6yBm1BI1Y3j4lK46YX%2FN0H08DqyhR57YMQpyRH9L%2B8Q4An%2FJf%2FhSrQZlcynPgxFO6AkUUBSW1DlRU7O3Mmb8TvkAvoJWZ52vYW6rXf0zV0SBFGw4FsRwzOrQcntJZuA%2FeArFi5QLjaoDYoWA0gajMPZsu28CJttL6vWWoy1U%2F%2BFAVgbai6F8B%2BucMxJHI%2BTJZrNppgyRV91ClG5utEwKKEQTvPqbOlqH4QEP3cFaqNa8DC4quW9BjqkAZAHXT8f8khXKajuGWZXCx%2F6%2BpXNxO%2F5hQr4DZKDBZnoHFhhhDSnbz8eAxvM%2BwIWF%2B7jkEdl5yBiga%2B5WCTy%2B%2FTRFTOMVCMCtZfYmFw%2BXm1WDKldoBzJbfzdmy8Qu%2F3oBXQ%2BH3ml%2B7gkq7qDgxGdRTVzyEES%2B2NUJbEcWuc6iBnK%2FjpWd%2Fix9tJvLhQ1WRtp4pbsmQnhQmwf0qgArUyYMtKo9JjO&X-Amz-Signature=e8aa20eebaa0ee9181fa4b2d4331c511db1630b6c1395cc1bc959e814cd64b36&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UALLFQ3C%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T050717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQgjf6jh0xxhATwTU9UJGnvDWKVGb89xIzmstk00ocUQIhAPKE8v4PDdxAdBLrphyf%2F7u%2FAjCNbxarwBLqQdMw%2Fh0dKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwI6e2sHlU5lL39A7Iq3ANxrc4yjK%2BYaH1zSkidNBZGPEoo4ul0kmk3p9PQwonz%2F30tmbNY7zjFM%2FzAnpUbDO39k9fMiU1I%2BOIEAmU2miPSqtIjxDfhywdVRoFouP%2BqKPwaKd7ej78kSSRYgnLQl%2Bcn%2BySA5fNu8Fcrac%2BT6ffLuRurAKDD68NVAxleBhF4KIEpK%2BRB2R6uajTzg7HP1dHxmXg66ZBht1Dp95GIyV02vBegB9Fx281QNgKzTk1S1zbuffn%2BPVZ5NRZjBudNiVbvH%2FTpN4raMpZk6Zt0sE8OT5Mo0XnhZBsnFXrEq1DUelkyCs%2FAMIHuQVWWp80tKjVNmIb1wglf%2BFbZHum0n%2FcFQvHJwm4HjUpeRQsF6ZY8L5kR%2BPN3%2FXZmX7dVMGHTPsVIfaJs2IrEynEeT6yBm1BI1Y3j4lK46YX%2FN0H08DqyhR57YMQpyRH9L%2B8Q4An%2FJf%2FhSrQZlcynPgxFO6AkUUBSW1DlRU7O3Mmb8TvkAvoJWZ52vYW6rXf0zV0SBFGw4FsRwzOrQcntJZuA%2FeArFi5QLjaoDYoWA0gajMPZsu28CJttL6vWWoy1U%2F%2BFAVgbai6F8B%2BucMxJHI%2BTJZrNppgyRV91ClG5utEwKKEQTvPqbOlqH4QEP3cFaqNa8DC4quW9BjqkAZAHXT8f8khXKajuGWZXCx%2F6%2BpXNxO%2F5hQr4DZKDBZnoHFhhhDSnbz8eAxvM%2BwIWF%2B7jkEdl5yBiga%2B5WCTy%2B%2FTRFTOMVCMCtZfYmFw%2BXm1WDKldoBzJbfzdmy8Qu%2F3oBXQ%2BH3ml%2B7gkq7qDgxGdRTVzyEES%2B2NUJbEcWuc6iBnK%2FjpWd%2Fix9tJvLhQ1WRtp4pbsmQnhQmwf0qgArUyYMtKo9JjO&X-Amz-Signature=4b2a07e41aba3a7295da04ae1befd33461d7a4dfdb7a95e67c080d85355e7e93&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
