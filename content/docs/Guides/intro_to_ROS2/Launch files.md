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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFJ55KQQ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T220739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIFujHdjQ11hN5t7FwTWkGswHoLUB0m9h2OdLIvYpHPoYAiEA3MDIctOWpXL%2Bh3PHfcv74nJqFc9IL2tLxFJHn8iwC6Mq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJgpsYv4P7pss8R9OCrcA0RBD0YEkBALmugdQB0S%2FZV831dsrv3AZnv6KAgBKF0jhuhKTD991Cs1sdaswsSgkfuUoAZxV%2FmdrZdhgDvh8l09olJAJG1xX7bhQ98esCayqcjEZ0TKo3ezdkc0MjYhk7UNCWy699sl9Cv1pZa6Ib7rI6bvQTlIeVM5zuwpWcXffd5eeuxBW%2BAK2XZP7uVdocg5JAGvfT1HG5%2BZl6HsXlfsImuwVpA6fjp9xLhpzj1YvxxmbDfUTz1D9LRWC9fQiN%2FsB%2Fh%2BJ8JDSiGF4fkHXaWozUJiGT4e0r9pxW8eJzTiYBF%2Bs5yiDk6Y3GtUsmBty08H%2Fqnpzg4j5vmbCU8rN07%2FitHJw3uQudByoq5jPaY2DRbHoC%2BwDwn0h2Zwm7%2BAFxNI5e41PSiS1kPb3nP9BoEKLvxFCU0Xje%2F%2F3jua085RXShuy1j%2Bq5ziZqKdbFqQxRk%2FJW%2BqtWJmLCocF%2BqJ3hSxn%2BAZT%2Fmiy2wonuMmJj%2BQcr960QIrpkruERE7zTkqBDEKzO0%2BTNtbNk4khnbXnf2AbalOll2mKZbMHAttVB5HQUgMvfufQIWvUJAWRIjBelWVuorJEnBLxQsax1KQ8DLSjXTYjvEkPeSlx%2B3ZxJAR2%2F9HpY%2FfCjoxTCcxMPq7g74GOqUBeFSiowBsUXxX8m%2Ffuy5x4EEAZnXWebapiz%2FTL1gkbFW%2BxM%2B8CLKrDECHr9FqrDbeAZrqnJN9WZ1VYGX%2F6gYDJqD8rFZPZ78vzhWteOS7J%2BR2L%2FRMeAY01F4Miiy36ev3LlEV5saIxJ6qCCCbSa67QL9tyYac4fvdRvSVfkXMZeZtEfqGRyehDWtIOuCpzOB%2BuD%2FOYZJEh%2BkAgWMyRtJHpAXXEylY&X-Amz-Signature=f980d727be7d1f4725a3bb7f46eaebd5c25abc1823018950e95b26dd706079c4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFJ55KQQ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T220739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIFujHdjQ11hN5t7FwTWkGswHoLUB0m9h2OdLIvYpHPoYAiEA3MDIctOWpXL%2Bh3PHfcv74nJqFc9IL2tLxFJHn8iwC6Mq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJgpsYv4P7pss8R9OCrcA0RBD0YEkBALmugdQB0S%2FZV831dsrv3AZnv6KAgBKF0jhuhKTD991Cs1sdaswsSgkfuUoAZxV%2FmdrZdhgDvh8l09olJAJG1xX7bhQ98esCayqcjEZ0TKo3ezdkc0MjYhk7UNCWy699sl9Cv1pZa6Ib7rI6bvQTlIeVM5zuwpWcXffd5eeuxBW%2BAK2XZP7uVdocg5JAGvfT1HG5%2BZl6HsXlfsImuwVpA6fjp9xLhpzj1YvxxmbDfUTz1D9LRWC9fQiN%2FsB%2Fh%2BJ8JDSiGF4fkHXaWozUJiGT4e0r9pxW8eJzTiYBF%2Bs5yiDk6Y3GtUsmBty08H%2Fqnpzg4j5vmbCU8rN07%2FitHJw3uQudByoq5jPaY2DRbHoC%2BwDwn0h2Zwm7%2BAFxNI5e41PSiS1kPb3nP9BoEKLvxFCU0Xje%2F%2F3jua085RXShuy1j%2Bq5ziZqKdbFqQxRk%2FJW%2BqtWJmLCocF%2BqJ3hSxn%2BAZT%2Fmiy2wonuMmJj%2BQcr960QIrpkruERE7zTkqBDEKzO0%2BTNtbNk4khnbXnf2AbalOll2mKZbMHAttVB5HQUgMvfufQIWvUJAWRIjBelWVuorJEnBLxQsax1KQ8DLSjXTYjvEkPeSlx%2B3ZxJAR2%2F9HpY%2FfCjoxTCcxMPq7g74GOqUBeFSiowBsUXxX8m%2Ffuy5x4EEAZnXWebapiz%2FTL1gkbFW%2BxM%2B8CLKrDECHr9FqrDbeAZrqnJN9WZ1VYGX%2F6gYDJqD8rFZPZ78vzhWteOS7J%2BR2L%2FRMeAY01F4Miiy36ev3LlEV5saIxJ6qCCCbSa67QL9tyYac4fvdRvSVfkXMZeZtEfqGRyehDWtIOuCpzOB%2BuD%2FOYZJEh%2BkAgWMyRtJHpAXXEylY&X-Amz-Signature=3a755ec1fdba31298b277f5071be6ec19049913ccf70aedc312b136ce3776d43&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFJ55KQQ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T220739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIFujHdjQ11hN5t7FwTWkGswHoLUB0m9h2OdLIvYpHPoYAiEA3MDIctOWpXL%2Bh3PHfcv74nJqFc9IL2tLxFJHn8iwC6Mq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJgpsYv4P7pss8R9OCrcA0RBD0YEkBALmugdQB0S%2FZV831dsrv3AZnv6KAgBKF0jhuhKTD991Cs1sdaswsSgkfuUoAZxV%2FmdrZdhgDvh8l09olJAJG1xX7bhQ98esCayqcjEZ0TKo3ezdkc0MjYhk7UNCWy699sl9Cv1pZa6Ib7rI6bvQTlIeVM5zuwpWcXffd5eeuxBW%2BAK2XZP7uVdocg5JAGvfT1HG5%2BZl6HsXlfsImuwVpA6fjp9xLhpzj1YvxxmbDfUTz1D9LRWC9fQiN%2FsB%2Fh%2BJ8JDSiGF4fkHXaWozUJiGT4e0r9pxW8eJzTiYBF%2Bs5yiDk6Y3GtUsmBty08H%2Fqnpzg4j5vmbCU8rN07%2FitHJw3uQudByoq5jPaY2DRbHoC%2BwDwn0h2Zwm7%2BAFxNI5e41PSiS1kPb3nP9BoEKLvxFCU0Xje%2F%2F3jua085RXShuy1j%2Bq5ziZqKdbFqQxRk%2FJW%2BqtWJmLCocF%2BqJ3hSxn%2BAZT%2Fmiy2wonuMmJj%2BQcr960QIrpkruERE7zTkqBDEKzO0%2BTNtbNk4khnbXnf2AbalOll2mKZbMHAttVB5HQUgMvfufQIWvUJAWRIjBelWVuorJEnBLxQsax1KQ8DLSjXTYjvEkPeSlx%2B3ZxJAR2%2F9HpY%2FfCjoxTCcxMPq7g74GOqUBeFSiowBsUXxX8m%2Ffuy5x4EEAZnXWebapiz%2FTL1gkbFW%2BxM%2B8CLKrDECHr9FqrDbeAZrqnJN9WZ1VYGX%2F6gYDJqD8rFZPZ78vzhWteOS7J%2BR2L%2FRMeAY01F4Miiy36ev3LlEV5saIxJ6qCCCbSa67QL9tyYac4fvdRvSVfkXMZeZtEfqGRyehDWtIOuCpzOB%2BuD%2FOYZJEh%2BkAgWMyRtJHpAXXEylY&X-Amz-Signature=249866a0c3df2d4377a6c198b0fd94e31a90163a22b31f7307ab1f22835f8f4e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
