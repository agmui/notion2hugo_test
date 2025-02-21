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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWHVW55G%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T190211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5Y%2Bo0HTrF7cliHHvHjlZCuX0AZMDs9uxlNvEsJnsBvAIhALxdc%2FhA2d8W0SJLyNck70LR25LiibFZlYKwE5eaJYNfKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzgw1xnNOC0ZhQrwAsq3APgp0%2FAfGN%2F7QpOlIwRsfOAVp04bKLVfqbhN3lZs5PdSnm787biP9oppXYQRhfl%2BWelcN7yXWbh%2Bn0qqbWtgI3N0GRln9pSrz7MVN%2FPOhdv6gZavizql9PEFnZQfljDQ0%2FFN%2FqKsuMh%2BcLkbeJ5ANCbnRGcHFkCkV0930sN9Veg5eXTlfVGFyOBhd2Ew7YD4QvVc5eMFvti9x93Lxelnr24YsShYFggaRSjKRBPxbX8xJCr2RtMK%2BwR4YyrBHA8aBv8VR69uJg%2BwW4BW6LgiPd3XvFmD1V3VA%2B0B6TdVG8N9w9A8qM7Gqs0uN6YTMK1QcHhF%2BTC8Pyi71T%2BX%2Bt%2BEmnl7acNVsf8riU1aMkmkMdODBSD0LajP6II6ufwpoxAqY8ojDCHkZHzsaGhD4TSOaCr2pyZW94eGEScE3XwZa%2FQtol8oLJO153URRymaKDYb%2BMJ4fvkrn%2BsVQfY9KoFxQBULX%2Bbati%2FLyI4kIvTUEULBrsqLQy9OzInaH5eXwvO%2BtNGKLoeCr7DDHwu0kabBvBO0zxcuLydTDB0bxKSzfr0hYLonChQ313RP7ob%2B0GjCz27q4UfS2kE8muj59XjtOHfdZhkQd54AgGrwxarX2eEpD1wviOtyGalu3h5YjCogeO9BjqkARkEKTfNog2CSVyuOliQzRetdxmx2rNwXkvr8fL6woUwCGUVy65Ca6BwLPtAreYW90uT57LGMoxThOhxz9lW9IjsLKF6qwpLwTQ2MjFmLuhi7KsS4xNAGJU9nn1mHr2Yyql2bRJY8EpZexRnyRlHbUoRneXXtnyuGRcUeg48EpVoKY69G1nVlv6g9RXA0arNmu7q0COJ6evtKuuhgMW77lO1LzLD&X-Amz-Signature=47fbfcce7d22041c7eb3c8772dca30038a2868e09950f2b7eb6d1df7bfb83418&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWHVW55G%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T190211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5Y%2Bo0HTrF7cliHHvHjlZCuX0AZMDs9uxlNvEsJnsBvAIhALxdc%2FhA2d8W0SJLyNck70LR25LiibFZlYKwE5eaJYNfKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzgw1xnNOC0ZhQrwAsq3APgp0%2FAfGN%2F7QpOlIwRsfOAVp04bKLVfqbhN3lZs5PdSnm787biP9oppXYQRhfl%2BWelcN7yXWbh%2Bn0qqbWtgI3N0GRln9pSrz7MVN%2FPOhdv6gZavizql9PEFnZQfljDQ0%2FFN%2FqKsuMh%2BcLkbeJ5ANCbnRGcHFkCkV0930sN9Veg5eXTlfVGFyOBhd2Ew7YD4QvVc5eMFvti9x93Lxelnr24YsShYFggaRSjKRBPxbX8xJCr2RtMK%2BwR4YyrBHA8aBv8VR69uJg%2BwW4BW6LgiPd3XvFmD1V3VA%2B0B6TdVG8N9w9A8qM7Gqs0uN6YTMK1QcHhF%2BTC8Pyi71T%2BX%2Bt%2BEmnl7acNVsf8riU1aMkmkMdODBSD0LajP6II6ufwpoxAqY8ojDCHkZHzsaGhD4TSOaCr2pyZW94eGEScE3XwZa%2FQtol8oLJO153URRymaKDYb%2BMJ4fvkrn%2BsVQfY9KoFxQBULX%2Bbati%2FLyI4kIvTUEULBrsqLQy9OzInaH5eXwvO%2BtNGKLoeCr7DDHwu0kabBvBO0zxcuLydTDB0bxKSzfr0hYLonChQ313RP7ob%2B0GjCz27q4UfS2kE8muj59XjtOHfdZhkQd54AgGrwxarX2eEpD1wviOtyGalu3h5YjCogeO9BjqkARkEKTfNog2CSVyuOliQzRetdxmx2rNwXkvr8fL6woUwCGUVy65Ca6BwLPtAreYW90uT57LGMoxThOhxz9lW9IjsLKF6qwpLwTQ2MjFmLuhi7KsS4xNAGJU9nn1mHr2Yyql2bRJY8EpZexRnyRlHbUoRneXXtnyuGRcUeg48EpVoKY69G1nVlv6g9RXA0arNmu7q0COJ6evtKuuhgMW77lO1LzLD&X-Amz-Signature=da8d5cfd73b5f9c6a1ea286854f6d80c0180030d968320d79e5691144840af21&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWHVW55G%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T190211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5Y%2Bo0HTrF7cliHHvHjlZCuX0AZMDs9uxlNvEsJnsBvAIhALxdc%2FhA2d8W0SJLyNck70LR25LiibFZlYKwE5eaJYNfKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzgw1xnNOC0ZhQrwAsq3APgp0%2FAfGN%2F7QpOlIwRsfOAVp04bKLVfqbhN3lZs5PdSnm787biP9oppXYQRhfl%2BWelcN7yXWbh%2Bn0qqbWtgI3N0GRln9pSrz7MVN%2FPOhdv6gZavizql9PEFnZQfljDQ0%2FFN%2FqKsuMh%2BcLkbeJ5ANCbnRGcHFkCkV0930sN9Veg5eXTlfVGFyOBhd2Ew7YD4QvVc5eMFvti9x93Lxelnr24YsShYFggaRSjKRBPxbX8xJCr2RtMK%2BwR4YyrBHA8aBv8VR69uJg%2BwW4BW6LgiPd3XvFmD1V3VA%2B0B6TdVG8N9w9A8qM7Gqs0uN6YTMK1QcHhF%2BTC8Pyi71T%2BX%2Bt%2BEmnl7acNVsf8riU1aMkmkMdODBSD0LajP6II6ufwpoxAqY8ojDCHkZHzsaGhD4TSOaCr2pyZW94eGEScE3XwZa%2FQtol8oLJO153URRymaKDYb%2BMJ4fvkrn%2BsVQfY9KoFxQBULX%2Bbati%2FLyI4kIvTUEULBrsqLQy9OzInaH5eXwvO%2BtNGKLoeCr7DDHwu0kabBvBO0zxcuLydTDB0bxKSzfr0hYLonChQ313RP7ob%2B0GjCz27q4UfS2kE8muj59XjtOHfdZhkQd54AgGrwxarX2eEpD1wviOtyGalu3h5YjCogeO9BjqkARkEKTfNog2CSVyuOliQzRetdxmx2rNwXkvr8fL6woUwCGUVy65Ca6BwLPtAreYW90uT57LGMoxThOhxz9lW9IjsLKF6qwpLwTQ2MjFmLuhi7KsS4xNAGJU9nn1mHr2Yyql2bRJY8EpZexRnyRlHbUoRneXXtnyuGRcUeg48EpVoKY69G1nVlv6g9RXA0arNmu7q0COJ6evtKuuhgMW77lO1LzLD&X-Amz-Signature=fc842ea5087dbce24e63eac617aea3edff6bde901f34700da3196432e8dfb8b8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
