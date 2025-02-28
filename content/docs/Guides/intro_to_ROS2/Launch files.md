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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL7THYPS%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T200845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCZymvN3lvXKxEjXC0Fj6X0lvo1eeknO%2FTs%2FTE897Ou%2BwIhAM%2BPE3xRMX4fD%2B2ipJweSozsd9uZ7GFNW3OmUASte2NtKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNil77s3lSSProIo8q3AMkk870y6C83q%2BTCUYSRPx1oLywkkEnu2rhCL1inz84Ey%2Bv5rKkTuwytLB6JnCQ8%2F99zm4O150NQBKq2Gnu8jib%2BC5u%2Fj1yXfxwE95o1WAWajBh1A7lIMkpc0CNzRMDlDMG8UyAGnV1iRZ81a9Am3kxaNqCrK0zhIEHM7DTcsN73jTfkCAsFL5u74QJLmQTeFvdZ4I7p0Kiy0zfa9QaXATSawt0F10wkd4BdKmEbSQFYCxGrpPH5nZF%2BnPNaBBU0%2B0t83K2uXXI22Du6K4L0sTr7C2okiDZp7QHU7Ql86L2nT%2BaBViM1SF2rakzM4jhqcLr7sQwGZCBPwEaxExXYUFHasnw1rkvHvy1JgoZx7fRWdSpRdOeOifpdtM6ugUnW%2FwPRB0sfcCK%2F6QgWgpq4CEHM0CwFyqMEf8rbEcZ%2FEUiox6ANqo77dROawHwpHJDXyFZ8nlHq9oTjTHFP1kZb3rUukPr5oaz338HQTqbGO7mDzXwq99SbILLh%2FqYP%2B%2Bsqo0HPQ3s6%2ByQmvVCX6KBRnM%2Fcf5TcmsFx%2B5wJbNsWJ4g3%2BM67tiUlRQUcwq5%2BUqCo9OIR%2F101kjm%2FX0fbw0VH0wG%2F6WMWJKU%2B7Yk%2Bf8nPkNlMM96UG4qJs08h5PGxzDei4i%2BBjqkAVkttRMU0riLK%2FQGsdrz8jbuMtPXMyZJMLh5qHNo4FFG64NthOjh3Jt1wdvDhJTkrenRN0dQD3tdzG544CPHGIIT36TckN3rRYfrxHZcvGD8JGnPQVxxDeFNlDKt%2FH0jatmuYaV4zZgy8e%2FMOd1Ys2Stti0cwgpHEg1T%2FhmXOqpPzphsF%2Brn5iHb45ff9K2X08w8dGGmZ7vIuf2mJlFe4aFgAf%2Fg&X-Amz-Signature=dd5cba7148828e7a237d31eef3af782c4c0748751ba5be7abd6e9f19e6b8280d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL7THYPS%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T200845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCZymvN3lvXKxEjXC0Fj6X0lvo1eeknO%2FTs%2FTE897Ou%2BwIhAM%2BPE3xRMX4fD%2B2ipJweSozsd9uZ7GFNW3OmUASte2NtKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNil77s3lSSProIo8q3AMkk870y6C83q%2BTCUYSRPx1oLywkkEnu2rhCL1inz84Ey%2Bv5rKkTuwytLB6JnCQ8%2F99zm4O150NQBKq2Gnu8jib%2BC5u%2Fj1yXfxwE95o1WAWajBh1A7lIMkpc0CNzRMDlDMG8UyAGnV1iRZ81a9Am3kxaNqCrK0zhIEHM7DTcsN73jTfkCAsFL5u74QJLmQTeFvdZ4I7p0Kiy0zfa9QaXATSawt0F10wkd4BdKmEbSQFYCxGrpPH5nZF%2BnPNaBBU0%2B0t83K2uXXI22Du6K4L0sTr7C2okiDZp7QHU7Ql86L2nT%2BaBViM1SF2rakzM4jhqcLr7sQwGZCBPwEaxExXYUFHasnw1rkvHvy1JgoZx7fRWdSpRdOeOifpdtM6ugUnW%2FwPRB0sfcCK%2F6QgWgpq4CEHM0CwFyqMEf8rbEcZ%2FEUiox6ANqo77dROawHwpHJDXyFZ8nlHq9oTjTHFP1kZb3rUukPr5oaz338HQTqbGO7mDzXwq99SbILLh%2FqYP%2B%2Bsqo0HPQ3s6%2ByQmvVCX6KBRnM%2Fcf5TcmsFx%2B5wJbNsWJ4g3%2BM67tiUlRQUcwq5%2BUqCo9OIR%2F101kjm%2FX0fbw0VH0wG%2F6WMWJKU%2B7Yk%2Bf8nPkNlMM96UG4qJs08h5PGxzDei4i%2BBjqkAVkttRMU0riLK%2FQGsdrz8jbuMtPXMyZJMLh5qHNo4FFG64NthOjh3Jt1wdvDhJTkrenRN0dQD3tdzG544CPHGIIT36TckN3rRYfrxHZcvGD8JGnPQVxxDeFNlDKt%2FH0jatmuYaV4zZgy8e%2FMOd1Ys2Stti0cwgpHEg1T%2FhmXOqpPzphsF%2Brn5iHb45ff9K2X08w8dGGmZ7vIuf2mJlFe4aFgAf%2Fg&X-Amz-Signature=ca5df6d6c44d69a4f1e091d55fdd86d0cdcc5deeb71d187ca7fc7049d57e20ce&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL7THYPS%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T200845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCZymvN3lvXKxEjXC0Fj6X0lvo1eeknO%2FTs%2FTE897Ou%2BwIhAM%2BPE3xRMX4fD%2B2ipJweSozsd9uZ7GFNW3OmUASte2NtKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNil77s3lSSProIo8q3AMkk870y6C83q%2BTCUYSRPx1oLywkkEnu2rhCL1inz84Ey%2Bv5rKkTuwytLB6JnCQ8%2F99zm4O150NQBKq2Gnu8jib%2BC5u%2Fj1yXfxwE95o1WAWajBh1A7lIMkpc0CNzRMDlDMG8UyAGnV1iRZ81a9Am3kxaNqCrK0zhIEHM7DTcsN73jTfkCAsFL5u74QJLmQTeFvdZ4I7p0Kiy0zfa9QaXATSawt0F10wkd4BdKmEbSQFYCxGrpPH5nZF%2BnPNaBBU0%2B0t83K2uXXI22Du6K4L0sTr7C2okiDZp7QHU7Ql86L2nT%2BaBViM1SF2rakzM4jhqcLr7sQwGZCBPwEaxExXYUFHasnw1rkvHvy1JgoZx7fRWdSpRdOeOifpdtM6ugUnW%2FwPRB0sfcCK%2F6QgWgpq4CEHM0CwFyqMEf8rbEcZ%2FEUiox6ANqo77dROawHwpHJDXyFZ8nlHq9oTjTHFP1kZb3rUukPr5oaz338HQTqbGO7mDzXwq99SbILLh%2FqYP%2B%2Bsqo0HPQ3s6%2ByQmvVCX6KBRnM%2Fcf5TcmsFx%2B5wJbNsWJ4g3%2BM67tiUlRQUcwq5%2BUqCo9OIR%2F101kjm%2FX0fbw0VH0wG%2F6WMWJKU%2B7Yk%2Bf8nPkNlMM96UG4qJs08h5PGxzDei4i%2BBjqkAVkttRMU0riLK%2FQGsdrz8jbuMtPXMyZJMLh5qHNo4FFG64NthOjh3Jt1wdvDhJTkrenRN0dQD3tdzG544CPHGIIT36TckN3rRYfrxHZcvGD8JGnPQVxxDeFNlDKt%2FH0jatmuYaV4zZgy8e%2FMOd1Ys2Stti0cwgpHEg1T%2FhmXOqpPzphsF%2Brn5iHb45ff9K2X08w8dGGmZ7vIuf2mJlFe4aFgAf%2Fg&X-Amz-Signature=12be4baf1749afe7a6d8fc65d0804f009e49d4c88177226bd5c5e892fcac97fd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
