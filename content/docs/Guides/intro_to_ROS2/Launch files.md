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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTOCMGTO%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T090819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPFH8SomPOi2vPEO6%2BAKJlPv%2FbtHoNuEGKsw43qgMfsAIhAKaHWZQLEjQj5tAHY6a249FznnofWMfBTxGUz3pgzCKKKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwT49uxb8iFO6xxva8q3APkMHXnv6bEohoJXdT6RmjMHumBcpAwHR5KFZ0f7nmcZ36kmeAYQcvbKi6j%2BkX6WGPYx4069QNtZEYUtHFHr2yJNt8N%2BwJ91XvCQBxtw3FYY%2F9%2FjBDrn%2F3kdo%2BMI%2FfQR29MCXBq8IXGWC2FfWA2ycM%2FOHSgG8W5P9SO5UavIzNzISh6%2BSpxGZgIOSnaGr5RxjzONGETkK2DJpfDsAoQaffPGEShr9xd%2BOk1I1VNglQzb5lxX8qHz9Jw8imjigqZ3TqK4i2aGd1pbaZWOi346f1upp5byGgrmbpI0%2B9btDbu4Qlp2FITE6WVIbD7XYW8uZInLU3TtT1EFN8anjA6%2F1SWnfYx0KrY5caa8BNsjGA9ydCpIxTjbdYY0kGncTuhwD6rs%2BJSbl9YHeHxhYxsKsMjldACd7sOO%2Bpa6rl3frIXhsmoMtC3ns13dJkxBrwajiOEaF%2BPBXRkai3qUqSEN2K09EH7hUVeP9p06eBQfDtrKha1S%2BxabAg3xYCddxiFYtVNLy0Lasd52JE6z51LMcfOhfUshgrEdtiQ3NbA7XRRJsnQPVlv0MgI6YUrEd54Ap8wuqQhtDDPQZltHbvMVaabAiSc%2BaSLHeDB%2FWFZtOmgn8apHsxN0V6%2BZ1MPjDDJmqy9BjqkAbkOcdfb6gZiexaS23FrlnMCRMT5vt7HPzaAYv91A%2FfKFP4Z52%2FFirQmr84pt6lv4a%2BW192qTWGMVI4FXW22SpkGSOIPWfGg5H5m8fUAORa7JdKy3cZS1NJRAvtNuO8%2FfBge7ijKZk92VYXBzDHGNVggNQcmVoM4flTjjvbRjjxZuXT%2FFDHJ4TqHizVVt9tEaXTqkBANUz2eduUyVtZAZpVaKiwM&X-Amz-Signature=4153ccf0ef7139d156df100686adb43ae62cb763f6885cda2520cfe9aa188b79&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTOCMGTO%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T090819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPFH8SomPOi2vPEO6%2BAKJlPv%2FbtHoNuEGKsw43qgMfsAIhAKaHWZQLEjQj5tAHY6a249FznnofWMfBTxGUz3pgzCKKKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwT49uxb8iFO6xxva8q3APkMHXnv6bEohoJXdT6RmjMHumBcpAwHR5KFZ0f7nmcZ36kmeAYQcvbKi6j%2BkX6WGPYx4069QNtZEYUtHFHr2yJNt8N%2BwJ91XvCQBxtw3FYY%2F9%2FjBDrn%2F3kdo%2BMI%2FfQR29MCXBq8IXGWC2FfWA2ycM%2FOHSgG8W5P9SO5UavIzNzISh6%2BSpxGZgIOSnaGr5RxjzONGETkK2DJpfDsAoQaffPGEShr9xd%2BOk1I1VNglQzb5lxX8qHz9Jw8imjigqZ3TqK4i2aGd1pbaZWOi346f1upp5byGgrmbpI0%2B9btDbu4Qlp2FITE6WVIbD7XYW8uZInLU3TtT1EFN8anjA6%2F1SWnfYx0KrY5caa8BNsjGA9ydCpIxTjbdYY0kGncTuhwD6rs%2BJSbl9YHeHxhYxsKsMjldACd7sOO%2Bpa6rl3frIXhsmoMtC3ns13dJkxBrwajiOEaF%2BPBXRkai3qUqSEN2K09EH7hUVeP9p06eBQfDtrKha1S%2BxabAg3xYCddxiFYtVNLy0Lasd52JE6z51LMcfOhfUshgrEdtiQ3NbA7XRRJsnQPVlv0MgI6YUrEd54Ap8wuqQhtDDPQZltHbvMVaabAiSc%2BaSLHeDB%2FWFZtOmgn8apHsxN0V6%2BZ1MPjDDJmqy9BjqkAbkOcdfb6gZiexaS23FrlnMCRMT5vt7HPzaAYv91A%2FfKFP4Z52%2FFirQmr84pt6lv4a%2BW192qTWGMVI4FXW22SpkGSOIPWfGg5H5m8fUAORa7JdKy3cZS1NJRAvtNuO8%2FfBge7ijKZk92VYXBzDHGNVggNQcmVoM4flTjjvbRjjxZuXT%2FFDHJ4TqHizVVt9tEaXTqkBANUz2eduUyVtZAZpVaKiwM&X-Amz-Signature=5eee51e7f8a224586c580357c0122f13441e7e3268d172c277c8a2561b7e62e6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTOCMGTO%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T090819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPFH8SomPOi2vPEO6%2BAKJlPv%2FbtHoNuEGKsw43qgMfsAIhAKaHWZQLEjQj5tAHY6a249FznnofWMfBTxGUz3pgzCKKKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwT49uxb8iFO6xxva8q3APkMHXnv6bEohoJXdT6RmjMHumBcpAwHR5KFZ0f7nmcZ36kmeAYQcvbKi6j%2BkX6WGPYx4069QNtZEYUtHFHr2yJNt8N%2BwJ91XvCQBxtw3FYY%2F9%2FjBDrn%2F3kdo%2BMI%2FfQR29MCXBq8IXGWC2FfWA2ycM%2FOHSgG8W5P9SO5UavIzNzISh6%2BSpxGZgIOSnaGr5RxjzONGETkK2DJpfDsAoQaffPGEShr9xd%2BOk1I1VNglQzb5lxX8qHz9Jw8imjigqZ3TqK4i2aGd1pbaZWOi346f1upp5byGgrmbpI0%2B9btDbu4Qlp2FITE6WVIbD7XYW8uZInLU3TtT1EFN8anjA6%2F1SWnfYx0KrY5caa8BNsjGA9ydCpIxTjbdYY0kGncTuhwD6rs%2BJSbl9YHeHxhYxsKsMjldACd7sOO%2Bpa6rl3frIXhsmoMtC3ns13dJkxBrwajiOEaF%2BPBXRkai3qUqSEN2K09EH7hUVeP9p06eBQfDtrKha1S%2BxabAg3xYCddxiFYtVNLy0Lasd52JE6z51LMcfOhfUshgrEdtiQ3NbA7XRRJsnQPVlv0MgI6YUrEd54Ap8wuqQhtDDPQZltHbvMVaabAiSc%2BaSLHeDB%2FWFZtOmgn8apHsxN0V6%2BZ1MPjDDJmqy9BjqkAbkOcdfb6gZiexaS23FrlnMCRMT5vt7HPzaAYv91A%2FfKFP4Z52%2FFirQmr84pt6lv4a%2BW192qTWGMVI4FXW22SpkGSOIPWfGg5H5m8fUAORa7JdKy3cZS1NJRAvtNuO8%2FfBge7ijKZk92VYXBzDHGNVggNQcmVoM4flTjjvbRjjxZuXT%2FFDHJ4TqHizVVt9tEaXTqkBANUz2eduUyVtZAZpVaKiwM&X-Amz-Signature=67ca3637edc61638760269b6afd86ea5637bb290ed4c744e8dbac2961245c426&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
