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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W4IOMG4%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGiZROS4hB3g0%2BNWKEoTPyt6JxVVWQh%2FRDQIj1IjNzFoAiEAvZfZR78GZwEtevbfDjD24uExKUX4CdcGIJ6hhKLiMqIqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnbsXdIhEI1909elSrcAwjgNlK952%2FkjlKm6oNTUdzTTwnrlXWklPTJj8DLXrMbIq5aWRPFwisMDtu05baLlRIAPv3GPhBjrFHG2mb75uPJf3HS1UyXpy5g7zTufF6vG2ToFhhcYml696%2BIbAuGcNERxALdRWqGKdVL4hJshVlOGNVJyqU4XJFnqAiXUBMY9YVYbdNtmzK7CaSSJp1laQm%2BULKvsxpZ3lFxtiirtGsZKQg1JNz0sMG4YbLL2zJgWgNK0P1LtCn2Ju6mdzpCd8elP7gMLqjOmGkXHa%2FFbr9INurG4Hw%2FwKJP4zeBAnTX%2B7yoiglWDvWvbe3nut32Ds6wxIVZCtifKRXc8W2JGR9M6O0QEpLlXTnW9le2OoN3MJtsZ18y94%2BZMz0wAG7%2B3EKHc7v9raYzU753CZhtTexZwXEufFcRbFHAWUdSxy%2FuLAHWQxBANZi6YL4zG4rtC7KBOC%2FHG0bpgOJq1t33T65ozvFq4EOxzIHVBvEtoqUUjVHce5sLnrY%2BM5azUaVnjA%2FrEIv7WH3TDj0ycS7tvoiXS6KqVBdD8tSesyPor3wTMWr%2BLOAN0AkA1qMJPsiZdV0XEZQ8tyOWcZGvpi%2BAaYDMt50hUWK6wgjaZggeWLyGmEG3vh6TS4JFV102MLHP6MMGOqUBwGknLCIX6wvyEl%2Fc7Muyj7TnWpz%2FkFmxCb%2Bv9W3%2BENoTvwPkD%2FmE%2F%2F%2FN%2BetNQAyP8ja4XhZFFYgQnIhj8vIoAW4dOlhD3I444Y7jijHaiqCdD2flRKtArBOXJocf0ySKeNEH5XOdL%2FA%2BS4cgVw9qZSfZdW2c51hJEmGW0NdGUX2pjvEzUd%2FYokAclF40I8hiM3TO2QaFin2nu9NGPpQv6BV%2BnhL5&X-Amz-Signature=6043dc1aa1794267b4acecc906714ffc584a0985c8f3dac888eda9ba077c98d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W4IOMG4%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGiZROS4hB3g0%2BNWKEoTPyt6JxVVWQh%2FRDQIj1IjNzFoAiEAvZfZR78GZwEtevbfDjD24uExKUX4CdcGIJ6hhKLiMqIqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnbsXdIhEI1909elSrcAwjgNlK952%2FkjlKm6oNTUdzTTwnrlXWklPTJj8DLXrMbIq5aWRPFwisMDtu05baLlRIAPv3GPhBjrFHG2mb75uPJf3HS1UyXpy5g7zTufF6vG2ToFhhcYml696%2BIbAuGcNERxALdRWqGKdVL4hJshVlOGNVJyqU4XJFnqAiXUBMY9YVYbdNtmzK7CaSSJp1laQm%2BULKvsxpZ3lFxtiirtGsZKQg1JNz0sMG4YbLL2zJgWgNK0P1LtCn2Ju6mdzpCd8elP7gMLqjOmGkXHa%2FFbr9INurG4Hw%2FwKJP4zeBAnTX%2B7yoiglWDvWvbe3nut32Ds6wxIVZCtifKRXc8W2JGR9M6O0QEpLlXTnW9le2OoN3MJtsZ18y94%2BZMz0wAG7%2B3EKHc7v9raYzU753CZhtTexZwXEufFcRbFHAWUdSxy%2FuLAHWQxBANZi6YL4zG4rtC7KBOC%2FHG0bpgOJq1t33T65ozvFq4EOxzIHVBvEtoqUUjVHce5sLnrY%2BM5azUaVnjA%2FrEIv7WH3TDj0ycS7tvoiXS6KqVBdD8tSesyPor3wTMWr%2BLOAN0AkA1qMJPsiZdV0XEZQ8tyOWcZGvpi%2BAaYDMt50hUWK6wgjaZggeWLyGmEG3vh6TS4JFV102MLHP6MMGOqUBwGknLCIX6wvyEl%2Fc7Muyj7TnWpz%2FkFmxCb%2Bv9W3%2BENoTvwPkD%2FmE%2F%2F%2FN%2BetNQAyP8ja4XhZFFYgQnIhj8vIoAW4dOlhD3I444Y7jijHaiqCdD2flRKtArBOXJocf0ySKeNEH5XOdL%2FA%2BS4cgVw9qZSfZdW2c51hJEmGW0NdGUX2pjvEzUd%2FYokAclF40I8hiM3TO2QaFin2nu9NGPpQv6BV%2BnhL5&X-Amz-Signature=b7696b720bf4fd12c10c29cc7dfbb72d22781d7ce4154521fa01bb169d0faa4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W4IOMG4%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGiZROS4hB3g0%2BNWKEoTPyt6JxVVWQh%2FRDQIj1IjNzFoAiEAvZfZR78GZwEtevbfDjD24uExKUX4CdcGIJ6hhKLiMqIqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnbsXdIhEI1909elSrcAwjgNlK952%2FkjlKm6oNTUdzTTwnrlXWklPTJj8DLXrMbIq5aWRPFwisMDtu05baLlRIAPv3GPhBjrFHG2mb75uPJf3HS1UyXpy5g7zTufF6vG2ToFhhcYml696%2BIbAuGcNERxALdRWqGKdVL4hJshVlOGNVJyqU4XJFnqAiXUBMY9YVYbdNtmzK7CaSSJp1laQm%2BULKvsxpZ3lFxtiirtGsZKQg1JNz0sMG4YbLL2zJgWgNK0P1LtCn2Ju6mdzpCd8elP7gMLqjOmGkXHa%2FFbr9INurG4Hw%2FwKJP4zeBAnTX%2B7yoiglWDvWvbe3nut32Ds6wxIVZCtifKRXc8W2JGR9M6O0QEpLlXTnW9le2OoN3MJtsZ18y94%2BZMz0wAG7%2B3EKHc7v9raYzU753CZhtTexZwXEufFcRbFHAWUdSxy%2FuLAHWQxBANZi6YL4zG4rtC7KBOC%2FHG0bpgOJq1t33T65ozvFq4EOxzIHVBvEtoqUUjVHce5sLnrY%2BM5azUaVnjA%2FrEIv7WH3TDj0ycS7tvoiXS6KqVBdD8tSesyPor3wTMWr%2BLOAN0AkA1qMJPsiZdV0XEZQ8tyOWcZGvpi%2BAaYDMt50hUWK6wgjaZggeWLyGmEG3vh6TS4JFV102MLHP6MMGOqUBwGknLCIX6wvyEl%2Fc7Muyj7TnWpz%2FkFmxCb%2Bv9W3%2BENoTvwPkD%2FmE%2F%2F%2FN%2BetNQAyP8ja4XhZFFYgQnIhj8vIoAW4dOlhD3I444Y7jijHaiqCdD2flRKtArBOXJocf0ySKeNEH5XOdL%2FA%2BS4cgVw9qZSfZdW2c51hJEmGW0NdGUX2pjvEzUd%2FYokAclF40I8hiM3TO2QaFin2nu9NGPpQv6BV%2BnhL5&X-Amz-Signature=3dcab2cd5e1aff3aa92fa82329408be9859e28221d0e08b511847c3ae7604877&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
