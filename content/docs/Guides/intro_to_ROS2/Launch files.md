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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WHPQDLB%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T003910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCPrNTdU9JBrv%2B6ZCGpBjf0cpV39KKJmGFRlDhmpZaIgIgAqlKy58WtLvk%2BzygDX%2B4N5ibKsKRTy9Gw70Q7NYS7UkqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDej%2FPdaikjsyJymYircAw8Ne%2Fa8JW2IIWT4yy7xQQiFf%2FjhM9%2F083Ng5vL9ew9uStGGy2jSCidpqXc8eQMOTPwwh9z4XEF55DIYE7tvhIygPmfi3HlQniRq%2B7%2B1R%2BL75Pne0c5u4dgJOM56YrOFEuKqGgIFU80xqp%2FoUCq5m3qaeuLuA9d%2ByI6vIlEZ%2Fzw5dqtAkOQXBHk7BW0isTK5gXBIFc4Sr4cnG06OGRR5RJhsH0Dei2iNkzXwwUsjOwEKqu7K6dAFvkwTzev0Q73YAocplYl9c90T69MRRHmS0Dog2o5%2F90EHIFn7uFE8r%2Fo5%2B2qebbCvY8ppmNQZpbz3ErOOYOgxeuJinhMG2%2B%2BgjAKXj%2Fr9KVi%2BQKTevIW27o7jTDWD8Qyp8hLb6qbw2ksUfYucLyf2XjBt9wP77MCGyWKuwLCOVVOwiOCdrvBHxD0poOFCfuprA3vZcBmzlbVyWDw9atiJ9zuJGA%2FsLmFAC5kAHdTf4vIR5GvYzdXn%2FkLVGP%2FkgosZQJxZ3Ihhzsh%2F2F4yiw5RtTY3vUxBzg5yrdIW1%2Fc26lMj7H3G4HDQKBSfwBb2Ms1iOTCCsSJLkoWrjFcX7TqcmW%2B9Piw9Ufj9iK1TaBBghKrWzZ7cHJsJIKhh%2Bd%2FKpGzqL%2B8lJ2OxMJ62%2BsAGOqUB%2B0vgk0xNo0jHkOliVdP0ugirFKpy6%2F%2F3Mlb2SRtYnEF6OyVIo8iIx1MglUhKLrUGZnBIvfCcFMfnfJnohJE6TwNGp30HyVUnxGbuGwP%2BvojNDW0sqJi3ZEFeoImJ8UzKnj6sKKiLI%2FFaW7EPbguMxotAqc5cHqxc8ZwpLuW%2B8oHyZz%2FGtuOi4HR22M3Ax3W4VJw1y3vNcxNL1Uf5JRLGjCh5qAFO&X-Amz-Signature=49fe131aa10f5666ec7dddba76216e6af29ce0908a41220707530dc271a872a5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WHPQDLB%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T003910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCPrNTdU9JBrv%2B6ZCGpBjf0cpV39KKJmGFRlDhmpZaIgIgAqlKy58WtLvk%2BzygDX%2B4N5ibKsKRTy9Gw70Q7NYS7UkqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDej%2FPdaikjsyJymYircAw8Ne%2Fa8JW2IIWT4yy7xQQiFf%2FjhM9%2F083Ng5vL9ew9uStGGy2jSCidpqXc8eQMOTPwwh9z4XEF55DIYE7tvhIygPmfi3HlQniRq%2B7%2B1R%2BL75Pne0c5u4dgJOM56YrOFEuKqGgIFU80xqp%2FoUCq5m3qaeuLuA9d%2ByI6vIlEZ%2Fzw5dqtAkOQXBHk7BW0isTK5gXBIFc4Sr4cnG06OGRR5RJhsH0Dei2iNkzXwwUsjOwEKqu7K6dAFvkwTzev0Q73YAocplYl9c90T69MRRHmS0Dog2o5%2F90EHIFn7uFE8r%2Fo5%2B2qebbCvY8ppmNQZpbz3ErOOYOgxeuJinhMG2%2B%2BgjAKXj%2Fr9KVi%2BQKTevIW27o7jTDWD8Qyp8hLb6qbw2ksUfYucLyf2XjBt9wP77MCGyWKuwLCOVVOwiOCdrvBHxD0poOFCfuprA3vZcBmzlbVyWDw9atiJ9zuJGA%2FsLmFAC5kAHdTf4vIR5GvYzdXn%2FkLVGP%2FkgosZQJxZ3Ihhzsh%2F2F4yiw5RtTY3vUxBzg5yrdIW1%2Fc26lMj7H3G4HDQKBSfwBb2Ms1iOTCCsSJLkoWrjFcX7TqcmW%2B9Piw9Ufj9iK1TaBBghKrWzZ7cHJsJIKhh%2Bd%2FKpGzqL%2B8lJ2OxMJ62%2BsAGOqUB%2B0vgk0xNo0jHkOliVdP0ugirFKpy6%2F%2F3Mlb2SRtYnEF6OyVIo8iIx1MglUhKLrUGZnBIvfCcFMfnfJnohJE6TwNGp30HyVUnxGbuGwP%2BvojNDW0sqJi3ZEFeoImJ8UzKnj6sKKiLI%2FFaW7EPbguMxotAqc5cHqxc8ZwpLuW%2B8oHyZz%2FGtuOi4HR22M3Ax3W4VJw1y3vNcxNL1Uf5JRLGjCh5qAFO&X-Amz-Signature=8a44c7bcbbb9b379474fa0f902346363e2010b7b3933482658acb8f2d2ee0bcc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WHPQDLB%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T003910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCPrNTdU9JBrv%2B6ZCGpBjf0cpV39KKJmGFRlDhmpZaIgIgAqlKy58WtLvk%2BzygDX%2B4N5ibKsKRTy9Gw70Q7NYS7UkqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDej%2FPdaikjsyJymYircAw8Ne%2Fa8JW2IIWT4yy7xQQiFf%2FjhM9%2F083Ng5vL9ew9uStGGy2jSCidpqXc8eQMOTPwwh9z4XEF55DIYE7tvhIygPmfi3HlQniRq%2B7%2B1R%2BL75Pne0c5u4dgJOM56YrOFEuKqGgIFU80xqp%2FoUCq5m3qaeuLuA9d%2ByI6vIlEZ%2Fzw5dqtAkOQXBHk7BW0isTK5gXBIFc4Sr4cnG06OGRR5RJhsH0Dei2iNkzXwwUsjOwEKqu7K6dAFvkwTzev0Q73YAocplYl9c90T69MRRHmS0Dog2o5%2F90EHIFn7uFE8r%2Fo5%2B2qebbCvY8ppmNQZpbz3ErOOYOgxeuJinhMG2%2B%2BgjAKXj%2Fr9KVi%2BQKTevIW27o7jTDWD8Qyp8hLb6qbw2ksUfYucLyf2XjBt9wP77MCGyWKuwLCOVVOwiOCdrvBHxD0poOFCfuprA3vZcBmzlbVyWDw9atiJ9zuJGA%2FsLmFAC5kAHdTf4vIR5GvYzdXn%2FkLVGP%2FkgosZQJxZ3Ihhzsh%2F2F4yiw5RtTY3vUxBzg5yrdIW1%2Fc26lMj7H3G4HDQKBSfwBb2Ms1iOTCCsSJLkoWrjFcX7TqcmW%2B9Piw9Ufj9iK1TaBBghKrWzZ7cHJsJIKhh%2Bd%2FKpGzqL%2B8lJ2OxMJ62%2BsAGOqUB%2B0vgk0xNo0jHkOliVdP0ugirFKpy6%2F%2F3Mlb2SRtYnEF6OyVIo8iIx1MglUhKLrUGZnBIvfCcFMfnfJnohJE6TwNGp30HyVUnxGbuGwP%2BvojNDW0sqJi3ZEFeoImJ8UzKnj6sKKiLI%2FFaW7EPbguMxotAqc5cHqxc8ZwpLuW%2B8oHyZz%2FGtuOi4HR22M3Ax3W4VJw1y3vNcxNL1Uf5JRLGjCh5qAFO&X-Amz-Signature=fc557be04af5a23153836b92f82da16daf63e81d0206b1cb02e80f6a2095244a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
