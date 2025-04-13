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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZULXJ77J%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T160859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDORZXKqTupYWFGvN4Ej5N%2BRpzUiNQcGlqWnp7iUe%2F0HwIhAI1T0OTtZnhgAVcRomRttLnq0AMqVREuSsDtQF%2FAQYI8KogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8PI2BRw99UnJ1pF8q3AOWt2UmlZ6fKnKnm9FrjmI7Y25%2F1xHjk9d0j%2FIdu0ArK5tBRVFNfepnbJPzVSM1lucWs%2FsQjeD4HpF6s0QKTiGa5FMbaVmWNyL1IDyaEdLh8OnsyvTo2nFQQIHSnH8VqxYxnzih0YkKip7L%2B9LapqB61ue4Fm3G1EVDuEVLe0PjrSf0Zdw4nye5wURAjTXYQgh8mLXDpcfjR%2FEzPa9MtlRksSyneYNRiNdi%2FRqWu1NOlCNAUALKm4GJmjaxydWwdk8rN8QZMLaO9YI1%2FhedG17fcWzkIUcvoTi92DENasmdcOBylLv%2Bhjaa28YnaLUthyybu0%2F9hhWf5i36MMfQ7vDeSCYO88pflNMF%2Bi5X5LaDBXxysWxMI%2B6AdqiXyPuBKOWSEamTfj5UzHFluSvJ49RvaE9JrnxWExNNcZq8NjUQKIEeRe9xyZPqWHkO7jf5ltecirvFDTdgKh1gsSfsJqSYssPk8oFogInforjnTs1XAJbkrFU7v8MNXPUCtG8m1dXtpeGLmtQGgrI9Q%2FzCXB4B6HwQ6BhXk7knI2Stc4sHaRWq5tFKqPQ6AWohNL1qsUqhVWLMzvAwEfs9roGcGB3pmPFFqNaKH857%2B7qd1yjXlv0dweVR3YsrOsNOHTCsiu%2B%2FBjqkATUFydGnnhKxaMMvWR5G8oVyM%2FHxNi8LpP6Ezsm%2BLZfh2N%2FQFIhsN9ByuZHrCtCDd6FL4cj28TWp9PLJ8WGAlrq4yu%2B1GWU9jwUMeAR3oCHzwuNxhvYeUH8SjXFEDGQTZHMG329CPi3LR39xsGe22a4QU3qIrYSBO951gkxqX3TbvpRemJtPzubPkxV14UPonXOfmPkhY9G1dQdHs3hjJ0mTitiQ&X-Amz-Signature=0ea42862b1fbe0db22e05d4cc0c2a1d7b3a5eb93ef43e8408dfdfb575297922e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZULXJ77J%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T160859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDORZXKqTupYWFGvN4Ej5N%2BRpzUiNQcGlqWnp7iUe%2F0HwIhAI1T0OTtZnhgAVcRomRttLnq0AMqVREuSsDtQF%2FAQYI8KogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8PI2BRw99UnJ1pF8q3AOWt2UmlZ6fKnKnm9FrjmI7Y25%2F1xHjk9d0j%2FIdu0ArK5tBRVFNfepnbJPzVSM1lucWs%2FsQjeD4HpF6s0QKTiGa5FMbaVmWNyL1IDyaEdLh8OnsyvTo2nFQQIHSnH8VqxYxnzih0YkKip7L%2B9LapqB61ue4Fm3G1EVDuEVLe0PjrSf0Zdw4nye5wURAjTXYQgh8mLXDpcfjR%2FEzPa9MtlRksSyneYNRiNdi%2FRqWu1NOlCNAUALKm4GJmjaxydWwdk8rN8QZMLaO9YI1%2FhedG17fcWzkIUcvoTi92DENasmdcOBylLv%2Bhjaa28YnaLUthyybu0%2F9hhWf5i36MMfQ7vDeSCYO88pflNMF%2Bi5X5LaDBXxysWxMI%2B6AdqiXyPuBKOWSEamTfj5UzHFluSvJ49RvaE9JrnxWExNNcZq8NjUQKIEeRe9xyZPqWHkO7jf5ltecirvFDTdgKh1gsSfsJqSYssPk8oFogInforjnTs1XAJbkrFU7v8MNXPUCtG8m1dXtpeGLmtQGgrI9Q%2FzCXB4B6HwQ6BhXk7knI2Stc4sHaRWq5tFKqPQ6AWohNL1qsUqhVWLMzvAwEfs9roGcGB3pmPFFqNaKH857%2B7qd1yjXlv0dweVR3YsrOsNOHTCsiu%2B%2FBjqkATUFydGnnhKxaMMvWR5G8oVyM%2FHxNi8LpP6Ezsm%2BLZfh2N%2FQFIhsN9ByuZHrCtCDd6FL4cj28TWp9PLJ8WGAlrq4yu%2B1GWU9jwUMeAR3oCHzwuNxhvYeUH8SjXFEDGQTZHMG329CPi3LR39xsGe22a4QU3qIrYSBO951gkxqX3TbvpRemJtPzubPkxV14UPonXOfmPkhY9G1dQdHs3hjJ0mTitiQ&X-Amz-Signature=28ebb5b4e7dd378aedbdc444ad4c7cd371150ea6c36f85f5241ab21c0c139b08&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZULXJ77J%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T160859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDORZXKqTupYWFGvN4Ej5N%2BRpzUiNQcGlqWnp7iUe%2F0HwIhAI1T0OTtZnhgAVcRomRttLnq0AMqVREuSsDtQF%2FAQYI8KogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8PI2BRw99UnJ1pF8q3AOWt2UmlZ6fKnKnm9FrjmI7Y25%2F1xHjk9d0j%2FIdu0ArK5tBRVFNfepnbJPzVSM1lucWs%2FsQjeD4HpF6s0QKTiGa5FMbaVmWNyL1IDyaEdLh8OnsyvTo2nFQQIHSnH8VqxYxnzih0YkKip7L%2B9LapqB61ue4Fm3G1EVDuEVLe0PjrSf0Zdw4nye5wURAjTXYQgh8mLXDpcfjR%2FEzPa9MtlRksSyneYNRiNdi%2FRqWu1NOlCNAUALKm4GJmjaxydWwdk8rN8QZMLaO9YI1%2FhedG17fcWzkIUcvoTi92DENasmdcOBylLv%2Bhjaa28YnaLUthyybu0%2F9hhWf5i36MMfQ7vDeSCYO88pflNMF%2Bi5X5LaDBXxysWxMI%2B6AdqiXyPuBKOWSEamTfj5UzHFluSvJ49RvaE9JrnxWExNNcZq8NjUQKIEeRe9xyZPqWHkO7jf5ltecirvFDTdgKh1gsSfsJqSYssPk8oFogInforjnTs1XAJbkrFU7v8MNXPUCtG8m1dXtpeGLmtQGgrI9Q%2FzCXB4B6HwQ6BhXk7knI2Stc4sHaRWq5tFKqPQ6AWohNL1qsUqhVWLMzvAwEfs9roGcGB3pmPFFqNaKH857%2B7qd1yjXlv0dweVR3YsrOsNOHTCsiu%2B%2FBjqkATUFydGnnhKxaMMvWR5G8oVyM%2FHxNi8LpP6Ezsm%2BLZfh2N%2FQFIhsN9ByuZHrCtCDd6FL4cj28TWp9PLJ8WGAlrq4yu%2B1GWU9jwUMeAR3oCHzwuNxhvYeUH8SjXFEDGQTZHMG329CPi3LR39xsGe22a4QU3qIrYSBO951gkxqX3TbvpRemJtPzubPkxV14UPonXOfmPkhY9G1dQdHs3hjJ0mTitiQ&X-Amz-Signature=ddeaa6ae968dbf6dcd45b91e915a02bf0cd6f6ce5767e4fe286d0736bf5a16a9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
