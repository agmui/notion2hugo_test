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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUWYNA5A%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T081217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoWwR1O1%2BEtR36OAyEPCXiftGGD8ronhOJ1C5bkkER9gIhAPAdQUyjwlbz6qJkAhBSU%2BV1771o%2BPH4MpiybtOLkxOqKv8DCHEQABoMNjM3NDIzMTgzODA1IgwgOJ0VbXc3bLwKGsMq3AMZauycUG%2BOR%2FBlkORZJSZCjmvslGPSqEi%2BANzBoIagMi85dub7Uzw86QDAjiCoKCTB2O6N9cjNoBmvkFEyygQ8q7P5e0lDEI%2FcfhYM6YjOLDtFHogyXImClOVHsztEbe6lReoYukYvmgyVsnAmkmeDLOwrRKstvAVEyIAPzWyL8f0txRzGoa9KtvxLstkK%2Bb9rnvTG6tZTTJHcLc0upyL2Y9nOPPXZ8L%2FKzSmWahHsJfvXcsVYDfV1pWnsZVeNJZU0RPz2WJUIBM9IZQ%2B%2FdG2hpNPlIQ%2Bt9zy7E%2FkN8%2FUCiXWPRSl3048o37U7bPSh%2B7raziSGuT3%2BsFz6YPfALicOap4mEanEtVegC4xFJ4YCK6075p5ViTxVAQruUrMHaYbh3w8gwS8M0CD2LAjyfShb4MJGjcrPnxLjM4CdQ30F%2F6V1VJ9qaSiNWAty8pftxm1bKI%2FC53Q9N7%2FO2pl2qQjCSdyf%2F4bWwEr%2F%2FDVHANcG8lc1c6UAET3izZtLqrTWdNvTbtci40nDg0IlN8%2BWlxx7g1eA0sN6%2BROSEBRJuWTxnW7VOv9u3EEEhzBuCwzs%2BYdC84jampr3XuA4fZu%2FqVk6xisECiyhGJBmqyxHm%2FPgeyxwiDxe6%2FQCYM2v0zCuxfHABjqkARXa9UIYLJbYS%2B%2Fgcw7E2ef5pjGt3i1nS%2Bw6qunQkL%2BeP8t%2FJomrwBCgCAYZm%2FjB6fC1%2B%2Fm3I5H%2BlnxG%2FxpJRu90vqBvhRzxjSg7r0uDUnCZXT%2BxhaDWq%2FXnJvDwUipeaWxZasJ8YcWsBCoEwjAVF%2BU8hbz6wwUtssjUJUKB7HwhTLCIqfblB%2FD0Wh1bXh%2B4KdJRXSCDS%2BUkgnazdEK0KdJXgFSW&X-Amz-Signature=81e09b80f1bdea6fd304836fc3a4c81dfb42433ccc1dbe72884c09bc71f0cda3&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUWYNA5A%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T081217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoWwR1O1%2BEtR36OAyEPCXiftGGD8ronhOJ1C5bkkER9gIhAPAdQUyjwlbz6qJkAhBSU%2BV1771o%2BPH4MpiybtOLkxOqKv8DCHEQABoMNjM3NDIzMTgzODA1IgwgOJ0VbXc3bLwKGsMq3AMZauycUG%2BOR%2FBlkORZJSZCjmvslGPSqEi%2BANzBoIagMi85dub7Uzw86QDAjiCoKCTB2O6N9cjNoBmvkFEyygQ8q7P5e0lDEI%2FcfhYM6YjOLDtFHogyXImClOVHsztEbe6lReoYukYvmgyVsnAmkmeDLOwrRKstvAVEyIAPzWyL8f0txRzGoa9KtvxLstkK%2Bb9rnvTG6tZTTJHcLc0upyL2Y9nOPPXZ8L%2FKzSmWahHsJfvXcsVYDfV1pWnsZVeNJZU0RPz2WJUIBM9IZQ%2B%2FdG2hpNPlIQ%2Bt9zy7E%2FkN8%2FUCiXWPRSl3048o37U7bPSh%2B7raziSGuT3%2BsFz6YPfALicOap4mEanEtVegC4xFJ4YCK6075p5ViTxVAQruUrMHaYbh3w8gwS8M0CD2LAjyfShb4MJGjcrPnxLjM4CdQ30F%2F6V1VJ9qaSiNWAty8pftxm1bKI%2FC53Q9N7%2FO2pl2qQjCSdyf%2F4bWwEr%2F%2FDVHANcG8lc1c6UAET3izZtLqrTWdNvTbtci40nDg0IlN8%2BWlxx7g1eA0sN6%2BROSEBRJuWTxnW7VOv9u3EEEhzBuCwzs%2BYdC84jampr3XuA4fZu%2FqVk6xisECiyhGJBmqyxHm%2FPgeyxwiDxe6%2FQCYM2v0zCuxfHABjqkARXa9UIYLJbYS%2B%2Fgcw7E2ef5pjGt3i1nS%2Bw6qunQkL%2BeP8t%2FJomrwBCgCAYZm%2FjB6fC1%2B%2Fm3I5H%2BlnxG%2FxpJRu90vqBvhRzxjSg7r0uDUnCZXT%2BxhaDWq%2FXnJvDwUipeaWxZasJ8YcWsBCoEwjAVF%2BU8hbz6wwUtssjUJUKB7HwhTLCIqfblB%2FD0Wh1bXh%2B4KdJRXSCDS%2BUkgnazdEK0KdJXgFSW&X-Amz-Signature=8d513071282892e33c9c123fcbd88b9e03936e161698fe842a72aec1358054e7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUWYNA5A%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T081217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoWwR1O1%2BEtR36OAyEPCXiftGGD8ronhOJ1C5bkkER9gIhAPAdQUyjwlbz6qJkAhBSU%2BV1771o%2BPH4MpiybtOLkxOqKv8DCHEQABoMNjM3NDIzMTgzODA1IgwgOJ0VbXc3bLwKGsMq3AMZauycUG%2BOR%2FBlkORZJSZCjmvslGPSqEi%2BANzBoIagMi85dub7Uzw86QDAjiCoKCTB2O6N9cjNoBmvkFEyygQ8q7P5e0lDEI%2FcfhYM6YjOLDtFHogyXImClOVHsztEbe6lReoYukYvmgyVsnAmkmeDLOwrRKstvAVEyIAPzWyL8f0txRzGoa9KtvxLstkK%2Bb9rnvTG6tZTTJHcLc0upyL2Y9nOPPXZ8L%2FKzSmWahHsJfvXcsVYDfV1pWnsZVeNJZU0RPz2WJUIBM9IZQ%2B%2FdG2hpNPlIQ%2Bt9zy7E%2FkN8%2FUCiXWPRSl3048o37U7bPSh%2B7raziSGuT3%2BsFz6YPfALicOap4mEanEtVegC4xFJ4YCK6075p5ViTxVAQruUrMHaYbh3w8gwS8M0CD2LAjyfShb4MJGjcrPnxLjM4CdQ30F%2F6V1VJ9qaSiNWAty8pftxm1bKI%2FC53Q9N7%2FO2pl2qQjCSdyf%2F4bWwEr%2F%2FDVHANcG8lc1c6UAET3izZtLqrTWdNvTbtci40nDg0IlN8%2BWlxx7g1eA0sN6%2BROSEBRJuWTxnW7VOv9u3EEEhzBuCwzs%2BYdC84jampr3XuA4fZu%2FqVk6xisECiyhGJBmqyxHm%2FPgeyxwiDxe6%2FQCYM2v0zCuxfHABjqkARXa9UIYLJbYS%2B%2Fgcw7E2ef5pjGt3i1nS%2Bw6qunQkL%2BeP8t%2FJomrwBCgCAYZm%2FjB6fC1%2B%2Fm3I5H%2BlnxG%2FxpJRu90vqBvhRzxjSg7r0uDUnCZXT%2BxhaDWq%2FXnJvDwUipeaWxZasJ8YcWsBCoEwjAVF%2BU8hbz6wwUtssjUJUKB7HwhTLCIqfblB%2FD0Wh1bXh%2B4KdJRXSCDS%2BUkgnazdEK0KdJXgFSW&X-Amz-Signature=1f8beaa290cd68d72813e026051f95d7e032c2356eb04a799e9ed8ad019db018&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
